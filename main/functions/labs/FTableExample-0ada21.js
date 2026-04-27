// docs/src/setup.ts
import { createApp, h } from "vue";
import {
  ErrorPlugin,
  FErrorHandlingApp,
  FormatPlugin,
  TestPlugin,
  TranslationPlugin,
  ValidationPlugin,
  setRunningContext
} from "@fkui/vue";
function setup(options) {
  const { rootComponent, selector } = options;
  const app = createApp({
    render() {
      return h(FErrorHandlingApp, { defaultComponent: rootComponent });
    }
  });
  setRunningContext(app);
  app.use(ErrorPlugin, {
    captureWarnings: true,
    logToConsole: true
  });
  app.use(ValidationPlugin);
  app.use(TestPlugin);
  app.use(TranslationPlugin);
  app.use(FormatPlugin);
  app.mount(selector);
}

// virtual-entry:virtual:packages/vue-labs/src/components/FTable/examples/FTableExample.vue:FTableExample-0ada21.js
import { defineComponent as _defineComponent } from "vue";
import { h as h3, ref as ref4, useTemplateRef as useTemplateRef2 } from "vue";
import { assertRef as assertRef2, formatNumber as formatNumber2 } from "@fkui/logic";
import { FButton, FSortFilterDataset, useDatasetRef } from "@fkui/vue";

// packages/vue-labs/dist/esm/index.esm.js
import { Fragment as Fragment2, computed as computed3, createBlock, createCommentVNode, createElementBlock, createElementVNode, createTextVNode, createVNode, defineComponent as defineComponent2, guardReactiveProps, inject as inject3, mergeModels, mergeProps, nextTick as nextTick3, normalizeClass, normalizeProps, onMounted as onMounted3, onUpdated as onUpdated2, openBlock, provide as provide2, ref as ref3, renderList, renderSlot, resolveDirective, resolveDynamicComponent, toDisplayString, toRef as toRef2, toValue as toValue2, unref as unref3, useModel, useSlots, useTemplateRef, vModelText, vShow, watch as watch3, watchEffect as watchEffect3, withCtx, withDirectives, withKeys, withModifiers } from "vue";
import { ElementIdService, TranslationService, ValidationService, alertScreenReader, assertRef, assertSet, debounce, formatNumber, formatPersonnummer, formatPostalCode, isEmpty, isSet, parseBankAccountNumber, parseBankgiro, parseClearingNumber, parseDate, parseNumber, parseOrganisationsnummer, parsePersonnummer, parsePlusgiro, stripWhitespace } from "@fkui/logic";
import { EventBus, FContextMenu, FFileItem, FFileSelector, FIcon, FSortFilterDatasetInjected, FTextField, IComboboxDropdown, IFlex, IFlexItem, IPopupError, TranslationMixin, dispatchComponentValidityEvent, findItemIdentifier, getDatasetMetadata, getItemIdentifier, setItemIdentifiers, useSlotUtils, useTextFieldSetup, useTranslate } from "@fkui/vue";

// node_modules/@vueuse/shared/index.mjs
import { shallowRef, watchEffect, readonly, watch, customRef, getCurrentScope, onScopeDispose, effectScope, getCurrentInstance, hasInjectionContext, inject, provide, ref, isRef, unref, toValue as toValue$1, computed, reactive, toRefs as toRefs$1, toRef as toRef$1, onBeforeMount, nextTick, onBeforeUnmount, onMounted, onUnmounted, isReactive } from "vue";
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
var isClient = typeof window !== "undefined" && typeof document !== "undefined";
var isWorker = typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var notNullish = (val) => val != null;
var toString = Object.prototype.toString;
var isObject = (val) => toString.call(val) === "[object Object]";
var noop = () => {
};
function cacheStringFunction(fn) {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function watchImmediate(source, cb, options) {
  return watch(
    source,
    cb,
    {
      ...options,
      immediate: true
    }
  );
}

// node_modules/@vueuse/core/index.mjs
import { isRef as isRef2, shallowRef as shallowRef2, ref as ref2, watchEffect as watchEffect2, computed as computed2, inject as inject2, defineComponent, h as h2, TransitionGroup, shallowReactive, Fragment, toValue, unref as unref2, getCurrentInstance as getCurrentInstance2, onMounted as onMounted2, watch as watch2, customRef as customRef2, onUpdated, readonly as readonly2, reactive as reactive2, hasInjectionContext as hasInjectionContext2, toRaw, nextTick as nextTick2, markRaw, getCurrentScope as getCurrentScope2, isReadonly, onBeforeUpdate } from "vue";
var defaultWindow = isClient ? window : void 0;
var defaultDocument = isClient ? window.document : void 0;
var defaultNavigator = isClient ? window.navigator : void 0;
var defaultLocation = isClient ? window.location : void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed2(() => {
    const test = toArray(toValue(args[0])).filter((e) => e != null);
    return test.every((e) => typeof e !== "string") ? test : void 0;
  });
  const stopWatch = watchImmediate(
    () => {
      var _a, _b;
      return [
        (_b = (_a = firstParamTargets.value) == null ? void 0 : _a.map((e) => unrefElement(e))) != null ? _b : [defaultWindow].filter((e) => e != null),
        toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
        toArray(unref2(firstParamTargets.value ? args[2] : args[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        toValue(firstParamTargets.value ? args[3] : args[2])
      ];
    },
    ([raw_targets, raw_events, raw_listeners, raw_options]) => {
      cleanup();
      if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length))
        return;
      const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
      cleanups.push(
        ...raw_targets.flatMap(
          (el) => raw_events.flatMap(
            (event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))
          )
        )
      );
    },
    { flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(cleanup);
  return stop;
}
function useMounted() {
  const isMounted = shallowRef2(false);
  const instance = getCurrentInstance2();
  if (instance) {
    onMounted2(() => {
      isMounted.value = true;
    }, instance);
  }
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed2(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMutationObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow, ...mutationOptions } = options;
  let observer;
  const isSupported = useSupported(() => window2 && "MutationObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = computed2(() => {
    const value = toValue(target);
    const items = toArray(value).map(unrefElement).filter(notNullish);
    return new Set(items);
  });
  const stopWatch = watch2(
    () => targets.value,
    (targets2) => {
      cleanup();
      if (isSupported.value && targets2.size) {
        observer = new MutationObserver(callback);
        targets2.forEach((el) => observer.observe(el, mutationOptions));
      }
    },
    { immediate: true, flush: "post" }
  );
  const takeRecords = () => {
    return observer == null ? void 0 : observer.takeRecords();
  };
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop,
    takeRecords
  };
}
function onElementRemoval(target, callback, options = {}) {
  const {
    window: window2 = defaultWindow,
    document: document2 = window2 == null ? void 0 : window2.document,
    flush = "sync"
  } = options;
  if (!window2 || !document2)
    return noop;
  let stopFn;
  const cleanupAndUpdate = (fn) => {
    stopFn == null ? void 0 : stopFn();
    stopFn = fn;
  };
  const stopWatch = watchEffect2(() => {
    const el = unrefElement(target);
    if (el) {
      const { stop } = useMutationObserver(
        document2,
        (mutationsList) => {
          const targetRemoved = mutationsList.map((mutation) => [...mutation.removedNodes]).flat().some((node) => node === el || node.contains(el));
          if (targetRemoved) {
            callback(mutationsList);
          }
        },
        {
          window: window2,
          childList: true,
          subtree: true
        }
      );
      cleanupAndUpdate(stop);
    }
  }, { flush });
  const stopHandle = () => {
    stopWatch();
    cleanupAndUpdate();
  };
  tryOnScopeDispose(stopHandle);
  return stopHandle;
}
function useActiveElement(options = {}) {
  var _a;
  const {
    window: window2 = defaultWindow,
    deep = true,
    triggerOnRemoval = false
  } = options;
  const document2 = (_a = options.document) != null ? _a : window2 == null ? void 0 : window2.document;
  const getDeepActiveElement = () => {
    var _a2;
    let element = document2 == null ? void 0 : document2.activeElement;
    if (deep) {
      while (element == null ? void 0 : element.shadowRoot)
        element = (_a2 = element == null ? void 0 : element.shadowRoot) == null ? void 0 : _a2.activeElement;
    }
    return element;
  };
  const activeElement = shallowRef2();
  const trigger = () => {
    activeElement.value = getDeepActiveElement();
  };
  if (window2) {
    const listenerOptions = {
      capture: true,
      passive: true
    };
    useEventListener(
      window2,
      "blur",
      (event) => {
        if (event.relatedTarget !== null)
          return;
        trigger();
      },
      listenerOptions
    );
    useEventListener(
      window2,
      "focus",
      trigger,
      listenerOptions
    );
  }
  if (triggerOnRemoval) {
    onElementRemoval(activeElement, trigger, { document: document2 });
  }
  trigger();
  return activeElement;
}
function useElementHover(el, options = {}) {
  const {
    delayEnter = 0,
    delayLeave = 0,
    triggerOnRemoval = false,
    window: window2 = defaultWindow
  } = options;
  const isHovered = shallowRef2(false);
  let timer;
  const toggle = (entering) => {
    const delay = entering ? delayEnter : delayLeave;
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
    if (delay)
      timer = setTimeout(() => isHovered.value = entering, delay);
    else
      isHovered.value = entering;
  };
  if (!window2)
    return isHovered;
  useEventListener(el, "mouseenter", () => toggle(true), { passive: true });
  useEventListener(el, "mouseleave", () => toggle(false), { passive: true });
  if (triggerOnRemoval) {
    onElementRemoval(
      computed2(() => unrefElement(el)),
      () => toggle(false)
    );
  }
  return isHovered;
}
var EVENT_FOCUS_IN = "focusin";
var EVENT_FOCUS_OUT = "focusout";
var PSEUDO_CLASS_FOCUS_WITHIN = ":focus-within";
function useFocusWithin(target, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const targetElement = computed2(() => unrefElement(target));
  const _focused = shallowRef2(false);
  const focused = computed2(() => _focused.value);
  const activeElement = useActiveElement(options);
  if (!window2 || !activeElement.value) {
    return { focused };
  }
  const listenerOptions = { passive: true };
  useEventListener(targetElement, EVENT_FOCUS_IN, () => _focused.value = true, listenerOptions);
  useEventListener(targetElement, EVENT_FOCUS_OUT, () => {
    var _a, _b, _c;
    return _focused.value = (_c = (_b = (_a = targetElement.value) == null ? void 0 : _a.matches) == null ? void 0 : _b.call(_a, PSEUDO_CLASS_FOCUS_WITHIN)) != null ? _c : false;
  }, listenerOptions);
  return { focused };
}
var DEFAULT_UNITS = [
  { max: 6e4, value: 1e3, name: "second" },
  { max: 276e4, value: 6e4, name: "minute" },
  { max: 72e6, value: 36e5, name: "hour" },
  { max: 5184e5, value: 864e5, name: "day" },
  { max: 24192e5, value: 6048e5, name: "week" },
  { max: 28512e6, value: 2592e6, name: "month" },
  { max: Number.POSITIVE_INFINITY, value: 31536e6, name: "year" }
];

