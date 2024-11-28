var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function makeMap(str) {
  const map = /* @__PURE__ */ Object.create(null);
  for (const key of str.split(",")) map[key] = 1;
  return (val) => val in map;
}
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
(key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$b = Object.prototype.hasOwnProperty;
const hasOwn$7 = (val, key) => hasOwnProperty$b.call(val, key);
const isArray$7 = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet$1 = (val) => toTypeString(val) === "[object Set]";
const isDate = (val) => toTypeString(val) === "[object Date]";
const isFunction$3 = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const isSymbol$3 = (val) => typeof val === "symbol";
const isObject$9 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return (isObject$9(val) || isFunction$3(val)) && isFunction$3(val.then) && isFunction$3(val.catch);
};
const objectToString$2 = Object.prototype.toString;
const toTypeString = (value) => objectToString$2.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString$1(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const cacheStringFunction = (fn2) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn2(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction(
  (str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  }
);
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction(
  (str) => {
    const s = str ? `on${capitalize(str)}` : ``;
    return s;
  }
);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, ...arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](...arg);
  }
};
const def = (obj, key, value, writable = false) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    writable,
    value
  });
};
const looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
const toNumber = (val) => {
  const n = isString$1(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function normalizeStyle(value) {
  if (isArray$7(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString$1(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString$1(value) || isObject$9(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString$1(value)) {
    res = value;
  } else if (isArray$7(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$9(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props) return null;
  let { class: klass, style } = props;
  if (klass && !isString$1(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length) return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b) return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isSymbol$3(a);
  bValidType = isSymbol$3(b);
  if (aValidType || bValidType) {
    return a === b;
  }
  aValidType = isArray$7(a);
  bValidType = isArray$7(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject$9(a);
  bValidType = isObject$9(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const isRef$1 = (val) => {
  return !!(val && val["__v_isRef"] === true);
};
const toDisplayString = (val) => {
  return isString$1(val) ? val : val == null ? "" : isArray$7(val) || isObject$9(val) && (val.toString === objectToString$2 || !isFunction$3(val.toString)) ? isRef$1(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (isRef$1(val)) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries, [key, val2], i) => {
          entries[stringifySymbol(key, i) + " =>"] = val2;
          return entries;
        },
        {}
      )
    };
  } else if (isSet$1(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
    };
  } else if (isSymbol$3(val)) {
    return stringifySymbol(val);
  } else if (isObject$9(val) && !isArray$7(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const stringifySymbol = (v, i = "") => {
  var _a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    isSymbol$3(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this.effects = [];
    this.cleanups = [];
    this._isPaused = false;
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let i, l;
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].pause();
        }
      }
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].pause();
      }
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active) {
      if (this._isPaused) {
        this._isPaused = false;
        let i, l;
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].resume();
          }
        }
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].resume();
        }
      }
    }
  }
  run(fn2) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn2();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    activeEffectScope = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this._active) {
      this._active = false;
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      this.effects.length = 0;
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      this.cleanups.length = 0;
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
    }
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
let activeSub;
const pausedQueueEffects = /* @__PURE__ */ new WeakSet();
class ReactiveEffect {
  constructor(fn2) {
    this.fn = fn2;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 1 | 4;
    this.next = void 0;
    this.cleanup = void 0;
    this.scheduler = void 0;
    if (activeEffectScope && activeEffectScope.active) {
      activeEffectScope.effects.push(this);
    }
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    if (this.flags & 64) {
      this.flags &= ~64;
      if (pausedQueueEffects.has(this)) {
        pausedQueueEffects.delete(this);
        this.trigger();
      }
    }
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags & 2 && !(this.flags & 32)) {
      return;
    }
    if (!(this.flags & 8)) {
      batch(this);
    }
  }
  run() {
    if (!(this.flags & 1)) {
      return this.fn();
    }
    this.flags |= 2;
    cleanupEffect(this);
    prepareDeps(this);
    const prevEffect = activeSub;
    const prevShouldTrack = shouldTrack;
    activeSub = this;
    shouldTrack = true;
    try {
      return this.fn();
    } finally {
      cleanupDeps(this);
      activeSub = prevEffect;
      shouldTrack = prevShouldTrack;
      this.flags &= ~2;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let link = this.deps; link; link = link.nextDep) {
        removeSub(link);
      }
      this.deps = this.depsTail = void 0;
      cleanupEffect(this);
      this.onStop && this.onStop();
      this.flags &= ~1;
    }
  }
  trigger() {
    if (this.flags & 64) {
      pausedQueueEffects.add(this);
    } else if (this.scheduler) {
      this.scheduler();
    } else {
      this.runIfDirty();
    }
  }
  /**
   * @internal
   */
  runIfDirty() {
    if (isDirty(this)) {
      this.run();
    }
  }
  get dirty() {
    return isDirty(this);
  }
}
let batchDepth = 0;
let batchedSub;
let batchedComputed;
function batch(sub, isComputed = false) {
  sub.flags |= 8;
  if (isComputed) {
    sub.next = batchedComputed;
    batchedComputed = sub;
    return;
  }
  sub.next = batchedSub;
  batchedSub = sub;
}
function startBatch() {
  batchDepth++;
}
function endBatch() {
  if (--batchDepth > 0) {
    return;
  }
  if (batchedComputed) {
    let e = batchedComputed;
    batchedComputed = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= ~8;
      e = next;
    }
  }
  let error;
  while (batchedSub) {
    let e = batchedSub;
    batchedSub = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= ~8;
      if (e.flags & 1) {
        try {
          ;
          e.trigger();
        } catch (err) {
          if (!error) error = err;
        }
      }
      e = next;
    }
  }
  if (error) throw error;
}
function prepareDeps(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    link.version = -1;
    link.prevActiveLink = link.dep.activeLink;
    link.dep.activeLink = link;
  }
}
function cleanupDeps(sub) {
  let head;
  let tail = sub.depsTail;
  let link = tail;
  while (link) {
    const prev = link.prevDep;
    if (link.version === -1) {
      if (link === tail) tail = prev;
      removeSub(link);
      removeDep(link);
    } else {
      head = link;
    }
    link.dep.activeLink = link.prevActiveLink;
    link.prevActiveLink = void 0;
    link = prev;
  }
  sub.deps = head;
  sub.depsTail = tail;
}
function isDirty(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) {
      return true;
    }
  }
  if (sub._dirty) {
    return true;
  }
  return false;
}
function refreshComputed(computed2) {
  if (computed2.flags & 4 && !(computed2.flags & 16)) {
    return;
  }
  computed2.flags &= ~16;
  if (computed2.globalVersion === globalVersion) {
    return;
  }
  computed2.globalVersion = globalVersion;
  const dep = computed2.dep;
  computed2.flags |= 2;
  if (dep.version > 0 && !computed2.isSSR && computed2.deps && !isDirty(computed2)) {
    computed2.flags &= ~2;
    return;
  }
  const prevSub = activeSub;
  const prevShouldTrack = shouldTrack;
  activeSub = computed2;
  shouldTrack = true;
  try {
    prepareDeps(computed2);
    const value = computed2.fn(computed2._value);
    if (dep.version === 0 || hasChanged(value, computed2._value)) {
      computed2._value = value;
      dep.version++;
    }
  } catch (err) {
    dep.version++;
    throw err;
  } finally {
    activeSub = prevSub;
    shouldTrack = prevShouldTrack;
    cleanupDeps(computed2);
    computed2.flags &= ~2;
  }
}
function removeSub(link, soft = false) {
  const { dep, prevSub, nextSub } = link;
  if (prevSub) {
    prevSub.nextSub = nextSub;
    link.prevSub = void 0;
  }
  if (nextSub) {
    nextSub.prevSub = prevSub;
    link.nextSub = void 0;
  }
  if (dep.subs === link) {
    dep.subs = prevSub;
    if (!prevSub && dep.computed) {
      dep.computed.flags &= ~4;
      for (let l = dep.computed.deps; l; l = l.nextDep) {
        removeSub(l, true);
      }
    }
  }
  if (!soft && !--dep.sc && dep.map) {
    dep.map.delete(dep.key);
  }
}
function removeDep(link) {
  const { prevDep, nextDep } = link;
  if (prevDep) {
    prevDep.nextDep = nextDep;
    link.prevDep = void 0;
  }
  if (nextDep) {
    nextDep.prevDep = prevDep;
    link.nextDep = void 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function cleanupEffect(e) {
  const { cleanup } = e;
  e.cleanup = void 0;
  if (cleanup) {
    const prevSub = activeSub;
    activeSub = void 0;
    try {
      cleanup();
    } finally {
      activeSub = prevSub;
    }
  }
}
let globalVersion = 0;
class Link {
  constructor(sub, dep) {
    this.sub = sub;
    this.dep = dep;
    this.version = dep.version;
    this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Dep {
  constructor(computed2) {
    this.computed = computed2;
    this.version = 0;
    this.activeLink = void 0;
    this.subs = void 0;
    this.map = void 0;
    this.key = void 0;
    this.sc = 0;
  }
  track(debugInfo) {
    if (!activeSub || !shouldTrack || activeSub === this.computed) {
      return;
    }
    let link = this.activeLink;
    if (link === void 0 || link.sub !== activeSub) {
      link = this.activeLink = new Link(activeSub, this);
      if (!activeSub.deps) {
        activeSub.deps = activeSub.depsTail = link;
      } else {
        link.prevDep = activeSub.depsTail;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
      }
      addSub(link);
    } else if (link.version === -1) {
      link.version = this.version;
      if (link.nextDep) {
        const next = link.nextDep;
        next.prevDep = link.prevDep;
        if (link.prevDep) {
          link.prevDep.nextDep = next;
        }
        link.prevDep = activeSub.depsTail;
        link.nextDep = void 0;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
        if (activeSub.deps === link) {
          activeSub.deps = next;
        }
      }
    }
    return link;
  }
  trigger(debugInfo) {
    this.version++;
    globalVersion++;
    this.notify(debugInfo);
  }
  notify(debugInfo) {
    startBatch();
    try {
      if (false) ;
      for (let link = this.subs; link; link = link.prevSub) {
        if (link.sub.notify()) {
          ;
          link.sub.dep.notify();
        }
      }
    } finally {
      endBatch();
    }
  }
}
function addSub(link) {
  link.dep.sc++;
  if (link.sub.flags & 4) {
    const computed2 = link.dep.computed;
    if (computed2 && !link.dep.subs) {
      computed2.flags |= 4 | 16;
      for (let l = computed2.deps; l; l = l.nextDep) {
        addSub(l);
      }
    }
    const currentTail = link.dep.subs;
    if (currentTail !== link) {
      link.prevSub = currentTail;
      if (currentTail) currentTail.nextSub = link;
    }
    link.dep.subs = link;
  }
}
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = Symbol(
  ""
);
const MAP_KEY_ITERATE_KEY = Symbol(
  ""
);
const ARRAY_ITERATE_KEY = Symbol(
  ""
);
function track(target, type, key) {
  if (shouldTrack && activeSub) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = new Dep());
      dep.map = depsMap;
      dep.key = key;
    }
    {
      dep.track();
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    globalVersion++;
    return;
  }
  const run = (dep) => {
    if (dep) {
      {
        dep.trigger();
      }
    }
  };
  startBatch();
  if (type === "clear") {
    depsMap.forEach(run);
  } else {
    const targetIsArray = isArray$7(target);
    const isArrayIndex = targetIsArray && isIntegerKey(key);
    if (targetIsArray && key === "length") {
      const newLength = Number(newValue);
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol$3(key2) && key2 >= newLength) {
          run(dep);
        }
      });
    } else {
      if (key !== void 0 || depsMap.has(void 0)) {
        run(depsMap.get(key));
      }
      if (isArrayIndex) {
        run(depsMap.get(ARRAY_ITERATE_KEY));
      }
      switch (type) {
        case "add":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isArrayIndex) {
            run(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            run(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
  }
  endBatch();
}
function reactiveReadArray(array) {
  const raw = toRaw(array);
  if (raw === array) return raw;
  track(raw, "iterate", ARRAY_ITERATE_KEY);
  return isShallow(array) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
  track(arr = toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
  return arr;
}
const arrayInstrumentations = {
  __proto__: null,
  [Symbol.iterator]() {
    return iterator(this, Symbol.iterator, toReactive);
  },
  concat(...args) {
    return reactiveReadArray(this).concat(
      ...args.map((x) => isArray$7(x) ? reactiveReadArray(x) : x)
    );
  },
  entries() {
    return iterator(this, "entries", (value) => {
      value[1] = toReactive(value[1]);
      return value;
    });
  },
  every(fn2, thisArg) {
    return apply(this, "every", fn2, thisArg, void 0, arguments);
  },
  filter(fn2, thisArg) {
    return apply(this, "filter", fn2, thisArg, (v) => v.map(toReactive), arguments);
  },
  find(fn2, thisArg) {
    return apply(this, "find", fn2, thisArg, toReactive, arguments);
  },
  findIndex(fn2, thisArg) {
    return apply(this, "findIndex", fn2, thisArg, void 0, arguments);
  },
  findLast(fn2, thisArg) {
    return apply(this, "findLast", fn2, thisArg, toReactive, arguments);
  },
  findLastIndex(fn2, thisArg) {
    return apply(this, "findLastIndex", fn2, thisArg, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(fn2, thisArg) {
    return apply(this, "forEach", fn2, thisArg, void 0, arguments);
  },
  includes(...args) {
    return searchProxy(this, "includes", args);
  },
  indexOf(...args) {
    return searchProxy(this, "indexOf", args);
  },
  join(separator) {
    return reactiveReadArray(this).join(separator);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...args) {
    return searchProxy(this, "lastIndexOf", args);
  },
  map(fn2, thisArg) {
    return apply(this, "map", fn2, thisArg, void 0, arguments);
  },
  pop() {
    return noTracking(this, "pop");
  },
  push(...args) {
    return noTracking(this, "push", args);
  },
  reduce(fn2, ...args) {
    return reduce(this, "reduce", fn2, args);
  },
  reduceRight(fn2, ...args) {
    return reduce(this, "reduceRight", fn2, args);
  },
  shift() {
    return noTracking(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(fn2, thisArg) {
    return apply(this, "some", fn2, thisArg, void 0, arguments);
  },
  splice(...args) {
    return noTracking(this, "splice", args);
  },
  toReversed() {
    return reactiveReadArray(this).toReversed();
  },
  toSorted(comparer) {
    return reactiveReadArray(this).toSorted(comparer);
  },
  toSpliced(...args) {
    return reactiveReadArray(this).toSpliced(...args);
  },
  unshift(...args) {
    return noTracking(this, "unshift", args);
  },
  values() {
    return iterator(this, "values", toReactive);
  }
};
function iterator(self2, method, wrapValue) {
  const arr = shallowReadArray(self2);
  const iter = arr[method]();
  if (arr !== self2 && !isShallow(self2)) {
    iter._next = iter.next;
    iter.next = () => {
      const result = iter._next();
      if (result.value) {
        result.value = wrapValue(result.value);
      }
      return result;
    };
  }
  return iter;
}
const arrayProto$1 = Array.prototype;
function apply(self2, method, fn2, thisArg, wrappedRetFn, args) {
  const arr = shallowReadArray(self2);
  const needsWrap = arr !== self2 && !isShallow(self2);
  const methodFn = arr[method];
  if (methodFn !== arrayProto$1[method]) {
    const result2 = methodFn.apply(self2, args);
    return needsWrap ? toReactive(result2) : result2;
  }
  let wrappedFn = fn2;
  if (arr !== self2) {
    if (needsWrap) {
      wrappedFn = function(item, index) {
        return fn2.call(this, toReactive(item), index, self2);
      };
    } else if (fn2.length > 2) {
      wrappedFn = function(item, index) {
        return fn2.call(this, item, index, self2);
      };
    }
  }
  const result = methodFn.call(arr, wrappedFn, thisArg);
  return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self2, method, fn2, args) {
  const arr = shallowReadArray(self2);
  let wrappedFn = fn2;
  if (arr !== self2) {
    if (!isShallow(self2)) {
      wrappedFn = function(acc, item, index) {
        return fn2.call(this, acc, toReactive(item), index, self2);
      };
    } else if (fn2.length > 3) {
      wrappedFn = function(acc, item, index) {
        return fn2.call(this, acc, item, index, self2);
      };
    }
  }
  return arr[method](wrappedFn, ...args);
}
function searchProxy(self2, method, args) {
  const arr = toRaw(self2);
  track(arr, "iterate", ARRAY_ITERATE_KEY);
  const res = arr[method](...args);
  if ((res === -1 || res === false) && isProxy(args[0])) {
    args[0] = toRaw(args[0]);
    return arr[method](...args);
  }
  return res;
}
function noTracking(self2, method, args = []) {
  pauseTracking();
  startBatch();
  const res = toRaw(self2)[method].apply(self2, args);
  endBatch();
  resetTracking();
  return res;
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol$3)
);
function hasOwnProperty$a(key) {
  if (!isSymbol$3(key)) key = String(key);
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
  constructor(_isReadonly = false, _isShallow = false) {
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key, receiver) {
    if (key === "__v_skip") return target["__v_skip"];
    const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return isShallow2;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = isArray$7(target);
    if (!isReadonly2) {
      let fn2;
      if (targetIsArray && (fn2 = arrayInstrumentations[key])) {
        return fn2;
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty$a;
      }
    }
    const res = Reflect.get(
      target,
      key,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      isRef(target) ? target : receiver
    );
    if (isSymbol$3(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (isShallow2) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject$9(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  }
}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(false, isShallow2);
  }
  set(target, key, value, receiver) {
    let oldValue = target[key];
    if (!this._isShallow) {
      const isOldValueReadonly = isReadonly(oldValue);
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray$7(target) && isRef(oldValue) && !isRef(value)) {
        if (isOldValueReadonly) {
          return false;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }
    const hadKey = isArray$7(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn$7(target, key);
    const result = Reflect.set(
      target,
      key,
      value,
      isRef(target) ? target : receiver
    );
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    const hadKey = hasOwn$7(target, key);
    target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0);
    }
    return result;
  }
  has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol$3(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(
      target,
      "iterate",
      isArray$7(target) ? "length" : ITERATE_KEY
    );
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(true, isShallow2);
  }
  set(target, key) {
    return true;
  }
  deleteProperty(target, key) {
    return true;
  }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : type === "clear" ? void 0 : this;
  };
}
function createInstrumentations(readonly2, shallow) {
  const instrumentations = {
    get(key) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "get", key);
        }
        track(rawTarget, "get", rawKey);
      }
      const { has: has2 } = getProto(rawTarget);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      if (has2.call(rawTarget, key)) {
        return wrap(target.get(key));
      } else if (has2.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key);
      }
    },
    get size() {
      const target = this["__v_raw"];
      !readonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
      return Reflect.get(target, "size", target);
    },
    has(key) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "has", key);
        }
        track(rawTarget, "has", rawKey);
      }
      return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
    },
    forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      !readonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    }
  };
  extend(
    instrumentations,
    readonly2 ? {
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear")
    } : {
      add(value) {
        if (!shallow && !isShallow(value) && !isReadonly(value)) {
          value = toRaw(value);
        }
        const target = toRaw(this);
        const proto = getProto(target);
        const hadKey = proto.has.call(target, value);
        if (!hadKey) {
          target.add(value);
          trigger(target, "add", value, value);
        }
        return this;
      },
      set(key, value) {
        if (!shallow && !isShallow(value) && !isReadonly(value)) {
          value = toRaw(value);
        }
        const target = toRaw(this);
        const { has: has2, get: get2 } = getProto(target);
        let hadKey = has2.call(target, key);
        if (!hadKey) {
          key = toRaw(key);
          hadKey = has2.call(target, key);
        }
        const oldValue = get2.call(target, key);
        target.set(key, value);
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value);
        }
        return this;
      },
      delete(key) {
        const target = toRaw(this);
        const { has: has2, get: get2 } = getProto(target);
        let hadKey = has2.call(target, key);
        if (!hadKey) {
          key = toRaw(key);
          hadKey = has2.call(target, key);
        }
        get2 ? get2.call(target, key) : void 0;
        const result = target.delete(key);
        if (hadKey) {
          trigger(target, "delete", key, void 0);
        }
        return result;
      },
      clear() {
        const target = toRaw(this);
        const hadItems = target.size !== 0;
        const result = target.clear();
        if (hadItems) {
          trigger(
            target,
            "clear",
            void 0,
            void 0
          );
        }
        return result;
      }
    }
  );
  const iteratorMethods = [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ];
  iteratorMethods.forEach((method) => {
    instrumentations[method] = createIterableMethod(method, readonly2, shallow);
  });
  return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = createInstrumentations(isReadonly2, shallow);
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn$7(instrumentations, key) && key in target ? instrumentations : target,
      key,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function shallowReactive(target) {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function shallowReadonly(target) {
  return createReactiveObject(
    target,
    true,
    shallowReadonlyHandlers,
    shallowReadonlyCollectionHandlers,
    shallowReadonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$9(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return value ? !!value["__v_raw"] : false;
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  if (!hasOwn$7(value, "__v_skip") && Object.isExtensible(value)) {
    def(value, "__v_skip", true);
  }
  return value;
}
const toReactive = (value) => isObject$9(value) ? reactive(value) : value;
const toReadonly = (value) => isObject$9(value) ? readonly(value) : value;
function isRef(r) {
  return r ? r["__v_isRef"] === true : false;
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, isShallow2) {
    this.dep = new Dep();
    this["__v_isRef"] = true;
    this["__v_isShallow"] = false;
    this._rawValue = isShallow2 ? value : toRaw(value);
    this._value = isShallow2 ? value : toReactive(value);
    this["__v_isShallow"] = isShallow2;
  }
  get value() {
    {
      this.dep.track();
    }
    return this._value;
  }
  set value(newValue) {
    const oldValue = this._rawValue;
    const useDirectValue = this["__v_isShallow"] || isShallow(newValue) || isReadonly(newValue);
    newValue = useDirectValue ? newValue : toRaw(newValue);
    if (hasChanged(newValue, oldValue)) {
      this._rawValue = newValue;
      this._value = useDirectValue ? newValue : toReactive(newValue);
      {
        this.dep.trigger();
      }
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
function toValue(source) {
  return isFunction$3(source) ? source() : unref(source);
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class ComputedRefImpl {
  constructor(fn2, setter, isSSR) {
    this.fn = fn2;
    this.setter = setter;
    this._value = void 0;
    this.dep = new Dep(this);
    this.__v_isRef = true;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 16;
    this.globalVersion = globalVersion - 1;
    this.next = void 0;
    this.effect = this;
    this["__v_isReadonly"] = !setter;
    this.isSSR = isSSR;
  }
  /**
   * @internal
   */
  notify() {
    this.flags |= 16;
    if (!(this.flags & 8) && // avoid infinite self recursion
    activeSub !== this) {
      batch(this, true);
      return true;
    }
  }
  get value() {
    const link = this.dep.track();
    refreshComputed(this);
    if (link) {
      link.version = this.dep.version;
    }
    return this._value;
  }
  set value(newValue) {
    if (this.setter) {
      this.setter(newValue);
    }
  }
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  if (isFunction$3(getterOrOptions)) {
    getter = getterOrOptions;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, isSSR);
  return cRef;
}
const INITIAL_WATCHER_VALUE = {};
const cleanupMap = /* @__PURE__ */ new WeakMap();
let activeWatcher = void 0;
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
  if (owner) {
    let cleanups = cleanupMap.get(owner);
    if (!cleanups) cleanupMap.set(owner, cleanups = []);
    cleanups.push(cleanupFn);
  }
}
function watch$1(source, cb, options = EMPTY_OBJ) {
  const { immediate, deep, once, scheduler, augmentJob, call: call2 } = options;
  const reactiveGetter = (source2) => {
    if (deep) return source2;
    if (isShallow(source2) || deep === false || deep === 0)
      return traverse(source2, 1);
    return traverse(source2);
  };
  let effect2;
  let getter;
  let cleanup;
  let boundCleanup;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => reactiveGetter(source);
    forceTrigger = true;
  } else if (isArray$7(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return reactiveGetter(s);
      } else if (isFunction$3(s)) {
        return call2 ? call2(s, 2) : s();
      } else ;
    });
  } else if (isFunction$3(source)) {
    if (cb) {
      getter = call2 ? () => call2(source, 2) : source;
    } else {
      getter = () => {
        if (cleanup) {
          pauseTracking();
          try {
            cleanup();
          } finally {
            resetTracking();
          }
        }
        const currentEffect = activeWatcher;
        activeWatcher = effect2;
        try {
          return call2 ? call2(source, 3, [boundCleanup]) : source(boundCleanup);
        } finally {
          activeWatcher = currentEffect;
        }
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    const depth = deep === true ? Infinity : deep;
    getter = () => traverse(baseGetter(), depth);
  }
  const scope = getCurrentScope();
  const watchHandle = () => {
    effect2.stop();
    if (scope && scope.active) {
      remove(scope.effects, effect2);
    }
  };
  if (once && cb) {
    const _cb = cb;
    cb = (...args) => {
      _cb(...args);
      watchHandle();
    };
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = (immediateFirstRun) => {
    if (!(effect2.flags & 1) || !effect2.dirty && !immediateFirstRun) {
      return;
    }
    if (cb) {
      const newValue = effect2.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue))) {
        if (cleanup) {
          cleanup();
        }
        const currentWatcher = activeWatcher;
        activeWatcher = effect2;
        try {
          const args = [
            newValue,
            // pass undefined as the old value when it's changed for the first time
            oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
            boundCleanup
          ];
          call2 ? call2(cb, 3, args) : (
            // @ts-expect-error
            cb(...args)
          );
          oldValue = newValue;
        } finally {
          activeWatcher = currentWatcher;
        }
      }
    } else {
      effect2.run();
    }
  };
  if (augmentJob) {
    augmentJob(job);
  }
  effect2 = new ReactiveEffect(getter);
  effect2.scheduler = scheduler ? () => scheduler(job, false) : job;
  boundCleanup = (fn2) => onWatcherCleanup(fn2, false, effect2);
  cleanup = effect2.onStop = () => {
    const cleanups = cleanupMap.get(effect2);
    if (cleanups) {
      if (call2) {
        call2(cleanups, 4);
      } else {
        for (const cleanup2 of cleanups) cleanup2();
      }
      cleanupMap.delete(effect2);
    }
  };
  if (cb) {
    if (immediate) {
      job(true);
    } else {
      oldValue = effect2.run();
    }
  } else if (scheduler) {
    scheduler(job.bind(null, true), true);
  } else {
    effect2.run();
  }
  watchHandle.pause = effect2.pause.bind(effect2);
  watchHandle.resume = effect2.resume.bind(effect2);
  watchHandle.stop = watchHandle;
  return watchHandle;
}
function traverse(value, depth = Infinity, seen) {
  if (depth <= 0 || !isObject$9(value) || value["__v_skip"]) {
    return value;
  }
  seen = seen || /* @__PURE__ */ new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  depth--;
  if (isRef(value)) {
    traverse(value.value, depth, seen);
  } else if (isArray$7(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], depth, seen);
    }
  } else if (isSet$1(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, depth, seen);
    });
  } else if (isPlainObject(value)) {
    for (const key in value) {
      traverse(value[key], depth, seen);
    }
    for (const key of Object.getOwnPropertySymbols(value)) {
      if (Object.prototype.propertyIsEnumerable.call(value, key)) {
        traverse(value[key], depth, seen);
      }
    }
  }
  return value;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const stack = [];
let isWarning = false;
function warn$1(msg, ...args) {
  if (isWarning) return;
  isWarning = true;
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(
      appWarnHandler,
      instance,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        msg + args.map((a) => {
          var _a, _b;
          return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
        }).join(""),
        instance && instance.proxy,
        trace.map(
          ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
  isWarning = false;
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix2 = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix2;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys2 = Object.keys(props);
  keys2.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys2.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString$1(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction$3(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
function callWithErrorHandling(fn2, instance, type, args) {
  try {
    return args ? fn2(...args) : fn2();
  } catch (err) {
    handleError(err, instance, type);
  }
}
function callWithAsyncErrorHandling(fn2, instance, type, args) {
  if (isFunction$3(fn2)) {
    const res = callWithErrorHandling(fn2, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  if (isArray$7(fn2)) {
    const values = [];
    for (let i = 0; i < fn2.length; i++) {
      values.push(callWithAsyncErrorHandling(fn2[i], instance, type, args));
    }
    return values;
  }
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  const { errorHandler, throwUnhandledErrorInProduction } = instance && instance.appContext.config || EMPTY_OBJ;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = `https://vuejs.org/error-reference/#runtime-${type}`;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    if (errorHandler) {
      pauseTracking();
      callWithErrorHandling(errorHandler, null, 10, [
        err,
        exposedInstance,
        errorInfo
      ]);
      resetTracking();
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
}
function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
  if (throwInProd) {
    throw err;
  } else {
    console.error(err);
  }
}
const queue = [];
let flushIndex = -1;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
function nextTick(fn2) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn2 ? p2.then(this ? fn2.bind(this) : fn2) : p2;
}
function findInsertionIndex$1(id2) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id2 || middleJobId === id2 && middleJob.flags & 2) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!(job.flags & 1)) {
    const jobId = getId(job);
    const lastJob = queue[queue.length - 1];
    if (!lastJob || // fast path when the job id is larger than the tail
    !(job.flags & 2) && jobId >= getId(lastJob)) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex$1(jobId), 0, job);
    }
    job.flags |= 1;
    queueFlush();
  }
}
function queueFlush() {
  if (!currentFlushPromise) {
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray$7(cb)) {
    if (activePostFlushCbs && cb.id === -1) {
      activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
    } else if (!(cb.flags & 1)) {
      pendingPostFlushCbs.push(cb);
      cb.flags |= 1;
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(instance, seen, i = flushIndex + 1) {
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.flags & 2) {
      if (instance && cb.id !== instance.uid) {
        continue;
      }
      queue.splice(i, 1);
      i--;
      if (cb.flags & 4) {
        cb.flags &= ~1;
      }
      cb();
      if (!(cb.flags & 4)) {
        cb.flags &= ~1;
      }
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)].sort(
      (a, b) => getId(a) - getId(b)
    );
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      const cb = activePostFlushCbs[postFlushIndex];
      if (cb.flags & 4) {
        cb.flags &= ~1;
      }
      if (!(cb.flags & 8)) cb();
      cb.flags &= ~1;
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
function flushJobs(seen) {
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && !(job.flags & 8)) {
        if (false) ;
        if (job.flags & 4) {
          job.flags &= ~1;
        }
        callWithErrorHandling(
          job,
          job.i,
          job.i ? 15 : 14
        );
        if (!(job.flags & 4)) {
          job.flags &= ~1;
        }
      }
    }
  } finally {
    for (; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job) {
        job.flags &= ~1;
      }
    }
    flushIndex = -1;
    queue.length = 0;
    flushPostFlushCbs();
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs();
    }
  }
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function withCtx(fn2, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx) return fn2;
  if (fn2._n) {
    return fn2;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    let res;
    try {
      res = fn2(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function withDirectives(vnode, directives) {
  if (currentRenderingInstance === null) {
    return vnode;
  }
  const instance = getComponentPublicInstance(currentRenderingInstance);
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
    if (dir) {
      if (isFunction$3(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        traverse(value);
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
const TeleportEndKey = Symbol("_vte");
const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
const isTeleportDeferred = (props) => props && (props.defer || props.defer === "");
const isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
const isTargetMathML = (target) => typeof MathMLElement === "function" && target instanceof MathMLElement;
const resolveTarget = (props, select) => {
  const targetSelector = props && props.to;
  if (isString$1(targetSelector)) {
    if (!select) {
      return null;
    } else {
      const target = select(targetSelector);
      return target;
    }
  } else {
    return targetSelector;
  }
};
const TeleportImpl = {
  name: "Teleport",
  __isTeleport: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
    const {
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      o: { insert, querySelector, createText, createComment }
    } = internals;
    const disabled = isTeleportDisabled(n2.props);
    let { shapeFlag, children, dynamicChildren } = n2;
    if (n1 == null) {
      const placeholder = n2.el = createText("");
      const mainAnchor = n2.anchor = createText("");
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      const mount = (container2, anchor2) => {
        if (shapeFlag & 16) {
          if (parentComponent && parentComponent.isCE) {
            parentComponent.ce._teleportTarget = container2;
          }
          mountChildren(
            children,
            container2,
            anchor2,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      };
      const mountToTarget = () => {
        const target = n2.target = resolveTarget(n2.props, querySelector);
        const targetAnchor = prepareAnchor(target, n2, createText, insert);
        if (target) {
          if (namespace !== "svg" && isTargetSVG(target)) {
            namespace = "svg";
          } else if (namespace !== "mathml" && isTargetMathML(target)) {
            namespace = "mathml";
          }
          if (!disabled) {
            mount(target, targetAnchor);
            updateCssVars(n2, false);
          }
        }
      };
      if (disabled) {
        mount(container, mainAnchor);
        updateCssVars(n2, true);
      }
      if (isTeleportDeferred(n2.props)) {
        queuePostRenderEffect(() => {
          mountToTarget();
          n2.el.__isMounted = true;
        }, parentSuspense);
      } else {
        mountToTarget();
      }
    } else {
      if (isTeleportDeferred(n2.props) && !n1.el.__isMounted) {
        queuePostRenderEffect(() => {
          TeleportImpl.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
          delete n1.el.__isMounted;
        }, parentSuspense);
        return;
      }
      n2.el = n1.el;
      n2.targetStart = n1.targetStart;
      const mainAnchor = n2.anchor = n1.anchor;
      const target = n2.target = n1.target;
      const targetAnchor = n2.targetAnchor = n1.targetAnchor;
      const wasDisabled = isTeleportDisabled(n1.props);
      const currentContainer = wasDisabled ? container : target;
      const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
      if (namespace === "svg" || isTargetSVG(target)) {
        namespace = "svg";
      } else if (namespace === "mathml" || isTargetMathML(target)) {
        namespace = "mathml";
      }
      if (dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          currentContainer,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds
        );
        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(
          n1,
          n2,
          currentContainer,
          currentAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          false
        );
      }
      if (disabled) {
        if (!wasDisabled) {
          moveTeleport(
            n2,
            container,
            mainAnchor,
            internals,
            1
          );
        } else {
          if (n2.props && n1.props && n2.props.to !== n1.props.to) {
            n2.props.to = n1.props.to;
          }
        }
      } else {
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          const nextTarget = n2.target = resolveTarget(
            n2.props,
            querySelector
          );
          if (nextTarget) {
            moveTeleport(
              n2,
              nextTarget,
              null,
              internals,
              0
            );
          }
        } else if (wasDisabled) {
          moveTeleport(
            n2,
            target,
            targetAnchor,
            internals,
            1
          );
        }
      }
      updateCssVars(n2, disabled);
    }
  },
  remove(vnode, parentComponent, parentSuspense, { um: unmount, o: { remove: hostRemove } }, doRemove) {
    const {
      shapeFlag,
      children,
      anchor,
      targetStart,
      targetAnchor,
      target,
      props
    } = vnode;
    if (target) {
      hostRemove(targetStart);
      hostRemove(targetAnchor);
    }
    doRemove && hostRemove(anchor);
    if (shapeFlag & 16) {
      const shouldRemove = doRemove || !isTeleportDisabled(props);
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        unmount(
          child,
          parentComponent,
          parentSuspense,
          shouldRemove,
          !!child.dynamicChildren
        );
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
  if (moveType === 0) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }
  const { el, anchor, shapeFlag, children, props } = vnode;
  const isReorder = moveType === 2;
  if (isReorder) {
    insert(el, container, parentAnchor);
  }
  if (!isReorder || isTeleportDisabled(props)) {
    if (shapeFlag & 16) {
      for (let i = 0; i < children.length; i++) {
        move(
          children[i],
          container,
          parentAnchor,
          2
        );
      }
    }
  }
  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, {
  o: { nextSibling, parentNode, querySelector, insert, createText }
}, hydrateChildren) {
  const target = vnode.target = resolveTarget(
    vnode.props,
    querySelector
  );
  if (target) {
    const disabled = isTeleportDisabled(vnode.props);
    const targetNode = target._lpa || target.firstChild;
    if (vnode.shapeFlag & 16) {
      if (disabled) {
        vnode.anchor = hydrateChildren(
          nextSibling(node),
          vnode,
          parentNode(node),
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
        vnode.targetStart = targetNode;
        vnode.targetAnchor = targetNode && nextSibling(targetNode);
      } else {
        vnode.anchor = nextSibling(node);
        let targetAnchor = targetNode;
        while (targetAnchor) {
          if (targetAnchor && targetAnchor.nodeType === 8) {
            if (targetAnchor.data === "teleport start anchor") {
              vnode.targetStart = targetAnchor;
            } else if (targetAnchor.data === "teleport anchor") {
              vnode.targetAnchor = targetAnchor;
              target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
              break;
            }
          }
          targetAnchor = nextSibling(targetAnchor);
        }
        if (!vnode.targetAnchor) {
          prepareAnchor(target, vnode, createText, insert);
        }
        hydrateChildren(
          targetNode && nextSibling(targetNode),
          vnode,
          target,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
      }
    }
    updateCssVars(vnode, disabled);
  }
  return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = TeleportImpl;
function updateCssVars(vnode, isDisabled2) {
  const ctx = vnode.ctx;
  if (ctx && ctx.ut) {
    let node, anchor;
    if (isDisabled2) {
      node = vnode.el;
      anchor = vnode.anchor;
    } else {
      node = vnode.targetStart;
      anchor = vnode.targetAnchor;
    }
    while (node && node !== anchor) {
      if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
      node = node.nextSibling;
    }
    ctx.ut();
  }
}
function prepareAnchor(target, vnode, createText, insert) {
  const targetStart = vnode.targetStart = createText("");
  const targetAnchor = vnode.targetAnchor = createText("");
  targetStart[TeleportEndKey] = targetAnchor;
  if (target) {
    insert(targetStart, target);
    insert(targetAnchor, target);
  }
  return targetAnchor;
}
const leaveCbKey = Symbol("_leaveCb");
const enterCbKey = Symbol("_enterCb");
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionPropsValidators = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: TransitionHookValidator,
  onEnter: TransitionHookValidator,
  onAfterEnter: TransitionHookValidator,
  onEnterCancelled: TransitionHookValidator,
  // leave
  onBeforeLeave: TransitionHookValidator,
  onLeave: TransitionHookValidator,
  onAfterLeave: TransitionHookValidator,
  onLeaveCancelled: TransitionHookValidator,
  // appear
  onBeforeAppear: TransitionHookValidator,
  onAppear: TransitionHookValidator,
  onAfterAppear: TransitionHookValidator,
  onAppearCancelled: TransitionHookValidator
};
const recursiveGetSubtree = (instance) => {
  const subTree = instance.subTree;
  return subTree.component ? recursiveGetSubtree(subTree.component) : subTree;
};
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: BaseTransitionPropsValidators,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      const child = findNonCommentChild(children);
      const rawProps = toRaw(props);
      const { mode } = rawProps;
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getInnerChild$1(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      let enterHooks = resolveTransitionHooks(
        innerChild,
        rawProps,
        state,
        instance,
        // #11061, ensure enterHooks is fresh after clone
        (hooks) => enterHooks = hooks
      );
      if (innerChild.type !== Comment) {
        setTransitionHooks(innerChild, enterHooks);
      }
      let oldInnerChild = instance.subTree && getInnerChild$1(instance.subTree);
      if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(innerChild, oldInnerChild) && recursiveGetSubtree(instance).type !== Comment) {
        let leavingHooks = resolveTransitionHooks(
          oldInnerChild,
          rawProps,
          state,
          instance
        );
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in" && innerChild.type !== Comment) {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            if (!(instance.job.flags & 8)) {
              instance.update();
            }
            delete leavingHooks.afterLeave;
            oldInnerChild = void 0;
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(
              state,
              oldInnerChild
            );
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el[leaveCbKey] = () => {
              earlyRemove();
              el[leaveCbKey] = void 0;
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
            enterHooks.delayedLeave = () => {
              delayedLeave();
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
          };
        } else {
          oldInnerChild = void 0;
        }
      } else if (oldInnerChild) {
        oldInnerChild = void 0;
      }
      return child;
    };
  }
};
function findNonCommentChild(children) {
  let child = children[0];
  if (children.length > 1) {
    for (const c of children) {
      if (c.type !== Comment) {
        child = c;
        break;
      }
    }
  }
  return child;
}
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance, postClone) {
  const {
    appear,
    mode,
    persisted = false,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onEnterCancelled,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
    onLeaveCancelled,
    onBeforeAppear,
    onAppear,
    onAfterAppear,
    onAppearCancelled
  } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(
      hook,
      instance,
      9,
      args
    );
  };
  const callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook2(hook, args);
    if (isArray$7(hook)) {
      if (hook.every((hook2) => hook2.length <= 1)) done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el[leaveCbKey]) {
        el[leaveCbKey](
          true
          /* cancelled */
        );
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) {
        leavingVNode.el[leaveCbKey]();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el[enterCbKey] = (cancelled) => {
        if (called) return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el[enterCbKey] = void 0;
      };
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el[enterCbKey]) {
        el[enterCbKey](
          true
          /* cancelled */
        );
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      let called = false;
      const done = el[leaveCbKey] = (cancelled) => {
        if (called) return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el[leaveCbKey] = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      const hooks2 = resolveTransitionHooks(
        vnode2,
        props,
        state,
        instance,
        postClone
      );
      if (postClone) postClone(hooks2);
      return hooks2;
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getInnerChild$1(vnode) {
  if (!isKeepAlive(vnode)) {
    if (isTeleport(vnode.type) && vnode.children) {
      return findNonCommentChild(vnode.children);
    }
    return vnode;
  }
  const { shapeFlag, children } = vnode;
  if (children) {
    if (shapeFlag & 16) {
      return children[0];
    }
    if (shapeFlag & 32 && isFunction$3(children.default)) {
      return children.default();
    }
  }
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    vnode.transition = hooks;
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
    if (child.type === Fragment) {
      if (child.patchFlag & 128) keyedFragmentCount++;
      ret = ret.concat(
        getTransitionRawChildren(child.children, keepComment, key)
      );
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, { key }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i = 0; i < ret.length; i++) {
      ret[i].patchFlag = -2;
    }
  }
  return ret;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
  return isFunction$3(options) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))()
  ) : options;
}
function markAsyncBoundary(instance) {
  instance.ids = [instance.ids[0] + instance.ids[2]++ + "-", 0, 0];
}
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray$7(rawRef)) {
    rawRef.forEach(
      (r, i) => setRef(
        r,
        oldRawRef && (isArray$7(oldRawRef) ? oldRawRef[i] : oldRawRef),
        parentSuspense,
        vnode,
        isUnmount
      )
    );
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) {
      setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
    }
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref3 } = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  const rawSetupState = toRaw(setupState);
  const canSetSetupRef = setupState === EMPTY_OBJ ? () => false : (key) => {
    return hasOwn$7(rawSetupState, key);
  };
  if (oldRef != null && oldRef !== ref3) {
    if (isString$1(oldRef)) {
      refs[oldRef] = null;
      if (canSetSetupRef(oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction$3(ref3)) {
    callWithErrorHandling(ref3, owner, 12, [value, refs]);
  } else {
    const _isString = isString$1(ref3);
    const _isRef = isRef(ref3);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? canSetSetupRef(ref3) ? setupState[ref3] : refs[ref3] : ref3.value;
          if (isUnmount) {
            isArray$7(existing) && remove(existing, refValue);
          } else {
            if (!isArray$7(existing)) {
              if (_isString) {
                refs[ref3] = [refValue];
                if (canSetSetupRef(ref3)) {
                  setupState[ref3] = refs[ref3];
                }
              } else {
                ref3.value = [refValue];
                if (rawRef.k) refs[rawRef.k] = ref3.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref3] = value;
          if (canSetSetupRef(ref3)) {
            setupState[ref3] = value;
          }
        } else if (_isRef) {
          ref3.value = value;
          if (rawRef.k) refs[rawRef.k] = value;
        } else ;
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    }
  }
}
getGlobalThis().requestIdleCallback || ((cb) => setTimeout(cb, 1));
getGlobalThis().cancelIdleCallback || ((id2) => clearTimeout(id2));
const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      pauseTracking();
      const reset = setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      reset();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => {
  if (!isInSSRComponentSetup || lifecycle === "sp") {
    injectHook(lifecycle, (...args) => hook(...args), target);
  }
};
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook(
  "bu"
);
const onUpdated = createHook("u");
const onBeforeUnmount = createHook(
  "bum"
);
const onUnmounted = createHook("um");
const onServerPrefetch = createHook(
  "sp"
);
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
const COMPONENTS = "components";
const DIRECTIVES = "directives";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(
        Component,
        false
      );
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = (
      // local registration
      // check instance[type] first which is resolved for options API
      resolve(instance[type] || Component[type], name) || // global registration
      resolve(instance.appContext[type], name)
    );
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve(registry2, name) {
  return registry2 && (registry2[name] || registry2[camelize(name)] || registry2[capitalize(camelize(name))]);
}
function renderList(source, renderItem, cache, index) {
  let ret;
  const cached = cache;
  const sourceIsArray = isArray$7(source);
  if (sourceIsArray || isString$1(source)) {
    const sourceIsReactiveArray = sourceIsArray && isReactive(source);
    let needsWrap = false;
    if (sourceIsReactiveArray) {
      needsWrap = !isShallow(source);
      source = shallowReadArray(source);
    }
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(
        needsWrap ? toReactive(source[i]) : source[i],
        i,
        void 0,
        cached
      );
    }
  } else if (typeof source === "number") {
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, void 0, cached);
    }
  } else if (isObject$9(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(
        source,
        (item, i) => renderItem(item, i, void 0, cached)
      );
    } else {
      const keys2 = Object.keys(source);
      ret = new Array(keys2.length);
      for (let i = 0, l = keys2.length; i < l; i++) {
        const key = keys2[i];
        ret[i] = renderItem(source[key], key, i, cached);
      }
    }
  } else {
    ret = [];
  }
  return ret;
}
function createSlots(slots, dynamicSlots) {
  for (let i = 0; i < dynamicSlots.length; i++) {
    const slot = dynamicSlots[i];
    if (isArray$7(slot)) {
      for (let j = 0; j < slot.length; j++) {
        slots[slot[j].name] = slot[j].fn;
      }
    } else if (slot) {
      slots[slot.name] = slot.key ? (...args) => {
        const res = slot.fn(...args);
        if (res) res.key = slot.key;
        return res;
      } : slot.fn;
    }
  }
  return slots;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.ce || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.ce) {
    if (name !== "default") props.name = name;
    return openBlock(), createBlock(
      Fragment,
      null,
      [createVNode("slot", props, fallback && fallback())],
      64
    );
  }
  let slot = slots[name];
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const slotKey = props.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  validSlotContent && validSlotContent.key;
  const rendered = createBlock(
    Fragment,
    {
      key: (slotKey && !isSymbol$3(slotKey) ? slotKey : `_${name}`) + // #7256 force differentiate fallback content from actual content
      (!validSlotContent && fallback ? "_fb" : "")
    },
    validSlotContent || (fallback ? fallback() : []),
    validSlotContent && slots._ === 1 ? 64 : -2
  );
  if (rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child)) return true;
    if (child.type === Comment) return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
const getPublicInstance = (i) => {
  if (!i) return null;
  if (isStatefulComponent(i)) return getComponentPublicInstance(i);
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => i.props,
    $attrs: (i) => i.attrs,
    $slots: (i) => i.slots,
    $refs: (i) => i.refs,
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $host: (i) => i.ce,
    $emit: (i) => i.emit,
    $options: (i) => resolveMergedOptions(i),
    $forceUpdate: (i) => i.f || (i.f = () => {
      queueJob(i.update);
    }),
    $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i) => instanceWatch.bind(i)
  })
);
const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn$7(state, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    if (key === "__v_skip") {
      return true;
    }
    const { ctx, setupState, data: data2, props, accessCache, type, appContext } = instance;
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data2[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data2 !== EMPTY_OBJ && hasOwn$7(data2, key)) {
        accessCache[key] = 2;
        return data2[key];
      } else if (
        // only cache other properties when instance has declared (thus stable)
        // props
        (normalizedProps = instance.propsOptions[0]) && hasOwn$7(normalizedProps, key)
      ) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn$7(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance.attrs, "get", "");
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn$7(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn$7(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else ;
  },
  set({ _: instance }, key, value) {
    const { data: data2, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data2 !== EMPTY_OBJ && hasOwn$7(data2, key)) {
      data2[key] = value;
      return true;
    } else if (hasOwn$7(instance.props, key)) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      return false;
    } else {
      {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({
    _: { data: data2, setupState, accessCache, ctx, appContext, propsOptions }
  }, key) {
    let normalizedProps;
    return !!accessCache[key] || data2 !== EMPTY_OBJ && hasOwn$7(data2, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn$7(normalizedProps, key) || hasOwn$7(ctx, key) || hasOwn$7(publicPropertiesMap, key) || hasOwn$7(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn$7(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
function normalizePropsOrEmits(props) {
  return isArray$7(props) ? props.reduce(
    (normalized, p2) => (normalized[p2] = null, normalized),
    {}
  ) : props;
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = null;
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction$3(methodHandler)) {
        {
          ctx[key] = methodHandler.bind(publicThis);
        }
      }
    }
  }
  if (dataOptions) {
    const data2 = dataOptions.call(publicThis, publicThis);
    if (!isObject$9(data2)) ;
    else {
      instance.data = reactive(data2);
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get2 = isFunction$3(opt) ? opt.bind(publicThis, publicThis) : isFunction$3(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set2 = !isFunction$3(opt) && isFunction$3(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c = computed({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction$3(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook$1(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray$7(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray$7(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components) instance.components = components;
  if (directives) instance.directives = directives;
  if (serverPrefetch) {
    markAsyncBoundary(instance);
  }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
  if (isArray$7(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject$9(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key,
          opt.default,
          true
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v) => injected.value = v
      });
    } else {
      ctx[key] = injected;
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(
    isArray$7(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type
  );
}
function createWatcher(raw, ctx, publicThis, key) {
  let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString$1(raw)) {
    const handler = ctx[raw];
    if (isFunction$3(handler)) {
      {
        watch(getter, handler);
      }
    }
  } else if (isFunction$3(raw)) {
    {
      watch(getter, raw.bind(publicThis));
    }
  } else if (isObject$9(raw)) {
    if (isArray$7(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = isFunction$3(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction$3(handler)) {
        watch(getter, handler, raw);
      }
    }
  } else ;
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: { optionMergeStrategies }
  } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m) => mergeOptions$1(resolved, m, optionMergeStrategies, true)
      );
    }
    mergeOptions$1(resolved, base, optionMergeStrategies);
  }
  if (isObject$9(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions$1(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions$1(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(
      (m) => mergeOptions$1(to, m, strats, true)
    );
  }
  for (const key in from) {
    if (asMixin && key === "expose") ;
    else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(
      isFunction$3(to) ? to.call(this, this) : to,
      isFunction$3(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray$7(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray$7(to) && isArray$7(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return extend(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from != null ? from : {})
    );
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1$1 = 0;
function createAppAPI(render, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction$3(rootComponent)) {
      rootComponent = extend({}, rootComponent);
    }
    if (rootProps != null && !isObject$9(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new WeakSet();
    const pluginCleanupFns = [];
    let isMounted = false;
    const app2 = context.app = {
      _uid: uid$1$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version: version$1,
      get config() {
        return context.config;
      },
      set config(v) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin)) ;
        else if (plugin && isFunction$3(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app2, ...options);
        } else if (isFunction$3(plugin)) {
          installedPlugins.add(plugin);
          plugin(app2, ...options);
        } else ;
        return app2;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          }
        }
        return app2;
      },
      component(name, component) {
        if (!component) {
          return context.components[name];
        }
        context.components[name] = component;
        return app2;
      },
      directive(name, directive) {
        if (!directive) {
          return context.directives[name];
        }
        context.directives[name] = directive;
        return app2;
      },
      mount(rootContainer, isHydrate, namespace) {
        if (!isMounted) {
          const vnode = app2._ceVNode || createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (namespace === true) {
            namespace = "svg";
          } else if (namespace === false) {
            namespace = void 0;
          }
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, namespace);
          }
          isMounted = true;
          app2._container = rootContainer;
          rootContainer.__vue_app__ = app2;
          return getComponentPublicInstance(vnode.component);
        }
      },
      onUnmount(cleanupFn) {
        pluginCleanupFns.push(cleanupFn);
      },
      unmount() {
        if (isMounted) {
          callWithAsyncErrorHandling(
            pluginCleanupFns,
            app2._instance,
            16
          );
          render(null, app2._container);
          delete app2._container.__vue_app__;
        }
      },
      provide(key, value) {
        context.provides[key] = value;
        return app2;
      },
      runWithContext(fn2) {
        const lastApp = currentApp;
        currentApp = app2;
        try {
          return fn2();
        } finally {
          currentApp = lastApp;
        }
      }
    };
    return app2;
  };
}
let currentApp = null;
function provide(key, value) {
  if (!currentInstance) ;
  else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance || currentApp) {
    const provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction$3(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else ;
  }
}
const internalObjectProto = {};
const createInternalObject = () => Object.create(internalObjectProto);
const isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = createInternalObject();
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: { patchFlag }
  } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn$7(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance,
              false
            );
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn$7(rawProps, key) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(key)) === key || !hasOwn$7(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(
              options,
              rawCurrentProps,
              key,
              void 0,
              instance,
              true
            );
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn$7(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance.attrs, "set", "");
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn$7(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(
        options,
        rawCurrentProps,
        key,
        castValues[key],
        instance,
        !hasOwn$7(castValues, key)
      );
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn$7(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction$3(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          const reset = setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(
            null,
            props
          );
          reset();
        }
      } else {
        value = defaultValue;
      }
      if (instance.ce) {
        instance.ce._setProp(key, value);
      }
    }
    if (opt[
      0
      /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[
        1
        /* shouldCastTrue */
      ] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
const mixinPropsCache = /* @__PURE__ */ new WeakMap();
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = asMixin ? mixinPropsCache : appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction$3(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys2] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys2) needCastKeys.push(...keys2);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$9(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray$7(raw)) {
    for (let i = 0; i < raw.length; i++) {
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray$7(opt) || isFunction$3(opt) ? { type: opt } : extend({}, opt);
        const propType = prop.type;
        let shouldCast = false;
        let shouldCastTrue = true;
        if (isArray$7(propType)) {
          for (let index = 0; index < propType.length; ++index) {
            const type = propType[index];
            const typeName = isFunction$3(type) && type.name;
            if (typeName === "Boolean") {
              shouldCast = true;
              break;
            } else if (typeName === "String") {
              shouldCastTrue = false;
            }
          }
        } else {
          shouldCast = isFunction$3(propType) && propType.name === "Boolean";
        }
        prop[
          0
          /* shouldCast */
        ] = shouldCast;
        prop[
          1
          /* shouldCastTrue */
        ] = shouldCastTrue;
        if (shouldCast || hasOwn$7(prop, "default")) {
          needCastKeys.push(normalizedKey);
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject$9(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$" && !isReservedProp(key)) {
    return true;
  }
  return false;
}
const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value) => isArray$7(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot$1 = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (false) ;
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key)) continue;
    const value = rawSlots[key];
    if (isFunction$3(value)) {
      slots[key] = normalizeSlot$1(key, value, ctx);
    } else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const assignSlots = (slots, children, optimized) => {
  for (const key in children) {
    if (optimized || key !== "_") {
      slots[key] = children[key];
    }
  }
};
const initSlots = (instance, children, optimized) => {
  const slots = instance.slots = createInternalObject();
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      assignSlots(slots, children, optimized);
      if (optimized) {
        def(slots, "_", type, true);
      }
    } else {
      normalizeObjectSlots(children, slots);
    }
  } else if (children) {
    normalizeVNodeSlots(instance, children);
  }
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        assignSlots(slots, children, optimized);
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
        delete slots[key];
      }
    }
  }
};
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
  const target = getGlobalThis();
  target.__VUE__ = true;
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref3, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, namespace);
        }
        break;
      case Fragment:
        processFragment(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        break;
      default:
        if (shapeFlag & 1) {
          processElement(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 6) {
          processComponent(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 64) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (shapeFlag & 128) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else ;
    }
    if (ref3 != null && parentComponent) {
      setRef(ref3, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateText(n2.children),
        container,
        anchor
      );
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateComment(n2.children || ""),
        container,
        anchor
      );
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, namespace) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(
      n2.children,
      container,
      anchor,
      namespace,
      n2.el,
      n2.anchor
    );
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    if (n2.type === "svg") {
      namespace = "svg";
    } else if (n2.type === "math") {
      namespace = "mathml";
    }
    if (n1 == null) {
      mountElement(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      patchElement(
        n1,
        n2,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { props, shapeFlag, transition, dirs } = vnode;
    el = vnode.el = hostCreateElement(
      vnode.type,
      namespace,
      props && props.is,
      props
    );
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(
        vnode.children,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(vnode, namespace),
        slotScopeIds,
        optimized
      );
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (const key in props) {
        if (key !== "value" && !isReservedProp(key)) {
          hostPatchProp(el, key, null, props[key], namespace, parentComponent);
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value, namespace);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = needTransition(parentSuspense, transition);
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
        const parentVNode = parentComponent.vnode;
        setScopeId(
          el,
          parentVNode,
          parentVNode.scopeId,
          parentVNode.slotScopeIds,
          parentComponent.parent
        );
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(
        null,
        child,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) {
      hostSetElementText(el, "");
    }
    if (dynamicChildren) {
      patchBlockChildren(
        n1.dynamicChildren,
        dynamicChildren,
        el,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds
      );
    } else if (!optimized) {
      patchChildren(
        n1,
        n2,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds,
        false
      );
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, oldProps, newProps, parentComponent, namespace);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, namespace);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, namespace, parentComponent);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, oldProps, newProps, parentComponent, namespace);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
        oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          fallbackContainer
        )
      );
      patch(
        oldVNode,
        newVNode,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        true
      );
    }
  };
  const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(
              el,
              key,
              oldProps[key],
              null,
              namespace,
              parentComponent
            );
          }
        }
      }
      for (const key in newProps) {
        if (isReservedProp(key)) continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, namespace, parentComponent);
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
        // #10007
        // such fragment like `<></>` will be compiled into
        // a fragment which doesn't have a children.
        // In this case fallback to an empty array
        n2.children || [],
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          container,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds
        );
        if (
          // #2080 if the stable fragment has a key, it's a <template v-for> that may
          //  get moved around. Make sure all root level vnodes inherit el.
          // #2134 or if it's a component root, it may also get moved around
          // as the component is being moved.
          n2.key != null || parentComponent && n2 === parentComponent.subTree
        ) {
          traverseStaticChildren(
            n1,
            n2,
            true
            /* shallow */
          );
        }
      } else {
        patchChildren(
          n1,
          n2,
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(
          n2,
          container,
          anchor,
          namespace,
          optimized
        );
      } else {
        mountComponent(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          optimized
        );
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
    const instance = initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    );
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      setupComponent(instance, false, optimized);
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
    } else {
      setupRenderEffect(
        instance,
        initialVNode,
        container,
        anchor,
        parentSuspense,
        namespace,
        optimized
      );
    }
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else {
        instance.next = n2;
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent, root: root2, type } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            instance.subTree = renderComponentRoot(instance);
            hydrateNode(
              el,
              instance.subTree,
              instance,
              parentSuspense,
              null
            );
          };
          if (isAsyncWrapperVNode && type.__asyncHydrate) {
            type.__asyncHydrate(
              el,
              instance,
              hydrateSubTree
            );
          } else {
            hydrateSubTree();
          }
        } else {
          if (root2.ce) {
            root2.ce._injectChildStyle(type);
          }
          const subTree = instance.subTree = renderComponentRoot(instance);
          patch(
            null,
            subTree,
            container,
            anchor,
            instance,
            parentSuspense,
            namespace
          );
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
            parentSuspense
          );
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent, vnode } = instance;
        {
          const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
          if (nonHydratedAsyncRoot) {
            if (next) {
              next.el = vnode.el;
              updateComponentPreRender(instance, next, optimized);
            }
            nonHydratedAsyncRoot.asyncDep.then(() => {
              if (!instance.isUnmounted) {
                componentUpdateFn();
              }
            });
            return;
          }
        }
        let originNext = next;
        let vnodeHook;
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        const nextTree = renderComponentRoot(instance);
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport
          hostParentNode(prevTree.el),
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          namespace
        );
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, next, vnode),
            parentSuspense
          );
        }
      }
    };
    instance.scope.on();
    const effect2 = instance.effect = new ReactiveEffect(componentUpdateFn);
    instance.scope.off();
    const update = instance.update = effect2.run.bind(effect2);
    const job = instance.job = effect2.runIfDirty.bind(effect2);
    job.i = instance;
    job.id = instance.uid;
    effect2.scheduler = () => queueJob(job);
    toggleRecurse(instance, true);
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(instance);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(
        c1[i],
        nextChild,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
    if (oldLength > newLength) {
      unmountChildren(
        c1,
        parentComponent,
        parentSuspense,
        true,
        false,
        commonLength
      );
    } else {
      mountChildren(
        c2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized,
        commonLength
      );
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(
            null,
            c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(
            prevChild,
            c2[newIndex],
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(
            null,
            nextChild,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition2) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove22 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove22();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove22, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const {
      type,
      props,
      ref: ref3,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs,
      cacheIndex
    } = vnode;
    if (patchFlag === -2) {
      optimized = false;
    }
    if (ref3 != null) {
      setRef(ref3, null, parentSuspense, vnode, true);
    }
    if (cacheIndex != null) {
      parentComponent.renderCache[cacheIndex] = void 0;
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(
          vnode,
          parentComponent,
          parentSuspense,
          internals,
          doRemove
        );
      } else if (dynamicChildren && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !dynamicChildren.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(
          dynamicChildren,
          parentComponent,
          parentSuspense,
          false,
          true
        );
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    const { bum, scope, job, subTree, um, m, a } = instance;
    invalidateMount(m);
    invalidateMount(a);
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (job) {
      job.flags |= 8;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    const el = hostNextSibling(vnode.anchor || vnode.el);
    const teleportEnd = el && el[TeleportEndKey];
    return teleportEnd ? hostNextSibling(teleportEnd) : el;
  };
  let isFlushing = false;
  const render = (vnode, container, namespace) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(
        container._vnode || null,
        vnode,
        container,
        null,
        null,
        null,
        namespace
      );
    }
    container._vnode = vnode;
    if (!isFlushing) {
      isFlushing = true;
      flushPreFlushCbs();
      flushPostFlushCbs();
      isFlushing = false;
    }
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  return {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}
function resolveChildrenNamespace({ type, props }, currentNamespace) {
  return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect: effect2, job }, allowed) {
  if (allowed) {
    effect2.flags |= 32;
    job.flags |= 4;
  } else {
    effect2.flags &= ~32;
    job.flags &= ~4;
  }
}
function needTransition(parentSuspense, transition) {
  return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray$7(ch1) && isArray$7(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow && c2.patchFlag !== -2)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        c2.el = c1.el;
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p2[v];
  }
  return result;
}
function locateNonHydratedAsyncRoot(instance) {
  const subComponent = instance.subTree.component;
  if (subComponent) {
    if (subComponent.asyncDep && !subComponent.asyncResolved) {
      return subComponent;
    } else {
      return locateNonHydratedAsyncRoot(subComponent);
    }
  }
}
function invalidateMount(hooks) {
  if (hooks) {
    for (let i = 0; i < hooks.length; i++)
      hooks[i].flags |= 8;
  }
}
const ssrContextKey = Symbol.for("v-scx");
const useSSRContext = () => {
  {
    const ctx = inject(ssrContextKey);
    return ctx;
  }
};
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, options = EMPTY_OBJ) {
  const { immediate, deep, flush, once } = options;
  const baseWatchOptions = extend({}, options);
  const runsImmediately = cb && immediate || !cb && flush !== "post";
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else if (!runsImmediately) {
      const watchStopHandle = () => {
      };
      watchStopHandle.stop = NOOP;
      watchStopHandle.resume = NOOP;
      watchStopHandle.pause = NOOP;
      return watchStopHandle;
    }
  }
  const instance = currentInstance;
  baseWatchOptions.call = (fn2, type, args) => callWithAsyncErrorHandling(fn2, instance, type, args);
  let isPre = false;
  if (flush === "post") {
    baseWatchOptions.scheduler = (job) => {
      queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else if (flush !== "sync") {
    isPre = true;
    baseWatchOptions.scheduler = (job, isFirstRun) => {
      if (isFirstRun) {
        job();
      } else {
        queueJob(job);
      }
    };
  }
  baseWatchOptions.augmentJob = (job) => {
    if (cb) {
      job.flags |= 4;
    }
    if (isPre) {
      job.flags |= 2;
      if (instance) {
        job.id = instance.uid;
        job.i = instance;
      }
    }
  };
  const watchHandle = watch$1(source, cb, baseWatchOptions);
  if (isInSSRComponentSetup) {
    if (ssrCleanup) {
      ssrCleanup.push(watchHandle);
    } else if (runsImmediately) {
      watchHandle();
    }
  }
  return watchHandle;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString$1(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction$3(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const reset = setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  reset();
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
const getModelModifiers = (props, modelName) => {
  return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`];
};
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted) return;
  const props = instance.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modifiers = isModelListener2 && getModelModifiers(props, event.slice(7));
  if (modifiers) {
    if (modifiers.trim) {
      args = rawArgs.map((a) => isString$1(a) ? a.trim() : a);
    }
    if (modifiers.number) {
      args = rawArgs.map(looseToNumber);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(
      handler,
      instance,
      6,
      args
    );
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(
      onceHandler,
      instance,
      6,
      args
    );
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction$3(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$9(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray$7(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject$9(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn$7(options, key[0].toLowerCase() + key.slice(1)) || hasOwn$7(options, hyphenate(key)) || hasOwn$7(options, key);
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance) {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit: emit2,
    render,
    renderCache,
    props,
    data: data2,
    setupState,
    ctx,
    inheritAttrs
  } = instance;
  const prev = setCurrentRenderingInstance(instance);
  let result;
  let fallthroughAttrs;
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      const thisProxy = false ? new Proxy(proxyToUse, {
        get(target, key, receiver) {
          warn$1(
            `Property '${String(
              key
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          );
          return Reflect.get(target, key, receiver);
        }
      }) : proxyToUse;
      result = normalizeVNode(
        render.call(
          thisProxy,
          proxyToUse,
          renderCache,
          false ? shallowReadonly(props) : props,
          setupState,
          data2,
          ctx
        )
      );
      fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      if (false) ;
      result = normalizeVNode(
        render2.length > 1 ? render2(
          false ? shallowReadonly(props) : props,
          false ? {
            get attrs() {
              markAttrsAccessed();
              return shallowReadonly(attrs);
            },
            slots,
            emit: emit2
          } : { attrs, slots, emit: emit2 }
        ) : render2(
          false ? shallowReadonly(props) : props,
          null
        )
      );
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root2 = result;
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys2 = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root2;
    if (keys2.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys2.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(
            fallthroughAttrs,
            propsOptions
          );
        }
        root2 = cloneVNode(root2, fallthroughAttrs, false, true);
      }
    }
  }
  if (vnode.dirs) {
    root2 = cloneVNode(root2, null, false, true);
    root2.dirs = root2.dirs ? root2.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    setTransitionHooks(root2, vnode.transition);
  }
  {
    result = root2;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent) {
    const root2 = parent.subTree;
    if (root2.suspense && root2.suspense.activeBranch === vnode) {
      root2.el = vnode.el;
    }
    if (root2 === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    } else {
      break;
    }
  }
}
const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn2, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray$7(fn2)) {
      suspense.effects.push(...fn2);
    } else {
      suspense.effects.push(fn2);
    }
  } else {
    queuePostFlushCb(fn2);
  }
}
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value, inVOnce = false) {
  isBlockTreeEnabled += value;
  if (value < 0 && currentBlock && inVOnce) {
    currentBlock.hasOnce = true;
  }
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(
    createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
    )
  );
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(
    createVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      true
    )
  );
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({
  ref: ref3,
  ref_key,
  ref_for
}) => {
  if (typeof ref3 === "number") {
    ref3 = "" + ref3;
  }
  return ref3 != null ? isString$1(ref3) || isRef(ref3) || isFunction$3(ref3) ? { i: currentRenderingInstance, r: ref3, k: ref_key, f: !!ref_for } : ref3 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString$1(children) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(
      type,
      props,
      true
      /* mergeRef: true */
    );
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag = -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString$1(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject$9(style)) {
      if (isProxy(style) && !isArray$7(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString$1(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject$9(type) ? 4 : isFunction$3(type) ? 2 : 0;
  return createBaseVNode(
    type,
    props,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    true
  );
}
function guardReactiveProps(props) {
  if (!props) return null;
  return isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
  const { props, ref: ref3, patchFlag, children, transition } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      mergeRef && ref3 ? isArray$7(ref3) ? ref3.concat(normalizeRef(extraProps)) : [ref3, normalizeRef(extraProps)] : normalizeRef(extraProps)
    ) : ref3,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children,
    target: vnode.target,
    targetStart: vnode.targetStart,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  if (transition && cloneTransition) {
    setTransitionHooks(
      cloned,
      transition.clone(cloned)
    );
  }
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray$7(child)) {
    return createVNode(
      Fragment,
      null,
      // #3666, avoid reference pollution when reusing vnode
      child.slice()
    );
  } else if (isVNode(child)) {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray$7(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !isInternalObject(children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction$3(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray$7(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
const emptyAppContext = createAppContext();
let uid$3 = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid$3++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    ids: parent ? parent.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = { _: instance };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
{
  const g = getGlobalThis();
  const registerGlobalSetter = (key, setter) => {
    let setters;
    if (!(setters = g[key])) setters = g[key] = [];
    setters.push(setter);
    return (v) => {
      if (setters.length > 1) setters.forEach((set2) => set2(v));
      else setters[0](v);
    };
  };
  internalSetCurrentInstance = registerGlobalSetter(
    `__VUE_INSTANCE_SETTERS__`,
    (v) => currentInstance = v
  );
  setInSSRSetupState = registerGlobalSetter(
    `__VUE_SSR_SETTERS__`,
    (v) => isInSSRComponentSetup = v
  );
}
const setCurrentInstance = (instance) => {
  const prev = currentInstance;
  internalSetCurrentInstance(instance);
  instance.scope.on();
  return () => {
    instance.scope.off();
    internalSetCurrentInstance(prev);
  };
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false, optimized = false) {
  isSSR && setInSSRSetupState(isSSR);
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children, optimized);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isSSR && setInSSRSetupState(false);
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
  const { setup } = Component;
  if (setup) {
    pauseTracking();
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    const reset = setCurrentInstance(instance);
    const setupResult = callWithErrorHandling(
      setup,
      instance,
      0,
      [
        instance.props,
        setupContext
      ]
    );
    const isAsyncSetup = isPromise(setupResult);
    resetTracking();
    reset();
    if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) {
      markAsyncBoundary(instance);
    }
    if (isAsyncSetup) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction$3(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject$9(setupResult)) {
    instance.setupState = proxyRefs(setupResult);
  } else ;
  finishComponentSetup(instance, isSSR);
}
let compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template || resolveMergedOptions(instance).template;
      if (template) {
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend(
          extend(
            {
              isCustomElement,
              delimiters
            },
            compilerOptions
          ),
          componentCompilerOptions
        );
        Component.render = compile(template, finalCompilerOptions);
      }
    }
    instance.render = Component.render || NOOP;
  }
  {
    const reset = setCurrentInstance(instance);
    pauseTracking();
    try {
      applyOptions(instance);
    } finally {
      resetTracking();
      reset();
    }
  }
}
const attrsProxyHandlers = {
  get(target, key) {
    track(target, "get", "");
    return target[key];
  }
};
function createSetupContext(instance) {
  const expose = (exposed) => {
    instance.exposed = exposed || {};
  };
  {
    return {
      attrs: new Proxy(instance.attrs, attrsProxyHandlers),
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getComponentPublicInstance(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  } else {
    return instance.proxy;
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return isFunction$3(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match2 = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match2) {
      name = match2[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry2) => {
      for (const key in registry2) {
        if (registry2[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(
      instance.components || instance.parent.type.components
    ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return isFunction$3(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  const c = computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
  return c;
};
function h(type, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if (isObject$9(propsOrChildren) && !isArray$7(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}
const version$1 = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let policy = void 0;
const tt = typeof window !== "undefined" && window.trustedTypes;
if (tt) {
  try {
    policy = /* @__PURE__ */ tt.createPolicy("vue", {
      createHTML: (val) => val
    });
  } catch (e) {
  }
}
const unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
const svgNS = "http://www.w3.org/2000/svg";
const mathmlNS = "http://www.w3.org/1998/Math/MathML";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, namespace, is, props) => {
    const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id2) {
    el.setAttribute(id2, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(content, parent, anchor, namespace, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling)) break;
      }
    } else {
      templateContainer.innerHTML = unsafeToTrustedHTML(
        namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content
      );
      const template = templateContainer.content;
      if (namespace === "svg" || namespace === "mathml") {
        const wrapper2 = template.firstChild;
        while (wrapper2.firstChild) {
          template.appendChild(wrapper2.firstChild);
        }
        template.removeChild(wrapper2);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      // first
      before ? before.nextSibling : parent.firstChild,
      // last
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
const TRANSITION = "transition";
const ANIMATION = "animation";
const vtcKey = Symbol("_vtc");
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
const TransitionPropsValidators = /* @__PURE__ */ extend(
  {},
  BaseTransitionPropsValidators,
  DOMTransitionPropsValidators
);
const decorate$1 = (t) => {
  t.displayName = "Transition";
  t.props = TransitionPropsValidators;
  return t;
};
const Transition = /* @__PURE__ */ decorate$1(
  (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots)
);
const callHook = (hook, args = []) => {
  if (isArray$7(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? isArray$7(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const {
    name = "v",
    type,
    duration,
    enterFromClass = `${name}-enter-from`,
    enterActiveClass = `${name}-enter-active`,
    enterToClass = `${name}-enter-to`,
    appearFromClass = enterFromClass,
    appearActiveClass = enterActiveClass,
    appearToClass = enterToClass,
    leaveFromClass = `${name}-leave-from`,
    leaveActiveClass = `${name}-leave-active`,
    leaveToClass = `${name}-leave-to`
  } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const {
    onBeforeEnter,
    onEnter,
    onEnterCancelled,
    onLeave,
    onLeaveCancelled,
    onBeforeAppear = onBeforeEnter,
    onAppear = onEnter,
    onAppearCancelled = onEnterCancelled
  } = baseProps;
  const finishEnter = (el, isAppear, done, isCancelled) => {
    el._enterCancelled = isCancelled;
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve2);
        }
      });
    };
  };
  return extend(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      el._isLeaving = true;
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      if (!el._enterCancelled) {
        forceReflow();
        addTransitionClass(el, leaveActiveClass);
      } else {
        addTransitionClass(el, leaveActiveClass);
        forceReflow();
      }
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve2);
        }
      });
      callHook(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false, void 0, true);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true, void 0, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject$9(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}
function NumberOf(val) {
  const res = toNumber(val);
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el[vtcKey] = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id2 = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id2 === el._endId) {
      resolve2();
    }
  };
  if (explicitTimeout != null) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve2();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
  const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
  const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(
    getStyleProperties(`${TRANSITION}Property`).toString()
  );
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  if (s === "auto") return 0;
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}
function patchClass(el, value, isSVG) {
  const transitionClasses = el[vtcKey];
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
const vShowOriginalDisplay = Symbol("_vod");
const vShowHidden = Symbol("_vsh");
const CSS_VAR_TEXT = Symbol("");
const displayRE = /(^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = isString$1(next);
  let hasControlledDisplay = false;
  if (next && !isCssString) {
    if (prev) {
      if (!isString$1(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      } else {
        for (const prevStyle of prev.split(";")) {
          const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      }
    }
    for (const key in next) {
      if (key === "display") {
        hasControlledDisplay = true;
      }
      setStyle(style, key, next[key]);
    }
  } else {
    if (isCssString) {
      if (prev !== next) {
        const cssVarText = style[CSS_VAR_TEXT];
        if (cssVarText) {
          next += ";" + cssVarText;
        }
        style.cssText = next;
        hasControlledDisplay = displayRE.test(next);
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
  }
  if (vShowOriginalDisplay in el) {
    el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
    if (el[vShowHidden]) {
      style.display = "none";
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray$7(val)) {
    val.forEach((v) => setStyle(style, name, v));
  } else {
    if (val == null) val = "";
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(
          hyphenate(prefixed),
          val.replace(importantRE, ""),
          "important"
        );
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance, isBoolean = isSpecialBooleanAttr(key)) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (value == null || isBoolean && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(
        key,
        isBoolean ? "" : isSymbol$3(value) ? String(value) : value
      );
    }
  }
}
function patchDOMProp(el, key, value, parentComponent, attrName) {
  if (key === "innerHTML" || key === "textContent") {
    if (value != null) {
      el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
    }
    return;
  }
  const tag = el.tagName;
  if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
  !tag.includes("-")) {
    const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
    const newValue = value == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      el.type === "checkbox" ? "on" : ""
    ) : String(value);
    if (oldValue !== newValue || !("_value" in el)) {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    el._value = value;
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
  }
  needRemove && el.removeAttribute(attrName || key);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
const veiKey = Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el[veiKey] || (el[veiKey] = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(
        nextValue,
        instance
      );
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options];
}
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    callWithAsyncErrorHandling(
      patchStopImmediatePropagation(e, invoker.value),
      instance,
      5,
      [e]
    );
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray$7(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map(
      (fn2) => (e2) => !e2._stopped && fn2 && fn2(e2)
    );
  } else {
    return value;
  }
}
const isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
const patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
  const isSVG = namespace === "svg";
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue);
    if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) {
      patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
    }
  } else if (
    // #11081 force set props for possible async custom element
    el._isVueCE && (/[A-Z]/.test(key) || !isString$1(nextValue))
  ) {
    patchDOMProp(el, camelize(key), nextValue, parentComponent, key);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && isNativeOn(key) && isFunction$3(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (key === "width" || key === "height") {
    const tag = el.tagName;
    if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
      return false;
    }
  }
  if (isNativeOn(key) && isString$1(value)) {
    return false;
  }
  return key in el;
}
const getModelAssigner = (vnode) => {
  const fn2 = vnode.props["onUpdate:modelValue"] || false;
  return isArray$7(fn2) ? (value) => invokeArrayFns(fn2, value) : fn2;
};
function onCompositionStart(e) {
  e.target.composing = true;
}
function onCompositionEnd(e) {
  const target = e.target;
  if (target.composing) {
    target.composing = false;
    target.dispatchEvent(new Event("input"));
  }
}
const assignKey = Symbol("_assign");
const vModelText = {
  created(el, { modifiers: { lazy, trim, number } }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    const castToNumber = number || vnode.props && vnode.props.type === "number";
    addEventListener(el, lazy ? "change" : "input", (e) => {
      if (e.target.composing) return;
      let domValue = el.value;
      if (trim) {
        domValue = domValue.trim();
      }
      if (castToNumber) {
        domValue = looseToNumber(domValue);
      }
      el[assignKey](domValue);
    });
    if (trim) {
      addEventListener(el, "change", () => {
        el.value = el.value.trim();
      });
    }
    if (!lazy) {
      addEventListener(el, "compositionstart", onCompositionStart);
      addEventListener(el, "compositionend", onCompositionEnd);
      addEventListener(el, "change", onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(el, { value }) {
    el.value = value == null ? "" : value;
  },
  beforeUpdate(el, { value, oldValue, modifiers: { lazy, trim, number } }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (el.composing) return;
    const elValue = (number || el.type === "number") && !/^0\d/.test(el.value) ? looseToNumber(el.value) : el.value;
    const newValue = value == null ? "" : value;
    if (elValue === newValue) {
      return;
    }
    if (document.activeElement === el && el.type !== "range") {
      if (lazy && value === oldValue) {
        return;
      }
      if (trim && el.value.trim() === newValue) {
        return;
      }
    }
    el.value = newValue;
  }
};
const vModelCheckbox = {
  // #4096 array checkboxes need to be deep traversed
  deep: true,
  created(el, _, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      const modelValue = el._modelValue;
      const elementValue = getValue$2(el);
      const checked = el.checked;
      const assign2 = el[assignKey];
      if (isArray$7(modelValue)) {
        const index = looseIndexOf(modelValue, elementValue);
        const found = index !== -1;
        if (checked && !found) {
          assign2(modelValue.concat(elementValue));
        } else if (!checked && found) {
          const filtered = [...modelValue];
          filtered.splice(index, 1);
          assign2(filtered);
        }
      } else if (isSet$1(modelValue)) {
        const cloned = new Set(modelValue);
        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned.delete(elementValue);
        }
        assign2(cloned);
      } else {
        assign2(getCheckboxValue(el, checked));
      }
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: setChecked,
  beforeUpdate(el, binding, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};
function setChecked(el, { value, oldValue }, vnode) {
  el._modelValue = value;
  let checked;
  if (isArray$7(value)) {
    checked = looseIndexOf(value, vnode.props.value) > -1;
  } else if (isSet$1(value)) {
    checked = value.has(vnode.props.value);
  } else {
    if (value === oldValue) return;
    checked = looseEqual(value, getCheckboxValue(el, true));
  }
  if (el.checked !== checked) {
    el.checked = checked;
  }
}
const vModelRadio = {
  created(el, { value }, vnode) {
    el.checked = looseEqual(value, vnode.props.value);
    el[assignKey] = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      el[assignKey](getValue$2(el));
    });
  },
  beforeUpdate(el, { value, oldValue }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (value !== oldValue) {
      el.checked = looseEqual(value, vnode.props.value);
    }
  }
};
const vModelSelect = {
  // <select multiple> value need to be deep traversed
  deep: true,
  created(el, { value, modifiers: { number } }, vnode) {
    const isSetModel = isSet$1(value);
    addEventListener(el, "change", () => {
      const selectedVal = Array.prototype.filter.call(el.options, (o) => o.selected).map(
        (o) => number ? looseToNumber(getValue$2(o)) : getValue$2(o)
      );
      el[assignKey](
        el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]
      );
      el._assigning = true;
      nextTick(() => {
        el._assigning = false;
      });
    });
    el[assignKey] = getModelAssigner(vnode);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(el, { value }) {
    setSelected(el, value);
  },
  beforeUpdate(el, _binding, vnode) {
    el[assignKey] = getModelAssigner(vnode);
  },
  updated(el, { value }) {
    if (!el._assigning) {
      setSelected(el, value);
    }
  }
};
function setSelected(el, value) {
  const isMultiple = el.multiple;
  const isArrayValue = isArray$7(value);
  if (isMultiple && !isArrayValue && !isSet$1(value)) {
    return;
  }
  for (let i = 0, l = el.options.length; i < l; i++) {
    const option = el.options[i];
    const optionValue = getValue$2(option);
    if (isMultiple) {
      if (isArrayValue) {
        const optionType = typeof optionValue;
        if (optionType === "string" || optionType === "number") {
          option.selected = value.some((v) => String(v) === String(optionValue));
        } else {
          option.selected = looseIndexOf(value, optionValue) > -1;
        }
      } else {
        option.selected = value.has(optionValue);
      }
    } else if (looseEqual(getValue$2(option), value)) {
      if (el.selectedIndex !== i) el.selectedIndex = i;
      return;
    }
  }
  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
}
function getValue$2(el) {
  return "_value" in el ? el._value : el.value;
}
function getCheckboxValue(el, checked) {
  const key = checked ? "_trueValue" : "_falseValue";
  return key in el ? el[key] : checked;
}
const vModelDynamic = {
  created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "created");
  },
  mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "mounted");
  },
  beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
  },
  updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "updated");
  }
};
function resolveDynamicModel(tagName, type) {
  switch (tagName) {
    case "SELECT":
      return vModelSelect;
    case "TEXTAREA":
      return vModelText;
    default:
      switch (type) {
        case "checkbox":
          return vModelCheckbox;
        case "radio":
          return vModelRadio;
        default:
          return vModelText;
      }
  }
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
  const modelToUse = resolveDynamicModel(
    el.tagName,
    vnode.props && vnode.props.type
  );
  const fn2 = modelToUse[hook];
  fn2 && fn2(el, binding, vnode, prevVNode);
}
const systemModifiers = ["ctrl", "shift", "alt", "meta"];
const modifierGuards = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
};
const withModifiers = (fn2, modifiers) => {
  const cache = fn2._withMods || (fn2._withMods = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = (event, ...args) => {
    for (let i = 0; i < modifiers.length; i++) {
      const guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }
    return fn2(event, ...args);
  });
};
const keyNames = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
};
const withKeys = (fn2, modifiers) => {
  const cache = fn2._withKeys || (fn2._withKeys = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = (event) => {
    if (!("key" in event)) {
      return;
    }
    const eventKey = hyphenate(event.key);
    if (modifiers.some(
      (k) => k === eventKey || keyNames[k] === eventKey
    )) {
      return fn2(event);
    }
  });
};
const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
let renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
const createApp = (...args) => {
  const app2 = ensureRenderer().createApp(...args);
  const { mount } = app2;
  app2.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container) return;
    const component = app2._component;
    if (!isFunction$3(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    if (container.nodeType === 1) {
      container.textContent = "";
    }
    const proxy = mount(container, false, resolveRootNamespace(container));
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app2;
};
function resolveRootNamespace(container) {
  if (container instanceof SVGElement) {
    return "svg";
  }
  if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
    return "mathml";
  }
}
function normalizeContainer(container) {
  if (isString$1(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
function injectSpritesheet() {
  const spritesheet = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false"><symbol id="f-icon-triangle" xml:space="preserve" viewBox="0 0 512 512"><path d="M215.1 75.68c18.17-31.5 63.63-31.5 81.8 0l177.95 308.45c18.16 31.48-4.56 70.82-40.9 70.82H78.05c-36.34 0-59.06-39.34-40.9-70.82z" style="fill:currentColor"/><path d="m331.89 66.64 165.1 286.16c33.7 58.41-8.46 131.4-75.89 131.4H90.91c-67.43 0-109.59-72.99-75.89-131.4L180.11 66.64c33.72-58.44 118.06-58.44 151.78 0m-37.94 21.89c-16.86-29.22-59.03-29.22-75.89 0L52.96 374.7c-16.85 29.2 4.23 65.7 37.95 65.7H421.1c33.72 0 54.79-36.49 37.95-65.7z" style="fill-rule:evenodd;clip-rule:evenodd"/></symbol><symbol id="f-icon-trashcan" xml:space="preserve" viewBox="0 0 512 512"><path fill="currentColor" d="M387.4 133H140.7c-25.2 0-44.9 19.6-44.9 44.9l22.4 286c0 25.2 19.6 44.9 44.9 44.9H365c25.2 0 44.9-19.6 44.9-44.9l22.4-283.2c0-28.1-19.7-47.7-44.9-47.7M205.2 435.8c0 11.2-8.4 19.6-19.6 19.6S166 447 166 435.8V203.1c0-11.2 8.4-19.6 19.6-19.6s19.6 8.4 19.6 19.6zm78.5 2.8c0 11.2-8.4 19.6-19.6 19.6s-19.6-8.4-19.6-19.6V203.1c0-11.2 8.4-19.6 19.6-19.6s19.6 8.4 19.6 19.6zm81.3 0c0 11.2-8.4 19.6-19.6 19.6s-22.4-8.4-22.4-19.6V205.9c0-11.2 8.4-19.6 19.6-19.6s19.6 8.4 19.6 19.6v232.7zM437.9 68.5H365V23.7C365 12.5 356.6 4 345.3 4H182.7c-11.2 0-19.6 8.4-19.6 19.6v44.9H90.2C79 68.5 70.6 79.7 70.6 91s8.4 19.6 19.6 19.6h347.7c11.2 0 19.6-8.4 19.6-19.6s-8.4-22.5-19.6-22.5M205.2 46.1H323v25.2H205.2z"/></symbol><symbol id="f-icon-success" viewBox="0 0 512 512"><path fill="currentColor" d="m173.898 439.404-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001"/></symbol><symbol id="f-icon-sort" viewBox="0 0 512 512"><path fill="currentColor" d="M137 288h238c21.4 0 32.1 25.9 17 41L273 448c-9.4 9.4-24.6 9.4-33.9 0L120 329c-15.1-15.1-4.4-41 17-41m255-105L273 64c-9.4-9.4-24.6-9.4-33.9 0L120 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41"/></symbol><symbol id="f-icon-search" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="currentColor" d="M505 442.7 405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34M208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128"/></symbol><symbol id="f-icon-plus" viewBox="0 0 512 512"><path fill="currentColor" d="M448 208H304V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H64c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"/></symbol><symbol id="f-icon-pic" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--><path fill="currentColor" d="M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm323.8 106.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6-26.5-33.1c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4S78.8 416 88 416h336c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7zM112 192c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48"/></symbol><symbol id="f-icon-pen" viewBox="0 0 512 512"><path fill="currentColor" d="m290.74 93.24 128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22zm207.2-19.06-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91"/></symbol><symbol id="f-icon-pdf" viewBox="-64 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0zm192 0v128h128zM64 224h24c30.9 0 56 25.1 56 56s-25.1 56-56 56h-8v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V240c0-8.8 7.2-16 16-16m24 80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v48zm72-64c0-8.8 7.2-16 16-16h24c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-24c-8.8 0-16-7.2-16-16zm32 112h8c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-8zm96-128h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V240c0-8.8 7.2-16 16-16"/></symbol><symbol id="f-icon-paper-clip" viewBox="0 0 512 512"><path fill="currentColor" d="M75.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L286.392 34c44.316-45.332 116.351-45.336 160.671 0 43.89 44.894 43.943 117.329 0 162.276L264.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L203.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292 4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798-19.189-19.627-49.957-19.637-69.154 0L122.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313 34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485"/></symbol><symbol id="f-icon-new-window" xml:space="preserve" viewBox="0 0 512 512"><path d="M455.1 464.4H46.2V55.5h166.6V8.7H-1V512h503.3V298.2h-47.2z" style="fill:gray"/><path d="M460.3 0H317v52.1h105.9L275.3 199.9l37.5 37.1L460.3 89.6v106.2h52.1V0z" style="fill:#1b1e23"/></symbol><symbol id="f-icon-i" xml:space="preserve" x="0" y="0" version="1.1" viewBox="0 0 512 512"><style>.i{fill:currentColor}</style><path d="M228.25 243.12c0-15.33 12.42-27.75 27.75-27.75s27.75 12.43 27.75 27.75v117.19c0 15.33-12.43 27.75-27.75 27.75-15.33 0-27.75-12.43-27.75-27.75zM285.09 153.03c0 16.07-13.02 29.09-29.09 29.09s-29.09-13.02-29.09-29.09 13.02-29.09 29.09-29.09 29.09 13.02 29.09 29.09" class="i"/></symbol><symbol id="f-icon-file" viewBox="-64 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--><path fill="currentColor" d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm384 64H256V0z"/></symbol><symbol id="f-icon-error" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--><path fill="currentColor" d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7.2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8.2-40.1l216-368C228.7 39.5 241.8 32 256 32m0 128c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24m32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32"/></symbol><symbol id="f-icon-doc" viewBox="-64 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0zm192 0v128h128zM111 257.1l26.8 89.2 31.6-90.3c3.4-9.6 12.5-16.1 22.7-16.1s19.3 6.4 22.7 16.1l31.6 90.3 26.6-89.2c3.8-12.7 17.2-19.9 29.9-16.1s19.9 17.2 16.1 29.9l-48 160c-3 10-12.1 16.9-22.4 17.1s-19.8-6.2-23.2-16.1L192 336.6l-33.3 95.3c-3.4 9.8-12.8 16.3-23.2 16.1s-19.5-7.1-22.4-17.1l-48-160c-3.8-12.7 3.4-26.1 16.1-29.9s26.1 3.4 29.9 16.1z"/></symbol><symbol id="f-icon-dash" viewBox="0 0 512 512"><path fill="currentColor" d="M448 208H64c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"/></symbol><symbol id="f-icon-cross" fill="none" viewBox="0 0 13 13"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m1 1 11 11M12 1 1 12"/></symbol><symbol id="f-icon-close" viewBox="0 0 512 512"><path fill="currentColor" d="m322.72 256 100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L256 189.28 155.93 89.21c-12.28-12.28-32.19-12.28-44.48 0l-22.24 22.24c-12.28 12.28-12.28 32.19 0 44.48L189.28 256 89.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L256 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48z"/></symbol><symbol id="f-icon-circle" xml:space="preserve" viewBox="0 0 512 512"><path d="M489.5 256c0 129-104.6 233.5-233.5 233.5C127 489.5 22.5 385 22.5 256S127 22.5 256 22.5 489.5 127 489.5 256" style="fill:currentColor"/><path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256M256 469.3c117.8 0 213.3-95.5 213.3-213.3S373.8 42.7 256 42.7 42.7 138.2 42.7 256 138.2 469.3 256 469.3" style="fill-rule:evenodd;clip-rule:evenodd"/></symbol><symbol id="f-icon-chevrons-left" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="currentColor" d="M34.5 239 228.9 44.7c9.4-9.4 24.6-9.4 33.9 0l22.7 22.7c9.4 9.4 9.4 24.5 0 33.9L131.5 256l154 154.8c9.3 9.4 9.3 24.5 0 33.9l-22.7 22.7c-9.4 9.4-24.6 9.4-33.9 0L34.5 273c-9.4-9.4-9.4-24.6 0-33.9z"/></symbol><symbol id="f-icon-caret-up" viewBox="0 0 512 512"><path fill="currentColor" d="M384.662 352H127.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142"/></symbol><symbol id="f-icon-caret-down" viewBox="0 0 512 512"><path fill="currentColor" d="M127.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L270.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L113.2 226.1c-12.6-12.6-3.7-34.1 14.1-34.1"/></symbol><symbol id="f-icon-calendar" viewBox="0 0 512 512"><path fill="currentColor" d="M180 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12m108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12m96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12m-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12m-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12m192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12m96-260v352c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48m-48 346V160H80v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6"/></symbol><symbol id="f-icon-bell" fill="none" viewBox="0 0 512 512"><path fill="currentColor" d="M256.001 512c35.32 0 63.97-28.65 63.97-64h-127.94c0 35.35 28.65 64 63.97 64m215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C150.561 68.1 96.081 130.3 96.081 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71"/></symbol><symbol id="f-icon-bars" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="currentColor" d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32"/></symbol><symbol id="f-icon-arrow-right" fill="none" viewBox="0 0 512 512"><path fill="currentColor" d="M381.476 272.971 187.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L284.505 256 130.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L381.475 239.03c9.373 9.372 9.373 24.568.001 33.941"/></symbol><symbol id="f-icon-arrow-in-circle" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8m113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34"/></symbol><symbol id="f-icon-arrow-down" viewBox="0 0 512 512"><path fill="currentColor" d="M239.373 380.982 45.03 186.638c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04l154.746 154.021L411.089 129.99c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L273.315 380.982c-9.373 9.372-24.569 9.372-33.942 0"/></symbol><symbol id="f-icon-alert" viewBox="0 0 512 512"><path fill="currentColor" d="m233.363 287.35-17.101-96.43c-3.45-19.48 15.314-36.92 39.737-36.92s43.187 17.43 39.737 36.92l-17.101 96.43c-1.613 9.08-11.256 15.82-22.636 15.82s-21.023-6.74-22.636-15.82M220 364.031c0-19.875 16.11-36 36-36 19.876 0 36 16.11 36 36s-16.11 36-36 36c-19.876 0-36-16.124-36-36"/></symbol></svg>';
  const element = document.createElement("div");
  element.innerHTML = spritesheet;
  element.style.display = "none";
  element.setAttribute("aria-hidden", "true");
  element.setAttribute("data-icon-package", "@fkui/icon-lib-builder");
  element.setAttribute("data-icon-library", "f");
  document.body.appendChild(element);
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    injectSpritesheet();
  });
} else {
  injectSpritesheet();
}
var commonjsGlobal$2 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var check = function(it) {
  return it && it.Math === Math && it;
};
var globalThis_1 = (
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == "object" && self) || check(typeof commonjsGlobal$2 == "object" && commonjsGlobal$2) || check(typeof commonjsGlobal$2 == "object" && commonjsGlobal$2) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
);
var objectGetOwnPropertyDescriptor = {};
var fails$a = function(exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};
var fails$9 = fails$a;
var descriptors = !fails$9(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
});
var fails$8 = fails$a;
var functionBindNative = !fails$8(function() {
  var test = (function() {
  }).bind();
  return typeof test != "function" || test.hasOwnProperty("prototype");
});
var NATIVE_BIND$1 = functionBindNative;
var call$4 = Function.prototype.call;
var functionCall = NATIVE_BIND$1 ? call$4.bind(call$4) : function() {
  return call$4.apply(call$4, arguments);
};
var objectPropertyIsEnumerable = {};
var $propertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$2(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;
var createPropertyDescriptor$2 = function(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value
  };
};
var NATIVE_BIND = functionBindNative;
var FunctionPrototype$1 = Function.prototype;
var call$3 = FunctionPrototype$1.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype$1.bind.bind(call$3, call$3);
var functionUncurryThis = NATIVE_BIND ? uncurryThisWithBind : function(fn2) {
  return function() {
    return call$3.apply(fn2, arguments);
  };
};
var uncurryThis$c = functionUncurryThis;
var toString$1 = uncurryThis$c({}.toString);
var stringSlice$1 = uncurryThis$c("".slice);
var classofRaw$1 = function(it) {
  return stringSlice$1(toString$1(it), 8, -1);
};
var uncurryThis$b = functionUncurryThis;
var fails$7 = fails$a;
var classof$3 = classofRaw$1;
var $Object$2 = Object;
var split = uncurryThis$b("".split);
var indexedObject = fails$7(function() {
  return !$Object$2("z").propertyIsEnumerable(0);
}) ? function(it) {
  return classof$3(it) === "String" ? split(it, "") : $Object$2(it);
} : $Object$2;
var isNullOrUndefined$2 = function(it) {
  return it === null || it === void 0;
};
var isNullOrUndefined$1 = isNullOrUndefined$2;
var $TypeError$8 = TypeError;
var requireObjectCoercible$2 = function(it) {
  if (isNullOrUndefined$1(it)) throw new $TypeError$8("Can't call method on " + it);
  return it;
};
var IndexedObject = indexedObject;
var requireObjectCoercible$1 = requireObjectCoercible$2;
var toIndexedObject$3 = function(it) {
  return IndexedObject(requireObjectCoercible$1(it));
};
var documentAll = typeof document == "object" && document.all;
var isCallable$a = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
  return typeof argument == "function" || argument === documentAll;
} : function(argument) {
  return typeof argument == "function";
};
var isCallable$9 = isCallable$a;
var isObject$8 = function(it) {
  return typeof it == "object" ? it !== null : isCallable$9(it);
};
var globalThis$i = globalThis_1;
var isCallable$8 = isCallable$a;
var aFunction = function(argument) {
  return isCallable$8(argument) ? argument : void 0;
};
var getBuiltIn$2 = function(namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis$i[namespace]) : globalThis$i[namespace] && globalThis$i[namespace][method];
};
var uncurryThis$a = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$a({}.isPrototypeOf);
var globalThis$h = globalThis_1;
var navigator$1 = globalThis$h.navigator;
var userAgent$2 = navigator$1 && navigator$1.userAgent;
var environmentUserAgent = userAgent$2 ? String(userAgent$2) : "";
var globalThis$g = globalThis_1;
var userAgent$1 = environmentUserAgent;
var process = globalThis$g.process;
var Deno$1 = globalThis$g.Deno;
var versions = process && process.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
  match = v8.split(".");
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
if (!version && userAgent$1) {
  match = userAgent$1.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$1.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}
var environmentV8Version = version;
var V8_VERSION = environmentV8Version;
var fails$6 = fails$a;
var globalThis$f = globalThis_1;
var $String$3 = globalThis$f.String;
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$6(function() {
  var symbol = Symbol("symbol detection");
  return !$String$3(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == "symbol";
var getBuiltIn$1 = getBuiltIn$2;
var isCallable$7 = isCallable$a;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var $Object$1 = Object;
var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function(it) {
  return typeof it == "symbol";
} : function(it) {
  var $Symbol = getBuiltIn$1("Symbol");
  return isCallable$7($Symbol) && isPrototypeOf($Symbol.prototype, $Object$1(it));
};
var $String$2 = String;
var tryToString$1 = function(argument) {
  try {
    return $String$2(argument);
  } catch (error) {
    return "Object";
  }
};
var isCallable$6 = isCallable$a;
var tryToString = tryToString$1;
var $TypeError$7 = TypeError;
var aCallable$2 = function(argument) {
  if (isCallable$6(argument)) return argument;
  throw new $TypeError$7(tryToString(argument) + " is not a function");
};
var aCallable$1 = aCallable$2;
var isNullOrUndefined = isNullOrUndefined$2;
var getMethod$1 = function(V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? void 0 : aCallable$1(func);
};
var call$2 = functionCall;
var isCallable$5 = isCallable$a;
var isObject$7 = isObject$8;
var $TypeError$6 = TypeError;
var ordinaryToPrimitive$1 = function(input, pref) {
  var fn2, val;
  if (pref === "string" && isCallable$5(fn2 = input.toString) && !isObject$7(val = call$2(fn2, input))) return val;
  if (isCallable$5(fn2 = input.valueOf) && !isObject$7(val = call$2(fn2, input))) return val;
  if (pref !== "string" && isCallable$5(fn2 = input.toString) && !isObject$7(val = call$2(fn2, input))) return val;
  throw new $TypeError$6("Can't convert object to primitive value");
};
var sharedStore = { exports: {} };
var globalThis$e = globalThis_1;
var defineProperty$2 = Object.defineProperty;
var defineGlobalProperty$3 = function(key, value) {
  try {
    defineProperty$2(globalThis$e, key, { value, configurable: true, writable: true });
  } catch (error) {
    globalThis$e[key] = value;
  }
  return value;
};
var globalThis$d = globalThis_1;
var defineGlobalProperty$2 = defineGlobalProperty$3;
var SHARED = "__core-js_shared__";
var store$3 = sharedStore.exports = globalThis$d[SHARED] || defineGlobalProperty$2(SHARED, {});
(store$3.versions || (store$3.versions = [])).push({
  version: "3.39.0",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var sharedStoreExports = sharedStore.exports;
var store$2 = sharedStoreExports;
var shared$3 = function(key, value) {
  return store$2[key] || (store$2[key] = value || {});
};
var requireObjectCoercible = requireObjectCoercible$2;
var $Object = Object;
var toObject$2 = function(argument) {
  return $Object(requireObjectCoercible(argument));
};
var uncurryThis$9 = functionUncurryThis;
var toObject$1 = toObject$2;
var hasOwnProperty$9 = uncurryThis$9({}.hasOwnProperty);
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty$9(toObject$1(it), key);
};
var uncurryThis$8 = functionUncurryThis;
var id = 0;
var postfix = Math.random();
var toString = uncurryThis$8(1 .toString);
var uid$2 = function(key) {
  return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
};
var globalThis$c = globalThis_1;
var shared$2 = shared$3;
var hasOwn$6 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var Symbol$5 = globalThis$c.Symbol;
var WellKnownSymbolsStore = shared$2("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$5["for"] || Symbol$5 : Symbol$5 && Symbol$5.withoutSetter || uid$1;
var wellKnownSymbol$1 = function(name) {
  if (!hasOwn$6(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$6(Symbol$5, name) ? Symbol$5[name] : createWellKnownSymbol("Symbol." + name);
  }
  return WellKnownSymbolsStore[name];
};
var call$1 = functionCall;
var isObject$6 = isObject$8;
var isSymbol$1 = isSymbol$2;
var getMethod = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol = wellKnownSymbol$1;
var $TypeError$5 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
var toPrimitive$1 = function(input, pref) {
  if (!isObject$6(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === void 0) pref = "default";
    result = call$1(exoticToPrim, input, pref);
    if (!isObject$6(result) || isSymbol$1(result)) return result;
    throw new $TypeError$5("Can't convert object to primitive value");
  }
  if (pref === void 0) pref = "number";
  return ordinaryToPrimitive(input, pref);
};
var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;
var toPropertyKey$2 = function(argument) {
  var key = toPrimitive(argument, "string");
  return isSymbol(key) ? key : key + "";
};
var globalThis$b = globalThis_1;
var isObject$5 = isObject$8;
var document$1 = globalThis$b.document;
var EXISTS$1 = isObject$5(document$1) && isObject$5(document$1.createElement);
var documentCreateElement = function(it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};
var DESCRIPTORS$8 = descriptors;
var fails$5 = fails$a;
var createElement = documentCreateElement;
var ie8DomDefine = !DESCRIPTORS$8 && !fails$5(function() {
  return Object.defineProperty(createElement("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
});
var DESCRIPTORS$7 = descriptors;
var call = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$1 = createPropertyDescriptor$2;
var toIndexedObject$2 = toIndexedObject$3;
var toPropertyKey$1 = toPropertyKey$2;
var hasOwn$5 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$2(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) {
  }
  if (hasOwn$5(O, P)) return createPropertyDescriptor$1(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};
var objectDefineProperty = {};
var DESCRIPTORS$6 = descriptors;
var fails$4 = fails$a;
var v8PrototypeDefineBug = DESCRIPTORS$6 && fails$4(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: false
  }).prototype !== 42;
});
var isObject$4 = isObject$8;
var $String$1 = String;
var $TypeError$4 = TypeError;
var anObject$2 = function(argument) {
  if (isObject$4(argument)) return argument;
  throw new $TypeError$4($String$1(argument) + " is not an object");
};
var DESCRIPTORS$5 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var anObject$1 = anObject$2;
var toPropertyKey = toPropertyKey$2;
var $TypeError$3 = TypeError;
var $defineProperty = Object.defineProperty;
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE$1 = "configurable";
var WRITABLE = "writable";
objectDefineProperty.f = DESCRIPTORS$5 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject$1(O);
  P = toPropertyKey(P);
  anObject$1(Attributes);
  if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }
  return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty2(O, P, Attributes) {
  anObject$1(O);
  P = toPropertyKey(P);
  anObject$1(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
  }
  if ("get" in Attributes || "set" in Attributes) throw new $TypeError$3("Accessors not supported");
  if ("value" in Attributes) O[P] = Attributes.value;
  return O;
};
var DESCRIPTORS$4 = descriptors;
var definePropertyModule$2 = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$2;
var createNonEnumerableProperty$2 = DESCRIPTORS$4 ? function(object, key, value) {
  return definePropertyModule$2.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
  object[key] = value;
  return object;
};
var makeBuiltIn$3 = { exports: {} };
var DESCRIPTORS$3 = descriptors;
var hasOwn$4 = hasOwnProperty_1;
var FunctionPrototype = Function.prototype;
var getDescriptor = DESCRIPTORS$3 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$4(FunctionPrototype, "name");
var PROPER = EXISTS && (function something() {
}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$3 || DESCRIPTORS$3 && getDescriptor(FunctionPrototype, "name").configurable);
var functionName = {
  EXISTS,
  PROPER,
  CONFIGURABLE
};
var uncurryThis$7 = functionUncurryThis;
var isCallable$4 = isCallable$a;
var store$1 = sharedStoreExports;
var functionToString = uncurryThis$7(Function.toString);
if (!isCallable$4(store$1.inspectSource)) {
  store$1.inspectSource = function(it) {
    return functionToString(it);
  };
}
var inspectSource$1 = store$1.inspectSource;
var globalThis$a = globalThis_1;
var isCallable$3 = isCallable$a;
var WeakMap$4 = globalThis$a.WeakMap;
var weakMapBasicDetection = isCallable$3(WeakMap$4) && /native code/.test(String(WeakMap$4));
var shared$1 = shared$3;
var uid = uid$2;
var keys$2 = shared$1("keys");
var sharedKey$1 = function(key) {
  return keys$2[key] || (keys$2[key] = uid(key));
};
var hiddenKeys$3 = {};
var NATIVE_WEAK_MAP = weakMapBasicDetection;
var globalThis$9 = globalThis_1;
var isObject$3 = isObject$8;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$2;
var hasOwn$3 = hasOwnProperty_1;
var shared = sharedStoreExports;
var sharedKey = sharedKey$1;
var hiddenKeys$2 = hiddenKeys$3;
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError$2 = globalThis$9.TypeError;
var WeakMap$3 = globalThis$9.WeakMap;
var set, get, has;
var enforce = function(it) {
  return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
  return function(it) {
    var state;
    if (!isObject$3(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError$2("Incompatible receiver, " + TYPE + " required");
    }
    return state;
  };
};
if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap$3());
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  set = function(it, metadata) {
    if (store.has(it)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function(it) {
    return store.get(it) || {};
  };
  has = function(it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey("state");
  hiddenKeys$2[STATE] = true;
  set = function(it, metadata) {
    if (hasOwn$3(it, STATE)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$1(it, STATE, metadata);
    return metadata;
  };
  get = function(it) {
    return hasOwn$3(it, STATE) ? it[STATE] : {};
  };
  has = function(it) {
    return hasOwn$3(it, STATE);
  };
}
var internalState = {
  set,
  get,
  has,
  enforce,
  getterFor
};
var uncurryThis$6 = functionUncurryThis;
var fails$3 = fails$a;
var isCallable$2 = isCallable$a;
var hasOwn$2 = hasOwnProperty_1;
var DESCRIPTORS$2 = descriptors;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var inspectSource = inspectSource$1;
var InternalStateModule = internalState;
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
var defineProperty$1 = Object.defineProperty;
var stringSlice = uncurryThis$6("".slice);
var replace = uncurryThis$6("".replace);
var join = uncurryThis$6([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS$2 && !fails$3(function() {
  return defineProperty$1(function() {
  }, "length", { value: 8 }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn$2 = makeBuiltIn$3.exports = function(value, name, options) {
  if (stringSlice($String(name), 0, 7) === "Symbol(") {
    name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
  }
  if (options && options.getter) name = "get " + name;
  if (options && options.setter) name = "set " + name;
  if (!hasOwn$2(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
    if (DESCRIPTORS$2) defineProperty$1(value, "name", { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$2(options, "arity") && value.length !== options.arity) {
    defineProperty$1(value, "length", { value: options.arity });
  }
  try {
    if (options && hasOwn$2(options, "constructor") && options.constructor) {
      if (DESCRIPTORS$2) defineProperty$1(value, "prototype", { writable: false });
    } else if (value.prototype) value.prototype = void 0;
  } catch (error) {
  }
  var state = enforceInternalState(value);
  if (!hasOwn$2(state, "source")) {
    state.source = join(TEMPLATE, typeof name == "string" ? name : "");
  }
  return value;
};
Function.prototype.toString = makeBuiltIn$2(function toString2() {
  return isCallable$2(this) && getInternalState(this).source || inspectSource(this);
}, "toString");
var makeBuiltInExports = makeBuiltIn$3.exports;
var isCallable$1 = isCallable$a;
var definePropertyModule$1 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltInExports;
var defineGlobalProperty$1 = defineGlobalProperty$3;
var defineBuiltIn$1 = function(O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== void 0 ? options.name : key;
  if (isCallable$1(value)) makeBuiltIn$1(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) {
    }
    if (simple) O[key] = value;
    else definePropertyModule$1.f(O, key, {
      value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  }
  return O;
};
var objectGetOwnPropertyNames = {};
var ceil = Math.ceil;
var floor = Math.floor;
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};
var trunc2 = mathTrunc;
var toIntegerOrInfinity$3 = function(argument) {
  var number = +argument;
  return number !== number || number === 0 ? 0 : trunc2(number);
};
var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;
var max = Math.max;
var min$2 = Math.min;
var toAbsoluteIndex$1 = function(index, length) {
  var integer = toIntegerOrInfinity$2(index);
  return integer < 0 ? max(integer + length, 0) : min$2(integer, length);
};
var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;
var min$1 = Math.min;
var toLength$2 = function(argument) {
  var len = toIntegerOrInfinity$1(argument);
  return len > 0 ? min$1(len, 9007199254740991) : 0;
};
var toLength$1 = toLength$2;
var lengthOfArrayLike$2 = function(obj) {
  return toLength$1(obj.length);
};
var toIndexedObject$1 = toIndexedObject$3;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$2;
var createMethod = function(IS_INCLUDES) {
  return function($this, el, fromIndex) {
    var O = toIndexedObject$1($this);
    var length = lengthOfArrayLike$1(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      if (value !== value) return true;
    }
    else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};
var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};
var uncurryThis$5 = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var toIndexedObject = toIndexedObject$3;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$1 = hiddenKeys$3;
var push = uncurryThis$5([].push);
var objectKeysInternal = function(object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$1(hiddenKeys$1, key) && hasOwn$1(O, key) && push(result, key);
  while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};
var enumBugKeys$1 = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
];
var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$1;
var hiddenKeys = enumBugKeys.concat("length", "prototype");
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};
var objectGetOwnPropertySymbols = {};
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
var getBuiltIn = getBuiltIn$2;
var uncurryThis$4 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject = anObject$2;
var concat = uncurryThis$4([].concat);
var ownKeys$1 = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
  var keys2 = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys2, getOwnPropertySymbols(it)) : keys2;
};
var hasOwn2 = hasOwnProperty_1;
var ownKeys2 = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule = objectDefineProperty;
var copyConstructorProperties$1 = function(target, source, exceptions) {
  var keys2 = ownKeys2(source);
  var defineProperty4 = definePropertyModule.f;
  var getOwnPropertyDescriptor3 = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys2.length; i++) {
    var key = keys2[i];
    if (!hasOwn2(target, key) && !(exceptions && hasOwn2(exceptions, key))) {
      defineProperty4(target, key, getOwnPropertyDescriptor3(source, key));
    }
  }
};
var fails$2 = fails$a;
var isCallable = isCallable$a;
var replacement = /#|\.prototype\./;
var isForced$1 = function(feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails$2(detection) : !!detection;
};
var normalize = isForced$1.normalize = function(string) {
  return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = "N";
var POLYFILL = isForced$1.POLYFILL = "P";
var isForced_1 = isForced$1;
var globalThis$8 = globalThis_1;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty = createNonEnumerableProperty$2;
var defineBuiltIn = defineBuiltIn$1;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;
var _export = function(options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED2, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis$8;
  } else if (STATIC) {
    target = globalThis$8[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis$8[TARGET] && globalThis$8[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED2 = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
    if (!FORCED2 && targetProperty !== void 0) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, "sham", true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};
var classof$2 = classofRaw$1;
var isArray$6 = Array.isArray || function isArray(argument) {
  return classof$2(argument) === "Array";
};
var DESCRIPTORS$1 = descriptors;
var isArray$5 = isArray$6;
var $TypeError$2 = TypeError;
var getOwnPropertyDescriptor2 = Object.getOwnPropertyDescriptor;
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$1 && !function() {
  if (this !== void 0) return true;
  try {
    Object.defineProperty([], "length", { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();
var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O, length) {
  if (isArray$5(O) && !getOwnPropertyDescriptor2(O, "length").writable) {
    throw new $TypeError$2("Cannot set read only .length");
  }
  return O.length = length;
} : function(O, length) {
  return O.length = length;
};
var $TypeError$1 = TypeError;
var MAX_SAFE_INTEGER$2 = 9007199254740991;
var doesNotExceedSafeInteger$1 = function(it) {
  if (it > MAX_SAFE_INTEGER$2) throw $TypeError$1("Maximum allowed index exceeded");
  return it;
};
var $$2 = _export;
var toObject = toObject$2;
var lengthOfArrayLike = lengthOfArrayLike$2;
var setArrayLength = arraySetLength;
var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
var fails$1 = fails$a;
var INCORRECT_TO_LENGTH = fails$1(function() {
  return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
});
var properErrorOnNonWritableLength = function() {
  try {
    Object.defineProperty([], "length", { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};
var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();
$$2({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push2(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});
var makeBuiltIn = makeBuiltInExports;
var defineProperty3 = objectDefineProperty;
var defineBuiltInAccessor$1 = function(target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty3.f(target, name, descriptor);
};
var classofRaw = classofRaw$1;
var uncurryThis$3 = functionUncurryThis;
var functionUncurryThisClause = function(fn2) {
  if (classofRaw(fn2) === "Function") return uncurryThis$3(fn2);
};
var uncurryThis$2 = functionUncurryThis;
var aCallable = aCallable$2;
var functionUncurryThisAccessor = function(object, key, method) {
  try {
    return uncurryThis$2(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) {
  }
};
var globalThis$7 = globalThis_1;
var uncurryThisAccessor$1 = functionUncurryThisAccessor;
var classof$1 = classofRaw$1;
var ArrayBuffer$3 = globalThis$7.ArrayBuffer;
var TypeError$1 = globalThis$7.TypeError;
var arrayBufferByteLength$2 = ArrayBuffer$3 && uncurryThisAccessor$1(ArrayBuffer$3.prototype, "byteLength", "get") || function(O) {
  if (classof$1(O) !== "ArrayBuffer") throw new TypeError$1("ArrayBuffer expected");
  return O.byteLength;
};
var globalThis$6 = globalThis_1;
var uncurryThis$1 = functionUncurryThisClause;
var arrayBufferByteLength$1 = arrayBufferByteLength$2;
var ArrayBuffer$2 = globalThis$6.ArrayBuffer;
var ArrayBufferPrototype$2 = ArrayBuffer$2 && ArrayBuffer$2.prototype;
var slice$1 = ArrayBufferPrototype$2 && uncurryThis$1(ArrayBufferPrototype$2.slice);
var arrayBufferIsDetached = function(O) {
  if (arrayBufferByteLength$1(O) !== 0) return false;
  if (!slice$1) return false;
  try {
    slice$1(O, 0, 0);
    return false;
  } catch (error) {
    return true;
  }
};
var DESCRIPTORS = descriptors;
var defineBuiltInAccessor = defineBuiltInAccessor$1;
var isDetached$1 = arrayBufferIsDetached;
var ArrayBufferPrototype$1 = ArrayBuffer.prototype;
if (DESCRIPTORS && !("detached" in ArrayBufferPrototype$1)) {
  defineBuiltInAccessor(ArrayBufferPrototype$1, "detached", {
    configurable: true,
    get: function detached() {
      return isDetached$1(this);
    }
  });
}
var toIntegerOrInfinity = toIntegerOrInfinity$3;
var toLength = toLength$2;
var $RangeError = RangeError;
var toIndex$1 = function(it) {
  if (it === void 0) return 0;
  var number = toIntegerOrInfinity(it);
  var length = toLength(number);
  if (number !== length) throw new $RangeError("Wrong length or index");
  return length;
};
var isDetached = arrayBufferIsDetached;
var $TypeError = TypeError;
var arrayBufferNotDetached = function(it) {
  if (isDetached(it)) throw new $TypeError("ArrayBuffer is detached");
  return it;
};
var globalThis$5 = globalThis_1;
var userAgent = environmentUserAgent;
var classof = classofRaw$1;
var userAgentStartsWith = function(string) {
  return userAgent.slice(0, string.length) === string;
};
var environment = function() {
  if (userAgentStartsWith("Bun/")) return "BUN";
  if (userAgentStartsWith("Cloudflare-Workers")) return "CLOUDFLARE";
  if (userAgentStartsWith("Deno/")) return "DENO";
  if (userAgentStartsWith("Node.js/")) return "NODE";
  if (globalThis$5.Bun && typeof Bun.version == "string") return "BUN";
  if (globalThis$5.Deno && typeof Deno.version == "object") return "DENO";
  if (classof(globalThis$5.process) === "process") return "NODE";
  if (globalThis$5.window && globalThis$5.document) return "BROWSER";
  return "REST";
}();
var ENVIRONMENT$1 = environment;
var environmentIsNode = ENVIRONMENT$1 === "NODE";
var globalThis$4 = globalThis_1;
var IS_NODE = environmentIsNode;
var getBuiltInNodeModule$1 = function(name) {
  if (IS_NODE) {
    try {
      return globalThis$4.process.getBuiltinModule(name);
    } catch (error) {
    }
    try {
      return Function('return require("' + name + '")')();
    } catch (error) {
    }
  }
};
var globalThis$3 = globalThis_1;
var fails = fails$a;
var V8 = environmentV8Version;
var ENVIRONMENT = environment;
var structuredClone$2 = globalThis$3.structuredClone;
var structuredCloneProperTransfer = !!structuredClone$2 && !fails(function() {
  if (ENVIRONMENT === "DENO" && V8 > 92 || ENVIRONMENT === "NODE" && V8 > 94 || ENVIRONMENT === "BROWSER" && V8 > 97) return false;
  var buffer2 = new ArrayBuffer(8);
  var clone = structuredClone$2(buffer2, { transfer: [buffer2] });
  return buffer2.byteLength !== 0 || clone.byteLength !== 8;
});
var globalThis$2 = globalThis_1;
var getBuiltInNodeModule = getBuiltInNodeModule$1;
var PROPER_STRUCTURED_CLONE_TRANSFER$1 = structuredCloneProperTransfer;
var structuredClone$1 = globalThis$2.structuredClone;
var $ArrayBuffer = globalThis$2.ArrayBuffer;
var $MessageChannel = globalThis$2.MessageChannel;
var detach = false;
var WorkerThreads, channel, buffer, $detach;
if (PROPER_STRUCTURED_CLONE_TRANSFER$1) {
  detach = function(transferable) {
    structuredClone$1(transferable, { transfer: [transferable] });
  };
} else if ($ArrayBuffer) try {
  if (!$MessageChannel) {
    WorkerThreads = getBuiltInNodeModule("worker_threads");
    if (WorkerThreads) $MessageChannel = WorkerThreads.MessageChannel;
  }
  if ($MessageChannel) {
    channel = new $MessageChannel();
    buffer = new $ArrayBuffer(2);
    $detach = function(transferable) {
      channel.port1.postMessage(null, [transferable]);
    };
    if (buffer.byteLength === 2) {
      $detach(buffer);
      if (buffer.byteLength === 0) detach = $detach;
    }
  }
} catch (error) {
}
var detachTransferable$1 = detach;
var globalThis$1 = globalThis_1;
var uncurryThis = functionUncurryThis;
var uncurryThisAccessor = functionUncurryThisAccessor;
var toIndex = toIndex$1;
var notDetached = arrayBufferNotDetached;
var arrayBufferByteLength = arrayBufferByteLength$2;
var detachTransferable = detachTransferable$1;
var PROPER_STRUCTURED_CLONE_TRANSFER = structuredCloneProperTransfer;
var structuredClone = globalThis$1.structuredClone;
var ArrayBuffer$1 = globalThis$1.ArrayBuffer;
var DataView$2 = globalThis$1.DataView;
var min = Math.min;
var ArrayBufferPrototype = ArrayBuffer$1.prototype;
var DataViewPrototype = DataView$2.prototype;
var slice = uncurryThis(ArrayBufferPrototype.slice);
var isResizable = uncurryThisAccessor(ArrayBufferPrototype, "resizable", "get");
var maxByteLength = uncurryThisAccessor(ArrayBufferPrototype, "maxByteLength", "get");
var getInt8 = uncurryThis(DataViewPrototype.getInt8);
var setInt8 = uncurryThis(DataViewPrototype.setInt8);
var arrayBufferTransfer = (PROPER_STRUCTURED_CLONE_TRANSFER || detachTransferable) && function(arrayBuffer, newLength, preserveResizability) {
  var byteLength = arrayBufferByteLength(arrayBuffer);
  var newByteLength = newLength === void 0 ? byteLength : toIndex(newLength);
  var fixedLength = !isResizable || !isResizable(arrayBuffer);
  var newBuffer;
  notDetached(arrayBuffer);
  if (PROPER_STRUCTURED_CLONE_TRANSFER) {
    arrayBuffer = structuredClone(arrayBuffer, { transfer: [arrayBuffer] });
    if (byteLength === newByteLength && (preserveResizability || fixedLength)) return arrayBuffer;
  }
  if (byteLength >= newByteLength && (!preserveResizability || fixedLength)) {
    newBuffer = slice(arrayBuffer, 0, newByteLength);
  } else {
    var options = preserveResizability && !fixedLength && maxByteLength ? { maxByteLength: maxByteLength(arrayBuffer) } : void 0;
    newBuffer = new ArrayBuffer$1(newByteLength, options);
    var a = new DataView$2(arrayBuffer);
    var b = new DataView$2(newBuffer);
    var copyLength = min(newByteLength, byteLength);
    for (var i = 0; i < copyLength; i++) setInt8(b, i, getInt8(a, i));
  }
  if (!PROPER_STRUCTURED_CLONE_TRANSFER) detachTransferable(arrayBuffer);
  return newBuffer;
};
var $$1 = _export;
var $transfer$1 = arrayBufferTransfer;
if ($transfer$1) $$1({ target: "ArrayBuffer", proto: true }, {
  transfer: function transfer() {
    return $transfer$1(this, arguments.length ? arguments[0] : void 0, true);
  }
});
var $ = _export;
var $transfer = arrayBufferTransfer;
if ($transfer) $({ target: "ArrayBuffer", proto: true }, {
  transferToFixedLength: function transferToFixedLength() {
    return $transfer(this, arguments.length ? arguments[0] : void 0, false);
  }
});
const configLogic = {
  production: true
};
function isEmpty(value) {
  return !value;
}
function isSet(value) {
  return value !== void 0 && value !== null;
}
function isString(value) {
  return typeof value === "string" || value instanceof String;
}
const DATE_REGEXP_WITH_DASH = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
function validLimit(limit) {
  if (typeof limit !== "string" || isEmpty(limit)) {
    throw new Error(`limit must be a non-empty string`);
  }
  const limitAsString = limit;
  if (!DATE_REGEXP_WITH_DASH.test(limitAsString)) {
    throw new Error(`limit has invalid format`);
  }
  return limitAsString;
}
function debounce(func, delay, immediate = false) {
  let timeout = null;
  return function functionToExecute(...args) {
    const timedOutFunction = () => {
      timeout = null;
      if (!immediate) {
        func.apply(this, args);
      }
    };
    const callNow = immediate && !timeout;
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(timedOutFunction, delay);
    if (callNow) {
      func.apply(this);
    }
  };
}
var commonjsGlobal$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs$1$1(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var lodash_clonedeep = { exports: {} };
lodash_clonedeep.exports;
var hasRequiredLodash_clonedeep;
function requireLodash_clonedeep() {
  if (hasRequiredLodash_clonedeep) return lodash_clonedeep.exports;
  hasRequiredLodash_clonedeep = 1;
  (function(module, exports) {
    var LARGE_ARRAY_SIZE2 = 200;
    var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
    var MAX_SAFE_INTEGER2 = 9007199254740991;
    var argsTag2 = "[object Arguments]", arrayTag2 = "[object Array]", boolTag2 = "[object Boolean]", dateTag2 = "[object Date]", errorTag2 = "[object Error]", funcTag2 = "[object Function]", genTag2 = "[object GeneratorFunction]", mapTag2 = "[object Map]", numberTag2 = "[object Number]", objectTag2 = "[object Object]", promiseTag2 = "[object Promise]", regexpTag2 = "[object RegExp]", setTag2 = "[object Set]", stringTag2 = "[object String]", symbolTag2 = "[object Symbol]", weakMapTag2 = "[object WeakMap]";
    var arrayBufferTag2 = "[object ArrayBuffer]", dataViewTag2 = "[object DataView]", float32Tag2 = "[object Float32Array]", float64Tag2 = "[object Float64Array]", int8Tag2 = "[object Int8Array]", int16Tag2 = "[object Int16Array]", int32Tag2 = "[object Int32Array]", uint8Tag2 = "[object Uint8Array]", uint8ClampedTag2 = "[object Uint8ClampedArray]", uint16Tag2 = "[object Uint16Array]", uint32Tag2 = "[object Uint32Array]";
    var reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g;
    var reFlags = /\w*$/;
    var reIsHostCtor2 = /^\[object .+?Constructor\]$/;
    var reIsUint2 = /^(?:0|[1-9]\d*)$/;
    var cloneableTags = {};
    cloneableTags[argsTag2] = cloneableTags[arrayTag2] = cloneableTags[arrayBufferTag2] = cloneableTags[dataViewTag2] = cloneableTags[boolTag2] = cloneableTags[dateTag2] = cloneableTags[float32Tag2] = cloneableTags[float64Tag2] = cloneableTags[int8Tag2] = cloneableTags[int16Tag2] = cloneableTags[int32Tag2] = cloneableTags[mapTag2] = cloneableTags[numberTag2] = cloneableTags[objectTag2] = cloneableTags[regexpTag2] = cloneableTags[setTag2] = cloneableTags[stringTag2] = cloneableTags[symbolTag2] = cloneableTags[uint8Tag2] = cloneableTags[uint8ClampedTag2] = cloneableTags[uint16Tag2] = cloneableTags[uint32Tag2] = true;
    cloneableTags[errorTag2] = cloneableTags[funcTag2] = cloneableTags[weakMapTag2] = false;
    var freeGlobal2 = typeof commonjsGlobal$1 == "object" && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1;
    var freeSelf2 = typeof self == "object" && self && self.Object === Object && self;
    var root2 = freeGlobal2 || freeSelf2 || Function("return this")();
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    function addMapEntry(map, pair) {
      map.set(pair[0], pair[1]);
      return map;
    }
    function addSetEntry(set2, value) {
      set2.add(value);
      return set2;
    }
    function arrayEach(array, iteratee) {
      var index = -1, length = array ? array.length : 0;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayPush2(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array ? array.length : 0;
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function baseTimes2(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function getValue2(object, key) {
      return object == null ? void 0 : object[key];
    }
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    function mapToArray2(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg2(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray2(set2) {
      var index = -1, result = Array(set2.size);
      set2.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto2 = Array.prototype, funcProto2 = Function.prototype, objectProto2 = Object.prototype;
    var coreJsData2 = root2["__core-js_shared__"];
    var maskSrcKey2 = function() {
      var uid2 = /[^.]+$/.exec(coreJsData2 && coreJsData2.keys && coreJsData2.keys.IE_PROTO || "");
      return uid2 ? "Symbol(src)_1." + uid2 : "";
    }();
    var funcToString2 = funcProto2.toString;
    var hasOwnProperty2 = objectProto2.hasOwnProperty;
    var objectToString2 = objectProto2.toString;
    var reIsNative2 = RegExp(
      "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer2 = moduleExports ? root2.Buffer : void 0, Symbol2 = root2.Symbol, Uint8Array3 = root2.Uint8Array, getPrototype = overArg2(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable3 = objectProto2.propertyIsEnumerable, splice2 = arrayProto2.splice;
    var nativeGetSymbols2 = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0, nativeKeys2 = overArg2(Object.keys, Object);
    var DataView2 = getNative2(root2, "DataView"), Map2 = getNative2(root2, "Map"), Promise2 = getNative2(root2, "Promise"), Set2 = getNative2(root2, "Set"), WeakMap2 = getNative2(root2, "WeakMap"), nativeCreate2 = getNative2(Object, "create");
    var dataViewCtorString2 = toSource2(DataView2), mapCtorString2 = toSource2(Map2), promiseCtorString2 = toSource2(Promise2), setCtorString2 = toSource2(Set2), weakMapCtorString2 = toSource2(WeakMap2);
    var symbolProto2 = Symbol2 ? Symbol2.prototype : void 0, symbolValueOf2 = symbolProto2 ? symbolProto2.valueOf : void 0;
    function Hash2(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear2() {
      this.__data__ = nativeCreate2 ? nativeCreate2(null) : {};
    }
    function hashDelete2(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet2(key) {
      var data2 = this.__data__;
      if (nativeCreate2) {
        var result = data2[key];
        return result === HASH_UNDEFINED2 ? void 0 : result;
      }
      return hasOwnProperty2.call(data2, key) ? data2[key] : void 0;
    }
    function hashHas2(key) {
      var data2 = this.__data__;
      return nativeCreate2 ? data2[key] !== void 0 : hasOwnProperty2.call(data2, key);
    }
    function hashSet2(key, value) {
      var data2 = this.__data__;
      data2[key] = nativeCreate2 && value === void 0 ? HASH_UNDEFINED2 : value;
      return this;
    }
    Hash2.prototype.clear = hashClear2;
    Hash2.prototype["delete"] = hashDelete2;
    Hash2.prototype.get = hashGet2;
    Hash2.prototype.has = hashHas2;
    Hash2.prototype.set = hashSet2;
    function ListCache2(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear2() {
      this.__data__ = [];
    }
    function listCacheDelete2(key) {
      var data2 = this.__data__, index = assocIndexOf2(data2, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data2.length - 1;
      if (index == lastIndex) {
        data2.pop();
      } else {
        splice2.call(data2, index, 1);
      }
      return true;
    }
    function listCacheGet2(key) {
      var data2 = this.__data__, index = assocIndexOf2(data2, key);
      return index < 0 ? void 0 : data2[index][1];
    }
    function listCacheHas2(key) {
      return assocIndexOf2(this.__data__, key) > -1;
    }
    function listCacheSet2(key, value) {
      var data2 = this.__data__, index = assocIndexOf2(data2, key);
      if (index < 0) {
        data2.push([key, value]);
      } else {
        data2[index][1] = value;
      }
      return this;
    }
    ListCache2.prototype.clear = listCacheClear2;
    ListCache2.prototype["delete"] = listCacheDelete2;
    ListCache2.prototype.get = listCacheGet2;
    ListCache2.prototype.has = listCacheHas2;
    ListCache2.prototype.set = listCacheSet2;
    function MapCache2(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear2() {
      this.__data__ = {
        "hash": new Hash2(),
        "map": new (Map2 || ListCache2)(),
        "string": new Hash2()
      };
    }
    function mapCacheDelete2(key) {
      return getMapData2(this, key)["delete"](key);
    }
    function mapCacheGet2(key) {
      return getMapData2(this, key).get(key);
    }
    function mapCacheHas2(key) {
      return getMapData2(this, key).has(key);
    }
    function mapCacheSet2(key, value) {
      getMapData2(this, key).set(key, value);
      return this;
    }
    MapCache2.prototype.clear = mapCacheClear2;
    MapCache2.prototype["delete"] = mapCacheDelete2;
    MapCache2.prototype.get = mapCacheGet2;
    MapCache2.prototype.has = mapCacheHas2;
    MapCache2.prototype.set = mapCacheSet2;
    function Stack2(entries) {
      this.__data__ = new ListCache2(entries);
    }
    function stackClear2() {
      this.__data__ = new ListCache2();
    }
    function stackDelete2(key) {
      return this.__data__["delete"](key);
    }
    function stackGet2(key) {
      return this.__data__.get(key);
    }
    function stackHas2(key) {
      return this.__data__.has(key);
    }
    function stackSet2(key, value) {
      var cache = this.__data__;
      if (cache instanceof ListCache2) {
        var pairs = cache.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE2 - 1) {
          pairs.push([key, value]);
          return this;
        }
        cache = this.__data__ = new MapCache2(pairs);
      }
      cache.set(key, value);
      return this;
    }
    Stack2.prototype.clear = stackClear2;
    Stack2.prototype["delete"] = stackDelete2;
    Stack2.prototype.get = stackGet2;
    Stack2.prototype.has = stackHas2;
    Stack2.prototype.set = stackSet2;
    function arrayLikeKeys2(value, inherited) {
      var result = isArray3(value) || isArguments2(value) ? baseTimes2(value.length, String) : [];
      var length = result.length, skipIndexes = !!length;
      for (var key in value) {
        if (hasOwnProperty2.call(value, key) && !(skipIndexes && (key == "length" || isIndex2(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty2.call(object, key) && eq2(objValue, value)) || value === void 0 && !(key in object)) {
        object[key] = value;
      }
    }
    function assocIndexOf2(array, key) {
      var length = array.length;
      while (length--) {
        if (eq2(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseAssign(object, source) {
      return object && copyObject(source, keys2(source), object);
    }
    function baseClone(value, isDeep, isFull, customizer, key, object, stack2) {
      var result;
      if (customizer) {
        result = object ? customizer(value, key, object, stack2) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject2(value)) {
        return value;
      }
      var isArr = isArray3(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag2(value), isFunc = tag == funcTag2 || tag == genTag2;
        if (isBuffer2(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag2 || tag == argsTag2 || isFunc && !object) {
          if (isHostObject(value)) {
            return object ? value : {};
          }
          result = initCloneObject(isFunc ? {} : value);
          if (!isDeep) {
            return copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, baseClone, isDeep);
        }
      }
      stack2 || (stack2 = new Stack2());
      var stacked = stack2.get(value);
      if (stacked) {
        return stacked;
      }
      stack2.set(value, result);
      if (!isArr) {
        var props = isFull ? getAllKeys2(value) : keys2(value);
      }
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, isDeep, isFull, customizer, key2, value, stack2));
      });
      return result;
    }
    function baseCreate(proto) {
      return isObject2(proto) ? objectCreate(proto) : {};
    }
    function baseGetAllKeys2(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray3(object) ? result : arrayPush2(result, symbolsFunc(object));
    }
    function baseGetTag2(value) {
      return objectToString2.call(value);
    }
    function baseIsNative2(value) {
      if (!isObject2(value) || isMasked2(value)) {
        return false;
      }
      var pattern = isFunction2(value) || isHostObject(value) ? reIsNative2 : reIsHostCtor2;
      return pattern.test(toSource2(value));
    }
    function baseKeys2(object) {
      if (!isPrototype2(object)) {
        return nativeKeys2(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty2.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function cloneBuffer(buffer2, isDeep) {
      if (isDeep) {
        return buffer2.slice();
      }
      var result = new buffer2.constructor(buffer2.length);
      buffer2.copy(result);
      return result;
    }
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array3(result).set(new Uint8Array3(arrayBuffer));
      return result;
    }
    function cloneDataView(dataView, isDeep) {
      var buffer2 = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer2, dataView.byteOffset, dataView.byteLength);
    }
    function cloneMap(map, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(mapToArray2(map), true) : mapToArray2(map);
      return arrayReduce(array, addMapEntry, new map.constructor());
    }
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    function cloneSet(set2, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(setToArray2(set2), true) : setToArray2(set2);
      return arrayReduce(array, addSetEntry, new set2.constructor());
    }
    function cloneSymbol(symbol) {
      return symbolValueOf2 ? Object(symbolValueOf2.call(symbol)) : {};
    }
    function cloneTypedArray(typedArray, isDeep) {
      var buffer2 = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer2, typedArray.byteOffset, typedArray.length);
    }
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    function copyObject(source, props, object, customizer) {
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = void 0;
        assignValue(object, key, newValue === void 0 ? source[key] : newValue);
      }
      return object;
    }
    function copySymbols(source, object) {
      return copyObject(source, getSymbols2(source), object);
    }
    function getAllKeys2(object) {
      return baseGetAllKeys2(object, keys2, getSymbols2);
    }
    function getMapData2(map, key) {
      var data2 = map.__data__;
      return isKeyable2(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
    }
    function getNative2(object, key) {
      var value = getValue2(object, key);
      return baseIsNative2(value) ? value : void 0;
    }
    var getSymbols2 = nativeGetSymbols2 ? overArg2(nativeGetSymbols2, Object) : stubArray2;
    var getTag2 = baseGetTag2;
    if (DataView2 && getTag2(new DataView2(new ArrayBuffer(1))) != dataViewTag2 || Map2 && getTag2(new Map2()) != mapTag2 || Promise2 && getTag2(Promise2.resolve()) != promiseTag2 || Set2 && getTag2(new Set2()) != setTag2 || WeakMap2 && getTag2(new WeakMap2()) != weakMapTag2) {
      getTag2 = function(value) {
        var result = objectToString2.call(value), Ctor = result == objectTag2 ? value.constructor : void 0, ctorString = Ctor ? toSource2(Ctor) : void 0;
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString2:
              return dataViewTag2;
            case mapCtorString2:
              return mapTag2;
            case promiseCtorString2:
              return promiseTag2;
            case setCtorString2:
              return setTag2;
            case weakMapCtorString2:
              return weakMapTag2;
          }
        }
        return result;
      };
    }
    function initCloneArray(array) {
      var length = array.length, result = array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty2.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype2(object) ? baseCreate(getPrototype(object)) : {};
    }
    function initCloneByTag(object, tag, cloneFunc, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag2:
          return cloneArrayBuffer(object);
        case boolTag2:
        case dateTag2:
          return new Ctor(+object);
        case dataViewTag2:
          return cloneDataView(object, isDeep);
        case float32Tag2:
        case float64Tag2:
        case int8Tag2:
        case int16Tag2:
        case int32Tag2:
        case uint8Tag2:
        case uint8ClampedTag2:
        case uint16Tag2:
        case uint32Tag2:
          return cloneTypedArray(object, isDeep);
        case mapTag2:
          return cloneMap(object, isDeep, cloneFunc);
        case numberTag2:
        case stringTag2:
          return new Ctor(object);
        case regexpTag2:
          return cloneRegExp(object);
        case setTag2:
          return cloneSet(object, isDeep, cloneFunc);
        case symbolTag2:
          return cloneSymbol(object);
      }
    }
    function isIndex2(value, length) {
      length = length == null ? MAX_SAFE_INTEGER2 : length;
      return !!length && (typeof value == "number" || reIsUint2.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isKeyable2(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked2(func) {
      return !!maskSrcKey2 && maskSrcKey2 in func;
    }
    function isPrototype2(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto2;
      return value === proto;
    }
    function toSource2(func) {
      if (func != null) {
        try {
          return funcToString2.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function cloneDeep2(value) {
      return baseClone(value, true, true);
    }
    function eq2(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isArguments2(value) {
      return isArrayLikeObject(value) && hasOwnProperty2.call(value, "callee") && (!propertyIsEnumerable3.call(value, "callee") || objectToString2.call(value) == argsTag2);
    }
    var isArray3 = Array.isArray;
    function isArrayLike2(value) {
      return value != null && isLength2(value.length) && !isFunction2(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike2(value) && isArrayLike2(value);
    }
    var isBuffer2 = nativeIsBuffer || stubFalse2;
    function isFunction2(value) {
      var tag = isObject2(value) ? objectToString2.call(value) : "";
      return tag == funcTag2 || tag == genTag2;
    }
    function isLength2(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
    }
    function isObject2(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike2(value) {
      return !!value && typeof value == "object";
    }
    function keys2(object) {
      return isArrayLike2(object) ? arrayLikeKeys2(object) : baseKeys2(object);
    }
    function stubArray2() {
      return [];
    }
    function stubFalse2() {
      return false;
    }
    module.exports = cloneDeep2;
  })(lodash_clonedeep, lodash_clonedeep.exports);
  return lodash_clonedeep.exports;
}
var lodash_clonedeepExports = requireLodash_clonedeep();
var cloneDeep = /* @__PURE__ */ getDefaultExportFromCjs$1$1(lodash_clonedeepExports);
function deepClone(value) {
  return cloneDeep(value);
}
function normalizeDateFormat(value) {
  const supportedFormats = [
    /* yyyy-mm-dd */
    /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/,
    /* yyyymmdd */
    /^(?<year>\d{4})(?<month>\d{2})(?<day>\d{2})$/,
    /* yyyy-mm-dd */
    /^(?<year>\d{4})\/(?<month>\d{2})\/(?<day>\d{2})$/
  ];
  const match2 = supportedFormats.map((pattern) => value.match(pattern)).find(Boolean);
  if (!match2 || !match2.groups) {
    return void 0;
  }
  const { year, month, day } = match2.groups;
  return `${year}-${month}-${day}`;
}
function testLuhnChecksum(inputString) {
  let sum = 0;
  if (/^[0-9]+$/.test(inputString) === false) {
    throw new Error("Luhn Checksum test only works on strings containing numbers");
  }
  inputString.split("").reverse().forEach((numChar, index) => {
    const digit = parseInt(numChar, 10) * ((index + 1) % 2 === 0 ? 2 : 1);
    sum += digit >= 10 ? digit - 9 : digit;
  });
  return sum % 10 === 0;
}
function validChecksum(value) {
  const yymmddxxxx = value.slice(2).replace(/-/g, "");
  return testLuhnChecksum(yymmddxxxx);
}
const BANK_ACCOUNT_NUMBER_REGEXP = /^\d{3,16}$/;
const BANK_ACCOUNT_NUMBER_TRIM_REGEXP = /[- .,]+/g;
function parseBankAccountNumber(value) {
  if (isEmpty(value)) {
    return void 0;
  }
  const trimmedValue = value.replace(BANK_ACCOUNT_NUMBER_TRIM_REGEXP, "");
  return BANK_ACCOUNT_NUMBER_REGEXP.test(trimmedValue) ? trimmedValue : void 0;
}
const BANKGIRO_REGEXP_HYPHEN = /^(\d{3,4})[-]?(\d{4})$/;
function parseBankgiro(value) {
  if (isEmpty(value)) {
    return void 0;
  }
  const match2 = value.match(BANKGIRO_REGEXP_HYPHEN);
  if (!match2) {
    return void 0;
  }
  if (!testLuhnChecksum(`${match2[1]}${match2[2]}`)) {
    return void 0;
  }
  return `${match2[1]}-${match2[2]}`;
}
const CLEARINGNUMBER_REGEXP = /^\d{4}([-\s]?\d)?$/;
function parseClearingNumber(value) {
  if (isEmpty(value)) {
    return void 0;
  }
  if (!CLEARINGNUMBER_REGEXP.test(value)) {
    return void 0;
  }
  return value.length === 5 ? `${value.substring(0, 4)}-${value.substring(4, 5)}` : value;
}
function getDefaultExportFromCjs$2(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var dayjs_min$1$1 = { exports: {} };
var dayjs_min$2 = dayjs_min$1$1.exports;
var hasRequiredDayjs_min$1;
function requireDayjs_min$1() {
  if (hasRequiredDayjs_min$1) return dayjs_min$1$1.exports;
  hasRequiredDayjs_min$1 = 1;
  (function(module, exports) {
    !function(t, e) {
      module.exports = e();
    }(dayjs_min$2, function() {
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h2 = "year", d = "date", l = "Invalid Date", $2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h2, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p2 = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p2]);
      }, w = function t2(e2, n2, r2) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1) return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t2, e2) {
        if (S(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p2] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($2);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $3 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h2:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $3(v2 + "Hours", 0);
            case u:
              return $3(v2 + "Minutes", 1);
            case s:
              return $3(v2 + "Seconds", 2);
            case i:
              return $3(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h2] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $3 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h2) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($3), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($3);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $3 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($3 === c) return this.set(c, this.$M + r2);
          if ($3 === h2) return this.set(h2, this.$y + r2);
          if ($3 === a) return y2(1);
          if ($3 === o) return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$3] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h3 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $3 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, function(t3, r3) {
            return r3 || function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h3(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h3(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h3(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h3(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $3(s2, u2, true);
                case "A":
                  return $3(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t3) || i2.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $3, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h2:
              $3 = D2() / 12;
              break;
            case c:
              $3 = D2();
              break;
            case f:
              $3 = D2() / 3;
              break;
            case o:
              $3 = (g2 - v2) / 6048e5;
              break;
            case a:
              $3 = (g2 - v2) / 864e5;
              break;
            case u:
              $3 = g2 / n;
              break;
            case s:
              $3 = g2 / e;
              break;
            case i:
              $3 = g2 / t;
              break;
            default:
              $3 = g2;
          }
          return l2 ? $3 : b.a($3);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r2 = w(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), k = _.prototype;
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h2], ["$D", d]].forEach(function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    });
  })(dayjs_min$1$1);
  return dayjs_min$1$1.exports;
}
var dayjs_minExports$1 = requireDayjs_min$1();
var dayjs$1 = /* @__PURE__ */ getDefaultExportFromCjs$2(dayjs_minExports$1);
var sv$1$1 = { exports: {} };
var sv$2 = sv$1$1.exports;
var hasRequiredSv$1;
function requireSv$1() {
  if (hasRequiredSv$1) return sv$1$1.exports;
  hasRequiredSv$1 = 1;
  (function(module, exports) {
    !function(e, t) {
      module.exports = t(requireDayjs_min$1());
    }(sv$2, function(e) {
      function t(e2) {
        return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
      }
      var a = t(e), d = { name: "sv", weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(e2) {
        var t2 = e2 % 10;
        return "[" + e2 + (1 === t2 || 2 === t2 ? "a" : "e") + "]";
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" } };
      return a.default.locale(d, null, true), d;
    });
  })(sv$1$1);
  return sv$1$1.exports;
}
requireSv$1();
var weekOfYear$2$1 = { exports: {} };
var weekOfYear$1$1 = weekOfYear$2$1.exports;
var hasRequiredWeekOfYear$1;
function requireWeekOfYear$1() {
  if (hasRequiredWeekOfYear$1) return weekOfYear$2$1.exports;
  hasRequiredWeekOfYear$1 = 1;
  (function(module, exports) {
    !function(e, t) {
      module.exports = t();
    }(weekOfYear$1$1, function() {
      var e = "week", t = "year";
      return function(i, n, r) {
        var f = n.prototype;
        f.week = function(i2) {
          if (void 0 === i2 && (i2 = null), null !== i2) return this.add(7 * (i2 - this.week()), "day");
          var n2 = this.$locale().yearStart || 1;
          if (11 === this.month() && this.date() > 25) {
            var f2 = r(this).startOf(t).add(1, t).date(n2), s = r(this).endOf(e);
            if (f2.isBefore(s)) return 1;
          }
          var a = r(this).startOf(t).date(n2).startOf(e).subtract(1, "millisecond"), o = this.diff(a, e, true);
          return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
        }, f.weeks = function(e2) {
          return void 0 === e2 && (e2 = null), this.week(e2);
        };
      };
    });
  })(weekOfYear$2$1);
  return weekOfYear$2$1.exports;
}
var weekOfYearExports$1 = requireWeekOfYear$1();
var weekOfYear$3 = /* @__PURE__ */ getDefaultExportFromCjs$2(weekOfYearExports$1);
dayjs$1.extend(weekOfYear$3);
var DateFormat$1;
(function(DateFormat2) {
  DateFormat2["FULL"] = "full";
  DateFormat2["LONG"] = "long";
  DateFormat2["ISO8601"] = "iso-8601";
  DateFormat2["YYYYMMDD"] = "YYYYMMDD";
})(DateFormat$1 || (DateFormat$1 = {}));
var Locale$1;
(function(Locale2) {
  Locale2["SWEDISH"] = "sv";
  Locale2["ENGLISH"] = "en";
})(Locale$1 || (Locale$1 = {}));
function getDefaultLocale$1() {
  return Locale$1.SWEDISH;
}
let _locale = getDefaultLocale$1();
function getLocale() {
  return _locale;
}
var Weekday$1;
(function(Weekday2) {
  Weekday2[Weekday2["MONDAY"] = 1] = "MONDAY";
  Weekday2[Weekday2["TUESDAY"] = 2] = "TUESDAY";
  Weekday2[Weekday2["WEDNESDAY"] = 3] = "WEDNESDAY";
  Weekday2[Weekday2["THURSDAY"] = 4] = "THURSDAY";
  Weekday2[Weekday2["FRIDAY"] = 5] = "FRIDAY";
  Weekday2[Weekday2["SATURDAY"] = 6] = "SATURDAY";
  Weekday2[Weekday2["SUNDAY"] = 7] = "SUNDAY";
})(Weekday$1 || (Weekday$1 = {}));
({
  [Locale$1.SWEDISH]: [
    {
      weekday: Weekday$1.MONDAY,
      name: "måndag",
      shortName: "mån"
    },
    {
      weekday: Weekday$1.TUESDAY,
      name: "tisdag",
      shortName: "tis"
    },
    {
      weekday: Weekday$1.WEDNESDAY,
      name: "onsdag",
      shortName: "ons"
    },
    {
      weekday: Weekday$1.THURSDAY,
      name: "torsdag",
      shortName: "tor"
    },
    {
      weekday: Weekday$1.FRIDAY,
      name: "fredag",
      shortName: "fre"
    },
    {
      weekday: Weekday$1.SATURDAY,
      name: "lördag",
      shortName: "lör"
    },
    {
      weekday: Weekday$1.SUNDAY,
      name: "söndag",
      shortName: "sön"
    }
  ],
  [Locale$1.ENGLISH]: [
    {
      weekday: Weekday$1.MONDAY,
      name: "Monday",
      shortName: "Mon"
    },
    {
      weekday: Weekday$1.TUESDAY,
      name: "Tuesday",
      shortName: "Tue"
    },
    {
      weekday: Weekday$1.WEDNESDAY,
      name: "Wednesday",
      shortName: "Wed"
    },
    {
      weekday: Weekday$1.THURSDAY,
      name: "Thursday",
      shortName: "Thu"
    },
    {
      weekday: Weekday$1.FRIDAY,
      name: "Friday",
      shortName: "Fri"
    },
    {
      weekday: Weekday$1.SATURDAY,
      name: "Saturday",
      shortName: "Sat"
    },
    {
      weekday: Weekday$1.SUNDAY,
      name: "Sunday",
      shortName: "Sun"
    }
  ]
});
const ISO8601_YYYY_MM_DD$1 = "YYYY-MM-DD";
const formatter = {
  [Locale$1.SWEDISH]: {
    [DateFormat$1.FULL]: "dddd D MMMM YYYY",
    [DateFormat$1.LONG]: "D MMMM YYYY",
    [DateFormat$1.ISO8601]: ISO8601_YYYY_MM_DD$1,
    [DateFormat$1.YYYYMMDD]: "YYYYMMDD"
  },
  [Locale$1.ENGLISH]: {
    [DateFormat$1.FULL]: "dddd, D MMMM YYYY",
    [DateFormat$1.LONG]: "D MMMM YYYY",
    [DateFormat$1.ISO8601]: ISO8601_YYYY_MM_DD$1,
    [DateFormat$1.YYYYMMDD]: "YYYYMMDD"
  }
};
class FDate {
  constructor(value) {
    __publicField(this, "value");
    this.value = dayjs$1(value, ISO8601_YYYY_MM_DD$1, true);
  }
  /**
   * Create {@link FDate} with an invalid state.
   *
   * @internal
   */
  static invalid() {
    return new FDate("<invalid>");
  }
  /**
   * Create {@link FDate} from current date.
   *
   * ```
   * FDate.now()
   * ```
   *
   * @public
   */
  static now() {
    return new FDate();
  }
  /**
   * Create {@link FDate} from ISO8601 string.
   *
   * ```
   * FDate.fromIso("2022-04-20")
   * ```
   *
   * @public
   */
  static fromIso(value) {
    const match2 = value.match(/^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/);
    if (match2 && match2.groups) {
      const date = new FDate(value);
      const { month } = match2.groups;
      if (date.isValid() && date.month === parseInt(month, 10)) {
        return date;
      }
    }
    return FDate.invalid();
  }
  /**
   * Create {@link FDate} from `Date`.
   *
   * ```
   * FDate.fromDate(new Date())
   * ```
   *
   * @public
   */
  static fromDate(value) {
    return new FDate(value);
  }
  /**
   * Create {@link FDate} from year, month, day.
   *
   * ```
   * FDate.fromYearMonthDay(2023, 1, 1) // => 2023-01-01
   * FDate.fromYearMonthDay("2023", "01", "01") // => 2023-01-01
   * ```
   *
   * @public
   */
  static fromYearMonthDay(year, month, day) {
    const paddedMonth = month.toString().padStart(2, "0");
    const paddedDay = day.toString().padStart(2, "0");
    const iso = `${year}-${paddedMonth}-${paddedDay}`;
    return FDate.fromIso(iso);
  }
  /**
   * Get the year.
   *
   * ```
   * FDate.now().year()// => 2022
   * ```
   *
   * @public
   */
  get year() {
    return this.value.year();
  }
  /**
   * Get the month.
   *
   * Months are one-indexed, so January is month 1.
   *
   * ```
   * FDate.now().month()// => 1-12
   * ```
   *
   * @public
   */
  get month() {
    return this.value.month() + 1;
  }
  /**
   * Get the week according to the Swedish locale.
   *
   * @public
   */
  get week() {
    return this.value.locale(Locale$1.SWEDISH).week();
  }
  /**
   * Get the day of the month.
   *
   * ```
   * FDate.now().day// => 1-31
   * ```
   *
   * @public
   */
  get day() {
    return this.value.date();
  }
  /**
   * Get the name of the month.
   *
   * ```
   * FDate.now().monthName// => January
   * ```
   *
   * @public
   */
  get monthName() {
    if (this.isValid()) {
      return this.value.locale(getLocale()).format("MMMM");
    } else {
      return "";
    }
  }
  /**
   * Get the short name of the month.
   *
   * ```
   * FDate.now().monthNameShort// => Jan
   * ```
   *
   * @public
   */
  get monthNameShort() {
    if (this.isValid()) {
      return this.value.locale(getLocale()).format("MMM");
    } else {
      return "";
    }
  }
  /**
   * Get the name of the day.
   *
   * ```
   * FDate.now().dayName// => Monday
   * ```
   *
   * @public
   */
  get dayName() {
    if (this.isValid()) {
      return this.value.locale(getLocale()).format("dddd");
    } else {
      return "";
    }
  }
  /**
   * Get the short name of the day.
   *
   * ```
   * FDate.now().dayNameShort// => Mon
   * ```
   *
   * @public
   */
  get dayNameShort() {
    if (this.isValid()) {
      return this.value.locale(getLocale()).format("ddd");
    } else {
      return "";
    }
  }
  /**
   * Get number of the day in a week.
   * Returns `Weekday` enum.
   * If date is invalid, `0` is returned.
   *
   * ```
   * FDate.now().weekDay// => Weekday.MONDAY / 1
   * ```
   *
   * @public
   */
  get weekDay() {
    if (!this.isValid()) {
      return 0;
    }
    const result = parseInt(this.value.format("d"), 10);
    if (!result) {
      return Weekday$1.SUNDAY;
    }
    return result;
  }
  /**
   * This returns a `boolean` indicating whether the FDate object contains a valid date or not.
   *
   * ```
   * FDate().isValid()// => boolean
   * ```
   *
   * @public
   */
  isValid() {
    return this.value.isValid();
  }
  /**
   * Returns a cloned {@link FDate} object and set it to the start of month.
   *
   * @public
   */
  startOfMonth() {
    return new FDate(this.value.startOf("month"));
  }
  /**
   * Returns a cloned {@link FDate} object and set it to the end of month.
   *
   * @public
   */
  endOfMonth() {
    return new FDate(this.value.endOf("month"));
  }
  /**
   * Returns a new {@link FDate} object with a specified amount of days added.
   * Specify a negative amount in order to subtract days.
   *
   * ```
   * FDate().addDays(7)// => FDate
   * ```
   *
   * @public
   */
  addDays(value) {
    return new FDate(this.value.add(value, "day"));
  }
  /**
   * Returns a cloned {@link FDate} object with a specified amount of months added.
   * Specify a negative amount in order to subtract months.
   *
   * ```
   * FDate().addMonths(7)// => FDate
   * ```
   *
   * @public
   */
  addMonths(value) {
    return new FDate(this.value.add(value, "month"));
  }
  /**
   * Returns a new {@link FDate} object with a specified amount of years added.
   * Specify a negative amount in order to subtract years.
   *
   * ```
   * FDate().addYears(7)// => FDate
   * ```
   *
   * @public
   */
  addYears(value) {
    return new FDate(this.value.add(value, "year"));
  }
  next() {
    return this.addDays(1);
  }
  /**
   * Compares two {@link FDate} objects and returns `true` if they represent the
   * same date.
   *
   * Invalid dates always returns `false`.
   *
   * @public
   * @param rhs - The date to compare with.
   * @returns `true` if the dates represent the same date.
   */
  equals(rhs) {
    if (typeof rhs === "string") {
      rhs = FDate.fromIso(rhs);
    }
    return this.value.isSame(rhs.value, "day");
  }
  /**
   * Returns true if this date is before given date.
   *
   * If the dates are the same this function returns false.
   */
  isBefore(rhs) {
    if (typeof rhs === "string") {
      rhs = FDate.fromIso(rhs);
    }
    return this.value.isBefore(rhs.value);
  }
  /**
   * Returns true if this date is after given date.
   *
   * If the dates are the same this function returns false.
   */
  isAfter(rhs) {
    if (typeof rhs === "string") {
      rhs = FDate.fromIso(rhs);
    }
    return this.value.isAfter(rhs.value);
  }
  /**
   * Compares two {@link FDate} objects. Returns and integer indicating whenever
   * `a` comes before or after or is equal to `b`.
   *
   * - `-1` if `a` beomes before `b`.
   * - `0` if `a` and `b` are the same date.
   * - `1` if `a` beomes after `b`.
   *
   * If either or both date is invalid the result is undefined behaviour and
   * should not be relied on. Use {@link FDate.isValid} to ensure validity
   * first, e.g. `myArray.filter(it => it.isValid())` before sorting.
   *
   * @public
   * @param a - First date object to compare.
   * @param b - Second date object to compare.
   * @returns `-1`, `0` or `1`
   */
  static compare(a, b) {
    if (typeof a === "string") {
      a = FDate.fromIso(a);
    }
    if (typeof b === "string") {
      b = FDate.fromIso(b);
    }
    const aInvalid = !a.isValid();
    const bInvalid = !b.isValid();
    if (aInvalid || bInvalid) {
      if (aInvalid && bInvalid) {
        return 0;
      } else if (aInvalid) {
        return 1;
      } else {
        return -1;
      }
    }
    if (a.value.isSame(b.value)) {
      return 0;
    } else if (a.value.isBefore(b.value)) {
      return -1;
    } else {
      return 1;
    }
  }
  /**
   * Returns a string representation of the date.
   *
   * ```
   * FDate().toString() // "2022-05-04"
   * FDate().toString(DateFormat.FULL) // "onsdag 4 maj 2022"
   * FDate().toString(DateFormat.LONG) // "4 maj 2022"
   * FDate().toString(DateFormat.ISO8601) // "2022-04-20"
   * ```
   *
   * @public
   * @param format - Format to use.
   */
  toString(format = DateFormat$1.ISO8601) {
    if (this.isValid()) {
      const template = formatter[getLocale()][format];
      return this.value.locale(getLocale()).format(template);
    } else {
      return "";
    }
  }
  /**
   * To serialize as an ISO8601 string.
   *
   * ```
   * FDate().toJSON() // "2019-01-25"
   * ```
   *
   * @public
   */
  toJSON() {
    return this.toString(DateFormat$1.ISO8601);
  }
}
function parseDate(value) {
  if (isEmpty(value)) {
    return void 0;
  }
  const normalized = normalizeDateFormat(value);
  if (!normalized) {
    return void 0;
  }
  const date = FDate.fromIso(normalized);
  if (date.isValid()) {
    return date.toString();
  } else {
    return void 0;
  }
}
function stripWhitespace(text) {
  return text.replace(/\s+/g, "");
}
const NUMBER_REGEXP$1 = /^([-]?[0-9]+)([,.][0-9]+)?$/;
function replaceCommaWithDot(str) {
  return str.replace(",", ".");
}
function replaceMinusSignWithDash(str) {
  return str.replace("−", "-");
}
function parseNumber(value) {
  if (isEmpty(value)) {
    return void 0;
  }
  const stripped = stripWhitespace(value);
  const numberString = replaceCommaWithDot(replaceMinusSignWithDash(stripped));
  if (!NUMBER_REGEXP$1.test(numberString)) {
    return void 0;
  }
  const number = Number(numberString);
  return isNaN(number) ? void 0 : number;
}
function getNowDetails(now) {
  const nowIso = now.toString();
  return {
    nowCentury: nowIso.substring(0, 2),
    nowYear: nowIso.substring(2, 4),
    nowMonthDay: nowIso.substring(5, 7) + nowIso.substring(8, 10)
  };
}
function resolveCentury(year, month, day, hasPlus, now) {
  const { nowCentury, nowYear, nowMonthDay } = getNowDetails(now);
  let subtractCenturies = 0;
  if (hasPlus) {
    subtractCenturies += 1;
  }
  if (year > nowYear || year === nowYear && !hasPlus && `${month}${day}` > nowMonthDay) {
    subtractCenturies += 1;
  }
  return (Number(nowCentury) - subtractCenturies).toString();
}
const PERSONNUMMER_REGEXP = /^(?<century>\d{2})?(?<year>\d{2})(?<month>\d{2})(?<day>\d{2})(?<sign>-|\+)?(?<check>\d{4})$/;
function getDayWithoutSamordning(day) {
  return (Number(day) % 60).toString().padStart(2, "0");
}
function getPersonnummerString(century, year, month, day, check2) {
  return `${century}${year}${month}${day}-${check2}`;
}
function isValidDate(date, now) {
  if (!date.isValid() || date.isBefore("1840-05-06") || date.isAfter(now)) {
    return false;
  }
  return true;
}
function parsePersonnummer(value, now = FDate.now()) {
  var _a;
  if (!isSet(value)) {
    return void 0;
  }
  const match2 = stripWhitespace(value).match(PERSONNUMMER_REGEXP);
  if (!match2) {
    return void 0;
  }
  const { year, month, day, sign, check: check2 } = match2.groups;
  const dayWithoutSamordning = getDayWithoutSamordning(day);
  const century = ((_a = match2.groups) == null ? void 0 : _a.century) ?? resolveCentury(year, month, dayWithoutSamordning, sign === "+", now);
  if (day === "60") {
    return getPersonnummerString(century, year, month, day, check2);
  }
  const date = FDate.fromYearMonthDay(century + year, month, dayWithoutSamordning);
  if (!isValidDate(date, now)) {
    return void 0;
  }
  return getPersonnummerString(century, year, month, day, check2);
}
function parsePersonnummerLuhn(value) {
  const parsed = parsePersonnummer(value);
  if (!parsed) {
    return void 0;
  }
  if (!validChecksum(parsed)) {
    return void 0;
  }
  return parsed;
}
function formatPersonnummerToDate(value) {
  var _a;
  const datePart = parseDate(((_a = parsePersonnummer(value)) == null ? void 0 : _a.slice(0, 8)) || "");
  if (!datePart) {
    return void 0;
  }
  return FDate.fromIso(datePart);
}
const PLUSGIRO_REGEXP = /^\d{1,7}[-]?\d{1}$/;
function hyphenShouldBeAdded(value) {
  return value.length >= 2 && value.length <= 8;
}
function parsePlusgiro(value) {
  if (isEmpty(value)) {
    return void 0;
  }
  value = value.replace(/ /g, "");
  value = value.replace(/\D/g, "");
  if (!PLUSGIRO_REGEXP.test(value) || !testLuhnChecksum(value.replace(/\D/g, ""))) {
    return void 0;
  }
  if (hyphenShouldBeAdded(value)) {
    value = `${value.substring(0, value.length - 1)}-${value[value.length - 1]}`;
  }
  const startOffset = 4;
  let formattedString = value.substring(value.length - startOffset, value.length);
  const step = 2;
  for (let i = value.length - startOffset; i >= (value.length === 9 ? 3 : 1); i -= step) {
    formattedString = `${value.substring(Math.max(i - step, 0), i)} ${formattedString}`;
  }
  if (value.length === 9) {
    formattedString = value.substring(0, 1) + formattedString;
  }
  return formattedString;
}
const POSTAL_CODE_REGEXP = /^([1-9]{1}\d{2}) ?(\d{2})$/;
function formatPostalCode(value) {
  if (isEmpty(value)) {
    return void 0;
  }
  const match2 = value.match(POSTAL_CODE_REGEXP);
  if (match2 === null) {
    return void 0;
  }
  return `${match2[1]} ${match2[2]}`;
}
function parsePostalCode(value) {
  return formatPostalCode(value);
}
const ORGANISATIONSNUMMER_REGEXP = /^([0-9]{6})-?([0-9]{4})$/;
function parseOrganisationsnummer(value) {
  if (isEmpty(value)) {
    return void 0;
  }
  const match2 = value.match(ORGANISATIONSNUMMER_REGEXP);
  if (!match2) {
    return void 0;
  }
  if (!testLuhnChecksum(`${match2[1]}${match2[2]}`)) {
    return void 0;
  }
  return `${match2[1]}-${match2[2]}`;
}
function documentOrderComparator(a, b) {
  if (!a) {
    return 1;
  }
  if (!b) {
    return -1;
  }
  const BITMASK = Node.DOCUMENT_POSITION_DISCONNECTED | Node.DOCUMENT_POSITION_PRECEDING;
  const result = a.compareDocumentPosition(b) & BITMASK;
  return result - 1;
}
function isVisible(element) {
  return Boolean(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
}
const FRAMERATE = 60;
function easeInEaseOut(a, b, s) {
  return a + (b - a) * (1 + Math.cos(Math.PI + s * Math.PI)) / 2;
}
function elementTop(element) {
  const rect = element.getBoundingClientRect();
  const scrollTop = window.pageYOffset;
  const clientTop = document.documentElement.clientTop;
  return rect.top + scrollTop - clientTop;
}
function scrollTo(element, arg = 0) {
  if (typeof arg === "number") {
    const offset = arg;
    const bodyRect = document.body.getBoundingClientRect();
    const elemRect = element.getBoundingClientRect();
    const scroll = elemRect.top - bodyRect.top - offset;
    window.scrollTo({ top: scroll, behavior: "smooth" });
    return Promise.resolve();
  } else {
    return scrollToSlow(element, arg.duration || 500, arg.offset || 0);
  }
}
function scrollToSlow(element, duration, offset = 0) {
  const steps = duration / 1e3 * FRAMERATE;
  const interval = duration / steps;
  const target = elementTop(element) - offset;
  const scrollRange = target - window.pageYOffset;
  function tween(s) {
    return target - easeInEaseOut(scrollRange, 0, s);
  }
  return new Promise((resolve2) => {
    let stepsLeft = steps;
    const requestAnimationFrame2 = setInterval(() => {
      if (stepsLeft-- > 0) {
        const s = 1 - stepsLeft / steps;
        const top = tween(s);
        window.scrollTo({ top, left: 0 });
      } else {
        clearInterval(requestAnimationFrame2);
        resolve2();
      }
    }, interval);
  });
}
const sym = Symbol("focus-stack");
let _stackHandleCounter = 0;
const _focusElementStack = [];
const TABBABLE_ELEMENT_SELECTOR = [
  "a[href]",
  "area[href]",
  "input",
  "select",
  "textarea",
  "button",
  "iframe",
  "object",
  "embed",
  "*[contenteditable]",
  '*[tabindex]:not([tabindex="-1"])'
].join(", ");
function isHTMLElement(element) {
  return Boolean(element && element instanceof HTMLElement);
}
function focus(element, options = {}) {
  if (typeof options === "boolean") {
    options = { force: options };
  }
  if (isHTMLElement(element)) {
    if (options.force && !isFocusable(element)) {
      element.setAttribute("tabindex", "-1");
    }
    const { force, scrollToTop, ...params } = options;
    element.focus(params);
    if (scrollToTop) {
      element.focus({ ...params, preventScroll: true });
      scrollTo(element);
    } else {
      element.focus(params);
    }
  }
}
function isFocusable(element) {
  const visible = element instanceof HTMLElement ? isVisible(element) : false;
  return isTabbable(element) || visible && element.matches('*[tabindex="-1"]');
}
function isDisabled(element) {
  return Boolean(element.disabled);
}
function isTabbable(element) {
  const tabindexAttr = element instanceof HTMLElement ? element.tabIndex : 0;
  const visible = element instanceof HTMLElement ? isVisible(element) : false;
  return !isDisabled(element) && tabindexAttr !== -1 && visible && element.matches(TABBABLE_ELEMENT_SELECTOR);
}
function findTabbableElements(root2) {
  const selector = TABBABLE_ELEMENT_SELECTOR;
  const nodes = root2.querySelectorAll(selector);
  return Array.from(nodes).filter(isTabbable);
}
function pushFocus(element) {
  const stackFrame = {
    id: _stackHandleCounter++,
    element: document.activeElement
  };
  _focusElementStack.push(stackFrame);
  focus(element);
  return { [sym]: stackFrame.id };
}
function popFocus(handle) {
  if (_focusElementStack.length === 0) {
    const emptyStackErrorMsg = "Can not call pop on an empty focus stack";
    if (configLogic.production) {
      console.error(emptyStackErrorMsg);
      return;
    } else {
      throw new Error(emptyStackErrorMsg);
    }
  }
  const top = _focusElementStack.pop();
  if ((top == null ? void 0 : top.id) !== handle[sym]) {
    const outOfOrderErrorMsg = `push/pop called out-of-order. Expected stack handle id: ${top == null ? void 0 : top.id} but got ${handle[sym]}`;
    if (configLogic.production) {
      console.error(outOfOrderErrorMsg);
      return;
    } else {
      throw new Error(outOfOrderErrorMsg);
    }
  }
  focus(top == null ? void 0 : top.element);
}
function isRadiobuttonOrCheckbox(element) {
  return element instanceof HTMLInputElement && (element.type === "radio" || element.type === "checkbox");
}
function isValidatableFormElement(element) {
  return element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement;
}
class DefaultTranslationProvider {
  constructor() {
    __publicField(this, "language", "sv");
  }
  get currentLanguage() {
    return this.language;
  }
  async changeLanguage(language) {
    this.language = language;
  }
  translate(key, defaultValueOrArgs, args) {
    if (this.language === "cimode") {
      return key;
    }
    if (!isSet(defaultValueOrArgs) || typeof defaultValueOrArgs !== "string") {
      throw new Error("Translation failed: No default value specified (key translation is not supported by the default provider)");
    }
    return isSet(args) ? this.interpolate(defaultValueOrArgs, args) : defaultValueOrArgs;
  }
  interpolate(defaultValue, args) {
    return defaultValue.replace(/{{\s*([^\s]+)\s*}}/g, (match2, key) => {
      return String(args[key]) || match2;
    });
  }
}
class TranslationServiceImpl {
  constructor() {
    __publicField(this, "provider", new DefaultTranslationProvider());
  }
  changeProvider(newProvider) {
    this.provider = newProvider;
  }
}
const TranslationService = new TranslationServiceImpl();
class ValidationErrorMessageBuilder {
  constructor() {
    __publicField(this, "validatorMessageMap");
    this.validatorMessageMap = {};
  }
  /**
   * Create a new builder.
   */
  static create() {
    return new ValidationErrorMessageBuilder();
  }
  /**
   * Map the validator name message towards an error message.
   *
   * @param validatorName - the name of the validator
   * @param message - the error message
   * @param elementType - limit to a specific element type
   */
  map(validatorName, message, elementType) {
    let key = validatorName;
    if (elementType) {
      key += `.${elementType}`;
    }
    this.validatorMessageMap[key] = message;
    return this;
  }
  /**
   * Validators that coexists on same element can have a combined message,
   * i.e. if a element have the `required` and the `personnummer` validator
   * the required error message could be combined with
   * `mapCombined('required','personnummer', 'You must enter a social security number!');`.
   *
   * @param validatorName - the name of the validator
   * @param dependentValidatorName - the name of the combined validator
   * @param message - the error message
   * @param elementType - limit to a specific element type
   */
  mapCombined(validatorName, dependentValidatorName, message, elementType) {
    return this.map(`${validatorName}.${dependentValidatorName}`, message, elementType);
  }
  /**
   * Build the translation map.
   *
   * @returns the created map.
   */
  build() {
    return this.validatorMessageMap;
  }
}
function getErrorMessages() {
  return ValidationErrorMessageBuilder.create().map("bankAccountNumber", "Kontonumret är inte rätt ifyllt. Kolla att det stämmer.").mapCombined("required", "bankAccountNumber", "Fyll i ett kontonummer.").map("bankgiro", "Skriv bankgironumret med sju eller åtta siffror och bindestreck.").mapCombined("required", "bankgiro", "Fyll i bankgironumret.").mapCombined("maxLength", "bankgiro", "Bankgironumret kan inte ha mer än 9 tecken.").map("clearingNumber", "Clearingnumret är inte rätt ifyllt. Kolla att det stämmer.").mapCombined("required", "clearingNumber", "Fyll i ett clearingnummer.").map("currency", "Fyll i ett belopp.").mapCombined("required", "currency", "Fyll i ett belopp.").map("date", "Du har skrivit ett felaktigt datum.").mapCombined("required", "date", "Välj ett datum.").map("dateFormat", "Skriv datumet med åtta siffror.").map("decimal", "Fyll i ett värde med rätt antal decimaler.").map("email", "Mejladressen är inte korrekt ifylld.").mapCombined("required", "email", "Fyll i en mejladress.").mapCombined("matches", "email", "Kolla att mejladressen stämmer.").map("greaterThan", "Fyll i en högre siffra.").map("integer", "Fyll i siffror utan decimal.").mapCombined("required", "integer", "Fyll i en siffra.").map("lessThan", "Du har fyllt i en för hög siffra.").map("minDate", "Datumet ligger för långt bak i tiden.").mapCombined("minDate", "date", "Datumet ligger för långt bak i tiden.").map("maxDate", "Datumet ligger för långt fram i tiden.").mapCombined("maxDate", "date", "Datumet ligger för långt fram i tiden.").map("maxValue", "Du har fyllt i en för hög siffra.").map("minValue", "Fyll i en högre siffra.").map("number", "Du har fyllt i ett ogiltigt tecken. Fyll i siffror.").mapCombined("required", "number", "Fyll i en siffra.").mapCombined("minValue", "number", "Fyll i en högre siffra.").mapCombined("maxValue", "number", "Du har fyllt i en för hög siffra.").map("organisationsnummer", "Fyll i organisationsnumret med 10 siffror, till exempel 999999-9999.").mapCombined("required", "organisationsnummer", "Fyll i organisationsnumret med 10 siffror, till exempel 999999-9999.").mapCombined("maxLength", "organisationsnummer", "Organisationsnumret kan inte ha mer än 11 tecken.").map("percent", "Fyll i procent med en siffra.").mapCombined("integer", "percent", "Fyll i procent utan decimal.").mapCombined("required", "percent", "Fyll i en siffra.").mapCombined("minValue", "percent", "Fyll i en högre siffra.").mapCombined("maxValue", "percent", "Fyll i en lägre siffra.").map("personnummerFormat", "Skriv personnumret med 10 siffror.").mapCombined("required", "personnummerFormat", "Skriv personnumret med 10 siffror.").mapCombined("maxLength", "personnummerFormat", "Skriv personnumret med 10 siffror.").map("personnummerLuhn", "Kolla att personnumret stämmer.").map("postalCode", "Fyll i postnumret med fem siffror.").mapCombined("required", "postalCode", "Fyll i ett postnummer.").mapCombined("maxLength", "postalCode", "Postnumret kan inte ha mer än 13 tecken.").map("phoneNumber", "Telefonnumret är inte rätt ifyllt.").mapCombined("required", "phoneNumber", "Fyll i ett telefonnummer.").mapCombined("matches", "phoneNumber", "Kolla att telefonnumret stämmer.").map("plusgiro", "Skriv plusgironumret med siffror och bindestreck.").mapCombined("required", "plusgiro", "Fyll i plusgironumret.").mapCombined("maxLength", "plusgiro", "Plusgironumret kan inte ha mer än 11 tecken.").map("matches", "Fälten stämmer inte överens.").map("required", "Fyll i text.").map("required", "Välj minst ett alternativ.", "checkbox").map("required", "Välj ett av alternativen.", "radio").map("required", "Välj ett av alternativen.", "select").map("invalidDates", "Du kan inte välja det här datumet.").map("invalidWeekdays", "Du kan inte välja det här datumet.").map("whitelist", 'Fältet innehåller otillåtna tecken. Exempel på ogiltiga tecken är /, % och ".').build();
}
function createFieldsetValidator(element, validationService) {
  new FieldsetValidationHandler(element, validationService);
}
class FieldsetValidationHandler {
  constructor(element, validationService) {
    __publicField(this, "hasDocumentListener", false);
    __publicField(this, "documentFocusInRef");
    __publicField(this, "element");
    __publicField(this, "validationService");
    Object.assign(this);
    this.element = element;
    this.validationService = validationService;
    element.addEventListener("focusin", (event) => this.onFocusIn(event));
    element.addEventListener("change", this.documentFocusIn.bind(this));
    Array.from(this.element.querySelectorAll("input[type='checkbox'], input[type='radio']")).filter((childElement) => childElement.closest("fieldset") === element).forEach((childElement) => {
      childElement.setAttribute("required", "");
    });
  }
  hasFocusableTarget(target) {
    return target ? Array.from(this.element.querySelectorAll("input, label")).some((element) => element === target) : false;
  }
  onFocusIn(event) {
    if (this.hasFocusableTarget(event.target) && !this.hasDocumentListener) {
      this.documentFocusInRef = this.documentFocusIn.bind(this);
      document.addEventListener("focusin", this.documentFocusInRef);
      document.addEventListener("click", this.documentFocusInRef);
      this.hasDocumentListener = true;
    }
  }
  documentFocusIn(event) {
    this.validationService.setTouched(this.element);
    const children = Array.from(this.element.querySelectorAll("input"));
    for (const childElement of children) {
      this.validationService.setTouched(childElement);
    }
    if (!this.hasFocusableTarget(event.target)) {
      this.removeEventListeners();
    } else if (event.target.checked) {
      this.validateFieldsetAndChildren();
    }
  }
  removeEventListeners() {
    if (this.hasDocumentListener && this.documentFocusInRef) {
      document.removeEventListener("focusin", this.documentFocusInRef);
      document.removeEventListener("click", this.documentFocusInRef);
      this.hasDocumentListener = false;
      this.validateFieldsetAndChildren();
    }
  }
  validateFieldsetAndChildren() {
    const validatableElements = document.querySelectorAll(`fieldset#${this.element.id}, #${this.element.id} input[type='checkbox'], #${this.element.id} input[type='radio']`);
    validatableElements.forEach((element) => {
      if (element.id) {
        this.validationService.validateElement(element.id);
      }
    });
  }
}
const registry = {};
function getCandidates$1(validatorName, validators, elementType) {
  const candidates = [];
  const combinedNames = validators.map((it) => `${validatorName}.${it.name}`);
  if (elementType) {
    const combinedNamesWithType = combinedNames.map((it) => `${it}.${elementType}`);
    candidates.push(...combinedNamesWithType);
  }
  candidates.push(...combinedNames);
  if (elementType) {
    candidates.push(`${validatorName}.${elementType}`);
  }
  candidates.push(validatorName);
  return candidates;
}
function getElementType(element) {
  if (element instanceof HTMLInputElement) {
    return element.type === "checkbox" ? "checkbox" : element.type === "radio" ? "radio" : "text";
  } else if (element instanceof HTMLTextAreaElement) {
    return "textarea";
  } else if (element instanceof HTMLSelectElement) {
    return "select";
  } else if (element instanceof HTMLFieldSetElement) {
    return getElementType(element.querySelector("input[type='checkbox'], input[type='radio']"));
  }
}
function isValidatableHTMLElement(element) {
  return element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement || element instanceof HTMLFieldSetElement;
}
function hasValidators(element) {
  return typeof element.dataset.validation === "string";
}
class ValidationServiceImpl {
  constructor() {
    __publicField(this, "validationStates", {});
    __publicField(this, "elementValidatorsReferences", {});
    __publicField(this, "validationErrorMessages", {});
    this.addValidationErrorMessages(getErrorMessages());
  }
  getElementsAndValidators() {
    return this.elementValidatorsReferences;
  }
  get isAnyTouched() {
    return Object.values(this.validationStates).some((item) => item.touched === true);
  }
  addValidationErrorMessages(validationErrorMessages) {
    this.validationErrorMessages = {
      ...this.validationErrorMessages,
      ...validationErrorMessages
    };
  }
  registerValidator(validator) {
    const { name } = validator;
    registry[name] = validator;
  }
  hasExistingReference(elementValidatorsReference, element) {
    return isSet(elementValidatorsReference) && elementValidatorsReference.element === element;
  }
  shouldApplyNewConfigOnBaseConfig(isBaseConfigs, elementValidatorsReference) {
    return !isBaseConfigs && isSet(elementValidatorsReference.baseValidatorConfigs);
  }
  decideEffectiveValidatorReference(element, newValidatorConfigs, isBaseConfigs) {
    const elementValidatorsReference = this.elementValidatorsReferences[element.id];
    const hasExistingReference = this.hasExistingReference(elementValidatorsReference, element);
    let validatorConfigs;
    if (!hasExistingReference) {
      validatorConfigs = newValidatorConfigs;
    } else if (this.shouldApplyNewConfigOnBaseConfig(isBaseConfigs, elementValidatorsReference)) {
      validatorConfigs = this.mergeValidatorConfigs(elementValidatorsReference.baseValidatorConfigs, newValidatorConfigs);
    } else if (isBaseConfigs) {
      validatorConfigs = this.mergeValidatorConfigs(newValidatorConfigs, elementValidatorsReference.validatorConfigs);
      elementValidatorsReference.baseValidatorConfigs = newValidatorConfigs;
    } else {
      validatorConfigs = newValidatorConfigs;
    }
    return validatorConfigs;
  }
  dispatchValidationConfig(validatorConfigs, element) {
    const event = new CustomEvent("validation-config-update", {
      bubbles: false,
      detail: { config: validatorConfigs }
    });
    element.dispatchEvent(event);
  }
  removeValidatorsFromElement(element) {
    delete this.elementValidatorsReferences[element.id];
  }
  addValidatorsToElement(element, newValidatorConfigs, isBaseConfigs = false) {
    if (!isValidatableHTMLElement(element)) {
      return;
    }
    const validatorConfigs = this.decideEffectiveValidatorReference(element, newValidatorConfigs, isBaseConfigs);
    this.dispatchValidationConfig(validatorConfigs, element);
    if (element instanceof HTMLFieldSetElement) {
      createFieldsetValidator(element, this);
    }
    this.setRequiredAttribute(element, validatorConfigs);
    if (validatorConfigs["personnummer"] !== void 0) {
      const oldConfig = validatorConfigs["personnummer"];
      validatorConfigs["personnummerFormat"] = oldConfig;
      validatorConfigs["personnummerLuhn"] = oldConfig;
      delete validatorConfigs.personnummer;
    }
    const foundValidators = this.getValidators(validatorConfigs);
    if (foundValidators.length > 0) {
      element.dataset.validation = "";
    }
    const useInstantValidation = this.useInstantValidation(foundValidators, validatorConfigs);
    let elementValidatorsReference = this.elementValidatorsReferences[element.id];
    if (this.hasExistingReference(elementValidatorsReference, element)) {
      elementValidatorsReference.validatorConfigs = validatorConfigs;
      elementValidatorsReference.validators = foundValidators;
      elementValidatorsReference.instant = useInstantValidation;
    } else {
      elementValidatorsReference = {
        validators: foundValidators,
        validatorConfigs,
        element,
        instant: useInstantValidation,
        baseValidatorConfigs: isBaseConfigs ? validatorConfigs : void 0
      };
      this.elementValidatorsReferences[element.id] = elementValidatorsReference;
      this.createEventListeners(elementValidatorsReference);
    }
  }
  mergeValidatorConfigs(baseConfig, newConfig) {
    const required = isSet(newConfig.required) ? { required: {} } : void 0;
    return {
      ...required,
      ...baseConfig,
      ...newConfig
    };
  }
  createEventListeners(elementValidatorsReference) {
    const element = elementValidatorsReference.element;
    if (!(element instanceof HTMLFieldSetElement)) {
      element.addEventListener("input", () => {
        const validationState = this.getExistingStateOrSetDefault(element);
        validationState.serverError = void 0;
        if (elementValidatorsReference.instant) {
          validationState.touched = true;
          this.validateAndDispatchEvent("input", {
            validationState,
            elementValidatorsReference
          });
        } else {
          element.dispatchEvent(new CustomEvent("pending-validity", {
            bubbles: false
          }));
        }
      });
      element.addEventListener("change", () => {
        const validationState = this.getExistingStateOrSetDefault(element);
        validationState.touched = true;
        this.validateAndDispatchEvent("change", {
          validationState,
          elementValidatorsReference
        });
      });
      element.addEventListener("blur", () => {
        const validationState = this.getExistingStateOrSetDefault(element);
        validationState.touched = true;
        this.validateAndDispatchEvent("blur", {
          validationState,
          elementValidatorsReference
        });
      });
    }
    element.addEventListener("validate", () => {
      const validationState = this.getExistingStateOrSetDefault(element);
      this.validateAndDispatchEvent("validate", {
        validationState,
        elementValidatorsReference
      });
    });
  }
  async isValid(src, root2 = document) {
    function isValidSync(src2) {
      if (!src2) {
        return false;
      } else if (Array.isArray(src2)) {
        const array = src2;
        return array.every((it) => isValidSync(it));
      } else if (typeof src2 === "string") {
        return isValidSync(root2.querySelector(`#${src2}`));
      } else if (isValidatableFormElement(src2)) {
        return src2.validity.valid;
      } else {
        return src2.querySelectorAll(":invalid").length === 0;
      }
    }
    return isValidSync(src);
  }
  async validateElement(src) {
    if (!src) {
      return {
        isValid: true,
        isTouched: false,
        isSubmitted: false,
        error: null
      };
    }
    if (typeof src === "string") {
      const element2 = document.getElementById(src);
      if (!element2) {
        throw new Error(`Element with id "${src}" not found when calling validateElement(..)`);
      }
      src = element2;
    }
    if (!isValidatableHTMLElement(src)) {
      const tagName = src.tagName.toLowerCase();
      const ref2 = `${tagName}#${src.id}`;
      throw new Error(`Element "${ref2}" is not a validatable element`);
    }
    const element = src;
    if (!hasValidators(element)) {
      const event = new CustomEvent("validate", {
        bubbles: false
      });
      element.dispatchEvent(event);
      return {
        isValid: true,
        isTouched: false,
        isSubmitted: false,
        error: null
      };
    }
    return new Promise((resolve2, reject) => {
      const once = (event2) => {
        element.removeEventListener("validity", once);
        clearTimeout(watchdog);
        const { touched: isTouched = false, submitted: isSubmitted = false } = this.getState(element.id);
        const { isValid, validationMessage } = event2.detail;
        resolve2({
          isValid,
          isTouched,
          isSubmitted,
          error: isValid ? null : validationMessage
        });
      };
      element.addEventListener("validity", once);
      const watchdog = setTimeout(() => {
        const tagName = element.tagName.toLowerCase();
        const ref2 = `${tagName}#${element.id}`;
        element.removeEventListener("validity", once);
        reject(`Element "${ref2}" did not respond with validity event after 500ms`);
      }, 500);
      const event = new CustomEvent("validate", {
        bubbles: false
      });
      element.dispatchEvent(event);
    });
  }
  async validateAllElements(root2) {
    const elements = this.getValidatableElements(root2);
    const promises = elements.map((it) => this.validateElement(it));
    await Promise.all(promises);
  }
  setState(element, validationState) {
    if (!element) {
      return;
    } else if (typeof element === "string") {
      const found = document.getElementById(element);
      this.setState(found, validationState);
    } else if (!isValidatableHTMLElement(element)) {
      const childElements = this.getValidatableElements(element);
      for (const childElement of childElements) {
        this.setState(childElement, validationState);
      }
    } else {
      const existingState = this.validationStates[element.id];
      if (existingState) {
        this.validationStates[element.id] = {
          ...existingState,
          ...validationState
        };
      } else {
        this.validationStates[element.id] = validationState;
      }
    }
  }
  setSubmitted(element) {
    this.setState(element, {
      submitted: true
    });
  }
  setTouched(element) {
    this.setState(element, {
      touched: true
    });
  }
  setError(element, message) {
    this.setState(element, {
      serverError: message
    });
  }
  resetState(element) {
    this.setState(element, {
      touched: false,
      submitted: false,
      serverError: void 0
    });
  }
  getValidatableElements(parent) {
    if (!parent) {
      return [];
    } else if (typeof parent === "string") {
      const element = document.getElementById(parent);
      return this.getValidatableElements(element);
    } else {
      const selector = ["input", "textarea", "select", "fieldset"].join(",");
      return Array.from(parent.querySelectorAll(selector));
    }
  }
  setRequiredAttribute(element, validatorConfigs) {
    if (!validatorConfigs.required) {
      return;
    }
    if (validatorConfigs.required.enabled !== false) {
      element.dataset.required = "";
      if (isValidatableFormElement(element)) {
        element.setAttribute("required", "");
      }
    } else {
      delete element.dataset.required;
      if (isValidatableFormElement(element)) {
        element.removeAttribute("required");
      }
    }
  }
  useInstantValidation(foundValidators, validatorConfigs) {
    return foundValidators.some((validator) => {
      const config2 = validatorConfigs[validator.name];
      const instantConfig = isSet(config2) ? config2.instant : void 0;
      return validator.instant && instantConfig !== false || instantConfig === true;
    });
  }
  getState(id2) {
    return this.validationStates[id2];
  }
  getExistingStateOrSetDefault(element) {
    let validationState = this.getState(element.id);
    if (!validationState) {
      validationState = { touched: false, submitted: false };
      this.setState(element, validationState);
    }
    return validationState;
  }
  getValidators(validatorConfigs) {
    const validatorNames = Object.keys(validatorConfigs);
    return validatorNames.map((validatorName) => {
      const validator = registry[validatorName];
      if (validator) {
        return validator;
      }
      throw new Error(`Validator '${validatorName}' does not exist or is not registered, see ValidatorService.registerValidator.`);
    });
  }
  getValidatorByName(name) {
    if (!(name in registry)) {
      throw new Error(`Validator '${name}' does not exist or is not registered, see ValidatorService.registerValidator.`);
    }
    return registry[name];
  }
  validateAndDispatchEvent(nativeEvent, params) {
    const validationResult = this.validateAll(params.elementValidatorsReference.element, params.validationState, params.elementValidatorsReference.validators, params.elementValidatorsReference.validatorConfigs);
    const validityMode = this.resolveValidityMode(params.elementValidatorsReference.element, params.validationState, validationResult.isValid);
    this.dispatchValidityEvent(params.elementValidatorsReference.element, {
      ...validationResult,
      target: params.elementValidatorsReference.element,
      elementId: params.elementValidatorsReference.element.id,
      validityMode,
      nativeEvent
    });
  }
  resolveValidityMode(element, validationState, isValid) {
    if (validationState.serverError) {
      return "ERROR";
    } else if (isValid) {
      return this.resolveValidityModeWhenValid(element);
    } else {
      return this.resolveValidityModeWhenError(element, validationState.touched, validationState.submitted);
    }
  }
  resolveValidityModeWhenValid(element) {
    return this.hasValue(element) ? "VALID" : "INITIAL";
  }
  resolveValidityModeWhenError(element, touched, submitted) {
    return submitted || this.hasValue(element) ? "ERROR" : "INITIAL";
  }
  hasValue(element) {
    if (element instanceof HTMLFieldSetElement) {
      return Array.from(element.querySelectorAll("input")).some((fieldsetInputElement) => {
        return this.hasValue(fieldsetInputElement);
      });
    }
    return Boolean(isRadiobuttonOrCheckbox(element) ? element.checked : element.value);
  }
  getValue(element) {
    return element instanceof HTMLFieldSetElement || !element.value ? "" : element.value.trim();
  }
  validateAll(element, validationState, validators, validatorConfigs) {
    if (validationState.serverError) {
      return {
        isValid: false,
        validationMessage: validationState.serverError
      };
    }
    if (element.disabled) {
      return {
        isValid: true,
        validationMessage: ""
      };
    }
    const value = this.getValue(element);
    const resultFromValidators = validators.map((validator) => {
      return {
        isValid: this.validate(value, element, validator, validatorConfigs),
        name: validator.name
      };
    });
    const firstInvalidResult = resultFromValidators.find((result) => !result.isValid);
    if (firstInvalidResult) {
      const validationMessage = this.getErrorMessage(firstInvalidResult.name, validators, validatorConfigs, getElementType(element));
      return { isValid: false, validationMessage };
    } else {
      return { isValid: true, validationMessage: "" };
    }
  }
  validate(value, element, validator, validatorConfigs) {
    const validatorConfig = validatorConfigs[validator.name] || {};
    const isEnabled = validatorConfig.enabled === void 0 || validatorConfig.enabled === true;
    return isEnabled ? validator.validation(value, element, validatorConfig) : true;
  }
  getErrorMessage(validatorName, validators, validatorConfigs, elementType) {
    const validatorConfig = validatorConfigs[validatorName];
    if (validatorConfig && validatorConfig.errorMessage) {
      return validatorConfig.errorMessage;
    }
    const candidates = getCandidates$1(validatorName, validators, elementType);
    const key = candidates.find((candidate) => isSet(this.validationErrorMessages[candidate]));
    if (key) {
      return this.validationErrorMessages[key] ?? validatorName.toUpperCase();
    }
    return validatorName.toUpperCase();
  }
  getElementsAffectedByValidity(element) {
    if (element instanceof HTMLFieldSetElement) {
      return this.getValidatableElements(element).filter((childElement) => childElement.closest("fieldset") === element);
    } else {
      return [element];
    }
  }
  dispatchValidityEvent(element, validityEvent) {
    const affectedElements = this.getElementsAffectedByValidity(element);
    const validField = validityEvent.validityMode === "ERROR";
    const event = new CustomEvent("validity", {
      bubbles: true,
      detail: validityEvent
    });
    for (const affectedElement of affectedElements) {
      affectedElement.setCustomValidity(validityEvent.validationMessage);
      affectedElement.setAttribute("aria-invalid", validField.toString());
    }
    element.dispatchEvent(event);
  }
  clearAllStates() {
    this.validationStates = {};
  }
}
const ValidationService = new ValidationServiceImpl();
const bankAccountNumberValidator = {
  name: "bankAccountNumber",
  validation(value) {
    return isEmpty(value) || isSet(parseBankAccountNumber(value));
  }
};
const bankgiroValidator = {
  name: "bankgiro",
  validation(value) {
    return isEmpty(value) || isSet(parseBankgiro(value));
  }
};
function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  } else {
    return [value];
  }
}
const blacklistValidator = {
  name: "blacklist",
  validation(value, _element, config2) {
    if (!config2.values) {
      throw new Error("config.exclude must have values");
    }
    const values = toArray(config2.values);
    const found = values.some((it) => String(it) === value);
    return !found;
  }
};
const clearingNumberValidator = {
  name: "clearingNumber",
  validation(value) {
    return isEmpty(value) || isSet(parseClearingNumber(value));
  }
};
const currencyValidator = {
  name: "currency",
  validation(value) {
    return isEmpty(value) || isSet(parseNumber(value));
  }
};
const dateValidator = {
  name: "date",
  validation(value) {
    if (isEmpty(value)) {
      return true;
    }
    const normalized = normalizeDateFormat(value);
    if (!normalized) {
      return false;
    }
    const parsed = FDate.fromIso(normalized);
    return parsed.isValid();
  }
};
const dateFormatValidator = {
  name: "dateFormat",
  validation(value) {
    if (isEmpty(value)) {
      return true;
    }
    const normalized = normalizeDateFormat(value);
    return Boolean(normalized);
  }
};
function createNumberRegexp(minDecimals = 0, maxDecimals = 2) {
  return new RegExp(`^([-−]?[0-9]+)([,.][0-9]{${minDecimals},${maxDecimals}})(?<![,.])$`);
}
const decimalValidator = {
  name: "decimal",
  validation(value, _element, config2) {
    const valueWithoutWhitespace = isSet(value) ? stripWhitespace(String(value)) : value;
    const minDecimalsAsNumber = isSet(config2.minDecimals) ? Number(config2.minDecimals) : void 0;
    const maxDecimalsAsNumber = isSet(config2.maxDecimals) ? Number(config2.maxDecimals) : void 0;
    if (config2.minDecimals && isNaN(minDecimalsAsNumber)) {
      throw new Error("config.minDecimals must be a number");
    }
    if (config2.maxDecimals && isNaN(maxDecimalsAsNumber)) {
      throw new Error("config.maxDecimals must be a number");
    }
    return isEmpty(valueWithoutWhitespace) || createNumberRegexp(minDecimalsAsNumber, maxDecimalsAsNumber).test(valueWithoutWhitespace);
  }
};
const emailValidator = {
  name: "email",
  validation(value, _element, config2) {
    const maxLength = config2.maxLength || 254;
    const EMAIL_REGEXP = new RegExp(`^(?=.{1,${maxLength}}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_\`a-z{|}~åäöÅÄÖ]+(\\.[-!#$%&'*+/0-9=?A-Z^_\`a-z{|}~åäöÅÄÖ]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$`);
    return isEmpty(value) || EMAIL_REGEXP.test(value);
  }
};
function numberValidator$1(value, config2, name, compare2) {
  if (value === "") {
    return true;
  }
  const limit = config2[name];
  if (!isSet(limit)) {
    return false;
  }
  const limitAsNumber = parseNumber(String(config2[name]));
  if (limitAsNumber === void 0) {
    throw new Error(`config.${String(name)} must be a number`);
  }
  const valueAsNumber = parseNumber(value);
  if (valueAsNumber === void 0) {
    return false;
  }
  return compare2(valueAsNumber, limitAsNumber);
}
const greaterThanValidator = {
  name: "greaterThan",
  validation(value, _element, config2) {
    return numberValidator$1(value, config2, "limit", (value2, limit) => value2 > limit);
  }
};
const NUMBER_REGEXP = /^([-−]?[0-9]+)?$/;
const integerValidator = {
  name: "integer",
  validation(value) {
    const valueWithoutWhitespace = isSet(value) ? stripWhitespace(String(value)) : value;
    return isEmpty(valueWithoutWhitespace) || NUMBER_REGEXP.test(valueWithoutWhitespace);
  }
};
function isInvalidDatesConfig(value) {
  return Boolean(value.dates);
}
const invalidDatesValidator = {
  name: "invalidDates",
  validation(value, element, config2) {
    if (isEmpty(value)) {
      return true;
    }
    if (!isInvalidDatesConfig(config2)) {
      throw new Error(`Invalid invalidDates config for ${element.id}`);
    }
    return !config2.dates.includes(value);
  }
};
function isInvalidWeekdaysConfig(value) {
  return Boolean(value.days);
}
const invalidWeekdaysValidator = {
  name: "invalidWeekdays",
  validation(value, element, config2) {
    if (isEmpty(value)) {
      return true;
    }
    if (!isInvalidWeekdaysConfig(config2)) {
      throw new Error(`Invalid invalidWeekdays config for ${element.id}`);
    }
    const day = FDate.fromIso(value).weekDay;
    return !config2.days.includes(day);
  }
};
const lessThanValidator = {
  name: "lessThan",
  validation(value, _element, config2) {
    return numberValidator$1(value, config2, "limit", (value2, limit) => value2 < limit);
  }
};
const matchesValidator = {
  name: "matches",
  validation(value, _element, config2) {
    if (!isSet(config2.id) || !isSet(value)) {
      return true;
    }
    const el = document.getElementById(config2.id);
    return el.value === value;
  }
};
const maxDateValidator = {
  name: "maxDate",
  validation(value, _element, config2) {
    if (isEmpty(value)) {
      return true;
    }
    const normalizedValue = normalizeDateFormat(value);
    if (!normalizedValue) {
      return false;
    }
    const parsed = FDate.fromIso(normalizedValue);
    const limit = FDate.fromIso(validLimit(config2.limit));
    return parsed.equals(limit) || parsed.isBefore(limit);
  }
};
const maxLengthValidator = {
  name: "maxLength",
  validation(value, _element, config2) {
    return config2.length ? value.length <= config2.length : true;
  }
};
const maxValueValidator = {
  name: "maxValue",
  validation(value, _element, config2) {
    return numberValidator$1(value, config2, this.name, (value2, limit) => value2 <= limit);
  }
};
const minDateValidator = {
  name: "minDate",
  validation(value, _element, config2) {
    if (isEmpty(value)) {
      return true;
    }
    const normalizedValue = normalizeDateFormat(value);
    if (!normalizedValue) {
      return false;
    }
    const parsed = FDate.fromIso(normalizedValue);
    const limit = FDate.fromIso(validLimit(config2.limit));
    return parsed.equals(limit) || parsed.isAfter(limit);
  }
};
const minLengthValidator = {
  name: "minLength",
  validation(value, _element, config2) {
    return config2.length && value ? value.length >= config2.length : true;
  }
};
const minValueValidator = {
  name: "minValue",
  validation(value, _element, config2) {
    return numberValidator$1(value, config2, this.name, (value2, limit) => value2 >= limit);
  }
};
const numberValidator = {
  name: "number",
  validation(value) {
    return isEmpty(value) || isSet(parseNumber(value));
  }
};
const organisationsnummerValidator = {
  name: "organisationsnummer",
  validation(value) {
    return isEmpty(value) || isSet(parseOrganisationsnummer(value));
  }
};
const PERCENT_REGEXP = /^([-+]?[0-9]+)([,.][0-9]+)?$/;
const percentValidator = {
  name: "percent",
  validation(value) {
    const valueWithoutWhitespace = isSet(value) ? stripWhitespace(String(value)) : value;
    return isEmpty(valueWithoutWhitespace) || PERCENT_REGEXP.test(valueWithoutWhitespace);
  }
};
const personnummerFormatValidator = {
  name: "personnummerFormat",
  validation(value) {
    return isEmpty(value) || isSet(parsePersonnummer(value));
  }
};
const personnummerLuhnValidator = {
  name: "personnummerLuhn",
  validation(value) {
    return isEmpty(value) || isSet(parsePersonnummerLuhn(value));
  }
};
const personnummerNotSame = {
  name: "personnummerNotSame",
  validation(value, _element, config2) {
    const valuePnr = parsePersonnummer(String(value));
    if (!valuePnr) {
      return true;
    }
    const otherFieldPnr = parsePersonnummer(String(config2.otherField));
    if (!otherFieldPnr) {
      return true;
    }
    if (valuePnr === otherFieldPnr) {
      return false;
    }
    return true;
  }
};
const personnummerOlder = {
  name: "personnummerOlder",
  validation(value, _element, config2) {
    const valueAsDate = formatPersonnummerToDate(value);
    const otherAsDate = formatPersonnummerToDate(String(config2.otherField));
    if (!valueAsDate || !otherAsDate) {
      return true;
    }
    return FDate.compare(valueAsDate, otherAsDate) !== 1;
  }
};
const personnummerYounger = {
  name: "personnummerYounger",
  validation(value, _element, config2) {
    const valueAsDate = formatPersonnummerToDate(value);
    const otherAsDate = formatPersonnummerToDate(String(config2.otherField));
    if (!valueAsDate || !otherAsDate) {
      return true;
    }
    return FDate.compare(valueAsDate, otherAsDate) !== -1;
  }
};
const PHONE_NUMBER_REGEXP = /^(\+?[-_/() ]*(\d[-_/() ]*?){3,17})$/;
const phoneNumberValidator = {
  name: "phoneNumber",
  validation(value) {
    if (isEmpty(value)) {
      return true;
    }
    if (!isString(value) || value.length > 21) {
      return false;
    }
    return PHONE_NUMBER_REGEXP.test(value);
  }
};
const plusgiroValidator = {
  name: "plusgiro",
  validation(value) {
    return isEmpty(value) || isSet(parsePlusgiro(value));
  }
};
const postalCodeValidator = {
  name: "postalCode",
  validation(value) {
    return isEmpty(value) || isSet(parsePostalCode(value));
  }
};
const REQUIRED_REGEXP = /^\S+/;
function isRelevantElement(input) {
  return isRadiobuttonOrCheckbox(input) && !input.disabled;
}
function validateFieldset(fieldset) {
  const inputs = Array.from(fieldset.elements).filter(isRelevantElement);
  return inputs.length > 0 ? inputs.some((input) => input.checked) : true;
}
function validateChecked(element) {
  return element.checked;
}
function validateInput(value) {
  return REQUIRED_REGEXP.test(value);
}
const requiredValidator = {
  name: "required",
  validation(value, element) {
    if (element instanceof HTMLFieldSetElement) {
      return validateFieldset(element);
    } else if (isRadiobuttonOrCheckbox(element)) {
      return validateChecked(element);
    } else {
      return validateInput(value);
    }
  }
};
const WHITELIST_REGEXP = /^[a-zA-Z0-9 .,\-()\r\n?+=!:@*\xC0-\xFF]*$/;
const whitelistValidator = {
  name: "whitelist",
  instant: true,
  validation(value) {
    return isEmpty(value) || WHITELIST_REGEXP.test(value);
  }
};
ValidationService.registerValidator(bankAccountNumberValidator);
ValidationService.registerValidator(bankgiroValidator);
ValidationService.registerValidator(blacklistValidator);
ValidationService.registerValidator(clearingNumberValidator);
ValidationService.registerValidator(currencyValidator);
ValidationService.registerValidator(dateFormatValidator);
ValidationService.registerValidator(dateValidator);
ValidationService.registerValidator(decimalValidator);
ValidationService.registerValidator(emailValidator);
ValidationService.registerValidator(greaterThanValidator);
ValidationService.registerValidator(integerValidator);
ValidationService.registerValidator(invalidDatesValidator);
ValidationService.registerValidator(invalidWeekdaysValidator);
ValidationService.registerValidator(lessThanValidator);
ValidationService.registerValidator(matchesValidator);
ValidationService.registerValidator(maxDateValidator);
ValidationService.registerValidator(maxLengthValidator);
ValidationService.registerValidator(maxValueValidator);
ValidationService.registerValidator(minDateValidator);
ValidationService.registerValidator(minLengthValidator);
ValidationService.registerValidator(minValueValidator);
ValidationService.registerValidator(numberValidator);
ValidationService.registerValidator(organisationsnummerValidator);
ValidationService.registerValidator(percentValidator);
ValidationService.registerValidator(personnummerFormatValidator);
ValidationService.registerValidator(personnummerLuhnValidator);
ValidationService.registerValidator(personnummerNotSame);
ValidationService.registerValidator(personnummerOlder);
ValidationService.registerValidator(personnummerYounger);
ValidationService.registerValidator(phoneNumberValidator);
ValidationService.registerValidator(plusgiroValidator);
ValidationService.registerValidator(postalCodeValidator);
ValidationService.registerValidator(requiredValidator);
ValidationService.registerValidator(whitelistValidator);
class ElementIdServiceImpl {
  constructor() {
    __publicField(this, "elementIdMap", /* @__PURE__ */ new Map());
  }
  generateElementId(prefix = "fkui") {
    const id2 = this.nextId(prefix);
    if (document.getElementById(id2) === null) {
      return id2;
    }
    return this.generateElementId(prefix);
  }
  nextId(prefix) {
    let elementIdWithPadding = String(this.getIdFromMap(prefix));
    while (elementIdWithPadding.length < 4) {
      elementIdWithPadding = `0${elementIdWithPadding}`;
    }
    return `${prefix}-vue-element-${elementIdWithPadding}`;
  }
  getIdFromMap(prefix) {
    const elementId = this.elementIdMap.get(prefix);
    if (!elementId) {
      this.elementIdMap.set(prefix, { count: 1 });
      return 1;
    }
    elementId.count++;
    return elementId.count;
  }
  reset() {
    this.elementIdMap = /* @__PURE__ */ new Map();
  }
}
const ElementIdService = new ElementIdServiceImpl();
(() => {
  const test = "fkui.sessionstorage.test";
  try {
    if (window.sessionStorage) {
      window.sessionStorage.setItem(test, "test");
      window.sessionStorage.removeItem(test);
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
})();
const SCREEN_READER_DELAY = 100;
function waitForScreenReader(callback, delay = SCREEN_READER_DELAY) {
  return new Promise((resolve2, reject) => {
    setTimeout(() => {
      try {
        const result = callback();
        resolve2(result);
      } catch (err) {
        reject(err);
      }
    }, delay);
  });
}
const REMOVE_TEXT_DELAY = 2e3;
const defaultOptions$1 = {
  assertive: false
};
let wrapper;
function alertScreenReader(text, options) {
  const mergedOptions = { ...defaultOptions$1, ...options };
  const wrapper2 = getWrapper();
  updateProperties(mergedOptions);
  const msg = document.createElement("p");
  msg.textContent = text;
  waitForScreenReader(() => {
    while (wrapper2.firstChild) {
      wrapper2.removeChild(wrapper2.firstChild);
    }
    wrapper2.appendChild(msg);
    setTimeout(() => {
      if (msg.parentElement === wrapper2) {
        wrapper2.removeChild(msg);
      }
    }, REMOVE_TEXT_DELAY);
  });
}
function createScreenReaderWrapper(options) {
  if (!getWrapper()) {
    wrapper = document.createElement("div");
    wrapper.id = "fkui-alert-screen-reader";
    wrapper.className = "sr-only";
    updateProperties(options);
    document.body.appendChild(wrapper);
  }
}
function updateProperties(options) {
  const wrapper2 = getWrapper();
  const ariaLive = options.assertive ? "assertive" : "polite";
  wrapper2.setAttribute("aria-live", ariaLive);
}
function getWrapper() {
  return wrapper;
}
if (typeof document !== "undefined") {
  createScreenReaderWrapper({ assertive: false });
}
function getDefaultExportFromCjs$1(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var dayjs_min$1 = { exports: {} };
var dayjs_min = dayjs_min$1.exports;
var hasRequiredDayjs_min;
function requireDayjs_min() {
  if (hasRequiredDayjs_min) return dayjs_min$1.exports;
  hasRequiredDayjs_min = 1;
  (function(module, exports) {
    !function(t, e) {
      module.exports = e();
    }(dayjs_min, function() {
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h2 = "year", d = "date", l = "Invalid Date", $2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h2, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p2 = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p2]);
      }, w = function t2(e2, n2, r2) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1) return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t2, e2) {
        if (S(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p2] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($2);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $3 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h2:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $3(v2 + "Hours", 0);
            case u:
              return $3(v2 + "Minutes", 1);
            case s:
              return $3(v2 + "Seconds", 2);
            case i:
              return $3(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h2] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $3 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h2) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($3), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($3);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $3 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($3 === c) return this.set(c, this.$M + r2);
          if ($3 === h2) return this.set(h2, this.$y + r2);
          if ($3 === a) return y2(1);
          if ($3 === o) return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$3] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h3 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $3 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, function(t3, r3) {
            return r3 || function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h3(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h3(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h3(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h3(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $3(s2, u2, true);
                case "A":
                  return $3(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t3) || i2.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $3, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h2:
              $3 = D2() / 12;
              break;
            case c:
              $3 = D2();
              break;
            case f:
              $3 = D2() / 3;
              break;
            case o:
              $3 = (g2 - v2) / 6048e5;
              break;
            case a:
              $3 = (g2 - v2) / 864e5;
              break;
            case u:
              $3 = g2 / n;
              break;
            case s:
              $3 = g2 / e;
              break;
            case i:
              $3 = g2 / t;
              break;
            default:
              $3 = g2;
          }
          return l2 ? $3 : b.a($3);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r2 = w(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), k = _.prototype;
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h2], ["$D", d]].forEach(function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    });
  })(dayjs_min$1);
  return dayjs_min$1.exports;
}
var dayjs_minExports = requireDayjs_min();
var dayjs = /* @__PURE__ */ getDefaultExportFromCjs$1(dayjs_minExports);
var sv$1 = { exports: {} };
var sv = sv$1.exports;
var hasRequiredSv;
function requireSv() {
  if (hasRequiredSv) return sv$1.exports;
  hasRequiredSv = 1;
  (function(module, exports) {
    !function(e, t) {
      module.exports = t(requireDayjs_min());
    }(sv, function(e) {
      function t(e2) {
        return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
      }
      var a = t(e), d = { name: "sv", weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(e2) {
        var t2 = e2 % 10;
        return "[" + e2 + (1 === t2 || 2 === t2 ? "a" : "e") + "]";
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" } };
      return a.default.locale(d, null, true), d;
    });
  })(sv$1);
  return sv$1.exports;
}
requireSv();
var weekOfYear$2 = { exports: {} };
var weekOfYear$1 = weekOfYear$2.exports;
var hasRequiredWeekOfYear;
function requireWeekOfYear() {
  if (hasRequiredWeekOfYear) return weekOfYear$2.exports;
  hasRequiredWeekOfYear = 1;
  (function(module, exports) {
    !function(e, t) {
      module.exports = t();
    }(weekOfYear$1, function() {
      var e = "week", t = "year";
      return function(i, n, r) {
        var f = n.prototype;
        f.week = function(i2) {
          if (void 0 === i2 && (i2 = null), null !== i2) return this.add(7 * (i2 - this.week()), "day");
          var n2 = this.$locale().yearStart || 1;
          if (11 === this.month() && this.date() > 25) {
            var f2 = r(this).startOf(t).add(1, t).date(n2), s = r(this).endOf(e);
            if (f2.isBefore(s)) return 1;
          }
          var a = r(this).startOf(t).date(n2).startOf(e).subtract(1, "millisecond"), o = this.diff(a, e, true);
          return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
        }, f.weeks = function(e2) {
          return void 0 === e2 && (e2 = null), this.week(e2);
        };
      };
    });
  })(weekOfYear$2);
  return weekOfYear$2.exports;
}
var weekOfYearExports = requireWeekOfYear();
var weekOfYear = /* @__PURE__ */ getDefaultExportFromCjs$1(weekOfYearExports);
dayjs.extend(weekOfYear);
var DateFormat;
(function(DateFormat2) {
  DateFormat2["FULL"] = "full";
  DateFormat2["LONG"] = "long";
  DateFormat2["ISO8601"] = "iso-8601";
  DateFormat2["YYYYMMDD"] = "YYYYMMDD";
})(DateFormat || (DateFormat = {}));
var Locale;
(function(Locale2) {
  Locale2["SWEDISH"] = "sv";
  Locale2["ENGLISH"] = "en";
})(Locale || (Locale = {}));
function getDefaultLocale() {
  return Locale.SWEDISH;
}
getDefaultLocale();
var Weekday;
(function(Weekday2) {
  Weekday2[Weekday2["MONDAY"] = 1] = "MONDAY";
  Weekday2[Weekday2["TUESDAY"] = 2] = "TUESDAY";
  Weekday2[Weekday2["WEDNESDAY"] = 3] = "WEDNESDAY";
  Weekday2[Weekday2["THURSDAY"] = 4] = "THURSDAY";
  Weekday2[Weekday2["FRIDAY"] = 5] = "FRIDAY";
  Weekday2[Weekday2["SATURDAY"] = 6] = "SATURDAY";
  Weekday2[Weekday2["SUNDAY"] = 7] = "SUNDAY";
})(Weekday || (Weekday = {}));
({
  [Locale.SWEDISH]: [
    {
      weekday: Weekday.MONDAY,
      name: "måndag",
      shortName: "mån"
    },
    {
      weekday: Weekday.TUESDAY,
      name: "tisdag",
      shortName: "tis"
    },
    {
      weekday: Weekday.WEDNESDAY,
      name: "onsdag",
      shortName: "ons"
    },
    {
      weekday: Weekday.THURSDAY,
      name: "torsdag",
      shortName: "tor"
    },
    {
      weekday: Weekday.FRIDAY,
      name: "fredag",
      shortName: "fre"
    },
    {
      weekday: Weekday.SATURDAY,
      name: "lördag",
      shortName: "lör"
    },
    {
      weekday: Weekday.SUNDAY,
      name: "söndag",
      shortName: "sön"
    }
  ],
  [Locale.ENGLISH]: [
    {
      weekday: Weekday.MONDAY,
      name: "Monday",
      shortName: "Mon"
    },
    {
      weekday: Weekday.TUESDAY,
      name: "Tuesday",
      shortName: "Tue"
    },
    {
      weekday: Weekday.WEDNESDAY,
      name: "Wednesday",
      shortName: "Wed"
    },
    {
      weekday: Weekday.THURSDAY,
      name: "Thursday",
      shortName: "Thu"
    },
    {
      weekday: Weekday.FRIDAY,
      name: "Friday",
      shortName: "Fri"
    },
    {
      weekday: Weekday.SATURDAY,
      name: "Saturday",
      shortName: "Sat"
    },
    {
      weekday: Weekday.SUNDAY,
      name: "Sunday",
      shortName: "Sun"
    }
  ]
});
const ISO8601_YYYY_MM_DD = "YYYY-MM-DD";
({
  [Locale.SWEDISH]: {
    [DateFormat.FULL]: "dddd D MMMM YYYY",
    [DateFormat.LONG]: "D MMMM YYYY",
    [DateFormat.ISO8601]: ISO8601_YYYY_MM_DD,
    [DateFormat.YYYYMMDD]: "YYYYMMDD"
  },
  [Locale.ENGLISH]: {
    [DateFormat.FULL]: "dddd, D MMMM YYYY",
    [DateFormat.LONG]: "D MMMM YYYY",
    [DateFormat.ISO8601]: ISO8601_YYYY_MM_DD,
    [DateFormat.YYYYMMDD]: "YYYYMMDD"
  }
});
var __defProp2 = Object.defineProperty;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField2 = (obj, key, value) => __defNormalProp2(obj, key + "", value);
const Flip = ["horizontal", "vertical"];
const Rotate = ["90", "180", "270"];
const _sfc_main$1b = /* @__PURE__ */ defineComponent({ name: "FIcon", inheritAttrs: false, props: {
  /**
  * Icon name.
  */
  name: { type: String, required: true },
  /**
  * fk-icon library
  */
  library: { type: String, required: false, default: "f" },
  /**
  * Flip icon horizontally or vertically.
  *
  * Must be set to one of:
  *
  * - `horizontal`
  * - `vertical`
  */
  flip: { type: String, default: null, required: false, validator(value) {
    return Flip.includes(value);
  } },
  /**
  * Rotate icon.
  *
  * Must be set to one of:
  *
  * - `90`
  * - `180`
  * - `270`
  */
  rotate: { type: String, default: null, required: false, validator(value) {
    return Rotate.includes(value);
  } }
}, computed: { spriteKey() {
  return `${this.library}-icon-${this.name}`;
}, spriteId() {
  return `#${this.spriteKey}`;
}, modifiers() {
  const classes = [];
  if (this.flip) {
    classes.push(`icon--flip-${this.flip}`);
  }
  if (this.rotate) {
    classes.push(`icon--rotate-${this.rotate}`);
  }
  return classes;
}, ariaHidden() {
  const slotUsed = Boolean(this.$slots.default);
  const ariaLabel = this.$attrs["aria-label"] !== void 0;
  const ariaLabelledby = this.$attrs["aria-labelledby"] !== void 0;
  const ariaDescription = this.$attrs["aria-description"] !== void 0;
  const ariaDescribedby = this.$attrs["aria-describedby"] !== void 0;
  const hasText = slotUsed || ariaLabel || ariaLabelledby || ariaDescription || ariaDescribedby;
  return hasText ? void 0 : "true";
} } });
const _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$T = ["aria-hidden"];
const _hoisted_2$F = ["xlink:href"];
function _sfc_render$10(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps(_ctx.$attrs, { focusable: "false", class: ["icon", [_ctx.spriteKey, ..._ctx.modifiers]], "aria-hidden": _ctx.ariaHidden }), [renderSlot(_ctx.$slots, "default"), _cache[0] || (_cache[0] = createTextVNode()), createBaseVNode("use", { "xlink:href": _ctx.spriteId }, null, 8, _hoisted_2$F)], 16, _hoisted_1$T);
}
const FIcon = /* @__PURE__ */ _export_sfc$1(_sfc_main$1b, [["render", _sfc_render$10]]);
const DATA_TEST_ATTRIBUTE_NAME = "data-test";
function throwErrorIfEmpty(value) {
  if (!value) {
    throw new Error(`Did you forgot to add a value to v-test?`);
  }
}
const TestDirective = { mounted(el, { value }) {
  throwErrorIfEmpty(value);
  el.setAttribute(DATA_TEST_ATTRIBUTE_NAME, value);
}, updated(el, { value }) {
  throwErrorIfEmpty(value);
  el.setAttribute(DATA_TEST_ATTRIBUTE_NAME, value);
} };
const TestPlugin = { install(app2) {
  app2.directive("test", TestDirective);
} };
function translate(key, defaultValueOrArgs, args) {
  const { provider } = TranslationService;
  return provider.translate(key, defaultValueOrArgs, args);
}
const TranslationMixin = { methods: { $t: translate } };
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$2(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$2;
var eq$1 = eq_1;
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data2 = this.__data__, index = assocIndexOf$3(data2, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data2.length - 1;
  if (index == lastIndex) {
    data2.pop();
  } else {
    splice.call(data2, index, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data2 = this.__data__, index = assocIndexOf$2(data2, key);
  return index < 0 ? void 0 : data2[index][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data2 = this.__data__, index = assocIndexOf(data2, key);
  if (index < 0) {
    ++this.size;
    data2.push([key, value]);
  } else {
    data2[index][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var ListCache$3 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$3();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data2 = this.__data__, result = data2["delete"](key);
  this.size = data2.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$8 = freeGlobal || freeSelf || Function("return this")();
var _root = root$8;
var root$7 = _root;
var Symbol$4 = root$7.Symbol;
var _Symbol = Symbol$4;
var Symbol$3 = _Symbol;
var objectProto$b = Object.prototype;
var hasOwnProperty$8 = objectProto$b.hasOwnProperty;
var nativeObjectToString$1 = objectProto$b.toString;
var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$8.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$a = Object.prototype;
var nativeObjectToString = objectProto$a.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$2 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag$4(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$4;
function isObject$2(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$2;
var baseGetTag$3 = _baseGetTag, isObject$1 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$2(value) {
  if (!isObject$1(value)) {
    return false;
  }
  var tag = baseGetTag$3(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$2;
var root$6 = _root;
var coreJsData$1 = root$6["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid2 = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid2 ? "Symbol(src)_1." + uid2 : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$1 = isFunction_1, isMasked = _isMasked, isObject = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$9 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$7).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$6(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$6;
var getNative$5 = _getNative, root$5 = _root;
var Map$4 = getNative$5(root$5, "Map");
var _Map = Map$4;
var getNative$4 = _getNative;
var nativeCreate$4 = getNative$4(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
function hashGet$1(key) {
  var data2 = this.__data__;
  if (nativeCreate$2) {
    var result = data2[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$6.call(data2, key) ? data2[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$7 = Object.prototype;
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
function hashHas$1(key) {
  var data2 = this.__data__;
  return nativeCreate$1 ? data2[key] !== void 0 : hasOwnProperty$5.call(data2, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data2 = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data2[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
var Hash = _Hash, ListCache$2 = _ListCache, Map$3 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = { "hash": new Hash(), "map": new (Map$3 || ListCache$2)(), "string": new Hash() };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map, key) {
  var data2 = map.__data__;
  return isKeyable(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data2 = getMapData(this, key), size = data2.size;
  data2.set(key, value);
  this.size += data2.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$2(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache$2.prototype.clear = mapCacheClear;
MapCache$2.prototype["delete"] = mapCacheDelete;
MapCache$2.prototype.get = mapCacheGet;
MapCache$2.prototype.has = mapCacheHas;
MapCache$2.prototype.set = mapCacheSet;
var _MapCache = MapCache$2;
var ListCache$1 = _ListCache, Map$2 = _Map, MapCache$1 = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key, value) {
  var data2 = this.__data__;
  if (data2 instanceof ListCache$1) {
    var pairs = data2.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data2.size;
      return this;
    }
    data2 = this.__data__ = new MapCache$1(pairs);
  }
  data2.set(key, value);
  this.size = data2.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$1(entries) {
  var data2 = this.__data__ = new ListCache(entries);
  this.size = data2.size;
}
Stack$1.prototype.clear = stackClear;
Stack$1.prototype["delete"] = stackDelete;
Stack$1.prototype.get = stackGet;
Stack$1.prototype.has = stackHas;
Stack$1.prototype.set = stackSet;
var _Stack = Stack$1;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$1;
var MapCache = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
function SetCache$1(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;
var _SetCache = SetCache$1;
function arraySome$1(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome$1;
function cacheHas$1(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas$1;
var SetCache = _SetCache, arraySome = _arraySome, cacheHas = _cacheHas;
var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack2) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack2.get(array);
  var othStacked = stack2.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
  stack2.set(array, other);
  stack2.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack2) : customizer(arrValue, othValue, index, array, other, stack2);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack2))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack2))) {
      result = false;
      break;
    }
  }
  stack2["delete"](array);
  stack2["delete"](other);
  return result;
}
var _equalArrays = equalArrays$2;
var root$4 = _root;
var Uint8Array$1 = root$4.Uint8Array;
var _Uint8Array = Uint8Array$1;
function mapToArray$1(map) {
  var index = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray$1;
function setToArray$1(set2) {
  var index = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var _setToArray = setToArray$1;
var Symbol$1 = _Symbol, Uint8Array2 = _Uint8Array, eq = eq_1, equalArrays$1 = _equalArrays, mapToArray = _mapToArray, setToArray = _setToArray;
var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack2) {
  switch (tag) {
    case dataViewTag$2:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag$1:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
        return false;
      }
      return true;
    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      return eq(+object, +other);
    case errorTag$1:
      return object.name == other.name && object.message == other.message;
    case regexpTag$1:
    case stringTag$1:
      return object == other + "";
    case mapTag$2:
      var convert = mapToArray;
    case setTag$2:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack2.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;
      stack2.set(object, other);
      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack2);
      stack2["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag$1;
function arrayPush$1(array, values) {
  var index = -1, length = values.length, offset2 = array.length;
  while (++index < length) {
    array[offset2 + index] = values[index];
  }
  return array;
}
var _arrayPush = arrayPush$1;
var isArray$3 = Array.isArray;
var isArray_1 = isArray$3;
var arrayPush = _arrayPush, isArray$2 = isArray_1;
function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$2(object) ? result : arrayPush(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$1;
function arrayFilter$1(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$1() {
  return [];
}
var stubArray_1 = stubArray$1;
var arrayFilter = _arrayFilter, stubArray = stubArray_1;
var objectProto$6 = Object.prototype;
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};
var _getSymbols = getSymbols$1;
function baseTimes$1(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var _baseTimes = baseTimes$1;
function isObjectLike$4(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$4;
var baseGetTag$2 = _baseGetTag, isObjectLike$3 = isObjectLike_1;
var argsTag$2 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$3(value) && baseGetTag$2(value) == argsTag$2;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$2 = isObjectLike_1;
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
var propertyIsEnumerable2 = objectProto$5.propertyIsEnumerable;
var isArguments$1 = baseIsArguments(/* @__PURE__ */ function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$2(value) && hasOwnProperty$4.call(value, "callee") && !propertyIsEnumerable2.call(value, "callee");
};
var isArguments_1 = isArguments$1;
var isBuffer$2 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
isBuffer$2.exports;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$2, isBuffer$2.exports);
var isBufferExports = isBuffer$2.exports;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$1(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
var _isIndex = isIndex$1;
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength$2(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength$2;
var baseGetTag$1 = _baseGetTag, isLength$1 = isLength_1, isObjectLike$1 = isObjectLike_1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag$1 = "[object Map]", numberTag = "[object Number]", objectTag$2 = "[object Object]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$1(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$1(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$1;
var _nodeUtil = { exports: {} };
_nodeUtil.exports;
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var _nodeUtilExports = _nodeUtil.exports;
var baseIsTypedArray = _baseIsTypedArray, baseUnary = _baseUnary, nodeUtil = _nodeUtilExports;
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$2;
var baseTimes = _baseTimes, isArguments = isArguments_1, isArray$1 = isArray_1, isBuffer$1 = isBufferExports, isIndex = _isIndex, isTypedArray$1 = isTypedArray_1;
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray$1(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$1;
var objectProto$3 = Object.prototype;
function isPrototype$1(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$3;
  return value === proto;
}
var _isPrototype = isPrototype$1;
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$1;
var overArg = _overArg;
var nativeKeys$1 = overArg(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function baseKeys$1(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$2.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var isFunction = isFunction_1, isLength = isLength_1;
function isArrayLike$1(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
var isArrayLike_1 = isArrayLike$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike = isArrayLike_1;
function keys$1(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
var keys_1 = keys$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbols = _getSymbols, keys = keys_1;
function getAllKeys$1(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}
var _getAllKeys = getAllKeys$1;
var getAllKeys = _getAllKeys;
var COMPARE_PARTIAL_FLAG$1 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack2) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack2.get(object);
  var othStacked = stack2.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack2.set(object, other);
  stack2.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack2) : customizer(objValue, othValue, key, object, other, stack2);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack2) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack2["delete"](object);
  stack2["delete"](other);
  return result;
}
var _equalObjects = equalObjects$1;
var getNative$3 = _getNative, root$3 = _root;
var DataView$1 = getNative$3(root$3, "DataView");
var _DataView = DataView$1;
var getNative$2 = _getNative, root$2 = _root;
var Promise$2 = getNative$2(root$2, "Promise");
var _Promise = Promise$2;
var getNative$1 = _getNative, root$1 = _root;
var Set$1 = getNative$1(root$1, "Set");
var _Set = Set$1;
var getNative = _getNative, root = _root;
var WeakMap$1 = getNative(root, "WeakMap");
var _WeakMap = WeakMap$1;
var DataView = _DataView, Map$1 = _Map, Promise$1 = _Promise, Set$2 = _Set, WeakMap$2 = _WeakMap, baseGetTag = _baseGetTag, toSource = _toSource;
var mapTag = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$2);
var getTag$1 = baseGetTag;
if (DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag || Map$1 && getTag$1(new Map$1()) != mapTag || Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag || Set$2 && getTag$1(new Set$2()) != setTag || WeakMap$2 && getTag$1(new WeakMap$2()) != weakMapTag) {
  getTag$1 = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var _getTag = getTag$1;
var Stack = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag = _getTag, isArray$4 = isArray_1, isBuffer = isBufferExports, isTypedArray = isTypedArray_1;
var COMPARE_PARTIAL_FLAG = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack2) {
  var objIsArr = isArray$4(object), othIsArr = isArray$4(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack2 || (stack2 = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack2) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack2);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack2 || (stack2 = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack2);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack2 || (stack2 = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack2);
}
var _baseIsEqualDeep = baseIsEqualDeep$1;
var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike = isObjectLike_1;
function baseIsEqual$1(value, other, bitmask, customizer, stack2) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$1, stack2);
}
var _baseIsEqual = baseIsEqual$1;
var baseIsEqual = _baseIsEqual;
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
var isEqual_1 = isEqual;
const isEqual$1 = /* @__PURE__ */ getDefaultExportFromCjs(isEqual_1);
function itemEquals(item1, item2, compareAttribute) {
  if (!isSet(item1) || !isSet(item2)) {
    return false;
  }
  if (item1 === item2) {
    return true;
  }
  return item1[compareAttribute] === item2[compareAttribute];
}
function includeItem(item, itemList, compareAttribute) {
  if (!isSet(item) || !isSet(itemList)) {
    return false;
  }
  const itemCompareValue = item[compareAttribute];
  const match2 = itemList.find((it) => {
    return it[compareAttribute] === itemCompareValue;
  });
  return Boolean(match2);
}
var TableScroll = /* @__PURE__ */ ((TableScroll2) => {
  TableScroll2["HORIZONTAL"] = "horizontal";
  TableScroll2["VERTICAL"] = "vertical";
  TableScroll2["BOTH"] = "both";
  TableScroll2["NONE"] = "none";
  return TableScroll2;
})(TableScroll || {});
const scrollClasses = { [
  "horizontal"
  /* HORIZONTAL */
]: ["table__scroll", "table__scroll--horizontal"], [
  "vertical"
  /* VERTICAL */
]: ["table__scroll", "table__scroll--vertical"], [
  "both"
  /* BOTH */
]: ["table__scroll", "table__scroll--horizontal", "table__scroll--vertical"], [
  "none"
  /* NONE */
]: [] };
function tableScrollClasses(val) {
  return scrollClasses[val];
}
const defaultOptions = { stripClasses: ["sr-only"] };
function collapseWhitespace(text) {
  return text.replace(/\s+/gm, " ").replace(/(^ | $)/g, "");
}
function intersection(a, b) {
  return a.filter((it) => b.includes(it));
}
function excludeClass(exclude) {
  return (node) => {
    var _a;
    if (typeof ((_a = node.props) == null ? void 0 : _a.class) !== "string") {
      return true;
    }
    const classes = node.props.class.split(/\s+/);
    const matches = intersection(classes, exclude);
    return matches.length === 0;
  };
}
function excludeComment(node) {
  return node.type !== Comment;
}
function getTextContent(children, options) {
  return children.filter(isVNode).filter(excludeComment).filter(excludeClass(options.stripClasses)).map((child) => {
    if (Array.isArray(child.children)) {
      return getTextContent(child.children, options);
    }
    if (typeof child.children === "string") {
      return child.children;
    }
  }).join("");
}
function renderSlotText(render, props = {}, options) {
  if (!render) {
    return void 0;
  }
  const nodes = render(props);
  if (nodes.length === 0) {
    return void 0;
  }
  return collapseWhitespace(getTextContent(nodes, { ...defaultOptions, ...options }));
}
function dispatchComponentValidityEvent(element, detail) {
  element.dispatchEvent(new CustomEvent("component-validity", { detail, bubbles: true }));
}
function dispatchComponentUnmountEvent(element) {
  const event = new CustomEvent("component-unmount", { detail: { elementId: element.id }, bubbles: true });
  element.dispatchEvent(event);
}
function refIsElement(value) {
  return value instanceof Element;
}
function refIsVue(value) {
  return (value == null ? void 0 : value.$el) !== void 0;
}
function findElementFromVueRef(ref2) {
  if (refIsElement(ref2)) {
    return ref2;
  } else if (refIsVue(ref2)) {
    return ref2.$el;
  }
}
function getHTMLElementFromVueRef(ref2) {
  const element = findElementFromVueRef(ref2);
  if (!isSet(element)) {
    throw new Error(`Unable to find element from ${ref2}.`);
  }
  if (element instanceof HTMLElement) {
    return element;
  }
  throw new Error(`Not instance of HTMLELement ${ref2}.`);
}
function lazyLoad(fn2) {
  let cache;
  return () => {
    var _cache2;
    return (_cache2 = cache) !== null && _cache2 !== void 0 ? _cache2 : cache = fn2();
  };
}
const eventTarget = lazyLoad(() => new EventTarget());
const fn = /* @__PURE__ */ new Map();
function $emit(type, ...args) {
  const event = new CustomEvent(type, { detail: args });
  eventTarget().dispatchEvent(event);
}
function $on(type, callback) {
  fn.set(callback, (event) => callback(...event.detail));
  eventTarget().addEventListener(type, fn.get(callback));
}
function $off(type, callback) {
  eventTarget().removeEventListener(type, fn.get(callback));
  fn.delete(callback);
}
const EventBus = { $emit, $on, $off };
var FKUIConfigButtonOrder = /* @__PURE__ */ ((FKUIConfigButtonOrder2) => {
  FKUIConfigButtonOrder2[FKUIConfigButtonOrder2["LEFT_TO_RIGHT"] = 0] = "LEFT_TO_RIGHT";
  FKUIConfigButtonOrder2[FKUIConfigButtonOrder2["RIGHT_TO_LEFT"] = 1] = "RIGHT_TO_LEFT";
  return FKUIConfigButtonOrder2;
})(FKUIConfigButtonOrder || {});
let popupContainer = document.body;
let production = true;
const config = { buttonOrder: FKUIConfigButtonOrder.LEFT_TO_RIGHT, teleportTarget: document.body, modalTarget: null, popupTarget: null, get popupContainer() {
  if (typeof popupContainer === "string") {
    const element = document.querySelector(popupContainer);
    if (!element) {
      throw new Error(`Failed to find popupContainer element from selector "${popupContainer}"`);
    }
    return element;
  } else {
    return popupContainer;
  }
}, set popupContainer(value) {
  popupContainer = value;
}, set production(value) {
  production = value;
  configLogic.production = value;
}, get production() {
  return production;
} };
function setRunningContext(app2) {
  const fkuiContext = { appContext: app2._context };
  app2.config.globalProperties.$fkui = fkuiContext;
}
const sizes = ["", "small", "medium", "large", "fullscreen", "fullwidth"];
function sizeClass(size) {
  if (!sizes.includes(size)) {
    throw new Error(`"${size}" is not a valid size`);
  }
  if (!size) {
    return [];
  } else if (size === "fullscreen") {
    return [`modal__dialog-container--fullwidth`];
  } else {
    return [`modal__dialog-container--${size}`];
  }
}
function focusElement(element, container) {
  if (elementIsRadioButton(element)) {
    focusRadioButtonGroup(element, container);
  } else {
    focus(element);
  }
}
function focusRadioButtonGroup(element, container) {
  const radioGroupInputs = container.querySelectorAll(`input[type="radio"][name="${element.name}"]`);
  const checkedRadioButton = Array.from(radioGroupInputs).find((inputEl) => inputEl.checked);
  if (checkedRadioButton) {
    focus(checkedRadioButton);
  } else {
    focus(element);
  }
}
function elementIsRadioButton(element) {
  return isHTMLInputElement(element) && element.type === "radio";
}
function isHTMLInputElement(element) {
  return element instanceof HTMLInputElement;
}
const _sfc_main$1a = /* @__PURE__ */ defineComponent({ name: "FModal", components: { FIcon }, mixins: [TranslationMixin], inheritAttrs: true, props: {
  /**
  * The id for the root element id attribute.
  * If the prop is not set a random value will be generated.
  */
  id: { type: String, required: false, default: () => ElementIdService.generateElementId() },
  /**
  * If the modal is open.
  * Use this to toggle if the modal should be visible or not.
  */
  isOpen: { type: Boolean, required: false, default: false },
  /**
  * The aria-label attribute text for the top right close button.
  */
  ariaCloseText: { type: String, required: false, default: void 0 },
  /**
  * Enable fullscreen mode in mobile.
  */
  fullscreen: { type: Boolean, required: false, default: false },
  /**
  * The type of modal. 'information', 'warning' and 'error' is valid.
  */
  type: { type: String, default: "", validator(value) {
    return ["", "information", "warning", "error"].includes(value);
  } },
  /**
  * The size of modal in desktop mode.
  */
  size: { type: String, default: "", validator(value) {
    return sizes.includes(value);
  } }
}, emits: ["close"], data() {
  return { nonModalFocusableElements: [], savedFocus: null, savedScroll: null };
}, computed: { modalClass() {
  return this.type ? [`modal--${this.type}`] : [];
}, containerClasses() {
  const size = sizeClass(this.size);
  if (this.fullscreen) {
    return [...size, "modal__dialog-container--fullscreen"];
  } else {
    return size;
  }
}, hasHeaderSlot() {
  return hasSlot(this, "header");
} }, watch: { isOpen: { immediate: true, async handler(value) {
  if (value) {
    await this.$nextTick();
    this.openModal();
  } else {
    this.restoreState();
  }
} } }, beforeUnmount() {
  this.restoreState();
}, methods: {
  onClose() {
    this.$emit("close");
  },
  openModal() {
    const root2 = document.documentElement;
    const scroll = root2.scrollTop;
    root2.style.top = `-${scroll}px`;
    root2.classList.add("modal__open");
    const focusElement2 = this.resolveFocusElement();
    this.savedFocus = pushFocus(focusElement2);
    this.savedScroll = scroll;
  },
  /**
  * Prioritises what element to initially focus on in the following order:
  *
  * 1. Header
  * 2. First interactive element within content
  * 3. Content
  */
  resolveFocusElement() {
    const titleElement = findElementFromVueRef(this.$refs.modalTitle);
    if (titleElement) {
      return titleElement;
    }
    const contentElement = getHTMLElementFromVueRef(this.$refs.modalContent);
    const tabbableChildren = findTabbableElements(contentElement);
    const firstTabbableChildElement = tabbableChildren.length ? tabbableChildren[0] : void 0;
    return firstTabbableChildElement !== null && firstTabbableChildElement !== void 0 ? firstTabbableChildElement : contentElement;
  },
  restoreState() {
    if (this.savedFocus) {
      var _this$savedScroll;
      const root2 = document.documentElement;
      root2.classList.remove("modal__open");
      root2.style.removeProperty("top");
      root2.scrollTop = (_this$savedScroll = this.savedScroll) !== null && _this$savedScroll !== void 0 ? _this$savedScroll : 0;
      popFocus(this.savedFocus);
      this.savedFocus = null;
      this.savedScroll = null;
    }
  },
  onFocusFirst() {
    const tabbableElements = findTabbableElements(this.$refs.modalDialogContainer);
    const lastTabbableElement = tabbableElements[tabbableElements.length - 2];
    focusElement(lastTabbableElement, this.$el);
  },
  onFocusLast() {
    const tabbableElements = findTabbableElements(this.$refs.modalDialogContainer);
    const firstTabbableElement = tabbableElements[1];
    focusElement(firstTabbableElement, this.$el);
  }
} });
const _hoisted_1$S = ["id"];
const _hoisted_2$E = { class: "modal__backdrop" };
const _hoisted_3$w = { class: "modal__inner-container" };
const _hoisted_4$r = { class: "modal__dialog" };
const _hoisted_5$l = { class: "modal__dialog-inner" };
const _hoisted_6$g = { class: "modal__header" };
const _hoisted_7$e = { key: 0, ref: "modalTitle", class: "modal__title", tabindex: "-1" };
const _hoisted_8$a = { ref: "modalContent", class: "modal__content", tabindex: "-1" };
const _hoisted_9$7 = { class: "modal__footer" };
const _hoisted_10$6 = { class: "modal__shelf" };
const _hoisted_11$3 = ["aria-label"];
function _sfc_render$$(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  return _ctx.isOpen ? (openBlock(), createElementBlock("div", { key: 0, id: _ctx.id, class: normalizeClass(["modal", _ctx.modalClass]) }, [createBaseVNode("div", _hoisted_2$E, [createBaseVNode(
    "div",
    { class: "modal__outer-container scroll-target", tabindex: "-1", role: "dialog", "aria-modal": "true", onKeyup: _cache[3] || (_cache[3] = withKeys((...args) => _ctx.onClose && _ctx.onClose(...args), ["esc"])) },
    [createBaseVNode("div", _hoisted_3$w, [createBaseVNode(
      "div",
      { ref: "modalDialogContainer", class: normalizeClass(["modal__dialog-container", _ctx.containerClasses]) },
      [createBaseVNode("div", _hoisted_4$r, [createBaseVNode("div", _hoisted_5$l, [createBaseVNode("div", _hoisted_6$g, [createBaseVNode(
        "div",
        { tabindex: "0", onFocus: _cache[0] || (_cache[0] = (...args) => _ctx.onFocusFirst && _ctx.onFocusFirst(...args)) },
        null,
        32
        /* NEED_HYDRATION */
      ), _cache[4] || (_cache[4] = createTextVNode()), _ctx.hasHeaderSlot ? (openBlock(), createElementBlock(
        "h1",
        _hoisted_7$e,
        [renderSlot(_ctx.$slots, "header")],
        512
        /* NEED_PATCH */
      )) : createCommentVNode("v-if", true)]), _cache[5] || (_cache[5] = createTextVNode()), createBaseVNode(
        "div",
        _hoisted_8$a,
        [renderSlot(_ctx.$slots, "content")],
        512
        /* NEED_PATCH */
      ), _cache[6] || (_cache[6] = createTextVNode()), createBaseVNode("div", _hoisted_9$7, [renderSlot(_ctx.$slots, "footer")])]), _cache[9] || (_cache[9] = createTextVNode()), createBaseVNode("div", _hoisted_10$6, [createBaseVNode("button", { type: "button", class: "close-button", "aria-label": _ctx.ariaCloseText, onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onClose && _ctx.onClose(...args)) }, [createBaseVNode(
        "span",
        null,
        toDisplayString(_ctx.$t("fkui.modal.close", "Stäng")),
        1
        /* TEXT */
      ), _cache[7] || (_cache[7] = createTextVNode()), createVNode(_component_f_icon, { name: "close" })], 8, _hoisted_11$3), _cache[8] || (_cache[8] = createTextVNode()), createBaseVNode(
        "div",
        { tabindex: "0", onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.onFocusLast && _ctx.onFocusLast(...args)) },
        null,
        32
        /* NEED_HYDRATION */
      )])])],
      2
      /* CLASS */
    )])],
    32
    /* NEED_HYDRATION */
  )])], 10, _hoisted_1$S)) : createCommentVNode("v-if", true);
}
const FModal = /* @__PURE__ */ _export_sfc$1(_sfc_main$1a, [["render", _sfc_render$$]]);
function prepareButtonList(src, buttonOrder = config.buttonOrder) {
  const list = src.map((it) => {
    var _it$event, _ref2, _it$reason, _it$type;
    return { label: it.label, screenreader: it.screenreader, event: (_it$event = it.event) !== null && _it$event !== void 0 ? _it$event : "dismiss", reason: (_ref2 = (_it$reason = it.reason) !== null && _it$reason !== void 0 ? _it$reason : it.event) !== null && _ref2 !== void 0 ? _ref2 : "dismiss", classlist: ["button", `button--${(_it$type = it.type) !== null && _it$type !== void 0 ? _it$type : "secondary"}`], buttonType: it.submitButton ? "submit" : "button" };
  });
  switch (buttonOrder) {
    case FKUIConfigButtonOrder.LEFT_TO_RIGHT:
      return list;
    case FKUIConfigButtonOrder.RIGHT_TO_LEFT:
      return list.reverse();
  }
}
const defaultButtons = [{ label: "Primärknapp", event: "confirm", type: "primary" }, { label: "Sekundärknapp", event: "dismiss", type: "secondary" }];
const _sfc_main$19 = /* @__PURE__ */ defineComponent({ name: "FConfirmModal", components: { FModal }, inheritAttrs: true, props: {
  /**
  * Enable fullscreen mode in mobile.
  */
  fullscreen: { type: Boolean, required: false, default: false },
  /**
  * Prop for opening modal
  */
  isOpen: { type: Boolean, required: false, default: false },
  /**
  * Simple text content
  */
  content: { type: String, required: false, default: "Brödtext" },
  /**
  * Simple text header
  */
  heading: { type: String, required: false, default: "Rubrik" },
  /**
  * The size of modal. 'large' and 'fullscreen' is valid.
  */
  size: { type: String, default: "", validator(value) {
    return sizes.includes(value);
  } },
  /**
  * The aria-label attribute text for the top right close button.
  */
  ariaCloseText: { type: String, required: false, default: void 0 },
  /**
  * List of buttons
  */
  buttons: { type: Array, required: false, default: () => {
    return defaultButtons;
  } }
}, emits: ["close", ...defaultButtons.map((it) => {
  var _it$event2;
  return (_it$event2 = it.event) !== null && _it$event2 !== void 0 ? _it$event2 : "";
})], computed: { preparedButtons() {
  return prepareButtonList(this.buttons);
} }, methods: { onClose() {
  this.$emit("close", { reason: "close" });
}, onClick(button) {
  this.$emit(button.event);
  this.$emit("close", { reason: button.reason });
} } });
const _hoisted_1$R = { class: "button-group" };
const _hoisted_2$D = ["onClick"];
const _hoisted_3$v = { key: 0, class: "sr-only" };
function _sfc_render$_(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_modal = resolveComponent("f-modal");
  return openBlock(), createBlock(_component_f_modal, { fullscreen: _ctx.fullscreen, "is-open": _ctx.isOpen, "aria-close-text": _ctx.ariaCloseText, type: "warning", size: _ctx.size, onClose: _ctx.onClose }, {
    header: withCtx(() => [renderSlot(_ctx.$slots, "heading", {}, () => [createTextVNode(
      toDisplayString(_ctx.heading),
      1
      /* TEXT */
    )])]),
    content: withCtx(() => [renderSlot(_ctx.$slots, "content", {}, () => [createTextVNode(
      toDisplayString(_ctx.content),
      1
      /* TEXT */
    )])]),
    footer: withCtx(() => [createBaseVNode("div", _hoisted_1$R, [(openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList(_ctx.preparedButtons, (button) => {
        return openBlock(), createElementBlock("button", { key: button.label, type: "button", class: normalizeClass([button.classlist, "button-group__item"]), onClick: ($event) => _ctx.onClick(button) }, [createBaseVNode(
          "span",
          null,
          toDisplayString(button.label),
          1
          /* TEXT */
        ), _cache[0] || (_cache[0] = createTextVNode()), button.screenreader ? (openBlock(), createElementBlock(
          "span",
          _hoisted_3$v,
          " " + toDisplayString(button.screenreader),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true)], 10, _hoisted_2$D);
      }),
      128
      /* KEYED_FRAGMENT */
    ))])]),
    _: 3
    /* FORWARDED */
  }, 8, ["fullscreen", "is-open", "aria-close-text", "size", "onClose"]);
}
const FConfirmModal = /* @__PURE__ */ _export_sfc$1(_sfc_main$19, [["render", _sfc_render$_]]);
const GAP = ["1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x"];
const ALIGNMENT = ["top", "center", "bottom"];
const FLOAT = ["left", "center", "right"];
const _sfc_main$18 = /* @__PURE__ */ defineComponent({ name: "IFlex", inheritAttrs: true, props: {
  /**
  * Set gap (gutter) between items.
  *
  * Must be one of:
  *
  * - `"1x"`
  * - `"2x"`
  * - `"3x"`
  * - ...
  * - `"8x"`
  *
  * Example: a value of `"3x"` corresponds to a gap of `3 * 0.25 = 0.75rem`.
  */
  gap: { type: String, default: "", validator(val) {
    return val === "" || GAP.includes(val);
  } },
  /**
  * If set the IFlexItems will be fullwidth and
  * stacked on top of each other when breakpoint is small (aka mobile).
  */
  collapse: { type: Boolean, default: false },
  /**
  * If set the IFlexItems will wrap when out of space
  */
  wrap: { type: Boolean, default: false },
  /**
  * Set how IFlexItems should float.
  *
  * Must be one of:
  *
  * - `"left"`
  * - `"center"`
  * - `"right"`
  */
  float: { type: String, default: "", validator(val) {
    return val === "" || FLOAT.includes(val);
  } }
}, computed: { classList() {
  const classes = [];
  if (this.collapse) {
    classes.push("iflex--collapse");
  }
  if (this.gap) {
    classes.push(`iflex--gap-${this.gap}`);
  }
  if (this.wrap) {
    classes.push(`iflex--wrap`);
  }
  if (this.float) {
    classes.push(`iflex--float-${this.float}`);
  }
  return classes;
} } });
function _sfc_render$Z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    { class: normalizeClass(["iflex", _ctx.classList]) },
    [renderSlot(_ctx.$slots, "default")],
    2
    /* CLASS */
  );
}
const IFlex = /* @__PURE__ */ _export_sfc$1(_sfc_main$18, [["render", _sfc_render$Z]]);
const _sfc_main$17 = /* @__PURE__ */ defineComponent({ name: "IFlexItem", inheritAttrs: true, props: {
  /**
  * If set this item will grow to its largest possible size.
  */
  grow: { type: Boolean, default: false },
  /**
  * If set this item will shrink to its smallest possible size.
  */
  shrink: { type: Boolean, default: false },
  /**
  * Vertical positioning of content.
  *
  * Must be one of:
  *
  * - `"top"`
  * - `"center"`
  * - `"bottom"`
  */
  align: { type: String, default: "top", validator(val) {
    return ALIGNMENT.includes(val);
  } }
}, computed: { classList() {
  const classList = [`iflex--align-${this.align}`];
  if (this.grow) {
    classList.push("iflex--grow");
  } else if (this.shrink) {
    classList.push("iflex--shrink");
  }
  return classList;
} } });
function _sfc_render$Y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    { class: normalizeClass(["iflex__item", _ctx.classList]) },
    [renderSlot(_ctx.$slots, "default")],
    2
    /* CLASS */
  );
}
const IFlexItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$17, [["render", _sfc_render$Y]]);
function focusError(item) {
  const element = document.querySelector(`#${item.id}`);
  if (!element) {
    throw new Error(`Can not find element with id "${item.id}"`);
  }
  const focusElement2 = document.querySelector(`#${item.focusElementId}`);
  scrollTo(element, window.innerHeight * 0.25);
  focus(focusElement2 ? focusElement2 : element);
}
const _sfc_main$16 = /* @__PURE__ */ defineComponent({ name: "FErrorList", components: { FIcon, IFlex, IFlexItem }, props: {
  /**
  * List of errors of type `ErrorItem`.
  * If element id is unspecified, no link will be rendered.
  * If element with id don't exist on navigation, an exception is thrown.
  */
  items: { type: Array, required: true },
  /**
  * Display bullets in list.
  */
  bullets: { type: Boolean, required: false, default: false },
  /**
  * Optional callback for performing actions before navigation.
  */
  beforeNavigate: { type: Function, required: false, default() {
    return () => {
    };
  } }
}, computed: { hasTitleSlot() {
  return hasSlot(this, "title");
} }, methods: { liClasses(errorItem) {
  const classes = [];
  if (!this.bullets && errorItem.id) {
    classes.push("error-list__link");
  }
  return classes;
}, async onClickItem(item) {
  await this.beforeNavigate(item);
  focusError(item);
} } });
const _hoisted_1$Q = { class: "error-list" };
const _hoisted_2$C = { key: 0 };
const _hoisted_3$u = { class: "error-list__list error-list--list-style-none" };
const _hoisted_4$q = ["onClick"];
const _hoisted_5$k = { class: "error-list__link" };
function _sfc_render$X(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  const _component_i_flex_item = resolveComponent("i-flex-item");
  const _component_i_flex = resolveComponent("i-flex");
  return openBlock(), createElementBlock("div", _hoisted_1$Q, [createVNode(_component_i_flex, null, {
    default: withCtx(() => [_ctx.hasTitleSlot ? (openBlock(), createBlock(_component_i_flex_item, { key: 0, shrink: "" }, {
      default: withCtx(() => [createVNode(_component_f_icon, { class: "error-list__icon", name: "error" })]),
      _: 1
      /* STABLE */
    })) : createCommentVNode("v-if", true), _cache[6] || (_cache[6] = createTextVNode()), _ctx.hasTitleSlot ? (openBlock(), createBlock(_component_i_flex_item, { key: 1, shrink: "" }, {
      default: withCtx(() => _cache[0] || (_cache[0] = [createTextVNode(" ")])),
      _: 1
      /* STABLE */
    })) : createCommentVNode("v-if", true), _cache[7] || (_cache[7] = createTextVNode()), createVNode(_component_i_flex_item, { grow: "" }, {
      default: withCtx(() => [_ctx.hasTitleSlot ? (openBlock(), createElementBlock("div", _hoisted_2$C, [renderSlot(_ctx.$slots, "title")])) : createCommentVNode("v-if", true), _cache[5] || (_cache[5] = createTextVNode()), createBaseVNode("ul", _hoisted_3$u, [(openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList(_ctx.items, (item) => {
          return openBlock(), createElementBlock(
            "li",
            { key: item.id, class: normalizeClass(_ctx.liClasses(item)) },
            [item.id ? (openBlock(), createElementBlock("a", { key: 0, href: "javascript:", onClick: withModifiers(($event) => _ctx.onClickItem(item), ["prevent"]) }, [_ctx.bullets ? (openBlock(), createElementBlock(
              Fragment,
              { key: 0 },
              [_cache[1] || (_cache[1] = createBaseVNode(
                "span",
                { class: "error-list__bullet", "aria-hidden": "true" },
                null,
                -1
                /* HOISTED */
              )), _cache[2] || (_cache[2] = createTextVNode()), createBaseVNode(
                "span",
                _hoisted_5$k,
                toDisplayString(item.title),
                1
                /* TEXT */
              )],
              64
              /* STABLE_FRAGMENT */
            )) : (openBlock(), createElementBlock(
              Fragment,
              { key: 1 },
              [createTextVNode(
                toDisplayString(item.title),
                1
                /* TEXT */
              )],
              64
              /* STABLE_FRAGMENT */
            ))], 8, _hoisted_4$q)) : (openBlock(), createElementBlock(
              Fragment,
              { key: 1 },
              [_ctx.bullets ? (openBlock(), createElementBlock(
                Fragment,
                { key: 0 },
                [_cache[3] || (_cache[3] = createBaseVNode(
                  "span",
                  { class: "error-list__bullet", "aria-hidden": "true" },
                  null,
                  -1
                  /* HOISTED */
                )), _cache[4] || (_cache[4] = createTextVNode()), createBaseVNode(
                  "span",
                  null,
                  toDisplayString(item.title),
                  1
                  /* TEXT */
                )],
                64
                /* STABLE_FRAGMENT */
              )) : (openBlock(), createElementBlock(
                Fragment,
                { key: 1 },
                [createTextVNode(
                  toDisplayString(item.title),
                  1
                  /* TEXT */
                )],
                64
                /* STABLE_FRAGMENT */
              ))],
              64
              /* STABLE_FRAGMENT */
            ))],
            2
            /* CLASS */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      ))])]),
      _: 3
      /* FORWARDED */
    })]),
    _: 3
    /* FORWARDED */
  })]);
}
const FErrorList = /* @__PURE__ */ _export_sfc$1(_sfc_main$16, [["render", _sfc_render$X]]);
function cleanUpElements(vm) {
  return new Promise((resolve2) => {
    window.setTimeout(() => {
      Object.keys(vm.components).forEach((id2) => {
        const domElement = vm.$el.querySelector(`#${id2}`);
        if (!domElement) {
          delete vm.components[id2];
        }
      });
      resolve2();
    }, 0);
  });
}
const _sfc_main$15 = /* @__PURE__ */ defineComponent({ name: "FValidationGroup", props: {
  /**
  * A `GroupValidityEvent` object containing:
  *
  *   `isValid`: the aggregated validity of underlying components
  *
  *   `componentsWithError`: a list of components with errors sorted in DOM order
  *
  *   `componentCount`: number of registered components
  * @model
  */
  modelValue: { type: Object, required: false, default: () => {
    return { isValid: false, componentsWithError: [], componentCount: 0 };
  } },
  /**
  * Controls whether component-validity event should be propagated or not from underlying components.
  */
  stopPropagation: { type: Boolean, required: false, default: false }
}, emits: ["group-validity", "update:modelValue"], data() {
  return { components: {} };
}, methods: { onComponentUnmount(event) {
  delete this.components[event.detail.elementId];
  this.triggerGroupValidityEvent();
}, async onComponentValidity(event) {
  if (this.stopPropagation) {
    event.stopPropagation();
  }
  await cleanUpElements(this);
  this.components[event.detail.elementId] = event.detail;
  this.triggerGroupValidityEvent();
}, triggerGroupValidityEvent() {
  const components = Object.values(this.components);
  const isValid = components.every((component) => component.isValid);
  const componentsWithError = components.filter((component) => component.validityMode === "ERROR");
  componentsWithError.sort((a, b) => documentOrderComparator(a.target, b.target));
  this.$emit("update:modelValue", { isValid, componentsWithError, componentCount: components.length });
  this.$emit("group-validity", { isValid, componentsWithError, componentCount: components.length });
} } });
function _sfc_render$W(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    { onComponentValidity: _cache[0] || (_cache[0] = (...args) => _ctx.onComponentValidity && _ctx.onComponentValidity(...args)), onComponentUnmount: _cache[1] || (_cache[1] = (...args) => _ctx.onComponentUnmount && _ctx.onComponentUnmount(...args)) },
    [renderSlot(_ctx.$slots, "default")],
    32
    /* NEED_HYDRATION */
  );
}
const FValidationGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$15, [["render", _sfc_render$W]]);
var FValidationFormAction = /* @__PURE__ */ ((FValidationFormAction2) => {
  FValidationFormAction2[FValidationFormAction2["CONTINUE"] = 0] = "CONTINUE";
  FValidationFormAction2[FValidationFormAction2["CANCEL"] = 1] = "CANCEL";
  return FValidationFormAction2;
})(FValidationFormAction || {});
const _sfc_main$14 = /* @__PURE__ */ defineComponent({ name: "FValidationForm", components: { FValidationGroup, FErrorList }, inheritAttrs: false, props: {
  /**
  * If given, this function is called before the `submit` event is emitted.
  *
  * Optionally this callback may return `FValidationFormAction`. If
  * `FValidationFormAction.CANCEL` is returned the submission is
  * cancelled and no event will be emitted. The consumer should make it
  * clear why the action was cancelled.
  *
  * If a promise is returned it will be awaited.
  *
  * The consumer does not need to validate form data, it is handled
  * internally by the component.
  */
  beforeSubmit: { type: Function, required: false, default() {
    return () => void 0;
  } },
  /**
  * If given, this function is called before the form data is validated and the `submit` event is emitted.
  */
  beforeValidation: { type: Function, required: false, default() {
    return () => void 0;
  } },
  /**
  * The id for the form id attribute.
  * If the prop is not set a random value will be generated.
  */
  id: { type: String, required: false, default: () => ElementIdService.generateElementId() },
  /**
  * Include the error list component.
  */
  useErrorList: { type: Boolean, required: false, default: true },
  /**
  * Display bullets in the error list component.
  */
  errorListBullets: { type: Boolean, required: false, default: true },
  /**
  *Optional callback function to the error list component for performing actions before navigation.
  */
  errorListBeforeNavigate: { type: Function, required: false, default() {
    return () => {
    };
  } }
}, emits: ["submit"], data() {
  return { validity: { isValid: true, componentsWithError: [], componentCount: 0 }, submitted: false };
}, computed: { groupKey() {
  return `${this.id}-group`;
}, errors() {
  return this.validity.componentsWithError.map((c) => ({ id: c.elementId, focusElementId: c.focusElementId, title: c.errorMessage }));
}, displayErrors() {
  return this.useErrorList && this.submitted && this.errors.length > 0;
} }, methods: { async hasFormErrors() {
  ValidationService.setSubmitted(this.id);
  await ValidationService.validateAllElements(this.id);
  await this.$nextTick();
  await new Promise((resolve2) => window.setTimeout(resolve2, 0));
  if (this.validity.isValid) {
    return false;
  }
  if (this.useErrorList) {
    focus(this.$refs.errors);
  } else {
    const firstError = this.validity.componentsWithError[0];
    const element = document.getElementById(firstError.focusElementId);
    focus(element);
  }
  return true;
}, async onSubmit(event) {
  this.submitted = true;
  const beforeValidation = this.beforeValidation ? await this.beforeValidation() : void 0;
  if (beforeValidation === FValidationFormAction.CANCEL) {
    return;
  }
  if (await this.hasFormErrors()) {
    return;
  }
  const beforeAction = this.beforeSubmit ? await this.beforeSubmit() : void 0;
  if (beforeAction === FValidationFormAction.CANCEL) {
    return;
  }
  if (await this.hasFormErrors()) {
    return;
  }
  this.$emit("submit", event);
} } });
const _hoisted_1$P = ["id"];
const _hoisted_2$B = { key: 0, ref: "errors", tabindex: "-1", role: "group" };
function _sfc_render$V(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_error_list = resolveComponent("f-error-list");
  const _component_f_validation_group = resolveComponent("f-validation-group");
  return openBlock(), createBlock(_component_f_validation_group, { key: _ctx.groupKey, modelValue: _ctx.validity, "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.validity = $event), "stop-propagation": true }, {
    default: withCtx(() => [createBaseVNode("form", mergeProps({ id: _ctx.id }, _ctx.$attrs, { novalidate: "", autocomplete: "off", onSubmit: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.onSubmit && _ctx.onSubmit(...args), ["prevent"])) }), [_ctx.displayErrors ? (openBlock(), createElementBlock(
      "nav",
      _hoisted_2$B,
      [createVNode(_component_f_error_list, { items: _ctx.errors, bullets: _ctx.errorListBullets, "before-navigate": _ctx.errorListBeforeNavigate }, {
        title: withCtx(() => [renderSlot(_ctx.$slots, "error-message")]),
        _: 3
        /* FORWARDED */
      }, 8, ["items", "bullets", "before-navigate"])],
      512
      /* NEED_PATCH */
    )) : createCommentVNode("v-if", true), _cache[2] || (_cache[2] = createTextVNode()), renderSlot(_ctx.$slots, "default")], 16, _hoisted_1$P)]),
    _: 3
    /* FORWARDED */
  }, 8, ["modelValue"]);
}
const FValidationForm = /* @__PURE__ */ _export_sfc$1(_sfc_main$14, [["render", _sfc_render$V]]);
const _sfc_main$13 = /* @__PURE__ */ defineComponent({ name: "FFormModal", components: { FModal, FValidationForm }, mixins: [TranslationMixin], inheritAttrs: true, props: {
  /**
  * Enable fullscreen mode in mobile.
  */
  fullscreen: { type: Boolean, required: false, default: true },
  /**
  * If the modal is open.
  * Use this to toggle if the modal should be visible or not.
  */
  isOpen: { type: Boolean, required: false, default: true },
  /**
  * See <f-modal> `size` props.
  */
  size: { type: String, default: "", validator(value) {
    return sizes.includes(value);
  } },
  /**
  * @ignore
  */
  dataTest: { type: String, required: false, default: "" },
  /**
  * The data that has been submitted.
  */
  value: { type: Object, default: function() {
    return {};
  } },
  /**
  * Include the error list component.
  */
  useErrorList: { type: Boolean, required: false, default: true },
  /**
  * The id for the form id attribute.
  * If the prop is not set a random value will be generated.
  */
  formId: { type: String, required: false, default: () => ElementIdService.generateElementId() },
  /**
  * The aria-label attribute text for the top right close button.
  */
  ariaCloseText: { type: String, required: false, default: void 0 },
  /**
  * If given, this function is called before the [[submit]] event is emitted.
  * See <f-validation-form> `beforeSubmit` props for more info.
  */
  beforeSubmit: { type: Function, required: false, default() {
  } },
  /**
  * If given, this function is called before the form data is validated and the [[submit]] event is emitted.
  * See <f-validation-form> `beforeValidation` props for more info.
  */
  beforeValidation: { type: Function, required: false, default() {
  } },
  buttons: { type: Array, required: false, default: () => [{ label: TranslationService.provider.translate("fkui.form-modal.button.submit.text", "Spara"), event: "submit", type: "primary", submitButton: true }, { label: TranslationService.provider.translate("fkui.form-modal.button.cancel.text", "Avbryt"), event: "dismiss", type: "secondary" }] }
}, emits: ["cancel", "close", "submit"], data() {
  return {};
}, computed: { preparedButtons() {
  return prepareButtonList(this.buttons, FKUIConfigButtonOrder.LEFT_TO_RIGHT);
}, hasDeprecatedSlots() {
  return hasSlot(this, "cancel-button-text") || hasSlot(this, "submit-button-text");
} }, methods: { onClose() {
  ValidationService.resetState(this.$el);
  this.$emit("cancel");
  this.$emit("close", { reason: "close" });
}, async onSubmit() {
  ValidationService.resetState(this.$el);
  this.$emit("submit", { data: this.value });
  this.$emit("close", { reason: "submit", data: this.value });
}, onCancel() {
  ValidationService.resetState(this.$el);
  this.$emit("cancel");
  this.$emit("close", { reason: "close" });
} } });
const _hoisted_1$O = { class: "button-group" };
const _hoisted_2$A = ["type", "form", "onClick"];
const _hoisted_3$t = { key: 0, class: "sr-only" };
const _hoisted_4$p = ["form"];
function _sfc_render$U(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_validation_form = resolveComponent("f-validation-form");
  const _component_f_modal = resolveComponent("f-modal");
  return openBlock(), createBlock(_component_f_modal, { "data-test": _ctx.dataTest, fullscreen: _ctx.fullscreen, "is-open": _ctx.isOpen, size: _ctx.size, "aria-close-text": _ctx.ariaCloseText, onClose: _ctx.onClose }, {
    header: withCtx(() => [renderSlot(_ctx.$slots, "header")]),
    content: withCtx(() => [createBaseVNode("div", null, [renderSlot(_ctx.$slots, "default")]), _cache[2] || (_cache[2] = createTextVNode()), createVNode(_component_f_validation_form, { id: _ctx.formId, "before-submit": _ctx.beforeSubmit, "before-validation": _ctx.beforeValidation, "use-error-list": _ctx.useErrorList, onSubmit: _ctx.onSubmit, onCancel: _ctx.onCancel }, {
      "error-message": withCtx(() => [renderSlot(_ctx.$slots, "error-message")]),
      default: withCtx(() => [_cache[1] || (_cache[1] = createTextVNode()), renderSlot(_ctx.$slots, "input-text-fields")]),
      _: 3
      /* FORWARDED */
    }, 8, ["id", "before-submit", "before-validation", "use-error-list", "onSubmit", "onCancel"])]),
    footer: withCtx(() => [createBaseVNode("div", _hoisted_1$O, [!_ctx.hasDeprecatedSlots ? (openBlock(true), createElementBlock(
      Fragment,
      { key: 0 },
      renderList(_ctx.preparedButtons, (button) => {
        return openBlock(), createElementBlock("button", { key: button.label, type: button.buttonType, class: normalizeClass([button.classlist, "button-group__item"]), form: button.buttonType === "submit" ? _ctx.formId : void 0, onClick: ($event) => button.buttonType === "button" ? _ctx.onCancel() : false }, [createBaseVNode(
          "span",
          null,
          toDisplayString(button.label),
          1
          /* TEXT */
        ), _cache[3] || (_cache[3] = createTextVNode()), button.screenreader ? (openBlock(), createElementBlock(
          "span",
          _hoisted_3$t,
          " " + toDisplayString(button.screenreader),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true)], 10, _hoisted_2$A);
      }),
      128
      /* KEYED_FRAGMENT */
    )) : (openBlock(), createElementBlock(
      Fragment,
      { key: 1 },
      [createBaseVNode("button", { form: _ctx.formId, "data-test": "submit-button", type: "submit", class: "button button--primary button-group__item button--large" }, [renderSlot(_ctx.$slots, "submit-button-text", {}, () => [createTextVNode(
        toDisplayString(_ctx.$t("fkui.form-modal.button.submit.text", "Spara")),
        1
        /* TEXT */
      )])], 8, _hoisted_4$p), _cache[4] || (_cache[4] = createTextVNode()), createBaseVNode("button", { "data-test": "cancel-button", type: "button", class: "button button--secondary button-group__item button--large", onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onCancel && _ctx.onCancel(...args)) }, [renderSlot(_ctx.$slots, "cancel-button-text", {}, () => [createTextVNode(
        toDisplayString(_ctx.$t("fkui.form-modal.button.cancel.text", "Avbryt")),
        1
        /* TEXT */
      )])])],
      64
      /* STABLE_FRAGMENT */
    ))])]),
    _: 3
    /* FORWARDED */
  }, 8, ["data-test", "fullscreen", "is-open", "size", "aria-close-text", "onClose"]);
}
const FFormModal = /* @__PURE__ */ _export_sfc$1(_sfc_main$13, [["render", _sfc_render$U]]);
function hasSlot(vm, name, props = {}, options = {}) {
  const slot = vm.$slots[name];
  return Boolean(renderSlotText(slot, props, options));
}
function getAbsolutePosition(src) {
  if (!src) {
    return void 0;
  }
  const isRoot = src.isSameNode(document.documentElement);
  if (isRoot) {
    return { x: window.pageXOffset, y: window.pageYOffset, width: src.clientWidth, height: src.clientHeight };
  }
  const rect = src.getBoundingClientRect();
  return { x: Math.floor(rect.left + window.pageXOffset), y: Math.floor(rect.top + window.pageYOffset), width: Math.floor(rect.width), height: Math.floor(rect.height) };
}
function getValidatableElement(element) {
  if (isValidatableHTMLElement(element)) {
    return element;
  }
  const validatableInsideElement = element.querySelector("input, textarea, select");
  if (validatableInsideElement) {
    return validatableInsideElement;
  } else {
    throw new Error(`Couldn't find any validatable element`);
  }
}
function triggerInitialValidationToSupportFFormStepValidation(el) {
  const target = getValidatableElement(el);
  ValidationService.validateElement(target);
}
function registerValidators(el, binding) {
  const { modifiers: bindingModifiers = {}, value: bindingValue = {} } = binding;
  const target = getValidatableElement(el);
  Object.keys(bindingValue).forEach((validatorName) => {
    if (!bindingModifiers[validatorName]) {
      throw new Error(`Have you forget to add '${validatorName}' to v-validation.${validatorName}?`);
    }
  });
  const validatorConfigs = {};
  Object.keys(bindingModifiers).forEach((validatorName) => {
    validatorConfigs[validatorName] = bindingValue[validatorName] || {};
  });
  ValidationService.addValidatorsToElement(target, validatorConfigs);
}
const ValidationDirective = { beforeMount(el, binding) {
  registerValidators(el, binding);
}, beforeUnmount(el, _binding) {
  const validatableElement = getValidatableElement(el);
  dispatchComponentUnmountEvent(validatableElement);
  ValidationService.removeValidatorsFromElement(validatableElement);
}, updated(el, binding) {
  if (!isEqual$1(binding.value, binding.oldValue)) {
    registerValidators(el, binding);
  }
}, mounted(el) {
  triggerInitialValidationToSupportFFormStepValidation(el);
} };
const ValidationPrefixDirective = { beforeMount(el, binding) {
  el.addEventListener("component-validity", (event) => {
    const e = event;
    e.detail.errorMessage = `${binding.value}${e.detail.errorMessage}`;
  });
} };
const ValidationPlugin = { install(app2) {
  app2.directive("validation", ValidationDirective);
  app2.directive("validationPrefix", ValidationPrefixDirective);
} };
var Placement = /* @__PURE__ */ ((Placement2) => {
  Placement2["A"] = "A";
  Placement2["B"] = "B";
  Placement2["C"] = "C";
  Placement2["D"] = "D";
  Placement2["E"] = "E";
  Placement2["F"] = "F";
  Placement2["G"] = "G";
  Placement2["H"] = "H";
  Placement2["I"] = "I";
  Placement2["Fallback"] = "Fallback";
  Placement2["NotCalculated"] = "NotCalculated";
  return Placement2;
})(Placement || {});
var CandidateOrder = /* @__PURE__ */ ((CandidateOrder2) => {
  CandidateOrder2["Default"] = "Default";
  CandidateOrder2["IPopupError"] = "IPopupError";
  return CandidateOrder2;
})(CandidateOrder || {});
function getCandidates(anchor, target, clippedArea, spacing, candidateOrder) {
  const dw = target.width - anchor.width;
  const a = {
    placement: "A",
    x: anchor.x,
    y: anchor.y + anchor.height + spacing,
    width: target.width,
    height: target.height,
    direction: 1
    /* Vertical */
  };
  const b = {
    placement: "B",
    x: anchor.x - dw,
    y: anchor.y + anchor.height + spacing,
    width: target.width,
    height: target.height,
    direction: 1
    /* Vertical */
  };
  const c = {
    placement: "C",
    x: anchor.x,
    y: anchor.y - target.height - spacing,
    width: target.width,
    height: target.height,
    direction: 1
    /* Vertical */
  };
  const d = {
    placement: "D",
    x: anchor.x - dw,
    y: anchor.y - target.height - spacing,
    width: target.width,
    height: target.height,
    direction: 1
    /* Vertical */
  };
  const e = {
    placement: "E",
    x: anchor.x + anchor.width + spacing,
    y: anchor.y + anchor.height / 2 - target.height / 2,
    width: target.width,
    height: target.height,
    direction: 0
    /* Horizontal */
  };
  const f = {
    placement: "F",
    x: anchor.x - (target.width + spacing),
    y: anchor.y + anchor.height / 2 - target.height / 2,
    width: target.width,
    height: target.height,
    direction: 0
    /* Horizontal */
  };
  const g = {
    placement: "G",
    x: anchor.x + anchor.width + spacing,
    y: clippedArea.y + spacing,
    width: target.width,
    height: target.height,
    direction: 2
    /* Both */
  };
  const h2 = {
    placement: "H",
    x: anchor.x - (target.width + spacing),
    y: clippedArea.y + spacing,
    width: target.width,
    height: target.height,
    direction: 2
    /* Both */
  };
  const i = {
    placement: "I",
    x: clippedArea.x + (clippedArea.width - target.width) / 2,
    y: clippedArea.y + (clippedArea.height - target.height) / 2,
    width: target.width,
    height: target.height,
    direction: 3
    /* None */
  };
  if (candidateOrder === "IPopupError") {
    return [b, a, d, c, e, f, f, f, f];
  } else {
    return [a, b, c, d, e, f, g, h2, i];
  }
}
function isInside(outer, inner, spacing) {
  const isHorizontalDirection = inner.direction === 0 || inner.direction === 2;
  const xSpacing = isHorizontalDirection ? spacing : 0;
  const isVerticalDirection = inner.direction === 1 || inner.direction === 2;
  const ySpacing = isVerticalDirection ? spacing : 0;
  const ax = [inner.x, inner.x + inner.width];
  const ay = [inner.y, inner.y + inner.height];
  const bx = [outer.x + xSpacing, outer.x + outer.width - xSpacing];
  const by = [outer.y + ySpacing, outer.y + outer.height - ySpacing];
  if (ax[0] < bx[0] || ax[1] > bx[1]) {
    return false;
  }
  if (ay[0] < by[0] || ay[1] > by[1]) {
    return false;
  }
  return true;
}
function isElementOptions(options) {
  return options.target instanceof HTMLElement;
}
function clipRect(src, clip) {
  if (!clip) {
    return src;
  }
  const x = Math.max(src.x, clip.x);
  const y = Math.max(src.y, clip.y);
  const width = Math.min(src.x + src.width, clip.x + clip.width) - x;
  const height = Math.min(src.y + src.height, clip.y + clip.height) - y;
  return { x, y, width, height };
}
function fitInsideArea(options) {
  var _a;
  if (isElementOptions(options)) {
    const { area: areaElement, anchor: anchorElement, target: targetElement, viewport: viewportElement, spacing: spacing2, candidateOrder } = options;
    const area2 = getAbsolutePosition(areaElement);
    const anchor2 = getAbsolutePosition(anchorElement);
    const target2 = getAbsolutePosition(targetElement);
    const viewport2 = getAbsolutePosition(viewportElement);
    const result = fitInsideArea({ area: area2, target: target2, anchor: anchor2, viewport: viewport2, spacing: spacing2, candidateOrder });
    const offset2 = (_a = targetElement.offsetParent) == null ? void 0 : _a.getBoundingClientRect();
    if (!offset2) {
      return result;
    }
    return { ...result, x: result.x - (offset2.left + window.pageXOffset), y: result.y - (offset2.top + window.pageYOffset) };
  }
  const { anchor, target, area, viewport, spacing } = options;
  const clippedArea = clipRect(area, viewport);
  const candidates = getCandidates(anchor, target, clippedArea, spacing, options.candidateOrder);
  const index = candidates.findIndex((it) => isInside(clippedArea, it, spacing));
  if (index >= 0) {
    const match2 = candidates[index];
    return { x: match2.x, y: match2.y, placement: match2.placement };
  }
  return {
    ...getFallbackPosition(anchor, target, clippedArea, spacing),
    placement: "Fallback"
    /* Fallback */
  };
}
function getFallbackPosition(anchor, target, clippedArea, spacing) {
  const x = anchor.x - (target.width + spacing);
  const y = anchor.y + anchor.height + spacing;
  if (x >= clippedArea.x) {
    return { x, y };
  } else {
    return { x: clippedArea.x + spacing, y };
  }
}
const injectionKeys = { sharedName: Symbol("sharedName"), showDetails: Symbol("showDetails"), getFieldsetLabelText: Symbol("getFieldsetLabelText") };
function useFieldset() {
  return { sharedName: inject(injectionKeys.sharedName, void 0), showDetails: inject(injectionKeys.showDetails, "never"), getFieldsetLabelText: inject(injectionKeys.getFieldsetLabelText, () => void 0) };
}
const anyType$1 = [String, Object, Array, Number, Date, Boolean];
const _sfc_main$U = /* @__PURE__ */ defineComponent({ name: "FCheckboxField", inheritAttrs: false, props: {
  /**
  * Set to `true`, empty string `""` or string `"disabled"` to disable this input field.
  */
  disabled: { type: Boolean, required: false, default: false },
  /**
  * The id for the input id attribute.
  * The id for the label for attribute.
  * If the prop is not set a random value will be generated.
  */
  id: { type: String, required: false, default: () => ElementIdService.generateElementId() },
  /**
  * The value for the input checked attribute.
  * @model
  */
  // ? The rule is disabled so that the `checked` prop can be undefined or null.
  /* eslint-disable-next-line vue/require-default-prop -- technical debt,
      /* it should contain a default value of undefined and proptype should
      /* include undefined (see comment on line above) */
  modelValue: { type: anyType$1, required: false },
  /**
  * The value for the input.
  */
  value: { type: anyType$1, required: true }
}, emits: ["change", "update:modelValue"], setup() {
  const { showDetails, getFieldsetLabelText } = useFieldset();
  return { showDetails, getFieldsetLabelText };
}, data() {
  return { expanded: false, height: 0, initialStyle: { overflow: "hidden", transition: "height 400ms cubic-bezier(0.46, 0.03, 0.52, 0.96)" }, hiddenStyle: { height: "auto", position: "absolute", visibility: "hidden" }, visibleStyle: { width: "", position: "", visibility: "", height: "0px" }, openedStyle: { height: "auto" } };
}, computed: {
  attrs() {
    let checked;
    if (Array.isArray(this.modelValue)) {
      checked = this.modelValue.findIndex((it) => isEqual$1(toValue(it), toValue(this.value))) >= 0;
    } else {
      checked = this.value === this.modelValue;
    }
    return { ...this.$attrs, value: this.value, checked, onChange: (event) => {
      if (event.target instanceof HTMLInputElement) {
        this.emitVModelEvent(event);
      }
    }, onInput: (event) => {
      event.target.focus();
    } };
  },
  disabledClass() {
    return this.disabled ? "disabled" : "";
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- technical debt, nore sure whats going on here
  injected() {
    return this;
  }
}, methods: { updateExpandedFlag() {
  const checkboxInput = getHTMLElementFromVueRef(this.$refs["checkboxInput"]);
  this.expanded = checkboxInput.checked;
}, emitVModelEvent(event) {
  let newModel;
  if (Array.isArray(this.modelValue)) {
    newModel = [...this.modelValue].filter((it) => !isEqual$1(toValue(it), toValue(this.value)));
    if (this.modelValue.length <= newModel.length) {
      newModel.push(this.value);
    }
  } else {
    if (this.value === this.modelValue) {
      newModel = typeof this.value === "boolean" ? false : void 0;
    } else {
      const target = event.target;
      newModel = target.value === "true" ? true : this.value;
    }
  }
  this.$emit("update:modelValue", newModel);
  this.$emit("change", newModel);
}, onKeydown(event) {
  event.stopPropagation();
}, onValidity({ detail }) {
  if (detail.target !== this.$el.querySelector("input")) {
    return;
  }
  let errorMessage = "";
  if (hasSlot(this, "default")) {
    const labelText = this.injected.getFieldsetLabelText();
    if (labelText) {
      errorMessage = `${labelText} ${renderSlotText(this.$slots.default)}`;
    } else {
      errorMessage = `${renderSlotText(this.$slots.default)}`;
    }
  }
  const element = this.$el.querySelector(`#${detail.elementId}`);
  if (element) {
    dispatchComponentValidityEvent(element, { ...detail, errorMessage, focusElementId: detail.elementId });
  }
}, enter(element) {
  const htmlElement = getHTMLElementFromVueRef(element);
  const computedStyle = getComputedStyle(element);
  Object.assign(htmlElement.style, this.initialStyle);
  Object.assign(htmlElement.style, this.hiddenStyle);
  htmlElement.style.width = computedStyle.width;
  const height = computedStyle.height;
  Object.assign(htmlElement.style, this.visibleStyle);
  getComputedStyle(element).height;
  setTimeout(() => {
    this.height = parseInt(height, 10);
    htmlElement.style.height = height;
  });
}, afterEnter(element) {
  const htmlElement = getHTMLElementFromVueRef(element);
  Object.assign(htmlElement.style, this.openedStyle);
}, leave(element) {
  const htmlElement = getHTMLElementFromVueRef(element);
  const height = getComputedStyle(element).height;
  htmlElement.style.height = height;
  getComputedStyle(element).height;
  setTimeout(() => {
    Object.assign(htmlElement.style, this.visibleStyle);
  });
} } });
const _hoisted_1$F = ["id", "disabled"];
const _hoisted_2$u = ["for"];
const _hoisted_3$o = { key: 0, class: "checkbox__details" };
const _hoisted_4$k = { key: 0, class: "checkbox__details" };
function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    { class: normalizeClass(["checkbox", _ctx.disabledClass]), onValidity: _cache[2] || (_cache[2] = (...args) => _ctx.onValidity && _ctx.onValidity(...args)) },
    [createBaseVNode("input", mergeProps({ id: _ctx.id }, _ctx.attrs, { ref: "checkboxInput", type: "checkbox", class: "checkbox__input", disabled: _ctx.disabled, onKeydown: _cache[0] || (_cache[0] = withKeys((...args) => _ctx.onKeydown && _ctx.onKeydown(...args), ["space"])), onChange: _cache[1] || (_cache[1] = ($event) => _ctx.updateExpandedFlag()) }), null, 16, _hoisted_1$F), _cache[9] || (_cache[9] = createTextVNode()), createBaseVNode("label", { class: normalizeClass(_ctx.$slots.details ? "checkbox__label checkbox__width" : "checkbox__label"), for: _ctx.id }, [renderSlot(_ctx.$slots, "default"), _cache[8] || (_cache[8] = createTextVNode()), _ctx.$slots.details ? (openBlock(), createElementBlock(
      Fragment,
      { key: 0 },
      [_ctx.showDetails === "always" ? (openBlock(), createElementBlock("span", _hoisted_3$o, [_cache[3] || (_cache[3] = createBaseVNode(
        "br",
        null,
        null,
        -1
        /* HOISTED */
      )), _cache[4] || (_cache[4] = createTextVNode()), renderSlot(_ctx.$slots, "details")])) : createCommentVNode("v-if", true), _cache[7] || (_cache[7] = createTextVNode()), _ctx.showDetails === "when-selected" ? (openBlock(), createBlock(Transition, { key: 1, onEnter: _ctx.enter, onAfterEnter: _ctx.afterEnter, onLeave: _ctx.leave }, {
        default: withCtx(() => [_ctx.expanded ? (openBlock(), createElementBlock("span", _hoisted_4$k, [_cache[5] || (_cache[5] = createBaseVNode(
          "br",
          null,
          null,
          -1
          /* HOISTED */
        )), _cache[6] || (_cache[6] = createTextVNode()), renderSlot(_ctx.$slots, "details", { height: _ctx.height })])) : createCommentVNode("v-if", true)]),
        _: 3
        /* FORWARDED */
      }, 8, ["onEnter", "onAfterEnter", "onLeave"])) : createCommentVNode("v-if", true)],
      64
      /* STABLE_FRAGMENT */
    )) : createCommentVNode("v-if", true)], 10, _hoisted_2$u)],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const FCheckboxField = /* @__PURE__ */ _export_sfc$1(_sfc_main$U, [["render", _sfc_render$J]]);
var Operation = /* @__PURE__ */ ((Operation2) => {
  Operation2[Operation2["ADD"] = 0] = "ADD";
  Operation2[Operation2["DELETE"] = 1] = "DELETE";
  Operation2[Operation2["MODIFY"] = 2] = "MODIFY";
  Operation2[Operation2["NONE"] = 3] = "NONE";
  return Operation2;
})(Operation || {});
/* @__PURE__ */ defineComponent({ name: "FCrudDataset", components: { FFormModal, FConfirmModal, FIcon }, mixins: [TranslationMixin], provide() {
  return { delete: (item) => {
    this.deleteItem(item);
  }, modify: (item) => {
    this.updateItem(item);
  }, registerCallbackAfterItemAdd: (callback) => {
    this.callbackAfterItemAdd = callback;
  }, registerCallbackBeforeItemDelete: (callback) => {
    this.callbackBeforeItemDelete = callback;
  } };
}, props: {
  /**
  * The list of items that should be deleted, modified or added to.
  * If the prop is not set an empty array will be used.
  * @model
  */
  modelValue: { type: Array, required: false, default: () => [] },
  /**
  * A function that returns an item to the #add template. Can be used to populate data that the user should not input themself e.g. an id.
  * Or to give the user suggestions for inputs. If the prop is not used an empty item will be returned.
  */
  beforeCreate: { type: Function, required: false, default: void 0 },
  /**
  * If `true` the primary button in the modals will be placed to the right side instead of to the left.
  */
  primaryButtonRight: { type: Boolean, default: false },
  /**
  * If given, this function is called before the [[submit]] event is emitted.
  * See <f-validation-form> `beforeSubmit` props for more info.
  */
  beforeSubmit: { type: Function, required: false, default() {
  } },
  /**
  * If given, this function is called before the form data is validated and the [[submit]] event is emitted.
  * See <f-validation-form> `beforeValidation` props for more info.
  */
  beforeValidation: { type: Function, required: false, default() {
  } },
  /**
  * If given, this function is called after the modal has been closed.
  */
  onCancel: { type: Function, required: false, default() {
    return void 0;
  } },
  /**
  * Property for changing the "add new" modal heading
  */
  addNewModalHeader: { type: String, required: false, default: TranslationService.provider.translate("fkui.crud-dataset.modal.header.add", "Lägg till rad") },
  /**
  * Property for changing the "modify" modal heading
  */
  modifyModalHeader: { type: String, required: false, default: TranslationService.provider.translate("fkui.crud-dataset.modal.header.modify", "Ändra rad") },
  /**
  * Property for changing the "delete" modal heading
  */
  deleteModalHeader: { type: String, required: false, default: TranslationService.provider.translate("fkui.crud-dataset.modal.header.delete", "Är du säker på att du vill ta bort raden?") }
}, emits: ["change", "created", "deleted", "updated", "update:modelValue"], data() {
  return { result: [], Operation, operation: Operation.NONE, item: null, originalItemToUpdate: null, isFormModalOpen: false, isConfirmModalOpen: false, callbackAfterItemAdd() {
  }, callbackBeforeItemDelete() {
  } };
}, computed: { confirmButtonText() {
  return this.operation === Operation.ADD ? this.$t("fkui.crud-dataset.modal.confirm.add", "Lägg till") : this.$t("fkui.crud-dataset.modal.confirm.modify", "Spara");
}, cancelButtonText() {
  return this.operation === Operation.ADD ? this.$t("fkui.crud-dataset.modal.cancel.add", "Avbryt") : this.$t("fkui.crud-dataset.modal.cancel.modify", "Avbryt");
}, confirmDeleteButtons() {
  return [{ label: this.$t("fkui.crud-dataset.modal.confirm.delete", "Ja, ta bort"), type: "primary", event: "confirm" }, { label: this.$t("fkui.crud-dataset.modal.cancel.delete", "Nej, avbryt"), type: "secondary" }];
}, hasAddSlot() {
  return Boolean(this.$slots.add);
}, hasDeleteSlot() {
  return Boolean(this.$slots.delete);
}, hasModifySlot() {
  return Boolean(this.$slots.modify);
}, formModalHeader() {
  return this.operation === Operation.ADD ? this.addNewModalHeader : this.modifyModalHeader;
} }, watch: { modelValue: { immediate: true, deep: true, handler(data2) {
  this.result = [...data2];
} } }, mounted() {
  if (!this.hasAddSlot && !this.hasDeleteSlot && !this.hasModifySlot) {
    throw Error("Atleast one template of the following must be defined. #add, #delete or #modify");
  }
}, methods: { createItem() {
  if (!this.hasAddSlot) {
    throw Error("No template is defined for #add");
  }
  this.operation = Operation.ADD;
  this.item = this.beforeCreate ? this.beforeCreate() : {};
  this.isFormModalOpen = true;
}, deleteItem(item) {
  if (!this.hasDeleteSlot) {
    throw Error("No template is defined for #delete");
  }
  this.operation = Operation.DELETE;
  this.item = item;
  this.isConfirmModalOpen = true;
}, onDeleteConfirm() {
  if (!this.item) {
    return;
  }
  this.callbackBeforeItemDelete(this.item);
  this.result = this.result.filter((item) => item !== this.item);
  this.$emit("deleted", this.item);
  this.$emit("update:modelValue", this.result);
  this.$emit("change", this.result);
  alertScreenReader(this.$t("fkui.crud-dataset.aria-live.delete", "Raden har tagits bort"), { assertive: true });
}, onDeleteClose(e) {
  this.onModalClose();
  if (e.reason === "close" && this.onCancel) {
    this.onCancel();
  }
}, onModalClose() {
  this.isFormModalOpen = false;
  this.isConfirmModalOpen = false;
}, onFormModalSubmit() {
  if (!this.item) {
    return;
  }
  if (this.operation === Operation.ADD) {
    this.result.push(this.item);
    this.$emit("created", this.item);
    this.$emit("update:modelValue", this.result);
    this.$emit("change", this.result);
    this.callbackAfterItemAdd(this.item);
    alertScreenReader(this.$t("fkui.crud-dataset.aria-live.add", "En rad har lagts till"), { assertive: true });
  } else if (this.operation === Operation.MODIFY) {
    if (this.originalItemToUpdate) {
      Object.assign(this.originalItemToUpdate, this.item);
    } else {
      this.originalItemToUpdate = this.item;
    }
    this.$emit("updated", this.originalItemToUpdate);
    this.$emit("update:modelValue", this.result);
    this.$emit("change", this.result);
    alertScreenReader(this.$t("fkui.crud-dataset.aria-live.modify", "Raden har ändrats"), { assertive: true });
  }
  this.isFormModalOpen = false;
}, updateItem(item) {
  if (!this.hasModifySlot) {
    throw Error("No template is defined for #modify");
  }
  this.operation = Operation.MODIFY;
  this.originalItemToUpdate = item;
  this.item = deepClone(item);
  this.isFormModalOpen = true;
} } });
function ActivateItemInjected() {
  return { registerCallbackAfterItemAdd: inject("registerCallbackAfterItemAdd", () => void 0), registerCallbackBeforeItemDelete: inject("registerCallbackBeforeItemDelete", () => void 0) };
}
var FTableColumnType = /* @__PURE__ */ ((FTableColumnType2) => {
  FTableColumnType2["TEXT"] = "text";
  FTableColumnType2["DATE"] = "date";
  FTableColumnType2["NUMERIC"] = "numeric";
  FTableColumnType2["ACTION"] = "action";
  return FTableColumnType2;
})(FTableColumnType || {});
var FTableColumnSize = /* @__PURE__ */ ((FTableColumnSize2) => {
  FTableColumnSize2["EXPAND"] = "table__column--expand";
  FTableColumnSize2["SHRINK"] = "table__column--shrink";
  return FTableColumnSize2;
})(FTableColumnSize || {});
var FTableColumnSort = /* @__PURE__ */ ((FTableColumnSort2) => {
  FTableColumnSort2["UNSORTED"] = "unsorted";
  FTableColumnSort2["ASCENDING"] = "ascending";
  FTableColumnSort2["DESCENDING"] = "descending";
  return FTableColumnSort2;
})(FTableColumnSort || {});
function addColumn(src, column) {
  if (!src.some((col) => col.name === column.name)) {
    return [...src, column];
  }
  return src;
}
function setVisibilityColumn(src, id2, visible) {
  const column = src.find((col) => col.name === id2);
  if (column) {
    column.visible = visible;
  }
}
function updateSortOrder(src, columnName, ascending) {
  src.forEach((column) => {
    if (column.name === columnName) {
      column.sort = ascending ? "ascending" : "descending";
    } else {
      column.sort = "unsorted";
    }
  });
}
function setSortableColumns(src, columnNames) {
  for (const columnName of columnNames) {
    const foundColumn = src.find((col) => col.name === columnName);
    if (foundColumn) {
      foundColumn.sortable = true;
    }
  }
}
function getSortableIconName(column) {
  switch (column.sort) {
    case "unsorted":
      return "sort";
    case "ascending":
      return "caret-up";
    case "descending":
      return "caret-down";
    default:
      return "";
  }
}
function getSortableIconClasses(column) {
  const classes = ["table__column__header__icon"];
  if (column.sort === "unsorted") {
    classes.push("table__column__header__icon--discrete");
  }
  return classes;
}
function isTableColumnType(value) {
  return ["text", "date", "numeric", "action"].includes(value);
}
function FTableInjected() {
  return { addColumn: inject("addColumn"), setVisibilityColumn: inject("setVisibilityColumn"), textFieldTableMode: true, renderColumns: inject("renderColumns", false) };
}
/* @__PURE__ */ defineComponent({ name: "FTableColumn", inheritAttrs: false, props: {
  /**
  * Unique (per-table) identifier.
  *
  * Typically set to the row property displayed but any unique string can
  * be used.
  */
  name: { type: String, required: true },
  /**
  * If set to true, display the column, set to false to hide it.
  */
  visible: { type: Boolean, default: true },
  /**
  * If `true` this cell will be a row header (`<th>` as opposed to
  * `<td>`).
  */
  rowHeader: { type: Boolean, required: false, default: false },
  /**
  * Text to show in column header. In order to force newlines use `\n`.
  */
  title: { type: String, required: true },
  /**
  * Additional column description.
  */
  description: { type: String, required: false, default: "" },
  /**
  * Set this column to shrink as small as possible.
  *
  * Cannot be combined with `expand`
  */
  shrink: { type: Boolean, required: false, default: false },
  /**
  * Set this column to expand as large as possible.
  *
  * Cannot be combined with `shrink`
  *
  * Default if neither `expand` or `shrink` is set.
  */
  expand: { type: Boolean, required: false, default: false },
  /**
  * Type of data the rows contains.
  *
  * Applies proper alignment and some styling (e.g. "numeric" uses fixed
  * width numbers).
  *
  * Can be one of the following values:
  *
  * - `"text"`: regular text data (default)
  * - `"date"`: date (should be YYYY-MM-DD)
  * - `"numeric"`: numeric data
  * - `"action"`: buttons to perform actions on row
  */
  type: { type: String, required: false, default: FTableColumnType.TEXT, validator(value) {
    return isTableColumnType(value);
  } }
}, setup() {
  return FTableInjected();
}, computed: { classes() {
  return ["table__column", `table__column--${this.type}`];
}, scope() {
  return this.rowHeader ? "row" : null;
}, tagName() {
  if (this.rowHeader) {
    return "th";
  } else {
    return "td";
  }
} }, watch: { visible: { handler: function() {
  this.setVisibilityColumn(this.name, this.visible);
} } }, created() {
  if (this.shrink && this.expand) {
    throw new Error("Table cannot have both shrink and expand enabled at the same time");
  }
  const size = this.shrink ? FTableColumnSize.SHRINK : FTableColumnSize.EXPAND;
  this.addColumn({ name: this.name, title: this.title, description: this.description || void 0, id: ElementIdService.generateElementId("column"), size, type: this.type, visible: this.visible, sortable: false, sort: FTableColumnSort.UNSORTED });
} });
function FSortFilterDatasetInjected() {
  return { sort: inject("sort", () => void 0), registerCallbackOnSort: inject("registerCallbackOnSort", () => void 0), registerCallbackOnMount: inject("registerCallbackOnMount", () => void 0) };
}
const _sfc_main$P = /* @__PURE__ */ defineComponent({ name: "FLabel", components: { FIcon }, props: {
  /**
  * The id for the form element the label is bound to.
  */
  for: { type: String, required: false, default: void 0 }
}, data() {
  return { descriptionClass: ["label__description"], discreteDescriptionClass: ["label__description", "label__description--discrete"] };
}, computed: { forProperty() {
  return this.for;
}, hasDefaultSlot() {
  return hasSlot(this, "default");
}, hasErrorMessageSlot() {
  return hasSlot(this, "error-message");
}, hasDescriptionSlot() {
  return hasSlot(this, "description");
} } });
const _hoisted_1$C = { key: 0 };
const _hoisted_2$s = { key: 0, class: "tooltip-before" };
const _hoisted_3$n = ["for"];
const _hoisted_4$j = ["for"];
const _hoisted_5$f = { key: 0, class: "label__message label__message--error" };
const _hoisted_6$c = ["for"];
const _hoisted_7$b = { key: 0, class: "label__message label__message--error" };
function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  return _ctx.$slots.tooltip ? (openBlock(), createElementBlock("div", _hoisted_1$C, [_ctx.hasDefaultSlot ? (openBlock(), createElementBlock("div", _hoisted_2$s, [createBaseVNode("label", { class: "label tooltip-before__label", for: _ctx.forProperty }, [renderSlot(_ctx.$slots, "default")], 8, _hoisted_3$n)])) : createCommentVNode("v-if", true), _cache[2] || (_cache[2] = createTextVNode()), renderSlot(_ctx.$slots, "tooltip"), _cache[3] || (_cache[3] = createTextVNode()), _ctx.hasDescriptionSlot || _ctx.hasErrorMessageSlot ? (openBlock(), createElementBlock("label", { key: 1, class: "label sr-separator", for: _ctx.forProperty }, [renderSlot(_ctx.$slots, "description", normalizeProps(guardReactiveProps({ descriptionClass: _ctx.descriptionClass, discreteDescriptionClass: _ctx.discreteDescriptionClass }))), _cache[1] || (_cache[1] = createTextVNode()), _ctx.hasErrorMessageSlot ? (openBlock(), createElementBlock("span", _hoisted_5$f, [createVNode(_component_f_icon, { class: "label__icon--left", name: "error" }), _cache[0] || (_cache[0] = createTextVNode()), renderSlot(_ctx.$slots, "error-message")])) : createCommentVNode("v-if", true)], 8, _hoisted_4$j)) : createCommentVNode("v-if", true)])) : (openBlock(), createElementBlock("label", { key: 1, class: "label", for: _ctx.forProperty }, [renderSlot(_ctx.$slots, "default"), _cache[5] || (_cache[5] = createTextVNode()), renderSlot(_ctx.$slots, "description", normalizeProps(guardReactiveProps({ descriptionClass: _ctx.descriptionClass, discreteDescriptionClass: _ctx.discreteDescriptionClass }))), _cache[6] || (_cache[6] = createTextVNode()), _ctx.hasErrorMessageSlot ? (openBlock(), createElementBlock("span", _hoisted_7$b, [createVNode(_component_f_icon, { class: "label__icon--left", name: "error" }), _cache[4] || (_cache[4] = createTextVNode()), renderSlot(_ctx.$slots, "error-message")])) : createCommentVNode("v-if", true)], 8, _hoisted_6$c));
}
const FLabel = /* @__PURE__ */ _export_sfc$1(_sfc_main$P, [["render", _sfc_render$E]]);
function resolveWidthClass$1(words, inline) {
  return inline ? void 0 : words.split(" ").map((word) => `i-width-${word}`).join(" ");
}
const _sfc_main$O = /* @__PURE__ */ defineComponent({ name: "FSelectField", components: { FIcon, FLabel }, inheritAttrs: false, props: {
  /**
  * The id for the select id attribute.
  * The id for the label for attribute.
  * If the prop is not set a random value will be generated.
  */
  id: { type: String, required: false, default: () => ElementIdService.generateElementId() },
  /**
  * Show the component inline.
  */
  inline: { type: Boolean, required: false, default: false },
  /**
  * The value for the input.
  * If the prop is not set undefined will be used.
  * @model
  */
  modelValue: { type: [String, Number, Object, Array, Boolean], required: false, default: void 0 },
  /**
  * Set responsive width for label section.
  *
  * ```
  * label-width="md-9 lg-6"
  * ```
  */
  labelWidth: { type: String, required: false, default: "sm-12" },
  /**
  * Set responsive width for select section that wraps select element and icons.
  *
  * ```
  * select-width="md-6 lg-3"
  * ```
  */
  selectWidth: { type: String, required: false, default: "sm-12" }
}, emits: ["change", "update:modelValue"], setup() {
  return { textFieldTableMode: inject("textFieldTableMode", false) };
}, data() {
  return { validityMode: "INITIAL", validationMessage: "" };
}, computed: { attrs() {
  return {
    ...this.$attrs,
    // Disable change
    onChange: () => void 0
  };
}, hasError() {
  return this.validityMode === "ERROR";
}, rootClass() {
  return { ["select-field--error"]: this.hasError, ["select-field--inline"]: this.inline, ["text-field--table"]: this.textFieldTableMode, ["select-field--table-error"]: this.textFieldTableMode && this.hasError };
}, labelClass() {
  return this.textFieldTableMode ? "sr-only" : "";
}, labelWrapperClass() {
  return resolveWidthClass$1(this.labelWidth, this.inline);
}, selectWrapperClass() {
  return resolveWidthClass$1(this.selectWidth, this.inline);
}, vModel: { get() {
  return this.modelValue;
}, set(value) {
  this.$emit("update:modelValue", value);
  this.$emit("change", value);
} } }, methods: { async onValidity({ detail }) {
  var _renderSlotText3;
  this.validationMessage = detail.validationMessage;
  this.validityMode = detail.validityMode;
  await this.$nextTick();
  const errorMessage = (_renderSlotText3 = renderSlotText(this.$slots.label)) !== null && _renderSlotText3 !== void 0 ? _renderSlotText3 : "";
  const element = this.$el.querySelector(`#${detail.elementId}`);
  if (element) {
    dispatchComponentValidityEvent(element, { ...detail, errorMessage, focusElementId: detail.elementId });
  }
} } });
const _hoisted_1$B = ["id"];
function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_label = resolveComponent("f-label");
  const _component_f_icon = resolveComponent("f-icon");
  return openBlock(), createElementBlock(
    "div",
    { class: normalizeClass(["select-field", _ctx.rootClass]), onValidity: _cache[1] || (_cache[1] = (...args) => _ctx.onValidity && _ctx.onValidity(...args)) },
    [createBaseVNode(
      "div",
      { class: normalizeClass(_ctx.labelWrapperClass) },
      [createVNode(_component_f_label, { for: _ctx.id, class: normalizeClass(_ctx.labelClass) }, createSlots({
        default: withCtx(() => [renderSlot(_ctx.$slots, "label")]),
        description: withCtx(({ descriptionClass, discreteDescriptionClass }) => [renderSlot(_ctx.$slots, "description", normalizeProps(guardReactiveProps({ descriptionClass, discreteDescriptionClass })))]),
        "error-message": withCtx(() => [renderSlot(_ctx.$slots, "error-message", normalizeProps(guardReactiveProps({ hasError: _ctx.hasError, validationMessage: _ctx.validationMessage })), () => [_ctx.hasError ? (openBlock(), createElementBlock(
          Fragment,
          { key: 0 },
          [createTextVNode(
            toDisplayString(_ctx.validationMessage),
            1
            /* TEXT */
          )],
          64
          /* STABLE_FRAGMENT */
        )) : createCommentVNode("v-if", true)])]),
        _: 2
        /* DYNAMIC */
      }, [_ctx.$slots.tooltip ? { name: "tooltip", fn: withCtx(() => [renderSlot(_ctx.$slots, "tooltip")]), key: "0" } : void 0]), 1032, ["for", "class"])],
      2
      /* CLASS */
    ), _cache[7] || (_cache[7] = createTextVNode()), createBaseVNode(
      "div",
      { class: normalizeClass(["select-field__icon-wrapper", _ctx.selectWrapperClass]) },
      [withDirectives(createBaseVNode("select", mergeProps({ id: _ctx.id, "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.vModel = $event), class: "select-field__select" }, _ctx.attrs), [renderSlot(_ctx.$slots, "default")], 16, _hoisted_1$B), [[vModelSelect, _ctx.vModel]]), _cache[5] || (_cache[5] = createTextVNode()), _ctx.hasError && _ctx.textFieldTableMode ? (openBlock(), createBlock(
        _component_f_icon,
        { key: 0, ref: "icon", class: "text-field__icon input-icon select-field__error-popup-icon", name: "error" },
        null,
        512
        /* NEED_PATCH */
      )) : createCommentVNode("v-if", true), _cache[6] || (_cache[6] = createTextVNode()), createVNode(_component_f_icon, { class: "select-field__icon", name: "arrow-down" })],
      2
      /* CLASS */
    )],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const FSelectField = /* @__PURE__ */ _export_sfc$1(_sfc_main$O, [["render", _sfc_render$D]]);
function computeArrowOffset(placement, inputIconRect, wrapperRect) {
  switch (placement) {
    case Placement.A: {
      const wrapperRightX = wrapperRect.x + wrapperRect.width;
      const iconCenterX = inputIconRect.x + inputIconRect.width / 2;
      const offset2 = wrapperRightX - iconCenterX;
      return { position: "top", offset: offset2 };
    }
    case Placement.B: {
      const offset2 = wrapperRect.x + wrapperRect.width - (inputIconRect.x + inputIconRect.width / 2);
      return { position: "top", offset: offset2 };
    }
    case Placement.C: {
      const wrapperRightX = wrapperRect.x + wrapperRect.width;
      const iconCenterX = inputIconRect.x + inputIconRect.width / 2;
      const offset2 = wrapperRightX - iconCenterX;
      return { position: "bottom", offset: offset2 };
    }
    case Placement.D: {
      const offset2 = wrapperRect.x + wrapperRect.width - (inputIconRect.x + inputIconRect.width / 2);
      return { position: "bottom", offset: offset2 };
    }
    case Placement.E: {
      const offset2 = wrapperRect.y + wrapperRect.height - (inputIconRect.y + inputIconRect.height / 2);
      return { position: "left", offset: offset2 };
    }
    case Placement.F: {
      const offset2 = wrapperRect.y + wrapperRect.height - (inputIconRect.y + inputIconRect.height / 2);
      return { position: "right", offset: offset2 };
    }
    case Placement.G:
    case Placement.H:
    case Placement.I:
    case Placement.Fallback:
    case Placement.NotCalculated: {
      const offset2 = wrapperRect.x + wrapperRect.width - (inputIconRect.x + inputIconRect.width / 2);
      return { position: "top", offset: offset2 };
    }
  }
}
const POPUP_SPACING = 10;
const _sfc_main$N = /* @__PURE__ */ defineComponent({ name: "IPopupError", components: { FIcon }, inheritAttrs: false, props: {
  /**
  * Toggle open/closed error popup.
  */
  isOpen: { type: Boolean, required: true },
  /**
  * Message to display
  */
  errorMessage: { type: String, required: false, default: "Error" },
  /**
  * DOM element to position error popup at.
  */
  anchor: { type: HTMLElement, required: false, default: void 0 }
}, emits: ["close"], data() {
  return { teleportDisabled: false, placement: Placement.NotCalculated, arrowPosition: "top", arrowOffset: 24 };
}, computed: { popupClasses() {
  const forceInline = this.teleportDisabled || this.placement === Placement.Fallback;
  const popupState = forceInline ? ["popup-error--inline"] : ["popup-error--overlay"];
  return ["popup-error", ...popupState];
}, arrowClass() {
  return `popup-error popup-error--arrow popup-error--${this.arrowPosition}`;
}, errorStyle() {
  return `--i-popup-error-offset: ${this.arrowOffset}px`;
} }, watch: { anchor: { immediate: true, handler(anchor) {
  if (anchor) {
    anchor.addEventListener("keyup", this.onKeyEsc);
    window.addEventListener("resize", this.onResize);
  }
} }, isOpen: { immediate: true, async handler(value) {
  await this.toggleIsOpen(value);
} } }, unmounted() {
  var _a;
  (_a = this.anchor) == null ? void 0 : _a.removeEventListener("keyup", this.onKeyEsc);
  window.removeEventListener("resize", this.onResize);
}, methods: { onResize() {
  this.toggleIsOpen(this.isOpen);
}, onKeyEsc(event) {
  if (event.key === "Escape") {
    this.$emit("close");
  }
}, onClose() {
  this.$emit("close");
}, setArrowOffset() {
  var _a;
  const wrapper2 = this.$refs["wrapper"];
  const inputIcon = (_a = this.anchor) == null ? void 0 : _a.nextElementSibling;
  if (!inputIcon || !wrapper2) {
    return;
  }
  const inputIconRect = inputIcon.getBoundingClientRect();
  const wrapperRect = wrapper2.getBoundingClientRect();
  const arrow = computeArrowOffset(this.placement, inputIconRect, wrapperRect);
  this.arrowOffset = arrow.offset;
  this.arrowPosition = arrow.position;
}, async toggleIsOpen(isOpen) {
  if (!isOpen) {
    this.placement = Placement.NotCalculated;
    return;
  }
  await this.$nextTick();
  const wrapper2 = this.$refs["wrapper"];
  if (!this.anchor) {
    throw new Error("No anchor element found");
  }
  const area = document.body;
  const viewport = document.documentElement;
  const result = fitInsideArea({ area, anchor: this.anchor, target: wrapper2, viewport, spacing: POPUP_SPACING, candidateOrder: CandidateOrder.IPopupError });
  this.placement = result.placement;
  if (result.placement !== Placement.Fallback) {
    this.teleportDisabled = false;
    wrapper2.style.left = `${result.x}px`;
    wrapper2.style.top = `${result.y}px`;
    await this.setArrowOffset();
    return;
  }
  await this.setArrowOffset();
  this.teleportDisabled = true;
  wrapper2.style.removeProperty("left");
  wrapper2.style.removeProperty("top");
} } });
const _hoisted_1$A = { ref: "wrapper", class: "popup-error__wrapper" };
function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  return _ctx.isOpen ? (openBlock(), createBlock(Teleport, { key: 0, to: "body", disabled: _ctx.teleportDisabled }, [createBaseVNode(
    "div",
    { ref: "popup", class: normalizeClass(_ctx.popupClasses), "aria-hidden": "true" },
    [createBaseVNode(
      "div",
      _hoisted_1$A,
      [createBaseVNode(
        "div",
        { class: normalizeClass(_ctx.arrowClass), style: normalizeStyle(_ctx.errorStyle) },
        [createBaseVNode(
          "span",
          null,
          toDisplayString(_ctx.errorMessage),
          1
          /* TEXT */
        ), _cache[1] || (_cache[1] = createTextVNode()), createBaseVNode("button", { tabindex: "-1", type: "button", class: "button button--discrete button--discrete--black modal__close-button popup-error__button", "aria-label": "Stäng", onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClose && _ctx.onClose(...args)) }, [createVNode(_component_f_icon, { name: "close", class: "button__icon" })])],
        6
        /* CLASS, STYLE */
      )],
      512
      /* NEED_PATCH */
    )],
    2
    /* CLASS */
  )], 8, ["disabled"])) : createCommentVNode("v-if", true);
}
const IPopupError = /* @__PURE__ */ _export_sfc$1(_sfc_main$N, [["render", _sfc_render$C]]);
function resolveWidthClass(words, inline) {
  return inline ? void 0 : words.split(" ").map((word) => `i-width-${word}`).join(" ");
}
const _sfc_main$M = /* @__PURE__ */ defineComponent({ name: "FTextField", components: { FLabel, FIcon, IPopupError }, inheritAttrs: false, props: {
  /**
  * The id for the input id attribute.
  * The id for the label for attribute.
  * If the prop is not set a random value will be generated.
  */
  id: { type: String, required: false, default: () => ElementIdService.generateElementId() },
  /**
  * Show the component inline.
  */
  inline: { type: Boolean, required: false, default: false },
  /**
  * The value for the input.
  * If the prop is not set undefined will be used.
  * @model
  */
  modelValue: { type: [String, Number], required: false, default: "" },
  /**
  * The type used for the input.
  * If the prop is not set text will be used.
  */
  type: { type: String, required: false, default: "text" },
  /**
  * - The `formatter` function must only be used on a component that uses validation.
  * - The `formatter` function acts differently depending on if the `parser` function is defined or not.
  *
  * | formatter without parser | formatter with parser |
  * | ----- | -----|
  * | modelvalue = parsed viewvalue using formatter function | modelvalue = parsed viewvalue using parser function |
  * | viewvalue = modelvalue (where modelvalue is already parsed) | viewvalue = formatted modelvalue using formatter function (where modelvalue is already parsed) |
  */
  formatter: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- We cannot know which type is used.
    type: Function,
    required: false,
    default: void 0
  },
  /**
  * - The `parser` function must only be used on a component that uses validation.
  * - The `parser` function acts differently depending on if the `formatter` function is defined or not.
  *   - For parser combined with formatter, refer to formatter prop doc.
  *
  * | parser without formatter |
  * | ----- |
  * | modelvalue = parsed viewvalue using parser function |
  * | viewvalue = never updated except when modelvalue differs from parsed viewvalue |
  */
  parser: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- We cannot know which type is used.
    type: Function,
    required: false,
    default: void 0
  },
  /**
  * Set responsive width for label section.
  *
  * ```
  * label-width="md-9 lg-6"
  * ```
  */
  labelWidth: { type: String, required: false, default: "sm-12" },
  /**
  * Set responsive width for input section that wraps input element and icons.
  *
  * ```
  * input-width="md-6 lg-3"
  * ```
  */
  inputWidth: { type: String, required: false, default: "sm-12" }
}, emits: ["blur", "change", "update", "update:modelValue"], setup() {
  return { textFieldTableMode: inject("textFieldTableMode", false) };
}, data() {
  return {
    showErrorPopup: false,
    viewValue: "",
    lastModelValue: "",
    validationMessage: "",
    validityMode: "INITIAL",
    // internal default texts possible to override when extending component
    defaultText: "",
    descriptionText: "",
    descriptionScreenReaderText: "",
    discreteDescriptionText: "",
    discreteDescriptionScreenReaderText: ""
  };
}, computed: { showPopupError() {
  return this.textFieldTableMode && this.hasError && this.showErrorPopup;
}, labelClass() {
  return this.textFieldTableMode ? "sr-only" : "";
}, isValid() {
  return this.validityMode === "VALID";
}, hasError() {
  return this.validityMode === "ERROR";
}, rootClass() {
  return { "text-field--error": this.hasError, "text-field--inline": this.inline, "text-field--table": this.textFieldTableMode };
}, labelWrapperClass() {
  return resolveWidthClass(this.labelWidth, this.inline);
}, inputWrapperClass() {
  return resolveWidthClass(this.inputWidth, this.inline);
}, isModelUpdatedProgrammatically() {
  return this.lastModelValue !== this.modelValue;
} }, watch: { modelValue: { immediate: true, handler: function() {
  if (this.modelValue === void 0 || this.modelValue === null) {
    this.viewValue = "";
    return;
  }
  if (!this.isModelUpdatedProgrammatically) {
    return;
  }
  this.setViewValueToFormattedValueOrFallbackToValue();
  this.lastModelValue = this.modelValue;
} } }, methods: { getErrorPopupAnchor() {
  return this.$refs.input;
}, closePopupError() {
  this.showErrorPopup = false;
}, async onChange() {
  if (!this.$refs.input.hasAttribute("data-validation")) {
    this.$emit("update:modelValue", this.viewValue);
    this.$emit("update", this.viewValue);
    await this.$nextTick();
    this.$emit("change", this.viewValue);
  }
}, onFocus() {
  this.showErrorPopup = true;
}, async onBlur() {
  this.showErrorPopup = false;
  if (!this.$refs.input) {
    return;
  }
  if (!this.$refs.input.hasAttribute("data-validation")) {
    this.$emit("update:modelValue", this.viewValue);
    this.$emit("update", this.viewValue);
    await this.$nextTick();
    this.$emit("blur", this.viewValue);
  }
}, async onValidity({ detail }) {
  this.validationMessage = detail.validationMessage;
  this.validityMode = detail.validityMode;
  if (detail.nativeEvent === "change" || detail.nativeEvent === "blur") {
    let newModelValue;
    if (detail.isValid) {
      newModelValue = this.resolveNewModelValue(this.viewValue);
    } else {
      newModelValue = this.viewValue;
    }
    this.lastModelValue = newModelValue;
    this.$emit("update:modelValue", newModelValue);
    this.$emit("update", newModelValue);
    await this.$nextTick();
    this.$emit(detail.nativeEvent, newModelValue);
    if (detail.isValid) {
      this.syncViewValueAfterModelUpdate(newModelValue);
    }
  }
  this.triggerComponentValidityEvent(detail);
}, onPendingValidity() {
  this.validityMode = "INITIAL";
}, resolveNewModelValue(viewValue) {
  const trimmedViewValue = viewValue.trim();
  if (trimmedViewValue === "") {
    return "";
  } else if (isSet(this.parser)) {
    var _this$parser;
    return (_this$parser = this.parser(trimmedViewValue)) !== null && _this$parser !== void 0 ? _this$parser : trimmedViewValue;
  } else if (isSet(this.formatter)) {
    var _this$formatter;
    return (_this$formatter = this.formatter(trimmedViewValue)) !== null && _this$formatter !== void 0 ? _this$formatter : trimmedViewValue;
  } else {
    return trimmedViewValue;
  }
}, syncViewValueAfterModelUpdate(newModelValue) {
  if (newModelValue === "") {
    this.viewValue = "";
  } else if (isSet(this.parser)) {
    if (isSet(this.formatter)) {
      this.viewValue = String(this.formatter(newModelValue) || this.viewValue);
    }
  } else {
    this.viewValue = String(newModelValue);
  }
}, triggerComponentValidityEvent(validityEvent) {
  var _renderSlotText4;
  const errorMessage = (_renderSlotText4 = renderSlotText(this.$slots.default, {}, { stripClasses: [] })) !== null && _renderSlotText4 !== void 0 ? _renderSlotText4 : this.defaultText;
  const element = this.$el.querySelector(`#${validityEvent.elementId}`);
  if (element) {
    dispatchComponentValidityEvent(element, { ...validityEvent, errorMessage, focusElementId: validityEvent.elementId });
  }
}, setViewValueToFormattedValueOrFallbackToValue() {
  if (!isSet(this.formatter)) {
    this.viewValue = String(this.modelValue);
    return;
  }
  const parsedValue = isSet(this.parser) && typeof this.modelValue === "string" ? this.parser(this.modelValue) : this.modelValue;
  const formattedValue = isSet(parsedValue) ? this.formatter(parsedValue) : void 0;
  this.viewValue = isSet(formattedValue) ? formattedValue : String(this.modelValue);
} } });
const _hoisted_1$z = { key: 0 };
const _hoisted_2$r = { key: 0, class: "sr-only" };
const _hoisted_3$m = { key: 0, class: "sr-only" };
const _hoisted_4$i = { class: "text-field__icon-wrapper" };
const _hoisted_5$e = ["id", "type"];
const _hoisted_6$b = { key: 2, class: "text-field__append-inner" };
function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_label = resolveComponent("f-label");
  const _component_f_icon = resolveComponent("f-icon");
  const _component_i_popup_error = resolveComponent("i-popup-error");
  return openBlock(), createElementBlock(
    "div",
    { class: normalizeClass(["text-field", _ctx.rootClass]) },
    [createBaseVNode(
      "div",
      { class: normalizeClass(_ctx.labelWrapperClass) },
      [createVNode(_component_f_label, { for: _ctx.id, class: normalizeClass(_ctx.labelClass) }, createSlots({
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [_ctx.defaultText !== "" ? (openBlock(), createElementBlock(
          "span",
          _hoisted_1$z,
          toDisplayString(_ctx.defaultText),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true)])]),
        description: withCtx(({ descriptionClass, discreteDescriptionClass }) => [renderSlot(_ctx.$slots, "description", normalizeProps(guardReactiveProps({ descriptionClass, discreteDescriptionClass })), () => [_ctx.descriptionText ? (openBlock(), createElementBlock(
          "span",
          { key: 0, class: normalizeClass(descriptionClass) },
          [_ctx.descriptionScreenReaderText ? (openBlock(), createElementBlock(
            "span",
            _hoisted_2$r,
            toDisplayString(_ctx.descriptionScreenReaderText),
            1
            /* TEXT */
          )) : createCommentVNode("v-if", true), _cache[6] || (_cache[6] = createTextVNode()), createBaseVNode(
            "span",
            null,
            toDisplayString(_ctx.descriptionText),
            1
            /* TEXT */
          )],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true), _cache[8] || (_cache[8] = createTextVNode()), _ctx.discreteDescriptionText ? (openBlock(), createElementBlock(
          "span",
          { key: 1, class: normalizeClass(discreteDescriptionClass) },
          [_ctx.discreteDescriptionScreenReaderText ? (openBlock(), createElementBlock(
            "span",
            _hoisted_3$m,
            toDisplayString(_ctx.discreteDescriptionScreenReaderText),
            1
            /* TEXT */
          )) : createCommentVNode("v-if", true), _cache[7] || (_cache[7] = createTextVNode()), createBaseVNode(
            "span",
            null,
            toDisplayString(_ctx.discreteDescriptionText),
            1
            /* TEXT */
          )],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true)])]),
        "error-message": withCtx(() => [renderSlot(_ctx.$slots, "error-message", normalizeProps(guardReactiveProps({ hasError: _ctx.hasError, validationMessage: _ctx.validationMessage })), () => [_ctx.hasError ? (openBlock(), createElementBlock(
          Fragment,
          { key: 0 },
          [createTextVNode(
            toDisplayString(_ctx.validationMessage),
            1
            /* TEXT */
          )],
          64
          /* STABLE_FRAGMENT */
        )) : createCommentVNode("v-if", true)])]),
        _: 2
        /* DYNAMIC */
      }, [_ctx.$slots.tooltip ? { name: "tooltip", fn: withCtx(() => [renderSlot(_ctx.$slots, "tooltip")]), key: "0" } : void 0]), 1032, ["for", "class"])],
      2
      /* CLASS */
    ), _cache[17] || (_cache[17] = createTextVNode()), createBaseVNode(
      "div",
      { class: normalizeClass(["text-field__input-wrapper", _ctx.inputWrapperClass]) },
      [renderSlot(_ctx.$slots, "input-left"), _cache[15] || (_cache[15] = createTextVNode()), createBaseVNode("div", _hoisted_4$i, [withDirectives(createBaseVNode("input", mergeProps({ id: _ctx.id, ref: "input", "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.viewValue = $event), type: _ctx.type, class: "text-field__input" }, _ctx.$attrs, { onBlur: _cache[1] || (_cache[1] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)), onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.onFocus && _ctx.onFocus(...args)), onChange: _cache[3] || (_cache[3] = (...args) => _ctx.onChange && _ctx.onChange(...args)), onValidity: _cache[4] || (_cache[4] = (...args) => _ctx.onValidity && _ctx.onValidity(...args)), onPendingValidity: _cache[5] || (_cache[5] = (...args) => _ctx.onPendingValidity && _ctx.onPendingValidity(...args)) }), null, 16, _hoisted_5$e), [[vModelDynamic, _ctx.viewValue]]), _cache[12] || (_cache[12] = createTextVNode()), _ctx.hasError && _ctx.textFieldTableMode ? (openBlock(), createBlock(
        _component_f_icon,
        { key: 0, ref: "icon", class: "text-field__icon input-icon text-field__append-inner text-field__error-popup-icon", name: "error" },
        null,
        512
        /* NEED_PATCH */
      )) : createCommentVNode("v-if", true), _cache[13] || (_cache[13] = createTextVNode()), _ctx.textFieldTableMode ? (openBlock(), createBlock(_component_i_popup_error, { key: 1, anchor: _ctx.getErrorPopupAnchor(), "is-open": _ctx.showPopupError, "error-message": _ctx.validationMessage, onClose: _ctx.closePopupError }, null, 8, ["anchor", "is-open", "error-message", "onClose"])) : createCommentVNode("v-if", true), _cache[14] || (_cache[14] = createTextVNode()), _ctx.$slots["append-inner"] ? (openBlock(), createElementBlock("div", _hoisted_6$b, [renderSlot(_ctx.$slots, "append-inner")])) : createCommentVNode("v-if", true)]), _cache[16] || (_cache[16] = createTextVNode()), renderSlot(_ctx.$slots, "input-right")],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
const FTextField = /* @__PURE__ */ _export_sfc$1(_sfc_main$M, [["render", _sfc_render$B]]);
/* @__PURE__ */ defineComponent({ name: "FEmailTextField", components: { FTextField }, mixins: [TranslationMixin], inheritAttrs: false, props: {
  /**
  * The id for the input id attribute.
  * The id for the label for attribute.
  * If the prop is not set a random value will be generated.
  */
  id: { type: String, required: false, default: () => ElementIdService.generateElementId() },
  /**
  * The value for the input.
  * If the prop is not set undefined will be used.
  * @model
  */
  modelValue: { type: String, required: false, default: void 0 },
  maxLength: { type: Number, default: 80 },
  extendedValidation: { type: Boolean, default: false },
  /**
  * The error message to be displayed on paste
  * If the prop is not set the default text "Du kan inte kopiera mejladressen. Du måste skriva in den igen." will be set
  */
  pasteErrorText: { type: String, required: false, default: TranslationService.provider.translate("fkui.email-text-field.error.pasting", "Du kan inte kopiera mejladressen. Du måste skriva in den igen.") }
}, emits: ["blur", "change", "update", "update:modelValue"], data() {
  return { validityMode: "INITIAL", secondEmail: "", showPasteErrorMessage: false, defaultText: this.$t("fkui.email-text-field.label", "Mejladress") };
}, mounted() {
  this.configureValidators();
}, methods: { onChange(event) {
  this.$emit("change", event);
}, onBlur(event) {
  this.$emit("blur", event);
}, onUpdate(event) {
  this.$emit("update:modelValue", event);
  this.$emit("update", event);
}, onPaste(event) {
  this.showPasteErrorMessage = true;
  event.preventDefault();
  return false;
}, onValidity({ detail }) {
  var _renderSlotText5;
  this.showPasteErrorMessage = false;
  this.validityMode = detail.validityMode;
  const errorMessage = (_renderSlotText5 = renderSlotText(this.$slots.default)) !== null && _renderSlotText5 !== void 0 ? _renderSlotText5 : this.defaultText;
  const element = this.$el.querySelector(`#${detail.elementId}`);
  if (element) {
    dispatchComponentValidityEvent(element, { ...detail, errorMessage, focusElementId: detail.elementId });
  }
}, onPendingValidity() {
  this.validityMode = "INITIAL";
}, configureValidators() {
  const elements = Array.from(this.$el.querySelectorAll("input"));
  const validatorEmailConfig = { email: {} };
  ValidationService.addValidatorsToElement(elements[0], validatorEmailConfig, true);
  if (this.extendedValidation) {
    this.configureExtendedValidation(elements);
  }
}, configureExtendedValidation(elements) {
  const validatorEmailMatchesConfig = { required: { enabled: elements[0].hasAttribute("required") }, email: {}, matches: { id: elements[0].id } };
  ValidationService.addValidatorsToElement(elements[1], validatorEmailMatchesConfig, true);
} } });
/* @__PURE__ */ defineComponent({ name: "FSearchTextField", components: { FTextField, FIcon }, props: { id: { type: String, required: false, default: () => ElementIdService.generateElementId() }, modelValue: { type: String, required: false, default: "" }, clearableScreenReaderText: { type: String, required: false, default: TranslationService.provider.translate("fkui.search-text-field.search-screen-reader", "Töm inmatningsfält") }, maxLength: { type: Number, default: 80 } }, emits: ["blur", "change", "update", "update:modelValue"], data() {
  return { defaultText: this.$t("fkui.search-text-field.label", "Sök") };
}, computed: { canClear() {
  return this.modelValue !== "";
} }, methods: { clear() {
  alertScreenReader(this.$t("fkui.search-text-field.aria-live.clear", "Inmatningsfältet har tömts"), { assertive: true });
  this.$emit("update:modelValue", "");
  this.$el.querySelector("input").focus();
}, onInput(event) {
  this.$emit("update:modelValue", event.target.value);
}, onChange(event) {
  this.$emit("change", event);
}, onBlur(event) {
  this.$emit("blur", event);
}, onUpdate(event) {
  this.$emit("update:modelValue", event);
} } });
function sort(list, sortAttribute, ascending) {
  return list.sort((item1, item2) => compare(item1, item2, sortAttribute, ascending));
}
function compare(item1, item2, attribute, ascending) {
  const value1 = item1[attribute];
  const value2 = item2[attribute];
  if (!isSet(value1) || !isSet(value2)) {
    return nullCompare(value1, value2);
  }
  if (!isSupportedType(value1) || !isSupportedType(value2)) {
    throw Error(`Sorting is only supported for types number, string and boolean.
            Attribute '${attribute.toString()}' comparsion of types '${typeof value1}' and '${typeof value2}' is not supported.`);
  }
  if (typeof value1 === "string" && typeof value2 === "string") {
    return fixOrder(value1.localeCompare(value2), ascending);
  }
  if (typeof value1 === "number" && typeof value2 === "number") {
    return fixOrder(numberCompare(value1, value2), ascending);
  }
  if (typeof value1 === "boolean" && typeof value2 === "boolean") {
    return fixOrder(booleanCompare(value1, value2), ascending);
  }
  if (typeof value1 === "string") {
    return -1;
  } else {
    return 1;
  }
}
function isSupportedType(value) {
  return ["string", "number", "boolean"].includes(typeof value);
}
function fixOrder(order, ascending) {
  return ascending ? order : order - order * 2;
}
function booleanCompare(value1, value2) {
  if (value1 === value2) {
    return 0;
  } else if (value1 > value2) {
    return 1;
  }
  return -1;
}
function numberCompare(value1, value2) {
  return value1 - value2;
}
function nullCompare(value1, value2) {
  if (!isSet(value1) && !isSet(value2)) {
    return 0;
  } else if (!isSet(value1)) {
    return 1;
  }
  return -1;
}
function includesAllSearchTerms(item, filterAttributes, searchTerms) {
  const values = filterAttributes.map((it) => {
    const value = item[it];
    return isSet(value) ? value.toString().toLocaleLowerCase() : void 0;
  }).filter(Boolean);
  for (const searchTerm of searchTerms) {
    const match2 = values.find((it) => it == null ? void 0 : it.includes(searchTerm));
    if (!match2) {
      return false;
    }
  }
  return true;
}
function filter(list, filterAttributes, searchString) {
  searchString = searchString.trim();
  if (searchString.trim() === "") {
    return list;
  }
  const searchTerms = searchString.split(/\s+/).map((word) => word.toLocaleLowerCase());
  return list.filter((item) => includesAllSearchTerms(item, filterAttributes, searchTerms));
}
/* @__PURE__ */ defineComponent({ name: "FSortFilterDataset", components: { FSelectField, FTextField, FIcon, IFlex, IFlexItem }, mixins: [TranslationMixin], provide() {
  return { sort: (attribute, ascending) => {
    const foundAttribute = this.sortOrders.find((item) => item.attribute === attribute && item.ascending === ascending);
    if (foundAttribute) {
      this.sortAttribute = foundAttribute;
    } else {
      this.sortAttribute = { attribute: "", ascending: false };
    }
    this.sortFilterData();
    this.$emit("usedSortAttributes", this.sortAttribute);
  }, registerCallbackOnSort: (callback) => {
    this.tableCallbackOnSort = callback;
  }, registerCallbackOnMount: (callback) => {
    this.tableCallbackSortableColumns = callback;
  } };
}, props: {
  /**
  * The data that you wish to sort or filter.
  */
  data: { type: Array, required: true, default: () => [] },
  /**
  * All the attributes you want to enable sorting for and the corresponding name to display in the dropdown.
  * Structured as `{attributeName: "Name for dropdown", secondAttributeName: "Name for dropdown"}`
  */
  sortableAttributes: { type: Object, required: true },
  /**
  * If set the data will be sorted by this attribute by default.
  */
  defaultSortAttribute: { type: String, required: false, default: () => "" },
  /**
  * Show/hides the sort dropdown.
  */
  showSort: { type: Boolean, required: false, default: true },
  /**
  * Show/hides the filter input.
  */
  showFilter: { type: Boolean, required: false, default: true },
  /**
  * Set placeholder text in filter input field.
  * Default is textkey "fkui.sort-filter-dataset.placeholder.filter"
  */
  placeholderFilter: { type: String, required: false, default: TranslationMixin.methods.$t("fkui.sort-filter-dataset.placeholder.filter", "Sök") },
  /**
  * The order the data will be sorted by if defaultSortAttribute has been set.
  */
  defaultSortAscending: { type: Boolean, required: false, default: () => true }
}, emits: ["datasetSorted", "usedSortAttributes"], data() {
  return { searchString: "", sortAttribute: { attribute: "", ascending: false }, sortFilterResult: [], tableCallbackOnSort: () => {
    return;
  }, tableCallbackSortableColumns: () => {
    return;
  } };
}, computed: { showClearButton() {
  return this.searchString.length > 0;
}, sortOrders() {
  const arr = [];
  let id2 = 0;
  Object.keys(this.sortableAttributes).forEach((key) => {
    arr.push({ attribute: key, name: this.sortableAttributes[key], ascendingName: this.$t("fkui.sort-filter-dataset.label.ascending", "stigande"), ascending: true, id: id2++ });
    arr.push({ attribute: key, name: this.sortableAttributes[key], ascendingName: this.$t("fkui.sort-filter-dataset.label.descending", "fallande"), ascending: false, id: id2++ });
  });
  return arr;
}, filterAttributes() {
  return Object.keys(this.sortableAttributes);
} }, watch: { data: { immediate: true, deep: true, handler: function() {
  if (this.defaultSortAttribute !== "") {
    const foundAttribute = this.sortOrders.find((item) => item.attribute === this.defaultSortAttribute && item.ascending === this.defaultSortAscending);
    if (foundAttribute) {
      this.sortAttribute = foundAttribute;
    }
  }
  this.sortFilterData();
} } }, created() {
  this.debouncedFilterResultset = debounce(this.filterResultset, 250).bind(this);
}, mounted() {
  this.tableCallbackSortableColumns(Object.keys(this.sortableAttributes));
}, methods: { sortFilterData() {
  const filteredData = filter(this.data, this.filterAttributes, this.searchString);
  if (this.sortAttribute.attribute === "") {
    this.sortFilterResult = filteredData;
  } else {
    this.sortFilterResult = sort([...filteredData], this.sortAttribute.attribute, this.sortAttribute.ascending);
  }
  this.$nextTick(() => {
    this.tableCallbackOnSort(this.sortAttribute.attribute, this.sortAttribute.ascending);
  });
  this.$emit("datasetSorted", this.sortFilterResult);
}, onChangeSortAttribute() {
  this.sortFilterData();
  this.$emit("usedSortAttributes", this.sortAttribute);
}, onSearchInput(event) {
  this.searchString = event.target.value;
  this.debouncedFilterResultset();
}, onClickClearSearch() {
  this.searchString = "";
  this.sortFilterData();
  const input = this.$el.querySelector(".text-field--inline input");
  focus(input);
}, debouncedFilterResultset() {
}, filterResultset() {
  this.sortFilterData();
  if (this.searchString === "") {
    alertScreenReader(this.$t("fkui.sort-filter-dataset.aria-live.empty", "Sök redigera Sök tom"));
  } else {
    const searchAriaLive = this.$t("fkui.sort-filter-dataset.aria-live.search", `Din sökning på "{{ search }}" gav {{ result }} träffar.`, { result: this.sortFilterResult.length, search: this.searchString });
    alertScreenReader(searchAriaLive);
  }
} } });
/* @__PURE__ */ defineComponent({ name: "FDataTable", components: { FIcon }, mixins: [TranslationMixin], provide() {
  return { addColumn: (column) => {
    if (column.type === FTableColumnType.ACTION) {
      throw new Error("Cannot use action column in FDataTable component");
    }
    this.columns = addColumn(this.columns, column);
  }, setVisibilityColumn: (id2, visible) => {
    setVisibilityColumn(this.columns, id2, visible);
  }, textFieldTableMode: true };
}, inheritAttrs: false, props: {
  /**
  * The rows to be listed.
  * The rows will be listed in the given array order.
  */
  rows: { type: Array, required: true },
  /**
  * Unique attribute in rows.
  */
  keyAttribute: { type: String, required: true },
  /**
  * If `true` alternating rows will use a different background color.
  */
  striped: { type: Boolean, default: false },
  /**
  * Enable scrolling inside table.
  *
  * Can be one of the following values:
  *
  * - `"horizontal"`: Enables horizontal scrolling
  * - `"vertical"`: Enables vertical scrolling
  * - `"both"`: Enables scrolling in both directions
  * - `"none"`: Disables scrolling (default)
  */
  scroll: { type: String, default: TableScroll.NONE, validator(value) {
    const types = Object.values(TableScroll);
    return types.includes(value);
  } }
}, setup(props) {
  provide("renderColumns", computed(() => props.rows.length > 0));
  return FSortFilterDatasetInjected();
}, data() {
  return { columns: [] };
}, computed: { hasCaption() {
  return hasSlot(this, "caption", {}, { stripClasses: [] });
}, tableClasses() {
  const classes = [];
  if (this.striped) {
    classes.push("table--striped");
  }
  return classes;
}, isEmpty() {
  return this.rows.length === 0;
}, visibleColumns() {
  return this.columns.filter((col) => col.visible);
}, wrapperClasses() {
  return tableScrollClasses(this.scroll);
}, tabindex() {
  return this.scroll !== TableScroll.NONE ? 0 : void 0;
} }, mounted() {
  this.registerCallbackOnSort(this.callbackOnSort);
  this.registerCallbackOnMount(this.callbackSortableColumns);
}, methods: { rowKey(item) {
  const key = item[this.keyAttribute];
  if (typeof key === "undefined") {
    throw new Error(`Key attribute [${this.keyAttribute}]' is missing in row`);
  }
  return String(key);
}, columnClasses(column) {
  const classes = ["table__column", `table__column--${column.type}`, column.size];
  if (column.sortable) {
    classes.push("table__column--sortable");
  }
  return classes;
}, iconClasses(column) {
  return getSortableIconClasses(column);
}, iconName(column) {
  return getSortableIconName(column);
}, onClickColumnHeader(column) {
  if (!column.sortable) {
    return;
  }
  let columnName = column.name;
  if (column.sort === FTableColumnSort.DESCENDING) {
    columnName = "";
    column.sort = FTableColumnSort.UNSORTED;
  }
  this.sort(columnName, column.sort !== FTableColumnSort.ASCENDING);
}, callbackOnSort(columnName, ascending) {
  updateSortOrder(this.columns, columnName, ascending);
}, callbackSortableColumns(columnNames) {
  setSortableColumns(this.columns, columnNames);
}, escapeNewlines(value) {
  return value.replace(/\n/g, "<br/>");
} } });
const _sfc_main$v = /* @__PURE__ */ defineComponent({ name: "FExpand", data() {
  return { height: 0, initialStyle: { overflow: "hidden", transition: "height 400ms cubic-bezier(0.46, 0.03, 0.52, 0.96)" }, hiddenStyle: { height: "auto", position: "absolute", visibility: "hidden" }, visibleStyle: { width: "", position: "", visibility: "", height: "0px" }, openedStyle: { height: "auto" } };
}, methods: { enter(element) {
  const htmlElement = getHTMLElementFromVueRef(element);
  Object.assign(htmlElement.style, this.initialStyle);
  Object.assign(htmlElement.style, this.hiddenStyle);
  htmlElement.style.width = getComputedStyle(element).width;
  const height = getComputedStyle(element).height;
  Object.assign(htmlElement.style, this.visibleStyle);
  getComputedStyle(element).height;
  setTimeout(() => {
    this.height = parseInt(height, 10);
    htmlElement.style.height = height;
  });
}, afterEnter(element) {
  const htmlElement = getHTMLElementFromVueRef(element);
  Object.assign(htmlElement.style, this.openedStyle);
}, leave(element) {
  const htmlElement = getHTMLElementFromVueRef(element);
  const height = getComputedStyle(element).height;
  htmlElement.style.height = height;
  getComputedStyle(element).height;
  setTimeout(() => {
    Object.assign(htmlElement.style, this.visibleStyle);
  });
} } });
function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, { onEnter: _ctx.enter, onAfterEnter: _ctx.afterEnter, onLeave: _ctx.leave }, {
    default: withCtx(() => [renderSlot(_ctx.$slots, "default", { height: _ctx.height })]),
    _: 3
    /* FORWARDED */
  }, 8, ["onEnter", "onAfterEnter", "onLeave"]);
}
const FExpand = /* @__PURE__ */ _export_sfc$1(_sfc_main$v, [["render", _sfc_render$u]]);
class FRightPanelServiceImpl {
  constructor() {
    __publicField2(this, "focusedElementBeforeOpenining", null);
  }
  open() {
    this.focusedElementBeforeOpenining = window.document.activeElement;
    this.emit("open");
  }
  openDialog(title) {
    this.focusedElementBeforeOpenining = window.document.activeElement;
    this.emit("open-dialog", title);
  }
  close() {
    this.emit("close");
    if (this.focusedElementBeforeOpenining) {
      this.focusedElementBeforeOpenining.focus();
    }
  }
  on(event, callback) {
    EventBus.$on(`application-layout:${event}`, callback);
  }
  off(event, callback) {
    EventBus.$off(`application-layout:${event}`, callback);
  }
  emit(event, arg) {
    EventBus.$emit(`application-layout:${event}`, arg);
  }
}
new FRightPanelServiceImpl();
const keybindings = Object.fromEntries([["Up", focusTrAbove], ["Down", focusTrBelow], ["ArrowUp", focusTrAbove], ["ArrowDown", focusTrBelow], [" ", activateRow], ["Spacebar", activateRow]]);
function focusTrAbove(current) {
  if (current > 0) {
    this.tr[current - 1].focus();
  } else {
    this.tr[this.tr.length - 1].focus();
  }
}
function focusTrBelow(current) {
  if (current < this.tr.length - 1) {
    this.tr[current + 1].focus();
  } else {
    this.tr[0].focus();
  }
}
function activateRow(current) {
  const row = this.rows[current];
  const element = this.tr[current];
  this.activate(row, element);
}
function onKeydown(event, current) {
  const fn2 = keybindings[event.key];
  if (fn2) {
    event.preventDefault();
    fn2.call(this, current);
  }
}
function useExpandableTable(expandableAttribute, keyAttribute, describedby, emit2, slots) {
  const expandedRows = ref([]);
  const isExpandableTable = computed(() => {
    return expandableAttribute.length > 0;
  });
  const hasExpandableSlot = computed(() => {
    return Boolean(slots["expandable"]);
  });
  function toggleExpanded(row) {
    if (isExpanded(row)) {
      expandedRows.value = expandedRows.value.filter((it) => !itemEquals(it, row, keyAttribute));
      emit2("collapse", row);
    } else {
      expandedRows.value.push(row);
      emit2("expand", row);
    }
  }
  function isExpanded(row) {
    return includeItem(row, expandedRows.value, keyAttribute);
  }
  function rowAriaExpanded(row) {
    if (!isExpandableTable || !row[expandableAttribute]) {
      return void 0;
    }
    return isExpanded(row);
  }
  function expandableRowClasses(row, index) {
    const rows = expandableRows(row);
    if (!rows) {
      return [];
    }
    const border = index < rows.length - 1 ? ["table__row--expanded-border"] : [];
    const expanded = isExpanded(row) ? [] : ["table__expandable-row--collapsed"];
    return ["table__expandable-row", ...border, ...expanded];
  }
  function expandableColumnClasses(column, index) {
    const indented = index === 0 ? ["table__column--indented"] : [];
    return ["table__column", `table__column--${column.type}`, column.size, ...indented];
  }
  function getExpandableDescribedby(row) {
    if (!isExpandableTable) {
      return void 0;
    }
    if (!describedby || describedby.length < 1) {
      return void 0;
    }
    if (!hasExpandableContent(row)) {
      return void 0;
    }
    return describedby;
  }
  function expandableRows(row) {
    const expandableRows2 = row[expandableAttribute];
    if (typeof expandableRows2 === "undefined") {
      return void 0;
    }
    if (!Array.isArray(expandableRows2)) {
      throw new Error(`Expandable rows must be a ListArray`);
    }
    return expandableRows2;
  }
  function hasExpandableContent(row) {
    return Boolean(expandableRows(row));
  }
  return { expandedRows, isExpandableTable, hasExpandableSlot, toggleExpanded, isExpanded, rowAriaExpanded, expandableRowClasses, expandableColumnClasses, getExpandableDescribedby, expandableRows, hasExpandableContent };
}
function forceRepaintIE11(target) {
  if (navigator.userAgent.includes("Trident")) {
    target.style.display = "none";
    target.offsetHeight;
    target.style.removeProperty("display");
  }
}
/* @__PURE__ */ defineComponent({ name: "FInteractiveTable", components: { FCheckboxField, FIcon }, mixins: [TranslationMixin], provide() {
  return { addColumn: (column) => {
    this.columns = addColumn(this.columns, column);
  }, setVisibilityColumn: (id2, visible) => {
    setVisibilityColumn(this.columns, id2, visible);
  }, textFieldTableMode: true };
}, inheritAttrs: false, props: {
  /**
  * The rows to be listed.
  * The rows will be listed in the given array order.
  */
  rows: { type: Array, required: true },
  /**
  * If `true` hovering over a row will be highlighted
  */
  hover: { type: Boolean, default: false },
  /**
  * Unique attribute in rows.
  */
  keyAttribute: { type: String, required: true },
  /**
  * Attribute of expandable content in rows.
  * If provided, the table can contain expandable rows.
  */
  expandableAttribute: { type: String, default: "" },
  /**
  * Element id for aria-describedby on expandable rows to describe expanded content.
  */
  expandableDescribedby: { type: String, default: "" },
  /**
  * If `true` the table rows will be selectable.
  * @see 'select' and 'unselect' events.
  */
  selectable: { type: Boolean, default: false },
  /**
  * If `true` alternating rows will use a different background color.
  */
  striped: { type: Boolean, default: false },
  /**
  * Enable scrolling inside table.
  *
  * Can be one of the following values:
  *
  * - `"horizontal"`: Enables horizontal scrolling
  * - `"vertical"`: Enables vertical scrolling
  * - `"both"`: Enables scrolling in both directions
  * - `"none"`: Disables scrolling (default)
  */
  scroll: { type: String, default: TableScroll.NONE, validator: function(value) {
    const types = Object.values(TableScroll);
    return types.includes(value);
  } },
  /**
  * V-model will bind to value containing selected rows.
  */
  modelValue: { type: Array, required: false, default: void 0 }
}, emits: [
  "change",
  "click",
  "update",
  "unselect",
  "update:modelValue",
  "select",
  /**
  * Emitted when row is expanded.
  *
  * @event expand
  * @param row
  * @type {ListItem}
  */
  "expand",
  /**
  * Emitted when row is collapsed.
  *
  * @event collapse
  * @param row
  * @type {ListItem}
  */
  "collapse"
], setup(props, context) {
  provide("renderColumns", computed(() => props.rows.length > 0));
  const sortFilterDatasetInjected = FSortFilterDatasetInjected();
  const activateItemInjected = ActivateItemInjected();
  const expandableTable = useExpandableTable(props.expandableAttribute, props.keyAttribute, props.expandableDescribedby, context.emit, context.slots);
  return { ...sortFilterDatasetInjected, ...activateItemInjected, ...expandableTable };
}, data() {
  return { activeRow: void 0, columns: [], selectedRows: [], tr: [] };
}, computed: { hasCaption() {
  return hasSlot(this, "caption", {}, { stripClasses: [] });
}, hasCheckboxDescription() {
  const firstRow = this.rows[0];
  return hasSlot(this, "checkbox-description", { row: firstRow });
}, isEmpty() {
  return this.rows.length === 0;
}, visibleColumns() {
  return this.columns.filter((col) => col.visible);
}, tableClasses() {
  const classes = [];
  if (this.selectable) {
    classes.push("table--selectable");
  }
  if (this.hover) {
    classes.push("table--hover");
  }
  return classes;
}, tableRole() {
  return this.isExpandableTable ? "treegrid" : "grid";
}, wrapperClasses() {
  return tableScrollClasses(this.scroll);
}, nbOfColumns() {
  let columnCount = this.columns.length;
  if (this.selectable) {
    columnCount++;
  }
  if (this.isExpandableTable) {
    columnCount++;
  }
  return columnCount;
} }, watch: { rows: { immediate: true, deep: true, handler: function() {
  if (this.modelValue) {
    this.selectedRows = this.modelValue.filter((row) => {
      return includeItem(row, this.rows, this.keyAttribute);
    });
  }
} } }, updated() {
  const tbodyElement = this.$refs["tbodyElement"];
  const trElements = [].slice.call(tbodyElement.children);
  const trInteractableElements = trElements.filter((tr) => {
    return tr.tabIndex === 0;
  });
  this.tr = trInteractableElements;
}, mounted() {
  this.registerCallbackOnSort(this.callbackOnSort);
  this.registerCallbackOnMount(this.callbackSortableColumns);
  this.registerCallbackAfterItemAdd(this.callbackAfterItemAdd);
  this.registerCallbackBeforeItemDelete(this.callbackBeforeItemDelete);
}, methods: { isActive(row) {
  return itemEquals(row, this.activeRow, this.keyAttribute);
}, isSelected(row) {
  return includeItem(row, this.selectedRows, this.keyAttribute);
}, onKeydownExpandable(event, index) {
  if (event.key === " " || event.key === "Spacebar") {
    event.preventDefault();
    return;
  }
  onKeydown.call(this, event, index);
}, onKeydown(event, index) {
  onKeydown.call(this, event, index);
}, onClick(event, row) {
  const { target } = event;
  const isRelevant = ["TD", "TH"].includes(target.nodeName);
  if (isRelevant) {
    const parent = target.parentElement;
    this.activate(row, parent);
  }
}, activate(row, tr) {
  this.$emit("click", row);
  if (this.isExpandableTable && this.hasExpandableContent(row)) {
    this.toggleExpanded(row);
  }
  if (!itemEquals(row, this.activeRow, this.keyAttribute)) {
    this.$emit("change", row);
    this.activeRow = row;
    if (tr) {
      tr.focus();
      const td = tr.children[0];
      forceRepaintIE11(td);
    }
  }
}, rowDescription(row) {
  const slot = this.$slots["row-description"];
  return renderSlotText(slot, { row });
}, onSelect(row) {
  if (includeItem(row, this.selectedRows, this.keyAttribute)) {
    this.selectedRows = this.selectedRows.filter((i) => !itemEquals(i, row, this.keyAttribute));
    this.$emit("unselect", row);
  } else {
    this.selectedRows.push(row);
    this.$emit("select", row);
  }
  this.updateVModelWithSelectedRows();
  this.$forceUpdate();
}, updateVModelWithSelectedRows() {
  if (this.modelValue) {
    this.$emit("update:modelValue", this.selectedRows);
    this.$emit("update", this.selectedRows);
  }
}, rowClasses(row, index) {
  const active = this.isActive(row) ? ["table__row--active"] : [];
  const selected = this.isSelected(row) ? ["table__row--selected"] : [];
  const isExpandableRow = this.isExpandableTable && this.hasExpandableContent(row);
  const expandable = isExpandableRow ? ["table__row--expandable"] : [];
  const expanded = this.isExpanded(row) ? ["table__row--expanded-border"] : [];
  const striped = this.striped && index % 2 !== 0 ? ["table__row--striped"] : [];
  return ["table__row", ...active, ...selected, ...striped, ...expandable, ...expanded];
}, rowKey(row) {
  const key = row[this.keyAttribute];
  if (typeof key === "undefined") {
    throw new Error(`Key attribute [${this.keyAttribute}]' is missing in row`);
  }
  return String(key);
}, columnClasses(column) {
  const sortable = column.sortable ? ["table__column--sortable"] : [];
  return ["table__column", `table__column--${column.type}`, ...sortable, column.size];
}, iconClasses(column) {
  return getSortableIconClasses(column);
}, iconName(column) {
  return getSortableIconName(column);
}, onClickColumnHeader(column) {
  if (!column.sortable) {
    return;
  }
  let columnName = column.name;
  if (column.sort === FTableColumnSort.DESCENDING) {
    columnName = "";
    column.sort = FTableColumnSort.UNSORTED;
  }
  this.sort(columnName, column.sort !== FTableColumnSort.ASCENDING);
}, callbackOnSort(columnName, ascending) {
  updateSortOrder(this.columns, columnName, ascending);
}, callbackSortableColumns(columnNames) {
  setSortableColumns(this.columns, columnNames);
}, callbackAfterItemAdd(item) {
  this.activate(item, null);
}, callbackBeforeItemDelete(item) {
  if (this.rows.length === 0) {
    return;
  }
  let targetIndex = this.rows.indexOf(item) - 1;
  if (targetIndex < 0 && this.rows.length > 1) {
    targetIndex = 1;
  } else if (targetIndex < 0) {
    targetIndex = 0;
  }
  this.activate(this.rows[targetIndex], this.tr[targetIndex]);
}, escapeNewlines(value) {
  return value.replace(/\n/g, "<br/>");
} } });
/* @__PURE__ */ defineComponent({ name: "FTooltip", components: { FExpand, FIcon, IFlex, IFlexItem }, props: {
  /**
  * State (expanded or collapsed) of the tooltip. The value is `true` if the tooltip is expanded.
  *
  * @model
  */
  modelValue: { type: Boolean, required: false },
  /**
  * Screen reader text for toggle button
  */
  screenReaderText: { type: String, required: true },
  /**
  * Close button text
  */
  closeButtonText: { type: String, required: false, default: TranslationService.provider.translate("fkui.tooltip.close", "Stäng") },
  /**
  * Element to render for the header element inside the tooltip.
  *
  * Must be set to one of:
  *
  * - `div` (default)
  * - `span`
  * - `h1`
  * - `h2`
  * - `h3`
  * - `h4`
  * - `h5`
  * - `h6`
  */
  headerTag: { default: "div", required: false, validator(value) {
    return ["div", "span", "h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
  } }
}, emits: ["update:modelValue", "toggle"], data() {
  return { isOpen: false };
}, computed: { hasHeader() {
  return hasSlot(this, "header");
} }, watch: { modelValue: { immediate: true, handler(value) {
  this.isOpen = value;
} } }, mounted() {
  window.addEventListener("resize", () => {
    if (this.isOpen) {
      this.positionArrow();
    }
  });
  if (this.isOpen) {
    this.positionArrow();
  }
}, methods: {
  /**
  * Gets called when the user interacts with the toggle button
  *
  * @internal
  */
  onClickToggle() {
    this.isOpen = !this.isOpen;
    const value = this.isOpen;
    const event = { isOpen: this.isOpen };
    this.$emit("update:modelValue", value);
    this.$emit("toggle", event);
    if (!this.isOpen) {
      const button = this.$el.querySelector(".tooltip__button");
      focus(button);
    }
    this.$nextTick(() => {
      this.positionArrow();
    });
  },
  positionArrow() {
    const button = this.$el.querySelector(".tooltip__button");
    const arrow = this.$el.querySelector(".tooltip__arrow");
    const content = this.$el.querySelector(".tooltip__content-wrapper");
    const borderSize = 2;
    if (button && arrow && content) {
      const buttonOffsetLeft = button.offsetLeft - content.offsetLeft;
      const relativeOffset = buttonOffsetLeft - borderSize + button.getBoundingClientRect().width / 2;
      arrow.style.left = `${relativeOffset}px`;
    }
  }
} });
/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const isBrowser = typeof document !== "undefined";
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function isESModule(obj) {
  return obj.__esModule || obj[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  obj.default && isRouteComponent(obj.default);
}
const assign = Object.assign;
function applyToParams(fn2, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = isArray2(value) ? value.map(fn2) : fn2(value);
  }
  return newParams;
}
const noop = () => {
};
const isArray2 = Array.isArray;
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
  }
  return "" + text;
}
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const hashPos = location2.indexOf("#");
  let searchPos = location2.indexOf("?");
  if (hashPos < searchPos && hashPos >= 0) {
    searchPos = -1;
  }
  if (searchPos > -1) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location2.slice(0, hashPos);
    hash = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash,
    path,
    query,
    hash: decode(hash)
  };
}
function stringifyURL(stringifyQuery2, location2) {
  const query = location2.query ? stringifyQuery2(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function stripBase(pathname, base) {
  if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
    return pathname;
  return pathname.slice(base.length) || "/";
}
function isSameRouteLocation(stringifyQuery2, a, b) {
  const aLastIndex = a.matched.length - 1;
  const bLastIndex = b.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
}
function isSameRouteRecord(a, b) {
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length)
    return false;
  for (const key in a) {
    if (!isSameRouteLocationParamsValue(a[key], b[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a, b) {
  return isArray2(a) ? isEquivalentArray(a, b) : isArray2(b) ? isEquivalentArray(b, a) : a === b;
}
function isEquivalentArray(a, b) {
  return isArray2(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  const lastToSegment = toSegments[toSegments.length - 1];
  if (lastToSegment === ".." || lastToSegment === ".") {
    toSegments.push("");
  }
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (segment === ".")
      continue;
    if (segment === "..") {
      if (position > 1)
        position--;
    } else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition).join("/");
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  // TODO: could we use a symbol in the future?
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
function normalizeBase(base) {
  if (!base) {
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base = baseEl && baseEl.getAttribute("href") || "/";
      base = base.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base = "/";
    }
  }
  if (base[0] !== "/" && base[0] !== "#")
    base = "/" + base;
  return removeTrailingSlash(base);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location2) {
  return base.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.scrollX, scrollToOptions.top != null ? scrollToOptions.top : window.scrollY);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
let createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base, location2) {
  const { pathname, search, hash } = location2;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/")
      pathFromHash = "/" + pathFromHash;
    return stripBase(pathFromHash, "");
  }
  const path = stripBase(pathname, base);
  return path + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace2) {
  let listeners = [];
  let teardowns = [];
  let pauseState = null;
  const popStateHandler = ({ state }) => {
    const to = createCurrentLocation(base, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state) {
      currentLocation.value = to;
      historyState.value = state;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace2(to);
    }
    listeners.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback) {
    listeners.push(callback);
    const teardown = () => {
      const index = listeners.indexOf(callback);
      if (index > -1)
        listeners.splice(index, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    const { history: history2 } = window;
    if (!history2.state)
      return;
    history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
  }
  function destroy() {
    for (const teardown of teardowns)
      teardown();
    teardowns = [];
    window.removeEventListener("popstate", popStateHandler);
    window.removeEventListener("beforeunload", beforeUnloadListener);
  }
  window.addEventListener("popstate", popStateHandler);
  window.addEventListener("beforeunload", beforeUnloadListener, {
    passive: true
  });
  return {
    pauseListeners,
    listen,
    destroy
  };
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base) {
  const { history: history2, location: location2 } = window;
  const currentLocation = {
    value: createCurrentLocation(base, location2)
  };
  const historyState = { value: history2.state };
  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      // the length is off by one, we need to decrease it
      position: history2.length - 1,
      replaced: true,
      // don't add a scroll as the user may have an anchor, and we want
      // scrollBehavior to be triggered without a saved position
      scroll: null
    }, true);
  }
  function changeLocation(to, state, replace22) {
    const hashIndex = base.indexOf("#");
    const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
    try {
      history2[replace22 ? "replaceState" : "pushState"](state, "", url);
      historyState.value = state;
    } catch (err) {
      {
        console.error(err);
      }
      location2[replace22 ? "replace" : "assign"](url);
    }
  }
  function replace2(to, data2) {
    const state = assign({}, history2.state, buildState(
      historyState.value.back,
      // keep back and forward entries but override current position
      to,
      historyState.value.forward,
      true
    ), data2, { position: historyState.value.position });
    changeLocation(to, state, true);
    currentLocation.value = to;
  }
  function push3(to, data2) {
    const currentState = assign(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      historyState.value,
      history2.state,
      {
        forward: to,
        scroll: computeScrollPosition()
      }
    );
    changeLocation(currentState.current, currentState, true);
    const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data2);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }
  return {
    location: currentLocation,
    state: historyState,
    push: push3,
    replace: replace2
  };
}
function createWebHistory(base) {
  base = normalizeBase(base);
  const historyNavigation = useHistoryStateNavigation(base);
  const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go(delta, triggerListeners = true) {
    if (!triggerListeners)
      historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign({
    // it's overridden right after
    location: "",
    base,
    go,
    createHref: createHref.bind(null, base)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, "state", {
    enumerable: true,
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}
function createWebHashHistory(base) {
  base = location.host ? base || location.pathname + location.search : "";
  if (!base.includes("#"))
    base += "#";
  return createWebHistory(base);
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const NavigationFailureSymbol = Symbol("");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
function createRouterError(type, params) {
  {
    return assign(new Error(), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern = options.start ? "^" : "";
  const keys2 = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [
      90
      /* PathScore.Root */
    ];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value, repeatable, optional, regexp } = token;
        keys2.push({
          name: value,
          repeatable,
          optional
        });
        const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re2 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re2})`);
          } catch (err) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
          }
        }
        let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
        if (!tokenIndex)
          subPattern = // avoid an optional / if there are more segments e.g. /:p?-static
          // or /:p?-:p2
          optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re2 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i = score.length - 1;
    score[i][score[i].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict)
    pattern += "(?:/|$)";
  const re = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse(path) {
    const match2 = path.match(re);
    const params = {};
    if (!match2)
      return null;
    for (let i = 1; i < match2.length; i++) {
      const value = match2[i] || "";
      const key = keys2[i - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (isArray2(param) && !repeatable) {
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          }
          const text = isArray2(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2) {
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    return path || "/";
  }
  return {
    re,
    score,
    keys: keys2,
    parse,
    stringify
  };
}
function compareScoreArray(a, b) {
  let i = 0;
  while (i < a.length && i < b.length) {
    const diff = b[i] - a[i];
    if (diff)
      return diff;
    i++;
  }
  if (a.length < b.length) {
    return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
  } else if (a.length > b.length) {
    return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a, b) {
  let i = 0;
  const aScore = a.score;
  const bScore = b.score;
  while (i < aScore.length && i < bScore.length) {
    const comp = compareScoreArray(aScore[i], bScore[i]);
    if (comp)
      return comp;
    i++;
  }
  if (Math.abs(bScore.length - aScore.length) === 1) {
    if (isLastScoreNegative(aScore))
      return 1;
    if (isLastScoreNegative(bScore))
      return -1;
  }
  return bScore.length - aScore.length;
}
function isLastScoreNegative(score) {
  const last = score[score.length - 1];
  return score.length > 0 && last[last.length - 1] < 0;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(`Invalid path "${path}"`);
  }
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer2}": ${message}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i = 0;
  let char;
  let buffer2 = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer2)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer2
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer2}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer2,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer2 = "";
  }
  function addCharToBuffer() {
    buffer2 += char;
  }
  while (i < path.length) {
    char = path[i++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer2) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer2}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  const matcher = assign(parser, {
    record,
    parent,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes, globalOptions) {
  const matchers = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [mainNormalizedRecord];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          normalizeRouteRecord(assign({}, mainNormalizedRecord, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            // we might be the child of an alias
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher))
          removeRoute(record.name);
      }
      if (isMatchable(matcher)) {
        insertMatcher(matcher);
      }
      if (mainNormalizedRecord.children) {
        const children = mainNormalizedRecord.children;
        for (let i = 0; i < children.length; i++) {
          addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
        }
      }
      originalRecord = originalRecord || matcher;
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index = matchers.indexOf(matcherRef);
      if (index > -1) {
        matchers.splice(index, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    const index = findInsertionIndex(matcher, matchers);
    matchers.splice(index, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve2(location2, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location2 && location2.name) {
      matcher = matcherMap.get(location2.name);
      if (!matcher)
        throw createRouterError(1, {
          location: location2
        });
      name = matcher.record.name;
      params = assign(
        // paramsFromLocation is a new object
        paramsFromLocation(
          currentLocation.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          matcher.keys.filter((k) => !k.optional).concat(matcher.parent ? matcher.parent.keys.filter((k) => k.optional) : []).map((k) => k.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        location2.params && paramsFromLocation(location2.params, matcher.keys.map((k) => k.name))
      );
      path = matcher.stringify(params);
    } else if (location2.path != null) {
      path = location2.path;
      matcher = matchers.find((m) => m.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location: location2,
          currentLocation
        });
      name = matcher.record.name;
      params = assign({}, currentLocation.params, location2.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes.forEach((route) => addRoute(route));
  function clearRoutes() {
    matchers.length = 0;
    matcherMap.clear();
  }
  return {
    addRoute,
    resolve: resolve2,
    removeRoute,
    clearRoutes,
    getRoutes,
    getRecordMatcher
  };
}
function paramsFromLocation(params, keys2) {
  const newParams = {};
  for (const key of keys2) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  const normalized = {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: record.aliasOf,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    // must be declared afterwards
    // mods: {},
    components: "components" in record ? record.components || null : record.component && { default: record.component }
  };
  Object.defineProperty(normalized, "mods", {
    value: {}
  });
  return normalized;
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) {
    propsObject.default = props;
  } else {
    for (const name in record.components)
      propsObject[name] = typeof props === "object" ? props[name] : props;
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
  const options = {};
  for (const key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  }
  return options;
}
function findInsertionIndex(matcher, matchers) {
  let lower = 0;
  let upper = matchers.length;
  while (lower !== upper) {
    const mid = lower + upper >> 1;
    const sortOrder = comparePathParserScore(matcher, matchers[mid]);
    if (sortOrder < 0) {
      upper = mid;
    } else {
      lower = mid + 1;
    }
  }
  const insertionAncestor = getInsertionAncestor(matcher);
  if (insertionAncestor) {
    upper = matchers.lastIndexOf(insertionAncestor, upper - 1);
  }
  return upper;
}
function getInsertionAncestor(matcher) {
  let ancestor = matcher;
  while (ancestor = ancestor.parent) {
    if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0) {
      return ancestor;
    }
  }
  return;
}
function isMatchable({ record }) {
  return !!(record.name || record.components && Object.keys(record.components).length || record.redirect);
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i = 0; i < searchParams.length; ++i) {
    const searchParam = searchParams[i].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!isArray2(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0) {
        search += (search.length ? "&" : "") + key;
      }
      continue;
    }
    const values = isArray2(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
    values.forEach((value2) => {
      if (value2 !== void 0) {
        search += (search.length ? "&" : "") + key;
        if (value2 != null)
          search += "=" + value2;
      }
    });
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== void 0) {
      normalizedQuery[key] = isArray2(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
const matchedRouteKey = Symbol("");
const viewDepthKey = Symbol("");
const routerKey = Symbol("");
const routeLocationKey = Symbol("");
const routerViewLocationKey = Symbol("");
function useCallbacks() {
  let handlers = [];
  function add(handler) {
    handlers.push(handler);
    return () => {
      const i = handlers.indexOf(handler);
      if (i > -1)
        handlers.splice(i, 1);
    };
  }
  function reset() {
    handlers = [];
  }
  return {
    add,
    list: () => handlers.slice(),
    reset
  };
}
function guardToPromiseFn(guard, to, from, record, name, runWithContext = (fn2) => fn2()) {
  const enterCallbackArray = record && // name is defined if record is because of the function overload
  (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve2, reject) => {
    const next = (valid) => {
      if (valid === false) {
        reject(createRouterError(4, {
          from,
          to
        }));
      } else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are
        record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") {
          enterCallbackArray.push(valid);
        }
        resolve2();
      }
    };
    const guardReturn = runWithContext(() => guard.call(record && record.instances[name], to, from, next));
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    guardCall.catch((err) => reject(err));
  });
}
function extractComponentsGuards(matched, guardType, to, from, runWithContext = (fn2) => fn2()) {
  const guards = [];
  for (const record of matched) {
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name, runWithContext));
      } else {
        let componentPromise = rawComponent();
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            throw new Error(`Couldn't resolve component "${name}" at "${record.path}"`);
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.mods[name] = resolved;
          record.components[name] = resolvedComponent;
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name, runWithContext)();
        }));
      }
    }
  }
  return guards;
}
function useLink(props) {
  const router2 = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => {
    const to = unref(props.to);
    return router2.resolve(to);
  });
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index > -1)
      return index;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return (
      // we are dealing with nested routes
      length > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      getOriginalPath(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
      currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index
    );
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e = {}) {
    if (guardEvent(e)) {
      return router2[unref(props.replace) ? "replace" : "push"](
        unref(props.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(noop);
    }
    return Promise.resolve();
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink,
  setup(props, { slots }) {
    const link = reactive(useLink(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props.custom ? children : h("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e) {
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
    return;
  if (e.defaultPrevented)
    return;
  if (e.button !== void 0 && e.button !== 0)
    return;
  if (e.currentTarget && e.currentTarget.getAttribute) {
    const target = e.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e.preventDefault)
    e.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!isArray2(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(props, { attrs, slots }) {
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const injectedDepth = inject(viewDepthKey, 0);
    const depth = computed(() => {
      let initialDepth = unref(injectedDepth);
      const { matched } = routeToDisplay.value;
      let matchedRoute;
      while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
        initialDepth++;
      }
      return initialDepth;
    });
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
    provide(viewDepthKey, computed(() => depth.value + 1));
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance && to && // if there is no instance but to and from are the same this might be
      // the first visit
      (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const currentName = props.name;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[currentName];
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[currentName];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        normalizeSlot(slots.default, { Component: component, route }) || component
      );
    };
  }
});
function normalizeSlot(slot, data2) {
  if (!slot)
    return null;
  const slotContent = slot(data2);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = (
    // @ts-expect-error: intentionally avoid the type check
    applyToParams.bind(null, decode)
  );
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve2(rawLocation, currentLocation) {
    currentLocation = assign({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href2 = routerHistory.createHref(locationNormalized.fullPath);
      return assign(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if (rawLocation.path != null) {
      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      const targetParams = assign({}, rawLocation.params);
      for (const key in targetParams) {
        if (targetParams[key] == null) {
          delete targetParams[key];
        }
      }
      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(targetParams)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    return assign({
      fullPath,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      )
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push3(to) {
    return pushWithRedirect(to);
  }
  function replace2(to) {
    return push3(assign(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : (
          // force empty params
          { path: newTargetLocation }
        );
        newTargetLocation.params = {};
      }
      return assign({
        query: to.query,
        hash: to.hash,
        // avoid transferring params if the redirect has a path
        params: newTargetLocation.path != null ? {} : to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve2(to);
    const from = currentRoute.value;
    const data2 = to.state;
    const force = to.force;
    const replace22 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(
        assign(locationAsObject(shouldRedirect), {
          state: typeof shouldRedirect === "object" ? assign({}, data2, shouldRedirect.state) : data2,
          force,
          replace: replace22
        }),
        // keep original redirectedFrom if it exists
        redirectedFrom || targetLocation
      );
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll(
        from,
        from,
        // this is a push, the only way for it to be triggered from a
        // history.listen is with a redirect, which makes it become a push
        true,
        // This cannot be the first navigation because the initial location
        // cannot be manually navigated to
        false
      );
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? (
      // navigation redirects still mark the router as ready
      isNavigationFailure(
        error,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? error : markAsReady(error)
    ) : (
      // reject any unknown error
      triggerError(error, toLocation, from)
    )).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(
          failure2,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          return pushWithRedirect(
            // keep options
            assign({
              // preserve an existing replacement but allow the redirect to override it
              replace: replace22
            }, locationAsObject(failure2.to), {
              state: typeof failure2.to === "object" ? assign({}, data2, failure2.to.state) : data2,
              force
            }),
            // preserve the original redirectedFrom if any
            redirectedFrom || toLocation
          );
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace22, data2);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function runWithContext(fn2) {
    const app2 = installedApps.values().next().value;
    return app2 && typeof app2.runWithContext === "function" ? app2.runWithContext(fn2) : fn2();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of enteringRecords) {
        if (record.beforeEnter) {
          if (isArray2(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from, runWithContext);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err) => isNavigationFailure(
      err,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? err : Promise.reject(err));
  }
  function triggerAfterEach(to, from, failure) {
    afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
  }
  function finalizeNavigation(toLocation, from, isPush, replace22, data2) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace22 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign({
          scroll: isFirstNavigation && state && state.scroll
        }, data2));
      else
        routerHistory.push(toLocation.fullPath, data2);
    }
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    if (removeHistoryListener)
      return;
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      if (!router2.listening)
        return;
      const toLocation = resolve2(to);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(
          error,
          4 | 8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        )) {
          return error;
        }
        if (isNavigationFailure(
          error,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        )) {
          pushWithRedirect(
            error.to,
            toLocation
            // avoid an uncaught rejection, let push call triggerError
          ).then((failure) => {
            if (isNavigationFailure(
              failure,
              4 | 16
              /* ErrorTypes.NAVIGATION_DUPLICATED */
            ) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop);
          return Promise.reject();
        }
        if (info.delta) {
          routerHistory.go(-info.delta, false);
        }
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(
          // after navigation, all matched components are resolved
          toLocation,
          from,
          false
        );
        if (failure) {
          if (info.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
          // entry while a different route is displayed
          !isNavigationFailure(
            failure,
            8
            /* ErrorTypes.NAVIGATION_CANCELLED */
          )) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(
            failure,
            4 | 16
            /* ErrorTypes.NAVIGATION_DUPLICATED */
          )) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop);
    });
  }
  let readyHandlers = useCallbacks();
  let errorListeners = useCallbacks();
  let ready;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorListeners.list();
    if (list.length) {
      list.forEach((handler) => handler(error, to, from));
    } else {
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve22, reject) => {
      readyHandlers.add([resolve22, reject]);
    });
  }
  function markAsReady(err) {
    if (!ready) {
      ready = !err;
      setupListeners();
      readyHandlers.list().forEach(([resolve22, reject]) => err ? reject(err) : resolve22());
      readyHandlers.reset();
    }
    return err;
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser || !scrollBehavior)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router2 = {
    currentRoute,
    listening: true,
    addRoute,
    removeRoute,
    clearRoutes: matcher.clearRoutes,
    hasRoute,
    getRoutes,
    resolve: resolve2,
    options,
    push: push3,
    replace: replace2,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorListeners.add,
    isReady,
    install(app2) {
      const router22 = this;
      app2.component("RouterLink", RouterLink);
      app2.component("RouterView", RouterView);
      app2.config.globalProperties.$router = router22;
      Object.defineProperty(app2.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push3(routerHistory.location).catch((err) => {
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) {
        Object.defineProperty(reactiveRoute, key, {
          get: () => currentRoute.value[key],
          enumerable: true
        });
      }
      app2.provide(routerKey, router22);
      app2.provide(routeLocationKey, shallowReactive(reactiveRoute));
      app2.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app2.unmount;
      installedApps.add(app2);
      app2.unmount = function() {
        installedApps.delete(app2);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          removeHistoryListener = null;
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
    }
  };
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
  }
  return router2;
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i = 0; i < len; i++) {
    const recordFrom = from.matched[i];
    if (recordFrom) {
      if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  components: { FTextField },
  data() {
    return {
      awesomeModel: ""
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "sandbox-root" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = resolveComponent("f-text-field");
  const _directive_validation = resolveDirective("validation");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _cache[2] || (_cache[2] = createBaseVNode("h1", null, "FKUI Sandbox", -1)),
    _cache[3] || (_cache[3] = createBaseVNode("p", null, " Ett internt paket som innehåller en avskalad Vue-applikation. Applikationen är konsument av övriga FKUI-paket och innehåller enbart ett tomt exempel. ", -1)),
    _cache[4] || (_cache[4] = createBaseVNode("p", null, [
      createBaseVNode("strong", null, "Ändra och labba gärna här men glöm inte återställa innan merge!")
    ], -1)),
    _cache[5] || (_cache[5] = createBaseVNode("hr", null, null, -1)),
    withDirectives((openBlock(), createBlock(_component_f_text_field, {
      id: "awesome-field",
      modelValue: _ctx.awesomeModel,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.awesomeModel = $event)
    }, {
      default: withCtx(() => _cache[1] || (_cache[1] = [
        createTextVNode(" Inmatningsfält. ")
      ])),
      description: withCtx(({ descriptionClass }) => [
        createBaseVNode("span", {
          class: normalizeClass(descriptionClass)
        }, " Lorem ipsum dolor sit amet. ", 2)
      ]),
      _: 1
    }, 8, ["modelValue"])), [
      [
        _directive_validation,
        { maxLength: { length: 10 } },
        void 0,
        {
          required: true,
          maxLength: true
        }
      ]
    ])
  ]);
}
const DefaultView = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: "/", name: "", component: DefaultView }]
});
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createBlock(_component_router_view);
}
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
config.production = false;
config.popupContainer = "#app";
const app = createApp(App);
app.use(router);
app.use(ValidationPlugin);
app.use(TestPlugin);
app.mount("#app");
setRunningContext(app);