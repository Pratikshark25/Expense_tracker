const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const zlib = require('zlib');
const { protect } = require('../middleware/auth');
const { extractTransactions } = require('../services/aiService');
const Transaction = require('../models/Transaction');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = 'uploads/';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) =>
    file.mimetype === 'application/pdf' ? cb(null, true) : cb(new Error('Only PDF files allowed'), false),
  limits: { fileSize: 10 * 1024 * 1024 },
});

function hexToUnicode(hex) {
  const clean = (hex || '').replace(/[^0-9A-Fa-f]/g, '').toUpperCase();
  if (!clean) return '';

  const chars = [];
  if (clean.length % 4 === 0) {
    for (let i = 0; i < clean.length; i += 4) {
      const cp = parseInt(clean.slice(i, i + 4), 16);
      if (!Number.isNaN(cp)) chars.push(String.fromCodePoint(cp));
    }
    return chars.join('');
  }

  for (let i = 0; i + 1 < clean.length; i += 2) {
    const b = parseInt(clean.slice(i, i + 2), 16);
    if (!Number.isNaN(b)) chars.push(String.fromCharCode(b));
  }
  return chars.join('');
}

function extractCMaps(pdfBuffer) {
  const raw = pdfBuffer.toString('latin1');
  const cmaps = [];
  const cmapRe = /begincmap([\s\S]*?)endcmap/g;

  let cmapMatch;
  while ((cmapMatch = cmapRe.exec(raw)) !== null) {
    const body = cmapMatch[1];
    const map = {};

    const bfcharRe = /beginbfchar([\s\S]*?)endbfchar/g;
    let bfcharMatch;
    while ((bfcharMatch = bfcharRe.exec(body)) !== null) {
      for (const pair of bfcharMatch[1].matchAll(/<([0-9A-Fa-f]+)>\s+<([0-9A-Fa-f]+)>/g)) {
        const from = pair[1].toUpperCase();
        map[from] = hexToUnicode(pair[2]);
      }
    }

    const bfrangeRe = /beginbfrange([\s\S]*?)endbfrange/g;
    let bfrangeMatch;
    while ((bfrangeMatch = bfrangeRe.exec(body)) !== null) {
      const section = bfrangeMatch[1];

      for (const listRange of section.matchAll(/<([0-9A-Fa-f]+)>\s+<([0-9A-Fa-f]+)>\s+\[([^\]]+)]/g)) {
        const start = parseInt(listRange[1], 16);
        const end = parseInt(listRange[2], 16);
        const values = [...listRange[3].matchAll(/<([0-9A-Fa-f]+)>/g)].map((m) => hexToUnicode(m[1]));
        if (Number.isNaN(start) || Number.isNaN(end)) continue;

        for (let code = start, i = 0; code <= end && i < values.length; code += 1, i += 1) {
          map[code.toString(16).toUpperCase().padStart(listRange[1].length, '0')] = values[i];
        }
      }

      for (const seqRange of section.matchAll(/<([0-9A-Fa-f]+)>\s+<([0-9A-Fa-f]+)>\s+<([0-9A-Fa-f]+)>/g)) {
        const srcStartHex = seqRange[1].toUpperCase();
        const srcEndHex = seqRange[2].toUpperCase();
        const dstStartHex = seqRange[3].toUpperCase();

        const srcStart = parseInt(srcStartHex, 16);
        const srcEnd = parseInt(srcEndHex, 16);
        let dst = parseInt(dstStartHex, 16);

        if (Number.isNaN(srcStart) || Number.isNaN(srcEnd) || Number.isNaN(dst)) continue;

        for (let code = srcStart; code <= srcEnd; code += 1, dst += 1) {
          map[code.toString(16).toUpperCase().padStart(srcStartHex.length, '0')] =
            String.fromCodePoint(dst);
        }
      }
    }

    if (Object.keys(map).length) {
      cmaps.push({
        map,
        keyLengths: [...new Set(Object.keys(map).map((k) => k.length))].sort((a, b) => b - a),
      });
    }
  }

  return cmaps;
}

