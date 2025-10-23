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

// virtual-entry:virtual:src/components/XTimeTextField/examples/ForgivingInput.vue:ForgivingInput-1275e4.js
import { defineComponent as defineComponent2 } from "vue";

// dist/esm/index.esm.js
import { isEmpty, stripWhitespace, isSet, TranslationService, ValidationService, assertRef, assertSet, ElementIdService } from "@fkui/logic";
import { defineComponent, useTemplateRef, computed, createElementBlock, openBlock, createElementVNode, createVNode, unref, renderSlot, withModifiers, createTextVNode, createCommentVNode, withCtx, createBlock, toDisplayString, normalizeClass, inject, nextTick, ref, watchEffect, withDirectives, vShow, onMounted, vModelText, toRef, mergeModels, useModel, useSlots, provide, Fragment, renderList, mergeProps, resolveDynamicComponent } from "vue";
import { TranslationMixin, FTextField, useTextFieldSetup, getInternalKey, FIcon, IFlex, IFlexItem, IComboboxDropdown, setInternalKeys, FSortFilterDatasetInjected } from "@fkui/vue";
var HOURS_MINUTES_REGEXP = /^(?<hours>\d+)?(:(?<minutes>[0-5]\d))?$/;
var HOURS_MINUTES_WITHOUT_COLON_REGEXP = /^(?<hours>\d{2})(?<minutes>[0-5]\d)$/;
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
  var toString = uncurryThis({}.toString);
  var stringSlice = uncurryThis("".slice);
  classofRaw = function(it) {
    return stringSlice(toString(it), 8, -1);
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
var isObject;
var hasRequiredIsObject;
function requireIsObject() {
  if (hasRequiredIsObject) return isObject;
  hasRequiredIsObject = 1;
  var isCallable2 = requireIsCallable();
  isObject = function(it) {
    return typeof it == "object" ? it !== null : isCallable2(it);
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
  var Deno = globalThis2.Deno;
  var versions = process && process.versions || Deno && Deno.version;
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
  var isObject2 = requireIsObject();
  var $TypeError = TypeError;
  ordinaryToPrimitive = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable2(fn = input.toString) && !isObject2(val = call(fn, input))) return val;
    if (isCallable2(fn = input.valueOf) && !isObject2(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable2(fn = input.toString) && !isObject2(val = call(fn, input))) return val;
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
    version: "3.46.0",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xA9 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)",
    license: "https://github.com/zloirock/core-js/blob/v3.46.0/LICENSE",
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
  var toString = uncurryThis(1.1.toString);
  uid = function(key) {
    return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
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
  var WeakMap = globalThis2.WeakMap;
  weakMapBasicDetection = isCallable2(WeakMap) && /native code/.test(String(WeakMap));
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
  var WeakMap = globalThis2.WeakMap;
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
    var store = shared2.state || (shared2.state = new WeakMap());
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
  Function.prototype.toString = makeBuiltIn$1(function toString() {
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
var es_iterator_filter = {};
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
var es_iterator_map = {};
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
function minutesToUserFriendlyString(value) {
  const [hours, minutes] = splitHoursMinutes(minutesToHoursMinutesString(value)).map(Number);
  return TranslationService.provider.translate("ARBE.RW.generell.etikett.timmarochminuter", "{{hours}} timmar och {{minutes}} minuter", {
    hours,
    minutes
  });
}
function minutesToHoursFloat(...values) {
  const minutes = values.filter((value) => isSet(value) && !isNaN(value)).reduce((sum, value) => sum + value, 0);
  return minutes / 60;
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
function forgivingParseTimeToNumber(value) {
  return parseTimeToNumberUsingConfig(value, true);
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
var _sfc_main$b = defineComponent({
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
var internalKey = getInternalKey();
var stopEditKey = Symbol();

// virtual-entry:virtual:src/components/XTimeTextField/examples/ForgivingInput.vue:ForgivingInput-1275e4.js
import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, toDisplayString as _toDisplayString, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent2({
  name: "XTimeComponentExample",
  components: {
    XTimeTextField: _sfc_main$b
  },
  data() {
    return {
      time: void 0,
      parser: (value) => forgivingParseTimeToNumber(value)
    };
  },
  computed: {
    userFriendlyValue() {
      return minutesToUserFriendlyString(this.time);
    },
    timeInHours() {
      return minutesToHoursFloat(this.time);
    },
    timeAsObject() {
      return JSON.stringify(minutesToObject(this.time));
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_x_time_text_field = _resolveComponent("x-time-text-field");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createElementBlock("div", null, [
    _withDirectives((_openBlock(), _createBlock(_component_x_time_text_field, {
      modelValue: _ctx.time,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.time = $event),
      parser: _ctx.parser
    }, {
      description: _withCtx(({ formatDescriptionClass }) => [
        _createElementVNode(
          "span",
          {
            class: _normalizeClass(formatDescriptionClass)
          },
          "(tt:mm)",
          2
          /* CLASS */
        )
      ]),
      default: _withCtx(() => [
        _cache[1] || (_cache[1] = _createTextVNode(
          " Ange arbetstid ",
          -1
          /* CACHED */
        ))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "parser"])), [
      [
        _directive_validation,
        {
          hoursMinutes: {
            errorMessage: "Du har skrivit in ett felaktigt tidformat.",
            parser: [_ctx.parser]
          },
          maxTime: {
            maxTime: "24:00",
            errorMessage: "Du kan inte fylla i en tid \xF6verstigande 24 timmar.",
            parser: [_ctx.parser]
          }
        },
        void 0,
        {
          required: true,
          hoursMinutes: true,
          maxTime: true
        }
      ]
    ]),
    _createElementVNode("p", null, [
      _createTextVNode(
        " V\xE4rde: " + _toDisplayString(_ctx.time) + ".",
        1
        /* TEXT */
      ),
      _cache[2] || (_cache[2] = _createElementVNode(
        "br",
        null,
        null,
        -1
        /* CACHED */
      )),
      _createTextVNode(
        " Renskrivet v\xE4rde: " + _toDisplayString(_ctx.userFriendlyValue) + ".",
        1
        /* TEXT */
      ),
      _cache[3] || (_cache[3] = _createElementVNode(
        "br",
        null,
        null,
        -1
        /* CACHED */
      )),
      _createTextVNode(
        " V\xE4rde i timmar: " + _toDisplayString(_ctx.timeInHours) + ".",
        1
        /* TEXT */
      ),
      _cache[4] || (_cache[4] = _createElementVNode(
        "br",
        null,
        null,
        -1
        /* CACHED */
      )),
      _createTextVNode(
        " V\xE4rde i objektnotation: " + _toDisplayString(_ctx.timeAsObject) + ". ",
        1
        /* TEXT */
      )
    ])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-1275e4"
});
export {
  render
};
