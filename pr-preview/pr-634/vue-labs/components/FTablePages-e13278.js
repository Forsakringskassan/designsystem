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

// virtual-entry:virtual:src/components/FTable/examples/FTablePages.vue:FTablePages-e13278.js
import { defineComponent as _defineComponent7 } from "vue";
import { ref as ref4 } from "vue";

// dist/esm/index.esm.js
import { isEmpty, stripWhitespace, isSet, TranslationService, ValidationService, assertRef, assertSet, ElementIdService } from "@fkui/logic";
import { defineComponent, provide, computed, createElementBlock, openBlock, createCommentVNode, createTextVNode, renderSlot, Fragment, createElementVNode, normalizeClass, createVNode, unref, useTemplateRef, toDisplayString, createBlock, nextTick, inject, ref, onMounted, withModifiers, withDirectives, vModelText, watchEffect, vShow, withCtx, renderList, mergeModels, useModel, useSlots, mergeProps, resolveDynamicComponent } from "vue";
import { TranslationMixin, FTextField, useTextFieldSetup, getInternalKey, FIcon, IComboboxDropdown, FButton, IFlex, IFlexItem, setInternalKeys, FSortFilterDatasetInjected } from "@fkui/vue";
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
    version: "3.45.1",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xA9 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.45.1/LICENSE",
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
var hoursMinutesValidator = {
  name: "hoursMinutes",
  validation(value, _element, config) {
    return isEmpty(value) || isSet(HoursMinutesValidatorUtils.getParserFromConfig(config)(value));
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
var _sfc_main$a = defineComponent({
  name: "XTimeTextField",
  extends: FTextField,
  mixins: [TranslationMixin],
  props: {
    formatter: {
      type: Function,
      required: false,
      default: formatNumberToTime
    },
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
      throw new Error(`Could not find input element in XTimeTextField with id ${this.$el.id}`);
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
var navKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"];
var prevCellIndex = void 0;
function rowKey(row) {
  return String(row[internalKey]);
}
function walk(array, visit, childKey, level = 1) {
  for (const item of array) {
    const visitChildren = visit(item, level);
    if (visitChildren && childKey && item[childKey]) {
      walk(item[childKey], visit, childKey, level + 1);
    }
  }
}
function getRowIndexes(rows, expandableAttribute) {
  const array = [];
  walk(rows, (row) => {
    array.push(String(row[internalKey]));
    return true;
  }, expandableAttribute);
  return array;
}
function getCellTarget(tableElement, rowIndex, cellIndex) {
  return tableElement.rows[rowIndex].cells[cellIndex];
}
function isTd(element) {
  return element?.cellIndex !== void 0;
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
function getMetaRows(keyedRows, expandedKeys, expandableAttribute) {
  const rowIndexes = getRowIndexes(keyedRows);
  const array = [];
  walk(keyedRows, (row, level) => {
    const isExpandable = Boolean(expandableAttribute && row[expandableAttribute]);
    const isExpanded = isExpandable && expandedKeys.includes(rowKey(row));
    array.push({
      key: rowKey(row),
      row,
      rowIndex: rowIndexes.indexOf(rowKey(row)) + 1,
      level: expandableAttribute ? level : void 0,
      isExpandable,
      isExpanded
    });
    return isExpanded;
  }, expandableAttribute);
  return array;
}
function getTd(element) {
  if (isTd(element)) {
    return element;
  } else {
    const closest = element.closest("td");
    if (!closest) {
      throw new Error("expected td parent");
    }
    return closest;
  }
}
function setDefaultCellTarget(table) {
  const target = getCellTarget(table, 1, 0);
  dispatchActivateCellEvent(target, {
    focus: false
  });
  return target;
}
function maybeNavigateToCell(e) {
  let newCellTarget = e.target;
  const td = getTd(e.target);
  const tr = getTr(td);
  const table = getTable(tr);
  const fromIndex = {
    row: tr.rowIndex,
    cell: td.cellIndex
  };
  const lastIndex = {
    row: getLastRowIndex(table),
    cell: getLastCellIndex(table)
  };
  const navigateTo = navigate(e, table, fromIndex, lastIndex);
  if (navigateTo) {
    newCellTarget = getCellTarget(table, navigateTo.row, navigateTo.cell);
    dispatchActivateCellEvent(newCellTarget, {
      focus: true
    });
  }
}
function dispatchActivateCellEvent(element, detail) {
  element.dispatchEvent(new CustomEvent("table-activate-cell", {
    detail
  }));
}
function stopEdit(element, reason) {
  const td = getTd(element);
  const tr = getTr(td);
  const table = getTable(tr);
  const rowIndex = tr.rowIndex;
  const cellIndex = td.cellIndex;
  const lastRowIndex = getLastRowIndex(table);
  const lastCellIndex = getLastCellIndex(table);
  let newCellTarget = td;
  switch (reason) {
    case "enter": {
      if (rowIndex !== lastRowIndex) {
        newCellTarget = getCellTarget(table, rowIndex + 1, cellIndex);
        dispatchActivateCellEvent(newCellTarget, {
          focus: true
        });
      } else {
        dispatchActivateCellEvent(newCellTarget, {
          focus: true
        });
      }
      break;
    }
    case "escape": {
      dispatchActivateCellEvent(newCellTarget, {
        focus: true
      });
      break;
    }
    case "tab": {
      if (cellIndex === lastCellIndex && rowIndex === lastRowIndex) {
        dispatchActivateCellEvent(newCellTarget, {
          focus: true
        });
      } else if (cellIndex === lastCellIndex) {
        newCellTarget = getCellTarget(table, rowIndex + 1, 0);
        dispatchActivateCellEvent(newCellTarget, {
          focus: true
        });
      } else {
        newCellTarget = getCellTarget(table, rowIndex, cellIndex + 1);
        dispatchActivateCellEvent(newCellTarget, {
          focus: true
        });
      }
      break;
    }
    case "shift-tab": {
      if (cellIndex === 0 && rowIndex === 1) {
        dispatchActivateCellEvent(newCellTarget, {
          focus: true
        });
      } else if (cellIndex === 0) {
        newCellTarget = getCellTarget(table, rowIndex - 1, 0);
        dispatchActivateCellEvent(newCellTarget, {
          focus: true
        });
      } else {
        newCellTarget = getCellTarget(table, rowIndex, cellIndex - 1);
        dispatchActivateCellEvent(newCellTarget, {
          focus: true
        });
      }
      break;
    }
    case "blur": {
      console.log("stopEdit", "blur");
      break;
    }
    default: {
      throw new Error(`invalid stop edit reason: ${reason}`);
    }
  }
  return newCellTarget;
}
var _hoisted_1$8 = {
  key: 0,
  class: "table-ng__row"
};
var _hoisted_2$4 = {
  key: 0,
  tabindex: "-1",
  class: "table-ng__column"
};
var _hoisted_3$2 = ["aria-level"];
var _hoisted_4$1 = {
  key: 0,
  tabindex: "-1"
};
var _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ITableRow",
  props: {
    renderHeader: {
      type: Boolean,
      default: false
    },
    rowKey: {
      default: ""
    },
    ariaLevel: {
      default: () => void 0
    },
    isTreegrid: {
      type: Boolean,
      default: false
    },
    isExpandable: {
      type: Boolean,
      default: false
    },
    isExpanded: {
      type: Boolean,
      default: false
    }
  },
  emits: ["toggle"],
  setup(__props, {
    emit: __emit
  }) {
    const emit = __emit;
    provide("renderHeader", __props.renderHeader);
    const toggleIcon = computed(() => __props.isExpanded ? "arrow-down" : "arrow-right");
    return (_ctx, _cache) => {
      return _ctx.renderHeader ? (openBlock(), createElementBlock("tr", _hoisted_1$8, [_ctx.isTreegrid ? (openBlock(), createElementBlock("th", _hoisted_2$4)) : createCommentVNode("", true), _cache[1] || (_cache[1] = createTextVNode()), renderSlot(_ctx.$slots, "default")])) : (openBlock(), createElementBlock("tr", {
        key: 1,
        class: "table-ng__row",
        "aria-level": _ctx.ariaLevel
      }, [_ctx.isTreegrid ? (openBlock(), createElementBlock(Fragment, {
        key: 0
      }, [_ctx.isExpandable ? (openBlock(), createElementBlock("td", _hoisted_4$1, [createElementVNode("button", {
        "aria-label": "toggle",
        type: "button",
        class: normalizeClass(["expander", `level-${_ctx.ariaLevel}`]),
        onClick: _cache[0] || (_cache[0] = ($event) => emit("toggle", _ctx.rowKey))
      }, [createVNode(unref(FIcon), {
        class: "button__icon",
        name: toggleIcon.value
      }, null, 8, ["name"])], 2)])) : (openBlock(), createElementBlock("td", {
        key: 1,
        class: normalizeClass(`level-${_ctx.ariaLevel}`)
      }, null, 2))], 64)) : createCommentVNode("", true), _cache[2] || (_cache[2] = createTextVNode()), renderSlot(_ctx.$slots, "default")], 8, _hoisted_3$2));
    };
  }
});
var _hoisted_1$7 = ["checked", "aria-label"];
var _hoisted_2$3 = ["checked", "aria-label"];
var _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ITableCheckbox",
  props: {
    column: {},
    row: {}
  },
  setup(__props) {
    const targetElement = useTemplateRef("target");
    function onActivateCell(e) {
      assertRef(targetElement);
      targetElement.value.tabIndex = 0;
      if (e.detail.focus) {
        targetElement.value.focus();
      }
    }
    function onChange(e) {
      const checked = e.target.checked;
      __props.column.update(__props.row, checked, !checked);
    }
    return (_ctx, _cache) => {
      return _ctx.column.editable(_ctx.row) ? (openBlock(), createElementBlock("td", {
        key: 0,
        class: "table-ng__cell table-ng__cell--checkbox",
        onTableActivateCell: onActivateCell
      }, [createElementVNode("input", {
        ref: "target",
        checked: _ctx.column.value(_ctx.row),
        type: "checkbox",
        "aria-label": _ctx.column.header,
        tabindex: "-1",
        onChange
      }, null, 40, _hoisted_1$7)], 32)) : (openBlock(), createElementBlock("td", {
        key: 1,
        ref: "target",
        tabindex: "-1",
        class: "table-ng__cell table-ng__cell--checkbox",
        onTableActivateCell: onActivateCell
      }, [createElementVNode("input", {
        checked: _ctx.column.value(_ctx.row),
        type: "checkbox",
        "aria-label": _ctx.column.header,
        disabled: ""
      }, null, 8, _hoisted_2$3)], 544));
    };
  }
});
var _hoisted_1$6 = ["checked", "aria-label"];
var _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ITableRadio",
  props: {
    column: {},
    row: {}
  },
  setup(__props) {
    const inputElement = useTemplateRef("input");
    function onActivateCell(e) {
      assertRef(inputElement);
      inputElement.value.tabIndex = 0;
      if (e.detail.focus) {
        inputElement.value.focus();
      }
    }
    function onChange(_e) {
      assertRef(inputElement);
      __props.column.update(__props.row, inputElement.value.checked, !inputElement.value.checked);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("td", {
        class: "table-ng__cell table-ng__cell--radio",
        onTableActivateCell: onActivateCell
      }, [createElementVNode("input", {
        ref: "input",
        type: "radio",
        checked: _ctx.column.value(_ctx.row),
        "aria-label": _ctx.column.header,
        tabindex: "-1",
        onChange
      }, null, 40, _hoisted_1$6)], 32);
    };
  }
});
var _hoisted_1$5 = ["href"];
var _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ITableAnchor",
  props: {
    column: {},
    row: {}
  },
  setup(__props) {
    const targetElement = useTemplateRef("target");
    function onActivateCell(e) {
      assertRef(targetElement);
      targetElement.value.tabIndex = 0;
      if (e.detail.focus) {
        targetElement.value.focus();
      }
    }
    const renderAnchor = computed(() => {
      return __props.column.enabled(__props.row) && __props.column.value(__props.row) !== null;
    });
    return (_ctx, _cache) => {
      return renderAnchor.value ? (openBlock(), createElementBlock("td", {
        key: 0,
        class: "table-ng__cell table-ng__cell--anchor",
        onTableActivateCell: onActivateCell
      }, [createElementVNode("a", {
        ref: "target",
        class: "anchor anchor--block",
        target: "_blank",
        href: _ctx.column.href,
        tabindex: "-1"
      }, toDisplayString(_ctx.column.value(_ctx.row)), 9, _hoisted_1$5)], 32)) : (openBlock(), createElementBlock("td", {
        key: 1,
        ref: "target",
        tabindex: "-1",
        class: "table-ng__cell",
        onTableActivateCell: onActivateCell
      }, null, 544));
    };
  }
});
var _hoisted_1$4 = {
  class: "sr-only"
};
var _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ITableButton",
  props: {
    column: {},
    row: {}
  },
  setup(__props) {
    const buttonElement = useTemplateRef("button");
    const tdElement = useTemplateRef("td");
    async function onActivateCell(e) {
      var _buttonElement$value;
      await nextTick();
      const element = (_buttonElement$value = buttonElement.value) !== null && _buttonElement$value !== void 0 ? _buttonElement$value : tdElement.value;
      assertSet(element);
      element.tabIndex = 0;
      if (e.detail.focus) {
        element.focus();
      }
    }
    function onClickButton() {
      if (__props.column.onClick) {
        __props.column.onClick(__props.row);
      }
    }
    const renderButton = computed(() => {
      return __props.column.enabled(__props.row) && __props.column.value(__props.row) !== null;
    });
    return (_ctx, _cache) => {
      return renderButton.value ? (openBlock(), createElementBlock("td", {
        key: 0,
        class: "table-ng__cell table-ng__cell--button",
        onTableActivateCell: onActivateCell
      }, [createElementVNode("button", {
        ref: "button",
        class: "icon-button",
        type: "button",
        tabindex: "-1",
        onClick: onClickButton
      }, [_ctx.column.icon ? (openBlock(), createBlock(unref(FIcon), {
        key: 0,
        name: _ctx.column.icon
      }, null, 8, ["name"])) : createCommentVNode("", true), _cache[0] || (_cache[0] = createTextVNode()), createElementVNode("span", _hoisted_1$4, toDisplayString(_ctx.column.value(_ctx.row)), 1)], 512)], 32)) : (openBlock(), createElementBlock("td", {
        key: 1,
        ref: "td",
        tabindex: "-1",
        class: "table-ng__cell",
        onTableActivateCell: onActivateCell
      }, null, 544));
    };
  }
});
var stopEditKey = Symbol();
function useStartStopEdit() {
  const stopEdit2 = inject(stopEditKey, () => Promise.resolve());
  return {
    stopEdit: stopEdit2
  };
}
function isAlphanumeric(e) {
  return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
}
var _hoisted_1$3 = {
  class: "table-ng__editable"
};
var _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ITableText",
  props: {
    row: {},
    column: {}
  },
  setup(__props) {
    const model = ref("");
    const validity = ref({
      isValid: true,
      validationMessage: "",
      validityMode: "INITIAL"
    });
    const hasError = computed(() => validity.value.validityMode === "ERROR");
    const wrapperClasses = computed(() => {
      return {
        "table-ng__cell": true,
        "table-ng__cell--text": true,
        "table-ng__cell--valid": !hasError.value,
        "table-ng__cell--error": hasError.value
      };
    });
    const inputClasses = computed(() => {
      return {
        foobar: true,
        "table-ng__textedit": true
      };
    });
    const tdElement = useTemplateRef("td");
    const viewElement = useTemplateRef("view");
    const inputElement = useTemplateRef("input");
    const {
      stopEdit: stopEdit2
    } = useStartStopEdit();
    onMounted(() => {
      if (inputElement.value) {
        ValidationService.addValidatorsToElement(inputElement.value, __props.column.validation);
      }
    });
    function onActivateCell(e) {
      assertRef(tdElement);
      tdElement.value.tabIndex = 0;
      if (e.detail.focus) {
        tdElement.value.focus();
      }
    }
    function onStartEdit(modelValue) {
      assertRef(tdElement);
      assertRef(inputElement);
      const {
        width
      } = tdElement.value.getBoundingClientRect();
      model.value = modelValue;
      tdElement.value.style.setProperty("width", `${width}px`);
      inputElement.value.focus();
    }
    function onStopEdit(options) {
      const {
        reason
      } = options;
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
      return _ctx.column.editable(_ctx.row) ? (openBlock(), createElementBlock("td", {
        key: 0,
        ref: "td",
        tabindex: "-1",
        class: normalizeClass(wrapperClasses.value),
        onClick: withModifiers(onClickCell, ["stop"]),
        onKeydown,
        onTableActivateCell: onActivateCell
      }, [createElementVNode("div", _hoisted_1$3, [createElementVNode("span", {
        ref: "view",
        class: "table-ng__editable__text"
      }, toDisplayString(_ctx.column.value(_ctx.row)), 513), _cache[1] || (_cache[1] = createTextVNode()), withDirectives(createElementVNode("input", {
        ref: "input",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
        class: normalizeClass(inputClasses.value),
        type: "text",
        maxlength: "40",
        tabindex: "-1",
        onBlur,
        onValidity
      }, null, 34), [[vModelText, model.value]]), _cache[2] || (_cache[2] = createTextVNode()), hasError.value ? (openBlock(), createBlock(unref(FIcon), {
        key: 0,
        name: "error",
        class: "table-ng__editable__icon"
      })) : (openBlock(), createBlock(unref(FIcon), {
        key: 1,
        name: "pen",
        class: "table-ng__editable__icon"
      }))])], 34)) : (openBlock(), createElementBlock("td", {
        key: 1,
        ref: "td",
        tabindex: "-1",
        class: "table-ng__cell table-ng__cell--static",
        onTableActivateCell: onActivateCell
      }, toDisplayString(_ctx.column.value(_ctx.row)), 545));
    };
  }
});
var _hoisted_1$2 = {
  class: "table-ng__editable"
};
var _hoisted_2$2 = {
  class: "table-ng__editable__text"
};
var _hoisted_3$1 = ["aria-controls"];
var _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
    const tdRef = useTemplateRef("td");
    function onActivateCell(e) {
      assertRef(tdRef);
      tdRef.value.tabIndex = 0;
      if (e.detail.focus) {
        tdRef.value.focus();
      }
    }
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
      return _ctx.column.editable(_ctx.row) ? (openBlock(), createElementBlock("td", {
        key: 0,
        ref: "td",
        class: "table-ng__cell table-ng__cell--select",
        tabindex: "-1",
        onKeydown: onCellKeyDown,
        onClick: withModifiers(onCellClick, ["stop"]),
        onTableActivateCell: onActivateCell
      }, [withDirectives(createElementVNode("div", _hoisted_1$2, [createElementVNode("span", _hoisted_2$2, toDisplayString(viewValue.value), 1), _cache[2] || (_cache[2] = createTextVNode()), createVNode(unref(FIcon), {
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
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["stop"])),
        onDblclick: _cache[1] || (_cache[1] = withModifiers(() => {
        }, ["prevent"])),
        onKeydown: withModifiers(onEditKeyDown, ["stop"]),
        onFocusout: onEditBlur
      }, toDisplayString(viewValue.value), 41, _hoisted_3$1), [[vShow, editing.value]]), _cache[4] || (_cache[4] = createTextVNode()), withDirectives(createVNode(unref(IComboboxDropdown), {
        id: "dropdownId",
        "is-open": dropdownIsOpen.value,
        options: _ctx.column.options,
        "active-option": activeOption.value,
        "active-option-id": unref(activeOptionId),
        "input-node": editRef.value,
        onSelect: onDropdownSelect,
        onClose: onDropdownClose
      }, null, 8, ["is-open", "options", "active-option", "active-option-id", "input-node"]), [[vShow, editing.value]])], 544)) : (openBlock(), createElementBlock("td", {
        key: 1,
        ref: "td",
        tabindex: "-1",
        class: "table-ng__cell table-ng__cell--static",
        onTableActivateCell: onActivateCell
      }, toDisplayString(_ctx.column.value(_ctx.row)), 545));
    };
  }
});
function getValueFn(fn, key, coerce, defaultValue) {
  if (fn) {
    return fn;
  }
  if (key) {
    return (row) => {
      return coerce(row[key]);
    };
  }
  return () => defaultValue;
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
function normalizeTableColumn(column) {
  var _column$key, _column$key2, _column$validation, _column$key3, _column$key4, _column$icon, _column$key5, _column$key6, _column$key7;
  if ("render" in column) {
    return {
      type: void 0,
      header: column.header,
      render: column.render,
      sortable: null
    };
  }
  switch (column.type) {
    case "checkbox":
      return {
        type: "checkbox",
        header: column.header,
        value: getValueFn(column.value, column.key, Boolean, false),
        update: getUpdateFn(column.update, column.key),
        editable: typeof column.editable === "function" ? column.editable : () => {
          var _column$editable;
          return Boolean((_column$editable = column.editable) !== null && _column$editable !== void 0 ? _column$editable : false);
        },
        sortable: (_column$key = column.key) !== null && _column$key !== void 0 ? _column$key : null,
        component: _sfc_main$8
      };
    case "radio":
      return {
        type: "radio",
        header: column.header,
        value: getValueFn(column.value, column.key, Boolean, false),
        update: getUpdateFn(column.update, column.key),
        sortable: (_column$key2 = column.key) !== null && _column$key2 !== void 0 ? _column$key2 : null,
        component: _sfc_main$7
      };
    case "text":
      return {
        type: "text",
        header: column.header,
        value: getValueFn(column.value, column.key, String, ""),
        update: getUpdateFn(column.update, column.key),
        editable: typeof column.editable === "function" ? column.editable : () => {
          var _column$editable2;
          return Boolean((_column$editable2 = column.editable) !== null && _column$editable2 !== void 0 ? _column$editable2 : false);
        },
        validation: (_column$validation = column.validation) !== null && _column$validation !== void 0 ? _column$validation : {},
        sortable: (_column$key3 = column.key) !== null && _column$key3 !== void 0 ? _column$key3 : null,
        component: _sfc_main$4
      };
    case "anchor":
      return {
        type: "anchor",
        header: column.header,
        value: column.value,
        href: column.href,
        enabled: typeof column.enabled === "function" ? column.enabled : () => {
          var _column$enabled;
          return Boolean((_column$enabled = column.enabled) !== null && _column$enabled !== void 0 ? _column$enabled : true);
        },
        sortable: (_column$key4 = column.key) !== null && _column$key4 !== void 0 ? _column$key4 : null,
        component: _sfc_main$6
      };
    case "button":
      return {
        type: "button",
        header: column.header,
        value: column.value,
        onClick: column.onClick,
        enabled: typeof column.enabled === "function" ? column.enabled : () => {
          var _column$enabled2;
          return Boolean((_column$enabled2 = column.enabled) !== null && _column$enabled2 !== void 0 ? _column$enabled2 : true);
        },
        icon: (_column$icon = column.icon) !== null && _column$icon !== void 0 ? _column$icon : null,
        sortable: (_column$key5 = column.key) !== null && _column$key5 !== void 0 ? _column$key5 : null,
        component: _sfc_main$5
      };
    case "select":
      return {
        type: "select",
        header: column.header,
        value: getValueFn(column.value, column.key, String, ""),
        update: getUpdateFn(column.update, column.key),
        editable: typeof column.editable === "function" ? column.editable : () => {
          var _column$editable3;
          return Boolean((_column$editable3 = column.editable) !== null && _column$editable3 !== void 0 ? _column$editable3 : false);
        },
        options: column.options,
        sortable: (_column$key6 = column.key) !== null && _column$key6 !== void 0 ? _column$key6 : null,
        component: _sfc_main$3
      };
    case void 0:
      return {
        type: "text",
        header: column.header,
        value: getValueFn(column.value, column.key, String, ""),
        update() {
        },
        editable: () => false,
        sortable: (_column$key7 = column.key) !== null && _column$key7 !== void 0 ? _column$key7 : null,
        validation: {},
        component: _sfc_main$4
      };
  }
}
function normalizeTableColumns(columns) {
  return columns.map((column) => {
    return normalizeTableColumn(column);
  });
}
var _hoisted_1$1 = {
  key: 0,
  class: "pager"
};
var _hoisted_2$1 = {
  key: 1
};
var _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ITablePager",
  props: {
    items: {},
    itemsPerPage: {
      default: 10
    }
  },
  emits: ["itemRange"],
  setup(__props, {
    emit: __emit
  }) {
    const currentPage = ref(1);
    const currentPageItemLength = ref(0);
    const numberOfPages = ref(0);
    const numberOfItems = computed(() => {
      return __props.items.length;
    });
    const emit = __emit;
    function switchToNextPage() {
      currentPage.value++;
      defineCurrentPage();
    }
    function switchToPreviousPage() {
      currentPage.value--;
      defineCurrentPage();
    }
    function switchToSpecificPage(page) {
      currentPage.value = page;
      defineCurrentPage();
    }
    function defineNumberOfPages() {
      numberOfPages.value = Math.ceil(numberOfItems.value / __props.itemsPerPage);
    }
    function defineCurrentPage() {
      const currentPageFirstItemId = __props.itemsPerPage * (currentPage.value - 1) + 1;
      const currentPageLastItemId = Math.min(__props.itemsPerPage * currentPage.value, numberOfItems.value);
      const currentPageItems = __props.items.slice(currentPageFirstItemId - 1, currentPageLastItemId);
      emit("itemRange", currentPageItems);
      currentPageItemLength.value = currentPageItems.length;
    }
    function showPageButton(page) {
      const numberOfAdjacentPagesShown = 2;
      return page === 1 || Math.abs(currentPage.value - page) <= numberOfAdjacentPagesShown || page === numberOfPages.value;
    }
    onMounted(() => {
      defineNumberOfPages();
      defineCurrentPage();
    });
    return (_ctx, _cache) => {
      return numberOfPages.value > 1 ? (openBlock(), createElementBlock("div", _hoisted_1$1, [currentPage.value !== 1 ? (openBlock(), createBlock(unref(FButton), {
        key: 0,
        variant: "tertiary",
        size: "small",
        "icon-left": "chevrons-left",
        onClick: _cache[0] || (_cache[0] = ($event) => switchToPreviousPage())
      }, {
        default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("\n            F\xF6reg\xE5ende\n        ", -1)])]),
        _: 1
      })) : createCommentVNode("", true), _cache[4] || (_cache[4] = createTextVNode()), (openBlock(true), createElementBlock(Fragment, null, renderList(numberOfPages.value, (page) => {
        return openBlock(), createElementBlock(Fragment, {
          key: page
        }, [showPageButton(page) ? (openBlock(), createBlock(unref(FButton), {
          key: 0,
          size: "small",
          variant: "tertiary",
          disabled: page === currentPage.value,
          onClick: ($event) => switchToSpecificPage(page)
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(page), 1)]),
          _: 2
        }, 1032, ["disabled", "onClick"])) : showPageButton(page + 1) ? (openBlock(), createElementBlock("span", _hoisted_2$1, "...")) : createCommentVNode("", true)], 64);
      }), 128)), _cache[5] || (_cache[5] = createTextVNode()), currentPage.value !== numberOfPages.value ? (openBlock(), createBlock(unref(FButton), {
        key: 1,
        variant: "tertiary",
        size: "small",
        "icon-right": "arrow-right",
        onClick: _cache[1] || (_cache[1] = ($event) => switchToNextPage())
      }, {
        default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("\n            N\xE4sta\n        ", -1)])]),
        _: 1
      })) : createCommentVNode("", true)])) : createCommentVNode("", true);
    };
  }
});
var _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
    function onActivateCell(e) {
      assertRef(thElement);
      thElement.value.tabIndex = 0;
      if (e.detail.focus) {
        thElement.value.focus();
      }
    }
    function onClickCell() {
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
        onClick: withModifiers(onClickCell, ["stop"]),
        onTableActivateCell: onActivateCell
      }, [createVNode(unref(IFlex), {
        gap: "1x"
      }, {
        default: withCtx(() => [createVNode(unref(IFlexItem), {
          shrink: ""
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(_ctx.column.header), 1)]),
          _: 1
        }), _cache[0] || (_cache[0] = createTextVNode()), _ctx.sortEnabled ? (openBlock(), createBlock(unref(IFlexItem), {
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
      })], 544);
    };
  }
});
var _hoisted_1 = ["role"];
var _hoisted_2 = {
  class: "table-ng__row"
};
var _hoisted_3 = {
  key: 0,
  scope: "col",
  class: "table-ng__column table-ng__column--checkbox"
};
var _hoisted_4 = {
  key: 1,
  scope: "col"
};
var _hoisted_5 = {
  key: 2,
  scope: "col",
  tabindex: "-1",
  class: "table-ng__column"
};
var _hoisted_6 = {
  key: 0,
  class: "table-ng__row--empty"
};
var _hoisted_7 = ["colspan"];
var _hoisted_8 = ["colspan"];
var _hoisted_9 = {
  key: 0
};
var _sfc_main = /* @__PURE__ */ defineComponent({
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
      type: Boolean,
      default: false
    },
    selectable: {
      default: () => void 0
    },
    paginerated: {
      type: Boolean,
      default: false
    }
  }, {
    "selectedRows": {
      default: []
    },
    "selectedRowsModifiers": {}
  }),
  emits: ["update:selectedRows"],
  setup(__props) {
    const selectedRows = useModel(__props, "selectedRows");
    const tableRef = useTemplateRef("table");
    const selectAllRef = useTemplateRef("selectAll");
    const expandedKeys = ref([]);
    const keyedRows = computed(() => setInternalKeys(__props.rows, __props.keyAttribute, __props.expandableAttribute));
    const metaRows = computed(() => getMetaRows(keyedRows.value, expandedKeys.value, __props.expandableAttribute));
    const isTreegrid = computed(() => Boolean(__props.expandableAttribute));
    const role = computed(() => isTreegrid.value ? "treegrid" : "grid");
    const rowsFromPaginator = ref(metaRows.value);
    const viewRows = computed(() => {
      return __props.paginerated ? rowsFromPaginator.value : metaRows.value;
    });
    const isEmpty2 = computed(() => {
      return viewRows.value.length === 0;
    });
    const columnCount = computed(() => {
      const selectableCol = __props.selectable ? 1 : 0;
      return columns.value.length + selectableCol;
    });
    const multiSelectColumn = {
      type: "checkbox",
      header: "selectable",
      sortable: null,
      component: _sfc_main$8,
      value(row) {
        if (!__props.keyAttribute) {
          return false;
        }
        return selectedRows.value.some((it) => {
          return row[__props.keyAttribute] === it[__props.keyAttribute];
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
      header: "V\xE4lj en rad",
      sortable: null,
      component: _sfc_main$7,
      value(row) {
        if (!__props.keyAttribute) {
          return false;
        }
        return selectedRows.value.some((it) => {
          return row[__props.keyAttribute] === it[__props.keyAttribute];
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
    const columns = computed(() => normalizeTableColumns(__props.columns));
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
      const td = e.target.closest("td");
      if (td) {
        dispatchActivateCellEvent(td, {
          focus: true
        });
      }
    }
    function onTableFocusout(e) {
      assertRef(tableRef);
      const outsideTable = !e.relatedTarget || !tableRef.value.contains(e.relatedTarget);
      if (outsideTable) {
        const td = e.target.closest("td");
        if (td) {
          dispatchActivateCellEvent(td, {
            focus: false
          });
        }
      } else {
        e.target.tabIndex = -1;
      }
    }
    function onItemRangeUpdate(items) {
      rowsFromPaginator.value = items;
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
    onMounted(() => {
      assertRef(tableRef);
      setDefaultCellTarget(tableRef.value);
      registerCallbackOnMount(callbackSortableColumns);
      registerCallbackOnSort(callbackOnSort);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [createElementVNode("table", {
        ref: "table",
        role: role.value,
        class: normalizeClass(tableClasses.value),
        onFocusout: onTableFocusout,
        onClick,
        onKeydown
      }, [createElementVNode("thead", null, [createElementVNode("tr", _hoisted_2, [isMultiSelect.value ? (openBlock(), createElementBlock("th", _hoisted_3, [createElementVNode("input", {
        ref: "selectAll",
        type: "checkbox",
        "aria-label": "select all",
        tabindex: "-1",
        indeterminate: "",
        onChange: onSelectAllChange
      }, null, 544)])) : createCommentVNode("", true), _cache[0] || (_cache[0] = createTextVNode()), isSingleSelect.value ? (openBlock(), createElementBlock("th", _hoisted_4, toDisplayString(singleSelectColumn.header), 1)) : createCommentVNode("", true), _cache[1] || (_cache[1] = createTextVNode()), isTreegrid.value ? (openBlock(), createElementBlock("th", _hoisted_5)) : createCommentVNode("", true), _cache[2] || (_cache[2] = createTextVNode()), (openBlock(true), createElementBlock(Fragment, null, renderList(columns.value, (column) => {
        return openBlock(), createBlock(_sfc_main$1, {
          key: column.header,
          column,
          "sort-enabled": isSortEnabled(column),
          "sort-order": getSortOrder(column),
          scope: "col",
          class: "table-ng__column",
          onToggleSortOrder
        }, null, 8, ["column", "sort-enabled", "sort-order"]);
      }), 128))])]), _cache[6] || (_cache[6] = createTextVNode()), createElementVNode("tbody", null, [isEmpty2.value ? (openBlock(), createElementBlock("tr", _hoisted_6, [createElementVNode("td", {
        colspan: columnCount.value,
        class: "table-ng__cell"
      }, [renderSlot(_ctx.$slots, "empty", {}, () => [_cache[3] || (_cache[3] = createTextVNode(" Tabellen \xE4r tom ", -1))])], 8, _hoisted_7)])) : (openBlock(true), createElementBlock(Fragment, {
        key: 1
      }, renderList(viewRows.value, ({
        key,
        row,
        rowIndex,
        level,
        setsize,
        posinset,
        isExpandable,
        isExpanded
      }) => {
        return openBlock(), createBlock(_sfc_main$9, {
          key,
          "row-key": key,
          "aria-rowindex": rowIndex,
          "aria-level": level,
          "aria-setsize": setsize,
          "aria-posinset": posinset,
          "is-treegrid": isTreegrid.value,
          "is-expandable": isExpandable,
          "is-expanded": isExpanded,
          onToggle: onToggleExpanded
        }, {
          default: withCtx(() => [level > 1 && hasExpandableSlot.value ? (openBlock(), createElementBlock("td", {
            key: 0,
            colspan: columns.value.length
          }, [renderSlot(_ctx.$slots, "expandable", mergeProps({
            ref_for: true
          }, {
            row
          }))], 8, _hoisted_8)) : (openBlock(), createElementBlock(Fragment, {
            key: 1
          }, [isMultiSelect.value ? (openBlock(), createBlock(_sfc_main$8, {
            key: 0,
            row,
            column: multiSelectColumn
          }, null, 8, ["row"])) : createCommentVNode("", true), _cache[4] || (_cache[4] = createTextVNode()), isSingleSelect.value ? (openBlock(), createBlock(_sfc_main$7, {
            key: 1,
            row,
            column: singleSelectColumn
          }, null, 8, ["row"])) : createCommentVNode("", true), _cache[5] || (_cache[5] = createTextVNode()), (openBlock(true), createElementBlock(Fragment, null, renderList(columns.value, (column) => {
            return openBlock(), createElementBlock(Fragment, {
              key: column.header
            }, ["component" in column ? (openBlock(), createBlock(resolveDynamicComponent(column.component), {
              key: 0,
              row,
              column
            }, null, 8, ["row", "column"])) : "render" in column ? (openBlock(), createBlock(resolveDynamicComponent(column.render(row)), {
              key: 1,
              row
            }, null, 8, ["row"])) : createCommentVNode("", true)], 64);
          }), 128))], 64))]),
          _: 2
        }, 1032, ["row-key", "aria-rowindex", "aria-level", "aria-setsize", "aria-posinset", "is-treegrid", "is-expandable", "is-expanded"]);
      }), 128))])], 42, _hoisted_1), _cache[7] || (_cache[7] = createTextVNode()), _ctx.paginerated ? (openBlock(), createElementBlock("div", _hoisted_9, [createVNode(_sfc_main$2, {
        items: metaRows.value,
        onItemRange: onItemRangeUpdate
      }, null, 8, ["items"])])) : createCommentVNode("", true), _cache[8] || (_cache[8] = createTextVNode()), renderSlot(_ctx.$slots, "footer")], 64);
    };
  }
});

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableCheckbox.vue?type=script
import { defineComponent as _defineComponent } from "vue";
import { useTemplateRef as useTemplateRef2 } from "vue";
import { assertRef as assertRef2 } from "@fkui/logic";
var ITableCheckbox_default = /* @__PURE__ */ _defineComponent({
  __name: "ITableCheckbox",
  props: {
    column: { type: Object, required: true },
    row: { type: null, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const targetElement = useTemplateRef2("target");
    function onActivateCell(e) {
      assertRef2(targetElement);
      targetElement.value.tabIndex = 0;
      if (e.detail.focus) {
        targetElement.value.focus();
      }
    }
    function onChange(e) {
      const checked = e.target.checked;
      __props.column.update(__props.row, checked, !checked);
    }
    const __returned__ = { targetElement, onActivateCell, onChange };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableCheckbox.vue?type=template
import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var _hoisted_12 = ["checked", "aria-label"];
var _hoisted_22 = ["checked", "aria-label"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.column.editable($props.row) ? (_openBlock(), _createElementBlock(
    "td",
    {
      key: 0,
      class: "table-ng__cell table-ng__cell--checkbox",
      onTableActivateCell: $setup.onActivateCell
    },
    [
      _createElementVNode("input", {
        ref: "target",
        checked: $props.column.value($props.row),
        type: "checkbox",
        "aria-label": $props.column.header,
        tabindex: "-1",
        onChange: $setup.onChange
      }, null, 40, _hoisted_12)
    ],
    32
    /* NEED_HYDRATION */
  )) : (_openBlock(), _createElementBlock(
    "td",
    {
      key: 1,
      ref: "target",
      tabindex: "-1",
      class: "table-ng__cell table-ng__cell--checkbox",
      onTableActivateCell: $setup.onActivateCell
    },
    [
      _createElementVNode("input", {
        checked: $props.column.value($props.row),
        type: "checkbox",
        "aria-label": $props.column.header,
        disabled: ""
      }, null, 8, _hoisted_22)
    ],
    544
    /* NEED_HYDRATION, NEED_PATCH */
  ));
}

// src/components/FTable/ITableCheckbox.vue
ITableCheckbox_default.render = render;
ITableCheckbox_default.__file = "src/components/FTable/ITableCheckbox.vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableRadio.vue?type=script
import { defineComponent as _defineComponent2 } from "vue";
import { useTemplateRef as useTemplateRef3 } from "vue";
import { assertRef as assertRef3 } from "@fkui/logic";
var ITableRadio_default = /* @__PURE__ */ _defineComponent2({
  __name: "ITableRadio",
  props: {
    column: { type: Object, required: true },
    row: { type: null, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const inputElement = useTemplateRef3("input");
    function onActivateCell(e) {
      assertRef3(inputElement);
      inputElement.value.tabIndex = 0;
      if (e.detail.focus) {
        inputElement.value.focus();
      }
    }
    function onChange(_e) {
      assertRef3(inputElement);
      __props.column.update(__props.row, inputElement.value.checked, !inputElement.value.checked);
    }
    const __returned__ = { inputElement, onActivateCell, onChange };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableRadio.vue?type=template
import { createElementVNode as _createElementVNode2, openBlock as _openBlock2, createElementBlock as _createElementBlock2 } from "vue";
var _hoisted_13 = ["checked", "aria-label"];
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock2(), _createElementBlock2(
    "td",
    {
      class: "table-ng__cell table-ng__cell--radio",
      onTableActivateCell: $setup.onActivateCell
    },
    [
      _createElementVNode2("input", {
        ref: "input",
        type: "radio",
        checked: $props.column.value($props.row),
        "aria-label": $props.column.header,
        tabindex: "-1",
        onChange: $setup.onChange
      }, null, 40, _hoisted_13)
    ],
    32
    /* NEED_HYDRATION */
  );
}

// src/components/FTable/ITableRadio.vue
ITableRadio_default.render = render2;
ITableRadio_default.__file = "src/components/FTable/ITableRadio.vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableAnchor.vue?type=script
import { defineComponent as _defineComponent3 } from "vue";
import { assertRef as assertRef4 } from "@fkui/logic";
import { computed as computed2, useTemplateRef as useTemplateRef4 } from "vue";
var ITableAnchor_default = /* @__PURE__ */ _defineComponent3({
  __name: "ITableAnchor",
  props: {
    column: { type: Object, required: true },
    row: { type: null, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const targetElement = useTemplateRef4("target");
    function onActivateCell(e) {
      assertRef4(targetElement);
      targetElement.value.tabIndex = 0;
      if (e.detail.focus) {
        targetElement.value.focus();
      }
    }
    const renderAnchor = computed2(() => {
      return __props.column.enabled(__props.row) && __props.column.value(__props.row) !== null;
    });
    const __returned__ = { targetElement, onActivateCell, renderAnchor };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableAnchor.vue?type=template
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode3, openBlock as _openBlock3, createElementBlock as _createElementBlock3 } from "vue";
var _hoisted_14 = ["href"];
function render3(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.renderAnchor ? (_openBlock3(), _createElementBlock3(
    "td",
    {
      key: 0,
      class: "table-ng__cell table-ng__cell--anchor",
      onTableActivateCell: $setup.onActivateCell
    },
    [
      _createElementVNode3("a", {
        ref: "target",
        class: "anchor anchor--block",
        target: "_blank",
        href: $props.column.href,
        tabindex: "-1"
      }, _toDisplayString($props.column.value($props.row)), 9, _hoisted_14)
    ],
    32
    /* NEED_HYDRATION */
  )) : (_openBlock3(), _createElementBlock3(
    "td",
    {
      key: 1,
      ref: "target",
      tabindex: "-1",
      class: "table-ng__cell",
      onTableActivateCell: $setup.onActivateCell
    },
    null,
    544
    /* NEED_HYDRATION, NEED_PATCH */
  ));
}

// src/components/FTable/ITableAnchor.vue
ITableAnchor_default.render = render3;
ITableAnchor_default.__file = "src/components/FTable/ITableAnchor.vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableButton.vue?type=script
import { defineComponent as _defineComponent4 } from "vue";
import { computed as computed3, nextTick as nextTick2, useTemplateRef as useTemplateRef5 } from "vue";
import { assertSet as assertSet2 } from "@fkui/logic";
import { FIcon as FIcon2 } from "@fkui/vue";
var ITableButton_default = /* @__PURE__ */ _defineComponent4({
  __name: "ITableButton",
  props: {
    column: { type: Object, required: true },
    row: { type: null, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const buttonElement = useTemplateRef5("button");
    const tdElement = useTemplateRef5("td");
    async function onActivateCell(e) {
      await nextTick2();
      const element = buttonElement.value ?? tdElement.value;
      assertSet2(element);
      element.tabIndex = 0;
      if (e.detail.focus) {
        element.focus();
      }
    }
    function onClickButton() {
      if (__props.column.onClick) {
        __props.column.onClick(__props.row);
      }
    }
    const renderButton = computed3(() => {
      return __props.column.enabled(__props.row) && __props.column.value(__props.row) !== null;
    });
    const __returned__ = { buttonElement, tdElement, onActivateCell, onClickButton, renderButton, get FIcon() {
      return FIcon2;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableButton.vue?type=template
import { openBlock as _openBlock4, createBlock as _createBlock, createCommentVNode as _createCommentVNode3, toDisplayString as _toDisplayString2, createElementVNode as _createElementVNode4, createElementBlock as _createElementBlock4 } from "vue";
var _hoisted_15 = { class: "sr-only" };
function render4(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.renderButton ? (_openBlock4(), _createElementBlock4(
    "td",
    {
      key: 0,
      class: "table-ng__cell table-ng__cell--button",
      onTableActivateCell: $setup.onActivateCell
    },
    [
      _createElementVNode4(
        "button",
        {
          ref: "button",
          class: "icon-button",
          type: "button",
          tabindex: "-1",
          onClick: $setup.onClickButton
        },
        [
          $props.column.icon ? (_openBlock4(), _createBlock($setup["FIcon"], {
            key: 0,
            name: $props.column.icon
          }, null, 8, ["name"])) : _createCommentVNode3("v-if", true),
          _createElementVNode4(
            "span",
            _hoisted_15,
            _toDisplayString2($props.column.value($props.row)),
            1
            /* TEXT */
          )
        ],
        512
        /* NEED_PATCH */
      )
    ],
    32
    /* NEED_HYDRATION */
  )) : (_openBlock4(), _createElementBlock4(
    "td",
    {
      key: 1,
      ref: "td",
      tabindex: "-1",
      class: "table-ng__cell",
      onTableActivateCell: $setup.onActivateCell
    },
    null,
    544
    /* NEED_HYDRATION, NEED_PATCH */
  ));
}

// src/components/FTable/ITableButton.vue
ITableButton_default.render = render4;
ITableButton_default.__file = "src/components/FTable/ITableButton.vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableText.vue?type=script
import { defineComponent as _defineComponent5 } from "vue";
import { computed as computed4, onMounted as onMounted2, ref as ref2, useTemplateRef as useTemplateRef6 } from "vue";
import { assertRef as assertRef5, ValidationService as ValidationService2 } from "@fkui/logic";
import { FIcon as FIcon3 } from "@fkui/vue";

// src/components/FTable/start-stop-edit.ts
import { inject as inject2 } from "vue";
var stopEditKey2 = Symbol();
function useStartStopEdit2() {
  const stopEdit2 = inject2(stopEditKey2, () => Promise.resolve());
  return { stopEdit: stopEdit2 };
}

// src/components/FTable/is-alphanumeric.ts
function isAlphanumeric2(e) {
  return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
}

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableText.vue?type=script
var ITableText_default = /* @__PURE__ */ _defineComponent5({
  __name: "ITableText",
  props: {
    row: { type: null, required: true },
    column: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const model = ref2("");
    const validity = ref2({
      isValid: true,
      validationMessage: "",
      validityMode: "INITIAL"
    });
    const hasError = computed4(() => validity.value.validityMode === "ERROR");
    const wrapperClasses = computed4(() => {
      return {
        "table-ng__cell": true,
        "table-ng__cell--text": true,
        "table-ng__cell--valid": !hasError.value,
        "table-ng__cell--error": hasError.value
      };
    });
    const inputClasses = computed4(() => {
      return {
        foobar: true,
        "table-ng__textedit": true
      };
    });
    const tdElement = useTemplateRef6("td");
    const viewElement = useTemplateRef6("view");
    const inputElement = useTemplateRef6("input");
    const { stopEdit: stopEdit2 } = useStartStopEdit2();
    onMounted2(() => {
      if (inputElement.value) {
        ValidationService2.addValidatorsToElement(inputElement.value, __props.column.validation);
      }
    });
    function onActivateCell(e) {
      assertRef5(tdElement);
      tdElement.value.tabIndex = 0;
      if (e.detail.focus) {
        tdElement.value.focus();
      }
    }
    function onStartEdit(modelValue) {
      assertRef5(tdElement);
      assertRef5(inputElement);
      const { width } = tdElement.value.getBoundingClientRect();
      model.value = modelValue;
      tdElement.value.style.setProperty("width", `${width}px`);
      inputElement.value.focus();
    }
    function onStopEdit(options) {
      const { reason } = options;
      assertRef5(inputElement);
      inputElement.value.tabIndex = -1;
      stopEdit2(inputElement.value, reason);
    }
    function onClickCell(event) {
      assertRef5(tdElement);
      if (tdElement.value.contains(event.target)) {
        const value = __props.column.value(__props.row);
        onStartEdit(value);
      }
    }
    function onViewingKeydown(event) {
      if (isAlphanumeric2(event)) {
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
      assertRef5(viewElement);
      assertRef5(inputElement);
      event.stopPropagation();
      if (event.key === "Enter") {
        event.preventDefault();
        const oldValue = __props.column.value(__props.row);
        const newValue = model.value;
        __props.column.update(__props.row, newValue, oldValue);
        model.value = "";
        onStopEdit({ reason: "enter" });
      }
      if (event.key === "Escape") {
        event.preventDefault();
        model.value = "";
        onStopEdit({ reason: "escape" });
      }
      if (event.key === "Tab") {
        event.preventDefault();
        const oldValue = __props.column.value(__props.row);
        const newValue = model.value;
        __props.column.update(__props.row, newValue, oldValue);
        model.value = "";
        onStopEdit({ reason: event.shiftKey ? "shift-tab" : "tab" });
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
      assertRef5(tdElement);
      tdElement.value.style.removeProperty("width");
      const isDirty = model.value !== "";
      if (isDirty) {
        const oldValue = __props.column.value(__props.row);
        const newValue = model.value;
        __props.column.update(__props.row, newValue, oldValue);
      }
    }
    function onValidity(event) {
      const { isValid, validationMessage, validityMode } = event.detail;
      validity.value = { isValid, validationMessage, validityMode };
    }
    const __returned__ = { model, validity, hasError, wrapperClasses, inputClasses, tdElement, viewElement, inputElement, stopEdit: stopEdit2, onActivateCell, onStartEdit, onStopEdit, onClickCell, onViewingKeydown, onEditingKeydown, onKeydown, onBlur, onValidity, get FIcon() {
      return FIcon3;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableText.vue?type=template
import { toDisplayString as _toDisplayString3, createElementVNode as _createElementVNode5, vModelText as _vModelText, normalizeClass as _normalizeClass, withDirectives as _withDirectives, openBlock as _openBlock5, createBlock as _createBlock2, withModifiers as _withModifiers, createElementBlock as _createElementBlock5 } from "vue";
var _hoisted_16 = { class: "table-ng__editable" };
function render5(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.column.editable($props.row) ? (_openBlock5(), _createElementBlock5(
    "td",
    {
      key: 0,
      ref: "td",
      tabindex: "-1",
      class: _normalizeClass($setup.wrapperClasses),
      onClick: _withModifiers($setup.onClickCell, ["stop"]),
      onKeydown: $setup.onKeydown,
      onTableActivateCell: $setup.onActivateCell
    },
    [
      _createElementVNode5("div", _hoisted_16, [
        _createElementVNode5(
          "span",
          {
            ref: "view",
            class: "table-ng__editable__text"
          },
          _toDisplayString3($props.column.value($props.row)),
          513
          /* TEXT, NEED_PATCH */
        ),
        _withDirectives(_createElementVNode5(
          "input",
          {
            ref: "input",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event),
            class: _normalizeClass($setup.inputClasses),
            type: "text",
            maxlength: "40",
            tabindex: "-1",
            onBlur: $setup.onBlur,
            onValidity: $setup.onValidity
          },
          null,
          34
          /* CLASS, NEED_HYDRATION */
        ), [
          [_vModelText, $setup.model]
        ]),
        $setup.hasError ? (_openBlock5(), _createBlock2($setup["FIcon"], {
          key: 0,
          name: "error",
          class: "table-ng__editable__icon"
        })) : (_openBlock5(), _createBlock2($setup["FIcon"], {
          key: 1,
          name: "pen",
          class: "table-ng__editable__icon"
        }))
      ])
    ],
    34
    /* CLASS, NEED_HYDRATION */
  )) : (_openBlock5(), _createElementBlock5(
    "td",
    {
      key: 1,
      ref: "td",
      tabindex: "-1",
      class: "table-ng__cell table-ng__cell--static",
      onTableActivateCell: $setup.onActivateCell
    },
    _toDisplayString3($props.column.value($props.row)),
    545
    /* TEXT, NEED_HYDRATION, NEED_PATCH */
  ));
}

// src/components/FTable/ITableText.vue
ITableText_default.render = render5;
ITableText_default.__file = "src/components/FTable/ITableText.vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableSelect.vue?type=script
import { defineComponent as _defineComponent6 } from "vue";
import { nextTick as nextTick3, ref as ref3, useTemplateRef as useTemplateRef7, watchEffect as watchEffect2 } from "vue";
import { assertRef as assertRef6, assertSet as assertSet3, ElementIdService as ElementIdService2 } from "@fkui/logic";
import { IComboboxDropdown as IComboboxDropdown2, FIcon as FIcon4 } from "@fkui/vue";
var ITableSelect_default = /* @__PURE__ */ _defineComponent6({
  __name: "ITableSelect",
  props: {
    row: { type: null, required: true },
    column: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const editing = ref3(false);
    const editRef = useTemplateRef7("edit");
    const { stopEdit: stopEdit2 } = useStartStopEdit2();
    const viewValue = ref3(__props.column.value(__props.row));
    const tdRef = useTemplateRef7("td");
    function onActivateCell(e) {
      assertRef6(tdRef);
      tdRef.value.tabIndex = 0;
      if (e.detail.focus) {
        tdRef.value.focus();
      }
    }
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
      assertRef6(editRef);
      e.preventDefault();
      editing.value = true;
      await nextTick3();
      editRef.value.tabIndex = 0;
      editRef.value.focus();
      openSelected("first");
    }
    async function onDropdownSelect(value) {
      assertRef6(editRef);
      assertSet3(stopEdit2);
      close();
      submit();
      viewValue.value = value;
      stopEdit2(editRef.value, "enter");
    }
    function onDropdownClose() {
      assertRef6(editRef);
      assertSet3(stopEdit2);
      stopEdit2(editRef.value, "escape");
    }
    const dropdownId = ElementIdService2.generateElementId();
    const dropdownIsOpen = ref3(false);
    const activeOptionId = ElementIdService2.generateElementId();
    const activeOption = ref3(null);
    watchEffect2(async () => {
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
      await nextTick3();
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
      assertRef6(editRef);
      assertSet3(stopEdit2);
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
        default:
          break;
      }
    }
    async function onEditBlur() {
      if (editing.value) {
        assertSet3(stopEdit2);
        assertRef6(editRef);
        dropdownIsOpen.value = false;
        editing.value = false;
        await nextTick3();
        stopEdit2(editRef.value, "blur");
      }
    }
    async function submit() {
      editing.value = false;
      await nextTick3();
    }
    function cancel() {
      assertSet3(stopEdit2);
      assertRef6(editRef);
      stopEdit2(editRef.value, "escape");
    }
    const __returned__ = { editing, editRef, stopEdit: stopEdit2, viewValue, tdRef, onActivateCell, onCellKeyDown, onCellClick, startEditing, onDropdownSelect, onDropdownClose, dropdownId, dropdownIsOpen, activeOptionId, activeOption, openSelected, close, setNextOption, setPreviousOption, onEditKeyDown, onEditBlur, submit, cancel, get IComboboxDropdown() {
      return IComboboxDropdown2;
    }, get FIcon() {
      return FIcon4;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue-labs/src/components/FTable/ITableSelect.vue?type=template
import { toDisplayString as _toDisplayString4, createElementVNode as _createElementVNode6, createVNode as _createVNode, vShow as _vShow, withDirectives as _withDirectives2, withModifiers as _withModifiers2, openBlock as _openBlock6, createElementBlock as _createElementBlock6 } from "vue";
var _hoisted_17 = { class: "table-ng__editable" };
var _hoisted_23 = { class: "table-ng__editable__text" };
var _hoisted_32 = ["aria-controls"];
function render6(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.column.editable($props.row) ? (_openBlock6(), _createElementBlock6(
    "td",
    {
      key: 0,
      ref: "td",
      class: "table-ng__cell table-ng__cell--select",
      tabindex: "-1",
      onKeydown: $setup.onCellKeyDown,
      onClick: _withModifiers2($setup.onCellClick, ["stop"]),
      onTableActivateCell: $setup.onActivateCell
    },
    [
      _withDirectives2(_createElementVNode6(
        "div",
        _hoisted_17,
        [
          _createElementVNode6(
            "span",
            _hoisted_23,
            _toDisplayString4($setup.viewValue),
            1
            /* TEXT */
          ),
          _createVNode($setup["FIcon"], {
            name: "pen",
            class: "table-ng__editable__icon"
          })
        ],
        512
        /* NEED_PATCH */
      ), [
        [_vShow, !$setup.editing]
      ]),
      _withDirectives2(_createElementVNode6("div", {
        ref: "edit",
        role: "combobox",
        tabindex: "-1",
        "aria-expanded": "",
        "aria-controls": $setup.dropdownId,
        "aria-autocomplete": "list",
        class: "table-ng__editable",
        onClick: _cache[0] || (_cache[0] = _withModifiers2(() => {
        }, ["stop"])),
        onDblclick: _cache[1] || (_cache[1] = _withModifiers2(() => {
        }, ["prevent"])),
        onKeydown: _withModifiers2($setup.onEditKeyDown, ["stop"]),
        onFocusout: $setup.onEditBlur
      }, _toDisplayString4($setup.viewValue), 41, _hoisted_32), [
        [_vShow, $setup.editing]
      ]),
      _withDirectives2(_createVNode($setup["IComboboxDropdown"], {
        id: "dropdownId",
        "is-open": $setup.dropdownIsOpen,
        options: $props.column.options,
        "active-option": $setup.activeOption,
        "active-option-id": $setup.activeOptionId,
        "input-node": $setup.editRef,
        onSelect: $setup.onDropdownSelect,
        onClose: $setup.onDropdownClose
      }, null, 8, ["is-open", "options", "active-option", "active-option-id", "input-node"]), [
        [_vShow, $setup.editing]
      ])
    ],
    544
    /* NEED_HYDRATION, NEED_PATCH */
  )) : (_openBlock6(), _createElementBlock6(
    "td",
    {
      key: 1,
      ref: "td",
      tabindex: "-1",
      class: "table-ng__cell table-ng__cell--static",
      onTableActivateCell: $setup.onActivateCell
    },
    _toDisplayString4($props.column.value($props.row)),
    545
    /* TEXT, NEED_HYDRATION, NEED_PATCH */
  ));
}

// src/components/FTable/ITableSelect.vue
ITableSelect_default.render = render6;
ITableSelect_default.__file = "src/components/FTable/ITableSelect.vue";

// src/components/FTable/table-column.ts
function defineTableColumns(columns) {
  return columns;
}

// virtual-entry:virtual:src/components/FTable/examples/FTablePages.vue:FTablePages-e13278.js
import { openBlock as _openBlock7, createBlock as _createBlock3 } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent7({
  __name: "FTablePages",
  setup(__props, { expose: __expose }) {
    __expose();
    const selectFieldOptions = ["Hund", "Katt", "Hamster", "Papegoja", "Spindel", "Guldfisk"];
    const columns = defineTableColumns([
      {
        type: "text",
        header: "ID",
        key: "id"
      },
      {
        type: "text",
        header: "First name",
        key: "firstName"
      },
      {
        type: "text",
        header: "Last name",
        key: "lastName"
      }
    ]);
    const rows = ref4([
      { id: 1, firstName: "Anabel", lastName: "Kolakovic" },
      { id: 2, firstName: "Karlotte", lastName: "Faich" },
      { id: 3, firstName: "John", lastName: "Rattery" },
      { id: 4, firstName: "Lexie", lastName: "Sudy" },
      { id: 5, firstName: "Alisha", lastName: "Djekic" },
      { id: 6, firstName: "Carmita", lastName: "Skurray" },
      { id: 7, firstName: "Analiese", lastName: "Cairney" },
      { id: 8, firstName: "Adriane", lastName: "McPhate" },
      { id: 9, firstName: "Sigrid", lastName: "Ottewell" },
      { id: 10, firstName: "Dolf", lastName: "Buttrey" },
      { id: 11, firstName: "Giulietta", lastName: "Wiltshire" },
      { id: 12, firstName: "Briant", lastName: "Zuker" },
      { id: 13, firstName: "Christye", lastName: "Leadley" },
      { id: 14, firstName: "Haley", lastName: "Finlay" },
      { id: 15, firstName: "Joly", lastName: "Sidworth" },
      { id: 16, firstName: "Eugenia", lastName: "Altofts" },
      { id: 17, firstName: "Tandie", lastName: "Goldingay" },
      { id: 18, firstName: "Julianna", lastName: "Iacovini" },
      { id: 19, firstName: "Cariotta", lastName: "Tames" },
      { id: 20, firstName: "Hildegarde", lastName: "Smickle" },
      { id: 21, firstName: "Sherlocke", lastName: "Bowller" },
      { id: 22, firstName: "Cletis", lastName: "Brandassi" },
      { id: 23, firstName: "Coreen", lastName: "Dealey" },
      { id: 24, firstName: "Sunshine", lastName: "Scotsbrook" },
      { id: 25, firstName: "Brigitta", lastName: "Foynes" },
      { id: 26, firstName: "Packston", lastName: "Thrustle" },
      { id: 27, firstName: "Sidnee", lastName: "Kerwick" },
      { id: 28, firstName: "Genevra", lastName: "Dank" },
      { id: 29, firstName: "Angelo", lastName: "Byforth" },
      { id: 30, firstName: "Maria", lastName: "Covotti" },
      { id: 31, firstName: "Julieta", lastName: "Ashworth" },
      { id: 32, firstName: "Pauli", lastName: "Anster" },
      { id: 33, firstName: "Gregor", lastName: "Skoof" },
      { id: 34, firstName: "Joete", lastName: "Tupper" },
      { id: 35, firstName: "Rene", lastName: "Dmitrienko" },
      { id: 36, firstName: "Elysha", lastName: "Jervis" },
      { id: 37, firstName: "Maisie", lastName: "Hethron" },
      { id: 38, firstName: "Garrek", lastName: "Fenning" },
      { id: 39, firstName: "Tyler", lastName: "Lidstone" },
      { id: 40, firstName: "Lisha", lastName: "Sillars" },
      { id: 41, firstName: "Tamarah", lastName: "Blase" },
      { id: 42, firstName: "Charin", lastName: "Wheowall" },
      { id: 43, firstName: "Nadya", lastName: "Applin" },
      { id: 44, firstName: "Myron", lastName: "Lamping" },
      { id: 45, firstName: "Betty", lastName: "Mullins" },
      { id: 46, firstName: "Calv", lastName: "Renahan" },
      { id: 47, firstName: "Butch", lastName: "O'Donovan" },
      { id: 48, firstName: "Germaine", lastName: "Anney" },
      { id: 49, firstName: "Corbett", lastName: "Olczyk" },
      { id: 50, firstName: "Lauretta", lastName: "Lere" },
      { id: 51, firstName: "Jacquenetta", lastName: "Vasse" },
      { id: 52, firstName: "Lily", lastName: "Startin" },
      { id: 53, firstName: "Piotr", lastName: "Dodshun" },
      { id: 54, firstName: "Peri", lastName: "Burchfield" },
      { id: 55, firstName: "Codi", lastName: "Sans" },
      { id: 56, firstName: "Dell", lastName: "Guion" },
      { id: 57, firstName: "Junia", lastName: "Cowe" },
      { id: 58, firstName: "Abie", lastName: "Decroix" },
      { id: 59, firstName: "Tomaso", lastName: "Muspratt" },
      { id: 60, firstName: "Parke", lastName: "Jeffry" },
      { id: 61, firstName: "Christy", lastName: "Mulhall" },
      { id: 62, firstName: "Yanaton", lastName: "Derx" },
      { id: 63, firstName: "Jackelyn", lastName: "Newbigging" },
      { id: 64, firstName: "Claire", lastName: "Birtchnell" },
      { id: 65, firstName: "Meaghan", lastName: "Kevane" },
      { id: 66, firstName: "Rozelle", lastName: "Broun" },
      { id: 67, firstName: "Franky", lastName: "Peppard" },
      { id: 68, firstName: "Micheline", lastName: "Swiffin" },
      { id: 69, firstName: "Norby", lastName: "Carbry" },
      { id: 70, firstName: "Derrik", lastName: "Dalla" },
      { id: 71, firstName: "Mikey", lastName: "Knee" },
      { id: 72, firstName: "Carlie", lastName: "Linham" },
      { id: 73, firstName: "Teddi", lastName: "Wilsee" },
      { id: 74, firstName: "Othella", lastName: "Abramzon" },
      { id: 75, firstName: "Merline", lastName: "Patmore" },
      { id: 76, firstName: "Amitie", lastName: "Herety" },
      { id: 77, firstName: "Yuri", lastName: "Siemandl" },
      { id: 78, firstName: "Margo", lastName: "Buston" },
      { id: 79, firstName: "Linoel", lastName: "Smelley" },
      { id: 80, firstName: "Cyril", lastName: "Meek" },
      { id: 81, firstName: "Leupold", lastName: "Nolot" },
      { id: 82, firstName: "Tades", lastName: "Chedgey" },
      { id: 83, firstName: "Winnah", lastName: "Freeborn" },
      { id: 84, firstName: "Jacklyn", lastName: "Kingham" },
      { id: 85, firstName: "Amandy", lastName: "Filipowicz" },
      { id: 86, firstName: "Adela", lastName: "Dukelow" },
      { id: 87, firstName: "Phip", lastName: "Dorling" },
      { id: 88, firstName: "Marris", lastName: "Mathouse" },
      { id: 89, firstName: "Kaylee", lastName: "Squibbs" },
      { id: 90, firstName: "Pierette", lastName: "Mugg" },
      { id: 91, firstName: "Raymund", lastName: "Desorts" },
      { id: 92, firstName: "Cymbre", lastName: "Wilsey" },
      { id: 93, firstName: "Hughie", lastName: "Dolley" },
      { id: 94, firstName: "Flory", lastName: "Shreeve" },
      { id: 95, firstName: "Norrie", lastName: "Antonio" },
      { id: 96, firstName: "Eustace", lastName: "Marunchak" },
      { id: 97, firstName: "Andie", lastName: "Hadfield" },
      { id: 98, firstName: "Doretta", lastName: "Fryett" },
      { id: 99, firstName: "Harlan", lastName: "Longfellow" },
      { id: 100, firstName: "Jeni", lastName: "Gummie" },
      { id: 101, firstName: "Orsa", lastName: "Veronique" },
      { id: 102, firstName: "Gannon", lastName: "Freed" },
      { id: 103, firstName: "Annis", lastName: "Slafford" },
      { id: 104, firstName: "Almire", lastName: "Sanbrook" },
      { id: 105, firstName: "Reagen", lastName: "Drejer" },
      { id: 106, firstName: "Alessandra", lastName: "Camplejohn" },
      { id: 107, firstName: "Orbadiah", lastName: "Fri" },
      { id: 108, firstName: "Ethelbert", lastName: "Pibsworth" },
      { id: 109, firstName: "Nancey", lastName: "Blayd" },
      { id: 110, firstName: "Rahel", lastName: "Beazer" },
      { id: 111, firstName: "Sasha", lastName: "Hellier" },
      { id: 112, firstName: "Johan", lastName: "Dugget" },
      { id: 113, firstName: "Lief", lastName: "Krishtopaittis" },
      { id: 114, firstName: "Nanice", lastName: "Viall" },
      { id: 115, firstName: "Kippie", lastName: "Lobe" },
      { id: 116, firstName: "Hali", lastName: "Hopewell" },
      { id: 117, firstName: "Morley", lastName: "Borton" },
      { id: 118, firstName: "Lorne", lastName: "Salmen" },
      { id: 119, firstName: "Gabrielle", lastName: "Worsalls" },
      { id: 120, firstName: "Gerek", lastName: "Purchon" },
      { id: 121, firstName: "Tamera", lastName: "Benedidick" },
      { id: 122, firstName: "Konrad", lastName: "Kenworthy" },
      { id: 123, firstName: "Leora", lastName: "Housin" },
      { id: 124, firstName: "Bird", lastName: "Nenci" },
      { id: 125, firstName: "Tomkin", lastName: "Weed" },
      { id: 126, firstName: "Caprice", lastName: "Atkirk" },
      { id: 127, firstName: "Melany", lastName: "Rasper" },
      { id: 128, firstName: "Kiersten", lastName: "Vouls" },
      { id: 129, firstName: "Leora", lastName: "Knowller" },
      { id: 130, firstName: "Truman", lastName: "Stapford" },
      { id: 131, firstName: "Connie", lastName: "Trude" },
      { id: 132, firstName: "Ilyse", lastName: "Kienl" },
      { id: 133, firstName: "Claudianus", lastName: "Margerrison" },
      { id: 134, firstName: "Didi", lastName: "Houseley" },
      { id: 135, firstName: "Lizbeth", lastName: "Popham" },
      { id: 136, firstName: "Sayers", lastName: "Fleetwood" },
      { id: 137, firstName: "Anton", lastName: "Lippi" },
      { id: 138, firstName: "Crissie", lastName: "Ricardo" },
      { id: 139, firstName: "Rossy", lastName: "Skeermer" },
      { id: 140, firstName: "Meghan", lastName: "Giorgione" },
      { id: 141, firstName: "Morten", lastName: "Godilington" },
      { id: 142, firstName: "Leone", lastName: "Underhill" },
      { id: 143, firstName: "Aileen", lastName: "Lochran" },
      { id: 144, firstName: "Adele", lastName: "Brymham" },
      { id: 145, firstName: "Malina", lastName: "Catcherside" },
      { id: 146, firstName: "Reba", lastName: "Folomkin" },
      { id: 147, firstName: "Dominik", lastName: "Roseblade" },
      { id: 148, firstName: "Rheba", lastName: "O'Neary" },
      { id: 149, firstName: "Gilberte", lastName: "Wing" },
      { id: 150, firstName: "Natassia", lastName: "Caddie" },
      { id: 151, firstName: "Ira", lastName: "Ownsworth" },
      { id: 152, firstName: "Ede", lastName: "Bresland" },
      { id: 153, firstName: "Jervis", lastName: "Baudi" },
      { id: 154, firstName: "Fletch", lastName: "McRuvie" },
      { id: 155, firstName: "Marne", lastName: "Lorraway" },
      { id: 156, firstName: "Calla", lastName: "Maxwaile" },
      { id: 157, firstName: "Blythe", lastName: "Fonte" },
      { id: 158, firstName: "Melli", lastName: "Spuner" },
      { id: 159, firstName: "Kirstin", lastName: "Lippett" },
      { id: 160, firstName: "Rolando", lastName: "Fibbitts" },
      { id: 161, firstName: "Archie", lastName: "Rickerd" },
      { id: 162, firstName: "Loralie", lastName: "Brimacombe" },
      { id: 163, firstName: "Lukas", lastName: "Drissell" },
      { id: 164, firstName: "Karel", lastName: "Bearne" },
      { id: 165, firstName: "Naoma", lastName: "Colebrook" },
      { id: 166, firstName: "Augy", lastName: "Cruse" },
      { id: 167, firstName: "Adoree", lastName: "De Biasi" },
      { id: 168, firstName: "Sax", lastName: "Pochin" },
      { id: 169, firstName: "Fern", lastName: "Blakemore" },
      { id: 170, firstName: "Symon", lastName: "Haliday" },
      { id: 171, firstName: "Merna", lastName: "Brenneke" },
      { id: 172, firstName: "Quinn", lastName: "Lyokhin" },
      { id: 173, firstName: "Douglass", lastName: "Leyshon" },
      { id: 174, firstName: "Ortensia", lastName: "Percifer" },
      { id: 175, firstName: "Maura", lastName: "Newbatt" },
      { id: 176, firstName: "Eugenia", lastName: "Tobin" },
      { id: 177, firstName: "Albertina", lastName: "Ivy" },
      { id: 178, firstName: "Gerick", lastName: "Tiler" },
      { id: 179, firstName: "Lauritz", lastName: "Ingyon" },
      { id: 180, firstName: "Mirelle", lastName: "Rudloff" },
      { id: 181, firstName: "Brok", lastName: "Walicki" },
      { id: 182, firstName: "Valina", lastName: "Rubinowitsch" },
      { id: 183, firstName: "Milena", lastName: "Kinleyside" },
      { id: 184, firstName: "Gerri", lastName: "Remnant" },
      { id: 185, firstName: "Katha", lastName: "Urwen" },
      { id: 186, firstName: "Abel", lastName: "Cordon" },
      { id: 187, firstName: "Antin", lastName: "Hillaby" },
      { id: 188, firstName: "Betta", lastName: "Briars" },
      { id: 189, firstName: "Riccardo", lastName: "Skoggings" },
      { id: 190, firstName: "Mohandas", lastName: "Chern" },
      { id: 191, firstName: "Allsun", lastName: "Caraher" },
      { id: 192, firstName: "Chicky", lastName: "Pardoe" },
      { id: 193, firstName: "Sarina", lastName: "Lomansey" },
      { id: 194, firstName: "Antonio", lastName: "Starten" },
      { id: 195, firstName: "Odille", lastName: "Minney" },
      { id: 196, firstName: "Cortie", lastName: "Karus" },
      { id: 197, firstName: "Dodi", lastName: "Mueller" },
      { id: 198, firstName: "Noll", lastName: "Radoux" },
      { id: 199, firstName: "Lurline", lastName: "Lugsdin" },
      { id: 200, firstName: "Phaidra", lastName: "Selwyn" },
      { id: 201, firstName: "Horacio", lastName: "Biasioli" },
      { id: 202, firstName: "Christie", lastName: "Cluney" },
      { id: 203, firstName: "Analiese", lastName: "Fulmen" },
      { id: 204, firstName: "Alexio", lastName: "Adamsky" },
      { id: 205, firstName: "Carmina", lastName: "Scales" },
      { id: 206, firstName: "Sharia", lastName: "Veazey" },
      { id: 207, firstName: "Pavlov", lastName: "Scriviner" },
      { id: 208, firstName: "Pammy", lastName: "Cullity" },
      { id: 209, firstName: "Kory", lastName: "D'eathe" },
      { id: 210, firstName: "Flin", lastName: "Lowry" },
      { id: 211, firstName: "Brad", lastName: "Wipfler" },
      { id: 212, firstName: "Tamma", lastName: "Marnane" },
      { id: 213, firstName: "Byram", lastName: "Arzu" },
      { id: 214, firstName: "Jennee", lastName: "Hounsham" },
      { id: 215, firstName: "Blondie", lastName: "Sidebottom" },
      { id: 216, firstName: "Hewet", lastName: "Balston" },
      { id: 217, firstName: "Jyoti", lastName: "Clarridge" },
      { id: 218, firstName: "Lion", lastName: "Meeke" },
      { id: 219, firstName: "Penrod", lastName: "Rallin" },
      { id: 220, firstName: "Theodore", lastName: "Elce" },
      { id: 221, firstName: "Jaime", lastName: "Bartosch" },
      { id: 222, firstName: "See", lastName: "Tamburi" },
      { id: 223, firstName: "Hurlee", lastName: "Fishpond" },
      { id: 224, firstName: "Constance", lastName: "Refford" },
      { id: 225, firstName: "Earl", lastName: "Redwall" },
      { id: 226, firstName: "Luelle", lastName: "Sidsaff" },
      { id: 227, firstName: "Roseanne", lastName: "Francey" },
      { id: 228, firstName: "Anna-maria", lastName: "Stanyer" },
      { id: 229, firstName: "Anthea", lastName: "Embling" },
      { id: 230, firstName: "Ashlee", lastName: "Weinham" },
      { id: 231, firstName: "Boone", lastName: "Crittal" },
      { id: 232, firstName: "Linnea", lastName: "Chettle" },
      { id: 233, firstName: "Harlen", lastName: "Redmain" },
      { id: 234, firstName: "Bendite", lastName: "Filde" },
      { id: 235, firstName: "Emmerich", lastName: "Geggus" },
      { id: 236, firstName: "Augustine", lastName: "Moehler" },
      { id: 237, firstName: "Kris", lastName: "Crumley" },
      { id: 238, firstName: "Merrili", lastName: "Blandford" },
      { id: 239, firstName: "Annie", lastName: "Devonshire" },
      { id: 240, firstName: "Cyb", lastName: "Fleeming" },
      { id: 241, firstName: "Pearce", lastName: "Lamplugh" },
      { id: 242, firstName: "Avigdor", lastName: "Dyte" },
      { id: 243, firstName: "Carrie", lastName: "Crufts" },
      { id: 244, firstName: "Alfred", lastName: "Cattle" },
      { id: 245, firstName: "Jan", lastName: "Tigner" },
      { id: 246, firstName: "Katerina", lastName: "Tyer" },
      { id: 247, firstName: "Rosene", lastName: "Phettis" },
      { id: 248, firstName: "Chuck", lastName: "Geharke" },
      { id: 249, firstName: "Calvin", lastName: "Herley" },
      { id: 250, firstName: "Tirrell", lastName: "Lawdham" },
      { id: 251, firstName: "Norrie", lastName: "Stiffkins" },
      { id: 252, firstName: "Ileane", lastName: "Soonhouse" },
      { id: 253, firstName: "Lilias", lastName: "Landman" },
      { id: 254, firstName: "Iona", lastName: "Reekie" },
      { id: 255, firstName: "Sheridan", lastName: "MacCafferky" },
      { id: 256, firstName: "Terrance", lastName: "Strode" },
      { id: 257, firstName: "Timi", lastName: "Bearham" },
      { id: 258, firstName: "Matelda", lastName: "Fitkin" },
      { id: 259, firstName: "Dudley", lastName: "Wybrow" },
      { id: 260, firstName: "Anet", lastName: "Moughton" },
      { id: 261, firstName: "Nariko", lastName: "Barabich" },
      { id: 262, firstName: "Lurette", lastName: "Leyre" },
      { id: 263, firstName: "Bernita", lastName: "Irnis" },
      { id: 264, firstName: "Gustavo", lastName: "Torry" },
      { id: 265, firstName: "Joelle", lastName: "Wreiford" },
      { id: 266, firstName: "Gisele", lastName: "Lampett" },
      { id: 267, firstName: "Arlin", lastName: "Everit" },
      { id: 268, firstName: "Kristofer", lastName: "Mulryan" },
      { id: 269, firstName: "Hall", lastName: "De Hooch" },
      { id: 270, firstName: "Tobye", lastName: "Chantler" },
      { id: 271, firstName: "Aime", lastName: "Sanpere" },
      { id: 272, firstName: "Gweneth", lastName: "Maddra" },
      { id: 273, firstName: "Cello", lastName: "Harken" },
      { id: 274, firstName: "Brynna", lastName: "Fandrich" },
      { id: 275, firstName: "Lisha", lastName: "Vaz" },
      { id: 276, firstName: "Sibelle", lastName: "Barles" },
      { id: 277, firstName: "Beitris", lastName: "Lowell" },
      { id: 278, firstName: "Willdon", lastName: "Le Estut" },
      { id: 279, firstName: "Bartholomeus", lastName: "Cullinane" },
      { id: 280, firstName: "Harmon", lastName: "Dimitrescu" },
      { id: 281, firstName: "Edwin", lastName: "Wadham" },
      { id: 282, firstName: "Donnell", lastName: "Bettinson" },
      { id: 283, firstName: "Odele", lastName: "Kepe" },
      { id: 284, firstName: "Dorris", lastName: "Anstiss" },
      { id: 285, firstName: "Dominik", lastName: "Thompkins" },
      { id: 286, firstName: "Pace", lastName: "Steiner" },
      { id: 287, firstName: "Hildegaard", lastName: "Deval" },
      { id: 288, firstName: "Bertha", lastName: "Sellors" },
      { id: 289, firstName: "Virgie", lastName: "Zeale" },
      { id: 290, firstName: "Ryon", lastName: "Lutton" },
      { id: 291, firstName: "Gabby", lastName: "Trundler" },
      { id: 292, firstName: "Maje", lastName: "Heinicke" },
      { id: 293, firstName: "Emelita", lastName: "Mounsie" },
      { id: 294, firstName: "Genvieve", lastName: "Woodfield" },
      { id: 295, firstName: "Michaela", lastName: "McIlenna" },
      { id: 296, firstName: "Janot", lastName: "Huton" },
      { id: 297, firstName: "Haskell", lastName: "Lankester" },
      { id: 298, firstName: "Archer", lastName: "Maleney" },
      { id: 299, firstName: "Novelia", lastName: "Stuchberry" },
      { id: 300, firstName: "Wandis", lastName: "Northbridge" },
      { id: 301, firstName: "Sapphira", lastName: "Nendick" },
      { id: 302, firstName: "Maggie", lastName: "McNuff" },
      { id: 303, firstName: "Bridget", lastName: "Tardiff" },
      { id: 304, firstName: "Bevan", lastName: "Searson" },
      { id: 305, firstName: "Jess", lastName: "Darrow" },
      { id: 306, firstName: "Vittorio", lastName: "Philp" },
      { id: 307, firstName: "Birdie", lastName: "Filshin" },
      { id: 308, firstName: "Mozelle", lastName: "Balcombe" },
      { id: 309, firstName: "Vilma", lastName: "Boneham" },
      { id: 310, firstName: "Peggie", lastName: "Chitham" },
      { id: 311, firstName: "Garrot", lastName: "Grouse" },
      { id: 312, firstName: "Paquito", lastName: "MacKee" },
      { id: 313, firstName: "Win", lastName: "Prattin" },
      { id: 314, firstName: "Oralle", lastName: "Pechan" },
      { id: 315, firstName: "Siobhan", lastName: "Spottiswood" },
      { id: 316, firstName: "Cindelyn", lastName: "Todarello" },
      { id: 317, firstName: "Sheeree", lastName: "Domengue" },
      { id: 318, firstName: "Jeana", lastName: "McChruiter" },
      { id: 319, firstName: "Anneliese", lastName: "Rosenbaum" },
      { id: 320, firstName: "Gladys", lastName: "McGaraghan" },
      { id: 321, firstName: "Mariette", lastName: "Donnison" },
      { id: 322, firstName: "Hayley", lastName: "Pimblotte" },
      { id: 323, firstName: "Demetre", lastName: "Poore" },
      { id: 324, firstName: "Stanly", lastName: "Harkness" },
      { id: 325, firstName: "Whitby", lastName: "Amort" },
      { id: 326, firstName: "Siusan", lastName: "MacGowing" },
      { id: 327, firstName: "Charmion", lastName: "Hartwright" },
      { id: 328, firstName: "Bentlee", lastName: "Isack" },
      { id: 329, firstName: "Lacy", lastName: "Loweth" },
      { id: 330, firstName: "Gaby", lastName: "Ishchenko" },
      { id: 331, firstName: "Noami", lastName: "Jenson" },
      { id: 332, firstName: "Ruperto", lastName: "Kemm" },
      { id: 333, firstName: "Camila", lastName: "Hammel" },
      { id: 334, firstName: "Ervin", lastName: "Oakly" },
      { id: 335, firstName: "Evita", lastName: "Volkers" },
      { id: 336, firstName: "Lilla", lastName: "Aiers" },
      { id: 337, firstName: "Karna", lastName: "Holburn" },
      { id: 338, firstName: "Stu", lastName: "Chillingsworth" },
      { id: 339, firstName: "Minta", lastName: "Cashford" },
      { id: 340, firstName: "Donalt", lastName: "Bickell" },
      { id: 341, firstName: "Gustav", lastName: "Suston" },
      { id: 342, firstName: "Brett", lastName: "Shelp" },
      { id: 343, firstName: "Bert", lastName: "Kupec" },
      { id: 344, firstName: "Vassily", lastName: "Woolgar" },
      { id: 345, firstName: "Ben", lastName: "Lattimore" },
      { id: 346, firstName: "Anita", lastName: "Guyton" },
      { id: 347, firstName: "Roobbie", lastName: "Ockenden" },
      { id: 348, firstName: "Jeralee", lastName: "Ellicock" },
      { id: 349, firstName: "Sheela", lastName: "Cocke" },
      { id: 350, firstName: "Kata", lastName: "Snowsill" },
      { id: 351, firstName: "Fancie", lastName: "Raithby" },
      { id: 352, firstName: "Bank", lastName: "Giraths" },
      { id: 353, firstName: "Norrie", lastName: "Hatwells" },
      { id: 354, firstName: "Fenelia", lastName: "Shilvock" },
      { id: 355, firstName: "Stefanie", lastName: "McCroft" },
      { id: 356, firstName: "Hanni", lastName: "Kingscott" },
      { id: 357, firstName: "Debi", lastName: "Wolsey" },
      { id: 358, firstName: "Lock", lastName: "Addicote" },
      { id: 359, firstName: "Thatch", lastName: "Kynoch" },
      { id: 360, firstName: "Hadrian", lastName: "Poter" },
      { id: 361, firstName: "Coleman", lastName: "Ghelerdini" },
      { id: 362, firstName: "Row", lastName: "Kellie" },
      { id: 363, firstName: "Jude", lastName: "Goymer" },
      { id: 364, firstName: "Emmaline", lastName: "Sivewright" },
      { id: 365, firstName: "Grover", lastName: "Panyer" },
      { id: 366, firstName: "Jaine", lastName: "Brouncker" },
      { id: 367, firstName: "Modestine", lastName: "Dellatorre" },
      { id: 368, firstName: "Caleb", lastName: "Bunworth" },
      { id: 369, firstName: "Nisse", lastName: "Bartel" },
      { id: 370, firstName: "Gretchen", lastName: "Aronovitz" },
      { id: 371, firstName: "Gisella", lastName: "Carwardine" },
      { id: 372, firstName: "Lonnie", lastName: "Barbera" },
      { id: 373, firstName: "Amye", lastName: "Blanch" },
      { id: 374, firstName: "Cobbie", lastName: "Ashness" },
      { id: 375, firstName: "Denys", lastName: "Rigardeau" },
      { id: 376, firstName: "Nicolle", lastName: "Getley" },
      { id: 377, firstName: "Marquita", lastName: "Arent" },
      { id: 378, firstName: "Tripp", lastName: "Ledgard" },
      { id: 379, firstName: "Reggy", lastName: "Eingerfield" },
      { id: 380, firstName: "Margy", lastName: "Coltman" },
      { id: 381, firstName: "Janessa", lastName: "Saller" },
      { id: 382, firstName: "Lowrance", lastName: "Purcell" },
      { id: 383, firstName: "Bert", lastName: "Pargiter" },
      { id: 384, firstName: "Halimeda", lastName: "Yoslowitz" },
      { id: 385, firstName: "Deck", lastName: "Willcocks" },
      { id: 386, firstName: "Gretchen", lastName: "Wrightem" },
      { id: 387, firstName: "Violetta", lastName: "Lightoller" },
      { id: 388, firstName: "Maria", lastName: "MacSherry" },
      { id: 389, firstName: "Jyoti", lastName: "Cohane" },
      { id: 390, firstName: "Debera", lastName: "Flageul" },
      { id: 391, firstName: "Morley", lastName: "Haggarth" },
      { id: 392, firstName: "My", lastName: "Wankling" },
      { id: 393, firstName: "Elora", lastName: "Marsh" },
      { id: 394, firstName: "Melli", lastName: "Naulls" },
      { id: 395, firstName: "Carlos", lastName: "Jaquin" },
      { id: 396, firstName: "Ardyth", lastName: "Toulamain" },
      { id: 397, firstName: "Kerstin", lastName: "Back" },
      { id: 398, firstName: "Ola", lastName: "Mordey" },
      { id: 399, firstName: "Caron", lastName: "Sarsons" },
      { id: 400, firstName: "Leila", lastName: "Belsham" },
      { id: 401, firstName: "Wilden", lastName: "Detheridge" },
      { id: 402, firstName: "Rube", lastName: "Boddis" },
      { id: 403, firstName: "Kermy", lastName: "Plank" },
      { id: 404, firstName: "Harmon", lastName: "Blaxeland" },
      { id: 405, firstName: "Binni", lastName: "Cayette" },
      { id: 406, firstName: "Sydney", lastName: "Kipling" },
      { id: 407, firstName: "Ediva", lastName: "Vaen" },
      { id: 408, firstName: "Papageno", lastName: "Odhams" },
      { id: 409, firstName: "Ericka", lastName: "Teck" },
      { id: 410, firstName: "Bradly", lastName: "Rykert" },
      { id: 411, firstName: "Mab", lastName: "Cloney" },
      { id: 412, firstName: "Deedee", lastName: "O'Glessane" },
      { id: 413, firstName: "Maryrose", lastName: "Coultar" },
      { id: 414, firstName: "Phedra", lastName: "Huelin" },
      { id: 415, firstName: "Ganny", lastName: "Dumper" },
      { id: 416, firstName: "Birgit", lastName: "Giddons" },
      { id: 417, firstName: "Zelda", lastName: "Tather" },
      { id: 418, firstName: "Carmine", lastName: "Latchford" },
      { id: 419, firstName: "Val", lastName: "Gethings" },
      { id: 420, firstName: "Madelina", lastName: "Antonopoulos" },
      { id: 421, firstName: "Mohandas", lastName: "Wickett" },
      { id: 422, firstName: "Waldemar", lastName: "Postlethwaite" },
      { id: 423, firstName: "Stafford", lastName: "Oakenfield" },
      { id: 424, firstName: "Chase", lastName: "McDirmid" },
      { id: 425, firstName: "Zeke", lastName: "Skrines" },
      { id: 426, firstName: "Ryann", lastName: "Pesselt" },
      { id: 427, firstName: "Yvor", lastName: "Ballintime" },
      { id: 428, firstName: "Elva", lastName: "De Beneditti" },
      { id: 429, firstName: "Martie", lastName: "Botler" },
      { id: 430, firstName: "Emmerich", lastName: "Bradder" },
      { id: 431, firstName: "Karney", lastName: "Whaley" },
      { id: 432, firstName: "Gillan", lastName: "Woffinden" },
      { id: 433, firstName: "Louisette", lastName: "Dalrymple" },
      { id: 434, firstName: "Ivar", lastName: "Strattan" },
      { id: 435, firstName: "Randie", lastName: "Gerrie" },
      { id: 436, firstName: "Jaymee", lastName: "Pavlasek" },
      { id: 437, firstName: "Marv", lastName: "Iiannone" },
      { id: 438, firstName: "Gaspar", lastName: "Dargan" },
      { id: 439, firstName: "Rita", lastName: "Sherland" },
      { id: 440, firstName: "Rubie", lastName: "Whordley" },
      { id: 441, firstName: "Magdalena", lastName: "Conneely" },
      { id: 442, firstName: "Meghann", lastName: "Daughton" },
      { id: 443, firstName: "Hernando", lastName: "Bagshawe" },
      { id: 444, firstName: "Enrichetta", lastName: "Heningham" },
      { id: 445, firstName: "Mic", lastName: "Dunleavy" },
      { id: 446, firstName: "Emlen", lastName: "Childerhouse" },
      { id: 447, firstName: "Linell", lastName: "Toye" },
      { id: 448, firstName: "Felice", lastName: "Burdekin" },
      { id: 449, firstName: "Alejoa", lastName: "Treves" },
      { id: 450, firstName: "Rosabelle", lastName: "Richford" },
      { id: 451, firstName: "Michaelina", lastName: "Fairley" },
      { id: 452, firstName: "Quentin", lastName: "Simonnin" },
      { id: 453, firstName: "Torrence", lastName: "Roderighi" },
      { id: 454, firstName: "Hale", lastName: "Batecok" },
      { id: 455, firstName: "Abbi", lastName: "Sagrott" },
      { id: 456, firstName: "Thebault", lastName: "Grenville" },
      { id: 457, firstName: "Stu", lastName: "Dalliston" },
      { id: 458, firstName: "Robenia", lastName: "Pailin" },
      { id: 459, firstName: "Fonsie", lastName: "Keane" },
      { id: 460, firstName: "Monika", lastName: "Pfeiffer" },
      { id: 461, firstName: "Netty", lastName: "Caplen" },
      { id: 462, firstName: "Jessey", lastName: "Ludlam" },
      { id: 463, firstName: "Fan", lastName: "Coenraets" },
      { id: 464, firstName: "Kip", lastName: "Jonsson" },
      { id: 465, firstName: "Star", lastName: "Meneely" },
      { id: 466, firstName: "Caryl", lastName: "Mulran" },
      { id: 467, firstName: "Mehetabel", lastName: "Doyle" },
      { id: 468, firstName: "Mara", lastName: "Pietzke" },
      { id: 469, firstName: "Glory", lastName: "Simes" },
      { id: 470, firstName: "Bjorn", lastName: "Crassweller" },
      { id: 471, firstName: "Moishe", lastName: "Hazeldine" },
      { id: 472, firstName: "Wat", lastName: "Leathwood" },
      { id: 473, firstName: "Sheelah", lastName: "MacAughtrie" },
      { id: 474, firstName: "Sheri", lastName: "Lockhurst" },
      { id: 475, firstName: "Jean", lastName: "Rash" },
      { id: 476, firstName: "Agnesse", lastName: "Reyne" },
      { id: 477, firstName: "Penny", lastName: "Lorait" },
      { id: 478, firstName: "Suzanna", lastName: "Lukash" },
      { id: 479, firstName: "Manda", lastName: "Tarbath" },
      { id: 480, firstName: "Wally", lastName: "Bembrick" },
      { id: 481, firstName: "Aguste", lastName: "Colston" },
      { id: 482, firstName: "Sari", lastName: "Brolly" },
      { id: 483, firstName: "Cinda", lastName: "Wood" },
      { id: 484, firstName: "Nikkie", lastName: "Trowill" },
      { id: 485, firstName: "Ynes", lastName: "Czajkowski" },
      { id: 486, firstName: "Lucy", lastName: "Prince" },
      { id: 487, firstName: "Cornelius", lastName: "Hugin" },
      { id: 488, firstName: "Trude", lastName: "Westell" },
      { id: 489, firstName: "Stepha", lastName: "McGinly" },
      { id: 490, firstName: "Helyn", lastName: "Canham" },
      { id: 491, firstName: "Bernard", lastName: "Pumfrey" },
      { id: 492, firstName: "Josiah", lastName: "Saunier" },
      { id: 493, firstName: "Loraine", lastName: "Skim" },
      { id: 494, firstName: "Miltie", lastName: "Woodyeare" },
      { id: 495, firstName: "Kerry", lastName: "Nears" },
      { id: 496, firstName: "Yvon", lastName: "Scolts" },
      { id: 497, firstName: "Bettina", lastName: "Bruckstein" },
      { id: 498, firstName: "Merrile", lastName: "Bouchard" },
      { id: 499, firstName: "Nariko", lastName: "Rushby" },
      { id: 500, firstName: "Amalee", lastName: "Friberg" },
      { id: 501, firstName: "Horton", lastName: "Lambkin" },
      { id: 502, firstName: "Ardelia", lastName: "Jancso" },
      { id: 503, firstName: "Harlen", lastName: "Duckham" },
      { id: 504, firstName: "Marisa", lastName: "Breston" },
      { id: 505, firstName: "Cori", lastName: "Nickless" },
      { id: 506, firstName: "Nicky", lastName: "Leek" },
      { id: 507, firstName: "Nefen", lastName: "Bleazard" },
      { id: 508, firstName: "Thacher", lastName: "Mountjoy" },
      { id: 509, firstName: "George", lastName: "Chardin" },
      { id: 510, firstName: "Kirk", lastName: "Sheeres" },
      { id: 511, firstName: "Sunny", lastName: "Sillick" },
      { id: 512, firstName: "Janey", lastName: "Shave" },
      { id: 513, firstName: "Ethel", lastName: "Radolf" },
      { id: 514, firstName: "Carroll", lastName: "Semerad" },
      { id: 515, firstName: "Holden", lastName: "Lowdiane" },
      { id: 516, firstName: "Charlean", lastName: "Knutton" },
      { id: 517, firstName: "Jacky", lastName: "Nobbs" },
      { id: 518, firstName: "Babara", lastName: "Calvey" },
      { id: 519, firstName: "Virginia", lastName: "Netti" },
      { id: 520, firstName: "Hanny", lastName: "Holton" },
      { id: 521, firstName: "Nikki", lastName: "Jenkison" },
      { id: 522, firstName: "Dasie", lastName: "Loffill" },
      { id: 523, firstName: "Elladine", lastName: "Laguerre" },
      { id: 524, firstName: "Dorisa", lastName: "Highton" },
      { id: 525, firstName: "Jen", lastName: "Coppin" },
      { id: 526, firstName: "Idaline", lastName: "Anstead" },
      { id: 527, firstName: "Natty", lastName: "MacRedmond" },
      { id: 528, firstName: "Kath", lastName: "Ungerechts" },
      { id: 529, firstName: "Archaimbaud", lastName: "Mosen" },
      { id: 530, firstName: "Edgar", lastName: "Clapston" },
      { id: 531, firstName: "Elysha", lastName: "Atherton" },
      { id: 532, firstName: "Lolita", lastName: "Luca" },
      { id: 533, firstName: "Matty", lastName: "Heijnen" },
      { id: 534, firstName: "Rusty", lastName: "Pulfer" },
      { id: 535, firstName: "Belvia", lastName: "Rapelli" },
      { id: 536, firstName: "Ave", lastName: "Griss" },
      { id: 537, firstName: "Devan", lastName: "Santino" },
      { id: 538, firstName: "Joleen", lastName: "Gilley" },
      { id: 539, firstName: "Izak", lastName: "Pawelec" },
      { id: 540, firstName: "Doe", lastName: "Youhill" },
      { id: 541, firstName: "Cherise", lastName: "Risby" },
      { id: 542, firstName: "Filippo", lastName: "Wein" },
      { id: 543, firstName: "Carol-jean", lastName: "Masterman" },
      { id: 544, firstName: "Giacopo", lastName: "Zorzenoni" },
      { id: 545, firstName: "Bryanty", lastName: "Savidge" },
      { id: 546, firstName: "Larine", lastName: "Touzey" },
      { id: 547, firstName: "Carine", lastName: "Albertson" },
      { id: 548, firstName: "Luz", lastName: "Clohisey" },
      { id: 549, firstName: "Andreas", lastName: "Warlawe" },
      { id: 550, firstName: "Ellie", lastName: "Dovidian" },
      { id: 551, firstName: "Rois", lastName: "Hellewell" },
      { id: 552, firstName: "Lanni", lastName: "Wetherick" },
      { id: 553, firstName: "Jami", lastName: "Gauford" },
      { id: 554, firstName: "Izak", lastName: "Snowden" },
      { id: 555, firstName: "Beverlee", lastName: "Grahame" },
      { id: 556, firstName: "Sasha", lastName: "Pedwell" },
      { id: 557, firstName: "Thorndike", lastName: "Tremblet" },
      { id: 558, firstName: "Gardie", lastName: "MacLachlan" },
      { id: 559, firstName: "Kizzie", lastName: "Kaasman" },
      { id: 560, firstName: "Robinett", lastName: "Dunkinson" },
      { id: 561, firstName: "Bobina", lastName: "Hastler" },
      { id: 562, firstName: "Shanan", lastName: "Walkden" },
      { id: 563, firstName: "Claiborn", lastName: "Kundert" },
      { id: 564, firstName: "Bev", lastName: "Belin" },
      { id: 565, firstName: "Quintilla", lastName: "Norledge" },
      { id: 566, firstName: "Jacintha", lastName: "Light" },
      { id: 567, firstName: "Cordelia", lastName: "Fairhurst" },
      { id: 568, firstName: "Carroll", lastName: "Minards" },
      { id: 569, firstName: "Judith", lastName: "Wiffler" },
      { id: 570, firstName: "Letizia", lastName: "Ibbetson" },
      { id: 571, firstName: "Ruy", lastName: "Chinnock" },
      { id: 572, firstName: "Netti", lastName: "Lauderdale" },
      { id: 573, firstName: "Gallard", lastName: "Linnard" },
      { id: 574, firstName: "Natassia", lastName: "Ingon" },
      { id: 575, firstName: "Brien", lastName: "Oxenham" },
      { id: 576, firstName: "Kali", lastName: "Joselovitch" },
      { id: 577, firstName: "Sibley", lastName: "Flescher" },
      { id: 578, firstName: "Ofilia", lastName: "Evanson" },
      { id: 579, firstName: "Natassia", lastName: "Udell" },
      { id: 580, firstName: "Rivkah", lastName: "Badrock" },
      { id: 581, firstName: "Renado", lastName: "Adamini" },
      { id: 582, firstName: "Natassia", lastName: "Eveque" },
      { id: 583, firstName: "Alayne", lastName: "Ralestone" },
      { id: 584, firstName: "Nathanial", lastName: "Gurden" },
      { id: 585, firstName: "Stearn", lastName: "Lupton" },
      { id: 586, firstName: "Niki", lastName: "Bedenham" },
      { id: 587, firstName: "Angy", lastName: "Corzon" },
      { id: 588, firstName: "Bunnie", lastName: "Hasson" },
      { id: 589, firstName: "Emmeline", lastName: "McGrirl" },
      { id: 590, firstName: "Karna", lastName: "Holehouse" },
      { id: 591, firstName: "Corine", lastName: "Lozano" },
      { id: 592, firstName: "Boothe", lastName: "Balderstone" },
      { id: 593, firstName: "Antoni", lastName: "Di Biagio" },
      { id: 594, firstName: "Amye", lastName: "Birtles" },
      { id: 595, firstName: "Oren", lastName: "Moulsdale" },
      { id: 596, firstName: "Dalia", lastName: "Tegeller" },
      { id: 597, firstName: "Kathleen", lastName: "Bawles" },
      { id: 598, firstName: "Tann", lastName: "Draper" },
      { id: 599, firstName: "Eugenius", lastName: "Gossington" },
      { id: 600, firstName: "Deirdre", lastName: "Yacob" },
      { id: 601, firstName: "Rollie", lastName: "Faughnan" },
      { id: 602, firstName: "Cahra", lastName: "Ilymanov" },
      { id: 603, firstName: "Randene", lastName: "Sebright" },
      { id: 604, firstName: "Cherise", lastName: "Plait" },
      { id: 605, firstName: "Daven", lastName: "McGavigan" },
      { id: 606, firstName: "Halimeda", lastName: "McSkin" },
      { id: 607, firstName: "Rubi", lastName: "Belfit" },
      { id: 608, firstName: "Corri", lastName: "Teather" },
      { id: 609, firstName: "Berna", lastName: "Fitzroy" },
      { id: 610, firstName: "Napoleon", lastName: "Lakey" },
      { id: 611, firstName: "Quinta", lastName: "Mcimmie" },
      { id: 612, firstName: "Hildagard", lastName: "Wrightam" },
      { id: 613, firstName: "Zonda", lastName: "Rohlfs" },
      { id: 614, firstName: "Calypso", lastName: "Ellsbury" },
      { id: 615, firstName: "Gradeigh", lastName: "Pogg" },
      { id: 616, firstName: "Shanon", lastName: "Giamelli" },
      { id: 617, firstName: "Verene", lastName: "Redan" },
      { id: 618, firstName: "Carlyle", lastName: "Curnick" },
      { id: 619, firstName: "Chrotoem", lastName: "Cartmael" },
      { id: 620, firstName: "Mora", lastName: "Balchen" },
      { id: 621, firstName: "Daryl", lastName: "Dibden" },
      { id: 622, firstName: "Gardner", lastName: "Caldero" },
      { id: 623, firstName: "Loy", lastName: "Cacacie" },
      { id: 624, firstName: "Glenn", lastName: "Ragborne" },
      { id: 625, firstName: "Bonnee", lastName: "Goadby" },
      { id: 626, firstName: "Kynthia", lastName: "Chafer" },
      { id: 627, firstName: "Paco", lastName: "Botler" },
      { id: 628, firstName: "Rikki", lastName: "Eisak" },
      { id: 629, firstName: "Fernanda", lastName: "Frisby" },
      { id: 630, firstName: "Elbert", lastName: "Hasser" },
      { id: 631, firstName: "Gene", lastName: "Farthing" },
      { id: 632, firstName: "Reube", lastName: "Grieves" },
      { id: 633, firstName: "Mordecai", lastName: "Dobbs" },
      { id: 634, firstName: "Payton", lastName: "Hurdis" },
      { id: 635, firstName: "Barbi", lastName: "Vasse" },
      { id: 636, firstName: "Sal", lastName: "Eusden" },
      { id: 637, firstName: "Augustina", lastName: "Fruish" },
      { id: 638, firstName: "Ludovico", lastName: "Isgar" },
      { id: 639, firstName: "Doralynne", lastName: "Jovic" },
      { id: 640, firstName: "Donia", lastName: "Avey" },
      { id: 641, firstName: "Ephraim", lastName: "Picopp" },
      { id: 642, firstName: "Amelina", lastName: "Matyasik" },
      { id: 643, firstName: "Terrie", lastName: "Wiburn" },
      { id: 644, firstName: "Temple", lastName: "Randell" },
      { id: 645, firstName: "Wilbur", lastName: "Blamey" },
      { id: 646, firstName: "Harriette", lastName: "Sleit" },
      { id: 647, firstName: "Nester", lastName: "Haken" },
      { id: 648, firstName: "Gasparo", lastName: "Trangmar" },
      { id: 649, firstName: "Estele", lastName: "Steanyng" },
      { id: 650, firstName: "Gabe", lastName: "Vango" },
      { id: 651, firstName: "Early", lastName: "Pettigrew" },
      { id: 652, firstName: "Wallas", lastName: "McNair" },
      { id: 653, firstName: "Rosina", lastName: "Duddan" },
      { id: 654, firstName: "Stacie", lastName: "Sedgefield" },
      { id: 655, firstName: "Rae", lastName: "McTerrelly" },
      { id: 656, firstName: "Dionisio", lastName: "Perrat" },
      { id: 657, firstName: "Cord", lastName: "Jessep" },
      { id: 658, firstName: "Meggie", lastName: "Priddie" },
      { id: 659, firstName: "Teodorico", lastName: "Mateuszczyk" },
      { id: 660, firstName: "Herculie", lastName: "Dryden" },
      { id: 661, firstName: "Brunhilde", lastName: "Cisco" },
      { id: 662, firstName: "Cassandry", lastName: "Gocke" },
      { id: 663, firstName: "Bartram", lastName: "Muggleston" },
      { id: 664, firstName: "Gipsy", lastName: "Kinastan" },
      { id: 665, firstName: "Yancey", lastName: "Earl" },
      { id: 666, firstName: "Avigdor", lastName: "Clears" },
      { id: 667, firstName: "Jerrilyn", lastName: "Puncher" },
      { id: 668, firstName: "Giordano", lastName: "O'Drought" },
      { id: 669, firstName: "Gordon", lastName: "O' Mulderrig" },
      { id: 670, firstName: "Earle", lastName: "Seeman" },
      { id: 671, firstName: "Anthea", lastName: "Bensen" },
      { id: 672, firstName: "Der", lastName: "Aikin" },
      { id: 673, firstName: "Linc", lastName: "Gerrit" },
      { id: 674, firstName: "Marchelle", lastName: "Siney" },
      { id: 675, firstName: "Myrah", lastName: "Yakubovich" },
      { id: 676, firstName: "Bekki", lastName: "Gilardoni" },
      { id: 677, firstName: "Daloris", lastName: "Gabbett" },
      { id: 678, firstName: "George", lastName: "Walhedd" },
      { id: 679, firstName: "Marthe", lastName: "Bauldry" },
      { id: 680, firstName: "Kara", lastName: "Cornil" },
      { id: 681, firstName: "Zara", lastName: "Fairham" },
      { id: 682, firstName: "Jasen", lastName: "Dripps" },
      { id: 683, firstName: "Shelbi", lastName: "Humphrys" },
      { id: 684, firstName: "Dru", lastName: "Sparling" },
      { id: 685, firstName: "Ewan", lastName: "Ventom" },
      { id: 686, firstName: "Eric", lastName: "Wilman" },
      { id: 687, firstName: "Bendite", lastName: "Waple" },
      { id: 688, firstName: "Gates", lastName: "Bestwall" },
      { id: 689, firstName: "Ketty", lastName: "Peschke" },
      { id: 690, firstName: "Emmit", lastName: "Hasley" },
      { id: 691, firstName: "Shem", lastName: "Oguz" },
      { id: 692, firstName: "Hynda", lastName: "Baly" },
      { id: 693, firstName: "Joeann", lastName: "Holston" },
      { id: 694, firstName: "Mikey", lastName: "Greder" },
      { id: 695, firstName: "Rosette", lastName: "Duddan" },
      { id: 696, firstName: "Haroun", lastName: "Mickan" },
      { id: 697, firstName: "Candy", lastName: "Barnewall" },
      { id: 698, firstName: "Andrus", lastName: "Brettell" },
      { id: 699, firstName: "Humfrid", lastName: "Poacher" },
      { id: 700, firstName: "Jsandye", lastName: "Yven" },
      { id: 701, firstName: "Cheri", lastName: "Hincks" },
      { id: 702, firstName: "Alysa", lastName: "Tapscott" },
      { id: 703, firstName: "Hamil", lastName: "Bloor" },
      { id: 704, firstName: "Bliss", lastName: "McCromley" },
      { id: 705, firstName: "Cecil", lastName: "Dreamer" },
      { id: 706, firstName: "Midge", lastName: "Kynett" },
      { id: 707, firstName: "Malina", lastName: "Shinner" },
      { id: 708, firstName: "Bearnard", lastName: "Dachs" },
      { id: 709, firstName: "Pamelina", lastName: "Seres" },
      { id: 710, firstName: "Sallee", lastName: "Ramberg" },
      { id: 711, firstName: "Darice", lastName: "Rhule" },
      { id: 712, firstName: "Jami", lastName: "Mapother" },
      { id: 713, firstName: "Claus", lastName: "Elies" },
      { id: 714, firstName: "Audrey", lastName: "Deacock" },
      { id: 715, firstName: "Almeta", lastName: "Gilhoolie" },
      { id: 716, firstName: "Nady", lastName: "Durak" },
      { id: 717, firstName: "Fanya", lastName: "Eakens" },
      { id: 718, firstName: "Daloris", lastName: "Missington" },
      { id: 719, firstName: "Ivonne", lastName: "Coghill" },
      { id: 720, firstName: "Midge", lastName: "Coopey" },
      { id: 721, firstName: "Donni", lastName: "Chalkly" },
      { id: 722, firstName: "Natale", lastName: "Coupman" },
      { id: 723, firstName: "Wynne", lastName: "MacDwyer" },
      { id: 724, firstName: "Cesare", lastName: "Womack" },
      { id: 725, firstName: "Hunfredo", lastName: "Hulmes" },
      { id: 726, firstName: "Ardath", lastName: "Sadlier" },
      { id: 727, firstName: "Broderic", lastName: "Redmayne" },
      { id: 728, firstName: "Clim", lastName: "Peartree" },
      { id: 729, firstName: "Pearce", lastName: "Seth" },
      { id: 730, firstName: "Blisse", lastName: "Lannen" },
      { id: 731, firstName: "Sharona", lastName: "Bacon" },
      { id: 732, firstName: "Roy", lastName: "Coppledike" },
      { id: 733, firstName: "Chico", lastName: "Simms" },
      { id: 734, firstName: "Lanie", lastName: "Benallack" },
      { id: 735, firstName: "Maxim", lastName: "Torricella" },
      { id: 736, firstName: "Chrystel", lastName: "Stoter" },
      { id: 737, firstName: "Perl", lastName: "Crum" },
      { id: 738, firstName: "Meyer", lastName: "Folds" },
      { id: 739, firstName: "Jory", lastName: "Enevold" },
      { id: 740, firstName: "Alli", lastName: "Sushams" },
      { id: 741, firstName: "Sebastiano", lastName: "Bucher" },
      { id: 742, firstName: "Wiley", lastName: "Gather" },
      { id: 743, firstName: "Carmencita", lastName: "Innocent" },
      { id: 744, firstName: "Lisle", lastName: "Leggat" },
      { id: 745, firstName: "Ivett", lastName: "Loxton" },
      { id: 746, firstName: "Nari", lastName: "Meese" },
      { id: 747, firstName: "Vladamir", lastName: "Wellsman" },
      { id: 748, firstName: "Eleni", lastName: "Cuss" },
      { id: 749, firstName: "Margie", lastName: "Loggie" },
      { id: 750, firstName: "Arte", lastName: "Dayly" },
      { id: 751, firstName: "Abraham", lastName: "Lynde" },
      { id: 752, firstName: "Padraic", lastName: "Haslum" },
      { id: 753, firstName: "Reilly", lastName: "Exer" },
      { id: 754, firstName: "Terrie", lastName: "Barsam" },
      { id: 755, firstName: "Tracy", lastName: "Splevings" },
      { id: 756, firstName: "Vilma", lastName: "Janowicz" },
      { id: 757, firstName: "August", lastName: "Harnell" },
      { id: 758, firstName: "Venita", lastName: "Phoebe" },
      { id: 759, firstName: "Aurora", lastName: "O'Roan" },
      { id: 760, firstName: "Neron", lastName: "Tschirschky" },
      { id: 761, firstName: "Elisabet", lastName: "Tregale" },
      { id: 762, firstName: "Roman", lastName: "Waters" },
      { id: 763, firstName: "Dallis", lastName: "Darlington" },
      { id: 764, firstName: "Chris", lastName: "Hurle" },
      { id: 765, firstName: "Samuele", lastName: "Wealthall" },
      { id: 766, firstName: "Oona", lastName: "Britto" },
      { id: 767, firstName: "Giordano", lastName: "Shuker" },
      { id: 768, firstName: "Ephrem", lastName: "Makey" },
      { id: 769, firstName: "Seward", lastName: "Kohneke" },
      { id: 770, firstName: "Carmina", lastName: "McKitterick" },
      { id: 771, firstName: "Haleigh", lastName: "Huegett" },
      { id: 772, firstName: "Terrance", lastName: "Alaway" },
      { id: 773, firstName: "Tracie", lastName: "O'Murtagh" },
      { id: 774, firstName: "Tammy", lastName: "Bumby" },
      { id: 775, firstName: "Huntington", lastName: "Beney" },
      { id: 776, firstName: "Daisy", lastName: "Smoote" },
      { id: 777, firstName: "Dela", lastName: "Cozzi" },
      { id: 778, firstName: "Marylin", lastName: "Riddiford" },
      { id: 779, firstName: "Witty", lastName: "Roberti" },
      { id: 780, firstName: "Kiah", lastName: "Waszkiewicz" },
      { id: 781, firstName: "Marsiella", lastName: "Bauduin" },
      { id: 782, firstName: "Averell", lastName: "Liveley" },
      { id: 783, firstName: "Bertie", lastName: "Harbard" },
      { id: 784, firstName: "Bronnie", lastName: "Dyne" },
      { id: 785, firstName: "Kathy", lastName: "Bispham" },
      { id: 786, firstName: "Adella", lastName: "Agent" },
      { id: 787, firstName: "Tyrone", lastName: "Climie" },
      { id: 788, firstName: "Maryellen", lastName: "Ludmann" },
      { id: 789, firstName: "Barbra", lastName: "Dufour" },
      { id: 790, firstName: "Stanton", lastName: "Holworth" },
      { id: 791, firstName: "Siobhan", lastName: "Andrassy" },
      { id: 792, firstName: "Tabor", lastName: "Weber" },
      { id: 793, firstName: "Michal", lastName: "Veazey" },
      { id: 794, firstName: "Hermine", lastName: "Cockney" },
      { id: 795, firstName: "Sigvard", lastName: "Bousquet" },
      { id: 796, firstName: "Netti", lastName: "McCathie" },
      { id: 797, firstName: "Kristofor", lastName: "Redsell" },
      { id: 798, firstName: "Meghan", lastName: "Froment" },
      { id: 799, firstName: "Mattheus", lastName: "Regelous" },
      { id: 800, firstName: "Renae", lastName: "Wheway" },
      { id: 801, firstName: "Torrence", lastName: "Callaby" },
      { id: 802, firstName: "Catie", lastName: "Schultheiss" },
      { id: 803, firstName: "Kirbee", lastName: "Bavester" },
      { id: 804, firstName: "Baudoin", lastName: "Benmore" },
      { id: 805, firstName: "Tyson", lastName: "Burdekin" },
      { id: 806, firstName: "Rhoda", lastName: "Adamov" },
      { id: 807, firstName: "Leland", lastName: "Bispham" },
      { id: 808, firstName: "Torry", lastName: "Mizzi" },
      { id: 809, firstName: "Robby", lastName: "Reitenbach" },
      { id: 810, firstName: "Algernon", lastName: "Domel" },
      { id: 811, firstName: "Lyndsey", lastName: "Bente" },
      { id: 812, firstName: "Martita", lastName: "MacAdam" },
      { id: 813, firstName: "Astra", lastName: "Mahaddy" },
      { id: 814, firstName: "Emile", lastName: "Balke" },
      { id: 815, firstName: "Maribel", lastName: "Ledley" },
      { id: 816, firstName: "Farlee", lastName: "Breheny" },
      { id: 817, firstName: "Violette", lastName: "Frossell" },
      { id: 818, firstName: "Tracy", lastName: "Kaming" },
      { id: 819, firstName: "Dylan", lastName: "Manicomb" },
      { id: 820, firstName: "Porter", lastName: "Abernethy" },
      { id: 821, firstName: "Brandon", lastName: "Lipp" },
      { id: 822, firstName: "Peyton", lastName: "Domeney" },
      { id: 823, firstName: "Harrie", lastName: "Gabb" },
      { id: 824, firstName: "Lynne", lastName: "Stepto" },
      { id: 825, firstName: "Nichole", lastName: "Greenard" },
      { id: 826, firstName: "Imogene", lastName: "Cherrison" },
      { id: 827, firstName: "Nichol", lastName: "Sextone" },
      { id: 828, firstName: "Ina", lastName: "Bartleet" },
      { id: 829, firstName: "Gerladina", lastName: "Tansill" },
      { id: 830, firstName: "Kalina", lastName: "Klinck" },
      { id: 831, firstName: "Denny", lastName: "Axtens" },
      { id: 832, firstName: "Halley", lastName: "Rosewall" },
      { id: 833, firstName: "Justinian", lastName: "Simoni" },
      { id: 834, firstName: "Honor", lastName: "Fentem" },
      { id: 835, firstName: "Gun", lastName: "Pardew" },
      { id: 836, firstName: "Giustina", lastName: "Fieller" },
      { id: 837, firstName: "Ada", lastName: "Drife" },
      { id: 838, firstName: "Izzy", lastName: "Pates" },
      { id: 839, firstName: "Wally", lastName: "Vatcher" },
      { id: 840, firstName: "Maribelle", lastName: "Jurgenson" },
      { id: 841, firstName: "Kristoforo", lastName: "Howerd" },
      { id: 842, firstName: "Emilia", lastName: "D'Hooge" },
      { id: 843, firstName: "Brucie", lastName: "Haldin" },
      { id: 844, firstName: "Lucie", lastName: "Northcott" },
      { id: 845, firstName: "Traver", lastName: "Orgee" },
      { id: 846, firstName: "Care", lastName: "MacCome" },
      { id: 847, firstName: "Iris", lastName: "Turfitt" },
      { id: 848, firstName: "Shawn", lastName: "Hercock" },
      { id: 849, firstName: "Astrix", lastName: "Hatterslay" },
      { id: 850, firstName: "Gasparo", lastName: "MacGiolla Pheadair" },
      { id: 851, firstName: "Stoddard", lastName: "Hull" },
      { id: 852, firstName: "Cora", lastName: "Bowne" },
      { id: 853, firstName: "Agneta", lastName: "Maunder" },
      { id: 854, firstName: "Jillie", lastName: "Russell" },
      { id: 855, firstName: "Corey", lastName: "McGeachy" },
      { id: 856, firstName: "Roosevelt", lastName: "Haddick" },
      { id: 857, firstName: "Dion", lastName: "Benninck" },
      { id: 858, firstName: "Pattie", lastName: "Yelyashev" },
      { id: 859, firstName: "Jackie", lastName: "Heyfield" },
      { id: 860, firstName: "Wade", lastName: "Rigbye" },
      { id: 861, firstName: "Janela", lastName: "Mortimer" },
      { id: 862, firstName: "Emmye", lastName: "Cressar" },
      { id: 863, firstName: "Zonnya", lastName: "Trustey" },
      { id: 864, firstName: "Desiri", lastName: "Felipe" },
      { id: 865, firstName: "Bastien", lastName: "Brayson" },
      { id: 866, firstName: "Wenonah", lastName: "Pickston" },
      { id: 867, firstName: "Curcio", lastName: "Borkin" },
      { id: 868, firstName: "Adeline", lastName: "Loxston" },
      { id: 869, firstName: "Alanah", lastName: "Castellucci" },
      { id: 870, firstName: "Dall", lastName: "Yitzovitz" },
      { id: 871, firstName: "Jessalin", lastName: "McNeice" },
      { id: 872, firstName: "Giorgi", lastName: "Olding" },
      { id: 873, firstName: "Agustin", lastName: "Bunyard" },
      { id: 874, firstName: "Gerrilee", lastName: "Hick" },
      { id: 875, firstName: "Cristobal", lastName: "Evequot" },
      { id: 876, firstName: "Kort", lastName: "Lintill" },
      { id: 877, firstName: "Wadsworth", lastName: "Bickerstasse" },
      { id: 878, firstName: "Lexie", lastName: "Philipsohn" },
      { id: 879, firstName: "Cornela", lastName: "Feldon" },
      { id: 880, firstName: "Katuscha", lastName: "Staining" },
      { id: 881, firstName: "Stephani", lastName: "Tiffney" },
      { id: 882, firstName: "Leigh", lastName: "Buckby" },
      { id: 883, firstName: "Tess", lastName: "Gonnard" },
      { id: 884, firstName: "Lothaire", lastName: "Pennetti" },
      { id: 885, firstName: "Skye", lastName: "Phillimore" },
      { id: 886, firstName: "Hans", lastName: "Bondar" },
      { id: 887, firstName: "Garrick", lastName: "Bucklee" },
      { id: 888, firstName: "Parry", lastName: "Gibbe" },
      { id: 889, firstName: "Maddie", lastName: "Gaddie" },
      { id: 890, firstName: "Stirling", lastName: "Morpeth" },
      { id: 891, firstName: "Baird", lastName: "Woodman" },
      { id: 892, firstName: "Marisa", lastName: "Alf" },
      { id: 893, firstName: "Torey", lastName: "Allard" },
      { id: 894, firstName: "Archambault", lastName: "Caine" },
      { id: 895, firstName: "Thorpe", lastName: "Turk" },
      { id: 896, firstName: "Hoyt", lastName: "Aucourte" },
      { id: 897, firstName: "Friedrick", lastName: "Downer" },
      { id: 898, firstName: "Madge", lastName: "Hiland" },
      { id: 899, firstName: "Fania", lastName: "Dettmar" },
      { id: 900, firstName: "Gavin", lastName: "Skitral" },
      { id: 901, firstName: "Mable", lastName: "Fowle" },
      { id: 902, firstName: "Alick", lastName: "Tomaino" },
      { id: 903, firstName: "Ivor", lastName: "Gurnell" },
      { id: 904, firstName: "Odette", lastName: "Gabbetis" },
      { id: 905, firstName: "Morlee", lastName: "Berrane" },
      { id: 906, firstName: "Meade", lastName: "Daintrey" },
      { id: 907, firstName: "Merrielle", lastName: "Isles" },
      { id: 908, firstName: "Sherye", lastName: "Mahony" },
      { id: 909, firstName: "Belinda", lastName: "Pleavin" },
      { id: 910, firstName: "Almire", lastName: "Muzzall" },
      { id: 911, firstName: "Patti", lastName: "Harrowell" },
      { id: 912, firstName: "Corly", lastName: "Gatch" },
      { id: 913, firstName: "Ogden", lastName: "Heinsh" },
      { id: 914, firstName: "Ebony", lastName: "Van Waadenburg" },
      { id: 915, firstName: "Shauna", lastName: "Scupham" },
      { id: 916, firstName: "Agata", lastName: "Antoniottii" },
      { id: 917, firstName: "Di", lastName: "McDaid" },
      { id: 918, firstName: "Geoff", lastName: "Dobbings" },
      { id: 919, firstName: "Sander", lastName: "Wickrath" },
      { id: 920, firstName: "Rosemarie", lastName: "Boothby" },
      { id: 921, firstName: "Nancey", lastName: "Foux" },
      { id: 922, firstName: "Jena", lastName: "Shoreman" },
      { id: 923, firstName: "Carrissa", lastName: "Crisall" },
      { id: 924, firstName: "Glynnis", lastName: "Henrichsen" },
      { id: 925, firstName: "Emogene", lastName: "Garnar" },
      { id: 926, firstName: "Farrell", lastName: "Stedell" },
      { id: 927, firstName: "Clemmy", lastName: "Keattch" },
      { id: 928, firstName: "Querida", lastName: "Scarborough" },
      { id: 929, firstName: "Jocelyne", lastName: "McLoughlin" },
      { id: 930, firstName: "Fancy", lastName: "Napier" },
      { id: 931, firstName: "Nicky", lastName: "Caccavari" },
      { id: 932, firstName: "Aurie", lastName: "Tapply" },
      { id: 933, firstName: "Keri", lastName: "Elverston" },
      { id: 934, firstName: "Shanie", lastName: "Brandino" },
      { id: 935, firstName: "Pauli", lastName: "Kerans" },
      { id: 936, firstName: "Elva", lastName: "Turfin" },
      { id: 937, firstName: "Candice", lastName: "De Roeck" },
      { id: 938, firstName: "Herbie", lastName: "Nardi" },
      { id: 939, firstName: "Blayne", lastName: "Tapsell" },
      { id: 940, firstName: "Reyna", lastName: "Cockayme" },
      { id: 941, firstName: "Pat", lastName: "Ridel" },
      { id: 942, firstName: "Kassey", lastName: "Havard" },
      { id: 943, firstName: "Gussy", lastName: "Heinel" },
      { id: 944, firstName: "Piper", lastName: "Welburn" },
      { id: 945, firstName: "Elisa", lastName: "Molloy" },
      { id: 946, firstName: "Raphaela", lastName: "Mignot" },
      { id: 947, firstName: "Winfred", lastName: "Eccleston" },
      { id: 948, firstName: "Corbie", lastName: "Tunny" },
      { id: 949, firstName: "Franciskus", lastName: "Bilton" },
      { id: 950, firstName: "Ches", lastName: "Strugnell" },
      { id: 951, firstName: "Carlee", lastName: "Fleming" },
      { id: 952, firstName: "Jacquenette", lastName: "Anger" },
      { id: 953, firstName: "Natasha", lastName: "Dunhill" },
      { id: 954, firstName: "Toinette", lastName: "Garvagh" },
      { id: 955, firstName: "Kim", lastName: "Bugdall" },
      { id: 956, firstName: "Hugo", lastName: "Keneleyside" },
      { id: 957, firstName: "Eb", lastName: "Jeannet" },
      { id: 958, firstName: "Inger", lastName: "Domenge" },
      { id: 959, firstName: "Nicholle", lastName: "Mockford" },
      { id: 960, firstName: "Mel", lastName: "Kibbye" },
      { id: 961, firstName: "Deeyn", lastName: "Flatte" },
      { id: 962, firstName: "Lennard", lastName: "Pittle" },
      { id: 963, firstName: "Padraig", lastName: "Scoon" },
      { id: 964, firstName: "Linus", lastName: "Peagram" },
      { id: 965, firstName: "Anjela", lastName: "Gepheart" },
      { id: 966, firstName: "Max", lastName: "Colisbe" },
      { id: 967, firstName: "Arline", lastName: "Bordessa" },
      { id: 968, firstName: "Stephana", lastName: "Mc Menamin" },
      { id: 969, firstName: "Myrwyn", lastName: "Gillespie" },
      { id: 970, firstName: "Kylie", lastName: "Latus" },
      { id: 971, firstName: "Bengt", lastName: "Kitchin" },
      { id: 972, firstName: "Sunny", lastName: "Le Galle" },
      { id: 973, firstName: "Justine", lastName: "Longden" },
      { id: 974, firstName: "Packston", lastName: "Vickar" },
      { id: 975, firstName: "Dotty", lastName: "Plewright" },
      { id: 976, firstName: "Jorrie", lastName: "Loiterton" },
      { id: 977, firstName: "Brendin", lastName: "Seamans" },
      { id: 978, firstName: "Shurlocke", lastName: "Kelleway" },
      { id: 979, firstName: "Eustace", lastName: "Anthona" },
      { id: 980, firstName: "Sianna", lastName: "Stych" },
      { id: 981, firstName: "Svend", lastName: "Savell" },
      { id: 982, firstName: "Hermon", lastName: "Smead" },
      { id: 983, firstName: "Lenci", lastName: "Belloch" },
      { id: 984, firstName: "Adella", lastName: "Kamall" },
      { id: 985, firstName: "Pincas", lastName: "Kisby" },
      { id: 986, firstName: "Crysta", lastName: "Cavolini" },
      { id: 987, firstName: "Pren", lastName: "Allain" },
      { id: 988, firstName: "Rorie", lastName: "Lentsch" },
      { id: 989, firstName: "Jedidiah", lastName: "Fehely" },
      { id: 990, firstName: "Abra", lastName: "Casolla" },
      { id: 991, firstName: "Elly", lastName: "Dutson" },
      { id: 992, firstName: "Marcellina", lastName: "Churchyard" },
      { id: 993, firstName: "Olga", lastName: "Pither" },
      { id: 994, firstName: "Harper", lastName: "Prescot" },
      { id: 995, firstName: "Aleta", lastName: "Ingleton" },
      { id: 996, firstName: "Jeannette", lastName: "Shatford" },
      { id: 997, firstName: "Mellicent", lastName: "Cohan" },
      { id: 998, firstName: "Prudence", lastName: "Castello" },
      { id: 999, firstName: "Ada", lastName: "Philippsohn" },
      { id: 1e3, firstName: "Merrie", lastName: "Iacabucci" }
    ]);
    const mySelectedRows = ref4([rows.value[0]]);
    function onButtonClick(id) {
      alert(`Du klickade p\xE5 rad med id ${id}`);
    }
    const __returned__ = { selectFieldOptions, columns, rows, mySelectedRows, onButtonClick, get FTable() {
      return _sfc_main;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render7(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock7(), _createBlock3($setup["FTable"], {
    "selected-rows": $setup.mySelectedRows,
    "onUpdate:selectedRows": _cache[0] || (_cache[0] = ($event) => $setup.mySelectedRows = $event),
    rows: $setup.rows,
    columns: $setup.columns,
    "key-attribute": "id",
    striped: "",
    paginerated: ""
  }, null, 8, ["selected-rows", "rows", "columns"]);
}
exampleComponent.render = render7;
setup({
  rootComponent: exampleComponent,
  selector: "#example-e13278"
});
export {
  render7 as render
};
