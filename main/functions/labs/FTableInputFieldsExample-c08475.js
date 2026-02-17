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

// virtual-entry:virtual:packages/vue-labs/src/components/FTable/examples/FTableInputFieldsExample.vue:FTableInputFieldsExample-c08475.js
import { defineComponent as _defineComponent } from "vue";
import { computed as computed4, ref as ref4 } from "vue";
import { ValidationService as ValidationService2 } from "@fkui/logic";

// packages/vue-labs/dist/esm/index.esm.js
import { nextTick as nextTick3, toValue as toValue2, defineComponent as defineComponent2, useTemplateRef, computed as computed3, openBlock, createElementBlock, createElementVNode, createVNode, unref as unref3, renderSlot, withModifiers, normalizeClass, withCtx, createTextVNode, toDisplayString, createBlock, createCommentVNode, ref as ref3, inject as inject3, withDirectives, vShow, onMounted as onMounted3, watchEffect as watchEffect3, mergeProps, vModelText, toRef as toRef2, watch as watch3, onUpdated as onUpdated2, useModel, useSlots, provide as provide2, Fragment as Fragment2, renderList, resolveDynamicComponent, mergeModels, resolveDirective, normalizeProps, guardReactiveProps } from "vue";
import { assertRef, formatPostalCode, parsePlusgiro, parseNumber, formatNumber, parseOrganisationsnummer, parseDate, parseClearingNumber, parseBankgiro, parseBankAccountNumber, parsePersonnummer, formatPersonnummer, ElementIdService, assertSet, ValidationService, alertScreenReader, debounce, isEmpty, stripWhitespace, isSet, TranslationService } from "@fkui/logic";
import { FIcon, IFlex, IFlexItem, useTranslate, getItemIdentifier, FContextMenu, IComboboxDropdown, IPopupError, dispatchComponentValidityEvent, findItemIdentifier, useSlotUtils, setItemIdentifiers, FSortFilterDatasetInjected, EventBus, FFileSelector, FFileItem, TranslationMixin, FTextField, useTextFieldSetup } from "@fkui/vue";

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
var es_iterator_forEach = {};
var globalThis_1;
var hasRequiredGlobalThis;
function requireGlobalThis() {
  if (hasRequiredGlobalThis) return globalThis_1;
  hasRequiredGlobalThis = 1;
  var check = function(it) {
    return it && it.Math === Math && it;
  };
  globalThis_1 = // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == "object" && self) || check(typeof commonjsGlobal == "object" && commonjsGlobal) || check(typeof globalThis_1 == "object" && globalThis_1) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ (function() {
    return this;
  })() || Function("return this")();
  return globalThis_1;
}
var objectGetOwnPropertyDescriptor = {};
var fails;
var hasRequiredFails;
function requireFails() {
  if (hasRequiredFails) return fails;
  hasRequiredFails = 1;
  fails = function(exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };
  return fails;
}
var descriptors;
var hasRequiredDescriptors;
function requireDescriptors() {
  if (hasRequiredDescriptors) return descriptors;
  hasRequiredDescriptors = 1;
  var fails2 = requireFails();
  descriptors = !fails2(function() {
    return Object.defineProperty({}, 1, {
      get: function() {
        return 7;
      }
    })[1] !== 7;
  });
  return descriptors;
}
var functionBindNative;
var hasRequiredFunctionBindNative;
function requireFunctionBindNative() {
  if (hasRequiredFunctionBindNative) return functionBindNative;
  hasRequiredFunctionBindNative = 1;
  var fails2 = requireFails();
  functionBindNative = !fails2(function() {
    var test = (function() {
    }).bind();
    return typeof test != "function" || test.hasOwnProperty("prototype");
  });
  return functionBindNative;
}
var functionCall;
var hasRequiredFunctionCall;
function requireFunctionCall() {
  if (hasRequiredFunctionCall) return functionCall;
  hasRequiredFunctionCall = 1;
  var NATIVE_BIND = requireFunctionBindNative();
  var call = Function.prototype.call;
  functionCall = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
  };
  return functionCall;
}
var objectPropertyIsEnumerable = {};
var hasRequiredObjectPropertyIsEnumerable;
function requireObjectPropertyIsEnumerable() {
  if (hasRequiredObjectPropertyIsEnumerable) return objectPropertyIsEnumerable;
  hasRequiredObjectPropertyIsEnumerable = 1;
  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
  }, 1);
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;
  return objectPropertyIsEnumerable;
}
var createPropertyDescriptor;
var hasRequiredCreatePropertyDescriptor;
function requireCreatePropertyDescriptor() {
  if (hasRequiredCreatePropertyDescriptor) return createPropertyDescriptor;
  hasRequiredCreatePropertyDescriptor = 1;
  createPropertyDescriptor = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value
    };
  };
  return createPropertyDescriptor;
}
var functionUncurryThis;
var hasRequiredFunctionUncurryThis;
function requireFunctionUncurryThis() {
  if (hasRequiredFunctionUncurryThis) return functionUncurryThis;
  hasRequiredFunctionUncurryThis = 1;
  var NATIVE_BIND = requireFunctionBindNative();
  var FunctionPrototype = Function.prototype;
  var call = FunctionPrototype.call;
  var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
  functionUncurryThis = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
      return call.apply(fn, arguments);
    };
  };
  return functionUncurryThis;
}
var classofRaw;
var hasRequiredClassofRaw;
function requireClassofRaw() {
  if (hasRequiredClassofRaw) return classofRaw;
  hasRequiredClassofRaw = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var toString22 = uncurryThis({}.toString);
  var stringSlice = uncurryThis("".slice);
  classofRaw = function(it) {
    return stringSlice(toString22(it), 8, -1);
  };
  return classofRaw;
}
var indexedObject;
var hasRequiredIndexedObject;
function requireIndexedObject() {
  if (hasRequiredIndexedObject) return indexedObject;
  hasRequiredIndexedObject = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var fails2 = requireFails();
  var classof2 = requireClassofRaw();
  var $Object = Object;
  var split = uncurryThis("".split);
  indexedObject = fails2(function() {
    return !$Object("z").propertyIsEnumerable(0);
  }) ? function(it) {
    return classof2(it) === "String" ? split(it, "") : $Object(it);
  } : $Object;
  return indexedObject;
}
var isNullOrUndefined;
var hasRequiredIsNullOrUndefined;
function requireIsNullOrUndefined() {
  if (hasRequiredIsNullOrUndefined) return isNullOrUndefined;
  hasRequiredIsNullOrUndefined = 1;
  isNullOrUndefined = function(it) {
    return it === null || it === void 0;
  };
  return isNullOrUndefined;
}
var requireObjectCoercible;
var hasRequiredRequireObjectCoercible;
function requireRequireObjectCoercible() {
  if (hasRequiredRequireObjectCoercible) return requireObjectCoercible;
  hasRequiredRequireObjectCoercible = 1;
  var isNullOrUndefined2 = requireIsNullOrUndefined();
  var $TypeError = TypeError;
  requireObjectCoercible = function(it) {
    if (isNullOrUndefined2(it)) throw new $TypeError("Can't call method on " + it);
    return it;
  };
  return requireObjectCoercible;
}
var toIndexedObject;
var hasRequiredToIndexedObject;
function requireToIndexedObject() {
  if (hasRequiredToIndexedObject) return toIndexedObject;
  hasRequiredToIndexedObject = 1;
  var IndexedObject = requireIndexedObject();
  var requireObjectCoercible2 = requireRequireObjectCoercible();
  toIndexedObject = function(it) {
    return IndexedObject(requireObjectCoercible2(it));
  };
  return toIndexedObject;
}
var isCallable;
var hasRequiredIsCallable;
function requireIsCallable() {
  if (hasRequiredIsCallable) return isCallable;
  hasRequiredIsCallable = 1;
  var documentAll = typeof document == "object" && document.all;
  isCallable = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
  } : function(argument) {
    return typeof argument == "function";
  };
  return isCallable;
}
var isObject2;
var hasRequiredIsObject;
function requireIsObject() {
  if (hasRequiredIsObject) return isObject2;
  hasRequiredIsObject = 1;
  var isCallable2 = requireIsCallable();
  isObject2 = function(it) {
    return typeof it == "object" ? it !== null : isCallable2(it);
  };
  return isObject2;
}
var getBuiltIn;
var hasRequiredGetBuiltIn;
function requireGetBuiltIn() {
  if (hasRequiredGetBuiltIn) return getBuiltIn;
  hasRequiredGetBuiltIn = 1;
  var globalThis2 = requireGlobalThis();
  var isCallable2 = requireIsCallable();
  var aFunction = function(argument) {
    return isCallable2(argument) ? argument : void 0;
  };
  getBuiltIn = function(namespace, method) {
    return arguments.length < 2 ? aFunction(globalThis2[namespace]) : globalThis2[namespace] && globalThis2[namespace][method];
  };
  return getBuiltIn;
}
var objectIsPrototypeOf;
var hasRequiredObjectIsPrototypeOf;
function requireObjectIsPrototypeOf() {
  if (hasRequiredObjectIsPrototypeOf) return objectIsPrototypeOf;
  hasRequiredObjectIsPrototypeOf = 1;
  var uncurryThis = requireFunctionUncurryThis();
  objectIsPrototypeOf = uncurryThis({}.isPrototypeOf);
  return objectIsPrototypeOf;
}
var environmentUserAgent;
var hasRequiredEnvironmentUserAgent;
function requireEnvironmentUserAgent() {
  if (hasRequiredEnvironmentUserAgent) return environmentUserAgent;
  hasRequiredEnvironmentUserAgent = 1;
  var globalThis2 = requireGlobalThis();
  var navigator2 = globalThis2.navigator;
  var userAgent = navigator2 && navigator2.userAgent;
  environmentUserAgent = userAgent ? String(userAgent) : "";
  return environmentUserAgent;
}
var environmentV8Version;
var hasRequiredEnvironmentV8Version;
function requireEnvironmentV8Version() {
  if (hasRequiredEnvironmentV8Version) return environmentV8Version;
  hasRequiredEnvironmentV8Version = 1;
  var globalThis2 = requireGlobalThis();
  var userAgent = requireEnvironmentUserAgent();
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
  environmentV8Version = version;
  return environmentV8Version;
}
var symbolConstructorDetection;
var hasRequiredSymbolConstructorDetection;
function requireSymbolConstructorDetection() {
  if (hasRequiredSymbolConstructorDetection) return symbolConstructorDetection;
  hasRequiredSymbolConstructorDetection = 1;
  var V8_VERSION = requireEnvironmentV8Version();
  var fails2 = requireFails();
  var globalThis2 = requireGlobalThis();
  var $String = globalThis2.String;
  symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails2(function() {
    var symbol = /* @__PURE__ */ Symbol("symbol detection");
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
  });
  return symbolConstructorDetection;
}
var useSymbolAsUid;
var hasRequiredUseSymbolAsUid;
function requireUseSymbolAsUid() {
  if (hasRequiredUseSymbolAsUid) return useSymbolAsUid;
  hasRequiredUseSymbolAsUid = 1;
  var NATIVE_SYMBOL = requireSymbolConstructorDetection();
  useSymbolAsUid = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  return useSymbolAsUid;
}
var isSymbol;
var hasRequiredIsSymbol;
function requireIsSymbol() {
  if (hasRequiredIsSymbol) return isSymbol;
  hasRequiredIsSymbol = 1;
  var getBuiltIn2 = requireGetBuiltIn();
  var isCallable2 = requireIsCallable();
  var isPrototypeOf = requireObjectIsPrototypeOf();
  var USE_SYMBOL_AS_UID = requireUseSymbolAsUid();
  var $Object = Object;
  isSymbol = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
  } : function(it) {
    var $Symbol = getBuiltIn2("Symbol");
    return isCallable2($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
  };
  return isSymbol;
}
var tryToString;
var hasRequiredTryToString;
function requireTryToString() {
  if (hasRequiredTryToString) return tryToString;
  hasRequiredTryToString = 1;
  var $String = String;
  tryToString = function(argument) {
    try {
      return $String(argument);
    } catch (error) {
      return "Object";
    }
  };
  return tryToString;
}
var aCallable;
var hasRequiredACallable;
function requireACallable() {
  if (hasRequiredACallable) return aCallable;
  hasRequiredACallable = 1;
  var isCallable2 = requireIsCallable();
  var tryToString2 = requireTryToString();
  var $TypeError = TypeError;
  aCallable = function(argument) {
    if (isCallable2(argument)) return argument;
    throw new $TypeError(tryToString2(argument) + " is not a function");
  };
  return aCallable;
}
var getMethod;
var hasRequiredGetMethod;
function requireGetMethod() {
  if (hasRequiredGetMethod) return getMethod;
  hasRequiredGetMethod = 1;
  var aCallable2 = requireACallable();
  var isNullOrUndefined2 = requireIsNullOrUndefined();
  getMethod = function(V, P) {
    var func = V[P];
    return isNullOrUndefined2(func) ? void 0 : aCallable2(func);
  };
  return getMethod;
}
var ordinaryToPrimitive;
var hasRequiredOrdinaryToPrimitive;
function requireOrdinaryToPrimitive() {
  if (hasRequiredOrdinaryToPrimitive) return ordinaryToPrimitive;
  hasRequiredOrdinaryToPrimitive = 1;
  var call = requireFunctionCall();
  var isCallable2 = requireIsCallable();
  var isObject22 = requireIsObject();
  var $TypeError = TypeError;
  ordinaryToPrimitive = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable2(fn = input.toString) && !isObject22(val = call(fn, input))) return val;
    if (isCallable2(fn = input.valueOf) && !isObject22(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable2(fn = input.toString) && !isObject22(val = call(fn, input))) return val;
    throw new $TypeError("Can't convert object to primitive value");
  };
  return ordinaryToPrimitive;
}
var sharedStore = {
  exports: {}
};
var isPure;
var hasRequiredIsPure;
function requireIsPure() {
  if (hasRequiredIsPure) return isPure;
  hasRequiredIsPure = 1;
  isPure = false;
  return isPure;
}
var defineGlobalProperty;
var hasRequiredDefineGlobalProperty;
function requireDefineGlobalProperty() {
  if (hasRequiredDefineGlobalProperty) return defineGlobalProperty;
  hasRequiredDefineGlobalProperty = 1;
  var globalThis2 = requireGlobalThis();
  var defineProperty = Object.defineProperty;
  defineGlobalProperty = function(key, value) {
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
  return defineGlobalProperty;
}
var hasRequiredSharedStore;
function requireSharedStore() {
  if (hasRequiredSharedStore) return sharedStore.exports;
  hasRequiredSharedStore = 1;
  var IS_PURE = requireIsPure();
  var globalThis2 = requireGlobalThis();
  var defineGlobalProperty2 = requireDefineGlobalProperty();
  var SHARED = "__core-js_shared__";
  var store = sharedStore.exports = globalThis2[SHARED] || defineGlobalProperty2(SHARED, {});
  (store.versions || (store.versions = [])).push({
    version: "3.48.0",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",
    license: "https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  });
  return sharedStore.exports;
}
var shared;
var hasRequiredShared;
function requireShared() {
  if (hasRequiredShared) return shared;
  hasRequiredShared = 1;
  var store = requireSharedStore();
  shared = function(key, value) {
    return store[key] || (store[key] = value || {});
  };
  return shared;
}
var toObject;
var hasRequiredToObject;
function requireToObject() {
  if (hasRequiredToObject) return toObject;
  hasRequiredToObject = 1;
  var requireObjectCoercible2 = requireRequireObjectCoercible();
  var $Object = Object;
  toObject = function(argument) {
    return $Object(requireObjectCoercible2(argument));
  };
  return toObject;
}
var hasOwnProperty_1;
var hasRequiredHasOwnProperty;
function requireHasOwnProperty() {
  if (hasRequiredHasOwnProperty) return hasOwnProperty_1;
  hasRequiredHasOwnProperty = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var toObject2 = requireToObject();
  var hasOwnProperty = uncurryThis({}.hasOwnProperty);
  hasOwnProperty_1 = Object.hasOwn || function hasOwn2(it, key) {
    return hasOwnProperty(toObject2(it), key);
  };
  return hasOwnProperty_1;
}
var uid;
var hasRequiredUid;
function requireUid() {
  if (hasRequiredUid) return uid;
  hasRequiredUid = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var id = 0;
  var postfix = Math.random();
  var toString22 = uncurryThis(1.1.toString);
  uid = function(key) {
    return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString22(++id + postfix, 36);
  };
  return uid;
}
var wellKnownSymbol;
var hasRequiredWellKnownSymbol;
function requireWellKnownSymbol() {
  if (hasRequiredWellKnownSymbol) return wellKnownSymbol;
  hasRequiredWellKnownSymbol = 1;
  var globalThis2 = requireGlobalThis();
  var shared2 = requireShared();
  var hasOwn2 = requireHasOwnProperty();
  var uid2 = requireUid();
  var NATIVE_SYMBOL = requireSymbolConstructorDetection();
  var USE_SYMBOL_AS_UID = requireUseSymbolAsUid();
  var Symbol2 = globalThis2.Symbol;
  var WellKnownSymbolsStore = shared2("wks");
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid2;
  wellKnownSymbol = function(name) {
    if (!hasOwn2(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn2(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
    }
    return WellKnownSymbolsStore[name];
  };
  return wellKnownSymbol;
}
var toPrimitive;
var hasRequiredToPrimitive;
function requireToPrimitive() {
  if (hasRequiredToPrimitive) return toPrimitive;
  hasRequiredToPrimitive = 1;
  var call = requireFunctionCall();
  var isObject22 = requireIsObject();
  var isSymbol2 = requireIsSymbol();
  var getMethod2 = requireGetMethod();
  var ordinaryToPrimitive2 = requireOrdinaryToPrimitive();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var $TypeError = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol2("toPrimitive");
  toPrimitive = function(input, pref) {
    if (!isObject22(input) || isSymbol2(input)) return input;
    var exoticToPrim = getMethod2(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === void 0) pref = "default";
      result = call(exoticToPrim, input, pref);
      if (!isObject22(result) || isSymbol2(result)) return result;
      throw new $TypeError("Can't convert object to primitive value");
    }
    if (pref === void 0) pref = "number";
    return ordinaryToPrimitive2(input, pref);
  };
  return toPrimitive;
}
var toPropertyKey;
var hasRequiredToPropertyKey;
function requireToPropertyKey() {
  if (hasRequiredToPropertyKey) return toPropertyKey;
  hasRequiredToPropertyKey = 1;
  var toPrimitive2 = requireToPrimitive();
  var isSymbol2 = requireIsSymbol();
  toPropertyKey = function(argument) {
    var key = toPrimitive2(argument, "string");
    return isSymbol2(key) ? key : key + "";
  };
  return toPropertyKey;
}
var documentCreateElement;
var hasRequiredDocumentCreateElement;
function requireDocumentCreateElement() {
  if (hasRequiredDocumentCreateElement) return documentCreateElement;
  hasRequiredDocumentCreateElement = 1;
  var globalThis2 = requireGlobalThis();
  var isObject22 = requireIsObject();
  var document2 = globalThis2.document;
  var EXISTS = isObject22(document2) && isObject22(document2.createElement);
  documentCreateElement = function(it) {
    return EXISTS ? document2.createElement(it) : {};
  };
  return documentCreateElement;
}
var ie8DomDefine;
var hasRequiredIe8DomDefine;
function requireIe8DomDefine() {
  if (hasRequiredIe8DomDefine) return ie8DomDefine;
  hasRequiredIe8DomDefine = 1;
  var DESCRIPTORS = requireDescriptors();
  var fails2 = requireFails();
  var createElement = requireDocumentCreateElement();
  ie8DomDefine = !DESCRIPTORS && !fails2(function() {
    return Object.defineProperty(createElement("div"), "a", {
      get: function() {
        return 7;
      }
    }).a !== 7;
  });
  return ie8DomDefine;
}
var hasRequiredObjectGetOwnPropertyDescriptor;
function requireObjectGetOwnPropertyDescriptor() {
  if (hasRequiredObjectGetOwnPropertyDescriptor) return objectGetOwnPropertyDescriptor;
  hasRequiredObjectGetOwnPropertyDescriptor = 1;
  var DESCRIPTORS = requireDescriptors();
  var call = requireFunctionCall();
  var propertyIsEnumerableModule = requireObjectPropertyIsEnumerable();
  var createPropertyDescriptor2 = requireCreatePropertyDescriptor();
  var toIndexedObject2 = requireToIndexedObject();
  var toPropertyKey2 = requireToPropertyKey();
  var hasOwn2 = requireHasOwnProperty();
  var IE8_DOM_DEFINE = requireIe8DomDefine();
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject2(O);
    P = toPropertyKey2(P);
    if (IE8_DOM_DEFINE) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) {
    }
    if (hasOwn2(O, P)) return createPropertyDescriptor2(!call(propertyIsEnumerableModule.f, O, P), O[P]);
  };
  return objectGetOwnPropertyDescriptor;
}
var objectDefineProperty = {};
var v8PrototypeDefineBug;
var hasRequiredV8PrototypeDefineBug;
function requireV8PrototypeDefineBug() {
  if (hasRequiredV8PrototypeDefineBug) return v8PrototypeDefineBug;
  hasRequiredV8PrototypeDefineBug = 1;
  var DESCRIPTORS = requireDescriptors();
  var fails2 = requireFails();
  v8PrototypeDefineBug = DESCRIPTORS && fails2(function() {
    return Object.defineProperty(function() {
    }, "prototype", {
      value: 42,
      writable: false
    }).prototype !== 42;
  });
  return v8PrototypeDefineBug;
}
var anObject;
var hasRequiredAnObject;
function requireAnObject() {
  if (hasRequiredAnObject) return anObject;
  hasRequiredAnObject = 1;
  var isObject22 = requireIsObject();
  var $String = String;
  var $TypeError = TypeError;
  anObject = function(argument) {
    if (isObject22(argument)) return argument;
    throw new $TypeError($String(argument) + " is not an object");
  };
  return anObject;
}
var hasRequiredObjectDefineProperty;
function requireObjectDefineProperty() {
  if (hasRequiredObjectDefineProperty) return objectDefineProperty;
  hasRequiredObjectDefineProperty = 1;
  var DESCRIPTORS = requireDescriptors();
  var IE8_DOM_DEFINE = requireIe8DomDefine();
  var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
  var anObject2 = requireAnObject();
  var toPropertyKey2 = requireToPropertyKey();
  var $TypeError = TypeError;
  var $defineProperty = Object.defineProperty;
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = "enumerable";
  var CONFIGURABLE = "configurable";
  var WRITABLE = "writable";
  objectDefineProperty.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject2(O);
    P = toPropertyKey2(P);
    anObject2(Attributes);
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
    anObject2(O);
    P = toPropertyKey2(P);
    anObject2(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) {
    }
    if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
  };
  return objectDefineProperty;
}
var createNonEnumerableProperty;
var hasRequiredCreateNonEnumerableProperty;
function requireCreateNonEnumerableProperty() {
  if (hasRequiredCreateNonEnumerableProperty) return createNonEnumerableProperty;
  hasRequiredCreateNonEnumerableProperty = 1;
  var DESCRIPTORS = requireDescriptors();
  var definePropertyModule = requireObjectDefineProperty();
  var createPropertyDescriptor2 = requireCreatePropertyDescriptor();
  createNonEnumerableProperty = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor2(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  return createNonEnumerableProperty;
}
var makeBuiltIn = {
  exports: {}
};
var functionName;
var hasRequiredFunctionName;
function requireFunctionName() {
  if (hasRequiredFunctionName) return functionName;
  hasRequiredFunctionName = 1;
  var DESCRIPTORS = requireDescriptors();
  var hasOwn2 = requireHasOwnProperty();
  var FunctionPrototype = Function.prototype;
  var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
  var EXISTS = hasOwn2(FunctionPrototype, "name");
  var PROPER = EXISTS && (function something() {
  }).name === "something";
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
  functionName = {
    EXISTS,
    PROPER,
    CONFIGURABLE
  };
  return functionName;
}
var inspectSource;
var hasRequiredInspectSource;
function requireInspectSource() {
  if (hasRequiredInspectSource) return inspectSource;
  hasRequiredInspectSource = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var isCallable2 = requireIsCallable();
  var store = requireSharedStore();
  var functionToString = uncurryThis(Function.toString);
  if (!isCallable2(store.inspectSource)) {
    store.inspectSource = function(it) {
      return functionToString(it);
    };
  }
  inspectSource = store.inspectSource;
  return inspectSource;
}
var weakMapBasicDetection;
var hasRequiredWeakMapBasicDetection;
function requireWeakMapBasicDetection() {
  if (hasRequiredWeakMapBasicDetection) return weakMapBasicDetection;
  hasRequiredWeakMapBasicDetection = 1;
  var globalThis2 = requireGlobalThis();
  var isCallable2 = requireIsCallable();
  var WeakMap2 = globalThis2.WeakMap;
  weakMapBasicDetection = isCallable2(WeakMap2) && /native code/.test(String(WeakMap2));
  return weakMapBasicDetection;
}
var sharedKey;
var hasRequiredSharedKey;
function requireSharedKey() {
  if (hasRequiredSharedKey) return sharedKey;
  hasRequiredSharedKey = 1;
  var shared2 = requireShared();
  var uid2 = requireUid();
  var keys = shared2("keys");
  sharedKey = function(key) {
    return keys[key] || (keys[key] = uid2(key));
  };
  return sharedKey;
}
var hiddenKeys;
var hasRequiredHiddenKeys;
function requireHiddenKeys() {
  if (hasRequiredHiddenKeys) return hiddenKeys;
  hasRequiredHiddenKeys = 1;
  hiddenKeys = {};
  return hiddenKeys;
}
var internalState;
var hasRequiredInternalState;
function requireInternalState() {
  if (hasRequiredInternalState) return internalState;
  hasRequiredInternalState = 1;
  var NATIVE_WEAK_MAP = requireWeakMapBasicDetection();
  var globalThis2 = requireGlobalThis();
  var isObject22 = requireIsObject();
  var createNonEnumerableProperty2 = requireCreateNonEnumerableProperty();
  var hasOwn2 = requireHasOwnProperty();
  var shared2 = requireSharedStore();
  var sharedKey2 = requireSharedKey();
  var hiddenKeys2 = requireHiddenKeys();
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
      if (!isObject22(it) || (state = get(it)).type !== TYPE) {
        throw new TypeError2("Incompatible receiver, " + TYPE + " required");
      }
      return state;
    };
  };
  if (NATIVE_WEAK_MAP || shared2.state) {
    var store = shared2.state || (shared2.state = new WeakMap2());
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
    var STATE = sharedKey2("state");
    hiddenKeys2[STATE] = true;
    set = function(it, metadata) {
      if (hasOwn2(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty2(it, STATE, metadata);
      return metadata;
    };
    get = function(it) {
      return hasOwn2(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
      return hasOwn2(it, STATE);
    };
  }
  internalState = {
    set,
    get,
    has,
    enforce,
    getterFor
  };
  return internalState;
}
var hasRequiredMakeBuiltIn;
function requireMakeBuiltIn() {
  if (hasRequiredMakeBuiltIn) return makeBuiltIn.exports;
  hasRequiredMakeBuiltIn = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var fails2 = requireFails();
  var isCallable2 = requireIsCallable();
  var hasOwn2 = requireHasOwnProperty();
  var DESCRIPTORS = requireDescriptors();
  var CONFIGURABLE_FUNCTION_NAME = requireFunctionName().CONFIGURABLE;
  var inspectSource2 = requireInspectSource();
  var InternalStateModule = requireInternalState();
  var enforceInternalState = InternalStateModule.enforce;
  var getInternalState = InternalStateModule.get;
  var $String = String;
  var defineProperty = Object.defineProperty;
  var stringSlice = uncurryThis("".slice);
  var replace = uncurryThis("".replace);
  var join = uncurryThis([].join);
  var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails2(function() {
    return defineProperty(function() {
    }, "length", {
      value: 8
    }).length !== 8;
  });
  var TEMPLATE = String(String).split("String");
  var makeBuiltIn$1 = makeBuiltIn.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === "Symbol(") {
      name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
    }
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn2(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      if (DESCRIPTORS) defineProperty(value, "name", {
        value: name,
        configurable: true
      });
      else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn2(options, "arity") && value.length !== options.arity) {
      defineProperty(value, "length", {
        value: options.arity
      });
    }
    try {
      if (options && hasOwn2(options, "constructor") && options.constructor) {
        if (DESCRIPTORS) defineProperty(value, "prototype", {
          writable: false
        });
      } else if (value.prototype) value.prototype = void 0;
    } catch (error) {
    }
    var state = enforceInternalState(value);
    if (!hasOwn2(state, "source")) {
      state.source = join(TEMPLATE, typeof name == "string" ? name : "");
    }
    return value;
  };
  Function.prototype.toString = makeBuiltIn$1(function toString22() {
    return isCallable2(this) && getInternalState(this).source || inspectSource2(this);
  }, "toString");
  return makeBuiltIn.exports;
}
var defineBuiltIn;
var hasRequiredDefineBuiltIn;
function requireDefineBuiltIn() {
  if (hasRequiredDefineBuiltIn) return defineBuiltIn;
  hasRequiredDefineBuiltIn = 1;
  var isCallable2 = requireIsCallable();
  var definePropertyModule = requireObjectDefineProperty();
  var makeBuiltIn2 = requireMakeBuiltIn();
  var defineGlobalProperty2 = requireDefineGlobalProperty();
  defineBuiltIn = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== void 0 ? options.name : key;
    if (isCallable2(value)) makeBuiltIn2(value, name, options);
    if (options.global) {
      if (simple) O[key] = value;
      else defineGlobalProperty2(key, value);
    } else {
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
  return defineBuiltIn;
}
var objectGetOwnPropertyNames = {};
var mathTrunc;
var hasRequiredMathTrunc;
function requireMathTrunc() {
  if (hasRequiredMathTrunc) return mathTrunc;
  hasRequiredMathTrunc = 1;
  var ceil = Math.ceil;
  var floor = Math.floor;
  mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
  };
  return mathTrunc;
}
var toIntegerOrInfinity;
var hasRequiredToIntegerOrInfinity;
function requireToIntegerOrInfinity() {
  if (hasRequiredToIntegerOrInfinity) return toIntegerOrInfinity;
  hasRequiredToIntegerOrInfinity = 1;
  var trunc = requireMathTrunc();
  toIntegerOrInfinity = function(argument) {
    var number = +argument;
    return number !== number || number === 0 ? 0 : trunc(number);
  };
  return toIntegerOrInfinity;
}
var toAbsoluteIndex;
var hasRequiredToAbsoluteIndex;
function requireToAbsoluteIndex() {
  if (hasRequiredToAbsoluteIndex) return toAbsoluteIndex;
  hasRequiredToAbsoluteIndex = 1;
  var toIntegerOrInfinity2 = requireToIntegerOrInfinity();
  var max = Math.max;
  var min = Math.min;
  toAbsoluteIndex = function(index, length) {
    var integer = toIntegerOrInfinity2(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
  };
  return toAbsoluteIndex;
}
var toLength;
var hasRequiredToLength;
function requireToLength() {
  if (hasRequiredToLength) return toLength;
  hasRequiredToLength = 1;
  var toIntegerOrInfinity2 = requireToIntegerOrInfinity();
  var min = Math.min;
  toLength = function(argument) {
    var len = toIntegerOrInfinity2(argument);
    return len > 0 ? min(len, 9007199254740991) : 0;
  };
  return toLength;
}
var lengthOfArrayLike;
var hasRequiredLengthOfArrayLike;
function requireLengthOfArrayLike() {
  if (hasRequiredLengthOfArrayLike) return lengthOfArrayLike;
  hasRequiredLengthOfArrayLike = 1;
  var toLength2 = requireToLength();
  lengthOfArrayLike = function(obj) {
    return toLength2(obj.length);
  };
  return lengthOfArrayLike;
}
var arrayIncludes;
var hasRequiredArrayIncludes;
function requireArrayIncludes() {
  if (hasRequiredArrayIncludes) return arrayIncludes;
  hasRequiredArrayIncludes = 1;
  var toIndexedObject2 = requireToIndexedObject();
  var toAbsoluteIndex2 = requireToAbsoluteIndex();
  var lengthOfArrayLike2 = requireLengthOfArrayLike();
  var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
      var O = toIndexedObject2($this);
      var length = lengthOfArrayLike2(O);
      if (length === 0) return !IS_INCLUDES && -1;
      var index = toAbsoluteIndex2(fromIndex, length);
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
  arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
  };
  return arrayIncludes;
}
var objectKeysInternal;
var hasRequiredObjectKeysInternal;
function requireObjectKeysInternal() {
  if (hasRequiredObjectKeysInternal) return objectKeysInternal;
  hasRequiredObjectKeysInternal = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var hasOwn2 = requireHasOwnProperty();
  var toIndexedObject2 = requireToIndexedObject();
  var indexOf = requireArrayIncludes().indexOf;
  var hiddenKeys2 = requireHiddenKeys();
  var push = uncurryThis([].push);
  objectKeysInternal = function(object, names) {
    var O = toIndexedObject2(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn2(hiddenKeys2, key) && hasOwn2(O, key) && push(result, key);
    while (names.length > i) if (hasOwn2(O, key = names[i++])) {
      ~indexOf(result, key) || push(result, key);
    }
    return result;
  };
  return objectKeysInternal;
}
var enumBugKeys;
var hasRequiredEnumBugKeys;
function requireEnumBugKeys() {
  if (hasRequiredEnumBugKeys) return enumBugKeys;
  hasRequiredEnumBugKeys = 1;
  enumBugKeys = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  return enumBugKeys;
}
var hasRequiredObjectGetOwnPropertyNames;
function requireObjectGetOwnPropertyNames() {
  if (hasRequiredObjectGetOwnPropertyNames) return objectGetOwnPropertyNames;
  hasRequiredObjectGetOwnPropertyNames = 1;
  var internalObjectKeys = requireObjectKeysInternal();
  var enumBugKeys2 = requireEnumBugKeys();
  var hiddenKeys2 = enumBugKeys2.concat("length", "prototype");
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys2);
  };
  return objectGetOwnPropertyNames;
}
var objectGetOwnPropertySymbols = {};
var hasRequiredObjectGetOwnPropertySymbols;
function requireObjectGetOwnPropertySymbols() {
  if (hasRequiredObjectGetOwnPropertySymbols) return objectGetOwnPropertySymbols;
  hasRequiredObjectGetOwnPropertySymbols = 1;
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
  return objectGetOwnPropertySymbols;
}
var ownKeys;
var hasRequiredOwnKeys;
function requireOwnKeys() {
  if (hasRequiredOwnKeys) return ownKeys;
  hasRequiredOwnKeys = 1;
  var getBuiltIn2 = requireGetBuiltIn();
  var uncurryThis = requireFunctionUncurryThis();
  var getOwnPropertyNamesModule = requireObjectGetOwnPropertyNames();
  var getOwnPropertySymbolsModule = requireObjectGetOwnPropertySymbols();
  var anObject2 = requireAnObject();
  var concat = uncurryThis([].concat);
  ownKeys = getBuiltIn2("Reflect", "ownKeys") || function ownKeys2(it) {
    var keys = getOwnPropertyNamesModule.f(anObject2(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
  };
  return ownKeys;
}
var copyConstructorProperties;
var hasRequiredCopyConstructorProperties;
function requireCopyConstructorProperties() {
  if (hasRequiredCopyConstructorProperties) return copyConstructorProperties;
  hasRequiredCopyConstructorProperties = 1;
  var hasOwn2 = requireHasOwnProperty();
  var ownKeys2 = requireOwnKeys();
  var getOwnPropertyDescriptorModule = requireObjectGetOwnPropertyDescriptor();
  var definePropertyModule = requireObjectDefineProperty();
  copyConstructorProperties = function(target, source, exceptions) {
    var keys = ownKeys2(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn2(target, key) && !(exceptions && hasOwn2(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };
  return copyConstructorProperties;
}
var isForced_1;
var hasRequiredIsForced;
function requireIsForced() {
  if (hasRequiredIsForced) return isForced_1;
  hasRequiredIsForced = 1;
  var fails2 = requireFails();
  var isCallable2 = requireIsCallable();
  var replacement = /#|\.prototype\./;
  var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable2(detection) ? fails2(detection) : !!detection;
  };
  var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
  };
  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = "N";
  var POLYFILL = isForced.POLYFILL = "P";
  isForced_1 = isForced;
  return isForced_1;
}
var _export;
var hasRequired_export;
function require_export() {
  if (hasRequired_export) return _export;
  hasRequired_export = 1;
  var globalThis2 = requireGlobalThis();
  var getOwnPropertyDescriptor = requireObjectGetOwnPropertyDescriptor().f;
  var createNonEnumerableProperty2 = requireCreateNonEnumerableProperty();
  var defineBuiltIn2 = requireDefineBuiltIn();
  var defineGlobalProperty2 = requireDefineGlobalProperty();
  var copyConstructorProperties2 = requireCopyConstructorProperties();
  var isForced = requireIsForced();
  _export = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = globalThis2;
    } else if (STATIC) {
      target = globalThis2[TARGET] || defineGlobalProperty2(TARGET, {});
    } else {
      target = globalThis2[TARGET] && globalThis2[TARGET].prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
      if (!FORCED && targetProperty !== void 0) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties2(sourceProperty, targetProperty);
      }
      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty2(sourceProperty, "sham", true);
      }
      defineBuiltIn2(target, key, sourceProperty, options);
    }
  };
  return _export;
}
var functionUncurryThisClause;
var hasRequiredFunctionUncurryThisClause;
function requireFunctionUncurryThisClause() {
  if (hasRequiredFunctionUncurryThisClause) return functionUncurryThisClause;
  hasRequiredFunctionUncurryThisClause = 1;
  var classofRaw2 = requireClassofRaw();
  var uncurryThis = requireFunctionUncurryThis();
  functionUncurryThisClause = function(fn) {
    if (classofRaw2(fn) === "Function") return uncurryThis(fn);
  };
  return functionUncurryThisClause;
}
var functionBindContext;
var hasRequiredFunctionBindContext;
function requireFunctionBindContext() {
  if (hasRequiredFunctionBindContext) return functionBindContext;
  hasRequiredFunctionBindContext = 1;
  var uncurryThis = requireFunctionUncurryThisClause();
  var aCallable2 = requireACallable();
  var NATIVE_BIND = requireFunctionBindNative();
  var bind = uncurryThis(uncurryThis.bind);
  functionBindContext = function(fn, that) {
    aCallable2(fn);
    return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
      return fn.apply(that, arguments);
    };
  };
  return functionBindContext;
}
var iterators;
var hasRequiredIterators;
function requireIterators() {
  if (hasRequiredIterators) return iterators;
  hasRequiredIterators = 1;
  iterators = {};
  return iterators;
}
var isArrayIteratorMethod;
var hasRequiredIsArrayIteratorMethod;
function requireIsArrayIteratorMethod() {
  if (hasRequiredIsArrayIteratorMethod) return isArrayIteratorMethod;
  hasRequiredIsArrayIteratorMethod = 1;
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var Iterators = requireIterators();
  var ITERATOR = wellKnownSymbol2("iterator");
  var ArrayPrototype = Array.prototype;
  isArrayIteratorMethod = function(it) {
    return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
  };
  return isArrayIteratorMethod;
}
var toStringTagSupport;
var hasRequiredToStringTagSupport;
function requireToStringTagSupport() {
  if (hasRequiredToStringTagSupport) return toStringTagSupport;
  hasRequiredToStringTagSupport = 1;
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var TO_STRING_TAG = wellKnownSymbol2("toStringTag");
  var test = {};
  test[TO_STRING_TAG] = "z";
  toStringTagSupport = String(test) === "[object z]";
  return toStringTagSupport;
}
var classof;
var hasRequiredClassof;
function requireClassof() {
  if (hasRequiredClassof) return classof;
  hasRequiredClassof = 1;
  var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
  var isCallable2 = requireIsCallable();
  var classofRaw2 = requireClassofRaw();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var TO_STRING_TAG = wellKnownSymbol2("toStringTag");
  var $Object = Object;
  var CORRECT_ARGUMENTS = classofRaw2(/* @__PURE__ */ (function() {
    return arguments;
  })()) === "Arguments";
  var tryGet = function(it, key) {
    try {
      return it[key];
    } catch (error) {
    }
  };
  classof = TO_STRING_TAG_SUPPORT ? classofRaw2 : function(it) {
    var O, tag, result;
    return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw2(O) : (result = classofRaw2(O)) === "Object" && isCallable2(O.callee) ? "Arguments" : result;
  };
  return classof;
}
var getIteratorMethod;
var hasRequiredGetIteratorMethod;
function requireGetIteratorMethod() {
  if (hasRequiredGetIteratorMethod) return getIteratorMethod;
  hasRequiredGetIteratorMethod = 1;
  var classof2 = requireClassof();
  var getMethod2 = requireGetMethod();
  var isNullOrUndefined2 = requireIsNullOrUndefined();
  var Iterators = requireIterators();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var ITERATOR = wellKnownSymbol2("iterator");
  getIteratorMethod = function(it) {
    if (!isNullOrUndefined2(it)) return getMethod2(it, ITERATOR) || getMethod2(it, "@@iterator") || Iterators[classof2(it)];
  };
  return getIteratorMethod;
}
var getIterator;
var hasRequiredGetIterator;
function requireGetIterator() {
  if (hasRequiredGetIterator) return getIterator;
  hasRequiredGetIterator = 1;
  var call = requireFunctionCall();
  var aCallable2 = requireACallable();
  var anObject2 = requireAnObject();
  var tryToString2 = requireTryToString();
  var getIteratorMethod2 = requireGetIteratorMethod();
  var $TypeError = TypeError;
  getIterator = function(argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod2(argument) : usingIterator;
    if (aCallable2(iteratorMethod)) return anObject2(call(iteratorMethod, argument));
    throw new $TypeError(tryToString2(argument) + " is not iterable");
  };
  return getIterator;
}
var iteratorClose;
var hasRequiredIteratorClose;
function requireIteratorClose() {
  if (hasRequiredIteratorClose) return iteratorClose;
  hasRequiredIteratorClose = 1;
  var call = requireFunctionCall();
  var anObject2 = requireAnObject();
  var getMethod2 = requireGetMethod();
  iteratorClose = function(iterator, kind, value) {
    var innerResult, innerError;
    anObject2(iterator);
    try {
      innerResult = getMethod2(iterator, "return");
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
    anObject2(innerResult);
    return value;
  };
  return iteratorClose;
}
var iterate;
var hasRequiredIterate;
function requireIterate() {
  if (hasRequiredIterate) return iterate;
  hasRequiredIterate = 1;
  var bind = requireFunctionBindContext();
  var call = requireFunctionCall();
  var anObject2 = requireAnObject();
  var tryToString2 = requireTryToString();
  var isArrayIteratorMethod2 = requireIsArrayIteratorMethod();
  var lengthOfArrayLike2 = requireLengthOfArrayLike();
  var isPrototypeOf = requireObjectIsPrototypeOf();
  var getIterator2 = requireGetIterator();
  var getIteratorMethod2 = requireGetIteratorMethod();
  var iteratorClose2 = requireIteratorClose();
  var $TypeError = TypeError;
  var Result = function(stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };
  var ResultPrototype = Result.prototype;
  iterate = function(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_RECORD = !!(options && options.IS_RECORD);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function(condition) {
      if (iterator) iteratorClose2(iterator, "normal");
      return new Result(true, condition);
    };
    var callFn = function(value) {
      if (AS_ENTRIES) {
        anObject2(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      }
      return INTERRUPTED ? fn(value, stop) : fn(value);
    };
    if (IS_RECORD) {
      iterator = iterable.iterator;
    } else if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod2(iterable);
      if (!iterFn) throw new $TypeError(tryToString2(iterable) + " is not iterable");
      if (isArrayIteratorMethod2(iterFn)) {
        for (index = 0, length = lengthOfArrayLike2(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf(ResultPrototype, result)) return result;
        }
        return new Result(false);
      }
      iterator = getIterator2(iterable, iterFn);
    }
    next = IS_RECORD ? iterable.next : iterator.next;
    while (!(step = call(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose2(iterator, "throw", error);
      }
      if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
    }
    return new Result(false);
  };
  return iterate;
}
var getIteratorDirect;
var hasRequiredGetIteratorDirect;
function requireGetIteratorDirect() {
  if (hasRequiredGetIteratorDirect) return getIteratorDirect;
  hasRequiredGetIteratorDirect = 1;
  getIteratorDirect = function(obj) {
    return {
      iterator: obj,
      next: obj.next,
      done: false
    };
  };
  return getIteratorDirect;
}
var iteratorHelperWithoutClosingOnEarlyError;
var hasRequiredIteratorHelperWithoutClosingOnEarlyError;
function requireIteratorHelperWithoutClosingOnEarlyError() {
  if (hasRequiredIteratorHelperWithoutClosingOnEarlyError) return iteratorHelperWithoutClosingOnEarlyError;
  hasRequiredIteratorHelperWithoutClosingOnEarlyError = 1;
  var globalThis2 = requireGlobalThis();
  iteratorHelperWithoutClosingOnEarlyError = function(METHOD_NAME, ExpectedError) {
    var Iterator2 = globalThis2.Iterator;
    var IteratorPrototype = Iterator2 && Iterator2.prototype;
    var method = IteratorPrototype && IteratorPrototype[METHOD_NAME];
    var CLOSED = false;
    if (method) try {
      method.call({
        next: function() {
          return {
            done: true
          };
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
  return iteratorHelperWithoutClosingOnEarlyError;
}
var hasRequiredEs_iterator_forEach;
function requireEs_iterator_forEach() {
  if (hasRequiredEs_iterator_forEach) return es_iterator_forEach;
  hasRequiredEs_iterator_forEach = 1;
  var $ = require_export();
  var call = requireFunctionCall();
  var iterate2 = requireIterate();
  var aCallable2 = requireACallable();
  var anObject2 = requireAnObject();
  var getIteratorDirect2 = requireGetIteratorDirect();
  var iteratorClose2 = requireIteratorClose();
  var iteratorHelperWithoutClosingOnEarlyError2 = requireIteratorHelperWithoutClosingOnEarlyError();
  var forEachWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError2("forEach", TypeError);
  $({
    target: "Iterator",
    proto: true,
    real: true,
    forced: forEachWithoutClosingOnEarlyError
  }, {
    forEach: function forEach(fn) {
      anObject2(this);
      try {
        aCallable2(fn);
      } catch (error) {
        iteratorClose2(this, "throw", error);
      }
      if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn);
      var record = getIteratorDirect2(this);
      var counter = 0;
      iterate2(record, function(value) {
        fn(value, counter++);
      }, {
        IS_RECORD: true
      });
    }
  });
  return es_iterator_forEach;
}
requireEs_iterator_forEach();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var es_iterator_constructor = {};
var anInstance;
var hasRequiredAnInstance;
function requireAnInstance() {
  if (hasRequiredAnInstance) return anInstance;
  hasRequiredAnInstance = 1;
  var isPrototypeOf = requireObjectIsPrototypeOf();
  var $TypeError = TypeError;
  anInstance = function(it, Prototype) {
    if (isPrototypeOf(Prototype, it)) return it;
    throw new $TypeError("Incorrect invocation");
  };
  return anInstance;
}
var correctPrototypeGetter;
var hasRequiredCorrectPrototypeGetter;
function requireCorrectPrototypeGetter() {
  if (hasRequiredCorrectPrototypeGetter) return correctPrototypeGetter;
  hasRequiredCorrectPrototypeGetter = 1;
  var fails2 = requireFails();
  correctPrototypeGetter = !fails2(function() {
    function F() {
    }
    F.prototype.constructor = null;
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });
  return correctPrototypeGetter;
}
var objectGetPrototypeOf;
var hasRequiredObjectGetPrototypeOf;
function requireObjectGetPrototypeOf() {
  if (hasRequiredObjectGetPrototypeOf) return objectGetPrototypeOf;
  hasRequiredObjectGetPrototypeOf = 1;
  var hasOwn2 = requireHasOwnProperty();
  var isCallable2 = requireIsCallable();
  var toObject2 = requireToObject();
  var sharedKey2 = requireSharedKey();
  var CORRECT_PROTOTYPE_GETTER = requireCorrectPrototypeGetter();
  var IE_PROTO = sharedKey2("IE_PROTO");
  var $Object = Object;
  var ObjectPrototype = $Object.prototype;
  objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
    var object = toObject2(O);
    if (hasOwn2(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable2(constructor) && object instanceof constructor) {
      return constructor.prototype;
    }
    return object instanceof $Object ? ObjectPrototype : null;
  };
  return objectGetPrototypeOf;
}
var defineBuiltInAccessor;
var hasRequiredDefineBuiltInAccessor;
function requireDefineBuiltInAccessor() {
  if (hasRequiredDefineBuiltInAccessor) return defineBuiltInAccessor;
  hasRequiredDefineBuiltInAccessor = 1;
  var makeBuiltIn2 = requireMakeBuiltIn();
  var defineProperty = requireObjectDefineProperty();
  defineBuiltInAccessor = function(target, name, descriptor) {
    if (descriptor.get) makeBuiltIn2(descriptor.get, name, {
      getter: true
    });
    if (descriptor.set) makeBuiltIn2(descriptor.set, name, {
      setter: true
    });
    return defineProperty.f(target, name, descriptor);
  };
  return defineBuiltInAccessor;
}
var createProperty;
var hasRequiredCreateProperty;
function requireCreateProperty() {
  if (hasRequiredCreateProperty) return createProperty;
  hasRequiredCreateProperty = 1;
  var DESCRIPTORS = requireDescriptors();
  var definePropertyModule = requireObjectDefineProperty();
  var createPropertyDescriptor2 = requireCreatePropertyDescriptor();
  createProperty = function(object, key, value) {
    if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor2(0, value));
    else object[key] = value;
  };
  return createProperty;
}
var objectDefineProperties = {};
var objectKeys;
var hasRequiredObjectKeys;
function requireObjectKeys() {
  if (hasRequiredObjectKeys) return objectKeys;
  hasRequiredObjectKeys = 1;
  var internalObjectKeys = requireObjectKeysInternal();
  var enumBugKeys2 = requireEnumBugKeys();
  objectKeys = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys2);
  };
  return objectKeys;
}
var hasRequiredObjectDefineProperties;
function requireObjectDefineProperties() {
  if (hasRequiredObjectDefineProperties) return objectDefineProperties;
  hasRequiredObjectDefineProperties = 1;
  var DESCRIPTORS = requireDescriptors();
  var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
  var definePropertyModule = requireObjectDefineProperty();
  var anObject2 = requireAnObject();
  var toIndexedObject2 = requireToIndexedObject();
  var objectKeys2 = requireObjectKeys();
  objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject2(O);
    var props = toIndexedObject2(Properties);
    var keys = objectKeys2(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
    return O;
  };
  return objectDefineProperties;
}
var html;
var hasRequiredHtml;
function requireHtml() {
  if (hasRequiredHtml) return html;
  hasRequiredHtml = 1;
  var getBuiltIn2 = requireGetBuiltIn();
  html = getBuiltIn2("document", "documentElement");
  return html;
}
var objectCreate;
var hasRequiredObjectCreate;
function requireObjectCreate() {
  if (hasRequiredObjectCreate) return objectCreate;
  hasRequiredObjectCreate = 1;
  var anObject2 = requireAnObject();
  var definePropertiesModule = requireObjectDefineProperties();
  var enumBugKeys2 = requireEnumBugKeys();
  var hiddenKeys2 = requireHiddenKeys();
  var html2 = requireHtml();
  var documentCreateElement2 = requireDocumentCreateElement();
  var sharedKey2 = requireSharedKey();
  var GT = ">";
  var LT = "<";
  var PROTOTYPE = "prototype";
  var SCRIPT = "script";
  var IE_PROTO = sharedKey2("IE_PROTO");
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
    var iframe = documentCreateElement2("iframe");
    var JS = "java" + SCRIPT + ":";
    var iframeDocument;
    iframe.style.display = "none";
    html2.appendChild(iframe);
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
    var length = enumBugKeys2.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys2[length]];
    return NullProtoObject();
  };
  hiddenKeys2[IE_PROTO] = true;
  objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject2(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
  };
  return objectCreate;
}
var iteratorsCore;
var hasRequiredIteratorsCore;
function requireIteratorsCore() {
  if (hasRequiredIteratorsCore) return iteratorsCore;
  hasRequiredIteratorsCore = 1;
  var fails2 = requireFails();
  var isCallable2 = requireIsCallable();
  var isObject22 = requireIsObject();
  var create = requireObjectCreate();
  var getPrototypeOf = requireObjectGetPrototypeOf();
  var defineBuiltIn2 = requireDefineBuiltIn();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var IS_PURE = requireIsPure();
  var ITERATOR = wellKnownSymbol2("iterator");
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
  var NEW_ITERATOR_PROTOTYPE = !isObject22(IteratorPrototype) || fails2(function() {
    var test = {};
    return IteratorPrototype[ITERATOR].call(test) !== test;
  });
  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
  else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
  if (!isCallable2(IteratorPrototype[ITERATOR])) {
    defineBuiltIn2(IteratorPrototype, ITERATOR, function() {
      return this;
    });
  }
  iteratorsCore = {
    IteratorPrototype,
    BUGGY_SAFARI_ITERATORS
  };
  return iteratorsCore;
}
var hasRequiredEs_iterator_constructor;
function requireEs_iterator_constructor() {
  if (hasRequiredEs_iterator_constructor) return es_iterator_constructor;
  hasRequiredEs_iterator_constructor = 1;
  var $ = require_export();
  var globalThis2 = requireGlobalThis();
  var anInstance2 = requireAnInstance();
  var anObject2 = requireAnObject();
  var isCallable2 = requireIsCallable();
  var getPrototypeOf = requireObjectGetPrototypeOf();
  var defineBuiltInAccessor2 = requireDefineBuiltInAccessor();
  var createProperty2 = requireCreateProperty();
  var fails2 = requireFails();
  var hasOwn2 = requireHasOwnProperty();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var IteratorPrototype = requireIteratorsCore().IteratorPrototype;
  var DESCRIPTORS = requireDescriptors();
  var IS_PURE = requireIsPure();
  var CONSTRUCTOR = "constructor";
  var ITERATOR = "Iterator";
  var TO_STRING_TAG = wellKnownSymbol2("toStringTag");
  var $TypeError = TypeError;
  var NativeIterator = globalThis2[ITERATOR];
  var FORCED = IS_PURE || !isCallable2(NativeIterator) || NativeIterator.prototype !== IteratorPrototype || !fails2(function() {
    NativeIterator({});
  });
  var IteratorConstructor = function Iterator2() {
    anInstance2(this, IteratorPrototype);
    if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError("Abstract class Iterator not directly constructable");
  };
  var defineIteratorPrototypeAccessor = function(key, value) {
    if (DESCRIPTORS) {
      defineBuiltInAccessor2(IteratorPrototype, key, {
        configurable: true,
        get: function() {
          return value;
        },
        set: function(replacement) {
          anObject2(this);
          if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
          if (hasOwn2(this, key)) this[key] = replacement;
          else createProperty2(this, key, replacement);
        }
      });
    } else IteratorPrototype[key] = value;
  };
  if (!hasOwn2(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);
  if (FORCED || !hasOwn2(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
    defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
  }
  IteratorConstructor.prototype = IteratorPrototype;
  $({
    global: true,
    constructor: true,
    forced: FORCED
  }, {
    Iterator: IteratorConstructor
  });
  return es_iterator_constructor;
}
requireEs_iterator_constructor();
var es_set_difference_v2 = {};
var setHelpers;
var hasRequiredSetHelpers;
function requireSetHelpers() {
  if (hasRequiredSetHelpers) return setHelpers;
  hasRequiredSetHelpers = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var SetPrototype = Set.prototype;
  setHelpers = {
    // eslint-disable-next-line es/no-set -- safe
    Set,
    add: uncurryThis(SetPrototype.add),
    has: uncurryThis(SetPrototype.has),
    remove: uncurryThis(SetPrototype["delete"]),
    proto: SetPrototype
  };
  return setHelpers;
}
var aSet;
var hasRequiredASet;
function requireASet() {
  if (hasRequiredASet) return aSet;
  hasRequiredASet = 1;
  var has = requireSetHelpers().has;
  aSet = function(it) {
    has(it);
    return it;
  };
  return aSet;
}
var iterateSimple;
var hasRequiredIterateSimple;
function requireIterateSimple() {
  if (hasRequiredIterateSimple) return iterateSimple;
  hasRequiredIterateSimple = 1;
  var call = requireFunctionCall();
  iterateSimple = function(record, fn, ITERATOR_INSTEAD_OF_RECORD) {
    var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
    var next = record.next;
    var step, result;
    while (!(step = call(next, iterator)).done) {
      result = fn(step.value);
      if (result !== void 0) return result;
    }
  };
  return iterateSimple;
}
var setIterate;
var hasRequiredSetIterate;
function requireSetIterate() {
  if (hasRequiredSetIterate) return setIterate;
  hasRequiredSetIterate = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var iterateSimple2 = requireIterateSimple();
  var SetHelpers = requireSetHelpers();
  var Set2 = SetHelpers.Set;
  var SetPrototype = SetHelpers.proto;
  var forEach = uncurryThis(SetPrototype.forEach);
  var keys = uncurryThis(SetPrototype.keys);
  var next = keys(new Set2()).next;
  setIterate = function(set, fn, interruptible) {
    return interruptible ? iterateSimple2({
      iterator: keys(set),
      next
    }, fn) : forEach(set, fn);
  };
  return setIterate;
}
var setClone;
var hasRequiredSetClone;
function requireSetClone() {
  if (hasRequiredSetClone) return setClone;
  hasRequiredSetClone = 1;
  var SetHelpers = requireSetHelpers();
  var iterate2 = requireSetIterate();
  var Set2 = SetHelpers.Set;
  var add = SetHelpers.add;
  setClone = function(set) {
    var result = new Set2();
    iterate2(set, function(it) {
      add(result, it);
    });
    return result;
  };
  return setClone;
}
var functionUncurryThisAccessor;
var hasRequiredFunctionUncurryThisAccessor;
function requireFunctionUncurryThisAccessor() {
  if (hasRequiredFunctionUncurryThisAccessor) return functionUncurryThisAccessor;
  hasRequiredFunctionUncurryThisAccessor = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var aCallable2 = requireACallable();
  functionUncurryThisAccessor = function(object, key, method) {
    try {
      return uncurryThis(aCallable2(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) {
    }
  };
  return functionUncurryThisAccessor;
}
var setSize;
var hasRequiredSetSize;
function requireSetSize() {
  if (hasRequiredSetSize) return setSize;
  hasRequiredSetSize = 1;
  var uncurryThisAccessor = requireFunctionUncurryThisAccessor();
  var SetHelpers = requireSetHelpers();
  setSize = uncurryThisAccessor(SetHelpers.proto, "size", "get") || function(set) {
    return set.size;
  };
  return setSize;
}
var getSetRecord;
var hasRequiredGetSetRecord;
function requireGetSetRecord() {
  if (hasRequiredGetSetRecord) return getSetRecord;
  hasRequiredGetSetRecord = 1;
  var aCallable2 = requireACallable();
  var anObject2 = requireAnObject();
  var call = requireFunctionCall();
  var toIntegerOrInfinity2 = requireToIntegerOrInfinity();
  var getIteratorDirect2 = requireGetIteratorDirect();
  var INVALID_SIZE = "Invalid size";
  var $RangeError = RangeError;
  var $TypeError = TypeError;
  var max = Math.max;
  var SetRecord = function(set, intSize) {
    this.set = set;
    this.size = max(intSize, 0);
    this.has = aCallable2(set.has);
    this.keys = aCallable2(set.keys);
  };
  SetRecord.prototype = {
    getIterator: function() {
      return getIteratorDirect2(anObject2(call(this.keys, this.set)));
    },
    includes: function(it) {
      return call(this.has, this.set, it);
    }
  };
  getSetRecord = function(obj) {
    anObject2(obj);
    var numSize = +obj.size;
    if (numSize !== numSize) throw new $TypeError(INVALID_SIZE);
    var intSize = toIntegerOrInfinity2(numSize);
    if (intSize < 0) throw new $RangeError(INVALID_SIZE);
    return new SetRecord(obj, intSize);
  };
  return getSetRecord;
}
var setDifference;
var hasRequiredSetDifference;
function requireSetDifference() {
  if (hasRequiredSetDifference) return setDifference;
  hasRequiredSetDifference = 1;
  var aSet2 = requireASet();
  var SetHelpers = requireSetHelpers();
  var clone = requireSetClone();
  var size = requireSetSize();
  var getSetRecord2 = requireGetSetRecord();
  var iterateSet = requireSetIterate();
  var iterateSimple2 = requireIterateSimple();
  var has = SetHelpers.has;
  var remove = SetHelpers.remove;
  setDifference = function difference(other) {
    var O = aSet2(this);
    var otherRec = getSetRecord2(other);
    var result = clone(O);
    if (size(O) <= otherRec.size) iterateSet(O, function(e) {
      if (otherRec.includes(e)) remove(result, e);
    });
    else iterateSimple2(otherRec.getIterator(), function(e) {
      if (has(result, e)) remove(result, e);
    });
    return result;
  };
  return setDifference;
}
var setMethodAcceptSetLike;
var hasRequiredSetMethodAcceptSetLike;
function requireSetMethodAcceptSetLike() {
  if (hasRequiredSetMethodAcceptSetLike) return setMethodAcceptSetLike;
  hasRequiredSetMethodAcceptSetLike = 1;
  var getBuiltIn2 = requireGetBuiltIn();
  var createSetLike = function(size) {
    return {
      size,
      has: function() {
        return false;
      },
      keys: function() {
        return {
          next: function() {
            return {
              done: true
            };
          }
        };
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
  setMethodAcceptSetLike = function(name, callback) {
    var Set2 = getBuiltIn2("Set");
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
          var set = new Set2([1, 2]);
          return callback(set[name](createSetLikeWithInfinitySize(Infinity)));
        }
      }
    } catch (error) {
      return false;
    }
  };
  return setMethodAcceptSetLike;
}
var hasRequiredEs_set_difference_v2;
function requireEs_set_difference_v2() {
  if (hasRequiredEs_set_difference_v2) return es_set_difference_v2;
  hasRequiredEs_set_difference_v2 = 1;
  var $ = require_export();
  var difference = requireSetDifference();
  var fails2 = requireFails();
  var setMethodAcceptSetLike2 = requireSetMethodAcceptSetLike();
  var SET_LIKE_INCORRECT_BEHAVIOR = !setMethodAcceptSetLike2("difference", function(result) {
    return result.size === 0;
  });
  var FORCED = SET_LIKE_INCORRECT_BEHAVIOR || fails2(function() {
    var setLike = {
      size: 1,
      has: function() {
        return true;
      },
      keys: function() {
        var index = 0;
        return {
          next: function() {
            var done = index++ > 1;
            if (baseSet.has(1)) baseSet.clear();
            return {
              done,
              value: 2
            };
          }
        };
      }
    };
    var baseSet = /* @__PURE__ */ new Set([1, 2, 3, 4]);
    return baseSet.difference(setLike).size !== 3;
  });
  $({
    target: "Set",
    proto: true,
    real: true,
    forced: FORCED
  }, {
    difference
  });
  return es_set_difference_v2;
}
requireEs_set_difference_v2();
var es_set_intersection_v2 = {};
var setIntersection;
var hasRequiredSetIntersection;
function requireSetIntersection() {
  if (hasRequiredSetIntersection) return setIntersection;
  hasRequiredSetIntersection = 1;
  var aSet2 = requireASet();
  var SetHelpers = requireSetHelpers();
  var size = requireSetSize();
  var getSetRecord2 = requireGetSetRecord();
  var iterateSet = requireSetIterate();
  var iterateSimple2 = requireIterateSimple();
  var Set2 = SetHelpers.Set;
  var add = SetHelpers.add;
  var has = SetHelpers.has;
  setIntersection = function intersection(other) {
    var O = aSet2(this);
    var otherRec = getSetRecord2(other);
    var result = new Set2();
    if (size(O) > otherRec.size) {
      iterateSimple2(otherRec.getIterator(), function(e) {
        if (has(O, e)) add(result, e);
      });
    } else {
      iterateSet(O, function(e) {
        if (otherRec.includes(e)) add(result, e);
      });
    }
    return result;
  };
  return setIntersection;
}
var hasRequiredEs_set_intersection_v2;
function requireEs_set_intersection_v2() {
  if (hasRequiredEs_set_intersection_v2) return es_set_intersection_v2;
  hasRequiredEs_set_intersection_v2 = 1;
  var $ = require_export();
  var fails2 = requireFails();
  var intersection = requireSetIntersection();
  var setMethodAcceptSetLike2 = requireSetMethodAcceptSetLike();
  var INCORRECT = !setMethodAcceptSetLike2("intersection", function(result) {
    return result.size === 2 && result.has(1) && result.has(2);
  }) || fails2(function() {
    return String(Array.from((/* @__PURE__ */ new Set([1, 2, 3])).intersection(/* @__PURE__ */ new Set([3, 2])))) !== "3,2";
  });
  $({
    target: "Set",
    proto: true,
    real: true,
    forced: INCORRECT
  }, {
    intersection
  });
  return es_set_intersection_v2;
}
requireEs_set_intersection_v2();
var es_set_isDisjointFrom_v2 = {};
var setIsDisjointFrom;
var hasRequiredSetIsDisjointFrom;
function requireSetIsDisjointFrom() {
  if (hasRequiredSetIsDisjointFrom) return setIsDisjointFrom;
  hasRequiredSetIsDisjointFrom = 1;
  var aSet2 = requireASet();
  var has = requireSetHelpers().has;
  var size = requireSetSize();
  var getSetRecord2 = requireGetSetRecord();
  var iterateSet = requireSetIterate();
  var iterateSimple2 = requireIterateSimple();
  var iteratorClose2 = requireIteratorClose();
  setIsDisjointFrom = function isDisjointFrom(other) {
    var O = aSet2(this);
    var otherRec = getSetRecord2(other);
    if (size(O) <= otherRec.size) return iterateSet(O, function(e) {
      if (otherRec.includes(e)) return false;
    }, true) !== false;
    var iterator = otherRec.getIterator();
    return iterateSimple2(iterator, function(e) {
      if (has(O, e)) return iteratorClose2(iterator, "normal", false);
    }) !== false;
  };
  return setIsDisjointFrom;
}
var hasRequiredEs_set_isDisjointFrom_v2;
function requireEs_set_isDisjointFrom_v2() {
  if (hasRequiredEs_set_isDisjointFrom_v2) return es_set_isDisjointFrom_v2;
  hasRequiredEs_set_isDisjointFrom_v2 = 1;
  var $ = require_export();
  var isDisjointFrom = requireSetIsDisjointFrom();
  var setMethodAcceptSetLike2 = requireSetMethodAcceptSetLike();
  var INCORRECT = !setMethodAcceptSetLike2("isDisjointFrom", function(result) {
    return !result;
  });
  $({
    target: "Set",
    proto: true,
    real: true,
    forced: INCORRECT
  }, {
    isDisjointFrom
  });
  return es_set_isDisjointFrom_v2;
}
requireEs_set_isDisjointFrom_v2();
var es_set_isSubsetOf_v2 = {};
var setIsSubsetOf;
var hasRequiredSetIsSubsetOf;
function requireSetIsSubsetOf() {
  if (hasRequiredSetIsSubsetOf) return setIsSubsetOf;
  hasRequiredSetIsSubsetOf = 1;
  var aSet2 = requireASet();
  var size = requireSetSize();
  var iterate2 = requireSetIterate();
  var getSetRecord2 = requireGetSetRecord();
  setIsSubsetOf = function isSubsetOf(other) {
    var O = aSet2(this);
    var otherRec = getSetRecord2(other);
    if (size(O) > otherRec.size) return false;
    return iterate2(O, function(e) {
      if (!otherRec.includes(e)) return false;
    }, true) !== false;
  };
  return setIsSubsetOf;
}
var hasRequiredEs_set_isSubsetOf_v2;
function requireEs_set_isSubsetOf_v2() {
  if (hasRequiredEs_set_isSubsetOf_v2) return es_set_isSubsetOf_v2;
  hasRequiredEs_set_isSubsetOf_v2 = 1;
  var $ = require_export();
  var isSubsetOf = requireSetIsSubsetOf();
  var setMethodAcceptSetLike2 = requireSetMethodAcceptSetLike();
  var INCORRECT = !setMethodAcceptSetLike2("isSubsetOf", function(result) {
    return result;
  });
  $({
    target: "Set",
    proto: true,
    real: true,
    forced: INCORRECT
  }, {
    isSubsetOf
  });
  return es_set_isSubsetOf_v2;
}
requireEs_set_isSubsetOf_v2();
var es_set_isSupersetOf_v2 = {};
var setIsSupersetOf;
var hasRequiredSetIsSupersetOf;
function requireSetIsSupersetOf() {
  if (hasRequiredSetIsSupersetOf) return setIsSupersetOf;
  hasRequiredSetIsSupersetOf = 1;
  var aSet2 = requireASet();
  var has = requireSetHelpers().has;
  var size = requireSetSize();
  var getSetRecord2 = requireGetSetRecord();
  var iterateSimple2 = requireIterateSimple();
  var iteratorClose2 = requireIteratorClose();
  setIsSupersetOf = function isSupersetOf(other) {
    var O = aSet2(this);
    var otherRec = getSetRecord2(other);
    if (size(O) < otherRec.size) return false;
    var iterator = otherRec.getIterator();
    return iterateSimple2(iterator, function(e) {
      if (!has(O, e)) return iteratorClose2(iterator, "normal", false);
    }) !== false;
  };
  return setIsSupersetOf;
}
var hasRequiredEs_set_isSupersetOf_v2;
function requireEs_set_isSupersetOf_v2() {
  if (hasRequiredEs_set_isSupersetOf_v2) return es_set_isSupersetOf_v2;
  hasRequiredEs_set_isSupersetOf_v2 = 1;
  var $ = require_export();
  var isSupersetOf = requireSetIsSupersetOf();
  var setMethodAcceptSetLike2 = requireSetMethodAcceptSetLike();
  var INCORRECT = !setMethodAcceptSetLike2("isSupersetOf", function(result) {
    return !result;
  });
  $({
    target: "Set",
    proto: true,
    real: true,
    forced: INCORRECT
  }, {
    isSupersetOf
  });
  return es_set_isSupersetOf_v2;
}
requireEs_set_isSupersetOf_v2();
var es_set_symmetricDifference_v2 = {};
var setSymmetricDifference;
var hasRequiredSetSymmetricDifference;
function requireSetSymmetricDifference() {
  if (hasRequiredSetSymmetricDifference) return setSymmetricDifference;
  hasRequiredSetSymmetricDifference = 1;
  var aSet2 = requireASet();
  var SetHelpers = requireSetHelpers();
  var clone = requireSetClone();
  var getSetRecord2 = requireGetSetRecord();
  var iterateSimple2 = requireIterateSimple();
  var add = SetHelpers.add;
  var has = SetHelpers.has;
  var remove = SetHelpers.remove;
  setSymmetricDifference = function symmetricDifference(other) {
    var O = aSet2(this);
    var keysIter = getSetRecord2(other).getIterator();
    var result = clone(O);
    iterateSimple2(keysIter, function(e) {
      if (has(O, e)) remove(result, e);
      else add(result, e);
    });
    return result;
  };
  return setSymmetricDifference;
}
var setMethodGetKeysBeforeCloningDetection;
var hasRequiredSetMethodGetKeysBeforeCloningDetection;
function requireSetMethodGetKeysBeforeCloningDetection() {
  if (hasRequiredSetMethodGetKeysBeforeCloningDetection) return setMethodGetKeysBeforeCloningDetection;
  hasRequiredSetMethodGetKeysBeforeCloningDetection = 1;
  setMethodGetKeysBeforeCloningDetection = function(METHOD_NAME) {
    try {
      var baseSet = /* @__PURE__ */ new Set();
      var setLike = {
        size: 0,
        has: function() {
          return true;
        },
        keys: function() {
          return Object.defineProperty({}, "next", {
            get: function() {
              baseSet.clear();
              baseSet.add(4);
              return function() {
                return {
                  done: true
                };
              };
            }
          });
        }
      };
      var result = baseSet[METHOD_NAME](setLike);
      return result.size === 1 && result.values().next().value === 4;
    } catch (error) {
      return false;
    }
  };
  return setMethodGetKeysBeforeCloningDetection;
}
var hasRequiredEs_set_symmetricDifference_v2;
function requireEs_set_symmetricDifference_v2() {
  if (hasRequiredEs_set_symmetricDifference_v2) return es_set_symmetricDifference_v2;
  hasRequiredEs_set_symmetricDifference_v2 = 1;
  var $ = require_export();
  var symmetricDifference = requireSetSymmetricDifference();
  var setMethodGetKeysBeforeCloning = requireSetMethodGetKeysBeforeCloningDetection();
  var setMethodAcceptSetLike2 = requireSetMethodAcceptSetLike();
  var FORCED = !setMethodAcceptSetLike2("symmetricDifference") || !setMethodGetKeysBeforeCloning("symmetricDifference");
  $({
    target: "Set",
    proto: true,
    real: true,
    forced: FORCED
  }, {
    symmetricDifference
  });
  return es_set_symmetricDifference_v2;
}
requireEs_set_symmetricDifference_v2();
var es_set_union_v2 = {};
var setUnion;
var hasRequiredSetUnion;
function requireSetUnion() {
  if (hasRequiredSetUnion) return setUnion;
  hasRequiredSetUnion = 1;
  var aSet2 = requireASet();
  var add = requireSetHelpers().add;
  var clone = requireSetClone();
  var getSetRecord2 = requireGetSetRecord();
  var iterateSimple2 = requireIterateSimple();
  setUnion = function union(other) {
    var O = aSet2(this);
    var keysIter = getSetRecord2(other).getIterator();
    var result = clone(O);
    iterateSimple2(keysIter, function(it) {
      add(result, it);
    });
    return result;
  };
  return setUnion;
}
var hasRequiredEs_set_union_v2;
function requireEs_set_union_v2() {
  if (hasRequiredEs_set_union_v2) return es_set_union_v2;
  hasRequiredEs_set_union_v2 = 1;
  var $ = require_export();
  var union = requireSetUnion();
  var setMethodGetKeysBeforeCloning = requireSetMethodGetKeysBeforeCloningDetection();
  var setMethodAcceptSetLike2 = requireSetMethodAcceptSetLike();
  var FORCED = !setMethodAcceptSetLike2("union") || !setMethodGetKeysBeforeCloning("union");
  $({
    target: "Set",
    proto: true,
    real: true,
    forced: FORCED
  }, {
    union
  });
  return es_set_union_v2;
}
requireEs_set_union_v2();
function isFTableCellApi(value) {
  return value !== null && typeof value === "object" && Boolean(value.tabstopEl);
}
var tableCellApiSymbol = /* @__PURE__ */ Symbol("table:cell-api");
var navKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"];
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
  const target = {
    ...to
  };
  const currentMax = table.rows[from.row].cells.length - 1;
  const targetMax = table.rows[to.row].cells.length - 1;
  if (prevCellIndex && currentMax < targetMax) {
    target.cell = prevCellIndex;
    prevCellIndex = void 0;
  } else {
    target.cell = targetMax < from.cell ? targetMax : from.cell;
  }
  if (targetMax < from.cell) {
    prevCellIndex = from.cell;
  }
  return target;
}
function isDefined(value) {
  return value.row !== void 0 && value.cell !== void 0;
}
function navigate(e, table, from, last) {
  if (!isDefined(from) || !isDefined(last)) {
    return;
  }
  if (!navKeys.includes(e.code)) {
    return;
  }
  e.preventDefault();
  if (e.code === "ArrowLeft") {
    if (from.cell === 0) {
      return;
    }
    prevCellIndex = void 0;
    return {
      row: from.row,
      cell: from.cell - 1
    };
  }
  if (e.code === "ArrowRight") {
    if (from.cell === last.cell) {
      return;
    }
    const lastCellIndex = table.rows[from.row].cells.length - 1;
    if (lastCellIndex <= from.cell) {
      return;
    }
    prevCellIndex = void 0;
    return {
      row: from.row,
      cell: from.cell + 1
    };
  }
  if (e.code === "ArrowUp") {
    if (from.row === 0) {
      return;
    }
    const to = {
      row: from.row - 1,
      cell: from.cell
    };
    return getVerticalNavIndex(table, from, to);
  }
  if (e.code === "ArrowDown") {
    if (from.row === last.row) {
      return;
    }
    const to = {
      row: from.row + 1,
      cell: from.cell
    };
    return getVerticalNavIndex(table, from, to);
  }
  if (e.code === "Home") {
    if (e.ctrlKey) {
      return {
        row: 1,
        cell: 0
      };
    } else {
      return {
        row: from.row,
        cell: 0
      };
    }
  }
  if (e.code === "End") {
    if (e.ctrlKey) {
      return {
        row: last.row,
        cell: table.rows[last.row].cells.length - 1
      };
    } else {
      return {
        row: from.row,
        cell: table.rows[from.row].cells.length - 1
      };
    }
  }
}
function getCell(element) {
  const closest = element.closest("td, th");
  if (!closest) {
    throw new Error("expected th or td parent");
  }
  return closest;
}
async function setDefaultCellTarget(table) {
  await nextTick3();
  const target = getCellTarget(table, 1, 0);
  activateCell(target, {
    focus: false
  });
  return target;
}
function maybeNavigateToCell(e) {
  let newCellTarget = e.target;
  const cell = getCell(e.target);
  const tr = getTr(cell);
  const table = getTable(tr);
  const fromIndex = {
    row: tr.rowIndex,
    cell: cell.cellIndex
  };
  const lastIndex = {
    row: getLastRowIndex(table),
    cell: getLastCellIndex(table)
  };
  const navigateTo = navigate(e, table, fromIndex, lastIndex);
  if (navigateTo) {
    newCellTarget = getCellTarget(table, navigateTo.row, navigateTo.cell);
    activateCell(newCellTarget, {
      focus: true
    });
  }
}
function activateCell(element, options) {
  var _toValue;
  const api = element[tableCellApiSymbol];
  const targetEl = (_toValue = toValue2(api?.tabstopEl)) !== null && _toValue !== void 0 ? _toValue : element;
  targetEl.tabIndex = 0;
  if (options?.focus) {
    targetEl.focus();
  }
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
      const isLastRow = rowIndex === lastRowIndex;
      const footerNext = hasFooter && nextRowIndex === lastRowIndex;
      if (!isLastRow && !footerNext) {
        newCellTarget = getCellTarget(table, nextRowIndex, cellIndex);
        activateCell(newCellTarget, {
          focus: true
        });
      } else {
        activateCell(newCellTarget, {
          focus: true
        });
      }
      return newCellTarget;
    }
    case "escape": {
      activateCell(newCellTarget, {
        focus: true
      });
      return newCellTarget;
    }
    case "tab": {
      if (cellIndex === lastCellIndex && rowIndex === lastRowIndex) {
        activateCell(newCellTarget, {
          focus: true
        });
      } else if (cellIndex === lastCellIndex) {
        newCellTarget = getCellTarget(table, rowIndex + 1, 0);
        activateCell(newCellTarget, {
          focus: true
        });
      } else {
        newCellTarget = getCellTarget(table, rowIndex, cellIndex + 1);
        activateCell(newCellTarget, {
          focus: true
        });
      }
      return newCellTarget;
    }
    case "shift-tab": {
      if (cellIndex === 0 && rowIndex === 1) {
        activateCell(newCellTarget, {
          focus: true
        });
      } else if (cellIndex === 0) {
        newCellTarget = getCellTarget(table, rowIndex - 1, 0);
        activateCell(newCellTarget, {
          focus: true
        });
      } else {
        newCellTarget = getCellTarget(table, rowIndex, cellIndex - 1);
        activateCell(newCellTarget, {
          focus: true
        });
      }
      return newCellTarget;
    }
    case "blur": {
      return newCellTarget;
    }
  }
}
var _hoisted_1$e = {
  key: 0,
  class: "table-ng__cell table-ng__cell--expand"
};
var _hoisted_2$a = ["aria-label", "aria-expanded"];
var _hoisted_3$8 = {
  key: 1,
  ref: "expandable",
  tabindex: "-1",
  class: "table-ng__cell table-ng__cell--expand"
};
var _sfc_main$g = /* @__PURE__ */ defineComponent2({
  __name: "ITableExpandButton",
  props: {
    isExpandable: {
      type: Boolean
    },
    isExpanded: {
      type: Boolean
    },
    rowKey: {}
  },
  emits: ["toggle"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    const emit = __emit;
    const expandableRef = useTemplateRef("expandable");
    const toggleIcon = computed3(() => __props.isExpanded ? "arrow-down" : "arrow-right");
    const expandLabel = computed3(() => __props.isExpanded ? "St\xE4ng rad" : "Expandera rad");
    function onClick() {
      assertRef(expandableRef);
      expandableRef.value.tabIndex = 0;
      emit("toggle", __props.rowKey);
    }
    const expose = {
      tabstopEl: expandableRef
    };
    __expose(expose);
    return (_ctx, _cache) => {
      return __props.isExpandable ? (openBlock(), createElementBlock("td", _hoisted_1$e, [createElementVNode("button", {
        ref: "expandable",
        tabindex: "-1",
        "aria-label": expandLabel.value,
        "aria-expanded": __props.isExpanded,
        type: "button",
        onClick
      }, [createVNode(unref3(FIcon), {
        class: "button__icon",
        name: toggleIcon.value
      }, null, 8, ["name"])], 8, _hoisted_2$a)])) : (openBlock(), createElementBlock("td", _hoisted_3$8, null, 512));
    };
  }
});
var _hoisted_1$d = ["colspan"];
var _sfc_main$f = /* @__PURE__ */ defineComponent2({
  __name: "ITableExpandable",
  props: {
    colspan: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("td", {
        class: "table-ng__cell--custom",
        colspan: __props.colspan,
        tabindex: "-1"
      }, [renderSlot(_ctx.$slots, "default")], 8, _hoisted_1$d);
    };
  }
});
var textTypes = ["text:bankAccountNumber", "text:bankgiro", "text:clearingNumber", "text:date", "text:email", "text:organisationsnummer", "text:personnummer", "text:phoneNumber", "text:plusgiro", "text:postalCode", "text"];
var numberTypes = ["text:currency", "text:number", "text:percent"];
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
      maxLength: {
        length: 20
      },
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
    validationConfig: {
      bankAccountNumber: {}
    },
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
      maxLength: {
        length: 9
      },
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
    validationConfig: {
      clearingNumber: {}
    },
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
    validationConfig: {
      date: {}
    },
    attributes: () => {
      return {
        type: "text"
      };
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
      maxLength: {
        length: 80
      }
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
    validationConfig: {
      number: {}
    },
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
      maxLength: {
        length: 11
      },
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
      minValue: {
        minValue: 0
      },
      maxValue: {
        maxValue: 999
      }
    },
    attributes: (options) => {
      const decimals = options?.decimals;
      return {
        inputmode: decimals ? "decimal" : "numeric",
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
      maxLength: {
        length: 80
      },
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
      maxLength: {
        length: 11
      },
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
      maxLength: {
        length: 13
      },
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
var _hoisted_1$c = ["aria-sort"];
var _sfc_main$e = /* @__PURE__ */ defineComponent2({
  __name: "ITableHeader",
  props: {
    column: {},
    sortEnabled: {
      type: Boolean
    },
    sortOrder: {}
  },
  emits: ["toggleSortOrder"],
  setup(__props, {
    emit: __emit
  }) {
    const emit = __emit;
    const thElement = useTemplateRef("th");
    const columnClasses = computed3(() => {
      const size = __props.column.size.value === "shrink" ? "table-ng__column--shrink" : "table-ng__column--grow";
      return ["table-ng__column", size];
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
          return void 0;
      }
    });
    function isAlignableColumn(column) {
      if (column.type === void 0) {
        return false;
      }
      return isInputTypeText(column.type) || isInputTypeNumber(column.type);
    }
    const alignment = computed3(() => {
      return isAlignableColumn(__props.column) ? __props.column.align : "left";
    });
    function onClickCell() {
      assertRef(thElement);
      thElement.value.tabIndex = 0;
      if (!__props.column.sortable || !__props.sortEnabled) {
        return;
      }
      emit("toggleSortOrder", String(__props.column.sortable));
    }
    function onKeydownCell(e) {
      if (e.key === "Enter") {
        e.preventDefault();
        onClickCell();
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("th", {
        ref: "th",
        "aria-sort": sortValue.value,
        class: normalizeClass(columnClasses.value),
        tabindex: "-1",
        onKeydown: onKeydownCell,
        onClick: withModifiers(onClickCell, ["stop"])
      }, [createVNode(unref3(IFlex), {
        gap: "1x",
        float: alignment.value
      }, {
        default: withCtx(() => [createVNode(unref3(IFlexItem), {
          shrink: "",
          class: "table-ng__column__title"
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(__props.column.header), 1)]),
          _: 1
        }), _cache[0] || (_cache[0] = createTextVNode()), __props.sortEnabled ? (openBlock(), createBlock(unref3(IFlexItem), {
          key: 0,
          shrink: "",
          align: "center"
        }, {
          default: withCtx(() => [createVNode(unref3(FIcon), {
            name: sortIcon.value,
            class: normalizeClass(sortIconClass.value)
          }, null, 8, ["name", "class"])]),
          _: 1
        })) : createCommentVNode("", true)]),
        _: 1
      }, 8, ["float"]), _cache[1] || (_cache[1] = createTextVNode()), __props.column.description.value ? (openBlock(), createBlock(unref3(IFlex), {
        key: 0,
        gap: "1x",
        float: alignment.value,
        class: "table-ng__column__description"
      }, {
        default: withCtx(() => [createVNode(unref3(IFlexItem), {
          shrink: ""
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(__props.column.description), 1)]),
          _: 1
        })]),
        _: 1
      }, 8, ["float"])) : createCommentVNode("", true)], 42, _hoisted_1$c);
    };
  }
});
var _hoisted_1$b = {
  scope: "col",
  class: "table-ng__column table-ng__column--selectable"
};
var _hoisted_2$9 = ["checked", "indeterminate"];
var _sfc_main$d = /* @__PURE__ */ defineComponent2({
  __name: "ITableHeaderSelectable",
  props: {
    selectable: {},
    state: {
      type: [Boolean, String]
    }
  },
  emits: ["toggle"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    const emit = __emit;
    const indeterminate = computed3(() => __props.state === "indeterminate");
    const checked = computed3(() => __props.state === "indeterminate" ? false : __props.state);
    const expose = {};
    if (__props.selectable === "multi") {
      const inputRef = useTemplateRef("input");
      expose.tabstopEl = inputRef;
    }
    __expose(expose);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("th", _hoisted_1$b, [__props.selectable === "multi" ? (openBlock(), createElementBlock("input", {
        key: 0,
        ref: "input",
        checked: checked.value,
        indeterminate: indeterminate.value,
        type: "checkbox",
        "aria-label": "select all",
        tabindex: "-1",
        onChange: _cache[0] || (_cache[0] = ($event) => emit("toggle"))
      }, null, 40, _hoisted_2$9)) : createCommentVNode("", true)]);
    };
  }
});
var _hoisted_1$a = {
  key: 0,
  class: "table-ng__cell table-ng__cell--checkbox"
};
var _hoisted_2$8 = ["checked", "aria-label"];
var _hoisted_3$7 = {
  key: 1,
  ref: "target",
  tabindex: "-1",
  class: "table-ng__cell table-ng__cell--checkbox"
};
var _hoisted_4$4 = ["checked", "aria-label"];
var _sfc_main$c = /* @__PURE__ */ defineComponent2({
  __name: "ITableCheckbox",
  props: {
    column: {},
    row: {}
  },
  setup(__props, {
    expose: __expose
  }) {
    const targetElement = useTemplateRef("target");
    const ariaLabel = computed3(() => {
      const value = __props.column.label(__props.row);
      return value.length > 0 ? value : void 0;
    });
    function onChange(e) {
      const checked = e.target.checked;
      __props.column.update(__props.row, checked, !checked);
    }
    const expose = {
      tabstopEl: targetElement
    };
    __expose(expose);
    return (_ctx, _cache) => {
      return __props.column.editable(__props.row) ? (openBlock(), createElementBlock("td", _hoisted_1$a, [createElementVNode("input", {
        ref: "target",
        checked: Boolean(__props.column.checked(__props.row)),
        type: "checkbox",
        "aria-label": ariaLabel.value,
        tabindex: "-1",
        onChange
      }, null, 40, _hoisted_2$8)])) : (openBlock(), createElementBlock("td", _hoisted_3$7, [createElementVNode("input", {
        checked: Boolean(__props.column.checked(__props.row)),
        type: "checkbox",
        "aria-label": ariaLabel.value
      }, null, 8, _hoisted_4$4)], 512));
    };
  }
});
var _hoisted_1$9 = {
  class: "table-ng__cell table-ng__cell--radio"
};
var _hoisted_2$7 = ["checked", "aria-label"];
var _sfc_main$b = /* @__PURE__ */ defineComponent2({
  __name: "ITableRadio",
  props: {
    column: {},
    row: {}
  },
  setup(__props, {
    expose: __expose
  }) {
    const inputElement = useTemplateRef("input");
    const ariaLabel = computed3(() => {
      const value = __props.column.label(__props.row);
      return value.length > 0 ? value : void 0;
    });
    function onChange(_e) {
      assertRef(inputElement);
      __props.column.update(__props.row, inputElement.value.checked, !inputElement.value.checked);
    }
    const expose = {
      tabstopEl: inputElement
    };
    __expose(expose);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("td", _hoisted_1$9, [createElementVNode("input", {
        ref: "input",
        type: "radio",
        checked: Boolean(__props.column.checked(__props.row)),
        "aria-label": ariaLabel.value,
        tabindex: "-1",
        onChange
      }, null, 40, _hoisted_2$7)]);
    };
  }
});
var _hoisted_1$8 = {
  key: 0,
  tabindex: "-1",
  class: "table-ng__cell"
};
var _sfc_main$a = /* @__PURE__ */ defineComponent2({
  __name: "ITableSelectable",
  props: {
    selectable: {},
    row: {},
    state: {
      type: Boolean
    },
    level: {
      default: 1
    }
  },
  emits: ["toggle"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
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
      component: _sfc_main$c,
      label() {
        return $t("fkui.table.selectable.checkbox", "V\xE4lj rad");
      },
      checked() {
        return __props.state;
      },
      editable() {
        return true;
      },
      update() {
        emit("toggle", __props.row);
      }
    };
    const singleSelectColumn = {
      type: "radio",
      id: /* @__PURE__ */ Symbol("single-select"),
      header: ref3("V\xE4lj en rad"),
      description: ref3(null),
      sortable: null,
      size: ref3(null),
      component: _sfc_main$b,
      label() {
        return $t("fkui.table.selectable.radio", "V\xE4lj rad");
      },
      checked() {
        return __props.state;
      },
      update() {
        emit("toggle", __props.row);
      }
    };
    return (_ctx, _cache) => {
      return __props.level > 1 ? (openBlock(), createElementBlock("td", _hoisted_1$8)) : __props.selectable === "multi" ? (openBlock(), createBlock(_sfc_main$c, {
        key: 1,
        ref: "child",
        row: __props.row,
        column: multiSelectColumn,
        class: "table-ng__cell--selectable"
      }, null, 8, ["row"])) : __props.selectable === "single" ? (openBlock(), createBlock(_sfc_main$b, {
        key: 2,
        ref: "child",
        row: __props.row,
        column: singleSelectColumn,
        class: "table-ng__cell--selectable"
      }, null, 8, ["row"])) : createCommentVNode("", true);
    };
  }
});
function walk(array, childKey, visit, level = 1) {
  for (const item of array) {
    const visitChildren = visit(item, level);
    if (visitChildren && childKey && item[childKey]) {
      walk(item[childKey], childKey, visit, level + 1);
    }
  }
}
function getBodyRowCount(rows, childKey) {
  let count = 0;
  walk(rows, childKey, () => {
    count++;
    return true;
  });
  return count;
}
var es_array_push = {};
var isArray;
var hasRequiredIsArray;
function requireIsArray() {
  if (hasRequiredIsArray) return isArray;
  hasRequiredIsArray = 1;
  var classof2 = requireClassofRaw();
  isArray = Array.isArray || function isArray2(argument) {
    return classof2(argument) === "Array";
  };
  return isArray;
}
var arraySetLength;
var hasRequiredArraySetLength;
function requireArraySetLength() {
  if (hasRequiredArraySetLength) return arraySetLength;
  hasRequiredArraySetLength = 1;
  var DESCRIPTORS = requireDescriptors();
  var isArray2 = requireIsArray();
  var $TypeError = TypeError;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !(function() {
    if (this !== void 0) return true;
    try {
      Object.defineProperty([], "length", {
        writable: false
      }).length = 1;
    } catch (error) {
      return error instanceof TypeError;
    }
  })();
  arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O, length) {
    if (isArray2(O) && !getOwnPropertyDescriptor(O, "length").writable) {
      throw new $TypeError("Cannot set read only .length");
    }
    return O.length = length;
  } : function(O, length) {
    return O.length = length;
  };
  return arraySetLength;
}
var doesNotExceedSafeInteger;
var hasRequiredDoesNotExceedSafeInteger;
function requireDoesNotExceedSafeInteger() {
  if (hasRequiredDoesNotExceedSafeInteger) return doesNotExceedSafeInteger;
  hasRequiredDoesNotExceedSafeInteger = 1;
  var $TypeError = TypeError;
  var MAX_SAFE_INTEGER = 9007199254740991;
  doesNotExceedSafeInteger = function(it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError("Maximum allowed index exceeded");
    return it;
  };
  return doesNotExceedSafeInteger;
}
var hasRequiredEs_array_push;
function requireEs_array_push() {
  if (hasRequiredEs_array_push) return es_array_push;
  hasRequiredEs_array_push = 1;
  var $ = require_export();
  var toObject2 = requireToObject();
  var lengthOfArrayLike2 = requireLengthOfArrayLike();
  var setArrayLength = requireArraySetLength();
  var doesNotExceedSafeInteger2 = requireDoesNotExceedSafeInteger();
  var fails2 = requireFails();
  var INCORRECT_TO_LENGTH = fails2(function() {
    return [].push.call({
      length: 4294967296
    }, 1) !== 4294967297;
  });
  var properErrorOnNonWritableLength = function() {
    try {
      Object.defineProperty([], "length", {
        writable: false
      }).push();
    } catch (error) {
      return error instanceof TypeError;
    }
  };
  var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();
  $({
    target: "Array",
    proto: true,
    arity: 1,
    forced: FORCED
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    push: function push(item) {
      var O = toObject2(this);
      var len = lengthOfArrayLike2(O);
      var argCount = arguments.length;
      doesNotExceedSafeInteger2(len + argCount);
      for (var i = 0; i < argCount; i++) {
        O[len] = arguments[i];
        len++;
      }
      setArrayLength(O, len);
      return len;
    }
  });
  return es_array_push;
}
requireEs_array_push();
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
    const isExpandable = Boolean(expandableAttribute && row[expandableAttribute]);
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
  const stopEdit2 = inject3(stopEditKey, () => Promise.resolve());
  return {
    stopEdit: stopEdit2
  };
}
var es_iterator_map = {};
var defineBuiltIns;
var hasRequiredDefineBuiltIns;
function requireDefineBuiltIns() {
  if (hasRequiredDefineBuiltIns) return defineBuiltIns;
  hasRequiredDefineBuiltIns = 1;
  var defineBuiltIn2 = requireDefineBuiltIn();
  defineBuiltIns = function(target, src, options) {
    for (var key in src) defineBuiltIn2(target, key, src[key], options);
    return target;
  };
  return defineBuiltIns;
}
var createIterResultObject;
var hasRequiredCreateIterResultObject;
function requireCreateIterResultObject() {
  if (hasRequiredCreateIterResultObject) return createIterResultObject;
  hasRequiredCreateIterResultObject = 1;
  createIterResultObject = function(value, done) {
    return {
      value,
      done
    };
  };
  return createIterResultObject;
}
var iteratorCloseAll;
var hasRequiredIteratorCloseAll;
function requireIteratorCloseAll() {
  if (hasRequiredIteratorCloseAll) return iteratorCloseAll;
  hasRequiredIteratorCloseAll = 1;
  var iteratorClose2 = requireIteratorClose();
  iteratorCloseAll = function(iters, kind, value) {
    for (var i = iters.length - 1; i >= 0; i--) {
      if (iters[i] === void 0) continue;
      try {
        value = iteratorClose2(iters[i].iterator, kind, value);
      } catch (error) {
        kind = "throw";
        value = error;
      }
    }
    if (kind === "throw") throw value;
    return value;
  };
  return iteratorCloseAll;
}
var iteratorCreateProxy;
var hasRequiredIteratorCreateProxy;
function requireIteratorCreateProxy() {
  if (hasRequiredIteratorCreateProxy) return iteratorCreateProxy;
  hasRequiredIteratorCreateProxy = 1;
  var call = requireFunctionCall();
  var create = requireObjectCreate();
  var createNonEnumerableProperty2 = requireCreateNonEnumerableProperty();
  var defineBuiltIns2 = requireDefineBuiltIns();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var InternalStateModule = requireInternalState();
  var getMethod2 = requireGetMethod();
  var IteratorPrototype = requireIteratorsCore().IteratorPrototype;
  var createIterResultObject2 = requireCreateIterResultObject();
  var iteratorClose2 = requireIteratorClose();
  var iteratorCloseAll2 = requireIteratorCloseAll();
  var TO_STRING_TAG = wellKnownSymbol2("toStringTag");
  var ITERATOR_HELPER = "IteratorHelper";
  var WRAP_FOR_VALID_ITERATOR = "WrapForValidIterator";
  var NORMAL = "normal";
  var THROW = "throw";
  var setInternalState = InternalStateModule.set;
  var createIteratorProxyPrototype = function(IS_ITERATOR) {
    var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);
    return defineBuiltIns2(create(IteratorPrototype), {
      next: function next() {
        var state = getInternalState(this);
        if (IS_ITERATOR) return state.nextHandler();
        if (state.done) return createIterResultObject2(void 0, true);
        try {
          var result = state.nextHandler();
          return state.returnHandlerResult ? result : createIterResultObject2(result, state.done);
        } catch (error) {
          state.done = true;
          throw error;
        }
      },
      "return": function() {
        var state = getInternalState(this);
        var iterator = state.iterator;
        state.done = true;
        if (IS_ITERATOR) {
          var returnMethod = getMethod2(iterator, "return");
          return returnMethod ? call(returnMethod, iterator) : createIterResultObject2(void 0, true);
        }
        if (state.inner) try {
          iteratorClose2(state.inner.iterator, NORMAL);
        } catch (error) {
          return iteratorClose2(iterator, THROW, error);
        }
        if (state.openIters) try {
          iteratorCloseAll2(state.openIters, NORMAL);
        } catch (error) {
          return iteratorClose2(iterator, THROW, error);
        }
        if (iterator) iteratorClose2(iterator, NORMAL);
        return createIterResultObject2(void 0, true);
      }
    });
  };
  var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
  var IteratorHelperPrototype = createIteratorProxyPrototype(false);
  createNonEnumerableProperty2(IteratorHelperPrototype, TO_STRING_TAG, "Iterator Helper");
  iteratorCreateProxy = function(nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
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
  return iteratorCreateProxy;
}
var callWithSafeIterationClosing;
var hasRequiredCallWithSafeIterationClosing;
function requireCallWithSafeIterationClosing() {
  if (hasRequiredCallWithSafeIterationClosing) return callWithSafeIterationClosing;
  hasRequiredCallWithSafeIterationClosing = 1;
  var anObject2 = requireAnObject();
  var iteratorClose2 = requireIteratorClose();
  callWithSafeIterationClosing = function(iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject2(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose2(iterator, "throw", error);
    }
  };
  return callWithSafeIterationClosing;
}
var iteratorHelperThrowsOnInvalidIterator;
var hasRequiredIteratorHelperThrowsOnInvalidIterator;
function requireIteratorHelperThrowsOnInvalidIterator() {
  if (hasRequiredIteratorHelperThrowsOnInvalidIterator) return iteratorHelperThrowsOnInvalidIterator;
  hasRequiredIteratorHelperThrowsOnInvalidIterator = 1;
  iteratorHelperThrowsOnInvalidIterator = function(methodName, argument) {
    var method = typeof Iterator == "function" && Iterator.prototype[methodName];
    if (method) try {
      method.call({
        next: null
      }, argument).next();
    } catch (error) {
      return true;
    }
  };
  return iteratorHelperThrowsOnInvalidIterator;
}
var hasRequiredEs_iterator_map;
function requireEs_iterator_map() {
  if (hasRequiredEs_iterator_map) return es_iterator_map;
  hasRequiredEs_iterator_map = 1;
  var $ = require_export();
  var call = requireFunctionCall();
  var aCallable2 = requireACallable();
  var anObject2 = requireAnObject();
  var getIteratorDirect2 = requireGetIteratorDirect();
  var createIteratorProxy = requireIteratorCreateProxy();
  var callWithSafeIterationClosing2 = requireCallWithSafeIterationClosing();
  var iteratorClose2 = requireIteratorClose();
  var iteratorHelperThrowsOnInvalidIterator2 = requireIteratorHelperThrowsOnInvalidIterator();
  var iteratorHelperWithoutClosingOnEarlyError2 = requireIteratorHelperWithoutClosingOnEarlyError();
  var IS_PURE = requireIsPure();
  var MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator2("map", function() {
  });
  var mapWithoutClosingOnEarlyError = !IS_PURE && !MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError2("map", TypeError);
  var FORCED = IS_PURE || MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || mapWithoutClosingOnEarlyError;
  var IteratorProxy = createIteratorProxy(function() {
    var iterator = this.iterator;
    var result = anObject2(call(this.next, iterator));
    var done = this.done = !!result.done;
    if (!done) return callWithSafeIterationClosing2(iterator, this.mapper, [result.value, this.counter++], true);
  });
  $({
    target: "Iterator",
    proto: true,
    real: true,
    forced: FORCED
  }, {
    map: function map(mapper) {
      anObject2(this);
      try {
        aCallable2(mapper);
      } catch (error) {
        iteratorClose2(this, "throw", error);
      }
      if (mapWithoutClosingOnEarlyError) return call(mapWithoutClosingOnEarlyError, this, mapper);
      return new IteratorProxy(getIteratorDirect2(this), {
        mapper
      });
    }
  });
  return es_iterator_map;
}
requireEs_iterator_map();
var _hoisted_1$7 = {
  key: 0,
  class: "table-ng__cell table-ng__cell--anchor"
};
var _hoisted_2$6 = ["href"];
var _hoisted_3$6 = {
  key: 1,
  ref: "target",
  tabindex: "-1",
  class: "table-ng__cell"
};
var _sfc_main$9 = /* @__PURE__ */ defineComponent2({
  __name: "ITableAnchor",
  props: {
    column: {},
    row: {}
  },
  setup(__props, {
    expose: __expose
  }) {
    const targetElement = useTemplateRef("target");
    const renderAnchor = computed3(() => {
      return __props.column.enabled(__props.row) && __props.column.text(__props.row) !== null;
    });
    const expose = {
      tabstopEl: targetElement
    };
    __expose(expose);
    return (_ctx, _cache) => {
      return renderAnchor.value ? (openBlock(), createElementBlock("td", _hoisted_1$7, [createElementVNode("a", {
        ref: "target",
        class: "anchor anchor--block",
        target: "_blank",
        href: __props.column.href,
        tabindex: "-1"
      }, toDisplayString(__props.column.text(__props.row)), 9, _hoisted_2$6)])) : (openBlock(), createElementBlock("td", _hoisted_3$6, null, 512));
    };
  }
});
var _hoisted_1$6 = {
  key: 0,
  class: "table-ng__cell table-ng__cell--button"
};
var _hoisted_2$5 = {
  class: "sr-only"
};
var _hoisted_3$5 = {
  key: 1,
  ref: "td",
  tabindex: "-1",
  class: "table-ng__cell"
};
var _sfc_main$8 = /* @__PURE__ */ defineComponent2({
  __name: "ITableButton",
  props: {
    column: {},
    row: {}
  },
  setup(__props, {
    expose: __expose
  }) {
    const buttonElement = useTemplateRef("button");
    const tdElement = useTemplateRef("td");
    function onClickButton() {
      assertRef(buttonElement);
      buttonElement.value.tabIndex = 0;
      if (__props.column.onClick) {
        __props.column.onClick(__props.row);
      }
    }
    const renderButton = computed3(() => {
      return __props.column.enabled(__props.row) && __props.column.text(__props.row) !== null;
    });
    const expose = {
      tabstopEl: renderButton.value ? buttonElement : tdElement
    };
    __expose(expose);
    return (_ctx, _cache) => {
      return renderButton.value ? (openBlock(), createElementBlock("td", _hoisted_1$6, [createElementVNode("button", {
        ref: "button",
        class: "icon-button",
        type: "button",
        tabindex: "-1",
        onClick: onClickButton
      }, [__props.column.icon ? (openBlock(), createBlock(unref3(FIcon), {
        key: 0,
        library: __props.column.iconLibrary,
        name: __props.column.icon
      }, null, 8, ["library", "name"])) : createCommentVNode("", true), _cache[0] || (_cache[0] = createTextVNode()), createElementVNode("span", _hoisted_2$5, toDisplayString(__props.column.text(__props.row)), 1)], 512)])) : (openBlock(), createElementBlock("td", _hoisted_3$5, null, 512));
    };
  }
});
var es_iterator_find = {};
var hasRequiredEs_iterator_find;
function requireEs_iterator_find() {
  if (hasRequiredEs_iterator_find) return es_iterator_find;
  hasRequiredEs_iterator_find = 1;
  var $ = require_export();
  var call = requireFunctionCall();
  var iterate2 = requireIterate();
  var aCallable2 = requireACallable();
  var anObject2 = requireAnObject();
  var getIteratorDirect2 = requireGetIteratorDirect();
  var iteratorClose2 = requireIteratorClose();
  var iteratorHelperWithoutClosingOnEarlyError2 = requireIteratorHelperWithoutClosingOnEarlyError();
  var findWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError2("find", TypeError);
  $({
    target: "Iterator",
    proto: true,
    real: true,
    forced: findWithoutClosingOnEarlyError
  }, {
    find: function find(predicate) {
      anObject2(this);
      try {
        aCallable2(predicate);
      } catch (error) {
        iteratorClose2(this, "throw", error);
      }
      if (findWithoutClosingOnEarlyError) return call(findWithoutClosingOnEarlyError, this, predicate);
      var record = getIteratorDirect2(this);
      var counter = 0;
      return iterate2(record, function(value, stop) {
        if (predicate(value, counter++)) return stop(value);
      }, {
        IS_RECORD: true,
        INTERRUPTED: true
      }).result;
    }
  });
  return es_iterator_find;
}
requireEs_iterator_find();
var _hoisted_1$5 = {
  key: 0,
  class: "table-ng__cell table-ng__cell--button"
};
var _hoisted_2$4 = {
  class: "sr-only"
};
var _hoisted_3$4 = {
  key: 1,
  tabindex: "-1",
  class: "table-ng__cell"
};
var _sfc_main$7 = /* @__PURE__ */ defineComponent2({
  __name: "ITableMenu",
  props: {
    column: {},
    row: {}
  },
  setup(__props, {
    expose: __expose
  }) {
    const buttonRef = useTemplateRef("button");
    const expose = {
      tabstopEl: buttonRef
    };
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
    const renderButton = computed3(() => {
      return __props.column.enabled(__props.row);
    });
    function onOpen(event) {
      event.stopPropagation();
      isOpen.value = true;
    }
    function onClose() {
      isOpen.value = false;
    }
    function onFocusout(event) {
      const validTarget = event.relatedTarget && event.relatedTarget instanceof HTMLElement;
      const inPopup = validTarget && Boolean(event.relatedTarget.closest(".popup"));
      if (inPopup) {
        return;
      }
      isOpen.value = false;
    }
    function onSelect(key) {
      const action = actions.value.find((it) => it.key === key);
      action?.onClick(__props.row);
    }
    __expose(expose);
    return (_ctx, _cache) => {
      var _buttonRef$value;
      return renderButton.value ? (openBlock(), createElementBlock("td", _hoisted_1$5, [createElementVNode("button", {
        ref: "button",
        class: "icon-button",
        type: "button",
        tabindex: "-1",
        "aria-haspopup": "menu",
        onClick: onOpen
      }, [createVNode(unref3(FIcon), {
        name: "bars"
      }), _cache[0] || (_cache[0] = createTextVNode()), createElementVNode("span", _hoisted_2$4, toDisplayString(__props.column.text(__props.row)), 1)], 512), _cache[1] || (_cache[1] = createTextVNode()), createVNode(unref3(FContextMenu), {
        "is-open": isOpen.value,
        items: menuitems.value,
        anchor: (_buttonRef$value = buttonRef.value) !== null && _buttonRef$value !== void 0 ? _buttonRef$value : void 0,
        onClose,
        onSelect,
        onFocusout
      }, null, 8, ["is-open", "items", "anchor"])])) : (openBlock(), createElementBlock("td", _hoisted_3$4));
    };
  }
});
var _sfc_main$6 = /* @__PURE__ */ defineComponent2({
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
var _hoisted_1$4 = {
  class: "table-ng__editable"
};
var _hoisted_2$3 = {
  class: "table-ng__editable__text"
};
var _hoisted_3$3 = ["aria-expanded", "aria-controls", "aria-activedescendant", "aria-label"];
var _hoisted_4$3 = {
  class: "table-ng__editable__text"
};
var _hoisted_5$3 = {
  key: 1,
  tabindex: "-1",
  class: "table-ng__cell table-ng__cell--static"
};
var _sfc_main$5 = /* @__PURE__ */ defineComponent2({
  __name: "ITableSelect",
  props: {
    row: {},
    column: {}
  },
  setup(__props) {
    const editing = ref3(false);
    const editRef = useTemplateRef("edit");
    const {
      stopEdit: stopEdit2
    } = useStartStopEdit();
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
      if (e.code === "Enter" || e.code === "NumpadEnter") {
        await startEditing(e);
      }
    }
    async function onCellClick(e) {
      if (editing.value) {
        return;
      }
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
      if (viewValue.value) {
        activeOption.value = viewValue.value;
      } else {
        activeOption.value = null;
      }
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
        if (index === __props.column.options.length - 1) {
          activeOption.value = __props.column.options[0];
        } else {
          activeOption.value = __props.column.options[index + 1];
        }
      } else {
        activeOption.value = __props.column.options[0];
      }
    }
    function setPreviousOption() {
      if (activeOption.value) {
        const index = __props.column.options.indexOf(activeOption.value);
        if (index === 0) {
          activeOption.value = __props.column.options[__props.column.options.length - 1];
        } else {
          activeOption.value = __props.column.options[index - 1];
        }
      } else {
        activeOption.value = __props.column.options[__props.column.options.length - 1];
      }
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
      }
    }
    async function onEditBlur(event) {
      const validTarget = event.relatedTarget && event.relatedTarget instanceof HTMLElement;
      if (validTarget && event.relatedTarget.closest(".combobox__listbox")) {
        return;
      }
      assertSet(stopEdit2);
      assertRef(editRef);
      closeDropdown();
      await nextTick3();
      await stopEdit2(editRef.value, "blur");
    }
    return (_ctx, _cache) => {
      return __props.column.editable(__props.row) ? (openBlock(), createElementBlock("td", {
        key: 0,
        class: "table-ng__cell table-ng__cell--select",
        tabindex: "-1",
        onKeydown: onCellKeyDown,
        onClick: withModifiers(onCellClick, ["stop"])
      }, [withDirectives(createElementVNode("div", _hoisted_1$4, [createElementVNode("span", _hoisted_2$3, toDisplayString(viewValue.value), 1), _cache[3] || (_cache[3] = createTextVNode()), createVNode(unref3(FIcon), {
        name: "arrow-down",
        class: "table-ng__editable__icon"
      })], 512), [[vShow, !editing.value]]), _cache[5] || (_cache[5] = createTextVNode()), withDirectives(createElementVNode("div", {
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
      }, [createElementVNode("span", _hoisted_4$3, toDisplayString(viewValue.value), 1), _cache[4] || (_cache[4] = createTextVNode()), createVNode(unref3(FIcon), {
        name: "arrow-down",
        class: "table-ng__editable__icon--active"
      })], 40, _hoisted_3$3), [[vShow, editing.value]]), _cache[6] || (_cache[6] = createTextVNode()), withDirectives(createVNode(unref3(IComboboxDropdown), {
        id: unref3(dropdownId),
        "is-open": dropdownIsOpen.value,
        options: __props.column.options,
        "active-option": activeOption.value,
        "active-option-id": unref3(activeOptionId),
        "input-node": editRef.value,
        onSelect: selectDropdownOption,
        onClose: onDropdownClose
      }, null, 8, ["id", "is-open", "options", "active-option", "active-option-id", "input-node"]), [[vShow, editing.value]])], 32)) : (openBlock(), createElementBlock("td", _hoisted_5$3, toDisplayString(__props.column.selected(__props.row)), 1));
    };
  }
});
function defaultTnumValue(type) {
  const tnumTypes = ["text:bankAccountNumber", "text:bankgiro", "text:clearingNumber", "text:currency", "text:number", "text:organisationsnummer", "text:percent", "text:personnummer", "text:phoneNumber", "text:plusgiro", "text:postalCode"];
  return tnumTypes.includes(type);
}
function getLabelFn(fn) {
  if (fn) {
    return fn;
  }
  return () => "";
}
function getUpdateFn(fn, key) {
  if (fn) {
    return fn;
  }
  if (key) {
    return (row, value) => {
      row[key] = value;
    };
  }
  return () => void 0;
}
function getValueFn(fn, key, coerce, defaultValue) {
  if (fn) {
    return fn;
  }
  if (key) {
    return (row) => {
      var _row$key;
      return coerce((_row$key = row[key]) !== null && _row$key !== void 0 ? _row$key : defaultValue);
    };
  }
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
var _hoisted_1$3 = ["id", "aria-invalid"];
var _hoisted_2$2 = {
  class: "table-ng__editable__text"
};
var _hoisted_3$2 = {
  key: 0,
  class: "sr-only"
};
var _hoisted_4$2 = ["id", "aria-label"];
var _hoisted_5$2 = {
  ref: "pen"
};
var _sfc_main$4 = /* @__PURE__ */ defineComponent2({
  __name: "ITableText",
  props: {
    row: {},
    column: {},
    activeErrorAnchor: {
      default: () => void 0
    }
  },
  emits: ["onError", "closeError"],
  setup(__props, {
    emit: __emit
  }) {
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
      return {
        "table-ng__textedit": true
      };
    });
    const ariaLabel = computed3(() => {
      let value = __props.column.label(__props.row);
      if (hasError.value) {
        value = `${value} ${validity.value.validationMessage}`;
      }
      return value.length > 0 ? value : void 0;
    });
    const columnAttributes = computed3(() => {
      if (__props.column.attributes && typeof __props.column.attributes === "function") {
        return __props.column.attributes(__props.row);
      } else {
        return __props.column.attributes;
      }
    });
    const configAttributes = computed3(() => {
      let decimals = void 0;
      if (isColumnTypeNumber(__props.column)) {
        decimals = __props.column.decimals;
      }
      return inputFieldConfig[__props.column.type].attributes({
        decimals
      });
    });
    const tdElement = useTemplateRef("td");
    const inputElement = useTemplateRef("input");
    const penElement = useTemplateRef("pen");
    const {
      stopEdit: stopEdit2
    } = useStartStopEdit();
    const isHovered = useElementHover(tdElement, {
      delayEnter: 200
    });
    const {
      focused
    } = useFocusWithin(tdElement);
    const openPopupError = computed3(() => {
      if (!tdElement.value) {
        return false;
      }
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
      const nativeEvents = ["change", "blur"];
      nativeEvents.forEach((nativeEvent) => {
        useEventListener(el, nativeEvent, () => {
          const fakeEvent = new CustomEvent("validity", {
            detail: {
              isValid: true,
              nativeEvent,
              validityMode: "INITIAL",
              validationMessage: "",
              target: inputElement.value,
              elementId: String(inputElement.value.id)
            }
          });
          onValidity(fakeEvent);
        });
      });
      useEventListener(el, "input", onPendingValidity);
      useEventListener(el, "component-validity", (e) => {
        e.stopPropagation();
      });
    }
    onMounted3(() => {
      if (inputElement.value) {
        viewValue.value = fromColumnValue();
        if (__props.column.hasValidation) {
          setUpValidation(inputElement.value);
        } else {
          setUpFakeValidation(inputElement.value);
        }
        void nextTick3().then(() => validationFacade.validateElement(inputElement.value));
      }
    });
    watchEffect3(() => {
      if (hasError.value) {
        var _tdElement$value, _penElement$value;
        emit("onError", {
          anchor: (_tdElement$value = tdElement.value) !== null && _tdElement$value !== void 0 ? _tdElement$value : void 0,
          arrowAnchor: (_penElement$value = penElement.value) !== null && _penElement$value !== void 0 ? _penElement$value : void 0,
          message: validity.value.validationMessage,
          hasFocus: focused.value,
          hasHover: isHovered.value,
          inEdit: inEdit.value
        });
      } else {
        var _tdElement$value2, _penElement$value2;
        emit("closeError", {
          anchor: (_tdElement$value2 = tdElement.value) !== null && _tdElement$value2 !== void 0 ? _tdElement$value2 : void 0,
          arrowAnchor: (_penElement$value2 = penElement.value) !== null && _penElement$value2 !== void 0 ? _penElement$value2 : void 0,
          message: validity.value.validationMessage,
          hasFocus: focused.value,
          hasHover: isHovered.value,
          inEdit: inEdit.value
        });
      }
    });
    function onStartEdit(value) {
      if (inEdit.value) {
        return;
      }
      inEdit.value = true;
      assertRef(tdElement);
      assertRef(inputElement);
      const {
        width
      } = tdElement.value.getBoundingClientRect();
      initialViewValue = viewValue.value;
      viewValue.value = value;
      tdElement.value.style.setProperty("width", `${String(width)}px`);
      inputElement.value.tabIndex = 0;
      inputElement.value.focus();
    }
    function onStopEdit(options) {
      const {
        reason
      } = options;
      inEdit.value = false;
      assertRef(inputElement);
      inputElement.value.tabIndex = -1;
      assertRef(tdElement);
      tdElement.value.style.removeProperty("width");
      void stopEdit2(inputElement.value, reason);
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
      if (oldValue !== newValue) {
        __props.column.update(__props.row, newValue, oldValue);
      }
    }
    function onClickCell(event) {
      assertRef(tdElement);
      if (tdElement.value.contains(event.target)) {
        onStartEdit(fromColumnValue());
      }
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
      if (event.key === "Enter") {
        if (viewValue.value === initialViewValue) {
          onStopEdit({
            reason: "enter"
          });
        } else {
          pendingStopEditReason = "enter";
        }
      } else if (event.key === "Escape") {
        onStopEdit({
          reason: "escape"
        });
        viewValue.value = initialViewValue;
        inputElement.value.value = initialViewValue;
        void validationFacade.validateElement(inputElement.value);
      } else if (event.key === "Tab") {
        pendingStopEditReason = event.shiftKey ? "shift-tab" : "tab";
      }
    }
    function onKeydown(event) {
      const editing = document.activeElement === inputElement.value;
      if (editing) {
        onEditingKeydown(event);
      } else {
        onViewingKeydown(event);
      }
    }
    function updateValidity(eventDetail) {
      const {
        isValid,
        validationMessage,
        validityMode
      } = eventDetail;
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
        onStopEdit({
          reason
        });
        updateValidity(event.detail);
        updateColumnValue();
        return;
      }
      if (nativeEvent === "input") {
        updateValidity(event.detail);
        updateColumnValue();
        return;
      }
      if (nativeEvent === "validate") {
        updateValidity(event.detail);
      }
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
      }, [createElementVNode("div", {
        class: normalizeClass(divClasses.value)
      }, [createElementVNode("span", _hoisted_2$2, toDisplayString(fromColumnValue()), 1), _cache[1] || (_cache[1] = createTextVNode()), viewModeErrorMessage.value ? (openBlock(), createElementBlock("span", _hoisted_3$2, toDisplayString(viewModeErrorMessage.value), 1)) : createCommentVNode("", true), _cache[2] || (_cache[2] = createTextVNode()), withDirectives(createElementVNode("input", mergeProps({
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
        onValidity,
        onPendingValidity
      }), null, 16, _hoisted_4$2), [[vModelText, viewValue.value]]), _cache[3] || (_cache[3] = createTextVNode()), createElementVNode("div", _hoisted_5$2, [createVNode(unref3(FIcon), {
        name: "pen",
        class: "table-ng__editable__icon"
      })], 512)], 2), _cache[4] || (_cache[4] = createTextVNode()), createVNode(unref3(IPopupError), {
        anchor: tdElement.value,
        "is-open": openPopupError.value,
        "error-message": validity.value.validationMessage,
        "arrow-anchor": penElement.value,
        layout: "f-table"
      }, null, 8, ["anchor", "is-open", "error-message", "arrow-anchor"])], 42, _hoisted_1$3)) : (openBlock(), createElementBlock("td", {
        key: 1,
        ref: "td",
        tabindex: "-1",
        class: normalizeClass(staticClasses.value)
      }, toDisplayString(fromColumnValue()), 3));
    };
  }
});
function normalizeAnchorColumn(column) {
  var _column$key;
  return {
    type: "anchor",
    text: getValueFn(column.text, column.key, String, ""),
    href: column.href,
    enabled: typeof column.enabled === "function" ? column.enabled : () => {
      var _column$enabled;
      return Boolean((_column$enabled = column.enabled) !== null && _column$enabled !== void 0 ? _column$enabled : true);
    },
    sortable: (_column$key = column.key) !== null && _column$key !== void 0 ? _column$key : null
  };
}
function normalizeBaseColumn(column) {
  const id = /* @__PURE__ */ Symbol();
  const header = toRef2(column.header);
  const description = typeof column.description !== "undefined" ? toRef2(column.description) : ref3("");
  const size = typeof column.size !== "undefined" ? toRef2(column.size) : ref3("grow");
  return {
    id,
    header,
    description,
    size
  };
}
function normalizeButtonColumn(column) {
  var _column$icon, _column$key;
  return {
    type: "button",
    text: getValueFn(column.text, column.key, String, ""),
    onClick: column.onClick,
    enabled: typeof column.enabled === "function" ? column.enabled : () => {
      var _column$enabled;
      return Boolean((_column$enabled = column.enabled) !== null && _column$enabled !== void 0 ? _column$enabled : true);
    },
    icon: (_column$icon = column.icon) !== null && _column$icon !== void 0 ? _column$icon : null,
    iconLibrary: column.iconLibrary,
    sortable: (_column$key = column.key) !== null && _column$key !== void 0 ? _column$key : null
  };
}
function normalizeCheckboxColumn(column) {
  var _column$key;
  return {
    type: "checkbox",
    label: getLabelFn(column.label),
    checked: getValueFn(column.checked, column.key, Boolean, false),
    update: getUpdateFn(column.update, column.key),
    editable: typeof column.editable === "function" ? column.editable : () => {
      var _column$editable;
      return Boolean((_column$editable = column.editable) !== null && _column$editable !== void 0 ? _column$editable : false);
    },
    sortable: (_column$key = column.key) !== null && _column$key !== void 0 ? _column$key : null
  };
}
function noop2() {
}
function normalizeMenuColumn(column) {
  var _column$actions;
  return {
    type: "menu",
    text: getValueFn(column.text, void 0, String, ""),
    sortable: null,
    actions: ((_column$actions = column.actions) !== null && _column$actions !== void 0 ? _column$actions : []).map((it) => {
      var _it$icon, _it$onClick;
      return {
        label: it.label,
        icon: (_it$icon = it.icon) !== null && _it$icon !== void 0 ? _it$icon : null,
        onClick: (_it$onClick = it.onClick) !== null && _it$onClick !== void 0 ? _it$onClick : noop2
      };
    }),
    enabled: typeof column.enabled === "function" ? column.enabled : () => {
      var _column$enabled;
      return Boolean((_column$enabled = column.enabled) !== null && _column$enabled !== void 0 ? _column$enabled : true);
    }
  };
}
function normalizeNumberColumn(column) {
  var _column$parser, _column$formatter, _column$tnum, _column$align, _column$validation, _column$key;
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
    sortable: (_column$key = column.key) !== null && _column$key !== void 0 ? _column$key : null,
    formatter,
    parser
  };
}
function normalizeRadioColumn(column) {
  var _column$key;
  return {
    type: "radio",
    label: getLabelFn(column.label),
    checked: getValueFn(column.checked, column.key, Boolean, false),
    update: getUpdateFn(column.update, column.key),
    sortable: (_column$key = column.key) !== null && _column$key !== void 0 ? _column$key : null
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
  var _column$key;
  return {
    type: "rowheader",
    text: getValueFn(column.text, column.key, String, ""),
    sortable: (_column$key = column.key) !== null && _column$key !== void 0 ? _column$key : null
  };
}
function normalizeSelectColumn(column) {
  var _column$key;
  return {
    type: "select",
    label: getLabelFn(column.label),
    selected: getValueFn(column.selected, column.key, String, ""),
    update: getUpdateFn(column.update, column.key),
    editable: typeof column.editable === "function" ? column.editable : () => {
      var _column$editable;
      return Boolean((_column$editable = column.editable) !== null && _column$editable !== void 0 ? _column$editable : false);
    },
    options: column.options,
    sortable: (_column$key = column.key) !== null && _column$key !== void 0 ? _column$key : null
  };
}
function normalizeSimpleColumn(column) {
  var _column$key;
  return {
    type: "text",
    label: () => "",
    tnum: false,
    align: "left",
    value: getValueFn(column.value, column.key, String, ""),
    update() {
    },
    editable: () => false,
    sortable: (_column$key = column.key) !== null && _column$key !== void 0 ? _column$key : null,
    validation: {},
    hasValidation: false,
    formatter: (value) => value,
    parser: (value) => value
  };
}
function normalizeTextColumn(column) {
  var _column$parser, _column$formatter, _column$tnum, _column$align, _column$validation, _column$key;
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
    sortable: (_column$key = column.key) !== null && _column$key !== void 0 ? _column$key : null,
    formatter,
    parser
  };
}
function normalizeTableColumn(column) {
  const base = normalizeBaseColumn(column);
  if ("render" in column) {
    return {
      ...normalizeRenderColumn(column),
      ...base
    };
  }
  switch (column.type) {
    case "checkbox":
      return {
        ...normalizeCheckboxColumn(column),
        ...base,
        component: _sfc_main$c
      };
    case "radio":
      return {
        ...normalizeRadioColumn(column),
        ...base,
        component: _sfc_main$b
      };
    case "text:currency":
    case "text:number":
    case "text:percent":
      return {
        ...normalizeNumberColumn(column),
        ...base,
        component: _sfc_main$4
      };
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
      return {
        ...normalizeTextColumn(column),
        ...base,
        component: _sfc_main$4
      };
    case "rowheader":
      return {
        ...normalizeRowHeaderColumn(column),
        ...base,
        component: _sfc_main$6
      };
    case "anchor":
      return {
        ...normalizeAnchorColumn(column),
        ...base,
        component: _sfc_main$9
      };
    case "button":
      return {
        ...normalizeButtonColumn(column),
        ...base,
        component: _sfc_main$8
      };
    case "select":
      return {
        ...normalizeSelectColumn(column),
        ...base,
        component: _sfc_main$5
      };
    case "menu":
      return {
        ...normalizeMenuColumn(column),
        ...base,
        component: _sfc_main$7
      };
    case void 0:
      return {
        ...normalizeSimpleColumn(column),
        ...base,
        component: _sfc_main$4
      };
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
    const {
      anchor,
      arrowAnchor,
      hasFocus,
      hasHover,
      inEdit
    } = popupError;
    if (!anchor || !arrowAnchor) {
      return;
    }
    if (inEdit) {
      onClosePopupError(popupError);
      return;
    }
    if (hasFocus || hasHover) {
      await open(popupError);
    } else {
      onClosePopupError(popupError);
    }
  }
  async function open(popupError) {
    const {
      message,
      anchor,
      arrowAnchor
    } = popupError;
    if (!anchor || !arrowAnchor) {
      return;
    }
    activeErrorAnchor.value = void 0;
    errorMessage.value = message;
    errorAnchor.value = anchor;
    errorArrowAnchor.value = arrowAnchor;
    await nextTick3();
    activeErrorAnchor.value = anchor;
  }
  function onClosePopupError(popupError) {
    var _errorAnchor$value;
    if (!popupError) {
      return;
    }
    const {
      anchor
    } = popupError;
    if (anchor?.isSameNode((_errorAnchor$value = errorAnchor.value) !== null && _errorAnchor$value !== void 0 ? _errorAnchor$value : null)) {
      activeErrorAnchor.value = void 0;
    }
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
var es_iterator_some = {};
var hasRequiredEs_iterator_some;
function requireEs_iterator_some() {
  if (hasRequiredEs_iterator_some) return es_iterator_some;
  hasRequiredEs_iterator_some = 1;
  var $ = require_export();
  var call = requireFunctionCall();
  var iterate2 = requireIterate();
  var aCallable2 = requireACallable();
  var anObject2 = requireAnObject();
  var getIteratorDirect2 = requireGetIteratorDirect();
  var iteratorClose2 = requireIteratorClose();
  var iteratorHelperWithoutClosingOnEarlyError2 = requireIteratorHelperWithoutClosingOnEarlyError();
  var someWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError2("some", TypeError);
  $({
    target: "Iterator",
    proto: true,
    real: true,
    forced: someWithoutClosingOnEarlyError
  }, {
    some: function some(predicate) {
      anObject2(this);
      try {
        aCallable2(predicate);
      } catch (error) {
        iteratorClose2(this, "throw", error);
      }
      if (someWithoutClosingOnEarlyError) return call(someWithoutClosingOnEarlyError, this, predicate);
      var record = getIteratorDirect2(this);
      var counter = 0;
      return iterate2(record, function(value, stop) {
        if (predicate(value, counter++)) return stop();
      }, {
        IS_RECORD: true,
        INTERRUPTED: true
      }).stopped;
    }
  });
  return es_iterator_some;
}
requireEs_iterator_some();
function rowKey(row) {
  var _findItemIdentifier;
  return (_findItemIdentifier = findItemIdentifier(row)) !== null && _findItemIdentifier !== void 0 ? _findItemIdentifier : "";
}
function useSelectable(options) {
  const {
    selectable,
    selectedRows,
    rows
  } = options;
  if (!selectable) {
    return {
      selectableHeaderState: () => false,
      toggleSelectableHeader: () => void 0,
      selectableRowState: () => false,
      toggleSelectableRow: () => void 0
    };
  }
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
    if (isAllRowsSelected.value) {
      selectedRows.value = [];
    } else {
      selectedRows.value = [...toValue2(rows)];
    }
  }
  function toggleSelectableRow(row) {
    assertRef(selectedRows);
    if (selectable === "single") {
      selectedRows.value = [row];
    } else {
      const index = selectedRows.value.indexOf(row);
      if (index < 0) {
        selectedRows.value.push(row);
      } else {
        selectedRows.value.splice(index, 1);
      }
    }
  }
  function selectableRowState(row) {
    const key = rowKey(row);
    return selectedRows.value.some((selectedRow) => rowKey(selectedRow) === key);
  }
  let oldKeys = void 0;
  watch3(() => toValue2(rows), (newValue) => {
    const newKeys = newValue.map(rowKey).sort();
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
    if (compareKeys.join(",") !== newKeys.join(",")) {
      selectedRows.value = [];
    }
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
  const id = getItemIdentifier(needle);
  return (item) => getItemIdentifier(item) === id;
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
    if (newFirstRowOldIndex > -1) {
      const target = getCellTarget(tableRef.value, newFirstRowOldIndex + 1, 0);
      activateCell(target, {
        focus
      });
    } else {
      renderOptions.value.focus = focus;
      renderOptions.value.fallbackToFirstCell = true;
    }
  }
  watch3(metaRows, (newRows, oldRows) => {
    const tabFallback = pendingRowRemoval ? "sticky" : "first-cell";
    pendingRowRemoval = false;
    assertRef(tableRef);
    const oldTabstopElement = tableRef.value.querySelector(`:not(tfoot)[tabindex="0"]`);
    assertSet(oldTabstopElement);
    const oldTabstopFocused = oldTabstopElement === document.activeElement;
    if (oldTabstopElement.closest("th")) {
      return;
    }
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
    if (oldTabstopFocused && !isBeingRemoved) {
      return;
    }
    if (!isBeingRemoved) {
      if (oldTabstopFocused) {
        return;
      } else {
        fallbackToFirstCell(newRows, oldRows, false);
        return;
      }
    }
    if (tabFallback === "first-cell") {
      fallbackToFirstCell(newRows, oldRows, oldTabstopFocused);
      return;
    }
    if (oldTabstopTr.rowIndex === 1) {
      const needle2 = oldRows[1];
      const hasRowBelowInNewRows = newRows.some(matching(needle2));
      if (hasRowBelowInNewRows) {
        const {
          cell
        } = getVerticalNavIndex(tableRef.value, {
          row: 1,
          cell: oldTabstopTd.cellIndex
        }, {
          row: 2,
          cell: oldTabstopTd.cellIndex
        });
        const fallback = getCellTarget(tableRef.value, 2, cell);
        activateCell(fallback, {
          focus: true
        });
      } else {
        fallbackToFirstCell(newRows, oldRows, true);
      }
    } else {
      const needle2 = oldRows[oldTabstopTr.rowIndex - 2];
      const hasRowAboveInNewRows = newRows.some(matching(needle2));
      if (hasRowAboveInNewRows) {
        const {
          row,
          cell
        } = getVerticalNavIndex(tableRef.value, {
          row: oldTabstopTr.rowIndex,
          cell: oldTabstopTd.cellIndex
        }, {
          row: oldTabstopTr.rowIndex - 1,
          cell: oldTabstopTd.cellIndex
        });
        const fallback = getCellTarget(tableRef.value, row, cell);
        activateCell(fallback, {
          focus: true
        });
      } else {
        fallbackToFirstCell(newRows, oldRows, true);
      }
    }
  });
  onUpdated2(() => {
    if (!renderOptions.value.fallbackToFirstCell) {
      return;
    }
    assertRef(tableRef);
    const target = getCellTarget(tableRef.value, 1, 0);
    activateCell(target, {
      focus: renderOptions.value.focus
    });
    renderOptions.value.fallbackToFirstCell = false;
  });
  async function withTabstopBehaviour(behaviour, action) {
    if (behaviour === "row-removal") {
      pendingRowRemoval = true;
    }
    try {
      await action();
    } finally {
      pendingRowRemoval = false;
    }
  }
  return {
    withTabstopBehaviour
  };
}
var _hoisted_1$2 = ["role", "aria-rowcount"];
var _hoisted_2$1 = {
  key: 0,
  "data-test": "caption"
};
var _hoisted_3$1 = {
  class: "table-ng__row",
  "aria-rowindex": "1"
};
var _hoisted_4$1 = {
  key: 0,
  scope: "col",
  tabindex: "-1",
  class: "table-ng__column"
};
var _hoisted_5$1 = {
  key: 0,
  class: "table-ng__row--empty"
};
var _hoisted_6$1 = ["colspan"];
var _hoisted_7$1 = ["aria-level", "aria-rowindex", "aria-setsize", "aria-posinset", "aria-selected"];
var _hoisted_8 = {
  key: 1
};
var _hoisted_9 = ["aria-rowindex"];
var _hoisted_10 = ["colspan"];
var _sfc_main$3 = /* @__PURE__ */ defineComponent2({
  __name: "FTable",
  props: /* @__PURE__ */ mergeModels({
    columns: {},
    rows: {},
    keyAttribute: {
      default: () => void 0
    },
    expandableAttribute: {
      default: () => void 0
    },
    striped: {
      type: Boolean
    },
    selectable: {
      default: () => void 0
    }
  }, {
    "selectedRows": {
      default: []
    },
    "selectedRowsModifiers": {}
  }),
  emits: ["update:selectedRows"],
  setup(__props, {
    expose: __expose
  }) {
    const selectedRows = useModel(__props, "selectedRows");
    const {
      hasSlot
    } = useSlotUtils();
    const tableRef = useTemplateRef("table");
    const expandedKeys = ref3(/* @__PURE__ */ new Set());
    const keyedRows = computed3(() => setItemIdentifiers(__props.rows, __props.keyAttribute, __props.expandableAttribute));
    const metaRows = computed3(() => getMetaRows(keyedRows.value, expandedKeys.value, __props.expandableAttribute));
    const isTreegrid = computed3(() => Boolean(__props.expandableAttribute));
    const role = computed3(() => isTreegrid.value ? "treegrid" : "grid");
    const hasCaption = computed3(() => {
      return hasSlot("caption", {}, {
        stripClasses: []
      });
    });
    const isEmpty2 = computed3(() => {
      return metaRows.value.length === 0;
    });
    const ariaRowcount = computed3(() => {
      const headerRow = 1;
      const footerRow = hasFooter.value ? 1 : 0;
      return getBodyRowCount(keyedRows.value, __props.expandableAttribute) + headerRow + footerRow;
    });
    const columnCount = computed3(() => {
      const expandCol = isTreegrid.value ? 1 : 0;
      const selectCol = __props.selectable ? 1 : 0;
      const count = columns.value.length + expandCol + selectCol;
      return Math.max(1, count);
    });
    const hasFooter = computed3(() => {
      return hasSlot("footer");
    });
    const columns = computed3(() => normalizeTableColumns(__props.columns));
    const tableClasses = computed3(() => {
      return __props.striped ? "table-ng table-ng--striped" : "table-ng";
    });
    const slots = useSlots();
    const hasExpandableSlot = computed3(() => {
      return Boolean(slots.expandable);
    });
    async function stopEditHandler(element, reason) {
      stopEdit(element, reason);
    }
    provide2(stopEditKey, stopEditHandler);
    function onToggleExpanded(key) {
      if (expandedKeys.value.has(key)) {
        expandedKeys.value.delete(key);
      } else {
        expandedKeys.value.add(key);
      }
    }
    function onKeydown(e) {
      maybeNavigateToCell(e);
    }
    function onClick(e) {
      const cell = e.target.closest("td, th");
      if (cell) {
        activateCell(cell, {
          focus: true
        });
      }
    }
    function onTableFocusin(e) {
      assertRef(tableRef);
      tableRef.value.querySelectorAll(`:not(tfoot)[tabindex="0"]`).forEach((it) => {
        if (it !== e.target) {
          it.setAttribute("tabindex", "-1");
        }
      });
    }
    function isInExpandable(el) {
      if (!el.parentElement) {
        return false;
      }
      return Boolean(el.parentElement.closest(".table-ng__custom-expandable"));
    }
    function onTableFocusout(e) {
      const {
        target,
        relatedTarget
      } = e;
      const validFocus = target instanceof HTMLElement && relatedTarget instanceof HTMLElement;
      if (!validFocus) {
        return;
      }
      if (isInExpandable(target)) {
        return;
      }
      if (!tableRef.value) {
        return;
      }
      const outsideTable = Boolean(tableRef.value.tFoot?.contains(relatedTarget)) || !tableRef.value.contains(relatedTarget);
      if (outsideTable) {
        const cell = target.closest("td, th");
        if (cell) {
          activateCell(cell, {
            focus: false
          });
        }
      } else {
        target.tabIndex = -1;
      }
    }
    const {
      sort,
      registerCallbackOnSort,
      registerCallbackOnMount
    } = FSortFilterDatasetInjected();
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
      if (!column.sortable) {
        return false;
      }
      return sortableColumns.value.indexOf(String(column.sortable)) > -1;
    }
    function getSortOrder(column) {
      if (sortedColumn.value !== column.sortable) {
        return "unsorted";
      } else {
        return sortedAscending.value ? "ascending" : "descending";
      }
    }
    function onToggleSortOrder(sortable) {
      if (sortable === sortedColumn.value) {
        if (sortedAscending.value) {
          sort(sortable, false);
        } else {
          sort("", true);
        }
      } else {
        sort(sortable, true);
      }
    }
    function bindCellApiRef(ref22) {
      if (!isFTableCellApi(ref22)) {
        return;
      }
      const apiEl = toValue2(ref22.tabstopEl);
      if (!apiEl) {
        return;
      }
      const cell = apiEl.closest("td, th");
      assertSet(cell);
      cell[tableCellApiSymbol] = ref22;
    }
    function isAriaSelected(level = 1, row) {
      return level < 2 && selectableRowState(row);
    }
    const {
      onPopupError,
      onClosePopupError,
      activeErrorAnchor
    } = usePopupError();
    const {
      selectableHeaderState,
      toggleSelectableHeader,
      selectableRowState,
      toggleSelectableRow
    } = useSelectable({
      selectable: __props.selectable,
      selectedRows,
      rows: keyedRows
    });
    const tableApi = useTabstop(tableRef, keyedRows);
    __expose(tableApi);
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
        "aria-rowcount": ariaRowcount.value
      }, [hasCaption.value ? (openBlock(), createElementBlock("caption", _hoisted_2$1, [renderSlot(_ctx.$slots, "caption")])) : createCommentVNode("", true), _cache[5] || (_cache[5] = createTextVNode()), createElementVNode("thead", {
        onFocusin: onTableFocusin,
        onFocusout: onTableFocusout,
        onClick,
        onKeydown
      }, [createElementVNode("tr", _hoisted_3$1, [isTreegrid.value ? (openBlock(), createElementBlock("th", _hoisted_4$1)) : createCommentVNode("", true), _cache[0] || (_cache[0] = createTextVNode()), __props.selectable ? (openBlock(), createBlock(_sfc_main$d, {
        key: 1,
        ref: bindCellApiRef,
        state: unref3(selectableHeaderState)(),
        selectable: __props.selectable,
        onToggle: unref3(toggleSelectableHeader)
      }, null, 8, ["state", "selectable", "onToggle"])) : createCommentVNode("", true), _cache[1] || (_cache[1] = createTextVNode()), (openBlock(true), createElementBlock(Fragment2, null, renderList(columns.value, (column) => {
        return openBlock(), createBlock(_sfc_main$e, {
          key: column.id,
          column,
          "sort-enabled": isSortEnabled(column),
          "sort-order": getSortOrder(column),
          scope: "col",
          onToggleSortOrder
        }, null, 8, ["column", "sort-enabled", "sort-order"]);
      }), 128))])], 32), _cache[6] || (_cache[6] = createTextVNode()), createElementVNode("tbody", {
        onFocusin: onTableFocusin,
        onFocusout: onTableFocusout,
        onClick,
        onKeydown
      }, [isEmpty2.value ? (openBlock(), createElementBlock("tr", _hoisted_5$1, [createElementVNode("td", {
        colspan: columnCount.value,
        class: "table-ng__cell"
      }, [renderSlot(_ctx.$slots, "empty", {}, () => [_cache[2] || (_cache[2] = createTextVNode(" Tabellen \xE4r tom ", -1))])], 8, _hoisted_6$1)])) : (openBlock(true), createElementBlock(Fragment2, {
        key: 1
      }, renderList(metaRows.value, ({
        key,
        row,
        rowIndex,
        level,
        setsize,
        posinset,
        isExpandable,
        isExpanded
      }) => {
        return openBlock(), createElementBlock("tr", {
          key,
          class: "table-ng__row",
          "aria-level": level,
          "aria-rowindex": rowIndex,
          "aria-setsize": setsize,
          "aria-posinset": posinset,
          "aria-selected": isAriaSelected(level, row)
        }, [isTreegrid.value ? (openBlock(), createBlock(_sfc_main$g, {
          key: 0,
          ref_for: true,
          ref: bindCellApiRef,
          "is-expandable": isExpandable,
          "is-expanded": isExpanded,
          "row-key": key,
          onToggle: onToggleExpanded
        }, null, 8, ["is-expandable", "is-expanded", "row-key"])) : createCommentVNode("", true), _cache[4] || (_cache[4] = createTextVNode()), level > 1 && hasExpandableSlot.value ? (openBlock(), createBlock(_sfc_main$f, {
          key: 1,
          colspan: columns.value.length
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "expandable", mergeProps({
            ref_for: true
          }, {
            row
          }))]),
          _: 2
        }, 1032, ["colspan"])) : (openBlock(), createElementBlock(Fragment2, {
          key: 2
        }, [__props.selectable ? (openBlock(), createBlock(_sfc_main$a, {
          key: 0,
          ref_for: true,
          ref: bindCellApiRef,
          level,
          selectable: __props.selectable,
          state: unref3(selectableRowState)(row),
          row,
          onToggle: unref3(toggleSelectableRow)
        }, null, 8, ["level", "selectable", "state", "row", "onToggle"])) : createCommentVNode("", true), _cache[3] || (_cache[3] = createTextVNode()), (openBlock(true), createElementBlock(Fragment2, null, renderList(columns.value, (column) => {
          return openBlock(), createElementBlock(Fragment2, {
            key: column.id
          }, ["component" in column ? (openBlock(), createBlock(resolveDynamicComponent(column.component), {
            key: 0,
            ref_for: true,
            ref: bindCellApiRef,
            row,
            column,
            "active-error-anchor": unref3(activeErrorAnchor),
            onCloseError: unref3(onClosePopupError),
            onOnError: unref3(onPopupError)
          }, null, 40, ["row", "column", "active-error-anchor", "onCloseError", "onOnError"])) : "render" in column ? (openBlock(), createBlock(resolveDynamicComponent(column.render(row)), {
            key: 1,
            row
          }, null, 8, ["row"])) : createCommentVNode("", true)], 64);
        }), 128))], 64))], 8, _hoisted_7$1);
      }), 128))], 32), _cache[7] || (_cache[7] = createTextVNode()), hasFooter.value ? (openBlock(), createElementBlock("tfoot", _hoisted_8, [createElementVNode("tr", {
        class: "table-ng__row",
        "aria-rowindex": ariaRowcount.value
      }, [createElementVNode("td", {
        colspan: columnCount.value,
        class: "table-ng__cell--custom"
      }, [renderSlot(_ctx.$slots, "footer")], 8, _hoisted_10)], 8, _hoisted_9)])) : createCommentVNode("", true)], 10, _hoisted_1$2);
    };
  }
});
var es_array_toSpliced = {};
var addToUnscopables;
var hasRequiredAddToUnscopables;
function requireAddToUnscopables() {
  if (hasRequiredAddToUnscopables) return addToUnscopables;
  hasRequiredAddToUnscopables = 1;
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var create = requireObjectCreate();
  var defineProperty = requireObjectDefineProperty().f;
  var UNSCOPABLES = wellKnownSymbol2("unscopables");
  var ArrayPrototype = Array.prototype;
  if (ArrayPrototype[UNSCOPABLES] === void 0) {
    defineProperty(ArrayPrototype, UNSCOPABLES, {
      configurable: true,
      value: create(null)
    });
  }
  addToUnscopables = function(key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };
  return addToUnscopables;
}
var hasRequiredEs_array_toSpliced;
function requireEs_array_toSpliced() {
  if (hasRequiredEs_array_toSpliced) return es_array_toSpliced;
  hasRequiredEs_array_toSpliced = 1;
  var $ = require_export();
  var addToUnscopables2 = requireAddToUnscopables();
  var doesNotExceedSafeInteger2 = requireDoesNotExceedSafeInteger();
  var lengthOfArrayLike2 = requireLengthOfArrayLike();
  var toAbsoluteIndex2 = requireToAbsoluteIndex();
  var toIndexedObject2 = requireToIndexedObject();
  var toIntegerOrInfinity2 = requireToIntegerOrInfinity();
  var createProperty2 = requireCreateProperty();
  var $Array = Array;
  var max = Math.max;
  var min = Math.min;
  $({
    target: "Array",
    proto: true
  }, {
    toSpliced: function toSpliced(start, deleteCount) {
      var O = toIndexedObject2(this);
      var len = lengthOfArrayLike2(O);
      var actualStart = toAbsoluteIndex2(start, len);
      var argumentsLength = arguments.length;
      var k = 0;
      var insertCount, actualDeleteCount, newLen, A;
      if (argumentsLength === 0) {
        insertCount = actualDeleteCount = 0;
      } else if (argumentsLength === 1) {
        insertCount = 0;
        actualDeleteCount = len - actualStart;
      } else {
        insertCount = argumentsLength - 2;
        actualDeleteCount = min(max(toIntegerOrInfinity2(deleteCount), 0), len - actualStart);
      }
      newLen = doesNotExceedSafeInteger2(len + insertCount - actualDeleteCount);
      A = $Array(newLen);
      for (; k < actualStart; k++) createProperty2(A, k, O[k]);
      for (; k < actualStart + insertCount; k++) createProperty2(A, k, arguments[k - actualStart + 2]);
      for (; k < newLen; k++) createProperty2(A, k, O[k + actualDeleteCount - insertCount]);
      return A;
    }
  });
  addToUnscopables2("toSpliced");
  return es_array_toSpliced;
}
requireEs_array_toSpliced();
var es_arrayBuffer_detached = {};
var arrayBufferBasicDetection;
var hasRequiredArrayBufferBasicDetection;
function requireArrayBufferBasicDetection() {
  if (hasRequiredArrayBufferBasicDetection) return arrayBufferBasicDetection;
  hasRequiredArrayBufferBasicDetection = 1;
  arrayBufferBasicDetection = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined";
  return arrayBufferBasicDetection;
}
var arrayBufferByteLength;
var hasRequiredArrayBufferByteLength;
function requireArrayBufferByteLength() {
  if (hasRequiredArrayBufferByteLength) return arrayBufferByteLength;
  hasRequiredArrayBufferByteLength = 1;
  var globalThis2 = requireGlobalThis();
  var uncurryThisAccessor = requireFunctionUncurryThisAccessor();
  var classof2 = requireClassofRaw();
  var ArrayBuffer2 = globalThis2.ArrayBuffer;
  var TypeError2 = globalThis2.TypeError;
  arrayBufferByteLength = ArrayBuffer2 && uncurryThisAccessor(ArrayBuffer2.prototype, "byteLength", "get") || function(O) {
    if (classof2(O) !== "ArrayBuffer") throw new TypeError2("ArrayBuffer expected");
    return O.byteLength;
  };
  return arrayBufferByteLength;
}
var arrayBufferIsDetached;
var hasRequiredArrayBufferIsDetached;
function requireArrayBufferIsDetached() {
  if (hasRequiredArrayBufferIsDetached) return arrayBufferIsDetached;
  hasRequiredArrayBufferIsDetached = 1;
  var globalThis2 = requireGlobalThis();
  var NATIVE_ARRAY_BUFFER = requireArrayBufferBasicDetection();
  var arrayBufferByteLength2 = requireArrayBufferByteLength();
  var DataView2 = globalThis2.DataView;
  arrayBufferIsDetached = function(O) {
    if (!NATIVE_ARRAY_BUFFER || arrayBufferByteLength2(O) !== 0) return false;
    try {
      new DataView2(O);
      return false;
    } catch (error) {
      return true;
    }
  };
  return arrayBufferIsDetached;
}
var hasRequiredEs_arrayBuffer_detached;
function requireEs_arrayBuffer_detached() {
  if (hasRequiredEs_arrayBuffer_detached) return es_arrayBuffer_detached;
  hasRequiredEs_arrayBuffer_detached = 1;
  var DESCRIPTORS = requireDescriptors();
  var defineBuiltInAccessor2 = requireDefineBuiltInAccessor();
  var isDetached = requireArrayBufferIsDetached();
  var ArrayBufferPrototype = ArrayBuffer.prototype;
  if (DESCRIPTORS && !("detached" in ArrayBufferPrototype)) {
    defineBuiltInAccessor2(ArrayBufferPrototype, "detached", {
      configurable: true,
      get: function detached() {
        return isDetached(this);
      }
    });
  }
  return es_arrayBuffer_detached;
}
requireEs_arrayBuffer_detached();
var es_arrayBuffer_transfer = {};
var toIndex;
var hasRequiredToIndex;
function requireToIndex() {
  if (hasRequiredToIndex) return toIndex;
  hasRequiredToIndex = 1;
  var toIntegerOrInfinity2 = requireToIntegerOrInfinity();
  var toLength2 = requireToLength();
  var $RangeError = RangeError;
  toIndex = function(it) {
    if (it === void 0) return 0;
    var number = toIntegerOrInfinity2(it);
    var length = toLength2(number);
    if (number !== length) throw new $RangeError("Wrong length or index");
    return length;
  };
  return toIndex;
}
var arrayBufferNotDetached;
var hasRequiredArrayBufferNotDetached;
function requireArrayBufferNotDetached() {
  if (hasRequiredArrayBufferNotDetached) return arrayBufferNotDetached;
  hasRequiredArrayBufferNotDetached = 1;
  var isDetached = requireArrayBufferIsDetached();
  var $TypeError = TypeError;
  arrayBufferNotDetached = function(it) {
    if (isDetached(it)) throw new $TypeError("ArrayBuffer is detached");
    return it;
  };
  return arrayBufferNotDetached;
}
var environment;
var hasRequiredEnvironment;
function requireEnvironment() {
  if (hasRequiredEnvironment) return environment;
  hasRequiredEnvironment = 1;
  var globalThis2 = requireGlobalThis();
  var userAgent = requireEnvironmentUserAgent();
  var classof2 = requireClassofRaw();
  var userAgentStartsWith = function(string) {
    return userAgent.slice(0, string.length) === string;
  };
  environment = (function() {
    if (userAgentStartsWith("Bun/")) return "BUN";
    if (userAgentStartsWith("Cloudflare-Workers")) return "CLOUDFLARE";
    if (userAgentStartsWith("Deno/")) return "DENO";
    if (userAgentStartsWith("Node.js/")) return "NODE";
    if (globalThis2.Bun && typeof Bun.version == "string") return "BUN";
    if (globalThis2.Deno && typeof Deno.version == "object") return "DENO";
    if (classof2(globalThis2.process) === "process") return "NODE";
    if (globalThis2.window && globalThis2.document) return "BROWSER";
    return "REST";
  })();
  return environment;
}
var environmentIsNode;
var hasRequiredEnvironmentIsNode;
function requireEnvironmentIsNode() {
  if (hasRequiredEnvironmentIsNode) return environmentIsNode;
  hasRequiredEnvironmentIsNode = 1;
  var ENVIRONMENT = requireEnvironment();
  environmentIsNode = ENVIRONMENT === "NODE";
  return environmentIsNode;
}
var getBuiltInNodeModule;
var hasRequiredGetBuiltInNodeModule;
function requireGetBuiltInNodeModule() {
  if (hasRequiredGetBuiltInNodeModule) return getBuiltInNodeModule;
  hasRequiredGetBuiltInNodeModule = 1;
  var globalThis2 = requireGlobalThis();
  var IS_NODE = requireEnvironmentIsNode();
  getBuiltInNodeModule = function(name) {
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
  return getBuiltInNodeModule;
}
var structuredCloneProperTransfer;
var hasRequiredStructuredCloneProperTransfer;
function requireStructuredCloneProperTransfer() {
  if (hasRequiredStructuredCloneProperTransfer) return structuredCloneProperTransfer;
  hasRequiredStructuredCloneProperTransfer = 1;
  var globalThis2 = requireGlobalThis();
  var fails2 = requireFails();
  var V8 = requireEnvironmentV8Version();
  var ENVIRONMENT = requireEnvironment();
  var structuredClone = globalThis2.structuredClone;
  structuredCloneProperTransfer = !!structuredClone && !fails2(function() {
    if (ENVIRONMENT === "DENO" && V8 > 92 || ENVIRONMENT === "NODE" && V8 > 94 || ENVIRONMENT === "BROWSER" && V8 > 97) return false;
    var buffer = new ArrayBuffer(8);
    var clone = structuredClone(buffer, {
      transfer: [buffer]
    });
    return buffer.byteLength !== 0 || clone.byteLength !== 8;
  });
  return structuredCloneProperTransfer;
}
var detachTransferable;
var hasRequiredDetachTransferable;
function requireDetachTransferable() {
  if (hasRequiredDetachTransferable) return detachTransferable;
  hasRequiredDetachTransferable = 1;
  var globalThis2 = requireGlobalThis();
  var getBuiltInNodeModule2 = requireGetBuiltInNodeModule();
  var PROPER_STRUCTURED_CLONE_TRANSFER = requireStructuredCloneProperTransfer();
  var structuredClone = globalThis2.structuredClone;
  var $ArrayBuffer = globalThis2.ArrayBuffer;
  var $MessageChannel = globalThis2.MessageChannel;
  var detach = false;
  var WorkerThreads, channel, buffer, $detach;
  if (PROPER_STRUCTURED_CLONE_TRANSFER) {
    detach = function(transferable) {
      structuredClone(transferable, {
        transfer: [transferable]
      });
    };
  } else if ($ArrayBuffer) try {
    if (!$MessageChannel) {
      WorkerThreads = getBuiltInNodeModule2("worker_threads");
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
  detachTransferable = detach;
  return detachTransferable;
}
var arrayBufferTransfer;
var hasRequiredArrayBufferTransfer;
function requireArrayBufferTransfer() {
  if (hasRequiredArrayBufferTransfer) return arrayBufferTransfer;
  hasRequiredArrayBufferTransfer = 1;
  var globalThis2 = requireGlobalThis();
  var uncurryThis = requireFunctionUncurryThis();
  var uncurryThisAccessor = requireFunctionUncurryThisAccessor();
  var toIndex2 = requireToIndex();
  var notDetached = requireArrayBufferNotDetached();
  var arrayBufferByteLength2 = requireArrayBufferByteLength();
  var detachTransferable2 = requireDetachTransferable();
  var PROPER_STRUCTURED_CLONE_TRANSFER = requireStructuredCloneProperTransfer();
  var structuredClone = globalThis2.structuredClone;
  var ArrayBuffer2 = globalThis2.ArrayBuffer;
  var DataView2 = globalThis2.DataView;
  var min = Math.min;
  var ArrayBufferPrototype = ArrayBuffer2.prototype;
  var DataViewPrototype = DataView2.prototype;
  var slice = uncurryThis(ArrayBufferPrototype.slice);
  var isResizable = uncurryThisAccessor(ArrayBufferPrototype, "resizable", "get");
  var maxByteLength = uncurryThisAccessor(ArrayBufferPrototype, "maxByteLength", "get");
  var getInt8 = uncurryThis(DataViewPrototype.getInt8);
  var setInt8 = uncurryThis(DataViewPrototype.setInt8);
  arrayBufferTransfer = (PROPER_STRUCTURED_CLONE_TRANSFER || detachTransferable2) && function(arrayBuffer, newLength, preserveResizability) {
    var byteLength = arrayBufferByteLength2(arrayBuffer);
    var newByteLength = newLength === void 0 ? byteLength : toIndex2(newLength);
    var fixedLength = !isResizable || !isResizable(arrayBuffer);
    var newBuffer;
    notDetached(arrayBuffer);
    if (PROPER_STRUCTURED_CLONE_TRANSFER) {
      arrayBuffer = structuredClone(arrayBuffer, {
        transfer: [arrayBuffer]
      });
      if (byteLength === newByteLength && (preserveResizability || fixedLength)) return arrayBuffer;
    }
    if (byteLength >= newByteLength && (!preserveResizability || fixedLength)) {
      newBuffer = slice(arrayBuffer, 0, newByteLength);
    } else {
      var options = preserveResizability && !fixedLength && maxByteLength ? {
        maxByteLength: maxByteLength(arrayBuffer)
      } : void 0;
      newBuffer = new ArrayBuffer2(newByteLength, options);
      var a = new DataView2(arrayBuffer);
      var b = new DataView2(newBuffer);
      var copyLength = min(newByteLength, byteLength);
      for (var i = 0; i < copyLength; i++) setInt8(b, i, getInt8(a, i));
    }
    if (!PROPER_STRUCTURED_CLONE_TRANSFER) detachTransferable2(arrayBuffer);
    return newBuffer;
  };
  return arrayBufferTransfer;
}
var hasRequiredEs_arrayBuffer_transfer;
function requireEs_arrayBuffer_transfer() {
  if (hasRequiredEs_arrayBuffer_transfer) return es_arrayBuffer_transfer;
  hasRequiredEs_arrayBuffer_transfer = 1;
  var $ = require_export();
  var $transfer = requireArrayBufferTransfer();
  if ($transfer) $({
    target: "ArrayBuffer",
    proto: true
  }, {
    transfer: function transfer() {
      return $transfer(this, arguments.length ? arguments[0] : void 0, true);
    }
  });
  return es_arrayBuffer_transfer;
}
requireEs_arrayBuffer_transfer();
var es_arrayBuffer_transferToFixedLength = {};
var hasRequiredEs_arrayBuffer_transferToFixedLength;
function requireEs_arrayBuffer_transferToFixedLength() {
  if (hasRequiredEs_arrayBuffer_transferToFixedLength) return es_arrayBuffer_transferToFixedLength;
  hasRequiredEs_arrayBuffer_transferToFixedLength = 1;
  var $ = require_export();
  var $transfer = requireArrayBufferTransfer();
  if ($transfer) $({
    target: "ArrayBuffer",
    proto: true
  }, {
    transferToFixedLength: function transferToFixedLength() {
      return $transfer(this, arguments.length ? arguments[0] : void 0, false);
    }
  });
  return es_arrayBuffer_transferToFixedLength;
}
requireEs_arrayBuffer_transferToFixedLength();
var es_iterator_reduce = {};
var functionApply;
var hasRequiredFunctionApply;
function requireFunctionApply() {
  if (hasRequiredFunctionApply) return functionApply;
  hasRequiredFunctionApply = 1;
  var NATIVE_BIND = requireFunctionBindNative();
  var FunctionPrototype = Function.prototype;
  var apply = FunctionPrototype.apply;
  var call = FunctionPrototype.call;
  functionApply = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
  });
  return functionApply;
}
var hasRequiredEs_iterator_reduce;
function requireEs_iterator_reduce() {
  if (hasRequiredEs_iterator_reduce) return es_iterator_reduce;
  hasRequiredEs_iterator_reduce = 1;
  var $ = require_export();
  var iterate2 = requireIterate();
  var aCallable2 = requireACallable();
  var anObject2 = requireAnObject();
  var getIteratorDirect2 = requireGetIteratorDirect();
  var iteratorClose2 = requireIteratorClose();
  var iteratorHelperWithoutClosingOnEarlyError2 = requireIteratorHelperWithoutClosingOnEarlyError();
  var apply = requireFunctionApply();
  var fails2 = requireFails();
  var $TypeError = TypeError;
  var FAILS_ON_INITIAL_UNDEFINED = fails2(function() {
    [].keys().reduce(function() {
    }, void 0);
  });
  var reduceWithoutClosingOnEarlyError = !FAILS_ON_INITIAL_UNDEFINED && iteratorHelperWithoutClosingOnEarlyError2("reduce", $TypeError);
  $({
    target: "Iterator",
    proto: true,
    real: true,
    forced: FAILS_ON_INITIAL_UNDEFINED || reduceWithoutClosingOnEarlyError
  }, {
    reduce: function reduce(reducer) {
      anObject2(this);
      try {
        aCallable2(reducer);
      } catch (error) {
        iteratorClose2(this, "throw", error);
      }
      var noInitial = arguments.length < 2;
      var accumulator = noInitial ? void 0 : arguments[1];
      if (reduceWithoutClosingOnEarlyError) {
        return apply(reduceWithoutClosingOnEarlyError, this, noInitial ? [reducer] : [reducer, accumulator]);
      }
      var record = getIteratorDirect2(this);
      var counter = 0;
      iterate2(record, function(value) {
        if (noInitial) {
          noInitial = false;
          accumulator = value;
        } else {
          accumulator = reducer(accumulator, value, counter);
        }
        counter++;
      }, {
        IS_RECORD: true
      });
      if (noInitial) throw new $TypeError("Reduce of empty iterator with no initial value");
      return accumulator;
    }
  });
  return es_iterator_reduce;
}
requireEs_iterator_reduce();
var es_typedArray_toReversed = {};
var isPossiblePrototype;
var hasRequiredIsPossiblePrototype;
function requireIsPossiblePrototype() {
  if (hasRequiredIsPossiblePrototype) return isPossiblePrototype;
  hasRequiredIsPossiblePrototype = 1;
  var isObject22 = requireIsObject();
  isPossiblePrototype = function(argument) {
    return isObject22(argument) || argument === null;
  };
  return isPossiblePrototype;
}
var aPossiblePrototype;
var hasRequiredAPossiblePrototype;
function requireAPossiblePrototype() {
  if (hasRequiredAPossiblePrototype) return aPossiblePrototype;
  hasRequiredAPossiblePrototype = 1;
  var isPossiblePrototype2 = requireIsPossiblePrototype();
  var $String = String;
  var $TypeError = TypeError;
  aPossiblePrototype = function(argument) {
    if (isPossiblePrototype2(argument)) return argument;
    throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
  };
  return aPossiblePrototype;
}
var objectSetPrototypeOf;
var hasRequiredObjectSetPrototypeOf;
function requireObjectSetPrototypeOf() {
  if (hasRequiredObjectSetPrototypeOf) return objectSetPrototypeOf;
  hasRequiredObjectSetPrototypeOf = 1;
  var uncurryThisAccessor = requireFunctionUncurryThisAccessor();
  var isObject22 = requireIsObject();
  var requireObjectCoercible2 = requireRequireObjectCoercible();
  var aPossiblePrototype2 = requireAPossiblePrototype();
  objectSetPrototypeOf = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
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
      requireObjectCoercible2(O);
      aPossiblePrototype2(proto);
      if (!isObject22(O)) return O;
      if (CORRECT_SETTER) setter(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  })() : void 0);
  return objectSetPrototypeOf;
}
var arrayBufferViewCore;
var hasRequiredArrayBufferViewCore;
function requireArrayBufferViewCore() {
  if (hasRequiredArrayBufferViewCore) return arrayBufferViewCore;
  hasRequiredArrayBufferViewCore = 1;
  var NATIVE_ARRAY_BUFFER = requireArrayBufferBasicDetection();
  var DESCRIPTORS = requireDescriptors();
  var globalThis2 = requireGlobalThis();
  var isCallable2 = requireIsCallable();
  var isObject22 = requireIsObject();
  var hasOwn2 = requireHasOwnProperty();
  var classof2 = requireClassof();
  var tryToString2 = requireTryToString();
  var createNonEnumerableProperty2 = requireCreateNonEnumerableProperty();
  var defineBuiltIn2 = requireDefineBuiltIn();
  var defineBuiltInAccessor2 = requireDefineBuiltInAccessor();
  var isPrototypeOf = requireObjectIsPrototypeOf();
  var getPrototypeOf = requireObjectGetPrototypeOf();
  var setPrototypeOf = requireObjectSetPrototypeOf();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var uid2 = requireUid();
  var InternalStateModule = requireInternalState();
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
  var TO_STRING_TAG = wellKnownSymbol2("toStringTag");
  var TYPED_ARRAY_TAG = uid2("TYPED_ARRAY_TAG");
  var TYPED_ARRAY_CONSTRUCTOR = "TypedArrayConstructor";
  var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof2(globalThis2.opera) !== "Opera";
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
    if (!isObject22(it)) return false;
    var klass = classof2(it);
    return klass === "DataView" || hasOwn2(TypedArrayConstructorsList, klass) || hasOwn2(BigIntArrayConstructorsList, klass);
  };
  var getTypedArrayConstructor = function(it) {
    var proto = getPrototypeOf(it);
    if (!isObject22(proto)) return;
    var state = getInternalState(proto);
    return state && hasOwn2(state, TYPED_ARRAY_CONSTRUCTOR) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
  };
  var isTypedArray = function(it) {
    if (!isObject22(it)) return false;
    var klass = classof2(it);
    return hasOwn2(TypedArrayConstructorsList, klass) || hasOwn2(BigIntArrayConstructorsList, klass);
  };
  var aTypedArray = function(it) {
    if (isTypedArray(it)) return it;
    throw new TypeError2("Target is not a typed array");
  };
  var aTypedArrayConstructor = function(C) {
    if (isCallable2(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;
    throw new TypeError2(tryToString2(C) + " is not a typed array constructor");
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
    if (!TypedArrayPrototype[KEY] || forced) {
      defineBuiltIn2(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
    }
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
      if (!TypedArray[KEY] || forced) {
        try {
          return defineBuiltIn2(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
        } catch (error) {
        }
      } else return;
    }
    for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = globalThis2[ARRAY];
      if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
        defineBuiltIn2(TypedArrayConstructor, KEY, property);
      }
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
  if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable2(TypedArray) || TypedArray === Function.prototype) {
    TypedArray = function TypedArray2() {
      throw new TypeError2("Incorrect invocation");
    };
    if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
      if (globalThis2[NAME]) setPrototypeOf(globalThis2[NAME], TypedArray);
    }
  }
  if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
    TypedArrayPrototype = TypedArray.prototype;
    if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
      if (globalThis2[NAME]) setPrototypeOf(globalThis2[NAME].prototype, TypedArrayPrototype);
    }
  }
  if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
    setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
  }
  if (DESCRIPTORS && !hasOwn2(TypedArrayPrototype, TO_STRING_TAG)) {
    TYPED_ARRAY_TAG_REQUIRED = true;
    defineBuiltInAccessor2(TypedArrayPrototype, TO_STRING_TAG, {
      configurable: true,
      get: function() {
        return isObject22(this) ? this[TYPED_ARRAY_TAG] : void 0;
      }
    });
    for (NAME in TypedArrayConstructorsList) if (globalThis2[NAME]) {
      createNonEnumerableProperty2(globalThis2[NAME], TYPED_ARRAY_TAG, NAME);
    }
  }
  arrayBufferViewCore = {
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
  return arrayBufferViewCore;
}
var hasRequiredEs_typedArray_toReversed;
function requireEs_typedArray_toReversed() {
  if (hasRequiredEs_typedArray_toReversed) return es_typedArray_toReversed;
  hasRequiredEs_typedArray_toReversed = 1;
  var lengthOfArrayLike2 = requireLengthOfArrayLike();
  var ArrayBufferViewCore = requireArrayBufferViewCore();
  var aTypedArray = ArrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
  var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
  exportTypedArrayMethod("toReversed", function toReversed() {
    var O = aTypedArray(this);
    var len = lengthOfArrayLike2(O);
    var A = new (getTypedArrayConstructor(O))(len);
    var k = 0;
    for (; k < len; k++) A[k] = O[len - k - 1];
    return A;
  });
  return es_typedArray_toReversed;
}
requireEs_typedArray_toReversed();
var es_typedArray_toSorted = {};
var arrayFromConstructorAndList;
var hasRequiredArrayFromConstructorAndList;
function requireArrayFromConstructorAndList() {
  if (hasRequiredArrayFromConstructorAndList) return arrayFromConstructorAndList;
  hasRequiredArrayFromConstructorAndList = 1;
  var lengthOfArrayLike2 = requireLengthOfArrayLike();
  arrayFromConstructorAndList = function(Constructor, list, $length) {
    var index = 0;
    var length = arguments.length > 2 ? $length : lengthOfArrayLike2(list);
    var result = new Constructor(length);
    while (length > index) result[index] = list[index++];
    return result;
  };
  return arrayFromConstructorAndList;
}
var hasRequiredEs_typedArray_toSorted;
function requireEs_typedArray_toSorted() {
  if (hasRequiredEs_typedArray_toSorted) return es_typedArray_toSorted;
  hasRequiredEs_typedArray_toSorted = 1;
  var ArrayBufferViewCore = requireArrayBufferViewCore();
  var uncurryThis = requireFunctionUncurryThis();
  var aCallable2 = requireACallable();
  var arrayFromConstructorAndList2 = requireArrayFromConstructorAndList();
  var aTypedArray = ArrayBufferViewCore.aTypedArray;
  var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
  var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
  var sort = uncurryThis(ArrayBufferViewCore.TypedArrayPrototype.sort);
  exportTypedArrayMethod("toSorted", function toSorted(compareFn) {
    if (compareFn !== void 0) aCallable2(compareFn);
    var O = aTypedArray(this);
    var A = arrayFromConstructorAndList2(getTypedArrayConstructor(O), O);
    return sort(A, compareFn);
  });
  return es_typedArray_toSorted;
}
requireEs_typedArray_toSorted();
var es_typedArray_with = {};
var isBigIntArray;
var hasRequiredIsBigIntArray;
function requireIsBigIntArray() {
  if (hasRequiredIsBigIntArray) return isBigIntArray;
  hasRequiredIsBigIntArray = 1;
  var classof2 = requireClassof();
  isBigIntArray = function(it) {
    var klass = classof2(it);
    return klass === "BigInt64Array" || klass === "BigUint64Array";
  };
  return isBigIntArray;
}
var toBigInt;
var hasRequiredToBigInt;
function requireToBigInt() {
  if (hasRequiredToBigInt) return toBigInt;
  hasRequiredToBigInt = 1;
  var toPrimitive2 = requireToPrimitive();
  var $TypeError = TypeError;
  toBigInt = function(argument) {
    var prim = toPrimitive2(argument, "number");
    if (typeof prim == "number") throw new $TypeError("Can't convert number to bigint");
    return BigInt(prim);
  };
  return toBigInt;
}
var hasRequiredEs_typedArray_with;
function requireEs_typedArray_with() {
  if (hasRequiredEs_typedArray_with) return es_typedArray_with;
  hasRequiredEs_typedArray_with = 1;
  var ArrayBufferViewCore = requireArrayBufferViewCore();
  var isBigIntArray2 = requireIsBigIntArray();
  var lengthOfArrayLike2 = requireLengthOfArrayLike();
  var toIntegerOrInfinity2 = requireToIntegerOrInfinity();
  var toBigInt2 = requireToBigInt();
  var aTypedArray = ArrayBufferViewCore.aTypedArray;
  var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
  var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
  var $RangeError = RangeError;
  var PROPER_ORDER = (function() {
    try {
      new Int8Array(1)["with"](2, {
        valueOf: function() {
          throw 8;
        }
      });
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
  exportTypedArrayMethod("with", {
    "with": function(index, value) {
      var O = aTypedArray(this);
      var len = lengthOfArrayLike2(O);
      var relativeIndex = toIntegerOrInfinity2(index);
      var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
      var numericValue = isBigIntArray2(O) ? toBigInt2(value) : +value;
      if (actualIndex >= len || actualIndex < 0) throw new $RangeError("Incorrect index");
      var A = new (getTypedArrayConstructor(O))(len);
      var k = 0;
      for (; k < len; k++) A[k] = k === actualIndex ? numericValue : O[k];
      return A;
    }
  }["with"], !PROPER_ORDER || THROW_ON_NEGATIVE_FRACTIONAL_INDEX);
  return es_typedArray_with;
}
requireEs_typedArray_with();
var es_uint8Array_setFromBase64 = {};
var anObjectOrUndefined;
var hasRequiredAnObjectOrUndefined;
function requireAnObjectOrUndefined() {
  if (hasRequiredAnObjectOrUndefined) return anObjectOrUndefined;
  hasRequiredAnObjectOrUndefined = 1;
  var isObject22 = requireIsObject();
  var $String = String;
  var $TypeError = TypeError;
  anObjectOrUndefined = function(argument) {
    if (argument === void 0 || isObject22(argument)) return argument;
    throw new $TypeError($String(argument) + " is not an object or undefined");
  };
  return anObjectOrUndefined;
}
var aString;
var hasRequiredAString;
function requireAString() {
  if (hasRequiredAString) return aString;
  hasRequiredAString = 1;
  var $TypeError = TypeError;
  aString = function(argument) {
    if (typeof argument == "string") return argument;
    throw new $TypeError("Argument is not a string");
  };
  return aString;
}
var base64Map;
var hasRequiredBase64Map;
function requireBase64Map() {
  if (hasRequiredBase64Map) return base64Map;
  hasRequiredBase64Map = 1;
  var commonAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var base64Alphabet = commonAlphabet + "+/";
  var base64UrlAlphabet = commonAlphabet + "-_";
  var inverse = function(characters) {
    var result = {};
    var index = 0;
    for (; index < 64; index++) result[characters.charAt(index)] = index;
    return result;
  };
  base64Map = {
    i2c: base64Alphabet,
    c2i: inverse(base64Alphabet),
    i2cUrl: base64UrlAlphabet,
    c2iUrl: inverse(base64UrlAlphabet)
  };
  return base64Map;
}
var getAlphabetOption;
var hasRequiredGetAlphabetOption;
function requireGetAlphabetOption() {
  if (hasRequiredGetAlphabetOption) return getAlphabetOption;
  hasRequiredGetAlphabetOption = 1;
  var $TypeError = TypeError;
  getAlphabetOption = function(options) {
    var alphabet = options && options.alphabet;
    if (alphabet === void 0 || alphabet === "base64" || alphabet === "base64url") return alphabet || "base64";
    throw new $TypeError("Incorrect `alphabet` option");
  };
  return getAlphabetOption;
}
var uint8FromBase64;
var hasRequiredUint8FromBase64;
function requireUint8FromBase64() {
  if (hasRequiredUint8FromBase64) return uint8FromBase64;
  hasRequiredUint8FromBase64 = 1;
  var globalThis2 = requireGlobalThis();
  var uncurryThis = requireFunctionUncurryThis();
  var anObjectOrUndefined2 = requireAnObjectOrUndefined();
  var aString2 = requireAString();
  var hasOwn2 = requireHasOwnProperty();
  var base64Map2 = requireBase64Map();
  var getAlphabetOption2 = requireGetAlphabetOption();
  var notDetached = requireArrayBufferNotDetached();
  var base64Alphabet = base64Map2.c2i;
  var base64UrlAlphabet = base64Map2.c2iUrl;
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
    if (chunkLength < 4) {
      chunk += chunkLength === 2 ? "AA" : "A";
    }
    var triplet = (alphabet[at(chunk, 0)] << 18) + (alphabet[at(chunk, 1)] << 12) + (alphabet[at(chunk, 2)] << 6) + alphabet[at(chunk, 3)];
    var chunkBytes = [triplet >> 16 & 255, triplet >> 8 & 255, triplet & 255];
    if (chunkLength === 2) {
      if (throwOnExtraBits && chunkBytes[1] !== 0) {
        throw new SyntaxError("Extra bits");
      }
      return [chunkBytes[0]];
    }
    if (chunkLength === 3) {
      if (throwOnExtraBits && chunkBytes[2] !== 0) {
        throw new SyntaxError("Extra bits");
      }
      return [chunkBytes[0], chunkBytes[1]];
    }
    return chunkBytes;
  };
  var writeBytes = function(bytes, elements, written) {
    var elementsLength = elements.length;
    for (var index = 0; index < elementsLength; index++) {
      bytes[written + index] = elements[index];
    }
    return written + elementsLength;
  };
  uint8FromBase64 = function(string, options, into, maxLength) {
    aString2(string);
    anObjectOrUndefined2(options);
    var alphabet = getAlphabetOption2(options) === "base64" ? base64Alphabet : base64UrlAlphabet;
    var lastChunkHandling = options ? options.lastChunkHandling : void 0;
    if (lastChunkHandling === void 0) lastChunkHandling = "loose";
    if (lastChunkHandling !== "loose" && lastChunkHandling !== "strict" && lastChunkHandling !== "stop-before-partial") {
      throw new TypeError2("Incorrect `lastChunkHandling` option");
    }
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
          if (lastChunkHandling === "stop-before-partial") {
            break;
          }
          if (lastChunkHandling === "loose") {
            if (chunk.length === 1) {
              throw new SyntaxError("Malformed padding: exactly one additional character");
            }
            written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, false), written);
          } else {
            throw new SyntaxError("Missing padding");
          }
        }
        read = stringLength;
        break;
      }
      var chr = at(string, index);
      ++index;
      if (chr === "=") {
        if (chunk.length < 2) {
          throw new SyntaxError("Padding is too early");
        }
        index = skipAsciiWhitespace(string, index);
        if (chunk.length === 2) {
          if (index === stringLength) {
            if (lastChunkHandling === "stop-before-partial") {
              break;
            }
            throw new SyntaxError("Malformed padding: only one =");
          }
          if (at(string, index) === "=") {
            ++index;
            index = skipAsciiWhitespace(string, index);
          }
        }
        if (index < stringLength) {
          throw new SyntaxError("Unexpected character after padding");
        }
        written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, lastChunkHandling === "strict"), written);
        read = stringLength;
        break;
      }
      if (!hasOwn2(alphabet, chr)) {
        throw new SyntaxError("Unexpected character");
      }
      var remainingBytes = maxLength - written;
      if (remainingBytes === 1 && chunk.length === 2 || remainingBytes === 2 && chunk.length === 3) {
        break;
      }
      chunk += chr;
      if (chunk.length === 4) {
        written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, false), written);
        chunk = "";
        read = index;
        if (written === maxLength) {
          break;
        }
      }
    }
    return {
      bytes,
      read,
      written
    };
  };
  return uint8FromBase64;
}
var anUint8Array;
var hasRequiredAnUint8Array;
function requireAnUint8Array() {
  if (hasRequiredAnUint8Array) return anUint8Array;
  hasRequiredAnUint8Array = 1;
  var classof2 = requireClassof();
  var $TypeError = TypeError;
  anUint8Array = function(argument) {
    if (classof2(argument) === "Uint8Array") return argument;
    throw new $TypeError("Argument is not an Uint8Array");
  };
  return anUint8Array;
}
var hasRequiredEs_uint8Array_setFromBase64;
function requireEs_uint8Array_setFromBase64() {
  if (hasRequiredEs_uint8Array_setFromBase64) return es_uint8Array_setFromBase64;
  hasRequiredEs_uint8Array_setFromBase64 = 1;
  var $ = require_export();
  var globalThis2 = requireGlobalThis();
  var $fromBase64 = requireUint8FromBase64();
  var anUint8Array2 = requireAnUint8Array();
  var Uint8Array2 = globalThis2.Uint8Array;
  var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS = !Uint8Array2 || !Uint8Array2.prototype.setFromBase64 || !(function() {
    var target = new Uint8Array2([255, 255, 255, 255, 255]);
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
  }, {
    setFromBase64: function setFromBase64(string) {
      anUint8Array2(this);
      var result = $fromBase64(string, arguments.length > 1 ? arguments[1] : void 0, this, this.length);
      return {
        read: result.read,
        written: result.written
      };
    }
  });
  return es_uint8Array_setFromBase64;
}
requireEs_uint8Array_setFromBase64();
var es_uint8Array_setFromHex = {};
var uint8FromHex;
var hasRequiredUint8FromHex;
function requireUint8FromHex() {
  if (hasRequiredUint8FromHex) return uint8FromHex;
  hasRequiredUint8FromHex = 1;
  var globalThis2 = requireGlobalThis();
  var uncurryThis = requireFunctionUncurryThis();
  var Uint8Array2 = globalThis2.Uint8Array;
  var SyntaxError = globalThis2.SyntaxError;
  var parseInt2 = globalThis2.parseInt;
  var min = Math.min;
  var NOT_HEX = /[^\da-f]/i;
  var exec = uncurryThis(NOT_HEX.exec);
  var stringSlice = uncurryThis("".slice);
  uint8FromHex = function(string, into) {
    var stringLength = string.length;
    if (stringLength % 2 !== 0) throw new SyntaxError("String should be an even number of characters");
    var maxLength = into ? min(into.length, stringLength / 2) : stringLength / 2;
    var bytes = into || new Uint8Array2(maxLength);
    var read = 0;
    var written = 0;
    while (written < maxLength) {
      var hexits = stringSlice(string, read, read += 2);
      if (exec(NOT_HEX, hexits)) throw new SyntaxError("String should only contain hex characters");
      bytes[written++] = parseInt2(hexits, 16);
    }
    return {
      bytes,
      read
    };
  };
  return uint8FromHex;
}
var hasRequiredEs_uint8Array_setFromHex;
function requireEs_uint8Array_setFromHex() {
  if (hasRequiredEs_uint8Array_setFromHex) return es_uint8Array_setFromHex;
  hasRequiredEs_uint8Array_setFromHex = 1;
  var $ = require_export();
  var globalThis2 = requireGlobalThis();
  var aString2 = requireAString();
  var anUint8Array2 = requireAnUint8Array();
  var notDetached = requireArrayBufferNotDetached();
  var $fromHex = requireUint8FromHex();
  function throwsOnLengthTrackingView() {
    try {
      var rab = new ArrayBuffer(16, {
        maxByteLength: 1024
      });
      new Uint8Array(rab).setFromHex("cafed00d");
    } catch (error) {
      return true;
    }
  }
  if (globalThis2.Uint8Array) $({
    target: "Uint8Array",
    proto: true,
    forced: throwsOnLengthTrackingView()
  }, {
    setFromHex: function setFromHex(string) {
      anUint8Array2(this);
      aString2(string);
      notDetached(this.buffer);
      var read = $fromHex(string, this).read;
      return {
        read,
        written: read / 2
      };
    }
  });
  return es_uint8Array_setFromHex;
}
requireEs_uint8Array_setFromHex();
var es_uint8Array_toBase64 = {};
var hasRequiredEs_uint8Array_toBase64;
function requireEs_uint8Array_toBase64() {
  if (hasRequiredEs_uint8Array_toBase64) return es_uint8Array_toBase64;
  hasRequiredEs_uint8Array_toBase64 = 1;
  var $ = require_export();
  var globalThis2 = requireGlobalThis();
  var uncurryThis = requireFunctionUncurryThis();
  var anObjectOrUndefined2 = requireAnObjectOrUndefined();
  var anUint8Array2 = requireAnUint8Array();
  var notDetached = requireArrayBufferNotDetached();
  var base64Map2 = requireBase64Map();
  var getAlphabetOption2 = requireGetAlphabetOption();
  var base64Alphabet = base64Map2.i2c;
  var base64UrlAlphabet = base64Map2.i2cUrl;
  var charAt = uncurryThis("".charAt);
  var Uint8Array2 = globalThis2.Uint8Array;
  var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS = !Uint8Array2 || !Uint8Array2.prototype.toBase64 || !(function() {
    try {
      var target = new Uint8Array2();
      target.toBase64(null);
    } catch (error) {
      return true;
    }
  })();
  if (Uint8Array2) $({
    target: "Uint8Array",
    proto: true,
    forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS
  }, {
    toBase64: function toBase64() {
      var array = anUint8Array2(this);
      var options = arguments.length ? anObjectOrUndefined2(arguments[0]) : void 0;
      var alphabet = getAlphabetOption2(options) === "base64" ? base64Alphabet : base64UrlAlphabet;
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
    }
  });
  return es_uint8Array_toBase64;
}
requireEs_uint8Array_toBase64();
var es_uint8Array_toHex = {};
var hasRequiredEs_uint8Array_toHex;
function requireEs_uint8Array_toHex() {
  if (hasRequiredEs_uint8Array_toHex) return es_uint8Array_toHex;
  hasRequiredEs_uint8Array_toHex = 1;
  var $ = require_export();
  var globalThis2 = requireGlobalThis();
  var uncurryThis = requireFunctionUncurryThis();
  var anUint8Array2 = requireAnUint8Array();
  var notDetached = requireArrayBufferNotDetached();
  var numberToString = uncurryThis(1.1.toString);
  var Uint8Array2 = globalThis2.Uint8Array;
  var INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS = !Uint8Array2 || !Uint8Array2.prototype.toHex || !(function() {
    try {
      var target = new Uint8Array2([255, 255, 255, 255, 255, 255, 255, 255]);
      return target.toHex() === "ffffffffffffffff";
    } catch (error) {
      return false;
    }
  })();
  if (Uint8Array2) $({
    target: "Uint8Array",
    proto: true,
    forced: INCORRECT_BEHAVIOR_OR_DOESNT_EXISTS
  }, {
    toHex: function toHex() {
      anUint8Array2(this);
      notDetached(this.buffer);
      var result = "";
      for (var i = 0, length = this.length; i < length; i++) {
        var hex = numberToString(this[i], 16);
        result += hex.length === 1 ? "0" + hex : hex;
      }
      return result;
    }
  });
  return es_uint8Array_toHex;
}
requireEs_uint8Array_toHex();
var web_domException_stack = {};
var inheritIfRequired;
var hasRequiredInheritIfRequired;
function requireInheritIfRequired() {
  if (hasRequiredInheritIfRequired) return inheritIfRequired;
  hasRequiredInheritIfRequired = 1;
  var isCallable2 = requireIsCallable();
  var isObject22 = requireIsObject();
  var setPrototypeOf = requireObjectSetPrototypeOf();
  inheritIfRequired = function($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
      // it can work only with native `setPrototypeOf`
      setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      isCallable2(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject22(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype
    ) setPrototypeOf($this, NewTargetPrototype);
    return $this;
  };
  return inheritIfRequired;
}
var toString2;
var hasRequiredToString;
function requireToString() {
  if (hasRequiredToString) return toString2;
  hasRequiredToString = 1;
  var classof2 = requireClassof();
  var $String = String;
  toString2 = function(argument) {
    if (classof2(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return $String(argument);
  };
  return toString2;
}
var normalizeStringArgument;
var hasRequiredNormalizeStringArgument;
function requireNormalizeStringArgument() {
  if (hasRequiredNormalizeStringArgument) return normalizeStringArgument;
  hasRequiredNormalizeStringArgument = 1;
  var toString22 = requireToString();
  normalizeStringArgument = function(argument, $default) {
    return argument === void 0 ? arguments.length < 2 ? "" : $default : toString22(argument);
  };
  return normalizeStringArgument;
}
var domExceptionConstants;
var hasRequiredDomExceptionConstants;
function requireDomExceptionConstants() {
  if (hasRequiredDomExceptionConstants) return domExceptionConstants;
  hasRequiredDomExceptionConstants = 1;
  domExceptionConstants = {
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
  return domExceptionConstants;
}
var errorStackClear;
var hasRequiredErrorStackClear;
function requireErrorStackClear() {
  if (hasRequiredErrorStackClear) return errorStackClear;
  hasRequiredErrorStackClear = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var $Error = Error;
  var replace = uncurryThis("".replace);
  var TEST = (function(arg) {
    return String(new $Error(arg).stack);
  })("zxcasd");
  var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
  var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
  errorStackClear = function(stack, dropEntries) {
    if (IS_V8_OR_CHAKRA_STACK && typeof stack == "string" && !$Error.prepareStackTrace) {
      while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, "");
    }
    return stack;
  };
  return errorStackClear;
}
var hasRequiredWeb_domException_stack;
function requireWeb_domException_stack() {
  if (hasRequiredWeb_domException_stack) return web_domException_stack;
  hasRequiredWeb_domException_stack = 1;
  var $ = require_export();
  var globalThis2 = requireGlobalThis();
  var getBuiltIn2 = requireGetBuiltIn();
  var createPropertyDescriptor2 = requireCreatePropertyDescriptor();
  var defineProperty = requireObjectDefineProperty().f;
  var hasOwn2 = requireHasOwnProperty();
  var anInstance2 = requireAnInstance();
  var inheritIfRequired2 = requireInheritIfRequired();
  var normalizeStringArgument2 = requireNormalizeStringArgument();
  var DOMExceptionConstants = requireDomExceptionConstants();
  var clearErrorStack = requireErrorStackClear();
  var DESCRIPTORS = requireDescriptors();
  var IS_PURE = requireIsPure();
  var DOM_EXCEPTION = "DOMException";
  var Error2 = getBuiltIn2("Error");
  var NativeDOMException = getBuiltIn2(DOM_EXCEPTION);
  var $DOMException = function DOMException() {
    anInstance2(this, DOMExceptionPrototype);
    var argumentsLength = arguments.length;
    var message = normalizeStringArgument2(argumentsLength < 1 ? void 0 : arguments[0]);
    var name = normalizeStringArgument2(argumentsLength < 2 ? void 0 : arguments[1], "Error");
    var that = new NativeDOMException(message, name);
    var error = new Error2(message);
    error.name = DOM_EXCEPTION;
    defineProperty(that, "stack", createPropertyDescriptor2(1, clearErrorStack(error.stack, 1)));
    inheritIfRequired2(that, this, $DOMException);
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
  }, {
    // TODO: fix export logic
    DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
  });
  var PolyfilledDOMException = getBuiltIn2(DOM_EXCEPTION);
  var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
  if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
    if (!IS_PURE) {
      defineProperty(PolyfilledDOMExceptionPrototype, "constructor", createPropertyDescriptor2(1, PolyfilledDOMException));
    }
    for (var key in DOMExceptionConstants) if (hasOwn2(DOMExceptionConstants, key)) {
      var constant = DOMExceptionConstants[key];
      var constantName = constant.s;
      if (!hasOwn2(PolyfilledDOMException, constantName)) {
        defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor2(6, constant.c));
      }
    }
  }
  return web_domException_stack;
}
requireWeb_domException_stack();
var es_iterator_filter = {};
var hasRequiredEs_iterator_filter;
function requireEs_iterator_filter() {
  if (hasRequiredEs_iterator_filter) return es_iterator_filter;
  hasRequiredEs_iterator_filter = 1;
  var $ = require_export();
  var call = requireFunctionCall();
  var aCallable2 = requireACallable();
  var anObject2 = requireAnObject();
  var getIteratorDirect2 = requireGetIteratorDirect();
  var createIteratorProxy = requireIteratorCreateProxy();
  var callWithSafeIterationClosing2 = requireCallWithSafeIterationClosing();
  var IS_PURE = requireIsPure();
  var iteratorClose2 = requireIteratorClose();
  var iteratorHelperThrowsOnInvalidIterator2 = requireIteratorHelperThrowsOnInvalidIterator();
  var iteratorHelperWithoutClosingOnEarlyError2 = requireIteratorHelperWithoutClosingOnEarlyError();
  var FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator2("filter", function() {
  });
  var filterWithoutClosingOnEarlyError = !IS_PURE && !FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError2("filter", TypeError);
  var FORCED = IS_PURE || FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR || filterWithoutClosingOnEarlyError;
  var IteratorProxy = createIteratorProxy(function() {
    var iterator = this.iterator;
    var predicate = this.predicate;
    var next = this.next;
    var result, done, value;
    while (true) {
      result = anObject2(call(next, iterator));
      done = this.done = !!result.done;
      if (done) return;
      value = result.value;
      if (callWithSafeIterationClosing2(iterator, predicate, [value, this.counter++], true)) return value;
    }
  });
  $({
    target: "Iterator",
    proto: true,
    real: true,
    forced: FORCED
  }, {
    filter: function filter(predicate) {
      anObject2(this);
      try {
        aCallable2(predicate);
      } catch (error) {
        iteratorClose2(this, "throw", error);
      }
      if (filterWithoutClosingOnEarlyError) return call(filterWithoutClosingOnEarlyError, this, predicate);
      return new IteratorProxy(getIteratorDirect2(this), {
        predicate
      });
    }
  });
  return es_iterator_filter;
}
requireEs_iterator_filter();
var HOURS_MINUTES_REGEXP = /^(?<hours>\d+)?(:(?<minutes>[0-5]\d))?$/;
var HOURS_MINUTES_WITHOUT_COLON_REGEXP = /^(?<hours>\d{2})(?<minutes>[0-5]\d)$/;
function findMatch(regexps, value) {
  for (const regexp of regexps) {
    const match = value.match(regexp);
    if (match) {
      return match;
    }
  }
  return null;
}
function padInitialZeros(value, maxLength = 2) {
  value = value !== null && value !== void 0 ? value : "";
  return value.padStart(maxLength, "0");
}
function hoursMinutesStringToMinutes(valueString, extraForgiving = false) {
  if (isEmpty(valueString.trim())) {
    return void 0;
  }
  const [hours, minutes] = splitHoursMinutes(valueString, extraForgiving).map((value) => parseInt(value, 10));
  const totalMinutes = hours * 60 + minutes;
  return !isNaN(totalMinutes) ? totalMinutes : void 0;
}
function minutesToHoursMinutesString(value) {
  let valueString = "";
  const safeValue = value !== null && value !== void 0 ? value : NaN;
  if (!isNaN(safeValue)) {
    const {
      hours,
      minutes
    } = minutesToObject(safeValue);
    valueString = [hours, minutes].map((value2) => String(value2).padStart(2, "0")).join(":");
  }
  return stripWhitespace(valueString);
}
function splitHoursMinutes(valueString, extraForgiving = false) {
  const regexps = extraForgiving ? [HOURS_MINUTES_WITHOUT_COLON_REGEXP, HOURS_MINUTES_REGEXP] : [HOURS_MINUTES_REGEXP];
  const match = findMatch(regexps, stripWhitespace(valueString));
  if (!match) {
    return ["", ""];
  }
  const hours = padInitialZeros(match?.groups?.hours);
  const minutes = padInitialZeros(match?.groups?.minutes);
  return [hours, minutes];
}
function minutesToObject(...values) {
  const minutes = values.filter((value) => isSet(value) && !isNaN(value)).reduce((sum, value) => sum + value, 0);
  return {
    hours: Math.floor(minutes / 60),
    minutes: minutes % 60
  };
}
function formatNumberToTime(value) {
  if (typeof value !== "number" || isNaN(value)) {
    return void 0;
  }
  return minutesToHoursMinutesString(value);
}
function parseTimeToNumberUsingConfig(value, extraForgiving) {
  var _hoursMinutesStringTo;
  if (typeof value !== "string") {
    return void 0;
  }
  const parsedValue = (_hoursMinutesStringTo = hoursMinutesStringToMinutes(value, extraForgiving)) !== null && _hoursMinutesStringTo !== void 0 ? _hoursMinutesStringTo : NaN;
  return !isNaN(parsedValue) ? parsedValue : void 0;
}
function parseTimeToNumber(value) {
  return parseTimeToNumberUsingConfig(value, false);
}
var HoursMinutesValidatorUtils = class _HoursMinutesValidatorUtils {
  static validate(value, config, name, compare) {
    if (value === "") {
      return true;
    }
    const limit = config[name];
    if (!isSet(limit)) {
      return false;
    }
    const parseFunction = _HoursMinutesValidatorUtils.getParserFromConfig(config);
    const limitAsNumber = parseFunction(String(config[name]));
    if (!isSet(limitAsNumber)) {
      throw new Error(`config.${name} must be a number`);
    }
    const valueAsNumber = parseFunction(value);
    if (!isSet(valueAsNumber)) {
      return false;
    }
    return compare(valueAsNumber, limitAsNumber);
  }
  static getParserFromConfig(config) {
    if (!isSet(config) || !Array.isArray(config.parser) || /* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- technical debt */
    !isSet(config.parser?.[0]) || typeof config.parser[0] !== "function") {
      return parseTimeToNumber;
    }
    return config.parser[0];
  }
};
var greaterThanTimeValidator = {
  name: "greaterThanTime",
  validation(value, _element, config) {
    return HoursMinutesValidatorUtils.validate(value, config, "limit", (value2, limit) => {
      return value2 > limit;
    });
  }
};
var hoursMinutesValidator = {
  name: "hoursMinutes",
  validation(value, _element, config) {
    return isEmpty(value) || isSet(HoursMinutesValidatorUtils.getParserFromConfig(config)(value));
  }
};
var lessThanTimeValidator = {
  name: "lessThanTime",
  validation(value, _element, config) {
    return HoursMinutesValidatorUtils.validate(value, config, "limit", (value2, limit) => {
      return value2 < limit;
    });
  }
};
var maxTimeValidator = {
  name: "maxTime",
  validation(value, _element, config) {
    return HoursMinutesValidatorUtils.validate(value, config, this.name, (value2, limit) => {
      return value2 <= limit;
    });
  }
};
var minTimeValidator = {
  name: "minTime",
  validation(value, _element, config) {
    return HoursMinutesValidatorUtils.validate(value, config, this.name, (value2, limit) => {
      return value2 >= limit;
    });
  }
};
var validators = [hoursMinutesValidator, greaterThanTimeValidator, lessThanTimeValidator, maxTimeValidator, minTimeValidator];
for (const validator of validators) {
  ValidationService.registerValidator(validator);
}
var _sfc_main = defineComponent2({
  name: "XTimeTextField",
  extends: FTextField,
  mixins: [TranslationMixin],
  props: {
    /* eslint-disable-next-line vue/no-unused-properties -- used by FTextField (extended) */
    formatter: {
      type: Function,
      required: false,
      default: formatNumberToTime
    },
    /* eslint-disable-next-line vue/no-unused-properties -- used by FTextField (extended) */
    parser: {
      type: Function,
      required: false,
      default: parseTimeToNumber
    }
  },
  setup(props) {
    return useTextFieldSetup(props);
  },
  mounted() {
    const inputElement = this.$el.querySelector("input");
    if (!isSet(inputElement)) {
      throw new Error(`Could not find input element in XTimeTextField with id ${String(this.$el.id)}`);
    }
    ValidationService.addValidatorsToElement(inputElement, {
      maxLength: {
        length: 10
      },
      hoursMinutes: {}
    }, true);
    inputElement.setAttribute("inputmode", "numeric");
    ValidationService.validateElement(inputElement);
  }
});