function decodeHexTokenWithCMap(hex, cmapObj) {
  const token = (hex || '').replace(/[^0-9A-Fa-f]/g, '').toUpperCase();
  if (!token) return '';

  const { map, keyLengths } = cmapObj;
  let out = '';
  let idx = 0;

  while (idx < token.length) {
    let consumed = false;

    for (const len of keyLengths) {
      if (idx + len > token.length) continue;
      const key = token.slice(idx, idx + len);
      if (Object.prototype.hasOwnProperty.call(map, key)) {
        out += map[key];
        idx += len;
        consumed = true;
        break;
      }
    }

    if (consumed) continue;

    if (idx + 2 <= token.length) {
      const byte = parseInt(token.slice(idx, idx + 2), 16);
      if (!Number.isNaN(byte) && byte >= 0x20 && byte <= 0x7e) out += String.fromCharCode(byte);
      idx += 2;
    } else {
      break;
    }
  }

  return out;
}

function decodePdfLiteralString(input) {
  if (!input) return '';
  let s = input;
  s = s.replace(/\\\r\n/g, '');
  s = s.replace(/\\\n/g, '');
  s = s.replace(/\\\r/g, '');
  s = s.replace(/\\n/g, '\n');
  s = s.replace(/\\r/g, '\r');
  s = s.replace(/\\t/g, '\t');
  s = s.replace(/\\b/g, '\b');
  s = s.replace(/\\f/g, '\f');
  s = s.replace(/\\\(/g, '(').replace(/\\\)/g, ')').replace(/\\\\/g, '\\');
  s = s.replace(/\\([0-7]{1,3})/g, (_, oct) => String.fromCharCode(parseInt(oct, 8)));
  return s;
}

function decodeUsingCMaps(hex, cmaps) {
  if (!hex || !cmaps.length) return '';
  let best = '';
  for (const cmap of cmaps) {
    const decoded = decodeHexTokenWithCMap(hex, cmap);
    if (decoded.length > best.length) best = decoded;
  }
  return best;
}

function extractReadableStreamText(streamContent, cmaps) {
  const blocks = streamContent.match(/BT[\s\S]*?ET/g) || [];
  const lines = [];

  for (const block of blocks) {
    const parts = [];

    for (const arrMatch of block.matchAll(/\[([\s\S]*?)]\s*TJ/g)) {
      const arr = arrMatch[1];
      for (const tokenMatch of arr.matchAll(/<([0-9A-Fa-f]+)>|\(((?:\\.|[^\\)])*)\)/g)) {
        if (tokenMatch[1]) {
          const decoded = decodeUsingCMaps(tokenMatch[1], cmaps);
          if (decoded) parts.push(decoded);
        } else if (tokenMatch[2]) {
          parts.push(decodePdfLiteralString(tokenMatch[2]));
        }
      }
      parts.push(' ');
    }

    for (const opMatch of block.matchAll(/(<[0-9A-Fa-f]+>|\((?:\\.|[^\\)])*\))\s*(?:Tj|'|")/g)) {
      const token = opMatch[1];
      if (token.startsWith('<')) {
        const hex = token.slice(1, -1);
        const decoded = decodeUsingCMaps(hex, cmaps);
        if (decoded) parts.push(decoded);
      } else {
        parts.push(decodePdfLiteralString(token.slice(1, -1)));
      }
      parts.push(' ');
    }

    const line = parts
      .join('')
      .replace(/[\u0000-\u001F]+/g, ' ')
      .replace(/[ \t]+/g, ' ')
      .trim();

    if (line) lines.push(line);
  }

  return lines;
}

function decodePdfStreams(pdfBuffer, cmaps) {
  const raw = pdfBuffer.toString('latin1');
  const lines = [];

  for (const streamMatch of raw.matchAll(/stream\r?\n([\s\S]*?)\r?\nendstream/g)) {
    let content;
    try {
      content = zlib.inflateSync(Buffer.from(streamMatch[1], 'latin1')).toString('latin1');
    } catch {
      content = streamMatch[1];
    }

    const extracted = extractReadableStreamText(content, cmaps);
    if (extracted.length) lines.push(...extracted);
  }

  return lines;
}

