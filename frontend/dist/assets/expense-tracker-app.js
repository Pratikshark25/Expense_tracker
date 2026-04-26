function Q2(e12, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n) if (i !== "default" && !(i in e12)) {
        const a = Object.getOwnPropertyDescriptor(n, i);
        a && Object.defineProperty(e12, i, a.get ? a : { enumerable: true, get: () => n[i] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(e12, Symbol.toStringTag, { value: "Module" }));
}
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const a of i) if (a.type === "childList") for (const o of a.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: true, subtree: true });
  function r(i) {
    const a = {};
    return i.integrity && (a.integrity = i.integrity), i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? a.credentials = "include" : i.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
  }
  function n(i) {
    if (i.ep) return;
    i.ep = true;
    const a = r(i);
    fetch(i.href, a);
  }
})();
var Rl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function be(e12) {
  return e12 && e12.__esModule && Object.prototype.hasOwnProperty.call(e12, "default") ? e12.default : e12;
}
var lS = { exports: {} }, ff = {}, uS = { exports: {} }, ce = {};
var xl = Symbol.for("react.element"), J2 = Symbol.for("react.portal"), Z2 = Symbol.for("react.fragment"), eE = Symbol.for("react.strict_mode"), tE = Symbol.for("react.profiler"), rE = Symbol.for("react.provider"), nE = Symbol.for("react.context"), iE = Symbol.for("react.forward_ref"), aE = Symbol.for("react.suspense"), oE = Symbol.for("react.memo"), sE = Symbol.for("react.lazy"), Pg = Symbol.iterator;
function lE(e12) {
  return e12 === null || typeof e12 != "object" ? null : (e12 = Pg && e12[Pg] || e12["@@iterator"], typeof e12 == "function" ? e12 : null);
}
var cS = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, fS = Object.assign, dS = {};
function oo(e12, t, r) {
  this.props = e12, this.context = t, this.refs = dS, this.updater = r || cS;
}
oo.prototype.isReactComponent = {};
oo.prototype.setState = function(e12, t) {
  if (typeof e12 != "object" && typeof e12 != "function" && e12 != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e12, t, "setState");
};
oo.prototype.forceUpdate = function(e12) {
  this.updater.enqueueForceUpdate(this, e12, "forceUpdate");
};
function pS() {
}
pS.prototype = oo.prototype;
function fy(e12, t, r) {
  this.props = e12, this.context = t, this.refs = dS, this.updater = r || cS;
}
var dy = fy.prototype = new pS();
dy.constructor = fy;
fS(dy, oo.prototype);
dy.isPureReactComponent = true;
var Ag = Array.isArray, hS = Object.prototype.hasOwnProperty, py = { current: null }, mS = { key: true, ref: true, __self: true, __source: true };
function yS(e12, t, r) {
  var n, i = {}, a = null, o = null;
  if (t != null) for (n in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) hS.call(t, n) && !mS.hasOwnProperty(n) && (i[n] = t[n]);
  var s = arguments.length - 2;
  if (s === 1) i.children = r;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e12 && e12.defaultProps) for (n in s = e12.defaultProps, s) i[n] === void 0 && (i[n] = s[n]);
  return { $$typeof: xl, type: e12, key: a, ref: o, props: i, _owner: py.current };
}
function uE(e12, t) {
  return { $$typeof: xl, type: e12.type, key: t, ref: e12.ref, props: e12.props, _owner: e12._owner };
}
function hy(e12) {
  return typeof e12 == "object" && e12 !== null && e12.$$typeof === xl;
}
function cE(e12) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e12.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var _g = /\/+/g;
function Ed(e12, t) {
  return typeof e12 == "object" && e12 !== null && e12.key != null ? cE("" + e12.key) : t.toString(36);
}
function yu(e12, t, r, n, i) {
  var a = typeof e12;
  (a === "undefined" || a === "boolean") && (e12 = null);
  var o = false;
  if (e12 === null) o = true;
  else switch (a) {
    case "string":
    case "number":
      o = true;
      break;
    case "object":
      switch (e12.$$typeof) {
        case xl:
        case J2:
          o = true;
      }
  }
  if (o) return o = e12, i = i(o), e12 = n === "" ? "." + Ed(o, 0) : n, Ag(i) ? (r = "", e12 != null && (r = e12.replace(_g, "$&/") + "/"), yu(i, t, r, "", function(u) {
    return u;
  })) : i != null && (hy(i) && (i = uE(i, r + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(_g, "$&/") + "/") + e12)), t.push(i)), 1;
  if (o = 0, n = n === "" ? "." : n + ":", Ag(e12)) for (var s = 0; s < e12.length; s++) {
    a = e12[s];
    var l = n + Ed(a, s);
    o += yu(a, t, r, l, i);
  }
  else if (l = lE(e12), typeof l == "function") for (e12 = l.call(e12), s = 0; !(a = e12.next()).done; ) a = a.value, l = n + Ed(a, s++), o += yu(a, t, r, l, i);
  else if (a === "object") throw t = String(e12), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e12).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Dl(e12, t, r) {
  if (e12 == null) return e12;
  var n = [], i = 0;
  return yu(e12, n, "", "", function(a) {
    return t.call(r, a, i++);
  }), n;
}
function fE(e12) {
  if (e12._status === -1) {
    var t = e12._result;
    t = t(), t.then(function(r) {
      (e12._status === 0 || e12._status === -1) && (e12._status = 1, e12._result = r);
    }, function(r) {
      (e12._status === 0 || e12._status === -1) && (e12._status = 2, e12._result = r);
    }), e12._status === -1 && (e12._status = 0, e12._result = t);
  }
  if (e12._status === 1) return e12._result.default;
  throw e12._result;
}
var jt = { current: null }, vu = { transition: null }, dE = { ReactCurrentDispatcher: jt, ReactCurrentBatchConfig: vu, ReactCurrentOwner: py };
function vS() {
  throw Error("act(...) is not supported in production builds of React.");
}
ce.Children = { map: Dl, forEach: function(e12, t, r) {
  Dl(e12, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e12) {
  var t = 0;
  return Dl(e12, function() {
    t++;
  }), t;
}, toArray: function(e12) {
  return Dl(e12, function(t) {
    return t;
  }) || [];
}, only: function(e12) {
  if (!hy(e12)) throw Error("React.Children.only expected to receive a single React element child.");
  return e12;
} };
ce.Component = oo;
ce.Fragment = Z2;
ce.Profiler = tE;
ce.PureComponent = fy;
ce.StrictMode = eE;
ce.Suspense = aE;
ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dE;
ce.act = vS;
ce.cloneElement = function(e12, t, r) {
  if (e12 == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e12 + ".");
  var n = fS({}, e12.props), i = e12.key, a = e12.ref, o = e12._owner;
  if (t != null) {
    if (t.ref !== void 0 && (a = t.ref, o = py.current), t.key !== void 0 && (i = "" + t.key), e12.type && e12.type.defaultProps) var s = e12.type.defaultProps;
    for (l in t) hS.call(t, l) && !mS.hasOwnProperty(l) && (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    n.children = s;
  }
  return { $$typeof: xl, type: e12.type, key: i, ref: a, props: n, _owner: o };
};
ce.createContext = function(e12) {
  return e12 = { $$typeof: nE, _currentValue: e12, _currentValue2: e12, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e12.Provider = { $$typeof: rE, _context: e12 }, e12.Consumer = e12;
};
ce.createElement = yS;
ce.createFactory = function(e12) {
  var t = yS.bind(null, e12);
  return t.type = e12, t;
};
ce.createRef = function() {
  return { current: null };
};
ce.forwardRef = function(e12) {
  return { $$typeof: iE, render: e12 };
};
ce.isValidElement = hy;
ce.lazy = function(e12) {
  return { $$typeof: sE, _payload: { _status: -1, _result: e12 }, _init: fE };
};
ce.memo = function(e12, t) {
  return { $$typeof: oE, type: e12, compare: t === void 0 ? null : t };
};
ce.startTransition = function(e12) {
  var t = vu.transition;
  vu.transition = {};
  try {
    e12();
  } finally {
    vu.transition = t;
  }
};
ce.unstable_act = vS;
ce.useCallback = function(e12, t) {
  return jt.current.useCallback(e12, t);
};
ce.useContext = function(e12) {
  return jt.current.useContext(e12);
};
ce.useDebugValue = function() {
};
ce.useDeferredValue = function(e12) {
  return jt.current.useDeferredValue(e12);
};
ce.useEffect = function(e12, t) {
  return jt.current.useEffect(e12, t);
};
ce.useId = function() {
  return jt.current.useId();
};
ce.useImperativeHandle = function(e12, t, r) {
  return jt.current.useImperativeHandle(e12, t, r);
};
ce.useInsertionEffect = function(e12, t) {
  return jt.current.useInsertionEffect(e12, t);
};
ce.useLayoutEffect = function(e12, t) {
  return jt.current.useLayoutEffect(e12, t);
};
ce.useMemo = function(e12, t) {
  return jt.current.useMemo(e12, t);
};
ce.useReducer = function(e12, t, r) {
  return jt.current.useReducer(e12, t, r);
};
ce.useRef = function(e12) {
  return jt.current.useRef(e12);
};
ce.useState = function(e12) {
  return jt.current.useState(e12);
};
ce.useSyncExternalStore = function(e12, t, r) {
  return jt.current.useSyncExternalStore(e12, t, r);
};
ce.useTransition = function() {
  return jt.current.useTransition();
};
ce.version = "18.3.1";
uS.exports = ce;
var A = uS.exports;
const E = be(A), pE = Q2({ __proto__: null, default: E }, [A]);
var hE = A, mE = Symbol.for("react.element"), yE = Symbol.for("react.fragment"), vE = Object.prototype.hasOwnProperty, gE = hE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, bE = { key: true, ref: true, __self: true, __source: true };
function gS(e12, t, r) {
  var n, i = {}, a = null, o = null;
  r !== void 0 && (a = "" + r), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (n in t) vE.call(t, n) && !bE.hasOwnProperty(n) && (i[n] = t[n]);
  if (e12 && e12.defaultProps) for (n in t = e12.defaultProps, t) i[n] === void 0 && (i[n] = t[n]);
  return { $$typeof: mE, type: e12, key: a, ref: o, props: i, _owner: gE.current };
}
ff.Fragment = yE;
ff.jsx = gS;
ff.jsxs = gS;
lS.exports = ff;
var p = lS.exports, Rp = {}, bS = { exports: {} }, Ht = {}, xS = { exports: {} }, wS = {};
(function(e12) {
  function t(N, F) {
    var U = N.length;
    N.push(F);
    e: for (; 0 < U; ) {
      var X = U - 1 >>> 1, V = N[X];
      if (0 < i(V, F)) N[X] = F, N[U] = V, U = X;
      else break e;
    }
  }
  function r(N) {
    return N.length === 0 ? null : N[0];
  }
  function n(N) {
    if (N.length === 0) return null;
    var F = N[0], U = N.pop();
    if (U !== F) {
      N[0] = U;
      e: for (var X = 0, V = N.length, Q = V >>> 1; X < Q; ) {
        var oe = 2 * (X + 1) - 1, fe = N[oe], we = oe + 1, Ke = N[we];
        if (0 > i(fe, U)) we < V && 0 > i(Ke, fe) ? (N[X] = Ke, N[we] = U, X = we) : (N[X] = fe, N[oe] = U, X = oe);
        else if (we < V && 0 > i(Ke, U)) N[X] = Ke, N[we] = U, X = we;
        else break e;
      }
    }
    return F;
  }
  function i(N, F) {
    var U = N.sortIndex - F.sortIndex;
    return U !== 0 ? U : N.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e12.unstable_now = function() {
      return a.now();
    };
  } else {
    var o = Date, s = o.now();
    e12.unstable_now = function() {
      return o.now() - s;
    };
  }
  var l = [], u = [], f = 1, c = null, d = 3, h = false, y = false, v = false, m = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(N) {
    for (var F = r(u); F !== null; ) {
      if (F.callback === null) n(u);
      else if (F.startTime <= N) n(u), F.sortIndex = F.expirationTime, t(l, F);
      else break;
      F = r(u);
    }
  }
  function O(N) {
    if (v = false, x(N), !y) if (r(l) !== null) y = true, B(w);
    else {
      var F = r(u);
      F !== null && W(O, F.startTime - N);
    }
  }
  function w(N, F) {
    y = false, v && (v = false, g(P), P = -1), h = true;
    var U = d;
    try {
      for (x(F), c = r(l); c !== null && (!(c.expirationTime > F) || N && !C()); ) {
        var X = c.callback;
        if (typeof X == "function") {
          c.callback = null, d = c.priorityLevel;
          var V = X(c.expirationTime <= F);
          F = e12.unstable_now(), typeof V == "function" ? c.callback = V : c === r(l) && n(l), x(F);
        } else n(l);
        c = r(l);
      }
      if (c !== null) var Q = true;
      else {
        var oe = r(u);
        oe !== null && W(O, oe.startTime - F), Q = false;
      }
      return Q;
    } finally {
      c = null, d = U, h = false;
    }
  }
  var S = false, j = null, P = -1, k = 5, T = -1;
  function C() {
    return !(e12.unstable_now() - T < k);
  }
  function $() {
    if (j !== null) {
      var N = e12.unstable_now();
      T = N;
      var F = true;
      try {
        F = j(true, N);
      } finally {
        F ? L() : (S = false, j = null);
      }
    } else S = false;
  }
  var L;
  if (typeof b == "function") L = function() {
    b($);
  };
  else if (typeof MessageChannel < "u") {
    var R = new MessageChannel(), D = R.port2;
    R.port1.onmessage = $, L = function() {
      D.postMessage(null);
    };
  } else L = function() {
    m($, 0);
  };
  function B(N) {
    j = N, S || (S = true, L());
  }
  function W(N, F) {
    P = m(function() {
      N(e12.unstable_now());
    }, F);
  }
  e12.unstable_IdlePriority = 5, e12.unstable_ImmediatePriority = 1, e12.unstable_LowPriority = 4, e12.unstable_NormalPriority = 3, e12.unstable_Profiling = null, e12.unstable_UserBlockingPriority = 2, e12.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e12.unstable_continueExecution = function() {
    y || h || (y = true, B(w));
  }, e12.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : k = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e12.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e12.unstable_getFirstCallbackNode = function() {
    return r(l);
  }, e12.unstable_next = function(N) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = d;
    }
    var U = d;
    d = F;
    try {
      return N();
    } finally {
      d = U;
    }
  }, e12.unstable_pauseExecution = function() {
  }, e12.unstable_requestPaint = function() {
  }, e12.unstable_runWithPriority = function(N, F) {
    switch (N) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        N = 3;
    }
    var U = d;
    d = N;
    try {
      return F();
    } finally {
      d = U;
    }
  }, e12.unstable_scheduleCallback = function(N, F, U) {
    var X = e12.unstable_now();
    switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? X + U : X) : U = X, N) {
      case 1:
        var V = -1;
        break;
      case 2:
        V = 250;
        break;
      case 5:
        V = 1073741823;
        break;
      case 4:
        V = 1e4;
        break;
      default:
        V = 5e3;
    }
    return V = U + V, N = { id: f++, callback: F, priorityLevel: N, startTime: U, expirationTime: V, sortIndex: -1 }, U > X ? (N.sortIndex = U, t(u, N), r(l) === null && N === r(u) && (v ? (g(P), P = -1) : v = true, W(O, U - X))) : (N.sortIndex = V, t(l, N), y || h || (y = true, B(w))), N;
  }, e12.unstable_shouldYield = C, e12.unstable_wrapCallback = function(N) {
    var F = d;
    return function() {
      var U = d;
      d = F;
      try {
        return N.apply(this, arguments);
      } finally {
        d = U;
      }
    };
  };
})(wS);
xS.exports = wS;
var xE = xS.exports;
var wE = A, Wt = xE;
function G(e12) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e12, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e12 + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var SS = /* @__PURE__ */ new Set(), xs = {};
function Ri(e12, t) {
  ja(e12, t), ja(e12 + "Capture", t);
}
function ja(e12, t) {
  for (xs[e12] = t, e12 = 0; e12 < t.length; e12++) SS.add(t[e12]);
}
var rn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Dp = Object.prototype.hasOwnProperty, SE = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Eg = {}, kg = {};
function OE(e12) {
  return Dp.call(kg, e12) ? true : Dp.call(Eg, e12) ? false : SE.test(e12) ? kg[e12] = true : (Eg[e12] = true, false);
}
function jE(e12, t, r, n) {
  if (r !== null && r.type === 0) return false;
  switch (typeof t) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      return n ? false : r !== null ? !r.acceptsBooleans : (e12 = e12.toLowerCase().slice(0, 5), e12 !== "data-" && e12 !== "aria-");
    default:
      return false;
  }
}
function PE(e12, t, r, n) {
  if (t === null || typeof t > "u" || jE(e12, t, r, n)) return true;
  if (n) return false;
  if (r !== null) switch (r.type) {
    case 3:
      return !t;
    case 4:
      return t === false;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return false;
}
function Pt(e12, t, r, n, i, a, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = e12, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o;
}
var ut = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e12) {
  ut[e12] = new Pt(e12, 0, false, e12, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e12) {
  var t = e12[0];
  ut[t] = new Pt(t, 1, false, e12[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e12) {
  ut[e12] = new Pt(e12, 2, false, e12.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e12) {
  ut[e12] = new Pt(e12, 2, false, e12, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e12) {
  ut[e12] = new Pt(e12, 3, false, e12.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(e12) {
  ut[e12] = new Pt(e12, 3, true, e12, null, false, false);
});
["capture", "download"].forEach(function(e12) {
  ut[e12] = new Pt(e12, 4, false, e12, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(e12) {
  ut[e12] = new Pt(e12, 6, false, e12, null, false, false);
});
["rowSpan", "start"].forEach(function(e12) {
  ut[e12] = new Pt(e12, 5, false, e12.toLowerCase(), null, false, false);
});
var my = /[\-:]([a-z])/g;
function yy(e12) {
  return e12[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e12) {
  var t = e12.replace(my, yy);
  ut[t] = new Pt(t, 1, false, e12, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e12) {
  var t = e12.replace(my, yy);
  ut[t] = new Pt(t, 1, false, e12, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e12) {
  var t = e12.replace(my, yy);
  ut[t] = new Pt(t, 1, false, e12, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(e12) {
  ut[e12] = new Pt(e12, 1, false, e12.toLowerCase(), null, false, false);
});
ut.xlinkHref = new Pt("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(e12) {
  ut[e12] = new Pt(e12, 1, false, e12.toLowerCase(), null, true, true);
});
function vy(e12, t, r, n) {
  var i = ut.hasOwnProperty(t) ? ut[t] : null;
  (i !== null ? i.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (PE(t, r, i, n) && (r = null), n || i === null ? OE(t) && (r === null ? e12.removeAttribute(t) : e12.setAttribute(t, "" + r)) : i.mustUseProperty ? e12[i.propertyName] = r === null ? i.type === 3 ? false : "" : r : (t = i.attributeName, n = i.attributeNamespace, r === null ? e12.removeAttribute(t) : (i = i.type, r = i === 3 || i === 4 && r === true ? "" : "" + r, n ? e12.setAttributeNS(n, t, r) : e12.setAttribute(t, r))));
}
var cn = wE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ll = Symbol.for("react.element"), Xi = Symbol.for("react.portal"), Yi = Symbol.for("react.fragment"), gy = Symbol.for("react.strict_mode"), Lp = Symbol.for("react.profiler"), OS = Symbol.for("react.provider"), jS = Symbol.for("react.context"), by = Symbol.for("react.forward_ref"), Bp = Symbol.for("react.suspense"), zp = Symbol.for("react.suspense_list"), xy = Symbol.for("react.memo"), Sn = Symbol.for("react.lazy"), PS = Symbol.for("react.offscreen"), Tg = Symbol.iterator;
function To(e12) {
  return e12 === null || typeof e12 != "object" ? null : (e12 = Tg && e12[Tg] || e12["@@iterator"], typeof e12 == "function" ? e12 : null);
}
var Le = Object.assign, kd;
function Jo(e12) {
  if (kd === void 0) try {
    throw Error();
  } catch (r) {
    var t = r.stack.trim().match(/\n( *(at )?)/);
    kd = t && t[1] || "";
  }
  return `
` + kd + e12;
}
var Td = false;
function $d(e12, t) {
  if (!e12 || Td) return "";
  Td = true;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var n = u;
      }
      Reflect.construct(e12, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        n = u;
      }
      e12.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e12();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (var i = u.stack.split(`
`), a = n.stack.split(`
`), o = i.length - 1, s = a.length - 1; 1 <= o && 0 <= s && i[o] !== a[s]; ) s--;
      for (; 1 <= o && 0 <= s; o--, s--) if (i[o] !== a[s]) {
        if (o !== 1 || s !== 1) do
          if (o--, s--, 0 > s || i[o] !== a[s]) {
            var l = `
` + i[o].replace(" at new ", " at ");
            return e12.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e12.displayName)), l;
          }
        while (1 <= o && 0 <= s);
        break;
      }
    }
  } finally {
    Td = false, Error.prepareStackTrace = r;
  }
  return (e12 = e12 ? e12.displayName || e12.name : "") ? Jo(e12) : "";
}
function AE(e12) {
  switch (e12.tag) {
    case 5:
      return Jo(e12.type);
    case 16:
      return Jo("Lazy");
    case 13:
      return Jo("Suspense");
    case 19:
      return Jo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e12 = $d(e12.type, false), e12;
    case 11:
      return e12 = $d(e12.type.render, false), e12;
    case 1:
      return e12 = $d(e12.type, true), e12;
    default:
      return "";
  }
}
function Fp(e12) {
  if (e12 == null) return null;
  if (typeof e12 == "function") return e12.displayName || e12.name || null;
  if (typeof e12 == "string") return e12;
  switch (e12) {
    case Yi:
      return "Fragment";
    case Xi:
      return "Portal";
    case Lp:
      return "Profiler";
    case gy:
      return "StrictMode";
    case Bp:
      return "Suspense";
    case zp:
      return "SuspenseList";
  }
  if (typeof e12 == "object") switch (e12.$$typeof) {
    case jS:
      return (e12.displayName || "Context") + ".Consumer";
    case OS:
      return (e12._context.displayName || "Context") + ".Provider";
    case by:
      var t = e12.render;
      return e12 = e12.displayName, e12 || (e12 = t.displayName || t.name || "", e12 = e12 !== "" ? "ForwardRef(" + e12 + ")" : "ForwardRef"), e12;
    case xy:
      return t = e12.displayName || null, t !== null ? t : Fp(e12.type) || "Memo";
    case Sn:
      t = e12._payload, e12 = e12._init;
      try {
        return Fp(e12(t));
      } catch {
      }
  }
  return null;
}
function _E(e12) {
  var t = e12.type;
  switch (e12.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e12 = t.render, e12 = e12.displayName || e12.name || "", t.displayName || (e12 !== "" ? "ForwardRef(" + e12 + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Fp(t);
    case 8:
      return t === gy ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Wn(e12) {
  switch (typeof e12) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e12;
    case "object":
      return e12;
    default:
      return "";
  }
}
function AS(e12) {
  var t = e12.type;
  return (e12 = e12.nodeName) && e12.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function EE(e12) {
  var t = AS(e12) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e12.constructor.prototype, t), n = "" + e12[t];
  if (!e12.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
    var i = r.get, a = r.set;
    return Object.defineProperty(e12, t, { configurable: true, get: function() {
      return i.call(this);
    }, set: function(o) {
      n = "" + o, a.call(this, o);
    } }), Object.defineProperty(e12, t, { enumerable: r.enumerable }), { getValue: function() {
      return n;
    }, setValue: function(o) {
      n = "" + o;
    }, stopTracking: function() {
      e12._valueTracker = null, delete e12[t];
    } };
  }
}
function Bl(e12) {
  e12._valueTracker || (e12._valueTracker = EE(e12));
}
function _S(e12) {
  if (!e12) return false;
  var t = e12._valueTracker;
  if (!t) return true;
  var r = t.getValue(), n = "";
  return e12 && (n = AS(e12) ? e12.checked ? "true" : "false" : e12.value), e12 = n, e12 !== r ? (t.setValue(e12), true) : false;
}
function Iu(e12) {
  if (e12 = e12 || (typeof document < "u" ? document : void 0), typeof e12 > "u") return null;
  try {
    return e12.activeElement || e12.body;
  } catch {
    return e12.body;
  }
}
function Up(e12, t) {
  var r = t.checked;
  return Le({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e12._wrapperState.initialChecked });
}
function $g(e12, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
  r = Wn(t.value != null ? t.value : r), e12._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ES(e12, t) {
  t = t.checked, t != null && vy(e12, "checked", t, false);
}
function Wp(e12, t) {
  ES(e12, t);
  var r = Wn(t.value), n = t.type;
  if (r != null) n === "number" ? (r === 0 && e12.value === "" || e12.value != r) && (e12.value = "" + r) : e12.value !== "" + r && (e12.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e12.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Hp(e12, t.type, r) : t.hasOwnProperty("defaultValue") && Hp(e12, t.type, Wn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e12.defaultChecked = !!t.defaultChecked);
}
function Cg(e12, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e12._wrapperState.initialValue, r || t === e12.value || (e12.value = t), e12.defaultValue = t;
  }
  r = e12.name, r !== "" && (e12.name = ""), e12.defaultChecked = !!e12._wrapperState.initialChecked, r !== "" && (e12.name = r);
}
function Hp(e12, t, r) {
  (t !== "number" || Iu(e12.ownerDocument) !== e12) && (r == null ? e12.defaultValue = "" + e12._wrapperState.initialValue : e12.defaultValue !== "" + r && (e12.defaultValue = "" + r));
}
var Zo = Array.isArray;
function pa(e12, t, r, n) {
  if (e12 = e12.options, t) {
    t = {};
    for (var i = 0; i < r.length; i++) t["$" + r[i]] = true;
    for (r = 0; r < e12.length; r++) i = t.hasOwnProperty("$" + e12[r].value), e12[r].selected !== i && (e12[r].selected = i), i && n && (e12[r].defaultSelected = true);
  } else {
    for (r = "" + Wn(r), t = null, i = 0; i < e12.length; i++) {
      if (e12[i].value === r) {
        e12[i].selected = true, n && (e12[i].defaultSelected = true);
        return;
      }
      t !== null || e12[i].disabled || (t = e12[i]);
    }
    t !== null && (t.selected = true);
  }
}
function Vp(e12, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(G(91));
  return Le({}, t, { value: void 0, defaultValue: void 0, children: "" + e12._wrapperState.initialValue });
}
function Ng(e12, t) {
  var r = t.value;
  if (r == null) {
    if (r = t.children, t = t.defaultValue, r != null) {
      if (t != null) throw Error(G(92));
      if (Zo(r)) {
        if (1 < r.length) throw Error(G(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), r = t;
  }
  e12._wrapperState = { initialValue: Wn(r) };
}
function kS(e12, t) {
  var r = Wn(t.value), n = Wn(t.defaultValue);
  r != null && (r = "" + r, r !== e12.value && (e12.value = r), t.defaultValue == null && e12.defaultValue !== r && (e12.defaultValue = r)), n != null && (e12.defaultValue = "" + n);
}
function Mg(e12) {
  var t = e12.textContent;
  t === e12._wrapperState.initialValue && t !== "" && t !== null && (e12.value = t);
}
function TS(e12) {
  switch (e12) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Kp(e12, t) {
  return e12 == null || e12 === "http://www.w3.org/1999/xhtml" ? TS(t) : e12 === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e12;
}
var zl, $S = function(e12) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e12(t, r, n, i);
    });
  } : e12;
}(function(e12, t) {
  if (e12.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e12) e12.innerHTML = t;
  else {
    for (zl = zl || document.createElement("div"), zl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = zl.firstChild; e12.firstChild; ) e12.removeChild(e12.firstChild);
    for (; t.firstChild; ) e12.appendChild(t.firstChild);
  }
});
function ws(e12, t) {
  if (t) {
    var r = e12.firstChild;
    if (r && r === e12.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e12.textContent = t;
}
var ns = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, kE = ["Webkit", "ms", "Moz", "O"];
Object.keys(ns).forEach(function(e12) {
  kE.forEach(function(t) {
    t = t + e12.charAt(0).toUpperCase() + e12.substring(1), ns[t] = ns[e12];
  });
});
function CS(e12, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || ns.hasOwnProperty(e12) && ns[e12] ? ("" + t).trim() : t + "px";
}
function NS(e12, t) {
  e12 = e12.style;
  for (var r in t) if (t.hasOwnProperty(r)) {
    var n = r.indexOf("--") === 0, i = CS(r, t[r], n);
    r === "float" && (r = "cssFloat"), n ? e12.setProperty(r, i) : e12[r] = i;
  }
}
var TE = Le({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function qp(e12, t) {
  if (t) {
    if (TE[e12] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(G(137, e12));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(G(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(G(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(G(62));
  }
}
function Gp(e12, t) {
  if (e12.indexOf("-") === -1) return typeof t.is == "string";
  switch (e12) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var Xp = null;
function wy(e12) {
  return e12 = e12.target || e12.srcElement || window, e12.correspondingUseElement && (e12 = e12.correspondingUseElement), e12.nodeType === 3 ? e12.parentNode : e12;
}
var Yp = null, ha = null, ma = null;
function Ig(e12) {
  if (e12 = Ol(e12)) {
    if (typeof Yp != "function") throw Error(G(280));
    var t = e12.stateNode;
    t && (t = yf(t), Yp(e12.stateNode, e12.type, t));
  }
}
function MS(e12) {
  ha ? ma ? ma.push(e12) : ma = [e12] : ha = e12;
}
function IS() {
  if (ha) {
    var e12 = ha, t = ma;
    if (ma = ha = null, Ig(e12), t) for (e12 = 0; e12 < t.length; e12++) Ig(t[e12]);
  }
}
function RS(e12, t) {
  return e12(t);
}
function DS() {
}
var Cd = false;
function LS(e12, t, r) {
  if (Cd) return e12(t, r);
  Cd = true;
  try {
    return RS(e12, t, r);
  } finally {
    Cd = false, (ha !== null || ma !== null) && (DS(), IS());
  }
}
function Ss(e12, t) {
  var r = e12.stateNode;
  if (r === null) return null;
  var n = yf(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) || (e12 = e12.type, n = !(e12 === "button" || e12 === "input" || e12 === "select" || e12 === "textarea")), e12 = !n;
      break e;
    default:
      e12 = false;
  }
  if (e12) return null;
  if (r && typeof r != "function") throw Error(G(231, t, typeof r));
  return r;
}
var Qp = false;
if (rn) try {
  var $o = {};
  Object.defineProperty($o, "passive", { get: function() {
    Qp = true;
  } }), window.addEventListener("test", $o, $o), window.removeEventListener("test", $o, $o);
} catch {
  Qp = false;
}
function $E(e12, t, r, n, i, a, o, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (f) {
    this.onError(f);
  }
}
var is = false, Ru = null, Du = false, Jp = null, CE = { onError: function(e12) {
  is = true, Ru = e12;
} };
function NE(e12, t, r, n, i, a, o, s, l) {
  is = false, Ru = null, $E.apply(CE, arguments);
}
function ME(e12, t, r, n, i, a, o, s, l) {
  if (NE.apply(this, arguments), is) {
    if (is) {
      var u = Ru;
      is = false, Ru = null;
    } else throw Error(G(198));
    Du || (Du = true, Jp = u);
  }
}
function Di(e12) {
  var t = e12, r = e12;
  if (e12.alternate) for (; t.return; ) t = t.return;
  else {
    e12 = t;
    do
      t = e12, t.flags & 4098 && (r = t.return), e12 = t.return;
    while (e12);
  }
  return t.tag === 3 ? r : null;
}
function BS(e12) {
  if (e12.tag === 13) {
    var t = e12.memoizedState;
    if (t === null && (e12 = e12.alternate, e12 !== null && (t = e12.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Rg(e12) {
  if (Di(e12) !== e12) throw Error(G(188));
}
function IE(e12) {
  var t = e12.alternate;
  if (!t) {
    if (t = Di(e12), t === null) throw Error(G(188));
    return t !== e12 ? null : e12;
  }
  for (var r = e12, n = t; ; ) {
    var i = r.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (n = i.return, n !== null) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === r) return Rg(i), e12;
        if (a === n) return Rg(i), t;
        a = a.sibling;
      }
      throw Error(G(188));
    }
    if (r.return !== n.return) r = i, n = a;
    else {
      for (var o = false, s = i.child; s; ) {
        if (s === r) {
          o = true, r = i, n = a;
          break;
        }
        if (s === n) {
          o = true, n = i, r = a;
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = a.child; s; ) {
          if (s === r) {
            o = true, r = a, n = i;
            break;
          }
          if (s === n) {
            o = true, n = a, r = i;
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(G(189));
      }
    }
    if (r.alternate !== n) throw Error(G(190));
  }
  if (r.tag !== 3) throw Error(G(188));
  return r.stateNode.current === r ? e12 : t;
}
function zS(e12) {
  return e12 = IE(e12), e12 !== null ? FS(e12) : null;
}
function FS(e12) {
  if (e12.tag === 5 || e12.tag === 6) return e12;
  for (e12 = e12.child; e12 !== null; ) {
    var t = FS(e12);
    if (t !== null) return t;
    e12 = e12.sibling;
  }
  return null;
}
var US = Wt.unstable_scheduleCallback, Dg = Wt.unstable_cancelCallback, RE = Wt.unstable_shouldYield, DE = Wt.unstable_requestPaint, Fe = Wt.unstable_now, LE = Wt.unstable_getCurrentPriorityLevel, Sy = Wt.unstable_ImmediatePriority, WS = Wt.unstable_UserBlockingPriority, Lu = Wt.unstable_NormalPriority, BE = Wt.unstable_LowPriority, HS = Wt.unstable_IdlePriority, df = null, Tr = null;
function zE(e12) {
  if (Tr && typeof Tr.onCommitFiberRoot == "function") try {
    Tr.onCommitFiberRoot(df, e12, void 0, (e12.current.flags & 128) === 128);
  } catch {
  }
}
var vr = Math.clz32 ? Math.clz32 : WE, FE = Math.log, UE = Math.LN2;
function WE(e12) {
  return e12 >>>= 0, e12 === 0 ? 32 : 31 - (FE(e12) / UE | 0) | 0;
}
var Fl = 64, Ul = 4194304;
function es(e12) {
  switch (e12 & -e12) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e12 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e12 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e12;
  }
}
function Bu(e12, t) {
  var r = e12.pendingLanes;
  if (r === 0) return 0;
  var n = 0, i = e12.suspendedLanes, a = e12.pingedLanes, o = r & 268435455;
  if (o !== 0) {
    var s = o & ~i;
    s !== 0 ? n = es(s) : (a &= o, a !== 0 && (n = es(a)));
  } else o = r & ~i, o !== 0 ? n = es(o) : a !== 0 && (n = es(a));
  if (n === 0) return 0;
  if (t !== 0 && t !== n && !(t & i) && (i = n & -n, a = t & -t, i >= a || i === 16 && (a & 4194240) !== 0)) return t;
  if (n & 4 && (n |= r & 16), t = e12.entangledLanes, t !== 0) for (e12 = e12.entanglements, t &= n; 0 < t; ) r = 31 - vr(t), i = 1 << r, n |= e12[r], t &= ~i;
  return n;
}
function HE(e12, t) {
  switch (e12) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function VE(e12, t) {
  for (var r = e12.suspendedLanes, n = e12.pingedLanes, i = e12.expirationTimes, a = e12.pendingLanes; 0 < a; ) {
    var o = 31 - vr(a), s = 1 << o, l = i[o];
    l === -1 ? (!(s & r) || s & n) && (i[o] = HE(s, t)) : l <= t && (e12.expiredLanes |= s), a &= ~s;
  }
}
function Zp(e12) {
  return e12 = e12.pendingLanes & -1073741825, e12 !== 0 ? e12 : e12 & 1073741824 ? 1073741824 : 0;
}
function VS() {
  var e12 = Fl;
  return Fl <<= 1, !(Fl & 4194240) && (Fl = 64), e12;
}
function Nd(e12) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e12);
  return t;
}
function wl(e12, t, r) {
  e12.pendingLanes |= t, t !== 536870912 && (e12.suspendedLanes = 0, e12.pingedLanes = 0), e12 = e12.eventTimes, t = 31 - vr(t), e12[t] = r;
}
function KE(e12, t) {
  var r = e12.pendingLanes & ~t;
  e12.pendingLanes = t, e12.suspendedLanes = 0, e12.pingedLanes = 0, e12.expiredLanes &= t, e12.mutableReadLanes &= t, e12.entangledLanes &= t, t = e12.entanglements;
  var n = e12.eventTimes;
  for (e12 = e12.expirationTimes; 0 < r; ) {
    var i = 31 - vr(r), a = 1 << i;
    t[i] = 0, n[i] = -1, e12[i] = -1, r &= ~a;
  }
}
function Oy(e12, t) {
  var r = e12.entangledLanes |= t;
  for (e12 = e12.entanglements; r; ) {
    var n = 31 - vr(r), i = 1 << n;
    i & t | e12[n] & t && (e12[n] |= t), r &= ~i;
  }
}
var ge = 0;
function KS(e12) {
  return e12 &= -e12, 1 < e12 ? 4 < e12 ? e12 & 268435455 ? 16 : 536870912 : 4 : 1;
}
var qS, jy, GS, XS, YS, eh = false, Wl = [], Nn = null, Mn = null, In = null, Os = /* @__PURE__ */ new Map(), js = /* @__PURE__ */ new Map(), Pn = [], qE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Lg(e12, t) {
  switch (e12) {
    case "focusin":
    case "focusout":
      Nn = null;
      break;
    case "dragenter":
    case "dragleave":
      Mn = null;
      break;
    case "mouseover":
    case "mouseout":
      In = null;
      break;
    case "pointerover":
    case "pointerout":
      Os.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      js.delete(t.pointerId);
  }
}
function Co(e12, t, r, n, i, a) {
  return e12 === null || e12.nativeEvent !== a ? (e12 = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: a, targetContainers: [i] }, t !== null && (t = Ol(t), t !== null && jy(t)), e12) : (e12.eventSystemFlags |= n, t = e12.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e12);
}
function GE(e12, t, r, n, i) {
  switch (t) {
    case "focusin":
      return Nn = Co(Nn, e12, t, r, n, i), true;
    case "dragenter":
      return Mn = Co(Mn, e12, t, r, n, i), true;
    case "mouseover":
      return In = Co(In, e12, t, r, n, i), true;
    case "pointerover":
      var a = i.pointerId;
      return Os.set(a, Co(Os.get(a) || null, e12, t, r, n, i)), true;
    case "gotpointercapture":
      return a = i.pointerId, js.set(a, Co(js.get(a) || null, e12, t, r, n, i)), true;
  }
  return false;
}
function QS(e12) {
  var t = ui(e12.target);
  if (t !== null) {
    var r = Di(t);
    if (r !== null) {
      if (t = r.tag, t === 13) {
        if (t = BS(r), t !== null) {
          e12.blockedOn = t, YS(e12.priority, function() {
            GS(r);
          });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e12.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e12.blockedOn = null;
}
function gu(e12) {
  if (e12.blockedOn !== null) return false;
  for (var t = e12.targetContainers; 0 < t.length; ) {
    var r = th(e12.domEventName, e12.eventSystemFlags, t[0], e12.nativeEvent);
    if (r === null) {
      r = e12.nativeEvent;
      var n = new r.constructor(r.type, r);
      Xp = n, r.target.dispatchEvent(n), Xp = null;
    } else return t = Ol(r), t !== null && jy(t), e12.blockedOn = r, false;
    t.shift();
  }
  return true;
}
function Bg(e12, t, r) {
  gu(e12) && r.delete(t);
}
function XE() {
  eh = false, Nn !== null && gu(Nn) && (Nn = null), Mn !== null && gu(Mn) && (Mn = null), In !== null && gu(In) && (In = null), Os.forEach(Bg), js.forEach(Bg);
}
function No(e12, t) {
  e12.blockedOn === t && (e12.blockedOn = null, eh || (eh = true, Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority, XE)));
}
function Ps(e12) {
  function t(i) {
    return No(i, e12);
  }
  if (0 < Wl.length) {
    No(Wl[0], e12);
    for (var r = 1; r < Wl.length; r++) {
      var n = Wl[r];
      n.blockedOn === e12 && (n.blockedOn = null);
    }
  }
  for (Nn !== null && No(Nn, e12), Mn !== null && No(Mn, e12), In !== null && No(In, e12), Os.forEach(t), js.forEach(t), r = 0; r < Pn.length; r++) n = Pn[r], n.blockedOn === e12 && (n.blockedOn = null);
  for (; 0 < Pn.length && (r = Pn[0], r.blockedOn === null); ) QS(r), r.blockedOn === null && Pn.shift();
}
var ya = cn.ReactCurrentBatchConfig, zu = true;
function YE(e12, t, r, n) {
  var i = ge, a = ya.transition;
  ya.transition = null;
  try {
    ge = 1, Py(e12, t, r, n);
  } finally {
    ge = i, ya.transition = a;
  }
}
function QE(e12, t, r, n) {
  var i = ge, a = ya.transition;
  ya.transition = null;
  try {
    ge = 4, Py(e12, t, r, n);
  } finally {
    ge = i, ya.transition = a;
  }
}
function Py(e12, t, r, n) {
  if (zu) {
    var i = th(e12, t, r, n);
    if (i === null) Wd(e12, t, n, Fu, r), Lg(e12, n);
    else if (GE(i, e12, t, r, n)) n.stopPropagation();
    else if (Lg(e12, n), t & 4 && -1 < qE.indexOf(e12)) {
      for (; i !== null; ) {
        var a = Ol(i);
        if (a !== null && qS(a), a = th(e12, t, r, n), a === null && Wd(e12, t, n, Fu, r), a === i) break;
        i = a;
      }
      i !== null && n.stopPropagation();
    } else Wd(e12, t, n, null, r);
  }
}
var Fu = null;
function th(e12, t, r, n) {
  if (Fu = null, e12 = wy(n), e12 = ui(e12), e12 !== null) if (t = Di(e12), t === null) e12 = null;
  else if (r = t.tag, r === 13) {
    if (e12 = BS(t), e12 !== null) return e12;
    e12 = null;
  } else if (r === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e12 = null;
  } else t !== e12 && (e12 = null);
  return Fu = e12, null;
}
function JS(e12) {
  switch (e12) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (LE()) {
        case Sy:
          return 1;
        case WS:
          return 4;
        case Lu:
        case BE:
          return 16;
        case HS:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var En = null, Ay = null, bu = null;
function ZS() {
  if (bu) return bu;
  var e12, t = Ay, r = t.length, n, i = "value" in En ? En.value : En.textContent, a = i.length;
  for (e12 = 0; e12 < r && t[e12] === i[e12]; e12++) ;
  var o = r - e12;
  for (n = 1; n <= o && t[r - n] === i[a - n]; n++) ;
  return bu = i.slice(e12, 1 < n ? 1 - n : void 0);
}
function xu(e12) {
  var t = e12.keyCode;
  return "charCode" in e12 ? (e12 = e12.charCode, e12 === 0 && t === 13 && (e12 = 13)) : e12 = t, e12 === 10 && (e12 = 13), 32 <= e12 || e12 === 13 ? e12 : 0;
}
function Hl() {
  return true;
}
function zg() {
  return false;
}
function Vt(e12) {
  function t(r, n, i, a, o) {
    this._reactName = r, this._targetInst = i, this.type = n, this.nativeEvent = a, this.target = o, this.currentTarget = null;
    for (var s in e12) e12.hasOwnProperty(s) && (r = e12[s], this[s] = r ? r(a) : a[s]);
    return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === false) ? Hl : zg, this.isPropagationStopped = zg, this;
  }
  return Le(t.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = false), this.isDefaultPrevented = Hl);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = true), this.isPropagationStopped = Hl);
  }, persist: function() {
  }, isPersistent: Hl }), t;
}
var so = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e12) {
  return e12.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, _y = Vt(so), Sl = Le({}, so, { view: 0, detail: 0 }), JE = Vt(Sl), Md, Id, Mo, pf = Le({}, Sl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ey, button: 0, buttons: 0, relatedTarget: function(e12) {
  return e12.relatedTarget === void 0 ? e12.fromElement === e12.srcElement ? e12.toElement : e12.fromElement : e12.relatedTarget;
}, movementX: function(e12) {
  return "movementX" in e12 ? e12.movementX : (e12 !== Mo && (Mo && e12.type === "mousemove" ? (Md = e12.screenX - Mo.screenX, Id = e12.screenY - Mo.screenY) : Id = Md = 0, Mo = e12), Md);
}, movementY: function(e12) {
  return "movementY" in e12 ? e12.movementY : Id;
} }), Fg = Vt(pf), ZE = Le({}, pf, { dataTransfer: 0 }), ek = Vt(ZE), tk = Le({}, Sl, { relatedTarget: 0 }), Rd = Vt(tk), rk = Le({}, so, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), nk = Vt(rk), ik = Le({}, so, { clipboardData: function(e12) {
  return "clipboardData" in e12 ? e12.clipboardData : window.clipboardData;
} }), ak = Vt(ik), ok = Le({}, so, { data: 0 }), Ug = Vt(ok), sk = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, lk = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, uk = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ck(e12) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e12) : (e12 = uk[e12]) ? !!t[e12] : false;
}
function Ey() {
  return ck;
}
var fk = Le({}, Sl, { key: function(e12) {
  if (e12.key) {
    var t = sk[e12.key] || e12.key;
    if (t !== "Unidentified") return t;
  }
  return e12.type === "keypress" ? (e12 = xu(e12), e12 === 13 ? "Enter" : String.fromCharCode(e12)) : e12.type === "keydown" || e12.type === "keyup" ? lk[e12.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ey, charCode: function(e12) {
  return e12.type === "keypress" ? xu(e12) : 0;
}, keyCode: function(e12) {
  return e12.type === "keydown" || e12.type === "keyup" ? e12.keyCode : 0;
}, which: function(e12) {
  return e12.type === "keypress" ? xu(e12) : e12.type === "keydown" || e12.type === "keyup" ? e12.keyCode : 0;
} }), dk = Vt(fk), pk = Le({}, pf, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Wg = Vt(pk), hk = Le({}, Sl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ey }), mk = Vt(hk), yk = Le({}, so, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), vk = Vt(yk), gk = Le({}, pf, { deltaX: function(e12) {
  return "deltaX" in e12 ? e12.deltaX : "wheelDeltaX" in e12 ? -e12.wheelDeltaX : 0;
}, deltaY: function(e12) {
  return "deltaY" in e12 ? e12.deltaY : "wheelDeltaY" in e12 ? -e12.wheelDeltaY : "wheelDelta" in e12 ? -e12.wheelDelta : 0;
}, deltaZ: 0, deltaMode: 0 }), bk = Vt(gk), xk = [9, 13, 27, 32], ky = rn && "CompositionEvent" in window, as = null;
rn && "documentMode" in document && (as = document.documentMode);
var wk = rn && "TextEvent" in window && !as, eO = rn && (!ky || as && 8 < as && 11 >= as), Hg = " ", Vg = false;
function tO(e12, t) {
  switch (e12) {
    case "keyup":
      return xk.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function rO(e12) {
  return e12 = e12.detail, typeof e12 == "object" && "data" in e12 ? e12.data : null;
}
var Qi = false;
function Sk(e12, t) {
  switch (e12) {
    case "compositionend":
      return rO(t);
    case "keypress":
      return t.which !== 32 ? null : (Vg = true, Hg);
    case "textInput":
      return e12 = t.data, e12 === Hg && Vg ? null : e12;
    default:
      return null;
  }
}
function Ok(e12, t) {
  if (Qi) return e12 === "compositionend" || !ky && tO(e12, t) ? (e12 = ZS(), bu = Ay = En = null, Qi = false, e12) : null;
  switch (e12) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return eO && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var jk = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function Kg(e12) {
  var t = e12 && e12.nodeName && e12.nodeName.toLowerCase();
  return t === "input" ? !!jk[e12.type] : t === "textarea";
}
function nO(e12, t, r, n) {
  MS(n), t = Uu(t, "onChange"), 0 < t.length && (r = new _y("onChange", "change", null, r, n), e12.push({ event: r, listeners: t }));
}
var os = null, As = null;
function Pk(e12) {
  hO(e12, 0);
}
function hf(e12) {
  var t = ea(e12);
  if (_S(t)) return e12;
}
function Ak(e12, t) {
  if (e12 === "change") return t;
}
var iO = false;
if (rn) {
  var Dd;
  if (rn) {
    var Ld = "oninput" in document;
    if (!Ld) {
      var qg = document.createElement("div");
      qg.setAttribute("oninput", "return;"), Ld = typeof qg.oninput == "function";
    }
    Dd = Ld;
  } else Dd = false;
  iO = Dd && (!document.documentMode || 9 < document.documentMode);
}
function Gg() {
  os && (os.detachEvent("onpropertychange", aO), As = os = null);
}
function aO(e12) {
  if (e12.propertyName === "value" && hf(As)) {
    var t = [];
    nO(t, As, e12, wy(e12)), LS(Pk, t);
  }
}
function _k(e12, t, r) {
  e12 === "focusin" ? (Gg(), os = t, As = r, os.attachEvent("onpropertychange", aO)) : e12 === "focusout" && Gg();
}
function Ek(e12) {
  if (e12 === "selectionchange" || e12 === "keyup" || e12 === "keydown") return hf(As);
}
function kk(e12, t) {
  if (e12 === "click") return hf(t);
}
function Tk(e12, t) {
  if (e12 === "input" || e12 === "change") return hf(t);
}
function $k(e12, t) {
  return e12 === t && (e12 !== 0 || 1 / e12 === 1 / t) || e12 !== e12 && t !== t;
}
var xr = typeof Object.is == "function" ? Object.is : $k;
function _s(e12, t) {
  if (xr(e12, t)) return true;
  if (typeof e12 != "object" || e12 === null || typeof t != "object" || t === null) return false;
  var r = Object.keys(e12), n = Object.keys(t);
  if (r.length !== n.length) return false;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!Dp.call(t, i) || !xr(e12[i], t[i])) return false;
  }
  return true;
}
function Xg(e12) {
  for (; e12 && e12.firstChild; ) e12 = e12.firstChild;
  return e12;
}
function Yg(e12, t) {
  var r = Xg(e12);
  e12 = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (n = e12 + r.textContent.length, e12 <= t && n >= t) return { node: r, offset: t - e12 };
      e12 = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Xg(r);
  }
}
function oO(e12, t) {
  return e12 && t ? e12 === t ? true : e12 && e12.nodeType === 3 ? false : t && t.nodeType === 3 ? oO(e12, t.parentNode) : "contains" in e12 ? e12.contains(t) : e12.compareDocumentPosition ? !!(e12.compareDocumentPosition(t) & 16) : false : false;
}
function sO() {
  for (var e12 = window, t = Iu(); t instanceof e12.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = false;
    }
    if (r) e12 = t.contentWindow;
    else break;
    t = Iu(e12.document);
  }
  return t;
}
function Ty(e12) {
  var t = e12 && e12.nodeName && e12.nodeName.toLowerCase();
  return t && (t === "input" && (e12.type === "text" || e12.type === "search" || e12.type === "tel" || e12.type === "url" || e12.type === "password") || t === "textarea" || e12.contentEditable === "true");
}
function Ck(e12) {
  var t = sO(), r = e12.focusedElem, n = e12.selectionRange;
  if (t !== r && r && r.ownerDocument && oO(r.ownerDocument.documentElement, r)) {
    if (n !== null && Ty(r)) {
      if (t = n.start, e12 = n.end, e12 === void 0 && (e12 = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e12, r.value.length);
      else if (e12 = (t = r.ownerDocument || document) && t.defaultView || window, e12.getSelection) {
        e12 = e12.getSelection();
        var i = r.textContent.length, a = Math.min(n.start, i);
        n = n.end === void 0 ? a : Math.min(n.end, i), !e12.extend && a > n && (i = n, n = a, a = i), i = Yg(r, a);
        var o = Yg(r, n);
        i && o && (e12.rangeCount !== 1 || e12.anchorNode !== i.node || e12.anchorOffset !== i.offset || e12.focusNode !== o.node || e12.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e12.removeAllRanges(), a > n ? (e12.addRange(t), e12.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e12.addRange(t)));
      }
    }
    for (t = [], e12 = r; e12 = e12.parentNode; ) e12.nodeType === 1 && t.push({ element: e12, left: e12.scrollLeft, top: e12.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e12 = t[r], e12.element.scrollLeft = e12.left, e12.element.scrollTop = e12.top;
  }
}
var Nk = rn && "documentMode" in document && 11 >= document.documentMode, Ji = null, rh = null, ss = null, nh = false;
function Qg(e12, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  nh || Ji == null || Ji !== Iu(n) || (n = Ji, "selectionStart" in n && Ty(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), ss && _s(ss, n) || (ss = n, n = Uu(rh, "onSelect"), 0 < n.length && (t = new _y("onSelect", "select", null, t, r), e12.push({ event: t, listeners: n }), t.target = Ji)));
}
function Vl(e12, t) {
  var r = {};
  return r[e12.toLowerCase()] = t.toLowerCase(), r["Webkit" + e12] = "webkit" + t, r["Moz" + e12] = "moz" + t, r;
}
var Zi = { animationend: Vl("Animation", "AnimationEnd"), animationiteration: Vl("Animation", "AnimationIteration"), animationstart: Vl("Animation", "AnimationStart"), transitionend: Vl("Transition", "TransitionEnd") }, Bd = {}, lO = {};
rn && (lO = document.createElement("div").style, "AnimationEvent" in window || (delete Zi.animationend.animation, delete Zi.animationiteration.animation, delete Zi.animationstart.animation), "TransitionEvent" in window || delete Zi.transitionend.transition);
function mf(e12) {
  if (Bd[e12]) return Bd[e12];
  if (!Zi[e12]) return e12;
  var t = Zi[e12], r;
  for (r in t) if (t.hasOwnProperty(r) && r in lO) return Bd[e12] = t[r];
  return e12;
}
var uO = mf("animationend"), cO = mf("animationiteration"), fO = mf("animationstart"), dO = mf("transitionend"), pO = /* @__PURE__ */ new Map(), Jg = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Vn(e12, t) {
  pO.set(e12, t), Ri(t, [e12]);
}
for (var zd = 0; zd < Jg.length; zd++) {
  var Fd = Jg[zd], Mk = Fd.toLowerCase(), Ik = Fd[0].toUpperCase() + Fd.slice(1);
  Vn(Mk, "on" + Ik);
}
Vn(uO, "onAnimationEnd");
Vn(cO, "onAnimationIteration");
Vn(fO, "onAnimationStart");
Vn("dblclick", "onDoubleClick");
Vn("focusin", "onFocus");
Vn("focusout", "onBlur");
Vn(dO, "onTransitionEnd");
ja("onMouseEnter", ["mouseout", "mouseover"]);
ja("onMouseLeave", ["mouseout", "mouseover"]);
ja("onPointerEnter", ["pointerout", "pointerover"]);
ja("onPointerLeave", ["pointerout", "pointerover"]);
Ri("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ri("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ri("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ri("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ri("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ri("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ts = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Rk = new Set("cancel close invalid load scroll toggle".split(" ").concat(ts));
function Zg(e12, t, r) {
  var n = e12.type || "unknown-event";
  e12.currentTarget = r, ME(n, t, void 0, e12), e12.currentTarget = null;
}
function hO(e12, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e12.length; r++) {
    var n = e12[r], i = n.event;
    n = n.listeners;
    e: {
      var a = void 0;
      if (t) for (var o = n.length - 1; 0 <= o; o--) {
        var s = n[o], l = s.instance, u = s.currentTarget;
        if (s = s.listener, l !== a && i.isPropagationStopped()) break e;
        Zg(i, s, u), a = l;
      }
      else for (o = 0; o < n.length; o++) {
        if (s = n[o], l = s.instance, u = s.currentTarget, s = s.listener, l !== a && i.isPropagationStopped()) break e;
        Zg(i, s, u), a = l;
      }
    }
  }
  if (Du) throw e12 = Jp, Du = false, Jp = null, e12;
}
function Ee(e12, t) {
  var r = t[lh];
  r === void 0 && (r = t[lh] = /* @__PURE__ */ new Set());
  var n = e12 + "__bubble";
  r.has(n) || (mO(t, e12, 2, false), r.add(n));
}
function Ud(e12, t, r) {
  var n = 0;
  t && (n |= 4), mO(r, e12, n, t);
}
var Kl = "_reactListening" + Math.random().toString(36).slice(2);
function Es(e12) {
  if (!e12[Kl]) {
    e12[Kl] = true, SS.forEach(function(r) {
      r !== "selectionchange" && (Rk.has(r) || Ud(r, false, e12), Ud(r, true, e12));
    });
    var t = e12.nodeType === 9 ? e12 : e12.ownerDocument;
    t === null || t[Kl] || (t[Kl] = true, Ud("selectionchange", false, t));
  }
}
function mO(e12, t, r, n) {
  switch (JS(t)) {
    case 1:
      var i = YE;
      break;
    case 4:
      i = QE;
      break;
    default:
      i = Py;
  }
  r = i.bind(null, t, r, e12), i = void 0, !Qp || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = true), n ? i !== void 0 ? e12.addEventListener(t, r, { capture: true, passive: i }) : e12.addEventListener(t, r, true) : i !== void 0 ? e12.addEventListener(t, r, { passive: i }) : e12.addEventListener(t, r, false);
}
function Wd(e12, t, r, n, i) {
  var a = n;
  if (!(t & 1) && !(t & 2) && n !== null) e: for (; ; ) {
    if (n === null) return;
    var o = n.tag;
    if (o === 3 || o === 4) {
      var s = n.stateNode.containerInfo;
      if (s === i || s.nodeType === 8 && s.parentNode === i) break;
      if (o === 4) for (o = n.return; o !== null; ) {
        var l = o.tag;
        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
        o = o.return;
      }
      for (; s !== null; ) {
        if (o = ui(s), o === null) return;
        if (l = o.tag, l === 5 || l === 6) {
          n = a = o;
          continue e;
        }
        s = s.parentNode;
      }
    }
    n = n.return;
  }
  LS(function() {
    var u = a, f = wy(r), c = [];
    e: {
      var d = pO.get(e12);
      if (d !== void 0) {
        var h = _y, y = e12;
        switch (e12) {
          case "keypress":
            if (xu(r) === 0) break e;
          case "keydown":
          case "keyup":
            h = dk;
            break;
          case "focusin":
            y = "focus", h = Rd;
            break;
          case "focusout":
            y = "blur", h = Rd;
            break;
          case "beforeblur":
          case "afterblur":
            h = Rd;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Fg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = ek;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = mk;
            break;
          case uO:
          case cO:
          case fO:
            h = nk;
            break;
          case dO:
            h = vk;
            break;
          case "scroll":
            h = JE;
            break;
          case "wheel":
            h = bk;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = ak;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Wg;
        }
        var v = (t & 4) !== 0, m = !v && e12 === "scroll", g = v ? d !== null ? d + "Capture" : null : d;
        v = [];
        for (var b = u, x; b !== null; ) {
          x = b;
          var O = x.stateNode;
          if (x.tag === 5 && O !== null && (x = O, g !== null && (O = Ss(b, g), O != null && v.push(ks(b, O, x)))), m) break;
          b = b.return;
        }
        0 < v.length && (d = new h(d, y, null, r, f), c.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e12 === "mouseover" || e12 === "pointerover", h = e12 === "mouseout" || e12 === "pointerout", d && r !== Xp && (y = r.relatedTarget || r.fromElement) && (ui(y) || y[nn])) break e;
        if ((h || d) && (d = f.window === f ? f : (d = f.ownerDocument) ? d.defaultView || d.parentWindow : window, h ? (y = r.relatedTarget || r.toElement, h = u, y = y ? ui(y) : null, y !== null && (m = Di(y), y !== m || y.tag !== 5 && y.tag !== 6) && (y = null)) : (h = null, y = u), h !== y)) {
          if (v = Fg, O = "onMouseLeave", g = "onMouseEnter", b = "mouse", (e12 === "pointerout" || e12 === "pointerover") && (v = Wg, O = "onPointerLeave", g = "onPointerEnter", b = "pointer"), m = h == null ? d : ea(h), x = y == null ? d : ea(y), d = new v(O, b + "leave", h, r, f), d.target = m, d.relatedTarget = x, O = null, ui(f) === u && (v = new v(g, b + "enter", y, r, f), v.target = x, v.relatedTarget = m, O = v), m = O, h && y) t: {
            for (v = h, g = y, b = 0, x = v; x; x = Wi(x)) b++;
            for (x = 0, O = g; O; O = Wi(O)) x++;
            for (; 0 < b - x; ) v = Wi(v), b--;
            for (; 0 < x - b; ) g = Wi(g), x--;
            for (; b--; ) {
              if (v === g || g !== null && v === g.alternate) break t;
              v = Wi(v), g = Wi(g);
            }
            v = null;
          }
          else v = null;
          h !== null && e0(c, d, h, v, false), y !== null && m !== null && e0(c, m, y, v, true);
        }
      }
      e: {
        if (d = u ? ea(u) : window, h = d.nodeName && d.nodeName.toLowerCase(), h === "select" || h === "input" && d.type === "file") var w = Ak;
        else if (Kg(d)) if (iO) w = Tk;
        else {
          w = Ek;
          var S = _k;
        }
        else (h = d.nodeName) && h.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (w = kk);
        if (w && (w = w(e12, u))) {
          nO(c, w, r, f);
          break e;
        }
        S && S(e12, d, u), e12 === "focusout" && (S = d._wrapperState) && S.controlled && d.type === "number" && Hp(d, "number", d.value);
      }
      switch (S = u ? ea(u) : window, e12) {
        case "focusin":
          (Kg(S) || S.contentEditable === "true") && (Ji = S, rh = u, ss = null);
          break;
        case "focusout":
          ss = rh = Ji = null;
          break;
        case "mousedown":
          nh = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          nh = false, Qg(c, r, f);
          break;
        case "selectionchange":
          if (Nk) break;
        case "keydown":
        case "keyup":
          Qg(c, r, f);
      }
      var j;
      if (ky) e: {
        switch (e12) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else Qi ? tO(e12, r) && (P = "onCompositionEnd") : e12 === "keydown" && r.keyCode === 229 && (P = "onCompositionStart");
      P && (eO && r.locale !== "ko" && (Qi || P !== "onCompositionStart" ? P === "onCompositionEnd" && Qi && (j = ZS()) : (En = f, Ay = "value" in En ? En.value : En.textContent, Qi = true)), S = Uu(u, P), 0 < S.length && (P = new Ug(P, e12, null, r, f), c.push({ event: P, listeners: S }), j ? P.data = j : (j = rO(r), j !== null && (P.data = j)))), (j = wk ? Sk(e12, r) : Ok(e12, r)) && (u = Uu(u, "onBeforeInput"), 0 < u.length && (f = new Ug("onBeforeInput", "beforeinput", null, r, f), c.push({ event: f, listeners: u }), f.data = j));
    }
    hO(c, t);
  });
}
function ks(e12, t, r) {
  return { instance: e12, listener: t, currentTarget: r };
}
function Uu(e12, t) {
  for (var r = t + "Capture", n = []; e12 !== null; ) {
    var i = e12, a = i.stateNode;
    i.tag === 5 && a !== null && (i = a, a = Ss(e12, r), a != null && n.unshift(ks(e12, a, i)), a = Ss(e12, t), a != null && n.push(ks(e12, a, i))), e12 = e12.return;
  }
  return n;
}
function Wi(e12) {
  if (e12 === null) return null;
  do
    e12 = e12.return;
  while (e12 && e12.tag !== 5);
  return e12 || null;
}
function e0(e12, t, r, n, i) {
  for (var a = t._reactName, o = []; r !== null && r !== n; ) {
    var s = r, l = s.alternate, u = s.stateNode;
    if (l !== null && l === n) break;
    s.tag === 5 && u !== null && (s = u, i ? (l = Ss(r, a), l != null && o.unshift(ks(r, l, s))) : i || (l = Ss(r, a), l != null && o.push(ks(r, l, s)))), r = r.return;
  }
  o.length !== 0 && e12.push({ event: t, listeners: o });
}
var Dk = /\r\n?/g, Lk = /\u0000|\uFFFD/g;
function t0(e12) {
  return (typeof e12 == "string" ? e12 : "" + e12).replace(Dk, `
`).replace(Lk, "");
}
function ql(e12, t, r) {
  if (t = t0(t), t0(e12) !== t && r) throw Error(G(425));
}
function Wu() {
}
var ih = null, ah = null;
function oh(e12, t) {
  return e12 === "textarea" || e12 === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var sh = typeof setTimeout == "function" ? setTimeout : void 0, Bk = typeof clearTimeout == "function" ? clearTimeout : void 0, r0 = typeof Promise == "function" ? Promise : void 0, zk = typeof queueMicrotask == "function" ? queueMicrotask : typeof r0 < "u" ? function(e12) {
  return r0.resolve(null).then(e12).catch(Fk);
} : sh;
function Fk(e12) {
  setTimeout(function() {
    throw e12;
  });
}
function Hd(e12, t) {
  var r = t, n = 0;
  do {
    var i = r.nextSibling;
    if (e12.removeChild(r), i && i.nodeType === 8) if (r = i.data, r === "/$") {
      if (n === 0) {
        e12.removeChild(i), Ps(t);
        return;
      }
      n--;
    } else r !== "$" && r !== "$?" && r !== "$!" || n++;
    r = i;
  } while (r);
  Ps(t);
}
function Rn(e12) {
  for (; e12 != null; e12 = e12.nextSibling) {
    var t = e12.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e12.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e12;
}
function n0(e12) {
  e12 = e12.previousSibling;
  for (var t = 0; e12; ) {
    if (e12.nodeType === 8) {
      var r = e12.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e12;
        t--;
      } else r === "/$" && t++;
    }
    e12 = e12.previousSibling;
  }
  return null;
}
var lo = Math.random().toString(36).slice(2), Ar = "__reactFiber$" + lo, Ts = "__reactProps$" + lo, nn = "__reactContainer$" + lo, lh = "__reactEvents$" + lo, Uk = "__reactListeners$" + lo, Wk = "__reactHandles$" + lo;
function ui(e12) {
  var t = e12[Ar];
  if (t) return t;
  for (var r = e12.parentNode; r; ) {
    if (t = r[nn] || r[Ar]) {
      if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e12 = n0(e12); e12 !== null; ) {
        if (r = e12[Ar]) return r;
        e12 = n0(e12);
      }
      return t;
    }
    e12 = r, r = e12.parentNode;
  }
  return null;
}
function Ol(e12) {
  return e12 = e12[Ar] || e12[nn], !e12 || e12.tag !== 5 && e12.tag !== 6 && e12.tag !== 13 && e12.tag !== 3 ? null : e12;
}
function ea(e12) {
  if (e12.tag === 5 || e12.tag === 6) return e12.stateNode;
  throw Error(G(33));
}
function yf(e12) {
  return e12[Ts] || null;
}
var uh = [], ta = -1;
function Kn(e12) {
  return { current: e12 };
}
function $e(e12) {
  0 > ta || (e12.current = uh[ta], uh[ta] = null, ta--);
}
function Ae(e12, t) {
  ta++, uh[ta] = e12.current, e12.current = t;
}
var Hn = {}, yt = Kn(Hn), Tt = Kn(false), ji = Hn;
function Pa(e12, t) {
  var r = e12.type.contextTypes;
  if (!r) return Hn;
  var n = e12.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
  var i = {}, a;
  for (a in r) i[a] = t[a];
  return n && (e12 = e12.stateNode, e12.__reactInternalMemoizedUnmaskedChildContext = t, e12.__reactInternalMemoizedMaskedChildContext = i), i;
}
function $t(e12) {
  return e12 = e12.childContextTypes, e12 != null;
}
function Hu() {
  $e(Tt), $e(yt);
}
function i0(e12, t, r) {
  if (yt.current !== Hn) throw Error(G(168));
  Ae(yt, t), Ae(Tt, r);
}
function yO(e12, t, r) {
  var n = e12.stateNode;
  if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(G(108, _E(e12) || "Unknown", i));
  return Le({}, r, n);
}
function Vu(e12) {
  return e12 = (e12 = e12.stateNode) && e12.__reactInternalMemoizedMergedChildContext || Hn, ji = yt.current, Ae(yt, e12), Ae(Tt, Tt.current), true;
}
function a0(e12, t, r) {
  var n = e12.stateNode;
  if (!n) throw Error(G(169));
  r ? (e12 = yO(e12, t, ji), n.__reactInternalMemoizedMergedChildContext = e12, $e(Tt), $e(yt), Ae(yt, e12)) : $e(Tt), Ae(Tt, r);
}
var Wr = null, vf = false, Vd = false;
function vO(e12) {
  Wr === null ? Wr = [e12] : Wr.push(e12);
}
function Hk(e12) {
  vf = true, vO(e12);
}
function qn() {
  if (!Vd && Wr !== null) {
    Vd = true;
    var e12 = 0, t = ge;
    try {
      var r = Wr;
      for (ge = 1; e12 < r.length; e12++) {
        var n = r[e12];
        do
          n = n(true);
        while (n !== null);
      }
      Wr = null, vf = false;
    } catch (i) {
      throw Wr !== null && (Wr = Wr.slice(e12 + 1)), US(Sy, qn), i;
    } finally {
      ge = t, Vd = false;
    }
  }
  return null;
}
var ra = [], na = 0, Ku = null, qu = 0, Yt = [], Qt = 0, Pi = null, Hr = 1, Vr = "";
function ni(e12, t) {
  ra[na++] = qu, ra[na++] = Ku, Ku = e12, qu = t;
}
function gO(e12, t, r) {
  Yt[Qt++] = Hr, Yt[Qt++] = Vr, Yt[Qt++] = Pi, Pi = e12;
  var n = Hr;
  e12 = Vr;
  var i = 32 - vr(n) - 1;
  n &= ~(1 << i), r += 1;
  var a = 32 - vr(t) + i;
  if (30 < a) {
    var o = i - i % 5;
    a = (n & (1 << o) - 1).toString(32), n >>= o, i -= o, Hr = 1 << 32 - vr(t) + i | r << i | n, Vr = a + e12;
  } else Hr = 1 << a | r << i | n, Vr = e12;
}
function $y(e12) {
  e12.return !== null && (ni(e12, 1), gO(e12, 1, 0));
}
function Cy(e12) {
  for (; e12 === Ku; ) Ku = ra[--na], ra[na] = null, qu = ra[--na], ra[na] = null;
  for (; e12 === Pi; ) Pi = Yt[--Qt], Yt[Qt] = null, Vr = Yt[--Qt], Yt[Qt] = null, Hr = Yt[--Qt], Yt[Qt] = null;
}
var Ft = null, zt = null, Ce = false, mr = null;
function bO(e12, t) {
  var r = Zt(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = t, r.return = e12, t = e12.deletions, t === null ? (e12.deletions = [r], e12.flags |= 16) : t.push(r);
}
function o0(e12, t) {
  switch (e12.tag) {
    case 5:
      var r = e12.type;
      return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e12.stateNode = t, Ft = e12, zt = Rn(t.firstChild), true) : false;
    case 6:
      return t = e12.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e12.stateNode = t, Ft = e12, zt = null, true) : false;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (r = Pi !== null ? { id: Hr, overflow: Vr } : null, e12.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = Zt(18, null, null, 0), r.stateNode = t, r.return = e12, e12.child = r, Ft = e12, zt = null, true) : false;
    default:
      return false;
  }
}
function ch(e12) {
  return (e12.mode & 1) !== 0 && (e12.flags & 128) === 0;
}
function fh(e12) {
  if (Ce) {
    var t = zt;
    if (t) {
      var r = t;
      if (!o0(e12, t)) {
        if (ch(e12)) throw Error(G(418));
        t = Rn(r.nextSibling);
        var n = Ft;
        t && o0(e12, t) ? bO(n, r) : (e12.flags = e12.flags & -4097 | 2, Ce = false, Ft = e12);
      }
    } else {
      if (ch(e12)) throw Error(G(418));
      e12.flags = e12.flags & -4097 | 2, Ce = false, Ft = e12;
    }
  }
}
function s0(e12) {
  for (e12 = e12.return; e12 !== null && e12.tag !== 5 && e12.tag !== 3 && e12.tag !== 13; ) e12 = e12.return;
  Ft = e12;
}
function Gl(e12) {
  if (e12 !== Ft) return false;
  if (!Ce) return s0(e12), Ce = true, false;
  var t;
  if ((t = e12.tag !== 3) && !(t = e12.tag !== 5) && (t = e12.type, t = t !== "head" && t !== "body" && !oh(e12.type, e12.memoizedProps)), t && (t = zt)) {
    if (ch(e12)) throw xO(), Error(G(418));
    for (; t; ) bO(e12, t), t = Rn(t.nextSibling);
  }
  if (s0(e12), e12.tag === 13) {
    if (e12 = e12.memoizedState, e12 = e12 !== null ? e12.dehydrated : null, !e12) throw Error(G(317));
    e: {
      for (e12 = e12.nextSibling, t = 0; e12; ) {
        if (e12.nodeType === 8) {
          var r = e12.data;
          if (r === "/$") {
            if (t === 0) {
              zt = Rn(e12.nextSibling);
              break e;
            }
            t--;
          } else r !== "$" && r !== "$!" && r !== "$?" || t++;
        }
        e12 = e12.nextSibling;
      }
      zt = null;
    }
  } else zt = Ft ? Rn(e12.stateNode.nextSibling) : null;
  return true;
}
function xO() {
  for (var e12 = zt; e12; ) e12 = Rn(e12.nextSibling);
}
function Aa() {
  zt = Ft = null, Ce = false;
}
function Ny(e12) {
  mr === null ? mr = [e12] : mr.push(e12);
}
var Vk = cn.ReactCurrentBatchConfig;
function Io(e12, t, r) {
  if (e12 = r.ref, e12 !== null && typeof e12 != "function" && typeof e12 != "object") {
    if (r._owner) {
      if (r = r._owner, r) {
        if (r.tag !== 1) throw Error(G(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(G(147, e12));
      var i = n, a = "" + e12;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
        var s = i.refs;
        o === null ? delete s[a] : s[a] = o;
      }, t._stringRef = a, t);
    }
    if (typeof e12 != "string") throw Error(G(284));
    if (!r._owner) throw Error(G(290, e12));
  }
  return e12;
}
function Xl(e12, t) {
  throw e12 = Object.prototype.toString.call(t), Error(G(31, e12 === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e12));
}
function l0(e12) {
  var t = e12._init;
  return t(e12._payload);
}
function wO(e12) {
  function t(g, b) {
    if (e12) {
      var x = g.deletions;
      x === null ? (g.deletions = [b], g.flags |= 16) : x.push(b);
    }
  }
  function r(g, b) {
    if (!e12) return null;
    for (; b !== null; ) t(g, b), b = b.sibling;
    return null;
  }
  function n(g, b) {
    for (g = /* @__PURE__ */ new Map(); b !== null; ) b.key !== null ? g.set(b.key, b) : g.set(b.index, b), b = b.sibling;
    return g;
  }
  function i(g, b) {
    return g = zn(g, b), g.index = 0, g.sibling = null, g;
  }
  function a(g, b, x) {
    return g.index = x, e12 ? (x = g.alternate, x !== null ? (x = x.index, x < b ? (g.flags |= 2, b) : x) : (g.flags |= 2, b)) : (g.flags |= 1048576, b);
  }
  function o(g) {
    return e12 && g.alternate === null && (g.flags |= 2), g;
  }
  function s(g, b, x, O) {
    return b === null || b.tag !== 6 ? (b = Jd(x, g.mode, O), b.return = g, b) : (b = i(b, x), b.return = g, b);
  }
  function l(g, b, x, O) {
    var w = x.type;
    return w === Yi ? f(g, b, x.props.children, O, x.key) : b !== null && (b.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Sn && l0(w) === b.type) ? (O = i(b, x.props), O.ref = Io(g, b, x), O.return = g, O) : (O = _u(x.type, x.key, x.props, null, g.mode, O), O.ref = Io(g, b, x), O.return = g, O);
  }
  function u(g, b, x, O) {
    return b === null || b.tag !== 4 || b.stateNode.containerInfo !== x.containerInfo || b.stateNode.implementation !== x.implementation ? (b = Zd(x, g.mode, O), b.return = g, b) : (b = i(b, x.children || []), b.return = g, b);
  }
  function f(g, b, x, O, w) {
    return b === null || b.tag !== 7 ? (b = xi(x, g.mode, O, w), b.return = g, b) : (b = i(b, x), b.return = g, b);
  }
  function c(g, b, x) {
    if (typeof b == "string" && b !== "" || typeof b == "number") return b = Jd("" + b, g.mode, x), b.return = g, b;
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Ll:
          return x = _u(b.type, b.key, b.props, null, g.mode, x), x.ref = Io(g, null, b), x.return = g, x;
        case Xi:
          return b = Zd(b, g.mode, x), b.return = g, b;
        case Sn:
          var O = b._init;
          return c(g, O(b._payload), x);
      }
      if (Zo(b) || To(b)) return b = xi(b, g.mode, x, null), b.return = g, b;
      Xl(g, b);
    }
    return null;
  }
  function d(g, b, x, O) {
    var w = b !== null ? b.key : null;
    if (typeof x == "string" && x !== "" || typeof x == "number") return w !== null ? null : s(g, b, "" + x, O);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ll:
          return x.key === w ? l(g, b, x, O) : null;
        case Xi:
          return x.key === w ? u(g, b, x, O) : null;
        case Sn:
          return w = x._init, d(g, b, w(x._payload), O);
      }
      if (Zo(x) || To(x)) return w !== null ? null : f(g, b, x, O, null);
      Xl(g, x);
    }
    return null;
  }
  function h(g, b, x, O, w) {
    if (typeof O == "string" && O !== "" || typeof O == "number") return g = g.get(x) || null, s(b, g, "" + O, w);
    if (typeof O == "object" && O !== null) {
      switch (O.$$typeof) {
        case Ll:
          return g = g.get(O.key === null ? x : O.key) || null, l(b, g, O, w);
        case Xi:
          return g = g.get(O.key === null ? x : O.key) || null, u(b, g, O, w);
        case Sn:
          var S = O._init;
          return h(g, b, x, S(O._payload), w);
      }
      if (Zo(O) || To(O)) return g = g.get(x) || null, f(b, g, O, w, null);
      Xl(b, O);
    }
    return null;
  }
  function y(g, b, x, O) {
    for (var w = null, S = null, j = b, P = b = 0, k = null; j !== null && P < x.length; P++) {
      j.index > P ? (k = j, j = null) : k = j.sibling;
      var T = d(g, j, x[P], O);
      if (T === null) {
        j === null && (j = k);
        break;
      }
      e12 && j && T.alternate === null && t(g, j), b = a(T, b, P), S === null ? w = T : S.sibling = T, S = T, j = k;
    }
    if (P === x.length) return r(g, j), Ce && ni(g, P), w;
    if (j === null) {
      for (; P < x.length; P++) j = c(g, x[P], O), j !== null && (b = a(j, b, P), S === null ? w = j : S.sibling = j, S = j);
      return Ce && ni(g, P), w;
    }
    for (j = n(g, j); P < x.length; P++) k = h(j, g, P, x[P], O), k !== null && (e12 && k.alternate !== null && j.delete(k.key === null ? P : k.key), b = a(k, b, P), S === null ? w = k : S.sibling = k, S = k);
    return e12 && j.forEach(function(C) {
      return t(g, C);
    }), Ce && ni(g, P), w;
  }
  function v(g, b, x, O) {
    var w = To(x);
    if (typeof w != "function") throw Error(G(150));
    if (x = w.call(x), x == null) throw Error(G(151));
    for (var S = w = null, j = b, P = b = 0, k = null, T = x.next(); j !== null && !T.done; P++, T = x.next()) {
      j.index > P ? (k = j, j = null) : k = j.sibling;
      var C = d(g, j, T.value, O);
      if (C === null) {
        j === null && (j = k);
        break;
      }
      e12 && j && C.alternate === null && t(g, j), b = a(C, b, P), S === null ? w = C : S.sibling = C, S = C, j = k;
    }
    if (T.done) return r(g, j), Ce && ni(g, P), w;
    if (j === null) {
      for (; !T.done; P++, T = x.next()) T = c(g, T.value, O), T !== null && (b = a(T, b, P), S === null ? w = T : S.sibling = T, S = T);
      return Ce && ni(g, P), w;
    }
    for (j = n(g, j); !T.done; P++, T = x.next()) T = h(j, g, P, T.value, O), T !== null && (e12 && T.alternate !== null && j.delete(T.key === null ? P : T.key), b = a(T, b, P), S === null ? w = T : S.sibling = T, S = T);
    return e12 && j.forEach(function($) {
      return t(g, $);
    }), Ce && ni(g, P), w;
  }
  function m(g, b, x, O) {
    if (typeof x == "object" && x !== null && x.type === Yi && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ll:
          e: {
            for (var w = x.key, S = b; S !== null; ) {
              if (S.key === w) {
                if (w = x.type, w === Yi) {
                  if (S.tag === 7) {
                    r(g, S.sibling), b = i(S, x.props.children), b.return = g, g = b;
                    break e;
                  }
                } else if (S.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Sn && l0(w) === S.type) {
                  r(g, S.sibling), b = i(S, x.props), b.ref = Io(g, S, x), b.return = g, g = b;
                  break e;
                }
                r(g, S);
                break;
              } else t(g, S);
              S = S.sibling;
            }
            x.type === Yi ? (b = xi(x.props.children, g.mode, O, x.key), b.return = g, g = b) : (O = _u(x.type, x.key, x.props, null, g.mode, O), O.ref = Io(g, b, x), O.return = g, g = O);
          }
          return o(g);
        case Xi:
          e: {
            for (S = x.key; b !== null; ) {
              if (b.key === S) if (b.tag === 4 && b.stateNode.containerInfo === x.containerInfo && b.stateNode.implementation === x.implementation) {
                r(g, b.sibling), b = i(b, x.children || []), b.return = g, g = b;
                break e;
              } else {
                r(g, b);
                break;
              }
              else t(g, b);
              b = b.sibling;
            }
            b = Zd(x, g.mode, O), b.return = g, g = b;
          }
          return o(g);
        case Sn:
          return S = x._init, m(g, b, S(x._payload), O);
      }
      if (Zo(x)) return y(g, b, x, O);
      if (To(x)) return v(g, b, x, O);
      Xl(g, x);
    }
    return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, b !== null && b.tag === 6 ? (r(g, b.sibling), b = i(b, x), b.return = g, g = b) : (r(g, b), b = Jd(x, g.mode, O), b.return = g, g = b), o(g)) : r(g, b);
  }
  return m;
}
var _a = wO(true), SO = wO(false), Gu = Kn(null), Xu = null, ia = null, My = null;
function Iy() {
  My = ia = Xu = null;
}
function Ry(e12) {
  var t = Gu.current;
  $e(Gu), e12._currentValue = t;
}
function dh(e12, t, r) {
  for (; e12 !== null; ) {
    var n = e12.alternate;
    if ((e12.childLanes & t) !== t ? (e12.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e12 === r) break;
    e12 = e12.return;
  }
}
function va(e12, t) {
  Xu = e12, My = ia = null, e12 = e12.dependencies, e12 !== null && e12.firstContext !== null && (e12.lanes & t && (Et = true), e12.firstContext = null);
}
function nr(e12) {
  var t = e12._currentValue;
  if (My !== e12) if (e12 = { context: e12, memoizedValue: t, next: null }, ia === null) {
    if (Xu === null) throw Error(G(308));
    ia = e12, Xu.dependencies = { lanes: 0, firstContext: e12 };
  } else ia = ia.next = e12;
  return t;
}
var ci = null;
function Dy(e12) {
  ci === null ? ci = [e12] : ci.push(e12);
}
function OO(e12, t, r, n) {
  var i = t.interleaved;
  return i === null ? (r.next = r, Dy(t)) : (r.next = i.next, i.next = r), t.interleaved = r, an(e12, n);
}
function an(e12, t) {
  e12.lanes |= t;
  var r = e12.alternate;
  for (r !== null && (r.lanes |= t), r = e12, e12 = e12.return; e12 !== null; ) e12.childLanes |= t, r = e12.alternate, r !== null && (r.childLanes |= t), r = e12, e12 = e12.return;
  return r.tag === 3 ? r.stateNode : null;
}
var On = false;
function Ly(e12) {
  e12.updateQueue = { baseState: e12.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function jO(e12, t) {
  e12 = e12.updateQueue, t.updateQueue === e12 && (t.updateQueue = { baseState: e12.baseState, firstBaseUpdate: e12.firstBaseUpdate, lastBaseUpdate: e12.lastBaseUpdate, shared: e12.shared, effects: e12.effects });
}
function Xr(e12, t) {
  return { eventTime: e12, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Dn(e12, t, r) {
  var n = e12.updateQueue;
  if (n === null) return null;
  if (n = n.shared, he & 2) {
    var i = n.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), n.pending = t, an(e12, r);
  }
  return i = n.interleaved, i === null ? (t.next = t, Dy(n)) : (t.next = i.next, i.next = t), n.interleaved = t, an(e12, r);
}
function wu(e12, t, r) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
    var n = t.lanes;
    n &= e12.pendingLanes, r |= n, t.lanes = r, Oy(e12, r);
  }
}
function u0(e12, t) {
  var r = e12.updateQueue, n = e12.alternate;
  if (n !== null && (n = n.updateQueue, r === n)) {
    var i = null, a = null;
    if (r = r.firstBaseUpdate, r !== null) {
      do {
        var o = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
        a === null ? i = a = o : a = a.next = o, r = r.next;
      } while (r !== null);
      a === null ? i = a = t : a = a.next = t;
    } else i = a = t;
    r = { baseState: n.baseState, firstBaseUpdate: i, lastBaseUpdate: a, shared: n.shared, effects: n.effects }, e12.updateQueue = r;
    return;
  }
  e12 = r.lastBaseUpdate, e12 === null ? r.firstBaseUpdate = t : e12.next = t, r.lastBaseUpdate = t;
}
function Yu(e12, t, r, n) {
  var i = e12.updateQueue;
  On = false;
  var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var l = s, u = l.next;
    l.next = null, o === null ? a = u : o.next = u, o = l;
    var f = e12.alternate;
    f !== null && (f = f.updateQueue, s = f.lastBaseUpdate, s !== o && (s === null ? f.firstBaseUpdate = u : s.next = u, f.lastBaseUpdate = l));
  }
  if (a !== null) {
    var c = i.baseState;
    o = 0, f = u = l = null, s = a;
    do {
      var d = s.lane, h = s.eventTime;
      if ((n & d) === d) {
        f !== null && (f = f.next = { eventTime: h, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
        e: {
          var y = e12, v = s;
          switch (d = t, h = r, v.tag) {
            case 1:
              if (y = v.payload, typeof y == "function") {
                c = y.call(h, c, d);
                break e;
              }
              c = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = v.payload, d = typeof y == "function" ? y.call(h, c, d) : y, d == null) break e;
              c = Le({}, c, d);
              break e;
            case 2:
              On = true;
          }
        }
        s.callback !== null && s.lane !== 0 && (e12.flags |= 64, d = i.effects, d === null ? i.effects = [s] : d.push(s));
      } else h = { eventTime: h, lane: d, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, f === null ? (u = f = h, l = c) : f = f.next = h, o |= d;
      if (s = s.next, s === null) {
        if (s = i.shared.pending, s === null) break;
        d = s, s = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
      }
    } while (true);
    if (f === null && (l = c), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = f, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        o |= i.lane, i = i.next;
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    _i |= o, e12.lanes = o, e12.memoizedState = c;
  }
}
function c0(e12, t, r) {
  if (e12 = t.effects, t.effects = null, e12 !== null) for (t = 0; t < e12.length; t++) {
    var n = e12[t], i = n.callback;
    if (i !== null) {
      if (n.callback = null, n = r, typeof i != "function") throw Error(G(191, i));
      i.call(n);
    }
  }
}
var jl = {}, $r = Kn(jl), $s = Kn(jl), Cs = Kn(jl);
function fi(e12) {
  if (e12 === jl) throw Error(G(174));
  return e12;
}
function By(e12, t) {
  switch (Ae(Cs, t), Ae($s, e12), Ae($r, jl), e12 = t.nodeType, e12) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Kp(null, "");
      break;
    default:
      e12 = e12 === 8 ? t.parentNode : t, t = e12.namespaceURI || null, e12 = e12.tagName, t = Kp(t, e12);
  }
  $e($r), Ae($r, t);
}
function Ea() {
  $e($r), $e($s), $e(Cs);
}
function PO(e12) {
  fi(Cs.current);
  var t = fi($r.current), r = Kp(t, e12.type);
  t !== r && (Ae($s, e12), Ae($r, r));
}
function zy(e12) {
  $s.current === e12 && ($e($r), $e($s));
}
var Ie = Kn(0);
function Qu(e12) {
  for (var t = e12; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e12) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e12) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Kd = [];
function Fy() {
  for (var e12 = 0; e12 < Kd.length; e12++) Kd[e12]._workInProgressVersionPrimary = null;
  Kd.length = 0;
}
var Su = cn.ReactCurrentDispatcher, qd = cn.ReactCurrentBatchConfig, Ai = 0, Re = null, Xe = null, tt = null, Ju = false, ls = false, Ns = 0, Kk = 0;
function ct() {
  throw Error(G(321));
}
function Uy(e12, t) {
  if (t === null) return false;
  for (var r = 0; r < t.length && r < e12.length; r++) if (!xr(e12[r], t[r])) return false;
  return true;
}
function Wy(e12, t, r, n, i, a) {
  if (Ai = a, Re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Su.current = e12 === null || e12.memoizedState === null ? Yk : Qk, e12 = r(n, i), ls) {
    a = 0;
    do {
      if (ls = false, Ns = 0, 25 <= a) throw Error(G(301));
      a += 1, tt = Xe = null, t.updateQueue = null, Su.current = Jk, e12 = r(n, i);
    } while (ls);
  }
  if (Su.current = Zu, t = Xe !== null && Xe.next !== null, Ai = 0, tt = Xe = Re = null, Ju = false, t) throw Error(G(300));
  return e12;
}
function Hy() {
  var e12 = Ns !== 0;
  return Ns = 0, e12;
}
function Pr() {
  var e12 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return tt === null ? Re.memoizedState = tt = e12 : tt = tt.next = e12, tt;
}
function ir() {
  if (Xe === null) {
    var e12 = Re.alternate;
    e12 = e12 !== null ? e12.memoizedState : null;
  } else e12 = Xe.next;
  var t = tt === null ? Re.memoizedState : tt.next;
  if (t !== null) tt = t, Xe = e12;
  else {
    if (e12 === null) throw Error(G(310));
    Xe = e12, e12 = { memoizedState: Xe.memoizedState, baseState: Xe.baseState, baseQueue: Xe.baseQueue, queue: Xe.queue, next: null }, tt === null ? Re.memoizedState = tt = e12 : tt = tt.next = e12;
  }
  return tt;
}
function Ms(e12, t) {
  return typeof t == "function" ? t(e12) : t;
}
function Gd(e12) {
  var t = ir(), r = t.queue;
  if (r === null) throw Error(G(311));
  r.lastRenderedReducer = e12;
  var n = Xe, i = n.baseQueue, a = r.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      i.next = a.next, a.next = o;
    }
    n.baseQueue = i = a, r.pending = null;
  }
  if (i !== null) {
    a = i.next, n = n.baseState;
    var s = o = null, l = null, u = a;
    do {
      var f = u.lane;
      if ((Ai & f) === f) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), n = u.hasEagerState ? u.eagerState : e12(n, u.action);
      else {
        var c = { lane: f, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        l === null ? (s = l = c, o = n) : l = l.next = c, Re.lanes |= f, _i |= f;
      }
      u = u.next;
    } while (u !== null && u !== a);
    l === null ? o = n : l.next = s, xr(n, t.memoizedState) || (Et = true), t.memoizedState = n, t.baseState = o, t.baseQueue = l, r.lastRenderedState = n;
  }
  if (e12 = r.interleaved, e12 !== null) {
    i = e12;
    do
      a = i.lane, Re.lanes |= a, _i |= a, i = i.next;
    while (i !== e12);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Xd(e12) {
  var t = ir(), r = t.queue;
  if (r === null) throw Error(G(311));
  r.lastRenderedReducer = e12;
  var n = r.dispatch, i = r.pending, a = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var o = i = i.next;
    do
      a = e12(a, o.action), o = o.next;
    while (o !== i);
    xr(a, t.memoizedState) || (Et = true), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), r.lastRenderedState = a;
  }
  return [a, n];
}
function AO() {
}
function _O(e12, t) {
  var r = Re, n = ir(), i = t(), a = !xr(n.memoizedState, i);
  if (a && (n.memoizedState = i, Et = true), n = n.queue, Vy(TO.bind(null, r, n, e12), [e12]), n.getSnapshot !== t || a || tt !== null && tt.memoizedState.tag & 1) {
    if (r.flags |= 2048, Is(9, kO.bind(null, r, n, i, t), void 0, null), nt === null) throw Error(G(349));
    Ai & 30 || EO(r, t, i);
  }
  return i;
}
function EO(e12, t, r) {
  e12.flags |= 16384, e12 = { getSnapshot: t, value: r }, t = Re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Re.updateQueue = t, t.stores = [e12]) : (r = t.stores, r === null ? t.stores = [e12] : r.push(e12));
}
function kO(e12, t, r, n) {
  t.value = r, t.getSnapshot = n, $O(t) && CO(e12);
}
function TO(e12, t, r) {
  return r(function() {
    $O(t) && CO(e12);
  });
}
function $O(e12) {
  var t = e12.getSnapshot;
  e12 = e12.value;
  try {
    var r = t();
    return !xr(e12, r);
  } catch {
    return true;
  }
}
function CO(e12) {
  var t = an(e12, 1);
  t !== null && gr(t, e12, 1, -1);
}
function f0(e12) {
  var t = Pr();
  return typeof e12 == "function" && (e12 = e12()), t.memoizedState = t.baseState = e12, e12 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ms, lastRenderedState: e12 }, t.queue = e12, e12 = e12.dispatch = Xk.bind(null, Re, e12), [t.memoizedState, e12];
}
function Is(e12, t, r, n) {
  return e12 = { tag: e12, create: t, destroy: r, deps: n, next: null }, t = Re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Re.updateQueue = t, t.lastEffect = e12.next = e12) : (r = t.lastEffect, r === null ? t.lastEffect = e12.next = e12 : (n = r.next, r.next = e12, e12.next = n, t.lastEffect = e12)), e12;
}
function NO() {
  return ir().memoizedState;
}
function Ou(e12, t, r, n) {
  var i = Pr();
  Re.flags |= e12, i.memoizedState = Is(1 | t, r, void 0, n === void 0 ? null : n);
}
function gf(e12, t, r, n) {
  var i = ir();
  n = n === void 0 ? null : n;
  var a = void 0;
  if (Xe !== null) {
    var o = Xe.memoizedState;
    if (a = o.destroy, n !== null && Uy(n, o.deps)) {
      i.memoizedState = Is(t, r, a, n);
      return;
    }
  }
  Re.flags |= e12, i.memoizedState = Is(1 | t, r, a, n);
}
function d0(e12, t) {
  return Ou(8390656, 8, e12, t);
}
function Vy(e12, t) {
  return gf(2048, 8, e12, t);
}
function MO(e12, t) {
  return gf(4, 2, e12, t);
}
function IO(e12, t) {
  return gf(4, 4, e12, t);
}
function RO(e12, t) {
  if (typeof t == "function") return e12 = e12(), t(e12), function() {
    t(null);
  };
  if (t != null) return e12 = e12(), t.current = e12, function() {
    t.current = null;
  };
}
function DO(e12, t, r) {
  return r = r != null ? r.concat([e12]) : null, gf(4, 4, RO.bind(null, t, e12), r);
}
function Ky() {
}
function LO(e12, t) {
  var r = ir();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Uy(t, n[1]) ? n[0] : (r.memoizedState = [e12, t], e12);
}
function BO(e12, t) {
  var r = ir();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Uy(t, n[1]) ? n[0] : (e12 = e12(), r.memoizedState = [e12, t], e12);
}
function zO(e12, t, r) {
  return Ai & 21 ? (xr(r, t) || (r = VS(), Re.lanes |= r, _i |= r, e12.baseState = true), t) : (e12.baseState && (e12.baseState = false, Et = true), e12.memoizedState = r);
}
function qk(e12, t) {
  var r = ge;
  ge = r !== 0 && 4 > r ? r : 4, e12(true);
  var n = qd.transition;
  qd.transition = {};
  try {
    e12(false), t();
  } finally {
    ge = r, qd.transition = n;
  }
}
function FO() {
  return ir().memoizedState;
}
function Gk(e12, t, r) {
  var n = Bn(e12);
  if (r = { lane: n, action: r, hasEagerState: false, eagerState: null, next: null }, UO(e12)) WO(t, r);
  else if (r = OO(e12, t, r, n), r !== null) {
    var i = Ot();
    gr(r, e12, n, i), HO(r, t, n);
  }
}
function Xk(e12, t, r) {
  var n = Bn(e12), i = { lane: n, action: r, hasEagerState: false, eagerState: null, next: null };
  if (UO(e12)) WO(t, i);
  else {
    var a = e12.alternate;
    if (e12.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
      var o = t.lastRenderedState, s = a(o, r);
      if (i.hasEagerState = true, i.eagerState = s, xr(s, o)) {
        var l = t.interleaved;
        l === null ? (i.next = i, Dy(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    r = OO(e12, t, i, n), r !== null && (i = Ot(), gr(r, e12, n, i), HO(r, t, n));
  }
}
function UO(e12) {
  var t = e12.alternate;
  return e12 === Re || t !== null && t === Re;
}
function WO(e12, t) {
  ls = Ju = true;
  var r = e12.pending;
  r === null ? t.next = t : (t.next = r.next, r.next = t), e12.pending = t;
}
function HO(e12, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    n &= e12.pendingLanes, r |= n, t.lanes = r, Oy(e12, r);
  }
}
var Zu = { readContext: nr, useCallback: ct, useContext: ct, useEffect: ct, useImperativeHandle: ct, useInsertionEffect: ct, useLayoutEffect: ct, useMemo: ct, useReducer: ct, useRef: ct, useState: ct, useDebugValue: ct, useDeferredValue: ct, useTransition: ct, useMutableSource: ct, useSyncExternalStore: ct, useId: ct, unstable_isNewReconciler: false }, Yk = { readContext: nr, useCallback: function(e12, t) {
  return Pr().memoizedState = [e12, t === void 0 ? null : t], e12;
}, useContext: nr, useEffect: d0, useImperativeHandle: function(e12, t, r) {
  return r = r != null ? r.concat([e12]) : null, Ou(4194308, 4, RO.bind(null, t, e12), r);
}, useLayoutEffect: function(e12, t) {
  return Ou(4194308, 4, e12, t);
}, useInsertionEffect: function(e12, t) {
  return Ou(4, 2, e12, t);
}, useMemo: function(e12, t) {
  var r = Pr();
  return t = t === void 0 ? null : t, e12 = e12(), r.memoizedState = [e12, t], e12;
}, useReducer: function(e12, t, r) {
  var n = Pr();
  return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e12 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e12, lastRenderedState: t }, n.queue = e12, e12 = e12.dispatch = Gk.bind(null, Re, e12), [n.memoizedState, e12];
}, useRef: function(e12) {
  var t = Pr();
  return e12 = { current: e12 }, t.memoizedState = e12;
}, useState: f0, useDebugValue: Ky, useDeferredValue: function(e12) {
  return Pr().memoizedState = e12;
}, useTransition: function() {
  var e12 = f0(false), t = e12[0];
  return e12 = qk.bind(null, e12[1]), Pr().memoizedState = e12, [t, e12];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e12, t, r) {
  var n = Re, i = Pr();
  if (Ce) {
    if (r === void 0) throw Error(G(407));
    r = r();
  } else {
    if (r = t(), nt === null) throw Error(G(349));
    Ai & 30 || EO(n, t, r);
  }
  i.memoizedState = r;
  var a = { value: r, getSnapshot: t };
  return i.queue = a, d0(TO.bind(null, n, a, e12), [e12]), n.flags |= 2048, Is(9, kO.bind(null, n, a, r, t), void 0, null), r;
}, useId: function() {
  var e12 = Pr(), t = nt.identifierPrefix;
  if (Ce) {
    var r = Vr, n = Hr;
    r = (n & ~(1 << 32 - vr(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = Ns++, 0 < r && (t += "H" + r.toString(32)), t += ":";
  } else r = Kk++, t = ":" + t + "r" + r.toString(32) + ":";
  return e12.memoizedState = t;
}, unstable_isNewReconciler: false }, Qk = { readContext: nr, useCallback: LO, useContext: nr, useEffect: Vy, useImperativeHandle: DO, useInsertionEffect: MO, useLayoutEffect: IO, useMemo: BO, useReducer: Gd, useRef: NO, useState: function() {
  return Gd(Ms);
}, useDebugValue: Ky, useDeferredValue: function(e12) {
  var t = ir();
  return zO(t, Xe.memoizedState, e12);
}, useTransition: function() {
  var e12 = Gd(Ms)[0], t = ir().memoizedState;
  return [e12, t];
}, useMutableSource: AO, useSyncExternalStore: _O, useId: FO, unstable_isNewReconciler: false }, Jk = { readContext: nr, useCallback: LO, useContext: nr, useEffect: Vy, useImperativeHandle: DO, useInsertionEffect: MO, useLayoutEffect: IO, useMemo: BO, useReducer: Xd, useRef: NO, useState: function() {
  return Xd(Ms);
}, useDebugValue: Ky, useDeferredValue: function(e12) {
  var t = ir();
  return Xe === null ? t.memoizedState = e12 : zO(t, Xe.memoizedState, e12);
}, useTransition: function() {
  var e12 = Xd(Ms)[0], t = ir().memoizedState;
  return [e12, t];
}, useMutableSource: AO, useSyncExternalStore: _O, useId: FO, unstable_isNewReconciler: false };
function dr(e12, t) {
  if (e12 && e12.defaultProps) {
    t = Le({}, t), e12 = e12.defaultProps;
    for (var r in e12) t[r] === void 0 && (t[r] = e12[r]);
    return t;
  }
  return t;
}
function ph(e12, t, r, n) {
  t = e12.memoizedState, r = r(n, t), r = r == null ? t : Le({}, t, r), e12.memoizedState = r, e12.lanes === 0 && (e12.updateQueue.baseState = r);
}
var bf = { isMounted: function(e12) {
  return (e12 = e12._reactInternals) ? Di(e12) === e12 : false;
}, enqueueSetState: function(e12, t, r) {
  e12 = e12._reactInternals;
  var n = Ot(), i = Bn(e12), a = Xr(n, i);
  a.payload = t, r != null && (a.callback = r), t = Dn(e12, a, i), t !== null && (gr(t, e12, i, n), wu(t, e12, i));
}, enqueueReplaceState: function(e12, t, r) {
  e12 = e12._reactInternals;
  var n = Ot(), i = Bn(e12), a = Xr(n, i);
  a.tag = 1, a.payload = t, r != null && (a.callback = r), t = Dn(e12, a, i), t !== null && (gr(t, e12, i, n), wu(t, e12, i));
}, enqueueForceUpdate: function(e12, t) {
  e12 = e12._reactInternals;
  var r = Ot(), n = Bn(e12), i = Xr(r, n);
  i.tag = 2, t != null && (i.callback = t), t = Dn(e12, i, n), t !== null && (gr(t, e12, n, r), wu(t, e12, n));
} };
function p0(e12, t, r, n, i, a, o) {
  return e12 = e12.stateNode, typeof e12.shouldComponentUpdate == "function" ? e12.shouldComponentUpdate(n, a, o) : t.prototype && t.prototype.isPureReactComponent ? !_s(r, n) || !_s(i, a) : true;
}
function VO(e12, t, r) {
  var n = false, i = Hn, a = t.contextType;
  return typeof a == "object" && a !== null ? a = nr(a) : (i = $t(t) ? ji : yt.current, n = t.contextTypes, a = (n = n != null) ? Pa(e12, i) : Hn), t = new t(r, a), e12.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = bf, e12.stateNode = t, t._reactInternals = e12, n && (e12 = e12.stateNode, e12.__reactInternalMemoizedUnmaskedChildContext = i, e12.__reactInternalMemoizedMaskedChildContext = a), t;
}
function h0(e12, t, r, n) {
  e12 = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e12 && bf.enqueueReplaceState(t, t.state, null);
}
function hh(e12, t, r, n) {
  var i = e12.stateNode;
  i.props = r, i.state = e12.memoizedState, i.refs = {}, Ly(e12);
  var a = t.contextType;
  typeof a == "object" && a !== null ? i.context = nr(a) : (a = $t(t) ? ji : yt.current, i.context = Pa(e12, a)), i.state = e12.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (ph(e12, t, a, r), i.state = e12.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && bf.enqueueReplaceState(i, i.state, null), Yu(e12, r, i, n), i.state = e12.memoizedState), typeof i.componentDidMount == "function" && (e12.flags |= 4194308);
}
function ka(e12, t) {
  try {
    var r = "", n = t;
    do
      r += AE(n), n = n.return;
    while (n);
    var i = r;
  } catch (a) {
    i = `
Error generating stack: ` + a.message + `
` + a.stack;
  }
  return { value: e12, source: t, stack: i, digest: null };
}
function Yd(e12, t, r) {
  return { value: e12, source: null, stack: r ?? null, digest: t ?? null };
}
function mh(e12, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function() {
      throw r;
    });
  }
}
var Zk = typeof WeakMap == "function" ? WeakMap : Map;
function KO(e12, t, r) {
  r = Xr(-1, r), r.tag = 3, r.payload = { element: null };
  var n = t.value;
  return r.callback = function() {
    tc || (tc = true, Ph = n), mh(e12, t);
  }, r;
}
function qO(e12, t, r) {
  r = Xr(-1, r), r.tag = 3;
  var n = e12.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = t.value;
    r.payload = function() {
      return n(i);
    }, r.callback = function() {
      mh(e12, t);
    };
  }
  var a = e12.stateNode;
  return a !== null && typeof a.componentDidCatch == "function" && (r.callback = function() {
    mh(e12, t), typeof n != "function" && (Ln === null ? Ln = /* @__PURE__ */ new Set([this]) : Ln.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), r;
}
function m0(e12, t, r) {
  var n = e12.pingCache;
  if (n === null) {
    n = e12.pingCache = new Zk();
    var i = /* @__PURE__ */ new Set();
    n.set(t, i);
  } else i = n.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), n.set(t, i));
  i.has(r) || (i.add(r), e12 = pT.bind(null, e12, t, r), t.then(e12, e12));
}
function y0(e12) {
  do {
    var t;
    if ((t = e12.tag === 13) && (t = e12.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e12;
    e12 = e12.return;
  } while (e12 !== null);
  return null;
}
function v0(e12, t, r, n, i) {
  return e12.mode & 1 ? (e12.flags |= 65536, e12.lanes = i, e12) : (e12 === t ? e12.flags |= 65536 : (e12.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Xr(-1, 1), t.tag = 2, Dn(r, t, 1))), r.lanes |= 1), e12);
}
var eT = cn.ReactCurrentOwner, Et = false;
function gt(e12, t, r, n) {
  t.child = e12 === null ? SO(t, null, r, n) : _a(t, e12.child, r, n);
}
function g0(e12, t, r, n, i) {
  r = r.render;
  var a = t.ref;
  return va(t, i), n = Wy(e12, t, r, n, a, i), r = Hy(), e12 !== null && !Et ? (t.updateQueue = e12.updateQueue, t.flags &= -2053, e12.lanes &= ~i, on(e12, t, i)) : (Ce && r && $y(t), t.flags |= 1, gt(e12, t, n, i), t.child);
}
function b0(e12, t, r, n, i) {
  if (e12 === null) {
    var a = r.type;
    return typeof a == "function" && !ev(a) && a.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = a, GO(e12, t, a, n, i)) : (e12 = _u(r.type, null, n, t, t.mode, i), e12.ref = t.ref, e12.return = t, t.child = e12);
  }
  if (a = e12.child, !(e12.lanes & i)) {
    var o = a.memoizedProps;
    if (r = r.compare, r = r !== null ? r : _s, r(o, n) && e12.ref === t.ref) return on(e12, t, i);
  }
  return t.flags |= 1, e12 = zn(a, n), e12.ref = t.ref, e12.return = t, t.child = e12;
}
function GO(e12, t, r, n, i) {
  if (e12 !== null) {
    var a = e12.memoizedProps;
    if (_s(a, n) && e12.ref === t.ref) if (Et = false, t.pendingProps = n = a, (e12.lanes & i) !== 0) e12.flags & 131072 && (Et = true);
    else return t.lanes = e12.lanes, on(e12, t, i);
  }
  return yh(e12, t, r, n, i);
}
function XO(e12, t, r) {
  var n = t.pendingProps, i = n.children, a = e12 !== null ? e12.memoizedState : null;
  if (n.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ae(oa, Dt), Dt |= r;
  else {
    if (!(r & 1073741824)) return e12 = a !== null ? a.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e12, cachePool: null, transitions: null }, t.updateQueue = null, Ae(oa, Dt), Dt |= e12, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = a !== null ? a.baseLanes : r, Ae(oa, Dt), Dt |= n;
  }
  else a !== null ? (n = a.baseLanes | r, t.memoizedState = null) : n = r, Ae(oa, Dt), Dt |= n;
  return gt(e12, t, i, r), t.child;
}
function YO(e12, t) {
  var r = t.ref;
  (e12 === null && r !== null || e12 !== null && e12.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
}
function yh(e12, t, r, n, i) {
  var a = $t(r) ? ji : yt.current;
  return a = Pa(t, a), va(t, i), r = Wy(e12, t, r, n, a, i), n = Hy(), e12 !== null && !Et ? (t.updateQueue = e12.updateQueue, t.flags &= -2053, e12.lanes &= ~i, on(e12, t, i)) : (Ce && n && $y(t), t.flags |= 1, gt(e12, t, r, i), t.child);
}
function x0(e12, t, r, n, i) {
  if ($t(r)) {
    var a = true;
    Vu(t);
  } else a = false;
  if (va(t, i), t.stateNode === null) ju(e12, t), VO(t, r, n), hh(t, r, n, i), n = true;
  else if (e12 === null) {
    var o = t.stateNode, s = t.memoizedProps;
    o.props = s;
    var l = o.context, u = r.contextType;
    typeof u == "object" && u !== null ? u = nr(u) : (u = $t(r) ? ji : yt.current, u = Pa(t, u));
    var f = r.getDerivedStateFromProps, c = typeof f == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    c || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== n || l !== u) && h0(t, o, n, u), On = false;
    var d = t.memoizedState;
    o.state = d, Yu(t, n, o, i), l = t.memoizedState, s !== n || d !== l || Tt.current || On ? (typeof f == "function" && (ph(t, r, f, n), l = t.memoizedState), (s = On || p0(t, r, s, n, d, l, u)) ? (c || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), o.props = n, o.state = l, o.context = u, n = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), n = false);
  } else {
    o = t.stateNode, jO(e12, t), s = t.memoizedProps, u = t.type === t.elementType ? s : dr(t.type, s), o.props = u, c = t.pendingProps, d = o.context, l = r.contextType, typeof l == "object" && l !== null ? l = nr(l) : (l = $t(r) ? ji : yt.current, l = Pa(t, l));
    var h = r.getDerivedStateFromProps;
    (f = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== c || d !== l) && h0(t, o, n, l), On = false, d = t.memoizedState, o.state = d, Yu(t, n, o, i);
    var y = t.memoizedState;
    s !== c || d !== y || Tt.current || On ? (typeof h == "function" && (ph(t, r, h, n), y = t.memoizedState), (u = On || p0(t, r, u, n, d, y, l) || false) ? (f || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(n, y, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(n, y, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e12.memoizedProps && d === e12.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e12.memoizedProps && d === e12.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = y), o.props = n, o.state = y, o.context = l, n = u) : (typeof o.componentDidUpdate != "function" || s === e12.memoizedProps && d === e12.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e12.memoizedProps && d === e12.memoizedState || (t.flags |= 1024), n = false);
  }
  return vh(e12, t, r, n, a, i);
}
function vh(e12, t, r, n, i, a) {
  YO(e12, t);
  var o = (t.flags & 128) !== 0;
  if (!n && !o) return i && a0(t, r, false), on(e12, t, a);
  n = t.stateNode, eT.current = t;
  var s = o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return t.flags |= 1, e12 !== null && o ? (t.child = _a(t, e12.child, null, a), t.child = _a(t, null, s, a)) : gt(e12, t, s, a), t.memoizedState = n.state, i && a0(t, r, true), t.child;
}
function QO(e12) {
  var t = e12.stateNode;
  t.pendingContext ? i0(e12, t.pendingContext, t.pendingContext !== t.context) : t.context && i0(e12, t.context, false), By(e12, t.containerInfo);
}
function w0(e12, t, r, n, i) {
  return Aa(), Ny(i), t.flags |= 256, gt(e12, t, r, n), t.child;
}
var gh = { dehydrated: null, treeContext: null, retryLane: 0 };
function bh(e12) {
  return { baseLanes: e12, cachePool: null, transitions: null };
}
function JO(e12, t, r) {
  var n = t.pendingProps, i = Ie.current, a = false, o = (t.flags & 128) !== 0, s;
  if ((s = o) || (s = e12 !== null && e12.memoizedState === null ? false : (i & 2) !== 0), s ? (a = true, t.flags &= -129) : (e12 === null || e12.memoizedState !== null) && (i |= 1), Ae(Ie, i & 1), e12 === null) return fh(t), e12 = t.memoizedState, e12 !== null && (e12 = e12.dehydrated, e12 !== null) ? (t.mode & 1 ? e12.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = n.children, e12 = n.fallback, a ? (n = t.mode, a = t.child, o = { mode: "hidden", children: o }, !(n & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = Sf(o, n, 0, null), e12 = xi(e12, n, r, null), a.return = t, e12.return = t, a.sibling = e12, t.child = a, t.child.memoizedState = bh(r), t.memoizedState = gh, e12) : qy(t, o));
  if (i = e12.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return tT(e12, t, o, n, s, i, r);
  if (a) {
    a = n.fallback, o = t.mode, i = e12.child, s = i.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(o & 1) && t.child !== i ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = zn(i, l), n.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? a = zn(s, a) : (a = xi(a, o, r, null), a.flags |= 2), a.return = t, n.return = t, n.sibling = a, t.child = n, n = a, a = t.child, o = e12.child.memoizedState, o = o === null ? bh(r) : { baseLanes: o.baseLanes | r, cachePool: null, transitions: o.transitions }, a.memoizedState = o, a.childLanes = e12.childLanes & ~r, t.memoizedState = gh, n;
  }
  return a = e12.child, e12 = a.sibling, n = zn(a, { mode: "visible", children: n.children }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e12 !== null && (r = t.deletions, r === null ? (t.deletions = [e12], t.flags |= 16) : r.push(e12)), t.child = n, t.memoizedState = null, n;
}
function qy(e12, t) {
  return t = Sf({ mode: "visible", children: t }, e12.mode, 0, null), t.return = e12, e12.child = t;
}
function Yl(e12, t, r, n) {
  return n !== null && Ny(n), _a(t, e12.child, null, r), e12 = qy(t, t.pendingProps.children), e12.flags |= 2, t.memoizedState = null, e12;
}
function tT(e12, t, r, n, i, a, o) {
  if (r) return t.flags & 256 ? (t.flags &= -257, n = Yd(Error(G(422))), Yl(e12, t, o, n)) : t.memoizedState !== null ? (t.child = e12.child, t.flags |= 128, null) : (a = n.fallback, i = t.mode, n = Sf({ mode: "visible", children: n.children }, i, 0, null), a = xi(a, i, o, null), a.flags |= 2, n.return = t, a.return = t, n.sibling = a, t.child = n, t.mode & 1 && _a(t, e12.child, null, o), t.child.memoizedState = bh(o), t.memoizedState = gh, a);
  if (!(t.mode & 1)) return Yl(e12, t, o, null);
  if (i.data === "$!") {
    if (n = i.nextSibling && i.nextSibling.dataset, n) var s = n.dgst;
    return n = s, a = Error(G(419)), n = Yd(a, n, void 0), Yl(e12, t, o, n);
  }
  if (s = (o & e12.childLanes) !== 0, Et || s) {
    if (n = nt, n !== null) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (n.suspendedLanes | o) ? 0 : i, i !== 0 && i !== a.retryLane && (a.retryLane = i, an(e12, i), gr(n, e12, i, -1));
    }
    return Zy(), n = Yd(Error(G(421))), Yl(e12, t, o, n);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e12.child, t = hT.bind(null, e12), i._reactRetry = t, null) : (e12 = a.treeContext, zt = Rn(i.nextSibling), Ft = t, Ce = true, mr = null, e12 !== null && (Yt[Qt++] = Hr, Yt[Qt++] = Vr, Yt[Qt++] = Pi, Hr = e12.id, Vr = e12.overflow, Pi = t), t = qy(t, n.children), t.flags |= 4096, t);
}
function S0(e12, t, r) {
  e12.lanes |= t;
  var n = e12.alternate;
  n !== null && (n.lanes |= t), dh(e12.return, t, r);
}
function Qd(e12, t, r, n, i) {
  var a = e12.memoizedState;
  a === null ? e12.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: i } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = n, a.tail = r, a.tailMode = i);
}
function ZO(e12, t, r) {
  var n = t.pendingProps, i = n.revealOrder, a = n.tail;
  if (gt(e12, t, n.children, r), n = Ie.current, n & 2) n = n & 1 | 2, t.flags |= 128;
  else {
    if (e12 !== null && e12.flags & 128) e: for (e12 = t.child; e12 !== null; ) {
      if (e12.tag === 13) e12.memoizedState !== null && S0(e12, r, t);
      else if (e12.tag === 19) S0(e12, r, t);
      else if (e12.child !== null) {
        e12.child.return = e12, e12 = e12.child;
        continue;
      }
      if (e12 === t) break e;
      for (; e12.sibling === null; ) {
        if (e12.return === null || e12.return === t) break e;
        e12 = e12.return;
      }
      e12.sibling.return = e12.return, e12 = e12.sibling;
    }
    n &= 1;
  }
  if (Ae(Ie, n), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (r = t.child, i = null; r !== null; ) e12 = r.alternate, e12 !== null && Qu(e12) === null && (i = r), r = r.sibling;
      r = i, r === null ? (i = t.child, t.child = null) : (i = r.sibling, r.sibling = null), Qd(t, false, i, r, a);
      break;
    case "backwards":
      for (r = null, i = t.child, t.child = null; i !== null; ) {
        if (e12 = i.alternate, e12 !== null && Qu(e12) === null) {
          t.child = i;
          break;
        }
        e12 = i.sibling, i.sibling = r, r = i, i = e12;
      }
      Qd(t, true, r, null, a);
      break;
    case "together":
      Qd(t, false, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ju(e12, t) {
  !(t.mode & 1) && e12 !== null && (e12.alternate = null, t.alternate = null, t.flags |= 2);
}
function on(e12, t, r) {
  if (e12 !== null && (t.dependencies = e12.dependencies), _i |= t.lanes, !(r & t.childLanes)) return null;
  if (e12 !== null && t.child !== e12.child) throw Error(G(153));
  if (t.child !== null) {
    for (e12 = t.child, r = zn(e12, e12.pendingProps), t.child = r, r.return = t; e12.sibling !== null; ) e12 = e12.sibling, r = r.sibling = zn(e12, e12.pendingProps), r.return = t;
    r.sibling = null;
  }
  return t.child;
}
function rT(e12, t, r) {
  switch (t.tag) {
    case 3:
      QO(t), Aa();
      break;
    case 5:
      PO(t);
      break;
    case 1:
      $t(t.type) && Vu(t);
      break;
    case 4:
      By(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context, i = t.memoizedProps.value;
      Ae(Gu, n._currentValue), n._currentValue = i;
      break;
    case 13:
      if (n = t.memoizedState, n !== null) return n.dehydrated !== null ? (Ae(Ie, Ie.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? JO(e12, t, r) : (Ae(Ie, Ie.current & 1), e12 = on(e12, t, r), e12 !== null ? e12.sibling : null);
      Ae(Ie, Ie.current & 1);
      break;
    case 19:
      if (n = (r & t.childLanes) !== 0, e12.flags & 128) {
        if (n) return ZO(e12, t, r);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Ae(Ie, Ie.current), n) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, XO(e12, t, r);
  }
  return on(e12, t, r);
}
var ej, xh, tj, rj;
ej = function(e12, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e12.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      r.child.return = r, r = r.child;
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    r.sibling.return = r.return, r = r.sibling;
  }
};
xh = function() {
};
tj = function(e12, t, r, n) {
  var i = e12.memoizedProps;
  if (i !== n) {
    e12 = t.stateNode, fi($r.current);
    var a = null;
    switch (r) {
      case "input":
        i = Up(e12, i), n = Up(e12, n), a = [];
        break;
      case "select":
        i = Le({}, i, { value: void 0 }), n = Le({}, n, { value: void 0 }), a = [];
        break;
      case "textarea":
        i = Vp(e12, i), n = Vp(e12, n), a = [];
        break;
      default:
        typeof i.onClick != "function" && typeof n.onClick == "function" && (e12.onclick = Wu);
    }
    qp(r, n);
    var o;
    r = null;
    for (u in i) if (!n.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var s = i[u];
      for (o in s) s.hasOwnProperty(o) && (r || (r = {}), r[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (xs.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (s = i != null ? i[u] : void 0, n.hasOwnProperty(u) && l !== s && (l != null || s != null)) if (u === "style") if (s) {
        for (o in s) !s.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (r || (r = {}), r[o] = "");
        for (o in l) l.hasOwnProperty(o) && s[o] !== l[o] && (r || (r = {}), r[o] = l[o]);
      } else r || (a || (a = []), a.push(u, r)), r = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (a = a || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (a = a || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (xs.hasOwnProperty(u) ? (l != null && u === "onScroll" && Ee("scroll", e12), a || s === l || (a = [])) : (a = a || []).push(u, l));
    }
    r && (a = a || []).push("style", r);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
rj = function(e12, t, r, n) {
  r !== n && (t.flags |= 4);
};
function Ro(e12, t) {
  if (!Ce) switch (e12.tailMode) {
    case "hidden":
      t = e12.tail;
      for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
      r === null ? e12.tail = null : r.sibling = null;
      break;
    case "collapsed":
      r = e12.tail;
      for (var n = null; r !== null; ) r.alternate !== null && (n = r), r = r.sibling;
      n === null ? t || e12.tail === null ? e12.tail = null : e12.tail.sibling = null : n.sibling = null;
  }
}
function ft(e12) {
  var t = e12.alternate !== null && e12.alternate.child === e12.child, r = 0, n = 0;
  if (t) for (var i = e12.child; i !== null; ) r |= i.lanes | i.childLanes, n |= i.subtreeFlags & 14680064, n |= i.flags & 14680064, i.return = e12, i = i.sibling;
  else for (i = e12.child; i !== null; ) r |= i.lanes | i.childLanes, n |= i.subtreeFlags, n |= i.flags, i.return = e12, i = i.sibling;
  return e12.subtreeFlags |= n, e12.childLanes = r, t;
}
function nT(e12, t, r) {
  var n = t.pendingProps;
  switch (Cy(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ft(t), null;
    case 1:
      return $t(t.type) && Hu(), ft(t), null;
    case 3:
      return n = t.stateNode, Ea(), $e(Tt), $e(yt), Fy(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e12 === null || e12.child === null) && (Gl(t) ? t.flags |= 4 : e12 === null || e12.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, mr !== null && (Eh(mr), mr = null))), xh(e12, t), ft(t), null;
    case 5:
      zy(t);
      var i = fi(Cs.current);
      if (r = t.type, e12 !== null && t.stateNode != null) tj(e12, t, r, n, i), e12.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(G(166));
          return ft(t), null;
        }
        if (e12 = fi($r.current), Gl(t)) {
          n = t.stateNode, r = t.type;
          var a = t.memoizedProps;
          switch (n[Ar] = t, n[Ts] = a, e12 = (t.mode & 1) !== 0, r) {
            case "dialog":
              Ee("cancel", n), Ee("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ee("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ts.length; i++) Ee(ts[i], n);
              break;
            case "source":
              Ee("error", n);
              break;
            case "img":
            case "image":
            case "link":
              Ee("error", n), Ee("load", n);
              break;
            case "details":
              Ee("toggle", n);
              break;
            case "input":
              $g(n, a), Ee("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!a.multiple }, Ee("invalid", n);
              break;
            case "textarea":
              Ng(n, a), Ee("invalid", n);
          }
          qp(r, a), i = null;
          for (var o in a) if (a.hasOwnProperty(o)) {
            var s = a[o];
            o === "children" ? typeof s == "string" ? n.textContent !== s && (a.suppressHydrationWarning !== true && ql(n.textContent, s, e12), i = ["children", s]) : typeof s == "number" && n.textContent !== "" + s && (a.suppressHydrationWarning !== true && ql(n.textContent, s, e12), i = ["children", "" + s]) : xs.hasOwnProperty(o) && s != null && o === "onScroll" && Ee("scroll", n);
          }
          switch (r) {
            case "input":
              Bl(n), Cg(n, a, true);
              break;
            case "textarea":
              Bl(n), Mg(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (n.onclick = Wu);
          }
          n = i, t.updateQueue = n, n !== null && (t.flags |= 4);
        } else {
          o = i.nodeType === 9 ? i : i.ownerDocument, e12 === "http://www.w3.org/1999/xhtml" && (e12 = TS(r)), e12 === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e12 = o.createElement("div"), e12.innerHTML = "<script><\/script>", e12 = e12.removeChild(e12.firstChild)) : typeof n.is == "string" ? e12 = o.createElement(r, { is: n.is }) : (e12 = o.createElement(r), r === "select" && (o = e12, n.multiple ? o.multiple = true : n.size && (o.size = n.size))) : e12 = o.createElementNS(e12, r), e12[Ar] = t, e12[Ts] = n, ej(e12, t, false, false), t.stateNode = e12;
          e: {
            switch (o = Gp(r, n), r) {
              case "dialog":
                Ee("cancel", e12), Ee("close", e12), i = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                Ee("load", e12), i = n;
                break;
              case "video":
              case "audio":
                for (i = 0; i < ts.length; i++) Ee(ts[i], e12);
                i = n;
                break;
              case "source":
                Ee("error", e12), i = n;
                break;
              case "img":
              case "image":
              case "link":
                Ee("error", e12), Ee("load", e12), i = n;
                break;
              case "details":
                Ee("toggle", e12), i = n;
                break;
              case "input":
                $g(e12, n), i = Up(e12, n), Ee("invalid", e12);
                break;
              case "option":
                i = n;
                break;
              case "select":
                e12._wrapperState = { wasMultiple: !!n.multiple }, i = Le({}, n, { value: void 0 }), Ee("invalid", e12);
                break;
              case "textarea":
                Ng(e12, n), i = Vp(e12, n), Ee("invalid", e12);
                break;
              default:
                i = n;
            }
            qp(r, i), s = i;
            for (a in s) if (s.hasOwnProperty(a)) {
              var l = s[a];
              a === "style" ? NS(e12, l) : a === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && $S(e12, l)) : a === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && ws(e12, l) : typeof l == "number" && ws(e12, "" + l) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (xs.hasOwnProperty(a) ? l != null && a === "onScroll" && Ee("scroll", e12) : l != null && vy(e12, a, l, o));
            }
            switch (r) {
              case "input":
                Bl(e12), Cg(e12, n, false);
                break;
              case "textarea":
                Bl(e12), Mg(e12);
                break;
              case "option":
                n.value != null && e12.setAttribute("value", "" + Wn(n.value));
                break;
              case "select":
                e12.multiple = !!n.multiple, a = n.value, a != null ? pa(e12, !!n.multiple, a, false) : n.defaultValue != null && pa(e12, !!n.multiple, n.defaultValue, true);
                break;
              default:
                typeof i.onClick == "function" && (e12.onclick = Wu);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = true;
                break e;
              default:
                n = false;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return ft(t), null;
    case 6:
      if (e12 && t.stateNode != null) rj(e12, t, e12.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(G(166));
        if (r = fi(Cs.current), fi($r.current), Gl(t)) {
          if (n = t.stateNode, r = t.memoizedProps, n[Ar] = t, (a = n.nodeValue !== r) && (e12 = Ft, e12 !== null)) switch (e12.tag) {
            case 3:
              ql(n.nodeValue, r, (e12.mode & 1) !== 0);
              break;
            case 5:
              e12.memoizedProps.suppressHydrationWarning !== true && ql(n.nodeValue, r, (e12.mode & 1) !== 0);
          }
          a && (t.flags |= 4);
        } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[Ar] = t, t.stateNode = n;
      }
      return ft(t), null;
    case 13:
      if ($e(Ie), n = t.memoizedState, e12 === null || e12.memoizedState !== null && e12.memoizedState.dehydrated !== null) {
        if (Ce && zt !== null && t.mode & 1 && !(t.flags & 128)) xO(), Aa(), t.flags |= 98560, a = false;
        else if (a = Gl(t), n !== null && n.dehydrated !== null) {
          if (e12 === null) {
            if (!a) throw Error(G(318));
            if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(G(317));
            a[Ar] = t;
          } else Aa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ft(t), a = false;
        } else mr !== null && (Eh(mr), mr = null), a = true;
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e12 !== null && e12.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e12 === null || Ie.current & 1 ? Qe === 0 && (Qe = 3) : Zy())), t.updateQueue !== null && (t.flags |= 4), ft(t), null);
    case 4:
      return Ea(), xh(e12, t), e12 === null && Es(t.stateNode.containerInfo), ft(t), null;
    case 10:
      return Ry(t.type._context), ft(t), null;
    case 17:
      return $t(t.type) && Hu(), ft(t), null;
    case 19:
      if ($e(Ie), a = t.memoizedState, a === null) return ft(t), null;
      if (n = (t.flags & 128) !== 0, o = a.rendering, o === null) if (n) Ro(a, false);
      else {
        if (Qe !== 0 || e12 !== null && e12.flags & 128) for (e12 = t.child; e12 !== null; ) {
          if (o = Qu(e12), o !== null) {
            for (t.flags |= 128, Ro(a, false), n = o.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; ) a = r, e12 = n, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e12, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e12 = o.dependencies, a.dependencies = e12 === null ? null : { lanes: e12.lanes, firstContext: e12.firstContext }), r = r.sibling;
            return Ae(Ie, Ie.current & 1 | 2), t.child;
          }
          e12 = e12.sibling;
        }
        a.tail !== null && Fe() > Ta && (t.flags |= 128, n = true, Ro(a, false), t.lanes = 4194304);
      }
      else {
        if (!n) if (e12 = Qu(o), e12 !== null) {
          if (t.flags |= 128, n = true, r = e12.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), Ro(a, true), a.tail === null && a.tailMode === "hidden" && !o.alternate && !Ce) return ft(t), null;
        } else 2 * Fe() - a.renderingStartTime > Ta && r !== 1073741824 && (t.flags |= 128, n = true, Ro(a, false), t.lanes = 4194304);
        a.isBackwards ? (o.sibling = t.child, t.child = o) : (r = a.last, r !== null ? r.sibling = o : t.child = o, a.last = o);
      }
      return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Fe(), t.sibling = null, r = Ie.current, Ae(Ie, n ? r & 1 | 2 : r & 1), t) : (ft(t), null);
    case 22:
    case 23:
      return Jy(), n = t.memoizedState !== null, e12 !== null && e12.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? Dt & 1073741824 && (ft(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ft(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(G(156, t.tag));
}
function iT(e12, t) {
  switch (Cy(t), t.tag) {
    case 1:
      return $t(t.type) && Hu(), e12 = t.flags, e12 & 65536 ? (t.flags = e12 & -65537 | 128, t) : null;
    case 3:
      return Ea(), $e(Tt), $e(yt), Fy(), e12 = t.flags, e12 & 65536 && !(e12 & 128) ? (t.flags = e12 & -65537 | 128, t) : null;
    case 5:
      return zy(t), null;
    case 13:
      if ($e(Ie), e12 = t.memoizedState, e12 !== null && e12.dehydrated !== null) {
        if (t.alternate === null) throw Error(G(340));
        Aa();
      }
      return e12 = t.flags, e12 & 65536 ? (t.flags = e12 & -65537 | 128, t) : null;
    case 19:
      return $e(Ie), null;
    case 4:
      return Ea(), null;
    case 10:
      return Ry(t.type._context), null;
    case 22:
    case 23:
      return Jy(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ql = false, pt = false, aT = typeof WeakSet == "function" ? WeakSet : Set, J = null;
function aa(e12, t) {
  var r = e12.ref;
  if (r !== null) if (typeof r == "function") try {
    r(null);
  } catch (n) {
    Be(e12, t, n);
  }
  else r.current = null;
}
function wh(e12, t, r) {
  try {
    r();
  } catch (n) {
    Be(e12, t, n);
  }
}
var O0 = false;
function oT(e12, t) {
  if (ih = zu, e12 = sO(), Ty(e12)) {
    if ("selectionStart" in e12) var r = { start: e12.selectionStart, end: e12.selectionEnd };
    else e: {
      r = (r = e12.ownerDocument) && r.defaultView || window;
      var n = r.getSelection && r.getSelection();
      if (n && n.rangeCount !== 0) {
        r = n.anchorNode;
        var i = n.anchorOffset, a = n.focusNode;
        n = n.focusOffset;
        try {
          r.nodeType, a.nodeType;
        } catch {
          r = null;
          break e;
        }
        var o = 0, s = -1, l = -1, u = 0, f = 0, c = e12, d = null;
        t: for (; ; ) {
          for (var h; c !== r || i !== 0 && c.nodeType !== 3 || (s = o + i), c !== a || n !== 0 && c.nodeType !== 3 || (l = o + n), c.nodeType === 3 && (o += c.nodeValue.length), (h = c.firstChild) !== null; ) d = c, c = h;
          for (; ; ) {
            if (c === e12) break t;
            if (d === r && ++u === i && (s = o), d === a && ++f === n && (l = o), (h = c.nextSibling) !== null) break;
            c = d, d = c.parentNode;
          }
          c = h;
        }
        r = s === -1 || l === -1 ? null : { start: s, end: l };
      } else r = null;
    }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (ah = { focusedElem: e12, selectionRange: r }, zu = false, J = t; J !== null; ) if (t = J, e12 = t.child, (t.subtreeFlags & 1028) !== 0 && e12 !== null) e12.return = t, J = e12;
  else for (; J !== null; ) {
    t = J;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var v = y.memoizedProps, m = y.memoizedState, g = t.stateNode, b = g.getSnapshotBeforeUpdate(t.elementType === t.type ? v : dr(t.type, v), m);
            g.__reactInternalSnapshotBeforeUpdate = b;
          }
          break;
        case 3:
          var x = t.stateNode.containerInfo;
          x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(G(163));
      }
    } catch (O) {
      Be(t, t.return, O);
    }
    if (e12 = t.sibling, e12 !== null) {
      e12.return = t.return, J = e12;
      break;
    }
    J = t.return;
  }
  return y = O0, O0 = false, y;
}
function us(e12, t, r) {
  var n = t.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var i = n = n.next;
    do {
      if ((i.tag & e12) === e12) {
        var a = i.destroy;
        i.destroy = void 0, a !== void 0 && wh(t, r, a);
      }
      i = i.next;
    } while (i !== n);
  }
}
function xf(e12, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var r = t = t.next;
    do {
      if ((r.tag & e12) === e12) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function Sh(e12) {
  var t = e12.ref;
  if (t !== null) {
    var r = e12.stateNode;
    switch (e12.tag) {
      case 5:
        e12 = r;
        break;
      default:
        e12 = r;
    }
    typeof t == "function" ? t(e12) : t.current = e12;
  }
}
function nj(e12) {
  var t = e12.alternate;
  t !== null && (e12.alternate = null, nj(t)), e12.child = null, e12.deletions = null, e12.sibling = null, e12.tag === 5 && (t = e12.stateNode, t !== null && (delete t[Ar], delete t[Ts], delete t[lh], delete t[Uk], delete t[Wk])), e12.stateNode = null, e12.return = null, e12.dependencies = null, e12.memoizedProps = null, e12.memoizedState = null, e12.pendingProps = null, e12.stateNode = null, e12.updateQueue = null;
}
function ij(e12) {
  return e12.tag === 5 || e12.tag === 3 || e12.tag === 4;
}
function j0(e12) {
  e: for (; ; ) {
    for (; e12.sibling === null; ) {
      if (e12.return === null || ij(e12.return)) return null;
      e12 = e12.return;
    }
    for (e12.sibling.return = e12.return, e12 = e12.sibling; e12.tag !== 5 && e12.tag !== 6 && e12.tag !== 18; ) {
      if (e12.flags & 2 || e12.child === null || e12.tag === 4) continue e;
      e12.child.return = e12, e12 = e12.child;
    }
    if (!(e12.flags & 2)) return e12.stateNode;
  }
}
function Oh(e12, t, r) {
  var n = e12.tag;
  if (n === 5 || n === 6) e12 = e12.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e12, t) : r.insertBefore(e12, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e12, r)) : (t = r, t.appendChild(e12)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Wu));
  else if (n !== 4 && (e12 = e12.child, e12 !== null)) for (Oh(e12, t, r), e12 = e12.sibling; e12 !== null; ) Oh(e12, t, r), e12 = e12.sibling;
}
function jh(e12, t, r) {
  var n = e12.tag;
  if (n === 5 || n === 6) e12 = e12.stateNode, t ? r.insertBefore(e12, t) : r.appendChild(e12);
  else if (n !== 4 && (e12 = e12.child, e12 !== null)) for (jh(e12, t, r), e12 = e12.sibling; e12 !== null; ) jh(e12, t, r), e12 = e12.sibling;
}
var st = null, pr = false;
function gn(e12, t, r) {
  for (r = r.child; r !== null; ) aj(e12, t, r), r = r.sibling;
}
function aj(e12, t, r) {
  if (Tr && typeof Tr.onCommitFiberUnmount == "function") try {
    Tr.onCommitFiberUnmount(df, r);
  } catch {
  }
  switch (r.tag) {
    case 5:
      pt || aa(r, t);
    case 6:
      var n = st, i = pr;
      st = null, gn(e12, t, r), st = n, pr = i, st !== null && (pr ? (e12 = st, r = r.stateNode, e12.nodeType === 8 ? e12.parentNode.removeChild(r) : e12.removeChild(r)) : st.removeChild(r.stateNode));
      break;
    case 18:
      st !== null && (pr ? (e12 = st, r = r.stateNode, e12.nodeType === 8 ? Hd(e12.parentNode, r) : e12.nodeType === 1 && Hd(e12, r), Ps(e12)) : Hd(st, r.stateNode));
      break;
    case 4:
      n = st, i = pr, st = r.stateNode.containerInfo, pr = true, gn(e12, t, r), st = n, pr = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!pt && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        i = n = n.next;
        do {
          var a = i, o = a.destroy;
          a = a.tag, o !== void 0 && (a & 2 || a & 4) && wh(r, t, o), i = i.next;
        } while (i !== n);
      }
      gn(e12, t, r);
      break;
    case 1:
      if (!pt && (aa(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
        n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
      } catch (s) {
        Be(r, t, s);
      }
      gn(e12, t, r);
      break;
    case 21:
      gn(e12, t, r);
      break;
    case 22:
      r.mode & 1 ? (pt = (n = pt) || r.memoizedState !== null, gn(e12, t, r), pt = n) : gn(e12, t, r);
      break;
    default:
      gn(e12, t, r);
  }
}
function P0(e12) {
  var t = e12.updateQueue;
  if (t !== null) {
    e12.updateQueue = null;
    var r = e12.stateNode;
    r === null && (r = e12.stateNode = new aT()), t.forEach(function(n) {
      var i = mT.bind(null, e12, n);
      r.has(n) || (r.add(n), n.then(i, i));
    });
  }
}
function cr(e12, t) {
  var r = t.deletions;
  if (r !== null) for (var n = 0; n < r.length; n++) {
    var i = r[n];
    try {
      var a = e12, o = t, s = o;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            st = s.stateNode, pr = false;
            break e;
          case 3:
            st = s.stateNode.containerInfo, pr = true;
            break e;
          case 4:
            st = s.stateNode.containerInfo, pr = true;
            break e;
        }
        s = s.return;
      }
      if (st === null) throw Error(G(160));
      aj(a, o, i), st = null, pr = false;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (u) {
      Be(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) oj(t, e12), t = t.sibling;
}
function oj(e12, t) {
  var r = e12.alternate, n = e12.flags;
  switch (e12.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (cr(t, e12), Or(e12), n & 4) {
        try {
          us(3, e12, e12.return), xf(3, e12);
        } catch (v) {
          Be(e12, e12.return, v);
        }
        try {
          us(5, e12, e12.return);
        } catch (v) {
          Be(e12, e12.return, v);
        }
      }
      break;
    case 1:
      cr(t, e12), Or(e12), n & 512 && r !== null && aa(r, r.return);
      break;
    case 5:
      if (cr(t, e12), Or(e12), n & 512 && r !== null && aa(r, r.return), e12.flags & 32) {
        var i = e12.stateNode;
        try {
          ws(i, "");
        } catch (v) {
          Be(e12, e12.return, v);
        }
      }
      if (n & 4 && (i = e12.stateNode, i != null)) {
        var a = e12.memoizedProps, o = r !== null ? r.memoizedProps : a, s = e12.type, l = e12.updateQueue;
        if (e12.updateQueue = null, l !== null) try {
          s === "input" && a.type === "radio" && a.name != null && ES(i, a), Gp(s, o);
          var u = Gp(s, a);
          for (o = 0; o < l.length; o += 2) {
            var f = l[o], c = l[o + 1];
            f === "style" ? NS(i, c) : f === "dangerouslySetInnerHTML" ? $S(i, c) : f === "children" ? ws(i, c) : vy(i, f, c, u);
          }
          switch (s) {
            case "input":
              Wp(i, a);
              break;
            case "textarea":
              kS(i, a);
              break;
            case "select":
              var d = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!a.multiple;
              var h = a.value;
              h != null ? pa(i, !!a.multiple, h, false) : d !== !!a.multiple && (a.defaultValue != null ? pa(i, !!a.multiple, a.defaultValue, true) : pa(i, !!a.multiple, a.multiple ? [] : "", false));
          }
          i[Ts] = a;
        } catch (v) {
          Be(e12, e12.return, v);
        }
      }
      break;
    case 6:
      if (cr(t, e12), Or(e12), n & 4) {
        if (e12.stateNode === null) throw Error(G(162));
        i = e12.stateNode, a = e12.memoizedProps;
        try {
          i.nodeValue = a;
        } catch (v) {
          Be(e12, e12.return, v);
        }
      }
      break;
    case 3:
      if (cr(t, e12), Or(e12), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
        Ps(t.containerInfo);
      } catch (v) {
        Be(e12, e12.return, v);
      }
      break;
    case 4:
      cr(t, e12), Or(e12);
      break;
    case 13:
      cr(t, e12), Or(e12), i = e12.child, i.flags & 8192 && (a = i.memoizedState !== null, i.stateNode.isHidden = a, !a || i.alternate !== null && i.alternate.memoizedState !== null || (Yy = Fe())), n & 4 && P0(e12);
      break;
    case 22:
      if (f = r !== null && r.memoizedState !== null, e12.mode & 1 ? (pt = (u = pt) || f, cr(t, e12), pt = u) : cr(t, e12), Or(e12), n & 8192) {
        if (u = e12.memoizedState !== null, (e12.stateNode.isHidden = u) && !f && e12.mode & 1) for (J = e12, f = e12.child; f !== null; ) {
          for (c = J = f; J !== null; ) {
            switch (d = J, h = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                us(4, d, d.return);
                break;
              case 1:
                aa(d, d.return);
                var y = d.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  n = d, r = d.return;
                  try {
                    t = n, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (v) {
                    Be(n, r, v);
                  }
                }
                break;
              case 5:
                aa(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  _0(c);
                  continue;
                }
            }
            h !== null ? (h.return = d, J = h) : _0(c);
          }
          f = f.sibling;
        }
        e: for (f = null, c = e12; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                i = c.stateNode, u ? (a = i.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (s = c.stateNode, l = c.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = CS("display", o));
              } catch (v) {
                Be(e12, e12.return, v);
              }
            }
          } else if (c.tag === 6) {
            if (f === null) try {
              c.stateNode.nodeValue = u ? "" : c.memoizedProps;
            } catch (v) {
              Be(e12, e12.return, v);
            }
          } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e12) && c.child !== null) {
            c.child.return = c, c = c.child;
            continue;
          }
          if (c === e12) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e12) break e;
            f === c && (f = null), c = c.return;
          }
          f === c && (f = null), c.sibling.return = c.return, c = c.sibling;
        }
      }
      break;
    case 19:
      cr(t, e12), Or(e12), n & 4 && P0(e12);
      break;
    case 21:
      break;
    default:
      cr(t, e12), Or(e12);
  }
}
function Or(e12) {
  var t = e12.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e12.return; r !== null; ) {
          if (ij(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(G(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (ws(i, ""), n.flags &= -33);
          var a = j0(e12);
          jh(e12, a, i);
          break;
        case 3:
        case 4:
          var o = n.stateNode.containerInfo, s = j0(e12);
          Oh(e12, s, o);
          break;
        default:
          throw Error(G(161));
      }
    } catch (l) {
      Be(e12, e12.return, l);
    }
    e12.flags &= -3;
  }
  t & 4096 && (e12.flags &= -4097);
}
function sT(e12, t, r) {
  J = e12, sj(e12);
}
function sj(e12, t, r) {
  for (var n = (e12.mode & 1) !== 0; J !== null; ) {
    var i = J, a = i.child;
    if (i.tag === 22 && n) {
      var o = i.memoizedState !== null || Ql;
      if (!o) {
        var s = i.alternate, l = s !== null && s.memoizedState !== null || pt;
        s = Ql;
        var u = pt;
        if (Ql = o, (pt = l) && !u) for (J = i; J !== null; ) o = J, l = o.child, o.tag === 22 && o.memoizedState !== null ? E0(i) : l !== null ? (l.return = o, J = l) : E0(i);
        for (; a !== null; ) J = a, sj(a), a = a.sibling;
        J = i, Ql = s, pt = u;
      }
      A0(e12);
    } else i.subtreeFlags & 8772 && a !== null ? (a.return = i, J = a) : A0(e12);
  }
}
function A0(e12) {
  for (; J !== null; ) {
    var t = J;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            pt || xf(5, t);
            break;
          case 1:
            var n = t.stateNode;
            if (t.flags & 4 && !pt) if (r === null) n.componentDidMount();
            else {
              var i = t.elementType === t.type ? r.memoizedProps : dr(t.type, r.memoizedProps);
              n.componentDidUpdate(i, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
            }
            var a = t.updateQueue;
            a !== null && c0(t, a, n);
            break;
          case 3:
            var o = t.updateQueue;
            if (o !== null) {
              if (r = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  r = t.child.stateNode;
                  break;
                case 1:
                  r = t.child.stateNode;
              }
              c0(t, o, r);
            }
            break;
          case 5:
            var s = t.stateNode;
            if (r === null && t.flags & 4) {
              r = s;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && r.focus();
                  break;
                case "img":
                  l.src && (r.src = l.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var f = u.memoizedState;
                if (f !== null) {
                  var c = f.dehydrated;
                  c !== null && Ps(c);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(G(163));
        }
        pt || t.flags & 512 && Sh(t);
      } catch (d) {
        Be(t, t.return, d);
      }
    }
    if (t === e12) {
      J = null;
      break;
    }
    if (r = t.sibling, r !== null) {
      r.return = t.return, J = r;
      break;
    }
    J = t.return;
  }
}
function _0(e12) {
  for (; J !== null; ) {
    var t = J;
    if (t === e12) {
      J = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      r.return = t.return, J = r;
      break;
    }
    J = t.return;
  }
}
function E0(e12) {
  for (; J !== null; ) {
    var t = J;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            xf(4, t);
          } catch (l) {
            Be(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              Be(t, i, l);
            }
          }
          var a = t.return;
          try {
            Sh(t);
          } catch (l) {
            Be(t, a, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Sh(t);
          } catch (l) {
            Be(t, o, l);
          }
      }
    } catch (l) {
      Be(t, t.return, l);
    }
    if (t === e12) {
      J = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, J = s;
      break;
    }
    J = t.return;
  }
}
var lT = Math.ceil, ec = cn.ReactCurrentDispatcher, Gy = cn.ReactCurrentOwner, tr = cn.ReactCurrentBatchConfig, he = 0, nt = null, He = null, lt = 0, Dt = 0, oa = Kn(0), Qe = 0, Rs = null, _i = 0, wf = 0, Xy = 0, cs = null, At = null, Yy = 0, Ta = 1 / 0, Fr = null, tc = false, Ph = null, Ln = null, Jl = false, kn = null, rc = 0, fs = 0, Ah = null, Pu = -1, Au = 0;
function Ot() {
  return he & 6 ? Fe() : Pu !== -1 ? Pu : Pu = Fe();
}
function Bn(e12) {
  return e12.mode & 1 ? he & 2 && lt !== 0 ? lt & -lt : Vk.transition !== null ? (Au === 0 && (Au = VS()), Au) : (e12 = ge, e12 !== 0 || (e12 = window.event, e12 = e12 === void 0 ? 16 : JS(e12.type)), e12) : 1;
}
function gr(e12, t, r, n) {
  if (50 < fs) throw fs = 0, Ah = null, Error(G(185));
  wl(e12, r, n), (!(he & 2) || e12 !== nt) && (e12 === nt && (!(he & 2) && (wf |= r), Qe === 4 && An(e12, lt)), Ct(e12, n), r === 1 && he === 0 && !(t.mode & 1) && (Ta = Fe() + 500, vf && qn()));
}
function Ct(e12, t) {
  var r = e12.callbackNode;
  VE(e12, t);
  var n = Bu(e12, e12 === nt ? lt : 0);
  if (n === 0) r !== null && Dg(r), e12.callbackNode = null, e12.callbackPriority = 0;
  else if (t = n & -n, e12.callbackPriority !== t) {
    if (r != null && Dg(r), t === 1) e12.tag === 0 ? Hk(k0.bind(null, e12)) : vO(k0.bind(null, e12)), zk(function() {
      !(he & 6) && qn();
    }), r = null;
    else {
      switch (KS(n)) {
        case 1:
          r = Sy;
          break;
        case 4:
          r = WS;
          break;
        case 16:
          r = Lu;
          break;
        case 536870912:
          r = HS;
          break;
        default:
          r = Lu;
      }
      r = mj(r, lj.bind(null, e12));
    }
    e12.callbackPriority = t, e12.callbackNode = r;
  }
}
function lj(e12, t) {
  if (Pu = -1, Au = 0, he & 6) throw Error(G(327));
  var r = e12.callbackNode;
  if (ga() && e12.callbackNode !== r) return null;
  var n = Bu(e12, e12 === nt ? lt : 0);
  if (n === 0) return null;
  if (n & 30 || n & e12.expiredLanes || t) t = nc(e12, n);
  else {
    t = n;
    var i = he;
    he |= 2;
    var a = cj();
    (nt !== e12 || lt !== t) && (Fr = null, Ta = Fe() + 500, bi(e12, t));
    do
      try {
        fT();
        break;
      } catch (s) {
        uj(e12, s);
      }
    while (true);
    Iy(), ec.current = a, he = i, He !== null ? t = 0 : (nt = null, lt = 0, t = Qe);
  }
  if (t !== 0) {
    if (t === 2 && (i = Zp(e12), i !== 0 && (n = i, t = _h(e12, i))), t === 1) throw r = Rs, bi(e12, 0), An(e12, n), Ct(e12, Fe()), r;
    if (t === 6) An(e12, n);
    else {
      if (i = e12.current.alternate, !(n & 30) && !uT(i) && (t = nc(e12, n), t === 2 && (a = Zp(e12), a !== 0 && (n = a, t = _h(e12, a))), t === 1)) throw r = Rs, bi(e12, 0), An(e12, n), Ct(e12, Fe()), r;
      switch (e12.finishedWork = i, e12.finishedLanes = n, t) {
        case 0:
        case 1:
          throw Error(G(345));
        case 2:
          ii(e12, At, Fr);
          break;
        case 3:
          if (An(e12, n), (n & 130023424) === n && (t = Yy + 500 - Fe(), 10 < t)) {
            if (Bu(e12, 0) !== 0) break;
            if (i = e12.suspendedLanes, (i & n) !== n) {
              Ot(), e12.pingedLanes |= e12.suspendedLanes & i;
              break;
            }
            e12.timeoutHandle = sh(ii.bind(null, e12, At, Fr), t);
            break;
          }
          ii(e12, At, Fr);
          break;
        case 4:
          if (An(e12, n), (n & 4194240) === n) break;
          for (t = e12.eventTimes, i = -1; 0 < n; ) {
            var o = 31 - vr(n);
            a = 1 << o, o = t[o], o > i && (i = o), n &= ~a;
          }
          if (n = i, n = Fe() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * lT(n / 1960)) - n, 10 < n) {
            e12.timeoutHandle = sh(ii.bind(null, e12, At, Fr), n);
            break;
          }
          ii(e12, At, Fr);
          break;
        case 5:
          ii(e12, At, Fr);
          break;
        default:
          throw Error(G(329));
      }
    }
  }
  return Ct(e12, Fe()), e12.callbackNode === r ? lj.bind(null, e12) : null;
}
function _h(e12, t) {
  var r = cs;
  return e12.current.memoizedState.isDehydrated && (bi(e12, t).flags |= 256), e12 = nc(e12, t), e12 !== 2 && (t = At, At = r, t !== null && Eh(t)), e12;
}
function Eh(e12) {
  At === null ? At = e12 : At.push.apply(At, e12);
}
function uT(e12) {
  for (var t = e12; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && (r = r.stores, r !== null)) for (var n = 0; n < r.length; n++) {
        var i = r[n], a = i.getSnapshot;
        i = i.value;
        try {
          if (!xr(a(), i)) return false;
        } catch {
          return false;
        }
      }
    }
    if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
    else {
      if (t === e12) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e12) return true;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return true;
}
function An(e12, t) {
  for (t &= ~Xy, t &= ~wf, e12.suspendedLanes |= t, e12.pingedLanes &= ~t, e12 = e12.expirationTimes; 0 < t; ) {
    var r = 31 - vr(t), n = 1 << r;
    e12[r] = -1, t &= ~n;
  }
}
function k0(e12) {
  if (he & 6) throw Error(G(327));
  ga();
  var t = Bu(e12, 0);
  if (!(t & 1)) return Ct(e12, Fe()), null;
  var r = nc(e12, t);
  if (e12.tag !== 0 && r === 2) {
    var n = Zp(e12);
    n !== 0 && (t = n, r = _h(e12, n));
  }
  if (r === 1) throw r = Rs, bi(e12, 0), An(e12, t), Ct(e12, Fe()), r;
  if (r === 6) throw Error(G(345));
  return e12.finishedWork = e12.current.alternate, e12.finishedLanes = t, ii(e12, At, Fr), Ct(e12, Fe()), null;
}
function Qy(e12, t) {
  var r = he;
  he |= 1;
  try {
    return e12(t);
  } finally {
    he = r, he === 0 && (Ta = Fe() + 500, vf && qn());
  }
}
function Ei(e12) {
  kn !== null && kn.tag === 0 && !(he & 6) && ga();
  var t = he;
  he |= 1;
  var r = tr.transition, n = ge;
  try {
    if (tr.transition = null, ge = 1, e12) return e12();
  } finally {
    ge = n, tr.transition = r, he = t, !(he & 6) && qn();
  }
}
function Jy() {
  Dt = oa.current, $e(oa);
}
function bi(e12, t) {
  e12.finishedWork = null, e12.finishedLanes = 0;
  var r = e12.timeoutHandle;
  if (r !== -1 && (e12.timeoutHandle = -1, Bk(r)), He !== null) for (r = He.return; r !== null; ) {
    var n = r;
    switch (Cy(n), n.tag) {
      case 1:
        n = n.type.childContextTypes, n != null && Hu();
        break;
      case 3:
        Ea(), $e(Tt), $e(yt), Fy();
        break;
      case 5:
        zy(n);
        break;
      case 4:
        Ea();
        break;
      case 13:
        $e(Ie);
        break;
      case 19:
        $e(Ie);
        break;
      case 10:
        Ry(n.type._context);
        break;
      case 22:
      case 23:
        Jy();
    }
    r = r.return;
  }
  if (nt = e12, He = e12 = zn(e12.current, null), lt = Dt = t, Qe = 0, Rs = null, Xy = wf = _i = 0, At = cs = null, ci !== null) {
    for (t = 0; t < ci.length; t++) if (r = ci[t], n = r.interleaved, n !== null) {
      r.interleaved = null;
      var i = n.next, a = r.pending;
      if (a !== null) {
        var o = a.next;
        a.next = i, n.next = o;
      }
      r.pending = n;
    }
    ci = null;
  }
  return e12;
}
function uj(e12, t) {
  do {
    var r = He;
    try {
      if (Iy(), Su.current = Zu, Ju) {
        for (var n = Re.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), n = n.next;
        }
        Ju = false;
      }
      if (Ai = 0, tt = Xe = Re = null, ls = false, Ns = 0, Gy.current = null, r === null || r.return === null) {
        Qe = 1, Rs = t, He = null;
        break;
      }
      e: {
        var a = e12, o = r.return, s = r, l = t;
        if (t = lt, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, f = s, c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var d = f.alternate;
            d ? (f.updateQueue = d.updateQueue, f.memoizedState = d.memoizedState, f.lanes = d.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var h = y0(o);
          if (h !== null) {
            h.flags &= -257, v0(h, o, s, a, t), h.mode & 1 && m0(a, u, t), t = h, l = u;
            var y = t.updateQueue;
            if (y === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(l), t.updateQueue = v;
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              m0(a, u, t), Zy();
              break e;
            }
            l = Error(G(426));
          }
        } else if (Ce && s.mode & 1) {
          var m = y0(o);
          if (m !== null) {
            !(m.flags & 65536) && (m.flags |= 256), v0(m, o, s, a, t), Ny(ka(l, s));
            break e;
          }
        }
        a = l = ka(l, s), Qe !== 4 && (Qe = 2), cs === null ? cs = [a] : cs.push(a), a = o;
        do {
          switch (a.tag) {
            case 3:
              a.flags |= 65536, t &= -t, a.lanes |= t;
              var g = KO(a, l, t);
              u0(a, g);
              break e;
            case 1:
              s = l;
              var b = a.type, x = a.stateNode;
              if (!(a.flags & 128) && (typeof b.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (Ln === null || !Ln.has(x)))) {
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var O = qO(a, s, t);
                u0(a, O);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      dj(r);
    } catch (w) {
      t = w, He === r && r !== null && (He = r = r.return);
      continue;
    }
    break;
  } while (true);
}
function cj() {
  var e12 = ec.current;
  return ec.current = Zu, e12 === null ? Zu : e12;
}
function Zy() {
  (Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4), nt === null || !(_i & 268435455) && !(wf & 268435455) || An(nt, lt);
}
function nc(e12, t) {
  var r = he;
  he |= 2;
  var n = cj();
  (nt !== e12 || lt !== t) && (Fr = null, bi(e12, t));
  do
    try {
      cT();
      break;
    } catch (i) {
      uj(e12, i);
    }
  while (true);
  if (Iy(), he = r, ec.current = n, He !== null) throw Error(G(261));
  return nt = null, lt = 0, Qe;
}
function cT() {
  for (; He !== null; ) fj(He);
}
function fT() {
  for (; He !== null && !RE(); ) fj(He);
}
function fj(e12) {
  var t = hj(e12.alternate, e12, Dt);
  e12.memoizedProps = e12.pendingProps, t === null ? dj(e12) : He = t, Gy.current = null;
}
function dj(e12) {
  var t = e12;
  do {
    var r = t.alternate;
    if (e12 = t.return, t.flags & 32768) {
      if (r = iT(r, t), r !== null) {
        r.flags &= 32767, He = r;
        return;
      }
      if (e12 !== null) e12.flags |= 32768, e12.subtreeFlags = 0, e12.deletions = null;
      else {
        Qe = 6, He = null;
        return;
      }
    } else if (r = nT(r, t, Dt), r !== null) {
      He = r;
      return;
    }
    if (t = t.sibling, t !== null) {
      He = t;
      return;
    }
    He = t = e12;
  } while (t !== null);
  Qe === 0 && (Qe = 5);
}
function ii(e12, t, r) {
  var n = ge, i = tr.transition;
  try {
    tr.transition = null, ge = 1, dT(e12, t, r, n);
  } finally {
    tr.transition = i, ge = n;
  }
  return null;
}
function dT(e12, t, r, n) {
  do
    ga();
  while (kn !== null);
  if (he & 6) throw Error(G(327));
  r = e12.finishedWork;
  var i = e12.finishedLanes;
  if (r === null) return null;
  if (e12.finishedWork = null, e12.finishedLanes = 0, r === e12.current) throw Error(G(177));
  e12.callbackNode = null, e12.callbackPriority = 0;
  var a = r.lanes | r.childLanes;
  if (KE(e12, a), e12 === nt && (He = nt = null, lt = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Jl || (Jl = true, mj(Lu, function() {
    return ga(), null;
  })), a = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || a) {
    a = tr.transition, tr.transition = null;
    var o = ge;
    ge = 1;
    var s = he;
    he |= 4, Gy.current = null, oT(e12, r), oj(r, e12), Ck(ah), zu = !!ih, ah = ih = null, e12.current = r, sT(r), DE(), he = s, ge = o, tr.transition = a;
  } else e12.current = r;
  if (Jl && (Jl = false, kn = e12, rc = i), a = e12.pendingLanes, a === 0 && (Ln = null), zE(r.stateNode), Ct(e12, Fe()), t !== null) for (n = e12.onRecoverableError, r = 0; r < t.length; r++) i = t[r], n(i.value, { componentStack: i.stack, digest: i.digest });
  if (tc) throw tc = false, e12 = Ph, Ph = null, e12;
  return rc & 1 && e12.tag !== 0 && ga(), a = e12.pendingLanes, a & 1 ? e12 === Ah ? fs++ : (fs = 0, Ah = e12) : fs = 0, qn(), null;
}
function ga() {
  if (kn !== null) {
    var e12 = KS(rc), t = tr.transition, r = ge;
    try {
      if (tr.transition = null, ge = 16 > e12 ? 16 : e12, kn === null) var n = false;
      else {
        if (e12 = kn, kn = null, rc = 0, he & 6) throw Error(G(331));
        var i = he;
        for (he |= 4, J = e12.current; J !== null; ) {
          var a = J, o = a.child;
          if (J.flags & 16) {
            var s = a.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (J = u; J !== null; ) {
                  var f = J;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      us(8, f, a);
                  }
                  var c = f.child;
                  if (c !== null) c.return = f, J = c;
                  else for (; J !== null; ) {
                    f = J;
                    var d = f.sibling, h = f.return;
                    if (nj(f), f === u) {
                      J = null;
                      break;
                    }
                    if (d !== null) {
                      d.return = h, J = d;
                      break;
                    }
                    J = h;
                  }
                }
              }
              var y = a.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var m = v.sibling;
                    v.sibling = null, v = m;
                  } while (v !== null);
                }
              }
              J = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) o.return = a, J = o;
          else e: for (; J !== null; ) {
            if (a = J, a.flags & 2048) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                us(9, a, a.return);
            }
            var g = a.sibling;
            if (g !== null) {
              g.return = a.return, J = g;
              break e;
            }
            J = a.return;
          }
        }
        var b = e12.current;
        for (J = b; J !== null; ) {
          o = J;
          var x = o.child;
          if (o.subtreeFlags & 2064 && x !== null) x.return = o, J = x;
          else e: for (o = b; J !== null; ) {
            if (s = J, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  xf(9, s);
              }
            } catch (w) {
              Be(s, s.return, w);
            }
            if (s === o) {
              J = null;
              break e;
            }
            var O = s.sibling;
            if (O !== null) {
              O.return = s.return, J = O;
              break e;
            }
            J = s.return;
          }
        }
        if (he = i, qn(), Tr && typeof Tr.onPostCommitFiberRoot == "function") try {
          Tr.onPostCommitFiberRoot(df, e12);
        } catch {
        }
        n = true;
      }
      return n;
    } finally {
      ge = r, tr.transition = t;
    }
  }
  return false;
}
function T0(e12, t, r) {
  t = ka(r, t), t = KO(e12, t, 1), e12 = Dn(e12, t, 1), t = Ot(), e12 !== null && (wl(e12, 1, t), Ct(e12, t));
}
function Be(e12, t, r) {
  if (e12.tag === 3) T0(e12, e12, r);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      T0(t, e12, r);
      break;
    } else if (t.tag === 1) {
      var n = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Ln === null || !Ln.has(n))) {
        e12 = ka(r, e12), e12 = qO(t, e12, 1), t = Dn(t, e12, 1), e12 = Ot(), t !== null && (wl(t, 1, e12), Ct(t, e12));
        break;
      }
    }
    t = t.return;
  }
}
function pT(e12, t, r) {
  var n = e12.pingCache;
  n !== null && n.delete(t), t = Ot(), e12.pingedLanes |= e12.suspendedLanes & r, nt === e12 && (lt & r) === r && (Qe === 4 || Qe === 3 && (lt & 130023424) === lt && 500 > Fe() - Yy ? bi(e12, 0) : Xy |= r), Ct(e12, t);
}
function pj(e12, t) {
  t === 0 && (e12.mode & 1 ? (t = Ul, Ul <<= 1, !(Ul & 130023424) && (Ul = 4194304)) : t = 1);
  var r = Ot();
  e12 = an(e12, t), e12 !== null && (wl(e12, t, r), Ct(e12, r));
}
function hT(e12) {
  var t = e12.memoizedState, r = 0;
  t !== null && (r = t.retryLane), pj(e12, r);
}
function mT(e12, t) {
  var r = 0;
  switch (e12.tag) {
    case 13:
      var n = e12.stateNode, i = e12.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = e12.stateNode;
      break;
    default:
      throw Error(G(314));
  }
  n !== null && n.delete(t), pj(e12, r);
}
var hj;
hj = function(e12, t, r) {
  if (e12 !== null) if (e12.memoizedProps !== t.pendingProps || Tt.current) Et = true;
  else {
    if (!(e12.lanes & r) && !(t.flags & 128)) return Et = false, rT(e12, t, r);
    Et = !!(e12.flags & 131072);
  }
  else Et = false, Ce && t.flags & 1048576 && gO(t, qu, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var n = t.type;
      ju(e12, t), e12 = t.pendingProps;
      var i = Pa(t, yt.current);
      va(t, r), i = Wy(null, t, n, e12, i, r);
      var a = Hy();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $t(n) ? (a = true, Vu(t)) : a = false, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Ly(t), i.updater = bf, t.stateNode = i, i._reactInternals = t, hh(t, n, e12, r), t = vh(null, t, n, true, a, r)) : (t.tag = 0, Ce && a && $y(t), gt(null, t, i, r), t = t.child), t;
    case 16:
      n = t.elementType;
      e: {
        switch (ju(e12, t), e12 = t.pendingProps, i = n._init, n = i(n._payload), t.type = n, i = t.tag = vT(n), e12 = dr(n, e12), i) {
          case 0:
            t = yh(null, t, n, e12, r);
            break e;
          case 1:
            t = x0(null, t, n, e12, r);
            break e;
          case 11:
            t = g0(null, t, n, e12, r);
            break e;
          case 14:
            t = b0(null, t, n, dr(n.type, e12), r);
            break e;
        }
        throw Error(G(306, n, ""));
      }
      return t;
    case 0:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : dr(n, i), yh(e12, t, n, i, r);
    case 1:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : dr(n, i), x0(e12, t, n, i, r);
    case 3:
      e: {
        if (QO(t), e12 === null) throw Error(G(387));
        n = t.pendingProps, a = t.memoizedState, i = a.element, jO(e12, t), Yu(t, n, null, r);
        var o = t.memoizedState;
        if (n = o.element, a.isDehydrated) if (a = { element: n, isDehydrated: false, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
          i = ka(Error(G(423)), t), t = w0(e12, t, n, r, i);
          break e;
        } else if (n !== i) {
          i = ka(Error(G(424)), t), t = w0(e12, t, n, r, i);
          break e;
        } else for (zt = Rn(t.stateNode.containerInfo.firstChild), Ft = t, Ce = true, mr = null, r = SO(t, null, n, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if (Aa(), n === i) {
            t = on(e12, t, r);
            break e;
          }
          gt(e12, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return PO(t), e12 === null && fh(t), n = t.type, i = t.pendingProps, a = e12 !== null ? e12.memoizedProps : null, o = i.children, oh(n, i) ? o = null : a !== null && oh(n, a) && (t.flags |= 32), YO(e12, t), gt(e12, t, o, r), t.child;
    case 6:
      return e12 === null && fh(t), null;
    case 13:
      return JO(e12, t, r);
    case 4:
      return By(t, t.stateNode.containerInfo), n = t.pendingProps, e12 === null ? t.child = _a(t, null, n, r) : gt(e12, t, n, r), t.child;
    case 11:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : dr(n, i), g0(e12, t, n, i, r);
    case 7:
      return gt(e12, t, t.pendingProps, r), t.child;
    case 8:
      return gt(e12, t, t.pendingProps.children, r), t.child;
    case 12:
      return gt(e12, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (n = t.type._context, i = t.pendingProps, a = t.memoizedProps, o = i.value, Ae(Gu, n._currentValue), n._currentValue = o, a !== null) if (xr(a.value, o)) {
          if (a.children === i.children && !Tt.current) {
            t = on(e12, t, r);
            break e;
          }
        } else for (a = t.child, a !== null && (a.return = t); a !== null; ) {
          var s = a.dependencies;
          if (s !== null) {
            o = a.child;
            for (var l = s.firstContext; l !== null; ) {
              if (l.context === n) {
                if (a.tag === 1) {
                  l = Xr(-1, r & -r), l.tag = 2;
                  var u = a.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var f = u.pending;
                    f === null ? l.next = l : (l.next = f.next, f.next = l), u.pending = l;
                  }
                }
                a.lanes |= r, l = a.alternate, l !== null && (l.lanes |= r), dh(a.return, r, t), s.lanes |= r;
                break;
              }
              l = l.next;
            }
          } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
          else if (a.tag === 18) {
            if (o = a.return, o === null) throw Error(G(341));
            o.lanes |= r, s = o.alternate, s !== null && (s.lanes |= r), dh(o, r, t), o = a.sibling;
          } else o = a.child;
          if (o !== null) o.return = a;
          else for (o = a; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (a = o.sibling, a !== null) {
              a.return = o.return, o = a;
              break;
            }
            o = o.return;
          }
          a = o;
        }
        gt(e12, t, i.children, r), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, n = t.pendingProps.children, va(t, r), i = nr(i), n = n(i), t.flags |= 1, gt(e12, t, n, r), t.child;
    case 14:
      return n = t.type, i = dr(n, t.pendingProps), i = dr(n.type, i), b0(e12, t, n, i, r);
    case 15:
      return GO(e12, t, t.type, t.pendingProps, r);
    case 17:
      return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : dr(n, i), ju(e12, t), t.tag = 1, $t(n) ? (e12 = true, Vu(t)) : e12 = false, va(t, r), VO(t, n, i), hh(t, n, i, r), vh(null, t, n, true, e12, r);
    case 19:
      return ZO(e12, t, r);
    case 22:
      return XO(e12, t, r);
  }
  throw Error(G(156, t.tag));
};
function mj(e12, t) {
  return US(e12, t);
}
function yT(e12, t, r, n) {
  this.tag = e12, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Zt(e12, t, r, n) {
  return new yT(e12, t, r, n);
}
function ev(e12) {
  return e12 = e12.prototype, !(!e12 || !e12.isReactComponent);
}
function vT(e12) {
  if (typeof e12 == "function") return ev(e12) ? 1 : 0;
  if (e12 != null) {
    if (e12 = e12.$$typeof, e12 === by) return 11;
    if (e12 === xy) return 14;
  }
  return 2;
}
function zn(e12, t) {
  var r = e12.alternate;
  return r === null ? (r = Zt(e12.tag, t, e12.key, e12.mode), r.elementType = e12.elementType, r.type = e12.type, r.stateNode = e12.stateNode, r.alternate = e12, e12.alternate = r) : (r.pendingProps = t, r.type = e12.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e12.flags & 14680064, r.childLanes = e12.childLanes, r.lanes = e12.lanes, r.child = e12.child, r.memoizedProps = e12.memoizedProps, r.memoizedState = e12.memoizedState, r.updateQueue = e12.updateQueue, t = e12.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e12.sibling, r.index = e12.index, r.ref = e12.ref, r;
}
function _u(e12, t, r, n, i, a) {
  var o = 2;
  if (n = e12, typeof e12 == "function") ev(e12) && (o = 1);
  else if (typeof e12 == "string") o = 5;
  else e: switch (e12) {
    case Yi:
      return xi(r.children, i, a, t);
    case gy:
      o = 8, i |= 8;
      break;
    case Lp:
      return e12 = Zt(12, r, t, i | 2), e12.elementType = Lp, e12.lanes = a, e12;
    case Bp:
      return e12 = Zt(13, r, t, i), e12.elementType = Bp, e12.lanes = a, e12;
    case zp:
      return e12 = Zt(19, r, t, i), e12.elementType = zp, e12.lanes = a, e12;
    case PS:
      return Sf(r, i, a, t);
    default:
      if (typeof e12 == "object" && e12 !== null) switch (e12.$$typeof) {
        case OS:
          o = 10;
          break e;
        case jS:
          o = 9;
          break e;
        case by:
          o = 11;
          break e;
        case xy:
          o = 14;
          break e;
        case Sn:
          o = 16, n = null;
          break e;
      }
      throw Error(G(130, e12 == null ? e12 : typeof e12, ""));
  }
  return t = Zt(o, r, t, i), t.elementType = e12, t.type = n, t.lanes = a, t;
}
function xi(e12, t, r, n) {
  return e12 = Zt(7, e12, n, t), e12.lanes = r, e12;
}
function Sf(e12, t, r, n) {
  return e12 = Zt(22, e12, n, t), e12.elementType = PS, e12.lanes = r, e12.stateNode = { isHidden: false }, e12;
}
function Jd(e12, t, r) {
  return e12 = Zt(6, e12, null, t), e12.lanes = r, e12;
}
function Zd(e12, t, r) {
  return t = Zt(4, e12.children !== null ? e12.children : [], e12.key, t), t.lanes = r, t.stateNode = { containerInfo: e12.containerInfo, pendingChildren: null, implementation: e12.implementation }, t;
}
function gT(e12, t, r, n, i) {
  this.tag = t, this.containerInfo = e12, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Nd(0), this.expirationTimes = Nd(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Nd(0), this.identifierPrefix = n, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function tv(e12, t, r, n, i, a, o, s, l) {
  return e12 = new gT(e12, t, r, s, l), t === 1 ? (t = 1, a === true && (t |= 8)) : t = 0, a = Zt(3, null, null, t), e12.current = a, a.stateNode = e12, a.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ly(a), e12;
}
function bT(e12, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Xi, key: n == null ? null : "" + n, children: e12, containerInfo: t, implementation: r };
}
function yj(e12) {
  if (!e12) return Hn;
  e12 = e12._reactInternals;
  e: {
    if (Di(e12) !== e12 || e12.tag !== 1) throw Error(G(170));
    var t = e12;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($t(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(G(171));
  }
  if (e12.tag === 1) {
    var r = e12.type;
    if ($t(r)) return yO(e12, r, t);
  }
  return t;
}
function vj(e12, t, r, n, i, a, o, s, l) {
  return e12 = tv(r, n, true, e12, i, a, o, s, l), e12.context = yj(null), r = e12.current, n = Ot(), i = Bn(r), a = Xr(n, i), a.callback = t ?? null, Dn(r, a, i), e12.current.lanes = i, wl(e12, i, n), Ct(e12, n), e12;
}
function Of(e12, t, r, n) {
  var i = t.current, a = Ot(), o = Bn(i);
  return r = yj(r), t.context === null ? t.context = r : t.pendingContext = r, t = Xr(a, o), t.payload = { element: e12 }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e12 = Dn(i, t, o), e12 !== null && (gr(e12, i, o, a), wu(e12, i, o)), o;
}
function ic(e12) {
  if (e12 = e12.current, !e12.child) return null;
  switch (e12.child.tag) {
    case 5:
      return e12.child.stateNode;
    default:
      return e12.child.stateNode;
  }
}
function $0(e12, t) {
  if (e12 = e12.memoizedState, e12 !== null && e12.dehydrated !== null) {
    var r = e12.retryLane;
    e12.retryLane = r !== 0 && r < t ? r : t;
  }
}
function rv(e12, t) {
  $0(e12, t), (e12 = e12.alternate) && $0(e12, t);
}
function xT() {
  return null;
}
var gj = typeof reportError == "function" ? reportError : function(e12) {
  console.error(e12);
};
function nv(e12) {
  this._internalRoot = e12;
}
jf.prototype.render = nv.prototype.render = function(e12) {
  var t = this._internalRoot;
  if (t === null) throw Error(G(409));
  Of(e12, t, null, null);
};
jf.prototype.unmount = nv.prototype.unmount = function() {
  var e12 = this._internalRoot;
  if (e12 !== null) {
    this._internalRoot = null;
    var t = e12.containerInfo;
    Ei(function() {
      Of(null, e12, null, null);
    }), t[nn] = null;
  }
};
function jf(e12) {
  this._internalRoot = e12;
}
jf.prototype.unstable_scheduleHydration = function(e12) {
  if (e12) {
    var t = XS();
    e12 = { blockedOn: null, target: e12, priority: t };
    for (var r = 0; r < Pn.length && t !== 0 && t < Pn[r].priority; r++) ;
    Pn.splice(r, 0, e12), r === 0 && QS(e12);
  }
};
function iv(e12) {
  return !(!e12 || e12.nodeType !== 1 && e12.nodeType !== 9 && e12.nodeType !== 11);
}
function Pf(e12) {
  return !(!e12 || e12.nodeType !== 1 && e12.nodeType !== 9 && e12.nodeType !== 11 && (e12.nodeType !== 8 || e12.nodeValue !== " react-mount-point-unstable "));
}
function C0() {
}
function wT(e12, t, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var a = n;
      n = function() {
        var u = ic(o);
        a.call(u);
      };
    }
    var o = vj(t, n, e12, 0, null, false, false, "", C0);
    return e12._reactRootContainer = o, e12[nn] = o.current, Es(e12.nodeType === 8 ? e12.parentNode : e12), Ei(), o;
  }
  for (; i = e12.lastChild; ) e12.removeChild(i);
  if (typeof n == "function") {
    var s = n;
    n = function() {
      var u = ic(l);
      s.call(u);
    };
  }
  var l = tv(e12, 0, false, null, null, false, false, "", C0);
  return e12._reactRootContainer = l, e12[nn] = l.current, Es(e12.nodeType === 8 ? e12.parentNode : e12), Ei(function() {
    Of(t, l, r, n);
  }), l;
}
function Af(e12, t, r, n, i) {
  var a = r._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == "function") {
      var s = i;
      i = function() {
        var l = ic(o);
        s.call(l);
      };
    }
    Of(t, o, e12, i);
  } else o = wT(r, t, e12, i, n);
  return ic(o);
}
qS = function(e12) {
  switch (e12.tag) {
    case 3:
      var t = e12.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = es(t.pendingLanes);
        r !== 0 && (Oy(t, r | 1), Ct(t, Fe()), !(he & 6) && (Ta = Fe() + 500, qn()));
      }
      break;
    case 13:
      Ei(function() {
        var n = an(e12, 1);
        if (n !== null) {
          var i = Ot();
          gr(n, e12, 1, i);
        }
      }), rv(e12, 1);
  }
};
jy = function(e12) {
  if (e12.tag === 13) {
    var t = an(e12, 134217728);
    if (t !== null) {
      var r = Ot();
      gr(t, e12, 134217728, r);
    }
    rv(e12, 134217728);
  }
};
GS = function(e12) {
  if (e12.tag === 13) {
    var t = Bn(e12), r = an(e12, t);
    if (r !== null) {
      var n = Ot();
      gr(r, e12, t, n);
    }
    rv(e12, t);
  }
};
XS = function() {
  return ge;
};
YS = function(e12, t) {
  var r = ge;
  try {
    return ge = e12, t();
  } finally {
    ge = r;
  }
};
Yp = function(e12, t, r) {
  switch (t) {
    case "input":
      if (Wp(e12, r), t = r.name, r.type === "radio" && t != null) {
        for (r = e12; r.parentNode; ) r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== e12 && n.form === e12.form) {
            var i = yf(n);
            if (!i) throw Error(G(90));
            _S(n), Wp(n, i);
          }
        }
      }
      break;
    case "textarea":
      kS(e12, r);
      break;
    case "select":
      t = r.value, t != null && pa(e12, !!r.multiple, t, false);
  }
};
RS = Qy;
DS = Ei;
var ST = { usingClientEntryPoint: false, Events: [Ol, ea, yf, MS, IS, Qy] }, Do = { findFiberByHostInstance: ui, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, OT = { bundleType: Do.bundleType, version: Do.version, rendererPackageName: Do.rendererPackageName, rendererConfig: Do.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: cn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e12) {
  return e12 = zS(e12), e12 === null ? null : e12.stateNode;
}, findFiberByHostInstance: Do.findFiberByHostInstance || xT, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Zl.isDisabled && Zl.supportsFiber) try {
    df = Zl.inject(OT), Tr = Zl;
  } catch {
  }
}
Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ST;
Ht.createPortal = function(e12, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!iv(t)) throw Error(G(200));
  return bT(e12, t, null, r);
};
Ht.createRoot = function(e12, t) {
  if (!iv(e12)) throw Error(G(299));
  var r = false, n = "", i = gj;
  return t != null && (t.unstable_strictMode === true && (r = true), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = tv(e12, 1, false, null, null, r, false, n, i), e12[nn] = t.current, Es(e12.nodeType === 8 ? e12.parentNode : e12), new nv(t);
};
Ht.findDOMNode = function(e12) {
  if (e12 == null) return null;
  if (e12.nodeType === 1) return e12;
  var t = e12._reactInternals;
  if (t === void 0) throw typeof e12.render == "function" ? Error(G(188)) : (e12 = Object.keys(e12).join(","), Error(G(268, e12)));
  return e12 = zS(t), e12 = e12 === null ? null : e12.stateNode, e12;
};
Ht.flushSync = function(e12) {
  return Ei(e12);
};
Ht.hydrate = function(e12, t, r) {
  if (!Pf(t)) throw Error(G(200));
  return Af(null, e12, t, true, r);
};
Ht.hydrateRoot = function(e12, t, r) {
  if (!iv(e12)) throw Error(G(405));
  var n = r != null && r.hydratedSources || null, i = false, a = "", o = gj;
  if (r != null && (r.unstable_strictMode === true && (i = true), r.identifierPrefix !== void 0 && (a = r.identifierPrefix), r.onRecoverableError !== void 0 && (o = r.onRecoverableError)), t = vj(t, null, e12, 1, r ?? null, i, false, a, o), e12[nn] = t.current, Es(e12), n) for (e12 = 0; e12 < n.length; e12++) r = n[e12], i = r._getVersion, i = i(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, i] : t.mutableSourceEagerHydrationData.push(r, i);
  return new jf(t);
};
Ht.render = function(e12, t, r) {
  if (!Pf(t)) throw Error(G(200));
  return Af(null, e12, t, false, r);
};
Ht.unmountComponentAtNode = function(e12) {
  if (!Pf(e12)) throw Error(G(40));
  return e12._reactRootContainer ? (Ei(function() {
    Af(null, null, e12, false, function() {
      e12._reactRootContainer = null, e12[nn] = null;
    });
  }), true) : false;
};
Ht.unstable_batchedUpdates = Qy;
Ht.unstable_renderSubtreeIntoContainer = function(e12, t, r, n) {
  if (!Pf(r)) throw Error(G(200));
  if (e12 == null || e12._reactInternals === void 0) throw Error(G(38));
  return Af(e12, t, r, false, n);
};
Ht.version = "18.3.1-next-f1338f8080-20240426";
function bj() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bj);
  } catch (e12) {
    console.error(e12);
  }
}
bj(), bS.exports = Ht;
var jT = bS.exports, N0 = jT;
Rp.createRoot = N0.createRoot, Rp.hydrateRoot = N0.hydrateRoot;
function Ds() {
  return Ds = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, Ds.apply(this, arguments);
}
var Tn;
(function(e12) {
  e12.Pop = "POP", e12.Push = "PUSH", e12.Replace = "REPLACE";
})(Tn || (Tn = {}));
const M0 = "popstate";
function PT(e12) {
  e12 === void 0 && (e12 = {});
  function t(n, i) {
    let { pathname: a, search: o, hash: s } = n.location;
    return kh("", { pathname: a, search: o, hash: s }, i.state && i.state.usr || null, i.state && i.state.key || "default");
  }
  function r(n, i) {
    return typeof i == "string" ? i : ac(i);
  }
  return _T(t, r, null, e12);
}
function De(e12, t) {
  if (e12 === false || e12 === null || typeof e12 > "u") throw new Error(t);
}
function av(e12, t) {
  if (!e12) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function AT() {
  return Math.random().toString(36).substr(2, 8);
}
function I0(e12, t) {
  return { usr: e12.state, key: e12.key, idx: t };
}
function kh(e12, t, r, n) {
  return r === void 0 && (r = null), Ds({ pathname: typeof e12 == "string" ? e12 : e12.pathname, search: "", hash: "" }, typeof t == "string" ? uo(t) : t, { state: r, key: t && t.key || n || AT() });
}
function ac(e12) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e12;
  return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n), t;
}
function uo(e12) {
  let t = {};
  if (e12) {
    let r = e12.indexOf("#");
    r >= 0 && (t.hash = e12.substr(r), e12 = e12.substr(0, r));
    let n = e12.indexOf("?");
    n >= 0 && (t.search = e12.substr(n), e12 = e12.substr(0, n)), e12 && (t.pathname = e12);
  }
  return t;
}
function _T(e12, t, r, n) {
  n === void 0 && (n = {});
  let { window: i = document.defaultView, v5Compat: a = false } = n, o = i.history, s = Tn.Pop, l = null, u = f();
  u == null && (u = 0, o.replaceState(Ds({}, o.state, { idx: u }), ""));
  function f() {
    return (o.state || { idx: null }).idx;
  }
  function c() {
    s = Tn.Pop;
    let m = f(), g = m == null ? null : m - u;
    u = m, l && l({ action: s, location: v.location, delta: g });
  }
  function d(m, g) {
    s = Tn.Push;
    let b = kh(v.location, m, g);
    u = f() + 1;
    let x = I0(b, u), O = v.createHref(b);
    try {
      o.pushState(x, "", O);
    } catch (w) {
      if (w instanceof DOMException && w.name === "DataCloneError") throw w;
      i.location.assign(O);
    }
    a && l && l({ action: s, location: v.location, delta: 1 });
  }
  function h(m, g) {
    s = Tn.Replace;
    let b = kh(v.location, m, g);
    u = f();
    let x = I0(b, u), O = v.createHref(b);
    o.replaceState(x, "", O), a && l && l({ action: s, location: v.location, delta: 0 });
  }
  function y(m) {
    let g = i.location.origin !== "null" ? i.location.origin : i.location.href, b = typeof m == "string" ? m : ac(m);
    return b = b.replace(/ $/, "%20"), De(g, "No window.location.(origin|href) available to create URL for href: " + b), new URL(b, g);
  }
  let v = { get action() {
    return s;
  }, get location() {
    return e12(i, o);
  }, listen(m) {
    if (l) throw new Error("A history only accepts one active listener");
    return i.addEventListener(M0, c), l = m, () => {
      i.removeEventListener(M0, c), l = null;
    };
  }, createHref(m) {
    return t(i, m);
  }, createURL: y, encodeLocation(m) {
    let g = y(m);
    return { pathname: g.pathname, search: g.search, hash: g.hash };
  }, push: d, replace: h, go(m) {
    return o.go(m);
  } };
  return v;
}
var R0;
(function(e12) {
  e12.data = "data", e12.deferred = "deferred", e12.redirect = "redirect", e12.error = "error";
})(R0 || (R0 = {}));
function ET(e12, t, r) {
  return r === void 0 && (r = "/"), kT(e12, t, r);
}
function kT(e12, t, r, n) {
  let i = typeof t == "string" ? uo(t) : t, a = $a(i.pathname || "/", r);
  if (a == null) return null;
  let o = xj(e12);
  TT(o);
  let s = null;
  for (let l = 0; s == null && l < o.length; ++l) {
    let u = FT(a);
    s = BT(o[l], u);
  }
  return s;
}
function xj(e12, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let i = (a, o, s) => {
    let l = { relativePath: s === void 0 ? a.path || "" : s, caseSensitive: a.caseSensitive === true, childrenIndex: o, route: a };
    l.relativePath.startsWith("/") && (De(l.relativePath.startsWith(n), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(n.length));
    let u = Fn([n, l.relativePath]), f = r.concat(l);
    a.children && a.children.length > 0 && (De(a.index !== true, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), xj(a.children, t, f, u)), !(a.path == null && !a.index) && t.push({ path: u, score: DT(u, a.index), routesMeta: f });
  };
  return e12.forEach((a, o) => {
    var s;
    if (a.path === "" || !((s = a.path) != null && s.includes("?"))) i(a, o);
    else for (let l of wj(a.path)) i(a, o, l);
  }), t;
}
function wj(e12) {
  let t = e12.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t, i = r.endsWith("?"), a = r.replace(/\?$/, "");
  if (n.length === 0) return i ? [a, ""] : [a];
  let o = wj(n.join("/")), s = [];
  return s.push(...o.map((l) => l === "" ? a : [a, l].join("/"))), i && s.push(...o), s.map((l) => e12.startsWith("/") && l === "" ? "/" : l);
}
function TT(e12) {
  e12.sort((t, r) => t.score !== r.score ? r.score - t.score : LT(t.routesMeta.map((n) => n.childrenIndex), r.routesMeta.map((n) => n.childrenIndex)));
}
const $T = /^:[\w-]+$/, CT = 3, NT = 2, MT = 1, IT = 10, RT = -2, D0 = (e12) => e12 === "*";
function DT(e12, t) {
  let r = e12.split("/"), n = r.length;
  return r.some(D0) && (n += RT), t && (n += NT), r.filter((i) => !D0(i)).reduce((i, a) => i + ($T.test(a) ? CT : a === "" ? MT : IT), n);
}
function LT(e12, t) {
  return e12.length === t.length && e12.slice(0, -1).every((n, i) => n === t[i]) ? e12[e12.length - 1] - t[t.length - 1] : 0;
}
function BT(e12, t, r) {
  let { routesMeta: n } = e12, i = {}, a = "/", o = [];
  for (let s = 0; s < n.length; ++s) {
    let l = n[s], u = s === n.length - 1, f = a === "/" ? t : t.slice(a.length) || "/", c = Th({ path: l.relativePath, caseSensitive: l.caseSensitive, end: u }, f), d = l.route;
    if (!c) return null;
    Object.assign(i, c.params), o.push({ params: i, pathname: Fn([a, c.pathname]), pathnameBase: KT(Fn([a, c.pathnameBase])), route: d }), c.pathnameBase !== "/" && (a = Fn([a, c.pathnameBase]));
  }
  return o;
}
function Th(e12, t) {
  typeof e12 == "string" && (e12 = { path: e12, caseSensitive: false, end: true });
  let [r, n] = zT(e12.path, e12.caseSensitive, e12.end), i = t.match(r);
  if (!i) return null;
  let a = i[0], o = a.replace(/(.)\/+$/, "$1"), s = i.slice(1);
  return { params: n.reduce((u, f, c) => {
    let { paramName: d, isOptional: h } = f;
    if (d === "*") {
      let v = s[c] || "";
      o = a.slice(0, a.length - v.length).replace(/(.)\/+$/, "$1");
    }
    const y = s[c];
    return h && !y ? u[d] = void 0 : u[d] = (y || "").replace(/%2F/g, "/"), u;
  }, {}), pathname: a, pathnameBase: o, pattern: e12 };
}
function zT(e12, t, r) {
  t === void 0 && (t = false), r === void 0 && (r = true), av(e12 === "*" || !e12.endsWith("*") || e12.endsWith("/*"), 'Route path "' + e12 + '" will be treated as if it were ' + ('"' + e12.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e12.replace(/\*$/, "/*") + '".'));
  let n = [], i = "^" + e12.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, s, l) => (n.push({ paramName: s, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e12.endsWith("*") ? (n.push({ paramName: "*" }), i += e12 === "*" || e12 === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? i += "\\/*$" : e12 !== "" && e12 !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), n];
}
function FT(e12) {
  try {
    return e12.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return av(false, 'The URL path "' + e12 + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e12;
  }
}
function $a(e12, t) {
  if (t === "/") return e12;
  if (!e12.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, n = e12.charAt(r);
  return n && n !== "/" ? null : e12.slice(r) || "/";
}
const UT = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, WT = (e12) => UT.test(e12);
function HT(e12, t) {
  t === void 0 && (t = "/");
  let { pathname: r, search: n = "", hash: i = "" } = typeof e12 == "string" ? uo(e12) : e12, a;
  if (r) if (WT(r)) a = r;
  else {
    if (r.includes("//")) {
      let o = r;
      r = r.replace(/\/\/+/g, "/"), av(false, "Pathnames cannot have embedded double slashes - normalizing " + (o + " -> " + r));
    }
    r.startsWith("/") ? a = L0(r.substring(1), "/") : a = L0(r, t);
  }
  else a = t;
  return { pathname: a, search: qT(n), hash: GT(i) };
}
function L0(e12, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e12.split("/").forEach((i) => {
    i === ".." ? r.length > 1 && r.pop() : i !== "." && r.push(i);
  }), r.length > 1 ? r.join("/") : "/";
}
function ep(e12, t, r, n) {
  return "Cannot include a '" + e12 + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function VT(e12) {
  return e12.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
}
function ov(e12, t) {
  let r = VT(e12);
  return t ? r.map((n, i) => i === r.length - 1 ? n.pathname : n.pathnameBase) : r.map((n) => n.pathnameBase);
}
function sv(e12, t, r, n) {
  n === void 0 && (n = false);
  let i;
  typeof e12 == "string" ? i = uo(e12) : (i = Ds({}, e12), De(!i.pathname || !i.pathname.includes("?"), ep("?", "pathname", "search", i)), De(!i.pathname || !i.pathname.includes("#"), ep("#", "pathname", "hash", i)), De(!i.search || !i.search.includes("#"), ep("#", "search", "hash", i)));
  let a = e12 === "" || i.pathname === "", o = a ? "/" : i.pathname, s;
  if (o == null) s = r;
  else {
    let c = t.length - 1;
    if (!n && o.startsWith("..")) {
      let d = o.split("/");
      for (; d[0] === ".."; ) d.shift(), c -= 1;
      i.pathname = d.join("/");
    }
    s = c >= 0 ? t[c] : "/";
  }
  let l = HT(i, s), u = o && o !== "/" && o.endsWith("/"), f = (a || o === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (u || f) && (l.pathname += "/"), l;
}
const Fn = (e12) => e12.join("/").replace(/\/\/+/g, "/"), KT = (e12) => e12.replace(/\/+$/, "").replace(/^\/*/, "/"), qT = (e12) => !e12 || e12 === "?" ? "" : e12.startsWith("?") ? e12 : "?" + e12, GT = (e12) => !e12 || e12 === "#" ? "" : e12.startsWith("#") ? e12 : "#" + e12;
function XT(e12) {
  return e12 != null && typeof e12.status == "number" && typeof e12.statusText == "string" && typeof e12.internal == "boolean" && "data" in e12;
}
const Sj = ["post", "put", "patch", "delete"];
new Set(Sj);
const YT = ["get", ...Sj];
new Set(YT);
function Ls() {
  return Ls = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, Ls.apply(this, arguments);
}
const _f = A.createContext(null), Oj = A.createContext(null), fn = A.createContext(null), Ef = A.createContext(null), dn = A.createContext({ outlet: null, matches: [], isDataRoute: false }), jj = A.createContext(null);
function QT(e12, t) {
  let { relative: r } = t === void 0 ? {} : t;
  co() || De(false);
  let { basename: n, navigator: i } = A.useContext(fn), { hash: a, pathname: o, search: s } = kf(e12, { relative: r }), l = o;
  return n !== "/" && (l = o === "/" ? n : Fn([n, o])), i.createHref({ pathname: l, search: s, hash: a });
}
function co() {
  return A.useContext(Ef) != null;
}
function fo() {
  return co() || De(false), A.useContext(Ef).location;
}
function Pj(e12) {
  A.useContext(fn).static || A.useLayoutEffect(e12);
}
function Gn() {
  let { isDataRoute: e12 } = A.useContext(dn);
  return e12 ? f$() : JT();
}
function JT() {
  co() || De(false);
  let e12 = A.useContext(_f), { basename: t, future: r, navigator: n } = A.useContext(fn), { matches: i } = A.useContext(dn), { pathname: a } = fo(), o = JSON.stringify(ov(i, r.v7_relativeSplatPath)), s = A.useRef(false);
  return Pj(() => {
    s.current = true;
  }), A.useCallback(function(u, f) {
    if (f === void 0 && (f = {}), !s.current) return;
    if (typeof u == "number") {
      n.go(u);
      return;
    }
    let c = sv(u, JSON.parse(o), a, f.relative === "path");
    e12 == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : Fn([t, c.pathname])), (f.replace ? n.replace : n.push)(c, f.state, f);
  }, [t, n, o, a, e12]);
}
function ZT() {
  let { matches: e12 } = A.useContext(dn), t = e12[e12.length - 1];
  return t ? t.params : {};
}
function kf(e12, t) {
  let { relative: r } = t === void 0 ? {} : t, { future: n } = A.useContext(fn), { matches: i } = A.useContext(dn), { pathname: a } = fo(), o = JSON.stringify(ov(i, n.v7_relativeSplatPath));
  return A.useMemo(() => sv(e12, JSON.parse(o), a, r === "path"), [e12, o, a, r]);
}
function e$(e12, t) {
  return t$(e12, t);
}
function t$(e12, t, r, n) {
  co() || De(false);
  let { navigator: i } = A.useContext(fn), { matches: a } = A.useContext(dn), o = a[a.length - 1], s = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let u = fo(), f;
  if (t) {
    var c;
    let m = typeof t == "string" ? uo(t) : t;
    l === "/" || (c = m.pathname) != null && c.startsWith(l) || De(false), f = m;
  } else f = u;
  let d = f.pathname || "/", h = d;
  if (l !== "/") {
    let m = l.replace(/^\//, "").split("/");
    h = "/" + d.replace(/^\//, "").split("/").slice(m.length).join("/");
  }
  let y = ET(e12, { pathname: h }), v = o$(y && y.map((m) => Object.assign({}, m, { params: Object.assign({}, s, m.params), pathname: Fn([l, i.encodeLocation ? i.encodeLocation(m.pathname).pathname : m.pathname]), pathnameBase: m.pathnameBase === "/" ? l : Fn([l, i.encodeLocation ? i.encodeLocation(m.pathnameBase).pathname : m.pathnameBase]) })), a, r, n);
  return t && v ? A.createElement(Ef.Provider, { value: { location: Ls({ pathname: "/", search: "", hash: "", state: null, key: "default" }, f), navigationType: Tn.Pop } }, v) : v;
}
function r$() {
  let e12 = c$(), t = XT(e12) ? e12.status + " " + e12.statusText : e12 instanceof Error ? e12.message : JSON.stringify(e12), r = e12 instanceof Error ? e12.stack : null, i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return A.createElement(A.Fragment, null, A.createElement("h2", null, "Unexpected Application Error!"), A.createElement("h3", { style: { fontStyle: "italic" } }, t), r ? A.createElement("pre", { style: i }, r) : null, null);
}
const n$ = A.createElement(r$, null);
class i$ extends A.Component {
  constructor(t) {
    super(t), this.state = { location: t.location, revalidation: t.revalidation, error: t.error };
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location || r.revalidation !== "idle" && t.revalidation === "idle" ? { error: t.error, location: t.location, revalidation: t.revalidation } : { error: t.error !== void 0 ? t.error : r.error, location: r.location, revalidation: t.revalidation || r.revalidation };
  }
  componentDidCatch(t, r) {
    console.error("React Router caught the following error during render", t, r);
  }
  render() {
    return this.state.error !== void 0 ? A.createElement(dn.Provider, { value: this.props.routeContext }, A.createElement(jj.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
  }
}
function a$(e12) {
  let { routeContext: t, match: r, children: n } = e12, i = A.useContext(_f);
  return i && i.static && i.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = r.route.id), A.createElement(dn.Provider, { value: t }, n);
}
function o$(e12, t, r, n) {
  var i;
  if (t === void 0 && (t = []), r === void 0 && (r = null), n === void 0 && (n = null), e12 == null) {
    var a;
    if (!r) return null;
    if (r.errors) e12 = r.matches;
    else if ((a = n) != null && a.v7_partialHydration && t.length === 0 && !r.initialized && r.matches.length > 0) e12 = r.matches;
    else return null;
  }
  let o = e12, s = (i = r) == null ? void 0 : i.errors;
  if (s != null) {
    let f = o.findIndex((c) => c.route.id && (s == null ? void 0 : s[c.route.id]) !== void 0);
    f >= 0 || De(false), o = o.slice(0, Math.min(o.length, f + 1));
  }
  let l = false, u = -1;
  if (r && n && n.v7_partialHydration) for (let f = 0; f < o.length; f++) {
    let c = o[f];
    if ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = f), c.route.id) {
      let { loaderData: d, errors: h } = r, y = c.route.loader && d[c.route.id] === void 0 && (!h || h[c.route.id] === void 0);
      if (c.route.lazy || y) {
        l = true, u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
        break;
      }
    }
  }
  return o.reduceRight((f, c, d) => {
    let h, y = false, v = null, m = null;
    r && (h = s && c.route.id ? s[c.route.id] : void 0, v = c.route.errorElement || n$, l && (u < 0 && d === 0 ? (d$("route-fallback"), y = true, m = null) : u === d && (y = true, m = c.route.hydrateFallbackElement || null)));
    let g = t.concat(o.slice(0, d + 1)), b = () => {
      let x;
      return h ? x = v : y ? x = m : c.route.Component ? x = A.createElement(c.route.Component, null) : c.route.element ? x = c.route.element : x = f, A.createElement(a$, { match: c, routeContext: { outlet: f, matches: g, isDataRoute: r != null }, children: x });
    };
    return r && (c.route.ErrorBoundary || c.route.errorElement || d === 0) ? A.createElement(i$, { location: r.location, revalidation: r.revalidation, component: v, error: h, children: b(), routeContext: { outlet: null, matches: g, isDataRoute: true } }) : b();
  }, null);
}
var Aj = function(e12) {
  return e12.UseBlocker = "useBlocker", e12.UseRevalidator = "useRevalidator", e12.UseNavigateStable = "useNavigate", e12;
}(Aj || {}), _j = function(e12) {
  return e12.UseBlocker = "useBlocker", e12.UseLoaderData = "useLoaderData", e12.UseActionData = "useActionData", e12.UseRouteError = "useRouteError", e12.UseNavigation = "useNavigation", e12.UseRouteLoaderData = "useRouteLoaderData", e12.UseMatches = "useMatches", e12.UseRevalidator = "useRevalidator", e12.UseNavigateStable = "useNavigate", e12.UseRouteId = "useRouteId", e12;
}(_j || {});
function s$(e12) {
  let t = A.useContext(_f);
  return t || De(false), t;
}
function l$(e12) {
  let t = A.useContext(Oj);
  return t || De(false), t;
}
function u$(e12) {
  let t = A.useContext(dn);
  return t || De(false), t;
}
function Ej(e12) {
  let t = u$(), r = t.matches[t.matches.length - 1];
  return r.route.id || De(false), r.route.id;
}
function c$() {
  var e12;
  let t = A.useContext(jj), r = l$(), n = Ej();
  return t !== void 0 ? t : (e12 = r.errors) == null ? void 0 : e12[n];
}
function f$() {
  let { router: e12 } = s$(Aj.UseNavigateStable), t = Ej(_j.UseNavigateStable), r = A.useRef(false);
  return Pj(() => {
    r.current = true;
  }), A.useCallback(function(i, a) {
    a === void 0 && (a = {}), r.current && (typeof i == "number" ? e12.navigate(i) : e12.navigate(i, Ls({ fromRouteId: t }, a)));
  }, [e12, t]);
}
const B0 = {};
function d$(e12, t, r) {
  B0[e12] || (B0[e12] = true);
}
function p$(e12, t) {
  e12 == null || e12.v7_startTransition, e12 == null || e12.v7_relativeSplatPath;
}
function lv(e12) {
  let { to: t, replace: r, state: n, relative: i } = e12;
  co() || De(false);
  let { future: a, static: o } = A.useContext(fn), { matches: s } = A.useContext(dn), { pathname: l } = fo(), u = Gn(), f = sv(t, ov(s, a.v7_relativeSplatPath), l, i === "path"), c = JSON.stringify(f);
  return A.useEffect(() => u(JSON.parse(c), { replace: r, state: n, relative: i }), [u, c, i, r, n]), null;
}
function jr(e12) {
  De(false);
}
function h$(e12) {
  let { basename: t = "/", children: r = null, location: n, navigationType: i = Tn.Pop, navigator: a, static: o = false, future: s } = e12;
  co() && De(false);
  let l = t.replace(/^\/*/, "/"), u = A.useMemo(() => ({ basename: l, navigator: a, static: o, future: Ls({ v7_relativeSplatPath: false }, s) }), [l, s, a, o]);
  typeof n == "string" && (n = uo(n));
  let { pathname: f = "/", search: c = "", hash: d = "", state: h = null, key: y = "default" } = n, v = A.useMemo(() => {
    let m = $a(f, l);
    return m == null ? null : { location: { pathname: m, search: c, hash: d, state: h, key: y }, navigationType: i };
  }, [l, f, c, d, h, y, i]);
  return v == null ? null : A.createElement(fn.Provider, { value: u }, A.createElement(Ef.Provider, { children: r, value: v }));
}
function m$(e12) {
  let { children: t, location: r } = e12;
  return e$($h(t), r);
}
new Promise(() => {
});
function $h(e12, t) {
  t === void 0 && (t = []);
  let r = [];
  return A.Children.forEach(e12, (n, i) => {
    if (!A.isValidElement(n)) return;
    let a = [...t, i];
    if (n.type === A.Fragment) {
      r.push.apply(r, $h(n.props.children, a));
      return;
    }
    n.type !== jr && De(false), !n.props.index || !n.props.children || De(false);
    let o = { id: n.props.id || a.join("-"), caseSensitive: n.props.caseSensitive, element: n.props.element, Component: n.props.Component, index: n.props.index, path: n.props.path, loader: n.props.loader, action: n.props.action, errorElement: n.props.errorElement, ErrorBoundary: n.props.ErrorBoundary, hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null, shouldRevalidate: n.props.shouldRevalidate, handle: n.props.handle, lazy: n.props.lazy };
    n.props.children && (o.children = $h(n.props.children, a)), r.push(o);
  }), r;
}
function oc() {
  return oc = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, oc.apply(this, arguments);
}
function kj(e12, t) {
  if (e12 == null) return {};
  var r = {}, n = Object.keys(e12), i, a;
  for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e12[i]);
  return r;
}
function y$(e12) {
  return !!(e12.metaKey || e12.altKey || e12.ctrlKey || e12.shiftKey);
}
function v$(e12, t) {
  return e12.button === 0 && (!t || t === "_self") && !y$(e12);
}
const g$ = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], b$ = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], x$ = "6";
try {
  window.__reactRouterVersion = x$;
} catch {
}
const w$ = A.createContext({ isTransitioning: false }), S$ = "startTransition", z0 = pE[S$];
function O$(e12) {
  let { basename: t, children: r, future: n, window: i } = e12, a = A.useRef();
  a.current == null && (a.current = PT({ window: i, v5Compat: true }));
  let o = a.current, [s, l] = A.useState({ action: o.action, location: o.location }), { v7_startTransition: u } = n || {}, f = A.useCallback((c) => {
    u && z0 ? z0(() => l(c)) : l(c);
  }, [l, u]);
  return A.useLayoutEffect(() => o.listen(f), [o, f]), A.useEffect(() => p$(n), [n]), A.createElement(h$, { basename: t, children: r, location: s.location, navigationType: s.action, navigator: o, future: n });
}
const j$ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", P$ = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, _r = A.forwardRef(function(t, r) {
  let { onClick: n, relative: i, reloadDocument: a, replace: o, state: s, target: l, to: u, preventScrollReset: f, viewTransition: c } = t, d = kj(t, g$), { basename: h } = A.useContext(fn), y, v = false;
  if (typeof u == "string" && P$.test(u) && (y = u, j$)) try {
    let x = new URL(window.location.href), O = u.startsWith("//") ? new URL(x.protocol + u) : new URL(u), w = $a(O.pathname, h);
    O.origin === x.origin && w != null ? u = w + O.search + O.hash : v = true;
  } catch {
  }
  let m = QT(u, { relative: i }), g = E$(u, { replace: o, state: s, target: l, preventScrollReset: f, relative: i, viewTransition: c });
  function b(x) {
    n && n(x), x.defaultPrevented || g(x);
  }
  return A.createElement("a", oc({}, d, { href: y || m, onClick: v || a ? n : b, ref: r, target: l }));
}), A$ = A.forwardRef(function(t, r) {
  let { "aria-current": n = "page", caseSensitive: i = false, className: a = "", end: o = false, style: s, to: l, viewTransition: u, children: f } = t, c = kj(t, b$), d = kf(l, { relative: c.relative }), h = fo(), y = A.useContext(Oj), { navigator: v, basename: m } = A.useContext(fn), g = y != null && k$(d) && u === true, b = v.encodeLocation ? v.encodeLocation(d).pathname : d.pathname, x = h.pathname, O = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
  i || (x = x.toLowerCase(), O = O ? O.toLowerCase() : null, b = b.toLowerCase()), O && m && (O = $a(O, m) || O);
  const w = b !== "/" && b.endsWith("/") ? b.length - 1 : b.length;
  let S = x === b || !o && x.startsWith(b) && x.charAt(w) === "/", j = O != null && (O === b || !o && O.startsWith(b) && O.charAt(b.length) === "/"), P = { isActive: S, isPending: j, isTransitioning: g }, k = S ? n : void 0, T;
  typeof a == "function" ? T = a(P) : T = [a, S ? "active" : null, j ? "pending" : null, g ? "transitioning" : null].filter(Boolean).join(" ");
  let C = typeof s == "function" ? s(P) : s;
  return A.createElement(_r, oc({}, c, { "aria-current": k, className: T, ref: r, style: C, to: l, viewTransition: u }), typeof f == "function" ? f(P) : f);
});
var Ch;
(function(e12) {
  e12.UseScrollRestoration = "useScrollRestoration", e12.UseSubmit = "useSubmit", e12.UseSubmitFetcher = "useSubmitFetcher", e12.UseFetcher = "useFetcher", e12.useViewTransitionState = "useViewTransitionState";
})(Ch || (Ch = {}));
var F0;
(function(e12) {
  e12.UseFetcher = "useFetcher", e12.UseFetchers = "useFetchers", e12.UseScrollRestoration = "useScrollRestoration";
})(F0 || (F0 = {}));
function _$(e12) {
  let t = A.useContext(_f);
  return t || De(false), t;
}
function E$(e12, t) {
  let { target: r, replace: n, state: i, preventScrollReset: a, relative: o, viewTransition: s } = t === void 0 ? {} : t, l = Gn(), u = fo(), f = kf(e12, { relative: o });
  return A.useCallback((c) => {
    if (v$(c, r)) {
      c.preventDefault();
      let d = n !== void 0 ? n : ac(u) === ac(f);
      l(e12, { replace: d, state: i, preventScrollReset: a, relative: o, viewTransition: s });
    }
  }, [u, l, f, n, i, r, e12, a, o, s]);
}
function k$(e12, t) {
  t === void 0 && (t = {});
  let r = A.useContext(w$);
  r == null && De(false);
  let { basename: n } = _$(Ch.useViewTransitionState), i = kf(e12, { relative: t.relative });
  if (!r.isTransitioning) return false;
  let a = $a(r.currentLocation.pathname, n) || r.currentLocation.pathname, o = $a(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return Th(i.pathname, o) != null || Th(i.pathname, a) != null;
}
function Tj(e12, t) {
  return function() {
    return e12.apply(t, arguments);
  };
}
const { toString: T$ } = Object.prototype, { getPrototypeOf: uv } = Object, { iterator: Tf, toStringTag: $j } = Symbol, $f = /* @__PURE__ */ ((e12) => (t) => {
  const r = T$.call(t);
  return e12[r] || (e12[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), wr = (e12) => (e12 = e12.toLowerCase(), (t) => $f(t) === e12), Cf = (e12) => (t) => typeof t === e12, { isArray: po } = Array, Ca = Cf("undefined");
function Pl(e12) {
  return e12 !== null && !Ca(e12) && e12.constructor !== null && !Ca(e12.constructor) && Nt(e12.constructor.isBuffer) && e12.constructor.isBuffer(e12);
}
const Cj = wr("ArrayBuffer");
function $$(e12) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e12) : t = e12 && e12.buffer && Cj(e12.buffer), t;
}
const C$ = Cf("string"), Nt = Cf("function"), Nj = Cf("number"), Al = (e12) => e12 !== null && typeof e12 == "object", N$ = (e12) => e12 === true || e12 === false, Eu = (e12) => {
  if ($f(e12) !== "object") return false;
  const t = uv(e12);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !($j in e12) && !(Tf in e12);
}, M$ = (e12) => {
  if (!Al(e12) || Pl(e12)) return false;
  try {
    return Object.keys(e12).length === 0 && Object.getPrototypeOf(e12) === Object.prototype;
  } catch {
    return false;
  }
}, I$ = wr("Date"), R$ = wr("File"), D$ = (e12) => !!(e12 && typeof e12.uri < "u"), L$ = (e12) => e12 && typeof e12.getParts < "u", B$ = wr("Blob"), z$ = wr("FileList"), F$ = (e12) => Al(e12) && Nt(e12.pipe);
function U$() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const U0 = U$(), W0 = typeof U0.FormData < "u" ? U0.FormData : void 0, W$ = (e12) => {
  let t;
  return e12 && (W0 && e12 instanceof W0 || Nt(e12.append) && ((t = $f(e12)) === "formdata" || t === "object" && Nt(e12.toString) && e12.toString() === "[object FormData]"));
}, H$ = wr("URLSearchParams"), [V$, K$, q$, G$] = ["ReadableStream", "Request", "Response", "Headers"].map(wr), X$ = (e12) => e12.trim ? e12.trim() : e12.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function _l(e12, t, { allOwnKeys: r = false } = {}) {
  if (e12 === null || typeof e12 > "u") return;
  let n, i;
  if (typeof e12 != "object" && (e12 = [e12]), po(e12)) for (n = 0, i = e12.length; n < i; n++) t.call(null, e12[n], n, e12);
  else {
    if (Pl(e12)) return;
    const a = r ? Object.getOwnPropertyNames(e12) : Object.keys(e12), o = a.length;
    let s;
    for (n = 0; n < o; n++) s = a[n], t.call(null, e12[s], s, e12);
  }
}
function Mj(e12, t) {
  if (Pl(e12)) return null;
  t = t.toLowerCase();
  const r = Object.keys(e12);
  let n = r.length, i;
  for (; n-- > 0; ) if (i = r[n], t === i.toLowerCase()) return i;
  return null;
}
const di = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ij = (e12) => !Ca(e12) && e12 !== di;
function Nh() {
  const { caseless: e12, skipUndefined: t } = Ij(this) && this || {}, r = {}, n = (i, a) => {
    if (a === "__proto__" || a === "constructor" || a === "prototype") return;
    const o = e12 && Mj(r, a) || a;
    Eu(r[o]) && Eu(i) ? r[o] = Nh(r[o], i) : Eu(i) ? r[o] = Nh({}, i) : po(i) ? r[o] = i.slice() : (!t || !Ca(i)) && (r[o] = i);
  };
  for (let i = 0, a = arguments.length; i < a; i++) arguments[i] && _l(arguments[i], n);
  return r;
}
const Y$ = (e12, t, r, { allOwnKeys: n } = {}) => (_l(t, (i, a) => {
  r && Nt(i) ? Object.defineProperty(e12, a, { value: Tj(i, r), writable: true, enumerable: true, configurable: true }) : Object.defineProperty(e12, a, { value: i, writable: true, enumerable: true, configurable: true });
}, { allOwnKeys: n }), e12), Q$ = (e12) => (e12.charCodeAt(0) === 65279 && (e12 = e12.slice(1)), e12), J$ = (e12, t, r, n) => {
  e12.prototype = Object.create(t.prototype, n), Object.defineProperty(e12.prototype, "constructor", { value: e12, writable: true, enumerable: false, configurable: true }), Object.defineProperty(e12, "super", { value: t.prototype }), r && Object.assign(e12.prototype, r);
}, Z$ = (e12, t, r, n) => {
  let i, a, o;
  const s = {};
  if (t = t || {}, e12 == null) return t;
  do {
    for (i = Object.getOwnPropertyNames(e12), a = i.length; a-- > 0; ) o = i[a], (!n || n(o, e12, t)) && !s[o] && (t[o] = e12[o], s[o] = true);
    e12 = r !== false && uv(e12);
  } while (e12 && (!r || r(e12, t)) && e12 !== Object.prototype);
  return t;
}, eC = (e12, t, r) => {
  e12 = String(e12), (r === void 0 || r > e12.length) && (r = e12.length), r -= t.length;
  const n = e12.indexOf(t, r);
  return n !== -1 && n === r;
}, tC = (e12) => {
  if (!e12) return null;
  if (po(e12)) return e12;
  let t = e12.length;
  if (!Nj(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; ) r[t] = e12[t];
  return r;
}, rC = /* @__PURE__ */ ((e12) => (t) => e12 && t instanceof e12)(typeof Uint8Array < "u" && uv(Uint8Array)), nC = (e12, t) => {
  const n = (e12 && e12[Tf]).call(e12);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const a = i.value;
    t.call(e12, a[0], a[1]);
  }
}, iC = (e12, t) => {
  let r;
  const n = [];
  for (; (r = e12.exec(t)) !== null; ) n.push(r);
  return n;
}, aC = wr("HTMLFormElement"), oC = (e12) => e12.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, n, i) {
  return n.toUpperCase() + i;
}), H0 = (({ hasOwnProperty: e12 }) => (t, r) => e12.call(t, r))(Object.prototype), sC = wr("RegExp"), Rj = (e12, t) => {
  const r = Object.getOwnPropertyDescriptors(e12), n = {};
  _l(r, (i, a) => {
    let o;
    (o = t(i, a, e12)) !== false && (n[a] = o || i);
  }), Object.defineProperties(e12, n);
}, lC = (e12) => {
  Rj(e12, (t, r) => {
    if (Nt(e12) && ["arguments", "caller", "callee"].indexOf(r) !== -1) return false;
    const n = e12[r];
    if (Nt(n)) {
      if (t.enumerable = false, "writable" in t) {
        t.writable = false;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, uC = (e12, t) => {
  const r = {}, n = (i) => {
    i.forEach((a) => {
      r[a] = true;
    });
  };
  return po(e12) ? n(e12) : n(String(e12).split(t)), r;
}, cC = () => {
}, fC = (e12, t) => e12 != null && Number.isFinite(e12 = +e12) ? e12 : t;
function dC(e12) {
  return !!(e12 && Nt(e12.append) && e12[$j] === "FormData" && e12[Tf]);
}
const pC = (e12) => {
  const t = new Array(10), r = (n, i) => {
    if (Al(n)) {
      if (t.indexOf(n) >= 0) return;
      if (Pl(n)) return n;
      if (!("toJSON" in n)) {
        t[i] = n;
        const a = po(n) ? [] : {};
        return _l(n, (o, s) => {
          const l = r(o, i + 1);
          !Ca(l) && (a[s] = l);
        }), t[i] = void 0, a;
      }
    }
    return n;
  };
  return r(e12, 0);
}, hC = wr("AsyncFunction"), mC = (e12) => e12 && (Al(e12) || Nt(e12)) && Nt(e12.then) && Nt(e12.catch), Dj = ((e12, t) => e12 ? setImmediate : t ? ((r, n) => (di.addEventListener("message", ({ source: i, data: a }) => {
  i === di && a === r && n.length && n.shift()();
}, false), (i) => {
  n.push(i), di.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(typeof setImmediate == "function", Nt(di.postMessage)), yC = typeof queueMicrotask < "u" ? queueMicrotask.bind(di) : typeof process < "u" && process.nextTick || Dj, vC = (e12) => e12 != null && Nt(e12[Tf]), I = { isArray: po, isArrayBuffer: Cj, isBuffer: Pl, isFormData: W$, isArrayBufferView: $$, isString: C$, isNumber: Nj, isBoolean: N$, isObject: Al, isPlainObject: Eu, isEmptyObject: M$, isReadableStream: V$, isRequest: K$, isResponse: q$, isHeaders: G$, isUndefined: Ca, isDate: I$, isFile: R$, isReactNativeBlob: D$, isReactNative: L$, isBlob: B$, isRegExp: sC, isFunction: Nt, isStream: F$, isURLSearchParams: H$, isTypedArray: rC, isFileList: z$, forEach: _l, merge: Nh, extend: Y$, trim: X$, stripBOM: Q$, inherits: J$, toFlatObject: Z$, kindOf: $f, kindOfTest: wr, endsWith: eC, toArray: tC, forEachEntry: nC, matchAll: iC, isHTMLForm: aC, hasOwnProperty: H0, hasOwnProp: H0, reduceDescriptors: Rj, freezeMethods: lC, toObjectSet: uC, toCamelCase: oC, noop: cC, toFiniteNumber: fC, findKey: Mj, global: di, isContextDefined: Ij, isSpecCompliantForm: dC, toJSONObject: pC, isAsyncFn: hC, isThenable: mC, setImmediate: Dj, asap: yC, isIterable: vC };
let ae = class Lj extends Error {
  static from(t, r, n, i, a, o) {
    const s = new Lj(t.message, r || t.code, n, i, a);
    return s.cause = t, s.name = t.name, t.status != null && s.status == null && (s.status = t.status), o && Object.assign(s, o), s;
  }
  constructor(t, r, n, i, a) {
    super(t), Object.defineProperty(this, "message", { value: t, enumerable: true, writable: true, configurable: true }), this.name = "AxiosError", this.isAxiosError = true, r && (this.code = r), n && (this.config = n), i && (this.request = i), a && (this.response = a, this.status = a.status);
  }
  toJSON() {
    return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: I.toJSONObject(this.config), code: this.code, status: this.status };
  }
};
ae.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
ae.ERR_BAD_OPTION = "ERR_BAD_OPTION";
ae.ECONNABORTED = "ECONNABORTED";
ae.ETIMEDOUT = "ETIMEDOUT";
ae.ERR_NETWORK = "ERR_NETWORK";
ae.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
ae.ERR_DEPRECATED = "ERR_DEPRECATED";
ae.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
ae.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
ae.ERR_CANCELED = "ERR_CANCELED";
ae.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
ae.ERR_INVALID_URL = "ERR_INVALID_URL";
const gC = null;
function Mh(e12) {
  return I.isPlainObject(e12) || I.isArray(e12);
}
function Bj(e12) {
  return I.endsWith(e12, "[]") ? e12.slice(0, -2) : e12;
}
function tp(e12, t, r) {
  return e12 ? e12.concat(t).map(function(i, a) {
    return i = Bj(i), !r && a ? "[" + i + "]" : i;
  }).join(r ? "." : "") : t;
}
function bC(e12) {
  return I.isArray(e12) && !e12.some(Mh);
}
const xC = I.toFlatObject(I, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Nf(e12, t, r) {
  if (!I.isObject(e12)) throw new TypeError("target must be an object");
  t = t || new FormData(), r = I.toFlatObject(r, { metaTokens: true, dots: false, indexes: false }, false, function(v, m) {
    return !I.isUndefined(m[v]);
  });
  const n = r.metaTokens, i = r.visitor || f, a = r.dots, o = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && I.isSpecCompliantForm(t);
  if (!I.isFunction(i)) throw new TypeError("visitor must be a function");
  function u(y) {
    if (y === null) return "";
    if (I.isDate(y)) return y.toISOString();
    if (I.isBoolean(y)) return y.toString();
    if (!l && I.isBlob(y)) throw new ae("Blob is not supported. Use a Buffer instead.");
    return I.isArrayBuffer(y) || I.isTypedArray(y) ? l && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function f(y, v, m) {
    let g = y;
    if (I.isReactNative(t) && I.isReactNativeBlob(y)) return t.append(tp(m, v, a), u(y)), false;
    if (y && !m && typeof y == "object") {
      if (I.endsWith(v, "{}")) v = n ? v : v.slice(0, -2), y = JSON.stringify(y);
      else if (I.isArray(y) && bC(y) || (I.isFileList(y) || I.endsWith(v, "[]")) && (g = I.toArray(y))) return v = Bj(v), g.forEach(function(x, O) {
        !(I.isUndefined(x) || x === null) && t.append(o === true ? tp([v], O, a) : o === null ? v : v + "[]", u(x));
      }), false;
    }
    return Mh(y) ? true : (t.append(tp(m, v, a), u(y)), false);
  }
  const c = [], d = Object.assign(xC, { defaultVisitor: f, convertValue: u, isVisitable: Mh });
  function h(y, v) {
    if (!I.isUndefined(y)) {
      if (c.indexOf(y) !== -1) throw Error("Circular reference detected in " + v.join("."));
      c.push(y), I.forEach(y, function(g, b) {
        (!(I.isUndefined(g) || g === null) && i.call(t, g, I.isString(b) ? b.trim() : b, v, d)) === true && h(g, v ? v.concat(b) : [b]);
      }), c.pop();
    }
  }
  if (!I.isObject(e12)) throw new TypeError("data must be an object");
  return h(e12), t;
}
function V0(e12) {
  const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e12).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function cv(e12, t) {
  this._pairs = [], e12 && Nf(e12, this, t);
}
const zj = cv.prototype;
zj.append = function(t, r) {
  this._pairs.push([t, r]);
};
zj.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, V0);
  } : V0;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function wC(e12) {
  return encodeURIComponent(e12).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Fj(e12, t, r) {
  if (!t) return e12;
  const n = r && r.encode || wC, i = I.isFunction(r) ? { serialize: r } : r, a = i && i.serialize;
  let o;
  if (a ? o = a(t, i) : o = I.isURLSearchParams(t) ? t.toString() : new cv(t, i).toString(n), o) {
    const s = e12.indexOf("#");
    s !== -1 && (e12 = e12.slice(0, s)), e12 += (e12.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e12;
}
class K0 {
  constructor() {
    this.handlers = [];
  }
  use(t, r, n) {
    return this.handlers.push({ fulfilled: t, rejected: r, synchronous: n ? n.synchronous : false, runWhen: n ? n.runWhen : null }), this.handlers.length - 1;
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    I.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const fv = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false, legacyInterceptorReqResOrdering: true }, SC = typeof URLSearchParams < "u" ? URLSearchParams : cv, OC = typeof FormData < "u" ? FormData : null, jC = typeof Blob < "u" ? Blob : null, PC = { isBrowser: true, classes: { URLSearchParams: SC, FormData: OC, Blob: jC }, protocols: ["http", "https", "file", "blob", "url", "data"] }, dv = typeof window < "u" && typeof document < "u", Ih = typeof navigator == "object" && navigator || void 0, AC = dv && (!Ih || ["ReactNative", "NativeScript", "NS"].indexOf(Ih.product) < 0), _C = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", EC = dv && window.location.href || "http://localhost", kC = Object.freeze(Object.defineProperty({ __proto__: null, hasBrowserEnv: dv, hasStandardBrowserEnv: AC, hasStandardBrowserWebWorkerEnv: _C, navigator: Ih, origin: EC }, Symbol.toStringTag, { value: "Module" })), mt = { ...kC, ...PC };
function TC(e12, t) {
  return Nf(e12, new mt.classes.URLSearchParams(), { visitor: function(r, n, i, a) {
    return mt.isNode && I.isBuffer(r) ? (this.append(n, r.toString("base64")), false) : a.defaultVisitor.apply(this, arguments);
  }, ...t });
}
function $C(e12) {
  return I.matchAll(/\w+|\[(\w*)]/g, e12).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function CC(e12) {
  const t = {}, r = Object.keys(e12);
  let n;
  const i = r.length;
  let a;
  for (n = 0; n < i; n++) a = r[n], t[a] = e12[a];
  return t;
}
function Uj(e12) {
  function t(r, n, i, a) {
    let o = r[a++];
    if (o === "__proto__") return true;
    const s = Number.isFinite(+o), l = a >= r.length;
    return o = !o && I.isArray(i) ? i.length : o, l ? (I.hasOwnProp(i, o) ? i[o] = [i[o], n] : i[o] = n, !s) : ((!i[o] || !I.isObject(i[o])) && (i[o] = []), t(r, n, i[o], a) && I.isArray(i[o]) && (i[o] = CC(i[o])), !s);
  }
  if (I.isFormData(e12) && I.isFunction(e12.entries)) {
    const r = {};
    return I.forEachEntry(e12, (n, i) => {
      t($C(n), i, r, 0);
    }), r;
  }
  return null;
}
function NC(e12, t, r) {
  if (I.isString(e12)) try {
    return (t || JSON.parse)(e12), I.trim(e12);
  } catch (n) {
    if (n.name !== "SyntaxError") throw n;
  }
  return (r || JSON.stringify)(e12);
}
const El = { transitional: fv, adapter: ["xhr", "http", "fetch"], transformRequest: [function(t, r) {
  const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, a = I.isObject(t);
  if (a && I.isHTMLForm(t) && (t = new FormData(t)), I.isFormData(t)) return i ? JSON.stringify(Uj(t)) : t;
  if (I.isArrayBuffer(t) || I.isBuffer(t) || I.isStream(t) || I.isFile(t) || I.isBlob(t) || I.isReadableStream(t)) return t;
  if (I.isArrayBufferView(t)) return t.buffer;
  if (I.isURLSearchParams(t)) return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), t.toString();
  let s;
  if (a) {
    if (n.indexOf("application/x-www-form-urlencoded") > -1) return TC(t, this.formSerializer).toString();
    if ((s = I.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
      const l = this.env && this.env.FormData;
      return Nf(s ? { "files[]": t } : t, l && new l(), this.formSerializer);
    }
  }
  return a || i ? (r.setContentType("application/json", false), NC(t)) : t;
}], transformResponse: [function(t) {
  const r = this.transitional || El.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
  if (I.isResponse(t) || I.isReadableStream(t)) return t;
  if (t && I.isString(t) && (n && !this.responseType || i)) {
    const o = !(r && r.silentJSONParsing) && i;
    try {
      return JSON.parse(t, this.parseReviver);
    } catch (s) {
      if (o) throw s.name === "SyntaxError" ? ae.from(s, ae.ERR_BAD_RESPONSE, this, null, this.response) : s;
    }
  }
  return t;
}], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: mt.classes.FormData, Blob: mt.classes.Blob }, validateStatus: function(t) {
  return t >= 200 && t < 300;
}, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
I.forEach(["delete", "get", "head", "post", "put", "patch"], (e12) => {
  El.headers[e12] = {};
});
const MC = I.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), IC = (e12) => {
  const t = {};
  let r, n, i;
  return e12 && e12.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), r = o.substring(0, i).trim().toLowerCase(), n = o.substring(i + 1).trim(), !(!r || t[r] && MC[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, q0 = Symbol("internals");
function Lo(e12) {
  return e12 && String(e12).trim().toLowerCase();
}
function ku(e12) {
  return e12 === false || e12 == null ? e12 : I.isArray(e12) ? e12.map(ku) : String(e12).replace(/[\r\n]+$/, "");
}
function RC(e12) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e12); ) t[n[1]] = n[2];
  return t;
}
const DC = (e12) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e12.trim());
function rp(e12, t, r, n, i) {
  if (I.isFunction(n)) return n.call(this, t, r);
  if (i && (t = r), !!I.isString(t)) {
    if (I.isString(n)) return t.indexOf(n) !== -1;
    if (I.isRegExp(n)) return n.test(t);
  }
}
function LC(e12) {
  return e12.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function BC(e12, t) {
  const r = I.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e12, n + r, { value: function(i, a, o) {
      return this[n].call(this, t, i, a, o);
    }, configurable: true });
  });
}
let Mt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function a(s, l, u) {
      const f = Lo(l);
      if (!f) throw new Error("header name must be a non-empty string");
      const c = I.findKey(i, f);
      (!c || i[c] === void 0 || u === true || u === void 0 && i[c] !== false) && (i[c || l] = ku(s));
    }
    const o = (s, l) => I.forEach(s, (u, f) => a(u, f, l));
    if (I.isPlainObject(t) || t instanceof this.constructor) o(t, r);
    else if (I.isString(t) && (t = t.trim()) && !DC(t)) o(IC(t), r);
    else if (I.isObject(t) && I.isIterable(t)) {
      let s = {}, l, u;
      for (const f of t) {
        if (!I.isArray(f)) throw TypeError("Object iterator must return a key-value pair");
        s[u = f[0]] = (l = s[u]) ? I.isArray(l) ? [...l, f[1]] : [l, f[1]] : f[1];
      }
      o(s, r);
    } else t != null && a(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Lo(t), t) {
      const n = I.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r) return i;
        if (r === true) return RC(i);
        if (I.isFunction(r)) return r.call(this, i, n);
        if (I.isRegExp(r)) return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Lo(t), t) {
      const n = I.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || rp(this, this[n], n, r)));
    }
    return false;
  }
  delete(t, r) {
    const n = this;
    let i = false;
    function a(o) {
      if (o = Lo(o), o) {
        const s = I.findKey(n, o);
        s && (!r || rp(n, n[s], s, r)) && (delete n[s], i = true);
      }
    }
    return I.isArray(t) ? t.forEach(a) : a(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, i = false;
    for (; n--; ) {
      const a = r[n];
      (!t || rp(this, this[a], a, t, true)) && (delete this[a], i = true);
    }
    return i;
  }
  normalize(t) {
    const r = this, n = {};
    return I.forEach(this, (i, a) => {
      const o = I.findKey(n, a);
      if (o) {
        r[o] = ku(i), delete r[a];
        return;
      }
      const s = t ? LC(a) : String(a).trim();
      s !== a && delete r[a], r[s] = ku(i), n[s] = true;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return I.forEach(this, (n, i) => {
      n != null && n !== false && (r[i] = t && I.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(t) {
    const n = (this[q0] = this[q0] = { accessors: {} }).accessors, i = this.prototype;
    function a(o) {
      const s = Lo(o);
      n[s] || (BC(i, o), n[s] = true);
    }
    return I.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
Mt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
I.reduceDescriptors(Mt.prototype, ({ value: e12 }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return { get: () => e12, set(n) {
    this[r] = n;
  } };
});
I.freezeMethods(Mt);
function np(e12, t) {
  const r = this || El, n = t || r, i = Mt.from(n.headers);
  let a = n.data;
  return I.forEach(e12, function(s) {
    a = s.call(r, a, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), a;
}
function Wj(e12) {
  return !!(e12 && e12.__CANCEL__);
}
let kl = class extends ae {
  constructor(t, r, n) {
    super(t ?? "canceled", ae.ERR_CANCELED, r, n), this.name = "CanceledError", this.__CANCEL__ = true;
  }
};
function Hj(e12, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e12(r) : t(new ae("Request failed with status code " + r.status, [ae.ERR_BAD_REQUEST, ae.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r));
}
function zC(e12) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e12);
  return t && t[1] || "";
}
function FC(e12, t) {
  e12 = e12 || 10;
  const r = new Array(e12), n = new Array(e12);
  let i = 0, a = 0, o;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const u = Date.now(), f = n[a];
    o || (o = u), r[i] = l, n[i] = u;
    let c = a, d = 0;
    for (; c !== i; ) d += r[c++], c = c % e12;
    if (i = (i + 1) % e12, i === a && (a = (a + 1) % e12), u - o < t) return;
    const h = f && u - f;
    return h ? Math.round(d * 1e3 / h) : void 0;
  };
}
function UC(e12, t) {
  let r = 0, n = 1e3 / t, i, a;
  const o = (u, f = Date.now()) => {
    r = f, i = null, a && (clearTimeout(a), a = null), e12(...u);
  };
  return [(...u) => {
    const f = Date.now(), c = f - r;
    c >= n ? o(u, f) : (i = u, a || (a = setTimeout(() => {
      a = null, o(i);
    }, n - c)));
  }, () => i && o(i)];
}
const sc = (e12, t, r = 3) => {
  let n = 0;
  const i = FC(50, 250);
  return UC((a) => {
    const o = a.loaded, s = a.lengthComputable ? a.total : void 0, l = o - n, u = i(l), f = o <= s;
    n = o;
    const c = { loaded: o, total: s, progress: s ? o / s : void 0, bytes: l, rate: u || void 0, estimated: u && s && f ? (s - o) / u : void 0, event: a, lengthComputable: s != null, [t ? "download" : "upload"]: true };
    e12(c);
  }, r);
}, G0 = (e12, t) => {
  const r = e12 != null;
  return [(n) => t[0]({ lengthComputable: r, total: e12, loaded: n }), t[1]];
}, X0 = (e12) => (...t) => I.asap(() => e12(...t)), WC = mt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e12, t) => (r) => (r = new URL(r, mt.origin), e12.protocol === r.protocol && e12.host === r.host && (t || e12.port === r.port)))(new URL(mt.origin), mt.navigator && /(msie|trident)/i.test(mt.navigator.userAgent)) : () => true, HC = mt.hasStandardBrowserEnv ? { write(e12, t, r, n, i, a, o) {
  if (typeof document > "u") return;
  const s = [`${e12}=${encodeURIComponent(t)}`];
  I.isNumber(r) && s.push(`expires=${new Date(r).toUTCString()}`), I.isString(n) && s.push(`path=${n}`), I.isString(i) && s.push(`domain=${i}`), a === true && s.push("secure"), I.isString(o) && s.push(`SameSite=${o}`), document.cookie = s.join("; ");
}, read(e12) {
  if (typeof document > "u") return null;
  const t = document.cookie.match(new RegExp("(?:^|; )" + e12 + "=([^;]*)"));
  return t ? decodeURIComponent(t[1]) : null;
}, remove(e12) {
  this.write(e12, "", Date.now() - 864e5, "/");
} } : { write() {
}, read() {
  return null;
}, remove() {
} };
function VC(e12) {
  return typeof e12 != "string" ? false : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e12);
}
function KC(e12, t) {
  return t ? e12.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e12;
}
function Vj(e12, t, r) {
  let n = !VC(t);
  return e12 && (n || r == false) ? KC(e12, t) : t;
}
const Y0 = (e12) => e12 instanceof Mt ? { ...e12 } : e12;
function ki(e12, t) {
  t = t || {};
  const r = {};
  function n(u, f, c, d) {
    return I.isPlainObject(u) && I.isPlainObject(f) ? I.merge.call({ caseless: d }, u, f) : I.isPlainObject(f) ? I.merge({}, f) : I.isArray(f) ? f.slice() : f;
  }
  function i(u, f, c, d) {
    if (I.isUndefined(f)) {
      if (!I.isUndefined(u)) return n(void 0, u, c, d);
    } else return n(u, f, c, d);
  }
  function a(u, f) {
    if (!I.isUndefined(f)) return n(void 0, f);
  }
  function o(u, f) {
    if (I.isUndefined(f)) {
      if (!I.isUndefined(u)) return n(void 0, u);
    } else return n(void 0, f);
  }
  function s(u, f, c) {
    if (c in t) return n(u, f);
    if (c in e12) return n(void 0, u);
  }
  const l = { url: a, method: a, data: a, baseURL: o, transformRequest: o, transformResponse: o, paramsSerializer: o, timeout: o, timeoutMessage: o, withCredentials: o, withXSRFToken: o, adapter: o, responseType: o, xsrfCookieName: o, xsrfHeaderName: o, onUploadProgress: o, onDownloadProgress: o, decompress: o, maxContentLength: o, maxBodyLength: o, beforeRedirect: o, transport: o, httpAgent: o, httpsAgent: o, cancelToken: o, socketPath: o, responseEncoding: o, validateStatus: s, headers: (u, f, c) => i(Y0(u), Y0(f), c, true) };
  return I.forEach(Object.keys({ ...e12, ...t }), function(f) {
    if (f === "__proto__" || f === "constructor" || f === "prototype") return;
    const c = I.hasOwnProp(l, f) ? l[f] : i, d = c(e12[f], t[f], f);
    I.isUndefined(d) && c !== s || (r[f] = d);
  }), r;
}
const Kj = (e12) => {
  const t = ki({}, e12);
  let { data: r, withXSRFToken: n, xsrfHeaderName: i, xsrfCookieName: a, headers: o, auth: s } = t;
  if (t.headers = o = Mt.from(o), t.url = Fj(Vj(t.baseURL, t.url, t.allowAbsoluteUrls), e12.params, e12.paramsSerializer), s && o.set("Authorization", "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))), I.isFormData(r)) {
    if (mt.hasStandardBrowserEnv || mt.hasStandardBrowserWebWorkerEnv) o.setContentType(void 0);
    else if (I.isFunction(r.getHeaders)) {
      const l = r.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(l).forEach(([f, c]) => {
        u.includes(f.toLowerCase()) && o.set(f, c);
      });
    }
  }
  if (mt.hasStandardBrowserEnv && (n && I.isFunction(n) && (n = n(t)), n || n !== false && WC(t.url))) {
    const l = i && a && HC.read(a);
    l && o.set(i, l);
  }
  return t;
}, qC = typeof XMLHttpRequest < "u", GC = qC && function(e12) {
  return new Promise(function(r, n) {
    const i = Kj(e12);
    let a = i.data;
    const o = Mt.from(i.headers).normalize();
    let { responseType: s, onUploadProgress: l, onDownloadProgress: u } = i, f, c, d, h, y;
    function v() {
      h && h(), y && y(), i.cancelToken && i.cancelToken.unsubscribe(f), i.signal && i.signal.removeEventListener("abort", f);
    }
    let m = new XMLHttpRequest();
    m.open(i.method.toUpperCase(), i.url, true), m.timeout = i.timeout;
    function g() {
      if (!m) return;
      const x = Mt.from("getAllResponseHeaders" in m && m.getAllResponseHeaders()), w = { data: !s || s === "text" || s === "json" ? m.responseText : m.response, status: m.status, statusText: m.statusText, headers: x, config: e12, request: m };
      Hj(function(j) {
        r(j), v();
      }, function(j) {
        n(j), v();
      }, w), m = null;
    }
    "onloadend" in m ? m.onloadend = g : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, m.onabort = function() {
      m && (n(new ae("Request aborted", ae.ECONNABORTED, e12, m)), m = null);
    }, m.onerror = function(O) {
      const w = O && O.message ? O.message : "Network Error", S = new ae(w, ae.ERR_NETWORK, e12, m);
      S.event = O || null, n(S), m = null;
    }, m.ontimeout = function() {
      let O = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const w = i.transitional || fv;
      i.timeoutErrorMessage && (O = i.timeoutErrorMessage), n(new ae(O, w.clarifyTimeoutError ? ae.ETIMEDOUT : ae.ECONNABORTED, e12, m)), m = null;
    }, a === void 0 && o.setContentType(null), "setRequestHeader" in m && I.forEach(o.toJSON(), function(O, w) {
      m.setRequestHeader(w, O);
    }), I.isUndefined(i.withCredentials) || (m.withCredentials = !!i.withCredentials), s && s !== "json" && (m.responseType = i.responseType), u && ([d, y] = sc(u, true), m.addEventListener("progress", d)), l && m.upload && ([c, h] = sc(l), m.upload.addEventListener("progress", c), m.upload.addEventListener("loadend", h)), (i.cancelToken || i.signal) && (f = (x) => {
      m && (n(!x || x.type ? new kl(null, e12, m) : x), m.abort(), m = null);
    }, i.cancelToken && i.cancelToken.subscribe(f), i.signal && (i.signal.aborted ? f() : i.signal.addEventListener("abort", f)));
    const b = zC(i.url);
    if (b && mt.protocols.indexOf(b) === -1) {
      n(new ae("Unsupported protocol " + b + ":", ae.ERR_BAD_REQUEST, e12));
      return;
    }
    m.send(a || null);
  });
}, XC = (e12, t) => {
  const { length: r } = e12 = e12 ? e12.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), i;
    const a = function(u) {
      if (!i) {
        i = true, s();
        const f = u instanceof Error ? u : this.reason;
        n.abort(f instanceof ae ? f : new kl(f instanceof Error ? f.message : f));
      }
    };
    let o = t && setTimeout(() => {
      o = null, a(new ae(`timeout of ${t}ms exceeded`, ae.ETIMEDOUT));
    }, t);
    const s = () => {
      e12 && (o && clearTimeout(o), o = null, e12.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(a) : u.removeEventListener("abort", a);
      }), e12 = null);
    };
    e12.forEach((u) => u.addEventListener("abort", a));
    const { signal: l } = n;
    return l.unsubscribe = () => I.asap(s), l;
  }
}, YC = function* (e12, t) {
  let r = e12.byteLength;
  if (r < t) {
    yield e12;
    return;
  }
  let n = 0, i;
  for (; n < r; ) i = n + t, yield e12.slice(n, i), n = i;
}, QC = async function* (e12, t) {
  for await (const r of JC(e12)) yield* YC(r, t);
}, JC = async function* (e12) {
  if (e12[Symbol.asyncIterator]) {
    yield* e12;
    return;
  }
  const t = e12.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r) break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Q0 = (e12, t, r, n) => {
  const i = QC(e12, t);
  let a = 0, o, s = (l) => {
    o || (o = true, n && n(l));
  };
  return new ReadableStream({ async pull(l) {
    try {
      const { done: u, value: f } = await i.next();
      if (u) {
        s(), l.close();
        return;
      }
      let c = f.byteLength;
      if (r) {
        let d = a += c;
        r(d);
      }
      l.enqueue(new Uint8Array(f));
    } catch (u) {
      throw s(u), u;
    }
  }, cancel(l) {
    return s(l), i.return();
  } }, { highWaterMark: 2 });
}, J0 = 64 * 1024, { isFunction: eu } = I, ZC = (({ Request: e12, Response: t }) => ({ Request: e12, Response: t }))(I.global), { ReadableStream: Z0, TextEncoder: eb } = I.global, tb = (e12, ...t) => {
  try {
    return !!e12(...t);
  } catch {
    return false;
  }
}, eN = (e12) => {
  e12 = I.merge.call({ skipUndefined: true }, ZC, e12);
  const { fetch: t, Request: r, Response: n } = e12, i = t ? eu(t) : typeof fetch == "function", a = eu(r), o = eu(n);
  if (!i) return false;
  const s = i && eu(Z0), l = i && (typeof eb == "function" ? /* @__PURE__ */ ((y) => (v) => y.encode(v))(new eb()) : async (y) => new Uint8Array(await new r(y).arrayBuffer())), u = a && s && tb(() => {
    let y = false;
    const v = new Z0(), m = new r(mt.origin, { body: v, method: "POST", get duplex() {
      return y = true, "half";
    } }).headers.has("Content-Type");
    return v.cancel(), y && !m;
  }), f = o && s && tb(() => I.isReadableStream(new n("").body)), c = { stream: f && ((y) => y.body) };
  i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((y) => {
    !c[y] && (c[y] = (v, m) => {
      let g = v && v[y];
      if (g) return g.call(v);
      throw new ae(`Response type '${y}' is not supported`, ae.ERR_NOT_SUPPORT, m);
    });
  });
  const d = async (y) => {
    if (y == null) return 0;
    if (I.isBlob(y)) return y.size;
    if (I.isSpecCompliantForm(y)) return (await new r(mt.origin, { method: "POST", body: y }).arrayBuffer()).byteLength;
    if (I.isArrayBufferView(y) || I.isArrayBuffer(y)) return y.byteLength;
    if (I.isURLSearchParams(y) && (y = y + ""), I.isString(y)) return (await l(y)).byteLength;
  }, h = async (y, v) => {
    const m = I.toFiniteNumber(y.getContentLength());
    return m ?? d(v);
  };
  return async (y) => {
    let { url: v, method: m, data: g, signal: b, cancelToken: x, timeout: O, onDownloadProgress: w, onUploadProgress: S, responseType: j, headers: P, withCredentials: k = "same-origin", fetchOptions: T } = Kj(y), C = t || fetch;
    j = j ? (j + "").toLowerCase() : "text";
    let $ = XC([b, x && x.toAbortSignal()], O), L = null;
    const R = $ && $.unsubscribe && (() => {
      $.unsubscribe();
    });
    let D;
    try {
      if (S && u && m !== "get" && m !== "head" && (D = await h(P, g)) !== 0) {
        let X = new r(v, { method: "POST", body: g, duplex: "half" }), V;
        if (I.isFormData(g) && (V = X.headers.get("content-type")) && P.setContentType(V), X.body) {
          const [Q, oe] = G0(D, sc(X0(S)));
          g = Q0(X.body, J0, Q, oe);
        }
      }
      I.isString(k) || (k = k ? "include" : "omit");
      const B = a && "credentials" in r.prototype, W = { ...T, signal: $, method: m.toUpperCase(), headers: P.normalize().toJSON(), body: g, duplex: "half", credentials: B ? k : void 0 };
      L = a && new r(v, W);
      let N = await (a ? C(L, T) : C(v, W));
      const F = f && (j === "stream" || j === "response");
      if (f && (w || F && R)) {
        const X = {};
        ["status", "statusText", "headers"].forEach((fe) => {
          X[fe] = N[fe];
        });
        const V = I.toFiniteNumber(N.headers.get("content-length")), [Q, oe] = w && G0(V, sc(X0(w), true)) || [];
        N = new n(Q0(N.body, J0, Q, () => {
          oe && oe(), R && R();
        }), X);
      }
      j = j || "text";
      let U = await c[I.findKey(c, j) || "text"](N, y);
      return !F && R && R(), await new Promise((X, V) => {
        Hj(X, V, { data: U, headers: Mt.from(N.headers), status: N.status, statusText: N.statusText, config: y, request: L });
      });
    } catch (B) {
      throw R && R(), B && B.name === "TypeError" && /Load failed|fetch/i.test(B.message) ? Object.assign(new ae("Network Error", ae.ERR_NETWORK, y, L, B && B.response), { cause: B.cause || B }) : ae.from(B, B && B.code, y, L, B && B.response);
    }
  };
}, tN = /* @__PURE__ */ new Map(), qj = (e12) => {
  let t = e12 && e12.env || {};
  const { fetch: r, Request: n, Response: i } = t, a = [n, i, r];
  let o = a.length, s = o, l, u, f = tN;
  for (; s--; ) l = a[s], u = f.get(l), u === void 0 && f.set(l, u = s ? /* @__PURE__ */ new Map() : eN(t)), f = u;
  return u;
};
qj();
const pv = { http: gC, xhr: GC, fetch: { get: qj } };
I.forEach(pv, (e12, t) => {
  if (e12) {
    try {
      Object.defineProperty(e12, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e12, "adapterName", { value: t });
  }
});
const rb = (e12) => `- ${e12}`, rN = (e12) => I.isFunction(e12) || e12 === null || e12 === false;
function nN(e12, t) {
  e12 = I.isArray(e12) ? e12 : [e12];
  const { length: r } = e12;
  let n, i;
  const a = {};
  for (let o = 0; o < r; o++) {
    n = e12[o];
    let s;
    if (i = n, !rN(n) && (i = pv[(s = String(n)).toLowerCase()], i === void 0)) throw new ae(`Unknown adapter '${s}'`);
    if (i && (I.isFunction(i) || (i = i.get(t)))) break;
    a[s || "#" + o] = i;
  }
  if (!i) {
    const o = Object.entries(a).map(([l, u]) => `adapter ${l} ` + (u === false ? "is not supported by the environment" : "is not available in the build"));
    let s = r ? o.length > 1 ? `since :
` + o.map(rb).join(`
`) : " " + rb(o[0]) : "as no adapter specified";
    throw new ae("There is no suitable adapter to dispatch the request " + s, "ERR_NOT_SUPPORT");
  }
  return i;
}
const Gj = { getAdapter: nN, adapters: pv };
function ip(e12) {
  if (e12.cancelToken && e12.cancelToken.throwIfRequested(), e12.signal && e12.signal.aborted) throw new kl(null, e12);
}
function nb(e12) {
  return ip(e12), e12.headers = Mt.from(e12.headers), e12.data = np.call(e12, e12.transformRequest), ["post", "put", "patch"].indexOf(e12.method) !== -1 && e12.headers.setContentType("application/x-www-form-urlencoded", false), Gj.getAdapter(e12.adapter || El.adapter, e12)(e12).then(function(n) {
    return ip(e12), n.data = np.call(e12, e12.transformResponse, n), n.headers = Mt.from(n.headers), n;
  }, function(n) {
    return Wj(n) || (ip(e12), n && n.response && (n.response.data = np.call(e12, e12.transformResponse, n.response), n.response.headers = Mt.from(n.response.headers))), Promise.reject(n);
  });
}
const Xj = "1.14.0", Mf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e12, t) => {
  Mf[e12] = function(n) {
    return typeof n === e12 || "a" + (t < 1 ? "n " : " ") + e12;
  };
});
const ib = {};
Mf.transitional = function(t, r, n) {
  function i(a, o) {
    return "[Axios v" + Xj + "] Transitional option '" + a + "'" + o + (n ? ". " + n : "");
  }
  return (a, o, s) => {
    if (t === false) throw new ae(i(o, " has been removed" + (r ? " in " + r : "")), ae.ERR_DEPRECATED);
    return r && !ib[o] && (ib[o] = true, console.warn(i(o, " has been deprecated since v" + r + " and will be removed in the near future"))), t ? t(a, o, s) : true;
  };
};
Mf.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), true);
};
function iN(e12, t, r) {
  if (typeof e12 != "object") throw new ae("options must be an object", ae.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e12);
  let i = n.length;
  for (; i-- > 0; ) {
    const a = n[i], o = t[a];
    if (o) {
      const s = e12[a], l = s === void 0 || o(s, a, e12);
      if (l !== true) throw new ae("option " + a + " must be " + l, ae.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== true) throw new ae("Unknown option " + a, ae.ERR_BAD_OPTION);
  }
}
const Tu = { assertOptions: iN, validators: Mf }, Kt = Tu.validators;
let wi = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = { request: new K0(), response: new K0() };
  }
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
        const a = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = ki(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: a } = r;
    n !== void 0 && Tu.assertOptions(n, { silentJSONParsing: Kt.transitional(Kt.boolean), forcedJSONParsing: Kt.transitional(Kt.boolean), clarifyTimeoutError: Kt.transitional(Kt.boolean), legacyInterceptorReqResOrdering: Kt.transitional(Kt.boolean) }, false), i != null && (I.isFunction(i) ? r.paramsSerializer = { serialize: i } : Tu.assertOptions(i, { encode: Kt.function, serialize: Kt.function }, true)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = true), Tu.assertOptions(r, { baseUrl: Kt.spelling("baseURL"), withXsrfToken: Kt.spelling("withXSRFToken") }, true), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = a && I.merge(a.common, a[r.method]);
    a && I.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (y) => {
      delete a[y];
    }), r.headers = Mt.concat(o, a);
    const s = [];
    let l = true;
    this.interceptors.request.forEach(function(v) {
      if (typeof v.runWhen == "function" && v.runWhen(r) === false) return;
      l = l && v.synchronous;
      const m = r.transitional || fv;
      m && m.legacyInterceptorReqResOrdering ? s.unshift(v.fulfilled, v.rejected) : s.push(v.fulfilled, v.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(v) {
      u.push(v.fulfilled, v.rejected);
    });
    let f, c = 0, d;
    if (!l) {
      const y = [nb.bind(this), void 0];
      for (y.unshift(...s), y.push(...u), d = y.length, f = Promise.resolve(r); c < d; ) f = f.then(y[c++], y[c++]);
      return f;
    }
    d = s.length;
    let h = r;
    for (; c < d; ) {
      const y = s[c++], v = s[c++];
      try {
        h = y(h);
      } catch (m) {
        v.call(this, m);
        break;
      }
    }
    try {
      f = nb.call(this, h);
    } catch (y) {
      return Promise.reject(y);
    }
    for (c = 0, d = u.length; c < d; ) f = f.then(u[c++], u[c++]);
    return f;
  }
  getUri(t) {
    t = ki(this.defaults, t);
    const r = Vj(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Fj(r, t.params, t.paramsSerializer);
  }
};
I.forEach(["delete", "get", "head", "options"], function(t) {
  wi.prototype[t] = function(r, n) {
    return this.request(ki(n || {}, { method: t, url: r, data: (n || {}).data }));
  };
});
I.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(a, o, s) {
      return this.request(ki(s || {}, { method: t, headers: n ? { "Content-Type": "multipart/form-data" } : {}, url: a, data: o }));
    };
  }
  wi.prototype[t] = r(), wi.prototype[t + "Form"] = r(true);
});
let aN = class Yj {
  constructor(t) {
    if (typeof t != "function") throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners) return;
      let a = n._listeners.length;
      for (; a-- > 0; ) n._listeners[a](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let a;
      const o = new Promise((s) => {
        n.subscribe(s), a = s;
      }).then(i);
      return o.cancel = function() {
        n.unsubscribe(a);
      }, o;
    }, t(function(a, o, s) {
      n.reason || (n.reason = new kl(a, o, s), r(n.reason));
    });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  static source() {
    let t;
    return { token: new Yj(function(i) {
      t = i;
    }), cancel: t };
  }
};
function oN(e12) {
  return function(r) {
    return e12.apply(null, r);
  };
}
function sN(e12) {
  return I.isObject(e12) && e12.isAxiosError === true;
}
const Rh = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511, WebServerIsDown: 521, ConnectionTimedOut: 522, OriginIsUnreachable: 523, TimeoutOccurred: 524, SslHandshakeFailed: 525, InvalidSslCertificate: 526 };
Object.entries(Rh).forEach(([e12, t]) => {
  Rh[t] = e12;
});
function Qj(e12) {
  const t = new wi(e12), r = Tj(wi.prototype.request, t);
  return I.extend(r, wi.prototype, t, { allOwnKeys: true }), I.extend(r, t, null, { allOwnKeys: true }), r.create = function(i) {
    return Qj(ki(e12, i));
  }, r;
}
const Ue = Qj(El);
Ue.Axios = wi;
Ue.CanceledError = kl;
Ue.CancelToken = aN;
Ue.isCancel = Wj;
Ue.VERSION = Xj;
Ue.toFormData = Nf;
Ue.AxiosError = ae;
Ue.Cancel = Ue.CanceledError;
Ue.all = function(t) {
  return Promise.all(t);
};
Ue.spread = oN;
Ue.isAxiosError = sN;
Ue.mergeConfig = ki;
Ue.AxiosHeaders = Mt;
Ue.formToJSON = (e12) => Uj(I.isHTMLForm(e12) ? new FormData(e12) : e12);
Ue.getAdapter = Gj.getAdapter;
Ue.HttpStatusCode = Rh;
Ue.default = Ue;
const { Axios: kte, AxiosError: Tte, CanceledError: $te, isCancel: Cte, CancelToken: Nte, VERSION: Mte, all: Ite, Cancel: Rte, isAxiosError: Dte, spread: Lte, toFormData: Bte, AxiosHeaders: zte, HttpStatusCode: Fte, formToJSON: Ute, getAdapter: Wte, mergeConfig: Hte } = Ue, Ne = Ue.create({ baseURL: "/api", headers: { "Content-Type": "application/json" } });
Ne.interceptors.request.use((e12) => {
  const t = localStorage.getItem("token");
  return t && (e12.headers.Authorization = `Bearer ${t}`), e12;
});
Ne.interceptors.response.use((e12) => e12, (e12) => {
  var t;
  return ((t = e12.response) == null ? void 0 : t.status) === 401 && (localStorage.removeItem("token"), localStorage.removeItem("user"), window.location.href = "/login"), Promise.reject(e12);
});
const Jj = A.createContext(null);
function lN({ children: e12 }) {
  const [t, r] = A.useState(() => {
    const l = localStorage.getItem("user");
    return l ? JSON.parse(l) : null;
  }), [n, i] = A.useState(false), a = async (l, u) => {
    var f, c;
    i(true);
    try {
      const { data: d } = await Ne.post("/auth/login", { email: l, password: u });
      return localStorage.setItem("token", d.token), localStorage.setItem("user", JSON.stringify({ _id: d._id, name: d.name, email: d.email })), r({ _id: d._id, name: d.name, email: d.email }), { success: true };
    } catch (d) {
      return { success: false, message: ((c = (f = d.response) == null ? void 0 : f.data) == null ? void 0 : c.message) || "Login failed" };
    } finally {
      i(false);
    }
  }, o = async (l, u, f) => {
    var c, d;
    i(true);
    try {
      const { data: h } = await Ne.post("/auth/register", { name: l, email: u, password: f });
      return localStorage.setItem("token", h.token), localStorage.setItem("user", JSON.stringify({ _id: h._id, name: h.name, email: h.email })), r({ _id: h._id, name: h.name, email: h.email }), { success: true };
    } catch (h) {
      return { success: false, message: ((d = (c = h.response) == null ? void 0 : c.data) == null ? void 0 : d.message) || "Registration failed" };
    } finally {
      i(false);
    }
  }, s = () => {
    localStorage.removeItem("token"), localStorage.removeItem("user"), r(null);
  };
  return p.jsx(Jj.Provider, { value: { user: t, login: a, register: o, logout: s, loading: n }, children: e12 });
}
const ho = () => {
  const e12 = A.useContext(Jj);
  if (!e12) throw new Error("useAuth must be used within AuthProvider");
  return e12;
};
var uN = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
const cN = (e12) => e12.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), de = (e12, t) => {
  const r = A.forwardRef(({ color: n = "currentColor", size: i = 24, strokeWidth: a = 2, absoluteStrokeWidth: o, className: s = "", children: l, ...u }, f) => A.createElement("svg", { ref: f, ...uN, width: i, height: i, stroke: n, strokeWidth: o ? Number(a) * 24 / Number(i) : a, className: ["lucide", `lucide-${cN(e12)}`, s].join(" "), ...u }, [...t.map(([c, d]) => A.createElement(c, d)), ...Array.isArray(l) ? l : [l]]));
  return r.displayName = `${e12}`, r;
};
const Zj = de("Activity", [["path", { d: "M22 12h-4l-3 9L9 3l-3 9H2", key: "d5dnw9" }]]);
const fN = de("AlertCircle", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]]);
const dN = de("AlertTriangle", [["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z", key: "c3ski4" }], ["path", { d: "M12 9v4", key: "juzpu7" }], ["path", { d: "M12 17h.01", key: "p32p05" }]]);
const pN = de("ArrowLeft", [["path", { d: "m12 19-7-7 7-7", key: "1l729n" }], ["path", { d: "M19 12H5", key: "x3x0zl" }]]);
const hv = de("ArrowRight", [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]]);
const hN = de("BarChart3", [["path", { d: "M3 3v18h18", key: "1s2lah" }], ["path", { d: "M18 17V9", key: "2bz60n" }], ["path", { d: "M13 17V5", key: "1frdt8" }], ["path", { d: "M8 17v-3", key: "17ska0" }]]);
const eP = de("Bot", [["path", { d: "M12 8V4H8", key: "hb8ula" }], ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }], ["path", { d: "M2 14h2", key: "vft8re" }], ["path", { d: "M20 14h2", key: "4cs60a" }], ["path", { d: "M15 13v2", key: "1xurst" }], ["path", { d: "M9 13v2", key: "rq6x2g" }]]);
const $u = de("CheckCircle", [["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]);
const tP = de("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]);
const ab = de("ClipboardPaste", [["path", { d: "M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z", key: "1pp7kr" }], ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10", key: "2ik1ml" }], ["path", { d: "m17 10 4 4-4 4", key: "vp2hj1" }]]);
const mN = de("Clock", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]]);
const yN = de("CreditCard", [["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }], ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]]);
const Cu = de("FileText", [["path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }], ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }], ["line", { x1: "16", x2: "8", y1: "13", y2: "13", key: "14keom" }], ["line", { x1: "16", x2: "8", y1: "17", y2: "17", key: "17nazh" }], ["line", { x1: "10", x2: "8", y1: "9", y2: "9", key: "1a5vjj" }]]);
const vN = de("History", [["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }], ["path", { d: "M3 3v5h5", key: "1xhq8a" }], ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]]);
const gN = de("Home", [["path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "y5dka4" }], ["polyline", { points: "9 22 9 12 15 12 15 22", key: "e2us08" }]]);
const rP = de("Info", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 16v-4", key: "1dtifu" }], ["path", { d: "M12 8h.01", key: "e9boi3" }]]);
const bN = de("LayoutDashboard", [["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }], ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }], ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }], ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]]);
const xN = de("List", [["line", { x1: "8", x2: "21", y1: "6", y2: "6", key: "7ey8pc" }], ["line", { x1: "8", x2: "21", y1: "12", y2: "12", key: "rjfblc" }], ["line", { x1: "8", x2: "21", y1: "18", y2: "18", key: "c3b1m8" }], ["line", { x1: "3", x2: "3.01", y1: "6", y2: "6", key: "1g7gq3" }], ["line", { x1: "3", x2: "3.01", y1: "12", y2: "12", key: "1pjlvk" }], ["line", { x1: "3", x2: "3.01", y1: "18", y2: "18", key: "28t2mc" }]]);
const wN = de("LockKeyhole", [["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }], ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }], ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }]]);
const nP = de("Lock", [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]]);
const SN = de("LogOut", [["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }], ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }], ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]]);
const iP = de("Mail", [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]]);
const ON = de("Moon", [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]]);
const jN = de("RefreshCw", [["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }], ["path", { d: "M21 3v5h-5", key: "1q7to0" }], ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }], ["path", { d: "M8 16H3v5", key: "1cv678" }]]);
const aP = de("Repeat", [["path", { d: "m17 2 4 4-4 4", key: "nntrym" }], ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }], ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }], ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]]);
const PN = de("Save", [["path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z", key: "1owoqh" }], ["polyline", { points: "17 21 17 13 7 13 7 21", key: "1md35c" }], ["polyline", { points: "7 3 7 8 15 8", key: "8nz8an" }]]);
const Nu = de("Search", [["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]]);
const AN = de("Send", [["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }], ["path", { d: "M22 2 11 13", key: "nzbqef" }]]);
const _N = de("Sparkles", [["path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z", key: "17u4zn" }], ["path", { d: "M5 3v4", key: "bklmnn" }], ["path", { d: "M19 17v4", key: "iiml17" }], ["path", { d: "M3 5h4", key: "nem4j1" }], ["path", { d: "M17 19h4", key: "lbex7p" }]]);
const EN = de("Sun", [["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }], ["path", { d: "M12 2v2", key: "tus03m" }], ["path", { d: "M12 20v2", key: "1lh1kg" }], ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }], ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }], ["path", { d: "M2 12h2", key: "1t8f8n" }], ["path", { d: "M20 12h2", key: "1q8mjw" }], ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }], ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]]);
const oP = de("Trash2", [["path", { d: "M3 6h18", key: "d0wm0j" }], ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }], ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }], ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }], ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]]);
const sP = de("TrendingDown", [["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }], ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }]]);
const mo = de("TrendingUp", [["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }], ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]]);
const mv = de("Upload", [["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }], ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }], ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]]);
const kN = de("User", [["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }], ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]]);
const ds = de("X", [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]]), TN = [{ to: "/", icon: gN, label: "Home" }, { to: "/dashboard", icon: bN, label: "Dashboard" }, { to: "/upload", icon: mv, label: "Upload PDF" }, { to: "/transactions", icon: xN, label: "Transactions" }, { to: "/history", icon: vN, label: "History" }];
function $N({ theme: e12 = "dark", onToggleTheme: t }) {
  var o;
  const { user: r, logout: n } = ho(), i = Gn(), a = () => {
    n(), i("/login");
  };
  return p.jsxs("aside", { className: "sidebar", children: [p.jsxs("div", { className: "sidebar-logo", children: [p.jsx("div", { className: "sidebar-logo-icon", children: p.jsx(mo, { size: 18, color: "var(--accent-primary)" }) }), p.jsx("span", { className: "sidebar-logo-text", children: "Finsight" })] }), p.jsxs("nav", { className: "sidebar-nav", children: [p.jsx("p", { className: "sidebar-section-label", children: "Menu" }), TN.map(({ to: s, icon: l, label: u }) => p.jsxs(A$, { to: s, className: ({ isActive: f }) => `sidebar-link${f ? " active" : ""}`, children: [p.jsx(l, { size: 17 }), p.jsx("span", { children: u }), p.jsx(tP, { size: 14, className: "sidebar-link-arrow" })] }, s))] }), p.jsxs("div", { className: "sidebar-footer", children: [p.jsxs("div", { className: "sidebar-user", children: [p.jsx("div", { className: "sidebar-avatar", children: (o = r == null ? void 0 : r.name) == null ? void 0 : o.charAt(0).toUpperCase() }), p.jsxs("div", { className: "sidebar-user-info", children: [p.jsx("p", { className: "sidebar-user-name", children: r == null ? void 0 : r.name }), p.jsx("p", { className: "sidebar-user-email", children: r == null ? void 0 : r.email })] })] }), p.jsxs("button", { className: "sidebar-logout", onClick: a, children: [p.jsx(SN, { size: 15 }), p.jsx("span", { children: "Logout" })] }), p.jsxs("button", { className: "sidebar-theme", onClick: t, children: [e12 === "dark" ? p.jsx(EN, { size: 15 }) : p.jsx(ON, { size: 15 }), p.jsx("span", { children: e12 === "dark" ? "Light Mode" : "Dark Mode" })] })] }), p.jsx("style", { children: `
        .sidebar {
          width: var(--sidebar-width);
          height: 100vh;
          background: var(--bg-surface);
          border-right: 1px solid var(--border);
          position: fixed;
          left: 0;
          top: 0;
          display: flex;
          flex-direction: column;
          padding: 20px 12px;
          z-index: 100;
          transition: transform 0.28s ease;
        }

        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px 24px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 20px;
        }

        .sidebar-logo-icon {
          width: 34px;
          height: 34px;
          background: rgba(79,142,247,0.12);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(79,142,247,0.2);
        }

        .sidebar-logo-text {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .sidebar-section-label {
          font-size: 0.68rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          padding: 0 12px;
          margin-bottom: 6px;
        }

        .sidebar-nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: var(--radius-sm);
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.18s ease;
          position: relative;
        }

        .sidebar-link:hover {
          background: var(--bg-elevated);
          color: var(--text-primary);
        }

        .sidebar-link.active {
          background: rgba(79,142,247,0.12);
          color: var(--accent-primary);
          border: 1px solid rgba(79,142,247,0.18);
        }

        .sidebar-link-arrow {
          margin-left: auto;
          opacity: 0;
          transition: opacity 0.18s;
        }

        .sidebar-link:hover .sidebar-link-arrow,
        .sidebar-link.active .sidebar-link-arrow {
          opacity: 1;
        }

        .sidebar-footer {
          border-top: 1px solid var(--border);
          padding-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sidebar-user {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          border-radius: var(--radius-sm);
          background: var(--bg-elevated);
        }

        .sidebar-avatar {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }

        .sidebar-user-name {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .sidebar-user-email {
          font-size: 0.7rem;
          color: var(--text-muted);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .sidebar-user-info { flex: 1; min-width: 0; }

        .sidebar-logout {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 12px;
          border-radius: var(--radius-sm);
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text-muted);
          font-size: 0.8125rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.18s;
          font-family: var(--font-body);
          width: 100%;
        }

        .sidebar-logout:hover {
          background: rgba(247,95,95,0.08);
          color: var(--accent-red);
          border-color: rgba(247,95,95,0.2);
        }

        .sidebar-theme {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 12px;
          border-radius: var(--radius-sm);
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          font-size: 0.8125rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.18s;
          font-family: var(--font-body);
          width: 100%;
        }

        .sidebar-theme:hover {
          background: var(--bg-hover);
          border-color: var(--accent-primary);
          color: var(--text-primary);
        }
      ` })] });
}
const CN = [{ icon: mv, title: "Statement upload", text: "Upload a PhonePe or bank PDF statement, or paste copied statement text when a PDF is difficult to read." }, { icon: _N, title: "AI extraction", text: "Finsight reads transactions, identifies dates, merchants, credit or debit type, and prepares them for review." }, { icon: hN, title: "Visual dashboard", text: "Income, expenses, category totals, latest transactions, trends, and month comparisons are shown in one place." }, { icon: eP, title: "Finance assistant", text: "Ask questions about your spending, top merchants, categories, savings trend, and subscriptions." }], NN = ["Upload a PDF statement or paste statement text.", "Review extracted transactions and adjust categories.", "Save clean records under your secure account.", "Explore dashboards, history, subscriptions, and AI insights."];
function MN() {
  const { user: e12 } = ho(), t = e12 ? "/dashboard" : "/register", r = e12 ? "/upload" : "/login";
  return p.jsxs("div", { className: "home-page fade-in", children: [p.jsxs("header", { className: "home-nav", children: [p.jsxs(_r, { to: "/", className: "home-brand", children: [p.jsx("span", { className: "home-brand-icon", children: p.jsx(mo, { size: 20 }) }), p.jsx("span", { children: "Finsight" })] }), p.jsxs("nav", { className: "home-links", children: [p.jsx("a", { href: "#features", children: "Features" }), p.jsx("a", { href: "#workflow", children: "Workflow" }), p.jsx("a", { href: "#security", children: "Security" }), p.jsx(_r, { to: r, children: e12 ? "Upload" : "Login" }), p.jsx(_r, { to: t, className: "btn btn-primary btn-sm", children: e12 ? "Dashboard" : "Get Started" })] })] }), p.jsxs("main", { children: [p.jsxs("section", { className: "home-hero", children: [p.jsx("img", { src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=80", alt: "Financial documents and calculator on a desk", className: "home-hero-image" }), p.jsx("div", { className: "home-hero-overlay" }), p.jsxs("div", { className: "home-hero-content", children: [p.jsx("p", { className: "home-eyebrow", children: "AI-powered expense tracking" }), p.jsx("h1", { children: "Turn messy statements into clear financial insight." }), p.jsx("p", { children: "Finsight helps you upload payment or bank statements, extract transactions, categorize spending, track subscriptions, and understand your money through charts and AI insights." }), p.jsxs("div", { className: "home-hero-actions", children: [p.jsxs(_r, { to: t, className: "btn btn-primary btn-lg", children: [e12 ? "Open Dashboard" : "Create Account", " ", p.jsx(hv, { size: 17 })] }), p.jsx(_r, { to: r, className: "btn btn-secondary btn-lg", children: e12 ? "Upload Statement" : "Sign In" })] })] })] }), p.jsxs("section", { className: "home-section home-intro", children: [p.jsxs("div", { children: [p.jsx("p", { className: "home-eyebrow", children: "What it does" }), p.jsx("h2", { children: "Personal finance without manual data entry." })] }), p.jsx("p", { children: "Instead of typing every expense into a notebook or spreadsheet, upload a statement and let Finsight organize your income, expenses, merchants, categories, charts, snapshots, and AI answers under your account." })] }), p.jsxs("section", { className: "home-section", id: "features", children: [p.jsxs("div", { className: "home-section-heading", children: [p.jsx("p", { className: "home-eyebrow", children: "Core features" }), p.jsx("h2", { children: "Everything needed to review spending clearly." })] }), p.jsx("div", { className: "home-feature-grid", children: CN.map(({ icon: n, title: i, text: a }) => p.jsxs("article", { className: "home-feature-card", children: [p.jsx("span", { children: p.jsx(n, { size: 22 }) }), p.jsx("h3", { children: i }), p.jsx("p", { children: a })] }, i)) })] }), p.jsxs("section", { className: "home-section home-split", id: "workflow", children: [p.jsxs("div", { children: [p.jsx("p", { className: "home-eyebrow", children: "How it works" }), p.jsx("h2", { children: "From upload to dashboard in four simple steps." }), p.jsx("div", { className: "home-step-list", children: NN.map((n, i) => p.jsxs("div", { className: "home-step", children: [p.jsx("span", { children: i + 1 }), p.jsx("p", { children: n })] }, n)) })] }), p.jsxs("div", { className: "home-preview", "aria-label": "Finsight dashboard preview", children: [p.jsxs("div", { className: "home-preview-top", children: [p.jsx("span", {}), p.jsx("span", {}), p.jsx("span", {})] }), p.jsxs("div", { className: "home-preview-stats", children: [p.jsxs("div", { children: [p.jsx("p", { children: "Total Income" }), p.jsx("strong", { children: "INR 84,500" })] }), p.jsxs("div", { children: [p.jsx("p", { children: "Expenses" }), p.jsx("strong", { children: "INR 38,420" })] }), p.jsxs("div", { children: [p.jsx("p", { children: "Net Balance" }), p.jsx("strong", { children: "INR 46,080" })] })] }), p.jsxs("div", { className: "home-preview-chart", children: [p.jsx("span", { style: { height: "42%" } }), p.jsx("span", { style: { height: "64%" } }), p.jsx("span", { style: { height: "36%" } }), p.jsx("span", { style: { height: "78%" } }), p.jsx("span", { style: { height: "51%" } }), p.jsx("span", { style: { height: "70%" } })] }), p.jsxs("div", { className: "home-preview-list", children: [p.jsxs("p", { children: [p.jsx(Cu, { size: 14 }), " PhonePe statement extracted"] }), p.jsxs("p", { children: [p.jsx(aP, { size: 14 }), " 3 subscriptions detected"] }), p.jsxs("p", { children: [p.jsx(Nu, { size: 14 }), " Merchant history ready"] })] })] })] }), p.jsxs("section", { className: "home-section home-security", id: "security", children: [p.jsxs("div", { children: [p.jsx(wN, { size: 28 }), p.jsx("h2", { children: "Your financial records stay connected to your account." })] }), p.jsx("p", { children: "Passwords are hashed, private routes require JWT authentication, uploaded files are temporary, and each transaction or saved summary is stored with the logged-in user's ID." })] })] }), p.jsx("style", { children: `
        .home-page {
          min-height: 100vh;
          background: var(--bg-base);
          color: var(--text-primary);
        }

        .home-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 0 36px;
          background: rgba(8, 12, 20, 0.84);
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(16px);
        }

        [data-theme='light'] .home-nav {
          background: rgba(244, 247, 252, 0.86);
        }

        .home-brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--text-primary);
          text-decoration: none;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.18rem;
        }

        .home-brand-icon {
          width: 38px;
          height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          color: var(--accent-primary);
          background: rgba(79,142,247,0.12);
          border: 1px solid rgba(79,142,247,0.22);
        }

        .home-links {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .home-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .home-links a:hover {
          color: var(--text-primary);
        }

        .home-hero {
          position: relative;
          min-height: 82vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 116px 36px 64px;
        }

        .home-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .home-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(8,12,20,0.96) 0%, rgba(8,12,20,0.78) 48%, rgba(8,12,20,0.26) 100%),
            linear-gradient(0deg, rgba(8,12,20,0.82) 0%, rgba(8,12,20,0.12) 45%);
        }

        [data-theme='light'] .home-hero-overlay {
          background:
            linear-gradient(90deg, rgba(244,247,252,0.96) 0%, rgba(244,247,252,0.78) 50%, rgba(244,247,252,0.26) 100%),
            linear-gradient(0deg, rgba(244,247,252,0.82) 0%, rgba(244,247,252,0.1) 45%);
        }

        .home-hero-content {
          position: relative;
          width: min(720px, 100%);
          z-index: 1;
        }

        .home-eyebrow {
          color: var(--accent-green);
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .home-hero h1 {
          font-size: clamp(2.1rem, 4.8vw, 4.4rem);
          line-height: 1.08;
          max-width: 760px;
          margin-bottom: 22px;
          letter-spacing: 0;
        }

        .home-hero p:not(.home-eyebrow) {
          max-width: 620px;
          color: var(--text-secondary);
          font-size: 1.06rem;
        }

        .home-hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .home-section {
          padding: 72px 36px;
          max-width: 1180px;
          margin: 0 auto;
        }

        .home-intro {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 44px;
          align-items: start;
        }

        .home-section h2 {
          font-size: clamp(1.7rem, 3vw, 3rem);
          letter-spacing: 0;
          max-width: 680px;
        }

        .home-section p {
          color: var(--text-secondary);
        }

        .home-section-heading {
          margin-bottom: 28px;
        }

        .home-feature-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .home-feature-card {
          min-height: 220px;
          padding: 22px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-card);
        }

        .home-feature-card span {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          color: var(--accent-primary);
          background: rgba(79,142,247,0.12);
          border: 1px solid rgba(79,142,247,0.2);
          margin-bottom: 20px;
        }

        .home-feature-card h3 {
          font-size: 1rem;
          margin-bottom: 10px;
        }

        .home-feature-card p {
          font-size: 0.92rem;
        }

        .home-split {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 36px;
          align-items: center;
        }

        .home-step-list {
          margin-top: 28px;
          display: grid;
          gap: 12px;
        }

        .home-step {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid var(--border);
        }

        .home-step span {
          width: 32px;
          height: 32px;
          flex: 0 0 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          background: var(--bg-elevated);
          color: var(--accent-primary);
          font-family: var(--font-display);
          font-weight: 800;
        }

        .home-preview {
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-sm);
          background: var(--bg-card);
          box-shadow: var(--shadow-card);
          overflow: hidden;
        }

        .home-preview-top {
          display: flex;
          gap: 7px;
          padding: 14px 16px;
          border-bottom: 1px solid var(--border);
          background: var(--bg-elevated);
        }

        .home-preview-top span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--text-muted);
        }

        .home-preview-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          padding: 18px;
        }

        .home-preview-stats div {
          padding: 14px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          background: var(--bg-elevated);
        }

        .home-preview-stats p {
          font-size: 0.76rem;
          margin-bottom: 4px;
        }

        .home-preview-stats strong {
          font-family: var(--font-display);
          font-size: 1.04rem;
        }

        .home-preview-chart {
          height: 170px;
          display: flex;
          align-items: end;
          gap: 12px;
          padding: 18px;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .home-preview-chart span {
          flex: 1;
          min-width: 24px;
          border-radius: 6px 6px 0 0;
          background: var(--accent-primary);
        }

        .home-preview-chart span:nth-child(2n) { background: var(--accent-green); }
        .home-preview-chart span:nth-child(3n) { background: var(--accent-amber); }

        .home-preview-list {
          display: grid;
          gap: 8px;
          padding: 18px;
        }

        .home-preview-list p {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .home-security {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: center;
          border-top: 1px solid var(--border);
        }

        .home-security svg {
          color: var(--accent-green);
          margin-bottom: 16px;
        }

        @media (max-width: 900px) {
          .home-nav {
            position: sticky;
            padding: 0 16px;
          }

          .home-links a[href^="#"] {
            display: none;
          }

          .home-hero {
            min-height: 78vh;
            padding: 80px 16px 44px;
          }

          .home-section {
            padding: 52px 16px;
          }

          .home-intro,
          .home-split,
          .home-security {
            grid-template-columns: 1fr;
          }

          .home-feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 560px) {
          .home-nav {
            height: auto;
            padding: 12px 16px;
            align-items: flex-start;
          }

          .home-brand {
            padding-top: 2px;
          }

          .home-links {
            justify-content: flex-end;
            flex-wrap: wrap;
            gap: 10px;
          }

          .home-links a:not(.btn):not(:last-child) {
            display: none;
          }

          .home-hero h1 {
            font-size: 2rem;
          }

          .home-feature-grid,
          .home-preview-stats {
            grid-template-columns: 1fr;
          }

          .home-feature-card {
            min-height: auto;
          }
        }
      ` })] });
}
function IN() {
  const [e12, t] = A.useState({ email: "", password: "" }), [r, n] = A.useState(""), { login: i, loading: a } = ho(), o = Gn(), s = async (l) => {
    l.preventDefault(), n("");
    const u = await i(e12.email, e12.password);
    u.success ? o("/dashboard") : n(u.message);
  };
  return p.jsxs("div", { className: "auth-page", children: [p.jsxs("div", { className: "auth-card", children: [p.jsxs(_r, { to: "/", className: "auth-logo", children: [p.jsx("div", { className: "auth-logo-icon", children: p.jsx(mo, { size: 22, color: "#4f8ef7" }) }), p.jsx("span", { children: "Finsight" })] }), p.jsx("h1", { className: "auth-title", children: "Welcome back" }), p.jsx("p", { className: "auth-subtitle", children: "Sign in to your expense tracker" }), r && p.jsx("div", { className: "alert alert-error", children: r }), p.jsxs("form", { onSubmit: s, children: [p.jsxs("div", { className: "form-group", children: [p.jsx("label", { className: "form-label", children: "Email address" }), p.jsxs("div", { className: "input-icon-wrap", children: [p.jsx(iP, { size: 15, className: "input-icon" }), p.jsx("input", { type: "email", className: "form-input input-with-icon", placeholder: "you@example.com", value: e12.email, onChange: (l) => t({ ...e12, email: l.target.value }), required: true })] })] }), p.jsxs("div", { className: "form-group", children: [p.jsx("label", { className: "form-label", children: "Password" }), p.jsxs("div", { className: "input-icon-wrap", children: [p.jsx(nP, { size: 15, className: "input-icon" }), p.jsx("input", { type: "password", className: "form-input input-with-icon", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", value: e12.password, onChange: (l) => t({ ...e12, password: l.target.value }), required: true })] })] }), p.jsx("button", { type: "submit", className: "btn btn-primary btn-lg auth-submit", disabled: a, children: a ? p.jsx("span", { className: "loader" }) : p.jsxs(p.Fragment, { children: ["Sign In ", p.jsx(hv, { size: 16 })] }) })] }), p.jsxs("p", { className: "auth-link", children: ["Don't have an account?", " ", p.jsx(_r, { to: "/register", children: "Create one" })] })] }), p.jsx("style", { children: `
        .auth-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: var(--bg-base);
          background-image:
            radial-gradient(ellipse at 20% 50%, rgba(79,142,247,0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(124,106,247,0.06) 0%, transparent 50%);
        }
        .auth-card {
          width: 100%;
          max-width: 420px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: 40px;
          box-shadow: var(--shadow-card);
          animation: fadeInUp 0.4s ease;
        }
        .auth-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 28px;
          text-decoration: none;
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
        }
        .auth-logo-icon {
          width: 38px;
          height: 38px;
          background: rgba(79,142,247,0.12);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(79,142,247,0.2);
        }
        .auth-title {
          font-size: 1.6rem;
          margin-bottom: 6px;
        }
        .auth-subtitle {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 28px;
        }
        .input-icon-wrap { position: relative; }
        .input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          pointer-events: none;
        }
        .input-with-icon { padding-left: 38px !important; }
        .auth-submit {
          width: 100%;
          justify-content: center;
          margin-top: 4px;
        }
        .auth-link {
          text-align: center;
          margin-top: 20px;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }
        .auth-link a {
          color: var(--accent-primary);
          text-decoration: none;
          font-weight: 500;
        }
        .auth-link a:hover { text-decoration: underline; }
      ` })] });
}
function RN() {
  const [e12, t] = A.useState({ name: "", email: "", password: "" }), [r, n] = A.useState(""), { register: i, loading: a } = ho(), o = Gn(), s = async (l) => {
    if (l.preventDefault(), n(""), e12.password.length < 6) {
      n("Password must be at least 6 characters");
      return;
    }
    const u = await i(e12.name, e12.email, e12.password);
    u.success ? o("/dashboard") : n(u.message);
  };
  return p.jsxs("div", { className: "auth-page", children: [p.jsxs("div", { className: "auth-card", children: [p.jsxs(_r, { to: "/", className: "auth-logo", children: [p.jsx("div", { className: "auth-logo-icon", children: p.jsx(mo, { size: 22, color: "#4f8ef7" }) }), p.jsx("span", { children: "Finsight" })] }), p.jsx("h1", { className: "auth-title", children: "Create account" }), p.jsx("p", { className: "auth-subtitle", children: "Start tracking your expenses today" }), r && p.jsx("div", { className: "alert alert-error", children: r }), p.jsxs("form", { onSubmit: s, children: [p.jsxs("div", { className: "form-group", children: [p.jsx("label", { className: "form-label", children: "Full Name" }), p.jsxs("div", { className: "input-icon-wrap", children: [p.jsx(kN, { size: 15, className: "input-icon" }), p.jsx("input", { type: "text", className: "form-input input-with-icon", placeholder: "John Doe", value: e12.name, onChange: (l) => t({ ...e12, name: l.target.value }), required: true })] })] }), p.jsxs("div", { className: "form-group", children: [p.jsx("label", { className: "form-label", children: "Email address" }), p.jsxs("div", { className: "input-icon-wrap", children: [p.jsx(iP, { size: 15, className: "input-icon" }), p.jsx("input", { type: "email", className: "form-input input-with-icon", placeholder: "you@example.com", value: e12.email, onChange: (l) => t({ ...e12, email: l.target.value }), required: true })] })] }), p.jsxs("div", { className: "form-group", children: [p.jsx("label", { className: "form-label", children: "Password" }), p.jsxs("div", { className: "input-icon-wrap", children: [p.jsx(nP, { size: 15, className: "input-icon" }), p.jsx("input", { type: "password", className: "form-input input-with-icon", placeholder: "Min. 6 characters", value: e12.password, onChange: (l) => t({ ...e12, password: l.target.value }), required: true })] })] }), p.jsx("button", { type: "submit", className: "btn btn-primary btn-lg auth-submit", disabled: a, children: a ? p.jsx("span", { className: "loader" }) : p.jsxs(p.Fragment, { children: ["Create Account ", p.jsx(hv, { size: 16 })] }) })] }), p.jsxs("p", { className: "auth-link", children: ["Already have an account?", " ", p.jsx(_r, { to: "/login", children: "Sign in" })] })] }), p.jsx("style", { children: `
        .auth-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: var(--bg-base);
          background-image:
            radial-gradient(ellipse at 20% 50%, rgba(79,142,247,0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(124,106,247,0.06) 0%, transparent 50%);
        }
        .auth-card {
          width: 100%;
          max-width: 420px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: 40px;
          box-shadow: var(--shadow-card);
          animation: fadeInUp 0.4s ease;
        }
        .auth-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 28px;
          text-decoration: none;
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
        }
        .auth-logo-icon {
          width: 38px;
          height: 38px;
          background: rgba(79,142,247,0.12);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(79,142,247,0.2);
        }
        .auth-title { font-size: 1.6rem; margin-bottom: 6px; }
        .auth-subtitle { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 28px; }
        .input-icon-wrap { position: relative; }
        .input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          pointer-events: none;
        }
        .input-with-icon { padding-left: 38px !important; }
        .auth-submit { width: 100%; justify-content: center; margin-top: 4px; }
        .auth-link {
          text-align: center;
          margin-top: 20px;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }
        .auth-link a { color: var(--accent-primary); text-decoration: none; font-weight: 500; }
        .auth-link a:hover { text-decoration: underline; }
      ` })] });
}
function lP(e12) {
  var t, r, n = "";
  if (typeof e12 == "string" || typeof e12 == "number") n += e12;
  else if (typeof e12 == "object") if (Array.isArray(e12)) {
    var i = e12.length;
    for (t = 0; t < i; t++) e12[t] && (r = lP(e12[t])) && (n && (n += " "), n += r);
  } else for (r in e12) e12[r] && (n && (n += " "), n += r);
  return n;
}
function le() {
  for (var e12, t, r = 0, n = "", i = arguments.length; r < i; r++) (e12 = arguments[r]) && (t = lP(e12)) && (n && (n += " "), n += t);
  return n;
}
var DN = Array.isArray, It = DN, LN = typeof Rl == "object" && Rl && Rl.Object === Object && Rl, uP = LN, BN = uP, zN = typeof self == "object" && self && self.Object === Object && self, FN = BN || zN || Function("return this")(), Dr = FN, UN = Dr, WN = UN.Symbol, Tl = WN, ob = Tl, cP = Object.prototype, HN = cP.hasOwnProperty, VN = cP.toString, Bo = ob ? ob.toStringTag : void 0;
function KN(e12) {
  var t = HN.call(e12, Bo), r = e12[Bo];
  try {
    e12[Bo] = void 0;
    var n = true;
  } catch {
  }
  var i = VN.call(e12);
  return n && (t ? e12[Bo] = r : delete e12[Bo]), i;
}
var qN = KN, GN = Object.prototype, XN = GN.toString;
function YN(e12) {
  return XN.call(e12);
}
var QN = YN, sb = Tl, JN = qN, ZN = QN, eM = "[object Null]", tM = "[object Undefined]", lb = sb ? sb.toStringTag : void 0;
function rM(e12) {
  return e12 == null ? e12 === void 0 ? tM : eM : lb && lb in Object(e12) ? JN(e12) : ZN(e12);
}
var pn = rM;
function nM(e12) {
  return e12 != null && typeof e12 == "object";
}
var hn = nM, iM = pn, aM = hn, oM = "[object Symbol]";
function sM(e12) {
  return typeof e12 == "symbol" || aM(e12) && iM(e12) == oM;
}
var yo = sM, lM = It, uM = yo, cM = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, fM = /^\w*$/;
function dM(e12, t) {
  if (lM(e12)) return false;
  var r = typeof e12;
  return r == "number" || r == "symbol" || r == "boolean" || e12 == null || uM(e12) ? true : fM.test(e12) || !cM.test(e12) || t != null && e12 in Object(t);
}
var yv = dM;
function pM(e12) {
  var t = typeof e12;
  return e12 != null && (t == "object" || t == "function");
}
var Xn = pM;
const vo = be(Xn);
var hM = pn, mM = Xn, yM = "[object AsyncFunction]", vM = "[object Function]", gM = "[object GeneratorFunction]", bM = "[object Proxy]";
function xM(e12) {
  if (!mM(e12)) return false;
  var t = hM(e12);
  return t == vM || t == gM || t == yM || t == bM;
}
var vv = xM;
const ie = be(vv);
var wM = Dr, SM = wM["__core-js_shared__"], OM = SM, ap = OM, ub = function() {
  var e12 = /[^.]+$/.exec(ap && ap.keys && ap.keys.IE_PROTO || "");
  return e12 ? "Symbol(src)_1." + e12 : "";
}();
function jM(e12) {
  return !!ub && ub in e12;
}
var PM = jM, AM = Function.prototype, _M = AM.toString;
function EM(e12) {
  if (e12 != null) {
    try {
      return _M.call(e12);
    } catch {
    }
    try {
      return e12 + "";
    } catch {
    }
  }
  return "";
}
var fP = EM, kM = vv, TM = PM, $M = Xn, CM = fP, NM = /[\\^$.*+?()[\]{}|]/g, MM = /^\[object .+?Constructor\]$/, IM = Function.prototype, RM = Object.prototype, DM = IM.toString, LM = RM.hasOwnProperty, BM = RegExp("^" + DM.call(LM).replace(NM, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function zM(e12) {
  if (!$M(e12) || TM(e12)) return false;
  var t = kM(e12) ? BM : MM;
  return t.test(CM(e12));
}
var FM = zM;
function UM(e12, t) {
  return e12 == null ? void 0 : e12[t];
}
var WM = UM, HM = FM, VM = WM;
function KM(e12, t) {
  var r = VM(e12, t);
  return HM(r) ? r : void 0;
}
var Li = KM, qM = Li, GM = qM(Object, "create"), If = GM, cb = If;
function XM() {
  this.__data__ = cb ? cb(null) : {}, this.size = 0;
}
var YM = XM;
function QM(e12) {
  var t = this.has(e12) && delete this.__data__[e12];
  return this.size -= t ? 1 : 0, t;
}
var JM = QM, ZM = If, eI = "__lodash_hash_undefined__", tI = Object.prototype, rI = tI.hasOwnProperty;
function nI(e12) {
  var t = this.__data__;
  if (ZM) {
    var r = t[e12];
    return r === eI ? void 0 : r;
  }
  return rI.call(t, e12) ? t[e12] : void 0;
}
var iI = nI, aI = If, oI = Object.prototype, sI = oI.hasOwnProperty;
function lI(e12) {
  var t = this.__data__;
  return aI ? t[e12] !== void 0 : sI.call(t, e12);
}
var uI = lI, cI = If, fI = "__lodash_hash_undefined__";
function dI(e12, t) {
  var r = this.__data__;
  return this.size += this.has(e12) ? 0 : 1, r[e12] = cI && t === void 0 ? fI : t, this;
}
var pI = dI, hI = YM, mI = JM, yI = iI, vI = uI, gI = pI;
function go(e12) {
  var t = -1, r = e12 == null ? 0 : e12.length;
  for (this.clear(); ++t < r; ) {
    var n = e12[t];
    this.set(n[0], n[1]);
  }
}
go.prototype.clear = hI;
go.prototype.delete = mI;
go.prototype.get = yI;
go.prototype.has = vI;
go.prototype.set = gI;
var bI = go;
function xI() {
  this.__data__ = [], this.size = 0;
}
var wI = xI;
function SI(e12, t) {
  return e12 === t || e12 !== e12 && t !== t;
}
var gv = SI, OI = gv;
function jI(e12, t) {
  for (var r = e12.length; r--; ) if (OI(e12[r][0], t)) return r;
  return -1;
}
var Rf = jI, PI = Rf, AI = Array.prototype, _I = AI.splice;
function EI(e12) {
  var t = this.__data__, r = PI(t, e12);
  if (r < 0) return false;
  var n = t.length - 1;
  return r == n ? t.pop() : _I.call(t, r, 1), --this.size, true;
}
var kI = EI, TI = Rf;
function $I(e12) {
  var t = this.__data__, r = TI(t, e12);
  return r < 0 ? void 0 : t[r][1];
}
var CI = $I, NI = Rf;
function MI(e12) {
  return NI(this.__data__, e12) > -1;
}
var II = MI, RI = Rf;
function DI(e12, t) {
  var r = this.__data__, n = RI(r, e12);
  return n < 0 ? (++this.size, r.push([e12, t])) : r[n][1] = t, this;
}
var LI = DI, BI = wI, zI = kI, FI = CI, UI = II, WI = LI;
function bo(e12) {
  var t = -1, r = e12 == null ? 0 : e12.length;
  for (this.clear(); ++t < r; ) {
    var n = e12[t];
    this.set(n[0], n[1]);
  }
}
bo.prototype.clear = BI;
bo.prototype.delete = zI;
bo.prototype.get = FI;
bo.prototype.has = UI;
bo.prototype.set = WI;
var Df = bo, HI = Li, VI = Dr, KI = HI(VI, "Map"), bv = KI, fb = bI, qI = Df, GI = bv;
function XI() {
  this.size = 0, this.__data__ = { hash: new fb(), map: new (GI || qI)(), string: new fb() };
}
var YI = XI;
function QI(e12) {
  var t = typeof e12;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e12 !== "__proto__" : e12 === null;
}
var JI = QI, ZI = JI;
function eR(e12, t) {
  var r = e12.__data__;
  return ZI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Lf = eR, tR = Lf;
function rR(e12) {
  var t = tR(this, e12).delete(e12);
  return this.size -= t ? 1 : 0, t;
}
var nR = rR, iR = Lf;
function aR(e12) {
  return iR(this, e12).get(e12);
}
var oR = aR, sR = Lf;
function lR(e12) {
  return sR(this, e12).has(e12);
}
var uR = lR, cR = Lf;
function fR(e12, t) {
  var r = cR(this, e12), n = r.size;
  return r.set(e12, t), this.size += r.size == n ? 0 : 1, this;
}
var dR = fR, pR = YI, hR = nR, mR = oR, yR = uR, vR = dR;
function xo(e12) {
  var t = -1, r = e12 == null ? 0 : e12.length;
  for (this.clear(); ++t < r; ) {
    var n = e12[t];
    this.set(n[0], n[1]);
  }
}
xo.prototype.clear = pR;
xo.prototype.delete = hR;
xo.prototype.get = mR;
xo.prototype.has = yR;
xo.prototype.set = vR;
var xv = xo, dP = xv, gR = "Expected a function";
function wv(e12, t) {
  if (typeof e12 != "function" || t != null && typeof t != "function") throw new TypeError(gR);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i)) return a.get(i);
    var o = e12.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (wv.Cache || dP)(), r;
}
wv.Cache = dP;
var pP = wv;
const bR = be(pP);
var xR = pP, wR = 500;
function SR(e12) {
  var t = xR(e12, function(n) {
    return r.size === wR && r.clear(), n;
  }), r = t.cache;
  return t;
}
var OR = SR, jR = OR, PR = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, AR = /\\(\\)?/g, _R = jR(function(e12) {
  var t = [];
  return e12.charCodeAt(0) === 46 && t.push(""), e12.replace(PR, function(r, n, i, a) {
    t.push(i ? a.replace(AR, "$1") : n || r);
  }), t;
}), ER = _R;
function kR(e12, t) {
  for (var r = -1, n = e12 == null ? 0 : e12.length, i = Array(n); ++r < n; ) i[r] = t(e12[r], r, e12);
  return i;
}
var Sv = kR, db = Tl, TR = Sv, $R = It, CR = yo, pb = db ? db.prototype : void 0, hb = pb ? pb.toString : void 0;
function hP(e12) {
  if (typeof e12 == "string") return e12;
  if ($R(e12)) return TR(e12, hP) + "";
  if (CR(e12)) return hb ? hb.call(e12) : "";
  var t = e12 + "";
  return t == "0" && 1 / e12 == -1 / 0 ? "-0" : t;
}
var NR = hP, MR = NR;
function IR(e12) {
  return e12 == null ? "" : MR(e12);
}
var mP = IR, RR = It, DR = yv, LR = ER, BR = mP;
function zR(e12, t) {
  return RR(e12) ? e12 : DR(e12, t) ? [e12] : LR(BR(e12));
}
var yP = zR, FR = yo;
function UR(e12) {
  if (typeof e12 == "string" || FR(e12)) return e12;
  var t = e12 + "";
  return t == "0" && 1 / e12 == -1 / 0 ? "-0" : t;
}
var Bf = UR, WR = yP, HR = Bf;
function VR(e12, t) {
  t = WR(t, e12);
  for (var r = 0, n = t.length; e12 != null && r < n; ) e12 = e12[HR(t[r++])];
  return r && r == n ? e12 : void 0;
}
var Ov = VR, KR = Ov;
function qR(e12, t, r) {
  var n = e12 == null ? void 0 : KR(e12, t);
  return n === void 0 ? r : n;
}
var vP = qR;
const Ut = be(vP);
function GR(e12) {
  return e12 == null;
}
var XR = GR;
const se = be(XR);
var YR = pn, QR = It, JR = hn, ZR = "[object String]";
function eD(e12) {
  return typeof e12 == "string" || !QR(e12) && JR(e12) && YR(e12) == ZR;
}
var tD = eD;
const Ti = be(tD);
var gP = { exports: {} }, xe = {};
var jv = Symbol.for("react.element"), Pv = Symbol.for("react.portal"), zf = Symbol.for("react.fragment"), Ff = Symbol.for("react.strict_mode"), Uf = Symbol.for("react.profiler"), Wf = Symbol.for("react.provider"), Hf = Symbol.for("react.context"), rD = Symbol.for("react.server_context"), Vf = Symbol.for("react.forward_ref"), Kf = Symbol.for("react.suspense"), qf = Symbol.for("react.suspense_list"), Gf = Symbol.for("react.memo"), Xf = Symbol.for("react.lazy"), nD = Symbol.for("react.offscreen"), bP;
bP = Symbol.for("react.module.reference");
function or(e12) {
  if (typeof e12 == "object" && e12 !== null) {
    var t = e12.$$typeof;
    switch (t) {
      case jv:
        switch (e12 = e12.type, e12) {
          case zf:
          case Uf:
          case Ff:
          case Kf:
          case qf:
            return e12;
          default:
            switch (e12 = e12 && e12.$$typeof, e12) {
              case rD:
              case Hf:
              case Vf:
              case Xf:
              case Gf:
              case Wf:
                return e12;
              default:
                return t;
            }
        }
      case Pv:
        return t;
    }
  }
}
xe.ContextConsumer = Hf;
xe.ContextProvider = Wf;
xe.Element = jv;
xe.ForwardRef = Vf;
xe.Fragment = zf;
xe.Lazy = Xf;
xe.Memo = Gf;
xe.Portal = Pv;
xe.Profiler = Uf;
xe.StrictMode = Ff;
xe.Suspense = Kf;
xe.SuspenseList = qf;
xe.isAsyncMode = function() {
  return false;
};
xe.isConcurrentMode = function() {
  return false;
};
xe.isContextConsumer = function(e12) {
  return or(e12) === Hf;
};
xe.isContextProvider = function(e12) {
  return or(e12) === Wf;
};
xe.isElement = function(e12) {
  return typeof e12 == "object" && e12 !== null && e12.$$typeof === jv;
};
xe.isForwardRef = function(e12) {
  return or(e12) === Vf;
};
xe.isFragment = function(e12) {
  return or(e12) === zf;
};
xe.isLazy = function(e12) {
  return or(e12) === Xf;
};
xe.isMemo = function(e12) {
  return or(e12) === Gf;
};
xe.isPortal = function(e12) {
  return or(e12) === Pv;
};
xe.isProfiler = function(e12) {
  return or(e12) === Uf;
};
xe.isStrictMode = function(e12) {
  return or(e12) === Ff;
};
xe.isSuspense = function(e12) {
  return or(e12) === Kf;
};
xe.isSuspenseList = function(e12) {
  return or(e12) === qf;
};
xe.isValidElementType = function(e12) {
  return typeof e12 == "string" || typeof e12 == "function" || e12 === zf || e12 === Uf || e12 === Ff || e12 === Kf || e12 === qf || e12 === nD || typeof e12 == "object" && e12 !== null && (e12.$$typeof === Xf || e12.$$typeof === Gf || e12.$$typeof === Wf || e12.$$typeof === Hf || e12.$$typeof === Vf || e12.$$typeof === bP || e12.getModuleId !== void 0);
};
xe.typeOf = or;
gP.exports = xe;
var iD = gP.exports, aD = pn, oD = hn, sD = "[object Number]";
function lD(e12) {
  return typeof e12 == "number" || oD(e12) && aD(e12) == sD;
}
var xP = lD;
const uD = be(xP);
var cD = xP;
function fD(e12) {
  return cD(e12) && e12 != +e12;
}
var dD = fD;
const wo = be(dD);
var xt = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, pi = function(t) {
  return Ti(t) && t.indexOf("%") === t.length - 1;
}, q = function(t) {
  return uD(t) && !wo(t);
}, pD = function(t) {
  return se(t);
}, Je = function(t) {
  return q(t) || Ti(t);
}, hD = 0, So = function(t) {
  var r = ++hD;
  return "".concat(t || "").concat(r);
}, wt = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (!q(t) && !Ti(t)) return n;
  var a;
  if (pi(t)) {
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else a = +t;
  return wo(a) && (a = n), i && a > r && (a = r), a;
}, _n = function(t) {
  if (!t) return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, mD = function(t) {
  if (!Array.isArray(t)) return false;
  for (var r = t.length, n = {}, i = 0; i < r; i++) if (!n[t[i]]) n[t[i]] = true;
  else return true;
  return false;
}, _t = function(t, r) {
  return q(t) && q(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function lc(e12, t, r) {
  return !e12 || !e12.length ? null : e12.find(function(n) {
    return n && (typeof t == "function" ? t(n) : Ut(n, t)) === r;
  });
}
var yD = function(t, r) {
  return q(t) && q(r) ? t - r : Ti(t) && Ti(r) ? t.localeCompare(r) : t instanceof Date && r instanceof Date ? t.getTime() - r.getTime() : String(t).localeCompare(String(r));
};
function ba(e12, t) {
  for (var r in e12) if ({}.hasOwnProperty.call(e12, r) && (!{}.hasOwnProperty.call(t, r) || e12[r] !== t[r])) return false;
  for (var n in t) if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e12, n)) return false;
  return true;
}
function Dh(e12) {
  "@babel/helpers - typeof";
  return Dh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dh(e12);
}
var vD = ["viewBox", "children"], gD = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"], mb = ["points", "pathLength"], op = { svg: vD, polygon: mb, polyline: mb }, Av = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], uc = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean") return null;
  var n = t;
  if (A.isValidElement(t) && (n = t.props), !vo(n)) return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    Av.includes(a) && (i[a] = r || function(o) {
      return n[a](n, o);
    });
  }), i;
}, bD = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, $i = function(t, r, n) {
  if (!vo(t) || Dh(t) !== "object") return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    Av.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = bD(o, r, n));
  }), i;
}, xD = ["children"], wD = ["children"];
function yb(e12, t) {
  if (e12 == null) return {};
  var r = SD(e12, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e12);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e12, n) && (r[n] = e12[n]);
  }
  return r;
}
function SD(e12, t) {
  if (e12 == null) return {};
  var r = {};
  for (var n in e12) if (Object.prototype.hasOwnProperty.call(e12, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e12[n];
  }
  return r;
}
function Lh(e12) {
  "@babel/helpers - typeof";
  return Lh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lh(e12);
}
var vb = { click: "onClick", mousedown: "onMouseDown", mouseup: "onMouseUp", mouseover: "onMouseOver", mousemove: "onMouseMove", mouseout: "onMouseOut", mouseenter: "onMouseEnter", mouseleave: "onMouseLeave", touchcancel: "onTouchCancel", touchend: "onTouchEnd", touchmove: "onTouchMove", touchstart: "onTouchStart", contextmenu: "onContextMenu", dblclick: "onDoubleClick" }, Yr = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, gb = null, sp = null, _v = function e(t) {
  if (t === gb && Array.isArray(sp)) return sp;
  var r = [];
  return A.Children.forEach(t, function(n) {
    se(n) || (iD.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), sp = r, gb = t, r;
};
function rr(e12, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return Yr(i);
  }) : n = [Yr(t)], _v(e12).forEach(function(i) {
    var a = Ut(i, "type.displayName") || Ut(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function Lt(e12, t) {
  var r = rr(e12, t);
  return r && r[0];
}
var bb = function(t) {
  if (!t || !t.props) return false;
  var r = t.props, n = r.width, i = r.height;
  return !(!q(n) || n <= 0 || !q(i) || i <= 0);
}, OD = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], jD = function(t) {
  return t && t.type && Ti(t.type) && OD.indexOf(t.type) >= 0;
}, PD = function(t) {
  return t && Lh(t) === "object" && "clipDot" in t;
}, AD = function(t, r, n, i) {
  var a, o = (a = op == null ? void 0 : op[i]) !== null && a !== void 0 ? a : [];
  return r.startsWith("data-") || !ie(t) && (i && o.includes(r) || gD.includes(r)) || n && Av.includes(r);
}, ee = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean") return null;
  var i = t;
  if (A.isValidElement(t) && (i = t.props), !vo(i)) return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    var s;
    AD((s = i) === null || s === void 0 ? void 0 : s[o], o, r, n) && (a[o] = i[o]);
  }), a;
}, Bh = function e2(t, r) {
  if (t === r) return true;
  var n = A.Children.count(t);
  if (n !== A.Children.count(r)) return false;
  if (n === 0) return true;
  if (n === 1) return xb(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], o = r[i];
    if (Array.isArray(a) || Array.isArray(o)) {
      if (!e2(a, o)) return false;
    } else if (!xb(a, o)) return false;
  }
  return true;
}, xb = function(t, r) {
  if (se(t) && se(r)) return true;
  if (!se(t) && !se(r)) {
    var n = t.props || {}, i = n.children, a = yb(n, xD), o = r.props || {}, s = o.children, l = yb(o, wD);
    return i && s ? ba(a, l) && Bh(i, s) : !i && !s ? ba(a, l) : false;
  }
  return false;
}, wb = function(t, r) {
  var n = [], i = {};
  return _v(t).forEach(function(a, o) {
    if (jD(a)) n.push(a);
    else if (a) {
      var s = Yr(a.type), l = r[s] || {}, u = l.handler, f = l.once;
      if (u && (!f || !i[s])) {
        var c = u(a, s, o);
        n.push(c), i[s] = true;
      }
    }
  }), n;
}, _D = function(t) {
  var r = t && t.type;
  return r && vb[r] ? vb[r] : null;
}, ED = function(t, r) {
  return _v(r).indexOf(t);
}, kD = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function zh() {
  return zh = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, zh.apply(this, arguments);
}
function TD(e12, t) {
  if (e12 == null) return {};
  var r = $D(e12, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e12);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e12, n) && (r[n] = e12[n]);
  }
  return r;
}
function $D(e12, t) {
  if (e12 == null) return {};
  var r = {};
  for (var n in e12) if (Object.prototype.hasOwnProperty.call(e12, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e12[n];
  }
  return r;
}
function Fh(e12) {
  var t = e12.children, r = e12.width, n = e12.height, i = e12.viewBox, a = e12.className, o = e12.style, s = e12.title, l = e12.desc, u = TD(e12, kD), f = i || { width: r, height: n, x: 0, y: 0 }, c = le("recharts-surface", a);
  return E.createElement("svg", zh({}, ee(u, true, "svg"), { className: c, width: r, height: n, style: o, viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height) }), E.createElement("title", null, s), E.createElement("desc", null, l), t);
}
var CD = ["children", "className"];
function Uh() {
  return Uh = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, Uh.apply(this, arguments);
}
function ND(e12, t) {
  if (e12 == null) return {};
  var r = MD(e12, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e12);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e12, n) && (r[n] = e12[n]);
  }
  return r;
}
function MD(e12, t) {
  if (e12 == null) return {};
  var r = {};
  for (var n in e12) if (Object.prototype.hasOwnProperty.call(e12, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e12[n];
  }
  return r;
}
var pe = E.forwardRef(function(e12, t) {
  var r = e12.children, n = e12.className, i = ND(e12, CD), a = le("recharts-layer", n);
  return E.createElement("g", Uh({ className: a }, ee(i, true), { ref: t }), r);
}), br = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) i[a - 2] = arguments[a];
};
function ID(e12, t, r) {
  var n = -1, i = e12.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++n < i; ) a[n] = e12[n + t];
  return a;
}
var RD = ID, DD = RD;
function LD(e12, t, r) {
  var n = e12.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e12 : DD(e12, t, r);
}
var BD = LD, zD = "\\ud800-\\udfff", FD = "\\u0300-\\u036f", UD = "\\ufe20-\\ufe2f", WD = "\\u20d0-\\u20ff", HD = FD + UD + WD, VD = "\\ufe0e\\ufe0f", KD = "\\u200d", qD = RegExp("[" + KD + zD + HD + VD + "]");
function GD(e12) {
  return qD.test(e12);
}
var wP = GD;
function XD(e12) {
  return e12.split("");
}
var YD = XD, SP = "\\ud800-\\udfff", QD = "\\u0300-\\u036f", JD = "\\ufe20-\\ufe2f", ZD = "\\u20d0-\\u20ff", eL = QD + JD + ZD, tL = "\\ufe0e\\ufe0f", rL = "[" + SP + "]", Wh = "[" + eL + "]", Hh = "\\ud83c[\\udffb-\\udfff]", nL = "(?:" + Wh + "|" + Hh + ")", OP = "[^" + SP + "]", jP = "(?:\\ud83c[\\udde6-\\uddff]){2}", PP = "[\\ud800-\\udbff][\\udc00-\\udfff]", iL = "\\u200d", AP = nL + "?", _P = "[" + tL + "]?", aL = "(?:" + iL + "(?:" + [OP, jP, PP].join("|") + ")" + _P + AP + ")*", oL = _P + AP + aL, sL = "(?:" + [OP + Wh + "?", Wh, jP, PP, rL].join("|") + ")", lL = RegExp(Hh + "(?=" + Hh + ")|" + sL + oL, "g");
function uL(e12) {
  return e12.match(lL) || [];
}
var cL = uL, fL = YD, dL = wP, pL = cL;
function hL(e12) {
  return dL(e12) ? pL(e12) : fL(e12);
}
var mL = hL, yL = BD, vL = wP, gL = mL, bL = mP;
function xL(e12) {
  return function(t) {
    t = bL(t);
    var r = vL(t) ? gL(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? yL(r, 1).join("") : t.slice(1);
    return n[e12]() + i;
  };
}
var wL = xL, SL = wL, OL = SL("toUpperCase"), jL = OL;
const Yf = be(jL);
function Pe(e12) {
  return function() {
    return e12;
  };
}
const EP = Math.cos, cc = Math.sin, Sr = Math.sqrt, fc = Math.PI, Qf = 2 * fc, Vh = Math.PI, Kh = 2 * Vh, ai = 1e-6, PL = Kh - ai;
function kP(e12) {
  this._ += e12[0];
  for (let t = 1, r = e12.length; t < r; ++t) this._ += arguments[t] + e12[t];
}
function AL(e12) {
  let t = Math.floor(e12);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e12}`);
  if (t > 15) return kP;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i) this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class _L {
  constructor(t) {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = t == null ? kP : AL(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, l = n - t, u = i - r, f = o - t, c = s - r, d = f * f + c * c;
    if (this._x1 === null) this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > ai) if (!(Math.abs(c * l - u * f) > ai) || !a) this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let h = n - o, y = i - s, v = l * l + u * u, m = h * h + y * y, g = Math.sqrt(v), b = Math.sqrt(d), x = a * Math.tan((Vh - Math.acos((v + d - m) / (2 * g * b))) / 2), O = x / b, w = x / g;
      Math.abs(O - 1) > ai && this._append`L${t + O * f},${r + O * c}`, this._append`A${a},${a},0,0,${+(c * h > f * y)},${this._x1 = t + w * l},${this._y1 = r + w * u}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(i), l = n * Math.sin(i), u = t + s, f = r + l, c = 1 ^ o, d = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > ai || Math.abs(this._y1 - f) > ai) && this._append`L${u},${f}`, n && (d < 0 && (d = d % Kh + Kh), d > PL ? this._append`A${n},${n},0,1,${c},${t - s},${r - l}A${n},${n},0,1,${c},${this._x1 = u},${this._y1 = f}` : d > ai && this._append`A${n},${n},0,${+(d >= Vh)},${c},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Ev(e12) {
  let t = 3;
  return e12.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null) t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e12;
  }, () => new _L(t);
}
function kv(e12) {
  return typeof e12 == "object" && "length" in e12 ? e12 : Array.from(e12);
}
function TP(e12) {
  this._context = e12;
}
TP.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e12, t) {
  switch (e12 = +e12, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e12, t) : this._context.moveTo(e12, t);
      break;
    case 1:
      this._point = 2;
    default:
      this._context.lineTo(e12, t);
      break;
  }
} };
function Jf(e12) {
  return new TP(e12);
}
function $P(e12) {
  return e12[0];
}
function CP(e12) {
  return e12[1];
}
function NP(e12, t) {
  var r = Pe(true), n = null, i = Jf, a = null, o = Ev(s);
  e12 = typeof e12 == "function" ? e12 : e12 === void 0 ? $P : Pe(e12), t = typeof t == "function" ? t : t === void 0 ? CP : Pe(t);
  function s(l) {
    var u, f = (l = kv(l)).length, c, d = false, h;
    for (n == null && (a = i(h = o())), u = 0; u <= f; ++u) !(u < f && r(c = l[u], u, l)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e12(c, u, l), +t(c, u, l));
    if (h) return a = null, h + "" || null;
  }
  return s.x = function(l) {
    return arguments.length ? (e12 = typeof l == "function" ? l : Pe(+l), s) : e12;
  }, s.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Pe(+l), s) : t;
  }, s.defined = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : Pe(!!l), s) : r;
  }, s.curve = function(l) {
    return arguments.length ? (i = l, n != null && (a = i(n)), s) : i;
  }, s.context = function(l) {
    return arguments.length ? (l == null ? n = a = null : a = i(n = l), s) : n;
  }, s;
}
function tu(e12, t, r) {
  var n = null, i = Pe(true), a = null, o = Jf, s = null, l = Ev(u);
  e12 = typeof e12 == "function" ? e12 : e12 === void 0 ? $P : Pe(+e12), t = typeof t == "function" ? t : Pe(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? CP : Pe(+r);
  function u(c) {
    var d, h, y, v = (c = kv(c)).length, m, g = false, b, x = new Array(v), O = new Array(v);
    for (a == null && (s = o(b = l())), d = 0; d <= v; ++d) {
      if (!(d < v && i(m = c[d], d, c)) === g) if (g = !g) h = d, s.areaStart(), s.lineStart();
      else {
        for (s.lineEnd(), s.lineStart(), y = d - 1; y >= h; --y) s.point(x[y], O[y]);
        s.lineEnd(), s.areaEnd();
      }
      g && (x[d] = +e12(m, d, c), O[d] = +t(m, d, c), s.point(n ? +n(m, d, c) : x[d], r ? +r(m, d, c) : O[d]));
    }
    if (b) return s = null, b + "" || null;
  }
  function f() {
    return NP().defined(i).curve(o).context(a);
  }
  return u.x = function(c) {
    return arguments.length ? (e12 = typeof c == "function" ? c : Pe(+c), n = null, u) : e12;
  }, u.x0 = function(c) {
    return arguments.length ? (e12 = typeof c == "function" ? c : Pe(+c), u) : e12;
  }, u.x1 = function(c) {
    return arguments.length ? (n = c == null ? null : typeof c == "function" ? c : Pe(+c), u) : n;
  }, u.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : Pe(+c), r = null, u) : t;
  }, u.y0 = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : Pe(+c), u) : t;
  }, u.y1 = function(c) {
    return arguments.length ? (r = c == null ? null : typeof c == "function" ? c : Pe(+c), u) : r;
  }, u.lineX0 = u.lineY0 = function() {
    return f().x(e12).y(t);
  }, u.lineY1 = function() {
    return f().x(e12).y(r);
  }, u.lineX1 = function() {
    return f().x(n).y(t);
  }, u.defined = function(c) {
    return arguments.length ? (i = typeof c == "function" ? c : Pe(!!c), u) : i;
  }, u.curve = function(c) {
    return arguments.length ? (o = c, a != null && (s = o(a)), u) : o;
  }, u.context = function(c) {
    return arguments.length ? (c == null ? a = s = null : s = o(a = c), u) : a;
  }, u;
}
class MP {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function EL(e12) {
  return new MP(e12, true);
}
function kL(e12) {
  return new MP(e12, false);
}
const Tv = { draw(e12, t) {
  const r = Sr(t / fc);
  e12.moveTo(r, 0), e12.arc(0, 0, r, 0, Qf);
} }, TL = { draw(e12, t) {
  const r = Sr(t / 5) / 2;
  e12.moveTo(-3 * r, -r), e12.lineTo(-r, -r), e12.lineTo(-r, -3 * r), e12.lineTo(r, -3 * r), e12.lineTo(r, -r), e12.lineTo(3 * r, -r), e12.lineTo(3 * r, r), e12.lineTo(r, r), e12.lineTo(r, 3 * r), e12.lineTo(-r, 3 * r), e12.lineTo(-r, r), e12.lineTo(-3 * r, r), e12.closePath();
} }, IP = Sr(1 / 3), $L = IP * 2, CL = { draw(e12, t) {
  const r = Sr(t / $L), n = r * IP;
  e12.moveTo(0, -r), e12.lineTo(n, 0), e12.lineTo(0, r), e12.lineTo(-n, 0), e12.closePath();
} }, NL = { draw(e12, t) {
  const r = Sr(t), n = -r / 2;
  e12.rect(n, n, r, r);
} }, ML = 0.8908130915292852, RP = cc(fc / 10) / cc(7 * fc / 10), IL = cc(Qf / 10) * RP, RL = -EP(Qf / 10) * RP, DL = { draw(e12, t) {
  const r = Sr(t * ML), n = IL * r, i = RL * r;
  e12.moveTo(0, -r), e12.lineTo(n, i);
  for (let a = 1; a < 5; ++a) {
    const o = Qf * a / 5, s = EP(o), l = cc(o);
    e12.lineTo(l * r, -s * r), e12.lineTo(s * n - l * i, l * n + s * i);
  }
  e12.closePath();
} }, lp = Sr(3), LL = { draw(e12, t) {
  const r = -Sr(t / (lp * 3));
  e12.moveTo(0, r * 2), e12.lineTo(-lp * r, -r), e12.lineTo(lp * r, -r), e12.closePath();
} }, qt = -0.5, Gt = Sr(3) / 2, qh = 1 / Sr(12), BL = (qh / 2 + 1) * 3, zL = { draw(e12, t) {
  const r = Sr(t / BL), n = r / 2, i = r * qh, a = n, o = r * qh + r, s = -a, l = o;
  e12.moveTo(n, i), e12.lineTo(a, o), e12.lineTo(s, l), e12.lineTo(qt * n - Gt * i, Gt * n + qt * i), e12.lineTo(qt * a - Gt * o, Gt * a + qt * o), e12.lineTo(qt * s - Gt * l, Gt * s + qt * l), e12.lineTo(qt * n + Gt * i, qt * i - Gt * n), e12.lineTo(qt * a + Gt * o, qt * o - Gt * a), e12.lineTo(qt * s + Gt * l, qt * l - Gt * s), e12.closePath();
} };
function FL(e12, t) {
  let r = null, n = Ev(i);
  e12 = typeof e12 == "function" ? e12 : Pe(e12 || Tv), t = typeof t == "function" ? t : Pe(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e12.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e12 = typeof a == "function" ? a : Pe(a), i) : e12;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : Pe(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function dc() {
}
function pc(e12, t, r) {
  e12._context.bezierCurveTo((2 * e12._x0 + e12._x1) / 3, (2 * e12._y0 + e12._y1) / 3, (e12._x0 + 2 * e12._x1) / 3, (e12._y0 + 2 * e12._y1) / 3, (e12._x0 + 4 * e12._x1 + t) / 6, (e12._y0 + 4 * e12._y1 + r) / 6);
}
function DP(e12) {
  this._context = e12;
}
DP.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 3:
      pc(this, this._x1, this._y1);
    case 2:
      this._context.lineTo(this._x1, this._y1);
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e12, t) {
  switch (e12 = +e12, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e12, t) : this._context.moveTo(e12, t);
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
    default:
      pc(this, e12, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e12, this._y0 = this._y1, this._y1 = t;
} };
function UL(e12) {
  return new DP(e12);
}
function LP(e12) {
  this._context = e12;
}
LP.prototype = { areaStart: dc, areaEnd: dc, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 1: {
      this._context.moveTo(this._x2, this._y2), this._context.closePath();
      break;
    }
    case 2: {
      this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
      break;
    }
    case 3: {
      this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
      break;
    }
  }
}, point: function(e12, t) {
  switch (e12 = +e12, t = +t, this._point) {
    case 0:
      this._point = 1, this._x2 = e12, this._y2 = t;
      break;
    case 1:
      this._point = 2, this._x3 = e12, this._y3 = t;
      break;
    case 2:
      this._point = 3, this._x4 = e12, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e12) / 6, (this._y0 + 4 * this._y1 + t) / 6);
      break;
    default:
      pc(this, e12, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e12, this._y0 = this._y1, this._y1 = t;
} };
function WL(e12) {
  return new LP(e12);
}
function BP(e12) {
  this._context = e12;
}
BP.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e12, t) {
  switch (e12 = +e12, t = +t, this._point) {
    case 0:
      this._point = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3;
      var r = (this._x0 + 4 * this._x1 + e12) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
      this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
      break;
    case 3:
      this._point = 4;
    default:
      pc(this, e12, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e12, this._y0 = this._y1, this._y1 = t;
} };
function HL(e12) {
  return new BP(e12);
}
function zP(e12) {
  this._context = e12;
}
zP.prototype = { areaStart: dc, areaEnd: dc, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  this._point && this._context.closePath();
}, point: function(e12, t) {
  e12 = +e12, t = +t, this._point ? this._context.lineTo(e12, t) : (this._point = 1, this._context.moveTo(e12, t));
} };
function VL(e12) {
  return new zP(e12);
}
function Sb(e12) {
  return e12 < 0 ? -1 : 1;
}
function Ob(e12, t, r) {
  var n = e12._x1 - e12._x0, i = t - e12._x1, a = (e12._y1 - e12._y0) / (n || i < 0 && -0), o = (r - e12._y1) / (i || n < 0 && -0), s = (a * i + o * n) / (n + i);
  return (Sb(a) + Sb(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function jb(e12, t) {
  var r = e12._x1 - e12._x0;
  return r ? (3 * (e12._y1 - e12._y0) / r - t) / 2 : t;
}
function up(e12, t, r) {
  var n = e12._x0, i = e12._y0, a = e12._x1, o = e12._y1, s = (a - n) / 3;
  e12._context.bezierCurveTo(n + s, i + s * t, a - s, o - s * r, a, o);
}
function hc(e12) {
  this._context = e12;
}
hc.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 2:
      this._context.lineTo(this._x1, this._y1);
      break;
    case 3:
      up(this, this._t0, jb(this, this._t0));
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e12, t) {
  var r = NaN;
  if (e12 = +e12, t = +t, !(e12 === this._x1 && t === this._y1)) {
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e12, t) : this._context.moveTo(e12, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, up(this, jb(this, r = Ob(this, e12, t)), r);
        break;
      default:
        up(this, this._t0, r = Ob(this, e12, t));
        break;
    }
    this._x0 = this._x1, this._x1 = e12, this._y0 = this._y1, this._y1 = t, this._t0 = r;
  }
} };
function FP(e12) {
  this._context = new UP(e12);
}
(FP.prototype = Object.create(hc.prototype)).point = function(e12, t) {
  hc.prototype.point.call(this, t, e12);
};
function UP(e12) {
  this._context = e12;
}
UP.prototype = { moveTo: function(e12, t) {
  this._context.moveTo(t, e12);
}, closePath: function() {
  this._context.closePath();
}, lineTo: function(e12, t) {
  this._context.lineTo(t, e12);
}, bezierCurveTo: function(e12, t, r, n, i, a) {
  this._context.bezierCurveTo(t, e12, n, r, a, i);
} };
function KL(e12) {
  return new hc(e12);
}
function qL(e12) {
  return new FP(e12);
}
function WP(e12) {
  this._context = e12;
}
WP.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = [], this._y = [];
}, lineEnd: function() {
  var e12 = this._x, t = this._y, r = e12.length;
  if (r) if (this._line ? this._context.lineTo(e12[0], t[0]) : this._context.moveTo(e12[0], t[0]), r === 2) this._context.lineTo(e12[1], t[1]);
  else for (var n = Pb(e12), i = Pb(t), a = 0, o = 1; o < r; ++a, ++o) this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e12[o], t[o]);
  (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
}, point: function(e12, t) {
  this._x.push(+e12), this._y.push(+t);
} };
function Pb(e12) {
  var t, r = e12.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e12[0] + 2 * e12[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e12[t] + 2 * e12[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e12[r - 1] + e12[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e12[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e12[t + 1] - i[t + 1];
  return [i, a];
}
function GL(e12) {
  return new WP(e12);
}
function Zf(e12, t) {
  this._context = e12, this._t = t;
}
Zf.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = this._y = NaN, this._point = 0;
}, lineEnd: function() {
  0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
}, point: function(e12, t) {
  switch (e12 = +e12, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e12, t) : this._context.moveTo(e12, t);
      break;
    case 1:
      this._point = 2;
    default: {
      if (this._t <= 0) this._context.lineTo(this._x, t), this._context.lineTo(e12, t);
      else {
        var r = this._x * (1 - this._t) + e12 * this._t;
        this._context.lineTo(r, this._y), this._context.lineTo(r, t);
      }
      break;
    }
  }
  this._x = e12, this._y = t;
} };
function XL(e12) {
  return new Zf(e12, 0.5);
}
function YL(e12) {
  return new Zf(e12, 0);
}
function QL(e12) {
  return new Zf(e12, 1);
}
function Na(e12, t) {
  if ((o = e12.length) > 1) for (var r = 1, n, i, a = e12[t[0]], o, s = a.length; r < o; ++r) for (i = a, a = e12[t[r]], n = 0; n < s; ++n) a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Gh(e12) {
  for (var t = e12.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function JL(e12, t) {
  return e12[t];
}
function ZL(e12) {
  const t = [];
  return t.key = e12, t;
}
function e4() {
  var e12 = Pe([]), t = Gh, r = Na, n = JL;
  function i(a) {
    var o = Array.from(e12.apply(this, arguments), ZL), s, l = o.length, u = -1, f;
    for (const c of a) for (s = 0, ++u; s < l; ++s) (o[s][u] = [0, +n(c, o[s].key, u, a)]).data = c;
    for (s = 0, f = kv(t(o)); s < l; ++s) o[f[s]].index = s;
    return r(o, f), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e12 = typeof a == "function" ? a : Pe(Array.from(a)), i) : e12;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : Pe(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? Gh : typeof a == "function" ? a : Pe(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? Na, i) : r;
  }, i;
}
function t4(e12, t) {
  if ((n = e12.length) > 0) {
    for (var r, n, i = 0, a = e12[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e12[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e12[r][i][1] /= o;
    }
    Na(e12, t);
  }
}
function r4(e12, t) {
  if ((i = e12.length) > 0) {
    for (var r = 0, n = e12[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, s = 0; o < i; ++o) s += e12[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    Na(e12, t);
  }
}
function n4(e12, t) {
  if (!(!((o = e12.length) > 0) || !((a = (i = e12[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var s = 0, l = 0, u = 0; s < o; ++s) {
        for (var f = e12[t[s]], c = f[n][1] || 0, d = f[n - 1][1] || 0, h = (c - d) / 2, y = 0; y < s; ++y) {
          var v = e12[t[y]], m = v[n][1] || 0, g = v[n - 1][1] || 0;
          h += m - g;
        }
        l += c, u += h * c;
      }
      i[n - 1][1] += i[n - 1][0] = r, l && (r -= u / l);
    }
    i[n - 1][1] += i[n - 1][0] = r, Na(e12, t);
  }
}
function Bs(e12) {
  "@babel/helpers - typeof";
  return Bs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bs(e12);
}
var i4 = ["type", "size", "sizeType"];
function Xh() {
  return Xh = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, Xh.apply(this, arguments);
}
function Ab(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _b(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ab(Object(r), true).forEach(function(n) {
      a4(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : Ab(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function a4(e12, t, r) {
  return t = o4(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function o4(e12) {
  var t = s4(e12, "string");
  return Bs(t) == "symbol" ? t : t + "";
}
function s4(e12, t) {
  if (Bs(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (Bs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
function l4(e12, t) {
  if (e12 == null) return {};
  var r = u4(e12, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e12);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e12, n) && (r[n] = e12[n]);
  }
  return r;
}
function u4(e12, t) {
  if (e12 == null) return {};
  var r = {};
  for (var n in e12) if (Object.prototype.hasOwnProperty.call(e12, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e12[n];
  }
  return r;
}
var HP = { symbolCircle: Tv, symbolCross: TL, symbolDiamond: CL, symbolSquare: NL, symbolStar: DL, symbolTriangle: LL, symbolWye: zL }, c4 = Math.PI / 180, f4 = function(t) {
  var r = "symbol".concat(Yf(t));
  return HP[r] || Tv;
}, d4 = function(t, r, n) {
  if (r === "area") return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var i = 18 * c4;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, p4 = function(t, r) {
  HP["symbol".concat(Yf(t))] = r;
}, $v = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, o = t.sizeType, s = o === void 0 ? "area" : o, l = l4(t, i4), u = _b(_b({}, l), {}, { type: n, size: a, sizeType: s }), f = function() {
    var m = f4(n), g = FL().type(m).size(d4(a, s, n));
    return g();
  }, c = u.className, d = u.cx, h = u.cy, y = ee(u, true);
  return d === +d && h === +h && a === +a ? E.createElement("path", Xh({}, y, { className: le("recharts-symbols", c), transform: "translate(".concat(d, ", ").concat(h, ")"), d: f() })) : null;
};
$v.registerSymbol = p4;
function Ma(e12) {
  "@babel/helpers - typeof";
  return Ma = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ma(e12);
}
function Yh() {
  return Yh = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, Yh.apply(this, arguments);
}
function Eb(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function h4(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Eb(Object(r), true).forEach(function(n) {
      zs(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : Eb(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function m4(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function y4(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, KP(n.key), n);
  }
}
function v4(e12, t, r) {
  return t && y4(e12.prototype, t), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function g4(e12, t, r) {
  return t = mc(t), b4(e12, VP() ? Reflect.construct(t, r || [], mc(e12).constructor) : t.apply(e12, r));
}
function b4(e12, t) {
  if (t && (Ma(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return x4(e12);
}
function x4(e12) {
  if (e12 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e12;
}
function VP() {
  try {
    var e12 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (VP = function() {
    return !!e12;
  })();
}
function mc(e12) {
  return mc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, mc(e12);
}
function w4(e12, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e12.prototype = Object.create(t && t.prototype, { constructor: { value: e12, writable: true, configurable: true } }), Object.defineProperty(e12, "prototype", { writable: false }), t && Qh(e12, t);
}
function Qh(e12, t) {
  return Qh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Qh(e12, t);
}
function zs(e12, t, r) {
  return t = KP(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function KP(e12) {
  var t = S4(e12, "string");
  return Ma(t) == "symbol" ? t : t + "";
}
function S4(e12, t) {
  if (Ma(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (Ma(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e12);
}
var Xt = 32, Cv = function(e12) {
  function t() {
    return m4(this, t), g4(this, t, arguments);
  }
  return w4(t, e12), v4(t, [{ key: "renderIcon", value: function(n) {
    var i = this.props.inactiveColor, a = Xt / 2, o = Xt / 6, s = Xt / 3, l = n.inactive ? i : n.color;
    if (n.type === "plainline") return E.createElement("line", { strokeWidth: 4, fill: "none", stroke: l, strokeDasharray: n.payload.strokeDasharray, x1: 0, y1: a, x2: Xt, y2: a, className: "recharts-legend-icon" });
    if (n.type === "line") return E.createElement("path", { strokeWidth: 4, fill: "none", stroke: l, d: "M0,".concat(a, "h").concat(s, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(Xt, "M").concat(2 * s, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(s, ",").concat(a), className: "recharts-legend-icon" });
    if (n.type === "rect") return E.createElement("path", { stroke: "none", fill: l, d: "M0,".concat(Xt / 8, "h").concat(Xt, "v").concat(Xt * 3 / 4, "h").concat(-Xt, "z"), className: "recharts-legend-icon" });
    if (E.isValidElement(n.legendIcon)) {
      var u = h4({}, n);
      return delete u.legendIcon, E.cloneElement(n.legendIcon, u);
    }
    return E.createElement($v, { fill: l, cx: a, cy: a, size: Xt, sizeType: "diameter", type: n.type });
  } }, { key: "renderItems", value: function() {
    var n = this, i = this.props, a = i.payload, o = i.iconSize, s = i.layout, l = i.formatter, u = i.inactiveColor, f = { x: 0, y: 0, width: Xt, height: Xt }, c = { display: s === "horizontal" ? "inline-block" : "block", marginRight: 10 }, d = { display: "inline-block", verticalAlign: "middle", marginRight: 4 };
    return a.map(function(h, y) {
      var v = h.formatter || l, m = le(zs(zs({ "recharts-legend-item": true }, "legend-item-".concat(y), true), "inactive", h.inactive));
      if (h.type === "none") return null;
      var g = ie(h.value) ? null : h.value;
      br(!ie(h.value), `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);
      var b = h.inactive ? u : h.color;
      return E.createElement("li", Yh({ className: m, style: c, key: "legend-item-".concat(y) }, $i(n.props, h, y)), E.createElement(Fh, { width: o, height: o, viewBox: f, style: d }, n.renderIcon(h)), E.createElement("span", { className: "recharts-legend-item-text", style: { color: b } }, v ? v(g, h, y) : g));
    });
  } }, { key: "render", value: function() {
    var n = this.props, i = n.payload, a = n.layout, o = n.align;
    if (!i || !i.length) return null;
    var s = { padding: 0, margin: 0, textAlign: a === "horizontal" ? o : "left" };
    return E.createElement("ul", { className: "recharts-default-legend", style: s }, this.renderItems());
  } }]);
}(A.PureComponent);
zs(Cv, "displayName", "Legend");
zs(Cv, "defaultProps", { iconSize: 14, layout: "horizontal", align: "center", verticalAlign: "middle", inactiveColor: "#ccc" });
var O4 = Df;
function j4() {
  this.__data__ = new O4(), this.size = 0;
}
var P4 = j4;
function A4(e12) {
  var t = this.__data__, r = t.delete(e12);
  return this.size = t.size, r;
}
var _4 = A4;
function E4(e12) {
  return this.__data__.get(e12);
}
var k4 = E4;
function T4(e12) {
  return this.__data__.has(e12);
}
var $4 = T4, C4 = Df, N4 = bv, M4 = xv, I4 = 200;
function R4(e12, t) {
  var r = this.__data__;
  if (r instanceof C4) {
    var n = r.__data__;
    if (!N4 || n.length < I4 - 1) return n.push([e12, t]), this.size = ++r.size, this;
    r = this.__data__ = new M4(n);
  }
  return r.set(e12, t), this.size = r.size, this;
}
var D4 = R4, L4 = Df, B4 = P4, z4 = _4, F4 = k4, U4 = $4, W4 = D4;
function Oo(e12) {
  var t = this.__data__ = new L4(e12);
  this.size = t.size;
}
Oo.prototype.clear = B4;
Oo.prototype.delete = z4;
Oo.prototype.get = F4;
Oo.prototype.has = U4;
Oo.prototype.set = W4;
var qP = Oo, H4 = "__lodash_hash_undefined__";
function V4(e12) {
  return this.__data__.set(e12, H4), this;
}
var K4 = V4;
function q4(e12) {
  return this.__data__.has(e12);
}
var G4 = q4, X4 = xv, Y4 = K4, Q4 = G4;
function yc(e12) {
  var t = -1, r = e12 == null ? 0 : e12.length;
  for (this.__data__ = new X4(); ++t < r; ) this.add(e12[t]);
}
yc.prototype.add = yc.prototype.push = Y4;
yc.prototype.has = Q4;
var GP = yc;
function J4(e12, t) {
  for (var r = -1, n = e12 == null ? 0 : e12.length; ++r < n; ) if (t(e12[r], r, e12)) return true;
  return false;
}
var XP = J4;
function Z4(e12, t) {
  return e12.has(t);
}
var YP = Z4, e3 = GP, t3 = XP, r3 = YP, n3 = 1, i3 = 2;
function a3(e12, t, r, n, i, a) {
  var o = r & n3, s = e12.length, l = t.length;
  if (s != l && !(o && l > s)) return false;
  var u = a.get(e12), f = a.get(t);
  if (u && f) return u == t && f == e12;
  var c = -1, d = true, h = r & i3 ? new e3() : void 0;
  for (a.set(e12, t), a.set(t, e12); ++c < s; ) {
    var y = e12[c], v = t[c];
    if (n) var m = o ? n(v, y, c, t, e12, a) : n(y, v, c, e12, t, a);
    if (m !== void 0) {
      if (m) continue;
      d = false;
      break;
    }
    if (h) {
      if (!t3(t, function(g, b) {
        if (!r3(h, b) && (y === g || i(y, g, r, n, a))) return h.push(b);
      })) {
        d = false;
        break;
      }
    } else if (!(y === v || i(y, v, r, n, a))) {
      d = false;
      break;
    }
  }
  return a.delete(e12), a.delete(t), d;
}
var QP = a3, o3 = Dr, s3 = o3.Uint8Array, l3 = s3;
function u3(e12) {
  var t = -1, r = Array(e12.size);
  return e12.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var c3 = u3;
function f3(e12) {
  var t = -1, r = Array(e12.size);
  return e12.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Nv = f3, kb = Tl, Tb = l3, d3 = gv, p3 = QP, h3 = c3, m3 = Nv, y3 = 1, v3 = 2, g3 = "[object Boolean]", b3 = "[object Date]", x3 = "[object Error]", w3 = "[object Map]", S3 = "[object Number]", O3 = "[object RegExp]", j3 = "[object Set]", P3 = "[object String]", A3 = "[object Symbol]", _3 = "[object ArrayBuffer]", E3 = "[object DataView]", $b = kb ? kb.prototype : void 0, cp = $b ? $b.valueOf : void 0;
function k3(e12, t, r, n, i, a, o) {
  switch (r) {
    case E3:
      if (e12.byteLength != t.byteLength || e12.byteOffset != t.byteOffset) return false;
      e12 = e12.buffer, t = t.buffer;
    case _3:
      return !(e12.byteLength != t.byteLength || !a(new Tb(e12), new Tb(t)));
    case g3:
    case b3:
    case S3:
      return d3(+e12, +t);
    case x3:
      return e12.name == t.name && e12.message == t.message;
    case O3:
    case P3:
      return e12 == t + "";
    case w3:
      var s = h3;
    case j3:
      var l = n & y3;
      if (s || (s = m3), e12.size != t.size && !l) return false;
      var u = o.get(e12);
      if (u) return u == t;
      n |= v3, o.set(e12, t);
      var f = p3(s(e12), s(t), n, i, a, o);
      return o.delete(e12), f;
    case A3:
      if (cp) return cp.call(e12) == cp.call(t);
  }
  return false;
}
var T3 = k3;
function $3(e12, t) {
  for (var r = -1, n = t.length, i = e12.length; ++r < n; ) e12[i + r] = t[r];
  return e12;
}
var JP = $3, C3 = JP, N3 = It;
function M3(e12, t, r) {
  var n = t(e12);
  return N3(e12) ? n : C3(n, r(e12));
}
var I3 = M3;
function R3(e12, t) {
  for (var r = -1, n = e12 == null ? 0 : e12.length, i = 0, a = []; ++r < n; ) {
    var o = e12[r];
    t(o, r, e12) && (a[i++] = o);
  }
  return a;
}
var D3 = R3;
function L3() {
  return [];
}
var B3 = L3, z3 = D3, F3 = B3, U3 = Object.prototype, W3 = U3.propertyIsEnumerable, Cb = Object.getOwnPropertySymbols, H3 = Cb ? function(e12) {
  return e12 == null ? [] : (e12 = Object(e12), z3(Cb(e12), function(t) {
    return W3.call(e12, t);
  }));
} : F3, V3 = H3;
function K3(e12, t) {
  for (var r = -1, n = Array(e12); ++r < e12; ) n[r] = t(r);
  return n;
}
var q3 = K3, G3 = pn, X3 = hn, Y3 = "[object Arguments]";
function Q3(e12) {
  return X3(e12) && G3(e12) == Y3;
}
var J3 = Q3, Nb = J3, Z3 = hn, ZP = Object.prototype, eB = ZP.hasOwnProperty, tB = ZP.propertyIsEnumerable, rB = Nb(/* @__PURE__ */ function() {
  return arguments;
}()) ? Nb : function(e12) {
  return Z3(e12) && eB.call(e12, "callee") && !tB.call(e12, "callee");
}, Mv = rB, vc = { exports: {} };
function nB() {
  return false;
}
var iB = nB;
vc.exports;
(function(e12, t) {
  var r = Dr, n = iB, i = t && !t.nodeType && t, a = i && true && e12 && !e12.nodeType && e12, o = a && a.exports === i, s = o ? r.Buffer : void 0, l = s ? s.isBuffer : void 0, u = l || n;
  e12.exports = u;
})(vc, vc.exports);
var eA = vc.exports, aB = 9007199254740991, oB = /^(?:0|[1-9]\d*)$/;
function sB(e12, t) {
  var r = typeof e12;
  return t = t ?? aB, !!t && (r == "number" || r != "symbol" && oB.test(e12)) && e12 > -1 && e12 % 1 == 0 && e12 < t;
}
var Iv = sB, lB = 9007199254740991;
function uB(e12) {
  return typeof e12 == "number" && e12 > -1 && e12 % 1 == 0 && e12 <= lB;
}
var Rv = uB, cB = pn, fB = Rv, dB = hn, pB = "[object Arguments]", hB = "[object Array]", mB = "[object Boolean]", yB = "[object Date]", vB = "[object Error]", gB = "[object Function]", bB = "[object Map]", xB = "[object Number]", wB = "[object Object]", SB = "[object RegExp]", OB = "[object Set]", jB = "[object String]", PB = "[object WeakMap]", AB = "[object ArrayBuffer]", _B = "[object DataView]", EB = "[object Float32Array]", kB = "[object Float64Array]", TB = "[object Int8Array]", $B = "[object Int16Array]", CB = "[object Int32Array]", NB = "[object Uint8Array]", MB = "[object Uint8ClampedArray]", IB = "[object Uint16Array]", RB = "[object Uint32Array]", ke = {};
ke[EB] = ke[kB] = ke[TB] = ke[$B] = ke[CB] = ke[NB] = ke[MB] = ke[IB] = ke[RB] = true;
ke[pB] = ke[hB] = ke[AB] = ke[mB] = ke[_B] = ke[yB] = ke[vB] = ke[gB] = ke[bB] = ke[xB] = ke[wB] = ke[SB] = ke[OB] = ke[jB] = ke[PB] = false;
function DB(e12) {
  return dB(e12) && fB(e12.length) && !!ke[cB(e12)];
}
var LB = DB;
function BB(e12) {
  return function(t) {
    return e12(t);
  };
}
var tA = BB, gc = { exports: {} };
gc.exports;
(function(e12, t) {
  var r = uP, n = t && !t.nodeType && t, i = n && true && e12 && !e12.nodeType && e12, a = i && i.exports === n, o = a && r.process, s = function() {
    try {
      var l = i && i.require && i.require("util").types;
      return l || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e12.exports = s;
})(gc, gc.exports);
var zB = gc.exports, FB = LB, UB = tA, Mb = zB, Ib = Mb && Mb.isTypedArray, WB = Ib ? UB(Ib) : FB, rA = WB, HB = q3, VB = Mv, KB = It, qB = eA, GB = Iv, XB = rA, YB = Object.prototype, QB = YB.hasOwnProperty;
function JB(e12, t) {
  var r = KB(e12), n = !r && VB(e12), i = !r && !n && qB(e12), a = !r && !n && !i && XB(e12), o = r || n || i || a, s = o ? HB(e12.length, String) : [], l = s.length;
  for (var u in e12) (t || QB.call(e12, u)) && !(o && (u == "length" || i && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || GB(u, l))) && s.push(u);
  return s;
}
var ZB = JB, ez = Object.prototype;
function tz(e12) {
  var t = e12 && e12.constructor, r = typeof t == "function" && t.prototype || ez;
  return e12 === r;
}
var rz = tz;
function nz(e12, t) {
  return function(r) {
    return e12(t(r));
  };
}
var nA = nz, iz = nA, az = iz(Object.keys, Object), oz = az, sz = rz, lz = oz, uz = Object.prototype, cz = uz.hasOwnProperty;
function fz(e12) {
  if (!sz(e12)) return lz(e12);
  var t = [];
  for (var r in Object(e12)) cz.call(e12, r) && r != "constructor" && t.push(r);
  return t;
}
var dz = fz, pz = vv, hz = Rv;
function mz(e12) {
  return e12 != null && hz(e12.length) && !pz(e12);
}
var $l = mz, yz = ZB, vz = dz, gz = $l;
function bz(e12) {
  return gz(e12) ? yz(e12) : vz(e12);
}
var ed = bz, xz = I3, wz = V3, Sz = ed;
function Oz(e12) {
  return xz(e12, Sz, wz);
}
var jz = Oz, Rb = jz, Pz = 1, Az = Object.prototype, _z = Az.hasOwnProperty;
function Ez(e12, t, r, n, i, a) {
  var o = r & Pz, s = Rb(e12), l = s.length, u = Rb(t), f = u.length;
  if (l != f && !o) return false;
  for (var c = l; c--; ) {
    var d = s[c];
    if (!(o ? d in t : _z.call(t, d))) return false;
  }
  var h = a.get(e12), y = a.get(t);
  if (h && y) return h == t && y == e12;
  var v = true;
  a.set(e12, t), a.set(t, e12);
  for (var m = o; ++c < l; ) {
    d = s[c];
    var g = e12[d], b = t[d];
    if (n) var x = o ? n(b, g, d, t, e12, a) : n(g, b, d, e12, t, a);
    if (!(x === void 0 ? g === b || i(g, b, r, n, a) : x)) {
      v = false;
      break;
    }
    m || (m = d == "constructor");
  }
  if (v && !m) {
    var O = e12.constructor, w = t.constructor;
    O != w && "constructor" in e12 && "constructor" in t && !(typeof O == "function" && O instanceof O && typeof w == "function" && w instanceof w) && (v = false);
  }
  return a.delete(e12), a.delete(t), v;
}
var kz = Ez, Tz = Li, $z = Dr, Cz = Tz($z, "DataView"), Nz = Cz, Mz = Li, Iz = Dr, Rz = Mz(Iz, "Promise"), Dz = Rz, Lz = Li, Bz = Dr, zz = Lz(Bz, "Set"), iA = zz, Fz = Li, Uz = Dr, Wz = Fz(Uz, "WeakMap"), Hz = Wz, Jh = Nz, Zh = bv, em = Dz, tm = iA, rm = Hz, aA = pn, jo = fP, Db = "[object Map]", Vz = "[object Object]", Lb = "[object Promise]", Bb = "[object Set]", zb = "[object WeakMap]", Fb = "[object DataView]", Kz = jo(Jh), qz = jo(Zh), Gz = jo(em), Xz = jo(tm), Yz = jo(rm), oi = aA;
(Jh && oi(new Jh(new ArrayBuffer(1))) != Fb || Zh && oi(new Zh()) != Db || em && oi(em.resolve()) != Lb || tm && oi(new tm()) != Bb || rm && oi(new rm()) != zb) && (oi = function(e12) {
  var t = aA(e12), r = t == Vz ? e12.constructor : void 0, n = r ? jo(r) : "";
  if (n) switch (n) {
    case Kz:
      return Fb;
    case qz:
      return Db;
    case Gz:
      return Lb;
    case Xz:
      return Bb;
    case Yz:
      return zb;
  }
  return t;
});
var Qz = oi, fp = qP, Jz = QP, Zz = T3, e8 = kz, Ub = Qz, Wb = It, Hb = eA, t8 = rA, r8 = 1, Vb = "[object Arguments]", Kb = "[object Array]", ru = "[object Object]", n8 = Object.prototype, qb = n8.hasOwnProperty;
function i8(e12, t, r, n, i, a) {
  var o = Wb(e12), s = Wb(t), l = o ? Kb : Ub(e12), u = s ? Kb : Ub(t);
  l = l == Vb ? ru : l, u = u == Vb ? ru : u;
  var f = l == ru, c = u == ru, d = l == u;
  if (d && Hb(e12)) {
    if (!Hb(t)) return false;
    o = true, f = false;
  }
  if (d && !f) return a || (a = new fp()), o || t8(e12) ? Jz(e12, t, r, n, i, a) : Zz(e12, t, l, r, n, i, a);
  if (!(r & r8)) {
    var h = f && qb.call(e12, "__wrapped__"), y = c && qb.call(t, "__wrapped__");
    if (h || y) {
      var v = h ? e12.value() : e12, m = y ? t.value() : t;
      return a || (a = new fp()), i(v, m, r, n, a);
    }
  }
  return d ? (a || (a = new fp()), e8(e12, t, r, n, i, a)) : false;
}
var a8 = i8, o8 = a8, Gb = hn;
function oA(e12, t, r, n, i) {
  return e12 === t ? true : e12 == null || t == null || !Gb(e12) && !Gb(t) ? e12 !== e12 && t !== t : o8(e12, t, r, n, oA, i);
}
var Dv = oA, s8 = qP, l8 = Dv, u8 = 1, c8 = 2;
function f8(e12, t, r, n) {
  var i = r.length, a = i, o = !n;
  if (e12 == null) return !a;
  for (e12 = Object(e12); i--; ) {
    var s = r[i];
    if (o && s[2] ? s[1] !== e12[s[0]] : !(s[0] in e12)) return false;
  }
  for (; ++i < a; ) {
    s = r[i];
    var l = s[0], u = e12[l], f = s[1];
    if (o && s[2]) {
      if (u === void 0 && !(l in e12)) return false;
    } else {
      var c = new s8();
      if (n) var d = n(u, f, l, e12, t, c);
      if (!(d === void 0 ? l8(f, u, u8 | c8, n, c) : d)) return false;
    }
  }
  return true;
}
var d8 = f8, p8 = Xn;
function h8(e12) {
  return e12 === e12 && !p8(e12);
}
var sA = h8, m8 = sA, y8 = ed;
function v8(e12) {
  for (var t = y8(e12), r = t.length; r--; ) {
    var n = t[r], i = e12[n];
    t[r] = [n, i, m8(i)];
  }
  return t;
}
var g8 = v8;
function b8(e12, t) {
  return function(r) {
    return r == null ? false : r[e12] === t && (t !== void 0 || e12 in Object(r));
  };
}
var lA = b8, x8 = d8, w8 = g8, S8 = lA;
function O8(e12) {
  var t = w8(e12);
  return t.length == 1 && t[0][2] ? S8(t[0][0], t[0][1]) : function(r) {
    return r === e12 || x8(r, e12, t);
  };
}
var j8 = O8;
function P8(e12, t) {
  return e12 != null && t in Object(e12);
}
var A8 = P8, _8 = yP, E8 = Mv, k8 = It, T8 = Iv, $8 = Rv, C8 = Bf;
function N8(e12, t, r) {
  t = _8(t, e12);
  for (var n = -1, i = t.length, a = false; ++n < i; ) {
    var o = C8(t[n]);
    if (!(a = e12 != null && r(e12, o))) break;
    e12 = e12[o];
  }
  return a || ++n != i ? a : (i = e12 == null ? 0 : e12.length, !!i && $8(i) && T8(o, i) && (k8(e12) || E8(e12)));
}
var M8 = N8, I8 = A8, R8 = M8;
function D8(e12, t) {
  return e12 != null && R8(e12, t, I8);
}
var L8 = D8, B8 = Dv, z8 = vP, F8 = L8, U8 = yv, W8 = sA, H8 = lA, V8 = Bf, K8 = 1, q8 = 2;
function G8(e12, t) {
  return U8(e12) && W8(t) ? H8(V8(e12), t) : function(r) {
    var n = z8(r, e12);
    return n === void 0 && n === t ? F8(r, e12) : B8(t, n, K8 | q8);
  };
}
var X8 = G8;
function Y8(e12) {
  return e12;
}
var Po = Y8;
function Q8(e12) {
  return function(t) {
    return t == null ? void 0 : t[e12];
  };
}
var J8 = Q8, Z8 = Ov;
function eF(e12) {
  return function(t) {
    return Z8(t, e12);
  };
}
var tF = eF, rF = J8, nF = tF, iF = yv, aF = Bf;
function oF(e12) {
  return iF(e12) ? rF(aF(e12)) : nF(e12);
}
var sF = oF, lF = j8, uF = X8, cF = Po, fF = It, dF = sF;
function pF(e12) {
  return typeof e12 == "function" ? e12 : e12 == null ? cF : typeof e12 == "object" ? fF(e12) ? uF(e12[0], e12[1]) : lF(e12) : dF(e12);
}
var Lr = pF;
function hF(e12, t, r, n) {
  for (var i = e12.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; ) if (t(e12[a], a, e12)) return a;
  return -1;
}
var uA = hF;
function mF(e12) {
  return e12 !== e12;
}
var yF = mF;
function vF(e12, t, r) {
  for (var n = r - 1, i = e12.length; ++n < i; ) if (e12[n] === t) return n;
  return -1;
}
var gF = vF, bF = uA, xF = yF, wF = gF;
function SF(e12, t, r) {
  return t === t ? wF(e12, t, r) : bF(e12, xF, r);
}
var OF = SF, jF = OF;
function PF(e12, t) {
  var r = e12 == null ? 0 : e12.length;
  return !!r && jF(e12, t, 0) > -1;
}
var AF = PF;
function _F(e12, t, r) {
  for (var n = -1, i = e12 == null ? 0 : e12.length; ++n < i; ) if (r(t, e12[n])) return true;
  return false;
}
var EF = _F;
function kF() {
}
var TF = kF, dp = iA, $F = TF, CF = Nv, NF = 1 / 0, MF = dp && 1 / CF(new dp([, -0]))[1] == NF ? function(e12) {
  return new dp(e12);
} : $F, IF = MF, RF = GP, DF = AF, LF = EF, BF = YP, zF = IF, FF = Nv, UF = 200;
function WF(e12, t, r) {
  var n = -1, i = DF, a = e12.length, o = true, s = [], l = s;
  if (r) o = false, i = LF;
  else if (a >= UF) {
    var u = t ? null : zF(e12);
    if (u) return FF(u);
    o = false, i = BF, l = new RF();
  } else l = t ? [] : s;
  e: for (; ++n < a; ) {
    var f = e12[n], c = t ? t(f) : f;
    if (f = r || f !== 0 ? f : 0, o && c === c) {
      for (var d = l.length; d--; ) if (l[d] === c) continue e;
      t && l.push(c), s.push(f);
    } else i(l, c, r) || (l !== s && l.push(c), s.push(f));
  }
  return s;
}
var HF = WF, VF = Lr, KF = HF;
function qF(e12, t) {
  return e12 && e12.length ? KF(e12, VF(t)) : [];
}
var GF = qF;
const Xb = be(GF);
function cA(e12, t, r) {
  return t === true ? Xb(e12, r) : ie(t) ? Xb(e12, t) : e12;
}
function Ia(e12) {
  "@babel/helpers - typeof";
  return Ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ia(e12);
}
var XF = ["ref"];
function Yb(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zr(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yb(Object(r), true).forEach(function(n) {
      td(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : Yb(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function YF(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Qb(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, dA(n.key), n);
  }
}
function QF(e12, t, r) {
  return t && Qb(e12.prototype, t), r && Qb(e12, r), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function JF(e12, t, r) {
  return t = bc(t), ZF(e12, fA() ? Reflect.construct(t, r || [], bc(e12).constructor) : t.apply(e12, r));
}
function ZF(e12, t) {
  if (t && (Ia(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return e5(e12);
}
function e5(e12) {
  if (e12 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e12;
}
function fA() {
  try {
    var e12 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (fA = function() {
    return !!e12;
  })();
}
function bc(e12) {
  return bc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, bc(e12);
}
function t5(e12, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e12.prototype = Object.create(t && t.prototype, { constructor: { value: e12, writable: true, configurable: true } }), Object.defineProperty(e12, "prototype", { writable: false }), t && nm(e12, t);
}
function nm(e12, t) {
  return nm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, nm(e12, t);
}
function td(e12, t, r) {
  return t = dA(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function dA(e12) {
  var t = r5(e12, "string");
  return Ia(t) == "symbol" ? t : t + "";
}
function r5(e12, t) {
  if (Ia(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (Ia(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e12);
}
function n5(e12, t) {
  if (e12 == null) return {};
  var r = i5(e12, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e12);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e12, n) && (r[n] = e12[n]);
  }
  return r;
}
function i5(e12, t) {
  if (e12 == null) return {};
  var r = {};
  for (var n in e12) if (Object.prototype.hasOwnProperty.call(e12, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e12[n];
  }
  return r;
}
function a5(e12) {
  return e12.value;
}
function o5(e12, t) {
  if (E.isValidElement(e12)) return E.cloneElement(e12, t);
  if (typeof e12 == "function") return E.createElement(e12, t);
  t.ref;
  var r = n5(t, XF);
  return E.createElement(Cv, r);
}
var Jb = 1, Qr = function(e12) {
  function t() {
    var r;
    YF(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = JF(this, t, [].concat(i)), td(r, "lastBoundingBox", { width: -1, height: -1 }), r;
  }
  return t5(t, e12), QF(t, [{ key: "componentDidMount", value: function() {
    this.updateBBox();
  } }, { key: "componentDidUpdate", value: function() {
    this.updateBBox();
  } }, { key: "getBBox", value: function() {
    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
      var n = this.wrapperNode.getBoundingClientRect();
      return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
    }
    return null;
  } }, { key: "updateBBox", value: function() {
    var n = this.props.onBBoxUpdate, i = this.getBBox();
    i ? (Math.abs(i.width - this.lastBoundingBox.width) > Jb || Math.abs(i.height - this.lastBoundingBox.height) > Jb) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
  } }, { key: "getBBoxSnapshot", value: function() {
    return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? zr({}, this.lastBoundingBox) : { width: 0, height: 0 };
  } }, { key: "getDefaultPosition", value: function(n) {
    var i = this.props, a = i.layout, o = i.align, s = i.verticalAlign, l = i.margin, u = i.chartWidth, f = i.chartHeight, c, d;
    if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null)) if (o === "center" && a === "vertical") {
      var h = this.getBBoxSnapshot();
      c = { left: ((u || 0) - h.width) / 2 };
    } else c = o === "right" ? { right: l && l.right || 0 } : { left: l && l.left || 0 };
    if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null)) if (s === "middle") {
      var y = this.getBBoxSnapshot();
      d = { top: ((f || 0) - y.height) / 2 };
    } else d = s === "bottom" ? { bottom: l && l.bottom || 0 } : { top: l && l.top || 0 };
    return zr(zr({}, c), d);
  } }, { key: "render", value: function() {
    var n = this, i = this.props, a = i.content, o = i.width, s = i.height, l = i.wrapperStyle, u = i.payloadUniqBy, f = i.payload, c = zr(zr({ position: "absolute", width: o || "auto", height: s || "auto" }, this.getDefaultPosition(l)), l);
    return E.createElement("div", { className: "recharts-legend-wrapper", style: c, ref: function(h) {
      n.wrapperNode = h;
    } }, o5(a, zr(zr({}, this.props), {}, { payload: cA(f, u, a5) })));
  } }], [{ key: "getWithHeight", value: function(n, i) {
    var a = zr(zr({}, this.defaultProps), n.props), o = a.layout;
    return o === "vertical" && q(n.props.height) ? { height: n.props.height } : o === "horizontal" ? { width: n.props.width || i } : null;
  } }]);
}(A.PureComponent);
td(Qr, "displayName", "Legend");
td(Qr, "defaultProps", { iconSize: 14, layout: "horizontal", align: "center", verticalAlign: "bottom" });
var Zb = Tl, s5 = Mv, l5 = It, ex = Zb ? Zb.isConcatSpreadable : void 0;
function u5(e12) {
  return l5(e12) || s5(e12) || !!(ex && e12 && e12[ex]);
}
var c5 = u5, f5 = JP, d5 = c5;
function pA(e12, t, r, n, i) {
  var a = -1, o = e12.length;
  for (r || (r = d5), i || (i = []); ++a < o; ) {
    var s = e12[a];
    t > 0 && r(s) ? t > 1 ? pA(s, t - 1, r, n, i) : f5(i, s) : n || (i[i.length] = s);
  }
  return i;
}
var hA = pA;
function p5(e12) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), s = o.length; s--; ) {
      var l = o[e12 ? s : ++i];
      if (r(a[l], l, a) === false) break;
    }
    return t;
  };
}
var h5 = p5, m5 = h5, y5 = m5(), v5 = y5, g5 = v5, b5 = ed;
function x5(e12, t) {
  return e12 && g5(e12, t, b5);
}
var mA = x5, w5 = $l;
function S5(e12, t) {
  return function(r, n) {
    if (r == null) return r;
    if (!w5(r)) return e12(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== false; ) ;
    return r;
  };
}
var O5 = S5, j5 = mA, P5 = O5, A5 = P5(j5), Lv = A5, _5 = Lv, E5 = $l;
function k5(e12, t) {
  var r = -1, n = E5(e12) ? Array(e12.length) : [];
  return _5(e12, function(i, a, o) {
    n[++r] = t(i, a, o);
  }), n;
}
var yA = k5;
function T5(e12, t) {
  var r = e12.length;
  for (e12.sort(t); r--; ) e12[r] = e12[r].value;
  return e12;
}
var $5 = T5, tx = yo;
function C5(e12, t) {
  if (e12 !== t) {
    var r = e12 !== void 0, n = e12 === null, i = e12 === e12, a = tx(e12), o = t !== void 0, s = t === null, l = t === t, u = tx(t);
    if (!s && !u && !a && e12 > t || a && o && l && !s && !u || n && o && l || !r && l || !i) return 1;
    if (!n && !a && !u && e12 < t || u && r && i && !n && !a || s && r && i || !o && i || !l) return -1;
  }
  return 0;
}
var N5 = C5, M5 = N5;
function I5(e12, t, r) {
  for (var n = -1, i = e12.criteria, a = t.criteria, o = i.length, s = r.length; ++n < o; ) {
    var l = M5(i[n], a[n]);
    if (l) {
      if (n >= s) return l;
      var u = r[n];
      return l * (u == "desc" ? -1 : 1);
    }
  }
  return e12.index - t.index;
}
var R5 = I5, pp = Sv, D5 = Ov, L5 = Lr, B5 = yA, z5 = $5, F5 = tA, U5 = R5, W5 = Po, H5 = It;
function V5(e12, t, r) {
  t.length ? t = pp(t, function(a) {
    return H5(a) ? function(o) {
      return D5(o, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [W5];
  var n = -1;
  t = pp(t, F5(L5));
  var i = B5(e12, function(a, o, s) {
    var l = pp(t, function(u) {
      return u(a);
    });
    return { criteria: l, index: ++n, value: a };
  });
  return z5(i, function(a, o) {
    return U5(a, o, r);
  });
}
var K5 = V5;
function q5(e12, t, r) {
  switch (r.length) {
    case 0:
      return e12.call(t);
    case 1:
      return e12.call(t, r[0]);
    case 2:
      return e12.call(t, r[0], r[1]);
    case 3:
      return e12.call(t, r[0], r[1], r[2]);
  }
  return e12.apply(t, r);
}
var G5 = q5, X5 = G5, rx = Math.max;
function Y5(e12, t, r) {
  return t = rx(t === void 0 ? e12.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = rx(n.length - t, 0), o = Array(a); ++i < a; ) o[i] = n[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
    return s[t] = r(o), X5(e12, this, s);
  };
}
var Q5 = Y5;
function J5(e12) {
  return function() {
    return e12;
  };
}
var Z5 = J5, e6 = Li, t6 = function() {
  try {
    var e12 = e6(Object, "defineProperty");
    return e12({}, "", {}), e12;
  } catch {
  }
}(), vA = t6, r6 = Z5, nx = vA, n6 = Po, i6 = nx ? function(e12, t) {
  return nx(e12, "toString", { configurable: true, enumerable: false, value: r6(t), writable: true });
} : n6, a6 = i6, o6 = 800, s6 = 16, l6 = Date.now;
function u6(e12) {
  var t = 0, r = 0;
  return function() {
    var n = l6(), i = s6 - (n - r);
    if (r = n, i > 0) {
      if (++t >= o6) return arguments[0];
    } else t = 0;
    return e12.apply(void 0, arguments);
  };
}
var c6 = u6, f6 = a6, d6 = c6, p6 = d6(f6), h6 = p6, m6 = Po, y6 = Q5, v6 = h6;
function g6(e12, t) {
  return v6(y6(e12, t, m6), e12 + "");
}
var b6 = g6, x6 = gv, w6 = $l, S6 = Iv, O6 = Xn;
function j6(e12, t, r) {
  if (!O6(r)) return false;
  var n = typeof t;
  return (n == "number" ? w6(r) && S6(t, r.length) : n == "string" && t in r) ? x6(r[t], e12) : false;
}
var rd = j6, P6 = hA, A6 = K5, _6 = b6, ix = rd, E6 = _6(function(e12, t) {
  if (e12 == null) return [];
  var r = t.length;
  return r > 1 && ix(e12, t[0], t[1]) ? t = [] : r > 2 && ix(t[0], t[1], t[2]) && (t = [t[0]]), A6(e12, P6(t, 1), []);
}), k6 = E6;
const Bv = be(k6);
function Fs(e12) {
  "@babel/helpers - typeof";
  return Fs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fs(e12);
}
function im() {
  return im = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, im.apply(this, arguments);
}
function T6(e12, t) {
  return M6(e12) || N6(e12, t) || C6(e12, t) || $6();
}
function $6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function C6(e12, t) {
  if (e12) {
    if (typeof e12 == "string") return ax(e12, t);
    var r = Object.prototype.toString.call(e12).slice(8, -1);
    if (r === "Object" && e12.constructor && (r = e12.constructor.name), r === "Map" || r === "Set") return Array.from(e12);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ax(e12, t);
  }
}
function ax(e12, t) {
  (t == null || t > e12.length) && (t = e12.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e12[r];
  return n;
}
function N6(e12, t) {
  var r = e12 == null ? null : typeof Symbol < "u" && e12[Symbol.iterator] || e12["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = true, u = false;
    try {
      if (a = (r = r.call(e12)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = true) ;
    } catch (f) {
      u = true, i = f;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function M6(e12) {
  if (Array.isArray(e12)) return e12;
}
function ox(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hp(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ox(Object(r), true).forEach(function(n) {
      I6(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : ox(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function I6(e12, t, r) {
  return t = R6(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function R6(e12) {
  var t = D6(e12, "string");
  return Fs(t) == "symbol" ? t : t + "";
}
function D6(e12, t) {
  if (Fs(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (Fs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
function L6(e12) {
  return Array.isArray(e12) && Je(e12[0]) && Je(e12[1]) ? e12.join(" ~ ") : e12;
}
var B6 = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, o = t.itemStyle, s = o === void 0 ? {} : o, l = t.labelStyle, u = l === void 0 ? {} : l, f = t.payload, c = t.formatter, d = t.itemSorter, h = t.wrapperClassName, y = t.labelClassName, v = t.label, m = t.labelFormatter, g = t.accessibilityLayer, b = g === void 0 ? false : g, x = function() {
    if (f && f.length) {
      var $ = { padding: 0, margin: 0 }, L = (d ? Bv(f, d) : f).map(function(R, D) {
        if (R.type === "none") return null;
        var B = hp({ display: "block", paddingTop: 4, paddingBottom: 4, color: R.color || "#000" }, s), W = R.formatter || c || L6, N = R.value, F = R.name, U = N, X = F;
        if (W && U != null && X != null) {
          var V = W(N, F, R, D, f);
          if (Array.isArray(V)) {
            var Q = T6(V, 2);
            U = Q[0], X = Q[1];
          } else U = V;
        }
        return E.createElement("li", { className: "recharts-tooltip-item", key: "tooltip-item-".concat(D), style: B }, Je(X) ? E.createElement("span", { className: "recharts-tooltip-item-name" }, X) : null, Je(X) ? E.createElement("span", { className: "recharts-tooltip-item-separator" }, n) : null, E.createElement("span", { className: "recharts-tooltip-item-value" }, U), E.createElement("span", { className: "recharts-tooltip-item-unit" }, R.unit || ""));
      });
      return E.createElement("ul", { className: "recharts-tooltip-item-list", style: $ }, L);
    }
    return null;
  }, O = hp({ margin: 0, padding: 10, backgroundColor: "#fff", border: "1px solid #ccc", whiteSpace: "nowrap" }, a), w = hp({ margin: 0 }, u), S = !se(v), j = S ? v : "", P = le("recharts-default-tooltip", h), k = le("recharts-tooltip-label", y);
  S && m && f !== void 0 && f !== null && (j = m(v, f));
  var T = b ? { role: "status", "aria-live": "assertive" } : {};
  return E.createElement("div", im({ className: P, style: O }, T), E.createElement("p", { className: k, style: w }, E.isValidElement(j) ? j : "".concat(j)), x());
};
function Us(e12) {
  "@babel/helpers - typeof";
  return Us = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Us(e12);
}
function nu(e12, t, r) {
  return t = z6(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function z6(e12) {
  var t = F6(e12, "string");
  return Us(t) == "symbol" ? t : t + "";
}
function F6(e12, t) {
  if (Us(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (Us(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
var zo = "recharts-tooltip-wrapper", U6 = { visibility: "hidden" };
function W6(e12) {
  var t = e12.coordinate, r = e12.translateX, n = e12.translateY;
  return le(zo, nu(nu(nu(nu({}, "".concat(zo, "-right"), q(r) && t && q(t.x) && r >= t.x), "".concat(zo, "-left"), q(r) && t && q(t.x) && r < t.x), "".concat(zo, "-bottom"), q(n) && t && q(t.y) && n >= t.y), "".concat(zo, "-top"), q(n) && t && q(t.y) && n < t.y));
}
function sx(e12) {
  var t = e12.allowEscapeViewBox, r = e12.coordinate, n = e12.key, i = e12.offsetTopLeft, a = e12.position, o = e12.reverseDirection, s = e12.tooltipDimension, l = e12.viewBox, u = e12.viewBoxDimension;
  if (a && q(a[n])) return a[n];
  var f = r[n] - s - i, c = r[n] + i;
  if (t[n]) return o[n] ? f : c;
  if (o[n]) {
    var d = f, h = l[n];
    return d < h ? Math.max(c, l[n]) : Math.max(f, l[n]);
  }
  var y = c + s, v = l[n] + u;
  return y > v ? Math.max(f, l[n]) : Math.max(c, l[n]);
}
function H6(e12) {
  var t = e12.translateX, r = e12.translateY, n = e12.useTranslate3d;
  return { transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)") };
}
function V6(e12) {
  var t = e12.allowEscapeViewBox, r = e12.coordinate, n = e12.offsetTopLeft, i = e12.position, a = e12.reverseDirection, o = e12.tooltipBox, s = e12.useTranslate3d, l = e12.viewBox, u, f, c;
  return o.height > 0 && o.width > 0 && r ? (f = sx({ allowEscapeViewBox: t, coordinate: r, key: "x", offsetTopLeft: n, position: i, reverseDirection: a, tooltipDimension: o.width, viewBox: l, viewBoxDimension: l.width }), c = sx({ allowEscapeViewBox: t, coordinate: r, key: "y", offsetTopLeft: n, position: i, reverseDirection: a, tooltipDimension: o.height, viewBox: l, viewBoxDimension: l.height }), u = H6({ translateX: f, translateY: c, useTranslate3d: s })) : u = U6, { cssProperties: u, cssClasses: W6({ translateX: f, translateY: c, coordinate: r }) };
}
function Ra(e12) {
  "@babel/helpers - typeof";
  return Ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ra(e12);
}
function lx(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ux(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lx(Object(r), true).forEach(function(n) {
      om(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : lx(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function K6(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function q6(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, bA(n.key), n);
  }
}
function G6(e12, t, r) {
  return t && q6(e12.prototype, t), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function X6(e12, t, r) {
  return t = xc(t), Y6(e12, gA() ? Reflect.construct(t, r || [], xc(e12).constructor) : t.apply(e12, r));
}
function Y6(e12, t) {
  if (t && (Ra(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Q6(e12);
}
function Q6(e12) {
  if (e12 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e12;
}
function gA() {
  try {
    var e12 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (gA = function() {
    return !!e12;
  })();
}
function xc(e12) {
  return xc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xc(e12);
}
function J6(e12, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e12.prototype = Object.create(t && t.prototype, { constructor: { value: e12, writable: true, configurable: true } }), Object.defineProperty(e12, "prototype", { writable: false }), t && am(e12, t);
}
function am(e12, t) {
  return am = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, am(e12, t);
}
function om(e12, t, r) {
  return t = bA(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function bA(e12) {
  var t = Z6(e12, "string");
  return Ra(t) == "symbol" ? t : t + "";
}
function Z6(e12, t) {
  if (Ra(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (Ra(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e12);
}
var cx = 1, eU = function(e12) {
  function t() {
    var r;
    K6(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = X6(this, t, [].concat(i)), om(r, "state", { dismissed: false, dismissedAtCoordinate: { x: 0, y: 0 }, lastBoundingBox: { width: -1, height: -1 } }), om(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var s, l, u, f;
        r.setState({ dismissed: true, dismissedAtCoordinate: { x: (s = (l = r.props.coordinate) === null || l === void 0 ? void 0 : l.x) !== null && s !== void 0 ? s : 0, y: (u = (f = r.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null && u !== void 0 ? u : 0 } });
      }
    }), r;
  }
  return J6(t, e12), G6(t, [{ key: "updateBBox", value: function() {
    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
      var n = this.wrapperNode.getBoundingClientRect();
      (Math.abs(n.width - this.state.lastBoundingBox.width) > cx || Math.abs(n.height - this.state.lastBoundingBox.height) > cx) && this.setState({ lastBoundingBox: { width: n.width, height: n.height } });
    } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({ lastBoundingBox: { width: -1, height: -1 } });
  } }, { key: "componentDidMount", value: function() {
    document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
  } }, { key: "componentWillUnmount", value: function() {
    document.removeEventListener("keydown", this.handleKeyDown);
  } }, { key: "componentDidUpdate", value: function() {
    var n, i;
    this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = false);
  } }, { key: "render", value: function() {
    var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, l = i.animationEasing, u = i.children, f = i.coordinate, c = i.hasPayload, d = i.isAnimationActive, h = i.offset, y = i.position, v = i.reverseDirection, m = i.useTranslate3d, g = i.viewBox, b = i.wrapperStyle, x = V6({ allowEscapeViewBox: o, coordinate: f, offsetTopLeft: h, position: y, reverseDirection: v, tooltipBox: this.state.lastBoundingBox, useTranslate3d: m, viewBox: g }), O = x.cssClasses, w = x.cssProperties, S = ux(ux({ transition: d && a ? "transform ".concat(s, "ms ").concat(l) : void 0 }, w), {}, { pointerEvents: "none", visibility: !this.state.dismissed && a && c ? "visible" : "hidden", position: "absolute", top: 0, left: 0 }, b);
    return E.createElement("div", { tabIndex: -1, className: O, style: S, ref: function(P) {
      n.wrapperNode = P;
    } }, u);
  } }]);
}(A.PureComponent), tU = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Bi = { isSsr: tU() };
function Da(e12) {
  "@babel/helpers - typeof";
  return Da = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Da(e12);
}
function fx(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dx(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fx(Object(r), true).forEach(function(n) {
      zv(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : fx(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function rU(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function nU(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, wA(n.key), n);
  }
}
function iU(e12, t, r) {
  return t && nU(e12.prototype, t), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function aU(e12, t, r) {
  return t = wc(t), oU(e12, xA() ? Reflect.construct(t, r || [], wc(e12).constructor) : t.apply(e12, r));
}
function oU(e12, t) {
  if (t && (Da(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return sU(e12);
}
function sU(e12) {
  if (e12 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e12;
}
function xA() {
  try {
    var e12 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (xA = function() {
    return !!e12;
  })();
}
function wc(e12) {
  return wc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, wc(e12);
}
function lU(e12, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e12.prototype = Object.create(t && t.prototype, { constructor: { value: e12, writable: true, configurable: true } }), Object.defineProperty(e12, "prototype", { writable: false }), t && sm(e12, t);
}
function sm(e12, t) {
  return sm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, sm(e12, t);
}
function zv(e12, t, r) {
  return t = wA(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function wA(e12) {
  var t = uU(e12, "string");
  return Da(t) == "symbol" ? t : t + "";
}
function uU(e12, t) {
  if (Da(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (Da(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e12);
}
function cU(e12) {
  return e12.dataKey;
}
function fU(e12, t) {
  return E.isValidElement(e12) ? E.cloneElement(e12, t) : typeof e12 == "function" ? E.createElement(e12, t) : E.createElement(B6, t);
}
var bt = function(e12) {
  function t() {
    return rU(this, t), aU(this, t, arguments);
  }
  return lU(t, e12), iU(t, [{ key: "render", value: function() {
    var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, l = i.animationEasing, u = i.content, f = i.coordinate, c = i.filterNull, d = i.isAnimationActive, h = i.offset, y = i.payload, v = i.payloadUniqBy, m = i.position, g = i.reverseDirection, b = i.useTranslate3d, x = i.viewBox, O = i.wrapperStyle, w = y ?? [];
    c && w.length && (w = cA(y.filter(function(j) {
      return j.value != null && (j.hide !== true || n.props.includeHidden);
    }), v, cU));
    var S = w.length > 0;
    return E.createElement(eU, { allowEscapeViewBox: o, animationDuration: s, animationEasing: l, isAnimationActive: d, active: a, coordinate: f, hasPayload: S, offset: h, position: m, reverseDirection: g, useTranslate3d: b, viewBox: x, wrapperStyle: O }, fU(u, dx(dx({}, this.props), {}, { payload: w })));
  } }]);
}(A.PureComponent);
zv(bt, "displayName", "Tooltip");
zv(bt, "defaultProps", { accessibilityLayer: false, allowEscapeViewBox: { x: false, y: false }, animationDuration: 400, animationEasing: "ease", contentStyle: {}, coordinate: { x: 0, y: 0 }, cursor: true, cursorStyle: {}, filterNull: true, isAnimationActive: !Bi.isSsr, itemStyle: {}, labelStyle: {}, offset: 10, reverseDirection: { x: false, y: false }, separator: " : ", trigger: "hover", useTranslate3d: false, viewBox: { x: 0, y: 0, height: 0, width: 0 }, wrapperStyle: {} });
var dU = Dr, pU = function() {
  return dU.Date.now();
}, hU = pU, mU = /\s/;
function yU(e12) {
  for (var t = e12.length; t-- && mU.test(e12.charAt(t)); ) ;
  return t;
}
var vU = yU, gU = vU, bU = /^\s+/;
function xU(e12) {
  return e12 && e12.slice(0, gU(e12) + 1).replace(bU, "");
}
var wU = xU, SU = wU, px = Xn, OU = yo, hx = NaN, jU = /^[-+]0x[0-9a-f]+$/i, PU = /^0b[01]+$/i, AU = /^0o[0-7]+$/i, _U = parseInt;
function EU(e12) {
  if (typeof e12 == "number") return e12;
  if (OU(e12)) return hx;
  if (px(e12)) {
    var t = typeof e12.valueOf == "function" ? e12.valueOf() : e12;
    e12 = px(t) ? t + "" : t;
  }
  if (typeof e12 != "string") return e12 === 0 ? e12 : +e12;
  e12 = SU(e12);
  var r = PU.test(e12);
  return r || AU.test(e12) ? _U(e12.slice(2), r ? 2 : 8) : jU.test(e12) ? hx : +e12;
}
var SA = EU, kU = Xn, mp = hU, mx = SA, TU = "Expected a function", $U = Math.max, CU = Math.min;
function NU(e12, t, r) {
  var n, i, a, o, s, l, u = 0, f = false, c = false, d = true;
  if (typeof e12 != "function") throw new TypeError(TU);
  t = mx(t) || 0, kU(r) && (f = !!r.leading, c = "maxWait" in r, a = c ? $U(mx(r.maxWait) || 0, t) : a, d = "trailing" in r ? !!r.trailing : d);
  function h(S) {
    var j = n, P = i;
    return n = i = void 0, u = S, o = e12.apply(P, j), o;
  }
  function y(S) {
    return u = S, s = setTimeout(g, t), f ? h(S) : o;
  }
  function v(S) {
    var j = S - l, P = S - u, k = t - j;
    return c ? CU(k, a - P) : k;
  }
  function m(S) {
    var j = S - l, P = S - u;
    return l === void 0 || j >= t || j < 0 || c && P >= a;
  }
  function g() {
    var S = mp();
    if (m(S)) return b(S);
    s = setTimeout(g, v(S));
  }
  function b(S) {
    return s = void 0, d && n ? h(S) : (n = i = void 0, o);
  }
  function x() {
    s !== void 0 && clearTimeout(s), u = 0, n = l = i = s = void 0;
  }
  function O() {
    return s === void 0 ? o : b(mp());
  }
  function w() {
    var S = mp(), j = m(S);
    if (n = arguments, i = this, l = S, j) {
      if (s === void 0) return y(l);
      if (c) return clearTimeout(s), s = setTimeout(g, t), h(l);
    }
    return s === void 0 && (s = setTimeout(g, t)), o;
  }
  return w.cancel = x, w.flush = O, w;
}
var MU = NU, IU = MU, RU = Xn, DU = "Expected a function";
function LU(e12, t, r) {
  var n = true, i = true;
  if (typeof e12 != "function") throw new TypeError(DU);
  return RU(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), IU(e12, t, { leading: n, maxWait: t, trailing: i });
}
var BU = LU;
const OA = be(BU);
function Ws(e12) {
  "@babel/helpers - typeof";
  return Ws = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ws(e12);
}
function yx(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function iu(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yx(Object(r), true).forEach(function(n) {
      zU(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : yx(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function zU(e12, t, r) {
  return t = FU(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function FU(e12) {
  var t = UU(e12, "string");
  return Ws(t) == "symbol" ? t : t + "";
}
function UU(e12, t) {
  if (Ws(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (Ws(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
function WU(e12, t) {
  return qU(e12) || KU(e12, t) || VU(e12, t) || HU();
}
function HU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function VU(e12, t) {
  if (e12) {
    if (typeof e12 == "string") return vx(e12, t);
    var r = Object.prototype.toString.call(e12).slice(8, -1);
    if (r === "Object" && e12.constructor && (r = e12.constructor.name), r === "Map" || r === "Set") return Array.from(e12);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vx(e12, t);
  }
}
function vx(e12, t) {
  (t == null || t > e12.length) && (t = e12.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e12[r];
  return n;
}
function KU(e12, t) {
  var r = e12 == null ? null : typeof Symbol < "u" && e12[Symbol.iterator] || e12["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = true, u = false;
    try {
      if (a = (r = r.call(e12)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = true) ;
    } catch (f) {
      u = true, i = f;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function qU(e12) {
  if (Array.isArray(e12)) return e12;
}
var sa = A.forwardRef(function(e12, t) {
  var r = e12.aspect, n = e12.initialDimension, i = n === void 0 ? { width: -1, height: -1 } : n, a = e12.width, o = a === void 0 ? "100%" : a, s = e12.height, l = s === void 0 ? "100%" : s, u = e12.minWidth, f = u === void 0 ? 0 : u, c = e12.minHeight, d = e12.maxHeight, h = e12.children, y = e12.debounce, v = y === void 0 ? 0 : y, m = e12.id, g = e12.className, b = e12.onResize, x = e12.style, O = x === void 0 ? {} : x, w = A.useRef(null), S = A.useRef();
  S.current = b, A.useImperativeHandle(t, function() {
    return Object.defineProperty(w.current, "current", { get: function() {
      return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), w.current;
    }, configurable: true });
  });
  var j = A.useState({ containerWidth: i.width, containerHeight: i.height }), P = WU(j, 2), k = P[0], T = P[1], C = A.useCallback(function(L, R) {
    T(function(D) {
      var B = Math.round(L), W = Math.round(R);
      return D.containerWidth === B && D.containerHeight === W ? D : { containerWidth: B, containerHeight: W };
    });
  }, []);
  A.useEffect(function() {
    var L = function(F) {
      var U, X = F[0].contentRect, V = X.width, Q = X.height;
      C(V, Q), (U = S.current) === null || U === void 0 || U.call(S, V, Q);
    };
    v > 0 && (L = OA(L, v, { trailing: true, leading: false }));
    var R = new ResizeObserver(L), D = w.current.getBoundingClientRect(), B = D.width, W = D.height;
    return C(B, W), R.observe(w.current), function() {
      R.disconnect();
    };
  }, [C, v]);
  var $ = A.useMemo(function() {
    var L = k.containerWidth, R = k.containerHeight;
    if (L < 0 || R < 0) return null;
    br(pi(o) || pi(l), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, l), br(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var D = pi(o) ? L : o, B = pi(l) ? R : l;
    r && r > 0 && (D ? B = D / r : B && (D = B * r), d && B > d && (B = d)), br(D > 0 || B > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, D, B, o, l, f, c, r);
    var W = !Array.isArray(h) && Yr(h.type).endsWith("Chart");
    return E.Children.map(h, function(N) {
      return E.isValidElement(N) ? A.cloneElement(N, iu({ width: D, height: B }, W ? { style: iu({ height: "100%", width: "100%", maxHeight: B, maxWidth: D }, N.props.style) } : {})) : N;
    });
  }, [r, h, l, d, c, f, k, o]);
  return E.createElement("div", { id: m ? "".concat(m) : void 0, className: le("recharts-responsive-container", g), style: iu(iu({}, O), {}, { width: o, height: l, minWidth: f, minHeight: c, maxHeight: d }), ref: w }, $);
}), La = function(t) {
  return null;
};
La.displayName = "Cell";
function Hs(e12) {
  "@babel/helpers - typeof";
  return Hs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hs(e12);
}
function gx(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lm(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gx(Object(r), true).forEach(function(n) {
      GU(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : gx(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function GU(e12, t, r) {
  return t = XU(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function XU(e12) {
  var t = YU(e12, "string");
  return Hs(t) == "symbol" ? t : t + "";
}
function YU(e12, t) {
  if (Hs(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (Hs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
var Hi = { widthCache: {}, cacheCount: 0 }, QU = 2e3, JU = { position: "absolute", top: "-20000px", left: 0, padding: 0, margin: 0, border: "none", whiteSpace: "pre" }, bx = "recharts_measurement_span";
function ZU(e12) {
  var t = lm({}, e12);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var ps = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Bi.isSsr) return { width: 0, height: 0 };
  var n = ZU(r), i = JSON.stringify({ text: t, copyStyle: n });
  if (Hi.widthCache[i]) return Hi.widthCache[i];
  try {
    var a = document.getElementById(bx);
    a || (a = document.createElement("span"), a.setAttribute("id", bx), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var o = lm(lm({}, JU), n);
    Object.assign(a.style, o), a.textContent = "".concat(t);
    var s = a.getBoundingClientRect(), l = { width: s.width, height: s.height };
    return Hi.widthCache[i] = l, ++Hi.cacheCount > QU && (Hi.cacheCount = 0, Hi.widthCache = {}), l;
  } catch {
    return { width: 0, height: 0 };
  }
}, e7 = function(t) {
  return { top: t.top + window.scrollY - document.documentElement.clientTop, left: t.left + window.scrollX - document.documentElement.clientLeft };
};
function Vs(e12) {
  "@babel/helpers - typeof";
  return Vs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vs(e12);
}
function Sc(e12, t) {
  return i7(e12) || n7(e12, t) || r7(e12, t) || t7();
}
function t7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function r7(e12, t) {
  if (e12) {
    if (typeof e12 == "string") return xx(e12, t);
    var r = Object.prototype.toString.call(e12).slice(8, -1);
    if (r === "Object" && e12.constructor && (r = e12.constructor.name), r === "Map" || r === "Set") return Array.from(e12);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xx(e12, t);
  }
}
function xx(e12, t) {
  (t == null || t > e12.length) && (t = e12.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e12[r];
  return n;
}
function n7(e12, t) {
  var r = e12 == null ? null : typeof Symbol < "u" && e12[Symbol.iterator] || e12["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = true, u = false;
    try {
      if (a = (r = r.call(e12)).next, t === 0) {
        if (Object(r) !== r) return;
        l = false;
      } else for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = true) ;
    } catch (f) {
      u = true, i = f;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function i7(e12) {
  if (Array.isArray(e12)) return e12;
}
function a7(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function wx(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, s7(n.key), n);
  }
}
function o7(e12, t, r) {
  return t && wx(e12.prototype, t), r && wx(e12, r), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function s7(e12) {
  var t = l7(e12, "string");
  return Vs(t) == "symbol" ? t : t + "";
}
function l7(e12, t) {
  if (Vs(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (Vs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e12);
}
var Sx = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Ox = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, u7 = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, c7 = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, jA = { cm: 96 / 2.54, mm: 96 / 25.4, pt: 96 / 72, pc: 96 / 6, in: 96, Q: 96 / (2.54 * 40), px: 1 }, f7 = Object.keys(jA), la = "NaN";
function d7(e12, t) {
  return e12 * jA[t];
}
var au = function() {
  function e12(t, r) {
    a7(this, e12), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !u7.test(r) && (this.num = NaN, this.unit = ""), f7.includes(r) && (this.num = d7(t, r), this.unit = "px");
  }
  return o7(e12, [{ key: "add", value: function(r) {
    return this.unit !== r.unit ? new e12(NaN, "") : new e12(this.num + r.num, this.unit);
  } }, { key: "subtract", value: function(r) {
    return this.unit !== r.unit ? new e12(NaN, "") : new e12(this.num - r.num, this.unit);
  } }, { key: "multiply", value: function(r) {
    return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e12(NaN, "") : new e12(this.num * r.num, this.unit || r.unit);
  } }, { key: "divide", value: function(r) {
    return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e12(NaN, "") : new e12(this.num / r.num, this.unit || r.unit);
  } }, { key: "toString", value: function() {
    return "".concat(this.num).concat(this.unit);
  } }, { key: "isNaN", value: function() {
    return Number.isNaN(this.num);
  } }], [{ key: "parse", value: function(r) {
    var n, i = (n = c7.exec(r)) !== null && n !== void 0 ? n : [], a = Sc(i, 3), o = a[1], s = a[2];
    return new e12(parseFloat(o), s ?? "");
  } }]);
}();
function PA(e12) {
  if (e12.includes(la)) return la;
  for (var t = e12; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = Sx.exec(t)) !== null && r !== void 0 ? r : [], i = Sc(n, 4), a = i[1], o = i[2], s = i[3], l = au.parse(a ?? ""), u = au.parse(s ?? ""), f = o === "*" ? l.multiply(u) : l.divide(u);
    if (f.isNaN()) return la;
    t = t.replace(Sx, f.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var c, d = (c = Ox.exec(t)) !== null && c !== void 0 ? c : [], h = Sc(d, 4), y = h[1], v = h[2], m = h[3], g = au.parse(y ?? ""), b = au.parse(m ?? ""), x = v === "+" ? g.add(b) : g.subtract(b);
    if (x.isNaN()) return la;
    t = t.replace(Ox, x.toString());
  }
  return t;
}
var jx = /\(([^()]*)\)/;
function p7(e12) {
  for (var t = e12; t.includes("("); ) {
    var r = jx.exec(t), n = Sc(r, 2), i = n[1];
    t = t.replace(jx, PA(i));
  }
  return t;
}
function h7(e12) {
  var t = e12.replace(/\s+/g, "");
  return t = p7(t), t = PA(t), t;
}
function m7(e12) {
  try {
    return h7(e12);
  } catch {
    return la;
  }
}
function yp(e12) {
  var t = m7(e12.slice(5, -1));
  return t === la ? "" : t;
}
var y7 = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], v7 = ["dx", "dy", "angle", "className", "breakAll"];
function um() {
  return um = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, um.apply(this, arguments);
}
function Px(e12, t) {
  if (e12 == null) return {};
  var r = g7(e12, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e12);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e12, n) && (r[n] = e12[n]);
  }
  return r;
}
function g7(e12, t) {
  if (e12 == null) return {};
  var r = {};
  for (var n in e12) if (Object.prototype.hasOwnProperty.call(e12, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e12[n];
  }
  return r;
}
function Ax(e12, t) {
  return S7(e12) || w7(e12, t) || x7(e12, t) || b7();
}
function b7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function x7(e12, t) {
  if (e12) {
    if (typeof e12 == "string") return _x(e12, t);
    var r = Object.prototype.toString.call(e12).slice(8, -1);
    if (r === "Object" && e12.constructor && (r = e12.constructor.name), r === "Map" || r === "Set") return Array.from(e12);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _x(e12, t);
  }
}
function _x(e12, t) {
  (t == null || t > e12.length) && (t = e12.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e12[r];
  return n;
}
function w7(e12, t) {
  var r = e12 == null ? null : typeof Symbol < "u" && e12[Symbol.iterator] || e12["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = true, u = false;
    try {
      if (a = (r = r.call(e12)).next, t === 0) {
        if (Object(r) !== r) return;
        l = false;
      } else for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = true) ;
    } catch (f) {
      u = true, i = f;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function S7(e12) {
  if (Array.isArray(e12)) return e12;
}
var AA = /[ \f\n\r\t\v\u2028\u2029]+/, _A = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    se(r) || (n ? a = r.toString().split("") : a = r.toString().split(AA));
    var o = a.map(function(l) {
      return { word: l, width: ps(l, i).width };
    }), s = n ? 0 : ps("\xA0", i).width;
    return { wordsWithComputedWidth: o, spaceWidth: s };
  } catch {
    return null;
  }
}, O7 = function(t, r, n, i, a) {
  var o = t.maxLines, s = t.children, l = t.style, u = t.breakAll, f = q(o), c = s, d = function() {
    var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return D.reduce(function(B, W) {
      var N = W.word, F = W.width, U = B[B.length - 1];
      if (U && (i == null || a || U.width + F + n < Number(i))) U.words.push(N), U.width += F + n;
      else {
        var X = { words: [N], width: F };
        B.push(X);
      }
      return B;
    }, []);
  }, h = d(r), y = function(D) {
    return D.reduce(function(B, W) {
      return B.width > W.width ? B : W;
    });
  };
  if (!f) return h;
  for (var v = "\u2026", m = function(D) {
    var B = c.slice(0, D), W = _A({ breakAll: u, style: l, children: B + v }).wordsWithComputedWidth, N = d(W), F = N.length > o || y(N).width > Number(i);
    return [F, N];
  }, g = 0, b = c.length - 1, x = 0, O; g <= b && x <= c.length - 1; ) {
    var w = Math.floor((g + b) / 2), S = w - 1, j = m(S), P = Ax(j, 2), k = P[0], T = P[1], C = m(w), $ = Ax(C, 1), L = $[0];
    if (!k && !L && (g = w + 1), k && L && (b = w - 1), !k && L) {
      O = T;
      break;
    }
    x++;
  }
  return O || h;
}, Ex = function(t) {
  var r = se(t) ? [] : t.toString().split(AA);
  return [{ words: r }];
}, j7 = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, o = t.breakAll, s = t.maxLines;
  if ((r || n) && !Bi.isSsr) {
    var l, u, f = _A({ breakAll: o, children: i, style: a });
    if (f) {
      var c = f.wordsWithComputedWidth, d = f.spaceWidth;
      l = c, u = d;
    } else return Ex(i);
    return O7({ breakAll: o, children: i, maxLines: s, style: a }, l, u, r, n);
  }
  return Ex(i);
}, kx = "#808080", Ci = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.lineHeight, s = o === void 0 ? "1em" : o, l = t.capHeight, u = l === void 0 ? "0.71em" : l, f = t.scaleToFit, c = f === void 0 ? false : f, d = t.textAnchor, h = d === void 0 ? "start" : d, y = t.verticalAnchor, v = y === void 0 ? "end" : y, m = t.fill, g = m === void 0 ? kx : m, b = Px(t, y7), x = A.useMemo(function() {
    return j7({ breakAll: b.breakAll, children: b.children, maxLines: b.maxLines, scaleToFit: c, style: b.style, width: b.width });
  }, [b.breakAll, b.children, b.maxLines, c, b.style, b.width]), O = b.dx, w = b.dy, S = b.angle, j = b.className, P = b.breakAll, k = Px(b, v7);
  if (!Je(n) || !Je(a)) return null;
  var T = n + (q(O) ? O : 0), C = a + (q(w) ? w : 0), $;
  switch (v) {
    case "start":
      $ = yp("calc(".concat(u, ")"));
      break;
    case "middle":
      $ = yp("calc(".concat((x.length - 1) / 2, " * -").concat(s, " + (").concat(u, " / 2))"));
      break;
    default:
      $ = yp("calc(".concat(x.length - 1, " * -").concat(s, ")"));
      break;
  }
  var L = [];
  if (c) {
    var R = x[0].width, D = b.width;
    L.push("scale(".concat((q(D) ? D / R : 1) / R, ")"));
  }
  return S && L.push("rotate(".concat(S, ", ").concat(T, ", ").concat(C, ")")), L.length && (k.transform = L.join(" ")), E.createElement("text", um({}, ee(k, true), { x: T, y: C, className: le("recharts-text", j), textAnchor: h, fill: g.includes("url") ? kx : g }), x.map(function(B, W) {
    var N = B.words.join(P ? "" : " ");
    return E.createElement("tspan", { x: T, dy: W === 0 ? $ : s, key: "".concat(N, "-").concat(W) }, N);
  }));
};
function Un(e12, t) {
  return e12 == null || t == null ? NaN : e12 < t ? -1 : e12 > t ? 1 : e12 >= t ? 0 : NaN;
}
function P7(e12, t) {
  return e12 == null || t == null ? NaN : t < e12 ? -1 : t > e12 ? 1 : t >= e12 ? 0 : NaN;
}
function Fv(e12) {
  let t, r, n;
  e12.length !== 2 ? (t = Un, r = (s, l) => Un(e12(s), l), n = (s, l) => e12(s) - l) : (t = e12 === Un || e12 === P7 ? e12 : A7, r = e12, n = e12);
  function i(s, l, u = 0, f = s.length) {
    if (u < f) {
      if (t(l, l) !== 0) return f;
      do {
        const c = u + f >>> 1;
        r(s[c], l) < 0 ? u = c + 1 : f = c;
      } while (u < f);
    }
    return u;
  }
  function a(s, l, u = 0, f = s.length) {
    if (u < f) {
      if (t(l, l) !== 0) return f;
      do {
        const c = u + f >>> 1;
        r(s[c], l) <= 0 ? u = c + 1 : f = c;
      } while (u < f);
    }
    return u;
  }
  function o(s, l, u = 0, f = s.length) {
    const c = i(s, l, u, f - 1);
    return c > u && n(s[c - 1], l) > -n(s[c], l) ? c - 1 : c;
  }
  return { left: i, center: o, right: a };
}
function A7() {
  return 0;
}
function EA(e12) {
  return e12 === null ? NaN : +e12;
}
function* _7(e12, t) {
  for (let r of e12) r != null && (r = +r) >= r && (yield r);
}
const E7 = Fv(Un), Cl = E7.right;
Fv(EA).center;
class Tx extends Map {
  constructor(t, r = $7) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get($x(this, t));
  }
  has(t) {
    return super.has($x(this, t));
  }
  set(t, r) {
    return super.set(k7(this, t), r);
  }
  delete(t) {
    return super.delete(T7(this, t));
  }
}
function $x({ _intern: e12, _key: t }, r) {
  const n = t(r);
  return e12.has(n) ? e12.get(n) : r;
}
function k7({ _intern: e12, _key: t }, r) {
  const n = t(r);
  return e12.has(n) ? e12.get(n) : (e12.set(n, r), r);
}
function T7({ _intern: e12, _key: t }, r) {
  const n = t(r);
  return e12.has(n) && (r = e12.get(n), e12.delete(n)), r;
}
function $7(e12) {
  return e12 !== null && typeof e12 == "object" ? e12.valueOf() : e12;
}
function C7(e12 = Un) {
  if (e12 === Un) return kA;
  if (typeof e12 != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e12(t, r);
    return n || n === 0 ? n : (e12(r, r) === 0) - (e12(t, t) === 0);
  };
}
function kA(e12, t) {
  return (e12 == null || !(e12 >= e12)) - (t == null || !(t >= t)) || (e12 < t ? -1 : e12 > t ? 1 : 0);
}
const N7 = Math.sqrt(50), M7 = Math.sqrt(10), I7 = Math.sqrt(2);
function Oc(e12, t, r) {
  const n = (t - e12) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= N7 ? 10 : a >= M7 ? 5 : a >= I7 ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(e12 * u), l = Math.round(t * u), s / u < e12 && ++s, l / u > t && --l, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(e12 / u), l = Math.round(t / u), s * u < e12 && ++s, l * u > t && --l), l < s && 0.5 <= r && r < 2 ? Oc(e12, t, r * 2) : [s, l, u];
}
function cm(e12, t, r) {
  if (t = +t, e12 = +e12, r = +r, !(r > 0)) return [];
  if (e12 === t) return [e12];
  const n = t < e12, [i, a, o] = n ? Oc(t, e12, r) : Oc(e12, t, r);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (n) if (o < 0) for (let u = 0; u < s; ++u) l[u] = (a - u) / -o;
  else for (let u = 0; u < s; ++u) l[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * o;
  return l;
}
function fm(e12, t, r) {
  return t = +t, e12 = +e12, r = +r, Oc(e12, t, r)[2];
}
function dm(e12, t, r) {
  t = +t, e12 = +e12, r = +r;
  const n = t < e12, i = n ? fm(t, e12, r) : fm(e12, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Cx(e12, t) {
  let r;
  for (const n of e12) n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Nx(e12, t) {
  let r;
  for (const n of e12) n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function TA(e12, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e12.length - 1, n)), !(r <= t && t <= n)) return e12;
  for (i = i === void 0 ? kA : C7(i); n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1, u = t - r + 1, f = Math.log(l), c = 0.5 * Math.exp(2 * f / 3), d = 0.5 * Math.sqrt(f * c * (l - c) / l) * (u - l / 2 < 0 ? -1 : 1), h = Math.max(r, Math.floor(t - u * c / l + d)), y = Math.min(n, Math.floor(t + (l - u) * c / l + d));
      TA(e12, t, h, y, i);
    }
    const a = e12[t];
    let o = r, s = n;
    for (Fo(e12, r, t), i(e12[n], a) > 0 && Fo(e12, r, n); o < s; ) {
      for (Fo(e12, o, s), ++o, --s; i(e12[o], a) < 0; ) ++o;
      for (; i(e12[s], a) > 0; ) --s;
    }
    i(e12[r], a) === 0 ? Fo(e12, r, s) : (++s, Fo(e12, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e12;
}
function Fo(e12, t, r) {
  const n = e12[t];
  e12[t] = e12[r], e12[r] = n;
}
function R7(e12, t, r) {
  if (e12 = Float64Array.from(_7(e12)), !(!(n = e12.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Nx(e12);
    if (t >= 1) return Cx(e12);
    var n, i = (n - 1) * t, a = Math.floor(i), o = Cx(TA(e12, a).subarray(0, a + 1)), s = Nx(e12.subarray(a + 1));
    return o + (s - o) * (i - a);
  }
}
function D7(e12, t, r = EA) {
  if (!(!(n = e12.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e12[0], 0, e12);
    if (t >= 1) return +r(e12[n - 1], n - 1, e12);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e12[a], a, e12), s = +r(e12[a + 1], a + 1, e12);
    return o + (s - o) * (i - a);
  }
}
function L7(e12, t, r) {
  e12 = +e12, t = +t, r = (i = arguments.length) < 2 ? (t = e12, e12 = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e12) / r)) | 0, a = new Array(i); ++n < i; ) a[n] = e12 + n * r;
  return a;
}
function sr(e12, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e12);
      break;
    default:
      this.range(t).domain(e12);
      break;
  }
  return this;
}
function mn(e12, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e12 == "function" ? this.interpolator(e12) : this.range(e12);
      break;
    }
    default: {
      this.domain(e12), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const pm = Symbol("implicit");
function Uv() {
  var e12 = new Tx(), t = [], r = [], n = pm;
  function i(a) {
    let o = e12.get(a);
    if (o === void 0) {
      if (n !== pm) return n;
      e12.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e12 = new Tx();
    for (const o of a) e12.has(o) || e12.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Uv(t, r).unknown(n);
  }, sr.apply(i, arguments), i;
}
function Ks() {
  var e12 = Uv().unknown(void 0), t = e12.domain, r = e12.range, n = 0, i = 1, a, o, s = false, l = 0, u = 0, f = 0.5;
  delete e12.unknown;
  function c() {
    var d = t().length, h = i < n, y = h ? i : n, v = h ? n : i;
    a = (v - y) / Math.max(1, d - l + u * 2), s && (a = Math.floor(a)), y += (v - y - a * (d - l)) * f, o = a * (1 - l), s && (y = Math.round(y), o = Math.round(o));
    var m = L7(d).map(function(g) {
      return y + a * g;
    });
    return r(h ? m.reverse() : m);
  }
  return e12.domain = function(d) {
    return arguments.length ? (t(d), c()) : t();
  }, e12.range = function(d) {
    return arguments.length ? ([n, i] = d, n = +n, i = +i, c()) : [n, i];
  }, e12.rangeRound = function(d) {
    return [n, i] = d, n = +n, i = +i, s = true, c();
  }, e12.bandwidth = function() {
    return o;
  }, e12.step = function() {
    return a;
  }, e12.round = function(d) {
    return arguments.length ? (s = !!d, c()) : s;
  }, e12.padding = function(d) {
    return arguments.length ? (l = Math.min(1, u = +d), c()) : l;
  }, e12.paddingInner = function(d) {
    return arguments.length ? (l = Math.min(1, d), c()) : l;
  }, e12.paddingOuter = function(d) {
    return arguments.length ? (u = +d, c()) : u;
  }, e12.align = function(d) {
    return arguments.length ? (f = Math.max(0, Math.min(1, d)), c()) : f;
  }, e12.copy = function() {
    return Ks(t(), [n, i]).round(s).paddingInner(l).paddingOuter(u).align(f);
  }, sr.apply(c(), arguments);
}
function $A(e12) {
  var t = e12.copy;
  return e12.padding = e12.paddingOuter, delete e12.paddingInner, delete e12.paddingOuter, e12.copy = function() {
    return $A(t());
  }, e12;
}
function hs() {
  return $A(Ks.apply(null, arguments).paddingInner(1));
}
function Wv(e12, t, r) {
  e12.prototype = t.prototype = r, r.constructor = e12;
}
function CA(e12, t) {
  var r = Object.create(e12.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Nl() {
}
var qs = 0.7, jc = 1 / qs, xa = "\\s*([+-]?\\d+)\\s*", Gs = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Cr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", B7 = /^#([0-9a-f]{3,8})$/, z7 = new RegExp(`^rgb\\(${xa},${xa},${xa}\\)$`), F7 = new RegExp(`^rgb\\(${Cr},${Cr},${Cr}\\)$`), U7 = new RegExp(`^rgba\\(${xa},${xa},${xa},${Gs}\\)$`), W7 = new RegExp(`^rgba\\(${Cr},${Cr},${Cr},${Gs}\\)$`), H7 = new RegExp(`^hsl\\(${Gs},${Cr},${Cr}\\)$`), V7 = new RegExp(`^hsla\\(${Gs},${Cr},${Cr},${Gs}\\)$`), Mx = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
Wv(Nl, Xs, { copy(e12) {
  return Object.assign(new this.constructor(), this, e12);
}, displayable() {
  return this.rgb().displayable();
}, hex: Ix, formatHex: Ix, formatHex8: K7, formatHsl: q7, formatRgb: Rx, toString: Rx });
function Ix() {
  return this.rgb().formatHex();
}
function K7() {
  return this.rgb().formatHex8();
}
function q7() {
  return NA(this).formatHsl();
}
function Rx() {
  return this.rgb().formatRgb();
}
function Xs(e12) {
  var t, r;
  return e12 = (e12 + "").trim().toLowerCase(), (t = B7.exec(e12)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Dx(t) : r === 3 ? new kt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? ou(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? ou(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = z7.exec(e12)) ? new kt(t[1], t[2], t[3], 1) : (t = F7.exec(e12)) ? new kt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = U7.exec(e12)) ? ou(t[1], t[2], t[3], t[4]) : (t = W7.exec(e12)) ? ou(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = H7.exec(e12)) ? zx(t[1], t[2] / 100, t[3] / 100, 1) : (t = V7.exec(e12)) ? zx(t[1], t[2] / 100, t[3] / 100, t[4]) : Mx.hasOwnProperty(e12) ? Dx(Mx[e12]) : e12 === "transparent" ? new kt(NaN, NaN, NaN, 0) : null;
}
function Dx(e12) {
  return new kt(e12 >> 16 & 255, e12 >> 8 & 255, e12 & 255, 1);
}
function ou(e12, t, r, n) {
  return n <= 0 && (e12 = t = r = NaN), new kt(e12, t, r, n);
}
function G7(e12) {
  return e12 instanceof Nl || (e12 = Xs(e12)), e12 ? (e12 = e12.rgb(), new kt(e12.r, e12.g, e12.b, e12.opacity)) : new kt();
}
function hm(e12, t, r, n) {
  return arguments.length === 1 ? G7(e12) : new kt(e12, t, r, n ?? 1);
}
function kt(e12, t, r, n) {
  this.r = +e12, this.g = +t, this.b = +r, this.opacity = +n;
}
Wv(kt, hm, CA(Nl, { brighter(e12) {
  return e12 = e12 == null ? jc : Math.pow(jc, e12), new kt(this.r * e12, this.g * e12, this.b * e12, this.opacity);
}, darker(e12) {
  return e12 = e12 == null ? qs : Math.pow(qs, e12), new kt(this.r * e12, this.g * e12, this.b * e12, this.opacity);
}, rgb() {
  return this;
}, clamp() {
  return new kt(Si(this.r), Si(this.g), Si(this.b), Pc(this.opacity));
}, displayable() {
  return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
}, hex: Lx, formatHex: Lx, formatHex8: X7, formatRgb: Bx, toString: Bx }));
function Lx() {
  return `#${hi(this.r)}${hi(this.g)}${hi(this.b)}`;
}
function X7() {
  return `#${hi(this.r)}${hi(this.g)}${hi(this.b)}${hi((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Bx() {
  const e12 = Pc(this.opacity);
  return `${e12 === 1 ? "rgb(" : "rgba("}${Si(this.r)}, ${Si(this.g)}, ${Si(this.b)}${e12 === 1 ? ")" : `, ${e12})`}`;
}
function Pc(e12) {
  return isNaN(e12) ? 1 : Math.max(0, Math.min(1, e12));
}
function Si(e12) {
  return Math.max(0, Math.min(255, Math.round(e12) || 0));
}
function hi(e12) {
  return e12 = Si(e12), (e12 < 16 ? "0" : "") + e12.toString(16);
}
function zx(e12, t, r, n) {
  return n <= 0 ? e12 = t = r = NaN : r <= 0 || r >= 1 ? e12 = t = NaN : t <= 0 && (e12 = NaN), new yr(e12, t, r, n);
}
function NA(e12) {
  if (e12 instanceof yr) return new yr(e12.h, e12.s, e12.l, e12.opacity);
  if (e12 instanceof Nl || (e12 = Xs(e12)), !e12) return new yr();
  if (e12 instanceof yr) return e12;
  e12 = e12.rgb();
  var t = e12.r / 255, r = e12.g / 255, n = e12.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (t === a ? o = (r - n) / s + (r < n) * 6 : r === a ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new yr(o, s, l, e12.opacity);
}
function Y7(e12, t, r, n) {
  return arguments.length === 1 ? NA(e12) : new yr(e12, t, r, n ?? 1);
}
function yr(e12, t, r, n) {
  this.h = +e12, this.s = +t, this.l = +r, this.opacity = +n;
}
Wv(yr, Y7, CA(Nl, { brighter(e12) {
  return e12 = e12 == null ? jc : Math.pow(jc, e12), new yr(this.h, this.s, this.l * e12, this.opacity);
}, darker(e12) {
  return e12 = e12 == null ? qs : Math.pow(qs, e12), new yr(this.h, this.s, this.l * e12, this.opacity);
}, rgb() {
  var e12 = this.h % 360 + (this.h < 0) * 360, t = isNaN(e12) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
  return new kt(vp(e12 >= 240 ? e12 - 240 : e12 + 120, i, n), vp(e12, i, n), vp(e12 < 120 ? e12 + 240 : e12 - 120, i, n), this.opacity);
}, clamp() {
  return new yr(Fx(this.h), su(this.s), su(this.l), Pc(this.opacity));
}, displayable() {
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
}, formatHsl() {
  const e12 = Pc(this.opacity);
  return `${e12 === 1 ? "hsl(" : "hsla("}${Fx(this.h)}, ${su(this.s) * 100}%, ${su(this.l) * 100}%${e12 === 1 ? ")" : `, ${e12})`}`;
} }));
function Fx(e12) {
  return e12 = (e12 || 0) % 360, e12 < 0 ? e12 + 360 : e12;
}
function su(e12) {
  return Math.max(0, Math.min(1, e12 || 0));
}
function vp(e12, t, r) {
  return (e12 < 60 ? t + (r - t) * e12 / 60 : e12 < 180 ? r : e12 < 240 ? t + (r - t) * (240 - e12) / 60 : t) * 255;
}
const Hv = (e12) => () => e12;
function Q7(e12, t) {
  return function(r) {
    return e12 + r * t;
  };
}
function J7(e12, t, r) {
  return e12 = Math.pow(e12, r), t = Math.pow(t, r) - e12, r = 1 / r, function(n) {
    return Math.pow(e12 + n * t, r);
  };
}
function Z7(e12) {
  return (e12 = +e12) == 1 ? MA : function(t, r) {
    return r - t ? J7(t, r, e12) : Hv(isNaN(t) ? r : t);
  };
}
function MA(e12, t) {
  var r = t - e12;
  return r ? Q7(e12, r) : Hv(isNaN(e12) ? t : e12);
}
const Ux = function e9(t) {
  var r = Z7(t);
  function n(i, a) {
    var o = r((i = hm(i)).r, (a = hm(a)).r), s = r(i.g, a.g), l = r(i.b, a.b), u = MA(i.opacity, a.opacity);
    return function(f) {
      return i.r = o(f), i.g = s(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return n.gamma = e9, n;
}(1);
function e92(e12, t) {
  t || (t = []);
  var r = e12 ? Math.min(t.length, e12.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e12[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function t9(e12) {
  return ArrayBuffer.isView(e12) && !(e12 instanceof DataView);
}
function r9(e12, t) {
  var r = t ? t.length : 0, n = e12 ? Math.min(r, e12.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = Ao(e12[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = i[o](s);
    return a;
  };
}
function n9(e12, t) {
  var r = /* @__PURE__ */ new Date();
  return e12 = +e12, t = +t, function(n) {
    return r.setTime(e12 * (1 - n) + t * n), r;
  };
}
function Ac(e12, t) {
  return e12 = +e12, t = +t, function(r) {
    return e12 * (1 - r) + t * r;
  };
}
function i9(e12, t) {
  var r = {}, n = {}, i;
  (e12 === null || typeof e12 != "object") && (e12 = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t) i in e12 ? r[i] = Ao(e12[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var mm = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, gp = new RegExp(mm.source, "g");
function a9(e12) {
  return function() {
    return e12;
  };
}
function o9(e12) {
  return function(t) {
    return e12(t) + "";
  };
}
function s9(e12, t) {
  var r = mm.lastIndex = gp.lastIndex = 0, n, i, a, o = -1, s = [], l = [];
  for (e12 = e12 + "", t = t + ""; (n = mm.exec(e12)) && (i = gp.exec(t)); ) (a = i.index) > r && (a = t.slice(r, a), s[o] ? s[o] += a : s[++o] = a), (n = n[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: Ac(n, i) })), r = gp.lastIndex;
  return r < t.length && (a = t.slice(r), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? o9(l[0].x) : a9(t) : (t = l.length, function(u) {
    for (var f = 0, c; f < t; ++f) s[(c = l[f]).i] = c.x(u);
    return s.join("");
  });
}
function Ao(e12, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Hv(t) : (r === "number" ? Ac : r === "string" ? (n = Xs(t)) ? (t = n, Ux) : s9 : t instanceof Xs ? Ux : t instanceof Date ? n9 : t9(t) ? e92 : Array.isArray(t) ? r9 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? i9 : Ac)(e12, t);
}
function Vv(e12, t) {
  return e12 = +e12, t = +t, function(r) {
    return Math.round(e12 * (1 - r) + t * r);
  };
}
function l9(e12, t) {
  t === void 0 && (t = e12, e12 = Ao);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e12(i, i = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[s](o - s);
  };
}
function u9(e12) {
  return function() {
    return e12;
  };
}
function _c(e12) {
  return +e12;
}
var Wx = [0, 1];
function St(e12) {
  return e12;
}
function ym(e12, t) {
  return (t -= e12 = +e12) ? function(r) {
    return (r - e12) / t;
  } : u9(isNaN(t) ? NaN : 0.5);
}
function c9(e12, t) {
  var r;
  return e12 > t && (r = e12, e12 = t, t = r), function(n) {
    return Math.max(e12, Math.min(t, n));
  };
}
function f9(e12, t, r) {
  var n = e12[0], i = e12[1], a = t[0], o = t[1];
  return i < n ? (n = ym(i, n), a = r(o, a)) : (n = ym(n, i), a = r(a, o)), function(s) {
    return a(n(s));
  };
}
function d9(e12, t, r) {
  var n = Math.min(e12.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e12[n] < e12[0] && (e12 = e12.slice().reverse(), t = t.slice().reverse()); ++o < n; ) i[o] = ym(e12[o], e12[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(s) {
    var l = Cl(e12, s, 1, n) - 1;
    return a[l](i[l](s));
  };
}
function Ml(e12, t) {
  return t.domain(e12.domain()).range(e12.range()).interpolate(e12.interpolate()).clamp(e12.clamp()).unknown(e12.unknown());
}
function nd() {
  var e12 = Wx, t = Wx, r = Ao, n, i, a, o = St, s, l, u;
  function f() {
    var d = Math.min(e12.length, t.length);
    return o !== St && (o = c9(e12[0], e12[d - 1])), s = d > 2 ? d9 : f9, l = u = null, c;
  }
  function c(d) {
    return d == null || isNaN(d = +d) ? a : (l || (l = s(e12.map(n), t, r)))(n(o(d)));
  }
  return c.invert = function(d) {
    return o(i((u || (u = s(t, e12.map(n), Ac)))(d)));
  }, c.domain = function(d) {
    return arguments.length ? (e12 = Array.from(d, _c), f()) : e12.slice();
  }, c.range = function(d) {
    return arguments.length ? (t = Array.from(d), f()) : t.slice();
  }, c.rangeRound = function(d) {
    return t = Array.from(d), r = Vv, f();
  }, c.clamp = function(d) {
    return arguments.length ? (o = d ? true : St, f()) : o !== St;
  }, c.interpolate = function(d) {
    return arguments.length ? (r = d, f()) : r;
  }, c.unknown = function(d) {
    return arguments.length ? (a = d, c) : a;
  }, function(d, h) {
    return n = d, i = h, f();
  };
}
function Kv() {
  return nd()(St, St);
}
function p9(e12) {
  return Math.abs(e12 = Math.round(e12)) >= 1e21 ? e12.toLocaleString("en").replace(/,/g, "") : e12.toString(10);
}
function Ec(e12, t) {
  if (!isFinite(e12) || e12 === 0) return null;
  var r = (e12 = t ? e12.toExponential(t - 1) : e12.toExponential()).indexOf("e"), n = e12.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e12.slice(r + 1)];
}
function Ba(e12) {
  return e12 = Ec(Math.abs(e12)), e12 ? e12[1] : NaN;
}
function h9(e12, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, s = e12[0], l = 0; i > 0 && s > 0 && (l + s + 1 > n && (s = Math.max(1, n - l)), a.push(r.substring(i -= s, i + s)), !((l += s + 1) > n)); ) s = e12[o = (o + 1) % e12.length];
    return a.reverse().join(t);
  };
}
function m9(e12) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e12[+r];
    });
  };
}
var y9 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ys(e12) {
  if (!(t = y9.exec(e12))) throw new Error("invalid format: " + e12);
  var t;
  return new qv({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
}
Ys.prototype = qv.prototype;
function qv(e12) {
  this.fill = e12.fill === void 0 ? " " : e12.fill + "", this.align = e12.align === void 0 ? ">" : e12.align + "", this.sign = e12.sign === void 0 ? "-" : e12.sign + "", this.symbol = e12.symbol === void 0 ? "" : e12.symbol + "", this.zero = !!e12.zero, this.width = e12.width === void 0 ? void 0 : +e12.width, this.comma = !!e12.comma, this.precision = e12.precision === void 0 ? void 0 : +e12.precision, this.trim = !!e12.trim, this.type = e12.type === void 0 ? "" : e12.type + "";
}
qv.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function v9(e12) {
  e: for (var t = e12.length, r = 1, n = -1, i; r < t; ++r) switch (e12[r]) {
    case ".":
      n = i = r;
      break;
    case "0":
      n === 0 && (n = r), i = r;
      break;
    default:
      if (!+e12[r]) break e;
      n > 0 && (n = 0);
      break;
  }
  return n > 0 ? e12.slice(0, n) + e12.slice(i + 1) : e12;
}
var kc;
function g9(e12, t) {
  var r = Ec(e12, t);
  if (!r) return kc = void 0, e12.toPrecision(t);
  var n = r[0], i = r[1], a = i - (kc = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Ec(e12, Math.max(0, t + a - 1))[0];
}
function Hx(e12, t) {
  var r = Ec(e12, t);
  if (!r) return e12 + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Vx = { "%": (e12, t) => (e12 * 100).toFixed(t), b: (e12) => Math.round(e12).toString(2), c: (e12) => e12 + "", d: p9, e: (e12, t) => e12.toExponential(t), f: (e12, t) => e12.toFixed(t), g: (e12, t) => e12.toPrecision(t), o: (e12) => Math.round(e12).toString(8), p: (e12, t) => Hx(e12 * 100, t), r: Hx, s: g9, X: (e12) => Math.round(e12).toString(16).toUpperCase(), x: (e12) => Math.round(e12).toString(16) };
function Kx(e12) {
  return e12;
}
var qx = Array.prototype.map, Gx = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function b9(e12) {
  var t = e12.grouping === void 0 || e12.thousands === void 0 ? Kx : h9(qx.call(e12.grouping, Number), e12.thousands + ""), r = e12.currency === void 0 ? "" : e12.currency[0] + "", n = e12.currency === void 0 ? "" : e12.currency[1] + "", i = e12.decimal === void 0 ? "." : e12.decimal + "", a = e12.numerals === void 0 ? Kx : m9(qx.call(e12.numerals, String)), o = e12.percent === void 0 ? "%" : e12.percent + "", s = e12.minus === void 0 ? "\u2212" : e12.minus + "", l = e12.nan === void 0 ? "NaN" : e12.nan + "";
  function u(c, d) {
    c = Ys(c);
    var h = c.fill, y = c.align, v = c.sign, m = c.symbol, g = c.zero, b = c.width, x = c.comma, O = c.precision, w = c.trim, S = c.type;
    S === "n" ? (x = true, S = "g") : Vx[S] || (O === void 0 && (O = 12), w = true, S = "g"), (g || h === "0" && y === "=") && (g = true, h = "0", y = "=");
    var j = (d && d.prefix !== void 0 ? d.prefix : "") + (m === "$" ? r : m === "#" && /[boxX]/.test(S) ? "0" + S.toLowerCase() : ""), P = (m === "$" ? n : /[%p]/.test(S) ? o : "") + (d && d.suffix !== void 0 ? d.suffix : ""), k = Vx[S], T = /[defgprs%]/.test(S);
    O = O === void 0 ? 6 : /[gprs]/.test(S) ? Math.max(1, Math.min(21, O)) : Math.max(0, Math.min(20, O));
    function C($) {
      var L = j, R = P, D, B, W;
      if (S === "c") R = k($) + R, $ = "";
      else {
        $ = +$;
        var N = $ < 0 || 1 / $ < 0;
        if ($ = isNaN($) ? l : k(Math.abs($), O), w && ($ = v9($)), N && +$ == 0 && v !== "+" && (N = false), L = (N ? v === "(" ? v : s : v === "-" || v === "(" ? "" : v) + L, R = (S === "s" && !isNaN($) && kc !== void 0 ? Gx[8 + kc / 3] : "") + R + (N && v === "(" ? ")" : ""), T) {
          for (D = -1, B = $.length; ++D < B; ) if (W = $.charCodeAt(D), 48 > W || W > 57) {
            R = (W === 46 ? i + $.slice(D + 1) : $.slice(D)) + R, $ = $.slice(0, D);
            break;
          }
        }
      }
      x && !g && ($ = t($, 1 / 0));
      var F = L.length + $.length + R.length, U = F < b ? new Array(b - F + 1).join(h) : "";
      switch (x && g && ($ = t(U + $, U.length ? b - R.length : 1 / 0), U = ""), y) {
        case "<":
          $ = L + $ + R + U;
          break;
        case "=":
          $ = L + U + $ + R;
          break;
        case "^":
          $ = U.slice(0, F = U.length >> 1) + L + $ + R + U.slice(F);
          break;
        default:
          $ = U + L + $ + R;
          break;
      }
      return a($);
    }
    return C.toString = function() {
      return c + "";
    }, C;
  }
  function f(c, d) {
    var h = Math.max(-8, Math.min(8, Math.floor(Ba(d) / 3))) * 3, y = Math.pow(10, -h), v = u((c = Ys(c), c.type = "f", c), { suffix: Gx[8 + h / 3] });
    return function(m) {
      return v(y * m);
    };
  }
  return { format: u, formatPrefix: f };
}
var lu, Gv, IA;
x9({ thousands: ",", grouping: [3], currency: ["$", ""] });
function x9(e12) {
  return lu = b9(e12), Gv = lu.format, IA = lu.formatPrefix, lu;
}
function w9(e12) {
  return Math.max(0, -Ba(Math.abs(e12)));
}
function S9(e12, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ba(t) / 3))) * 3 - Ba(Math.abs(e12)));
}
function O9(e12, t) {
  return e12 = Math.abs(e12), t = Math.abs(t) - e12, Math.max(0, Ba(t) - Ba(e12)) + 1;
}
function RA(e12, t, r, n) {
  var i = dm(e12, t, r), a;
  switch (n = Ys(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e12), Math.abs(t));
      return n.precision == null && !isNaN(a = S9(i, o)) && (n.precision = a), IA(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = O9(i, Math.max(Math.abs(e12), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = w9(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Gv(n);
}
function Yn(e12) {
  var t = e12.domain;
  return e12.ticks = function(r) {
    var n = t();
    return cm(n[0], n[n.length - 1], r ?? 10);
  }, e12.tickFormat = function(r, n) {
    var i = t();
    return RA(i[0], i[i.length - 1], r ?? 10, n);
  }, e12.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], s = n[a], l, u, f = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); f-- > 0; ) {
      if (u = fm(o, s, r), u === l) return n[i] = o, n[a] = s, t(n);
      if (u > 0) o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0) o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else break;
      l = u;
    }
    return e12;
  }, e12;
}
function Tc() {
  var e12 = Kv();
  return e12.copy = function() {
    return Ml(e12, Tc());
  }, sr.apply(e12, arguments), Yn(e12);
}
function DA(e12) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e12 = Array.from(n, _c), r) : e12.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return DA(e12).unknown(t);
  }, e12 = arguments.length ? Array.from(e12, _c) : [0, 1], Yn(r);
}
function LA(e12, t) {
  e12 = e12.slice();
  var r = 0, n = e12.length - 1, i = e12[r], a = e12[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e12[r] = t.floor(i), e12[n] = t.ceil(a), e12;
}
function Xx(e12) {
  return Math.log(e12);
}
function Yx(e12) {
  return Math.exp(e12);
}
function j9(e12) {
  return -Math.log(-e12);
}
function P9(e12) {
  return -Math.exp(-e12);
}
function A9(e12) {
  return isFinite(e12) ? +("1e" + e12) : e12 < 0 ? 0 : e12;
}
function _9(e12) {
  return e12 === 10 ? A9 : e12 === Math.E ? Math.exp : (t) => Math.pow(e12, t);
}
function E9(e12) {
  return e12 === Math.E ? Math.log : e12 === 10 && Math.log10 || e12 === 2 && Math.log2 || (e12 = Math.log(e12), (t) => Math.log(t) / e12);
}
function Qx(e12) {
  return (t, r) => -e12(-t, r);
}
function Xv(e12) {
  const t = e12(Xx, Yx), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = E9(n), a = _9(n), r()[0] < 0 ? (i = Qx(i), a = Qx(a), e12(j9, P9)) : e12(Xx, Yx), t;
  }
  return t.base = function(s) {
    return arguments.length ? (n = +s, o()) : n;
  }, t.domain = function(s) {
    return arguments.length ? (r(s), o()) : r();
  }, t.ticks = (s) => {
    const l = r();
    let u = l[0], f = l[l.length - 1];
    const c = f < u;
    c && ([u, f] = [f, u]);
    let d = i(u), h = i(f), y, v;
    const m = s == null ? 10 : +s;
    let g = [];
    if (!(n % 1) && h - d < m) {
      if (d = Math.floor(d), h = Math.ceil(h), u > 0) {
        for (; d <= h; ++d) for (y = 1; y < n; ++y) if (v = d < 0 ? y / a(-d) : y * a(d), !(v < u)) {
          if (v > f) break;
          g.push(v);
        }
      } else for (; d <= h; ++d) for (y = n - 1; y >= 1; --y) if (v = d > 0 ? y / a(-d) : y * a(d), !(v < u)) {
        if (v > f) break;
        g.push(v);
      }
      g.length * 2 < m && (g = cm(u, f, m));
    } else g = cm(d, h, Math.min(h - d, m)).map(a);
    return c ? g.reverse() : g;
  }, t.tickFormat = (s, l) => {
    if (s == null && (s = 10), l == null && (l = n === 10 ? "s" : ","), typeof l != "function" && (!(n % 1) && (l = Ys(l)).precision == null && (l.trim = true), l = Gv(l)), s === 1 / 0) return l;
    const u = Math.max(1, n * s / t.ticks().length);
    return (f) => {
      let c = f / a(Math.round(i(f)));
      return c * n < n - 0.5 && (c *= n), c <= u ? l(f) : "";
    };
  }, t.nice = () => r(LA(r(), { floor: (s) => a(Math.floor(i(s))), ceil: (s) => a(Math.ceil(i(s))) })), t;
}
function BA() {
  const e12 = Xv(nd()).domain([1, 10]);
  return e12.copy = () => Ml(e12, BA()).base(e12.base()), sr.apply(e12, arguments), e12;
}
function Jx(e12) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e12));
  };
}
function Zx(e12) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e12;
  };
}
function Yv(e12) {
  var t = 1, r = e12(Jx(t), Zx(t));
  return r.constant = function(n) {
    return arguments.length ? e12(Jx(t = +n), Zx(t)) : t;
  }, Yn(r);
}
function zA() {
  var e12 = Yv(nd());
  return e12.copy = function() {
    return Ml(e12, zA()).constant(e12.constant());
  }, sr.apply(e12, arguments);
}
function e1(e12) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e12) : Math.pow(t, e12);
  };
}
function k9(e12) {
  return e12 < 0 ? -Math.sqrt(-e12) : Math.sqrt(e12);
}
function T9(e12) {
  return e12 < 0 ? -e12 * e12 : e12 * e12;
}
function Qv(e12) {
  var t = e12(St, St), r = 1;
  function n() {
    return r === 1 ? e12(St, St) : r === 0.5 ? e12(k9, T9) : e12(e1(r), e1(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, Yn(t);
}
function Jv() {
  var e12 = Qv(nd());
  return e12.copy = function() {
    return Ml(e12, Jv()).exponent(e12.exponent());
  }, sr.apply(e12, arguments), e12;
}
function $9() {
  return Jv.apply(null, arguments).exponent(0.5);
}
function t1(e12) {
  return Math.sign(e12) * e12 * e12;
}
function C9(e12) {
  return Math.sign(e12) * Math.sqrt(Math.abs(e12));
}
function FA() {
  var e12 = Kv(), t = [0, 1], r = false, n;
  function i(a) {
    var o = C9(e12(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e12.invert(t1(a));
  }, i.domain = function(a) {
    return arguments.length ? (e12.domain(a), i) : e12.domain();
  }, i.range = function(a) {
    return arguments.length ? (e12.range((t = Array.from(a, _c)).map(t1)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(true);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e12.clamp(a), i) : e12.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return FA(e12.domain(), t).round(r).clamp(e12.clamp()).unknown(n);
  }, sr.apply(i, arguments), Yn(i);
}
function UA() {
  var e12 = [], t = [], r = [], n;
  function i() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = D7(e12, o / s);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[Cl(r, o)];
  }
  return a.invertExtent = function(o) {
    var s = t.indexOf(o);
    return s < 0 ? [NaN, NaN] : [s > 0 ? r[s - 1] : e12[0], s < r.length ? r[s] : e12[e12.length - 1]];
  }, a.domain = function(o) {
    if (!arguments.length) return e12.slice();
    e12 = [];
    for (let s of o) s != null && !isNaN(s = +s) && e12.push(s);
    return e12.sort(Un), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return UA().domain(e12).range(t).unknown(n);
  }, sr.apply(a, arguments);
}
function WA() {
  var e12 = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(l) {
    return l != null && l <= l ? i[Cl(n, l, 0, r)] : a;
  }
  function s() {
    var l = -1;
    for (n = new Array(r); ++l < r; ) n[l] = ((l + 1) * t - (l - r) * e12) / (r + 1);
    return o;
  }
  return o.domain = function(l) {
    return arguments.length ? ([e12, t] = l, e12 = +e12, t = +t, s()) : [e12, t];
  }, o.range = function(l) {
    return arguments.length ? (r = (i = Array.from(l)).length - 1, s()) : i.slice();
  }, o.invertExtent = function(l) {
    var u = i.indexOf(l);
    return u < 0 ? [NaN, NaN] : u < 1 ? [e12, n[0]] : u >= r ? [n[r - 1], t] : [n[u - 1], n[u]];
  }, o.unknown = function(l) {
    return arguments.length && (a = l), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return WA().domain([e12, t]).range(i).unknown(a);
  }, sr.apply(Yn(o), arguments);
}
function HA() {
  var e12 = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[Cl(e12, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e12 = Array.from(a), n = Math.min(e12.length, t.length - 1), i) : e12.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e12.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e12[o - 1], e12[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return HA().domain(e12).range(t).unknown(r);
  }, sr.apply(i, arguments);
}
const bp = /* @__PURE__ */ new Date(), xp = /* @__PURE__ */ new Date();
function Ze(e12, t, r, n) {
  function i(a) {
    return e12(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e12(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e12(a = new Date(a - 1)), t(a, 1), e12(a), a), i.round = (a) => {
    const o = i(a), s = i.ceil(a);
    return a - o < s - a ? o : s;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, s) => {
    const l = [];
    if (a = i.ceil(a), s = s == null ? 1 : Math.floor(s), !(a < o) || !(s > 0)) return l;
    let u;
    do
      l.push(u = /* @__PURE__ */ new Date(+a)), t(a, s), e12(a);
    while (u < a && a < o);
    return l;
  }, i.filter = (a) => Ze((o) => {
    if (o >= o) for (; e12(o), !a(o); ) o.setTime(o - 1);
  }, (o, s) => {
    if (o >= o) if (s < 0) for (; ++s <= 0; ) for (; t(o, -1), !a(o); ) ;
    else for (; --s >= 0; ) for (; t(o, 1), !a(o); ) ;
  }), r && (i.count = (a, o) => (bp.setTime(+a), xp.setTime(+o), e12(bp), e12(xp), Math.floor(r(bp, xp))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const $c = Ze(() => {
}, (e12, t) => {
  e12.setTime(+e12 + t);
}, (e12, t) => t - e12);
$c.every = (e12) => (e12 = Math.floor(e12), !isFinite(e12) || !(e12 > 0) ? null : e12 > 1 ? Ze((t) => {
  t.setTime(Math.floor(t / e12) * e12);
}, (t, r) => {
  t.setTime(+t + r * e12);
}, (t, r) => (r - t) / e12) : $c);
$c.range;
const Kr = 1e3, er = Kr * 60, qr = er * 60, sn = qr * 24, Zv = sn * 7, r1 = sn * 30, wp = sn * 365, mi = Ze((e12) => {
  e12.setTime(e12 - e12.getMilliseconds());
}, (e12, t) => {
  e12.setTime(+e12 + t * Kr);
}, (e12, t) => (t - e12) / Kr, (e12) => e12.getUTCSeconds());
mi.range;
const eg = Ze((e12) => {
  e12.setTime(e12 - e12.getMilliseconds() - e12.getSeconds() * Kr);
}, (e12, t) => {
  e12.setTime(+e12 + t * er);
}, (e12, t) => (t - e12) / er, (e12) => e12.getMinutes());
eg.range;
const tg = Ze((e12) => {
  e12.setUTCSeconds(0, 0);
}, (e12, t) => {
  e12.setTime(+e12 + t * er);
}, (e12, t) => (t - e12) / er, (e12) => e12.getUTCMinutes());
tg.range;
const rg = Ze((e12) => {
  e12.setTime(e12 - e12.getMilliseconds() - e12.getSeconds() * Kr - e12.getMinutes() * er);
}, (e12, t) => {
  e12.setTime(+e12 + t * qr);
}, (e12, t) => (t - e12) / qr, (e12) => e12.getHours());
rg.range;
const ng = Ze((e12) => {
  e12.setUTCMinutes(0, 0, 0);
}, (e12, t) => {
  e12.setTime(+e12 + t * qr);
}, (e12, t) => (t - e12) / qr, (e12) => e12.getUTCHours());
ng.range;
const Il = Ze((e12) => e12.setHours(0, 0, 0, 0), (e12, t) => e12.setDate(e12.getDate() + t), (e12, t) => (t - e12 - (t.getTimezoneOffset() - e12.getTimezoneOffset()) * er) / sn, (e12) => e12.getDate() - 1);
Il.range;
const id = Ze((e12) => {
  e12.setUTCHours(0, 0, 0, 0);
}, (e12, t) => {
  e12.setUTCDate(e12.getUTCDate() + t);
}, (e12, t) => (t - e12) / sn, (e12) => e12.getUTCDate() - 1);
id.range;
const VA = Ze((e12) => {
  e12.setUTCHours(0, 0, 0, 0);
}, (e12, t) => {
  e12.setUTCDate(e12.getUTCDate() + t);
}, (e12, t) => (t - e12) / sn, (e12) => Math.floor(e12 / sn));
VA.range;
function zi(e12) {
  return Ze((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e12) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * er) / Zv);
}
const ad = zi(0), Cc = zi(1), N9 = zi(2), M9 = zi(3), za = zi(4), I9 = zi(5), R9 = zi(6);
ad.range;
Cc.range;
N9.range;
M9.range;
za.range;
I9.range;
R9.range;
function Fi(e12) {
  return Ze((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e12) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Zv);
}
const od = Fi(0), Nc = Fi(1), D9 = Fi(2), L9 = Fi(3), Fa = Fi(4), B9 = Fi(5), z9 = Fi(6);
od.range;
Nc.range;
D9.range;
L9.range;
Fa.range;
B9.range;
z9.range;
const ig = Ze((e12) => {
  e12.setDate(1), e12.setHours(0, 0, 0, 0);
}, (e12, t) => {
  e12.setMonth(e12.getMonth() + t);
}, (e12, t) => t.getMonth() - e12.getMonth() + (t.getFullYear() - e12.getFullYear()) * 12, (e12) => e12.getMonth());
ig.range;
const ag = Ze((e12) => {
  e12.setUTCDate(1), e12.setUTCHours(0, 0, 0, 0);
}, (e12, t) => {
  e12.setUTCMonth(e12.getUTCMonth() + t);
}, (e12, t) => t.getUTCMonth() - e12.getUTCMonth() + (t.getUTCFullYear() - e12.getUTCFullYear()) * 12, (e12) => e12.getUTCMonth());
ag.range;
const ln = Ze((e12) => {
  e12.setMonth(0, 1), e12.setHours(0, 0, 0, 0);
}, (e12, t) => {
  e12.setFullYear(e12.getFullYear() + t);
}, (e12, t) => t.getFullYear() - e12.getFullYear(), (e12) => e12.getFullYear());
ln.every = (e12) => !isFinite(e12 = Math.floor(e12)) || !(e12 > 0) ? null : Ze((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e12) * e12), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e12);
});
ln.range;
const un = Ze((e12) => {
  e12.setUTCMonth(0, 1), e12.setUTCHours(0, 0, 0, 0);
}, (e12, t) => {
  e12.setUTCFullYear(e12.getUTCFullYear() + t);
}, (e12, t) => t.getUTCFullYear() - e12.getUTCFullYear(), (e12) => e12.getUTCFullYear());
un.every = (e12) => !isFinite(e12 = Math.floor(e12)) || !(e12 > 0) ? null : Ze((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e12) * e12), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e12);
});
un.range;
function KA(e12, t, r, n, i, a) {
  const o = [[mi, 1, Kr], [mi, 5, 5 * Kr], [mi, 15, 15 * Kr], [mi, 30, 30 * Kr], [a, 1, er], [a, 5, 5 * er], [a, 15, 15 * er], [a, 30, 30 * er], [i, 1, qr], [i, 3, 3 * qr], [i, 6, 6 * qr], [i, 12, 12 * qr], [n, 1, sn], [n, 2, 2 * sn], [r, 1, Zv], [t, 1, r1], [t, 3, 3 * r1], [e12, 1, wp]];
  function s(u, f, c) {
    const d = f < u;
    d && ([u, f] = [f, u]);
    const h = c && typeof c.range == "function" ? c : l(u, f, c), y = h ? h.range(u, +f + 1) : [];
    return d ? y.reverse() : y;
  }
  function l(u, f, c) {
    const d = Math.abs(f - u) / c, h = Fv(([, , m]) => m).right(o, d);
    if (h === o.length) return e12.every(dm(u / wp, f / wp, c));
    if (h === 0) return $c.every(Math.max(dm(u, f, c), 1));
    const [y, v] = o[d / o[h - 1][2] < o[h][2] / d ? h - 1 : h];
    return y.every(v);
  }
  return [s, l];
}
const [F9, U9] = KA(un, ag, od, VA, ng, tg), [W9, H9] = KA(ln, ig, ad, Il, rg, eg);
function Sp(e12) {
  if (0 <= e12.y && e12.y < 100) {
    var t = new Date(-1, e12.m, e12.d, e12.H, e12.M, e12.S, e12.L);
    return t.setFullYear(e12.y), t;
  }
  return new Date(e12.y, e12.m, e12.d, e12.H, e12.M, e12.S, e12.L);
}
function Op(e12) {
  if (0 <= e12.y && e12.y < 100) {
    var t = new Date(Date.UTC(-1, e12.m, e12.d, e12.H, e12.M, e12.S, e12.L));
    return t.setUTCFullYear(e12.y), t;
  }
  return new Date(Date.UTC(e12.y, e12.m, e12.d, e12.H, e12.M, e12.S, e12.L));
}
function Uo(e12, t, r) {
  return { y: e12, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function V9(e12) {
  var t = e12.dateTime, r = e12.date, n = e12.time, i = e12.periods, a = e12.days, o = e12.shortDays, s = e12.months, l = e12.shortMonths, u = Wo(i), f = Ho(i), c = Wo(a), d = Ho(a), h = Wo(o), y = Ho(o), v = Wo(s), m = Ho(s), g = Wo(l), b = Ho(l), x = { a: W, A: N, b: F, B: U, c: null, d: l1, e: l1, f: hW, g: jW, G: AW, H: fW, I: dW, j: pW, L: qA, m: mW, M: yW, p: X, q: V, Q: f1, s: d1, S: vW, u: gW, U: bW, V: xW, w: wW, W: SW, x: null, X: null, y: OW, Y: PW, Z: _W, "%": c1 }, O = { a: Q, A: oe, b: fe, B: we, c: null, d: u1, e: u1, f: $W, g: FW, G: WW, H: EW, I: kW, j: TW, L: XA, m: CW, M: NW, p: Ke, q: K, Q: f1, s: d1, S: MW, u: IW, U: RW, V: DW, w: LW, W: BW, x: null, X: null, y: zW, Y: UW, Z: HW, "%": c1 }, w = { a: T, A: C, b: $, B: L, c: R, d: o1, e: o1, f: sW, g: a1, G: i1, H: s1, I: s1, j: nW, L: oW, m: rW, M: iW, p: k, q: tW, Q: uW, s: cW, S: aW, u: Y9, U: Q9, V: J9, w: X9, W: Z9, x: D, X: B, y: a1, Y: i1, Z: eW, "%": lW };
  x.x = S(r, x), x.X = S(n, x), x.c = S(t, x), O.x = S(r, O), O.X = S(n, O), O.c = S(t, O);
  function S(_, H) {
    return function(Y) {
      var M = [], te = -1, re = 0, ue = _.length, ye, at, lr;
      for (Y instanceof Date || (Y = /* @__PURE__ */ new Date(+Y)); ++te < ue; ) _.charCodeAt(te) === 37 && (M.push(_.slice(re, te)), (at = n1[ye = _.charAt(++te)]) != null ? ye = _.charAt(++te) : at = ye === "e" ? " " : "0", (lr = H[ye]) && (ye = lr(Y, at)), M.push(ye), re = te + 1);
      return M.push(_.slice(re, te)), M.join("");
    };
  }
  function j(_, H) {
    return function(Y) {
      var M = Uo(1900, void 0, 1), te = P(M, _, Y += "", 0), re, ue;
      if (te != Y.length) return null;
      if ("Q" in M) return new Date(M.Q);
      if ("s" in M) return new Date(M.s * 1e3 + ("L" in M ? M.L : 0));
      if (H && !("Z" in M) && (M.Z = 0), "p" in M && (M.H = M.H % 12 + M.p * 12), M.m === void 0 && (M.m = "q" in M ? M.q : 0), "V" in M) {
        if (M.V < 1 || M.V > 53) return null;
        "w" in M || (M.w = 1), "Z" in M ? (re = Op(Uo(M.y, 0, 1)), ue = re.getUTCDay(), re = ue > 4 || ue === 0 ? Nc.ceil(re) : Nc(re), re = id.offset(re, (M.V - 1) * 7), M.y = re.getUTCFullYear(), M.m = re.getUTCMonth(), M.d = re.getUTCDate() + (M.w + 6) % 7) : (re = Sp(Uo(M.y, 0, 1)), ue = re.getDay(), re = ue > 4 || ue === 0 ? Cc.ceil(re) : Cc(re), re = Il.offset(re, (M.V - 1) * 7), M.y = re.getFullYear(), M.m = re.getMonth(), M.d = re.getDate() + (M.w + 6) % 7);
      } else ("W" in M || "U" in M) && ("w" in M || (M.w = "u" in M ? M.u % 7 : "W" in M ? 1 : 0), ue = "Z" in M ? Op(Uo(M.y, 0, 1)).getUTCDay() : Sp(Uo(M.y, 0, 1)).getDay(), M.m = 0, M.d = "W" in M ? (M.w + 6) % 7 + M.W * 7 - (ue + 5) % 7 : M.w + M.U * 7 - (ue + 6) % 7);
      return "Z" in M ? (M.H += M.Z / 100 | 0, M.M += M.Z % 100, Op(M)) : Sp(M);
    };
  }
  function P(_, H, Y, M) {
    for (var te = 0, re = H.length, ue = Y.length, ye, at; te < re; ) {
      if (M >= ue) return -1;
      if (ye = H.charCodeAt(te++), ye === 37) {
        if (ye = H.charAt(te++), at = w[ye in n1 ? H.charAt(te++) : ye], !at || (M = at(_, Y, M)) < 0) return -1;
      } else if (ye != Y.charCodeAt(M++)) return -1;
    }
    return M;
  }
  function k(_, H, Y) {
    var M = u.exec(H.slice(Y));
    return M ? (_.p = f.get(M[0].toLowerCase()), Y + M[0].length) : -1;
  }
  function T(_, H, Y) {
    var M = h.exec(H.slice(Y));
    return M ? (_.w = y.get(M[0].toLowerCase()), Y + M[0].length) : -1;
  }
  function C(_, H, Y) {
    var M = c.exec(H.slice(Y));
    return M ? (_.w = d.get(M[0].toLowerCase()), Y + M[0].length) : -1;
  }
  function $(_, H, Y) {
    var M = g.exec(H.slice(Y));
    return M ? (_.m = b.get(M[0].toLowerCase()), Y + M[0].length) : -1;
  }
  function L(_, H, Y) {
    var M = v.exec(H.slice(Y));
    return M ? (_.m = m.get(M[0].toLowerCase()), Y + M[0].length) : -1;
  }
  function R(_, H, Y) {
    return P(_, t, H, Y);
  }
  function D(_, H, Y) {
    return P(_, r, H, Y);
  }
  function B(_, H, Y) {
    return P(_, n, H, Y);
  }
  function W(_) {
    return o[_.getDay()];
  }
  function N(_) {
    return a[_.getDay()];
  }
  function F(_) {
    return l[_.getMonth()];
  }
  function U(_) {
    return s[_.getMonth()];
  }
  function X(_) {
    return i[+(_.getHours() >= 12)];
  }
  function V(_) {
    return 1 + ~~(_.getMonth() / 3);
  }
  function Q(_) {
    return o[_.getUTCDay()];
  }
  function oe(_) {
    return a[_.getUTCDay()];
  }
  function fe(_) {
    return l[_.getUTCMonth()];
  }
  function we(_) {
    return s[_.getUTCMonth()];
  }
  function Ke(_) {
    return i[+(_.getUTCHours() >= 12)];
  }
  function K(_) {
    return 1 + ~~(_.getUTCMonth() / 3);
  }
  return { format: function(_) {
    var H = S(_ += "", x);
    return H.toString = function() {
      return _;
    }, H;
  }, parse: function(_) {
    var H = j(_ += "", false);
    return H.toString = function() {
      return _;
    }, H;
  }, utcFormat: function(_) {
    var H = S(_ += "", O);
    return H.toString = function() {
      return _;
    }, H;
  }, utcParse: function(_) {
    var H = j(_ += "", true);
    return H.toString = function() {
      return _;
    }, H;
  } };
}
var n1 = { "-": "", _: " ", 0: "0" }, it = /^\s*\d+/, K9 = /^%/, q9 = /[\\^$*+?|[\]().{}]/g;
function me(e12, t, r) {
  var n = e12 < 0 ? "-" : "", i = (n ? -e12 : e12) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function G9(e12) {
  return e12.replace(q9, "\\$&");
}
function Wo(e12) {
  return new RegExp("^(?:" + e12.map(G9).join("|") + ")", "i");
}
function Ho(e12) {
  return new Map(e12.map((t, r) => [t.toLowerCase(), r]));
}
function X9(e12, t, r) {
  var n = it.exec(t.slice(r, r + 1));
  return n ? (e12.w = +n[0], r + n[0].length) : -1;
}
function Y9(e12, t, r) {
  var n = it.exec(t.slice(r, r + 1));
  return n ? (e12.u = +n[0], r + n[0].length) : -1;
}
function Q9(e12, t, r) {
  var n = it.exec(t.slice(r, r + 2));
  return n ? (e12.U = +n[0], r + n[0].length) : -1;
}
function J9(e12, t, r) {
  var n = it.exec(t.slice(r, r + 2));
  return n ? (e12.V = +n[0], r + n[0].length) : -1;
}
function Z9(e12, t, r) {
  var n = it.exec(t.slice(r, r + 2));
  return n ? (e12.W = +n[0], r + n[0].length) : -1;
}
function i1(e12, t, r) {
  var n = it.exec(t.slice(r, r + 4));
  return n ? (e12.y = +n[0], r + n[0].length) : -1;
}
function a1(e12, t, r) {
  var n = it.exec(t.slice(r, r + 2));
  return n ? (e12.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function eW(e12, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e12.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function tW(e12, t, r) {
  var n = it.exec(t.slice(r, r + 1));
  return n ? (e12.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function rW(e12, t, r) {
  var n = it.exec(t.slice(r, r + 2));
  return n ? (e12.m = n[0] - 1, r + n[0].length) : -1;
}
function o1(e12, t, r) {
  var n = it.exec(t.slice(r, r + 2));
  return n ? (e12.d = +n[0], r + n[0].length) : -1;
}
function nW(e12, t, r) {
  var n = it.exec(t.slice(r, r + 3));
  return n ? (e12.m = 0, e12.d = +n[0], r + n[0].length) : -1;
}
function s1(e12, t, r) {
  var n = it.exec(t.slice(r, r + 2));
  return n ? (e12.H = +n[0], r + n[0].length) : -1;
}
function iW(e12, t, r) {
  var n = it.exec(t.slice(r, r + 2));
  return n ? (e12.M = +n[0], r + n[0].length) : -1;
}
function aW(e12, t, r) {
  var n = it.exec(t.slice(r, r + 2));
  return n ? (e12.S = +n[0], r + n[0].length) : -1;
}
function oW(e12, t, r) {
  var n = it.exec(t.slice(r, r + 3));
  return n ? (e12.L = +n[0], r + n[0].length) : -1;
}
function sW(e12, t, r) {
  var n = it.exec(t.slice(r, r + 6));
  return n ? (e12.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function lW(e12, t, r) {
  var n = K9.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function uW(e12, t, r) {
  var n = it.exec(t.slice(r));
  return n ? (e12.Q = +n[0], r + n[0].length) : -1;
}
function cW(e12, t, r) {
  var n = it.exec(t.slice(r));
  return n ? (e12.s = +n[0], r + n[0].length) : -1;
}
function l1(e12, t) {
  return me(e12.getDate(), t, 2);
}
function fW(e12, t) {
  return me(e12.getHours(), t, 2);
}
function dW(e12, t) {
  return me(e12.getHours() % 12 || 12, t, 2);
}
function pW(e12, t) {
  return me(1 + Il.count(ln(e12), e12), t, 3);
}
function qA(e12, t) {
  return me(e12.getMilliseconds(), t, 3);
}
function hW(e12, t) {
  return qA(e12, t) + "000";
}
function mW(e12, t) {
  return me(e12.getMonth() + 1, t, 2);
}
function yW(e12, t) {
  return me(e12.getMinutes(), t, 2);
}
function vW(e12, t) {
  return me(e12.getSeconds(), t, 2);
}
function gW(e12) {
  var t = e12.getDay();
  return t === 0 ? 7 : t;
}
function bW(e12, t) {
  return me(ad.count(ln(e12) - 1, e12), t, 2);
}
function GA(e12) {
  var t = e12.getDay();
  return t >= 4 || t === 0 ? za(e12) : za.ceil(e12);
}
function xW(e12, t) {
  return e12 = GA(e12), me(za.count(ln(e12), e12) + (ln(e12).getDay() === 4), t, 2);
}
function wW(e12) {
  return e12.getDay();
}
function SW(e12, t) {
  return me(Cc.count(ln(e12) - 1, e12), t, 2);
}
function OW(e12, t) {
  return me(e12.getFullYear() % 100, t, 2);
}
function jW(e12, t) {
  return e12 = GA(e12), me(e12.getFullYear() % 100, t, 2);
}
function PW(e12, t) {
  return me(e12.getFullYear() % 1e4, t, 4);
}
function AW(e12, t) {
  var r = e12.getDay();
  return e12 = r >= 4 || r === 0 ? za(e12) : za.ceil(e12), me(e12.getFullYear() % 1e4, t, 4);
}
function _W(e12) {
  var t = e12.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + me(t / 60 | 0, "0", 2) + me(t % 60, "0", 2);
}
function u1(e12, t) {
  return me(e12.getUTCDate(), t, 2);
}
function EW(e12, t) {
  return me(e12.getUTCHours(), t, 2);
}
function kW(e12, t) {
  return me(e12.getUTCHours() % 12 || 12, t, 2);
}
function TW(e12, t) {
  return me(1 + id.count(un(e12), e12), t, 3);
}
function XA(e12, t) {
  return me(e12.getUTCMilliseconds(), t, 3);
}
function $W(e12, t) {
  return XA(e12, t) + "000";
}
function CW(e12, t) {
  return me(e12.getUTCMonth() + 1, t, 2);
}
function NW(e12, t) {
  return me(e12.getUTCMinutes(), t, 2);
}
function MW(e12, t) {
  return me(e12.getUTCSeconds(), t, 2);
}
function IW(e12) {
  var t = e12.getUTCDay();
  return t === 0 ? 7 : t;
}
function RW(e12, t) {
  return me(od.count(un(e12) - 1, e12), t, 2);
}
function YA(e12) {
  var t = e12.getUTCDay();
  return t >= 4 || t === 0 ? Fa(e12) : Fa.ceil(e12);
}
function DW(e12, t) {
  return e12 = YA(e12), me(Fa.count(un(e12), e12) + (un(e12).getUTCDay() === 4), t, 2);
}
function LW(e12) {
  return e12.getUTCDay();
}
function BW(e12, t) {
  return me(Nc.count(un(e12) - 1, e12), t, 2);
}
function zW(e12, t) {
  return me(e12.getUTCFullYear() % 100, t, 2);
}
function FW(e12, t) {
  return e12 = YA(e12), me(e12.getUTCFullYear() % 100, t, 2);
}
function UW(e12, t) {
  return me(e12.getUTCFullYear() % 1e4, t, 4);
}
function WW(e12, t) {
  var r = e12.getUTCDay();
  return e12 = r >= 4 || r === 0 ? Fa(e12) : Fa.ceil(e12), me(e12.getUTCFullYear() % 1e4, t, 4);
}
function HW() {
  return "+0000";
}
function c1() {
  return "%";
}
function f1(e12) {
  return +e12;
}
function d1(e12) {
  return Math.floor(+e12 / 1e3);
}
var Vi, QA, JA;
VW({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
function VW(e12) {
  return Vi = V9(e12), QA = Vi.format, Vi.parse, JA = Vi.utcFormat, Vi.utcParse, Vi;
}
function KW(e12) {
  return new Date(e12);
}
function qW(e12) {
  return e12 instanceof Date ? +e12 : +/* @__PURE__ */ new Date(+e12);
}
function og(e12, t, r, n, i, a, o, s, l, u) {
  var f = Kv(), c = f.invert, d = f.domain, h = u(".%L"), y = u(":%S"), v = u("%I:%M"), m = u("%I %p"), g = u("%a %d"), b = u("%b %d"), x = u("%B"), O = u("%Y");
  function w(S) {
    return (l(S) < S ? h : s(S) < S ? y : o(S) < S ? v : a(S) < S ? m : n(S) < S ? i(S) < S ? g : b : r(S) < S ? x : O)(S);
  }
  return f.invert = function(S) {
    return new Date(c(S));
  }, f.domain = function(S) {
    return arguments.length ? d(Array.from(S, qW)) : d().map(KW);
  }, f.ticks = function(S) {
    var j = d();
    return e12(j[0], j[j.length - 1], S ?? 10);
  }, f.tickFormat = function(S, j) {
    return j == null ? w : u(j);
  }, f.nice = function(S) {
    var j = d();
    return (!S || typeof S.range != "function") && (S = t(j[0], j[j.length - 1], S ?? 10)), S ? d(LA(j, S)) : f;
  }, f.copy = function() {
    return Ml(f, og(e12, t, r, n, i, a, o, s, l, u));
  }, f;
}
function GW() {
  return sr.apply(og(W9, H9, ln, ig, ad, Il, rg, eg, mi, QA).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function XW() {
  return sr.apply(og(F9, U9, un, ag, od, id, ng, tg, mi, JA).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function sd() {
  var e12 = 0, t = 1, r, n, i, a, o = St, s = false, l;
  function u(c) {
    return c == null || isNaN(c = +c) ? l : o(i === 0 ? 0.5 : (c = (a(c) - r) * i, s ? Math.max(0, Math.min(1, c)) : c));
  }
  u.domain = function(c) {
    return arguments.length ? ([e12, t] = c, r = a(e12 = +e12), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), u) : [e12, t];
  }, u.clamp = function(c) {
    return arguments.length ? (s = !!c, u) : s;
  }, u.interpolator = function(c) {
    return arguments.length ? (o = c, u) : o;
  };
  function f(c) {
    return function(d) {
      var h, y;
      return arguments.length ? ([h, y] = d, o = c(h, y), u) : [o(0), o(1)];
    };
  }
  return u.range = f(Ao), u.rangeRound = f(Vv), u.unknown = function(c) {
    return arguments.length ? (l = c, u) : l;
  }, function(c) {
    return a = c, r = c(e12), n = c(t), i = r === n ? 0 : 1 / (n - r), u;
  };
}
function Qn(e12, t) {
  return t.domain(e12.domain()).interpolator(e12.interpolator()).clamp(e12.clamp()).unknown(e12.unknown());
}
function ZA() {
  var e12 = Yn(sd()(St));
  return e12.copy = function() {
    return Qn(e12, ZA());
  }, mn.apply(e12, arguments);
}
function e_() {
  var e12 = Xv(sd()).domain([1, 10]);
  return e12.copy = function() {
    return Qn(e12, e_()).base(e12.base());
  }, mn.apply(e12, arguments);
}
function t_() {
  var e12 = Yv(sd());
  return e12.copy = function() {
    return Qn(e12, t_()).constant(e12.constant());
  }, mn.apply(e12, arguments);
}
function sg() {
  var e12 = Qv(sd());
  return e12.copy = function() {
    return Qn(e12, sg()).exponent(e12.exponent());
  }, mn.apply(e12, arguments);
}
function YW() {
  return sg.apply(null, arguments).exponent(0.5);
}
function r_() {
  var e12 = [], t = St;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Cl(e12, n, 1) - 1) / (e12.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e12.slice();
    e12 = [];
    for (let i of n) i != null && !isNaN(i = +i) && e12.push(i);
    return e12.sort(Un), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e12.map((n, i) => t(i / (e12.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => R7(e12, a / n));
  }, r.copy = function() {
    return r_(t).domain(e12);
  }, mn.apply(r, arguments);
}
function ld() {
  var e12 = 0, t = 0.5, r = 1, n = 1, i, a, o, s, l, u = St, f, c = false, d;
  function h(v) {
    return isNaN(v = +v) ? d : (v = 0.5 + ((v = +f(v)) - a) * (n * v < n * a ? s : l), u(c ? Math.max(0, Math.min(1, v)) : v));
  }
  h.domain = function(v) {
    return arguments.length ? ([e12, t, r] = v, i = f(e12 = +e12), a = f(t = +t), o = f(r = +r), s = i === a ? 0 : 0.5 / (a - i), l = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, h) : [e12, t, r];
  }, h.clamp = function(v) {
    return arguments.length ? (c = !!v, h) : c;
  }, h.interpolator = function(v) {
    return arguments.length ? (u = v, h) : u;
  };
  function y(v) {
    return function(m) {
      var g, b, x;
      return arguments.length ? ([g, b, x] = m, u = l9(v, [g, b, x]), h) : [u(0), u(0.5), u(1)];
    };
  }
  return h.range = y(Ao), h.rangeRound = y(Vv), h.unknown = function(v) {
    return arguments.length ? (d = v, h) : d;
  }, function(v) {
    return f = v, i = v(e12), a = v(t), o = v(r), s = i === a ? 0 : 0.5 / (a - i), l = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, h;
  };
}
function n_() {
  var e12 = Yn(ld()(St));
  return e12.copy = function() {
    return Qn(e12, n_());
  }, mn.apply(e12, arguments);
}
function i_() {
  var e12 = Xv(ld()).domain([0.1, 1, 10]);
  return e12.copy = function() {
    return Qn(e12, i_()).base(e12.base());
  }, mn.apply(e12, arguments);
}
function a_() {
  var e12 = Yv(ld());
  return e12.copy = function() {
    return Qn(e12, a_()).constant(e12.constant());
  }, mn.apply(e12, arguments);
}
function lg() {
  var e12 = Qv(ld());
  return e12.copy = function() {
    return Qn(e12, lg()).exponent(e12.exponent());
  }, mn.apply(e12, arguments);
}
function QW() {
  return lg.apply(null, arguments).exponent(0.5);
}
const p1 = Object.freeze(Object.defineProperty({ __proto__: null, scaleBand: Ks, scaleDiverging: n_, scaleDivergingLog: i_, scaleDivergingPow: lg, scaleDivergingSqrt: QW, scaleDivergingSymlog: a_, scaleIdentity: DA, scaleImplicit: pm, scaleLinear: Tc, scaleLog: BA, scaleOrdinal: Uv, scalePoint: hs, scalePow: Jv, scaleQuantile: UA, scaleQuantize: WA, scaleRadial: FA, scaleSequential: ZA, scaleSequentialLog: e_, scaleSequentialPow: sg, scaleSequentialQuantile: r_, scaleSequentialSqrt: YW, scaleSequentialSymlog: t_, scaleSqrt: $9, scaleSymlog: zA, scaleThreshold: HA, scaleTime: GW, scaleUtc: XW, tickFormat: RA }, Symbol.toStringTag, { value: "Module" }));
var JW = yo;
function ZW(e12, t, r) {
  for (var n = -1, i = e12.length; ++n < i; ) {
    var a = e12[n], o = t(a);
    if (o != null && (s === void 0 ? o === o && !JW(o) : r(o, s))) var s = o, l = a;
  }
  return l;
}
var ud = ZW;
function eH(e12, t) {
  return e12 > t;
}
var o_ = eH, tH = ud, rH = o_, nH = Po;
function iH(e12) {
  return e12 && e12.length ? tH(e12, nH, rH) : void 0;
}
var aH = iH;
const $n = be(aH);
function oH(e12, t) {
  return e12 < t;
}
var s_ = oH, sH = ud, lH = s_, uH = Po;
function cH(e12) {
  return e12 && e12.length ? sH(e12, uH, lH) : void 0;
}
var fH = cH;
const cd = be(fH);
var dH = Sv, pH = Lr, hH = yA, mH = It;
function yH(e12, t) {
  var r = mH(e12) ? dH : hH;
  return r(e12, pH(t));
}
var vH = yH, gH = hA, bH = vH;
function xH(e12, t) {
  return gH(bH(e12, t), 1);
}
var wH = xH;
const SH = be(wH);
var OH = Dv;
function jH(e12, t) {
  return OH(e12, t);
}
var PH = jH;
const Ua = be(PH);
var _o = 1e9, AH = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" }, cg, Me = true, ar = "[DecimalError] ", Oi = ar + "Invalid argument: ", ug = ar + "Exponent out of range: ", Eo = Math.floor, si = Math.pow, _H = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Bt, et = 1e7, Te = 7, l_ = 9007199254740991, Mc = Eo(l_ / Te), Z = {};
Z.absoluteValue = Z.abs = function() {
  var e12 = new this.constructor(this);
  return e12.s && (e12.s = 1), e12;
};
Z.comparedTo = Z.cmp = function(e12) {
  var t, r, n, i, a = this;
  if (e12 = new a.constructor(e12), a.s !== e12.s) return a.s || -e12.s;
  if (a.e !== e12.e) return a.e > e12.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e12.d.length, t = 0, r = n < i ? n : i; t < r; ++t) if (a.d[t] !== e12.d[t]) return a.d[t] > e12.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
Z.decimalPlaces = Z.dp = function() {
  var e12 = this, t = e12.d.length - 1, r = (t - e12.e) * Te;
  if (t = e12.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
Z.dividedBy = Z.div = function(e12) {
  return Jr(this, new this.constructor(e12));
};
Z.dividedToIntegerBy = Z.idiv = function(e12) {
  var t = this, r = t.constructor;
  return Oe(Jr(t, new r(e12), 0, 1), r.precision);
};
Z.equals = Z.eq = function(e12) {
  return !this.cmp(e12);
};
Z.exponent = function() {
  return Ve(this);
};
Z.greaterThan = Z.gt = function(e12) {
  return this.cmp(e12) > 0;
};
Z.greaterThanOrEqualTo = Z.gte = function(e12) {
  return this.cmp(e12) >= 0;
};
Z.isInteger = Z.isint = function() {
  return this.e > this.d.length - 2;
};
Z.isNegative = Z.isneg = function() {
  return this.s < 0;
};
Z.isPositive = Z.ispos = function() {
  return this.s > 0;
};
Z.isZero = function() {
  return this.s === 0;
};
Z.lessThan = Z.lt = function(e12) {
  return this.cmp(e12) < 0;
};
Z.lessThanOrEqualTo = Z.lte = function(e12) {
  return this.cmp(e12) < 1;
};
Z.logarithm = Z.log = function(e12) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e12 === void 0) e12 = new n(10);
  else if (e12 = new n(e12), e12.s < 1 || e12.eq(Bt)) throw Error(ar + "NaN");
  if (r.s < 1) throw Error(ar + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Bt) ? new n(0) : (Me = false, t = Jr(Qs(r, a), Qs(e12, a), a), Me = true, Oe(t, i));
};
Z.minus = Z.sub = function(e12) {
  var t = this;
  return e12 = new t.constructor(e12), t.s == e12.s ? f_(t, e12) : u_(t, (e12.s = -e12.s, e12));
};
Z.modulo = Z.mod = function(e12) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e12 = new n(e12), !e12.s) throw Error(ar + "NaN");
  return r.s ? (Me = false, t = Jr(r, e12, 0, 1).times(e12), Me = true, r.minus(t)) : Oe(new n(r), i);
};
Z.naturalExponential = Z.exp = function() {
  return c_(this);
};
Z.naturalLogarithm = Z.ln = function() {
  return Qs(this);
};
Z.negated = Z.neg = function() {
  var e12 = new this.constructor(this);
  return e12.s = -e12.s || 0, e12;
};
Z.plus = Z.add = function(e12) {
  var t = this;
  return e12 = new t.constructor(e12), t.s == e12.s ? u_(t, e12) : f_(t, (e12.s = -e12.s, e12));
};
Z.precision = Z.sd = function(e12) {
  var t, r, n, i = this;
  if (e12 !== void 0 && e12 !== !!e12 && e12 !== 1 && e12 !== 0) throw Error(Oi + e12);
  if (t = Ve(i) + 1, n = i.d.length - 1, r = n * Te + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e12 && t > r ? t : r;
};
Z.squareRoot = Z.sqrt = function() {
  var e12, t, r, n, i, a, o, s = this, l = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new l(0);
    throw Error(ar + "NaN");
  }
  for (e12 = Ve(s), Me = false, i = Math.sqrt(+s), i == 0 || i == 1 / 0 ? (t = Er(s.d), (t.length + e12) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e12 = Eo((e12 + 1) / 2) - (e12 < 0 || e12 % 2), i == 1 / 0 ? t = "5e" + e12 : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e12), n = new l(t)) : n = new l(i.toString()), r = l.precision, i = o = r + 3; ; ) if (a = n, n = a.plus(Jr(s, a, o + 2)).times(0.5), Er(a.d).slice(0, o) === (t = Er(n.d)).slice(0, o)) {
    if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
      if (Oe(a, r + 1, 0), a.times(a).eq(s)) {
        n = a;
        break;
      }
    } else if (t != "9999") break;
    o += 4;
  }
  return Me = true, Oe(n, r);
};
Z.times = Z.mul = function(e12) {
  var t, r, n, i, a, o, s, l, u, f = this, c = f.constructor, d = f.d, h = (e12 = new c(e12)).d;
  if (!f.s || !e12.s) return new c(0);
  for (e12.s *= f.s, r = f.e + e12.e, l = d.length, u = h.length, l < u && (a = d, d = h, h = a, o = l, l = u, u = o), a = [], o = l + u, n = o; n--; ) a.push(0);
  for (n = u; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; ) s = a[i] + h[n] * d[i - n - 1] + t, a[i--] = s % et | 0, t = s / et | 0;
    a[i] = (a[i] + t) % et | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e12.d = a, e12.e = r, Me ? Oe(e12, c.precision) : e12;
};
Z.toDecimalPlaces = Z.todp = function(e12, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e12 === void 0 ? r : (Ir(e12, 0, _o), t === void 0 ? t = n.rounding : Ir(t, 0, 8), Oe(r, e12 + Ve(r) + 1, t));
};
Z.toExponential = function(e12, t) {
  var r, n = this, i = n.constructor;
  return e12 === void 0 ? r = Ni(n, true) : (Ir(e12, 0, _o), t === void 0 ? t = i.rounding : Ir(t, 0, 8), n = Oe(new i(n), e12 + 1, t), r = Ni(n, true, e12 + 1)), r;
};
Z.toFixed = function(e12, t) {
  var r, n, i = this, a = i.constructor;
  return e12 === void 0 ? Ni(i) : (Ir(e12, 0, _o), t === void 0 ? t = a.rounding : Ir(t, 0, 8), n = Oe(new a(i), e12 + Ve(i) + 1, t), r = Ni(n.abs(), false, e12 + Ve(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
Z.toInteger = Z.toint = function() {
  var e12 = this, t = e12.constructor;
  return Oe(new t(e12), Ve(e12) + 1, t.rounding);
};
Z.toNumber = function() {
  return +this;
};
Z.toPower = Z.pow = function(e12) {
  var t, r, n, i, a, o, s = this, l = s.constructor, u = 12, f = +(e12 = new l(e12));
  if (!e12.s) return new l(Bt);
  if (s = new l(s), !s.s) {
    if (e12.s < 1) throw Error(ar + "Infinity");
    return s;
  }
  if (s.eq(Bt)) return s;
  if (n = l.precision, e12.eq(Bt)) return Oe(s, n);
  if (t = e12.e, r = e12.d.length - 1, o = t >= r, a = s.s, o) {
    if ((r = f < 0 ? -f : f) <= l_) {
      for (i = new l(Bt), t = Math.ceil(n / Te + 4), Me = false; r % 2 && (i = i.times(s), m1(i.d, t)), r = Eo(r / 2), r !== 0; ) s = s.times(s), m1(s.d, t);
      return Me = true, e12.s < 0 ? new l(Bt).div(i) : Oe(i, n);
    }
  } else if (a < 0) throw Error(ar + "NaN");
  return a = a < 0 && e12.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, Me = false, i = e12.times(Qs(s, n + u)), Me = true, i = c_(i), i.s = a, i;
};
Z.toPrecision = function(e12, t) {
  var r, n, i = this, a = i.constructor;
  return e12 === void 0 ? (r = Ve(i), n = Ni(i, r <= a.toExpNeg || r >= a.toExpPos)) : (Ir(e12, 1, _o), t === void 0 ? t = a.rounding : Ir(t, 0, 8), i = Oe(new a(i), e12, t), r = Ve(i), n = Ni(i, e12 <= r || r <= a.toExpNeg, e12)), n;
};
Z.toSignificantDigits = Z.tosd = function(e12, t) {
  var r = this, n = r.constructor;
  return e12 === void 0 ? (e12 = n.precision, t = n.rounding) : (Ir(e12, 1, _o), t === void 0 ? t = n.rounding : Ir(t, 0, 8)), Oe(new n(r), e12, t);
};
Z.toString = Z.valueOf = Z.val = Z.toJSON = Z[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e12 = this, t = Ve(e12), r = e12.constructor;
  return Ni(e12, t <= r.toExpNeg || t >= r.toExpPos);
};
function u_(e12, t) {
  var r, n, i, a, o, s, l, u, f = e12.constructor, c = f.precision;
  if (!e12.s || !t.s) return t.s || (t = new f(e12)), Me ? Oe(t, c) : t;
  if (l = e12.d, u = t.d, o = e12.e, i = t.e, l = l.slice(), a = o - i, a) {
    for (a < 0 ? (n = l, a = -a, s = u.length) : (n = u, i = o, s = l.length), o = Math.ceil(c / Te), s = o > s ? o + 1 : s + 1, a > s && (a = s, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (s = l.length, a = u.length, s - a < 0 && (a = s, n = u, u = l, l = n), r = 0; a; ) r = (l[--a] = l[a] + u[a] + r) / et | 0, l[a] %= et;
  for (r && (l.unshift(r), ++i), s = l.length; l[--s] == 0; ) l.pop();
  return t.d = l, t.e = i, Me ? Oe(t, c) : t;
}
function Ir(e12, t, r) {
  if (e12 !== ~~e12 || e12 < t || e12 > r) throw Error(Oi + e12);
}
function Er(e12) {
  var t, r, n, i = e12.length - 1, a = "", o = e12[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++) n = e12[t] + "", r = Te - n.length, r && (a += jn(r)), a += n;
    o = e12[t], n = o + "", r = Te - n.length, r && (a += jn(r));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var Jr = /* @__PURE__ */ function() {
  function e12(n, i) {
    var a, o = 0, s = n.length;
    for (n = n.slice(); s--; ) a = n[s] * i + o, n[s] = a % et | 0, o = a / et | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var s, l;
    if (a != o) l = a > o ? 1 : -1;
    else for (s = l = 0; s < a; s++) if (n[s] != i[s]) {
      l = n[s] > i[s] ? 1 : -1;
      break;
    }
    return l;
  }
  function r(n, i, a) {
    for (var o = 0; a--; ) n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * et + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var s, l, u, f, c, d, h, y, v, m, g, b, x, O, w, S, j, P, k = n.constructor, T = n.s == i.s ? 1 : -1, C = n.d, $ = i.d;
    if (!n.s) return new k(n);
    if (!i.s) throw Error(ar + "Division by zero");
    for (l = n.e - i.e, j = $.length, w = C.length, h = new k(T), y = h.d = [], u = 0; $[u] == (C[u] || 0); ) ++u;
    if ($[u] > (C[u] || 0) && --l, a == null ? b = a = k.precision : o ? b = a + (Ve(n) - Ve(i)) + 1 : b = a, b < 0) return new k(0);
    if (b = b / Te + 2 | 0, u = 0, j == 1) for (f = 0, $ = $[0], b++; (u < w || f) && b--; u++) x = f * et + (C[u] || 0), y[u] = x / $ | 0, f = x % $ | 0;
    else {
      for (f = et / ($[0] + 1) | 0, f > 1 && ($ = e12($, f), C = e12(C, f), j = $.length, w = C.length), O = j, v = C.slice(0, j), m = v.length; m < j; ) v[m++] = 0;
      P = $.slice(), P.unshift(0), S = $[0], $[1] >= et / 2 && ++S;
      do
        f = 0, s = t($, v, j, m), s < 0 ? (g = v[0], j != m && (g = g * et + (v[1] || 0)), f = g / S | 0, f > 1 ? (f >= et && (f = et - 1), c = e12($, f), d = c.length, m = v.length, s = t(c, v, d, m), s == 1 && (f--, r(c, j < d ? P : $, d))) : (f == 0 && (s = f = 1), c = $.slice()), d = c.length, d < m && c.unshift(0), r(v, c, m), s == -1 && (m = v.length, s = t($, v, j, m), s < 1 && (f++, r(v, j < m ? P : $, m))), m = v.length) : s === 0 && (f++, v = [0]), y[u++] = f, s && v[0] ? v[m++] = C[O] || 0 : (v = [C[O]], m = 1);
      while ((O++ < w || v[0] !== void 0) && b--);
    }
    return y[0] || y.shift(), h.e = l, Oe(h, o ? a + Ve(h) + 1 : a);
  };
}();
function c_(e12, t) {
  var r, n, i, a, o, s, l = 0, u = 0, f = e12.constructor, c = f.precision;
  if (Ve(e12) > 16) throw Error(ug + Ve(e12));
  if (!e12.s) return new f(Bt);
  for (Me = false, s = c, o = new f(0.03125); e12.abs().gte(0.1); ) e12 = e12.times(o), u += 5;
  for (n = Math.log(si(2, u)) / Math.LN10 * 2 + 5 | 0, s += n, r = i = a = new f(Bt), f.precision = s; ; ) {
    if (i = Oe(i.times(e12), s), r = r.times(++l), o = a.plus(Jr(i, r, s)), Er(o.d).slice(0, s) === Er(a.d).slice(0, s)) {
      for (; u--; ) a = Oe(a.times(a), s);
      return f.precision = c, t == null ? (Me = true, Oe(a, c)) : a;
    }
    a = o;
  }
}
function Ve(e12) {
  for (var t = e12.e * Te, r = e12.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function jp(e12, t, r) {
  if (t > e12.LN10.sd()) throw Me = true, r && (e12.precision = r), Error(ar + "LN10 precision limit exceeded");
  return Oe(new e12(e12.LN10), t);
}
function jn(e12) {
  for (var t = ""; e12--; ) t += "0";
  return t;
}
function Qs(e12, t) {
  var r, n, i, a, o, s, l, u, f, c = 1, d = 10, h = e12, y = h.d, v = h.constructor, m = v.precision;
  if (h.s < 1) throw Error(ar + (h.s ? "NaN" : "-Infinity"));
  if (h.eq(Bt)) return new v(0);
  if (t == null ? (Me = false, u = m) : u = t, h.eq(10)) return t == null && (Me = true), jp(v, u);
  if (u += d, v.precision = u, r = Er(y), n = r.charAt(0), a = Ve(h), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; ) h = h.times(e12), r = Er(h.d), n = r.charAt(0), c++;
    a = Ve(h), n > 1 ? (h = new v("0." + r), a++) : h = new v(n + "." + r.slice(1));
  } else return l = jp(v, u + 2, m).times(a + ""), h = Qs(new v(n + "." + r.slice(1)), u - d).plus(l), v.precision = m, t == null ? (Me = true, Oe(h, m)) : h;
  for (s = o = h = Jr(h.minus(Bt), h.plus(Bt), u), f = Oe(h.times(h), u), i = 3; ; ) {
    if (o = Oe(o.times(f), u), l = s.plus(Jr(o, new v(i), u)), Er(l.d).slice(0, u) === Er(s.d).slice(0, u)) return s = s.times(2), a !== 0 && (s = s.plus(jp(v, u + 2, m).times(a + ""))), s = Jr(s, new v(c), u), v.precision = m, t == null ? (Me = true, Oe(s, m)) : s;
    s = l, i += 2;
  }
}
function h1(e12, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e12.e = Eo(r / Te), e12.d = [], n = (r + 1) % Te, r < 0 && (n += Te), n < i) {
      for (n && e12.d.push(+t.slice(0, n)), i -= Te; n < i; ) e12.d.push(+t.slice(n, n += Te));
      t = t.slice(n), n = Te - t.length;
    } else n -= i;
    for (; n--; ) t += "0";
    if (e12.d.push(+t), Me && (e12.e > Mc || e12.e < -Mc)) throw Error(ug + r);
  } else e12.s = 0, e12.e = 0, e12.d = [0];
  return e12;
}
function Oe(e12, t, r) {
  var n, i, a, o, s, l, u, f, c = e12.d;
  for (o = 1, a = c[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0) n += Te, i = t, u = c[f = 0];
  else {
    if (f = Math.ceil((n + 1) / Te), a = c.length, f >= a) return e12;
    for (u = a = c[f], o = 1; a >= 10; a /= 10) o++;
    n %= Te, i = n - Te + o;
  }
  if (r !== void 0 && (a = si(10, o - i - 1), s = u / a % 10 | 0, l = t < 0 || c[f + 1] !== void 0 || u % a, l = r < 4 ? (s || l) && (r == 0 || r == (e12.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || l || r == 6 && (n > 0 ? i > 0 ? u / si(10, o - i) : 0 : c[f - 1]) % 10 & 1 || r == (e12.s < 0 ? 8 : 7))), t < 1 || !c[0]) return l ? (a = Ve(e12), c.length = 1, t = t - a - 1, c[0] = si(10, (Te - t % Te) % Te), e12.e = Eo(-t / Te) || 0) : (c.length = 1, c[0] = e12.e = e12.s = 0), e12;
  if (n == 0 ? (c.length = f, a = 1, f--) : (c.length = f + 1, a = si(10, Te - n), c[f] = i > 0 ? (u / si(10, o - i) % si(10, i) | 0) * a : 0), l) for (; ; ) if (f == 0) {
    (c[0] += a) == et && (c[0] = 1, ++e12.e);
    break;
  } else {
    if (c[f] += a, c[f] != et) break;
    c[f--] = 0, a = 1;
  }
  for (n = c.length; c[--n] === 0; ) c.pop();
  if (Me && (e12.e > Mc || e12.e < -Mc)) throw Error(ug + Ve(e12));
  return e12;
}
function f_(e12, t) {
  var r, n, i, a, o, s, l, u, f, c, d = e12.constructor, h = d.precision;
  if (!e12.s || !t.s) return t.s ? t.s = -t.s : t = new d(e12), Me ? Oe(t, h) : t;
  if (l = e12.d, c = t.d, n = t.e, u = e12.e, l = l.slice(), o = u - n, o) {
    for (f = o < 0, f ? (r = l, o = -o, s = c.length) : (r = c, n = u, s = l.length), i = Math.max(Math.ceil(h / Te), s) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = l.length, s = c.length, f = i < s, f && (s = i), i = 0; i < s; i++) if (l[i] != c[i]) {
      f = l[i] < c[i];
      break;
    }
    o = 0;
  }
  for (f && (r = l, l = c, c = r, t.s = -t.s), s = l.length, i = c.length - s; i > 0; --i) l[s++] = 0;
  for (i = c.length; i > o; ) {
    if (l[--i] < c[i]) {
      for (a = i; a && l[--a] === 0; ) l[a] = et - 1;
      --l[a], l[i] += et;
    }
    l[i] -= c[i];
  }
  for (; l[--s] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --n;
  return l[0] ? (t.d = l, t.e = n, Me ? Oe(t, h) : t) : new d(0);
}
function Ni(e12, t, r) {
  var n, i = Ve(e12), a = Er(e12.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + jn(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + jn(-i - 1) + a, r && (n = r - o) > 0 && (a += jn(n))) : i >= o ? (a += jn(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + jn(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += jn(n))), e12.s < 0 ? "-" + a : a;
}
function m1(e12, t) {
  if (e12.length > t) return e12.length = t, true;
}
function d_(e12) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0) throw Error(Oi + a);
      if (a > 0) o.s = 1;
      else if (a < 0) a = -a, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        o.e = 0, o.d = [a];
        return;
      }
      return h1(o, a.toString());
    } else if (typeof a != "string") throw Error(Oi + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, _H.test(a)) h1(o, a);
    else throw Error(Oi + a);
  }
  if (i.prototype = Z, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = d_, i.config = i.set = EH, e12 === void 0 && (e12 = {}), e12) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e12.hasOwnProperty(r = n[t++]) || (e12[r] = this[r]);
  return i.config(e12), i;
}
function EH(e12) {
  if (!e12 || typeof e12 != "object") throw Error(ar + "Object expected");
  var t, r, n, i = ["precision", 1, _o, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
  for (t = 0; t < i.length; t += 3) if ((n = e12[r = i[t]]) !== void 0) if (Eo(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
  else throw Error(Oi + r + ": " + n);
  if ((n = e12[r = "LN10"]) !== void 0) if (n == Math.LN10) this[r] = new this(n);
  else throw Error(Oi + r + ": " + n);
  return this;
}
var cg = d_(AH);
Bt = new cg(1);
const Se = cg;
function kH(e12) {
  return NH(e12) || CH(e12) || $H(e12) || TH();
}
function TH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $H(e12, t) {
  if (e12) {
    if (typeof e12 == "string") return vm(e12, t);
    var r = Object.prototype.toString.call(e12).slice(8, -1);
    if (r === "Object" && e12.constructor && (r = e12.constructor.name), r === "Map" || r === "Set") return Array.from(e12);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vm(e12, t);
  }
}
function CH(e12) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e12)) return Array.from(e12);
}
function NH(e12) {
  if (Array.isArray(e12)) return vm(e12);
}
function vm(e12, t) {
  (t == null || t > e12.length) && (t = e12.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e12[r];
  return n;
}
var MH = function(t) {
  return t;
}, p_ = {}, h_ = function(t) {
  return t === p_;
}, y1 = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && h_(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, IH = function e10(t, r) {
  return t === 1 ? r : y1(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    var o = i.filter(function(s) {
      return s !== p_;
    }).length;
    return o >= t ? r.apply(void 0, i) : e10(t - o, y1(function() {
      for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++) l[u] = arguments[u];
      var f = i.map(function(c) {
        return h_(c) ? l.shift() : c;
      });
      return r.apply(void 0, kH(f).concat(l));
    }));
  });
}, fd = function(t) {
  return IH(t.length, t);
}, gm = function(t, r) {
  for (var n = [], i = t; i < r; ++i) n[i - t] = i;
  return n;
}, RH = fd(function(e12, t) {
  return Array.isArray(t) ? t.map(e12) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e12);
}), DH = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  if (!r.length) return MH;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(s, l) {
      return l(s);
    }, a.apply(void 0, arguments));
  };
}, bm = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, m_ = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    return r && a.every(function(s, l) {
      return s === r[l];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function LH(e12) {
  var t;
  return e12 === 0 ? t = 1 : t = Math.floor(new Se(e12).abs().log(10).toNumber()) + 1, t;
}
function BH(e12, t, r) {
  for (var n = new Se(e12), i = 0, a = []; n.lt(t) && i < 1e5; ) a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var zH = fd(function(e12, t, r) {
  var n = +e12, i = +t;
  return n + r * (i - n);
}), FH = fd(function(e12, t, r) {
  var n = t - +e12;
  return n = n || 1 / 0, (r - e12) / n;
}), UH = fd(function(e12, t, r) {
  var n = t - +e12;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e12) / n));
});
const dd = { rangeStep: BH, getDigitCount: LH, interpolateNumber: zH, uninterpolateNumber: FH, uninterpolateTruncation: UH };
function xm(e12) {
  return VH(e12) || HH(e12) || y_(e12) || WH();
}
function WH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function HH(e12) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e12)) return Array.from(e12);
}
function VH(e12) {
  if (Array.isArray(e12)) return wm(e12);
}
function Js(e12, t) {
  return GH(e12) || qH(e12, t) || y_(e12, t) || KH();
}
function KH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function y_(e12, t) {
  if (e12) {
    if (typeof e12 == "string") return wm(e12, t);
    var r = Object.prototype.toString.call(e12).slice(8, -1);
    if (r === "Object" && e12.constructor && (r = e12.constructor.name), r === "Map" || r === "Set") return Array.from(e12);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return wm(e12, t);
  }
}
function wm(e12, t) {
  (t == null || t > e12.length) && (t = e12.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e12[r];
  return n;
}
function qH(e12, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e12)))) {
    var r = [], n = true, i = false, a = void 0;
    try {
      for (var o = e12[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = true) ;
    } catch (l) {
      i = true, a = l;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function GH(e12) {
  if (Array.isArray(e12)) return e12;
}
function v_(e12) {
  var t = Js(e12, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function g_(e12, t, r) {
  if (e12.lte(0)) return new Se(0);
  var n = dd.getDigitCount(e12.toNumber()), i = new Se(10).pow(n), a = e12.div(i), o = n !== 1 ? 0.05 : 0.1, s = new Se(Math.ceil(a.div(o).toNumber())).add(r).mul(o), l = s.mul(i);
  return t ? l : new Se(Math.ceil(l));
}
function XH(e12, t, r) {
  var n = 1, i = new Se(e12);
  if (!i.isint() && r) {
    var a = Math.abs(e12);
    a < 1 ? (n = new Se(10).pow(dd.getDigitCount(e12) - 1), i = new Se(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new Se(Math.floor(e12)));
  } else e12 === 0 ? i = new Se(Math.floor((t - 1) / 2)) : r || (i = new Se(Math.floor(e12)));
  var o = Math.floor((t - 1) / 2), s = DH(RH(function(l) {
    return i.add(new Se(l - o).mul(n)).toNumber();
  }), gm);
  return s(0, t);
}
function b_(e12, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e12) / (r - 1))) return { step: new Se(0), tickMin: new Se(0), tickMax: new Se(0) };
  var a = g_(new Se(t).sub(e12).div(r - 1), n, i), o;
  e12 <= 0 && t >= 0 ? o = new Se(0) : (o = new Se(e12).add(t).div(2), o = o.sub(new Se(o).mod(a)));
  var s = Math.ceil(o.sub(e12).div(a).toNumber()), l = Math.ceil(new Se(t).sub(o).div(a).toNumber()), u = s + l + 1;
  return u > r ? b_(e12, t, r, n, i + 1) : (u < r && (l = t > 0 ? l + (r - u) : l, s = t > 0 ? s : s + (r - u)), { step: a, tickMin: o.sub(new Se(s).mul(a)), tickMax: o.add(new Se(l).mul(a)) });
}
function YH(e12) {
  var t = Js(e12, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, o = Math.max(i, 2), s = v_([r, n]), l = Js(s, 2), u = l[0], f = l[1];
  if (u === -1 / 0 || f === 1 / 0) {
    var c = f === 1 / 0 ? [u].concat(xm(gm(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(xm(gm(0, i - 1).map(function() {
      return -1 / 0;
    })), [f]);
    return r > n ? bm(c) : c;
  }
  if (u === f) return XH(u, i, a);
  var d = b_(u, f, o, a), h = d.step, y = d.tickMin, v = d.tickMax, m = dd.rangeStep(y, v.add(new Se(0.1).mul(h)), h);
  return r > n ? bm(m) : m;
}
function QH(e12, t) {
  var r = Js(e12, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, o = v_([n, i]), s = Js(o, 2), l = s[0], u = s[1];
  if (l === -1 / 0 || u === 1 / 0) return [n, i];
  if (l === u) return [l];
  var f = Math.max(t, 2), c = g_(new Se(u).sub(l).div(f - 1), a, 0), d = [].concat(xm(dd.rangeStep(new Se(l), new Se(u).sub(new Se(0.99).mul(c)), c)), [u]);
  return n > i ? bm(d) : d;
}
var JH = m_(YH), ZH = m_(QH), eV = "Invariant failed";
function Mi(e12, t) {
  throw new Error(eV);
}
var tV = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Wa(e12) {
  "@babel/helpers - typeof";
  return Wa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wa(e12);
}
function Ic() {
  return Ic = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, Ic.apply(this, arguments);
}
function rV(e12, t) {
  return oV(e12) || aV(e12, t) || iV(e12, t) || nV();
}
function nV() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iV(e12, t) {
  if (e12) {
    if (typeof e12 == "string") return v1(e12, t);
    var r = Object.prototype.toString.call(e12).slice(8, -1);
    if (r === "Object" && e12.constructor && (r = e12.constructor.name), r === "Map" || r === "Set") return Array.from(e12);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v1(e12, t);
  }
}
function v1(e12, t) {
  (t == null || t > e12.length) && (t = e12.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e12[r];
  return n;
}
function aV(e12, t) {
  var r = e12 == null ? null : typeof Symbol < "u" && e12[Symbol.iterator] || e12["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = true, u = false;
    try {
      if (a = (r = r.call(e12)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = true) ;
    } catch (f) {
      u = true, i = f;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function oV(e12) {
  if (Array.isArray(e12)) return e12;
}
function sV(e12, t) {
  if (e12 == null) return {};
  var r = lV(e12, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e12);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e12, n) && (r[n] = e12[n]);
  }
  return r;
}
function lV(e12, t) {
  if (e12 == null) return {};
  var r = {};
  for (var n in e12) if (Object.prototype.hasOwnProperty.call(e12, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e12[n];
  }
  return r;
}
function uV(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function cV(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, S_(n.key), n);
  }
}
function fV(e12, t, r) {
  return t && cV(e12.prototype, t), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function dV(e12, t, r) {
  return t = Rc(t), pV(e12, x_() ? Reflect.construct(t, r || [], Rc(e12).constructor) : t.apply(e12, r));
}
function pV(e12, t) {
  if (t && (Wa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return hV(e12);
}
function hV(e12) {
  if (e12 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e12;
}
function x_() {
  try {
    var e12 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (x_ = function() {
    return !!e12;
  })();
}
function Rc(e12) {
  return Rc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Rc(e12);
}
function mV(e12, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e12.prototype = Object.create(t && t.prototype, { constructor: { value: e12, writable: true, configurable: true } }), Object.defineProperty(e12, "prototype", { writable: false }), t && Sm(e12, t);
}
function Sm(e12, t) {
  return Sm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Sm(e12, t);
}
function w_(e12, t, r) {
  return t = S_(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function S_(e12) {
  var t = yV(e12, "string");
  return Wa(t) == "symbol" ? t : t + "";
}
function yV(e12, t) {
  if (Wa(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (Wa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e12);
}
var pd = function(e12) {
  function t() {
    return uV(this, t), dV(this, t, arguments);
  }
  return mV(t, e12), fV(t, [{ key: "render", value: function() {
    var n = this.props, i = n.offset, a = n.layout, o = n.width, s = n.dataKey, l = n.data, u = n.dataPointFormatter, f = n.xAxis, c = n.yAxis, d = sV(n, tV), h = ee(d, false);
    this.props.direction === "x" && f.type !== "number" && Mi();
    var y = l.map(function(v) {
      var m = u(v, s), g = m.x, b = m.y, x = m.value, O = m.errorVal;
      if (!O) return null;
      var w = [], S, j;
      if (Array.isArray(O)) {
        var P = rV(O, 2);
        S = P[0], j = P[1];
      } else S = j = O;
      if (a === "vertical") {
        var k = f.scale, T = b + i, C = T + o, $ = T - o, L = k(x - S), R = k(x + j);
        w.push({ x1: R, y1: C, x2: R, y2: $ }), w.push({ x1: L, y1: T, x2: R, y2: T }), w.push({ x1: L, y1: C, x2: L, y2: $ });
      } else if (a === "horizontal") {
        var D = c.scale, B = g + i, W = B - o, N = B + o, F = D(x - S), U = D(x + j);
        w.push({ x1: W, y1: U, x2: N, y2: U }), w.push({ x1: B, y1: F, x2: B, y2: U }), w.push({ x1: W, y1: F, x2: N, y2: F });
      }
      return E.createElement(pe, Ic({ className: "recharts-errorBar", key: "bar-".concat(w.map(function(X) {
        return "".concat(X.x1, "-").concat(X.x2, "-").concat(X.y1, "-").concat(X.y2);
      })) }, h), w.map(function(X) {
        return E.createElement("line", Ic({}, X, { key: "line-".concat(X.x1, "-").concat(X.x2, "-").concat(X.y1, "-").concat(X.y2) }));
      }));
    });
    return E.createElement(pe, { className: "recharts-errorBars" }, y);
  } }]);
}(E.Component);
w_(pd, "defaultProps", { stroke: "black", strokeWidth: 1.5, width: 5, offset: 0, layout: "horizontal" });
w_(pd, "displayName", "ErrorBar");
function Zs(e12) {
  "@babel/helpers - typeof";
  return Zs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zs(e12);
}
function g1(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ei(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? g1(Object(r), true).forEach(function(n) {
      vV(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : g1(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function vV(e12, t, r) {
  return t = gV(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function gV(e12) {
  var t = bV(e12, "string");
  return Zs(t) == "symbol" ? t : t + "";
}
function bV(e12, t) {
  if (Zs(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (Zs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
var O_ = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, o = Lt(r, Qr);
  if (!o) return null;
  var s = Qr.defaultProps, l = s !== void 0 ? ei(ei({}, s), o.props) : {}, u;
  return o.props && o.props.payload ? u = o.props && o.props.payload : a === "children" ? u = (n || []).reduce(function(f, c) {
    var d = c.item, h = c.props, y = h.sectors || h.data || [];
    return f.concat(y.map(function(v) {
      return { type: o.props.iconType || d.props.legendType, value: v.name, color: v.fill, payload: v };
    }));
  }, []) : u = (n || []).map(function(f) {
    var c = f.item, d = c.type.defaultProps, h = d !== void 0 ? ei(ei({}, d), c.props) : {}, y = h.dataKey, v = h.name, m = h.legendType, g = h.hide;
    return { inactive: g, dataKey: y, type: l.iconType || m || "square", color: fg(c), value: v || y, payload: h };
  }), ei(ei(ei({}, l), Qr.getWithHeight(o, i)), {}, { payload: u, item: o });
};
function el(e12) {
  "@babel/helpers - typeof";
  return el = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, el(e12);
}
function b1(e12) {
  return OV(e12) || SV(e12) || wV(e12) || xV();
}
function xV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wV(e12, t) {
  if (e12) {
    if (typeof e12 == "string") return Om(e12, t);
    var r = Object.prototype.toString.call(e12).slice(8, -1);
    if (r === "Object" && e12.constructor && (r = e12.constructor.name), r === "Map" || r === "Set") return Array.from(e12);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Om(e12, t);
  }
}
function SV(e12) {
  if (typeof Symbol < "u" && e12[Symbol.iterator] != null || e12["@@iterator"] != null) return Array.from(e12);
}
function OV(e12) {
  if (Array.isArray(e12)) return Om(e12);
}
function Om(e12, t) {
  (t == null || t > e12.length) && (t = e12.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e12[r];
  return n;
}
function x1(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ze(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? x1(Object(r), true).forEach(function(n) {
      wa(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : x1(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function wa(e12, t, r) {
  return t = jV(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function jV(e12) {
  var t = PV(e12, "string");
  return el(t) == "symbol" ? t : t + "";
}
function PV(e12, t) {
  if (el(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (el(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
function Ye(e12, t, r) {
  return se(e12) || se(t) ? r : Je(t) ? Ut(e12, t, r) : ie(t) ? t(e12) : r;
}
function ms(e12, t, r, n) {
  var i = SH(e12, function(s) {
    return Ye(s, t);
  });
  if (r === "number") {
    var a = i.filter(function(s) {
      return q(s) || parseFloat(s);
    });
    return a.length ? [cd(a), $n(a)] : [1 / 0, -1 / 0];
  }
  var o = n ? i.filter(function(s) {
    return !se(s);
  }) : i;
  return o.map(function(s) {
    return Je(s) || s instanceof Date ? s : "";
  });
}
var AV = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = -1, s = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (s <= 1) return 0;
  if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6) for (var l = a.range, u = 0; u < s; u++) {
    var f = u > 0 ? i[u - 1].coordinate : i[s - 1].coordinate, c = i[u].coordinate, d = u >= s - 1 ? i[0].coordinate : i[u + 1].coordinate, h = void 0;
    if (xt(c - f) !== xt(d - c)) {
      var y = [];
      if (xt(d - c) === xt(l[1] - l[0])) {
        h = d;
        var v = c + l[1] - l[0];
        y[0] = Math.min(v, (v + f) / 2), y[1] = Math.max(v, (v + f) / 2);
      } else {
        h = f;
        var m = d + l[1] - l[0];
        y[0] = Math.min(c, (m + c) / 2), y[1] = Math.max(c, (m + c) / 2);
      }
      var g = [Math.min(c, (h + c) / 2), Math.max(c, (h + c) / 2)];
      if (t > g[0] && t <= g[1] || t >= y[0] && t <= y[1]) {
        o = i[u].index;
        break;
      }
    } else {
      var b = Math.min(f, d), x = Math.max(f, d);
      if (t > (b + c) / 2 && t <= (x + c) / 2) {
        o = i[u].index;
        break;
      }
    }
  }
  else for (var O = 0; O < s; O++) if (O === 0 && t <= (n[O].coordinate + n[O + 1].coordinate) / 2 || O > 0 && O < s - 1 && t > (n[O].coordinate + n[O - 1].coordinate) / 2 && t <= (n[O].coordinate + n[O + 1].coordinate) / 2 || O === s - 1 && t > (n[O].coordinate + n[O - 1].coordinate) / 2) {
    o = n[O].index;
    break;
  }
  return o;
}, fg = function(t) {
  var r, n = t, i = n.type.displayName, a = (r = t.type) !== null && r !== void 0 && r.defaultProps ? ze(ze({}, t.type.defaultProps), t.props) : t.props, o = a.stroke, s = a.fill, l;
  switch (i) {
    case "Line":
      l = o;
      break;
    case "Area":
    case "Radar":
      l = o && o !== "none" ? o : s;
      break;
    default:
      l = s;
      break;
  }
  return l;
}, _V = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a) return {};
  for (var o = {}, s = Object.keys(a), l = 0, u = s.length; l < u; l++) for (var f = a[s[l]].stackGroups, c = Object.keys(f), d = 0, h = c.length; d < h; d++) {
    var y = f[c[d]], v = y.items, m = y.cateAxisId, g = v.filter(function(j) {
      return Yr(j.type).indexOf("Bar") >= 0;
    });
    if (g && g.length) {
      var b = g[0].type.defaultProps, x = b !== void 0 ? ze(ze({}, b), g[0].props) : g[0].props, O = x.barSize, w = x[m];
      o[w] || (o[w] = []);
      var S = se(O) ? r : O;
      o[w].push({ item: g[0], stackList: g.slice(1), barSize: se(S) ? void 0 : wt(S, n, 0) });
    }
  }
  return o;
}, EV = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, o = a === void 0 ? [] : a, s = t.maxBarSize, l = o.length;
  if (l < 1) return null;
  var u = wt(r, i, 0, true), f, c = [];
  if (o[0].barSize === +o[0].barSize) {
    var d = false, h = i / l, y = o.reduce(function(O, w) {
      return O + w.barSize || 0;
    }, 0);
    y += (l - 1) * u, y >= i && (y -= (l - 1) * u, u = 0), y >= i && h > 0 && (d = true, h *= 0.9, y = l * h);
    var v = (i - y) / 2 >> 0, m = { offset: v - u, size: 0 };
    f = o.reduce(function(O, w) {
      var S = { item: w.item, position: { offset: m.offset + m.size + u, size: d ? h : w.barSize } }, j = [].concat(b1(O), [S]);
      return m = j[j.length - 1].position, w.stackList && w.stackList.length && w.stackList.forEach(function(P) {
        j.push({ item: P, position: m });
      }), j;
    }, c);
  } else {
    var g = wt(n, i, 0, true);
    i - 2 * g - (l - 1) * u <= 0 && (u = 0);
    var b = (i - 2 * g - (l - 1) * u) / l;
    b > 1 && (b >>= 0);
    var x = s === +s ? Math.min(b, s) : b;
    f = o.reduce(function(O, w, S) {
      var j = [].concat(b1(O), [{ item: w.item, position: { offset: g + (b + u) * S + (b - x) / 2, size: x } }]);
      return w.stackList && w.stackList.length && w.stackList.forEach(function(P) {
        j.push({ item: P, position: j[j.length - 1].position });
      }), j;
    }, c);
  }
  return f;
}, kV = function(t, r, n, i) {
  var a = n.children, o = n.width, s = n.margin, l = o - (s.left || 0) - (s.right || 0), u = O_({ children: a, legendWidth: l });
  if (u) {
    var f = i || {}, c = f.width, d = f.height, h = u.align, y = u.verticalAlign, v = u.layout;
    if ((v === "vertical" || v === "horizontal" && y === "middle") && h !== "center" && q(t[h])) return ze(ze({}, t), {}, wa({}, h, t[h] + (c || 0)));
    if ((v === "horizontal" || v === "vertical" && h === "center") && y !== "middle" && q(t[y])) return ze(ze({}, t), {}, wa({}, y, t[y] + (d || 0)));
  }
  return t;
}, TV = function(t, r, n) {
  return se(r) ? true : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : true;
}, j_ = function(t, r, n, i, a) {
  var o = r.props.children, s = rr(o, pd).filter(function(u) {
    return TV(i, a, u.props.direction);
  });
  if (s && s.length) {
    var l = s.map(function(u) {
      return u.props.dataKey;
    });
    return t.reduce(function(u, f) {
      var c = Ye(f, n);
      if (se(c)) return u;
      var d = Array.isArray(c) ? [cd(c), $n(c)] : [c, c], h = l.reduce(function(y, v) {
        var m = Ye(f, v, 0), g = d[0] - Math.abs(Array.isArray(m) ? m[0] : m), b = d[1] + Math.abs(Array.isArray(m) ? m[1] : m);
        return [Math.min(g, y[0]), Math.max(b, y[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(h[0], u[0]), Math.max(h[1], u[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, $V = function(t, r, n, i, a) {
  var o = r.map(function(s) {
    return j_(t, s, n, a, i);
  }).filter(function(s) {
    return !se(s);
  });
  return o && o.length ? o.reduce(function(s, l) {
    return [Math.min(s[0], l[0]), Math.max(s[1], l[1])];
  }, [1 / 0, -1 / 0]) : null;
}, P_ = function(t, r, n, i, a) {
  var o = r.map(function(l) {
    var u = l.props.dataKey;
    return n === "number" && u && j_(t, l, u, i) || ms(t, u, n, a);
  });
  if (n === "number") return o.reduce(function(l, u) {
    return [Math.min(l[0], u[0]), Math.max(l[1], u[1])];
  }, [1 / 0, -1 / 0]);
  var s = {};
  return o.reduce(function(l, u) {
    for (var f = 0, c = u.length; f < c; f++) s[u[f]] || (s[u[f]] = true, l.push(u[f]));
    return l;
  }, []);
}, A_ = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, __ = function(t, r, n, i) {
  if (i) return t.map(function(l) {
    return l.coordinate;
  });
  var a, o, s = t.map(function(l) {
    return l.coordinate === r && (a = true), l.coordinate === n && (o = true), l.coordinate;
  });
  return a || s.push(r), o || s.push(n), s;
}, Gr = function(t, r, n) {
  if (!t) return null;
  var i = t.scale, a = t.duplicateDomain, o = t.type, s = t.range, l = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, u = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / l : 0;
  if (u = t.axisType === "angleAxis" && (s == null ? void 0 : s.length) >= 2 ? xt(s[0] - s[1]) * 2 * u : u, r && (t.ticks || t.niceTicks)) {
    var f = (t.ticks || t.niceTicks).map(function(c) {
      var d = a ? a.indexOf(c) : c;
      return { coordinate: i(d) + u, value: c, offset: u };
    });
    return f.filter(function(c) {
      return !wo(c.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(c, d) {
    return { coordinate: i(c) + u, value: c, index: d, offset: u };
  }) : i.ticks && !n ? i.ticks(t.tickCount).map(function(c) {
    return { coordinate: i(c) + u, value: c, offset: u };
  }) : i.domain().map(function(c, d) {
    return { coordinate: i(c) + u, value: a ? a[c] : c, index: d, offset: u };
  });
}, Pp = /* @__PURE__ */ new WeakMap(), uu = function(t, r) {
  if (typeof r != "function") return t;
  Pp.has(t) || Pp.set(t, /* @__PURE__ */ new WeakMap());
  var n = Pp.get(t);
  if (n.has(r)) return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, E_ = function(t, r, n) {
  var i = t.scale, a = t.type, o = t.layout, s = t.axisType;
  if (i === "auto") return o === "radial" && s === "radiusAxis" ? { scale: Ks(), realScaleType: "band" } : o === "radial" && s === "angleAxis" ? { scale: Tc(), realScaleType: "linear" } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? { scale: hs(), realScaleType: "point" } : a === "category" ? { scale: Ks(), realScaleType: "band" } : { scale: Tc(), realScaleType: "linear" };
  if (Ti(i)) {
    var l = "scale".concat(Yf(i));
    return { scale: (p1[l] || hs)(), realScaleType: p1[l] ? l : "point" };
  }
  return ie(i) ? { scale: i } : { scale: hs(), realScaleType: "point" };
}, w1 = 1e-4, k_ = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - w1, o = Math.max(i[0], i[1]) + w1, s = t(r[0]), l = t(r[n - 1]);
    (s < a || s > o || l < a || l > o) && t.domain([r[0], r[n - 1]]);
  }
}, CV = function(t, r) {
  if (!t) return null;
  for (var n = 0, i = t.length; n < i; n++) if (t[n].item === r) return t[n].position;
  return null;
}, NV = function(t, r) {
  if (!r || r.length !== 2 || !q(r[0]) || !q(r[1])) return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!q(t[0]) || t[0] < n) && (a[0] = n), (!q(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, MV = function(t) {
  var r = t.length;
  if (!(r <= 0)) for (var n = 0, i = t[0].length; n < i; ++n) for (var a = 0, o = 0, s = 0; s < r; ++s) {
    var l = wo(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
    l >= 0 ? (t[s][n][0] = a, t[s][n][1] = a + l, a = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + l, o = t[s][n][1]);
  }
}, IV = function(t) {
  var r = t.length;
  if (!(r <= 0)) for (var n = 0, i = t[0].length; n < i; ++n) for (var a = 0, o = 0; o < r; ++o) {
    var s = wo(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
    s >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + s, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
  }
}, RV = { sign: MV, expand: t4, none: Na, silhouette: r4, wiggle: n4, positive: IV }, DV = function(t, r, n) {
  var i = r.map(function(s) {
    return s.props.dataKey;
  }), a = RV[n], o = e4().keys(i).value(function(s, l) {
    return +Ye(s, l, 0);
  }).order(Gh).offset(a);
  return o(t);
}, LV = function(t, r, n, i, a, o) {
  if (!t) return null;
  var s = o ? r.reverse() : r, l = {}, u = s.reduce(function(c, d) {
    var h, y = (h = d.type) !== null && h !== void 0 && h.defaultProps ? ze(ze({}, d.type.defaultProps), d.props) : d.props, v = y.stackId, m = y.hide;
    if (m) return c;
    var g = y[n], b = c[g] || { hasStack: false, stackGroups: {} };
    if (Je(v)) {
      var x = b.stackGroups[v] || { numericAxisId: n, cateAxisId: i, items: [] };
      x.items.push(d), b.hasStack = true, b.stackGroups[v] = x;
    } else b.stackGroups[So("_stackId_")] = { numericAxisId: n, cateAxisId: i, items: [d] };
    return ze(ze({}, c), {}, wa({}, g, b));
  }, l), f = {};
  return Object.keys(u).reduce(function(c, d) {
    var h = u[d];
    if (h.hasStack) {
      var y = {};
      h.stackGroups = Object.keys(h.stackGroups).reduce(function(v, m) {
        var g = h.stackGroups[m];
        return ze(ze({}, v), {}, wa({}, m, { numericAxisId: n, cateAxisId: i, items: g.items, stackedData: DV(t, g.items, a) }));
      }, y);
    }
    return ze(ze({}, c), {}, wa({}, d, h));
  }, f);
}, T_ = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, s = r.allowDecimals, l = n || r.scale;
  if (l !== "auto" && l !== "linear") return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var u = t.domain();
    if (!u.length) return null;
    var f = JH(u, a, s);
    return t.domain([cd(f), $n(f)]), { niceTicks: f };
  }
  if (a && i === "number") {
    var c = t.domain(), d = ZH(c, a, s);
    return { niceTicks: d };
  }
  return null;
};
function S1(e12) {
  var t = e12.axis, r = e12.ticks, n = e12.bandSize, i = e12.entry, a = e12.index, o = e12.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !se(i[t.dataKey])) {
      var s = lc(r, "value", i[t.dataKey]);
      if (s) return s.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var l = Ye(i, se(o) ? t.dataKey : o);
  return se(l) ? null : t.scale(l);
}
var O1 = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, o = t.entry, s = t.index;
  if (r.type === "category") return n[s] ? n[s].coordinate + i : null;
  var l = Ye(o, r.dataKey, r.domain[s]);
  return se(l) ? null : r.scale(l) - a / 2 + i;
}, BV = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, zV = function(t, r) {
  var n, i = (n = t.type) !== null && n !== void 0 && n.defaultProps ? ze(ze({}, t.type.defaultProps), t.props) : t.props, a = i.stackId;
  if (Je(a)) {
    var o = r[a];
    if (o) {
      var s = o.items.indexOf(t);
      return s >= 0 ? o.stackedData[s] : null;
    }
  }
  return null;
}, FV = function(t) {
  return t.reduce(function(r, n) {
    return [cd(n.concat([r[0]]).filter(q)), $n(n.concat([r[1]]).filter(q))];
  }, [1 / 0, -1 / 0]);
}, $_ = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], s = o.stackedData, l = s.reduce(function(u, f) {
      var c = FV(f.slice(r, n + 1));
      return [Math.min(u[0], c[0]), Math.max(u[1], c[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(l[0], i[0]), Math.max(l[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, j1 = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, P1 = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, jm = function(t, r, n) {
  if (ie(t)) return t(r, n);
  if (!Array.isArray(t)) return r;
  var i = [];
  if (q(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (j1.test(t[0])) {
    var a = +j1.exec(t[0])[1];
    i[0] = r[0] - a;
  } else ie(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (q(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (P1.test(t[1])) {
    var o = +P1.exec(t[1])[1];
    i[1] = r[1] + o;
  } else ie(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, Dc = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0) return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = Bv(r, function(c) {
      return c.coordinate;
    }), o = 1 / 0, s = 1, l = a.length; s < l; s++) {
      var u = a[s], f = a[s - 1];
      o = Math.min((u.coordinate || 0) - (f.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, A1 = function(t, r, n) {
  return !t || !t.length || Ua(t, Ut(n, "type.defaultProps.domain")) ? r : t;
}, C_ = function(t, r) {
  var n = t.type.defaultProps ? ze(ze({}, t.type.defaultProps), t.props) : t.props, i = n.dataKey, a = n.name, o = n.unit, s = n.formatter, l = n.tooltipType, u = n.chartType, f = n.hide;
  return ze(ze({}, ee(t, false)), {}, { dataKey: i, unit: o, formatter: s, name: a || i, color: fg(t), value: Ye(r, i), type: l, payload: r, chartType: u, hide: f });
};
function tl(e12) {
  "@babel/helpers - typeof";
  return tl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tl(e12);
}
function _1(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ur(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _1(Object(r), true).forEach(function(n) {
      N_(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : _1(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function N_(e12, t, r) {
  return t = UV(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function UV(e12) {
  var t = WV(e12, "string");
  return tl(t) == "symbol" ? t : t + "";
}
function WV(e12, t) {
  if (tl(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (tl(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
function HV(e12, t) {
  return GV(e12) || qV(e12, t) || KV(e12, t) || VV();
}
function VV() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function KV(e12, t) {
  if (e12) {
    if (typeof e12 == "string") return E1(e12, t);
    var r = Object.prototype.toString.call(e12).slice(8, -1);
    if (r === "Object" && e12.constructor && (r = e12.constructor.name), r === "Map" || r === "Set") return Array.from(e12);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return E1(e12, t);
  }
}
function E1(e12, t) {
  (t == null || t > e12.length) && (t = e12.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e12[r];
  return n;
}
function qV(e12, t) {
  var r = e12 == null ? null : typeof Symbol < "u" && e12[Symbol.iterator] || e12["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = true, u = false;
    try {
      if (a = (r = r.call(e12)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = true) ;
    } catch (f) {
      u = true, i = f;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function GV(e12) {
  if (Array.isArray(e12)) return e12;
}
var Lc = Math.PI / 180, XV = function(t) {
  return t * 180 / Math.PI;
}, _e = function(t, r, n, i) {
  return { x: t + Math.cos(-Lc * i) * n, y: r + Math.sin(-Lc * i) * n };
}, M_ = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { top: 0, right: 0, bottom: 0, left: 0 };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, YV = function(t, r, n, i, a) {
  var o = t.width, s = t.height, l = t.startAngle, u = t.endAngle, f = wt(t.cx, o, o / 2), c = wt(t.cy, s, s / 2), d = M_(o, s, n), h = wt(t.innerRadius, d, 0), y = wt(t.outerRadius, d, d * 0.8), v = Object.keys(r);
  return v.reduce(function(m, g) {
    var b = r[g], x = b.domain, O = b.reversed, w;
    if (se(b.range)) i === "angleAxis" ? w = [l, u] : i === "radiusAxis" && (w = [h, y]), O && (w = [w[1], w[0]]);
    else {
      w = b.range;
      var S = w, j = HV(S, 2);
      l = j[0], u = j[1];
    }
    var P = E_(b, a), k = P.realScaleType, T = P.scale;
    T.domain(x).range(w), k_(T);
    var C = T_(T, Ur(Ur({}, b), {}, { realScaleType: k })), $ = Ur(Ur(Ur({}, b), C), {}, { range: w, radius: y, realScaleType: k, scale: T, cx: f, cy: c, innerRadius: h, outerRadius: y, startAngle: l, endAngle: u });
    return Ur(Ur({}, m), {}, N_({}, g, $));
  }, {});
}, QV = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, JV = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, s = QV({ x: n, y: i }, { x: a, y: o });
  if (s <= 0) return { radius: s };
  var l = (n - a) / s, u = Math.acos(l);
  return i > o && (u = 2 * Math.PI - u), { radius: s, angle: XV(u), angleInRadian: u };
}, ZV = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return { startAngle: r - o * 360, endAngle: n - o * 360 };
}, eK = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), s = Math.min(a, o);
  return t + s * 360;
}, k1 = function(t, r) {
  var n = t.x, i = t.y, a = JV({ x: n, y: i }, r), o = a.radius, s = a.angle, l = r.innerRadius, u = r.outerRadius;
  if (o < l || o > u) return false;
  if (o === 0) return true;
  var f = ZV(r), c = f.startAngle, d = f.endAngle, h = s, y;
  if (c <= d) {
    for (; h > d; ) h -= 360;
    for (; h < c; ) h += 360;
    y = h >= c && h <= d;
  } else {
    for (; h > c; ) h -= 360;
    for (; h < d; ) h += 360;
    y = h >= d && h <= c;
  }
  return y ? Ur(Ur({}, r), {}, { radius: o, angle: eK(h, r) }) : null;
}, I_ = function(t) {
  return !A.isValidElement(t) && !ie(t) && typeof t != "boolean" ? t.className : "";
};
function rl(e12) {
  "@babel/helpers - typeof";
  return rl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rl(e12);
}
var tK = ["offset"];
function rK(e12) {
  return oK(e12) || aK(e12) || iK(e12) || nK();
}
function nK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iK(e12, t) {
  if (e12) {
    if (typeof e12 == "string") return Pm(e12, t);
    var r = Object.prototype.toString.call(e12).slice(8, -1);
    if (r === "Object" && e12.constructor && (r = e12.constructor.name), r === "Map" || r === "Set") return Array.from(e12);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Pm(e12, t);
  }
}
function aK(e12) {
  if (typeof Symbol < "u" && e12[Symbol.iterator] != null || e12["@@iterator"] != null) return Array.from(e12);
}
function oK(e12) {
  if (Array.isArray(e12)) return Pm(e12);
}
function Pm(e12, t) {
  (t == null || t > e12.length) && (t = e12.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e12[r];
  return n;
}
function sK(e12, t) {
  if (e12 == null) return {};
  var r = lK(e12, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e12);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e12, n) && (r[n] = e12[n]);
  }
  return r;
}
function lK(e12, t) {
  if (e12 == null) return {};
  var r = {};
  for (var n in e12) if (Object.prototype.hasOwnProperty.call(e12, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e12[n];
  }
  return r;
}
function T1(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ge(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? T1(Object(r), true).forEach(function(n) {
      uK(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : T1(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function uK(e12, t, r) {
  return t = cK(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function cK(e12) {
  var t = fK(e12, "string");
  return rl(t) == "symbol" ? t : t + "";
}
function fK(e12, t) {
  if (rl(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (rl(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
function nl() {
  return nl = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, nl.apply(this, arguments);
}
var dK = function(t) {
  var r = t.value, n = t.formatter, i = se(t.children) ? r : t.children;
  return ie(n) ? n(i) : i;
}, pK = function(t, r) {
  var n = xt(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, hK = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, s = t.className, l = a, u = l.cx, f = l.cy, c = l.innerRadius, d = l.outerRadius, h = l.startAngle, y = l.endAngle, v = l.clockWise, m = (c + d) / 2, g = pK(h, y), b = g >= 0 ? 1 : -1, x, O;
  i === "insideStart" ? (x = h + b * o, O = v) : i === "insideEnd" ? (x = y - b * o, O = !v) : i === "end" && (x = y + b * o, O = v), O = g <= 0 ? O : !O;
  var w = _e(u, f, m, x), S = _e(u, f, m, x + (O ? 1 : -1) * 359), j = "M".concat(w.x, ",").concat(w.y, `
    A`).concat(m, ",").concat(m, ",0,1,").concat(O ? 0 : 1, `,
    `).concat(S.x, ",").concat(S.y), P = se(t.id) ? So("recharts-radial-line-") : t.id;
  return E.createElement("text", nl({}, n, { dominantBaseline: "central", className: le("recharts-radial-bar-label", s) }), E.createElement("defs", null, E.createElement("path", { id: P, d: j })), E.createElement("textPath", { xlinkHref: "#".concat(P) }, r));
}, mK = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, o = a.cx, s = a.cy, l = a.innerRadius, u = a.outerRadius, f = a.startAngle, c = a.endAngle, d = (f + c) / 2;
  if (i === "outside") {
    var h = _e(o, s, u + n, d), y = h.x, v = h.y;
    return { x: y, y: v, textAnchor: y >= o ? "start" : "end", verticalAnchor: "middle" };
  }
  if (i === "center") return { x: o, y: s, textAnchor: "middle", verticalAnchor: "middle" };
  if (i === "centerTop") return { x: o, y: s, textAnchor: "middle", verticalAnchor: "start" };
  if (i === "centerBottom") return { x: o, y: s, textAnchor: "middle", verticalAnchor: "end" };
  var m = (l + u) / 2, g = _e(o, s, m, d), b = g.x, x = g.y;
  return { x: b, y: x, textAnchor: "middle", verticalAnchor: "middle" };
}, yK = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, o = r, s = o.x, l = o.y, u = o.width, f = o.height, c = f >= 0 ? 1 : -1, d = c * i, h = c > 0 ? "end" : "start", y = c > 0 ? "start" : "end", v = u >= 0 ? 1 : -1, m = v * i, g = v > 0 ? "end" : "start", b = v > 0 ? "start" : "end";
  if (a === "top") {
    var x = { x: s + u / 2, y: l - c * i, textAnchor: "middle", verticalAnchor: h };
    return Ge(Ge({}, x), n ? { height: Math.max(l - n.y, 0), width: u } : {});
  }
  if (a === "bottom") {
    var O = { x: s + u / 2, y: l + f + d, textAnchor: "middle", verticalAnchor: y };
    return Ge(Ge({}, O), n ? { height: Math.max(n.y + n.height - (l + f), 0), width: u } : {});
  }
  if (a === "left") {
    var w = { x: s - m, y: l + f / 2, textAnchor: g, verticalAnchor: "middle" };
    return Ge(Ge({}, w), n ? { width: Math.max(w.x - n.x, 0), height: f } : {});
  }
  if (a === "right") {
    var S = { x: s + u + m, y: l + f / 2, textAnchor: b, verticalAnchor: "middle" };
    return Ge(Ge({}, S), n ? { width: Math.max(n.x + n.width - S.x, 0), height: f } : {});
  }
  var j = n ? { width: u, height: f } : {};
  return a === "insideLeft" ? Ge({ x: s + m, y: l + f / 2, textAnchor: b, verticalAnchor: "middle" }, j) : a === "insideRight" ? Ge({ x: s + u - m, y: l + f / 2, textAnchor: g, verticalAnchor: "middle" }, j) : a === "insideTop" ? Ge({ x: s + u / 2, y: l + d, textAnchor: "middle", verticalAnchor: y }, j) : a === "insideBottom" ? Ge({ x: s + u / 2, y: l + f - d, textAnchor: "middle", verticalAnchor: h }, j) : a === "insideTopLeft" ? Ge({ x: s + m, y: l + d, textAnchor: b, verticalAnchor: y }, j) : a === "insideTopRight" ? Ge({ x: s + u - m, y: l + d, textAnchor: g, verticalAnchor: y }, j) : a === "insideBottomLeft" ? Ge({ x: s + m, y: l + f - d, textAnchor: b, verticalAnchor: h }, j) : a === "insideBottomRight" ? Ge({ x: s + u - m, y: l + f - d, textAnchor: g, verticalAnchor: h }, j) : vo(a) && (q(a.x) || pi(a.x)) && (q(a.y) || pi(a.y)) ? Ge({ x: s + wt(a.x, u), y: l + wt(a.y, f), textAnchor: "end", verticalAnchor: "end" }, j) : Ge({ x: s + u / 2, y: l + f / 2, textAnchor: "middle", verticalAnchor: "middle" }, j);
}, vK = function(t) {
  return "cx" in t && q(t.cx);
};
function rt(e12) {
  var t = e12.offset, r = t === void 0 ? 5 : t, n = sK(e12, tK), i = Ge({ offset: r }, n), a = i.viewBox, o = i.position, s = i.value, l = i.children, u = i.content, f = i.className, c = f === void 0 ? "" : f, d = i.textBreakAll;
  if (!a || se(s) && se(l) && !A.isValidElement(u) && !ie(u)) return null;
  if (A.isValidElement(u)) return A.cloneElement(u, i);
  var h;
  if (ie(u)) {
    if (h = A.createElement(u, i), A.isValidElement(h)) return h;
  } else h = dK(i);
  var y = vK(a), v = ee(i, true);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end")) return hK(i, h, v);
  var m = y ? mK(i) : yK(i);
  return E.createElement(Ci, nl({ className: le("recharts-label", c) }, v, m, { breakAll: d }), h);
}
rt.displayName = "Label";
var R_ = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, s = t.r, l = t.radius, u = t.innerRadius, f = t.outerRadius, c = t.x, d = t.y, h = t.top, y = t.left, v = t.width, m = t.height, g = t.clockWise, b = t.labelViewBox;
  if (b) return b;
  if (q(v) && q(m)) {
    if (q(c) && q(d)) return { x: c, y: d, width: v, height: m };
    if (q(h) && q(y)) return { x: h, y, width: v, height: m };
  }
  return q(c) && q(d) ? { x: c, y: d, width: 0, height: 0 } : q(r) && q(n) ? { cx: r, cy: n, startAngle: a || i || 0, endAngle: o || i || 0, innerRadius: u || 0, outerRadius: f || l || s || 0, clockWise: g } : t.viewBox ? t.viewBox : {};
}, gK = function(t, r) {
  return t ? t === true ? E.createElement(rt, { key: "label-implicit", viewBox: r }) : Je(t) ? E.createElement(rt, { key: "label-implicit", viewBox: r, value: t }) : A.isValidElement(t) ? t.type === rt ? A.cloneElement(t, { key: "label-implicit", viewBox: r }) : E.createElement(rt, { key: "label-implicit", content: t, viewBox: r }) : ie(t) ? E.createElement(rt, { key: "label-implicit", content: t, viewBox: r }) : vo(t) ? E.createElement(rt, nl({ viewBox: r }, t, { key: "label-implicit" })) : null : null;
}, bK = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (!t || !t.children && n && !t.label) return null;
  var i = t.children, a = R_(t), o = rr(i, rt).map(function(l, u) {
    return A.cloneElement(l, { viewBox: r || a, key: "label-".concat(u) });
  });
  if (!n) return o;
  var s = gK(t.label, r || a);
  return [s].concat(rK(o));
};
rt.parseViewBox = R_;
rt.renderCallByParent = bK;
function xK(e12) {
  var t = e12 == null ? 0 : e12.length;
  return t ? e12[t - 1] : void 0;
}
var wK = xK;
const SK = be(wK);
function il(e12) {
  "@babel/helpers - typeof";
  return il = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, il(e12);
}
var OK = ["valueAccessor"], jK = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function PK(e12) {
  return kK(e12) || EK(e12) || _K(e12) || AK();
}
function AK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _K(e12, t) {
  if (e12) {
    if (typeof e12 == "string") return Am(e12, t);
    var r = Object.prototype.toString.call(e12).slice(8, -1);
    if (r === "Object" && e12.constructor && (r = e12.constructor.name), r === "Map" || r === "Set") return Array.from(e12);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Am(e12, t);
  }
}
function EK(e12) {
  if (typeof Symbol < "u" && e12[Symbol.iterator] != null || e12["@@iterator"] != null) return Array.from(e12);
}
function kK(e12) {
  if (Array.isArray(e12)) return Am(e12);
}
function Am(e12, t) {
  (t == null || t > e12.length) && (t = e12.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e12[r];
  return n;
}
function Bc() {
  return Bc = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, Bc.apply(this, arguments);
}
function $1(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function C1(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $1(Object(r), true).forEach(function(n) {
      TK(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : $1(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function TK(e12, t, r) {
  return t = $K(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function $K(e12) {
  var t = CK(e12, "string");
  return il(t) == "symbol" ? t : t + "";
}
function CK(e12, t) {
  if (il(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (il(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
function N1(e12, t) {
  if (e12 == null) return {};
  var r = NK(e12, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e12);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e12, n) && (r[n] = e12[n]);
  }
  return r;
}
function NK(e12, t) {
  if (e12 == null) return {};
  var r = {};
  for (var n in e12) if (Object.prototype.hasOwnProperty.call(e12, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e12[n];
  }
  return r;
}
var MK = function(t) {
  return Array.isArray(t.value) ? SK(t.value) : t.value;
};
function Zr(e12) {
  var t = e12.valueAccessor, r = t === void 0 ? MK : t, n = N1(e12, OK), i = n.data, a = n.dataKey, o = n.clockWise, s = n.id, l = n.textBreakAll, u = N1(n, jK);
  return !i || !i.length ? null : E.createElement(pe, { className: "recharts-label-list" }, i.map(function(f, c) {
    var d = se(a) ? r(f, c) : Ye(f && f.payload, a), h = se(s) ? {} : { id: "".concat(s, "-").concat(c) };
    return E.createElement(rt, Bc({}, ee(f, true), u, h, { parentViewBox: f.parentViewBox, value: d, textBreakAll: l, viewBox: rt.parseViewBox(se(o) ? f : C1(C1({}, f), {}, { clockWise: o })), key: "label-".concat(c), index: c }));
  }));
}
Zr.displayName = "LabelList";
function IK(e12, t) {
  return e12 ? e12 === true ? E.createElement(Zr, { key: "labelList-implicit", data: t }) : E.isValidElement(e12) || ie(e12) ? E.createElement(Zr, { key: "labelList-implicit", data: t, content: e12 }) : vo(e12) ? E.createElement(Zr, Bc({ data: t }, e12, { key: "labelList-implicit" })) : null : null;
}
function RK(e12, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (!e12 || !e12.children && r && !e12.label) return null;
  var n = e12.children, i = rr(n, Zr).map(function(o, s) {
    return A.cloneElement(o, { data: t, key: "labelList-".concat(s) });
  });
  if (!r) return i;
  var a = IK(e12.label, t);
  return [a].concat(PK(i));
}
Zr.renderCallByParent = RK;
function al(e12) {
  "@babel/helpers - typeof";
  return al = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, al(e12);
}
function _m() {
  return _m = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, _m.apply(this, arguments);
}
function M1(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function I1(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? M1(Object(r), true).forEach(function(n) {
      DK(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : M1(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function DK(e12, t, r) {
  return t = LK(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function LK(e12) {
  var t = BK(e12, "string");
  return al(t) == "symbol" ? t : t + "";
}
function BK(e12, t) {
  if (al(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (al(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
var zK = function(t, r) {
  var n = xt(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, cu = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, s = t.isExternal, l = t.cornerRadius, u = t.cornerIsExternal, f = l * (s ? 1 : -1) + i, c = Math.asin(l / f) / Lc, d = u ? a : a + o * c, h = _e(r, n, f, d), y = _e(r, n, i, d), v = u ? a - o * c : a, m = _e(r, n, f * Math.cos(c * Lc), v);
  return { center: h, circleTangency: y, lineTangency: m, theta: c };
}, D_ = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, s = t.endAngle, l = zK(o, s), u = o + l, f = _e(r, n, a, o), c = _e(r, n, a, u), d = "M ".concat(f.x, ",").concat(f.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(l) > 180), ",").concat(+(o > u), `,
    `).concat(c.x, ",").concat(c.y, `
  `);
  if (i > 0) {
    var h = _e(r, n, i, o), y = _e(r, n, i, u);
    d += "L ".concat(y.x, ",").concat(y.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(l) > 180), ",").concat(+(o <= u), `,
            `).concat(h.x, ",").concat(h.y, " Z");
  } else d += "L ".concat(r, ",").concat(n, " Z");
  return d;
}, FK = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, l = t.cornerIsExternal, u = t.startAngle, f = t.endAngle, c = xt(f - u), d = cu({ cx: r, cy: n, radius: a, angle: u, sign: c, cornerRadius: o, cornerIsExternal: l }), h = d.circleTangency, y = d.lineTangency, v = d.theta, m = cu({ cx: r, cy: n, radius: a, angle: f, sign: -c, cornerRadius: o, cornerIsExternal: l }), g = m.circleTangency, b = m.lineTangency, x = m.theta, O = l ? Math.abs(u - f) : Math.abs(u - f) - v - x;
  if (O < 0) return s ? "M ".concat(y.x, ",").concat(y.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : D_({ cx: r, cy: n, innerRadius: i, outerRadius: a, startAngle: u, endAngle: f });
  var w = "M ".concat(y.x, ",").concat(y.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(c < 0), ",").concat(h.x, ",").concat(h.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(O > 180), ",").concat(+(c < 0), ",").concat(g.x, ",").concat(g.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(c < 0), ",").concat(b.x, ",").concat(b.y, `
  `);
  if (i > 0) {
    var S = cu({ cx: r, cy: n, radius: i, angle: u, sign: c, isExternal: true, cornerRadius: o, cornerIsExternal: l }), j = S.circleTangency, P = S.lineTangency, k = S.theta, T = cu({ cx: r, cy: n, radius: i, angle: f, sign: -c, isExternal: true, cornerRadius: o, cornerIsExternal: l }), C = T.circleTangency, $ = T.lineTangency, L = T.theta, R = l ? Math.abs(u - f) : Math.abs(u - f) - k - L;
    if (R < 0 && o === 0) return "".concat(w, "L").concat(r, ",").concat(n, "Z");
    w += "L".concat($.x, ",").concat($.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(c < 0), ",").concat(C.x, ",").concat(C.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(R > 180), ",").concat(+(c > 0), ",").concat(j.x, ",").concat(j.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(c < 0), ",").concat(P.x, ",").concat(P.y, "Z");
  } else w += "L".concat(r, ",").concat(n, "Z");
  return w;
}, UK = { cx: 0, cy: 0, innerRadius: 0, outerRadius: 0, startAngle: 0, endAngle: 0, cornerRadius: 0, forceCornerRadius: false, cornerIsExternal: false }, L_ = function(t) {
  var r = I1(I1({}, UK), t), n = r.cx, i = r.cy, a = r.innerRadius, o = r.outerRadius, s = r.cornerRadius, l = r.forceCornerRadius, u = r.cornerIsExternal, f = r.startAngle, c = r.endAngle, d = r.className;
  if (o < a || f === c) return null;
  var h = le("recharts-sector", d), y = o - a, v = wt(s, y, 0, true), m;
  return v > 0 && Math.abs(f - c) < 360 ? m = FK({ cx: n, cy: i, innerRadius: a, outerRadius: o, cornerRadius: Math.min(v, y / 2), forceCornerRadius: l, cornerIsExternal: u, startAngle: f, endAngle: c }) : m = D_({ cx: n, cy: i, innerRadius: a, outerRadius: o, startAngle: f, endAngle: c }), E.createElement("path", _m({}, ee(r, true), { className: h, d: m, role: "img" }));
};
function ol(e12) {
  "@babel/helpers - typeof";
  return ol = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ol(e12);
}
function Em() {
  return Em = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, Em.apply(this, arguments);
}
function R1(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function D1(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? R1(Object(r), true).forEach(function(n) {
      WK(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : R1(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function WK(e12, t, r) {
  return t = HK(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function HK(e12) {
  var t = VK(e12, "string");
  return ol(t) == "symbol" ? t : t + "";
}
function VK(e12, t) {
  if (ol(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (ol(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
var L1 = { curveBasisClosed: WL, curveBasisOpen: HL, curveBasis: UL, curveBumpX: EL, curveBumpY: kL, curveLinearClosed: VL, curveLinear: Jf, curveMonotoneX: KL, curveMonotoneY: qL, curveNatural: GL, curveStep: XL, curveStepAfter: QL, curveStepBefore: YL }, fu = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Vo = function(t) {
  return t.x;
}, Ko = function(t) {
  return t.y;
}, KK = function(t, r) {
  if (ie(t)) return t;
  var n = "curve".concat(Yf(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? L1["".concat(n).concat(r === "vertical" ? "Y" : "X")] : L1[n] || Jf;
}, qK = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, o = t.baseLine, s = t.layout, l = t.connectNulls, u = l === void 0 ? false : l, f = KK(n, s), c = u ? a.filter(function(v) {
    return fu(v);
  }) : a, d;
  if (Array.isArray(o)) {
    var h = u ? o.filter(function(v) {
      return fu(v);
    }) : o, y = c.map(function(v, m) {
      return D1(D1({}, v), {}, { base: h[m] });
    });
    return s === "vertical" ? d = tu().y(Ko).x1(Vo).x0(function(v) {
      return v.base.x;
    }) : d = tu().x(Vo).y1(Ko).y0(function(v) {
      return v.base.y;
    }), d.defined(fu).curve(f), d(y);
  }
  return s === "vertical" && q(o) ? d = tu().y(Ko).x1(Vo).x0(o) : q(o) ? d = tu().x(Vo).y1(Ko).y0(o) : d = NP().x(Vo).y(Ko), d.defined(fu).curve(f), d(c);
}, Sa = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i) return null;
  var o = n && n.length ? qK(t) : i;
  return A.createElement("path", Em({}, ee(t, false), uc(t), { className: le("recharts-curve", r), d: o, ref: a }));
}, B_ = { exports: {} }, GK = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", XK = GK, YK = XK;
function z_() {
}
function F_() {
}
F_.resetWarningCache = z_;
var QK = function() {
  function e12(n, i, a, o, s, l) {
    if (l !== YK) {
      var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw u.name = "Invariant Violation", u;
    }
  }
  e12.isRequired = e12;
  function t() {
    return e12;
  }
  var r = { array: e12, bigint: e12, bool: e12, func: e12, number: e12, object: e12, string: e12, symbol: e12, any: e12, arrayOf: t, element: e12, elementType: e12, instanceOf: t, node: e12, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: F_, resetWarningCache: z_ };
  return r.PropTypes = r, r;
};
B_.exports = QK();
var JK = B_.exports;
const ve = be(JK), { getOwnPropertyNames: ZK, getOwnPropertySymbols: eq } = Object, { hasOwnProperty: tq } = Object.prototype;
function Ap(e12, t) {
  return function(n, i, a) {
    return e12(n, i, a) && t(n, i, a);
  };
}
function du(e12) {
  return function(r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object") return e12(r, n, i);
    const { cache: a } = i, o = a.get(r), s = a.get(n);
    if (o && s) return o === n && s === r;
    a.set(r, n), a.set(n, r);
    const l = e12(r, n, i);
    return a.delete(r), a.delete(n), l;
  };
}
function rq(e12) {
  return e12 != null ? e12[Symbol.toStringTag] : void 0;
}
function B1(e12) {
  return ZK(e12).concat(eq(e12));
}
const nq = Object.hasOwn || ((e12, t) => tq.call(e12, t));
function Ui(e12, t) {
  return e12 === t || !e12 && !t && e12 !== e12 && t !== t;
}
const iq = "__v", aq = "__o", oq = "_owner", { getOwnPropertyDescriptor: z1, keys: F1 } = Object;
function sq(e12, t) {
  return e12.byteLength === t.byteLength && zc(new Uint8Array(e12), new Uint8Array(t));
}
function lq(e12, t, r) {
  let n = e12.length;
  if (t.length !== n) return false;
  for (; n-- > 0; ) if (!r.equals(e12[n], t[n], n, n, e12, t, r)) return false;
  return true;
}
function uq(e12, t) {
  return e12.byteLength === t.byteLength && zc(new Uint8Array(e12.buffer, e12.byteOffset, e12.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
}
function cq(e12, t) {
  return Ui(e12.getTime(), t.getTime());
}
function fq(e12, t) {
  return e12.name === t.name && e12.message === t.message && e12.cause === t.cause && e12.stack === t.stack;
}
function dq(e12, t) {
  return e12 === t;
}
function U1(e12, t, r) {
  const n = e12.size;
  if (n !== t.size) return false;
  if (!n) return true;
  const i = new Array(n), a = e12.entries();
  let o, s, l = 0;
  for (; (o = a.next()) && !o.done; ) {
    const u = t.entries();
    let f = false, c = 0;
    for (; (s = u.next()) && !s.done; ) {
      if (i[c]) {
        c++;
        continue;
      }
      const d = o.value, h = s.value;
      if (r.equals(d[0], h[0], l, c, e12, t, r) && r.equals(d[1], h[1], d[0], h[0], e12, t, r)) {
        f = i[c] = true;
        break;
      }
      c++;
    }
    if (!f) return false;
    l++;
  }
  return true;
}
const pq = Ui;
function hq(e12, t, r) {
  const n = F1(e12);
  let i = n.length;
  if (F1(t).length !== i) return false;
  for (; i-- > 0; ) if (!U_(e12, t, r, n[i])) return false;
  return true;
}
function qo(e12, t, r) {
  const n = B1(e12);
  let i = n.length;
  if (B1(t).length !== i) return false;
  let a, o, s;
  for (; i-- > 0; ) if (a = n[i], !U_(e12, t, r, a) || (o = z1(e12, a), s = z1(t, a), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable))) return false;
  return true;
}
function mq(e12, t) {
  return Ui(e12.valueOf(), t.valueOf());
}
function yq(e12, t) {
  return e12.source === t.source && e12.flags === t.flags;
}
function W1(e12, t, r) {
  const n = e12.size;
  if (n !== t.size) return false;
  if (!n) return true;
  const i = new Array(n), a = e12.values();
  let o, s;
  for (; (o = a.next()) && !o.done; ) {
    const l = t.values();
    let u = false, f = 0;
    for (; (s = l.next()) && !s.done; ) {
      if (!i[f] && r.equals(o.value, s.value, o.value, s.value, e12, t, r)) {
        u = i[f] = true;
        break;
      }
      f++;
    }
    if (!u) return false;
  }
  return true;
}
function zc(e12, t) {
  let r = e12.byteLength;
  if (t.byteLength !== r || e12.byteOffset !== t.byteOffset) return false;
  for (; r-- > 0; ) if (e12[r] !== t[r]) return false;
  return true;
}
function vq(e12, t) {
  return e12.hostname === t.hostname && e12.pathname === t.pathname && e12.protocol === t.protocol && e12.port === t.port && e12.hash === t.hash && e12.username === t.username && e12.password === t.password;
}
function U_(e12, t, r, n) {
  return (n === oq || n === aq || n === iq) && (e12.$$typeof || t.$$typeof) ? true : nq(t, n) && r.equals(e12[n], t[n], n, n, e12, t, r);
}
const gq = "[object ArrayBuffer]", bq = "[object Arguments]", xq = "[object Boolean]", wq = "[object DataView]", Sq = "[object Date]", Oq = "[object Error]", jq = "[object Map]", Pq = "[object Number]", Aq = "[object Object]", _q = "[object RegExp]", Eq = "[object Set]", kq = "[object String]", Tq = { "[object Int8Array]": true, "[object Uint8Array]": true, "[object Uint8ClampedArray]": true, "[object Int16Array]": true, "[object Uint16Array]": true, "[object Int32Array]": true, "[object Uint32Array]": true, "[object Float16Array]": true, "[object Float32Array]": true, "[object Float64Array]": true, "[object BigInt64Array]": true, "[object BigUint64Array]": true }, $q = "[object URL]", Cq = Object.prototype.toString;
function Nq({ areArrayBuffersEqual: e12, areArraysEqual: t, areDataViewsEqual: r, areDatesEqual: n, areErrorsEqual: i, areFunctionsEqual: a, areMapsEqual: o, areNumbersEqual: s, areObjectsEqual: l, arePrimitiveWrappersEqual: u, areRegExpsEqual: f, areSetsEqual: c, areTypedArraysEqual: d, areUrlsEqual: h, unknownTagComparators: y }) {
  return function(m, g, b) {
    if (m === g) return true;
    if (m == null || g == null) return false;
    const x = typeof m;
    if (x !== typeof g) return false;
    if (x !== "object") return x === "number" ? s(m, g, b) : x === "function" ? a(m, g, b) : false;
    const O = m.constructor;
    if (O !== g.constructor) return false;
    if (O === Object) return l(m, g, b);
    if (Array.isArray(m)) return t(m, g, b);
    if (O === Date) return n(m, g, b);
    if (O === RegExp) return f(m, g, b);
    if (O === Map) return o(m, g, b);
    if (O === Set) return c(m, g, b);
    const w = Cq.call(m);
    if (w === Sq) return n(m, g, b);
    if (w === _q) return f(m, g, b);
    if (w === jq) return o(m, g, b);
    if (w === Eq) return c(m, g, b);
    if (w === Aq) return typeof m.then != "function" && typeof g.then != "function" && l(m, g, b);
    if (w === $q) return h(m, g, b);
    if (w === Oq) return i(m, g, b);
    if (w === bq) return l(m, g, b);
    if (Tq[w]) return d(m, g, b);
    if (w === gq) return e12(m, g, b);
    if (w === wq) return r(m, g, b);
    if (w === xq || w === Pq || w === kq) return u(m, g, b);
    if (y) {
      let S = y[w];
      if (!S) {
        const j = rq(m);
        j && (S = y[j]);
      }
      if (S) return S(m, g, b);
    }
    return false;
  };
}
function Mq({ circular: e12, createCustomConfig: t, strict: r }) {
  let n = { areArrayBuffersEqual: sq, areArraysEqual: r ? qo : lq, areDataViewsEqual: uq, areDatesEqual: cq, areErrorsEqual: fq, areFunctionsEqual: dq, areMapsEqual: r ? Ap(U1, qo) : U1, areNumbersEqual: pq, areObjectsEqual: r ? qo : hq, arePrimitiveWrappersEqual: mq, areRegExpsEqual: yq, areSetsEqual: r ? Ap(W1, qo) : W1, areTypedArraysEqual: r ? Ap(zc, qo) : zc, areUrlsEqual: vq, unknownTagComparators: void 0 };
  if (t && (n = Object.assign({}, n, t(n))), e12) {
    const i = du(n.areArraysEqual), a = du(n.areMapsEqual), o = du(n.areObjectsEqual), s = du(n.areSetsEqual);
    n = Object.assign({}, n, { areArraysEqual: i, areMapsEqual: a, areObjectsEqual: o, areSetsEqual: s });
  }
  return n;
}
function Iq(e12) {
  return function(t, r, n, i, a, o, s) {
    return e12(t, r, s);
  };
}
function Rq({ circular: e12, comparator: t, createState: r, equals: n, strict: i }) {
  if (r) return function(s, l) {
    const { cache: u = e12 ? /* @__PURE__ */ new WeakMap() : void 0, meta: f } = r();
    return t(s, l, { cache: u, equals: n, meta: f, strict: i });
  };
  if (e12) return function(s, l) {
    return t(s, l, { cache: /* @__PURE__ */ new WeakMap(), equals: n, meta: void 0, strict: i });
  };
  const a = { cache: void 0, equals: n, meta: void 0, strict: i };
  return function(s, l) {
    return t(s, l, a);
  };
}
const Dq = Jn();
Jn({ strict: true });
Jn({ circular: true });
Jn({ circular: true, strict: true });
Jn({ createInternalComparator: () => Ui });
Jn({ strict: true, createInternalComparator: () => Ui });
Jn({ circular: true, createInternalComparator: () => Ui });
Jn({ circular: true, createInternalComparator: () => Ui, strict: true });
function Jn(e12 = {}) {
  const { circular: t = false, createInternalComparator: r, createState: n, strict: i = false } = e12, a = Mq(e12), o = Nq(a), s = r ? r(o) : Iq(o);
  return Rq({ circular: t, comparator: o, createState: n, equals: s, strict: i });
}
function Lq(e12) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e12);
}
function H1(e12) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e12(a), r = -1) : Lq(i);
  };
  requestAnimationFrame(n);
}
function km(e12) {
  "@babel/helpers - typeof";
  return km = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, km(e12);
}
function Bq(e12) {
  return Wq(e12) || Uq(e12) || Fq(e12) || zq();
}
function zq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fq(e12, t) {
  if (e12) {
    if (typeof e12 == "string") return V1(e12, t);
    var r = Object.prototype.toString.call(e12).slice(8, -1);
    if (r === "Object" && e12.constructor && (r = e12.constructor.name), r === "Map" || r === "Set") return Array.from(e12);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return V1(e12, t);
  }
}
function V1(e12, t) {
  (t == null || t > e12.length) && (t = e12.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e12[r];
  return n;
}
function Uq(e12) {
  if (typeof Symbol < "u" && e12[Symbol.iterator] != null || e12["@@iterator"] != null) return Array.from(e12);
}
function Wq(e12) {
  if (Array.isArray(e12)) return e12;
}
function Hq() {
  var e12 = {}, t = function() {
    return null;
  }, r = false, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length) return;
        var o = a, s = Bq(o), l = s[0], u = s.slice(1);
        if (typeof l == "number") {
          H1(i.bind(null, u), l);
          return;
        }
        i(l), H1(i.bind(null, u));
        return;
      }
      km(a) === "object" && (e12 = a, t(e12)), typeof a == "function" && a();
    }
  };
  return { stop: function() {
    r = true;
  }, start: function(a) {
    r = false, n(a);
  }, subscribe: function(a) {
    return t = a, function() {
      t = function() {
        return null;
      };
    };
  } };
}
function sl(e12) {
  "@babel/helpers - typeof";
  return sl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sl(e12);
}
function K1(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function q1(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? K1(Object(r), true).forEach(function(n) {
      W_(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : K1(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function W_(e12, t, r) {
  return t = Vq(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function Vq(e12) {
  var t = Kq(e12, "string");
  return sl(t) === "symbol" ? t : String(t);
}
function Kq(e12, t) {
  if (sl(e12) !== "object" || e12 === null) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (sl(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
var qq = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, Gq = function(t) {
  return t;
}, Xq = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, ys = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return q1(q1({}, n), {}, W_({}, i, t(i, r[i])));
  }, {});
}, G1 = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(Xq(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
};
function Yq(e12, t) {
  return Zq(e12) || Jq(e12, t) || H_(e12, t) || Qq();
}
function Qq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Jq(e12, t) {
  var r = e12 == null ? null : typeof Symbol < "u" && e12[Symbol.iterator] || e12["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = true, u = false;
    try {
      if (a = (r = r.call(e12)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = true) ;
    } catch (f) {
      u = true, i = f;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function Zq(e12) {
  if (Array.isArray(e12)) return e12;
}
function eG(e12) {
  return nG(e12) || rG(e12) || H_(e12) || tG();
}
function tG() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H_(e12, t) {
  if (e12) {
    if (typeof e12 == "string") return Tm(e12, t);
    var r = Object.prototype.toString.call(e12).slice(8, -1);
    if (r === "Object" && e12.constructor && (r = e12.constructor.name), r === "Map" || r === "Set") return Array.from(e12);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Tm(e12, t);
  }
}
function rG(e12) {
  if (typeof Symbol < "u" && e12[Symbol.iterator] != null || e12["@@iterator"] != null) return Array.from(e12);
}
function nG(e12) {
  if (Array.isArray(e12)) return Tm(e12);
}
function Tm(e12, t) {
  (t == null || t > e12.length) && (t = e12.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e12[r];
  return n;
}
var Fc = 1e-4, V_ = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, K_ = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, X1 = function(t, r) {
  return function(n) {
    var i = V_(t, r);
    return K_(i, n);
  };
}, iG = function(t, r) {
  return function(n) {
    var i = V_(t, r), a = [].concat(eG(i.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return K_(a, n);
  };
}, Y1 = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  var i = r[0], a = r[1], o = r[2], s = r[3];
  if (r.length === 1) switch (r[0]) {
    case "linear":
      i = 0, a = 0, o = 1, s = 1;
      break;
    case "ease":
      i = 0.25, a = 0.1, o = 0.25, s = 1;
      break;
    case "ease-in":
      i = 0.42, a = 0, o = 1, s = 1;
      break;
    case "ease-out":
      i = 0.42, a = 0, o = 0.58, s = 1;
      break;
    case "ease-in-out":
      i = 0, a = 0, o = 0.58, s = 1;
      break;
    default: {
      var l = r[0].split("(");
      if (l[0] === "cubic-bezier" && l[1].split(")")[0].split(",").length === 4) {
        var u = l[1].split(")")[0].split(",").map(function(m) {
          return parseFloat(m);
        }), f = Yq(u, 4);
        i = f[0], a = f[1], o = f[2], s = f[3];
      }
    }
  }
  var c = X1(i, o), d = X1(a, s), h = iG(i, o), y = function(g) {
    return g > 1 ? 1 : g < 0 ? 0 : g;
  }, v = function(g) {
    for (var b = g > 1 ? 1 : g, x = b, O = 0; O < 8; ++O) {
      var w = c(x) - b, S = h(x);
      if (Math.abs(w - b) < Fc || S < Fc) return d(x);
      x = y(x - w / S);
    }
    return d(x);
  };
  return v.isStepper = false, v;
}, aG = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, s = o === void 0 ? 17 : o, l = function(f, c, d) {
    var h = -(f - c) * n, y = d * a, v = d + (h - y) * s / 1e3, m = d * s / 1e3 + f;
    return Math.abs(m - c) < Fc && Math.abs(v) < Fc ? [c, 0] : [m, v];
  };
  return l.isStepper = true, l.dt = s, l;
}, oG = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  var i = r[0];
  if (typeof i == "string") switch (i) {
    case "ease":
    case "ease-in-out":
    case "ease-out":
    case "ease-in":
    case "linear":
      return Y1(i);
    case "spring":
      return aG();
    default:
      if (i.split("(")[0] === "cubic-bezier") return Y1(i);
  }
  return typeof i == "function" ? i : null;
};
function ll(e12) {
  "@babel/helpers - typeof";
  return ll = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ll(e12);
}
function Q1(e12) {
  return uG(e12) || lG(e12) || q_(e12) || sG();
}
function sG() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lG(e12) {
  if (typeof Symbol < "u" && e12[Symbol.iterator] != null || e12["@@iterator"] != null) return Array.from(e12);
}
function uG(e12) {
  if (Array.isArray(e12)) return Cm(e12);
}
function J1(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ot(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? J1(Object(r), true).forEach(function(n) {
      $m(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : J1(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function $m(e12, t, r) {
  return t = cG(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function cG(e12) {
  var t = fG(e12, "string");
  return ll(t) === "symbol" ? t : String(t);
}
function fG(e12, t) {
  if (ll(e12) !== "object" || e12 === null) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (ll(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
function dG(e12, t) {
  return mG(e12) || hG(e12, t) || q_(e12, t) || pG();
}
function pG() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function q_(e12, t) {
  if (e12) {
    if (typeof e12 == "string") return Cm(e12, t);
    var r = Object.prototype.toString.call(e12).slice(8, -1);
    if (r === "Object" && e12.constructor && (r = e12.constructor.name), r === "Map" || r === "Set") return Array.from(e12);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Cm(e12, t);
  }
}
function Cm(e12, t) {
  (t == null || t > e12.length) && (t = e12.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e12[r];
  return n;
}
function hG(e12, t) {
  var r = e12 == null ? null : typeof Symbol < "u" && e12[Symbol.iterator] || e12["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = true, u = false;
    try {
      if (a = (r = r.call(e12)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = true) ;
    } catch (f) {
      u = true, i = f;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function mG(e12) {
  if (Array.isArray(e12)) return e12;
}
var Uc = function(t, r, n) {
  return t + (r - t) * n;
}, Nm = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, yG = function e11(t, r, n) {
  var i = ys(function(a, o) {
    if (Nm(o)) {
      var s = t(o.from, o.to, o.velocity), l = dG(s, 2), u = l[0], f = l[1];
      return ot(ot({}, o), {}, { from: u, velocity: f });
    }
    return o;
  }, r);
  return n < 1 ? ys(function(a, o) {
    return Nm(o) ? ot(ot({}, o), {}, { velocity: Uc(o.velocity, i[a].velocity, n), from: Uc(o.from, i[a].from, n) }) : o;
  }, r) : e11(t, i, n - 1);
};
const vG = function(e12, t, r, n, i) {
  var a = qq(e12, t), o = a.reduce(function(m, g) {
    return ot(ot({}, m), {}, $m({}, g, [e12[g], t[g]]));
  }, {}), s = a.reduce(function(m, g) {
    return ot(ot({}, m), {}, $m({}, g, { from: e12[g], velocity: 0, to: t[g] }));
  }, {}), l = -1, u, f, c = function() {
    return null;
  }, d = function() {
    return ys(function(g, b) {
      return b.from;
    }, s);
  }, h = function() {
    return !Object.values(s).filter(Nm).length;
  }, y = function(g) {
    u || (u = g);
    var b = g - u, x = b / r.dt;
    s = yG(r, s, x), i(ot(ot(ot({}, e12), t), d())), u = g, h() || (l = requestAnimationFrame(c));
  }, v = function(g) {
    f || (f = g);
    var b = (g - f) / n, x = ys(function(w, S) {
      return Uc.apply(void 0, Q1(S).concat([r(b)]));
    }, o);
    if (i(ot(ot(ot({}, e12), t), x)), b < 1) l = requestAnimationFrame(c);
    else {
      var O = ys(function(w, S) {
        return Uc.apply(void 0, Q1(S).concat([r(1)]));
      }, o);
      i(ot(ot(ot({}, e12), t), O));
    }
  };
  return c = r.isStepper ? y : v, function() {
    return requestAnimationFrame(c), function() {
      cancelAnimationFrame(l);
    };
  };
};
function Ha(e12) {
  "@babel/helpers - typeof";
  return Ha = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ha(e12);
}
var gG = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function bG(e12, t) {
  if (e12 == null) return {};
  var r = xG(e12, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e12);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e12, n) && (r[n] = e12[n]);
  }
  return r;
}
function xG(e12, t) {
  if (e12 == null) return {};
  var r = {}, n = Object.keys(e12), i, a;
  for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e12[i]);
  return r;
}
function _p(e12) {
  return jG(e12) || OG(e12) || SG(e12) || wG();
}
function wG() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SG(e12, t) {
  if (e12) {
    if (typeof e12 == "string") return Mm(e12, t);
    var r = Object.prototype.toString.call(e12).slice(8, -1);
    if (r === "Object" && e12.constructor && (r = e12.constructor.name), r === "Map" || r === "Set") return Array.from(e12);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Mm(e12, t);
  }
}
function OG(e12) {
  if (typeof Symbol < "u" && e12[Symbol.iterator] != null || e12["@@iterator"] != null) return Array.from(e12);
}
function jG(e12) {
  if (Array.isArray(e12)) return Mm(e12);
}
function Mm(e12, t) {
  (t == null || t > e12.length) && (t = e12.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e12[r];
  return n;
}
function Z1(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fr(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Z1(Object(r), true).forEach(function(n) {
      rs(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : Z1(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function rs(e12, t, r) {
  return t = G_(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function PG(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function AG(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, G_(n.key), n);
  }
}
function _G(e12, t, r) {
  return t && AG(e12.prototype, t), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function G_(e12) {
  var t = EG(e12, "string");
  return Ha(t) === "symbol" ? t : String(t);
}
function EG(e12, t) {
  if (Ha(e12) !== "object" || e12 === null) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (Ha(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
function kG(e12, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e12.prototype = Object.create(t && t.prototype, { constructor: { value: e12, writable: true, configurable: true } }), Object.defineProperty(e12, "prototype", { writable: false }), t && Im(e12, t);
}
function Im(e12, t) {
  return Im = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Im(e12, t);
}
function TG(e12) {
  var t = $G();
  return function() {
    var n = Wc(e12), i;
    if (t) {
      var a = Wc(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return Rm(this, i);
  };
}
function Rm(e12, t) {
  if (t && (Ha(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Dm(e12);
}
function Dm(e12) {
  if (e12 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e12;
}
function $G() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
  if (typeof Proxy == "function") return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function Wc(e12) {
  return Wc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Wc(e12);
}
var Rr = function(e12) {
  kG(r, e12);
  var t = TG(r);
  function r(n, i) {
    var a;
    PG(this, r), a = t.call(this, n, i);
    var o = a.props, s = o.isActive, l = o.attributeName, u = o.from, f = o.to, c = o.steps, d = o.children, h = o.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(Dm(a)), a.changeStyle = a.changeStyle.bind(Dm(a)), !s || h <= 0) return a.state = { style: {} }, typeof d == "function" && (a.state = { style: f }), Rm(a);
    if (c && c.length) a.state = { style: c[0].style };
    else if (u) {
      if (typeof d == "function") return a.state = { style: u }, Rm(a);
      a.state = { style: l ? rs({}, l, u) : u };
    } else a.state = { style: {} };
    return a;
  }
  return _G(r, [{ key: "componentDidMount", value: function() {
    var i = this.props, a = i.isActive, o = i.canBegin;
    this.mounted = true, !(!a || !o) && this.runAnimation(this.props);
  } }, { key: "componentDidUpdate", value: function(i) {
    var a = this.props, o = a.isActive, s = a.canBegin, l = a.attributeName, u = a.shouldReAnimate, f = a.to, c = a.from, d = this.state.style;
    if (s) {
      if (!o) {
        var h = { style: l ? rs({}, l, f) : f };
        this.state && d && (l && d[l] !== f || !l && d !== f) && this.setState(h);
        return;
      }
      if (!(Dq(i.to, f) && i.canBegin && i.isActive)) {
        var y = !i.canBegin || !i.isActive;
        this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
        var v = y || u ? c : i.to;
        if (this.state && d) {
          var m = { style: l ? rs({}, l, v) : v };
          (l && d[l] !== v || !l && d !== v) && this.setState(m);
        }
        this.runAnimation(fr(fr({}, this.props), {}, { from: v, begin: 0 }));
      }
    }
  } }, { key: "componentWillUnmount", value: function() {
    this.mounted = false;
    var i = this.props.onAnimationEnd;
    this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), i && i();
  } }, { key: "handleStyleChange", value: function(i) {
    this.changeStyle(i);
  } }, { key: "changeStyle", value: function(i) {
    this.mounted && this.setState({ style: i });
  } }, { key: "runJSAnimation", value: function(i) {
    var a = this, o = i.from, s = i.to, l = i.duration, u = i.easing, f = i.begin, c = i.onAnimationEnd, d = i.onAnimationStart, h = vG(o, s, oG(u), l, this.changeStyle), y = function() {
      a.stopJSAnimation = h();
    };
    this.manager.start([d, f, y, l, c]);
  } }, { key: "runStepAnimation", value: function(i) {
    var a = this, o = i.steps, s = i.begin, l = i.onAnimationStart, u = o[0], f = u.style, c = u.duration, d = c === void 0 ? 0 : c, h = function(v, m, g) {
      if (g === 0) return v;
      var b = m.duration, x = m.easing, O = x === void 0 ? "ease" : x, w = m.style, S = m.properties, j = m.onAnimationEnd, P = g > 0 ? o[g - 1] : m, k = S || Object.keys(w);
      if (typeof O == "function" || O === "spring") return [].concat(_p(v), [a.runJSAnimation.bind(a, { from: P.style, to: w, duration: b, easing: O }), b]);
      var T = G1(k, b, O), C = fr(fr(fr({}, P.style), w), {}, { transition: T });
      return [].concat(_p(v), [C, b, j]).filter(Gq);
    };
    return this.manager.start([l].concat(_p(o.reduce(h, [f, Math.max(d, s)])), [i.onAnimationEnd]));
  } }, { key: "runAnimation", value: function(i) {
    this.manager || (this.manager = Hq());
    var a = i.begin, o = i.duration, s = i.attributeName, l = i.to, u = i.easing, f = i.onAnimationStart, c = i.onAnimationEnd, d = i.steps, h = i.children, y = this.manager;
    if (this.unSubscribe = y.subscribe(this.handleStyleChange), typeof u == "function" || typeof h == "function" || u === "spring") {
      this.runJSAnimation(i);
      return;
    }
    if (d.length > 1) {
      this.runStepAnimation(i);
      return;
    }
    var v = s ? rs({}, s, l) : l, m = G1(Object.keys(v), o, u);
    y.start([f, a, fr(fr({}, v), {}, { transition: m }), o, c]);
  } }, { key: "render", value: function() {
    var i = this.props, a = i.children;
    i.begin;
    var o = i.duration;
    i.attributeName, i.easing;
    var s = i.isActive;
    i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
    var l = bG(i, gG), u = A.Children.count(a), f = this.state.style;
    if (typeof a == "function") return a(f);
    if (!s || u === 0 || o <= 0) return a;
    var c = function(h) {
      var y = h.props, v = y.style, m = v === void 0 ? {} : v, g = y.className, b = A.cloneElement(h, fr(fr({}, l), {}, { style: fr(fr({}, m), f), className: g }));
      return b;
    };
    return u === 1 ? c(A.Children.only(a)) : E.createElement("div", null, A.Children.map(a, function(d) {
      return c(d);
    }));
  } }]), r;
}(A.PureComponent);
Rr.displayName = "Animate";
Rr.defaultProps = { begin: 0, duration: 1e3, from: "", to: "", attributeName: "", easing: "ease", isActive: true, canBegin: true, steps: [], onAnimationEnd: function() {
}, onAnimationStart: function() {
} };
Rr.propTypes = { from: ve.oneOfType([ve.object, ve.string]), to: ve.oneOfType([ve.object, ve.string]), attributeName: ve.string, duration: ve.number, begin: ve.number, easing: ve.oneOfType([ve.string, ve.func]), steps: ve.arrayOf(ve.shape({ duration: ve.number.isRequired, style: ve.object.isRequired, easing: ve.oneOfType([ve.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), ve.func]), properties: ve.arrayOf("string"), onAnimationEnd: ve.func })), children: ve.oneOfType([ve.node, ve.func]), isActive: ve.bool, canBegin: ve.bool, onAnimationEnd: ve.func, shouldReAnimate: ve.bool, onAnimationStart: ve.func, onAnimationReStart: ve.func };
function ul(e12) {
  "@babel/helpers - typeof";
  return ul = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ul(e12);
}
function Hc() {
  return Hc = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, Hc.apply(this, arguments);
}
function CG(e12, t) {
  return RG(e12) || IG(e12, t) || MG(e12, t) || NG();
}
function NG() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function MG(e12, t) {
  if (e12) {
    if (typeof e12 == "string") return ew(e12, t);
    var r = Object.prototype.toString.call(e12).slice(8, -1);
    if (r === "Object" && e12.constructor && (r = e12.constructor.name), r === "Map" || r === "Set") return Array.from(e12);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ew(e12, t);
  }
}
function ew(e12, t) {
  (t == null || t > e12.length) && (t = e12.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e12[r];
  return n;
}
function IG(e12, t) {
  var r = e12 == null ? null : typeof Symbol < "u" && e12[Symbol.iterator] || e12["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = true, u = false;
    try {
      if (a = (r = r.call(e12)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = true) ;
    } catch (f) {
      u = true, i = f;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function RG(e12) {
  if (Array.isArray(e12)) return e12;
}
function tw(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rw(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tw(Object(r), true).forEach(function(n) {
      DG(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : tw(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function DG(e12, t, r) {
  return t = LG(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function LG(e12) {
  var t = BG(e12, "string");
  return ul(t) == "symbol" ? t : t + "";
}
function BG(e12, t) {
  if (ul(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (ul(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
var nw = function(t, r, n, i, a) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), s = i >= 0 ? 1 : -1, l = n >= 0 ? 1 : -1, u = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, f;
  if (o > 0 && a instanceof Array) {
    for (var c = [0, 0, 0, 0], d = 0, h = 4; d < h; d++) c[d] = a[d] > o ? o : a[d];
    f = "M".concat(t, ",").concat(r + s * c[0]), c[0] > 0 && (f += "A ".concat(c[0], ",").concat(c[0], ",0,0,").concat(u, ",").concat(t + l * c[0], ",").concat(r)), f += "L ".concat(t + n - l * c[1], ",").concat(r), c[1] > 0 && (f += "A ".concat(c[1], ",").concat(c[1], ",0,0,").concat(u, `,
        `).concat(t + n, ",").concat(r + s * c[1])), f += "L ".concat(t + n, ",").concat(r + i - s * c[2]), c[2] > 0 && (f += "A ".concat(c[2], ",").concat(c[2], ",0,0,").concat(u, `,
        `).concat(t + n - l * c[2], ",").concat(r + i)), f += "L ".concat(t + l * c[3], ",").concat(r + i), c[3] > 0 && (f += "A ".concat(c[3], ",").concat(c[3], ",0,0,").concat(u, `,
        `).concat(t, ",").concat(r + i - s * c[3])), f += "Z";
  } else if (o > 0 && a === +a && a > 0) {
    var y = Math.min(o, a);
    f = "M ".concat(t, ",").concat(r + s * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(u, ",").concat(t + l * y, ",").concat(r, `
            L `).concat(t + n - l * y, ",").concat(r, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(u, ",").concat(t + n, ",").concat(r + s * y, `
            L `).concat(t + n, ",").concat(r + i - s * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(u, ",").concat(t + n - l * y, ",").concat(r + i, `
            L `).concat(t + l * y, ",").concat(r + i, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(u, ",").concat(t, ",").concat(r + i - s * y, " Z");
  } else f = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
  return f;
}, zG = function(t, r) {
  if (!t || !r) return false;
  var n = t.x, i = t.y, a = r.x, o = r.y, s = r.width, l = r.height;
  if (Math.abs(s) > 0 && Math.abs(l) > 0) {
    var u = Math.min(a, a + s), f = Math.max(a, a + s), c = Math.min(o, o + l), d = Math.max(o, o + l);
    return n >= u && n <= f && i >= c && i <= d;
  }
  return false;
}, FG = { x: 0, y: 0, width: 0, height: 0, radius: 0, isAnimationActive: false, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, dg = function(t) {
  var r = rw(rw({}, FG), t), n = A.useRef(), i = A.useState(-1), a = CG(i, 2), o = a[0], s = a[1];
  A.useEffect(function() {
    if (n.current && n.current.getTotalLength) try {
      var O = n.current.getTotalLength();
      O && s(O);
    } catch {
    }
  }, []);
  var l = r.x, u = r.y, f = r.width, c = r.height, d = r.radius, h = r.className, y = r.animationEasing, v = r.animationDuration, m = r.animationBegin, g = r.isAnimationActive, b = r.isUpdateAnimationActive;
  if (l !== +l || u !== +u || f !== +f || c !== +c || f === 0 || c === 0) return null;
  var x = le("recharts-rectangle", h);
  return b ? E.createElement(Rr, { canBegin: o > 0, from: { width: f, height: c, x: l, y: u }, to: { width: f, height: c, x: l, y: u }, duration: v, animationEasing: y, isActive: b }, function(O) {
    var w = O.width, S = O.height, j = O.x, P = O.y;
    return E.createElement(Rr, { canBegin: o > 0, from: "0px ".concat(o === -1 ? 1 : o, "px"), to: "".concat(o, "px 0px"), attributeName: "strokeDasharray", begin: m, duration: v, isActive: g, easing: y }, E.createElement("path", Hc({}, ee(r, true), { className: x, d: nw(j, P, w, S, d), ref: n })));
  }) : E.createElement("path", Hc({}, ee(r, true), { className: x, d: nw(l, u, f, c, d) }));
}, UG = ["points", "className", "baseLinePoints", "connectNulls"];
function ua() {
  return ua = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, ua.apply(this, arguments);
}
function WG(e12, t) {
  if (e12 == null) return {};
  var r = HG(e12, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e12);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e12, n) && (r[n] = e12[n]);
  }
  return r;
}
function HG(e12, t) {
  if (e12 == null) return {};
  var r = {};
  for (var n in e12) if (Object.prototype.hasOwnProperty.call(e12, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e12[n];
  }
  return r;
}
function iw(e12) {
  return GG(e12) || qG(e12) || KG(e12) || VG();
}
function VG() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function KG(e12, t) {
  if (e12) {
    if (typeof e12 == "string") return Lm(e12, t);
    var r = Object.prototype.toString.call(e12).slice(8, -1);
    if (r === "Object" && e12.constructor && (r = e12.constructor.name), r === "Map" || r === "Set") return Array.from(e12);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Lm(e12, t);
  }
}
function qG(e12) {
  if (typeof Symbol < "u" && e12[Symbol.iterator] != null || e12["@@iterator"] != null) return Array.from(e12);
}
function GG(e12) {
  if (Array.isArray(e12)) return Lm(e12);
}
function Lm(e12, t) {
  (t == null || t > e12.length) && (t = e12.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e12[r];
  return n;
}
var aw = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, XG = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    aw(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), aw(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, vs = function(t, r) {
  var n = XG(t);
  r && (n = [n.reduce(function(a, o) {
    return [].concat(iw(a), iw(o));
  }, [])]);
  var i = n.map(function(a) {
    return a.reduce(function(o, s, l) {
      return "".concat(o).concat(l === 0 ? "M" : "L").concat(s.x, ",").concat(s.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(i, "Z") : i;
}, YG = function(t, r, n) {
  var i = vs(t, n);
  return "".concat(i.slice(-1) === "Z" ? i.slice(0, -1) : i, "L").concat(vs(r.reverse(), n).slice(1));
}, QG = function(t) {
  var r = t.points, n = t.className, i = t.baseLinePoints, a = t.connectNulls, o = WG(t, UG);
  if (!r || !r.length) return null;
  var s = le("recharts-polygon", n);
  if (i && i.length) {
    var l = o.stroke && o.stroke !== "none", u = YG(r, i, a);
    return E.createElement("g", { className: s }, E.createElement("path", ua({}, ee(o, true), { fill: u.slice(-1) === "Z" ? o.fill : "none", stroke: "none", d: u })), l ? E.createElement("path", ua({}, ee(o, true), { fill: "none", d: vs(r, a) })) : null, l ? E.createElement("path", ua({}, ee(o, true), { fill: "none", d: vs(i, a) })) : null);
  }
  var f = vs(r, a);
  return E.createElement("path", ua({}, ee(o, true), { fill: f.slice(-1) === "Z" ? o.fill : "none", className: s, d: f }));
};
function Bm() {
  return Bm = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, Bm.apply(this, arguments);
}
var hd = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, o = le("recharts-dot", a);
  return r === +r && n === +n && i === +i ? A.createElement("circle", Bm({}, ee(t, false), uc(t), { className: o, cx: r, cy: n, r: i })) : null;
};
function cl(e12) {
  "@babel/helpers - typeof";
  return cl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cl(e12);
}
var JG = ["x", "y", "top", "left", "width", "height", "className"];
function zm() {
  return zm = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, zm.apply(this, arguments);
}
function ow(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ZG(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ow(Object(r), true).forEach(function(n) {
      eX(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : ow(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function eX(e12, t, r) {
  return t = tX(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function tX(e12) {
  var t = rX(e12, "string");
  return cl(t) == "symbol" ? t : t + "";
}
function rX(e12, t) {
  if (cl(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (cl(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
function nX(e12, t) {
  if (e12 == null) return {};
  var r = iX(e12, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e12);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e12, n) && (r[n] = e12[n]);
  }
  return r;
}
function iX(e12, t) {
  if (e12 == null) return {};
  var r = {};
  for (var n in e12) if (Object.prototype.hasOwnProperty.call(e12, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e12[n];
  }
  return r;
}
var aX = function(t, r, n, i, a, o) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
}, oX = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.top, s = o === void 0 ? 0 : o, l = t.left, u = l === void 0 ? 0 : l, f = t.width, c = f === void 0 ? 0 : f, d = t.height, h = d === void 0 ? 0 : d, y = t.className, v = nX(t, JG), m = ZG({ x: n, y: a, top: s, left: u, width: c, height: h }, v);
  return !q(n) || !q(a) || !q(c) || !q(h) || !q(s) || !q(u) ? null : E.createElement("path", zm({}, ee(m, true), { className: le("recharts-cross", y), d: aX(n, a, c, h, s, u) }));
}, sX = ud, lX = o_, uX = Lr;
function cX(e12, t) {
  return e12 && e12.length ? sX(e12, uX(t), lX) : void 0;
}
var fX = cX;
const dX = be(fX);
var pX = ud, hX = Lr, mX = s_;
function yX(e12, t) {
  return e12 && e12.length ? pX(e12, hX(t), mX) : void 0;
}
var vX = yX;
const gX = be(vX);
var bX = ["cx", "cy", "angle", "ticks", "axisLine"], xX = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function Va(e12) {
  "@babel/helpers - typeof";
  return Va = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Va(e12);
}
function gs() {
  return gs = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, gs.apply(this, arguments);
}
function sw(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ti(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sw(Object(r), true).forEach(function(n) {
      md(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : sw(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function lw(e12, t) {
  if (e12 == null) return {};
  var r = wX(e12, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e12);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e12, n) && (r[n] = e12[n]);
  }
  return r;
}
function wX(e12, t) {
  if (e12 == null) return {};
  var r = {};
  for (var n in e12) if (Object.prototype.hasOwnProperty.call(e12, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e12[n];
  }
  return r;
}
function SX(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function uw(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, Y_(n.key), n);
  }
}
function OX(e12, t, r) {
  return t && uw(e12.prototype, t), r && uw(e12, r), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function jX(e12, t, r) {
  return t = Vc(t), PX(e12, X_() ? Reflect.construct(t, r || [], Vc(e12).constructor) : t.apply(e12, r));
}
function PX(e12, t) {
  if (t && (Va(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return AX(e12);
}
function AX(e12) {
  if (e12 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e12;
}
function X_() {
  try {
    var e12 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (X_ = function() {
    return !!e12;
  })();
}
function Vc(e12) {
  return Vc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Vc(e12);
}
function _X(e12, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e12.prototype = Object.create(t && t.prototype, { constructor: { value: e12, writable: true, configurable: true } }), Object.defineProperty(e12, "prototype", { writable: false }), t && Fm(e12, t);
}
function Fm(e12, t) {
  return Fm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Fm(e12, t);
}
function md(e12, t, r) {
  return t = Y_(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function Y_(e12) {
  var t = EX(e12, "string");
  return Va(t) == "symbol" ? t : t + "";
}
function EX(e12, t) {
  if (Va(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (Va(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
var yd = function(e12) {
  function t() {
    return SX(this, t), jX(this, t, arguments);
  }
  return _X(t, e12), OX(t, [{ key: "getTickValueCoord", value: function(n) {
    var i = n.coordinate, a = this.props, o = a.angle, s = a.cx, l = a.cy;
    return _e(s, l, i, o);
  } }, { key: "getTickTextAnchor", value: function() {
    var n = this.props.orientation, i;
    switch (n) {
      case "left":
        i = "end";
        break;
      case "right":
        i = "start";
        break;
      default:
        i = "middle";
        break;
    }
    return i;
  } }, { key: "getViewBox", value: function() {
    var n = this.props, i = n.cx, a = n.cy, o = n.angle, s = n.ticks, l = dX(s, function(f) {
      return f.coordinate || 0;
    }), u = gX(s, function(f) {
      return f.coordinate || 0;
    });
    return { cx: i, cy: a, startAngle: o, endAngle: o, innerRadius: u.coordinate || 0, outerRadius: l.coordinate || 0 };
  } }, { key: "renderAxisLine", value: function() {
    var n = this.props, i = n.cx, a = n.cy, o = n.angle, s = n.ticks, l = n.axisLine, u = lw(n, bX), f = s.reduce(function(y, v) {
      return [Math.min(y[0], v.coordinate), Math.max(y[1], v.coordinate)];
    }, [1 / 0, -1 / 0]), c = _e(i, a, f[0], o), d = _e(i, a, f[1], o), h = ti(ti(ti({}, ee(u, false)), {}, { fill: "none" }, ee(l, false)), {}, { x1: c.x, y1: c.y, x2: d.x, y2: d.y });
    return E.createElement("line", gs({ className: "recharts-polar-radius-axis-line" }, h));
  } }, { key: "renderTicks", value: function() {
    var n = this, i = this.props, a = i.ticks, o = i.tick, s = i.angle, l = i.tickFormatter, u = i.stroke, f = lw(i, xX), c = this.getTickTextAnchor(), d = ee(f, false), h = ee(o, false), y = a.map(function(v, m) {
      var g = n.getTickValueCoord(v), b = ti(ti(ti(ti({ textAnchor: c, transform: "rotate(".concat(90 - s, ", ").concat(g.x, ", ").concat(g.y, ")") }, d), {}, { stroke: "none", fill: u }, h), {}, { index: m }, g), {}, { payload: v });
      return E.createElement(pe, gs({ className: le("recharts-polar-radius-axis-tick", I_(o)), key: "tick-".concat(v.coordinate) }, $i(n.props, v, m)), t.renderTickItem(o, b, l ? l(v.value, m) : v.value));
    });
    return E.createElement(pe, { className: "recharts-polar-radius-axis-ticks" }, y);
  } }, { key: "render", value: function() {
    var n = this.props, i = n.ticks, a = n.axisLine, o = n.tick;
    return !i || !i.length ? null : E.createElement(pe, { className: le("recharts-polar-radius-axis", this.props.className) }, a && this.renderAxisLine(), o && this.renderTicks(), rt.renderCallByParent(this.props, this.getViewBox()));
  } }], [{ key: "renderTickItem", value: function(n, i, a) {
    var o;
    return E.isValidElement(n) ? o = E.cloneElement(n, i) : ie(n) ? o = n(i) : o = E.createElement(Ci, gs({}, i, { className: "recharts-polar-radius-axis-tick-value" }), a), o;
  } }]);
}(A.PureComponent);
md(yd, "displayName", "PolarRadiusAxis");
md(yd, "axisType", "radiusAxis");
md(yd, "defaultProps", { type: "number", radiusAxisId: 0, cx: 0, cy: 0, angle: 0, orientation: "right", stroke: "#ccc", axisLine: true, tick: true, tickCount: 5, allowDataOverflow: false, scale: "auto", allowDuplicatedCategory: true });
function Ka(e12) {
  "@babel/helpers - typeof";
  return Ka = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ka(e12);
}
function li() {
  return li = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, li.apply(this, arguments);
}
function cw(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ri(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cw(Object(r), true).forEach(function(n) {
      vd(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : cw(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function kX(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function fw(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, J_(n.key), n);
  }
}
function TX(e12, t, r) {
  return t && fw(e12.prototype, t), r && fw(e12, r), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function $X(e12, t, r) {
  return t = Kc(t), CX(e12, Q_() ? Reflect.construct(t, r || [], Kc(e12).constructor) : t.apply(e12, r));
}
function CX(e12, t) {
  if (t && (Ka(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return NX(e12);
}
function NX(e12) {
  if (e12 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e12;
}
function Q_() {
  try {
    var e12 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Q_ = function() {
    return !!e12;
  })();
}
function Kc(e12) {
  return Kc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Kc(e12);
}
function MX(e12, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e12.prototype = Object.create(t && t.prototype, { constructor: { value: e12, writable: true, configurable: true } }), Object.defineProperty(e12, "prototype", { writable: false }), t && Um(e12, t);
}
function Um(e12, t) {
  return Um = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Um(e12, t);
}
function vd(e12, t, r) {
  return t = J_(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function J_(e12) {
  var t = IX(e12, "string");
  return Ka(t) == "symbol" ? t : t + "";
}
function IX(e12, t) {
  if (Ka(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (Ka(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
var RX = Math.PI / 180, dw = 1e-5, gd = function(e12) {
  function t() {
    return kX(this, t), $X(this, t, arguments);
  }
  return MX(t, e12), TX(t, [{ key: "getTickLineCoord", value: function(n) {
    var i = this.props, a = i.cx, o = i.cy, s = i.radius, l = i.orientation, u = i.tickSize, f = u || 8, c = _e(a, o, s, n.coordinate), d = _e(a, o, s + (l === "inner" ? -1 : 1) * f, n.coordinate);
    return { x1: c.x, y1: c.y, x2: d.x, y2: d.y };
  } }, { key: "getTickTextAnchor", value: function(n) {
    var i = this.props.orientation, a = Math.cos(-n.coordinate * RX), o;
    return a > dw ? o = i === "outer" ? "start" : "end" : a < -dw ? o = i === "outer" ? "end" : "start" : o = "middle", o;
  } }, { key: "renderAxisLine", value: function() {
    var n = this.props, i = n.cx, a = n.cy, o = n.radius, s = n.axisLine, l = n.axisLineType, u = ri(ri({}, ee(this.props, false)), {}, { fill: "none" }, ee(s, false));
    if (l === "circle") return E.createElement(hd, li({ className: "recharts-polar-angle-axis-line" }, u, { cx: i, cy: a, r: o }));
    var f = this.props.ticks, c = f.map(function(d) {
      return _e(i, a, o, d.coordinate);
    });
    return E.createElement(QG, li({ className: "recharts-polar-angle-axis-line" }, u, { points: c }));
  } }, { key: "renderTicks", value: function() {
    var n = this, i = this.props, a = i.ticks, o = i.tick, s = i.tickLine, l = i.tickFormatter, u = i.stroke, f = ee(this.props, false), c = ee(o, false), d = ri(ri({}, f), {}, { fill: "none" }, ee(s, false)), h = a.map(function(y, v) {
      var m = n.getTickLineCoord(y), g = n.getTickTextAnchor(y), b = ri(ri(ri({ textAnchor: g }, f), {}, { stroke: "none", fill: u }, c), {}, { index: v, payload: y, x: m.x2, y: m.y2 });
      return E.createElement(pe, li({ className: le("recharts-polar-angle-axis-tick", I_(o)), key: "tick-".concat(y.coordinate) }, $i(n.props, y, v)), s && E.createElement("line", li({ className: "recharts-polar-angle-axis-tick-line" }, d, m)), o && t.renderTickItem(o, b, l ? l(y.value, v) : y.value));
    });
    return E.createElement(pe, { className: "recharts-polar-angle-axis-ticks" }, h);
  } }, { key: "render", value: function() {
    var n = this.props, i = n.ticks, a = n.radius, o = n.axisLine;
    return a <= 0 || !i || !i.length ? null : E.createElement(pe, { className: le("recharts-polar-angle-axis", this.props.className) }, o && this.renderAxisLine(), this.renderTicks());
  } }], [{ key: "renderTickItem", value: function(n, i, a) {
    var o;
    return E.isValidElement(n) ? o = E.cloneElement(n, i) : ie(n) ? o = n(i) : o = E.createElement(Ci, li({}, i, { className: "recharts-polar-angle-axis-tick-value" }), a), o;
  } }]);
}(A.PureComponent);
vd(gd, "displayName", "PolarAngleAxis");
vd(gd, "axisType", "angleAxis");
vd(gd, "defaultProps", { type: "category", angleAxisId: 0, scale: "auto", cx: 0, cy: 0, orientation: "outer", axisLine: true, tickLine: true, tickSize: 8, tick: true, hide: false, allowDuplicatedCategory: true });
var DX = nA, LX = DX(Object.getPrototypeOf, Object), BX = LX, zX = pn, FX = BX, UX = hn, WX = "[object Object]", HX = Function.prototype, VX = Object.prototype, Z_ = HX.toString, KX = VX.hasOwnProperty, qX = Z_.call(Object);
function GX(e12) {
  if (!UX(e12) || zX(e12) != WX) return false;
  var t = FX(e12);
  if (t === null) return true;
  var r = KX.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Z_.call(r) == qX;
}
var XX = GX;
const YX = be(XX);
var QX = pn, JX = hn, ZX = "[object Boolean]";
function eY(e12) {
  return e12 === true || e12 === false || JX(e12) && QX(e12) == ZX;
}
var tY = eY;
const rY = be(tY);
function fl(e12) {
  "@babel/helpers - typeof";
  return fl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fl(e12);
}
function qc() {
  return qc = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, qc.apply(this, arguments);
}
function nY(e12, t) {
  return sY(e12) || oY(e12, t) || aY(e12, t) || iY();
}
function iY() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aY(e12, t) {
  if (e12) {
    if (typeof e12 == "string") return pw(e12, t);
    var r = Object.prototype.toString.call(e12).slice(8, -1);
    if (r === "Object" && e12.constructor && (r = e12.constructor.name), r === "Map" || r === "Set") return Array.from(e12);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pw(e12, t);
  }
}
function pw(e12, t) {
  (t == null || t > e12.length) && (t = e12.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e12[r];
  return n;
}
function oY(e12, t) {
  var r = e12 == null ? null : typeof Symbol < "u" && e12[Symbol.iterator] || e12["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = true, u = false;
    try {
      if (a = (r = r.call(e12)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = true) ;
    } catch (f) {
      u = true, i = f;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function sY(e12) {
  if (Array.isArray(e12)) return e12;
}
function hw(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mw(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hw(Object(r), true).forEach(function(n) {
      lY(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : hw(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function lY(e12, t, r) {
  return t = uY(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function uY(e12) {
  var t = cY(e12, "string");
  return fl(t) == "symbol" ? t : t + "";
}
function cY(e12, t) {
  if (fl(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (fl(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
var yw = function(t, r, n, i, a) {
  var o = n - i, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - o / 2, ",").concat(r + a), s += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, fY = { x: 0, y: 0, upperWidth: 0, lowerWidth: 0, height: 0, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, dY = function(t) {
  var r = mw(mw({}, fY), t), n = A.useRef(), i = A.useState(-1), a = nY(i, 2), o = a[0], s = a[1];
  A.useEffect(function() {
    if (n.current && n.current.getTotalLength) try {
      var x = n.current.getTotalLength();
      x && s(x);
    } catch {
    }
  }, []);
  var l = r.x, u = r.y, f = r.upperWidth, c = r.lowerWidth, d = r.height, h = r.className, y = r.animationEasing, v = r.animationDuration, m = r.animationBegin, g = r.isUpdateAnimationActive;
  if (l !== +l || u !== +u || f !== +f || c !== +c || d !== +d || f === 0 && c === 0 || d === 0) return null;
  var b = le("recharts-trapezoid", h);
  return g ? E.createElement(Rr, { canBegin: o > 0, from: { upperWidth: 0, lowerWidth: 0, height: d, x: l, y: u }, to: { upperWidth: f, lowerWidth: c, height: d, x: l, y: u }, duration: v, animationEasing: y, isActive: g }, function(x) {
    var O = x.upperWidth, w = x.lowerWidth, S = x.height, j = x.x, P = x.y;
    return E.createElement(Rr, { canBegin: o > 0, from: "0px ".concat(o === -1 ? 1 : o, "px"), to: "".concat(o, "px 0px"), attributeName: "strokeDasharray", begin: m, duration: v, easing: y }, E.createElement("path", qc({}, ee(r, true), { className: b, d: yw(j, P, O, w, S), ref: n })));
  }) : E.createElement("g", null, E.createElement("path", qc({}, ee(r, true), { className: b, d: yw(l, u, f, c, d) })));
}, pY = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function dl(e12) {
  "@babel/helpers - typeof";
  return dl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, dl(e12);
}
function hY(e12, t) {
  if (e12 == null) return {};
  var r = mY(e12, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e12);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e12, n) && (r[n] = e12[n]);
  }
  return r;
}
function mY(e12, t) {
  if (e12 == null) return {};
  var r = {};
  for (var n in e12) if (Object.prototype.hasOwnProperty.call(e12, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e12[n];
  }
  return r;
}
function vw(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gc(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vw(Object(r), true).forEach(function(n) {
      yY(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : vw(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function yY(e12, t, r) {
  return t = vY(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function vY(e12) {
  var t = gY(e12, "string");
  return dl(t) == "symbol" ? t : t + "";
}
function gY(e12, t) {
  if (dl(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (dl(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
function bY(e12, t) {
  return Gc(Gc({}, t), e12);
}
function xY(e12, t) {
  return e12 === "symbols";
}
function gw(e12) {
  var t = e12.shapeType, r = e12.elementProps;
  switch (t) {
    case "rectangle":
      return E.createElement(dg, r);
    case "trapezoid":
      return E.createElement(dY, r);
    case "sector":
      return E.createElement(L_, r);
    case "symbols":
      if (xY(t)) return E.createElement($v, r);
      break;
    default:
      return null;
  }
}
function wY(e12) {
  return A.isValidElement(e12) ? e12.props : e12;
}
function e22(e12) {
  var t = e12.option, r = e12.shapeType, n = e12.propTransformer, i = n === void 0 ? bY : n, a = e12.activeClassName, o = a === void 0 ? "recharts-active-shape" : a, s = e12.isActive, l = hY(e12, pY), u;
  if (A.isValidElement(t)) u = A.cloneElement(t, Gc(Gc({}, l), wY(t)));
  else if (ie(t)) u = t(l);
  else if (YX(t) && !rY(t)) {
    var f = i(t, l);
    u = E.createElement(gw, { shapeType: r, elementProps: f });
  } else {
    var c = l;
    u = E.createElement(gw, { shapeType: r, elementProps: c });
  }
  return s ? E.createElement(pe, { className: o }, u) : u;
}
function bd(e12, t) {
  return t != null && "trapezoids" in e12.props;
}
function xd(e12, t) {
  return t != null && "sectors" in e12.props;
}
function pl(e12, t) {
  return t != null && "points" in e12.props;
}
function SY(e12, t) {
  var r, n, i = e12.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e12.x === t.x, a = e12.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e12.y === t.y;
  return i && a;
}
function OY(e12, t) {
  var r = e12.endAngle === t.endAngle, n = e12.startAngle === t.startAngle;
  return r && n;
}
function jY(e12, t) {
  var r = e12.x === t.x, n = e12.y === t.y, i = e12.z === t.z;
  return r && n && i;
}
function PY(e12, t) {
  var r;
  return bd(e12, t) ? r = SY : xd(e12, t) ? r = OY : pl(e12, t) && (r = jY), r;
}
function AY(e12, t) {
  var r;
  return bd(e12, t) ? r = "trapezoids" : xd(e12, t) ? r = "sectors" : pl(e12, t) && (r = "points"), r;
}
function _Y(e12, t) {
  if (bd(e12, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (xd(e12, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return pl(e12, t) ? t.payload : {};
}
function EY(e12) {
  var t = e12.activeTooltipItem, r = e12.graphicalItem, n = e12.itemData, i = AY(r, t), a = _Y(r, t), o = n.filter(function(l, u) {
    var f = Ua(a, l), c = r.props[i].filter(function(y) {
      var v = PY(r, t);
      return v(y, t);
    }), d = r.props[i].indexOf(c[c.length - 1]), h = u === d;
    return f && h;
  }), s = n.indexOf(o[o.length - 1]);
  return s;
}
var Mu;
function qa(e12) {
  "@babel/helpers - typeof";
  return qa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qa(e12);
}
function ca() {
  return ca = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, ca.apply(this, arguments);
}
function bw(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function je(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bw(Object(r), true).forEach(function(n) {
      Jt(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : bw(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function kY(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function xw(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, r2(n.key), n);
  }
}
function TY(e12, t, r) {
  return t && xw(e12.prototype, t), r && xw(e12, r), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function $Y(e12, t, r) {
  return t = Xc(t), CY(e12, t2() ? Reflect.construct(t, r || [], Xc(e12).constructor) : t.apply(e12, r));
}
function CY(e12, t) {
  if (t && (qa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return NY(e12);
}
function NY(e12) {
  if (e12 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e12;
}
function t2() {
  try {
    var e12 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (t2 = function() {
    return !!e12;
  })();
}
function Xc(e12) {
  return Xc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Xc(e12);
}
function MY(e12, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e12.prototype = Object.create(t && t.prototype, { constructor: { value: e12, writable: true, configurable: true } }), Object.defineProperty(e12, "prototype", { writable: false }), t && Wm(e12, t);
}
function Wm(e12, t) {
  return Wm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Wm(e12, t);
}
function Jt(e12, t, r) {
  return t = r2(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function r2(e12) {
  var t = IY(e12, "string");
  return qa(t) == "symbol" ? t : t + "";
}
function IY(e12, t) {
  if (qa(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (qa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e12);
}
var yn = function(e12) {
  function t(r) {
    var n;
    return kY(this, t), n = $Y(this, t, [r]), Jt(n, "pieRef", null), Jt(n, "sectorRefs", []), Jt(n, "id", So("recharts-pie-")), Jt(n, "handleAnimationEnd", function() {
      var i = n.props.onAnimationEnd;
      n.setState({ isAnimationFinished: true }), ie(i) && i();
    }), Jt(n, "handleAnimationStart", function() {
      var i = n.props.onAnimationStart;
      n.setState({ isAnimationFinished: false }), ie(i) && i();
    }), n.state = { isAnimationFinished: !r.isAnimationActive, prevIsAnimationActive: r.isAnimationActive, prevAnimationId: r.animationId, sectorToFocus: 0 }, n;
  }
  return MY(t, e12), TY(t, [{ key: "isActiveIndex", value: function(n) {
    var i = this.props.activeIndex;
    return Array.isArray(i) ? i.indexOf(n) !== -1 : n === i;
  } }, { key: "hasActiveIndex", value: function() {
    var n = this.props.activeIndex;
    return Array.isArray(n) ? n.length !== 0 : n || n === 0;
  } }, { key: "renderLabels", value: function(n) {
    var i = this.props.isAnimationActive;
    if (i && !this.state.isAnimationFinished) return null;
    var a = this.props, o = a.label, s = a.labelLine, l = a.dataKey, u = a.valueKey, f = ee(this.props, false), c = ee(o, false), d = ee(s, false), h = o && o.offsetRadius || 20, y = n.map(function(v, m) {
      var g = (v.startAngle + v.endAngle) / 2, b = _e(v.cx, v.cy, v.outerRadius + h, g), x = je(je(je(je({}, f), v), {}, { stroke: "none" }, c), {}, { index: m, textAnchor: t.getTextAnchor(b.x, v.cx) }, b), O = je(je(je(je({}, f), v), {}, { fill: "none", stroke: v.fill }, d), {}, { index: m, points: [_e(v.cx, v.cy, v.outerRadius, g), b] }), w = l;
      return se(l) && se(u) ? w = "value" : se(l) && (w = u), E.createElement(pe, { key: "label-".concat(v.startAngle, "-").concat(v.endAngle, "-").concat(v.midAngle, "-").concat(m) }, s && t.renderLabelLineItem(s, O, "line"), t.renderLabelItem(o, x, Ye(v, w)));
    });
    return E.createElement(pe, { className: "recharts-pie-labels" }, y);
  } }, { key: "renderSectorsStatically", value: function(n) {
    var i = this, a = this.props, o = a.activeShape, s = a.blendStroke, l = a.inactiveShape;
    return n.map(function(u, f) {
      if ((u == null ? void 0 : u.startAngle) === 0 && (u == null ? void 0 : u.endAngle) === 0 && n.length !== 1) return null;
      var c = i.isActiveIndex(f), d = l && i.hasActiveIndex() ? l : null, h = c ? o : d, y = je(je({}, u), {}, { stroke: s ? u.fill : u.stroke, tabIndex: -1 });
      return E.createElement(pe, ca({ ref: function(m) {
        m && !i.sectorRefs.includes(m) && i.sectorRefs.push(m);
      }, tabIndex: -1, className: "recharts-pie-sector" }, $i(i.props, u, f), { key: "sector-".concat(u == null ? void 0 : u.startAngle, "-").concat(u == null ? void 0 : u.endAngle, "-").concat(u.midAngle, "-").concat(f) }), E.createElement(e22, ca({ option: h, isActive: c, shapeType: "sector" }, y)));
    });
  } }, { key: "renderSectorsWithAnimation", value: function() {
    var n = this, i = this.props, a = i.sectors, o = i.isAnimationActive, s = i.animationBegin, l = i.animationDuration, u = i.animationEasing, f = i.animationId, c = this.state, d = c.prevSectors, h = c.prevIsAnimationActive;
    return E.createElement(Rr, { begin: s, duration: l, isActive: o, easing: u, from: { t: 0 }, to: { t: 1 }, key: "pie-".concat(f, "-").concat(h), onAnimationStart: this.handleAnimationStart, onAnimationEnd: this.handleAnimationEnd }, function(y) {
      var v = y.t, m = [], g = a && a[0], b = g.startAngle;
      return a.forEach(function(x, O) {
        var w = d && d[O], S = O > 0 ? Ut(x, "paddingAngle", 0) : 0;
        if (w) {
          var j = _t(w.endAngle - w.startAngle, x.endAngle - x.startAngle), P = je(je({}, x), {}, { startAngle: b + S, endAngle: b + j(v) + S });
          m.push(P), b = P.endAngle;
        } else {
          var k = x.endAngle, T = x.startAngle, C = _t(0, k - T), $ = C(v), L = je(je({}, x), {}, { startAngle: b + S, endAngle: b + $ + S });
          m.push(L), b = L.endAngle;
        }
      }), E.createElement(pe, null, n.renderSectorsStatically(m));
    });
  } }, { key: "attachKeyboardHandlers", value: function(n) {
    var i = this;
    n.onkeydown = function(a) {
      if (!a.altKey) switch (a.key) {
        case "ArrowLeft": {
          var o = ++i.state.sectorToFocus % i.sectorRefs.length;
          i.sectorRefs[o].focus(), i.setState({ sectorToFocus: o });
          break;
        }
        case "ArrowRight": {
          var s = --i.state.sectorToFocus < 0 ? i.sectorRefs.length - 1 : i.state.sectorToFocus % i.sectorRefs.length;
          i.sectorRefs[s].focus(), i.setState({ sectorToFocus: s });
          break;
        }
        case "Escape": {
          i.sectorRefs[i.state.sectorToFocus].blur(), i.setState({ sectorToFocus: 0 });
          break;
        }
      }
    };
  } }, { key: "renderSectors", value: function() {
    var n = this.props, i = n.sectors, a = n.isAnimationActive, o = this.state.prevSectors;
    return a && i && i.length && (!o || !Ua(o, i)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(i);
  } }, { key: "componentDidMount", value: function() {
    this.pieRef && this.attachKeyboardHandlers(this.pieRef);
  } }, { key: "render", value: function() {
    var n = this, i = this.props, a = i.hide, o = i.sectors, s = i.className, l = i.label, u = i.cx, f = i.cy, c = i.innerRadius, d = i.outerRadius, h = i.isAnimationActive, y = this.state.isAnimationFinished;
    if (a || !o || !o.length || !q(u) || !q(f) || !q(c) || !q(d)) return null;
    var v = le("recharts-pie", s);
    return E.createElement(pe, { tabIndex: this.props.rootTabIndex, className: v, ref: function(g) {
      n.pieRef = g;
    } }, this.renderSectors(), l && this.renderLabels(o), rt.renderCallByParent(this.props, null, false), (!h || y) && Zr.renderCallByParent(this.props, o, false));
  } }], [{ key: "getDerivedStateFromProps", value: function(n, i) {
    return i.prevIsAnimationActive !== n.isAnimationActive ? { prevIsAnimationActive: n.isAnimationActive, prevAnimationId: n.animationId, curSectors: n.sectors, prevSectors: [], isAnimationFinished: true } : n.isAnimationActive && n.animationId !== i.prevAnimationId ? { prevAnimationId: n.animationId, curSectors: n.sectors, prevSectors: i.curSectors, isAnimationFinished: true } : n.sectors !== i.curSectors ? { curSectors: n.sectors, isAnimationFinished: true } : null;
  } }, { key: "getTextAnchor", value: function(n, i) {
    return n > i ? "start" : n < i ? "end" : "middle";
  } }, { key: "renderLabelLineItem", value: function(n, i, a) {
    if (E.isValidElement(n)) return E.cloneElement(n, i);
    if (ie(n)) return n(i);
    var o = le("recharts-pie-label-line", typeof n != "boolean" ? n.className : "");
    return E.createElement(Sa, ca({}, i, { key: a, type: "linear", className: o }));
  } }, { key: "renderLabelItem", value: function(n, i, a) {
    if (E.isValidElement(n)) return E.cloneElement(n, i);
    var o = a;
    if (ie(n) && (o = n(i), E.isValidElement(o))) return o;
    var s = le("recharts-pie-label-text", typeof n != "boolean" && !ie(n) ? n.className : "");
    return E.createElement(Ci, ca({}, i, { alignmentBaseline: "middle", className: s }), o);
  } }]);
}(A.PureComponent);
Mu = yn;
Jt(yn, "displayName", "Pie");
Jt(yn, "defaultProps", { stroke: "#fff", fill: "#808080", legendType: "rect", cx: "50%", cy: "50%", startAngle: 0, endAngle: 360, innerRadius: 0, outerRadius: "80%", paddingAngle: 0, labelLine: true, hide: false, minAngle: 0, isAnimationActive: !Bi.isSsr, animationBegin: 400, animationDuration: 1500, animationEasing: "ease", nameKey: "name", blendStroke: false, rootTabIndex: 0 });
Jt(yn, "parseDeltaAngle", function(e12, t) {
  var r = xt(t - e12), n = Math.min(Math.abs(t - e12), 360);
  return r * n;
});
Jt(yn, "getRealPieData", function(e12) {
  var t = e12.data, r = e12.children, n = ee(e12, false), i = rr(r, La);
  return t && t.length ? t.map(function(a, o) {
    return je(je(je({ payload: a }, n), a), i && i[o] && i[o].props);
  }) : i && i.length ? i.map(function(a) {
    return je(je({}, n), a.props);
  }) : [];
});
Jt(yn, "parseCoordinateOfPie", function(e12, t) {
  var r = t.top, n = t.left, i = t.width, a = t.height, o = M_(i, a), s = n + wt(e12.cx, i, i / 2), l = r + wt(e12.cy, a, a / 2), u = wt(e12.innerRadius, o, 0), f = wt(e12.outerRadius, o, o * 0.8), c = e12.maxRadius || Math.sqrt(i * i + a * a) / 2;
  return { cx: s, cy: l, innerRadius: u, outerRadius: f, maxRadius: c };
});
Jt(yn, "getComposedData", function(e12) {
  var t = e12.item, r = e12.offset, n = t.type.defaultProps !== void 0 ? je(je({}, t.type.defaultProps), t.props) : t.props, i = Mu.getRealPieData(n);
  if (!i || !i.length) return null;
  var a = n.cornerRadius, o = n.startAngle, s = n.endAngle, l = n.paddingAngle, u = n.dataKey, f = n.nameKey, c = n.valueKey, d = n.tooltipType, h = Math.abs(n.minAngle), y = Mu.parseCoordinateOfPie(n, r), v = Mu.parseDeltaAngle(o, s), m = Math.abs(v), g = u;
  se(u) && se(c) ? (br(false, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), g = "value") : se(u) && (br(false, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), g = c);
  var b = i.filter(function(P) {
    return Ye(P, g, 0) !== 0;
  }).length, x = (m >= 360 ? b : b - 1) * l, O = m - b * h - x, w = i.reduce(function(P, k) {
    var T = Ye(k, g, 0);
    return P + (q(T) ? T : 0);
  }, 0), S;
  if (w > 0) {
    var j;
    S = i.map(function(P, k) {
      var T = Ye(P, g, 0), C = Ye(P, f, k), $ = (q(T) ? T : 0) / w, L;
      k ? L = j.endAngle + xt(v) * l * (T !== 0 ? 1 : 0) : L = o;
      var R = L + xt(v) * ((T !== 0 ? h : 0) + $ * O), D = (L + R) / 2, B = (y.innerRadius + y.outerRadius) / 2, W = [{ name: C, value: T, payload: P, dataKey: g, type: d }], N = _e(y.cx, y.cy, B, D);
      return j = je(je(je({ percent: $, cornerRadius: a, name: C, tooltipPayload: W, midAngle: D, middleRadius: B, tooltipPosition: N }, P), y), {}, { value: Ye(P, g), startAngle: L, endAngle: R, payload: P, paddingAngle: xt(v) * l }), j;
    });
  }
  return je(je({}, y), {}, { sectors: S, data: i });
});
var RY = Math.ceil, DY = Math.max;
function LY(e12, t, r, n) {
  for (var i = -1, a = DY(RY((t - e12) / (r || 1)), 0), o = Array(a); a--; ) o[n ? a : ++i] = e12, e12 += r;
  return o;
}
var BY = LY, zY = SA, ww = 1 / 0, FY = 17976931348623157e292;
function UY(e12) {
  if (!e12) return e12 === 0 ? e12 : 0;
  if (e12 = zY(e12), e12 === ww || e12 === -ww) {
    var t = e12 < 0 ? -1 : 1;
    return t * FY;
  }
  return e12 === e12 ? e12 : 0;
}
var n2 = UY, WY = BY, HY = rd, Ep = n2;
function VY(e12) {
  return function(t, r, n) {
    return n && typeof n != "number" && HY(t, r, n) && (r = n = void 0), t = Ep(t), r === void 0 ? (r = t, t = 0) : r = Ep(r), n = n === void 0 ? t < r ? 1 : -1 : Ep(n), WY(t, r, n, e12);
  };
}
var KY = VY, qY = KY, GY = qY(), XY = GY;
const Yc = be(XY);
function hl(e12) {
  "@babel/helpers - typeof";
  return hl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hl(e12);
}
function Sw(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ow(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sw(Object(r), true).forEach(function(n) {
      i2(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : Sw(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function i2(e12, t, r) {
  return t = YY(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function YY(e12) {
  var t = QY(e12, "string");
  return hl(t) == "symbol" ? t : t + "";
}
function QY(e12, t) {
  if (hl(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (hl(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
var JY = ["Webkit", "Moz", "O", "ms"], ZY = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = JY.reduce(function(a, o) {
    return Ow(Ow({}, a), {}, i2({}, o + n, r));
  }, {});
  return i[t] = r, i;
};
function Ga(e12) {
  "@babel/helpers - typeof";
  return Ga = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ga(e12);
}
function Qc() {
  return Qc = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, Qc.apply(this, arguments);
}
function jw(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kp(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jw(Object(r), true).forEach(function(n) {
      Rt(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : jw(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function eQ(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Pw(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, o2(n.key), n);
  }
}
function tQ(e12, t, r) {
  return t && Pw(e12.prototype, t), r && Pw(e12, r), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function rQ(e12, t, r) {
  return t = Jc(t), nQ(e12, a2() ? Reflect.construct(t, r || [], Jc(e12).constructor) : t.apply(e12, r));
}
function nQ(e12, t) {
  if (t && (Ga(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return iQ(e12);
}
function iQ(e12) {
  if (e12 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e12;
}
function a2() {
  try {
    var e12 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (a2 = function() {
    return !!e12;
  })();
}
function Jc(e12) {
  return Jc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Jc(e12);
}
function aQ(e12, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e12.prototype = Object.create(t && t.prototype, { constructor: { value: e12, writable: true, configurable: true } }), Object.defineProperty(e12, "prototype", { writable: false }), t && Hm(e12, t);
}
function Hm(e12, t) {
  return Hm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Hm(e12, t);
}
function Rt(e12, t, r) {
  return t = o2(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function o2(e12) {
  var t = oQ(e12, "string");
  return Ga(t) == "symbol" ? t : t + "";
}
function oQ(e12, t) {
  if (Ga(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (Ga(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e12);
}
var sQ = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, o = t.width, s = t.travellerWidth;
  if (!r || !r.length) return {};
  var l = r.length, u = hs().domain(Yc(0, l)).range([a, a + o - s]), f = u.domain().map(function(c) {
    return u(c);
  });
  return { isTextActive: false, isSlideMoving: false, isTravellerMoving: false, isTravellerFocused: false, startX: u(n), endX: u(i), scale: u, scaleValues: f };
}, Aw = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, Xa = function(e12) {
  function t(r) {
    var n;
    return eQ(this, t), n = rQ(this, t, [r]), Rt(n, "handleDrag", function(i) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i);
    }), Rt(n, "handleTouchMove", function(i) {
      i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0]);
    }), Rt(n, "handleDragEnd", function() {
      n.setState({ isTravellerMoving: false, isSlideMoving: false }, function() {
        var i = n.props, a = i.endIndex, o = i.onDragEnd, s = i.startIndex;
        o == null || o({ endIndex: a, startIndex: s });
      }), n.detachDragEndListener();
    }), Rt(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), Rt(n, "handleEnterSlideOrTraveller", function() {
      n.setState({ isTextActive: true });
    }), Rt(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({ isTextActive: false });
    }), Rt(n, "handleSlideDragStart", function(i) {
      var a = Aw(i) ? i.changedTouches[0] : i;
      n.setState({ isTravellerMoving: false, isSlideMoving: true, slideMoveStartX: a.pageX }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = { startX: n.handleTravellerDragStart.bind(n, "startX"), endX: n.handleTravellerDragStart.bind(n, "endX") }, n.state = {}, n;
  }
  return aQ(t, e12), tQ(t, [{ key: "componentWillUnmount", value: function() {
    this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
  } }, { key: "getIndex", value: function(n) {
    var i = n.startX, a = n.endX, o = this.state.scaleValues, s = this.props, l = s.gap, u = s.data, f = u.length - 1, c = Math.min(i, a), d = Math.max(i, a), h = t.getIndexInRange(o, c), y = t.getIndexInRange(o, d);
    return { startIndex: h - h % l, endIndex: y === f ? f : y - y % l };
  } }, { key: "getTextOfTick", value: function(n) {
    var i = this.props, a = i.data, o = i.tickFormatter, s = i.dataKey, l = Ye(a[n], s, n);
    return ie(o) ? o(l, n) : l;
  } }, { key: "attachDragEndListener", value: function() {
    window.addEventListener("mouseup", this.handleDragEnd, true), window.addEventListener("touchend", this.handleDragEnd, true), window.addEventListener("mousemove", this.handleDrag, true);
  } }, { key: "detachDragEndListener", value: function() {
    window.removeEventListener("mouseup", this.handleDragEnd, true), window.removeEventListener("touchend", this.handleDragEnd, true), window.removeEventListener("mousemove", this.handleDrag, true);
  } }, { key: "handleSlideDrag", value: function(n) {
    var i = this.state, a = i.slideMoveStartX, o = i.startX, s = i.endX, l = this.props, u = l.x, f = l.width, c = l.travellerWidth, d = l.startIndex, h = l.endIndex, y = l.onChange, v = n.pageX - a;
    v > 0 ? v = Math.min(v, u + f - c - s, u + f - c - o) : v < 0 && (v = Math.max(v, u - o, u - s));
    var m = this.getIndex({ startX: o + v, endX: s + v });
    (m.startIndex !== d || m.endIndex !== h) && y && y(m), this.setState({ startX: o + v, endX: s + v, slideMoveStartX: n.pageX });
  } }, { key: "handleTravellerDragStart", value: function(n, i) {
    var a = Aw(i) ? i.changedTouches[0] : i;
    this.setState({ isSlideMoving: false, isTravellerMoving: true, movingTravellerId: n, brushMoveStartX: a.pageX }), this.attachDragEndListener();
  } }, { key: "handleTravellerMove", value: function(n) {
    var i = this.state, a = i.brushMoveStartX, o = i.movingTravellerId, s = i.endX, l = i.startX, u = this.state[o], f = this.props, c = f.x, d = f.width, h = f.travellerWidth, y = f.onChange, v = f.gap, m = f.data, g = { startX: this.state.startX, endX: this.state.endX }, b = n.pageX - a;
    b > 0 ? b = Math.min(b, c + d - h - u) : b < 0 && (b = Math.max(b, c - u)), g[o] = u + b;
    var x = this.getIndex(g), O = x.startIndex, w = x.endIndex, S = function() {
      var P = m.length - 1;
      return o === "startX" && (s > l ? O % v === 0 : w % v === 0) || s < l && w === P || o === "endX" && (s > l ? w % v === 0 : O % v === 0) || s > l && w === P;
    };
    this.setState(Rt(Rt({}, o, u + b), "brushMoveStartX", n.pageX), function() {
      y && S() && y(x);
    });
  } }, { key: "handleTravellerMoveKeyboard", value: function(n, i) {
    var a = this, o = this.state, s = o.scaleValues, l = o.startX, u = o.endX, f = this.state[i], c = s.indexOf(f);
    if (c !== -1) {
      var d = c + n;
      if (!(d === -1 || d >= s.length)) {
        var h = s[d];
        i === "startX" && h >= u || i === "endX" && h <= l || this.setState(Rt({}, i, h), function() {
          a.props.onChange(a.getIndex({ startX: a.state.startX, endX: a.state.endX }));
        });
      }
    }
  } }, { key: "renderBackground", value: function() {
    var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, l = n.fill, u = n.stroke;
    return E.createElement("rect", { stroke: u, fill: l, x: i, y: a, width: o, height: s });
  } }, { key: "renderPanorama", value: function() {
    var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, l = n.data, u = n.children, f = n.padding, c = A.Children.only(u);
    return c ? E.cloneElement(c, { x: i, y: a, width: o, height: s, margin: f, compact: true, data: l }) : null;
  } }, { key: "renderTravellerLayer", value: function(n, i) {
    var a, o, s = this, l = this.props, u = l.y, f = l.travellerWidth, c = l.height, d = l.traveller, h = l.ariaLabel, y = l.data, v = l.startIndex, m = l.endIndex, g = Math.max(n, this.props.x), b = kp(kp({}, ee(this.props, false)), {}, { x: g, y: u, width: f, height: c }), x = h || "Min value: ".concat((a = y[v]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = y[m]) === null || o === void 0 ? void 0 : o.name);
    return E.createElement(pe, { tabIndex: 0, role: "slider", "aria-label": x, "aria-valuenow": n, className: "recharts-brush-traveller", onMouseEnter: this.handleEnterSlideOrTraveller, onMouseLeave: this.handleLeaveSlideOrTraveller, onMouseDown: this.travellerDragStartHandlers[i], onTouchStart: this.travellerDragStartHandlers[i], onKeyDown: function(w) {
      ["ArrowLeft", "ArrowRight"].includes(w.key) && (w.preventDefault(), w.stopPropagation(), s.handleTravellerMoveKeyboard(w.key === "ArrowRight" ? 1 : -1, i));
    }, onFocus: function() {
      s.setState({ isTravellerFocused: true });
    }, onBlur: function() {
      s.setState({ isTravellerFocused: false });
    }, style: { cursor: "col-resize" } }, t.renderTraveller(d, b));
  } }, { key: "renderSlide", value: function(n, i) {
    var a = this.props, o = a.y, s = a.height, l = a.stroke, u = a.travellerWidth, f = Math.min(n, i) + u, c = Math.max(Math.abs(i - n) - u, 0);
    return E.createElement("rect", { className: "recharts-brush-slide", onMouseEnter: this.handleEnterSlideOrTraveller, onMouseLeave: this.handleLeaveSlideOrTraveller, onMouseDown: this.handleSlideDragStart, onTouchStart: this.handleSlideDragStart, style: { cursor: "move" }, stroke: "none", fill: l, fillOpacity: 0.2, x: f, y: o, width: c, height: s });
  } }, { key: "renderText", value: function() {
    var n = this.props, i = n.startIndex, a = n.endIndex, o = n.y, s = n.height, l = n.travellerWidth, u = n.stroke, f = this.state, c = f.startX, d = f.endX, h = 5, y = { pointerEvents: "none", fill: u };
    return E.createElement(pe, { className: "recharts-brush-texts" }, E.createElement(Ci, Qc({ textAnchor: "end", verticalAnchor: "middle", x: Math.min(c, d) - h, y: o + s / 2 }, y), this.getTextOfTick(i)), E.createElement(Ci, Qc({ textAnchor: "start", verticalAnchor: "middle", x: Math.max(c, d) + l + h, y: o + s / 2 }, y), this.getTextOfTick(a)));
  } }, { key: "render", value: function() {
    var n = this.props, i = n.data, a = n.className, o = n.children, s = n.x, l = n.y, u = n.width, f = n.height, c = n.alwaysShowText, d = this.state, h = d.startX, y = d.endX, v = d.isTextActive, m = d.isSlideMoving, g = d.isTravellerMoving, b = d.isTravellerFocused;
    if (!i || !i.length || !q(s) || !q(l) || !q(u) || !q(f) || u <= 0 || f <= 0) return null;
    var x = le("recharts-brush", a), O = E.Children.count(o) === 1, w = ZY("userSelect", "none");
    return E.createElement(pe, { className: x, onMouseLeave: this.handleLeaveWrapper, onTouchMove: this.handleTouchMove, style: w }, this.renderBackground(), O && this.renderPanorama(), this.renderSlide(h, y), this.renderTravellerLayer(h, "startX"), this.renderTravellerLayer(y, "endX"), (v || m || g || b || c) && this.renderText());
  } }], [{ key: "renderDefaultTraveller", value: function(n) {
    var i = n.x, a = n.y, o = n.width, s = n.height, l = n.stroke, u = Math.floor(a + s / 2) - 1;
    return E.createElement(E.Fragment, null, E.createElement("rect", { x: i, y: a, width: o, height: s, fill: l, stroke: "none" }), E.createElement("line", { x1: i + 1, y1: u, x2: i + o - 1, y2: u, fill: "none", stroke: "#fff" }), E.createElement("line", { x1: i + 1, y1: u + 2, x2: i + o - 1, y2: u + 2, fill: "none", stroke: "#fff" }));
  } }, { key: "renderTraveller", value: function(n, i) {
    var a;
    return E.isValidElement(n) ? a = E.cloneElement(n, i) : ie(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
  } }, { key: "getDerivedStateFromProps", value: function(n, i) {
    var a = n.data, o = n.width, s = n.x, l = n.travellerWidth, u = n.updateId, f = n.startIndex, c = n.endIndex;
    if (a !== i.prevData || u !== i.prevUpdateId) return kp({ prevData: a, prevTravellerWidth: l, prevUpdateId: u, prevX: s, prevWidth: o }, a && a.length ? sQ({ data: a, width: o, x: s, travellerWidth: l, startIndex: f, endIndex: c }) : { scale: null, scaleValues: null });
    if (i.scale && (o !== i.prevWidth || s !== i.prevX || l !== i.prevTravellerWidth)) {
      i.scale.range([s, s + o - l]);
      var d = i.scale.domain().map(function(h) {
        return i.scale(h);
      });
      return { prevData: a, prevTravellerWidth: l, prevUpdateId: u, prevX: s, prevWidth: o, startX: i.scale(n.startIndex), endX: i.scale(n.endIndex), scaleValues: d };
    }
    return null;
  } }, { key: "getIndexInRange", value: function(n, i) {
    for (var a = n.length, o = 0, s = a - 1; s - o > 1; ) {
      var l = Math.floor((o + s) / 2);
      n[l] > i ? s = l : o = l;
    }
    return i >= n[s] ? s : o;
  } }]);
}(A.PureComponent);
Rt(Xa, "displayName", "Brush");
Rt(Xa, "defaultProps", { height: 40, travellerWidth: 5, gap: 1, fill: "#fff", stroke: "#666", padding: { top: 1, right: 1, bottom: 1, left: 1 }, leaveTimeOut: 1e3, alwaysShowText: false });
var lQ = Lv;
function uQ(e12, t) {
  var r;
  return lQ(e12, function(n, i, a) {
    return r = t(n, i, a), !r;
  }), !!r;
}
var cQ = uQ, fQ = XP, dQ = Lr, pQ = cQ, hQ = It, mQ = rd;
function yQ(e12, t, r) {
  var n = hQ(e12) ? fQ : pQ;
  return r && mQ(e12, t, r) && (t = void 0), n(e12, dQ(t));
}
var vQ = yQ;
const gQ = be(vQ);
var Nr = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, _w = vA;
function bQ(e12, t, r) {
  t == "__proto__" && _w ? _w(e12, t, { configurable: true, enumerable: true, value: r, writable: true }) : e12[t] = r;
}
var xQ = bQ, wQ = xQ, SQ = mA, OQ = Lr;
function jQ(e12, t) {
  var r = {};
  return t = OQ(t), SQ(e12, function(n, i, a) {
    wQ(r, i, t(n, i, a));
  }), r;
}
var PQ = jQ;
const AQ = be(PQ);
function _Q(e12, t) {
  for (var r = -1, n = e12 == null ? 0 : e12.length; ++r < n; ) if (!t(e12[r], r, e12)) return false;
  return true;
}
var EQ = _Q, kQ = Lv;
function TQ(e12, t) {
  var r = true;
  return kQ(e12, function(n, i, a) {
    return r = !!t(n, i, a), r;
  }), r;
}
var $Q = TQ, CQ = EQ, NQ = $Q, MQ = Lr, IQ = It, RQ = rd;
function DQ(e12, t, r) {
  var n = IQ(e12) ? CQ : NQ;
  return r && RQ(e12, t, r) && (t = void 0), n(e12, MQ(t));
}
var LQ = DQ;
const s2 = be(LQ);
var BQ = ["x", "y"];
function ml(e12) {
  "@babel/helpers - typeof";
  return ml = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ml(e12);
}
function Vm() {
  return Vm = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, Vm.apply(this, arguments);
}
function Ew(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Go(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ew(Object(r), true).forEach(function(n) {
      zQ(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : Ew(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function zQ(e12, t, r) {
  return t = FQ(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function FQ(e12) {
  var t = UQ(e12, "string");
  return ml(t) == "symbol" ? t : t + "";
}
function UQ(e12, t) {
  if (ml(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (ml(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
function WQ(e12, t) {
  if (e12 == null) return {};
  var r = HQ(e12, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e12);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e12, n) && (r[n] = e12[n]);
  }
  return r;
}
function HQ(e12, t) {
  if (e12 == null) return {};
  var r = {};
  for (var n in e12) if (Object.prototype.hasOwnProperty.call(e12, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e12[n];
  }
  return r;
}
function VQ(e12, t) {
  var r = e12.x, n = e12.y, i = WQ(e12, BQ), a = "".concat(r), o = parseInt(a, 10), s = "".concat(n), l = parseInt(s, 10), u = "".concat(t.height || i.height), f = parseInt(u, 10), c = "".concat(t.width || i.width), d = parseInt(c, 10);
  return Go(Go(Go(Go(Go({}, t), i), o ? { x: o } : {}), l ? { y: l } : {}), {}, { height: f, width: d, name: t.name, radius: t.radius });
}
function kw(e12) {
  return E.createElement(e22, Vm({ shapeType: "rectangle", propTransformer: VQ, activeClassName: "recharts-active-bar" }, e12));
}
var KQ = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = q(n) || pD(n);
    return a ? t(n, i) : (a || Mi(), r);
  };
}, qQ = ["value", "background"], l2;
function Ya(e12) {
  "@babel/helpers - typeof";
  return Ya = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ya(e12);
}
function GQ(e12, t) {
  if (e12 == null) return {};
  var r = XQ(e12, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e12);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e12, n) && (r[n] = e12[n]);
  }
  return r;
}
function XQ(e12, t) {
  if (e12 == null) return {};
  var r = {};
  for (var n in e12) if (Object.prototype.hasOwnProperty.call(e12, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e12[n];
  }
  return r;
}
function Zc() {
  return Zc = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, Zc.apply(this, arguments);
}
function Tw(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function We(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tw(Object(r), true).forEach(function(n) {
      Cn(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : Tw(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function YQ(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function $w(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, c2(n.key), n);
  }
}
function QQ(e12, t, r) {
  return t && $w(e12.prototype, t), r && $w(e12, r), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function JQ(e12, t, r) {
  return t = ef(t), ZQ(e12, u2() ? Reflect.construct(t, r || [], ef(e12).constructor) : t.apply(e12, r));
}
function ZQ(e12, t) {
  if (t && (Ya(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return eJ(e12);
}
function eJ(e12) {
  if (e12 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e12;
}
function u2() {
  try {
    var e12 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (u2 = function() {
    return !!e12;
  })();
}
function ef(e12) {
  return ef = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ef(e12);
}
function tJ(e12, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e12.prototype = Object.create(t && t.prototype, { constructor: { value: e12, writable: true, configurable: true } }), Object.defineProperty(e12, "prototype", { writable: false }), t && Km(e12, t);
}
function Km(e12, t) {
  return Km = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Km(e12, t);
}
function Cn(e12, t, r) {
  return t = c2(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function c2(e12) {
  var t = rJ(e12, "string");
  return Ya(t) == "symbol" ? t : t + "";
}
function rJ(e12, t) {
  if (Ya(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (Ya(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e12);
}
var Mr = function(e12) {
  function t() {
    var r;
    YQ(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = JQ(this, t, [].concat(i)), Cn(r, "state", { isAnimationFinished: false }), Cn(r, "id", So("recharts-bar-")), Cn(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({ isAnimationFinished: true }), o && o();
    }), Cn(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({ isAnimationFinished: false }), o && o();
    }), r;
  }
  return tJ(t, e12), QQ(t, [{ key: "renderRectanglesStatically", value: function(n) {
    var i = this, a = this.props, o = a.shape, s = a.dataKey, l = a.activeIndex, u = a.activeBar, f = ee(this.props, false);
    return n && n.map(function(c, d) {
      var h = d === l, y = h ? u : o, v = We(We(We({}, f), c), {}, { isActive: h, option: y, index: d, dataKey: s, onAnimationStart: i.handleAnimationStart, onAnimationEnd: i.handleAnimationEnd });
      return E.createElement(pe, Zc({ className: "recharts-bar-rectangle" }, $i(i.props, c, d), { key: "rectangle-".concat(c == null ? void 0 : c.x, "-").concat(c == null ? void 0 : c.y, "-").concat(c == null ? void 0 : c.value, "-").concat(d) }), E.createElement(kw, v));
    });
  } }, { key: "renderRectanglesWithAnimation", value: function() {
    var n = this, i = this.props, a = i.data, o = i.layout, s = i.isAnimationActive, l = i.animationBegin, u = i.animationDuration, f = i.animationEasing, c = i.animationId, d = this.state.prevData;
    return E.createElement(Rr, { begin: l, duration: u, isActive: s, easing: f, from: { t: 0 }, to: { t: 1 }, key: "bar-".concat(c), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(h) {
      var y = h.t, v = a.map(function(m, g) {
        var b = d && d[g];
        if (b) {
          var x = _t(b.x, m.x), O = _t(b.y, m.y), w = _t(b.width, m.width), S = _t(b.height, m.height);
          return We(We({}, m), {}, { x: x(y), y: O(y), width: w(y), height: S(y) });
        }
        if (o === "horizontal") {
          var j = _t(0, m.height), P = j(y);
          return We(We({}, m), {}, { y: m.y + m.height - P, height: P });
        }
        var k = _t(0, m.width), T = k(y);
        return We(We({}, m), {}, { width: T });
      });
      return E.createElement(pe, null, n.renderRectanglesStatically(v));
    });
  } }, { key: "renderRectangles", value: function() {
    var n = this.props, i = n.data, a = n.isAnimationActive, o = this.state.prevData;
    return a && i && i.length && (!o || !Ua(o, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i);
  } }, { key: "renderBackground", value: function() {
    var n = this, i = this.props, a = i.data, o = i.dataKey, s = i.activeIndex, l = ee(this.props.background, false);
    return a.map(function(u, f) {
      u.value;
      var c = u.background, d = GQ(u, qQ);
      if (!c) return null;
      var h = We(We(We(We(We({}, d), {}, { fill: "#eee" }, c), l), $i(n.props, u, f)), {}, { onAnimationStart: n.handleAnimationStart, onAnimationEnd: n.handleAnimationEnd, dataKey: o, index: f, className: "recharts-bar-background-rectangle" });
      return E.createElement(kw, Zc({ key: "background-bar-".concat(f), option: n.props.background, isActive: f === s }, h));
    });
  } }, { key: "renderErrorBar", value: function(n, i) {
    if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
    var a = this.props, o = a.data, s = a.xAxis, l = a.yAxis, u = a.layout, f = a.children, c = rr(f, pd);
    if (!c) return null;
    var d = u === "vertical" ? o[0].height / 2 : o[0].width / 2, h = function(m, g) {
      var b = Array.isArray(m.value) ? m.value[1] : m.value;
      return { x: m.x, y: m.y, value: b, errorVal: Ye(m, g) };
    }, y = { clipPath: n ? "url(#clipPath-".concat(i, ")") : null };
    return E.createElement(pe, y, c.map(function(v) {
      return E.cloneElement(v, { key: "error-bar-".concat(i, "-").concat(v.props.dataKey), data: o, xAxis: s, yAxis: l, layout: u, offset: d, dataPointFormatter: h });
    }));
  } }, { key: "render", value: function() {
    var n = this.props, i = n.hide, a = n.data, o = n.className, s = n.xAxis, l = n.yAxis, u = n.left, f = n.top, c = n.width, d = n.height, h = n.isAnimationActive, y = n.background, v = n.id;
    if (i || !a || !a.length) return null;
    var m = this.state.isAnimationFinished, g = le("recharts-bar", o), b = s && s.allowDataOverflow, x = l && l.allowDataOverflow, O = b || x, w = se(v) ? this.id : v;
    return E.createElement(pe, { className: g }, b || x ? E.createElement("defs", null, E.createElement("clipPath", { id: "clipPath-".concat(w) }, E.createElement("rect", { x: b ? u : u - c / 2, y: x ? f : f - d / 2, width: b ? c : c * 2, height: x ? d : d * 2 }))) : null, E.createElement(pe, { className: "recharts-bar-rectangles", clipPath: O ? "url(#clipPath-".concat(w, ")") : null }, y ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(O, w), (!h || m) && Zr.renderCallByParent(this.props, a));
  } }], [{ key: "getDerivedStateFromProps", value: function(n, i) {
    return n.animationId !== i.prevAnimationId ? { prevAnimationId: n.animationId, curData: n.data, prevData: i.curData } : n.data !== i.curData ? { curData: n.data } : null;
  } }]);
}(A.PureComponent);
l2 = Mr;
Cn(Mr, "displayName", "Bar");
Cn(Mr, "defaultProps", { xAxisId: 0, yAxisId: 0, legendType: "rect", minPointSize: 0, hide: false, data: [], layout: "vertical", activeBar: false, isAnimationActive: !Bi.isSsr, animationBegin: 0, animationDuration: 400, animationEasing: "ease" });
Cn(Mr, "getComposedData", function(e12) {
  var t = e12.props, r = e12.item, n = e12.barPosition, i = e12.bandSize, a = e12.xAxis, o = e12.yAxis, s = e12.xAxisTicks, l = e12.yAxisTicks, u = e12.stackedData, f = e12.dataStartIndex, c = e12.displayedData, d = e12.offset, h = CV(n, r);
  if (!h) return null;
  var y = t.layout, v = r.type.defaultProps, m = v !== void 0 ? We(We({}, v), r.props) : r.props, g = m.dataKey, b = m.children, x = m.minPointSize, O = y === "horizontal" ? o : a, w = u ? O.scale.domain() : null, S = BV({ numericAxis: O }), j = rr(b, La), P = c.map(function(k, T) {
    var C, $, L, R, D, B;
    u ? C = NV(u[f + T], w) : (C = Ye(k, g), Array.isArray(C) || (C = [S, C]));
    var W = KQ(x, l2.defaultProps.minPointSize)(C[1], T);
    if (y === "horizontal") {
      var N, F = [o.scale(C[0]), o.scale(C[1])], U = F[0], X = F[1];
      $ = O1({ axis: a, ticks: s, bandSize: i, offset: h.offset, entry: k, index: T }), L = (N = X ?? U) !== null && N !== void 0 ? N : void 0, R = h.size;
      var V = U - X;
      if (D = Number.isNaN(V) ? 0 : V, B = { x: $, y: o.y, width: R, height: o.height }, Math.abs(W) > 0 && Math.abs(D) < Math.abs(W)) {
        var Q = xt(D || W) * (Math.abs(W) - Math.abs(D));
        L -= Q, D += Q;
      }
    } else {
      var oe = [a.scale(C[0]), a.scale(C[1])], fe = oe[0], we = oe[1];
      if ($ = fe, L = O1({ axis: o, ticks: l, bandSize: i, offset: h.offset, entry: k, index: T }), R = we - fe, D = h.size, B = { x: a.x, y: L, width: a.width, height: D }, Math.abs(W) > 0 && Math.abs(R) < Math.abs(W)) {
        var Ke = xt(R || W) * (Math.abs(W) - Math.abs(R));
        R += Ke;
      }
    }
    return We(We(We({}, k), {}, { x: $, y: L, width: R, height: D, value: u ? C : C[1], payload: k, background: B }, j && j[T] && j[T].props), {}, { tooltipPayload: [C_(r, k)], tooltipPosition: { x: $ + R / 2, y: L + D / 2 } });
  });
  return We({ data: P, layout: y }, d);
});
function yl(e12) {
  "@babel/helpers - typeof";
  return yl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yl(e12);
}
function nJ(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Cw(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, f2(n.key), n);
  }
}
function iJ(e12, t, r) {
  return t && Cw(e12.prototype, t), r && Cw(e12, r), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function Nw(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hr(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nw(Object(r), true).forEach(function(n) {
      wd(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : Nw(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function wd(e12, t, r) {
  return t = f2(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function f2(e12) {
  var t = aJ(e12, "string");
  return yl(t) == "symbol" ? t : t + "";
}
function aJ(e12, t) {
  if (yl(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (yl(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
var d2 = function(t, r, n, i, a) {
  var o = t.width, s = t.height, l = t.layout, u = t.children, f = Object.keys(r), c = { left: n.left, leftMirror: n.left, right: o - n.right, rightMirror: o - n.right, top: n.top, topMirror: n.top, bottom: s - n.bottom, bottomMirror: s - n.bottom }, d = !!Lt(u, Mr);
  return f.reduce(function(h, y) {
    var v = r[y], m = v.orientation, g = v.domain, b = v.padding, x = b === void 0 ? {} : b, O = v.mirror, w = v.reversed, S = "".concat(m).concat(O ? "Mirror" : ""), j, P, k, T, C;
    if (v.type === "number" && (v.padding === "gap" || v.padding === "no-gap")) {
      var $ = g[1] - g[0], L = 1 / 0, R = v.categoricalDomain.sort(yD);
      if (R.forEach(function(oe, fe) {
        fe > 0 && (L = Math.min((oe || 0) - (R[fe - 1] || 0), L));
      }), Number.isFinite(L)) {
        var D = L / $, B = v.layout === "vertical" ? n.height : n.width;
        if (v.padding === "gap" && (j = D * B / 2), v.padding === "no-gap") {
          var W = wt(t.barCategoryGap, D * B), N = D * B / 2;
          j = N - W - (N - W) / B * W;
        }
      }
    }
    i === "xAxis" ? P = [n.left + (x.left || 0) + (j || 0), n.left + n.width - (x.right || 0) - (j || 0)] : i === "yAxis" ? P = l === "horizontal" ? [n.top + n.height - (x.bottom || 0), n.top + (x.top || 0)] : [n.top + (x.top || 0) + (j || 0), n.top + n.height - (x.bottom || 0) - (j || 0)] : P = v.range, w && (P = [P[1], P[0]]);
    var F = E_(v, a, d), U = F.scale, X = F.realScaleType;
    U.domain(g).range(P), k_(U);
    var V = T_(U, hr(hr({}, v), {}, { realScaleType: X }));
    i === "xAxis" ? (C = m === "top" && !O || m === "bottom" && O, k = n.left, T = c[S] - C * v.height) : i === "yAxis" && (C = m === "left" && !O || m === "right" && O, k = c[S] - C * v.width, T = n.top);
    var Q = hr(hr(hr({}, v), V), {}, { realScaleType: X, x: k, y: T, scale: U, width: i === "xAxis" ? n.width : v.width, height: i === "yAxis" ? n.height : v.height });
    return Q.bandSize = Dc(Q, V), !v.hide && i === "xAxis" ? c[S] += (C ? -1 : 1) * Q.height : v.hide || (c[S] += (C ? -1 : 1) * Q.width), hr(hr({}, h), {}, wd({}, y, Q));
  }, {});
}, p2 = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return { x: Math.min(n, a), y: Math.min(i, o), width: Math.abs(a - n), height: Math.abs(o - i) };
}, oJ = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return p2({ x: r, y: n }, { x: i, y: a });
}, h2 = function() {
  function e12(t) {
    nJ(this, e12), this.scale = t;
  }
  return iJ(e12, [{ key: "domain", get: function() {
    return this.scale.domain;
  } }, { key: "range", get: function() {
    return this.scale.range;
  } }, { key: "rangeMin", get: function() {
    return this.range()[0];
  } }, { key: "rangeMax", get: function() {
    return this.range()[1];
  } }, { key: "bandwidth", get: function() {
    return this.scale.bandwidth;
  } }, { key: "apply", value: function(r) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.bandAware, a = n.position;
    if (r !== void 0) {
      if (a) switch (a) {
        case "start":
          return this.scale(r);
        case "middle": {
          var o = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + o;
        }
        case "end": {
          var s = this.bandwidth ? this.bandwidth() : 0;
          return this.scale(r) + s;
        }
        default:
          return this.scale(r);
      }
      if (i) {
        var l = this.bandwidth ? this.bandwidth() / 2 : 0;
        return this.scale(r) + l;
      }
      return this.scale(r);
    }
  } }, { key: "isInRange", value: function(r) {
    var n = this.range(), i = n[0], a = n[n.length - 1];
    return i <= a ? r >= i && r <= a : r >= a && r <= i;
  } }], [{ key: "create", value: function(r) {
    return new e12(r);
  } }]);
}();
wd(h2, "EPS", 1e-4);
var pg = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return hr(hr({}, n), {}, wd({}, i, h2.create(t[i])));
  }, {});
  return hr(hr({}, r), {}, { apply: function(i) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, s = a.position;
    return AQ(i, function(l, u) {
      return r[u].apply(l, { bandAware: o, position: s });
    });
  }, isInRange: function(i) {
    return s2(i, function(a, o) {
      return r[o].isInRange(a);
    });
  } });
};
function sJ(e12) {
  return (e12 % 180 + 180) % 180;
}
var lJ = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = sJ(i), o = a * Math.PI / 180, s = Math.atan(n / r), l = o > s && o < Math.PI - s ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(l);
}, uJ = Lr, cJ = $l, fJ = ed;
function dJ(e12) {
  return function(t, r, n) {
    var i = Object(t);
    if (!cJ(t)) {
      var a = uJ(r);
      t = fJ(t), r = function(s) {
        return a(i[s], s, i);
      };
    }
    var o = e12(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
var pJ = dJ, hJ = n2;
function mJ(e12) {
  var t = hJ(e12), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var yJ = mJ, vJ = uA, gJ = Lr, bJ = yJ, xJ = Math.max;
function wJ(e12, t, r) {
  var n = e12 == null ? 0 : e12.length;
  if (!n) return -1;
  var i = r == null ? 0 : bJ(r);
  return i < 0 && (i = xJ(n + i, 0)), vJ(e12, gJ(t), i);
}
var SJ = wJ, OJ = pJ, jJ = SJ, PJ = OJ(jJ), AJ = PJ;
const _J = be(AJ);
var EJ = bR(function(e12) {
  return { x: e12.left, y: e12.top, width: e12.width, height: e12.height };
}, function(e12) {
  return ["l", e12.left, "t", e12.top, "w", e12.width, "h", e12.height].join("");
}), hg = A.createContext(void 0), mg = A.createContext(void 0), m2 = A.createContext(void 0), y2 = A.createContext({}), v2 = A.createContext(void 0), g2 = A.createContext(0), b2 = A.createContext(0), Mw = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, o = t.clipPathId, s = t.children, l = t.width, u = t.height, f = EJ(a);
  return E.createElement(hg.Provider, { value: n }, E.createElement(mg.Provider, { value: i }, E.createElement(y2.Provider, { value: a }, E.createElement(m2.Provider, { value: f }, E.createElement(v2.Provider, { value: o }, E.createElement(g2.Provider, { value: u }, E.createElement(b2.Provider, { value: l }, s)))))));
}, kJ = function() {
  return A.useContext(v2);
}, x2 = function(t) {
  var r = A.useContext(hg);
  r == null && Mi();
  var n = r[t];
  return n == null && Mi(), n;
}, TJ = function() {
  var t = A.useContext(hg);
  return _n(t);
}, $J = function() {
  var t = A.useContext(mg), r = _J(t, function(n) {
    return s2(n.domain, Number.isFinite);
  });
  return r || _n(t);
}, w2 = function(t) {
  var r = A.useContext(mg);
  r == null && Mi();
  var n = r[t];
  return n == null && Mi(), n;
}, CJ = function() {
  var t = A.useContext(m2);
  return t;
}, NJ = function() {
  return A.useContext(y2);
}, yg = function() {
  return A.useContext(b2);
}, vg = function() {
  return A.useContext(g2);
};
function Qa(e12) {
  "@babel/helpers - typeof";
  return Qa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qa(e12);
}
function MJ(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function IJ(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, O2(n.key), n);
  }
}
function RJ(e12, t, r) {
  return t && IJ(e12.prototype, t), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function DJ(e12, t, r) {
  return t = tf(t), LJ(e12, S2() ? Reflect.construct(t, r || [], tf(e12).constructor) : t.apply(e12, r));
}
function LJ(e12, t) {
  if (t && (Qa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return BJ(e12);
}
function BJ(e12) {
  if (e12 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e12;
}
function S2() {
  try {
    var e12 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (S2 = function() {
    return !!e12;
  })();
}
function tf(e12) {
  return tf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, tf(e12);
}
function zJ(e12, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e12.prototype = Object.create(t && t.prototype, { constructor: { value: e12, writable: true, configurable: true } }), Object.defineProperty(e12, "prototype", { writable: false }), t && qm(e12, t);
}
function qm(e12, t) {
  return qm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, qm(e12, t);
}
function Iw(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rw(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Iw(Object(r), true).forEach(function(n) {
      gg(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : Iw(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function gg(e12, t, r) {
  return t = O2(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function O2(e12) {
  var t = FJ(e12, "string");
  return Qa(t) == "symbol" ? t : t + "";
}
function FJ(e12, t) {
  if (Qa(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (Qa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e12);
}
function UJ(e12, t) {
  return KJ(e12) || VJ(e12, t) || HJ(e12, t) || WJ();
}
function WJ() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function HJ(e12, t) {
  if (e12) {
    if (typeof e12 == "string") return Dw(e12, t);
    var r = Object.prototype.toString.call(e12).slice(8, -1);
    if (r === "Object" && e12.constructor && (r = e12.constructor.name), r === "Map" || r === "Set") return Array.from(e12);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Dw(e12, t);
  }
}
function Dw(e12, t) {
  (t == null || t > e12.length) && (t = e12.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e12[r];
  return n;
}
function VJ(e12, t) {
  var r = e12 == null ? null : typeof Symbol < "u" && e12[Symbol.iterator] || e12["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = true, u = false;
    try {
      if (a = (r = r.call(e12)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = true) ;
    } catch (f) {
      u = true, i = f;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function KJ(e12) {
  if (Array.isArray(e12)) return e12;
}
function Gm() {
  return Gm = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, Gm.apply(this, arguments);
}
var qJ = function(t, r) {
  var n;
  return E.isValidElement(t) ? n = E.cloneElement(t, r) : ie(t) ? n = t(r) : n = E.createElement("line", Gm({}, r, { className: "recharts-reference-line-line" })), n;
}, GJ = function(t, r, n, i, a, o, s, l, u) {
  var f = a.x, c = a.y, d = a.width, h = a.height;
  if (n) {
    var y = u.y, v = t.y.apply(y, { position: o });
    if (Nr(u, "discard") && !t.y.isInRange(v)) return null;
    var m = [{ x: f + d, y: v }, { x: f, y: v }];
    return l === "left" ? m.reverse() : m;
  }
  if (r) {
    var g = u.x, b = t.x.apply(g, { position: o });
    if (Nr(u, "discard") && !t.x.isInRange(b)) return null;
    var x = [{ x: b, y: c + h }, { x: b, y: c }];
    return s === "top" ? x.reverse() : x;
  }
  if (i) {
    var O = u.segment, w = O.map(function(S) {
      return t.apply(S, { position: o });
    });
    return Nr(u, "discard") && gQ(w, function(S) {
      return !t.isInRange(S);
    }) ? null : w;
  }
  return null;
};
function XJ(e12) {
  var t = e12.x, r = e12.y, n = e12.segment, i = e12.xAxisId, a = e12.yAxisId, o = e12.shape, s = e12.className, l = e12.alwaysShow, u = kJ(), f = x2(i), c = w2(a), d = CJ();
  if (!u || !d) return null;
  br(l === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var h = pg({ x: f.scale, y: c.scale }), y = Je(t), v = Je(r), m = n && n.length === 2, g = GJ(h, y, v, m, d, e12.position, f.orientation, c.orientation, e12);
  if (!g) return null;
  var b = UJ(g, 2), x = b[0], O = x.x, w = x.y, S = b[1], j = S.x, P = S.y, k = Nr(e12, "hidden") ? "url(#".concat(u, ")") : void 0, T = Rw(Rw({ clipPath: k }, ee(e12, true)), {}, { x1: O, y1: w, x2: j, y2: P });
  return E.createElement(pe, { className: le("recharts-reference-line", s) }, qJ(o, T), rt.renderCallByParent(e12, oJ({ x1: O, y1: w, x2: j, y2: P })));
}
var bg = function(e12) {
  function t() {
    return MJ(this, t), DJ(this, t, arguments);
  }
  return zJ(t, e12), RJ(t, [{ key: "render", value: function() {
    return E.createElement(XJ, this.props);
  } }]);
}(E.Component);
gg(bg, "displayName", "ReferenceLine");
gg(bg, "defaultProps", { isFront: false, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, fill: "none", stroke: "#ccc", fillOpacity: 1, strokeWidth: 1, position: "middle" });
function Xm() {
  return Xm = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, Xm.apply(this, arguments);
}
function Ja(e12) {
  "@babel/helpers - typeof";
  return Ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ja(e12);
}
function Lw(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bw(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lw(Object(r), true).forEach(function(n) {
      Sd(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : Lw(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function YJ(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function QJ(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, P2(n.key), n);
  }
}
function JJ(e12, t, r) {
  return t && QJ(e12.prototype, t), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function ZJ(e12, t, r) {
  return t = rf(t), eZ(e12, j2() ? Reflect.construct(t, r || [], rf(e12).constructor) : t.apply(e12, r));
}
function eZ(e12, t) {
  if (t && (Ja(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return tZ(e12);
}
function tZ(e12) {
  if (e12 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e12;
}
function j2() {
  try {
    var e12 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (j2 = function() {
    return !!e12;
  })();
}
function rf(e12) {
  return rf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, rf(e12);
}
function rZ(e12, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e12.prototype = Object.create(t && t.prototype, { constructor: { value: e12, writable: true, configurable: true } }), Object.defineProperty(e12, "prototype", { writable: false }), t && Ym(e12, t);
}
function Ym(e12, t) {
  return Ym = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ym(e12, t);
}
function Sd(e12, t, r) {
  return t = P2(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function P2(e12) {
  var t = nZ(e12, "string");
  return Ja(t) == "symbol" ? t : t + "";
}
function nZ(e12, t) {
  if (Ja(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (Ja(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e12);
}
var iZ = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, o = pg({ x: i.scale, y: a.scale }), s = o.apply({ x: r, y: n }, { bandAware: true });
  return Nr(t, "discard") && !o.isInRange(s) ? null : s;
}, Od = function(e12) {
  function t() {
    return YJ(this, t), ZJ(this, t, arguments);
  }
  return rZ(t, e12), JJ(t, [{ key: "render", value: function() {
    var n = this.props, i = n.x, a = n.y, o = n.r, s = n.alwaysShow, l = n.clipPathId, u = Je(i), f = Je(a);
    if (br(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !u || !f) return null;
    var c = iZ(this.props);
    if (!c) return null;
    var d = c.x, h = c.y, y = this.props, v = y.shape, m = y.className, g = Nr(this.props, "hidden") ? "url(#".concat(l, ")") : void 0, b = Bw(Bw({ clipPath: g }, ee(this.props, true)), {}, { cx: d, cy: h });
    return E.createElement(pe, { className: le("recharts-reference-dot", m) }, t.renderDot(v, b), rt.renderCallByParent(this.props, { x: d - o, y: h - o, width: 2 * o, height: 2 * o }));
  } }]);
}(E.Component);
Sd(Od, "displayName", "ReferenceDot");
Sd(Od, "defaultProps", { isFront: false, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, r: 10, fill: "#fff", stroke: "#ccc", fillOpacity: 1, strokeWidth: 1 });
Sd(Od, "renderDot", function(e12, t) {
  var r;
  return E.isValidElement(e12) ? r = E.cloneElement(e12, t) : ie(e12) ? r = e12(t) : r = E.createElement(hd, Xm({}, t, { cx: t.cx, cy: t.cy, className: "recharts-reference-dot-dot" })), r;
});
function Qm() {
  return Qm = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, Qm.apply(this, arguments);
}
function Za(e12) {
  "@babel/helpers - typeof";
  return Za = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Za(e12);
}
function zw(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fw(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zw(Object(r), true).forEach(function(n) {
      jd(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : zw(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function aZ(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function oZ(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, _2(n.key), n);
  }
}
function sZ(e12, t, r) {
  return t && oZ(e12.prototype, t), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function lZ(e12, t, r) {
  return t = nf(t), uZ(e12, A2() ? Reflect.construct(t, r || [], nf(e12).constructor) : t.apply(e12, r));
}
function uZ(e12, t) {
  if (t && (Za(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return cZ(e12);
}
function cZ(e12) {
  if (e12 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e12;
}
function A2() {
  try {
    var e12 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (A2 = function() {
    return !!e12;
  })();
}
function nf(e12) {
  return nf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, nf(e12);
}
function fZ(e12, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e12.prototype = Object.create(t && t.prototype, { constructor: { value: e12, writable: true, configurable: true } }), Object.defineProperty(e12, "prototype", { writable: false }), t && Jm(e12, t);
}
function Jm(e12, t) {
  return Jm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Jm(e12, t);
}
function jd(e12, t, r) {
  return t = _2(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function _2(e12) {
  var t = dZ(e12, "string");
  return Za(t) == "symbol" ? t : t + "";
}
function dZ(e12, t) {
  if (Za(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (Za(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e12);
}
var pZ = function(t, r, n, i, a) {
  var o = a.x1, s = a.x2, l = a.y1, u = a.y2, f = a.xAxis, c = a.yAxis;
  if (!f || !c) return null;
  var d = pg({ x: f.scale, y: c.scale }), h = { x: t ? d.x.apply(o, { position: "start" }) : d.x.rangeMin, y: n ? d.y.apply(l, { position: "start" }) : d.y.rangeMin }, y = { x: r ? d.x.apply(s, { position: "end" }) : d.x.rangeMax, y: i ? d.y.apply(u, { position: "end" }) : d.y.rangeMax };
  return Nr(a, "discard") && (!d.isInRange(h) || !d.isInRange(y)) ? null : p2(h, y);
}, Pd = function(e12) {
  function t() {
    return aZ(this, t), lZ(this, t, arguments);
  }
  return fZ(t, e12), sZ(t, [{ key: "render", value: function() {
    var n = this.props, i = n.x1, a = n.x2, o = n.y1, s = n.y2, l = n.className, u = n.alwaysShow, f = n.clipPathId;
    br(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
    var c = Je(i), d = Je(a), h = Je(o), y = Je(s), v = this.props.shape;
    if (!c && !d && !h && !y && !v) return null;
    var m = pZ(c, d, h, y, this.props);
    if (!m && !v) return null;
    var g = Nr(this.props, "hidden") ? "url(#".concat(f, ")") : void 0;
    return E.createElement(pe, { className: le("recharts-reference-area", l) }, t.renderRect(v, Fw(Fw({ clipPath: g }, ee(this.props, true)), m)), rt.renderCallByParent(this.props, m));
  } }]);
}(E.Component);
jd(Pd, "displayName", "ReferenceArea");
jd(Pd, "defaultProps", { isFront: false, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, r: 10, fill: "#ccc", fillOpacity: 0.5, stroke: "none", strokeWidth: 1 });
jd(Pd, "renderRect", function(e12, t) {
  var r;
  return E.isValidElement(e12) ? r = E.cloneElement(e12, t) : ie(e12) ? r = e12(t) : r = E.createElement(dg, Qm({}, t, { className: "recharts-reference-area-rect" })), r;
});
function E2(e12, t, r) {
  if (t < 1) return [];
  if (t === 1 && r === void 0) return e12;
  for (var n = [], i = 0; i < e12.length; i += t) n.push(e12[i]);
  return n;
}
function hZ(e12, t, r) {
  var n = { width: e12.width + t.width, height: e12.height + t.height };
  return lJ(n, r);
}
function mZ(e12, t, r) {
  var n = r === "width", i = e12.x, a = e12.y, o = e12.width, s = e12.height;
  return t === 1 ? { start: n ? i : a, end: n ? i + o : a + s } : { start: n ? i + o : a + s, end: n ? i : a };
}
function af(e12, t, r, n, i) {
  if (e12 * t < e12 * n || e12 * t > e12 * i) return false;
  var a = r();
  return e12 * (t - e12 * a / 2 - n) >= 0 && e12 * (t + e12 * a / 2 - i) <= 0;
}
function yZ(e12, t) {
  return E2(e12, t + 1);
}
function vZ(e12, t, r, n, i) {
  for (var a = (n || []).slice(), o = t.start, s = t.end, l = 0, u = 1, f = o, c = function() {
    var y = n == null ? void 0 : n[l];
    if (y === void 0) return { v: E2(n, u) };
    var v = l, m, g = function() {
      return m === void 0 && (m = r(y, v)), m;
    }, b = y.coordinate, x = l === 0 || af(e12, b, g, f, s);
    x || (l = 0, f = o, u += 1), x && (f = b + e12 * (g() / 2 + i), l += u);
  }, d; u <= a.length; ) if (d = c(), d) return d.v;
  return [];
}
function vl(e12) {
  "@babel/helpers - typeof";
  return vl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vl(e12);
}
function Uw(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dt(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uw(Object(r), true).forEach(function(n) {
      gZ(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : Uw(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function gZ(e12, t, r) {
  return t = bZ(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function bZ(e12) {
  var t = xZ(e12, "string");
  return vl(t) == "symbol" ? t : t + "";
}
function xZ(e12, t) {
  if (vl(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (vl(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
function wZ(e12, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, s = t.start, l = t.end, u = function(d) {
    var h = a[d], y, v = function() {
      return y === void 0 && (y = r(h, d)), y;
    };
    if (d === o - 1) {
      var m = e12 * (h.coordinate + e12 * v() / 2 - l);
      a[d] = h = dt(dt({}, h), {}, { tickCoord: m > 0 ? h.coordinate - m * e12 : h.coordinate });
    } else a[d] = h = dt(dt({}, h), {}, { tickCoord: h.coordinate });
    var g = af(e12, h.tickCoord, v, s, l);
    g && (l = h.tickCoord - e12 * (v() / 2 + i), a[d] = dt(dt({}, h), {}, { isShow: true }));
  }, f = o - 1; f >= 0; f--) u(f);
  return a;
}
function SZ(e12, t, r, n, i, a) {
  var o = (n || []).slice(), s = o.length, l = t.start, u = t.end;
  if (a) {
    var f = n[s - 1], c = r(f, s - 1), d = e12 * (f.coordinate + e12 * c / 2 - u);
    o[s - 1] = f = dt(dt({}, f), {}, { tickCoord: d > 0 ? f.coordinate - d * e12 : f.coordinate });
    var h = af(e12, f.tickCoord, function() {
      return c;
    }, l, u);
    h && (u = f.tickCoord - e12 * (c / 2 + i), o[s - 1] = dt(dt({}, f), {}, { isShow: true }));
  }
  for (var y = a ? s - 1 : s, v = function(b) {
    var x = o[b], O, w = function() {
      return O === void 0 && (O = r(x, b)), O;
    };
    if (b === 0) {
      var S = e12 * (x.coordinate - e12 * w() / 2 - l);
      o[b] = x = dt(dt({}, x), {}, { tickCoord: S < 0 ? x.coordinate - S * e12 : x.coordinate });
    } else o[b] = x = dt(dt({}, x), {}, { tickCoord: x.coordinate });
    var j = af(e12, x.tickCoord, w, l, u);
    j && (l = x.tickCoord + e12 * (w() / 2 + i), o[b] = dt(dt({}, x), {}, { isShow: true }));
  }, m = 0; m < y; m++) v(m);
  return o;
}
function xg(e12, t, r) {
  var n = e12.tick, i = e12.ticks, a = e12.viewBox, o = e12.minTickGap, s = e12.orientation, l = e12.interval, u = e12.tickFormatter, f = e12.unit, c = e12.angle;
  if (!i || !i.length || !n) return [];
  if (q(l) || Bi.isSsr) return yZ(i, typeof l == "number" && q(l) ? l : 0);
  var d = [], h = s === "top" || s === "bottom" ? "width" : "height", y = f && h === "width" ? ps(f, { fontSize: t, letterSpacing: r }) : { width: 0, height: 0 }, v = function(x, O) {
    var w = ie(u) ? u(x.value, O) : x.value;
    return h === "width" ? hZ(ps(w, { fontSize: t, letterSpacing: r }), y, c) : ps(w, { fontSize: t, letterSpacing: r })[h];
  }, m = i.length >= 2 ? xt(i[1].coordinate - i[0].coordinate) : 1, g = mZ(a, m, h);
  return l === "equidistantPreserveStart" ? vZ(m, g, v, i, o) : (l === "preserveStart" || l === "preserveStartEnd" ? d = SZ(m, g, v, i, o, l === "preserveStartEnd") : d = wZ(m, g, v, i, o), d.filter(function(b) {
    return b.isShow;
  }));
}
var OZ = ["viewBox"], jZ = ["viewBox"], PZ = ["ticks"];
function eo(e12) {
  "@babel/helpers - typeof";
  return eo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, eo(e12);
}
function fa() {
  return fa = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, fa.apply(this, arguments);
}
function Ww(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qe(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ww(Object(r), true).forEach(function(n) {
      wg(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : Ww(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function Tp(e12, t) {
  if (e12 == null) return {};
  var r = AZ(e12, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e12);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e12, n) && (r[n] = e12[n]);
  }
  return r;
}
function AZ(e12, t) {
  if (e12 == null) return {};
  var r = {};
  for (var n in e12) if (Object.prototype.hasOwnProperty.call(e12, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e12[n];
  }
  return r;
}
function _Z(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Hw(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, T2(n.key), n);
  }
}
function EZ(e12, t, r) {
  return t && Hw(e12.prototype, t), r && Hw(e12, r), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function kZ(e12, t, r) {
  return t = of(t), TZ(e12, k2() ? Reflect.construct(t, r || [], of(e12).constructor) : t.apply(e12, r));
}
function TZ(e12, t) {
  if (t && (eo(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return $Z(e12);
}
function $Z(e12) {
  if (e12 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e12;
}
function k2() {
  try {
    var e12 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (k2 = function() {
    return !!e12;
  })();
}
function of(e12) {
  return of = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, of(e12);
}
function CZ(e12, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e12.prototype = Object.create(t && t.prototype, { constructor: { value: e12, writable: true, configurable: true } }), Object.defineProperty(e12, "prototype", { writable: false }), t && Zm(e12, t);
}
function Zm(e12, t) {
  return Zm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Zm(e12, t);
}
function wg(e12, t, r) {
  return t = T2(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function T2(e12) {
  var t = NZ(e12, "string");
  return eo(t) == "symbol" ? t : t + "";
}
function NZ(e12, t) {
  if (eo(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (eo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e12);
}
var ko = function(e12) {
  function t(r) {
    var n;
    return _Z(this, t), n = kZ(this, t, [r]), n.state = { fontSize: "", letterSpacing: "" }, n;
  }
  return CZ(t, e12), EZ(t, [{ key: "shouldComponentUpdate", value: function(n, i) {
    var a = n.viewBox, o = Tp(n, OZ), s = this.props, l = s.viewBox, u = Tp(s, jZ);
    return !ba(a, l) || !ba(o, u) || !ba(i, this.state);
  } }, { key: "componentDidMount", value: function() {
    var n = this.layerReference;
    if (n) {
      var i = n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
      i && this.setState({ fontSize: window.getComputedStyle(i).fontSize, letterSpacing: window.getComputedStyle(i).letterSpacing });
    }
  } }, { key: "getTickLineCoord", value: function(n) {
    var i = this.props, a = i.x, o = i.y, s = i.width, l = i.height, u = i.orientation, f = i.tickSize, c = i.mirror, d = i.tickMargin, h, y, v, m, g, b, x = c ? -1 : 1, O = n.tickSize || f, w = q(n.tickCoord) ? n.tickCoord : n.coordinate;
    switch (u) {
      case "top":
        h = y = n.coordinate, m = o + +!c * l, v = m - x * O, b = v - x * d, g = w;
        break;
      case "left":
        v = m = n.coordinate, y = a + +!c * s, h = y - x * O, g = h - x * d, b = w;
        break;
      case "right":
        v = m = n.coordinate, y = a + +c * s, h = y + x * O, g = h + x * d, b = w;
        break;
      default:
        h = y = n.coordinate, m = o + +c * l, v = m + x * O, b = v + x * d, g = w;
        break;
    }
    return { line: { x1: h, y1: v, x2: y, y2: m }, tick: { x: g, y: b } };
  } }, { key: "getTickTextAnchor", value: function() {
    var n = this.props, i = n.orientation, a = n.mirror, o;
    switch (i) {
      case "left":
        o = a ? "start" : "end";
        break;
      case "right":
        o = a ? "end" : "start";
        break;
      default:
        o = "middle";
        break;
    }
    return o;
  } }, { key: "getTickVerticalAnchor", value: function() {
    var n = this.props, i = n.orientation, a = n.mirror, o = "end";
    switch (i) {
      case "left":
      case "right":
        o = "middle";
        break;
      case "top":
        o = a ? "start" : "end";
        break;
      default:
        o = a ? "end" : "start";
        break;
    }
    return o;
  } }, { key: "renderAxisLine", value: function() {
    var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, l = n.orientation, u = n.mirror, f = n.axisLine, c = qe(qe(qe({}, ee(this.props, false)), ee(f, false)), {}, { fill: "none" });
    if (l === "top" || l === "bottom") {
      var d = +(l === "top" && !u || l === "bottom" && u);
      c = qe(qe({}, c), {}, { x1: i, y1: a + d * s, x2: i + o, y2: a + d * s });
    } else {
      var h = +(l === "left" && !u || l === "right" && u);
      c = qe(qe({}, c), {}, { x1: i + h * o, y1: a, x2: i + h * o, y2: a + s });
    }
    return E.createElement("line", fa({}, c, { className: le("recharts-cartesian-axis-line", Ut(f, "className")) }));
  } }, { key: "renderTicks", value: function(n, i, a) {
    var o = this, s = this.props, l = s.tickLine, u = s.stroke, f = s.tick, c = s.tickFormatter, d = s.unit, h = xg(qe(qe({}, this.props), {}, { ticks: n }), i, a), y = this.getTickTextAnchor(), v = this.getTickVerticalAnchor(), m = ee(this.props, false), g = ee(f, false), b = qe(qe({}, m), {}, { fill: "none" }, ee(l, false)), x = h.map(function(O, w) {
      var S = o.getTickLineCoord(O), j = S.line, P = S.tick, k = qe(qe(qe(qe({ textAnchor: y, verticalAnchor: v }, m), {}, { stroke: "none", fill: u }, g), P), {}, { index: w, payload: O, visibleTicksCount: h.length, tickFormatter: c });
      return E.createElement(pe, fa({ className: "recharts-cartesian-axis-tick", key: "tick-".concat(O.value, "-").concat(O.coordinate, "-").concat(O.tickCoord) }, $i(o.props, O, w)), l && E.createElement("line", fa({}, b, j, { className: le("recharts-cartesian-axis-tick-line", Ut(l, "className")) })), f && t.renderTickItem(f, k, "".concat(ie(c) ? c(O.value, w) : O.value).concat(d || "")));
    });
    return E.createElement("g", { className: "recharts-cartesian-axis-ticks" }, x);
  } }, { key: "render", value: function() {
    var n = this, i = this.props, a = i.axisLine, o = i.width, s = i.height, l = i.ticksGenerator, u = i.className, f = i.hide;
    if (f) return null;
    var c = this.props, d = c.ticks, h = Tp(c, PZ), y = d;
    return ie(l) && (y = d && d.length > 0 ? l(this.props) : l(h)), o <= 0 || s <= 0 || !y || !y.length ? null : E.createElement(pe, { className: le("recharts-cartesian-axis", u), ref: function(m) {
      n.layerReference = m;
    } }, a && this.renderAxisLine(), this.renderTicks(y, this.state.fontSize, this.state.letterSpacing), rt.renderCallByParent(this.props));
  } }], [{ key: "renderTickItem", value: function(n, i, a) {
    var o, s = le(i.className, "recharts-cartesian-axis-tick-value");
    return E.isValidElement(n) ? o = E.cloneElement(n, qe(qe({}, i), {}, { className: s })) : ie(n) ? o = n(qe(qe({}, i), {}, { className: s })) : o = E.createElement(Ci, fa({}, i, { className: "recharts-cartesian-axis-tick-value" }), a), o;
  } }]);
}(A.Component);
wg(ko, "displayName", "CartesianAxis");
wg(ko, "defaultProps", { x: 0, y: 0, width: 0, height: 0, viewBox: { x: 0, y: 0, width: 0, height: 0 }, orientation: "bottom", ticks: [], stroke: "#666", tickLine: true, axisLine: true, tick: true, mirror: false, minTickGap: 5, tickSize: 6, tickMargin: 2, interval: "preserveEnd" });
var MZ = ["x1", "y1", "x2", "y2", "key"], IZ = ["offset"];
function Ii(e12) {
  "@babel/helpers - typeof";
  return Ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ii(e12);
}
function Vw(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ht(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vw(Object(r), true).forEach(function(n) {
      RZ(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : Vw(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function RZ(e12, t, r) {
  return t = DZ(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function DZ(e12) {
  var t = LZ(e12, "string");
  return Ii(t) == "symbol" ? t : t + "";
}
function LZ(e12, t) {
  if (Ii(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (Ii(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
function yi() {
  return yi = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, yi.apply(this, arguments);
}
function Kw(e12, t) {
  if (e12 == null) return {};
  var r = BZ(e12, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e12);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e12, n) && (r[n] = e12[n]);
  }
  return r;
}
function BZ(e12, t) {
  if (e12 == null) return {};
  var r = {};
  for (var n in e12) if (Object.prototype.hasOwnProperty.call(e12, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e12[n];
  }
  return r;
}
var zZ = function(t) {
  var r = t.fill;
  if (!r || r === "none") return null;
  var n = t.fillOpacity, i = t.x, a = t.y, o = t.width, s = t.height, l = t.ry;
  return E.createElement("rect", { x: i, y: a, ry: l, width: o, height: s, stroke: "none", fill: r, fillOpacity: n, className: "recharts-cartesian-grid-bg" });
};
function $2(e12, t) {
  var r;
  if (E.isValidElement(e12)) r = E.cloneElement(e12, t);
  else if (ie(e12)) r = e12(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, o = t.y2, s = t.key, l = Kw(t, MZ), u = ee(l, false);
    u.offset;
    var f = Kw(u, IZ);
    r = E.createElement("line", yi({}, f, { x1: n, y1: i, x2: a, y2: o, fill: "none", key: s }));
  }
  return r;
}
function FZ(e12) {
  var t = e12.x, r = e12.width, n = e12.horizontal, i = n === void 0 ? true : n, a = e12.horizontalPoints;
  if (!i || !a || !a.length) return null;
  var o = a.map(function(s, l) {
    var u = ht(ht({}, e12), {}, { x1: t, y1: s, x2: t + r, y2: s, key: "line-".concat(l), index: l });
    return $2(i, u);
  });
  return E.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, o);
}
function UZ(e12) {
  var t = e12.y, r = e12.height, n = e12.vertical, i = n === void 0 ? true : n, a = e12.verticalPoints;
  if (!i || !a || !a.length) return null;
  var o = a.map(function(s, l) {
    var u = ht(ht({}, e12), {}, { x1: s, y1: t, x2: s, y2: t + r, key: "line-".concat(l), index: l });
    return $2(i, u);
  });
  return E.createElement("g", { className: "recharts-cartesian-grid-vertical" }, o);
}
function WZ(e12) {
  var t = e12.horizontalFill, r = e12.fillOpacity, n = e12.x, i = e12.y, a = e12.width, o = e12.height, s = e12.horizontalPoints, l = e12.horizontal, u = l === void 0 ? true : l;
  if (!u || !t || !t.length) return null;
  var f = s.map(function(d) {
    return Math.round(d + i - i);
  }).sort(function(d, h) {
    return d - h;
  });
  i !== f[0] && f.unshift(0);
  var c = f.map(function(d, h) {
    var y = !f[h + 1], v = y ? i + o - d : f[h + 1] - d;
    if (v <= 0) return null;
    var m = h % t.length;
    return E.createElement("rect", { key: "react-".concat(h), y: d, x: n, height: v, width: a, stroke: "none", fill: t[m], fillOpacity: r, className: "recharts-cartesian-grid-bg" });
  });
  return E.createElement("g", { className: "recharts-cartesian-gridstripes-horizontal" }, c);
}
function HZ(e12) {
  var t = e12.vertical, r = t === void 0 ? true : t, n = e12.verticalFill, i = e12.fillOpacity, a = e12.x, o = e12.y, s = e12.width, l = e12.height, u = e12.verticalPoints;
  if (!r || !n || !n.length) return null;
  var f = u.map(function(d) {
    return Math.round(d + a - a);
  }).sort(function(d, h) {
    return d - h;
  });
  a !== f[0] && f.unshift(0);
  var c = f.map(function(d, h) {
    var y = !f[h + 1], v = y ? a + s - d : f[h + 1] - d;
    if (v <= 0) return null;
    var m = h % n.length;
    return E.createElement("rect", { key: "react-".concat(h), x: d, y: o, width: v, height: l, stroke: "none", fill: n[m], fillOpacity: i, className: "recharts-cartesian-grid-bg" });
  });
  return E.createElement("g", { className: "recharts-cartesian-gridstripes-vertical" }, c);
}
var VZ = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, o = t.offset;
  return __(xg(ht(ht(ht({}, ko.defaultProps), n), {}, { ticks: Gr(n, true), viewBox: { x: 0, y: 0, width: i, height: a } })), o.left, o.left + o.width, r);
}, KZ = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, o = t.offset;
  return __(xg(ht(ht(ht({}, ko.defaultProps), n), {}, { ticks: Gr(n, true), viewBox: { x: 0, y: 0, width: i, height: a } })), o.top, o.top + o.height, r);
}, Ki = { horizontal: true, vertical: true, stroke: "#ccc", fill: "none", verticalFill: [], horizontalFill: [] };
function Oa(e12) {
  var t, r, n, i, a, o, s = yg(), l = vg(), u = NJ(), f = ht(ht({}, e12), {}, { stroke: (t = e12.stroke) !== null && t !== void 0 ? t : Ki.stroke, fill: (r = e12.fill) !== null && r !== void 0 ? r : Ki.fill, horizontal: (n = e12.horizontal) !== null && n !== void 0 ? n : Ki.horizontal, horizontalFill: (i = e12.horizontalFill) !== null && i !== void 0 ? i : Ki.horizontalFill, vertical: (a = e12.vertical) !== null && a !== void 0 ? a : Ki.vertical, verticalFill: (o = e12.verticalFill) !== null && o !== void 0 ? o : Ki.verticalFill, x: q(e12.x) ? e12.x : u.left, y: q(e12.y) ? e12.y : u.top, width: q(e12.width) ? e12.width : u.width, height: q(e12.height) ? e12.height : u.height }), c = f.x, d = f.y, h = f.width, y = f.height, v = f.syncWithTicks, m = f.horizontalValues, g = f.verticalValues, b = TJ(), x = $J();
  if (!q(h) || h <= 0 || !q(y) || y <= 0 || !q(c) || c !== +c || !q(d) || d !== +d) return null;
  var O = f.verticalCoordinatesGenerator || VZ, w = f.horizontalCoordinatesGenerator || KZ, S = f.horizontalPoints, j = f.verticalPoints;
  if ((!S || !S.length) && ie(w)) {
    var P = m && m.length, k = w({ yAxis: x ? ht(ht({}, x), {}, { ticks: P ? m : x.ticks }) : void 0, width: s, height: l, offset: u }, P ? true : v);
    br(Array.isArray(k), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Ii(k), "]")), Array.isArray(k) && (S = k);
  }
  if ((!j || !j.length) && ie(O)) {
    var T = g && g.length, C = O({ xAxis: b ? ht(ht({}, b), {}, { ticks: T ? g : b.ticks }) : void 0, width: s, height: l, offset: u }, T ? true : v);
    br(Array.isArray(C), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(Ii(C), "]")), Array.isArray(C) && (j = C);
  }
  return E.createElement("g", { className: "recharts-cartesian-grid" }, E.createElement(zZ, { fill: f.fill, fillOpacity: f.fillOpacity, x: f.x, y: f.y, width: f.width, height: f.height, ry: f.ry }), E.createElement(FZ, yi({}, f, { offset: u, horizontalPoints: S, xAxis: b, yAxis: x })), E.createElement(UZ, yi({}, f, { offset: u, verticalPoints: j, xAxis: b, yAxis: x })), E.createElement(WZ, yi({}, f, { horizontalPoints: S })), E.createElement(HZ, yi({}, f, { verticalPoints: j })));
}
Oa.displayName = "CartesianGrid";
var qZ = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], GZ = ["key"], C2;
function to(e12) {
  "@babel/helpers - typeof";
  return to = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, to(e12);
}
function N2(e12, t) {
  if (e12 == null) return {};
  var r = XZ(e12, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e12);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e12, n) && (r[n] = e12[n]);
  }
  return r;
}
function XZ(e12, t) {
  if (e12 == null) return {};
  var r = {};
  for (var n in e12) if (Object.prototype.hasOwnProperty.call(e12, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e12[n];
  }
  return r;
}
function vi() {
  return vi = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, vi.apply(this, arguments);
}
function qw(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xn(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qw(Object(r), true).forEach(function(n) {
      kr(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : qw(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function YZ(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Gw(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, I2(n.key), n);
  }
}
function QZ(e12, t, r) {
  return t && Gw(e12.prototype, t), r && Gw(e12, r), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function JZ(e12, t, r) {
  return t = sf(t), ZZ(e12, M2() ? Reflect.construct(t, r || [], sf(e12).constructor) : t.apply(e12, r));
}
function ZZ(e12, t) {
  if (t && (to(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return eee(e12);
}
function eee(e12) {
  if (e12 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e12;
}
function M2() {
  try {
    var e12 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (M2 = function() {
    return !!e12;
  })();
}
function sf(e12) {
  return sf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, sf(e12);
}
function tee(e12, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e12.prototype = Object.create(t && t.prototype, { constructor: { value: e12, writable: true, configurable: true } }), Object.defineProperty(e12, "prototype", { writable: false }), t && ey(e12, t);
}
function ey(e12, t) {
  return ey = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ey(e12, t);
}
function kr(e12, t, r) {
  return t = I2(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function I2(e12) {
  var t = ree(e12, "string");
  return to(t) == "symbol" ? t : t + "";
}
function ree(e12, t) {
  if (to(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (to(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e12);
}
var vn = function(e12) {
  function t() {
    var r;
    YZ(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = JZ(this, t, [].concat(i)), kr(r, "state", { isAnimationFinished: true }), kr(r, "id", So("recharts-area-")), kr(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({ isAnimationFinished: true }), ie(o) && o();
    }), kr(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({ isAnimationFinished: false }), ie(o) && o();
    }), r;
  }
  return tee(t, e12), QZ(t, [{ key: "renderDots", value: function(n, i, a) {
    var o = this.props.isAnimationActive, s = this.state.isAnimationFinished;
    if (o && !s) return null;
    var l = this.props, u = l.dot, f = l.points, c = l.dataKey, d = ee(this.props, false), h = ee(u, true), y = f.map(function(m, g) {
      var b = xn(xn(xn({ key: "dot-".concat(g), r: 3 }, d), h), {}, { index: g, cx: m.x, cy: m.y, dataKey: c, value: m.value, payload: m.payload, points: f });
      return t.renderDotItem(u, b);
    }), v = { clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null };
    return E.createElement(pe, vi({ className: "recharts-area-dots" }, v), y);
  } }, { key: "renderHorizontalRect", value: function(n) {
    var i = this.props, a = i.baseLine, o = i.points, s = i.strokeWidth, l = o[0].x, u = o[o.length - 1].x, f = n * Math.abs(l - u), c = $n(o.map(function(d) {
      return d.y || 0;
    }));
    return q(a) && typeof a == "number" ? c = Math.max(a, c) : a && Array.isArray(a) && a.length && (c = Math.max($n(a.map(function(d) {
      return d.y || 0;
    })), c)), q(c) ? E.createElement("rect", { x: l < u ? l : l - f, y: 0, width: f, height: Math.floor(c + (s ? parseInt("".concat(s), 10) : 1)) }) : null;
  } }, { key: "renderVerticalRect", value: function(n) {
    var i = this.props, a = i.baseLine, o = i.points, s = i.strokeWidth, l = o[0].y, u = o[o.length - 1].y, f = n * Math.abs(l - u), c = $n(o.map(function(d) {
      return d.x || 0;
    }));
    return q(a) && typeof a == "number" ? c = Math.max(a, c) : a && Array.isArray(a) && a.length && (c = Math.max($n(a.map(function(d) {
      return d.x || 0;
    })), c)), q(c) ? E.createElement("rect", { x: 0, y: l < u ? l : l - f, width: c + (s ? parseInt("".concat(s), 10) : 1), height: Math.floor(f) }) : null;
  } }, { key: "renderClipRect", value: function(n) {
    var i = this.props.layout;
    return i === "vertical" ? this.renderVerticalRect(n) : this.renderHorizontalRect(n);
  } }, { key: "renderAreaStatically", value: function(n, i, a, o) {
    var s = this.props, l = s.layout, u = s.type, f = s.stroke, c = s.connectNulls, d = s.isRange;
    s.ref;
    var h = N2(s, qZ);
    return E.createElement(pe, { clipPath: a ? "url(#clipPath-".concat(o, ")") : null }, E.createElement(Sa, vi({}, ee(h, true), { points: n, connectNulls: c, type: u, baseLine: i, layout: l, stroke: "none", className: "recharts-area-area" })), f !== "none" && E.createElement(Sa, vi({}, ee(this.props, false), { className: "recharts-area-curve", layout: l, type: u, connectNulls: c, fill: "none", points: n })), f !== "none" && d && E.createElement(Sa, vi({}, ee(this.props, false), { className: "recharts-area-curve", layout: l, type: u, connectNulls: c, fill: "none", points: i })));
  } }, { key: "renderAreaWithAnimation", value: function(n, i) {
    var a = this, o = this.props, s = o.points, l = o.baseLine, u = o.isAnimationActive, f = o.animationBegin, c = o.animationDuration, d = o.animationEasing, h = o.animationId, y = this.state, v = y.prevPoints, m = y.prevBaseLine;
    return E.createElement(Rr, { begin: f, duration: c, isActive: u, easing: d, from: { t: 0 }, to: { t: 1 }, key: "area-".concat(h), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(g) {
      var b = g.t;
      if (v) {
        var x = v.length / s.length, O = s.map(function(P, k) {
          var T = Math.floor(k * x);
          if (v[T]) {
            var C = v[T], $ = _t(C.x, P.x), L = _t(C.y, P.y);
            return xn(xn({}, P), {}, { x: $(b), y: L(b) });
          }
          return P;
        }), w;
        if (q(l) && typeof l == "number") {
          var S = _t(m, l);
          w = S(b);
        } else if (se(l) || wo(l)) {
          var j = _t(m, 0);
          w = j(b);
        } else w = l.map(function(P, k) {
          var T = Math.floor(k * x);
          if (m[T]) {
            var C = m[T], $ = _t(C.x, P.x), L = _t(C.y, P.y);
            return xn(xn({}, P), {}, { x: $(b), y: L(b) });
          }
          return P;
        });
        return a.renderAreaStatically(O, w, n, i);
      }
      return E.createElement(pe, null, E.createElement("defs", null, E.createElement("clipPath", { id: "animationClipPath-".concat(i) }, a.renderClipRect(b))), E.createElement(pe, { clipPath: "url(#animationClipPath-".concat(i, ")") }, a.renderAreaStatically(s, l, n, i)));
    });
  } }, { key: "renderArea", value: function(n, i) {
    var a = this.props, o = a.points, s = a.baseLine, l = a.isAnimationActive, u = this.state, f = u.prevPoints, c = u.prevBaseLine, d = u.totalLength;
    return l && o && o.length && (!f && d > 0 || !Ua(f, o) || !Ua(c, s)) ? this.renderAreaWithAnimation(n, i) : this.renderAreaStatically(o, s, n, i);
  } }, { key: "render", value: function() {
    var n, i = this.props, a = i.hide, o = i.dot, s = i.points, l = i.className, u = i.top, f = i.left, c = i.xAxis, d = i.yAxis, h = i.width, y = i.height, v = i.isAnimationActive, m = i.id;
    if (a || !s || !s.length) return null;
    var g = this.state.isAnimationFinished, b = s.length === 1, x = le("recharts-area", l), O = c && c.allowDataOverflow, w = d && d.allowDataOverflow, S = O || w, j = se(m) ? this.id : m, P = (n = ee(o, false)) !== null && n !== void 0 ? n : { r: 3, strokeWidth: 2 }, k = P.r, T = k === void 0 ? 3 : k, C = P.strokeWidth, $ = C === void 0 ? 2 : C, L = PD(o) ? o : {}, R = L.clipDot, D = R === void 0 ? true : R, B = T * 2 + $;
    return E.createElement(pe, { className: x }, O || w ? E.createElement("defs", null, E.createElement("clipPath", { id: "clipPath-".concat(j) }, E.createElement("rect", { x: O ? f : f - h / 2, y: w ? u : u - y / 2, width: O ? h : h * 2, height: w ? y : y * 2 })), !D && E.createElement("clipPath", { id: "clipPath-dots-".concat(j) }, E.createElement("rect", { x: f - B / 2, y: u - B / 2, width: h + B, height: y + B }))) : null, b ? null : this.renderArea(S, j), (o || b) && this.renderDots(S, D, j), (!v || g) && Zr.renderCallByParent(this.props, s));
  } }], [{ key: "getDerivedStateFromProps", value: function(n, i) {
    return n.animationId !== i.prevAnimationId ? { prevAnimationId: n.animationId, curPoints: n.points, curBaseLine: n.baseLine, prevPoints: i.curPoints, prevBaseLine: i.curBaseLine } : n.points !== i.curPoints || n.baseLine !== i.curBaseLine ? { curPoints: n.points, curBaseLine: n.baseLine } : null;
  } }]);
}(A.PureComponent);
C2 = vn;
kr(vn, "displayName", "Area");
kr(vn, "defaultProps", { stroke: "#3182bd", fill: "#3182bd", fillOpacity: 0.6, xAxisId: 0, yAxisId: 0, legendType: "line", connectNulls: false, points: [], dot: false, activeDot: true, hide: false, isAnimationActive: !Bi.isSsr, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" });
kr(vn, "getBaseValue", function(e12, t, r, n) {
  var i = e12.layout, a = e12.baseValue, o = t.props.baseValue, s = o ?? a;
  if (q(s) && typeof s == "number") return s;
  var l = i === "horizontal" ? n : r, u = l.scale.domain();
  if (l.type === "number") {
    var f = Math.max(u[0], u[1]), c = Math.min(u[0], u[1]);
    return s === "dataMin" ? c : s === "dataMax" || f < 0 ? f : Math.max(Math.min(u[0], u[1]), 0);
  }
  return s === "dataMin" ? u[0] : s === "dataMax" ? u[1] : u[0];
});
kr(vn, "getComposedData", function(e12) {
  var t = e12.props, r = e12.item, n = e12.xAxis, i = e12.yAxis, a = e12.xAxisTicks, o = e12.yAxisTicks, s = e12.bandSize, l = e12.dataKey, u = e12.stackedData, f = e12.dataStartIndex, c = e12.displayedData, d = e12.offset, h = t.layout, y = u && u.length, v = C2.getBaseValue(t, r, n, i), m = h === "horizontal", g = false, b = c.map(function(O, w) {
    var S;
    y ? S = u[f + w] : (S = Ye(O, l), Array.isArray(S) ? g = true : S = [v, S]);
    var j = S[1] == null || y && Ye(O, l) == null;
    return m ? { x: S1({ axis: n, ticks: a, bandSize: s, entry: O, index: w }), y: j ? null : i.scale(S[1]), value: S, payload: O } : { x: j ? null : n.scale(S[1]), y: S1({ axis: i, ticks: o, bandSize: s, entry: O, index: w }), value: S, payload: O };
  }), x;
  return y || g ? x = b.map(function(O) {
    var w = Array.isArray(O.value) ? O.value[0] : null;
    return m ? { x: O.x, y: w != null && O.y != null ? i.scale(w) : null } : { x: w != null ? n.scale(w) : null, y: O.y };
  }) : x = m ? i.scale(v) : n.scale(v), xn({ points: b, baseLine: x, layout: h, isRange: g }, d);
});
kr(vn, "renderDotItem", function(e12, t) {
  var r;
  if (E.isValidElement(e12)) r = E.cloneElement(e12, t);
  else if (ie(e12)) r = e12(t);
  else {
    var n = le("recharts-area-dot", typeof e12 != "boolean" ? e12.className : ""), i = t.key, a = N2(t, GZ);
    r = E.createElement(hd, vi({}, a, { key: i, className: n }));
  }
  return r;
});
function ro(e12) {
  "@babel/helpers - typeof";
  return ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ro(e12);
}
function nee(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function iee(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, L2(n.key), n);
  }
}
function aee(e12, t, r) {
  return t && iee(e12.prototype, t), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function oee(e12, t, r) {
  return t = lf(t), see(e12, R2() ? Reflect.construct(t, r || [], lf(e12).constructor) : t.apply(e12, r));
}
function see(e12, t) {
  if (t && (ro(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return lee(e12);
}
function lee(e12) {
  if (e12 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e12;
}
function R2() {
  try {
    var e12 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (R2 = function() {
    return !!e12;
  })();
}
function lf(e12) {
  return lf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, lf(e12);
}
function uee(e12, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e12.prototype = Object.create(t && t.prototype, { constructor: { value: e12, writable: true, configurable: true } }), Object.defineProperty(e12, "prototype", { writable: false }), t && ty(e12, t);
}
function ty(e12, t) {
  return ty = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ty(e12, t);
}
function D2(e12, t, r) {
  return t = L2(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function L2(e12) {
  var t = cee(e12, "string");
  return ro(t) == "symbol" ? t : t + "";
}
function cee(e12, t) {
  if (ro(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (ro(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e12);
}
function ry() {
  return ry = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, ry.apply(this, arguments);
}
function fee(e12) {
  var t = e12.xAxisId, r = yg(), n = vg(), i = x2(t);
  return i == null ? null : A.createElement(ko, ry({}, i, { className: le("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className), viewBox: { x: 0, y: 0, width: r, height: n }, ticksGenerator: function(o) {
    return Gr(o, true);
  } }));
}
var en = function(e12) {
  function t() {
    return nee(this, t), oee(this, t, arguments);
  }
  return uee(t, e12), aee(t, [{ key: "render", value: function() {
    return A.createElement(fee, this.props);
  } }]);
}(A.Component);
D2(en, "displayName", "XAxis");
D2(en, "defaultProps", { allowDecimals: true, hide: false, orientation: "bottom", width: 0, height: 30, mirror: false, xAxisId: 0, tickCount: 5, type: "category", padding: { left: 0, right: 0 }, allowDataOverflow: false, scale: "auto", reversed: false, allowDuplicatedCategory: true });
function no(e12) {
  "@babel/helpers - typeof";
  return no = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, no(e12);
}
function dee(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function pee(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, F2(n.key), n);
  }
}
function hee(e12, t, r) {
  return t && pee(e12.prototype, t), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function mee(e12, t, r) {
  return t = uf(t), yee(e12, B2() ? Reflect.construct(t, r || [], uf(e12).constructor) : t.apply(e12, r));
}
function yee(e12, t) {
  if (t && (no(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return vee(e12);
}
function vee(e12) {
  if (e12 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e12;
}
function B2() {
  try {
    var e12 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (B2 = function() {
    return !!e12;
  })();
}
function uf(e12) {
  return uf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, uf(e12);
}
function gee(e12, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e12.prototype = Object.create(t && t.prototype, { constructor: { value: e12, writable: true, configurable: true } }), Object.defineProperty(e12, "prototype", { writable: false }), t && ny(e12, t);
}
function ny(e12, t) {
  return ny = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ny(e12, t);
}
function z2(e12, t, r) {
  return t = F2(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function F2(e12) {
  var t = bee(e12, "string");
  return no(t) == "symbol" ? t : t + "";
}
function bee(e12, t) {
  if (no(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (no(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e12);
}
function iy() {
  return iy = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, iy.apply(this, arguments);
}
var xee = function(t) {
  var r = t.yAxisId, n = yg(), i = vg(), a = w2(r);
  return a == null ? null : A.createElement(ko, iy({}, a, { className: le("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className), viewBox: { x: 0, y: 0, width: n, height: i }, ticksGenerator: function(s) {
    return Gr(s, true);
  } }));
}, tn = function(e12) {
  function t() {
    return dee(this, t), mee(this, t, arguments);
  }
  return gee(t, e12), hee(t, [{ key: "render", value: function() {
    return A.createElement(xee, this.props);
  } }]);
}(A.Component);
z2(tn, "displayName", "YAxis");
z2(tn, "defaultProps", { allowDuplicatedCategory: true, allowDecimals: true, hide: false, orientation: "left", width: 60, height: 0, mirror: false, yAxisId: 0, tickCount: 5, type: "number", padding: { top: 0, bottom: 0 }, allowDataOverflow: false, scale: "auto", reversed: false });
function Xw(e12) {
  return jee(e12) || Oee(e12) || See(e12) || wee();
}
function wee() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function See(e12, t) {
  if (e12) {
    if (typeof e12 == "string") return ay(e12, t);
    var r = Object.prototype.toString.call(e12).slice(8, -1);
    if (r === "Object" && e12.constructor && (r = e12.constructor.name), r === "Map" || r === "Set") return Array.from(e12);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ay(e12, t);
  }
}
function Oee(e12) {
  if (typeof Symbol < "u" && e12[Symbol.iterator] != null || e12["@@iterator"] != null) return Array.from(e12);
}
function jee(e12) {
  if (Array.isArray(e12)) return ay(e12);
}
function ay(e12, t) {
  (t == null || t > e12.length) && (t = e12.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e12[r];
  return n;
}
var oy = function(t, r, n, i, a) {
  var o = rr(t, bg), s = rr(t, Od), l = [].concat(Xw(o), Xw(s)), u = rr(t, Pd), f = "".concat(i, "Id"), c = i[0], d = r;
  if (l.length && (d = l.reduce(function(v, m) {
    if (m.props[f] === n && Nr(m.props, "extendDomain") && q(m.props[c])) {
      var g = m.props[c];
      return [Math.min(v[0], g), Math.max(v[1], g)];
    }
    return v;
  }, d)), u.length) {
    var h = "".concat(c, "1"), y = "".concat(c, "2");
    d = u.reduce(function(v, m) {
      if (m.props[f] === n && Nr(m.props, "extendDomain") && q(m.props[h]) && q(m.props[y])) {
        var g = m.props[h], b = m.props[y];
        return [Math.min(v[0], g, b), Math.max(v[1], g, b)];
      }
      return v;
    }, d);
  }
  return a && a.length && (d = a.reduce(function(v, m) {
    return q(m) ? [Math.min(v[0], m), Math.max(v[1], m)] : v;
  }, d)), d;
}, U2 = { exports: {} };
(function(e12) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = false));
  function i(l, u, f) {
    this.fn = l, this.context = u, this.once = f || false;
  }
  function a(l, u, f, c, d) {
    if (typeof f != "function") throw new TypeError("The listener must be a function");
    var h = new i(f, c || l, d), y = r ? r + u : u;
    return l._events[y] ? l._events[y].fn ? l._events[y] = [l._events[y], h] : l._events[y].push(h) : (l._events[y] = h, l._eventsCount++), l;
  }
  function o(l, u) {
    --l._eventsCount === 0 ? l._events = new n() : delete l._events[u];
  }
  function s() {
    this._events = new n(), this._eventsCount = 0;
  }
  s.prototype.eventNames = function() {
    var u = [], f, c;
    if (this._eventsCount === 0) return u;
    for (c in f = this._events) t.call(f, c) && u.push(r ? c.slice(1) : c);
    return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(f)) : u;
  }, s.prototype.listeners = function(u) {
    var f = r ? r + u : u, c = this._events[f];
    if (!c) return [];
    if (c.fn) return [c.fn];
    for (var d = 0, h = c.length, y = new Array(h); d < h; d++) y[d] = c[d].fn;
    return y;
  }, s.prototype.listenerCount = function(u) {
    var f = r ? r + u : u, c = this._events[f];
    return c ? c.fn ? 1 : c.length : 0;
  }, s.prototype.emit = function(u, f, c, d, h, y) {
    var v = r ? r + u : u;
    if (!this._events[v]) return false;
    var m = this._events[v], g = arguments.length, b, x;
    if (m.fn) {
      switch (m.once && this.removeListener(u, m.fn, void 0, true), g) {
        case 1:
          return m.fn.call(m.context), true;
        case 2:
          return m.fn.call(m.context, f), true;
        case 3:
          return m.fn.call(m.context, f, c), true;
        case 4:
          return m.fn.call(m.context, f, c, d), true;
        case 5:
          return m.fn.call(m.context, f, c, d, h), true;
        case 6:
          return m.fn.call(m.context, f, c, d, h, y), true;
      }
      for (x = 1, b = new Array(g - 1); x < g; x++) b[x - 1] = arguments[x];
      m.fn.apply(m.context, b);
    } else {
      var O = m.length, w;
      for (x = 0; x < O; x++) switch (m[x].once && this.removeListener(u, m[x].fn, void 0, true), g) {
        case 1:
          m[x].fn.call(m[x].context);
          break;
        case 2:
          m[x].fn.call(m[x].context, f);
          break;
        case 3:
          m[x].fn.call(m[x].context, f, c);
          break;
        case 4:
          m[x].fn.call(m[x].context, f, c, d);
          break;
        default:
          if (!b) for (w = 1, b = new Array(g - 1); w < g; w++) b[w - 1] = arguments[w];
          m[x].fn.apply(m[x].context, b);
      }
    }
    return true;
  }, s.prototype.on = function(u, f, c) {
    return a(this, u, f, c, false);
  }, s.prototype.once = function(u, f, c) {
    return a(this, u, f, c, true);
  }, s.prototype.removeListener = function(u, f, c, d) {
    var h = r ? r + u : u;
    if (!this._events[h]) return this;
    if (!f) return o(this, h), this;
    var y = this._events[h];
    if (y.fn) y.fn === f && (!d || y.once) && (!c || y.context === c) && o(this, h);
    else {
      for (var v = 0, m = [], g = y.length; v < g; v++) (y[v].fn !== f || d && !y[v].once || c && y[v].context !== c) && m.push(y[v]);
      m.length ? this._events[h] = m.length === 1 ? m[0] : m : o(this, h);
    }
    return this;
  }, s.prototype.removeAllListeners = function(u) {
    var f;
    return u ? (f = r ? r + u : u, this._events[f] && o(this, f)) : (this._events = new n(), this._eventsCount = 0), this;
  }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e12.exports = s;
})(U2);
var Pee = U2.exports;
const Aee = be(Pee);
var $p = new Aee(), Cp = "recharts.syncMouseEvents";
function gl(e12) {
  "@babel/helpers - typeof";
  return gl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gl(e12);
}
function _ee(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Eee(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, W2(n.key), n);
  }
}
function kee(e12, t, r) {
  return t && Eee(e12.prototype, t), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function Np(e12, t, r) {
  return t = W2(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function W2(e12) {
  var t = Tee(e12, "string");
  return gl(t) == "symbol" ? t : t + "";
}
function Tee(e12, t) {
  if (gl(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (gl(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e12);
}
var $ee = function() {
  function e12() {
    _ee(this, e12), Np(this, "activeIndex", 0), Np(this, "coordinateList", []), Np(this, "layout", "horizontal");
  }
  return kee(e12, [{ key: "setDetails", value: function(r) {
    var n, i = r.coordinateList, a = i === void 0 ? null : i, o = r.container, s = o === void 0 ? null : o, l = r.layout, u = l === void 0 ? null : l, f = r.offset, c = f === void 0 ? null : f, d = r.mouseHandlerCallback, h = d === void 0 ? null : d;
    this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = s ?? this.container, this.layout = u ?? this.layout, this.offset = c ?? this.offset, this.mouseHandlerCallback = h ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
  } }, { key: "focus", value: function() {
    this.spoofMouse();
  } }, { key: "keyboardEvent", value: function(r) {
    if (this.coordinateList.length !== 0) switch (r.key) {
      case "ArrowRight": {
        if (this.layout !== "horizontal") return;
        this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
        break;
      }
      case "ArrowLeft": {
        if (this.layout !== "horizontal") return;
        this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse();
        break;
      }
    }
  } }, { key: "setIndex", value: function(r) {
    this.activeIndex = r;
  } }, { key: "spoofMouse", value: function() {
    var r, n;
    if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
      var i = this.container.getBoundingClientRect(), a = i.x, o = i.y, s = i.height, l = this.coordinateList[this.activeIndex].coordinate, u = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, f = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, c = a + l + u, d = o + this.offset.top + s / 2 + f;
      this.mouseHandlerCallback({ pageX: c, pageY: d });
    }
  } }]);
}();
function Cee(e12, t, r) {
  if (r === "number" && t === true && Array.isArray(e12)) {
    var n = e12 == null ? void 0 : e12[0], i = e12 == null ? void 0 : e12[1];
    if (n && i && q(n) && q(i)) return true;
  }
  return false;
}
function Nee(e12, t, r, n) {
  var i = n / 2;
  return { stroke: "none", fill: "#ccc", x: e12 === "horizontal" ? t.x - i : r.left + 0.5, y: e12 === "horizontal" ? r.top + 0.5 : t.y - i, width: e12 === "horizontal" ? n : r.width - 1, height: e12 === "horizontal" ? r.height - 1 : n };
}
function H2(e12) {
  var t = e12.cx, r = e12.cy, n = e12.radius, i = e12.startAngle, a = e12.endAngle, o = _e(t, r, n, i), s = _e(t, r, n, a);
  return { points: [o, s], cx: t, cy: r, radius: n, startAngle: i, endAngle: a };
}
function Mee(e12, t, r) {
  var n, i, a, o;
  if (e12 === "horizontal") n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e12 === "vertical") i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null) if (e12 === "centric") {
    var s = t.cx, l = t.cy, u = t.innerRadius, f = t.outerRadius, c = t.angle, d = _e(s, l, u, c), h = _e(s, l, f, c);
    n = d.x, i = d.y, a = h.x, o = h.y;
  } else return H2(t);
  return [{ x: n, y: i }, { x: a, y: o }];
}
function bl(e12) {
  "@babel/helpers - typeof";
  return bl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bl(e12);
}
function Yw(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pu(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yw(Object(r), true).forEach(function(n) {
      Iee(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : Yw(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function Iee(e12, t, r) {
  return t = Ree(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function Ree(e12) {
  var t = Dee(e12, "string");
  return bl(t) == "symbol" ? t : t + "";
}
function Dee(e12, t) {
  if (bl(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (bl(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
function Lee(e12) {
  var t, r, n = e12.element, i = e12.tooltipEventType, a = e12.isActive, o = e12.activeCoordinate, s = e12.activePayload, l = e12.offset, u = e12.activeTooltipIndex, f = e12.tooltipAxisBandSize, c = e12.layout, d = e12.chartName, h = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !h || !a || !o || d !== "ScatterChart" && i !== "axis") return null;
  var y, v = Sa;
  if (d === "ScatterChart") y = o, v = oX;
  else if (d === "BarChart") y = Nee(c, o, l, f), v = dg;
  else if (c === "radial") {
    var m = H2(o), g = m.cx, b = m.cy, x = m.radius, O = m.startAngle, w = m.endAngle;
    y = { cx: g, cy: b, startAngle: O, endAngle: w, innerRadius: x, outerRadius: x }, v = L_;
  } else y = { points: Mee(c, o, l) }, v = Sa;
  var S = pu(pu(pu(pu({ stroke: "#ccc", pointerEvents: "none" }, l), y), ee(h, false)), {}, { payload: s, payloadIndex: u, className: le("recharts-tooltip-cursor", h.className) });
  return A.isValidElement(h) ? A.cloneElement(h, S) : A.createElement(v, S);
}
var Bee = ["item"], zee = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function io(e12) {
  "@babel/helpers - typeof";
  return io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, io(e12);
}
function da() {
  return da = Object.assign ? Object.assign.bind() : function(e12) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e12[n] = r[n]);
    }
    return e12;
  }, da.apply(this, arguments);
}
function Qw(e12, t) {
  return Wee(e12) || Uee(e12, t) || K2(e12, t) || Fee();
}
function Fee() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Uee(e12, t) {
  var r = e12 == null ? null : typeof Symbol < "u" && e12[Symbol.iterator] || e12["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], l = true, u = false;
    try {
      if (a = (r = r.call(e12)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = true) ;
    } catch (f) {
      u = true, i = f;
    } finally {
      try {
        if (!l && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function Wee(e12) {
  if (Array.isArray(e12)) return e12;
}
function Jw(e12, t) {
  if (e12 == null) return {};
  var r = Hee(e12, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e12);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e12, n) && (r[n] = e12[n]);
  }
  return r;
}
function Hee(e12, t) {
  if (e12 == null) return {};
  var r = {};
  for (var n in e12) if (Object.prototype.hasOwnProperty.call(e12, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e12[n];
  }
  return r;
}
function Vee(e12, t) {
  if (!(e12 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Kee(e12, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e12, q2(n.key), n);
  }
}
function qee(e12, t, r) {
  return t && Kee(e12.prototype, t), Object.defineProperty(e12, "prototype", { writable: false }), e12;
}
function Gee(e12, t, r) {
  return t = cf(t), Xee(e12, V2() ? Reflect.construct(t, r || [], cf(e12).constructor) : t.apply(e12, r));
}
function Xee(e12, t) {
  if (t && (io(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Yee(e12);
}
function Yee(e12) {
  if (e12 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e12;
}
function V2() {
  try {
    var e12 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (V2 = function() {
    return !!e12;
  })();
}
function cf(e12) {
  return cf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, cf(e12);
}
function Qee(e12, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e12.prototype = Object.create(t && t.prototype, { constructor: { value: e12, writable: true, configurable: true } }), Object.defineProperty(e12, "prototype", { writable: false }), t && sy(e12, t);
}
function sy(e12, t) {
  return sy = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, sy(e12, t);
}
function ao(e12) {
  return ete(e12) || Zee(e12) || K2(e12) || Jee();
}
function Jee() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K2(e12, t) {
  if (e12) {
    if (typeof e12 == "string") return ly(e12, t);
    var r = Object.prototype.toString.call(e12).slice(8, -1);
    if (r === "Object" && e12.constructor && (r = e12.constructor.name), r === "Map" || r === "Set") return Array.from(e12);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ly(e12, t);
  }
}
function Zee(e12) {
  if (typeof Symbol < "u" && e12[Symbol.iterator] != null || e12["@@iterator"] != null) return Array.from(e12);
}
function ete(e12) {
  if (Array.isArray(e12)) return ly(e12);
}
function ly(e12, t) {
  (t == null || t > e12.length) && (t = e12.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e12[r];
  return n;
}
function Zw(e12, t) {
  var r = Object.keys(e12);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e12);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e12, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function z(e12) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zw(Object(r), true).forEach(function(n) {
      ne(e12, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e12, Object.getOwnPropertyDescriptors(r)) : Zw(Object(r)).forEach(function(n) {
      Object.defineProperty(e12, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e12;
}
function ne(e12, t, r) {
  return t = q2(t), t in e12 ? Object.defineProperty(e12, t, { value: r, enumerable: true, configurable: true, writable: true }) : e12[t] = r, e12;
}
function q2(e12) {
  var t = tte(e12, "string");
  return io(t) == "symbol" ? t : t + "";
}
function tte(e12, t) {
  if (io(e12) != "object" || !e12) return e12;
  var r = e12[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e12, t);
    if (io(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e12);
}
var rte = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] }, nte = { width: "100%", height: "100%" }, G2 = { x: 0, y: 0 };
function hu(e12) {
  return e12;
}
var ite = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, ate = function(t, r, n, i) {
  var a = r.find(function(f) {
    return f && f.index === n;
  });
  if (a) {
    if (t === "horizontal") return { x: a.coordinate, y: i.y };
    if (t === "vertical") return { x: i.x, y: a.coordinate };
    if (t === "centric") {
      var o = a.coordinate, s = i.radius;
      return z(z(z({}, i), _e(i.cx, i.cy, s, o)), {}, { angle: o, radius: s });
    }
    var l = a.coordinate, u = i.angle;
    return z(z(z({}, i), _e(i.cx, i.cy, l, u)), {}, { angle: u, radius: l });
  }
  return G2;
}, Ad = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, o = (n ?? []).reduce(function(s, l) {
    var u = l.props.data;
    return u && u.length ? [].concat(ao(s), ao(u)) : s;
  }, []);
  return o.length > 0 ? o : t && t.length && q(i) && q(a) ? t.slice(i, a + 1) : [];
};
function X2(e12) {
  return e12 === "number" ? [0, "auto"] : void 0;
}
var uy = function(t, r, n, i) {
  var a = t.graphicalItems, o = t.tooltipAxis, s = Ad(r, t);
  return n < 0 || !a || !a.length || n >= s.length ? null : a.reduce(function(l, u) {
    var f, c = (f = u.props.data) !== null && f !== void 0 ? f : r;
    c && t.dataStartIndex + t.dataEndIndex !== 0 && t.dataEndIndex - t.dataStartIndex >= n && (c = c.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var d;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var h = c === void 0 ? s : c;
      d = lc(h, o.dataKey, i);
    } else d = c && c[n] || s[n];
    return d ? [].concat(ao(l), [C_(u, d)]) : l;
  }, []);
}, eS = function(t, r, n, i) {
  var a = i || { x: t.chartX, y: t.chartY }, o = ite(a, n), s = t.orderedTooltipTicks, l = t.tooltipAxis, u = t.tooltipTicks, f = AV(o, s, u, l);
  if (f >= 0 && u) {
    var c = u[f] && u[f].value, d = uy(t, r, f, c), h = ate(n, s, f, a);
    return { activeTooltipIndex: f, activeLabel: c, activePayload: d, activeCoordinate: h };
  }
  return null;
}, ote = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, l = r.dataStartIndex, u = r.dataEndIndex, f = t.layout, c = t.children, d = t.stackOffset, h = A_(f, a);
  return n.reduce(function(y, v) {
    var m, g = v.type.defaultProps !== void 0 ? z(z({}, v.type.defaultProps), v.props) : v.props, b = g.type, x = g.dataKey, O = g.allowDataOverflow, w = g.allowDuplicatedCategory, S = g.scale, j = g.ticks, P = g.includeHidden, k = g[o];
    if (y[k]) return y;
    var T = Ad(t.data, { graphicalItems: i.filter(function(V) {
      var Q, oe = o in V.props ? V.props[o] : (Q = V.type.defaultProps) === null || Q === void 0 ? void 0 : Q[o];
      return oe === k;
    }), dataStartIndex: l, dataEndIndex: u }), C = T.length, $, L, R;
    Cee(g.domain, O, b) && ($ = jm(g.domain, null, O), h && (b === "number" || S !== "auto") && (R = ms(T, x, "category")));
    var D = X2(b);
    if (!$ || $.length === 0) {
      var B, W = (B = g.domain) !== null && B !== void 0 ? B : D;
      if (x) {
        if ($ = ms(T, x, b), b === "category" && h) {
          var N = mD($);
          w && N ? (L = $, $ = Yc(0, C)) : w || ($ = A1(W, $, v).reduce(function(V, Q) {
            return V.indexOf(Q) >= 0 ? V : [].concat(ao(V), [Q]);
          }, []));
        } else if (b === "category") w ? $ = $.filter(function(V) {
          return V !== "" && !se(V);
        }) : $ = A1(W, $, v).reduce(function(V, Q) {
          return V.indexOf(Q) >= 0 || Q === "" || se(Q) ? V : [].concat(ao(V), [Q]);
        }, []);
        else if (b === "number") {
          var F = $V(T, i.filter(function(V) {
            var Q, oe, fe = o in V.props ? V.props[o] : (Q = V.type.defaultProps) === null || Q === void 0 ? void 0 : Q[o], we = "hide" in V.props ? V.props.hide : (oe = V.type.defaultProps) === null || oe === void 0 ? void 0 : oe.hide;
            return fe === k && (P || !we);
          }), x, a, f);
          F && ($ = F);
        }
        h && (b === "number" || S !== "auto") && (R = ms(T, x, "category"));
      } else h ? $ = Yc(0, C) : s && s[k] && s[k].hasStack && b === "number" ? $ = d === "expand" ? [0, 1] : $_(s[k].stackGroups, l, u) : $ = P_(T, i.filter(function(V) {
        var Q = o in V.props ? V.props[o] : V.type.defaultProps[o], oe = "hide" in V.props ? V.props.hide : V.type.defaultProps.hide;
        return Q === k && (P || !oe);
      }), b, f, true);
      if (b === "number") $ = oy(c, $, k, a, j), W && ($ = jm(W, $, O));
      else if (b === "category" && W) {
        var U = W, X = $.every(function(V) {
          return U.indexOf(V) >= 0;
        });
        X && ($ = U);
      }
    }
    return z(z({}, y), {}, ne({}, k, z(z({}, g), {}, { axisType: a, domain: $, categoricalDomain: R, duplicateDomain: L, originalDomain: (m = g.domain) !== null && m !== void 0 ? m : D, isCategorical: h, layout: f })));
  }, {});
}, ste = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, l = r.dataStartIndex, u = r.dataEndIndex, f = t.layout, c = t.children, d = Ad(t.data, { graphicalItems: n, dataStartIndex: l, dataEndIndex: u }), h = d.length, y = A_(f, a), v = -1;
  return n.reduce(function(m, g) {
    var b = g.type.defaultProps !== void 0 ? z(z({}, g.type.defaultProps), g.props) : g.props, x = b[o], O = X2("number");
    if (!m[x]) {
      v++;
      var w;
      return y ? w = Yc(0, h) : s && s[x] && s[x].hasStack ? (w = $_(s[x].stackGroups, l, u), w = oy(c, w, x, a)) : (w = jm(O, P_(d, n.filter(function(S) {
        var j, P, k = o in S.props ? S.props[o] : (j = S.type.defaultProps) === null || j === void 0 ? void 0 : j[o], T = "hide" in S.props ? S.props.hide : (P = S.type.defaultProps) === null || P === void 0 ? void 0 : P.hide;
        return k === x && !T;
      }), "number", f), i.defaultProps.allowDataOverflow), w = oy(c, w, x, a)), z(z({}, m), {}, ne({}, x, z(z({ axisType: a }, i.defaultProps), {}, { hide: true, orientation: Ut(rte, "".concat(a, ".").concat(v % 2), null), domain: w, originalDomain: O, isCategorical: y, layout: f })));
    }
    return m;
  }, {});
}, lte = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, l = r.dataStartIndex, u = r.dataEndIndex, f = t.children, c = "".concat(i, "Id"), d = rr(f, a), h = {};
  return d && d.length ? h = ote(t, { axes: d, graphicalItems: o, axisType: i, axisIdKey: c, stackGroups: s, dataStartIndex: l, dataEndIndex: u }) : o && o.length && (h = ste(t, { Axis: a, graphicalItems: o, axisType: i, axisIdKey: c, stackGroups: s, dataStartIndex: l, dataEndIndex: u })), h;
}, ute = function(t) {
  var r = _n(t), n = Gr(r, false, true);
  return { tooltipTicks: n, orderedTooltipTicks: Bv(n, function(i) {
    return i.coordinate;
  }), tooltipAxis: r, tooltipAxisBandSize: Dc(r, n) };
}, tS = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = Lt(r, Xa), a = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)), { chartX: 0, chartY: 0, dataStartIndex: a, dataEndIndex: o, activeTooltipIndex: -1, isTooltipActive: !!n };
}, cte = function(t) {
  return !t || !t.length ? false : t.some(function(r) {
    var n = Yr(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, rS = function(t) {
  return t === "horizontal" ? { numericAxisName: "yAxis", cateAxisName: "xAxis" } : t === "vertical" ? { numericAxisName: "xAxis", cateAxisName: "yAxis" } : t === "centric" ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" } : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
}, fte = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, s = t.yAxisMap, l = s === void 0 ? {} : s, u = n.width, f = n.height, c = n.children, d = n.margin || {}, h = Lt(c, Xa), y = Lt(c, Qr), v = Object.keys(l).reduce(function(w, S) {
    var j = l[S], P = j.orientation;
    return !j.mirror && !j.hide ? z(z({}, w), {}, ne({}, P, w[P] + j.width)) : w;
  }, { left: d.left || 0, right: d.right || 0 }), m = Object.keys(o).reduce(function(w, S) {
    var j = o[S], P = j.orientation;
    return !j.mirror && !j.hide ? z(z({}, w), {}, ne({}, P, Ut(w, "".concat(P)) + j.height)) : w;
  }, { top: d.top || 0, bottom: d.bottom || 0 }), g = z(z({}, m), v), b = g.bottom;
  h && (g.bottom += h.props.height || Xa.defaultProps.height), y && r && (g = kV(g, i, n, r));
  var x = u - g.left - g.right, O = f - g.top - g.bottom;
  return z(z({ brushBottom: b }, g), {}, { width: Math.max(x, 0), height: Math.max(O, 0) });
}, dte = function(t, r) {
  if (r === "xAxis") return t[r].width;
  if (r === "yAxis") return t[r].height;
}, Sg = function(t) {
  var r = t.chartName, n = t.GraphicalChild, i = t.defaultTooltipEventType, a = i === void 0 ? "axis" : i, o = t.validateTooltipEventTypes, s = o === void 0 ? ["axis"] : o, l = t.axisComponents, u = t.legendContent, f = t.formatAxisMap, c = t.defaultProps, d = function(g, b) {
    var x = b.graphicalItems, O = b.stackGroups, w = b.offset, S = b.updateId, j = b.dataStartIndex, P = b.dataEndIndex, k = g.barSize, T = g.layout, C = g.barGap, $ = g.barCategoryGap, L = g.maxBarSize, R = rS(T), D = R.numericAxisName, B = R.cateAxisName, W = cte(x), N = [];
    return x.forEach(function(F, U) {
      var X = Ad(g.data, { graphicalItems: [F], dataStartIndex: j, dataEndIndex: P }), V = F.type.defaultProps !== void 0 ? z(z({}, F.type.defaultProps), F.props) : F.props, Q = V.dataKey, oe = V.maxBarSize, fe = V["".concat(D, "Id")], we = V["".concat(B, "Id")], Ke = {}, K = l.reduce(function(vt, ur) {
        var _d = b["".concat(ur.axisType, "Map")], Og = V["".concat(ur.axisType, "Id")];
        _d && _d[Og] || ur.axisType === "zAxis" || Mi();
        var jg = _d[Og];
        return z(z({}, vt), {}, ne(ne({}, ur.axisType, jg), "".concat(ur.axisType, "Ticks"), Gr(jg)));
      }, Ke), _ = K[B], H = K["".concat(B, "Ticks")], Y = O && O[fe] && O[fe].hasStack && zV(F, O[fe].stackGroups), M = Yr(F.type).indexOf("Bar") >= 0, te = Dc(_, H), re = [], ue = W && _V({ barSize: k, stackGroups: O, totalSize: dte(K, B) });
      if (M) {
        var ye, at, lr = se(oe) ? L : oe, Br = (ye = (at = Dc(_, H, true)) !== null && at !== void 0 ? at : lr) !== null && ye !== void 0 ? ye : 0;
        re = EV({ barGap: C, barCategoryGap: $, bandSize: Br !== te ? Br : te, sizeList: ue[we], maxBarSize: lr }), Br !== te && (re = re.map(function(vt) {
          return z(z({}, vt), {}, { position: z(z({}, vt.position), {}, { offset: vt.position.offset - Br / 2 }) });
        }));
      }
      var Zn = F && F.type && F.type.getComposedData;
      Zn && N.push({ props: z(z({}, Zn(z(z({}, K), {}, { displayedData: X, props: g, dataKey: Q, item: F, bandSize: te, barPosition: re, offset: w, stackedData: Y, layout: T, dataStartIndex: j, dataEndIndex: P }))), {}, ne(ne(ne({ key: F.key || "item-".concat(U) }, D, K[D]), B, K[B]), "animationId", S)), childIndex: ED(F, g.children), item: F });
    }), N;
  }, h = function(g, b) {
    var x = g.props, O = g.dataStartIndex, w = g.dataEndIndex, S = g.updateId;
    if (!bb({ props: x })) return null;
    var j = x.children, P = x.layout, k = x.stackOffset, T = x.data, C = x.reverseStackOrder, $ = rS(P), L = $.numericAxisName, R = $.cateAxisName, D = rr(j, n), B = LV(T, D, "".concat(L, "Id"), "".concat(R, "Id"), k, C), W = l.reduce(function(V, Q) {
      var oe = "".concat(Q.axisType, "Map");
      return z(z({}, V), {}, ne({}, oe, lte(x, z(z({}, Q), {}, { graphicalItems: D, stackGroups: Q.axisType === L && B, dataStartIndex: O, dataEndIndex: w }))));
    }, {}), N = fte(z(z({}, W), {}, { props: x, graphicalItems: D }), b == null ? void 0 : b.legendBBox);
    Object.keys(W).forEach(function(V) {
      W[V] = f(x, W[V], N, V.replace("Map", ""), r);
    });
    var F = W["".concat(R, "Map")], U = ute(F), X = d(x, z(z({}, W), {}, { dataStartIndex: O, dataEndIndex: w, updateId: S, graphicalItems: D, stackGroups: B, offset: N }));
    return z(z({ formattedGraphicalItems: X, graphicalItems: D, offset: N, stackGroups: B }, U), W);
  }, y = function(m) {
    function g(b) {
      var x, O, w;
      return Vee(this, g), w = Gee(this, g, [b]), ne(w, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), ne(w, "accessibilityManager", new $ee()), ne(w, "handleLegendBBoxUpdate", function(S) {
        if (S) {
          var j = w.state, P = j.dataStartIndex, k = j.dataEndIndex, T = j.updateId;
          w.setState(z({ legendBBox: S }, h({ props: w.props, dataStartIndex: P, dataEndIndex: k, updateId: T }, z(z({}, w.state), {}, { legendBBox: S }))));
        }
      }), ne(w, "handleReceiveSyncEvent", function(S, j, P) {
        if (w.props.syncId === S) {
          if (P === w.eventEmitterSymbol && typeof w.props.syncMethod != "function") return;
          w.applySyncEvent(j);
        }
      }), ne(w, "handleBrushChange", function(S) {
        var j = S.startIndex, P = S.endIndex;
        if (j !== w.state.dataStartIndex || P !== w.state.dataEndIndex) {
          var k = w.state.updateId;
          w.setState(function() {
            return z({ dataStartIndex: j, dataEndIndex: P }, h({ props: w.props, dataStartIndex: j, dataEndIndex: P, updateId: k }, w.state));
          }), w.triggerSyncEvent({ dataStartIndex: j, dataEndIndex: P });
        }
      }), ne(w, "handleMouseEnter", function(S) {
        var j = w.getMouseInfo(S);
        if (j) {
          var P = z(z({}, j), {}, { isTooltipActive: true });
          w.setState(P), w.triggerSyncEvent(P);
          var k = w.props.onMouseEnter;
          ie(k) && k(P, S);
        }
      }), ne(w, "triggeredAfterMouseMove", function(S) {
        var j = w.getMouseInfo(S), P = j ? z(z({}, j), {}, { isTooltipActive: true }) : { isTooltipActive: false };
        w.setState(P), w.triggerSyncEvent(P);
        var k = w.props.onMouseMove;
        ie(k) && k(P, S);
      }), ne(w, "handleItemMouseEnter", function(S) {
        w.setState(function() {
          return { isTooltipActive: true, activeItem: S, activePayload: S.tooltipPayload, activeCoordinate: S.tooltipPosition || { x: S.cx, y: S.cy } };
        });
      }), ne(w, "handleItemMouseLeave", function() {
        w.setState(function() {
          return { isTooltipActive: false };
        });
      }), ne(w, "handleMouseMove", function(S) {
        S.persist(), w.throttleTriggeredAfterMouseMove(S);
      }), ne(w, "handleMouseLeave", function(S) {
        w.throttleTriggeredAfterMouseMove.cancel();
        var j = { isTooltipActive: false };
        w.setState(j), w.triggerSyncEvent(j);
        var P = w.props.onMouseLeave;
        ie(P) && P(j, S);
      }), ne(w, "handleOuterEvent", function(S) {
        var j = _D(S), P = Ut(w.props, "".concat(j));
        if (j && ie(P)) {
          var k, T;
          /.*touch.*/i.test(j) ? T = w.getMouseInfo(S.changedTouches[0]) : T = w.getMouseInfo(S), P((k = T) !== null && k !== void 0 ? k : {}, S);
        }
      }), ne(w, "handleClick", function(S) {
        var j = w.getMouseInfo(S);
        if (j) {
          var P = z(z({}, j), {}, { isTooltipActive: true });
          w.setState(P), w.triggerSyncEvent(P);
          var k = w.props.onClick;
          ie(k) && k(P, S);
        }
      }), ne(w, "handleMouseDown", function(S) {
        var j = w.props.onMouseDown;
        if (ie(j)) {
          var P = w.getMouseInfo(S);
          j(P, S);
        }
      }), ne(w, "handleMouseUp", function(S) {
        var j = w.props.onMouseUp;
        if (ie(j)) {
          var P = w.getMouseInfo(S);
          j(P, S);
        }
      }), ne(w, "handleTouchMove", function(S) {
        S.changedTouches != null && S.changedTouches.length > 0 && w.throttleTriggeredAfterMouseMove(S.changedTouches[0]);
      }), ne(w, "handleTouchStart", function(S) {
        S.changedTouches != null && S.changedTouches.length > 0 && w.handleMouseDown(S.changedTouches[0]);
      }), ne(w, "handleTouchEnd", function(S) {
        S.changedTouches != null && S.changedTouches.length > 0 && w.handleMouseUp(S.changedTouches[0]);
      }), ne(w, "handleDoubleClick", function(S) {
        var j = w.props.onDoubleClick;
        if (ie(j)) {
          var P = w.getMouseInfo(S);
          j(P, S);
        }
      }), ne(w, "handleContextMenu", function(S) {
        var j = w.props.onContextMenu;
        if (ie(j)) {
          var P = w.getMouseInfo(S);
          j(P, S);
        }
      }), ne(w, "triggerSyncEvent", function(S) {
        w.props.syncId !== void 0 && $p.emit(Cp, w.props.syncId, S, w.eventEmitterSymbol);
      }), ne(w, "applySyncEvent", function(S) {
        var j = w.props, P = j.layout, k = j.syncMethod, T = w.state.updateId, C = S.dataStartIndex, $ = S.dataEndIndex;
        if (S.dataStartIndex !== void 0 || S.dataEndIndex !== void 0) w.setState(z({ dataStartIndex: C, dataEndIndex: $ }, h({ props: w.props, dataStartIndex: C, dataEndIndex: $, updateId: T }, w.state)));
        else if (S.activeTooltipIndex !== void 0) {
          var L = S.chartX, R = S.chartY, D = S.activeTooltipIndex, B = w.state, W = B.offset, N = B.tooltipTicks;
          if (!W) return;
          if (typeof k == "function") D = k(N, S);
          else if (k === "value") {
            D = -1;
            for (var F = 0; F < N.length; F++) if (N[F].value === S.activeLabel) {
              D = F;
              break;
            }
          }
          var U = z(z({}, W), {}, { x: W.left, y: W.top }), X = Math.min(L, U.x + U.width), V = Math.min(R, U.y + U.height), Q = N[D] && N[D].value, oe = uy(w.state, w.props.data, D), fe = N[D] ? { x: P === "horizontal" ? N[D].coordinate : X, y: P === "horizontal" ? V : N[D].coordinate } : G2;
          w.setState(z(z({}, S), {}, { activeLabel: Q, activeCoordinate: fe, activePayload: oe, activeTooltipIndex: D }));
        } else w.setState(S);
      }), ne(w, "renderCursor", function(S) {
        var j, P = w.state, k = P.isTooltipActive, T = P.activeCoordinate, C = P.activePayload, $ = P.offset, L = P.activeTooltipIndex, R = P.tooltipAxisBandSize, D = w.getTooltipEventType(), B = (j = S.props.active) !== null && j !== void 0 ? j : k, W = w.props.layout, N = S.key || "_recharts-cursor";
        return E.createElement(Lee, { key: N, activeCoordinate: T, activePayload: C, activeTooltipIndex: L, chartName: r, element: S, isActive: B, layout: W, offset: $, tooltipAxisBandSize: R, tooltipEventType: D });
      }), ne(w, "renderPolarAxis", function(S, j, P) {
        var k = Ut(S, "type.axisType"), T = Ut(w.state, "".concat(k, "Map")), C = S.type.defaultProps, $ = C !== void 0 ? z(z({}, C), S.props) : S.props, L = T && T[$["".concat(k, "Id")]];
        return A.cloneElement(S, z(z({}, L), {}, { className: le(k, L.className), key: S.key || "".concat(j, "-").concat(P), ticks: Gr(L, true) }));
      }), ne(w, "renderPolarGrid", function(S) {
        var j = S.props, P = j.radialLines, k = j.polarAngles, T = j.polarRadius, C = w.state, $ = C.radiusAxisMap, L = C.angleAxisMap, R = _n($), D = _n(L), B = D.cx, W = D.cy, N = D.innerRadius, F = D.outerRadius;
        return A.cloneElement(S, { polarAngles: Array.isArray(k) ? k : Gr(D, true).map(function(U) {
          return U.coordinate;
        }), polarRadius: Array.isArray(T) ? T : Gr(R, true).map(function(U) {
          return U.coordinate;
        }), cx: B, cy: W, innerRadius: N, outerRadius: F, key: S.key || "polar-grid", radialLines: P });
      }), ne(w, "renderLegend", function() {
        var S = w.state.formattedGraphicalItems, j = w.props, P = j.children, k = j.width, T = j.height, C = w.props.margin || {}, $ = k - (C.left || 0) - (C.right || 0), L = O_({ children: P, formattedGraphicalItems: S, legendWidth: $, legendContent: u });
        if (!L) return null;
        var R = L.item, D = Jw(L, Bee);
        return A.cloneElement(R, z(z({}, D), {}, { chartWidth: k, chartHeight: T, margin: C, onBBoxUpdate: w.handleLegendBBoxUpdate }));
      }), ne(w, "renderTooltip", function() {
        var S, j = w.props, P = j.children, k = j.accessibilityLayer, T = Lt(P, bt);
        if (!T) return null;
        var C = w.state, $ = C.isTooltipActive, L = C.activeCoordinate, R = C.activePayload, D = C.activeLabel, B = C.offset, W = (S = T.props.active) !== null && S !== void 0 ? S : $;
        return A.cloneElement(T, { viewBox: z(z({}, B), {}, { x: B.left, y: B.top }), active: W, label: D, payload: W ? R : [], coordinate: L, accessibilityLayer: k });
      }), ne(w, "renderBrush", function(S) {
        var j = w.props, P = j.margin, k = j.data, T = w.state, C = T.offset, $ = T.dataStartIndex, L = T.dataEndIndex, R = T.updateId;
        return A.cloneElement(S, { key: S.key || "_recharts-brush", onChange: uu(w.handleBrushChange, S.props.onChange), data: k, x: q(S.props.x) ? S.props.x : C.left, y: q(S.props.y) ? S.props.y : C.top + C.height + C.brushBottom - (P.bottom || 0), width: q(S.props.width) ? S.props.width : C.width, startIndex: $, endIndex: L, updateId: "brush-".concat(R) });
      }), ne(w, "renderReferenceElement", function(S, j, P) {
        if (!S) return null;
        var k = w, T = k.clipPathId, C = w.state, $ = C.xAxisMap, L = C.yAxisMap, R = C.offset, D = S.type.defaultProps || {}, B = S.props, W = B.xAxisId, N = W === void 0 ? D.xAxisId : W, F = B.yAxisId, U = F === void 0 ? D.yAxisId : F;
        return A.cloneElement(S, { key: S.key || "".concat(j, "-").concat(P), xAxis: $[N], yAxis: L[U], viewBox: { x: R.left, y: R.top, width: R.width, height: R.height }, clipPathId: T });
      }), ne(w, "renderActivePoints", function(S) {
        var j = S.item, P = S.activePoint, k = S.basePoint, T = S.childIndex, C = S.isRange, $ = [], L = j.props.key, R = j.item.type.defaultProps !== void 0 ? z(z({}, j.item.type.defaultProps), j.item.props) : j.item.props, D = R.activeDot, B = R.dataKey, W = z(z({ index: T, dataKey: B, cx: P.x, cy: P.y, r: 4, fill: fg(j.item), strokeWidth: 2, stroke: "#fff", payload: P.payload, value: P.value }, ee(D, false)), uc(D));
        return $.push(g.renderActiveDot(D, W, "".concat(L, "-activePoint-").concat(T))), k ? $.push(g.renderActiveDot(D, z(z({}, W), {}, { cx: k.x, cy: k.y }), "".concat(L, "-basePoint-").concat(T))) : C && $.push(null), $;
      }), ne(w, "renderGraphicChild", function(S, j, P) {
        var k = w.filterFormatItem(S, j, P);
        if (!k) return null;
        var T = w.getTooltipEventType(), C = w.state, $ = C.isTooltipActive, L = C.tooltipAxis, R = C.activeTooltipIndex, D = C.activeLabel, B = w.props.children, W = Lt(B, bt), N = k.props, F = N.points, U = N.isRange, X = N.baseLine, V = k.item.type.defaultProps !== void 0 ? z(z({}, k.item.type.defaultProps), k.item.props) : k.item.props, Q = V.activeDot, oe = V.hide, fe = V.activeBar, we = V.activeShape, Ke = !!(!oe && $ && W && (Q || fe || we)), K = {};
        T !== "axis" && W && W.props.trigger === "click" ? K = { onClick: uu(w.handleItemMouseEnter, S.props.onClick) } : T !== "axis" && (K = { onMouseLeave: uu(w.handleItemMouseLeave, S.props.onMouseLeave), onMouseEnter: uu(w.handleItemMouseEnter, S.props.onMouseEnter) });
        var _ = A.cloneElement(S, z(z({}, k.props), K));
        function H(ur) {
          return typeof L.dataKey == "function" ? L.dataKey(ur.payload) : null;
        }
        if (Ke) if (R >= 0) {
          var Y, M;
          if (L.dataKey && !L.allowDuplicatedCategory) {
            var te = typeof L.dataKey == "function" ? H : "payload.".concat(L.dataKey.toString());
            Y = lc(F, te, D), M = U && X && lc(X, te, D);
          } else Y = F == null ? void 0 : F[R], M = U && X && X[R];
          if (we || fe) {
            var re = S.props.activeIndex !== void 0 ? S.props.activeIndex : R;
            return [A.cloneElement(S, z(z(z({}, k.props), K), {}, { activeIndex: re })), null, null];
          }
          if (!se(Y)) return [_].concat(ao(w.renderActivePoints({ item: k, activePoint: Y, basePoint: M, childIndex: R, isRange: U })));
        } else {
          var ue, ye = (ue = w.getItemByXY(w.state.activeCoordinate)) !== null && ue !== void 0 ? ue : { graphicalItem: _ }, at = ye.graphicalItem, lr = at.item, Br = lr === void 0 ? S : lr, Zn = at.childIndex, vt = z(z(z({}, k.props), K), {}, { activeIndex: Zn });
          return [A.cloneElement(Br, vt), null, null];
        }
        return U ? [_, null, null] : [_, null];
      }), ne(w, "renderCustomized", function(S, j, P) {
        return A.cloneElement(S, z(z({ key: "recharts-customized-".concat(P) }, w.props), w.state));
      }), ne(w, "renderMap", { CartesianGrid: { handler: hu, once: true }, ReferenceArea: { handler: w.renderReferenceElement }, ReferenceLine: { handler: hu }, ReferenceDot: { handler: w.renderReferenceElement }, XAxis: { handler: hu }, YAxis: { handler: hu }, Brush: { handler: w.renderBrush, once: true }, Bar: { handler: w.renderGraphicChild }, Line: { handler: w.renderGraphicChild }, Area: { handler: w.renderGraphicChild }, Radar: { handler: w.renderGraphicChild }, RadialBar: { handler: w.renderGraphicChild }, Scatter: { handler: w.renderGraphicChild }, Pie: { handler: w.renderGraphicChild }, Funnel: { handler: w.renderGraphicChild }, Tooltip: { handler: w.renderCursor, once: true }, PolarGrid: { handler: w.renderPolarGrid, once: true }, PolarAngleAxis: { handler: w.renderPolarAxis }, PolarRadiusAxis: { handler: w.renderPolarAxis }, Customized: { handler: w.renderCustomized } }), w.clipPathId = "".concat((x = b.id) !== null && x !== void 0 ? x : So("recharts"), "-clip"), w.throttleTriggeredAfterMouseMove = OA(w.triggeredAfterMouseMove, (O = b.throttleDelay) !== null && O !== void 0 ? O : 1e3 / 60), w.state = {}, w;
    }
    return Qee(g, m), qee(g, [{ key: "componentDidMount", value: function() {
      var x, O;
      this.addListener(), this.accessibilityManager.setDetails({ container: this.container, offset: { left: (x = this.props.margin.left) !== null && x !== void 0 ? x : 0, top: (O = this.props.margin.top) !== null && O !== void 0 ? O : 0 }, coordinateList: this.state.tooltipTicks, mouseHandlerCallback: this.triggeredAfterMouseMove, layout: this.props.layout }), this.displayDefaultTooltip();
    } }, { key: "displayDefaultTooltip", value: function() {
      var x = this.props, O = x.children, w = x.data, S = x.height, j = x.layout, P = Lt(O, bt);
      if (P) {
        var k = P.props.defaultIndex;
        if (!(typeof k != "number" || k < 0 || k > this.state.tooltipTicks.length - 1)) {
          var T = this.state.tooltipTicks[k] && this.state.tooltipTicks[k].value, C = uy(this.state, w, k, T), $ = this.state.tooltipTicks[k].coordinate, L = (this.state.offset.top + S) / 2, R = j === "horizontal", D = R ? { x: $, y: L } : { y: $, x: L }, B = this.state.formattedGraphicalItems.find(function(N) {
            var F = N.item;
            return F.type.name === "Scatter";
          });
          B && (D = z(z({}, D), B.props.points[k].tooltipPosition), C = B.props.points[k].tooltipPayload);
          var W = { activeTooltipIndex: k, isTooltipActive: true, activeLabel: T, activePayload: C, activeCoordinate: D };
          this.setState(W), this.renderCursor(P), this.accessibilityManager.setIndex(k);
        }
      }
    } }, { key: "getSnapshotBeforeUpdate", value: function(x, O) {
      if (!this.props.accessibilityLayer) return null;
      if (this.state.tooltipTicks !== O.tooltipTicks && this.accessibilityManager.setDetails({ coordinateList: this.state.tooltipTicks }), this.props.layout !== x.layout && this.accessibilityManager.setDetails({ layout: this.props.layout }), this.props.margin !== x.margin) {
        var w, S;
        this.accessibilityManager.setDetails({ offset: { left: (w = this.props.margin.left) !== null && w !== void 0 ? w : 0, top: (S = this.props.margin.top) !== null && S !== void 0 ? S : 0 } });
      }
      return null;
    } }, { key: "componentDidUpdate", value: function(x) {
      Bh([Lt(x.children, bt)], [Lt(this.props.children, bt)]) || this.displayDefaultTooltip();
    } }, { key: "componentWillUnmount", value: function() {
      this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
    } }, { key: "getTooltipEventType", value: function() {
      var x = Lt(this.props.children, bt);
      if (x && typeof x.props.shared == "boolean") {
        var O = x.props.shared ? "axis" : "item";
        return s.indexOf(O) >= 0 ? O : a;
      }
      return a;
    } }, { key: "getMouseInfo", value: function(x) {
      if (!this.container) return null;
      var O = this.container, w = O.getBoundingClientRect(), S = e7(w), j = { chartX: Math.round(x.pageX - S.left), chartY: Math.round(x.pageY - S.top) }, P = w.width / O.offsetWidth || 1, k = this.inRange(j.chartX, j.chartY, P);
      if (!k) return null;
      var T = this.state, C = T.xAxisMap, $ = T.yAxisMap, L = this.getTooltipEventType(), R = eS(this.state, this.props.data, this.props.layout, k);
      if (L !== "axis" && C && $) {
        var D = _n(C).scale, B = _n($).scale, W = D && D.invert ? D.invert(j.chartX) : null, N = B && B.invert ? B.invert(j.chartY) : null;
        return z(z({}, j), {}, { xValue: W, yValue: N }, R);
      }
      return R ? z(z({}, j), R) : null;
    } }, { key: "inRange", value: function(x, O) {
      var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, S = this.props.layout, j = x / w, P = O / w;
      if (S === "horizontal" || S === "vertical") {
        var k = this.state.offset, T = j >= k.left && j <= k.left + k.width && P >= k.top && P <= k.top + k.height;
        return T ? { x: j, y: P } : null;
      }
      var C = this.state, $ = C.angleAxisMap, L = C.radiusAxisMap;
      if ($ && L) {
        var R = _n($);
        return k1({ x: j, y: P }, R);
      }
      return null;
    } }, { key: "parseEventsOfWrapper", value: function() {
      var x = this.props.children, O = this.getTooltipEventType(), w = Lt(x, bt), S = {};
      w && O === "axis" && (w.props.trigger === "click" ? S = { onClick: this.handleClick } : S = { onMouseEnter: this.handleMouseEnter, onDoubleClick: this.handleDoubleClick, onMouseMove: this.handleMouseMove, onMouseLeave: this.handleMouseLeave, onTouchMove: this.handleTouchMove, onTouchStart: this.handleTouchStart, onTouchEnd: this.handleTouchEnd, onContextMenu: this.handleContextMenu });
      var j = uc(this.props, this.handleOuterEvent);
      return z(z({}, j), S);
    } }, { key: "addListener", value: function() {
      $p.on(Cp, this.handleReceiveSyncEvent);
    } }, { key: "removeListener", value: function() {
      $p.removeListener(Cp, this.handleReceiveSyncEvent);
    } }, { key: "filterFormatItem", value: function(x, O, w) {
      for (var S = this.state.formattedGraphicalItems, j = 0, P = S.length; j < P; j++) {
        var k = S[j];
        if (k.item === x || k.props.key === x.key || O === Yr(k.item.type) && w === k.childIndex) return k;
      }
      return null;
    } }, { key: "renderClipPath", value: function() {
      var x = this.clipPathId, O = this.state.offset, w = O.left, S = O.top, j = O.height, P = O.width;
      return E.createElement("defs", null, E.createElement("clipPath", { id: x }, E.createElement("rect", { x: w, y: S, height: j, width: P })));
    } }, { key: "getXScales", value: function() {
      var x = this.state.xAxisMap;
      return x ? Object.entries(x).reduce(function(O, w) {
        var S = Qw(w, 2), j = S[0], P = S[1];
        return z(z({}, O), {}, ne({}, j, P.scale));
      }, {}) : null;
    } }, { key: "getYScales", value: function() {
      var x = this.state.yAxisMap;
      return x ? Object.entries(x).reduce(function(O, w) {
        var S = Qw(w, 2), j = S[0], P = S[1];
        return z(z({}, O), {}, ne({}, j, P.scale));
      }, {}) : null;
    } }, { key: "getXScaleByAxisId", value: function(x) {
      var O;
      return (O = this.state.xAxisMap) === null || O === void 0 || (O = O[x]) === null || O === void 0 ? void 0 : O.scale;
    } }, { key: "getYScaleByAxisId", value: function(x) {
      var O;
      return (O = this.state.yAxisMap) === null || O === void 0 || (O = O[x]) === null || O === void 0 ? void 0 : O.scale;
    } }, { key: "getItemByXY", value: function(x) {
      var O = this.state, w = O.formattedGraphicalItems, S = O.activeItem;
      if (w && w.length) for (var j = 0, P = w.length; j < P; j++) {
        var k = w[j], T = k.props, C = k.item, $ = C.type.defaultProps !== void 0 ? z(z({}, C.type.defaultProps), C.props) : C.props, L = Yr(C.type);
        if (L === "Bar") {
          var R = (T.data || []).find(function(N) {
            return zG(x, N);
          });
          if (R) return { graphicalItem: k, payload: R };
        } else if (L === "RadialBar") {
          var D = (T.data || []).find(function(N) {
            return k1(x, N);
          });
          if (D) return { graphicalItem: k, payload: D };
        } else if (bd(k, S) || xd(k, S) || pl(k, S)) {
          var B = EY({ graphicalItem: k, activeTooltipItem: S, itemData: $.data }), W = $.activeIndex === void 0 ? B : $.activeIndex;
          return { graphicalItem: z(z({}, k), {}, { childIndex: W }), payload: pl(k, S) ? $.data[B] : k.props.data[B] };
        }
      }
      return null;
    } }, { key: "render", value: function() {
      var x = this;
      if (!bb(this)) return null;
      var O = this.props, w = O.children, S = O.className, j = O.width, P = O.height, k = O.style, T = O.compact, C = O.title, $ = O.desc, L = Jw(O, zee), R = ee(L, false);
      if (T) return E.createElement(Mw, { state: this.state, width: this.props.width, height: this.props.height, clipPathId: this.clipPathId }, E.createElement(Fh, da({}, R, { width: j, height: P, title: C, desc: $ }), this.renderClipPath(), wb(w, this.renderMap)));
      if (this.props.accessibilityLayer) {
        var D, B;
        R.tabIndex = (D = this.props.tabIndex) !== null && D !== void 0 ? D : 0, R.role = (B = this.props.role) !== null && B !== void 0 ? B : "application", R.onKeyDown = function(N) {
          x.accessibilityManager.keyboardEvent(N);
        }, R.onFocus = function() {
          x.accessibilityManager.focus();
        };
      }
      var W = this.parseEventsOfWrapper();
      return E.createElement(Mw, { state: this.state, width: this.props.width, height: this.props.height, clipPathId: this.clipPathId }, E.createElement("div", da({ className: le("recharts-wrapper", S), style: z({ position: "relative", cursor: "default", width: j, height: P }, k) }, W, { ref: function(F) {
        x.container = F;
      } }), E.createElement(Fh, da({}, R, { width: j, height: P, title: C, desc: $, style: nte }), this.renderClipPath(), wb(w, this.renderMap)), this.renderLegend(), this.renderTooltip()));
    } }]);
  }(A.Component);
  ne(y, "displayName", r), ne(y, "defaultProps", z({ layout: "horizontal", stackOffset: "none", barCategoryGap: "10%", barGap: 4, margin: { top: 5, right: 5, bottom: 5, left: 5 }, reverseStackOrder: false, syncMethod: "index" }, c)), ne(y, "getDerivedStateFromProps", function(m, g) {
    var b = m.dataKey, x = m.data, O = m.children, w = m.width, S = m.height, j = m.layout, P = m.stackOffset, k = m.margin, T = g.dataStartIndex, C = g.dataEndIndex;
    if (g.updateId === void 0) {
      var $ = tS(m);
      return z(z(z({}, $), {}, { updateId: 0 }, h(z(z({ props: m }, $), {}, { updateId: 0 }), g)), {}, { prevDataKey: b, prevData: x, prevWidth: w, prevHeight: S, prevLayout: j, prevStackOffset: P, prevMargin: k, prevChildren: O });
    }
    if (b !== g.prevDataKey || x !== g.prevData || w !== g.prevWidth || S !== g.prevHeight || j !== g.prevLayout || P !== g.prevStackOffset || !ba(k, g.prevMargin)) {
      var L = tS(m), R = { chartX: g.chartX, chartY: g.chartY, isTooltipActive: g.isTooltipActive }, D = z(z({}, eS(g, x, j)), {}, { updateId: g.updateId + 1 }), B = z(z(z({}, L), R), D);
      return z(z(z({}, B), h(z({ props: m }, B), g)), {}, { prevDataKey: b, prevData: x, prevWidth: w, prevHeight: S, prevLayout: j, prevStackOffset: P, prevMargin: k, prevChildren: O });
    }
    if (!Bh(O, g.prevChildren)) {
      var W, N, F, U, X = Lt(O, Xa), V = X && (W = (N = X.props) === null || N === void 0 ? void 0 : N.startIndex) !== null && W !== void 0 ? W : T, Q = X && (F = (U = X.props) === null || U === void 0 ? void 0 : U.endIndex) !== null && F !== void 0 ? F : C, oe = V !== T || Q !== C, fe = !se(x), we = fe && !oe ? g.updateId : g.updateId + 1;
      return z(z({ updateId: we }, h(z(z({ props: m }, g), {}, { updateId: we, dataStartIndex: V, dataEndIndex: Q }), g)), {}, { prevChildren: O, dataStartIndex: V, dataEndIndex: Q });
    }
    return null;
  }), ne(y, "renderActiveDot", function(m, g, b) {
    var x;
    return A.isValidElement(m) ? x = A.cloneElement(m, g) : ie(m) ? x = m(g) : x = E.createElement(hd, g), E.createElement(pe, { className: "recharts-active-dot", key: b }, x);
  });
  var v = A.forwardRef(function(g, b) {
    return E.createElement(y, da({}, g, { ref: b }));
  });
  return v.displayName = y.displayName, v;
}, cy = Sg({ chartName: "BarChart", GraphicalChild: Mr, defaultTooltipEventType: "axis", validateTooltipEventTypes: ["axis", "item"], axisComponents: [{ axisType: "xAxis", AxisComp: en }, { axisType: "yAxis", AxisComp: tn }], formatAxisMap: d2 }), pte = Sg({ chartName: "PieChart", GraphicalChild: yn, validateTooltipEventTypes: ["item"], defaultTooltipEventType: "item", legendContent: "children", axisComponents: [{ axisType: "angleAxis", AxisComp: gd }, { axisType: "radiusAxis", AxisComp: yd }], formatAxisMap: YV, defaultProps: { layout: "centric", startAngle: 0, endAngle: 360, cx: "50%", cy: "50%", innerRadius: 0, outerRadius: "80%" } }), Y2 = Sg({ chartName: "AreaChart", GraphicalChild: vn, axisComponents: [{ axisType: "xAxis", AxisComp: en }, { axisType: "yAxis", AxisComp: tn }], formatAxisMap: d2 });
function gi({ title: e12, value: t, subtitle: r, icon: n, color: i = "blue", trend: a }) {
  const o = { blue: { bg: "rgba(79,142,247,0.1)", border: "rgba(79,142,247,0.2)", icon: "#4f8ef7", text: "#4f8ef7" }, green: { bg: "rgba(34,211,165,0.1)", border: "rgba(34,211,165,0.2)", icon: "#22d3a5", text: "#22d3a5" }, red: { bg: "rgba(247,95,95,0.1)", border: "rgba(247,95,95,0.2)", icon: "#f75f5f", text: "#f75f5f" }, amber: { bg: "rgba(247,184,79,0.1)", border: "rgba(247,184,79,0.2)", icon: "#f7b84f", text: "#f7b84f" }, purple: { bg: "rgba(124,106,247,0.1)", border: "rgba(124,106,247,0.2)", icon: "#7c6af7", text: "#7c6af7" } }, s = o[i] || o.blue;
  return p.jsxs("div", { className: "summary-card card fade-in", children: [p.jsxs("div", { className: "summary-card-header", children: [p.jsx("p", { className: "summary-card-title", children: e12 }), n && p.jsx("div", { className: "summary-card-icon", style: { background: s.bg, border: `1px solid ${s.border}` }, children: p.jsx(n, { size: 16, color: s.icon }) })] }), p.jsx("p", { className: "summary-card-value", style: { color: s.text }, children: t }), r && p.jsx("p", { className: "summary-card-sub", children: r }), a !== void 0 && p.jsxs("div", { className: `summary-card-trend ${a >= 0 ? "up" : "down"}`, children: [a >= 0 ? "\u2191" : "\u2193", " ", Math.abs(a), "%"] }), p.jsx("style", { children: `
        .summary-card { position: relative; overflow: hidden; }
        .summary-card::before {
          content: '';
          position: absolute;
          top: -40px;
          right: -40px;
          width: 120px;
          height: 120px;
          background: ${s.bg};
          border-radius: 50%;
          pointer-events: none;
        }
        .summary-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .summary-card-title {
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }
        .summary-card-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .summary-card-value {
          font-family: var(--font-display);
          font-size: 1.65rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 6px;
        }
        .summary-card-sub {
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .summary-card-trend {
          display: inline-block;
          margin-top: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 99px;
        }
        .summary-card-trend.up {
          background: rgba(34,211,165,0.1);
          color: var(--accent-green);
        }
        .summary-card-trend.down {
          background: rgba(247,95,95,0.1);
          color: var(--accent-red);
        }
      ` })] });
}
const hte = (e12) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(e12), mte = (e12) => new Date(e12).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
function bs({ transactions: e12 = [], onDelete: t, compact: r = false }) {
  return e12.length ? p.jsx("div", { style: { overflowX: "auto" }, children: p.jsxs("table", { className: "data-table", children: [p.jsx("thead", { children: p.jsxs("tr", { children: [p.jsx("th", { children: "Date" }), p.jsx("th", { children: "Merchant" }), p.jsx("th", { children: "Type" }), p.jsx("th", { children: "Amount" }), !r && p.jsx("th", { children: "Category" }), t && p.jsx("th", {})] }) }), p.jsx("tbody", { children: e12.map((n, i) => p.jsxs("tr", { children: [p.jsx("td", { style: { color: "var(--text-muted)", fontSize: "0.8125rem" }, children: mte(n.date) }), p.jsx("td", { style: { fontWeight: 500, color: "var(--text-primary)" }, children: n.merchant }), p.jsx("td", { children: p.jsx("span", { className: `badge ${n.type === "Credit" ? "badge-credit" : "badge-debit"}`, children: n.type }) }), p.jsxs("td", { style: { fontFamily: "var(--font-display)", fontWeight: 700, color: n.type === "Credit" ? "var(--accent-green)" : "var(--accent-red)" }, children: [n.type === "Credit" ? "+" : "-", hte(n.amount)] }), !r && p.jsx("td", { children: p.jsx("span", { style: { display: "inline-block", padding: "3px 10px", background: "var(--bg-elevated)", borderRadius: "99px", fontSize: "0.75rem", color: "var(--text-secondary)", border: "1px solid var(--border)" }, children: n.category }) }), t && p.jsx("td", { children: p.jsx("button", { onClick: () => t(n._id), style: { background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", padding: "4px", borderRadius: "6px" }, onMouseEnter: (a) => a.target.style.color = "var(--accent-red)", onMouseLeave: (a) => a.target.style.color = "var(--text-muted)", children: p.jsx(oP, { size: 14 }) }) })] }, n._id || i)) })] }) }) : p.jsxs("div", { style: { textAlign: "center", padding: "48px 0", color: "var(--text-muted)" }, children: [p.jsx("p", { style: { fontSize: "2rem", marginBottom: 8 }, children: "\u{1F4ED}" }), p.jsx("p", { children: "No transactions found" })] });
}
const wn = (e12) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(e12), bn = ["#4f8ef7", "#7c6af7", "#22d3a5", "#f7b84f", "#f75f5f", "#f780b0", "#56cfe1"], Mp = ({ active: e12, payload: t, label: r }) => e12 && t && t.length ? p.jsxs("div", { style: { background: "var(--bg-elevated)", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 14px" }, children: [p.jsx("p", { style: { fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: 6 }, children: r }), t.map((n, i) => p.jsxs("p", { style: { fontSize: "0.875rem", color: n.color, fontWeight: 600 }, children: [n.name, ": ", wn(n.value)] }, i))] }) : null;
function yte() {
  const [e12, t] = A.useState(null), [r, n] = A.useState(true), [i, a] = A.useState(false), [o, s] = A.useState(""), [l, u] = A.useState([]), [f, c] = A.useState([]), [d, h] = A.useState(0), [y, v] = A.useState(false), [m, g] = A.useState(null), [b, x] = A.useState(false), [O, w] = A.useState(""), [S, j] = A.useState([{ role: "assistant", text: "Ask me about your spending, merchants, categories, or savings trend." }]), [P, k] = A.useState(false), T = Gn(), C = A.useCallback(async () => {
    n(true);
    try {
      const { data: K } = await Ne.get("/summary/dashboard");
      t(K);
    } catch (K) {
      console.error(K);
    } finally {
      n(false);
    }
  }, []);
  A.useEffect(() => {
    C();
  }, [C]);
  const $ = A.useCallback(async () => {
    try {
      const [K, _] = await Promise.all([Ne.get("/ai/insights"), Ne.get("/ai/subscriptions")]);
      u(K.data.insights || []), c(_.data.subscriptions || []), h(_.data.totalMonthlyCost || 0);
    } catch (K) {
      console.error(K);
    }
  }, []);
  A.useEffect(() => {
    $();
  }, [$]);
  const L = (K = 0) => {
    const _ = /* @__PURE__ */ new Date(), H = new Date(_.getFullYear(), _.getMonth() + K, 1), Y = new Date(_.getFullYear(), _.getMonth() + K + 1, 0), M = (te) => te.toISOString().slice(0, 10);
    return { from: M(H), to: M(Y) };
  }, R = async () => {
    const K = !y;
    if (v(K), !K) {
      g(null);
      return;
    }
    try {
      const _ = L(0), H = L(-1), { data: Y } = await Ne.get("/summary", { params: { from: _.from, to: _.to, compareFrom: H.from, compareTo: H.to } });
      g(Y.comparison || null);
    } catch (_) {
      console.error(_), g(null);
    }
  }, D = async () => {
    const K = O.trim();
    if (!(!K || P)) {
      w(""), j((_) => [..._, { role: "user", text: K }]), k(true);
      try {
        const { data: _ } = await Ne.post("/ai/chat", { query: K });
        j((H) => [...H, { role: "assistant", text: _.answer || "I could not answer that yet." }]);
      } catch (_) {
        j((H) => {
          var Y, M;
          return [...H, { role: "assistant", text: ((M = (Y = _.response) == null ? void 0 : Y.data) == null ? void 0 : M.message) || "The AI chat is unavailable right now." }];
        });
      } finally {
        k(false);
      }
    }
  }, B = async () => {
    var K, _;
    a(true), s("");
    try {
      const { data: H } = await Ne.post("/summary/save");
      H != null && H.summaryId ? s("Snapshot saved to history and database successfully.") : s("Snapshot request completed, but save could not be verified."), await C(), await $(), setTimeout(() => s(""), 3e3);
    } catch (H) {
      s(((_ = (K = H.response) == null ? void 0 : K.data) == null ? void 0 : _.message) || "Failed to save snapshot");
    } finally {
      a(false);
    }
  };
  if (r) return p.jsx("div", { className: "page-wrapper", children: p.jsx("div", { className: "loader-page", children: p.jsx("div", { className: "loader" }) }) });
  if (!e12) return null;
  const { totalIncome: W, totalExpense: N, categoryBreakdown: F = {}, totalCount: U, latestTransactions: X = [], chartData: V = [] } = e12, Q = Object.entries(F).sort((K, _) => _[1] - K[1]), oe = Q.map(([K, _]) => ({ name: K, value: _ })), fe = V.slice(-14).map((K) => ({ date: new Date(K.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short" }), ...K })), we = [...new Set(V.flatMap((K) => Object.keys(K).filter((_) => _ !== "date")))], Ke = m ? [{ name: "Income", Current: m.current.income, Previous: m.previous.income }, { name: "Expense", Current: m.current.expense, Previous: m.previous.expense }] : [];
  return p.jsxs("div", { className: "page-wrapper fade-in", children: [p.jsxs("div", { className: "flex items-center justify-between mb-6", children: [p.jsxs("div", { children: [p.jsx("h1", { className: "page-title", children: "Dashboard" }), p.jsx("p", { className: "page-subtitle", children: "Your financial overview at a glance" })] }), p.jsxs("div", { className: "flex gap-2", children: [p.jsxs("button", { className: "btn btn-secondary btn-sm", onClick: C, children: [p.jsx(jN, { size: 14 }), " Refresh"] }), p.jsx("button", { className: `btn ${y ? "btn-primary" : "btn-secondary"} btn-sm`, onClick: R, children: "Compare with last month" }), p.jsxs("button", { className: "btn btn-primary btn-sm", onClick: B, disabled: i || !U, children: [p.jsx(PN, { size: 14 }), " ", i ? "Saving..." : "Save Snapshot"] })] })] }), o && p.jsx("div", { className: `alert ${o.toLowerCase().includes("saved") ? "alert-success" : "alert-error"}`, children: o }), U === 0 ? p.jsxs("div", { className: "empty-state", children: [p.jsx("p", { style: { fontSize: "3rem", marginBottom: 12 }, children: "No data" }), p.jsx("h2", { style: { fontFamily: "var(--font-display)", marginBottom: 8 }, children: "No data yet" }), p.jsx("p", { style: { color: "var(--text-secondary)", marginBottom: 20 }, children: "Upload a PDF statement to start tracking your expenses" }), p.jsx("button", { className: "btn btn-primary", onClick: () => T("/upload"), children: "Upload PDF" })] }) : p.jsxs(p.Fragment, { children: [p.jsxs("div", { className: "grid-4 mb-6", children: [p.jsx(gi, { title: "Total Income", value: wn(W), subtitle: "All credit transactions", icon: mo, color: "green" }), p.jsx(gi, { title: "Total Expenses", value: wn(N), subtitle: "All debit transactions", icon: sP, color: "red" }), p.jsx(gi, { title: "Net Balance", value: wn(W - N), subtitle: "Income minus expenses", icon: Zj, color: W - N >= 0 ? "green" : "red" }), p.jsx(gi, { title: "Total Transactions", value: U.toString(), subtitle: "All time transactions", icon: yN, color: "blue" })] }), p.jsxs("div", { className: "card mb-6", children: [p.jsxs("div", { className: "ai-insights-header", children: [p.jsxs("div", { children: [p.jsx("p", { className: "ai-eyebrow", children: "AI financial analyst" }), p.jsx("h3", { children: "AI Insights" })] }), p.jsxs("span", { children: [l.length || 0, " signals"] })] }), l.length > 0 ? p.jsx("div", { className: "ai-insights-grid", children: l.map((K, _) => p.jsxs("div", { className: `ai-insight-tile tone-${_ % 4}`, children: [p.jsx("div", { className: "ai-insight-rank", children: String(_ + 1).padStart(2, "0") }), p.jsx("p", { children: typeof K == "string" ? K : K.message })] }, _)) }) : p.jsx("p", { style: { color: "var(--text-muted)", fontSize: "0.875rem" }, children: "Upload and save more transactions to generate personalized AI insights." })] }), y && m && p.jsxs("div", { className: "grid-2 mb-6", children: [p.jsxs("div", { className: "card", children: [p.jsx("h3", { style: { fontFamily: "var(--font-display)", fontSize: "1rem", marginBottom: 16 }, children: "Month Comparison" }), p.jsx(sa, { width: "100%", height: 220, children: p.jsxs(cy, { data: Ke, children: [p.jsx(Oa, { strokeDasharray: "3 3", stroke: "rgba(255,255,255,0.05)", vertical: false }), p.jsx(en, { dataKey: "name", tick: { fill: "var(--text-muted)", fontSize: 11 }, axisLine: false, tickLine: false }), p.jsx(tn, { tick: { fill: "var(--text-muted)", fontSize: 11 }, axisLine: false, tickLine: false, tickFormatter: (K) => `INR ${(K / 1e3).toFixed(0)}k` }), p.jsx(bt, { content: p.jsx(Mp, {}) }), p.jsx(Qr, { wrapperStyle: { fontSize: "0.75rem", color: "var(--text-secondary)" } }), p.jsx(Mr, { dataKey: "Previous", fill: "#56cfe1", radius: [6, 6, 0, 0] }), p.jsx(Mr, { dataKey: "Current", fill: "#f7b84f", radius: [6, 6, 0, 0] })] }) })] }), p.jsxs("div", { className: "card", children: [p.jsx("h3", { style: { fontFamily: "var(--font-display)", fontSize: "1rem", marginBottom: 16 }, children: "Category Differences" }), p.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 10, maxHeight: 220, overflowY: "auto" }, children: m.categories.slice(0, 8).map((K) => p.jsxs("div", { className: "flex items-center justify-between gap-2", children: [p.jsx("span", { style: { color: "var(--text-secondary)", fontSize: "0.875rem" }, children: K.category }), p.jsxs("span", { style: { color: K.difference > 0 ? "var(--accent-red)" : "var(--accent-green)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.875rem", whiteSpace: "nowrap" }, children: [K.difference >= 0 ? "+" : "", wn(K.difference), " (", K.percentChange, "%)"] })] }, K.category)) })] })] }), p.jsxs("div", { className: "card mb-6", children: [p.jsxs("div", { className: "flex items-center justify-between mb-4", children: [p.jsx("h3", { style: { fontFamily: "var(--font-display)", fontSize: "1rem" }, children: "Monthly Subscriptions" }), p.jsxs("span", { className: "badge badge-debit", children: [p.jsx(aP, { size: 12 }), " ", wn(d), " / month"] })] }), f.length > 0 ? p.jsx("div", { style: { overflowX: "auto" }, children: p.jsxs("table", { className: "data-table", children: [p.jsx("thead", { children: p.jsxs("tr", { children: [p.jsx("th", { children: "Merchant" }), p.jsx("th", { children: "Category" }), p.jsx("th", { children: "Monthly Cost" }), p.jsx("th", { children: "Detected Since" }), p.jsx("th", { children: "Payments" })] }) }), p.jsx("tbody", { children: f.map((K) => p.jsxs("tr", { children: [p.jsx("td", { style: { color: "var(--text-primary)", fontWeight: 600 }, children: K.merchant }), p.jsx("td", { children: K.category }), p.jsx("td", { style: { color: "var(--accent-red)", fontFamily: "var(--font-display)", fontWeight: 700 }, children: wn(K.monthlyCost) }), p.jsx("td", { children: new Date(K.firstDate).toLocaleDateString("en-IN", { month: "short", year: "numeric" }) }), p.jsx("td", { children: K.transactionCount })] }, `${K.merchant}-${K.firstDate}`)) })] }) }) : p.jsx("p", { style: { color: "var(--text-muted)", fontSize: "0.875rem" }, children: "No recurring monthly payments detected yet. Add at least two similar debit transactions from the same merchant across nearby months." })] }), p.jsxs("div", { className: "grid-2 mb-6", children: [p.jsxs("div", { className: "card", children: [p.jsx("h3", { style: { fontFamily: "var(--font-display)", fontSize: "1rem", marginBottom: 20 }, children: "Spending Trend" }), p.jsx(sa, { width: "100%", height: 220, children: p.jsxs(Y2, { data: fe, children: [p.jsx("defs", { children: we.slice(0, 3).map((K, _) => p.jsxs("linearGradient", { id: `grad-${_}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [p.jsx("stop", { offset: "5%", stopColor: bn[_], stopOpacity: 0.3 }), p.jsx("stop", { offset: "95%", stopColor: bn[_], stopOpacity: 0 })] }, K)) }), p.jsx(Oa, { strokeDasharray: "3 3", stroke: "rgba(255,255,255,0.05)" }), p.jsx(en, { dataKey: "date", tick: { fill: "var(--text-muted)", fontSize: 11 }, axisLine: false, tickLine: false }), p.jsx(tn, { tick: { fill: "var(--text-muted)", fontSize: 11 }, axisLine: false, tickLine: false, tickFormatter: (K) => `INR ${(K / 1e3).toFixed(0)}k` }), p.jsx(bt, { content: p.jsx(Mp, {}) }), p.jsx(Qr, { wrapperStyle: { fontSize: "0.75rem", color: "var(--text-secondary)" } }), we.slice(0, 4).map((K, _) => p.jsx(vn, { type: "monotone", dataKey: K, name: K, stroke: bn[_ % bn.length], fill: `url(#grad-${_})`, strokeWidth: 2 }, K))] }) })] }), p.jsxs("div", { className: "card", children: [p.jsx("h3", { style: { fontFamily: "var(--font-display)", fontSize: "1rem", marginBottom: 20 }, children: "Category Breakdown" }), oe.length > 0 ? p.jsx(sa, { width: "100%", height: 220, children: p.jsxs(pte, { children: [p.jsx(yn, { data: oe, cx: "50%", cy: "50%", innerRadius: 55, outerRadius: 90, paddingAngle: 3, dataKey: "value", children: oe.map((K, _) => p.jsx(La, { fill: bn[_ % bn.length] }, _)) }), p.jsx(bt, { formatter: (K) => wn(K), contentStyle: { background: "var(--bg-elevated)", border: "1px solid var(--border)", borderRadius: 10, fontSize: "0.8rem" } }), p.jsx(Qr, { wrapperStyle: { fontSize: "0.75rem", color: "var(--text-secondary)" } })] }) }) : p.jsx("p", { style: { color: "var(--text-muted)", textAlign: "center", padding: "60px 0" }, children: "No expense data yet" })] })] }), p.jsxs("div", { className: "card mb-6", children: [p.jsx("h3", { style: { fontFamily: "var(--font-display)", fontSize: "1rem", marginBottom: 20 }, children: "Category-wise Expenditure" }), p.jsx(sa, { width: "100%", height: 240, children: p.jsxs(cy, { data: Q.map(([K, _]) => ({ name: K, value: _ })), margin: { top: 0, right: 0, left: 0, bottom: 0 }, children: [p.jsx(Oa, { strokeDasharray: "3 3", stroke: "rgba(255,255,255,0.05)", vertical: false }), p.jsx(en, { dataKey: "name", tick: { fill: "var(--text-muted)", fontSize: 11 }, axisLine: false, tickLine: false }), p.jsx(tn, { tick: { fill: "var(--text-muted)", fontSize: 11 }, axisLine: false, tickLine: false, tickFormatter: (K) => `INR ${(K / 1e3).toFixed(0)}k` }), p.jsx(bt, { content: p.jsx(Mp, {}) }), p.jsx(Mr, { dataKey: "value", name: "Amount", radius: [6, 6, 0, 0], children: Q.map((K, _) => p.jsx(La, { fill: bn[_ % bn.length] }, _)) })] }) })] }), p.jsxs("div", { className: "card", children: [p.jsxs("div", { className: "flex items-center justify-between mb-4", children: [p.jsx("h3", { style: { fontFamily: "var(--font-display)", fontSize: "1rem" }, children: "Latest Transactions" }), p.jsx("button", { className: "btn btn-secondary btn-sm", onClick: () => T("/transactions"), children: "View All" })] }), p.jsx(bs, { transactions: X })] })] }), p.jsxs("button", { className: "ai-chat-fab", onClick: () => x((K) => !K), "aria-label": "Open AI chat", children: [b ? p.jsx(ds, { size: 20 }) : p.jsx(eP, { size: 20 }), p.jsx("span", { children: b ? "Close chat" : "Ask AI" })] }), b && p.jsxs("div", { className: "ai-chat-panel", children: [p.jsxs("div", { className: "ai-chat-header", children: [p.jsxs("div", { children: [p.jsx("h3", { children: "Ask Finsight" }), p.jsx("p", { children: "Questions about your spending" })] }), p.jsx("button", { onClick: () => x(false), "aria-label": "Close chat", children: p.jsx(ds, { size: 16 }) })] }), p.jsxs("div", { className: "ai-chat-messages", children: [S.map((K, _) => p.jsx("div", { className: `ai-chat-bubble ${K.role}`, children: K.text }, _)), P && p.jsx("div", { className: "ai-chat-bubble assistant", children: "Thinking..." })] }), p.jsxs("div", { className: "ai-chat-input", children: [p.jsx("input", { className: "form-input", value: O, onChange: (K) => w(K.target.value), onKeyDown: (K) => K.key === "Enter" && D(), placeholder: "How much did I spend on food last month?" }), p.jsx("button", { className: "btn btn-primary btn-sm", onClick: D, disabled: !O.trim() || P, children: p.jsx(AN, { size: 14 }) })] })] }), p.jsx("style", { children: `
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 0;
          text-align: center;
        }
        .ai-insights-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border);
        }
        .ai-insights-header h3 {
          font-family: var(--font-display);
          font-size: 1.2rem;
        }
        .ai-eyebrow {
          color: var(--accent-green);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .ai-insights-header span {
          color: var(--text-muted);
          border: 1px solid var(--border);
          background: var(--bg-elevated);
          border-radius: var(--radius-sm);
          padding: 5px 10px;
          font-size: 0.75rem;
          font-weight: 700;
          white-space: nowrap;
        }
        .ai-insights-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }
        .ai-insight-tile {
          position: relative;
          min-height: 132px;
          padding: 16px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          background: var(--bg-elevated);
          overflow: hidden;
        }
        .ai-insight-tile:nth-child(1),
        .ai-insight-tile:nth-child(2) {
          grid-column: span 3;
        }
        .ai-insight-tile:nth-child(n+3) {
          grid-column: span 2;
        }
        .ai-insight-tile::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: var(--accent-primary);
        }
        .ai-insight-tile.tone-1::before { background: var(--accent-green); }
        .ai-insight-tile.tone-2::before { background: var(--accent-amber); }
        .ai-insight-tile.tone-3::before { background: var(--accent-red); }
        .ai-insight-rank {
          color: var(--text-muted);
          font-family: var(--font-display);
          font-size: 0.78rem;
          font-weight: 800;
          margin-bottom: 12px;
        }
        .ai-insight-tile p {
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.55;
        }
        @media (max-width: 900px) {
          .ai-insights-grid {
            grid-template-columns: 1fr;
          }
          .ai-insight-tile:nth-child(n) {
            grid-column: auto;
          }
        }
        .ai-chat-fab {
          position: fixed;
          right: 26px;
          bottom: 26px;
          min-width: 104px;
          height: 50px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-strong);
          background: var(--accent-primary);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0 16px;
          font-family: var(--font-body);
          font-weight: 700;
          cursor: pointer;
          box-shadow: var(--shadow-card);
          z-index: 20;
        }
        .ai-chat-panel {
          position: fixed;
          right: 26px;
          bottom: 88px;
          width: min(380px, calc(100vw - 32px));
          height: 480px;
          background: var(--bg-card);
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 20;
        }
        .ai-chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border-bottom: 1px solid var(--border);
          background: var(--bg-elevated);
        }
        .ai-chat-header h3 { font-size: 1rem; }
        .ai-chat-header p { font-size: 0.75rem; color: var(--text-muted); }
        .ai-chat-header button {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 4px;
        }
        .ai-chat-messages {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 14px;
        }
        .ai-chat-bubble {
          max-width: 86%;
          padding: 10px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.875rem;
          line-height: 1.45;
          white-space: pre-line;
        }
        .ai-chat-bubble.assistant {
          align-self: flex-start;
          background: var(--bg-elevated);
          color: var(--text-secondary);
          border: 1px solid var(--border);
        }
        .ai-chat-bubble.user {
          align-self: flex-end;
          background: var(--accent-primary);
          color: #fff;
        }
        .ai-chat-input {
          display: flex;
          gap: 8px;
          padding: 12px;
          border-top: 1px solid var(--border);
          background: var(--bg-elevated);
        }
      ` })] });
}
const Ip = (e12) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(e12), nS = (e12) => new Date(e12).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }), Gi = ["Food", "Shopping", "Groceries", "Medical", "Travel", "Bills", "Education", "Entertainment", "Transport", "Investment", "Others"];
function vte({ value: e12, onChange: t, index: r, applyToSameBelow: n }) {
  const [i, a] = A.useState(false);
  A.useEffect(() => {
    e12 && !Gi.includes(e12) ? a(true) : a(false);
  }, [e12]);
  const o = e12 ? Gi.includes(e12) ? e12 : "Others" : "", s = (l) => {
    const u = l.target.value;
    if (u === "Others") {
      a(true), (!e12 || Gi.includes(e12)) && t(r, "", n);
      return;
    }
    a(false), t(r, u, n);
  };
  return p.jsxs("div", { children: [p.jsxs("select", { id: `cat-select-${r}`, className: "form-input", value: o, onChange: s, style: { padding: "7px 10px", fontSize: "0.8125rem", cursor: "pointer", minWidth: 170 }, children: [p.jsx("option", { value: "", disabled: true, children: "-- Select category --" }), Gi.map((l) => p.jsx("option", { value: l, children: l }, l))] }), i && p.jsx("input", { id: `cat-${r}`, type: "text", className: "form-input", placeholder: "Enter custom category", value: Gi.includes(e12) ? "" : e12, onChange: (l) => t(r, l.target.value, n), style: { marginTop: 8, padding: "7px 10px", fontSize: "0.8125rem" } })] });
}
function gte() {
  const [e12, t] = A.useState(null), [r, n] = A.useState([]), [i, a] = A.useState(false), [o, s] = A.useState(false), [l, u] = A.useState(""), [f, c] = A.useState(""), [d, h] = A.useState(false), [y, v] = A.useState(false), [m, g] = A.useState(""), [b, x] = A.useState(false), [O, w] = A.useState(false), [S, j] = A.useState(null), [P, k] = A.useState(""), [T, C] = A.useState({}), $ = A.useRef(), L = Gn(), R = (_) => {
    if (_) {
      if (_.type !== "application/pdf") {
        u("Please upload a PDF file only");
        return;
      }
      t(_), u(""), n([]), j(null), k(""), C({});
    }
  }, D = (_) => {
    _.preventDefault(), h(false), R(_.dataTransfer.files[0]);
  }, B = async () => {
    var _, H, Y, M;
    if (e12) {
      a(true), u(""), c("");
      try {
        const te = new FormData();
        te.append("pdf", e12);
        const { data: re } = await Ne.post("/upload", te, { headers: { "Content-Type": "multipart/form-data" } }), ue = re.transactions.map((ye) => ({ ...ye, category: "" }));
        if (j({ uploadedAt: re.uploadedAt, skippedExisting: re.skippedExisting || 0, skippedDuplicateInUpload: re.skippedDuplicateInUpload || 0 }), !ue.length) {
          n([]), c(re.skippedExisting > 0 ? `No new transactions found. ${re.skippedExisting} already-uploaded transactions were skipped.` : "No new transactions found in this PDF.");
          return;
        }
        n(ue), C({}), N(ue);
      } catch (te) {
        const re = ((H = (_ = te.response) == null ? void 0 : _.data) == null ? void 0 : H.message) || "Failed to parse PDF", ue = (M = (Y = te.response) == null ? void 0 : Y.data) == null ? void 0 : M.usePasteMethod;
        u(re), ue && v(true);
      } finally {
        a(false);
      }
    }
  }, W = async () => {
    var _, H;
    if (m.trim()) {
      x(true), u(""), c("");
      try {
        const { data: Y } = await Ne.post("/upload/text", { text: m }), M = Y.transactions.map((te) => ({ ...te, category: "" }));
        if (j({ uploadedAt: Y.uploadedAt, skippedExisting: Y.skippedExisting || 0, skippedDuplicateInUpload: Y.skippedDuplicateInUpload || 0 }), !M.length) {
          n([]), c(Y.skippedExisting > 0 ? `No new transactions found. ${Y.skippedExisting} already-uploaded transactions were skipped.` : "No new transactions found in the pasted text."), v(false);
          return;
        }
        n(M), C({}), v(false), N(M);
      } catch (Y) {
        u(((H = (_ = Y.response) == null ? void 0 : _.data) == null ? void 0 : H.message) || "Failed to parse pasted text");
      } finally {
        x(false);
      }
    }
  }, N = async (_) => {
    if (!_.length) return;
    w(true);
    const H = /* @__PURE__ */ new Map();
    try {
      const Y = await Promise.all(_.map(async (M) => {
        const te = `${(M.merchant || "").trim().toLowerCase()}|${M.type || ""}`;
        if (H.has(te)) return { ...M, category: H.get(te) };
        try {
          const { data: re } = await Ne.post("/ai/categorize", { merchant: M.merchant, description: `${M.type || ""} transaction at ${M.merchant || ""}`, amount: M.amount }), ue = Gi.includes(re.category) ? re.category : "Others";
          return H.set(te, ue), { ...M, category: ue };
        } catch {
          return H.set(te, "Others"), { ...M, category: "Others" };
        }
      }));
      n((M) => M.map((te, re) => {
        var ue, ye;
        return (ue = te.category) != null && ue.trim() ? te : { ...te, category: ((ye = Y[re]) == null ? void 0 : ye.category) || "Others" };
      }));
    } finally {
      w(false);
    }
  }, F = (_, H, Y = false) => {
    n((M) => {
      const te = M[_];
      if (!te) return M;
      const re = (te.merchant || "").trim().toLowerCase();
      return M.map((ue, ye) => ye === _ ? { ...ue, category: H } : !Y || ye < _ ? ue : (ue.merchant || "").trim().toLowerCase() === re ? { ...ue, category: H } : ue);
    });
  }, U = (_) => {
    n((H) => H.filter((Y, M) => M !== _)), C((H) => Object.fromEntries(Object.entries(H).filter(([Y]) => Number(Y) !== _).map(([Y, M]) => {
      const te = Number(Y);
      return [te > _ ? te - 1 : te, M];
    })));
  }, X = (_) => {
    var M, te;
    const H = !T[_];
    C((re) => ({ ...re, [_]: H }));
    const Y = (te = (M = r[_]) == null ? void 0 : M.category) == null ? void 0 : te.trim();
    H && Y && F(_, Y, true);
  }, V = async () => {
    var H, Y;
    const _ = r.findIndex((M) => !M.category.trim());
    if (_ !== -1) {
      u(`Please fill in the category for row ${_ + 1}`);
      const M = document.getElementById(`cat-${_}`) || document.getElementById(`cat-select-${_}`);
      M && (M.focus(), M.style.borderColor = "var(--accent-red)");
      return;
    }
    s(true), u("");
    try {
      const M = Number(String(P).replace(/,/g, "")), te = P !== "" && Number.isFinite(M) && M >= 0, re = r.filter((vt) => vt.type === "Debit").reduce((vt, ur) => vt + (Number(ur.amount) || 0), 0), ue = r.filter((vt) => vt.type === "Credit").reduce((vt, ur) => vt + (Number(ur.amount) || 0), 0), ye = te ? Math.max(0, M + re - ue) : 0, at = ye > 0 ? [...r, { date: (S == null ? void 0 : S.uploadedAt) || (/* @__PURE__ */ new Date()).toISOString(), merchant: "Current Net Balance", type: "Credit", amount: ye, category: "Investment" }] : r, { data: lr } = await Ne.post("/transactions", { transactions: at }), Br = lr.count ?? r.length, Zn = lr.skipped ?? 0;
      c(Zn > 0 ? `${Br} new transactions saved. ${Zn} duplicate transactions skipped.` : `${Br} transactions saved successfully!`), n([]), C({}), j(null), k(""), t(null), setTimeout(() => L("/dashboard"), 1800);
    } catch (M) {
      u(((Y = (H = M.response) == null ? void 0 : H.data) == null ? void 0 : Y.message) || "Failed to save transactions");
    } finally {
      s(false);
    }
  }, Q = r.filter((_) => _.category.trim() !== "").length, oe = r.length > 0 && Q === r.length, fe = Number(String(P).replace(/,/g, "")), we = r.filter((_) => _.type === "Debit").reduce((_, H) => _ + (Number(H.amount) || 0), 0), Ke = r.filter((_) => _.type === "Credit").reduce((_, H) => _ + (Number(H.amount) || 0), 0), K = P !== "" && Number.isFinite(fe) && fe >= 0 ? Math.max(0, fe + we - Ke) : 0;
  return p.jsxs("div", { className: "page-wrapper fade-in", children: [p.jsx("h1", { className: "page-title", children: "Upload Statement" }), p.jsx("p", { className: "page-subtitle", children: "Upload your PhonePe or bank PDF statement to extract transactions" }), l && p.jsxs("div", { className: "alert alert-error", style: { display: "flex", alignItems: "flex-start", gap: 8 }, children: [p.jsx(fN, { size: 15, style: { flexShrink: 0, marginTop: 2 } }), p.jsx("span", { children: l })] }), f && p.jsxs("div", { className: "alert alert-success", style: { display: "flex", alignItems: "center", gap: 8 }, children: [p.jsx($u, { size: 15 }), " ", f] }), y && r.length === 0 && p.jsxs("div", { className: "card mb-6", style: { borderColor: "rgba(247,184,79,0.3)", background: "rgba(247,184,79,0.05)" }, children: [p.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [p.jsx(ab, { size: 18, color: "var(--accent-amber)" }), p.jsx("h3", { style: { fontFamily: "var(--font-display)", fontSize: "0.95rem", color: "var(--accent-amber)" }, children: "Use Paste Text Method" })] }), p.jsx("p", { style: { fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: 14 }, children: "This PhonePe PDF uses an encrypted font that can't be decoded automatically. Instead:" }), p.jsxs("ol", { style: { fontSize: "0.875rem", color: "var(--text-secondary)", paddingLeft: 18, marginBottom: 16, lineHeight: 2 }, children: [p.jsx("li", { children: "Open the PDF in your browser or PDF viewer" }), p.jsxs("li", { children: ["Press ", p.jsx("strong", { children: "Ctrl+A" }), " (select all text)"] }), p.jsxs("li", { children: ["Press ", p.jsx("strong", { children: "Ctrl+C" }), " (copy)"] }), p.jsx("li", { children: "Paste it in the box below and click Parse" })] }), p.jsx("textarea", { className: "form-input", rows: 8, placeholder: "Paste the copied PDF text here...", value: m, onChange: (_) => g(_.target.value), style: { fontFamily: "monospace", fontSize: "0.8rem", resize: "vertical" } }), p.jsxs("div", { style: { display: "flex", gap: 10, marginTop: 12 }, children: [p.jsx("button", { className: "btn btn-primary", onClick: W, disabled: !m.trim() || b, children: b ? p.jsxs(p.Fragment, { children: [p.jsx("span", { className: "loader", style: { width: 14, height: 14 } }), " Parsing\uFFFD"] }) : p.jsxs(p.Fragment, { children: [p.jsx(Cu, { size: 14 }), " Parse Text"] }) }), p.jsx("button", { className: "btn btn-secondary", onClick: () => v(false), children: "Cancel" })] })] }), r.length === 0 && !y && p.jsxs(p.Fragment, { children: [p.jsxs("div", { className: `drop-zone card ${d ? "drag-over" : ""} ${e12 ? "has-file" : ""}`, onDragOver: (_) => {
    _.preventDefault(), h(true);
  }, onDragLeave: () => h(false), onDrop: D, onClick: () => !e12 && $.current.click(), children: [p.jsx("input", { ref: $, type: "file", accept: "application/pdf", style: { display: "none" }, onChange: (_) => R(_.target.files[0]) }), e12 ? p.jsxs("div", { className: "file-selected", children: [p.jsx(Cu, { size: 36, color: "var(--accent-primary)" }), p.jsxs("div", { children: [p.jsx("p", { style: { fontWeight: 600, color: "var(--text-primary)" }, children: e12.name }), p.jsxs("p", { style: { fontSize: "0.8rem", color: "var(--text-muted)" }, children: [(e12.size / 1024).toFixed(1), " KB"] })] }), p.jsxs("button", { className: "btn btn-secondary btn-sm", onClick: (_) => {
    _.stopPropagation(), t(null);
  }, children: [p.jsx(ds, { size: 13 }), " Remove"] })] }) : p.jsxs("div", { className: "drop-content", children: [p.jsx("div", { className: "drop-icon", children: p.jsx(mv, { size: 28, color: "var(--accent-primary)" }) }), p.jsx("p", { style: { fontWeight: 600, fontSize: "1rem", marginBottom: 6 }, children: "Drop your PDF here" }), p.jsxs("p", { style: { color: "var(--text-secondary)", fontSize: "0.875rem" }, children: ["or ", p.jsx("span", { style: { color: "var(--accent-primary)", cursor: "pointer" }, children: "browse files" })] }), p.jsx("p", { style: { color: "var(--text-muted)", fontSize: "0.78rem", marginTop: 8 }, children: "PhonePe \uFFFD HDFC \uFFFD ICICI \uFFFD SBI \uFFFD Axis statements" })] })] }), p.jsxs("div", { style: { display: "flex", gap: 12, justifyContent: "center", marginTop: 20, flexWrap: "wrap" }, children: [e12 && p.jsx("button", { className: "btn btn-primary btn-lg", onClick: B, disabled: i, children: i ? p.jsxs(p.Fragment, { children: [p.jsx("span", { className: "loader", style: { width: 16, height: 16 } }), " Parsing PDF\uFFFD"] }) : p.jsxs(p.Fragment, { children: [p.jsx(Cu, { size: 16 }), " Extract Transactions"] }) }), p.jsxs("button", { className: "btn btn-secondary btn-lg", onClick: () => v(true), children: [p.jsx(ab, { size: 16 }), " Paste Text Instead"] })] })] }), r.length > 0 && p.jsxs("div", { className: "fade-in", children: [p.jsxs("div", { className: "flex items-center justify-between mb-4", children: [p.jsxs("div", { children: [p.jsx("h2", { style: { fontFamily: "var(--font-display)", fontSize: "1.15rem" }, children: "Review Transactions" }), p.jsxs("p", { style: { color: "var(--text-secondary)", fontSize: "0.8rem", marginTop: 2 }, children: [r.length, " transactions found \uFFFD AI fills categories first, and you can override any row"] })] }), p.jsxs("div", { className: "flex gap-2", children: [p.jsxs("button", { className: "btn btn-secondary btn-sm", onClick: () => {
    n([]), C({}), j(null), t(null);
  }, children: [p.jsx(ds, { size: 13 }), " Start Over"] }), p.jsxs("button", { className: "btn btn-primary btn-sm", onClick: V, disabled: !oe || o, children: [o ? p.jsx("span", { className: "loader", style: { width: 14, height: 14 } }) : p.jsx($u, { size: 14 }), o ? "Saving\uFFFD" : "Save All"] })] })] }), p.jsx("div", { style: { height: 4, background: "var(--bg-elevated)", borderRadius: 99, marginBottom: 8 }, children: p.jsx("div", { style: { height: "100%", borderRadius: 99, width: `${Q / r.length * 100}%`, background: "linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))", transition: "width 0.3s ease" } }) }), p.jsxs("p", { style: { fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: 16 }, children: [Q, " / ", r.length, " categorized", O && p.jsx("span", { style: { marginLeft: 10, color: "var(--accent-primary)" }, children: "AI categorizing..." })] }), S && p.jsxs("div", { className: "alert alert-info", style: { marginBottom: 16 }, children: ["Uploaded on ", nS(S.uploadedAt || /* @__PURE__ */ new Date()), ". Showing only distinct transactions from the PDF.", S.skippedExisting > 0 && ` ${S.skippedExisting} already-uploaded transactions skipped.`, S.skippedDuplicateInUpload > 0 && ` ${S.skippedDuplicateInUpload} duplicate rows inside this upload skipped.`] }), p.jsxs("div", { className: "card mb-4", children: [p.jsxs("div", { className: "flex items-center justify-between gap-4", style: { flexWrap: "wrap" }, children: [p.jsxs("div", { children: [p.jsx("h3", { style: { fontFamily: "var(--font-display)", fontSize: "1rem", marginBottom: 4 }, children: "Current Net Balance" }), p.jsx("p", { style: { color: "var(--text-secondary)", fontSize: "0.875rem" }, children: "Enter your current balance to add a balancing income entry with this upload." })] }), p.jsx("div", { style: { minWidth: 260 }, children: p.jsx("input", { className: "form-input", type: "number", min: "0", step: "0.01", placeholder: "Enter current net balance", value: P, onChange: (_) => k(_.target.value) }) })] }), K > 0 && p.jsxs("p", { style: { marginTop: 12, color: "var(--text-muted)", fontSize: "0.82rem" }, children: ["On save, Finsight will add ", Ip(K), " as income so this upload's net balance becomes ", Ip(fe), "."] })] }), p.jsx("div", { className: "card", style: { padding: 0, overflow: "hidden" }, children: p.jsx("div", { style: { overflowX: "auto" }, children: p.jsxs("table", { className: "data-table", children: [p.jsx("thead", { children: p.jsxs("tr", { children: [p.jsx("th", { children: "#" }), p.jsx("th", { children: "Transaction Date" }), p.jsx("th", { children: "Merchant" }), p.jsx("th", { children: "Type" }), p.jsx("th", { children: "Amount" }), p.jsxs("th", { children: ["Category ", p.jsx("span", { style: { color: "var(--accent-red)" }, children: "*" })] }), p.jsx("th", { className: "apply-same-heading", children: "Apply to same name" }), p.jsx("th", {})] }) }), p.jsx("tbody", { children: r.map((_, H) => p.jsxs("tr", { children: [p.jsx("td", { style: { color: "var(--text-muted)", width: 40 }, children: H + 1 }), p.jsx("td", { style: { color: "var(--text-muted)", fontSize: "0.8125rem", whiteSpace: "nowrap" }, children: nS(_.date) }), p.jsx("td", { style: { fontWeight: 500, color: "var(--text-primary)", maxWidth: 200 }, children: p.jsx("span", { style: { display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: _.merchant }) }), p.jsx("td", { children: p.jsx("span", { className: `badge ${_.type === "Credit" ? "badge-credit" : "badge-debit"}`, children: _.type }) }), p.jsxs("td", { style: { fontFamily: "var(--font-display)", fontWeight: 700, color: _.type === "Credit" ? "var(--accent-green)" : "var(--accent-red)", whiteSpace: "nowrap" }, children: [_.type === "Credit" ? "+" : "-", Ip(_.amount)] }), p.jsx("td", { style: { minWidth: 180 }, children: p.jsx(vte, { value: _.category, onChange: F, index: H, applyToSameBelow: !!T[H] }) }), p.jsx("td", { className: "apply-same-cell", children: p.jsx("label", { className: `apply-same-toggle ${T[H] ? "is-active" : ""}`, children: p.jsx("input", { type: "checkbox", checked: !!T[H], onChange: () => X(H), "aria-label": `Apply row ${H + 1} category to same merchant names below` }) }) }), p.jsx("td", { children: p.jsx("button", { onClick: () => U(H), style: { background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", padding: 4 }, title: "Remove", children: p.jsx(ds, { size: 14 }) }) })] }, H)) })] }) }) }), p.jsx("div", { style: { display: "flex", justifyContent: "flex-end", marginTop: 20 }, children: p.jsx("button", { className: "btn btn-primary btn-lg", onClick: V, disabled: !oe || o, children: o ? p.jsxs(p.Fragment, { children: [p.jsx("span", { className: "loader", style: { width: 16, height: 16 } }), " Saving\uFFFD"] }) : p.jsxs(p.Fragment, { children: [p.jsx($u, { size: 16 }), " Save ", r.length, " Transactions"] }) }) })] }), p.jsx("style", { children: `
        .drop-zone { border: 2px dashed var(--border-strong); cursor: pointer; transition: all 0.2s; text-align: center; }
        .drop-zone:hover:not(.has-file) { border-color: var(--accent-primary); background: rgba(79,142,247,0.04); }
        .drop-zone.drag-over { border-color: var(--accent-primary); background: rgba(79,142,247,0.08); transform: scale(1.01); }
        .drop-zone.has-file { cursor: default; }
        .drop-content { display: flex; flex-direction: column; align-items: center; padding: 48px 20px; }
        .drop-icon { width: 64px; height: 64px; border-radius: 20px; background: rgba(79,142,247,0.1); border: 1px solid rgba(79,142,247,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
        .file-selected { display: flex; align-items: center; gap: 16px; padding: 24px; flex-wrap: wrap; justify-content: center; }
        .apply-same-heading { min-width: 128px; text-align: center; white-space: nowrap; }
        .apply-same-cell { text-align: center; }
        .apply-same-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 28px;
          border: 1px solid var(--border-subtle);
          border-radius: 999px;
          background: var(--bg-elevated);
          color: var(--text-muted);
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .apply-same-toggle:hover {
          border-color: var(--accent-primary);
          color: var(--text-primary);
        }
        .apply-same-toggle input {
          width: 13px;
          height: 13px;
          margin: 0;
          accent-color: var(--accent-primary);
          cursor: pointer;
        }
        .apply-same-toggle.is-active {
          border-color: rgba(79,142,247,0.55);
          background: rgba(79,142,247,0.12);
          color: var(--accent-primary);
        }
      ` })] });
}
function bte() {
  const e12 = Gn(), [t, r] = A.useState([]), [n, i] = A.useState([]), [a, o] = A.useState(0), [s, l] = A.useState(true), [u, f] = A.useState(true), [c, d] = A.useState(1), [h, y] = A.useState(1), [v, m] = A.useState({ merchant: "", category: "", type: "", startDate: "", endDate: "" }), [g, b] = A.useState({}), [x, O] = A.useState(""), [w, S] = A.useState([]), [j, P] = A.useState(false), [k, T] = A.useState(false), [C, $] = A.useState(""), [L, R] = A.useState([]), [D, B] = A.useState(false), [W, N] = A.useState(false), [F, U] = A.useState([]), X = (_) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(_), V = A.useCallback(async () => {
    l(true);
    try {
      const _ = !!(g.merchant || g.category), H = new URLSearchParams(_ ? { all: "true" } : { page: c, limit: 20 });
      g.merchant && H.append("merchant", g.merchant), g.category && H.append("category", g.category), g.type && H.append("type", g.type), g.startDate && H.append("startDate", g.startDate), g.endDate && H.append("endDate", g.endDate);
      const { data: Y } = await Ne.get(`/transactions?${H}`);
      r(Y.transactions), o(Y.total), y(Y.pages);
    } catch (_) {
      console.error(_);
    } finally {
      l(false);
    }
  }, [c, g]);
  A.useEffect(() => {
    V();
  }, [V]);
  const Q = A.useCallback(async () => {
    f(true);
    try {
      const { data: _ } = await Ne.get("/summary/accounts");
      i(Array.isArray(_) ? _ : []);
    } catch (_) {
      console.error(_), i([]);
    } finally {
      f(false);
    }
  }, []);
  A.useEffect(() => {
    Q();
  }, [Q]), A.useEffect(() => {
    (async () => {
      try {
        const { data: H } = await Ne.get("/summary/dashboard");
        U(Object.keys(H.categoryBreakdown || {}).sort((Y, M) => Y.localeCompare(M)));
      } catch (H) {
        console.error(H), U([]);
      }
    })();
  }, []);
  const oe = async (_) => {
    if (confirm("Delete this transaction?")) try {
      await Ne.delete(`/transactions/${_}`), V(), Q();
    } catch {
      alert("Failed to delete transaction");
    }
  }, fe = () => {
    d(1), b({ ...v });
  }, we = () => {
    m({ merchant: "", category: "", type: "", startDate: "", endDate: "" }), b({}), d(1);
  }, Ke = async () => {
    if (x.trim()) {
      P(true), T(true);
      try {
        const { data: _ } = await Ne.get("/transactions", { params: { merchant: x.trim(), all: true } });
        S(_.transactions || []);
      } catch {
        S([]);
      } finally {
        P(false);
      }
    }
  }, K = async () => {
    if (C.trim()) {
      B(true), N(true);
      try {
        const { data: _ } = await Ne.get("/transactions", { params: { category: C.trim(), all: true } });
        R(_.transactions || []);
      } catch {
        R([]);
      } finally {
        B(false);
      }
    }
  };
  return p.jsxs("div", { className: "page-wrapper fade-in", children: [p.jsx("div", { className: "flex items-center justify-between mb-6", children: p.jsxs("div", { children: [p.jsx("h1", { className: "page-title", children: "Transactions" }), p.jsxs("p", { className: "page-subtitle", children: [a, " total transactions"] })] }) }), p.jsxs("div", { className: "mb-6", children: [p.jsx("h2", { className: "font-display mb-4", style: { fontSize: "1.1rem" }, children: "\u{1F465} People & Accounts" }), u ? p.jsx("div", { className: "card", children: p.jsx("div", { className: "loader-page", children: p.jsx("div", { className: "loader" }) }) }) : n.length === 0 ? p.jsx("div", { className: "card text-muted text-sm", children: "No account groups found yet." }) : p.jsx("div", { className: "grid-4", children: n.map((_) => p.jsxs("button", { type: "button", className: "card", onClick: () => e12(`/accounts/${encodeURIComponent(_.merchant)}`), style: { textAlign: "left", cursor: "pointer", background: "var(--bg-card)" }, children: [p.jsxs("div", { className: "flex items-center justify-between mb-4", children: [p.jsx("strong", { style: { color: "var(--text-primary)" }, children: _.merchant }), p.jsxs("span", { className: "badge", children: [_.transactionCount, " txns"] })] }), p.jsxs("div", { className: "flex gap-2", style: { flexWrap: "wrap" }, children: [p.jsxs("span", { className: "badge badge-credit", children: ["+", X(_.totalCredit), " received"] }), p.jsxs("span", { className: "badge badge-debit", children: ["-", X(_.totalDebit), " sent"] })] })] }, _.merchant)) })] }), p.jsx("div", { className: "card mb-6", style: { padding: "16px 20px" }, children: p.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, alignItems: "flex-end" }, children: [p.jsxs("div", { className: "form-group", style: { marginBottom: 0 }, children: [p.jsx("label", { className: "form-label", children: "Account Name" }), p.jsx("input", { type: "text", className: "form-input", placeholder: "e.g. Amma, Sanvi", value: v.merchant, onChange: (_) => m({ ...v, merchant: _.target.value }) })] }), p.jsxs("div", { className: "form-group", style: { marginBottom: 0 }, children: [p.jsx("label", { className: "form-label", children: "Category" }), p.jsx("input", { type: "text", className: "form-input", placeholder: "e.g. Food", value: v.category, onChange: (_) => m({ ...v, category: _.target.value }) })] }), p.jsxs("div", { className: "form-group", style: { marginBottom: 0 }, children: [p.jsx("label", { className: "form-label", children: "Type" }), p.jsxs("select", { className: "form-select", value: v.type, onChange: (_) => m({ ...v, type: _.target.value }), children: [p.jsx("option", { value: "", children: "All" }), p.jsx("option", { value: "Credit", children: "Credit" }), p.jsx("option", { value: "Debit", children: "Debit" })] })] }), p.jsxs("div", { className: "form-group", style: { marginBottom: 0 }, children: [p.jsx("label", { className: "form-label", children: "From" }), p.jsx("input", { type: "date", className: "form-input", value: v.startDate, onChange: (_) => m({ ...v, startDate: _.target.value }) })] }), p.jsxs("div", { className: "form-group", style: { marginBottom: 0 }, children: [p.jsx("label", { className: "form-label", children: "To" }), p.jsx("input", { type: "date", className: "form-input", value: v.endDate, onChange: (_) => m({ ...v, endDate: _.target.value }) })] }), p.jsxs("div", { style: { display: "flex", gap: 8 }, children: [p.jsxs("button", { className: "btn btn-primary btn-sm", onClick: fe, children: [p.jsx(Nu, { size: 13 }), " Apply"] }), p.jsx("button", { className: "btn btn-secondary btn-sm", onClick: we, children: "Clear" })] })] }) }), p.jsx("div", { className: "card", style: { padding: 0, overflow: "hidden" }, children: s ? p.jsx("div", { className: "loader-page", children: p.jsx("div", { className: "loader" }) }) : p.jsx(bs, { transactions: t, onDelete: oe }) }), h > 1 && !g.merchant && !g.category && p.jsxs("div", { style: { display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginTop: 20 }, children: [p.jsx("button", { className: "btn btn-secondary btn-sm", onClick: () => d((_) => Math.max(1, _ - 1)), disabled: c === 1, children: "\u2190 Prev" }), p.jsxs("span", { style: { color: "var(--text-secondary)", fontSize: "0.875rem" }, children: ["Page ", c, " of ", h] }), p.jsx("button", { className: "btn btn-secondary btn-sm", onClick: () => d((_) => Math.min(h, _ + 1)), disabled: c === h, children: "Next \u2192" })] }), p.jsxs("div", { className: "grid-2 mt-4", children: [p.jsxs("div", { className: "card", children: [p.jsx("h3", { style: { fontFamily: "var(--font-display)", fontSize: "1rem", marginBottom: 12 }, children: "Search By Account Name" }), p.jsxs("div", { className: "flex gap-2 mb-4", children: [p.jsx("input", { className: "form-input", placeholder: "Enter account / merchant name", value: x, onChange: (_) => O(_.target.value), onKeyDown: (_) => _.key === "Enter" && Ke() }), p.jsxs("button", { className: "btn btn-primary btn-sm", onClick: Ke, disabled: j || !x.trim(), children: [p.jsx(Nu, { size: 14 }), " ", j ? "Searching..." : "Search"] })] }), j ? p.jsx("div", { className: "loader-page", children: p.jsx("div", { className: "loader" }) }) : k ? p.jsx(bs, { transactions: w }) : p.jsx("p", { className: "text-muted text-sm", children: "Search to view complete payment history for an account." })] }), p.jsxs("div", { className: "card", children: [p.jsx("h3", { style: { fontFamily: "var(--font-display)", fontSize: "1rem", marginBottom: 12 }, children: "Search By Final Category" }), p.jsxs("div", { className: "flex gap-2 mb-4", children: [p.jsxs("select", { className: "form-select", value: C, onChange: (_) => $(_.target.value), children: [p.jsx("option", { value: "", children: "Select category" }), F.map((_) => p.jsx("option", { value: _, children: _ }, _))] }), p.jsxs("button", { className: "btn btn-primary btn-sm", onClick: K, disabled: D || !C.trim(), children: [p.jsx(Nu, { size: 14 }), " ", D ? "Searching..." : "Search"] })] }), D ? p.jsx("div", { className: "loader-page", children: p.jsx("div", { className: "loader" }) }) : W ? p.jsx(bs, { transactions: L }) : p.jsx("p", { className: "text-muted text-sm", children: "Select a category to view complete transaction history." })] })] })] });
}
const xte = { warning: dN, success: $u, info: rP }, iS = { warning: { bg: "rgba(247,184,79,0.08)", border: "rgba(247,184,79,0.2)", color: "#f7b84f" }, success: { bg: "rgba(34,211,165,0.08)", border: "rgba(34,211,165,0.2)", color: "#22d3a5" }, info: { bg: "rgba(79,142,247,0.08)", border: "rgba(79,142,247,0.2)", color: "#4f8ef7" } };
function wte({ insights: e12 = [] }) {
  return e12.length ? p.jsxs("div", { className: "card mb-6", children: [p.jsx("h3", { style: { fontFamily: "var(--font-display)", fontSize: "1rem", marginBottom: 16 }, children: "\u{1F4A1} Smart Insights" }), p.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: e12.map((t, r) => {
    const n = xte[t.type] || rP, i = iS[t.type] || iS.info;
    return p.jsxs("div", { className: "fade-in", style: { display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 14px", background: i.bg, border: `1px solid ${i.border}`, borderRadius: "var(--radius-sm)", animationDelay: `${r * 0.05}s` }, children: [p.jsx(n, { size: 15, color: i.color, style: { flexShrink: 0, marginTop: 2 } }), p.jsx("span", { style: { fontSize: "0.875rem", color: "var(--text-secondary)" }, children: t.message })] }, r);
  }) })] }) : null;
}
const mu = (e12) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(e12), qi = ["#4f8ef7", "#7c6af7", "#22d3a5", "#f7b84f", "#f75f5f", "#f780b0", "#56cfe1"], aS = (e12) => e12 ? Array.isArray(e12) ? Object.fromEntries(e12) : typeof e12 == "object" ? e12 : {} : {};
function Ste() {
  var f;
  const [e12, t] = A.useState([]), [r, n] = A.useState(null), [i, a] = A.useState(true), [o, s] = A.useState(false);
  A.useEffect(() => {
    Ne.get("/summary/history").then(({ data: c }) => t(c)).catch(console.error).finally(() => a(false));
  }, []);
  const l = async (c) => {
    s(true);
    try {
      const { data: d } = await Ne.get(`/summary/history/${c}`);
      n(d);
    } catch {
      alert("Failed to load summary");
    } finally {
      s(false);
    }
  }, u = async (c, d) => {
    if (d.stopPropagation(), !!confirm("Delete this snapshot?")) try {
      await Ne.delete(`/summary/history/${c}`), t((h) => h.filter((y) => y._id !== c)), (r == null ? void 0 : r._id) === c && n(null);
    } catch {
      alert("Failed to delete");
    }
  };
  if (r) {
    const c = r.totals || {}, d = aS(c.categoryBreakdown), h = Object.entries(d).sort((m, g) => g[1] - m[1]), y = (r.chartData || []).map((m) => ({ ...m, date: new Date(m.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short" }) })), v = [...new Set((r.chartData || []).flatMap((m) => Object.keys(m).filter((g) => g !== "date")))];
    return p.jsxs("div", { className: "page-wrapper fade-in", children: [p.jsxs("button", { className: "btn btn-secondary btn-sm mb-6", onClick: () => n(null), children: [p.jsx(pN, { size: 14 }), " Back to History"] }), p.jsx("h1", { className: "page-title", children: r.title }), p.jsxs("p", { className: "page-subtitle", children: ["Snapshot from ", new Date(r.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })] }), p.jsxs("div", { className: "grid-3 mb-6", children: [p.jsx(gi, { title: "Total Income", value: mu(c.totalIncome || 0), icon: mo, color: "green" }), p.jsx(gi, { title: "Total Expenses", value: mu(c.totalExpense || 0), icon: sP, color: "red" }), p.jsx(gi, { title: "Transactions", value: (((f = r.transactions) == null ? void 0 : f.length) || 0).toString(), icon: Zj, color: "blue" })] }), p.jsx(wte, { insights: r.insights || [] }), y.length > 0 && p.jsxs("div", { className: "card mb-6", children: [p.jsx("h3", { style: { fontFamily: "var(--font-display)", fontSize: "1rem", marginBottom: 20 }, children: "\u{1F4C8} Spending Trend" }), p.jsx(sa, { width: "100%", height: 220, children: p.jsxs(Y2, { data: y, children: [p.jsx(Oa, { strokeDasharray: "3 3", stroke: "rgba(255,255,255,0.05)" }), p.jsx(en, { dataKey: "date", tick: { fill: "var(--text-muted)", fontSize: 11 }, axisLine: false, tickLine: false }), p.jsx(tn, { tick: { fill: "var(--text-muted)", fontSize: 11 }, axisLine: false, tickLine: false, tickFormatter: (m) => `\u20B9${(m / 1e3).toFixed(0)}k` }), p.jsx(bt, { contentStyle: { background: "var(--bg-elevated)", border: "1px solid var(--border)", borderRadius: 10 } }), v.slice(0, 4).map((m, g) => p.jsx(vn, { type: "monotone", dataKey: m, name: m, stroke: qi[g % qi.length], fill: qi[g % qi.length], fillOpacity: 0.12, strokeWidth: 2 }, m))] }) })] }), h.length > 0 && p.jsxs("div", { className: "card mb-6", children: [p.jsx("h3", { style: { fontFamily: "var(--font-display)", fontSize: "1rem", marginBottom: 20 }, children: "\u{1F4CA} Category Breakdown" }), p.jsx(sa, { width: "100%", height: 200, children: p.jsxs(cy, { data: h.map(([m, g]) => ({ name: m, value: g })), children: [p.jsx(Oa, { strokeDasharray: "3 3", stroke: "rgba(255,255,255,0.05)", vertical: false }), p.jsx(en, { dataKey: "name", tick: { fill: "var(--text-muted)", fontSize: 11 }, axisLine: false, tickLine: false }), p.jsx(tn, { tick: { fill: "var(--text-muted)", fontSize: 11 }, axisLine: false, tickLine: false, tickFormatter: (m) => `\u20B9${(m / 1e3).toFixed(0)}k` }), p.jsx(bt, { contentStyle: { background: "var(--bg-elevated)", border: "1px solid var(--border)", borderRadius: 10 } }), p.jsx(Mr, { dataKey: "value", radius: [6, 6, 0, 0], children: h.map((m, g) => p.jsx(La, { fill: qi[g % qi.length] }, g)) })] }) })] }), p.jsxs("div", { className: "card", children: [p.jsx("h3", { style: { fontFamily: "var(--font-display)", fontSize: "1rem", marginBottom: 16 }, children: "All Transactions" }), p.jsx(bs, { transactions: r.transactions || [] })] })] });
  }
  return p.jsxs("div", { className: "page-wrapper fade-in", children: [p.jsx("h1", { className: "page-title", children: "History" }), p.jsx("p", { className: "page-subtitle", children: "Past snapshots of your expense summaries" }), i ? p.jsx("div", { className: "loader-page", children: p.jsx("div", { className: "loader" }) }) : e12.length === 0 ? p.jsxs("div", { style: { textAlign: "center", padding: "80px 0" }, children: [p.jsx("p", { style: { fontSize: "2.5rem", marginBottom: 12 }, children: "\u{1F5C2}\uFE0F" }), p.jsx("h2", { style: { fontFamily: "var(--font-display)", marginBottom: 8 }, children: "No snapshots yet" }), p.jsx("p", { style: { color: "var(--text-secondary)" }, children: 'Go to Dashboard and click "Save Snapshot" to create your first history entry.' })] }) : p.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 12 }, children: e12.map((c, d) => {
    var v, m, g;
    const h = aS((v = c.totals) == null ? void 0 : v.categoryBreakdown), y = Object.entries(h).sort((b, x) => x[1] - b[1]).slice(0, 3);
    return p.jsx("div", { className: "card history-item fade-in", style: { animationDelay: `${d * 0.04}s`, cursor: "pointer" }, onClick: () => l(c._id), children: p.jsxs("div", { className: "history-item-inner", children: [p.jsx("div", { className: "history-icon", children: p.jsx(mN, { size: 18, color: "var(--accent-primary)" }) }), p.jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [p.jsx("div", { className: "flex items-center gap-2 mb-1", children: p.jsx("p", { style: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem" }, children: c.title }) }), p.jsx("p", { style: { fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: 8 }, children: new Date(c.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" }) }), p.jsxs("div", { style: { display: "flex", gap: 16, flexWrap: "wrap" }, children: [p.jsxs("div", { children: [p.jsx("span", { style: { fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }, children: "Income" }), p.jsx("p", { style: { fontWeight: 700, color: "var(--accent-green)", fontSize: "0.9rem" }, children: mu(((m = c.totals) == null ? void 0 : m.totalIncome) || 0) })] }), p.jsxs("div", { children: [p.jsx("span", { style: { fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }, children: "Expenses" }), p.jsx("p", { style: { fontWeight: 700, color: "var(--accent-red)", fontSize: "0.9rem" }, children: mu(((g = c.totals) == null ? void 0 : g.totalExpense) || 0) })] }), y.length > 0 && p.jsxs("div", { children: [p.jsx("span", { style: { fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }, children: "Top Categories" }), p.jsx("div", { style: { display: "flex", gap: 4, marginTop: 2, flexWrap: "wrap" }, children: y.map(([b]) => p.jsx("span", { style: { fontSize: "0.7rem", padding: "2px 8px", background: "var(--bg-elevated)", borderRadius: 99, border: "1px solid var(--border)", color: "var(--text-secondary)" }, children: b }, b)) })] })] })] }), p.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [p.jsx("button", { className: "btn btn-danger btn-sm", onClick: (b) => u(c._id, b), style: { padding: "6px 10px" }, children: p.jsx(oP, { size: 13 }) }), p.jsx(tP, { size: 18, color: "var(--text-muted)" })] })] }) }, c._id);
  }) }), o && p.jsx("div", { style: { position: "fixed", inset: 0, background: "rgba(8,12,20,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999 }, children: p.jsx("div", { className: "loader", style: { width: 32, height: 32, borderWidth: 3 } }) }), p.jsx("style", { children: `
        .history-item { transition: all 0.18s; }
        .history-item:hover {
          border-color: var(--accent-primary);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(79,142,247,0.12);
        }
        .history-item-inner {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .history-icon {
          width: 40px;
          height: 40px;
          background: rgba(79,142,247,0.1);
          border-radius: 12px;
          border: 1px solid rgba(79,142,247,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
      ` })] });
}
const Xo = (e12) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(e12), oS = (e12) => new Date(e12).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
function Ote() {
  const { merchant: e12 } = ZT(), t = decodeURIComponent(e12 || "").trim(), [r, n] = A.useState(null), [i, a] = A.useState(true), [o, s] = A.useState("");
  A.useEffect(() => {
    (async () => {
      var c, d;
      a(true), s("");
      try {
        const { data: h } = await Ne.get("/summary/accounts"), y = (Array.isArray(h) ? h : []).find((v) => (v.merchant || "").trim().toLowerCase() === t.toLowerCase());
        n(y || null);
      } catch (h) {
        s(((d = (c = h.response) == null ? void 0 : c.data) == null ? void 0 : d.message) || "Failed to load account details");
      } finally {
        a(false);
      }
    })();
  }, [t]);
  const l = A.useMemo(() => r != null && r.transactions ? r.transactions.filter((f) => f.type === "Credit").sort((f, c) => new Date(c.date) - new Date(f.date)) : [], [r]), u = A.useMemo(() => r != null && r.transactions ? r.transactions.filter((f) => f.type === "Debit").sort((f, c) => new Date(c.date) - new Date(f.date)) : [], [r]);
  return i ? p.jsx("div", { className: "page-wrapper fade-in", children: p.jsx("div", { className: "card", children: p.jsx("div", { className: "loader-page", children: p.jsx("div", { className: "loader" }) }) }) }) : o ? p.jsx("div", { className: "page-wrapper fade-in", children: p.jsx("div", { className: "alert alert-error", children: o }) }) : r ? p.jsxs("div", { className: "page-wrapper fade-in", children: [p.jsx("h1", { className: "page-title", children: r.merchant }), p.jsxs("p", { className: "page-subtitle", children: [r.transactionCount, " transactions"] }), p.jsxs("div", { className: "grid-3 mb-6", children: [p.jsxs("div", { className: "card", children: [p.jsx("p", { className: "text-sm text-muted mb-4", children: "Total Received" }), p.jsx("h2", { className: "font-display text-green", children: Xo(r.totalCredit) })] }), p.jsxs("div", { className: "card", children: [p.jsx("p", { className: "text-sm text-muted mb-4", children: "Total Sent" }), p.jsx("h2", { className: "font-display text-red", children: Xo(r.totalDebit) })] }), p.jsxs("div", { className: "card", children: [p.jsx("p", { className: "text-sm text-muted mb-4", children: "Net Balance" }), p.jsx("h2", { className: `font-display ${r.netBalance >= 0 ? "text-green" : "text-red"}`, children: Xo(r.netBalance) })] })] }), p.jsxs("div", { className: "grid-2", children: [p.jsxs("div", { className: "card", style: { padding: 0, overflow: "hidden" }, children: [p.jsxs("div", { className: "flex items-center justify-between", style: { padding: "16px 16px 8px 16px" }, children: [p.jsx("h3", { className: "font-display", style: { fontSize: "1rem" }, children: "Money Received" }), p.jsx("span", { className: "badge badge-credit", children: l.length })] }), p.jsx("div", { style: { overflowX: "auto" }, children: p.jsxs("table", { className: "data-table", children: [p.jsx("thead", { children: p.jsxs("tr", { children: [p.jsx("th", { children: "Date" }), p.jsx("th", { children: "Amount" })] }) }), p.jsx("tbody", { children: l.length === 0 ? p.jsx("tr", { children: p.jsx("td", { colSpan: 2, className: "text-muted", children: "No credit transactions." }) }) : l.map((f) => p.jsxs("tr", { children: [p.jsx("td", { children: oS(f.date) }), p.jsx("td", { className: "text-green", style: { fontWeight: 700 }, children: Xo(f.amount) })] }, f._id || `${f.date}-${f.amount}-${f.type}`)) })] }) })] }), p.jsxs("div", { className: "card", style: { padding: 0, overflow: "hidden" }, children: [p.jsxs("div", { className: "flex items-center justify-between", style: { padding: "16px 16px 8px 16px" }, children: [p.jsx("h3", { className: "font-display", style: { fontSize: "1rem" }, children: "Money Sent" }), p.jsx("span", { className: "badge badge-debit", children: u.length })] }), p.jsx("div", { style: { overflowX: "auto" }, children: p.jsxs("table", { className: "data-table", children: [p.jsx("thead", { children: p.jsxs("tr", { children: [p.jsx("th", { children: "Date" }), p.jsx("th", { children: "Amount" })] }) }), p.jsx("tbody", { children: u.length === 0 ? p.jsx("tr", { children: p.jsx("td", { colSpan: 2, className: "text-muted", children: "No debit transactions." }) }) : u.map((f) => p.jsxs("tr", { children: [p.jsx("td", { children: oS(f.date) }), p.jsx("td", { className: "text-red", style: { fontWeight: 700 }, children: Xo(f.amount) })] }, f._id || `${f.date}-${f.amount}-${f.type}`)) })] }) })] })] })] }) : p.jsxs("div", { className: "page-wrapper fade-in", children: [p.jsx("h1", { className: "page-title", children: t || "Account" }), p.jsx("p", { className: "page-subtitle", children: "No account transactions found for this person." })] });
}
function Yo({ children: e12 }) {
  const { user: t } = ho();
  return t ? e12 : p.jsx(lv, { to: "/login", replace: true });
}
function sS({ children: e12 }) {
  const { user: t } = ho();
  return t ? p.jsx(lv, { to: "/dashboard", replace: true }) : e12;
}
function Qo({ children: e12, theme: t, onToggleTheme: r }) {
  return p.jsxs("div", { className: "app-layout", children: [p.jsx($N, { theme: t, onToggleTheme: r }), p.jsx("div", { className: "main-content", children: e12 })] });
}
function jte({ theme: e12, onToggleTheme: t }) {
  return p.jsxs(m$, { children: [p.jsx(jr, { path: "/", element: p.jsx(MN, {}) }), p.jsx(jr, { path: "/login", element: p.jsx(sS, { children: p.jsx(IN, {}) }) }), p.jsx(jr, { path: "/register", element: p.jsx(sS, { children: p.jsx(RN, {}) }) }), p.jsx(jr, { path: "/dashboard", element: p.jsx(Yo, { children: p.jsx(Qo, { theme: e12, onToggleTheme: t, children: p.jsx(yte, {}) }) }) }), p.jsx(jr, { path: "/upload", element: p.jsx(Yo, { children: p.jsx(Qo, { theme: e12, onToggleTheme: t, children: p.jsx(gte, {}) }) }) }), p.jsx(jr, { path: "/transactions", element: p.jsx(Yo, { children: p.jsx(Qo, { theme: e12, onToggleTheme: t, children: p.jsx(bte, {}) }) }) }), p.jsx(jr, { path: "/accounts/:merchant", element: p.jsx(Yo, { children: p.jsx(Qo, { theme: e12, onToggleTheme: t, children: p.jsx(Ote, {}) }) }) }), p.jsx(jr, { path: "/history", element: p.jsx(Yo, { children: p.jsx(Qo, { theme: e12, onToggleTheme: t, children: p.jsx(Ste, {}) }) }) }), p.jsx(jr, { path: "*", element: p.jsx(lv, { to: "/", replace: true }) })] });
}
function Pte() {
  const [e12, t] = A.useState(() => localStorage.getItem("theme") || "dark");
  A.useEffect(() => {
    document.documentElement.setAttribute("data-theme", e12), localStorage.setItem("theme", e12);
  }, [e12]);
  const r = () => t((n) => n === "dark" ? "light" : "dark");
  return p.jsx(O$, { children: p.jsx(lN, { children: p.jsx(jte, { theme: e12, onToggleTheme: r }) }) });
}
Rp.createRoot(document.getElementById("root")).render(p.jsx(E.StrictMode, { children: p.jsx(Pte, {}) }));