// virtual-entry:virtual:packages/vue-labs/src/components/FTable/examples/FTableInputFieldsExample.vue:FTableInputFieldsExample-c08475.js
import { createElementVNode as _createElementVNode, createVNode as _createVNode, toDisplayString as _toDisplayString, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableInputFieldsExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const columns1 = defineTableColumns([
      {
        type: "text",
        header: "Text",
        key: "text",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:personnummer",
        header: "Pnr",
        key: "pnr",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:bankAccountNumber",
        header: "Kontonr",
        key: "bankAccountNumber",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:bankgiro",
        header: "Bankgiro",
        key: "bankgiro",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:clearingNumber",
        header: "Clearingnr",
        key: "clearingNumber",
        editable: true,
        label() {
          return "Label";
        }
      }
    ]);
    const columns2 = defineTableColumns([
      {
        type: "text:currency",
        header: "Valuta",
        key: "currency",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:date",
        header: "Datum",
        key: "date",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:number",
        decimals: 3,
        header: "Nummer, tre decimaler",
        key: "number",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:percent",
        decimals: 2,
        header: "% tv\xE5 decimaler",
        key: "percent",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:email",
        header: "Epost",
        key: "epost",
        editable: true,
        label() {
          return "Label";
        }
      }
    ]);
    const columns3 = defineTableColumns([
      {
        type: "text:organisationsnummer",
        header: "Orgnr",
        key: "orgnr",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:phoneNumber",
        header: "Tele",
        key: "tele",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:postalCode",
        header: "Postnr",
        key: "postnr",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:plusgiro",
        header: "Plusgiro",
        key: "plusgiro",
        editable: true,
        label() {
          return "Label";
        }
      }
    ]);
    const rows = ref4([
      {
        id: "1",
        text: "aaa",
        pnr: "19120211-9150",
        bankAccountNumber: "12345678",
        bankgiro: "9999996",
        clearingNumber: "5678",
        date: "2023-06-15",
        currency: 3453455,
        number: 5.4,
        percent: 9.987,
        epost: "a.b@example.net",
        orgnr: "9999999999",
        tele: "12345678901234567",
        postnr: "37324",
        plusgiro: "11111119"
      },
      {
        id: "2",
        text: "bbb",
        pnr: "201812312385",
        bankAccountNumber: "0012345678",
        bankgiro: "999-9996",
        clearingNumber: "56781",
        currency: 24233,
        date: "2024-01-20",
        number: 5.5,
        percent: 19.987,
        epost: "a.b@example.net",
        orgnr: "9999999999",
        tele: "12345678901234567",
        postnr: "39359",
        plusgiro: "11111119"
      },
      {
        id: "3",
        text: "ccc",
        pnr: "197006121144",
        bankAccountNumber: "123456",
        bankgiro: "999-9996",
        clearingNumber: "5678-1",
        currency: 234623546,
        date: "2022-11-05",
        number: 5.55,
        percent: 3.1,
        epost: "a.b@example.net",
        orgnr: "9999999999",
        tele: "12345678901234567",
        postnr: "37332",
        plusgiro: "111112"
      }
    ]);
    const sum = computed4(() => {
      return rows.value.reduce((sum2, row) => {
        if (typeof row.number === "number") {
          return sum2 + row.number;
        } else {
          return sum2;
        }
      }, 0);
    });
    function validataAll() {
      ValidationService2.validateAllElements("all");
    }
    const __returned__ = { columns1, columns2, columns3, rows, sum, validataAll, get FTable() {
      return _sfc_main$3;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { id: "all" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createElementVNode("button", {
        type: "button",
        class: "button button--secondary",
        onClick: $setup.validataAll
      }, " Interagerbart element f\xF6re "),
      _createElementVNode("div", _hoisted_1, [
        _createVNode($setup["FTable"], {
          rows: $setup.rows,
          columns: $setup.columns1,
          "key-attribute": "id",
          striped: ""
        }, null, 8, ["rows", "columns"]),
        _createVNode($setup["FTable"], {
          rows: $setup.rows,
          columns: $setup.columns2,
          "key-attribute": "id",
          striped: ""
        }, null, 8, ["rows", "columns"]),
        _createVNode($setup["FTable"], {
          rows: $setup.rows,
          columns: $setup.columns3,
          "key-attribute": "id",
          striped: ""
        }, null, 8, ["rows", "columns"])
      ]),
      _createElementVNode(
        "pre",
        null,
        "Summa: " + _toDisplayString({ sum: $setup.sum }),
        1
        /* TEXT */
      ),
      _createElementVNode(
        "h3",
        null,
        "Rows (" + _toDisplayString($setup.rows.length) + " items):",
        1
        /* TEXT */
      ),
      _createElementVNode(
        "pre",
        null,
        _toDisplayString($setup.rows),
        1
        /* TEXT */
      ),
      _createElementVNode("button", {
        type: "button",
        class: "button button--secondary",
        onClick: $setup.validataAll
      }, " Interagerbart element efter ")
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-c08475"
});
export {
  render
};