function parseTransactions(text) {
  const transactions = [];
  const norm = text
    .replace(/[ \t]+/g, ' ')
    .replace(/\r/g, '')
    .replace(/[\u00A0]/g, ' ')
    .trim();

  const parseDetail = (line) => {
    if (!line) return null;
    const a = line.match(
      /(Paid to|Received from|Payment to|Transfer to)\s+(.+?)\s+(DEBIT|CREDIT)\s+(?:Rs\.?|INR|\u20B9)?\s*([\d,]+(?:\.\d{1,2})?)/i
    );
    if (a) {
      return {
        merchant: a[2].trim(),
        type: a[3].toUpperCase() === 'CREDIT' ? 'Credit' : 'Debit',
        amount: parseFloat(a[4].replace(/,/g, '')),
      };
    }
    const b = line.match(
      /(DEBIT|CREDIT)\s*(?:Rs\.?|INR|\u20B9)?\s*([\d,]+(?:\.\d{1,2})?)\s*(Paid to|Received from|Payment to|Transfer to)\s+(.+)/i
    );
    if (b) {
      return {
        merchant: b[4].trim(),
        type: b[1].toUpperCase() === 'CREDIT' ? 'Credit' : 'Debit',
        amount: parseFloat(b[2].replace(/,/g, '')),
      };
    }

    return null;
  };

  const blockRe =
    /((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},\s+\d{4})\n\d{1,2}:\d{2}\s+(?:am|pm)\n([\s\S]+?)(?=\n(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},|\s*$)/gi;

  let blockMatch;
  while ((blockMatch = blockRe.exec(norm)) !== null) {
    const date = parseDate(blockMatch[1]);
    if (!date) continue;
    const detail = parseDetail(blockMatch[2]);
    if (!detail) continue;

    if (Number.isNaN(detail.amount) || detail.amount <= 0) continue;

    transactions.push({
      date,
      merchant: detail.merchant,
      type: detail.type,
      amount: detail.amount,
    });
  }
  if (transactions.length) return dedup(transactions);

  const inlineRe =
    /((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},\s+\d{4})\s+\d{1,2}:\d{2}\s+(?:am|pm)\s+(?:Paid to|Received from|Payment to|Transfer to)\s+(.+?)\s+(DEBIT|CREDIT)\s+(?:Rs\.?|INR|\u20B9)?\s*([\d,]+(?:\.\d{1,2})?)(?=\s|$)/gi;

  let inlineMatch;
  while ((inlineMatch = inlineRe.exec(norm)) !== null) {
    const date = parseDate(inlineMatch[1]);
    const amount = parseFloat(inlineMatch[4].replace(/,/g, ''));
    if (!date || Number.isNaN(amount) || amount <= 0) continue;

    transactions.push({
      date,
      merchant: inlineMatch[2].trim(),
      type: inlineMatch[3].toUpperCase() === 'CREDIT' ? 'Credit' : 'Debit',
      amount,
    });
  }
  if (transactions.length) return dedup(transactions);
  const inlineCompactRe =
    /((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},\s+\d{4})\s+\d{1,2}:\d{2}\s+(?:am|pm)\s+(DEBIT|CREDIT)\s*(?:Rs\.?|INR|\u20B9)?\s*([\d,]+(?:\.\d{1,2})?)\s*(?:Paid to|Received from|Payment to|Transfer to)\s+(.+?)(?=\s|$)/gi;

  let compactMatch;
  while ((compactMatch = inlineCompactRe.exec(norm)) !== null) {
    const date = parseDate(compactMatch[1]);
    const amount = parseFloat(compactMatch[3].replace(/,/g, ''));
    if (!date || Number.isNaN(amount) || amount <= 0) continue;

    transactions.push({
      date,
      merchant: compactMatch[4].trim(),
      type: compactMatch[2].toUpperCase() === 'CREDIT' ? 'Credit' : 'Debit',
      amount,
    });
  }
  if (transactions.length) return dedup(transactions);

  const lines = norm.split('\n').map((l) => l.trim()).filter(Boolean);
  const datePat = /^((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},\s+\d{4})$/i;

  for (let i = 0; i < lines.length; i += 1) {
    const dateMatch = lines[i].match(datePat);
    if (!dateMatch) continue;

    const date = parseDate(dateMatch[1]);
    if (!date) continue;

    for (let j = i + 1; j < Math.min(i + 8, lines.length); j += 1) {
      const detail = parseDetail(lines[j]);
      if (!detail) continue;

      if (Number.isNaN(detail.amount) || detail.amount <= 0) break;

      transactions.push({
        date,
        merchant: detail.merchant,
        type: detail.type,
        amount: detail.amount,
      });
      break;
    }
  }

  return dedup(transactions);
}

