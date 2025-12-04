// docs/src/setup.ts
import { createApp, h } from "vue";
import {
  ErrorPlugin,
  FErrorHandlingApp,
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
  app.use(ErrorPlugin);
  app.use(ValidationPlugin);
  app.use(TestPlugin);
  app.use(TranslationPlugin);
  app.mount(selector);
  setRunningContext(app);
}

// virtual-entry:virtual:src/components/FTable/examples/FTableLiveExample.vue:FTableLiveExample-e08228.js
import { defineComponent as defineComponent4, h as h4 } from "vue";
import { formatNumber as formatNumber2 } from "@fkui/logic";
import { FCheckboxField, FFieldset, FRadioField, FSelectField } from "@fkui/vue";

// dist/esm/index.esm.js
import { nextTick, toValue, defineComponent, useTemplateRef, computed, createElementBlock, openBlock, createElementVNode, createVNode, unref, renderSlot, withModifiers, createTextVNode, createCommentVNode, withCtx, createBlock, toDisplayString, normalizeClass, inject, ref, watchEffect, withDirectives, vShow, onMounted, vModelText, toRef, watch, onUpdated, mergeModels, useModel, useSlots, provide, Fragment, renderList, mergeProps, resolveDynamicComponent, resolveDirective } from "vue";
import { assertRef, formatPostalCode, parsePlusgiro, parseNumber, formatNumber, parseOrganisationsnummer, parseClearingNumber, parseBankgiro, parseBankAccountNumber, parsePersonnummer, formatPersonnummer, ElementIdService, assertSet, ValidationService, isSet, alertScreenReader, isEmpty, stripWhitespace, TranslationService } from "@fkui/logic";
import { getInternalKey, FIcon, IFlex, IFlexItem, IComboboxDropdown, useTranslate, useSlotUtils, setInternalKeys, FSortFilterDatasetInjected, EventBus, FFileSelector, FFileItem, TranslationMixin, FTextField, useTextFieldSetup } from "@fkui/vue";
var es_iterator_constructor = {};
var globalThis_1;
var hasRequiredGlobalThis;
function requireGlobalThis() {
  if (hasRequiredGlobalThis) return globalThis_1;
  hasRequiredGlobalThis = 1;
  var check = function(it3) {
    return it3 && it3.Math === Math && it3;
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
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V3) {
    var descriptor = getOwnPropertyDescriptor(this, V3);
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
  functionUncurryThis = NATIVE_BIND ? uncurryThisWithBind : function(fn3) {
    return function() {
      return call.apply(fn3, arguments);
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
  classofRaw = function(it3) {
    return stringSlice(toString2(it3), 8, -1);
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
  }) ? function(it3) {
    return classof2(it3) === "String" ? split(it3, "") : $Object(it3);
  } : $Object;
  return indexedObject;
}
var isNullOrUndefined;
var hasRequiredIsNullOrUndefined;
function requireIsNullOrUndefined() {
  if (hasRequiredIsNullOrUndefined) return isNullOrUndefined;
  hasRequiredIsNullOrUndefined = 1;
  isNullOrUndefined = function(it3) {
    return it3 === null || it3 === void 0;
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
  requireObjectCoercible = function(it3) {
    if (isNullOrUndefined2(it3)) throw new $TypeError("Can't call method on " + it3);
    return it3;
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
  toIndexedObject = function(it3) {
    return IndexedObject(requireObjectCoercible2(it3));
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
var isObject;
var hasRequiredIsObject;
function requireIsObject() {
  if (hasRequiredIsObject) return isObject;
  hasRequiredIsObject = 1;
  var isCallable2 = requireIsCallable();
  isObject = function(it3) {
    return typeof it3 == "object" ? it3 !== null : isCallable2(it3);
  };
  return isObject;
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
  var navigator = globalThis2.navigator;
  var userAgent = navigator && navigator.userAgent;
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
  isSymbol = USE_SYMBOL_AS_UID ? function(it3) {
    return typeof it3 == "symbol";
  } : function(it3) {
    var $Symbol = getBuiltIn2("Symbol");
    return isCallable2($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it3));
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
  getMethod = function(V3, P2) {
    var func = V3[P2];
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
  var isObject2 = requireIsObject();
  var $TypeError = TypeError;
  ordinaryToPrimitive = function(input, pref) {
    var fn3, val;
    if (pref === "string" && isCallable2(fn3 = input.toString) && !isObject2(val = call(fn3, input))) return val;
    if (isCallable2(fn3 = input.valueOf) && !isObject2(val = call(fn3, input))) return val;
    if (pref !== "string" && isCallable2(fn3 = input.toString) && !isObject2(val = call(fn3, input))) return val;
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
    version: "3.47.0",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xA9 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)",
    license: "https://github.com/zloirock/core-js/blob/v3.47.0/LICENSE",
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
  hasOwnProperty_1 = Object.hasOwn || function hasOwn(it3, key) {
    return hasOwnProperty(toObject2(it3), key);
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
var toPrimitive;
var hasRequiredToPrimitive;
function requireToPrimitive() {
  if (hasRequiredToPrimitive) return toPrimitive;
  hasRequiredToPrimitive = 1;
  var call = requireFunctionCall();
  var isObject2 = requireIsObject();
  var isSymbol2 = requireIsSymbol();
  var getMethod2 = requireGetMethod();
  var ordinaryToPrimitive2 = requireOrdinaryToPrimitive();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var $TypeError = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol2("toPrimitive");
  toPrimitive = function(input, pref) {
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
  var isObject2 = requireIsObject();
  var document2 = globalThis2.document;
  var EXISTS = isObject2(document2) && isObject2(document2.createElement);
  documentCreateElement = function(it3) {
    return EXISTS ? document2.createElement(it3) : {};
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
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O3, P2) {
    O3 = toIndexedObject2(O3);
    P2 = toPropertyKey2(P2);
    if (IE8_DOM_DEFINE) try {
      return $getOwnPropertyDescriptor(O3, P2);
    } catch (error) {
    }
    if (hasOwn(O3, P2)) return createPropertyDescriptor2(!call(propertyIsEnumerableModule.f, O3, P2), O3[P2]);
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
  var isObject2 = requireIsObject();
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
  objectDefineProperty.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O3, P2, Attributes) {
    anObject2(O3);
    P2 = toPropertyKey2(P2);
    anObject2(Attributes);
    if (typeof O3 === "function" && P2 === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor(O3, P2);
      if (current && current[WRITABLE]) {
        O3[P2] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    }
    return $defineProperty(O3, P2, Attributes);
  } : $defineProperty : function defineProperty(O3, P2, Attributes) {
    anObject2(O3);
    P2 = toPropertyKey2(P2);
    anObject2(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O3, P2, Attributes);
    } catch (error) {
    }
    if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
    if ("value" in Attributes) O3[P2] = Attributes.value;
    return O3;
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
    store.inspectSource = function(it3) {
      return functionToString(it3);
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
  var isObject2 = requireIsObject();
  var createNonEnumerableProperty2 = requireCreateNonEnumerableProperty();
  var hasOwn = requireHasOwnProperty();
  var shared2 = requireSharedStore();
  var sharedKey2 = requireSharedKey();
  var hiddenKeys2 = requireHiddenKeys();
  var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
  var TypeError2 = globalThis2.TypeError;
  var WeakMap2 = globalThis2.WeakMap;
  var set, get, has;
  var enforce = function(it3) {
    return has(it3) ? get(it3) : set(it3, {});
  };
  var getterFor = function(TYPE) {
    return function(it3) {
      var state;
      if (!isObject2(it3) || (state = get(it3)).type !== TYPE) {
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
    set = function(it3, metadata) {
      if (store.has(it3)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it3;
      store.set(it3, metadata);
      return metadata;
    };
    get = function(it3) {
      return store.get(it3) || {};
    };
    has = function(it3) {
      return store.has(it3);
    };
  } else {
    var STATE = sharedKey2("state");
    hiddenKeys2[STATE] = true;
    set = function(it3, metadata) {
      if (hasOwn(it3, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it3;
      createNonEnumerableProperty2(it3, STATE, metadata);
      return metadata;
    };
    get = function(it3) {
      return hasOwn(it3, STATE) ? it3[STATE] : {};
    };
    has = function(it3) {
      return hasOwn(it3, STATE);
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
  defineBuiltIn = function(O3, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== void 0 ? options.name : key;
    if (isCallable2(value)) makeBuiltIn2(value, name, options);
    if (options.global) {
      if (simple) O3[key] = value;
      else defineGlobalProperty2(key, value);
    } else {
      try {
        if (!options.unsafe) delete O3[key];
        else if (O3[key]) simple = true;
      } catch (error) {
      }
      if (simple) O3[key] = value;
      else definePropertyModule.f(O3, key, {
        value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
    }
    return O3;
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
  mathTrunc = Math.trunc || function trunc(x3) {
    var n = +x3;
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
    return function($this, el2, fromIndex) {
      var O3 = toIndexedObject2($this);
      var length = lengthOfArrayLike2(O3);
      if (length === 0) return !IS_INCLUDES && -1;
      var index = toAbsoluteIndex2(fromIndex, length);
      var value;
      if (IS_INCLUDES && el2 !== el2) while (length > index) {
        value = O3[index++];
        if (value !== value) return true;
      }
      else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O3) && O3[index] === el2) return IS_INCLUDES || index || 0;
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
    var O3 = toIndexedObject2(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O3) !hasOwn(hiddenKeys2, key) && hasOwn(O3, key) && push(result, key);
    while (names.length > i) if (hasOwn(O3, key = names[i++])) {
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
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O3) {
    return internalObjectKeys(O3, hiddenKeys2);
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
  ownKeys = getBuiltIn2("Reflect", "ownKeys") || function ownKeys2(it3) {
    var keys = getOwnPropertyNamesModule.f(anObject2(it3));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it3)) : keys;
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
  anInstance = function(it3, Prototype) {
    if (isPrototypeOf(Prototype, it3)) return it3;
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
    function F2() {
    }
    F2.prototype.constructor = null;
    return Object.getPrototypeOf(new F2()) !== F2.prototype;
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
  objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O3) {
    var object = toObject2(O3);
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
  objectKeys = Object.keys || function keys(O3) {
    return internalObjectKeys(O3, enumBugKeys2);
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
  objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O3, Properties) {
    anObject2(O3);
    var props = toIndexedObject2(Properties);
    var keys = objectKeys2(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule.f(O3, key = keys[index++], props[key]);
    return O3;
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
  objectCreate = Object.create || function create(O3, Properties) {
    var result;
    if (O3 !== null) {
      EmptyConstructor[PROTOTYPE] = anObject2(O3);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      result[IE_PROTO] = O3;
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
  var isObject2 = requireIsObject();
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
  var $2 = require_export();
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
  $2({
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
  functionUncurryThisClause = function(fn3) {
    if (classofRaw2(fn3) === "Function") return uncurryThis(fn3);
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
  functionBindContext = function(fn3, that) {
    aCallable2(fn3);
    return that === void 0 ? fn3 : NATIVE_BIND ? bind(fn3, that) : function() {
      return fn3.apply(that, arguments);
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
  isArrayIteratorMethod = function(it3) {
    return it3 !== void 0 && (Iterators.Array === it3 || ArrayPrototype[ITERATOR] === it3);
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
  var tryGet = function(it3, key) {
    try {
      return it3[key];
    } catch (error) {
    }
  };
  classof = TO_STRING_TAG_SUPPORT ? classofRaw2 : function(it3) {
    var O3, tag, result;
    return it3 === void 0 ? "Undefined" : it3 === null ? "Null" : typeof (tag = tryGet(O3 = $Object(it3), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw2(O3) : (result = classofRaw2(O3)) === "Object" && isCallable2(O3.callee) ? "Arguments" : result;
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
  getIteratorMethod = function(it3) {
    if (!isNullOrUndefined2(it3)) return getMethod2(it3, ITERATOR) || getMethod2(it3, "@@iterator") || Iterators[classof2(it3)];
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
    var fn3 = bind(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function(condition) {
      if (iterator) iteratorClose2(iterator, "normal");
      return new Result(true, condition);
    };
    var callFn = function(value) {
      if (AS_ENTRIES) {
        anObject2(value);
        return INTERRUPTED ? fn3(value[0], value[1], stop) : fn3(value[0], value[1]);
      }
      return INTERRUPTED ? fn3(value, stop) : fn3(value);
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
  var $2 = require_export();
  var call = requireFunctionCall();
  var iterate2 = requireIterate();
  var aCallable2 = requireACallable();
  var anObject2 = requireAnObject();
  var getIteratorDirect2 = requireGetIteratorDirect();
  var iteratorClose2 = requireIteratorClose();
  var iteratorHelperWithoutClosingOnEarlyError2 = requireIteratorHelperWithoutClosingOnEarlyError();
  var forEachWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError2("forEach", TypeError);
  $2({
    target: "Iterator",
    proto: true,
    real: true,
    forced: forEachWithoutClosingOnEarlyError
  }, {
    forEach: function forEach(fn3) {
      anObject2(this);
      try {
        aCallable2(fn3);
      } catch (error) {
        iteratorClose2(this, "throw", error);
      }
      if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn3);
      var record = getIteratorDirect2(this);
      var counter = 0;
      iterate2(record, function(value) {
        fn3(value, counter++);
      }, {
        IS_RECORD: true
      });
    }
  });
  return es_iterator_forEach;
}
requireEs_iterator_forEach();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
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
  arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O3, length) {
    if (isArray2(O3) && !getOwnPropertyDescriptor(O3, "length").writable) {
      throw new $TypeError("Cannot set read only .length");
    }
    return O3.length = length;
  } : function(O3, length) {
    return O3.length = length;
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
  doesNotExceedSafeInteger = function(it3) {
    if (it3 > MAX_SAFE_INTEGER) throw $TypeError("Maximum allowed index exceeded");
    return it3;
  };
  return doesNotExceedSafeInteger;
}
var hasRequiredEs_array_push;
function requireEs_array_push() {
  if (hasRequiredEs_array_push) return es_array_push;
  hasRequiredEs_array_push = 1;
  var $2 = require_export();
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
  $2({
    target: "Array",
    proto: true,
    arity: 1,
    forced: FORCED
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    push: function push(item) {
      var O3 = toObject2(this);
      var len = lengthOfArrayLike2(O3);
      var argCount = arguments.length;
      doesNotExceedSafeInteger2(len + argCount);
      for (var i = 0; i < argCount; i++) {
        O3[len] = arguments[i];
        len++;
      }
      setArrayLength(O3, len);
      return len;
    }
  });
  return es_array_push;
}
requireEs_array_push();
var es_iterator_some = {};
var hasRequiredEs_iterator_some;
function requireEs_iterator_some() {
  if (hasRequiredEs_iterator_some) return es_iterator_some;
  hasRequiredEs_iterator_some = 1;
  var $2 = require_export();
  var call = requireFunctionCall();
  var iterate2 = requireIterate();
  var aCallable2 = requireACallable();
  var anObject2 = requireAnObject();
  var getIteratorDirect2 = requireGetIteratorDirect();
  var iteratorClose2 = requireIteratorClose();
  var iteratorHelperWithoutClosingOnEarlyError2 = requireIteratorHelperWithoutClosingOnEarlyError();
  var someWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError2("some", TypeError);
  $2({
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
function isFTableCellApi(value) {
  return value !== null && typeof value === "object" && Boolean(value.tabstopEl);
}
var tableCellApiSymbol = Symbol("table:cell-api");
function walk(array, visit, childKey, level = 1) {
  for (const item of array) {
    const visitChildren = visit(item, level);
    if (visitChildren && childKey && item[childKey]) {
      walk(item[childKey], visit, childKey, level + 1);
    }
  }
}
var internalKey = getInternalKey();
var navKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"];
var prevCellIndex = void 0;
function rowKey(row) {
  return String(row[internalKey]);
}
function getRowIndexes(rows2, expandableAttribute) {
  const array = [];
  walk(rows2, (row) => {
    array.push(String(row[internalKey]));
    return true;
  }, expandableAttribute);
  return array;
}
function getCellTarget(tableElement, rowIndex, cellIndex) {
  return tableElement.rows[rowIndex].cells[cellIndex];
}
function getTr(td) {
  return td.parentElement;
}
function getTable(tr2) {
  return tr2.closest("table");
}
function getLastRowIndex(tableElement) {
  return tableElement.rows.length - 1;
}
function getLastCellIndex(tableElement) {
  return tableElement.rows[0].cells.length - 1;
}
function getVerticalNavIndex(table, from, to3) {
  const target = {
    ...to3
  };
  const currentMax = table.rows[from.row].cells.length - 1;
  const targetMax = table.rows[to3.row].cells.length - 1;
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
function navigate(e, table, from, last) {
  if (from.row === void 0 || from.cell === void 0 || last.row === void 0 || last.cell === void 0) {
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
    const to3 = {
      row: from.row - 1,
      cell: from.cell
    };
    return getVerticalNavIndex(table, from, to3);
  }
  if (e.code === "ArrowDown") {
    if (from.row === last.row) {
      return;
    }
    const to3 = {
      row: from.row + 1,
      cell: from.cell
    };
    return getVerticalNavIndex(table, from, to3);
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
function getMetaRows(keyedRows, expandedKeys, expandableAttribute) {
  const rowIndexes = getRowIndexes(keyedRows, expandableAttribute);
  const array = [];
  walk(keyedRows, (row, level) => {
    const isExpandable = Boolean(expandableAttribute && row[expandableAttribute]);
    const isExpanded = isExpandable && expandedKeys.includes(rowKey(row));
    const rowIndex = rowIndexes.indexOf(rowKey(row)) + 2;
    array.push({
      key: rowKey(row),
      row,
      rowIndex,
      level: expandableAttribute ? level : void 0,
      isExpandable,
      isExpanded
    });
    return isExpanded;
  }, expandableAttribute);
  return array;
}
function getCell(element) {
  const closest = element.closest("td, th");
  if (!closest) {
    throw new Error("expected th or td parent");
  }
  return closest;
}
async function setDefaultCellTarget(table) {
  await nextTick();
  const target = getCellTarget(table, 1, 0);
  activateCell(target, {
    focus: false
  });
  return target;
}
function maybeNavigateToCell(e) {
  let newCellTarget = e.target;
  const cell = getCell(e.target);
  const tr2 = getTr(cell);
  const table = getTable(tr2);
  const fromIndex = {
    row: tr2.rowIndex,
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
  const targetEl = (_toValue = toValue(api?.tabstopEl)) !== null && _toValue !== void 0 ? _toValue : element;
  targetEl.tabIndex = 0;
  if (options?.focus) {
    targetEl.focus();
  }
}
function stopEdit(element, reason) {
  const td = getCell(element);
  const tr2 = getTr(td);
  const table = getTable(tr2);
  const rowIndex = tr2.rowIndex;
  const cellIndex = td.cellIndex;
  const lastRowIndex = getLastRowIndex(table);
  const lastCellIndex = getLastCellIndex(table);
  let newCellTarget = td;
  switch (reason) {
    case "enter": {
      if (rowIndex !== lastRowIndex) {
        newCellTarget = getCellTarget(table, rowIndex + 1, cellIndex);
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
      console.log("stopEdit", "blur");
      return newCellTarget;
    }
  }
}
var _hoisted_1$b = {
  key: 0,
  class: "table-ng__cell table-ng__cell--checkbox"
};
var _hoisted_2$7 = ["checked", "aria-label"];
var _hoisted_3$6 = {
  key: 1,
  ref: "target",
  tabindex: "-1",
  class: "table-ng__cell table-ng__cell--checkbox"
};
var _hoisted_4$3 = ["checked", "aria-label"];
var _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "ITableCheckbox",
  props: {
    column: {},
    row: {}
  },
  setup(__props, {
    expose: __expose
  }) {
    const targetElement = useTemplateRef("target");
    const ariaLabel = computed(() => {
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
      return __props.column.editable(__props.row) ? (openBlock(), createElementBlock("td", _hoisted_1$b, [createElementVNode("input", {
        ref: "target",
        checked: __props.column.value(__props.row),
        type: "checkbox",
        "aria-label": ariaLabel.value,
        tabindex: "-1",
        onChange
      }, null, 40, _hoisted_2$7)])) : (openBlock(), createElementBlock("td", _hoisted_3$6, [createElementVNode("input", {
        checked: __props.column.value(__props.row),
        type: "checkbox",
        "aria-label": ariaLabel.value
      }, null, 8, _hoisted_4$3)], 512));
    };
  }
});
var _hoisted_1$a = {
  key: 0,
  class: "table-ng__cell table-ng__cell--expand"
};
var _hoisted_2$6 = ["aria-label", "aria-expanded"];
var _hoisted_3$5 = {
  key: 1,
  ref: "expandable",
  tabindex: "-1",
  class: "table-ng__cell table-ng__cell--expand"
};
var _sfc_main$c = /* @__PURE__ */ defineComponent({
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
    const toggleIcon = computed(() => __props.isExpanded ? "arrow-down" : "arrow-right");
    const expandLabel = computed(() => __props.isExpanded ? "St\xE4ng rad" : "Expandera rad");
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
      return __props.isExpandable ? (openBlock(), createElementBlock("td", _hoisted_1$a, [createElementVNode("button", {
        ref: "expandable",
        tabindex: "-1",
        "aria-label": expandLabel.value,
        "aria-expanded": __props.isExpanded,
        type: "button",
        onClick
      }, [createVNode(unref(FIcon), {
        class: "button__icon",
        name: toggleIcon.value
      }, null, 8, ["name"])], 8, _hoisted_2$6)])) : (openBlock(), createElementBlock("td", _hoisted_3$5, null, 512));
    };
  }
});
var _hoisted_1$9 = ["colspan"];
var _sfc_main$b = /* @__PURE__ */ defineComponent({
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
      }, [renderSlot(_ctx.$slots, "default")], 8, _hoisted_1$9);
    };
  }
});
var textTypes = ["text:bankAccountNumber", "text:bankgiro", "text:clearingNumber", "text:email", "text:organisationsnummer", "text:personnummer", "text:phoneNumber", "text:plusgiro", "text:postalCode", "text"];
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
    attributes: () => [{
      name: "inputmode",
      value: "numeric"
    }, {
      name: "maxlength",
      value: "23"
    }]
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
    attributes: () => [{
      name: "inputmode",
      value: "numeric"
    }, {
      name: "maxlength",
      value: "40"
    }]
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
    attributes: () => [{
      name: "inputmode",
      value: "numeric"
    }, {
      name: "maxlength",
      value: "40"
    }]
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
    attributes: () => [{
      name: "inputmode",
      value: "numeric"
    }, {
      name: "maxlength",
      value: "16"
    }]
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
    attributes: () => [{
      name: "inputmode",
      value: "numeric"
    }, {
      name: "maxlength",
      value: "20"
    }]
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
    attributes: () => [{
      name: "type",
      value: "email"
    }, {
      name: "maxlength",
      value: "80"
    }]
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
    attributes: () => [{
      name: "inputmode",
      value: "numeric"
    }, {
      name: "maxlength",
      value: "20"
    }]
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
    attributes: () => [{
      name: "inputmode",
      value: "numeric"
    }, {
      name: "maxlength",
      value: "20"
    }]
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
    attributes: (decimals) => {
      return [{
        name: "inputmode",
        value: decimals ? "decimal" : "numeric"
      }, {
        name: "maxlength",
        value: "10"
      }];
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
    attributes: () => [{
      name: "maxlength",
      value: "80"
    }, {
      name: "type",
      value: "tel"
    }]
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
    attributes: () => [{
      name: "inputmode",
      value: "numeric"
    }, {
      name: "maxlength",
      value: "16"
    }]
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
    attributes: () => [{
      name: "inputmode",
      value: "numeric"
    }, {
      name: "maxlength",
      value: "15"
    }]
  },
  text: {
    formatter(value) {
      return value;
    },
    parser(value) {
      return value;
    },
    validationConfig: {},
    attributes: () => []
  }
};
var _hoisted_1$8 = {
  key: 0,
  class: "table-ng__column__description"
};
var _sfc_main$a = /* @__PURE__ */ defineComponent({
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
    const sortIconClass = computed(() => {
      return {
        "table-ng__column__sort-icon": true,
        "table-ng__column__sort-icon--discrete": __props.sortOrder === "unsorted"
      };
    });
    const sortIcon = computed(() => {
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
    function isAlignableColumn(column) {
      if (column.type === void 0) {
        return false;
      }
      return isInputTypeText(column.type) || isInputTypeNumber(column.type);
    }
    const alignment = computed(() => {
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
        class: "table-ng__column",
        tabindex: "-1",
        onKeydown: onKeydownCell,
        onClick: withModifiers(onClickCell, ["stop"])
      }, [createVNode(unref(IFlex), {
        gap: "1x",
        float: alignment.value
      }, {
        default: withCtx(() => [createVNode(unref(IFlexItem), {
          shrink: "",
          class: "table-ng__column__title"
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(__props.column.header), 1)]),
          _: 1
        }), _cache[0] || (_cache[0] = createTextVNode()), __props.sortEnabled ? (openBlock(), createBlock(unref(IFlexItem), {
          key: 0,
          shrink: "",
          align: "center"
        }, {
          default: withCtx(() => [createVNode(unref(FIcon), {
            name: sortIcon.value,
            class: normalizeClass(sortIconClass.value)
          }, null, 8, ["name", "class"])]),
          _: 1
        })) : createCommentVNode("", true)]),
        _: 1
      }, 8, ["float"]), _cache[1] || (_cache[1] = createTextVNode()), __props.column.description.value ? (openBlock(), createElementBlock("div", _hoisted_1$8, toDisplayString(__props.column.description), 1)) : createCommentVNode("", true)], 544);
    };
  }
});
var _hoisted_1$7 = {
  scope: "col",
  class: "table-ng__column table-ng__column--select"
};
var _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ITableHeaderSelectable",
  emits: ["change"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    const emit = __emit;
    const selectAllRef = useTemplateRef("selectAll");
    const expose = {
      tabstopEl: selectAllRef
    };
    __expose(expose);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("th", _hoisted_1$7, [createElementVNode("input", {
        ref: "selectAll",
        type: "checkbox",
        "aria-label": "select all",
        tabindex: "-1",
        indeterminate: "",
        onChange: _cache[0] || (_cache[0] = ($event) => emit("change"))
      }, null, 544)]);
    };
  }
});
var _hoisted_1$6 = {
  class: "table-ng__cell table-ng__cell--radio"
};
var _hoisted_2$5 = ["checked", "aria-label"];
var _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ITableRadio",
  props: {
    column: {},
    row: {}
  },
  setup(__props, {
    expose: __expose
  }) {
    const inputElement = useTemplateRef("input");
    const ariaLabel = computed(() => {
      const value = __props.column.label(__props.row);
      return value.length > 0 ? value : void 0;
    });
    function onChange(_e3) {
      assertRef(inputElement);
      __props.column.update(__props.row, inputElement.value.checked, !inputElement.value.checked);
    }
    const expose = {
      tabstopEl: inputElement
    };
    __expose(expose);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("td", _hoisted_1$6, [createElementVNode("input", {
        ref: "input",
        type: "radio",
        checked: __props.column.value(__props.row),
        "aria-label": ariaLabel.value,
        tabindex: "-1",
        onChange
      }, null, 40, _hoisted_2$5)]);
    };
  }
});
function getBodyRowCount(rows2, childKey) {
  let count = 0;
  walk(rows2, () => {
    count++;
    return true;
  }, childKey);
  return count;
}
var stopEditKey = Symbol();
function useStartStopEdit() {
  const stopEdit2 = inject(stopEditKey, () => Promise.resolve());
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
  callWithSafeIterationClosing = function(iterator, fn3, value, ENTRIES) {
    try {
      return ENTRIES ? fn3(anObject2(value)[0], value[1]) : fn3(value);
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
  var $2 = require_export();
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
  $2({
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
var _hoisted_1$5 = {
  key: 0,
  class: "table-ng__cell table-ng__cell--anchor"
};
var _hoisted_2$4 = ["href"];
var _hoisted_3$4 = {
  key: 1,
  ref: "target",
  tabindex: "-1",
  class: "table-ng__cell"
};
var _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ITableAnchor",
  props: {
    column: {},
    row: {}
  },
  setup(__props, {
    expose: __expose
  }) {
    const targetElement = useTemplateRef("target");
    const renderAnchor = computed(() => {
      return __props.column.enabled(__props.row) && __props.column.value(__props.row) !== null;
    });
    const expose = {
      tabstopEl: targetElement
    };
    __expose(expose);
    return (_ctx, _cache) => {
      return renderAnchor.value ? (openBlock(), createElementBlock("td", _hoisted_1$5, [createElementVNode("a", {
        ref: "target",
        class: "anchor anchor--block",
        target: "_blank",
        href: __props.column.href,
        tabindex: "-1"
      }, toDisplayString(__props.column.value(__props.row)), 9, _hoisted_2$4)])) : (openBlock(), createElementBlock("td", _hoisted_3$4, null, 512));
    };
  }
});
var _hoisted_1$4 = {
  key: 0,
  class: "table-ng__cell table-ng__cell--button"
};
var _hoisted_2$3 = {
  class: "sr-only"
};
var _hoisted_3$3 = {
  key: 1,
  ref: "td",
  tabindex: "-1",
  class: "table-ng__cell"
};
var _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
    const renderButton = computed(() => {
      return __props.column.enabled(__props.row) && __props.column.value(__props.row) !== null;
    });
    const expose = {
      tabstopEl: renderButton.value ? buttonElement : tdElement
    };
    __expose(expose);
    return (_ctx, _cache) => {
      return renderButton.value ? (openBlock(), createElementBlock("td", _hoisted_1$4, [createElementVNode("button", {
        ref: "button",
        class: "icon-button",
        type: "button",
        tabindex: "-1",
        onClick: onClickButton
      }, [__props.column.icon ? (openBlock(), createBlock(unref(FIcon), {
        key: 0,
        name: __props.column.icon
      }, null, 8, ["name"])) : createCommentVNode("", true), _cache[0] || (_cache[0] = createTextVNode()), createElementVNode("span", _hoisted_2$3, toDisplayString(__props.column.value(__props.row)), 1)], 512)])) : (openBlock(), createElementBlock("td", _hoisted_3$3, null, 512));
    };
  }
});
var _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
      }, toDisplayString(__props.column.value(__props.row)), 513);
    };
  }
});
var _hoisted_1$3 = {
  class: "table-ng__editable"
};
var _hoisted_2$2 = {
  class: "table-ng__editable__text"
};
var _hoisted_3$2 = ["aria-controls", "aria-label"];
var _hoisted_4$2 = {
  key: 1,
  tabindex: "-1",
  class: "table-ng__cell table-ng__cell--static"
};
var _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ITableSelect",
  props: {
    row: {},
    column: {}
  },
  setup(__props) {
    const editing = ref(false);
    const editRef = useTemplateRef("edit");
    const {
      stopEdit: stopEdit2
    } = useStartStopEdit();
    const viewValue = ref(__props.column.value(__props.row));
    const ariaLabel = computed(() => {
      const value = __props.column.label(__props.row);
      return value.length > 0 ? value : void 0;
    });
    async function onCellKeyDown(e) {
      if (e.code === "Enter" || e.code === "NumpadEnter") {
        startEditing(e);
      }
    }
    async function onCellClick(e) {
      if (editing.value) {
        return;
      }
      startEditing(e);
    }
    async function startEditing(e) {
      assertRef(editRef);
      e.preventDefault();
      editing.value = true;
      await nextTick();
      editRef.value.tabIndex = 0;
      editRef.value.focus();
      openSelected("first");
    }
    async function onDropdownSelect(value) {
      assertRef(editRef);
      assertSet(stopEdit2);
      close();
      submit();
      viewValue.value = value;
      stopEdit2(editRef.value, "enter");
    }
    function onDropdownClose() {
      assertRef(editRef);
      assertSet(stopEdit2);
      stopEdit2(editRef.value, "escape");
    }
    const dropdownId = ElementIdService.generateElementId();
    const dropdownIsOpen = ref(false);
    const activeOptionId = ElementIdService.generateElementId();
    const activeOption = ref(null);
    watchEffect(async () => {
      if (!editRef.value) {
        return;
      }
      if (activeOption.value) {
        editRef.value.setAttribute("aria-activedescendant", activeOptionId);
      } else {
        editRef.value.removeAttribute("aria-activedescendant");
      }
    });
    async function openSelected(fallback = null) {
      dropdownIsOpen.value = true;
      await nextTick();
      if (viewValue.value) {
        activeOption.value = viewValue.value;
      } else if (fallback === "first") {
        activeOption.value = __props.column.options[0];
      } else if (fallback === "last") {
        activeOption.value = __props.column.options[__props.column.options.length - 1];
      } else {
        activeOption.value = null;
      }
      editRef.value?.focus();
    }
    function close() {
      dropdownIsOpen.value = false;
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
      assertRef(editRef);
      assertSet(stopEdit2);
      switch (e.code) {
        case "Escape":
          e.preventDefault();
          cancel();
          stopEdit2(editRef.value, "escape");
          break;
        case "Enter":
        case "NumpadEnter":
          e.preventDefault();
          submit();
          if (activeOption.value) {
            viewValue.value = activeOption.value;
          }
          close();
          stopEdit2(editRef.value, "enter");
          break;
        case "Tab":
          e.preventDefault();
          cancel();
          stopEdit2(editRef.value, e.shiftKey ? "shift-tab" : "tab");
          break;
        case "ArrowDown":
          e.preventDefault();
          if (dropdownIsOpen.value) {
            setNextOption();
          } else {
            openSelected("first");
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          if (dropdownIsOpen.value) {
            setPreviousOption();
          } else {
            openSelected("last");
          }
          break;
      }
    }
    async function onEditBlur() {
      if (editing.value) {
        assertSet(stopEdit2);
        assertRef(editRef);
        dropdownIsOpen.value = false;
        editing.value = false;
        await nextTick();
        stopEdit2(editRef.value, "blur");
      }
    }
    async function submit() {
      editing.value = false;
      await nextTick();
    }
    function cancel() {
      assertSet(stopEdit2);
      assertRef(editRef);
      stopEdit2(editRef.value, "escape");
    }
    return (_ctx, _cache) => {
      return __props.column.editable(__props.row) ? (openBlock(), createElementBlock("td", {
        key: 0,
        class: "table-ng__cell table-ng__cell--select",
        tabindex: "-1",
        onKeydown: onCellKeyDown,
        onClick: withModifiers(onCellClick, ["stop"])
      }, [withDirectives(createElementVNode("div", _hoisted_1$3, [createElementVNode("span", _hoisted_2$2, toDisplayString(viewValue.value), 1), _cache[2] || (_cache[2] = createTextVNode()), createVNode(unref(FIcon), {
        name: "pen",
        class: "table-ng__editable__icon"
      })], 512), [[vShow, !editing.value]]), _cache[3] || (_cache[3] = createTextVNode()), withDirectives(createElementVNode("div", {
        ref: "edit",
        role: "combobox",
        tabindex: "-1",
        "aria-expanded": "",
        "aria-controls": unref(dropdownId),
        "aria-autocomplete": "list",
        class: "table-ng__editable",
        "aria-label": ariaLabel.value,
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["stop"])),
        onDblclick: _cache[1] || (_cache[1] = withModifiers(() => {
        }, ["prevent"])),
        onKeydown: withModifiers(onEditKeyDown, ["stop"]),
        onFocusout: onEditBlur
      }, toDisplayString(viewValue.value), 41, _hoisted_3$2), [[vShow, editing.value]]), _cache[4] || (_cache[4] = createTextVNode()), withDirectives(createVNode(unref(IComboboxDropdown), {
        id: "dropdownId",
        "is-open": dropdownIsOpen.value,
        options: __props.column.options,
        "active-option": activeOption.value,
        "active-option-id": unref(activeOptionId),
        "input-node": editRef.value,
        onSelect: onDropdownSelect,
        onClose: onDropdownClose
      }, null, 8, ["is-open", "options", "active-option", "active-option-id", "input-node"]), [[vShow, editing.value]])], 32)) : (openBlock(), createElementBlock("td", _hoisted_4$2, toDisplayString(__props.column.value(__props.row)), 1));
    };
  }
});
function addInputValidators(inputElement, type, decimals) {
  ValidationService.addValidatorsToElement(inputElement, inputFieldConfig[type].validationConfig, true);
  const options = void 0;
  const attributes = inputFieldConfig[type].attributes(options);
  for (const {
    name,
    value
  } of attributes) {
    inputElement.setAttribute(name, value);
  }
  ValidationService.validateElement(inputElement);
}
function isAlphanumeric(e) {
  return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
}
var _hoisted_1$2 = ["aria-label"];
var _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ITableText",
  props: {
    row: {},
    column: {}
  },
  setup(__props) {
    const model = ref("");
    const inEdit = ref(false);
    const validity = ref({
      isValid: true,
      validationMessage: "",
      validityMode: "INITIAL"
    });
    const hasError = computed(() => validity.value.validityMode === "ERROR");
    const divClasses = computed(() => {
      return {
        "table-ng__editable": true,
        "table-ng__editable__numeric": __props.column.tnum
      };
    });
    const wrapperClasses = computed(() => {
      return {
        "table-ng__cell": true,
        "table-ng__cell--text": true,
        "table-ng__cell--valid": !hasError.value,
        "table-ng__cell--error": hasError.value,
        "table-ng__cell--align-left": __props.column.align === "left",
        "table-ng__cell--align-right": __props.column.align === "right"
      };
    });
    const staticClasses = computed(() => {
      return {
        "table-ng__cell": true,
        "table-ng__cell--static": true,
        "table-ng__cell--align-left": __props.column.align === "left",
        "table-ng__cell--align-right": __props.column.align === "right"
      };
    });
    const inputClasses = computed(() => {
      return {
        foobar: true,
        "table-ng__textedit": true
      };
    });
    const ariaLabel = computed(() => {
      const value = __props.column.label(__props.row);
      return value.length > 0 ? value : void 0;
    });
    const tdElement = useTemplateRef("td");
    const viewElement = useTemplateRef("view");
    const inputElement = useTemplateRef("input");
    const {
      stopEdit: stopEdit2
    } = useStartStopEdit();
    onMounted(() => {
      if (inputElement.value) {
        addInputValidators(inputElement.value, __props.column.type);
        ValidationService.addValidatorsToElement(inputElement.value, __props.column.validation);
      }
    });
    function onStartEdit(modelValue) {
      if (inEdit.value) {
        return;
      }
      inEdit.value = true;
      assertRef(tdElement);
      assertRef(inputElement);
      const {
        width
      } = tdElement.value.getBoundingClientRect();
      model.value = modelValue;
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
      stopEdit2(inputElement.value, reason);
    }
    function onClickCell(event) {
      assertRef(tdElement);
      if (tdElement.value.contains(event.target)) {
        const value = __props.column.value(__props.row);
        onStartEdit(value);
      }
    }
    function onViewingKeydown(event) {
      if (isAlphanumeric(event)) {
        event.stopPropagation();
        onStartEdit("");
      }
      if (event.key === "Enter") {
        event.stopPropagation();
        const value = __props.column.value(__props.row);
        onStartEdit(value);
      }
    }
    function onEditingKeydown(event) {
      assertRef(viewElement);
      assertRef(inputElement);
      event.stopPropagation();
      if (event.key === "Enter") {
        event.preventDefault();
        const oldValue = __props.column.value(__props.row);
        const newValue = model.value;
        __props.column.update(__props.row, newValue, oldValue);
        model.value = "";
        onStopEdit({
          reason: "enter"
        });
      }
      if (event.key === "Escape") {
        event.preventDefault();
        model.value = "";
        onStopEdit({
          reason: "escape"
        });
      }
      if (event.key === "Tab") {
        event.preventDefault();
        const oldValue = __props.column.value(__props.row);
        const newValue = model.value;
        __props.column.update(__props.row, newValue, oldValue);
        model.value = "";
        onStopEdit({
          reason: event.shiftKey ? "shift-tab" : "tab"
        });
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
    function onBlur() {
      inEdit.value = false;
      assertRef(tdElement);
      tdElement.value.style.removeProperty("width");
      const isDirty = model.value !== "";
      if (isDirty) {
        const oldValue = __props.column.value(__props.row);
        const newValue = model.value;
        __props.column.update(__props.row, newValue, oldValue);
      }
    }
    function onValidity(event) {
      const {
        isValid,
        validationMessage,
        validityMode
      } = event.detail;
      validity.value = {
        isValid,
        validationMessage,
        validityMode
      };
    }
    return (_ctx, _cache) => {
      return __props.column.editable(__props.row) ? (openBlock(), createElementBlock("td", {
        key: 0,
        ref: "td",
        tabindex: "-1",
        class: normalizeClass(wrapperClasses.value),
        onClick: withModifiers(onClickCell, ["stop"]),
        onKeydown
      }, [createElementVNode("div", {
        class: normalizeClass(divClasses.value)
      }, [createElementVNode("span", {
        ref: "view",
        class: "table-ng__editable__text"
      }, toDisplayString(__props.column.value(__props.row)), 513), _cache[1] || (_cache[1] = createTextVNode()), withDirectives(createElementVNode("input", {
        ref: "input",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
        class: normalizeClass(inputClasses.value),
        type: "text",
        maxlength: "40",
        tabindex: "-1",
        "aria-label": ariaLabel.value,
        onBlur,
        onValidity
      }, null, 42, _hoisted_1$2), [[vModelText, model.value]]), _cache[2] || (_cache[2] = createTextVNode()), hasError.value ? (openBlock(), createBlock(unref(FIcon), {
        key: 0,
        name: "error",
        class: "table-ng__editable__icon"
      })) : (openBlock(), createBlock(unref(FIcon), {
        key: 1,
        name: "pen",
        class: "table-ng__editable__icon"
      }))], 2)], 34)) : (openBlock(), createElementBlock("td", {
        key: 1,
        ref: "td",
        tabindex: "-1",
        class: normalizeClass(staticClasses.value)
      }, toDisplayString(__props.column.value(__props.row)), 3));
    };
  }
});
function getUpdateFn(fn3, key) {
  if (fn3) {
    return fn3;
  }
  if (key) {
    return (row, value) => {
      row[key] = value;
    };
  }
  return () => void 0;
}
function getParsedUpdateFn(fn3, key, parser) {
  if (fn3) {
    return (row, newValue, oldValue) => {
      const parsedNewValue = parser(newValue);
      const parsedOldValue = parser(oldValue);
      fn3(row, parsedNewValue !== null && parsedNewValue !== void 0 ? parsedNewValue : newValue, parsedOldValue !== null && parsedOldValue !== void 0 ? parsedOldValue : oldValue);
    };
  }
  if (key) {
    return (row, value) => {
      const newValue = parser(value);
      row[key] = isSet(newValue) ? newValue : value;
    };
  }
  return () => void 0;
}
function getParsedNumberUpdateFn(fn3, key, parser) {
  if (fn3) {
    return (row, newValue, oldValue) => {
      var _parser, _parser2;
      const parsedNewValue = (_parser = parser(newValue)) !== null && _parser !== void 0 ? _parser : newValue;
      const parsedOldValue = (_parser2 = parser(oldValue)) !== null && _parser2 !== void 0 ? _parser2 : oldValue;
      fn3(row, parsedNewValue, parsedOldValue);
    };
  }
  if (key) {
    return (row, value) => {
      const newValue = parser(value);
      row[key] = isSet(newValue) ? newValue : value;
    };
  }
  return () => void 0;
}
function getValueFn(fn3, key, coerce, defaultValue) {
  if (fn3) {
    return fn3;
  }
  if (key) {
    return (row) => {
      return coerce(row[key]);
    };
  }
  return () => defaultValue;
}
function getFormattedValueFn(fn3, key, formatter, defaultValue) {
  if (fn3) {
    return (row) => {
      const value = fn3(row);
      const result = formatter(value);
      return result !== null && result !== void 0 ? result : value;
    };
  }
  if (key) {
    return (row) => {
      const value = row[key];
      const result = formatter(value);
      return result !== null && result !== void 0 ? result : value;
    };
  }
  return () => defaultValue;
}
function getFormattedNumberValueFn(fn3, key, formatter, defaultValue) {
  if (fn3) {
    return (row) => {
      var _formatter;
      const value = fn3(row);
      return (_formatter = formatter(value)) !== null && _formatter !== void 0 ? _formatter : value;
    };
  }
  if (key) {
    return (row) => {
      var _formatter2;
      const value = row[key];
      return (_formatter2 = formatter(value)) !== null && _formatter2 !== void 0 ? _formatter2 : value;
    };
  }
  return () => defaultValue;
}
function getLabelFn(fn3) {
  if (fn3) {
    return fn3;
  }
  return () => "";
}
function defaultTnumValue(type) {
  const tnumTypes = ["text:bankAccountNumber", "text:bankgiro", "text:clearingNumber", "text:currency", "text:number", "text:organisationsnummer", "text:percent", "text:personnummer", "text:phoneNumber", "text:plusgiro", "text:postalCode"];
  return tnumTypes.includes(type);
}
function normalizeTableColumn(column) {
  var _column$key, _column$key2, _column$key5, _column$key6, _column$icon, _column$key7, _column$key8, _column$key9;
  const description = typeof column.description !== "undefined" ? toRef(column.description) : ref("");
  if ("render" in column) {
    return {
      type: void 0,
      id: Symbol(),
      header: toRef(column.header),
      description,
      render: column.render,
      sortable: null
    };
  }
  switch (column.type) {
    case "checkbox":
      return {
        type: "checkbox",
        id: Symbol(),
        header: toRef(column.header),
        description,
        label: getLabelFn(column.label),
        value: getValueFn(column.value, column.key, Boolean, false),
        update: getUpdateFn(column.update, column.key),
        editable: typeof column.editable === "function" ? column.editable : () => {
          var _column$editable;
          return Boolean((_column$editable = column.editable) !== null && _column$editable !== void 0 ? _column$editable : false);
        },
        sortable: (_column$key = column.key) !== null && _column$key !== void 0 ? _column$key : null,
        component: _sfc_main$d
      };
    case "radio":
      return {
        type: "radio",
        id: Symbol(),
        header: toRef(column.header),
        description,
        label: getLabelFn(column.label),
        value: getValueFn(column.value, column.key, Boolean, false),
        update: getUpdateFn(column.update, column.key),
        sortable: (_column$key2 = column.key) !== null && _column$key2 !== void 0 ? _column$key2 : null,
        component: _sfc_main$8
      };
    case "text:currency":
    case "text:number":
    case "text:percent": {
      var _column$parser, _column$formatter, _column$tnum, _column$align, _column$validation, _column$key3;
      const type = column.type;
      const config = inputFieldConfig[type];
      const parser = (_column$parser = column.parser) !== null && _column$parser !== void 0 ? _column$parser : config.parser.bind(column);
      const formatter = (_column$formatter = column.formatter) !== null && _column$formatter !== void 0 ? _column$formatter : config.formatter.bind(column);
      const decimals = type === "text:currency" ? 0 : column.decimals;
      return {
        type,
        id: Symbol(),
        header: toRef(column.header),
        description,
        label: getLabelFn(column.label),
        decimals,
        tnum: (_column$tnum = column.tnum) !== null && _column$tnum !== void 0 ? _column$tnum : defaultTnumValue(type),
        align: (_column$align = column.align) !== null && _column$align !== void 0 ? _column$align : "right",
        value: getFormattedNumberValueFn(column.value, column.key, formatter, ""),
        update: getParsedNumberUpdateFn(column.update, column.key, parser),
        editable: typeof column.editable === "function" ? column.editable : () => {
          var _column$editable2;
          return Boolean((_column$editable2 = column.editable) !== null && _column$editable2 !== void 0 ? _column$editable2 : false);
        },
        validation: (_column$validation = column.validation) !== null && _column$validation !== void 0 ? _column$validation : {},
        sortable: (_column$key3 = column.key) !== null && _column$key3 !== void 0 ? _column$key3 : null,
        component: _sfc_main$3
      };
    }
    case "text":
    case "text:bankAccountNumber":
    case "text:bankgiro":
    case "text:clearingNumber":
    case "text:email":
    case "text:organisationsnummer":
    case "text:personnummer":
    case "text:phoneNumber":
    case "text:plusgiro":
    case "text:postalCode": {
      var _column$parser2, _column$formatter2, _column$tnum2, _column$align2, _column$validation2, _column$key4;
      const type = column.type;
      const config = inputFieldConfig[type];
      const parser = (_column$parser2 = column.parser) !== null && _column$parser2 !== void 0 ? _column$parser2 : config.parser;
      const formatter = (_column$formatter2 = column.formatter) !== null && _column$formatter2 !== void 0 ? _column$formatter2 : config.formatter;
      return {
        type,
        id: Symbol(),
        header: toRef(column.header),
        description,
        tnum: (_column$tnum2 = column.tnum) !== null && _column$tnum2 !== void 0 ? _column$tnum2 : defaultTnumValue(type),
        align: (_column$align2 = column.align) !== null && _column$align2 !== void 0 ? _column$align2 : "left",
        label: getLabelFn(column.label),
        value: getFormattedValueFn(column.value, column.key, formatter, ""),
        update: getParsedUpdateFn(column.update, column.key, parser),
        editable: typeof column.editable === "function" ? column.editable : () => {
          var _column$editable3;
          return Boolean((_column$editable3 = column.editable) !== null && _column$editable3 !== void 0 ? _column$editable3 : false);
        },
        validation: (_column$validation2 = column.validation) !== null && _column$validation2 !== void 0 ? _column$validation2 : {},
        sortable: (_column$key4 = column.key) !== null && _column$key4 !== void 0 ? _column$key4 : null,
        component: _sfc_main$3
      };
    }
    case "rowheader":
      return {
        type: "rowheader",
        id: Symbol(),
        header: toRef(column.header),
        description,
        value: getValueFn(column.value, column.key, String, ""),
        sortable: (_column$key5 = column.key) !== null && _column$key5 !== void 0 ? _column$key5 : null,
        component: _sfc_main$5
      };
    case "anchor":
      return {
        type: "anchor",
        id: Symbol(),
        header: toRef(column.header),
        description,
        value: column.value,
        href: column.href,
        enabled: typeof column.enabled === "function" ? column.enabled : () => {
          var _column$enabled;
          return Boolean((_column$enabled = column.enabled) !== null && _column$enabled !== void 0 ? _column$enabled : true);
        },
        sortable: (_column$key6 = column.key) !== null && _column$key6 !== void 0 ? _column$key6 : null,
        component: _sfc_main$7
      };
    case "button":
      return {
        type: "button",
        id: Symbol(),
        header: toRef(column.header),
        description,
        value: column.value,
        onClick: column.onClick,
        enabled: typeof column.enabled === "function" ? column.enabled : () => {
          var _column$enabled2;
          return Boolean((_column$enabled2 = column.enabled) !== null && _column$enabled2 !== void 0 ? _column$enabled2 : true);
        },
        icon: (_column$icon = column.icon) !== null && _column$icon !== void 0 ? _column$icon : null,
        sortable: (_column$key7 = column.key) !== null && _column$key7 !== void 0 ? _column$key7 : null,
        component: _sfc_main$6
      };
    case "select":
      return {
        type: "select",
        id: Symbol(),
        header: toRef(column.header),
        description,
        label: getLabelFn(column.label),
        value: getValueFn(column.value, column.key, String, ""),
        update: getUpdateFn(column.update, column.key),
        editable: typeof column.editable === "function" ? column.editable : () => {
          var _column$editable4;
          return Boolean((_column$editable4 = column.editable) !== null && _column$editable4 !== void 0 ? _column$editable4 : false);
        },
        options: column.options,
        sortable: (_column$key8 = column.key) !== null && _column$key8 !== void 0 ? _column$key8 : null,
        component: _sfc_main$4
      };
    case void 0:
      return {
        type: "text",
        id: Symbol(),
        header: toRef(column.header),
        description,
        label: () => "",
        tnum: false,
        align: "left",
        value: getValueFn(column.value, column.key, String, ""),
        update() {
        },
        editable: () => false,
        sortable: (_column$key9 = column.key) !== null && _column$key9 !== void 0 ? _column$key9 : null,
        validation: {},
        component: _sfc_main$3
      };
  }
}
function defineTableColumns(columns2) {
  return columns2;
}
function normalizeTableColumns(columns2) {
  return columns2.map((column) => {
    return normalizeTableColumn(column);
  });
}
function useTabstop(tableRef, metaRows) {
  let pendingRowRemoval = false;
  const renderOptions = ref({
    fallbackToFirstCell: false,
    focus: false
  });
  function fallbackToFirstCell(newRows, oldRows, focus) {
    assertRef(tableRef);
    const newFirstRowOldIndex = oldRows.findIndex((it3) => it3.key === newRows[0].key);
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
  watch(metaRows, (newRows, oldRows) => {
    const tabFallback = pendingRowRemoval ? "sticky" : "first-cell";
    pendingRowRemoval = false;
    assertRef(tableRef);
    const oldTabstopElement = tableRef.value.querySelector(`[tabindex="0"]`);
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
    const oldTabstopRowKey = oldRows[oldTabstopTr.rowIndex - 1].key;
    const isBeingRemoved = !newRows.some((it3) => it3.key === oldTabstopRowKey);
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
      const hasRowBelowInNewRows = newRows.some((it3) => it3.key === oldRows[1].key);
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
      const hasRowAboveInNewRows = newRows.some((it3) => it3.key === oldRows[oldTabstopTr.rowIndex - 2].key);
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
  onUpdated(() => {
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
var _hoisted_1$1 = ["role", "aria-rowcount"];
var _hoisted_2$1 = {
  class: "table-ng__row",
  "aria-rowindex": "1"
};
var _hoisted_3$1 = {
  key: 0,
  scope: "col",
  tabindex: "-1",
  class: "table-ng__column"
};
var _hoisted_4$1 = {
  key: 2,
  scope: "col"
};
var _hoisted_5$1 = {
  key: 0,
  class: "table-ng__row--empty"
};
var _hoisted_6$1 = ["colspan"];
var _hoisted_7$1 = ["aria-level", "aria-rowindex", "aria-setsize", "aria-posinset"];
var _hoisted_8 = {
  key: 0
};
var _hoisted_9 = ["aria-rowindex"];
var _hoisted_10 = ["colspan"];
var _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
    const $t2 = useTranslate();
    const {
      hasSlot
    } = useSlotUtils();
    const tableRef = useTemplateRef("table");
    const selectAllRef = ref(null);
    const expandedKeys = ref([]);
    const keyedRows = computed(() => setInternalKeys(__props.rows, __props.keyAttribute, __props.expandableAttribute));
    const metaRows = computed(() => getMetaRows(keyedRows.value, expandedKeys.value, __props.expandableAttribute));
    const isTreegrid = computed(() => Boolean(__props.expandableAttribute));
    const role = computed(() => isTreegrid.value ? "treegrid" : "grid");
    const isEmpty2 = computed(() => {
      return metaRows.value.length === 0;
    });
    const ariaRowcount = computed(() => {
      const headerRow = 1;
      const footerRow = hasFooter.value ? 1 : 0;
      return getBodyRowCount(keyedRows.value, __props.expandableAttribute) + headerRow + footerRow;
    });
    const columnCount = computed(() => {
      const expandCol = isTreegrid.value ? 1 : 0;
      const selectCol = __props.selectable ? 1 : 0;
      const count = columns2.value.length + expandCol + selectCol;
      return Math.max(1, count);
    });
    const hasFooter = computed(() => {
      return hasSlot("footer");
    });
    const multiSelectColumn = {
      type: "checkbox",
      id: Symbol("multi-select"),
      header: ref("selectable"),
      description: ref(null),
      sortable: null,
      component: _sfc_main$d,
      label() {
        return $t2("fkui.table.selectable.checkbox", "V\xE4lj rad");
      },
      value(row) {
        if (!__props.keyAttribute) {
          return false;
        }
        return selectedRows.value.some((it3) => {
          return row[__props.keyAttribute] === it3[__props.keyAttribute];
        });
      },
      editable() {
        return true;
      },
      update(row, _newValue, _oldValue) {
        assertRef(selectedRows);
        const index = selectedRows.value.indexOf(row);
        if (index < 0) {
          selectedRows.value.push(row);
        } else {
          selectedRows.value.splice(index, 1);
        }
      }
    };
    const singleSelectColumn = {
      type: "radio",
      id: Symbol("single-select"),
      header: ref("V\xE4lj en rad"),
      description: ref(null),
      sortable: null,
      component: _sfc_main$8,
      label() {
        return $t2("fkui.table.selectable.radio", "V\xE4lj rad");
      },
      value(row) {
        if (!__props.keyAttribute) {
          return false;
        }
        return selectedRows.value.some((it3) => {
          return row[__props.keyAttribute] === it3[__props.keyAttribute];
        });
      },
      update(row, _newValue, _oldValue) {
        assertRef(selectedRows);
        selectedRows.value = [row];
      }
    };
    const isIndeterminate = computed(() => {
      return selectedRows.value.length > 0 && selectedRows.value.length < __props.rows.length;
    });
    const isAllRowsSelected = computed(() => {
      return selectedRows.value.length > 0 && selectedRows.value.length === __props.rows.length;
    });
    const isSingleSelect = computed(() => {
      return __props.selectable === "single";
    });
    const isMultiSelect = computed(() => {
      return __props.selectable === "multi";
    });
    watchEffect(() => {
      if (selectAllRef.value) {
        selectAllRef.value.indeterminate = isIndeterminate.value;
        selectAllRef.value.checked = isAllRowsSelected.value;
      }
    });
    function onSelectAllChange() {
      if (selectAllRef.value?.checked) {
        selectedRows.value = [...__props.rows];
      } else {
        selectedRows.value = [];
      }
    }
    const columns2 = computed(() => normalizeTableColumns(__props.columns));
    const tableClasses = computed(() => {
      return __props.striped ? "table-ng table-ng--striped" : "table-ng";
    });
    const slots = useSlots();
    const hasExpandableSlot = computed(() => {
      return Boolean(slots.expandable);
    });
    async function stopEditHandler(element, reason) {
      stopEdit(element, reason);
    }
    provide(stopEditKey, stopEditHandler);
    function onToggleExpanded(key) {
      const index = expandedKeys.value.indexOf(key);
      if (index < 0) {
        expandedKeys.value.push(key);
      } else {
        expandedKeys.value.splice(index, 1);
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
      tableRef.value.querySelectorAll(`[tabindex="0"]`).forEach((it3) => {
        if (it3 !== e.target) {
          it3.setAttribute("tabindex", "-1");
        }
      });
    }
    function isInExpandable(el2) {
      if (!el2.parentElement) {
        return false;
      }
      return Boolean(el2.parentElement.closest(".table-ng__custom-expandable"));
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
      const outsideTable = !relatedTarget || !tableRef.value.contains(relatedTarget);
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
    const sortableColumns = ref([]);
    const sortedColumn = ref("");
    const sortedAscending = ref(false);
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
      const apiEl = toValue(ref22.tabstopEl);
      if (!apiEl) {
        return;
      }
      const cell = apiEl.closest("td, th");
      assertSet(cell);
      cell[tableCellApiSymbol] = ref22;
    }
    function bindSelectableCellApiRef(ref22) {
      if (!isFTableCellApi(ref22)) {
        return;
      }
      bindCellApiRef(ref22);
      selectAllRef.value = toValue(ref22.tabstopEl);
    }
    const tableApi = useTabstop(tableRef, metaRows);
    __expose(tableApi);
    onMounted(() => {
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
      }, [createElementVNode("thead", null, [createElementVNode("tr", _hoisted_2$1, [isTreegrid.value ? (openBlock(), createElementBlock("th", _hoisted_3$1)) : createCommentVNode("", true), _cache[0] || (_cache[0] = createTextVNode()), isMultiSelect.value ? (openBlock(), createBlock(_sfc_main$9, {
        key: 1,
        ref: bindSelectableCellApiRef,
        onChange: onSelectAllChange
      })) : createCommentVNode("", true), _cache[1] || (_cache[1] = createTextVNode()), isSingleSelect.value ? (openBlock(), createElementBlock("th", _hoisted_4$1, toDisplayString(singleSelectColumn.header), 1)) : createCommentVNode("", true), _cache[2] || (_cache[2] = createTextVNode()), (openBlock(true), createElementBlock(Fragment, null, renderList(columns2.value, (column) => {
        return openBlock(), createBlock(_sfc_main$a, {
          key: column.id,
          column,
          "sort-enabled": isSortEnabled(column),
          "sort-order": getSortOrder(column),
          scope: "col",
          class: "table-ng__column",
          onToggleSortOrder
        }, null, 8, ["column", "sort-enabled", "sort-order"]);
      }), 128))])]), _cache[7] || (_cache[7] = createTextVNode()), createElementVNode("tbody", null, [isEmpty2.value ? (openBlock(), createElementBlock("tr", _hoisted_5$1, [createElementVNode("td", {
        colspan: columnCount.value,
        class: "table-ng__cell"
      }, [renderSlot(_ctx.$slots, "empty", {}, () => [_cache[3] || (_cache[3] = createTextVNode(" Tabellen \xE4r tom ", -1))])], 8, _hoisted_6$1)])) : (openBlock(true), createElementBlock(Fragment, {
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
          "aria-posinset": posinset
        }, [isTreegrid.value ? (openBlock(), createBlock(_sfc_main$c, {
          key: 0,
          ref_for: true,
          ref: bindCellApiRef,
          "is-expandable": isExpandable,
          "is-expanded": isExpanded,
          "row-key": key,
          onToggle: onToggleExpanded
        }, null, 8, ["is-expandable", "is-expanded", "row-key"])) : createCommentVNode("", true), _cache[6] || (_cache[6] = createTextVNode()), level > 1 && hasExpandableSlot.value ? (openBlock(), createBlock(_sfc_main$b, {
          key: 1,
          colspan: columns2.value.length
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "expandable", mergeProps({
            ref_for: true
          }, {
            row
          }))]),
          _: 2
        }, 1032, ["colspan"])) : (openBlock(), createElementBlock(Fragment, {
          key: 2
        }, [isMultiSelect.value ? (openBlock(), createBlock(_sfc_main$d, {
          key: 0,
          ref_for: true,
          ref: bindCellApiRef,
          row,
          column: multiSelectColumn,
          class: "table-ng__cell--select"
        }, null, 8, ["row"])) : createCommentVNode("", true), _cache[4] || (_cache[4] = createTextVNode()), isSingleSelect.value ? (openBlock(), createBlock(_sfc_main$8, {
          key: 1,
          ref_for: true,
          ref: bindCellApiRef,
          row,
          column: singleSelectColumn,
          class: "table-ng__cell--select"
        }, null, 8, ["row"])) : createCommentVNode("", true), _cache[5] || (_cache[5] = createTextVNode()), (openBlock(true), createElementBlock(Fragment, null, renderList(columns2.value, (column) => {
          return openBlock(), createElementBlock(Fragment, {
            key: column.id
          }, ["component" in column ? (openBlock(), createBlock(resolveDynamicComponent(column.component), {
            key: 0,
            ref_for: true,
            ref: bindCellApiRef,
            row,
            column
          }, null, 8, ["row", "column"])) : "render" in column ? (openBlock(), createBlock(resolveDynamicComponent(column.render(row)), {
            key: 1,
            row
          }, null, 8, ["row"])) : createCommentVNode("", true)], 64);
        }), 128))], 64))], 8, _hoisted_7$1);
      }), 128))]), _cache[8] || (_cache[8] = createTextVNode()), hasFooter.value ? (openBlock(), createElementBlock("tfoot", _hoisted_8, [createElementVNode("tr", {
        class: "table-ng__row",
        "aria-rowindex": ariaRowcount.value
      }, [createElementVNode("td", {
        colspan: columnCount.value,
        class: "table-ng__cell--custom"
      }, [renderSlot(_ctx.$slots, "footer")], 8, _hoisted_10)], 8, _hoisted_9)])) : createCommentVNode("", true)], 42, _hoisted_1$1);
    };
  }
});
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
  arrayBufferByteLength = ArrayBuffer2 && uncurryThisAccessor(ArrayBuffer2.prototype, "byteLength", "get") || function(O3) {
    if (classof2(O3) !== "ArrayBuffer") throw new TypeError2("ArrayBuffer expected");
    return O3.byteLength;
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
  arrayBufferIsDetached = function(O3) {
    if (!NATIVE_ARRAY_BUFFER || arrayBufferByteLength2(O3) !== 0) return false;
    try {
      new DataView2(O3);
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
  toIndex = function(it3) {
    if (it3 === void 0) return 0;
    var number = toIntegerOrInfinity2(it3);
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
  arrayBufferNotDetached = function(it3) {
    if (isDetached(it3)) throw new $TypeError("ArrayBuffer is detached");
    return it3;
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
      var b3 = new DataView2(newBuffer);
      var copyLength = min(newByteLength, byteLength);
      for (var i = 0; i < copyLength; i++) setInt8(b3, i, getInt8(a, i));
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
  var $2 = require_export();
  var $transfer = requireArrayBufferTransfer();
  if ($transfer) $2({
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
  var $2 = require_export();
  var $transfer = requireArrayBufferTransfer();
  if ($transfer) $2({
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
  var $2 = require_export();
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
  $2({
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
var arrayToReversed;
var hasRequiredArrayToReversed;
function requireArrayToReversed() {
  if (hasRequiredArrayToReversed) return arrayToReversed;
  hasRequiredArrayToReversed = 1;
  var lengthOfArrayLike2 = requireLengthOfArrayLike();
  arrayToReversed = function(O3, C2) {
    var len = lengthOfArrayLike2(O3);
    var A2 = new C2(len);
    var k3 = 0;
    for (; k3 < len; k3++) A2[k3] = O3[len - k3 - 1];
    return A2;
  };
  return arrayToReversed;
}
var isPossiblePrototype;
var hasRequiredIsPossiblePrototype;
function requireIsPossiblePrototype() {
  if (hasRequiredIsPossiblePrototype) return isPossiblePrototype;
  hasRequiredIsPossiblePrototype = 1;
  var isObject2 = requireIsObject();
  isPossiblePrototype = function(argument) {
    return isObject2(argument) || argument === null;
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
  var isObject2 = requireIsObject();
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
    return function setPrototypeOf(O3, proto) {
      requireObjectCoercible2(O3);
      aPossiblePrototype2(proto);
      if (!isObject2(O3)) return O3;
      if (CORRECT_SETTER) setter(O3, proto);
      else O3.__proto__ = proto;
      return O3;
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
  var isObject2 = requireIsObject();
  var hasOwn = requireHasOwnProperty();
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
  var isView = function isView2(it3) {
    if (!isObject2(it3)) return false;
    var klass = classof2(it3);
    return klass === "DataView" || hasOwn(TypedArrayConstructorsList, klass) || hasOwn(BigIntArrayConstructorsList, klass);
  };
  var getTypedArrayConstructor = function(it3) {
    var proto = getPrototypeOf(it3);
    if (!isObject2(proto)) return;
    var state = getInternalState(proto);
    return state && hasOwn(state, TYPED_ARRAY_CONSTRUCTOR) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
  };
  var isTypedArray = function(it3) {
    if (!isObject2(it3)) return false;
    var klass = classof2(it3);
    return hasOwn(TypedArrayConstructorsList, klass) || hasOwn(BigIntArrayConstructorsList, klass);
  };
  var aTypedArray = function(it3) {
    if (isTypedArray(it3)) return it3;
    throw new TypeError2("Target is not a typed array");
  };
  var aTypedArrayConstructor = function(C2) {
    if (isCallable2(C2) && (!setPrototypeOf || isPrototypeOf(TypedArray, C2))) return C2;
    throw new TypeError2(tryToString2(C2) + " is not a typed array constructor");
  };
  var exportTypedArrayMethod = function(KEY, property, forced, options) {
    if (!DESCRIPTORS) return;
    if (forced) for (var ARRAY in TypedArrayConstructorsList) {
      var TypedArrayConstructor = globalThis2[ARRAY];
      if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {
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
        if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {
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
  if (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {
    TYPED_ARRAY_TAG_REQUIRED = true;
    defineBuiltInAccessor2(TypedArrayPrototype, TO_STRING_TAG, {
      configurable: true,
      get: function() {
        return isObject2(this) ? this[TYPED_ARRAY_TAG] : void 0;
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
  var arrayToReversed2 = requireArrayToReversed();
  var ArrayBufferViewCore = requireArrayBufferViewCore();
  var aTypedArray = ArrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
  var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
  exportTypedArrayMethod("toReversed", function toReversed() {
    return arrayToReversed2(aTypedArray(this), getTypedArrayConstructor(this));
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
    var O3 = aTypedArray(this);
    var A2 = arrayFromConstructorAndList2(getTypedArrayConstructor(O3), O3);
    return sort(A2, compareFn);
  });
  return es_typedArray_toSorted;
}
requireEs_typedArray_toSorted();
var es_typedArray_with = {};
var arrayWith;
var hasRequiredArrayWith;
function requireArrayWith() {
  if (hasRequiredArrayWith) return arrayWith;
  hasRequiredArrayWith = 1;
  var lengthOfArrayLike2 = requireLengthOfArrayLike();
  var toIntegerOrInfinity2 = requireToIntegerOrInfinity();
  var $RangeError = RangeError;
  arrayWith = function(O3, C2, index, value) {
    var len = lengthOfArrayLike2(O3);
    var relativeIndex = toIntegerOrInfinity2(index);
    var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
    if (actualIndex >= len || actualIndex < 0) throw new $RangeError("Incorrect index");
    var A2 = new C2(len);
    var k3 = 0;
    for (; k3 < len; k3++) A2[k3] = k3 === actualIndex ? value : O3[k3];
    return A2;
  };
  return arrayWith;
}
var isBigIntArray;
var hasRequiredIsBigIntArray;
function requireIsBigIntArray() {
  if (hasRequiredIsBigIntArray) return isBigIntArray;
  hasRequiredIsBigIntArray = 1;
  var classof2 = requireClassof();
  isBigIntArray = function(it3) {
    var klass = classof2(it3);
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
  var arrayWith2 = requireArrayWith();
  var ArrayBufferViewCore = requireArrayBufferViewCore();
  var isBigIntArray2 = requireIsBigIntArray();
  var toIntegerOrInfinity2 = requireToIntegerOrInfinity();
  var toBigInt2 = requireToBigInt();
  var aTypedArray = ArrayBufferViewCore.aTypedArray;
  var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
  var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
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
      var O3 = aTypedArray(this);
      var relativeIndex = toIntegerOrInfinity2(index);
      var actualValue = isBigIntArray2(O3) ? toBigInt2(value) : +value;
      return arrayWith2(O3, getTypedArrayConstructor(O3), relativeIndex, actualValue);
    }
  }["with"], !PROPER_ORDER || THROW_ON_NEGATIVE_FRACTIONAL_INDEX);
  return es_typedArray_with;
}
requireEs_typedArray_with();
var esnext_uint8Array_setFromBase64 = {};
var es_uint8Array_setFromBase64 = {};
var anObjectOrUndefined;
var hasRequiredAnObjectOrUndefined;
function requireAnObjectOrUndefined() {
  if (hasRequiredAnObjectOrUndefined) return anObjectOrUndefined;
  hasRequiredAnObjectOrUndefined = 1;
  var isObject2 = requireIsObject();
  var $String = String;
  var $TypeError = TypeError;
  anObjectOrUndefined = function(argument) {
    if (argument === void 0 || isObject2(argument)) return argument;
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
  var hasOwn = requireHasOwnProperty();
  var base64Map2 = requireBase64Map();
  var getAlphabetOption2 = requireGetAlphabetOption();
  var notDetached = requireArrayBufferNotDetached();
  var base64Alphabet = base64Map2.c2i;
  var base64UrlAlphabet = base64Map2.c2iUrl;
  var SyntaxError2 = globalThis2.SyntaxError;
  var TypeError2 = globalThis2.TypeError;
  var at3 = uncurryThis("".charAt);
  var skipAsciiWhitespace = function(string, index) {
    var length = string.length;
    for (; index < length; index++) {
      var chr = at3(string, index);
      if (chr !== " " && chr !== "	" && chr !== "\n" && chr !== "\f" && chr !== "\r") break;
    }
    return index;
  };
  var decodeBase64Chunk = function(chunk, alphabet, throwOnExtraBits) {
    var chunkLength = chunk.length;
    if (chunkLength < 4) {
      chunk += chunkLength === 2 ? "AA" : "A";
    }
    var triplet = (alphabet[at3(chunk, 0)] << 18) + (alphabet[at3(chunk, 1)] << 12) + (alphabet[at3(chunk, 2)] << 6) + alphabet[at3(chunk, 3)];
    var chunkBytes = [triplet >> 16 & 255, triplet >> 8 & 255, triplet & 255];
    if (chunkLength === 2) {
      if (throwOnExtraBits && chunkBytes[1] !== 0) {
        throw new SyntaxError2("Extra bits");
      }
      return [chunkBytes[0]];
    }
    if (chunkLength === 3) {
      if (throwOnExtraBits && chunkBytes[2] !== 0) {
        throw new SyntaxError2("Extra bits");
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
              throw new SyntaxError2("Malformed padding: exactly one additional character");
            }
            written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, false), written);
          } else {
            throw new SyntaxError2("Missing padding");
          }
        }
        read = stringLength;
        break;
      }
      var chr = at3(string, index);
      ++index;
      if (chr === "=") {
        if (chunk.length < 2) {
          throw new SyntaxError2("Padding is too early");
        }
        index = skipAsciiWhitespace(string, index);
        if (chunk.length === 2) {
          if (index === stringLength) {
            if (lastChunkHandling === "stop-before-partial") {
              break;
            }
            throw new SyntaxError2("Malformed padding: only one =");
          }
          if (at3(string, index) === "=") {
            ++index;
            index = skipAsciiWhitespace(string, index);
          }
        }
        if (index < stringLength) {
          throw new SyntaxError2("Unexpected character after padding");
        }
        written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, lastChunkHandling === "strict"), written);
        read = stringLength;
        break;
      }
      if (!hasOwn(alphabet, chr)) {
        throw new SyntaxError2("Unexpected character");
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
  var $2 = require_export();
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
  if (Uint8Array2) $2({
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
var hasRequiredEsnext_uint8Array_setFromBase64;
function requireEsnext_uint8Array_setFromBase64() {
  if (hasRequiredEsnext_uint8Array_setFromBase64) return esnext_uint8Array_setFromBase64;
  hasRequiredEsnext_uint8Array_setFromBase64 = 1;
  requireEs_uint8Array_setFromBase64();
  return esnext_uint8Array_setFromBase64;
}
requireEsnext_uint8Array_setFromBase64();
var esnext_uint8Array_setFromHex = {};
var es_uint8Array_setFromHex = {};
var uint8FromHex;
var hasRequiredUint8FromHex;
function requireUint8FromHex() {
  if (hasRequiredUint8FromHex) return uint8FromHex;
  hasRequiredUint8FromHex = 1;
  var globalThis2 = requireGlobalThis();
  var uncurryThis = requireFunctionUncurryThis();
  var Uint8Array2 = globalThis2.Uint8Array;
  var SyntaxError2 = globalThis2.SyntaxError;
  var parseInt2 = globalThis2.parseInt;
  var min = Math.min;
  var NOT_HEX = /[^\da-f]/i;
  var exec = uncurryThis(NOT_HEX.exec);
  var stringSlice = uncurryThis("".slice);
  uint8FromHex = function(string, into) {
    var stringLength = string.length;
    if (stringLength % 2 !== 0) throw new SyntaxError2("String should be an even number of characters");
    var maxLength = into ? min(into.length, stringLength / 2) : stringLength / 2;
    var bytes = into || new Uint8Array2(maxLength);
    var read = 0;
    var written = 0;
    while (written < maxLength) {
      var hexits = stringSlice(string, read, read += 2);
      if (exec(NOT_HEX, hexits)) throw new SyntaxError2("String should only contain hex characters");
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
  var $2 = require_export();
  var globalThis2 = requireGlobalThis();
  var aString2 = requireAString();
  var anUint8Array2 = requireAnUint8Array();
  var notDetached = requireArrayBufferNotDetached();
  var $fromHex = requireUint8FromHex();
  if (globalThis2.Uint8Array) $2({
    target: "Uint8Array",
    proto: true
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
var hasRequiredEsnext_uint8Array_setFromHex;
function requireEsnext_uint8Array_setFromHex() {
  if (hasRequiredEsnext_uint8Array_setFromHex) return esnext_uint8Array_setFromHex;
  hasRequiredEsnext_uint8Array_setFromHex = 1;
  requireEs_uint8Array_setFromHex();
  return esnext_uint8Array_setFromHex;
}
requireEsnext_uint8Array_setFromHex();
var esnext_uint8Array_toBase64 = {};
var es_uint8Array_toBase64 = {};
var hasRequiredEs_uint8Array_toBase64;
function requireEs_uint8Array_toBase64() {
  if (hasRequiredEs_uint8Array_toBase64) return es_uint8Array_toBase64;
  hasRequiredEs_uint8Array_toBase64 = 1;
  var $2 = require_export();
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
  if (Uint8Array2) $2({
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
      var at3 = function(shift) {
        return charAt(alphabet, triplet >> 6 * shift & 63);
      };
      for (; i + 2 < length; i += 3) {
        triplet = (array[i] << 16) + (array[i + 1] << 8) + array[i + 2];
        result += at3(3) + at3(2) + at3(1) + at3(0);
      }
      if (i + 2 === length) {
        triplet = (array[i] << 16) + (array[i + 1] << 8);
        result += at3(3) + at3(2) + at3(1) + (omitPadding ? "" : "=");
      } else if (i + 1 === length) {
        triplet = array[i] << 16;
        result += at3(3) + at3(2) + (omitPadding ? "" : "==");
      }
      return result;
    }
  });
  return es_uint8Array_toBase64;
}
var hasRequiredEsnext_uint8Array_toBase64;
function requireEsnext_uint8Array_toBase64() {
  if (hasRequiredEsnext_uint8Array_toBase64) return esnext_uint8Array_toBase64;
  hasRequiredEsnext_uint8Array_toBase64 = 1;
  requireEs_uint8Array_toBase64();
  return esnext_uint8Array_toBase64;
}
requireEsnext_uint8Array_toBase64();
var esnext_uint8Array_toHex = {};
var es_uint8Array_toHex = {};
var hasRequiredEs_uint8Array_toHex;
function requireEs_uint8Array_toHex() {
  if (hasRequiredEs_uint8Array_toHex) return es_uint8Array_toHex;
  hasRequiredEs_uint8Array_toHex = 1;
  var $2 = require_export();
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
  if (Uint8Array2) $2({
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
var hasRequiredEsnext_uint8Array_toHex;
function requireEsnext_uint8Array_toHex() {
  if (hasRequiredEsnext_uint8Array_toHex) return esnext_uint8Array_toHex;
  hasRequiredEsnext_uint8Array_toHex = 1;
  requireEs_uint8Array_toHex();
  return esnext_uint8Array_toHex;
}
requireEsnext_uint8Array_toHex();
var web_domException_stack = {};
var inheritIfRequired;
var hasRequiredInheritIfRequired;
function requireInheritIfRequired() {
  if (hasRequiredInheritIfRequired) return inheritIfRequired;
  hasRequiredInheritIfRequired = 1;
  var isCallable2 = requireIsCallable();
  var isObject2 = requireIsObject();
  var setPrototypeOf = requireObjectSetPrototypeOf();
  inheritIfRequired = function($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
      // it can work only with native `setPrototypeOf`
      setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      isCallable2(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject2(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype
    ) setPrototypeOf($this, NewTargetPrototype);
    return $this;
  };
  return inheritIfRequired;
}
var toString;
var hasRequiredToString;
function requireToString() {
  if (hasRequiredToString) return toString;
  hasRequiredToString = 1;
  var classof2 = requireClassof();
  var $String = String;
  toString = function(argument) {
    if (classof2(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return $String(argument);
  };
  return toString;
}
var normalizeStringArgument;
var hasRequiredNormalizeStringArgument;
function requireNormalizeStringArgument() {
  if (hasRequiredNormalizeStringArgument) return normalizeStringArgument;
  hasRequiredNormalizeStringArgument = 1;
  var toString2 = requireToString();
  normalizeStringArgument = function(argument, $default) {
    return argument === void 0 ? arguments.length < 2 ? "" : $default : toString2(argument);
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
  var $2 = require_export();
  var globalThis2 = requireGlobalThis();
  var getBuiltIn2 = requireGetBuiltIn();
  var createPropertyDescriptor2 = requireCreatePropertyDescriptor();
  var defineProperty = requireObjectDefineProperty().f;
  var hasOwn = requireHasOwnProperty();
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
  $2({
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
    for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
      var constant = DOMExceptionConstants[key];
      var constantName = constant.s;
      if (!hasOwn(PolyfilledDOMException, constantName)) {
        defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor2(6, constant.c));
      }
    }
  }
  return web_domException_stack;
}
requireWeb_domException_stack();
var HOURS_MINUTES_REGEXP = /^(?<hours>\d+)?(:(?<minutes>[0-5]\d))?$/;
var HOURS_MINUTES_WITHOUT_COLON_REGEXP = /^(?<hours>\d{2})(?<minutes>[0-5]\d)$/;
var es_iterator_filter = {};
var hasRequiredEs_iterator_filter;
function requireEs_iterator_filter() {
  if (hasRequiredEs_iterator_filter) return es_iterator_filter;
  hasRequiredEs_iterator_filter = 1;
  var $2 = require_export();
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
  $2({
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
    if (!isSet(config) || !Array.isArray(config.parser) || !isSet(config.parser?.[0]) || typeof config.parser[0] !== "function") {
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
var _sfc_main = defineComponent({
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

// ../../node_modules/@forsakringskassan/docs-live-example/dist/esm/index.js
import { defineComponent as defineComponent2 } from "vue";
import { defineComponent as _defineComponent } from "vue";
import { computed as computed2, nextTick as nextTick2, onMounted as onMounted2, ref as ref2, useTemplateRef as useTemplateRef2, watch as watch2 } from "vue";

// ../../node_modules/prettier/plugins/html.mjs
var Kr = Object.defineProperty;
var Qr = (e) => {
  throw TypeError(e);
};
var vs = (e, t, r) => t in e ? Kr(e, t, { enumerable: true, configurable: true, writable: true, value: r }) : e[t] = r;
var Jr = (e, t) => {
  for (var r in t) Kr(e, r, { get: t[r], enumerable: true });
};
var rr = (e, t, r) => vs(e, typeof t != "symbol" ? t + "" : t, r);
var Ts = (e, t, r) => t.has(e) || Qr("Cannot " + r);
var Ge = (e, t, r) => (Ts(e, t, "read from private field"), r ? r.call(e) : t.get(e));
var Zr = (e, t, r) => t.has(e) ? Qr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r);
var Cs = {};
Jr(Cs, { languages: () => cs, options: () => ps, parsers: () => jr, printers: () => Tl });
var ke = (e, t) => (r, n, ...i) => r | 1 && n == null ? void 0 : (t.call(n) ?? n[e]).apply(n, i);
var bs = String.prototype.replaceAll ?? function(e, t) {
  return e.global ? this.replace(e, t) : this.split(e).join(t);
};
var ws = ke("replaceAll", function() {
  if (typeof this == "string") return bs;
});
var w = ws;
function ks(e) {
  return this[e < 0 ? this.length + e : e];
}
var ys = ke("at", function() {
  if (Array.isArray(this) || typeof this == "string") return ks;
});
var B = ys;
var As = () => {
};
var $e = As;
var ze = "string";
var Ye = "array";
var gt = "cursor";
var ye = "indent";
var Ae = "align";
var _t = "trim";
var xe = "group";
var Ne = "fill";
var Le = "if-break";
var Pe = "indent-if-break";
var St = "line-suffix";
var Et = "line-suffix-boundary";
var z = "line";
var Ct = "label";
var Oe = "break-parent";
var vt = /* @__PURE__ */ new Set([gt, ye, Ae, _t, xe, Ne, Le, Pe, St, Et, z, Ct, Oe]);
function xs(e) {
  if (typeof e == "string") return ze;
  if (Array.isArray(e)) return Ye;
  if (!e) return;
  let { type: t } = e;
  if (vt.has(t)) return t;
}
var Tt = xs;
var Ns = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function Ls(e) {
  let t = e === null ? "null" : typeof e;
  if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if (Tt(e)) throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(e);
  if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
  let n = Ns([...vt].map((i) => `'${i}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
}
var nr = class extends Error {
  name = "InvalidDocError";
  constructor(t) {
    super(Ls(t)), this.doc = t;
  }
};
var en = nr;
function ir(e, t) {
  if (typeof e == "string") return t(e);
  let r = /* @__PURE__ */ new Map();
  return n(e);
  function n(s) {
    if (r.has(s)) return r.get(s);
    let a = i(s);
    return r.set(s, a), a;
  }
  function i(s) {
    switch (Tt(s)) {
      case Ye:
        return t(s.map(n));
      case Ne:
        return t({ ...s, parts: s.parts.map(n) });
      case Le:
        return t({ ...s, breakContents: n(s.breakContents), flatContents: n(s.flatContents) });
      case xe: {
        let { expandedStates: a, contents: o } = s;
        return a ? (a = a.map(n), o = a[0]) : o = n(o), t({ ...s, contents: o, expandedStates: a });
      }
      case Ae:
      case ye:
      case Pe:
      case Ct:
      case St:
        return t({ ...s, contents: n(s.contents) });
      case ze:
      case gt:
      case _t:
      case Et:
      case z:
      case Oe:
        return t(s);
      default:
        throw new en(s);
    }
  }
}
function L(e, t = tn) {
  return ir(e, (r) => typeof r == "string" ? F(t, r.split(`
`)) : r);
}
var D = $e;
var bt = $e;
var rn = $e;
var nn = $e;
function A(e) {
  return D(e), { type: ye, contents: e };
}
function Ps(e, t) {
  return nn(e), D(t), { type: Ae, contents: t, n: e };
}
function sn(e) {
  return Ps(Number.NEGATIVE_INFINITY, e);
}
var Y = { type: Oe };
function wt(e) {
  return rn(e), { type: Ne, parts: e };
}
function C(e, t = {}) {
  return D(e), bt(t.expandedStates, true), { type: xe, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function X(e, t = "", r = {}) {
  return D(e), t !== "" && D(t), { type: Le, breakContents: e, flatContents: t, groupId: r.groupId };
}
function an(e, t) {
  return D(e), { type: Pe, contents: e, groupId: t.groupId, negate: t.negate };
}
function F(e, t) {
  D(e), bt(t);
  let r = [];
  for (let n = 0; n < t.length; n++) n !== 0 && r.push(e), r.push(t[n]);
  return r;
}
var _ = { type: z };
var k = { type: z, soft: true };
var Os = { type: z, hard: true };
var v = [Os, Y];
var Ds = { type: z, hard: true, literal: true };
var tn = [Ds, Y];
function Rs(e, t) {
  let r = t === true || t === "'" ? "'" : '"', n = r === "'" ? '"' : "'", i = 0, s = 0;
  for (let a of e) a === r ? i++ : a === n && s++;
  return i > s ? n : r;
}
var on = Rs;
function sr(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var ar = class {
  #e;
  constructor(t) {
    this.#e = new Set(t);
  }
  getLeadingWhitespaceCount(t) {
    let r = this.#e, n = 0;
    for (let i = 0; i < t.length && r.has(t.charAt(i)); i++) n++;
    return n;
  }
  getTrailingWhitespaceCount(t) {
    let r = this.#e, n = 0;
    for (let i = t.length - 1; i >= 0 && r.has(t.charAt(i)); i--) n++;
    return n;
  }
  getLeadingWhitespace(t) {
    let r = this.getLeadingWhitespaceCount(t);
    return t.slice(0, r);
  }
  getTrailingWhitespace(t) {
    let r = this.getTrailingWhitespaceCount(t);
    return t.slice(t.length - r);
  }
  hasLeadingWhitespace(t) {
    return this.#e.has(t.charAt(0));
  }
  hasTrailingWhitespace(t) {
    return this.#e.has(B(0, t, -1));
  }
  trimStart(t) {
    let r = this.getLeadingWhitespaceCount(t);
    return t.slice(r);
  }
  trimEnd(t) {
    let r = this.getTrailingWhitespaceCount(t);
    return t.slice(0, t.length - r);
  }
  trim(t) {
    return this.trimEnd(this.trimStart(t));
  }
  split(t, r = false) {
    let n = `[${sr([...this.#e].join(""))}]+`, i = new RegExp(r ? `(${n})` : n, "u");
    return t.split(i);
  }
  hasWhitespaceCharacter(t) {
    let r = this.#e;
    return Array.prototype.some.call(t, (n) => r.has(n));
  }
  hasNonWhitespaceCharacter(t) {
    let r = this.#e;
    return Array.prototype.some.call(t, (n) => !r.has(n));
  }
  isWhitespaceOnly(t) {
    let r = this.#e;
    return Array.prototype.every.call(t, (n) => r.has(n));
  }
  #t(t) {
    let r = Number.POSITIVE_INFINITY;
    for (let n of t.split(`
`)) {
      if (n.length === 0) continue;
      let i = this.getLeadingWhitespaceCount(n);
      if (i === 0) return 0;
      n.length !== i && i < r && (r = i);
    }
    return r === Number.POSITIVE_INFINITY ? 0 : r;
  }
  dedentString(t) {
    let r = this.#t(t);
    return r === 0 ? t : t.split(`
`).map((n) => n.slice(r)).join(`
`);
  }
};
var ln = ar;
var Is = ["	", `
`, "\f", "\r", " "];
var Ms = new ln(Is);
var x = Ms;
var or = class extends Error {
  name = "UnexpectedNodeError";
  constructor(t, r, n = "type") {
    super(`Unexpected ${r} node ${n}: ${JSON.stringify(t[n])}.`), this.node = t;
  }
};
var cn = or;
var Bs = /* @__PURE__ */ new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan", "keySpan", "tagDefinition", "tokens", "valueTokens", "switchValueSourceSpan", "expSourceSpan", "valueSourceSpan"]);
var Fs = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
function un(e, t, r) {
  if (e.kind === "text" || e.kind === "comment") return null;
  if (e.kind === "yaml" && delete t.value, e.kind === "attribute") {
    let { fullName: n, value: i } = e;
    n === "style" || n === "class" || n === "srcset" && (r.fullName === "img" || r.fullName === "source") || n === "allow" && r.fullName === "iframe" || n.startsWith("on") || n.startsWith("@") || n.startsWith(":") || n.startsWith(".") || n.startsWith("#") || n.startsWith("v-") || n === "vars" && r.fullName === "style" || (n === "setup" || n === "generic") && r.fullName === "script" || n === "slot-scope" || n.startsWith("(") || n.startsWith("[") || n.startsWith("*") || n.startsWith("bind") || n.startsWith("i18n") || n.startsWith("on-") || n.startsWith("ng-") || i?.includes("{{") ? delete t.value : i && (t.value = w(0, i, /'|&quot;|&apos;/gu, '"'));
  }
  if (e.kind === "docType" && (t.value = w(0, e.value.toLowerCase(), /\s+/gu, " ")), e.kind === "angularControlFlowBlock" && e.parameters?.children) for (let n of t.parameters.children) Fs.has(e.name) ? delete n.expression : n.expression = n.expression.trim();
  e.kind === "angularIcuExpression" && (t.switchValue = e.switchValue.trim()), e.kind === "angularLetDeclarationInitializer" && delete t.value, e.kind === "element" && e.isVoid && !e.isSelfClosing && (t.isSelfClosing = true);
}
un.ignoredProperties = Bs;
var pn = un;
function j(e, t = true) {
  return [A([k, e]), t ? k : ""];
}
function U(e, t) {
  let r = e.type === "NGRoot" ? e.node.type === "NGMicrosyntax" && e.node.body.length === 1 && e.node.body[0].type === "NGMicrosyntaxExpression" ? e.node.body[0].expression : e.node : e.type === "JsExpressionRoot" ? e.node : e;
  return r && (r.type === "ObjectExpression" || r.type === "ArrayExpression" || (t.parser === "__vue_expression" || t.parser === "__vue_ts_expression") && (r.type === "TemplateLiteral" || r.type === "StringLiteral"));
}
async function y(e, t, r, n) {
  r = { __isInHtmlAttribute: true, __embeddedInHtml: true, ...r };
  let i = true;
  n && (r.__onHtmlBindingRoot = (a, o) => {
    i = n(a, o);
  });
  let s = await t(e, r, t);
  return i ? C(s) : j(s);
}
function qs(e, t, r, n) {
  let { node: i } = r, s = n.originalText.slice(i.sourceSpan.start.offset, i.sourceSpan.end.offset);
  return /^\s*$/u.test(s) ? "" : y(s, e, { parser: "__ng_directive", __isInHtmlAttribute: false }, U);
}
var hn = qs;
var Hs = Array.prototype.toReversed ?? function() {
  return [...this].reverse();
};
var Vs = ke("toReversed", function() {
  if (Array.isArray(this)) return Hs;
});
var mn = Vs;
function Us() {
  let e = globalThis, t = e.Deno?.build?.os;
  return typeof t == "string" ? t === "windows" : e.navigator?.platform?.startsWith("Win") ?? e.process?.platform?.startsWith("win") ?? false;
}
var Ws = Us();
function fn(e) {
  if (e = e instanceof URL ? e : new URL(e), e.protocol !== "file:") throw new TypeError(`URL must be a file URL: received "${e.protocol}"`);
  return e;
}
function Gs(e) {
  return e = fn(e), decodeURIComponent(e.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function $s(e) {
  e = fn(e);
  let t = decodeURIComponent(e.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
  return e.hostname !== "" && (t = `\\\\${e.hostname}${t}`), t;
}
function lr(e) {
  return Ws ? $s(e) : Gs(e);
}
var dn = (e) => String(e).split(/[/\\]/u).pop();
var gn = (e) => String(e).startsWith("file:");
function zs(e) {
  return Array.isArray(e) && e.length > 0;
}
var De = zs;
function _n(e, t) {
  if (!t) return;
  let r = dn(t).toLowerCase();
  return e.find(({ filenames: n }) => n?.some((i) => i.toLowerCase() === r)) ?? e.find(({ extensions: n }) => n?.some((i) => r.endsWith(i)));
}
function Ys(e, t) {
  if (t) return e.find(({ name: r }) => r.toLowerCase() === t) ?? e.find(({ aliases: r }) => r?.includes(t)) ?? e.find(({ extensions: r }) => r?.includes(`.${t}`));
}
var Xs = void 0;
function Sn(e, t) {
  if (t) {
    if (gn(t)) try {
      t = lr(t);
    } catch {
      return;
    }
    if (typeof t == "string") return e.find(({ isSupported: r }) => r?.({ filepath: t }));
  }
}
function js(e, t) {
  let r = mn(0, e.plugins).flatMap((i) => i.languages ?? []);
  return (Ys(r, t.language) ?? _n(r, t.physicalFile) ?? _n(r, t.file) ?? Sn(r, t.physicalFile) ?? Sn(r, t.file) ?? Xs?.(r, t.physicalFile))?.parsers[0];
}
var kt = js;
var yt = Symbol.for("PRETTIER_IS_FRONT_MATTER");
function Ks(e) {
  return !!e?.[yt];
}
var oe = Ks;
var Xe = 3;
function Qs(e) {
  let t = e.slice(0, Xe);
  if (t !== "---" && t !== "+++") return;
  let r = e.indexOf(`
`, Xe);
  if (r === -1) return;
  let n = e.slice(Xe, r).trim(), i = e.indexOf(`
${t}`, r), s = n;
  if (s || (s = t === "+++" ? "toml" : "yaml"), i === -1 && t === "---" && s === "yaml" && (i = e.indexOf(`
...`, r)), i === -1) return;
  let a = i + 1 + Xe, o = e.charAt(a + 1);
  if (!/\s?/u.test(o)) return;
  let c = e.slice(0, a), u;
  return { language: s, explicitLanguage: n || null, value: e.slice(r + 1, i), startDelimiter: t, endDelimiter: c.slice(-Xe), raw: c, start: { line: 1, column: 0, index: 0 }, end: { index: c.length, get line() {
    return u ?? (u = c.split(`
`)), u.length;
  }, get column() {
    return u ?? (u = c.split(`
`)), B(0, u, -1).length;
  } }, [yt]: true };
}
function Js(e) {
  let t = Qs(e);
  return t ? { frontMatter: t, get content() {
    let { raw: r } = t;
    return w(0, r, /[^\n]/gu, " ") + e.slice(r.length);
  } } : { content: e };
}
var cr = Js;
var En = "inline";
var ur = { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", style: "none", template: "inline", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", dialog: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", search: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", menu: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", input: "inline-block", button: "inline-block", fieldset: "block", details: "block", summary: "block", marquee: "inline-block", select: "inline-block", source: "block", track: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", option: "block", optgroup: "block" };
var Cn = "normal";
var pr = { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" };
function Zs(e) {
  return e.kind === "element" && !e.hasExplicitNamespace && !["html", "svg"].includes(e.namespace);
}
var le = Zs;
var ea = (e) => w(0, e, /^[\t\f\r ]*\n/gu, "");
var hr = (e) => ea(x.trimEnd(e));
var vn = (e) => {
  let t = e, r = x.getLeadingWhitespace(t);
  r && (t = t.slice(r.length));
  let n = x.getTrailingWhitespace(t);
  return n && (t = t.slice(0, -n.length)), { leadingWhitespace: r, trailingWhitespace: n, text: t };
};
function At(e, t) {
  return !!(e.kind === "ieConditionalComment" && e.lastChild && !e.lastChild.isSelfClosing && !e.lastChild.endSourceSpan || e.kind === "ieConditionalComment" && !e.complete || ce(e) && e.children.some((r) => r.kind !== "text" && r.kind !== "interpolation") || Lt(e, t) && !q(e, t) && e.kind !== "interpolation");
}
function ue(e) {
  return e.kind === "attribute" || !e.parent || !e.prev ? false : ta(e.prev);
}
function ta(e) {
  return e.kind === "comment" && e.value.trim() === "prettier-ignore";
}
function O(e) {
  return e.kind === "text" || e.kind === "comment";
}
function q(e, t) {
  return e.kind === "element" && (e.fullName === "script" || e.fullName === "style" || e.fullName === "svg:style" || e.fullName === "svg:script" || e.fullName === "mj-style" && t.parser === "mjml" || le(e) && (e.name === "script" || e.name === "style"));
}
function Tn(e, t) {
  return e.children && !q(e, t);
}
function bn(e, t) {
  return q(e, t) || e.kind === "interpolation" || mr(e);
}
function mr(e) {
  return Rn(e).startsWith("pre");
}
function wn(e, t) {
  let r = n();
  if (r && !e.prev && e.parent?.tagDefinition?.ignoreFirstLf) return e.kind === "interpolation";
  return r;
  function n() {
    return oe(e) || e.kind === "angularControlFlowBlock" ? false : (e.kind === "text" || e.kind === "interpolation") && e.prev && (e.prev.kind === "text" || e.prev.kind === "interpolation") ? true : !e.parent || e.parent.cssDisplay === "none" ? false : ce(e.parent) ? true : !(!e.prev && (e.parent.kind === "root" || ce(e) && e.parent || q(e.parent, t) || Qe(e.parent, t) || !oa(e.parent.cssDisplay)) || e.prev && !ua(e.prev.cssDisplay));
  }
}
function kn(e, t) {
  return oe(e) || e.kind === "angularControlFlowBlock" ? false : (e.kind === "text" || e.kind === "interpolation") && e.next && (e.next.kind === "text" || e.next.kind === "interpolation") ? true : !e.parent || e.parent.cssDisplay === "none" ? false : ce(e.parent) ? true : !(!e.next && (e.parent.kind === "root" || ce(e) && e.parent || q(e.parent, t) || Qe(e.parent, t) || !la(e.parent.cssDisplay)) || e.next && !ca(e.next.cssDisplay));
}
function yn(e, t) {
  return pa(e.cssDisplay) && !q(e, t);
}
function je(e) {
  return oe(e) || e.next && e.sourceSpan.end && e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line;
}
function An(e) {
  return fr(e) || e.kind === "element" && e.children.length > 0 && (["body", "script", "style"].includes(e.name) || e.children.some((t) => na(t))) || e.firstChild && e.firstChild === e.lastChild && e.firstChild.kind !== "text" && Nn(e.firstChild) && (!e.lastChild.isTrailingSpaceSensitive || Ln(e.lastChild));
}
function fr(e) {
  return e.kind === "element" && e.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(e.name) || e.cssDisplay.startsWith("table") && e.cssDisplay !== "table-cell");
}
function xt(e) {
  return Pn(e) || e.prev && ra(e.prev) || xn(e);
}
function ra(e) {
  return Pn(e) || e.kind === "element" && e.fullName === "br" || xn(e);
}
function xn(e) {
  return Nn(e) && Ln(e);
}
function Nn(e) {
  return e.hasLeadingSpaces && (e.prev ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line : e.parent.kind === "root" || e.parent.startSourceSpan.end.line < e.sourceSpan.start.line);
}
function Ln(e) {
  return e.hasTrailingSpaces && (e.next ? e.next.sourceSpan.start.line > e.sourceSpan.end.line : e.parent.kind === "root" || e.parent.endSourceSpan && e.parent.endSourceSpan.start.line > e.sourceSpan.end.line);
}
function Pn(e) {
  switch (e.kind) {
    case "ieConditionalComment":
    case "comment":
    case "directive":
      return true;
    case "element":
      return ["script", "select"].includes(e.name);
  }
  return false;
}
function Nt(e) {
  return e.lastChild ? Nt(e.lastChild) : e;
}
function na(e) {
  return e.children?.some((t) => t.kind !== "text");
}
function On(e) {
  if (e) switch (e) {
    case "module":
    case "text/javascript":
    case "text/babel":
    case "text/jsx":
    case "application/javascript":
      return "babel";
    case "application/x-typescript":
      return "typescript";
    case "text/markdown":
      return "markdown";
    case "text/html":
      return "html";
    case "text/x-handlebars-template":
      return "glimmer";
    default:
      if (e.endsWith("json") || e.endsWith("importmap") || e === "speculationrules") return "json";
  }
}
function ia(e, t) {
  let { name: r, attrMap: n } = e;
  if (r !== "script" || Object.prototype.hasOwnProperty.call(n, "src")) return;
  let { type: i, lang: s } = e.attrMap;
  return !s && !i ? "babel" : kt(t, { language: s }) ?? On(i);
}
function sa(e, t) {
  if (!Lt(e, t)) return;
  let { attrMap: r } = e;
  if (Object.prototype.hasOwnProperty.call(r, "src")) return;
  let { type: n, lang: i } = r;
  return kt(t, { language: i }) ?? On(n);
}
function aa(e, t) {
  if (e.name === "style") {
    let { lang: r } = e.attrMap;
    return r ? kt(t, { language: r }) : "css";
  }
  if (e.name === "mj-style" && t.parser === "mjml") return "css";
}
function dr(e, t) {
  return ia(e, t) ?? aa(e, t) ?? sa(e, t);
}
function Ke(e) {
  return e === "block" || e === "list-item" || e.startsWith("table");
}
function oa(e) {
  return !Ke(e) && e !== "inline-block";
}
function la(e) {
  return !Ke(e) && e !== "inline-block";
}
function ca(e) {
  return !Ke(e);
}
function ua(e) {
  return !Ke(e);
}
function pa(e) {
  return !Ke(e) && e !== "inline-block";
}
function ce(e) {
  return Rn(e).startsWith("pre");
}
function ha(e, t) {
  let r = e;
  for (; r; ) {
    if (t(r)) return true;
    r = r.parent;
  }
  return false;
}
function Dn(e, t) {
  if (pe(e, t)) return "block";
  if (e.prev?.kind === "comment") {
    let n = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/u);
    if (n) return n[1];
  }
  let r = false;
  if (e.kind === "element" && e.namespace === "svg") if (ha(e, (n) => n.fullName === "svg:foreignObject")) r = true;
  else return e.name === "svg" ? "inline-block" : "block";
  switch (t.htmlWhitespaceSensitivity) {
    case "strict":
      return "inline";
    case "ignore":
      return "block";
    default:
      if (e.kind === "element" && (!e.namespace || r || le(e)) && Object.prototype.hasOwnProperty.call(ur, e.name)) return ur[e.name];
  }
  return En;
}
function Rn(e) {
  return e.kind === "element" && (!e.namespace || le(e)) && Object.prototype.hasOwnProperty.call(pr, e.name) ? pr[e.name] : Cn;
}
function gr(e) {
  return w(0, w(0, e, "&apos;", "'"), "&quot;", '"');
}
function b(e) {
  return gr(e.value);
}
var ma = /* @__PURE__ */ new Set(["template", "style", "script"]);
function Qe(e, t) {
  return pe(e, t) && !ma.has(e.fullName);
}
function pe(e, t) {
  return t.parser === "vue" && e.kind === "element" && e.parent.kind === "root" && e.fullName.toLowerCase() !== "html";
}
function Lt(e, t) {
  return pe(e, t) && (Qe(e, t) || e.attrMap.lang && e.attrMap.lang !== "html");
}
function In(e) {
  let t = e.fullName;
  return t.charAt(0) === "#" || t === "slot-scope" || t === "v-slot" || t.startsWith("v-slot:");
}
function Mn(e, t) {
  let r = e.parent;
  if (!pe(r, t)) return false;
  let n = r.fullName, i = e.fullName;
  return n === "script" && i === "setup" || n === "style" && i === "vars";
}
function Pt(e, t = e.value) {
  return e.parent.isWhitespaceSensitive ? e.parent.isIndentationSensitive ? L(t) : L(x.dedentString(hr(t)), v) : F(_, x.split(t));
}
function Ot(e, t) {
  return pe(e, t) && e.name === "script";
}
var Bn = /\{\{(.+?)\}\}/su;
var Fn = ({ node: { value: e } }) => Bn.test(e);
async function qn(e, t, r) {
  let n = b(r.node), i = [];
  for (let [s, a] of n.split(Bn).entries()) if (s % 2 === 0) i.push(L(a));
  else try {
    i.push(C(["{{", A([_, await y(a, e, { parser: "__ng_interpolation", __isInHtmlInterpolation: true })]), _, "}}"]));
  } catch {
    i.push("{{", L(a), "}}");
  }
  return i;
}
var _r = (e) => (t, r, n) => y(b(n.node), t, { parser: e }, U);
var fa = [{ test(e) {
  let t = e.node.fullName;
  return t.startsWith("(") && t.endsWith(")") || t.startsWith("on-");
}, print: _r("__ng_action") }, { test(e) {
  let t = e.node.fullName;
  return t.startsWith("[") && t.endsWith("]") || /^bind(?:on)?-/u.test(t) || /^ng-(?:if|show|hide|class|style)$/u.test(t);
}, print: _r("__ng_binding") }, { test: (e) => e.node.fullName.startsWith("*"), print: _r("__ng_directive") }, { test: (e) => /^i18n(?:-.+)?$/u.test(e.node.fullName), print: da }, { test: Fn, print: qn }].map(({ test: e, print: t }) => ({ test: (r, n) => n.parser === "angular" && e(r), print: t }));
function da(e, t, { node: r }) {
  let n = b(r);
  return j(wt(Pt(r, n.trim())), !n.includes("@@"));
}
var Hn = fa;
var Vn = ({ node: e }, t) => !t.parentParser && e.fullName === "class" && !e.value.includes("{{");
var Un = (e, t, r) => b(r.node).trim().split(/\s+/u).join(" ");
var Sr = ["onabort", "onafterprint", "onauxclick", "onbeforeinput", "onbeforematch", "onbeforeprint", "onbeforetoggle", "onbeforeunload", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncommand", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncopy", "oncuechange", "oncut", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformdata", "onhashchange", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onlanguagechange", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmessage", "onmessageerror", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onoffline", "ononline", "onpagehide", "onpagereveal", "onpageshow", "onpageswap", "onpaste", "onpause", "onplay", "onplaying", "onpopstate", "onprogress", "onratechange", "onrejectionhandled", "onreset", "onresize", "onscroll", "onscrollend", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onslotchange", "onstalled", "onstorage", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onunhandledrejection", "onunload", "onvolumechange", "onwaiting", "onwheel"];
var _a = new Set(Sr);
var Wn = ({ node: e }, t) => _a.has(e.fullName) && !t.parentParser && !e.value.includes("{{");
var Gn = (e, t, r) => y(b(r.node), e, { parser: "babel", __isHtmlInlineEventHandler: true }, () => false);
function Sa(e) {
  let t = [];
  for (let r of e.split(";")) {
    if (r = x.trim(r), !r) continue;
    let [n, ...i] = x.split(r);
    t.push({ name: n, value: i });
  }
  return t;
}
var $n = Sa;
var zn = ({ node: e }, t) => e.fullName === "allow" && !t.parentParser && e.parent.fullName === "iframe" && !e.value.includes("{{");
function Yn(e, t, r) {
  let { node: n } = r, i = $n(b(n));
  return i.length === 0 ? [""] : j(i.map(({ name: s, value: a }, o) => [[s, ...a].join(" "), o === i.length - 1 ? X(";") : [";", _]]));
}
function Xn(e) {
  return e === "	" || e === `
` || e === "\f" || e === "\r" || e === " ";
}
var Ea = /^[ \t\n\r\u000c]+/;
var Ca = /^[, \t\n\r\u000c]+/;
var va = /^[^ \t\n\r\u000c]+/;
var Ta = /[,]+$/;
var jn = /^\d+$/;
var ba = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
function wa(e) {
  let t = e.length, r, n, i, s, a, o = 0, c;
  function u(m) {
    let g, E = m.exec(e.substring(o));
    if (E) return [g] = E, o += g.length, g;
  }
  let p = [];
  for (; ; ) {
    if (u(Ca), o >= t) {
      if (p.length === 0) throw new Error("Must contain one or more image candidate strings.");
      return p;
    }
    c = o, r = u(va), n = [], r.slice(-1) === "," ? (r = r.replace(Ta, ""), S2()) : d();
  }
  function d() {
    for (u(Ea), i = "", s = "in descriptor"; ; ) {
      if (a = e.charAt(o), s === "in descriptor") if (Xn(a)) i && (n.push(i), i = "", s = "after descriptor");
      else if (a === ",") {
        o += 1, i && n.push(i), S2();
        return;
      } else if (a === "(") i += a, s = "in parens";
      else if (a === "") {
        i && n.push(i), S2();
        return;
      } else i += a;
      else if (s === "in parens") if (a === ")") i += a, s = "in descriptor";
      else if (a === "") {
        n.push(i), S2();
        return;
      } else i += a;
      else if (s === "after descriptor" && !Xn(a)) if (a === "") {
        S2();
        return;
      } else s = "in descriptor", o -= 1;
      o += 1;
    }
  }
  function S2() {
    let m = false, g, E, P2, $2, ae2 = {}, Z2, dt2, we2, We, tr2;
    for ($2 = 0; $2 < n.length; $2++) Z2 = n[$2], dt2 = Z2[Z2.length - 1], we2 = Z2.substring(0, Z2.length - 1), We = parseInt(we2, 10), tr2 = parseFloat(we2), jn.test(we2) && dt2 === "w" ? ((g || E) && (m = true), We === 0 ? m = true : g = We) : ba.test(we2) && dt2 === "x" ? ((g || E || P2) && (m = true), tr2 < 0 ? m = true : E = tr2) : jn.test(we2) && dt2 === "h" ? ((P2 || E) && (m = true), We === 0 ? m = true : P2 = We) : m = true;
    if (!m) ae2.source = { value: r, startOffset: c }, g && (ae2.width = { value: g }), E && (ae2.density = { value: E }), P2 && (ae2.height = { value: P2 }), p.push(ae2);
    else throw new Error(`Invalid srcset descriptor found in "${e}" at "${Z2}".`);
  }
}
var Kn = wa;
var Qn = (e) => e.node.fullName === "srcset" && (e.parent.fullName === "img" || e.parent.fullName === "source");
var Jn = { width: "w", height: "h", density: "x" };
var ka = Object.keys(Jn);
function Zn(e, t, r) {
  let n = b(r.node), i = Kn(n), s = ka.filter((m) => i.some((g) => Object.prototype.hasOwnProperty.call(g, m)));
  if (s.length > 1) throw new Error("Mixed descriptor in srcset is not supported");
  let [a] = s, o = Jn[a], c = i.map((m) => m.source.value), u = Math.max(...c.map((m) => m.length)), p = i.map((m) => m[a] ? String(m[a].value) : ""), d = p.map((m) => {
    let g = m.indexOf(".");
    return g === -1 ? m.length : g;
  }), S2 = Math.max(...d);
  return j(F([",", _], c.map((m, g) => {
    let E = [m], P2 = p[g];
    if (P2) {
      let $2 = u - m.length + 1, ae2 = S2 - d[g], Z2 = " ".repeat($2 + ae2);
      E.push(X(Z2, " "), P2 + o);
    }
    return E;
  })));
}
var ei = ({ node: e }, t) => e.fullName === "style" && !t.parentParser && !e.value.includes("{{");
var ti = async (e, t, r) => j(await e(b(r.node), { parser: "css", __isHTMLStyleAttribute: true }));
var Er = /* @__PURE__ */ new WeakMap();
function ya(e, t) {
  let { root: r } = e;
  return Er.has(r) || Er.set(r, r.children.some((n) => Ot(n, t) && ["ts", "typescript"].includes(n.attrMap.lang))), Er.get(r);
}
var W = ya;
function ri(e, t, r) {
  let n = b(r.node);
  return y(`type T<${n}> = any`, e, { parser: "babel-ts", __isEmbeddedTypescriptGenericParameters: true }, U);
}
function ni(e, t, r, n) {
  let i = b(r.node), s = W(r, n) ? "babel-ts" : "babel";
  return y(`function _(${i}) {}`, e, { parser: s, __isVueBindings: true });
}
async function ii(e, t, r, n) {
  let i = b(r.node), { left: s, operator: a, right: o } = Aa(i), c = W(r, n);
  return [C(await y(`function _(${s}) {}`, e, { parser: c ? "babel-ts" : "babel", __isVueForBindingLeft: true })), " ", a, " ", await y(o, e, { parser: c ? "__ts_expression" : "__js_expression" })];
}
function Aa(e) {
  let t = /(.*?)\s+(in|of)\s+(.*)/su, r = /,([^,\]}]*)(?:,([^,\]}]*))?$/u, n = /^\(|\)$/gu, i = e.match(t);
  if (!i) return;
  let s = { for: i[3].trim() };
  if (!s.for) return;
  let a = w(0, i[1].trim(), n, ""), o = a.match(r);
  o ? (s.alias = a.replace(r, ""), s.iterator1 = o[1].trim(), o[2] && (s.iterator2 = o[2].trim())) : s.alias = a;
  let c = [s.alias, s.iterator1, s.iterator2];
  if (!c.some((u, p) => !u && (p === 0 || c.slice(p + 1).some(Boolean)))) return { left: c.filter(Boolean).join(","), operator: i[2], right: s.for };
}
var xa = [{ test: (e) => e.node.fullName === "v-for", print: ii }, { test: (e, t) => e.node.fullName === "generic" && Ot(e.parent, t), print: ri }, { test: ({ node: e }, t) => In(e) || Mn(e, t), print: ni }, { test(e) {
  let t = e.node.fullName;
  return t.startsWith("@") || t.startsWith("v-on:");
}, print: Na }, { test(e) {
  let t = e.node.fullName;
  return t.startsWith(":") || t.startsWith(".") || t.startsWith("v-bind:");
}, print: La }, { test: (e) => e.node.fullName.startsWith("v-"), print: si }].map(({ test: e, print: t }) => ({ test: (r, n) => n.parser === "vue" && e(r, n), print: t }));
async function Na(e, t, r, n) {
  try {
    return await si(e, t, r, n);
  } catch (a) {
    if (a.cause?.code !== "BABEL_PARSER_SYNTAX_ERROR") throw a;
  }
  let i = b(r.node), s = W(r, n) ? "__vue_ts_event_binding" : "__vue_event_binding";
  return y(i, e, { parser: s }, U);
}
function La(e, t, r, n) {
  let i = b(r.node), s = W(r, n) ? "__vue_ts_expression" : "__vue_expression";
  return y(i, e, { parser: s }, U);
}
function si(e, t, r, n) {
  let i = b(r.node), s = W(r, n) ? "__ts_expression" : "__js_expression";
  return y(i, e, { parser: s }, U);
}
var ai = xa;
var Pa = [{ test: Qn, print: Zn }, { test: ei, print: ti }, { test: Wn, print: Gn }, { test: Vn, print: Un }, { test: zn, print: Yn }, ...ai, ...Hn].map(({ test: e, print: t }) => ({ test: e, print: Da(t) }));
function Oa(e, t) {
  let { node: r } = e, { value: n } = r;
  if (!n) return;
  let { valueSpan: i } = r;
  return !(i.end.offset - i.start.offset === n.length + 2) && (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(n) || t.parser === "lwc" && n.startsWith("{") && n.endsWith("}")) ? [r.rawName, "=", n] : Pa.find(({ test: a }) => a(e, t))?.print;
}
function Da(e) {
  return async (t, r, n, i) => {
    let s = await e(t, r, n, i);
    if (s) return s = ir(s, (a) => typeof a == "string" ? w(0, a, '"', "&quot;") : a), [n.node.rawName, '="', C(s), '"'];
  };
}
var oi = Oa;
var K = (e) => e.sourceSpan.start.offset;
var ee = (e) => e.sourceSpan.end.offset;
function Je(e, t) {
  return [e.isSelfClosing ? "" : Ra(e, t), he(e, t)];
}
function Ra(e, t) {
  return e.lastChild && de(e.lastChild) ? "" : [Ia(e, t), Dt(e, t)];
}
function he(e, t) {
  return (e.next ? G(e.next) : fe(e.parent)) ? "" : [me(e, t), H(e, t)];
}
function Ia(e, t) {
  return fe(e) ? me(e.lastChild, t) : "";
}
function H(e, t) {
  return de(e) ? Dt(e.parent, t) : Ze(e) ? Rt(e.next, t) : "";
}
function Dt(e, t) {
  if (ci(e, t)) return "";
  switch (e.kind) {
    case "ieConditionalComment":
      return "<!";
    case "element":
      if (e.hasHtmComponentClosingTag) return "<//";
    default:
      return `</${e.rawName}`;
  }
}
function me(e, t) {
  if (ci(e, t)) return "";
  switch (e.kind) {
    case "ieConditionalComment":
    case "ieConditionalEndComment":
      return "[endif]-->";
    case "ieConditionalStartComment":
      return "]><!-->";
    case "interpolation":
      return "}}";
    case "angularIcuExpression":
      return "}";
    case "element":
      if (e.isSelfClosing) return "/>";
    default:
      return ">";
  }
}
function ci(e, t) {
  return !e.isSelfClosing && !e.endSourceSpan && (ue(e) || At(e.parent, t));
}
function G(e) {
  return e.prev && e.prev.kind !== "docType" && e.kind !== "angularControlFlowBlock" && !O(e.prev) && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
}
function fe(e) {
  return e.lastChild?.isTrailingSpaceSensitive && !e.lastChild.hasTrailingSpaces && !O(Nt(e.lastChild)) && !ce(e);
}
function de(e) {
  return !e.next && !e.hasTrailingSpaces && e.isTrailingSpaceSensitive && O(Nt(e));
}
function Ze(e) {
  return e.next && !O(e.next) && O(e) && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces;
}
function Ma(e) {
  let t = e.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/su);
  return t ? t[1] ? t[1].split(/\s+/u) : true : false;
}
function et(e) {
  return !e.prev && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
}
function Ba(e, t, r) {
  let { node: n } = e;
  if (!De(n.attrs)) return n.isSelfClosing ? " " : "";
  let i = n.prev?.kind === "comment" && Ma(n.prev.value), s = typeof i == "boolean" ? () => i : Array.isArray(i) ? (d) => i.includes(d.rawName) : () => false, a = e.map(({ node: d }) => s(d) ? L(t.originalText.slice(K(d), ee(d))) : r(), "attrs"), o = n.kind === "element" && n.fullName === "script" && n.attrs.length === 1 && n.attrs[0].fullName === "src" && n.children.length === 0, u = t.singleAttributePerLine && n.attrs.length > 1 && !pe(n, t) ? v : _, p = [A([o ? " " : _, F(u, a)])];
  return n.firstChild && et(n.firstChild) || n.isSelfClosing && fe(n.parent) || o ? p.push(n.isSelfClosing ? " " : "") : p.push(t.bracketSameLine ? n.isSelfClosing ? " " : "" : n.isSelfClosing ? _ : k), p;
}
function Fa(e) {
  return e.firstChild && et(e.firstChild) ? "" : It(e);
}
function tt(e, t, r) {
  let { node: n } = e;
  return [ge(n, t), Ba(e, t, r), n.isSelfClosing ? "" : Fa(n)];
}
function ge(e, t) {
  return e.prev && Ze(e.prev) ? "" : [V(e, t), Rt(e, t)];
}
function V(e, t) {
  return et(e) ? It(e.parent) : G(e) ? me(e.prev, t) : "";
}
var li = "<!doctype";
function Rt(e, t) {
  switch (e.kind) {
    case "ieConditionalComment":
    case "ieConditionalStartComment":
      return `<!--[if ${e.condition}`;
    case "ieConditionalEndComment":
      return "<!--<!";
    case "interpolation":
      return "{{";
    case "docType": {
      if (e.value === "html") {
        let { filepath: n } = t;
        if (n && /\.html?$/u.test(n)) return li;
      }
      let r = K(e);
      return t.originalText.slice(r, r + li.length);
    }
    case "angularIcuExpression":
      return "{";
    case "element":
      if (e.condition) return `<!--[if ${e.condition}]><!--><${e.rawName}`;
    default:
      return `<${e.rawName}`;
  }
}
function It(e) {
  switch (e.kind) {
    case "ieConditionalComment":
      return "]>";
    case "element":
      if (e.condition) return "><!--<![endif]-->";
    default:
      return ">";
  }
}
function qa(e, t) {
  if (!e.endSourceSpan) return "";
  let r = e.startSourceSpan.end.offset;
  e.firstChild && et(e.firstChild) && (r -= It(e).length);
  let n = e.endSourceSpan.start.offset;
  return e.lastChild && de(e.lastChild) ? n += Dt(e, t).length : fe(e) && (n -= me(e.lastChild, t).length), t.originalText.slice(r, n);
}
var Mt = qa;
var Ha = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
function Va(e, t) {
  let { node: r } = e;
  switch (r.kind) {
    case "element":
      if (q(r, t) || r.kind === "interpolation") return;
      if (!r.isSelfClosing && Lt(r, t)) {
        let n = dr(r, t);
        return n ? async (i, s) => {
          let a = Mt(r, t), o = /^\s*$/u.test(a), c = "";
          return o || (c = await i(hr(a), { parser: n, __embeddedInHtml: true }), o = c === ""), [V(r, t), C(tt(e, t, s)), o ? "" : v, c, o ? "" : v, Je(r, t), H(r, t)];
        } : void 0;
      }
      break;
    case "text":
      if (q(r.parent, t)) {
        let n = dr(r.parent, t);
        if (n) return async (i) => {
          let s = n === "markdown" ? x.dedentString(r.value.replace(/^[^\S\n]*\n/u, "")) : r.value, a = { parser: n, __embeddedInHtml: true };
          if (t.parser === "html" && n === "babel") {
            let o = "script", { attrMap: c } = r.parent;
            c && (c.type === "module" || (c.type === "text/babel" || c.type === "text/jsx") && c["data-type"] === "module") && (o = "module"), a.__babelSourceType = o;
          }
          return [Y, V(r, t), await i(s, a), H(r, t)];
        };
      } else if (r.parent.kind === "interpolation") return async (n) => {
        let i = { __isInHtmlInterpolation: true, __embeddedInHtml: true };
        return t.parser === "angular" ? i.parser = "__ng_interpolation" : t.parser === "vue" ? i.parser = W(e, t) ? "__vue_ts_expression" : "__vue_expression" : i.parser = "__js_expression", [A([_, await n(r.value, i)]), r.parent.next && G(r.parent.next) ? " " : _];
      };
      break;
    case "attribute":
      return oi(e, t);
    case "angularControlFlowBlockParameters":
      return Ha.has(e.parent.name) ? hn : void 0;
    case "angularLetDeclarationInitializer":
      return (n) => y(r.value, n, { parser: "__ng_binding", __isInHtmlAttribute: false });
  }
}
var ui = Va;
var rt = null;
function nt(e) {
  if (rt !== null && typeof rt.property) {
    let t = rt;
    return rt = nt.prototype = null, t;
  }
  return rt = nt.prototype = e ?? /* @__PURE__ */ Object.create(null), new nt();
}
var Ua = 10;
for (let e = 0; e <= Ua; e++) nt();
function Cr(e) {
  return nt(e);
}
function Wa(e, t = "type") {
  Cr(e);
  function r(n) {
    let i = n[t], s = e[i];
    if (!Array.isArray(s)) throw Object.assign(new Error(`Missing visitor keys for '${i}'.`), { node: n });
    return s;
  }
  return r;
}
var pi = Wa;
var Ga = { root: ["children"], element: ["attrs", "children"], ieConditionalComment: ["children"], ieConditionalStartComment: [], ieConditionalEndComment: [], interpolation: ["children"], text: ["children"], docType: [], comment: [], attribute: [], cdata: [], angularControlFlowBlock: ["children", "parameters"], angularControlFlowBlockParameters: ["children"], angularControlFlowBlockParameter: [], angularLetDeclaration: ["init"], angularLetDeclarationInitializer: [], angularIcuExpression: ["cases"], angularIcuCase: ["expression"] };
var hi = Ga;
var $a = pi(hi, "kind");
var mi = $a;
var fi = "format";
var di = /^\s*<!--\s*@(?:noformat|noprettier)\s*-->/u;
var gi = /^\s*<!--\s*@(?:format|prettier)\s*-->/u;
var _i = (e) => gi.test(e);
var Si = (e) => di.test(e);
var Ei = (e) => `<!-- @${fi} -->

${e}`;
var Ci = /* @__PURE__ */ new Map([["if", /* @__PURE__ */ new Set(["else if", "else"])], ["else if", /* @__PURE__ */ new Set(["else if", "else"])], ["for", /* @__PURE__ */ new Set(["empty"])], ["defer", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["placeholder", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["error", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["loading", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])]]);
function vi(e) {
  let t = ee(e);
  return e.kind === "element" && !e.endSourceSpan && De(e.children) ? Math.max(t, vi(B(0, e.children, -1))) : t;
}
function it(e, t, r) {
  let n = e.node;
  if (ue(n)) {
    let i = vi(n);
    return [V(n, t), L(x.trimEnd(t.originalText.slice(K(n) + (n.prev && Ze(n.prev) ? Rt(n).length : 0), i - (n.next && G(n.next) ? me(n, t).length : 0)))), H(n, t)];
  }
  return r();
}
function Bt(e, t) {
  return O(e) && O(t) ? e.isTrailingSpaceSensitive ? e.hasTrailingSpaces ? xt(t) ? v : _ : "" : xt(t) ? v : k : Ze(e) && (ue(t) || t.firstChild || t.isSelfClosing || t.kind === "element" && t.attrs.length > 0) || e.kind === "element" && e.isSelfClosing && G(t) ? "" : !t.isLeadingSpaceSensitive || xt(t) || G(t) && e.lastChild && de(e.lastChild) && e.lastChild.lastChild && de(e.lastChild.lastChild) ? v : t.hasLeadingSpaces ? _ : k;
}
function Re(e, t, r) {
  let { node: n } = e;
  if (fr(n)) return [Y, ...e.map(() => {
    let s = e.node, a = s.prev ? Bt(s.prev, s) : "";
    return [a ? [a, je(s.prev) ? v : ""] : "", it(e, t, r)];
  }, "children")];
  let i = n.children.map(() => Symbol(""));
  return e.map(({ node: s, index: a }) => {
    if (O(s)) {
      if (s.prev && O(s.prev)) {
        let m = Bt(s.prev, s);
        if (m) return je(s.prev) ? [v, v, it(e, t, r)] : [m, it(e, t, r)];
      }
      return it(e, t, r);
    }
    let o = [], c = [], u = [], p = [], d = s.prev ? Bt(s.prev, s) : "", S2 = s.next ? Bt(s, s.next) : "";
    return d && (je(s.prev) ? o.push(v, v) : d === v ? o.push(v) : O(s.prev) ? c.push(d) : c.push(X("", k, { groupId: i[a - 1] }))), S2 && (je(s) ? O(s.next) && p.push(v, v) : S2 === v ? O(s.next) && p.push(v) : u.push(S2)), [...o, C([...c, C([it(e, t, r), ...u], { id: i[a] })]), ...p];
  }, "children");
}
function Ti(e, t, r) {
  let { node: n } = e, i = [];
  za(e) && i.push("} "), i.push("@", n.name), n.parameters && i.push(" (", C(r("parameters")), ")"), i.push(" {");
  let s = bi(n);
  return n.children.length > 0 ? (n.firstChild.hasLeadingSpaces = true, n.lastChild.hasTrailingSpaces = true, i.push(A([v, Re(e, t, r)])), s && i.push(v, "}")) : s && i.push("}"), C(i, { shouldBreak: true });
}
function bi(e) {
  return !(e.next?.kind === "angularControlFlowBlock" && Ci.get(e.name)?.has(e.next.name));
}
function za(e) {
  let { previous: t } = e;
  return t?.kind === "angularControlFlowBlock" && !ue(t) && !bi(t);
}
function wi(e, t, r) {
  return [A([k, F([";", _], e.map(r, "children"))]), k];
}
function ki(e, t, r) {
  let { node: n } = e;
  return [ge(n, t), C([n.switchValue.trim(), ", ", n.type, n.cases.length > 0 ? [",", A([_, F(_, e.map(r, "cases"))])] : "", k]), he(n, t)];
}
function yi(e, t, r) {
  let { node: n } = e;
  return [n.value, " {", C([A([k, e.map(({ node: i, isLast: s }) => {
    let a = [r()];
    return i.kind === "text" && (i.hasLeadingSpaces && a.unshift(_), i.hasTrailingSpaces && !s && a.push(_)), a;
  }, "expression")]), k]), "}"];
}
function Ai(e, t, r) {
  let { node: n } = e;
  if (At(n, t)) return [V(n, t), C(tt(e, t, r)), L(Mt(n, t)), ...Je(n, t), H(n, t)];
  let i = n.children.length === 1 && (n.firstChild.kind === "interpolation" || n.firstChild.kind === "angularIcuExpression") && n.firstChild.isLeadingSpaceSensitive && !n.firstChild.hasLeadingSpaces && n.lastChild.isTrailingSpaceSensitive && !n.lastChild.hasTrailingSpaces, s = Symbol("element-attr-group-id"), a = (p) => C([C(tt(e, t, r), { id: s }), p, Je(n, t)]), o = (p) => i ? an(p, { groupId: s }) : (q(n, t) || Qe(n, t)) && n.parent.kind === "root" && t.parser === "vue" && !t.vueIndentScriptAndStyle ? p : A(p), c = () => i ? X(k, "", { groupId: s }) : n.firstChild.hasLeadingSpaces && n.firstChild.isLeadingSpaceSensitive ? _ : n.firstChild.kind === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive ? sn(k) : k, u = () => (n.next ? G(n.next) : fe(n.parent)) ? n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? " " : "" : i ? X(k, "", { groupId: s }) : n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? _ : (n.lastChild.kind === "comment" || n.lastChild.kind === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive) && new RegExp(`\\n[\\t ]{${t.tabWidth * (e.ancestors.length - 1)}}$`, "u").test(n.lastChild.value) ? "" : k;
  return n.children.length === 0 ? a(n.hasDanglingSpaces && n.isDanglingSpaceSensitive ? _ : "") : a([An(n) ? Y : "", o([c(), Re(e, t, r)]), u()]);
}
var R = (function(e) {
  return e[e.RAW_TEXT = 0] = "RAW_TEXT", e[e.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", e[e.PARSABLE_DATA = 2] = "PARSABLE_DATA", e;
})({});
function st(e, t = true) {
  if (e[0] != ":") return [null, e];
  let r = e.indexOf(":", 1);
  if (r === -1) {
    if (t) throw new Error(`Unsupported format "${e}" expecting ":namespace:name"`);
    return [null, e];
  }
  return [e.slice(1, r), e.slice(r + 1)];
}
function vr(e) {
  return st(e)[1] === "ng-container";
}
function Tr(e) {
  return st(e)[1] === "ng-content";
}
function Ie(e) {
  return e === null ? null : st(e)[0];
}
function _e(e, t) {
  return e ? `:${e}:${t}` : t;
}
var br = { name: "custom-elements" };
var wr = { name: "no-errors-schema" };
var Se = (function(e) {
  return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e;
})({});
var Ya = /-+([a-z0-9])/g;
function xi(e) {
  return e.replace(Ya, (...t) => t[1].toUpperCase());
}
var qt;
function kr() {
  return qt || (qt = {}, Ft(Se.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]), Ft(Se.STYLE, ["*|style"]), Ft(Se.URL, ["*|formAction", "area|href", "area|ping", "audio|src", "a|href", "a|ping", "blockquote|cite", "body|background", "del|cite", "form|action", "img|src", "input|src", "ins|cite", "q|cite", "source|src", "track|src", "video|poster", "video|src"]), Ft(Se.RESOURCE_URL, ["applet|code", "applet|codebase", "base|href", "embed|src", "frame|src", "head|profile", "html|manifest", "iframe|src", "link|href", "media|src", "object|codebase", "object|data", "script|src"])), qt;
}
function Ft(e, t) {
  for (let r of t) qt[r.toLowerCase()] = e;
}
var Ni = class {
};
var Xa = "boolean";
var ja = "number";
var Ka = "string";
var Qa = "object";
var Ja = ["[Element]|textContent,%ariaActiveDescendantElement,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColIndexText,%ariaColSpan,%ariaControlsElements,%ariaCurrent,%ariaDescribedByElements,%ariaDescription,%ariaDetailsElements,%ariaDisabled,%ariaErrorMessageElements,%ariaExpanded,%ariaFlowToElements,%ariaHasPopup,%ariaHidden,%ariaInvalid,%ariaKeyShortcuts,%ariaLabel,%ariaLabelledByElements,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaOwnsElements,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowIndexText,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored", "[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,search,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume", ":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":svg:graphics^:svg:|", ":svg:animation^:svg:|*begin,*end,*repeat", ":svg:geometry^:svg:|", ":svg:componentTransferFunction^:svg:|", ":svg:gradient^:svg:|", ":svg:textContent^:svg:graphics|", ":svg:textPositioning^:svg:textContent|", "a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username", "area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username", "audio^media|", "br^[HTMLElement]|clear", "base^[HTMLElement]|href,target", "body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink", "button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value", "canvas^[HTMLElement]|#height,#width", "content^[HTMLElement]|select", "dl^[HTMLElement]|!compact", "data^[HTMLElement]|value", "datalist^[HTMLElement]|", "details^[HTMLElement]|!open", "dialog^[HTMLElement]|!open,returnValue", "dir^[HTMLElement]|!compact", "div^[HTMLElement]|align", "embed^[HTMLElement]|align,height,name,src,type,width", "fieldset^[HTMLElement]|!disabled,name", "font^[HTMLElement]|color,face,size", "form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target", "frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src", "frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows", "hr^[HTMLElement]|align,color,!noShade,size,width", "head^[HTMLElement]|", "h1,h2,h3,h4,h5,h6^[HTMLElement]|align", "html^[HTMLElement]|version", "iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width", "img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width", "input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width", "li^[HTMLElement]|type,#value", "label^[HTMLElement]|htmlFor", "legend^[HTMLElement]|align", "link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type", "map^[HTMLElement]|name", "marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width", "menu^[HTMLElement]|!compact", "meta^[HTMLElement]|content,httpEquiv,media,name,scheme", "meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value", "ins,del^[HTMLElement]|cite,dateTime", "ol^[HTMLElement]|!compact,!reversed,#start,type", "object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width", "optgroup^[HTMLElement]|!disabled,label", "option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value", "output^[HTMLElement]|defaultValue,%htmlFor,name,value", "p^[HTMLElement]|align", "param^[HTMLElement]|name,type,value,valueType", "picture^[HTMLElement]|", "pre^[HTMLElement]|#width", "progress^[HTMLElement]|#max,#value", "q,blockquote,cite^[HTMLElement]|", "script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type", "select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value", "selectedcontent^[HTMLElement]|", "slot^[HTMLElement]|name", "source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width", "span^[HTMLElement]|", "style^[HTMLElement]|!disabled,media,type", "search^[HTMLELement]|", "caption^[HTMLElement]|align", "th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width", "col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width", "table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width", "tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign", "tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign", "template^[HTMLElement]|", "textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap", "time^[HTMLElement]|dateTime", "title^[HTMLElement]|text", "track^[HTMLElement]|!default,kind,label,src,srclang", "ul^[HTMLElement]|!compact,type", "unknown^[HTMLElement]|", "video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width", ":svg:a^:svg:graphics|", ":svg:animate^:svg:animation|", ":svg:animateMotion^:svg:animation|", ":svg:animateTransform^:svg:animation|", ":svg:circle^:svg:geometry|", ":svg:clipPath^:svg:graphics|", ":svg:defs^:svg:graphics|", ":svg:desc^:svg:|", ":svg:discard^:svg:|", ":svg:ellipse^:svg:geometry|", ":svg:feBlend^:svg:|", ":svg:feColorMatrix^:svg:|", ":svg:feComponentTransfer^:svg:|", ":svg:feComposite^:svg:|", ":svg:feConvolveMatrix^:svg:|", ":svg:feDiffuseLighting^:svg:|", ":svg:feDisplacementMap^:svg:|", ":svg:feDistantLight^:svg:|", ":svg:feDropShadow^:svg:|", ":svg:feFlood^:svg:|", ":svg:feFuncA^:svg:componentTransferFunction|", ":svg:feFuncB^:svg:componentTransferFunction|", ":svg:feFuncG^:svg:componentTransferFunction|", ":svg:feFuncR^:svg:componentTransferFunction|", ":svg:feGaussianBlur^:svg:|", ":svg:feImage^:svg:|", ":svg:feMerge^:svg:|", ":svg:feMergeNode^:svg:|", ":svg:feMorphology^:svg:|", ":svg:feOffset^:svg:|", ":svg:fePointLight^:svg:|", ":svg:feSpecularLighting^:svg:|", ":svg:feSpotLight^:svg:|", ":svg:feTile^:svg:|", ":svg:feTurbulence^:svg:|", ":svg:filter^:svg:|", ":svg:foreignObject^:svg:graphics|", ":svg:g^:svg:graphics|", ":svg:image^:svg:graphics|decoding", ":svg:line^:svg:geometry|", ":svg:linearGradient^:svg:gradient|", ":svg:mpath^:svg:|", ":svg:marker^:svg:|", ":svg:mask^:svg:|", ":svg:metadata^:svg:|", ":svg:path^:svg:geometry|", ":svg:pattern^:svg:|", ":svg:polygon^:svg:geometry|", ":svg:polyline^:svg:geometry|", ":svg:radialGradient^:svg:gradient|", ":svg:rect^:svg:geometry|", ":svg:svg^:svg:graphics|#currentScale,#zoomAndPan", ":svg:script^:svg:|type", ":svg:set^:svg:animation|", ":svg:stop^:svg:|", ":svg:style^:svg:|!disabled,media,title,type", ":svg:switch^:svg:graphics|", ":svg:symbol^:svg:|", ":svg:tspan^:svg:textPositioning|", ":svg:text^:svg:textPositioning|", ":svg:textPath^:svg:textContent|", ":svg:title^:svg:|", ":svg:use^:svg:graphics|", ":svg:view^:svg:|#zoomAndPan", "data^[HTMLElement]|value", "keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name", "menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default", "summary^[HTMLElement]|", "time^[HTMLElement]|dateTime", ":svg:cursor^:svg:|", ":math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":math:math^:math:|", ":math:maction^:math:|", ":math:menclose^:math:|", ":math:merror^:math:|", ":math:mfenced^:math:|", ":math:mfrac^:math:|", ":math:mi^:math:|", ":math:mmultiscripts^:math:|", ":math:mn^:math:|", ":math:mo^:math:|", ":math:mover^:math:|", ":math:mpadded^:math:|", ":math:mphantom^:math:|", ":math:mroot^:math:|", ":math:mrow^:math:|", ":math:ms^:math:|", ":math:mspace^:math:|", ":math:msqrt^:math:|", ":math:mstyle^:math:|", ":math:msub^:math:|", ":math:msubsup^:math:|", ":math:msup^:math:|", ":math:mtable^:math:|", ":math:mtd^:math:|", ":math:mtext^:math:|", ":math:mtr^:math:|", ":math:munder^:math:|", ":math:munderover^:math:|", ":math:semantics^:math:|"];
var Li = new Map(Object.entries({ class: "className", for: "htmlFor", formaction: "formAction", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex", "aria-activedescendant": "ariaActiveDescendantElement", "aria-atomic": "ariaAtomic", "aria-autocomplete": "ariaAutoComplete", "aria-busy": "ariaBusy", "aria-checked": "ariaChecked", "aria-colcount": "ariaColCount", "aria-colindex": "ariaColIndex", "aria-colindextext": "ariaColIndexText", "aria-colspan": "ariaColSpan", "aria-controls": "ariaControlsElements", "aria-current": "ariaCurrent", "aria-describedby": "ariaDescribedByElements", "aria-description": "ariaDescription", "aria-details": "ariaDetailsElements", "aria-disabled": "ariaDisabled", "aria-errormessage": "ariaErrorMessageElements", "aria-expanded": "ariaExpanded", "aria-flowto": "ariaFlowToElements", "aria-haspopup": "ariaHasPopup", "aria-hidden": "ariaHidden", "aria-invalid": "ariaInvalid", "aria-keyshortcuts": "ariaKeyShortcuts", "aria-label": "ariaLabel", "aria-labelledby": "ariaLabelledByElements", "aria-level": "ariaLevel", "aria-live": "ariaLive", "aria-modal": "ariaModal", "aria-multiline": "ariaMultiLine", "aria-multiselectable": "ariaMultiSelectable", "aria-orientation": "ariaOrientation", "aria-owns": "ariaOwnsElements", "aria-placeholder": "ariaPlaceholder", "aria-posinset": "ariaPosInSet", "aria-pressed": "ariaPressed", "aria-readonly": "ariaReadOnly", "aria-required": "ariaRequired", "aria-roledescription": "ariaRoleDescription", "aria-rowcount": "ariaRowCount", "aria-rowindex": "ariaRowIndex", "aria-rowindextext": "ariaRowIndexText", "aria-rowspan": "ariaRowSpan", "aria-selected": "ariaSelected", "aria-setsize": "ariaSetSize", "aria-sort": "ariaSort", "aria-valuemax": "ariaValueMax", "aria-valuemin": "ariaValueMin", "aria-valuenow": "ariaValueNow", "aria-valuetext": "ariaValueText" }));
var Za = Array.from(Li).reduce((e, [t, r]) => (e.set(t, r), e), /* @__PURE__ */ new Map());
var Pi = class extends Ni {
  constructor() {
    super(), this._schema = /* @__PURE__ */ new Map(), this._eventSchema = /* @__PURE__ */ new Map(), Ja.forEach((e) => {
      let t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), [n, i] = e.split("|"), s = i.split(","), [a, o] = n.split("^");
      a.split(",").forEach((u) => {
        this._schema.set(u.toLowerCase(), t), this._eventSchema.set(u.toLowerCase(), r);
      });
      let c = o && this._schema.get(o.toLowerCase());
      if (c) {
        for (let [u, p] of c) t.set(u, p);
        for (let u of this._eventSchema.get(o.toLowerCase())) r.add(u);
      }
      s.forEach((u) => {
        if (u.length > 0) switch (u[0]) {
          case "*":
            r.add(u.substring(1));
            break;
          case "!":
            t.set(u.substring(1), Xa);
            break;
          case "#":
            t.set(u.substring(1), ja);
            break;
          case "%":
            t.set(u.substring(1), Qa);
            break;
          default:
            t.set(u, Ka);
        }
      });
    });
  }
  hasProperty(e, t, r) {
    if (r.some((n) => n.name === wr.name)) return true;
    if (e.indexOf("-") > -1) {
      if (vr(e) || Tr(e)) return false;
      if (r.some((n) => n.name === br.name)) return true;
    }
    return (this._schema.get(e.toLowerCase()) || this._schema.get("unknown")).has(t);
  }
  hasElement(e, t) {
    return t.some((r) => r.name === wr.name) || e.indexOf("-") > -1 && (vr(e) || Tr(e) || t.some((r) => r.name === br.name)) ? true : this._schema.has(e.toLowerCase());
  }
  securityContext(e, t, r) {
    r && (t = this.getMappedPropName(t)), e = e.toLowerCase(), t = t.toLowerCase();
    let n = kr()[e + "|" + t];
    return n || (n = kr()["*|" + t], n || Se.NONE);
  }
  getMappedPropName(e) {
    return Li.get(e) ?? e;
  }
  getDefaultComponentElementName() {
    return "ng-component";
  }
  validateProperty(e) {
    return e.toLowerCase().startsWith("on") ? { error: true, msg: `Binding to event property '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...
If '${e}' is a directive input, make sure the directive is imported by the current module.` } : { error: false };
  }
  validateAttribute(e) {
    return e.toLowerCase().startsWith("on") ? { error: true, msg: `Binding to event attribute '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...` } : { error: false };
  }
  allKnownElementNames() {
    return Array.from(this._schema.keys());
  }
  allKnownAttributesOfElement(e) {
    let t = this._schema.get(e.toLowerCase()) || this._schema.get("unknown");
    return Array.from(t.keys()).map((r) => Za.get(r) ?? r);
  }
  allKnownEventsOfElement(e) {
    return Array.from(this._eventSchema.get(e.toLowerCase()) ?? []);
  }
  normalizeAnimationStyleProperty(e) {
    return xi(e);
  }
  normalizeAnimationStyleValue(e, t, r) {
    let n = "", i = r.toString().trim(), s = null;
    if (eo(e) && r !== 0 && r !== "0") if (typeof r == "number") n = "px";
    else {
      let a = r.match(/^[+-]?[\d\.]+([a-z]*)$/);
      a && a[1].length == 0 && (s = `Please provide a CSS unit value for ${t}:${r}`);
    }
    return { error: s, value: i + n };
  }
};
function eo(e) {
  switch (e) {
    case "width":
    case "height":
    case "minWidth":
    case "minHeight":
    case "maxWidth":
    case "maxHeight":
    case "left":
    case "top":
    case "bottom":
    case "right":
    case "fontSize":
    case "outlineWidth":
    case "outlineOffset":
    case "paddingTop":
    case "paddingLeft":
    case "paddingBottom":
    case "paddingRight":
    case "marginTop":
    case "marginLeft":
    case "marginBottom":
    case "marginRight":
    case "borderRadius":
    case "borderWidth":
    case "borderTopWidth":
    case "borderLeftWidth":
    case "borderRightWidth":
    case "borderBottomWidth":
    case "textIndent":
      return true;
    default:
      return false;
  }
}
var f = class {
  constructor({ closedByChildren: e, implicitNamespacePrefix: t, contentType: r = R.PARSABLE_DATA, closedByParent: n = false, isVoid: i = false, ignoreFirstLf: s = false, preventNamespaceInheritance: a = false, canSelfClose: o = false } = {}) {
    this.closedByChildren = {}, this.closedByParent = false, e && e.length > 0 && e.forEach((c) => this.closedByChildren[c] = true), this.isVoid = i, this.closedByParent = n || i, this.implicitNamespacePrefix = t || null, this.contentType = r, this.ignoreFirstLf = s, this.preventNamespaceInheritance = a, this.canSelfClose = o ?? i;
  }
  isClosedByChild(e) {
    return this.isVoid || e.toLowerCase() in this.closedByChildren;
  }
  getContentType(e) {
    return typeof this.contentType == "object" ? (e === void 0 ? void 0 : this.contentType[e]) ?? this.contentType.default : this.contentType;
  }
};
var Oi;
var at;
function Me(e) {
  return at || (Oi = new f({ canSelfClose: true }), at = Object.assign(/* @__PURE__ */ Object.create(null), { base: new f({ isVoid: true }), meta: new f({ isVoid: true }), area: new f({ isVoid: true }), embed: new f({ isVoid: true }), link: new f({ isVoid: true }), img: new f({ isVoid: true }), input: new f({ isVoid: true }), param: new f({ isVoid: true }), hr: new f({ isVoid: true }), br: new f({ isVoid: true }), source: new f({ isVoid: true }), track: new f({ isVoid: true }), wbr: new f({ isVoid: true }), p: new f({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: true }), thead: new f({ closedByChildren: ["tbody", "tfoot"] }), tbody: new f({ closedByChildren: ["tbody", "tfoot"], closedByParent: true }), tfoot: new f({ closedByChildren: ["tbody"], closedByParent: true }), tr: new f({ closedByChildren: ["tr"], closedByParent: true }), td: new f({ closedByChildren: ["td", "th"], closedByParent: true }), th: new f({ closedByChildren: ["td", "th"], closedByParent: true }), col: new f({ isVoid: true }), svg: new f({ implicitNamespacePrefix: "svg" }), foreignObject: new f({ implicitNamespacePrefix: "svg", preventNamespaceInheritance: true }), math: new f({ implicitNamespacePrefix: "math" }), li: new f({ closedByChildren: ["li"], closedByParent: true }), dt: new f({ closedByChildren: ["dt", "dd"] }), dd: new f({ closedByChildren: ["dt", "dd"], closedByParent: true }), rb: new f({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rt: new f({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rtc: new f({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: true }), rp: new f({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), optgroup: new f({ closedByChildren: ["optgroup"], closedByParent: true }), option: new f({ closedByChildren: ["option", "optgroup"], closedByParent: true }), pre: new f({ ignoreFirstLf: true }), listing: new f({ ignoreFirstLf: true }), style: new f({ contentType: R.RAW_TEXT }), script: new f({ contentType: R.RAW_TEXT }), title: new f({ contentType: { default: R.ESCAPABLE_RAW_TEXT, svg: R.PARSABLE_DATA } }), textarea: new f({ contentType: R.ESCAPABLE_RAW_TEXT, ignoreFirstLf: true }) }), new Pi().allKnownElementNames().forEach((t) => {
    !at[t] && Ie(t) === null && (at[t] = new f({ canSelfClose: false }));
  })), at[e] ?? Oi;
}
function ot(e) {
  return e >= 9 && e <= 32 || e == 160;
}
function lt(e) {
  return 48 <= e && e <= 57;
}
function Be(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Di(e) {
  return e >= 97 && e <= 102 || e >= 65 && e <= 70 || lt(e);
}
function ct(e) {
  return e === 10 || e === 13;
}
function yr(e) {
  return 48 <= e && e <= 55;
}
function Ht(e) {
  return e === 39 || e === 34 || e === 96;
}
var Fe = class Ii {
  constructor(t, r, n, i) {
    this.file = t, this.offset = r, this.line = n, this.col = i;
  }
  toString() {
    return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
  }
  moveBy(t) {
    let r = this.file.content, n = r.length, i = this.offset, s = this.line, a = this.col;
    for (; i > 0 && t < 0; ) if (i--, t++, r.charCodeAt(i) == 10) {
      s--;
      let o = r.substring(0, i - 1).lastIndexOf(String.fromCharCode(10));
      a = o > 0 ? i - o : i;
    } else a--;
    for (; i < n && t > 0; ) {
      let o = r.charCodeAt(i);
      i++, t--, o == 10 ? (s++, a = 0) : a++;
    }
    return new Ii(this.file, i, s, a);
  }
  getContext(t, r) {
    let n = this.file.content, i = this.offset;
    if (i != null) {
      i > n.length - 1 && (i = n.length - 1);
      let s = i, a = 0, o = 0;
      for (; a < t && i > 0 && (i--, a++, !(n[i] == `
` && ++o == r)); ) ;
      for (a = 0, o = 0; a < t && s < n.length - 1 && (s++, a++, !(n[s] == `
` && ++o == r)); ) ;
      return { before: n.substring(i, this.offset), after: n.substring(this.offset, s + 1) };
    }
    return null;
  }
};
var pt = class {
  constructor(e, t) {
    this.content = e, this.url = t;
  }
};
var h2 = class {
  constructor(e, t, r = e, n = null) {
    this.start = e, this.end = t, this.fullStart = r, this.details = n;
  }
  toString() {
    return this.start.file.content.substring(this.start.offset, this.end.offset);
  }
};
var Ri = (function(e) {
  return e[e.WARNING = 0] = "WARNING", e[e.ERROR = 1] = "ERROR", e;
})({});
var te = class extends Error {
  constructor(e, t, r = Ri.ERROR, n) {
    super(t), this.span = e, this.msg = t, this.level = r, this.relatedError = n, Object.setPrototypeOf(this, new.target.prototype);
  }
  contextualMessage() {
    let e = this.span.start.getContext(100, 3);
    return e ? `${this.msg} ("${e.before}[${Ri[this.level]} ->]${e.after}")` : this.msg;
  }
  toString() {
    let e = this.span.details ? `, ${this.span.details}` : "";
    return `${this.contextualMessage()}: ${this.span.start}${e}`;
  }
};
var Ee = class {
  constructor(e, t) {
    this.sourceSpan = e, this.i18n = t;
  }
};
var Mi = class extends Ee {
  constructor(e, t, r, n) {
    super(t, n), this.value = e, this.tokens = r, this.kind = "text";
  }
  visit(e, t) {
    return e.visitText(this, t);
  }
};
var Bi = class extends Ee {
  constructor(e, t, r, n) {
    super(t, n), this.value = e, this.tokens = r, this.kind = "cdata";
  }
  visit(e, t) {
    return e.visitCdata(this, t);
  }
};
var Fi = class extends Ee {
  constructor(e, t, r, n, i, s) {
    super(n, s), this.switchValue = e, this.type = t, this.cases = r, this.switchValueSourceSpan = i, this.kind = "expansion";
  }
  visit(e, t) {
    return e.visitExpansion(this, t);
  }
};
var qi = class {
  constructor(e, t, r, n, i) {
    this.value = e, this.expression = t, this.sourceSpan = r, this.valueSourceSpan = n, this.expSourceSpan = i, this.kind = "expansionCase";
  }
  visit(e, t) {
    return e.visitExpansionCase(this, t);
  }
};
var Hi = class extends Ee {
  constructor(e, t, r, n, i, s, a) {
    super(r, a), this.name = e, this.value = t, this.keySpan = n, this.valueSpan = i, this.valueTokens = s, this.kind = "attribute";
  }
  visit(e, t) {
    return e.visitAttribute(this, t);
  }
  get nameSpan() {
    return this.keySpan;
  }
};
var re = class extends Ee {
  constructor(e, t, r, n, i, s, a, o = null, c = null, u, p) {
    super(s, p), this.name = e, this.attrs = t, this.directives = r, this.children = n, this.isSelfClosing = i, this.startSourceSpan = a, this.endSourceSpan = o, this.nameSpan = c, this.isVoid = u, this.kind = "element";
  }
  visit(e, t) {
    return e.visitElement(this, t);
  }
};
var Vi = class {
  constructor(e, t) {
    this.value = e, this.sourceSpan = t, this.kind = "comment";
  }
  visit(e, t) {
    return e.visitComment(this, t);
  }
};
var Ui = class {
  constructor(e, t) {
    this.value = e, this.sourceSpan = t, this.kind = "docType";
  }
  visit(e, t) {
    return e.visitDocType(this, t);
  }
};
var Ce = class extends Ee {
  constructor(e, t, r, n, i, s, a = null, o) {
    super(n, o), this.name = e, this.parameters = t, this.children = r, this.nameSpan = i, this.startSourceSpan = s, this.endSourceSpan = a, this.kind = "block";
  }
  visit(e, t) {
    return e.visitBlock(this, t);
  }
};
var Q = class extends Ee {
  constructor(e, t, r, n, i, s, a, o, c, u = null, p) {
    super(o, p), this.componentName = e, this.tagName = t, this.fullName = r, this.attrs = n, this.directives = i, this.children = s, this.isSelfClosing = a, this.startSourceSpan = c, this.endSourceSpan = u, this.kind = "component";
  }
  visit(e, t) {
    return e.visitComponent(this, t);
  }
};
var Wi = class {
  constructor(e, t, r, n, i = null) {
    this.name = e, this.attrs = t, this.sourceSpan = r, this.startSourceSpan = n, this.endSourceSpan = i, this.kind = "directive";
  }
  visit(e, t) {
    return e.visitDirective(this, t);
  }
};
var Ar = class {
  constructor(e, t) {
    this.expression = e, this.sourceSpan = t, this.kind = "blockParameter", this.startSourceSpan = null, this.endSourceSpan = null;
  }
  visit(e, t) {
    return e.visitBlockParameter(this, t);
  }
};
var xr = class {
  constructor(e, t, r, n, i) {
    this.name = e, this.value = t, this.sourceSpan = r, this.nameSpan = n, this.valueSpan = i, this.kind = "letDeclaration", this.startSourceSpan = null, this.endSourceSpan = null;
  }
  visit(e, t) {
    return e.visitLetDeclaration(this, t);
  }
};
function Vt(e, t, r = null) {
  let n = [], i = e.visit ? (s) => e.visit(s, r) || s.visit(e, r) : (s) => s.visit(e, r);
  return t.forEach((s) => {
    let a = i(s);
    a && n.push(a);
  }), n;
}
var Nr = class {
  constructor() {
  }
  visitElement(e, t) {
    this.visitChildren(t, (r) => {
      r(e.attrs), r(e.directives), r(e.children);
    });
  }
  visitAttribute(e, t) {
  }
  visitText(e, t) {
  }
  visitCdata(e, t) {
  }
  visitComment(e, t) {
  }
  visitDocType(e, t) {
  }
  visitExpansion(e, t) {
    return this.visitChildren(t, (r) => {
      r(e.cases);
    });
  }
  visitExpansionCase(e, t) {
  }
  visitBlock(e, t) {
    this.visitChildren(t, (r) => {
      r(e.parameters), r(e.children);
    });
  }
  visitBlockParameter(e, t) {
  }
  visitLetDeclaration(e, t) {
  }
  visitComponent(e, t) {
    this.visitChildren(t, (r) => {
      r(e.attrs), r(e.children);
    });
  }
  visitDirective(e, t) {
    this.visitChildren(t, (r) => {
      r(e.attrs);
    });
  }
  visitChildren(e, t) {
    let r = [], n = this;
    function i(s) {
      s && r.push(Vt(n, s, e));
    }
    return t(i), Array.prototype.concat.apply([], r);
  }
};
var ve = { AElig: "\xC6", AMP: "&", amp: "&", Aacute: "\xC1", Abreve: "\u0102", Acirc: "\xC2", Acy: "\u0410", Afr: "\u{1D504}", Agrave: "\xC0", Alpha: "\u0391", Amacr: "\u0100", And: "\u2A53", Aogon: "\u0104", Aopf: "\u{1D538}", ApplyFunction: "\u2061", af: "\u2061", Aring: "\xC5", angst: "\xC5", Ascr: "\u{1D49C}", Assign: "\u2254", colone: "\u2254", coloneq: "\u2254", Atilde: "\xC3", Auml: "\xC4", Backslash: "\u2216", setminus: "\u2216", setmn: "\u2216", smallsetminus: "\u2216", ssetmn: "\u2216", Barv: "\u2AE7", Barwed: "\u2306", doublebarwedge: "\u2306", Bcy: "\u0411", Because: "\u2235", becaus: "\u2235", because: "\u2235", Bernoullis: "\u212C", Bscr: "\u212C", bernou: "\u212C", Beta: "\u0392", Bfr: "\u{1D505}", Bopf: "\u{1D539}", Breve: "\u02D8", breve: "\u02D8", Bumpeq: "\u224E", HumpDownHump: "\u224E", bump: "\u224E", CHcy: "\u0427", COPY: "\xA9", copy: "\xA9", Cacute: "\u0106", Cap: "\u22D2", CapitalDifferentialD: "\u2145", DD: "\u2145", Cayleys: "\u212D", Cfr: "\u212D", Ccaron: "\u010C", Ccedil: "\xC7", Ccirc: "\u0108", Cconint: "\u2230", Cdot: "\u010A", Cedilla: "\xB8", cedil: "\xB8", CenterDot: "\xB7", centerdot: "\xB7", middot: "\xB7", Chi: "\u03A7", CircleDot: "\u2299", odot: "\u2299", CircleMinus: "\u2296", ominus: "\u2296", CirclePlus: "\u2295", oplus: "\u2295", CircleTimes: "\u2297", otimes: "\u2297", ClockwiseContourIntegral: "\u2232", cwconint: "\u2232", CloseCurlyDoubleQuote: "\u201D", rdquo: "\u201D", rdquor: "\u201D", CloseCurlyQuote: "\u2019", rsquo: "\u2019", rsquor: "\u2019", Colon: "\u2237", Proportion: "\u2237", Colone: "\u2A74", Congruent: "\u2261", equiv: "\u2261", Conint: "\u222F", DoubleContourIntegral: "\u222F", ContourIntegral: "\u222E", conint: "\u222E", oint: "\u222E", Copf: "\u2102", complexes: "\u2102", Coproduct: "\u2210", coprod: "\u2210", CounterClockwiseContourIntegral: "\u2233", awconint: "\u2233", Cross: "\u2A2F", Cscr: "\u{1D49E}", Cup: "\u22D3", CupCap: "\u224D", asympeq: "\u224D", DDotrahd: "\u2911", DJcy: "\u0402", DScy: "\u0405", DZcy: "\u040F", Dagger: "\u2021", ddagger: "\u2021", Darr: "\u21A1", Dashv: "\u2AE4", DoubleLeftTee: "\u2AE4", Dcaron: "\u010E", Dcy: "\u0414", Del: "\u2207", nabla: "\u2207", Delta: "\u0394", Dfr: "\u{1D507}", DiacriticalAcute: "\xB4", acute: "\xB4", DiacriticalDot: "\u02D9", dot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", dblac: "\u02DD", DiacriticalGrave: "`", grave: "`", DiacriticalTilde: "\u02DC", tilde: "\u02DC", Diamond: "\u22C4", diam: "\u22C4", diamond: "\u22C4", DifferentialD: "\u2146", dd: "\u2146", Dopf: "\u{1D53B}", Dot: "\xA8", DoubleDot: "\xA8", die: "\xA8", uml: "\xA8", DotDot: "\u20DC", DotEqual: "\u2250", doteq: "\u2250", esdot: "\u2250", DoubleDownArrow: "\u21D3", Downarrow: "\u21D3", dArr: "\u21D3", DoubleLeftArrow: "\u21D0", Leftarrow: "\u21D0", lArr: "\u21D0", DoubleLeftRightArrow: "\u21D4", Leftrightarrow: "\u21D4", hArr: "\u21D4", iff: "\u21D4", DoubleLongLeftArrow: "\u27F8", Longleftarrow: "\u27F8", xlArr: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", Longleftrightarrow: "\u27FA", xhArr: "\u27FA", DoubleLongRightArrow: "\u27F9", Longrightarrow: "\u27F9", xrArr: "\u27F9", DoubleRightArrow: "\u21D2", Implies: "\u21D2", Rightarrow: "\u21D2", rArr: "\u21D2", DoubleRightTee: "\u22A8", vDash: "\u22A8", DoubleUpArrow: "\u21D1", Uparrow: "\u21D1", uArr: "\u21D1", DoubleUpDownArrow: "\u21D5", Updownarrow: "\u21D5", vArr: "\u21D5", DoubleVerticalBar: "\u2225", par: "\u2225", parallel: "\u2225", shortparallel: "\u2225", spar: "\u2225", DownArrow: "\u2193", ShortDownArrow: "\u2193", darr: "\u2193", downarrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", duarr: "\u21F5", DownBreve: "\u0311", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", leftharpoondown: "\u21BD", lhard: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", rhard: "\u21C1", rightharpoondown: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", top: "\u22A4", DownTeeArrow: "\u21A7", mapstodown: "\u21A7", Dscr: "\u{1D49F}", Dstrok: "\u0110", ENG: "\u014A", ETH: "\xD0", Eacute: "\xC9", Ecaron: "\u011A", Ecirc: "\xCA", Ecy: "\u042D", Edot: "\u0116", Efr: "\u{1D508}", Egrave: "\xC8", Element: "\u2208", in: "\u2208", isin: "\u2208", isinv: "\u2208", Emacr: "\u0112", EmptySmallSquare: "\u25FB", EmptyVerySmallSquare: "\u25AB", Eogon: "\u0118", Eopf: "\u{1D53C}", Epsilon: "\u0395", Equal: "\u2A75", EqualTilde: "\u2242", eqsim: "\u2242", esim: "\u2242", Equilibrium: "\u21CC", rightleftharpoons: "\u21CC", rlhar: "\u21CC", Escr: "\u2130", expectation: "\u2130", Esim: "\u2A73", Eta: "\u0397", Euml: "\xCB", Exists: "\u2203", exist: "\u2203", ExponentialE: "\u2147", ee: "\u2147", exponentiale: "\u2147", Fcy: "\u0424", Ffr: "\u{1D509}", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", blacksquare: "\u25AA", squarf: "\u25AA", squf: "\u25AA", Fopf: "\u{1D53D}", ForAll: "\u2200", forall: "\u2200", Fouriertrf: "\u2131", Fscr: "\u2131", GJcy: "\u0403", GT: ">", gt: ">", Gamma: "\u0393", Gammad: "\u03DC", Gbreve: "\u011E", Gcedil: "\u0122", Gcirc: "\u011C", Gcy: "\u0413", Gdot: "\u0120", Gfr: "\u{1D50A}", Gg: "\u22D9", ggg: "\u22D9", Gopf: "\u{1D53E}", GreaterEqual: "\u2265", ge: "\u2265", geq: "\u2265", GreaterEqualLess: "\u22DB", gel: "\u22DB", gtreqless: "\u22DB", GreaterFullEqual: "\u2267", gE: "\u2267", geqq: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", gl: "\u2277", gtrless: "\u2277", GreaterSlantEqual: "\u2A7E", geqslant: "\u2A7E", ges: "\u2A7E", GreaterTilde: "\u2273", gsim: "\u2273", gtrsim: "\u2273", Gscr: "\u{1D4A2}", Gt: "\u226B", NestedGreaterGreater: "\u226B", gg: "\u226B", HARDcy: "\u042A", Hacek: "\u02C7", caron: "\u02C7", Hat: "^", Hcirc: "\u0124", Hfr: "\u210C", Poincareplane: "\u210C", HilbertSpace: "\u210B", Hscr: "\u210B", hamilt: "\u210B", Hopf: "\u210D", quaternions: "\u210D", HorizontalLine: "\u2500", boxh: "\u2500", Hstrok: "\u0126", HumpEqual: "\u224F", bumpe: "\u224F", bumpeq: "\u224F", IEcy: "\u0415", IJlig: "\u0132", IOcy: "\u0401", Iacute: "\xCD", Icirc: "\xCE", Icy: "\u0418", Idot: "\u0130", Ifr: "\u2111", Im: "\u2111", image: "\u2111", imagpart: "\u2111", Igrave: "\xCC", Imacr: "\u012A", ImaginaryI: "\u2148", ii: "\u2148", Int: "\u222C", Integral: "\u222B", int: "\u222B", Intersection: "\u22C2", bigcap: "\u22C2", xcap: "\u22C2", InvisibleComma: "\u2063", ic: "\u2063", InvisibleTimes: "\u2062", it: "\u2062", Iogon: "\u012E", Iopf: "\u{1D540}", Iota: "\u0399", Iscr: "\u2110", imagline: "\u2110", Itilde: "\u0128", Iukcy: "\u0406", Iuml: "\xCF", Jcirc: "\u0134", Jcy: "\u0419", Jfr: "\u{1D50D}", Jopf: "\u{1D541}", Jscr: "\u{1D4A5}", Jsercy: "\u0408", Jukcy: "\u0404", KHcy: "\u0425", KJcy: "\u040C", Kappa: "\u039A", Kcedil: "\u0136", Kcy: "\u041A", Kfr: "\u{1D50E}", Kopf: "\u{1D542}", Kscr: "\u{1D4A6}", LJcy: "\u0409", LT: "<", lt: "<", Lacute: "\u0139", Lambda: "\u039B", Lang: "\u27EA", Laplacetrf: "\u2112", Lscr: "\u2112", lagran: "\u2112", Larr: "\u219E", twoheadleftarrow: "\u219E", Lcaron: "\u013D", Lcedil: "\u013B", Lcy: "\u041B", LeftAngleBracket: "\u27E8", lang: "\u27E8", langle: "\u27E8", LeftArrow: "\u2190", ShortLeftArrow: "\u2190", larr: "\u2190", leftarrow: "\u2190", slarr: "\u2190", LeftArrowBar: "\u21E4", larrb: "\u21E4", LeftArrowRightArrow: "\u21C6", leftrightarrows: "\u21C6", lrarr: "\u21C6", LeftCeiling: "\u2308", lceil: "\u2308", LeftDoubleBracket: "\u27E6", lobrk: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", dharl: "\u21C3", downharpoonleft: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", lfloor: "\u230A", LeftRightArrow: "\u2194", harr: "\u2194", leftrightarrow: "\u2194", LeftRightVector: "\u294E", LeftTee: "\u22A3", dashv: "\u22A3", LeftTeeArrow: "\u21A4", mapstoleft: "\u21A4", LeftTeeVector: "\u295A", LeftTriangle: "\u22B2", vartriangleleft: "\u22B2", vltri: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", ltrie: "\u22B4", trianglelefteq: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", uharl: "\u21BF", upharpoonleft: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", leftharpoonup: "\u21BC", lharu: "\u21BC", LeftVectorBar: "\u2952", LessEqualGreater: "\u22DA", leg: "\u22DA", lesseqgtr: "\u22DA", LessFullEqual: "\u2266", lE: "\u2266", leqq: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", lg: "\u2276", LessLess: "\u2AA1", LessSlantEqual: "\u2A7D", leqslant: "\u2A7D", les: "\u2A7D", LessTilde: "\u2272", lesssim: "\u2272", lsim: "\u2272", Lfr: "\u{1D50F}", Ll: "\u22D8", Lleftarrow: "\u21DA", lAarr: "\u21DA", Lmidot: "\u013F", LongLeftArrow: "\u27F5", longleftarrow: "\u27F5", xlarr: "\u27F5", LongLeftRightArrow: "\u27F7", longleftrightarrow: "\u27F7", xharr: "\u27F7", LongRightArrow: "\u27F6", longrightarrow: "\u27F6", xrarr: "\u27F6", Lopf: "\u{1D543}", LowerLeftArrow: "\u2199", swarr: "\u2199", swarrow: "\u2199", LowerRightArrow: "\u2198", searr: "\u2198", searrow: "\u2198", Lsh: "\u21B0", lsh: "\u21B0", Lstrok: "\u0141", Lt: "\u226A", NestedLessLess: "\u226A", ll: "\u226A", Map: "\u2905", Mcy: "\u041C", MediumSpace: "\u205F", Mellintrf: "\u2133", Mscr: "\u2133", phmmat: "\u2133", Mfr: "\u{1D510}", MinusPlus: "\u2213", mnplus: "\u2213", mp: "\u2213", Mopf: "\u{1D544}", Mu: "\u039C", NJcy: "\u040A", Nacute: "\u0143", Ncaron: "\u0147", Ncedil: "\u0145", Ncy: "\u041D", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", ZeroWidthSpace: "\u200B", NewLine: `
`, Nfr: "\u{1D511}", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nbsp: "\xA0", Nopf: "\u2115", naturals: "\u2115", Not: "\u2AEC", NotCongruent: "\u2262", nequiv: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", npar: "\u2226", nparallel: "\u2226", nshortparallel: "\u2226", nspar: "\u2226", NotElement: "\u2209", notin: "\u2209", notinva: "\u2209", NotEqual: "\u2260", ne: "\u2260", NotEqualTilde: "\u2242\u0338", nesim: "\u2242\u0338", NotExists: "\u2204", nexist: "\u2204", nexists: "\u2204", NotGreater: "\u226F", ngt: "\u226F", ngtr: "\u226F", NotGreaterEqual: "\u2271", nge: "\u2271", ngeq: "\u2271", NotGreaterFullEqual: "\u2267\u0338", ngE: "\u2267\u0338", ngeqq: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", nGtv: "\u226B\u0338", NotGreaterLess: "\u2279", ntgl: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", NotGreaterTilde: "\u2275", ngsim: "\u2275", NotHumpDownHump: "\u224E\u0338", nbump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", nbumpe: "\u224F\u0338", NotLeftTriangle: "\u22EA", nltri: "\u22EA", ntriangleleft: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", nltrie: "\u22EC", ntrianglelefteq: "\u22EC", NotLess: "\u226E", nless: "\u226E", nlt: "\u226E", NotLessEqual: "\u2270", nle: "\u2270", nleq: "\u2270", NotLessGreater: "\u2278", ntlg: "\u2278", NotLessLess: "\u226A\u0338", nLtv: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", NotLessTilde: "\u2274", nlsim: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", NotPrecedes: "\u2280", npr: "\u2280", nprec: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", npre: "\u2AAF\u0338", npreceq: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", nprcue: "\u22E0", NotReverseElement: "\u220C", notni: "\u220C", notniva: "\u220C", NotRightTriangle: "\u22EB", nrtri: "\u22EB", ntriangleright: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", nrtrie: "\u22ED", ntrianglerighteq: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", nsqsube: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", nsqsupe: "\u22E3", NotSubset: "\u2282\u20D2", nsubset: "\u2282\u20D2", vnsub: "\u2282\u20D2", NotSubsetEqual: "\u2288", nsube: "\u2288", nsubseteq: "\u2288", NotSucceeds: "\u2281", nsc: "\u2281", nsucc: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", nsce: "\u2AB0\u0338", nsucceq: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", nsccue: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", nsupset: "\u2283\u20D2", vnsup: "\u2283\u20D2", NotSupersetEqual: "\u2289", nsupe: "\u2289", nsupseteq: "\u2289", NotTilde: "\u2241", nsim: "\u2241", NotTildeEqual: "\u2244", nsime: "\u2244", nsimeq: "\u2244", NotTildeFullEqual: "\u2247", ncong: "\u2247", NotTildeTilde: "\u2249", nap: "\u2249", napprox: "\u2249", NotVerticalBar: "\u2224", nmid: "\u2224", nshortmid: "\u2224", nsmid: "\u2224", Nscr: "\u{1D4A9}", Ntilde: "\xD1", Nu: "\u039D", OElig: "\u0152", Oacute: "\xD3", Ocirc: "\xD4", Ocy: "\u041E", Odblac: "\u0150", Ofr: "\u{1D512}", Ograve: "\xD2", Omacr: "\u014C", Omega: "\u03A9", ohm: "\u03A9", Omicron: "\u039F", Oopf: "\u{1D546}", OpenCurlyDoubleQuote: "\u201C", ldquo: "\u201C", OpenCurlyQuote: "\u2018", lsquo: "\u2018", Or: "\u2A54", Oscr: "\u{1D4AA}", Oslash: "\xD8", Otilde: "\xD5", Otimes: "\u2A37", Ouml: "\xD6", OverBar: "\u203E", oline: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", tbrk: "\u23B4", OverParenthesis: "\u23DC", PartialD: "\u2202", part: "\u2202", Pcy: "\u041F", Pfr: "\u{1D513}", Phi: "\u03A6", Pi: "\u03A0", PlusMinus: "\xB1", plusmn: "\xB1", pm: "\xB1", Popf: "\u2119", primes: "\u2119", Pr: "\u2ABB", Precedes: "\u227A", pr: "\u227A", prec: "\u227A", PrecedesEqual: "\u2AAF", pre: "\u2AAF", preceq: "\u2AAF", PrecedesSlantEqual: "\u227C", prcue: "\u227C", preccurlyeq: "\u227C", PrecedesTilde: "\u227E", precsim: "\u227E", prsim: "\u227E", Prime: "\u2033", Product: "\u220F", prod: "\u220F", Proportional: "\u221D", prop: "\u221D", propto: "\u221D", varpropto: "\u221D", vprop: "\u221D", Pscr: "\u{1D4AB}", Psi: "\u03A8", QUOT: '"', quot: '"', Qfr: "\u{1D514}", Qopf: "\u211A", rationals: "\u211A", Qscr: "\u{1D4AC}", RBarr: "\u2910", drbkarow: "\u2910", REG: "\xAE", circledR: "\xAE", reg: "\xAE", Racute: "\u0154", Rang: "\u27EB", Rarr: "\u21A0", twoheadrightarrow: "\u21A0", Rarrtl: "\u2916", Rcaron: "\u0158", Rcedil: "\u0156", Rcy: "\u0420", Re: "\u211C", Rfr: "\u211C", real: "\u211C", realpart: "\u211C", ReverseElement: "\u220B", SuchThat: "\u220B", ni: "\u220B", niv: "\u220B", ReverseEquilibrium: "\u21CB", leftrightharpoons: "\u21CB", lrhar: "\u21CB", ReverseUpEquilibrium: "\u296F", duhar: "\u296F", Rho: "\u03A1", RightAngleBracket: "\u27E9", rang: "\u27E9", rangle: "\u27E9", RightArrow: "\u2192", ShortRightArrow: "\u2192", rarr: "\u2192", rightarrow: "\u2192", srarr: "\u2192", RightArrowBar: "\u21E5", rarrb: "\u21E5", RightArrowLeftArrow: "\u21C4", rightleftarrows: "\u21C4", rlarr: "\u21C4", RightCeiling: "\u2309", rceil: "\u2309", RightDoubleBracket: "\u27E7", robrk: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", dharr: "\u21C2", downharpoonright: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", rfloor: "\u230B", RightTee: "\u22A2", vdash: "\u22A2", RightTeeArrow: "\u21A6", map: "\u21A6", mapsto: "\u21A6", RightTeeVector: "\u295B", RightTriangle: "\u22B3", vartriangleright: "\u22B3", vrtri: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", rtrie: "\u22B5", trianglerighteq: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", uharr: "\u21BE", upharpoonright: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", rharu: "\u21C0", rightharpoonup: "\u21C0", RightVectorBar: "\u2953", Ropf: "\u211D", reals: "\u211D", RoundImplies: "\u2970", Rrightarrow: "\u21DB", rAarr: "\u21DB", Rscr: "\u211B", realine: "\u211B", Rsh: "\u21B1", rsh: "\u21B1", RuleDelayed: "\u29F4", SHCHcy: "\u0429", SHcy: "\u0428", SOFTcy: "\u042C", Sacute: "\u015A", Sc: "\u2ABC", Scaron: "\u0160", Scedil: "\u015E", Scirc: "\u015C", Scy: "\u0421", Sfr: "\u{1D516}", ShortUpArrow: "\u2191", UpArrow: "\u2191", uarr: "\u2191", uparrow: "\u2191", Sigma: "\u03A3", SmallCircle: "\u2218", compfn: "\u2218", Sopf: "\u{1D54A}", Sqrt: "\u221A", radic: "\u221A", Square: "\u25A1", squ: "\u25A1", square: "\u25A1", SquareIntersection: "\u2293", sqcap: "\u2293", SquareSubset: "\u228F", sqsub: "\u228F", sqsubset: "\u228F", SquareSubsetEqual: "\u2291", sqsube: "\u2291", sqsubseteq: "\u2291", SquareSuperset: "\u2290", sqsup: "\u2290", sqsupset: "\u2290", SquareSupersetEqual: "\u2292", sqsupe: "\u2292", sqsupseteq: "\u2292", SquareUnion: "\u2294", sqcup: "\u2294", Sscr: "\u{1D4AE}", Star: "\u22C6", sstarf: "\u22C6", Sub: "\u22D0", Subset: "\u22D0", SubsetEqual: "\u2286", sube: "\u2286", subseteq: "\u2286", Succeeds: "\u227B", sc: "\u227B", succ: "\u227B", SucceedsEqual: "\u2AB0", sce: "\u2AB0", succeq: "\u2AB0", SucceedsSlantEqual: "\u227D", sccue: "\u227D", succcurlyeq: "\u227D", SucceedsTilde: "\u227F", scsim: "\u227F", succsim: "\u227F", Sum: "\u2211", sum: "\u2211", Sup: "\u22D1", Supset: "\u22D1", Superset: "\u2283", sup: "\u2283", supset: "\u2283", SupersetEqual: "\u2287", supe: "\u2287", supseteq: "\u2287", THORN: "\xDE", TRADE: "\u2122", trade: "\u2122", TSHcy: "\u040B", TScy: "\u0426", Tab: "	", Tau: "\u03A4", Tcaron: "\u0164", Tcedil: "\u0162", Tcy: "\u0422", Tfr: "\u{1D517}", Therefore: "\u2234", there4: "\u2234", therefore: "\u2234", Theta: "\u0398", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", Tilde: "\u223C", sim: "\u223C", thicksim: "\u223C", thksim: "\u223C", TildeEqual: "\u2243", sime: "\u2243", simeq: "\u2243", TildeFullEqual: "\u2245", cong: "\u2245", TildeTilde: "\u2248", ap: "\u2248", approx: "\u2248", asymp: "\u2248", thickapprox: "\u2248", thkap: "\u2248", Topf: "\u{1D54B}", TripleDot: "\u20DB", tdot: "\u20DB", Tscr: "\u{1D4AF}", Tstrok: "\u0166", Uacute: "\xDA", Uarr: "\u219F", Uarrocir: "\u2949", Ubrcy: "\u040E", Ubreve: "\u016C", Ucirc: "\xDB", Ucy: "\u0423", Udblac: "\u0170", Ufr: "\u{1D518}", Ugrave: "\xD9", Umacr: "\u016A", UnderBar: "_", lowbar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", bbrk: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", bigcup: "\u22C3", xcup: "\u22C3", UnionPlus: "\u228E", uplus: "\u228E", Uogon: "\u0172", Uopf: "\u{1D54C}", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", udarr: "\u21C5", UpDownArrow: "\u2195", updownarrow: "\u2195", varr: "\u2195", UpEquilibrium: "\u296E", udhar: "\u296E", UpTee: "\u22A5", bot: "\u22A5", bottom: "\u22A5", perp: "\u22A5", UpTeeArrow: "\u21A5", mapstoup: "\u21A5", UpperLeftArrow: "\u2196", nwarr: "\u2196", nwarrow: "\u2196", UpperRightArrow: "\u2197", nearr: "\u2197", nearrow: "\u2197", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", Uring: "\u016E", Uscr: "\u{1D4B0}", Utilde: "\u0168", Uuml: "\xDC", VDash: "\u22AB", Vbar: "\u2AEB", Vcy: "\u0412", Vdash: "\u22A9", Vdashl: "\u2AE6", Vee: "\u22C1", bigvee: "\u22C1", xvee: "\u22C1", Verbar: "\u2016", Vert: "\u2016", VerticalBar: "\u2223", mid: "\u2223", shortmid: "\u2223", smid: "\u2223", VerticalLine: "|", verbar: "|", vert: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", wr: "\u2240", wreath: "\u2240", VeryThinSpace: "\u200A", hairsp: "\u200A", Vfr: "\u{1D519}", Vopf: "\u{1D54D}", Vscr: "\u{1D4B1}", Vvdash: "\u22AA", Wcirc: "\u0174", Wedge: "\u22C0", bigwedge: "\u22C0", xwedge: "\u22C0", Wfr: "\u{1D51A}", Wopf: "\u{1D54E}", Wscr: "\u{1D4B2}", Xfr: "\u{1D51B}", Xi: "\u039E", Xopf: "\u{1D54F}", Xscr: "\u{1D4B3}", YAcy: "\u042F", YIcy: "\u0407", YUcy: "\u042E", Yacute: "\xDD", Ycirc: "\u0176", Ycy: "\u042B", Yfr: "\u{1D51C}", Yopf: "\u{1D550}", Yscr: "\u{1D4B4}", Yuml: "\u0178", ZHcy: "\u0416", Zacute: "\u0179", Zcaron: "\u017D", Zcy: "\u0417", Zdot: "\u017B", Zeta: "\u0396", Zfr: "\u2128", zeetrf: "\u2128", Zopf: "\u2124", integers: "\u2124", Zscr: "\u{1D4B5}", aacute: "\xE1", abreve: "\u0103", ac: "\u223E", mstpos: "\u223E", acE: "\u223E\u0333", acd: "\u223F", acirc: "\xE2", acy: "\u0430", aelig: "\xE6", afr: "\u{1D51E}", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", alpha: "\u03B1", amacr: "\u0101", amalg: "\u2A3F", and: "\u2227", wedge: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", angle: "\u2220", ange: "\u29A4", angmsd: "\u2221", measuredangle: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angzarr: "\u237C", aogon: "\u0105", aopf: "\u{1D552}", apE: "\u2A70", apacir: "\u2A6F", ape: "\u224A", approxeq: "\u224A", apid: "\u224B", apos: "'", aring: "\xE5", ascr: "\u{1D4B6}", ast: "*", midast: "*", atilde: "\xE3", auml: "\xE4", awint: "\u2A11", bNot: "\u2AED", backcong: "\u224C", bcong: "\u224C", backepsilon: "\u03F6", bepsi: "\u03F6", backprime: "\u2035", bprime: "\u2035", backsim: "\u223D", bsim: "\u223D", backsimeq: "\u22CD", bsime: "\u22CD", barvee: "\u22BD", barwed: "\u2305", barwedge: "\u2305", bbrktbrk: "\u23B6", bcy: "\u0431", bdquo: "\u201E", ldquor: "\u201E", bemptyv: "\u29B0", beta: "\u03B2", beth: "\u2136", between: "\u226C", twixt: "\u226C", bfr: "\u{1D51F}", bigcirc: "\u25EF", xcirc: "\u25EF", bigodot: "\u2A00", xodot: "\u2A00", bigoplus: "\u2A01", xoplus: "\u2A01", bigotimes: "\u2A02", xotime: "\u2A02", bigsqcup: "\u2A06", xsqcup: "\u2A06", bigstar: "\u2605", starf: "\u2605", bigtriangledown: "\u25BD", xdtri: "\u25BD", bigtriangleup: "\u25B3", xutri: "\u25B3", biguplus: "\u2A04", xuplus: "\u2A04", bkarow: "\u290D", rbarr: "\u290D", blacklozenge: "\u29EB", lozf: "\u29EB", blacktriangle: "\u25B4", utrif: "\u25B4", blacktriangledown: "\u25BE", dtrif: "\u25BE", blacktriangleleft: "\u25C2", ltrif: "\u25C2", blacktriangleright: "\u25B8", rtrif: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bnot: "\u2310", bopf: "\u{1D553}", bowtie: "\u22C8", boxDL: "\u2557", boxDR: "\u2554", boxDl: "\u2556", boxDr: "\u2553", boxH: "\u2550", boxHD: "\u2566", boxHU: "\u2569", boxHd: "\u2564", boxHu: "\u2567", boxUL: "\u255D", boxUR: "\u255A", boxUl: "\u255C", boxUr: "\u2559", boxV: "\u2551", boxVH: "\u256C", boxVL: "\u2563", boxVR: "\u2560", boxVh: "\u256B", boxVl: "\u2562", boxVr: "\u255F", boxbox: "\u29C9", boxdL: "\u2555", boxdR: "\u2552", boxdl: "\u2510", boxdr: "\u250C", boxhD: "\u2565", boxhU: "\u2568", boxhd: "\u252C", boxhu: "\u2534", boxminus: "\u229F", minusb: "\u229F", boxplus: "\u229E", plusb: "\u229E", boxtimes: "\u22A0", timesb: "\u22A0", boxuL: "\u255B", boxuR: "\u2558", boxul: "\u2518", boxur: "\u2514", boxv: "\u2502", boxvH: "\u256A", boxvL: "\u2561", boxvR: "\u255E", boxvh: "\u253C", boxvl: "\u2524", boxvr: "\u251C", brvbar: "\xA6", bscr: "\u{1D4B7}", bsemi: "\u204F", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bumpE: "\u2AAE", cacute: "\u0107", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", caps: "\u2229\uFE00", caret: "\u2041", ccaps: "\u2A4D", ccaron: "\u010D", ccedil: "\xE7", ccirc: "\u0109", ccups: "\u2A4C", ccupssm: "\u2A50", cdot: "\u010B", cemptyv: "\u29B2", cent: "\xA2", cfr: "\u{1D520}", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", chi: "\u03C7", cir: "\u25CB", cirE: "\u29C3", circ: "\u02C6", circeq: "\u2257", cire: "\u2257", circlearrowleft: "\u21BA", olarr: "\u21BA", circlearrowright: "\u21BB", orarr: "\u21BB", circledS: "\u24C8", oS: "\u24C8", circledast: "\u229B", oast: "\u229B", circledcirc: "\u229A", ocir: "\u229A", circleddash: "\u229D", odash: "\u229D", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", clubs: "\u2663", clubsuit: "\u2663", colon: ":", comma: ",", commat: "@", comp: "\u2201", complement: "\u2201", congdot: "\u2A6D", copf: "\u{1D554}", copysr: "\u2117", crarr: "\u21B5", cross: "\u2717", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", curlyeqprec: "\u22DE", cuesc: "\u22DF", curlyeqsucc: "\u22DF", cularr: "\u21B6", curvearrowleft: "\u21B6", cularrp: "\u293D", cup: "\u222A", cupbrcap: "\u2A48", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curvearrowright: "\u21B7", curarrm: "\u293C", curlyvee: "\u22CE", cuvee: "\u22CE", curlywedge: "\u22CF", cuwed: "\u22CF", curren: "\xA4", cwint: "\u2231", cylcty: "\u232D", dHar: "\u2965", dagger: "\u2020", daleth: "\u2138", dash: "\u2010", hyphen: "\u2010", dbkarow: "\u290F", rBarr: "\u290F", dcaron: "\u010F", dcy: "\u0434", ddarr: "\u21CA", downdownarrows: "\u21CA", ddotseq: "\u2A77", eDDot: "\u2A77", deg: "\xB0", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", dfr: "\u{1D521}", diamondsuit: "\u2666", diams: "\u2666", digamma: "\u03DD", gammad: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", djcy: "\u0452", dlcorn: "\u231E", llcorner: "\u231E", dlcrop: "\u230D", dollar: "$", dopf: "\u{1D555}", doteqdot: "\u2251", eDot: "\u2251", dotminus: "\u2238", minusd: "\u2238", dotplus: "\u2214", plusdo: "\u2214", dotsquare: "\u22A1", sdotb: "\u22A1", drcorn: "\u231F", lrcorner: "\u231F", drcrop: "\u230C", dscr: "\u{1D4B9}", dscy: "\u0455", dsol: "\u29F6", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", triangledown: "\u25BF", dwangle: "\u29A6", dzcy: "\u045F", dzigrarr: "\u27FF", eacute: "\xE9", easter: "\u2A6E", ecaron: "\u011B", ecir: "\u2256", eqcirc: "\u2256", ecirc: "\xEA", ecolon: "\u2255", eqcolon: "\u2255", ecy: "\u044D", edot: "\u0117", efDot: "\u2252", fallingdotseq: "\u2252", efr: "\u{1D522}", eg: "\u2A9A", egrave: "\xE8", egs: "\u2A96", eqslantgtr: "\u2A96", egsdot: "\u2A98", el: "\u2A99", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", eqslantless: "\u2A95", elsdot: "\u2A97", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", emptyv: "\u2205", varnothing: "\u2205", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", eng: "\u014B", ensp: "\u2002", eogon: "\u0119", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", epsilon: "\u03B5", epsiv: "\u03F5", straightepsilon: "\u03F5", varepsilon: "\u03F5", equals: "=", equest: "\u225F", questeq: "\u225F", equivDD: "\u2A78", eqvparsl: "\u29E5", erDot: "\u2253", risingdotseq: "\u2253", erarr: "\u2971", escr: "\u212F", eta: "\u03B7", eth: "\xF0", euml: "\xEB", euro: "\u20AC", excl: "!", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", ffr: "\u{1D523}", filig: "\uFB01", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", fopf: "\u{1D557}", fork: "\u22D4", pitchfork: "\u22D4", forkv: "\u2AD9", fpartint: "\u2A0D", frac12: "\xBD", half: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", sfrown: "\u2322", fscr: "\u{1D4BB}", gEl: "\u2A8C", gtreqqless: "\u2A8C", gacute: "\u01F5", gamma: "\u03B3", gap: "\u2A86", gtrapprox: "\u2A86", gbreve: "\u011F", gcirc: "\u011D", gcy: "\u0433", gdot: "\u0121", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", gfr: "\u{1D524}", gimel: "\u2137", gjcy: "\u0453", glE: "\u2A92", gla: "\u2AA5", glj: "\u2AA4", gnE: "\u2269", gneqq: "\u2269", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gneq: "\u2A88", gnsim: "\u22E7", gopf: "\u{1D558}", gscr: "\u210A", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtrdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrarr: "\u2978", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", hardcy: "\u044A", harrcir: "\u2948", harrw: "\u21AD", leftrightsquigarrow: "\u21AD", hbar: "\u210F", hslash: "\u210F", planck: "\u210F", plankv: "\u210F", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", mldr: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", hksearow: "\u2925", searhk: "\u2925", hkswarow: "\u2926", swarhk: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", larrhk: "\u21A9", hookrightarrow: "\u21AA", rarrhk: "\u21AA", hopf: "\u{1D559}", horbar: "\u2015", hscr: "\u{1D4BD}", hstrok: "\u0127", hybull: "\u2043", iacute: "\xED", icirc: "\xEE", icy: "\u0438", iecy: "\u0435", iexcl: "\xA1", ifr: "\u{1D526}", igrave: "\xEC", iiiint: "\u2A0C", qint: "\u2A0C", iiint: "\u222D", tint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", ijlig: "\u0133", imacr: "\u012B", imath: "\u0131", inodot: "\u0131", imof: "\u22B7", imped: "\u01B5", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", intcal: "\u22BA", intercal: "\u22BA", intlarhk: "\u2A17", intprod: "\u2A3C", iprod: "\u2A3C", iocy: "\u0451", iogon: "\u012F", iopf: "\u{1D55A}", iota: "\u03B9", iquest: "\xBF", iscr: "\u{1D4BE}", isinE: "\u22F9", isindot: "\u22F5", isins: "\u22F4", isinsv: "\u22F3", itilde: "\u0129", iukcy: "\u0456", iuml: "\xEF", jcirc: "\u0135", jcy: "\u0439", jfr: "\u{1D527}", jmath: "\u0237", jopf: "\u{1D55B}", jscr: "\u{1D4BF}", jsercy: "\u0458", jukcy: "\u0454", kappa: "\u03BA", kappav: "\u03F0", varkappa: "\u03F0", kcedil: "\u0137", kcy: "\u043A", kfr: "\u{1D528}", kgreen: "\u0138", khcy: "\u0445", kjcy: "\u045C", kopf: "\u{1D55C}", kscr: "\u{1D4C0}", lAtail: "\u291B", lBarr: "\u290E", lEg: "\u2A8B", lesseqqgtr: "\u2A8B", lHar: "\u2962", lacute: "\u013A", laemptyv: "\u29B4", lambda: "\u03BB", langd: "\u2991", lap: "\u2A85", lessapprox: "\u2A85", laquo: "\xAB", larrbfs: "\u291F", larrfs: "\u291D", larrlp: "\u21AB", looparrowleft: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", leftarrowtail: "\u21A2", lat: "\u2AAB", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lcub: "{", lbrack: "[", lsqb: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", lcaron: "\u013E", lcedil: "\u013C", lcy: "\u043B", ldca: "\u2936", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", leq: "\u2264", leftleftarrows: "\u21C7", llarr: "\u21C7", leftthreetimes: "\u22CB", lthree: "\u22CB", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessdot: "\u22D6", ltdot: "\u22D6", lfisht: "\u297C", lfr: "\u{1D529}", lgE: "\u2A91", lharul: "\u296A", lhblk: "\u2584", ljcy: "\u0459", llhard: "\u296B", lltri: "\u25FA", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnE: "\u2268", lneqq: "\u2268", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lneq: "\u2A87", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", longmapsto: "\u27FC", xmap: "\u27FC", looparrowright: "\u21AC", rarrlp: "\u21AC", lopar: "\u2985", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", loz: "\u25CA", lozenge: "\u25CA", lpar: "(", lparlt: "\u2993", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", lsime: "\u2A8D", lsimg: "\u2A8F", lsquor: "\u201A", sbquo: "\u201A", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltrPar: "\u2996", ltri: "\u25C3", triangleleft: "\u25C3", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", mDDot: "\u223A", macr: "\xAF", strns: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", marker: "\u25AE", mcomma: "\u2A29", mcy: "\u043C", mdash: "\u2014", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midcir: "\u2AF0", minus: "\u2212", minusdu: "\u2A2A", mlcp: "\u2ADB", models: "\u22A7", mopf: "\u{1D55E}", mscr: "\u{1D4C2}", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nGg: "\u22D9\u0338", nGt: "\u226B\u20D2", nLeftarrow: "\u21CD", nlArr: "\u21CD", nLeftrightarrow: "\u21CE", nhArr: "\u21CE", nLl: "\u22D8\u0338", nLt: "\u226A\u20D2", nRightarrow: "\u21CF", nrArr: "\u21CF", nVDash: "\u22AF", nVdash: "\u22AE", nacute: "\u0144", nang: "\u2220\u20D2", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", natur: "\u266E", natural: "\u266E", ncap: "\u2A43", ncaron: "\u0148", ncedil: "\u0146", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", ncy: "\u043D", ndash: "\u2013", neArr: "\u21D7", nearhk: "\u2924", nedot: "\u2250\u0338", nesear: "\u2928", toea: "\u2928", nfr: "\u{1D52B}", nharr: "\u21AE", nleftrightarrow: "\u21AE", nhpar: "\u2AF2", nis: "\u22FC", nisd: "\u22FA", njcy: "\u045A", nlE: "\u2266\u0338", nleqq: "\u2266\u0338", nlarr: "\u219A", nleftarrow: "\u219A", nldr: "\u2025", nopf: "\u{1D55F}", not: "\xAC", notinE: "\u22F9\u0338", notindot: "\u22F5\u0338", notinvb: "\u22F7", notinvc: "\u22F6", notnivb: "\u22FE", notnivc: "\u22FD", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", nrarr: "\u219B", nrightarrow: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nscr: "\u{1D4C3}", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsubseteqq: "\u2AC5\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupseteqq: "\u2AC6\u0338", ntilde: "\xF1", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvDash: "\u22AD", nvHarr: "\u2904", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwArr: "\u21D6", nwarhk: "\u2923", nwnear: "\u2927", oacute: "\xF3", ocirc: "\xF4", ocy: "\u043E", odblac: "\u0151", odiv: "\u2A38", odsold: "\u29BC", oelig: "\u0153", ofcir: "\u29BF", ofr: "\u{1D52C}", ogon: "\u02DB", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", olcir: "\u29BE", olcross: "\u29BB", olt: "\u29C0", omacr: "\u014D", omega: "\u03C9", omicron: "\u03BF", omid: "\u29B6", oopf: "\u{1D560}", opar: "\u29B7", operp: "\u29B9", or: "\u2228", vee: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", oscr: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oslash: "\xF8", osol: "\u2298", otilde: "\xF5", otimesas: "\u2A36", ouml: "\xF6", ovbar: "\u233D", para: "\xB6", parsim: "\u2AF3", parsl: "\u2AFD", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", pertenk: "\u2031", pfr: "\u{1D52D}", phi: "\u03C6", phiv: "\u03D5", straightphi: "\u03D5", varphi: "\u03D5", phone: "\u260E", pi: "\u03C0", piv: "\u03D6", varpi: "\u03D6", planckh: "\u210E", plus: "+", plusacir: "\u2A23", pluscir: "\u2A22", plusdu: "\u2A25", pluse: "\u2A72", plussim: "\u2A26", plustwo: "\u2A27", pointint: "\u2A15", popf: "\u{1D561}", pound: "\xA3", prE: "\u2AB3", prap: "\u2AB7", precapprox: "\u2AB7", precnapprox: "\u2AB9", prnap: "\u2AB9", precneqq: "\u2AB5", prnE: "\u2AB5", precnsim: "\u22E8", prnsim: "\u22E8", prime: "\u2032", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prurel: "\u22B0", pscr: "\u{1D4C5}", psi: "\u03C8", puncsp: "\u2008", qfr: "\u{1D52E}", qopf: "\u{1D562}", qprime: "\u2057", qscr: "\u{1D4C6}", quatint: "\u2A16", quest: "?", rAtail: "\u291C", rHar: "\u2964", race: "\u223D\u0331", racute: "\u0155", raemptyv: "\u29B3", rangd: "\u2992", range: "\u29A5", raquo: "\xBB", rarrap: "\u2975", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrpl: "\u2945", rarrsim: "\u2974", rarrtl: "\u21A3", rightarrowtail: "\u21A3", rarrw: "\u219D", rightsquigarrow: "\u219D", ratail: "\u291A", ratio: "\u2236", rbbrk: "\u2773", rbrace: "}", rcub: "}", rbrack: "]", rsqb: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", rcaron: "\u0159", rcedil: "\u0157", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdsh: "\u21B3", rect: "\u25AD", rfisht: "\u297D", rfr: "\u{1D52F}", rharul: "\u296C", rho: "\u03C1", rhov: "\u03F1", varrho: "\u03F1", rightrightarrows: "\u21C9", rrarr: "\u21C9", rightthreetimes: "\u22CC", rthree: "\u22CC", ring: "\u02DA", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", ropar: "\u2986", ropf: "\u{1D563}", roplus: "\u2A2E", rotimes: "\u2A35", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rsaquo: "\u203A", rscr: "\u{1D4C7}", rtimes: "\u22CA", rtri: "\u25B9", triangleright: "\u25B9", rtriltri: "\u29CE", ruluhar: "\u2968", rx: "\u211E", sacute: "\u015B", scE: "\u2AB4", scap: "\u2AB8", succapprox: "\u2AB8", scaron: "\u0161", scedil: "\u015F", scirc: "\u015D", scnE: "\u2AB6", succneqq: "\u2AB6", scnap: "\u2ABA", succnapprox: "\u2ABA", scnsim: "\u22E9", succnsim: "\u22E9", scpolint: "\u2A13", scy: "\u0441", sdot: "\u22C5", sdote: "\u2A66", seArr: "\u21D8", sect: "\xA7", semi: ";", seswar: "\u2929", tosa: "\u2929", sext: "\u2736", sfr: "\u{1D530}", sharp: "\u266F", shchcy: "\u0449", shcy: "\u0448", shy: "\xAD", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", varsigma: "\u03C2", simdot: "\u2A6A", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", smashp: "\u2A33", smeparsl: "\u29E4", smile: "\u2323", ssmile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", sqcaps: "\u2293\uFE00", sqcups: "\u2294\uFE00", sscr: "\u{1D4C8}", star: "\u2606", sub: "\u2282", subset: "\u2282", subE: "\u2AC5", subseteqq: "\u2AC5", subdot: "\u2ABD", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subsetneqq: "\u2ACB", subne: "\u228A", subsetneq: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", supE: "\u2AC6", supseteqq: "\u2AC6", supdot: "\u2ABE", supdsub: "\u2AD8", supedot: "\u2AC4", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supsetneqq: "\u2ACC", supne: "\u228B", supsetneq: "\u228B", supplus: "\u2AC0", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swArr: "\u21D9", swnwar: "\u292A", szlig: "\xDF", target: "\u2316", tau: "\u03C4", tcaron: "\u0165", tcedil: "\u0163", tcy: "\u0442", telrec: "\u2315", tfr: "\u{1D531}", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", vartheta: "\u03D1", thorn: "\xFE", times: "\xD7", timesbar: "\u2A31", timesd: "\u2A30", topbot: "\u2336", topcir: "\u2AF1", topf: "\u{1D565}", topfork: "\u2ADA", tprime: "\u2034", triangle: "\u25B5", utri: "\u25B5", triangleq: "\u225C", trie: "\u225C", tridot: "\u25EC", triminus: "\u2A3A", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", tscr: "\u{1D4C9}", tscy: "\u0446", tshcy: "\u045B", tstrok: "\u0167", uHar: "\u2963", uacute: "\xFA", ubrcy: "\u045E", ubreve: "\u016D", ucirc: "\xFB", ucy: "\u0443", udblac: "\u0171", ufisht: "\u297E", ufr: "\u{1D532}", ugrave: "\xF9", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", umacr: "\u016B", uogon: "\u0173", uopf: "\u{1D566}", upsi: "\u03C5", upsilon: "\u03C5", upuparrows: "\u21C8", uuarr: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", uring: "\u016F", urtri: "\u25F9", uscr: "\u{1D4CA}", utdot: "\u22F0", utilde: "\u0169", uuml: "\xFC", uwangle: "\u29A7", vBar: "\u2AE8", vBarv: "\u2AE9", vangrt: "\u299C", varsubsetneq: "\u228A\uFE00", vsubne: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", vsubnE: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", vsupne: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vsupnE: "\u2ACC\uFE00", vcy: "\u0432", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", vfr: "\u{1D533}", vopf: "\u{1D567}", vscr: "\u{1D4CB}", vzigzag: "\u299A", wcirc: "\u0175", wedbar: "\u2A5F", wedgeq: "\u2259", weierp: "\u2118", wp: "\u2118", wfr: "\u{1D534}", wopf: "\u{1D568}", wscr: "\u{1D4CC}", xfr: "\u{1D535}", xi: "\u03BE", xnis: "\u22FB", xopf: "\u{1D569}", xscr: "\u{1D4CD}", yacute: "\xFD", yacy: "\u044F", ycirc: "\u0177", ycy: "\u044B", yen: "\xA5", yfr: "\u{1D536}", yicy: "\u0457", yopf: "\u{1D56A}", yscr: "\u{1D4CE}", yucy: "\u044E", yuml: "\xFF", zacute: "\u017A", zcaron: "\u017E", zcy: "\u0437", zdot: "\u017C", zeta: "\u03B6", zfr: "\u{1D537}", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
var to = "\uE500";
ve.ngsp = to;
var l = (function(e) {
  return e[e.TAG_OPEN_START = 0] = "TAG_OPEN_START", e[e.TAG_OPEN_END = 1] = "TAG_OPEN_END", e[e.TAG_OPEN_END_VOID = 2] = "TAG_OPEN_END_VOID", e[e.TAG_CLOSE = 3] = "TAG_CLOSE", e[e.INCOMPLETE_TAG_OPEN = 4] = "INCOMPLETE_TAG_OPEN", e[e.TEXT = 5] = "TEXT", e[e.ESCAPABLE_RAW_TEXT = 6] = "ESCAPABLE_RAW_TEXT", e[e.RAW_TEXT = 7] = "RAW_TEXT", e[e.INTERPOLATION = 8] = "INTERPOLATION", e[e.ENCODED_ENTITY = 9] = "ENCODED_ENTITY", e[e.COMMENT_START = 10] = "COMMENT_START", e[e.COMMENT_END = 11] = "COMMENT_END", e[e.CDATA_START = 12] = "CDATA_START", e[e.CDATA_END = 13] = "CDATA_END", e[e.ATTR_NAME = 14] = "ATTR_NAME", e[e.ATTR_QUOTE = 15] = "ATTR_QUOTE", e[e.ATTR_VALUE_TEXT = 16] = "ATTR_VALUE_TEXT", e[e.ATTR_VALUE_INTERPOLATION = 17] = "ATTR_VALUE_INTERPOLATION", e[e.DOC_TYPE_START = 18] = "DOC_TYPE_START", e[e.DOC_TYPE_END = 19] = "DOC_TYPE_END", e[e.EXPANSION_FORM_START = 20] = "EXPANSION_FORM_START", e[e.EXPANSION_CASE_VALUE = 21] = "EXPANSION_CASE_VALUE", e[e.EXPANSION_CASE_EXP_START = 22] = "EXPANSION_CASE_EXP_START", e[e.EXPANSION_CASE_EXP_END = 23] = "EXPANSION_CASE_EXP_END", e[e.EXPANSION_FORM_END = 24] = "EXPANSION_FORM_END", e[e.BLOCK_OPEN_START = 25] = "BLOCK_OPEN_START", e[e.BLOCK_OPEN_END = 26] = "BLOCK_OPEN_END", e[e.BLOCK_CLOSE = 27] = "BLOCK_CLOSE", e[e.BLOCK_PARAMETER = 28] = "BLOCK_PARAMETER", e[e.INCOMPLETE_BLOCK_OPEN = 29] = "INCOMPLETE_BLOCK_OPEN", e[e.LET_START = 30] = "LET_START", e[e.LET_VALUE = 31] = "LET_VALUE", e[e.LET_END = 32] = "LET_END", e[e.INCOMPLETE_LET = 33] = "INCOMPLETE_LET", e[e.COMPONENT_OPEN_START = 34] = "COMPONENT_OPEN_START", e[e.COMPONENT_OPEN_END = 35] = "COMPONENT_OPEN_END", e[e.COMPONENT_OPEN_END_VOID = 36] = "COMPONENT_OPEN_END_VOID", e[e.COMPONENT_CLOSE = 37] = "COMPONENT_CLOSE", e[e.INCOMPLETE_COMPONENT_OPEN = 38] = "INCOMPLETE_COMPONENT_OPEN", e[e.DIRECTIVE_NAME = 39] = "DIRECTIVE_NAME", e[e.DIRECTIVE_OPEN = 40] = "DIRECTIVE_OPEN", e[e.DIRECTIVE_CLOSE = 41] = "DIRECTIVE_CLOSE", e[e.EOF = 42] = "EOF", e;
})({});
var To = class {
  constructor(e, t, r) {
    this.tokens = e, this.errors = t, this.nonNormalizedIcuExpressions = r;
  }
};
function Zi(e, t, r, n = {}) {
  let i = new yo(new pt(e, t), r, n);
  return i.tokenize(), new To(Do(i.tokens), i.errors, i.nonNormalizedIcuExpressions);
}
var bo = /\r\n?/g;
function Te(e) {
  return `Unexpected character "${e === 0 ? "EOF" : String.fromCharCode(e)}"`;
}
function Yi(e) {
  return `Unknown entity "${e}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
}
function wo(e, t) {
  return `Unable to parse entity "${t}" - ${e} character reference entities must end with ";"`;
}
var Rr = (function(e) {
  return e.HEX = "hexadecimal", e.DEC = "decimal", e;
})(Rr || {});
var ko = ["@if", "@else", "@for", "@switch", "@case", "@default", "@empty", "@defer", "@placeholder", "@loading", "@error"];
var ht = { start: "{{", end: "}}" };
var yo = class {
  constructor(e, t, r) {
    this._getTagContentType = t, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._openDirectiveCount = 0, this._inInterpolation = false, this._fullNameStack = [], this.tokens = [], this.errors = [], this.nonNormalizedIcuExpressions = [], this._tokenizeIcu = r.tokenizeExpansionForms || false, this._leadingTriviaCodePoints = r.leadingTriviaChars && r.leadingTriviaChars.map((i) => i.codePointAt(0) || 0), this._canSelfClose = r.canSelfClose || false, this._allowHtmComponentClosingTags = r.allowHtmComponentClosingTags || false;
    let n = r.range || { endPos: e.content.length, startPos: 0, startLine: 0, startCol: 0 };
    this._cursor = r.escapedString ? new Ro(e, n) : new es(e, n), this._preserveLineEndings = r.preserveLineEndings || false, this._i18nNormalizeLineEndingsInICUs = r.i18nNormalizeLineEndingsInICUs || false, this._tokenizeBlocks = r.tokenizeBlocks ?? true, this._tokenizeLet = r.tokenizeLet ?? true, this._selectorlessEnabled = r.selectorlessEnabled ?? false;
    try {
      this._cursor.init();
    } catch (i) {
      this.handleError(i);
    }
  }
  _processCarriageReturns(e) {
    return this._preserveLineEndings ? e : e.replace(bo, `
`);
  }
  tokenize() {
    for (; this._cursor.peek() !== 0; ) {
      let e = this._cursor.clone();
      try {
        if (this._attemptCharCode(60)) if (this._attemptCharCode(33)) this._attemptStr("[CDATA[") ? this._consumeCdata(e) : this._attemptStr("--") ? this._consumeComment(e) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(e) : this._consumeBogusComment(e);
        else if (this._attemptCharCode(47)) this._consumeTagClose(e);
        else {
          let t = this._cursor.clone();
          this._attemptCharCode(63) ? (this._cursor = t, this._consumeBogusComment(e)) : this._consumeTagOpen(e);
        }
        else this._tokenizeLet && this._cursor.peek() === 64 && !this._inInterpolation && this._isLetStart() ? this._consumeLetDeclaration(e) : this._tokenizeBlocks && this._isBlockStart() ? this._consumeBlockStart(e) : this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansionCase() && !this._isInExpansionForm() && this._attemptCharCode(125) ? this._consumeBlockEnd(e) : this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeWithInterpolation(l.TEXT, l.INTERPOLATION, () => this._isTextEnd(), () => this._isTagStart());
      } catch (t) {
        this.handleError(t);
      }
    }
    this._beginToken(l.EOF), this._endToken([]);
  }
  _getBlockName() {
    let e = false, t = this._cursor.clone();
    return this._attemptCharCodeUntilFn((r) => ot(r) ? !e : Oo(r) ? (e = true, false) : true), this._cursor.getChars(t).trim();
  }
  _consumeBlockStart(e) {
    this._requireCharCode(64), this._beginToken(l.BLOCK_OPEN_START, e);
    let t = this._endToken([this._getBlockName()]);
    if (this._cursor.peek() === 40) if (this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(T), this._attemptCharCode(41)) this._attemptCharCodeUntilFn(T);
    else {
      t.type = l.INCOMPLETE_BLOCK_OPEN;
      return;
    }
    this._attemptCharCode(123) ? (this._beginToken(l.BLOCK_OPEN_END), this._endToken([])) : t.type = l.INCOMPLETE_BLOCK_OPEN;
  }
  _consumeBlockEnd(e) {
    this._beginToken(l.BLOCK_CLOSE, e), this._endToken([]);
  }
  _consumeBlockParameters() {
    for (this._attemptCharCodeUntilFn(ji); this._cursor.peek() !== 41 && this._cursor.peek() !== 0; ) {
      this._beginToken(l.BLOCK_PARAMETER);
      let e = this._cursor.clone(), t = null, r = 0;
      for (; this._cursor.peek() !== 59 && this._cursor.peek() !== 0 || t !== null; ) {
        let n = this._cursor.peek();
        if (n === 92) this._cursor.advance();
        else if (n === t) t = null;
        else if (t === null && Ht(n)) t = n;
        else if (n === 40 && t === null) r++;
        else if (n === 41 && t === null) {
          if (r === 0) break;
          r > 0 && r--;
        }
        this._cursor.advance();
      }
      this._endToken([this._cursor.getChars(e)]), this._attemptCharCodeUntilFn(ji);
    }
  }
  _consumeLetDeclaration(e) {
    if (this._requireStr("@let"), this._beginToken(l.LET_START, e), ot(this._cursor.peek())) this._attemptCharCodeUntilFn(T);
    else {
      let r = this._endToken([this._cursor.getChars(e)]);
      r.type = l.INCOMPLETE_LET;
      return;
    }
    let t = this._endToken([this._getLetDeclarationName()]);
    if (this._attemptCharCodeUntilFn(T), !this._attemptCharCode(61)) {
      t.type = l.INCOMPLETE_LET;
      return;
    }
    this._attemptCharCodeUntilFn((r) => T(r) && !ct(r)), this._consumeLetDeclarationValue(), this._cursor.peek() === 59 ? (this._beginToken(l.LET_END), this._endToken([]), this._cursor.advance()) : (t.type = l.INCOMPLETE_LET, t.sourceSpan = this._cursor.getSpan(e));
  }
  _getLetDeclarationName() {
    let e = this._cursor.clone(), t = false;
    return this._attemptCharCodeUntilFn((r) => Be(r) || r === 36 || r === 95 || t && lt(r) ? (t = true, false) : true), this._cursor.getChars(e).trim();
  }
  _consumeLetDeclarationValue() {
    let e = this._cursor.clone();
    for (this._beginToken(l.LET_VALUE, e); this._cursor.peek() !== 0; ) {
      let t = this._cursor.peek();
      if (t === 59) break;
      Ht(t) && (this._cursor.advance(), this._attemptCharCodeUntilFn((r) => r === 92 ? (this._cursor.advance(), false) : r === t)), this._cursor.advance();
    }
    this._endToken([this._cursor.getChars(e)]);
  }
  _tokenizeExpansionForm() {
    if (this.isExpansionFormStart()) return this._consumeExpansionFormStart(), true;
    if (Lo(this._cursor.peek()) && this._isInExpansionForm()) return this._consumeExpansionCaseStart(), true;
    if (this._cursor.peek() === 125) {
      if (this._isInExpansionCase()) return this._consumeExpansionCaseEnd(), true;
      if (this._isInExpansionForm()) return this._consumeExpansionFormEnd(), true;
    }
    return false;
  }
  _beginToken(e, t = this._cursor.clone()) {
    this._currentTokenStart = t, this._currentTokenType = e;
  }
  _endToken(e, t) {
    if (this._currentTokenStart === null) throw new te(this._cursor.getSpan(t), "Programming error - attempted to end a token when there was no start to the token");
    if (this._currentTokenType === null) throw new te(this._cursor.getSpan(this._currentTokenStart), "Programming error - attempted to end a token which has no token type");
    let r = { type: this._currentTokenType, parts: e, sourceSpan: (t ?? this._cursor).getSpan(this._currentTokenStart, this._leadingTriviaCodePoints) };
    return this.tokens.push(r), this._currentTokenStart = null, this._currentTokenType = null, r;
  }
  _createError(e, t) {
    this._isInExpansionForm() && (e += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
    let r = new te(t, e);
    return this._currentTokenStart = null, this._currentTokenType = null, r;
  }
  handleError(e) {
    if (e instanceof qr && (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))), e instanceof te) this.errors.push(e);
    else throw e;
  }
  _attemptCharCode(e) {
    return this._cursor.peek() === e ? (this._cursor.advance(), true) : false;
  }
  _attemptCharCodeCaseInsensitive(e) {
    return Po(this._cursor.peek(), e) ? (this._cursor.advance(), true) : false;
  }
  _requireCharCode(e) {
    let t = this._cursor.clone();
    if (!this._attemptCharCode(e)) throw this._createError(Te(this._cursor.peek()), this._cursor.getSpan(t));
  }
  _attemptStr(e) {
    let t = e.length;
    if (this._cursor.charsLeft() < t) return false;
    let r = this._cursor.clone();
    for (let n = 0; n < t; n++) if (!this._attemptCharCode(e.charCodeAt(n))) return this._cursor = r, false;
    return true;
  }
  _attemptStrCaseInsensitive(e) {
    for (let t = 0; t < e.length; t++) if (!this._attemptCharCodeCaseInsensitive(e.charCodeAt(t))) return false;
    return true;
  }
  _requireStr(e) {
    let t = this._cursor.clone();
    if (!this._attemptStr(e)) throw this._createError(Te(this._cursor.peek()), this._cursor.getSpan(t));
  }
  _requireStrCaseInsensitive(e) {
    let t = this._cursor.clone();
    if (!this._attemptStrCaseInsensitive(e)) throw this._createError(Te(this._cursor.peek()), this._cursor.getSpan(t));
  }
  _attemptCharCodeUntilFn(e) {
    for (; !e(this._cursor.peek()); ) this._cursor.advance();
  }
  _requireCharCodeUntilFn(e, t) {
    let r = this._cursor.clone();
    if (this._attemptCharCodeUntilFn(e), this._cursor.diff(r) < t) throw this._createError(Te(this._cursor.peek()), this._cursor.getSpan(r));
  }
  _attemptUntilChar(e) {
    for (; this._cursor.peek() !== e; ) this._cursor.advance();
  }
  _readChar() {
    let e = String.fromCodePoint(this._cursor.peek());
    return this._cursor.advance(), e;
  }
  _peekStr(e) {
    let t = e.length;
    if (this._cursor.charsLeft() < t) return false;
    let r = this._cursor.clone();
    for (let n = 0; n < t; n++) {
      if (r.peek() !== e.charCodeAt(n)) return false;
      r.advance();
    }
    return true;
  }
  _isBlockStart() {
    return this._cursor.peek() === 64 && ko.some((e) => this._peekStr(e));
  }
  _isLetStart() {
    return this._cursor.peek() === 64 && this._peekStr("@let");
  }
  _consumeEntity(e) {
    this._beginToken(l.ENCODED_ENTITY);
    let t = this._cursor.clone();
    if (this._cursor.advance(), this._attemptCharCode(35)) {
      let r = this._attemptCharCode(120) || this._attemptCharCode(88), n = this._cursor.clone();
      if (this._attemptCharCodeUntilFn(xo), this._cursor.peek() != 59) {
        this._cursor.advance();
        let s = r ? Rr.HEX : Rr.DEC;
        throw this._createError(wo(s, this._cursor.getChars(t)), this._cursor.getSpan());
      }
      let i = this._cursor.getChars(n);
      this._cursor.advance();
      try {
        let s = parseInt(i, r ? 16 : 10);
        this._endToken([String.fromCodePoint(s), this._cursor.getChars(t)]);
      } catch {
        throw this._createError(Yi(this._cursor.getChars(t)), this._cursor.getSpan());
      }
    } else {
      let r = this._cursor.clone();
      if (this._attemptCharCodeUntilFn(No), this._cursor.peek() != 59) this._beginToken(e, t), this._cursor = r, this._endToken(["&"]);
      else {
        let n = this._cursor.getChars(r);
        this._cursor.advance();
        let i = ve.hasOwnProperty(n) && ve[n];
        if (!i) throw this._createError(Yi(n), this._cursor.getSpan(t));
        this._endToken([i, `&${n};`]);
      }
    }
  }
  _consumeRawText(e, t) {
    this._beginToken(e ? l.ESCAPABLE_RAW_TEXT : l.RAW_TEXT);
    let r = [];
    for (; ; ) {
      let n = this._cursor.clone(), i = t();
      if (this._cursor = n, i) break;
      e && this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(r.join(""))]), r.length = 0, this._consumeEntity(l.ESCAPABLE_RAW_TEXT), this._beginToken(l.ESCAPABLE_RAW_TEXT)) : r.push(this._readChar());
    }
    this._endToken([this._processCarriageReturns(r.join(""))]);
  }
  _consumeComment(e) {
    this._beginToken(l.COMMENT_START, e), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("-->")), this._beginToken(l.COMMENT_END), this._requireStr("-->"), this._endToken([]);
  }
  _consumeBogusComment(e) {
    this._beginToken(l.COMMENT_START, e), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === 62), this._beginToken(l.COMMENT_END), this._cursor.advance(), this._endToken([]);
  }
  _consumeCdata(e) {
    this._beginToken(l.CDATA_START, e), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("]]>")), this._beginToken(l.CDATA_END), this._requireStr("]]>"), this._endToken([]);
  }
  _consumeDocType(e) {
    this._beginToken(l.DOC_TYPE_START, e), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === 62), this._beginToken(l.DOC_TYPE_END), this._cursor.advance(), this._endToken([]);
  }
  _consumePrefixAndName(e) {
    let t = this._cursor.clone(), r = "";
    for (; this._cursor.peek() !== 58 && !Ao(this._cursor.peek()); ) this._cursor.advance();
    let n;
    this._cursor.peek() === 58 ? (r = this._cursor.getChars(t), this._cursor.advance(), n = this._cursor.clone()) : n = t, this._requireCharCodeUntilFn(e, r === "" ? 0 : 1);
    let i = this._cursor.getChars(n);
    return [r, i];
  }
  _consumeTagOpen(e) {
    let t, r, n, i, s = [];
    try {
      if (this._selectorlessEnabled && Gt(this._cursor.peek())) i = this._consumeComponentOpenStart(e), [n, r, t] = i.parts, r && (n += `:${r}`), t && (n += `:${t}`), this._attemptCharCodeUntilFn(T);
      else {
        if (!Be(this._cursor.peek())) throw this._createError(Te(this._cursor.peek()), this._cursor.getSpan(e));
        i = this._consumeTagOpenStart(e), r = i.parts[0], t = n = i.parts[1], this._attemptCharCodeUntilFn(T);
      }
      for (; !Qi(this._cursor.peek()); ) if (this._selectorlessEnabled && this._cursor.peek() === 64) {
        let o = this._cursor.clone(), c = o.clone();
        c.advance(), Gt(c.peek()) && this._consumeDirective(o, c);
      } else {
        let o = this._consumeAttribute();
        s.push(o);
      }
      i.type === l.COMPONENT_OPEN_START ? this._consumeComponentOpenEnd() : this._consumeTagOpenEnd();
    } catch (o) {
      if (o instanceof te) {
        i ? i.type = i.type === l.COMPONENT_OPEN_START ? l.INCOMPLETE_COMPONENT_OPEN : l.INCOMPLETE_TAG_OPEN : (this._beginToken(l.TEXT, e), this._endToken(["<"]));
        return;
      }
      throw o;
    }
    if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === l.TAG_OPEN_END_VOID) return;
    let a = this._getTagContentType(t, r, this._fullNameStack.length > 0, s);
    this._handleFullNameStackForTagOpen(r, t), a === R.RAW_TEXT ? this._consumeRawTextWithTagClose(r, i, n, false) : a === R.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(r, i, n, true);
  }
  _consumeRawTextWithTagClose(e, t, r, n) {
    this._consumeRawText(n, () => !this._attemptCharCode(60) || !this._attemptCharCode(47) || (this._attemptCharCodeUntilFn(T), !this._attemptStrCaseInsensitive(e && t.type !== l.COMPONENT_OPEN_START ? `${e}:${r}` : r)) ? false : (this._attemptCharCodeUntilFn(T), this._attemptCharCode(62))), this._beginToken(t.type === l.COMPONENT_OPEN_START ? l.COMPONENT_CLOSE : l.TAG_CLOSE), this._requireCharCodeUntilFn((i) => i === 62, 3), this._cursor.advance(), this._endToken(t.parts), this._handleFullNameStackForTagClose(e, r);
  }
  _consumeTagOpenStart(e) {
    this._beginToken(l.TAG_OPEN_START, e);
    let t = this._consumePrefixAndName(be);
    return this._endToken(t);
  }
  _consumeComponentOpenStart(e) {
    this._beginToken(l.COMPONENT_OPEN_START, e);
    let t = this._consumeComponentName();
    return this._endToken(t);
  }
  _consumeComponentName() {
    let e = this._cursor.clone();
    for (; Ki(this._cursor.peek()); ) this._cursor.advance();
    let t = this._cursor.getChars(e), r = "", n = "";
    return this._cursor.peek() === 58 && (this._cursor.advance(), [r, n] = this._consumePrefixAndName(be)), [t, r, n];
  }
  _consumeAttribute() {
    let [e, t] = this._consumeAttributeName(), r;
    return this._attemptCharCodeUntilFn(T), this._attemptCharCode(61) && (this._attemptCharCodeUntilFn(T), r = this._consumeAttributeValue()), this._attemptCharCodeUntilFn(T), { prefix: e, name: t, value: r };
  }
  _consumeAttributeName() {
    let e = this._cursor.peek();
    if (e === 39 || e === 34) throw this._createError(Te(e), this._cursor.getSpan());
    this._beginToken(l.ATTR_NAME);
    let t;
    if (this._openDirectiveCount > 0) {
      let n = 0;
      t = (i) => {
        if (this._openDirectiveCount > 0) {
          if (i === 40) n++;
          else if (i === 41) {
            if (n === 0) return true;
            n--;
          }
        }
        return be(i);
      };
    } else if (e === 91) {
      let n = 0;
      t = (i) => (i === 91 ? n++ : i === 93 && n--, n <= 0 ? be(i) : ct(i));
    } else t = be;
    let r = this._consumePrefixAndName(t);
    return this._endToken(r), r;
  }
  _consumeAttributeValue() {
    let e;
    if (this._cursor.peek() === 39 || this._cursor.peek() === 34) {
      let t = this._cursor.peek();
      this._consumeQuote(t);
      let r = () => this._cursor.peek() === t;
      e = this._consumeWithInterpolation(l.ATTR_VALUE_TEXT, l.ATTR_VALUE_INTERPOLATION, r, r), this._consumeQuote(t);
    } else {
      let t = () => be(this._cursor.peek());
      e = this._consumeWithInterpolation(l.ATTR_VALUE_TEXT, l.ATTR_VALUE_INTERPOLATION, t, t);
    }
    return e;
  }
  _consumeQuote(e) {
    this._beginToken(l.ATTR_QUOTE), this._requireCharCode(e), this._endToken([String.fromCodePoint(e)]);
  }
  _consumeTagOpenEnd() {
    let e = this._attemptCharCode(47) ? l.TAG_OPEN_END_VOID : l.TAG_OPEN_END;
    this._beginToken(e), this._requireCharCode(62), this._endToken([]);
  }
  _consumeComponentOpenEnd() {
    let e = this._attemptCharCode(47) ? l.COMPONENT_OPEN_END_VOID : l.COMPONENT_OPEN_END;
    this._beginToken(e), this._requireCharCode(62), this._endToken([]);
  }
  _consumeTagClose(e) {
    if (this._selectorlessEnabled) {
      let t = e.clone();
      for (; t.peek() !== 62 && !Gt(t.peek()); ) t.advance();
      if (Gt(t.peek())) {
        this._beginToken(l.COMPONENT_CLOSE, e);
        let r = this._consumeComponentName();
        this._attemptCharCodeUntilFn(T), this._requireCharCode(62), this._endToken(r);
        return;
      }
    }
    if (this._beginToken(l.TAG_CLOSE, e), this._attemptCharCodeUntilFn(T), this._allowHtmComponentClosingTags && this._attemptCharCode(47)) this._attemptCharCodeUntilFn(T), this._requireCharCode(62), this._endToken([]);
    else {
      let [t, r] = this._consumePrefixAndName(be);
      this._attemptCharCodeUntilFn(T), this._requireCharCode(62), this._endToken([t, r]), this._handleFullNameStackForTagClose(t, r);
    }
  }
  _consumeExpansionFormStart() {
    this._beginToken(l.EXPANSION_FORM_START), this._requireCharCode(123), this._endToken([]), this._expansionCaseStack.push(l.EXPANSION_FORM_START), this._beginToken(l.RAW_TEXT);
    let e = this._readUntil(44), t = this._processCarriageReturns(e);
    if (this._i18nNormalizeLineEndingsInICUs) this._endToken([t]);
    else {
      let n = this._endToken([e]);
      t !== e && this.nonNormalizedIcuExpressions.push(n);
    }
    this._requireCharCode(44), this._attemptCharCodeUntilFn(T), this._beginToken(l.RAW_TEXT);
    let r = this._readUntil(44);
    this._endToken([r]), this._requireCharCode(44), this._attemptCharCodeUntilFn(T);
  }
  _consumeExpansionCaseStart() {
    this._beginToken(l.EXPANSION_CASE_VALUE);
    let e = this._readUntil(123).trim();
    this._endToken([e]), this._attemptCharCodeUntilFn(T), this._beginToken(l.EXPANSION_CASE_EXP_START), this._requireCharCode(123), this._endToken([]), this._attemptCharCodeUntilFn(T), this._expansionCaseStack.push(l.EXPANSION_CASE_EXP_START);
  }
  _consumeExpansionCaseEnd() {
    this._beginToken(l.EXPANSION_CASE_EXP_END), this._requireCharCode(125), this._endToken([]), this._attemptCharCodeUntilFn(T), this._expansionCaseStack.pop();
  }
  _consumeExpansionFormEnd() {
    this._beginToken(l.EXPANSION_FORM_END), this._requireCharCode(125), this._endToken([]), this._expansionCaseStack.pop();
  }
  _consumeWithInterpolation(e, t, r, n) {
    this._beginToken(e);
    let i = [];
    for (; !r(); ) {
      let a = this._cursor.clone();
      this._attemptStr(ht.start) ? (this._endToken([this._processCarriageReturns(i.join(""))], a), i.length = 0, this._consumeInterpolation(t, a, n), this._beginToken(e)) : this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(i.join(""))]), i.length = 0, this._consumeEntity(e), this._beginToken(e)) : i.push(this._readChar());
    }
    this._inInterpolation = false;
    let s = this._processCarriageReturns(i.join(""));
    return this._endToken([s]), s;
  }
  _consumeInterpolation(e, t, r) {
    let n = [];
    this._beginToken(e, t), n.push(ht.start);
    let i = this._cursor.clone(), s = null, a = false;
    for (; this._cursor.peek() !== 0 && (r === null || !r()); ) {
      let o = this._cursor.clone();
      if (this._isTagStart()) {
        this._cursor = o, n.push(this._getProcessedChars(i, o)), this._endToken(n);
        return;
      }
      if (s === null) if (this._attemptStr(ht.end)) {
        n.push(this._getProcessedChars(i, o)), n.push(ht.end), this._endToken(n);
        return;
      } else this._attemptStr("//") && (a = true);
      let c = this._cursor.peek();
      this._cursor.advance(), c === 92 ? this._cursor.advance() : c === s ? s = null : !a && s === null && Ht(c) && (s = c);
    }
    n.push(this._getProcessedChars(i, this._cursor)), this._endToken(n);
  }
  _consumeDirective(e, t) {
    for (this._requireCharCode(64), this._cursor.advance(); Ki(this._cursor.peek()); ) this._cursor.advance();
    this._beginToken(l.DIRECTIVE_NAME, e);
    let r = this._cursor.getChars(t);
    if (this._endToken([r]), this._attemptCharCodeUntilFn(T), this._cursor.peek() === 40) {
      for (this._openDirectiveCount++, this._beginToken(l.DIRECTIVE_OPEN), this._cursor.advance(), this._endToken([]), this._attemptCharCodeUntilFn(T); !Qi(this._cursor.peek()) && this._cursor.peek() !== 41; ) this._consumeAttribute();
      if (this._attemptCharCodeUntilFn(T), this._openDirectiveCount--, this._cursor.peek() !== 41) {
        if (this._cursor.peek() === 62 || this._cursor.peek() === 47) return;
        throw this._createError(Te(this._cursor.peek()), this._cursor.getSpan(e));
      }
      this._beginToken(l.DIRECTIVE_CLOSE), this._cursor.advance(), this._endToken([]), this._attemptCharCodeUntilFn(T);
    }
  }
  _getProcessedChars(e, t) {
    return this._processCarriageReturns(t.getChars(e));
  }
  _isTextEnd() {
    return !!(this._isTagStart() || this._cursor.peek() === 0 || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === 125 && this._isInExpansionCase()) || this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansion() && (this._isBlockStart() || this._isLetStart() || this._cursor.peek() === 125));
  }
  _isTagStart() {
    if (this._cursor.peek() === 60) {
      let e = this._cursor.clone();
      e.advance();
      let t = e.peek();
      if (97 <= t && t <= 122 || 65 <= t && t <= 90 || t === 47 || t === 33) return true;
    }
    return false;
  }
  _readUntil(e) {
    let t = this._cursor.clone();
    return this._attemptUntilChar(e), this._cursor.getChars(t);
  }
  _isInExpansion() {
    return this._isInExpansionCase() || this._isInExpansionForm();
  }
  _isInExpansionCase() {
    return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === l.EXPANSION_CASE_EXP_START;
  }
  _isInExpansionForm() {
    return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === l.EXPANSION_FORM_START;
  }
  isExpansionFormStart() {
    if (this._cursor.peek() !== 123) return false;
    let e = this._cursor.clone(), t = this._attemptStr(ht.start);
    return this._cursor = e, !t;
  }
  _handleFullNameStackForTagOpen(e, t) {
    let r = _e(e, t);
    (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === r) && this._fullNameStack.push(r);
  }
  _handleFullNameStackForTagClose(e, t) {
    let r = _e(e, t);
    this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === r && this._fullNameStack.pop();
  }
};
function T(e) {
  return !ot(e) || e === 0;
}
function be(e) {
  return ot(e) || e === 62 || e === 60 || e === 47 || e === 39 || e === 34 || e === 61 || e === 0;
}
function Ao(e) {
  return (e < 97 || 122 < e) && (e < 65 || 90 < e) && (e < 48 || e > 57);
}
function xo(e) {
  return e === 59 || e === 0 || !Di(e);
}
function No(e) {
  return e === 59 || e === 0 || !Be(e);
}
function Lo(e) {
  return e !== 125;
}
function Po(e, t) {
  return Xi(e) === Xi(t);
}
function Xi(e) {
  return e >= 97 && e <= 122 ? e - 97 + 65 : e;
}
function Oo(e) {
  return Be(e) || lt(e) || e === 95;
}
function ji(e) {
  return e !== 59 && T(e);
}
function Gt(e) {
  return e === 95 || e >= 65 && e <= 90;
}
function Ki(e) {
  return Be(e) || lt(e) || e === 95;
}
function Qi(e) {
  return e === 47 || e === 62 || e === 60 || e === 0;
}
function Do(e) {
  let t = [], r;
  for (let n = 0; n < e.length; n++) {
    let i = e[n];
    r && r.type === l.TEXT && i.type === l.TEXT || r && r.type === l.ATTR_VALUE_TEXT && i.type === l.ATTR_VALUE_TEXT ? (r.parts[0] += i.parts[0], r.sourceSpan.end = i.sourceSpan.end) : (r = i, t.push(r));
  }
  return t;
}
var es = class Ir {
  constructor(t, r) {
    if (t instanceof Ir) {
      this.file = t.file, this.input = t.input, this.end = t.end;
      let n = t.state;
      this.state = { peek: n.peek, offset: n.offset, line: n.line, column: n.column };
    } else {
      if (!r) throw new Error("Programming error: the range argument must be provided with a file argument.");
      this.file = t, this.input = t.content, this.end = r.endPos, this.state = { peek: -1, offset: r.startPos, line: r.startLine, column: r.startCol };
    }
  }
  clone() {
    return new Ir(this);
  }
  peek() {
    return this.state.peek;
  }
  charsLeft() {
    return this.end - this.state.offset;
  }
  diff(t) {
    return this.state.offset - t.state.offset;
  }
  advance() {
    this.advanceState(this.state);
  }
  init() {
    this.updatePeek(this.state);
  }
  getSpan(t, r) {
    t = t || this;
    let n = t;
    if (r) for (; this.diff(t) > 0 && r.indexOf(t.peek()) !== -1; ) n === t && (t = t.clone()), t.advance();
    let i = this.locationFromCursor(t);
    return new h2(i, this.locationFromCursor(this), n !== t ? this.locationFromCursor(n) : i);
  }
  getChars(t) {
    return this.input.substring(t.state.offset, this.state.offset);
  }
  charAt(t) {
    return this.input.charCodeAt(t);
  }
  advanceState(t) {
    if (t.offset >= this.end) throw this.state = t, new qr('Unexpected character "EOF"', this);
    let r = this.charAt(t.offset);
    r === 10 ? (t.line++, t.column = 0) : ct(r) || t.column++, t.offset++, this.updatePeek(t);
  }
  updatePeek(t) {
    t.peek = t.offset >= this.end ? 0 : this.charAt(t.offset);
  }
  locationFromCursor(t) {
    return new Fe(t.file, t.state.offset, t.state.line, t.state.column);
  }
};
var Ro = class Mr extends es {
  constructor(t, r) {
    t instanceof Mr ? (super(t), this.internalState = { ...t.internalState }) : (super(t, r), this.internalState = this.state);
  }
  advance() {
    this.state = this.internalState, super.advance(), this.processEscapeSequence();
  }
  init() {
    super.init(), this.processEscapeSequence();
  }
  clone() {
    return new Mr(this);
  }
  getChars(t) {
    let r = t.clone(), n = "";
    for (; r.internalState.offset < this.internalState.offset; ) n += String.fromCodePoint(r.peek()), r.advance();
    return n;
  }
  processEscapeSequence() {
    let t = () => this.internalState.peek;
    if (t() === 92) if (this.internalState = { ...this.state }, this.advanceState(this.internalState), t() === 110) this.state.peek = 10;
    else if (t() === 114) this.state.peek = 13;
    else if (t() === 118) this.state.peek = 11;
    else if (t() === 116) this.state.peek = 9;
    else if (t() === 98) this.state.peek = 8;
    else if (t() === 102) this.state.peek = 12;
    else if (t() === 117) if (this.advanceState(this.internalState), t() === 123) {
      this.advanceState(this.internalState);
      let r = this.clone(), n = 0;
      for (; t() !== 125; ) this.advanceState(this.internalState), n++;
      this.state.peek = this.decodeHexDigits(r, n);
    } else {
      let r = this.clone();
      this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(r, 4);
    }
    else if (t() === 120) {
      this.advanceState(this.internalState);
      let r = this.clone();
      this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(r, 2);
    } else if (yr(t())) {
      let r = "", n = 0, i = this.clone();
      for (; yr(t()) && n < 3; ) i = this.clone(), r += String.fromCodePoint(t()), this.advanceState(this.internalState), n++;
      this.state.peek = parseInt(r, 8), this.internalState = i.internalState;
    } else ct(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
  }
  decodeHexDigits(t, r) {
    let n = this.input.slice(t.internalState.offset, t.internalState.offset + r), i = parseInt(n, 16);
    if (isNaN(i)) throw t.state = t.internalState, new qr("Invalid hexadecimal escape sequence", t);
    return i;
  }
};
var qr = class extends Error {
  constructor(e, t) {
    super(e), this.msg = e, this.cursor = t, Object.setPrototypeOf(this, new.target.prototype);
  }
};
var N = class ns extends te {
  static create(t, r, n) {
    return new ns(t, r, n);
  }
  constructor(t, r, n) {
    super(r, n), this.elementName = t;
  }
};
var Io = class {
  constructor(e, t) {
    this.rootNodes = e, this.errors = t;
  }
};
var is = class {
  constructor(e) {
    this.getTagDefinition = e;
  }
  parse(e, t, r, n = false, i) {
    let s = (m) => (g, ...E) => m(g.toLowerCase(), ...E), a = n ? this.getTagDefinition : s(this.getTagDefinition), o = (m) => a(m).getContentType(), c = n ? i : s(i), u = Zi(e, t, i ? (m, g, E, P2) => {
      let $2 = c(m, g, E, P2);
      return $2 !== void 0 ? $2 : o(m);
    } : o, r), p = r && r.canSelfClose || false, d = r && r.allowHtmComponentClosingTags || false, S2 = new Mo(u.tokens, a, p, d, n);
    return S2.build(), new Io(S2.rootNodes, [...u.errors, ...S2.errors]);
  }
};
var Mo = class ss {
  constructor(t, r, n, i, s) {
    this.tokens = t, this.tagDefinitionResolver = r, this.canSelfClose = n, this.allowHtmComponentClosingTags = i, this.isTagNameCaseSensitive = s, this._index = -1, this._containerStack = [], this.rootNodes = [], this.errors = [], this._advance();
  }
  build() {
    for (; this._peek.type !== l.EOF; ) this._peek.type === l.TAG_OPEN_START || this._peek.type === l.INCOMPLETE_TAG_OPEN ? this._consumeElementStartTag(this._advance()) : this._peek.type === l.TAG_CLOSE ? (this._closeVoidElement(), this._consumeElementEndTag(this._advance())) : this._peek.type === l.CDATA_START ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === l.COMMENT_START ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === l.TEXT || this._peek.type === l.RAW_TEXT || this._peek.type === l.ESCAPABLE_RAW_TEXT ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === l.EXPANSION_FORM_START ? this._consumeExpansion(this._advance()) : this._peek.type === l.BLOCK_OPEN_START ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance())) : this._peek.type === l.BLOCK_CLOSE ? (this._closeVoidElement(), this._consumeBlockClose(this._advance())) : this._peek.type === l.INCOMPLETE_BLOCK_OPEN ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance())) : this._peek.type === l.LET_START ? (this._closeVoidElement(), this._consumeLet(this._advance())) : this._peek.type === l.DOC_TYPE_START ? this._consumeDocType(this._advance()) : this._peek.type === l.INCOMPLETE_LET ? (this._closeVoidElement(), this._consumeIncompleteLet(this._advance())) : this._peek.type === l.COMPONENT_OPEN_START || this._peek.type === l.INCOMPLETE_COMPONENT_OPEN ? this._consumeComponentStartTag(this._advance()) : this._peek.type === l.COMPONENT_CLOSE ? this._consumeComponentEndTag(this._advance()) : this._advance();
    for (let t of this._containerStack) t instanceof Ce && this.errors.push(N.create(t.name, t.sourceSpan, `Unclosed block "${t.name}"`));
  }
  _advance() {
    let t = this._peek;
    return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], t;
  }
  _advanceIf(t) {
    return this._peek.type === t ? this._advance() : null;
  }
  _consumeCdata(t) {
    let r = this._advance(), n = this._getText(r), i = this._advanceIf(l.CDATA_END);
    this._addToParent(new Bi(n, new h2(t.sourceSpan.start, (i || r).sourceSpan.end), [r]));
  }
  _consumeComment(t) {
    let r = this._advanceIf(l.RAW_TEXT), n = this._advanceIf(l.COMMENT_END), i = r != null ? r.parts[0].trim() : null, s = n == null ? t.sourceSpan : new h2(t.sourceSpan.start, n.sourceSpan.end, t.sourceSpan.fullStart);
    this._addToParent(new Vi(i, s));
  }
  _consumeDocType(t) {
    let r = this._advanceIf(l.RAW_TEXT), n = this._advanceIf(l.DOC_TYPE_END), i = r != null ? r.parts[0].trim() : null, s = new h2(t.sourceSpan.start, (n || r || t).sourceSpan.end);
    this._addToParent(new Ui(i, s));
  }
  _consumeExpansion(t) {
    let r = this._advance(), n = this._advance(), i = [];
    for (; this._peek.type === l.EXPANSION_CASE_VALUE; ) {
      let a = this._parseExpansionCase();
      if (!a) return;
      i.push(a);
    }
    if (this._peek.type !== l.EXPANSION_FORM_END) {
      this.errors.push(N.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
      return;
    }
    let s = new h2(t.sourceSpan.start, this._peek.sourceSpan.end, t.sourceSpan.fullStart);
    this._addToParent(new Fi(r.parts[0], n.parts[0], i, s, r.sourceSpan)), this._advance();
  }
  _parseExpansionCase() {
    let t = this._advance();
    if (this._peek.type !== l.EXPANSION_CASE_EXP_START) return this.errors.push(N.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
    let r = this._advance(), n = this._collectExpansionExpTokens(r);
    if (!n) return null;
    let i = this._advance();
    n.push({ type: l.EOF, parts: [], sourceSpan: i.sourceSpan });
    let s = new ss(n, this.tagDefinitionResolver, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive);
    if (s.build(), s.errors.length > 0) return this.errors = this.errors.concat(s.errors), null;
    let a = new h2(t.sourceSpan.start, i.sourceSpan.end, t.sourceSpan.fullStart), o = new h2(r.sourceSpan.start, i.sourceSpan.end, r.sourceSpan.fullStart);
    return new qi(t.parts[0], s.rootNodes, a, t.sourceSpan, o);
  }
  _collectExpansionExpTokens(t) {
    let r = [], n = [l.EXPANSION_CASE_EXP_START];
    for (; ; ) {
      if ((this._peek.type === l.EXPANSION_FORM_START || this._peek.type === l.EXPANSION_CASE_EXP_START) && n.push(this._peek.type), this._peek.type === l.EXPANSION_CASE_EXP_END) if (ts(n, l.EXPANSION_CASE_EXP_START)) {
        if (n.pop(), n.length === 0) return r;
      } else return this.errors.push(N.create(null, t.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      if (this._peek.type === l.EXPANSION_FORM_END) if (ts(n, l.EXPANSION_FORM_START)) n.pop();
      else return this.errors.push(N.create(null, t.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      if (this._peek.type === l.EOF) return this.errors.push(N.create(null, t.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      r.push(this._advance());
    }
  }
  _getText(t) {
    let r = t.parts[0];
    if (r.length > 0 && r[0] == `
`) {
      var n;
      let i = this._getClosestElementLikeParent();
      i != null && i.children.length == 0 && (!((n = this._getTagDefinition(i)) === null || n === void 0) && n.ignoreFirstLf) && (r = r.substring(1));
    }
    return r;
  }
  _consumeText(t) {
    let r = [t], n = t.sourceSpan, i = t.parts[0];
    if (i.length > 0 && i[0] === `
`) {
      var s;
      let a = this._getContainer();
      a != null && a.children.length === 0 && (!((s = this._getTagDefinition(a)) === null || s === void 0) && s.ignoreFirstLf) && (i = i.substring(1), r[0] = { type: t.type, sourceSpan: t.sourceSpan, parts: [i] });
    }
    for (; this._peek.type === l.INTERPOLATION || this._peek.type === l.TEXT || this._peek.type === l.ENCODED_ENTITY; ) t = this._advance(), r.push(t), t.type === l.INTERPOLATION ? i += t.parts.join("").replace(/&([^;]+);/g, rs) : t.type === l.ENCODED_ENTITY ? i += t.parts[0] : i += t.parts.join("");
    if (i.length > 0) {
      let a = t.sourceSpan;
      this._addToParent(new Mi(i, new h2(n.start, a.end, n.fullStart, n.details), r));
    }
  }
  _closeVoidElement() {
    var t;
    let r = this._getContainer();
    r !== null && (!((t = this._getTagDefinition(r)) === null || t === void 0) && t.isVoid) && this._containerStack.pop();
  }
  _consumeElementStartTag(t) {
    var r;
    let n = [], i = [];
    this._consumeAttributesAndDirectives(n, i);
    let s = this._getElementFullName(t, this._getClosestElementLikeParent()), a = this._getTagDefinition(s), o = false;
    if (this._peek.type === l.TAG_OPEN_END_VOID) {
      this._advance(), o = true;
      let E = this._getTagDefinition(s);
      this.canSelfClose || E?.canSelfClose || Ie(s) !== null || E?.isVoid || this.errors.push(N.create(s, t.sourceSpan, `Only void, custom and foreign elements can be self closed "${t.parts[1]}"`));
    } else this._peek.type === l.TAG_OPEN_END && (this._advance(), o = false);
    let c = this._peek.sourceSpan.fullStart, u = new h2(t.sourceSpan.start, c, t.sourceSpan.fullStart), p = new h2(t.sourceSpan.start, c, t.sourceSpan.fullStart), d = new h2(t.sourceSpan.start.moveBy(1), t.sourceSpan.end), S2 = new re(s, n, i, [], o, u, p, void 0, d, a?.isVoid ?? false), m = this._getContainer(), g = m !== null && !!(!((r = this._getTagDefinition(m)) === null || r === void 0) && r.isClosedByChild(S2.name));
    this._pushContainer(S2, g), o ? this._popContainer(s, re, u) : t.type === l.INCOMPLETE_TAG_OPEN && (this._popContainer(s, re, null), this.errors.push(N.create(s, u, `Opening tag "${s}" not terminated.`)));
  }
  _consumeComponentStartTag(t) {
    var r;
    let n = t.parts[0], i = [], s = [];
    this._consumeAttributesAndDirectives(i, s);
    let a = this._getClosestElementLikeParent(), o = this._getComponentTagName(t, a), c = this._getComponentFullName(t, a), u = this._peek.type === l.COMPONENT_OPEN_END_VOID;
    this._advance();
    let p = this._peek.sourceSpan.fullStart, d = new h2(t.sourceSpan.start, p, t.sourceSpan.fullStart), S2 = new h2(t.sourceSpan.start, p, t.sourceSpan.fullStart), m = new Q(n, o, c, i, s, [], u, d, S2, void 0), g = this._getContainer(), E = g !== null && m.tagName !== null && !!(!((r = this._getTagDefinition(g)) === null || r === void 0) && r.isClosedByChild(m.tagName));
    this._pushContainer(m, E), u ? this._popContainer(c, Q, d) : t.type === l.INCOMPLETE_COMPONENT_OPEN && (this._popContainer(c, Q, null), this.errors.push(N.create(c, d, `Opening tag "${c}" not terminated.`)));
  }
  _consumeAttributesAndDirectives(t, r) {
    for (; this._peek.type === l.ATTR_NAME || this._peek.type === l.DIRECTIVE_NAME; ) this._peek.type === l.DIRECTIVE_NAME ? r.push(this._consumeDirective(this._peek)) : t.push(this._consumeAttr(this._advance()));
  }
  _consumeComponentEndTag(t) {
    let r = this._getComponentFullName(t, this._getClosestElementLikeParent());
    if (!this._popContainer(r, Q, t.sourceSpan)) {
      let n = this._containerStack[this._containerStack.length - 1], i;
      n instanceof Q && n.componentName === t.parts[0] ? i = `, did you mean "${n.fullName}"?` : i = ". It may happen when the tag has already been closed by another tag.";
      let s = `Unexpected closing tag "${r}"${i}`;
      this.errors.push(N.create(r, t.sourceSpan, s));
    }
  }
  _getTagDefinition(t) {
    return typeof t == "string" ? this.tagDefinitionResolver(t) : t instanceof re ? this.tagDefinitionResolver(t.name) : t instanceof Q && t.tagName !== null ? this.tagDefinitionResolver(t.tagName) : null;
  }
  _pushContainer(t, r) {
    r && this._containerStack.pop(), this._addToParent(t), this._containerStack.push(t);
  }
  _consumeElementEndTag(t) {
    var r;
    let n = this.allowHtmComponentClosingTags && t.parts.length === 0 ? null : this._getElementFullName(t, this._getClosestElementLikeParent());
    if (n && (!((r = this._getTagDefinition(n)) === null || r === void 0) && r.isVoid)) this.errors.push(N.create(n, t.sourceSpan, `Void elements do not have end tags "${t.parts[1]}"`));
    else if (!this._popContainer(n, re, t.sourceSpan)) {
      let i = `Unexpected closing tag "${n}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
      this.errors.push(N.create(n, t.sourceSpan, i));
    }
  }
  _popContainer(t, r, n) {
    let i = false;
    for (let a = this._containerStack.length - 1; a >= 0; a--) {
      var s;
      let o = this._containerStack[a], c = o instanceof Q ? o.fullName : o.name;
      if (Ie(c) ? c === t : (c === t || t === null) && o instanceof r) return o.endSourceSpan = n, o.sourceSpan.end = n !== null ? n.end : o.sourceSpan.end, this._containerStack.splice(a, this._containerStack.length - a), !i;
      (o instanceof Ce || !(!((s = this._getTagDefinition(o)) === null || s === void 0) && s.closedByParent)) && (i = true);
    }
    return false;
  }
  _consumeAttr(t) {
    let r = _e(t.parts[0], t.parts[1]), n = t.sourceSpan.end, i;
    this._peek.type === l.ATTR_QUOTE && (i = this._advance());
    let s = "", a = [], o, c;
    if (this._peek.type === l.ATTR_VALUE_TEXT) for (o = this._peek.sourceSpan, c = this._peek.sourceSpan.end; this._peek.type === l.ATTR_VALUE_TEXT || this._peek.type === l.ATTR_VALUE_INTERPOLATION || this._peek.type === l.ENCODED_ENTITY; ) {
      let p = this._advance();
      a.push(p), p.type === l.ATTR_VALUE_INTERPOLATION ? s += p.parts.join("").replace(/&([^;]+);/g, rs) : p.type === l.ENCODED_ENTITY ? s += p.parts[0] : s += p.parts.join(""), c = n = p.sourceSpan.end;
    }
    this._peek.type === l.ATTR_QUOTE && (c = n = this._advance().sourceSpan.end);
    let u = o && c && new h2(i?.sourceSpan.start ?? o.start, c, i?.sourceSpan.fullStart ?? o.fullStart);
    return new Hi(r, s, new h2(t.sourceSpan.start, n, t.sourceSpan.fullStart), t.sourceSpan, u, a.length > 0 ? a : void 0, void 0);
  }
  _consumeDirective(t) {
    let r = [], n = t.sourceSpan.end, i = null;
    if (this._advance(), this._peek.type === l.DIRECTIVE_OPEN) {
      for (n = this._peek.sourceSpan.end, this._advance(); this._peek.type === l.ATTR_NAME; ) r.push(this._consumeAttr(this._advance()));
      this._peek.type === l.DIRECTIVE_CLOSE ? (i = this._peek.sourceSpan, this._advance()) : this.errors.push(N.create(null, t.sourceSpan, "Unterminated directive definition"));
    }
    let s = new h2(t.sourceSpan.start, n, t.sourceSpan.fullStart), a = new h2(s.start, i === null ? t.sourceSpan.end : i.end, s.fullStart);
    return new Wi(t.parts[0], r, a, s, i);
  }
  _consumeBlockOpen(t) {
    let r = [];
    for (; this._peek.type === l.BLOCK_PARAMETER; ) {
      let o = this._advance();
      r.push(new Ar(o.parts[0], o.sourceSpan));
    }
    this._peek.type === l.BLOCK_OPEN_END && this._advance();
    let n = this._peek.sourceSpan.fullStart, i = new h2(t.sourceSpan.start, n, t.sourceSpan.fullStart), s = new h2(t.sourceSpan.start, n, t.sourceSpan.fullStart), a = new Ce(t.parts[0], r, [], i, t.sourceSpan, s);
    this._pushContainer(a, false);
  }
  _consumeBlockClose(t) {
    this._popContainer(null, Ce, t.sourceSpan) || this.errors.push(N.create(null, t.sourceSpan, 'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'));
  }
  _consumeIncompleteBlock(t) {
    let r = [];
    for (; this._peek.type === l.BLOCK_PARAMETER; ) {
      let o = this._advance();
      r.push(new Ar(o.parts[0], o.sourceSpan));
    }
    let n = this._peek.sourceSpan.fullStart, i = new h2(t.sourceSpan.start, n, t.sourceSpan.fullStart), s = new h2(t.sourceSpan.start, n, t.sourceSpan.fullStart), a = new Ce(t.parts[0], r, [], i, t.sourceSpan, s);
    this._pushContainer(a, false), this._popContainer(null, Ce, null), this.errors.push(N.create(t.parts[0], i, `Incomplete block "${t.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`));
  }
  _consumeLet(t) {
    let r = t.parts[0], n, i;
    if (this._peek.type !== l.LET_VALUE) {
      this.errors.push(N.create(t.parts[0], t.sourceSpan, `Invalid @let declaration "${r}". Declaration must have a value.`));
      return;
    } else n = this._advance();
    if (this._peek.type !== l.LET_END) {
      this.errors.push(N.create(t.parts[0], t.sourceSpan, `Unterminated @let declaration "${r}". Declaration must be terminated with a semicolon.`));
      return;
    } else i = this._advance();
    let s = i.sourceSpan.fullStart, a = new h2(t.sourceSpan.start, s, t.sourceSpan.fullStart), o = t.sourceSpan.toString().lastIndexOf(r), c = new h2(t.sourceSpan.start.moveBy(o), t.sourceSpan.end), u = new xr(r, n.parts[0], a, c, n.sourceSpan);
    this._addToParent(u);
  }
  _consumeIncompleteLet(t) {
    let r = t.parts[0] ?? "", n = r ? ` "${r}"` : "";
    if (r.length > 0) {
      let i = t.sourceSpan.toString().lastIndexOf(r), s = new h2(t.sourceSpan.start.moveBy(i), t.sourceSpan.end), a = new h2(t.sourceSpan.start, t.sourceSpan.start.moveBy(0)), o = new xr(r, "", t.sourceSpan, s, a);
      this._addToParent(o);
    }
    this.errors.push(N.create(t.parts[0], t.sourceSpan, `Incomplete @let declaration${n}. @let declarations must be written as \`@let <name> = <value>;\``));
  }
  _getContainer() {
    return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null;
  }
  _getClosestElementLikeParent() {
    for (let t = this._containerStack.length - 1; t > -1; t--) {
      let r = this._containerStack[t];
      if (r instanceof re || r instanceof Q) return r;
    }
    return null;
  }
  _addToParent(t) {
    let r = this._getContainer();
    r === null ? this.rootNodes.push(t) : r.children.push(t);
  }
  _getElementFullName(t, r) {
    return _e(this._getPrefix(t, r), t.parts[1]);
  }
  _getComponentFullName(t, r) {
    let n = t.parts[0], i = this._getComponentTagName(t, r);
    return i === null ? n : i.startsWith(":") ? n + i : `${n}:${i}`;
  }
  _getComponentTagName(t, r) {
    let n = this._getPrefix(t, r), i = t.parts[2];
    return !n && !i ? null : !n && i ? i : _e(n, i || "ng-component");
  }
  _getPrefix(t, r) {
    var n;
    let i, s;
    if (t.type === l.COMPONENT_OPEN_START || t.type === l.INCOMPLETE_COMPONENT_OPEN || t.type === l.COMPONENT_CLOSE ? (i = t.parts[1], s = t.parts[2]) : (i = t.parts[0], s = t.parts[1]), i = i || ((n = this._getTagDefinition(s)) === null || n === void 0 ? void 0 : n.implicitNamespacePrefix) || "", !i && r) {
      let a = r instanceof re ? r.name : r.tagName;
      if (a !== null) {
        let o = st(a)[1], c = this._getTagDefinition(o);
        c !== null && !c.preventNamespaceInheritance && (i = Ie(a));
      }
    }
    return i;
  }
};
function ts(e, t) {
  return e.length > 0 && e[e.length - 1] === t;
}
function rs(e, t) {
  return ve[t] !== void 0 ? ve[t] || e : /^#x[a-f0-9]+$/i.test(t) ? String.fromCodePoint(parseInt(t.slice(2), 16)) : /^#\d+$/.test(t) ? String.fromCodePoint(parseInt(t.slice(1), 10)) : e;
}
var as = class extends is {
  constructor() {
    super(Me);
  }
  parse(e, t, r, n = false, i) {
    return super.parse(e, t, r, n, i);
  }
};
var Hr = null;
var Bo = () => (Hr || (Hr = new as()), Hr);
function jt(e, t = {}) {
  let { canSelfClose: r = false, allowHtmComponentClosingTags: n = false, isTagNameCaseSensitive: i = false, getTagContentType: s, tokenizeAngularBlocks: a = false, tokenizeAngularLetDeclaration: o = false, enableAngularSelectorlessSyntax: c = false } = t;
  return Bo().parse(e, "angular-html-parser", { tokenizeExpansionForms: a, canSelfClose: r, allowHtmComponentClosingTags: n, tokenizeBlocks: a, tokenizeLet: o, selectorlessEnabled: c }, i, s);
}
var Fo = [Ho, Vo, Wo, $o, zo, jo, Yo, Xo, Ko, Go];
function qo(e, t) {
  for (let r of Fo) r(e, t);
  return e;
}
function Ho(e) {
  e.walk((t) => {
    if (t.kind === "element" && t.tagDefinition.ignoreFirstLf && t.children.length > 0 && t.children[0].kind === "text" && t.children[0].value[0] === `
`) {
      let r = t.children[0];
      r.value.length === 1 ? t.removeChild(r) : r.value = r.value.slice(1);
    }
  });
}
function Vo(e) {
  let t = (r) => r.kind === "element" && r.prev?.kind === "ieConditionalStartComment" && r.prev.sourceSpan.end.offset === r.startSourceSpan.start.offset && r.firstChild?.kind === "ieConditionalEndComment" && r.firstChild.sourceSpan.start.offset === r.startSourceSpan.end.offset;
  e.walk((r) => {
    if (r.children) for (let n = 0; n < r.children.length; n++) {
      let i = r.children[n];
      if (!t(i)) continue;
      let s = i.prev, a = i.firstChild;
      r.removeChild(s), n--;
      let o = new h2(s.sourceSpan.start, a.sourceSpan.end), c = new h2(o.start, i.sourceSpan.end);
      i.condition = s.condition, i.sourceSpan = c, i.startSourceSpan = o, i.removeChild(a);
    }
  });
}
function Uo(e, t, r) {
  e.walk((n) => {
    if (n.children) for (let i = 0; i < n.children.length; i++) {
      let s = n.children[i];
      if (s.kind !== "text" && !t(s)) continue;
      s.kind !== "text" && (s.kind = "text", s.value = r(s));
      let a = s.prev;
      !a || a.kind !== "text" || (a.value += s.value, a.sourceSpan = new h2(a.sourceSpan.start, s.sourceSpan.end), n.removeChild(s), i--);
    }
  });
}
function Wo(e) {
  return Uo(e, (t) => t.kind === "cdata", (t) => `<![CDATA[${t.value}]]>`);
}
function Go(e) {
  let t = (r) => r.kind === "element" && r.attrs.length === 0 && r.children.length === 1 && r.firstChild.kind === "text" && !x.hasWhitespaceCharacter(r.children[0].value) && !r.firstChild.hasLeadingSpaces && !r.firstChild.hasTrailingSpaces && r.isLeadingSpaceSensitive && !r.hasLeadingSpaces && r.isTrailingSpaceSensitive && !r.hasTrailingSpaces && r.prev?.kind === "text" && r.next?.kind === "text";
  e.walk((r) => {
    if (r.children) for (let n = 0; n < r.children.length; n++) {
      let i = r.children[n];
      if (!t(i)) continue;
      let s = i.prev, a = i.next;
      s.value += `<${i.rawName}>` + i.firstChild.value + `</${i.rawName}>` + a.value, s.sourceSpan = new h2(s.sourceSpan.start, a.sourceSpan.end), s.isTrailingSpaceSensitive = a.isTrailingSpaceSensitive, s.hasTrailingSpaces = a.hasTrailingSpaces, r.removeChild(i), n--, r.removeChild(a);
    }
  });
}
function $o(e, t) {
  if (t.parser === "html") return;
  let r = /\{\{(.+?)\}\}/su;
  e.walk((n) => {
    if (Tn(n, t)) for (let i of n.children) {
      if (i.kind !== "text") continue;
      let s = i.sourceSpan.start, a = null, o = i.value.split(r);
      for (let c = 0; c < o.length; c++, s = a) {
        let u = o[c];
        if (c % 2 === 0) {
          a = s.moveBy(u.length), u.length > 0 && n.insertChildBefore(i, { kind: "text", value: u, sourceSpan: new h2(s, a) });
          continue;
        }
        a = s.moveBy(u.length + 4), n.insertChildBefore(i, { kind: "interpolation", sourceSpan: new h2(s, a), children: u.length === 0 ? [] : [{ kind: "text", value: u, sourceSpan: new h2(s.moveBy(2), a.moveBy(-2)) }] });
      }
      n.removeChild(i);
    }
  });
}
function zo(e, t) {
  e.walk((r) => {
    let n = r.$children;
    if (!n) return;
    if (n.length === 0 || n.length === 1 && n[0].kind === "text" && x.trim(n[0].value).length === 0) {
      r.hasDanglingSpaces = n.length > 0, r.$children = [];
      return;
    }
    let i = bn(r, t), s = mr(r);
    if (!i) for (let a = 0; a < n.length; a++) {
      let o = n[a];
      if (o.kind !== "text") continue;
      let { leadingWhitespace: c, text: u, trailingWhitespace: p } = vn(o.value), d = o.prev, S2 = o.next;
      u ? (o.value = u, o.sourceSpan = new h2(o.sourceSpan.start.moveBy(c.length), o.sourceSpan.end.moveBy(-p.length)), c && (d && (d.hasTrailingSpaces = true), o.hasLeadingSpaces = true), p && (o.hasTrailingSpaces = true, S2 && (S2.hasLeadingSpaces = true))) : (r.removeChild(o), a--, (c || p) && (d && (d.hasTrailingSpaces = true), S2 && (S2.hasLeadingSpaces = true)));
    }
    r.isWhitespaceSensitive = i, r.isIndentationSensitive = s;
  });
}
function Yo(e) {
  e.walk((t) => {
    t.isSelfClosing = !t.children || t.kind === "element" && (t.tagDefinition.isVoid || t.endSourceSpan && t.startSourceSpan.start === t.endSourceSpan.start && t.startSourceSpan.end === t.endSourceSpan.end);
  });
}
function Xo(e, t) {
  e.walk((r) => {
    r.kind === "element" && (r.hasHtmComponentClosingTag = r.endSourceSpan && /^<\s*\/\s*\/\s*>$/u.test(t.originalText.slice(r.endSourceSpan.start.offset, r.endSourceSpan.end.offset)));
  });
}
function jo(e, t) {
  e.walk((r) => {
    r.cssDisplay = Dn(r, t);
  });
}
function Ko(e, t) {
  e.walk((r) => {
    let { children: n } = r;
    if (n) {
      if (n.length === 0) {
        r.isDanglingSpaceSensitive = yn(r, t);
        return;
      }
      for (let i of n) i.isLeadingSpaceSensitive = wn(i, t), i.isTrailingSpaceSensitive = kn(i, t);
      for (let i = 0; i < n.length; i++) {
        let s = n[i];
        s.isLeadingSpaceSensitive = (i === 0 || s.prev.isTrailingSpaceSensitive) && s.isLeadingSpaceSensitive, s.isTrailingSpaceSensitive = (i === n.length - 1 || s.next.isLeadingSpaceSensitive) && s.isTrailingSpaceSensitive;
      }
    }
  });
}
var os = qo;
function Qo(e, t, r) {
  let { node: n } = e;
  switch (n.kind) {
    case "root":
      return t.__onHtmlRoot && t.__onHtmlRoot(n), [C(Re(e, t, r)), v];
    case "element":
    case "ieConditionalComment":
      return Ai(e, t, r);
    case "angularControlFlowBlock":
      return Ti(e, t, r);
    case "angularControlFlowBlockParameters":
      return wi(e, t, r);
    case "angularControlFlowBlockParameter":
      return x.trim(n.expression);
    case "angularLetDeclaration":
      return C(["@let ", C([n.id, " =", C(A([_, r("init")]))]), ";"]);
    case "angularLetDeclarationInitializer":
      return n.value;
    case "angularIcuExpression":
      return ki(e, t, r);
    case "angularIcuCase":
      return yi(e, t, r);
    case "ieConditionalStartComment":
    case "ieConditionalEndComment":
      return [ge(n), he(n)];
    case "interpolation":
      return [ge(n, t), ...e.map(r, "children"), he(n, t)];
    case "text": {
      if (n.parent.kind === "interpolation") {
        let o = /\n[^\S\n]*$/u, c = o.test(n.value), u = c ? n.value.replace(o, "") : n.value;
        return [L(u), c ? v : ""];
      }
      let i = V(n, t), s = Pt(n), a = H(n, t);
      return s[0] = [i, s[0]], s.push([s.pop(), a]), wt(s);
    }
    case "docType":
      return [C([ge(n, t), " ", w(0, n.value.replace(/^html\b/iu, "html"), /\s+/gu, " ")]), he(n, t)];
    case "comment":
      return [V(n, t), L(t.originalText.slice(K(n), ee(n))), H(n, t)];
    case "attribute": {
      if (n.value === null) return n.rawName;
      let i = gr(n.value), s = on(i, '"');
      return [n.rawName, "=", s, L(s === '"' ? w(0, i, '"', "&quot;") : w(0, i, "'", "&apos;")), s];
    }
    case "frontMatter":
    case "cdata":
    default:
      throw new cn(n, "HTML");
  }
}
var Jo = { features: { experimental_frontMatterSupport: { massageAstNode: true, embed: true, print: true } }, preprocess: os, print: Qo, insertPragma: Ei, massageAstNode: pn, embed: ui, getVisitorKeys: mi };
var ls = Jo;
var cs = [{ name: "Angular", type: "markup", aceMode: "html", extensions: [".component.html"], tmScope: "text.html.basic", aliases: ["xhtml"], codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", parsers: ["angular"], vscodeLanguageIds: ["html"], filenames: [], linguistLanguageId: 146 }, { name: "HTML", type: "markup", aceMode: "html", extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml"], tmScope: "text.html.basic", aliases: ["xhtml"], codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", parsers: ["html"], vscodeLanguageIds: ["html"], linguistLanguageId: 146 }, { name: "Lightning Web Components", type: "markup", aceMode: "html", extensions: [], tmScope: "text.html.basic", aliases: ["xhtml"], codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", parsers: ["lwc"], vscodeLanguageIds: ["html"], filenames: [], linguistLanguageId: 146 }, { name: "MJML", type: "markup", aceMode: "html", extensions: [".mjml"], tmScope: "text.mjml.basic", aliases: ["MJML", "mjml"], codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", parsers: ["mjml"], filenames: [], vscodeLanguageIds: ["mjml"], linguistLanguageId: 146 }, { name: "Vue", type: "markup", aceMode: "vue", extensions: [".vue"], tmScope: "source.vue", codemirrorMode: "vue", codemirrorMimeType: "text/x-vue", parsers: ["vue"], vscodeLanguageIds: ["vue"], linguistLanguageId: 391 }];
var Vr = { bracketSpacing: { category: "Common", type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, objectWrap: { category: "Common", type: "choice", default: "preserve", description: "How to wrap object literals.", choices: [{ value: "preserve", description: "Keep as multi-line, if there is a newline between the opening brace and first property." }, { value: "collapse", description: "Fit to a single line when possible." }] }, singleQuote: { category: "Common", type: "boolean", default: false, description: "Use single quotes instead of double quotes." }, proseWrap: { category: "Common", type: "choice", default: "preserve", description: "How to wrap prose.", choices: [{ value: "always", description: "Wrap prose if it exceeds the print width." }, { value: "never", description: "Do not wrap prose." }, { value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { category: "Common", type: "boolean", default: false, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { category: "Common", type: "boolean", default: false, description: "Enforce single attribute per line in HTML, Vue and JSX." } };
var us = "HTML";
var Zo = { bracketSameLine: Vr.bracketSameLine, htmlWhitespaceSensitivity: { category: us, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, singleAttributePerLine: Vr.singleAttributePerLine, vueIndentScriptAndStyle: { category: us, type: "boolean", default: false, description: "Indent script and style tags in Vue files." } };
var ps = Zo;
var jr = {};
Jr(jr, { angular: () => El, html: () => gl, lwc: () => vl, mjml: () => Sl, vue: () => Cl });
function el(e, t) {
  let r = new SyntaxError(e + " (" + t.loc.start.line + ":" + t.loc.start.column + ")");
  return Object.assign(r, t);
}
var hs = el;
var tl = { canSelfClose: true, normalizeTagName: false, normalizeAttributeName: false, allowHtmComponentClosingTags: false, isTagNameCaseSensitive: false, shouldParseFrontMatter: true };
function Kt(e) {
  return { ...tl, ...e };
}
function Ur(e) {
  let { canSelfClose: t, allowHtmComponentClosingTags: r, isTagNameCaseSensitive: n, shouldParseAsRawText: i, tokenizeAngularBlocks: s, tokenizeAngularLetDeclaration: a } = e;
  return { canSelfClose: t, allowHtmComponentClosingTags: r, isTagNameCaseSensitive: n, getTagContentType: i ? (...o) => i(...o) ? R.RAW_TEXT : void 0 : void 0, tokenizeAngularBlocks: s, tokenizeAngularLetDeclaration: a };
}
var Qt = /* @__PURE__ */ new Map([["*", /* @__PURE__ */ new Set(["accesskey", "autocapitalize", "autocorrect", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "exportparts", "hidden", "id", "inert", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "part", "popover", "slot", "spellcheck", "style", "tabindex", "title", "translate", "writingsuggestions"])], ["a", /* @__PURE__ */ new Set(["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"])], ["applet", /* @__PURE__ */ new Set(["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"])], ["area", /* @__PURE__ */ new Set(["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"])], ["audio", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"])], ["base", /* @__PURE__ */ new Set(["href", "target"])], ["basefont", /* @__PURE__ */ new Set(["color", "face", "size"])], ["blockquote", /* @__PURE__ */ new Set(["cite"])], ["body", /* @__PURE__ */ new Set(["alink", "background", "bgcolor", "link", "text", "vlink"])], ["br", /* @__PURE__ */ new Set(["clear"])], ["button", /* @__PURE__ */ new Set(["command", "commandfor", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "popovertarget", "popovertargetaction", "type", "value"])], ["canvas", /* @__PURE__ */ new Set(["height", "width"])], ["caption", /* @__PURE__ */ new Set(["align"])], ["col", /* @__PURE__ */ new Set(["align", "char", "charoff", "span", "valign", "width"])], ["colgroup", /* @__PURE__ */ new Set(["align", "char", "charoff", "span", "valign", "width"])], ["data", /* @__PURE__ */ new Set(["value"])], ["del", /* @__PURE__ */ new Set(["cite", "datetime"])], ["details", /* @__PURE__ */ new Set(["name", "open"])], ["dialog", /* @__PURE__ */ new Set(["closedby", "open"])], ["dir", /* @__PURE__ */ new Set(["compact"])], ["div", /* @__PURE__ */ new Set(["align"])], ["dl", /* @__PURE__ */ new Set(["compact"])], ["embed", /* @__PURE__ */ new Set(["height", "src", "type", "width"])], ["fieldset", /* @__PURE__ */ new Set(["disabled", "form", "name"])], ["font", /* @__PURE__ */ new Set(["color", "face", "size"])], ["form", /* @__PURE__ */ new Set(["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"])], ["frame", /* @__PURE__ */ new Set(["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"])], ["frameset", /* @__PURE__ */ new Set(["cols", "rows"])], ["h1", /* @__PURE__ */ new Set(["align"])], ["h2", /* @__PURE__ */ new Set(["align"])], ["h3", /* @__PURE__ */ new Set(["align"])], ["h4", /* @__PURE__ */ new Set(["align"])], ["h5", /* @__PURE__ */ new Set(["align"])], ["h6", /* @__PURE__ */ new Set(["align"])], ["head", /* @__PURE__ */ new Set(["profile"])], ["hr", /* @__PURE__ */ new Set(["align", "noshade", "size", "width"])], ["html", /* @__PURE__ */ new Set(["manifest", "version"])], ["iframe", /* @__PURE__ */ new Set(["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"])], ["img", /* @__PURE__ */ new Set(["align", "alt", "border", "crossorigin", "decoding", "fetchpriority", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"])], ["input", /* @__PURE__ */ new Set(["accept", "align", "alpha", "alt", "autocomplete", "checked", "colorspace", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "popovertarget", "popovertargetaction", "readonly", "required", "size", "src", "step", "type", "usemap", "value", "width"])], ["ins", /* @__PURE__ */ new Set(["cite", "datetime"])], ["isindex", /* @__PURE__ */ new Set(["prompt"])], ["label", /* @__PURE__ */ new Set(["for", "form"])], ["legend", /* @__PURE__ */ new Set(["align"])], ["li", /* @__PURE__ */ new Set(["type", "value"])], ["link", /* @__PURE__ */ new Set(["as", "blocking", "charset", "color", "crossorigin", "disabled", "fetchpriority", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"])], ["map", /* @__PURE__ */ new Set(["name"])], ["menu", /* @__PURE__ */ new Set(["compact"])], ["meta", /* @__PURE__ */ new Set(["charset", "content", "http-equiv", "media", "name", "scheme"])], ["meter", /* @__PURE__ */ new Set(["high", "low", "max", "min", "optimum", "value"])], ["object", /* @__PURE__ */ new Set(["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "type", "typemustmatch", "usemap", "vspace", "width"])], ["ol", /* @__PURE__ */ new Set(["compact", "reversed", "start", "type"])], ["optgroup", /* @__PURE__ */ new Set(["disabled", "label"])], ["option", /* @__PURE__ */ new Set(["disabled", "label", "selected", "value"])], ["output", /* @__PURE__ */ new Set(["for", "form", "name"])], ["p", /* @__PURE__ */ new Set(["align"])], ["param", /* @__PURE__ */ new Set(["name", "type", "value", "valuetype"])], ["pre", /* @__PURE__ */ new Set(["width"])], ["progress", /* @__PURE__ */ new Set(["max", "value"])], ["q", /* @__PURE__ */ new Set(["cite"])], ["script", /* @__PURE__ */ new Set(["async", "blocking", "charset", "crossorigin", "defer", "fetchpriority", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"])], ["select", /* @__PURE__ */ new Set(["autocomplete", "disabled", "form", "multiple", "name", "required", "size"])], ["slot", /* @__PURE__ */ new Set(["name"])], ["source", /* @__PURE__ */ new Set(["height", "media", "sizes", "src", "srcset", "type", "width"])], ["style", /* @__PURE__ */ new Set(["blocking", "media", "type"])], ["table", /* @__PURE__ */ new Set(["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"])], ["tbody", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["td", /* @__PURE__ */ new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["template", /* @__PURE__ */ new Set(["shadowrootclonable", "shadowrootcustomelementregistry", "shadowrootdelegatesfocus", "shadowrootmode", "shadowrootserializable"])], ["textarea", /* @__PURE__ */ new Set(["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"])], ["tfoot", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["th", /* @__PURE__ */ new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["thead", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["time", /* @__PURE__ */ new Set(["datetime"])], ["tr", /* @__PURE__ */ new Set(["align", "bgcolor", "char", "charoff", "valign"])], ["track", /* @__PURE__ */ new Set(["default", "kind", "label", "src", "srclang"])], ["ul", /* @__PURE__ */ new Set(["compact", "type"])], ["video", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"])]]);
var ms = /* @__PURE__ */ new Set(["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "fencedframe", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "search", "section", "select", "selectedcontent", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]);
var Jt = { attrs: true, children: true, cases: true, expression: true };
var fs = /* @__PURE__ */ new Set(["parent"]);
var se;
var Wr;
var Gr;
var Ue = class Ue2 {
  constructor(t = {}) {
    Zr(this, se);
    rr(this, "kind");
    rr(this, "parent");
    for (let r of /* @__PURE__ */ new Set([...fs, ...Object.keys(t)])) this.setProperty(r, t[r]);
    if (oe(t)) for (let r of Object.getOwnPropertySymbols(t)) this.setProperty(r, t[r]);
  }
  setProperty(t, r) {
    if (this[t] !== r) {
      if (t in Jt && (r = r.map((n) => this.createChild(n))), !fs.has(t)) {
        this[t] = r;
        return;
      }
      Object.defineProperty(this, t, { value: r, enumerable: false, configurable: true });
    }
  }
  map(t) {
    let r;
    for (let n in Jt) {
      let i = this[n];
      if (i) {
        let s = rl(i, (a) => a.map(t));
        r !== i && (r || (r = new Ue2({ parent: this.parent })), r.setProperty(n, s));
      }
    }
    if (r) for (let n in this) n in Jt || (r[n] = this[n]);
    return t(r || this);
  }
  walk(t) {
    for (let r in Jt) {
      let n = this[r];
      if (n) for (let i = 0; i < n.length; i++) n[i].walk(t);
    }
    t(this);
  }
  createChild(t) {
    let r = t instanceof Ue2 ? t.clone() : new Ue2(t);
    return r.setProperty("parent", this), r;
  }
  insertChildBefore(t, r) {
    let n = this.$children;
    n.splice(n.indexOf(t), 0, this.createChild(r));
  }
  removeChild(t) {
    let r = this.$children;
    r.splice(r.indexOf(t), 1);
  }
  replaceChild(t, r) {
    let n = this.$children;
    n[n.indexOf(t)] = this.createChild(r);
  }
  clone() {
    return new Ue2(this);
  }
  get $children() {
    return this[Ge(this, se, Wr)];
  }
  set $children(t) {
    this[Ge(this, se, Wr)] = t;
  }
  get firstChild() {
    return this.$children?.[0];
  }
  get lastChild() {
    return B(1, this.$children, -1);
  }
  get prev() {
    let t = Ge(this, se, Gr);
    return t[t.indexOf(this) - 1];
  }
  get next() {
    let t = Ge(this, se, Gr);
    return t[t.indexOf(this) + 1];
  }
  get rawName() {
    return this.hasExplicitNamespace ? this.fullName : this.name;
  }
  get fullName() {
    return this.namespace ? this.namespace + ":" + this.name : this.name;
  }
  get attrMap() {
    return Object.fromEntries(this.attrs.map((t) => [t.fullName, t.value]));
  }
};
se = /* @__PURE__ */ new WeakSet(), Wr = function() {
  return this.kind === "angularIcuCase" ? "expression" : this.kind === "angularIcuExpression" ? "cases" : "children";
}, Gr = function() {
  return this.parent?.$children ?? [];
};
var Zt = Ue;
function rl(e, t) {
  let r = e.map(t);
  return r.some((n, i) => n !== e[i]) ? r : e;
}
var nl = [{ regex: /^(?<openingTagSuffix>\[if(?<condition>[^\]]*)\]>)(?<data>.*?)<!\s*\[endif\]$/su, parse: il }, { regex: /^\[if(?<condition>[^\]]*)\]><!$/u, parse: sl }, { regex: /^<!\s*\[endif\]$/u, parse: al }];
function ds(e, t) {
  if (e.value) for (let { regex: r, parse: n } of nl) {
    let i = e.value.match(r);
    if (i) return n(e, i, t);
  }
  return null;
}
function il(e, t, r) {
  let { openingTagSuffix: n, condition: i, data: s } = t.groups, a = 4 + n.length, o = e.sourceSpan.start.moveBy(a), c = o.moveBy(s.length), [u, p] = (() => {
    try {
      return [true, r(s, o).children];
    } catch {
      return [false, [{ kind: "text", value: s, sourceSpan: new h2(o, c) }]];
    }
  })();
  return { kind: "ieConditionalComment", complete: u, children: p, condition: w(0, i.trim(), /\s+/gu, " "), sourceSpan: e.sourceSpan, startSourceSpan: new h2(e.sourceSpan.start, o), endSourceSpan: new h2(c, e.sourceSpan.end) };
}
function sl(e, t) {
  let { condition: r } = t.groups;
  return { kind: "ieConditionalStartComment", condition: w(0, r.trim(), /\s+/gu, " "), sourceSpan: e.sourceSpan };
}
function al(e) {
  return { kind: "ieConditionalEndComment", sourceSpan: e.sourceSpan };
}
var $r = class extends Nr {
  visitExpansionCase(t, r) {
    r.parseOptions.name === "angular" && this.visitChildren(r, (n) => {
      n(t.expression);
    });
  }
  visit(t, { parseOptions: r }) {
    ul(t), pl(t, r), ml(t, r), hl(t);
  }
};
function Ss(e, t, r, n) {
  Vt(new $r(), e.children, { parseOptions: r }), t && e.children.unshift(t);
  let i = new Zt(e);
  return i.walk((s) => {
    if (s.kind === "comment") {
      let a = ds(s, n);
      a && s.parent.replaceChild(s, a);
    }
    ol(s), ll(s), cl(s);
  }), i;
}
function ol(e) {
  if (e.kind === "block") {
    if (e.name = w(0, e.name.toLowerCase(), /\s+/gu, " ").trim(), e.kind = "angularControlFlowBlock", !De(e.parameters)) {
      delete e.parameters;
      return;
    }
    for (let t of e.parameters) t.kind = "angularControlFlowBlockParameter";
    e.parameters = { kind: "angularControlFlowBlockParameters", children: e.parameters, sourceSpan: new h2(e.parameters[0].sourceSpan.start, B(0, e.parameters, -1).sourceSpan.end) };
  }
}
function ll(e) {
  e.kind === "letDeclaration" && (e.kind = "angularLetDeclaration", e.id = e.name, e.init = { kind: "angularLetDeclarationInitializer", sourceSpan: new h2(e.valueSpan.start, e.valueSpan.end), value: e.value }, delete e.name, delete e.value);
}
function cl(e) {
  e.kind === "expansion" && (e.kind = "angularIcuExpression"), e.kind === "expansionCase" && (e.kind = "angularIcuCase");
}
function gs(e, t) {
  let r = e.toLowerCase();
  return t(r) ? r : e;
}
function _s(e) {
  let t = e.name.startsWith(":") ? e.name.slice(1).split(":")[0] : null, r = e.nameSpan.toString(), n = t !== null && r.startsWith(`${t}:`), i = n ? r.slice(t.length + 1) : r;
  e.name = i, e.namespace = t, e.hasExplicitNamespace = n;
}
function ul(e) {
  switch (e.kind) {
    case "element":
      _s(e);
      for (let t of e.attrs) _s(t), t.valueSpan ? (t.value = t.valueSpan.toString(), /["']/u.test(t.value[0]) && (t.value = t.value.slice(1, -1))) : t.value = null;
      break;
    case "comment":
      e.value = e.sourceSpan.toString().slice(4, -3);
      break;
    case "text":
      e.value = e.sourceSpan.toString();
      break;
  }
}
function pl(e, t) {
  if (e.kind === "element") {
    let r = Me(t.isTagNameCaseSensitive ? e.name : e.name.toLowerCase());
    !e.namespace || e.namespace === r.implicitNamespacePrefix || le(e) ? e.tagDefinition = r : e.tagDefinition = Me("");
  }
}
function hl(e) {
  e.sourceSpan && e.endSourceSpan && (e.sourceSpan = new h2(e.sourceSpan.start, e.endSourceSpan.end));
}
function ml(e, t) {
  if (e.kind === "element" && (t.normalizeTagName && (!e.namespace || e.namespace === e.tagDefinition.implicitNamespacePrefix || le(e)) && (e.name = gs(e.name, (r) => ms.has(r))), t.normalizeAttributeName)) for (let r of e.attrs) r.namespace || (r.name = gs(r.name, (n) => Qt.has(e.name) && (Qt.get("*").has(n) || Qt.get(e.name).has(n))));
}
function Yr(e, t) {
  let { rootNodes: r, errors: n } = jt(e, Ur(t));
  return n.length > 0 && zr(n[0]), { parseOptions: t, rootNodes: r };
}
function Es(e, t) {
  let r = Ur(t), { rootNodes: n, errors: i } = jt(e, r);
  if (n.some((u) => u.kind === "docType" && u.value === "html" || u.kind === "element" && u.name.toLowerCase() === "html")) return Yr(e, er);
  let a, o = () => a ?? (a = jt(e, { ...r, getTagContentType: void 0 })), c = (u) => {
    let { offset: p } = u.startSourceSpan.start;
    return o().rootNodes.find((d) => d.kind === "element" && d.startSourceSpan.start.offset === p) ?? u;
  };
  for (let [u, p] of n.entries()) if (p.kind === "element") {
    if (p.isVoid) i = o().errors, n[u] = c(p);
    else if (fl(p)) {
      let { endSourceSpan: d, startSourceSpan: S2 } = p, m = o().errors.find((g) => g.span.start.offset > S2.start.offset && g.span.start.offset < d.end.offset);
      m && zr(m), n[u] = c(p);
    }
  }
  return i.length > 0 && zr(i[0]), { parseOptions: t, rootNodes: n };
}
function fl(e) {
  if (e.kind !== "element" || e.name !== "template") return false;
  let t = e.attrs.find((r) => r.name === "lang")?.value;
  return !t || t === "html";
}
function zr(e) {
  let { msg: t, span: { start: r, end: n } } = e;
  throw hs(t, { loc: { start: { line: r.line + 1, column: r.col + 1 }, end: { line: n.line + 1, column: n.col + 1 } }, cause: e });
}
function dl(e, t, r, n, i, s) {
  let { offset: a } = n, o = w(0, t.slice(0, a), /[^\n]/gu, " ") + r, c = Xr(o, e, { ...i, shouldParseFrontMatter: false }, s);
  c.sourceSpan = new h2(n, B(0, c.children, -1).sourceSpan.end);
  let u = c.children[0];
  return u.length === a ? c.children.shift() : (u.sourceSpan = new h2(u.sourceSpan.start.moveBy(a), u.sourceSpan.end), u.value = u.value.slice(a)), c;
}
function Xr(e, t, r, n = {}) {
  let { frontMatter: i, content: s } = r.shouldParseFrontMatter ? cr(e) : { content: e }, a = new pt(e, n.filepath), o = new Fe(a, 0, 0, 0), c = o.moveBy(e.length), { parseOptions: u, rootNodes: p } = t(s, r), d = { kind: "root", sourceSpan: new h2(o, c), children: p }, S2;
  if (i) {
    let [g, E] = [i.start, i.end].map((P2) => new Fe(a, P2.index, P2.line - 1, P2.column));
    S2 = { ...i, kind: "frontMatter", sourceSpan: new h2(g, E) };
  }
  return Ss(d, S2, u, (g, E) => dl(t, e, g, E, u, n));
}
var er = Kt({ name: "html", normalizeTagName: true, normalizeAttributeName: true, allowHtmComponentClosingTags: true });
function ft(e) {
  let t = Kt(e), r = t.name === "vue" ? Es : Yr;
  return { parse: (n, i) => Xr(n, r, t, i), hasPragma: _i, hasIgnorePragma: Si, astFormat: "html", locStart: K, locEnd: ee };
}
var gl = ft(er);
var _l = /* @__PURE__ */ new Set(["mj-style", "mj-raw"]);
var Sl = ft({ ...er, name: "mjml", shouldParseAsRawText: (e) => _l.has(e) });
var El = ft({ name: "angular", tokenizeAngularBlocks: true, tokenizeAngularLetDeclaration: true });
var Cl = ft({ name: "vue", isTagNameCaseSensitive: true, shouldParseAsRawText(e, t, r, n) {
  return e.toLowerCase() !== "html" && !r && (e !== "template" || n.some(({ name: i, value: s }) => i === "lang" && s !== "html" && s !== "" && s !== void 0));
} });
var vl = ft({ name: "lwc", canSelfClose: false });
var Tl = { html: ls };

// ../../node_modules/prettier/standalone.mjs
var Jn2 = Object.create;
var Lt2 = Object.defineProperty;
var Gn2 = Object.getOwnPropertyDescriptor;
var zn2 = Object.getOwnPropertyNames;
var Hn2 = Object.getPrototypeOf;
var Xn2 = Object.prototype.hasOwnProperty;
var qn2 = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Mt2 = (e, t) => {
  for (var u in t) Lt2(e, u, { get: t[u], enumerable: true });
};
var Qn2 = (e, t, u, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (let o of zn2(t)) !Xn2.call(e, o) && o !== u && Lt2(e, o, { get: () => t[o], enumerable: !(r = Gn2(t, o)) || r.enumerable });
  return e;
};
var Zn2 = (e, t, u) => (u = e != null ? Jn2(Hn2(e)) : {}, Qn2(t || !e || !e.__esModule ? Lt2(u, "default", { value: e, enumerable: true }) : u, e));
var sn2 = qn2((K0, an2) => {
  var gt2, yt2, bt2, At2, _t2, We, gu, Ve, xt2, nn2, Bt2, $e2, Tt2, Nt2, St2, pe2, on2, wt2, Ot2, fa2;
  Tt2 = /\/(?![*\/])(?:\[(?:[^\]\\\n\r\u2028\u2029]+|\\.)*\]|[^\/\\\n\r\u2028\u2029]+|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu;
  $e2 = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y;
  gt2 = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]+|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu;
  St2 = /(['"])(?:[^'"\\\n\r]+|(?!\1)['"]|\\(?:\r\n|[^]))*(\1)?/y;
  Bt2 = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y;
  pe2 = /[`}](?:[^`\\$]+|\\[^]|\$(?!\{))*(`|\$\{)?/y;
  Ot2 = /[\t\v\f\ufeff\p{Zs}]+/yu;
  Ve = /\r?\n|[\r\u2028\u2029]/y;
  xt2 = /\/\*(?:[^*]+|\*(?!\/))*(\*\/)?/y;
  Nt2 = /\/\/.*/y;
  bt2 = /[<>.:={}]|\/(?![\/*])/y;
  yt2 = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu;
  At2 = /(['"])(?:[^'"]+|(?!\1)['"])*(\1)?/y;
  _t2 = /[^<>{}]+/y;
  wt2 = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/;
  on2 = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/;
  We = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/;
  gu = /^(?:return|throw|yield)$/;
  nn2 = RegExp(Ve.source);
  an2.exports = fa2 = function* (e, { jsx: t = false } = {}) {
    var u, r, o, n, a, s, i, D2, f2, l2, d, c, p, F2;
    for ({ length: s } = e, n = 0, a = "", F2 = [{ tag: "JS" }], u = [], d = 0, c = false; n < s; ) {
      switch (D2 = F2[F2.length - 1], D2.tag) {
        case "JS":
        case "JSNonExpressionParen":
        case "InterpolationInTemplate":
        case "InterpolationInJSX":
          if (e[n] === "/" && (wt2.test(a) || We.test(a)) && (Tt2.lastIndex = n, i = Tt2.exec(e))) {
            n = Tt2.lastIndex, a = i[0], c = true, yield { type: "RegularExpressionLiteral", value: i[0], closed: i[1] !== void 0 && i[1] !== "\\" };
            continue;
          }
          if ($e2.lastIndex = n, i = $e2.exec(e)) {
            switch (p = i[0], f2 = $e2.lastIndex, l2 = p, p) {
              case "(":
                a === "?NonExpressionParenKeyword" && F2.push({ tag: "JSNonExpressionParen", nesting: d }), d++, c = false;
                break;
              case ")":
                d--, c = true, D2.tag === "JSNonExpressionParen" && d === D2.nesting && (F2.pop(), l2 = "?NonExpressionParenEnd", c = false);
                break;
              case "{":
                $e2.lastIndex = 0, o = !on2.test(a) && (wt2.test(a) || We.test(a)), u.push(o), c = false;
                break;
              case "}":
                switch (D2.tag) {
                  case "InterpolationInTemplate":
                    if (u.length === D2.nesting) {
                      pe2.lastIndex = n, i = pe2.exec(e), n = pe2.lastIndex, a = i[0], i[1] === "${" ? (a = "?InterpolationInTemplate", c = false, yield { type: "TemplateMiddle", value: i[0] }) : (F2.pop(), c = true, yield { type: "TemplateTail", value: i[0], closed: i[1] === "`" });
                      continue;
                    }
                    break;
                  case "InterpolationInJSX":
                    if (u.length === D2.nesting) {
                      F2.pop(), n += 1, a = "}", yield { type: "JSXPunctuator", value: "}" };
                      continue;
                    }
                }
                c = u.pop(), l2 = c ? "?ExpressionBraceEnd" : "}";
                break;
              case "]":
                c = true;
                break;
              case "++":
              case "--":
                l2 = c ? "?PostfixIncDec" : "?UnaryIncDec";
                break;
              case "<":
                if (t && (wt2.test(a) || We.test(a))) {
                  F2.push({ tag: "JSXTag" }), n += 1, a = "<", yield { type: "JSXPunctuator", value: p };
                  continue;
                }
                c = false;
                break;
              default:
                c = false;
            }
            n = f2, a = l2, yield { type: "Punctuator", value: p };
            continue;
          }
          if (gt2.lastIndex = n, i = gt2.exec(e)) {
            switch (n = gt2.lastIndex, l2 = i[0], i[0]) {
              case "for":
              case "if":
              case "while":
              case "with":
                a !== "." && a !== "?." && (l2 = "?NonExpressionParenKeyword");
            }
            a = l2, c = !We.test(i[0]), yield { type: i[1] === "#" ? "PrivateIdentifier" : "IdentifierName", value: i[0] };
            continue;
          }
          if (St2.lastIndex = n, i = St2.exec(e)) {
            n = St2.lastIndex, a = i[0], c = true, yield { type: "StringLiteral", value: i[0], closed: i[2] !== void 0 };
            continue;
          }
          if (Bt2.lastIndex = n, i = Bt2.exec(e)) {
            n = Bt2.lastIndex, a = i[0], c = true, yield { type: "NumericLiteral", value: i[0] };
            continue;
          }
          if (pe2.lastIndex = n, i = pe2.exec(e)) {
            n = pe2.lastIndex, a = i[0], i[1] === "${" ? (a = "?InterpolationInTemplate", F2.push({ tag: "InterpolationInTemplate", nesting: u.length }), c = false, yield { type: "TemplateHead", value: i[0] }) : (c = true, yield { type: "NoSubstitutionTemplate", value: i[0], closed: i[1] === "`" });
            continue;
          }
          break;
        case "JSXTag":
        case "JSXTagEnd":
          if (bt2.lastIndex = n, i = bt2.exec(e)) {
            switch (n = bt2.lastIndex, l2 = i[0], i[0]) {
              case "<":
                F2.push({ tag: "JSXTag" });
                break;
              case ">":
                F2.pop(), a === "/" || D2.tag === "JSXTagEnd" ? (l2 = "?JSX", c = true) : F2.push({ tag: "JSXChildren" });
                break;
              case "{":
                F2.push({ tag: "InterpolationInJSX", nesting: u.length }), l2 = "?InterpolationInJSX", c = false;
                break;
              case "/":
                a === "<" && (F2.pop(), F2[F2.length - 1].tag === "JSXChildren" && F2.pop(), F2.push({ tag: "JSXTagEnd" }));
            }
            a = l2, yield { type: "JSXPunctuator", value: i[0] };
            continue;
          }
          if (yt2.lastIndex = n, i = yt2.exec(e)) {
            n = yt2.lastIndex, a = i[0], yield { type: "JSXIdentifier", value: i[0] };
            continue;
          }
          if (At2.lastIndex = n, i = At2.exec(e)) {
            n = At2.lastIndex, a = i[0], yield { type: "JSXString", value: i[0], closed: i[2] !== void 0 };
            continue;
          }
          break;
        case "JSXChildren":
          if (_t2.lastIndex = n, i = _t2.exec(e)) {
            n = _t2.lastIndex, a = i[0], yield { type: "JSXText", value: i[0] };
            continue;
          }
          switch (e[n]) {
            case "<":
              F2.push({ tag: "JSXTag" }), n++, a = "<", yield { type: "JSXPunctuator", value: "<" };
              continue;
            case "{":
              F2.push({ tag: "InterpolationInJSX", nesting: u.length }), n++, a = "?InterpolationInJSX", c = false, yield { type: "JSXPunctuator", value: "{" };
              continue;
          }
      }
      if (Ot2.lastIndex = n, i = Ot2.exec(e)) {
        n = Ot2.lastIndex, yield { type: "WhiteSpace", value: i[0] };
        continue;
      }
      if (Ve.lastIndex = n, i = Ve.exec(e)) {
        n = Ve.lastIndex, c = false, gu.test(a) && (a = "?NoLineTerminatorHere"), yield { type: "LineTerminatorSequence", value: i[0] };
        continue;
      }
      if (xt2.lastIndex = n, i = xt2.exec(e)) {
        n = xt2.lastIndex, nn2.test(i[0]) && (c = false, gu.test(a) && (a = "?NoLineTerminatorHere")), yield { type: "MultiLineComment", value: i[0], closed: i[1] !== void 0 };
        continue;
      }
      if (Nt2.lastIndex = n, i = Nt2.exec(e)) {
        n = Nt2.lastIndex, c = false, yield { type: "SingleLineComment", value: i[0] };
        continue;
      }
      r = String.fromCodePoint(e.codePointAt(n)), n += r.length, a = r, c = false, yield { type: D2.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid", value: r };
    }
  };
});
var Wn2 = {};
Mt2(Wn2, { __debug: () => Qa2, check: () => Xa2, doc: () => Nu, format: () => Un2, formatWithCursor: () => jn2, getSupportInfo: () => qa2, util: () => wu, version: () => In2 });
var X2 = (e, t) => (u, r, ...o) => u | 1 && r == null ? void 0 : (t.call(r) ?? r[e]).apply(r, o);
var eo2 = String.prototype.replaceAll ?? function(e, t) {
  return e.global ? this.replace(e, t) : this.split(e).join(t);
};
var to2 = X2("replaceAll", function() {
  if (typeof this == "string") return eo2;
});
var oe2 = to2;
var Te2 = class {
  diff(t, u, r = {}) {
    let o;
    typeof r == "function" ? (o = r, r = {}) : "callback" in r && (o = r.callback);
    let n = this.castInput(t, r), a = this.castInput(u, r), s = this.removeEmpty(this.tokenize(n, r)), i = this.removeEmpty(this.tokenize(a, r));
    return this.diffWithOptionsObj(s, i, r, o);
  }
  diffWithOptionsObj(t, u, r, o) {
    var n;
    let a = (m) => {
      if (m = this.postProcess(m, r), o) {
        setTimeout(function() {
          o(m);
        }, 0);
        return;
      } else return m;
    }, s = u.length, i = t.length, D2 = 1, f2 = s + i;
    r.maxEditLength != null && (f2 = Math.min(f2, r.maxEditLength));
    let l2 = (n = r.timeout) !== null && n !== void 0 ? n : 1 / 0, d = Date.now() + l2, c = [{ oldPos: -1, lastComponent: void 0 }], p = this.extractCommon(c[0], u, t, 0, r);
    if (c[0].oldPos + 1 >= i && p + 1 >= s) return a(this.buildValues(c[0].lastComponent, u, t));
    let F2 = -1 / 0, C2 = 1 / 0, y2 = () => {
      for (let m = Math.max(F2, -D2); m <= Math.min(C2, D2); m += 2) {
        let h5, E = c[m - 1], g = c[m + 1];
        E && (c[m - 1] = void 0);
        let A2 = false;
        if (g) {
          let Q2 = g.oldPos - m;
          A2 = g && 0 <= Q2 && Q2 < s;
        }
        let z2 = E && E.oldPos + 1 < i;
        if (!A2 && !z2) {
          c[m] = void 0;
          continue;
        }
        if (!z2 || A2 && E.oldPos < g.oldPos ? h5 = this.addToPath(g, true, false, 0, r) : h5 = this.addToPath(E, false, true, 1, r), p = this.extractCommon(h5, u, t, m, r), h5.oldPos + 1 >= i && p + 1 >= s) return a(this.buildValues(h5.lastComponent, u, t)) || true;
        c[m] = h5, h5.oldPos + 1 >= i && (C2 = Math.min(C2, m - 1)), p + 1 >= s && (F2 = Math.max(F2, m + 1));
      }
      D2++;
    };
    if (o) (function m() {
      setTimeout(function() {
        if (D2 > f2 || Date.now() > d) return o(void 0);
        y2() || m();
      }, 0);
    })();
    else for (; D2 <= f2 && Date.now() <= d; ) {
      let m = y2();
      if (m) return m;
    }
  }
  addToPath(t, u, r, o, n) {
    let a = t.lastComponent;
    return a && !n.oneChangePerToken && a.added === u && a.removed === r ? { oldPos: t.oldPos + o, lastComponent: { count: a.count + 1, added: u, removed: r, previousComponent: a.previousComponent } } : { oldPos: t.oldPos + o, lastComponent: { count: 1, added: u, removed: r, previousComponent: a } };
  }
  extractCommon(t, u, r, o, n) {
    let a = u.length, s = r.length, i = t.oldPos, D2 = i - o, f2 = 0;
    for (; D2 + 1 < a && i + 1 < s && this.equals(r[i + 1], u[D2 + 1], n); ) D2++, i++, f2++, n.oneChangePerToken && (t.lastComponent = { count: 1, previousComponent: t.lastComponent, added: false, removed: false });
    return f2 && !n.oneChangePerToken && (t.lastComponent = { count: f2, previousComponent: t.lastComponent, added: false, removed: false }), t.oldPos = i, D2;
  }
  equals(t, u, r) {
    return r.comparator ? r.comparator(t, u) : t === u || !!r.ignoreCase && t.toLowerCase() === u.toLowerCase();
  }
  removeEmpty(t) {
    let u = [];
    for (let r = 0; r < t.length; r++) t[r] && u.push(t[r]);
    return u;
  }
  castInput(t, u) {
    return t;
  }
  tokenize(t, u) {
    return Array.from(t);
  }
  join(t) {
    return t.join("");
  }
  postProcess(t, u) {
    return t;
  }
  get useLongestToken() {
    return false;
  }
  buildValues(t, u, r) {
    let o = [], n;
    for (; t; ) o.push(t), n = t.previousComponent, delete t.previousComponent, t = n;
    o.reverse();
    let a = o.length, s = 0, i = 0, D2 = 0;
    for (; s < a; s++) {
      let f2 = o[s];
      if (f2.removed) f2.value = this.join(r.slice(D2, D2 + f2.count)), D2 += f2.count;
      else {
        if (!f2.added && this.useLongestToken) {
          let l2 = u.slice(i, i + f2.count);
          l2 = l2.map(function(d, c) {
            let p = r[D2 + c];
            return p.length > d.length ? p : d;
          }), f2.value = this.join(l2);
        } else f2.value = this.join(u.slice(i, i + f2.count));
        i += f2.count, f2.added || (D2 += f2.count);
      }
    }
    return o;
  }
};
var Yt = class extends Te2 {
  tokenize(t) {
    return t.slice();
  }
  join(t) {
    return t;
  }
  removeEmpty(t) {
    return t;
  }
};
var Pu = new Yt();
function jt2(e, t, u) {
  return Pu.diff(e, t, u);
}
function Iu(e) {
  let t = e.indexOf("\r");
  return t !== -1 ? e.charAt(t + 1) === `
` ? "crlf" : "cr" : "lf";
}
function Ne2(e) {
  switch (e) {
    case "cr":
      return "\r";
    case "crlf":
      return `\r
`;
    default:
      return `
`;
  }
}
function Ut(e, t) {
  let u;
  switch (t) {
    case `
`:
      u = /\n/gu;
      break;
    case "\r":
      u = /\r/gu;
      break;
    case `\r
`:
      u = /\r\n/gu;
      break;
    default:
      throw new Error(`Unexpected "eol" ${JSON.stringify(t)}.`);
  }
  let r = e.match(u);
  return r ? r.length : 0;
}
function ku(e) {
  return oe2(0, e, /\r\n?/gu, `
`);
}
function uo(e) {
  return this[e < 0 ? this.length + e : e];
}
var ro = X2("at", function() {
  if (Array.isArray(this) || typeof this == "string") return uo;
});
var b2 = ro;
var no = () => {
};
var P = no;
var J = "string";
var j2 = "array";
var U2 = "cursor";
var I = "indent";
var k2 = "align";
var v2 = "trim";
var x2 = "group";
var w2 = "fill";
var B2 = "if-break";
var R2 = "indent-if-break";
var L2 = "line-suffix";
var M = "line-suffix-boundary";
var _2 = "line";
var O2 = "label";
var T2 = "break-parent";
var Ge2 = /* @__PURE__ */ new Set([U2, I, k2, v2, x2, w2, B2, R2, L2, M, _2, O2, T2]);
function vu(e) {
  let t = e.length;
  for (; t > 0 && (e[t - 1] === "\r" || e[t - 1] === `
`); ) t--;
  return t < e.length ? e.slice(0, t) : e;
}
function oo(e) {
  if (typeof e == "string") return J;
  if (Array.isArray(e)) return j2;
  if (!e) return;
  let { type: t } = e;
  if (Ge2.has(t)) return t;
}
var H2 = oo;
var ao = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function io(e) {
  let t = e === null ? "null" : typeof e;
  if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if (H2(e)) throw new Error("doc is valid.");
  let u = Object.prototype.toString.call(e);
  if (u !== "[object Object]") return `Unexpected doc '${u}'.`;
  let r = ao([...Ge2].map((o) => `'${o}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`;
}
var Wt = class extends Error {
  name = "InvalidDocError";
  constructor(t) {
    super(io(t)), this.doc = t;
  }
};
var Z = Wt;
var Ru = {};
function so(e, t, u, r) {
  let o = [e];
  for (; o.length > 0; ) {
    let n = o.pop();
    if (n === Ru) {
      u(o.pop());
      continue;
    }
    u && o.push(n, Ru);
    let a = H2(n);
    if (!a) throw new Z(n);
    if (t?.(n) !== false) switch (a) {
      case j2:
      case w2: {
        let s = a === j2 ? n : n.parts;
        for (let i = s.length, D2 = i - 1; D2 >= 0; --D2) o.push(s[D2]);
        break;
      }
      case B2:
        o.push(n.flatContents, n.breakContents);
        break;
      case x2:
        if (r && n.expandedStates) for (let s = n.expandedStates.length, i = s - 1; i >= 0; --i) o.push(n.expandedStates[i]);
        else o.push(n.contents);
        break;
      case k2:
      case I:
      case R2:
      case O2:
      case L2:
        o.push(n.contents);
        break;
      case J:
      case U2:
      case v2:
      case M:
      case _2:
      case T2:
        break;
      default:
        throw new Z(n);
    }
  }
}
var Se2 = so;
function Oe2(e, t) {
  if (typeof e == "string") return t(e);
  let u = /* @__PURE__ */ new Map();
  return r(e);
  function r(n) {
    if (u.has(n)) return u.get(n);
    let a = o(n);
    return u.set(n, a), a;
  }
  function o(n) {
    switch (H2(n)) {
      case j2:
        return t(n.map(r));
      case w2:
        return t({ ...n, parts: n.parts.map(r) });
      case B2:
        return t({ ...n, breakContents: r(n.breakContents), flatContents: r(n.flatContents) });
      case x2: {
        let { expandedStates: a, contents: s } = n;
        return a ? (a = a.map(r), s = a[0]) : s = r(s), t({ ...n, contents: s, expandedStates: a });
      }
      case k2:
      case I:
      case R2:
      case O2:
      case L2:
        return t({ ...n, contents: r(n.contents) });
      case J:
      case U2:
      case v2:
      case M:
      case _2:
      case T2:
        return t(n);
      default:
        throw new Z(n);
    }
  }
}
function ze2(e, t, u) {
  let r = u, o = false;
  function n(a) {
    if (o) return false;
    let s = t(a);
    s !== void 0 && (o = true, r = s);
  }
  return Se2(e, n), r;
}
function Do2(e) {
  if (e.type === x2 && e.break || e.type === _2 && e.hard || e.type === T2) return true;
}
function Yu(e) {
  return ze2(e, Do2, false);
}
function Lu(e) {
  if (e.length > 0) {
    let t = b2(0, e, -1);
    !t.expandedStates && !t.break && (t.break = "propagated");
  }
  return null;
}
function ju(e) {
  let t = /* @__PURE__ */ new Set(), u = [];
  function r(n) {
    if (n.type === T2 && Lu(u), n.type === x2) {
      if (u.push(n), t.has(n)) return false;
      t.add(n);
    }
  }
  function o(n) {
    n.type === x2 && u.pop().break && Lu(u);
  }
  Se2(e, r, o, true);
}
function co(e) {
  return e.type === _2 && !e.hard ? e.soft ? "" : " " : e.type === B2 ? e.flatContents : e;
}
function Uu(e) {
  return Oe2(e, co);
}
function Mu(e) {
  for (e = [...e]; e.length >= 2 && b2(0, e, -2).type === _2 && b2(0, e, -1).type === T2; ) e.length -= 2;
  if (e.length > 0) {
    let t = we(b2(0, e, -1));
    e[e.length - 1] = t;
  }
  return e;
}
function we(e) {
  switch (H2(e)) {
    case I:
    case R2:
    case x2:
    case L2:
    case O2: {
      let t = we(e.contents);
      return { ...e, contents: t };
    }
    case B2:
      return { ...e, breakContents: we(e.breakContents), flatContents: we(e.flatContents) };
    case w2:
      return { ...e, parts: Mu(e.parts) };
    case j2:
      return Mu(e);
    case J:
      return vu(e);
    case k2:
    case U2:
    case v2:
    case M:
    case _2:
    case T2:
      break;
    default:
      throw new Z(e);
  }
  return e;
}
function He(e) {
  return we(lo(e));
}
function fo(e) {
  switch (H2(e)) {
    case w2:
      if (e.parts.every((t) => t === "")) return "";
      break;
    case x2:
      if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
      if (e.contents.type === x2 && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
      break;
    case k2:
    case I:
    case R2:
    case L2:
      if (!e.contents) return "";
      break;
    case B2:
      if (!e.flatContents && !e.breakContents) return "";
      break;
    case j2: {
      let t = [];
      for (let u of e) {
        if (!u) continue;
        let [r, ...o] = Array.isArray(u) ? u : [u];
        typeof r == "string" && typeof b2(0, t, -1) == "string" ? t[t.length - 1] += r : t.push(r), t.push(...o);
      }
      return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
    }
    case J:
    case U2:
    case v2:
    case M:
    case _2:
    case O2:
    case T2:
      break;
    default:
      throw new Z(e);
  }
  return e;
}
function lo(e) {
  return Oe2(e, (t) => fo(t));
}
function Wu(e, t = Xe2) {
  return Oe2(e, (u) => typeof u == "string" ? Pe2(t, u.split(`
`)) : u);
}
function po(e) {
  if (e.type === _2) return true;
}
function $u(e) {
  return ze2(e, po, false);
}
function Ee2(e, t) {
  return e.type === O2 ? { ...e, contents: t(e.contents) } : t(e);
}
var N2 = P;
var qe = P;
var Vu = P;
var Ku = P;
function ae(e) {
  return N2(e), { type: I, contents: e };
}
function De2(e, t) {
  return Ku(e), N2(t), { type: k2, contents: t, n: e };
}
function Ju(e) {
  return De2(Number.NEGATIVE_INFINITY, e);
}
function Qe2(e) {
  return De2({ type: "root" }, e);
}
function Gu(e) {
  return De2(-1, e);
}
function Ze2(e, t, u) {
  N2(e);
  let r = e;
  if (t > 0) {
    for (let o = 0; o < Math.floor(t / u); ++o) r = ae(r);
    r = De2(t % u, r), r = De2(Number.NEGATIVE_INFINITY, r);
  }
  return r;
}
var ce2 = { type: T2 };
var ee2 = { type: U2 };
function zu(e) {
  return Vu(e), { type: w2, parts: e };
}
function $t(e, t = {}) {
  return N2(e), qe(t.expandedStates, true), { type: x2, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function Hu(e, t) {
  return $t(e[0], { ...t, expandedStates: e });
}
function Xu(e, t = "", u = {}) {
  return N2(e), t !== "" && N2(t), { type: B2, breakContents: e, flatContents: t, groupId: u.groupId };
}
function qu(e, t) {
  return N2(e), { type: R2, contents: e, groupId: t.groupId, negate: t.negate };
}
function Pe2(e, t) {
  N2(e), qe(t);
  let u = [];
  for (let r = 0; r < t.length; r++) r !== 0 && u.push(e), u.push(t[r]);
  return u;
}
function Qu(e, t) {
  return N2(t), e ? { type: O2, label: e, contents: t } : t;
}
var et2 = { type: _2 };
var Zu = { type: _2, soft: true };
var Ie2 = { type: _2, hard: true };
var V2 = [Ie2, ce2];
var Vt2 = { type: _2, hard: true, literal: true };
var Xe2 = [Vt2, ce2];
function ke2(e) {
  return N2(e), { type: L2, contents: e };
}
var er2 = { type: M };
var tr = { type: v2 };
function te2(e) {
  if (!e) return "";
  if (Array.isArray(e)) {
    let t = [];
    for (let u of e) if (Array.isArray(u)) t.push(...te2(u));
    else {
      let r = te2(u);
      r !== "" && t.push(r);
    }
    return t;
  }
  return e.type === B2 ? { ...e, breakContents: te2(e.breakContents), flatContents: te2(e.flatContents) } : e.type === x2 ? { ...e, contents: te2(e.contents), expandedStates: e.expandedStates?.map(te2) } : e.type === w2 ? { type: "fill", parts: e.parts.map(te2) } : e.contents ? { ...e, contents: te2(e.contents) } : e;
}
function ur2(e) {
  let t = /* @__PURE__ */ Object.create(null), u = /* @__PURE__ */ new Set();
  return r(te2(e));
  function r(n, a, s) {
    if (typeof n == "string") return JSON.stringify(n);
    if (Array.isArray(n)) {
      let i = n.map(r).filter(Boolean);
      return i.length === 1 ? i[0] : `[${i.join(", ")}]`;
    }
    if (n.type === _2) {
      let i = s?.[a + 1]?.type === T2;
      return n.literal ? i ? "literalline" : "literallineWithoutBreakParent" : n.hard ? i ? "hardline" : "hardlineWithoutBreakParent" : n.soft ? "softline" : "line";
    }
    if (n.type === T2) return s?.[a - 1]?.type === _2 && s[a - 1].hard ? void 0 : "breakParent";
    if (n.type === v2) return "trim";
    if (n.type === I) return "indent(" + r(n.contents) + ")";
    if (n.type === k2) return n.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + r(n.contents) + ")" : n.n < 0 ? "dedent(" + r(n.contents) + ")" : n.n.type === "root" ? "markAsRoot(" + r(n.contents) + ")" : "align(" + JSON.stringify(n.n) + ", " + r(n.contents) + ")";
    if (n.type === B2) return "ifBreak(" + r(n.breakContents) + (n.flatContents ? ", " + r(n.flatContents) : "") + (n.groupId ? (n.flatContents ? "" : ', ""') + `, { groupId: ${o(n.groupId)} }` : "") + ")";
    if (n.type === R2) {
      let i = [];
      n.negate && i.push("negate: true"), n.groupId && i.push(`groupId: ${o(n.groupId)}`);
      let D2 = i.length > 0 ? `, { ${i.join(", ")} }` : "";
      return `indentIfBreak(${r(n.contents)}${D2})`;
    }
    if (n.type === x2) {
      let i = [];
      n.break && n.break !== "propagated" && i.push("shouldBreak: true"), n.id && i.push(`id: ${o(n.id)}`);
      let D2 = i.length > 0 ? `, { ${i.join(", ")} }` : "";
      return n.expandedStates ? `conditionalGroup([${n.expandedStates.map((f2) => r(f2)).join(",")}]${D2})` : `group(${r(n.contents)}${D2})`;
    }
    if (n.type === w2) return `fill([${n.parts.map((i) => r(i)).join(", ")}])`;
    if (n.type === L2) return "lineSuffix(" + r(n.contents) + ")";
    if (n.type === M) return "lineSuffixBoundary";
    if (n.type === O2) return `label(${JSON.stringify(n.label)}, ${r(n.contents)})`;
    if (n.type === U2) return "cursor";
    throw new Error("Unknown doc type " + n.type);
  }
  function o(n) {
    if (typeof n != "symbol") return JSON.stringify(String(n));
    if (n in t) return t[n];
    let a = n.description || "symbol";
    for (let s = 0; ; s++) {
      let i = a + (s > 0 ? ` #${s}` : "");
      if (!u.has(i)) return u.add(i), t[n] = `Symbol.for(${JSON.stringify(i)})`;
    }
  }
}
var rr2 = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
function Kt2(e) {
  return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}
function Jt2(e) {
  return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9776 && e <= 9783 || e >= 9800 && e <= 9811 || e === 9855 || e >= 9866 && e <= 9871 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12773 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e >= 94192 && e <= 94198 || e >= 94208 && e <= 101589 || e >= 101631 && e <= 101662 || e >= 101760 && e <= 101874 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e >= 119552 && e <= 119638 || e >= 119648 && e <= 119670 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128728 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129674 || e >= 129678 && e <= 129734 || e === 129736 || e >= 129741 && e <= 129756 || e >= 129759 && e <= 129770 || e >= 129775 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}
var nr2 = "\xA9\xAE\u203C\u2049\u2122\u2139\u2194\u2195\u2196\u2197\u2198\u2199\u21A9\u21AA\u2328\u23CF\u23F1\u23F2\u23F8\u23F9\u23FA\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600\u2601\u2602\u2603\u2604\u260E\u2611\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638\u2639\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694\u2695\u2696\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F1\u26F7\u26F8\u26F9\u2702\u2708\u2709\u270C\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u2764\u27A1\u2934\u2935\u2B05\u2B06\u2B07";
var Fo2 = /[^\x20-\x7F]/u;
var mo = new Set(nr2);
function Eo(e) {
  if (!e) return 0;
  if (!Fo2.test(e)) return e.length;
  e = e.replace(rr2(), (u) => mo.has(u) ? " " : "  ");
  let t = 0;
  for (let u of e) {
    let r = u.codePointAt(0);
    r <= 31 || r >= 127 && r <= 159 || r >= 768 && r <= 879 || r >= 65024 && r <= 65039 || (t += Kt2(r) || Jt2(r) ? 2 : 1);
  }
  return t;
}
var ve2 = Eo;
var Co = { type: 0 };
var ho = { type: 1 };
var Gt2 = { value: "", length: 0, queue: [], get root() {
  return Gt2;
} };
function or2(e, t, u) {
  let r = t.type === 1 ? e.queue.slice(0, -1) : [...e.queue, t], o = "", n = 0, a = 0, s = 0;
  for (let p of r) switch (p.type) {
    case 0:
      f2(), u.useTabs ? i(1) : D2(u.tabWidth);
      break;
    case 3: {
      let { string: F2 } = p;
      f2(), o += F2, n += F2.length;
      break;
    }
    case 2: {
      let { width: F2 } = p;
      a += 1, s += F2;
      break;
    }
    default:
      throw new Error(`Unexpected indent comment '${p.type}'.`);
  }
  return d(), { ...e, value: o, length: n, queue: r };
  function i(p) {
    o += "	".repeat(p), n += u.tabWidth * p;
  }
  function D2(p) {
    o += " ".repeat(p), n += p;
  }
  function f2() {
    u.useTabs ? l2() : d();
  }
  function l2() {
    a > 0 && i(a), c();
  }
  function d() {
    s > 0 && D2(s), c();
  }
  function c() {
    a = 0, s = 0;
  }
}
function ar2(e, t, u) {
  if (!t) return e;
  if (t.type === "root") return { ...e, root: e };
  if (t === Number.NEGATIVE_INFINITY) return e.root;
  let r;
  return typeof t == "number" ? t < 0 ? r = ho : r = { type: 2, width: t } : r = { type: 3, string: t }, or2(e, r, u);
}
function ir2(e, t) {
  return or2(e, Co, t);
}
function go(e) {
  let t = 0;
  for (let u = e.length - 1; u >= 0; u--) {
    let r = e[u];
    if (r === " " || r === "	") t++;
    else break;
  }
  return t;
}
function zt(e) {
  let t = go(e);
  return { text: t === 0 ? e : e.slice(0, e.length - t), count: t };
}
var W2 = Symbol("MODE_BREAK");
var q2 = Symbol("MODE_FLAT");
var Ht2 = Symbol("DOC_FILL_PRINTED_LENGTH");
function tt2(e, t, u, r, o, n) {
  if (u === Number.POSITIVE_INFINITY) return true;
  let a = t.length, s = false, i = [e], D2 = "";
  for (; u >= 0; ) {
    if (i.length === 0) {
      if (a === 0) return true;
      i.push(t[--a]);
      continue;
    }
    let { mode: f2, doc: l2 } = i.pop(), d = H2(l2);
    switch (d) {
      case J:
        l2 && (s && (D2 += " ", u -= 1, s = false), D2 += l2, u -= ve2(l2));
        break;
      case j2:
      case w2: {
        let c = d === j2 ? l2 : l2.parts, p = l2[Ht2] ?? 0;
        for (let F2 = c.length - 1; F2 >= p; F2--) i.push({ mode: f2, doc: c[F2] });
        break;
      }
      case I:
      case k2:
      case R2:
      case O2:
        i.push({ mode: f2, doc: l2.contents });
        break;
      case v2: {
        let { text: c, count: p } = zt(D2);
        D2 = c, u += p;
        break;
      }
      case x2: {
        if (n && l2.break) return false;
        let c = l2.break ? W2 : f2, p = l2.expandedStates && c === W2 ? b2(0, l2.expandedStates, -1) : l2.contents;
        i.push({ mode: c, doc: p });
        break;
      }
      case B2: {
        let p = (l2.groupId ? o[l2.groupId] || q2 : f2) === W2 ? l2.breakContents : l2.flatContents;
        p && i.push({ mode: f2, doc: p });
        break;
      }
      case _2:
        if (f2 === W2 || l2.hard) return true;
        l2.soft || (s = true);
        break;
      case L2:
        r = true;
        break;
      case M:
        if (r) return false;
        break;
    }
  }
  return false;
}
function Ce2(e, t) {
  let u = /* @__PURE__ */ Object.create(null), r = t.printWidth, o = Ne2(t.endOfLine), n = 0, a = [{ indent: Gt2, mode: W2, doc: e }], s = "", i = false, D2 = [], f2 = [], l2 = [], d = [], c = 0;
  for (ju(e); a.length > 0; ) {
    let { indent: m, mode: h5, doc: E } = a.pop();
    switch (H2(E)) {
      case J: {
        let g = o !== `
` ? oe2(0, E, `
`, o) : E;
        g && (s += g, a.length > 0 && (n += ve2(g)));
        break;
      }
      case j2:
        for (let g = E.length - 1; g >= 0; g--) a.push({ indent: m, mode: h5, doc: E[g] });
        break;
      case U2:
        if (f2.length >= 2) throw new Error("There are too many 'cursor' in doc.");
        f2.push(c + s.length);
        break;
      case I:
        a.push({ indent: ir2(m, t), mode: h5, doc: E.contents });
        break;
      case k2:
        a.push({ indent: ar2(m, E.n, t), mode: h5, doc: E.contents });
        break;
      case v2:
        y2();
        break;
      case x2:
        switch (h5) {
          case q2:
            if (!i) {
              a.push({ indent: m, mode: E.break ? W2 : q2, doc: E.contents });
              break;
            }
          case W2: {
            i = false;
            let g = { indent: m, mode: q2, doc: E.contents }, A2 = r - n, z2 = D2.length > 0;
            if (!E.break && tt2(g, a, A2, z2, u)) a.push(g);
            else if (E.expandedStates) {
              let Q2 = b2(0, E.expandedStates, -1);
              if (E.break) {
                a.push({ indent: m, mode: W2, doc: Q2 });
                break;
              } else for (let re2 = 1; re2 < E.expandedStates.length + 1; re2++) if (re2 >= E.expandedStates.length) {
                a.push({ indent: m, mode: W2, doc: Q2 });
                break;
              } else {
                let Be2 = E.expandedStates[re2], ne = { indent: m, mode: q2, doc: Be2 };
                if (tt2(ne, a, A2, z2, u)) {
                  a.push(ne);
                  break;
                }
              }
            } else a.push({ indent: m, mode: W2, doc: E.contents });
            break;
          }
        }
        E.id && (u[E.id] = b2(0, a, -1).mode);
        break;
      case w2: {
        let g = r - n, A2 = E[Ht2] ?? 0, { parts: z2 } = E, Q2 = z2.length - A2;
        if (Q2 === 0) break;
        let re2 = z2[A2 + 0], Be2 = z2[A2 + 1], ne = { indent: m, mode: q2, doc: re2 }, kt2 = { indent: m, mode: W2, doc: re2 }, vt2 = tt2(ne, [], g, D2.length > 0, u, true);
        if (Q2 === 1) {
          vt2 ? a.push(ne) : a.push(kt2);
          break;
        }
        let Ou = { indent: m, mode: q2, doc: Be2 }, Rt2 = { indent: m, mode: W2, doc: Be2 };
        if (Q2 === 2) {
          vt2 ? a.push(Ou, ne) : a.push(Rt2, kt2);
          break;
        }
        let $n2 = z2[A2 + 2], Vn2 = { indent: m, mode: h5, doc: { ...E, [Ht2]: A2 + 2 } }, Kn2 = tt2({ indent: m, mode: q2, doc: [re2, Be2, $n2] }, [], g, D2.length > 0, u, true);
        a.push(Vn2), Kn2 ? a.push(Ou, ne) : vt2 ? a.push(Rt2, ne) : a.push(Rt2, kt2);
        break;
      }
      case B2:
      case R2: {
        let g = E.groupId ? u[E.groupId] : h5;
        if (g === W2) {
          let A2 = E.type === B2 ? E.breakContents : E.negate ? E.contents : ae(E.contents);
          A2 && a.push({ indent: m, mode: h5, doc: A2 });
        }
        if (g === q2) {
          let A2 = E.type === B2 ? E.flatContents : E.negate ? ae(E.contents) : E.contents;
          A2 && a.push({ indent: m, mode: h5, doc: A2 });
        }
        break;
      }
      case L2:
        D2.push({ indent: m, mode: h5, doc: E.contents });
        break;
      case M:
        D2.length > 0 && a.push({ indent: m, mode: h5, doc: Ie2 });
        break;
      case _2:
        switch (h5) {
          case q2:
            if (E.hard) i = true;
            else {
              E.soft || (s += " ", n += 1);
              break;
            }
          case W2:
            if (D2.length > 0) {
              a.push({ indent: m, mode: h5, doc: E }, ...D2.reverse()), D2.length = 0;
              break;
            }
            E.literal ? (s += o, n = 0, m.root && (m.root.value && (s += m.root.value), n = m.root.length)) : (y2(), s += o + m.value, n = m.length);
            break;
        }
        break;
      case O2:
        a.push({ indent: m, mode: h5, doc: E.contents });
        break;
      case T2:
        break;
      default:
        throw new Z(E);
    }
    a.length === 0 && D2.length > 0 && (a.push(...D2.reverse()), D2.length = 0);
  }
  let p = l2.join("") + s, F2 = [...d, ...f2];
  if (F2.length !== 2) return { formatted: p };
  let C2 = F2[0];
  return { formatted: p, cursorNodeStart: C2, cursorNodeText: p.slice(C2, b2(0, F2, -1)) };
  function y2() {
    let { text: m, count: h5 } = zt(s);
    m && (l2.push(m), c += m.length), s = "", n -= h5, f2.length > 0 && (d.push(...f2.map((E) => Math.min(E, c))), f2.length = 0);
  }
}
function yo2(e, t, u = 0) {
  let r = 0;
  for (let o = u; o < e.length; ++o) e[o] === "	" ? r = r + t - r % t : r++;
  return r;
}
var he2 = yo2;
var Xt = class {
  constructor(t) {
    this.stack = [t];
  }
  get key() {
    let { stack: t, siblings: u } = this;
    return b2(0, t, u === null ? -2 : -4) ?? null;
  }
  get index() {
    return this.siblings === null ? null : b2(0, this.stack, -2);
  }
  get node() {
    return b2(0, this.stack, -1);
  }
  get parent() {
    return this.getNode(1);
  }
  get grandparent() {
    return this.getNode(2);
  }
  get isInArray() {
    return this.siblings !== null;
  }
  get siblings() {
    let { stack: t } = this, u = b2(0, t, -3);
    return Array.isArray(u) ? u : null;
  }
  get next() {
    let { siblings: t } = this;
    return t === null ? null : t[this.index + 1];
  }
  get previous() {
    let { siblings: t } = this;
    return t === null ? null : t[this.index - 1];
  }
  get isFirst() {
    return this.index === 0;
  }
  get isLast() {
    let { siblings: t, index: u } = this;
    return t !== null && u === t.length - 1;
  }
  get isRoot() {
    return this.stack.length === 1;
  }
  get root() {
    return this.stack[0];
  }
  get ancestors() {
    return [...this.#e()];
  }
  getName() {
    let { stack: t } = this, { length: u } = t;
    return u > 1 ? b2(0, t, -2) : null;
  }
  getValue() {
    return b2(0, this.stack, -1);
  }
  getNode(t = 0) {
    let u = this.#t(t);
    return u === -1 ? null : this.stack[u];
  }
  getParentNode(t = 0) {
    return this.getNode(t + 1);
  }
  #t(t) {
    let { stack: u } = this;
    for (let r = u.length - 1; r >= 0; r -= 2) if (!Array.isArray(u[r]) && --t < 0) return r;
    return -1;
  }
  call(t, ...u) {
    let { stack: r } = this, { length: o } = r, n = b2(0, r, -1);
    for (let a of u) n = n?.[a], r.push(a, n);
    try {
      return t(this);
    } finally {
      r.length = o;
    }
  }
  callParent(t, u = 0) {
    let r = this.#t(u + 1), o = this.stack.splice(r + 1);
    try {
      return t(this);
    } finally {
      this.stack.push(...o);
    }
  }
  each(t, ...u) {
    let { stack: r } = this, { length: o } = r, n = b2(0, r, -1);
    for (let a of u) n = n[a], r.push(a, n);
    try {
      for (let a = 0; a < n.length; ++a) r.push(a, n[a]), t(this, a, n), r.length -= 2;
    } finally {
      r.length = o;
    }
  }
  map(t, ...u) {
    let r = [];
    return this.each((o, n, a) => {
      r[n] = t(o, n, a);
    }, ...u), r;
  }
  match(...t) {
    let u = this.stack.length - 1, r = null, o = this.stack[u--];
    for (let n of t) {
      if (o === void 0) return false;
      let a = null;
      if (typeof r == "number" && (a = r, r = this.stack[u--], o = this.stack[u--]), n && !n(o, r, a)) return false;
      r = this.stack[u--], o = this.stack[u--];
    }
    return true;
  }
  findAncestor(t) {
    for (let u of this.#e()) if (t(u)) return u;
  }
  hasAncestor(t) {
    for (let u of this.#e()) if (t(u)) return true;
    return false;
  }
  *#e() {
    let { stack: t } = this;
    for (let u = t.length - 3; u >= 0; u -= 2) {
      let r = t[u];
      Array.isArray(r) || (yield r);
    }
  }
};
var sr2 = Xt;
function ge2(e) {
  return (t, u, r) => {
    let o = !!r?.backwards;
    if (u === false) return false;
    let { length: n } = t, a = u;
    for (; a >= 0 && a < n; ) {
      let s = t.charAt(a);
      if (e instanceof RegExp) {
        if (!e.test(s)) return a;
      } else if (!e.includes(s)) return a;
      o ? a-- : a++;
    }
    return a === -1 || a === n ? a : false;
  };
}
var cr2 = ge2(/\s/u);
var Y2 = ge2(" 	");
var ut = ge2(",; 	");
var rt2 = ge2(/[^\n\r]/u);
var fr2 = (e) => e === `
` || e === "\r" || e === "\u2028" || e === "\u2029";
function bo2(e, t, u) {
  let r = !!u?.backwards;
  if (t === false) return false;
  let o = e.charAt(t);
  if (r) {
    if (e.charAt(t - 1) === "\r" && o === `
`) return t - 2;
    if (fr2(o)) return t - 1;
  } else {
    if (o === "\r" && e.charAt(t + 1) === `
`) return t + 2;
    if (fr2(o)) return t + 1;
  }
  return t;
}
var K2 = bo2;
function Ao2(e, t, u = {}) {
  let r = Y2(e, u.backwards ? t - 1 : t, u), o = K2(e, r, u);
  return r !== o;
}
var G2 = Ao2;
function _o(e) {
  return Array.isArray(e) && e.length > 0;
}
var lr2 = _o;
function xo2(e) {
  return e !== null && typeof e == "object";
}
var nt2 = xo2;
function* ye2(e, t) {
  let { getVisitorKeys: u, filter: r = () => true } = t, o = (n) => nt2(n) && r(n);
  for (let n of u(e)) {
    let a = e[n];
    if (Array.isArray(a)) for (let s of a) o(s) && (yield s);
    else o(a) && (yield a);
  }
}
function* dr2(e, t) {
  let u = [e];
  for (let r = 0; r < u.length; r++) {
    let o = u[r];
    for (let n of ye2(o, t)) yield n, u.push(n);
  }
}
function pr2(e, t) {
  return ye2(e, t).next().done;
}
function Fr(e, t, u) {
  let { cache: r } = u;
  if (r.has(e)) return r.get(e);
  let { filter: o } = u;
  if (!o) return [];
  let n, a = (u.getChildren?.(e, u) ?? [...ye2(e, { getVisitorKeys: u.getVisitorKeys })]).flatMap((D2) => (n ?? (n = [e, ...t]), o(D2, n) ? [D2] : Fr(D2, n, u))), { locStart: s, locEnd: i } = u;
  return a.sort((D2, f2) => s(D2) - s(f2) || i(D2) - i(f2)), r.set(e, a), a;
}
var ot2 = Fr;
function Bo2(e) {
  let t = e.type || e.kind || "(unknown type)", u = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
  return u.length > 20 && (u = u.slice(0, 19) + "\u2026"), t + (u ? " " + u : "");
}
function qt2(e, t) {
  (e.comments ?? (e.comments = [])).push(t), t.printed = false, t.nodeDescription = Bo2(e);
}
function fe2(e, t) {
  t.leading = true, t.trailing = false, qt2(e, t);
}
function ue2(e, t, u) {
  t.leading = false, t.trailing = false, u && (t.marker = u), qt2(e, t);
}
function le2(e, t) {
  t.leading = false, t.trailing = true, qt2(e, t);
}
var eu = /* @__PURE__ */ new WeakMap();
function Er2(e, t, u, r, o = []) {
  let { locStart: n, locEnd: a } = u, s = n(t), i = a(t), D2 = ot2(e, o, { cache: eu, locStart: n, locEnd: a, getVisitorKeys: u.getVisitorKeys, filter: u.printer.canAttachComment, getChildren: u.printer.getCommentChildNodes }), f2, l2, d = 0, c = D2.length;
  for (; d < c; ) {
    let p = d + c >> 1, F2 = D2[p], C2 = n(F2), y2 = a(F2);
    if (C2 <= s && i <= y2) return Er2(F2, t, u, F2, [F2, ...o]);
    if (y2 <= s) {
      f2 = F2, d = p + 1;
      continue;
    }
    if (i <= C2) {
      l2 = F2, c = p;
      continue;
    }
    throw new Error("Comment location overlaps with node location");
  }
  if (r?.type === "TemplateLiteral") {
    let { quasis: p } = r, F2 = Zt2(p, t, u);
    f2 && Zt2(p, f2, u) !== F2 && (f2 = null), l2 && Zt2(p, l2, u) !== F2 && (l2 = null);
  }
  return { enclosingNode: r, precedingNode: f2, followingNode: l2 };
}
var Qt2 = () => false;
function Cr2(e, t) {
  let { comments: u } = e;
  if (delete e.comments, !lr2(u) || !t.printer.canAttachComment) return;
  let r = [], { printer: { features: { experimental_avoidAstMutation: o }, handleComments: n = {} }, originalText: a } = t, { ownLine: s = Qt2, endOfLine: i = Qt2, remaining: D2 = Qt2 } = n, f2 = u.map((l2, d) => ({ ...Er2(e, l2, t), comment: l2, text: a, options: t, ast: e, isLastComment: u.length - 1 === d }));
  for (let [l2, d] of f2.entries()) {
    let { comment: c, precedingNode: p, enclosingNode: F2, followingNode: C2, text: y2, options: m, ast: h5, isLastComment: E } = d, g;
    if (o ? g = [d] : (c.enclosingNode = F2, c.precedingNode = p, c.followingNode = C2, g = [c, y2, m, h5, E]), To2(y2, m, f2, l2)) c.placement = "ownLine", s(...g) || (C2 ? fe2(C2, c) : p ? le2(p, c) : F2 ? ue2(F2, c) : ue2(h5, c));
    else if (No2(y2, m, f2, l2)) c.placement = "endOfLine", i(...g) || (p ? le2(p, c) : C2 ? fe2(C2, c) : F2 ? ue2(F2, c) : ue2(h5, c));
    else if (c.placement = "remaining", !D2(...g)) if (p && C2) {
      let A2 = r.length;
      A2 > 0 && r[A2 - 1].followingNode !== C2 && mr2(r, m), r.push(d);
    } else p ? le2(p, c) : C2 ? fe2(C2, c) : F2 ? ue2(F2, c) : ue2(h5, c);
  }
  if (mr2(r, t), !o) for (let l2 of u) delete l2.precedingNode, delete l2.enclosingNode, delete l2.followingNode;
}
var hr2 = (e) => !/[\S\n\u2028\u2029]/u.test(e);
function To2(e, t, u, r) {
  let { comment: o, precedingNode: n } = u[r], { locStart: a, locEnd: s } = t, i = a(o);
  if (n) for (let D2 = r - 1; D2 >= 0; D2--) {
    let { comment: f2, precedingNode: l2 } = u[D2];
    if (l2 !== n || !hr2(e.slice(s(f2), i))) break;
    i = a(f2);
  }
  return G2(e, i, { backwards: true });
}
function No2(e, t, u, r) {
  let { comment: o, followingNode: n } = u[r], { locStart: a, locEnd: s } = t, i = s(o);
  if (n) for (let D2 = r + 1; D2 < u.length; D2++) {
    let { comment: f2, followingNode: l2 } = u[D2];
    if (l2 !== n || !hr2(e.slice(i, a(f2)))) break;
    i = s(f2);
  }
  return G2(e, i);
}
function mr2(e, t) {
  let u = e.length;
  if (u === 0) return;
  let { precedingNode: r, followingNode: o } = e[0], n = t.locStart(o), a;
  for (a = u; a > 0; --a) {
    let { comment: s, precedingNode: i, followingNode: D2 } = e[a - 1];
    P(i, r), P(D2, o);
    let f2 = t.originalText.slice(t.locEnd(s), n);
    if (t.printer.isGap?.(f2, t) ?? /^[\s(]*$/u.test(f2)) n = t.locStart(s);
    else break;
  }
  for (let [s, { comment: i }] of e.entries()) s < a ? le2(r, i) : fe2(o, i);
  for (let s of [r, o]) s.comments && s.comments.length > 1 && s.comments.sort((i, D2) => t.locStart(i) - t.locStart(D2));
  e.length = 0;
}
function Zt2(e, t, u) {
  let r = u.locStart(t) - 1;
  for (let o = 1; o < e.length; ++o) if (r < u.locStart(e[o])) return o - 1;
  return 0;
}
function So(e, t) {
  let u = t - 1;
  u = Y2(e, u, { backwards: true }), u = K2(e, u, { backwards: true }), u = Y2(e, u, { backwards: true });
  let r = K2(e, u, { backwards: true });
  return u !== r;
}
var Re2 = So;
function gr2(e, t) {
  let u = e.node;
  return u.printed = true, t.printer.printComment(e, t);
}
function wo2(e, t) {
  let u = e.node, r = [gr2(e, t)], { printer: o, originalText: n, locStart: a, locEnd: s } = t;
  if (o.isBlockComment?.(u)) {
    let f2 = G2(n, s(u)) ? G2(n, a(u), { backwards: true }) ? V2 : et2 : " ";
    r.push(f2);
  } else r.push(V2);
  let D2 = K2(n, Y2(n, s(u)));
  return D2 !== false && G2(n, D2) && r.push(V2), r;
}
function Oo2(e, t, u) {
  let r = e.node, o = gr2(e, t), { printer: n, originalText: a, locStart: s } = t, i = n.isBlockComment?.(r);
  if (u?.hasLineSuffix && !u?.isBlock || G2(a, s(r), { backwards: true })) {
    let D2 = Re2(a, s(r));
    return { doc: ke2([V2, D2 ? V2 : "", o]), isBlock: i, hasLineSuffix: true };
  }
  return !i || u?.hasLineSuffix ? { doc: [ke2([" ", o]), ce2], isBlock: i, hasLineSuffix: true } : { doc: [" ", o], isBlock: i, hasLineSuffix: false };
}
function Po2(e, t) {
  let u = e.node;
  if (!u) return {};
  let r = t[Symbol.for("printedComments")];
  if ((u.comments || []).filter((i) => !r.has(i)).length === 0) return { leading: "", trailing: "" };
  let n = [], a = [], s;
  return e.each(() => {
    let i = e.node;
    if (r?.has(i)) return;
    let { leading: D2, trailing: f2 } = i;
    D2 ? n.push(wo2(e, t)) : f2 && (s = Oo2(e, t, s), a.push(s.doc));
  }, "comments"), { leading: n, trailing: a };
}
function yr2(e, t, u) {
  let { leading: r, trailing: o } = Po2(e, u);
  return !r && !o ? t : Ee2(t, (n) => [r, n, o]);
}
function br2(e) {
  let { [Symbol.for("comments")]: t, [Symbol.for("printedComments")]: u } = e;
  for (let r of t) {
    if (!r.printed && !u.has(r)) throw new Error('Comment "' + r.value.trim() + '" was not printed. Please report this error!');
    delete r.printed;
  }
}
var Ar2 = () => P;
var Le2 = class extends Error {
  name = "ConfigError";
};
var Me2 = class extends Error {
  name = "UndefinedParserError";
};
var _r2 = { checkIgnorePragma: { category: "Special", type: "boolean", default: false, description: "Check whether the file's first docblock comment contains '@noprettier' or '@noformat' to determine if it should be formatted.", cliCategory: "Other" }, cursorOffset: { category: "Special", type: "int", default: -1, range: { start: -1, end: 1 / 0, step: 1 }, description: "Print (to stderr) where a cursor at the given position would move to after formatting.", cliCategory: "Editor" }, endOfLine: { category: "Global", type: "choice", default: "lf", description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)` }] }, filepath: { category: "Special", type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: "Other", cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { category: "Special", type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: "Other" }, parser: { category: "Global", type: "choice", default: void 0, description: "Which parser to use.", exception: (e) => typeof e == "string" || typeof e == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", description: "JavaScript" }, { value: "babel-flow", description: "Flow" }, { value: "babel-ts", description: "TypeScript" }, { value: "typescript", description: "TypeScript" }, { value: "acorn", description: "JavaScript" }, { value: "espree", description: "JavaScript" }, { value: "meriyah", description: "JavaScript" }, { value: "css", description: "CSS" }, { value: "less", description: "Less" }, { value: "scss", description: "SCSS" }, { value: "json", description: "JSON" }, { value: "json5", description: "JSON5" }, { value: "jsonc", description: "JSON with Comments" }, { value: "json-stringify", description: "JSON.stringify" }, { value: "graphql", description: "GraphQL" }, { value: "markdown", description: "Markdown" }, { value: "mdx", description: "MDX" }, { value: "vue", description: "Vue" }, { value: "yaml", description: "YAML" }, { value: "glimmer", description: "Ember / Handlebars" }, { value: "html", description: "HTML" }, { value: "angular", description: "Angular" }, { value: "lwc", description: "Lightning Web Components" }, { value: "mjml", description: "MJML" }] }, plugins: { type: "path", array: true, default: [{ value: [] }], category: "Global", description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (e) => typeof e == "string" || typeof e == "object", cliName: "plugin", cliCategory: "Config" }, printWidth: { category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: 1 / 0, step: 1 } }, rangeEnd: { category: "Special", type: "int", default: 1 / 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`, cliCategory: "Editor" }, rangeStart: { category: "Special", type: "int", default: 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`, cliCategory: "Editor" }, requirePragma: { category: "Special", type: "boolean", default: false, description: "Require either '@prettier' or '@format' to be present in the file's first docblock comment in order for it to be formatted.", cliCategory: "Other" }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } }, useTabs: { category: "Global", type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { category: "Global", type: "choice", default: "auto", description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
function at2({ plugins: e = [], showDeprecated: t = false } = {}) {
  let u = e.flatMap((o) => o.languages ?? []), r = [];
  for (let o of ko2(Object.assign({}, ...e.map(({ options: n }) => n), _r2))) !t && o.deprecated || (Array.isArray(o.choices) && (t || (o.choices = o.choices.filter((n) => !n.deprecated)), o.name === "parser" && (o.choices = [...o.choices, ...Io2(o.choices, u, e)])), o.pluginDefaults = Object.fromEntries(e.filter((n) => n.defaultOptions?.[o.name] !== void 0).map((n) => [n.name, n.defaultOptions[o.name]])), r.push(o));
  return { languages: u, options: r };
}
function* Io2(e, t, u) {
  let r = new Set(e.map((o) => o.value));
  for (let o of t) if (o.parsers) {
    for (let n of o.parsers) if (!r.has(n)) {
      r.add(n);
      let a = u.find((i) => i.parsers && Object.prototype.hasOwnProperty.call(i.parsers, n)), s = o.name;
      a?.name && (s += ` (plugin: ${a.name})`), yield { value: n, description: s };
    }
  }
}
function ko2(e) {
  let t = [];
  for (let [u, r] of Object.entries(e)) {
    let o = { name: u, ...r };
    Array.isArray(o.default) && (o.default = b2(0, o.default, -1).value), t.push(o);
  }
  return t;
}
var vo = Array.prototype.toReversed ?? function() {
  return [...this].reverse();
};
var Ro2 = X2("toReversed", function() {
  if (Array.isArray(this)) return vo;
});
var xr2 = Ro2;
function Lo2() {
  let e = globalThis, t = e.Deno?.build?.os;
  return typeof t == "string" ? t === "windows" : e.navigator?.platform?.startsWith("Win") ?? e.process?.platform?.startsWith("win") ?? false;
}
var Mo2 = Lo2();
function Br(e) {
  if (e = e instanceof URL ? e : new URL(e), e.protocol !== "file:") throw new TypeError(`URL must be a file URL: received "${e.protocol}"`);
  return e;
}
function Yo2(e) {
  return e = Br(e), decodeURIComponent(e.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function jo2(e) {
  e = Br(e);
  let t = decodeURIComponent(e.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
  return e.hostname !== "" && (t = `\\\\${e.hostname}${t}`), t;
}
function tu(e) {
  return Mo2 ? jo2(e) : Yo2(e);
}
var Tr2 = (e) => String(e).split(/[/\\]/u).pop();
var Nr2 = (e) => String(e).startsWith("file:");
function Sr2(e, t) {
  if (!t) return;
  let u = Tr2(t).toLowerCase();
  return e.find(({ filenames: r }) => r?.some((o) => o.toLowerCase() === u)) ?? e.find(({ extensions: r }) => r?.some((o) => u.endsWith(o)));
}
function Uo2(e, t) {
  if (t) return e.find(({ name: u }) => u.toLowerCase() === t) ?? e.find(({ aliases: u }) => u?.includes(t)) ?? e.find(({ extensions: u }) => u?.includes(`.${t}`));
}
var Wo2 = void 0;
function wr2(e, t) {
  if (t) {
    if (Nr2(t)) try {
      t = tu(t);
    } catch {
      return;
    }
    if (typeof t == "string") return e.find(({ isSupported: u }) => u?.({ filepath: t }));
  }
}
function $o2(e, t) {
  let u = xr2(0, e.plugins).flatMap((o) => o.languages ?? []);
  return (Uo2(u, t.language) ?? Sr2(u, t.physicalFile) ?? Sr2(u, t.file) ?? wr2(u, t.physicalFile) ?? wr2(u, t.file) ?? Wo2?.(u, t.physicalFile))?.parsers[0];
}
var it2 = $o2;
var ie = { key: (e) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e), value(e) {
  if (e === null || typeof e != "object") return JSON.stringify(e);
  if (Array.isArray(e)) return `[${e.map((u) => ie.value(u)).join(", ")}]`;
  let t = Object.keys(e);
  return t.length === 0 ? "{}" : `{ ${t.map((u) => `${ie.key(u)}: ${ie.value(e[u])}`).join(", ")} }`;
}, pair: ({ key: e, value: t }) => ie.value({ [e]: t }) };
var uu = new Proxy(String, { get: () => uu });
var $ = uu;
var ru = () => uu;
var Or = (e, t, { descriptor: u }) => {
  let r = [`${$.yellow(typeof e == "string" ? u.key(e) : u.pair(e))} is deprecated`];
  return t && r.push(`we now treat it as ${$.blue(typeof t == "string" ? u.key(t) : u.pair(t))}`), r.join("; ") + ".";
};
var st2 = Symbol.for("vnopts.VALUE_NOT_EXIST");
var be2 = Symbol.for("vnopts.VALUE_UNCHANGED");
var Pr = " ".repeat(2);
var kr2 = (e, t, u) => {
  let { text: r, list: o } = u.normalizeExpectedResult(u.schemas[e].expected(u)), n = [];
  return r && n.push(Ir2(e, t, r, u.descriptor)), o && n.push([Ir2(e, t, o.title, u.descriptor)].concat(o.values.map((a) => vr2(a, u.loggerPrintWidth))).join(`
`)), Rr2(n, u.loggerPrintWidth);
};
function Ir2(e, t, u, r) {
  return [`Invalid ${$.red(r.key(e))} value.`, `Expected ${$.blue(u)},`, `but received ${t === st2 ? $.gray("nothing") : $.red(r.value(t))}.`].join(" ");
}
function vr2({ text: e, list: t }, u) {
  let r = [];
  return e && r.push(`- ${$.blue(e)}`), t && r.push([`- ${$.blue(t.title)}:`].concat(t.values.map((o) => vr2(o, u - Pr.length).replace(/^|\n/g, `$&${Pr}`))).join(`
`)), Rr2(r, u);
}
function Rr2(e, t) {
  if (e.length === 1) return e[0];
  let [u, r] = e, [o, n] = e.map((a) => a.split(`
`, 1)[0].length);
  return o > t && o > n ? r : u;
}
var Ae2 = [];
var nu = [];
function Dt2(e, t, u) {
  if (e === t) return 0;
  let r = u?.maxDistance, o = e;
  e.length > t.length && (e = t, t = o);
  let n = e.length, a = t.length;
  for (; n > 0 && e.charCodeAt(~-n) === t.charCodeAt(~-a); ) n--, a--;
  let s = 0;
  for (; s < n && e.charCodeAt(s) === t.charCodeAt(s); ) s++;
  if (n -= s, a -= s, r !== void 0 && a - n > r) return r;
  if (n === 0) return r !== void 0 && a > r ? r : a;
  let i, D2, f2, l2, d = 0, c = 0;
  for (; d < n; ) nu[d] = e.charCodeAt(s + d), Ae2[d] = ++d;
  for (; c < a; ) {
    for (i = t.charCodeAt(s + c), f2 = c++, D2 = c, d = 0; d < n; d++) l2 = i === nu[d] ? f2 : f2 + 1, f2 = Ae2[d], D2 = Ae2[d] = f2 > D2 ? l2 > D2 ? D2 + 1 : l2 : l2 > f2 ? f2 + 1 : l2;
    if (r !== void 0) {
      let p = D2;
      for (d = 0; d < n; d++) Ae2[d] < p && (p = Ae2[d]);
      if (p > r) return r;
    }
  }
  return Ae2.length = n, nu.length = n, r !== void 0 && D2 > r ? r : D2;
}
function Lr(e, t, u) {
  if (!Array.isArray(t) || t.length === 0) return;
  let r = u?.maxDistance, o = e.length;
  for (let i of t) if (i === e) return i;
  if (r === 0) return;
  let n, a = Number.POSITIVE_INFINITY, s = /* @__PURE__ */ new Set();
  for (let i of t) {
    if (s.has(i)) continue;
    s.add(i);
    let D2 = Math.abs(i.length - o);
    if (D2 >= a || r !== void 0 && D2 > r) continue;
    let f2 = Number.isFinite(a) ? r === void 0 ? a : Math.min(a, r) : r, l2 = f2 === void 0 ? Dt2(e, i) : Dt2(e, i, { maxDistance: f2 });
    if (r !== void 0 && l2 > r) continue;
    let d = l2;
    if (f2 !== void 0 && l2 === f2 && f2 === r && (d = Dt2(e, i)), d < a && (a = d, n = i, a === 0)) break;
  }
  if (!(r !== void 0 && a > r)) return n;
}
var ct2 = (e, t, { descriptor: u, logger: r, schemas: o }) => {
  let n = [`Ignored unknown option ${$.yellow(u.pair({ key: e, value: t }))}.`], a = Lr(e, Object.keys(o), { maxDistance: 3 });
  a && n.push(`Did you mean ${$.blue(u.key(a))}?`), r.warn(n.join(" "));
};
var Vo2 = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
function Ko2(e, t) {
  let u = new e(t), r = Object.create(u);
  for (let o of Vo2) o in t && (r[o] = Jo2(t[o], u, S.prototype[o].length));
  return r;
}
var S = class {
  static create(t) {
    return Ko2(this, t);
  }
  constructor(t) {
    this.name = t.name;
  }
  default(t) {
  }
  expected(t) {
    return "nothing";
  }
  validate(t, u) {
    return false;
  }
  deprecated(t, u) {
    return false;
  }
  forward(t, u) {
  }
  redirect(t, u) {
  }
  overlap(t, u, r) {
    return t;
  }
  preprocess(t, u) {
    return t;
  }
  postprocess(t, u) {
    return be2;
  }
};
function Jo2(e, t, u) {
  return typeof e == "function" ? (...r) => e(...r.slice(0, u - 1), t, ...r.slice(u - 1)) : () => e;
}
var ft2 = class extends S {
  constructor(t) {
    super(t), this._sourceName = t.sourceName;
  }
  expected(t) {
    return t.schemas[this._sourceName].expected(t);
  }
  validate(t, u) {
    return u.schemas[this._sourceName].validate(t, u);
  }
  redirect(t, u) {
    return this._sourceName;
  }
};
var lt2 = class extends S {
  expected() {
    return "anything";
  }
  validate() {
    return true;
  }
};
var dt = class extends S {
  constructor({ valueSchema: t, name: u = t.name, ...r }) {
    super({ ...r, name: u }), this._valueSchema = t;
  }
  expected(t) {
    let { text: u, list: r } = t.normalizeExpectedResult(this._valueSchema.expected(t));
    return { text: u && `an array of ${u}`, list: r && { title: "an array of the following values", values: [{ list: r }] } };
  }
  validate(t, u) {
    if (!Array.isArray(t)) return false;
    let r = [];
    for (let o of t) {
      let n = u.normalizeValidateResult(this._valueSchema.validate(o, u), o);
      n !== true && r.push(n.value);
    }
    return r.length === 0 ? true : { value: r };
  }
  deprecated(t, u) {
    let r = [];
    for (let o of t) {
      let n = u.normalizeDeprecatedResult(this._valueSchema.deprecated(o, u), o);
      n !== false && r.push(...n.map(({ value: a }) => ({ value: [a] })));
    }
    return r;
  }
  forward(t, u) {
    let r = [];
    for (let o of t) {
      let n = u.normalizeForwardResult(this._valueSchema.forward(o, u), o);
      r.push(...n.map(Mr2));
    }
    return r;
  }
  redirect(t, u) {
    let r = [], o = [];
    for (let n of t) {
      let a = u.normalizeRedirectResult(this._valueSchema.redirect(n, u), n);
      "remain" in a && r.push(a.remain), o.push(...a.redirect.map(Mr2));
    }
    return r.length === 0 ? { redirect: o } : { redirect: o, remain: r };
  }
  overlap(t, u) {
    return t.concat(u);
  }
};
function Mr2({ from: e, to: t }) {
  return { from: [e], to: t };
}
var pt2 = class extends S {
  expected() {
    return "true or false";
  }
  validate(t) {
    return typeof t == "boolean";
  }
};
function jr2(e, t) {
  let u = /* @__PURE__ */ Object.create(null);
  for (let r of e) {
    let o = r[t];
    if (u[o]) throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);
    u[o] = r;
  }
  return u;
}
function Ur2(e, t) {
  let u = /* @__PURE__ */ new Map();
  for (let r of e) {
    let o = r[t];
    if (u.has(o)) throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);
    u.set(o, r);
  }
  return u;
}
function Wr2() {
  let e = /* @__PURE__ */ Object.create(null);
  return (t) => {
    let u = JSON.stringify(t);
    return e[u] ? true : (e[u] = true, false);
  };
}
function $r2(e, t) {
  let u = [], r = [];
  for (let o of e) t(o) ? u.push(o) : r.push(o);
  return [u, r];
}
function Vr2(e) {
  return e === Math.floor(e);
}
function Kr2(e, t) {
  if (e === t) return 0;
  let u = typeof e, r = typeof t, o = ["undefined", "object", "boolean", "number", "string"];
  return u !== r ? o.indexOf(u) - o.indexOf(r) : u !== "string" ? Number(e) - Number(t) : e.localeCompare(t);
}
function Jr2(e) {
  return (...t) => {
    let u = e(...t);
    return typeof u == "string" ? new Error(u) : u;
  };
}
function ou(e) {
  return e === void 0 ? {} : e;
}
function au(e) {
  if (typeof e == "string") return { text: e };
  let { text: t, list: u } = e;
  return Go2((t || u) !== void 0, "Unexpected `expected` result, there should be at least one field."), u ? { text: t, list: { title: u.title, values: u.values.map(au) } } : { text: t };
}
function iu(e, t) {
  return e === true ? true : e === false ? { value: t } : e;
}
function su(e, t, u = false) {
  return e === false ? false : e === true ? u ? true : [{ value: t }] : "value" in e ? [e] : e.length === 0 ? false : e;
}
function Yr2(e, t) {
  return typeof e == "string" || "key" in e ? { from: t, to: e } : "from" in e ? { from: e.from, to: e.to } : { from: t, to: e.to };
}
function Ft2(e, t) {
  return e === void 0 ? [] : Array.isArray(e) ? e.map((u) => Yr2(u, t)) : [Yr2(e, t)];
}
function Du(e, t) {
  let u = Ft2(typeof e == "object" && "redirect" in e ? e.redirect : e, t);
  return u.length === 0 ? { remain: t, redirect: u } : typeof e == "object" && "remain" in e ? { remain: e.remain, redirect: u } : { redirect: u };
}
function Go2(e, t) {
  if (!e) throw new Error(t);
}
var mt = class extends S {
  constructor(t) {
    super(t), this._choices = Ur2(t.choices.map((u) => u && typeof u == "object" ? u : { value: u }), "value");
  }
  expected({ descriptor: t }) {
    let u = Array.from(this._choices.keys()).map((a) => this._choices.get(a)).filter(({ hidden: a }) => !a).map((a) => a.value).sort(Kr2).map(t.value), r = u.slice(0, -2), o = u.slice(-2);
    return { text: r.concat(o.join(" or ")).join(", "), list: { title: "one of the following values", values: u } };
  }
  validate(t) {
    return this._choices.has(t);
  }
  deprecated(t) {
    let u = this._choices.get(t);
    return u && u.deprecated ? { value: t } : false;
  }
  forward(t) {
    let u = this._choices.get(t);
    return u ? u.forward : void 0;
  }
  redirect(t) {
    let u = this._choices.get(t);
    return u ? u.redirect : void 0;
  }
};
var Et2 = class extends S {
  expected() {
    return "a number";
  }
  validate(t, u) {
    return typeof t == "number";
  }
};
var Ct2 = class extends Et2 {
  expected() {
    return "an integer";
  }
  validate(t, u) {
    return u.normalizeValidateResult(super.validate(t, u), t) === true && Vr2(t);
  }
};
var Ye2 = class extends S {
  expected() {
    return "a string";
  }
  validate(t) {
    return typeof t == "string";
  }
};
var Gr2 = ie;
var zr2 = ct2;
var Hr2 = kr2;
var Xr2 = Or;
var ht2 = class {
  constructor(t, u) {
    let { logger: r = console, loggerPrintWidth: o = 80, descriptor: n = Gr2, unknown: a = zr2, invalid: s = Hr2, deprecated: i = Xr2, missing: D2 = () => false, required: f2 = () => false, preprocess: l2 = (c) => c, postprocess: d = () => be2 } = u || {};
    this._utils = { descriptor: n, logger: r || { warn: () => {
    } }, loggerPrintWidth: o, schemas: jr2(t, "name"), normalizeDefaultResult: ou, normalizeExpectedResult: au, normalizeDeprecatedResult: su, normalizeForwardResult: Ft2, normalizeRedirectResult: Du, normalizeValidateResult: iu }, this._unknownHandler = a, this._invalidHandler = Jr2(s), this._deprecatedHandler = i, this._identifyMissing = (c, p) => !(c in p) || D2(c, p), this._identifyRequired = f2, this._preprocess = l2, this._postprocess = d, this.cleanHistory();
  }
  cleanHistory() {
    this._hasDeprecationWarned = Wr2();
  }
  normalize(t) {
    let u = {}, o = [this._preprocess(t, this._utils)], n = () => {
      for (; o.length !== 0; ) {
        let a = o.shift(), s = this._applyNormalization(a, u);
        o.push(...s);
      }
    };
    n();
    for (let a of Object.keys(this._utils.schemas)) {
      let s = this._utils.schemas[a];
      if (!(a in u)) {
        let i = ou(s.default(this._utils));
        "value" in i && o.push({ [a]: i.value });
      }
    }
    n();
    for (let a of Object.keys(this._utils.schemas)) {
      if (!(a in u)) continue;
      let s = this._utils.schemas[a], i = u[a], D2 = s.postprocess(i, this._utils);
      D2 !== be2 && (this._applyValidation(D2, a, s), u[a] = D2);
    }
    return this._applyPostprocess(u), this._applyRequiredCheck(u), u;
  }
  _applyNormalization(t, u) {
    let r = [], { knownKeys: o, unknownKeys: n } = this._partitionOptionKeys(t);
    for (let a of o) {
      let s = this._utils.schemas[a], i = s.preprocess(t[a], this._utils);
      this._applyValidation(i, a, s);
      let D2 = ({ from: c, to: p }) => {
        r.push(typeof p == "string" ? { [p]: c } : { [p.key]: p.value });
      }, f2 = ({ value: c, redirectTo: p }) => {
        let F2 = su(s.deprecated(c, this._utils), i, true);
        if (F2 !== false) if (F2 === true) this._hasDeprecationWarned(a) || this._utils.logger.warn(this._deprecatedHandler(a, p, this._utils));
        else for (let { value: C2 } of F2) {
          let y2 = { key: a, value: C2 };
          if (!this._hasDeprecationWarned(y2)) {
            let m = typeof p == "string" ? { key: p, value: C2 } : p;
            this._utils.logger.warn(this._deprecatedHandler(y2, m, this._utils));
          }
        }
      };
      Ft2(s.forward(i, this._utils), i).forEach(D2);
      let d = Du(s.redirect(i, this._utils), i);
      if (d.redirect.forEach(D2), "remain" in d) {
        let c = d.remain;
        u[a] = a in u ? s.overlap(u[a], c, this._utils) : c, f2({ value: c });
      }
      for (let { from: c, to: p } of d.redirect) f2({ value: c, redirectTo: p });
    }
    for (let a of n) {
      let s = t[a];
      this._applyUnknownHandler(a, s, u, (i, D2) => {
        r.push({ [i]: D2 });
      });
    }
    return r;
  }
  _applyRequiredCheck(t) {
    for (let u of Object.keys(this._utils.schemas)) if (this._identifyMissing(u, t) && this._identifyRequired(u)) throw this._invalidHandler(u, st2, this._utils);
  }
  _partitionOptionKeys(t) {
    let [u, r] = $r2(Object.keys(t).filter((o) => !this._identifyMissing(o, t)), (o) => o in this._utils.schemas);
    return { knownKeys: u, unknownKeys: r };
  }
  _applyValidation(t, u, r) {
    let o = iu(r.validate(t, this._utils), t);
    if (o !== true) throw this._invalidHandler(u, o.value, this._utils);
  }
  _applyUnknownHandler(t, u, r, o) {
    let n = this._unknownHandler(t, u, this._utils);
    if (n) for (let a of Object.keys(n)) {
      if (this._identifyMissing(a, n)) continue;
      let s = n[a];
      a in this._utils.schemas ? o(a, s) : r[a] = s;
    }
  }
  _applyPostprocess(t) {
    let u = this._postprocess(t, this._utils);
    if (u !== be2) {
      if (u.delete) for (let r of u.delete) delete t[r];
      if (u.override) {
        let { knownKeys: r, unknownKeys: o } = this._partitionOptionKeys(u.override);
        for (let n of r) {
          let a = u.override[n];
          this._applyValidation(a, n, this._utils.schemas[n]), t[n] = a;
        }
        for (let n of o) {
          let a = u.override[n];
          this._applyUnknownHandler(n, a, t, (s, i) => {
            let D2 = this._utils.schemas[s];
            this._applyValidation(i, s, D2), t[s] = i;
          });
        }
      }
    }
  }
};
var cu;
function Ho2(e, t, { logger: u = false, isCLI: r = false, passThrough: o = false, FlagSchema: n, descriptor: a } = {}) {
  if (r) {
    if (!n) throw new Error("'FlagSchema' option is required.");
    if (!a) throw new Error("'descriptor' option is required.");
  } else a = ie;
  let s = o ? Array.isArray(o) ? (d, c) => o.includes(d) ? { [d]: c } : void 0 : (d, c) => ({ [d]: c }) : (d, c, p) => {
    let { _: F2, ...C2 } = p.schemas;
    return ct2(d, c, { ...p, schemas: C2 });
  }, i = Xo2(t, { isCLI: r, FlagSchema: n }), D2 = new ht2(i, { logger: u, unknown: s, descriptor: a }), f2 = u !== false;
  f2 && cu && (D2._hasDeprecationWarned = cu);
  let l2 = D2.normalize(e);
  return f2 && (cu = D2._hasDeprecationWarned), l2;
}
function Xo2(e, { isCLI: t, FlagSchema: u }) {
  let r = [];
  t && r.push(lt2.create({ name: "_" }));
  for (let o of e) r.push(qo2(o, { isCLI: t, optionInfos: e, FlagSchema: u })), o.alias && t && r.push(ft2.create({ name: o.alias, sourceName: o.name }));
  return r;
}
function qo2(e, { isCLI: t, optionInfos: u, FlagSchema: r }) {
  let { name: o } = e, n = { name: o }, a, s = {};
  switch (e.type) {
    case "int":
      a = Ct2, t && (n.preprocess = Number);
      break;
    case "string":
      a = Ye2;
      break;
    case "choice":
      a = mt, n.choices = e.choices.map((i) => i?.redirect ? { ...i, redirect: { to: { key: e.name, value: i.redirect } } } : i);
      break;
    case "boolean":
      a = pt2;
      break;
    case "flag":
      a = r, n.flags = u.flatMap((i) => [i.alias, i.description && i.name, i.oppositeDescription && `no-${i.name}`].filter(Boolean));
      break;
    case "path":
      a = Ye2;
      break;
    default:
      throw new Error(`Unexpected type ${e.type}`);
  }
  if (e.exception ? n.validate = (i, D2, f2) => e.exception(i) || D2.validate(i, f2) : n.validate = (i, D2, f2) => i === void 0 || D2.validate(i, f2), e.redirect && (s.redirect = (i) => i ? { to: typeof e.redirect == "string" ? e.redirect : { key: e.redirect.option, value: e.redirect.value } } : void 0), e.deprecated && (s.deprecated = true), t && !e.array) {
    let i = n.preprocess || ((D2) => D2);
    n.preprocess = (D2, f2, l2) => f2.preprocess(i(Array.isArray(D2) ? b2(0, D2, -1) : D2), l2);
  }
  return e.array ? dt.create({ ...t ? { preprocess: (i) => Array.isArray(i) ? i : [i] } : {}, ...s, valueSchema: a.create(n) }) : a.create({ ...n, ...s });
}
var qr2 = Ho2;
var Qo2 = Array.prototype.findLast ?? function(e) {
  for (let t = this.length - 1; t >= 0; t--) {
    let u = this[t];
    if (e(u, t, this)) return u;
  }
};
var Zo2 = X2("findLast", function() {
  if (Array.isArray(this)) return Qo2;
});
var fu = Zo2;
var Qr2 = Symbol.for("PRETTIER_IS_FRONT_MATTER");
var lu = [];
function ea2(e) {
  return !!e?.[Qr2];
}
var de2 = ea2;
var Zr2 = /* @__PURE__ */ new Set(["yaml", "toml"]);
var je2 = ({ node: e }) => de2(e) && Zr2.has(e.language);
async function du(e, t, u, r) {
  let { node: o } = u, { language: n } = o;
  if (!Zr2.has(n)) return;
  let a = o.value.trim(), s;
  if (a) {
    let i = n === "yaml" ? n : it2(r, { language: n });
    if (!i) return;
    s = a ? await e(a, { parser: i }) : "";
  } else s = a;
  return Qe2([o.startDelimiter, o.explicitLanguage ?? "", V2, s, s ? V2 : "", o.endDelimiter]);
}
function ta2(e, t) {
  return je2({ node: e }) && (delete t.end, delete t.raw, delete t.value), t;
}
var pu = ta2;
function ua2({ node: e }) {
  return e.raw;
}
var Fu = ua2;
var en2 = /* @__PURE__ */ new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]);
var ra2 = (e) => Object.keys(e).filter((t) => !en2.has(t));
function na2(e, t) {
  let u = e ? (r) => e(r, en2) : ra2;
  return t ? new Proxy(u, { apply: (r, o, n) => de2(n[0]) ? lu : Reflect.apply(r, o, n) }) : u;
}
var mu = na2;
function Cu(e, t) {
  if (!t) throw new Error("parserName is required.");
  let u = fu(0, e, (o) => o.parsers && Object.prototype.hasOwnProperty.call(o.parsers, t));
  if (u) return u;
  let r = `Couldn't resolve parser "${t}".`;
  throw r += " Plugins must be explicitly added to the standalone bundle.", new Le2(r);
}
function tn2(e, t) {
  if (!t) throw new Error("astFormat is required.");
  let u = fu(0, e, (o) => o.printers && Object.prototype.hasOwnProperty.call(o.printers, t));
  if (u) return u;
  let r = `Couldn't find plugin for AST format "${t}".`;
  throw r += " Plugins must be explicitly added to the standalone bundle.", new Le2(r);
}
function Ue3({ plugins: e, parser: t }) {
  let u = Cu(e, t);
  return hu(u, t);
}
function hu(e, t) {
  let u = e.parsers[t];
  return typeof u == "function" ? u() : u;
}
async function un2(e, t) {
  let u = e.printers[t], r = typeof u == "function" ? await u() : u;
  return oa2(r);
}
var Eu = /* @__PURE__ */ new WeakMap();
var L0 = Symbol("PRINTER_NORMALIZED_MARK");
function oa2(e) {
  if (Eu.has(e)) return Eu.get(e);
  let { features: t, getVisitorKeys: u, embed: r, massageAstNode: o, print: n, ...a } = e;
  t = Da2(t);
  let s = t.experimental_frontMatterSupport;
  u = mu(u, s.massageAstNode || s.embed || s.print);
  let i = o;
  o && s.massageAstNode && (i = new Proxy(o, { apply(d, c, p) {
    return pu(...p), Reflect.apply(d, c, p);
  } }));
  let D2 = r;
  if (r) {
    let d;
    D2 = new Proxy(r, { get(c, p, F2) {
      return p === "getVisitorKeys" ? (d ?? (d = r.getVisitorKeys ? mu(r.getVisitorKeys, s.massageAstNode || s.embed) : u), d) : Reflect.get(c, p, F2);
    }, apply: (c, p, F2) => s.embed && je2(...F2) ? du : Reflect.apply(c, p, F2) });
  }
  let f2 = n;
  s.print && (f2 = new Proxy(n, { apply(d, c, p) {
    let [F2] = p;
    return de2(F2.node) ? Fu(F2) : Reflect.apply(d, c, p);
  } }));
  let l2 = { features: t, getVisitorKeys: u, embed: D2, massageAstNode: i, print: f2, ...a };
  return Eu.set(e, l2), l2;
}
var aa2 = ["clean", "embed", "print"];
var ia2 = Object.fromEntries(aa2.map((e) => [e, false]));
function sa2(e) {
  return { ...ia2, ...e };
}
function Da2(e) {
  return { experimental_avoidAstMutation: false, ...e, experimental_frontMatterSupport: sa2(e?.experimental_frontMatterSupport) };
}
var rn2 = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null, getVisitorKeys: null };
async function ca2(e, t = {}) {
  let u = { ...e };
  if (!u.parser) if (u.filepath) {
    if (u.parser = it2(u, { physicalFile: u.filepath }), !u.parser) throw new Me2(`No parser could be inferred for file "${u.filepath}".`);
  } else throw new Me2("No parser and no file path given, couldn't infer a parser.");
  let r = at2({ plugins: e.plugins, showDeprecated: true }).options, o = { ...rn2, ...Object.fromEntries(r.filter((l2) => l2.default !== void 0).map((l2) => [l2.name, l2.default])) }, n = Cu(u.plugins, u.parser), a = await hu(n, u.parser);
  u.astFormat = a.astFormat, u.locEnd = a.locEnd, u.locStart = a.locStart;
  let s = n.printers?.[a.astFormat] ? n : tn2(u.plugins, a.astFormat), i = await un2(s, a.astFormat);
  u.printer = i, u.getVisitorKeys = i.getVisitorKeys;
  let D2 = s.defaultOptions ? Object.fromEntries(Object.entries(s.defaultOptions).filter(([, l2]) => l2 !== void 0)) : {}, f2 = { ...o, ...D2 };
  for (let [l2, d] of Object.entries(f2)) (u[l2] === null || u[l2] === void 0) && (u[l2] = d);
  return u.parser === "json" && (u.trailingComma = "none"), qr2(u, r, { passThrough: Object.keys(rn2), ...t });
}
var se2 = ca2;
var Z0 = Zn2(sn2(), 1);
var yu = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
var Dn2 = "\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u30FB\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F\uFF65";
var J0 = new RegExp("[" + yu + "]");
var G0 = new RegExp("[" + yu + Dn2 + "]");
yu = Dn2 = null;
var bu = { keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"], strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"], strictBind: ["eval", "arguments"] };
var z0 = new Set(bu.keyword);
var H0 = new Set(bu.strict);
var X0 = new Set(bu.strictBind);
var Pt2 = (e, t) => (u) => e(t(u));
function fn2(e) {
  return { keyword: e.cyan, capitalized: e.yellow, jsxIdentifier: e.yellow, punctuator: e.yellow, number: e.magenta, string: e.green, regex: e.magenta, comment: e.gray, invalid: Pt2(Pt2(e.white, e.bgRed), e.bold), gutter: e.gray, marker: Pt2(e.red, e.bold), message: Pt2(e.red, e.bold), reset: e.reset };
}
var nf = fn2(ru(true));
var of = fn2(ru(false));
function la2() {
  return new Proxy({}, { get: () => (e) => e });
}
var cn2 = /\r\n|[\n\r\u2028\u2029]/;
function da2(e, t, u) {
  let r = Object.assign({ column: 0, line: -1 }, e.start), o = Object.assign({}, r, e.end), { linesAbove: n = 2, linesBelow: a = 3 } = u || {}, s = r.line, i = r.column, D2 = o.line, f2 = o.column, l2 = Math.max(s - (n + 1), 0), d = Math.min(t.length, D2 + a);
  s === -1 && (l2 = 0), D2 === -1 && (d = t.length);
  let c = D2 - s, p = {};
  if (c) for (let F2 = 0; F2 <= c; F2++) {
    let C2 = F2 + s;
    if (!i) p[C2] = true;
    else if (F2 === 0) {
      let y2 = t[C2 - 1].length;
      p[C2] = [i, y2 - i + 1];
    } else if (F2 === c) p[C2] = [0, f2];
    else {
      let y2 = t[C2 - F2].length;
      p[C2] = [0, y2];
    }
  }
  else i === f2 ? i ? p[s] = [i, 0] : p[s] = true : p[s] = [i, f2 - i];
  return { start: l2, end: d, markerLines: p };
}
function ln2(e, t, u = {}) {
  let o = la2(false), n = e.split(cn2), { start: a, end: s, markerLines: i } = da2(t, n, u), D2 = t.start && typeof t.start.column == "number", f2 = String(s).length, d = e.split(cn2, s).slice(a, s).map((c, p) => {
    let F2 = a + 1 + p, y2 = ` ${` ${F2}`.slice(-f2)} |`, m = i[F2], h5 = !i[F2 + 1];
    if (m) {
      let E = "";
      if (Array.isArray(m)) {
        let g = c.slice(0, Math.max(m[0] - 1, 0)).replace(/[^\t]/g, " "), A2 = m[1] || 1;
        E = [`
 `, o.gutter(y2.replace(/\d/g, " ")), " ", g, o.marker("^").repeat(A2)].join(""), h5 && u.message && (E += " " + o.message(u.message));
      }
      return [o.marker(">"), o.gutter(y2), c.length > 0 ? ` ${c}` : "", E].join("");
    } else return ` ${o.gutter(y2)}${c.length > 0 ? ` ${c}` : ""}`;
  }).join(`
`);
  return u.message && !D2 && (d = `${" ".repeat(f2 + 1)}${u.message}
${d}`), d;
}
async function pa2(e, t) {
  let u = await Ue3(t), r = u.preprocess ? await u.preprocess(e, t) : e;
  t.originalText = r;
  let o;
  try {
    o = await u.parse(r, t, t);
  } catch (n) {
    Fa2(n, e);
  }
  return { text: r, ast: o };
}
function Fa2(e, t) {
  let { loc: u } = e;
  if (u) {
    let r = ln2(t, u, { highlightCode: true });
    throw e.message += `
` + r, e.codeFrame = r, e;
  }
  throw e;
}
var Fe2 = pa2;
async function dn2(e, t, u, r, o) {
  if (u.embeddedLanguageFormatting !== "auto") return;
  let { printer: n } = u, { embed: a } = n;
  if (!a) return;
  if (a.length > 2) throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/plugins#optional-embed");
  let { hasPrettierIgnore: s } = n, { getVisitorKeys: i } = a, D2 = [];
  d();
  let f2 = e.stack;
  for (let { print: c, node: p, pathStack: F2 } of D2) try {
    e.stack = F2;
    let C2 = await c(l2, t, e, u);
    C2 && o.set(p, C2);
  } catch (C2) {
    if (globalThis.PRETTIER_DEBUG) throw C2;
  }
  e.stack = f2;
  function l2(c, p) {
    return ma2(c, p, u, r);
  }
  function d() {
    let { node: c } = e;
    if (c === null || typeof c != "object" || s?.(e)) return;
    for (let F2 of i(c)) Array.isArray(c[F2]) ? e.each(d, F2) : e.call(d, F2);
    let p = a(e, u);
    if (p) {
      if (typeof p == "function") {
        D2.push({ print: p, node: c, pathStack: [...e.stack] });
        return;
      }
      o.set(c, p);
    }
  }
}
async function ma2(e, t, u, r) {
  let o = await se2({ ...u, ...t, parentParser: u.parser, originalText: e, cursorOffset: void 0, rangeStart: void 0, rangeEnd: void 0 }, { passThrough: true }), { ast: n } = await Fe2(e, o), a = await r(n, o);
  return He(a);
}
function Ea2(e, t, u, r) {
  let { originalText: o, [Symbol.for("comments")]: n, locStart: a, locEnd: s, [Symbol.for("printedComments")]: i } = t, { node: D2 } = e, f2 = a(D2), l2 = s(D2);
  for (let c of n) a(c) >= f2 && s(c) <= l2 && i.add(c);
  let { printPrettierIgnored: d } = t.printer;
  return d ? d(e, t, u, r) : o.slice(f2, l2);
}
var pn2 = Ea2;
async function Ke2(e, t) {
  ({ ast: e } = await Au(e, t));
  let u = /* @__PURE__ */ new Map(), r = new sr2(e), o = Ar2(t), n = /* @__PURE__ */ new Map();
  await dn2(r, s, t, Ke2, n);
  let a = await Fn2(r, t, s, void 0, n);
  if (br2(t), t.cursorOffset >= 0) {
    if (t.nodeAfterCursor && !t.nodeBeforeCursor) return [ee2, a];
    if (t.nodeBeforeCursor && !t.nodeAfterCursor) return [a, ee2];
  }
  return a;
  function s(D2, f2) {
    return D2 === void 0 || D2 === r ? i(f2) : Array.isArray(D2) ? r.call(() => i(f2), ...D2) : r.call(() => i(f2), D2);
  }
  function i(D2) {
    o(r);
    let f2 = r.node;
    if (f2 == null) return "";
    let l2 = f2 && typeof f2 == "object" && D2 === void 0;
    if (l2 && u.has(f2)) return u.get(f2);
    let d = Fn2(r, t, s, D2, n);
    return l2 && u.set(f2, d), d;
  }
}
function Fn2(e, t, u, r, o) {
  let { node: n } = e, { printer: a } = t, s;
  switch (a.hasPrettierIgnore?.(e) ? s = pn2(e, t, u, r) : o.has(n) ? s = o.get(n) : s = a.print(e, t, u, r), n) {
    case t.cursorNode:
      s = Ee2(s, (i) => [ee2, i, ee2]);
      break;
    case t.nodeBeforeCursor:
      s = Ee2(s, (i) => [i, ee2]);
      break;
    case t.nodeAfterCursor:
      s = Ee2(s, (i) => [ee2, i]);
      break;
  }
  return a.printComment && !a.willPrintOwnComments?.(e, t) && (s = yr2(e, s, t)), s;
}
async function Au(e, t) {
  let u = e.comments ?? [];
  t[Symbol.for("comments")] = u, t[Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), Cr2(e, t);
  let { printer: { preprocess: r } } = t;
  return e = r ? await r(e, t) : e, { ast: e, comments: u };
}
function Ca2(e, t) {
  let { cursorOffset: u, locStart: r, locEnd: o, getVisitorKeys: n } = t, a = (c) => r(c) <= u && o(c) >= u, s = e, i = [e];
  for (let c of dr2(e, { getVisitorKeys: n, filter: a })) i.push(c), s = c;
  if (pr2(s, { getVisitorKeys: n })) return { cursorNode: s };
  let D2, f2, l2 = -1, d = Number.POSITIVE_INFINITY;
  for (; i.length > 0 && (D2 === void 0 || f2 === void 0); ) {
    s = i.pop();
    let c = D2 !== void 0, p = f2 !== void 0;
    for (let F2 of ye2(s, { getVisitorKeys: n })) {
      if (!c) {
        let C2 = o(F2);
        C2 <= u && C2 > l2 && (D2 = F2, l2 = C2);
      }
      if (!p) {
        let C2 = r(F2);
        C2 >= u && C2 < d && (f2 = F2, d = C2);
      }
    }
  }
  return { nodeBeforeCursor: D2, nodeAfterCursor: f2 };
}
var _u = Ca2;
function ha2(e, t) {
  let { printer: u } = t, r = u.massageAstNode;
  if (!r) return e;
  let { getVisitorKeys: o } = u, { ignoredProperties: n } = r;
  return a(e);
  function a(s, i) {
    if (!nt2(s)) return s;
    if (Array.isArray(s)) return s.map((d) => a(d, i)).filter(Boolean);
    let D2 = {}, f2 = new Set(o(s));
    for (let d in s) !Object.prototype.hasOwnProperty.call(s, d) || n?.has(d) || (f2.has(d) ? D2[d] = a(s[d], s) : D2[d] = s[d]);
    let l2 = r(s, D2, i);
    if (l2 !== null) return l2 ?? D2;
  }
}
var mn2 = ha2;
var ga = Array.prototype.findLastIndex ?? function(e) {
  for (let t = this.length - 1; t >= 0; t--) {
    let u = this[t];
    if (e(u, t, this)) return t;
  }
  return -1;
};
var ya2 = X2("findLastIndex", function() {
  if (Array.isArray(this)) return ga;
});
var En2 = ya2;
var ba2 = ({ parser: e }) => e === "json" || e === "json5" || e === "jsonc" || e === "json-stringify";
function Aa2(e, t) {
  return t = new Set(t), e.find((u) => gn2.has(u.type) && t.has(u));
}
function Cn2(e) {
  let t = En2(0, e, (u) => u.type !== "Program" && u.type !== "File");
  return t === -1 ? e : e.slice(0, t + 1);
}
function _a2(e, t, { locStart: u, locEnd: r }) {
  let [o, ...n] = e, [a, ...s] = t;
  if (o === a) return [o, a];
  let i = u(o);
  for (let f2 of Cn2(s)) if (u(f2) >= i) a = f2;
  else break;
  let D2 = r(a);
  for (let f2 of Cn2(n)) {
    if (r(f2) <= D2) o = f2;
    else break;
    if (o === a) break;
  }
  return [o, a];
}
function xu(e, t, u, r, o = [], n) {
  let { locStart: a, locEnd: s } = u, i = a(e), D2 = s(e);
  if (t > D2 || t < i || n === "rangeEnd" && t === i || n === "rangeStart" && t === D2) return;
  let f2 = [e, ...o], l2 = ot2(e, f2, { cache: eu, locStart: a, locEnd: s, getVisitorKeys: u.getVisitorKeys, filter: u.printer.canAttachComment, getChildren: u.printer.getCommentChildNodes });
  for (let d of l2) {
    let c = xu(d, t, u, r, f2, n);
    if (c) return c;
  }
  if (r(e, o[0])) return f2;
}
function xa2(e, t) {
  return t !== "DeclareExportDeclaration" && e !== "TypeParameterDeclaration" && (e === "Directive" || e === "TypeAlias" || e === "TSExportAssignment" || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration"));
}
var gn2 = /* @__PURE__ */ new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]);
var Ba2 = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
function hn2(e, t, u) {
  if (!t) return false;
  switch (e.parser) {
    case "flow":
    case "hermes":
    case "babel":
    case "babel-flow":
    case "babel-ts":
    case "typescript":
    case "acorn":
    case "espree":
    case "meriyah":
    case "oxc":
    case "oxc-ts":
    case "__babel_estree":
      return xa2(t.type, u?.type);
    case "json":
    case "json5":
    case "jsonc":
    case "json-stringify":
      return gn2.has(t.type);
    case "graphql":
      return Ba2.has(t.kind);
    case "vue":
      return t.tag !== "root";
  }
  return false;
}
function yn2(e, t, u) {
  let { rangeStart: r, rangeEnd: o, locStart: n, locEnd: a } = t;
  P(o > r);
  let s = e.slice(r, o).search(/\S/u), i = s === -1;
  if (!i) for (r += s; o > r && !/\S/u.test(e[o - 1]); --o) ;
  let D2 = xu(u, r, t, (c, p) => hn2(t, c, p), [], "rangeStart");
  if (!D2) return;
  let f2 = i ? D2 : xu(u, o, t, (c) => hn2(t, c), [], "rangeEnd");
  if (!f2) return;
  let l2, d;
  if (ba2(t)) {
    let c = Aa2(D2, f2);
    l2 = c, d = c;
  } else [l2, d] = _a2(D2, f2, t);
  return [Math.min(n(l2), n(d)), Math.max(a(l2), a(d))];
}
var xn2 = "\uFEFF";
var bn2 = Symbol("cursor");
async function Bn2(e, t, u = 0) {
  if (!e || e.trim().length === 0) return { formatted: "", cursorOffset: -1, comments: [] };
  let { ast: r, text: o } = await Fe2(e, t);
  t.cursorOffset >= 0 && (t = { ...t, ..._u(r, t) });
  let n = await Ke2(r, t, u);
  u > 0 && (n = Ze2([V2, n], u, t.tabWidth));
  let a = Ce2(n, t);
  if (u > 0) {
    let i = a.formatted.trim();
    a.cursorNodeStart !== void 0 && (a.cursorNodeStart -= a.formatted.indexOf(i), a.cursorNodeStart < 0 && (a.cursorNodeStart = 0, a.cursorNodeText = a.cursorNodeText.trimStart()), a.cursorNodeStart + a.cursorNodeText.length > i.length && (a.cursorNodeText = a.cursorNodeText.trimEnd())), a.formatted = i + Ne2(t.endOfLine);
  }
  let s = t[Symbol.for("comments")];
  if (t.cursorOffset >= 0) {
    let i, D2, f2, l2;
    if ((t.cursorNode || t.nodeBeforeCursor || t.nodeAfterCursor) && a.cursorNodeText) if (f2 = a.cursorNodeStart, l2 = a.cursorNodeText, t.cursorNode) i = t.locStart(t.cursorNode), D2 = o.slice(i, t.locEnd(t.cursorNode));
    else {
      if (!t.nodeBeforeCursor && !t.nodeAfterCursor) throw new Error("Cursor location must contain at least one of cursorNode, nodeBeforeCursor, nodeAfterCursor");
      i = t.nodeBeforeCursor ? t.locEnd(t.nodeBeforeCursor) : 0;
      let y2 = t.nodeAfterCursor ? t.locStart(t.nodeAfterCursor) : o.length;
      D2 = o.slice(i, y2);
    }
    else i = 0, D2 = o, f2 = 0, l2 = a.formatted;
    let d = t.cursorOffset - i;
    if (D2 === l2) return { formatted: a.formatted, cursorOffset: f2 + d, comments: s };
    let c = D2.split("");
    c.splice(d, 0, bn2);
    let p = l2.split(""), F2 = jt2(c, p), C2 = f2;
    for (let y2 of F2) if (y2.removed) {
      if (y2.value.includes(bn2)) break;
    } else C2 += y2.count;
    return { formatted: a.formatted, cursorOffset: C2, comments: s };
  }
  return { formatted: a.formatted, cursorOffset: -1, comments: s };
}
async function Ta2(e, t) {
  let { ast: u, text: r } = await Fe2(e, t), [o, n] = yn2(r, t, u) ?? [0, 0], a = r.slice(o, n), s = Math.min(o, r.lastIndexOf(`
`, o) + 1), i = r.slice(s, o).match(/^\s*/u)[0], D2 = he2(i, t.tabWidth), f2 = await Bn2(a, { ...t, rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: t.cursorOffset > o && t.cursorOffset <= n ? t.cursorOffset - o : -1, endOfLine: "lf" }, D2), l2 = f2.formatted.trimEnd(), { cursorOffset: d } = t;
  d > n ? d += l2.length - a.length : f2.cursorOffset >= 0 && (d = f2.cursorOffset + o);
  let c = r.slice(0, o) + l2 + r.slice(n);
  if (t.endOfLine !== "lf") {
    let p = Ne2(t.endOfLine);
    d >= 0 && p === `\r
` && (d += Ut(c.slice(0, d), `
`)), c = oe2(0, c, `
`, p);
  }
  return { formatted: c, cursorOffset: d, comments: f2.comments };
}
function Bu(e, t, u) {
  return typeof t != "number" || Number.isNaN(t) || t < 0 || t > e.length ? u : t;
}
function An2(e, t) {
  let { cursorOffset: u, rangeStart: r, rangeEnd: o } = t;
  return u = Bu(e, u, -1), r = Bu(e, r, 0), o = Bu(e, o, e.length), { ...t, cursorOffset: u, rangeStart: r, rangeEnd: o };
}
function Tn2(e, t) {
  let { cursorOffset: u, rangeStart: r, rangeEnd: o, endOfLine: n } = An2(e, t), a = e.charAt(0) === xn2;
  if (a && (e = e.slice(1), u--, r--, o--), n === "auto" && (n = Iu(e)), e.includes("\r")) {
    let s = (i) => Ut(e.slice(0, Math.max(i, 0)), `\r
`);
    u -= s(u), r -= s(r), o -= s(o), e = ku(e);
  }
  return { hasBOM: a, text: e, options: An2(e, { ...t, cursorOffset: u, rangeStart: r, rangeEnd: o, endOfLine: n }) };
}
async function _n2(e, t) {
  let u = await Ue3(t);
  return !u.hasPragma || u.hasPragma(e);
}
async function Na2(e, t) {
  return (await Ue3(t)).hasIgnorePragma?.(e);
}
async function Tu(e, t) {
  let { hasBOM: u, text: r, options: o } = Tn2(e, await se2(t));
  if (o.rangeStart >= o.rangeEnd && r !== "" || o.requirePragma && !await _n2(r, o) || o.checkIgnorePragma && await Na2(r, o)) return { formatted: e, cursorOffset: t.cursorOffset, comments: [] };
  let n;
  return o.rangeStart > 0 || o.rangeEnd < r.length ? n = await Ta2(r, o) : (!o.requirePragma && o.insertPragma && o.printer.insertPragma && !await _n2(r, o) && (r = o.printer.insertPragma(r)), n = await Bn2(r, o)), u && (n.formatted = xn2 + n.formatted, n.cursorOffset >= 0 && n.cursorOffset++), n;
}
async function Nn2(e, t, u) {
  let { text: r, options: o } = Tn2(e, await se2(t)), n = await Fe2(r, o);
  return u && (u.preprocessForPrint && (n.ast = await Au(n.ast, o)), u.massage && (n.ast = mn2(n.ast, o))), n;
}
async function Sn2(e, t) {
  t = await se2(t);
  let u = await Ke2(e, t);
  return Ce2(u, t);
}
async function wn2(e, t) {
  let u = ur2(e), { formatted: r } = await Tu(u, { ...t, parser: "__js_expression" });
  return r;
}
async function On2(e, t) {
  t = await se2(t);
  let { ast: u } = await Fe2(e, t);
  return t.cursorOffset >= 0 && (t = { ...t, ..._u(u, t) }), Ke2(u, t);
}
async function Pn2(e, t) {
  return Ce2(e, await se2(t));
}
var Nu = {};
Mt2(Nu, { builders: () => wa2, printer: () => Oa2, utils: () => Pa2 });
var wa2 = { join: Pe2, line: et2, softline: Zu, hardline: V2, literalline: Xe2, group: $t, conditionalGroup: Hu, fill: zu, lineSuffix: ke2, lineSuffixBoundary: er2, cursor: ee2, breakParent: ce2, ifBreak: Xu, trim: tr, indent: ae, indentIfBreak: qu, align: De2, addAlignmentToDoc: Ze2, markAsRoot: Qe2, dedentToRoot: Ju, dedent: Gu, hardlineWithoutBreakParent: Ie2, literallineWithoutBreakParent: Vt2, label: Qu, concat: (e) => e };
var Oa2 = { printDocToString: Ce2 };
var Pa2 = { willBreak: Yu, traverseDoc: Se2, findInDoc: ze2, mapDoc: Oe2, removeLines: Uu, stripTrailingHardline: He, replaceEndOfLine: Wu, canBreak: $u };
var In2 = "3.7.3";
var wu = {};
Mt2(wu, { addDanglingComment: () => ue2, addLeadingComment: () => fe2, addTrailingComment: () => le2, getAlignmentSize: () => he2, getIndentSize: () => kn2, getMaxContinuousCount: () => vn2, getNextNonSpaceNonCommentCharacter: () => Rn2, getNextNonSpaceNonCommentCharacterIndex: () => Va2, getPreferredQuote: () => Ln2, getStringWidth: () => ve2, hasNewline: () => G2, hasNewlineInRange: () => Mn2, hasSpaces: () => Yn2, isNextLineEmpty: () => Ha2, isNextLineEmptyAfterIndex: () => It2, isPreviousLineEmpty: () => Ja2, makeString: () => za2, skip: () => ge2, skipEverythingButNewLine: () => rt2, skipInlineComment: () => _e2, skipNewline: () => K2, skipSpaces: () => Y2, skipToLineEnd: () => ut, skipTrailingComment: () => xe2, skipWhitespace: () => cr2 });
function Ia2(e, t) {
  if (t === false) return false;
  if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
    for (let u = t + 2; u < e.length; ++u) if (e.charAt(u) === "*" && e.charAt(u + 1) === "/") return u + 2;
  }
  return t;
}
var _e2 = Ia2;
function ka2(e, t) {
  return t === false ? false : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? rt2(e, t) : t;
}
var xe2 = ka2;
function va2(e, t) {
  let u = null, r = t;
  for (; r !== u; ) u = r, r = Y2(e, r), r = _e2(e, r), r = xe2(e, r), r = K2(e, r);
  return r;
}
var Je2 = va2;
function Ra2(e, t) {
  let u = null, r = t;
  for (; r !== u; ) u = r, r = ut(e, r), r = _e2(e, r), r = Y2(e, r);
  return r = xe2(e, r), r = K2(e, r), r !== false && G2(e, r);
}
var It2 = Ra2;
function La2(e, t) {
  let u = e.lastIndexOf(`
`);
  return u === -1 ? 0 : he2(e.slice(u + 1).match(/^[\t ]*/u)[0], t);
}
var kn2 = La2;
function Su(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Ma2(e, t) {
  let u = e.matchAll(new RegExp(`(?:${Su(t)})+`, "gu"));
  return u.reduce || (u = [...u]), u.reduce((r, [o]) => Math.max(r, o.length), 0) / t.length;
}
var vn2 = Ma2;
function Ya2(e, t) {
  let u = Je2(e, t);
  return u === false ? "" : e.charAt(u);
}
var Rn2 = Ya2;
function ja2(e, t) {
  let u = t === true || t === "'" ? "'" : '"', r = u === "'" ? '"' : "'", o = 0, n = 0;
  for (let a of e) a === u ? o++ : a === r && n++;
  return o > n ? r : u;
}
var Ln2 = ja2;
function Ua2(e, t, u) {
  for (let r = t; r < u; ++r) if (e.charAt(r) === `
`) return true;
  return false;
}
var Mn2 = Ua2;
function Wa2(e, t, u = {}) {
  return Y2(e, u.backwards ? t - 1 : t, u) !== t;
}
var Yn2 = Wa2;
function $a2(e, t, u) {
  return Je2(e, u(t));
}
function Va2(e, t) {
  return arguments.length === 2 || typeof t == "number" ? Je2(e, t) : $a2(...arguments);
}
function Ka2(e, t, u) {
  return Re2(e, u(t));
}
function Ja2(e, t) {
  return arguments.length === 2 || typeof t == "number" ? Re2(e, t) : Ka2(...arguments);
}
function Ga2(e, t, u) {
  return It2(e, u(t));
}
function za2(e, t, u) {
  let r = t === '"' ? "'" : '"', n = oe2(0, e, /\\(.)|(["'])/gsu, (a, s, i) => s === r ? s : i === t ? "\\" + i : i || (u && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(s) ? s : "\\" + s));
  return t + n + t;
}
function Ha2(e, t) {
  return arguments.length === 2 || typeof t == "number" ? It2(e, t) : Ga2(...arguments);
}
function me2(e, t = 1) {
  return async (...u) => {
    let r = u[t] ?? {}, o = r.plugins ?? [];
    return u[t] = { ...r, plugins: Array.isArray(o) ? o : Object.values(o) }, e(...u);
  };
}
var jn2 = me2(Tu);
async function Un2(e, t) {
  let { formatted: u } = await jn2(e, { ...t, cursorOffset: -1 });
  return u;
}
async function Xa2(e, t) {
  return await Un2(e, t) === e;
}
var qa2 = me2(at2, 0);
var Qa2 = { parse: me2(Nn2), formatAST: me2(Sn2), formatDoc: me2(wn2), printToDoc: me2(On2), printDocToString: me2(Pn2) };

// ../../node_modules/@forsakringskassan/docs-live-example/dist/esm/index.js
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, createCommentVNode as _createCommentVNode, vModelRadio as _vModelRadio, withDirectives as _withDirectives, openBlock as _openBlock, createElementBlock as _createElementBlock, Fragment as _Fragment } from "vue";
import { compile, defineComponent as defineComponent3, h as h3 } from "vue";
import { resolveComponent as _resolveComponent, createVNode as _createVNode, openBlock as _openBlock2, createElementBlock as _createElementBlock2, createCommentVNode as _createCommentVNode2, createElementVNode as _createElementVNode2, Fragment as _Fragment2, renderSlot as _renderSlot } from "vue";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to3, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to3, key) && key !== except)
        __defProp(to3, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to3;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var require_core = __commonJS({
  "node_modules/highlight.js/lib/core.js"(exports, module) {
    function deepFreeze(obj) {
      if (obj instanceof Map) {
        obj.clear = obj.delete = obj.set = function() {
          throw new Error("map is read-only");
        };
      } else if (obj instanceof Set) {
        obj.add = obj.clear = obj.delete = function() {
          throw new Error("set is read-only");
        };
      }
      Object.freeze(obj);
      Object.getOwnPropertyNames(obj).forEach((name) => {
        const prop = obj[name];
        const type = typeof prop;
        if ((type === "object" || type === "function") && !Object.isFrozen(prop)) {
          deepFreeze(prop);
        }
      });
      return obj;
    }
    var Response = class {
      /**
       * @param {CompiledMode} mode
       */
      constructor(mode) {
        if (mode.data === void 0) mode.data = {};
        this.data = mode.data;
        this.isMatchIgnored = false;
      }
      ignoreMatch() {
        this.isMatchIgnored = true;
      }
    };
    function escapeHTML(value) {
      return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
    }
    function inherit$1(original, ...objects) {
      const result = /* @__PURE__ */ Object.create(null);
      for (const key in original) {
        result[key] = original[key];
      }
      objects.forEach(function(obj) {
        for (const key in obj) {
          result[key] = obj[key];
        }
      });
      return (
        /** @type {T} */
        result
      );
    }
    var SPAN_CLOSE = "</span>";
    var emitsWrappingTags = (node) => {
      return !!node.scope;
    };
    var scopeToCSSClass = (name, { prefix }) => {
      if (name.startsWith("language:")) {
        return name.replace("language:", "language-");
      }
      if (name.includes(".")) {
        const pieces = name.split(".");
        return [
          `${prefix}${pieces.shift()}`,
          ...pieces.map((x3, i) => `${x3}${"_".repeat(i + 1)}`)
        ].join(" ");
      }
      return `${prefix}${name}`;
    };
    var HTMLRenderer = class {
      /**
       * Creates a new HTMLRenderer
       *
       * @param {Tree} parseTree - the parse tree (must support `walk` API)
       * @param {{classPrefix: string}} options
       */
      constructor(parseTree, options) {
        this.buffer = "";
        this.classPrefix = options.classPrefix;
        parseTree.walk(this);
      }
      /**
       * Adds texts to the output stream
       *
       * @param {string} text */
      addText(text) {
        this.buffer += escapeHTML(text);
      }
      /**
       * Adds a node open to the output stream (if needed)
       *
       * @param {Node} node */
      openNode(node) {
        if (!emitsWrappingTags(node)) return;
        const className = scopeToCSSClass(
          node.scope,
          { prefix: this.classPrefix }
        );
        this.span(className);
      }
      /**
       * Adds a node close to the output stream (if needed)
       *
       * @param {Node} node */
      closeNode(node) {
        if (!emitsWrappingTags(node)) return;
        this.buffer += SPAN_CLOSE;
      }
      /**
       * returns the accumulated buffer
      */
      value() {
        return this.buffer;
      }
      // helpers
      /**
       * Builds a span element
       *
       * @param {string} className */
      span(className) {
        this.buffer += `<span class="${className}">`;
      }
    };
    var newNode = (opts = {}) => {
      const result = { children: [] };
      Object.assign(result, opts);
      return result;
    };
    var TokenTree = class _TokenTree {
      constructor() {
        this.rootNode = newNode();
        this.stack = [this.rootNode];
      }
      get top() {
        return this.stack[this.stack.length - 1];
      }
      get root() {
        return this.rootNode;
      }
      /** @param {Node} node */
      add(node) {
        this.top.children.push(node);
      }
      /** @param {string} scope */
      openNode(scope) {
        const node = newNode({ scope });
        this.add(node);
        this.stack.push(node);
      }
      closeNode() {
        if (this.stack.length > 1) {
          return this.stack.pop();
        }
        return void 0;
      }
      closeAllNodes() {
        while (this.closeNode()) ;
      }
      toJSON() {
        return JSON.stringify(this.rootNode, null, 4);
      }
      /**
       * @typedef { import("./html_renderer").Renderer } Renderer
       * @param {Renderer} builder
       */
      walk(builder) {
        return this.constructor._walk(builder, this.rootNode);
      }
      /**
       * @param {Renderer} builder
       * @param {Node} node
       */
      static _walk(builder, node) {
        if (typeof node === "string") {
          builder.addText(node);
        } else if (node.children) {
          builder.openNode(node);
          node.children.forEach((child) => this._walk(builder, child));
          builder.closeNode(node);
        }
        return builder;
      }
      /**
       * @param {Node} node
       */
      static _collapse(node) {
        if (typeof node === "string") return;
        if (!node.children) return;
        if (node.children.every((el2) => typeof el2 === "string")) {
          node.children = [node.children.join("")];
        } else {
          node.children.forEach((child) => {
            _TokenTree._collapse(child);
          });
        }
      }
    };
    var TokenTreeEmitter = class extends TokenTree {
      /**
       * @param {*} options
       */
      constructor(options) {
        super();
        this.options = options;
      }
      /**
       * @param {string} text
       */
      addText(text) {
        if (text === "") {
          return;
        }
        this.add(text);
      }
      /** @param {string} scope */
      startScope(scope) {
        this.openNode(scope);
      }
      endScope() {
        this.closeNode();
      }
      /**
       * @param {Emitter & {root: DataNode}} emitter
       * @param {string} name
       */
      __addSublanguage(emitter, name) {
        const node = emitter.root;
        if (name) node.scope = `language:${name}`;
        this.add(node);
      }
      toHTML() {
        const renderer = new HTMLRenderer(this, this.options);
        return renderer.value();
      }
      finalize() {
        this.closeAllNodes();
        return true;
      }
    };
    function source(re2) {
      if (!re2) return null;
      if (typeof re2 === "string") return re2;
      return re2.source;
    }
    function lookahead(re2) {
      return concat("(?=", re2, ")");
    }
    function anyNumberOfTimes(re2) {
      return concat("(?:", re2, ")*");
    }
    function optional(re2) {
      return concat("(?:", re2, ")?");
    }
    function concat(...args) {
      const joined = args.map((x3) => source(x3)).join("");
      return joined;
    }
    function stripOptionsFromArgs(args) {
      const opts = args[args.length - 1];
      if (typeof opts === "object" && opts.constructor === Object) {
        args.splice(args.length - 1, 1);
        return opts;
      } else {
        return {};
      }
    }
    function either(...args) {
      const opts = stripOptionsFromArgs(args);
      const joined = "(" + (opts.capture ? "" : "?:") + args.map((x3) => source(x3)).join("|") + ")";
      return joined;
    }
    function countMatchGroups(re2) {
      return new RegExp(re2.toString() + "|").exec("").length - 1;
    }
    function startsWith(re2, lexeme) {
      const match = re2 && re2.exec(lexeme);
      return match && match.index === 0;
    }
    var BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
    function _rewriteBackreferences(regexps, { joinWith }) {
      let numCaptures = 0;
      return regexps.map((regex) => {
        numCaptures += 1;
        const offset = numCaptures;
        let re2 = source(regex);
        let out = "";
        while (re2.length > 0) {
          const match = BACKREF_RE.exec(re2);
          if (!match) {
            out += re2;
            break;
          }
          out += re2.substring(0, match.index);
          re2 = re2.substring(match.index + match[0].length);
          if (match[0][0] === "\\" && match[1]) {
            out += "\\" + String(Number(match[1]) + offset);
          } else {
            out += match[0];
            if (match[0] === "(") {
              numCaptures++;
            }
          }
        }
        return out;
      }).map((re2) => `(${re2})`).join(joinWith);
    }
    var MATCH_NOTHING_RE = /\b\B/;
    var IDENT_RE = "[a-zA-Z]\\w*";
    var UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
    var NUMBER_RE = "\\b\\d+(\\.\\d+)?";
    var C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
    var BINARY_NUMBER_RE = "\\b(0b[01]+)";
    var RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
    var SHEBANG = (opts = {}) => {
      const beginShebang = /^#![ ]*\//;
      if (opts.binary) {
        opts.begin = concat(
          beginShebang,
          /.*\b/,
          opts.binary,
          /\b.*/
        );
      }
      return inherit$1({
        scope: "meta",
        begin: beginShebang,
        end: /$/,
        relevance: 0,
        /** @type {ModeCallback} */
        "on:begin": (m, resp) => {
          if (m.index !== 0) resp.ignoreMatch();
        }
      }, opts);
    };
    var BACKSLASH_ESCAPE = {
      begin: "\\\\[\\s\\S]",
      relevance: 0
    };
    var APOS_STRING_MODE = {
      scope: "string",
      begin: "'",
      end: "'",
      illegal: "\\n",
      contains: [BACKSLASH_ESCAPE]
    };
    var QUOTE_STRING_MODE = {
      scope: "string",
      begin: '"',
      end: '"',
      illegal: "\\n",
      contains: [BACKSLASH_ESCAPE]
    };
    var PHRASAL_WORDS_MODE = {
      begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    };
    var COMMENT = function(begin, end, modeOptions = {}) {
      const mode = inherit$1(
        {
          scope: "comment",
          begin,
          end,
          contains: []
        },
        modeOptions
      );
      mode.contains.push({
        scope: "doctag",
        // hack to avoid the space from being included. the space is necessary to
        // match here to prevent the plain text rule below from gobbling up doctags
        begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
        end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
        excludeBegin: true,
        relevance: 0
      });
      const ENGLISH_WORD = either(
        // list of common 1 and 2 letter words in English
        "I",
        "a",
        "is",
        "so",
        "us",
        "to",
        "at",
        "if",
        "in",
        "it",
        "on",
        // note: this is not an exhaustive list of contractions, just popular ones
        /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
        // contractions - can't we'd they're let's, etc
        /[A-Za-z]+[-][a-z]+/,
        // `no-way`, etc.
        /[A-Za-z][a-z]{2,}/
        // allow capitalized words at beginning of sentences
      );
      mode.contains.push(
        {
          // TODO: how to include ", (, ) without breaking grammars that use these for
          // comment delimiters?
          // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
          // ---
          // this tries to find sequences of 3 english words in a row (without any
          // "programming" type syntax) this gives us a strong signal that we've
          // TRULY found a comment - vs perhaps scanning with the wrong language.
          // It's possible to find something that LOOKS like the start of the
          // comment - but then if there is no readable text - good chance it is a
          // false match and not a comment.
          //
          // for a visual example please see:
          // https://github.com/highlightjs/highlight.js/issues/2827
          begin: concat(
            /[ ]+/,
            // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
            "(",
            ENGLISH_WORD,
            /[.]?[:]?([.][ ]|[ ])/,
            "){3}"
          )
          // look for 3 words in a row
        }
      );
      return mode;
    };
    var C_LINE_COMMENT_MODE = COMMENT("//", "$");
    var C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
    var HASH_COMMENT_MODE = COMMENT("#", "$");
    var NUMBER_MODE = {
      scope: "number",
      begin: NUMBER_RE,
      relevance: 0
    };
    var C_NUMBER_MODE = {
      scope: "number",
      begin: C_NUMBER_RE,
      relevance: 0
    };
    var BINARY_NUMBER_MODE = {
      scope: "number",
      begin: BINARY_NUMBER_RE,
      relevance: 0
    };
    var REGEXP_MODE = {
      scope: "regexp",
      begin: /\/(?=[^/\n]*\/)/,
      end: /\/[gimuy]*/,
      contains: [
        BACKSLASH_ESCAPE,
        {
          begin: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [BACKSLASH_ESCAPE]
        }
      ]
    };
    var TITLE_MODE = {
      scope: "title",
      begin: IDENT_RE,
      relevance: 0
    };
    var UNDERSCORE_TITLE_MODE = {
      scope: "title",
      begin: UNDERSCORE_IDENT_RE,
      relevance: 0
    };
    var METHOD_GUARD = {
      // excludes method names from keyword processing
      begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
      relevance: 0
    };
    var END_SAME_AS_BEGIN = function(mode) {
      return Object.assign(
        mode,
        {
          /** @type {ModeCallback} */
          "on:begin": (m, resp) => {
            resp.data._beginMatch = m[1];
          },
          /** @type {ModeCallback} */
          "on:end": (m, resp) => {
            if (resp.data._beginMatch !== m[1]) resp.ignoreMatch();
          }
        }
      );
    };
    var MODES = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      APOS_STRING_MODE,
      BACKSLASH_ESCAPE,
      BINARY_NUMBER_MODE,
      BINARY_NUMBER_RE,
      COMMENT,
      C_BLOCK_COMMENT_MODE,
      C_LINE_COMMENT_MODE,
      C_NUMBER_MODE,
      C_NUMBER_RE,
      END_SAME_AS_BEGIN,
      HASH_COMMENT_MODE,
      IDENT_RE,
      MATCH_NOTHING_RE,
      METHOD_GUARD,
      NUMBER_MODE,
      NUMBER_RE,
      PHRASAL_WORDS_MODE,
      QUOTE_STRING_MODE,
      REGEXP_MODE,
      RE_STARTERS_RE,
      SHEBANG,
      TITLE_MODE,
      UNDERSCORE_IDENT_RE,
      UNDERSCORE_TITLE_MODE
    });
    function skipIfHasPrecedingDot(match, response) {
      const before = match.input[match.index - 1];
      if (before === ".") {
        response.ignoreMatch();
      }
    }
    function scopeClassName(mode, _parent) {
      if (mode.className !== void 0) {
        mode.scope = mode.className;
        delete mode.className;
      }
    }
    function beginKeywords(mode, parent) {
      if (!parent) return;
      if (!mode.beginKeywords) return;
      mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
      mode.__beforeBegin = skipIfHasPrecedingDot;
      mode.keywords = mode.keywords || mode.beginKeywords;
      delete mode.beginKeywords;
      if (mode.relevance === void 0) mode.relevance = 0;
    }
    function compileIllegal(mode, _parent) {
      if (!Array.isArray(mode.illegal)) return;
      mode.illegal = either(...mode.illegal);
    }
    function compileMatch(mode, _parent) {
      if (!mode.match) return;
      if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");
      mode.begin = mode.match;
      delete mode.match;
    }
    function compileRelevance(mode, _parent) {
      if (mode.relevance === void 0) mode.relevance = 1;
    }
    var beforeMatchExt = (mode, parent) => {
      if (!mode.beforeMatch) return;
      if (mode.starts) throw new Error("beforeMatch cannot be used with starts");
      const originalMode = Object.assign({}, mode);
      Object.keys(mode).forEach((key) => {
        delete mode[key];
      });
      mode.keywords = originalMode.keywords;
      mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
      mode.starts = {
        relevance: 0,
        contains: [
          Object.assign(originalMode, { endsParent: true })
        ]
      };
      mode.relevance = 0;
      delete originalMode.beforeMatch;
    };
    var COMMON_KEYWORDS = [
      "of",
      "and",
      "for",
      "in",
      "not",
      "or",
      "if",
      "then",
      "parent",
      // common variable name
      "list",
      // common variable name
      "value"
      // common variable name
    ];
    var DEFAULT_KEYWORD_SCOPE = "keyword";
    function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
      const compiledKeywords = /* @__PURE__ */ Object.create(null);
      if (typeof rawKeywords === "string") {
        compileList(scopeName, rawKeywords.split(" "));
      } else if (Array.isArray(rawKeywords)) {
        compileList(scopeName, rawKeywords);
      } else {
        Object.keys(rawKeywords).forEach(function(scopeName2) {
          Object.assign(
            compiledKeywords,
            compileKeywords(rawKeywords[scopeName2], caseInsensitive, scopeName2)
          );
        });
      }
      return compiledKeywords;
      function compileList(scopeName2, keywordList) {
        if (caseInsensitive) {
          keywordList = keywordList.map((x3) => x3.toLowerCase());
        }
        keywordList.forEach(function(keyword) {
          const pair = keyword.split("|");
          compiledKeywords[pair[0]] = [scopeName2, scoreForKeyword(pair[0], pair[1])];
        });
      }
    }
    function scoreForKeyword(keyword, providedScore) {
      if (providedScore) {
        return Number(providedScore);
      }
      return commonKeyword(keyword) ? 0 : 1;
    }
    function commonKeyword(keyword) {
      return COMMON_KEYWORDS.includes(keyword.toLowerCase());
    }
    var seenDeprecations = {};
    var error = (message) => {
      console.error(message);
    };
    var warn = (message, ...args) => {
      console.log(`WARN: ${message}`, ...args);
    };
    var deprecated = (version2, message) => {
      if (seenDeprecations[`${version2}/${message}`]) return;
      console.log(`Deprecated as of ${version2}. ${message}`);
      seenDeprecations[`${version2}/${message}`] = true;
    };
    var MultiClassError = new Error();
    function remapScopeNames(mode, regexes, { key }) {
      let offset = 0;
      const scopeNames = mode[key];
      const emit = {};
      const positions = {};
      for (let i = 1; i <= regexes.length; i++) {
        positions[i + offset] = scopeNames[i];
        emit[i + offset] = true;
        offset += countMatchGroups(regexes[i - 1]);
      }
      mode[key] = positions;
      mode[key]._emit = emit;
      mode[key]._multi = true;
    }
    function beginMultiClass(mode) {
      if (!Array.isArray(mode.begin)) return;
      if (mode.skip || mode.excludeBegin || mode.returnBegin) {
        error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
        throw MultiClassError;
      }
      if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
        error("beginScope must be object");
        throw MultiClassError;
      }
      remapScopeNames(mode, mode.begin, { key: "beginScope" });
      mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
    }
    function endMultiClass(mode) {
      if (!Array.isArray(mode.end)) return;
      if (mode.skip || mode.excludeEnd || mode.returnEnd) {
        error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
        throw MultiClassError;
      }
      if (typeof mode.endScope !== "object" || mode.endScope === null) {
        error("endScope must be object");
        throw MultiClassError;
      }
      remapScopeNames(mode, mode.end, { key: "endScope" });
      mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
    }
    function scopeSugar(mode) {
      if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
        mode.beginScope = mode.scope;
        delete mode.scope;
      }
    }
    function MultiClass(mode) {
      scopeSugar(mode);
      if (typeof mode.beginScope === "string") {
        mode.beginScope = { _wrap: mode.beginScope };
      }
      if (typeof mode.endScope === "string") {
        mode.endScope = { _wrap: mode.endScope };
      }
      beginMultiClass(mode);
      endMultiClass(mode);
    }
    function compileLanguage(language) {
      function langRe(value, global2) {
        return new RegExp(
          source(value),
          "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global2 ? "g" : "")
        );
      }
      class MultiRegex {
        constructor() {
          this.matchIndexes = {};
          this.regexes = [];
          this.matchAt = 1;
          this.position = 0;
        }
        // @ts-ignore
        addRule(re2, opts) {
          opts.position = this.position++;
          this.matchIndexes[this.matchAt] = opts;
          this.regexes.push([opts, re2]);
          this.matchAt += countMatchGroups(re2) + 1;
        }
        compile() {
          if (this.regexes.length === 0) {
            this.exec = () => null;
          }
          const terminators = this.regexes.map((el2) => el2[1]);
          this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
          this.lastIndex = 0;
        }
        /** @param {string} s */
        exec(s) {
          this.matcherRe.lastIndex = this.lastIndex;
          const match = this.matcherRe.exec(s);
          if (!match) {
            return null;
          }
          const i = match.findIndex((el2, i2) => i2 > 0 && el2 !== void 0);
          const matchData = this.matchIndexes[i];
          match.splice(0, i);
          return Object.assign(match, matchData);
        }
      }
      class ResumableMultiRegex {
        constructor() {
          this.rules = [];
          this.multiRegexes = [];
          this.count = 0;
          this.lastIndex = 0;
          this.regexIndex = 0;
        }
        // @ts-ignore
        getMatcher(index) {
          if (this.multiRegexes[index]) return this.multiRegexes[index];
          const matcher = new MultiRegex();
          this.rules.slice(index).forEach(([re2, opts]) => matcher.addRule(re2, opts));
          matcher.compile();
          this.multiRegexes[index] = matcher;
          return matcher;
        }
        resumingScanAtSamePosition() {
          return this.regexIndex !== 0;
        }
        considerAll() {
          this.regexIndex = 0;
        }
        // @ts-ignore
        addRule(re2, opts) {
          this.rules.push([re2, opts]);
          if (opts.type === "begin") this.count++;
        }
        /** @param {string} s */
        exec(s) {
          const m = this.getMatcher(this.regexIndex);
          m.lastIndex = this.lastIndex;
          let result = m.exec(s);
          if (this.resumingScanAtSamePosition()) {
            if (result && result.index === this.lastIndex) ;
            else {
              const m2 = this.getMatcher(0);
              m2.lastIndex = this.lastIndex + 1;
              result = m2.exec(s);
            }
          }
          if (result) {
            this.regexIndex += result.position + 1;
            if (this.regexIndex === this.count) {
              this.considerAll();
            }
          }
          return result;
        }
      }
      function buildModeRegex(mode) {
        const mm = new ResumableMultiRegex();
        mode.contains.forEach((term) => mm.addRule(term.begin, { rule: term, type: "begin" }));
        if (mode.terminatorEnd) {
          mm.addRule(mode.terminatorEnd, { type: "end" });
        }
        if (mode.illegal) {
          mm.addRule(mode.illegal, { type: "illegal" });
        }
        return mm;
      }
      function compileMode(mode, parent) {
        const cmode = (
          /** @type CompiledMode */
          mode
        );
        if (mode.isCompiled) return cmode;
        [
          scopeClassName,
          // do this early so compiler extensions generally don't have to worry about
          // the distinction between match/begin
          compileMatch,
          MultiClass,
          beforeMatchExt
        ].forEach((ext) => ext(mode, parent));
        language.compilerExtensions.forEach((ext) => ext(mode, parent));
        mode.__beforeBegin = null;
        [
          beginKeywords,
          // do this later so compiler extensions that come earlier have access to the
          // raw array if they wanted to perhaps manipulate it, etc.
          compileIllegal,
          // default to 1 relevance if not specified
          compileRelevance
        ].forEach((ext) => ext(mode, parent));
        mode.isCompiled = true;
        let keywordPattern = null;
        if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
          mode.keywords = Object.assign({}, mode.keywords);
          keywordPattern = mode.keywords.$pattern;
          delete mode.keywords.$pattern;
        }
        keywordPattern = keywordPattern || /\w+/;
        if (mode.keywords) {
          mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
        }
        cmode.keywordPatternRe = langRe(keywordPattern, true);
        if (parent) {
          if (!mode.begin) mode.begin = /\B|\b/;
          cmode.beginRe = langRe(cmode.begin);
          if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
          if (mode.end) cmode.endRe = langRe(cmode.end);
          cmode.terminatorEnd = source(cmode.end) || "";
          if (mode.endsWithParent && parent.terminatorEnd) {
            cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
          }
        }
        if (mode.illegal) cmode.illegalRe = langRe(
          /** @type {RegExp | string} */
          mode.illegal
        );
        if (!mode.contains) mode.contains = [];
        mode.contains = [].concat(...mode.contains.map(function(c) {
          return expandOrCloneMode(c === "self" ? mode : c);
        }));
        mode.contains.forEach(function(c) {
          compileMode(
            /** @type Mode */
            c,
            cmode
          );
        });
        if (mode.starts) {
          compileMode(mode.starts, parent);
        }
        cmode.matcher = buildModeRegex(cmode);
        return cmode;
      }
      if (!language.compilerExtensions) language.compilerExtensions = [];
      if (language.contains && language.contains.includes("self")) {
        throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      }
      language.classNameAliases = inherit$1(language.classNameAliases || {});
      return compileMode(
        /** @type Mode */
        language
      );
    }
    function dependencyOnParent(mode) {
      if (!mode) return false;
      return mode.endsWithParent || dependencyOnParent(mode.starts);
    }
    function expandOrCloneMode(mode) {
      if (mode.variants && !mode.cachedVariants) {
        mode.cachedVariants = mode.variants.map(function(variant) {
          return inherit$1(mode, { variants: null }, variant);
        });
      }
      if (mode.cachedVariants) {
        return mode.cachedVariants;
      }
      if (dependencyOnParent(mode)) {
        return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
      }
      if (Object.isFrozen(mode)) {
        return inherit$1(mode);
      }
      return mode;
    }
    var version = "11.11.1";
    var HTMLInjectionError = class extends Error {
      constructor(reason, html2) {
        super(reason);
        this.name = "HTMLInjectionError";
        this.html = html2;
      }
    };
    var escape = escapeHTML;
    var inherit = inherit$1;
    var NO_MATCH = Symbol("nomatch");
    var MAX_KEYWORD_HITS = 7;
    var HLJS = function(hljs) {
      const languages = /* @__PURE__ */ Object.create(null);
      const aliases = /* @__PURE__ */ Object.create(null);
      const plugins = [];
      let SAFE_MODE = true;
      const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
      const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: "Plain text", contains: [] };
      let options = {
        ignoreUnescapedHTML: false,
        throwUnescapedHTML: false,
        noHighlightRe: /^(no-?highlight)$/i,
        languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
        classPrefix: "hljs-",
        cssSelector: "pre code",
        languages: null,
        // beta configuration options, subject to change, welcome to discuss
        // https://github.com/highlightjs/highlight.js/issues/1086
        __emitter: TokenTreeEmitter
      };
      function shouldNotHighlight(languageName) {
        return options.noHighlightRe.test(languageName);
      }
      function blockLanguage(block) {
        let classes = block.className + " ";
        classes += block.parentNode ? block.parentNode.className : "";
        const match = options.languageDetectRe.exec(classes);
        if (match) {
          const language = getLanguage(match[1]);
          if (!language) {
            warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
            warn("Falling back to no-highlight mode for this block.", block);
          }
          return language ? match[1] : "no-highlight";
        }
        return classes.split(/\s+/).find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
      }
      function highlight3(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
        let code = "";
        let languageName = "";
        if (typeof optionsOrCode === "object") {
          code = codeOrLanguageName;
          ignoreIllegals = optionsOrCode.ignoreIllegals;
          languageName = optionsOrCode.language;
        } else {
          deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
          deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
          languageName = codeOrLanguageName;
          code = optionsOrCode;
        }
        if (ignoreIllegals === void 0) {
          ignoreIllegals = true;
        }
        const context = {
          code,
          language: languageName
        };
        fire("before:highlight", context);
        const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
        result.code = context.code;
        fire("after:highlight", result);
        return result;
      }
      function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
        const keywordHits = /* @__PURE__ */ Object.create(null);
        function keywordData(mode, matchText) {
          return mode.keywords[matchText];
        }
        function processKeywords() {
          if (!top.keywords) {
            emitter.addText(modeBuffer);
            return;
          }
          let lastIndex = 0;
          top.keywordPatternRe.lastIndex = 0;
          let match = top.keywordPatternRe.exec(modeBuffer);
          let buf = "";
          while (match) {
            buf += modeBuffer.substring(lastIndex, match.index);
            const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
            const data = keywordData(top, word);
            if (data) {
              const [kind, keywordRelevance] = data;
              emitter.addText(buf);
              buf = "";
              keywordHits[word] = (keywordHits[word] || 0) + 1;
              if (keywordHits[word] <= MAX_KEYWORD_HITS) relevance += keywordRelevance;
              if (kind.startsWith("_")) {
                buf += match[0];
              } else {
                const cssClass = language.classNameAliases[kind] || kind;
                emitKeyword(match[0], cssClass);
              }
            } else {
              buf += match[0];
            }
            lastIndex = top.keywordPatternRe.lastIndex;
            match = top.keywordPatternRe.exec(modeBuffer);
          }
          buf += modeBuffer.substring(lastIndex);
          emitter.addText(buf);
        }
        function processSubLanguage() {
          if (modeBuffer === "") return;
          let result2 = null;
          if (typeof top.subLanguage === "string") {
            if (!languages[top.subLanguage]) {
              emitter.addText(modeBuffer);
              return;
            }
            result2 = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
            continuations[top.subLanguage] = /** @type {CompiledMode} */
            result2._top;
          } else {
            result2 = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
          }
          if (top.relevance > 0) {
            relevance += result2.relevance;
          }
          emitter.__addSublanguage(result2._emitter, result2.language);
        }
        function processBuffer() {
          if (top.subLanguage != null) {
            processSubLanguage();
          } else {
            processKeywords();
          }
          modeBuffer = "";
        }
        function emitKeyword(keyword, scope) {
          if (keyword === "") return;
          emitter.startScope(scope);
          emitter.addText(keyword);
          emitter.endScope();
        }
        function emitMultiClass(scope, match) {
          let i = 1;
          const max = match.length - 1;
          while (i <= max) {
            if (!scope._emit[i]) {
              i++;
              continue;
            }
            const klass = language.classNameAliases[scope[i]] || scope[i];
            const text = match[i];
            if (klass) {
              emitKeyword(text, klass);
            } else {
              modeBuffer = text;
              processKeywords();
              modeBuffer = "";
            }
            i++;
          }
        }
        function startNewMode(mode, match) {
          if (mode.scope && typeof mode.scope === "string") {
            emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
          }
          if (mode.beginScope) {
            if (mode.beginScope._wrap) {
              emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
              modeBuffer = "";
            } else if (mode.beginScope._multi) {
              emitMultiClass(mode.beginScope, match);
              modeBuffer = "";
            }
          }
          top = Object.create(mode, { parent: { value: top } });
          return top;
        }
        function endOfMode(mode, match, matchPlusRemainder) {
          let matched = startsWith(mode.endRe, matchPlusRemainder);
          if (matched) {
            if (mode["on:end"]) {
              const resp = new Response(mode);
              mode["on:end"](match, resp);
              if (resp.isMatchIgnored) matched = false;
            }
            if (matched) {
              while (mode.endsParent && mode.parent) {
                mode = mode.parent;
              }
              return mode;
            }
          }
          if (mode.endsWithParent) {
            return endOfMode(mode.parent, match, matchPlusRemainder);
          }
        }
        function doIgnore(lexeme) {
          if (top.matcher.regexIndex === 0) {
            modeBuffer += lexeme[0];
            return 1;
          } else {
            resumeScanAtSamePosition = true;
            return 0;
          }
        }
        function doBeginMatch(match) {
          const lexeme = match[0];
          const newMode = match.rule;
          const resp = new Response(newMode);
          const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
          for (const cb of beforeCallbacks) {
            if (!cb) continue;
            cb(match, resp);
            if (resp.isMatchIgnored) return doIgnore(lexeme);
          }
          if (newMode.skip) {
            modeBuffer += lexeme;
          } else {
            if (newMode.excludeBegin) {
              modeBuffer += lexeme;
            }
            processBuffer();
            if (!newMode.returnBegin && !newMode.excludeBegin) {
              modeBuffer = lexeme;
            }
          }
          startNewMode(newMode, match);
          return newMode.returnBegin ? 0 : lexeme.length;
        }
        function doEndMatch(match) {
          const lexeme = match[0];
          const matchPlusRemainder = codeToHighlight.substring(match.index);
          const endMode = endOfMode(top, match, matchPlusRemainder);
          if (!endMode) {
            return NO_MATCH;
          }
          const origin = top;
          if (top.endScope && top.endScope._wrap) {
            processBuffer();
            emitKeyword(lexeme, top.endScope._wrap);
          } else if (top.endScope && top.endScope._multi) {
            processBuffer();
            emitMultiClass(top.endScope, match);
          } else if (origin.skip) {
            modeBuffer += lexeme;
          } else {
            if (!(origin.returnEnd || origin.excludeEnd)) {
              modeBuffer += lexeme;
            }
            processBuffer();
            if (origin.excludeEnd) {
              modeBuffer = lexeme;
            }
          }
          do {
            if (top.scope) {
              emitter.closeNode();
            }
            if (!top.skip && !top.subLanguage) {
              relevance += top.relevance;
            }
            top = top.parent;
          } while (top !== endMode.parent);
          if (endMode.starts) {
            startNewMode(endMode.starts, match);
          }
          return origin.returnEnd ? 0 : lexeme.length;
        }
        function processContinuations() {
          const list = [];
          for (let current = top; current !== language; current = current.parent) {
            if (current.scope) {
              list.unshift(current.scope);
            }
          }
          list.forEach((item) => emitter.openNode(item));
        }
        let lastMatch = {};
        function processLexeme(textBeforeMatch, match) {
          const lexeme = match && match[0];
          modeBuffer += textBeforeMatch;
          if (lexeme == null) {
            processBuffer();
            return 0;
          }
          if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
            modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
            if (!SAFE_MODE) {
              const err = new Error(`0 width match regex (${languageName})`);
              err.languageName = languageName;
              err.badRule = lastMatch.rule;
              throw err;
            }
            return 1;
          }
          lastMatch = match;
          if (match.type === "begin") {
            return doBeginMatch(match);
          } else if (match.type === "illegal" && !ignoreIllegals) {
            const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || "<unnamed>") + '"');
            err.mode = top;
            throw err;
          } else if (match.type === "end") {
            const processed = doEndMatch(match);
            if (processed !== NO_MATCH) {
              return processed;
            }
          }
          if (match.type === "illegal" && lexeme === "") {
            modeBuffer += "\n";
            return 1;
          }
          if (iterations > 1e5 && iterations > match.index * 3) {
            const err = new Error("potential infinite loop, way more iterations than matches");
            throw err;
          }
          modeBuffer += lexeme;
          return lexeme.length;
        }
        const language = getLanguage(languageName);
        if (!language) {
          error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
          throw new Error('Unknown language: "' + languageName + '"');
        }
        const md = compileLanguage(language);
        let result = "";
        let top = continuation || md;
        const continuations = {};
        const emitter = new options.__emitter(options);
        processContinuations();
        let modeBuffer = "";
        let relevance = 0;
        let index = 0;
        let iterations = 0;
        let resumeScanAtSamePosition = false;
        try {
          if (!language.__emitTokens) {
            top.matcher.considerAll();
            for (; ; ) {
              iterations++;
              if (resumeScanAtSamePosition) {
                resumeScanAtSamePosition = false;
              } else {
                top.matcher.considerAll();
              }
              top.matcher.lastIndex = index;
              const match = top.matcher.exec(codeToHighlight);
              if (!match) break;
              const beforeMatch = codeToHighlight.substring(index, match.index);
              const processedCount = processLexeme(beforeMatch, match);
              index = match.index + processedCount;
            }
            processLexeme(codeToHighlight.substring(index));
          } else {
            language.__emitTokens(codeToHighlight, emitter);
          }
          emitter.finalize();
          result = emitter.toHTML();
          return {
            language: languageName,
            value: result,
            relevance,
            illegal: false,
            _emitter: emitter,
            _top: top
          };
        } catch (err) {
          if (err.message && err.message.includes("Illegal")) {
            return {
              language: languageName,
              value: escape(codeToHighlight),
              illegal: true,
              relevance: 0,
              _illegalBy: {
                message: err.message,
                index,
                context: codeToHighlight.slice(index - 100, index + 100),
                mode: err.mode,
                resultSoFar: result
              },
              _emitter: emitter
            };
          } else if (SAFE_MODE) {
            return {
              language: languageName,
              value: escape(codeToHighlight),
              illegal: false,
              relevance: 0,
              errorRaised: err,
              _emitter: emitter,
              _top: top
            };
          } else {
            throw err;
          }
        }
      }
      function justTextHighlightResult(code) {
        const result = {
          value: escape(code),
          illegal: false,
          relevance: 0,
          _top: PLAINTEXT_LANGUAGE,
          _emitter: new options.__emitter(options)
        };
        result._emitter.addText(code);
        return result;
      }
      function highlightAuto(code, languageSubset) {
        languageSubset = languageSubset || options.languages || Object.keys(languages);
        const plaintext = justTextHighlightResult(code);
        const results = languageSubset.filter(getLanguage).filter(autoDetection).map(
          (name) => _highlight(name, code, false)
        );
        results.unshift(plaintext);
        const sorted = results.sort((a, b3) => {
          if (a.relevance !== b3.relevance) return b3.relevance - a.relevance;
          if (a.language && b3.language) {
            if (getLanguage(a.language).supersetOf === b3.language) {
              return 1;
            } else if (getLanguage(b3.language).supersetOf === a.language) {
              return -1;
            }
          }
          return 0;
        });
        const [best, secondBest] = sorted;
        const result = best;
        result.secondBest = secondBest;
        return result;
      }
      function updateClassName(element, currentLang, resultLang) {
        const language = currentLang && aliases[currentLang] || resultLang;
        element.classList.add("hljs");
        element.classList.add(`language-${language}`);
      }
      function highlightElement(element) {
        let node = null;
        const language = blockLanguage(element);
        if (shouldNotHighlight(language)) return;
        fire(
          "before:highlightElement",
          { el: element, language }
        );
        if (element.dataset.highlighted) {
          console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element);
          return;
        }
        if (element.children.length > 0) {
          if (!options.ignoreUnescapedHTML) {
            console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
            console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
            console.warn("The element with unescaped HTML:");
            console.warn(element);
          }
          if (options.throwUnescapedHTML) {
            const err = new HTMLInjectionError(
              "One of your code blocks includes unescaped HTML.",
              element.innerHTML
            );
            throw err;
          }
        }
        node = element;
        const text = node.textContent;
        const result = language ? highlight3(text, { language, ignoreIllegals: true }) : highlightAuto(text);
        element.innerHTML = result.value;
        element.dataset.highlighted = "yes";
        updateClassName(element, language, result.language);
        element.result = {
          language: result.language,
          // TODO: remove with version 11.0
          re: result.relevance,
          relevance: result.relevance
        };
        if (result.secondBest) {
          element.secondBest = {
            language: result.secondBest.language,
            relevance: result.secondBest.relevance
          };
        }
        fire("after:highlightElement", { el: element, result, text });
      }
      function configure(userOptions) {
        options = inherit(options, userOptions);
      }
      const initHighlighting = () => {
        highlightAll();
        deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
      };
      function initHighlightingOnLoad() {
        highlightAll();
        deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
      }
      let wantsHighlight = false;
      function highlightAll() {
        function boot() {
          highlightAll();
        }
        if (document.readyState === "loading") {
          if (!wantsHighlight) {
            window.addEventListener("DOMContentLoaded", boot, false);
          }
          wantsHighlight = true;
          return;
        }
        const blocks = document.querySelectorAll(options.cssSelector);
        blocks.forEach(highlightElement);
      }
      function registerLanguage(languageName, languageDefinition) {
        let lang = null;
        try {
          lang = languageDefinition(hljs);
        } catch (error$1) {
          error("Language definition for '{}' could not be registered.".replace("{}", languageName));
          if (!SAFE_MODE) {
            throw error$1;
          } else {
            error(error$1);
          }
          lang = PLAINTEXT_LANGUAGE;
        }
        if (!lang.name) lang.name = languageName;
        languages[languageName] = lang;
        lang.rawDefinition = languageDefinition.bind(null, hljs);
        if (lang.aliases) {
          registerAliases(lang.aliases, { languageName });
        }
      }
      function unregisterLanguage(languageName) {
        delete languages[languageName];
        for (const alias of Object.keys(aliases)) {
          if (aliases[alias] === languageName) {
            delete aliases[alias];
          }
        }
      }
      function listLanguages() {
        return Object.keys(languages);
      }
      function getLanguage(name) {
        name = (name || "").toLowerCase();
        return languages[name] || languages[aliases[name]];
      }
      function registerAliases(aliasList, { languageName }) {
        if (typeof aliasList === "string") {
          aliasList = [aliasList];
        }
        aliasList.forEach((alias) => {
          aliases[alias.toLowerCase()] = languageName;
        });
      }
      function autoDetection(name) {
        const lang = getLanguage(name);
        return lang && !lang.disableAutodetect;
      }
      function upgradePluginAPI(plugin) {
        if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
          plugin["before:highlightElement"] = (data) => {
            plugin["before:highlightBlock"](
              Object.assign({ block: data.el }, data)
            );
          };
        }
        if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
          plugin["after:highlightElement"] = (data) => {
            plugin["after:highlightBlock"](
              Object.assign({ block: data.el }, data)
            );
          };
        }
      }
      function addPlugin(plugin) {
        upgradePluginAPI(plugin);
        plugins.push(plugin);
      }
      function removePlugin(plugin) {
        const index = plugins.indexOf(plugin);
        if (index !== -1) {
          plugins.splice(index, 1);
        }
      }
      function fire(event, args) {
        const cb = event;
        plugins.forEach(function(plugin) {
          if (plugin[cb]) {
            plugin[cb](args);
          }
        });
      }
      function deprecateHighlightBlock(el2) {
        deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
        deprecated("10.7.0", "Please use highlightElement now.");
        return highlightElement(el2);
      }
      Object.assign(hljs, {
        highlight: highlight3,
        highlightAuto,
        highlightAll,
        highlightElement,
        // TODO: Remove with v12 API
        highlightBlock: deprecateHighlightBlock,
        configure,
        initHighlighting,
        initHighlightingOnLoad,
        registerLanguage,
        unregisterLanguage,
        listLanguages,
        getLanguage,
        registerAliases,
        autoDetection,
        inherit,
        addPlugin,
        removePlugin
      });
      hljs.debugMode = function() {
        SAFE_MODE = false;
      };
      hljs.safeMode = function() {
        SAFE_MODE = true;
      };
      hljs.versionString = version;
      hljs.regex = {
        concat,
        lookahead,
        either,
        optional,
        anyNumberOfTimes
      };
      for (const key in MODES) {
        if (typeof MODES[key] === "object") {
          deepFreeze(MODES[key]);
        }
      }
      Object.assign(hljs, MODES);
      return hljs;
    };
    var highlight2 = HLJS({});
    highlight2.newInstance = () => HLJS({});
    module.exports = highlight2;
    highlight2.HighlightJS = highlight2;
    highlight2.default = highlight2;
  }
});
var DURATION = 400;
var ClassNames = {
  EXPANDING: "expanding",
  COLLAPSING: "collapsing"
};
var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion)");
var useAnimation = !prefersReducedMotion.matches;
prefersReducedMotion.addEventListener("change", (event) => {
  useAnimation = !event.matches;
});
function expandAnimation(element) {
  let animation = null;
  let isOpen = false;
  let isClosing = false;
  let isExpanding = false;
  return {
    get isOpen() {
      return isOpen;
    },
    toggle() {
      if (useAnimation) {
        element.style.overflow = "hidden";
        if (isExpanding || isOpen) {
          isOpen = false;
          shrink();
        } else if (isClosing || !isOpen) {
          isOpen = true;
          open();
        }
        return;
      }
      if (isOpen) {
        isOpen = false;
        element.setAttribute("aria-expanded", "false");
      } else {
        isOpen = true;
        element.setAttribute("aria-expanded", "true");
      }
    }
  };
  function shrink() {
    isClosing = true;
    const startHeight = `${String(element.offsetHeight)}px`;
    const endHeight = `0px`;
    element.classList.add(ClassNames.COLLAPSING);
    if (animation) {
      animation.cancel();
    }
    animation = element.animate(
      {
        height: [startHeight, endHeight]
      },
      {
        duration: DURATION,
        easing: "ease-in-out"
      }
    );
    animation.onfinish = () => {
      onAnimationFinish(false);
    };
    animation.oncancel = () => {
      element.classList.remove(ClassNames.COLLAPSING);
      isClosing = false;
    };
  }
  function open() {
    let currentHeight = 0;
    if (animation) {
      currentHeight = element.getBoundingClientRect().height;
    }
    element.setAttribute("aria-expanded", "true");
    window.requestAnimationFrame(() => {
      expand(currentHeight);
    });
  }
  function expand(currentHeight) {
    isExpanding = true;
    if (animation) {
      animation.cancel();
      element.style.height = "";
    }
    const startHeight = `${String(currentHeight)}px`;
    const endHeight = `${String(element.offsetHeight)}px`;
    element.classList.add(ClassNames.EXPANDING);
    animation = element.animate(
      {
        height: [startHeight, endHeight]
      },
      {
        duration: DURATION,
        easing: "ease-in-out"
      }
    );
    animation.onfinish = () => {
      onAnimationFinish(true);
    };
    animation.oncancel = () => {
      element.classList.remove(ClassNames.EXPANDING);
      isExpanding = false;
    };
  }
  function onAnimationFinish(open2) {
    element.setAttribute("aria-expanded", open2 ? "true" : "false");
    animation = null;
    isClosing = false;
    isExpanding = false;
    element.classList.remove(ClassNames.EXPANDING);
    element.classList.remove(ClassNames.COLLAPSING);
    element.style.height = "";
    element.style.overflow = "";
  }
}
function cyrb53(str) {
  const a = 2654435761;
  const b3 = 1597334677;
  const c = 2246822507;
  const d = 3266489909;
  const e = 4294967296;
  const f2 = 2097151;
  const seed = 0;
  let h1 = 3735928559 ^ seed;
  let h22 = 1103547991 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, a);
    h22 = Math.imul(h22 ^ ch, b3);
  }
  h1 = Math.imul(h1 ^ h1 >>> 16, c) ^ Math.imul(h22 ^ h22 >>> 13, d);
  h22 = Math.imul(h22 ^ h22 >>> 16, c) ^ Math.imul(h1 ^ h1 >>> 13, d);
  return e * (f2 & h22) + (h1 >>> 0);
}
function generateId(template) {
  const hash = cyrb53(template);
  return `le-${hash.toString(16)}`;
}
var import_core = __toESM(require_core(), 1);
var core_default = import_core.default;
function xml(hljs) {
  const regex = hljs.regex;
  const TAG_NAME_RE = regex.concat(/[\p{L}_]/u, regex.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u);
  const XML_IDENT_RE = /[\p{L}0-9._:-]+/u;
  const XML_ENTITIES = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  };
  const XML_META_KEYWORDS = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  };
  const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
    begin: /\(/,
    end: /\)/
  });
  const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, { className: "string" });
  const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, { className: "string" });
  const TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: true,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [XML_ENTITIES]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [XML_ENTITIES]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: true,
    unicodeRegex: true,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          XML_META_KEYWORDS,
          QUOTE_META_STRING_MODE,
          APOS_META_STRING_MODE,
          XML_META_PAR_KEYWORDS,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  XML_META_KEYWORDS,
                  XML_META_PAR_KEYWORDS,
                  QUOTE_META_STRING_MODE,
                  APOS_META_STRING_MODE
                ]
              }
            ]
          }
        ]
      },
      hljs.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      XML_ENTITIES,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              QUOTE_META_STRING_MODE
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [TAG_INTERNALS],
        starts: {
          end: /<\/style>/,
          returnEnd: true,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [TAG_INTERNALS],
        starts: {
          end: /<\/script>/,
          returnEnd: true,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: regex.concat(
          /</,
          regex.lookahead(regex.concat(
            TAG_NAME_RE,
            // <tag/>
            // <tag>
            // <tag ...
            regex.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: TAG_NAME_RE,
            relevance: 0,
            starts: TAG_INTERNALS
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: regex.concat(
          /<\//,
          regex.lookahead(regex.concat(
            TAG_NAME_RE,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: TAG_NAME_RE,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: true
          }
        ]
      }
    ]
  };
}
core_default.registerLanguage("html", xml);
var prettierConfig = {
  parser: "html",
  plugins: [Cs],
  singleQuote: false,
  arrowParens: "always",
  tabWidth: 4,
  printWidth: 80
};
async function highlight(code) {
  const formatted = await Un2(code, prettierConfig);
  const { value } = core_default.highlight(formatted, { language: "html" });
  return `<code class="hljs lang-html" tabindex="0">${value}</code>`;
}
function stripComments(html2) {
  const commentPattern = /<!--.*?-->/g;
  return html2.replace(commentPattern, "");
}
async function getSourceCode(options) {
  const { language, template, element } = options;
  if (language === "original") {
    return await highlight(template);
  } else {
    const html2 = element.innerHTML;
    const uncommented = stripComments(html2);
    return await highlight(uncommented);
  }
}
var LiveExampleSourcecode_default = /* @__PURE__ */ _defineComponent({
  __name: "LiveExampleSourcecode",
  props: {
    element: { type: null, required: true },
    template: { type: String, required: true },
    templateLanguage: { type: String, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    let idPrefix = generateId(props.template);
    const sourcecode = ref2("");
    const expandable = useTemplateRef2("expandableRef");
    const animation = ref2({
      isOpen: false,
      toggle() {
      }
    });
    const selectedLanguage = ref2(toSelectedLanguage(props.templateLanguage));
    const codeToggleText = computed2(() => {
      return animation.value.isOpen ? "D\xF6lj kod" : "Visa kod";
    });
    onMounted2(() => {
      if (expandable.value) {
        animation.value = expandAnimation(expandable.value);
      } else {
        throw new Error("Missing HTML element");
      }
      updateSourcecode();
    });
    watch2(() => props.template, onUpdateTemplate);
    watch2(() => props.templateLanguage, updateSelectedLanguage, { once: true });
    async function updateSourcecode() {
      await nextTick2();
      sourcecode.value = await getSourceCode({
        language: selectedLanguage.value,
        template: props.template ?? "",
        element: unwrapElement(props.element)
      });
    }
    function unwrapElement(element) {
      const firstElementChild = element.firstElementChild;
      return firstElementChild ?? element;
    }
    function updateSelectedLanguage(value) {
      selectedLanguage.value = toSelectedLanguage(value);
    }
    function id(suffix) {
      return `${idPrefix}--${suffix}`;
    }
    function toSelectedLanguage(value) {
      return value === "html" ? "rendered" : "original";
    }
    function onUpdateTemplate(template) {
      idPrefix = generateId(template);
      updateSourcecode();
    }
    function onToggleCode() {
      animation.value.toggle();
    }
    const __returned__ = { props, get idPrefix() {
      return idPrefix;
    }, set idPrefix(v3) {
      idPrefix = v3;
    }, sourcecode, expandable, animation, selectedLanguage, codeToggleText, updateSourcecode, unwrapElement, updateSelectedLanguage, id, toSelectedLanguage, onUpdateTemplate, onToggleCode };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { class: "live-example__code-toggle" };
var _hoisted_2 = ["aria-controls", "aria-expanded"];
var _hoisted_3 = ["id"];
var _hoisted_4 = {
  class: "live-example__code-languages",
  onsubmit: "event.preventDefault()"
};
var _hoisted_5 = {
  key: 0,
  class: "fieldset radio-button-group radio-button-group--horizontal"
};
var _hoisted_6 = { class: "fieldset__content radio-button-group__content" };
var _hoisted_7 = {
  key: 0,
  class: "radio-button"
};
var _hoisted_82 = ["id"];
var _hoisted_92 = ["for"];
var _hoisted_102 = { class: "radio-button" };
var _hoisted_11 = ["id"];
var _hoisted_12 = ["for"];
var _hoisted_13 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createElementVNode("div", _hoisted_1, [
        _createElementVNode("button", {
          type: "button",
          class: "button button--discrete",
          "aria-controls": $setup.id("code-expand"),
          "aria-expanded": $setup.animation.isOpen ? "true" : "false",
          onClick: $setup.onToggleCode
        }, [
          _cache[2] || (_cache[2] = _createElementVNode(
            "i",
            { class: "icon icon--code" },
            null,
            -1
            /* CACHED */
          )),
          _createTextVNode(
            " " + _toDisplayString($setup.codeToggleText),
            1
            /* TEXT */
          )
        ], 8, _hoisted_2)
      ]),
      _createElementVNode("div", {
        id: $setup.id("code-expand"),
        ref: "expandableRef",
        class: "collapsed"
      }, [
        _createCommentVNode(" [html-validate-disable-next wcag/h32 -- this form is not meant to be submitted] "),
        _createElementVNode("form", _hoisted_4, [
          $setup.sourcecode ? (_openBlock(), _createElementBlock("fieldset", _hoisted_5, [
            _cache[3] || (_cache[3] = _createElementVNode(
              "legend",
              { class: "label fieldset__label" },
              "Kodspr\xE5k",
              -1
              /* CACHED */
            )),
            _createElementVNode("div", _hoisted_6, [
              $props.templateLanguage === "vue" ? (_openBlock(), _createElementBlock("div", _hoisted_7, [
                _withDirectives(_createElementVNode("input", {
                  id: $setup.id("lang-original"),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selectedLanguage = $event),
                  type: "radio",
                  class: "radio-button__input",
                  name: "selected-language",
                  value: "original",
                  onChange: $setup.updateSourcecode
                }, null, 40, _hoisted_82), [
                  [_vModelRadio, $setup.selectedLanguage]
                ]),
                _createElementVNode("label", {
                  for: $setup.id("lang-original"),
                  class: "radio-button__label"
                }, " Vue ", 8, _hoisted_92)
              ])) : _createCommentVNode("v-if", true),
              _createElementVNode("div", _hoisted_102, [
                _withDirectives(_createElementVNode("input", {
                  id: $setup.id("lang-rendered"),
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.selectedLanguage = $event),
                  type: "radio",
                  class: "radio-button__input",
                  name: "selected-language",
                  value: "rendered",
                  onChange: $setup.updateSourcecode
                }, null, 40, _hoisted_11), [
                  [_vModelRadio, $setup.selectedLanguage]
                ]),
                _createElementVNode("label", {
                  for: $setup.id("lang-rendered"),
                  class: "radio-button__label"
                }, " HTML ", 8, _hoisted_12)
              ])
            ])
          ])) : _createCommentVNode("v-if", true)
        ]),
        _createCommentVNode(" eslint-disable-next-line vue/no-v-html -- expected to show highlighted markup "),
        _createElementVNode("pre", { innerHTML: $setup.sourcecode }, null, 8, _hoisted_13)
      ], 8, _hoisted_3)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
LiveExampleSourcecode_default.render = render;
LiveExampleSourcecode_default.__file = "src/LiveExampleSourcecode.vue";
LiveExampleSourcecode_default.__scopeId = "data-v-7a98eb26";
var LiveExampleSourcecode_default2 = LiveExampleSourcecode_default;
var live_vue_code_default = defineComponent3({
  name: "LiveVueCode",
  props: {
    template: {
      type: String,
      required: true
    },
    components: {
      type: Object,
      required: true
    },
    livedata: {
      type: Object,
      required: true
    },
    livemethods: {
      type: Object,
      required: true
    }
  },
  render() {
    const renderFunction = compile(this.template);
    if (!renderFunction) {
      const message = "Failed to compile Vue render function!";
      return h3("div", { style: "color: red" }, message);
    }
    return h3(
      {
        name: "LiveComponent",
        data() {
          return { ...this.livedata };
        },
        props: {
          livedata: {
            type: Object,
            required: true
          },
          livemethods: {
            type: Object,
            required: true
          }
        },
        methods: { ...this.livemethods },
        components: this.components,
        render: renderFunction
      },
      { livedata: this.livedata, livemethods: this.livemethods }
    );
  }
});
var LiveExample_default = defineComponent2({
  name: "LiveExample",
  components: { LiveExampleSourcecode: LiveExampleSourcecode_default2, LiveVueCode: live_vue_code_default },
  props: {
    /**
     * Explicitly render example in given language.
     *
     * Must be one of:
     *
     * - `"vue"` - Interpret `template` as a Vue SFC.
     * - `"html"` - Interpret `template` as vanilla HTML.
     *
     * Default is `"auto"` but you should not explicitly set this value
     * yourself. When set to `"auto"` the contents of `template` prop will
     * be autodetected based on some heurestics (subject to change at any
     * time).
     */
    language: {
      type: String,
      required: false,
      default: "auto",
      validator(value) {
        return ["vue", "html", "auto"].includes(value);
      }
    },
    template: {
      type: String,
      required: true
    },
    components: {
      type: Object,
      required: false,
      default: () => {
        return {};
      }
    },
    livedata: {
      type: Object,
      required: false,
      default: () => {
        return {};
      }
    },
    livemethods: {
      type: Object,
      required: false,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      /** Language declared by parent element via `data-language`, if any */
      parentLanguage: "",
      exampleElement: void 0
    };
  },
  computed: {
    templateLanguage() {
      if (this.language !== "auto") {
        return this.language;
      }
      if (this.parentLanguage) {
        return this.parentLanguage;
      }
      const hasChildComponents = Object.keys(this.components).length > 0;
      return hasChildComponents ? "vue" : "html";
    }
  },
  mounted() {
    const parent = this.$el.closest("[data-language]");
    if (parent) {
      this.parentLanguage = parent.dataset.language ?? "";
    }
    this.exampleElement = this.$refs.example;
  }
});
var _hoisted_14 = { class: "live-example__container" };
var _hoisted_22 = {
  ref: "example",
  class: "live-example__example"
};
var _hoisted_32 = { key: 0 };
var _hoisted_42 = ["innerHTML"];
var _hoisted_52 = { key: 2 };
var _hoisted_62 = { class: "live-example__controls" };
var _hoisted_72 = {
  key: 0,
  class: "live-example__code"
};
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_live_vue_code = _resolveComponent("live-vue-code");
  const _component_live_example_sourcecode = _resolveComponent("live-example-sourcecode");
  return _openBlock2(), _createElementBlock2("div", _hoisted_14, [
    _createElementVNode2(
      "div",
      _hoisted_22,
      [
        _ctx.templateLanguage === "vue" ? (_openBlock2(), _createElementBlock2("div", _hoisted_32, [
          _createVNode(_component_live_vue_code, {
            components: _ctx.components,
            template: _ctx.template,
            livedata: _ctx.livedata,
            livemethods: _ctx.livemethods
          }, null, 8, ["components", "template", "livedata", "livemethods"])
        ])) : _ctx.templateLanguage === "html" ? (_openBlock2(), _createElementBlock2(
          _Fragment2,
          { key: 1 },
          [
            _createCommentVNode2(" eslint-disable-next-line vue/no-v-html -- expected to show rendered html "),
            _createElementVNode2("div", { innerHTML: _ctx.template }, null, 8, _hoisted_42)
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        )) : (_openBlock2(), _createElementBlock2("div", _hoisted_52, [..._cache[0] || (_cache[0] = [
          _createElementVNode2(
            "pre",
            null,
            "Unknown language, cannot render example",
            -1
            /* CACHED */
          )
        ])]))
      ],
      512
      /* NEED_PATCH */
    ),
    _createElementVNode2("div", _hoisted_62, [
      _renderSlot(_ctx.$slots, "default")
    ]),
    _ctx.exampleElement ? (_openBlock2(), _createElementBlock2("div", _hoisted_72, [
      _createVNode(_component_live_example_sourcecode, {
        element: _ctx.exampleElement,
        template: _ctx.template,
        "template-language": _ctx.templateLanguage
      }, null, 8, ["element", "template", "template-language"])
    ])) : _createCommentVNode2("v-if", true)
  ]);
}
LiveExample_default.render = render2;
LiveExample_default.__file = "src/LiveExample.vue";
var LiveExample_default2 = LiveExample_default;

// virtual-entry:virtual:src/components/FTable/examples/FTableLiveExample.vue:FTableLiveExample-e08228.js
import { createTextVNode as _createTextVNode2, resolveComponent as _resolveComponent2, withCtx as _withCtx, createVNode as _createVNode2, createElementVNode as _createElementVNode3, openBlock as _openBlock3, createBlock as _createBlock, createCommentVNode as _createCommentVNode3 } from "vue";
var selectFieldOptions = ["Hund", "Katt", "Hamster", "Papegoja", "Spindel", "Guldfisk"];
function onButtonClick(row) {
  alert(`Du klickade p\xE5 rad med id ${row.id}`);
}
var columns = defineTableColumns([
  {
    type: "text",
    header: "Oformaterad text",
    value(row) {
      return String(row.antal);
    }
  },
  {
    type: "checkbox",
    header: "Kryssruta",
    key: "aktiv",
    label: (row) => `V\xE4lj rad ${row.id}`,
    editable: true
  },
  {
    type: "text",
    header: "Formatterad text",
    label: (row) => `Text f\xF6r rad ${row.id}`,
    value(row) {
      return formatNumber2(row.antal) ?? "";
    },
    editable: false
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
    icon: "bell",
    value(row) {
      return `Exempeltext f\xF6r knapp med id ${row.id}`;
    },
    onClick: onButtonClick
  },
  {
    header: "L\xE4nk",
    type: "anchor",
    href: "#",
    value() {
      return "L\xE4nktext";
    }
  },
  {
    header: "Dropplista",
    type: "select",
    key: "animal",
    label: (row) => `Djur f\xF6r rad ${row.id}`,
    options: selectFieldOptions,
    editable: true
  },
  {
    header: "Render function",
    render() {
      return h4("td", { id: "foo", class: "bar" }, ["\u{1F47B}"]);
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
var rows = [
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
];
var exampleComponent = defineComponent4({
  name: "FTableLiveExample",
  components: { LiveExample: LiveExample_default2, FCheckboxField, FFieldset, FRadioField, FSelectField },
  data() {
    return {
      isEmpty: false,
      isStriped: false,
      hasRowDescription: false,
      hasCustomEmptyText: false,
      hasHiddenCaption: false,
      hasRowHeader: false,
      isSelectable: "",
      isExpandable: false,
      hasCustomExpandContent: false
    };
  },
  computed: {
    livedata() {
      return {
        columns,
        rows,
        selectedRows: []
      };
    },
    components() {
      return { FTable: _sfc_main$2 };
    },
    items() {
      return this.isEmpty ? `:rows="[]"` : `:rows`;
    },
    striped() {
      return this.isStriped ? "striped" : "";
    },
    selectable() {
      if (!this.isSelectable) {
        return "";
      }
      return `selectable="${this.isSelectable}"`;
    },
    expandable() {
      const expandableType = this.hasCustomExpandContent ? "expandableContent" : "expandableRows";
      return this.isExpandable ? `expandable-attribute="${expandableType}"` : "";
    },
    expandableSlot() {
      const template = (
        /* HTML */
        `
                <template #expandable="{ row }"> {{ row.content }} </template>
            `
      );
      return this.isExpandable && this.hasCustomExpandContent ? template : "";
    },
    empty() {
      const template = (
        /* HTML */
        `<template #empty>
                Det finns inga aktuella utbetalningar.
            </template>`
      );
      return this.isEmpty && this.hasCustomEmptyText ? template : "";
    },
    template() {
      return (
        /* HTML */
        `
                <f-table
                    v-model:selected-rows="selectedRows"
                    ${this.items}
                    :columns
                    key-attribute="id"
                    ${this.striped}
                    ${this.selectable}
                    ${this.expandable}
                >
                    ${this.expandableSlot} ${this.empty}
                </f-table>
            `
      );
    }
  }
});
function render3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_checkbox_field = _resolveComponent2("f-checkbox-field");
  const _component_f_fieldset = _resolveComponent2("f-fieldset");
  const _component_f_select_field = _resolveComponent2("f-select-field");
  const _component_f_radio_field = _resolveComponent2("f-radio-field");
  const _component_live_example = _resolveComponent2("live-example");
  return _openBlock3(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template,
    livedata: _ctx.livedata
  }, {
    default: _withCtx(() => [
      _createVNode2(_component_f_fieldset, { name: "styling" }, {
        label: _withCtx(() => [..._cache[10] || (_cache[10] = [
          _createTextVNode2(
            " Visuellt ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode2(_component_f_checkbox_field, {
            modelValue: _ctx.isStriped,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.isStriped = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[11] || (_cache[11] = [
              _createTextVNode2(
                " Zebrarandig ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode2(_component_f_checkbox_field, {
            modelValue: _ctx.hasRowHeader,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.hasRowHeader = $event),
            disabled: "",
            value: true
          }, {
            default: _withCtx(() => [..._cache[12] || (_cache[12] = [
              _createTextVNode2(
                " Radrubriker ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode2(_component_f_checkbox_field, {
            modelValue: _ctx.hasHiddenCaption,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.hasHiddenCaption = $event),
            disabled: "",
            value: true
          }, {
            default: _withCtx(() => [..._cache[13] || (_cache[13] = [
              _createTextVNode2(
                " Dold caption ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      _createVNode2(_component_f_fieldset, { name: "interaktion" }, {
        label: _withCtx(() => [..._cache[14] || (_cache[14] = [
          _createTextVNode2(
            " Interaktion ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode2(_component_f_select_field, {
            modelValue: _ctx.isSelectable,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.isSelectable = $event)
          }, {
            label: _withCtx(() => [..._cache[15] || (_cache[15] = [
              _createTextVNode2(
                " Valbara rader ",
                -1
                /* CACHED */
              )
            ])]),
            default: _withCtx(() => [
              _cache[16] || (_cache[16] = _createElementVNode3(
                "option",
                { value: "" },
                "Nej",
                -1
                /* CACHED */
              )),
              _cache[17] || (_cache[17] = _createElementVNode3(
                "option",
                { value: "multi" },
                "Ja, flerval",
                -1
                /* CACHED */
              )),
              _cache[18] || (_cache[18] = _createElementVNode3(
                "option",
                { value: "single" },
                "Ja, enkelval",
                -1
                /* CACHED */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode2(_component_f_checkbox_field, {
            modelValue: _ctx.isExpandable,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.isExpandable = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[19] || (_cache[19] = [
              _createTextVNode2(
                " Expanderbara rader ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _ctx.isExpandable ? (_openBlock3(), _createBlock(_component_f_fieldset, {
            key: 0,
            name: "radio-expandable-type"
          }, {
            label: _withCtx(() => [..._cache[20] || (_cache[20] = [
              _createTextVNode2(
                " Typ av expanderat inneh\xE5ll ",
                -1
                /* CACHED */
              )
            ])]),
            default: _withCtx(() => [
              _createVNode2(_component_f_radio_field, {
                modelValue: _ctx.hasCustomExpandContent,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.hasCustomExpandContent = $event),
                value: false
              }, {
                default: _withCtx(() => [..._cache[21] || (_cache[21] = [
                  _createTextVNode2(
                    " Tabellrad ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              _createVNode2(_component_f_radio_field, {
                modelValue: _ctx.hasCustomExpandContent,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.hasCustomExpandContent = $event),
                value: true
              }, {
                default: _withCtx(() => [..._cache[22] || (_cache[22] = [
                  _createTextVNode2(
                    " Valfritt inneh\xE5ll ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          })) : _createCommentVNode3("v-if", true),
          _createVNode2(_component_f_checkbox_field, {
            modelValue: _ctx.isEmpty,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.isEmpty = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[23] || (_cache[23] = [
              _createTextVNode2(
                " Tom tabell ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _ctx.isEmpty ? (_openBlock3(), _createBlock(_component_f_fieldset, {
            key: 1,
            name: "radio-empty-text"
          }, {
            label: _withCtx(() => [..._cache[24] || (_cache[24] = [
              _createTextVNode2(
                " Meddelande f\xF6r tom tabell ",
                -1
                /* CACHED */
              )
            ])]),
            default: _withCtx(() => [
              _createVNode2(_component_f_radio_field, {
                modelValue: _ctx.hasCustomEmptyText,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.hasCustomEmptyText = $event),
                value: false
              }, {
                default: _withCtx(() => [..._cache[25] || (_cache[25] = [
                  _createTextVNode2(
                    " Standardmeddelande ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              _createVNode2(_component_f_radio_field, {
                modelValue: _ctx.hasCustomEmptyText,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.hasCustomEmptyText = $event),
                value: true
              }, {
                default: _withCtx(() => [..._cache[26] || (_cache[26] = [
                  _createTextVNode2(
                    " Eget meddelande ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          })) : _createCommentVNode3("v-if", true)
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["components", "template", "livedata"]);
}
exampleComponent.render = render3;
setup({
  rootComponent: exampleComponent,
  selector: "#example-e08228"
});
export {
  render3 as render
};
