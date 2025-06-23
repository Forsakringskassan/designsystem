// packages/vue/dist/esm/index.esm.js
import { defineComponent, computed, createElementBlock, openBlock, normalizeClass, renderSlot, mergeProps, createTextVNode, createElementVNode, createApp, resolveComponent, createCommentVNode, withKeys, createVNode, toDisplayString, createBlock, withCtx, Fragment, renderList, withModifiers, isVNode, Comment, getCurrentInstance, resolveDynamicComponent, capitalize, onMounted, toValue, onUnmounted, useSlots, ref, normalizeProps, guardReactiveProps, unref, Transition, Teleport, normalizeStyle, useTemplateRef, watchEffect, watch, nextTick, withDirectives, vShow, readonly, inject, toRef, provide, createSlots, vModelSelect, vModelDynamic, toHandlers, shallowRef, getCurrentScope, onScopeDispose, hasInjectionContext, defineCustomElement, effectScope, onUpdated, toRefs } from "vue";
import { TranslationService, isSet, configLogic, focus as focus$1, ElementIdService, findTabbableElements, popFocus, pushFocus, scrollTo, documentOrderComparator, ValidationService, availableValidators, isValidatableHTMLElement, parsePostalCode, parsePlusgiro, parsePersonnummer, parseOrganisationsnummer, formatNumber as formatNumber$1, parseDate, parseBankgiro, alertScreenReader, debounce, handleTab, isEmpty, deepClone, parseNumber, parseBankAccountNumber, parseClearingNumber, formatPersonnummer as formatPersonnummer$1, formatPostalCode, parsePercent, formatPercent, isInvalidDatesConfig, isInvalidWeekdaysConfig, waitForScreenReader, focusFirst, removeFocusListener, restoreFocus, saveFocus, addFocusListener, DomUtils } from "@fkui/logic";
import { FDate, DateFormat, groupByWeek, getWeekdayNamings } from "@fkui/date";
var statuses = ["default", "warning", "error", "success", "info"];
var _sfc_main$1m = /* @__PURE__ */ defineComponent({
  __name: "FBadge",
  props: {
    /**
     * The status of the badge, can be either 'default', 'warning', 'error', 'success' or 'info'.
     */
    status: {
      type: String,
      default: "default",
      validator(value) {
        return statuses.includes(value);
      }
    },
    /**
     * If badge should be inverted.
     */
    inverted: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const badgeClass = computed(() => {
      return props.inverted ? `badge--${props.status}-inverted` : `badge--${props.status}`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["badge", badgeClass.value])
      }, [renderSlot(_ctx.$slots, "default")], 2);
    };
  }
});
var es_iterator_constructor = {};
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
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")();
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
    var test = function() {
    }.bind();
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
  functionUncurryThis = NATIVE_BIND ? uncurryThisWithBind : function(fn2) {
    return function() {
      return call.apply(fn2, arguments);
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
  var toString2 = uncurryThis({}.toString);
  var stringSlice = uncurryThis("".slice);
  classofRaw = function(it) {
    return stringSlice(toString2(it), 8, -1);
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
var isObject$1;
var hasRequiredIsObject$1;
function requireIsObject$1() {
  if (hasRequiredIsObject$1) return isObject$1;
  hasRequiredIsObject$1 = 1;
  var isCallable2 = requireIsCallable();
  isObject$1 = function(it) {
    return typeof it == "object" ? it !== null : isCallable2(it);
  };
  return isObject$1;
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
  var process = globalThis2.process;
  var Deno2 = globalThis2.Deno;
  var versions = process && process.versions || Deno2 && Deno2.version;
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
    var symbol = Symbol("symbol detection");
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
  var isObject2 = requireIsObject$1();
  var $TypeError = TypeError;
  ordinaryToPrimitive = function(input, pref) {
    var fn2, val;
    if (pref === "string" && isCallable2(fn2 = input.toString) && !isObject2(val = call(fn2, input))) return val;
    if (isCallable2(fn2 = input.valueOf) && !isObject2(val = call(fn2, input))) return val;
    if (pref !== "string" && isCallable2(fn2 = input.toString) && !isObject2(val = call(fn2, input))) return val;
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
    version: "3.43.0",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xA9 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.43.0/LICENSE",
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
  hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
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
  var toString2 = uncurryThis(1.1.toString);
  uid = function(key) {
    return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString2(++id + postfix, 36);
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
  var hasOwn = requireHasOwnProperty();
  var uid2 = requireUid();
  var NATIVE_SYMBOL = requireSymbolConstructorDetection();
  var USE_SYMBOL_AS_UID = requireUseSymbolAsUid();
  var Symbol2 = globalThis2.Symbol;
  var WellKnownSymbolsStore = shared2("wks");
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid2;
  wellKnownSymbol = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
    }
    return WellKnownSymbolsStore[name];
  };
  return wellKnownSymbol;
}
var toPrimitive$1;
var hasRequiredToPrimitive;
function requireToPrimitive() {
  if (hasRequiredToPrimitive) return toPrimitive$1;
  hasRequiredToPrimitive = 1;
  var call = requireFunctionCall();
  var isObject2 = requireIsObject$1();
  var isSymbol2 = requireIsSymbol();
  var getMethod2 = requireGetMethod();
  var ordinaryToPrimitive2 = requireOrdinaryToPrimitive();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var $TypeError = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol2("toPrimitive");
  toPrimitive$1 = function(input, pref) {
    if (!isObject2(input) || isSymbol2(input)) return input;
    var exoticToPrim = getMethod2(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === void 0) pref = "default";
      result = call(exoticToPrim, input, pref);
      if (!isObject2(result) || isSymbol2(result)) return result;
      throw new $TypeError("Can't convert object to primitive value");
    }
    if (pref === void 0) pref = "number";
    return ordinaryToPrimitive2(input, pref);
  };
  return toPrimitive$1;
}
var toPropertyKey$1;
var hasRequiredToPropertyKey;
function requireToPropertyKey() {
  if (hasRequiredToPropertyKey) return toPropertyKey$1;
  hasRequiredToPropertyKey = 1;
  var toPrimitive2 = requireToPrimitive();
  var isSymbol2 = requireIsSymbol();
  toPropertyKey$1 = function(argument) {
    var key = toPrimitive2(argument, "string");
    return isSymbol2(key) ? key : key + "";
  };
  return toPropertyKey$1;
}
var documentCreateElement;
var hasRequiredDocumentCreateElement;
function requireDocumentCreateElement() {
  if (hasRequiredDocumentCreateElement) return documentCreateElement;
  hasRequiredDocumentCreateElement = 1;
  var globalThis2 = requireGlobalThis();
  var isObject2 = requireIsObject$1();
  var document2 = globalThis2.document;
  var EXISTS = isObject2(document2) && isObject2(document2.createElement);
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
  var hasOwn = requireHasOwnProperty();
  var IE8_DOM_DEFINE = requireIe8DomDefine();
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject2(O);
    P = toPropertyKey2(P);
    if (IE8_DOM_DEFINE) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) {
    }
    if (hasOwn(O, P)) return createPropertyDescriptor2(!call(propertyIsEnumerableModule.f, O, P), O[P]);
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
  var isObject2 = requireIsObject$1();
  var $String = String;
  var $TypeError = TypeError;
  anObject = function(argument) {
    if (isObject2(argument)) return argument;
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
  var hasOwn = requireHasOwnProperty();
  var FunctionPrototype = Function.prototype;
  var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
  var EXISTS = hasOwn(FunctionPrototype, "name");
  var PROPER = EXISTS && function something() {
  }.name === "something";
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
  var isObject2 = requireIsObject$1();
  var createNonEnumerableProperty2 = requireCreateNonEnumerableProperty();
  var hasOwn = requireHasOwnProperty();
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
      if (!isObject2(it) || (state = get(it)).type !== TYPE) {
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
      if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty2(it, STATE, metadata);
      return metadata;
    };
    get = function(it) {
      return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
      return hasOwn(it, STATE);
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
  var hasOwn = requireHasOwnProperty();
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
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      if (DESCRIPTORS) defineProperty(value, "name", {
        value: name,
        configurable: true
      });
      else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
      defineProperty(value, "length", {
        value: options.arity
      });
    }
    try {
      if (options && hasOwn(options, "constructor") && options.constructor) {
        if (DESCRIPTORS) defineProperty(value, "prototype", {
          writable: false
        });
      } else if (value.prototype) value.prototype = void 0;
    } catch (error) {
    }
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) {
      state.source = join(TEMPLATE, typeof name == "string" ? name : "");
    }
    return value;
  };
  Function.prototype.toString = makeBuiltIn$1(function toString2() {
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
  var hasOwn = requireHasOwnProperty();
  var toIndexedObject2 = requireToIndexedObject();
  var indexOf = requireArrayIncludes().indexOf;
  var hiddenKeys2 = requireHiddenKeys();
  var push = uncurryThis([].push);
  objectKeysInternal = function(object, names) {
    var O = toIndexedObject2(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn(hiddenKeys2, key) && hasOwn(O, key) && push(result, key);
    while (names.length > i) if (hasOwn(O, key = names[i++])) {
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
  var hasOwn = requireHasOwnProperty();
  var ownKeys2 = requireOwnKeys();
  var getOwnPropertyDescriptorModule = requireObjectGetOwnPropertyDescriptor();
  var definePropertyModule = requireObjectDefineProperty();
  copyConstructorProperties = function(target, source, exceptions) {
    var keys = ownKeys2(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
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
  var hasOwn = requireHasOwnProperty();
  var isCallable2 = requireIsCallable();
  var toObject2 = requireToObject();
  var sharedKey2 = requireSharedKey();
  var CORRECT_PROTOTYPE_GETTER = requireCorrectPrototypeGetter();
  var IE_PROTO = sharedKey2("IE_PROTO");
  var $Object = Object;
  var ObjectPrototype = $Object.prototype;
  objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
    var object = toObject2(O);
    if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
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
  var scriptTag = function(content2) {
    return LT + SCRIPT + GT + content2 + LT + "/" + SCRIPT + GT;
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
  var isObject2 = requireIsObject$1();
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
  var NEW_ITERATOR_PROTOTYPE = !isObject2(IteratorPrototype) || fails2(function() {
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
  var hasOwn = requireHasOwnProperty();
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
          if (hasOwn(this, key)) this[key] = replacement;
          else createProperty2(this, key, replacement);
        }
      });
    } else IteratorPrototype[key] = value;
  };
  if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);
  if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
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
var es_iterator_forEach = {};
var functionUncurryThisClause;
var hasRequiredFunctionUncurryThisClause;
function requireFunctionUncurryThisClause() {
  if (hasRequiredFunctionUncurryThisClause) return functionUncurryThisClause;
  hasRequiredFunctionUncurryThisClause = 1;
  var classofRaw2 = requireClassofRaw();
  var uncurryThis = requireFunctionUncurryThis();
  functionUncurryThisClause = function(fn2) {
    if (classofRaw2(fn2) === "Function") return uncurryThis(fn2);
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
  functionBindContext = function(fn2, that) {
    aCallable2(fn2);
    return that === void 0 ? fn2 : NATIVE_BIND ? bind(fn2, that) : function() {
      return fn2.apply(that, arguments);
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
  var CORRECT_ARGUMENTS = classofRaw2(/* @__PURE__ */ function() {
    return arguments;
  }()) === "Arguments";
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
    var fn2 = bind(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function(condition) {
      if (iterator) iteratorClose2(iterator, "normal");
      return new Result(true, condition);
    };
    var callFn = function(value) {
      if (AS_ENTRIES) {
        anObject2(value);
        return INTERRUPTED ? fn2(value[0], value[1], stop) : fn2(value[0], value[1]);
      }
      return INTERRUPTED ? fn2(value, stop) : fn2(value);
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
    forEach: function forEach(fn2) {
      anObject2(this);
      try {
        aCallable2(fn2);
      } catch (error) {
        iteratorClose2(this, "throw", error);
      }
      if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn2);
      var record = getIteratorDirect2(this);
      var counter = 0;
      iterate2(record, function(value) {
        fn2(value, counter++);
      }, {
        IS_RECORD: true
      });
    }
  });
  return es_iterator_forEach;
}
requireEs_iterator_forEach();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var es_array_push = {};
var isArray;
var hasRequiredIsArray$1;
function requireIsArray$1() {
  if (hasRequiredIsArray$1) return isArray;
  hasRequiredIsArray$1 = 1;
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
  var isArray2 = requireIsArray$1();
  var $TypeError = TypeError;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function() {
    if (this !== void 0) return true;
    try {
      Object.defineProperty([], "length", {
        writable: false
      }).length = 1;
    } catch (error) {
      return error instanceof TypeError;
    }
  }();
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
var Flip = ["horizontal", "vertical"];
var Rotate = ["90", "180", "270"];
var _sfc_main$1l = defineComponent({
  name: "FIcon",
  inheritAttrs: false,
  props: {
    /**
     * Icon name.
     */
    name: {
      type: String,
      required: true
    },
    /**
     * fk-icon library
     */
    library: {
      type: String,
      required: false,
      default: "f"
    },
    /**
     * Flip icon horizontally or vertically.
     *
     * Must be set to one of:
     *
     * - `horizontal`
     * - `vertical`
     */
    flip: {
      type: String,
      default: null,
      required: false,
      validator(value) {
        return Flip.includes(value);
      }
    },
    /**
     * Rotate icon.
     *
     * Must be set to one of:
     *
     * - `90`
     * - `180`
     * - `270`
     */
    rotate: {
      type: String,
      default: null,
      required: false,
      validator(value) {
        return Rotate.includes(value);
      }
    }
  },
  computed: {
    spriteKey() {
      return `${this.library}-icon-${this.name}`;
    },
    spriteId() {
      return `#${this.spriteKey}`;
    },
    modifiers() {
      const classes = [];
      if (this.flip) {
        classes.push(`icon--flip-${this.flip}`);
      }
      if (this.rotate) {
        classes.push(`icon--rotate-${this.rotate}`);
      }
      return classes;
    },
    ariaHidden() {
      const slotUsed = Boolean(this.$slots.default);
      const ariaLabel = this.$attrs["aria-label"] !== void 0;
      const ariaLabelledby = this.$attrs["aria-labelledby"] !== void 0;
      const ariaDescription = this.$attrs["aria-description"] !== void 0;
      const ariaDescribedby = this.$attrs["aria-describedby"] !== void 0;
      const hasText = slotUsed || ariaLabel || ariaLabelledby || ariaDescription || ariaDescribedby;
      return hasText ? void 0 : "true";
    }
  }
});
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
var _hoisted_1$$ = ["aria-hidden"];
var _hoisted_2$K = ["href"];
function _sfc_render$Q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps(_ctx.$attrs, {
    focusable: "false",
    class: ["icon", [_ctx.spriteKey, ..._ctx.modifiers]],
    "aria-hidden": _ctx.ariaHidden
  }), [renderSlot(_ctx.$slots, "default"), _cache[0] || (_cache[0] = createTextVNode()), createElementVNode("use", {
    href: _ctx.spriteId
  }, null, 8, _hoisted_2$K)], 16, _hoisted_1$$);
}
var FIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1l, [["render", _sfc_render$Q]]);
var DATA_TEST_ATTRIBUTE_NAME = "data-test";
function throwErrorIfEmpty(value) {
  if (!value) {
    throw new Error(`Did you forgot to add a value to v-test?`);
  }
}
var TestDirective = {
  mounted(el, {
    value
  }) {
    throwErrorIfEmpty(value);
    el.setAttribute(DATA_TEST_ATTRIBUTE_NAME, value);
  },
  updated(el, {
    value
  }) {
    throwErrorIfEmpty(value);
    el.setAttribute(DATA_TEST_ATTRIBUTE_NAME, value);
  }
};
var TestPlugin = {
  install(app) {
    app.directive("test", TestDirective);
  }
};
function translate(key, defaultValueOrArgs, args) {
  const {
    provider
  } = TranslationService;
  return provider.translate(key, defaultValueOrArgs, args);
}
var TranslationMixin = {
  methods: {
    $t: translate
  }
};
var TranslationPlugin = {
  install(app) {
    app.mixin(TranslationMixin);
  }
};
function useTranslate() {
  return translate;
}
var _listCacheClear;
var hasRequired_listCacheClear;
function require_listCacheClear() {
  if (hasRequired_listCacheClear) return _listCacheClear;
  hasRequired_listCacheClear = 1;
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  _listCacheClear = listCacheClear;
  return _listCacheClear;
}
var eq_1;
var hasRequiredEq;
function requireEq() {
  if (hasRequiredEq) return eq_1;
  hasRequiredEq = 1;
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  eq_1 = eq;
  return eq_1;
}
var _assocIndexOf;
var hasRequired_assocIndexOf;
function require_assocIndexOf() {
  if (hasRequired_assocIndexOf) return _assocIndexOf;
  hasRequired_assocIndexOf = 1;
  var eq = requireEq();
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  _assocIndexOf = assocIndexOf;
  return _assocIndexOf;
}
var _listCacheDelete;
var hasRequired_listCacheDelete;
function require_listCacheDelete() {
  if (hasRequired_listCacheDelete) return _listCacheDelete;
  hasRequired_listCacheDelete = 1;
  var assocIndexOf = require_assocIndexOf();
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  _listCacheDelete = listCacheDelete;
  return _listCacheDelete;
}
var _listCacheGet;
var hasRequired_listCacheGet;
function require_listCacheGet() {
  if (hasRequired_listCacheGet) return _listCacheGet;
  hasRequired_listCacheGet = 1;
  var assocIndexOf = require_assocIndexOf();
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  _listCacheGet = listCacheGet;
  return _listCacheGet;
}
var _listCacheHas;
var hasRequired_listCacheHas;
function require_listCacheHas() {
  if (hasRequired_listCacheHas) return _listCacheHas;
  hasRequired_listCacheHas = 1;
  var assocIndexOf = require_assocIndexOf();
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  _listCacheHas = listCacheHas;
  return _listCacheHas;
}
var _listCacheSet;
var hasRequired_listCacheSet;
function require_listCacheSet() {
  if (hasRequired_listCacheSet) return _listCacheSet;
  hasRequired_listCacheSet = 1;
  var assocIndexOf = require_assocIndexOf();
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  _listCacheSet = listCacheSet;
  return _listCacheSet;
}
var _ListCache;
var hasRequired_ListCache;
function require_ListCache() {
  if (hasRequired_ListCache) return _ListCache;
  hasRequired_ListCache = 1;
  var listCacheClear = require_listCacheClear(), listCacheDelete = require_listCacheDelete(), listCacheGet = require_listCacheGet(), listCacheHas = require_listCacheHas(), listCacheSet = require_listCacheSet();
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  _ListCache = ListCache;
  return _ListCache;
}
var _stackClear;
var hasRequired_stackClear;
function require_stackClear() {
  if (hasRequired_stackClear) return _stackClear;
  hasRequired_stackClear = 1;
  var ListCache = require_ListCache();
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }
  _stackClear = stackClear;
  return _stackClear;
}
var _stackDelete;
var hasRequired_stackDelete;
function require_stackDelete() {
  if (hasRequired_stackDelete) return _stackDelete;
  hasRequired_stackDelete = 1;
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  _stackDelete = stackDelete;
  return _stackDelete;
}
var _stackGet;
var hasRequired_stackGet;
function require_stackGet() {
  if (hasRequired_stackGet) return _stackGet;
  hasRequired_stackGet = 1;
  function stackGet(key) {
    return this.__data__.get(key);
  }
  _stackGet = stackGet;
  return _stackGet;
}
var _stackHas;
var hasRequired_stackHas;
function require_stackHas() {
  if (hasRequired_stackHas) return _stackHas;
  hasRequired_stackHas = 1;
  function stackHas(key) {
    return this.__data__.has(key);
  }
  _stackHas = stackHas;
  return _stackHas;
}
var _freeGlobal;
var hasRequired_freeGlobal;
function require_freeGlobal() {
  if (hasRequired_freeGlobal) return _freeGlobal;
  hasRequired_freeGlobal = 1;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  _freeGlobal = freeGlobal;
  return _freeGlobal;
}
var _root;
var hasRequired_root;
function require_root() {
  if (hasRequired_root) return _root;
  hasRequired_root = 1;
  var freeGlobal = require_freeGlobal();
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  _root = root;
  return _root;
}
var _Symbol;
var hasRequired_Symbol;
function require_Symbol() {
  if (hasRequired_Symbol) return _Symbol;
  hasRequired_Symbol = 1;
  var root = require_root();
  var Symbol2 = root.Symbol;
  _Symbol = Symbol2;
  return _Symbol;
}
var _getRawTag;
var hasRequired_getRawTag;
function require_getRawTag() {
  if (hasRequired_getRawTag) return _getRawTag;
  hasRequired_getRawTag = 1;
  var Symbol2 = require_Symbol();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  _getRawTag = getRawTag;
  return _getRawTag;
}
var _objectToString;
var hasRequired_objectToString;
function require_objectToString() {
  if (hasRequired_objectToString) return _objectToString;
  hasRequired_objectToString = 1;
  var objectProto = Object.prototype;
  var nativeObjectToString = objectProto.toString;
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  _objectToString = objectToString;
  return _objectToString;
}
var _baseGetTag;
var hasRequired_baseGetTag;
function require_baseGetTag() {
  if (hasRequired_baseGetTag) return _baseGetTag;
  hasRequired_baseGetTag = 1;
  var Symbol2 = require_Symbol(), getRawTag = require_getRawTag(), objectToString = require_objectToString();
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  _baseGetTag = baseGetTag;
  return _baseGetTag;
}
var isObject_1;
var hasRequiredIsObject;
function requireIsObject() {
  if (hasRequiredIsObject) return isObject_1;
  hasRequiredIsObject = 1;
  function isObject2(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  isObject_1 = isObject2;
  return isObject_1;
}
var isFunction_1;
var hasRequiredIsFunction;
function requireIsFunction() {
  if (hasRequiredIsFunction) return isFunction_1;
  hasRequiredIsFunction = 1;
  var baseGetTag = require_baseGetTag(), isObject2 = requireIsObject();
  var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
  function isFunction(value) {
    if (!isObject2(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  isFunction_1 = isFunction;
  return isFunction_1;
}
var _coreJsData;
var hasRequired_coreJsData;
function require_coreJsData() {
  if (hasRequired_coreJsData) return _coreJsData;
  hasRequired_coreJsData = 1;
  var root = require_root();
  var coreJsData = root["__core-js_shared__"];
  _coreJsData = coreJsData;
  return _coreJsData;
}
var _isMasked;
var hasRequired_isMasked;
function require_isMasked() {
  if (hasRequired_isMasked) return _isMasked;
  hasRequired_isMasked = 1;
  var coreJsData = require_coreJsData();
  var maskSrcKey = function() {
    var uid2 = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid2 ? "Symbol(src)_1." + uid2 : "";
  }();
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  _isMasked = isMasked;
  return _isMasked;
}
var _toSource;
var hasRequired_toSource;
function require_toSource() {
  if (hasRequired_toSource) return _toSource;
  hasRequired_toSource = 1;
  var funcProto = Function.prototype;
  var funcToString = funcProto.toString;
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  _toSource = toSource;
  return _toSource;
}
var _baseIsNative;
var hasRequired_baseIsNative;
function require_baseIsNative() {
  if (hasRequired_baseIsNative) return _baseIsNative;
  hasRequired_baseIsNative = 1;
  var isFunction = requireIsFunction(), isMasked = require_isMasked(), isObject2 = requireIsObject(), toSource = require_toSource();
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto = Function.prototype, objectProto = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function baseIsNative(value) {
    if (!isObject2(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  _baseIsNative = baseIsNative;
  return _baseIsNative;
}
var _getValue;
var hasRequired_getValue;
function require_getValue() {
  if (hasRequired_getValue) return _getValue;
  hasRequired_getValue = 1;
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  _getValue = getValue;
  return _getValue;
}
var _getNative;
var hasRequired_getNative;
function require_getNative() {
  if (hasRequired_getNative) return _getNative;
  hasRequired_getNative = 1;
  var baseIsNative = require_baseIsNative(), getValue = require_getValue();
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  _getNative = getNative;
  return _getNative;
}
var _Map;
var hasRequired_Map;
function require_Map() {
  if (hasRequired_Map) return _Map;
  hasRequired_Map = 1;
  var getNative = require_getNative(), root = require_root();
  var Map2 = getNative(root, "Map");
  _Map = Map2;
  return _Map;
}
var _nativeCreate;
var hasRequired_nativeCreate;
function require_nativeCreate() {
  if (hasRequired_nativeCreate) return _nativeCreate;
  hasRequired_nativeCreate = 1;
  var getNative = require_getNative();
  var nativeCreate = getNative(Object, "create");
  _nativeCreate = nativeCreate;
  return _nativeCreate;
}
var _hashClear;
var hasRequired_hashClear;
function require_hashClear() {
  if (hasRequired_hashClear) return _hashClear;
  hasRequired_hashClear = 1;
  var nativeCreate = require_nativeCreate();
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  _hashClear = hashClear;
  return _hashClear;
}
var _hashDelete;
var hasRequired_hashDelete;
function require_hashDelete() {
  if (hasRequired_hashDelete) return _hashDelete;
  hasRequired_hashDelete = 1;
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  _hashDelete = hashDelete;
  return _hashDelete;
}
var _hashGet;
var hasRequired_hashGet;
function require_hashGet() {
  if (hasRequired_hashGet) return _hashGet;
  hasRequired_hashGet = 1;
  var nativeCreate = require_nativeCreate();
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : void 0;
  }
  _hashGet = hashGet;
  return _hashGet;
}
var _hashHas;
var hasRequired_hashHas;
function require_hashHas() {
  if (hasRequired_hashHas) return _hashHas;
  hasRequired_hashHas = 1;
  var nativeCreate = require_nativeCreate();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
  }
  _hashHas = hashHas;
  return _hashHas;
}
var _hashSet;
var hasRequired_hashSet;
function require_hashSet() {
  if (hasRequired_hashSet) return _hashSet;
  hasRequired_hashSet = 1;
  var nativeCreate = require_nativeCreate();
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  _hashSet = hashSet;
  return _hashSet;
}
var _Hash;
var hasRequired_Hash;
function require_Hash() {
  if (hasRequired_Hash) return _Hash;
  hasRequired_Hash = 1;
  var hashClear = require_hashClear(), hashDelete = require_hashDelete(), hashGet = require_hashGet(), hashHas = require_hashHas(), hashSet = require_hashSet();
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  _Hash = Hash;
  return _Hash;
}
var _mapCacheClear;
var hasRequired_mapCacheClear;
function require_mapCacheClear() {
  if (hasRequired_mapCacheClear) return _mapCacheClear;
  hasRequired_mapCacheClear = 1;
  var Hash = require_Hash(), ListCache = require_ListCache(), Map2 = require_Map();
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map2 || ListCache)(),
      "string": new Hash()
    };
  }
  _mapCacheClear = mapCacheClear;
  return _mapCacheClear;
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
  callWithSafeIterationClosing = function(iterator, fn2, value, ENTRIES) {
    try {
      return ENTRIES ? fn2(anObject2(value)[0], value[1]) : fn2(value);
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
var _isKeyable;
var hasRequired_isKeyable;
function require_isKeyable() {
  if (hasRequired_isKeyable) return _isKeyable;
  hasRequired_isKeyable = 1;
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  _isKeyable = isKeyable;
  return _isKeyable;
}
var _getMapData;
var hasRequired_getMapData;
function require_getMapData() {
  if (hasRequired_getMapData) return _getMapData;
  hasRequired_getMapData = 1;
  var isKeyable = require_isKeyable();
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  _getMapData = getMapData;
  return _getMapData;
}
var _mapCacheDelete;
var hasRequired_mapCacheDelete;
function require_mapCacheDelete() {
  if (hasRequired_mapCacheDelete) return _mapCacheDelete;
  hasRequired_mapCacheDelete = 1;
  var getMapData = require_getMapData();
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  _mapCacheDelete = mapCacheDelete;
  return _mapCacheDelete;
}
var _mapCacheGet;
var hasRequired_mapCacheGet;
function require_mapCacheGet() {
  if (hasRequired_mapCacheGet) return _mapCacheGet;
  hasRequired_mapCacheGet = 1;
  var getMapData = require_getMapData();
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  _mapCacheGet = mapCacheGet;
  return _mapCacheGet;
}
var _mapCacheHas;
var hasRequired_mapCacheHas;
function require_mapCacheHas() {
  if (hasRequired_mapCacheHas) return _mapCacheHas;
  hasRequired_mapCacheHas = 1;
  var getMapData = require_getMapData();
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  _mapCacheHas = mapCacheHas;
  return _mapCacheHas;
}
var _mapCacheSet;
var hasRequired_mapCacheSet;
function require_mapCacheSet() {
  if (hasRequired_mapCacheSet) return _mapCacheSet;
  hasRequired_mapCacheSet = 1;
  var getMapData = require_getMapData();
  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  _mapCacheSet = mapCacheSet;
  return _mapCacheSet;
}
var _MapCache;
var hasRequired_MapCache;
function require_MapCache() {
  if (hasRequired_MapCache) return _MapCache;
  hasRequired_MapCache = 1;
  var mapCacheClear = require_mapCacheClear(), mapCacheDelete = require_mapCacheDelete(), mapCacheGet = require_mapCacheGet(), mapCacheHas = require_mapCacheHas(), mapCacheSet = require_mapCacheSet();
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  _MapCache = MapCache;
  return _MapCache;
}
var _stackSet;
var hasRequired_stackSet;
function require_stackSet() {
  if (hasRequired_stackSet) return _stackSet;
  hasRequired_stackSet = 1;
  var ListCache = require_ListCache(), Map2 = require_Map(), MapCache = require_MapCache();
  var LARGE_ARRAY_SIZE = 200;
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  _stackSet = stackSet;
  return _stackSet;
}
var _Stack;
var hasRequired_Stack;
function require_Stack() {
  if (hasRequired_Stack) return _Stack;
  hasRequired_Stack = 1;
  var ListCache = require_ListCache(), stackClear = require_stackClear(), stackDelete = require_stackDelete(), stackGet = require_stackGet(), stackHas = require_stackHas(), stackSet = require_stackSet();
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  _Stack = Stack;
  return _Stack;
}
var _setCacheAdd;
var hasRequired_setCacheAdd;
function require_setCacheAdd() {
  if (hasRequired_setCacheAdd) return _setCacheAdd;
  hasRequired_setCacheAdd = 1;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }
  _setCacheAdd = setCacheAdd;
  return _setCacheAdd;
}
var _setCacheHas;
var hasRequired_setCacheHas;
function require_setCacheHas() {
  if (hasRequired_setCacheHas) return _setCacheHas;
  hasRequired_setCacheHas = 1;
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  _setCacheHas = setCacheHas;
  return _setCacheHas;
}
var _SetCache;
var hasRequired_SetCache;
function require_SetCache() {
  if (hasRequired_SetCache) return _SetCache;
  hasRequired_SetCache = 1;
  var MapCache = require_MapCache(), setCacheAdd = require_setCacheAdd(), setCacheHas = require_setCacheHas();
  function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache();
    while (++index < length) {
      this.add(values[index]);
    }
  }
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;
  _SetCache = SetCache;
  return _SetCache;
}
var _arraySome;
var hasRequired_arraySome;
function require_arraySome() {
  if (hasRequired_arraySome) return _arraySome;
  hasRequired_arraySome = 1;
  function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  _arraySome = arraySome;
  return _arraySome;
}
var _cacheHas;
var hasRequired_cacheHas;
function require_cacheHas() {
  if (hasRequired_cacheHas) return _cacheHas;
  hasRequired_cacheHas = 1;
  function cacheHas(cache, key) {
    return cache.has(key);
  }
  _cacheHas = cacheHas;
  return _cacheHas;
}
var _equalArrays;
var hasRequired_equalArrays;
function require_equalArrays() {
  if (hasRequired_equalArrays) return _equalArrays;
  hasRequired_equalArrays = 1;
  var SetCache = require_SetCache(), arraySome = require_arraySome(), cacheHas = require_cacheHas();
  var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array;
    }
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
    stack.set(array, other);
    stack.set(other, array);
    while (++index < arrLength) {
      var arrValue = array[index], othValue = other[index];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
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
          if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
  }
  _equalArrays = equalArrays;
  return _equalArrays;
}
var _Uint8Array;
var hasRequired_Uint8Array;
function require_Uint8Array() {
  if (hasRequired_Uint8Array) return _Uint8Array;
  hasRequired_Uint8Array = 1;
  var root = require_root();
  var Uint8Array = root.Uint8Array;
  _Uint8Array = Uint8Array;
  return _Uint8Array;
}
var _mapToArray;
var hasRequired_mapToArray;
function require_mapToArray() {
  if (hasRequired_mapToArray) return _mapToArray;
  hasRequired_mapToArray = 1;
  function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  _mapToArray = mapToArray;
  return _mapToArray;
}
var _setToArray;
var hasRequired_setToArray;
function require_setToArray() {
  if (hasRequired_setToArray) return _setToArray;
  hasRequired_setToArray = 1;
  function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  _setToArray = setToArray;
  return _setToArray;
}
var _equalByTag;
var hasRequired_equalByTag;
function require_equalByTag() {
  if (hasRequired_equalByTag) return _equalByTag;
  hasRequired_equalByTag = 1;
  var Symbol2 = require_Symbol(), Uint8Array = require_Uint8Array(), eq = requireEq(), equalArrays = require_equalArrays(), mapToArray = require_mapToArray(), setToArray = require_setToArray();
  var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
  var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
  var symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
      case arrayBufferTag:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
          return false;
        }
        return true;
      case boolTag:
      case dateTag:
      case numberTag:
        return eq(+object, +other);
      case errorTag:
        return object.name == other.name && object.message == other.message;
      case regexpTag:
      case stringTag:
        return object == other + "";
      case mapTag:
        var convert = mapToArray;
      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
        convert || (convert = setToArray);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG;
        stack.set(object, other);
        var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack["delete"](object);
        return result;
      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  _equalByTag = equalByTag;
  return _equalByTag;
}
var _arrayPush;
var hasRequired_arrayPush;
function require_arrayPush() {
  if (hasRequired_arrayPush) return _arrayPush;
  hasRequired_arrayPush = 1;
  function arrayPush(array, values) {
    var index = -1, length = values.length, offset2 = array.length;
    while (++index < length) {
      array[offset2 + index] = values[index];
    }
    return array;
  }
  _arrayPush = arrayPush;
  return _arrayPush;
}
var isArray_1;
var hasRequiredIsArray;
function requireIsArray() {
  if (hasRequiredIsArray) return isArray_1;
  hasRequiredIsArray = 1;
  var isArray2 = Array.isArray;
  isArray_1 = isArray2;
  return isArray_1;
}
var _baseGetAllKeys;
var hasRequired_baseGetAllKeys;
function require_baseGetAllKeys() {
  if (hasRequired_baseGetAllKeys) return _baseGetAllKeys;
  hasRequired_baseGetAllKeys = 1;
  var arrayPush = require_arrayPush(), isArray2 = requireIsArray();
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray2(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  _baseGetAllKeys = baseGetAllKeys;
  return _baseGetAllKeys;
}
var _arrayFilter;
var hasRequired_arrayFilter;
function require_arrayFilter() {
  if (hasRequired_arrayFilter) return _arrayFilter;
  hasRequired_arrayFilter = 1;
  function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  _arrayFilter = arrayFilter;
  return _arrayFilter;
}
var stubArray_1;
var hasRequiredStubArray;
function requireStubArray() {
  if (hasRequiredStubArray) return stubArray_1;
  hasRequiredStubArray = 1;
  function stubArray() {
    return [];
  }
  stubArray_1 = stubArray;
  return stubArray_1;
}
var _getSymbols;
var hasRequired_getSymbols;
function require_getSymbols() {
  if (hasRequired_getSymbols) return _getSymbols;
  hasRequired_getSymbols = 1;
  var arrayFilter = require_arrayFilter(), stubArray = requireStubArray();
  var objectProto = Object.prototype;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  _getSymbols = getSymbols;
  return _getSymbols;
}
var _baseTimes;
var hasRequired_baseTimes;
function require_baseTimes() {
  if (hasRequired_baseTimes) return _baseTimes;
  hasRequired_baseTimes = 1;
  function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  _baseTimes = baseTimes;
  return _baseTimes;
}
var isObjectLike_1;
var hasRequiredIsObjectLike;
function requireIsObjectLike() {
  if (hasRequiredIsObjectLike) return isObjectLike_1;
  hasRequiredIsObjectLike = 1;
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  isObjectLike_1 = isObjectLike;
  return isObjectLike_1;
}
var _baseIsArguments;
var hasRequired_baseIsArguments;
function require_baseIsArguments() {
  if (hasRequired_baseIsArguments) return _baseIsArguments;
  hasRequired_baseIsArguments = 1;
  var baseGetTag = require_baseGetTag(), isObjectLike = requireIsObjectLike();
  var argsTag = "[object Arguments]";
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  _baseIsArguments = baseIsArguments;
  return _baseIsArguments;
}
var isArguments_1;
var hasRequiredIsArguments;
function requireIsArguments() {
  if (hasRequiredIsArguments) return isArguments_1;
  hasRequiredIsArguments = 1;
  var baseIsArguments = require_baseIsArguments(), isObjectLike = requireIsObjectLike();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  var isArguments = baseIsArguments(/* @__PURE__ */ function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  isArguments_1 = isArguments;
  return isArguments_1;
}
var isBuffer = {
  exports: {}
};
var stubFalse_1;
var hasRequiredStubFalse;
function requireStubFalse() {
  if (hasRequiredStubFalse) return stubFalse_1;
  hasRequiredStubFalse = 1;
  function stubFalse() {
    return false;
  }
  stubFalse_1 = stubFalse;
  return stubFalse_1;
}
isBuffer.exports;
var hasRequiredIsBuffer;
function requireIsBuffer() {
  if (hasRequiredIsBuffer) return isBuffer.exports;
  hasRequiredIsBuffer = 1;
  (function(module, exports) {
    var root = require_root(), stubFalse = requireStubFalse();
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer2 = nativeIsBuffer || stubFalse;
    module.exports = isBuffer2;
  })(isBuffer, isBuffer.exports);
  return isBuffer.exports;
}
var _isIndex;
var hasRequired_isIndex;
function require_isIndex() {
  if (hasRequired_isIndex) return _isIndex;
  hasRequired_isIndex = 1;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }
  _isIndex = isIndex;
  return _isIndex;
}
var isLength_1;
var hasRequiredIsLength;
function requireIsLength() {
  if (hasRequiredIsLength) return isLength_1;
  hasRequiredIsLength = 1;
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  isLength_1 = isLength;
  return isLength_1;
}
var _baseIsTypedArray;
var hasRequired_baseIsTypedArray;
function require_baseIsTypedArray() {
  if (hasRequired_baseIsTypedArray) return _baseIsTypedArray;
  hasRequired_baseIsTypedArray = 1;
  var baseGetTag = require_baseGetTag(), isLength = requireIsLength(), isObjectLike = requireIsObjectLike();
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  _baseIsTypedArray = baseIsTypedArray;
  return _baseIsTypedArray;
}
var _baseUnary;
var hasRequired_baseUnary;
function require_baseUnary() {
  if (hasRequired_baseUnary) return _baseUnary;
  hasRequired_baseUnary = 1;
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  _baseUnary = baseUnary;
  return _baseUnary;
}
var _nodeUtil = {
  exports: {}
};
_nodeUtil.exports;
var hasRequired_nodeUtil;
function require_nodeUtil() {
  if (hasRequired_nodeUtil) return _nodeUtil.exports;
  hasRequired_nodeUtil = 1;
  (function(module, exports) {
    var freeGlobal = require_freeGlobal();
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil;
  })(_nodeUtil, _nodeUtil.exports);
  return _nodeUtil.exports;
}
var isTypedArray_1;
var hasRequiredIsTypedArray;
function requireIsTypedArray() {
  if (hasRequiredIsTypedArray) return isTypedArray_1;
  hasRequiredIsTypedArray = 1;
  var baseIsTypedArray = require_baseIsTypedArray(), baseUnary = require_baseUnary(), nodeUtil = require_nodeUtil();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  isTypedArray_1 = isTypedArray;
  return isTypedArray_1;
}
var _arrayLikeKeys;
var hasRequired_arrayLikeKeys;
function require_arrayLikeKeys() {
  if (hasRequired_arrayLikeKeys) return _arrayLikeKeys;
  hasRequired_arrayLikeKeys = 1;
  var baseTimes = require_baseTimes(), isArguments = requireIsArguments(), isArray2 = requireIsArray(), isBuffer2 = requireIsBuffer(), isIndex = require_isIndex(), isTypedArray = requireIsTypedArray();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer2(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  _arrayLikeKeys = arrayLikeKeys;
  return _arrayLikeKeys;
}
var _isPrototype;
var hasRequired_isPrototype;
function require_isPrototype() {
  if (hasRequired_isPrototype) return _isPrototype;
  hasRequired_isPrototype = 1;
  var objectProto = Object.prototype;
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  _isPrototype = isPrototype;
  return _isPrototype;
}
var _overArg;
var hasRequired_overArg;
function require_overArg() {
  if (hasRequired_overArg) return _overArg;
  hasRequired_overArg = 1;
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  _overArg = overArg;
  return _overArg;
}
var _nativeKeys;
var hasRequired_nativeKeys;
function require_nativeKeys() {
  if (hasRequired_nativeKeys) return _nativeKeys;
  hasRequired_nativeKeys = 1;
  var overArg = require_overArg();
  var nativeKeys = overArg(Object.keys, Object);
  _nativeKeys = nativeKeys;
  return _nativeKeys;
}
var _baseKeys;
var hasRequired_baseKeys;
function require_baseKeys() {
  if (hasRequired_baseKeys) return _baseKeys;
  hasRequired_baseKeys = 1;
  var isPrototype = require_isPrototype(), nativeKeys = require_nativeKeys();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  _baseKeys = baseKeys;
  return _baseKeys;
}
var isArrayLike_1;
var hasRequiredIsArrayLike;
function requireIsArrayLike() {
  if (hasRequiredIsArrayLike) return isArrayLike_1;
  hasRequiredIsArrayLike = 1;
  var isFunction = requireIsFunction(), isLength = requireIsLength();
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  isArrayLike_1 = isArrayLike;
  return isArrayLike_1;
}
var keys_1;
var hasRequiredKeys;
function requireKeys() {
  if (hasRequiredKeys) return keys_1;
  hasRequiredKeys = 1;
  var arrayLikeKeys = require_arrayLikeKeys(), baseKeys = require_baseKeys(), isArrayLike = requireIsArrayLike();
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  keys_1 = keys;
  return keys_1;
}
var _getAllKeys;
var hasRequired_getAllKeys;
function require_getAllKeys() {
  if (hasRequired_getAllKeys) return _getAllKeys;
  hasRequired_getAllKeys = 1;
  var baseGetAllKeys = require_baseGetAllKeys(), getSymbols = require_getSymbols(), keys = requireKeys();
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }
  _getAllKeys = getAllKeys;
  return _getAllKeys;
}
var _equalObjects;
var hasRequired_equalObjects;
function require_equalObjects() {
  if (hasRequired_equalObjects) return _equalObjects;
  hasRequired_equalObjects = 1;
  var getAllKeys = require_getAllKeys();
  var COMPARE_PARTIAL_FLAG = 1;
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
        return false;
      }
    }
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key], othValue = other[key];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
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
    stack["delete"](object);
    stack["delete"](other);
    return result;
  }
  _equalObjects = equalObjects;
  return _equalObjects;
}
var es_arrayBuffer_detached = {};
var arrayBufferBasicDetection;
var hasRequiredArrayBufferBasicDetection;
function requireArrayBufferBasicDetection() {
  if (hasRequiredArrayBufferBasicDetection) return arrayBufferBasicDetection;
  hasRequiredArrayBufferBasicDetection = 1;
  arrayBufferBasicDetection = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined";
  return arrayBufferBasicDetection;
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
  environment = function() {
    if (userAgentStartsWith("Bun/")) return "BUN";
    if (userAgentStartsWith("Cloudflare-Workers")) return "CLOUDFLARE";
    if (userAgentStartsWith("Deno/")) return "DENO";
    if (userAgentStartsWith("Node.js/")) return "NODE";
    if (globalThis2.Bun && typeof Bun.version == "string") return "BUN";
    if (globalThis2.Deno && typeof Deno.version == "object") return "DENO";
    if (classof2(globalThis2.process) === "process") return "NODE";
    if (globalThis2.window && globalThis2.document) return "BROWSER";
    return "REST";
  }();
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
var _DataView;
var hasRequired_DataView;
function require_DataView() {
  if (hasRequired_DataView) return _DataView;
  hasRequired_DataView = 1;
  var getNative = require_getNative(), root = require_root();
  var DataView2 = getNative(root, "DataView");
  _DataView = DataView2;
  return _DataView;
}
var _Promise;
var hasRequired_Promise;
function require_Promise() {
  if (hasRequired_Promise) return _Promise;
  hasRequired_Promise = 1;
  var getNative = require_getNative(), root = require_root();
  var Promise2 = getNative(root, "Promise");
  _Promise = Promise2;
  return _Promise;
}
var _Set;
var hasRequired_Set;
function require_Set() {
  if (hasRequired_Set) return _Set;
  hasRequired_Set = 1;
  var getNative = require_getNative(), root = require_root();
  var Set2 = getNative(root, "Set");
  _Set = Set2;
  return _Set;
}
var _WeakMap;
var hasRequired_WeakMap;
function require_WeakMap() {
  if (hasRequired_WeakMap) return _WeakMap;
  hasRequired_WeakMap = 1;
  var getNative = require_getNative(), root = require_root();
  var WeakMap2 = getNative(root, "WeakMap");
  _WeakMap = WeakMap2;
  return _WeakMap;
}
var _getTag;
var hasRequired_getTag;
function require_getTag() {
  if (hasRequired_getTag) return _getTag;
  hasRequired_getTag = 1;
  var DataView2 = require_DataView(), Map2 = require_Map(), Promise2 = require_Promise(), Set2 = require_Set(), WeakMap2 = require_WeakMap(), baseGetTag = require_baseGetTag(), toSource = require_toSource();
  var mapTag = "[object Map]", objectTag = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
  var dataViewTag = "[object DataView]";
  var dataViewCtorString = toSource(DataView2), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
  var getTag = baseGetTag;
  if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
    getTag = function(value) {
      var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
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
  _getTag = getTag;
  return _getTag;
}
var _baseIsEqualDeep;
var hasRequired_baseIsEqualDeep;
function require_baseIsEqualDeep() {
  if (hasRequired_baseIsEqualDeep) return _baseIsEqualDeep;
  hasRequired_baseIsEqualDeep = 1;
  var Stack = require_Stack(), equalArrays = require_equalArrays(), equalByTag = require_equalByTag(), equalObjects = require_equalObjects(), getTag = require_getTag(), isArray2 = requireIsArray(), isBuffer2 = requireIsBuffer(), isTypedArray = requireIsTypedArray();
  var COMPARE_PARTIAL_FLAG = 1;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray2(object), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer2(object)) {
      if (!isBuffer2(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack());
      return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack());
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }
  _baseIsEqualDeep = baseIsEqualDeep;
  return _baseIsEqualDeep;
}
var _baseIsEqual;
var hasRequired_baseIsEqual;
function require_baseIsEqual() {
  if (hasRequired_baseIsEqual) return _baseIsEqual;
  hasRequired_baseIsEqual = 1;
  var baseIsEqualDeep = require_baseIsEqualDeep(), isObjectLike = requireIsObjectLike();
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }
  _baseIsEqual = baseIsEqual;
  return _baseIsEqual;
}
var isEqual_1;
var hasRequiredIsEqual;
function requireIsEqual() {
  if (hasRequiredIsEqual) return isEqual_1;
  hasRequiredIsEqual = 1;
  var baseIsEqual = require_baseIsEqual();
  function isEqual2(value, other) {
    return baseIsEqual(value, other);
  }
  isEqual_1 = isEqual2;
  return isEqual_1;
}
var isEqualExports = requireIsEqual();
var isEqual$1 = /* @__PURE__ */ getDefaultExportFromCjs(isEqualExports);
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
  const match = itemList.find((it) => {
    return it[compareAttribute] === itemCompareValue;
  });
  return Boolean(match);
}
function handleKeyboardFocusNavigation(key, focusedElement, focusableElements) {
  let tabPosition = focusableElements.indexOf(focusedElement);
  const keyDown = ["ArrowDown", "Down"];
  const keyUp2 = ["ArrowUp", "Up"];
  if (keyDown.includes(key)) {
    tabPosition++;
    if (tabPosition === focusableElements.length) {
      tabPosition = 0;
    }
  }
  if (keyUp2.includes(key)) {
    tabPosition--;
    if (tabPosition === -1) {
      tabPosition = focusableElements.length - 1;
    }
  }
  if (focusableElements[tabPosition]) {
    focusableElements[tabPosition].focus();
  }
}
var TableScroll = /* @__PURE__ */ ((TableScroll2) => {
  TableScroll2["HORIZONTAL"] = "horizontal";
  TableScroll2["VERTICAL"] = "vertical";
  TableScroll2["BOTH"] = "both";
  TableScroll2["NONE"] = "none";
  return TableScroll2;
})(TableScroll || {});
var scrollClasses = {
  [
    "horizontal"
    /* HORIZONTAL */
  ]: ["table__scroll", "table__scroll--horizontal"],
  [
    "vertical"
    /* VERTICAL */
  ]: ["table__scroll", "table__scroll--vertical"],
  [
    "both"
    /* BOTH */
  ]: ["table__scroll", "table__scroll--horizontal", "table__scroll--vertical"],
  [
    "none"
    /* NONE */
  ]: []
};
function tableScrollClasses(val) {
  return scrollClasses[val];
}
function dispatchComponentValidityEvent(element, detail) {
  element.dispatchEvent(new CustomEvent("component-validity", {
    detail,
    bubbles: true
  }));
}
function dispatchComponentUnmountEvent(element) {
  const event = new CustomEvent("component-unmount", {
    detail: {
      elementId: element.id
    },
    bubbles: true
  });
  element.dispatchEvent(event);
}
function refIsElement(value) {
  return value instanceof Element;
}
function refIsElementArray(value) {
  return Array.isArray(value) && value.length > 0 && value[0] instanceof Element;
}
function refIsHTMLElementArray(value) {
  return Array.isArray(value) && value.length > 0 && value[0] instanceof HTMLElement;
}
function refIsVue(value) {
  return (value == null ? void 0 : value.$el) !== void 0;
}
function refIsVueArray(value) {
  return Array.isArray(value) && value.length > 0 && refIsVue(value[0]);
}
function getElementsFromVueRef(ref2) {
  let result = [];
  if (refIsVueArray(ref2)) {
    result = ref2.map((vueRef) => vueRef.$el);
  } else if (refIsElementArray(ref2)) {
    result = ref2;
  } else if (isSet(ref2)) {
    result = [getElementFromVueRef(ref2)];
  }
  return result;
}
function getSortedHTMLElementsFromVueRef(ref2) {
  const htmlElements = getHTMLElementsFromVueRef(ref2);
  htmlElements.sort((lhs, rhs) => {
    const lhsIndex = parseIntOrDefault(lhs.dataset.refIndex, -Infinity);
    const rhsIndex = parseIntOrDefault(rhs.dataset.refIndex, -Infinity);
    return lhsIndex === rhsIndex ? 0 : lhsIndex - rhsIndex;
  });
  return htmlElements;
}
function parseIntOrDefault(value, defaultValue) {
  if (typeof value === "string") {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      return parsed;
    }
  }
  return defaultValue;
}
function getHTMLElementsFromVueRef(ref2) {
  let result = [];
  if (isEmptyArray(ref2)) {
    result = [];
  } else if (refIsVueArray(ref2)) {
    result = ref2.map((vueRef) => vueRef.$el);
  } else if (refIsHTMLElementArray(ref2)) {
    result = [...ref2];
  } else if (isSet(ref2)) {
    result = [getHTMLElementFromVueRef(ref2)];
  }
  return result;
}
function isEmptyArray(value) {
  return Array.isArray(value) && value.length === 0;
}
function findElementFromVueRef(ref2) {
  if (refIsElement(ref2)) {
    return ref2;
  } else if (refIsVue(ref2)) {
    return ref2.$el;
  }
}
function findHTMLElementFromVueRef(ref2) {
  const result = findElementFromVueRef(ref2);
  if (result instanceof HTMLElement) {
    return result;
  }
  return void 0;
}
function getElementFromVueRef(ref2) {
  const element = findElementFromVueRef(ref2);
  if (!isSet(element)) {
    throw new Error(`Unable to find element from ${ref2}.`);
  }
  return element;
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
  return () => cache !== null && cache !== void 0 ? cache : cache = fn2();
}
var eventTarget = lazyLoad(() => new EventTarget());
var fn = /* @__PURE__ */ new Map();
function $emit(type, ...args) {
  const event = new CustomEvent(type, {
    detail: args
  });
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
var EventBus = {
  $emit,
  $on,
  $off
};
var FKUIConfigButtonOrder = /* @__PURE__ */ ((FKUIConfigButtonOrder2) => {
  FKUIConfigButtonOrder2[FKUIConfigButtonOrder2["LEFT_TO_RIGHT"] = 0] = "LEFT_TO_RIGHT";
  FKUIConfigButtonOrder2[FKUIConfigButtonOrder2["RIGHT_TO_LEFT"] = 1] = "RIGHT_TO_LEFT";
  return FKUIConfigButtonOrder2;
})(FKUIConfigButtonOrder || {});
var popupContainer = document.body;
var production = true;
var config = {
  buttonOrder: FKUIConfigButtonOrder.RIGHT_TO_LEFT,
  teleportTarget: document.body,
  get popupContainer() {
    if (typeof popupContainer === "string") {
      const element = document.querySelector(popupContainer);
      if (!element) {
        throw new Error(`Failed to find popupContainer element from selector "${popupContainer}"`);
      }
      return element;
    } else {
      return popupContainer;
    }
  },
  set popupContainer(value) {
    popupContainer = value;
  },
  set production(value) {
    production = value;
    configLogic.production = value;
  },
  get production() {
    return production;
  }
};
function setRunningContext(app) {
  const fkuiContext = {
    appContext: app._context
  };
  app.config.globalProperties.$fkui = fkuiContext;
}
function getRunningContext(callingInstance) {
  if (!callingInstance.$fkui) {
    throw new Error("Application running context is unset. Call `setRunningContext(app)` after `app = createApp(..)`.");
  }
  return callingInstance.$fkui;
}
function getTargetElement(target) {
  if (!target) {
    return document.body;
  }
  if (typeof target !== "string") {
    return target;
  }
  const element = document.querySelector(target);
  if (!element) {
    throw new Error(`mountComponent(..) requires a target element (selector "${target}" returned no element)`);
  }
  return element;
}
function createContainer(options) {
  const {
    attachTo,
    attachFirst
  } = options;
  const parent = getTargetElement(attachTo);
  const element = document.createElement("div");
  if (attachFirst) {
    parent.insertBefore(element, parent.firstChild);
  } else {
    parent.appendChild(element);
  }
  return element;
}
function mountComponent(callingInstance, Component, options = {}) {
  if (!Component) {
    throw new Error("mountComponent(..) called without a component");
  }
  const {
    attachTo,
    attachFirst = false,
    ...data
  } = options;
  const el = createContainer({
    attachTo,
    attachFirst
  });
  const app = createApp(Component, data);
  const fkuiContext = getRunningContext(callingInstance);
  if (fkuiContext) {
    Object.assign(app._context, fkuiContext.appContext);
  }
  app.mount(el);
  const unmount = app.unmount;
  app.unmount = () => {
    unmount.call(app);
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  };
  return app;
}
function unpackPayload(event, src) {
  const defaultPayload = {};
  const {
    reason = event,
    data: rawData
  } = src !== null && src !== void 0 ? src : defaultPayload;
  const data = rawData;
  return {
    reason,
    data
  };
}
function openModal(callingInstance, Component, options) {
  if (typeof options === "string") {
    return openModal(callingInstance, Component, {
      props: {
        content: options
      }
    });
  }
  const defaultOptions2 = {
    attachTo: config.teleportTarget,
    props: {}
  };
  const {
    attachTo,
    props
  } = {
    ...defaultOptions2,
    ...options
  };
  return new Promise((resolve, reject) => {
    const terminate = (event, payload) => {
      try {
        const result = unpackPayload(event, payload);
        app.unmount();
        resolve(result);
      } catch (err) {
        console.error(err);
        reject(err);
      }
    };
    const app = mountComponent(callingInstance, Component, {
      attachTo,
      isOpen: true,
      onClose(data) {
        terminate("close", data);
      },
      ...props
    });
  });
}
async function formModal(callingInstance, Component, options) {
  var _options$size;
  const props = {
    size: (_options$size = options == null ? void 0 : options.size) !== null && _options$size !== void 0 ? _options$size : "",
    ...options == null ? void 0 : options.props
  };
  const result = await openModal(callingInstance, Component, {
    props
  });
  if (result.reason === "submit") {
    return result.data;
  } else {
    return Promise.reject("cancel");
  }
}
var ModalReason = /* @__PURE__ */ ((ModalReason2) => {
  ModalReason2["CONFIRM"] = "confirm";
  ModalReason2["DISMISS"] = "dismiss";
  return ModalReason2;
})(ModalReason || {});
var sizes = ["", "small", "medium", "large", "fullscreen", "fullwidth"];
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
    focus$1(element);
  }
}
function focusRadioButtonGroup(element, container) {
  const radioGroupInputs = container.querySelectorAll(`input[type="radio"][name="${element.name}"]`);
  const checkedRadioButton = Array.from(radioGroupInputs).find((inputEl) => inputEl.checked);
  if (checkedRadioButton) {
    focus$1(checkedRadioButton);
  } else {
    focus$1(element);
  }
}
function elementIsRadioButton(element) {
  return isHTMLInputElement(element) && element.type === "radio";
}
function isHTMLInputElement(element) {
  return element instanceof HTMLInputElement;
}
var _sfc_main$1k = defineComponent({
  name: "FModal",
  components: {
    FIcon
  },
  mixins: [TranslationMixin],
  inheritAttrs: true,
  props: {
    /**
     * The id for the root element id attribute.
     * If the prop is not set a random value will be generated.
     */
    id: {
      type: String,
      required: false,
      default: () => ElementIdService.generateElementId()
    },
    /**
     * If the modal is open.
     * Use this to toggle if the modal should be visible or not.
     */
    isOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * The aria-label attribute text for the top right close button.
     */
    ariaCloseText: {
      type: String,
      required: false,
      default: void 0
    },
    /**
     * Enable fullscreen mode in mobile.
     */
    fullscreen: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * The type of modal. 'information', 'warning' and 'error' is valid.
     */
    type: {
      type: String,
      default: "",
      validator(value) {
        return ["", "information", "warning", "error"].includes(value);
      }
    },
    /**
     * The size of modal in desktop mode.
     */
    size: {
      type: String,
      default: "",
      validator(value) {
        return sizes.includes(value);
      }
    },
    /**
     * Default behavior is that the modal will restore focus to previous element once closed.
     * - "on" (default) - component will set focus both when opened and closed
     * - "off" - focus strategy disabled
     * - "open" - focus will only be applied once modal is opened
     */
    focus: {
      type: String,
      default: "on",
      validator(value) {
        return ["on", "off", "open"].includes(value);
      }
    }
  },
  emits: ["close"],
  data() {
    return {
      nonModalFocusableElements: [],
      savedFocus: null,
      savedScroll: null
    };
  },
  computed: {
    modalClass() {
      return this.type ? [`modal--${this.type}`] : [];
    },
    containerClasses() {
      const size = sizeClass(this.size);
      if (this.fullscreen) {
        return [...size, "modal__dialog-container--fullscreen"];
      } else {
        return size;
      }
    },
    hasHeaderSlot() {
      return hasSlot(this, "header");
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      async handler(value) {
        if (value) {
          await this.$nextTick();
          this.openModal();
        } else {
          this.restoreState();
        }
      }
    }
  },
  beforeUnmount() {
    this.restoreState();
  },
  methods: {
    onClose() {
      this.$emit("close");
    },
    openModal() {
      const root = document.documentElement;
      const scroll = root.scrollTop;
      root.style.top = `-${scroll}px`;
      root.style.left = "0";
      root.style.right = "0";
      root.style.overflow = "hidden";
      root.style.position = "fixed";
      const focusElement2 = this.resolveFocusElement();
      if (this.focus === "on") {
        this.savedFocus = pushFocus(focusElement2);
        this.savedScroll = scroll;
      } else if (this.focus === "open") {
        focus$1(focusElement2);
      }
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
      const root = document.documentElement;
      root.style.removeProperty("top");
      root.style.removeProperty("left");
      root.style.removeProperty("right");
      root.style.removeProperty("overflow");
      root.style.removeProperty("position");
      if (this.focus === "on" && this.savedFocus) {
        var _this$savedScroll;
        root.scrollTop = (_this$savedScroll = this.savedScroll) !== null && _this$savedScroll !== void 0 ? _this$savedScroll : 0;
        this.savedScroll = null;
        popFocus(this.savedFocus);
        this.savedFocus = null;
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
  }
});
var _hoisted_1$_ = ["id"];
var _hoisted_2$J = {
  class: "modal__backdrop"
};
var _hoisted_3$z = {
  class: "modal__inner-container"
};
var _hoisted_4$s = {
  class: "modal__dialog"
};
var _hoisted_5$n = {
  class: "modal__dialog-inner"
};
var _hoisted_6$h = {
  class: "modal__header"
};
var _hoisted_7$c = {
  key: 0,
  ref: "modalTitle",
  class: "modal__title",
  tabindex: "-1"
};
var _hoisted_8$8 = {
  ref: "modalContent",
  class: "modal__content",
  tabindex: "-1"
};
var _hoisted_9$6 = {
  class: "modal__footer"
};
var _hoisted_10$3 = {
  class: "modal__shelf"
};
var _hoisted_11$3 = ["aria-label"];
function _sfc_render$P(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  return _ctx.isOpen ? (openBlock(), createElementBlock("div", {
    key: 0,
    id: _ctx.id,
    class: normalizeClass(["modal", _ctx.modalClass])
  }, [createElementVNode("div", _hoisted_2$J, [createElementVNode("div", {
    class: "modal__outer-container scroll-target",
    tabindex: "-1",
    role: "dialog",
    "aria-modal": "true",
    onKeyup: _cache[3] || (_cache[3] = withKeys((...args) => _ctx.onClose && _ctx.onClose(...args), ["esc"]))
  }, [createElementVNode("div", _hoisted_3$z, [createElementVNode("div", {
    ref: "modalDialogContainer",
    class: normalizeClass(["modal__dialog-container", _ctx.containerClasses])
  }, [createElementVNode("div", _hoisted_4$s, [createElementVNode("div", _hoisted_5$n, [createElementVNode("div", _hoisted_6$h, [createElementVNode("div", {
    tabindex: "0",
    onFocus: _cache[0] || (_cache[0] = (...args) => _ctx.onFocusFirst && _ctx.onFocusFirst(...args))
  }, null, 32), _cache[4] || (_cache[4] = createTextVNode()), _ctx.hasHeaderSlot ? (openBlock(), createElementBlock("h1", _hoisted_7$c, [renderSlot(_ctx.$slots, "header")], 512)) : createCommentVNode("", true)]), _cache[5] || (_cache[5] = createTextVNode()), createElementVNode("div", _hoisted_8$8, [renderSlot(_ctx.$slots, "content")], 512), _cache[6] || (_cache[6] = createTextVNode()), createElementVNode("div", _hoisted_9$6, [renderSlot(_ctx.$slots, "footer")])]), _cache[9] || (_cache[9] = createTextVNode()), createElementVNode("div", _hoisted_10$3, [createElementVNode("button", {
    type: "button",
    class: "close-button",
    "aria-label": _ctx.ariaCloseText,
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onClose && _ctx.onClose(...args))
  }, [createElementVNode("span", null, toDisplayString(_ctx.$t("fkui.modal.close", "St\xE4ng")), 1), _cache[7] || (_cache[7] = createTextVNode()), createVNode(_component_f_icon, {
    name: "close"
  })], 8, _hoisted_11$3), _cache[8] || (_cache[8] = createTextVNode()), createElementVNode("div", {
    tabindex: "0",
    onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.onFocusLast && _ctx.onFocusLast(...args))
  }, null, 32)])])], 2)])], 32)])], 10, _hoisted_1$_)) : createCommentVNode("", true);
}
var FModal = /* @__PURE__ */ _export_sfc(_sfc_main$1k, [["render", _sfc_render$P]]);
function prepareButtonList(src) {
  return src.map((it) => {
    var _it$event, _ref, _it$reason, _it$type;
    return {
      label: it.label,
      screenreader: it.screenreader,
      event: (_it$event = it.event) !== null && _it$event !== void 0 ? _it$event : "dismiss",
      reason: (_ref = (_it$reason = it.reason) !== null && _it$reason !== void 0 ? _it$reason : it.event) !== null && _ref !== void 0 ? _ref : "dismiss",
      classlist: ["button", `button--${(_it$type = it.type) !== null && _it$type !== void 0 ? _it$type : "secondary"}`],
      buttonType: it.submitButton ? "submit" : "button"
    };
  });
}
var defaultButtons = [{
  label: "Prim\xE4rknapp",
  event: "confirm",
  type: "primary"
}, {
  label: "Sekund\xE4rknapp",
  event: "dismiss",
  type: "secondary"
}];
var _sfc_main$1j = defineComponent({
  name: "FConfirmModal",
  components: {
    FModal
  },
  inheritAttrs: true,
  props: {
    /**
     * Enable fullscreen mode in mobile.
     */
    fullscreen: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * Prop for opening modal
     */
    isOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * Simple text content
     */
    content: {
      type: String,
      required: false,
      default: "Br\xF6dtext"
    },
    /**
     * Simple text header
     */
    heading: {
      type: String,
      required: false,
      default: "Rubrik"
    },
    /**
     * The size of modal. 'large' and 'fullscreen' is valid.
     */
    size: {
      type: String,
      default: "",
      validator(value) {
        return sizes.includes(value);
      }
    },
    /**
     * The aria-label attribute text for the top right close button.
     */
    ariaCloseText: {
      type: String,
      required: false,
      default: void 0
    },
    /**
     * List of buttons
     */
    buttons: {
      type: Array,
      required: false,
      default: () => {
        return defaultButtons;
      }
    },
    /**
     * Default behavior is that the modal will restore focus to previous element once closed.
     * - "on" (default) - component will set focus both when opened and closed
     * - "off" - focus strategy disabled
     * - "open" - focus will only be applied once modal is opened
     */
    focus: {
      type: String,
      default: "on",
      validator(value) {
        return ["on", "off", "open"].includes(value);
      }
    }
  },
  emits: ["close", ...defaultButtons.map((it) => {
    var _it$event;
    return (_it$event = it.event) !== null && _it$event !== void 0 ? _it$event : "";
  })],
  computed: {
    preparedButtons() {
      const preparedButtonList = prepareButtonList(this.buttons);
      return config.buttonOrder === FKUIConfigButtonOrder.RIGHT_TO_LEFT ? preparedButtonList.reverse() : preparedButtonList;
    }
  },
  methods: {
    onClose() {
      this.$emit("close", {
        reason: "close"
      });
    },
    onClick(button) {
      this.$emit(button.event);
      this.$emit("close", {
        reason: button.reason
      });
    }
  }
});
var _hoisted_1$Z = {
  class: "button-group"
};
var _hoisted_2$I = ["onClick"];
var _hoisted_3$y = {
  key: 0,
  class: "sr-only"
};
function _sfc_render$O(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_modal = resolveComponent("f-modal");
  return openBlock(), createBlock(_component_f_modal, {
    fullscreen: _ctx.fullscreen,
    "is-open": _ctx.isOpen,
    "aria-close-text": _ctx.ariaCloseText,
    type: "warning",
    size: _ctx.size,
    focus: _ctx.focus,
    onClose: _ctx.onClose
  }, {
    header: withCtx(() => [renderSlot(_ctx.$slots, "heading", {}, () => [createTextVNode(toDisplayString(_ctx.heading), 1)])]),
    content: withCtx(() => [renderSlot(_ctx.$slots, "content", {}, () => [createTextVNode(toDisplayString(_ctx.content), 1)])]),
    footer: withCtx(() => [createElementVNode("div", _hoisted_1$Z, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.preparedButtons, (button) => {
      return openBlock(), createElementBlock("button", {
        key: button.label,
        type: "button",
        class: normalizeClass([button.classlist, "button-group__item"]),
        onClick: ($event) => _ctx.onClick(button)
      }, [createElementVNode("span", null, toDisplayString(button.label), 1), _cache[0] || (_cache[0] = createTextVNode()), button.screenreader ? (openBlock(), createElementBlock("span", _hoisted_3$y, "\xA0" + toDisplayString(button.screenreader), 1)) : createCommentVNode("", true)], 10, _hoisted_2$I);
    }), 128))])]),
    _: 3,
    __: [1, 2]
  }, 8, ["fullscreen", "is-open", "aria-close-text", "size", "focus", "onClose"]);
}
var FConfirmModal = /* @__PURE__ */ _export_sfc(_sfc_main$1j, [["render", _sfc_render$O]]);
var GAP = ["1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x"];
var ALIGNMENT = ["top", "center", "bottom"];
var FLOAT = ["left", "center", "right"];
var _sfc_main$1i = defineComponent({
  name: "IFlex",
  inheritAttrs: true,
  props: {
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
    gap: {
      type: String,
      default: "",
      validator(val) {
        return val === "" || GAP.includes(val);
      }
    },
    /**
     * If set the IFlexItems will be fullwidth and
     * stacked on top of each other when breakpoint is small (aka mobile).
     */
    collapse: {
      type: Boolean,
      default: false
    },
    /**
     * If set the IFlexItems will wrap when out of space
     */
    wrap: {
      type: Boolean,
      default: false
    },
    /**
     * Set how IFlexItems should float.
     *
     * Must be one of:
     *
     * - `"left"`
     * - `"center"`
     * - `"right"`
     */
    float: {
      type: String,
      default: "",
      validator(val) {
        return val === "" || FLOAT.includes(val);
      }
    }
  },
  computed: {
    classList() {
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
    }
  }
});
function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["iflex", _ctx.classList])
  }, [renderSlot(_ctx.$slots, "default")], 2);
}
var IFlex = /* @__PURE__ */ _export_sfc(_sfc_main$1i, [["render", _sfc_render$N]]);
var _sfc_main$1h = defineComponent({
  name: "IFlexItem",
  inheritAttrs: true,
  props: {
    /**
     * If set this item will grow to its largest possible size.
     */
    grow: {
      type: Boolean,
      default: false
    },
    /**
     * If set this item will shrink to its smallest possible size.
     */
    shrink: {
      type: Boolean,
      default: false
    },
    /**
     * Vertical positioning of content.
     *
     * Must be one of:
     *
     * - `"top"`
     * - `"center"`
     * - `"bottom"`
     */
    align: {
      type: String,
      default: "top",
      validator(val) {
        return ALIGNMENT.includes(val);
      }
    }
  },
  computed: {
    classList() {
      const classList = [`iflex--align-${this.align}`];
      if (this.grow) {
        classList.push("iflex--grow");
      } else if (this.shrink) {
        classList.push("iflex--shrink");
      }
      return classList;
    }
  }
});
function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["iflex__item", _ctx.classList])
  }, [renderSlot(_ctx.$slots, "default")], 2);
}
var IFlexItem = /* @__PURE__ */ _export_sfc(_sfc_main$1h, [["render", _sfc_render$M]]);
function focusError(item) {
  const element = document.querySelector(`#${item.id}`);
  if (!element) {
    throw new Error(`Can not find element with id "${item.id}"`);
  }
  const focusElement2 = document.querySelector(`#${item.focusElementId}`);
  scrollTo(element, window.innerHeight * 0.25);
  focus$1(focusElement2 ? focusElement2 : element);
}
var _sfc_main$1g = defineComponent({
  name: "FErrorList",
  components: {
    FIcon,
    IFlex,
    IFlexItem
  },
  props: {
    /**
     * List of errors of type `ErrorItem`.
     * If element id is unspecified, no link will be rendered.
     * If element with id don't exist on navigation, an exception is thrown.
     */
    items: {
      type: Array,
      required: true
    },
    /**
     * Display bullets in list.
     */
    bullets: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * Optional callback for performing actions before navigation.
     */
    beforeNavigate: {
      type: Function,
      required: false,
      default() {
        return () => {
        };
      }
    }
  },
  computed: {
    hasTitleSlot() {
      return hasSlot(this, "title");
    }
  },
  methods: {
    liClasses(errorItem) {
      const classes = [];
      if (!this.bullets && errorItem.id) {
        classes.push("error-list__link");
      }
      return classes;
    },
    async onClickItem(item) {
      await this.beforeNavigate(item);
      focusError(item);
    }
  }
});
var _hoisted_1$Y = {
  class: "error-list"
};
var _hoisted_2$H = {
  key: 0
};
var _hoisted_3$x = {
  class: "error-list__list error-list--list-style-none"
};
var _hoisted_4$r = ["onClick"];
var _hoisted_5$m = {
  class: "error-list__link"
};
function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  const _component_i_flex_item = resolveComponent("i-flex-item");
  const _component_i_flex = resolveComponent("i-flex");
  return openBlock(), createElementBlock("div", _hoisted_1$Y, [createVNode(_component_i_flex, null, {
    default: withCtx(() => [_ctx.hasTitleSlot ? (openBlock(), createBlock(_component_i_flex_item, {
      key: 0,
      shrink: ""
    }, {
      default: withCtx(() => [createVNode(_component_f_icon, {
        class: "error-list__icon",
        name: "error"
      })]),
      _: 1
    })) : createCommentVNode("", true), _cache[6] || (_cache[6] = createTextVNode()), _ctx.hasTitleSlot ? (openBlock(), createBlock(_component_i_flex_item, {
      key: 1,
      shrink: ""
    }, {
      default: withCtx(() => _cache[0] || (_cache[0] = [createTextVNode("\xA0")])),
      _: 1,
      __: [0]
    })) : createCommentVNode("", true), _cache[7] || (_cache[7] = createTextVNode()), createVNode(_component_i_flex_item, {
      grow: ""
    }, {
      default: withCtx(() => [_ctx.hasTitleSlot ? (openBlock(), createElementBlock("div", _hoisted_2$H, [renderSlot(_ctx.$slots, "title")])) : createCommentVNode("", true), _cache[5] || (_cache[5] = createTextVNode()), createElementVNode("ul", _hoisted_3$x, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
        return openBlock(), createElementBlock("li", {
          key: item.id,
          class: normalizeClass(_ctx.liClasses(item))
        }, [item.id ? (openBlock(), createElementBlock("a", {
          key: 0,
          href: "javascript:",
          onClick: withModifiers(($event) => _ctx.onClickItem(item), ["prevent"])
        }, [_ctx.bullets ? (openBlock(), createElementBlock(Fragment, {
          key: 0
        }, [_cache[1] || (_cache[1] = createElementVNode("span", {
          class: "error-list__bullet",
          "aria-hidden": "true"
        }, null, -1)), _cache[2] || (_cache[2] = createTextVNode()), createElementVNode("span", _hoisted_5$m, toDisplayString(item.title), 1)], 64)) : (openBlock(), createElementBlock(Fragment, {
          key: 1
        }, [createTextVNode(toDisplayString(item.title), 1)], 64))], 8, _hoisted_4$r)) : (openBlock(), createElementBlock(Fragment, {
          key: 1
        }, [_ctx.bullets ? (openBlock(), createElementBlock(Fragment, {
          key: 0
        }, [_cache[3] || (_cache[3] = createElementVNode("span", {
          class: "error-list__bullet",
          "aria-hidden": "true"
        }, null, -1)), _cache[4] || (_cache[4] = createTextVNode()), createElementVNode("span", null, toDisplayString(item.title), 1)], 64)) : (openBlock(), createElementBlock(Fragment, {
          key: 1
        }, [createTextVNode(toDisplayString(item.title), 1)], 64))], 64))], 2);
      }), 128))])]),
      _: 3,
      __: [5]
    })]),
    _: 3,
    __: [6, 7]
  })]);
}
var FErrorList = /* @__PURE__ */ _export_sfc(_sfc_main$1g, [["render", _sfc_render$L]]);
var es_iterator_every = {};
var hasRequiredEs_iterator_every;
function requireEs_iterator_every() {
  if (hasRequiredEs_iterator_every) return es_iterator_every;
  hasRequiredEs_iterator_every = 1;
  var $ = require_export();
  var call = requireFunctionCall();
  var iterate2 = requireIterate();
  var aCallable2 = requireACallable();
  var anObject2 = requireAnObject();
  var getIteratorDirect2 = requireGetIteratorDirect();
  var iteratorClose2 = requireIteratorClose();
  var iteratorHelperWithoutClosingOnEarlyError2 = requireIteratorHelperWithoutClosingOnEarlyError();
  var everyWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError2("every", TypeError);
  $({
    target: "Iterator",
    proto: true,
    real: true,
    forced: everyWithoutClosingOnEarlyError
  }, {
    every: function every(predicate) {
      anObject2(this);
      try {
        aCallable2(predicate);
      } catch (error) {
        iteratorClose2(this, "throw", error);
      }
      if (everyWithoutClosingOnEarlyError) return call(everyWithoutClosingOnEarlyError, this, predicate);
      var record = getIteratorDirect2(this);
      var counter = 0;
      return !iterate2(record, function(value, stop) {
        if (!predicate(value, counter++)) return stop();
      }, {
        IS_RECORD: true,
        INTERRUPTED: true
      }).stopped;
    }
  });
  return es_iterator_every;
}
requireEs_iterator_every();
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
    filter: function filter2(predicate) {
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
function cleanUpElements(vm) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      Object.keys(vm.components).forEach((id) => {
        const domElement = vm.$el.querySelector(`#${id}`);
        if (!domElement) {
          delete vm.components[id];
        }
      });
      resolve();
    }, 0);
  });
}
var _sfc_main$1f = defineComponent({
  name: "FValidationGroup",
  props: {
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
    modelValue: {
      type: Object,
      required: false,
      default: () => {
        return {
          isValid: false,
          componentsWithError: [],
          componentCount: 0
        };
      }
    },
    /**
     * Controls whether component-validity event should be propagated or not from underlying components.
     */
    stopPropagation: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["group-validity", "update:modelValue"],
  data() {
    return {
      components: {}
    };
  },
  methods: {
    onComponentUnmount(event) {
      delete this.components[event.detail.elementId];
      this.triggerGroupValidityEvent();
    },
    async onComponentValidity(event) {
      if (this.stopPropagation) {
        event.stopPropagation();
      }
      await cleanUpElements(this);
      this.components[event.detail.elementId] = event.detail;
      this.triggerGroupValidityEvent();
    },
    triggerGroupValidityEvent() {
      const components = Object.values(this.components);
      const isValid = components.every((component) => component.isValid);
      const componentsWithError = components.filter((component) => component.validityMode === "ERROR");
      componentsWithError.sort((a, b) => documentOrderComparator(a.target, b.target));
      this.$emit("update:modelValue", {
        isValid,
        componentsWithError,
        componentCount: components.length
      });
      this.$emit("group-validity", {
        isValid,
        componentsWithError,
        componentCount: components.length
      });
    }
  }
});
function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    onComponentValidity: _cache[0] || (_cache[0] = (...args) => _ctx.onComponentValidity && _ctx.onComponentValidity(...args)),
    onComponentUnmount: _cache[1] || (_cache[1] = (...args) => _ctx.onComponentUnmount && _ctx.onComponentUnmount(...args))
  }, [renderSlot(_ctx.$slots, "default")], 32);
}
var FValidationGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1f, [["render", _sfc_render$K]]);
var FValidationFormAction = /* @__PURE__ */ ((FValidationFormAction2) => {
  FValidationFormAction2[FValidationFormAction2["CONTINUE"] = 0] = "CONTINUE";
  FValidationFormAction2[FValidationFormAction2["CANCEL"] = 1] = "CANCEL";
  return FValidationFormAction2;
})(FValidationFormAction || {});
var _sfc_main$1e = defineComponent({
  name: "FValidationForm",
  components: {
    FValidationGroup,
    FErrorList
  },
  inheritAttrs: false,
  props: {
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
    beforeSubmit: {
      type: Function,
      required: false,
      default() {
        return () => void 0;
      }
    },
    /**
     * If given, this function is called before the form data is validated and the `submit` event is emitted.
     */
    beforeValidation: {
      type: Function,
      required: false,
      default() {
        return () => void 0;
      }
    },
    /**
     * The id for the form id attribute.
     * If the prop is not set a random value will be generated.
     */
    id: {
      type: String,
      required: false,
      default: () => ElementIdService.generateElementId()
    },
    /**
     * Include the error list component.
     */
    useErrorList: {
      type: Boolean,
      required: false,
      default: true
    },
    /**
     * Display bullets in the error list component.
     */
    errorListBullets: {
      type: Boolean,
      required: false,
      default: true
    },
    /**
     *Optional callback function to the error list component for performing actions before navigation.
     */
    errorListBeforeNavigate: {
      type: Function,
      required: false,
      default() {
        return () => {
        };
      }
    }
  },
  emits: ["submit"],
  data() {
    return {
      validity: {
        isValid: true,
        componentsWithError: [],
        componentCount: 0
      },
      submitted: false
    };
  },
  computed: {
    groupKey() {
      return `${this.id}-group`;
    },
    errors() {
      return this.validity.componentsWithError.map((c) => ({
        id: c.elementId,
        focusElementId: c.focusElementId,
        title: c.errorMessage
      }));
    },
    displayErrors() {
      return this.useErrorList && this.submitted && this.errors.length > 0;
    }
  },
  methods: {
    async hasFormErrors() {
      ValidationService.setSubmitted(this.id);
      await ValidationService.validateAllElements(this.id);
      await this.$nextTick();
      await new Promise((resolve) => window.setTimeout(resolve, 0));
      if (this.validity.isValid) {
        return false;
      }
      if (this.useErrorList) {
        focus$1(this.$refs.errors);
      } else {
        const firstError = this.validity.componentsWithError[0];
        const element = document.getElementById(firstError.focusElementId);
        focus$1(element);
      }
      return true;
    },
    async onSubmit(event) {
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
    }
  }
});
var _hoisted_1$X = ["id"];
var _hoisted_2$G = {
  key: 0,
  ref: "errors",
  tabindex: "-1",
  role: "group"
};
function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_error_list = resolveComponent("f-error-list");
  const _component_f_validation_group = resolveComponent("f-validation-group");
  return openBlock(), createBlock(_component_f_validation_group, {
    key: _ctx.groupKey,
    modelValue: _ctx.validity,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.validity = $event),
    "stop-propagation": true
  }, {
    default: withCtx(() => [createElementVNode("form", mergeProps({
      id: _ctx.id
    }, _ctx.$attrs, {
      novalidate: "",
      autocomplete: "off",
      onSubmit: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.onSubmit && _ctx.onSubmit(...args), ["prevent"]))
    }), [_ctx.displayErrors ? (openBlock(), createElementBlock("nav", _hoisted_2$G, [createVNode(_component_f_error_list, {
      items: _ctx.errors,
      bullets: _ctx.errorListBullets,
      "before-navigate": _ctx.errorListBeforeNavigate
    }, {
      title: withCtx(() => [renderSlot(_ctx.$slots, "error-message")]),
      _: 3
    }, 8, ["items", "bullets", "before-navigate"])], 512)) : createCommentVNode("", true), _cache[2] || (_cache[2] = createTextVNode()), renderSlot(_ctx.$slots, "default")], 16, _hoisted_1$X)]),
    _: 3
  }, 8, ["modelValue"]);
}
var FValidationForm = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["render", _sfc_render$J]]);
var _sfc_main$1d = defineComponent({
  name: "FFormModal",
  components: {
    FModal,
    FValidationForm
  },
  mixins: [TranslationMixin],
  inheritAttrs: true,
  props: {
    /**
     * Enable fullscreen mode in mobile.
     */
    fullscreen: {
      type: Boolean,
      required: false,
      default: true
    },
    /**
     * If the modal is open.
     * Use this to toggle if the modal should be visible or not.
     */
    isOpen: {
      type: Boolean,
      required: false,
      default: true
    },
    /**
     * See <f-modal> `size` props.
     */
    size: {
      type: String,
      default: "",
      validator(value) {
        return sizes.includes(value);
      }
    },
    /**
     * @ignore
     */
    dataTest: {
      type: String,
      required: false,
      default: ""
    },
    /**
     * The data that has been submitted.
     */
    value: {
      type: Object,
      default: function() {
        return {};
      }
    },
    /**
     * Include the error list component.
     */
    useErrorList: {
      type: Boolean,
      required: false,
      default: true
    },
    /**
     * The id for the form id attribute.
     * If the prop is not set a random value will be generated.
     */
    formId: {
      type: String,
      required: false,
      default: () => ElementIdService.generateElementId()
    },
    /**
     * The aria-label attribute text for the top right close button.
     */
    ariaCloseText: {
      type: String,
      required: false,
      default: void 0
    },
    /**
     * If given, this function is called before the [[submit]] event is emitted.
     * See <f-validation-form> `beforeSubmit` props for more info.
     */
    beforeSubmit: {
      type: Function,
      required: false,
      default() {
      }
    },
    /**
     * If given, this function is called before the form data is validated and the [[submit]] event is emitted.
     * See <f-validation-form> `beforeValidation` props for more info.
     */
    beforeValidation: {
      type: Function,
      required: false,
      default() {
      }
    },
    /**
     * List of buttons to display in the modal.
     * Each button is defined as an FModalButtonDescriptor with the following properties:
     * - `label` (String): The text displayed on the button.
     * - `event` (String): The event emitted when the button is clicked.
     * - `type` (String): The button type. Valid values are: "primary" or "secondary".
     * - `submitButton` (Boolean): Whether the button is a submit button.
     */
    buttons: {
      type: Array,
      required: false,
      default: () => [{
        label: TranslationService.provider.translate("fkui.form-modal.button.submit.text", "Spara"),
        event: "submit",
        type: "primary",
        submitButton: true
      }, {
        label: TranslationService.provider.translate("fkui.form-modal.button.cancel.text", "Avbryt"),
        event: "dismiss",
        type: "secondary"
      }]
    }
  },
  emits: ["cancel", "close", "submit"],
  data() {
    return {};
  },
  computed: {
    preparedButtons() {
      return prepareButtonList(this.buttons);
    }
  },
  methods: {
    onClose() {
      ValidationService.resetState(this.$el);
      this.$emit("cancel");
      this.$emit("close", {
        reason: "close"
      });
    },
    async onSubmit() {
      ValidationService.resetState(this.$el);
      this.$emit("submit", {
        data: this.value
      });
      this.$emit("close", {
        reason: "submit",
        data: this.value
      });
    },
    onCancel() {
      ValidationService.resetState(this.$el);
      this.$emit("cancel");
      this.$emit("close", {
        reason: "close"
      });
    }
  }
});
var _hoisted_1$W = {
  class: "button-group"
};
var _hoisted_2$F = ["type", "form", "onClick"];
var _hoisted_3$w = {
  key: 0,
  class: "sr-only"
};
function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_validation_form = resolveComponent("f-validation-form");
  const _component_f_modal = resolveComponent("f-modal");
  return openBlock(), createBlock(_component_f_modal, {
    "data-test": _ctx.dataTest,
    fullscreen: _ctx.fullscreen,
    "is-open": _ctx.isOpen,
    size: _ctx.size,
    "aria-close-text": _ctx.ariaCloseText,
    onClose: _ctx.onClose
  }, {
    header: withCtx(() => [renderSlot(_ctx.$slots, "header")]),
    content: withCtx(() => [createElementVNode("div", null, [renderSlot(_ctx.$slots, "default")]), _cache[1] || (_cache[1] = createTextVNode()), createVNode(_component_f_validation_form, {
      id: _ctx.formId,
      "before-submit": _ctx.beforeSubmit,
      "before-validation": _ctx.beforeValidation,
      "use-error-list": _ctx.useErrorList,
      onSubmit: _ctx.onSubmit,
      onCancel: _ctx.onCancel
    }, {
      "error-message": withCtx(() => [renderSlot(_ctx.$slots, "error-message")]),
      default: withCtx(() => [_cache[0] || (_cache[0] = createTextVNode()), renderSlot(_ctx.$slots, "input-text-fields")]),
      _: 3,
      __: [0]
    }, 8, ["id", "before-submit", "before-validation", "use-error-list", "onSubmit", "onCancel"])]),
    footer: withCtx(() => [createElementVNode("div", _hoisted_1$W, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.preparedButtons, (button) => {
      return openBlock(), createElementBlock("button", {
        key: button.label,
        type: button.buttonType,
        class: normalizeClass([button.classlist, "button-group__item"]),
        form: button.buttonType === "submit" ? _ctx.formId : void 0,
        onClick: ($event) => button.buttonType === "button" ? _ctx.onCancel() : false
      }, [createElementVNode("span", null, toDisplayString(button.label), 1), _cache[2] || (_cache[2] = createTextVNode()), button.screenreader ? (openBlock(), createElementBlock("span", _hoisted_3$w, "\xA0" + toDisplayString(button.screenreader), 1)) : createCommentVNode("", true)], 10, _hoisted_2$F);
    }), 128))])]),
    _: 3,
    __: [3, 4]
  }, 8, ["data-test", "fullscreen", "is-open", "size", "aria-close-text", "onClose"]);
}
var FFormModal = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["render", _sfc_render$I]]);
async function confirmModal(callingInstance, texts) {
  const buttons = [{
    label: texts.confirm,
    event: "confirm",
    type: "primary"
  }, {
    label: texts.dismiss,
    event: "dismiss",
    type: "secondary"
  }];
  const {
    reason
  } = await openModal(callingInstance, FConfirmModal, {
    props: {
      heading: texts.heading,
      content: texts.content,
      buttons
    }
  });
  return reason === "confirm";
}
function isVueComponent(element) {
  return Boolean(element && typeof element === "object" && "$el" in element);
}
function focus(element, options = {}) {
  if (Array.isArray(element)) {
    return focus(element[0], options);
  }
  if (isVueComponent(element)) {
    var _element$focusTarget;
    const targetElement = (_element$focusTarget = element.focusTarget) !== null && _element$focusTarget !== void 0 ? _element$focusTarget : element.$el;
    return focus(targetElement, options);
  }
  if (element instanceof HTMLElement) {
    focus$1(element, options);
    return true;
  }
  return false;
}
function getInputElement(vm) {
  const inputElement = vm.$el.querySelector("input");
  if (!inputElement) {
    const id = vm.$el.id;
    const tag = vm.$el.tagName.toLowerCase();
    throw new Error(`Could not find input element from element "${tag}#${id}"`);
  }
  return inputElement;
}
var defaultOptions = {
  stripClasses: ["sr-only"]
};
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
  return collapseWhitespace(getTextContent(nodes, {
    ...defaultOptions,
    ...options
  }));
}
function hasSlot(vm, name, props = {}, options = {}) {
  const slot = vm.$slots[name];
  return Boolean(renderSlotText(slot, props, options));
}
function useModal() {
  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error(`useModal(..) used outside component scope`);
  }
  const context = {
    $fkui: instance
  };
  return {
    openModal(component, options) {
      return openModal(context, component, options);
    },
    confirmModal(texts) {
      return confirmModal(context, texts);
    },
    formModal(component, options) {
      return formModal(context, component, options);
    }
  };
}
function findParentByName(vm, name) {
  let current = vm;
  while (current) {
    if (current.$options.name === name) {
      return current;
    }
    current = current.$parent;
  }
  return void 0;
}
function getParentByName(vm, name) {
  const parentVm = findParentByName(vm, name);
  if (parentVm === void 0) {
    throw new Error(`Unable to find parent component by given name '${name}'.`);
  }
  return parentVm;
}
function hasParentByName(vm, name) {
  return findParentByName(vm, name) !== void 0;
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
var ErrorData = class {
  constructor(error, vm, info) {
    _defineProperty(this, "error", void 0);
    _defineProperty(this, "vm", void 0);
    _defineProperty(this, "info", void 0);
    this.error = error;
    this.vm = vm;
    this.info = info;
  }
};
var ErrorViewData = class {
  constructor(hasError = false, payload) {
    _defineProperty(this, "hasError", void 0);
    _defineProperty(this, "payload", void 0);
    this.hasError = hasError;
    this.payload = payload;
  }
};
var FormErrorList = class {
  constructor(fields) {
    _defineProperty(this, "focusElementId", "");
    _defineProperty(this, "id", "");
    _defineProperty(this, "isValid", false);
    _defineProperty(this, "numberOfTimesSubmitted", 0);
    _defineProperty(this, "title", "");
    Object.assign(this, fields);
  }
};
var MenuAction = /* @__PURE__ */ ((MenuAction2) => {
  MenuAction2[MenuAction2["MOVE_NEXT"] = 0] = "MOVE_NEXT";
  MenuAction2[MenuAction2["MOVE_PREV"] = 1] = "MOVE_PREV";
  MenuAction2[MenuAction2["MOVE_FIRST"] = 2] = "MOVE_FIRST";
  MenuAction2[MenuAction2["MOVE_LAST"] = 3] = "MOVE_LAST";
  MenuAction2[MenuAction2["ACTIVATE"] = 4] = "ACTIVATE";
  return MenuAction2;
})(MenuAction || {});
function actionFromKeyboardEvent(event) {
  switch (event.key) {
    case "End":
      return MenuAction.MOVE_LAST;
    case "Home":
      return MenuAction.MOVE_FIRST;
    case "Up":
    case "ArrowUp":
      return MenuAction.MOVE_PREV;
    case "Down":
    case "ArrowDown":
      return MenuAction.MOVE_NEXT;
    case "Left":
    case "ArrowLeft":
      return MenuAction.MOVE_PREV;
    case "Right":
    case "ArrowRight":
      return MenuAction.MOVE_NEXT;
    case "Tab":
      if (event.shiftKey) {
        return MenuAction.MOVE_PREV;
      }
      return MenuAction.MOVE_NEXT;
    case " ":
    case "Spacebar":
    case "Enter":
      return MenuAction.ACTIVATE;
    default:
      return null;
  }
}
function getAbsolutePosition(src) {
  if (!src) {
    return void 0;
  }
  const isRoot = src.isSameNode(document.documentElement);
  if (isRoot) {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset,
      width: src.clientWidth,
      height: src.clientHeight
    };
  }
  const rect = src.getBoundingClientRect();
  return {
    x: Math.floor(rect.left + window.pageXOffset),
    y: Math.floor(rect.top + window.pageYOffset),
    width: Math.floor(rect.width),
    height: Math.floor(rect.height)
  };
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
function triggerInitialValidation(el) {
  const target = getValidatableElement(el);
  ValidationService.validateElement(target);
}
function registerValidators(el, binding) {
  const {
    modifiers: bindingModifiers = {},
    value: bindingValue = {}
  } = binding;
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
var ValidationDirective = {
  beforeMount(el, binding) {
    registerValidators(el, binding);
  },
  beforeUnmount(el, _binding) {
    const validatableElement = getValidatableElement(el);
    dispatchComponentUnmountEvent(validatableElement);
    ValidationService.removeValidatorsFromElement(validatableElement);
  },
  updated(el, binding) {
    if (!isEqual$1(binding.value, binding.oldValue)) {
      registerValidators(el, binding);
    }
  },
  mounted(el) {
    triggerInitialValidation(el);
  }
};
var ValidationPrefixDirective = {
  beforeMount(el, binding) {
    el.addEventListener("component-validity", (event) => {
      const e = event;
      e.detail.errorMessage = `${binding.value}${e.detail.errorMessage}`;
    });
  }
};
var ValidationPlugin = {
  install(app) {
    for (const validator of availableValidators) {
      ValidationService.registerValidator(validator);
    }
    app.directive("validation", ValidationDirective);
    app.directive("validationPrefix", ValidationPrefixDirective);
  }
};
var UNHANDLED_ERROR_EVENT = "unhandled-error";
var defaults = {
  captureWarnings: true,
  logToConsole: true
};
function errorHandler(options, error, vm, info) {
  if (options.logToConsole) {
    const consoleOutput = info ? [`Error in ${info}:`, error, vm] : [error, vm];
    console.error(...consoleOutput);
  }
  if (error instanceof Error) {
    EventBus.$emit(UNHANDLED_ERROR_EVENT, new ErrorData(error, vm, info));
  } else {
    EventBus.$emit(UNHANDLED_ERROR_EVENT, new ErrorData(new Error(String(error)), vm, info));
  }
}
function warnHandler(options, msg, vm, trace) {
  if (options.logToConsole) {
    console.warn(`Warning:`, msg, trace);
  }
  const error = {
    name: "warning",
    message: msg,
    stack: trace
  };
  EventBus.$emit(UNHANDLED_ERROR_EVENT, new ErrorData(error, vm, "warning"));
}
var ErrorPlugin = {
  install(app, options) {
    const config2 = {
      ...defaults,
      ...options
    };
    app.config.errorHandler = errorHandler.bind(void 0, config2);
    if (config2.captureWarnings) {
      app.config.warnHandler = warnHandler.bind(void 0, config2);
    }
  }
};
var _sfc_main$1c = defineComponent({
  name: "FErrorPage",
  props: {
    payload: {
      type: Object,
      required: false,
      default: null
    }
  }
});
var _hoisted_1$V = {
  "data-test": "f-error-page"
};
function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$V, _cache[0] || (_cache[0] = [createElementVNode("h1", null, "Fel", -1), createTextVNode(), createElementVNode("p", null, "Ett fel har uppst\xE5tt.", -1), createTextVNode(), createElementVNode("a", {
    href: "/"
  }, "G\xE5 till startsidan", -1)]));
}
var FErrorPage = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["render", _sfc_render$H]]);
var _sfc_main$1b = defineComponent({
  name: "FErrorHandlingApp",
  props: {
    defaultComponent: {
      type: [Function, Object],
      required: false,
      default: void 0
    },
    errorComponent: {
      type: [Function, Object],
      required: false,
      default: FErrorPage
    }
  },
  data() {
    return new ErrorViewData();
  },
  watch: {
    $route() {
      this.hasError = false;
    }
  },
  created() {
    EventBus.$on(UNHANDLED_ERROR_EVENT, (payload) => {
      this.hasError = true;
      this.payload = payload;
    });
  }
});
function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [_ctx.hasError ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.errorComponent), {
    key: 0,
    payload: _ctx.payload
  }, null, 8, ["payload"])) : _ctx.defaultComponent ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.defaultComponent), {
    key: 1
  })) : renderSlot(_ctx.$slots, "default", {
    key: 2
  })]);
}
var FErrorHandlingApp = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["render", _sfc_render$G]]);
function isNumberFormat(value) {
  if (!value || typeof value !== "object") {
    return false;
  }
  const maybeNumberformat = value;
  if (typeof maybeNumberformat.decimals !== "number") {
    return false;
  }
  return ["number", "string"].includes(typeof maybeNumberformat.number);
}
function isDateRange(value) {
  if (!value || typeof value !== "object") {
    return false;
  }
  const maybeDateRange = value;
  const isFDates = maybeDateRange.from instanceof FDate && maybeDateRange.to instanceof FDate;
  const isStrings = typeof maybeDateRange.from === "string" && typeof maybeDateRange.to === "string";
  return isFDates || isStrings;
}
function formatNumber(el, number) {
  el.classList.add("formatter--number");
  el.textContent = "";
  if (typeof number === "string" || typeof number === "number") {
    var _numberFormater;
    el.textContent = (_numberFormater = formatNumber$1(number)) !== null && _numberFormater !== void 0 ? _numberFormater : "";
  } else if (isNumberFormat(number)) {
    var _numberFormater2;
    el.textContent = (_numberFormater2 = formatNumber$1(number.number, number.decimals)) !== null && _numberFormater2 !== void 0 ? _numberFormater2 : "";
  }
}
function formatDate(el, date) {
  el.classList.add("formatter--date");
  el.textContent = "";
  if (typeof date === "string") {
    var _parseDate;
    el.textContent = (_parseDate = parseDate(date)) !== null && _parseDate !== void 0 ? _parseDate : "";
  } else if (date instanceof FDate) {
    el.textContent = date.toString();
  }
}
function formatDateFull(el, date) {
  el.classList.add("formatter--date-full");
  el.textContent = "";
  if (typeof date === "string") {
    var _parseDate2;
    const dateString = (_parseDate2 = parseDate(date)) !== null && _parseDate2 !== void 0 ? _parseDate2 : "";
    el.textContent = FDate.fromIso(dateString).toString(DateFormat.FULL);
  } else if (date instanceof FDate) {
    el.textContent = date.toString(DateFormat.FULL);
  }
}
function formatDateLong(el, date) {
  el.classList.add("formatter--date-long");
  el.textContent = "";
  if (typeof date === "string") {
    var _parseDate3;
    const dateString = (_parseDate3 = parseDate(date)) !== null && _parseDate3 !== void 0 ? _parseDate3 : "";
    el.textContent = FDate.fromIso(dateString).toString(DateFormat.LONG);
  } else if (date instanceof FDate) {
    el.textContent = date.toString(DateFormat.LONG);
  }
}
function formatDateRange(el, range) {
  var _parseDate4, _parseDate5;
  el.classList.add("formatter--date-range");
  el.textContent = "";
  if (!isDateRange(range)) {
    return;
  }
  const fromDate = range.from instanceof FDate ? range.from : FDate.fromIso((_parseDate4 = parseDate(range.from)) !== null && _parseDate4 !== void 0 ? _parseDate4 : "");
  const toDate = range.to instanceof FDate ? range.to : FDate.fromIso((_parseDate5 = parseDate(range.to)) !== null && _parseDate5 !== void 0 ? _parseDate5 : "");
  if (fromDate.isValid() && toDate.isValid()) {
    el.textContent = `${fromDate.toString()} \u2013 ${toDate.toString()}`;
  }
}
function formatBankgiro(el, bankgiro) {
  el.classList.add("formatter--bankgiro");
  el.textContent = "";
  if (typeof bankgiro === "string") {
    var _parseBankgiro;
    el.textContent = (_parseBankgiro = parseBankgiro(bankgiro)) !== null && _parseBankgiro !== void 0 ? _parseBankgiro : "";
  }
}
function formatPersonnummer(el, pnr) {
  el.classList.add("formatter--pnr");
  el.textContent = "";
  if (typeof pnr === "string") {
    var _parsePersonnummer;
    el.textContent = (_parsePersonnummer = parsePersonnummer(pnr)) !== null && _parsePersonnummer !== void 0 ? _parsePersonnummer : "";
  }
}
function formatOrganisationsnummer(el, orgnr) {
  el.classList.add("formatter--orgnr");
  el.textContent = "";
  if (typeof orgnr === "string") {
    var _parseOrganisationsnu;
    el.textContent = (_parseOrganisationsnu = parseOrganisationsnummer(orgnr)) !== null && _parseOrganisationsnu !== void 0 ? _parseOrganisationsnu : "";
  }
}
function formatText(el, text) {
  el.classList.add("formatter--text");
  el.textContent = typeof text === "string" ? text : "";
}
function formatPlusgiro(el, plusgiro) {
  el.classList.add("formatter--plusgiro");
  el.textContent = "";
  if (typeof plusgiro === "string") {
    var _parsePlusgiro;
    el.textContent = (_parsePlusgiro = parsePlusgiro(plusgiro)) !== null && _parsePlusgiro !== void 0 ? _parsePlusgiro : "";
  }
}
function formatPostnummer(el, postnummer) {
  el.classList.add("formatter--postnummer");
  el.textContent = "";
  if (typeof postnummer === "string") {
    var _parsePostalCode;
    el.textContent = (_parsePostalCode = parsePostalCode(postnummer)) !== null && _parsePostalCode !== void 0 ? _parsePostalCode : "";
  }
}
var formatters = {
  bankgiro: formatBankgiro,
  "date-full": formatDateFull,
  "date-long": formatDateLong,
  "date-range": formatDateRange,
  date: formatDate,
  number: formatNumber,
  orgnr: formatOrganisationsnummer,
  pnr: formatPersonnummer,
  plusgiro: formatPlusgiro,
  postnummer: formatPostnummer,
  text: formatText
};
function removeObsoleteClasses(el) {
  el.classList.forEach((it) => {
    if (it.startsWith("formatter--")) {
      el.classList.remove(it);
    }
  });
}
var FormatPlugin = {
  install(app) {
    app.directive("format", (el, {
      value,
      arg
    }) => {
      const formatter = formatters[arg];
      if (formatter) {
        removeObsoleteClasses(el);
        formatter(el, value);
      }
    });
  }
};
function isMonthBefore(date, minDate) {
  return Boolean(minDate && date.isBefore(minDate.startOfMonth()));
}
function isMonthAfter(date, maxDate) {
  return Boolean(maxDate && date.isAfter(maxDate.endOfMonth()));
}
function isInvalidMonth(date, minDate, maxDate) {
  const startOfMonth = date.startOfMonth();
  return isMonthBefore(startOfMonth, minDate) || isMonthAfter(startOfMonth, maxDate);
}
function getMessage($t2, date, minDate, maxDate) {
  const invalidMonth = isInvalidMonth(date, minDate, maxDate);
  if (!invalidMonth) {
    return void 0;
  }
  if (date.isBefore(minDate)) {
    const {
      day,
      monthName,
      year
    } = minDate;
    return $t2("fkui.calendar.error.below-min-date", "Du kan inte v\xE4lja en dag f\xF6re {{day}} {{month}} {{year}}", {
      day,
      month: monthName,
      year
    });
  }
  if (date.isAfter(maxDate)) {
    const {
      day,
      monthName,
      year
    } = maxDate;
    return $t2("fkui.calendar.error.above-max-date", "Du kan inte v\xE4lja en dag efter {{day}} {{month}} {{year}}", {
      day,
      month: monthName,
      year
    });
  }
}
var _sfc_main$1a = defineComponent({
  name: "ICalendarNavbar",
  components: {
    FIcon
  },
  mixins: [TranslationMixin],
  props: {
    /**
     * Focused month.
     */
    modelValue: {
      type: Object,
      required: true
    },
    /**
     * Min date.
     */
    minDate: {
      type: Object,
      required: true
    },
    /**
     * Max date.
     */
    maxDate: {
      type: Object,
      required: true
    }
  },
  emits: ["change", "update:modelValue"],
  computed: {
    previousDisabled() {
      return isInvalidMonth(this.modelValue.addMonths(-1), this.minDate, this.maxDate);
    },
    nextDisabled() {
      return isInvalidMonth(this.modelValue.addMonths(1), this.minDate, this.maxDate);
    },
    previousValue() {
      return this.modelValue.addMonths(-1);
    },
    nextValue() {
      return this.modelValue.addMonths(1);
    },
    currentText() {
      return this.getDateText(this.modelValue);
    },
    previousSrText() {
      return this.$t("fkui.calendar-navbar.previous", "F\xF6reg\xE5ende m\xE5nad");
    },
    nextSrText() {
      return this.$t("fkui.calendar-navbar.next", "N\xE4sta m\xE5nad");
    },
    previousIconClasses() {
      return {
        "calendar-navbar__icon": true,
        "calendar-navbar__icon--disabled": this.previousDisabled
      };
    },
    nextIconClasses() {
      return {
        "calendar-navbar__icon": true,
        "calendar-navbar__icon--disabled": this.nextDisabled
      };
    }
  },
  methods: {
    onClickPreviousButton() {
      if (!this.previousDisabled) {
        this.$emit("update:modelValue", this.previousValue);
        const previousMonth = this.getDateText(this.previousValue);
        const previousMonthText = this.$t("fkui.calendar-navbar.previous-month", "{{ previousMonth }} visas", {
          previousMonth
        });
        alertScreenReader(previousMonthText, {
          assertive: true
        });
        return;
      }
      const message = getMessage(this.$t, this.previousValue, this.minDate, this.maxDate);
      if (message) {
        alertScreenReader(message, {
          assertive: true
        });
      }
    },
    onClickNextButton() {
      if (!this.nextDisabled) {
        this.$emit("update:modelValue", this.nextValue);
        this.$emit("change", this.nextValue);
        const nextMonth = this.getDateText(this.nextValue);
        const nextMonthText = this.$t("fkui.calendar-navbar.next-month", "{{ nextMonth }} visas", {
          nextMonth
        });
        alertScreenReader(nextMonthText, {
          assertive: true
        });
        return;
      }
      const message = getMessage(this.$t, this.nextValue, this.minDate, this.maxDate);
      if (message) {
        alertScreenReader(message, {
          assertive: true
        });
      }
    },
    getDateText(value) {
      return `${capitalize(value.monthName)} ${value.year}`;
    },
    isFocused(ref2) {
      return document.activeElement === this.$refs[ref2];
    }
  }
});
var _hoisted_1$U = {
  class: "calendar-navbar"
};
var _hoisted_2$E = {
  class: "calendar-navbar__month",
  tabindex: "-1"
};
var _hoisted_3$v = ["aria-disabled", "aria-live"];
var _hoisted_4$q = {
  class: "sr-only"
};
var _hoisted_5$l = ["aria-disabled", "aria-live"];
var _hoisted_6$g = {
  class: "sr-only"
};
function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  return openBlock(), createElementBlock("div", _hoisted_1$U, [createElementVNode("div", _hoisted_2$E, toDisplayString(_ctx.currentText), 1), _cache[4] || (_cache[4] = createTextVNode()), createElementVNode("button", {
    ref: "previousButton",
    class: "calendar-navbar__arrow calendar-navbar__arrow--previous",
    type: "button",
    "aria-disabled": _ctx.previousDisabled,
    "aria-live": _ctx.isFocused("previousButton") ? "polite" : "off",
    onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.onClickPreviousButton && _ctx.onClickPreviousButton(...args), ["stop"]))
  }, [createElementVNode("span", _hoisted_4$q, toDisplayString(_ctx.previousSrText), 1), _cache[2] || (_cache[2] = createTextVNode()), createVNode(_component_f_icon, {
    class: normalizeClass(_ctx.previousIconClasses),
    name: "arrow-right"
  }, null, 8, ["class"])], 8, _hoisted_3$v), _cache[5] || (_cache[5] = createTextVNode()), createElementVNode("button", {
    ref: "nextButton",
    class: "calendar-navbar__arrow calendar-navbar__arrow--next",
    type: "button",
    "aria-disabled": _ctx.nextDisabled,
    "aria-live": _ctx.isFocused("nextButton") ? "polite" : "off",
    onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.onClickNextButton && _ctx.onClickNextButton(...args), ["stop"]))
  }, [createElementVNode("span", _hoisted_6$g, toDisplayString(_ctx.nextSrText), 1), _cache[3] || (_cache[3] = createTextVNode()), createVNode(_component_f_icon, {
    class: normalizeClass(_ctx.nextIconClasses),
    name: "arrow-right"
  }, null, 8, ["class"])], 8, _hoisted_5$l)]);
}
var ICalendarNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["render", _sfc_render$F]]);
function getDayStartOffset(days) {
  return days[0].weekDay - 1;
}
function getDayEndOffset(days) {
  return 7 - days[days.length - 1].weekDay;
}
var _sfc_main$19 = defineComponent({
  name: "ICalendarMonthGrid",
  props: {
    /**
     * Focused month.
     * @model
     */
    value: {
      type: Object,
      required: true
    },
    /**
     * Hide week numbers.
     */
    hideWeekNumbers: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      weekdays: getWeekdayNamings(),
      focused: false,
      resizeObserver: void 0,
      internalHideWeekNumbers: false,
      showShortWeekdays: false
    };
  },
  computed: {
    ariaLabel() {
      return `${this.value.monthName} ${this.value.year}`;
    },
    totalCols() {
      return this.hideWeekNumbers ? 7 : 8;
    },
    weeks() {
      return groupByWeek(this.value.startOfMonth(), this.value.endOfMonth());
    }
  },
  mounted() {
    this.resizeObserver = new ResizeObserver(debounce(this.onResize, 100));
    this.resizeObserver.observe(this.$el);
    this.onResize();
  },
  unmounted() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  },
  methods: {
    onResize() {
      const component = this.$el;
      this.internalHideWeekNumbers = this.hideWeekNumbers || component.offsetWidth < 320;
      this.showShortWeekdays = component.offsetWidth < 640;
    },
    onFocusin() {
      this.focused = true;
    },
    onFocusout(e) {
      const component = this.$el;
      const relatedTarget = e.relatedTarget;
      if (!component.contains(relatedTarget)) {
        this.focused = false;
      }
    },
    getDayStartOffset(days) {
      return getDayStartOffset(days);
    },
    getDayEndOffset(days) {
      return getDayEndOffset(days);
    }
  }
});
var _hoisted_1$T = ["aria-label"];
var _hoisted_2$D = {
  key: 0,
  class: "calendar-month__col--week"
};
var _hoisted_3$u = {
  key: 0,
  scope: "col",
  "aria-hidden": "true",
  class: "calendar-month__header-cell"
};
var _hoisted_4$p = ["title"];
var _hoisted_5$k = {
  key: 1
};
var _hoisted_6$f = {
  key: 0,
  class: "calendar-month__cell calendar-month__cell--week-number",
  "aria-hidden": "true"
};
var _hoisted_7$b = ["colspan"];
var _hoisted_8$7 = ["colspan"];
var _hoisted_9$5 = {
  key: 0,
  "aria-hidden": "true"
};
var _hoisted_10$2 = ["colspan"];
var _hoisted_11$2 = {
  key: 1,
  "aria-hidden": "true"
};
var _hoisted_12$2 = ["colspan"];
function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("table", {
    class: "calendar-month__table",
    role: "grid",
    "aria-label": _ctx.ariaLabel,
    onFocusin: _cache[0] || (_cache[0] = (...args) => _ctx.onFocusin && _ctx.onFocusin(...args)),
    onFocusout: _cache[1] || (_cache[1] = (...args) => _ctx.onFocusout && _ctx.onFocusout(...args))
  }, [createElementVNode("colgroup", null, [!_ctx.internalHideWeekNumbers ? (openBlock(), createElementBlock("col", _hoisted_2$D)) : createCommentVNode("", true), _cache[2] || (_cache[2] = createTextVNode()), _cache[3] || (_cache[3] = createElementVNode("col", {
    class: "calendar-month__col--day"
  }, null, -1)), _cache[4] || (_cache[4] = createTextVNode()), _cache[5] || (_cache[5] = createElementVNode("col", {
    class: "calendar-month__col--day"
  }, null, -1)), _cache[6] || (_cache[6] = createTextVNode()), _cache[7] || (_cache[7] = createElementVNode("col", {
    class: "calendar-month__col--day"
  }, null, -1)), _cache[8] || (_cache[8] = createTextVNode()), _cache[9] || (_cache[9] = createElementVNode("col", {
    class: "calendar-month__col--day"
  }, null, -1)), _cache[10] || (_cache[10] = createTextVNode()), _cache[11] || (_cache[11] = createElementVNode("col", {
    class: "calendar-month__col--day"
  }, null, -1)), _cache[12] || (_cache[12] = createTextVNode()), _cache[13] || (_cache[13] = createElementVNode("col", {
    class: "calendar-month__col--day"
  }, null, -1)), _cache[14] || (_cache[14] = createTextVNode()), _cache[15] || (_cache[15] = createElementVNode("col", {
    class: "calendar-month__col--day"
  }, null, -1))]), _cache[22] || (_cache[22] = createTextVNode()), createElementVNode("thead", null, [createElementVNode("tr", null, [!_ctx.internalHideWeekNumbers ? (openBlock(), createElementBlock("th", _hoisted_3$u)) : createCommentVNode("", true), _cache[16] || (_cache[16] = createTextVNode()), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.weekdays, (weekday) => {
    return openBlock(), createElementBlock("th", {
      key: weekday.name,
      scope: "col",
      "aria-hidden": "true",
      class: "calendar-month__header-cell"
    }, [_ctx.showShortWeekdays ? (openBlock(), createElementBlock("abbr", {
      key: 0,
      title: weekday.name
    }, toDisplayString(weekday.shortName), 9, _hoisted_4$p)) : (openBlock(), createElementBlock("span", _hoisted_5$k, toDisplayString(weekday.name), 1))]);
  }), 128))])]), _cache[23] || (_cache[23] = createTextVNode()), createElementVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.weeks, (week) => {
    return openBlock(), createElementBlock("tr", {
      key: week.week
    }, [!_ctx.internalHideWeekNumbers ? (openBlock(), createElementBlock("td", _hoisted_6$f, toDisplayString(week.week), 1)) : createCommentVNode("", true), _cache[17] || (_cache[17] = createTextVNode()), _ctx.getDayStartOffset(week.days) ? (openBlock(), createElementBlock("td", {
      key: 1,
      class: "calendar-month__cell",
      colspan: _ctx.getDayStartOffset(week.days)
    }, null, 8, _hoisted_7$b)) : createCommentVNode("", true), _cache[18] || (_cache[18] = createTextVNode()), (openBlock(true), createElementBlock(Fragment, null, renderList(week.days, (day) => {
      return openBlock(), createElementBlock("td", {
        key: day.toString(),
        class: "calendar-month__cell",
        role: "presentation"
      }, [renderSlot(_ctx.$slots, "default", {
        date: day,
        focused: _ctx.focused
      })]);
    }), 128)), _cache[19] || (_cache[19] = createTextVNode()), _ctx.getDayEndOffset(week.days) ? (openBlock(), createElementBlock("td", {
      key: 2,
      class: "calendar-month__cell",
      colspan: _ctx.getDayEndOffset(week.days),
      "aria-hidden": "true"
    }, null, 8, _hoisted_8$7)) : createCommentVNode("", true)]);
  }), 128)), _cache[20] || (_cache[20] = createTextVNode()), _ctx.weeks.length < 5 ? (openBlock(), createElementBlock("tr", _hoisted_9$5, [createElementVNode("td", {
    class: "calendar-month__cell",
    colspan: _ctx.totalCols,
    "aria-hidden": "true"
  }, null, 8, _hoisted_10$2)])) : createCommentVNode("", true), _cache[21] || (_cache[21] = createTextVNode()), _ctx.weeks.length < 6 ? (openBlock(), createElementBlock("tr", _hoisted_11$2, [createElementVNode("td", {
    class: "calendar-month__cell",
    colspan: _ctx.totalCols,
    "aria-hidden": "true"
  }, null, 8, _hoisted_12$2)])) : createCommentVNode("", true)])], 40, _hoisted_1$T);
}
var ICalendarMonthGrid = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["render", _sfc_render$E]]);
var DayStep = {
  ArrowRight: 1,
  ArrowLeft: -1,
  ArrowUp: -7,
  ArrowDown: 7
};
function isDayStepKey(e) {
  return Object.keys(DayStep).includes(e.code);
}
function getDayStep(keyBoardEvent) {
  return DayStep[keyBoardEvent.code];
}
function isSameMonth(a, b) {
  return a.startOfMonth().equals(b.startOfMonth());
}
function getDayTabindex(date, active, entry) {
  const ref2 = active !== null && active !== void 0 ? active : entry;
  if (ref2 && isSameMonth(ref2, date)) {
    return date.equals(ref2) ? 0 : -1;
  } else {
    return date.day === 1 ? 0 : -1;
  }
}
var _sfc_main$18 = defineComponent({
  name: "ICalendarMonth",
  components: {
    ICalendarMonthGrid
  },
  mixins: [TranslationMixin],
  props: {
    /**
     * Active month.
     * @model
     */
    modelValue: {
      type: Object,
      required: true
    },
    /**
     * Date to focus on when component gains focus.
     *
     * Consumers can update this related to active month.
     * If undefined, the first day of the month will gain focus.
     */
    tabDate: {
      type: Object,
      required: false,
      default: void 0
    },
    /**
     * Min date.
     */
    minDate: {
      type: Object,
      required: true
    },
    /**
     * Max date.
     */
    maxDate: {
      type: Object,
      required: true
    }
  },
  emits: ["change", "click", "update:modelValue"],
  methods: {
    onClickDay(date) {
      this.$emit("click", date);
    },
    async onKeydownDay(date, event) {
      if (event.code === "Enter" || event.code === "Space") {
        event.preventDefault();
        this.$emit("click", date);
        return;
      }
      if (!isDayStepKey(event)) {
        return;
      }
      event.preventDefault();
      const dayStep = getDayStep(event);
      const navigatedDay = date.addDays(dayStep);
      const navigatedMonth = navigatedDay.startOfMonth();
      const message = getMessage(this.$t, navigatedDay, this.minDate, this.maxDate);
      if (message) {
        alertScreenReader(message, {
          assertive: true
        });
        return;
      }
      this.$emit("update:modelValue", navigatedMonth);
      if (navigatedDay.month !== date.month) {
        await this.$nextTick();
      }
      this.$forceUpdate();
      const navigatedDayRef = this.$refs[navigatedDay.toString()];
      if (navigatedDayRef) {
        const navigatedDayElement = getHTMLElementFromVueRef(navigatedDayRef);
        focus$1(navigatedDayElement);
      }
    },
    isDayFocused(date) {
      return document.activeElement === this.$refs[date.toString()];
    },
    getTabindex(date) {
      let activeDate = void 0;
      if (document.activeElement instanceof HTMLElement) {
        const activeString = document.activeElement.dataset.date;
        activeDate = activeString ? FDate.fromIso(activeString) : void 0;
      }
      return getDayTabindex(date, activeDate, this.tabDate);
    }
  }
});
var _hoisted_1$S = ["data-date", "tabindex", "onClick", "onKeydown"];
function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_i_calendar_month_grid = resolveComponent("i-calendar-month-grid");
  return openBlock(), createBlock(_component_i_calendar_month_grid, {
    value: _ctx.modelValue
  }, {
    default: withCtx(({
      date
    }) => [createElementVNode("div", {
      ref: date.toString(),
      role: "gridcell",
      class: "calendar-month__button",
      "data-test": "select-day-button",
      "data-date": date.toString(),
      tabindex: _ctx.getTabindex(date),
      onClick: withModifiers(($event) => _ctx.onClickDay(date), ["stop", "prevent"]),
      onKeydown: ($event) => _ctx.onKeydownDay(date, $event)
    }, [renderSlot(_ctx.$slots, "default", {
      date,
      isFocused: _ctx.isDayFocused(date)
    })], 40, _hoisted_1$S)]),
    _: 3
  }, 8, ["value"]);
}
var ICalendarMonth = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["render", _sfc_render$D]]);
var _sfc_main$17 = defineComponent({
  name: "FCalendar",
  components: {
    ICalendarNavbar,
    ICalendarMonth
  },
  props: {
    /**
     * Active month.
     * @model
     */
    modelValue: {
      type: Object,
      required: true
    },
    /**
     * Date to set tabindex on when component gains focus.
     *
     * Consumers can update this related to active month.
     * If undefined, the first day of the month will gain focus.
     */
    tabDate: {
      type: Object,
      required: false,
      default: void 0
    },
    /**
     * Min date.
     */
    minDate: {
      type: Object,
      required: true
    },
    /**
     * Max date.
     */
    maxDate: {
      type: Object,
      required: true
    }
  },
  emits: ["click", "update:modelValue"],
  methods: {
    onClickDay(date) {
      this.$emit("click", date);
    },
    onChangeMonth(date) {
      this.$emit("update:modelValue", date);
    }
  }
});
var _hoisted_1$R = {
  class: "calendar__wrapper"
};
function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_i_calendar_navbar = resolveComponent("i-calendar-navbar");
  const _component_i_calendar_month = resolveComponent("i-calendar-month");
  return openBlock(), createElementBlock("div", _hoisted_1$R, [createVNode(_component_i_calendar_navbar, {
    "model-value": _ctx.modelValue,
    "min-date": _ctx.minDate,
    "max-date": _ctx.maxDate,
    "onUpdate:modelValue": _ctx.onChangeMonth
  }, null, 8, ["model-value", "min-date", "max-date", "onUpdate:modelValue"]), _cache[0] || (_cache[0] = createTextVNode()), createVNode(_component_i_calendar_month, {
    "model-value": _ctx.modelValue,
    "min-date": _ctx.minDate,
    "max-date": _ctx.maxDate,
    "tab-date": _ctx.tabDate,
    onClick: _ctx.onClickDay,
    "onUpdate:modelValue": _ctx.onChangeMonth
  }, {
    default: withCtx(({
      date,
      focused
    }) => [renderSlot(_ctx.$slots, "default", {
      date,
      isFocused: focused
    })]),
    _: 3
  }, 8, ["model-value", "min-date", "max-date", "tab-date", "onClick", "onUpdate:modelValue"])]);
}
var FCalendar = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["render", _sfc_render$C]]);
function getCalendarDaySrText(day, enabled, selected, t) {
  const parts = [];
  if (!enabled) {
    parts.push(t("fkui.calendar.day.unselectable", "inte valbar"));
  } else if (selected) {
    parts.push(t("fkui.calendar.day.selected", "vald dag"));
  }
  const today = FDate.now();
  if (day.equals(today)) {
    parts.push(t("fkui.calendar.day.today", "idag"));
  } else if (day.equals(today.addDays(-1))) {
    parts.push(t("fkui.calendar.day.yesterday", "ig\xE5r"));
  } else if (day.equals(today.addDays(1))) {
    parts.push(t("fkui.calendar.day.tomorrow", "imorgon"));
  }
  parts.push(day.toString(DateFormat.FULL));
  return parts.join(" ");
}
var _sfc_main$16 = defineComponent({
  name: "FCalendarDay",
  mixins: [TranslationMixin],
  props: {
    /**
     * Day to render.
     */
    day: {
      type: Object,
      required: true
    },
    /**
     * Set to `true` if day is enabled.
     */
    enabled: {
      type: Boolean,
      required: false,
      default: true
    },
    /**
     * Set to `true` if day is focused.
     */
    focused: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * Set to `true` if day is selected.
     */
    selected: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * Set to `true` if day should be highlighted.
     */
    highlight: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    srText() {
      return getCalendarDaySrText(this.day, this.enabled, this.selected, this.$t);
    },
    dayClasses() {
      const component = "calendar-day";
      const classes = [component];
      if (this.highlight) {
        classes.push(`${component}--highlight`);
      }
      if (this.enabled) {
        if (this.selected) {
          classes.push(`${component}--selected`);
        }
      } else {
        classes.push(`${component}--disabled`);
      }
      return classes;
    }
  }
});
var _hoisted_1$Q = {
  "aria-hidden": "true"
};
var _hoisted_2$C = {
  class: "sr-only"
};
function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(_ctx.dayClasses)
  }, [createElementVNode("span", _hoisted_1$Q, toDisplayString(_ctx.day.day), 1), _cache[0] || (_cache[0] = createTextVNode()), createElementVNode("span", _hoisted_2$C, toDisplayString(_ctx.srText), 1)], 2);
}
var FCalendarDay = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["render", _sfc_render$B]]);
function useEventListener$1(target, event, callback) {
  onMounted(() => {
    var _a;
    (_a = toValue(target)) == null ? void 0 : _a.addEventListener(event, callback);
  });
  onUnmounted(() => {
    var _a;
    (_a = toValue(target)) == null ? void 0 : _a.removeEventListener(event, callback);
  });
}
function useSlotUtils() {
  const $slots = useSlots();
  return {
    hasSlot(...args) {
      return hasSlot({
        $slots
      }, ...args);
    }
  };
}
var _hoisted_1$P = ["id"];
var _hoisted_2$B = {
  key: 0,
  class: "card__header"
};
var _hoisted_3$t = {
  class: "card__content"
};
var _hoisted_4$o = {
  key: 1,
  class: "card__footer"
};
var _sfc_main$15 = /* @__PURE__ */ defineComponent({
  __name: "FCard",
  props: {
    /**
     * Element to focus on when card is invalid. Set when using validation.
     */
    focusRef: {
      type: Object,
      required: false,
      default: null
    },
    /**
     * Optional id (generated by default).
     */
    id: {
      type: String,
      required: false,
      default: () => ElementIdService.generateElementId()
    }
  },
  setup(__props) {
    const {
      hasSlot: hasSlot2
    } = useSlotUtils();
    const validationMessage = ref("");
    const hasError = ref(false);
    const isMounted = ref(false);
    const hasHeaderSlot = computed(() => hasSlot2("header"));
    const hasFooterSlot = computed(() => hasSlot2("footer"));
    const cardClass = computed(() => `card card--${hasError.value ? "error" : "default"}`);
    const props = __props;
    onMounted(() => isMounted.value = true);
    async function onValidity({
      detail
    }) {
      if (!isMounted.value) {
        return;
      }
      if (detail.elementId !== props.id) {
        return;
      }
      if (!props.focusRef) {
        throw new Error("Element to focus on when card is invalid (`focusRef`) is required when using card validation.");
      }
      const focusElementId = props.focusRef.id;
      if (!focusElementId) {
        throw new Error("An id must be set on the card's focus element.");
      }
      hasError.value = !detail.isValid;
      validationMessage.value = detail.validationMessage;
      dispatchComponentValidityEvent(props.focusRef, {
        ...detail,
        errorMessage: validationMessage.value,
        focusElementId
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: __props.id,
        class: normalizeClass(cardClass.value),
        onValidity
      }, [hasHeaderSlot.value ? (openBlock(), createElementBlock("div", _hoisted_2$B, [renderSlot(_ctx.$slots, "header", normalizeProps(guardReactiveProps({
        headingSlotClass: "card__header-label"
      })))])) : createCommentVNode("", true), _cache[1] || (_cache[1] = createTextVNode()), renderSlot(_ctx.$slots, "error-message", normalizeProps(guardReactiveProps({
        hasError: hasError.value,
        validationMessage: validationMessage.value
      })), () => [hasError.value ? (openBlock(), createBlock(unref(IFlex), {
        key: 0,
        gap: "1x",
        class: "card__error-message"
      }, {
        default: withCtx(() => [createVNode(unref(IFlexItem), {
          shrink: "",
          align: "center"
        }, {
          default: withCtx(() => [createVNode(unref(FIcon), {
            name: "error"
          })]),
          _: 1
        }), _cache[0] || (_cache[0] = createTextVNode()), createVNode(unref(IFlexItem), {
          grow: ""
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(validationMessage.value), 1)]),
          _: 1
        })]),
        _: 1,
        __: [0]
      })) : createCommentVNode("", true)]), _cache[2] || (_cache[2] = createTextVNode()), createElementVNode("div", _hoisted_3$t, [renderSlot(_ctx.$slots, "default")]), _cache[3] || (_cache[3] = createTextVNode()), hasFooterSlot.value ? (openBlock(), createElementBlock("div", _hoisted_4$o, [renderSlot(_ctx.$slots, "footer", normalizeProps(guardReactiveProps({
        hasError: hasError.value,
        validationMessage: validationMessage.value
      })))])) : createCommentVNode("", true)], 42, _hoisted_1$P);
    };
  }
});
var _sfc_main$14 = defineComponent({
  name: "FExpand",
  data() {
    return {
      height: 0,
      initialStyle: {
        overflow: "hidden",
        transition: "height 400ms cubic-bezier(0.46, 0.03, 0.52, 0.96)"
      },
      hiddenStyle: {
        height: "auto",
        position: "absolute",
        visibility: "hidden"
      },
      visibleStyle: {
        width: "",
        position: "",
        visibility: "",
        height: "0px"
      },
      openedStyle: {
        height: "auto"
      }
    };
  },
  methods: {
    enter(element) {
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
    },
    afterEnter(element) {
      const htmlElement = getHTMLElementFromVueRef(element);
      Object.assign(htmlElement.style, this.openedStyle);
    },
    leave(element) {
      const htmlElement = getHTMLElementFromVueRef(element);
      const height = getComputedStyle(element).height;
      htmlElement.style.height = height;
      getComputedStyle(element).height;
      setTimeout(() => {
        Object.assign(htmlElement.style, this.visibleStyle);
      });
    }
  }
});
function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    onEnter: _ctx.enter,
    onAfterEnter: _ctx.afterEnter,
    onLeave: _ctx.leave
  }, {
    default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
      height: _ctx.height
    })]),
    _: 3
  }, 8, ["onEnter", "onAfterEnter", "onLeave"]);
}
var FExpand = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["render", _sfc_render$A]]);
function offset(page, el) {
  const rect = el.getBoundingClientRect();
  return {
    top: rect.top + page.pageYOffset,
    left: rect.left + page.pageXOffset
  };
}
function getElement(anchor) {
  if (!anchor) {
    return null;
  }
  if (typeof anchor === "string") {
    return document.getElementById(anchor);
  } else {
    return anchor;
  }
}
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
  const h = {
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
    return [a, b, c, d, e, f, g, h, i];
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
  return {
    x,
    y,
    width,
    height
  };
}
function fitInsideArea(options) {
  var _a;
  if (isElementOptions(options)) {
    const {
      area: areaElement,
      anchor: anchorElement,
      target: targetElement,
      viewport: viewportElement,
      spacing: spacing2,
      candidateOrder
    } = options;
    const area2 = getAbsolutePosition(areaElement);
    const anchor2 = getAbsolutePosition(anchorElement);
    const target2 = getAbsolutePosition(targetElement);
    const viewport2 = getAbsolutePosition(viewportElement);
    const result = fitInsideArea({
      area: area2,
      target: target2,
      anchor: anchor2,
      viewport: viewport2,
      spacing: spacing2,
      candidateOrder
    });
    const offset2 = (_a = targetElement.offsetParent) == null ? void 0 : _a.getBoundingClientRect();
    if (!offset2) {
      return result;
    }
    return {
      ...result,
      x: result.x - (offset2.left + window.pageXOffset),
      y: result.y - (offset2.top + window.pageYOffset)
    };
  }
  const {
    anchor,
    target,
    area,
    viewport,
    spacing
  } = options;
  const clippedArea = clipRect(area, viewport);
  const candidates = getCandidates(anchor, target, clippedArea, spacing, options.candidateOrder);
  const index = candidates.findIndex((it) => isInside(clippedArea, it, spacing));
  if (index >= 0) {
    const match = candidates[index];
    return {
      x: match.x,
      y: match.y,
      placement: match.placement
    };
  }
  return {
    ...getFallbackPosition(anchor, target, clippedArea, spacing),
    placement: "Fallback"
    /* Fallback */
  };
}
function getScrollToPopup(param) {
  const popupOffset = offset({
    pageXOffset: 0,
    pageYOffset: param.scrollTop
  }, param.popup);
  const popupHeight = param.popup.offsetHeight;
  const neededScroll = popupOffset.top - param.windowInnerHeight + popupHeight + param.spacing;
  if (neededScroll > param.scrollTop) {
    return neededScroll;
  } else {
    return param.scrollTop;
  }
}
function getFallbackPosition(anchor, target, clippedArea, spacing) {
  const x = anchor.x - (target.width + spacing);
  const y = anchor.y + anchor.height + spacing;
  if (x >= clippedArea.x) {
    return {
      x,
      y
    };
  } else {
    return {
      x: clippedArea.x + spacing,
      y
    };
  }
}
function getContainer(element, prop) {
  if (prop) {
    return prop;
  }
  const parent = element.closest(".popup__container");
  if (parent) {
    return parent;
  }
  return config.popupContainer;
}
function getFocusableElement(rootElement, callback) {
  var _elements$;
  if (callback) {
    return callback();
  }
  const popupElement = getHTMLElementFromVueRef(rootElement);
  const elements = findTabbableElements(popupElement);
  return (_elements$ = elements[0]) !== null && _elements$ !== void 0 ? _elements$ : null;
}
var MIN_DESKTOP_WIDTH = 640;
var POPUP_SPACING$1 = 20;
function isTeleportDisabled(options) {
  const {
    window: window2,
    placement,
    forceInline,
    forceOverlay
  } = options;
  const isMobileSize = window2.innerWidth < MIN_DESKTOP_WIDTH;
  let disableTeleport = isMobileSize || placement === Placement.Fallback;
  if (forceInline) {
    disableTeleport = true;
  } else if (forceOverlay) {
    disableTeleport = false;
  } else if (placement === Placement.NotCalculated && !isMobileSize) {
    disableTeleport = false;
  }
  return disableTeleport;
}
var _sfc_main$13 = defineComponent({
  name: "IPopup",
  inheritAttrs: false,
  props: {
    /**
     * Toggle open/closed popup.
     */
    isOpen: {
      type: Boolean,
      required: true
    },
    /**
     * DOM element to position popup at.
     */
    anchor: {
      type: HTMLElement,
      required: false,
      default: void 0
    },
    /**
     * Type of inline behaviour.
     * - `"auto"` changes between overlay or inline depending on window size.
     * - `"always"` forces the popup to always be inline.
     * - `"never"` forces the popup to never be inline.
     */
    inline: {
      type: String,
      required: false,
      validator(value) {
        return ["always", "never", "auto"].includes(value);
      },
      default: "auto"
    },
    /**
     * Which element to use as container.
     */
    container: {
      type: HTMLElement,
      required: false,
      default: void 0
    },
    /**
     * Which element to use as viewport.
     */
    viewport: {
      type: HTMLElement,
      required: false,
      default() {
        return document.documentElement;
      }
    },
    /**
     * Prevents tabbing outside of component.
     */
    keyboardTrap: {
      type: Boolean,
      required: false,
      default: true
    },
    /**
     * Function that returns the element that will receive focus
     */
    focusElement: {
      type: Function,
      required: false,
      default: null
    },
    /**
     * Set focus on first tabbable element (or element in the `focusElement` prop if provided) when opened.
     */
    setFocus: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: [
    /**
     * Emitted when popup is visible and placement is fully calculated.
     */
    "open",
    /**
     * Emitted when clicked outside of popup.
     */
    "close"
  ],
  data() {
    return {
      teleportDisabled: false,
      placement: Placement.NotCalculated,
      focus: null
    };
  },
  computed: {
    popupClasses() {
      const popupState = this.isInline ? ["popup--inline"] : ["popup--overlay"];
      return ["popup", ...popupState];
    },
    isInline() {
      let isInline = this.teleportDisabled || this.placement === Placement.Fallback;
      if (this.forceInline) {
        isInline = true;
      } else if (this.forceOverlay) {
        isInline = false;
      } else if (this.placement === Placement.NotCalculated && !this.isMobileSize()) {
        isInline = false;
      }
      return isInline;
    },
    forceInline() {
      return this.inline === "always";
    },
    forceOverlay() {
      return this.inline === "never";
    },
    teleportTarget() {
      return config.teleportTarget;
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(value) {
        this.toggleIsOpen(value);
        if (value) {
          const {
            placement,
            forceInline,
            forceOverlay
          } = this;
          this.teleportDisabled = isTeleportDisabled({
            window,
            placement,
            forceInline,
            forceOverlay
          });
          setTimeout(() => {
            if (this.isOpen) {
              document.addEventListener("click", this.onDocumentClickHandler);
              window.addEventListener("resize", this.onWindowResizeDebounced);
            }
          }, 0);
        } else {
          document.removeEventListener("click", this.onDocumentClickHandler);
          window.removeEventListener("resize", this.onWindowResizeDebounced);
        }
      }
    }
  },
  created() {
    this.onWindowResizeDebounced = debounce(this.onWindowResize, 100).bind(this);
  },
  unmounted() {
    document.removeEventListener("click", this.onDocumentClickHandler);
    window.removeEventListener("resize", this.onWindowResizeDebounced);
  },
  methods: {
    async toggleIsOpen(isOpen) {
      if (!isOpen) {
        this.placement = Placement.NotCalculated;
        if (this.focus) {
          popFocus(this.focus);
          this.focus = null;
        }
        return;
      }
      await this.$nextTick();
      await this.calculatePlacement();
      this.applyFocus();
      this.$emit("open");
    },
    async calculatePlacement() {
      const popup = getHTMLElementFromVueRef(this.$refs.popup);
      const wrapper = getHTMLElementFromVueRef(this.$refs.wrapper);
      const anchor = getElement(this.anchor);
      if (!anchor) {
        throw new Error("No anchor element found");
      }
      const shouldCheckCandidates = this.forceOverlay || !(this.isMobileSize() || this.forceInline);
      if (shouldCheckCandidates) {
        const area = getContainer(popup, this.container);
        const viewport = this.viewport;
        const result = fitInsideArea({
          area,
          anchor,
          target: wrapper,
          viewport,
          spacing: POPUP_SPACING$1,
          candidateOrder: CandidateOrder.Default
        });
        this.placement = result.placement;
        const useOverlay = this.forceOverlay || result.placement !== Placement.Fallback;
        if (useOverlay) {
          wrapper.style.left = `${result.x}px`;
          wrapper.style.top = `${result.y}px`;
          return;
        }
      }
      this.teleportDisabled = true;
      wrapper.style.removeProperty("left");
      wrapper.style.removeProperty("top");
      await new Promise((resolve) => setTimeout(resolve, 200));
      const scrollTarget = popup.closest(".scroll-target");
      const hasScrollTarget = scrollTarget !== null;
      const top = getScrollToPopup({
        popup: wrapper,
        windowInnerHeight: window.innerHeight,
        scrollTop: hasScrollTarget ? scrollTarget.scrollTop : window.scrollY,
        spacing: POPUP_SPACING$1
      });
      const scrollOptions = {
        top,
        behavior: "smooth"
      };
      if (hasScrollTarget) {
        scrollTarget.scrollTo(scrollOptions);
      } else {
        window.scrollTo(scrollOptions);
      }
    },
    applyFocus() {
      if (!this.setFocus) {
        return;
      }
      const wrapper = this.$refs.wrapper;
      if (!wrapper) {
        return;
      }
      const focusableElement = getFocusableElement(wrapper, this.focusElement);
      this.focus = pushFocus(focusableElement);
    },
    isMobileSize() {
      return window.innerWidth < MIN_DESKTOP_WIDTH;
    },
    onDocumentClickHandler() {
      this.$emit("close");
    },
    onWindowResizeDebounced() {
    },
    async onWindowResize() {
      if (!this.isOpen) {
        return;
      }
      if (this.forceInline) {
        return;
      }
      if (this.isInline && this.isMobileSize()) {
        return;
      }
      if (this.isInline) {
        this.placement = Placement.NotCalculated;
        this.teleportDisabled = false;
        await this.$nextTick();
      }
      await this.calculatePlacement();
      const {
        placement,
        forceInline,
        forceOverlay
      } = this;
      this.teleportDisabled = isTeleportDisabled({
        window,
        placement,
        forceInline,
        forceOverlay
      });
    },
    onPopupClickHandler(event) {
      event.stopPropagation();
    },
    onKeyEsc() {
      this.$emit("close");
    },
    onKeyTab(event) {
      if (this.keyboardTrap) {
        const wrapper = getHTMLElementFromVueRef(this.$refs.wrapper);
        handleTab(event, wrapper);
      }
    }
  }
});
function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.isOpen ? (openBlock(), createBlock(Teleport, {
    key: 0,
    to: _ctx.teleportTarget,
    disabled: _ctx.teleportDisabled
  }, [createElementVNode("div", mergeProps({
    ref: "popup"
  }, _ctx.$attrs, {
    class: _ctx.popupClasses
  }), [createElementVNode("div", {
    ref: "wrapper",
    role: "presentation",
    class: "popup__wrapper",
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onPopupClickHandler && _ctx.onPopupClickHandler(...args)),
    onKeyup: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => _ctx.onKeyEsc && _ctx.onKeyEsc(...args), ["stop"]), ["esc"])),
    onKeydown: _cache[2] || (_cache[2] = withKeys((...args) => _ctx.onKeyTab && _ctx.onKeyTab(...args), ["tab"]))
  }, [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({
    toggleIsOpen: _ctx.toggleIsOpen,
    placement: _ctx.placement
  })))], 544)], 16)], 8, ["to", "disabled"])) : createCommentVNode("", true);
}
var IPopup = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["render", _sfc_render$z]]);
function computeArrowOffset(placement, inputIconRect, wrapperRect) {
  switch (placement) {
    case Placement.A: {
      const wrapperRightX = wrapperRect.x + wrapperRect.width;
      const iconCenterX = inputIconRect.x + inputIconRect.width / 2;
      const offset2 = wrapperRightX - iconCenterX;
      return {
        position: "top",
        offset: offset2
      };
    }
    case Placement.B: {
      const offset2 = wrapperRect.x + wrapperRect.width - (inputIconRect.x + inputIconRect.width / 2);
      return {
        position: "top",
        offset: offset2
      };
    }
    case Placement.C: {
      const wrapperRightX = wrapperRect.x + wrapperRect.width;
      const iconCenterX = inputIconRect.x + inputIconRect.width / 2;
      const offset2 = wrapperRightX - iconCenterX;
      return {
        position: "bottom",
        offset: offset2
      };
    }
    case Placement.D: {
      const offset2 = wrapperRect.x + wrapperRect.width - (inputIconRect.x + inputIconRect.width / 2);
      return {
        position: "bottom",
        offset: offset2
      };
    }
    case Placement.E: {
      const offset2 = wrapperRect.y + wrapperRect.height - (inputIconRect.y + inputIconRect.height / 2);
      return {
        position: "left",
        offset: offset2
      };
    }
    case Placement.F: {
      const offset2 = wrapperRect.y + wrapperRect.height - (inputIconRect.y + inputIconRect.height / 2);
      return {
        position: "right",
        offset: offset2
      };
    }
    case Placement.G:
    case Placement.H:
    case Placement.I:
    case Placement.Fallback:
    // eslint-disable-next-line sonarjs/no-duplicated-branches, no-fallthrough -- Nice to have alphabetical order with fallthrough.
    case Placement.NotCalculated: {
      const offset2 = wrapperRect.x + wrapperRect.width - (inputIconRect.x + inputIconRect.width / 2);
      return {
        position: "top",
        offset: offset2
      };
    }
  }
}
var POPUP_SPACING = 10;
var _sfc_main$12 = defineComponent({
  name: "IPopupError",
  components: {
    FIcon
  },
  inheritAttrs: false,
  props: {
    /**
     * Toggle open/closed error popup.
     */
    isOpen: {
      type: Boolean,
      required: true
    },
    /**
     * Message to display
     */
    errorMessage: {
      type: String,
      required: false,
      default: "Error"
    },
    /**
     * DOM element to position error popup at.
     */
    anchor: {
      type: HTMLElement,
      required: false,
      default: void 0
    }
  },
  emits: ["close"],
  data() {
    return {
      teleportDisabled: false,
      placement: Placement.NotCalculated,
      arrowPosition: "top",
      arrowOffset: 24
    };
  },
  computed: {
    popupClasses() {
      const forceInline = this.teleportDisabled || this.placement === Placement.Fallback;
      const popupState = forceInline ? ["popup-error--inline"] : ["popup-error--overlay"];
      return ["popup-error", ...popupState];
    },
    arrowClass() {
      return `popup-error popup-error--arrow popup-error--${this.arrowPosition}`;
    },
    errorStyle() {
      return `--i-popup-error-offset: ${this.arrowOffset}px`;
    },
    teleportTarget() {
      return config.teleportTarget;
    }
  },
  watch: {
    anchor: {
      immediate: true,
      handler(anchor) {
        if (anchor) {
          anchor.addEventListener("keyup", this.onKeyEsc);
          window.addEventListener("resize", this.onResize);
        }
      }
    },
    isOpen: {
      immediate: true,
      async handler(value) {
        await this.toggleIsOpen(value);
      }
    }
  },
  unmounted() {
    var _a;
    (_a = this.anchor) == null ? void 0 : _a.removeEventListener("keyup", this.onKeyEsc);
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.toggleIsOpen(this.isOpen);
    },
    onKeyEsc(event) {
      if (event.key === "Escape") {
        this.$emit("close");
      }
    },
    onClose() {
      this.$emit("close");
    },
    setArrowOffset() {
      var _a;
      const wrapper = this.$refs["wrapper"];
      const inputIcon = (_a = this.anchor) == null ? void 0 : _a.nextElementSibling;
      if (!inputIcon || !wrapper) {
        return;
      }
      const inputIconRect = inputIcon.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();
      const arrow = computeArrowOffset(this.placement, inputIconRect, wrapperRect);
      this.arrowOffset = arrow.offset;
      this.arrowPosition = arrow.position;
    },
    async toggleIsOpen(isOpen) {
      if (!isOpen) {
        this.placement = Placement.NotCalculated;
        return;
      }
      await this.$nextTick();
      const wrapper = this.$refs["wrapper"];
      if (!this.anchor) {
        throw new Error("No anchor element found");
      }
      const area = document.body;
      const viewport = document.documentElement;
      const result = fitInsideArea({
        area,
        anchor: this.anchor,
        target: wrapper,
        viewport,
        spacing: POPUP_SPACING,
        candidateOrder: CandidateOrder.IPopupError
      });
      this.placement = result.placement;
      if (result.placement !== Placement.Fallback) {
        this.teleportDisabled = false;
        wrapper.style.left = `${result.x}px`;
        wrapper.style.top = `${result.y}px`;
        await this.setArrowOffset();
        return;
      }
      await this.setArrowOffset();
      this.teleportDisabled = true;
      wrapper.style.removeProperty("left");
      wrapper.style.removeProperty("top");
    }
  }
});
var _hoisted_1$O = {
  ref: "wrapper",
  class: "popup-error__wrapper"
};
function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  return _ctx.isOpen ? (openBlock(), createBlock(Teleport, {
    key: 0,
    to: _ctx.teleportTarget,
    disabled: _ctx.teleportDisabled
  }, [createElementVNode("div", {
    ref: "popup",
    class: normalizeClass(_ctx.popupClasses),
    "aria-hidden": "true"
  }, [createElementVNode("div", _hoisted_1$O, [createElementVNode("div", {
    class: normalizeClass(_ctx.arrowClass),
    style: normalizeStyle(_ctx.errorStyle)
  }, [createElementVNode("span", null, toDisplayString(_ctx.errorMessage), 1), _cache[1] || (_cache[1] = createTextVNode()), createElementVNode("button", {
    tabindex: "-1",
    type: "button",
    class: "button button--discrete button--discrete--black modal__close-button popup-error__button",
    "aria-label": "St\xE4ng",
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClose && _ctx.onClose(...args))
  }, [createVNode(_component_f_icon, {
    name: "close",
    class: "button__icon"
  })])], 6)], 512)], 2)], 8, ["to", "disabled"])) : createCommentVNode("", true);
}
var IPopupError = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["render", _sfc_render$y]]);
function numItems(itemHeight, availableHeight, verticalSpacing) {
  const itemsFit = Math.floor((availableHeight - verticalSpacing) / itemHeight);
  return Math.min(itemsFit, 7);
}
function tryBelow(itemHeight, numOfItems, anchor, viewport, verticalSpacing) {
  const p1 = viewport.y + viewport.height;
  const p2 = anchor.y + anchor.height;
  const availableHeight = p1 - p2;
  const itemsFit = numItems(itemHeight, availableHeight, verticalSpacing);
  if (itemsFit < 3) {
    return void 0;
  }
  const fittedHeight = itemHeight * Math.min(numOfItems, itemsFit);
  return {
    left: anchor.x,
    top: anchor.y + anchor.height,
    width: anchor.width,
    height: fittedHeight
  };
}
function tryAbove(itemHeight, numOfItems, anchor, viewport, verticalSpacing) {
  const p1 = viewport.y;
  const p2 = anchor.y;
  const availableHeight = p2 - p1;
  const itemsFit = numItems(itemHeight, availableHeight, verticalSpacing);
  if (itemsFit < 3) {
    return void 0;
  }
  const fittedHeight = itemHeight * Math.min(numOfItems, itemsFit);
  return {
    left: anchor.x,
    top: anchor.y - fittedHeight - verticalSpacing,
    width: anchor.width,
    height: fittedHeight
  };
}
function computeListboxRect(anchor, options, root = document.documentElement, {
  scrollY,
  scrollX
} = window) {
  const {
    itemHeight,
    numOfItems,
    verticalSpacing
  } = options;
  const rect = anchor.getBoundingClientRect();
  const anchorRect = {
    x: Math.floor(rect.x + scrollX),
    y: Math.floor(rect.top + scrollY),
    width: Math.floor(rect.width),
    height: Math.floor(rect.height)
  };
  const viewportRect = {
    y: scrollY,
    height: root.clientHeight
  };
  const below = tryBelow(itemHeight, numOfItems, anchorRect, viewportRect, verticalSpacing);
  if (below) {
    return below;
  }
  const above = tryAbove(itemHeight, numOfItems, anchorRect, viewportRect, verticalSpacing);
  if (above) {
    return above;
  }
  return void 0;
}
var _hoisted_1$N = ["onKeyup"];
var _hoisted_2$A = {
  ref: "content"
};
var teleportDisabled = false;
var _sfc_main$11 = /* @__PURE__ */ defineComponent({
  __name: "IPopupListbox",
  props: {
    isOpen: {
      type: Boolean
    },
    anchor: {},
    numOfItems: {},
    itemHeight: {},
    activeElement: {}
  },
  emits: ["close"],
  setup(__props, {
    emit: __emit
  }) {
    const emit = __emit;
    const wrapperRef = useTemplateRef("wrapper");
    const contentRef = useTemplateRef("content");
    const popupClasses = ["popup", "popup--overlay"];
    const teleportTarget = computed(() => config.teleportTarget);
    let guessedItemHeight = void 0;
    let verticalSpacing = void 0;
    useEventListener$1(__props.anchor, "keyup", onKeyEsc);
    watchEffect(() => {
      if (wrapperRef.value && __props.activeElement !== void 0) {
        const centerPosition = __props.activeElement.offsetTop - (wrapperRef.value.getBoundingClientRect().height - __props.activeElement.getBoundingClientRect().height) / 2;
        if (!isElementInsideViewport(wrapperRef.value)) {
          wrapperRef.value.scrollIntoView({
            behavior: "instant",
            block: "nearest"
          });
        }
        wrapperRef.value.scrollTo({
          top: centerPosition,
          behavior: "instant"
        });
      }
    });
    function addListeners() {
      document.addEventListener("click", onDocumentClickHandler);
      window.addEventListener("resize", debounce(onResize, 100));
    }
    function removeListeners() {
      document.removeEventListener("click", onDocumentClickHandler);
      window.removeEventListener("resize", debounce(onResize, 100));
    }
    function isElementInsideViewport(element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;
      const insideX = rect.left >= 0 && rect.left + rect.width <= windowWidth;
      const insideY = rect.top >= 0 && rect.top + rect.height <= windowHeight;
      return insideX && insideY;
    }
    watchEffect(() => {
      if (__props.isOpen) {
        calculatePosition();
        setTimeout(() => {
          if (__props.isOpen) {
            addListeners();
          }
        }, 0);
      } else {
        removeListeners();
      }
    });
    watch(() => __props.numOfItems, (oldValue, newValue) => {
      if (oldValue !== newValue && __props.isOpen) {
        calculatePosition();
      }
    });
    onUnmounted(removeListeners);
    function onDocumentClickHandler() {
      emit("close");
    }
    function onResize() {
      if (__props.isOpen) {
        calculatePosition();
      }
    }
    function onKeyEsc(event) {
      if (event.key === "Escape") {
        emit("close");
      }
    }
    function guessItemHeight(numOfItems, contentWrapper) {
      return Math.ceil(contentWrapper.clientHeight / numOfItems);
    }
    async function calculatePosition() {
      var _a;
      await nextTick();
      const wrapperElement = wrapperRef.value;
      const contentWrapper = contentRef.value;
      if (!__props.anchor || !wrapperElement || !contentWrapper) {
        return;
      }
      let contentItemHeigth = __props.itemHeight;
      if (!contentItemHeigth) {
        if (!guessedItemHeight) {
          guessedItemHeight = guessItemHeight(__props.numOfItems, contentWrapper);
        }
        contentItemHeigth = guessedItemHeight;
      }
      if (verticalSpacing === void 0) {
        const absWrapper = getAbsolutePosition(wrapperElement);
        const {
          marginTop,
          marginBottom
        } = getComputedStyle(wrapperElement);
        const marginTotal = parseInt(marginTop, 10) + parseInt(marginBottom, 10);
        verticalSpacing = Math.ceil(absWrapper.height - contentItemHeigth * __props.numOfItems) + marginTotal;
      }
      wrapperElement.style.overflowY = "auto";
      wrapperElement.style.overflowX = "hidden";
      wrapperElement.style.left = "0px";
      const rect = computeListboxRect(__props.anchor, {
        itemHeight: contentItemHeigth,
        numOfItems: __props.numOfItems,
        verticalSpacing
      });
      if (rect) {
        var _offsetRect$x, _offsetRect$top;
        const {
          top,
          left,
          width,
          height
        } = rect;
        const offsetRect = (_a = wrapperElement == null ? void 0 : wrapperElement.offsetParent) == null ? void 0 : _a.getBoundingClientRect();
        const offsetLeft = (_offsetRect$x = offsetRect == null ? void 0 : offsetRect.x) !== null && _offsetRect$x !== void 0 ? _offsetRect$x : 0;
        const offSetTop = Math.floor(((_offsetRect$top = offsetRect == null ? void 0 : offsetRect.top) !== null && _offsetRect$top !== void 0 ? _offsetRect$top : 0) + window.scrollY);
        wrapperElement.style.top = `${top - offSetTop}px`;
        wrapperElement.style.left = `${left - offsetLeft}px`;
        wrapperElement.style.width = `${width}px`;
        contentWrapper.style.maxHeight = `${height}px`;
        contentWrapper.style.width = `${width}px`;
      }
    }
    return (_ctx, _cache) => {
      return _ctx.isOpen ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: teleportTarget.value,
        disabled: teleportDisabled
      }, [createElementVNode("div", {
        ref: "popup",
        class: normalizeClass(popupClasses)
      }, [createElementVNode("div", mergeProps({
        ref: "wrapper"
      }, _ctx.$attrs, {
        class: "popup__wrapper",
        tabindex: "0",
        onKeyup: withKeys(withModifiers(onKeyEsc, ["stop"]), ["esc"]),
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["stop"]))
      }), [createElementVNode("div", _hoisted_2$A, [renderSlot(_ctx.$slots, "default")], 512)], 16, _hoisted_1$N)], 512)], 8, ["to"])) : createCommentVNode("", true);
    };
  }
});
function getNewItemIndexFromMenuAction$2(action, index, n) {
  let newIndex;
  if (n <= 0) {
    return 0;
  }
  switch (action) {
    case MenuAction.MOVE_NEXT:
      newIndex = (index + 1) % n;
      break;
    case MenuAction.MOVE_PREV:
      newIndex = (index - 1 + n) % n;
      break;
    case MenuAction.MOVE_FIRST:
      newIndex = 0;
      break;
    case MenuAction.MOVE_LAST:
      newIndex = Math.max(n - 1, 0);
      break;
    default:
      newIndex = index;
  }
  return newIndex;
}
async function doMenuAction$2(action, target) {
  const itemsLength = target.items.length;
  const currentIndex = target.currentFocusedItemIndex;
  const newFocusedItemIndex = getNewItemIndexFromMenuAction$2(action, currentIndex, itemsLength);
  switch (action) {
    case MenuAction.MOVE_NEXT:
    case MenuAction.MOVE_PREV:
    case MenuAction.MOVE_FIRST:
    case MenuAction.MOVE_LAST:
      await target.setFocusOnItem(newFocusedItemIndex);
      break;
    case MenuAction.ACTIVATE:
      await target.activateItem(newFocusedItemIndex);
      break;
  }
}
var preventKeys$2 = ["Tab", "Up", "Down", "ArrowUp", "ArrowDown", "Home", "End", " ", "Spacebar", "Enter"];
var _sfc_main$10 = defineComponent({
  name: "IPopupMenu",
  components: {
    IPopup
  },
  props: {
    /**
     * Key of the currently selected and highlighted item.
     *
     * @model
     */
    modelValue: {
      type: String,
      required: false,
      default: ""
    },
    /**
     * Key of the currently focused item.
     * Sets focus on matching item element when value changes.
     *
     * @model
     */
    focusedItem: {
      type: String,
      required: false,
      default: ""
    },
    /**
     * Toggle open/closed popup.
     */
    isOpen: {
      type: Boolean,
      required: true
    },
    /**
     * DOM element to position popup at.
     */
    anchor: {
      type: HTMLElement,
      default: void 0
    },
    /**
     * The items to be diplayed in the menu
     */
    items: {
      type: Array,
      required: true
    },
    /**
     * If true, enable built-in keyboard navigation
     */
    enableKeyboardNavigation: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * Unique accessible name for navigation landmark.
     */
    ariaLabel: {
      type: String,
      required: false,
      default: "Popupmeny"
    },
    /**
     * Text for selected item for screen reader
     */
    selectedMenuItemScreenReaderText: {
      type: String,
      required: false,
      default: "vald nu"
    }
  },
  emits: [
    /**
     * Emitted when an item is selected and when tabbing out of the popup.
     *
     * @event close
     */
    "close",
    /**
     * Emitted when an item is selected.
     *
     * @event select
     * @type {string} item key
     */
    "select",
    /**
     * V-model event. Emitted when an item is selected.
     *
     * @event select
     * @type {string} item key
     */
    "update:modelValue",
    /**
     * V-model event. Emitted when item focus changes.
     *
     * @event select
     * @type {string} Key of focused item, or empty if no item focused.
     */
    "update:focusedItem"
  ],
  data() {
    return {
      currentFocusedItemIndex: 0,
      lastSelectedItem: ""
    };
  },
  watch: {
    isOpen: {
      immediate: true,
      async handler(newVal) {
        if (newVal) {
          return;
        }
        this.currentFocusedItemIndex = 0;
        this.lastSelectedItem = "";
        this.$emit("update:focusedItem", "");
      }
    },
    modelValue: {
      async handler(newVal) {
        if (this.enableKeyboardNavigation) {
          return;
        }
        const index = this.indexOfItemByKey(newVal);
        if (index >= 0) {
          await this.activateItem(index);
        } else {
          this.setFocusedItemIndex(0);
        }
      }
    },
    focusedItem: {
      async handler(newVal) {
        if (newVal.length === 0) {
          return;
        }
        const index = this.indexOfItemByKey(newVal);
        if (index >= 0) {
          await this.setFocusOnItem(index);
        } else {
          this.setFocusedItemIndex(0);
        }
      }
    }
  },
  methods: {
    isSelected(index) {
      return this.items[index].key === this.modelValue;
    },
    focusElement() {
      return null;
    },
    findItemByKey(key) {
      return this.items.find((it) => it.key === key);
    },
    indexOfItemByKey(key) {
      const item = this.findItemByKey(key);
      if (!item) {
        return -1;
      }
      return this.items.indexOf(item);
    },
    onClickItem(event, item) {
      this.selectItem(item.key);
      const target = event.target;
      const isAnchor = target instanceof HTMLElement && target.tagName === "A";
      if (!isAnchor) {
        this.clickItemAnchor(item);
      }
    },
    clickItemAnchor(item) {
      if (!item.href) {
        return;
      }
      const index = this.items.indexOf(item);
      const anchors = getSortedHTMLElementsFromVueRef(this.$refs.anchors);
      anchors[index].click();
    },
    selectItem(key) {
      if (key !== this.lastSelectedItem) {
        this.$emit("update:modelValue", key);
        this.$emit("select", key);
        this.lastSelectedItem = key;
      }
      this.$emit("close");
    },
    itemClasses(item) {
      const highlight = item.key === this.modelValue ? ["ipopupmenu__list__item--highlight"] : [];
      return ["ipopupmenu__list__item", ...highlight];
    },
    async setFocusOnItem(index) {
      this.setFocusedItemIndex(index);
      await this.$nextTick();
      if (!this.isOpen) {
        return;
      }
      const anchors = getSortedHTMLElementsFromVueRef(this.$refs.anchors);
      if (anchors.length === 0) {
        return;
      }
      const itemAnchor = anchors[index];
      focus$1(itemAnchor, {
        preventScroll: true
      });
      const key = this.items[index].key;
      this.$emit("update:focusedItem", key);
    },
    async activateItem(index) {
      if (index !== this.currentFocusedItemIndex) {
        await this.setFocusOnItem(index);
      }
      const item = this.items[index];
      this.selectItem(item.key);
      this.clickItemAnchor(item);
    },
    setFocusedItemIndex(index) {
      this.currentFocusedItemIndex = index;
    },
    onKeyUp(event) {
      if (!this.enableKeyboardNavigation) {
        return;
      }
      if (preventKeys$2.includes(event.key)) {
        event.preventDefault();
      }
    },
    async onKeyDown(event) {
      if (!this.enableKeyboardNavigation) {
        return;
      }
      if (!preventKeys$2.includes(event.key)) {
        return;
      }
      const firstItemFocused = this.currentFocusedItemIndex === 0;
      const lastItemFocused = this.currentFocusedItemIndex === this.items.length - 1;
      const tabOutPrev = event.key === "Tab" && event.shiftKey && firstItemFocused;
      const tabOutNext = event.key === "Tab" && !event.shiftKey && lastItemFocused;
      if (tabOutPrev || tabOutNext) {
        if (tabOutPrev) {
          event.preventDefault();
        }
        this.$emit("close");
        return;
      }
      const action = actionFromKeyboardEvent(event);
      if (action === null) {
        return;
      }
      event.preventDefault();
      await doMenuAction$2(action, this);
    }
  }
});
var _hoisted_1$M = ["aria-label"];
var _hoisted_2$z = {
  role: "menu",
  class: "ipopupmenu__list"
};
var _hoisted_3$s = ["onClick"];
var _hoisted_4$n = ["data-ref-index", "href", "target"];
var _hoisted_5$j = {
  key: 0,
  class: "sr-only"
};
function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_i_popup = resolveComponent("i-popup");
  return openBlock(), createBlock(_component_i_popup, {
    class: "ipopupmenu",
    "is-open": _ctx.isOpen,
    "keyboard-trap": false,
    anchor: _ctx.anchor,
    "focus-element": _ctx.focusElement,
    onClose: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close")),
    onKeyup: _ctx.onKeyUp,
    onKeydown: _ctx.onKeyDown
  }, {
    default: withCtx(() => [createElementVNode("nav", {
      class: "ipopupmenu ipopupmenu--vertical",
      "aria-label": _ctx.ariaLabel
    }, [createElementVNode("ul", _hoisted_2$z, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
      return openBlock(), createElementBlock("li", {
        ref_for: true,
        ref: "items",
        key: item.key,
        role: "presentation",
        class: normalizeClass(_ctx.itemClasses(item)),
        onClick: (event) => _ctx.onClickItem(event, item)
      }, [createElementVNode("a", {
        ref_for: true,
        ref: "anchors",
        "data-ref-index": index,
        href: item.href,
        role: "menuitem",
        target: item.target,
        tabindex: "0"
      }, [_ctx.isSelected(index) ? (openBlock(), createElementBlock("span", _hoisted_5$j, [createElementVNode("span", null, toDisplayString(_ctx.selectedMenuItemScreenReaderText) + "\xA0", 1)])) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(item.label), 1)], 8, _hoisted_4$n)], 10, _hoisted_3$s);
    }), 128))])], 8, _hoisted_1$M)]),
    _: 1
  }, 8, ["is-open", "anchor", "focus-element", "onKeyup", "onKeydown"]);
}
var IPopupMenu = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["render", _sfc_render$x]]);
var ANIMATION_DURATION = 500;
var NO_CSS_CLASSES = "";
var CLOSED_CSS_CLASS_OPACITY = "animate-expand animate-expand--opacity";
var CLOSED_CSS_CLASS = "animate-expand";
var ANIMATION_CSS_CLASSES = "animate-expand animate-expand--expanded";
var _sfc_main$$ = defineComponent({
  name: "IAnimateExpand",
  props: {
    /**
     * Perform animation or not
     */
    animate: {
      type: Boolean,
      default: true
    },
    /**
     * Use v-show instead of v-if when hiding content.
     */
    useVShow: {
      type: Boolean,
      default: false
    },
    /**
     * Toggle expanded/collapsed state
     */
    expanded: {
      type: [String, Number, Boolean],
      default: true
    },
    /* Toggle opacity in animation */
    opacity: {
      type: Boolean,
      default: true
    },
    /**
     * Optional callback for performing actions before animation.
     * Callback will await Promise.
     */
    beforeAnimation: {
      type: Function,
      required: false,
      default() {
        return () => {
        };
      }
    },
    /**
     * Optional callback for performing actions after animation.
     * Callback will await Promise.
     */
    afterAnimation: {
      type: Function,
      required: false,
      default() {
        return () => {
        };
      }
    }
  },
  data() {
    return {
      internalExpanded: Boolean(this.expanded),
      height: 0,
      isAnimating: false,
      cssClasses: "",
      /**
       * When the open animation is triggered it creates a timer for `ANIMATION_DURATION`.
       * If the collapse animation is triggered before this timer has started
       * it must be canceled or the previous opening will reset the state before collapse is finished thus corrupting the state of the element.
       * Vice verse when collapse animation is triggered it also creates timers which the open animation must cancel.
       *
       * ```
       * Actor            IAnimationExpand
       * |                      |
       * +----[ open ] -------> |
       * |                      +----+ Timer 1
       * |                      |    |
       * +----[ close ] ------> |    |
       * |                      +----)----+ Timer 2
       * |                      |    |    |
       * |            *KABOOM*  |<---+    |
       * |                      |         |
       * |                      |         |
       * |            *KABOOM*  |<--------+
       * |                      |
       * ```
       */
      timerList: []
    };
  },
  computed: {
    animationClasses() {
      if (!this.animate) {
        return "";
      }
      return this.cssClasses;
    },
    heightStyle() {
      return this.height === "" ? "" : `height: ${this.height}px`;
    },
    shouldVIf() {
      if (this.useVShow) {
        return true;
      } else {
        return this.internalExpanded;
      }
    },
    shouldVShow() {
      if (this.useVShow) {
        return this.internalExpanded;
      } else {
        return true;
      }
    }
  },
  watch: {
    expanded: {
      immediate: false,
      handler() {
        if (this.expanded && this.animate) {
          this.openAnimation();
        } else if (this.expanded) {
          this.openNoAnimation();
        } else if (this.animate) {
          this.closeAnimation();
        } else {
          this.closeNoAnimation();
        }
      }
    }
  },
  beforeMount() {
    if (this.expanded) {
      this.height = "";
    } else if (this.animate) {
      this.cssClasses = this.opacity ? CLOSED_CSS_CLASS_OPACITY : CLOSED_CSS_CLASS;
    }
  },
  methods: {
    getContentHeight() {
      const content2 = this.$refs.content;
      return content2 ? content2.getBoundingClientRect().height : 0;
    },
    async openNoAnimation() {
      await this.beforeAnimation(true);
      this.internalExpanded = true;
      await this.$nextTick();
      this.cssClasses = NO_CSS_CLASSES;
      this.height = this.getContentHeight();
      await this.afterAnimation(true);
    },
    async closeNoAnimation() {
      await this.beforeAnimation(false);
      this.internalExpanded = false;
      this.cssClasses = NO_CSS_CLASSES;
      this.height = "0";
      await this.$nextTick();
      await this.afterAnimation(false);
    },
    async openAnimation() {
      await this.beforeAnimation(true);
      this.internalExpanded = true;
      await this.$nextTick();
      this.cssClasses = ANIMATION_CSS_CLASSES;
      this.height = this.getContentHeight();
      for (const timer of this.timerList) {
        clearTimeout(timer);
      }
      const t = setTimeout(async () => {
        this.timerList = [];
        this.cssClasses = NO_CSS_CLASSES;
        this.height = "";
        await this.afterAnimation(true);
      }, ANIMATION_DURATION);
      this.timerList = [t];
    },
    async closeAnimation() {
      await this.beforeAnimation(false);
      this.height = this.getContentHeight();
      this.cssClasses = ANIMATION_CSS_CLASSES;
      for (const timer of this.timerList) {
        clearTimeout(timer);
      }
      const t1 = setTimeout(() => {
        this.timerList = this.timerList.filter((it) => it !== t1);
        this.cssClasses = this.opacity ? CLOSED_CSS_CLASS_OPACITY : CLOSED_CSS_CLASS;
        this.height = "0";
      }, 0);
      const t2 = setTimeout(async () => {
        this.timerList = this.timerList.filter((it) => it !== t2);
        this.internalExpanded = false;
        await this.afterAnimation(false);
      }, ANIMATION_DURATION);
      this.timerList = [t1, t2];
    }
  }
});
var _hoisted_1$L = {
  key: 0,
  ref: "content",
  "data-test": "animation-content"
};
function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.animationClasses),
    style: normalizeStyle(_ctx.heightStyle)
  }, [_ctx.shouldVIf ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1$L, [renderSlot(_ctx.$slots, "default")], 512)), [[vShow, _ctx.shouldVShow]]) : createCommentVNode("", true)], 6);
}
var IAnimateExpand = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["render", _sfc_render$w]]);
var _sfc_main$_ = defineComponent({
  name: "ISkipLink",
  mixins: [TranslationMixin],
  props: {
    /**
     * Target for skiplink.
     */
    href: {
      type: String,
      required: false,
      default: "main"
    }
  }
});
var _hoisted_1$K = ["href"];
function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", {
    class: "iskiplink",
    href: _ctx.href
  }, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.$t("fkui.skip-link.text", "G\xE5 direkt till inneh\xE5ll")), 1)])], 8, _hoisted_1$K);
}
var ISkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["render", _sfc_render$v]]);
function filterOptions(options, filter2, selectMode) {
  if (isEmpty(filter2) || selectMode) {
    return options;
  }
  const filterLowerCased = filter2.toLowerCase();
  return options.filter((it) => it.toLowerCase().indexOf(filterLowerCased) > -1);
}
var $t = useTranslate();
function useCombobox(inputRef, options, onOptionSelected) {
  if (options.value === void 0) {
    return {
      dropdownId: "",
      dropdownIsOpen: ref(false),
      dropdownOptions: ref([]),
      activeOptionId: "",
      activeOption: ref(null),
      toggleDropdown() {
      },
      selectOption() {
      },
      closeDropdown() {
      }
    };
  }
  useEventListener$1(inputRef, "click", onInputClick);
  useEventListener$1(inputRef, "focus", onInputFocus);
  useEventListener$1(inputRef, "keydown", onInputKeyDown);
  useEventListener$1(inputRef, "keyup", onInputKeyUp);
  const dropdownId = ElementIdService.generateElementId();
  const dropdownIsOpen = ref(false);
  const activeOptionId = ElementIdService.generateElementId();
  const activeOption = ref(null);
  const filter2 = ref("");
  const selectMode = ref(false);
  const selectedOption = ref(null);
  const dropdownOptions = computed(() => {
    var _options$value;
    return filterOptions((_options$value = options.value) !== null && _options$value !== void 0 ? _options$value : [], filter2.value, selectMode.value);
  });
  const hasOptions = computed(() => {
    return dropdownOptions.value.length > 0;
  });
  const hasMultipleOptions = computed(() => {
    return dropdownOptions.value.length > 1;
  });
  watchEffect(() => {
    if (!inputRef.value) {
      return;
    }
    inputRef.value.setAttribute("aria-expanded", `${dropdownIsOpen.value}`);
    if (dropdownIsOpen.value) {
      inputRef.value.setAttribute("aria-controls", dropdownId);
    } else {
      inputRef.value.removeAttribute("aria-controls");
    }
  });
  watchEffect(async () => {
    if (!inputRef.value) {
      return;
    }
    if (activeOption.value) {
      inputRef.value.setAttribute("aria-activedescendant", activeOptionId);
    } else {
      inputRef.value.removeAttribute("aria-activedescendant");
    }
  });
  watchEffect(() => {
    if (!inputRef.value) {
      return;
    }
    let description = selectMode.value ? `${$t("fkui.combobox.selected", "Valt f\xF6rslag")} ` : "";
    if (isEmpty(filter2.value) || selectMode.value) {
      description += $t("fkui.combobox.listDetails", `Det finns {{ count }} f\xF6rslag. Anv\xE4nd upp\xE5tpil och ned\xE5tpil f\xF6r att navigera bland f\xF6rslagen.`, {
        count: options.value ? options.value.length : 0
      });
    } else if (hasOptions.value) {
      description += $t("fkui.combobox.matchesListDetails", `Det finns {{ count }} f\xF6rslag som matchar. Anv\xE4nd upp\xE5tpil och ned\xE5tpil f\xF6r att navigera bland f\xF6rslagen.`, {
        count: dropdownOptions.value.length
      });
    } else {
      description = $t("fkui.combobox.noMatchesListDetails", "Det finns inga f\xF6rslag som matchar.");
    }
    inputRef.value.setAttribute("aria-description", description);
  });
  onMounted(() => {
    if (!inputRef.value) {
      throw new Error("missing input ref");
    }
    filter2.value = inputRef.value.value;
    inputRef.value.setAttribute("role", "combobox");
    inputRef.value.setAttribute("aria-autocomplete", "list");
  });
  return {
    dropdownId,
    dropdownIsOpen,
    dropdownOptions,
    activeOptionId,
    activeOption,
    toggleDropdown,
    selectOption,
    closeDropdown: close
  };
  function selectOption(value) {
    selectedOption.value = value;
    if (selectedOption.value) {
      close();
      filter2.value = selectedOption.value;
      selectMode.value = true;
      if (onOptionSelected) {
        onOptionSelected(value);
      }
    }
  }
  async function openSelected(fallback = null) {
    var _a;
    if (hasOptions.value) {
      dropdownIsOpen.value = true;
      await nextTick();
      if (selectMode.value) {
        activeOption.value = filter2.value;
      } else if (fallback === "first") {
        activeOption.value = dropdownOptions.value[0];
      } else if (fallback === "last") {
        activeOption.value = dropdownOptions.value[dropdownOptions.value.length - 1];
      } else {
        activeOption.value = null;
      }
      (_a = inputRef.value) == null ? void 0 : _a.focus();
    }
  }
  function close() {
    dropdownIsOpen.value = false;
    activeOption.value = null;
  }
  function toggleDropdown() {
    if (!dropdownIsOpen.value) {
      openSelected();
    } else {
      close();
    }
  }
  function setNextOption() {
    if (activeOption.value && hasMultipleOptions.value) {
      const index = dropdownOptions.value.indexOf(activeOption.value);
      if (index === dropdownOptions.value.length - 1) {
        activeOption.value = dropdownOptions.value[0];
      } else {
        activeOption.value = dropdownOptions.value[index + 1];
      }
    } else {
      activeOption.value = dropdownOptions.value[0];
    }
  }
  function setPreviousOption() {
    if (activeOption.value && hasMultipleOptions.value) {
      const index = dropdownOptions.value.indexOf(activeOption.value);
      if (index === 0) {
        activeOption.value = dropdownOptions.value[dropdownOptions.value.length - 1];
      } else {
        activeOption.value = dropdownOptions.value[index - 1];
      }
    } else {
      activeOption.value = dropdownOptions.value[dropdownOptions.value.length - 1];
    }
  }
  function onInputClick() {
    toggleDropdown();
  }
  async function onInputFocus() {
    var _a;
    var _inputRef$value$value;
    await nextTick();
    filter2.value = (_inputRef$value$value = (_a = inputRef.value) == null ? void 0 : _a.value) !== null && _inputRef$value$value !== void 0 ? _inputRef$value$value : "";
    selectMode.value = options.value ? options.value.includes(filter2.value) : false;
  }
  async function onInputKeyDown(event) {
    let flag = false;
    if (event.ctrlKey || event.shiftKey) {
      return;
    }
    switch (event.key) {
      case "Enter":
        if (dropdownIsOpen.value) {
          if (activeOption.value) {
            selectOption(activeOption.value);
            flag = true;
          }
          close();
        } else {
          openSelected();
        }
        break;
      case "Down":
      case "ArrowDown":
        if (dropdownIsOpen.value) {
          setNextOption();
        } else {
          openSelected("first");
        }
        flag = true;
        break;
      case "Up":
      case "ArrowUp":
        if (dropdownIsOpen.value) {
          setPreviousOption();
        } else {
          openSelected("last");
        }
        flag = true;
        break;
      case "Esc":
      case "Escape":
        if (dropdownIsOpen.value) {
          close();
        }
        flag = true;
        break;
      case "Tab":
        if (dropdownIsOpen.value) {
          close();
        }
        break;
    }
    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
  function onInputKeyUp() {
    if (!inputRef.value) {
      throw new Error("missing input ref");
    }
    if (filter2.value === inputRef.value.value) {
      return;
    }
    filter2.value = inputRef.value.value;
    activeOption.value = null;
    selectMode.value = false;
    if (!dropdownIsOpen.value) {
      openSelected();
    } else if (!hasOptions.value) {
      close();
    }
  }
}
var _hoisted_1$J = {
  class: "combobox"
};
var _hoisted_2$y = ["id"];
var _hoisted_3$r = ["id", "aria-selected", "onClick"];
var _sfc_main$Z = /* @__PURE__ */ defineComponent({
  __name: "IComboboxDropdown",
  props: {
    id: {},
    isOpen: {
      type: Boolean
    },
    options: {},
    activeOption: {},
    activeOptionId: {},
    inputNode: {}
  },
  emits: ["select", "close"],
  setup(__props, {
    emit: __emit
  }) {
    const emit = __emit;
    const listboxRef = useTemplateRef("listbox");
    const activeElement = ref();
    function isOptionActive(item) {
      return item === __props.activeOption;
    }
    function onOptionClick(value) {
      emit("select", value);
    }
    function onListboxClose() {
      emit("close");
    }
    watchEffect(async () => {
      var _a;
      if (__props.activeOption !== null) {
        await nextTick();
        const activeOptionNode = (_a = listboxRef.value) == null ? void 0 : _a.querySelector(`#${__props.activeOptionId}`);
        activeElement.value = activeOptionNode !== null && activeOptionNode !== void 0 ? activeOptionNode : void 0;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$J, [createVNode(unref(_sfc_main$11), {
        "is-open": _ctx.isOpen,
        anchor: _ctx.inputNode,
        "num-of-items": _ctx.options.length,
        "active-element": activeElement.value,
        class: "combobox__listbox",
        onClose: onListboxClose
      }, {
        default: withCtx(() => [createElementVNode("ul", {
          id: _ctx.id,
          ref: "listbox",
          role: "listbox",
          "aria-label": "F\xF6rslag",
          class: "combobox__listbox__list"
        }, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.options, (item) => {
          return openBlock(), createElementBlock("li", {
            id: isOptionActive(item) ? _ctx.activeOptionId : void 0,
            key: item,
            role: "option",
            "aria-selected": isOptionActive(item) ? "true" : void 0,
            class: normalizeClass(["combobox__listbox__option", {
              "combobox__listbox__option--highlight": isOptionActive(item)
            }]),
            onClick: withModifiers(($event) => onOptionClick(item), ["stop", "prevent"])
          }, toDisplayString(item), 11, _hoisted_3$r);
        }), 128))], 8, _hoisted_2$y)]),
        _: 1
      }, 8, ["is-open", "anchor", "num-of-items", "active-element"])]);
    };
  }
});
var _hoisted_1$I = ["aria-label"];
var _sfc_main$Y = /* @__PURE__ */ defineComponent({
  __name: "IComboboxToggleButton",
  emits: ["toggle"],
  setup(__props, {
    emit: __emit
  }) {
    const $t2 = useTranslate();
    const emit = __emit;
    const ariaLabel = $t2("fkui.combobox.toggle", "\xD6ppna f\xF6rslagen");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: "combobox__button",
        type: "button",
        "aria-label": unref(ariaLabel),
        tabindex: "-1",
        onClick: _cache[0] || (_cache[0] = ($event) => emit("toggle"))
      }, [createVNode(unref(FIcon), {
        name: "arrow-down",
        class: "text-field__icon"
      })], 8, _hoisted_1$I);
    };
  }
});
var tooltipAttachTo = Symbol("tooltipAttachTo");
var initialized = false;
var reducedMotion = ref(false);
function useAnimation(options) {
  const {
    duration = 250,
    easing = "ease-in",
    element: elementRef
  } = options;
  let current = "collapse";
  let animation = null;
  onMounted(() => {
    if (initialized) {
      return;
    }
    if ("matchMedia" in window) {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      reducedMotion.value = prefersReducedMotion.matches;
      prefersReducedMotion.addEventListener("change", (event) => {
        reducedMotion.value = event.matches;
      });
    } else {
      reducedMotion.value = true;
    }
    initialized = true;
  });
  watchEffect(() => {
    if (elementRef.value) {
      elementRef.value.classList.toggle("expanded", current === "expand");
    }
  });
  return {
    enabled: computed(() => reducedMotion.value === false),
    animate(state) {
      current = state;
      const element = elementRef.value;
      if (!element) {
        return;
      }
      element.classList.toggle("expanded", state === "expand");
      if (reducedMotion.value) {
        return;
      }
      if (animation) {
        animation.cancel();
      }
      element.classList.add("animating");
      const h = element.offsetHeight;
      if (state === "expand") {
        animation = element.animate([{
          height: 0
        }, {
          height: `${h}px`
        }], {
          duration,
          easing
        });
      } else {
        animation = element.animate([{
          height: `${h}px`
        }, {
          height: 0
        }], {
          duration,
          easing
        });
      }
      animation.addEventListener("finish", () => {
        element.classList.remove("animating");
      });
    }
  };
}
function useHorizontalOffset(options) {
  const {
    element: elementRef,
    parent: parentRef
  } = options;
  const offset2 = ref(0);
  watch(() => elementRef.value, updateOffset);
  watch(() => parentRef, updateOffset);
  onMounted(() => window.addEventListener("resize", updateOffset));
  onUnmounted(() => window.removeEventListener("resize", updateOffset));
  return readonly(offset2);
  function updateOffset() {
    const element = elementRef.value;
    const parent = parentRef.value;
    if (!element || !parent) {
      return;
    }
    setTimeout(() => {
      const borderWidth = 2;
      const center = element.offsetWidth / 2;
      const left = element.offsetLeft - parent.offsetLeft;
      offset2.value = left - borderWidth + center;
    }, 0);
  }
}
var _sfc_main$X = defineComponent({
  name: "FTooltip",
  components: {
    FExpand,
    FIcon,
    IFlex,
    IFlexItem
  },
  inheritAttrs: false,
  props: {
    /**
     * Element to attach tooltip toggle button.
     *
     * Only needed when using with arbitrary elements, e.g. when using with
     * `FLabel` you do not need to set this prop.
     */
    attachTo: {
      type: HTMLElement,
      required: false,
      default: null
    },
    /**
     * State (expanded or collapsed) of the tooltip. The value is `true` if the tooltip is expanded.
     *
     * @model
     */
    modelValue: {
      type: Boolean,
      required: false
    },
    /**
     * Screen reader text for toggle button
     */
    screenReaderText: {
      type: String,
      required: true
    },
    /**
     * Close button text
     */
    closeButtonText: {
      type: String,
      required: false,
      default: TranslationService.provider.translate("fkui.tooltip.close", "St\xE4ng")
    },
    /**
     * Element to render for the header element inside the tooltip.
     *
     * Must be set to one of:
     * - `h1`
     * - `h2`
     * - `h3`
     * - `h4`
     * - `h5`
     * - `h6`
     */
    headerTag: {
      type: String,
      default: void 0,
      required: false,
      validator(value) {
        return [void 0, "h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
      }
    }
  },
  emits: ["update:modelValue", "toggle"],
  setup(props) {
    const provided = inject(tooltipAttachTo, null);
    const attachTo = toRef(props, "attachTo");
    const ready = ref(false);
    const iconTarget = computed(() => {
      if (provided == null ? void 0 : provided.value) {
        return provided.value;
      }
      if (attachTo.value) {
        return attachTo.value;
      }
      return null;
    });
    const wrapper = useTemplateRef("wrapper");
    const button = useTemplateRef("button");
    const {
      animate
    } = useAnimation({
      duration: 250,
      easing: "ease-in",
      element: wrapper
    });
    const offset2 = useHorizontalOffset({
      element: button,
      parent: computed(() => {
        var _a;
        var _iconTarget$value$par;
        return (_iconTarget$value$par = (_a = iconTarget.value) == null ? void 0 : _a.parentElement) !== null && _iconTarget$value$par !== void 0 ? _iconTarget$value$par : null;
      })
    });
    watchEffect(() => {
      var _a;
      (_a = iconTarget.value) == null ? void 0 : _a.classList.add("tooltip__container");
    });
    watchEffect(() => {
      if (!wrapper.value) {
        return;
      }
      wrapper.value.style.setProperty("--f-tooltip-offset", `${offset2.value}px`);
      ready.value = true;
    });
    return {
      animate,
      iconTarget,
      ready
    };
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    hasHeader() {
      return hasSlot(this, "header");
    }
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(value) {
        this.isOpen = value;
        this.animate(value ? "expand" : "collapse");
      }
    }
  },
  created() {
    const slots = useSlots();
    if (slots.header && !this.headerTag) {
      throw new Error("Tooltip with header must define headerTag");
    }
  },
  methods: {
    /**
     * Gets called when the user interacts with the toggle button
     *
     * @internal
     */
    onClickToggle() {
      this.isOpen = !this.isOpen;
      const value = this.isOpen;
      const event = {
        isOpen: this.isOpen
      };
      this.$emit("update:modelValue", value);
      this.$emit("toggle", event);
      if (!this.isOpen) {
        focus(this.$refs.button);
      }
      this.animate(value ? "expand" : "collapse");
    }
  }
});
var _hoisted_1$H = ["aria-expanded"];
var _hoisted_2$x = {
  class: "icon-stack icon-stack--tooltip"
};
var _hoisted_3$q = {
  class: "sr-only"
};
var _hoisted_4$m = {
  key: 0,
  class: "tooltip__bubble",
  tabindex: "-1"
};
var _hoisted_5$i = {
  class: "tooltip__body"
};
var _hoisted_6$e = {
  class: "tooltip__footer"
};
function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  return openBlock(), createElementBlock(Fragment, null, [(openBlock(), createBlock(Teleport, {
    disabled: _ctx.iconTarget === null,
    to: _ctx.iconTarget
  }, [createElementVNode("button", {
    ref: "button",
    class: "tooltip__button",
    type: "button",
    "aria-expanded": _ctx.isOpen,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickToggle && _ctx.onClickToggle(...args))
  }, [createElementVNode("span", _hoisted_2$x, [createVNode(_component_f_icon, {
    name: "circle"
  }), _cache[2] || (_cache[2] = createTextVNode()), createVNode(_component_f_icon, {
    name: "i"
  }), _cache[3] || (_cache[3] = createTextVNode()), createElementVNode("span", _hoisted_3$q, toDisplayString(_ctx.screenReaderText), 1)])], 8, _hoisted_1$H)], 8, ["disabled", "to"])), _cache[7] || (_cache[7] = createTextVNode()), createElementVNode("div", mergeProps({
    ref: "wrapper",
    class: "tooltip"
  }, _ctx.$attrs), [_ctx.ready ? (openBlock(), createElementBlock("div", _hoisted_4$m, [_ctx.hasHeader ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.headerTag), {
    key: 0,
    class: "tooltip__header"
  }, {
    default: withCtx(() => [renderSlot(_ctx.$slots, "header")]),
    _: 3
  })) : createCommentVNode("", true), _cache[5] || (_cache[5] = createTextVNode()), createElementVNode("div", _hoisted_5$i, [renderSlot(_ctx.$slots, "body")]), _cache[6] || (_cache[6] = createTextVNode()), createElementVNode("div", _hoisted_6$e, [createElementVNode("button", {
    class: "close-button",
    type: "button",
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onClickToggle && _ctx.onClickToggle(...args))
  }, [createElementVNode("span", null, toDisplayString(_ctx.closeButtonText), 1), _cache[4] || (_cache[4] = createTextVNode()), createVNode(_component_f_icon, {
    class: "button__icon",
    name: "close"
  })])])])) : createCommentVNode("", true)], 16)], 64);
}
var FTooltip = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["render", _sfc_render$u]]);
function* labelClasses(options) {
  const {
    labelClass
  } = options;
  yield "fieldset__label";
  yield labelClass;
}
function* contentClasses(options) {
  const {
    hasRadiobutton,
    hasCheckbox,
    contentClass
  } = options;
  yield "fieldset__content";
  if (hasRadiobutton) {
    yield "radio-button-group__content";
  }
  if (hasCheckbox) {
    yield "checkbox-group__content";
  }
  yield contentClass;
}
var injectionKeys = {
  sharedName: Symbol("sharedName"),
  showDetails: Symbol("showDetails"),
  getFieldsetLabelText: Symbol("getFieldsetLabelText")
};
function useFieldset() {
  return {
    sharedName: inject(injectionKeys.sharedName, void 0),
    showDetails: inject(injectionKeys.showDetails, "never"),
    getFieldsetLabelText: inject(injectionKeys.getFieldsetLabelText, () => void 0)
  };
}
function isEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  return a.every((_, i) => a[i] === b[i]);
}
var _sfc_main$W = defineComponent({
  name: "FFieldset",
  components: {
    FIcon
  },
  mixins: [TranslationMixin],
  props: {
    /**
     * The id for the fieldset id attribute.
     * If the prop is not set a random value will be generated.
     */
    id: {
      type: String,
      required: false,
      default: () => ElementIdService.generateElementId()
    },
    /**
     * Name provided to child content as `sharedName` for optional usage (it will not be set on the fieldset element).
     * For radio inputs this is a shortcut to specify the shared name attribute at one place,
     * instead of repeatedly setting the name attribute on each radio input.
     */
    name: {
      type: String,
      required: false,
      default: void 0
    },
    /**
     * The CSS classes for the label, description and error-message slot.
     */
    labelClass: {
      type: String,
      required: false,
      default: ""
    },
    /**
     * The CSS classes for the default slot.
     */
    contentClass: {
      type: String,
      required: false,
      default: ""
    },
    /**
     * Aligns underlying items horizontally.
     * Supported by radiobuttons and chip layout.
     */
    horizontal: {
      type: Boolean,
      required: false
    },
    /**
     * Displays radio and checkbox content with chip layout.
     */
    chip: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * Displays a box with border around radiobuttons and checkboxes.
     */
    border: {
      type: Boolean,
      required: false
    },
    /**
     * Sets visibility behaviour for details slot in selectable child items. By default details slot is not rendered.
     *
     * * `never` (default) - Never show item details.
     * - `when-selected` - Show item details when selected.
     * - `always` - Always show item details.
     */
    showDetails: {
      type: String,
      default: "never",
      validator(value) {
        return ["never", "when-selected", "always"].includes(value);
      }
    }
  },
  setup(props) {
    const slots = useSlots();
    provide(injectionKeys.sharedName, props.name);
    provide(injectionKeys.showDetails, props.showDetails);
    provide(injectionKeys.getFieldsetLabelText, () => {
      return renderSlotText(slots.label);
    });
    provide(tooltipAttachTo, useTemplateRef("tooltipAttachTo"));
  },
  data() {
    return {
      validity: {
        validityMode: "INITIAL"
      },
      descriptionClass: ["label__description"],
      formatDescriptionClass: ["label__description", "label__description--format"],
      validityElement: null,
      dispatchObject: {},
      detail: {},
      hasDocumentListener: false,
      legendKey: 1,
      oldMessage: "",
      children: new Array(),
      hasCheckbox: false,
      hasRadiobutton: false
    };
  },
  computed: {
    hasError() {
      return this.validity.validityMode === "ERROR";
    },
    hasErrorMessageSlot() {
      return hasSlot(this, "error-message");
    },
    hasTooltipSlot() {
      return Boolean(this.$slots.tooltip);
    },
    hasDescriptionSlot() {
      return hasSlot(this, "description");
    },
    legendClass() {
      return this.hasTooltipSlot ? ["sr-only"] : this.groupLabelClass;
    },
    groupLabelClass() {
      return Array.from(labelClasses(this));
    },
    groupContentClass() {
      return Array.from(contentClasses(this));
    },
    classes() {
      const {
        hasRadiobutton,
        hasCheckbox,
        horizontal,
        chip,
        border
      } = this;
      return {
        "radio-button-group": hasRadiobutton,
        "radio-button-group--chip": chip && hasRadiobutton,
        "radio-button-group--horizontal": horizontal && hasRadiobutton,
        "radio-button-group--border": border && hasRadiobutton,
        "checkbox-group": hasCheckbox,
        "checkbox-group--chip": chip && hasCheckbox,
        "checkbox-group--horizontal": horizontal && hasCheckbox,
        "checkbox-group--border": border && hasCheckbox
      };
    },
    checkedChildren() {
      return this.children.filter((child) => child.checked);
    },
    debouncedUpdateChildren() {
      return debounce(this.updateCheckboxChildren.bind(this), 150);
    },
    checkboxCheckedScreenReaderText() {
      return this.checkedChildren.length === 1 ? this.$t("fkui.checkbox-group.checkbox.checked", "Kryssruta kryssad") : this.$t("fkui.checkbox-group.checkbox.not.checked", "Kryssruta ej kryssad");
    },
    numberOfCheckboxesScreenReaderText() {
      return this.$t("fkui.checkbox-group.count", "Grupp med {{ count }} kryssrutor", {
        count: String(this.children.length)
      });
    },
    numberOfCheckedCheckboxesScreenText() {
      return this.$t("fkui.checkbox-group.checked", "{{ checked }} kryssad av {{ count }}", {
        checked: String(this.checkedChildren.length),
        count: String(this.children.length)
      });
    }
  },
  async mounted() {
    await this.$nextTick();
    const types = Array.from(this.$el.querySelectorAll(`input[type="checkbox"], input[type="radio"]`), (it) => it.getAttribute("type"));
    this.hasCheckbox = types.includes("checkbox");
    this.hasRadiobutton = types.includes("radio");
    if (this.hasCheckbox) {
      this.updateCheckboxChildren();
    }
  },
  updated() {
    if (this.hasCheckbox) {
      this.debouncedUpdateChildren();
    }
  },
  methods: {
    async onValidity({
      detail
    }) {
      var _renderSlotText;
      if (detail.target !== this.$el) {
        return;
      }
      this.detail = detail;
      await this.$nextTick();
      const errorMessage = (_renderSlotText = renderSlotText(this.$slots.label)) !== null && _renderSlotText !== void 0 ? _renderSlotText : "";
      const firstFocusableElement = this.$el.querySelector("input:not(disabled), select:not(disabled), textarea:not(disabled)");
      const focusElementId = firstFocusableElement ? firstFocusableElement.id : this.id;
      this.validityElement = this.$el;
      this.dispatchObject = {
        ...detail,
        errorMessage,
        focusElementId
      };
      this.validity = this.detail;
      if (this.validityElement) {
        dispatchComponentValidityEvent(this.validityElement, this.dispatchObject);
      }
      const message = detail.validityMode === "INITIAL" ? "" : detail.validationMessage;
      if (message !== this.oldMessage) {
        this.forceLegendUpdate();
        this.oldMessage = message;
      }
    },
    /**
     * Workaround for NVDA-bug. Force re rendering of legend element due to NVDA not recognizing innerHTML changes.
     * NVDA has closed the bug as it is related to the browser (works in FF): https://github.com/nvaccess/nvda/issues/13162
     */
    forceLegendUpdate() {
      this.legendKey++;
    },
    async updateCheckboxChildren() {
      await this.$nextTick();
      const checkboxes = Array.from(this.$el.querySelectorAll('input[type="checkbox"]'));
      if (!isEqual(this.children, checkboxes)) {
        this.children = checkboxes;
      }
    }
  }
});
var _hoisted_1$G = ["id"];
var _hoisted_2$w = {
  key: 0,
  class: "sr-only"
};
var _hoisted_3$p = {
  key: 0,
  class: "label__message label__message--error"
};
var _hoisted_4$l = {
  key: 0,
  "data-test": "checked-boxes",
  class: "sr-only",
  "aria-live": "polite"
};
var _hoisted_5$h = {
  key: 0
};
var _hoisted_6$d = {
  key: 1
};
var _hoisted_7$a = {
  ref: "tooltipAttachTo",
  class: "label"
};
var _hoisted_8$6 = {
  "aria-hidden": "true"
};
var _hoisted_9$4 = {
  key: 0,
  class: "label__message label__message--error"
};
function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  return openBlock(), createElementBlock("fieldset", {
    id: _ctx.id,
    class: normalizeClass(["fieldset", _ctx.classes]),
    onValidity: _cache[0] || (_cache[0] = (...args) => _ctx.onValidity && _ctx.onValidity(...args))
  }, [(openBlock(), createElementBlock("legend", {
    key: _ctx.legendKey,
    class: normalizeClass(["label", _ctx.legendClass])
  }, [renderSlot(_ctx.$slots, "label"), _cache[1] || (_cache[1] = createTextVNode()), _ctx.hasCheckbox && _ctx.children.length > 1 ? (openBlock(), createElementBlock("span", _hoisted_2$w, [createElementVNode("span", null, toDisplayString(_ctx.numberOfCheckboxesScreenReaderText), 1)])) : createCommentVNode("", true), _cache[2] || (_cache[2] = createTextVNode()), renderSlot(_ctx.$slots, "description", {
    descriptionClass: _ctx.descriptionClass,
    formatDescriptionClass: _ctx.formatDescriptionClass
  }), _cache[3] || (_cache[3] = createTextVNode()), renderSlot(_ctx.$slots, "error-message", normalizeProps(guardReactiveProps({
    hasError: _ctx.hasError,
    validationMessage: _ctx.validity.validationMessage
  })), () => [_ctx.hasError ? (openBlock(), createElementBlock("span", _hoisted_3$p, [createVNode(_component_f_icon, {
    class: "label__icon--left",
    name: "error"
  }), createTextVNode(" " + toDisplayString(_ctx.validity.validationMessage), 1)])) : createCommentVNode("", true)])], 2)), _cache[7] || (_cache[7] = createTextVNode()), _ctx.hasCheckbox ? (openBlock(), createElementBlock("span", _hoisted_4$l, [_ctx.children.length === 1 ? (openBlock(), createElementBlock("span", _hoisted_5$h, toDisplayString(_ctx.checkboxCheckedScreenReaderText), 1)) : (openBlock(), createElementBlock("span", _hoisted_6$d, toDisplayString(_ctx.numberOfCheckedCheckboxesScreenText), 1))])) : createCommentVNode("", true), _cache[8] || (_cache[8] = createTextVNode()), _ctx.hasTooltipSlot ? (openBlock(), createElementBlock(Fragment, {
    key: 1
  }, [createElementVNode("div", _hoisted_7$a, [createElementVNode("span", _hoisted_8$6, [renderSlot(_ctx.$slots, "label")])], 512), _cache[5] || (_cache[5] = createTextVNode()), renderSlot(_ctx.$slots, "tooltip"), _cache[6] || (_cache[6] = createTextVNode()), _ctx.hasDescriptionSlot || _ctx.hasErrorMessageSlot || _ctx.hasError ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(["label", _ctx.groupLabelClass]),
    "aria-hidden": "true"
  }, [renderSlot(_ctx.$slots, "description", {
    descriptionClass: _ctx.descriptionClass,
    formatDescriptionClass: _ctx.formatDescriptionClass
  }), _cache[4] || (_cache[4] = createTextVNode()), renderSlot(_ctx.$slots, "error-message", normalizeProps(guardReactiveProps({
    hasError: _ctx.hasError,
    validationMessage: _ctx.validity.validationMessage
  })), () => [_ctx.hasError ? (openBlock(), createElementBlock("span", _hoisted_9$4, [createVNode(_component_f_icon, {
    class: "label__icon--left",
    name: "error"
  }), createTextVNode(" " + toDisplayString(_ctx.validity.validationMessage), 1)])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true)], 64)) : createCommentVNode("", true), _cache[9] || (_cache[9] = createTextVNode()), createElementVNode("div", {
    class: normalizeClass(_ctx.groupContentClass)
  }, [renderSlot(_ctx.$slots, "default")], 2)], 42, _hoisted_1$G);
}
var FFieldset = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["render", _sfc_render$t]]);
var anyType$1 = [String, Object, Array, Number, Date, Boolean];
var _sfc_main$V = defineComponent({
  name: "FCheckboxField",
  inheritAttrs: false,
  props: {
    /**
     * Set to `true`, empty string `""` or string `"disabled"` to disable this input field.
     */
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * The id for the input id attribute.
     * The id for the label for attribute.
     * If the prop is not set a random value will be generated.
     */
    id: {
      type: String,
      required: false,
      default: () => ElementIdService.generateElementId()
    },
    /**
     * The value for the input checked attribute.
     * @model
     */
    // ? The rule is disabled so that the `checked` prop can be undefined or null.
    /* eslint-disable-next-line vue/require-default-prop -- technical debt,
    /* it should contain a default value of undefined and proptype should
    /* include undefined (see comment on line above) */
    modelValue: {
      type: anyType$1,
      required: false
    },
    /**
     * The value for the input.
     */
    value: {
      type: anyType$1,
      required: true
    }
  },
  emits: ["change", "update:modelValue"],
  setup() {
    const {
      showDetails,
      getFieldsetLabelText
    } = useFieldset();
    return {
      showDetails,
      getFieldsetLabelText
    };
  },
  data() {
    return {
      expanded: false,
      height: 0,
      initialStyle: {
        overflow: "hidden",
        transition: "height 400ms cubic-bezier(0.46, 0.03, 0.52, 0.96)"
      },
      hiddenStyle: {
        height: "auto",
        position: "absolute",
        visibility: "hidden"
      },
      visibleStyle: {
        width: "",
        position: "",
        visibility: "",
        height: "0px"
      },
      openedStyle: {
        height: "auto"
      }
    };
  },
  computed: {
    attrs() {
      let checked;
      if (Array.isArray(this.modelValue)) {
        checked = this.modelValue.findIndex((it) => isEqual$1(toValue(it), toValue(this.value))) >= 0;
      } else {
        checked = this.value === this.modelValue;
      }
      return {
        ...this.$attrs,
        value: this.value,
        checked,
        onChange: (event) => {
          if (event.target instanceof HTMLInputElement) {
            this.emitVModelEvent(event);
          }
        },
        onInput: (event) => {
          event.target.focus();
        }
      };
    },
    disabledClass() {
      return this.disabled ? "disabled" : "";
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- technical debt, nore sure whats going on here
    injected() {
      return this;
    }
  },
  methods: {
    updateExpandedFlag() {
      const checkboxInput = getHTMLElementFromVueRef(this.$refs["checkboxInput"]);
      this.expanded = checkboxInput.checked;
    },
    emitVModelEvent(event) {
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
    },
    onKeydown(event) {
      event.stopPropagation();
    },
    onValidity({
      detail
    }) {
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
        dispatchComponentValidityEvent(element, {
          ...detail,
          errorMessage,
          focusElementId: detail.elementId
        });
      }
    },
    enter(element) {
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
    },
    afterEnter(element) {
      const htmlElement = getHTMLElementFromVueRef(element);
      Object.assign(htmlElement.style, this.openedStyle);
    },
    leave(element) {
      const htmlElement = getHTMLElementFromVueRef(element);
      const height = getComputedStyle(element).height;
      htmlElement.style.height = height;
      getComputedStyle(element).height;
      setTimeout(() => {
        Object.assign(htmlElement.style, this.visibleStyle);
      });
    }
  }
});
var _hoisted_1$F = ["id", "disabled"];
var _hoisted_2$v = ["for"];
var _hoisted_3$o = {
  key: 0,
  class: "checkbox__details"
};
var _hoisted_4$k = {
  key: 0,
  class: "checkbox__details"
};
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["checkbox", _ctx.disabledClass]),
    onValidity: _cache[2] || (_cache[2] = (...args) => _ctx.onValidity && _ctx.onValidity(...args))
  }, [createElementVNode("input", mergeProps({
    id: _ctx.id
  }, _ctx.attrs, {
    ref: "checkboxInput",
    type: "checkbox",
    class: "checkbox__input",
    disabled: _ctx.disabled,
    onKeydown: _cache[0] || (_cache[0] = withKeys((...args) => _ctx.onKeydown && _ctx.onKeydown(...args), ["space"])),
    onChange: _cache[1] || (_cache[1] = ($event) => _ctx.updateExpandedFlag())
  }), null, 16, _hoisted_1$F), _cache[9] || (_cache[9] = createTextVNode()), createElementVNode("label", {
    class: normalizeClass(_ctx.$slots.details ? "checkbox__label checkbox__width" : "checkbox__label"),
    for: _ctx.id
  }, [renderSlot(_ctx.$slots, "default"), _cache[8] || (_cache[8] = createTextVNode()), _ctx.$slots.details ? (openBlock(), createElementBlock(Fragment, {
    key: 0
  }, [_ctx.showDetails === "always" ? (openBlock(), createElementBlock("span", _hoisted_3$o, [_cache[3] || (_cache[3] = createElementVNode("br", null, null, -1)), _cache[4] || (_cache[4] = createTextVNode()), renderSlot(_ctx.$slots, "details")])) : createCommentVNode("", true), _cache[7] || (_cache[7] = createTextVNode()), _ctx.showDetails === "when-selected" ? (openBlock(), createBlock(Transition, {
    key: 1,
    onEnter: _ctx.enter,
    onAfterEnter: _ctx.afterEnter,
    onLeave: _ctx.leave
  }, {
    default: withCtx(() => [_ctx.expanded ? (openBlock(), createElementBlock("span", _hoisted_4$k, [_cache[5] || (_cache[5] = createElementVNode("br", null, null, -1)), _cache[6] || (_cache[6] = createTextVNode()), renderSlot(_ctx.$slots, "details", {
      height: _ctx.height
    })])) : createCommentVNode("", true)]),
    _: 3
  }, 8, ["onEnter", "onAfterEnter", "onLeave"])) : createCommentVNode("", true)], 64)) : createCommentVNode("", true)], 10, _hoisted_2$v)], 34);
}
var FCheckboxField = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$s]]);
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
function isContextMenuTextItem(value) {
  return typeof value.key === "string";
}
function isContextMenuSeparatorItem(value) {
  return typeof value.separator === "boolean" && value.separator;
}
function getNewItemIndexFromMenuAction$1(action, index, n) {
  let newIndex;
  if (n <= 0) {
    return 0;
  }
  switch (action) {
    case MenuAction.MOVE_NEXT:
      newIndex = (index + 1) % n;
      break;
    case MenuAction.MOVE_PREV:
      newIndex = (index - 1 + n) % n;
      break;
    case MenuAction.MOVE_FIRST:
      newIndex = 0;
      break;
    case MenuAction.MOVE_LAST:
      newIndex = Math.max(n - 1, 0);
      break;
    default:
      newIndex = index;
  }
  return newIndex;
}
async function doMenuAction$1(action, target) {
  const itemsLength = target.popupItems.length;
  const currentIndex = target.currentFocusedItemIndex;
  const newFocusedItemIndex = getNewItemIndexFromMenuAction$1(action, currentIndex, itemsLength);
  switch (action) {
    case MenuAction.MOVE_NEXT:
    case MenuAction.MOVE_PREV:
    case MenuAction.MOVE_FIRST:
    case MenuAction.MOVE_LAST:
      await target.setFocusOnItem(newFocusedItemIndex);
      break;
    case MenuAction.ACTIVATE:
      await target.activateItem(newFocusedItemIndex);
      break;
  }
}
var preventKeys$1 = ["Tab", "Up", "Down", "ArrowUp", "ArrowDown", "Home", "End", " ", "Spacebar", "Enter", "Escape"];
var keyUp = ["ArrowUp", "Up"];
var _sfc_main$U = defineComponent({
  name: "FContextMenu",
  components: {
    IPopup,
    FIcon
  },
  props: {
    /**
     * Toggle open/closed popup.
     */
    isOpen: {
      type: Boolean,
      required: true
    },
    /**
     * DOM element to position popup at.
     */
    anchor: {
      type: HTMLElement,
      required: false,
      default: void 0
    },
    /**
     * The items to be diplayed in the menu
     */
    items: {
      type: Array,
      required: true
    },
    /**
     * Unique accessible name for navigation landmark.
     */
    ariaLabel: {
      type: String,
      required: false,
      default: "Kontextuell meny"
    }
  },
  emits: ["close", "select"],
  setup() {
    return {
      contextmenu: ref(null)
    };
  },
  data() {
    return {
      selectedItem: "",
      currentFocusedItemIndex: -1
    };
  },
  computed: {
    popupItems() {
      return this.items.filter(isContextMenuTextItem);
    },
    separatorPositions() {
      const res = [];
      if (this.items.length > 1) {
        this.items.forEach((it, i) => {
          if (isContextMenuSeparatorItem(it)) {
            const pos = i - 1 - res.length;
            if (pos >= 0 && pos < this.items.length - 1) {
              res.push(pos);
            }
          }
        });
      }
      return res;
    },
    hasIcons() {
      return this.items.some((it) => isContextMenuTextItem(it) && it.icon);
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      async handler() {
        if (this.isOpen) {
          this.currentFocusedItemIndex = -1;
          this.selectedItem = "";
        }
      }
    }
  },
  methods: {
    hasSeparatorAfterItemAt(index) {
      return this.separatorPositions.includes(index);
    },
    closePopup() {
      this.$emit("close");
    },
    onClickItem(item) {
      if (isContextMenuTextItem(item) && item.key) {
        this.selectedItem = item.key;
        this.$emit("select", this.selectedItem);
        this.closePopup();
      }
    },
    tabIndex(index) {
      return index === this.currentFocusedItemIndex ? 0 : -1;
    },
    onKeyUp(event) {
      if (preventKeys$1.includes(event.key)) {
        event.preventDefault();
      }
    },
    doHandlePopupMenuTabKey(action) {
      if (action === MenuAction.MOVE_NEXT && this.currentFocusedItemIndex + 1 === this.popupItems.length) {
        this.closePopup();
        return true;
      } else if (action === MenuAction.MOVE_PREV && (this.currentFocusedItemIndex === 0 || this.currentFocusedItemIndex === -1)) {
        this.closePopup();
        return false;
      }
      return false;
    },
    async onKeyDown(event) {
      if (!preventKeys$1.includes(event.key)) {
        return;
      }
      if (event.key === "Escape") {
        this.$emit("close");
        return;
      }
      const action = actionFromKeyboardEvent(event);
      if (action === null) {
        return;
      }
      if (event.key === "Tab" && this.doHandlePopupMenuTabKey(action)) {
        return;
      }
      if (keyUp.includes(event.key) && this.currentFocusedItemIndex === -1) {
        this.currentFocusedItemIndex = this.popupItems.length > 0 ? this.popupItems.length : 1;
      }
      event.preventDefault();
      await doMenuAction$1(action, this);
    },
    async setFocusOnItem(index) {
      if (index < 0 || index >= this.popupItems.length) {
        return;
      }
      this.currentFocusedItemIndex = index;
      await this.$nextTick();
      if (!this.isOpen) {
        return;
      }
      const items = getHTMLElementsFromVueRef(this.$refs.items);
      if (items.length > 0) {
        const popupMenuItem = items[index];
        focus$1(popupMenuItem, {
          preventScroll: true
        });
      }
    },
    async activateItem(index) {
      if (index < 0 || index >= this.popupItems.length) {
        return;
      }
      if (index !== this.currentFocusedItemIndex) {
        await this.setFocusOnItem(index);
      }
      this.onClickItem(this.popupItems[this.currentFocusedItemIndex]);
    }
  }
});
var _hoisted_1$E = ["aria-label"];
var _hoisted_2$u = {
  ref: "contextmenu",
  role: "menu",
  tabindex: "-1",
  class: "contextmenu__list"
};
var _hoisted_3$n = ["onClick"];
var _hoisted_4$j = ["tabindex"];
var _hoisted_5$g = {
  key: 0,
  class: "contextmenu__separator"
};
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  const _component_i_popup = resolveComponent("i-popup");
  return openBlock(), createBlock(_component_i_popup, {
    "is-open": _ctx.isOpen,
    "keyboard-trap": false,
    anchor: _ctx.anchor,
    "set-focus": true,
    "focus-element": () => _ctx.contextmenu,
    inline: "never",
    onClose: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("close"))
  }, {
    default: withCtx(() => [createElementVNode("nav", {
      class: "contextmenu",
      "aria-label": _ctx.ariaLabel,
      onKeyup: _cache[0] || (_cache[0] = (...args) => _ctx.onKeyUp && _ctx.onKeyUp(...args)),
      onKeydown: _cache[1] || (_cache[1] = (...args) => _ctx.onKeyDown && _ctx.onKeyDown(...args))
    }, [createElementVNode("ul", _hoisted_2$u, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.popupItems, (item, index) => {
      return openBlock(), createElementBlock("li", {
        key: item.key,
        role: "menuitem",
        onClick: ($event) => _ctx.onClickItem(item)
      }, [createElementVNode("div", {
        ref_for: true,
        ref: "items",
        tabindex: _ctx.tabIndex(index),
        class: "contextmenu__list__item"
      }, [_ctx.hasIcons ? (openBlock(), createBlock(_component_f_icon, {
        key: 0,
        class: "contextmenu__lefticon",
        name: item.icon ? item.icon : "",
        library: item.iconLibrary ? item.iconLibrary : "f"
      }, null, 8, ["name", "library"])) : createCommentVNode("", true), _cache[3] || (_cache[3] = createTextVNode()), createElementVNode("a", {
        ref_for: true,
        ref: "anchors"
      }, toDisplayString(item.label), 513)], 8, _hoisted_4$j), _cache[4] || (_cache[4] = createTextVNode()), _ctx.hasSeparatorAfterItemAt(index) ? (openBlock(), createElementBlock("hr", _hoisted_5$g)) : createCommentVNode("", true)], 8, _hoisted_3$n);
    }), 128))], 512)], 40, _hoisted_1$E)]),
    _: 1
  }, 8, ["is-open", "anchor", "focus-element"]);
}
var FContextMenu = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$r]]);
var Operation = /* @__PURE__ */ ((Operation2) => {
  Operation2[Operation2["ADD"] = 0] = "ADD";
  Operation2[Operation2["DELETE"] = 1] = "DELETE";
  Operation2[Operation2["MODIFY"] = 2] = "MODIFY";
  Operation2[Operation2["NONE"] = 3] = "NONE";
  return Operation2;
})(Operation || {});
var _hoisted_1$D = {
  class: "crud-dataset"
};
var _hoisted_2$t = {
  key: 0
};
var _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "FCrudDataset",
  props: {
    /**
     * The list of items that should be deleted, modified or added to.
     * If the prop is not set an empty array will be used.
     * @model
     */
    modelValue: {
      type: Array,
      required: false,
      default: () => []
    },
    /**
     * A function that returns an item to the #add template. Can be used to populate data that the user should not input themself e.g. an id.
     * Or to give the user suggestions for inputs. If the prop is not used an empty item will be returned.
     */
    beforeCreate: {
      type: Function,
      required: false,
      default: void 0
    },
    /**
     * If `true` the primary button in the modals will be placed to the right side instead of to the left.
     */
    primaryButtonRight: {
      type: Boolean,
      default: false
    },
    /**
     * If given, this function is called before the [[submit]] event is emitted.
     * See <f-validation-form> `beforeSubmit` props for more info.
     */
    beforeSubmit: {
      type: Function,
      required: false,
      default() {
      }
    },
    /**
     * If given, this function is called before the form data is validated and the [[submit]] event is emitted.
     * See <f-validation-form> `beforeValidation` props for more info.
     */
    beforeValidation: {
      type: Function,
      required: false,
      default() {
      }
    },
    /**
     * If given, this function is called after the modal has been closed.
     */
    onCancel: {
      type: Function,
      required: false,
      default() {
        return void 0;
      }
    },
    /**
     * Property for changing the "add new" modal heading
     */
    addNewModalHeader: {
      type: String,
      required: false,
      default: TranslationService.provider.translate("fkui.crud-dataset.modal.header.add", "L\xE4gg till rad")
    },
    /**
     * Property for changing the "modify" modal heading
     */
    modifyModalHeader: {
      type: String,
      required: false,
      default: TranslationService.provider.translate("fkui.crud-dataset.modal.header.modify", "\xC4ndra rad")
    },
    /**
     * Property for changing the "delete" modal heading
     */
    deleteModalHeader: {
      type: String,
      required: false,
      default: TranslationService.provider.translate("fkui.crud-dataset.modal.header.delete", "\xC4r du s\xE4ker p\xE5 att du vill ta bort raden?")
    }
  },
  emits: ["created", "deleted", "updated", "update:modelValue"],
  setup(__props, {
    emit: __emit
  }) {
    const $t2 = useTranslate();
    const slots = useSlots();
    const result = ref([]);
    const operation = ref(Operation.NONE);
    const item = ref(null);
    const originalItemToUpdate = ref(null);
    const isFormModalOpen = ref(false);
    const isConfirmModalOpen = ref(false);
    const callbackAfterItemAdd = ref(() => ({}));
    const callbackBeforeItemDelete = ref(() => ({}));
    const props = __props;
    const emit = __emit;
    const formModalButtons = computed(() => {
      const confirmButtonText = operation.value === Operation.ADD ? (
        /** "Save" button in "add new" modal" */
        $t2("fkui.crud-dataset.modal.confirm.add", "L\xE4gg till")
      ) : (
        /** "Save" button in "modify" modal */
        $t2("fkui.crud-dataset.modal.confirm.modify", "Spara")
      );
      const cancelButtonText = operation.value === Operation.ADD ? (
        /** "Cancel" button in "add new" modal */
        $t2("fkui.crud-dataset.modal.cancel.add", "Avbryt")
      ) : (
        /** "Cancel" button in "modify" modal */
        $t2("fkui.crud-dataset.modal.cancel.modify", "Avbryt")
      );
      return [{
        label: confirmButtonText,
        event: "confirm",
        type: "primary",
        submitButton: true
      }, {
        label: cancelButtonText,
        event: "dismiss",
        type: "secondary",
        submitButton: false
      }];
    });
    const confirmDeleteButtons = computed(() => {
      return [{
        /** "Confirm" button in "delete" modal */
        label: $t2("fkui.crud-dataset.modal.confirm.delete", "Ja, ta bort"),
        type: "primary",
        event: "confirm"
      }, {
        /** "Cancel" button in "delete" modal */
        label: $t2("fkui.crud-dataset.modal.cancel.delete", "Nej, avbryt"),
        type: "secondary"
      }];
    });
    const hasAddSlot = computed(() => {
      return Boolean(slots.add);
    });
    const hasDeleteSlot = computed(() => {
      return Boolean(slots.delete);
    });
    const hasModifySlot = computed(() => {
      return Boolean(slots.modify);
    });
    const formModalHeader = computed(() => {
      return operation.value === Operation.ADD ? props.addNewModalHeader : props.modifyModalHeader;
    });
    provide("delete", deleteItem);
    provide("modify", updateItem);
    provide("registerCallbackAfterItemAdd", (callback) => {
      callbackAfterItemAdd.value = callback;
    });
    provide("registerCallbackBeforeItemDelete", (callback) => {
      callbackBeforeItemDelete.value = callback;
    });
    onMounted(() => {
      if (!hasAddSlot.value && !hasDeleteSlot.value && !hasModifySlot.value) {
        throw Error("At least one template of the following must be defined. #add, #delete or #modify");
      }
    });
    watch(() => props.modelValue, (data) => {
      result.value = [...data];
    }, {
      immediate: true,
      deep: true
    });
    function createItem() {
      if (!hasAddSlot.value) {
        throw Error("No template is defined for #add");
      }
      operation.value = Operation.ADD;
      item.value = props.beforeCreate ? props.beforeCreate() : {};
      isFormModalOpen.value = true;
    }
    function deleteItem(current) {
      if (!hasDeleteSlot.value) {
        throw Error("No template is defined for #delete");
      }
      operation.value = Operation.DELETE;
      item.value = current;
      isConfirmModalOpen.value = true;
    }
    function onDeleteConfirm() {
      if (!item.value) {
        return;
      }
      callbackBeforeItemDelete.value(item.value);
      result.value = result.value.filter((it) => it !== item.value);
      emit("deleted", item.value);
      emit("update:modelValue", result.value);
      const message = $t2("fkui.crud-dataset.aria-live.delete", "Raden har tagits bort");
      alertScreenReader(message, {
        assertive: true
      });
    }
    function onDeleteClose(e) {
      onModalClose();
      if (e.reason === "close" && props.onCancel) {
        props.onCancel();
      }
    }
    function onModalClose() {
      isFormModalOpen.value = false;
      isConfirmModalOpen.value = false;
    }
    function onFormModalSubmit() {
      if (!item.value) {
        return;
      }
      if (operation.value === Operation.ADD) {
        result.value.push(item.value);
        emit("created", item.value);
        emit("update:modelValue", result.value);
        callbackAfterItemAdd.value(item.value);
        const message = $t2("fkui.crud-dataset.aria-live.add", "En rad har lagts till");
        alertScreenReader(message, {
          assertive: true
        });
      } else if (operation.value === Operation.MODIFY) {
        if (originalItemToUpdate.value) {
          Object.assign(originalItemToUpdate.value, item.value);
        } else {
          originalItemToUpdate.value = item.value;
        }
        emit("updated", originalItemToUpdate.value);
        emit("update:modelValue", result.value);
        const message = $t2("fkui.crud-dataset.aria-live.modify", "Raden har \xE4ndrats");
        alertScreenReader(message, {
          assertive: true
        });
      }
      isFormModalOpen.value = false;
    }
    function updateItem(current) {
      if (!hasModifySlot.value) {
        throw Error("No template is defined for #modify");
      }
      operation.value = Operation.MODIFY;
      originalItemToUpdate.value = current;
      item.value = deepClone(current);
      isFormModalOpen.value = true;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$D, [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({
        updateItem,
        deleteItem
      }))), _cache[6] || (_cache[6] = createTextVNode()), hasAddSlot.value ? (openBlock(), createElementBlock("div", _hoisted_2$t, [createElementVNode("button", {
        "data-test": "f-crud-dataset-add-button",
        type: "button",
        class: "button button--tertiary crud-dataset__add-button",
        onClick: _cache[0] || (_cache[0] = ($event) => createItem())
      }, [createVNode(unref(FIcon), {
        class: "button__icon",
        name: "plus"
      }), _cache[1] || (_cache[1] = createTextVNode()), renderSlot(_ctx.$slots, "add-button", {}, () => [createTextVNode(toDisplayString(
        /** Buttontext for adding a new item */
        unref($t2)("fkui.crud-dataset.button.add", "L\xE4gg till ny")
      ), 1)])]), _cache[2] || (_cache[2] = createTextVNode()), renderSlot(_ctx.$slots, "buttons", normalizeProps(guardReactiveProps({
        buttonClasses: ["button", "button--tertiary", "crud-dataset__add-button"]
      })))])) : createCommentVNode("", true), _cache[7] || (_cache[7] = createTextVNode()), createVNode(unref(FFormModal), {
        "is-open": isFormModalOpen.value,
        "aria-close-text": unref($t2)("fkui.crud-dataset.modal.close", "St\xE4ng"),
        buttons: formModalButtons.value,
        "use-error-list": false,
        "before-submit": __props.beforeSubmit,
        "before-validation": __props.beforeValidation,
        "on-cancel": __props.onCancel,
        onClose: onModalClose,
        onCancel: __props.onCancel,
        onSubmit: onFormModalSubmit
      }, {
        header: withCtx(() => [createTextVNode(toDisplayString(formModalHeader.value), 1)]),
        "input-text-fields": withCtx(() => [operation.value === unref(Operation).ADD ? renderSlot(_ctx.$slots, "add", normalizeProps(mergeProps({
          key: 0
        }, {
          item: item.value
        }))) : createCommentVNode("", true), _cache[3] || (_cache[3] = createTextVNode()), operation.value === unref(Operation).MODIFY ? renderSlot(_ctx.$slots, "modify", normalizeProps(mergeProps({
          key: 1
        }, {
          item: item.value
        }))) : createCommentVNode("", true)]),
        _: 3,
        __: [4]
      }, 8, ["is-open", "aria-close-text", "buttons", "before-submit", "before-validation", "on-cancel", "onCancel"]), _cache[8] || (_cache[8] = createTextVNode()), createVNode(unref(FConfirmModal), {
        "is-open": isConfirmModalOpen.value,
        buttons: confirmDeleteButtons.value,
        onConfirm: onDeleteConfirm,
        onClose: onDeleteClose
      }, {
        heading: withCtx(() => [createTextVNode(toDisplayString(__props.deleteModalHeader), 1)]),
        content: withCtx(() => [renderSlot(_ctx.$slots, "delete", normalizeProps(guardReactiveProps({
          item: item.value
        })))]),
        _: 3,
        __: [5]
      }, 8, ["is-open", "buttons"])]);
    };
  }
});
var _hoisted_1$C = {
  key: 1,
  class: "sr-only"
};
var _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "FTableButton",
  props: {
    icon: {},
    label: {
      type: Boolean
    }
  },
  emits: ["click"],
  setup(__props, {
    emit: __emit
  }) {
    const emit = __emit;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "button table__button",
        onClick: _cache[0] || (_cache[0] = ($event) => emit("click"))
      }, [_ctx.icon ? (openBlock(), createBlock(unref(FIcon), {
        key: 0,
        class: "button__icon",
        name: _ctx.icon
      }, null, 8, ["name"])) : createCommentVNode("", true), _cache[1] || (_cache[1] = createTextVNode()), !_ctx.label ? (openBlock(), createElementBlock("span", _hoisted_1$C, [renderSlot(_ctx.$slots, "default")])) : renderSlot(_ctx.$slots, "default", {
        key: 2
      })]);
    };
  }
});
function FCrudDatasetInjected() {
  return {
    delete: inject("delete"),
    modify: inject("modify")
  };
}
var _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "FCrudButton",
  props: {
    /**
     * The action to be performed by the button.
     * Must be one of the following values: "delete" or "modify".
     */
    action: {
      type: String,
      required: true,
      validator(value) {
        return ["delete", "modify"].includes(value);
      }
    },
    /**
     * Determines if an icon should be displayed on the button.
     */
    icon: {
      type: Boolean,
      default: false
    },
    /**
     * The item that the action will be performed on.
     */
    item: {
      type: Object,
      required: true
    },
    /**
     * Determines if the button should display a label.
     * If false, the button will use a visually hidden text for accessibility.
     */
    label: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const $t2 = useTranslate();
    const crud = FCrudDatasetInjected();
    const iconName = computed(() => {
      if (!props.icon) {
        return void 0;
      }
      if (props.action === "delete") {
        return "trashcan";
      } else {
        return "pen";
      }
    });
    const buttonText = computed(() => {
      if (props.action === "delete") {
        return $t2("fkui.crud-button.delete", "Ta bort");
      } else {
        return $t2("fkui.crud-button.modify", "\xC4ndra");
      }
    });
    function executeAction() {
      if (props.action === "delete") {
        crud.delete(props.item);
      } else {
        crud.modify(props.item);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$S), {
        icon: iconName.value,
        label: props.label,
        onClick: executeAction
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(buttonText.value), 1)])]),
        _: 3
      }, 8, ["icon", "label"]);
    };
  }
});
function ActivateItemInjected() {
  return {
    registerCallbackAfterItemAdd: inject("registerCallbackAfterItemAdd", () => void 0),
    registerCallbackBeforeItemDelete: inject("registerCallbackBeforeItemDelete", () => void 0)
  };
}
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
  iterateSimple = function(record, fn2, ITERATOR_INSTEAD_OF_RECORD) {
    var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
    var next = record.next;
    var step, result;
    while (!(step = call(next, iterator)).done) {
      result = fn2(step.value);
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
  setIterate = function(set, fn2, interruptible) {
    return interruptible ? iterateSimple2({
      iterator: keys(set),
      next
    }, fn2) : forEach(set, fn2);
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
          var set = new Set2();
          set.add(1);
          set.add(2);
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
  setIntersection = function intersection2(other) {
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
  var intersection2 = requireSetIntersection();
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
    intersection: intersection2
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
      return result.size !== 1 || result.values().next().value !== 4;
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
var internalKey = Symbol("internal-key");
var internalIndex = 0;
function getInternalKey() {
  return internalKey;
}
function setInternalKey(item, value) {
  if (item[internalKey]) {
    return;
  }
  Object.defineProperty(item, internalKey, {
    value: value !== null && value !== void 0 ? value : String(internalIndex++),
    enumerable: false,
    writable: true
  });
}
function setInternalKeys(items, key, nestedKey, seenValues = /* @__PURE__ */ new Set()) {
  if (key === void 0) {
    return items.map((item) => {
      setInternalKey(item);
      if (nestedKey !== void 0) {
        const nestedItem = item[nestedKey];
        if (Array.isArray(nestedItem)) {
          setInternalKeys(nestedItem);
        }
      }
      return item;
    });
  }
  return items.map((item, index) => {
    const value = item[key];
    const keyString = String(key);
    const invalidValue = value === void 0 || value === null || String(value).length === 0;
    if (invalidValue) {
      throw new Error(`Key [${keyString}] is missing or has invalid value in item index ${index}`);
    }
    if (seenValues.has(value)) {
      throw new Error(`Expected each item to have key [${keyString}] with unique value but encountered duplicate of "${value}" in item index ${index}.`);
    }
    setInternalKey(item, String(value));
    seenValues.add(value);
    if (nestedKey !== void 0) {
      const nestedItem = item[nestedKey];
      if (Array.isArray(nestedItem)) {
        setInternalKeys(nestedItem, key, void 0, seenValues);
      }
    }
    return item;
  });
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
  if (column.name) {
    const hasDuplicateName = src.some((it) => it.name === column.name);
    if (hasDuplicateName) {
      throw new Error(`Expected FTableColumn to have a unique name but encountered duplicate of "${column.name}"`);
    }
  }
  if (!src.some((col) => col.id === column.id)) {
    return [...src, column];
  }
  return src;
}
function setVisibilityColumn(src, id, visible) {
  const column = src.find((col) => col.id === id);
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
  return {
    addColumn: inject("addColumn"),
    setVisibilityColumn: inject("setVisibilityColumn"),
    textFieldTableMode: true,
    renderColumns: inject("renderColumns", ref(false))
  };
}
var _sfc_main$Q = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "FTableColumn",
  props: {
    /**
     * Unique (per-table) identifier. Typically set to the row
     * property displayed but any unique string can be used.
     *
     * Only required when used with `FSortFilterDataset`.
     */
    name: {
      type: String,
      default: void 0
    },
    /**
     * When enabled controls column visibility (default `true`)
     *
     * Should be used instead of `v-if` or `v-show`.
     */
    visible: {
      type: Boolean,
      default: true
    },
    /**
     * When enabled this cell will be a row header (`<th>` as opposed to
     * `<td>`).
     */
    rowHeader: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * Text to show in column header. In order to force newlines use `\n`.
     */
    title: {
      type: String,
      required: true
    },
    /**
     * Additional column description.
     */
    description: {
      type: String,
      required: false,
      default: ""
    },
    /**
     * Set this column to shrink as small as possible.
     *
     * Cannot be combined with `expand`
     */
    shrink: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * Set this column to expand as large as possible.
     *
     * Cannot be combined with `shrink`
     *
     * Default if neither `expand` or `shrink` is set.
     */
    expand: {
      type: Boolean,
      required: false,
      default: false
    },
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
    type: {
      type: String,
      required: false,
      default: FTableColumnType.TEXT,
      validator(value) {
        return isTableColumnType(value);
      }
    }
  },
  setup(__props) {
    const {
      renderColumns,
      setVisibilityColumn: setVisibilityColumn2,
      addColumn: addColumn2
    } = FTableInjected();
    const hasMounted = ref(false);
    const isHeader = ref(false);
    const id = ElementIdService.generateElementId("column");
    const el = useTemplateRef("element");
    const props = __props;
    const classes = computed(() => {
      return ["table__column", `table__column--${props.type}`];
    });
    const scope = computed(() => {
      return props.rowHeader ? "row" : null;
    });
    const tagName2 = computed(() => {
      if (props.rowHeader) {
        return "th";
      } else {
        return "td";
      }
    });
    const renderElement = computed(() => {
      const shouldRender = !isHeader.value && renderColumns.value && props.visible;
      return !hasMounted.value || shouldRender;
    });
    watch(() => props.visible, () => {
      setVisibilityColumn2(id, props.visible);
    });
    onMounted(() => {
      if (props.shrink && props.expand) {
        throw new Error("Table cannot have both shrink and expand enabled at the same time");
      }
      const size = props.shrink ? FTableColumnSize.SHRINK : FTableColumnSize.EXPAND;
      isHeader.value = isTableHeader();
      if (isHeader.value) {
        addColumn2({
          name: props.name,
          title: props.title,
          description: props.description || void 0,
          id,
          size,
          type: props.type,
          visible: props.visible,
          sortable: false,
          sort: FTableColumnSort.UNSORTED
        });
      }
      hasMounted.value = true;
    });
    function isTableHeader() {
      if (!el.value || !(el.value instanceof HTMLElement)) {
        return false;
      }
      const closest = el.value.closest("thead, tbody");
      return (closest == null ? void 0 : closest.tagName) === "THEAD";
    }
    return (_ctx, _cache) => {
      return renderElement.value ? (openBlock(), createBlock(resolveDynamicComponent(tagName2.value), mergeProps({
        key: 0,
        ref: "element",
        class: classes.value,
        scope: scope.value
      }, _ctx.$attrs), {
        default: withCtx(() => [unref(renderColumns) ? (openBlock(), createElementBlock(Fragment, {
          key: 0
        }, [renderSlot(_ctx.$slots, "default"), _cache[0] || (_cache[0] = createTextVNode()), _cache[1] || (_cache[1] = createElementVNode("span", {
          class: "sr-only"
        }, "\xA0", -1))], 64)) : createCommentVNode("", true)]),
        _: 3
      }, 16, ["class", "scope"])) : createCommentVNode("", true);
    };
  }
});
function FSortFilterDatasetInjected() {
  return {
    sort: inject("sort", () => void 0),
    registerCallbackOnSort: inject("registerCallbackOnSort", () => void 0),
    registerCallbackOnMount: inject("registerCallbackOnMount", () => void 0)
  };
}
var _sfc_main$P = defineComponent({
  name: "FLabel",
  components: {
    FIcon
  },
  props: {
    /**
     * The id for the form element the label is bound to.
     */
    for: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup() {
    provide(tooltipAttachTo, useTemplateRef("tooltipAttachTo"));
  },
  data() {
    return {
      descriptionClass: ["label__description"],
      formatDescriptionClass: ["label__description", "label__description--format"]
    };
  },
  computed: {
    forProperty() {
      return this.for;
    },
    hasDefaultSlot() {
      return hasSlot(this, "default");
    },
    hasErrorMessageSlot() {
      return hasSlot(this, "error-message");
    },
    hasDescriptionSlot() {
      return hasSlot(this, "description");
    }
  }
});
var _hoisted_1$B = {
  key: 0
};
var _hoisted_2$s = {
  key: 0,
  ref: "tooltipAttachTo"
};
var _hoisted_3$m = ["for"];
var _hoisted_4$i = ["for"];
var _hoisted_5$f = {
  key: 0,
  class: "label__message label__message--error"
};
var _hoisted_6$c = ["for"];
var _hoisted_7$9 = {
  key: 0,
  class: "label__message label__message--error"
};
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  return _ctx.$slots.tooltip ? (openBlock(), createElementBlock("div", _hoisted_1$B, [_ctx.hasDefaultSlot ? (openBlock(), createElementBlock("div", _hoisted_2$s, [createElementVNode("label", {
    class: "label",
    for: _ctx.forProperty
  }, [renderSlot(_ctx.$slots, "default")], 8, _hoisted_3$m)], 512)) : createCommentVNode("", true), _cache[2] || (_cache[2] = createTextVNode()), renderSlot(_ctx.$slots, "tooltip"), _cache[3] || (_cache[3] = createTextVNode()), _ctx.hasDescriptionSlot || _ctx.hasErrorMessageSlot ? (openBlock(), createElementBlock("label", {
    key: 1,
    class: "label sr-separator",
    for: _ctx.forProperty
  }, [renderSlot(_ctx.$slots, "description", {
    descriptionClass: _ctx.descriptionClass,
    formatDescriptionClass: _ctx.formatDescriptionClass
  }), _cache[1] || (_cache[1] = createTextVNode()), _ctx.hasErrorMessageSlot ? (openBlock(), createElementBlock("span", _hoisted_5$f, [createVNode(_component_f_icon, {
    class: "label__icon--left",
    name: "error"
  }), _cache[0] || (_cache[0] = createTextVNode()), renderSlot(_ctx.$slots, "error-message")])) : createCommentVNode("", true)], 8, _hoisted_4$i)) : createCommentVNode("", true)])) : (openBlock(), createElementBlock("label", {
    key: 1,
    class: "label",
    for: _ctx.forProperty
  }, [renderSlot(_ctx.$slots, "default"), _cache[5] || (_cache[5] = createTextVNode()), renderSlot(_ctx.$slots, "description", {
    descriptionClass: _ctx.descriptionClass,
    formatDescriptionClass: _ctx.formatDescriptionClass
  }), _cache[6] || (_cache[6] = createTextVNode()), _ctx.hasErrorMessageSlot ? (openBlock(), createElementBlock("span", _hoisted_7$9, [createVNode(_component_f_icon, {
    class: "label__icon--left",
    name: "error"
  }), _cache[4] || (_cache[4] = createTextVNode()), renderSlot(_ctx.$slots, "error-message")])) : createCommentVNode("", true)], 8, _hoisted_6$c));
}
var FLabel = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$q]]);
function resolveWidthClass$1(words, inline) {
  return inline ? void 0 : words.split(" ").map((word) => `i-width-${word}`).join(" ");
}
var _sfc_main$O = defineComponent({
  name: "FSelectField",
  components: {
    FIcon,
    FLabel
  },
  inheritAttrs: false,
  props: {
    /**
     * The id for the select id attribute.
     * The id for the label for attribute.
     * If the prop is not set a random value will be generated.
     */
    id: {
      type: String,
      required: false,
      default: () => ElementIdService.generateElementId()
    },
    /**
     * Show the component inline.
     */
    inline: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * The value for the input.
     * If the prop is not set undefined will be used.
     * @model
     */
    modelValue: {
      type: [String, Number, Object, Array, Boolean, null],
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
    labelWidth: {
      type: String,
      required: false,
      default: "sm-12"
    },
    /**
     * Set responsive width for select section that wraps select element and icons.
     *
     * ```
     * select-width="md-6 lg-3"
     * ```
     */
    selectWidth: {
      type: String,
      required: false,
      default: "sm-12"
    }
  },
  emits: ["change", "update:modelValue"],
  setup() {
    return {
      textFieldTableMode: inject("textFieldTableMode", false)
    };
  },
  data() {
    return {
      validityMode: "INITIAL",
      validationMessage: ""
    };
  },
  computed: {
    attrs() {
      return {
        ...this.$attrs,
        // Disable change
        onChange: () => void 0
      };
    },
    hasError() {
      return this.validityMode === "ERROR";
    },
    rootClass() {
      return {
        ["select-field--error"]: this.hasError,
        ["select-field--inline"]: this.inline,
        ["text-field--table"]: this.textFieldTableMode,
        ["select-field--table-error"]: this.textFieldTableMode && this.hasError
      };
    },
    labelClass() {
      return this.textFieldTableMode ? "sr-only" : "";
    },
    labelWrapperClass() {
      return resolveWidthClass$1(this.labelWidth, this.inline);
    },
    selectWrapperClass() {
      return resolveWidthClass$1(this.selectWidth, this.inline);
    },
    vModel: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
        this.$emit("change", value);
      }
    }
  },
  methods: {
    async onValidity({
      detail
    }) {
      var _renderSlotText;
      this.validationMessage = detail.validationMessage;
      this.validityMode = detail.validityMode;
      await this.$nextTick();
      const errorMessage = (_renderSlotText = renderSlotText(this.$slots.label)) !== null && _renderSlotText !== void 0 ? _renderSlotText : "";
      const element = this.$el.querySelector(`#${detail.elementId}`);
      if (element) {
        dispatchComponentValidityEvent(element, {
          ...detail,
          errorMessage,
          focusElementId: detail.elementId
        });
      }
    }
  }
});
var _hoisted_1$A = ["id"];
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_label = resolveComponent("f-label");
  const _component_f_icon = resolveComponent("f-icon");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["select-field", _ctx.rootClass]),
    onValidity: _cache[1] || (_cache[1] = (...args) => _ctx.onValidity && _ctx.onValidity(...args))
  }, [createElementVNode("div", {
    class: normalizeClass(_ctx.labelWrapperClass)
  }, [createVNode(_component_f_label, {
    for: _ctx.id,
    class: normalizeClass(_ctx.labelClass)
  }, createSlots({
    default: withCtx(() => [renderSlot(_ctx.$slots, "label")]),
    description: withCtx(({
      descriptionClass,
      formatDescriptionClass
    }) => [renderSlot(_ctx.$slots, "description", {
      descriptionClass,
      formatDescriptionClass
    })]),
    "error-message": withCtx(() => [renderSlot(_ctx.$slots, "error-message", normalizeProps(guardReactiveProps({
      hasError: _ctx.hasError,
      validationMessage: _ctx.validationMessage
    })), () => [_ctx.hasError ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [createTextVNode(toDisplayString(_ctx.validationMessage), 1)], 64)) : createCommentVNode("", true)])]),
    _: 2
  }, [_ctx.$slots.tooltip ? {
    name: "tooltip",
    fn: withCtx(() => [renderSlot(_ctx.$slots, "tooltip")]),
    key: "0"
  } : void 0]), 1032, ["for", "class"])], 2), _cache[7] || (_cache[7] = createTextVNode()), createElementVNode("div", {
    class: normalizeClass(["select-field__icon-wrapper", _ctx.selectWrapperClass])
  }, [withDirectives(createElementVNode("select", mergeProps({
    id: _ctx.id,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.vModel = $event),
    class: "select-field__select"
  }, _ctx.attrs), [renderSlot(_ctx.$slots, "default")], 16, _hoisted_1$A), [[vModelSelect, _ctx.vModel]]), _cache[5] || (_cache[5] = createTextVNode()), _ctx.hasError && _ctx.textFieldTableMode ? (openBlock(), createBlock(_component_f_icon, {
    key: 0,
    ref: "icon",
    class: "text-field__icon input-icon select-field__error-popup-icon",
    name: "error"
  }, null, 512)) : createCommentVNode("", true), _cache[6] || (_cache[6] = createTextVNode()), createVNode(_component_f_icon, {
    class: "select-field__icon",
    name: "arrow-down"
  })], 2)], 34);
}
var FSelectField = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$p]]);
function resolveWidthClass(words, inline) {
  return inline ? void 0 : words.split(" ").map((word) => `i-width-${word}`).join(" ");
}
function setCursorAtEnd(input) {
  input.setSelectionRange(input.value.length, input.value.length);
}
function useTextFieldSetup(props) {
  const inputNode = useTemplateRef("input");
  const textFieldTableMode = inject("textFieldTableMode", false);
  const viewValue = ref("");
  async function onOptionSelected(value) {
    if (!inputNode.value) {
      return;
    }
    viewValue.value = value;
    await nextTick();
    inputNode.value.focus();
    setCursorAtEnd(inputNode.value);
  }
  const {
    dropdownId,
    dropdownIsOpen,
    dropdownOptions,
    activeOptionId,
    activeOption,
    toggleDropdown,
    selectOption,
    closeDropdown
  } = useCombobox(inputNode, toRef(props, "options"), onOptionSelected);
  return {
    textFieldTableMode,
    viewValue,
    onOptionSelected,
    dropdownId,
    dropdownIsOpen,
    dropdownOptions,
    activeOptionId,
    activeOption,
    toggleDropdown,
    selectOption,
    closeDropdown
  };
}
var _sfc_main$N = defineComponent({
  name: "FTextField",
  components: {
    FLabel,
    FIcon,
    IPopupError,
    IComboboxDropdown: _sfc_main$Z,
    IComboboxToggleButton: _sfc_main$Y
  },
  inheritAttrs: false,
  props: {
    /**
     * The id for the input id attribute.
     * The id for the label for attribute.
     * If the prop is not set a random value will be generated.
     */
    id: {
      type: String,
      required: false,
      default: () => ElementIdService.generateElementId()
    },
    /**
     * Show the component inline.
     */
    inline: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * The value for the input.
     * If the prop is not used or set to undefined
     * or null then the default value will be used.
     * @model
     */
    modelValue: {
      type: [String, Number, null],
      required: false,
      default: ""
    },
    /**
     * The type used for the input.
     * If the prop is not set text will be used.
     */
    type: {
      type: String,
      required: false,
      default: "text"
    },
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
    labelWidth: {
      type: String,
      required: false,
      default: "sm-12"
    },
    /**
     * Set responsive width for input section that wraps input element and icons.
     *
     * ```
     * input-width="md-6 lg-3"
     * ```
     */
    inputWidth: {
      type: String,
      required: false,
      default: "sm-12"
    },
    /**
     * List of options.
     *
     * When set, the user can select a value from the list of options and filter while typing.
     *
     * If options will be set at a later time, initially specify as an empty array.
     *
     * If a formatter is used by the component, make sure the options are formatted as well.
     */
    options: {
      type: Array,
      required: false,
      default: () => void 0
    },
    /**
     * Set to `true`, empty string `""` or string `"disabled"` to disable this field.
     */
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["blur", "change", "update:modelValue"],
  setup(props) {
    const {
      textFieldTableMode,
      viewValue,
      onOptionSelected,
      dropdownId,
      dropdownIsOpen,
      dropdownOptions,
      activeOptionId,
      activeOption,
      toggleDropdown,
      selectOption,
      closeDropdown
    } = useTextFieldSetup(props);
    return {
      textFieldTableMode,
      viewValue,
      onOptionSelected,
      dropdownId,
      dropdownIsOpen,
      dropdownOptions,
      activeOptionId,
      activeOption,
      toggleDropdown,
      selectOption,
      closeDropdown
    };
  },
  data() {
    return {
      showErrorPopup: false,
      lastModelValue: "",
      validationMessage: "",
      validityMode: "INITIAL",
      isAfterInitialRender: false,
      // internal default texts possible to override when extending component
      defaultText: "",
      descriptionText: "",
      descriptionScreenReaderText: "",
      discreteDescriptionText: "",
      discreteDescriptionScreenReaderText: ""
    };
  },
  computed: {
    showPopupError() {
      return this.textFieldTableMode && this.hasError && this.showErrorPopup;
    },
    labelClass() {
      return this.textFieldTableMode ? "sr-only" : "";
    },
    isValid() {
      return this.validityMode === "VALID";
    },
    hasError() {
      return this.validityMode === "ERROR";
    },
    rootClass() {
      return {
        "text-field--error": this.hasError,
        "text-field--inline": this.inline,
        "text-field--table": this.textFieldTableMode
      };
    },
    labelWrapperClass() {
      return resolveWidthClass(this.labelWidth, this.inline);
    },
    inputWrapperClass() {
      return resolveWidthClass(this.inputWidth, this.inline);
    },
    isModelUpdatedProgrammatically() {
      return this.lastModelValue !== this.modelValue;
    }
  },
  watch: {
    modelValue: {
      immediate: true,
      handler: function() {
        if (this.modelValue === void 0 || this.modelValue === null) {
          this.viewValue = "";
          return;
        }
        if (!this.isModelUpdatedProgrammatically) {
          return;
        }
        this.setViewValueToFormattedValueOrFallbackToValue();
        this.lastModelValue = this.modelValue;
      }
    }
  },
  beforeUpdate() {
    this.isAfterInitialRender = true;
  },
  methods: {
    onDropdownSelect(value) {
      this.selectOption(value);
    },
    onDropdownClose() {
      this.closeDropdown();
    },
    getErrorPopupAnchor() {
      return this.$refs.input;
    },
    closePopupError() {
      this.showErrorPopup = false;
    },
    async onChange() {
      if (!this.$refs.input.hasAttribute("data-validation")) {
        this.$emit("update:modelValue", this.viewValue);
        await this.$nextTick();
        this.$emit("change", this.viewValue);
      }
    },
    onFocus() {
      this.showErrorPopup = true;
    },
    async onBlur() {
      this.showErrorPopup = false;
      if (!this.$refs.input) {
        return;
      }
      if (!this.$refs.input.hasAttribute("data-validation")) {
        this.$emit("update:modelValue", this.viewValue);
        await this.$nextTick();
        this.$emit("blur", this.viewValue);
      }
    },
    async onValidity({
      detail
    }) {
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
        await this.$nextTick();
        this.$emit(detail.nativeEvent, newModelValue);
        if (detail.isValid) {
          this.syncViewValueAfterModelUpdate(newModelValue);
        }
      }
      this.triggerComponentValidityEvent(detail);
    },
    onPendingValidity() {
      this.validityMode = "INITIAL";
    },
    async onValidationConfigUpdate() {
      if (!this.isAfterInitialRender) {
        return;
      }
      await this.$nextTick();
      if (!this.$refs.input) {
        return;
      }
      ValidationService.validateElement(this.$refs.input);
    },
    resolveNewModelValue(viewValue) {
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
    },
    syncViewValueAfterModelUpdate(newModelValue) {
      if (newModelValue === "") {
        this.viewValue = "";
      } else if (isSet(this.parser)) {
        if (isSet(this.formatter)) {
          this.viewValue = String(this.formatter(newModelValue) || this.viewValue);
        }
      } else {
        this.viewValue = String(newModelValue);
      }
    },
    triggerComponentValidityEvent(validityEvent) {
      var _renderSlotText;
      const errorMessage = (_renderSlotText = renderSlotText(this.$slots.default, {}, {
        stripClasses: []
      })) !== null && _renderSlotText !== void 0 ? _renderSlotText : this.defaultText;
      const element = this.$el.querySelector(`#${validityEvent.elementId}`);
      if (element) {
        dispatchComponentValidityEvent(element, {
          ...validityEvent,
          errorMessage,
          focusElementId: validityEvent.elementId
        });
      }
    },
    setViewValueToFormattedValueOrFallbackToValue() {
      if (!isSet(this.formatter)) {
        this.viewValue = String(this.modelValue);
        return;
      }
      const parsedValue = isSet(this.parser) && typeof this.modelValue === "string" ? this.parser(this.modelValue) : this.modelValue;
      const formattedValue = isSet(parsedValue) ? this.formatter(parsedValue) : void 0;
      this.viewValue = isSet(formattedValue) ? formattedValue : String(this.modelValue);
    }
  }
});
var _hoisted_1$z = {
  key: 0
};
var _hoisted_2$r = {
  key: 0,
  class: "sr-only"
};
var _hoisted_3$l = {
  key: 0,
  class: "sr-only"
};
var _hoisted_4$h = {
  class: "text-field__icon-wrapper"
};
var _hoisted_5$e = ["id", "disabled", "type"];
var _hoisted_6$b = {
  key: 2,
  class: "text-field__append-inner"
};
var _hoisted_7$8 = {
  key: 3,
  class: "text-field__append-inner"
};
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_label = resolveComponent("f-label");
  const _component_f_icon = resolveComponent("f-icon");
  const _component_i_popup_error = resolveComponent("i-popup-error");
  const _component_i_combobox_toggle_button = resolveComponent("i-combobox-toggle-button");
  const _component_i_combobox_dropdown = resolveComponent("i-combobox-dropdown");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["text-field", _ctx.rootClass])
  }, [createElementVNode("div", {
    class: normalizeClass(_ctx.labelWrapperClass)
  }, [createVNode(_component_f_label, {
    for: _ctx.id,
    class: normalizeClass(_ctx.labelClass)
  }, createSlots({
    default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [_ctx.defaultText !== "" ? (openBlock(), createElementBlock("span", _hoisted_1$z, toDisplayString(_ctx.defaultText), 1)) : createCommentVNode("", true)])]),
    description: withCtx(({
      descriptionClass,
      formatDescriptionClass
    }) => [renderSlot(_ctx.$slots, "description", {
      descriptionClass,
      formatDescriptionClass
    }, () => [_ctx.descriptionText ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(descriptionClass)
    }, [_ctx.descriptionScreenReaderText ? (openBlock(), createElementBlock("span", _hoisted_2$r, toDisplayString(_ctx.descriptionScreenReaderText), 1)) : createCommentVNode("", true), _cache[7] || (_cache[7] = createTextVNode()), createElementVNode("span", null, toDisplayString(_ctx.descriptionText), 1)], 2)) : createCommentVNode("", true), _cache[9] || (_cache[9] = createTextVNode()), _ctx.discreteDescriptionText ? (openBlock(), createElementBlock("span", {
      key: 1,
      class: normalizeClass(formatDescriptionClass)
    }, [_ctx.discreteDescriptionScreenReaderText ? (openBlock(), createElementBlock("span", _hoisted_3$l, toDisplayString(_ctx.discreteDescriptionScreenReaderText), 1)) : createCommentVNode("", true), _cache[8] || (_cache[8] = createTextVNode()), createElementVNode("span", null, toDisplayString(_ctx.discreteDescriptionText), 1)], 2)) : createCommentVNode("", true)])]),
    "error-message": withCtx(() => [renderSlot(_ctx.$slots, "error-message", normalizeProps(guardReactiveProps({
      hasError: _ctx.hasError,
      validationMessage: _ctx.validationMessage
    })), () => [_ctx.hasError ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [createTextVNode(toDisplayString(_ctx.validationMessage), 1)], 64)) : createCommentVNode("", true)])]),
    _: 2
  }, [_ctx.$slots.tooltip ? {
    name: "tooltip",
    fn: withCtx(() => [renderSlot(_ctx.$slots, "tooltip")]),
    key: "0"
  } : void 0]), 1032, ["for", "class"])], 2), _cache[19] || (_cache[19] = createTextVNode()), createElementVNode("div", {
    class: normalizeClass(["text-field__input-wrapper", _ctx.inputWrapperClass])
  }, [renderSlot(_ctx.$slots, "input-left"), _cache[17] || (_cache[17] = createTextVNode()), createElementVNode("div", _hoisted_4$h, [withDirectives(createElementVNode("input", mergeProps({
    id: _ctx.id,
    ref: "input",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.viewValue = $event),
    disabled: _ctx.disabled,
    type: _ctx.type,
    class: "text-field__input"
  }, _ctx.$attrs, {
    onBlur: _cache[1] || (_cache[1] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
    onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.onFocus && _ctx.onFocus(...args)),
    onChange: _cache[3] || (_cache[3] = (...args) => _ctx.onChange && _ctx.onChange(...args)),
    onValidationConfigUpdate: _cache[4] || (_cache[4] = (...args) => _ctx.onValidationConfigUpdate && _ctx.onValidationConfigUpdate(...args)),
    onValidity: _cache[5] || (_cache[5] = (...args) => _ctx.onValidity && _ctx.onValidity(...args)),
    onPendingValidity: _cache[6] || (_cache[6] = (...args) => _ctx.onPendingValidity && _ctx.onPendingValidity(...args))
  }), null, 16, _hoisted_5$e), [[vModelDynamic, _ctx.viewValue]]), _cache[13] || (_cache[13] = createTextVNode()), _ctx.hasError && _ctx.textFieldTableMode ? (openBlock(), createBlock(_component_f_icon, {
    key: 0,
    ref: "icon",
    class: "text-field__icon input-icon text-field__append-inner text-field__error-popup-icon",
    name: "error"
  }, null, 512)) : createCommentVNode("", true), _cache[14] || (_cache[14] = createTextVNode()), _ctx.textFieldTableMode ? (openBlock(), createBlock(_component_i_popup_error, {
    key: 1,
    anchor: _ctx.getErrorPopupAnchor(),
    "is-open": _ctx.showPopupError,
    "error-message": _ctx.validationMessage,
    onClose: _ctx.closePopupError
  }, null, 8, ["anchor", "is-open", "error-message", "onClose"])) : createCommentVNode("", true), _cache[15] || (_cache[15] = createTextVNode()), _ctx.$slots["append-inner"] ? (openBlock(), createElementBlock("div", _hoisted_6$b, [renderSlot(_ctx.$slots, "append-inner")])) : createCommentVNode("", true), _cache[16] || (_cache[16] = createTextVNode()), _ctx.options ? (openBlock(), createElementBlock("div", _hoisted_7$8, [createVNode(_component_i_combobox_toggle_button, {
    disabled: _ctx.disabled,
    "aria-controls": _ctx.dropdownIsOpen ? _ctx.dropdownId : void 0,
    "aria-expanded": _ctx.dropdownIsOpen,
    onToggle: _ctx.toggleDropdown
  }, null, 8, ["disabled", "aria-controls", "aria-expanded", "onToggle"])])) : createCommentVNode("", true)]), _cache[18] || (_cache[18] = createTextVNode()), renderSlot(_ctx.$slots, "input-right")], 2), _cache[20] || (_cache[20] = createTextVNode()), _ctx.options && _ctx.$refs.input ? (openBlock(), createBlock(_component_i_combobox_dropdown, {
    key: 0,
    id: _ctx.dropdownId,
    "is-open": _ctx.dropdownIsOpen,
    options: _ctx.dropdownOptions,
    "active-option": _ctx.activeOption,
    "active-option-id": _ctx.activeOptionId,
    "input-node": _ctx.$refs.input,
    onSelect: _ctx.onDropdownSelect,
    onClose: _ctx.onDropdownClose
  }, null, 8, ["id", "is-open", "options", "active-option", "active-option-id", "input-node", "onSelect", "onClose"])) : createCommentVNode("", true)], 2);
}
var FTextField = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$o]]);
var _sfc_main$M = defineComponent({
  name: "FEmailTextField",
  components: {
    FTextField
  },
  mixins: [TranslationMixin],
  inheritAttrs: false,
  props: {
    /**
     * The id for the input id attribute.
     * The id for the label for attribute.
     * If the prop is not set a random value will be generated.
     */
    id: {
      type: String,
      required: false,
      default: () => ElementIdService.generateElementId()
    },
    /**
     * The value for the input.
     * If the prop is not set undefined will be used.
     * @model
     */
    modelValue: {
      type: [String, null],
      required: false,
      default: void 0
    },
    maxLength: {
      type: Number,
      default: 80
    },
    extendedValidation: {
      type: Boolean,
      default: false
    },
    /**
     * The error message to be displayed on paste
     * If the prop is not set the default text "Du kan inte kopiera mejladressen. Du måste skriva in den igen." will be set
     */
    pasteErrorText: {
      type: String,
      required: false,
      default: TranslationService.provider.translate("fkui.email-text-field.error.pasting", "Du kan inte kopiera mejladressen. Du m\xE5ste skriva in den igen.")
    }
  },
  emits: ["blur", "change", "update:modelValue"],
  data() {
    return {
      validityMode: "INITIAL",
      secondEmail: "",
      showPasteErrorMessage: false,
      defaultText: this.$t("fkui.email-text-field.label", "Mejladress")
    };
  },
  mounted() {
    this.configureValidators();
  },
  methods: {
    onChange(event) {
      this.$emit("change", event);
    },
    onBlur(event) {
      this.$emit("blur", event);
    },
    onUpdate(event) {
      this.$emit("update:modelValue", event);
    },
    onPaste(event) {
      this.showPasteErrorMessage = true;
      event.preventDefault();
      return false;
    },
    onValidity({
      detail
    }) {
      var _renderSlotText;
      this.showPasteErrorMessage = false;
      this.validityMode = detail.validityMode;
      const errorMessage = (_renderSlotText = renderSlotText(this.$slots.default)) !== null && _renderSlotText !== void 0 ? _renderSlotText : this.defaultText;
      const element = this.$el.querySelector(`#${detail.elementId}`);
      if (element) {
        dispatchComponentValidityEvent(element, {
          ...detail,
          errorMessage,
          focusElementId: detail.elementId
        });
      }
    },
    onPendingValidity() {
      this.validityMode = "INITIAL";
    },
    configureValidators() {
      const elements = Array.from(this.$el.querySelectorAll("input"));
      const validatorEmailConfig = {
        email: {}
      };
      ValidationService.addValidatorsToElement(elements[0], validatorEmailConfig, true);
      if (this.extendedValidation) {
        this.configureExtendedValidation(elements);
      }
    },
    configureExtendedValidation(elements) {
      const validatorEmailMatchesConfig = {
        required: {
          enabled: elements[0].hasAttribute("required")
        },
        email: {},
        matches: {
          id: elements[0].id
        }
      };
      ValidationService.addValidatorsToElement(elements[1], validatorEmailMatchesConfig, true);
    }
  }
});
var _hoisted_1$y = {
  key: 0
};
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = resolveComponent("f-text-field");
  return openBlock(), createElementBlock("div", null, [createVNode(_component_f_text_field, mergeProps({
    id: _ctx.id,
    type: "email",
    maxlength: _ctx.maxLength
  }, _ctx.$attrs, {
    "model-value": _ctx.modelValue,
    onChange: _ctx.onChange,
    onBlur: _ctx.onBlur,
    "onUpdate:modelValue": _ctx.onUpdate,
    onValidity: _ctx.onValidity,
    onPendingValidity: _ctx.onPendingValidity
  }), {
    "error-message": withCtx(() => [_ctx.showPasteErrorMessage ? (openBlock(), createElementBlock("span", _hoisted_1$y, toDisplayString(_ctx.pasteErrorText), 1)) : createCommentVNode("", true)]),
    default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.defaultText), 1)]), _cache[2] || (_cache[2] = createTextVNode())]),
    _: 3,
    __: [2]
  }, 16, ["id", "maxlength", "model-value", "onChange", "onBlur", "onUpdate:modelValue", "onValidity", "onPendingValidity"]), _cache[3] || (_cache[3] = createTextVNode()), _ctx.extendedValidation ? (openBlock(), createBlock(_component_f_text_field, {
    key: 0,
    modelValue: _ctx.secondEmail,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.secondEmail = $event),
    type: "email",
    maxlength: _ctx.maxLength,
    onPaste: _ctx.onPaste,
    onBlur: _cache[1] || (_cache[1] = ($event) => _ctx.showPasteErrorMessage = false)
  }, {
    default: withCtx(() => [renderSlot(_ctx.$slots, "extended-label", {}, () => [createTextVNode(toDisplayString(_ctx.$t("fkui.email-text-field.label.repeat", "Upprepa mejladress")), 1)])]),
    _: 3
  }, 8, ["modelValue", "maxlength", "onPaste"])) : createCommentVNode("", true)]);
}
var FEmailTextField = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$n]]);
var _sfc_main$L = defineComponent({
  name: "FPhoneTextField",
  components: {
    FTextField
  },
  mixins: [TranslationMixin],
  inheritAttrs: false,
  props: {
    /**
     * The id for the input id attribute.
     * The id for the label for attribute.
     * If the prop is not set a random value will be generated.
     */
    id: {
      type: String,
      required: false,
      default: () => ElementIdService.generateElementId()
    },
    /**
     * The value for the input.
     * If the prop is not used or set to undefined
     * or null then the default value will be used.
     * @model
     */
    modelValue: {
      type: [String, null],
      required: false,
      default: void 0
    },
    maxLength: {
      type: Number,
      default: 80
    },
    extendedValidation: {
      type: Boolean,
      default: false
    }
  },
  emits: ["blur", "change", "update:modelValue"],
  data() {
    return {
      validityMode: "INITIAL",
      secondPhone: "",
      defaultText: this.$t("fkui.phone-text-field.label", "Telefonnummer")
    };
  },
  mounted() {
    this.configureValidators();
  },
  methods: {
    onChange(event) {
      this.$emit("change", event);
    },
    onBlur(event) {
      this.$emit("blur", event);
    },
    onUpdate(event) {
      this.$emit("update:modelValue", event);
    },
    onValidity({
      detail
    }) {
      var _renderSlotText;
      this.validityMode = detail.validityMode;
      const errorMessage = (_renderSlotText = renderSlotText(this.$slots.default)) !== null && _renderSlotText !== void 0 ? _renderSlotText : this.defaultText;
      const element = this.$el.querySelector(`#${detail.elementId}`);
      if (element) {
        dispatchComponentValidityEvent(element, {
          ...detail,
          errorMessage,
          focusElementId: detail.elementId
        });
      }
    },
    onPendingValidity() {
      this.validityMode = "INITIAL";
    },
    configureValidators() {
      const elements = Array.from(this.$el.querySelectorAll("input"));
      const validatorPhoneConfig = {
        phoneNumber: {}
      };
      ValidationService.addValidatorsToElement(elements[0], validatorPhoneConfig, true);
      if (this.extendedValidation) {
        this.configureExtendedValidation(elements);
      }
    },
    configureExtendedValidation(elements) {
      const validatorPhoneMatchesConfig = {
        required: {
          enabled: elements[0].hasAttribute("required")
        },
        phoneNumber: {},
        matches: {
          id: elements[0].id
        }
      };
      ValidationService.addValidatorsToElement(elements[1], validatorPhoneMatchesConfig, true);
    }
  }
});
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = resolveComponent("f-text-field");
  return openBlock(), createElementBlock("div", null, [createVNode(_component_f_text_field, mergeProps({
    id: _ctx.id,
    type: "tel",
    maxlength: _ctx.maxLength
  }, _ctx.$attrs, {
    "model-value": _ctx.modelValue,
    onChange: _ctx.onChange,
    onBlur: _ctx.onBlur,
    "onUpdate:modelValue": _ctx.onUpdate,
    onValidity: _ctx.onValidity,
    onPendingValidity: _ctx.onPendingValidity
  }), {
    default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.defaultText), 1)])]),
    _: 3
  }, 16, ["id", "maxlength", "model-value", "onChange", "onBlur", "onUpdate:modelValue", "onValidity", "onPendingValidity"]), _cache[1] || (_cache[1] = createTextVNode()), _ctx.extendedValidation ? (openBlock(), createBlock(_component_f_text_field, {
    key: 0,
    modelValue: _ctx.secondPhone,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.secondPhone = $event),
    type: "tel",
    maxlength: _ctx.maxLength
  }, {
    default: withCtx(() => [renderSlot(_ctx.$slots, "extendedLabel", {}, () => [createTextVNode(toDisplayString(_ctx.$t("fkui.phone-text-field.label.repeat", "Upprepa telefonnumret")), 1)])]),
    _: 3
  }, 8, ["modelValue", "maxlength"])) : createCommentVNode("", true)]);
}
var FPhoneTextField = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$m]]);
var _sfc_main$K = defineComponent({
  name: "FCurrencyTextField",
  extends: FTextField,
  mixins: [TranslationMixin],
  props: {
    formatter: {
      type: Function,
      required: false,
      default: formatNumber$1
    },
    parser: {
      type: Function,
      required: false,
      default: parseNumber
    }
  },
  setup(props) {
    return useTextFieldSetup(props);
  },
  data() {
    return {
      defaultText: this.$t("fkui.currency-text-field.label", "Pengar")
    };
  },
  mounted() {
    const inputElement = getInputElement(this);
    inputElement.setAttribute("inputmode", "numeric");
    inputElement.setAttribute("maxlength", "20");
    ValidationService.addValidatorsToElement(inputElement, {
      currency: {},
      integer: {}
    }, true);
    ValidationService.validateElement(inputElement);
  }
});
var _sfc_main$J = defineComponent({
  name: "FSearchTextField",
  components: {
    FTextField,
    FIcon
  },
  props: {
    id: {
      type: String,
      required: false,
      default: () => ElementIdService.generateElementId()
    },
    modelValue: {
      type: [String, null],
      required: false,
      default: ""
    },
    clearableScreenReaderText: {
      type: String,
      required: false,
      default: TranslationService.provider.translate("fkui.search-text-field.search-screen-reader", "T\xF6m inmatningsf\xE4lt")
    },
    maxLength: {
      type: Number,
      default: 80
    }
  },
  emits: ["blur", "change", "update", "update:modelValue"],
  data() {
    return {
      defaultText: this.$t("fkui.search-text-field.label", "S\xF6k")
    };
  },
  computed: {
    canClear() {
      const isEmpty2 = this.modelValue === void 0 || this.modelValue === null || this.modelValue === "";
      return !isEmpty2;
    }
  },
  methods: {
    clear() {
      alertScreenReader(this.$t("fkui.search-text-field.aria-live.clear", "Inmatningsf\xE4ltet har t\xF6mts"), {
        assertive: true
      });
      this.$emit("update:modelValue", "");
      this.$el.querySelector("input").focus();
    },
    onInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    onChange(event) {
      this.$emit("change", event);
    },
    onBlur(event) {
      this.$emit("blur", event);
    },
    onUpdate(event) {
      this.$emit("update:modelValue", event);
    }
  }
});
var _hoisted_1$x = {
  class: "sr-only"
};
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  const _component_f_text_field = resolveComponent("f-text-field");
  return openBlock(), createElementBlock("div", null, [createVNode(_component_f_text_field, mergeProps({
    id: _ctx.id,
    maxlength: _ctx.maxLength,
    "model-value": _ctx.modelValue
  }, _ctx.$attrs, {
    type: "search",
    class: "text-field--search",
    onChange: _ctx.onChange,
    onInput: _ctx.onInput,
    onBlur: _ctx.onBlur,
    onUpdate: _ctx.onUpdate
  }), createSlots({
    "input-right": withCtx(() => [renderSlot(_ctx.$slots, "input-right")]),
    "input-left": withCtx(() => [renderSlot(_ctx.$slots, "input-left")]),
    "error-message": withCtx(({
      hasError,
      validationMessage
    }) => [renderSlot(_ctx.$slots, "error-message", normalizeProps(guardReactiveProps({
      hasError,
      validationMessage
    })))]),
    description: withCtx(({
      descriptionClass,
      formatDescriptionClass
    }) => [renderSlot(_ctx.$slots, "description", {
      descriptionClass,
      formatDescriptionClass
    })]),
    default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.defaultText), 1)]), _cache[2] || (_cache[2] = createTextVNode()), _cache[3] || (_cache[3] = createTextVNode()), _cache[4] || (_cache[4] = createTextVNode()), _cache[5] || (_cache[5] = createTextVNode()), _cache[6] || (_cache[6] = createTextVNode()), _cache[7] || (_cache[7] = createTextVNode())]),
    _: 2
  }, [_ctx.$slots.tooltip ? {
    name: "tooltip",
    fn: withCtx(() => [renderSlot(_ctx.$slots, "tooltip")]),
    key: "0"
  } : void 0, _ctx.canClear ? {
    name: "append-inner",
    fn: withCtx(() => [createElementVNode("button", {
      class: "text-field__icon clear-button",
      type: "button",
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.clear && _ctx.clear(...args), ["self"]))
    }, [createVNode(_component_f_icon, {
      name: "cross",
      class: "clear-button__icon"
    }), _cache[1] || (_cache[1] = createTextVNode()), createElementVNode("span", _hoisted_1$x, toDisplayString(_ctx.clearableScreenReaderText), 1)])]),
    key: "1"
  } : void 0]), 1040, ["id", "maxlength", "model-value", "onChange", "onInput", "onBlur", "onUpdate"])]);
}
var FSearchTextField = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$l]]);
var _sfc_main$I = defineComponent({
  name: "FBankAccountNumberTextField",
  extends: FTextField,
  mixins: [TranslationMixin],
  props: {
    parser: {
      type: Function,
      required: false,
      default: parseBankAccountNumber
    }
  },
  setup(props) {
    return useTextFieldSetup(props);
  },
  data() {
    return {
      defaultText: this.$t("fkui.bank-account-number-text-field.label", "Kontonummer")
    };
  },
  mounted() {
    const inputElement = getInputElement(this);
    ValidationService.addValidatorsToElement(inputElement, {
      bankAccountNumber: {}
    }, true);
    inputElement.setAttribute("inputmode", "numeric");
    inputElement.setAttribute("maxlength", "40");
    ValidationService.validateElement(inputElement);
  }
});
var _sfc_main$H = defineComponent({
  name: "FBankgiroTextField",
  extends: FTextField,
  mixins: [TranslationMixin],
  props: {
    formatter: {
      type: Function,
      required: false,
      default: parseBankgiro
    }
  },
  setup(props) {
    return useTextFieldSetup(props);
  },
  data() {
    return {
      defaultText: this.$t("fkui.bankgiro-text-field.label", "Bankgironummer")
    };
  },
  mounted() {
    const inputElement = getInputElement(this);
    ValidationService.addValidatorsToElement(inputElement, {
      maxLength: {
        length: 9
      },
      bankgiro: {}
    }, true);
    inputElement.setAttribute("inputmode", "numeric");
    inputElement.setAttribute("maxlength", "40");
    ValidationService.validateElement(inputElement);
  }
});
var _sfc_main$G = defineComponent({
  name: "FClearingnumberTextField",
  extends: FTextField,
  mixins: [TranslationMixin],
  props: {
    formatter: {
      type: Function,
      required: false,
      default: parseClearingNumber
    }
  },
  setup(props) {
    return useTextFieldSetup(props);
  },
  data() {
    return {
      defaultText: this.$t("fkui.clearingnumber-text-field.label", "Clearingnummer")
    };
  },
  mounted() {
    const inputElement = getInputElement(this);
    ValidationService.addValidatorsToElement(inputElement, {
      clearingNumber: {}
    }, true);
    inputElement.setAttribute("inputmode", "numeric");
    inputElement.setAttribute("maxlength", "16");
    ValidationService.validateElement(inputElement);
  }
});
function defaultFormatter$1(modelValue) {
  return formatNumber$1(modelValue, this.decimals);
}
var _sfc_main$F = defineComponent({
  name: "FNumericTextField",
  extends: FTextField,
  props: {
    /**
     * The number of decimals to format number as.
     * @model
     */
    decimals: {
      type: Number,
      required: false,
      default: void 0
    },
    formatter: {
      type: Function,
      required: false,
      default: defaultFormatter$1
    },
    parser: {
      type: Function,
      required: false,
      default: parseNumber
    }
  },
  setup(props) {
    return useTextFieldSetup(props);
  },
  mounted() {
    const inputElement = getInputElement(this);
    inputElement.setAttribute("inputmode", "numeric");
    inputElement.setAttribute("maxlength", "20");
    ValidationService.addValidatorsToElement(inputElement, {
      number: {}
    }, true);
    ValidationService.validateElement(inputElement);
  }
});
var _sfc_main$E = defineComponent({
  name: "FPersonnummerTextField",
  extends: FTextField,
  mixins: [TranslationMixin],
  props: {
    formatter: {
      type: Function,
      required: false,
      default: formatPersonnummer$1
    },
    parser: {
      type: Function,
      required: false,
      default: parsePersonnummer
    }
  },
  setup(props) {
    return useTextFieldSetup(props);
  },
  data() {
    return {
      defaultText: this.$t("fkui.personnummer-text-field.label-10-digits", "Personnummer"),
      discreteDescriptionText: this.$t("fkui.personnummer-text-field.example-10-digits", "(\xE5\xE5mmdd-nnnn)"),
      discreteDescriptionScreenReaderText: this.$t("fkui.personnummer-text-field.format-description-10-digits", "Skriv personnumret med 10 siffror,")
    };
  },
  mounted() {
    const inputElement = getInputElement(this);
    ValidationService.addValidatorsToElement(inputElement, {
      maxLength: {
        length: 20
      },
      personnummerFormat: {},
      personnummerLuhn: {}
    }, true);
    inputElement.setAttribute("inputmode", "numeric");
    inputElement.setAttribute("maxlength", "23");
    ValidationService.validateElement(inputElement);
  }
});
var _sfc_main$D = defineComponent({
  name: "FPlusgiroTextField",
  extends: FTextField,
  mixins: [TranslationMixin],
  props: {
    formatter: {
      type: Function,
      required: false,
      default: parsePlusgiro
    }
  },
  setup(props) {
    return useTextFieldSetup(props);
  },
  data() {
    return {
      defaultText: this.$t("fkui.plusgiro-text-field.label", "Plusgironummer")
    };
  },
  mounted() {
    const inputElement = getInputElement(this);
    ValidationService.addValidatorsToElement(inputElement, {
      maxLength: {
        length: 11
      },
      plusgiro: {}
    }, true);
    inputElement.setAttribute("inputmode", "numeric");
    inputElement.setAttribute("maxlength", "16");
    ValidationService.validateElement(inputElement);
  }
});
var _sfc_main$C = defineComponent({
  name: "FPostalCodeTextField",
  extends: FTextField,
  mixins: [TranslationMixin],
  props: {
    formatter: {
      type: Function,
      required: false,
      default: formatPostalCode
    }
  },
  setup(props) {
    return useTextFieldSetup(props);
  },
  data() {
    return {
      defaultText: this.$t("fkui.postal-code-text-field.label", "Postnummer"),
      discreteDescriptionText: this.$t("fkui.postal-code-text-field.example", "(123 45)"),
      discreteDescriptionScreenReaderText: this.$t("fkui.postal-code-text-field.format-description", "Formatbeskrivning")
    };
  },
  mounted() {
    const inputElement = getInputElement(this);
    ValidationService.addValidatorsToElement(inputElement, {
      maxLength: {
        length: 13
      },
      postalCode: {}
    }, true);
    inputElement.setAttribute("inputmode", "numeric");
    inputElement.setAttribute("maxlength", "15");
    ValidationService.validateElement(inputElement);
  }
});
function defaultFormatter(modelValue) {
  return formatPercent(modelValue, this.decimals);
}
var _sfc_main$B = defineComponent({
  name: "FPercentTextField",
  extends: FTextField,
  mixins: [TranslationMixin],
  props: {
    /**
     * The number of decimals to format number as.
     */
    decimals: {
      type: Number,
      required: false,
      default: void 0
    },
    formatter: {
      type: Function,
      required: false,
      default: defaultFormatter
    },
    parser: {
      type: Function,
      required: false,
      default: parsePercent
    }
  },
  setup(props) {
    return useTextFieldSetup(props);
  },
  data() {
    return {
      defaultText: this.$t("fkui.percent-text-field.label", "Procent")
    };
  },
  mounted() {
    const inputElement = getInputElement(this);
    inputElement.setAttribute("inputmode", this.decimals ? "decimal" : "numeric");
    inputElement.setAttribute("maxlength", "10");
    ValidationService.addValidatorsToElement(inputElement, {
      percent: {},
      minValue: {
        minValue: 0
      },
      maxValue: {
        maxValue: 999
      }
    }, true);
    ValidationService.validateElement(inputElement);
  }
});
var _sfc_main$A = defineComponent({
  name: "FOrganisationsnummerTextField",
  extends: FTextField,
  mixins: [TranslationMixin],
  props: {
    formatter: {
      type: Function,
      required: false,
      default: parseOrganisationsnummer
    }
  },
  setup(props) {
    return useTextFieldSetup(props);
  },
  data() {
    return {
      defaultText: this.$t("fkui.organisationsnummer-text-field.label", "Organisationsnummer"),
      discreteDescriptionText: this.$t("fkui.organisationsnummer-text-field.example", "(999999-9999)"),
      discreteDescriptionScreenReaderText: this.$t("fkui.organisationsnummer-text-field.format-description", "Formatbeskrivning")
    };
  },
  mounted() {
    const inputElement = getInputElement(this);
    ValidationService.addValidatorsToElement(inputElement, {
      maxLength: {
        length: 11
      },
      organisationsnummer: {}
    }, true);
    inputElement.setAttribute("inputmode", "numeric");
    inputElement.setAttribute("maxlength", "20");
    ValidationService.validateElement(inputElement);
  }
});
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
    const match = values.find((it) => it == null ? void 0 : it.includes(searchTerm));
    if (!match) {
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
var _hoisted_1$w = {
  class: "sort-filter-dataset"
};
var _hoisted_2$q = {
  class: "sort-filter-dataset__search"
};
var _hoisted_3$k = {
  class: "sr-only"
};
var _hoisted_4$g = ["title"];
var _hoisted_5$d = {
  class: "sr-only"
};
var _hoisted_6$a = ["value"];
var _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "FSortFilterDataset",
  props: {
    /**
     * The data that you wish to sort or filter.
     */
    data: {
      type: Array,
      required: true,
      default: () => []
    },
    /**
     * All the attributes you want to enable sorting for and the corresponding name to display in the dropdown.
     * Structured as `{attributeName: "Name for dropdown", secondAttributeName: "Name for dropdown"}`
     */
    sortableAttributes: {
      type: Object,
      required: true
    },
    /**
     * If set the data will be sorted by this attribute by default.
     */
    defaultSortAttribute: {
      type: String,
      required: false,
      default: () => ""
    },
    /**
     * Show/hides the sort dropdown.
     */
    showSort: {
      type: Boolean,
      required: false,
      default: true
    },
    /**
     * Show/hides the filter input.
     */
    showFilter: {
      type: Boolean,
      required: false,
      default: true
    },
    /**
     * Set placeholder text in filter input field.
     * Default is textkey "fkui.sort-filter-dataset.placeholder.filter"
     */
    placeholderFilter: {
      type: String,
      required: false,
      default: TranslationService.provider.translate("fkui.sort-filter-dataset.placeholder.filter", "S\xF6k")
    },
    /**
     * The order the data will be sorted by if defaultSortAttribute has been set.
     */
    defaultSortAscending: {
      type: Boolean,
      required: false,
      default: () => true
    },
    /**
     * Attributes that should be included in search when filtering by input.
     * Default includes all attributes.
     */
    filterAttributes: {
      type: Array,
      required: false,
      default: void 0
    }
  },
  emits: ["datasetSorted", "usedSortAttributes"],
  setup(__props, {
    emit: __emit
  }) {
    const $t2 = useTranslate();
    const useDefaultSortOrder = ref(true);
    const searchString = ref("");
    const defaultSortValue = {
      attribute: "",
      name: "",
      ascendingName: "",
      ascending: false,
      id: 0
    };
    const sortAttribute = ref(defaultSortValue);
    const sortFilterResult = ref([]);
    const debouncedFilterResultset = debounce(filterResultset, 250);
    let tableCallbackOnSort = () => {
    };
    let tableCallbackSortableColumns = () => {
    };
    const props = __props;
    const emit = __emit;
    const showClearButton = computed(() => {
      return searchString.value.length > 0;
    });
    const sortOrders = computed(() => {
      const arr = [];
      let id = 0;
      Object.keys(props.sortableAttributes).forEach((key) => {
        arr.push({
          attribute: key,
          name: props.sortableAttributes[key],
          ascendingName: $t2("fkui.sort-filter-dataset.label.ascending", "stigande"),
          ascending: true,
          id: id++
        });
        arr.push({
          attribute: key,
          name: props.sortableAttributes[key],
          ascendingName: $t2("fkui.sort-filter-dataset.label.descending", "fallande"),
          ascending: false,
          id: id++
        });
      });
      return arr;
    });
    const internalFilterAttributes = computed(() => {
      if (!props.filterAttributes) {
        var _props$data$;
        return Object.keys((_props$data$ = props.data[0]) !== null && _props$data$ !== void 0 ? _props$data$ : {});
      }
      return props.filterAttributes;
    });
    provide("sort", (attribute, ascending) => {
      const foundAttribute = sortOrders.value.find((item) => {
        return item.attribute === attribute && item.ascending === ascending;
      });
      if (foundAttribute) {
        sortAttribute.value = foundAttribute;
      } else {
        sortAttribute.value = {
          attribute: "",
          ascending: false
        };
      }
      sortFilterData();
      emit("usedSortAttributes", sortAttribute.value);
    });
    provide("registerCallbackOnSort", (callback) => {
      tableCallbackOnSort = callback;
    });
    provide("registerCallbackOnMount", (callback) => {
      tableCallbackSortableColumns = callback;
    });
    onMounted(() => {
      tableCallbackSortableColumns(Object.keys(props.sortableAttributes));
    });
    watch(() => props.data, () => {
      if (props.defaultSortAttribute !== "" && useDefaultSortOrder.value) {
        const foundAttribute = sortOrders.value.find((item) => {
          return item.attribute === props.defaultSortAttribute && item.ascending === props.defaultSortAscending;
        });
        if (foundAttribute) {
          sortAttribute.value = foundAttribute;
        }
      }
      sortFilterData();
    }, {
      immediate: true,
      deep: true
    });
    function sortFilterData() {
      const filteredData = filter(props.data, internalFilterAttributes.value, searchString.value);
      if (sortAttribute.value.attribute === "") {
        sortFilterResult.value = filteredData;
      } else {
        sortFilterResult.value = sort([...filteredData], sortAttribute.value.attribute, sortAttribute.value.ascending);
      }
      nextTick(() => {
        tableCallbackOnSort(sortAttribute.value.attribute, sortAttribute.value.ascending);
      });
      emit("datasetSorted", sortFilterResult.value);
    }
    function onChangeSortAttribute() {
      useDefaultSortOrder.value = false;
      sortFilterData();
      emit("usedSortAttributes", sortAttribute.value);
    }
    function onSearchInput(event) {
      searchString.value = event.target.value;
      debouncedFilterResultset();
    }
    function onClickClearSearch() {
      searchString.value = "";
      sortFilterData();
      const input = useTemplateRef("search-field").value;
      focus$1(input);
    }
    function filterResultset() {
      sortFilterData();
      if (searchString.value === "") {
        alertScreenReader($t2("fkui.sort-filter-dataset.aria-live.empty", "S\xF6k redigera S\xF6k tom"));
      } else {
        const searchAriaLive = $t2("fkui.sort-filter-dataset.aria-live.search", `Din s\xF6kning p\xE5 "{{ search }}" gav {{ result }} tr\xE4ffar.`, {
          result: sortFilterResult.value.length,
          search: searchString.value
        });
        alertScreenReader(searchAriaLive);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$w, [createVNode(unref(IFlex), {
        collapse: "",
        gap: "3x",
        wrap: ""
      }, {
        default: withCtx(() => [createVNode(unref(IFlexItem), {
          shrink: "",
          align: "center"
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "header", normalizeProps(guardReactiveProps({
            slotClass: "sort-filter-dataset__toolbar__header"
          })))]),
          _: 3
        }), _cache[8] || (_cache[8] = createTextVNode()), createVNode(unref(IFlexItem), {
          grow: ""
        }, {
          default: withCtx(() => [createVNode(unref(IFlex), {
            collapse: "",
            float: "right"
          }, {
            default: withCtx(() => [__props.showFilter ? (openBlock(), createBlock(unref(IFlexItem), {
              key: 0,
              shrink: "",
              align: "center"
            }, {
              default: withCtx(() => [createElementVNode("div", _hoisted_2$q, [createVNode(unref(FIcon), {
                name: "search",
                class: "sort-filter-dataset__search__magnify-icon"
              }), _cache[3] || (_cache[3] = createTextVNode()), createVNode(unref(FTextField), {
                ref: "search-field",
                modelValue: searchString.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchString.value = $event),
                inline: "",
                placeholder: __props.placeholderFilter,
                maxlength: "64",
                onInput: onSearchInput
              }, {
                default: withCtx(() => [createElementVNode("span", _hoisted_3$k, toDisplayString(__props.placeholderFilter), 1)]),
                _: 1
              }, 8, ["modelValue", "placeholder"]), _cache[4] || (_cache[4] = createTextVNode()), showClearButton.value ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                class: "button button--discrete sort-filter-dataset__search__close-icon",
                title: unref($t2)("fkui.sort-filter-dataset.clear.filter", "Rensa s\xF6kf\xE4lt"),
                onClick: onClickClearSearch
              }, [createVNode(unref(FIcon), {
                name: "close"
              }), _cache[2] || (_cache[2] = createTextVNode()), createElementVNode("span", _hoisted_5$d, toDisplayString(unref($t2)("fkui.sort-filter-dataset.clear.filter", "Rensa s\xF6kf\xE4lt")), 1)], 8, _hoisted_4$g)) : createCommentVNode("", true)])]),
              _: 1
            })) : createCommentVNode("", true), _cache[7] || (_cache[7] = createTextVNode()), __props.showSort ? (openBlock(), createBlock(unref(IFlexItem), {
              key: 1,
              shrink: "",
              align: "center"
            }, {
              default: withCtx(() => [createVNode(unref(FSelectField), {
                modelValue: sortAttribute.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => sortAttribute.value = $event),
                class: "sort-filter-dataset__sort",
                inline: "",
                onChange: onChangeSortAttribute
              }, {
                label: withCtx(() => [createTextVNode(toDisplayString(unref($t2)("fkui.sort-filter-dataset.label.sort", "Sortera\xA0p\xE5")), 1)]),
                default: withCtx(() => [_cache[5] || (_cache[5] = createTextVNode()), createElementVNode("option", {
                  value: defaultSortValue
                }, toDisplayString(unref($t2)("fkui.sort-filter-dataset.label.unsorted", "V\xE4lj")), 1), _cache[6] || (_cache[6] = createTextVNode()), (openBlock(true), createElementBlock(Fragment, null, renderList(sortOrders.value, (sortOrder) => {
                  return openBlock(), createElementBlock("option", {
                    key: sortOrder.id,
                    value: sortOrder
                  }, toDisplayString(sortOrder.name) + " (" + toDisplayString(sortOrder.ascendingName) + ")\n                            ", 9, _hoisted_6$a);
                }), 128))]),
                _: 1,
                __: [5, 6]
              }, 8, ["modelValue"])]),
              _: 1
            })) : createCommentVNode("", true)]),
            _: 1,
            __: [7]
          })]),
          _: 1
        })]),
        _: 3,
        __: [8]
      }), _cache[9] || (_cache[9] = createTextVNode()), renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({
        sortFilterResult: sortFilterResult.value
      })))]);
    };
  }
});
var _hoisted_1$v = ["tabindex"];
var _hoisted_2$p = {
  key: 0
};
var _hoisted_3$j = {
  class: "table__row"
};
var _hoisted_4$f = ["innerHTML"];
var _hoisted_5$c = {
  key: 1,
  class: "table__column__description"
};
var _hoisted_6$9 = {
  key: 0
};
var _hoisted_7$7 = {
  key: 1
};
var _hoisted_8$5 = ["colspan"];
var _sfc_main$y = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "FDataTable",
  props: {
    /**
     * The rows to be listed.
     * The rows will be listed in the given array order.
     */
    rows: {
      type: Array,
      required: true
    },
    /**
     * Unique attribute in rows.
     */
    keyAttribute: {
      type: String,
      required: false,
      default: void 0
    },
    /**
     * When enabled alternating rows will use a different background color.
     */
    striped: {
      type: Boolean,
      default: false
    },
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
    scroll: {
      type: String,
      default: TableScroll.NONE,
      validator(value) {
        const types = Object.values(TableScroll);
        return types.includes(value);
      }
    }
  },
  setup(__props) {
    const $t2 = useTranslate();
    const {
      hasSlot: hasSlot2
    } = useSlotUtils();
    const {
      sort: sort2,
      registerCallbackOnSort,
      registerCallbackOnMount
    } = FSortFilterDatasetInjected();
    const internalKey2 = getInternalKey();
    const columns = ref([]);
    const props = __props;
    const hasCaption = computed(() => {
      return hasSlot2("caption", {}, {
        stripClasses: []
      });
    });
    const tableClasses = computed(() => {
      const classes = [];
      if (props.striped) {
        classes.push("table--striped");
      }
      return classes;
    });
    const isEmpty2 = computed(() => {
      return internalRows.value.length === 0;
    });
    const visibleColumns = computed(() => {
      return columns.value.filter((col) => col.visible);
    });
    const wrapperClasses = computed(() => {
      return tableScrollClasses(props.scroll);
    });
    const tabindex = computed(() => {
      return props.scroll !== TableScroll.NONE ? 0 : void 0;
    });
    const internalRows = computed(() => {
      const {
        keyAttribute
      } = props;
      if (keyAttribute) {
        return setInternalKeys(props.rows, keyAttribute);
      }
      return setInternalKeys(props.rows);
    });
    provide("addColumn", (column) => {
      if (column.type === FTableColumnType.ACTION) {
        throw new Error("Cannot use action column in FDataTable component");
      }
      columns.value = addColumn(columns.value, column);
    });
    provide("setVisibilityColumn", (id, visible) => {
      setVisibilityColumn(columns.value, id, visible);
    });
    provide("textFieldTableMode", true);
    provide("renderColumns", computed(() => {
      return internalRows.value.length > 0;
    }));
    onMounted(() => {
      registerCallbackOnSort(callbackOnSort);
      registerCallbackOnMount(callbackSortableColumns);
    });
    function rowKey(item) {
      return String(item[internalKey2]);
    }
    function columnClasses(column) {
      const classes = ["table__column", `table__column--${column.type}`, column.size];
      if (column.sortable) {
        classes.push("table__column--sortable");
      }
      return classes;
    }
    function iconClasses2(column) {
      return getSortableIconClasses(column);
    }
    function iconName(column) {
      return getSortableIconName(column);
    }
    function onClickColumnHeader(column) {
      if (!column.sortable) {
        return;
      }
      let columnName = column.name;
      if (!columnName) {
        throw new Error("`FTableColumn` must have a unique `name` when used with `FSortFilterDataset`");
      }
      if (column.sort === FTableColumnSort.DESCENDING) {
        columnName = "";
        column.sort = FTableColumnSort.UNSORTED;
      }
      sort2(columnName, column.sort !== FTableColumnSort.ASCENDING);
    }
    function callbackOnSort(columnName, ascending) {
      updateSortOrder(columns.value, columnName, ascending);
    }
    function callbackSortableColumns(columnNames) {
      setSortableColumns(columns.value, columnNames);
    }
    function escapeNewlines(value) {
      return value.replace(/\n/g, "<br/>");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(wrapperClasses.value)
      }, [createElementVNode("table", mergeProps({
        class: ["table", tableClasses.value],
        tabindex: tabindex.value
      }, _ctx.$attrs), [hasCaption.value ? (openBlock(), createElementBlock("caption", _hoisted_2$p, [renderSlot(_ctx.$slots, "caption")])) : createCommentVNode("", true), _cache[5] || (_cache[5] = createTextVNode()), createElementVNode("colgroup", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(columns.value, (column) => {
        return openBlock(), createElementBlock("col", {
          key: column.id,
          class: normalizeClass(column.size)
        }, null, 2);
      }), 128))]), _cache[6] || (_cache[6] = createTextVNode()), createElementVNode("thead", null, [createElementVNode("tr", _hoisted_3$j, [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({
        row: {}
      }))), _cache[2] || (_cache[2] = createTextVNode()), (openBlock(true), createElementBlock(Fragment, null, renderList(visibleColumns.value, (column) => {
        return openBlock(), createElementBlock("th", mergeProps({
          key: column.id,
          scope: "col",
          class: columnClasses(column)
        }, toHandlers(column.sortable ? {
          click: () => onClickColumnHeader(column)
        } : {}, true)), [createElementVNode("span", {
          innerHTML: escapeNewlines(column.title)
        }, null, 8, _hoisted_4$f), _cache[0] || (_cache[0] = createTextVNode()), column.sortable ? (openBlock(), createBlock(unref(FIcon), {
          key: 0,
          class: normalizeClass(iconClasses2(column)),
          name: iconName(column)
        }, null, 8, ["class", "name"])) : createCommentVNode("", true), _cache[1] || (_cache[1] = createTextVNode()), column.description ? (openBlock(), createElementBlock("span", _hoisted_5$c, toDisplayString(column.description), 1)) : createCommentVNode("", true)], 16);
      }), 128))])]), _cache[7] || (_cache[7] = createTextVNode()), createElementVNode("tbody", null, [isEmpty2.value && columns.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_6$9, [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({
        row: {}
      })))])) : createCommentVNode("", true), _cache[3] || (_cache[3] = createTextVNode()), isEmpty2.value ? (openBlock(), createElementBlock("tr", _hoisted_7$7, [createElementVNode("td", {
        class: "table__column table__column--action",
        colspan: columns.value.length
      }, [renderSlot(_ctx.$slots, "empty", {}, () => [createTextVNode(toDisplayString(
        /** Text som visas som standardinnehåll i slotten `empty` (när tabellen är tom). */
        unref($t2)("fkui.data-table.empty", "Tabellen \xE4r tom")
      ), 1)])], 8, _hoisted_8$5)])) : createCommentVNode("", true), _cache[4] || (_cache[4] = createTextVNode()), (openBlock(true), createElementBlock(Fragment, null, renderList(internalRows.value, (row) => {
        return openBlock(), createElementBlock("tr", {
          key: rowKey(row),
          class: "table__row"
        }, [renderSlot(_ctx.$slots, "default", mergeProps({
          ref_for: true
        }, {
          row
        }))]);
      }), 128))])], 16, _hoisted_1$v)], 2);
    };
  }
});
function isDayEnabled(day, config2) {
  return passesMinDate(day, config2.minDate) && passesMaxDate(day, config2.maxDate) && passesInvalidDates(day, config2.invalidDates) && passesInvalidWeekdays(day, config2.invalidWeekdays);
}
function passesMinDate(day, config2) {
  if (!config2) {
    throw new Error("MinDate validator must be set");
  }
  if (!config2.limit) {
    throw new Error("Invalid minDate config");
  }
  return config2.limit <= day.toString();
}
function passesMaxDate(day, config2) {
  if (!config2) {
    throw new Error("MaxDate validator must be set");
  }
  if (!config2.limit) {
    throw new Error("Invalid maxDate config");
  }
  return day.toString() <= config2.limit;
}
function passesInvalidDates(day, config2) {
  if (!config2) {
    return true;
  }
  if (!isInvalidDatesConfig(config2)) {
    throw new Error("Invalid invalidDates config");
  }
  return !config2.dates.includes(day.toString());
}
function passesInvalidWeekdays(day, config2) {
  if (!config2) {
    return true;
  }
  if (!isInvalidWeekdaysConfig(config2)) {
    throw new Error("Invalid invalidWeekdays config");
  }
  return !config2.days.includes(day.weekDay);
}
function updateCalendarValue(datepicker, newValue) {
  const {
    isDateEnabled,
    minDate,
    maxDate
  } = datepicker;
  const newCalendarValue = FDate.fromIso(newValue);
  if (!newCalendarValue.isValid()) {
    datepicker.calendarValue = void 0;
  } else if (isInvalidMonth(newCalendarValue, minDate, maxDate)) {
    datepicker.calendarValue = void 0;
  } else if (!isDateEnabled(newCalendarValue)) {
    datepicker.calendarValue = void 0;
  } else if (!datepicker.calendarValue || !datepicker.calendarValue.equals(newCalendarValue)) {
    datepicker.calendarValue = newCalendarValue;
  }
}
function getDisplayMonth(minDate, maxDate, selectedDate, initialMonth) {
  let effectiveDate;
  if (selectedDate && selectedDate.isValid()) {
    effectiveDate = selectedDate;
  } else if (initialMonth && initialMonth.isValid()) {
    effectiveDate = initialMonth;
  } else {
    effectiveDate = FDate.now();
  }
  let month;
  if (!isInvalidMonth(effectiveDate, minDate, maxDate)) {
    month = effectiveDate.startOfMonth();
  } else if (isMonthBefore(effectiveDate, minDate)) {
    month = minDate == null ? void 0 : minDate.startOfMonth();
  } else if (isMonthAfter(effectiveDate, maxDate)) {
    month = maxDate == null ? void 0 : maxDate.startOfMonth();
  }
  return month || FDate.now().startOfMonth();
}
var _sfc_main$x = defineComponent({
  name: "FDatepickerField",
  components: {
    FCalendar,
    IPopup,
    FTextField,
    FIcon,
    FCalendarDay
  },
  mixins: [TranslationMixin],
  inheritAttrs: false,
  props: {
    /** Selected day.
     * @model
     */
    modelValue: {
      type: String,
      required: false,
      default: ""
    },
    /**
     * Initial month. Applies when no day is selected.
     * If unspecified, todays month will be shown when no day is selected.
     */
    initialMonth: {
      type: Object,
      required: false,
      default: void 0
    },
    /**
     * Highlight today.
     */
    highlightToday: {
      type: Boolean,
      required: false,
      default: true
    },
    /**
     * Always display inline.
     */
    alwaysInline: {
      type: Boolean,
      default: false
    },
    /**
     * Set responsive width for label section.
     *
     * ```
     * label-width="md-9 lg-6"
     * ```
     */
    labelWidth: {
      type: String,
      required: false,
      default: "sm-12"
    },
    /**
     * Set responsive width for input section that wraps input element and icons.
     *
     * ```
     * input-width="md-6 lg-3"
     * ```
     */
    inputWidth: {
      type: String,
      required: false,
      default: "sm-12"
    },
    /**
     * Set to `true`, empty string `""` or string `"disabled"` to disable this field.
     */
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["change", "update:modelValue"],
  setup() {
    const defaultMinDate = FDate.now().addYears(-10);
    const defaultMaxDate = FDate.now().addYears(10);
    return {
      textFieldValue: ref(""),
      textFieldTouched: ref(false),
      textFieldValidityRevealed: ref(false),
      textFieldTableMode: inject("textFieldTableMode", false),
      componentTouched: ref(false),
      calendarMonth: shallowRef(getDisplayMonth(defaultMinDate, defaultMaxDate)),
      calendarValue: shallowRef(void 0),
      isCalendarOpen: ref(false),
      validationConfig: ref({}),
      minDate: shallowRef(defaultMinDate),
      maxDate: shallowRef(defaultMaxDate),
      calendarInputs: ref(null)
    };
  },
  computed: {
    calendarButtonText() {
      const {
        calendarValue
      } = this;
      if (calendarValue && calendarValue.isValid()) {
        const prettyDate = calendarValue.toString(DateFormat.FULL);
        const text = this.$t("fkui.datepicker-field.change", "\xC4ndra datum");
        return `${text} ${prettyDate}`;
      } else {
        return this.$t("fkui.datepicker-field.choose", "V\xE4lj datum");
      }
    },
    popupClass() {
      return this.textFieldTableMode ? "datepicker-field__popup datepicker-field__table" : "datepicker-field__popup";
    }
  },
  watch: {
    modelValue: {
      async handler(value) {
        if (value !== this.textFieldValue) {
          await this.updateTextFieldValue(value);
          updateCalendarValue(this, value);
        }
      },
      immediate: true
    }
  },
  mounted() {
    ValidationService.addValidatorsToElement(getInputElement(this), {
      date: {},
      dateFormat: {},
      minDate: {
        limit: this.minDate.toString()
      },
      maxDate: {
        limit: this.maxDate.toString()
      }
    }, true);
  },
  methods: {
    dateFormatter: parseDate,
    async onValidityTextField({
      detail
    }) {
      if (this.textFieldValidityRevealed && detail.validityMode === "INITIAL") {
        this.textFieldTouched = false;
        this.componentTouched = false;
      }
      if (!this.textFieldTouched && ["blur", "change"].includes(detail.nativeEvent)) {
        this.textFieldTouched = true;
      }
      if (this.isCalendarOpen) {
        alertScreenReader(detail.validationMessage, {
          assertive: true
        });
      }
      this.textFieldValidityRevealed = detail.validityMode !== "INITIAL";
      if (detail.validityMode === "INITIAL" || !this.textFieldTouched || this.componentTouched) {
        return;
      }
      const inputElement = getInputElement(this);
      const pendingValidityEvent = new CustomEvent("pending-validity", {
        bubbles: false
      });
      inputElement.dispatchEvent(pendingValidityEvent);
    },
    onChangeTextField() {
      updateCalendarValue(this, this.textFieldValue);
      this.$emit("update:modelValue", this.textFieldValue);
      this.$emit("change", this.textFieldValue);
    },
    onClickCalendarButton() {
      if (!this.isCalendarOpen) {
        this.calendarMonth = getDisplayMonth(this.minDate, this.maxDate, this.calendarValue, this.initialMonth);
      }
      this.isCalendarOpen = !this.isCalendarOpen;
    },
    onFocusoutTextFieldButton(e) {
      if (this.componentTouched || this.$refs.component === null) {
        return;
      }
      const component = getHTMLElementFromVueRef(this.$refs.component);
      const relatedTarget = e.relatedTarget;
      if (!component.contains(relatedTarget)) {
        this.componentTouched = true;
        const inputElement = getInputElement(this);
        ValidationService.setTouched(inputElement);
        ValidationService.validateElement(inputElement);
      }
    },
    async onSelectCalendarDay(date) {
      this.componentTouched = true;
      this.isCalendarOpen = !this.isDateEnabled(date);
      if (!this.isCalendarOpen) {
        getHTMLElementFromVueRef(this.$refs.calendarButton).focus();
      }
      this.$emit("update:modelValue", date.toString());
      this.$emit("change", date.toString());
      await this.updateTextFieldValue(date.toString());
      updateCalendarValue(this, date.toString());
    },
    async onKeyupEsc() {
      this.isCalendarOpen = false;
      waitForScreenReader(() => {
        getHTMLElementFromVueRef(this.$refs.calendarButton).focus();
      });
    },
    async onClickCloseCalendarButton() {
      this.isCalendarOpen = false;
      waitForScreenReader(() => {
        getHTMLElementFromVueRef(this.$refs.calendarButton).focus();
      });
    },
    onOpenPopup() {
      if (!this.isCalendarOpen) {
        return;
      }
      const popup = getHTMLElementFromVueRef(this.$refs.popup);
      const navMonth = popup.querySelector(".calendar-navbar__month");
      if (navMonth) {
        navMonth.focus({
          preventScroll: true
        });
      }
    },
    onClosePopup() {
      this.isCalendarOpen = false;
    },
    async onValidationConfigUpdate(event) {
      this.validationConfig = event.detail.config;
      if (this.validationConfig.minDate) {
        const minDateConfig = this.validationConfig.minDate;
        if (!minDateConfig.limit) {
          throw new Error("MinDate validator must be set");
        }
        this.minDate = FDate.fromIso(minDateConfig.limit.toString());
      }
      if (this.validationConfig.maxDate) {
        const maxDateConfig = this.validationConfig.maxDate;
        if (!maxDateConfig.limit) {
          throw new Error("MaxDate validator must be set");
        }
        this.maxDate = FDate.fromIso(maxDateConfig.limit.toString());
      }
    },
    isDateEnabled(day) {
      return isDayEnabled(day, this.validationConfig);
    },
    isDaySelected(date) {
      return this.calendarValue ? date.equals(this.calendarValue) : false;
    },
    highlightDay(date) {
      return this.highlightToday && date.equals(FDate.now());
    },
    async updateTextFieldValue(newValue) {
      this.textFieldValue = newValue;
      await this.$nextTick();
      ValidationService.validateElement(getInputElement(this));
    }
  }
});
var _hoisted_1$u = {
  ref: "component",
  class: "datepicker-field"
};
var _hoisted_2$o = ["disabled", "aria-expanded"];
var _hoisted_3$i = {
  class: "sr-only"
};
var _hoisted_4$e = {
  class: "datepicker-field__close"
};
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  const _component_f_text_field = resolveComponent("f-text-field");
  const _component_f_calendar_day = resolveComponent("f-calendar-day");
  const _component_f_calendar = resolveComponent("f-calendar");
  const _component_i_popup = resolveComponent("i-popup");
  return openBlock(), createElementBlock("div", _hoisted_1$u, [createElementVNode("div", {
    ref: "calendarInputs",
    onFocusout: _cache[2] || (_cache[2] = (...args) => _ctx.onFocusoutTextFieldButton && _ctx.onFocusoutTextFieldButton(...args))
  }, [createVNode(_component_f_text_field, mergeProps(_ctx.$attrs, {
    modelValue: _ctx.textFieldValue,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.textFieldValue = $event),
    maxlength: "20",
    disabled: _ctx.disabled,
    formatter: _ctx.dateFormatter,
    "label-width": _ctx.labelWidth,
    "input-width": _ctx.inputWidth,
    onComponentValidity: _ctx.onValidityTextField,
    onChange: _ctx.onChangeTextField,
    onValidationConfigUpdate: _ctx.onValidationConfigUpdate
  }), createSlots({
    description: withCtx(({
      descriptionClass,
      formatDescriptionClass
    }) => [renderSlot(_ctx.$slots, "description", {
      descriptionClass,
      formatDescriptionClass
    })]),
    "error-message": withCtx(({
      hasError,
      validationMessage
    }) => [renderSlot(_ctx.$slots, "error-message", normalizeProps(guardReactiveProps({
      hasError,
      validationMessage
    })))]),
    "input-right": withCtx(() => [createElementVNode("button", {
      ref: "calendarButton",
      disabled: _ctx.disabled,
      class: "datepicker-field__button",
      type: "button",
      "aria-expanded": _ctx.isCalendarOpen ? "true" : "false",
      "data-test": "calendar-button",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.onClickCalendarButton())
    }, [createVNode(_component_f_icon, {
      name: "calendar"
    }), _cache[6] || (_cache[6] = createTextVNode()), createElementVNode("span", _hoisted_3$i, toDisplayString(_ctx.calendarButtonText), 1)], 8, _hoisted_2$o)]),
    default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.$t("fkui.datepicker-field.label", "Datum")), 1)]), _cache[7] || (_cache[7] = createTextVNode()), _cache[8] || (_cache[8] = createTextVNode()), _cache[9] || (_cache[9] = createTextVNode()), _cache[10] || (_cache[10] = createTextVNode())]),
    _: 2
  }, [_ctx.$slots.tooltip ? {
    name: "tooltip",
    fn: withCtx(() => [renderSlot(_ctx.$slots, "tooltip")]),
    key: "0"
  } : void 0]), 1040, ["modelValue", "disabled", "formatter", "label-width", "input-width", "onComponentValidity", "onChange", "onValidationConfigUpdate"])], 544), _cache[13] || (_cache[13] = createTextVNode()), createVNode(_component_i_popup, {
    "is-open": _ctx.isCalendarOpen,
    anchor: _ctx.calendarInputs,
    inline: _ctx.alwaysInline ? "always" : void 0,
    "set-focus": false,
    onOpen: _ctx.onOpenPopup,
    onClose: _ctx.onClosePopup
  }, {
    default: withCtx(() => [createElementVNode("div", {
      ref: "popup",
      class: normalizeClass(_ctx.popupClass)
    }, [createVNode(_component_f_calendar, {
      modelValue: _ctx.calendarMonth,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.calendarMonth = $event),
      "tab-date": _ctx.calendarValue,
      "min-date": _ctx.minDate,
      "max-date": _ctx.maxDate,
      onClick: _ctx.onSelectCalendarDay,
      onKeyup: withKeys(withModifiers(_ctx.onKeyupEsc, ["stop"]), ["esc"])
    }, {
      default: withCtx(({
        date,
        isFocused
      }) => [createVNode(_component_f_calendar_day, {
        day: date,
        enabled: _ctx.isDateEnabled(date),
        focused: isFocused,
        highlight: _ctx.highlightDay(date),
        selected: _ctx.isDaySelected(date)
      }, null, 8, ["day", "enabled", "focused", "highlight", "selected"])]),
      _: 1
    }, 8, ["modelValue", "tab-date", "min-date", "max-date", "onClick", "onKeyup"]), _cache[12] || (_cache[12] = createTextVNode()), createElementVNode("div", _hoisted_4$e, [createElementVNode("button", {
      class: "button button--discrete button--discrete--black datepicker-field__close__button",
      type: "button",
      onClick: _cache[4] || (_cache[4] = (...args) => _ctx.onClickCloseCalendarButton && _ctx.onClickCloseCalendarButton(...args)),
      onKeyup: _cache[5] || (_cache[5] = withKeys(withModifiers((...args) => _ctx.onKeyupEsc && _ctx.onKeyupEsc(...args), ["stop"]), ["esc"]))
    }, [createElementVNode("span", null, toDisplayString(_ctx.$t("fkui.datepicker-field.close", "St\xE4ng")), 1), _cache[11] || (_cache[11] = createTextVNode()), createVNode(_component_f_icon, {
      "aria-hidden": "true",
      class: "button__icon",
      name: "close"
    })], 32)])], 2)]),
    _: 1
  }, 8, ["is-open", "anchor", "inline", "onOpen", "onClose"])], 512);
}
var FDatepickerField = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$k]]);
function tryOnScopeDispose(fn2) {
  if (getCurrentScope()) {
    onScopeDispose(fn2);
    return true;
  }
  return false;
}
var localProvidedStateMap = /* @__PURE__ */ new WeakMap();
var injectLocal = (...args) => {
  var _a;
  const key = args[0];
  const instance = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy;
  if (instance == null && !hasInjectionContext())
    throw new Error("injectLocal must be called in setup");
  if (instance && localProvidedStateMap.has(instance) && key in localProvidedStateMap.get(instance))
    return localProvidedStateMap.get(instance)[key];
  return inject(...args);
};
var isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var notNullish = (val) => val != null;
var toString = Object.prototype.toString;
var isObject = (val) => toString.call(val) === "[object Object]";
function pxValue(px) {
  return px.endsWith("rem") ? Number.parseFloat(px) * 16 : Number.parseFloat(px);
}
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
var defaultWindow = isClient ? window : void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn2) => fn2());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test = toArray(toValue(args[0])).filter((e) => e != null);
    return test.every((e) => typeof e !== "string") ? test : void 0;
  });
  const stopWatch = watchImmediate(
    () => {
      var _a, _b;
      return [
        (_b = (_a = firstParamTargets.value) == null ? void 0 : _a.map((e) => unrefElement(e))) != null ? _b : [defaultWindow].filter((e) => e != null),
        toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
        toArray(unref(firstParamTargets.value ? args[2] : args[1])),
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
  const isMounted = shallowRef(false);
  const instance = getCurrentInstance();
  if (instance) {
    onMounted(() => {
      isMounted.value = true;
    }, instance);
  }
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
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
  const targets = computed(() => {
    const value = toValue(target);
    const items = toArray(value).map(unrefElement).filter(notNullish);
    return new Set(items);
  });
  const stopWatch = watch(
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
var ssrWidthSymbol = Symbol("vueuse-ssr-width");
function useSSRWidth() {
  const ssrWidth = hasInjectionContext() ? injectLocal(ssrWidthSymbol, null) : null;
  return typeof ssrWidth === "number" ? ssrWidth : void 0;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow, ssrWidth = useSSRWidth() } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  const ssrSupport = shallowRef(typeof ssrWidth === "number");
  const mediaQuery = shallowRef();
  const matches = shallowRef(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  watchEffect(() => {
    if (ssrSupport.value) {
      ssrSupport.value = !isSupported.value;
      const queryStrings = toValue(query).split(",");
      matches.value = queryStrings.some((queryString) => {
        const not = queryString.includes("not all");
        const minWidth = queryString.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        const maxWidth = queryString.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let res = Boolean(minWidth || maxWidth);
        if (minWidth && res) {
          res = ssrWidth >= pxValue(minWidth[1]);
        }
        if (maxWidth && res) {
          res = ssrWidth <= pxValue(maxWidth[1]);
        }
        return not ? !res : res;
      });
      return;
    }
    if (!isSupported.value)
      return;
    mediaQuery.value = window2.matchMedia(toValue(query));
    matches.value = mediaQuery.value.matches;
  });
  useEventListener(mediaQuery, "change", handler, { passive: true });
  return computed(() => matches.value);
}
var layoutRegister = {};
function getLayout(name) {
  var _layoutRegister$name;
  return (_layoutRegister$name = layoutRegister[name]) !== null && _layoutRegister$name !== void 0 ? _layoutRegister$name : null;
}
function setLayout(name, layout) {
  layoutRegister[name] = layout;
}
function defineLayout(definition) {
  return normalizeDefinition(definition);
}
function registerLayout(definition) {
  setLayout(definition.name, normalizeDefinition(definition));
}
function normalizeDefinition(definition) {
  return {
    name: definition.name,
    areas: normalizeAreasDefinition(definition.areas)
  };
}
function normalizeAreasDefinition(areas) {
  return Object.fromEntries(Object.entries(areas).map(([key, area]) => {
    var _area$scroll;
    return [key, {
      attachPanel: area.attachPanel,
      direction: area.direction,
      scroll: (_area$scroll = area.scroll) !== null && _area$scroll !== void 0 ? _area$scroll : false
    }];
  }));
}
var panels = [];
var exclusiveGroups = /* @__PURE__ */ new Map();
function resetDetailPanels() {
  panels = [];
}
function createDetailsPanel(name, options) {
  const {
    exclusive
  } = options;
  const control = {
    name: ref(name),
    item: ref(null),
    callback: ref(null),
    open(item, options2) {
      var _options2$onClose;
      if (exclusive) {
        const existing = exclusiveGroups.get(exclusive);
        if (existing) {
          existing.closeMeMaybe();
        }
        exclusiveGroups.set(exclusive, {
          closeMeMaybe: () => this.close()
        });
      }
      this.item.value = item;
      this.callback.value = (_options2$onClose = options2 == null ? void 0 : options2.onClose) !== null && _options2$onClose !== void 0 ? _options2$onClose : null;
    },
    close() {
      this.item.value = null;
      this.callback.value = null;
      if (exclusive) {
        exclusiveGroups.delete(exclusive);
      }
    },
    destroy() {
    }
  };
  panels.push(control);
  return control;
}
function findPanelByName(name) {
  return panels.find((it) => it.name.value === name);
}
function useDetailsPanel(name) {
  return {
    open(item, options) {
      const panel = findPanelByName(name);
      if (panel) {
        panel.open(item, options);
      }
    },
    close() {
      const panel = findPanelByName(name);
      if (panel) {
        panel.close();
      }
    }
  };
}
var VAR_NAME_AREA = "--f-layout-area";
var VAR_NAME_ATTACH_PANEL = "--f-layout-panel";
var VAR_NAME_DIRECTION = "--f-layout-direction";
registerLayout({
  name: "simple",
  areas: {
    header: {
      attachPanel: "none",
      direction: "column"
    },
    content: {
      attachPanel: "none",
      direction: "column",
      scroll: true
    },
    footer: {
      attachPanel: "none",
      direction: "column"
    }
  }
});
registerLayout({
  name: "left-panel",
  areas: {
    header: {
      attachPanel: "none",
      direction: "column"
    },
    left: {
      attachPanel: "left",
      direction: "column"
    },
    content: {
      attachPanel: "none",
      direction: "column",
      scroll: true
    },
    footer: {
      attachPanel: "none",
      direction: "column"
    }
  }
});
registerLayout({
  name: "right-panel",
  areas: {
    header: {
      attachPanel: "none",
      direction: "column"
    },
    right: {
      attachPanel: "right",
      direction: "column"
    },
    content: {
      attachPanel: "none",
      direction: "column",
      scroll: true
    },
    footer: {
      attachPanel: "none",
      direction: "column"
    }
  }
});
registerLayout({
  name: "three-column",
  areas: {
    header: {
      attachPanel: "top",
      direction: "column"
    },
    left: {
      attachPanel: "left",
      direction: "column"
    },
    right: {
      attachPanel: "right",
      direction: "column"
    },
    content: {
      attachPanel: "none",
      direction: "column",
      scroll: true
    },
    footer: {
      attachPanel: "bottom",
      direction: "column"
    }
  }
});
var _hoisted_1$t = ["part"];
var _hoisted_2$n = ["part", "data-direction"];
var _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "FPageLayout.ce",
  props: {
    layout: {
      type: String
    }
  },
  emits: ["update"],
  setup(__props, {
    emit: __emit
  }) {
    const emit = __emit;
    const rootRef = useTemplateRef("root");
    const slotNames = ref([]);
    const stubLayout = defineLayout({
      name: "",
      areas: {}
    });
    const layoutDefinition = computed(() => {
      var _getLayout;
      return (_getLayout = getLayout(__props.layout)) !== null && _getLayout !== void 0 ? _getLayout : stubLayout;
    });
    const part = computed(() => `grid ${__props.layout}`);
    function getSlotNames(element) {
      return Array.from(element.querySelectorAll(":scope > [slot]"), (it) => it.slot);
    }
    const resolvedSlots = computed(() => {
      return slotNames.value.filter((it) => Boolean(layoutDefinition.value.areas[it])).map((slotName) => {
        const area = layoutDefinition.value.areas[slotName];
        const {
          attachPanel: attach,
          direction,
          scroll
        } = area;
        const style = [`grid-area: ${slotName};`, `${VAR_NAME_AREA}: "${slotName}";`, `${VAR_NAME_ATTACH_PANEL}: "${attach}";`, `${VAR_NAME_DIRECTION}: "${direction}";`].join("\n");
        return {
          name: slotName,
          part: `area ${slotName}`,
          direction,
          scroll,
          style
        };
      });
    });
    onMounted(() => {
      if (rootRef.value) {
        const host = rootRef.value.getRootNode().host;
        slotNames.value = getSlotNames(host);
        nextTick(() => emit("update"));
        useMutationObserver(host, () => {
          slotNames.value = getSlotNames(host);
          nextTick(() => emit("update"));
        }, {
          childList: true
        });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: "root",
        class: "page-layout",
        part: part.value
      }, [(openBlock(true), createElementBlock(Fragment, null, renderList(resolvedSlots.value, (item) => {
        return openBlock(), createElementBlock("div", {
          key: item.name,
          class: "page-layout__area",
          part: item.part,
          "data-direction": item.direction,
          style: normalizeStyle(item.style)
        }, [renderSlot(_ctx.$slots, item.name)], 12, _hoisted_2$n);
      }), 128))], 8, _hoisted_1$t);
    };
  }
});
var _style_0$4 = ':host {\n  display: block;\n}\n.page-layout {\n  display: grid;\n  height: 100cqh;\n  width: min(100%, 100cqw);\n&[part~=simple] {\n    grid-template: "header" min-content "content" 1fr "footer" min-content/1fr;\n[part="area header"],\n    [part="area footer"] {\n      --f-page-layout-background: var(--f-background-pageheader-primary);\n      --f-page-layout-color: var(--fkds-color-text-inverted);\n}\n[part="area content"] {\n      --f-page-layout-background: var(--fkds-color-background-primary);\n      --f-page-layout-color: var(--fkds-color-text-primary);\n}\n}\n&[part~=left-panel] {\n    grid-template: "header header" min-content "left content" 1fr "footer footer" min-content/min-content 1fr;\n[part="area header"],\n    [part="area footer"] {\n      --f-page-layout-background: var(--f-background-pageheader-primary);\n      --f-page-layout-color: var(--fkds-color-text-inverted);\n}\n[part="area left"] {\n      --f-page-layout-background: var(--fkds-color-background-secondary);\n}\n[part="area content"] {\n      --f-page-layout-background: var(--fkds-color-background-primary);\n      --f-page-layout-color: var(--fkds-color-text-primary);\n}\n}\n&[part~=right-panel] {\n    grid-template: "header header" min-content "content right" 1fr "footer footer" min-content/1fr min-content;\n[part="area header"],\n    [part="area footer"] {\n      --f-page-layout-background: var(--f-background-pageheader-primary);\n      --f-page-layout-color: var(--fkds-color-text-inverted);\n}\n[part="area right"] {\n      --f-page-layout-background: var(--fkds-color-background-secondary);\n      --f-page-layout-color: var(--fkds-color-text-primary);\n}\n[part="area content"] {\n      --f-page-layout-background: var(--fkds-color-background-primary);\n      --f-page-layout-color: var(--fkds-color-text-primary);\n}\n}\n&[part~=three-column] {\n    grid-template: "header header header" min-content "left content right" 1fr "footer footer footer" min-content/min-content 1fr min-content;\n[part="area header"],\n    [part="area footer"] {\n      --f-page-layout-background: var(--f-background-pageheader-primary);\n      --f-page-layout-color: var(--fkds-color-text-inverted);\n}\n[part="area left"],\n    [part="area right"] {\n      --f-page-layout-background: var(--fkds-color-background-secondary);\n      --f-page-layout-color: var(--fkds-color-text-primary);\n}\n[part="area content"] {\n      --f-page-layout-background: var(--fkds-color-background-primary);\n      --f-page-layout-color: var(--fkds-color-text-primary);\n}\n}\n}\n.page-layout__area {\n  display: flex;\n  position: relative;\n  background: var(--f-page-layout-background);\n  color: var(--f-page-layout-color);\n&[data-direction=column] {\n    flex-direction: column;\n}\n&[data-direction=row] {\n    flex-direction: row;\n}\n&[data-scroll] {\n    overflow-y: auto;\n}\n&:empty {\n    display: none;\n}\n}';
var CeComponent$1 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["styles", [_style_0$4]]]);
var ceTag$2 = "ce-page-layout";
var _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "FPageLayout",
  props: {
    layout: {}
  },
  emits: ["update"],
  setup(__props, {
    emit: __emit
  }) {
    const emit = __emit;
    const proxy = new Proxy({}, {
      get(_, property) {
        if (property.startsWith("__v")) {
          return void 0;
        }
        return property;
      }
    });
    onMounted(() => {
      if (!customElements.get(ceTag$2)) {
        customElements.define(ceTag$2, defineCustomElement(CeComponent$1));
      }
    });
    onUnmounted(() => {
      resetDetailPanels();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(ceTag$2), {
        layout: _ctx.layout,
        onUpdate: _cache[0] || (_cache[0] = ($event) => emit("update"))
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(unref(proxy))))]),
        _: 3
      }, 40, ["layout"]);
    };
  }
});
function getProperty(style, key) {
  const value = style.getPropertyValue(key);
  if (value === "") {
    return null;
  } else {
    return JSON.parse(value);
  }
}
function findLayoutElement(element) {
  if (!element) {
    return null;
  }
  const parent = element.closest("ce-page-layout");
  if (parent) {
    return parent;
  }
  const root = element.getRootNode();
  if (root instanceof ShadowRoot) {
    return findLayoutElement(root.host);
  }
  return null;
}
function useAreaData(element) {
  const area = ref(null);
  const attachPanel = ref(null);
  const direction = ref(null);
  const layoutElement = computed(() => findLayoutElement(toValue(element)));
  useEventListener(layoutElement, "update", () => {
    if (element.value) {
      update(element.value);
    }
  });
  watchEffect(() => {
    if (element.value) {
      update(element.value);
    }
  });
  return {
    area,
    attachPanel,
    direction
  };
  function update(element2) {
    const style = getComputedStyle(element2);
    area.value = getProperty(style, VAR_NAME_AREA);
    attachPanel.value = getProperty(style, VAR_NAME_ATTACH_PANEL);
    direction.value = getProperty(style, VAR_NAME_DIRECTION);
  }
}
var keymap = {
  left: {
    ArrowLeft: "decrease",
    ArrowRight: "increase",
    Home: "minimize",
    End: "maximize"
  },
  right: {
    ArrowLeft: "increase",
    ArrowRight: "decrease",
    Home: "minimize",
    End: "maximize"
  },
  top: {
    ArrowUp: "decrease",
    ArrowDown: "increase",
    Home: "minimize",
    End: "maximize"
  },
  bottom: {
    ArrowUp: "increase",
    ArrowDown: "decrease",
    Home: "minimize",
    End: "maximize"
  },
  none: {}
};
function useKeyboardHandler(options) {
  const {
    attachment,
    separator
  } = options;
  useEventListener(separator, "keydown", (event) => {
    if (!attachment.value) {
      return;
    }
    const action = keymap[attachment.value][event.key];
    if (action) {
      event.preventDefault();
      options[action]();
    }
  });
}
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function usePointerHandler(options) {
  const {
    separator,
    attachment
  } = options;
  const invert = computed(() => {
    if (attachment.value === "right" || attachment.value === "bottom") {
      return -1;
    }
    return 1;
  });
  const orientation = computed(() => {
    if (attachment.value === "top" || attachment.value === "bottom") {
      return "horizontal";
    } else {
      return "vertical";
    }
  });
  useEventListener(separator, "pointerdown", (event) => {
    const {
      isPrimary,
      button,
      target,
      pointerId
    } = event;
    if (!separator.value) {
      return;
    }
    if (!isPrimary || button !== 0 || target !== separator.value) {
      return;
    }
    const separatorElement = separator.value;
    const property = orientation.value === "horizontal" ? "clientY" : "clientX";
    const reference = event[property];
    const resize = createResizer();
    function onPointerMove(event2) {
      if (event2.pointerId === pointerId) {
        resize(event2[property] - reference);
      }
    }
    function onLostPointerCapture(event2) {
      if (event2.pointerId === pointerId) {
        separatorElement.removeEventListener("pointermove", onPointerMove);
        separatorElement.removeEventListener("lostpointercapture", onLostPointerCapture);
      }
    }
    onPointerMove(event);
    separatorElement.addEventListener("lostpointercapture", onLostPointerCapture);
    separatorElement.addEventListener("pointermove", onPointerMove);
    separatorElement.setPointerCapture(pointerId);
    event.preventDefault();
  });
  function createResizer() {
    const {
      min,
      max,
      current: value
    } = options.state.value;
    return (amount) => {
      options.movement(clamp(value + amount * invert.value, min, max));
    };
  }
}
function computeCssValue(raw, total, auto) {
  if (raw.endsWith("px")) {
    return parseInt(raw.slice(0, -2), 10);
  } else if (raw.endsWith("%")) {
    const value = parseInt(raw.slice(0, -1), 10);
    const percent = value / 100;
    return percent * total;
  } else if (raw === "0") {
    return 0;
  } else if (raw === "auto" || raw === "") {
    return auto;
  } else {
    throw new Error(`Cant parse size from "${raw}"`);
  }
}
function aggregateCssValue(raw, total, auto, take) {
  if (raw === "auto") {
    return auto;
  }
  const parts = raw.split(/\s+/).map((it) => it.trim());
  const parsed = parts.map((it) => computeCssValue(it, total, auto));
  return take(...parsed);
}
function useStorage(options) {
  const {
    state,
    storageKey
  } = options;
  const loaded = ref(false);
  let last = -1;
  watchEffect(() => {
    if (!loaded.value) {
      return;
    }
    if (!storageKey.value) {
      return;
    }
    if (state.value.current < 0 || state.value.current === last) {
      return;
    }
    const json = JSON.stringify(state.value.current);
    window.localStorage.setItem(storageKey.value, json);
    last = state.value.current;
  });
  watchEffect(() => {
    if (!storageKey.value) {
      return;
    }
    const json = window.localStorage.getItem(storageKey.value);
    if (json) {
      const value = JSON.parse(json);
      state.value.current = clamp(value, state.value.min, state.value.max);
      last = value;
    }
    loaded.value = true;
  });
}
var _hoisted_1$s = {
  key: 0,
  class: "resize__offset"
};
var _hoisted_2$m = ["aria-orientation"];
var _hoisted_3$h = ["aria-orientation"];
var STEP_SIZE = 10;
var _sfc_main$u = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "FResizePane.ce",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    min: {
      default: "0",
      type: String
    },
    max: {
      default: "100%",
      type: String
    },
    initial: {
      default: "50%",
      type: String
    },
    overlay: {
      type: Boolean,
      default: false
    },
    offset: {
      default: 0,
      type: Number
    }
  },
  emits: ["resize"],
  setup(__props, {
    emit: __emit
  }) {
    const props = __props;
    const emit = __emit;
    const root = shallowRef();
    const content2 = ref();
    const separator = ref();
    const state = ref({
      min: -1,
      max: -1,
      current: -1
    });
    const layoutSize = ref(0);
    const storageKey = computed(() => area.value ? `layout/${area.value}/size` : null);
    const {
      attachPanel: attachment,
      direction,
      area
    } = useAreaData(root);
    useKeyboardHandler({
      increase() {
        state.value.current = Math.min(state.value.current + STEP_SIZE, state.value.max);
      },
      decrease() {
        state.value.current = Math.max(state.value.current - STEP_SIZE, state.value.min);
      },
      maximize() {
        state.value.current = state.value.max;
      },
      minimize() {
        state.value.current = state.value.min;
      },
      attachment,
      separator
    });
    useStorage({
      state,
      storageKey
    });
    usePointerHandler({
      movement(value) {
        state.value.current = value;
      },
      separator,
      state,
      attachment
    });
    const minSize = computed(() => {
      const total = layoutSize.value;
      return Math.floor(aggregateCssValue(props.min, total, 0, Math.max));
    });
    const maxSize = computed(() => {
      const total = layoutSize.value;
      return Math.max(Math.floor(aggregateCssValue(props.max, total, total, Math.min)), minSize.value);
    });
    const initialSize = computed(() => {
      const total = layoutSize.value;
      return Math.floor(computeCssValue(props.initial, total, total * 0.5));
    });
    const orientation = computed(() => {
      if (attachment.value === "top" || attachment.value === "bottom") {
        return "horizontal";
      } else {
        return "vertical";
      }
    });
    const classes = computed(() => {
      return [`resize--${attachment.value}`, `resize--${direction.value}`, props.overlay ? "resize--overlay" : void 0, props.disabled ? "resize--disabled" : void 0];
    });
    const layoutElement = computed(() => {
      var _host$closest;
      if (!root.value) {
        return void 0;
      }
      const shadow = root.value.getRootNode();
      const host = shadow.host;
      return (_host$closest = host.closest("ce-page-layout")) !== null && _host$closest !== void 0 ? _host$closest : void 0;
    });
    watch(() => props.min, onResize);
    watch(() => props.max, onResize);
    watchEffect(() => {
      const {
        min,
        max,
        current: value
      } = state.value;
      if (root.value) {
        const shadowRoot = root.value.getRootNode();
        const host = shadowRoot.host;
        host.style.setProperty("--size", `${String(value)}px`);
        host.style.setProperty("--min", `${min}px`);
        host.style.setProperty("--max", `${max}px`);
        host.style.setProperty("--offset", `${props.offset}px`);
      }
      if (separator.value) {
        separator.value.setAttribute("aria-valuemin", String(Math.floor(min)));
        separator.value.setAttribute("aria-valuemax", String(Math.floor(max)));
        separator.value.setAttribute("aria-valuenow", String(Math.floor(value)));
      }
      if (value >= 0) {
        emit("resize", value);
      }
    });
    onMounted(() => {
      layoutSize.value = getLayoutSize();
      state.value = {
        min: minSize.value,
        max: maxSize.value,
        current: clamp(initialSize.value, minSize.value, maxSize.value)
      };
    });
    useEventListener$1(window, "resize", debounce(onResize, 20));
    function onResize() {
      layoutSize.value = getLayoutSize();
      state.value = {
        min: minSize.value,
        max: maxSize.value,
        current: initialSize.value
      };
    }
    function getLayoutSize() {
      if (!layoutElement.value) {
        return 0;
      }
      switch (orientation.value) {
        case "horizontal": {
          return layoutElement.value.offsetHeight;
        }
        case "vertical": {
          return layoutElement.value.offsetWidth;
        }
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [_ctx.overlay && _ctx.offset ? (openBlock(), createElementBlock("div", _hoisted_1$s)) : createCommentVNode("", true), _cache[1] || (_cache[1] = createTextVNode()), createElementVNode("div", mergeProps({
        ref_key: "root",
        ref: root,
        class: ["resize", classes.value]
      }, _ctx.$attrs), [createElementVNode("div", {
        ref_key: "content",
        ref: content2,
        class: "resize__content"
      }, [renderSlot(_ctx.$slots, "content")], 512), _cache[0] || (_cache[0] = createTextVNode()), !props.disabled ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "separator",
        ref: separator,
        role: "separator",
        class: "resize__handle",
        tabindex: "0",
        "aria-orientation": orientation.value
      }, null, 8, _hoisted_2$m)) : (openBlock(), createElementBlock("div", {
        key: 1,
        role: "separator",
        class: "resize__handle disabled",
        "aria-orientation": orientation.value
      }, null, 8, _hoisted_3$h))], 16)], 64);
    };
  }
});
var _style_0$3 = '/* background color */\n/* highlight color */\n/* the width of the visible handle */\n/* how much extra click/hover area the handle has */\n/* how much extra space the handle occupies when hovering (not counting the click area) */\n/* how long before visually indicating the hover state */\n/* how long the animation for the visual indicator is */\n:host {\n  display: contents;\n}\n:host([hidden]) {\n  display: none;\n}\n:host ::slotted(*) {\n  display: contents;\n}\n.resize {\n  flex-grow: 1;\n  display: flex;\n  align-items: stretch;\n}\n.resize--overlay {\n  position: absolute;\n  z-index: 1;\n  background: var(--f-page-layout-background);\n}\n.resize--left {\n  flex-direction: row;\n}\n.resize--left:not(.resize--disabled) {\n  width: calc(var(--size) + 2px);\n}\n.resize--left .resize__content {\n  flex-direction: row;\n}\n.resize--left.resize--overlay {\n  left: 0;\n  top: 0;\n  bottom: 0;\n}\n.resize--right {\n  flex-direction: row-reverse;\n}\n.resize--right:not(.resize--disabled) {\n  width: calc(var(--size) + 2px);\n}\n.resize--right .resize__content {\n  flex-direction: row;\n}\n.resize--right.resize--overlay {\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.resize--top {\n  flex-direction: column;\n}\n.resize--top:not(.resize--disabled) {\n  height: calc(var(--size) + 2px);\n}\n.resize--bottom {\n  flex-direction: column-reverse;\n}\n.resize--bottom:not(.resize--disabled) {\n  height: calc(var(--size) + 2px);\n}\n.resize__offset {\n  width: calc(var(--offset) + 2px);\n}\n.resize__content {\n  flex: 1 1 auto;\n  overflow: auto;\n  box-sizing: border-box;\n  display: flex;\n}\n.resize--column .resize__content {\n  flex-direction: column;\n}\n.resize--row .resize__content {\n  flex-direction: row;\n}\n.resize--left:not(.resize--disabled) .resize__content, .resize--right:not(.resize--disabled) .resize__content {\n  min-width: var(--min);\n  max-width: var(--max);\n  flex-basis: var(--size);\n}\n.resize--top:not(.resize--disabled) .resize__content, .resize--bottom:not(.resize--disabled) .resize__content {\n  min-height: var(--min);\n  max-height: var(--max);\n  flex-basis: var(--size);\n}\n.resize__handle {\n  flex: 0 0 2px;\n  background: var(--fkds-color-border-primary);\n  touch-action: none;\n  user-select: none;\n  z-index: 1;\n  position: relative;\n  transition: z-index 0s 200ms;\n  /* disable regular focus indicator as this component has its own */\n  /* when focus by keyboard we dont want the delay or transition */\n  /* as the handle area expand we increase z-index for the handle to make sure it covers other separators */\n}\n@media (forced-colors: active) {\n.resize__handle {\n    background: CanvasText;\n}\n}\n.resize__handle[aria-orientation=horizontal] {\n  cursor: row-resize;\n  height: 2px;\n}\n.resize__handle[aria-orientation=horizontal]::before {\n  inset: -2px 0;\n}\n.resize__handle[aria-orientation=horizontal]::after {\n  inset: -4px 0;\n}\n.resize__handle[aria-orientation=vertical] {\n  cursor: col-resize;\n  width: 2px;\n}\n.resize__handle[aria-orientation=vertical]::before {\n  inset: 0 -2px;\n}\n.resize__handle[aria-orientation=vertical]::after {\n  inset: 0 -4px;\n}\n.resize__handle::before {\n  content: "";\n  pointer-events: none;\n  position: absolute;\n  background-color: transparent;\n  transition: background-color 200ms ease-in;\n}\n.resize__handle::after {\n  content: "";\n  position: absolute;\n}\n.resize__handle:focus::before, .resize__handle:hover::before, .resize__handle.drag::before {\n  background-color: var(--fkds-color-action-border-primary-hover);\n  transition-delay: 200ms;\n}\n@media (forced-colors: active) {\n.resize__handle:focus::before, .resize__handle:hover::before, .resize__handle.drag::before {\n    background-color: Highlight;\n}\n}\n.resize__handle:focus {\n  outline: none;\n  box-shadow: none;\n}\n.resize__handle:focus::before {\n  transition: none;\n}\n.resize__handle:hover, .resize__handle:focus, .resize__handle.drag {\n  z-index: 2;\n  transition: z-index 0s 0s;\n}\n.resize__handle.disabled {\n  cursor: auto;\n}\n.resize__handle.disabled::before {\n  display: none;\n}';
var FResizePane = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["styles", [_style_0$3]]]);
var injectionKey = Symbol.for("FResizePane:useResize");
function toOptionalRef(value) {
  if (typeof value === "undefined") {
    return value;
  }
  return toRef(value);
}
function useResize(options = {}) {
  const api = inject(injectionKey, {
    register() {
      return () => void 0;
    },
    size: ref(0)
  });
  const unregister = api.register({
    enabled: toOptionalRef(options.enabled),
    visible: toOptionalRef(options.visible),
    overlay: toOptionalRef(options.overlay),
    offset: toOptionalRef(options.offset)
  });
  onUnmounted(unregister);
  return {
    size: api.size
  };
}
var _hoisted_1$r = {
  slot: "content"
};
var tagName$1 = "ce-resize-pane";
var _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "FResizePane",
  props: {
    min: {
      default: "0"
    },
    max: {
      default: "100%"
    },
    initial: {
      default: "50%"
    }
  },
  setup(__props) {
    if (!customElements.get(tagName$1)) {
      customElements.define(tagName$1, defineCustomElement(FResizePane));
    }
    const anyEnabled = ref(true);
    const anyVisible = ref(true);
    const anyOverlay = ref(false);
    const size = ref(-1);
    const offset2 = ref(0);
    let components = [];
    let n = 0;
    function any(src, predicate) {
      return src.length === 0 || src.some(predicate);
    }
    provide(injectionKey, {
      register(options) {
        const component = {
          ...options,
          id: n++
        };
        components.push(component);
        const scope = effectScope();
        scope.run(() => {
          watchEffect(() => {
            anyEnabled.value = any(components, (it) => {
              var _a;
              var _it$enabled$value;
              return (_it$enabled$value = (_a = it.enabled) == null ? void 0 : _a.value) !== null && _it$enabled$value !== void 0 ? _it$enabled$value : true;
            });
          });
          watchEffect(() => {
            anyVisible.value = any(components, (it) => {
              var _a;
              var _it$visible$value;
              return (_it$visible$value = (_a = it.visible) == null ? void 0 : _a.value) !== null && _it$visible$value !== void 0 ? _it$visible$value : true;
            });
          });
          watchEffect(() => {
            anyOverlay.value = any(components, (it) => {
              var _a;
              var _it$overlay$value;
              return (_it$overlay$value = (_a = it.overlay) == null ? void 0 : _a.value) !== null && _it$overlay$value !== void 0 ? _it$overlay$value : false;
            });
          });
          watchEffect(() => {
            if (components.length === 0) {
              return 0;
            }
            const offsets = components.map((it) => {
              var _a;
              return (_a = it.offset) == null ? void 0 : _a.value;
            }).filter((it) => typeof it === "number");
            offset2.value = Math.max(0, ...offsets);
          });
        });
        return () => {
          components = components.filter((it) => it.id !== component.id);
          scope.stop();
        };
      },
      size
    });
    const disabled = computed(() => anyEnabled.value === false);
    const hidden = computed(() => anyVisible.value === false);
    const overlay = computed(() => anyOverlay.value === true);
    const props = __props;
    function onResize(event) {
      size.value = event.detail[0];
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(tagName$1), mergeProps({
        disabled: disabled.value,
        hidden: hidden.value,
        overlay: overlay.value,
        offset: offset2.value
      }, props, {
        onResize
      }), {
        default: withCtx(() => [createElementVNode("div", _hoisted_1$r, [renderSlot(_ctx.$slots, "default")])]),
        _: 3
      }, 16, ["disabled", "hidden", "overlay", "offset"]);
    };
  }
});
var _hoisted_1$q = {
  ref: "root",
  class: "panel__wrapper"
};
var _hoisted_2$l = {
  class: "panel__header",
  part: "header"
};
var _hoisted_3$g = {
  class: "panel__title"
};
var _hoisted_4$d = {
  class: "panel__content",
  part: "content"
};
var _hoisted_5$b = {
  class: "panel__footer",
  part: "footer"
};
var _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "FDetailsPanel.ce",
  emits: ["closed"],
  setup(__props, {
    emit: __emit
  }) {
    const rootElement = useTemplateRef("root");
    const {
      attachPanel
    } = useAreaData(rootElement);
    const emit = __emit;
    const attachClass = computed(() => {
      switch (attachPanel.value) {
        case "left":
          return "attach-left";
        case "right":
          return "attach-right";
      }
      return void 0;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$q, [createElementVNode("div", {
        class: normalizeClass(["panel panel--details", [attachClass.value]])
      }, [createElementVNode("div", _hoisted_2$l, [createElementVNode("div", _hoisted_3$g, [renderSlot(_ctx.$slots, "header")]), _cache[1] || (_cache[1] = createTextVNode()), createElementVNode("button", {
        class: "panel__close-button",
        type: "button",
        onClick: _cache[0] || (_cache[0] = ($event) => emit("closed"))
      }, [renderSlot(_ctx.$slots, "icon")])]), _cache[2] || (_cache[2] = createTextVNode()), createElementVNode("div", _hoisted_4$d, [renderSlot(_ctx.$slots, "content")]), _cache[3] || (_cache[3] = createTextVNode()), createElementVNode("div", _hoisted_5$b, [renderSlot(_ctx.$slots, "footer")])], 2)], 512);
    };
  }
});
var _style_0$2 = '@charset "UTF-8";\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n}\narticle,\naside,\ndialog,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection {\n  display: block;\n}\nselect::-ms-expand {\n  display: none;\n}\nselect:focus::-ms-value {\n  background: none;\n  color: #000;\n  outline: 1px dotted #000;\n}\nul,\nol {\n  padding-left: 1rem;\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\na {\n  text-decoration: none;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\nhtml {\n  font-size: var(--f-font-size-default-rem);\n}\n@media (min-width: 1024px) {\nhtml {\n    font-size: var(--f-font-size-default-large-up-rem);\n}\n}\nbody {\n  color: var(--f-text-color-default);\n  font-size: var(--f-font-size-standard);\n  font-weight: var(--f-font-weight-normal);\n  line-height: var(--f-line-height-large);\n}\np {\n  font-size: var(--f-font-size-standard);\n  font-weight: var(--f-font-weight-normal);\n  line-height: var(--f-line-height-large);\n  margin-bottom: 1rem;\n}\nb,\nstrong {\n  font-weight: var(--f-font-weight-medium);\n}\ncode {\n  font-size: var(--f-font-size-standard);\n  border-radius: var(--f-border-radius-small);\n  font-family: var(--f-font-family-code);\n  background-color: var(--f-background-code);\n  display: inline-block;\n  margin: 0 0.25rem;\n  padding: 0 0.25rem;\n}\npre code {\n  display: block;\n}\nh1, .heading--h1,\nh2,\n.heading--h2,\nh3,\n.heading--h3,\n.expandable-panel__heading,\nh4,\n.heading--h4,\nh5,\n.heading--h5,\nh6,\n.heading--h6 {\n  font-weight: var(--f-font-weight-bold);\n  margin-bottom: 0.25rem;\n  line-height: var(--f-line-height-medium);\n}\nh1, .heading--h1 {\n  font-size: var(--f-font-size-h1);\n  color: var(--f-text-color-heading-1);\n}\nh2, .heading--h2 {\n  font-size: var(--f-font-size-h2);\n  color: var(--f-text-color-heading-2);\n}\nh3, .heading--h3, .expandable-panel__heading {\n  font-size: var(--f-font-size-h3);\n  color: var(--f-text-color-heading-3);\n}\nh4, .heading--h4 {\n  font-size: var(--f-font-size-h4);\n  color: var(--f-text-color-heading-4);\n}\nh5, .heading--h5 {\n  font-size: var(--f-font-size-large);\n  color: var(--f-text-color-heading-5);\n}\nh6, .heading--h6 {\n  font-size: var(--f-font-size-standard);\n  color: var(--f-text-color-heading-6);\n}\n.heading--strong {\n  font-size: var(--f-font-size-large);\n  font-weight: var(--f-font-weight-medium);\n}\n* + h1, * + .heading--h1,\n* + h2,\n* + .heading--h2,\n* + h3,\n* + .heading--h3,\n* + .expandable-panel__heading,\n* + h4,\n* + .heading--h4,\n* + h5,\n* + .heading--h5,\n* + h6,\n* + .heading--h6 {\n  margin-top: 2rem;\n}\n@media (max-width: 640px) {\nh1, .heading--h1 {\n    font-size: var(--f-font-size-h2);\n}\nh2, .heading--h2 {\n    font-size: var(--f-font-size-xxx-large);\n}\nh3, .heading--h3, .expandable-panel__heading {\n    font-size: var(--f-font-size-h4);\n}\nh4, .heading--h4 {\n    font-size: var(--f-font-size-large);\n}\nh5, .heading--h5 {\n    font-size: var(--f-font-size-standard);\n}\nh6, .heading--h6 {\n    font-size: var(--f-font-size-standard);\n}\n.heading--strong {\n    font-size: var(--f-font-size-large);\n    font-weight: var(--f-font-weight-medium);\n}\n}\n.heading--h1 {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n}\n.heading--h2 {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n}\n.heading--h3, .expandable-panel__heading {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n}\n.heading--h4 {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n}\n.heading--h5 {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n}\n.heading--h6 {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n}\nh1 + h2, .heading--h1 + h2, h1 + .heading--h2, .heading--h1 + .heading--h2 {\n  margin-top: 1rem;\n}\nh2 + h3, .heading--h2 + h3, h2 + .heading--h3, h2 + .expandable-panel__heading, .heading--h2 + .heading--h3, .heading--h2 + .expandable-panel__heading {\n  margin-top: 1rem;\n}\nh3 + h4, .heading--h3 + h4, .expandable-panel__heading + h4, h3 + .heading--h4, .heading--h3 + .heading--h4, .expandable-panel__heading + .heading--h4 {\n  margin-top: 1rem;\n}\nh4 + h5, .heading--h4 + h5, h4 + .heading--h5, .heading--h4 + .heading--h5 {\n  margin-top: 1rem;\n}\nh5 + h6, .heading--h5 + h6, h5 + .heading--h6, .heading--h5 + .heading--h6 {\n  margin-top: 1rem;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-separator {\n  display: block !important;\n}\nbutton:focus,\na:focus,\na.button:focus,\nimg:focus,\nselect:focus,\ntextarea:focus,\ninput[type=submit]:focus,\ninput[type=text]:focus,\ninput[type=email]:focus,\ninput[type=tel]:focus,\ninput[type=image]:focus,\ninput[type=search]:focus,\n[tabindex]:focus {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n}\n[tabindex="-1"]:focus {\n  box-shadow: none;\n  outline: none;\n}\n\n/*\n    For help-classes, it is alright to use `!important` when the intent is to\n    overwrite standard behaviour for components.\n\n    All help-classes shall be prefixed with `h-`.\n*/\n.h-no-margin {\n  margin: 0 !important;\n}\n.h-root-size {\n  font-size: 1rem !important;\n}\n.h-display-flex {\n  display: flex;\n}\n.container-fluid {\n  width: 100%;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  margin-right: auto;\n  margin-left: auto;\n}\n.container {\n  width: 100%;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 95%;\n}\n@media (min-width: 640px) {\n.container {\n    max-width: 90%;\n}\n}\n@media (min-width: 1024px) {\n.container {\n    max-width: 80%;\n}\n}\n@media (min-width: 1280px) {\n.container {\n    max-width: 1280px;\n}\n}\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -1rem;\n  margin-left: -1rem;\n}\n.row--align-end {\n  justify-content: flex-end;\n}\n.row--align-center {\n  justify-content: center;\n}\n.row--align-justify {\n  justify-content: space-between;\n}\n.row--align-spaced {\n  justify-content: space-around;\n}\n.row--align-middle {\n  align-items: center;\n}\n.row--align-bottom {\n  align-items: flex-end;\n}\n.row--align-top {\n  align-items: flex-start;\n}\n.col {\n  position: relative;\n  min-height: 1px;\n  box-sizing: border-box;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  width: auto;\n  max-width: none;\n}\n.col--align-bottom {\n  align-self: flex-end;\n}\n.col--align-middle {\n  align-self: center;\n}\n.col--align-stretch {\n  align-self: stretch;\n}\n.col--align-top {\n  align-self: flex-start;\n}\n.col.col--order-1 {\n  order: 1;\n}\n.col.col--order-2 {\n  order: 2;\n}\n.col.col--order-3 {\n  order: 3;\n}\n.col.col--order-4 {\n  order: 4;\n}\n.col.col--order-5 {\n  order: 5;\n}\n.col.col--order-6 {\n  order: 6;\n}\n.col.col--order-7 {\n  order: 7;\n}\n.col.col--order-8 {\n  order: 8;\n}\n.col.col--order-9 {\n  order: 9;\n}\n.col.col--order-10 {\n  order: 10;\n}\n.col.col--order-11 {\n  order: 11;\n}\n.col.col--order-12 {\n  order: 12;\n}\n.col.col--sm-1 {\n  width: 100%;\n}\n.col.col--sm-2 {\n  width: 100%;\n}\n.col.col--sm-3 {\n  width: 100%;\n}\n.col.col--sm-4 {\n  width: 100%;\n}\n.col.col--sm-5 {\n  width: 100%;\n}\n.col.col--sm-6 {\n  width: 100%;\n}\n.col.col--sm-7 {\n  width: 100%;\n}\n.col.col--sm-8 {\n  width: 100%;\n}\n.col.col--sm-9 {\n  width: 100%;\n}\n.col.col--sm-10 {\n  width: 100%;\n}\n.col.col--sm-11 {\n  width: 100%;\n}\n.col.col--sm-12 {\n  width: 100%;\n}\n.col.col--sm-1 {\n  flex: 0 0 8.3333333333%;\n  max-width: 8.3333333333%;\n}\n.col.col--sm-order-1 {\n  order: 1;\n}\n.col.col--sm-2 {\n  flex: 0 0 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n.col.col--sm-order-2 {\n  order: 2;\n}\n.col.col--sm-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n.col.col--sm-order-3 {\n  order: 3;\n}\n.col.col--sm-4 {\n  flex: 0 0 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n.col.col--sm-order-4 {\n  order: 4;\n}\n.col.col--sm-5 {\n  flex: 0 0 41.6666666667%;\n  max-width: 41.6666666667%;\n}\n.col.col--sm-order-5 {\n  order: 5;\n}\n.col.col--sm-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n.col.col--sm-order-6 {\n  order: 6;\n}\n.col.col--sm-7 {\n  flex: 0 0 58.3333333333%;\n  max-width: 58.3333333333%;\n}\n.col.col--sm-order-7 {\n  order: 7;\n}\n.col.col--sm-8 {\n  flex: 0 0 66.6666666667%;\n  max-width: 66.6666666667%;\n}\n.col.col--sm-order-8 {\n  order: 8;\n}\n.col.col--sm-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n.col.col--sm-order-9 {\n  order: 9;\n}\n.col.col--sm-10 {\n  flex: 0 0 83.3333333333%;\n  max-width: 83.3333333333%;\n}\n.col.col--sm-order-10 {\n  order: 10;\n}\n.col.col--sm-11 {\n  flex: 0 0 91.6666666667%;\n  max-width: 91.6666666667%;\n}\n.col.col--sm-order-11 {\n  order: 11;\n}\n.col.col--sm-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.col.col--sm-order-12 {\n  order: 12;\n}\n.col.col--md-1 {\n  width: 100%;\n}\n.col.col--md-2 {\n  width: 100%;\n}\n.col.col--md-3 {\n  width: 100%;\n}\n.col.col--md-4 {\n  width: 100%;\n}\n.col.col--md-5 {\n  width: 100%;\n}\n.col.col--md-6 {\n  width: 100%;\n}\n.col.col--md-7 {\n  width: 100%;\n}\n.col.col--md-8 {\n  width: 100%;\n}\n.col.col--md-9 {\n  width: 100%;\n}\n.col.col--md-10 {\n  width: 100%;\n}\n.col.col--md-11 {\n  width: 100%;\n}\n.col.col--md-12 {\n  width: 100%;\n}\n@media (min-width: 640px) {\n.col.col--md-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n}\n.col.col--md-order-1 {\n    order: 1;\n}\n.col.col--md-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n}\n.col.col--md-order-2 {\n    order: 2;\n}\n.col.col--md-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n.col.col--md-order-3 {\n    order: 3;\n}\n.col.col--md-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n}\n.col.col--md-order-4 {\n    order: 4;\n}\n.col.col--md-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n}\n.col.col--md-order-5 {\n    order: 5;\n}\n.col.col--md-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n.col.col--md-order-6 {\n    order: 6;\n}\n.col.col--md-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n}\n.col.col--md-order-7 {\n    order: 7;\n}\n.col.col--md-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n}\n.col.col--md-order-8 {\n    order: 8;\n}\n.col.col--md-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n}\n.col.col--md-order-9 {\n    order: 9;\n}\n.col.col--md-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n}\n.col.col--md-order-10 {\n    order: 10;\n}\n.col.col--md-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n}\n.col.col--md-order-11 {\n    order: 11;\n}\n.col.col--md-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.col.col--md-order-12 {\n    order: 12;\n}\n}\n.col.col--lg-1 {\n  width: 100%;\n}\n.col.col--lg-2 {\n  width: 100%;\n}\n.col.col--lg-3 {\n  width: 100%;\n}\n.col.col--lg-4 {\n  width: 100%;\n}\n.col.col--lg-5 {\n  width: 100%;\n}\n.col.col--lg-6 {\n  width: 100%;\n}\n.col.col--lg-7 {\n  width: 100%;\n}\n.col.col--lg-8 {\n  width: 100%;\n}\n.col.col--lg-9 {\n  width: 100%;\n}\n.col.col--lg-10 {\n  width: 100%;\n}\n.col.col--lg-11 {\n  width: 100%;\n}\n.col.col--lg-12 {\n  width: 100%;\n}\n@media (min-width: 1024px) {\n.col.col--lg-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n}\n.col.col--lg-order-1 {\n    order: 1;\n}\n.col.col--lg-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n}\n.col.col--lg-order-2 {\n    order: 2;\n}\n.col.col--lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n.col.col--lg-order-3 {\n    order: 3;\n}\n.col.col--lg-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n}\n.col.col--lg-order-4 {\n    order: 4;\n}\n.col.col--lg-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n}\n.col.col--lg-order-5 {\n    order: 5;\n}\n.col.col--lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n.col.col--lg-order-6 {\n    order: 6;\n}\n.col.col--lg-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n}\n.col.col--lg-order-7 {\n    order: 7;\n}\n.col.col--lg-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n}\n.col.col--lg-order-8 {\n    order: 8;\n}\n.col.col--lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n}\n.col.col--lg-order-9 {\n    order: 9;\n}\n.col.col--lg-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n}\n.col.col--lg-order-10 {\n    order: 10;\n}\n.col.col--lg-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n}\n.col.col--lg-order-11 {\n    order: 11;\n}\n.col.col--lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.col.col--lg-order-12 {\n    order: 12;\n}\n}\n.col.col--xl-1 {\n  width: 100%;\n}\n.col.col--xl-2 {\n  width: 100%;\n}\n.col.col--xl-3 {\n  width: 100%;\n}\n.col.col--xl-4 {\n  width: 100%;\n}\n.col.col--xl-5 {\n  width: 100%;\n}\n.col.col--xl-6 {\n  width: 100%;\n}\n.col.col--xl-7 {\n  width: 100%;\n}\n.col.col--xl-8 {\n  width: 100%;\n}\n.col.col--xl-9 {\n  width: 100%;\n}\n.col.col--xl-10 {\n  width: 100%;\n}\n.col.col--xl-11 {\n  width: 100%;\n}\n.col.col--xl-12 {\n  width: 100%;\n}\n@media (min-width: 1280px) {\n.col.col--xl-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n}\n.col.col--xl-order-1 {\n    order: 1;\n}\n.col.col--xl-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n}\n.col.col--xl-order-2 {\n    order: 2;\n}\n.col.col--xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n.col.col--xl-order-3 {\n    order: 3;\n}\n.col.col--xl-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n}\n.col.col--xl-order-4 {\n    order: 4;\n}\n.col.col--xl-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n}\n.col.col--xl-order-5 {\n    order: 5;\n}\n.col.col--xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n.col.col--xl-order-6 {\n    order: 6;\n}\n.col.col--xl-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n}\n.col.col--xl-order-7 {\n    order: 7;\n}\n.col.col--xl-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n}\n.col.col--xl-order-8 {\n    order: 8;\n}\n.col.col--xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n}\n.col.col--xl-order-9 {\n    order: 9;\n}\n.col.col--xl-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n}\n.col.col--xl-order-10 {\n    order: 10;\n}\n.col.col--xl-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n}\n.col.col--xl-order-11 {\n    order: 11;\n}\n.col.col--xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.col.col--xl-order-12 {\n    order: 12;\n}\n}\n.i-width-sm-1 {\n  width: 8.3333333333%;\n}\n.i-width-sm-2 {\n  width: 16.6666666667%;\n}\n.i-width-sm-3 {\n  width: 25%;\n}\n.i-width-sm-4 {\n  width: 33.3333333333%;\n}\n.i-width-sm-5 {\n  width: 41.6666666667%;\n}\n.i-width-sm-6 {\n  width: 50%;\n}\n.i-width-sm-7 {\n  width: 58.3333333333%;\n}\n.i-width-sm-8 {\n  width: 66.6666666667%;\n}\n.i-width-sm-9 {\n  width: 75%;\n}\n.i-width-sm-10 {\n  width: 83.3333333333%;\n}\n.i-width-sm-11 {\n  width: 91.6666666667%;\n}\n.i-width-sm-12 {\n  width: 100%;\n}\n@media (min-width: 640px) {\n.i-width-md-1 {\n    width: 8.3333333333%;\n}\n.i-width-md-2 {\n    width: 16.6666666667%;\n}\n.i-width-md-3 {\n    width: 25%;\n}\n.i-width-md-4 {\n    width: 33.3333333333%;\n}\n.i-width-md-5 {\n    width: 41.6666666667%;\n}\n.i-width-md-6 {\n    width: 50%;\n}\n.i-width-md-7 {\n    width: 58.3333333333%;\n}\n.i-width-md-8 {\n    width: 66.6666666667%;\n}\n.i-width-md-9 {\n    width: 75%;\n}\n.i-width-md-10 {\n    width: 83.3333333333%;\n}\n.i-width-md-11 {\n    width: 91.6666666667%;\n}\n.i-width-md-12 {\n    width: 100%;\n}\n}\n@media (min-width: 1024px) {\n.i-width-lg-1 {\n    width: 8.3333333333%;\n}\n.i-width-lg-2 {\n    width: 16.6666666667%;\n}\n.i-width-lg-3 {\n    width: 25%;\n}\n.i-width-lg-4 {\n    width: 33.3333333333%;\n}\n.i-width-lg-5 {\n    width: 41.6666666667%;\n}\n.i-width-lg-6 {\n    width: 50%;\n}\n.i-width-lg-7 {\n    width: 58.3333333333%;\n}\n.i-width-lg-8 {\n    width: 66.6666666667%;\n}\n.i-width-lg-9 {\n    width: 75%;\n}\n.i-width-lg-10 {\n    width: 83.3333333333%;\n}\n.i-width-lg-11 {\n    width: 91.6666666667%;\n}\n.i-width-lg-12 {\n    width: 100%;\n}\n}\n@media (min-width: 1280px) {\n.i-width-xl-1 {\n    width: 8.3333333333%;\n}\n.i-width-xl-2 {\n    width: 16.6666666667%;\n}\n.i-width-xl-3 {\n    width: 25%;\n}\n.i-width-xl-4 {\n    width: 33.3333333333%;\n}\n.i-width-xl-5 {\n    width: 41.6666666667%;\n}\n.i-width-xl-6 {\n    width: 50%;\n}\n.i-width-xl-7 {\n    width: 58.3333333333%;\n}\n.i-width-xl-8 {\n    width: 66.6666666667%;\n}\n.i-width-xl-9 {\n    width: 75%;\n}\n.i-width-xl-10 {\n    width: 83.3333333333%;\n}\n.i-width-xl-11 {\n    width: 91.6666666667%;\n}\n.i-width-xl-12 {\n    width: 100%;\n}\n}\n.sticky {\n  /* Double position is specified due to E11-compability.\n  `fixed` is used by IE11.\n  `sticky` is used by other web browsers. */\n  position: fixed;\n  position: sticky;\n  z-index: 9999;\n}\n.sticky--top {\n  right: 0;\n  top: 0;\n  left: 0;\n}\n.density-default {\n  --f-density-factor: 1;\n}\n.density-dense {\n  --f-density-factor: 0.8;\n}\n.density-densest {\n  --f-density-factor: 0.6;\n}\n.formatter--date, .formatter--date-full, .formatter--date-long, .formatter--date-range, .formatter--text {\n  white-space: nowrap;\n}\n.formatter--bankgiro, .formatter--number, .formatter--orgnr, .formatter--plusgiro, .formatter--pnr, .formatter--postnummer {\n  white-space: nowrap;\n  font-feature-settings: "tnum";\n}\n.offline .icon, .icon, .offline .icon-stack, .icon-stack,\n.icon--stack {\n  display: inline-block;\n  height: var(--f-icon-size-small);\n  max-height: 100%;\n  max-width: 100%;\n  pointer-events: none;\n  width: var(--f-icon-size-small);\n}\n.select-field__icon, .label__icon {\n  display: inline;\n  height: var(--f-icon-size-large);\n  position: absolute;\n  right: 0.75rem;\n  top: calc(0.5rem * var(--f-density-factor));\n  transition: opacity var(--f-animation-duration-medium) ease-in-out;\n  width: var(--f-icon-size-large);\n}\n.offline .icon-stack, .icon-stack,\n.icon--stack {\n  position: relative;\n}\n.icon-stack .icon,\n.icon--stack .icon {\n  position: absolute;\n}\n.icon--flip-horizontal {\n  transform: scaleX(-1);\n}\n.icon--flip-vertical {\n  transform: scaleY(-1);\n}\n.icon--rotate-90 {\n  transform: rotate(90deg);\n}\n.icon--rotate-180 {\n  transform: rotate(180deg);\n}\n.icon--rotate-270 {\n  transform: rotate(270deg);\n}\n.icon-stack--new-window .icon.f-icon-new-window,\n.icon--new-window .icon.f-icon-new-window {\n  width: 55%;\n  height: 55%;\n  top: 0;\n  right: 0;\n}\n.icon-stack--new-window .icon:not(.f-icon-new-window),\n.icon--new-window .icon:not(.f-icon-new-window) {\n  width: 83%;\n  height: 83%;\n  bottom: 0;\n  left: 5%;\n}\n.icon-stack--tooltip .f-icon-circle,\n.icon--stack--tooltip .f-icon-circle {\n  fill: var(--f-icon-color-info);\n  color: var(--f-icon-color-info);\n}\n.icon-stack--tooltip .f-icon-i,\n.icon--stack--tooltip .f-icon-i {\n  color: var(--f-icon-color-white);\n}\n.icon-stack--info .f-icon-circle,\n.icon--stack--info .f-icon-circle {\n  color: var(--fkds-icon-color-feedback-background-info);\n  fill: var(--fkds-icon-color-feedback-border-info);\n}\n.icon-stack--warning .f-icon-circle,\n.icon--stack--warning .f-icon-circle {\n  color: var(--fkds-icon-color-feedback-background-warning);\n  fill: var(--fkds-icon-color-feedback-border-warning);\n}\n.icon-stack--error .f-icon-triangle,\n.icon--stack--error .f-icon-triangle {\n  color: var(--fkds-icon-color-feedback-background-negative);\n  fill: var(--fkds-icon-color-feedback-border-negative);\n}\n.icon-stack--success .f-icon-circle,\n.icon--stack--success .f-icon-circle {\n  color: var(--fkds-icon-color-feedback-background-positive);\n  fill: var(--fkds-icon-color-feedback-border-positive);\n}\n.icon-stack--success .f-icon-success,\n.icon--stack--success .f-icon-success {\n  transform: scale(0.6);\n}\n.icon-stack--large,\n.icon--stack--large {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n.icon-stack--large svg,\n.icon--stack--large svg {\n  width: 100%;\n  height: 100%;\n}\n.icon-stack--circle, .icon-stack--circle-bottom,\n.icon--stack--circle,\n.icon--stack--circle-bottom {\n  width: 4rem;\n  height: 4rem;\n  border-radius: 100%;\n  overflow: hidden;\n}\n.icon-stack--circle .f-icon-circle, .icon-stack--circle-bottom .f-icon-circle,\n.icon--stack--circle .f-icon-circle,\n.icon--stack--circle-bottom .f-icon-circle {\n  color: var(--f-icon-color-success-background);\n  fill: var(--f-icon-color-success-background);\n  width: 100%;\n  height: 100%;\n}\n.icon-stack--circle .icon:not(.f-icon-circle), .icon-stack--circle-bottom .icon:not(.f-icon-circle),\n.icon--stack--circle .icon:not(.f-icon-circle),\n.icon--stack--circle-bottom .icon:not(.f-icon-circle) {\n  color: var(--f-icon-color-success);\n  position: absolute;\n}\n.icon-stack--circle .icon:not(.f-icon-circle),\n.icon--stack--circle .icon:not(.f-icon-circle) {\n  width: 70%;\n  height: 70%;\n  inset: 0;\n  margin: auto;\n}\n.icon-stack--circle-bottom .icon:not(.f-icon-circle),\n.icon--stack--circle-bottom .icon:not(.f-icon-circle) {\n  width: 80%;\n  height: 80%;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  bottom: 0%;\n}\n.expandable-panel {\n  margin-bottom: calc(2rem * var(--f-density-factor));\n}\n.expandable-panel__icon {\n  border-radius: 50%;\n  background-color: var(--f-icon-color-expandable-panel);\n  width: var(--f-icon-size-medium);\n  height: var(--f-icon-size-medium);\n  margin-top: calc((var(--f-line-height-medium) * 1em - var(--f-icon-size-medium)) / 2);\n  display: flex;\n  color: var(--f-background-heading-expandable-panel);\n  padding: 3px;\n  flex-shrink: 0;\n  margin-right: 0.5rem;\n}\n.expandable-panel__icon .icon {\n  transition: transform var(--f-animation-duration-long) ease;\n}\n.expandable-panel.expandable-panel--expanded .expandable-panel__icon svg:nth-child(2) {\n  transform: rotate(0);\n}\n.expandable-panel.expandable-panel--expanded .expandable-panel__content {\n  height: auto;\n}\n.expandable-panel.expandable-panel--expanded .expandable-panel__heading button {\n  border: var(--f-expandable-panel-heading-border-open);\n}\n.expandable-panel.expandable-panel--collapsed .expandable-panel__icon svg:nth-child(2) {\n  transform: rotate(-90deg);\n}\n.expandable-panel__heading {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n  margin-bottom: 0 !important;\n}\n.expandable-panel__heading button {\n  background-color: var(--f-background-heading-expandable-panel);\n  border: var(--f-expandable-panel-heading-border-close);\n  border-radius: var(--f-expandable-panel-heading-border-radius);\n  color: var(--f-text-color-heading-expandable-panel);\n  cursor: pointer;\n  display: flex;\n  margin: 0;\n  padding: calc(1rem * var(--f-density-factor)) 1rem;\n  position: relative;\n  text-align: left;\n  width: 100%;\n}\n.expandable-panel__heading button:focus, .expandable-panel__heading button:hover {\n  background-color: var(--f-background-heading-expandable-panel-hover);\n}\n.expandable-panel__notification {\n  border-radius: 50%;\n  background-color: var(--f-icon-color-notice);\n  border: var(--f-border-width-medium) solid var(--f-icon-color-white);\n  width: var(--f-icon-size-x-large);\n  height: var(--f-icon-size-x-large);\n  display: inline-block;\n  padding: 0.27rem;\n  position: absolute;\n  right: 1.5rem;\n  top: -0.75rem;\n  line-height: 0;\n}\n.expandable-panel__notification svg {\n  color: var(--f-icon-color-white);\n  height: auto;\n  width: auto;\n}\n.expandable-panel__content {\n  height: 0;\n  overflow: hidden;\n  transition: height var(--f-animation-duration-medium) ease-in;\n}\n.expandable-panel__body {\n  background-color: var(--f-background-expandable-panel);\n  border: var(--f-border-width-medium) solid var(--f-border-color-panel);\n  border-top: 0;\n  line-height: inherit;\n  padding: calc(1.5rem * var(--f-density-factor)) 1.5rem;\n}\n.entrypoint {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n  background-color: var(--fkds-color-action-background-primary-default);\n  color: var(--fkds-color-action-text-inverted-default);\n  border: var(--f-border-width-medium) solid transparent;\n  border-radius: var(--f-border-radius-medium);\n  box-shadow: var(--f-button-shadow);\n  font-size: var(--f-font-size-standard);\n  font-weight: var(--f-font-weight-medium);\n  transition: background-color var(--f-animation-duration-medium) ease-out;\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  margin-bottom: calc(1.5rem * var(--f-density-factor));\n  margin-top: calc(0.25rem * var(--f-density-factor));\n  text-align: left;\n  padding: calc(1rem * var(--f-density-factor)) 1rem;\n  line-height: var(--f-line-height-large);\n  width: 100%;\n}\n.entrypoint__icon {\n  margin-left: 2rem;\n  flex-shrink: 0;\n}\n.entrypoint:hover {\n  background-color: var(--fkds-color-action-background-primary-hover);\n}\n.page-header {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  color: var(--f-text-color-default-inverted);\n  background-color: var(--f-background-pageheader-primary);\n  padding: 1rem 0 1rem 1rem;\n  align-items: center;\n  overflow: hidden;\n}\n.page-header__logo {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  align-items: center;\n  box-sizing: border-box;\n}\n.page-header__logo > a {\n  display: inline-flex;\n}\n.page-header__logo::after {\n  content: " ";\n  background-color: var(--f-border-color-separator-pageheader-primary);\n  height: 1.38rem;\n  padding: 0.5px;\n  margin: 0 1rem 0.155rem;\n}\n.page-header__app-name {\n  padding-top: 0.22rem;\n  margin: 0;\n  font-size: var(--f-font-size-h3);\n  font-weight: var(--f-font-weight-medium);\n  color: var(--f-text-color-default-inverted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 9rem;\n}\n.page-header__right {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-grow: 1;\n  white-space: nowrap;\n  padding-top: 0.4rem;\n  font-size: var(--f-font-size-standard);\n}\n.page-header__right-slot {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.card {\n  padding: calc(1rem * var(--f-density-factor)) 1rem;\n  margin: calc(1rem * var(--f-density-factor)) 0;\n}\n.card--default {\n  background-color: var(--fkds-color-background-primary);\n  border-radius: var(--f-border-radius-medium);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-primary);\n}\n.card--error {\n  border-radius: var(--f-border-radius-medium);\n  border: var(--f-border-width-medium) solid var(--fkds-color-feedback-border-negative);\n}\n.card__content {\n  color: var(--fkds-color-text-primary);\n}\n.card__content > p:last-child,\n.card__content > div:last-child {\n  margin-bottom: 0;\n}\n.card__content > p:last-child > *:last-child,\n.card__content > div:last-child > *:last-child {\n  margin-bottom: 0;\n}\n.card__header-label {\n  color: var(--fkds-color-text-primary);\n  font-size: var(--f-font-size-large);\n  font-weight: var(--f-font-weight-bold);\n  line-height: var(--f-line-height-large);\n  margin-bottom: calc(0.25rem * var(--f-density-factor));\n  display: block;\n}\n.card__footer {\n  padding-top: calc(1.25rem * var(--f-density-factor));\n}\n.card__footer > .button-group {\n  margin-bottom: 0;\n}\n.card__footer > .button-group .button-group__item {\n  margin-bottom: 0 !important;\n}\n.card__error-message {\n  color: var(--f-text-color-error);\n}\n.anchor, .file-item__file-open {\n  color: var(--f-text-color-link);\n  text-decoration: underline;\n  text-decoration-thickness: 2px;\n  text-underline-offset: 0.25em;\n  text-decoration-color: var(--f-text-color-link);\n  font-weight: var(--f-font-weight-medium);\n}\n.anchor:hover, .file-item__file-open:hover {\n  color: var(--f-text-color-link-hover);\n  text-decoration-color: var(--f-border-color-link-hover);\n}\n.anchor.anchor--block, .file-item__file-open {\n  display: inline-flex;\n}\n.anchor.anchor--block > svg, .file-item__file-open > svg, .anchor.anchor--block > .icon-stack, .file-item__file-open > .icon-stack {\n  flex-shrink: 0;\n  margin: calc((var(--f-line-height-large) * 1rem - var(--f-icon-size-small)) / 2) 0.25rem 0;\n}\n.anchor.anchor--discrete, .anchor--discrete.file-item__file-open {\n  color: var(--f-text-color-link-discrete);\n  text-decoration-color: var(--f-border-color-link-discrete);\n}\n.anchor.anchor--discrete:hover, .anchor--discrete.file-item__file-open:hover {\n  color: var(--f-text-color-link-discrete-hover);\n  text-decoration-color: var(--f-text-color-link-discrete-hover);\n}\n.badge {\n  border-radius: var(--f-border-radius-medium);\n  border-style: solid;\n  border-width: var(--f-border-width-small);\n  box-sizing: border-box;\n  display: inline-block;\n  font-size: var(--f-font-size-standard);\n  line-height: calc(var(--f-line-height-large) * var(--f-density-factor));\n  font-weight: var(--f-font-weight-normal);\n  padding: 0 0.5rem;\n}\n.badge--default {\n  color: var(--fkds-color-text-primary);\n  background-color: var(--fkds-color-feedback-background-neutral-strong);\n  border-color: var(--fkds-color-feedback-background-neutral-strong);\n}\n.badge--default-inverted {\n  color: var(--fkds-color-text-primary);\n  background-color: var(--fkds-color-feedback-background-neutral);\n  border-color: var(--fkds-color-feedback-border-neutral);\n}\n.badge--warning {\n  color: var(--fkds-color-text-primary);\n  background-color: var(--fkds-color-feedback-background-warning-strong);\n  border-color: var(--fkds-color-feedback-background-warning-strong);\n}\n.badge--warning-inverted {\n  color: var(--fkds-color-text-primary);\n  background-color: var(--fkds-color-feedback-background-warning);\n  border-color: var(--fkds-color-feedback-border-warning);\n}\n.badge--error {\n  color: var(--fkds-color-text-inverted);\n  background-color: var(--fkds-color-feedback-background-negative-strong);\n  border-color: var(--fkds-color-feedback-background-negative-strong);\n}\n.badge--error-inverted {\n  color: var(--fkds-color-text-primary);\n  background-color: var(--fkds-color-feedback-background-negative);\n  border-color: var(--fkds-color-feedback-border-negative);\n}\n.badge--success {\n  color: var(--fkds-color-text-inverted);\n  background-color: var(--fkds-color-feedback-background-positive-strong);\n  border-color: var(--fkds-color-feedback-background-positive-strong);\n}\n.badge--success-inverted {\n  color: var(--fkds-color-text-primary);\n  background-color: var(--fkds-color-feedback-background-positive);\n  border-color: var(--fkds-color-feedback-border-positive);\n}\n.badge--info {\n  color: var(--fkds-color-text-inverted);\n  background-color: var(--fkds-color-feedback-background-info-strong);\n  border-color: var(--fkds-color-feedback-background-info-strong);\n}\n.badge--info-inverted {\n  color: var(--fkds-color-text-primary);\n  background-color: var(--fkds-color-feedback-background-info);\n  border-color: var(--fkds-color-feedback-border-info);\n}\n.button-group {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: calc(0.5rem * var(--f-density-factor));\n  margin-top: calc(0.25rem * var(--f-density-factor));\n}\n.button-group .button-group__item {\n  margin: 0;\n  margin-bottom: calc(1rem * var(--f-density-factor));\n}\n@media (min-width: 640px) {\n.button-group .button-group__item {\n    margin-bottom: calc(1rem * var(--f-density-factor));\n    margin-right: 1.25rem;\n}\n.button-group .button-group__item:last-child {\n    margin-right: 0;\n}\n}\n.button-group > .button.button--discrete, .button-group > .button.button--text {\n  margin-bottom: calc(1rem * var(--f-density-factor));\n  margin-right: 1.5rem;\n}\n.button-group > .button.button--discrete:last-child, .button-group > .button.button--text:last-child {\n  margin-right: 0;\n}\n.button-group > .button.button--small {\n  margin-bottom: calc(0.75rem * var(--f-density-factor));\n  margin-right: 0.75rem;\n}\n.button-group > .button.button--small:last-child {\n  margin-right: 0;\n}\n@media (max-width: 639.98px) {\n.button-group > .button.button--small.button--full-width {\n    margin-right: 0;\n}\n}\n.button-group > .button.button--medium {\n  margin-bottom: calc(0.75rem * var(--f-density-factor));\n  margin-right: 1rem;\n}\n.button-group > .button.button--medium:last-child {\n  margin-right: 0;\n}\n@media (max-width: 639.98px) {\n.button-group > .button.button--medium.button--full-width {\n    margin-right: 0;\n}\n}\n@media (min-width: 640px) {\n.button-group > .button.button--large {\n    margin-bottom: calc(1rem * var(--f-density-factor));\n    margin-right: 1.25rem;\n}\n.button-group > .button.button--large:last-child {\n    margin-right: 0;\n}\n}\n.button-group--end {\n  justify-content: flex-end;\n}\n.button-list {\n  margin-bottom: calc(0.5rem * var(--f-density-factor));\n  margin-top: calc(0.25rem * var(--f-density-factor));\n  padding-left: 0;\n}\n.button-list > li button {\n  margin: 0;\n  margin-bottom: calc(1rem * var(--f-density-factor));\n}\n.button-list > li button.button.button--small, .button-list > li button.button.button--medium {\n  margin-bottom: calc(0.75rem * var(--f-density-factor));\n}\n.button-list > li button.button.button--large {\n  margin-bottom: calc(1rem * var(--f-density-factor));\n}\n.button {\n  border-color: transparent;\n  border-radius: var(--f-border-radius-medium);\n  border-style: solid;\n  border-width: var(--f-border-width-medium);\n  cursor: pointer;\n  display: inline-block;\n  font-size: var(--f-font-size-standard);\n  font-weight: var(--f-font-weight-medium);\n  justify-content: center;\n  letter-spacing: var(--f-button-letter-spacing);\n  line-height: var(--f-button-default-line-height);\n  margin-bottom: calc(1.5rem * var(--f-density-factor));\n  margin-top: calc(0.25rem * var(--f-density-factor));\n  min-width: var(--f-button-min-width);\n  /* stylelint-disable declaration-block-no-redundant-longhand-properties -- readability */\n  padding-top: calc(var(--f-button-default-padding-top) * var(--f-density-factor));\n  padding-right: var(--f-button-default-padding-right);\n  padding-bottom: calc(var(--f-button-default-padding-bottom) * var(--f-density-factor));\n  padding-left: var(--f-button-default-padding-left);\n  /* stylelint-enable declaration-block-no-redundant-longhand-properties */\n  position: relative;\n  text-align: center;\n  transition: background-color var(--f-animation-duration-medium) ease-out;\n}\n@media (max-width: 639.98px) {\n.button {\n    max-width: var(--f-width-full);\n    width: var(--f-width-full);\n}\n}\n.button--text {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n}\n.button--text--black {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n  color: var(--f-text-color-default);\n}\n.button--text--black > .button__icon {\n  color: var(--f-icon-color-black);\n}\n.button {\n  background-color: var(--fkds-color-action-background-secondary-default);\n  border-color: var(--fkds-color-action-border-primary-default);\n  border-width: var(--f-border-width-medium);\n  box-shadow: var(--f-button-shadow);\n  color: var(--f-text-color-button-standard);\n  padding: calc(var(--f-button-standard-padding-top) * var(--f-density-factor)) var(--f-button-standard-padding-right) calc(var(--f-button-standard-padding-bottom) * var(--f-density-factor)) var(--f-button-standard-padding-left);\n}\n.button:hover {\n  background-color: var(--fkds-color-action-background-secondary-hover);\n  border-color: var(--fkds-color-action-border-primary-default);\n  color: var(--f-text-color-button-standard);\n  box-shadow: var(--f-button-shadow-hover);\n}\n.button:active, .button:focus {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n  background-color: var(--fkds-color-action-background-secondary-hover);\n  border-color: var(--fkds-color-action-border-primary-default);\n  color: var(--f-text-color-button-standard);\n}\n.button.disabled, .button.disabled:hover, .button:disabled, .button:disabled:hover, .button.button--disabled, .button.button--disabled:hover {\n  background-color: var(--fkds-color-background-disabled);\n  border-color: var(--fkds-color-border-disabled);\n  color: var(--fkds-color-text-disabled);\n}\n.button.button--primary {\n  background-color: var(--fkds-color-action-background-primary-default);\n  border-color: transparent;\n  border-width: var(--f-border-width-medium);\n  box-shadow: var(--f-button-shadow);\n  color: var(--fkds-color-action-text-inverted-default);\n  padding: calc(var(--f-button-primary-padding-top) * var(--f-density-factor)) var(--f-button-primary-padding-right) calc(var(--f-button-primary-padding-bottom) * var(--f-density-factor)) var(--f-button-primary-padding-left);\n}\n.button.button--primary:hover {\n  background-color: var(--fkds-color-action-background-primary-hover);\n  border-color: transparent;\n  color: var(--fkds-color-action-text-inverted-default);\n  box-shadow: var(--f-button-shadow-hover);\n}\n.button.button--primary:active, .button.button--primary:focus {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n  background-color: var(--fkds-color-action-background-primary-hover);\n  border-color: transparent;\n  color: var(--fkds-color-action-text-inverted-default);\n}\n.button.button--primary.disabled, .button.button--primary.disabled:hover, .button.button--primary:disabled, .button.button--primary:disabled:hover, .button.button--primary.button--disabled, .button.button--primary.button--disabled:hover {\n  background-color: var(--fkds-color-background-disabled);\n  border-color: var(--fkds-color-border-disabled);\n  color: var(--fkds-color-text-disabled);\n}\n.button.button--secondary {\n  background-color: var(--fkds-color-action-background-secondary-default);\n  border-color: var(--fkds-color-action-border-primary-default);\n  border-width: var(--f-border-width-medium);\n  box-shadow: var(--f-button-shadow);\n  color: var(--fkds-color-action-text-primary-default);\n  padding: calc(var(--f-button-secondary-padding-top) * var(--f-density-factor)) var(--f-button-secondary-padding-right) calc(var(--f-button-secondary-padding-bottom) * var(--f-density-factor)) var(--f-button-secondary-padding-left);\n}\n.button.button--secondary:hover {\n  background-color: var(--fkds-color-action-background-secondary-hover);\n  border-color: var(--fkds-color-action-border-primary-default);\n  color: var(--fkds-color-action-text-primary-default);\n  box-shadow: var(--f-button-shadow-hover);\n}\n.button.button--secondary:active, .button.button--secondary:focus {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n  background-color: var(--fkds-color-action-background-secondary-hover);\n  border-color: var(--fkds-color-action-border-primary-default);\n  color: var(--fkds-color-action-text-primary-default);\n}\n.button.button--secondary.disabled, .button.button--secondary.disabled:hover, .button.button--secondary:disabled, .button.button--secondary:disabled:hover, .button.button--secondary.button--disabled, .button.button--secondary.button--disabled:hover {\n  background-color: var(--fkds-color-background-disabled);\n  border-color: var(--fkds-color-border-disabled);\n  color: var(--fkds-color-text-disabled);\n}\n.button.button--discrete, .button.button--text {\n  width: inherit;\n  min-width: 0;\n  font-weight: var(--f-font-weight-bold);\n  outline-offset: 0.25rem;\n  line-height: calc(1.25 * var(--f-font-size-standard));\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 0;\n  box-shadow: none;\n  color: var(--f-text-color-button-discrete);\n  padding: calc(var(--f-button-discrete-padding-top) * var(--f-density-factor)) var(--f-button-discrete-padding-right) calc(var(--f-button-discrete-padding-bottom) * var(--f-density-factor)) var(--f-button-discrete-padding-left);\n}\n.button.button--discrete:hover, .button.button--text:hover {\n  background-color: var(--f-background-button-discrete-hover);\n  border-color: transparent;\n  color: var(--f-text-color-button-discrete-hover);\n  box-shadow: var(--f-button-shadow-hover);\n}\n.button.button--discrete:active, .button.button--text:active, .button.button--discrete:focus, .button.button--text:focus {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n  background-color: var(--f-background-button-discrete-hover);\n  border-color: transparent;\n  color: var(--f-text-color-button-discrete-hover);\n}\n.button.button--discrete.disabled, .button.disabled.button--text, .button.button--discrete.disabled:hover, .button.button--discrete:disabled, .button.button--text:disabled, .button.button--discrete:disabled:hover, .button.button--discrete.button--disabled, .button.button--disabled.button--text, .button.button--discrete.button--disabled:hover {\n  background-color: transparent;\n  border-color: transparent;\n  color: var(--f-text-color-button-discrete-disabled);\n}\n@media (max-width: 639.98px) {\n.button.button--discrete, .button.button--text {\n    width: auto;\n}\n}\n.button.button--discrete--black, .button.button--text--black {\n  /* stylelint-disable declaration-block-no-redundant-longhand-properties -- readability */\n  padding-top: calc(var(--f-button-discrete-black-padding-top) * var(--f-density-factor));\n  padding-right: var(--f-button-discrete-black-padding-right);\n  padding-bottom: calc(var(--f-button-discrete-black-padding-bottom) * var(--f-density-factor));\n  padding-left: var(--f-button-discrete-black-padding-left);\n  /* stylelint-enable declaration-block-no-redundant-longhand-properties */\n  color: var(--f-text-color-default);\n}\n.button.button--discrete--black > .button__icon, .button.button--text--black > .button__icon {\n  color: var(--f-icon-color-black);\n}\n.button.button--discrete:hover, .button.button--text:hover {\n  box-shadow: none;\n  mix-blend-mode: multiply;\n}\n.button.button--discrete, .button.button--text, .button.button--discrete:focus, .button.button--discrete:active, .button.button--discrete:hover {\n  border-radius: var(--f-button-discrete-radius-hover);\n}\n.button.button--discrete-inverted {\n  width: inherit;\n  min-width: 0;\n  font-weight: var(--f-font-weight-bold);\n  outline-offset: 0.25rem;\n  /* stylelint-disable declaration-block-no-redundant-longhand-properties -- readability */\n  padding-top: calc(var(--f-button-discrete-padding-top) * var(--f-density-factor));\n  padding-right: var(--f-button-discrete-padding-right);\n  padding-bottom: calc(var(--f-button-discrete-padding-bottom) * var(--f-density-factor));\n  padding-left: var(--f-button-discrete-padding-left);\n  /* stylelint-enable declaration-block-no-redundant-longhand-properties */\n  line-height: calc(1.25 * var(--f-font-size-standard));\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 0;\n  box-shadow: none;\n  color: var(--f-text-color-button-discrete-inverted);\n  padding: calc(var(--f-button-discrete-padding-top) * var(--f-density-factor)) var(--f-button-discrete-padding-right) calc(var(--f-button-discrete-padding-bottom) * var(--f-density-factor)) var(--f-button-discrete-padding-left);\n}\n.button.button--discrete-inverted:hover {\n  background-color: transparent;\n  border-color: transparent;\n  color: var(--f-text-color-button-discrete-inverted-hover);\n  box-shadow: var(--f-button-shadow-hover);\n}\n.button.button--discrete-inverted:active, .button.button--discrete-inverted:focus {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n  background-color: transparent;\n  border-color: transparent;\n  color: var(--f-text-color-button-discrete-inverted-hover);\n}\n.button.button--discrete-inverted.disabled, .button.button--discrete-inverted.disabled:hover, .button.button--discrete-inverted:disabled, .button.button--discrete-inverted:disabled:hover, .button.button--discrete-inverted.button--disabled, .button.button--discrete-inverted.button--disabled:hover {\n  background-color: transparent;\n  border-color: transparent;\n  color: var(--f-text-color-button-discrete-inverted-disabled);\n}\n@media (max-width: 639.98px) {\n.button.button--discrete-inverted {\n    width: auto;\n}\n}\n.button.button--discrete-inverted, .button.button--discrete-inverted:focus, .button.button--discrete-inverted:active, .button.button--discrete-inverted:hover {\n  border-radius: var(--f-button-discrete-radius-hover);\n}\n.button.button--tertiary {\n  width: inherit;\n  min-width: 0;\n  font-weight: var(--f-font-weight-medium);\n  outline-offset: 0.25rem;\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 0;\n  box-shadow: none;\n  color: var(--fkds-color-action-text-primary-default);\n  padding: calc(var(--f-button-tertiary-padding-top) * var(--f-density-factor)) var(--f-button-tertiary-padding-right) calc(var(--f-button-tertiary-padding-bottom) * var(--f-density-factor)) var(--f-button-tertiary-padding-left);\n}\n.button.button--tertiary:hover {\n  background-color: var(--fkds-color-action-background-secondary-hover);\n  border-color: transparent;\n  color: var(--fkds-color-action-text-primary-default);\n  box-shadow: none;\n}\n.button.button--tertiary:active, .button.button--tertiary:focus {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n  background-color: var(--fkds-color-action-background-secondary-hover);\n  border-color: transparent;\n  color: var(--fkds-color-action-text-primary-default);\n}\n.button.button--tertiary.disabled, .button.button--tertiary.disabled:hover, .button.button--tertiary:disabled, .button.button--tertiary:disabled:hover, .button.button--tertiary.button--disabled, .button.button--tertiary.button--disabled:hover {\n  background-color: transparent;\n  border-color: transparent;\n  color: var(--fkds-color-text-disabled);\n}\n@media (max-width: 639.98px) {\n.button.button--tertiary {\n    width: auto;\n}\n}\n.button.button--tertiary--black {\n  color: var(--fkds-color-action-text-secondary-default);\n}\n.button.button--tertiary--black:hover, .button.button--tertiary--black:active, .button.button--tertiary--black:focus {\n  color: var(--fkds-color-action-text-secondary-default);\n}\n.button.button--tertiary--inverted {\n  color: var(--fkds-color-action-text-inverted-default);\n}\n.button.button--tertiary--inverted:hover, .button.button--tertiary--inverted:active, .button.button--tertiary--inverted:focus {\n  color: var(--fkds-color-action-text-inverted-focus);\n  background-color: transparent;\n}\n.button.button--tertiary--inverted:disabled {\n  color: var(--fkds-color-text-disabled);\n  border-width: 0;\n  background-color: transparent;\n}\n.button.button--tertiary--underline {\n  text-decoration: underline;\n  text-decoration-thickness: 2px;\n  text-underline-offset: 4px;\n}\n.button.button--tertiary--underline:disabled {\n  text-decoration: none;\n}\n.button.button--tertiary.button--small {\n  min-width: 24px;\n  padding: calc(0.375rem * var(--f-density-factor)) 0.25rem;\n  text-underline-offset: 3.5px;\n}\n.button.button--tertiary.button--small.button--align-text {\n  margin-left: -0.25rem;\n}\n.button.button--tertiary.button--medium {\n  min-width: 8rem;\n  /* stylelint-disable declaration-block-no-redundant-longhand-properties -- readability */\n  padding-top: calc(var(--f-button-tertiary-padding-top) * var(--f-density-factor));\n  padding-right: var(--f-button-tertiary-padding-right);\n  padding-bottom: calc(var(--f-button-tertiary-padding-bottom) * var(--f-density-factor));\n  padding-left: var(--f-button-tertiary-padding-left);\n  /* stylelint-enable declaration-block-no-redundant-longhand-properties */\n}\n.button.button--tertiary.button--medium.button--align-text {\n  margin-left: -0.5rem;\n}\n.button.button--tertiary.button--large {\n  min-width: var(--f-button-min-width);\n  padding: calc(1.125rem * var(--f-density-factor)) 0.75rem;\n}\n.button.button--tertiary.button--large.button--align-text {\n  margin-left: -0.75rem;\n}\n.button.button--tertiary.button--align-text {\n  margin-left: -0.5rem;\n  min-width: 0;\n}\n@media (max-width: 639.98px) {\n.button.button--tertiary.button--full-width {\n    min-width: var(--f-width-full);\n}\n}\n.button.button--full-width {\n  min-width: var(--f-width-full);\n}\n.button.button--margin-bottom-0 {\n  margin-bottom: 0;\n}\n.button.button--small {\n  font-size: 14px;\n  line-height: 1.25rem;\n  min-width: 4rem;\n  padding: calc(0.25rem * var(--f-density-factor)) 0.75rem;\n}\n@media (max-width: 639.98px) {\n.button.button--small:not(.button--full-width) {\n    width: auto;\n}\n}\n.button.button--small > .button__icon {\n  height: 14px;\n  width: 14px;\n}\n.button.button--medium {\n  line-height: 1.5rem;\n  min-width: 8rem;\n  padding: calc(0.625rem * var(--f-density-factor)) 1.25rem;\n}\n@media (max-width: 639.98px) {\n.button.button--medium:not(.button--full-width) {\n    width: auto;\n}\n}\n.button.button--large {\n  line-height: 1.5rem;\n  min-width: 9.5rem;\n  padding: calc(1rem * var(--f-density-factor)) 1.5rem;\n}\n@media (max-width: 639.98px) {\n.button.button--large {\n    max-width: var(--f-width-full);\n    width: var(--f-width-full);\n}\n}\n.button > .button__icon {\n  margin-right: 0.25rem;\n  transform: translate(0, 15%);\n}\n.button > .button__icon:not(:first-child) {\n  margin-left: 0.25rem;\n  margin-right: 0;\n}\n.button > .button__icon--end {\n  position: absolute;\n  right: 1.25rem;\n}\n.button.disabled, .button.disabled:hover, .button:disabled, .button:disabled:hover, .button.button--disabled {\n  border-width: var(--f-border-width-medium);\n  box-shadow: none;\n  cursor: default;\n}\n.calendar-day {\n  align-items: center;\n  display: inline-flex;\n  font-weight: var(--f-font-weight-medium);\n  justify-content: center;\n  height: 2.75rem;\n  width: 100%;\n}\n.calendar-day--highlight {\n  position: relative;\n}\n.calendar-day--highlight::before {\n  border-radius: 50%;\n  border: var(--f-border-width-small) solid var(--fkds-color-border-strong);\n  width: 2rem;\n  height: 2rem;\n  content: "";\n  position: absolute;\n  border: var(--f-border-width-small) solid var(--fkds-color-border-strong);\n}\n.calendar-day--highlight.calendar-day--selected::before {\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-inverted);\n}\n.calendar-day--highlight:active:not(.calendar-day--highlight--disabled)::before {\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-inverted);\n}\n.calendar-day--highlight.calendar-day--disabled {\n  position: relative;\n}\n.calendar-day--highlight.calendar-day--disabled::before {\n  border-radius: 50%;\n  border: var(--f-border-width-small) solid var(--fkds-color-border-strong);\n  width: 2rem;\n  height: 2rem;\n  content: "";\n  position: absolute;\n  border: var(--f-border-width-small) solid var(--fkds-color-border-strong);\n}\n.calendar-day--highlight.calendar-day--disabled::after {\n  content: "";\n  z-index: 1;\n  position: absolute;\n  border-top: var(--f-border-width-medium) solid;\n  width: 60%;\n}\n.calendar-day--selected {\n  color: var(--fkds-color-text-inverted);\n  background-color: var(--fkds-color-select-background-primary-default);\n}\n.calendar-day--disabled {\n  position: relative;\n}\n.calendar-day--disabled::before {\n  content: "";\n  position: absolute;\n  border-top: var(--f-border-width-medium) solid;\n  width: 60%;\n}\n.calendar-day:hover:not(.calendar-day--disabled, .calendar-day--selected), .calendar-day--hover:not(.calendar-day--disabled, .calendar-day--selected) {\n  background-color: var(--fkds-color-select-background-primary-hover);\n}\n.calendar-day:active:not(.calendar-day--disabled), .calendar-day--active:not(.calendar-day--disabled) {\n  color: var(--fkds-color-text-inverted);\n  background-color: var(--fkds-color-select-background-primary-default);\n}\n.list__item {\n  display: flex;\n  border: var(--f-border-width-medium) solid var(--f-border-color-grid);\n  background: var(--f-background-grid-default);\n}\n.radio-button-group--border .radio-button-group__content .radio-button:not(.disabled):hover, .checkbox-group--border .checkbox-group__content .checkbox:not(.disabled):hover, .list--hover .list__item:not(.disabled):focus-within,\n.list--hover .list__item:not(.disabled):hover, .list__item--hover:not(.disabled) {\n  background: var(--f-background-grid-hover);\n}\n.list--hover .list__item:focus-within.list__item--active,\n.list--hover .list__item:hover.list__item--active, .list__item--active {\n  background: var(--f-background-grid-active);\n}\n.list {\n  margin: 0 0 calc(var(--f-margin-component-bottom) * var(--f-density-factor));\n  padding-left: 0;\n}\n.list__item:not(:last-child) {\n  border-bottom: none;\n}\n.list__item__itempane {\n  width: 100%;\n  padding: calc(var(--f-list-item-itempane-padding) * var(--f-density-factor)) var(--f-list-item-itempane-padding);\n  color: inherit;\n  --f-margin-component-bottom: 0.5rem;\n}\n.list__item__itempane .button {\n  margin-bottom: 0;\n}\n.list__item__itempane ul {\n  list-style-type: disc;\n}\n.list__item__itempane ul ul {\n  list-style-type: circle;\n}\n.list__item__selectpane {\n  padding: calc((var(--f-list-item-itempane-padding) - 0.2rem) * var(--f-density-factor)) 0 calc((var(--f-list-item-itempane-padding) - 0.2rem) * var(--f-density-factor)) calc(var(--f-list-item-itempane-padding) - 0.2rem);\n}\n.list__item__selectpane__input {\n  margin-top: 0.1rem;\n}\n.list__item__selectpane__input .checkbox__label,\n.list__item__selectpane__input .radio-button__label {\n  min-width: 1.75rem;\n  height: 1.75rem;\n  padding: 0;\n}\n.list__item__selectpane__input .checkbox__label::after,\n.list__item__selectpane__input .checkbox__label::before,\n.list__item__selectpane__input .radio-button__label::after,\n.list__item__selectpane__input .radio-button__label::before {\n  top: calc(0.2rem * var(--f-density-factor));\n  left: 0.2rem;\n}\n.list--hover .list__item:focus-within,\n.list--hover .list__item:hover {\n  cursor: pointer;\n}\n.radio-button-group--border .radio-button-group__content .radio-button, .checkbox-group--border .checkbox-group__content .checkbox {\n  border: var(--f-border-width-medium) solid var(--f-border-color-grid);\n  margin-bottom: 0;\n  width: 100%;\n  cursor: pointer;\n  border-bottom: none;\n}\n.radio-button-group--border .radio-button-group__content .radio-button:last-child, .checkbox-group--border .checkbox-group__content .checkbox:last-child {\n  border-bottom: var(--f-border-width-medium) solid var(--f-border-color-grid);\n}\n.radio-button-group--border .radio-button-group__content .radio-button input:focus + label, .checkbox-group--border .checkbox-group__content .checkbox input:focus + label {\n  outline: 2px solid var(--f-border-color-grid);\n  outline-offset: -2px;\n}\n.radio-button-group--border .radio-button-group__content .radio-button input + label::after, .checkbox-group--border .checkbox-group__content .checkbox input + label::after {\n  top: 0.9rem;\n  left: 1rem;\n}\n.radio-button-group--border .radio-button-group__content .radio-button input:checked + label::after, .checkbox-group--border .checkbox-group__content .checkbox input:checked + label::after {\n  top: 0.9rem;\n  left: 1rem;\n}\n.radio-button-group--border .radio-button-group__content .radio-button label::before, .checkbox-group--border .checkbox-group__content .checkbox label::before {\n  top: 0.9rem;\n  left: 1rem;\n}\n.radio-button-group--border .radio-button-group__content .radio-button label, .checkbox-group--border .checkbox-group__content .checkbox label {\n  padding: 1rem;\n  padding-left: 3rem;\n  width: 100%;\n}\n.radio-button__details, .checkbox__details {\n  display: block;\n}\n.radio-button__width, .checkbox__width {\n  width: 100%;\n}\n.checkbox-group__content {\n  display: flex;\n  flex-direction: column;\n}\n.checkbox__label::after {\n  mask-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImNoZWNrYm94LWljb24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgICB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHJlY3QgeD0iMy40NzQiIHk9IjkuMTk0IiBmaWxsPSIjM0M1NTkyIiB3aWR0aD0iMCIgaGVpZ2h0PSIwIi8+CjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTguMzc2LDE1LjAwNWMtMC40MTYsMC0wLjgzMi0wLjE1OC0xLjE0OS0wLjQ3NWwtMy4yNS0zLjI0M2MtMC42MzUtMC42MzQtMC42MzUtMS42NiwwLTIuMjkzCiAgICAgICAgYzAuNjM1LTAuNjMzLDEuNjYzLTAuNjMzLDIuMjk4LDBsMi4xMDEsMi4wOTdsNS4zNTEtNS4zNGMwLjYzNS0wLjYzNCwxLjY2My0wLjYzNCwyLjI5OCwwYzAuNjM1LDAuNjMzLDAuNjM1LDEuNjU5LDAsMi4yOTMKICAgICAgICBsLTYuNSw2LjQ4N0M5LjIwNywxNC44NDcsOC43OTIsMTUuMDA1LDguMzc2LDE1LjAwNXoiLz4KPC9zdmc+Cg==");\n  mask-repeat: no-repeat;\n}\n.checkbox {\n  min-height: var(--f-height-medium);\n  margin-bottom: calc(1rem * var(--f-density-factor));\n}\n.checkbox:last-child {\n  margin-bottom: 0;\n}\n.checkbox__input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  min-height: calc(4 * var(--f-height-medium));\n}\n.checkbox__label {\n  min-width: 4.5rem;\n  display: inline-block;\n  cursor: pointer;\n  font-size: var(--f-font-size-standard);\n  line-height: var(--f-line-height-small);\n  padding-left: 1.75rem;\n  padding-top: 0.1rem;\n  padding-bottom: 0.1rem;\n  position: relative;\n}\n.checkbox__label * {\n  pointer-events: none;\n}\n.checkbox__label::before, .checkbox__label::after {\n  content: "";\n  height: var(--f-icon-size-medium);\n  left: 0;\n  margin: 0.1rem 0;\n  position: absolute;\n  top: 0;\n  width: var(--f-icon-size-medium);\n}\n.checkbox__label::before {\n  background-color: var(--fkds-color-background-primary);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-primary);\n  border-radius: var(--f-border-radius-small);\n  cursor: pointer;\n  display: block;\n  transition: background-color ease var(--f-animation-duration-medium), border-color ease var(--f-animation-duration-medium), opacity ease var(--f-animation-duration-medium);\n}\n.checkbox__label::after {\n  background-color: var(--fkds-icon-color-content-inverted);\n  opacity: 0;\n  transition: opacity ease var(--f-animation-duration-medium);\n}\n@media (forced-colors: active) {\n.checkbox__label::after {\n    background-color: Canvas;\n}\n}\n.checkbox.disabled {\n  color: var(--fkds-color-text-disabled);\n}\n@media (forced-colors: active) {\n.checkbox.disabled {\n    color: GrayText;\n}\n}\n.checkbox.disabled .checkbox__label {\n  cursor: default;\n}\n.checkbox.disabled .checkbox__label::before {\n  background-color: var(--fkds-color-background-disabled);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-disabled);\n  cursor: inherit;\n}\n.checkbox.disabled input[type=checkbox]:checked + label::before {\n  background-color: var(--fkds-color-background-disabled);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-disabled);\n}\n@media (forced-colors: active) {\n.checkbox.disabled input[type=checkbox]:checked + label::before {\n    border-color: GrayText;\n}\n}\n.checkbox.disabled input[type=checkbox]:checked + .checkbox__label::after {\n  background-color: var(--fkds-icon-color-content-disabled);\n}\n.checkbox input[type=checkbox]:checked + label::before {\n  background-color: var(--fkds-color-select-background-primary-default);\n  border: var(--f-border-width-medium) solid transparent;\n}\n@media (forced-colors: active) {\n.checkbox input[type=checkbox]:checked + label::before {\n    background-color: HighLight;\n    border-color: HighLight;\n}\n}\n.checkbox input[type=checkbox]:checked + .checkbox__label::after {\n  opacity: 1;\n}\n.checkbox input[type=checkbox]:focus + .checkbox__label {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n}\n.radio-button-group--chip .radio-button-group__label {\n  margin-bottom: 0.25rem;\n}\n.radio-button-group--chip .radio-button-group__content {\n  margin: -0.25rem;\n}\n.radio-button-group--chip .radio-button {\n  margin: 0;\n  padding: 0.25rem;\n}\n.radio-button-group--chip .radio-button.disabled .radio-button__label {\n  background: var(--fkds-color-background-disabled);\n  border-color: var(--fkds-color-border-primary);\n  color: var(--fkds-color-text-disabled);\n  cursor: not-allowed;\n}\n.radio-button-group--chip .radio-button__label {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  font-weight: var(--f-font-weight-medium);\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-primary);\n  background-color: var(--fkds-color-background-primary);\n  color: var(--fkds-color-text-primary);\n  justify-content: center;\n  max-width: 400px;\n  user-select: none;\n}\n.radio-button-group--chip .radio-button__label::before, .radio-button-group--chip .radio-button__label::after {\n  display: none;\n}\n.radio-button-group--chip .radio-button__label svg {\n  margin-right: 0.5rem;\n}\n.radio-button-group--chip .radio-button__label:hover {\n  border-color: var(--fkds-color-border-primary);\n  background-color: var(--fkds-color-select-background-secondary-hover);\n  color: var(--fkds-color-text-primary);\n}\n.radio-button-group--chip input[type=radio]:checked + .radio-button__label {\n  background: var(--fkds-color-select-background-secondary-default);\n  border-color: transparent;\n  color: var(--fkds-color-text-inverted);\n}\n.radio-button-group--chip input[type=radio]:focus + label.radio-button__label {\n  border-radius: 20px;\n}\n.radio-button-group--chip.radio-button-group--horizontal .radio-button-group__content {\n  flex-flow: row wrap;\n}\n.radio-button-group--chip.radio-button-group--horizontal .radio-button-group__content .radio-button {\n  margin-bottom: 0;\n}\n@media (max-width: 639.98px) {\n.radio-button-group--chip.radio-button-group--horizontal .radio-button-group__content {\n    flex-flow: row wrap;\n}\n.radio-button-group--chip.radio-button-group--horizontal .radio-button-group__content .radio-button {\n    margin-bottom: 0;\n}\n}\n.checkbox-group--chip .checkbox-group__label {\n  margin-bottom: 0.25rem;\n}\n.checkbox-group--chip .checkbox-group__content {\n  margin: -0.25rem;\n}\n.checkbox-group--chip .checkbox {\n  margin: 0;\n  padding: 0.25rem;\n}\n.checkbox-group--chip .checkbox.disabled .checkbox__label {\n  background: var(--fkds-color-background-disabled);\n  border-color: var(--fkds-color-border-primary);\n  color: var(--fkds-color-text-disabled);\n  cursor: not-allowed;\n}\n.checkbox-group--chip .checkbox__label {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  font-weight: var(--f-font-weight-medium);\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-primary);\n  background-color: var(--fkds-color-background-primary);\n  color: var(--fkds-color-text-primary);\n  justify-content: center;\n  max-width: 400px;\n  user-select: none;\n}\n.checkbox-group--chip .checkbox__label::before, .checkbox-group--chip .checkbox__label::after {\n  display: none;\n}\n.checkbox-group--chip .checkbox__label svg {\n  margin-right: 0.5rem;\n}\n.checkbox-group--chip .checkbox__label:hover {\n  border-color: var(--fkds-color-border-primary);\n  background-color: var(--fkds-color-select-background-secondary-hover);\n  color: var(--fkds-color-text-primary);\n}\n.checkbox-group--chip input[type=checkbox]:checked + .checkbox__label {\n  background: var(--fkds-color-select-background-secondary-default);\n  border-color: transparent;\n  color: var(--fkds-color-text-inverted);\n}\n.checkbox-group--chip input[type=checkbox]:focus + label.checkbox__label {\n  border-radius: 20px;\n}\n.checkbox-group--chip.checkbox-group--horizontal .checkbox-group__content {\n  flex-flow: row wrap;\n}\n.checkbox-group--chip.checkbox-group--horizontal .checkbox-group__content .checkbox {\n  margin-bottom: 0;\n}\n@media (max-width: 639.98px) {\n.checkbox-group--chip.checkbox-group--horizontal .checkbox-group__content {\n    flex-flow: row wrap;\n}\n.checkbox-group--chip.checkbox-group--horizontal .checkbox-group__content .checkbox {\n    margin-bottom: 0;\n}\n}\n.close-button {\n  align-items: center;\n  background: inherit;\n  border: none;\n  color: var(--f-text-color-close-button);\n  cursor: pointer;\n  display: flex;\n  font-weight: 700;\n  gap: 0.5rem;\n  margin: 0.375rem;\n  padding: 0.125rem 0.625rem;\n}\n.close-button .icon {\n  min-width: var(--f-icon-size-small);\n}\n.popup .popup__wrapper.combobox__listbox {\n  background-color: var(--fkds-color-background-primary);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-primary);\n  border-radius: var(--f-border-radius-medium);\n  box-shadow: var(--f-box-modal-shadow);\n  margin-top: 4px;\n  margin-bottom: 4px;\n  padding: 2px;\n}\n.combobox__listbox__list {\n  margin: 0;\n  padding: 0;\n}\n.combobox__listbox__option {\n  color: var(--fkds-color-text-primary);\n  cursor: pointer;\n  list-style-type: none;\n  padding: 0.75rem;\n  white-space: nowrap;\n}\n.combobox__listbox__option:hover {\n  background-color: var(--fkds-color-select-background-primary-hover);\n  color: var(--fkds-color-text-primary);\n}\n.combobox__listbox__option--highlight {\n  background-color: var(--fkds-color-select-background-primary-default);\n  color: var(--fkds-color-text-inverted);\n  font-weight: var(--f-font-weight-medium);\n}\n.combobox__button {\n  background: inherit;\n  border: none;\n  color: var(--fkds-icon-color-action-content-primary-default);\n  margin: 0;\n  padding: 0;\n}\n.combobox__button:disabled {\n  color: var(--fkds-icon-color-content-disabled);\n}\n.contextmenu {\n  min-width: 260px;\n  background-color: var(--f-background-popupmenu);\n}\n.contextmenu__list {\n  margin: 0;\n  border: 1px solid var(--f-border-color-popupmenu);\n  padding: 0.5rem;\n  display: block;\n  list-style-type: none;\n}\n.contextmenu__list__item {\n  cursor: pointer;\n  white-space: normal;\n  display: flex;\n  align-items: center;\n  padding: 0.75rem;\n}\n.contextmenu__list__item a,\n.contextmenu__list__item a:visited,\n.contextmenu__list__item a:active {\n  color: var(--f-text-color-popupmenu);\n}\n.contextmenu__list__item:hover {\n  color: var(--f-text-color-popupmenu-hover);\n  background-color: var(--f-background-popupmenu-vertical-hover);\n}\n@media (min-width: 640px) {\n.contextmenu__list__item {\n    white-space: nowrap;\n}\n}\n.contextmenu__separator {\n  margin: 0.75rem;\n  height: 1px;\n  border: none;\n  border-top: 1px solid var(--f-border-color-separator-contextmenu);\n}\n.contextmenu__lefticon {\n  margin-right: 0.75rem;\n  min-width: var(--f-icon-size-small);\n}\n.crud-dataset {\n  margin: 0 0 var(--f-margin-component-bottom);\n}\n.crud-dataset__add-button {\n  margin-bottom: 0 !important;\n  margin-top: 0.5rem !important;\n  margin-left: 2px;\n}\n.crud-dataset .list,\n.crud-dataset .table {\n  margin-bottom: 0;\n}\n.datepicker-field__button {\n  background: transparent;\n  border: 0;\n  border-radius: var(--f-border-radius-medium);\n  flex: 0 0 auto;\n  padding: 0;\n  cursor: pointer;\n}\n.datepicker-field__button .icon {\n  color: var(--fkds-icon-color-action-content-primary-default);\n  min-height: var(--f-icon-size-large);\n  min-width: var(--f-icon-size-large);\n  height: calc(var(--f-icon-size-x-large) * var(--f-density-factor));\n  width: calc(var(--f-icon-size-x-large) * var(--f-density-factor));\n  vertical-align: middle;\n}\n.datepicker-field__button:hover .icon {\n  color: var(--fkds-icon-color-action-content-primary-hover);\n}\n.datepicker-field__button:disabled .icon {\n  color: var(--fkds-icon-color-content-disabled);\n}\n.datepicker-field__popup {\n  margin-top: -16px;\n  border-radius: var(--f-border-radius-medium);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-primary);\n  background-color: var(--fkds-color-background-primary);\n}\n.datepicker-field__close {\n  display: flex;\n  justify-content: flex-end;\n}\n.datepicker-field__close > .datepicker-field__close__button {\n  margin: 0;\n  padding: 1rem;\n}\n.popup--overlay .datepicker-field__popup {\n  width: calc(100vw - 40px);\n  max-width: 28rem;\n}\n.popup--inline .datepicker-field__popup {\n  width: 100%;\n}\n.popup--inline .datepicker-field__table {\n  margin-top: 0;\n}\n.popup--inline .datepicker-field__table .calendar-month__cell {\n  padding: 0;\n  border-bottom: unset;\n}\n.popup--inline .datepicker-field__table .calendar-month__header-cell {\n  background-color: unset;\n  border: unset;\n}\n.dialogue-tree {\n  margin: 0 0 var(--f-margin-component-bottom);\n}\n.dialogue-tree__list {\n  margin-left: 0;\n  padding-left: 0;\n  list-style-type: none;\n  border-radius: 2px;\n  border: 1px solid var(--fkds-color-border-primary);\n}\n.dialogue-tree__list-item {\n  background-color: var(--fkds-color-background-primary);\n  border-bottom: 1px solid var(--fkds-color-border-primary);\n  padding: 0.25em;\n  height: 60px;\n}\n.dialogue-tree__list-item:last-child {\n  border-bottom: none;\n}\n.dialogue-tree__list-item:hover {\n  background-color: var(--fkds-color-action-background-secondary-hover);\n}\n.dialogue-tree__list-item button {\n  padding: 0 0.75em;\n  border: 0;\n  width: 100%;\n  height: 100%;\n  background-color: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.dialogue-tree__list-item button span {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  font-weight: var(--f-font-weight-medium);\n  font-size: var(--f-font-size-standard);\n  color: var(--fkds-color-action-text-secondary-default);\n  text-align: left;\n  cursor: pointer;\n}\n.dialogue-tree__list-item button .icon {\n  flex-shrink: 0;\n  margin-left: 1.25rem;\n}\n.error-list {\n  color: var(--f-text-color-error);\n  margin: 0 0 calc(var(--f-margin-component-bottom) * var(--f-density-factor));\n}\n.error-list--list-style-none {\n  list-style-type: none;\n  padding: 0;\n}\n.error-list--padding-left {\n  padding-left: 1rem;\n}\n.error-list__list {\n  margin: 0;\n  line-height: max(1.5, 2 * var(--f-density-factor));\n}\n.error-list__bullet::before {\n  color: var(--f-text-color-error);\n  content: "\u2022";\n  display: inline;\n  font-size: var(--f-font-size-h4);\n  line-height: 0;\n  margin-right: 0.75rem;\n}\n.error-list__link {\n  color: var(--f-text-color-error);\n  cursor: pointer;\n  list-style-position: inside;\n  text-decoration: underline;\n}\n.error-list__link a {\n  color: var(--f-text-color-error);\n}\n.error-list__icon {\n  max-width: none;\n  position: relative;\n  top: 3px;\n}\n.error-list--list-item {\n  display: list-item;\n}\n.expandable-paragraph {\n  margin: 0 0 calc(var(--f-margin-component-bottom) * var(--f-density-factor));\n}\n.expandable-paragraph__heading {\n  line-height: var(--f-line-height-medium);\n  margin: 0;\n}\n.expandable-paragraph__heading button {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  margin: 0;\n  display: flex;\n  text-align: left;\n  padding: 0;\n  flex-shrink: 0;\n}\n.expandable-paragraph__icon {\n  border-radius: 50%;\n  background-color: var(--f-icon-color-expandable-paragraph);\n  width: var(--f-icon-size-small);\n  height: var(--f-icon-size-small);\n  margin-top: calc((var(--f-line-height-medium) * 1em - var(--f-icon-size-small)) / 2);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  display: flex;\n  color: var(--f-icon-color-white);\n  padding: 3px;\n  flex-shrink: 0;\n  margin-right: 0.5rem;\n}\n.expandable-paragraph__icon .icon {\n  transition: transform var(--f-animation-duration-long) ease;\n}\n.expandable-paragraph.expandable-paragraph--open .expandable-paragraph__icon svg:nth-child(2) {\n  transform: rotate(0);\n}\n.expandable-paragraph.expandable-paragraph--open .expandable-paragraph__container {\n  height: auto;\n}\n.expandable-paragraph.expandable-paragraph--closed .expandable-paragraph__icon svg:nth-child(2) {\n  transform: rotate(-90deg);\n}\n.expandable-paragraph__container {\n  height: 0;\n  overflow: hidden;\n  transition: height var(--f-animation-duration-medium) cubic-bezier(0.46, 0.03, 0.52, 0.96);\n}\n.expandable-paragraph__content, .expandable-paragraph__related-information {\n  margin-left: calc(var(--f-icon-size-small) + 0.5rem);\n}\n.expandable-paragraph__related-information {\n  color: var(--f-text-color-discrete);\n  font-size: 0.875rem;\n}\n.expandable-paragraph__content {\n  margin-top: calc(0.75rem * var(--f-density-factor));\n  margin-bottom: calc(1rem * var(--f-density-factor));\n}\n.expandable-paragraph__separator {\n  border-bottom: var(--f-border-width-medium) solid var(--f-border-color-separator);\n  margin: 0 0.5rem calc(0.5rem * var(--f-density-factor)) 0.5rem;\n}\n.expandable-paragraph--list {\n  margin-bottom: calc(0.5rem * var(--f-density-factor));\n  padding-bottom: calc(0.5rem * var(--f-density-factor));\n  border-bottom: var(--f-border-width-small) solid var(--f-border-color-separator);\n}\n.fieldset {\n  border: 0;\n  margin: 0 0 calc(var(--f-margin-component-bottom) * var(--f-density-factor));\n  min-width: 0;\n  padding: 0;\n  width: var(--f-width-full);\n}\n.fieldset__label {\n  padding: 0;\n  margin-bottom: calc(0.75rem * var(--f-density-factor));\n}\n.fieldset__content {\n  display: flex;\n  flex-direction: column;\n}\n.file-item-list {\n  list-style-type: none;\n  padding-left: 0;\n}\n.file-item .button--discrete {\n  padding: 0;\n  min-width: auto;\n  text-align: left;\n  margin-right: 0.25rem;\n}\n.file-item__row {\n  margin-bottom: 1.25rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.file-item__row button,\n.file-item__row a {\n  margin-bottom: 0;\n}\n.file-item__file-open {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n  flex: 0 1 auto;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.file-item__file-remove {\n  flex: 0 0 auto;\n}\n.file-item__file-abort {\n  flex: 0 0 auto;\n}\n.file-item__file-abort svg {\n  color: var(--f-icon-color-error);\n}\n.file-item__change-info {\n  margin-top: -1.25rem;\n}\n.file-item__file-name {\n  margin-left: 0.25rem;\n  min-width: 0;\n  overflow-wrap: break-word;\n  white-space: normal;\n}\n.file-item__separator {\n  margin-bottom: 1.25rem;\n  border: var(--f-border-width-medium) solid var(--f-border-color-separator);\n}\n.file-selector svg {\n  color: var(--f-icon-color-primary);\n}\n.file-selector input[type=file] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.file-selector input[type=file]:focus + label {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n}\n.file-selector label {\n  cursor: pointer;\n}\n.file-selector input:disabled + label {\n  background-color: transparent;\n  border-color: transparent;\n  cursor: default;\n}\n.file-uploader__message-box {\n  margin-top: 1.25rem;\n}\n.form {\n  padding-top: 1rem;\n  padding-bottom: 3rem;\n}\n.form-step {\n  background: var(--f-background-form-step);\n  border: var(--f-border-width-medium) solid var(--f-border-color-form-step);\n  border-radius: var(--f-border-radius-small);\n  margin: 0 0 var(--f-margin-component-bottom);\n  margin-bottom: 2rem;\n  padding: 2rem;\n  position: relative;\n  transition: background-color var(--f-animation-duration-medium) ease-in-out, border-color var(--f-animation-duration-medium) ease-in-out;\n}\n@media (max-width: 639.98px) {\n.form-step {\n    padding: 1.5rem 0.75rem 2rem;\n    margin-left: -0.75rem;\n    margin-right: -0.75rem;\n}\n}\n.form-step--last-step {\n  margin-bottom: 3rem;\n}\n@media (max-width: 639.98px) {\n.form-step--last-step {\n    margin-bottom: 2rem;\n}\n}\n.form-step__header {\n  margin-bottom: 0.5rem;\n}\n.form-step__title {\n  font-size: var(--f-font-size-h2);\n  display: inline;\n}\n@media (max-width: 639.98px) {\n.form-step__title {\n    font-size: var(--f-font-size-xxx-large);\n}\n}\n.form-step__check {\n  transition: opacity var(--f-animation-duration-medium) ease-in-out;\n  color: var(--f-icon-color-success);\n  height: var(--f-icon-size-x-large);\n  margin-bottom: -0.25rem;\n  margin-left: 0.5rem;\n  width: var(--f-icon-size-x-large);\n}\n.form-step__error {\n  color: var(--f-text-color-error);\n}\n.form-step__arrow {\n  position: absolute;\n  left: 3rem;\n  top: 100%;\n}\n.form-step__arrow::before, .form-step__arrow::after {\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  pointer-events: none;\n  z-index: 1;\n  position: absolute;\n}\n.form-step__arrow::after {\n  border-color: none;\n  border-top-color: var(--f-background-form-step);\n  border-width: calc(var(--f-icon-size-small) - var(--f-border-width-medium) * 1.4142);\n  margin-left: calc(-1 * (var(--f-icon-size-small) - var(--f-border-width-medium) * 1.4142));\n}\n.form-step__arrow::before {\n  border-color: none;\n  border-top-color: var(--f-border-color-form-step);\n  border-width: var(--f-icon-size-small);\n  margin-left: calc(-1 * var(--f-icon-size-small));\n}\n@media (max-width: 639.98px) {\n.form-step__arrow {\n    left: 2rem;\n}\n}\n.form-step--complete {\n  background: var(--f-background-success);\n  border-color: var(--f-border-color-success);\n}\n.form-step--complete .form-step__arrow {\n  position: absolute;\n  left: 3rem;\n  top: 100%;\n}\n.form-step--complete .form-step__arrow::before, .form-step--complete .form-step__arrow::after {\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  pointer-events: none;\n  z-index: 1;\n  position: absolute;\n}\n.form-step--complete .form-step__arrow::after {\n  border-color: none;\n  border-top-color: var(--f-background-success);\n  border-width: calc(var(--f-icon-size-small) - var(--f-border-width-medium) * 1.4142);\n  margin-left: calc(-1 * (var(--f-icon-size-small) - var(--f-border-width-medium) * 1.4142));\n}\n.form-step--complete .form-step__arrow::before {\n  border-color: none;\n  border-top-color: var(--f-border-color-success);\n  border-width: var(--f-icon-size-small);\n  margin-left: calc(-1 * var(--f-icon-size-small));\n}\n@media (max-width: 639.98px) {\n.form-step--complete .form-step__arrow {\n    left: 2rem;\n}\n}\n.component-group > .component-group__item:not(:only-child) {\n  margin-bottom: 1rem;\n}\n.component-group > .component-group__item:last-child:not(:first-child) {\n  margin-bottom: 2rem;\n}\n.indent {\n  border-left: var(--f-border-width-medium) solid var(--f-border-color-separator);\n  margin-bottom: 1rem;\n  margin-left: 0.5rem;\n  padding-left: 1.5rem;\n}\n.label {\n  color: var(--fkds-color-text-primary);\n  display: inline-block;\n  font-size: var(--f-font-size-standard);\n  font-weight: var(--f-font-weight-medium);\n  line-height: var(--f-line-height-large);\n  margin-bottom: calc(0.25rem * var(--f-density-factor));\n  width: var(--f-width-full);\n}\n.label__message {\n  display: block;\n  font-weight: var(--f-font-weight-normal);\n  margin-top: var(--f-label-message-margin-top);\n}\n.label__message--error {\n  color: var(--fkds-color-feedback-text-negative);\n}\n.label__icon-wrapper {\n  position: relative;\n}\n.label__icon--left {\n  position: relative;\n  top: calc(3px * var(--f-density-factor));\n}\n.label__description {\n  display: block;\n  font-weight: var(--f-font-weight-normal);\n  color: var(--fkds-color-text-primary);\n}\n.label__description--format {\n  color: var(--fkds-color-text-secondary);\n}\n.layout-application-template {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.layout-application-template__header {\n  z-index: 9994;\n  position: sticky;\n  align-self: flex-start;\n  top: 0;\n  width: 100%;\n}\n.layout-application-template__footer {\n  flex-shrink: 0;\n}\n.layout-application-template__main {\n  flex-grow: 1;\n}\n.layout-application-template__main > .container-fluid {\n  margin: 20px;\n  width: initial;\n  max-width: 1440px;\n}\n.layout-application-template__body {\n  margin: 0;\n  padding: 0;\n  min-height: 100vh;\n}\n.layout-application-template__body > div {\n  height: 100%;\n}\n.layout-application-template__html {\n  height: 100%;\n}\n.grid--force .col.col--sm-1 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-2 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-3 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-4 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-5 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-6 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-7 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-8 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-9 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-10 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-11 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-12 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force-sm .col.col--sm-1 {\n  flex: 0 0 8.3333333333%;\n  max-width: 8.3333333333%;\n}\n.grid--force-sm .col.col--sm-order-1 {\n  order: 1;\n}\n.grid--force-sm .col.col--sm-2 {\n  flex: 0 0 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n.grid--force-sm .col.col--sm-order-2 {\n  order: 2;\n}\n.grid--force-sm .col.col--sm-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n.grid--force-sm .col.col--sm-order-3 {\n  order: 3;\n}\n.grid--force-sm .col.col--sm-4 {\n  flex: 0 0 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n.grid--force-sm .col.col--sm-order-4 {\n  order: 4;\n}\n.grid--force-sm .col.col--sm-5 {\n  flex: 0 0 41.6666666667%;\n  max-width: 41.6666666667%;\n}\n.grid--force-sm .col.col--sm-order-5 {\n  order: 5;\n}\n.grid--force-sm .col.col--sm-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n.grid--force-sm .col.col--sm-order-6 {\n  order: 6;\n}\n.grid--force-sm .col.col--sm-7 {\n  flex: 0 0 58.3333333333%;\n  max-width: 58.3333333333%;\n}\n.grid--force-sm .col.col--sm-order-7 {\n  order: 7;\n}\n.grid--force-sm .col.col--sm-8 {\n  flex: 0 0 66.6666666667%;\n  max-width: 66.6666666667%;\n}\n.grid--force-sm .col.col--sm-order-8 {\n  order: 8;\n}\n.grid--force-sm .col.col--sm-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n.grid--force-sm .col.col--sm-order-9 {\n  order: 9;\n}\n.grid--force-sm .col.col--sm-10 {\n  flex: 0 0 83.3333333333%;\n  max-width: 83.3333333333%;\n}\n.grid--force-sm .col.col--sm-order-10 {\n  order: 10;\n}\n.grid--force-sm .col.col--sm-11 {\n  flex: 0 0 91.6666666667%;\n  max-width: 91.6666666667%;\n}\n.grid--force-sm .col.col--sm-order-11 {\n  order: 11;\n}\n.grid--force-sm .col.col--sm-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.grid--force-sm .col.col--sm-order-12 {\n  order: 12;\n}\n.grid--force .col.col--md-1 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-2 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-3 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-4 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-5 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-6 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-7 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-8 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-9 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-10 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-11 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-12 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force-md .col.col--md-1 {\n  flex: 0 0 8.3333333333%;\n  max-width: 8.3333333333%;\n}\n.grid--force-md .col.col--md-order-1 {\n  order: 1;\n}\n.grid--force-md .col.col--md-2 {\n  flex: 0 0 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n.grid--force-md .col.col--md-order-2 {\n  order: 2;\n}\n.grid--force-md .col.col--md-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n.grid--force-md .col.col--md-order-3 {\n  order: 3;\n}\n.grid--force-md .col.col--md-4 {\n  flex: 0 0 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n.grid--force-md .col.col--md-order-4 {\n  order: 4;\n}\n.grid--force-md .col.col--md-5 {\n  flex: 0 0 41.6666666667%;\n  max-width: 41.6666666667%;\n}\n.grid--force-md .col.col--md-order-5 {\n  order: 5;\n}\n.grid--force-md .col.col--md-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n.grid--force-md .col.col--md-order-6 {\n  order: 6;\n}\n.grid--force-md .col.col--md-7 {\n  flex: 0 0 58.3333333333%;\n  max-width: 58.3333333333%;\n}\n.grid--force-md .col.col--md-order-7 {\n  order: 7;\n}\n.grid--force-md .col.col--md-8 {\n  flex: 0 0 66.6666666667%;\n  max-width: 66.6666666667%;\n}\n.grid--force-md .col.col--md-order-8 {\n  order: 8;\n}\n.grid--force-md .col.col--md-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n.grid--force-md .col.col--md-order-9 {\n  order: 9;\n}\n.grid--force-md .col.col--md-10 {\n  flex: 0 0 83.3333333333%;\n  max-width: 83.3333333333%;\n}\n.grid--force-md .col.col--md-order-10 {\n  order: 10;\n}\n.grid--force-md .col.col--md-11 {\n  flex: 0 0 91.6666666667%;\n  max-width: 91.6666666667%;\n}\n.grid--force-md .col.col--md-order-11 {\n  order: 11;\n}\n.grid--force-md .col.col--md-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.grid--force-md .col.col--md-order-12 {\n  order: 12;\n}\n.grid--force .col.col--lg-1 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-2 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-3 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-4 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-5 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-6 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-7 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-8 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-9 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-10 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-11 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-12 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force-lg .col.col--lg-1 {\n  flex: 0 0 8.3333333333%;\n  max-width: 8.3333333333%;\n}\n.grid--force-lg .col.col--lg-order-1 {\n  order: 1;\n}\n.grid--force-lg .col.col--lg-2 {\n  flex: 0 0 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n.grid--force-lg .col.col--lg-order-2 {\n  order: 2;\n}\n.grid--force-lg .col.col--lg-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n.grid--force-lg .col.col--lg-order-3 {\n  order: 3;\n}\n.grid--force-lg .col.col--lg-4 {\n  flex: 0 0 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n.grid--force-lg .col.col--lg-order-4 {\n  order: 4;\n}\n.grid--force-lg .col.col--lg-5 {\n  flex: 0 0 41.6666666667%;\n  max-width: 41.6666666667%;\n}\n.grid--force-lg .col.col--lg-order-5 {\n  order: 5;\n}\n.grid--force-lg .col.col--lg-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n.grid--force-lg .col.col--lg-order-6 {\n  order: 6;\n}\n.grid--force-lg .col.col--lg-7 {\n  flex: 0 0 58.3333333333%;\n  max-width: 58.3333333333%;\n}\n.grid--force-lg .col.col--lg-order-7 {\n  order: 7;\n}\n.grid--force-lg .col.col--lg-8 {\n  flex: 0 0 66.6666666667%;\n  max-width: 66.6666666667%;\n}\n.grid--force-lg .col.col--lg-order-8 {\n  order: 8;\n}\n.grid--force-lg .col.col--lg-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n.grid--force-lg .col.col--lg-order-9 {\n  order: 9;\n}\n.grid--force-lg .col.col--lg-10 {\n  flex: 0 0 83.3333333333%;\n  max-width: 83.3333333333%;\n}\n.grid--force-lg .col.col--lg-order-10 {\n  order: 10;\n}\n.grid--force-lg .col.col--lg-11 {\n  flex: 0 0 91.6666666667%;\n  max-width: 91.6666666667%;\n}\n.grid--force-lg .col.col--lg-order-11 {\n  order: 11;\n}\n.grid--force-lg .col.col--lg-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.grid--force-lg .col.col--lg-order-12 {\n  order: 12;\n}\n.grid--force .col.col--xl-1 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-2 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-3 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-4 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-5 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-6 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-7 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-8 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-9 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-10 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-11 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-12 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force-xl .col.col--xl-1 {\n  flex: 0 0 8.3333333333%;\n  max-width: 8.3333333333%;\n}\n.grid--force-xl .col.col--xl-order-1 {\n  order: 1;\n}\n.grid--force-xl .col.col--xl-2 {\n  flex: 0 0 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n.grid--force-xl .col.col--xl-order-2 {\n  order: 2;\n}\n.grid--force-xl .col.col--xl-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n.grid--force-xl .col.col--xl-order-3 {\n  order: 3;\n}\n.grid--force-xl .col.col--xl-4 {\n  flex: 0 0 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n.grid--force-xl .col.col--xl-order-4 {\n  order: 4;\n}\n.grid--force-xl .col.col--xl-5 {\n  flex: 0 0 41.6666666667%;\n  max-width: 41.6666666667%;\n}\n.grid--force-xl .col.col--xl-order-5 {\n  order: 5;\n}\n.grid--force-xl .col.col--xl-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n.grid--force-xl .col.col--xl-order-6 {\n  order: 6;\n}\n.grid--force-xl .col.col--xl-7 {\n  flex: 0 0 58.3333333333%;\n  max-width: 58.3333333333%;\n}\n.grid--force-xl .col.col--xl-order-7 {\n  order: 7;\n}\n.grid--force-xl .col.col--xl-8 {\n  flex: 0 0 66.6666666667%;\n  max-width: 66.6666666667%;\n}\n.grid--force-xl .col.col--xl-order-8 {\n  order: 8;\n}\n.grid--force-xl .col.col--xl-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n.grid--force-xl .col.col--xl-order-9 {\n  order: 9;\n}\n.grid--force-xl .col.col--xl-10 {\n  flex: 0 0 83.3333333333%;\n  max-width: 83.3333333333%;\n}\n.grid--force-xl .col.col--xl-order-10 {\n  order: 10;\n}\n.grid--force-xl .col.col--xl-11 {\n  flex: 0 0 91.6666666667%;\n  max-width: 91.6666666667%;\n}\n.grid--force-xl .col.col--xl-order-11 {\n  order: 11;\n}\n.grid--force-xl .col.col--xl-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.grid--force-xl .col.col--xl-order-12 {\n  order: 12;\n}\n.layout-navigation {\n  min-height: 100%;\n  width: 100%;\n}\n.layout-navigation__primary {\n  flex: auto;\n}\n.layout-navigation__primary > .container-fluid {\n  width: initial;\n  max-width: 1440px;\n  padding: 1.5rem;\n  margin-left: 0;\n  margin-right: 0;\n}\n.layout-navigation__navigation {\n  background-color: #f4f4f4;\n  display: flex;\n  position: fixed;\n  z-index: 9994;\n  left: 0;\n  bottom: 0;\n}\n.layout-navigation__navigation .button.button--tertiary:hover {\n  background-color: var(--f-background-sidepanel-button-tertiary-hover);\n}\n.layout-navigation__navigation__border {\n  width: 4px;\n  background-color: #f4f4f4;\n  cursor: w-resize;\n  flex-shrink: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.layout-navigation__navigation__border__dot {\n  background-color: #8d8e91;\n  width: 4px;\n  height: 4px;\n  border-radius: 2px;\n  margin-top: 4px;\n}\n.layout-navigation__navigation__border:hover {\n  background-color: #e5e5f5;\n}\n.layout-navigation__navigation__inner {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  margin-right: 12px;\n  word-wrap: break-word;\n  padding: 1rem;\n}\n.layout-navigation__navigation__inner__title {\n  display: flex;\n  align-items: center;\n  padding: 4px;\n}\n.layout-navigation__navigation__inner__title h3 {\n  flex: auto;\n  margin: 0;\n  min-width: 40%;\n}\n.layout-navigation__navigation__inner__title button {\n  margin: 0;\n  position: absolute;\n  right: 0.5rem;\n}\n.layout-navigation__navigation__inner__content {\n  flex-grow: 1;\n  overflow-y: auto;\n  padding: 4px;\n}\n.layout-navigation__navigation__inner__content::-webkit-scrollbar {\n  width: 6px;\n}\n.layout-navigation__navigation__inner__content::-webkit-scrollbar-thumb {\n  background: #8d8e91;\n  border: 1px solid #8d8e91;\n  box-sizing: border-box;\n  border-radius: 33px;\n}\n.layout-navigation__navigation__inner--minimized {\n  margin-left: -0.6rem;\n  margin-right: -0.8rem;\n  padding: 0;\n}\n.layout-secondary {\n  width: 100%;\n  min-height: 100%;\n}\n.layout-secondary__primary {\n  flex: auto;\n}\n.layout-secondary__primary > .container-fluid {\n  width: initial;\n  max-width: 1440px;\n  padding: 1.5rem;\n  margin-left: 0;\n  margin-right: 0;\n}\n.layout-secondary__secondary {\n  background-color: #f4f4f4;\n  position: fixed;\n  display: flex;\n  right: 0;\n  bottom: 0;\n  z-index: 9994;\n}\n.layout-secondary__secondary .button.button--tertiary:hover {\n  background-color: var(--f-background-sidepanel-button-tertiary-hover);\n}\n.layout-secondary__secondary__border {\n  width: 5px;\n  background-color: #f4f4f4;\n  cursor: w-resize;\n  flex-shrink: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.layout-secondary__secondary__border__dot {\n  background-color: #8d8e91;\n  width: 4px;\n  height: 4px;\n  border-radius: 2px;\n  margin-top: 4px;\n}\n.layout-secondary__secondary__border:hover {\n  background-color: #e5e5f5;\n}\n.layout-secondary__secondary__inner {\n  position: relative;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  word-wrap: break-word;\n  margin: 16px;\n  margin-left: 11px;\n}\n.layout-secondary__secondary__inner__title {\n  display: flex;\n  align-items: center;\n  padding: 4px;\n}\n.layout-secondary__secondary__inner__title h3 {\n  flex: auto;\n  margin: 0;\n  min-width: 40%;\n}\n.layout-secondary__secondary__inner__close.button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-bottom: 0;\n}\n.layout-secondary__secondary__inner__content {\n  flex-grow: 1;\n  overflow-y: auto;\n  padding: 4px;\n}\n.layout-secondary__secondary__inner__content::-webkit-scrollbar {\n  width: 6px;\n}\n.layout-secondary__secondary__inner__content::-webkit-scrollbar-thumb {\n  background: #8d8e91;\n  border: 1px solid #8d8e91;\n  box-sizing: border-box;\n  border-radius: 33px;\n}\n@media (width <= 1280px) {\n.layout-secondary__secondary {\n    /* stylelint-disable-next-line color-function-notation, alpha-value-notation -- technical debt */\n    box-shadow: 4px 0 2px rgba(0, 0, 0, 0.5), -4px 0 2px rgba(0, 0, 0, 0.5);\n}\n}\n@keyframes bouncedelay {\n0%, 80%, 100% {\n    transform: scale(0);\n}\n40% {\n    transform: scale(1);\n}\n}\n@keyframes spinner-delay {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n.loader div[tabindex] {\n  outline: none;\n}\n.loader__wrapper {\n  height: var(--f-loader-size);\n  margin: var(--f-loader-margin);\n  position: relative;\n  width: var(--f-loader-size);\n}\n.loader--delay {\n  animation: spinner-delay var(--f-animation-duration-short) forwards;\n  animation-delay: 1s;\n  opacity: 0;\n}\n.loader__spinner {\n  height: 100%;\n  position: absolute;\n  width: 100%;\n}\n.loader__circle {\n  animation: bouncedelay 1.2s infinite ease-in-out;\n  animation-fill-mode: both;\n  background-color: var(--f-icon-color-loader);\n  border-radius: 100%;\n  height: 1rem;\n  position: absolute;\n  width: 1rem;\n}\n.loader__wait-text {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  white-space: pre-wrap;\n}\n.loader--overlay .loader__backdrop {\n  align-items: center;\n  background: var(--f-background-overlay);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 9999;\n}\n.loader--overlay .loader__wait-text {\n  color: var(--f-text-color-default-inverted);\n}\n.loader--overlay .loader__circle {\n  background-color: var(--f-icon-color-white);\n}\n.loader .loader__spinner-1-circle2 {\n  animation-delay: -0.9s;\n}\n.loader .loader__spinner-1-circle3 {\n  animation-delay: -0.6s;\n}\n.loader .loader__spinner-1-circle4 {\n  animation-delay: -0.3s;\n}\n.loader .loader__spinner-2 {\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  transform: rotateZ(45deg);\n}\n.loader .loader__spinner-2-circle1 {\n  animation-delay: -1.1s;\n}\n.loader .loader__spinner-2-circle2 {\n  animation-delay: -0.8s;\n}\n.loader .loader__spinner-2-circle3 {\n  animation-delay: -0.5s;\n}\n.loader .loader__spinner-2-circle4 {\n  animation-delay: -0.2s;\n}\n.loader .loader__spinner-3 {\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  transform: rotateZ(90deg);\n}\n.loader .loader__spinner-3-circle1 {\n  animation-delay: -1s;\n}\n.loader .loader__spinner-3-circle2 {\n  animation-delay: -0.7s;\n}\n.loader .loader__spinner-3-circle3 {\n  animation-delay: -0.4s;\n}\n.loader .loader__spinner-3-circle4 {\n  animation-delay: -0.1s;\n}\n.loader__circle--1 {\n  left: 0;\n  top: 0;\n}\n.loader__circle--2 {\n  right: 0;\n  top: 0;\n}\n.loader__circle--3 {\n  bottom: 0;\n  right: 0;\n}\n.loader__circle--4 {\n  bottom: 0;\n  left: 0;\n}\n.loader__delay__spinner {\n  animation: spinner-delay var(--f-animation-duration-short) forwards;\n  animation-delay: 1s;\n  opacity: 0;\n}\n.logo {\n  display: inline-block;\n}\n.logo--small {\n  padding: var(--f-logo-size-small);\n  background: var(--f-logo-image-small);\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.logo--large {\n  padding: var(--f-logo-size-large);\n  background: var(--f-logo-image-large);\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.logo--responsive {\n  padding: var(--f-logo-size-large);\n  background: var(--f-logo-image-large);\n  background-repeat: no-repeat;\n  background-position: center;\n}\n@media (max-width: 639.98px) {\n.logo--responsive {\n    padding: var(--f-logo-size-small);\n    background: var(--f-logo-image-small);\n    background-repeat: no-repeat;\n    background-position: center;\n}\n}\n.message-box {\n  padding: calc(1.5rem * var(--f-density-factor)) 1.5rem;\n  margin: 0.5rem 0 calc(2rem * var(--f-density-factor)) 0;\n}\n.message-box__heading {\n  font-size: var(--f-font-size-h3);\n  font-weight: var(--f-font-weight-medium);\n  color: var(--fkds-color-text-primary);\n  line-height: var(--f-line-height-medium);\n  align-items: flex-start;\n  margin-bottom: calc(0.5rem * var(--f-density-factor));\n  margin-top: 0;\n}\n@media (max-width: 639.98px) {\n.message-box__heading {\n    font-size: var(--f-font-size-large);\n}\n}\n.message-box--info {\n  border: var(--f-border-width-medium) solid;\n  border-color: var(--fkds-color-feedback-border-info);\n  background-color: var(--fkds-color-feedback-background-info);\n  border-radius: var(--f-border-radius-small);\n  border-top: 1rem solid var(--fkds-color-feedback-border-info);\n}\n.message-box--info .iflex__item > p {\n  margin-bottom: 0;\n}\n.message-box--info-short {\n  border: var(--f-border-width-medium) solid;\n  border-color: var(--fkds-color-feedback-border-info);\n  background-color: var(--fkds-color-feedback-background-info);\n  border-radius: var(--f-border-radius-small);\n  border-left: 1rem solid var(--fkds-color-feedback-border-info);\n}\n.message-box--info-short .message-box__icon {\n  font-size: 0;\n}\n.message-box--info-short .message-box__icon .icon {\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n}\n.message-box--info-short .message-box__icon .icon-stack {\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n}\n.message-box--info-short .message-box__icon .icon__exclamation {\n  transform: translateY(-0.05rem);\n}\n.message-box--info-short .message-box__icon .icon__banner {\n  fill: var(--fkds-icon-color-feedback-content-negative);\n  color: white;\n}\n.message-box--info-short .message-box__icon__banner {\n  margin-top: 0;\n}\n.message-box--info-short .iflex__item > p {\n  margin-bottom: 0;\n}\n.message-box--error {\n  border: var(--f-border-width-medium) solid;\n  border-color: var(--fkds-color-feedback-border-negative);\n  background-color: var(--fkds-color-feedback-background-negative);\n  border-radius: var(--f-border-radius-small);\n  border-top: 1rem solid var(--fkds-color-feedback-border-negative);\n}\n.message-box--error .iflex__item > p {\n  margin-bottom: 0;\n}\n.message-box--error-short {\n  border: var(--f-border-width-medium) solid;\n  border-color: var(--fkds-color-feedback-border-negative);\n  background-color: var(--fkds-color-feedback-background-negative);\n  border-radius: var(--f-border-radius-small);\n  border-left: 1rem solid var(--fkds-color-feedback-border-negative);\n}\n.message-box--error-short .message-box__icon {\n  font-size: 0;\n}\n.message-box--error-short .message-box__icon .icon {\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n}\n.message-box--error-short .message-box__icon .icon-stack {\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n}\n.message-box--error-short .message-box__icon .icon__exclamation {\n  transform: translateY(-0.05rem);\n}\n.message-box--error-short .message-box__icon .icon__banner {\n  fill: var(--fkds-icon-color-feedback-content-negative);\n  color: white;\n}\n.message-box--error-short .message-box__icon__banner {\n  margin-top: 0;\n}\n.message-box--error-short .iflex__item > p {\n  margin-bottom: 0;\n}\n.message-box--warning {\n  border: var(--f-border-width-medium) solid;\n  border-color: var(--fkds-color-feedback-border-warning);\n  background-color: var(--fkds-color-feedback-background-warning);\n  border-radius: var(--f-border-radius-small);\n  border-top: 1rem solid var(--fkds-color-feedback-border-warning);\n}\n.message-box--warning .iflex__item > p {\n  margin-bottom: 0;\n}\n.message-box--warning-short {\n  border: var(--f-border-width-medium) solid;\n  border-color: var(--fkds-color-feedback-border-warning);\n  background-color: var(--fkds-color-feedback-background-warning);\n  border-radius: var(--f-border-radius-small);\n  border-left: 1rem solid var(--fkds-color-feedback-border-warning);\n}\n.message-box--warning-short .message-box__icon {\n  font-size: 0;\n}\n.message-box--warning-short .message-box__icon .icon {\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n}\n.message-box--warning-short .message-box__icon .icon-stack {\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n}\n.message-box--warning-short .message-box__icon .icon__exclamation {\n  transform: translateY(-0.05rem);\n}\n.message-box--warning-short .message-box__icon .icon__banner {\n  fill: var(--fkds-icon-color-feedback-content-negative);\n  color: white;\n}\n.message-box--warning-short .message-box__icon__banner {\n  margin-top: 0;\n}\n.message-box--warning-short .iflex__item > p {\n  margin-bottom: 0;\n}\n.message-box--success {\n  border: var(--f-border-width-medium) solid;\n  border-color: var(--fkds-color-feedback-border-positive);\n  background-color: var(--fkds-color-feedback-background-positive);\n  border-radius: var(--f-border-radius-small);\n  border-top: 1rem solid var(--fkds-color-feedback-border-positive);\n}\n.message-box--success .iflex__item > p {\n  margin-bottom: 0;\n}\n.message-box--success-short {\n  border: var(--f-border-width-medium) solid;\n  border-color: var(--fkds-color-feedback-border-positive);\n  background-color: var(--fkds-color-feedback-background-positive);\n  border-radius: var(--f-border-radius-small);\n  border-left: 1rem solid var(--fkds-color-feedback-border-positive);\n}\n.message-box--success-short .message-box__icon {\n  font-size: 0;\n}\n.message-box--success-short .message-box__icon .icon {\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n}\n.message-box--success-short .message-box__icon .icon-stack {\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n}\n.message-box--success-short .message-box__icon .icon__exclamation {\n  transform: translateY(-0.05rem);\n}\n.message-box--success-short .message-box__icon .icon__banner {\n  fill: var(--fkds-icon-color-feedback-content-negative);\n  color: white;\n}\n.message-box--success-short .message-box__icon__banner {\n  margin-top: 0;\n}\n.message-box--success-short .iflex__item > p {\n  margin-bottom: 0;\n}\n.message-box--banner {\n  width: var(--f-width-full);\n  box-shadow: var(--f-box-modal-shadow);\n  border-collapse: separate;\n  padding: calc(1rem * var(--f-density-factor)) 1rem;\n  border: var(--f-border-width-medium) solid;\n  border-color: var(--fkds-color-feedback-border-negative);\n  background-color: var(--fkds-color-feedback-background-negative);\n  border-radius: var(--f-border-radius-small);\n  border-top: 1rem solid var(--fkds-color-feedback-border-negative);\n}\n.message-box--banner .iflex__item > p {\n  margin-bottom: 0;\n}\n.message-box--banner .iflex__item > p {\n  margin-bottom: 0;\n}\n@media (max-width: 639.98px) {\n.message-box {\n    margin-bottom: calc(1.5rem * var(--f-density-factor));\n    margin-top: calc(1.5rem * var(--f-density-factor));\n    padding: calc(1rem * var(--f-density-factor)) 1rem;\n}\n}\n.modal__backdrop {\n  background: var(--f-background-overlay);\n  display: flex;\n  height: 100%;\n  inset: 0;\n  position: fixed;\n  width: 100%;\n  z-index: 9994;\n}\n.modal__outer-container {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  overflow: auto;\n  width: 100%;\n}\n.modal__inner-container {\n  align-items: center;\n  justify-content: center;\n  max-height: 100%;\n  width: 100%;\n}\n.modal__shelf {\n  justify-content: flex-end;\n  display: flex;\n  background-color: var(--fkds-color-background-primary);\n  border-top-left-radius: var(--f-border-radius-medium);\n  border-top-right-radius: var(--f-border-radius-medium);\n  margin-bottom: 1rem;\n}\n.modal__header {\n  display: flex;\n  font-size: var(--f-font-size-h4);\n  margin-bottom: 0.5rem;\n  width: 100%;\n}\n.modal__header .modal__title {\n  font-size: var(--f-modal-title-font-size);\n  margin-bottom: 0;\n  margin-top: 0;\n  color: var(--fkds-color-text-primary);\n}\n.modal__dialog-container {\n  background: transparent;\n  display: flex;\n  margin: auto;\n  width: calc(100vw - 40px);\n}\n@media (min-width: 640px) {\n.modal__dialog-container {\n    max-width: var(--f-modal-size-small);\n}\n.modal__dialog-container--small {\n    max-width: var(--f-modal-size-small);\n}\n.modal__dialog-container--medium {\n    max-width: var(--f-modal-size-medium);\n}\n.modal__dialog-container--large {\n    max-width: var(--f-modal-size-large);\n}\n.modal__dialog-container--fullwidth {\n    max-width: var(--f-modal-size-fullwidth);\n}\n}\n@media (max-width: 639.98px) {\n.modal__dialog-container--fullscreen {\n    width: 100%;\n    max-width: none;\n}\n.modal__dialog-container--fullscreen .modal__dialog {\n    min-height: 100vh;\n}\n.modal__dialog-container--fullscreen .modal__dialog-inner {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n}\n.modal__dialog-container--fullscreen .modal__content {\n    flex: 1 1 auto;\n}\n}\n.modal__dialog {\n  background: var(--fkds-color-background-primary);\n  outline: 2px solid transparent;\n  border-radius: var(--f-border-radius-medium);\n  display: flex;\n  flex-direction: column-reverse;\n  height: auto;\n  margin: auto;\n  width: 100%;\n  position: relative;\n  z-index: 9995;\n}\n.modal__dialog .modal__dialog-inner {\n  height: auto;\n  margin: 0 1.5rem 1.5rem;\n}\n@media (max-width: 639.98px) {\n.modal__dialog .modal__dialog-inner {\n    margin: 0 1rem 1rem;\n}\n}\n.modal__dialog .modal__footer {\n  margin-top: 2rem;\n}\n.modal__dialog .modal__footer > .button-group {\n  margin-bottom: 0;\n}\n.modal__dialog .modal__footer > .button-group .button-group__item:last-child:not(.button--small, .button--medium) {\n  margin-bottom: 0;\n}\n@media (min-width: 640px) {\n.modal__dialog .modal__footer > .button-group .button-group__item {\n    margin-bottom: 0;\n}\n}\n.modal__dialog > .button-group {\n  margin: 0;\n}\n.modal__dialog > .button-group .button-group__item:last-child {\n  margin: var(--f-modal-close-button-margin);\n  padding: var(--f-modal-close-button-padding);\n}\n.modal--information .modal__shelf {\n  background-color: var(--fkds-color-feedback-background-info-strong);\n}\n.modal--information .modal__shelf .close-button {\n  color: var(--fkds-color-action-text-inverted-default);\n}\n.modal--warning .modal__shelf {\n  background-color: var(--fkds-color-feedback-background-warning-strong);\n}\n.modal--error .modal__shelf {\n  background-color: var(--fkds-color-feedback-background-negative-strong);\n}\n.modal--error .modal__shelf .close-button {\n  color: var(--fkds-color-action-text-inverted-default);\n}\n.imenu__list {\n  background-color: var(--f-background-menu);\n  margin: 0;\n  padding: 0;\n}\n.imenu__list__item {\n  cursor: pointer;\n  list-style-type: none;\n  white-space: nowrap;\n}\n.imenu__list__item a,\n.imenu__list__item a:visited,\n.imenu__list__item a:active {\n  color: var(--f-text-color-menu);\n}\n.imenu__list__item a:hover {\n  color: var(--f-text-color-menu-hover);\n}\n.imenu__popup-item {\n  position: relative;\n  list-style-type: none;\n  white-space: nowrap;\n}\n.imenu__popup-item__wrapper {\n  display: inline-flex;\n  position: absolute;\n  left: 0;\n  padding-top: 1rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.imenu--vertical .imenu__list {\n  display: block;\n}\n.imenu--vertical .imenu__list__item {\n  padding: 0.75rem;\n  display: block;\n}\n.imenu--vertical .imenu__list__item:hover {\n  font-weight: var(--f-font-weight-normal);\n  background-color: var(--f-background-menu-vertical-hover);\n}\n.imenu--vertical .imenu__list__item--highlight {\n  background-color: var(--f-background-menu-vertical-highlight);\n  font-weight: var(--f-font-weight-medium);\n}\n.imenu--vertical .imenu__list__item--highlight:hover {\n  font-weight: var(--f-font-weight-medium);\n}\n.imenu--horizontal {\n  overflow: hidden;\n}\n.imenu--horizontal .imenu__list {\n  display: flex;\n}\n.imenu--horizontal .imenu__list__item {\n  display: inline-flex;\n  padding-top: 1rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.imenu--horizontal .imenu__list__item--highlight {\n  color: var(--f-text-color-menu-horizontal-highlight);\n  font-weight: var(--f-font-weight-medium);\n}\n.imenu--horizontal .imenu__list__item--highlight .imenu__list__anchor-container {\n  border-bottom: 5px solid var(--f-border-color-menu-horizontal-highlight);\n}\n.imenu--horizontal .imenu__list__item--highlight .imenu__list__anchor:hover {\n  font-weight: var(--f-font-weight-medium);\n}\n.imenu--horizontal .imenu__list__item--hidden {\n  visibility: hidden;\n}\n.imenu--horizontal .imenu__list__anchor-container {\n  padding-bottom: 0.5rem;\n  border-bottom: 5px solid transparent;\n}\n.imenu--horizontal .imenu__list__anchor-container:hover {\n  border-bottom: 5px solid var(--f-border-color-menu-horizontal-hover);\n}\n.imenu--horizontal .imenu__list__anchor {\n  display: inline-flex;\n}\n.imenu--horizontal .imenu__list__anchor-icon-right {\n  flex: 1 0 auto;\n  padding-top: 0.25rem;\n  margin-left: 0.75rem;\n  color: var(--f-border-color-menu-horizontal-highlight);\n}\n.offline {\n  width: var(--f-width-full);\n  box-shadow: var(--f-box-modal-shadow);\n  border-collapse: separate;\n  padding: calc(1rem * var(--f-density-factor)) 1rem;\n  border: var(--f-border-width-medium) solid;\n  border-color: var(--fkds-color-feedback-border-negative);\n  background-color: var(--fkds-color-feedback-background-negative);\n  border-radius: var(--f-border-radius-small);\n  border-left: 1rem solid var(--fkds-color-feedback-border-negative);\n}\n.offline .offline__icon {\n  font-size: 0;\n}\n.offline .offline__icon .icon {\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n}\n.offline .offline__icon .icon-stack {\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n}\n.offline .offline__icon .icon__exclamation {\n  transform: translateY(-0.05rem);\n}\n.offline .offline__icon .icon__banner {\n  fill: var(--fkds-icon-color-feedback-content-negative);\n  color: white;\n}\n.offline .offline__icon__banner {\n  margin-top: 0;\n}\n.offline .iflex__item > p {\n  margin-bottom: 0;\n}\n.offline .iflex__item > p {\n  margin-bottom: 0;\n}\n.offline {\n  padding: 1.5rem;\n}\n.offline__wrapper {\n  position: fixed;\n  position: sticky;\n  z-index: 9998;\n  right: 0;\n  top: 0;\n  left: 0;\n}\n.output-field {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  line-height: max(1, var(--f-line-height-large) * var(--f-density-factor));\n  margin: 0 0 calc(var(--f-margin-component-bottom) * var(--f-density-factor));\n  position: relative;\n  width: var(--f-width-full);\n}\n.output-field__output {\n  line-height: max(1, var(--f-line-height-large) * var(--f-density-factor));\n  font-size: var(--f-font-size-standard);\n  min-height: var(--f-height-medium);\n  position: relative;\n  width: var(--f-width-full);\n  margin-bottom: 0;\n}\n.progress {\n  background-color: var(--fkds-color-background-primary);\n  border-radius: var(--f-border-radius-medium);\n  height: var(--f-height-small);\n  margin-bottom: 1.5rem;\n  padding: 0;\n  border: var(--f-border-width-medium) solid var(--fkds-color-feedback-border-positive);\n}\n@media (forced-colors: active) {\n.progress {\n    border: var(--f-border-width-medium) solid highlight;\n}\n}\n.progress__meter {\n  display: block;\n  float: left;\n  height: calc(var(--f-height-small) - var(--f-border-width-medium) * 2);\n  transition: width var(--f-animation-duration-medium) ease-out, background-color var(--f-animation-duration-medium) ease-out;\n}\n.progress__meter--inprogress {\n  background: var(--fkds-color-feedback-background-positive-strong);\n}\n@media (forced-colors: active) {\n.progress__meter--inprogress {\n    background: highlight;\n}\n}\n.progress__meter--finished {\n  background: var(--fkds-color-feedback-background-positive-strong);\n}\n@media (forced-colors: active) {\n.progress__meter--finished {\n    background: highlight;\n}\n}\n.radio-button {\n  min-height: var(--f-height-medium);\n  margin-bottom: calc(1rem * var(--f-density-factor));\n  margin-right: 1.5rem;\n}\n.radio-button:last-child {\n  margin-bottom: 0;\n  margin-right: 0;\n}\n.radio-button__input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  min-height: calc(4 * var(--f-height-medium));\n}\n.radio-button__label {\n  min-width: 4.5rem;\n  cursor: pointer;\n  display: inline-block;\n  font-size: var(--f-font-size-standard);\n  line-height: var(--f-line-height-small);\n  padding-left: 1.75rem;\n  padding-top: 0.1rem;\n  padding-bottom: 0.1rem;\n  position: relative;\n}\n.radio-button__label * {\n  pointer-events: none;\n}\n.radio-button__label::before, .radio-button__label::after {\n  border-radius: 50%;\n  content: "";\n  height: var(--f-icon-size-medium);\n  left: 0;\n  margin: 0.1rem 0;\n  position: absolute;\n  top: 0;\n  cursor: pointer;\n  width: var(--f-icon-size-medium);\n  background-color: var(--fkds-color-background-primary);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-primary);\n  display: block;\n  transition: background-color ease var(--f-animation-duration-medium), border-color ease var(--f-animation-duration-medium), opacity ease var(--f-animation-duration-medium);\n}\n.radio-button__label::after {\n  background-color: var(--fkds-color-select-background-primary-default);\n  box-shadow: inset 0 0 0 var(--f-border-width-medium) var(--fkds-color-background-primary);\n  opacity: 0;\n}\n@media (forced-colors: active) {\n.radio-button__label::after {\n    forced-color-adjust: none;\n    background-color: Highlight;\n    box-shadow: inset 0 0 0 var(--f-border-width-medium) Canvas;\n}\n}\n.radio-button.disabled {\n  color: var(--fkds-color-text-disabled);\n}\n@media (forced-colors: active) {\n.radio-button.disabled {\n    color: GrayText;\n}\n}\n.radio-button.disabled .radio-button__label {\n  cursor: default;\n}\n.radio-button.disabled .radio-button__label::before, .radio-button.disabled .radio-button__label::after {\n  background: var(--fkds-color-background-disabled);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-disabled);\n  cursor: default;\n}\n@media (forced-colors: active) {\n.radio-button.disabled .radio-button__label::before, .radio-button.disabled .radio-button__label::after {\n    border: var(--f-border-width-medium) solid GrayText;\n}\n}\n.radio-button input[type=radio] + label::after {\n  opacity: 0;\n}\n.radio-button input[type=radio]:checked + label::after {\n  border: var(--f-border-width-medium) solid transparent;\n  opacity: 1;\n}\n.radio-button input[type=radio]:focus + label {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n}\n.radio-button-group__content {\n  display: flex;\n  flex-direction: column;\n}\n.radio-button-group--horizontal .radio-button-group__content {\n  flex-direction: row;\n}\n.radio-button-group--horizontal .radio-button-group__content .radio-button {\n  margin-bottom: 0;\n}\n@media (max-width: 639.98px) {\n.radio-button-group--horizontal .radio-button-group__content {\n    flex-direction: column;\n}\n.radio-button-group--horizontal .radio-button-group__content .radio-button {\n    margin-bottom: 1rem;\n}\n}\n.select-field {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  margin: 0 0 calc(var(--f-margin-component-bottom) * var(--f-density-factor));\n  position: relative;\n  width: var(--f-width-full);\n}\n@media (min-width: 640px) {\n.select-field--inline {\n    margin-bottom: calc(0.75rem * var(--f-density-factor));\n    flex-direction: row;\n    justify-content: flex-start;\n    width: auto;\n}\n.select-field--inline .label {\n    width: auto;\n    margin-right: 1rem;\n    padding-top: calc(0.5rem * var(--f-density-factor));\n}\n}\n.select-field--table {\n  margin-bottom: 0;\n}\n.select-field--table-error .select-field__select {\n  padding-right: calc(var(--f-icon-size-large) + 2.25rem);\n}\n.select-field__select {\n  appearance: none;\n  background-color: var(--fkds-color-background-primary);\n  box-shadow: var(--f-input-shadow-inset);\n  border-radius: var(--f-border-radius-medium);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-primary);\n  color: var(--fkds-color-text-primary);\n  cursor: pointer;\n  min-height: calc(var(--f-height-large) * var(--f-density-factor));\n  padding: var(--padding-input-fields);\n  width: var(--f-width-full);\n}\n.select-field__select:hover {\n  background-color: var(--fkds-color-action-background-secondary-hover);\n}\n.select-field__select:focus {\n  background-color: var(--fkds-color-background-primary);\n}\n.select-field__select:disabled {\n  border-color: var(--fkds-color-border-disabled);\n  color: var(--fkds-color-text-disabled);\n  background-color: var(--fkds-color-background-disabled);\n  opacity: 1;\n}\n.select-field__select:disabled + .select-field__icon {\n  color: var(--fkds-icon-color-content-disabled);\n}\n.select-field__icon-wrapper {\n  position: relative;\n}\n.select-field__icon {\n  color: var(--fkds-icon-color-action-content-primary-default);\n}\n.select-field__error-popup-icon {\n  color: var(--f-text-color-error);\n  display: inline;\n  position: absolute;\n  right: calc(var(--f-icon-size-large) + 0.75rem);\n  top: 0.5rem;\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n  overflow: hidden;\n  text-align: center;\n}\n.select-field--error .select-field__select {\n  border-color: var(--fkds-color-feedback-border-negative);\n}\n.sort-filter-dataset__sort {\n  min-width: 80px;\n}\n.sort-filter-dataset__search {\n  position: relative;\n}\n.sort-filter-dataset__search input {\n  padding-left: 2.1rem;\n  padding-right: 2.1rem;\n}\n@media (min-width: 640px) {\n.sort-filter-dataset__search input {\n    width: 160px;\n}\n}\n.sort-filter-dataset__search__magnify-icon {\n  position: absolute;\n  left: 1.75rem;\n  height: var(--f-height-large);\n  /* same as textfield */\n  z-index: 1;\n  /* In front of input field */\n  width: 1.2rem;\n  color: var(--f-icon-color-sort-filter-dataset-search);\n}\n@media (max-width: 639.98px) {\n.sort-filter-dataset__search__magnify-icon {\n    top: 1.5rem;\n    left: 0.75rem;\n}\n}\n.sort-filter-dataset__search__close-icon.button--discrete {\n  position: absolute;\n  top: -0.75rem;\n  right: 0;\n  color: var(--f-icon-color-sort-filter-dataset-close);\n  cursor: pointer;\n  padding: 1rem;\n}\n@media (max-width: 639.98px) {\n.sort-filter-dataset__search__close-icon.button--discrete {\n    top: 1rem;\n}\n}\n.sort-filter-dataset__search__close-icon.button--discrete:hover {\n  box-shadow: none;\n  background-color: transparent;\n}\n.static-panel {\n  margin-bottom: 2.5rem;\n}\n.static-panel__heading {\n  background: var(--f-background-heading-static-panel);\n  border: var(--f-static-panel-heading-border);\n  border-bottom: 0;\n  font-size: var(--f-font-size-h3);\n  line-height: 2rem;\n  margin-bottom: 0;\n  padding: 0.25rem 1rem;\n}\n.static-panel__content {\n  border-top: 0;\n  border: var(--f-border-width-medium) solid var(--f-border-color-panel);\n  padding: 1.75rem 1.5rem;\n}\n.static-panel__icon {\n  height: var(--f-icon-size-x-large);\n  margin-right: 0.25rem;\n  position: relative;\n  top: 0.5rem;\n  width: var(--f-icon-size-x-large);\n}\n.table tbody .table__column--numeric, .table tbody .table__column--date {\n  font-feature-settings: tnum 1;\n  font-variant-numeric: tabular-nums;\n}\n.table tbody .table__expandable-row, .table tbody .table__row--normal, .table tbody .table__row {\n  background: var(--f-background-grid-default);\n  color: var(--f-text-color-default);\n}\n.table--striped tbody .table__row:nth-child(even), .table tbody .table__row--striped {\n  background: var(--f-background-grid-striped);\n  color: var(--f-text-color-default);\n}\n.table--hover tbody .table__row:hover, .table tbody .table__row--hover {\n  background: var(--f-background-grid-hover);\n  color: var(--f-text-color-default);\n  outline: 1px solid var(--f-border-color-grid-hover);\n}\n.table tbody .table__row:focus-within, .table tbody .table__row--focus-within {\n  background: var(--f-background-grid-focus-inner);\n  color: var(--f-text-color-default);\n}\n.table tbody .table__row:focus, .table tbody .table__row--focus {\n  background: var(--f-background-grid-hover);\n  color: var(--f-text-color-default);\n  outline: 2px solid var(--f-color-focus);\n  box-shadow: none;\n}\n.table--hover tbody .table__row:hover.table__row--active, .table--striped tbody .table__row:nth-child(even).table__row--active, .table tbody .table__row--active, .table tbody .table__row:focus.table__row--active, .table tbody .table__row--focus.table__row--active, .table tbody .table__row:focus-within.table__row--active, .table tbody .table__row--focus-within.table__row--active {\n  background: var(--f-background-grid-active);\n  color: var(--f-text-color-default);\n}\n.table tbody .table__row--expanded-border td,\n.table tbody .table__row--expanded-border th {\n  border-bottom-color: var(--f-border-color-grid-expanded);\n}\n.table tbody .table__row--expandable {\n  cursor: pointer;\n}\n.table {\n  border-collapse: separate;\n  border-spacing: 0;\n  font-size: var(--f-font-size-standard);\n  margin: 0 0 calc(var(--f-margin-component-bottom) * var(--f-density-factor));\n  width: 100%;\n  border: 2px solid transparent;\n}\n.table:focus {\n  border-color: var(--f-color-focus);\n  box-shadow: none;\n}\n.table caption {\n  background: transparent;\n  color: var(--f-text-color-default);\n  font-size: var(--f-font-size-standard);\n  font-weight: var(--f-font-weight-medium);\n  line-height: var(--f-line-height-large);\n  margin-bottom: calc(0.25rem * var(--f-density-factor));\n  width: var(--f-width-full);\n  text-align: left;\n}\n.table thead th {\n  background: var(--f-background-grid-header);\n  border-bottom: 2px solid var(--f-border-color-grid-header);\n  border-right: 1px solid var(--f-border-color-grid);\n  color: var(--f-text-color-default);\n  font-weight: var(--f-font-weight-medium);\n  line-height: var(--f-line-height-large);\n  padding: calc(0.25rem * var(--f-density-factor)) 0.5rem;\n  text-align: left;\n  vertical-align: top;\n}\n.table thead th:last-child {\n  border-right: none;\n}\n.table thead th .table__column__header__icon {\n  color: var(--f-icon-color-table-header);\n  height: var(--f-icon-size-x-small);\n  width: var(--f-icon-size-x-small);\n  min-width: var(--f-icon-size-x-small);\n}\n.table thead th .table__column__header__icon--discrete {\n  color: var(--f-icon-color-table-header-discrete);\n}\n.table tbody .table__expandable-row--collapsed {\n  display: none;\n}\n.table tbody td,\n.table tbody th {\n  padding: calc(var(--f-table-body-row-padding) * var(--f-density-factor)) var(--f-table-body-row-padding);\n  border-bottom: 1px solid var(--f-border-color-grid);\n  vertical-align: top;\n}\n.table tbody td {\n  line-height: calc(1.5rem * var(--f-density-factor));\n  font-weight: var(--f-font-weight-normal);\n}\n.table tbody th {\n  border-right: 1px solid var(--f-border-color-grid);\n  font-weight: var(--f-font-weight-medium);\n  line-height: calc(1.5rem * var(--f-density-factor));\n}\n.table tbody .table__column--action {\n  white-space: nowrap;\n}\n.table tbody .table__column--selectable {\n  padding: calc(0.2rem * var(--f-density-factor)) 0.2rem;\n}\n.table tbody .table__column--placeholder + .table__column {\n  padding-left: 1.5rem;\n}\n.table tbody .table__column--action .button--discrete, .table tbody .table__column--action .button--tertiary {\n  margin: var(--f-button-tertiary-table-column-action-margin);\n  min-width: 24px;\n  width: max-content;\n}\n.table tbody .table__column--action .button--discrete .button__icon, .table tbody .table__column--action .button--tertiary .button__icon {\n  margin: var(--f-button-tertiary-table-column-action-icon-margin);\n  transform: translate(0, 10%);\n}\n.table__column--text {\n  text-align: left;\n}\n.table__column--numeric {\n  text-align: right;\n}\n.table__column--date {\n  text-align: left;\n}\n.table__column--action {\n  text-align: center;\n}\n.table__column--shrink {\n  width: 1px;\n  white-space: nowrap;\n}\n.table__column--sortable {\n  cursor: pointer;\n}\n.table__column__description {\n  display: block;\n  background: transparent;\n  color: var(--f-text-color-discrete);\n  font-weight: var(--f-font-weight-normal);\n}\n.table--selectable .table__row td:hover,\n.table--selectable .table__row th:hover {\n  cursor: pointer;\n}\n.table__scroll {\n  margin: 0 0 calc(var(--f-margin-component-bottom) * var(--f-density-factor));\n  overflow: hidden;\n}\n.table__scroll thead th,\n.table__scroll thead td,\n.table__scroll tbody th,\n.table__scroll tbody td {\n  white-space: nowrap;\n}\n.table__scroll .table {\n  margin: 0;\n}\n.table__scroll--horizontal {\n  overflow-x: auto;\n}\n.table__input {\n  margin-top: calc(0.25rem * var(--f-density-factor));\n}\n.table__input .checkbox__label,\n.table__input .radio-button__label {\n  min-width: 1.75rem;\n  min-height: 1.75rem;\n  padding: 0;\n}\n.table__input .checkbox__label::after,\n.table__input .checkbox__label::before,\n.table__input .radio-button__label::after,\n.table__input .radio-button__label::before {\n  top: calc(0.15rem * var(--f-density-factor));\n  left: 0.25rem;\n}\n.table__expand-icon {\n  color: var(--f-icon-color-primary);\n  background: transparent;\n  border: 0;\n  flex: 0 0 auto;\n  padding: 0;\n  pointer-events: none;\n  width: 1.5rem;\n  height: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.table__anchor {\n  cursor: pointer;\n  display: inline-flex;\n  gap: 0.25rem;\n}\n.table__anchor > svg.icon {\n  flex-shrink: 0;\n  align-self: center;\n  min-width: auto;\n  max-width: none;\n}\n.table__button {\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 0;\n  box-shadow: none;\n  color: var(--fkds-color-action-text-primary-default);\n  padding: calc(var(--f-button-tertiary-padding-top) * var(--f-density-factor)) var(--f-button-tertiary-padding-right) calc(var(--f-button-tertiary-padding-bottom) * var(--f-density-factor)) var(--f-button-tertiary-padding-left);\n  font-weight: var(--f-font-weight-medium);\n  outline-offset: 0.25rem;\n  font-size: 14px;\n  line-height: 1.25rem;\n  min-width: 24px;\n  padding: calc(0.375rem * var(--f-density-factor)) 0.25rem;\n  text-underline-offset: 3.5px;\n  margin: var(--f-button-tertiary-table-column-action-margin);\n  width: max-content;\n}\n.table__button:hover {\n  background-color: var(--fkds-color-action-background-secondary-hover);\n  border-color: transparent;\n  color: var(--fkds-color-action-text-primary-default);\n  box-shadow: none;\n}\n.table__button:active, .table__button:focus {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n  background-color: var(--fkds-color-action-background-secondary-hover);\n  border-color: transparent;\n  color: var(--fkds-color-action-text-primary-default);\n}\n.table__button.disabled, .table__button.disabled:hover, .table__button:disabled, .table__button:disabled:hover, .table__button.table__button--disabled, .table__button.table__button--disabled:hover {\n  background-color: transparent;\n  border-color: transparent;\n  color: var(--fkds-color-text-disabled);\n}\n.table__button .button__icon {\n  margin: var(--f-button-tertiary-table-column-action-icon-margin);\n  transform: translate(0, 10%);\n  height: 14px;\n  width: 14px;\n}\n.text-field {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  margin: 0 0 calc(var(--f-margin-component-bottom) * var(--f-density-factor));\n  position: relative;\n  width: var(--f-width-full);\n  /* stylelint-disable property-no-vendor-prefix */\n}\n@media (min-width: 640px) {\n.text-field--inline {\n    margin-bottom: calc(0.75rem * var(--f-density-factor));\n    flex-direction: row;\n    justify-content: flex-start;\n    width: auto;\n}\n.text-field--inline .label {\n    width: auto;\n    margin-right: 1rem;\n    padding-top: calc(0.5rem * var(--f-density-factor));\n}\n}\n.text-field--table {\n  margin-bottom: 0;\n}\n.text-field input[type=text]::-ms-clear {\n  display: none;\n}\n.text-field__error-popup-icon {\n  color: var(--f-text-color-error);\n  height: 16px;\n}\n.text-field__input-wrapper {\n  display: flex;\n  gap: calc(0.5rem * var(--f-density-factor));\n}\n.text-field__input {\n  background-color: var(--fkds-color-background-primary);\n  box-shadow: var(--f-input-shadow-inset);\n  border-radius: var(--f-border-radius-medium);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-primary);\n  min-height: calc(var(--f-height-large) * var(--f-density-factor));\n  padding: 0 0.75rem;\n  width: var(--f-width-full);\n}\n.text-field__icon-wrapper {\n  flex: 1 1 auto;\n  position: relative;\n}\n.text-field__icon-wrapper:has(.text-field__append-inner) .text-field__input {\n  padding: var(--padding-input-fields);\n}\n.text-field__append-inner {\n  display: inline;\n  position: absolute;\n  right: calc(0.75rem * var(--f-density-factor));\n  top: calc(0.5rem * var(--f-density-factor));\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n  overflow: hidden;\n  text-align: center;\n}\n.text-field__icon {\n  height: var(--f-icon-size-large);\n  transition: opacity var(--f-animation-duration-medium) ease-in-out;\n  width: var(--f-icon-size-large);\n}\n.text-field__icon--left {\n  position: relative;\n  top: 3px;\n}\n.text-field__input:disabled + .text-field__icon {\n  color: var(--fkds-icon-color-content-disabled);\n}\n.text-field__input:disabled {\n  border-color: var(--fkds-color-border-disabled);\n  color: var(--fkds-color-text-disabled);\n  background-color: var(--fkds-color-background-disabled);\n}\n.text-field--error .text-field__input {\n  border-color: var(--fkds-color-feedback-border-negative);\n}\n.text-field--search + .text-field__append-inner {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: calc(0.25rem * var(--f-density-factor));\n  min-height: calc(var(--f-height-large) * var(--f-density-factor));\n  width: 2.5rem;\n}\n.text-field .clear-button {\n  background: none;\n  border: 0;\n  cursor: pointer;\n}\n.text-field .clear-button__icon {\n  color: var(--fkds-icon-color-action-content-weak-default);\n  height: var(--f-icon-size-x-small);\n  width: var(--f-icon-size-x-small);\n}\n.text-field input[type=search]::-webkit-search-decoration,\n.text-field input[type=search]::-webkit-search-cancel-button,\n.text-field input[type=search]::-webkit-search-results-button,\n.text-field input[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n}\n.textarea-field {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  line-height: var(--f-line-height-large);\n  margin: 0 0 calc(var(--f-margin-component-bottom) * var(--f-density-factor));\n  position: relative;\n  width: var(--f-width-full);\n}\n@media (min-width: 640px) {\n.textarea-field--inline {\n    margin-bottom: calc(0.75rem * var(--f-density-factor));\n    flex-direction: row;\n    justify-content: flex-start;\n    width: auto;\n}\n.textarea-field--inline .label {\n    width: auto;\n    margin-right: 1rem;\n    padding-top: calc(0.5rem * var(--f-density-factor));\n}\n}\n.textarea-field__textarea {\n  background-color: var(--fkds-color-background-primary);\n  box-shadow: var(--f-input-shadow-inset);\n  border-radius: var(--f-border-radius-medium);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-primary);\n  box-sizing: border-box;\n  font-size: var(--f-font-size-standard);\n  min-height: calc(var(--f-height-large) * var(--f-density-factor));\n  padding: calc(0.5rem * var(--f-density-factor)) 0.75rem;\n  width: var(--f-width-full);\n}\n.textarea-field__textarea[rows] {\n  height: auto;\n}\n.textarea-field__textarea:disabled {\n  border-color: var(--fkds-color-border-disabled);\n  color: var(--fkds-color-text-disabled);\n  background-color: var(--fkds-color-background-disabled);\n}\n.textarea-field--error .textarea-field__textarea {\n  border-color: var(--fkds-color-feedback-border-negative);\n}\n.textarea-field__resize--none {\n  resize: none;\n}\n.textarea-field__resize--vertical {\n  resize: vertical;\n}\n.tooltip {\n  display: none;\n  overflow: hidden;\n  width: 100%;\n  margin-bottom: calc(1rem * var(--f-density-factor));\n}\n.tooltip.expanded, .tooltip.animating {\n  display: block;\n}\n.tooltip__container {\n  text-wrap: pretty;\n  margin-bottom: calc(0.25rem * var(--f-density-factor));\n}\n.tooltip__container:has(+ .tooltip.expanded), .tooltip__container:has(+ .tooltip.animating) {\n  margin-bottom: 0;\n}\n.tooltip__container .label {\n  display: inline;\n  width: max-content;\n}\n.tooltip__container h1,\n.tooltip__container h2,\n.tooltip__container h3,\n.tooltip__container h4,\n.tooltip__container h5,\n.tooltip__container h6 {\n  display: inline;\n  width: max-content;\n}\n.tooltip__container:has(h1) .tooltip__button {\n  bottom: 0.2lh;\n}\n.tooltip__container:has(h2) .tooltip__button {\n  bottom: 0.1lh;\n}\n.tooltip__container:has(h3) .tooltip__button {\n  bottom: 0;\n}\n.tooltip__button {\n  display: inline-flex;\n  appearance: none;\n  background: none;\n  border: 0;\n  padding: 0;\n  cursor: pointer;\n  margin-left: 0.25rem;\n  position: relative;\n  bottom: -0.1lh;\n}\n.tooltip__button .icon {\n  top: 0;\n  left: 0;\n}\n.tooltip__button,\n.tooltip__button .icon,\n.tooltip__button .icon-stack {\n  width: 1em;\n  height: 1em;\n}\n.tooltip__body {\n  padding: 0 1rem;\n}\n.tooltip__header {\n  font-size: var(--f-font-size-large);\n  font-weight: var(--f-font-weight-bold);\n  line-height: var(--f-line-height-medium);\n  padding: 0 1rem;\n  margin-bottom: 0.5rem;\n}\n.tooltip .close-button {\n  margin: var(--f-tooltip-close-button-margin);\n}\n.tooltip__footer {\n  display: flex;\n  justify-content: flex-end;\n}\n.tooltip__bubble {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  margin-top: 10px;\n  margin-bottom: 0.5rem;\n  border: 2px solid var(--fkds-color-feedback-border-info);\n  border-radius: var(--f-border-radius-small);\n  background-color: var(--fkds-color-feedback-background-info);\n  padding-top: 1rem;\n}\n.tooltip__bubble::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: clamp(20px / 2, var(--f-tooltip-offset), 100% - 20px / 2);\n  border-style: solid;\n  border-width: 0 10px 10px 10px;\n  border-color: transparent transparent var(--fkds-color-feedback-border-info);\n  translate: -50% -100%;\n}\n.tooltip__bubble::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: clamp(20px / 2, var(--f-tooltip-offset), 100% - 20px / 2);\n  border-style: solid;\n  border-width: 0 7.2px 7.2px 7.2px;\n  border-color: transparent transparent var(--fkds-color-feedback-background-info);\n  translate: -50% -100%;\n}\n.wizard {\n  margin-top: 20px;\n}\n\n/* Selectors */\n/* position adjustments for lines */\n/* change line-gap-to-circle variable to change distances */\n.wizard-step {\n  display: grid;\n  grid-template: "wizard-step__line-up wizard-step__step-of" min-content "wizard-step__icon-container wizard-step__header" min-content "wizard-step__content wizard-step__content" min-content/min-content 1fr;\n  gap: 0 0.5rem;\n}\n.wizard-step:first-of-type .wizard-step__line-up {\n  border: 0;\n}\n.wizard-step:last-of-type .wizard-step__line-down,\n.wizard-step:last-of-type .wizard-step__icon-container__line-down {\n  border: 0;\n}\n.wizard-step .wizard-step__header__title {\n  font-size: 1.125rem;\n  margin-top: 2px;\n  margin-bottom: 20px;\n}\n.wizard-step .wizard-step__icon-container {\n  grid-area: wizard-step__icon-container;\n  display: flex;\n  flex-direction: column;\n}\n.wizard-step .wizard-step__icon-container__circle {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 2px solid var(--fkds-color-border-strong);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.25rem;\n  font-weight: bold;\n  text-align: center;\n  transition: background-color 400ms ease-out, border-color 400ms ease-out, opacity 400ms ease-out;\n}\n@media (max-width: 639.98px) {\n.wizard-step .wizard-step-body__border-container {\n    display: none;\n}\n}\n.wizard-step .wizard-step-body__border-container .wizard-step__line-down {\n  margin-top: 0;\n}\n.wizard-step .icon.f-icon-success {\n  display: none;\n}\n.wizard-step .wizard-step__header {\n  grid-area: wizard-step__header;\n}\n.wizard-step .wizard-step__step-of {\n  color: var(--fkds-color-text-secondary);\n  font-weight: normal;\n  font-size: 1rem;\n}\n.wizard-step .wizard-step__line-down,\n.wizard-step .wizard-step__icon-container__line-down,\n.wizard-step .wizard-step__line-up {\n  border-left: 2px solid var(--fkds-color-border-strong);\n  margin-left: 14px;\n}\n.wizard-step .wizard-step__icon-container__line-down {\n  margin-top: 4px;\n}\n.wizard-step .wizard-step__line-down {\n  grid-area: wizard-step__line-down;\n}\n.wizard-step .wizard-step__content {\n  margin-left: 0.5rem;\n  min-width: 0;\n  grid-area: wizard-step__content;\n}\n.wizard-step .wizard-step__line-up {\n  margin-bottom: 4px;\n  grid-area: wizard-step__line-up;\n}\n.wizard-step--open + .wizard-step--pending .wizard-step__line-up {\n  padding-top: 20px;\n  margin-top: -0.5rem;\n}\n.wizard-step .wizard-step__icon-container__line-down {\n  flex: 1;\n}\n@media (min-width: 640px) {\n.wizard-step {\n    grid-template: "wizard-step__line-up wizard-step__step-of" min-content "wizard-step__icon-container wizard-step__header" min-content "wizard-step__line-down wizard-step__content" min-content/min-content 1fr;\n}\n.wizard-step--open + .wizard-step--pending .wizard-step__line-up {\n    margin-top: 0;\n    padding-top: 0;\n}\n.wizard-step .wizard-step__content {\n    margin-left: 0;\n}\n}\n.wizard-step--open .wizard-step__header__title {\n  color: var(--fkds-color-text-primary);\n}\n.wizard-step--open .wizard-step__step-of {\n  display: block;\n}\n.wizard-step--done .wizard-step__header__title .anchor {\n  color: var(--fkds-color-feedback-text-positive);\n  text-decoration-color: var(--fkds-color-feedback-text-positive);\n  text-decoration-thickness: 2px;\n  text-underline-offset: 0.25em;\n}\n.wizard-step--done .wizard-step__header__title .anchor:hover {\n  text-decoration-color: var(--fkds-color-feedback-text-positive);\n  text-decoration-thickness: 3px;\n  text-underline-offset: 0.25em;\n}\n.wizard-step--done .icon.f-icon-success {\n  display: block;\n  color: var(--fkds-icon-color-content-inverted);\n  width: 20px;\n  height: auto;\n}\n.wizard-step--done .wizard-step__icon-container__circle {\n  background-color: var(--f-icon-color-wizard-step-done);\n  border-color: var(--f-icon-color-wizard-step-done);\n}\n.wizard-step--done .wizard-step__icon-container__number {\n  display: none;\n}\n.wizard-step--pending .wizard-step__header__title {\n  color: var(--f-text-color-discrete);\n}\n.wizard-step--pending .wizard-step__icon-container__circle {\n  border: 2px solid var(--fkds-color-border-strong);\n  background-color: var(--fkds-color-background-disabled);\n  color: var(--f-icon-color-discrete);\n}\n@media (forced-colors: active) {\n.wizard-step .icon.f-icon-success {\n    color: CanvasText;\n}\n}\n\n/* stylelint-disable no-invalid-position-at-import-rule -- technical debt */\n.iflex {\n  display: flex;\n}\n.iflex--gap-1x {\n  margin-left: -0.25rem;\n  margin-right: -0.25rem;\n}\n.iflex--gap-1x .iflex__item {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.iflex--gap-2x {\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n}\n.iflex--gap-2x .iflex__item {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.iflex--gap-3x {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n}\n.iflex--gap-3x .iflex__item {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.iflex--gap-4x {\n  margin-left: -1rem;\n  margin-right: -1rem;\n}\n.iflex--gap-4x .iflex__item {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.iflex--gap-5x {\n  margin-left: -1.25rem;\n  margin-right: -1.25rem;\n}\n.iflex--gap-5x .iflex__item {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.iflex--gap-6x {\n  margin-left: -1.5rem;\n  margin-right: -1.5rem;\n}\n.iflex--gap-6x .iflex__item {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.iflex--gap-7x {\n  margin-left: -1.75rem;\n  margin-right: -1.75rem;\n}\n.iflex--gap-7x .iflex__item {\n  padding-left: 1.75rem;\n  padding-right: 1.75rem;\n}\n.iflex--gap-8x {\n  margin-left: -2rem;\n  margin-right: -2rem;\n}\n.iflex--gap-8x .iflex__item {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.iflex__item {\n  flex: 1 0 0%;\n}\n.iflex--grow {\n  flex: 1 1 auto;\n}\n.iflex--shrink {\n  flex: 0 1 auto;\n}\n.iflex--align-top {\n  align-self: flex-start;\n}\n.iflex--align-center {\n  align-self: center;\n}\n.iflex--align-bottom {\n  align-self: flex-end;\n}\n@media (max-width: 639.98px) {\n.iflex--collapse {\n    display: block;\n}\n}\n.iflex--wrap {\n  flex-wrap: wrap;\n}\n.iflex--float-right {\n  justify-content: flex-end;\n}\n.iflex--float-center {\n  justify-content: center;\n}\n.ipopupmenu {\n  background-color: var(--f-background-popupmenu);\n}\n.ipopupmenu__list {\n  margin: 0;\n  border: 1px solid var(--f-border-color-popupmenu);\n  padding: 0.5rem;\n}\n.ipopupmenu__list__item {\n  cursor: pointer;\n  list-style-type: none;\n  white-space: nowrap;\n}\n.ipopupmenu__list__item a,\n.ipopupmenu__list__item a:visited,\n.ipopupmenu__list__item a:active {\n  color: var(--f-text-color-popupmenu);\n}\n.ipopupmenu__list__item a:hover {\n  color: var(--f-text-color-popupmenu-hover);\n}\n.ipopupmenu--vertical .ipopupmenu__list {\n  display: block;\n}\n.ipopupmenu--vertical .ipopupmenu__list__item {\n  padding: 0.75rem;\n  display: block;\n}\n.ipopupmenu--vertical .ipopupmenu__list__item:hover {\n  background-color: var(--f-background-popupmenu-vertical-hover);\n}\n.ipopupmenu--vertical .ipopupmenu__list__item--highlight {\n  background-color: var(--f-background-popupmenu-vertical-highlight);\n  font-weight: var(--f-font-weight-medium);\n}\n.iskiplink {\n  position: absolute;\n  top: -200px;\n}\n.iskiplink:focus {\n  color: black;\n  background-color: var(--f-background-skiplink-focus);\n  left: 10px;\n  top: 45px;\n}\n.animate-expand {\n  transition: var(--f-animation-expand-close);\n  overflow: hidden;\n  visibility: hidden;\n}\n.animate-expand--expanded {\n  transition: var(--f-animation-expand-open);\n  opacity: 1;\n  visibility: visible;\n}\n.animate-expand--opacity {\n  opacity: 0;\n}\n.calendar-month__table {\n  border-spacing: 2px;\n  padding: 0 0.5rem 1rem;\n  width: 100%;\n  border-collapse: separate;\n  border: none;\n  margin: 0;\n}\n.calendar-month__col--week {\n  width: 2%;\n}\n.calendar-month__col--day {\n  width: 14%;\n}\n.calendar-month__header-cell {\n  padding: 0.5rem 0;\n  text-align: center;\n}\n.calendar-month__header-cell abbr,\n.calendar-month__header-cell span {\n  font-weight: var(--f-font-weight-normal);\n  text-decoration: none;\n  border-bottom: none;\n  text-transform: none;\n  font-size: 1rem;\n  cursor: auto;\n  color: var(--fkds-color-text-secondary);\n}\n.calendar-month__cell {\n  height: 2.75rem;\n  padding: 0;\n}\n.calendar-month__cell--week-number {\n  vertical-align: middle;\n  padding-right: 0.25rem;\n  text-align: right;\n  min-width: 2rem;\n  color: var(--fkds-color-text-secondary);\n}\n.calendar-month__button {\n  appearance: none;\n  border: 0;\n  cursor: pointer;\n  padding: 0;\n  width: 100%;\n  background-color: var(--fkds-color-background-secondary);\n  font-size: 1rem;\n}\n.calendar-month__button:focus {\n  position: relative;\n  z-index: 9997;\n}\n.calendar-month__button:focus[tabindex="-1"] {\n  box-shadow: var(--f-focus-box-shadow);\n}\n.calendar-navbar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  text-align: center;\n  border-bottom: var(--f-border-width-medium) solid var(--fkds-color-border-weak);\n  padding: 1rem;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n  font-size: var(--f-font-size-h3);\n}\n.calendar-navbar__month {\n  margin-right: auto;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.calendar-navbar__arrow--previous {\n  transform: scaleX(-1);\n}\n.calendar-navbar__icon {\n  color: var(--fkds-icon-color-action-content-inverted-default);\n  background-color: var(--fkds-color-action-background-primary-default);\n  width: var(--f-icon-size-large);\n  height: var(--f-icon-size-large);\n  padding: 5px;\n  border-radius: 50%;\n  box-shadow: var(--f-button-shadow);\n}\n.calendar-navbar__icon--disabled {\n  color: var(--fkds-icon-color-content-disabled);\n  background-color: var(--fkds-color-background-disabled);\n  padding: 4px;\n  border: 1px solid var(--fkds-color-border-disabled);\n  box-shadow: none;\n}\n.calendar-navbar__arrow {\n  padding: 0;\n  display: flex;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n.calendar__wrapper {\n  width: 100%;\n}\n.popup--overlay {\n  position: absolute;\n  top: 0;\n}\n.popup--overlay .popup__wrapper {\n  left: -10000px;\n  max-width: fit-content;\n  border-radius: var(--f-border-radius-small);\n  position: absolute;\n  z-index: 9996;\n  box-shadow: var(--f-box-modal-shadow);\n}\n.popup--inline {\n  position: static;\n}\n.popup--inline .popup__wrapper {\n  box-sizing: border-box;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  position: static;\n}\n.popup-error {\n  --i-popup-error-offset: 24px;\n}\n.popup-error--overlay {\n  position: absolute;\n  top: 0;\n}\n.popup-error--overlay .popup-error__wrapper {\n  left: -10000px;\n  position: absolute;\n  z-index: 9996;\n  white-space: nowrap;\n}\n.popup-error--inline {\n  position: static;\n}\n.popup-error--inline .popup-error__wrapper {\n  box-sizing: border-box;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  position: static;\n}\n.popup-error--arrow {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5em 10px;\n  background: var(--f-border-color-error);\n  line-height: 24px;\n  position: relative;\n}\n.popup-error--arrow .popup-error__button {\n  margin: 0;\n  min-height: 24px;\n  min-width: 24px;\n  padding: 0;\n  padding-left: 5px;\n}\n.popup-error--arrow::before {\n  content: "";\n  position: absolute;\n  z-index: -1;\n  inset: 0;\n  padding: var(--f-border-width-medium);\n  border-radius: inherit;\n  background: var(--f-background-error) content-box;\n}\n.popup-error--top {\n  border-radius: min(5.7735026919px, 100% - var(--i-popup-error-offset) - 60deg) min(5.7735026919px, 100% - (100% - var(--i-popup-error-offset)) - 60deg) 5.7735026919px 5.7735026919px/5.7735026919px;\n  border-image: conic-gradient(var(--f-border-color-error) 0 0) fill 0/0 max(0%, 100% - (100% - var(--i-popup-error-offset)) - 5.7735026919px) 0.2em max(0%, 100% - var(--i-popup-error-offset) - 5.7735026919px)/10px 0 0 0;\n  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0, min(100%, 100% - var(--i-popup-error-offset) + 5.7735026919px) 0, calc(100% - var(--i-popup-error-offset)) -10px, max(0%, 100% - var(--i-popup-error-offset) - 5.7735026919px) 0);\n}\n.popup-error--bottom {\n  border-radius: 5.7735026919px 5.7735026919px min(5.7735026919px, 100% - (100% - var(--i-popup-error-offset)) - 60deg) min(5.7735026919px, 100% - var(--i-popup-error-offset) - 60deg)/5.7735026919px;\n  border-image: conic-gradient(var(--f-border-color-error) 0 0) fill 0/0.2em max(0%, 100% - (100% - var(--i-popup-error-offset)) - 5.7735026919px) 0 max(0%, 100% - var(--i-popup-error-offset) - 5.7735026919px)/0 0 10px 0;\n  clip-path: polygon(0 100%, 0 0, 100% 0, 100% 100%, min(100%, 100% - var(--i-popup-error-offset) + 5.7735026919px) 100%, calc(100% - var(--i-popup-error-offset)) calc(100% + 10px), max(0%, 100% - var(--i-popup-error-offset) - 5.7735026919px) 100%);\n}\n.popup-error--left {\n  border-radius: 5.7735026919px/min(5.7735026919px, 100% - var(--i-popup-error-offset) - 60deg) 5.7735026919px 5.7735026919px min(5.7735026919px, 100% - (100% - var(--i-popup-error-offset)) - 60deg);\n  border-image: conic-gradient(var(--f-border-color-error) 0 0) fill 0/max(0%, 100% - var(--i-popup-error-offset) - 5.7735026919px) 0.2em max(0%, 100% - (100% - var(--i-popup-error-offset)) - 5.7735026919px) 0/0 0 0 10px;\n  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 min(100%, 100% - var(--i-popup-error-offset) + 5.7735026919px), -10px calc(100% - var(--i-popup-error-offset)), 0 max(0%, 100% - var(--i-popup-error-offset) - 5.7735026919px));\n}\n.popup-error--right {\n  border-radius: 5.7735026919px/5.7735026919px min(5.7735026919px, 100% - var(--i-popup-error-offset) - 60deg) min(5.7735026919px, 100% - (100% - var(--i-popup-error-offset)) - 60deg) 5.7735026919px;\n  border-image: conic-gradient(var(--f-border-color-error) 0 0) fill 0/max(0%, 100% - var(--i-popup-error-offset) - 5.7735026919px) 0 max(0%, 100% - (100% - var(--i-popup-error-offset)) - 5.7735026919px) 0.2em/0 10px 0 0;\n  clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%, 100% min(100%, 100% - var(--i-popup-error-offset) + 5.7735026919px), calc(100% + 10px) calc(100% - var(--i-popup-error-offset)), 100% max(0%, 100% - var(--i-popup-error-offset) - 5.7735026919px));\n}\n.popup-error--top::before {\n  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0, min(100% - var(--f-border-width-medium), 100% - var(--i-popup-error-offset) + 5.7735026919px - var(--f-border-width-medium) * 0.5773502692) var(--f-border-width-medium), calc(100% - var(--i-popup-error-offset)) calc(var(--f-border-width-medium) / 0.5 - 10px), max(var(--f-border-width-medium), 100% - var(--i-popup-error-offset) - 5.7735026919px + var(--f-border-width-medium) * 0.5773502692) var(--f-border-width-medium));\n  border-image: conic-gradient(var(--f-background-error) 0 0) fill 0/0 max(var(--f-border-width-medium), 100% - (100% - var(--i-popup-error-offset)) - 5.7735026919px) 0.2em max(var(--f-border-width-medium), 100% - var(--i-popup-error-offset) - 5.7735026919px)/10px 0 0 0;\n}\n.popup-error--bottom::before {\n  clip-path: polygon(0 100%, 0 0, 100% 0, 100% 100%, min(100% - var(--f-border-width-medium), 100% - var(--i-popup-error-offset) + 5.7735026919px - var(--f-border-width-medium) * 0.5773502692) calc(100% - var(--f-border-width-medium)), calc(100% - var(--i-popup-error-offset)) calc(100% + 10px - var(--f-border-width-medium) / 0.5), max(var(--f-border-width-medium), 100% - var(--i-popup-error-offset) - 5.7735026919px + var(--f-border-width-medium) * 0.5773502692) calc(100% - var(--f-border-width-medium)));\n  border-image: conic-gradient(var(--f-background-error) 0 0) fill 0/0.2em max(var(--f-border-width-medium), 100% - (100% - var(--i-popup-error-offset)) - 5.7735026919px) 0 max(var(--f-border-width-medium), 100% - var(--i-popup-error-offset) - 5.7735026919px)/0 0 10px 0;\n}\n.popup-error--left::before {\n  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, var(--f-border-width-medium) min(100% - var(--f-border-width-medium), 100% - var(--i-popup-error-offset) + 5.7735026919px - var(--f-border-width-medium) * 0.5773502692), calc(var(--f-border-width-medium) / 0.5 - 10px) calc(100% - var(--i-popup-error-offset)), var(--f-border-width-medium) max(var(--f-border-width-medium), 100% - var(--i-popup-error-offset) - 5.7735026919px + var(--f-border-width-medium) * 0.5773502692));\n  border-image: conic-gradient(var(--f-background-error) 0 0) fill 0/max(var(--f-border-width-medium), 100% - var(--i-popup-error-offset) - 5.7735026919px) 0.2em max(var(--f-border-width-medium), 100% - (100% - var(--i-popup-error-offset)) - 5.7735026919px) 0/0 0 0 10px;\n}\n.popup-error--right::before {\n  clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%, calc(100% - var(--f-border-width-medium)) min(100% - var(--f-border-width-medium), 100% - var(--i-popup-error-offset) + 5.7735026919px - var(--f-border-width-medium) * 0.5773502692), calc(100% + 10px - var(--f-border-width-medium) / 0.5) calc(100% - var(--i-popup-error-offset)), calc(100% - var(--f-border-width-medium)) max(var(--f-border-width-medium), 100% - var(--i-popup-error-offset) - 5.7735026919px + var(--f-border-width-medium) * 0.5773502692));\n  border-image: conic-gradient(var(--f-background-error) 0 0) fill 0/max(var(--f-border-width-medium), 100% - var(--i-popup-error-offset) - 5.7735026919px) 0 max(var(--f-border-width-medium), 100% - (100% - var(--i-popup-error-offset)) - 5.7735026919px) 0.2em/0 10px 0 0;\n}\n\n/* spacing around the panel (space from layout area/resize handle to header, content, footer) */\n/* distance between each slot: header, content, footer) */\n/* panel background color */\n/* button background color when hovering */\n:host {\n  display: contents;\n}\n:host([hidden]) {\n  display: none;\n}\n:host ::slotted([slot=icon]) {\n  display: contents;\n}\n::slotted([slot=header]) {\n  font-weight: 700 !important;\n  font-size: 1.25rem !important;\n  line-height: 1 !important;\n  margin: 0 !important;\n}\n.panel__wrapper {\n  flex-grow: 1;\n  display: flex;\n}\n.panel {\n  background: var(--f-page-layout-background);\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem;\n  gap: 0.5rem;\n}\n.panel__header {\n  flex: 0 0 auto;\n  display: flex;\n  gap: 0.25rem;\n  align-items: baseline;\n  justify-content: center;\n}\n.attach-left .panel__header {\n  flex-direction: row;\n}\n.attach-right .panel__header {\n  flex-direction: row-reverse;\n}\n.panel__close-button {\n  flex: 0 0 auto;\n  appearance: none;\n  line-height: 1;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  padding: 1rem;\n  width: max-content;\n}\n.panel__close-button:hover {\n  background-color: var(--fkds-color-action-background-secondary-hover);\n}\n.panel__close-button:active, .panel__close-button:focus {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n  background-color: var(--fkds-color-action-background-secondary-hover);\n}\n.panel__title {\n  flex: 1 1 auto;\n}\n.panel__content {\n  flex: 1 0 auto;\n}\n.panel__footer {\n  flex: 0 0 auto;\n}';
var FDetailsPanel = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["styles", [_style_0$2]]]);
var _hoisted_1$p = {
  slot: "icon"
};
var tagName = "ce-details-panel";
var header$1 = "header";
var content$1 = "content";
var footer$1 = "footer";
var _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "FDetailsPanel",
  props: {
    name: {},
    exclusive: {}
  },
  setup(__props) {
    if (!customElements.get(tagName)) {
      customElements.define(tagName, defineCustomElement(FDetailsPanel));
    }
    const overlay = useMediaQuery("(width < 640px)");
    const panel = createDetailsPanel(__props.name, {
      exclusive: __props.exclusive
    });
    const $t2 = useTranslate();
    const visible = computed(() => Boolean(panel.item.value));
    const closeText = $t2("fkui.details-panel.close", "St\xE4ng");
    useResize({
      visible,
      overlay
    });
    onUnmounted(() => {
      panel.destroy();
    });
    function onClose(reason = "close") {
      if (panel.callback.value) {
        const item = panel.item.value;
        panel.callback.value({
          item,
          reason
        });
      }
      panel.close();
    }
    return (_ctx, _cache) => {
      return visible.value ? (openBlock(), createBlock(resolveDynamicComponent(tagName), {
        key: 0,
        "data-panel-name": _ctx.name,
        onClosed: _cache[0] || (_cache[0] = ($event) => onClose())
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({
          item: unref(panel).item.value,
          close: onClose,
          header: header$1,
          footer: footer$1,
          content: content$1
        }))), _cache[1] || (_cache[1] = createTextVNode()), createElementVNode("div", _hoisted_1$p, [createVNode(unref(FIcon), {
          name: "close"
        }, {
          default: withCtx(() => [createElementVNode("title", null, toDisplayString(unref(closeText)), 1)]),
          _: 1
        })])]),
        _: 3,
        __: [1]
      }, 40, ["data-panel-name"])) : createCommentVNode("", true);
    };
  }
});
function isDialogueTreeEndQuestion(value) {
  return Boolean(value.userData);
}
var _sfc_main$q = defineComponent({
  name: "FDialogueTree",
  components: {
    FIcon
  },
  props: {
    /**
     * Current dialogue question
     * @model
     */
    modelValue: {
      type: Object,
      required: true
    },
    /**
     * Dialogue tree
     */
    dialogueTree: {
      type: Object,
      required: true
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      currentStep: this.dialogueTree,
      steps: []
    };
  },
  computed: {
    userData() {
      if (isDialogueTreeEndQuestion(this.currentStep)) {
        return this.currentStep.userData;
      }
      return void 0;
    },
    options() {
      if (!isDialogueTreeEndQuestion(this.currentStep)) {
        return this.currentStep.options;
      }
      return [];
    }
  },
  created() {
    this.currentStep = this.dialogueTree;
    if (isDialogueTreeEndQuestion(this.currentStep)) {
      this.emitChange(true);
    } else {
      this.emitChange(false);
    }
  },
  methods: {
    async onClickedOption(option, index) {
      this.steps.push(index);
      this.currentStep = option.question;
      if (isDialogueTreeEndQuestion(option.question)) {
        this.emitChange(true);
        await this.$nextTick();
        focusFirst(this.$el);
      } else {
        this.emitChange(false);
        await this.$nextTick();
        const firstElement = getHTMLElementsFromVueRef(this.$refs["dialogueButton-0"])[0];
        if (firstElement) {
          focus$1(firstElement);
        }
      }
    },
    emitChange(lastStep) {
      const emit = {
        label: this.currentStep.label,
        lastStep,
        steps: this.steps
      };
      this.$emit("update:modelValue", emit);
    }
  }
});
var _hoisted_1$o = {
  class: "dialogue-tree"
};
var _hoisted_2$k = {
  key: 0,
  class: "dialogue-tree__list"
};
var _hoisted_3$f = ["onClick"];
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  return openBlock(), createElementBlock("div", _hoisted_1$o, [_ctx.options.length > 0 ? (openBlock(), createElementBlock("ul", _hoisted_2$k, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.options, (option, index) => {
    return openBlock(), createElementBlock("li", {
      key: option.label,
      class: "dialogue-tree__list-item"
    }, [createElementVNode("button", {
      ref_for: true,
      ref: `dialogueButton-${index}`,
      type: "button",
      onClick: ($event) => _ctx.onClickedOption(option, index)
    }, [createElementVNode("span", null, toDisplayString(option.label), 1), _cache[0] || (_cache[0] = createTextVNode()), createVNode(_component_f_icon, {
      name: "arrow-right"
    })], 8, _hoisted_3$f)]);
  }), 128))])) : renderSlot(_ctx.$slots, "default", normalizeProps(mergeProps({
    key: 1
  }, {
    userData: _ctx.userData
  })))]);
}
var FDialogueTree = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$j]]);
var _sfc_main$p = defineComponent({
  name: "FExpandablePanel",
  components: {
    FIcon,
    FExpand
  },
  mixins: [TranslationMixin],
  inheritAttrs: false,
  props: {
    /**
     * Toggle expanded/collapsed state
     */
    expanded: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * Element to render for the header element inside the expandable panel.
     * 'h1', 'h2', 'h3', 'h4', 'h5' and 'h6' is valid.
     */
    headerTag: {
      default: "h2",
      required: false,
      validator(value) {
        return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
      }
    },
    /**
     * The id for the content id attribute.
     * If the prop is not set the id will be generated.
     */
    id: {
      type: String,
      required: false,
      default: () => ElementIdService.generateElementId()
    },
    /**
     * Number of notifications present in panel.
     *
     * If set to zero (default) no notification badge will be displayed.
     */
    notifications: {
      type: Number,
      required: false,
      default: 0
    },
    /**
     * Text template for the screen reader notification text.
     * Use `%VALUE%` as a placeholder for the number of notifications.
     */
    screenReaderNotificationTemplate: {
      type: String,
      required: false,
      default: "Du har %VALUE% notifieringar."
    }
  },
  emits: ["toggle"],
  computed: {
    expandedClass() {
      return this.expanded ? "expandable-panel--expanded" : "expandable-panel--collapsed";
    },
    hasOutsideSlot() {
      return hasSlot(this, "outside");
    },
    haveNotifications() {
      return this.notifications > 0;
    },
    screenReaderNotificationText() {
      return `${this.screenReaderNotificationTemplate.replace("%VALUE%", this.notifications.toString())}`;
    }
  },
  methods: {
    onClickHeadingButton(event) {
      this.$emit("toggle", event);
    }
  }
});
var _hoisted_1$n = ["aria-expanded", "aria-controls"];
var _hoisted_2$j = {
  class: "expandable-panel__icon"
};
var _hoisted_3$e = {
  class: "icon-stack"
};
var _hoisted_4$c = ["title"];
var _hoisted_5$a = {
  class: "sr-only"
};
var _hoisted_6$8 = ["id"];
var _hoisted_7$6 = {
  class: "expandable-panel__body"
};
var _hoisted_8$4 = {
  key: 0,
  class: "expandable-panel__outside"
};
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  const _component_f_expand = resolveComponent("f-expand");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["expandable-panel", _ctx.expandedClass])
  }, [(openBlock(), createBlock(resolveDynamicComponent(_ctx.headerTag), {
    class: "expandable-panel__heading"
  }, {
    default: withCtx(() => [createElementVNode("button", mergeProps({
      type: "button",
      "aria-expanded": _ctx.expanded ? "true" : "false",
      "aria-controls": _ctx.id
    }, _ctx.$attrs, {
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickHeadingButton && _ctx.onClickHeadingButton(...args))
    }), [createElementVNode("span", _hoisted_2$j, [createElementVNode("span", _hoisted_3$e, [createVNode(_component_f_icon, {
      name: "dash"
    }), _cache[1] || (_cache[1] = createTextVNode()), createVNode(_component_f_icon, {
      name: "dash"
    })])]), _cache[3] || (_cache[3] = createTextVNode()), renderSlot(_ctx.$slots, "title"), _cache[4] || (_cache[4] = createTextVNode()), _ctx.haveNotifications ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: "expandable-panel__notification",
      title: _ctx.$t("fkui.expandable-panel.notification.title", "{{ count }} notifiering{{ suffix }}", {
        count: _ctx.notifications,
        suffix: _ctx.notifications > 1 ? "ar" : ""
      })
    }, [createElementVNode("span", _hoisted_5$a, toDisplayString(_ctx.screenReaderNotificationText), 1), _cache[2] || (_cache[2] = createTextVNode()), createVNode(_component_f_icon, {
      name: "bell"
    })], 8, _hoisted_4$c)) : createCommentVNode("", true)], 16, _hoisted_1$n)]),
    _: 3
  })), _cache[6] || (_cache[6] = createTextVNode()), createVNode(_component_f_expand, null, {
    default: withCtx(() => [withDirectives(createElementVNode("div", {
      id: _ctx.id,
      class: "expandable-panel__content"
    }, [createElementVNode("div", _hoisted_7$6, [renderSlot(_ctx.$slots, "default")]), _cache[5] || (_cache[5] = createTextVNode()), _ctx.hasOutsideSlot ? (openBlock(), createElementBlock("div", _hoisted_8$4, [renderSlot(_ctx.$slots, "outside")])) : createCommentVNode("", true)], 8, _hoisted_6$8), [[vShow, _ctx.expanded]])]),
    _: 3
  })], 2);
}
var FExpandablePanel = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$i]]);
var _sfc_main$o = defineComponent({
  name: "FExpandableParagraph",
  components: {
    FIcon,
    FExpand
  },
  inheritAttrs: false,
  props: {
    /**
     * Toggle expanded/collapsed state
     */
    expanded: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * Element to render for the button elmement
     * 'span', 'h1', 'h2', 'h3', 'h4', 'h5' and 'h6' is valid.
     */
    headerTag: {
      default: "span",
      required: false,
      validator(value) {
        return ["h1", "h2", "h3", "h4", "h5", "h6", "span"].includes(value);
      }
    },
    /**
     * Visual header size for the button element.
     * 'h1', 'h2', 'h3', 'h4', 'h5' and 'h6' is valid.
     * If not used, the default styling will be h4
     */
    headerVisualTag: {
      type: String,
      default: "",
      required: false,
      validator(value) {
        return ["", "h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
      }
    },
    /**
     * Toggle list style of component
     */
    list: {
      type: Boolean,
      default: false,
      required: false
    },
    /**
     * The id for the content id attribute.
     * If the prop is not set the id will be generated.
     */
    id: {
      type: String,
      required: false,
      default: () => ElementIdService.generateElementId()
    }
  },
  emits: ["toggle"],
  computed: {
    expandedClass() {
      return this.expanded ? "expandable-paragraph--open" : "expandable-paragraph--closed";
    },
    listClass() {
      return this.list ? "expandable-paragraph--list" : "";
    },
    relatedClass() {
      return this.hasRelatedSlot ? "expandable-paragraph--related-information" : "";
    },
    hasRelatedSlot() {
      return hasSlot(this, "related");
    },
    headerVisualClass() {
      return `heading--${this.headerVisualTag || "h4"}`;
    }
  },
  methods: {
    onClickMinimize(event) {
      this.$emit("toggle", event);
    }
  }
});
var _hoisted_1$m = ["aria-expanded", "aria-controls"];
var _hoisted_2$i = {
  class: "expandable-paragraph__icon"
};
var _hoisted_3$d = {
  class: "icon-stack"
};
var _hoisted_4$b = {
  key: 0,
  class: "expandable-paragraph__related-information"
};
var _hoisted_5$9 = ["id"];
var _hoisted_6$7 = {
  class: "expandable-paragraph__content"
};
var _hoisted_7$5 = {
  key: 0,
  class: "expandable-paragraph__separator"
};
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  const _component_f_expand = resolveComponent("f-expand");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["expandable-paragraph", [_ctx.expandedClass, _ctx.listClass]])
  }, [createElementVNode("div", {
    class: normalizeClass(_ctx.relatedClass)
  }, [(openBlock(), createBlock(resolveDynamicComponent(_ctx.headerTag), {
    class: normalizeClass(["expandable-paragraph__heading", _ctx.headerVisualClass])
  }, {
    default: withCtx(() => [createElementVNode("button", mergeProps({
      type: "button",
      class: "expandable-paragraph__button",
      "aria-expanded": _ctx.expanded ? "true" : "false",
      "aria-controls": _ctx.id
    }, _ctx.$attrs, {
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickMinimize && _ctx.onClickMinimize(...args))
    }), [createElementVNode("span", _hoisted_2$i, [createElementVNode("span", _hoisted_3$d, [createVNode(_component_f_icon, {
      name: "dash"
    }), _cache[1] || (_cache[1] = createTextVNode()), createVNode(_component_f_icon, {
      name: "dash"
    })])]), _cache[2] || (_cache[2] = createTextVNode()), renderSlot(_ctx.$slots, "title")], 16, _hoisted_1$m)]),
    _: 3
  }, 8, ["class"])), _cache[3] || (_cache[3] = createTextVNode()), _ctx.hasRelatedSlot ? (openBlock(), createElementBlock("div", _hoisted_4$b, [renderSlot(_ctx.$slots, "related")])) : createCommentVNode("", true)], 2), _cache[5] || (_cache[5] = createTextVNode()), createVNode(_component_f_expand, null, {
    default: withCtx(() => [withDirectives(createElementVNode("div", {
      id: _ctx.id,
      class: "expandable-paragraph__container"
    }, [createElementVNode("div", _hoisted_6$7, [renderSlot(_ctx.$slots, "default")]), _cache[4] || (_cache[4] = createTextVNode()), !_ctx.list ? (openBlock(), createElementBlock("div", _hoisted_7$5)) : createCommentVNode("", true)], 8, _hoisted_5$9), [[vShow, _ctx.expanded]])]),
    _: 3
  })], 2);
}
var FExpandableParagraph = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$h]]);
var DEFAULT_ICON = "file";
var iconMap = {
  "image/*": "pic",
  "application/msword": "doc",
  "application/pdf": "pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template": "doc"
};
var _sfc_main$n = defineComponent({
  name: "FFileItem",
  components: {
    FIcon
  },
  inheritAttrs: false,
  props: {
    /**
     * The id for the input id attribute.
     * The id for the label for attribute.
     * If the prop is not set a random value will be generated.
     */
    id: {
      type: String,
      required: false,
      default: () => ElementIdService.generateElementId()
    },
    /**
     * The file name.
     */
    fileName: {
      type: String,
      required: true
    },
    /**
     * The mime type, can be changed if i.e server change the name.
     */
    mimeType: {
      type: String,
      required: false,
      default: void 0
    },
    /**
     * The name of the file uploaded
     */
    originalMimeType: {
      type: String,
      required: false,
      default: void 0
    },
    /**
     * If file name changed, this info will be displayed, placeholder %before% and %after% will be replaced with originalMimeType and mimeType
     */
    changedMimeTypeText: {
      type: String,
      required: false,
      default: void 0
    }
  },
  computed: {
    isMimeTypeChanged() {
      return isSet(this.originalMimeType) && this.originalMimeType !== this.mimeType;
    },
    mimeTypeChangedText() {
      var _this$changedMimeType;
      const originalMimeType = (this.originalMimeType || "").split("/").pop() || "";
      const currentMimeType = (this.mimeType || "").split("/").pop() || "";
      const localChangedMimeTypeText = (_this$changedMimeType = this.changedMimeTypeText) !== null && _this$changedMimeType !== void 0 ? _this$changedMimeType : this.$t("fkui.file-item.changed-mime-type.text", "(%before% \xE4ndrad till %after%)");
      return localChangedMimeTypeText.replace("%before%", originalMimeType).replace("%after%", currentMimeType);
    },
    iconName() {
      const {
        mimeType
      } = this;
      if (!mimeType) {
        return DEFAULT_ICON;
      }
      if (iconMap[mimeType]) {
        return iconMap[mimeType];
      }
      const p = mimeType.split("/", 1);
      const wildcard = [p[0], "*"].join("/");
      if (iconMap[wildcard]) {
        return iconMap[wildcard];
      }
      return DEFAULT_ICON;
    }
  }
});
var _hoisted_1$l = {
  class: "file-item"
};
var _hoisted_2$h = {
  class: "file-item__row"
};
var _hoisted_3$c = ["id"];
var _hoisted_4$a = {
  class: "icon-stack button__icon icon-stack--new-window"
};
var _hoisted_5$8 = {
  class: "file-item__file-name"
};
var _hoisted_6$6 = {
  class: "sr-only"
};
var _hoisted_7$4 = {
  key: 0,
  class: "file-item__change-info"
};
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  return openBlock(), createElementBlock("div", _hoisted_1$l, [createElementVNode("div", _hoisted_2$h, [createElementVNode("a", mergeProps({
    id: _ctx.id,
    class: "file-item__file-open"
  }, _ctx.$attrs), [createElementVNode("div", _hoisted_4$a, [createVNode(_component_f_icon, {
    name: "new-window"
  }), _cache[0] || (_cache[0] = createTextVNode()), createVNode(_component_f_icon, {
    name: _ctx.iconName
  }, null, 8, ["name"])]), _cache[1] || (_cache[1] = createTextVNode()), createElementVNode("span", _hoisted_5$8, toDisplayString(_ctx.fileName), 1), _cache[2] || (_cache[2] = createTextVNode()), createElementVNode("span", _hoisted_6$6, "\xA0" + toDisplayString(_ctx.$t("fkui.file-item.file-open", "\xF6ppnas i nytt f\xF6nster")), 1)], 16, _hoisted_3$c), _cache[3] || (_cache[3] = createTextVNode()), renderSlot(_ctx.$slots, "row")]), _cache[4] || (_cache[4] = createTextVNode()), renderSlot(_ctx.$slots, "default"), _cache[5] || (_cache[5] = createTextVNode()), _ctx.isMimeTypeChanged ? (openBlock(), createElementBlock("div", _hoisted_7$4, toDisplayString(_ctx.mimeTypeChangedText), 1)) : createCommentVNode("", true), _cache[6] || (_cache[6] = createTextVNode()), _cache[7] || (_cache[7] = createElementVNode("hr", {
    class: "file-item__separator"
  }, null, -1))]);
}
var FFileItem = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$g]]);
var _sfc_main$m = defineComponent({
  name: "FFileSelector",
  components: {
    FIcon
  },
  inheritAttrs: false,
  model: {
    prop: "files",
    event: "change"
  },
  props: {
    /**
     * The id for the input id attribute.
     * The id for the label for attribute.
     * If the prop is not set a random value will be generated.
     */
    id: {
      type: String,
      required: false,
      default: () => ElementIdService.generateElementId()
    },
    /**
     * Disables the file selector.
     */
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["change"],
  computed: {
    attrs() {
      return {
        ...this.$attrs,
        id: this.id,
        onChange: (event) => {
          if (event.target instanceof HTMLInputElement) {
            this.$emit("change", event.target.files);
          }
        }
      };
    },
    labelClass() {
      return this.disabled ? "disabled" : "enabled";
    },
    labelId() {
      return `${this.id}_label`;
    },
    ariaDisabled() {
      return this.disabled ? "true" : void 0;
    }
  },
  methods: {
    onClick(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      const input = this.$refs["file-selector"];
      input.value = "";
    }
  }
});
var _hoisted_1$k = {
  class: "file-selector"
};
var _hoisted_2$g = ["id", "aria-labelledby", "aria-disabled"];
var _hoisted_3$b = ["id", "for"];
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  return openBlock(), createElementBlock("div", _hoisted_1$k, [createElementVNode("input", mergeProps({
    id: _ctx.id,
    ref: "file-selector",
    type: "file",
    "aria-labelledby": _ctx.labelId,
    "aria-disabled": _ctx.ariaDisabled ? "true" : void 0
  }, _ctx.attrs, {
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }), null, 16, _hoisted_2$g), _cache[2] || (_cache[2] = createTextVNode()), createElementVNode("label", {
    id: _ctx.labelId,
    role: "button",
    class: normalizeClass([_ctx.labelClass, "button button--tertiary button--medium"]),
    for: _ctx.id,
    "aria-hidden": "true"
  }, [createVNode(_component_f_icon, {
    class: "button__icon",
    name: "paper-clip"
  }), _cache[1] || (_cache[1] = createTextVNode()), renderSlot(_ctx.$slots, "default")], 10, _hoisted_3$b)]);
}
var FFileSelector = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$f]]);
var keybindings = {
  Up: focusTrAbove,
  Down: focusTrBelow,
  ArrowUp: focusTrAbove,
  ArrowDown: focusTrBelow,
  " ": activateRow,
  Spacebar: activateRow
};
function focusTrAbove(table, current) {
  const tr = table.tr.value;
  if (current > 0) {
    tr[current - 1].focus();
  } else {
    tr[tr.length - 1].focus();
  }
}
function focusTrBelow(table, current) {
  const tr = table.tr.value;
  if (current < tr.length - 1) {
    tr[current + 1].focus();
  } else {
    tr[0].focus();
  }
}
function activateRow(table, current) {
  const row = table.rows[current];
  const element = table.tr.value[current];
  table.activate(row, element);
}
function onKeydown(table, event, current) {
  const fn2 = keybindings[event.key];
  if (fn2) {
    event.preventDefault();
    fn2(table, current);
  }
}
function useExpandableTable(expandableAttribute, keyAttribute, describedby, emit, slots) {
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
      emit("collapse", row);
    } else {
      expandedRows.value.push(row);
      emit("expand", row);
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
    if (expandableRows2 === void 0 || expandableRows2 === null) {
      return void 0;
    }
    if (!Array.isArray(expandableRows2)) {
      throw new Error(`Expandable rows must be an array`);
    }
    if (expandableRows2.length === 0) {
      return void 0;
    }
    return expandableRows2;
  }
  function hasExpandableContent(row) {
    return Boolean(expandableRows(row));
  }
  function getExpandedIndex(shallowIndex, rows) {
    let expandedIndex = 0;
    for (let i = 0; i < shallowIndex; i++) {
      const row = rows[i];
      expandedIndex++;
      if (!hasExpandableContent(row)) {
        continue;
      }
      const {
        length
      } = expandableRows(row);
      if (length === 0) {
        continue;
      }
      expandedIndex += length;
    }
    return expandedIndex;
  }
  return {
    isExpandableTable,
    hasExpandableSlot,
    toggleExpanded,
    isExpanded,
    rowAriaExpanded,
    expandableRowClasses,
    getExpandableDescribedby,
    expandableRows,
    hasExpandableContent,
    getExpandedIndex
  };
}
var _hoisted_1$j = ["role"];
var _hoisted_2$f = {
  key: 0
};
var _hoisted_3$a = {
  key: 0,
  class: "table__column--shrink"
};
var _hoisted_4$9 = {
  key: 1,
  class: "table__column--shrink"
};
var _hoisted_5$7 = {
  class: "table__row"
};
var _hoisted_6$5 = {
  key: 0,
  scope: "col"
};
var _hoisted_7$3 = {
  class: "sr-only"
};
var _hoisted_8$3 = {
  key: 1,
  scope: "col"
};
var _hoisted_9$3 = {
  class: "sr-only"
};
var _hoisted_10$1 = ["innerHTML"];
var _hoisted_11$1 = {
  key: 1,
  class: "table__column__description"
};
var _hoisted_12$1 = ["aria-label", "aria-expanded", "aria-level", "aria-describedby", "onKeydown", "onClick"];
var _hoisted_13$1 = {
  key: 0
};
var _hoisted_14 = {
  key: 0,
  class: "table__expand-icon"
};
var _hoisted_15 = {
  key: 1,
  class: "table__column--selectable"
};
var _hoisted_16 = {
  class: "table__input"
};
var _hoisted_17 = {
  key: 0,
  class: "sr-only"
};
var _hoisted_18 = {
  key: 0,
  class: "table__column--placeholder"
};
var _hoisted_19 = ["colspan"];
var _hoisted_20 = {
  key: 0
};
var _hoisted_21 = {
  key: 1
};
var _hoisted_22 = ["colspan"];
var _sfc_main$l = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "FInteractiveTable",
  props: {
    /**
     * The rows to be listed.
     * The rows will be listed in the given array order.
     */
    rows: {
      type: Array,
      required: true
    },
    /**
     * When enabled hovering over a row will be highlighted.
     */
    hover: {
      type: Boolean,
      default: false
    },
    /**
     * Unique attribute in rows.
     */
    keyAttribute: {
      type: String,
      required: false,
      default: void 0
    },
    /**
     * Attribute of expandable content in rows.
     * If provided, the table can contain expandable rows.
     */
    expandableAttribute: {
      type: String,
      default: ""
    },
    /**
     * Element id for aria-describedby on expandable rows to describe expanded content.
     */
    expandableDescribedby: {
      type: String,
      default: ""
    },
    /**
     * When enabled the table rows will be selectable.
     *
     * The current set of selected rows can be accessed with `v-model`.
     *
     * The `select` and `unselect` events will be emitted when a row is selected
     * or deselected.
     */
    selectable: {
      type: Boolean,
      default: false
    },
    /**
     * When enabled alternating rows will use a different background color.
     */
    striped: {
      type: Boolean,
      default: false
    },
    /**
     * Enable scrolling inside table.
     *
     * Can be one of the following values:
     *
     * - `"horizontal"`: Enables horizontal scrolling
     * - `"vertical"`: Does nothing (deprecated)
     * - `"both"`: Acts as horizontal (deprecated)
     * - `"none"`: Disables scrolling (default)
     */
    scroll: {
      type: String,
      default: TableScroll.NONE,
      validator: function(value) {
        const types = Object.values(TableScroll);
        return types.includes(value);
      }
    },
    /**
     * Enable showing the active row.
     */
    showActive: {
      type: Boolean,
      required: false,
      default: true
    },
    /**
     * Currently selected rows.
     * Requires `selectable` to be set.
     */
    modelValue: {
      type: Array,
      required: false,
      default: void 0
    },
    /**
     * Current active row.
     */
    active: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  emits: ["change", "click", "select", "unselect", "expand", "collapse", "update:modelValue", "update:active"],
  setup(__props, {
    emit: __emit
  }) {
    const $t2 = useTranslate();
    const slots = useSlots();
    const {
      hasSlot: hasSlot2
    } = useSlotUtils();
    const {
      sort: sort2,
      registerCallbackOnSort,
      registerCallbackOnMount
    } = FSortFilterDatasetInjected();
    const {
      registerCallbackAfterItemAdd,
      registerCallbackBeforeItemDelete
    } = ActivateItemInjected();
    const internalKey2 = getInternalKey();
    const activeRow = ref(void 0);
    const columns = ref([]);
    const selectedRows = ref([]);
    const tr = shallowRef([]);
    const trAll = shallowRef([]);
    const tbodyKey = ref(0);
    const props = __props;
    const emit = __emit;
    const expandableTable = useExpandableTable(props.expandableAttribute, internalKey2, props.expandableDescribedby, emit, slots);
    const {
      isExpandableTable,
      hasExpandableSlot,
      toggleExpanded,
      isExpanded,
      rowAriaExpanded,
      expandableRowClasses,
      getExpandableDescribedby,
      expandableRows,
      hasExpandableContent,
      getExpandedIndex
    } = expandableTable;
    const tbody = useTemplateRef("tbodyElement");
    const hasCaption = computed(() => {
      return hasSlot2("caption", {}, {
        stripClasses: []
      });
    });
    const hasCheckboxDescription = computed(() => {
      const firstRow = internalRows.value[0];
      return hasSlot2("checkbox-description", {
        row: firstRow
      });
    });
    const isEmpty2 = computed(() => {
      return internalRows.value.length === 0;
    });
    const visibleColumns = computed(() => {
      return columns.value.filter((col) => col.visible);
    });
    const tableClasses = computed(() => {
      const classes = [];
      if (props.selectable) {
        classes.push("table--selectable");
      }
      if (props.hover) {
        classes.push("table--hover");
      }
      return classes;
    });
    const tableRole = computed(() => {
      return isExpandableTable.value ? "treegrid" : "grid";
    });
    const wrapperClasses = computed(() => {
      return tableScrollClasses(props.scroll);
    });
    const nbOfColumns = computed(() => {
      let columnCount = visibleColumns.value.length;
      if (props.selectable) {
        columnCount++;
      }
      if (isExpandableTable.value) {
        columnCount++;
      }
      return columnCount;
    });
    const internalRows = computed(() => {
      const {
        keyAttribute,
        expandableAttribute
      } = props;
      if (isExpandableTable) {
        return setInternalKeys(props.rows, keyAttribute, expandableAttribute);
      }
      return setInternalKeys(props.rows, keyAttribute);
    });
    provide("addColumn", (column) => {
      columns.value = addColumn(columns.value, column);
    });
    provide("setVisibilityColumn", (id, visible) => {
      setVisibilityColumn(columns.value, id, visible);
    });
    provide("textFieldTableMode", true);
    provide("renderColumns", computed(() => internalRows.value.length > 0));
    watch(() => props.rows, () => setSelectedRows(), {
      immediate: true,
      deep: true
    });
    watch(() => props.active, () => {
      updateActiveRowFromVModel();
    }, {
      immediate: true
    });
    watch(() => props.showActive, (val) => {
      if (!val) {
        tbodyKey.value ^= 1;
      }
    }, {
      immediate: true
    });
    watch(() => props.modelValue, () => setSelectedRows(), {
      immediate: true,
      deep: true
    });
    function updateTr(tbodyElement) {
      trAll.value = [].slice.call(tbodyElement.children);
      const trInteractableElements = trAll.value.filter((tr2) => {
        return tr2.tabIndex === 0;
      });
      tr.value = trInteractableElements;
    }
    onUpdated(() => {
      if (tbody.value) {
        updateTr(tbody.value);
      }
    });
    onMounted(() => {
      if (tbody.value) {
        updateTr(tbody.value);
      }
      registerCallbackOnSort(callbackOnSort);
      registerCallbackOnMount(callbackSortableColumns);
      registerCallbackAfterItemAdd(callbackAfterItemAdd);
      registerCallbackBeforeItemDelete(callbackBeforeItemDelete);
    });
    function isActive(row) {
      if (!props.showActive) {
        return false;
      }
      return itemEquals(row, activeRow.value, internalKey2);
    }
    function isSelected(row) {
      return includeItem(row, selectedRows.value, internalKey2);
    }
    function onKeydown$1(event, index) {
      onKeydown({
        rows: internalRows.value,
        tr,
        activate
      }, event, index);
    }
    function onClick(event, row) {
      const {
        target
      } = event;
      const isRelevant = ["TD", "TH"].includes(target.nodeName);
      if (isRelevant) {
        const parent = target.parentElement;
        activate(row, parent);
      }
    }
    function activate(row, tr2) {
      emit("click", row);
      if (isExpandableTable.value && hasExpandableContent(row)) {
        toggleExpanded(row);
      }
      if (!itemEquals(row, activeRow.value, internalKey2)) {
        emit("change", row);
        setActiveRow(row);
        if (tr2) {
          tr2.focus();
        }
      }
    }
    function rowDescription(row) {
      const slot = slots["row-description"];
      return renderSlotText(slot, {
        row
      });
    }
    function onSelect(row) {
      var _a, _b;
      if (includeItem(row, selectedRows.value, internalKey2)) {
        selectedRows.value = selectedRows.value.filter((i) => !itemEquals(i, row, internalKey2));
        emit("unselect", row);
      } else {
        selectedRows.value.push(row);
        emit("select", row);
      }
      updateVModelWithSelectedRows();
      (_b = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy) == null ? void 0 : _b.$forceUpdate();
    }
    function setSelectedRows() {
      if (!props.modelValue || !props.modelValue.length) {
        selectedRows.value = [];
        return;
      }
      selectedRows.value = props.modelValue.filter((row) => {
        return includeItem(row, internalRows.value, internalKey2);
      });
    }
    function updateVModelWithSelectedRows() {
      if (props.modelValue) {
        emit("update:modelValue", selectedRows.value);
      }
    }
    function rowClasses(row, index) {
      const active = isActive(row) ? ["table__row--active"] : [];
      const selected = isSelected(row) ? ["table__row--selected"] : [];
      const isExpandableRow = isExpandableTable.value && hasExpandableContent(row);
      const expandable = isExpandableRow ? ["table__row--expandable"] : [];
      const expanded = isExpanded(row) ? ["table__row--expanded-border"] : [];
      const striped = props.striped && index % 2 !== 0 ? ["table__row--striped"] : [];
      return ["table__row", ...active, ...selected, ...striped, ...expandable, ...expanded];
    }
    function rowKey(row) {
      return String(row[internalKey2]);
    }
    function columnClasses(column) {
      const sortable = column.sortable ? ["table__column--sortable"] : [];
      return ["table__column", `table__column--${column.type}`, ...sortable, column.size];
    }
    function iconClasses2(column) {
      return getSortableIconClasses(column);
    }
    function iconName(column) {
      return getSortableIconName(column);
    }
    function onClickColumnHeader(column) {
      if (!column.sortable) {
        return;
      }
      let columnName = column.name;
      if (!columnName) {
        throw new Error("`FTableColumn` must have a unique `name` when used with `FSortFilterDataset`");
      }
      if (column.sort === FTableColumnSort.DESCENDING) {
        columnName = "";
        column.sort = FTableColumnSort.UNSORTED;
      }
      sort2(columnName, column.sort !== FTableColumnSort.ASCENDING);
    }
    function callbackOnSort(columnName, ascending) {
      updateSortOrder(columns.value, columnName, ascending);
    }
    function callbackSortableColumns(columnNames) {
      setSortableColumns(columns.value, columnNames);
    }
    function callbackAfterItemAdd(item) {
      activate(item, null);
    }
    function callbackBeforeItemDelete(item) {
      var _getPreviousFocus;
      if (internalRows.value.length === 0) {
        return;
      }
      const index = internalRows.value.indexOf(item);
      const target = (_getPreviousFocus = getPreviousFocus(index)) !== null && _getPreviousFocus !== void 0 ? _getPreviousFocus : getNextFocus(index);
      if (target) {
        target.focus();
      }
    }
    function getPreviousFocus(currentIndex) {
      const targetIndex = currentIndex - 1;
      if (targetIndex < 0) {
        return void 0;
      }
      const targetRow = tr.value[targetIndex];
      if (!targetRow) {
        return void 0;
      }
      const row = internalRows.value[targetIndex];
      if (!isExpanded(row)) {
        const tabbables = findTabbableElements(targetRow);
        return tabbables[tabbables.length - 1];
      }
      const expandedIndex = getExpandedIndex(currentIndex, internalRows.value) - 1;
      const {
        length
      } = expandableRows(row);
      for (let i = 0; i <= length; i++) {
        const targetExpandedRow = trAll.value[expandedIndex - i];
        const tabbables = findTabbableElements(targetExpandedRow);
        const target = tabbables[tabbables.length - 1];
        if (target) {
          return target;
        }
      }
      return void 0;
    }
    function getNextFocus(currentIndex) {
      const targetIndex = currentIndex + 1;
      return tr.value[targetIndex];
    }
    function escapeNewlines(value) {
      return value.replace(/\n/g, "<br/>");
    }
    function updateActiveRowFromVModel() {
      if (props.active === void 0) {
        setActiveRow(void 0);
      } else if (!itemEquals(props.active, activeRow.value, internalKey2)) {
        setActiveRow(props.active);
      }
    }
    function setActiveRow(row) {
      activeRow.value = row;
      emit("update:active", activeRow.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(wrapperClasses.value)
      }, [createCommentVNode("", true), _cache[19] || (_cache[19] = createTextVNode()), createElementVNode("table", mergeProps({
        class: ["table", tableClasses.value],
        role: tableRole.value
      }, _ctx.$attrs), [hasCaption.value ? (openBlock(), createElementBlock("caption", _hoisted_2$f, [renderSlot(_ctx.$slots, "caption")])) : createCommentVNode("", true), _cache[16] || (_cache[16] = createTextVNode()), createElementVNode("colgroup", null, [unref(isExpandableTable) ? (openBlock(), createElementBlock("col", _hoisted_3$a)) : createCommentVNode("", true), _cache[0] || (_cache[0] = createTextVNode()), __props.selectable ? (openBlock(), createElementBlock("col", _hoisted_4$9)) : createCommentVNode("", true), _cache[1] || (_cache[1] = createTextVNode()), (openBlock(true), createElementBlock(Fragment, null, renderList(columns.value, (column) => {
        return openBlock(), createElementBlock("col", {
          key: column.id,
          class: normalizeClass(column.size)
        }, null, 2);
      }), 128))]), _cache[17] || (_cache[17] = createTextVNode()), createElementVNode("thead", null, [createElementVNode("tr", _hoisted_5$7, [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({
        row: {}
      }))), _cache[4] || (_cache[4] = createTextVNode()), unref(isExpandableTable) ? (openBlock(), createElementBlock("th", _hoisted_6$5, [createElementVNode("span", _hoisted_7$3, toDisplayString(
        /** Kolumnrubrik som visas för skärmläsare om funktionen för expanderbara rader (`expandable-attribute`) aktiveras */
        unref($t2)("fkui.interactive-table.expand", "Expandera")
      ), 1)])) : createCommentVNode("", true), _cache[5] || (_cache[5] = createTextVNode()), __props.selectable ? (openBlock(), createElementBlock("th", _hoisted_8$3, [createElementVNode("span", _hoisted_9$3, toDisplayString(
        /** Kolumnrubrik som visas för skärmläsare om funktionen för valbara rader (`selectable`) aktiveras */
        unref($t2)("fkui.interactive-table.select", "Markera")
      ), 1)])) : createCommentVNode("", true), _cache[6] || (_cache[6] = createTextVNode()), (openBlock(true), createElementBlock(Fragment, null, renderList(visibleColumns.value, (column) => {
        return openBlock(), createElementBlock("th", mergeProps({
          key: column.id,
          scope: "col",
          class: columnClasses(column)
        }, toHandlers(column.sortable ? {
          click: () => onClickColumnHeader(column)
        } : {}, true)), [createElementVNode("span", {
          innerHTML: escapeNewlines(column.title)
        }, null, 8, _hoisted_10$1), _cache[2] || (_cache[2] = createTextVNode()), column.sortable ? (openBlock(), createBlock(unref(FIcon), {
          key: 0,
          class: normalizeClass(iconClasses2(column)),
          name: iconName(column)
        }, null, 8, ["class", "name"])) : createCommentVNode("", true), _cache[3] || (_cache[3] = createTextVNode()), column.description ? (openBlock(), createElementBlock("span", _hoisted_11$1, toDisplayString(column.description), 1)) : createCommentVNode("", true)], 16);
      }), 128))])]), _cache[18] || (_cache[18] = createTextVNode()), (openBlock(), createElementBlock("tbody", {
        ref: "tbodyElement",
        key: tbodyKey.value
      }, [(openBlock(true), createElementBlock(Fragment, null, renderList(internalRows.value, (row, index) => {
        return openBlock(), createElementBlock(Fragment, {
          key: rowKey(row)
        }, [createElementVNode("tr", {
          class: normalizeClass(rowClasses(row, index)),
          "aria-label": rowDescription(row),
          "aria-expanded": unref(rowAriaExpanded)(row),
          "aria-level": unref(isExpandableTable) ? 1 : void 0,
          "aria-describedby": unref(getExpandableDescribedby)(row),
          tabindex: "0",
          onKeydown: withModifiers(($event) => onKeydown$1($event, index), ["self"]),
          onClick: ($event) => onClick($event, row)
        }, [unref(isExpandableTable) ? (openBlock(), createElementBlock("td", _hoisted_13$1, [unref(hasExpandableContent)(row) ? (openBlock(), createElementBlock("div", _hoisted_14, [createVNode(unref(FIcon), {
          name: "arrow-right",
          rotate: unref(isExpanded)(row) ? "270" : "90"
        }, null, 8, ["rotate"])])) : createCommentVNode("", true)])) : createCommentVNode("", true), _cache[7] || (_cache[7] = createTextVNode()), __props.selectable ? (openBlock(), createElementBlock("td", _hoisted_15, [createElementVNode("div", _hoisted_16, [createVNode(unref(FCheckboxField), {
          value: true,
          "model-value": isSelected(row),
          onClick: withModifiers(($event) => onSelect(row), ["self"])
        }, {
          default: withCtx(() => [hasCheckboxDescription.value ? (openBlock(), createElementBlock("span", _hoisted_17, [renderSlot(_ctx.$slots, "checkbox-description", mergeProps({
            ref_for: true
          }, {
            row
          }))])) : createCommentVNode("", true)]),
          _: 2
        }, 1032, ["model-value", "onClick"])])])) : createCommentVNode("", true), _cache[8] || (_cache[8] = createTextVNode()), renderSlot(_ctx.$slots, "default", mergeProps({
          ref_for: true
        }, {
          row
        }))], 42, _hoisted_12$1), _cache[12] || (_cache[12] = createTextVNode()), unref(isExpandableTable) && unref(hasExpandableContent)(row) ? (openBlock(true), createElementBlock(Fragment, {
          key: 0
        }, renderList(unref(expandableRows)(row), (expandableRow, expandableIndex) => {
          return openBlock(), createElementBlock("tr", {
            key: rowKey(expandableRow),
            "aria-level": "2",
            class: normalizeClass(unref(expandableRowClasses)(row, expandableIndex))
          }, [_cache[9] || (_cache[9] = createElementVNode("td", {
            class: "table__column--placeholder"
          }, null, -1)), _cache[10] || (_cache[10] = createTextVNode()), __props.selectable ? (openBlock(), createElementBlock("td", _hoisted_18)) : createCommentVNode("", true), _cache[11] || (_cache[11] = createTextVNode()), !unref(hasExpandableSlot) ? renderSlot(_ctx.$slots, "default", mergeProps({
            key: 1,
            ref_for: true
          }, {
            row: expandableRow
          })) : (openBlock(), createElementBlock("td", {
            key: 2,
            class: "table__column table__column--indented",
            colspan: columns.value.length
          }, [renderSlot(_ctx.$slots, "expandable", mergeProps({
            ref_for: true
          }, {
            expandableRow,
            parentRow: row
          }))], 8, _hoisted_19))], 2);
        }), 128)) : createCommentVNode("", true)], 64);
      }), 128)), _cache[14] || (_cache[14] = createTextVNode()), isEmpty2.value && columns.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_20, [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({
        row: {}
      })))])) : createCommentVNode("", true), _cache[15] || (_cache[15] = createTextVNode()), isEmpty2.value ? (openBlock(), createElementBlock("tr", _hoisted_21, [createElementVNode("td", {
        class: "table__column table__column--action",
        colspan: nbOfColumns.value
      }, [renderSlot(_ctx.$slots, "empty", {}, () => [createTextVNode(toDisplayString(
        /** Text som visas som standardinnehåll i slotten `empty` (när tabellen är tom). */
        unref($t2)("fkui.interactive-table.empty", "Tabellen \xE4r tom")
      ), 1)])], 8, _hoisted_22), _cache[13] || (_cache[13] = createTextVNode()), renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({
        row: {}
      })))])) : createCommentVNode("", true)]))], 16, _hoisted_1$j)], 2);
    };
  }
});
var _style_0$1 = ":host {\n  display: contents;\n}\n:host([hidden]) {\n  display: none;\n}";
var _sfc_main$k = {};
function _sfc_render$e(_ctx, _cache) {
  return renderSlot(_ctx.$slots, "default");
}
var CeComponent = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$e], ["styles", [_style_0$1]]]);
var ceTag$1 = "ce-fixed-pane";
var _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "FFixedPane",
  setup(__props) {
    onMounted(() => {
      if (!customElements.get(ceTag$1)) {
        customElements.define(ceTag$1, defineCustomElement(CeComponent));
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(ceTag$1), null, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      });
    };
  }
});
var _sfc_main$i = defineComponent({
  name: "FLayoutApplicationTemplate",
  computed: {
    showHeader() {
      return this.hasSlot("header");
    },
    showTopNavigation() {
      return this.hasSlot("top-navigation");
    },
    showFooter() {
      return this.hasSlot("footer");
    }
  },
  mounted() {
    document.body.classList.add("layout-application-template__body");
  },
  beforeUnmount() {
    document.body.classList.remove("layout-application-template__body");
  },
  methods: {
    hasSlot(name) {
      return isSet(this.$slots[name]);
    }
  }
});
var _hoisted_1$i = {
  class: "layout-application-template"
};
var _hoisted_2$e = {
  key: 0,
  ref: "header",
  class: "layout-application-template__header"
};
var _hoisted_3$9 = {
  key: 1
};
var _hoisted_4$8 = {
  ref: "primary-content",
  class: "layout-application-template__main"
};
var _hoisted_5$6 = {
  key: 0,
  class: "layout-application-template__footer"
};
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$i, [_ctx.showHeader || _ctx.showTopNavigation ? (openBlock(), createElementBlock("header", _hoisted_2$e, [_ctx.showHeader ? renderSlot(_ctx.$slots, "header", {
    key: 0
  }) : createCommentVNode("", true), _cache[0] || (_cache[0] = createTextVNode()), _ctx.showTopNavigation ? (openBlock(), createElementBlock("nav", _hoisted_3$9, [renderSlot(_ctx.$slots, "top-navigation")])) : createCommentVNode("", true)], 512)) : createCommentVNode("", true), _cache[2] || (_cache[2] = createTextVNode()), createElementVNode("main", _hoisted_4$8, [renderSlot(_ctx.$slots, "default"), _cache[1] || (_cache[1] = createTextVNode()), _ctx.showFooter ? (openBlock(), createElementBlock("footer", _hoisted_5$6, [renderSlot(_ctx.$slots, "footer")])) : createCommentVNode("", true)], 512)]);
}
var FLayoutApplicationTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$d]]);
function getGridClasses(target) {
  if (target === null) {
    return {};
  }
  const width = typeof target === "number" ? target : target.offsetWidth;
  return {
    "grid--force": true,
    "grid--force-sm": true,
    "grid--force-md": width >= 640,
    "grid--force-lg": width >= 1024,
    "grid--force-xl": width >= 1280
  };
}
function useLayoutPanel(options) {
  const growToRight = options.grow === "right";
  let borderDrag = false;
  let dragStart = 0;
  let dragStartWidth = 0;
  let preferredWidth = -1;
  let minWidth = 150;
  let maxWidth = 0.5;
  const panelWidth = ref(0);
  const leftPrimaryClasses = ref({});
  const rightPrimaryClasses = ref({});
  function updateOptions() {
    var _options$initialWidth, _options$minWidth, _options$maxWidth;
    panelWidth.value = parseInt(toValue((_options$initialWidth = options.initialWidth) !== null && _options$initialWidth !== void 0 ? _options$initialWidth : "0"), 10);
    minWidth = parseInt(toValue((_options$minWidth = options.minWidth) !== null && _options$minWidth !== void 0 ? _options$minWidth : "150"), 10);
    maxWidth = toValue((_options$maxWidth = options.maxWidth) !== null && _options$maxWidth !== void 0 ? _options$maxWidth : 0.5);
  }
  function disableEvent(event) {
    event.preventDefault();
  }
  function onMouseUp() {
    document.body.style.cursor = "";
    borderDrag = false;
    window.removeEventListener("selectstart", disableEvent);
  }
  function onMouseMove(event) {
    if (borderDrag) {
      const growDirection = growToRight ? 1 : -1;
      preferredWidth = dragStartWidth + (event.screenX - dragStart) * growDirection;
      limitWidth();
    }
  }
  function onBorderMouseDown(event) {
    document.body.style.cursor = "w-resize";
    borderDrag = true;
    dragStart = event.screenX;
    dragStartWidth = panelWidth.value;
    window.addEventListener("selectstart", disableEvent);
    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
    }
  }
  function limitWidth() {
    if (preferredWidth === -1) {
      preferredWidth = panelWidth.value;
    }
    let newWidth = preferredWidth;
    newWidth = Math.max(newWidth, minWidth);
    newWidth = Math.min(newWidth, window.innerWidth * maxWidth);
    panelWidth.value = newWidth;
    updatePrimaryGrid();
  }
  function updatePrimaryGrid() {
    const leftPrimaryElement = document.getElementById("layout-side-navigation__primary-content");
    const rightPrimaryElement = document.getElementById("layout-secondary__primary");
    leftPrimaryClasses.value = getGridClasses(leftPrimaryElement);
    rightPrimaryClasses.value = getGridClasses(rightPrimaryElement);
  }
  function gridClasses() {
    updatePrimaryGrid();
    return getGridClasses(preferredWidth);
  }
  onMounted(() => {
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", limitWidth);
  });
  onUnmounted(() => {
    window.removeEventListener("mouseup", onMouseUp);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("resize", limitWidth);
  });
  watchEffect(() => {
    updateOptions();
  });
  return {
    panelWidth,
    /* methods */
    onBorderMouseDown,
    updatePrimaryGrid,
    /* class getters */
    gridClasses,
    leftPrimaryClasses,
    rightPrimaryClasses
  };
}
var _sfc_main$h = defineComponent({
  name: "FLayoutLeftPanel",
  components: {
    FIcon
  },
  props: {
    /**
     * The default width for the panel in pixels
     */
    initialWidth: {
      type: String,
      default: "320",
      validator(value) {
        const parsed = parseInt(value, 10);
        return !isNaN(parsed);
      }
    }
  },
  setup(props) {
    const {
      initialWidth
    } = toRefs(props);
    return useLayoutPanel({
      initialWidth,
      minWidth: "150",
      maxWidth: 0.5,
      grow: "right"
    });
  },
  data() {
    return {
      isOpen: true,
      offsetTop: 0
    };
  },
  computed: {
    navigationStyle() {
      if (this.isOpen) {
        return {
          width: `${this.panelWidth}px`,
          top: `${this.offsetTop}px`
        };
      } else {
        return {
          top: `${this.offsetTop}px`
        };
      }
    },
    primaryStyle() {
      if (this.isOpen) {
        return {
          "margin-left": `${this.panelWidth}px`
        };
      } else {
        return {
          "margin-left": `3.5rem`
        };
      }
    },
    // This is to make word-wrap work in IE11
    contentStyle() {
      return {
        "max-width": `${this.panelWidth - 35}px`
      };
    }
  },
  mounted() {
    const headers = document.getElementsByClassName("layout-application-template__header");
    const header2 = headers.item(0);
    if (header2) {
      this.offsetTop = header2.offsetHeight;
    }
  },
  methods: {
    toggleSideNavigation() {
      this.isOpen = !this.isOpen;
      window.setTimeout(() => {
        this.updatePrimaryGrid();
        const ref2 = this.isOpen ? "close-button" : "open-button";
        const element = getElementFromVueRef(this.$refs[ref2]);
        focus$1(element);
      }, 0);
    }
  }
});
var _hoisted_1$h = {
  class: "layout-navigation"
};
var _hoisted_2$d = ["aria-expanded"];
var _hoisted_3$8 = {
  class: "layout-navigation__navigation__inner"
};
var _hoisted_4$7 = {
  key: 1,
  class: "layout-navigation__navigation__inner--minimized"
};
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  return openBlock(), createElementBlock("div", _hoisted_1$h, [createElementVNode("nav", {
    id: "layout-navigation__navigation",
    class: "layout-navigation__navigation",
    style: normalizeStyle(_ctx.navigationStyle),
    "aria-expanded": _ctx.isOpen
  }, [createElementVNode("div", _hoisted_3$8, [_ctx.isOpen ? (openBlock(), createElementBlock(Fragment, {
    key: 0
  }, [createElementVNode("div", {
    class: "layout-navigation__navigation__inner__title",
    style: normalizeStyle(_ctx.contentStyle)
  }, [renderSlot(_ctx.$slots, "heading"), _cache[5] || (_cache[5] = createTextVNode()), createElementVNode("button", {
    ref: "close-button",
    class: "button button--tertiary button--small button--tertiary--black",
    type: "button",
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.toggleSideNavigation && _ctx.toggleSideNavigation(...args))
  }, [_cache[3] || (_cache[3] = createElementVNode("span", {
    class: "sr-only"
  }, "St\xE4ng navigationspanelen", -1)), _cache[4] || (_cache[4] = createTextVNode()), createVNode(_component_f_icon, {
    class: "button__icon",
    name: "chevrons-left"
  })], 512)], 4), _cache[6] || (_cache[6] = createTextVNode()), _cache[7] || (_cache[7] = createElementVNode("div", null, [createElementVNode("hr")], -1)), _cache[8] || (_cache[8] = createTextVNode()), createElementVNode("div", {
    class: normalizeClass(["layout-navigation__navigation__inner__content scroll-target", _ctx.gridClasses]),
    style: normalizeStyle(_ctx.contentStyle)
  }, [renderSlot(_ctx.$slots, "content")], 6)], 64)) : createCommentVNode("", true), _cache[11] || (_cache[11] = createTextVNode()), !_ctx.isOpen ? (openBlock(), createElementBlock("div", _hoisted_4$7, [createElementVNode("button", {
    ref: "open-button",
    class: "button button--tertiary button--tertiary--black",
    type: "button",
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.toggleSideNavigation && _ctx.toggleSideNavigation(...args))
  }, [_cache[9] || (_cache[9] = createElementVNode("span", {
    class: "sr-only"
  }, "\xD6ppna navigationspanelen", -1)), _cache[10] || (_cache[10] = createTextVNode()), createVNode(_component_f_icon, {
    class: "button__icon",
    name: "bars"
  })], 512)])) : createCommentVNode("", true)]), _cache[13] || (_cache[13] = createTextVNode()), _ctx.isOpen ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: "layout-navigation__navigation__border",
    onMousedown: _cache[2] || (_cache[2] = (...args) => _ctx.onBorderMouseDown && _ctx.onBorderMouseDown(...args))
  }, _cache[12] || (_cache[12] = [createElementVNode("div", {
    class: "layout-navigation__navigation__border__dot"
  }, null, -1), createTextVNode(), createElementVNode("div", {
    class: "layout-navigation__navigation__border__dot"
  }, null, -1), createTextVNode(), createElementVNode("div", {
    class: "layout-navigation__navigation__border__dot"
  }, null, -1)]), 32)) : createCommentVNode("", true)], 12, _hoisted_2$d), _cache[14] || (_cache[14] = createTextVNode()), createElementVNode("div", {
    id: "layout-navigation__primary",
    class: normalizeClass(["layout-navigation__primary", _ctx.leftPrimaryClasses]),
    style: normalizeStyle(_ctx.primaryStyle)
  }, [renderSlot(_ctx.$slots, "default")], 6)]);
}
var FLayoutLeftPanel = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$c]]);
var FRightPanelServiceImpl = class {
  constructor() {
    _defineProperty(this, "focusedElementBeforeOpenining", null);
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
};
var FLayoutRightPanelService = new FRightPanelServiceImpl();
var _sfc_main$g = defineComponent({
  name: "FLayoutRightPanel",
  components: {
    FIcon
  },
  props: {
    /**
     * The default width for the panel in pixels
     */
    initialWidth: {
      type: String,
      default: "320"
    },
    /**
     * The default maximun width for the panel in percentage where 1 is 100% and 0 is 0%
     */
    maxWidth: {
      type: Number,
      default: 0.5,
      validator(value) {
        return typeof value === "number" && value > 0 && value <= 1;
      }
    },
    /**
     * The default minium width for the panel in pixels
     */
    minWidth: {
      type: String,
      default: "150"
    }
  },
  setup(props) {
    const {
      initialWidth,
      minWidth,
      maxWidth
    } = toRefs(props);
    return useLayoutPanel({
      initialWidth,
      minWidth,
      maxWidth,
      grow: "left"
    });
  },
  data() {
    return {
      isAbsolutePositioned: false,
      isOpen: false,
      offsetTop: 0
    };
  },
  computed: {
    secondaryStyle() {
      if (this.isOpen) {
        return {
          width: `${this.panelWidth}px`,
          top: `${this.offsetTop}px`
        };
      }
      return {
        top: `${this.offsetTop}px`
      };
    },
    primaryStyle() {
      if (this.isOpen && !this.isAbsolutePositioned) {
        return {
          "margin-right": `${this.panelWidth}px`
        };
      }
      return {};
    },
    // This is to make word-wrap work in IE11
    contentStyle() {
      return {
        "max-width": `${this.panelWidth - 35}px`
      };
    }
  },
  mounted() {
    const headers = document.getElementsByClassName("layout-application-template__header");
    const header2 = headers.item(0);
    if (header2) {
      this.offsetTop = header2.offsetHeight;
    }
    FLayoutRightPanelService.on("open", this.onOpenSecondary);
    FLayoutRightPanelService.on("close", this.onCloseSecondary);
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  unmounted() {
    FLayoutRightPanelService.off("open", this.onOpenSecondary);
    FLayoutRightPanelService.off("close", this.onCloseSecondary);
  },
  methods: {
    async onOpenSecondary() {
      this.isOpen = true;
      await this.$nextTick();
      const element = getElementFromVueRef(this.$refs["title"]);
      const heading = element.querySelector("h1, h2, h3, h4, h5, h6");
      focus$1(heading, {
        force: true
      });
    },
    onCloseSecondary() {
      this.isOpen = false;
    },
    openSecondary() {
      FLayoutRightPanelService.open();
    },
    onClickCloseSecondary() {
      FLayoutRightPanelService.close();
    },
    onResize() {
      this.isAbsolutePositioned = window.innerWidth < 1280;
    }
  }
});
var _hoisted_1$g = {
  class: "layout-secondary"
};
var _hoisted_2$c = {
  class: "layout-secondary__secondary__inner"
};
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  return openBlock(), createElementBlock("div", _hoisted_1$g, [createElementVNode("div", {
    id: "layout-secondary__primary",
    class: normalizeClass(["layout-secondary__primary", _ctx.rightPrimaryClasses]),
    style: normalizeStyle(_ctx.primaryStyle)
  }, [renderSlot(_ctx.$slots, "default")], 6), _cache[10] || (_cache[10] = createTextVNode()), _ctx.isOpen ? (openBlock(), createElementBlock("aside", {
    key: 0,
    style: normalizeStyle(_ctx.secondaryStyle),
    class: "layout-secondary__secondary"
  }, [createElementVNode("div", {
    class: "layout-secondary__secondary__border",
    onMousedown: _cache[0] || (_cache[0] = (...args) => _ctx.onBorderMouseDown && _ctx.onBorderMouseDown(...args))
  }, _cache[2] || (_cache[2] = [createElementVNode("div", {
    class: "layout-secondary__secondary__border__dot"
  }, null, -1), createTextVNode(), createElementVNode("div", {
    class: "layout-secondary__secondary__border__dot"
  }, null, -1), createTextVNode(), createElementVNode("div", {
    class: "layout-secondary__secondary__border__dot"
  }, null, -1)]), 32), _cache[9] || (_cache[9] = createTextVNode()), createElementVNode("div", _hoisted_2$c, [createElementVNode("div", {
    ref: "title",
    class: "layout-secondary__secondary__inner__title",
    style: normalizeStyle(_ctx.contentStyle)
  }, [renderSlot(_ctx.$slots, "heading")], 4), _cache[6] || (_cache[6] = createTextVNode()), _cache[7] || (_cache[7] = createElementVNode("div", null, [createElementVNode("hr", {
    "aria-hidden": "true"
  })], -1)), _cache[8] || (_cache[8] = createTextVNode()), createElementVNode("div", {
    class: normalizeClass(["layout-secondary__secondary__inner__content scroll-target", _ctx.gridClasses]),
    style: normalizeStyle(_ctx.contentStyle)
  }, [renderSlot(_ctx.$slots, "content"), _cache[5] || (_cache[5] = createTextVNode()), createElementVNode("button", {
    class: "button button--tertiary button--small button--tertiary--black layout-secondary__secondary__inner__close",
    type: "button",
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onClickCloseSecondary && _ctx.onClickCloseSecondary(...args))
  }, [_cache[3] || (_cache[3] = createElementVNode("span", {
    class: "sr-only"
  }, "St\xE4ng sekund\xE4rpanelen", -1)), _cache[4] || (_cache[4] = createTextVNode()), createVNode(_component_f_icon, {
    class: "button__icon",
    name: "close"
  })])], 6)])], 4)) : createCommentVNode("", true)]);
}
var FLayoutRightPanel = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$b]]);
var _hoisted_1$f = {
  key: 0,
  class: "list"
};
var _hoisted_2$b = {
  key: 0,
  class: "list__item"
};
var _hoisted_3$7 = {
  class: "list__item__itempane"
};
var _hoisted_4$6 = ["id", "aria-labelledby", "tabindex", "onKeydown"];
var _hoisted_5$5 = ["onClick"];
var _hoisted_6$4 = {
  class: "list__item__selectpane__input"
};
var _hoisted_7$2 = ["id"];
var _hoisted_8$2 = {
  key: 0,
  class: "list__item"
};
var _hoisted_9$2 = {
  class: "list__item__itempane"
};
var _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "FList",
  props: {
    /**
     * The items to be listed.
     * The items will be listed in the given array order.
     */
    items: {
      type: Array,
      required: true
    },
    /**
     * Unique attribute in items.
     * V-for directive in vue requires a unique key to
     * be able to optimize reuse of components.
     */
    keyAttribute: {
      type: String,
      required: false,
      default: void 0
    },
    /**
     * If `true` the list will be selectable.
     * @see 'select' and 'unselect' events.
     */
    selectable: {
      type: Boolean,
      default: false
    },
    /**
     * Only applies if selectable:true
     * Disable checkbox in interactive list and create a <a>-wrapper for each item, making them clickable
     * @see 'select' and 'unselect' events.
     */
    checkbox: {
      type: Boolean,
      default: true
    },
    /**
     * V-model will bind to value containing selected items.
     */
    modelValue: {
      type: Array,
      required: false,
      default: () => void 0
    },
    /**
     * V-model will bind to value containing the current active item.
     */
    active: {
      type: Object,
      required: false,
      default: () => void 0
    },
    /**
     * Unique item id that will be used instead of the automatically generated one.
     */
    elementId: {
      type: String,
      default: () => ElementIdService.generateElementId()
    }
  },
  emits: ["change", "click", "select", "unselect", "update:active", "update:modelValue"],
  setup(__props, {
    emit: __emit
  }) {
    const $t2 = useTranslate();
    const slots = useSlots();
    const {
      registerCallbackAfterItemAdd,
      registerCallbackBeforeItemDelete
    } = ActivateItemInjected();
    const internalKey2 = getInternalKey();
    const selectedItems = ref([]);
    const activeItem = ref(void 0);
    const ulElement = ref();
    const props = __props;
    const emit = __emit;
    const isEmpty2 = computed(() => {
      return internalItems.value.length === 0;
    });
    const internalItems = computed(() => {
      const {
        keyAttribute
      } = props;
      if (keyAttribute) {
        return setInternalKeys(props.items, keyAttribute);
      }
      return setInternalKeys(props.items);
    });
    watch(() => props.items, () => {
      updateSelectedItemsFromVModel();
    }, {
      deep: true,
      immediate: true
    });
    watch(() => props.modelValue, () => {
      updateSelectedItemsFromVModel();
    }, {
      deep: true,
      immediate: true
    });
    watch(() => props.active, () => {
      updateActiveItemFromVModel();
    }, {
      immediate: true
    });
    onMounted(() => {
      if (props.selectable && props.checkbox) {
        if (!slots["screenreader"]) {
          throw Error('Slot "screenreader" is required when having "selectable" & "checkbox" option.');
        }
        registerCallbackAfterItemAdd(callbackAfterItemAdd);
        registerCallbackBeforeItemDelete(callbackBeforeItemDelete);
      }
    });
    function getLiElements() {
      const element = getElementFromVueRef(ulElement.value);
      return Array.from(element.children);
    }
    function itemKey(item) {
      return String(item[internalKey2]);
    }
    function isSelected(item) {
      return includeItem(item, selectedItems.value, internalKey2);
    }
    function itemClasses(item) {
      return {
        "list__item--selected": isSelected(item),
        "list__item--active": isActive(item)
      };
    }
    function onSelect(item) {
      var _a, _b;
      if (includeItem(item, selectedItems.value, internalKey2)) {
        selectedItems.value = selectedItems.value.filter((i) => !itemEquals(i, item, internalKey2));
        emit("unselect", item);
      } else {
        selectedItems.value.push(item);
        emit("select", item);
      }
      updateVModelWithSelectedItems();
      (_b = (_a = getCurrentInstance()) == null ? void 0 : _a.proxy) == null ? void 0 : _b.$forceUpdate();
    }
    function setActiveItem(item) {
      emit("click", item);
      if (!itemEquals(item, activeItem.value, internalKey2)) {
        emit("change", item);
        activeItem.value = item;
        emit("update:active", activeItem.value);
      }
    }
    function onItemClick(event, index, item) {
      setActiveItem(item);
    }
    function updateVModelWithSelectedItems() {
      if (props.modelValue) {
        emit("update:modelValue", selectedItems.value);
      }
    }
    function updateSelectedItemsFromVModel() {
      if (Array.isArray(props.modelValue)) {
        selectedItems.value = props.modelValue.filter((item) => {
          return includeItem(item, internalItems.value, internalKey2);
        });
      } else {
        selectedItems.value = [];
      }
    }
    function updateActiveItemFromVModel() {
      if (props.active === void 0) {
        activeItem.value = void 0;
      } else if (!itemEquals(props.active, activeItem.value, internalKey2)) {
        activeItem.value = props.active;
      }
    }
    function onItemKeyDown(event, item) {
      switch (event.key) {
        case "Up":
        case "Down":
        case "ArrowUp":
        case "ArrowDown":
          event.preventDefault();
          handleKeyboardFocusNavigation(event.key, event.target, getLiElements());
          break;
        case " ":
        case "Spacebar":
          event.preventDefault();
          setActiveItem(item);
          break;
      }
    }
    function getAriaLabelledbyId(item) {
      return `${props.elementId}_${itemKey(item)}`;
    }
    function getItemId(item) {
      return `${props.elementId}_item_${itemKey(item)}`;
    }
    function onItemFocus(event) {
      if (event && event.target) {
        event.target.style.position = "relative";
      }
    }
    function onItemBlur(event) {
      if (event && event.target) {
        event.target.style.position = "static";
      }
    }
    function callbackAfterItemAdd(item) {
      setActiveItem(item);
    }
    function callbackBeforeItemDelete(item) {
      if (internalItems.value.length === 0) {
        return;
      }
      let targetIndex = internalItems.value.indexOf(item) - 1;
      if (targetIndex < 0 && internalItems.value.length > 1) {
        targetIndex = 1;
      } else if (targetIndex < 0) {
        targetIndex = 0;
      }
      setActiveItem(internalItems.value[targetIndex]);
      const targetElement = getLiElements()[targetIndex];
      if (targetElement) {
        targetElement.focus();
      }
    }
    function isActive(item) {
      return props.checkbox && itemEquals(activeItem.value, item, internalKey2);
    }
    return (_ctx, _cache) => {
      return !__props.selectable ? (openBlock(), createElementBlock("ul", _hoisted_1$f, [(openBlock(true), createElementBlock(Fragment, null, renderList(internalItems.value, (item) => {
        return openBlock(), createElementBlock("li", {
          key: itemKey(item),
          class: "list__item"
        }, [createElementVNode("div", {
          ref_for: true,
          ref: "listItemPanes",
          class: "list__item__itempane"
        }, [renderSlot(_ctx.$slots, "default", mergeProps({
          ref_for: true
        }, {
          item
        }))], 512)]);
      }), 128)), _cache[0] || (_cache[0] = createTextVNode()), isEmpty2.value ? (openBlock(), createElementBlock("li", _hoisted_2$b, [createElementVNode("div", _hoisted_3$7, [renderSlot(_ctx.$slots, "empty", {}, () => [createElementVNode("em", null, toDisplayString(unref($t2)("fkui.list.empty", "Listan \xE4r tom")), 1)])])])) : createCommentVNode("", true)])) : (openBlock(), createElementBlock("ul", {
        key: 1,
        ref_key: "ulElement",
        ref: ulElement,
        class: "list list--hover"
      }, [(openBlock(true), createElementBlock(Fragment, null, renderList(internalItems.value, (item, index) => {
        return openBlock(), createElementBlock("li", {
          id: getItemId(item),
          key: itemKey(item),
          "aria-labelledby": getItemId(item),
          class: normalizeClass([itemClasses(item), "list__item"]),
          tabindex: __props.checkbox ? 0 : void 0,
          onKeydown: withModifiers(($event) => onItemKeyDown($event, item), ["self"]),
          onFocus: withModifiers(onItemFocus, ["self"]),
          onBlur: withModifiers(onItemBlur, ["self"])
        }, [__props.checkbox ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "list__item__selectpane",
          onClick: withModifiers(($event) => onSelect(item), ["self"])
        }, [createElementVNode("div", _hoisted_6$4, [createVNode(unref(FCheckboxField), {
          value: true,
          "model-value": isSelected(item),
          onClick: withModifiers(($event) => onSelect(item), ["self"])
        }, {
          default: withCtx(() => [createElementVNode("span", {
            id: getAriaLabelledbyId(item),
            class: "sr-only"
          }, [renderSlot(_ctx.$slots, "screenreader", mergeProps({
            ref_for: true
          }, {
            item
          }))], 8, _hoisted_7$2)]),
          _: 2
        }, 1032, ["model-value", "onClick"])])], 8, _hoisted_5$5)) : createCommentVNode("", true), _cache[1] || (_cache[1] = createTextVNode()), (openBlock(), createBlock(resolveDynamicComponent(__props.checkbox ? "div" : "a"), {
          ref_for: true,
          ref: "listItemPanes",
          href: !__props.checkbox ? "javascript:" : void 0,
          class: "list__item__itempane",
          onClick: ($event) => onItemClick($event, index, item)
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default", mergeProps({
            ref_for: true
          }, {
            item
          }))]),
          _: 2
        }, 1032, ["href", "onClick"]))], 42, _hoisted_4$6);
      }), 128)), _cache[2] || (_cache[2] = createTextVNode()), isEmpty2.value ? (openBlock(), createElementBlock("li", _hoisted_8$2, [createElementVNode("div", _hoisted_9$2, [renderSlot(_ctx.$slots, "empty", {}, () => [createElementVNode("em", null, toDisplayString(unref($t2)("fkui.list.empty", "Listan \xE4r tom")), 1)])])])) : createCommentVNode("", true)], 512));
    };
  }
});
var _sfc_main$e = defineComponent({
  name: "FLoader",
  mixins: [TranslationMixin],
  inheritAttrs: false,
  props: {
    /* Aria-live must always be visible, hence v-if on component level is not possible, therefore we use show-prop */
    /**
     * Determine if the loader is visible or not
     */
    show: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * If loader should be displayed as a fullscreen overlay.
     */
    overlay: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * Delay the loader icon and text by 1 second
     */
    delay: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * Language used for determining fallback value for the loading text. Useful if loader is displayed before
     * text keys have been downloaded. Default is Swedish `sv`, can be changed to English `en`.
     */
    language: {
      type: String,
      required: false,
      default: "sv"
    },
    /**
     *   Controls if focus should be set on the loading text when the loader is displayed with overlay.
     * - When set to true focus will be set on the loading text when the loader is displayed with overlay.
     * - When set to false no focus will be set, instead aria alert is used to announce loading for screen readers.
     */
    focusOnOverlay: {
      type: Boolean,
      required: false,
      default: true
    },
    /*
     * Set teleport target (when overlay is enabled).
     *
     * - When set to a string it is used as a selector.
     * - When set to a element it is used directly.
     * - Default uses {@link config#teleportTarget}.
     */
    teleport: {
      type: [String, HTMLElement],
      required: false,
      default: void 0
    }
  },
  data() {
    return {
      oldFocus: void 0
    };
  },
  computed: {
    defaultLoadingText() {
      return this.language === "en" ? "Please wait" : "V\xE4nligen v\xE4nta";
    },
    classes() {
      return {
        "loader--overlay": this.overlay,
        "loader--delay": this.delay
      };
    },
    teleportTarget() {
      if (this.teleport) {
        return this.teleport;
      } else {
        return config.teleportTarget;
      }
    },
    teleportDisabled() {
      return !this.overlay;
    },
    role() {
      if (this.overlay && this.focusOnOverlay) {
        return void 0;
      }
      return "alert";
    }
  },
  watch: {
    show(show) {
      if (show) {
        this.openLoader();
      } else {
        this.closeLoader();
      }
    }
  },
  mounted() {
    if (this.show) {
      this.openLoader();
    }
  },
  methods: {
    async listener() {
      await this.$nextTick();
      focus(this.$refs["loader-text"]);
    },
    async openLoader() {
      if (this.overlay) {
        saveFocus(document);
        if (this.focusOnOverlay) {
          await this.listener();
        }
        addFocusListener(findTabbableElements(document), this.listener);
      }
    },
    closeLoader() {
      if (this.overlay) {
        removeFocusListener(findTabbableElements(document), this.listener);
        restoreFocus();
      }
    }
  }
});
var _hoisted_1$e = {
  class: "loader__backdrop"
};
var _hoisted_2$a = ["role"];
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Teleport, {
    to: _ctx.teleportTarget,
    disabled: _ctx.teleportDisabled
  }, [withDirectives(createElementVNode("div", mergeProps(_ctx.$attrs, {
    class: ["loader", _ctx.classes]
  }), [createElementVNode("div", _hoisted_1$e, [_cache[0] || (_cache[0] = createElementVNode("div", {
    class: "loader__wrapper"
  }, [createElementVNode("div", {
    class: "loader__spinner-1 loader__spinner"
  }, [createElementVNode("div", {
    class: "loader__spinner-1-circle1 loader__circle loader__circle--1"
  }), createTextVNode(), createElementVNode("div", {
    class: "loader__spinner-1-circle2 loader__circle loader__circle--2"
  }), createTextVNode(), createElementVNode("div", {
    class: "loader__spinner-1-circle3 loader__circle loader__circle--3"
  }), createTextVNode(), createElementVNode("div", {
    class: "loader__spinner-1-circle4 loader__circle loader__circle--4"
  })]), createTextVNode(), createElementVNode("div", {
    class: "loader__spinner-2 loader__spinner"
  }, [createElementVNode("div", {
    class: "loader__spinner-2-circle1 loader__circle loader__circle--1"
  }), createTextVNode(), createElementVNode("div", {
    class: "loader__spinner-2-circle2 loader__circle loader__circle--2"
  }), createTextVNode(), createElementVNode("div", {
    class: "loader__spinner-2-circle3 loader__circle loader__circle--3"
  }), createTextVNode(), createElementVNode("div", {
    class: "loader__spinner-2-circle4 loader__circle loader__circle--4"
  })]), createTextVNode(), createElementVNode("div", {
    class: "loader__spinner-3 loader__spinner"
  }, [createElementVNode("div", {
    class: "loader__spinner-3-circle1 loader__circle loader__circle--1"
  }), createTextVNode(), createElementVNode("div", {
    class: "loader__spinner-3-circle2 loader__circle loader__circle--2"
  }), createTextVNode(), createElementVNode("div", {
    class: "loader__spinner-3-circle3 loader__circle loader__circle--3"
  }), createTextVNode(), createElementVNode("div", {
    class: "loader__spinner-3-circle4 loader__circle loader__circle--4"
  })])], -1)), _cache[1] || (_cache[1] = createTextVNode()), createElementVNode("div", {
    ref: "loader-text",
    class: normalizeClass(["loader__wait-text", {
      "loader--delay": _ctx.delay
    }]),
    tabindex: "-1"
  }, [createElementVNode("span", {
    role: _ctx.role
  }, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.$t("fkui.loader.wait.text", _ctx.defaultLoadingText)), 1)])], 8, _hoisted_2$a)], 2)])], 16), [[vShow, _ctx.show]])], 8, ["to", "disabled"]);
}
var FLoader = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$a]]);
var _hoisted_1$d = ["aria-label"];
var __default__ = defineComponent({
  computed: {
    ariaLabel() {
      const content2 = renderSlotText(this.$slots.default);
      if (!content2) {
        throw new Error("`f-logo` requires text content.");
      }
      return content2;
    }
  }
});
var _sfc_main$d = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "FLogo",
  props: {
    /**
     * Size of the logo: `"small"`, `"large"`, or `"responsive"`.
     * Requires matching CSS variable to be set (`--f-logo-image-{small/large}`), or both if "responsive".
     */
    size: {
      type: String,
      default: "responsive",
      required: false,
      validator(value) {
        return ["small", "large", "responsive"].includes(value);
      }
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(`logo logo--${props.size}`),
        "aria-label": _ctx.ariaLabel,
        role: "img"
      }, null, 10, _hoisted_1$d);
    };
  }
});
var iconClasses = {
  success: {
    symbol: "circle",
    sign: "success",
    screenReaderContextKey: "fkui.message-box.sr-context.success",
    screenReaderContextDefault: "Meddelande"
  },
  warning: {
    symbol: "circle",
    sign: "alert",
    screenReaderContextKey: "fkui.message-box.sr-context.warning",
    screenReaderContextDefault: "Varningsmeddelande"
  },
  error: {
    symbol: "triangle",
    sign: "alert",
    screenReaderContextKey: "fkui.message-box.sr-context.error",
    screenReaderContextDefault: "Felmeddelande"
  },
  info: {
    symbol: "circle",
    sign: "i",
    screenReaderContextKey: "fkui.message-box.sr-context.info",
    screenReaderContextDefault: "Informationsmeddelande"
  }
};
var _sfc_main$c = defineComponent({
  name: "FMessageBox",
  components: {
    FIcon,
    IFlex,
    IFlexItem
  },
  props: {
    /**
     * Type of message-box. 'success', 'error', 'warning' and 'info' is valid.
     * */
    type: {
      type: String,
      required: true,
      validator(value) {
        return ["success", "warning", "error", "info"].includes(value);
      }
    },
    /**
     * If message-box should be a banner.
     * If prop is not used message-box will have default styling.
     */
    banner: {
      type: Boolean,
      required: false
    },
    /**
     * It is important to provide a context for a screenreader, similar to a modal that initially outputs it is a dialog.
     * Type-specific screenreader context is output by default in this component.
     * By setting this property to false no context will be output.
     * Note that by doing this, it is the applications responsiblity to provide a clear context.
     */
    provideScreenReaderContext: {
      type: Boolean,
      required: false,
      default: true
    },
    /**
     * Select standard or short layout.
     *
     * - 'normal' - Use normal layout when need for heading and/or longer text/multiple sentences
     * - 'short' - Use short layout when only need for shorter text
     */
    layout: {
      type: String,
      required: false,
      default: "standard",
      validator(value) {
        return ["standard", "short"].includes(value);
      }
    }
  },
  data() {
    return {
      headingClass: ["message-box__heading"]
    };
  },
  computed: {
    messageBoxType() {
      if (this.layout === "short") {
        return `message-box--${this.type}-short`;
      } else {
        return `message-box--${this.type}`;
      }
    },
    bannerType() {
      return this.banner ? `message-box--banner` : "";
    },
    classType() {
      return `icon__${this.type}`;
    },
    classIcon() {
      return iconClasses[this.type].symbol === "circle" && iconClasses[this.type].sign === "alert" ? `icon__exclamation` : "";
    },
    stackTypeClass() {
      return `icon-stack--${this.type}`;
    },
    symbol() {
      return iconClasses[this.type].symbol;
    },
    sign() {
      return iconClasses[this.type].sign;
    }
  },
  methods: {
    screenReaderContext() {
      return TranslationService.provider.translate(iconClasses[this.type].screenReaderContextKey, iconClasses[this.type].screenReaderContextDefault);
    }
  }
});
var _hoisted_1$c = {
  key: 0,
  class: "sr-only"
};
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  const _component_i_flex_item = resolveComponent("i-flex-item");
  const _component_i_flex = resolveComponent("i-flex");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["message-box", [_ctx.messageBoxType, _ctx.bannerType]])
  }, [_ctx.provideScreenReaderContext ? (openBlock(), createElementBlock("span", _hoisted_1$c, toDisplayString(_ctx.screenReaderContext()), 1)) : createCommentVNode("", true), _cache[2] || (_cache[2] = createTextVNode()), createVNode(_component_i_flex, {
    gap: "2x"
  }, {
    default: withCtx(() => [_ctx.layout === "short" ? (openBlock(), createBlock(_component_i_flex_item, {
      key: 0,
      class: "message-box__icon",
      shrink: "",
      align: "center"
    }, {
      default: withCtx(() => [createElementVNode("span", {
        class: normalizeClass(["icon-stack", _ctx.stackTypeClass])
      }, [createVNode(_component_f_icon, {
        class: normalizeClass(_ctx.classType),
        name: _ctx.symbol
      }, null, 8, ["class", "name"]), _cache[0] || (_cache[0] = createTextVNode()), createVNode(_component_f_icon, {
        class: normalizeClass(_ctx.classIcon),
        name: _ctx.sign
      }, null, 8, ["class", "name"])], 2)]),
      _: 1
    })) : createCommentVNode("", true), _cache[1] || (_cache[1] = createTextVNode()), createVNode(_component_i_flex_item, {
      class: "message-box__content",
      grow: "",
      align: "center"
    }, {
      default: withCtx(() => [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(_ctx.layout === "short" ? {} : {
        headingSlotClass: _ctx.headingClass
      })))]),
      _: 3
    })]),
    _: 3,
    __: [1]
  })], 2);
}
var FMessageBox = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$9]]);
function findOverflowIndex(totalWidth, elements) {
  let sum = 0;
  const index = elements.findIndex((element) => {
    sum += element.offsetWidth;
    return sum > totalWidth;
  });
  return index < 1 ? index : index - 1;
}
function getNewItemIndexFromMenuAction(action, index, maxIndex) {
  const minIndex = 0;
  const nextIndex = index + 1;
  const prevIndex = index - 1;
  let newIndex;
  switch (action) {
    case MenuAction.MOVE_NEXT:
      newIndex = nextIndex > maxIndex ? minIndex : nextIndex;
      break;
    case MenuAction.MOVE_PREV:
      newIndex = prevIndex < minIndex ? maxIndex : prevIndex;
      break;
    case MenuAction.MOVE_FIRST:
      newIndex = minIndex;
      break;
    case MenuAction.MOVE_LAST:
      newIndex = maxIndex;
      break;
    default:
      newIndex = index;
  }
  return newIndex;
}
async function doMenuAction(action, target, currentIndex, maxIndex) {
  const itemIndex = getNewItemIndexFromMenuAction(action, currentIndex, maxIndex);
  switch (action) {
    case MenuAction.MOVE_NEXT:
    case MenuAction.MOVE_PREV:
    case MenuAction.MOVE_FIRST:
    case MenuAction.MOVE_LAST:
      await target.setFocusOnItem(itemIndex);
      break;
    case MenuAction.ACTIVATE:
      await target.activateItem(itemIndex);
      break;
  }
}
var upKeys = ["Up", "ArrowUp"];
var downKeys = ["Down", "ArrowDown"];
var verticalKeys = [...upKeys, ...downKeys];
var preventKeys = ["Tab", "Left", "Right", "ArrowLeft", "ArrowRight", "Home", "End", " ", "Spacebar", "Enter", ...verticalKeys];
var _sfc_main$b = defineComponent({
  name: "FNavigationMenu",
  components: {
    FIcon,
    IPopupMenu
  },
  mixins: [TranslationMixin],
  props: {
    /**
     * Current route.
     */
    route: {
      type: String,
      required: false,
      default: ""
    },
    /**
     * The route items to be diplayed in the menu
     */
    routes: {
      type: Array,
      required: true
    },
    /**
     * If true, show the menu vertically
     */
    vertical: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * Screen reader text for selected item
     */
    selectedMenuItemScreenReaderText: {
      type: String,
      required: false,
      default: ""
    },
    /**
     * Screen reader text for the more menu item
     */
    menuMoreScreenReaderText: {
      type: String,
      required: false,
      default: ""
    },
    /**
     * Screen reader text for the more menu with selected items
     */
    menuMoreWithSelectedItemsScreenReaderText: {
      type: String,
      required: false,
      default: ""
    },
    /**
     * Unique accessible name for navigation landmark in menu.
     */
    menuAriaLabel: {
      type: String,
      required: false,
      default: "Navigeringsmeny"
    },
    /**
     * Unique accessible name for navigation landmark in popup.
     */
    popupAriaLabel: {
      type: String,
      required: false,
      default: "Popupmeny"
    }
  },
  emits: [
    /**
     * Event that is dispatched when a menu item is selected, for example, by clicking on the item.
     * In most use cases the event payload is used to call Vue `router.push()` from the consumer code.
     *
     * @event selectedRoute
     * @param route
     * @type {string}
     */
    "selectedRoute",
    /**
     * V-model event to update route property.
     *
     * @event update:route
     * @param route
     * @type {string}
     */
    "update:route"
  ],
  setup() {
    const isMounted = ref(false);
    return {
      isMounted
    };
  },
  data() {
    return {
      selectedItem: "",
      focusedPopupMenuItem: "",
      overflowIndex: -1,
      popupOpen: false,
      popupAnchor: void 0,
      resizeObserver: void 0
    };
  },
  computed: {
    items() {
      if (!this.routes || !Array.isArray(this.routes)) {
        return [];
      }
      return this.routes.map((i) => ({
        label: i.label,
        key: i.route,
        href: i.href,
        target: i.target
      }));
    },
    overflowItems() {
      return this.hasOverflow ? this.items.slice(this.overflowIndex) : [];
    },
    hasOverflow() {
      return this.overflowIndex > -1 && !this.vertical;
    },
    overflowItemSelected() {
      return this.overflowItems.some((item) => item.key === this.selectedItem);
    },
    menuClasses() {
      const vertical = this.vertical ? ["imenu--vertical"] : ["imenu--horizontal"];
      return ["imenu", ...vertical];
    },
    popupItemClasses() {
      const highlight = this.overflowItemSelected ? ["imenu__list__item--highlight"] : [];
      return ["imenu__popup-item__wrapper", "imenu__list__item", ...highlight];
    },
    selectedItemSrText() {
      if (this.selectedMenuItemScreenReaderText === "") {
        return this.$t("fkui.navigation-menu.current-page", "Aktuell sida");
      } else {
        return this.selectedMenuItemScreenReaderText;
      }
    },
    popupLabel() {
      return this.$t("fkui.navigation-menu.more-text", "Mer");
    },
    popupMenuSrText() {
      return this.overflowItemSelected ? this.popupMenuSelectedSrText : this.menuMoreScreenReaderText;
    },
    popupMenuSelectedSrText() {
      if (this.menuMoreWithSelectedItemsScreenReaderText === "") {
        return this.$t("fkui.navigation-menu.more-selection", "underliggande vald nu");
      } else {
        return this.menuMoreWithSelectedItemsScreenReaderText;
      }
    }
  },
  watch: {
    route: {
      async handler(value) {
        this.selectedItem = value;
      },
      immediate: true
    },
    routes: {
      deep: true,
      async handler() {
        await this.$nextTick();
        this.onResize();
      }
    }
  },
  mounted() {
    this.isMounted = true;
    this.resizeObserver = new ResizeObserver(debounce(this.onResize, 100));
    this.resizeObserver.observe(this.$el);
    this.onResize();
  },
  unmounted() {
    this.isMounted = false;
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  },
  methods: {
    itemClasses(item, index) {
      const hidden = this.hasOverflow && index >= this.overflowIndex ? ["imenu__list__item--hidden"] : [];
      const highlight = item.key === this.selectedItem ? ["imenu__list__item--highlight"] : [];
      return ["imenu__list__item", ...highlight, ...hidden];
    },
    showItemSrText(index) {
      const isSelected = this.items[index].key === this.selectedItem;
      const isVisible = index < this.overflowIndex;
      return isSelected && isVisible;
    },
    getVisibleAnchors() {
      const itemAnchors = getSortedHTMLElementsFromVueRef(this.$refs.anchors);
      const sliceEnd = this.hasOverflow ? this.overflowIndex : void 0;
      const visibleItemAnchors = itemAnchors.slice(0, sliceEnd);
      const popupItemAnchor = this.hasOverflow ? [getHTMLElementFromVueRef(this.$refs["popup-anchor"])] : [];
      return [...visibleItemAnchors, ...popupItemAnchor];
    },
    getAnchor(index) {
      const anchors = this.getVisibleAnchors();
      return anchors[index];
    },
    findItemByKey(key) {
      return this.items.find((it) => it.key === key);
    },
    indexOfItemByKey(key) {
      const item = this.findItemByKey(key);
      if (!item) {
        return -1;
      }
      return this.items.indexOf(item);
    },
    selectItem(key) {
      if (key !== this.selectedItem) {
        this.selectedItem = key;
      }
      if (key !== this.route) {
        this.$emit("update:route", key);
        this.$emit("selectedRoute", key);
      }
    },
    async activateItem(index) {
      const popupItemFocused = this.hasOverflow && index === this.overflowIndex;
      if (popupItemFocused) {
        this.togglePopup(!this.popupOpen);
        return;
      }
      const item = this.items[index];
      this.selectItem(item.key);
      this.clickItemAnchor(item);
    },
    onClickItem(event, item) {
      this.selectItem(item.key);
      const target = event.target;
      const isAnchor = target instanceof HTMLElement && target.tagName === "A";
      if (!isAnchor) {
        this.clickItemAnchor(item);
      }
    },
    clickItemAnchor(item) {
      var _a;
      if (!item.href) {
        return;
      }
      const index = this.items.indexOf(item);
      (_a = this.getAnchor(index)) == null ? void 0 : _a.click();
    },
    onPopupMenuItemSelected(key) {
      this.selectItem(key);
      if (key !== this.selectedItem) {
        this.togglePopup(false);
      }
    },
    togglePopup(open) {
      if (open) {
        this.popupAnchor = getHTMLElementFromVueRef(this.$refs["popup-item"]);
      }
      this.popupOpen = open;
    },
    async setFocusOnItem(index) {
      if (this.popupOpen) {
        this.togglePopup(false);
        await this.$nextTick();
      }
      const itemAnchor = this.getAnchor(index);
      focus(itemAnchor, {
        preventScroll: true
      });
    },
    async onResize() {
      if (!this.isMounted || this.vertical) {
        return;
      }
      const menu = getHTMLElementFromVueRef(this.$refs.menu);
      const itemElements = getSortedHTMLElementsFromVueRef(this.$refs.items);
      const menuWidth = menu.offsetWidth;
      const foundOverflowIndex = findOverflowIndex(menuWidth, itemElements);
      if (this.overflowIndex === foundOverflowIndex) {
        return;
      }
      this.overflowIndex = foundOverflowIndex;
      if (!this.hasOverflow) {
        this.popupOpen = false;
        return;
      }
      const popupWasOpen = this.popupOpen;
      this.popupOpen = false;
      await this.$nextTick();
      const wrapper = getHTMLElementFromVueRef(this.$refs["popup-item"]);
      wrapper.style.left = "0";
      const firstHiddenItem = itemElements[this.overflowIndex];
      const firstHiddenItemRect = getAbsolutePosition(firstHiddenItem);
      const wrapperRect = getAbsolutePosition(wrapper);
      const offset2 = wrapperRect.x - firstHiddenItemRect.x;
      wrapper.style.left = `-${offset2}px`;
      this.popupOpen = popupWasOpen;
    },
    onKeyUp(event) {
      if (preventKeys.includes(event.key)) {
        event.preventDefault();
      }
    },
    async onKeyDown(event) {
      if (event.key === "Escape") {
        this.togglePopup(false);
        return;
      }
      if (!preventKeys.includes(event.key)) {
        return;
      }
      const anchors = this.getVisibleAnchors();
      const focusedIndex = anchors.findIndex((anchor) => anchor === event.target);
      const lastItemIndex = anchors.length - 1;
      const firstItemFocused = focusedIndex === 0;
      const lastItemFocused = focusedIndex === lastItemIndex;
      const tabPrev = event.key === "Tab" && event.shiftKey;
      const tabNext = event.key === "Tab" && !event.shiftKey;
      const shouldCheckPopupKeys = this.hasOverflow && lastItemFocused && this.popupOpen;
      const popupKeyPressed = verticalKeys.includes(event.key) || tabNext;
      if (shouldCheckPopupKeys && popupKeyPressed) {
        event.preventDefault();
        const index = upKeys.includes(event.key) ? this.overflowItems.length - 1 : 0;
        this.focusedPopupMenuItem = this.overflowItems[index].key;
        return;
      }
      if (tabPrev && firstItemFocused || tabNext && lastItemFocused) {
        return;
      }
      const action = actionFromKeyboardEvent(event);
      if (action === null) {
        return;
      }
      event.preventDefault();
      await doMenuAction(action, this, focusedIndex, lastItemIndex);
    }
  }
});
var _hoisted_1$b = ["aria-label"];
var _hoisted_2$9 = ["data-ref-index", "onClick"];
var _hoisted_3$6 = {
  class: "imenu__list__anchor-container"
};
var _hoisted_4$5 = ["data-ref-index", "href", "target"];
var _hoisted_5$4 = {
  key: 0,
  class: "sr-only"
};
var _hoisted_6$3 = {
  key: 0,
  class: "imenu__popup-item",
  role: "none"
};
var _hoisted_7$1 = {
  class: "imenu__list__anchor-container"
};
var _hoisted_8$1 = ["aria-expanded"];
var _hoisted_9$1 = {
  class: "sr-only"
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  const _component_i_popup_menu = resolveComponent("i-popup-menu");
  return openBlock(), createElementBlock("nav", {
    ref: "menu",
    "aria-label": _ctx.menuAriaLabel,
    class: normalizeClass(_ctx.menuClasses)
  }, [createElementVNode("ul", {
    class: "imenu__list",
    role: "menubar",
    onKeyup: _cache[1] || (_cache[1] = (...args) => _ctx.onKeyUp && _ctx.onKeyUp(...args)),
    onKeydown: _cache[2] || (_cache[2] = (...args) => _ctx.onKeyDown && _ctx.onKeyDown(...args))
  }, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
    return openBlock(), createElementBlock("li", {
      key: item.key,
      ref_for: true,
      ref: "items",
      "data-ref-index": index,
      class: normalizeClass(_ctx.itemClasses(item, index)),
      role: "none",
      onClick: (event) => _ctx.onClickItem(event, item)
    }, [createElementVNode("div", _hoisted_3$6, [createElementVNode("a", {
      ref_for: true,
      ref: "anchors",
      "data-ref-index": index,
      tabindex: "0",
      href: item.href,
      target: item.target,
      class: "imenu__list__anchor",
      role: "menuitem"
    }, [_ctx.showItemSrText(index) ? (openBlock(), createElementBlock("span", _hoisted_5$4, [createElementVNode("span", null, toDisplayString(_ctx.selectedItemSrText) + "\xA0", 1)])) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(item.label), 1)], 8, _hoisted_4$5)])], 10, _hoisted_2$9);
  }), 128)), _cache[6] || (_cache[6] = createTextVNode()), _ctx.hasOverflow ? (openBlock(), createElementBlock("li", _hoisted_6$3, [createElementVNode("div", {
    ref: "popup-item",
    class: normalizeClass(_ctx.popupItemClasses),
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.togglePopup(true))
  }, [createElementVNode("div", _hoisted_7$1, [createElementVNode("a", {
    ref: "popup-anchor",
    tabindex: "0",
    class: "imenu__list__anchor",
    role: "menuitem",
    "aria-haspopup": "menu",
    "aria-expanded": _ctx.popupOpen ? "true" : "false"
  }, [createElementVNode("span", _hoisted_9$1, [createElementVNode("span", null, toDisplayString(_ctx.popupMenuSrText) + "\xA0", 1)]), createTextVNode(" " + toDisplayString(_ctx.popupLabel) + " ", 1), createVNode(_component_f_icon, {
    name: "arrow-down",
    class: "imenu__list__anchor-icon-right"
  })], 8, _hoisted_8$1)])], 2)])) : createCommentVNode("", true)], 32), _cache[7] || (_cache[7] = createTextVNode()), createVNode(_component_i_popup_menu, {
    ref: "popup-menu",
    modelValue: _ctx.selectedItem,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.selectedItem = $event),
    "focused-item": _ctx.focusedPopupMenuItem,
    "onUpdate:focusedItem": _cache[4] || (_cache[4] = ($event) => _ctx.focusedPopupMenuItem = $event),
    items: _ctx.overflowItems,
    "is-open": _ctx.popupOpen,
    anchor: _ctx.popupAnchor,
    "selected-menu-item-screen-reader-text": _ctx.selectedItemSrText,
    "aria-label": _ctx.popupAriaLabel,
    "enable-keyboard-navigation": "",
    onSelect: _ctx.onPopupMenuItemSelected,
    onClose: _cache[5] || (_cache[5] = ($event) => _ctx.togglePopup(false))
  }, null, 8, ["modelValue", "focused-item", "items", "is-open", "anchor", "selected-menu-item-screen-reader-text", "aria-label", "onSelect"])], 10, _hoisted_1$b);
}
var FNavigationMenu = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$8]]);
var EVENTS = ["online", "offline"];
var _sfc_main$a = defineComponent({
  name: "FOffline",
  components: {
    FIcon,
    IFlex,
    IFlexItem
  },
  data() {
    return {
      isOnline: navigator.onLine || false,
      role: "none",
      shouldNotRead: true
    };
  },
  created() {
    EVENTS.forEach((event) => {
      window.addEventListener(event, this.updateOnlineStatus);
    });
  },
  beforeUnmount() {
    EVENTS.forEach((event) => {
      window.removeEventListener(event, this.updateOnlineStatus);
    });
  },
  mounted() {
    document.body.prepend(getElementFromVueRef(this.$refs.offline));
  },
  methods: {
    updateOnlineStatus(event) {
      switch (event.type) {
        case "online":
          this.shouldNotRead = false;
          this.isOnline = true;
          break;
        case "offline":
          this.shouldNotRead = true;
          this.isOnline = false;
          break;
        /* eslint-disable-next-line sonarjs/no-duplicated-branches -- technical debt */
        default:
          this.shouldNotRead = true;
          this.isOnline = false;
          break;
      }
      this.role = "alert";
    }
  }
});
var _hoisted_1$a = ["role"];
var _hoisted_2$8 = {
  key: 0,
  class: "offline"
};
var _hoisted_3$5 = {
  class: "icon-stack icon-stack--error"
};
var _hoisted_4$4 = {
  class: "offline__content"
};
var _hoisted_5$3 = ["aria-hidden"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  const _component_i_flex_item = resolveComponent("i-flex-item");
  const _component_i_flex = resolveComponent("i-flex");
  return openBlock(), createElementBlock("div", {
    ref: "offline",
    class: "offline__wrapper",
    role: _ctx.role
  }, [!_ctx.isOnline ? (openBlock(), createElementBlock("div", _hoisted_2$8, [createVNode(_component_i_flex, {
    gap: "2x"
  }, {
    default: withCtx(() => [createVNode(_component_i_flex_item, {
      class: "offline__icon",
      shrink: "",
      align: "center"
    }, {
      default: withCtx(() => [createElementVNode("span", _hoisted_3$5, [createVNode(_component_f_icon, {
        name: "triangle"
      }), _cache[0] || (_cache[0] = createTextVNode()), createVNode(_component_f_icon, {
        name: "alert"
      })])]),
      _: 1
    }), _cache[2] || (_cache[2] = createTextVNode()), createVNode(_component_i_flex_item, {
      class: "offline_content",
      grow: "",
      align: "center"
    }, {
      default: withCtx(() => [createElementVNode("p", _hoisted_4$4, [renderSlot(_ctx.$slots, "default", {}, () => [_cache[1] || (_cache[1] = createTextVNode(" Det verkar som att du inte har n\xE5gon internetuppkoppling just nu "))])])]),
      _: 3
    })]),
    _: 3,
    __: [2]
  })])) : createCommentVNode("", true), _cache[3] || (_cache[3] = createTextVNode()), withDirectives(createElementVNode("span", {
    class: "sr-only",
    "aria-hidden": _ctx.shouldNotRead ? "true" : void 0
  }, "\n            Din internetuppkoppling fungerar igen\n        ", 8, _hoisted_5$3), [[vShow, _ctx.isOnline]])], 8, _hoisted_1$a);
}
var FOffline = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$7]]);
var _sfc_main$9 = defineComponent({
  name: "FOutputField",
  components: {
    FLabel
  },
  inheritAttrs: false,
  props: {
    /**
     * Associate the output field with one or more id's of the elements
     * contributing or affecting the result of this field. Multiple id's can
     * be set with a space-separated string or an array of strings.
     */
    for: {
      type: [String, Array],
      required: true
    },
    /**
     * The id for the output id attribute.
     * The id for the label for attribute.
     * If the prop is not set a random value will be generated.
     */
    id: {
      type: String,
      required: false,
      default: () => ElementIdService.generateElementId()
    }
  },
  computed: {
    htmlFor() {
      return Array.isArray(this.for) ? this.for.join(" ") : this.for;
    }
  }
});
var _hoisted_1$9 = {
  class: "output-field"
};
var _hoisted_2$7 = ["id", "for"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_label = resolveComponent("f-label");
  return openBlock(), createElementBlock("div", _hoisted_1$9, [createVNode(_component_f_label, {
    for: _ctx.id
  }, createSlots({
    default: withCtx(() => [renderSlot(_ctx.$slots, "label")]),
    _: 2
  }, [_ctx.$slots.tooltip ? {
    name: "tooltip",
    fn: withCtx(() => [renderSlot(_ctx.$slots, "tooltip")]),
    key: "0"
  } : void 0]), 1032, ["for"]), _cache[1] || (_cache[1] = createTextVNode()), createElementVNode("output", mergeProps({
    id: _ctx.id,
    for: _ctx.htmlFor,
    class: "output-field__output"
  }, _ctx.$attrs), [renderSlot(_ctx.$slots, "default")], 16, _hoisted_2$7)]);
}
var FOutputField = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$6]]);
var _sfc_main$8 = defineComponent({
  name: "FPageHeader",
  components: {
    ISkipLink
  },
  inheritAttrs: true,
  props: {
    /**
     * Render skiplink.
     *
     * When set to a non-empty string the skiplink feature is enabled.
     * The string is the id of the element to move focus to.
     *
     * When set to empty string (default) the skiplink feature is disabled.
     */
    skipLink: {
      type: String,
      required: false,
      default: ""
    },
    /**
     * HTML element type for header.
     */
    headerTag: {
      default: "span",
      required: false,
      validator(value) {
        return ["span", "h1"].includes(value);
      }
    }
  },
  computed: {
    skipLinkAnchor() {
      const {
        skipLink
      } = this;
      if (skipLink === "") {
        return null;
      } else {
        return `#${skipLink}`;
      }
    },
    hasLogo() {
      return Boolean(this.$slots.logo);
    }
  }
});
var _hoisted_1$8 = {
  class: "page-header__root"
};
var _hoisted_2$6 = {
  key: 0
};
var _hoisted_3$4 = {
  ref: "header",
  class: "page-header"
};
var _hoisted_4$3 = {
  key: 0,
  class: "page-header__logo"
};
var _hoisted_5$2 = {
  class: "page-header__right"
};
var _hoisted_6$2 = {
  class: "page-header__right-slot"
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_i_skip_link = resolveComponent("i-skip-link");
  return openBlock(), createElementBlock("div", _hoisted_1$8, [_ctx.skipLinkAnchor ? (openBlock(), createElementBlock("nav", _hoisted_2$6, [createVNode(_component_i_skip_link, {
    href: _ctx.skipLinkAnchor
  }, {
    default: withCtx(() => [renderSlot(_ctx.$slots, "skip-link-text")]),
    _: 3
  }, 8, ["href"])])) : createCommentVNode("", true), _cache[2] || (_cache[2] = createTextVNode()), createElementVNode("div", _hoisted_3$4, [_ctx.hasLogo ? (openBlock(), createElementBlock("div", _hoisted_4$3, [renderSlot(_ctx.$slots, "logo")])) : createCommentVNode("", true), _cache[0] || (_cache[0] = createTextVNode()), (openBlock(), createBlock(resolveDynamicComponent(_ctx.headerTag), {
    class: "page-header__app-name"
  }, {
    default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
    _: 3
  })), _cache[1] || (_cache[1] = createTextVNode()), createElementVNode("div", _hoisted_5$2, [createElementVNode("div", _hoisted_6$2, [renderSlot(_ctx.$slots, "right")])])], 512)]);
}
var FPageHeader = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$5]]);
var _hoisted_1$7 = {
  ref: "root",
  class: "panel__wrapper"
};
var _hoisted_2$5 = {
  class: "panel__header"
};
var _hoisted_3$3 = {
  key: 0,
  class: "panel__title"
};
var _hoisted_4$2 = ["aria-expanded", "aria-label"];
var _hoisted_5$1 = {
  class: "panel__content"
};
var _hoisted_6$1 = {
  class: "panel__footer"
};
var _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "FMinimizablePanel.ce",
  props: {
    openPrefix: {
      default: "\xC5terst\xE4ll",
      type: String
    },
    closePrefix: {
      default: "Minimera",
      type: String
    },
    context: {
      default: "panel",
      type: String
    }
  },
  emits: ["toggle"],
  setup(__props, {
    emit: __emit
  }) {
    const emit = __emit;
    const rootRef = useTemplateRef("root");
    const {
      attachPanel
    } = useAreaData(rootRef);
    const isDesktop = useMediaQuery("(width >= 640px)");
    const isOpen = ref(false);
    function updateIsOpen(value) {
      if (value && !isDesktop.value && rootRef.value) {
        const offset2 = rootRef.value.getBoundingClientRect().width;
        emit("toggle", value, true, offset2);
      } else {
        emit("toggle", value, false);
      }
      isOpen.value = value;
    }
    watch(isDesktop, (newValue) => {
      updateIsOpen(newValue);
    }, {
      immediate: true
    });
    const expandedClass = computed(() => {
      return isOpen.value ? "expanded" : "collapsed";
    });
    const attachClass = computed(() => {
      switch (attachPanel.value) {
        case "left":
          return "attach-left";
        case "right":
          return "attach-right";
      }
      return void 0;
    });
    const ariaLabel = computed(() => {
      const prefix = isOpen.value ? __props.closePrefix : __props.openPrefix;
      return `${prefix} ${__props.context}`;
    });
    function onToggle() {
      updateIsOpen(!isOpen.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [createElementVNode("div", {
        class: normalizeClass(["panel", [expandedClass.value, attachClass.value]])
      }, [createElementVNode("div", _hoisted_2$5, [isOpen.value ? (openBlock(), createElementBlock("div", _hoisted_3$3, [renderSlot(_ctx.$slots, "header")])) : createCommentVNode("", true), _cache[0] || (_cache[0] = createTextVNode()), createElementVNode("button", {
        class: "panel__button",
        type: "button",
        "aria-expanded": isOpen.value,
        "aria-label": ariaLabel.value,
        onClick: onToggle
      }, [renderSlot(_ctx.$slots, "icon")], 8, _hoisted_4$2)]), _cache[1] || (_cache[1] = createTextVNode()), createElementVNode("div", _hoisted_5$1, [renderSlot(_ctx.$slots, "content")]), _cache[2] || (_cache[2] = createTextVNode()), createElementVNode("div", _hoisted_6$1, [renderSlot(_ctx.$slots, "footer")])], 2)], 512);
    };
  }
});
var _style_0 = '@charset "UTF-8";\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n}\narticle,\naside,\ndialog,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection {\n  display: block;\n}\nselect::-ms-expand {\n  display: none;\n}\nselect:focus::-ms-value {\n  background: none;\n  color: #000;\n  outline: 1px dotted #000;\n}\nul,\nol {\n  padding-left: 1rem;\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\na {\n  text-decoration: none;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\nhtml {\n  font-size: var(--f-font-size-default-rem);\n}\n@media (min-width: 1024px) {\nhtml {\n    font-size: var(--f-font-size-default-large-up-rem);\n}\n}\nbody {\n  color: var(--f-text-color-default);\n  font-size: var(--f-font-size-standard);\n  font-weight: var(--f-font-weight-normal);\n  line-height: var(--f-line-height-large);\n}\np {\n  font-size: var(--f-font-size-standard);\n  font-weight: var(--f-font-weight-normal);\n  line-height: var(--f-line-height-large);\n  margin-bottom: 1rem;\n}\nb,\nstrong {\n  font-weight: var(--f-font-weight-medium);\n}\ncode {\n  font-size: var(--f-font-size-standard);\n  border-radius: var(--f-border-radius-small);\n  font-family: var(--f-font-family-code);\n  background-color: var(--f-background-code);\n  display: inline-block;\n  margin: 0 0.25rem;\n  padding: 0 0.25rem;\n}\npre code {\n  display: block;\n}\nh1, .heading--h1,\nh2,\n.heading--h2,\nh3,\n.heading--h3,\n.expandable-panel__heading,\nh4,\n.heading--h4,\nh5,\n.heading--h5,\nh6,\n.heading--h6 {\n  font-weight: var(--f-font-weight-bold);\n  margin-bottom: 0.25rem;\n  line-height: var(--f-line-height-medium);\n}\nh1, .heading--h1 {\n  font-size: var(--f-font-size-h1);\n  color: var(--f-text-color-heading-1);\n}\nh2, .heading--h2 {\n  font-size: var(--f-font-size-h2);\n  color: var(--f-text-color-heading-2);\n}\nh3, .heading--h3, .expandable-panel__heading {\n  font-size: var(--f-font-size-h3);\n  color: var(--f-text-color-heading-3);\n}\nh4, .heading--h4 {\n  font-size: var(--f-font-size-h4);\n  color: var(--f-text-color-heading-4);\n}\nh5, .heading--h5 {\n  font-size: var(--f-font-size-large);\n  color: var(--f-text-color-heading-5);\n}\nh6, .heading--h6 {\n  font-size: var(--f-font-size-standard);\n  color: var(--f-text-color-heading-6);\n}\n.heading--strong {\n  font-size: var(--f-font-size-large);\n  font-weight: var(--f-font-weight-medium);\n}\n* + h1, * + .heading--h1,\n* + h2,\n* + .heading--h2,\n* + h3,\n* + .heading--h3,\n* + .expandable-panel__heading,\n* + h4,\n* + .heading--h4,\n* + h5,\n* + .heading--h5,\n* + h6,\n* + .heading--h6 {\n  margin-top: 2rem;\n}\n@media (max-width: 640px) {\nh1, .heading--h1 {\n    font-size: var(--f-font-size-h2);\n}\nh2, .heading--h2 {\n    font-size: var(--f-font-size-xxx-large);\n}\nh3, .heading--h3, .expandable-panel__heading {\n    font-size: var(--f-font-size-h4);\n}\nh4, .heading--h4 {\n    font-size: var(--f-font-size-large);\n}\nh5, .heading--h5 {\n    font-size: var(--f-font-size-standard);\n}\nh6, .heading--h6 {\n    font-size: var(--f-font-size-standard);\n}\n.heading--strong {\n    font-size: var(--f-font-size-large);\n    font-weight: var(--f-font-weight-medium);\n}\n}\n.heading--h1 {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n}\n.heading--h2 {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n}\n.heading--h3, .expandable-panel__heading {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n}\n.heading--h4 {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n}\n.heading--h5 {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n}\n.heading--h6 {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n}\nh1 + h2, .heading--h1 + h2, h1 + .heading--h2, .heading--h1 + .heading--h2 {\n  margin-top: 1rem;\n}\nh2 + h3, .heading--h2 + h3, h2 + .heading--h3, h2 + .expandable-panel__heading, .heading--h2 + .heading--h3, .heading--h2 + .expandable-panel__heading {\n  margin-top: 1rem;\n}\nh3 + h4, .heading--h3 + h4, .expandable-panel__heading + h4, h3 + .heading--h4, .heading--h3 + .heading--h4, .expandable-panel__heading + .heading--h4 {\n  margin-top: 1rem;\n}\nh4 + h5, .heading--h4 + h5, h4 + .heading--h5, .heading--h4 + .heading--h5 {\n  margin-top: 1rem;\n}\nh5 + h6, .heading--h5 + h6, h5 + .heading--h6, .heading--h5 + .heading--h6 {\n  margin-top: 1rem;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-separator {\n  display: block !important;\n}\nbutton:focus,\na:focus,\na.button:focus,\nimg:focus,\nselect:focus,\ntextarea:focus,\ninput[type=submit]:focus,\ninput[type=text]:focus,\ninput[type=email]:focus,\ninput[type=tel]:focus,\ninput[type=image]:focus,\ninput[type=search]:focus,\n[tabindex]:focus {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n}\n[tabindex="-1"]:focus {\n  box-shadow: none;\n  outline: none;\n}\n\n/*\n    For help-classes, it is alright to use `!important` when the intent is to\n    overwrite standard behaviour for components.\n\n    All help-classes shall be prefixed with `h-`.\n*/\n.h-no-margin {\n  margin: 0 !important;\n}\n.h-root-size {\n  font-size: 1rem !important;\n}\n.h-display-flex {\n  display: flex;\n}\n.container-fluid {\n  width: 100%;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  margin-right: auto;\n  margin-left: auto;\n}\n.container {\n  width: 100%;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 95%;\n}\n@media (min-width: 640px) {\n.container {\n    max-width: 90%;\n}\n}\n@media (min-width: 1024px) {\n.container {\n    max-width: 80%;\n}\n}\n@media (min-width: 1280px) {\n.container {\n    max-width: 1280px;\n}\n}\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -1rem;\n  margin-left: -1rem;\n}\n.row--align-end {\n  justify-content: flex-end;\n}\n.row--align-center {\n  justify-content: center;\n}\n.row--align-justify {\n  justify-content: space-between;\n}\n.row--align-spaced {\n  justify-content: space-around;\n}\n.row--align-middle {\n  align-items: center;\n}\n.row--align-bottom {\n  align-items: flex-end;\n}\n.row--align-top {\n  align-items: flex-start;\n}\n.col {\n  position: relative;\n  min-height: 1px;\n  box-sizing: border-box;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  width: auto;\n  max-width: none;\n}\n.col--align-bottom {\n  align-self: flex-end;\n}\n.col--align-middle {\n  align-self: center;\n}\n.col--align-stretch {\n  align-self: stretch;\n}\n.col--align-top {\n  align-self: flex-start;\n}\n.col.col--order-1 {\n  order: 1;\n}\n.col.col--order-2 {\n  order: 2;\n}\n.col.col--order-3 {\n  order: 3;\n}\n.col.col--order-4 {\n  order: 4;\n}\n.col.col--order-5 {\n  order: 5;\n}\n.col.col--order-6 {\n  order: 6;\n}\n.col.col--order-7 {\n  order: 7;\n}\n.col.col--order-8 {\n  order: 8;\n}\n.col.col--order-9 {\n  order: 9;\n}\n.col.col--order-10 {\n  order: 10;\n}\n.col.col--order-11 {\n  order: 11;\n}\n.col.col--order-12 {\n  order: 12;\n}\n.col.col--sm-1 {\n  width: 100%;\n}\n.col.col--sm-2 {\n  width: 100%;\n}\n.col.col--sm-3 {\n  width: 100%;\n}\n.col.col--sm-4 {\n  width: 100%;\n}\n.col.col--sm-5 {\n  width: 100%;\n}\n.col.col--sm-6 {\n  width: 100%;\n}\n.col.col--sm-7 {\n  width: 100%;\n}\n.col.col--sm-8 {\n  width: 100%;\n}\n.col.col--sm-9 {\n  width: 100%;\n}\n.col.col--sm-10 {\n  width: 100%;\n}\n.col.col--sm-11 {\n  width: 100%;\n}\n.col.col--sm-12 {\n  width: 100%;\n}\n.col.col--sm-1 {\n  flex: 0 0 8.3333333333%;\n  max-width: 8.3333333333%;\n}\n.col.col--sm-order-1 {\n  order: 1;\n}\n.col.col--sm-2 {\n  flex: 0 0 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n.col.col--sm-order-2 {\n  order: 2;\n}\n.col.col--sm-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n.col.col--sm-order-3 {\n  order: 3;\n}\n.col.col--sm-4 {\n  flex: 0 0 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n.col.col--sm-order-4 {\n  order: 4;\n}\n.col.col--sm-5 {\n  flex: 0 0 41.6666666667%;\n  max-width: 41.6666666667%;\n}\n.col.col--sm-order-5 {\n  order: 5;\n}\n.col.col--sm-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n.col.col--sm-order-6 {\n  order: 6;\n}\n.col.col--sm-7 {\n  flex: 0 0 58.3333333333%;\n  max-width: 58.3333333333%;\n}\n.col.col--sm-order-7 {\n  order: 7;\n}\n.col.col--sm-8 {\n  flex: 0 0 66.6666666667%;\n  max-width: 66.6666666667%;\n}\n.col.col--sm-order-8 {\n  order: 8;\n}\n.col.col--sm-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n.col.col--sm-order-9 {\n  order: 9;\n}\n.col.col--sm-10 {\n  flex: 0 0 83.3333333333%;\n  max-width: 83.3333333333%;\n}\n.col.col--sm-order-10 {\n  order: 10;\n}\n.col.col--sm-11 {\n  flex: 0 0 91.6666666667%;\n  max-width: 91.6666666667%;\n}\n.col.col--sm-order-11 {\n  order: 11;\n}\n.col.col--sm-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.col.col--sm-order-12 {\n  order: 12;\n}\n.col.col--md-1 {\n  width: 100%;\n}\n.col.col--md-2 {\n  width: 100%;\n}\n.col.col--md-3 {\n  width: 100%;\n}\n.col.col--md-4 {\n  width: 100%;\n}\n.col.col--md-5 {\n  width: 100%;\n}\n.col.col--md-6 {\n  width: 100%;\n}\n.col.col--md-7 {\n  width: 100%;\n}\n.col.col--md-8 {\n  width: 100%;\n}\n.col.col--md-9 {\n  width: 100%;\n}\n.col.col--md-10 {\n  width: 100%;\n}\n.col.col--md-11 {\n  width: 100%;\n}\n.col.col--md-12 {\n  width: 100%;\n}\n@media (min-width: 640px) {\n.col.col--md-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n}\n.col.col--md-order-1 {\n    order: 1;\n}\n.col.col--md-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n}\n.col.col--md-order-2 {\n    order: 2;\n}\n.col.col--md-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n.col.col--md-order-3 {\n    order: 3;\n}\n.col.col--md-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n}\n.col.col--md-order-4 {\n    order: 4;\n}\n.col.col--md-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n}\n.col.col--md-order-5 {\n    order: 5;\n}\n.col.col--md-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n.col.col--md-order-6 {\n    order: 6;\n}\n.col.col--md-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n}\n.col.col--md-order-7 {\n    order: 7;\n}\n.col.col--md-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n}\n.col.col--md-order-8 {\n    order: 8;\n}\n.col.col--md-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n}\n.col.col--md-order-9 {\n    order: 9;\n}\n.col.col--md-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n}\n.col.col--md-order-10 {\n    order: 10;\n}\n.col.col--md-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n}\n.col.col--md-order-11 {\n    order: 11;\n}\n.col.col--md-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.col.col--md-order-12 {\n    order: 12;\n}\n}\n.col.col--lg-1 {\n  width: 100%;\n}\n.col.col--lg-2 {\n  width: 100%;\n}\n.col.col--lg-3 {\n  width: 100%;\n}\n.col.col--lg-4 {\n  width: 100%;\n}\n.col.col--lg-5 {\n  width: 100%;\n}\n.col.col--lg-6 {\n  width: 100%;\n}\n.col.col--lg-7 {\n  width: 100%;\n}\n.col.col--lg-8 {\n  width: 100%;\n}\n.col.col--lg-9 {\n  width: 100%;\n}\n.col.col--lg-10 {\n  width: 100%;\n}\n.col.col--lg-11 {\n  width: 100%;\n}\n.col.col--lg-12 {\n  width: 100%;\n}\n@media (min-width: 1024px) {\n.col.col--lg-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n}\n.col.col--lg-order-1 {\n    order: 1;\n}\n.col.col--lg-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n}\n.col.col--lg-order-2 {\n    order: 2;\n}\n.col.col--lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n.col.col--lg-order-3 {\n    order: 3;\n}\n.col.col--lg-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n}\n.col.col--lg-order-4 {\n    order: 4;\n}\n.col.col--lg-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n}\n.col.col--lg-order-5 {\n    order: 5;\n}\n.col.col--lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n.col.col--lg-order-6 {\n    order: 6;\n}\n.col.col--lg-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n}\n.col.col--lg-order-7 {\n    order: 7;\n}\n.col.col--lg-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n}\n.col.col--lg-order-8 {\n    order: 8;\n}\n.col.col--lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n}\n.col.col--lg-order-9 {\n    order: 9;\n}\n.col.col--lg-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n}\n.col.col--lg-order-10 {\n    order: 10;\n}\n.col.col--lg-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n}\n.col.col--lg-order-11 {\n    order: 11;\n}\n.col.col--lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.col.col--lg-order-12 {\n    order: 12;\n}\n}\n.col.col--xl-1 {\n  width: 100%;\n}\n.col.col--xl-2 {\n  width: 100%;\n}\n.col.col--xl-3 {\n  width: 100%;\n}\n.col.col--xl-4 {\n  width: 100%;\n}\n.col.col--xl-5 {\n  width: 100%;\n}\n.col.col--xl-6 {\n  width: 100%;\n}\n.col.col--xl-7 {\n  width: 100%;\n}\n.col.col--xl-8 {\n  width: 100%;\n}\n.col.col--xl-9 {\n  width: 100%;\n}\n.col.col--xl-10 {\n  width: 100%;\n}\n.col.col--xl-11 {\n  width: 100%;\n}\n.col.col--xl-12 {\n  width: 100%;\n}\n@media (min-width: 1280px) {\n.col.col--xl-1 {\n    flex: 0 0 8.3333333333%;\n    max-width: 8.3333333333%;\n}\n.col.col--xl-order-1 {\n    order: 1;\n}\n.col.col--xl-2 {\n    flex: 0 0 16.6666666667%;\n    max-width: 16.6666666667%;\n}\n.col.col--xl-order-2 {\n    order: 2;\n}\n.col.col--xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n.col.col--xl-order-3 {\n    order: 3;\n}\n.col.col--xl-4 {\n    flex: 0 0 33.3333333333%;\n    max-width: 33.3333333333%;\n}\n.col.col--xl-order-4 {\n    order: 4;\n}\n.col.col--xl-5 {\n    flex: 0 0 41.6666666667%;\n    max-width: 41.6666666667%;\n}\n.col.col--xl-order-5 {\n    order: 5;\n}\n.col.col--xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n.col.col--xl-order-6 {\n    order: 6;\n}\n.col.col--xl-7 {\n    flex: 0 0 58.3333333333%;\n    max-width: 58.3333333333%;\n}\n.col.col--xl-order-7 {\n    order: 7;\n}\n.col.col--xl-8 {\n    flex: 0 0 66.6666666667%;\n    max-width: 66.6666666667%;\n}\n.col.col--xl-order-8 {\n    order: 8;\n}\n.col.col--xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n}\n.col.col--xl-order-9 {\n    order: 9;\n}\n.col.col--xl-10 {\n    flex: 0 0 83.3333333333%;\n    max-width: 83.3333333333%;\n}\n.col.col--xl-order-10 {\n    order: 10;\n}\n.col.col--xl-11 {\n    flex: 0 0 91.6666666667%;\n    max-width: 91.6666666667%;\n}\n.col.col--xl-order-11 {\n    order: 11;\n}\n.col.col--xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.col.col--xl-order-12 {\n    order: 12;\n}\n}\n.i-width-sm-1 {\n  width: 8.3333333333%;\n}\n.i-width-sm-2 {\n  width: 16.6666666667%;\n}\n.i-width-sm-3 {\n  width: 25%;\n}\n.i-width-sm-4 {\n  width: 33.3333333333%;\n}\n.i-width-sm-5 {\n  width: 41.6666666667%;\n}\n.i-width-sm-6 {\n  width: 50%;\n}\n.i-width-sm-7 {\n  width: 58.3333333333%;\n}\n.i-width-sm-8 {\n  width: 66.6666666667%;\n}\n.i-width-sm-9 {\n  width: 75%;\n}\n.i-width-sm-10 {\n  width: 83.3333333333%;\n}\n.i-width-sm-11 {\n  width: 91.6666666667%;\n}\n.i-width-sm-12 {\n  width: 100%;\n}\n@media (min-width: 640px) {\n.i-width-md-1 {\n    width: 8.3333333333%;\n}\n.i-width-md-2 {\n    width: 16.6666666667%;\n}\n.i-width-md-3 {\n    width: 25%;\n}\n.i-width-md-4 {\n    width: 33.3333333333%;\n}\n.i-width-md-5 {\n    width: 41.6666666667%;\n}\n.i-width-md-6 {\n    width: 50%;\n}\n.i-width-md-7 {\n    width: 58.3333333333%;\n}\n.i-width-md-8 {\n    width: 66.6666666667%;\n}\n.i-width-md-9 {\n    width: 75%;\n}\n.i-width-md-10 {\n    width: 83.3333333333%;\n}\n.i-width-md-11 {\n    width: 91.6666666667%;\n}\n.i-width-md-12 {\n    width: 100%;\n}\n}\n@media (min-width: 1024px) {\n.i-width-lg-1 {\n    width: 8.3333333333%;\n}\n.i-width-lg-2 {\n    width: 16.6666666667%;\n}\n.i-width-lg-3 {\n    width: 25%;\n}\n.i-width-lg-4 {\n    width: 33.3333333333%;\n}\n.i-width-lg-5 {\n    width: 41.6666666667%;\n}\n.i-width-lg-6 {\n    width: 50%;\n}\n.i-width-lg-7 {\n    width: 58.3333333333%;\n}\n.i-width-lg-8 {\n    width: 66.6666666667%;\n}\n.i-width-lg-9 {\n    width: 75%;\n}\n.i-width-lg-10 {\n    width: 83.3333333333%;\n}\n.i-width-lg-11 {\n    width: 91.6666666667%;\n}\n.i-width-lg-12 {\n    width: 100%;\n}\n}\n@media (min-width: 1280px) {\n.i-width-xl-1 {\n    width: 8.3333333333%;\n}\n.i-width-xl-2 {\n    width: 16.6666666667%;\n}\n.i-width-xl-3 {\n    width: 25%;\n}\n.i-width-xl-4 {\n    width: 33.3333333333%;\n}\n.i-width-xl-5 {\n    width: 41.6666666667%;\n}\n.i-width-xl-6 {\n    width: 50%;\n}\n.i-width-xl-7 {\n    width: 58.3333333333%;\n}\n.i-width-xl-8 {\n    width: 66.6666666667%;\n}\n.i-width-xl-9 {\n    width: 75%;\n}\n.i-width-xl-10 {\n    width: 83.3333333333%;\n}\n.i-width-xl-11 {\n    width: 91.6666666667%;\n}\n.i-width-xl-12 {\n    width: 100%;\n}\n}\n.sticky {\n  /* Double position is specified due to E11-compability.\n  `fixed` is used by IE11.\n  `sticky` is used by other web browsers. */\n  position: fixed;\n  position: sticky;\n  z-index: 9999;\n}\n.sticky--top {\n  right: 0;\n  top: 0;\n  left: 0;\n}\n.density-default {\n  --f-density-factor: 1;\n}\n.density-dense {\n  --f-density-factor: 0.8;\n}\n.density-densest {\n  --f-density-factor: 0.6;\n}\n.formatter--date, .formatter--date-full, .formatter--date-long, .formatter--date-range, .formatter--text {\n  white-space: nowrap;\n}\n.formatter--bankgiro, .formatter--number, .formatter--orgnr, .formatter--plusgiro, .formatter--pnr, .formatter--postnummer {\n  white-space: nowrap;\n  font-feature-settings: "tnum";\n}\n.offline .icon, .icon, .offline .icon-stack, .icon-stack,\n.icon--stack {\n  display: inline-block;\n  height: var(--f-icon-size-small);\n  max-height: 100%;\n  max-width: 100%;\n  pointer-events: none;\n  width: var(--f-icon-size-small);\n}\n.select-field__icon, .label__icon {\n  display: inline;\n  height: var(--f-icon-size-large);\n  position: absolute;\n  right: 0.75rem;\n  top: calc(0.5rem * var(--f-density-factor));\n  transition: opacity var(--f-animation-duration-medium) ease-in-out;\n  width: var(--f-icon-size-large);\n}\n.offline .icon-stack, .icon-stack,\n.icon--stack {\n  position: relative;\n}\n.icon-stack .icon,\n.icon--stack .icon {\n  position: absolute;\n}\n.icon--flip-horizontal {\n  transform: scaleX(-1);\n}\n.icon--flip-vertical {\n  transform: scaleY(-1);\n}\n.icon--rotate-90 {\n  transform: rotate(90deg);\n}\n.icon--rotate-180 {\n  transform: rotate(180deg);\n}\n.icon--rotate-270 {\n  transform: rotate(270deg);\n}\n.icon-stack--new-window .icon.f-icon-new-window,\n.icon--new-window .icon.f-icon-new-window {\n  width: 55%;\n  height: 55%;\n  top: 0;\n  right: 0;\n}\n.icon-stack--new-window .icon:not(.f-icon-new-window),\n.icon--new-window .icon:not(.f-icon-new-window) {\n  width: 83%;\n  height: 83%;\n  bottom: 0;\n  left: 5%;\n}\n.icon-stack--tooltip .f-icon-circle,\n.icon--stack--tooltip .f-icon-circle {\n  fill: var(--f-icon-color-info);\n  color: var(--f-icon-color-info);\n}\n.icon-stack--tooltip .f-icon-i,\n.icon--stack--tooltip .f-icon-i {\n  color: var(--f-icon-color-white);\n}\n.icon-stack--info .f-icon-circle,\n.icon--stack--info .f-icon-circle {\n  color: var(--fkds-icon-color-feedback-background-info);\n  fill: var(--fkds-icon-color-feedback-border-info);\n}\n.icon-stack--warning .f-icon-circle,\n.icon--stack--warning .f-icon-circle {\n  color: var(--fkds-icon-color-feedback-background-warning);\n  fill: var(--fkds-icon-color-feedback-border-warning);\n}\n.icon-stack--error .f-icon-triangle,\n.icon--stack--error .f-icon-triangle {\n  color: var(--fkds-icon-color-feedback-background-negative);\n  fill: var(--fkds-icon-color-feedback-border-negative);\n}\n.icon-stack--success .f-icon-circle,\n.icon--stack--success .f-icon-circle {\n  color: var(--fkds-icon-color-feedback-background-positive);\n  fill: var(--fkds-icon-color-feedback-border-positive);\n}\n.icon-stack--success .f-icon-success,\n.icon--stack--success .f-icon-success {\n  transform: scale(0.6);\n}\n.icon-stack--large,\n.icon--stack--large {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n.icon-stack--large svg,\n.icon--stack--large svg {\n  width: 100%;\n  height: 100%;\n}\n.icon-stack--circle, .icon-stack--circle-bottom,\n.icon--stack--circle,\n.icon--stack--circle-bottom {\n  width: 4rem;\n  height: 4rem;\n  border-radius: 100%;\n  overflow: hidden;\n}\n.icon-stack--circle .f-icon-circle, .icon-stack--circle-bottom .f-icon-circle,\n.icon--stack--circle .f-icon-circle,\n.icon--stack--circle-bottom .f-icon-circle {\n  color: var(--f-icon-color-success-background);\n  fill: var(--f-icon-color-success-background);\n  width: 100%;\n  height: 100%;\n}\n.icon-stack--circle .icon:not(.f-icon-circle), .icon-stack--circle-bottom .icon:not(.f-icon-circle),\n.icon--stack--circle .icon:not(.f-icon-circle),\n.icon--stack--circle-bottom .icon:not(.f-icon-circle) {\n  color: var(--f-icon-color-success);\n  position: absolute;\n}\n.icon-stack--circle .icon:not(.f-icon-circle),\n.icon--stack--circle .icon:not(.f-icon-circle) {\n  width: 70%;\n  height: 70%;\n  inset: 0;\n  margin: auto;\n}\n.icon-stack--circle-bottom .icon:not(.f-icon-circle),\n.icon--stack--circle-bottom .icon:not(.f-icon-circle) {\n  width: 80%;\n  height: 80%;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  bottom: 0%;\n}\n.expandable-panel {\n  margin-bottom: calc(2rem * var(--f-density-factor));\n}\n.expandable-panel__icon {\n  border-radius: 50%;\n  background-color: var(--f-icon-color-expandable-panel);\n  width: var(--f-icon-size-medium);\n  height: var(--f-icon-size-medium);\n  margin-top: calc((var(--f-line-height-medium) * 1em - var(--f-icon-size-medium)) / 2);\n  display: flex;\n  color: var(--f-background-heading-expandable-panel);\n  padding: 3px;\n  flex-shrink: 0;\n  margin-right: 0.5rem;\n}\n.expandable-panel__icon .icon {\n  transition: transform var(--f-animation-duration-long) ease;\n}\n.expandable-panel.expandable-panel--expanded .expandable-panel__icon svg:nth-child(2) {\n  transform: rotate(0);\n}\n.expandable-panel.expandable-panel--expanded .expandable-panel__content {\n  height: auto;\n}\n.expandable-panel.expandable-panel--expanded .expandable-panel__heading button {\n  border: var(--f-expandable-panel-heading-border-open);\n}\n.expandable-panel.expandable-panel--collapsed .expandable-panel__icon svg:nth-child(2) {\n  transform: rotate(-90deg);\n}\n.expandable-panel__heading {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n  margin-bottom: 0 !important;\n}\n.expandable-panel__heading button {\n  background-color: var(--f-background-heading-expandable-panel);\n  border: var(--f-expandable-panel-heading-border-close);\n  border-radius: var(--f-expandable-panel-heading-border-radius);\n  color: var(--f-text-color-heading-expandable-panel);\n  cursor: pointer;\n  display: flex;\n  margin: 0;\n  padding: calc(1rem * var(--f-density-factor)) 1rem;\n  position: relative;\n  text-align: left;\n  width: 100%;\n}\n.expandable-panel__heading button:focus, .expandable-panel__heading button:hover {\n  background-color: var(--f-background-heading-expandable-panel-hover);\n}\n.expandable-panel__notification {\n  border-radius: 50%;\n  background-color: var(--f-icon-color-notice);\n  border: var(--f-border-width-medium) solid var(--f-icon-color-white);\n  width: var(--f-icon-size-x-large);\n  height: var(--f-icon-size-x-large);\n  display: inline-block;\n  padding: 0.27rem;\n  position: absolute;\n  right: 1.5rem;\n  top: -0.75rem;\n  line-height: 0;\n}\n.expandable-panel__notification svg {\n  color: var(--f-icon-color-white);\n  height: auto;\n  width: auto;\n}\n.expandable-panel__content {\n  height: 0;\n  overflow: hidden;\n  transition: height var(--f-animation-duration-medium) ease-in;\n}\n.expandable-panel__body {\n  background-color: var(--f-background-expandable-panel);\n  border: var(--f-border-width-medium) solid var(--f-border-color-panel);\n  border-top: 0;\n  line-height: inherit;\n  padding: calc(1.5rem * var(--f-density-factor)) 1.5rem;\n}\n.entrypoint {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n  background-color: var(--fkds-color-action-background-primary-default);\n  color: var(--fkds-color-action-text-inverted-default);\n  border: var(--f-border-width-medium) solid transparent;\n  border-radius: var(--f-border-radius-medium);\n  box-shadow: var(--f-button-shadow);\n  font-size: var(--f-font-size-standard);\n  font-weight: var(--f-font-weight-medium);\n  transition: background-color var(--f-animation-duration-medium) ease-out;\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  margin-bottom: calc(1.5rem * var(--f-density-factor));\n  margin-top: calc(0.25rem * var(--f-density-factor));\n  text-align: left;\n  padding: calc(1rem * var(--f-density-factor)) 1rem;\n  line-height: var(--f-line-height-large);\n  width: 100%;\n}\n.entrypoint__icon {\n  margin-left: 2rem;\n  flex-shrink: 0;\n}\n.entrypoint:hover {\n  background-color: var(--fkds-color-action-background-primary-hover);\n}\n.page-header {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  color: var(--f-text-color-default-inverted);\n  background-color: var(--f-background-pageheader-primary);\n  padding: 1rem 0 1rem 1rem;\n  align-items: center;\n  overflow: hidden;\n}\n.page-header__logo {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  align-items: center;\n  box-sizing: border-box;\n}\n.page-header__logo > a {\n  display: inline-flex;\n}\n.page-header__logo::after {\n  content: " ";\n  background-color: var(--f-border-color-separator-pageheader-primary);\n  height: 1.38rem;\n  padding: 0.5px;\n  margin: 0 1rem 0.155rem;\n}\n.page-header__app-name {\n  padding-top: 0.22rem;\n  margin: 0;\n  font-size: var(--f-font-size-h3);\n  font-weight: var(--f-font-weight-medium);\n  color: var(--f-text-color-default-inverted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 9rem;\n}\n.page-header__right {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-grow: 1;\n  white-space: nowrap;\n  padding-top: 0.4rem;\n  font-size: var(--f-font-size-standard);\n}\n.page-header__right-slot {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.card {\n  padding: calc(1rem * var(--f-density-factor)) 1rem;\n  margin: calc(1rem * var(--f-density-factor)) 0;\n}\n.card--default {\n  background-color: var(--fkds-color-background-primary);\n  border-radius: var(--f-border-radius-medium);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-primary);\n}\n.card--error {\n  border-radius: var(--f-border-radius-medium);\n  border: var(--f-border-width-medium) solid var(--fkds-color-feedback-border-negative);\n}\n.card__content {\n  color: var(--fkds-color-text-primary);\n}\n.card__content > p:last-child,\n.card__content > div:last-child {\n  margin-bottom: 0;\n}\n.card__content > p:last-child > *:last-child,\n.card__content > div:last-child > *:last-child {\n  margin-bottom: 0;\n}\n.card__header-label {\n  color: var(--fkds-color-text-primary);\n  font-size: var(--f-font-size-large);\n  font-weight: var(--f-font-weight-bold);\n  line-height: var(--f-line-height-large);\n  margin-bottom: calc(0.25rem * var(--f-density-factor));\n  display: block;\n}\n.card__footer {\n  padding-top: calc(1.25rem * var(--f-density-factor));\n}\n.card__footer > .button-group {\n  margin-bottom: 0;\n}\n.card__footer > .button-group .button-group__item {\n  margin-bottom: 0 !important;\n}\n.card__error-message {\n  color: var(--f-text-color-error);\n}\n.anchor, .file-item__file-open {\n  color: var(--f-text-color-link);\n  text-decoration: underline;\n  text-decoration-thickness: 2px;\n  text-underline-offset: 0.25em;\n  text-decoration-color: var(--f-text-color-link);\n  font-weight: var(--f-font-weight-medium);\n}\n.anchor:hover, .file-item__file-open:hover {\n  color: var(--f-text-color-link-hover);\n  text-decoration-color: var(--f-border-color-link-hover);\n}\n.anchor.anchor--block, .file-item__file-open {\n  display: inline-flex;\n}\n.anchor.anchor--block > svg, .file-item__file-open > svg, .anchor.anchor--block > .icon-stack, .file-item__file-open > .icon-stack {\n  flex-shrink: 0;\n  margin: calc((var(--f-line-height-large) * 1rem - var(--f-icon-size-small)) / 2) 0.25rem 0;\n}\n.anchor.anchor--discrete, .anchor--discrete.file-item__file-open {\n  color: var(--f-text-color-link-discrete);\n  text-decoration-color: var(--f-border-color-link-discrete);\n}\n.anchor.anchor--discrete:hover, .anchor--discrete.file-item__file-open:hover {\n  color: var(--f-text-color-link-discrete-hover);\n  text-decoration-color: var(--f-text-color-link-discrete-hover);\n}\n.badge {\n  border-radius: var(--f-border-radius-medium);\n  border-style: solid;\n  border-width: var(--f-border-width-small);\n  box-sizing: border-box;\n  display: inline-block;\n  font-size: var(--f-font-size-standard);\n  line-height: calc(var(--f-line-height-large) * var(--f-density-factor));\n  font-weight: var(--f-font-weight-normal);\n  padding: 0 0.5rem;\n}\n.badge--default {\n  color: var(--fkds-color-text-primary);\n  background-color: var(--fkds-color-feedback-background-neutral-strong);\n  border-color: var(--fkds-color-feedback-background-neutral-strong);\n}\n.badge--default-inverted {\n  color: var(--fkds-color-text-primary);\n  background-color: var(--fkds-color-feedback-background-neutral);\n  border-color: var(--fkds-color-feedback-border-neutral);\n}\n.badge--warning {\n  color: var(--fkds-color-text-primary);\n  background-color: var(--fkds-color-feedback-background-warning-strong);\n  border-color: var(--fkds-color-feedback-background-warning-strong);\n}\n.badge--warning-inverted {\n  color: var(--fkds-color-text-primary);\n  background-color: var(--fkds-color-feedback-background-warning);\n  border-color: var(--fkds-color-feedback-border-warning);\n}\n.badge--error {\n  color: var(--fkds-color-text-inverted);\n  background-color: var(--fkds-color-feedback-background-negative-strong);\n  border-color: var(--fkds-color-feedback-background-negative-strong);\n}\n.badge--error-inverted {\n  color: var(--fkds-color-text-primary);\n  background-color: var(--fkds-color-feedback-background-negative);\n  border-color: var(--fkds-color-feedback-border-negative);\n}\n.badge--success {\n  color: var(--fkds-color-text-inverted);\n  background-color: var(--fkds-color-feedback-background-positive-strong);\n  border-color: var(--fkds-color-feedback-background-positive-strong);\n}\n.badge--success-inverted {\n  color: var(--fkds-color-text-primary);\n  background-color: var(--fkds-color-feedback-background-positive);\n  border-color: var(--fkds-color-feedback-border-positive);\n}\n.badge--info {\n  color: var(--fkds-color-text-inverted);\n  background-color: var(--fkds-color-feedback-background-info-strong);\n  border-color: var(--fkds-color-feedback-background-info-strong);\n}\n.badge--info-inverted {\n  color: var(--fkds-color-text-primary);\n  background-color: var(--fkds-color-feedback-background-info);\n  border-color: var(--fkds-color-feedback-border-info);\n}\n.button-group {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: calc(0.5rem * var(--f-density-factor));\n  margin-top: calc(0.25rem * var(--f-density-factor));\n}\n.button-group .button-group__item {\n  margin: 0;\n  margin-bottom: calc(1rem * var(--f-density-factor));\n}\n@media (min-width: 640px) {\n.button-group .button-group__item {\n    margin-bottom: calc(1rem * var(--f-density-factor));\n    margin-right: 1.25rem;\n}\n.button-group .button-group__item:last-child {\n    margin-right: 0;\n}\n}\n.button-group > .button.button--discrete, .button-group > .button.button--text {\n  margin-bottom: calc(1rem * var(--f-density-factor));\n  margin-right: 1.5rem;\n}\n.button-group > .button.button--discrete:last-child, .button-group > .button.button--text:last-child {\n  margin-right: 0;\n}\n.button-group > .button.button--small {\n  margin-bottom: calc(0.75rem * var(--f-density-factor));\n  margin-right: 0.75rem;\n}\n.button-group > .button.button--small:last-child {\n  margin-right: 0;\n}\n@media (max-width: 639.98px) {\n.button-group > .button.button--small.button--full-width {\n    margin-right: 0;\n}\n}\n.button-group > .button.button--medium {\n  margin-bottom: calc(0.75rem * var(--f-density-factor));\n  margin-right: 1rem;\n}\n.button-group > .button.button--medium:last-child {\n  margin-right: 0;\n}\n@media (max-width: 639.98px) {\n.button-group > .button.button--medium.button--full-width {\n    margin-right: 0;\n}\n}\n@media (min-width: 640px) {\n.button-group > .button.button--large {\n    margin-bottom: calc(1rem * var(--f-density-factor));\n    margin-right: 1.25rem;\n}\n.button-group > .button.button--large:last-child {\n    margin-right: 0;\n}\n}\n.button-group--end {\n  justify-content: flex-end;\n}\n.button-list {\n  margin-bottom: calc(0.5rem * var(--f-density-factor));\n  margin-top: calc(0.25rem * var(--f-density-factor));\n  padding-left: 0;\n}\n.button-list > li button {\n  margin: 0;\n  margin-bottom: calc(1rem * var(--f-density-factor));\n}\n.button-list > li button.button.button--small, .button-list > li button.button.button--medium {\n  margin-bottom: calc(0.75rem * var(--f-density-factor));\n}\n.button-list > li button.button.button--large {\n  margin-bottom: calc(1rem * var(--f-density-factor));\n}\n.button {\n  border-color: transparent;\n  border-radius: var(--f-border-radius-medium);\n  border-style: solid;\n  border-width: var(--f-border-width-medium);\n  cursor: pointer;\n  display: inline-block;\n  font-size: var(--f-font-size-standard);\n  font-weight: var(--f-font-weight-medium);\n  justify-content: center;\n  letter-spacing: var(--f-button-letter-spacing);\n  line-height: var(--f-button-default-line-height);\n  margin-bottom: calc(1.5rem * var(--f-density-factor));\n  margin-top: calc(0.25rem * var(--f-density-factor));\n  min-width: var(--f-button-min-width);\n  /* stylelint-disable declaration-block-no-redundant-longhand-properties -- readability */\n  padding-top: calc(var(--f-button-default-padding-top) * var(--f-density-factor));\n  padding-right: var(--f-button-default-padding-right);\n  padding-bottom: calc(var(--f-button-default-padding-bottom) * var(--f-density-factor));\n  padding-left: var(--f-button-default-padding-left);\n  /* stylelint-enable declaration-block-no-redundant-longhand-properties */\n  position: relative;\n  text-align: center;\n  transition: background-color var(--f-animation-duration-medium) ease-out;\n}\n@media (max-width: 639.98px) {\n.button {\n    max-width: var(--f-width-full);\n    width: var(--f-width-full);\n}\n}\n.button--text {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n}\n.button--text--black {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n  color: var(--f-text-color-default);\n}\n.button--text--black > .button__icon {\n  color: var(--f-icon-color-black);\n}\n.button {\n  background-color: var(--fkds-color-action-background-secondary-default);\n  border-color: var(--fkds-color-action-border-primary-default);\n  border-width: var(--f-border-width-medium);\n  box-shadow: var(--f-button-shadow);\n  color: var(--f-text-color-button-standard);\n  padding: calc(var(--f-button-standard-padding-top) * var(--f-density-factor)) var(--f-button-standard-padding-right) calc(var(--f-button-standard-padding-bottom) * var(--f-density-factor)) var(--f-button-standard-padding-left);\n}\n.button:hover {\n  background-color: var(--fkds-color-action-background-secondary-hover);\n  border-color: var(--fkds-color-action-border-primary-default);\n  color: var(--f-text-color-button-standard);\n  box-shadow: var(--f-button-shadow-hover);\n}\n.button:active, .button:focus {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n  background-color: var(--fkds-color-action-background-secondary-hover);\n  border-color: var(--fkds-color-action-border-primary-default);\n  color: var(--f-text-color-button-standard);\n}\n.button.disabled, .button.disabled:hover, .button:disabled, .button:disabled:hover, .button.button--disabled, .button.button--disabled:hover {\n  background-color: var(--fkds-color-background-disabled);\n  border-color: var(--fkds-color-border-disabled);\n  color: var(--fkds-color-text-disabled);\n}\n.button.button--primary {\n  background-color: var(--fkds-color-action-background-primary-default);\n  border-color: transparent;\n  border-width: var(--f-border-width-medium);\n  box-shadow: var(--f-button-shadow);\n  color: var(--fkds-color-action-text-inverted-default);\n  padding: calc(var(--f-button-primary-padding-top) * var(--f-density-factor)) var(--f-button-primary-padding-right) calc(var(--f-button-primary-padding-bottom) * var(--f-density-factor)) var(--f-button-primary-padding-left);\n}\n.button.button--primary:hover {\n  background-color: var(--fkds-color-action-background-primary-hover);\n  border-color: transparent;\n  color: var(--fkds-color-action-text-inverted-default);\n  box-shadow: var(--f-button-shadow-hover);\n}\n.button.button--primary:active, .button.button--primary:focus {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n  background-color: var(--fkds-color-action-background-primary-hover);\n  border-color: transparent;\n  color: var(--fkds-color-action-text-inverted-default);\n}\n.button.button--primary.disabled, .button.button--primary.disabled:hover, .button.button--primary:disabled, .button.button--primary:disabled:hover, .button.button--primary.button--disabled, .button.button--primary.button--disabled:hover {\n  background-color: var(--fkds-color-background-disabled);\n  border-color: var(--fkds-color-border-disabled);\n  color: var(--fkds-color-text-disabled);\n}\n.button.button--secondary {\n  background-color: var(--fkds-color-action-background-secondary-default);\n  border-color: var(--fkds-color-action-border-primary-default);\n  border-width: var(--f-border-width-medium);\n  box-shadow: var(--f-button-shadow);\n  color: var(--fkds-color-action-text-primary-default);\n  padding: calc(var(--f-button-secondary-padding-top) * var(--f-density-factor)) var(--f-button-secondary-padding-right) calc(var(--f-button-secondary-padding-bottom) * var(--f-density-factor)) var(--f-button-secondary-padding-left);\n}\n.button.button--secondary:hover {\n  background-color: var(--fkds-color-action-background-secondary-hover);\n  border-color: var(--fkds-color-action-border-primary-default);\n  color: var(--fkds-color-action-text-primary-default);\n  box-shadow: var(--f-button-shadow-hover);\n}\n.button.button--secondary:active, .button.button--secondary:focus {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n  background-color: var(--fkds-color-action-background-secondary-hover);\n  border-color: var(--fkds-color-action-border-primary-default);\n  color: var(--fkds-color-action-text-primary-default);\n}\n.button.button--secondary.disabled, .button.button--secondary.disabled:hover, .button.button--secondary:disabled, .button.button--secondary:disabled:hover, .button.button--secondary.button--disabled, .button.button--secondary.button--disabled:hover {\n  background-color: var(--fkds-color-background-disabled);\n  border-color: var(--fkds-color-border-disabled);\n  color: var(--fkds-color-text-disabled);\n}\n.button.button--discrete, .button.button--text {\n  width: inherit;\n  min-width: 0;\n  font-weight: var(--f-font-weight-bold);\n  outline-offset: 0.25rem;\n  line-height: calc(1.25 * var(--f-font-size-standard));\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 0;\n  box-shadow: none;\n  color: var(--f-text-color-button-discrete);\n  padding: calc(var(--f-button-discrete-padding-top) * var(--f-density-factor)) var(--f-button-discrete-padding-right) calc(var(--f-button-discrete-padding-bottom) * var(--f-density-factor)) var(--f-button-discrete-padding-left);\n}\n.button.button--discrete:hover, .button.button--text:hover {\n  background-color: var(--f-background-button-discrete-hover);\n  border-color: transparent;\n  color: var(--f-text-color-button-discrete-hover);\n  box-shadow: var(--f-button-shadow-hover);\n}\n.button.button--discrete:active, .button.button--text:active, .button.button--discrete:focus, .button.button--text:focus {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n  background-color: var(--f-background-button-discrete-hover);\n  border-color: transparent;\n  color: var(--f-text-color-button-discrete-hover);\n}\n.button.button--discrete.disabled, .button.disabled.button--text, .button.button--discrete.disabled:hover, .button.button--discrete:disabled, .button.button--text:disabled, .button.button--discrete:disabled:hover, .button.button--discrete.button--disabled, .button.button--disabled.button--text, .button.button--discrete.button--disabled:hover {\n  background-color: transparent;\n  border-color: transparent;\n  color: var(--f-text-color-button-discrete-disabled);\n}\n@media (max-width: 639.98px) {\n.button.button--discrete, .button.button--text {\n    width: auto;\n}\n}\n.button.button--discrete--black, .button.button--text--black {\n  /* stylelint-disable declaration-block-no-redundant-longhand-properties -- readability */\n  padding-top: calc(var(--f-button-discrete-black-padding-top) * var(--f-density-factor));\n  padding-right: var(--f-button-discrete-black-padding-right);\n  padding-bottom: calc(var(--f-button-discrete-black-padding-bottom) * var(--f-density-factor));\n  padding-left: var(--f-button-discrete-black-padding-left);\n  /* stylelint-enable declaration-block-no-redundant-longhand-properties */\n  color: var(--f-text-color-default);\n}\n.button.button--discrete--black > .button__icon, .button.button--text--black > .button__icon {\n  color: var(--f-icon-color-black);\n}\n.button.button--discrete:hover, .button.button--text:hover {\n  box-shadow: none;\n  mix-blend-mode: multiply;\n}\n.button.button--discrete, .button.button--text, .button.button--discrete:focus, .button.button--discrete:active, .button.button--discrete:hover {\n  border-radius: var(--f-button-discrete-radius-hover);\n}\n.button.button--discrete-inverted {\n  width: inherit;\n  min-width: 0;\n  font-weight: var(--f-font-weight-bold);\n  outline-offset: 0.25rem;\n  /* stylelint-disable declaration-block-no-redundant-longhand-properties -- readability */\n  padding-top: calc(var(--f-button-discrete-padding-top) * var(--f-density-factor));\n  padding-right: var(--f-button-discrete-padding-right);\n  padding-bottom: calc(var(--f-button-discrete-padding-bottom) * var(--f-density-factor));\n  padding-left: var(--f-button-discrete-padding-left);\n  /* stylelint-enable declaration-block-no-redundant-longhand-properties */\n  line-height: calc(1.25 * var(--f-font-size-standard));\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 0;\n  box-shadow: none;\n  color: var(--f-text-color-button-discrete-inverted);\n  padding: calc(var(--f-button-discrete-padding-top) * var(--f-density-factor)) var(--f-button-discrete-padding-right) calc(var(--f-button-discrete-padding-bottom) * var(--f-density-factor)) var(--f-button-discrete-padding-left);\n}\n.button.button--discrete-inverted:hover {\n  background-color: transparent;\n  border-color: transparent;\n  color: var(--f-text-color-button-discrete-inverted-hover);\n  box-shadow: var(--f-button-shadow-hover);\n}\n.button.button--discrete-inverted:active, .button.button--discrete-inverted:focus {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n  background-color: transparent;\n  border-color: transparent;\n  color: var(--f-text-color-button-discrete-inverted-hover);\n}\n.button.button--discrete-inverted.disabled, .button.button--discrete-inverted.disabled:hover, .button.button--discrete-inverted:disabled, .button.button--discrete-inverted:disabled:hover, .button.button--discrete-inverted.button--disabled, .button.button--discrete-inverted.button--disabled:hover {\n  background-color: transparent;\n  border-color: transparent;\n  color: var(--f-text-color-button-discrete-inverted-disabled);\n}\n@media (max-width: 639.98px) {\n.button.button--discrete-inverted {\n    width: auto;\n}\n}\n.button.button--discrete-inverted, .button.button--discrete-inverted:focus, .button.button--discrete-inverted:active, .button.button--discrete-inverted:hover {\n  border-radius: var(--f-button-discrete-radius-hover);\n}\n.button.button--tertiary {\n  width: inherit;\n  min-width: 0;\n  font-weight: var(--f-font-weight-medium);\n  outline-offset: 0.25rem;\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 0;\n  box-shadow: none;\n  color: var(--fkds-color-action-text-primary-default);\n  padding: calc(var(--f-button-tertiary-padding-top) * var(--f-density-factor)) var(--f-button-tertiary-padding-right) calc(var(--f-button-tertiary-padding-bottom) * var(--f-density-factor)) var(--f-button-tertiary-padding-left);\n}\n.button.button--tertiary:hover {\n  background-color: var(--fkds-color-action-background-secondary-hover);\n  border-color: transparent;\n  color: var(--fkds-color-action-text-primary-default);\n  box-shadow: none;\n}\n.button.button--tertiary:active, .button.button--tertiary:focus {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n  background-color: var(--fkds-color-action-background-secondary-hover);\n  border-color: transparent;\n  color: var(--fkds-color-action-text-primary-default);\n}\n.button.button--tertiary.disabled, .button.button--tertiary.disabled:hover, .button.button--tertiary:disabled, .button.button--tertiary:disabled:hover, .button.button--tertiary.button--disabled, .button.button--tertiary.button--disabled:hover {\n  background-color: transparent;\n  border-color: transparent;\n  color: var(--fkds-color-text-disabled);\n}\n@media (max-width: 639.98px) {\n.button.button--tertiary {\n    width: auto;\n}\n}\n.button.button--tertiary--black {\n  color: var(--fkds-color-action-text-secondary-default);\n}\n.button.button--tertiary--black:hover, .button.button--tertiary--black:active, .button.button--tertiary--black:focus {\n  color: var(--fkds-color-action-text-secondary-default);\n}\n.button.button--tertiary--inverted {\n  color: var(--fkds-color-action-text-inverted-default);\n}\n.button.button--tertiary--inverted:hover, .button.button--tertiary--inverted:active, .button.button--tertiary--inverted:focus {\n  color: var(--fkds-color-action-text-inverted-focus);\n  background-color: transparent;\n}\n.button.button--tertiary--inverted:disabled {\n  color: var(--fkds-color-text-disabled);\n  border-width: 0;\n  background-color: transparent;\n}\n.button.button--tertiary--underline {\n  text-decoration: underline;\n  text-decoration-thickness: 2px;\n  text-underline-offset: 4px;\n}\n.button.button--tertiary--underline:disabled {\n  text-decoration: none;\n}\n.button.button--tertiary.button--small {\n  min-width: 24px;\n  padding: calc(0.375rem * var(--f-density-factor)) 0.25rem;\n  text-underline-offset: 3.5px;\n}\n.button.button--tertiary.button--small.button--align-text {\n  margin-left: -0.25rem;\n}\n.button.button--tertiary.button--medium {\n  min-width: 8rem;\n  /* stylelint-disable declaration-block-no-redundant-longhand-properties -- readability */\n  padding-top: calc(var(--f-button-tertiary-padding-top) * var(--f-density-factor));\n  padding-right: var(--f-button-tertiary-padding-right);\n  padding-bottom: calc(var(--f-button-tertiary-padding-bottom) * var(--f-density-factor));\n  padding-left: var(--f-button-tertiary-padding-left);\n  /* stylelint-enable declaration-block-no-redundant-longhand-properties */\n}\n.button.button--tertiary.button--medium.button--align-text {\n  margin-left: -0.5rem;\n}\n.button.button--tertiary.button--large {\n  min-width: var(--f-button-min-width);\n  padding: calc(1.125rem * var(--f-density-factor)) 0.75rem;\n}\n.button.button--tertiary.button--large.button--align-text {\n  margin-left: -0.75rem;\n}\n.button.button--tertiary.button--align-text {\n  margin-left: -0.5rem;\n  min-width: 0;\n}\n@media (max-width: 639.98px) {\n.button.button--tertiary.button--full-width {\n    min-width: var(--f-width-full);\n}\n}\n.button.button--full-width {\n  min-width: var(--f-width-full);\n}\n.button.button--margin-bottom-0 {\n  margin-bottom: 0;\n}\n.button.button--small {\n  font-size: 14px;\n  line-height: 1.25rem;\n  min-width: 4rem;\n  padding: calc(0.25rem * var(--f-density-factor)) 0.75rem;\n}\n@media (max-width: 639.98px) {\n.button.button--small:not(.button--full-width) {\n    width: auto;\n}\n}\n.button.button--small > .button__icon {\n  height: 14px;\n  width: 14px;\n}\n.button.button--medium {\n  line-height: 1.5rem;\n  min-width: 8rem;\n  padding: calc(0.625rem * var(--f-density-factor)) 1.25rem;\n}\n@media (max-width: 639.98px) {\n.button.button--medium:not(.button--full-width) {\n    width: auto;\n}\n}\n.button.button--large {\n  line-height: 1.5rem;\n  min-width: 9.5rem;\n  padding: calc(1rem * var(--f-density-factor)) 1.5rem;\n}\n@media (max-width: 639.98px) {\n.button.button--large {\n    max-width: var(--f-width-full);\n    width: var(--f-width-full);\n}\n}\n.button > .button__icon {\n  margin-right: 0.25rem;\n  transform: translate(0, 15%);\n}\n.button > .button__icon:not(:first-child) {\n  margin-left: 0.25rem;\n  margin-right: 0;\n}\n.button > .button__icon--end {\n  position: absolute;\n  right: 1.25rem;\n}\n.button.disabled, .button.disabled:hover, .button:disabled, .button:disabled:hover, .button.button--disabled {\n  border-width: var(--f-border-width-medium);\n  box-shadow: none;\n  cursor: default;\n}\n.calendar-day {\n  align-items: center;\n  display: inline-flex;\n  font-weight: var(--f-font-weight-medium);\n  justify-content: center;\n  height: 2.75rem;\n  width: 100%;\n}\n.calendar-day--highlight {\n  position: relative;\n}\n.calendar-day--highlight::before {\n  border-radius: 50%;\n  border: var(--f-border-width-small) solid var(--fkds-color-border-strong);\n  width: 2rem;\n  height: 2rem;\n  content: "";\n  position: absolute;\n  border: var(--f-border-width-small) solid var(--fkds-color-border-strong);\n}\n.calendar-day--highlight.calendar-day--selected::before {\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-inverted);\n}\n.calendar-day--highlight:active:not(.calendar-day--highlight--disabled)::before {\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-inverted);\n}\n.calendar-day--highlight.calendar-day--disabled {\n  position: relative;\n}\n.calendar-day--highlight.calendar-day--disabled::before {\n  border-radius: 50%;\n  border: var(--f-border-width-small) solid var(--fkds-color-border-strong);\n  width: 2rem;\n  height: 2rem;\n  content: "";\n  position: absolute;\n  border: var(--f-border-width-small) solid var(--fkds-color-border-strong);\n}\n.calendar-day--highlight.calendar-day--disabled::after {\n  content: "";\n  z-index: 1;\n  position: absolute;\n  border-top: var(--f-border-width-medium) solid;\n  width: 60%;\n}\n.calendar-day--selected {\n  color: var(--fkds-color-text-inverted);\n  background-color: var(--fkds-color-select-background-primary-default);\n}\n.calendar-day--disabled {\n  position: relative;\n}\n.calendar-day--disabled::before {\n  content: "";\n  position: absolute;\n  border-top: var(--f-border-width-medium) solid;\n  width: 60%;\n}\n.calendar-day:hover:not(.calendar-day--disabled, .calendar-day--selected), .calendar-day--hover:not(.calendar-day--disabled, .calendar-day--selected) {\n  background-color: var(--fkds-color-select-background-primary-hover);\n}\n.calendar-day:active:not(.calendar-day--disabled), .calendar-day--active:not(.calendar-day--disabled) {\n  color: var(--fkds-color-text-inverted);\n  background-color: var(--fkds-color-select-background-primary-default);\n}\n.list__item {\n  display: flex;\n  border: var(--f-border-width-medium) solid var(--f-border-color-grid);\n  background: var(--f-background-grid-default);\n}\n.radio-button-group--border .radio-button-group__content .radio-button:not(.disabled):hover, .checkbox-group--border .checkbox-group__content .checkbox:not(.disabled):hover, .list--hover .list__item:not(.disabled):focus-within,\n.list--hover .list__item:not(.disabled):hover, .list__item--hover:not(.disabled) {\n  background: var(--f-background-grid-hover);\n}\n.list--hover .list__item:focus-within.list__item--active,\n.list--hover .list__item:hover.list__item--active, .list__item--active {\n  background: var(--f-background-grid-active);\n}\n.list {\n  margin: 0 0 calc(var(--f-margin-component-bottom) * var(--f-density-factor));\n  padding-left: 0;\n}\n.list__item:not(:last-child) {\n  border-bottom: none;\n}\n.list__item__itempane {\n  width: 100%;\n  padding: calc(var(--f-list-item-itempane-padding) * var(--f-density-factor)) var(--f-list-item-itempane-padding);\n  color: inherit;\n  --f-margin-component-bottom: 0.5rem;\n}\n.list__item__itempane .button {\n  margin-bottom: 0;\n}\n.list__item__itempane ul {\n  list-style-type: disc;\n}\n.list__item__itempane ul ul {\n  list-style-type: circle;\n}\n.list__item__selectpane {\n  padding: calc((var(--f-list-item-itempane-padding) - 0.2rem) * var(--f-density-factor)) 0 calc((var(--f-list-item-itempane-padding) - 0.2rem) * var(--f-density-factor)) calc(var(--f-list-item-itempane-padding) - 0.2rem);\n}\n.list__item__selectpane__input {\n  margin-top: 0.1rem;\n}\n.list__item__selectpane__input .checkbox__label,\n.list__item__selectpane__input .radio-button__label {\n  min-width: 1.75rem;\n  height: 1.75rem;\n  padding: 0;\n}\n.list__item__selectpane__input .checkbox__label::after,\n.list__item__selectpane__input .checkbox__label::before,\n.list__item__selectpane__input .radio-button__label::after,\n.list__item__selectpane__input .radio-button__label::before {\n  top: calc(0.2rem * var(--f-density-factor));\n  left: 0.2rem;\n}\n.list--hover .list__item:focus-within,\n.list--hover .list__item:hover {\n  cursor: pointer;\n}\n.radio-button-group--border .radio-button-group__content .radio-button, .checkbox-group--border .checkbox-group__content .checkbox {\n  border: var(--f-border-width-medium) solid var(--f-border-color-grid);\n  margin-bottom: 0;\n  width: 100%;\n  cursor: pointer;\n  border-bottom: none;\n}\n.radio-button-group--border .radio-button-group__content .radio-button:last-child, .checkbox-group--border .checkbox-group__content .checkbox:last-child {\n  border-bottom: var(--f-border-width-medium) solid var(--f-border-color-grid);\n}\n.radio-button-group--border .radio-button-group__content .radio-button input:focus + label, .checkbox-group--border .checkbox-group__content .checkbox input:focus + label {\n  outline: 2px solid var(--f-border-color-grid);\n  outline-offset: -2px;\n}\n.radio-button-group--border .radio-button-group__content .radio-button input + label::after, .checkbox-group--border .checkbox-group__content .checkbox input + label::after {\n  top: 0.9rem;\n  left: 1rem;\n}\n.radio-button-group--border .radio-button-group__content .radio-button input:checked + label::after, .checkbox-group--border .checkbox-group__content .checkbox input:checked + label::after {\n  top: 0.9rem;\n  left: 1rem;\n}\n.radio-button-group--border .radio-button-group__content .radio-button label::before, .checkbox-group--border .checkbox-group__content .checkbox label::before {\n  top: 0.9rem;\n  left: 1rem;\n}\n.radio-button-group--border .radio-button-group__content .radio-button label, .checkbox-group--border .checkbox-group__content .checkbox label {\n  padding: 1rem;\n  padding-left: 3rem;\n  width: 100%;\n}\n.radio-button__details, .checkbox__details {\n  display: block;\n}\n.radio-button__width, .checkbox__width {\n  width: 100%;\n}\n.checkbox-group__content {\n  display: flex;\n  flex-direction: column;\n}\n.checkbox__label::after {\n  mask-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImNoZWNrYm94LWljb24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgICAgICB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHJlY3QgeD0iMy40NzQiIHk9IjkuMTk0IiBmaWxsPSIjM0M1NTkyIiB3aWR0aD0iMCIgaGVpZ2h0PSIwIi8+CjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTguMzc2LDE1LjAwNWMtMC40MTYsMC0wLjgzMi0wLjE1OC0xLjE0OS0wLjQ3NWwtMy4yNS0zLjI0M2MtMC42MzUtMC42MzQtMC42MzUtMS42NiwwLTIuMjkzCiAgICAgICAgYzAuNjM1LTAuNjMzLDEuNjYzLTAuNjMzLDIuMjk4LDBsMi4xMDEsMi4wOTdsNS4zNTEtNS4zNGMwLjYzNS0wLjYzNCwxLjY2My0wLjYzNCwyLjI5OCwwYzAuNjM1LDAuNjMzLDAuNjM1LDEuNjU5LDAsMi4yOTMKICAgICAgICBsLTYuNSw2LjQ4N0M5LjIwNywxNC44NDcsOC43OTIsMTUuMDA1LDguMzc2LDE1LjAwNXoiLz4KPC9zdmc+Cg==");\n  mask-repeat: no-repeat;\n}\n.checkbox {\n  min-height: var(--f-height-medium);\n  margin-bottom: calc(1rem * var(--f-density-factor));\n}\n.checkbox:last-child {\n  margin-bottom: 0;\n}\n.checkbox__input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  min-height: calc(4 * var(--f-height-medium));\n}\n.checkbox__label {\n  min-width: 4.5rem;\n  display: inline-block;\n  cursor: pointer;\n  font-size: var(--f-font-size-standard);\n  line-height: var(--f-line-height-small);\n  padding-left: 1.75rem;\n  padding-top: 0.1rem;\n  padding-bottom: 0.1rem;\n  position: relative;\n}\n.checkbox__label * {\n  pointer-events: none;\n}\n.checkbox__label::before, .checkbox__label::after {\n  content: "";\n  height: var(--f-icon-size-medium);\n  left: 0;\n  margin: 0.1rem 0;\n  position: absolute;\n  top: 0;\n  width: var(--f-icon-size-medium);\n}\n.checkbox__label::before {\n  background-color: var(--fkds-color-background-primary);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-primary);\n  border-radius: var(--f-border-radius-small);\n  cursor: pointer;\n  display: block;\n  transition: background-color ease var(--f-animation-duration-medium), border-color ease var(--f-animation-duration-medium), opacity ease var(--f-animation-duration-medium);\n}\n.checkbox__label::after {\n  background-color: var(--fkds-icon-color-content-inverted);\n  opacity: 0;\n  transition: opacity ease var(--f-animation-duration-medium);\n}\n@media (forced-colors: active) {\n.checkbox__label::after {\n    background-color: Canvas;\n}\n}\n.checkbox.disabled {\n  color: var(--fkds-color-text-disabled);\n}\n@media (forced-colors: active) {\n.checkbox.disabled {\n    color: GrayText;\n}\n}\n.checkbox.disabled .checkbox__label {\n  cursor: default;\n}\n.checkbox.disabled .checkbox__label::before {\n  background-color: var(--fkds-color-background-disabled);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-disabled);\n  cursor: inherit;\n}\n.checkbox.disabled input[type=checkbox]:checked + label::before {\n  background-color: var(--fkds-color-background-disabled);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-disabled);\n}\n@media (forced-colors: active) {\n.checkbox.disabled input[type=checkbox]:checked + label::before {\n    border-color: GrayText;\n}\n}\n.checkbox.disabled input[type=checkbox]:checked + .checkbox__label::after {\n  background-color: var(--fkds-icon-color-content-disabled);\n}\n.checkbox input[type=checkbox]:checked + label::before {\n  background-color: var(--fkds-color-select-background-primary-default);\n  border: var(--f-border-width-medium) solid transparent;\n}\n@media (forced-colors: active) {\n.checkbox input[type=checkbox]:checked + label::before {\n    background-color: HighLight;\n    border-color: HighLight;\n}\n}\n.checkbox input[type=checkbox]:checked + .checkbox__label::after {\n  opacity: 1;\n}\n.checkbox input[type=checkbox]:focus + .checkbox__label {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n}\n.radio-button-group--chip .radio-button-group__label {\n  margin-bottom: 0.25rem;\n}\n.radio-button-group--chip .radio-button-group__content {\n  margin: -0.25rem;\n}\n.radio-button-group--chip .radio-button {\n  margin: 0;\n  padding: 0.25rem;\n}\n.radio-button-group--chip .radio-button.disabled .radio-button__label {\n  background: var(--fkds-color-background-disabled);\n  border-color: var(--fkds-color-border-primary);\n  color: var(--fkds-color-text-disabled);\n  cursor: not-allowed;\n}\n.radio-button-group--chip .radio-button__label {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  font-weight: var(--f-font-weight-medium);\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-primary);\n  background-color: var(--fkds-color-background-primary);\n  color: var(--fkds-color-text-primary);\n  justify-content: center;\n  max-width: 400px;\n  user-select: none;\n}\n.radio-button-group--chip .radio-button__label::before, .radio-button-group--chip .radio-button__label::after {\n  display: none;\n}\n.radio-button-group--chip .radio-button__label svg {\n  margin-right: 0.5rem;\n}\n.radio-button-group--chip .radio-button__label:hover {\n  border-color: var(--fkds-color-border-primary);\n  background-color: var(--fkds-color-select-background-secondary-hover);\n  color: var(--fkds-color-text-primary);\n}\n.radio-button-group--chip input[type=radio]:checked + .radio-button__label {\n  background: var(--fkds-color-select-background-secondary-default);\n  border-color: transparent;\n  color: var(--fkds-color-text-inverted);\n}\n.radio-button-group--chip input[type=radio]:focus + label.radio-button__label {\n  border-radius: 20px;\n}\n.radio-button-group--chip.radio-button-group--horizontal .radio-button-group__content {\n  flex-flow: row wrap;\n}\n.radio-button-group--chip.radio-button-group--horizontal .radio-button-group__content .radio-button {\n  margin-bottom: 0;\n}\n@media (max-width: 639.98px) {\n.radio-button-group--chip.radio-button-group--horizontal .radio-button-group__content {\n    flex-flow: row wrap;\n}\n.radio-button-group--chip.radio-button-group--horizontal .radio-button-group__content .radio-button {\n    margin-bottom: 0;\n}\n}\n.checkbox-group--chip .checkbox-group__label {\n  margin-bottom: 0.25rem;\n}\n.checkbox-group--chip .checkbox-group__content {\n  margin: -0.25rem;\n}\n.checkbox-group--chip .checkbox {\n  margin: 0;\n  padding: 0.25rem;\n}\n.checkbox-group--chip .checkbox.disabled .checkbox__label {\n  background: var(--fkds-color-background-disabled);\n  border-color: var(--fkds-color-border-primary);\n  color: var(--fkds-color-text-disabled);\n  cursor: not-allowed;\n}\n.checkbox-group--chip .checkbox__label {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  font-weight: var(--f-font-weight-medium);\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-primary);\n  background-color: var(--fkds-color-background-primary);\n  color: var(--fkds-color-text-primary);\n  justify-content: center;\n  max-width: 400px;\n  user-select: none;\n}\n.checkbox-group--chip .checkbox__label::before, .checkbox-group--chip .checkbox__label::after {\n  display: none;\n}\n.checkbox-group--chip .checkbox__label svg {\n  margin-right: 0.5rem;\n}\n.checkbox-group--chip .checkbox__label:hover {\n  border-color: var(--fkds-color-border-primary);\n  background-color: var(--fkds-color-select-background-secondary-hover);\n  color: var(--fkds-color-text-primary);\n}\n.checkbox-group--chip input[type=checkbox]:checked + .checkbox__label {\n  background: var(--fkds-color-select-background-secondary-default);\n  border-color: transparent;\n  color: var(--fkds-color-text-inverted);\n}\n.checkbox-group--chip input[type=checkbox]:focus + label.checkbox__label {\n  border-radius: 20px;\n}\n.checkbox-group--chip.checkbox-group--horizontal .checkbox-group__content {\n  flex-flow: row wrap;\n}\n.checkbox-group--chip.checkbox-group--horizontal .checkbox-group__content .checkbox {\n  margin-bottom: 0;\n}\n@media (max-width: 639.98px) {\n.checkbox-group--chip.checkbox-group--horizontal .checkbox-group__content {\n    flex-flow: row wrap;\n}\n.checkbox-group--chip.checkbox-group--horizontal .checkbox-group__content .checkbox {\n    margin-bottom: 0;\n}\n}\n.close-button {\n  align-items: center;\n  background: inherit;\n  border: none;\n  color: var(--f-text-color-close-button);\n  cursor: pointer;\n  display: flex;\n  font-weight: 700;\n  gap: 0.5rem;\n  margin: 0.375rem;\n  padding: 0.125rem 0.625rem;\n}\n.close-button .icon {\n  min-width: var(--f-icon-size-small);\n}\n.popup .popup__wrapper.combobox__listbox {\n  background-color: var(--fkds-color-background-primary);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-primary);\n  border-radius: var(--f-border-radius-medium);\n  box-shadow: var(--f-box-modal-shadow);\n  margin-top: 4px;\n  margin-bottom: 4px;\n  padding: 2px;\n}\n.combobox__listbox__list {\n  margin: 0;\n  padding: 0;\n}\n.combobox__listbox__option {\n  color: var(--fkds-color-text-primary);\n  cursor: pointer;\n  list-style-type: none;\n  padding: 0.75rem;\n  white-space: nowrap;\n}\n.combobox__listbox__option:hover {\n  background-color: var(--fkds-color-select-background-primary-hover);\n  color: var(--fkds-color-text-primary);\n}\n.combobox__listbox__option--highlight {\n  background-color: var(--fkds-color-select-background-primary-default);\n  color: var(--fkds-color-text-inverted);\n  font-weight: var(--f-font-weight-medium);\n}\n.combobox__button {\n  background: inherit;\n  border: none;\n  color: var(--fkds-icon-color-action-content-primary-default);\n  margin: 0;\n  padding: 0;\n}\n.combobox__button:disabled {\n  color: var(--fkds-icon-color-content-disabled);\n}\n.contextmenu {\n  min-width: 260px;\n  background-color: var(--f-background-popupmenu);\n}\n.contextmenu__list {\n  margin: 0;\n  border: 1px solid var(--f-border-color-popupmenu);\n  padding: 0.5rem;\n  display: block;\n  list-style-type: none;\n}\n.contextmenu__list__item {\n  cursor: pointer;\n  white-space: normal;\n  display: flex;\n  align-items: center;\n  padding: 0.75rem;\n}\n.contextmenu__list__item a,\n.contextmenu__list__item a:visited,\n.contextmenu__list__item a:active {\n  color: var(--f-text-color-popupmenu);\n}\n.contextmenu__list__item:hover {\n  color: var(--f-text-color-popupmenu-hover);\n  background-color: var(--f-background-popupmenu-vertical-hover);\n}\n@media (min-width: 640px) {\n.contextmenu__list__item {\n    white-space: nowrap;\n}\n}\n.contextmenu__separator {\n  margin: 0.75rem;\n  height: 1px;\n  border: none;\n  border-top: 1px solid var(--f-border-color-separator-contextmenu);\n}\n.contextmenu__lefticon {\n  margin-right: 0.75rem;\n  min-width: var(--f-icon-size-small);\n}\n.crud-dataset {\n  margin: 0 0 var(--f-margin-component-bottom);\n}\n.crud-dataset__add-button {\n  margin-bottom: 0 !important;\n  margin-top: 0.5rem !important;\n  margin-left: 2px;\n}\n.crud-dataset .list,\n.crud-dataset .table {\n  margin-bottom: 0;\n}\n.datepicker-field__button {\n  background: transparent;\n  border: 0;\n  border-radius: var(--f-border-radius-medium);\n  flex: 0 0 auto;\n  padding: 0;\n  cursor: pointer;\n}\n.datepicker-field__button .icon {\n  color: var(--fkds-icon-color-action-content-primary-default);\n  min-height: var(--f-icon-size-large);\n  min-width: var(--f-icon-size-large);\n  height: calc(var(--f-icon-size-x-large) * var(--f-density-factor));\n  width: calc(var(--f-icon-size-x-large) * var(--f-density-factor));\n  vertical-align: middle;\n}\n.datepicker-field__button:hover .icon {\n  color: var(--fkds-icon-color-action-content-primary-hover);\n}\n.datepicker-field__button:disabled .icon {\n  color: var(--fkds-icon-color-content-disabled);\n}\n.datepicker-field__popup {\n  margin-top: -16px;\n  border-radius: var(--f-border-radius-medium);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-primary);\n  background-color: var(--fkds-color-background-primary);\n}\n.datepicker-field__close {\n  display: flex;\n  justify-content: flex-end;\n}\n.datepicker-field__close > .datepicker-field__close__button {\n  margin: 0;\n  padding: 1rem;\n}\n.popup--overlay .datepicker-field__popup {\n  width: calc(100vw - 40px);\n  max-width: 28rem;\n}\n.popup--inline .datepicker-field__popup {\n  width: 100%;\n}\n.popup--inline .datepicker-field__table {\n  margin-top: 0;\n}\n.popup--inline .datepicker-field__table .calendar-month__cell {\n  padding: 0;\n  border-bottom: unset;\n}\n.popup--inline .datepicker-field__table .calendar-month__header-cell {\n  background-color: unset;\n  border: unset;\n}\n.dialogue-tree {\n  margin: 0 0 var(--f-margin-component-bottom);\n}\n.dialogue-tree__list {\n  margin-left: 0;\n  padding-left: 0;\n  list-style-type: none;\n  border-radius: 2px;\n  border: 1px solid var(--fkds-color-border-primary);\n}\n.dialogue-tree__list-item {\n  background-color: var(--fkds-color-background-primary);\n  border-bottom: 1px solid var(--fkds-color-border-primary);\n  padding: 0.25em;\n  height: 60px;\n}\n.dialogue-tree__list-item:last-child {\n  border-bottom: none;\n}\n.dialogue-tree__list-item:hover {\n  background-color: var(--fkds-color-action-background-secondary-hover);\n}\n.dialogue-tree__list-item button {\n  padding: 0 0.75em;\n  border: 0;\n  width: 100%;\n  height: 100%;\n  background-color: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.dialogue-tree__list-item button span {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  font-weight: var(--f-font-weight-medium);\n  font-size: var(--f-font-size-standard);\n  color: var(--fkds-color-action-text-secondary-default);\n  text-align: left;\n  cursor: pointer;\n}\n.dialogue-tree__list-item button .icon {\n  flex-shrink: 0;\n  margin-left: 1.25rem;\n}\n.error-list {\n  color: var(--f-text-color-error);\n  margin: 0 0 calc(var(--f-margin-component-bottom) * var(--f-density-factor));\n}\n.error-list--list-style-none {\n  list-style-type: none;\n  padding: 0;\n}\n.error-list--padding-left {\n  padding-left: 1rem;\n}\n.error-list__list {\n  margin: 0;\n  line-height: max(1.5, 2 * var(--f-density-factor));\n}\n.error-list__bullet::before {\n  color: var(--f-text-color-error);\n  content: "\u2022";\n  display: inline;\n  font-size: var(--f-font-size-h4);\n  line-height: 0;\n  margin-right: 0.75rem;\n}\n.error-list__link {\n  color: var(--f-text-color-error);\n  cursor: pointer;\n  list-style-position: inside;\n  text-decoration: underline;\n}\n.error-list__link a {\n  color: var(--f-text-color-error);\n}\n.error-list__icon {\n  max-width: none;\n  position: relative;\n  top: 3px;\n}\n.error-list--list-item {\n  display: list-item;\n}\n.expandable-paragraph {\n  margin: 0 0 calc(var(--f-margin-component-bottom) * var(--f-density-factor));\n}\n.expandable-paragraph__heading {\n  line-height: var(--f-line-height-medium);\n  margin: 0;\n}\n.expandable-paragraph__heading button {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  margin: 0;\n  display: flex;\n  text-align: left;\n  padding: 0;\n  flex-shrink: 0;\n}\n.expandable-paragraph__icon {\n  border-radius: 50%;\n  background-color: var(--f-icon-color-expandable-paragraph);\n  width: var(--f-icon-size-small);\n  height: var(--f-icon-size-small);\n  margin-top: calc((var(--f-line-height-medium) * 1em - var(--f-icon-size-small)) / 2);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  display: flex;\n  color: var(--f-icon-color-white);\n  padding: 3px;\n  flex-shrink: 0;\n  margin-right: 0.5rem;\n}\n.expandable-paragraph__icon .icon {\n  transition: transform var(--f-animation-duration-long) ease;\n}\n.expandable-paragraph.expandable-paragraph--open .expandable-paragraph__icon svg:nth-child(2) {\n  transform: rotate(0);\n}\n.expandable-paragraph.expandable-paragraph--open .expandable-paragraph__container {\n  height: auto;\n}\n.expandable-paragraph.expandable-paragraph--closed .expandable-paragraph__icon svg:nth-child(2) {\n  transform: rotate(-90deg);\n}\n.expandable-paragraph__container {\n  height: 0;\n  overflow: hidden;\n  transition: height var(--f-animation-duration-medium) cubic-bezier(0.46, 0.03, 0.52, 0.96);\n}\n.expandable-paragraph__content, .expandable-paragraph__related-information {\n  margin-left: calc(var(--f-icon-size-small) + 0.5rem);\n}\n.expandable-paragraph__related-information {\n  color: var(--f-text-color-discrete);\n  font-size: 0.875rem;\n}\n.expandable-paragraph__content {\n  margin-top: calc(0.75rem * var(--f-density-factor));\n  margin-bottom: calc(1rem * var(--f-density-factor));\n}\n.expandable-paragraph__separator {\n  border-bottom: var(--f-border-width-medium) solid var(--f-border-color-separator);\n  margin: 0 0.5rem calc(0.5rem * var(--f-density-factor)) 0.5rem;\n}\n.expandable-paragraph--list {\n  margin-bottom: calc(0.5rem * var(--f-density-factor));\n  padding-bottom: calc(0.5rem * var(--f-density-factor));\n  border-bottom: var(--f-border-width-small) solid var(--f-border-color-separator);\n}\n.fieldset {\n  border: 0;\n  margin: 0 0 calc(var(--f-margin-component-bottom) * var(--f-density-factor));\n  min-width: 0;\n  padding: 0;\n  width: var(--f-width-full);\n}\n.fieldset__label {\n  padding: 0;\n  margin-bottom: calc(0.75rem * var(--f-density-factor));\n}\n.fieldset__content {\n  display: flex;\n  flex-direction: column;\n}\n.file-item-list {\n  list-style-type: none;\n  padding-left: 0;\n}\n.file-item .button--discrete {\n  padding: 0;\n  min-width: auto;\n  text-align: left;\n  margin-right: 0.25rem;\n}\n.file-item__row {\n  margin-bottom: 1.25rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.file-item__row button,\n.file-item__row a {\n  margin-bottom: 0;\n}\n.file-item__file-open {\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n  /* stylelint-disable-next-line scss/at-extend-no-missing-placeholder -- technical debt */\n  flex: 0 1 auto;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.file-item__file-remove {\n  flex: 0 0 auto;\n}\n.file-item__file-abort {\n  flex: 0 0 auto;\n}\n.file-item__file-abort svg {\n  color: var(--f-icon-color-error);\n}\n.file-item__change-info {\n  margin-top: -1.25rem;\n}\n.file-item__file-name {\n  margin-left: 0.25rem;\n  min-width: 0;\n  overflow-wrap: break-word;\n  white-space: normal;\n}\n.file-item__separator {\n  margin-bottom: 1.25rem;\n  border: var(--f-border-width-medium) solid var(--f-border-color-separator);\n}\n.file-selector svg {\n  color: var(--f-icon-color-primary);\n}\n.file-selector input[type=file] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.file-selector input[type=file]:focus + label {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n}\n.file-selector label {\n  cursor: pointer;\n}\n.file-selector input:disabled + label {\n  background-color: transparent;\n  border-color: transparent;\n  cursor: default;\n}\n.file-uploader__message-box {\n  margin-top: 1.25rem;\n}\n.form {\n  padding-top: 1rem;\n  padding-bottom: 3rem;\n}\n.form-step {\n  background: var(--f-background-form-step);\n  border: var(--f-border-width-medium) solid var(--f-border-color-form-step);\n  border-radius: var(--f-border-radius-small);\n  margin: 0 0 var(--f-margin-component-bottom);\n  margin-bottom: 2rem;\n  padding: 2rem;\n  position: relative;\n  transition: background-color var(--f-animation-duration-medium) ease-in-out, border-color var(--f-animation-duration-medium) ease-in-out;\n}\n@media (max-width: 639.98px) {\n.form-step {\n    padding: 1.5rem 0.75rem 2rem;\n    margin-left: -0.75rem;\n    margin-right: -0.75rem;\n}\n}\n.form-step--last-step {\n  margin-bottom: 3rem;\n}\n@media (max-width: 639.98px) {\n.form-step--last-step {\n    margin-bottom: 2rem;\n}\n}\n.form-step__header {\n  margin-bottom: 0.5rem;\n}\n.form-step__title {\n  font-size: var(--f-font-size-h2);\n  display: inline;\n}\n@media (max-width: 639.98px) {\n.form-step__title {\n    font-size: var(--f-font-size-xxx-large);\n}\n}\n.form-step__check {\n  transition: opacity var(--f-animation-duration-medium) ease-in-out;\n  color: var(--f-icon-color-success);\n  height: var(--f-icon-size-x-large);\n  margin-bottom: -0.25rem;\n  margin-left: 0.5rem;\n  width: var(--f-icon-size-x-large);\n}\n.form-step__error {\n  color: var(--f-text-color-error);\n}\n.form-step__arrow {\n  position: absolute;\n  left: 3rem;\n  top: 100%;\n}\n.form-step__arrow::before, .form-step__arrow::after {\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  pointer-events: none;\n  z-index: 1;\n  position: absolute;\n}\n.form-step__arrow::after {\n  border-color: none;\n  border-top-color: var(--f-background-form-step);\n  border-width: calc(var(--f-icon-size-small) - var(--f-border-width-medium) * 1.4142);\n  margin-left: calc(-1 * (var(--f-icon-size-small) - var(--f-border-width-medium) * 1.4142));\n}\n.form-step__arrow::before {\n  border-color: none;\n  border-top-color: var(--f-border-color-form-step);\n  border-width: var(--f-icon-size-small);\n  margin-left: calc(-1 * var(--f-icon-size-small));\n}\n@media (max-width: 639.98px) {\n.form-step__arrow {\n    left: 2rem;\n}\n}\n.form-step--complete {\n  background: var(--f-background-success);\n  border-color: var(--f-border-color-success);\n}\n.form-step--complete .form-step__arrow {\n  position: absolute;\n  left: 3rem;\n  top: 100%;\n}\n.form-step--complete .form-step__arrow::before, .form-step--complete .form-step__arrow::after {\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  pointer-events: none;\n  z-index: 1;\n  position: absolute;\n}\n.form-step--complete .form-step__arrow::after {\n  border-color: none;\n  border-top-color: var(--f-background-success);\n  border-width: calc(var(--f-icon-size-small) - var(--f-border-width-medium) * 1.4142);\n  margin-left: calc(-1 * (var(--f-icon-size-small) - var(--f-border-width-medium) * 1.4142));\n}\n.form-step--complete .form-step__arrow::before {\n  border-color: none;\n  border-top-color: var(--f-border-color-success);\n  border-width: var(--f-icon-size-small);\n  margin-left: calc(-1 * var(--f-icon-size-small));\n}\n@media (max-width: 639.98px) {\n.form-step--complete .form-step__arrow {\n    left: 2rem;\n}\n}\n.component-group > .component-group__item:not(:only-child) {\n  margin-bottom: 1rem;\n}\n.component-group > .component-group__item:last-child:not(:first-child) {\n  margin-bottom: 2rem;\n}\n.indent {\n  border-left: var(--f-border-width-medium) solid var(--f-border-color-separator);\n  margin-bottom: 1rem;\n  margin-left: 0.5rem;\n  padding-left: 1.5rem;\n}\n.label {\n  color: var(--fkds-color-text-primary);\n  display: inline-block;\n  font-size: var(--f-font-size-standard);\n  font-weight: var(--f-font-weight-medium);\n  line-height: var(--f-line-height-large);\n  margin-bottom: calc(0.25rem * var(--f-density-factor));\n  width: var(--f-width-full);\n}\n.label__message {\n  display: block;\n  font-weight: var(--f-font-weight-normal);\n  margin-top: var(--f-label-message-margin-top);\n}\n.label__message--error {\n  color: var(--fkds-color-feedback-text-negative);\n}\n.label__icon-wrapper {\n  position: relative;\n}\n.label__icon--left {\n  position: relative;\n  top: calc(3px * var(--f-density-factor));\n}\n.label__description {\n  display: block;\n  font-weight: var(--f-font-weight-normal);\n  color: var(--fkds-color-text-primary);\n}\n.label__description--format {\n  color: var(--fkds-color-text-secondary);\n}\n.layout-application-template {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.layout-application-template__header {\n  z-index: 9994;\n  position: sticky;\n  align-self: flex-start;\n  top: 0;\n  width: 100%;\n}\n.layout-application-template__footer {\n  flex-shrink: 0;\n}\n.layout-application-template__main {\n  flex-grow: 1;\n}\n.layout-application-template__main > .container-fluid {\n  margin: 20px;\n  width: initial;\n  max-width: 1440px;\n}\n.layout-application-template__body {\n  margin: 0;\n  padding: 0;\n  min-height: 100vh;\n}\n.layout-application-template__body > div {\n  height: 100%;\n}\n.layout-application-template__html {\n  height: 100%;\n}\n.grid--force .col.col--sm-1 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-2 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-3 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-4 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-5 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-6 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-7 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-8 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-9 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-10 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-11 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--sm-12 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force-sm .col.col--sm-1 {\n  flex: 0 0 8.3333333333%;\n  max-width: 8.3333333333%;\n}\n.grid--force-sm .col.col--sm-order-1 {\n  order: 1;\n}\n.grid--force-sm .col.col--sm-2 {\n  flex: 0 0 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n.grid--force-sm .col.col--sm-order-2 {\n  order: 2;\n}\n.grid--force-sm .col.col--sm-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n.grid--force-sm .col.col--sm-order-3 {\n  order: 3;\n}\n.grid--force-sm .col.col--sm-4 {\n  flex: 0 0 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n.grid--force-sm .col.col--sm-order-4 {\n  order: 4;\n}\n.grid--force-sm .col.col--sm-5 {\n  flex: 0 0 41.6666666667%;\n  max-width: 41.6666666667%;\n}\n.grid--force-sm .col.col--sm-order-5 {\n  order: 5;\n}\n.grid--force-sm .col.col--sm-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n.grid--force-sm .col.col--sm-order-6 {\n  order: 6;\n}\n.grid--force-sm .col.col--sm-7 {\n  flex: 0 0 58.3333333333%;\n  max-width: 58.3333333333%;\n}\n.grid--force-sm .col.col--sm-order-7 {\n  order: 7;\n}\n.grid--force-sm .col.col--sm-8 {\n  flex: 0 0 66.6666666667%;\n  max-width: 66.6666666667%;\n}\n.grid--force-sm .col.col--sm-order-8 {\n  order: 8;\n}\n.grid--force-sm .col.col--sm-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n.grid--force-sm .col.col--sm-order-9 {\n  order: 9;\n}\n.grid--force-sm .col.col--sm-10 {\n  flex: 0 0 83.3333333333%;\n  max-width: 83.3333333333%;\n}\n.grid--force-sm .col.col--sm-order-10 {\n  order: 10;\n}\n.grid--force-sm .col.col--sm-11 {\n  flex: 0 0 91.6666666667%;\n  max-width: 91.6666666667%;\n}\n.grid--force-sm .col.col--sm-order-11 {\n  order: 11;\n}\n.grid--force-sm .col.col--sm-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.grid--force-sm .col.col--sm-order-12 {\n  order: 12;\n}\n.grid--force .col.col--md-1 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-2 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-3 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-4 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-5 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-6 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-7 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-8 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-9 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-10 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-11 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--md-12 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force-md .col.col--md-1 {\n  flex: 0 0 8.3333333333%;\n  max-width: 8.3333333333%;\n}\n.grid--force-md .col.col--md-order-1 {\n  order: 1;\n}\n.grid--force-md .col.col--md-2 {\n  flex: 0 0 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n.grid--force-md .col.col--md-order-2 {\n  order: 2;\n}\n.grid--force-md .col.col--md-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n.grid--force-md .col.col--md-order-3 {\n  order: 3;\n}\n.grid--force-md .col.col--md-4 {\n  flex: 0 0 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n.grid--force-md .col.col--md-order-4 {\n  order: 4;\n}\n.grid--force-md .col.col--md-5 {\n  flex: 0 0 41.6666666667%;\n  max-width: 41.6666666667%;\n}\n.grid--force-md .col.col--md-order-5 {\n  order: 5;\n}\n.grid--force-md .col.col--md-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n.grid--force-md .col.col--md-order-6 {\n  order: 6;\n}\n.grid--force-md .col.col--md-7 {\n  flex: 0 0 58.3333333333%;\n  max-width: 58.3333333333%;\n}\n.grid--force-md .col.col--md-order-7 {\n  order: 7;\n}\n.grid--force-md .col.col--md-8 {\n  flex: 0 0 66.6666666667%;\n  max-width: 66.6666666667%;\n}\n.grid--force-md .col.col--md-order-8 {\n  order: 8;\n}\n.grid--force-md .col.col--md-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n.grid--force-md .col.col--md-order-9 {\n  order: 9;\n}\n.grid--force-md .col.col--md-10 {\n  flex: 0 0 83.3333333333%;\n  max-width: 83.3333333333%;\n}\n.grid--force-md .col.col--md-order-10 {\n  order: 10;\n}\n.grid--force-md .col.col--md-11 {\n  flex: 0 0 91.6666666667%;\n  max-width: 91.6666666667%;\n}\n.grid--force-md .col.col--md-order-11 {\n  order: 11;\n}\n.grid--force-md .col.col--md-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.grid--force-md .col.col--md-order-12 {\n  order: 12;\n}\n.grid--force .col.col--lg-1 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-2 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-3 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-4 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-5 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-6 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-7 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-8 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-9 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-10 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-11 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--lg-12 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force-lg .col.col--lg-1 {\n  flex: 0 0 8.3333333333%;\n  max-width: 8.3333333333%;\n}\n.grid--force-lg .col.col--lg-order-1 {\n  order: 1;\n}\n.grid--force-lg .col.col--lg-2 {\n  flex: 0 0 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n.grid--force-lg .col.col--lg-order-2 {\n  order: 2;\n}\n.grid--force-lg .col.col--lg-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n.grid--force-lg .col.col--lg-order-3 {\n  order: 3;\n}\n.grid--force-lg .col.col--lg-4 {\n  flex: 0 0 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n.grid--force-lg .col.col--lg-order-4 {\n  order: 4;\n}\n.grid--force-lg .col.col--lg-5 {\n  flex: 0 0 41.6666666667%;\n  max-width: 41.6666666667%;\n}\n.grid--force-lg .col.col--lg-order-5 {\n  order: 5;\n}\n.grid--force-lg .col.col--lg-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n.grid--force-lg .col.col--lg-order-6 {\n  order: 6;\n}\n.grid--force-lg .col.col--lg-7 {\n  flex: 0 0 58.3333333333%;\n  max-width: 58.3333333333%;\n}\n.grid--force-lg .col.col--lg-order-7 {\n  order: 7;\n}\n.grid--force-lg .col.col--lg-8 {\n  flex: 0 0 66.6666666667%;\n  max-width: 66.6666666667%;\n}\n.grid--force-lg .col.col--lg-order-8 {\n  order: 8;\n}\n.grid--force-lg .col.col--lg-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n.grid--force-lg .col.col--lg-order-9 {\n  order: 9;\n}\n.grid--force-lg .col.col--lg-10 {\n  flex: 0 0 83.3333333333%;\n  max-width: 83.3333333333%;\n}\n.grid--force-lg .col.col--lg-order-10 {\n  order: 10;\n}\n.grid--force-lg .col.col--lg-11 {\n  flex: 0 0 91.6666666667%;\n  max-width: 91.6666666667%;\n}\n.grid--force-lg .col.col--lg-order-11 {\n  order: 11;\n}\n.grid--force-lg .col.col--lg-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.grid--force-lg .col.col--lg-order-12 {\n  order: 12;\n}\n.grid--force .col.col--xl-1 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-2 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-3 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-4 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-5 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-6 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-7 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-8 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-9 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-10 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-11 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force .col.col--xl-12 {\n  width: 100%;\n  max-width: 100%;\n  flex: none;\n}\n.grid--force-xl .col.col--xl-1 {\n  flex: 0 0 8.3333333333%;\n  max-width: 8.3333333333%;\n}\n.grid--force-xl .col.col--xl-order-1 {\n  order: 1;\n}\n.grid--force-xl .col.col--xl-2 {\n  flex: 0 0 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n.grid--force-xl .col.col--xl-order-2 {\n  order: 2;\n}\n.grid--force-xl .col.col--xl-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n.grid--force-xl .col.col--xl-order-3 {\n  order: 3;\n}\n.grid--force-xl .col.col--xl-4 {\n  flex: 0 0 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n.grid--force-xl .col.col--xl-order-4 {\n  order: 4;\n}\n.grid--force-xl .col.col--xl-5 {\n  flex: 0 0 41.6666666667%;\n  max-width: 41.6666666667%;\n}\n.grid--force-xl .col.col--xl-order-5 {\n  order: 5;\n}\n.grid--force-xl .col.col--xl-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n.grid--force-xl .col.col--xl-order-6 {\n  order: 6;\n}\n.grid--force-xl .col.col--xl-7 {\n  flex: 0 0 58.3333333333%;\n  max-width: 58.3333333333%;\n}\n.grid--force-xl .col.col--xl-order-7 {\n  order: 7;\n}\n.grid--force-xl .col.col--xl-8 {\n  flex: 0 0 66.6666666667%;\n  max-width: 66.6666666667%;\n}\n.grid--force-xl .col.col--xl-order-8 {\n  order: 8;\n}\n.grid--force-xl .col.col--xl-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n.grid--force-xl .col.col--xl-order-9 {\n  order: 9;\n}\n.grid--force-xl .col.col--xl-10 {\n  flex: 0 0 83.3333333333%;\n  max-width: 83.3333333333%;\n}\n.grid--force-xl .col.col--xl-order-10 {\n  order: 10;\n}\n.grid--force-xl .col.col--xl-11 {\n  flex: 0 0 91.6666666667%;\n  max-width: 91.6666666667%;\n}\n.grid--force-xl .col.col--xl-order-11 {\n  order: 11;\n}\n.grid--force-xl .col.col--xl-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.grid--force-xl .col.col--xl-order-12 {\n  order: 12;\n}\n.layout-navigation {\n  min-height: 100%;\n  width: 100%;\n}\n.layout-navigation__primary {\n  flex: auto;\n}\n.layout-navigation__primary > .container-fluid {\n  width: initial;\n  max-width: 1440px;\n  padding: 1.5rem;\n  margin-left: 0;\n  margin-right: 0;\n}\n.layout-navigation__navigation {\n  background-color: #f4f4f4;\n  display: flex;\n  position: fixed;\n  z-index: 9994;\n  left: 0;\n  bottom: 0;\n}\n.layout-navigation__navigation .button.button--tertiary:hover {\n  background-color: var(--f-background-sidepanel-button-tertiary-hover);\n}\n.layout-navigation__navigation__border {\n  width: 4px;\n  background-color: #f4f4f4;\n  cursor: w-resize;\n  flex-shrink: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.layout-navigation__navigation__border__dot {\n  background-color: #8d8e91;\n  width: 4px;\n  height: 4px;\n  border-radius: 2px;\n  margin-top: 4px;\n}\n.layout-navigation__navigation__border:hover {\n  background-color: #e5e5f5;\n}\n.layout-navigation__navigation__inner {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  margin-right: 12px;\n  word-wrap: break-word;\n  padding: 1rem;\n}\n.layout-navigation__navigation__inner__title {\n  display: flex;\n  align-items: center;\n  padding: 4px;\n}\n.layout-navigation__navigation__inner__title h3 {\n  flex: auto;\n  margin: 0;\n  min-width: 40%;\n}\n.layout-navigation__navigation__inner__title button {\n  margin: 0;\n  position: absolute;\n  right: 0.5rem;\n}\n.layout-navigation__navigation__inner__content {\n  flex-grow: 1;\n  overflow-y: auto;\n  padding: 4px;\n}\n.layout-navigation__navigation__inner__content::-webkit-scrollbar {\n  width: 6px;\n}\n.layout-navigation__navigation__inner__content::-webkit-scrollbar-thumb {\n  background: #8d8e91;\n  border: 1px solid #8d8e91;\n  box-sizing: border-box;\n  border-radius: 33px;\n}\n.layout-navigation__navigation__inner--minimized {\n  margin-left: -0.6rem;\n  margin-right: -0.8rem;\n  padding: 0;\n}\n.layout-secondary {\n  width: 100%;\n  min-height: 100%;\n}\n.layout-secondary__primary {\n  flex: auto;\n}\n.layout-secondary__primary > .container-fluid {\n  width: initial;\n  max-width: 1440px;\n  padding: 1.5rem;\n  margin-left: 0;\n  margin-right: 0;\n}\n.layout-secondary__secondary {\n  background-color: #f4f4f4;\n  position: fixed;\n  display: flex;\n  right: 0;\n  bottom: 0;\n  z-index: 9994;\n}\n.layout-secondary__secondary .button.button--tertiary:hover {\n  background-color: var(--f-background-sidepanel-button-tertiary-hover);\n}\n.layout-secondary__secondary__border {\n  width: 5px;\n  background-color: #f4f4f4;\n  cursor: w-resize;\n  flex-shrink: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.layout-secondary__secondary__border__dot {\n  background-color: #8d8e91;\n  width: 4px;\n  height: 4px;\n  border-radius: 2px;\n  margin-top: 4px;\n}\n.layout-secondary__secondary__border:hover {\n  background-color: #e5e5f5;\n}\n.layout-secondary__secondary__inner {\n  position: relative;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  word-wrap: break-word;\n  margin: 16px;\n  margin-left: 11px;\n}\n.layout-secondary__secondary__inner__title {\n  display: flex;\n  align-items: center;\n  padding: 4px;\n}\n.layout-secondary__secondary__inner__title h3 {\n  flex: auto;\n  margin: 0;\n  min-width: 40%;\n}\n.layout-secondary__secondary__inner__close.button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-bottom: 0;\n}\n.layout-secondary__secondary__inner__content {\n  flex-grow: 1;\n  overflow-y: auto;\n  padding: 4px;\n}\n.layout-secondary__secondary__inner__content::-webkit-scrollbar {\n  width: 6px;\n}\n.layout-secondary__secondary__inner__content::-webkit-scrollbar-thumb {\n  background: #8d8e91;\n  border: 1px solid #8d8e91;\n  box-sizing: border-box;\n  border-radius: 33px;\n}\n@media (width <= 1280px) {\n.layout-secondary__secondary {\n    /* stylelint-disable-next-line color-function-notation, alpha-value-notation -- technical debt */\n    box-shadow: 4px 0 2px rgba(0, 0, 0, 0.5), -4px 0 2px rgba(0, 0, 0, 0.5);\n}\n}\n@keyframes bouncedelay {\n0%, 80%, 100% {\n    transform: scale(0);\n}\n40% {\n    transform: scale(1);\n}\n}\n@keyframes spinner-delay {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n.loader div[tabindex] {\n  outline: none;\n}\n.loader__wrapper {\n  height: var(--f-loader-size);\n  margin: var(--f-loader-margin);\n  position: relative;\n  width: var(--f-loader-size);\n}\n.loader--delay {\n  animation: spinner-delay var(--f-animation-duration-short) forwards;\n  animation-delay: 1s;\n  opacity: 0;\n}\n.loader__spinner {\n  height: 100%;\n  position: absolute;\n  width: 100%;\n}\n.loader__circle {\n  animation: bouncedelay 1.2s infinite ease-in-out;\n  animation-fill-mode: both;\n  background-color: var(--f-icon-color-loader);\n  border-radius: 100%;\n  height: 1rem;\n  position: absolute;\n  width: 1rem;\n}\n.loader__wait-text {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  white-space: pre-wrap;\n}\n.loader--overlay .loader__backdrop {\n  align-items: center;\n  background: var(--f-background-overlay);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 9999;\n}\n.loader--overlay .loader__wait-text {\n  color: var(--f-text-color-default-inverted);\n}\n.loader--overlay .loader__circle {\n  background-color: var(--f-icon-color-white);\n}\n.loader .loader__spinner-1-circle2 {\n  animation-delay: -0.9s;\n}\n.loader .loader__spinner-1-circle3 {\n  animation-delay: -0.6s;\n}\n.loader .loader__spinner-1-circle4 {\n  animation-delay: -0.3s;\n}\n.loader .loader__spinner-2 {\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  transform: rotateZ(45deg);\n}\n.loader .loader__spinner-2-circle1 {\n  animation-delay: -1.1s;\n}\n.loader .loader__spinner-2-circle2 {\n  animation-delay: -0.8s;\n}\n.loader .loader__spinner-2-circle3 {\n  animation-delay: -0.5s;\n}\n.loader .loader__spinner-2-circle4 {\n  animation-delay: -0.2s;\n}\n.loader .loader__spinner-3 {\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  transform: rotateZ(90deg);\n}\n.loader .loader__spinner-3-circle1 {\n  animation-delay: -1s;\n}\n.loader .loader__spinner-3-circle2 {\n  animation-delay: -0.7s;\n}\n.loader .loader__spinner-3-circle3 {\n  animation-delay: -0.4s;\n}\n.loader .loader__spinner-3-circle4 {\n  animation-delay: -0.1s;\n}\n.loader__circle--1 {\n  left: 0;\n  top: 0;\n}\n.loader__circle--2 {\n  right: 0;\n  top: 0;\n}\n.loader__circle--3 {\n  bottom: 0;\n  right: 0;\n}\n.loader__circle--4 {\n  bottom: 0;\n  left: 0;\n}\n.loader__delay__spinner {\n  animation: spinner-delay var(--f-animation-duration-short) forwards;\n  animation-delay: 1s;\n  opacity: 0;\n}\n.logo {\n  display: inline-block;\n}\n.logo--small {\n  padding: var(--f-logo-size-small);\n  background: var(--f-logo-image-small);\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.logo--large {\n  padding: var(--f-logo-size-large);\n  background: var(--f-logo-image-large);\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.logo--responsive {\n  padding: var(--f-logo-size-large);\n  background: var(--f-logo-image-large);\n  background-repeat: no-repeat;\n  background-position: center;\n}\n@media (max-width: 639.98px) {\n.logo--responsive {\n    padding: var(--f-logo-size-small);\n    background: var(--f-logo-image-small);\n    background-repeat: no-repeat;\n    background-position: center;\n}\n}\n.message-box {\n  padding: calc(1.5rem * var(--f-density-factor)) 1.5rem;\n  margin: 0.5rem 0 calc(2rem * var(--f-density-factor)) 0;\n}\n.message-box__heading {\n  font-size: var(--f-font-size-h3);\n  font-weight: var(--f-font-weight-medium);\n  color: var(--fkds-color-text-primary);\n  line-height: var(--f-line-height-medium);\n  align-items: flex-start;\n  margin-bottom: calc(0.5rem * var(--f-density-factor));\n  margin-top: 0;\n}\n@media (max-width: 639.98px) {\n.message-box__heading {\n    font-size: var(--f-font-size-large);\n}\n}\n.message-box--info {\n  border: var(--f-border-width-medium) solid;\n  border-color: var(--fkds-color-feedback-border-info);\n  background-color: var(--fkds-color-feedback-background-info);\n  border-radius: var(--f-border-radius-small);\n  border-top: 1rem solid var(--fkds-color-feedback-border-info);\n}\n.message-box--info .iflex__item > p {\n  margin-bottom: 0;\n}\n.message-box--info-short {\n  border: var(--f-border-width-medium) solid;\n  border-color: var(--fkds-color-feedback-border-info);\n  background-color: var(--fkds-color-feedback-background-info);\n  border-radius: var(--f-border-radius-small);\n  border-left: 1rem solid var(--fkds-color-feedback-border-info);\n}\n.message-box--info-short .message-box__icon {\n  font-size: 0;\n}\n.message-box--info-short .message-box__icon .icon {\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n}\n.message-box--info-short .message-box__icon .icon-stack {\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n}\n.message-box--info-short .message-box__icon .icon__exclamation {\n  transform: translateY(-0.05rem);\n}\n.message-box--info-short .message-box__icon .icon__banner {\n  fill: var(--fkds-icon-color-feedback-content-negative);\n  color: white;\n}\n.message-box--info-short .message-box__icon__banner {\n  margin-top: 0;\n}\n.message-box--info-short .iflex__item > p {\n  margin-bottom: 0;\n}\n.message-box--error {\n  border: var(--f-border-width-medium) solid;\n  border-color: var(--fkds-color-feedback-border-negative);\n  background-color: var(--fkds-color-feedback-background-negative);\n  border-radius: var(--f-border-radius-small);\n  border-top: 1rem solid var(--fkds-color-feedback-border-negative);\n}\n.message-box--error .iflex__item > p {\n  margin-bottom: 0;\n}\n.message-box--error-short {\n  border: var(--f-border-width-medium) solid;\n  border-color: var(--fkds-color-feedback-border-negative);\n  background-color: var(--fkds-color-feedback-background-negative);\n  border-radius: var(--f-border-radius-small);\n  border-left: 1rem solid var(--fkds-color-feedback-border-negative);\n}\n.message-box--error-short .message-box__icon {\n  font-size: 0;\n}\n.message-box--error-short .message-box__icon .icon {\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n}\n.message-box--error-short .message-box__icon .icon-stack {\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n}\n.message-box--error-short .message-box__icon .icon__exclamation {\n  transform: translateY(-0.05rem);\n}\n.message-box--error-short .message-box__icon .icon__banner {\n  fill: var(--fkds-icon-color-feedback-content-negative);\n  color: white;\n}\n.message-box--error-short .message-box__icon__banner {\n  margin-top: 0;\n}\n.message-box--error-short .iflex__item > p {\n  margin-bottom: 0;\n}\n.message-box--warning {\n  border: var(--f-border-width-medium) solid;\n  border-color: var(--fkds-color-feedback-border-warning);\n  background-color: var(--fkds-color-feedback-background-warning);\n  border-radius: var(--f-border-radius-small);\n  border-top: 1rem solid var(--fkds-color-feedback-border-warning);\n}\n.message-box--warning .iflex__item > p {\n  margin-bottom: 0;\n}\n.message-box--warning-short {\n  border: var(--f-border-width-medium) solid;\n  border-color: var(--fkds-color-feedback-border-warning);\n  background-color: var(--fkds-color-feedback-background-warning);\n  border-radius: var(--f-border-radius-small);\n  border-left: 1rem solid var(--fkds-color-feedback-border-warning);\n}\n.message-box--warning-short .message-box__icon {\n  font-size: 0;\n}\n.message-box--warning-short .message-box__icon .icon {\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n}\n.message-box--warning-short .message-box__icon .icon-stack {\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n}\n.message-box--warning-short .message-box__icon .icon__exclamation {\n  transform: translateY(-0.05rem);\n}\n.message-box--warning-short .message-box__icon .icon__banner {\n  fill: var(--fkds-icon-color-feedback-content-negative);\n  color: white;\n}\n.message-box--warning-short .message-box__icon__banner {\n  margin-top: 0;\n}\n.message-box--warning-short .iflex__item > p {\n  margin-bottom: 0;\n}\n.message-box--success {\n  border: var(--f-border-width-medium) solid;\n  border-color: var(--fkds-color-feedback-border-positive);\n  background-color: var(--fkds-color-feedback-background-positive);\n  border-radius: var(--f-border-radius-small);\n  border-top: 1rem solid var(--fkds-color-feedback-border-positive);\n}\n.message-box--success .iflex__item > p {\n  margin-bottom: 0;\n}\n.message-box--success-short {\n  border: var(--f-border-width-medium) solid;\n  border-color: var(--fkds-color-feedback-border-positive);\n  background-color: var(--fkds-color-feedback-background-positive);\n  border-radius: var(--f-border-radius-small);\n  border-left: 1rem solid var(--fkds-color-feedback-border-positive);\n}\n.message-box--success-short .message-box__icon {\n  font-size: 0;\n}\n.message-box--success-short .message-box__icon .icon {\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n}\n.message-box--success-short .message-box__icon .icon-stack {\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n}\n.message-box--success-short .message-box__icon .icon__exclamation {\n  transform: translateY(-0.05rem);\n}\n.message-box--success-short .message-box__icon .icon__banner {\n  fill: var(--fkds-icon-color-feedback-content-negative);\n  color: white;\n}\n.message-box--success-short .message-box__icon__banner {\n  margin-top: 0;\n}\n.message-box--success-short .iflex__item > p {\n  margin-bottom: 0;\n}\n.message-box--banner {\n  width: var(--f-width-full);\n  box-shadow: var(--f-box-modal-shadow);\n  border-collapse: separate;\n  padding: calc(1rem * var(--f-density-factor)) 1rem;\n  border: var(--f-border-width-medium) solid;\n  border-color: var(--fkds-color-feedback-border-negative);\n  background-color: var(--fkds-color-feedback-background-negative);\n  border-radius: var(--f-border-radius-small);\n  border-top: 1rem solid var(--fkds-color-feedback-border-negative);\n}\n.message-box--banner .iflex__item > p {\n  margin-bottom: 0;\n}\n.message-box--banner .iflex__item > p {\n  margin-bottom: 0;\n}\n@media (max-width: 639.98px) {\n.message-box {\n    margin-bottom: calc(1.5rem * var(--f-density-factor));\n    margin-top: calc(1.5rem * var(--f-density-factor));\n    padding: calc(1rem * var(--f-density-factor)) 1rem;\n}\n}\n.modal__backdrop {\n  background: var(--f-background-overlay);\n  display: flex;\n  height: 100%;\n  inset: 0;\n  position: fixed;\n  width: 100%;\n  z-index: 9994;\n}\n.modal__outer-container {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  overflow: auto;\n  width: 100%;\n}\n.modal__inner-container {\n  align-items: center;\n  justify-content: center;\n  max-height: 100%;\n  width: 100%;\n}\n.modal__shelf {\n  justify-content: flex-end;\n  display: flex;\n  background-color: var(--fkds-color-background-primary);\n  border-top-left-radius: var(--f-border-radius-medium);\n  border-top-right-radius: var(--f-border-radius-medium);\n  margin-bottom: 1rem;\n}\n.modal__header {\n  display: flex;\n  font-size: var(--f-font-size-h4);\n  margin-bottom: 0.5rem;\n  width: 100%;\n}\n.modal__header .modal__title {\n  font-size: var(--f-modal-title-font-size);\n  margin-bottom: 0;\n  margin-top: 0;\n  color: var(--fkds-color-text-primary);\n}\n.modal__dialog-container {\n  background: transparent;\n  display: flex;\n  margin: auto;\n  width: calc(100vw - 40px);\n}\n@media (min-width: 640px) {\n.modal__dialog-container {\n    max-width: var(--f-modal-size-small);\n}\n.modal__dialog-container--small {\n    max-width: var(--f-modal-size-small);\n}\n.modal__dialog-container--medium {\n    max-width: var(--f-modal-size-medium);\n}\n.modal__dialog-container--large {\n    max-width: var(--f-modal-size-large);\n}\n.modal__dialog-container--fullwidth {\n    max-width: var(--f-modal-size-fullwidth);\n}\n}\n@media (max-width: 639.98px) {\n.modal__dialog-container--fullscreen {\n    width: 100%;\n    max-width: none;\n}\n.modal__dialog-container--fullscreen .modal__dialog {\n    min-height: 100vh;\n}\n.modal__dialog-container--fullscreen .modal__dialog-inner {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n}\n.modal__dialog-container--fullscreen .modal__content {\n    flex: 1 1 auto;\n}\n}\n.modal__dialog {\n  background: var(--fkds-color-background-primary);\n  outline: 2px solid transparent;\n  border-radius: var(--f-border-radius-medium);\n  display: flex;\n  flex-direction: column-reverse;\n  height: auto;\n  margin: auto;\n  width: 100%;\n  position: relative;\n  z-index: 9995;\n}\n.modal__dialog .modal__dialog-inner {\n  height: auto;\n  margin: 0 1.5rem 1.5rem;\n}\n@media (max-width: 639.98px) {\n.modal__dialog .modal__dialog-inner {\n    margin: 0 1rem 1rem;\n}\n}\n.modal__dialog .modal__footer {\n  margin-top: 2rem;\n}\n.modal__dialog .modal__footer > .button-group {\n  margin-bottom: 0;\n}\n.modal__dialog .modal__footer > .button-group .button-group__item:last-child:not(.button--small, .button--medium) {\n  margin-bottom: 0;\n}\n@media (min-width: 640px) {\n.modal__dialog .modal__footer > .button-group .button-group__item {\n    margin-bottom: 0;\n}\n}\n.modal__dialog > .button-group {\n  margin: 0;\n}\n.modal__dialog > .button-group .button-group__item:last-child {\n  margin: var(--f-modal-close-button-margin);\n  padding: var(--f-modal-close-button-padding);\n}\n.modal--information .modal__shelf {\n  background-color: var(--fkds-color-feedback-background-info-strong);\n}\n.modal--information .modal__shelf .close-button {\n  color: var(--fkds-color-action-text-inverted-default);\n}\n.modal--warning .modal__shelf {\n  background-color: var(--fkds-color-feedback-background-warning-strong);\n}\n.modal--error .modal__shelf {\n  background-color: var(--fkds-color-feedback-background-negative-strong);\n}\n.modal--error .modal__shelf .close-button {\n  color: var(--fkds-color-action-text-inverted-default);\n}\n.imenu__list {\n  background-color: var(--f-background-menu);\n  margin: 0;\n  padding: 0;\n}\n.imenu__list__item {\n  cursor: pointer;\n  list-style-type: none;\n  white-space: nowrap;\n}\n.imenu__list__item a,\n.imenu__list__item a:visited,\n.imenu__list__item a:active {\n  color: var(--f-text-color-menu);\n}\n.imenu__list__item a:hover {\n  color: var(--f-text-color-menu-hover);\n}\n.imenu__popup-item {\n  position: relative;\n  list-style-type: none;\n  white-space: nowrap;\n}\n.imenu__popup-item__wrapper {\n  display: inline-flex;\n  position: absolute;\n  left: 0;\n  padding-top: 1rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.imenu--vertical .imenu__list {\n  display: block;\n}\n.imenu--vertical .imenu__list__item {\n  padding: 0.75rem;\n  display: block;\n}\n.imenu--vertical .imenu__list__item:hover {\n  font-weight: var(--f-font-weight-normal);\n  background-color: var(--f-background-menu-vertical-hover);\n}\n.imenu--vertical .imenu__list__item--highlight {\n  background-color: var(--f-background-menu-vertical-highlight);\n  font-weight: var(--f-font-weight-medium);\n}\n.imenu--vertical .imenu__list__item--highlight:hover {\n  font-weight: var(--f-font-weight-medium);\n}\n.imenu--horizontal {\n  overflow: hidden;\n}\n.imenu--horizontal .imenu__list {\n  display: flex;\n}\n.imenu--horizontal .imenu__list__item {\n  display: inline-flex;\n  padding-top: 1rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.imenu--horizontal .imenu__list__item--highlight {\n  color: var(--f-text-color-menu-horizontal-highlight);\n  font-weight: var(--f-font-weight-medium);\n}\n.imenu--horizontal .imenu__list__item--highlight .imenu__list__anchor-container {\n  border-bottom: 5px solid var(--f-border-color-menu-horizontal-highlight);\n}\n.imenu--horizontal .imenu__list__item--highlight .imenu__list__anchor:hover {\n  font-weight: var(--f-font-weight-medium);\n}\n.imenu--horizontal .imenu__list__item--hidden {\n  visibility: hidden;\n}\n.imenu--horizontal .imenu__list__anchor-container {\n  padding-bottom: 0.5rem;\n  border-bottom: 5px solid transparent;\n}\n.imenu--horizontal .imenu__list__anchor-container:hover {\n  border-bottom: 5px solid var(--f-border-color-menu-horizontal-hover);\n}\n.imenu--horizontal .imenu__list__anchor {\n  display: inline-flex;\n}\n.imenu--horizontal .imenu__list__anchor-icon-right {\n  flex: 1 0 auto;\n  padding-top: 0.25rem;\n  margin-left: 0.75rem;\n  color: var(--f-border-color-menu-horizontal-highlight);\n}\n.offline {\n  width: var(--f-width-full);\n  box-shadow: var(--f-box-modal-shadow);\n  border-collapse: separate;\n  padding: calc(1rem * var(--f-density-factor)) 1rem;\n  border: var(--f-border-width-medium) solid;\n  border-color: var(--fkds-color-feedback-border-negative);\n  background-color: var(--fkds-color-feedback-background-negative);\n  border-radius: var(--f-border-radius-small);\n  border-left: 1rem solid var(--fkds-color-feedback-border-negative);\n}\n.offline .offline__icon {\n  font-size: 0;\n}\n.offline .offline__icon .icon {\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n}\n.offline .offline__icon .icon-stack {\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n}\n.offline .offline__icon .icon__exclamation {\n  transform: translateY(-0.05rem);\n}\n.offline .offline__icon .icon__banner {\n  fill: var(--fkds-icon-color-feedback-content-negative);\n  color: white;\n}\n.offline .offline__icon__banner {\n  margin-top: 0;\n}\n.offline .iflex__item > p {\n  margin-bottom: 0;\n}\n.offline .iflex__item > p {\n  margin-bottom: 0;\n}\n.offline {\n  padding: 1.5rem;\n}\n.offline__wrapper {\n  position: fixed;\n  position: sticky;\n  z-index: 9998;\n  right: 0;\n  top: 0;\n  left: 0;\n}\n.output-field {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  line-height: max(1, var(--f-line-height-large) * var(--f-density-factor));\n  margin: 0 0 calc(var(--f-margin-component-bottom) * var(--f-density-factor));\n  position: relative;\n  width: var(--f-width-full);\n}\n.output-field__output {\n  line-height: max(1, var(--f-line-height-large) * var(--f-density-factor));\n  font-size: var(--f-font-size-standard);\n  min-height: var(--f-height-medium);\n  position: relative;\n  width: var(--f-width-full);\n  margin-bottom: 0;\n}\n.progress {\n  background-color: var(--fkds-color-background-primary);\n  border-radius: var(--f-border-radius-medium);\n  height: var(--f-height-small);\n  margin-bottom: 1.5rem;\n  padding: 0;\n  border: var(--f-border-width-medium) solid var(--fkds-color-feedback-border-positive);\n}\n@media (forced-colors: active) {\n.progress {\n    border: var(--f-border-width-medium) solid highlight;\n}\n}\n.progress__meter {\n  display: block;\n  float: left;\n  height: calc(var(--f-height-small) - var(--f-border-width-medium) * 2);\n  transition: width var(--f-animation-duration-medium) ease-out, background-color var(--f-animation-duration-medium) ease-out;\n}\n.progress__meter--inprogress {\n  background: var(--fkds-color-feedback-background-positive-strong);\n}\n@media (forced-colors: active) {\n.progress__meter--inprogress {\n    background: highlight;\n}\n}\n.progress__meter--finished {\n  background: var(--fkds-color-feedback-background-positive-strong);\n}\n@media (forced-colors: active) {\n.progress__meter--finished {\n    background: highlight;\n}\n}\n.radio-button {\n  min-height: var(--f-height-medium);\n  margin-bottom: calc(1rem * var(--f-density-factor));\n  margin-right: 1.5rem;\n}\n.radio-button:last-child {\n  margin-bottom: 0;\n  margin-right: 0;\n}\n.radio-button__input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  min-height: calc(4 * var(--f-height-medium));\n}\n.radio-button__label {\n  min-width: 4.5rem;\n  cursor: pointer;\n  display: inline-block;\n  font-size: var(--f-font-size-standard);\n  line-height: var(--f-line-height-small);\n  padding-left: 1.75rem;\n  padding-top: 0.1rem;\n  padding-bottom: 0.1rem;\n  position: relative;\n}\n.radio-button__label * {\n  pointer-events: none;\n}\n.radio-button__label::before, .radio-button__label::after {\n  border-radius: 50%;\n  content: "";\n  height: var(--f-icon-size-medium);\n  left: 0;\n  margin: 0.1rem 0;\n  position: absolute;\n  top: 0;\n  cursor: pointer;\n  width: var(--f-icon-size-medium);\n  background-color: var(--fkds-color-background-primary);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-primary);\n  display: block;\n  transition: background-color ease var(--f-animation-duration-medium), border-color ease var(--f-animation-duration-medium), opacity ease var(--f-animation-duration-medium);\n}\n.radio-button__label::after {\n  background-color: var(--fkds-color-select-background-primary-default);\n  box-shadow: inset 0 0 0 var(--f-border-width-medium) var(--fkds-color-background-primary);\n  opacity: 0;\n}\n@media (forced-colors: active) {\n.radio-button__label::after {\n    forced-color-adjust: none;\n    background-color: Highlight;\n    box-shadow: inset 0 0 0 var(--f-border-width-medium) Canvas;\n}\n}\n.radio-button.disabled {\n  color: var(--fkds-color-text-disabled);\n}\n@media (forced-colors: active) {\n.radio-button.disabled {\n    color: GrayText;\n}\n}\n.radio-button.disabled .radio-button__label {\n  cursor: default;\n}\n.radio-button.disabled .radio-button__label::before, .radio-button.disabled .radio-button__label::after {\n  background: var(--fkds-color-background-disabled);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-disabled);\n  cursor: default;\n}\n@media (forced-colors: active) {\n.radio-button.disabled .radio-button__label::before, .radio-button.disabled .radio-button__label::after {\n    border: var(--f-border-width-medium) solid GrayText;\n}\n}\n.radio-button input[type=radio] + label::after {\n  opacity: 0;\n}\n.radio-button input[type=radio]:checked + label::after {\n  border: var(--f-border-width-medium) solid transparent;\n  opacity: 1;\n}\n.radio-button input[type=radio]:focus + label {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n}\n.radio-button-group__content {\n  display: flex;\n  flex-direction: column;\n}\n.radio-button-group--horizontal .radio-button-group__content {\n  flex-direction: row;\n}\n.radio-button-group--horizontal .radio-button-group__content .radio-button {\n  margin-bottom: 0;\n}\n@media (max-width: 639.98px) {\n.radio-button-group--horizontal .radio-button-group__content {\n    flex-direction: column;\n}\n.radio-button-group--horizontal .radio-button-group__content .radio-button {\n    margin-bottom: 1rem;\n}\n}\n.select-field {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  margin: 0 0 calc(var(--f-margin-component-bottom) * var(--f-density-factor));\n  position: relative;\n  width: var(--f-width-full);\n}\n@media (min-width: 640px) {\n.select-field--inline {\n    margin-bottom: calc(0.75rem * var(--f-density-factor));\n    flex-direction: row;\n    justify-content: flex-start;\n    width: auto;\n}\n.select-field--inline .label {\n    width: auto;\n    margin-right: 1rem;\n    padding-top: calc(0.5rem * var(--f-density-factor));\n}\n}\n.select-field--table {\n  margin-bottom: 0;\n}\n.select-field--table-error .select-field__select {\n  padding-right: calc(var(--f-icon-size-large) + 2.25rem);\n}\n.select-field__select {\n  appearance: none;\n  background-color: var(--fkds-color-background-primary);\n  box-shadow: var(--f-input-shadow-inset);\n  border-radius: var(--f-border-radius-medium);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-primary);\n  color: var(--fkds-color-text-primary);\n  cursor: pointer;\n  min-height: calc(var(--f-height-large) * var(--f-density-factor));\n  padding: var(--padding-input-fields);\n  width: var(--f-width-full);\n}\n.select-field__select:hover {\n  background-color: var(--fkds-color-action-background-secondary-hover);\n}\n.select-field__select:focus {\n  background-color: var(--fkds-color-background-primary);\n}\n.select-field__select:disabled {\n  border-color: var(--fkds-color-border-disabled);\n  color: var(--fkds-color-text-disabled);\n  background-color: var(--fkds-color-background-disabled);\n  opacity: 1;\n}\n.select-field__select:disabled + .select-field__icon {\n  color: var(--fkds-icon-color-content-disabled);\n}\n.select-field__icon-wrapper {\n  position: relative;\n}\n.select-field__icon {\n  color: var(--fkds-icon-color-action-content-primary-default);\n}\n.select-field__error-popup-icon {\n  color: var(--f-text-color-error);\n  display: inline;\n  position: absolute;\n  right: calc(var(--f-icon-size-large) + 0.75rem);\n  top: 0.5rem;\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n  overflow: hidden;\n  text-align: center;\n}\n.select-field--error .select-field__select {\n  border-color: var(--fkds-color-feedback-border-negative);\n}\n.sort-filter-dataset__sort {\n  min-width: 80px;\n}\n.sort-filter-dataset__search {\n  position: relative;\n}\n.sort-filter-dataset__search input {\n  padding-left: 2.1rem;\n  padding-right: 2.1rem;\n}\n@media (min-width: 640px) {\n.sort-filter-dataset__search input {\n    width: 160px;\n}\n}\n.sort-filter-dataset__search__magnify-icon {\n  position: absolute;\n  left: 1.75rem;\n  height: var(--f-height-large);\n  /* same as textfield */\n  z-index: 1;\n  /* In front of input field */\n  width: 1.2rem;\n  color: var(--f-icon-color-sort-filter-dataset-search);\n}\n@media (max-width: 639.98px) {\n.sort-filter-dataset__search__magnify-icon {\n    top: 1.5rem;\n    left: 0.75rem;\n}\n}\n.sort-filter-dataset__search__close-icon.button--discrete {\n  position: absolute;\n  top: -0.75rem;\n  right: 0;\n  color: var(--f-icon-color-sort-filter-dataset-close);\n  cursor: pointer;\n  padding: 1rem;\n}\n@media (max-width: 639.98px) {\n.sort-filter-dataset__search__close-icon.button--discrete {\n    top: 1rem;\n}\n}\n.sort-filter-dataset__search__close-icon.button--discrete:hover {\n  box-shadow: none;\n  background-color: transparent;\n}\n.static-panel {\n  margin-bottom: 2.5rem;\n}\n.static-panel__heading {\n  background: var(--f-background-heading-static-panel);\n  border: var(--f-static-panel-heading-border);\n  border-bottom: 0;\n  font-size: var(--f-font-size-h3);\n  line-height: 2rem;\n  margin-bottom: 0;\n  padding: 0.25rem 1rem;\n}\n.static-panel__content {\n  border-top: 0;\n  border: var(--f-border-width-medium) solid var(--f-border-color-panel);\n  padding: 1.75rem 1.5rem;\n}\n.static-panel__icon {\n  height: var(--f-icon-size-x-large);\n  margin-right: 0.25rem;\n  position: relative;\n  top: 0.5rem;\n  width: var(--f-icon-size-x-large);\n}\n.table tbody .table__column--numeric, .table tbody .table__column--date {\n  font-feature-settings: tnum 1;\n  font-variant-numeric: tabular-nums;\n}\n.table tbody .table__expandable-row, .table tbody .table__row--normal, .table tbody .table__row {\n  background: var(--f-background-grid-default);\n  color: var(--f-text-color-default);\n}\n.table--striped tbody .table__row:nth-child(even), .table tbody .table__row--striped {\n  background: var(--f-background-grid-striped);\n  color: var(--f-text-color-default);\n}\n.table--hover tbody .table__row:hover, .table tbody .table__row--hover {\n  background: var(--f-background-grid-hover);\n  color: var(--f-text-color-default);\n  outline: 1px solid var(--f-border-color-grid-hover);\n}\n.table tbody .table__row:focus-within, .table tbody .table__row--focus-within {\n  background: var(--f-background-grid-focus-inner);\n  color: var(--f-text-color-default);\n}\n.table tbody .table__row:focus, .table tbody .table__row--focus {\n  background: var(--f-background-grid-hover);\n  color: var(--f-text-color-default);\n  outline: 2px solid var(--f-color-focus);\n  box-shadow: none;\n}\n.table--hover tbody .table__row:hover.table__row--active, .table--striped tbody .table__row:nth-child(even).table__row--active, .table tbody .table__row--active, .table tbody .table__row:focus.table__row--active, .table tbody .table__row--focus.table__row--active, .table tbody .table__row:focus-within.table__row--active, .table tbody .table__row--focus-within.table__row--active {\n  background: var(--f-background-grid-active);\n  color: var(--f-text-color-default);\n}\n.table tbody .table__row--expanded-border td,\n.table tbody .table__row--expanded-border th {\n  border-bottom-color: var(--f-border-color-grid-expanded);\n}\n.table tbody .table__row--expandable {\n  cursor: pointer;\n}\n.table {\n  border-collapse: separate;\n  border-spacing: 0;\n  font-size: var(--f-font-size-standard);\n  margin: 0 0 calc(var(--f-margin-component-bottom) * var(--f-density-factor));\n  width: 100%;\n  border: 2px solid transparent;\n}\n.table:focus {\n  border-color: var(--f-color-focus);\n  box-shadow: none;\n}\n.table caption {\n  background: transparent;\n  color: var(--f-text-color-default);\n  font-size: var(--f-font-size-standard);\n  font-weight: var(--f-font-weight-medium);\n  line-height: var(--f-line-height-large);\n  margin-bottom: calc(0.25rem * var(--f-density-factor));\n  width: var(--f-width-full);\n  text-align: left;\n}\n.table thead th {\n  background: var(--f-background-grid-header);\n  border-bottom: 2px solid var(--f-border-color-grid-header);\n  border-right: 1px solid var(--f-border-color-grid);\n  color: var(--f-text-color-default);\n  font-weight: var(--f-font-weight-medium);\n  line-height: var(--f-line-height-large);\n  padding: calc(0.25rem * var(--f-density-factor)) 0.5rem;\n  text-align: left;\n  vertical-align: top;\n}\n.table thead th:last-child {\n  border-right: none;\n}\n.table thead th .table__column__header__icon {\n  color: var(--f-icon-color-table-header);\n  height: var(--f-icon-size-x-small);\n  width: var(--f-icon-size-x-small);\n  min-width: var(--f-icon-size-x-small);\n}\n.table thead th .table__column__header__icon--discrete {\n  color: var(--f-icon-color-table-header-discrete);\n}\n.table tbody .table__expandable-row--collapsed {\n  display: none;\n}\n.table tbody td,\n.table tbody th {\n  padding: calc(var(--f-table-body-row-padding) * var(--f-density-factor)) var(--f-table-body-row-padding);\n  border-bottom: 1px solid var(--f-border-color-grid);\n  vertical-align: top;\n}\n.table tbody td {\n  line-height: calc(1.5rem * var(--f-density-factor));\n  font-weight: var(--f-font-weight-normal);\n}\n.table tbody th {\n  border-right: 1px solid var(--f-border-color-grid);\n  font-weight: var(--f-font-weight-medium);\n  line-height: calc(1.5rem * var(--f-density-factor));\n}\n.table tbody .table__column--action {\n  white-space: nowrap;\n}\n.table tbody .table__column--selectable {\n  padding: calc(0.2rem * var(--f-density-factor)) 0.2rem;\n}\n.table tbody .table__column--placeholder + .table__column {\n  padding-left: 1.5rem;\n}\n.table tbody .table__column--action .button--discrete, .table tbody .table__column--action .button--tertiary {\n  margin: var(--f-button-tertiary-table-column-action-margin);\n  min-width: 24px;\n  width: max-content;\n}\n.table tbody .table__column--action .button--discrete .button__icon, .table tbody .table__column--action .button--tertiary .button__icon {\n  margin: var(--f-button-tertiary-table-column-action-icon-margin);\n  transform: translate(0, 10%);\n}\n.table__column--text {\n  text-align: left;\n}\n.table__column--numeric {\n  text-align: right;\n}\n.table__column--date {\n  text-align: left;\n}\n.table__column--action {\n  text-align: center;\n}\n.table__column--shrink {\n  width: 1px;\n  white-space: nowrap;\n}\n.table__column--sortable {\n  cursor: pointer;\n}\n.table__column__description {\n  display: block;\n  background: transparent;\n  color: var(--f-text-color-discrete);\n  font-weight: var(--f-font-weight-normal);\n}\n.table--selectable .table__row td:hover,\n.table--selectable .table__row th:hover {\n  cursor: pointer;\n}\n.table__scroll {\n  margin: 0 0 calc(var(--f-margin-component-bottom) * var(--f-density-factor));\n  overflow: hidden;\n}\n.table__scroll thead th,\n.table__scroll thead td,\n.table__scroll tbody th,\n.table__scroll tbody td {\n  white-space: nowrap;\n}\n.table__scroll .table {\n  margin: 0;\n}\n.table__scroll--horizontal {\n  overflow-x: auto;\n}\n.table__input {\n  margin-top: calc(0.25rem * var(--f-density-factor));\n}\n.table__input .checkbox__label,\n.table__input .radio-button__label {\n  min-width: 1.75rem;\n  min-height: 1.75rem;\n  padding: 0;\n}\n.table__input .checkbox__label::after,\n.table__input .checkbox__label::before,\n.table__input .radio-button__label::after,\n.table__input .radio-button__label::before {\n  top: calc(0.15rem * var(--f-density-factor));\n  left: 0.25rem;\n}\n.table__expand-icon {\n  color: var(--f-icon-color-primary);\n  background: transparent;\n  border: 0;\n  flex: 0 0 auto;\n  padding: 0;\n  pointer-events: none;\n  width: 1.5rem;\n  height: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.table__anchor {\n  cursor: pointer;\n  display: inline-flex;\n  gap: 0.25rem;\n}\n.table__anchor > svg.icon {\n  flex-shrink: 0;\n  align-self: center;\n  min-width: auto;\n  max-width: none;\n}\n.table__button {\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 0;\n  box-shadow: none;\n  color: var(--fkds-color-action-text-primary-default);\n  padding: calc(var(--f-button-tertiary-padding-top) * var(--f-density-factor)) var(--f-button-tertiary-padding-right) calc(var(--f-button-tertiary-padding-bottom) * var(--f-density-factor)) var(--f-button-tertiary-padding-left);\n  font-weight: var(--f-font-weight-medium);\n  outline-offset: 0.25rem;\n  font-size: 14px;\n  line-height: 1.25rem;\n  min-width: 24px;\n  padding: calc(0.375rem * var(--f-density-factor)) 0.25rem;\n  text-underline-offset: 3.5px;\n  margin: var(--f-button-tertiary-table-column-action-margin);\n  width: max-content;\n}\n.table__button:hover {\n  background-color: var(--fkds-color-action-background-secondary-hover);\n  border-color: transparent;\n  color: var(--fkds-color-action-text-primary-default);\n  box-shadow: none;\n}\n.table__button:active, .table__button:focus {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n  background-color: var(--fkds-color-action-background-secondary-hover);\n  border-color: transparent;\n  color: var(--fkds-color-action-text-primary-default);\n}\n.table__button.disabled, .table__button.disabled:hover, .table__button:disabled, .table__button:disabled:hover, .table__button.table__button--disabled, .table__button.table__button--disabled:hover {\n  background-color: transparent;\n  border-color: transparent;\n  color: var(--fkds-color-text-disabled);\n}\n.table__button .button__icon {\n  margin: var(--f-button-tertiary-table-column-action-icon-margin);\n  transform: translate(0, 10%);\n  height: 14px;\n  width: 14px;\n}\n.text-field {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  margin: 0 0 calc(var(--f-margin-component-bottom) * var(--f-density-factor));\n  position: relative;\n  width: var(--f-width-full);\n  /* stylelint-disable property-no-vendor-prefix */\n}\n@media (min-width: 640px) {\n.text-field--inline {\n    margin-bottom: calc(0.75rem * var(--f-density-factor));\n    flex-direction: row;\n    justify-content: flex-start;\n    width: auto;\n}\n.text-field--inline .label {\n    width: auto;\n    margin-right: 1rem;\n    padding-top: calc(0.5rem * var(--f-density-factor));\n}\n}\n.text-field--table {\n  margin-bottom: 0;\n}\n.text-field input[type=text]::-ms-clear {\n  display: none;\n}\n.text-field__error-popup-icon {\n  color: var(--f-text-color-error);\n  height: 16px;\n}\n.text-field__input-wrapper {\n  display: flex;\n  gap: calc(0.5rem * var(--f-density-factor));\n}\n.text-field__input {\n  background-color: var(--fkds-color-background-primary);\n  box-shadow: var(--f-input-shadow-inset);\n  border-radius: var(--f-border-radius-medium);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-primary);\n  min-height: calc(var(--f-height-large) * var(--f-density-factor));\n  padding: 0 0.75rem;\n  width: var(--f-width-full);\n}\n.text-field__icon-wrapper {\n  flex: 1 1 auto;\n  position: relative;\n}\n.text-field__icon-wrapper:has(.text-field__append-inner) .text-field__input {\n  padding: var(--padding-input-fields);\n}\n.text-field__append-inner {\n  display: inline;\n  position: absolute;\n  right: calc(0.75rem * var(--f-density-factor));\n  top: calc(0.5rem * var(--f-density-factor));\n  height: var(--f-icon-size-large);\n  width: var(--f-icon-size-large);\n  overflow: hidden;\n  text-align: center;\n}\n.text-field__icon {\n  height: var(--f-icon-size-large);\n  transition: opacity var(--f-animation-duration-medium) ease-in-out;\n  width: var(--f-icon-size-large);\n}\n.text-field__icon--left {\n  position: relative;\n  top: 3px;\n}\n.text-field__input:disabled + .text-field__icon {\n  color: var(--fkds-icon-color-content-disabled);\n}\n.text-field__input:disabled {\n  border-color: var(--fkds-color-border-disabled);\n  color: var(--fkds-color-text-disabled);\n  background-color: var(--fkds-color-background-disabled);\n}\n.text-field--error .text-field__input {\n  border-color: var(--fkds-color-feedback-border-negative);\n}\n.text-field--search + .text-field__append-inner {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: calc(0.25rem * var(--f-density-factor));\n  min-height: calc(var(--f-height-large) * var(--f-density-factor));\n  width: 2.5rem;\n}\n.text-field .clear-button {\n  background: none;\n  border: 0;\n  cursor: pointer;\n}\n.text-field .clear-button__icon {\n  color: var(--fkds-icon-color-action-content-weak-default);\n  height: var(--f-icon-size-x-small);\n  width: var(--f-icon-size-x-small);\n}\n.text-field input[type=search]::-webkit-search-decoration,\n.text-field input[type=search]::-webkit-search-cancel-button,\n.text-field input[type=search]::-webkit-search-results-button,\n.text-field input[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n}\n.textarea-field {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  line-height: var(--f-line-height-large);\n  margin: 0 0 calc(var(--f-margin-component-bottom) * var(--f-density-factor));\n  position: relative;\n  width: var(--f-width-full);\n}\n@media (min-width: 640px) {\n.textarea-field--inline {\n    margin-bottom: calc(0.75rem * var(--f-density-factor));\n    flex-direction: row;\n    justify-content: flex-start;\n    width: auto;\n}\n.textarea-field--inline .label {\n    width: auto;\n    margin-right: 1rem;\n    padding-top: calc(0.5rem * var(--f-density-factor));\n}\n}\n.textarea-field__textarea {\n  background-color: var(--fkds-color-background-primary);\n  box-shadow: var(--f-input-shadow-inset);\n  border-radius: var(--f-border-radius-medium);\n  border: var(--f-border-width-medium) solid var(--fkds-color-border-primary);\n  box-sizing: border-box;\n  font-size: var(--f-font-size-standard);\n  min-height: calc(var(--f-height-large) * var(--f-density-factor));\n  padding: calc(0.5rem * var(--f-density-factor)) 0.75rem;\n  width: var(--f-width-full);\n}\n.textarea-field__textarea[rows] {\n  height: auto;\n}\n.textarea-field__textarea:disabled {\n  border-color: var(--fkds-color-border-disabled);\n  color: var(--fkds-color-text-disabled);\n  background-color: var(--fkds-color-background-disabled);\n}\n.textarea-field--error .textarea-field__textarea {\n  border-color: var(--fkds-color-feedback-border-negative);\n}\n.textarea-field__resize--none {\n  resize: none;\n}\n.textarea-field__resize--vertical {\n  resize: vertical;\n}\n.tooltip {\n  display: none;\n  overflow: hidden;\n  width: 100%;\n  margin-bottom: calc(1rem * var(--f-density-factor));\n}\n.tooltip.expanded, .tooltip.animating {\n  display: block;\n}\n.tooltip__container {\n  text-wrap: pretty;\n  margin-bottom: calc(0.25rem * var(--f-density-factor));\n}\n.tooltip__container:has(+ .tooltip.expanded), .tooltip__container:has(+ .tooltip.animating) {\n  margin-bottom: 0;\n}\n.tooltip__container .label {\n  display: inline;\n  width: max-content;\n}\n.tooltip__container h1,\n.tooltip__container h2,\n.tooltip__container h3,\n.tooltip__container h4,\n.tooltip__container h5,\n.tooltip__container h6 {\n  display: inline;\n  width: max-content;\n}\n.tooltip__container:has(h1) .tooltip__button {\n  bottom: 0.2lh;\n}\n.tooltip__container:has(h2) .tooltip__button {\n  bottom: 0.1lh;\n}\n.tooltip__container:has(h3) .tooltip__button {\n  bottom: 0;\n}\n.tooltip__button {\n  display: inline-flex;\n  appearance: none;\n  background: none;\n  border: 0;\n  padding: 0;\n  cursor: pointer;\n  margin-left: 0.25rem;\n  position: relative;\n  bottom: -0.1lh;\n}\n.tooltip__button .icon {\n  top: 0;\n  left: 0;\n}\n.tooltip__button,\n.tooltip__button .icon,\n.tooltip__button .icon-stack {\n  width: 1em;\n  height: 1em;\n}\n.tooltip__body {\n  padding: 0 1rem;\n}\n.tooltip__header {\n  font-size: var(--f-font-size-large);\n  font-weight: var(--f-font-weight-bold);\n  line-height: var(--f-line-height-medium);\n  padding: 0 1rem;\n  margin-bottom: 0.5rem;\n}\n.tooltip .close-button {\n  margin: var(--f-tooltip-close-button-margin);\n}\n.tooltip__footer {\n  display: flex;\n  justify-content: flex-end;\n}\n.tooltip__bubble {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  margin-top: 10px;\n  margin-bottom: 0.5rem;\n  border: 2px solid var(--fkds-color-feedback-border-info);\n  border-radius: var(--f-border-radius-small);\n  background-color: var(--fkds-color-feedback-background-info);\n  padding-top: 1rem;\n}\n.tooltip__bubble::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: clamp(20px / 2, var(--f-tooltip-offset), 100% - 20px / 2);\n  border-style: solid;\n  border-width: 0 10px 10px 10px;\n  border-color: transparent transparent var(--fkds-color-feedback-border-info);\n  translate: -50% -100%;\n}\n.tooltip__bubble::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: clamp(20px / 2, var(--f-tooltip-offset), 100% - 20px / 2);\n  border-style: solid;\n  border-width: 0 7.2px 7.2px 7.2px;\n  border-color: transparent transparent var(--fkds-color-feedback-background-info);\n  translate: -50% -100%;\n}\n.wizard {\n  margin-top: 20px;\n}\n\n/* Selectors */\n/* position adjustments for lines */\n/* change line-gap-to-circle variable to change distances */\n.wizard-step {\n  display: grid;\n  grid-template: "wizard-step__line-up wizard-step__step-of" min-content "wizard-step__icon-container wizard-step__header" min-content "wizard-step__content wizard-step__content" min-content/min-content 1fr;\n  gap: 0 0.5rem;\n}\n.wizard-step:first-of-type .wizard-step__line-up {\n  border: 0;\n}\n.wizard-step:last-of-type .wizard-step__line-down,\n.wizard-step:last-of-type .wizard-step__icon-container__line-down {\n  border: 0;\n}\n.wizard-step .wizard-step__header__title {\n  font-size: 1.125rem;\n  margin-top: 2px;\n  margin-bottom: 20px;\n}\n.wizard-step .wizard-step__icon-container {\n  grid-area: wizard-step__icon-container;\n  display: flex;\n  flex-direction: column;\n}\n.wizard-step .wizard-step__icon-container__circle {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 2px solid var(--fkds-color-border-strong);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.25rem;\n  font-weight: bold;\n  text-align: center;\n  transition: background-color 400ms ease-out, border-color 400ms ease-out, opacity 400ms ease-out;\n}\n@media (max-width: 639.98px) {\n.wizard-step .wizard-step-body__border-container {\n    display: none;\n}\n}\n.wizard-step .wizard-step-body__border-container .wizard-step__line-down {\n  margin-top: 0;\n}\n.wizard-step .icon.f-icon-success {\n  display: none;\n}\n.wizard-step .wizard-step__header {\n  grid-area: wizard-step__header;\n}\n.wizard-step .wizard-step__step-of {\n  color: var(--fkds-color-text-secondary);\n  font-weight: normal;\n  font-size: 1rem;\n}\n.wizard-step .wizard-step__line-down,\n.wizard-step .wizard-step__icon-container__line-down,\n.wizard-step .wizard-step__line-up {\n  border-left: 2px solid var(--fkds-color-border-strong);\n  margin-left: 14px;\n}\n.wizard-step .wizard-step__icon-container__line-down {\n  margin-top: 4px;\n}\n.wizard-step .wizard-step__line-down {\n  grid-area: wizard-step__line-down;\n}\n.wizard-step .wizard-step__content {\n  margin-left: 0.5rem;\n  min-width: 0;\n  grid-area: wizard-step__content;\n}\n.wizard-step .wizard-step__line-up {\n  margin-bottom: 4px;\n  grid-area: wizard-step__line-up;\n}\n.wizard-step--open + .wizard-step--pending .wizard-step__line-up {\n  padding-top: 20px;\n  margin-top: -0.5rem;\n}\n.wizard-step .wizard-step__icon-container__line-down {\n  flex: 1;\n}\n@media (min-width: 640px) {\n.wizard-step {\n    grid-template: "wizard-step__line-up wizard-step__step-of" min-content "wizard-step__icon-container wizard-step__header" min-content "wizard-step__line-down wizard-step__content" min-content/min-content 1fr;\n}\n.wizard-step--open + .wizard-step--pending .wizard-step__line-up {\n    margin-top: 0;\n    padding-top: 0;\n}\n.wizard-step .wizard-step__content {\n    margin-left: 0;\n}\n}\n.wizard-step--open .wizard-step__header__title {\n  color: var(--fkds-color-text-primary);\n}\n.wizard-step--open .wizard-step__step-of {\n  display: block;\n}\n.wizard-step--done .wizard-step__header__title .anchor {\n  color: var(--fkds-color-feedback-text-positive);\n  text-decoration-color: var(--fkds-color-feedback-text-positive);\n  text-decoration-thickness: 2px;\n  text-underline-offset: 0.25em;\n}\n.wizard-step--done .wizard-step__header__title .anchor:hover {\n  text-decoration-color: var(--fkds-color-feedback-text-positive);\n  text-decoration-thickness: 3px;\n  text-underline-offset: 0.25em;\n}\n.wizard-step--done .icon.f-icon-success {\n  display: block;\n  color: var(--fkds-icon-color-content-inverted);\n  width: 20px;\n  height: auto;\n}\n.wizard-step--done .wizard-step__icon-container__circle {\n  background-color: var(--f-icon-color-wizard-step-done);\n  border-color: var(--f-icon-color-wizard-step-done);\n}\n.wizard-step--done .wizard-step__icon-container__number {\n  display: none;\n}\n.wizard-step--pending .wizard-step__header__title {\n  color: var(--f-text-color-discrete);\n}\n.wizard-step--pending .wizard-step__icon-container__circle {\n  border: 2px solid var(--fkds-color-border-strong);\n  background-color: var(--fkds-color-background-disabled);\n  color: var(--f-icon-color-discrete);\n}\n@media (forced-colors: active) {\n.wizard-step .icon.f-icon-success {\n    color: CanvasText;\n}\n}\n\n/* stylelint-disable no-invalid-position-at-import-rule -- technical debt */\n.iflex {\n  display: flex;\n}\n.iflex--gap-1x {\n  margin-left: -0.25rem;\n  margin-right: -0.25rem;\n}\n.iflex--gap-1x .iflex__item {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.iflex--gap-2x {\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n}\n.iflex--gap-2x .iflex__item {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.iflex--gap-3x {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n}\n.iflex--gap-3x .iflex__item {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.iflex--gap-4x {\n  margin-left: -1rem;\n  margin-right: -1rem;\n}\n.iflex--gap-4x .iflex__item {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.iflex--gap-5x {\n  margin-left: -1.25rem;\n  margin-right: -1.25rem;\n}\n.iflex--gap-5x .iflex__item {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.iflex--gap-6x {\n  margin-left: -1.5rem;\n  margin-right: -1.5rem;\n}\n.iflex--gap-6x .iflex__item {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.iflex--gap-7x {\n  margin-left: -1.75rem;\n  margin-right: -1.75rem;\n}\n.iflex--gap-7x .iflex__item {\n  padding-left: 1.75rem;\n  padding-right: 1.75rem;\n}\n.iflex--gap-8x {\n  margin-left: -2rem;\n  margin-right: -2rem;\n}\n.iflex--gap-8x .iflex__item {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.iflex__item {\n  flex: 1 0 0%;\n}\n.iflex--grow {\n  flex: 1 1 auto;\n}\n.iflex--shrink {\n  flex: 0 1 auto;\n}\n.iflex--align-top {\n  align-self: flex-start;\n}\n.iflex--align-center {\n  align-self: center;\n}\n.iflex--align-bottom {\n  align-self: flex-end;\n}\n@media (max-width: 639.98px) {\n.iflex--collapse {\n    display: block;\n}\n}\n.iflex--wrap {\n  flex-wrap: wrap;\n}\n.iflex--float-right {\n  justify-content: flex-end;\n}\n.iflex--float-center {\n  justify-content: center;\n}\n.ipopupmenu {\n  background-color: var(--f-background-popupmenu);\n}\n.ipopupmenu__list {\n  margin: 0;\n  border: 1px solid var(--f-border-color-popupmenu);\n  padding: 0.5rem;\n}\n.ipopupmenu__list__item {\n  cursor: pointer;\n  list-style-type: none;\n  white-space: nowrap;\n}\n.ipopupmenu__list__item a,\n.ipopupmenu__list__item a:visited,\n.ipopupmenu__list__item a:active {\n  color: var(--f-text-color-popupmenu);\n}\n.ipopupmenu__list__item a:hover {\n  color: var(--f-text-color-popupmenu-hover);\n}\n.ipopupmenu--vertical .ipopupmenu__list {\n  display: block;\n}\n.ipopupmenu--vertical .ipopupmenu__list__item {\n  padding: 0.75rem;\n  display: block;\n}\n.ipopupmenu--vertical .ipopupmenu__list__item:hover {\n  background-color: var(--f-background-popupmenu-vertical-hover);\n}\n.ipopupmenu--vertical .ipopupmenu__list__item--highlight {\n  background-color: var(--f-background-popupmenu-vertical-highlight);\n  font-weight: var(--f-font-weight-medium);\n}\n.iskiplink {\n  position: absolute;\n  top: -200px;\n}\n.iskiplink:focus {\n  color: black;\n  background-color: var(--f-background-skiplink-focus);\n  left: 10px;\n  top: 45px;\n}\n.animate-expand {\n  transition: var(--f-animation-expand-close);\n  overflow: hidden;\n  visibility: hidden;\n}\n.animate-expand--expanded {\n  transition: var(--f-animation-expand-open);\n  opacity: 1;\n  visibility: visible;\n}\n.animate-expand--opacity {\n  opacity: 0;\n}\n.calendar-month__table {\n  border-spacing: 2px;\n  padding: 0 0.5rem 1rem;\n  width: 100%;\n  border-collapse: separate;\n  border: none;\n  margin: 0;\n}\n.calendar-month__col--week {\n  width: 2%;\n}\n.calendar-month__col--day {\n  width: 14%;\n}\n.calendar-month__header-cell {\n  padding: 0.5rem 0;\n  text-align: center;\n}\n.calendar-month__header-cell abbr,\n.calendar-month__header-cell span {\n  font-weight: var(--f-font-weight-normal);\n  text-decoration: none;\n  border-bottom: none;\n  text-transform: none;\n  font-size: 1rem;\n  cursor: auto;\n  color: var(--fkds-color-text-secondary);\n}\n.calendar-month__cell {\n  height: 2.75rem;\n  padding: 0;\n}\n.calendar-month__cell--week-number {\n  vertical-align: middle;\n  padding-right: 0.25rem;\n  text-align: right;\n  min-width: 2rem;\n  color: var(--fkds-color-text-secondary);\n}\n.calendar-month__button {\n  appearance: none;\n  border: 0;\n  cursor: pointer;\n  padding: 0;\n  width: 100%;\n  background-color: var(--fkds-color-background-secondary);\n  font-size: 1rem;\n}\n.calendar-month__button:focus {\n  position: relative;\n  z-index: 9997;\n}\n.calendar-month__button:focus[tabindex="-1"] {\n  box-shadow: var(--f-focus-box-shadow);\n}\n.calendar-navbar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  text-align: center;\n  border-bottom: var(--f-border-width-medium) solid var(--fkds-color-border-weak);\n  padding: 1rem;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n  font-size: var(--f-font-size-h3);\n}\n.calendar-navbar__month {\n  margin-right: auto;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.calendar-navbar__arrow--previous {\n  transform: scaleX(-1);\n}\n.calendar-navbar__icon {\n  color: var(--fkds-icon-color-action-content-inverted-default);\n  background-color: var(--fkds-color-action-background-primary-default);\n  width: var(--f-icon-size-large);\n  height: var(--f-icon-size-large);\n  padding: 5px;\n  border-radius: 50%;\n  box-shadow: var(--f-button-shadow);\n}\n.calendar-navbar__icon--disabled {\n  color: var(--fkds-icon-color-content-disabled);\n  background-color: var(--fkds-color-background-disabled);\n  padding: 4px;\n  border: 1px solid var(--fkds-color-border-disabled);\n  box-shadow: none;\n}\n.calendar-navbar__arrow {\n  padding: 0;\n  display: flex;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n.calendar__wrapper {\n  width: 100%;\n}\n.popup--overlay {\n  position: absolute;\n  top: 0;\n}\n.popup--overlay .popup__wrapper {\n  left: -10000px;\n  max-width: fit-content;\n  border-radius: var(--f-border-radius-small);\n  position: absolute;\n  z-index: 9996;\n  box-shadow: var(--f-box-modal-shadow);\n}\n.popup--inline {\n  position: static;\n}\n.popup--inline .popup__wrapper {\n  box-sizing: border-box;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  position: static;\n}\n.popup-error {\n  --i-popup-error-offset: 24px;\n}\n.popup-error--overlay {\n  position: absolute;\n  top: 0;\n}\n.popup-error--overlay .popup-error__wrapper {\n  left: -10000px;\n  position: absolute;\n  z-index: 9996;\n  white-space: nowrap;\n}\n.popup-error--inline {\n  position: static;\n}\n.popup-error--inline .popup-error__wrapper {\n  box-sizing: border-box;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  position: static;\n}\n.popup-error--arrow {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5em 10px;\n  background: var(--f-border-color-error);\n  line-height: 24px;\n  position: relative;\n}\n.popup-error--arrow .popup-error__button {\n  margin: 0;\n  min-height: 24px;\n  min-width: 24px;\n  padding: 0;\n  padding-left: 5px;\n}\n.popup-error--arrow::before {\n  content: "";\n  position: absolute;\n  z-index: -1;\n  inset: 0;\n  padding: var(--f-border-width-medium);\n  border-radius: inherit;\n  background: var(--f-background-error) content-box;\n}\n.popup-error--top {\n  border-radius: min(5.7735026919px, 100% - var(--i-popup-error-offset) - 60deg) min(5.7735026919px, 100% - (100% - var(--i-popup-error-offset)) - 60deg) 5.7735026919px 5.7735026919px/5.7735026919px;\n  border-image: conic-gradient(var(--f-border-color-error) 0 0) fill 0/0 max(0%, 100% - (100% - var(--i-popup-error-offset)) - 5.7735026919px) 0.2em max(0%, 100% - var(--i-popup-error-offset) - 5.7735026919px)/10px 0 0 0;\n  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0, min(100%, 100% - var(--i-popup-error-offset) + 5.7735026919px) 0, calc(100% - var(--i-popup-error-offset)) -10px, max(0%, 100% - var(--i-popup-error-offset) - 5.7735026919px) 0);\n}\n.popup-error--bottom {\n  border-radius: 5.7735026919px 5.7735026919px min(5.7735026919px, 100% - (100% - var(--i-popup-error-offset)) - 60deg) min(5.7735026919px, 100% - var(--i-popup-error-offset) - 60deg)/5.7735026919px;\n  border-image: conic-gradient(var(--f-border-color-error) 0 0) fill 0/0.2em max(0%, 100% - (100% - var(--i-popup-error-offset)) - 5.7735026919px) 0 max(0%, 100% - var(--i-popup-error-offset) - 5.7735026919px)/0 0 10px 0;\n  clip-path: polygon(0 100%, 0 0, 100% 0, 100% 100%, min(100%, 100% - var(--i-popup-error-offset) + 5.7735026919px) 100%, calc(100% - var(--i-popup-error-offset)) calc(100% + 10px), max(0%, 100% - var(--i-popup-error-offset) - 5.7735026919px) 100%);\n}\n.popup-error--left {\n  border-radius: 5.7735026919px/min(5.7735026919px, 100% - var(--i-popup-error-offset) - 60deg) 5.7735026919px 5.7735026919px min(5.7735026919px, 100% - (100% - var(--i-popup-error-offset)) - 60deg);\n  border-image: conic-gradient(var(--f-border-color-error) 0 0) fill 0/max(0%, 100% - var(--i-popup-error-offset) - 5.7735026919px) 0.2em max(0%, 100% - (100% - var(--i-popup-error-offset)) - 5.7735026919px) 0/0 0 0 10px;\n  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 min(100%, 100% - var(--i-popup-error-offset) + 5.7735026919px), -10px calc(100% - var(--i-popup-error-offset)), 0 max(0%, 100% - var(--i-popup-error-offset) - 5.7735026919px));\n}\n.popup-error--right {\n  border-radius: 5.7735026919px/5.7735026919px min(5.7735026919px, 100% - var(--i-popup-error-offset) - 60deg) min(5.7735026919px, 100% - (100% - var(--i-popup-error-offset)) - 60deg) 5.7735026919px;\n  border-image: conic-gradient(var(--f-border-color-error) 0 0) fill 0/max(0%, 100% - var(--i-popup-error-offset) - 5.7735026919px) 0 max(0%, 100% - (100% - var(--i-popup-error-offset)) - 5.7735026919px) 0.2em/0 10px 0 0;\n  clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%, 100% min(100%, 100% - var(--i-popup-error-offset) + 5.7735026919px), calc(100% + 10px) calc(100% - var(--i-popup-error-offset)), 100% max(0%, 100% - var(--i-popup-error-offset) - 5.7735026919px));\n}\n.popup-error--top::before {\n  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0, min(100% - var(--f-border-width-medium), 100% - var(--i-popup-error-offset) + 5.7735026919px - var(--f-border-width-medium) * 0.5773502692) var(--f-border-width-medium), calc(100% - var(--i-popup-error-offset)) calc(var(--f-border-width-medium) / 0.5 - 10px), max(var(--f-border-width-medium), 100% - var(--i-popup-error-offset) - 5.7735026919px + var(--f-border-width-medium) * 0.5773502692) var(--f-border-width-medium));\n  border-image: conic-gradient(var(--f-background-error) 0 0) fill 0/0 max(var(--f-border-width-medium), 100% - (100% - var(--i-popup-error-offset)) - 5.7735026919px) 0.2em max(var(--f-border-width-medium), 100% - var(--i-popup-error-offset) - 5.7735026919px)/10px 0 0 0;\n}\n.popup-error--bottom::before {\n  clip-path: polygon(0 100%, 0 0, 100% 0, 100% 100%, min(100% - var(--f-border-width-medium), 100% - var(--i-popup-error-offset) + 5.7735026919px - var(--f-border-width-medium) * 0.5773502692) calc(100% - var(--f-border-width-medium)), calc(100% - var(--i-popup-error-offset)) calc(100% + 10px - var(--f-border-width-medium) / 0.5), max(var(--f-border-width-medium), 100% - var(--i-popup-error-offset) - 5.7735026919px + var(--f-border-width-medium) * 0.5773502692) calc(100% - var(--f-border-width-medium)));\n  border-image: conic-gradient(var(--f-background-error) 0 0) fill 0/0.2em max(var(--f-border-width-medium), 100% - (100% - var(--i-popup-error-offset)) - 5.7735026919px) 0 max(var(--f-border-width-medium), 100% - var(--i-popup-error-offset) - 5.7735026919px)/0 0 10px 0;\n}\n.popup-error--left::before {\n  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, var(--f-border-width-medium) min(100% - var(--f-border-width-medium), 100% - var(--i-popup-error-offset) + 5.7735026919px - var(--f-border-width-medium) * 0.5773502692), calc(var(--f-border-width-medium) / 0.5 - 10px) calc(100% - var(--i-popup-error-offset)), var(--f-border-width-medium) max(var(--f-border-width-medium), 100% - var(--i-popup-error-offset) - 5.7735026919px + var(--f-border-width-medium) * 0.5773502692));\n  border-image: conic-gradient(var(--f-background-error) 0 0) fill 0/max(var(--f-border-width-medium), 100% - var(--i-popup-error-offset) - 5.7735026919px) 0.2em max(var(--f-border-width-medium), 100% - (100% - var(--i-popup-error-offset)) - 5.7735026919px) 0/0 0 0 10px;\n}\n.popup-error--right::before {\n  clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%, calc(100% - var(--f-border-width-medium)) min(100% - var(--f-border-width-medium), 100% - var(--i-popup-error-offset) + 5.7735026919px - var(--f-border-width-medium) * 0.5773502692), calc(100% + 10px - var(--f-border-width-medium) / 0.5) calc(100% - var(--i-popup-error-offset)), calc(100% - var(--f-border-width-medium)) max(var(--f-border-width-medium), 100% - var(--i-popup-error-offset) - 5.7735026919px + var(--f-border-width-medium) * 0.5773502692));\n  border-image: conic-gradient(var(--f-background-error) 0 0) fill 0/max(var(--f-border-width-medium), 100% - var(--i-popup-error-offset) - 5.7735026919px) 0 max(var(--f-border-width-medium), 100% - (100% - var(--i-popup-error-offset)) - 5.7735026919px) 0.2em/0 10px 0 0;\n}\n:host {\n  display: contents;\n}\n:host([hidden]) {\n  display: none;\n}\n:host ::slotted([slot=icon]) {\n  display: contents;\n}\n::slotted([slot=header]) {\n  font-weight: var(--f-font-weight-medium) !important;\n  font-size: 1.25rem !important;\n  line-height: 1 !important;\n  margin: 0 !important;\n}\n.panel__wrapper {\n  flex-grow: 1;\n  display: flex;\n}\n.panel {\n  background: var(--f-page-layout-background);\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem;\n  gap: 0.5rem;\n}\n.panel__header {\n  flex: 0 0 auto;\n  display: flex;\n  gap: 0.25rem;\n  align-items: baseline;\n  justify-content: center;\n}\n.attach-left .panel__header {\n  flex-direction: row;\n}\n.attach-right .panel__header {\n  flex-direction: row-reverse;\n}\n.panel__button {\n  flex: 0 0 auto;\n  appearance: none;\n  line-height: 1;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  padding: 1rem;\n  width: max-content;\n}\n.panel__button:hover {\n  background-color: var(--fkds-color-action-background-secondary-hover);\n}\n.panel__button:active, .panel__button:focus {\n  border-radius: 0;\n  box-shadow: var(--f-focus-box-shadow);\n  outline: 2px solid transparent;\n  background-color: var(--fkds-color-action-background-secondary-hover);\n}\n.panel__title {\n  flex: 1 1 auto;\n}\n.panel__content {\n  flex: 1 0 auto;\n}\n.panel__footer {\n  flex: 0 0 auto;\n}\n.expanded.attach-left .panel__button {\n  transform: scaleX(1);\n}\n.collapsed.attach-left .panel__button {\n  transform: scaleX(-1);\n}\n.expanded.attach-right .panel__button {\n  transform: scaleX(-1);\n}\n.collapsed.attach-right .panel__button {\n  transform: scaleX(1);\n}';
var MinimizablePanel = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["styles", [_style_0]]]);
var _hoisted_1$6 = ["context", "close-prefix", "open-prefix"];
var _hoisted_2$4 = {
  slot: "icon"
};
var ceTag = "ce-minimizable-panel";
var header = "header";
var content = "content";
var footer = "footer";
var _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "FMinimizablePanel",
  props: {
    context: {}
  },
  setup(__props) {
    if (!customElements.get(ceTag)) {
      customElements.define(ceTag, defineCustomElement(MinimizablePanel));
    }
    const $t2 = useTranslate();
    const closePrefix = (
      /** Del av skärmläsartext för knapp då panel är öppen. */
      $t2("fkui.minimizable-panel.close", "Minimera")
    );
    const openPrefix = (
      /** Del av skärmläsartext för knapp då panel är minimerad. */
      $t2("fkui.minimizable-panel.open", "\xC5terst\xE4ll")
    );
    const defaultContext = (
      /** Del av skärmläsartext för knapp. */
      $t2("fkui.minimizable-panel.context", "panel")
    );
    const isOpen = ref(false);
    const overlay = ref(false);
    const offset2 = ref(void 0);
    useResize({
      enabled: computed(() => {
        return Boolean(isOpen.value);
      }),
      overlay: computed(() => {
        return Boolean(overlay.value);
      }),
      offset: computed(() => {
        return Number(offset2.value);
      })
    });
    const ceContext = computed(() => {
      var _props$context;
      return (_props$context = __props.context) !== null && _props$context !== void 0 ? _props$context : defaultContext;
    });
    function onToggle(e) {
      isOpen.value = e.detail[0];
      overlay.value = e.detail[1];
      offset2.value = e.detail[2];
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ce-minimizable-panel", {
        context: ceContext.value,
        "close-prefix": unref(closePrefix),
        "open-prefix": unref(openPrefix),
        onToggle
      }, [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({
        isOpen: isOpen.value,
        header,
        footer,
        content
      }))), _cache[0] || (_cache[0] = createTextVNode()), createElementVNode("div", _hoisted_2$4, [renderSlot(_ctx.$slots, "icon", normalizeProps(guardReactiveProps({
        isOpen: isOpen.value
      })), () => [createVNode(unref(FIcon), {
        name: "chevrons-left"
      })])])], 40, _hoisted_1$6);
    };
  }
});
var _hoisted_1$5 = {
  class: "progress"
};
var _hoisted_2$3 = ["aria-label", "aria-valuenow", "aria-valuetext"];
var _hoisted_3$2 = {
  class: "sr-only"
};
var MIN_VALUE = 0;
var MAX_VALUE = 100;
var _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "FProgressbar",
  props: {
    /**
     * Sets the progress. Higher value indicates further progress.
     *
     * Value must be in range 0-100.
     */
    value: {
      type: Number,
      required: true,
      validator(value) {
        return value >= 0 && value <= 100;
      }
    },
    /**
     * Text that the screenreader will read.
     *
     * `%VALUE%` can be used as a placeholder for the actual value e.g
     * `"You have uploaded %VALUE% percent"`.
     */
    valueText: {
      type: String,
      required: false,
      default: "Du har slutf\xF6rt %VALUE% %."
    },
    /**
     * Accessible name for this progressbar. Should describe the purpose of this
     * progressbar.
     */
    /* eslint-disable-next-line vue/prop-name-casing -- vue does not allow ariaLabel as a prop as it collides with internal types */
    "aria-label": {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const ariaLabel = props.ariaLabel;
    function clamp2(val) {
      return Math.round(Math.min(Math.max(val || 0, MIN_VALUE), MAX_VALUE));
    }
    const progressValueNow = computed(() => clamp2(props.value));
    const cssWidth = computed(() => `width: ${progressValueNow.value}%`);
    const progressBarClass = computed(() => {
      if (progressValueNow.value === MIN_VALUE) {
        return "progress__meter--pending";
      } else if (progressValueNow.value === MAX_VALUE) {
        return "progress__meter--finished";
      } else {
        return "progress__meter--inprogress";
      }
    });
    const progressText = computed(() => {
      return `${props.valueText.replace("%VALUE%", progressValueNow.value.toString())}`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [createElementVNode("span", {
        class: normalizeClass(["progress__meter", progressBarClass.value]),
        role: "progressbar",
        "aria-label": unref(ariaLabel),
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-valuenow": progressValueNow.value,
        "aria-valuetext": progressText.value,
        style: normalizeStyle(cssWidth.value)
      }, [createElementVNode("span", _hoisted_3$2, toDisplayString(progressText.value), 1)], 14, _hoisted_2$3)]);
    };
  }
});
var anyType = [String, Object, Array, Number, Date, null, Boolean];
var _sfc_main$4 = defineComponent({
  name: "FRadioField",
  inheritAttrs: false,
  props: {
    /**
     * Set to `true`, empty string `""` or string `"disabled"` to disable this input field.
     */
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * The id for the input id attribute.
     * The id for the label for attribute.
     * If the prop is not set a random value will be generated.
     */
    id: {
      type: String,
      required: false,
      default: () => ElementIdService.generateElementId()
    },
    /**
     * The value for the input checked attribute.
     * @model
     */
    // ? The rule is disabled so that the `checked` prop can be undefined or null.
    /* eslint-disable-next-line vue/require-default-prop -- technical debt,
    /* it should contain a default value of undefined and proptype should
    /* include undefined (see comment on line above) */
    modelValue: {
      type: anyType,
      required: false
    },
    /**
     * The value for the input.
     */
    value: {
      type: anyType,
      required: true
    }
  },
  emits: ["change", "update:modelValue"],
  setup() {
    const {
      sharedName,
      showDetails,
      getFieldsetLabelText
    } = useFieldset();
    return {
      sharedName,
      showDetails,
      getFieldsetLabelText
    };
  },
  data() {
    return {
      height: 0,
      initialStyle: {
        overflow: "hidden",
        transition: "height 400ms cubic-bezier(0.46, 0.03, 0.52, 0.96)"
      },
      hiddenStyle: {
        height: "auto",
        position: "absolute",
        visibility: "hidden"
      },
      visibleStyle: {
        width: "",
        position: "",
        visibility: "",
        height: "0px"
      },
      openedStyle: {
        height: "auto"
      }
    };
  },
  computed: {
    attrs() {
      var _this$sharedName;
      return {
        ...this.$attrs,
        value: this.value,
        checked: this.value === this.modelValue,
        name: (_this$sharedName = this.sharedName) !== null && _this$sharedName !== void 0 ? _this$sharedName : this.$attrs.name,
        onChange: (event) => {
          if (event.target instanceof HTMLInputElement) {
            this.$emit("update:modelValue", this.value);
            this.$emit("change", this.value);
          }
        },
        onInput: (event) => {
          event.target.focus();
        }
      };
    },
    disabledClass() {
      return this.disabled ? "disabled" : "";
    }
  },
  methods: {
    async onValidity({
      detail
    }) {
      if (detail.target !== this.$el.querySelector("input")) {
        return;
      }
      await this.$nextTick();
      let errorMessage = "";
      if (hasSlot(this, "default")) {
        const labelText = this.getFieldsetLabelText();
        if (labelText) {
          errorMessage = `${labelText} ${renderSlotText(this.$slots.default)}`;
        } else {
          errorMessage = `${renderSlotText(this.$slots.default)}`;
        }
      }
      const element = this.$el.querySelector(`#${detail.elementId}`);
      if (element) {
        dispatchComponentValidityEvent(element, {
          ...detail,
          errorMessage,
          focusElementId: detail.elementId
        });
      }
    },
    enter(element) {
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
    },
    afterEnter(element) {
      const htmlElement = getHTMLElementFromVueRef(element);
      Object.assign(htmlElement.style, this.openedStyle);
    },
    leave(element) {
      const htmlElement = getHTMLElementFromVueRef(element);
      const height = getComputedStyle(element).height;
      htmlElement.style.height = height;
      getComputedStyle(element).height;
      setTimeout(() => {
        Object.assign(htmlElement.style, this.visibleStyle);
      });
    }
  }
});
var _hoisted_1$4 = ["id", "disabled"];
var _hoisted_2$2 = ["for"];
var _hoisted_3$1 = {
  key: 0,
  class: "radio-button__details"
};
var _hoisted_4$1 = {
  key: 0,
  class: "radio-button__details"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["radio-button", _ctx.disabledClass]),
    onValidity: _cache[0] || (_cache[0] = (...args) => _ctx.onValidity && _ctx.onValidity(...args))
  }, [createElementVNode("input", mergeProps({
    id: _ctx.id,
    type: "radio",
    class: "radio-button__input",
    disabled: _ctx.disabled
  }, _ctx.attrs), null, 16, _hoisted_1$4), _cache[7] || (_cache[7] = createTextVNode()), createElementVNode("label", {
    class: normalizeClass(_ctx.$slots.details ? "radio-button__label radio-button__width" : "radio-button__label"),
    for: _ctx.id
  }, [renderSlot(_ctx.$slots, "default"), _cache[6] || (_cache[6] = createTextVNode()), _ctx.$slots.details ? (openBlock(), createElementBlock(Fragment, {
    key: 0
  }, [_ctx.showDetails === "always" ? (openBlock(), createElementBlock("span", _hoisted_3$1, [_cache[1] || (_cache[1] = createElementVNode("br", null, null, -1)), _cache[2] || (_cache[2] = createTextVNode()), renderSlot(_ctx.$slots, "details")])) : createCommentVNode("", true), _cache[5] || (_cache[5] = createTextVNode()), _ctx.showDetails === "when-selected" ? (openBlock(), createBlock(Transition, {
    key: 1,
    onEnter: _ctx.enter,
    onAfterEnter: _ctx.afterEnter,
    onLeave: _ctx.leave
  }, {
    default: withCtx(() => [_ctx.value === _ctx.modelValue ? (openBlock(), createElementBlock("span", _hoisted_4$1, [_cache[3] || (_cache[3] = createElementVNode("br", null, null, -1)), _cache[4] || (_cache[4] = createTextVNode()), renderSlot(_ctx.$slots, "details", {
      height: _ctx.height
    })])) : createCommentVNode("", true)]),
    _: 3
  }, 8, ["onEnter", "onAfterEnter", "onLeave"])) : createCommentVNode("", true)], 64)) : createCommentVNode("", true)], 10, _hoisted_2$2)], 34);
}
var FRadioField = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
var _sfc_main$3 = defineComponent({
  name: "FStaticField",
  components: {
    FLabel
  }
});
var _hoisted_1$3 = {
  class: "output-field"
};
var _hoisted_2$1 = {
  class: "output-field__output"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_label = resolveComponent("f-label");
  return openBlock(), createElementBlock("div", _hoisted_1$3, [createVNode(_component_f_label, null, createSlots({
    default: withCtx(() => [renderSlot(_ctx.$slots, "label")]),
    description: withCtx(({
      descriptionClass,
      formatDescriptionClass
    }) => [renderSlot(_ctx.$slots, "description", {
      descriptionClass,
      formatDescriptionClass
    })]),
    _: 2
  }, [_ctx.$slots.tooltip ? {
    name: "tooltip",
    fn: withCtx(() => [renderSlot(_ctx.$slots, "tooltip")]),
    key: "0"
  } : void 0]), 1024), _cache[2] || (_cache[2] = createTextVNode()), createElementVNode("p", _hoisted_2$1, [renderSlot(_ctx.$slots, "default")])]);
}
var FStaticField = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
var _sfc_main$2 = defineComponent({
  name: "FTextareaField",
  components: {
    FLabel
  },
  inheritAttrs: false,
  props: {
    /**
     * The id for the input id attribute.
     * The id for the label for attribute.
     * If the prop is not set a random value will be generated.
     */
    id: {
      type: String,
      required: false,
      default: () => ElementIdService.generateElementId()
    },
    /**
     * The value for the input.
     * If the prop is not set undefined will be used.
     * @model
     */
    modelValue: {
      type: String,
      required: false,
      default: void 0
    },
    /**
     * The number of characters for when the "characters left" warning should be shown.
     * A value of 100 means that when 100 or less characters is left the warning is shown.
     * If softLimit is used, then maxlength is required.
     * If the prop is not set undefined will be used, which means that no warning will be shown.
     */
    softLimit: {
      type: Number,
      required: false,
      default: void 0
    },
    /**
     * The maximum amount of characters permitted in the textarea.
     * If the prop is not set undefined will be used, which means unlimited.
     */
    maxlength: {
      type: Number,
      required: false,
      default: void 0
    },
    /**
     * The string that should be shown in the "characters left" warning.
     * Must contain the word %charactersLeft% which is used to interpolate the number of characters left into the warning string.
     * If the prop is not set "Antal tecken kvar: %charactersLeft%" will be used.
     */
    charactersLeftWarning: {
      type: String,
      required: false,
      default: "Antal tecken kvar: %charactersLeft%"
    },
    /**
     * Specifies that the component should be disabled, i.e. unusable.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Enabling vertical resizing of the textarea
     */
    resizable: {
      type: Boolean,
      default: false
    }
  },
  emits: ["input", "update:modelValue"],
  data() {
    return {
      validityMode: "INITIAL",
      validationMessage: ""
    };
  },
  computed: {
    attrs() {
      return {
        rows: 4,
        ...this.$attrs,
        value: this.modelValue,
        maxlength: this.maxlength
      };
    },
    isValid() {
      return this.validityMode === "VALID";
    },
    hasError() {
      return this.validityMode === "ERROR";
    },
    validityClass() {
      return {
        ["textarea-field--error"]: this.hasError
      };
    },
    charactersLeft() {
      if (this.modelValue) {
        return this.maxlength - this.modelValue.length;
      } else {
        return this.maxlength;
      }
    },
    showCharactersLeftWarning() {
      return isSet(this.softLimit) && isSet(this.modelValue) && // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- required when `softLimit`
      this.modelValue.length >= this.maxlength - this.softLimit;
    },
    charactersLeftWarningInterpolated() {
      return `${this.charactersLeftWarning.replace("%charactersLeft%", this.charactersLeft.toString())}`;
    },
    textareaClass() {
      const classes = ["textarea-field__textarea"];
      if (this.resizable) {
        classes.push("textarea-field__resize--vertical");
      } else {
        classes.push("textarea-field__resize--none");
      }
      return classes;
    }
  },
  mounted() {
    if (isSet(this.softLimit) && !isSet(this.maxlength)) {
      throw new Error("You must pass a maxlength");
    }
  },
  methods: {
    onInput(event) {
      if (event.target instanceof HTMLTextAreaElement) {
        this.$emit("update:modelValue", event.target.value);
        this.$emit("input", event.target.value);
      }
    },
    onValidity({
      detail
    }) {
      var _renderSlotText;
      this.validationMessage = detail.validationMessage;
      this.validityMode = detail.validityMode;
      const errorMessage = (_renderSlotText = renderSlotText(this.$slots.default)) !== null && _renderSlotText !== void 0 ? _renderSlotText : "";
      const element = this.$el.querySelector(`#${detail.elementId}`);
      if (element) {
        dispatchComponentValidityEvent(element, {
          ...detail,
          errorMessage,
          focusElementId: detail.elementId
        });
      }
    },
    onPendingValidity() {
      this.validityMode = "INITIAL";
    }
  }
});
var _hoisted_1$2 = ["id", "disabled"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_label = resolveComponent("f-label");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["textarea-field", _ctx.validityClass])
  }, [createVNode(_component_f_label, {
    for: _ctx.id
  }, createSlots({
    default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
    description: withCtx(({
      descriptionClass,
      formatDescriptionClass
    }) => [renderSlot(_ctx.$slots, "description", {
      descriptionClass,
      formatDescriptionClass
    })]),
    "error-message": withCtx(() => [renderSlot(_ctx.$slots, "error-message", normalizeProps(guardReactiveProps({
      hasError: _ctx.hasError,
      validationMessage: _ctx.validationMessage
    })), () => [_ctx.hasError ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [createTextVNode(toDisplayString(_ctx.validationMessage), 1)], 64)) : createCommentVNode("", true)])]),
    _: 2
  }, [_ctx.$slots.tooltip ? {
    name: "tooltip",
    fn: withCtx(() => [renderSlot(_ctx.$slots, "tooltip")]),
    key: "0"
  } : void 0]), 1032, ["for"]), _cache[6] || (_cache[6] = createTextVNode()), _ctx.softLimit ? (openBlock(), createBlock(_component_f_label, {
    key: 0,
    for: _ctx.id,
    "aria-live": "polite"
  }, {
    description: withCtx(({
      descriptionClass
    }) => [_ctx.showCharactersLeftWarning ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(descriptionClass)
    }, toDisplayString(_ctx.charactersLeftWarningInterpolated), 3)) : createCommentVNode("", true)]),
    _: 1
  }, 8, ["for"])) : createCommentVNode("", true), _cache[7] || (_cache[7] = createTextVNode()), createElementVNode("textarea", mergeProps({
    id: _ctx.id,
    class: _ctx.textareaClass
  }, _ctx.attrs, {
    disabled: _ctx.disabled,
    onInput: _cache[0] || (_cache[0] = (...args) => _ctx.onInput && _ctx.onInput(...args)),
    onValidity: _cache[1] || (_cache[1] = (...args) => _ctx.onValidity && _ctx.onValidity(...args)),
    onPendingValidity: _cache[2] || (_cache[2] = (...args) => _ctx.onPendingValidity && _ctx.onPendingValidity(...args))
  }), null, 16, _hoisted_1$2)], 2);
}
var FTextareaField = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
function FWizardApiInjected() {
  return {
    register: inject("register"),
    unregister: inject("unregister"),
    getStepCount: inject("getStepCount"),
    openStep: inject("openStep"),
    openNext: inject("openNext"),
    cancel: inject("cancel"),
    inheritedProps: inject("inheritedProps")
  };
}
function reindex(dst) {
  dst.sort((a, b) => documentOrderComparator(a.element, b.element));
  for (let i = 0; i < dst.length; i++) {
    dst[i].stepNumber = i + 1;
  }
}
function addStep(dst, key, element) {
  const index = dst.findIndex((it) => it.key === key);
  if (index >= 0) {
    throw new Error(`An FWizardStep with key "${key.toString()}" is already registered, refusing to register multiple steps with same key.`);
  }
  const step = {
    key,
    element,
    stepNumber: -1,
    isOpen: false,
    currentOpen: -1
  };
  dst.push(step);
  reindex(dst);
  return step;
}
function removeStep(dst, key) {
  const index = dst.findIndex((it) => it.key === key);
  if (index >= 0) {
    dst.splice(index, 1);
    reindex(dst);
  }
}
var _sfc_main$1 = defineComponent({
  name: "FWizard",
  provide() {
    const wizard = this;
    const inheritedProps = {
      get headerTag() {
        return wizard.headerTag;
      },
      get disableInitialFocus() {
        return wizard.disableInitialFocus;
      }
    };
    return {
      register: this.register,
      unregister: this.unregister,
      getStepCount: this.getStepCount,
      openStep: this.openStep,
      openNext: this.openNext,
      cancel: this.cancel,
      inheritedProps
    };
  },
  inheritAttrs: true,
  props: {
    modelValue: {
      type: String,
      default: null
    },
    /**
     * Element to render for the header element inside the wizard steps.
     */
    headerTag: {
      type: String,
      required: true,
      validator(value) {
        return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
      }
    },
    /**
     * When the first wizard step is registered, it is opened and focused by default.
     * Set this property to disable that behaviour.
     */
    disableInitialFocus: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["cancel", "completed", "update:modelValue"],
  data() {
    return {
      steps: []
    };
  },
  computed: {
    anyOpen() {
      return Boolean(this.getCurrentOpen());
    }
  },
  watch: {
    modelValue: {
      handler() {
        if (!this.modelValue) {
          return;
        }
        const step = this.steps.find((it) => it.key === this.modelValue);
        if (!step) {
          throw new Error(`Failed to open step "${this.modelValue}"`);
        }
        if (!step.isOpen) {
          this.openStep(step);
        }
      }
    }
  },
  methods: {
    register(key, element) {
      const step = addStep(this.steps, key, element);
      if (this.modelValue !== null) {
        if (step.key === this.modelValue) {
          this.doOpen(step.stepNumber);
        }
      } else {
        if (this.steps.length === 1) {
          this.doOpen(step.stepNumber);
        }
      }
      const current = this.getCurrentOpen();
      step.currentOpen = current ? current.stepNumber : -1;
      return step;
    },
    unregister(key) {
      removeStep(this.steps, key);
    },
    getStepCount() {
      return this.steps.length;
    },
    getCurrentOpen() {
      var _this$steps$find;
      return (_this$steps$find = this.steps.find((it) => it.isOpen)) !== null && _this$steps$find !== void 0 ? _this$steps$find : null;
    },
    openStep(step) {
      this.doOpen(step.stepNumber);
    },
    async openNext(step) {
      const current = step.stepNumber;
      const next = current + 1;
      if (next > this.steps.length) {
        await this.doOpen(-1);
        this.$emit("completed");
      } else {
        await this.doOpen(next);
      }
    },
    async doOpen(open) {
      const stepToClose = this.steps.find((it) => it.isOpen);
      if (stepToClose) {
        stepToClose.isOpen = false;
      }
      await this.$nextTick();
      for (const step of this.steps) {
        step.isOpen = step.stepNumber === open;
        step.currentOpen = open;
      }
      if (open >= 0) {
        const step = this.steps[open - 1];
        this.$emit("update:modelValue", step.key);
      } else {
        this.$emit("update:modelValue", null);
      }
    },
    cancel(isFinalStep) {
      this.$emit("cancel", isFinalStep);
    }
  }
});
var _hoisted_1$1 = {
  class: "wizard"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [renderSlot(_ctx.$slots, "default")]);
}
var FWizard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var SCROLL_DURATION = 500;
var ongoingScrollPromise = void 0;
var _sfc_main = defineComponent({
  name: "FWizardStep",
  components: {
    IAnimateExpand,
    IFlex,
    IFlexItem,
    FValidationForm,
    FIcon
  },
  mixins: [TranslationMixin],
  inheritAttrs: true,
  props: {
    /**
     * The title of the wizard step.
     * This will be displayed as the step's header.
     */
    title: {
      type: String,
      required: true
    },
    /**
     * Supply this function in order to run actions before navigating to the next step.
     *
     * It is possible to cancel the navigation by returning `BeforeNextAction.CANCEL`.
     * When cancelled, the consumer is responsible to indicate why this happened.
     *
     * Note that `FWizardStep` already checks validity of contained fields using `v-validation`
     * before allowing navigation to the next step.
     */
    beforeNext: {
      type: Function,
      required: false,
      default() {
      }
    },
    /**
     * Supply this function in order to run actions before `FWizardStep` checks validity.
     *
     * `beforeValidation` is used by {@link FValidationForm}.
     *
     * It is possible to cancel the navigation by returning `BeforeNextAction.CANCEL`.
     * When cancelled, the consumer is responsible to indicate why this happened.
     */
    beforeValidation: {
      type: Function,
      required: false,
      default() {
      }
    },
    /**
     * Include the error list component.
     */
    useErrorList: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup() {
    return FWizardApiInjected();
  },
  data() {
    return {
      step: {},
      validity: {
        isValid: true,
        componentsWithError: [],
        componentCount: 0
      },
      isOpenedFirstTime: true,
      ignoreClick: false
    };
  },
  computed: {
    defaultCurrentStepInformation() {
      return this.$t("fkui.wizard-step.current-step", `Steg {{ stepNumber }} av {{ totalSteps }}`, {
        stepNumber: this.stepNumber,
        totalSteps: this.totalSteps
      });
    },
    formId() {
      return `${String(this.step.key)}-form`;
    },
    animationId() {
      return `${String(this.step.key)}-animation`;
    },
    isOpen() {
      return this.step.isOpen;
    },
    isPending() {
      const {
        currentOpen,
        stepNumber
      } = this.step;
      return currentOpen >= 0 && currentOpen < stepNumber;
    },
    isFinalStep() {
      return this.stepNumber === this.totalSteps;
    },
    showLink() {
      return !this.isOpen && !this.isPending;
    },
    stepNumber() {
      return this.step.stepNumber;
    },
    totalSteps() {
      return this.getStepCount();
    },
    cssClass() {
      if (this.isOpen) {
        return "wizard-step--open";
      }
      if (this.isPending) {
        return "wizard-step--pending";
      }
      return "wizard-step--done";
    }
  },
  mounted() {
    var _a, _b;
    const key = (_b = (_a = getCurrentInstance()) == null ? void 0 : _a.vnode) == null ? void 0 : _b.key;
    if (!key) {
      throw new Error("FWizardStep requires key to be set");
    }
    this.step = this.register(key, this.$el);
  },
  beforeUnmount() {
    var _a, _b;
    const key = (_b = (_a = getCurrentInstance()) == null ? void 0 : _a.vnode) == null ? void 0 : _b.key;
    if (key) {
      this.unregister(key);
    }
  },
  methods: {
    open() {
      this.openStep(this.step);
    },
    async onSubmit() {
      if (this.ignoreClick) {
        return;
      }
      this.openNext(this.step);
    },
    onCancel() {
      this.cancel(this.isFinalStep);
    },
    /**
     * Scroll down before animation starts.
     */
    async beforeAnimation(open) {
      await this.$nextTick();
      this.ignoreClick = true;
      if (!open) {
        const headerElement = getHTMLElementFromVueRef(this.$refs["header"]);
        if (!DomUtils.isVisibleInViewport(headerElement)) {
          ongoingScrollPromise = DomUtils.scrollTo(headerElement, {
            duration: SCROLL_DURATION,
            offset: 10
          });
          await ongoingScrollPromise;
        }
      } else if (ongoingScrollPromise) {
        await ongoingScrollPromise;
      }
    },
    async afterAnimation(open) {
      if (!open) {
        return;
      }
      this.ignoreClick = false;
      if (this.isOpenedFirstTime) {
        this.isOpenedFirstTime = false;
        if (this.inheritedProps.disableInitialFocus && this.stepNumber === 1) {
          return;
        }
      }
      const headerElement = getHTMLElementFromVueRef(this.$refs["header"]);
      await this.$nextTick();
      if (!DomUtils.isVisibleInViewport(headerElement)) {
        await DomUtils.scrollTo(headerElement, {
          duration: SCROLL_DURATION,
          offset: 10
        });
      }
      DomUtils.focus(headerElement);
    },
    beforeNextWrapper() {
      return this.beforeNext({
        key: this.step.key,
        stepNumber: this.stepNumber,
        totalSteps: this.totalSteps
      });
    },
    beforeValidationWrapper() {
      return this.beforeValidation({
        key: this.step.key,
        stepNumber: this.stepNumber,
        totalSteps: this.totalSteps
      });
    }
  }
});
var _hoisted_1 = ["aria-current"];
var _hoisted_2 = {
  "aria-hidden": "true",
  class: "wizard-step__step-of"
};
var _hoisted_3 = {
  class: "wizard-step__icon-container"
};
var _hoisted_4 = {
  class: "wizard-step__icon-container__circle"
};
var _hoisted_5 = {
  class: "wizard-step__icon-container__number",
  "data-test": "step-number"
};
var _hoisted_6 = {
  ref: "header",
  role: "group",
  class: "wizard-step__header",
  tabindex: "-1"
};
var _hoisted_7 = {
  class: "sr-only"
};
var _hoisted_8 = {
  class: "sr-only"
};
var _hoisted_9 = {
  class: "sr-only"
};
var _hoisted_10 = {
  key: 0,
  class: "sr-only"
};
var _hoisted_11 = {
  class: "button-group"
};
var _hoisted_12 = ["data-disabled"];
var _hoisted_13 = {
  class: "sr-only"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = resolveComponent("f-icon");
  const _component_f_validation_form = resolveComponent("f-validation-form");
  const _component_i_animate_expand = resolveComponent("i-animate-expand");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["wizard-step", _ctx.cssClass]),
    "aria-current": _ctx.isOpen ? "step" : void 0
  }, [_cache[9] || (_cache[9] = createElementVNode("div", {
    class: "wizard-step__line-up"
  }, null, -1)), _cache[10] || (_cache[10] = createTextVNode()), _ctx.isOpen ? renderSlot(_ctx.$slots, "step-of", normalizeProps(mergeProps({
    key: 0
  }, {
    headerClass: "wizard-step__step-of",
    stepNumber: _ctx.stepNumber,
    totalSteps: _ctx.totalSteps
  })), () => [createElementVNode("span", _hoisted_2, toDisplayString(_ctx.defaultCurrentStepInformation), 1)]) : createCommentVNode("", true), _cache[11] || (_cache[11] = createTextVNode()), createElementVNode("div", _hoisted_3, [createElementVNode("div", _hoisted_4, [createVNode(_component_f_icon, {
    name: "success"
  }), _cache[3] || (_cache[3] = createTextVNode()), createElementVNode("div", _hoisted_5, toDisplayString(_ctx.stepNumber), 1)]), _cache[4] || (_cache[4] = createTextVNode()), _cache[5] || (_cache[5] = createElementVNode("div", {
    class: "wizard-step__icon-container__line-down"
  }, null, -1))]), _cache[12] || (_cache[12] = createTextVNode()), createElementVNode("div", _hoisted_6, [(openBlock(), createBlock(resolveDynamicComponent(_ctx.inheritedProps.headerTag), {
    class: "wizard-step__header__title"
  }, {
    default: withCtx(() => [_ctx.showLink ? (openBlock(), createElementBlock("a", {
      key: 0,
      "aria-expanded": "false",
      role: "button",
      href: "#",
      class: "anchor",
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.open && _ctx.open(...args), ["prevent"])),
      onKeypress: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => _ctx.open && _ctx.open(...args), ["prevent"]), ["space"]))
    }, [createElementVNode("span", _hoisted_7, toDisplayString(_ctx.defaultCurrentStepInformation) + "\xA0", 1), createTextVNode(" " + toDisplayString(_ctx.title) + " ", 1), createElementVNode("span", _hoisted_8, " \xA0" + toDisplayString(_ctx.$t("fkui.wizard-step.finished-step", "Avklarat steg")), 1)], 32)) : (openBlock(), createElementBlock(Fragment, {
      key: 1
    }, [createElementVNode("span", _hoisted_9, toDisplayString(_ctx.defaultCurrentStepInformation) + "\xA0", 1), createTextVNode(" " + toDisplayString(_ctx.title) + " ", 1), _ctx.isPending ? (openBlock(), createElementBlock("span", _hoisted_10, "\n                        \xA0" + toDisplayString(_ctx.$t("fkui.wizard-step.pending", "Inaktivt")), 1)) : createCommentVNode("", true)], 64))]),
    _: 1
  }))], 512), _cache[13] || (_cache[13] = createTextVNode()), _cache[14] || (_cache[14] = createElementVNode("div", {
    class: "wizard-step__line-down"
  }, null, -1)), _cache[15] || (_cache[15] = createTextVNode()), (openBlock(), createBlock(_component_i_animate_expand, {
    key: _ctx.animationId,
    opacity: false,
    expanded: _ctx.isOpen,
    "before-animation": _ctx.beforeAnimation,
    "after-animation": _ctx.afterAnimation,
    class: "wizard-step__content"
  }, {
    default: withCtx(() => [createVNode(_component_f_validation_form, {
      id: _ctx.formId,
      "before-submit": _ctx.beforeNextWrapper,
      "before-validation": _ctx.beforeValidationWrapper,
      "use-error-list": _ctx.useErrorList,
      class: "wizard-step-body",
      onSubmit: _ctx.onSubmit
    }, {
      "error-message": withCtx(() => [renderSlot(_ctx.$slots, "error-message", {}, () => [createTextVNode(toDisplayString(_ctx.$t("fkui.wizard-step.errorlist.title", "Oj, du har gl\xF6mt att fylla i n\xE5got. G\xE5 till:")), 1)])]),
      default: withCtx(() => [renderSlot(_ctx.$slots, "default"), _cache[7] || (_cache[7] = createTextVNode()), createElementVNode("div", _hoisted_11, [createElementVNode("button", {
        "data-test": "submit-button",
        "data-disabled": _ctx.ignoreClick ? "true" : "false",
        type: "submit",
        class: "button button--primary button-group__item button--large"
      }, [renderSlot(_ctx.$slots, "next-button-text", normalizeProps(guardReactiveProps({
        stepNumber: _ctx.stepNumber,
        totalSteps: _ctx.totalSteps
      })), () => [_ctx.isFinalStep ? (openBlock(), createElementBlock(Fragment, {
        key: 0
      }, [createTextVNode(toDisplayString(_ctx.$t("fkui.wizard-step.button.next.text-final", "G\xE5 vidare och granska")), 1)], 64)) : (openBlock(), createElementBlock(Fragment, {
        key: 1
      }, [createTextVNode(toDisplayString(_ctx.$t("fkui.wizard-step.button.next.text", "Forts\xE4tt")) + " ", 1), createElementVNode("span", _hoisted_13, "\n                                        \xA0" + toDisplayString(_ctx.$t("fkui.wizard-step.button.next.sr-text", "till n\xE4sta steg")), 1)], 64))])], 8, _hoisted_12), _cache[6] || (_cache[6] = createTextVNode()), createElementVNode("button", {
        "data-test": "cancel-button",
        type: "button",
        class: "button button--secondary button-group__item button--large",
        onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onCancel && _ctx.onCancel(...args))
      }, [renderSlot(_ctx.$slots, "cancel-button-text", normalizeProps(guardReactiveProps({
        stepNumber: _ctx.stepNumber,
        totalSteps: _ctx.totalSteps
      })), () => [createTextVNode(toDisplayString(_ctx.$t("fkui.wizard-step.button.cancel.text", "Avbryt")), 1)])])])]),
      _: 3,
      __: [8]
    }, 8, ["id", "before-submit", "before-validation", "use-error-list", "onSubmit"])]),
    _: 3
  }, 8, ["expanded", "before-animation", "after-animation"]))], 10, _hoisted_1);
}
var FWizardStep = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  ActivateItemInjected,
  ErrorData,
  ErrorPlugin,
  ErrorViewData,
  EventBus,
  _sfc_main$1m as FBadge,
  _sfc_main$I as FBankAccountNumberTextField,
  _sfc_main$H as FBankgiroTextField,
  FCalendar,
  FCalendarDay,
  _sfc_main$15 as FCard,
  FCheckboxField,
  _sfc_main$G as FClearingnumberTextField,
  FConfirmModal,
  FContextMenu,
  _sfc_main$R as FCrudButton,
  _sfc_main$T as FCrudDataset,
  _sfc_main$K as FCurrencyTextField,
  _sfc_main$y as FDataTable,
  FDatepickerField,
  _sfc_main$r as FDetailsPanel,
  FDialogueTree,
  FEmailTextField,
  FErrorHandlingApp,
  FErrorList,
  FExpand,
  FExpandablePanel,
  FExpandableParagraph,
  FFieldset,
  FFileItem,
  FFileSelector,
  _sfc_main$j as FFixedPane,
  FFormModal,
  FValidationFormAction as FFormModalAction,
  FIcon,
  _sfc_main$l as FInteractiveTable,
  FKUIConfigButtonOrder,
  FLabel,
  FLayoutApplicationTemplate,
  FLayoutLeftPanel,
  FLayoutRightPanel,
  FLayoutRightPanelService,
  _sfc_main$f as FList,
  FLoader,
  _sfc_main$d as FLogo,
  FMessageBox,
  _sfc_main$6 as FMinimizablePanel,
  FModal,
  FNavigationMenu,
  _sfc_main$F as FNumericTextField,
  FOffline,
  _sfc_main$A as FOrganisationsnummerTextField,
  FOutputField,
  FPageHeader,
  _sfc_main$v as FPageLayout,
  _sfc_main$B as FPercentTextField,
  _sfc_main$E as FPersonnummerTextField,
  FPhoneTextField,
  _sfc_main$D as FPlusgiroTextField,
  _sfc_main$C as FPostalCodeTextField,
  _sfc_main$5 as FProgressbar,
  FRadioField,
  _sfc_main$t as FResizePane,
  FSearchTextField,
  FSelectField,
  _sfc_main$z as FSortFilterDataset,
  FSortFilterDatasetInjected,
  FStaticField,
  _sfc_main$S as FTableButton,
  _sfc_main$Q as FTableColumn,
  FTableColumnSize,
  FTableColumnSort,
  FTableColumnType,
  FTextField,
  FTextareaField,
  FTooltip,
  FValidationForm,
  FValidationFormAction,
  FValidationGroup,
  FWizard,
  FWizardStep,
  FValidationFormAction as FWizardStepAction,
  FormErrorList,
  FormatPlugin,
  IAnimateExpand,
  ICalendarMonth,
  ICalendarMonthGrid,
  ICalendarNavbar,
  _sfc_main$Z as IComboboxDropdown,
  _sfc_main$Y as IComboboxToggleButton,
  IFlex,
  IFlexItem,
  IPopup,
  IPopupError,
  _sfc_main$11 as IPopupListbox,
  IPopupMenu,
  ISkipLink,
  FValidationForm as IValidationForm,
  MenuAction,
  ModalReason,
  Operation,
  Placement,
  TableScroll,
  TestPlugin,
  TranslationMixin,
  TranslationPlugin,
  UNHANDLED_ERROR_EVENT,
  ValidationPlugin,
  actionFromKeyboardEvent,
  config,
  confirmModal,
  dispatchComponentUnmountEvent,
  dispatchComponentValidityEvent,
  findElementFromVueRef,
  findHTMLElementFromVueRef,
  findParentByName,
  focus,
  formModal,
  getAbsolutePosition,
  getDayEndOffset,
  getDayStartOffset,
  getElementFromVueRef,
  getElementsFromVueRef,
  getHTMLElementFromVueRef,
  getHTMLElementsFromVueRef,
  getInputElement,
  getParentByName,
  getSortedHTMLElementsFromVueRef,
  handleKeyboardFocusNavigation,
  hasParentByName,
  hasSlot,
  includeItem,
  isContextMenuSeparatorItem,
  isContextMenuTextItem,
  isDialogueTreeEndQuestion,
  itemEquals,
  mountComponent,
  openModal,
  refIsElement,
  refIsElementArray,
  refIsHTMLElementArray,
  refIsVue,
  refIsVueArray,
  registerLayout,
  renderSlotText,
  setRunningContext,
  tableScrollClasses,
  tooltipAttachTo,
  useAreaData,
  useCombobox,
  useDetailsPanel,
  useModal,
  useResize,
  useSlotUtils,
  useTextFieldSetup,
  useTranslate
};