// packages/vue-labs/dist/esm/index.esm.js
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var require_global_this = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var check = function(it) {
    return it && it.Math === Math && it;
  };
  module.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || /* @__PURE__ */ (function() {
    return this;
  })() || Function("return this")();
}));
var require_fails = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };
}));
var require_descriptors = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  module.exports = !require_fails()(function() {
    return Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1] !== 7;
  });
}));
var require_function_bind_native = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  module.exports = !require_fails()(function() {
    var test = function() {
    }.bind();
    return typeof test != "function" || test.hasOwnProperty("prototype");
  });
}));
var require_function_call = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var NATIVE_BIND = require_function_bind_native();
  var call = Function.prototype.call;
  module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
  };
}));
var require_object_property_is_enumerable = /* @__PURE__ */ __commonJSMin(((exports) => {
  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  exports.f = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1) ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;
}));
var require_create_property_descriptor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value
    };
  };
}));
var require_function_uncurry_this = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var NATIVE_BIND = require_function_bind_native();
  var FunctionPrototype = Function.prototype;
  var call = FunctionPrototype.call;
  var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
  module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
      return call.apply(fn, arguments);
    };
  };
}));
var require_classof_raw = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var uncurryThis = require_function_uncurry_this();
  var toString2 = uncurryThis({}.toString);
  var stringSlice = uncurryThis("".slice);
  module.exports = function(it) {
    return stringSlice(toString2(it), 8, -1);
  };
}));
var require_indexed_object = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var uncurryThis = require_function_uncurry_this();
  var fails = require_fails();
  var classof = require_classof_raw();
  var $Object = Object;
  var split = uncurryThis("".split);
  module.exports = fails(function() {
    return !$Object("z").propertyIsEnumerable(0);
  }) ? function(it) {
    return classof(it) === "String" ? split(it, "") : $Object(it);
  } : $Object;
}));
var require_is_null_or_undefined = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  module.exports = function(it) {
    return it === null || it === void 0;
  };
}));
var require_require_object_coercible = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var isNullOrUndefined = require_is_null_or_undefined();
  var $TypeError = TypeError;
  module.exports = function(it) {
    if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
    return it;
  };
}));
var require_to_indexed_object = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var IndexedObject = require_indexed_object();
  var requireObjectCoercible = require_require_object_coercible();
  module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
  };
}));
var require_is_callable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var documentAll = typeof document == "object" && document.all;
  module.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
  } : function(argument) {
    return typeof argument == "function";
  };
}));
var require_is_object = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var isCallable = require_is_callable();
  module.exports = function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
  };
}));
var require_get_built_in = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var globalThis2 = require_global_this();
  var isCallable = require_is_callable();
  var aFunction = function(argument) {
    return isCallable(argument) ? argument : void 0;
  };
  module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(globalThis2[namespace]) : globalThis2[namespace] && globalThis2[namespace][method];
  };
}));
var require_object_is_prototype_of = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  module.exports = require_function_uncurry_this()({}.isPrototypeOf);
}));
var require_environment_user_agent = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var navigator2 = require_global_this().navigator;
  var userAgent = navigator2 && navigator2.userAgent;
  module.exports = userAgent ? String(userAgent) : "";
}));
var require_environment_v8_version = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var globalThis2 = require_global_this();
  var userAgent = require_environment_user_agent();
  var process2 = globalThis2.process;
  var Deno2 = globalThis2.Deno;
  var versions = process2 && process2.versions || Deno2 && Deno2.version;
  var v8 = versions && versions.v8;
  var match, version;
  if (v8) {
    match = v8.split(".");
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }
  if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }
  module.exports = version;
}));
var require_symbol_constructor_detection = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var V8_VERSION = require_environment_v8_version();
  var fails = require_fails();
  var $String = require_global_this().String;
  module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = /* @__PURE__ */ Symbol("symbol detection");
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
  });
}));
var require_use_symbol_as_uid = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  module.exports = require_symbol_constructor_detection() && !Symbol.sham && typeof Symbol.iterator == "symbol";
}));
var require_is_symbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var getBuiltIn = require_get_built_in();
  var isCallable = require_is_callable();
  var isPrototypeOf = require_object_is_prototype_of();
  var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
  var $Object = Object;
  module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
  } : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
  };
}));
var require_try_to_string = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var $String = String;
  module.exports = function(argument) {
    try {
      return $String(argument);
    } catch (error) {
      return "Object";
    }
  };
}));
var require_a_callable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var isCallable = require_is_callable();
  var tryToString = require_try_to_string();
  var $TypeError = TypeError;
  module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw new $TypeError(tryToString(argument) + " is not a function");
  };
}));
var require_get_method = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var aCallable = require_a_callable();
  var isNullOrUndefined = require_is_null_or_undefined();
  module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? void 0 : aCallable(func);
  };
}));
var require_ordinary_to_primitive = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var call = require_function_call();
  var isCallable = require_is_callable();
  var isObject2 = require_is_object();
  var $TypeError = TypeError;
  module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject2(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject2(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject2(val = call(fn, input))) return val;
    throw new $TypeError("Can't convert object to primitive value");
  };
}));
var require_is_pure = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  module.exports = false;
}));
var require_define_global_property = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var globalThis2 = require_global_this();
  var defineProperty = Object.defineProperty;
  module.exports = function(key, value) {
    try {
      defineProperty(globalThis2, key, {
        value,
        configurable: true,
        writable: true
      });
    } catch (error) {
      globalThis2[key] = value;
    }
    return value;
  };
}));
var require_shared_store = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var IS_PURE = require_is_pure();
  var globalThis2 = require_global_this();
  var defineGlobalProperty = require_define_global_property();
  var SHARED = "__core-js_shared__";
  var store = module.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
  (store.versions || (store.versions = [])).push({
    version: "3.49.0",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",
    license: "https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  });
}));
var require_shared = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var store = require_shared_store();
  module.exports = function(key, value) {
    return store[key] || (store[key] = value || {});
  };
}));
var require_to_object = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var requireObjectCoercible = require_require_object_coercible();
  var $Object = Object;
  module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
  };
}));
var require_has_own_property = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var uncurryThis = require_function_uncurry_this();
  var toObject = require_to_object();
  var hasOwnProperty = uncurryThis({}.hasOwnProperty);
  module.exports = Object.hasOwn || function hasOwn2(it, key) {
    return hasOwnProperty(toObject(it), key);
  };
}));
var require_uid = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var uncurryThis = require_function_uncurry_this();
  var id = 0;
  var postfix = Math.random();
  var toString2 = uncurryThis(1.1.toString);
  module.exports = function(key) {
    return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString2(++id + postfix, 36);
  };
}));
var require_well_known_symbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var globalThis2 = require_global_this();
  var shared = require_shared();
  var hasOwn2 = require_has_own_property();
  var uid = require_uid();
  var NATIVE_SYMBOL = require_symbol_constructor_detection();
  var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
  var Symbol2 = globalThis2.Symbol;
  var WellKnownSymbolsStore = shared("wks");
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
  module.exports = function(name) {
    if (!hasOwn2(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn2(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
    return WellKnownSymbolsStore[name];
  };
}));
var require_to_primitive = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var call = require_function_call();
  var isObject2 = require_is_object();
  var isSymbol = require_is_symbol();
  var getMethod = require_get_method();
  var ordinaryToPrimitive = require_ordinary_to_primitive();
  var wellKnownSymbol = require_well_known_symbol();
  var $TypeError = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
  module.exports = function(input, pref) {
    if (!isObject2(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === void 0) pref = "default";
      result = call(exoticToPrim, input, pref);
      if (!isObject2(result) || isSymbol(result)) return result;
      throw new $TypeError("Can't convert object to primitive value");
    }
    if (pref === void 0) pref = "number";
    return ordinaryToPrimitive(input, pref);
  };
}));
var require_to_property_key = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var toPrimitive = require_to_primitive();
  var isSymbol = require_is_symbol();
  module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
  };
}));
var require_document_create_element = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var globalThis2 = require_global_this();
  var isObject2 = require_is_object();
  var document2 = globalThis2.document;
  var EXISTS = isObject2(document2) && isObject2(document2.createElement);
  module.exports = function(it) {
    return EXISTS ? document2.createElement(it) : {};
  };
}));
var require_ie8_dom_define = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var DESCRIPTORS = require_descriptors();
  var fails = require_fails();
  var createElement = require_document_create_element();
  module.exports = !DESCRIPTORS && !fails(function() {
    return Object.defineProperty(createElement("div"), "a", { get: function() {
      return 7;
    } }).a !== 7;
  });
}));
var require_object_get_own_property_descriptor = /* @__PURE__ */ __commonJSMin(((exports) => {
  var DESCRIPTORS = require_descriptors();
  var call = require_function_call();
  var propertyIsEnumerableModule = require_object_property_is_enumerable();
  var createPropertyDescriptor = require_create_property_descriptor();
  var toIndexedObject = require_to_indexed_object();
  var toPropertyKey = require_to_property_key();
  var hasOwn2 = require_has_own_property();
  var IE8_DOM_DEFINE = require_ie8_dom_define();
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) {
    }
    if (hasOwn2(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
  };
}));
var require_v8_prototype_define_bug = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var DESCRIPTORS = require_descriptors();
  var fails = require_fails();
  module.exports = DESCRIPTORS && fails(function() {
    return Object.defineProperty(function() {
    }, "prototype", {
      value: 42,
      writable: false
    }).prototype !== 42;
  });
}));
var require_an_object = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var isObject2 = require_is_object();
  var $String = String;
  var $TypeError = TypeError;
  module.exports = function(argument) {
    if (isObject2(argument)) return argument;
    throw new $TypeError($String(argument) + " is not an object");
  };
}));
var require_object_define_property = /* @__PURE__ */ __commonJSMin(((exports) => {
  var DESCRIPTORS = require_descriptors();
  var IE8_DOM_DEFINE = require_ie8_dom_define();
  var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
  var anObject = require_an_object();
  var toPropertyKey = require_to_property_key();
  var $TypeError = TypeError;
  var $defineProperty = Object.defineProperty;
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = "enumerable";
  var CONFIGURABLE = "configurable";
  var WRITABLE = "writable";
  exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    }
    return $defineProperty(O, P, Attributes);
  } : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) {
    }
    if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
  };
}));
var require_create_non_enumerable_property = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var DESCRIPTORS = require_descriptors();
  var definePropertyModule = require_object_define_property();
  var createPropertyDescriptor = require_create_property_descriptor();
  module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
}));
var require_function_name = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var DESCRIPTORS = require_descriptors();
  var hasOwn2 = require_has_own_property();
  var FunctionPrototype = Function.prototype;
  var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
  var EXISTS = hasOwn2(FunctionPrototype, "name");
  module.exports = {
    EXISTS,
    PROPER: EXISTS && function something() {
    }.name === "something",
    CONFIGURABLE: EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable)
  };
}));
var require_inspect_source = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var uncurryThis = require_function_uncurry_this();
  var isCallable = require_is_callable();
  var store = require_shared_store();
  var functionToString = uncurryThis(Function.toString);
  if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
  };
  module.exports = store.inspectSource;
}));
var require_weak_map_basic_detection = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var globalThis2 = require_global_this();
  var isCallable = require_is_callable();
  var WeakMap2 = globalThis2.WeakMap;
  module.exports = isCallable(WeakMap2) && /native code/.test(String(WeakMap2));
}));
var require_shared_key = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var shared = require_shared();
  var uid = require_uid();
  var keys = shared("keys");
  module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
  };
}));
var require_hidden_keys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  module.exports = {};
}));
var require_internal_state = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
  var globalThis2 = require_global_this();
  var isObject2 = require_is_object();
  var createNonEnumerableProperty = require_create_non_enumerable_property();
  var hasOwn2 = require_has_own_property();
  var shared = require_shared_store();
  var sharedKey = require_shared_key();
  var hiddenKeys = require_hidden_keys();
  var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
  var TypeError2 = globalThis2.TypeError;
  var WeakMap2 = globalThis2.WeakMap;
  var set, get, has;
  var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
  };
  var getterFor = function(TYPE) {
    return function(it) {
      var state;
      if (!isObject2(it) || (state = get(it)).type !== TYPE) throw new TypeError2("Incompatible receiver, " + TYPE + " required");
      return state;
    };
  };
  if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap2());
    store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    set = function(it, metadata) {
      if (store.has(it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
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
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
      if (hasOwn2(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };
    get = function(it) {
      return hasOwn2(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
      return hasOwn2(it, STATE);
    };
  }
  module.exports = {
    set,
    get,
    has,
    enforce,
    getterFor
  };
}));
var require_make_built_in = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var uncurryThis = require_function_uncurry_this();
  var fails = require_fails();
  var isCallable = require_is_callable();
  var hasOwn2 = require_has_own_property();
  var DESCRIPTORS = require_descriptors();
  var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
  var inspectSource = require_inspect_source();
  var InternalStateModule = require_internal_state();
  var enforceInternalState = InternalStateModule.enforce;
  var getInternalState = InternalStateModule.get;
  var $String = String;
  var defineProperty = Object.defineProperty;
  var stringSlice = uncurryThis("".slice);
  var replace = uncurryThis("".replace);
  var join = uncurryThis([].join);
  var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {
    }, "length", { value: 8 }).length !== 8;
  });
  var TEMPLATE = String(String).split("String");
  var makeBuiltIn = module.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === "Symbol(") name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn2(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) if (DESCRIPTORS) defineProperty(value, "name", {
      value: name,
      configurable: true
    });
    else value.name = name;
    if (CONFIGURABLE_LENGTH && options && hasOwn2(options, "arity") && value.length !== options.arity) defineProperty(value, "length", { value: options.arity });
    try {
      if (options && hasOwn2(options, "constructor") && options.constructor) {
        if (DESCRIPTORS) defineProperty(value, "prototype", { writable: false });
      } else if (value.prototype) value.prototype = void 0;
    } catch (error) {
    }
    var state = enforceInternalState(value);
    if (!hasOwn2(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
    return value;
  };
  Function.prototype.toString = makeBuiltIn(function toString2() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
  }, "toString");
}));
var require_define_built_in = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var isCallable = require_is_callable();
  var definePropertyModule = require_object_define_property();
  var makeBuiltIn = require_make_built_in();
  var defineGlobalProperty = require_define_global_property();
  module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== void 0 ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
    else {
      try {
        if (!options.unsafe) delete O[key];
        else if (O[key]) simple = true;
      } catch (error) {
      }
      if (simple) O[key] = value;
      else definePropertyModule.f(O, key, {
        value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
    }
    return O;
  };
}));
var require_math_trunc = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var ceil = Math.ceil;
  var floor = Math.floor;
  module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
  };
}));
var require_to_integer_or_infinity = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var trunc = require_math_trunc();
  module.exports = function(argument) {
    var number = +argument;
    return number !== number || number === 0 ? 0 : trunc(number);
  };
}));
var require_to_absolute_index = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var toIntegerOrInfinity = require_to_integer_or_infinity();
  var max = Math.max;
  var min = Math.min;
  module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
  };
}));
var require_to_length = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var toIntegerOrInfinity = require_to_integer_or_infinity();
  var min = Math.min;
  module.exports = function(argument) {
    var len = toIntegerOrInfinity(argument);
    return len > 0 ? min(len, 9007199254740991) : 0;
  };
}));
var require_length_of_array_like = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var toLength = require_to_length();
  module.exports = function(obj) {
    return toLength(obj.length);
  };
}));
var require_array_includes = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var toIndexedObject = require_to_indexed_object();
  var toAbsoluteIndex = require_to_absolute_index();
  var lengthOfArrayLike = require_length_of_array_like();
  var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = lengthOfArrayLike(O);
      if (length === 0) return !IS_INCLUDES && -1;
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      if (IS_INCLUDES && el !== el) while (length > index) {
        value = O[index++];
        if (value !== value) return true;
      }
      else for (; length > index; index++) if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      return !IS_INCLUDES && -1;
    };
  };
  module.exports = {
    includes: createMethod(true),
    indexOf: createMethod(false)
  };
}));
var require_object_keys_internal = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var uncurryThis = require_function_uncurry_this();
  var hasOwn2 = require_has_own_property();
  var toIndexedObject = require_to_indexed_object();
  var indexOf = require_array_includes().indexOf;
  var hiddenKeys = require_hidden_keys();
  var push = uncurryThis([].push);
  module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn2(hiddenKeys, key) && hasOwn2(O, key) && push(result, key);
    while (names.length > i) if (hasOwn2(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
  };
}));
var require_enum_bug_keys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
  ];
}));
var require_object_get_own_property_names = /* @__PURE__ */ __commonJSMin(((exports) => {
  var internalObjectKeys = require_object_keys_internal();
  var hiddenKeys = require_enum_bug_keys().concat("length", "prototype");
  exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
  };
}));
var require_object_get_own_property_symbols = /* @__PURE__ */ __commonJSMin(((exports) => {
  exports.f = Object.getOwnPropertySymbols;
}));
var require_own_keys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var getBuiltIn = require_get_built_in();
  var uncurryThis = require_function_uncurry_this();
  var getOwnPropertyNamesModule = require_object_get_own_property_names();
  var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
  var anObject = require_an_object();
  var concat = uncurryThis([].concat);
  module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
  };
}));
var require_copy_constructor_properties = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var hasOwn2 = require_has_own_property();
  var ownKeys = require_own_keys();
  var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
  var definePropertyModule = require_object_define_property();
  module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn2(target, key) && !(exceptions && hasOwn2(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };
}));
var require_is_forced = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var fails = require_fails();
  var isCallable = require_is_callable();
  var replacement = /#|\.prototype\./;
  var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
  };
  var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
  };
  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = "N";
  var POLYFILL = isForced.POLYFILL = "P";
  module.exports = isForced;
}));
var require_export = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var globalThis2 = require_global_this();
  var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
  var createNonEnumerableProperty = require_create_non_enumerable_property();
  var defineBuiltIn = require_define_built_in();
  var defineGlobalProperty = require_define_global_property();
  var copyConstructorProperties = require_copy_constructor_properties();
  var isForced = require_is_forced();
  module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = globalThis2;
    else if (STATIC) target = globalThis2[TARGET] || defineGlobalProperty(TARGET, {});
    else target = globalThis2[TARGET] && globalThis2[TARGET].prototype;
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
      if (!FORCED && targetProperty !== void 0) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
      defineBuiltIn(target, key, sourceProperty, options);
    }
  };
}));
var require_an_instance = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var isPrototypeOf = require_object_is_prototype_of();
  var $TypeError = TypeError;
  module.exports = function(it, Prototype) {
    if (isPrototypeOf(Prototype, it)) return it;
    throw new $TypeError("Incorrect invocation");
  };
}));
var require_correct_prototype_getter = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  module.exports = !require_fails()(function() {
    function F() {
    }
    F.prototype.constructor = null;
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });
}));
var require_object_get_prototype_of = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var hasOwn2 = require_has_own_property();
  var isCallable = require_is_callable();
  var toObject = require_to_object();
  var sharedKey = require_shared_key();
  var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
  var IE_PROTO = sharedKey("IE_PROTO");
  var $Object = Object;
  var ObjectPrototype = $Object.prototype;
  module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
    var object = toObject(O);
    if (hasOwn2(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable(constructor) && object instanceof constructor) return constructor.prototype;
    return object instanceof $Object ? ObjectPrototype : null;
  };
}));
var require_define_built_in_accessor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var makeBuiltIn = require_make_built_in();
  var defineProperty = require_object_define_property();
  module.exports = function(target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
    return defineProperty.f(target, name, descriptor);
  };
}));
var require_create_property = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var DESCRIPTORS = require_descriptors();
  var definePropertyModule = require_object_define_property();
  var createPropertyDescriptor = require_create_property_descriptor();
  module.exports = function(object, key, value) {
    if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
    else object[key] = value;
  };
}));
var require_object_keys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var internalObjectKeys = require_object_keys_internal();
  var enumBugKeys = require_enum_bug_keys();
  module.exports = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys);
  };
}));
var require_object_define_properties = /* @__PURE__ */ __commonJSMin(((exports) => {
  var DESCRIPTORS = require_descriptors();
  var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
  var definePropertyModule = require_object_define_property();
  var anObject = require_an_object();
  var toIndexedObject = require_to_indexed_object();
  var objectKeys = require_object_keys();
  exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var props = toIndexedObject(Properties);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
    return O;
  };
}));
var require_html = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  module.exports = require_get_built_in()("document", "documentElement");
}));
var require_object_create = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var anObject = require_an_object();
  var definePropertiesModule = require_object_define_properties();
  var enumBugKeys = require_enum_bug_keys();
  var hiddenKeys = require_hidden_keys();
  var html = require_html();
  var documentCreateElement = require_document_create_element();
  var sharedKey = require_shared_key();
  var GT = ">";
  var LT = "<";
  var PROTOTYPE = "prototype";
  var SCRIPT = "script";
  var IE_PROTO = sharedKey("IE_PROTO");
  var EmptyConstructor = function() {
  };
  var scriptTag = function(content) {
    return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
  };
  var NullProtoObjectViaActiveX = function(activeXDocument2) {
    activeXDocument2.write(scriptTag(""));
    activeXDocument2.close();
    var temp = activeXDocument2.parentWindow.Object;
    activeXDocument2 = null;
    return temp;
  };
  var NullProtoObjectViaIFrame = function() {
    var iframe = documentCreateElement("iframe");
    var JS = "java" + SCRIPT + ":";
    var iframeDocument;
    iframe.style.display = "none";
    html.appendChild(iframe);
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag("document.F=Object"));
    iframeDocument.close();
    return iframeDocument.F;
  };
  var activeXDocument;
  var NullProtoObject = function() {
    try {
      activeXDocument = new ActiveXObject("htmlfile");
    } catch (error) {
    }
    NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
    var length = enumBugKeys.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
  };
  hiddenKeys[IE_PROTO] = true;
  module.exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
  };
}));
var require_iterators_core = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var fails = require_fails();
  var isCallable = require_is_callable();
  var isObject2 = require_is_object();
  var create = require_object_create();
  var getPrototypeOf = require_object_get_prototype_of();
  var defineBuiltIn = require_define_built_in();
  var wellKnownSymbol = require_well_known_symbol();
  var IS_PURE = require_is_pure();
  var ITERATOR = wellKnownSymbol("iterator");
  var BUGGY_SAFARI_ITERATORS = false;
  var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
  if ([].keys) {
    arrayIterator = [].keys();
    if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
    else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
    }
  }
  if (!isObject2(IteratorPrototype) || fails(function() {
    var test = {};
    return IteratorPrototype[ITERATOR].call(test) !== test;
  })) IteratorPrototype = {};
  else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
  if (!isCallable(IteratorPrototype[ITERATOR])) defineBuiltIn(IteratorPrototype, ITERATOR, function() {
    return this;
  });
  module.exports = {
    IteratorPrototype,
    BUGGY_SAFARI_ITERATORS
  };
}));
var require_es_iterator_constructor = /* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var globalThis2 = require_global_this();
  var anInstance = require_an_instance();
  var anObject = require_an_object();
  var isCallable = require_is_callable();
  var getPrototypeOf = require_object_get_prototype_of();
  var defineBuiltInAccessor = require_define_built_in_accessor();
  var createProperty = require_create_property();
  var fails = require_fails();
  var hasOwn2 = require_has_own_property();
  var wellKnownSymbol = require_well_known_symbol();
  var IteratorPrototype = require_iterators_core().IteratorPrototype;
  var DESCRIPTORS = require_descriptors();
  var IS_PURE = require_is_pure();
  var CONSTRUCTOR = "constructor";
  var ITERATOR = "Iterator";
  var TO_STRING_TAG = wellKnownSymbol("toStringTag");
  var $TypeError = TypeError;
  var NativeIterator = globalThis2[ITERATOR];
  var FORCED = IS_PURE || !isCallable(NativeIterator) || NativeIterator.prototype !== IteratorPrototype || !fails(function() {
    NativeIterator({});
  });
  var IteratorConstructor = function Iterator2() {
    anInstance(this, IteratorPrototype);
    if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError("Abstract class Iterator not directly constructable");
  };
  var defineIteratorPrototypeAccessor = function(key, value) {
    if (DESCRIPTORS) defineBuiltInAccessor(IteratorPrototype, key, {
      configurable: true,
      get: function() {
        return value;
      },
      set: function(replacement) {
        anObject(this);
        if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
        if (hasOwn2(this, key)) this[key] = replacement;
        else createProperty(this, key, replacement);
      }
    });
    else IteratorPrototype[key] = value;
  };
  if (!hasOwn2(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);
  if (FORCED || !hasOwn2(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
  IteratorConstructor.prototype = IteratorPrototype;
  $({
    global: true,
    constructor: true,
    forced: FORCED
  }, { Iterator: IteratorConstructor });
}));
var require_get_iterator_direct = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  module.exports = function(obj) {
    return {
      iterator: obj,
      next: obj.next,
      done: false
    };
  };
}));
var require_define_built_ins = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var defineBuiltIn = require_define_built_in();
  module.exports = function(target, src, options) {
    for (var key in src) defineBuiltIn(target, key, src[key], options);
    return target;
  };
}));
var require_create_iter_result_object = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  module.exports = function(value, done) {
    return {
      value,
      done
    };
  };
}));
var require_iterator_close = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var call = require_function_call();
  var anObject = require_an_object();
  var getMethod = require_get_method();
  module.exports = function(iterator, kind, value) {
    var innerResult, innerError;
    anObject(iterator);
    try {
      innerResult = getMethod(iterator, "return");
      if (!innerResult) {
        if (kind === "throw") throw value;
        return value;
      }
      innerResult = call(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === "throw") throw value;
    if (innerError) throw innerResult;
    anObject(innerResult);
    return value;
  };
}));
var require_iterator_close_all = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var iteratorClose = require_iterator_close();
  module.exports = function(iters, kind, value) {
    for (var i = iters.length - 1; i >= 0; i--) {
      if (iters[i] === void 0) continue;
      try {
        value = iteratorClose(iters[i].iterator, kind, value);
      } catch (error) {
        kind = "throw";
        value = error;
      }
    }
    if (kind === "throw") throw value;
    return value;
  };
}));
var require_iterator_create_proxy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var call = require_function_call();
  var create = require_object_create();
  var createNonEnumerableProperty = require_create_non_enumerable_property();
  var defineBuiltIns = require_define_built_ins();
  var wellKnownSymbol = require_well_known_symbol();
  var InternalStateModule = require_internal_state();
  var getMethod = require_get_method();
  var IteratorPrototype = require_iterators_core().IteratorPrototype;
  var createIterResultObject = require_create_iter_result_object();
  var iteratorClose = require_iterator_close();
  var iteratorCloseAll = require_iterator_close_all();
  var TO_STRING_TAG = wellKnownSymbol("toStringTag");
  var ITERATOR_HELPER = "IteratorHelper";
  var WRAP_FOR_VALID_ITERATOR = "WrapForValidIterator";
  var NORMAL = "normal";
  var THROW = "throw";
  var setInternalState = InternalStateModule.set;
  var createIteratorProxyPrototype = function(IS_ITERATOR) {
    var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);
    return defineBuiltIns(create(IteratorPrototype), {
      next: function next() {
        var state = getInternalState(this);
        if (IS_ITERATOR) return state.nextHandler();
        if (state.done) return createIterResultObject(void 0, true);
        try {
          var result = state.nextHandler();
          return state.returnHandlerResult ? result : createIterResultObject(result, state.done);
        } catch (error) {
          state.done = true;
          throw error;
        }
      },
      "return": function() {
        var state = getInternalState(this);
        var iterator = state.iterator;
        var done = state.done;
        state.done = true;
        if (IS_ITERATOR) {
          var returnMethod = getMethod(iterator, "return");
          return returnMethod ? call(returnMethod, iterator) : createIterResultObject(void 0, true);
        }
        if (done) return createIterResultObject(void 0, true);
        if (state.inner) try {
          iteratorClose(state.inner.iterator, NORMAL);
        } catch (error) {
          return iteratorClose(iterator, THROW, error);
        }
        if (state.openIters) try {
          iteratorCloseAll(state.openIters, NORMAL);
        } catch (error) {
          if (iterator) return iteratorClose(iterator, THROW, error);
          throw error;
        }
        if (iterator) iteratorClose(iterator, NORMAL);
        return createIterResultObject(void 0, true);
      }
    });
  };
  var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
  var IteratorHelperPrototype = createIteratorProxyPrototype(false);
  createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, "Iterator Helper");
  module.exports = function(nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
    var IteratorProxy = function Iterator2(record, state) {
      if (state) {
        state.iterator = record.iterator;
        state.next = record.next;
      } else state = record;
      state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
      state.returnHandlerResult = !!RETURN_HANDLER_RESULT;
      state.nextHandler = nextHandler;
      state.counter = 0;
      state.done = false;
      setInternalState(this, state);
    };
    IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;
    return IteratorProxy;
  };
}));
var require_call_with_safe_iteration_closing = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var anObject = require_an_object();
  var iteratorClose = require_iterator_close();
  module.exports = function(iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose(iterator, "throw", error);
    }
  };
}));
var require_iterator_helper_throws_on_invalid_iterator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  module.exports = function(methodName, argument) {
    var method = typeof Iterator == "function" && Iterator.prototype[methodName];
    if (method) try {
      method.call({ next: null }, argument).next();
    } catch (error) {
      return true;
    }
  };
}));
var require_iterator_helper_without_closing_on_early_error = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var globalThis2 = require_global_this();
  module.exports = function(METHOD_NAME, ExpectedError) {
    var Iterator2 = globalThis2.Iterator;
    var IteratorPrototype = Iterator2 && Iterator2.prototype;
    var method = IteratorPrototype && IteratorPrototype[METHOD_NAME];
    var CLOSED = false;
    if (method) try {
      method.call({
        next: function() {
          return { done: true };
        },
        "return": function() {
          CLOSED = true;
        }
      }, -1);
    } catch (error) {
      if (!(error instanceof ExpectedError)) CLOSED = false;
    }
    if (!CLOSED) return method;
  };
}));
var require_es_iterator_filter = /* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var call = require_function_call();
  var aCallable = require_a_callable();
  var anObject = require_an_object();
  var getIteratorDirect = require_get_iterator_direct();
  var createIteratorProxy = require_iterator_create_proxy();
  var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
  var IS_PURE = require_is_pure();
  var iteratorClose = require_iterator_close();
  var iteratorHelperThrowsOnInvalidIterator = require_iterator_helper_throws_on_invalid_iterator();
  var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
  var FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("filter", function() {
  });
  var filterWithoutClosingOnEarlyError = !IS_PURE && !FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("filter", TypeError);
  var FORCED = IS_PURE || FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR || filterWithoutClosingOnEarlyError;
  var IteratorProxy = createIteratorProxy(function() {
    var iterator = this.iterator;
    var predicate = this.predicate;
    var next = this.next;
    var result, done, value;
    while (true) {
      result = anObject(call(next, iterator));
      done = this.done = !!result.done;
      if (done) return;
      value = result.value;
      if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
    }
  });
  $({
    target: "Iterator",
    proto: true,
    real: true,
    forced: FORCED
  }, { filter: function filter(predicate) {
    anObject(this);
    try {
      aCallable(predicate);
    } catch (error) {
      iteratorClose(this, "throw", error);
    }
    if (filterWithoutClosingOnEarlyError) return call(filterWithoutClosingOnEarlyError, this, predicate);
    return new IteratorProxy(getIteratorDirect(this), { predicate });
  } });
}));
var require_set_helpers = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var uncurryThis = require_function_uncurry_this();
  var SetPrototype = Set.prototype;
  module.exports = {
    Set,
    add: uncurryThis(SetPrototype.add),
    has: uncurryThis(SetPrototype.has),
    remove: uncurryThis(SetPrototype["delete"]),
    proto: SetPrototype
  };
}));
var require_a_set = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var has = require_set_helpers().has;
  module.exports = function(it) {
    has(it);
    return it;
  };
}));
var require_iterate_simple = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var call = require_function_call();
  module.exports = function(record, fn, ITERATOR_INSTEAD_OF_RECORD) {
    var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
    var next = record.next;
    var step, result;
    while (!(step = call(next, iterator)).done) {
      result = fn(step.value);
      if (result !== void 0) return result;
    }
  };
}));
var require_set_iterate = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var uncurryThis = require_function_uncurry_this();
  var iterateSimple = require_iterate_simple();
  var SetHelpers = require_set_helpers();
  var Set2 = SetHelpers.Set;
  var SetPrototype = SetHelpers.proto;
  var forEach = uncurryThis(SetPrototype.forEach);
  var keys = uncurryThis(SetPrototype.keys);
  var next = keys(new Set2()).next;
  module.exports = function(set, fn, interruptible) {
    return interruptible ? iterateSimple({
      iterator: keys(set),
      next
    }, fn) : forEach(set, fn);
  };
}));
var require_set_clone = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var SetHelpers = require_set_helpers();
  var iterate = require_set_iterate();
  var Set2 = SetHelpers.Set;
  var add = SetHelpers.add;
  module.exports = function(set) {
    var result = new Set2();
    iterate(set, function(it) {
      add(result, it);
    });
    return result;
  };
}));
var require_function_uncurry_this_accessor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var uncurryThis = require_function_uncurry_this();
  var aCallable = require_a_callable();
  module.exports = function(object, key, method) {
    try {
      return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) {
    }
  };
}));
var require_set_size = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  module.exports = require_function_uncurry_this_accessor()(require_set_helpers().proto, "size", "get") || function(set) {
    return set.size;
  };
}));
var require_get_set_record = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var aCallable = require_a_callable();
  var anObject = require_an_object();
  var call = require_function_call();
  var toIntegerOrInfinity = require_to_integer_or_infinity();
  var getIteratorDirect = require_get_iterator_direct();
  var INVALID_SIZE = "Invalid size";
  var $RangeError = RangeError;
  var $TypeError = TypeError;
  var max = Math.max;
  var SetRecord = function(set, intSize) {
    this.set = set;
    this.size = max(intSize, 0);
    this.has = aCallable(set.has);
    this.keys = aCallable(set.keys);
  };
  SetRecord.prototype = {
    getIterator: function() {
      return getIteratorDirect(anObject(call(this.keys, this.set)));
    },
    includes: function(it) {
      return call(this.has, this.set, it);
    }
  };
  module.exports = function(obj) {
    anObject(obj);
    var numSize = +obj.size;
    if (numSize !== numSize) throw new $TypeError(INVALID_SIZE);
    var intSize = toIntegerOrInfinity(numSize);
    if (intSize < 0) throw new $RangeError(INVALID_SIZE);
    return new SetRecord(obj, intSize);
  };
}));
var require_set_difference = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var aSet = require_a_set();
  var SetHelpers = require_set_helpers();
  var clone = require_set_clone();
  var size = require_set_size();
  var getSetRecord = require_get_set_record();
  var iterateSet = require_set_iterate();
  var iterateSimple = require_iterate_simple();
  var has = SetHelpers.has;
  var remove = SetHelpers.remove;
  module.exports = function difference(other) {
    var O = aSet(this);
    var otherRec = getSetRecord(other);
    var result = clone(O);
    if (size(result) <= otherRec.size) iterateSet(result, function(e) {
      if (otherRec.includes(e)) remove(result, e);
    });
    else iterateSimple(otherRec.getIterator(), function(e) {
      if (has(result, e)) remove(result, e);
    });
    return result;
  };
}));
var require_set_method_accept_set_like = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var getBuiltIn = require_get_built_in();
  var createSetLike = function(size) {
    return {
      size,
      has: function() {
        return false;
      },
      keys: function() {
        return { next: function() {
          return { done: true };
        } };
      }
    };
  };
  var createSetLikeWithInfinitySize = function(size) {
    return {
      size,
      has: function() {
        return true;
      },
      keys: function() {
        throw new Error("e");
      }
    };
  };
  module.exports = function(name, callback) {
    var Set2 = getBuiltIn("Set");
    try {
      new Set2()[name](createSetLike(0));
      try {
        new Set2()[name](createSetLike(-1));
        return false;
      } catch (error2) {
        if (!callback) return true;
        try {
          new Set2()[name](createSetLikeWithInfinitySize(-Infinity));
          return false;
        } catch (error) {
          return callback(new Set2([1, 2])[name](createSetLikeWithInfinitySize(Infinity)));
        }
      }
    } catch (error) {
      return false;
    }
  };
}));
var require_es_set_difference_v2 = /* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var difference = require_set_difference();
  var fails = require_fails();
  $({
    target: "Set",
    proto: true,
    real: true,
    forced: !require_set_method_accept_set_like()("difference", function(result) {
      return result.size === 0;
    }) || fails(function() {
      var setLike = {
        size: 1,
        has: function() {
          return true;
        },
        keys: function() {
          var index = 0;
          return { next: function() {
            var done = index++ > 1;
            if (baseSet.has(1)) baseSet.clear();
            return {
              done,
              value: 2
            };
          } };
        }
      };
      var baseSet = /* @__PURE__ */ new Set([
        1,
        2,
        3,
        4
      ]);
      return baseSet.difference(setLike).size !== 3;
    })
  }, { difference });
}));
var require_set_intersection = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var aSet = require_a_set();
  var SetHelpers = require_set_helpers();
  var size = require_set_size();
  var getSetRecord = require_get_set_record();
  var iterateSet = require_set_iterate();
  var iterateSimple = require_iterate_simple();
  var Set2 = SetHelpers.Set;
  var add = SetHelpers.add;
  var has = SetHelpers.has;
  module.exports = function intersection(other) {
    var O = aSet(this);
    var otherRec = getSetRecord(other);
    var result = new Set2();
    if (size(O) > otherRec.size) iterateSimple(otherRec.getIterator(), function(e) {
      if (has(O, e)) add(result, e);
    });
    else iterateSet(O, function(e) {
      if (otherRec.includes(e)) add(result, e);
    });
    return result;
  };
}));
var require_es_set_intersection_v2 = /* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var fails = require_fails();
  var intersection = require_set_intersection();
  $({
    target: "Set",
    proto: true,
    real: true,
    forced: !require_set_method_accept_set_like()("intersection", function(result) {
      return result.size === 2 && result.has(1) && result.has(2);
    }) || fails(function() {
      return String(Array.from((/* @__PURE__ */ new Set([
        1,
        2,
        3
      ])).intersection(/* @__PURE__ */ new Set([3, 2])))) !== "3,2";
    })
  }, { intersection });
}));
var require_set_is_disjoint_from = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var aSet = require_a_set();
  var has = require_set_helpers().has;
  var size = require_set_size();
  var getSetRecord = require_get_set_record();
  var iterateSet = require_set_iterate();
  var iterateSimple = require_iterate_simple();
  var iteratorClose = require_iterator_close();
  module.exports = function isDisjointFrom(other) {
    var O = aSet(this);
    var otherRec = getSetRecord(other);
    if (size(O) <= otherRec.size) return iterateSet(O, function(e) {
      if (otherRec.includes(e)) return false;
    }, true) !== false;
    var iterator = otherRec.getIterator();
    return iterateSimple(iterator, function(e) {
      if (has(O, e)) return iteratorClose(iterator.iterator, "normal", false);
    }) !== false;
  };
}));
var require_es_set_is_disjoint_from_v2 = /* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var isDisjointFrom = require_set_is_disjoint_from();
  $({
    target: "Set",
    proto: true,
    real: true,
    forced: !require_set_method_accept_set_like()("isDisjointFrom", function(result) {
      return !result;
    })
  }, { isDisjointFrom });
}));
var require_set_is_subset_of = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var aSet = require_a_set();
  var size = require_set_size();
  var iterate = require_set_iterate();
  var getSetRecord = require_get_set_record();
  module.exports = function isSubsetOf(other) {
    var O = aSet(this);
    var otherRec = getSetRecord(other);
    if (size(O) > otherRec.size) return false;
    return iterate(O, function(e) {
      if (!otherRec.includes(e)) return false;
    }, true) !== false;
  };
}));
var require_es_set_is_subset_of_v2 = /* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var isSubsetOf = require_set_is_subset_of();
  $({
    target: "Set",
    proto: true,
    real: true,
    forced: !require_set_method_accept_set_like()("isSubsetOf", function(result) {
      return result;
    })
  }, { isSubsetOf });
}));
var require_set_is_superset_of = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var aSet = require_a_set();
  var has = require_set_helpers().has;
  var size = require_set_size();
  var getSetRecord = require_get_set_record();
  var iterateSimple = require_iterate_simple();
  var iteratorClose = require_iterator_close();
  module.exports = function isSupersetOf(other) {
    var O = aSet(this);
    var otherRec = getSetRecord(other);
    if (size(O) < otherRec.size) return false;
    var iterator = otherRec.getIterator();
    return iterateSimple(iterator, function(e) {
      if (!has(O, e)) return iteratorClose(iterator.iterator, "normal", false);
    }) !== false;
  };
}));
var require_es_set_is_superset_of_v2 = /* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var isSupersetOf = require_set_is_superset_of();
  $({
    target: "Set",
    proto: true,
    real: true,
    forced: !require_set_method_accept_set_like()("isSupersetOf", function(result) {
      return !result;
    })
  }, { isSupersetOf });
}));
var require_set_symmetric_difference = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var aSet = require_a_set();
  var SetHelpers = require_set_helpers();
  var clone = require_set_clone();
  var getSetRecord = require_get_set_record();
  var iterateSimple = require_iterate_simple();
  var add = SetHelpers.add;
  var has = SetHelpers.has;
  var remove = SetHelpers.remove;
  module.exports = function symmetricDifference(other) {
    var O = aSet(this);
    var keysIter = getSetRecord(other).getIterator();
    var result = clone(O);
    iterateSimple(keysIter, function(e) {
      if (has(O, e)) remove(result, e);
      else add(result, e);
    });
    return result;
  };
}));
var require_set_method_get_keys_before_cloning_detection = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  module.exports = function(METHOD_NAME) {
    try {
      var baseSet = /* @__PURE__ */ new Set();
      var result = baseSet[METHOD_NAME]({
        size: 0,
        has: function() {
          return true;
        },
        keys: function() {
          return Object.defineProperty({}, "next", { get: function() {
            baseSet.clear();
            baseSet.add(4);
            return function() {
              return { done: true };
            };
          } });
        }
      });
      return result.size === 1 && result.values().next().value === 4;
    } catch (error) {
      return false;
    }
  };
}));
var require_es_set_symmetric_difference_v2 = /* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var symmetricDifference = require_set_symmetric_difference();
  var setMethodGetKeysBeforeCloning = require_set_method_get_keys_before_cloning_detection();
  $({
    target: "Set",
    proto: true,
    real: true,
    forced: !require_set_method_accept_set_like()("symmetricDifference") || !setMethodGetKeysBeforeCloning("symmetricDifference")
  }, { symmetricDifference });
}));
var require_set_union = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var aSet = require_a_set();
  var add = require_set_helpers().add;
  var clone = require_set_clone();
  var getSetRecord = require_get_set_record();
  var iterateSimple = require_iterate_simple();
  module.exports = function union(other) {
    var O = aSet(this);
    var keysIter = getSetRecord(other).getIterator();
    var result = clone(O);
    iterateSimple(keysIter, function(it) {
      add(result, it);
    });
    return result;
  };
}));
var require_es_set_union_v2 = /* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var union = require_set_union();
  var setMethodGetKeysBeforeCloning = require_set_method_get_keys_before_cloning_detection();
  $({
    target: "Set",
    proto: true,
    real: true,
    forced: !require_set_method_accept_set_like()("union") || !setMethodGetKeysBeforeCloning("union")
  }, { union });
}));
require_es_iterator_constructor();
require_es_iterator_filter();
require_es_set_difference_v2();
require_es_set_intersection_v2();
require_es_set_is_disjoint_from_v2();
require_es_set_is_subset_of_v2();
require_es_set_is_superset_of_v2();
require_es_set_symmetric_difference_v2();
require_es_set_union_v2();
var _hoisted_1$15 = {
  key: 0,
  class: "table-ng__cell table-ng__cell--expand"
};
var _hoisted_2$9 = ["aria-label", "aria-expanded"];
var _hoisted_3$4 = {
  key: 1,
  ref: "expandable",
  tabindex: "-1",
  class: "table-ng__cell table-ng__cell--expand"
};
var ITableExpandButton_default = /* @__PURE__ */ defineComponent2({
  __name: "ITableExpandButton",
  props: {
    isExpandable: { type: Boolean },
    isExpanded: { type: Boolean },
    rowKey: {}
  },
  emits: ["toggle"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const expandableRef = useTemplateRef("expandable");
    const toggleIcon = computed3(() => __props.isExpanded ? "arrow-down" : "arrow-right");
    const expandLabel = computed3(() => __props.isExpanded ? "St\xE4ng rad" : "Expandera rad");
    function onClick() {
      assertRef(expandableRef);
      expandableRef.value.tabIndex = 0;
      emit("toggle", __props.rowKey);
    }
    __expose({ tabstopEl: expandableRef });
    return (_ctx, _cache) => {
      return __props.isExpandable ? (openBlock(), createElementBlock("td", _hoisted_1$15, [createElementVNode("button", {
        ref: "expandable",
        tabindex: "-1",
        "aria-label": expandLabel.value,
        "aria-expanded": __props.isExpanded,
        type: "button",
        onClick
      }, [createVNode(unref3(FIcon), {
        class: "button__icon",
        name: toggleIcon.value
      }, null, 8, ["name"])], 8, _hoisted_2$9)])) : (openBlock(), createElementBlock("td", _hoisted_3$4, null, 512));
    };
  }
});
var _hoisted_1$14 = ["colspan"];
var ITableExpandable_default = /* @__PURE__ */ defineComponent2({
  __name: "ITableExpandable",
  props: { colspan: {} },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("td", {
        class: "table-ng__cell--custom",
        colspan: __props.colspan,
        tabindex: "-1"
      }, [renderSlot(_ctx.$slots, "default")], 8, _hoisted_1$14);
    };
  }
});
var require_add_to_unscopables = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var wellKnownSymbol = require_well_known_symbol();
  var create = require_object_create();
  var defineProperty = require_object_define_property().f;
  var UNSCOPABLES = wellKnownSymbol("unscopables");
  var ArrayPrototype = Array.prototype;
  if (ArrayPrototype[UNSCOPABLES] === void 0) defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
  module.exports = function(key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };
}));
(/* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var $includes = require_array_includes().includes;
  var fails = require_fails();
  var addToUnscopables = require_add_to_unscopables();
  var BROKEN_ON_SPARSE = fails(function() {
    return !Array(1).includes();
  });
  var BROKEN_ON_SPARSE_WITH_FROM_INDEX = fails(function() {
    return [, 1].includes(void 0, 1);
  });
  $({
    target: "Array",
    proto: true,
    forced: BROKEN_ON_SPARSE || BROKEN_ON_SPARSE_WITH_FROM_INDEX
  }, { includes: function includes(el) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
  } });
  addToUnscopables("includes");
})))();
var textTypes = [
  "text:bankAccountNumber",
  "text:bankgiro",
  "text:clearingNumber",
  "text:date",
  "text:email",
  "text:organisationsnummer",
  "text:personnummer",
  "text:phoneNumber",
  "text:plusgiro",
  "text:postalCode",
  "text"
];
var numberTypes = [
  "text:currency",
  "text:number",
  "text:percent"
];
function isInputTypeNumber(value) {
  return numberTypes.includes(value);
}
function isInputTypeText(value) {
  return textTypes.includes(value);
}
var inputFieldConfig = {
  "text:personnummer": {
    formatter(value) {
      return formatPersonnummer(parsePersonnummer(value));
    },
    parser(value) {
      return parsePersonnummer(value);
    },
    validationConfig: {
      maxLength: { length: 20 },
      personnummerFormat: {},
      personnummerLuhn: {}
    },
    attributes: () => {
      return {
        inputmode: "numeric",
        maxlength: "23"
      };
    }
  },
  "text:bankAccountNumber": {
    formatter(value) {
      return value;
    },
    parser(value) {
      return parseBankAccountNumber(value);
    },
    validationConfig: { bankAccountNumber: {} },
    attributes: () => {
      return {
        inputmode: "numeric",
        maxlength: "40"
      };
    }
  },
  "text:bankgiro": {
    formatter(value) {
      return parseBankgiro(value);
    },
    parser(value) {
      return parseBankgiro(value);
    },
    validationConfig: {
      maxLength: { length: 9 },
      bankgiro: {}
    },
    attributes: () => {
      return {
        inputmode: "numeric",
        maxlength: "40"
      };
    }
  },
  "text:clearingNumber": {
    formatter(value) {
      return parseClearingNumber(value.trim());
    },
    parser(value) {
      return parseClearingNumber(value.trim());
    },
    validationConfig: { clearingNumber: {} },
    attributes: () => {
      return {
        inputmode: "numeric",
        maxlength: "16"
      };
    }
  },
  "text:currency": {
    formatter(value) {
      return formatNumber(value);
    },
    parser(value) {
      return parseNumber(value);
    },
    validationConfig: {
      currency: {},
      integer: {}
    },
    attributes: () => {
      return {
        inputmode: "numeric",
        maxlength: "20"
      };
    }
  },
  "text:date": {
    formatter(value) {
      return parseDate(value);
    },
    parser(value) {
      return parseDate(value);
    },
    validationConfig: { date: {} },
    attributes: () => {
      return { type: "text" };
    }
  },
  "text:email": {
    formatter(value) {
      return value;
    },
    parser(value) {
      return value;
    },
    validationConfig: {
      email: {},
      maxLength: { length: 80 }
    },
    attributes: () => {
      return {
        type: "email",
        maxlength: "80"
      };
    }
  },
  "text:number": {
    formatter(value) {
      var _this$decimals;
      return formatNumber(value, (_this$decimals = this.decimals) !== null && _this$decimals !== void 0 ? _this$decimals : 2);
    },
    parser(value) {
      var _this$decimals2;
      return parseNumber(value, (_this$decimals2 = this.decimals) !== null && _this$decimals2 !== void 0 ? _this$decimals2 : 2);
    },
    validationConfig: { number: {} },
    attributes: () => {
      return {
        inputmode: "numeric",
        maxlength: "20"
      };
    }
  },
  "text:organisationsnummer": {
    formatter(value) {
      return parseOrganisationsnummer(value);
    },
    parser(value) {
      return parseOrganisationsnummer(value);
    },
    validationConfig: {
      maxLength: { length: 11 },
      organisationsnummer: {}
    },
    attributes: () => {
      return {
        inputmode: "numeric",
        maxlength: "20"
      };
    }
  },
  "text:percent": {
    formatter(value) {
      var _this$decimals3;
      return formatNumber(value, (_this$decimals3 = this.decimals) !== null && _this$decimals3 !== void 0 ? _this$decimals3 : 2);
    },
    parser(value) {
      var _this$decimals4;
      return parseNumber(value, (_this$decimals4 = this.decimals) !== null && _this$decimals4 !== void 0 ? _this$decimals4 : 2);
    },
    validationConfig: {
      percent: {},
      minValue: { minValue: 0 },
      maxValue: { maxValue: 999 }
    },
    attributes: (options) => {
      return {
        inputmode: options?.decimals ? "decimal" : "numeric",
        maxlength: "10"
      };
    }
  },
  "text:phoneNumber": {
    formatter(value) {
      return value;
    },
    parser(value) {
      return value;
    },
    validationConfig: {
      maxLength: { length: 80 },
      phoneNumber: {}
    },
    attributes: () => {
      return {
        maxlength: "80",
        type: "tel"
      };
    }
  },
  "text:plusgiro": {
    formatter(value) {
      return parsePlusgiro(value);
    },
    parser(value) {
      return parsePlusgiro(value);
    },
    validationConfig: {
      maxLength: { length: 11 },
      plusgiro: {}
    },
    attributes: () => {
      return {
        inputmode: "numeric",
        maxlength: "16"
      };
    }
  },
  "text:postalCode": {
    formatter(value) {
      return formatPostalCode(value.trim());
    },
    parser(value) {
      return formatPostalCode(value.trim());
    },
    validationConfig: {
      maxLength: { length: 13 },
      postalCode: {}
    },
    attributes: () => {
      return {
        inputmode: "numeric",
        maxlength: "15"
      };
    }
  },
  text: {
    formatter(value) {
      return value;
    },
    parser(value) {
      return value;
    },
    validationConfig: {},
    attributes: () => {
      return {};
    }
  }
};
var _hoisted_1$13 = ["aria-sort", "onKeydown"];
var ITableHeader_default = /* @__PURE__ */ defineComponent2({
  __name: "ITableHeader",
  props: {
    column: {},
    sortEnabled: { type: Boolean },
    sortOrder: {}
  },
  emits: ["toggleSortOrder"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const thElement = useTemplateRef("th");
    const columnClasses = computed3(() => {
      return ["table-ng__column", __props.column.size.value === "shrink" ? "table-ng__column--shrink" : "table-ng__column--grow"];
    });
    const sortIconClass = computed3(() => {
      return {
        "table-ng__column__sort-icon": true,
        "table-ng__column__sort-icon--discrete": __props.sortOrder === "unsorted"
      };
    });
    const sortIcon = computed3(() => {
      switch (__props.sortOrder) {
        case "unsorted":
          return "sort";
        case "ascending":
          return "caret-up";
        case "descending":
          return "caret-down";
        default:
          return "";
      }
    });
    const sortValue = computed3(() => {
      switch (__props.sortOrder) {
        case "ascending":
        case "descending":
          return __props.sortOrder;
        default:
          return;
      }
    });
    function isAlignableColumn(column) {
      if (column.type === void 0) return false;
      return isInputTypeText(column.type) || isInputTypeNumber(column.type);
    }
    const alignment = computed3(() => {
      return isAlignableColumn(__props.column) ? __props.column.align : "left";
    });
    function onClickCell() {
      assertRef(thElement);
      thElement.value.tabIndex = 0;
      if (!__props.column.sortable || !__props.sortEnabled) return;
      emit("toggleSortOrder", String(__props.column.sortable));
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("th", {
        ref: "th",
        "aria-sort": sortValue.value,
        class: normalizeClass(columnClasses.value),
        tabindex: "-1",
        onKeydown: withKeys(withModifiers(onClickCell, ["prevent"]), ["enter", "space"]),
        onClick: withModifiers(onClickCell, ["stop"])
      }, [
        createVNode(unref3(IFlex), {
          gap: "1x",
          float: alignment.value
        }, {
          default: withCtx(() => [
            createVNode(unref3(IFlexItem), {
              shrink: "",
              class: "table-ng__column__title"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(__props.column.header), 1)]),
              _: 1
            }),
            _cache[0] || (_cache[0] = createTextVNode()),
            __props.sortEnabled ? (openBlock(), createBlock(unref3(IFlexItem), {
              key: 0,
              shrink: "",
              align: "center"
            }, {
              default: withCtx(() => [createVNode(unref3(FIcon), {
                name: sortIcon.value,
                class: normalizeClass(sortIconClass.value)
              }, null, 8, ["name", "class"])]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["float"]),
        _cache[1] || (_cache[1] = createTextVNode()),
        __props.column.description.value ? (openBlock(), createBlock(unref3(IFlex), {
          key: 0,
          gap: "1x",
          float: alignment.value,
          class: "table-ng__column__description"
        }, {
          default: withCtx(() => [createVNode(unref3(IFlexItem), { shrink: "" }, {
            default: withCtx(() => [createTextVNode(toDisplayString(__props.column.description), 1)]),
            _: 1
          })]),
          _: 1
        }, 8, ["float"])) : createCommentVNode("", true)
      ], 42, _hoisted_1$13);
    };
  }
});
var _hoisted_1$12 = {
  scope: "col",
  class: "table-ng__column table-ng__column--selectable"
};
var _hoisted_2$8 = [
  "checked",
  "indeterminate",
  "aria-label"
];
var ITableHeaderSelectable_default = /* @__PURE__ */ defineComponent2({
  __name: "ITableHeaderSelectable",
  props: {
    selectable: {},
    state: { type: [Boolean, String] }
  },
  emits: ["toggle"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const $t = useTranslate();
    const indeterminate = computed3(() => __props.state === "indeterminate");
    const checked = computed3(() => __props.state === "indeterminate" ? false : __props.state);
    const expose = {};
    const ariaLabel = computed3(() => {
      return !checked.value || indeterminate.value ? $t("fkui.ftable.select-all.aria-label", "V\xE4lj alla rader") : $t("fkui.ftable.unselect-all.aria-label", "Avmarkera alla rader");
    });
    if (__props.selectable === "multi") expose.tabstopEl = useTemplateRef("input");
    __expose(expose);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("th", _hoisted_1$12, [__props.selectable === "multi" ? (openBlock(), createElementBlock("input", {
        key: 0,
        ref: "input",
        checked: checked.value,
        indeterminate: indeterminate.value,
        type: "checkbox",
        "aria-label": ariaLabel.value,
        tabindex: "-1",
        onChange: _cache[0] || (_cache[0] = ($event) => emit("toggle"))
      }, null, 40, _hoisted_2$8)) : createCommentVNode("", true)]);
    };
  }
});
var _hoisted_1$11 = { class: "table-ng__cell table-ng__cell--checkbox" };
var _hoisted_2$7 = ["checked", "aria-label"];
var ITableCheckbox_default = /* @__PURE__ */ defineComponent2({
  __name: "ITableCheckbox",
  props: {
    column: {},
    row: {}
  },
  setup(__props, { expose: __expose }) {
    const targetElement = useTemplateRef("target");
    const ariaLabel = computed3(() => {
      const value = __props.column.label(__props.row);
      return value.length > 0 ? value : void 0;
    });
    function onChange(e) {
      const checked = e.target.checked;
      __props.column.update(__props.row, checked, !checked);
    }
    __expose({ tabstopEl: targetElement });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("td", _hoisted_1$11, [createElementVNode("input", {
        ref: "target",
        checked: Boolean(__props.column.checked(__props.row)),
        type: "checkbox",
        "aria-label": ariaLabel.value,
        tabindex: "-1",
        onChange
      }, null, 40, _hoisted_2$7)]);
    };
  }
});
var _hoisted_1$10 = { class: "table-ng__cell table-ng__cell--radio" };
var _hoisted_2$6 = ["checked", "aria-label"];
var ITableRadio_default = /* @__PURE__ */ defineComponent2({
  __name: "ITableRadio",
  props: {
    column: {},
    row: {}
  },
  setup(__props, { expose: __expose }) {
    const inputElement = useTemplateRef("input");
    const ariaLabel = computed3(() => {
      const value = __props.column.label(__props.row);
      return value.length > 0 ? value : void 0;
    });
    function onChange(_e) {
      assertRef(inputElement);
      __props.column.update(__props.row, inputElement.value.checked, !inputElement.value.checked);
    }
    __expose({ tabstopEl: inputElement });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("td", _hoisted_1$10, [createElementVNode("input", {
        ref: "input",
        type: "radio",
        checked: Boolean(__props.column.checked(__props.row)),
        "aria-label": ariaLabel.value,
        tabindex: "-1",
        onChange
      }, null, 40, _hoisted_2$6)]);
    };
  }
});
var _hoisted_1$9 = {
  key: 0,
  tabindex: "-1",
  class: "table-ng__cell"
};
var ITableSelectable_default = /* @__PURE__ */ defineComponent2({
  __name: "ITableSelectable",
  props: {
    selectable: {},
    row: {},
    state: { type: Boolean },
    level: { default: 1 }
  },
  emits: ["toggle"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const expose = {};
    if (__props.level === 1) {
      const childRef = useTemplateRef("child");
      expose.tabstopEl = computed3(() => {
        var _childRef$value$tabst;
        return (_childRef$value$tabst = childRef.value?.tabstopEl) !== null && _childRef$value$tabst !== void 0 ? _childRef$value$tabst : null;
      });
    }
    __expose(expose);
    const $t = useTranslate();
    const multiSelectColumn = {
      type: "checkbox",
      id: /* @__PURE__ */ Symbol("multi-select"),
      header: ref3("selectable"),
      description: ref3(null),
      sortable: null,
      size: ref3(null),
      component: ITableCheckbox_default,
      label() {
        return $t("fkui.table.selectable.checkbox", "V\xE4lj rad");
      },
      checked() {
        return __props.state;
      },
      update() {
        emit("toggle", __props.row);
      },
      enabled: true
    };
    const singleSelectColumn = {
      type: "radio",
      id: /* @__PURE__ */ Symbol("single-select"),
      header: ref3("V\xE4lj en rad"),
      description: ref3(null),
      sortable: null,
      size: ref3(null),
      component: ITableRadio_default,
      label() {
        return $t("fkui.table.selectable.radio", "V\xE4lj rad");
      },
      checked() {
        return __props.state;
      },
      update() {
        emit("toggle", __props.row);
      },
      enabled: true
    };
    return (_ctx, _cache) => {
      return __props.level > 1 ? (openBlock(), createElementBlock("td", _hoisted_1$9)) : __props.selectable === "multi" ? (openBlock(), createBlock(ITableCheckbox_default, {
        key: 1,
        ref: "child",
        row: __props.row,
        column: multiSelectColumn,
        class: "table-ng__cell--selectable"
      }, null, 8, ["row"])) : __props.selectable === "single" ? (openBlock(), createBlock(ITableRadio_default, {
        key: 2,
        ref: "child",
        row: __props.row,
        column: singleSelectColumn,
        class: "table-ng__cell--selectable"
      }, null, 8, ["row"])) : createCommentVNode("", true);
    };
  }
});
function isFTableCellApi(value) {
  return value !== null && typeof value === "object" && Boolean(value.tabstopEl);
}
var tableCellApiSymbol = /* @__PURE__ */ Symbol("table:cell-api");
var navKeys = /* @__PURE__ */ new Set([
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Home",
  "End"
]);
var prevCellIndex = void 0;
function getCellTarget(tableElement, rowIndex, cellIndex) {
  return tableElement.rows[rowIndex].cells[cellIndex];
}
function getTr(td) {
  return td.parentElement;
}
function getTable(tr) {
  return tr.closest("table");
}
function getLastRowIndex(tableElement) {
  return tableElement.rows.length - 1;
}
function getLastCellIndex(tableElement) {
  return tableElement.rows[0].cells.length - 1;
}
function getVerticalNavIndex(table, from, to) {
  const target = { ...to };
  const currentMax = table.rows[from.row].cells.length - 1;
  const targetMax = table.rows[to.row].cells.length - 1;
  if (prevCellIndex && currentMax < targetMax) {
    target.cell = prevCellIndex;
    prevCellIndex = void 0;
  } else target.cell = Math.min(targetMax, from.cell);
  if (targetMax < from.cell) prevCellIndex = from.cell;
  return target;
}
function isDefined(value) {
  return value.row !== void 0 && value.cell !== void 0;
}
function navigate(e, table, from, last) {
  if (!isDefined(from) || !isDefined(last)) return;
  if (!navKeys.has(e.code)) return;
  e.preventDefault();
  if (e.code === "ArrowLeft") {
    if (from.cell === 0) return;
    prevCellIndex = void 0;
    return {
      row: from.row,
      cell: from.cell - 1
    };
  }
  if (e.code === "ArrowRight") {
    if (from.cell === last.cell) return;
    if (table.rows[from.row].cells.length - 1 <= from.cell) return;
    prevCellIndex = void 0;
    return {
      row: from.row,
      cell: from.cell + 1
    };
  }
  if (e.code === "ArrowUp") {
    if (from.row === 0) return;
    return getVerticalNavIndex(table, from, {
      row: from.row - 1,
      cell: from.cell
    });
  }
  if (e.code === "ArrowDown") {
    if (from.row === last.row) return;
    return getVerticalNavIndex(table, from, {
      row: from.row + 1,
      cell: from.cell
    });
  }
  if (e.code === "Home") if (e.ctrlKey) return {
    row: 1,
    cell: 0
  };
  else return {
    row: from.row,
    cell: 0
  };
  if (e.code === "End") if (e.ctrlKey) return {
    row: last.row,
    cell: table.rows[last.row].cells.length - 1
  };
  else return {
    row: from.row,
    cell: table.rows[from.row].cells.length - 1
  };
}
function getCell(element) {
  const closest = element.closest("td, th");
  if (!closest) throw new Error("expected th or td parent");
  return closest;
}
async function setDefaultCellTarget(table) {
  await nextTick3();
  if (!table.tHead) return null;
  const target = getCellTarget(table, 1, 0);
  activateCell(target, { focus: false });
  return target;
}
function maybeNavigateToCell(e) {
  let newCellTarget = e.target;
  const cell = getCell(e.target);
  const tr = getTr(cell);
  const table = getTable(tr);
  const navigateTo = navigate(e, table, {
    row: tr.rowIndex,
    cell: cell.cellIndex
  }, {
    row: getLastRowIndex(table),
    cell: getLastCellIndex(table)
  });
  if (navigateTo) {
    newCellTarget = getCellTarget(table, navigateTo.row, navigateTo.cell);
    activateCell(newCellTarget, { focus: true });
  }
}
function activateCell(element, options) {
  var _toValue;
  const api = element[tableCellApiSymbol];
  const targetEl = (_toValue = toValue2(api?.tabstopEl)) !== null && _toValue !== void 0 ? _toValue : element;
  targetEl.tabIndex = 0;
  if (options?.focus) targetEl.focus();
  return targetEl;
}
function stopEdit(element, reason) {
  const td = getCell(element);
  const tr = getTr(td);
  const table = getTable(tr);
  const rowIndex = tr.rowIndex;
  const cellIndex = td.cellIndex;
  const lastRowIndex = getLastRowIndex(table);
  const lastCellIndex = getLastCellIndex(table);
  let newCellTarget = td;
  switch (reason) {
    case "enter": {
      const nextRowIndex = rowIndex + 1;
      const hasFooter = Boolean(table.tFoot);
      if (!(rowIndex === lastRowIndex) && !(hasFooter && nextRowIndex === lastRowIndex)) {
        newCellTarget = getCellTarget(table, nextRowIndex, cellIndex);
        activateCell(newCellTarget, { focus: true });
      } else activateCell(newCellTarget, { focus: true });
      return newCellTarget;
    }
    case "escape":
      activateCell(newCellTarget, { focus: true });
      return newCellTarget;
    case "tab":
      if (cellIndex === lastCellIndex && rowIndex === lastRowIndex) activateCell(newCellTarget, { focus: true });
      else if (cellIndex === lastCellIndex) {
        newCellTarget = getCellTarget(table, rowIndex + 1, 0);
        activateCell(newCellTarget, { focus: true });
      } else {
        newCellTarget = getCellTarget(table, rowIndex, cellIndex + 1);
        activateCell(newCellTarget, { focus: true });
      }
      return newCellTarget;
    case "shift-tab":
      if (cellIndex === 0 && rowIndex === 1) activateCell(newCellTarget, { focus: true });
      else if (cellIndex === 0) {
        newCellTarget = getCellTarget(table, rowIndex - 1, 0);
        activateCell(newCellTarget, { focus: true });
      } else {
        newCellTarget = getCellTarget(table, rowIndex, cellIndex - 1);
        activateCell(newCellTarget, { focus: true });
      }
      return newCellTarget;
    case "blur":
      return newCellTarget;
  }
}
function walk(array, childKey, visit, level = 1) {
  for (const item of array) if (visit(item, level) && childKey && item[childKey]) walk(item[childKey], childKey, visit, level + 1);
}
function getBodyRowCount(rows, childKey) {
  let count = 0;
  walk(rows, childKey, () => {
    count++;
    return true;
  });
  return count;
}
var require_is_array = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var classof = require_classof_raw();
  module.exports = Array.isArray || function isArray(argument) {
    return classof(argument) === "Array";
  };
}));
var require_array_set_length = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var DESCRIPTORS = require_descriptors();
  var isArray = require_is_array();
  var $TypeError = TypeError;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  module.exports = DESCRIPTORS && !(function() {
    if (this !== void 0) return true;
    try {
      Object.defineProperty([], "length", { writable: false }).length = 1;
    } catch (error) {
      return error instanceof TypeError;
    }
  })() ? function(O, length) {
    if (isArray(O) && !getOwnPropertyDescriptor(O, "length").writable) throw new $TypeError("Cannot set read only .length");
    return O.length = length;
  } : function(O, length) {
    return O.length = length;
  };
}));
var require_does_not_exceed_safe_integer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var $TypeError = TypeError;
  var MAX_SAFE_INTEGER = 9007199254740991;
  module.exports = function(it) {
    if (it > MAX_SAFE_INTEGER) throw new $TypeError("Maximum allowed index exceeded");
    return it;
  };
}));
(/* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var toObject = require_to_object();
  var lengthOfArrayLike = require_length_of_array_like();
  var setArrayLength = require_array_set_length();
  var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
  var INCORRECT_TO_LENGTH = require_fails()(function() {
    return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
  });
  var properErrorOnNonWritableLength = function() {
    try {
      Object.defineProperty([], "length", { writable: false }).push();
    } catch (error) {
      return error instanceof TypeError;
    }
  };
  $({
    target: "Array",
    proto: true,
    arity: 1,
    forced: INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength()
  }, { push: function push(item) {
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
  } });
})))();
function getRowIndexes(rows, expandableAttribute) {
  const array = [];
  walk(rows, expandableAttribute, (row) => {
    array.push(getItemIdentifier(row));
    return true;
  });
  return array;
}
function getMetaRows(keyedRows, expandedKeys, expandableAttribute) {
  const rowIndexes = getRowIndexes(keyedRows, expandableAttribute);
  const array = [];
  walk(keyedRows, expandableAttribute, (row, level) => {
    const key = getItemIdentifier(row);
    const isExpandable = Boolean(expandableAttribute && Array.isArray(row[expandableAttribute]) && row[expandableAttribute].length > 0);
    const isExpanded = isExpandable && expandedKeys.has(key);
    const rowIndex = rowIndexes.indexOf(key) + 2;
    array.push({
      key,
      row,
      rowIndex,
      level: expandableAttribute ? level : void 0,
      isExpandable,
      isExpanded
    });
    return isExpanded;
  });
  return array;
}
var stopEditKey = /* @__PURE__ */ Symbol();
function useStartStopEdit() {
  return { stopEdit: inject3(stopEditKey, () => Promise.resolve()) };
}
(/* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var call = require_function_call();
  var aCallable = require_a_callable();
  var anObject = require_an_object();
  var getIteratorDirect = require_get_iterator_direct();
  var createIteratorProxy = require_iterator_create_proxy();
  var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
  var iteratorClose = require_iterator_close();
  var iteratorHelperThrowsOnInvalidIterator = require_iterator_helper_throws_on_invalid_iterator();
  var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
  var IS_PURE = require_is_pure();
  var MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("map", function() {
  });
  var mapWithoutClosingOnEarlyError = !IS_PURE && !MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("map", TypeError);
  var FORCED = IS_PURE || MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || mapWithoutClosingOnEarlyError;
  var IteratorProxy = createIteratorProxy(function() {
    var iterator = this.iterator;
    var result = anObject(call(this.next, iterator));
    if (!(this.done = !!result.done)) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
  });
  $({
    target: "Iterator",
    proto: true,
    real: true,
    forced: FORCED
  }, { map: function map(mapper) {
    anObject(this);
    try {
      aCallable(mapper);
    } catch (error) {
      iteratorClose(this, "throw", error);
    }
    if (mapWithoutClosingOnEarlyError) return call(mapWithoutClosingOnEarlyError, this, mapper);
    return new IteratorProxy(getIteratorDirect(this), { mapper });
  } });
})))();
var _hoisted_1$8 = ["href"];
var _hoisted_2$5 = {
  key: 1,
  ref: "target",
  tabindex: "-1",
  class: "table-ng__cell"
};
var ITableAnchor_default = /* @__PURE__ */ defineComponent2({
  __name: "ITableAnchor",
  props: {
    column: {},
    row: {}
  },
  setup(__props, { expose: __expose }) {
    __expose({ tabstopEl: useTemplateRef("target") });
    return (_ctx, _cache) => {
      return __props.column.text(__props.row) ? (openBlock(), createElementBlock("td", {
        key: 0,
        class: "table-ng__cell table-ng__cell--anchor",
        onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(() => {
        }, ["prevent"]), ["space"]))
      }, [createElementVNode("a", {
        ref: "target",
        class: "anchor anchor--block",
        target: "_blank",
        href: __props.column.href,
        tabindex: "-1"
      }, toDisplayString(__props.column.text(__props.row)), 9, _hoisted_1$8)], 32)) : (openBlock(), createElementBlock("td", _hoisted_2$5, null, 512));
    };
  }
});
var _hoisted_1$7 = { class: "table-ng__cell table-ng__cell--button" };
var _hoisted_2$4 = { class: "sr-only" };
var ITableButton_default = /* @__PURE__ */ defineComponent2({
  __name: "ITableButton",
  props: {
    column: {},
    row: {}
  },
  setup(__props, { expose: __expose }) {
    const buttonElement = useTemplateRef("button");
    function onClickButton() {
      assertRef(buttonElement);
      buttonElement.value.tabIndex = 0;
      if (__props.column.onClick) __props.column.onClick(__props.row);
    }
    __expose({ tabstopEl: buttonElement });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("td", _hoisted_1$7, [createElementVNode("button", {
        ref: "button",
        class: "icon-button",
        type: "button",
        tabindex: "-1",
        onClick: onClickButton
      }, [
        __props.column.icon ? (openBlock(), createBlock(unref3(FIcon), {
          key: 0,
          library: __props.column.iconLibrary,
          name: __props.column.icon
        }, null, 8, ["library", "name"])) : createCommentVNode("", true),
        _cache[0] || (_cache[0] = createTextVNode()),
        createElementVNode("span", _hoisted_2$4, toDisplayString(__props.column.text(__props.row)), 1)
      ], 512)]);
    };
  }
});
var require_function_uncurry_this_clause = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var classofRaw = require_classof_raw();
  var uncurryThis = require_function_uncurry_this();
  module.exports = function(fn) {
    if (classofRaw(fn) === "Function") return uncurryThis(fn);
  };
}));
var require_function_bind_context = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var uncurryThis = require_function_uncurry_this_clause();
  var aCallable = require_a_callable();
  var NATIVE_BIND = require_function_bind_native();
  var bind = uncurryThis(uncurryThis.bind);
  module.exports = function(fn, that) {
    aCallable(fn);
    return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
      return fn.apply(that, arguments);
    };
  };
}));
var require_iterators = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  module.exports = {};
}));
var require_is_array_iterator_method = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var wellKnownSymbol = require_well_known_symbol();
  var Iterators = require_iterators();
  var ITERATOR = wellKnownSymbol("iterator");
  var ArrayPrototype = Array.prototype;
  module.exports = function(it) {
    return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
  };
}));
var require_to_string_tag_support = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var TO_STRING_TAG = require_well_known_symbol()("toStringTag");
  var test = {};
  test[TO_STRING_TAG] = "z";
  module.exports = String(test) === "[object z]";
}));
var require_classof = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
  var isCallable = require_is_callable();
  var classofRaw = require_classof_raw();
  var TO_STRING_TAG = require_well_known_symbol()("toStringTag");
  var $Object = Object;
  var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ (function() {
    return arguments;
  })()) === "Arguments";
  var tryGet = function(it, key) {
    try {
      return it[key];
    } catch (error) {
    }
  };
  module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
    var O, tag, result;
    return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
  };
}));
var require_get_iterator_method = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var classof = require_classof();
  var getMethod = require_get_method();
  var isNullOrUndefined = require_is_null_or_undefined();
  var Iterators = require_iterators();
  var ITERATOR = require_well_known_symbol()("iterator");
  module.exports = function(it) {
    if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
  };
}));
var require_get_iterator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var call = require_function_call();
  var aCallable = require_a_callable();
  var anObject = require_an_object();
  var tryToString = require_try_to_string();
  var getIteratorMethod = require_get_iterator_method();
  var $TypeError = TypeError;
  module.exports = function(argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
    if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
    throw new $TypeError(tryToString(argument) + " is not iterable");
  };
}));
var require_iterate = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var bind = require_function_bind_context();
  var call = require_function_call();
  var anObject = require_an_object();
  var tryToString = require_try_to_string();
  var isArrayIteratorMethod = require_is_array_iterator_method();
  var lengthOfArrayLike = require_length_of_array_like();
  var isPrototypeOf = require_object_is_prototype_of();
  var getIterator = require_get_iterator();
  var getIteratorMethod = require_get_iterator_method();
  var iteratorClose = require_iterator_close();
  var $TypeError = TypeError;
  var Result = function(stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };
  var ResultPrototype = Result.prototype;
  module.exports = function(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_RECORD = !!(options && options.IS_RECORD);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function(condition) {
      var $iterator = iterator;
      iterator = void 0;
      if ($iterator) iteratorClose($iterator, "normal");
      return new Result(true, condition);
    };
    var callFn = function(value2) {
      if (AS_ENTRIES) {
        anObject(value2);
        return INTERRUPTED ? fn(value2[0], value2[1], stop) : fn(value2[0], value2[1]);
      }
      return INTERRUPTED ? fn(value2, stop) : fn(value2);
    };
    if (IS_RECORD) iterator = iterable.iterator;
    else if (IS_ITERATOR) iterator = iterable;
    else {
      iterFn = getIteratorMethod(iterable);
      if (!iterFn) throw new $TypeError(tryToString(iterable) + " is not iterable");
      if (isArrayIteratorMethod(iterFn)) {
        for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf(ResultPrototype, result)) return result;
        }
        return new Result(false);
      }
      iterator = getIterator(iterable, iterFn);
    }
    next = IS_RECORD ? iterable.next : iterator.next;
    while (!(step = call(next, iterator)).done) {
      var value = step.value;
      try {
        result = callFn(value);
      } catch (error) {
        if (iterator) iteratorClose(iterator, "throw", error);
        else throw error;
      }
      if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
    }
    return new Result(false);
  };
}));
(/* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var call = require_function_call();
  var iterate = require_iterate();
  var aCallable = require_a_callable();
  var anObject = require_an_object();
  var getIteratorDirect = require_get_iterator_direct();
  var iteratorClose = require_iterator_close();
  var findWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error()("find", TypeError);
  $({
    target: "Iterator",
    proto: true,
    real: true,
    forced: findWithoutClosingOnEarlyError
  }, { find: function find(predicate) {
    anObject(this);
    try {
      aCallable(predicate);
    } catch (error) {
      iteratorClose(this, "throw", error);
    }
    if (findWithoutClosingOnEarlyError) return call(findWithoutClosingOnEarlyError, this, predicate);
    var record = getIteratorDirect(this);
    var counter = 0;
    return iterate(record, function(value, stop) {
      if (predicate(value, counter++)) return stop(value);
    }, {
      IS_RECORD: true,
      INTERRUPTED: true
    }).result;
  } });
})))();
var _hoisted_1$6 = { class: "sr-only" };
var ITableMenu_default = /* @__PURE__ */ defineComponent2({
  __name: "ITableMenu",
  props: {
    column: {},
    row: {}
  },
  setup(__props, { expose: __expose }) {
    const buttonRef = useTemplateRef("button");
    const expose = { tabstopEl: buttonRef };
    const isOpen = ref3(false);
    const actions = computed3(() => {
      return __props.column.actions.map((it, index) => {
        return {
          ...it,
          key: `item-${String(index + 1)}`
        };
      });
    });
    const menuitems = computed3(() => {
      return actions.value.map((it) => {
        var _it$icon;
        return {
          label: it.label,
          icon: (_it$icon = it.icon) !== null && _it$icon !== void 0 ? _it$icon : void 0,
          key: it.key
        };
      });
    });
    function onOpen(event) {
      event.stopPropagation();
      isOpen.value = true;
    }
    function onClose() {
      isOpen.value = false;
    }
    function onFocusout(event) {
      if (event.relatedTarget && event.relatedTarget instanceof HTMLElement && Boolean(event.relatedTarget.closest(".popup"))) return;
      isOpen.value = false;
    }
    function onSelect(key) {
      actions.value.find((it) => it.key === key)?.onClick(__props.row);
    }
    __expose(expose);
    return (_ctx, _cache) => {
      var _buttonRef$value;
      return openBlock(), createElementBlock("td", { class: normalizeClass(["table-ng__cell table-ng__cell--button", { "table-ng__cell--menu-open": isOpen.value }]) }, [
        createElementVNode("button", {
          ref: "button",
          class: "icon-button",
          type: "button",
          tabindex: "-1",
          "aria-haspopup": "menu",
          onClick: onOpen
        }, [
          createVNode(unref3(FIcon), { name: "bars" }),
          _cache[0] || (_cache[0] = createTextVNode()),
          createElementVNode("span", _hoisted_1$6, toDisplayString(__props.column.text(__props.row)), 1)
        ], 512),
        _cache[1] || (_cache[1] = createTextVNode()),
        createVNode(unref3(FContextMenu), {
          "is-open": isOpen.value,
          items: menuitems.value,
          anchor: (_buttonRef$value = buttonRef.value) !== null && _buttonRef$value !== void 0 ? _buttonRef$value : void 0,
          onClose,
          onSelect,
          onFocusout
        }, null, 8, [
          "is-open",
          "items",
          "anchor"
        ])
      ], 2);
    };
  }
});
var ITableRowheader_default = /* @__PURE__ */ defineComponent2({
  __name: "ITableRowheader",
  props: {
    row: {},
    column: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("th", {
        ref: "th",
        class: "table-ng__cell table-ng__cell--rowheader",
        scope: "row"
      }, toDisplayString(__props.column.text(__props.row)), 513);
    };
  }
});
var _hoisted_1$5 = { class: "table-ng__editable" };
var _hoisted_2$3 = { class: "table-ng__editable__text" };
var _hoisted_3$3 = [
  "aria-expanded",
  "aria-controls",
  "aria-activedescendant",
  "aria-label"
];
var _hoisted_4$3 = { class: "table-ng__editable__text" };
var ITableSelect_default = /* @__PURE__ */ defineComponent2({
  __name: "ITableSelect",
  props: {
    row: {},
    column: {}
  },
  setup(__props) {
    const editing = ref3(false);
    const editRef = useTemplateRef("edit");
    const { stopEdit: stopEdit2 } = useStartStopEdit();
    const viewValue = ref3(__props.column.selected(__props.row));
    const ariaLabel = computed3(() => {
      const value = __props.column.label(__props.row);
      return value.length > 0 ? value : void 0;
    });
    const dropdownId = ElementIdService.generateElementId();
    const dropdownIsOpen = ref3(false);
    const activeOptionId = ElementIdService.generateElementId();
    const activeOption = ref3(null);
    async function onCellKeyDown(e) {
      if (e.code === "Enter" || e.code === "NumpadEnter" || e.code === "Space") await startEditing(e);
    }
    async function onCellClick(e) {
      if (editing.value) return;
      await startEditing(e);
    }
    async function startEditing(e) {
      assertRef(editRef);
      e.preventDefault();
      editing.value = true;
      await nextTick3();
      editRef.value.tabIndex = 0;
      editRef.value.focus();
      await openDropdown();
    }
    async function selectDropdownOption(value) {
      assertRef(editRef);
      assertSet(stopEdit2);
      const oldValue = viewValue.value;
      viewValue.value = value;
      __props.column.update(__props.row, value, oldValue);
      closeDropdown();
      await stopEdit2(editRef.value, "enter");
    }
    async function onDropdownClose() {
      assertSet(stopEdit2);
      assertRef(editRef);
      closeDropdown();
      await stopEdit2(editRef.value, "blur");
    }
    async function openDropdown() {
      dropdownIsOpen.value = true;
      await nextTick3();
      if (viewValue.value) activeOption.value = viewValue.value;
      else activeOption.value = null;
      assertRef(editRef);
      editRef.value.focus();
    }
    function closeDropdown() {
      dropdownIsOpen.value = false;
      editing.value = false;
      activeOption.value = null;
    }
    function setNextOption() {
      if (activeOption.value) {
        const index = __props.column.options.indexOf(activeOption.value);
        if (index === __props.column.options.length - 1) activeOption.value = __props.column.options[0];
        else activeOption.value = __props.column.options[index + 1];
      } else activeOption.value = __props.column.options[0];
    }
    function setPreviousOption() {
      if (activeOption.value) {
        const index = __props.column.options.indexOf(activeOption.value);
        if (index === 0) activeOption.value = __props.column.options.at(-1);
        else activeOption.value = __props.column.options[index - 1];
      } else activeOption.value = __props.column.options.at(-1);
    }
    async function onEditKeyDown(e) {
      var _activeOption$value;
      assertRef(editRef);
      assertSet(stopEdit2);
      switch (e.code) {
        case "Escape":
          e.preventDefault();
          closeDropdown();
          await stopEdit2(editRef.value, "escape");
          break;
        case "Enter":
        case "NumpadEnter":
          e.preventDefault();
          await selectDropdownOption((_activeOption$value = activeOption.value) !== null && _activeOption$value !== void 0 ? _activeOption$value : viewValue.value);
          await stopEdit2(editRef.value, "enter");
          break;
        case "Tab":
          e.preventDefault();
          closeDropdown();
          await stopEdit2(editRef.value, e.shiftKey ? "shift-tab" : "tab");
          break;
        case "ArrowDown":
          e.preventDefault();
          setNextOption();
          break;
        case "ArrowUp":
          e.preventDefault();
          setPreviousOption();
          break;
        case "Space":
          e.preventDefault();
          break;
        default:
          break;
      }
    }
    async function onEditBlur(event) {
      if (event.relatedTarget && event.relatedTarget instanceof HTMLElement && event.relatedTarget.closest(".combobox__listbox")) return;
      assertSet(stopEdit2);
      assertRef(editRef);
      closeDropdown();
      await nextTick3();
      await stopEdit2(editRef.value, "blur");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("td", {
        class: "table-ng__cell table-ng__cell--select",
        tabindex: "-1",
        onKeydown: onCellKeyDown,
        onClick: withModifiers(onCellClick, ["stop"])
      }, [
        withDirectives(createElementVNode("div", _hoisted_1$5, [createElementVNode("span", _hoisted_2$3, toDisplayString(viewValue.value), 1)], 512), [[vShow, !editing.value]]),
        _cache[3] || (_cache[3] = createTextVNode()),
        withDirectives(createElementVNode("div", {
          ref: "edit",
          role: "combobox",
          tabindex: "-1",
          "aria-expanded": dropdownIsOpen.value,
          "aria-controls": dropdownIsOpen.value ? unref3(dropdownId) : void 0,
          "aria-activedescendant": dropdownIsOpen.value ? unref3(activeOptionId) : void 0,
          "aria-autocomplete": "list",
          class: "table-ng__editable",
          "aria-label": ariaLabel.value,
          onClick: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["stop"])),
          onDblclick: _cache[1] || (_cache[1] = withModifiers(() => {
          }, ["prevent"])),
          onKeydown: withModifiers(onEditKeyDown, ["stop"]),
          onFocusout: _cache[2] || (_cache[2] = (e) => onEditBlur(e))
        }, [createElementVNode("span", _hoisted_4$3, toDisplayString(viewValue.value), 1)], 40, _hoisted_3$3), [[vShow, editing.value]]),
        _cache[4] || (_cache[4] = createTextVNode()),
        withDirectives(createVNode(unref3(IComboboxDropdown), {
          id: unref3(dropdownId),
          "is-open": dropdownIsOpen.value,
          options: __props.column.options,
          "active-option": activeOption.value,
          "active-option-id": unref3(activeOptionId),
          "input-node": editRef.value,
          onSelect: selectDropdownOption,
          onClose: onDropdownClose
        }, null, 8, [
          "id",
          "is-open",
          "options",
          "active-option",
          "active-option-id",
          "input-node"
        ]), [[vShow, editing.value]])
      ], 32);
    };
  }
});
function defaultTnumValue(type) {
  return [
    "text:bankAccountNumber",
    "text:bankgiro",
    "text:clearingNumber",
    "text:currency",
    "text:number",
    "text:organisationsnummer",
    "text:percent",
    "text:personnummer",
    "text:phoneNumber",
    "text:plusgiro",
    "text:postalCode"
  ].includes(type);
}
var defaultLabelFn = () => "";
function getLabelFn(fn) {
  if (fn) return fn;
  return defaultLabelFn;
}
var defaultUpdateFn = () => void 0;
function getUpdateFn(fn, key) {
  if (fn) return fn;
  if (key) return (row, value) => {
    row[key] = value;
  };
  return defaultUpdateFn;
}
function getValueFn(fn, key, coerce, defaultValue) {
  if (fn) return fn;
  if (key) return (row) => {
    var _row$key;
    return coerce((_row$key = row[key]) !== null && _row$key !== void 0 ? _row$key : defaultValue);
  };
  return () => defaultValue;
}
function isColumnTypeNumber(column) {
  const type = column.type;
  return numberTypes.includes(type);
}
function addInputValidators(inputElement, type) {
  ValidationService.addValidatorsToElement(inputElement, inputFieldConfig[type].validationConfig, true);
}
function isAlphanumeric(e) {
  return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
}
var _hoisted_1$4 = ["id", "aria-invalid"];
var _hoisted_2$2 = { class: "table-ng__editable__text" };
var _hoisted_3$2 = {
  key: 0,
  class: "sr-only"
};
var _hoisted_4$2 = [
  "id",
  "aria-label",
  "aria-hidden"
];
var _hoisted_5$2 = {
  ref: "arrowAnchor",
  "aria-hidden": "true"
};
var ITableText_default = /* @__PURE__ */ defineComponent2({
  __name: "ITableText",
  props: {
    row: {},
    column: {},
    activeErrorAnchor: { default: () => void 0 }
  },
  emits: ["onError", "closeError"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const viewValue = ref3("");
    const inEdit = ref3(false);
    const cellId = ElementIdService.generateElementId();
    const inputId = ElementIdService.generateElementId();
    const validity = ref3({
      isValid: true,
      validationMessage: "",
      validityMode: "INITIAL"
    });
    let validationFacade = {
      validateElement: () => Promise.resolve({
        isValid: true,
        error: "",
        isSubmitted: false,
        isTouched: false
      }),
      dispatchComponentValidityEvent: () => void 0
    };
    const hasError = computed3(() => validity.value.validityMode === "ERROR");
    const viewModeAriaInvalid = computed3(() => !inEdit.value && hasError.value ? true : void 0);
    const viewModeErrorMessage = computed3(() => !inEdit.value && hasError.value ? validity.value.validationMessage : void 0);
    let initialValidity = { ...validity.value };
    const divClasses = computed3(() => {
      return {
        "table-ng__editable": true,
        "table-ng__editable__numeric": __props.column.tnum
      };
    });
    const wrapperClasses = computed3(() => {
      return {
        "table-ng__cell": true,
        "table-ng__cell--text": true,
        "table-ng__cell--valid": !hasError.value,
        "table-ng__cell--error": hasError.value,
        "table-ng__cell--align-left": __props.column.align === "left",
        "table-ng__cell--align-right": __props.column.align === "right"
      };
    });
    const staticClasses = computed3(() => {
      return {
        "table-ng__cell": true,
        "table-ng__cell--static": true,
        "table-ng__cell--align-left": __props.column.align === "left",
        "table-ng__cell--align-right": __props.column.align === "right"
      };
    });
    const inputClasses = computed3(() => {
      return { "table-ng__textedit": true };
    });
    const ariaLabel = computed3(() => {
      let value = __props.column.label(__props.row);
      if (hasError.value) value = `${value} ${validity.value.validationMessage}`;
      return value.length > 0 ? value : void 0;
    });
    const columnAttributes = computed3(() => {
      if (__props.column.attributes && typeof __props.column.attributes === "function") return __props.column.attributes(__props.row);
      else return __props.column.attributes;
    });
    const configAttributes = computed3(() => {
      let decimals = void 0;
      if (isColumnTypeNumber(__props.column)) decimals = __props.column.decimals;
      return inputFieldConfig[__props.column.type].attributes({ decimals });
    });
    const tdElement = useTemplateRef("td");
    const inputElement = useTemplateRef("input");
    const arrowAnchorElement = useTemplateRef("arrowAnchor");
    const { stopEdit: stopEdit2 } = useStartStopEdit();
    const isHovered = useElementHover(tdElement, { delayEnter: 200 });
    const { focused } = useFocusWithin(tdElement);
    const openPopupError = computed3(() => {
      if (!tdElement.value) return false;
      return tdElement.value === __props.activeErrorAnchor;
    });
    let initialViewValue = "";
    let pendingStopEditReason = null;
    function setUpValidation(el) {
      addInputValidators(el, __props.column.type);
      ValidationService.addValidatorsToElement(el, __props.column.validation);
      validationFacade = {
        validateElement: (el2) => ValidationService.validateElement(el2),
        dispatchComponentValidityEvent
      };
    }
    function setUpFakeValidation(el) {
      assertRef(inputElement);
      const input = inputElement.value;
      function emitFakeValidity(nativeEvent) {
        onValidity(new CustomEvent("validity", { detail: {
          isValid: true,
          nativeEvent,
          validityMode: "INITIAL",
          validationMessage: "",
          target: input,
          elementId: String(input.id)
        } }));
      }
      for (const nativeEvent of ["change", "blur"]) useEventListener(el, nativeEvent, () => {
        emitFakeValidity(nativeEvent);
      });
      validationFacade = {
        validateElement: () => {
          emitFakeValidity("validate");
          return Promise.resolve({
            isValid: true,
            error: "",
            isSubmitted: false,
            isTouched: false
          });
        },
        dispatchComponentValidityEvent: () => void 0
      };
      useEventListener(el, "input", onPendingValidity);
      useEventListener(el, "component-validity", (e) => {
        e.stopPropagation();
      });
    }
    onMounted3(() => {
      if (inputElement.value) {
        viewValue.value = fromColumnValue();
        if (__props.column.hasValidation) setUpValidation(inputElement.value);
        else setUpFakeValidation(inputElement.value);
        nextTick3().then(() => validationFacade.validateElement(inputElement.value));
      }
    });
    watchEffect3(() => {
      if (hasError.value) {
        var _tdElement$value, _arrowAnchorElement$v;
        emit("onError", {
          anchor: (_tdElement$value = tdElement.value) !== null && _tdElement$value !== void 0 ? _tdElement$value : void 0,
          arrowAnchor: (_arrowAnchorElement$v = arrowAnchorElement.value) !== null && _arrowAnchorElement$v !== void 0 ? _arrowAnchorElement$v : void 0,
          message: validity.value.validationMessage,
          hasFocus: focused.value,
          hasHover: isHovered.value,
          inEdit: inEdit.value
        });
      } else {
        var _tdElement$value2, _arrowAnchorElement$v2;
        emit("closeError", {
          anchor: (_tdElement$value2 = tdElement.value) !== null && _tdElement$value2 !== void 0 ? _tdElement$value2 : void 0,
          arrowAnchor: (_arrowAnchorElement$v2 = arrowAnchorElement.value) !== null && _arrowAnchorElement$v2 !== void 0 ? _arrowAnchorElement$v2 : void 0,
          message: validity.value.validationMessage,
          hasFocus: focused.value,
          hasHover: isHovered.value,
          inEdit: inEdit.value
        });
      }
    });
    function onStartEdit(value) {
      if (inEdit.value) return;
      inEdit.value = true;
      assertRef(tdElement);
      assertRef(inputElement);
      const { width } = tdElement.value.getBoundingClientRect();
      initialViewValue = viewValue.value;
      initialValidity = { ...validity.value };
      viewValue.value = value;
      tdElement.value.style.setProperty("width", `${String(width)}px`);
      inputElement.value.tabIndex = 0;
      inputElement.value.focus();
    }
    function onStopEdit(options) {
      const { reason } = options;
      inEdit.value = false;
      assertRef(inputElement);
      inputElement.value.tabIndex = -1;
      assertRef(tdElement);
      tdElement.value.style.removeProperty("width");
      if (reason === "blur") tdElement.value.tabIndex = 0;
      stopEdit2(inputElement.value, reason);
    }
    function fromColumnValue() {
      assertRef(validity);
      const value = __props.column.value(__props.row);
      if (validity.value.isValid) {
        var _props$column$format;
        return (_props$column$format = __props.column.formatter(value)) !== null && _props$column$format !== void 0 ? _props$column$format : value.toString();
      }
      return value.toString();
    }
    function toColumnValue(value) {
      assertRef(validity);
      if (validity.value.isValid) {
        var _props$column$parser;
        return (_props$column$parser = __props.column.parser(value)) !== null && _props$column$parser !== void 0 ? _props$column$parser : value;
      }
      return value;
    }
    function updateColumnValue() {
      const oldValue = __props.column.value(__props.row);
      const newValue = toColumnValue(viewValue.value);
      if (oldValue !== newValue) __props.column.update(__props.row, newValue, oldValue);
    }
    function onClickCell(event) {
      assertRef(tdElement);
      if (tdElement.value.contains(event.target)) onStartEdit(fromColumnValue());
    }
    function onViewingKeydown(event) {
      if (isAlphanumeric(event)) {
        event.stopPropagation();
        onStartEdit("");
      }
      if (event.key === "Enter") {
        event.stopPropagation();
        onStartEdit(fromColumnValue());
      }
    }
    function onEditingKeydown(event) {
      assertRef(inputElement);
      event.stopPropagation();
      switch (event.key) {
        case "Enter":
          if (viewValue.value === initialViewValue) {
            validity.value = { ...initialValidity };
            onStopEdit({ reason: "enter" });
          } else {
            pendingStopEditReason = "enter";
            validationFacade.validateElement(inputElement.value);
          }
          break;
        case "Escape":
          onStopEdit({ reason: "escape" });
          viewValue.value = initialViewValue;
          inputElement.value.value = initialViewValue;
          validationFacade.validateElement(inputElement.value);
          break;
        case "Tab":
          pendingStopEditReason = event.shiftKey ? "shift-tab" : "tab";
          break;
      }
    }
    function onKeydown(event) {
      if (document.activeElement === inputElement.value) onEditingKeydown(event);
      else onViewingKeydown(event);
    }
    function updateValidity(eventDetail) {
      const { isValid, validationMessage, validityMode } = eventDetail;
      validity.value = {
        isValid,
        validationMessage,
        validityMode
      };
      assertRef(inputElement);
      validationFacade.dispatchComponentValidityEvent(inputElement.value, {
        ...eventDetail,
        errorMessage: validationMessage,
        focusElementId: cellId
      });
    }
    function onValidity(event) {
      const nativeEvent = event.detail.nativeEvent;
      const reason = pendingStopEditReason !== null && pendingStopEditReason !== void 0 ? pendingStopEditReason : nativeEvent === "blur" ? "blur" : null;
      pendingStopEditReason = null;
      if (inEdit.value && reason) {
        onStopEdit({ reason });
        updateValidity(event.detail);
        updateColumnValue();
        return;
      }
      if (nativeEvent === "input") {
        updateValidity(event.detail);
        updateColumnValue();
        return;
      }
      if (nativeEvent === "validate") updateValidity(event.detail);
    }
    function onPendingValidity() {
      assertRef(validity);
      validity.value.validityMode = "INITIAL";
    }
    return (_ctx, _cache) => {
      return __props.column.editable(__props.row) ? (openBlock(), createElementBlock("td", {
        key: 0,
        id: unref3(cellId),
        ref: "td",
        tabindex: "-1",
        class: normalizeClass(wrapperClasses.value),
        "aria-invalid": viewModeAriaInvalid.value,
        onClick: withModifiers(onClickCell, ["stop"]),
        onKeydown
      }, [
        createElementVNode("div", { class: normalizeClass(divClasses.value) }, [
          createElementVNode("span", _hoisted_2$2, toDisplayString(fromColumnValue()), 1),
          _cache[2] || (_cache[2] = createTextVNode()),
          viewModeErrorMessage.value ? (openBlock(), createElementBlock("span", _hoisted_3$2, toDisplayString(viewModeErrorMessage.value), 1)) : createCommentVNode("", true),
          _cache[3] || (_cache[3] = createTextVNode()),
          withDirectives(createElementVNode("input", mergeProps({
            id: unref3(inputId),
            ref: "input",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => viewValue.value = $event),
            class: inputClasses.value,
            type: "text",
            maxlength: "40",
            tabindex: "-1",
            "aria-label": ariaLabel.value
          }, {
            ...configAttributes.value,
            ...columnAttributes.value
          }, {
            "aria-hidden": !inEdit.value,
            onValidity,
            onPendingValidity
          }), null, 16, _hoisted_4$2), [[vModelText, viewValue.value]]),
          _cache[4] || (_cache[4] = createTextVNode()),
          createElementVNode("span", _hoisted_5$2, null, 512)
        ], 2),
        _cache[5] || (_cache[5] = createTextVNode()),
        createVNode(unref3(IPopupError), {
          anchor: tdElement.value,
          "is-open": openPopupError.value,
          "error-message": validity.value.validationMessage,
          "arrow-anchor": arrowAnchorElement.value,
          layout: "f-table"
        }, null, 8, [
          "anchor",
          "is-open",
          "error-message",
          "arrow-anchor"
        ])
      ], 42, _hoisted_1$4)) : (openBlock(), createElementBlock("td", {
        key: 1,
        ref: "td",
        tabindex: "-1",
        class: normalizeClass(staticClasses.value),
        onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(() => {
        }, ["prevent"]), ["space"]))
      }, toDisplayString(fromColumnValue()), 35));
    };
  }
});
function normalizeAnchorColumn(column) {
  return {
    type: "anchor",
    text: getValueFn(column.text, column.key, String, ""),
    href: column.href
  };
}
function getSortable(column) {
  var _column$sort, _column$key;
  return ((_column$sort = column.sort) !== null && _column$sort !== void 0 ? _column$sort : !!column.key) ? (_column$key = column.key) !== null && _column$key !== void 0 ? _column$key : null : null;
}
function normalizeBaseColumn(column) {
  var _column$enabled;
  const id = /* @__PURE__ */ Symbol();
  const header = toRef2(column.header);
  const description = column.description !== void 0 ? toRef2(column.description) : ref3("");
  const size = column.size !== void 0 ? toRef2(column.size) : ref3("grow");
  return {
    id,
    header,
    description,
    sortable: getSortable(column),
    size,
    enabled: (_column$enabled = column.enabled) !== null && _column$enabled !== void 0 ? _column$enabled : true
  };
}
function normalizeButtonColumn(column) {
  var _column$icon;
  return {
    type: "button",
    text: getValueFn(column.text, column.key, String, ""),
    onClick: column.onClick,
    icon: (_column$icon = column.icon) !== null && _column$icon !== void 0 ? _column$icon : null,
    iconLibrary: column.iconLibrary
  };
}
function normalizeCheckboxColumn(column) {
  return {
    type: "checkbox",
    label: getLabelFn(column.label),
    checked: getValueFn(column.checked, column.key, Boolean, false),
    update: getUpdateFn(column.update, column.key)
  };
}
function noop2() {
}
function normalizeMenuColumn(column) {
  var _column$actions;
  return {
    type: "menu",
    text: getValueFn(column.text, void 0, String, ""),
    actions: ((_column$actions = column.actions) !== null && _column$actions !== void 0 ? _column$actions : []).map((it) => {
      var _it$icon, _it$onClick;
      return {
        label: it.label,
        icon: (_it$icon = it.icon) !== null && _it$icon !== void 0 ? _it$icon : null,
        onClick: (_it$onClick = it.onClick) !== null && _it$onClick !== void 0 ? _it$onClick : noop2
      };
    })
  };
}
function normalizeNumberColumn(column) {
  var _column$parser, _column$formatter, _column$tnum, _column$align, _column$validation;
  const type = column.type;
  const config = inputFieldConfig[type];
  const parser = (_column$parser = column.parser) !== null && _column$parser !== void 0 ? _column$parser : config.parser.bind(column);
  const formatter = (_column$formatter = column.formatter) !== null && _column$formatter !== void 0 ? _column$formatter : config.formatter.bind(column);
  const decimals = type === "text:currency" ? 0 : column.decimals;
  return {
    type,
    label: getLabelFn(column.label),
    decimals,
    tnum: (_column$tnum = column.tnum) !== null && _column$tnum !== void 0 ? _column$tnum : defaultTnumValue(type),
    align: (_column$align = column.align) !== null && _column$align !== void 0 ? _column$align : "right",
    attributes: column.attributes,
    value: getValueFn(column.value, column.key, String, ""),
    update: getUpdateFn(column.update, column.key),
    editable: typeof column.editable === "function" ? column.editable : () => {
      var _column$editable;
      return Boolean((_column$editable = column.editable) !== null && _column$editable !== void 0 ? _column$editable : false);
    },
    validation: (_column$validation = column.validation) !== null && _column$validation !== void 0 ? _column$validation : {},
    hasValidation: column.type.startsWith("text:") || Boolean(column.validation),
    formatter,
    parser
  };
}
function normalizeRenderColumn(column) {
  return {
    type: void 0,
    render: column.render,
    sortable: null
  };
}
function normalizeRowHeaderColumn(column) {
  return {
    type: "rowheader",
    text: getValueFn(column.text, column.key, String, "")
  };
}
function normalizeSelectColumn(column) {
  return {
    type: "select",
    label: getLabelFn(column.label),
    selected: getValueFn(column.selected, column.key, String, ""),
    update: getUpdateFn(column.update, column.key),
    options: column.options
  };
}
function normalizeSimpleColumn(column) {
  return {
    type: "text",
    label: () => "",
    tnum: false,
    align: "left",
    value: getValueFn(column.value, column.key, String, ""),
    update() {
    },
    editable: () => false,
    validation: {},
    hasValidation: false,
    formatter: (value) => value,
    parser: (value) => value
  };
}
function normalizeTextColumn(column) {
  var _column$parser, _column$formatter, _column$tnum, _column$align, _column$validation;
  const type = column.type;
  const config = inputFieldConfig[type];
  const parser = (_column$parser = column.parser) !== null && _column$parser !== void 0 ? _column$parser : config.parser;
  const formatter = (_column$formatter = column.formatter) !== null && _column$formatter !== void 0 ? _column$formatter : config.formatter;
  return {
    type,
    tnum: (_column$tnum = column.tnum) !== null && _column$tnum !== void 0 ? _column$tnum : defaultTnumValue(type),
    align: (_column$align = column.align) !== null && _column$align !== void 0 ? _column$align : "left",
    attributes: column.attributes,
    label: getLabelFn(column.label),
    value: getValueFn(column.value, column.key, String, ""),
    update: getUpdateFn(column.update, column.key),
    editable: typeof column.editable === "function" ? column.editable : () => {
      var _column$editable;
      return Boolean((_column$editable = column.editable) !== null && _column$editable !== void 0 ? _column$editable : false);
    },
    validation: (_column$validation = column.validation) !== null && _column$validation !== void 0 ? _column$validation : {},
    hasValidation: column.type.startsWith("text:") || Boolean(column.validation),
    formatter,
    parser
  };
}
function normalizeTableColumn(column) {
  const base = normalizeBaseColumn(column);
  if ("render" in column) return Object.freeze({
    ...normalizeRenderColumn(column),
    ...base
  });
  switch (column.type) {
    case "checkbox":
      return Object.freeze({
        ...normalizeCheckboxColumn(column),
        ...base,
        component: ITableCheckbox_default
      });
    case "text:currency":
    case "text:number":
    case "text:percent":
      return Object.freeze({
        ...normalizeNumberColumn(column),
        ...base,
        component: ITableText_default
      });
    case "text":
    case "text:bankAccountNumber":
    case "text:bankgiro":
    case "text:clearingNumber":
    case "text:date":
    case "text:email":
    case "text:organisationsnummer":
    case "text:personnummer":
    case "text:phoneNumber":
    case "text:plusgiro":
    case "text:postalCode":
      return Object.freeze({
        ...normalizeTextColumn(column),
        ...base,
        component: ITableText_default
      });
    case "rowheader":
      return Object.freeze({
        ...normalizeRowHeaderColumn(column),
        ...base,
        component: ITableRowheader_default
      });
    case "anchor":
      return Object.freeze({
        ...normalizeAnchorColumn(column),
        ...base,
        component: ITableAnchor_default
      });
    case "button":
      return Object.freeze({
        ...normalizeButtonColumn(column),
        ...base,
        component: ITableButton_default
      });
    case "select":
      return Object.freeze({
        ...normalizeSelectColumn(column),
        ...base,
        component: ITableSelect_default
      });
    case "menu":
      return Object.freeze({
        ...normalizeMenuColumn(column),
        ...base,
        component: ITableMenu_default
      });
    case void 0:
      return Object.freeze({
        ...normalizeSimpleColumn(column),
        ...base,
        component: ITableText_default
      });
  }
}
function defineTableColumns(columns) {
  return columns;
}
function normalizeTableColumns(columns) {
  return columns.map((column) => {
    return normalizeTableColumn(column);
  });
}
function usePopupError() {
  const errorAnchor = ref3(void 0);
  const errorArrowAnchor = ref3(void 0);
  const errorMessage = ref3(void 0);
  const activeErrorAnchor = ref3(void 0);
  async function onPopupError(popupError) {
    const { anchor, arrowAnchor, hasFocus, hasHover } = popupError;
    if (!anchor || !arrowAnchor) return;
    if (hasFocus || hasHover) await open(popupError);
    else onClosePopupError(popupError);
  }
  async function open(popupError) {
    const { message, anchor, arrowAnchor } = popupError;
    if (!anchor || !arrowAnchor) return;
    activeErrorAnchor.value = void 0;
    errorMessage.value = message;
    errorAnchor.value = anchor;
    errorArrowAnchor.value = arrowAnchor;
    await nextTick3();
    activeErrorAnchor.value = anchor;
  }
  function onClosePopupError(popupError) {
    var _errorAnchor$value;
    if (!popupError) return;
    const { anchor } = popupError;
    if (anchor?.isSameNode((_errorAnchor$value = errorAnchor.value) !== null && _errorAnchor$value !== void 0 ? _errorAnchor$value : null)) activeErrorAnchor.value = void 0;
  }
  return {
    onPopupError,
    onClosePopupError,
    errorAnchor,
    errorArrowAnchor,
    errorMessage,
    activeErrorAnchor
  };
}
var require_array_from_constructor_and_list = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var lengthOfArrayLike = require_length_of_array_like();
  module.exports = function(Constructor, list, $length) {
    var index = 0;
    var length = arguments.length > 2 ? $length : lengthOfArrayLike(list);
    var result = new Constructor(length);
    while (length > index) result[index] = list[index++];
    return result;
  };
}));
var require_get_built_in_prototype_method = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var globalThis2 = require_global_this();
  module.exports = function(CONSTRUCTOR, METHOD) {
    var Constructor = globalThis2[CONSTRUCTOR];
    var Prototype = Constructor && Constructor.prototype;
    return Prototype && Prototype[METHOD];
  };
}));
var require_es_array_to_sorted = /* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var uncurryThis = require_function_uncurry_this();
  var aCallable = require_a_callable();
  var toIndexedObject = require_to_indexed_object();
  var arrayFromConstructorAndList = require_array_from_constructor_and_list();
  var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
  var addToUnscopables = require_add_to_unscopables();
  var $Array = Array;
  var sort = uncurryThis(getBuiltInPrototypeMethod("Array", "sort"));
  $({
    target: "Array",
    proto: true
  }, { toSorted: function toSorted(compareFn) {
    if (compareFn !== void 0) aCallable(compareFn);
    return sort(arrayFromConstructorAndList($Array, toIndexedObject(this)), compareFn);
  } });
  addToUnscopables("toSorted");
}));
var require_es_iterator_some = /* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var call = require_function_call();
  var iterate = require_iterate();
  var aCallable = require_a_callable();
  var anObject = require_an_object();
  var getIteratorDirect = require_get_iterator_direct();
  var iteratorClose = require_iterator_close();
  var someWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error()("some", TypeError);
  $({
    target: "Iterator",
    proto: true,
    real: true,
    forced: someWithoutClosingOnEarlyError
  }, { some: function some(predicate) {
    anObject(this);
    try {
      aCallable(predicate);
    } catch (error) {
      iteratorClose(this, "throw", error);
    }
    if (someWithoutClosingOnEarlyError) return call(someWithoutClosingOnEarlyError, this, predicate);
    var record = getIteratorDirect(this);
    var counter = 0;
    return iterate(record, function(value, stop) {
      if (predicate(value, counter++)) return stop();
    }, {
      IS_RECORD: true,
      INTERRUPTED: true
    }).stopped;
  } });
}));
require_es_array_to_sorted();
require_es_iterator_some();
function rowKey(row) {
  var _findItemIdentifier;
  return (_findItemIdentifier = findItemIdentifier(row)) !== null && _findItemIdentifier !== void 0 ? _findItemIdentifier : "";
}
function useSelectable(options) {
  const { selectable, selectedRows, rows } = options;
  if (!selectable) return {
    selectableHeaderState: () => false,
    toggleSelectableHeader: () => void 0,
    selectableRowState: () => false,
    toggleSelectableRow: () => void 0
  };
  const isIndeterminate = computed3(() => {
    return selectedRows.value.length > 0 && selectedRows.value.length < toValue2(rows).length;
  });
  const isAllRowsSelected = computed3(() => {
    return selectedRows.value.length > 0 && selectedRows.value.length === toValue2(rows).length;
  });
  function selectableHeaderState() {
    return isIndeterminate.value ? "indeterminate" : isAllRowsSelected.value;
  }
  function toggleSelectableHeader() {
    if (isAllRowsSelected.value) selectedRows.value = [];
    else selectedRows.value = [...toValue2(rows)];
  }
  function toggleSelectableRow(row) {
    assertRef(selectedRows);
    if (selectable === "single") selectedRows.value = [row];
    else {
      const index = selectedRows.value.indexOf(row);
      if (index === -1) selectedRows.value.push(row);
      else selectedRows.value.splice(index, 1);
    }
  }
  function selectableRowState(row) {
    const key = rowKey(row);
    return selectedRows.value.some((selectedRow) => rowKey(selectedRow) === key);
  }
  let oldKeys = void 0;
  watch3(() => toValue2(rows), (newValue) => {
    const newKeys = newValue.map(rowKey).toSorted();
    if (!oldKeys) {
      oldKeys = newKeys;
      return;
    }
    const compareKeys = oldKeys;
    oldKeys = newKeys;
    if (newKeys.length !== compareKeys.length) {
      selectedRows.value = [];
      return;
    }
    if (compareKeys.join(",") !== newKeys.join(",")) selectedRows.value = [];
  }, {
    deep: 1,
    immediate: true
  });
  return {
    toggleSelectableHeader,
    toggleSelectableRow,
    selectableHeaderState,
    selectableRowState
  };
}
function matching(needle) {
  const id = getItemIdentifier(needle.row);
  return (item) => getItemIdentifier(item.row) === id;
}
function useTabstop(tableRef, metaRows) {
  let pendingRowRemoval = false;
  const renderOptions = ref3({
    fallbackToFirstCell: false,
    focus: false
  });
  function fallbackToFirstCell(newRows, oldRows, focus) {
    assertRef(tableRef);
    const needle = newRows[0];
    const newFirstRowOldIndex = oldRows.findIndex(matching(needle));
    if (newFirstRowOldIndex !== -1) activateCell(getCellTarget(tableRef.value, newFirstRowOldIndex + 1, 0), { focus });
    else {
      renderOptions.value.focus = focus;
      renderOptions.value.fallbackToFirstCell = true;
    }
  }
  watch3(metaRows, (newRows, oldRows) => {
    const tabFallback = pendingRowRemoval ? "sticky" : "first-cell";
    pendingRowRemoval = false;
    assertRef(tableRef);
    const oldTabstopElement = tableRef.value.querySelector(`[tabindex="0"]`);
    if (!oldTabstopElement) {
      renderOptions.value.fallbackToFirstCell = true;
      renderOptions.value.focus = false;
      return;
    }
    assertSet(oldTabstopElement);
    const oldTabstopFocused = oldTabstopElement === document.activeElement;
    if (oldTabstopElement.closest("th")) return;
    if (oldRows.length === 0 || newRows.length === 0) {
      renderOptions.value.fallbackToFirstCell = true;
      renderOptions.value.focus = oldTabstopFocused;
      return;
    }
    const oldTabstopTd = oldTabstopElement.closest("td");
    assertSet(oldTabstopTd);
    const oldTabstopTr = oldTabstopTd.parentElement;
    const needle = oldRows[oldTabstopTr.rowIndex - 1];
    const isBeingRemoved = !newRows.some(matching(needle));
    if (oldTabstopFocused && !isBeingRemoved) return;
    if (!isBeingRemoved) if (oldTabstopFocused) return;
    else {
      fallbackToFirstCell(newRows, oldRows, false);
      return;
    }
    if (tabFallback === "first-cell") {
      fallbackToFirstCell(newRows, oldRows, oldTabstopFocused);
      return;
    }
    if (oldTabstopTr.rowIndex === 1) {
      const needle2 = oldRows.at(1);
      if (needle2 !== void 0 && newRows.some(matching(needle2))) {
        const { cell } = getVerticalNavIndex(tableRef.value, {
          row: 1,
          cell: oldTabstopTd.cellIndex
        }, {
          row: 2,
          cell: oldTabstopTd.cellIndex
        });
        activateCell(getCellTarget(tableRef.value, 2, cell), { focus: true });
      } else fallbackToFirstCell(newRows, oldRows, true);
    } else {
      const needle2 = oldRows[oldTabstopTr.rowIndex - 2];
      if (newRows.some(matching(needle2))) {
        const { row, cell } = getVerticalNavIndex(tableRef.value, {
          row: oldTabstopTr.rowIndex,
          cell: oldTabstopTd.cellIndex
        }, {
          row: oldTabstopTr.rowIndex - 1,
          cell: oldTabstopTd.cellIndex
        });
        activateCell(getCellTarget(tableRef.value, row, cell), { focus: true });
      } else fallbackToFirstCell(newRows, oldRows, true);
    }
  });
  onUpdated2(() => {
    if (!renderOptions.value.fallbackToFirstCell) return;
    assertRef(tableRef);
    activateCell(getCellTarget(tableRef.value, 1, 0), { focus: renderOptions.value.focus });
    renderOptions.value.fallbackToFirstCell = false;
  });
  async function withTabstopBehaviour(behaviour, action) {
    if (behaviour === "row-removal") pendingRowRemoval = true;
    try {
      await action();
    } finally {
      pendingRowRemoval = false;
    }
  }
  return { withTabstopBehaviour };
}
var _hoisted_1$3 = ["role", "aria-rowcount"];
var _hoisted_2$1 = {
  key: 0,
  "data-test": "caption"
};
var _hoisted_3$1 = { key: 1 };
var _hoisted_4$1 = {
  class: "table-ng__row",
  "aria-rowindex": "1"
};
var _hoisted_5$1 = {
  key: 0,
  scope: "col",
  tabindex: "-1",
  class: "table-ng__column"
};
var _hoisted_6$1 = { key: 2 };
var _hoisted_7$1 = {
  key: 0,
  class: "table-ng__row--empty"
};
var _hoisted_8 = ["colspan"];
var _hoisted_9 = [
  "aria-level",
  "aria-rowindex",
  "aria-setsize",
  "aria-posinset",
  "aria-selected"
];
var _hoisted_10 = { key: 3 };
var _hoisted_11 = ["aria-rowindex"];
var _hoisted_12 = ["colspan"];
var FTable_default = /* @__PURE__ */ defineComponent2({
  __name: "FTable",
  props: /* @__PURE__ */ mergeModels({
    columns: {},
    rows: {},
    keyAttribute: { default: () => void 0 },
    rowClass: {
      type: Function,
      default: void 0
    },
    striped: { type: Boolean },
    disableDividers: { type: Boolean },
    selectable: { default: () => void 0 }
  }, {
    "selectedRows": { default: [] },
    "selectedRowsModifiers": {}
  }),
  emits: ["update:selectedRows"],
  setup(__props, { expose: __expose }) {
    const selectedRows = useModel(__props, "selectedRows");
    const $t = useTranslate();
    const { hasSlot } = useSlotUtils();
    const tableRef = useTemplateRef("table");
    const expandedKeys = ref3(/* @__PURE__ */ new Set());
    const expandableAttribute = computed3(() => {
      return getDatasetMetadata(__props.rows).nestedAttribute;
    });
    const keyedRows = computed3(() => setItemIdentifiers(__props.rows, __props.keyAttribute, expandableAttribute.value));
    const metaRows = computed3(() => getMetaRows(keyedRows.value, expandedKeys.value, expandableAttribute.value));
    const isTreegrid = computed3(() => Boolean(expandableAttribute.value));
    const role = computed3(() => isTreegrid.value ? "treegrid" : "grid");
    const hasCaption = computed3(() => {
      return hasSlot("caption", {}, { stripClasses: [] });
    });
    const isEmpty2 = computed3(() => {
      return metaRows.value.length === 0;
    });
    const ariaRowcount = computed3(() => {
      const footerRow = hasFooter.value ? 1 : 0;
      if (!hasColumns.value) return footerRow;
      return getBodyRowCount(keyedRows.value, expandableAttribute.value) + 1 + footerRow;
    });
    const fullColspan = computed3(() => {
      if (!hasColumns.value) return 0;
      let count = columns.value.length;
      if (isTreegrid.value) count += 1;
      if (__props.selectable) count += 1;
      return count;
    });
    const expandedColspan = computed3(() => {
      return fullColspan.value - 1;
    });
    const hasFooter = computed3(() => {
      return hasSlot("footer");
    });
    const columns = computed3(() => normalizeTableColumns(__props.columns).filter((col) => toValue2(col.enabled)));
    const hasColumns = computed3(() => columns.value.length > 0);
    const tableClasses = computed3(() => {
      return ["table-ng", {
        "table-ng--striped": __props.striped,
        "table-ng--divided": !__props.disableDividers
      }];
    });
    const slots = useSlots();
    const hasExpandableSlot = computed3(() => {
      return Boolean(slots.expandable);
    });
    async function stopEditHandler(element, reason) {
      stopEdit(element, reason);
    }
    provide2(stopEditKey, stopEditHandler);
    function getRowClass(row) {
      return typeof __props.rowClass === "function" ? __props.rowClass(row) : void 0;
    }
    function onToggleExpanded(key) {
      if (expandedKeys.value.has(key)) expandedKeys.value.delete(key);
      else expandedKeys.value.add(key);
    }
    function onKeydown(e) {
      maybeNavigateToCell(e);
      if (e.defaultPrevented || e.key !== "Enter" && e.key !== " ") return;
      if (!(e.target instanceof Element)) return;
      const cell = e.target.closest("td, th");
      if (!cell) return;
      const targetEl = activateCell(cell, { focus: true });
      if (!targetEl.contains(e.target)) {
        e.preventDefault();
        targetEl.click();
      }
    }
    function onClick(e) {
      const cell = e.target.closest("td, th");
      if (cell) {
        const targetEl = activateCell(cell, { focus: true });
        if (e.target instanceof Node && !targetEl.contains(e.target)) targetEl.click();
      }
    }
    function onTableFocusin(e) {
      assertRef(tableRef);
      for (const it of tableRef.value.querySelectorAll(`[tabindex="0"]`)) if (it !== e.target) it.setAttribute("tabindex", "-1");
    }
    function isInExpandable(el) {
      if (!el.parentElement) return false;
      return Boolean(el.parentElement.closest(".table-ng__custom-expandable"));
    }
    function onTableFocusout(e) {
      const { target, relatedTarget } = e;
      if (!(target instanceof HTMLElement && relatedTarget instanceof HTMLElement)) return;
      if (isInExpandable(target)) return;
      if (!tableRef.value) return;
      if (!tableRef.value.contains(relatedTarget)) {
        const cell = target.closest("td, th");
        if (cell) activateCell(cell, { focus: false });
      } else target.tabIndex = -1;
    }
    const { sort, registerCallbackOnSort, registerCallbackOnMount } = FSortFilterDatasetInjected();
    const sortableColumns = ref3([]);
    const sortedColumn = ref3("");
    const sortedAscending = ref3(false);
    function callbackSortableColumns(columnNames) {
      sortableColumns.value = columnNames;
    }
    function callbackOnSort(columnName, ascending) {
      sortedColumn.value = columnName;
      sortedAscending.value = ascending;
    }
    function isSortEnabled(column) {
      if (!column.sortable) return false;
      return sortableColumns.value.indexOf(String(column.sortable)) > -1;
    }
    function getSortOrder(column) {
      if (sortedColumn.value !== column.sortable) return "unsorted";
      else return sortedAscending.value ? "ascending" : "descending";
    }
    function onToggleSortOrder(sortable) {
      if (sortable === sortedColumn.value) if (sortedAscending.value) sort(sortable, false);
      else sort("", true);
      else sort(sortable, true);
    }
    function bindCellApiRef(ref5) {
      if (!isFTableCellApi(ref5)) return;
      const apiEl = toValue2(ref5.tabstopEl);
      if (!apiEl) return;
      const cell = apiEl.closest("td, th");
      assertSet(cell);
      cell[tableCellApiSymbol] = ref5;
    }
    function isAriaSelected(level = 1, row) {
      return level < 2 && selectableRowState(row);
    }
    const { onPopupError, onClosePopupError, activeErrorAnchor } = usePopupError();
    const { selectableHeaderState, toggleSelectableHeader, selectableRowState, toggleSelectableRow } = useSelectable({
      selectable: __props.selectable,
      selectedRows,
      rows: keyedRows
    });
    __expose(useTabstop(tableRef, metaRows));
    onMounted3(() => {
      assertRef(tableRef);
      registerCallbackOnMount(callbackSortableColumns);
      registerCallbackOnSort(callbackOnSort);
      setDefaultCellTarget(tableRef.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", {
        ref: "table",
        role: role.value,
        class: normalizeClass(tableClasses.value),
        "aria-rowcount": ariaRowcount.value,
        onFocusin: onTableFocusin,
        onFocusout: onTableFocusout,
        onClick,
        onKeydown
      }, [
        hasCaption.value ? (openBlock(), createElementBlock("caption", _hoisted_2$1, [renderSlot(_ctx.$slots, "caption")])) : createCommentVNode("", true),
        _cache[6] || (_cache[6] = createTextVNode()),
        hasColumns.value ? (openBlock(), createElementBlock("thead", _hoisted_3$1, [createElementVNode("tr", _hoisted_4$1, [
          isTreegrid.value ? (openBlock(), createElementBlock("th", _hoisted_5$1)) : createCommentVNode("", true),
          _cache[2] || (_cache[2] = createTextVNode()),
          __props.selectable ? (openBlock(), createBlock(ITableHeaderSelectable_default, {
            key: 1,
            ref: bindCellApiRef,
            state: unref3(selectableHeaderState)(),
            selectable: __props.selectable,
            onToggle: unref3(toggleSelectableHeader)
          }, null, 8, [
            "state",
            "selectable",
            "onToggle"
          ])) : createCommentVNode("", true),
          _cache[3] || (_cache[3] = createTextVNode()),
          (openBlock(true), createElementBlock(Fragment2, null, renderList(columns.value, (column) => {
            return openBlock(), createBlock(ITableHeader_default, {
              key: column.id,
              column,
              "sort-enabled": isSortEnabled(column),
              "sort-order": getSortOrder(column),
              scope: "col",
              onToggleSortOrder
            }, null, 8, [
              "column",
              "sort-enabled",
              "sort-order"
            ]);
          }), 128))
        ])])) : createCommentVNode("", true),
        _cache[7] || (_cache[7] = createTextVNode()),
        hasColumns.value ? (openBlock(), createElementBlock("tbody", _hoisted_6$1, [isEmpty2.value ? (openBlock(), createElementBlock("tr", _hoisted_7$1, [createElementVNode("td", {
          colspan: fullColspan.value,
          class: "table-ng__cell",
          onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(() => {
          }, ["prevent"]), ["space"]))
        }, [renderSlot(_ctx.$slots, "empty", {}, () => [createTextVNode(toDisplayString(unref3($t)("fkui.ftable.empty.text", "Tabellen \xE4r tom")), 1)])], 40, _hoisted_8)])) : (openBlock(true), createElementBlock(Fragment2, { key: 1 }, renderList(metaRows.value, ({ key, row, rowIndex, level, setsize, posinset, isExpandable, isExpanded }) => {
          return openBlock(), createElementBlock("tr", {
            key,
            class: normalizeClass(["table-ng__row", getRowClass(row)]),
            "aria-level": level,
            "aria-rowindex": rowIndex,
            "aria-setsize": setsize,
            "aria-posinset": posinset,
            "aria-selected": isAriaSelected(level, row)
          }, [
            isTreegrid.value ? (openBlock(), createBlock(ITableExpandButton_default, {
              key: 0,
              ref_for: true,
              ref: bindCellApiRef,
              "is-expandable": isExpandable,
              "is-expanded": isExpanded,
              "row-key": key,
              onToggle: onToggleExpanded
            }, null, 8, [
              "is-expandable",
              "is-expanded",
              "row-key"
            ])) : createCommentVNode("", true),
            _cache[5] || (_cache[5] = createTextVNode()),
            level > 1 && hasExpandableSlot.value ? (openBlock(), createBlock(ITableExpandable_default, {
              key: 1,
              colspan: expandedColspan.value
            }, {
              default: withCtx(() => [renderSlot(_ctx.$slots, "expandable", mergeProps({ ref_for: true }, { row }))]),
              _: 2
            }, 1032, ["colspan"])) : (openBlock(), createElementBlock(Fragment2, { key: 2 }, [
              __props.selectable ? (openBlock(), createBlock(ITableSelectable_default, {
                key: 0,
                ref_for: true,
                ref: bindCellApiRef,
                level,
                selectable: __props.selectable,
                state: unref3(selectableRowState)(row),
                row,
                onToggle: unref3(toggleSelectableRow)
              }, null, 8, [
                "level",
                "selectable",
                "state",
                "row",
                "onToggle"
              ])) : createCommentVNode("", true),
              _cache[4] || (_cache[4] = createTextVNode()),
              (openBlock(true), createElementBlock(Fragment2, null, renderList(columns.value, (column) => {
                return openBlock(), createElementBlock(Fragment2, { key: column.id }, ["component" in column ? (openBlock(), createBlock(resolveDynamicComponent(column.component), {
                  key: 0,
                  ref_for: true,
                  ref: bindCellApiRef,
                  row,
                  column,
                  "active-error-anchor": unref3(activeErrorAnchor),
                  onCloseError: unref3(onClosePopupError),
                  onOnError: unref3(onPopupError)
                }, null, 40, [
                  "row",
                  "column",
                  "active-error-anchor",
                  "onCloseError",
                  "onOnError"
                ])) : "render" in column ? (openBlock(), createBlock(resolveDynamicComponent(column.render(row)), {
                  key: 1,
                  row
                }, null, 8, ["row"])) : createCommentVNode("", true)], 64);
              }), 128))
            ], 64))
          ], 10, _hoisted_9);
        }), 128))])) : createCommentVNode("", true),
        _cache[8] || (_cache[8] = createTextVNode()),
        hasFooter.value ? (openBlock(), createElementBlock("tfoot", _hoisted_10, [createElementVNode("tr", {
          class: "table-ng__row",
          "aria-rowindex": ariaRowcount.value
        }, [createElementVNode("td", {
          colspan: fullColspan.value,
          class: "table-ng__cell--custom",
          onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(() => {
          }, ["prevent"]), ["space"]))
        }, [renderSlot(_ctx.$slots, "footer")], 40, _hoisted_12)], 8, _hoisted_11)])) : createCommentVNode("", true)
      ], 42, _hoisted_1$3);
    };
  }
});
function isSortable(column) {
  return "key" in column && column.key !== void 0 && column.sort !== false;
}
function toEntry(column) {
  return [column.key, column.header];
}
function getTableSortableAttributes(columns) {
  const attributes = columns.filter(isSortable).map(toEntry);
  return Object.fromEntries(attributes);
}
function removeDatasetRows(dataset, rows) {
  const datasetValue = toValue2(dataset);
  const rowsValue = toValue2(rows);
  const nestedAttribute = getDatasetMetadata(datasetValue).nestedAttribute;
  const normalizedRows = Array.isArray(rowsValue) ? rowsValue : [rowsValue];
  for (const row of normalizedRows) removeRow(datasetValue, row, nestedAttribute);
}
function removeRow(dataset, row, nestedAttribute) {
  const rowIndex = dataset.indexOf(row);
  if (rowIndex !== -1) dataset.splice(rowIndex, 1);
  else if (nestedAttribute) removeNestedRows(dataset, row, nestedAttribute);
}
function removeNestedRows(dataset, row, nestedAttribute) {
  for (const currentRow of dataset) {
    const nestedRows = currentRow[nestedAttribute];
    if (Array.isArray(nestedRows)) {
      const index = nestedRows.indexOf(row);
      if (index !== -1) nestedRows.splice(index, 1);
    }
  }
}
var require_array_buffer_basic_detection = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  module.exports = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined";
}));
var require_array_buffer_byte_length = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var globalThis2 = require_global_this();
  var uncurryThisAccessor = require_function_uncurry_this_accessor();
  var classof = require_classof_raw();
  var ArrayBuffer2 = globalThis2.ArrayBuffer;
  var TypeError2 = globalThis2.TypeError;
  module.exports = ArrayBuffer2 && uncurryThisAccessor(ArrayBuffer2.prototype, "byteLength", "get") || function(O) {
    if (classof(O) !== "ArrayBuffer") throw new TypeError2("ArrayBuffer expected");
    return O.byteLength;
  };
}));
var require_array_buffer_is_detached = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var globalThis2 = require_global_this();
  var NATIVE_ARRAY_BUFFER = require_array_buffer_basic_detection();
  var arrayBufferByteLength = require_array_buffer_byte_length();
  var DataView2 = globalThis2.DataView;
  module.exports = function(O) {
    if (!NATIVE_ARRAY_BUFFER || arrayBufferByteLength(O) !== 0) return false;
    try {
      new DataView2(O);
      return false;
    } catch (error) {
      return true;
    }
  };
}));
var require_es_array_buffer_detached = /* @__PURE__ */ __commonJSMin((() => {
  var DESCRIPTORS = require_descriptors();
  var defineBuiltInAccessor = require_define_built_in_accessor();
  var isDetached = require_array_buffer_is_detached();
  var ArrayBufferPrototype = ArrayBuffer.prototype;
  if (DESCRIPTORS && !("detached" in ArrayBufferPrototype)) defineBuiltInAccessor(ArrayBufferPrototype, "detached", {
    configurable: true,
    get: function detached() {
      return isDetached(this);
    }
  });
}));
var require_to_index = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var toIntegerOrInfinity = require_to_integer_or_infinity();
  var toLength = require_to_length();
  var $RangeError = RangeError;
  module.exports = function(it) {
    if (it === void 0) return 0;
    var number = toIntegerOrInfinity(it);
    var length = toLength(number);
    if (number !== length) throw new $RangeError("Wrong length or index");
    return length;
  };
}));
var require_array_buffer_not_detached = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var isDetached = require_array_buffer_is_detached();
  var $TypeError = TypeError;
  module.exports = function(it) {
    if (isDetached(it)) throw new $TypeError("ArrayBuffer is detached");
    return it;
  };
}));
var require_environment = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var globalThis2 = require_global_this();
  var userAgent = require_environment_user_agent();
  var classof = require_classof_raw();
  var userAgentStartsWith = function(string) {
    return userAgent.slice(0, string.length) === string;
  };
  module.exports = (function() {
    if (userAgentStartsWith("Bun/")) return "BUN";
    if (userAgentStartsWith("Cloudflare-Workers")) return "CLOUDFLARE";
    if (userAgentStartsWith("Deno/")) return "DENO";
    if (userAgentStartsWith("Node.js/")) return "NODE";
    if (globalThis2.Bun && typeof Bun.version == "string") return "BUN";
    if (globalThis2.Deno && typeof Deno.version == "object") return "DENO";
    if (classof(globalThis2.process) === "process") return "NODE";
    if (globalThis2.window && globalThis2.document) return "BROWSER";
    return "REST";
  })();
}));
var require_environment_is_node = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  module.exports = require_environment() === "NODE";
}));
var require_get_built_in_node_module = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var globalThis2 = require_global_this();
  var IS_NODE = require_environment_is_node();
  module.exports = function(name) {
    if (IS_NODE) {
      try {
        return globalThis2.process.getBuiltinModule(name);
      } catch (error) {
      }
      try {
        return Function('return require("' + name + '")')();
      } catch (error) {
      }
    }
  };
}));
var require_structured_clone_proper_transfer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var globalThis2 = require_global_this();
  var fails = require_fails();
  var V8 = require_environment_v8_version();
  var ENVIRONMENT = require_environment();
  var structuredClone = globalThis2.structuredClone;
  module.exports = !!structuredClone && !fails(function() {
    if (ENVIRONMENT === "DENO" && V8 > 92 || ENVIRONMENT === "NODE" && V8 > 94 || ENVIRONMENT === "BROWSER" && V8 > 97) return false;
    var buffer = /* @__PURE__ */ new ArrayBuffer(8);
    var clone = structuredClone(buffer, { transfer: [buffer] });
    return buffer.byteLength !== 0 || clone.byteLength !== 8;
  });
}));
var require_detach_transferable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var globalThis2 = require_global_this();
  var getBuiltInNodeModule = require_get_built_in_node_module();
  var PROPER_STRUCTURED_CLONE_TRANSFER = require_structured_clone_proper_transfer();
  var structuredClone = globalThis2.structuredClone;
  var $ArrayBuffer = globalThis2.ArrayBuffer;
  var $MessageChannel = globalThis2.MessageChannel;
  var detach = false;
  var WorkerThreads, channel, buffer, $detach;
  if (PROPER_STRUCTURED_CLONE_TRANSFER) detach = function(transferable) {
    structuredClone(transferable, { transfer: [transferable] });
  };
  else if ($ArrayBuffer) try {
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
  module.exports = detach;
}));
var require_array_buffer_transfer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var globalThis2 = require_global_this();
  var uncurryThis = require_function_uncurry_this();
  var uncurryThisAccessor = require_function_uncurry_this_accessor();
  var toIndex = require_to_index();
  var notDetached = require_array_buffer_not_detached();
  var arrayBufferByteLength = require_array_buffer_byte_length();
  var detachTransferable = require_detach_transferable();
  var PROPER_STRUCTURED_CLONE_TRANSFER = require_structured_clone_proper_transfer();
  var structuredClone = globalThis2.structuredClone;
  var ArrayBuffer2 = globalThis2.ArrayBuffer;
  var DataView2 = globalThis2.DataView;
  var max = Math.max;
  var min = Math.min;
  var ArrayBufferPrototype = ArrayBuffer2.prototype;
  var DataViewPrototype = DataView2.prototype;
  var slice = uncurryThis(ArrayBufferPrototype.slice);
  var isResizable = uncurryThisAccessor(ArrayBufferPrototype, "resizable", "get");
  var maxByteLength = uncurryThisAccessor(ArrayBufferPrototype, "maxByteLength", "get");
  var getInt8 = uncurryThis(DataViewPrototype.getInt8);
  var setInt8 = uncurryThis(DataViewPrototype.setInt8);
  module.exports = (PROPER_STRUCTURED_CLONE_TRANSFER || detachTransferable) && function(arrayBuffer, newLength, preserveResizability) {
    var byteLength = arrayBufferByteLength(arrayBuffer);
    var newByteLength = newLength === void 0 ? byteLength : toIndex(newLength);
    var fixedLength = !isResizable || !isResizable(arrayBuffer);
    var newBuffer;
    notDetached(arrayBuffer);
    if (PROPER_STRUCTURED_CLONE_TRANSFER) {
      arrayBuffer = structuredClone(arrayBuffer, { transfer: [arrayBuffer] });
      if (byteLength === newByteLength && (preserveResizability || fixedLength)) return arrayBuffer;
    }
    if (byteLength >= newByteLength && (!preserveResizability || fixedLength)) newBuffer = slice(arrayBuffer, 0, newByteLength);
    else {
      newBuffer = new ArrayBuffer2(newByteLength, preserveResizability && !fixedLength && maxByteLength ? { maxByteLength: max(newByteLength, maxByteLength(arrayBuffer)) } : void 0);
      var a = new DataView2(arrayBuffer);
      var b = new DataView2(newBuffer);
      var copyLength = min(newByteLength, byteLength);
      for (var i = 0; i < copyLength; i++) setInt8(b, i, getInt8(a, i));
    }
    if (!PROPER_STRUCTURED_CLONE_TRANSFER) detachTransferable(arrayBuffer);
    return newBuffer;
  };
}));
var require_es_array_buffer_transfer = /* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var $transfer = require_array_buffer_transfer();
  if ($transfer) $({
    target: "ArrayBuffer",
    proto: true
  }, { transfer: function transfer() {
    return $transfer(this, arguments.length ? arguments[0] : void 0, true);
  } });
}));
var require_es_array_buffer_transfer_to_fixed_length = /* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var $transfer = require_array_buffer_transfer();
  if ($transfer) $({
    target: "ArrayBuffer",
    proto: true
  }, { transferToFixedLength: function transferToFixedLength() {
    return $transfer(this, arguments.length ? arguments[0] : void 0, false);
  } });
}));
var require_es_iterator_for_each = /* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var call = require_function_call();
  var iterate = require_iterate();
  var aCallable = require_a_callable();
  var anObject = require_an_object();
  var getIteratorDirect = require_get_iterator_direct();
  var iteratorClose = require_iterator_close();
  var forEachWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error()("forEach", TypeError);
  $({
    target: "Iterator",
    proto: true,
    real: true,
    forced: forEachWithoutClosingOnEarlyError
  }, { forEach: function forEach(fn) {
    anObject(this);
    try {
      aCallable(fn);
    } catch (error) {
      iteratorClose(this, "throw", error);
    }
    if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn);
    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function(value) {
      fn(value, counter++);
    }, { IS_RECORD: true });
  } });
}));
var require_is_possible_prototype = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var isObject2 = require_is_object();
  module.exports = function(argument) {
    return isObject2(argument) || argument === null;
  };
}));
var require_a_possible_prototype = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var isPossiblePrototype = require_is_possible_prototype();
  var $String = String;
  var $TypeError = TypeError;
  module.exports = function(argument) {
    if (isPossiblePrototype(argument)) return argument;
    throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
  };
}));
var require_object_set_prototype_of = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var uncurryThisAccessor = require_function_uncurry_this_accessor();
  var isObject2 = require_is_object();
  var requireObjectCoercible = require_require_object_coercible();
  var aPossiblePrototype = require_a_possible_prototype();
  module.exports = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {
    }
    return function setPrototypeOf(O, proto) {
      requireObjectCoercible(O);
      aPossiblePrototype(proto);
      if (!isObject2(O)) return O;
      if (CORRECT_SETTER) setter(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  })() : void 0);
}));
var require_array_buffer_view_core = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var NATIVE_ARRAY_BUFFER = require_array_buffer_basic_detection();
  var DESCRIPTORS = require_descriptors();
  var globalThis2 = require_global_this();
  var isCallable = require_is_callable();
  var isObject2 = require_is_object();
  var hasOwn2 = require_has_own_property();
  var classof = require_classof();
  var tryToString = require_try_to_string();
  var createNonEnumerableProperty = require_create_non_enumerable_property();
  var defineBuiltIn = require_define_built_in();
  var defineBuiltInAccessor = require_define_built_in_accessor();
  var isPrototypeOf = require_object_is_prototype_of();
  var getPrototypeOf = require_object_get_prototype_of();
  var setPrototypeOf = require_object_set_prototype_of();
  var wellKnownSymbol = require_well_known_symbol();
  var uid = require_uid();
  var InternalStateModule = require_internal_state();
  var enforceInternalState = InternalStateModule.enforce;
  var getInternalState = InternalStateModule.get;
  var Int8Array2 = globalThis2.Int8Array;
  var Int8ArrayPrototype = Int8Array2 && Int8Array2.prototype;
  var Uint8ClampedArray = globalThis2.Uint8ClampedArray;
  var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
  var TypedArray = Int8Array2 && getPrototypeOf(Int8Array2);
  var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
  var ObjectPrototype = Object.prototype;
  var TypeError2 = globalThis2.TypeError;
  var TO_STRING_TAG = wellKnownSymbol("toStringTag");
  var TYPED_ARRAY_TAG = uid("TYPED_ARRAY_TAG");
  var TYPED_ARRAY_CONSTRUCTOR = "TypedArrayConstructor";
  var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(globalThis2.opera) !== "Opera";
  var TYPED_ARRAY_TAG_REQUIRED = false;
  var NAME, Constructor, Prototype;
  var TypedArrayConstructorsList = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  };
  var BigIntArrayConstructorsList = {
    BigInt64Array: 8,
    BigUint64Array: 8
  };
  var isView = function isView2(it) {
    if (!isObject2(it)) return false;
    var klass = classof(it);
    return klass === "DataView" || hasOwn2(TypedArrayConstructorsList, klass) || hasOwn2(BigIntArrayConstructorsList, klass);
  };
  var getTypedArrayConstructor = function(it) {
    var proto = getPrototypeOf(it);
    if (!isObject2(proto)) return;
    var state = getInternalState(proto);
    return state && hasOwn2(state, TYPED_ARRAY_CONSTRUCTOR) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
  };
  var isTypedArray = function(it) {
    if (!isObject2(it)) return false;
    var klass = classof(it);
    return hasOwn2(TypedArrayConstructorsList, klass) || hasOwn2(BigIntArrayConstructorsList, klass);
  };
  var aTypedArray = function(it) {
    if (isTypedArray(it)) return it;
    throw new TypeError2("Target is not a typed array");
  };
  var aTypedArrayConstructor = function(C) {
    if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;
    throw new TypeError2(tryToString(C) + " is not a typed array constructor");
  };
  var exportTypedArrayMethod = function(KEY, property, forced, options) {
    if (!DESCRIPTORS) return;
    if (forced) for (var ARRAY in TypedArrayConstructorsList) {
      var TypedArrayConstructor = globalThis2[ARRAY];
      if (TypedArrayConstructor && hasOwn2(TypedArrayConstructor.prototype, KEY)) try {
        delete TypedArrayConstructor.prototype[KEY];
      } catch (error) {
        try {
          TypedArrayConstructor.prototype[KEY] = property;
        } catch (error2) {
        }
      }
    }
    if (!TypedArrayPrototype[KEY] || forced) defineBuiltIn(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
  };
  var exportTypedArrayStaticMethod = function(KEY, property, forced) {
    var ARRAY, TypedArrayConstructor;
    if (!DESCRIPTORS) return;
    if (setPrototypeOf) {
      if (forced) for (ARRAY in TypedArrayConstructorsList) {
        TypedArrayConstructor = globalThis2[ARRAY];
        if (TypedArrayConstructor && hasOwn2(TypedArrayConstructor, KEY)) try {
          delete TypedArrayConstructor[KEY];
        } catch (error) {
        }
      }
      if (!TypedArray[KEY] || forced) try {
        return defineBuiltIn(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
      } catch (error) {
      }
      else return;
    }
    for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = globalThis2[ARRAY];
      if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) defineBuiltIn(TypedArrayConstructor, KEY, property);
    }
  };
  for (NAME in TypedArrayConstructorsList) {
    Constructor = globalThis2[NAME];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
    else NATIVE_ARRAY_BUFFER_VIEWS = false;
  }
  for (NAME in BigIntArrayConstructorsList) {
    Constructor = globalThis2[NAME];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  }
  if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
    TypedArray = function TypedArray2() {
      throw new TypeError2("Incorrect invocation");
    };
    if (NATIVE_ARRAY_BUFFER_VIEWS) {
      for (NAME in TypedArrayConstructorsList) if (globalThis2[NAME]) setPrototypeOf(globalThis2[NAME], TypedArray);
    }
  }
  if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
    TypedArrayPrototype = TypedArray.prototype;
    if (NATIVE_ARRAY_BUFFER_VIEWS) {
      for (NAME in TypedArrayConstructorsList) if (globalThis2[NAME]) setPrototypeOf(globalThis2[NAME].prototype, TypedArrayPrototype);
    }
  }
  if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
  if (DESCRIPTORS && !hasOwn2(TypedArrayPrototype, TO_STRING_TAG)) {
    TYPED_ARRAY_TAG_REQUIRED = true;
    defineBuiltInAccessor(TypedArrayPrototype, TO_STRING_TAG, {
      configurable: true,
      get: function() {
        return isObject2(this) ? this[TYPED_ARRAY_TAG] : void 0;
      }
    });
    for (NAME in TypedArrayConstructorsList) if (globalThis2[NAME]) createNonEnumerableProperty(globalThis2[NAME].prototype, TYPED_ARRAY_TAG, NAME);
  }
  module.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS,
    TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
    aTypedArray,
    aTypedArrayConstructor,
    exportTypedArrayMethod,
    exportTypedArrayStaticMethod,
    getTypedArrayConstructor,
    isView,
    isTypedArray,
    TypedArray,
    TypedArrayPrototype
  };
}));
var require_es_typed_array_to_reversed = /* @__PURE__ */ __commonJSMin((() => {
  var lengthOfArrayLike = require_length_of_array_like();
  var ArrayBufferViewCore = require_array_buffer_view_core();
  var aTypedArray = ArrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
  var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
  exportTypedArrayMethod("toReversed", function toReversed() {
    var O = aTypedArray(this);
    var len = lengthOfArrayLike(O);
    var A = new (getTypedArrayConstructor(O))(len);
    var k = 0;
    for (; k < len; k++) A[k] = O[len - k - 1];
    return A;
  });
}));
var require_es_typed_array_to_sorted = /* @__PURE__ */ __commonJSMin((() => {
  var ArrayBufferViewCore = require_array_buffer_view_core();
  var uncurryThis = require_function_uncurry_this();
  var aCallable = require_a_callable();
  var arrayFromConstructorAndList = require_array_from_constructor_and_list();
  var aTypedArray = ArrayBufferViewCore.aTypedArray;
  var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
  var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
  var sort = uncurryThis(ArrayBufferViewCore.TypedArrayPrototype.sort);
  exportTypedArrayMethod("toSorted", function toSorted(compareFn) {
    if (compareFn !== void 0) aCallable(compareFn);
    var O = aTypedArray(this);
    return sort(arrayFromConstructorAndList(getTypedArrayConstructor(O), O), compareFn);
  });
}));
var require_is_big_int_array = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var classof = require_classof();
  module.exports = function(it) {
    var klass = classof(it);
    return klass === "BigInt64Array" || klass === "BigUint64Array";
  };
}));
var require_to_big_int = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var toPrimitive = require_to_primitive();
  var $TypeError = TypeError;
  module.exports = function(argument) {
    var prim = toPrimitive(argument, "number");
    if (typeof prim == "number") throw new $TypeError("Can't convert number to bigint");
    return BigInt(prim);
  };
}));
var require_es_typed_array_with = /* @__PURE__ */ __commonJSMin((() => {
  var ArrayBufferViewCore = require_array_buffer_view_core();
  var isBigIntArray = require_is_big_int_array();
  var lengthOfArrayLike = require_length_of_array_like();
  var toIntegerOrInfinity = require_to_integer_or_infinity();
  var toBigInt = require_to_big_int();
  var aTypedArray = ArrayBufferViewCore.aTypedArray;
  var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
  var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
  var $RangeError = RangeError;
  var PROPER_ORDER = (function() {
    try {
      new Int8Array(1)["with"](2, { valueOf: function() {
        throw 8;
      } });
    } catch (error) {
      return error === 8;
    }
  })();
  var THROW_ON_NEGATIVE_FRACTIONAL_INDEX = PROPER_ORDER && (function() {
    try {
      new Int8Array(1)["with"](-0.5, 1);
    } catch (error) {
      return true;
    }
  })();
  exportTypedArrayMethod("with", { "with": function(index, value) {
    var O = aTypedArray(this);
    var len = lengthOfArrayLike(O);
    var relativeIndex = toIntegerOrInfinity(index);
    var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
    var numericValue = isBigIntArray(O) ? toBigInt(value) : +value;
    if (actualIndex >= len || actualIndex < 0) throw new $RangeError("Incorrect index");
    var A = new (getTypedArrayConstructor(O))(len);
    var k = 0;
    for (; k < len; k++) A[k] = k === actualIndex ? numericValue : O[k];
    return A;
  } }["with"], !PROPER_ORDER || THROW_ON_NEGATIVE_FRACTIONAL_INDEX);
}));
var require_an_object_or_undefined = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var isObject2 = require_is_object();
  var $String = String;
  var $TypeError = TypeError;
  module.exports = function(argument) {
    if (argument === void 0 || isObject2(argument)) return argument;
    throw new $TypeError($String(argument) + " is not an object or undefined");
  };
}));
var require_a_string = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var $TypeError = TypeError;
  module.exports = function(argument) {
    if (typeof argument == "string") return argument;
    throw new $TypeError("Argument is not a string");
  };
}));
var require_base64_map = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var commonAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var base64Alphabet = commonAlphabet + "+/";
  var base64UrlAlphabet = commonAlphabet + "-_";
  var inverse = function(characters) {
    var result = {};
    var index = 0;
    for (; index < 64; index++) result[characters.charAt(index)] = index;
    return result;
  };
  module.exports = {
    i2c: base64Alphabet,
    c2i: inverse(base64Alphabet),
    i2cUrl: base64UrlAlphabet,
    c2iUrl: inverse(base64UrlAlphabet)
  };
}));
var require_get_alphabet_option = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var $TypeError = TypeError;
  module.exports = function(options) {
    var alphabet = options && options.alphabet;
    if (alphabet === void 0 || alphabet === "base64" || alphabet === "base64url") return alphabet || "base64";
    throw new $TypeError("Incorrect `alphabet` option");
  };
}));
var require_uint8_from_base64 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var globalThis2 = require_global_this();
  var uncurryThis = require_function_uncurry_this();
  var anObjectOrUndefined = require_an_object_or_undefined();
  var aString = require_a_string();
  var hasOwn2 = require_has_own_property();
  var base64Map = require_base64_map();
  var getAlphabetOption = require_get_alphabet_option();
  var notDetached = require_array_buffer_not_detached();
  var base64Alphabet = base64Map.c2i;
  var base64UrlAlphabet = base64Map.c2iUrl;
  var SyntaxError = globalThis2.SyntaxError;
  var TypeError2 = globalThis2.TypeError;
  var at = uncurryThis("".charAt);
  var skipAsciiWhitespace = function(string, index) {
    var length = string.length;
    for (; index < length; index++) {
      var chr = at(string, index);
      if (chr !== " " && chr !== "	" && chr !== "\n" && chr !== "\f" && chr !== "\r") break;
    }
    return index;
  };
  var decodeBase64Chunk = function(chunk, alphabet, throwOnExtraBits) {
    var chunkLength = chunk.length;
    if (chunkLength < 4) chunk += chunkLength === 2 ? "AA" : "A";
    var triplet = (alphabet[at(chunk, 0)] << 18) + (alphabet[at(chunk, 1)] << 12) + (alphabet[at(chunk, 2)] << 6) + alphabet[at(chunk, 3)];
    var chunkBytes = [
      triplet >> 16 & 255,
      triplet >> 8 & 255,
      triplet & 255
    ];
    if (chunkLength === 2) {
      if (throwOnExtraBits && chunkBytes[1] !== 0) throw new SyntaxError("Extra bits");
      return [chunkBytes[0]];
    }
    if (chunkLength === 3) {
      if (throwOnExtraBits && chunkBytes[2] !== 0) throw new SyntaxError("Extra bits");
      return [chunkBytes[0], chunkBytes[1]];
    }
    return chunkBytes;
  };
  var writeBytes = function(bytes, elements, written) {
    var elementsLength = elements.length;
    for (var index = 0; index < elementsLength; index++) bytes[written + index] = elements[index];
    return written + elementsLength;
  };
  module.exports = function(string, options, into, maxLength) {
    aString(string);
    anObjectOrUndefined(options);
    var alphabet = getAlphabetOption(options) === "base64" ? base64Alphabet : base64UrlAlphabet;
    var lastChunkHandling = options ? options.lastChunkHandling : void 0;
    if (lastChunkHandling === void 0) lastChunkHandling = "loose";
    if (lastChunkHandling !== "loose" && lastChunkHandling !== "strict" && lastChunkHandling !== "stop-before-partial") throw new TypeError2("Incorrect `lastChunkHandling` option");
    if (into) notDetached(into.buffer);
    var stringLength = string.length;
    var bytes = into || [];
    var written = 0;
    var read = 0;
    var chunk = "";
    var index = 0;
    if (maxLength) while (true) {
      index = skipAsciiWhitespace(string, index);
      if (index === stringLength) {
        if (chunk.length > 0) {
          if (lastChunkHandling === "stop-before-partial") break;
          if (lastChunkHandling === "loose") {
            if (chunk.length === 1) throw new SyntaxError("Malformed padding: exactly one additional character");
            written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, false), written);
          } else throw new SyntaxError("Missing padding");
        }
        read = stringLength;
        break;
      }
      var chr = at(string, index);
      ++index;
      if (chr === "=") {
        if (chunk.length < 2) throw new SyntaxError("Padding is too early");
        index = skipAsciiWhitespace(string, index);
        if (chunk.length === 2) {
          if (index === stringLength) {
            if (lastChunkHandling === "stop-before-partial") break;
            throw new SyntaxError("Malformed padding: only one =");
          }
          if (at(string, index) === "=") {
            ++index;
            index = skipAsciiWhitespace(string, index);
          }
        }
        if (index < stringLength) throw new SyntaxError("Unexpected character after padding");
        written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, lastChunkHandling === "strict"), written);
        read = stringLength;
        break;
      }
      if (!hasOwn2(alphabet, chr)) throw new SyntaxError("Unexpected character");
      var remainingBytes = maxLength - written;
      if (remainingBytes === 1 && chunk.length === 2 || remainingBytes === 2 && chunk.length === 3) break;
      chunk += chr;
      if (chunk.length === 4) {
        written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, false), written);
        chunk = "";
        read = index;
        if (written === maxLength) break;
      }
    }
    return {
      bytes,
      read,
      written
    };
  };
}));
var require_an_uint8_array = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var classof = require_classof();
  var $TypeError = TypeError;
  module.exports = function(argument) {
    if (classof(argument) === "Uint8Array") return argument;
    throw new $TypeError("Argument is not an Uint8Array");
  };
}));
var require_es_uint8_array_set_from_base64 = /* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var globalThis2 = require_global_this();
  var $fromBase64 = require_uint8_from_base64();
  var anUint8Array = require_an_uint8_array();
  var Uint8Array2 = globalThis2.Uint8Array;
  var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS = !Uint8Array2 || !Uint8Array2.prototype.setFromBase64 || !(function() {
    var target = new Uint8Array2([
      255,
      255,
      255,
      255,
      255
    ]);
    try {
      target.setFromBase64("", null);
      return;
    } catch (error) {
    }
    try {
      target.setFromBase64("a");
      return;
    } catch (error) {
    }
    try {
      target.setFromBase64("MjYyZg===");
    } catch (error) {
      return target[0] === 50 && target[1] === 54 && target[2] === 50 && target[3] === 255 && target[4] === 255;
    }
  })();
  if (Uint8Array2) $({
    target: "Uint8Array",
    proto: true,
    forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS
  }, { setFromBase64: function setFromBase64(string) {
    anUint8Array(this);
    var result = $fromBase64(string, arguments.length > 1 ? arguments[1] : void 0, this, this.length);
    return {
      read: result.read,
      written: result.written
    };
  } });
}));
var require_uint8_from_hex = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var globalThis2 = require_global_this();
  var uncurryThis = require_function_uncurry_this();
  var Uint8Array2 = globalThis2.Uint8Array;
  var SyntaxError = globalThis2.SyntaxError;
  var min = Math.min;
  var stringMatch = uncurryThis("".match);
  module.exports = function(string, into) {
    var stringLength = string.length;
    if (stringLength % 2 !== 0) throw new SyntaxError("String should be an even number of characters");
    var maxLength = into ? min(into.length, stringLength / 2) : stringLength / 2;
    var bytes = into || new Uint8Array2(maxLength);
    var segments = stringMatch(string, /.{2}/g);
    var written = 0;
    for (; written < maxLength; written++) {
      var result = +("0x" + segments[written] + "0");
      if (result !== result) throw new SyntaxError("String should only contain hex characters");
      bytes[written] = result >> 4;
    }
    return {
      bytes,
      read: written << 1
    };
  };
}));
var require_es_uint8_array_set_from_hex = /* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var globalThis2 = require_global_this();
  var aString = require_a_string();
  var anUint8Array = require_an_uint8_array();
  var notDetached = require_array_buffer_not_detached();
  var $fromHex = require_uint8_from_hex();
  function throwsOnLengthTrackingView() {
    try {
      new Uint8Array(new ArrayBuffer(16, { maxByteLength: 1024 })).setFromHex("cafed00d");
    } catch (error) {
      return true;
    }
  }
  if (globalThis2.Uint8Array) $({
    target: "Uint8Array",
    proto: true,
    forced: throwsOnLengthTrackingView()
  }, { setFromHex: function setFromHex(string) {
    anUint8Array(this);
    aString(string);
    notDetached(this.buffer);
    var read = $fromHex(string, this).read;
    return {
      read,
      written: read / 2
    };
  } });
}));
var require_es_uint8_array_to_base64 = /* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var globalThis2 = require_global_this();
  var uncurryThis = require_function_uncurry_this();
  var anObjectOrUndefined = require_an_object_or_undefined();
  var anUint8Array = require_an_uint8_array();
  var notDetached = require_array_buffer_not_detached();
  var base64Map = require_base64_map();
  var getAlphabetOption = require_get_alphabet_option();
  var base64Alphabet = base64Map.i2c;
  var base64UrlAlphabet = base64Map.i2cUrl;
  var charAt = uncurryThis("".charAt);
  var Uint8Array2 = globalThis2.Uint8Array;
  var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS = !Uint8Array2 || !Uint8Array2.prototype.toBase64 || !(function() {
    try {
      new Uint8Array2().toBase64(null);
    } catch (error) {
      return true;
    }
  })();
  if (Uint8Array2) $({
    target: "Uint8Array",
    proto: true,
    forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS
  }, { toBase64: function toBase64() {
    var array = anUint8Array(this);
    var options = arguments.length ? anObjectOrUndefined(arguments[0]) : void 0;
    var alphabet = getAlphabetOption(options) === "base64" ? base64Alphabet : base64UrlAlphabet;
    var omitPadding = !!options && !!options.omitPadding;
    notDetached(this.buffer);
    var result = "";
    var i = 0;
    var length = array.length;
    var triplet;
    var at = function(shift) {
      return charAt(alphabet, triplet >> 6 * shift & 63);
    };
    for (; i + 2 < length; i += 3) {
      triplet = (array[i] << 16) + (array[i + 1] << 8) + array[i + 2];
      result += at(3) + at(2) + at(1) + at(0);
    }
    if (i + 2 === length) {
      triplet = (array[i] << 16) + (array[i + 1] << 8);
      result += at(3) + at(2) + at(1) + (omitPadding ? "" : "=");
    } else if (i + 1 === length) {
      triplet = array[i] << 16;
      result += at(3) + at(2) + (omitPadding ? "" : "==");
    }
    return result;
  } });
}));
var require_es_uint8_array_to_hex = /* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var globalThis2 = require_global_this();
  var uncurryThis = require_function_uncurry_this();
  var anUint8Array = require_an_uint8_array();
  var notDetached = require_array_buffer_not_detached();
  var numberToString = uncurryThis(1.1.toString);
  var join = uncurryThis([].join);
  var $Array = Array;
  var Uint8Array2 = globalThis2.Uint8Array;
  var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS = !Uint8Array2 || !Uint8Array2.prototype.toHex || !(function() {
    try {
      return new Uint8Array2([
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255
      ]).toHex() === "ffffffffffffffff";
    } catch (error) {
      return false;
    }
  })();
  if (Uint8Array2) $({
    target: "Uint8Array",
    proto: true,
    forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS
  }, { toHex: function toHex() {
    anUint8Array(this);
    notDetached(this.buffer);
    var result = $Array(this.length);
    for (var i = 0, length = this.length; i < length; i++) {
      var hex = numberToString(this[i], 16);
      result[i] = hex.length === 1 ? "0" + hex : hex;
    }
    return join(result, "");
  } });
}));
var require_inherit_if_required = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var isCallable = require_is_callable();
  var isObject2 = require_is_object();
  var setPrototypeOf = require_object_set_prototype_of();
  module.exports = function($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (setPrototypeOf && isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject2(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
    return $this;
  };
}));
var require_to_string = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var classof = require_classof();
  var $String = String;
  module.exports = function(argument) {
    if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return $String(argument);
  };
}));
var require_normalize_string_argument = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var toString2 = require_to_string();
  module.exports = function(argument, $default) {
    return argument === void 0 ? arguments.length < 2 ? "" : $default : toString2(argument);
  };
}));
var require_dom_exception_constants = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  module.exports = {
    IndexSizeError: {
      s: "INDEX_SIZE_ERR",
      c: 1,
      m: 1
    },
    DOMStringSizeError: {
      s: "DOMSTRING_SIZE_ERR",
      c: 2,
      m: 0
    },
    HierarchyRequestError: {
      s: "HIERARCHY_REQUEST_ERR",
      c: 3,
      m: 1
    },
    WrongDocumentError: {
      s: "WRONG_DOCUMENT_ERR",
      c: 4,
      m: 1
    },
    InvalidCharacterError: {
      s: "INVALID_CHARACTER_ERR",
      c: 5,
      m: 1
    },
    NoDataAllowedError: {
      s: "NO_DATA_ALLOWED_ERR",
      c: 6,
      m: 0
    },
    NoModificationAllowedError: {
      s: "NO_MODIFICATION_ALLOWED_ERR",
      c: 7,
      m: 1
    },
    NotFoundError: {
      s: "NOT_FOUND_ERR",
      c: 8,
      m: 1
    },
    NotSupportedError: {
      s: "NOT_SUPPORTED_ERR",
      c: 9,
      m: 1
    },
    InUseAttributeError: {
      s: "INUSE_ATTRIBUTE_ERR",
      c: 10,
      m: 1
    },
    InvalidStateError: {
      s: "INVALID_STATE_ERR",
      c: 11,
      m: 1
    },
    SyntaxError: {
      s: "SYNTAX_ERR",
      c: 12,
      m: 1
    },
    InvalidModificationError: {
      s: "INVALID_MODIFICATION_ERR",
      c: 13,
      m: 1
    },
    NamespaceError: {
      s: "NAMESPACE_ERR",
      c: 14,
      m: 1
    },
    InvalidAccessError: {
      s: "INVALID_ACCESS_ERR",
      c: 15,
      m: 1
    },
    ValidationError: {
      s: "VALIDATION_ERR",
      c: 16,
      m: 0
    },
    TypeMismatchError: {
      s: "TYPE_MISMATCH_ERR",
      c: 17,
      m: 1
    },
    SecurityError: {
      s: "SECURITY_ERR",
      c: 18,
      m: 1
    },
    NetworkError: {
      s: "NETWORK_ERR",
      c: 19,
      m: 1
    },
    AbortError: {
      s: "ABORT_ERR",
      c: 20,
      m: 1
    },
    URLMismatchError: {
      s: "URL_MISMATCH_ERR",
      c: 21,
      m: 1
    },
    QuotaExceededError: {
      s: "QUOTA_EXCEEDED_ERR",
      c: 22,
      m: 1
    },
    TimeoutError: {
      s: "TIMEOUT_ERR",
      c: 23,
      m: 1
    },
    InvalidNodeTypeError: {
      s: "INVALID_NODE_TYPE_ERR",
      c: 24,
      m: 1
    },
    DataCloneError: {
      s: "DATA_CLONE_ERR",
      c: 25,
      m: 1
    }
  };
}));
var require_error_stack_clear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var uncurryThis = require_function_uncurry_this();
  var $Error = Error;
  var replace = uncurryThis("".replace);
  var TEST = (function(arg) {
    return String(new $Error(arg).stack);
  })("zxcasd");
  var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
  var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
  module.exports = function(stack, dropEntries) {
    if (IS_V8_OR_CHAKRA_STACK && typeof stack == "string" && !$Error.prepareStackTrace) while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, "");
    return stack;
  };
}));
var require_web_dom_exception_stack = /* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var globalThis2 = require_global_this();
  var getBuiltIn = require_get_built_in();
  var createPropertyDescriptor = require_create_property_descriptor();
  var defineProperty = require_object_define_property().f;
  var hasOwn2 = require_has_own_property();
  var anInstance = require_an_instance();
  var inheritIfRequired = require_inherit_if_required();
  var normalizeStringArgument = require_normalize_string_argument();
  var DOMExceptionConstants = require_dom_exception_constants();
  var clearErrorStack = require_error_stack_clear();
  var DESCRIPTORS = require_descriptors();
  var IS_PURE = require_is_pure();
  var DOM_EXCEPTION = "DOMException";
  var Error2 = getBuiltIn("Error");
  var NativeDOMException = getBuiltIn(DOM_EXCEPTION);
  var $DOMException = function DOMException() {
    anInstance(this, DOMExceptionPrototype);
    var argumentsLength = arguments.length;
    var message = normalizeStringArgument(argumentsLength < 1 ? void 0 : arguments[0]);
    var that = new NativeDOMException(message, normalizeStringArgument(argumentsLength < 2 ? void 0 : arguments[1], "Error"));
    var error = new Error2(message);
    error.name = DOM_EXCEPTION;
    defineProperty(that, "stack", createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
    inheritIfRequired(that, this, $DOMException);
    return that;
  };
  var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;
  var ERROR_HAS_STACK = "stack" in new Error2(DOM_EXCEPTION);
  var DOM_EXCEPTION_HAS_STACK = "stack" in new NativeDOMException(1, 2);
  var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(globalThis2, DOM_EXCEPTION);
  var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);
  var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;
  $({
    global: true,
    constructor: true,
    forced: IS_PURE || FORCED_CONSTRUCTOR
  }, { DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException });
  var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
  var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
  if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
    if (!IS_PURE) defineProperty(PolyfilledDOMExceptionPrototype, "constructor", createPropertyDescriptor(1, PolyfilledDOMException));
    for (var key in DOMExceptionConstants) if (hasOwn2(DOMExceptionConstants, key)) {
      var constant = DOMExceptionConstants[key];
      var constantName = constant.s;
      if (!hasOwn2(PolyfilledDOMException, constantName)) defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
    }
  }
}));
require_es_array_buffer_detached();
require_es_array_buffer_transfer();
require_es_array_buffer_transfer_to_fixed_length();
require_es_iterator_for_each();
require_es_typed_array_to_reversed();
require_es_typed_array_to_sorted();
require_es_typed_array_with();
require_es_uint8_array_set_from_base64();
require_es_uint8_array_set_from_hex();
require_es_uint8_array_to_base64();
require_es_uint8_array_to_hex();
require_web_dom_exception_stack();
var HOURS_MINUTES_REGEXP = /^(?<hours>\d+)?(:(?<minutes>[0-5]\d))?$/;
var HOURS_MINUTES_WITHOUT_COLON_REGEXP = /^(?<hours>\d{2})(?<minutes>[0-5]\d)$/;
var require_function_apply = /* @__PURE__ */ __commonJSMin(((exports, module) => {
  var NATIVE_BIND = require_function_bind_native();
  var FunctionPrototype = Function.prototype;
  var apply = FunctionPrototype.apply;
  var call = FunctionPrototype.call;
  module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
  });
}));
(/* @__PURE__ */ __commonJSMin((() => {
  var $ = require_export();
  var iterate = require_iterate();
  var aCallable = require_a_callable();
  var anObject = require_an_object();
  var getIteratorDirect = require_get_iterator_direct();
  var iteratorClose = require_iterator_close();
  var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
  var apply = require_function_apply();
  var fails = require_fails();
  var $TypeError = TypeError;
  var FAILS_ON_INITIAL_UNDEFINED = fails(function() {
    [].keys().reduce(function() {
    }, void 0);
  });
  var reduceWithoutClosingOnEarlyError = !FAILS_ON_INITIAL_UNDEFINED && iteratorHelperWithoutClosingOnEarlyError("reduce", $TypeError);
  $({
    target: "Iterator",
    proto: true,
    real: true,
    forced: FAILS_ON_INITIAL_UNDEFINED || reduceWithoutClosingOnEarlyError
  }, { reduce: function reduce(reducer) {
    anObject(this);
    try {
      aCallable(reducer);
    } catch (error) {
      iteratorClose(this, "throw", error);
    }
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? void 0 : arguments[1];
    if (reduceWithoutClosingOnEarlyError) return apply(reduceWithoutClosingOnEarlyError, this, noInitial ? [reducer] : [reducer, accumulator]);
    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function(value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else accumulator = reducer(accumulator, value, counter);
      counter++;
    }, { IS_RECORD: true });
    if (noInitial) throw new $TypeError("Reduce of empty iterator with no initial value");
    return accumulator;
  } });
})))();
function findMatch(regexps, value) {
  for (const regexp of regexps) {
    const match = value.match(regexp);
    if (match) return match;
  }
  return null;
}
function padInitialZeros(value, maxLength = 2) {
  value = value !== null && value !== void 0 ? value : "";
  return value.padStart(maxLength, "0");
}
function hoursMinutesStringToMinutes(valueString, extraForgiving = false) {
  if (isEmpty(valueString.trim())) return;
  const [hours, minutes] = splitHoursMinutes(valueString, extraForgiving).map((value) => Number.parseInt(value, 10));
  const totalMinutes = hours * 60 + minutes;
  return !Number.isNaN(totalMinutes) ? totalMinutes : void 0;
}
function splitHoursMinutes(valueString, extraForgiving = false) {
  const match = findMatch(extraForgiving ? [HOURS_MINUTES_WITHOUT_COLON_REGEXP, HOURS_MINUTES_REGEXP] : [HOURS_MINUTES_REGEXP], stripWhitespace(valueString));
  if (!match) return ["", ""];
  return [padInitialZeros(match?.groups?.hours), padInitialZeros(match?.groups?.minutes)];
}
function parseTimeToNumberUsingConfig(value, extraForgiving) {
  var _hoursMinutesStringTo;
  if (typeof value !== "string") return;
  const parsedValue = (_hoursMinutesStringTo = hoursMinutesStringToMinutes(value, extraForgiving)) !== null && _hoursMinutesStringTo !== void 0 ? _hoursMinutesStringTo : NaN;
  return !Number.isNaN(parsedValue) ? parsedValue : void 0;
}
function parseTimeToNumber(value) {
  return parseTimeToNumberUsingConfig(value, false);
}
var HoursMinutesValidatorUtils = class HoursMinutesValidatorUtils2 {
  static validate(value, config, name, compare) {
    if (value === "") return true;
    const limit = config[name];
    if (!isSet(limit)) return false;
    const parseFunction = HoursMinutesValidatorUtils2.getParserFromConfig(config);
    const limitAsNumber = parseFunction(String(config[name]));
    if (!isSet(limitAsNumber)) throw new Error(`config.${name} must be a number`);
    const valueAsNumber = parseFunction(value);
    if (!isSet(valueAsNumber)) return false;
    return compare(valueAsNumber, limitAsNumber);
  }
  static getParserFromConfig(config) {
    if (!isSet(config) || !Array.isArray(config.parser) || !isSet(config.parser?.[0]) || typeof config.parser[0] !== "function") return parseTimeToNumber;
    return config.parser[0];
  }
};
var validators = [
  {
    name: "hoursMinutes",
    validation(value, _element, config) {
      return isEmpty(value) || isSet(HoursMinutesValidatorUtils.getParserFromConfig(config)(value));
    }
  },
  {
    name: "greaterThanTime",
    validation(value, _element, config) {
      return HoursMinutesValidatorUtils.validate(value, config, "limit", (value2, limit) => {
        return value2 > limit;
      });
    }
  },
  {
    name: "lessThanTime",
    validation(value, _element, config) {
      return HoursMinutesValidatorUtils.validate(value, config, "limit", (value2, limit) => {
        return value2 < limit;
      });
    }
  },
  {
    name: "maxTime",
    validation(value, _element, config) {
      return HoursMinutesValidatorUtils.validate(value, config, this.name, (value2, limit) => {
        return value2 <= limit;
      });
    }
  },
  {
    name: "minTime",
    validation(value, _element, config) {
      return HoursMinutesValidatorUtils.validate(value, config, this.name, (value2, limit) => {
        return value2 >= limit;
      });
    }
  }
];
for (const validator of validators) ValidationService.registerValidator(validator);