function parseDate(raw) {
  if (!raw) return null;
  const c = raw.replace(/\s+/g, ' ').replace(/\//g, '-').trim();
  const months = {
    jan: '01',
    feb: '02',
    mar: '03',
    apr: '04',
    may: '05',
    jun: '06',
    jul: '07',
    aug: '08',
    sep: '09',
    oct: '10',
    nov: '11',
    dec: '12',
  };

  const pad = (n) => String(n).padStart(2, '0');
  const validYmd = (y, m, d) => {
    const yi = Number(y);
    const mi = Number(m);
    const di = Number(d);
    if (!Number.isInteger(yi) || !Number.isInteger(mi) || !Number.isInteger(di)) return false;
    if (yi < 1900 || yi > 2100 || mi < 1 || mi > 12 || di < 1 || di > 31) return false;
    const dt = new Date(Date.UTC(yi, mi - 1, di));
    return dt.getUTCFullYear() === yi && dt.getUTCMonth() === mi - 1 && dt.getUTCDate() === di;
  };

  let m = c.match(/^([A-Za-z]{3,9})\s+(\d{1,2}),?\s+(\d{4})$/);
  if (m) {
    const mon = months[m[1].slice(0, 3).toLowerCase()];
    const day = pad(m[2]);
    const year = m[3];
    if (mon && validYmd(year, mon, day)) return `${year}-${mon}-${day}`;
  }

  m = c.match(/^(\d{1,2})\s+([A-Za-z]{3,9})\s+(\d{4})$/);
  if (m) {
    const day = pad(m[1]);
    const mon = months[m[2].slice(0, 3).toLowerCase()];
    const year = m[3];
    if (mon && validYmd(year, mon, day)) return `${year}-${mon}-${day}`;
  }

  m = c.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (m && validYmd(m[1], m[2], m[3])) return `${m[1]}-${m[2]}-${m[3]}`;

  m = c.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (m && validYmd(m[3], m[2], m[1])) return `${m[3]}-${m[2]}-${m[1]}`;

  m = c.match(/^(\d{2})-(\d{2})-(\d{2})$/);
  if (m) {
    const year = `20${m[3]}`;
    if (validYmd(year, m[2], m[1])) return `${year}-${m[2]}-${m[1]}`;
  }

  return null;
}

function dedup(transactions) {
  const seen = new Set();
  return transactions.filter((t) => {
    const key = `${t.date}|${t.merchant}|${t.amount}|${t.type}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function normalizeAmount(amount) {
  const parsed = parseFloat(String(amount || '').replace(/[^0-9.-]/g, ''));
  return Number.isFinite(parsed) ? Math.abs(parsed) : NaN;
}

function normalizeType(type) {
  const text = String(type || '').toLowerCase();
  if (text.includes('credit')) return 'Credit';
  if (text.includes('debit')) return 'Debit';
  return null;
}

function normalizeAiTransactions(items) {
  if (!Array.isArray(items)) return [];

  const transactions = items
    .map((item) => {
      const date = parseDate(item.date);
      const merchant = String(item.merchant || item.description || '').trim();
      const amount = normalizeAmount(item.amount);
      const type = normalizeType(item.type);

      if (!date || !merchant || !type || Number.isNaN(amount) || amount <= 0) return null;

      return {
        date,
        merchant,
        type,
        amount,
      };
    })
    .filter(Boolean);

  return dedup(transactions);
}

function transactionDateKey(date) {
  const d = new Date(date);
  return Number.isNaN(d.getTime()) ? null : d.toISOString().slice(0, 10);
}

function transactionKey(t) {
  return [
    transactionDateKey(t.date),
    String(t.merchant || '').trim().toLowerCase(),
    String(t.type || '').trim(),
    Number(t.amount || 0).toFixed(2),
  ].join('|');
}

async function removeAlreadyUploadedTransactions(userId, transactions) {
  const uniqueTransactions = dedup(transactions);
  const dateKeys = [...new Set(uniqueTransactions.map((t) => transactionDateKey(t.date)).filter(Boolean))].sort();

  if (!dateKeys.length) {
    return {
      transactions: uniqueTransactions,
      skippedExisting: 0,
      skippedDuplicateInUpload: transactions.length - uniqueTransactions.length,
    };
  }

  const existing = await Transaction.find({
    userId,
    date: {
      $gte: new Date(`${dateKeys[0]}T00:00:00.000Z`),
      $lte: new Date(`${dateKeys[dateKeys.length - 1]}T23:59:59.999Z`),
    },
  }).select('date merchant type amount');

  const existingKeys = new Set(existing.map((t) => transactionKey(t)));
  const filtered = uniqueTransactions.filter((t) => !existingKeys.has(transactionKey(t)));

  return {
    transactions: filtered,
    skippedExisting: uniqueTransactions.length - filtered.length,
    skippedDuplicateInUpload: transactions.length - uniqueTransactions.length,
  };
}

router.post('/', protect, upload.single('pdf'), async (req, res) => {
  let filePath = null;
  try {
    if (!req.file) return res.status(400).json({ message: 'No PDF file uploaded' });

    filePath = req.file.path;
    const pdfBuffer = fs.readFileSync(filePath);

    let transactions = [];

    try {
      const pdfParse = require('pdf-parse');
      const { text } = await pdfParse(pdfBuffer);
      if (text && text.trim().length > 50) {
        try {
          transactions = normalizeAiTransactions(await extractTransactions(text));
        } catch {
          transactions = [];
        }

        if (!transactions.length) transactions = parseTransactions(text);
      }
    } catch {
    }

    if (!transactions.length) {
      try {
        const cmaps = extractCMaps(pdfBuffer);
        if (cmaps.length) {
          const streamLines = decodePdfStreams(pdfBuffer, cmaps);
          const joined = streamLines.join('\n');
          if (joined.trim().length > 20) transactions = parseTransactions(joined);
        }
      } catch {
      }
    }

    if (!transactions.length) {
      try {
        const raw = pdfBuffer.toString('latin1');
        let asciiDump = '';

        for (const streamMatch of raw.matchAll(/stream\r?\n([\s\S]*?)\r?\nendstream/g)) {
          try {
            const dec = zlib.inflateSync(Buffer.from(streamMatch[1], 'latin1')).toString('utf8');
            asciiDump += dec.replace(/[^\x20-\x7E\n]/g, ' ') + '\n';
          } catch {
          }
        }

        if (asciiDump.trim().length > 20) transactions = parseTransactions(asciiDump);
      } catch {
      }
    }

    if (filePath && fs.existsSync(filePath)) fs.unlinkSync(filePath);

    if (!transactions.length) {
      return res.status(422).json({
        message: 'PDF parsed but no transactions were detected. Please verify this is a transaction statement PDF.',
      });
    }

    const filtered = await removeAlreadyUploadedTransactions(req.user._id, transactions);

    return res.json({
      transactions: filtered.transactions,
      count: filtered.transactions.length,
      skippedExisting: filtered.skippedExisting,
      skippedDuplicateInUpload: filtered.skippedDuplicateInUpload,
      uploadedAt: new Date().toISOString(),
    });
  } catch (err) {
    if (filePath && fs.existsSync(filePath)) fs.unlinkSync(filePath);
    return res.status(500).json({ message: err.message });
  }
});

router.post('/text', protect, async (req, res) => {
  try {
    const { text } = req.body;
    if (!text || text.trim().length < 10) {
      return res.status(400).json({ message: 'No text provided' });
    }

    const transactions = parseTransactions(text);
    if (!transactions.length) {
      return res.status(422).json({
        message: 'No transactions found in pasted text. Make sure to copy the full statement.',
      });
    }

    const filtered = await removeAlreadyUploadedTransactions(req.user._id, transactions);

    return res.json({
      transactions: filtered.transactions,
      count: filtered.transactions.length,
      skippedExisting: filtered.skippedExisting,
      skippedDuplicateInUpload: filtered.skippedDuplicateInUpload,
      uploadedAt: new Date().toISOString(),
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;