// virtual-entry:virtual:packages/vue-labs/src/components/FTable/examples/FTableExample.vue:FTableExample-0ada21.js
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const tableRef = useTemplateRef2("table");
    const selectFieldOptions = ["Hund", "Katt", "Hamster", "Papegoja", "Spindel", "Guldfisk"];
    const oformateradTextKolumnSynlig = ref4(true);
    const columns = defineTableColumns([
      {
        type: "text",
        header: "Oformaterad text",
        value(row) {
          return String(row.antal);
        },
        enabled: oformateradTextKolumnSynlig
      },
      {
        type: "checkbox",
        header: "Kryssruta",
        key: "aktiv",
        size: "shrink",
        label: (row) => `V\xE4lj rad ${row.id}`
      },
      {
        type: "text",
        header: "Formatterad text",
        label: (row) => `Text f\xF6r rad ${row.id}`,
        value(row) {
          return formatNumber2(row.antal) ?? "";
        },
        editable: true
      },
      {
        type: "text",
        header: "Redigerbar text",
        editable: true,
        key: "level",
        label: (row) => `Text f\xF6r rad ${row.id}`,
        value(row) {
          return row.level;
        },
        update(row, newValue) {
          row.level = newValue;
        },
        validation: {
          required: {},
          maxLength: { length: 5 }
        }
      },
      {
        type: "button",
        header: "Knapp",
        icon: "trashcan",
        size: "shrink",
        text(row) {
          return `Ta bort ${row.id}`;
        },
        onClick: (row) => {
          onRemoveRow(row);
        }
      },
      {
        header: "L\xE4nk",
        type: "anchor",
        href: "#",
        text() {
          return "L\xE4nktext";
        }
      },
      {
        header: "Dropplista",
        type: "select",
        key: "animal",
        label: (row) => `Djur f\xF6r rad ${row.id}`,
        options: selectFieldOptions
      },
      {
        header: "Render function",
        render(row) {
          return h3("td", { id: `foo-${row.id}`, class: "bar" }, ["\u{1F47B}"]);
        }
      }
      // {
      //     header: "Custom component",
      //     type: "render",
      //     render() {
      //         return XTableChip;
      //     },
      // },
    ]);
    const rows = useDatasetRef(
      [
        {
          id: "1",
          animal: "Katt",
          level: "F\xF6r\xE4ldrapenning",
          start: "2022-04-11",
          end: "2022-04-20",
          antal: "10000",
          aktiv: false,
          expandableRows: [
            {
              id: "1a",
              level: "Sjukpenningsniv\xE5",
              start: "2022-04-18",
              end: "2022-04-20",
              antal: "30000"
            },
            {
              id: "1b",
              level: "L\xE4gstaniv\xE5",
              start: "2022-04-16",
              end: "2022-04-17",
              antal: "20000"
            },
            {
              id: "1c",
              level: "Sjukpenningsniv\xE5",
              start: "2022-04-11",
              end: "2022-04-15",
              antal: "50000"
            }
          ],
          expandableContent: [
            {
              id: "1a",
              content: "Anledning: Tar hand om barnet"
            }
          ]
        },
        {
          id: "2",
          animal: "Spindel",
          level: "Tillf\xE4llig f\xF6r\xE4ldrapenning",
          start: "2022-05-02",
          end: "2022-05-04",
          antal: "30000",
          aktiv: false,
          expandableRows: [
            {
              id: "2a",
              level: "Heldag",
              start: "2022-05-02",
              end: "2022-05-04",
              antal: "30000"
            }
          ],
          expandableContent: [
            {
              id: "2a",
              content: "Anledning: Tar hand om barnet"
            }
          ]
        },
        {
          id: "3",
          animal: "Hamster",
          level: "F\xF6r\xE4ldrapenning",
          start: "2022-05-16",
          end: "2022-05-27",
          antal: "11000",
          aktiv: true,
          expandableRows: [
            {
              id: "3a",
              level: "Sjukpenningsniv\xE5",
              start: "2022-05-23",
              end: "2022-05-27",
              antal: "40000"
            },
            {
              id: "3b",
              level: "L\xE4gstaniv\xE5",
              start: "2022-05-21",
              end: "2022-05-22",
              antal: "20000"
            },
            {
              id: "3c",
              level: "Sjukpenningsniv\xE5",
              start: "2022-05-16",
              end: "2022-05-20",
              antal: "50000"
            }
          ],
          expandableContent: [
            {
              id: "3a",
              content: "Anledning: Tar hand om barnet"
            }
          ]
        }
      ],
      "expandableRows"
    );
    const sortableAttributes = getTableSortableAttributes(columns);
    const mySelectedRows = ref4([rows.value[0]]);
    const nextId = ref4(4);
    function onAddRow() {
      const id = nextId.value;
      nextId.value += 1;
      rows.value.push({
        id: String(id),
        animal: "Katt",
        level: "F\xF6r\xE4ldrapenning",
        start: "2022-04-11",
        end: "2022-04-20",
        antal: String(1e4 + id),
        aktiv: false
      });
    }
    function onRemoveRow(row) {
      assertRef2(tableRef);
      tableRef.value.withTabstopBehaviour("row-removal", () => {
        removeDatasetRows(rows, row);
      });
    }
    function onRemoveSelectedRows() {
      removeDatasetRows(rows, mySelectedRows);
    }
    const __returned__ = { tableRef, selectFieldOptions, oformateradTextKolumnSynlig, columns, rows, sortableAttributes, mySelectedRows, nextId, onAddRow, onRemoveRow, onRemoveSelectedRows, get FButton() {
      return FButton;
    }, get FSortFilterDataset() {
      return FSortFilterDataset;
    }, get FTable() {
      return FTable_default;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createVNode($setup["FButton"], {
        variant: "secondary",
        onClick: $setup.onRemoveSelectedRows
      }, {
        default: _withCtx(() => [..._cache[2] || (_cache[2] = [
          _createTextVNode(
            " Ta bort markerade rader ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }),
      _createVNode($setup["FSortFilterDataset"], {
        data: $setup.rows,
        "sortable-attributes": $setup.sortableAttributes
      }, {
        default: _withCtx(({ sortFilterResult }) => [
          _createVNode($setup["FTable"], {
            ref: "table",
            "selected-rows": $setup.mySelectedRows,
            "onUpdate:selectedRows": _cache[0] || (_cache[0] = ($event) => $setup.mySelectedRows = $event),
            rows: sortFilterResult,
            columns: $setup.columns,
            "key-attribute": "id",
            striped: "",
            selectable: "multi",
            "expandable-attribute": "expandableRows"
          }, {
            caption: _withCtx(() => [..._cache[3] || (_cache[3] = [
              _createTextVNode(
                "Tabell",
                -1
                /* CACHED */
              )
            ])]),
            footer: _withCtx(() => [..._cache[4] || (_cache[4] = [
              _createTextVNode(
                "Footer",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["selected-rows", "rows", "columns"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["data", "sortable-attributes"]),
      _createVNode($setup["FButton"], {
        variant: "secondary",
        onClick: $setup.onAddRow
      }, {
        default: _withCtx(() => [..._cache[5] || (_cache[5] = [
          _createTextVNode(
            "L\xE4gg till rad",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }),
      _createVNode($setup["FButton"], {
        variant: "secondary",
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.oformateradTextKolumnSynlig = !$setup.oformateradTextKolumnSynlig)
      }, {
        default: _withCtx(() => [..._cache[6] || (_cache[6] = [
          _createTextVNode(
            ' D\xF6lj/visa "Oformatterad text" ',
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      })
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-0ada21"
});
export {
  render
};
