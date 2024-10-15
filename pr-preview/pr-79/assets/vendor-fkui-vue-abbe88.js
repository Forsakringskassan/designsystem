"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/core-js/internals/global-this.js
  var require_global_this = __commonJS({
    "node_modules/core-js/internals/global-this.js"(exports, module) {
      "use strict";
      var check = function(it) {
        return it && it.Math === Math && it;
      };
      module.exports = // eslint-disable-next-line es/no-global-this -- safe
      check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
      check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
      /* @__PURE__ */ function() {
        return this;
      }() || Function("return this")();
    }
  });

  // node_modules/core-js/internals/fails.js
  var require_fails = __commonJS({
    "node_modules/core-js/internals/fails.js"(exports, module) {
      "use strict";
      module.exports = function(exec) {
        try {
          return !!exec();
        } catch (error) {
          return true;
        }
      };
    }
  });

  // node_modules/core-js/internals/descriptors.js
  var require_descriptors = __commonJS({
    "node_modules/core-js/internals/descriptors.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = !fails(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] !== 7;
      });
    }
  });

  // node_modules/core-js/internals/function-bind-native.js
  var require_function_bind_native = __commonJS({
    "node_modules/core-js/internals/function-bind-native.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = !fails(function() {
        var test = function() {
        }.bind();
        return typeof test != "function" || test.hasOwnProperty("prototype");
      });
    }
  });

  // node_modules/core-js/internals/function-call.js
  var require_function_call = __commonJS({
    "node_modules/core-js/internals/function-call.js"(exports, module) {
      "use strict";
      var NATIVE_BIND = require_function_bind_native();
      var call = Function.prototype.call;
      module.exports = NATIVE_BIND ? call.bind(call) : function() {
        return call.apply(call, arguments);
      };
    }
  });

  // node_modules/core-js/internals/object-property-is-enumerable.js
  var require_object_property_is_enumerable = __commonJS({
    "node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
      "use strict";
      var $propertyIsEnumerable = {}.propertyIsEnumerable;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
      exports.f = NASHORN_BUG ? function propertyIsEnumerable2(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : $propertyIsEnumerable;
    }
  });

  // node_modules/core-js/internals/create-property-descriptor.js
  var require_create_property_descriptor = __commonJS({
    "node_modules/core-js/internals/create-property-descriptor.js"(exports, module) {
      "use strict";
      module.exports = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value
        };
      };
    }
  });

  // node_modules/core-js/internals/function-uncurry-this.js
  var require_function_uncurry_this = __commonJS({
    "node_modules/core-js/internals/function-uncurry-this.js"(exports, module) {
      "use strict";
      var NATIVE_BIND = require_function_bind_native();
      var FunctionPrototype = Function.prototype;
      var call = FunctionPrototype.call;
      var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
      module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn2) {
        return function() {
          return call.apply(fn2, arguments);
        };
      };
    }
  });

  // node_modules/core-js/internals/classof-raw.js
  var require_classof_raw = __commonJS({
    "node_modules/core-js/internals/classof-raw.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var toString = uncurryThis({}.toString);
      var stringSlice = uncurryThis("".slice);
      module.exports = function(it) {
        return stringSlice(toString(it), 8, -1);
      };
    }
  });

  // node_modules/core-js/internals/indexed-object.js
  var require_indexed_object = __commonJS({
    "node_modules/core-js/internals/indexed-object.js"(exports, module) {
      "use strict";
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
    }
  });

  // node_modules/core-js/internals/is-null-or-undefined.js
  var require_is_null_or_undefined = __commonJS({
    "node_modules/core-js/internals/is-null-or-undefined.js"(exports, module) {
      "use strict";
      module.exports = function(it) {
        return it === null || it === void 0;
      };
    }
  });

  // node_modules/core-js/internals/require-object-coercible.js
  var require_require_object_coercible = __commonJS({
    "node_modules/core-js/internals/require-object-coercible.js"(exports, module) {
      "use strict";
      var isNullOrUndefined = require_is_null_or_undefined();
      var $TypeError = TypeError;
      module.exports = function(it) {
        if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
        return it;
      };
    }
  });

  // node_modules/core-js/internals/to-indexed-object.js
  var require_to_indexed_object = __commonJS({
    "node_modules/core-js/internals/to-indexed-object.js"(exports, module) {
      "use strict";
      var IndexedObject = require_indexed_object();
      var requireObjectCoercible = require_require_object_coercible();
      module.exports = function(it) {
        return IndexedObject(requireObjectCoercible(it));
      };
    }
  });

  // node_modules/core-js/internals/is-callable.js
  var require_is_callable = __commonJS({
    "node_modules/core-js/internals/is-callable.js"(exports, module) {
      "use strict";
      var documentAll = typeof document == "object" && document.all;
      module.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
        return typeof argument == "function" || argument === documentAll;
      } : function(argument) {
        return typeof argument == "function";
      };
    }
  });

  // node_modules/core-js/internals/is-object.js
  var require_is_object = __commonJS({
    "node_modules/core-js/internals/is-object.js"(exports, module) {
      "use strict";
      var isCallable = require_is_callable();
      module.exports = function(it) {
        return typeof it == "object" ? it !== null : isCallable(it);
      };
    }
  });

  // node_modules/core-js/internals/get-built-in.js
  var require_get_built_in = __commonJS({
    "node_modules/core-js/internals/get-built-in.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var isCallable = require_is_callable();
      var aFunction = function(argument) {
        return isCallable(argument) ? argument : void 0;
      };
      module.exports = function(namespace, method) {
        return arguments.length < 2 ? aFunction(globalThis2[namespace]) : globalThis2[namespace] && globalThis2[namespace][method];
      };
    }
  });

  // node_modules/core-js/internals/object-is-prototype-of.js
  var require_object_is_prototype_of = __commonJS({
    "node_modules/core-js/internals/object-is-prototype-of.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      module.exports = uncurryThis({}.isPrototypeOf);
    }
  });

  // node_modules/core-js/internals/environment-user-agent.js
  var require_environment_user_agent = __commonJS({
    "node_modules/core-js/internals/environment-user-agent.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var navigator2 = globalThis2.navigator;
      var userAgent = navigator2 && navigator2.userAgent;
      module.exports = userAgent ? String(userAgent) : "";
    }
  });

  // node_modules/core-js/internals/environment-v8-version.js
  var require_environment_v8_version = __commonJS({
    "node_modules/core-js/internals/environment-v8-version.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var userAgent = require_environment_user_agent();
      var process = globalThis2.process;
      var Deno2 = globalThis2.Deno;
      var versions = process && process.versions || Deno2 && Deno2.version;
      var v8 = versions && versions.v8;
      var match;
      var version;
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
    }
  });

  // node_modules/core-js/internals/symbol-constructor-detection.js
  var require_symbol_constructor_detection = __commonJS({
    "node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module) {
      "use strict";
      var V8_VERSION = require_environment_v8_version();
      var fails = require_fails();
      var globalThis2 = require_global_this();
      var $String = globalThis2.String;
      module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
        var symbol = Symbol("symbol detection");
        return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
        !Symbol.sham && V8_VERSION && V8_VERSION < 41;
      });
    }
  });

  // node_modules/core-js/internals/use-symbol-as-uid.js
  var require_use_symbol_as_uid = __commonJS({
    "node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module) {
      "use strict";
      var NATIVE_SYMBOL = require_symbol_constructor_detection();
      module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }
  });

  // node_modules/core-js/internals/is-symbol.js
  var require_is_symbol = __commonJS({
    "node_modules/core-js/internals/is-symbol.js"(exports, module) {
      "use strict";
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
    }
  });

  // node_modules/core-js/internals/try-to-string.js
  var require_try_to_string = __commonJS({
    "node_modules/core-js/internals/try-to-string.js"(exports, module) {
      "use strict";
      var $String = String;
      module.exports = function(argument) {
        try {
          return $String(argument);
        } catch (error) {
          return "Object";
        }
      };
    }
  });

  // node_modules/core-js/internals/a-callable.js
  var require_a_callable = __commonJS({
    "node_modules/core-js/internals/a-callable.js"(exports, module) {
      "use strict";
      var isCallable = require_is_callable();
      var tryToString = require_try_to_string();
      var $TypeError = TypeError;
      module.exports = function(argument) {
        if (isCallable(argument)) return argument;
        throw new $TypeError(tryToString(argument) + " is not a function");
      };
    }
  });

  // node_modules/core-js/internals/get-method.js
  var require_get_method = __commonJS({
    "node_modules/core-js/internals/get-method.js"(exports, module) {
      "use strict";
      var aCallable = require_a_callable();
      var isNullOrUndefined = require_is_null_or_undefined();
      module.exports = function(V, P) {
        var func = V[P];
        return isNullOrUndefined(func) ? void 0 : aCallable(func);
      };
    }
  });

  // node_modules/core-js/internals/ordinary-to-primitive.js
  var require_ordinary_to_primitive = __commonJS({
    "node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module) {
      "use strict";
      var call = require_function_call();
      var isCallable = require_is_callable();
      var isObject2 = require_is_object();
      var $TypeError = TypeError;
      module.exports = function(input, pref) {
        var fn2, val;
        if (pref === "string" && isCallable(fn2 = input.toString) && !isObject2(val = call(fn2, input))) return val;
        if (isCallable(fn2 = input.valueOf) && !isObject2(val = call(fn2, input))) return val;
        if (pref !== "string" && isCallable(fn2 = input.toString) && !isObject2(val = call(fn2, input))) return val;
        throw new $TypeError("Can't convert object to primitive value");
      };
    }
  });

  // node_modules/core-js/internals/is-pure.js
  var require_is_pure = __commonJS({
    "node_modules/core-js/internals/is-pure.js"(exports, module) {
      "use strict";
      module.exports = false;
    }
  });

  // node_modules/core-js/internals/define-global-property.js
  var require_define_global_property = __commonJS({
    "node_modules/core-js/internals/define-global-property.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var defineProperty = Object.defineProperty;
      module.exports = function(key, value) {
        try {
          defineProperty(globalThis2, key, { value, configurable: true, writable: true });
        } catch (error) {
          globalThis2[key] = value;
        }
        return value;
      };
    }
  });

  // node_modules/core-js/internals/shared-store.js
  var require_shared_store = __commonJS({
    "node_modules/core-js/internals/shared-store.js"(exports, module) {
      "use strict";
      var IS_PURE = require_is_pure();
      var globalThis2 = require_global_this();
      var defineGlobalProperty = require_define_global_property();
      var SHARED = "__core-js_shared__";
      var store = module.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
      (store.versions || (store.versions = [])).push({
        version: "3.38.1",
        mode: IS_PURE ? "pure" : "global",
        copyright: "\xA9 2014-2024 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
        source: "https://github.com/zloirock/core-js"
      });
    }
  });

  // node_modules/core-js/internals/shared.js
  var require_shared = __commonJS({
    "node_modules/core-js/internals/shared.js"(exports, module) {
      "use strict";
      var store = require_shared_store();
      module.exports = function(key, value) {
        return store[key] || (store[key] = value || {});
      };
    }
  });

  // node_modules/core-js/internals/to-object.js
  var require_to_object = __commonJS({
    "node_modules/core-js/internals/to-object.js"(exports, module) {
      "use strict";
      var requireObjectCoercible = require_require_object_coercible();
      var $Object = Object;
      module.exports = function(argument) {
        return $Object(requireObjectCoercible(argument));
      };
    }
  });

  // node_modules/core-js/internals/has-own-property.js
  var require_has_own_property = __commonJS({
    "node_modules/core-js/internals/has-own-property.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var toObject = require_to_object();
      var hasOwnProperty2 = uncurryThis({}.hasOwnProperty);
      module.exports = Object.hasOwn || function hasOwn(it, key) {
        return hasOwnProperty2(toObject(it), key);
      };
    }
  });

  // node_modules/core-js/internals/uid.js
  var require_uid = __commonJS({
    "node_modules/core-js/internals/uid.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var id = 0;
      var postfix = Math.random();
      var toString = uncurryThis(1 .toString);
      module.exports = function(key) {
        return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
      };
    }
  });

  // node_modules/core-js/internals/well-known-symbol.js
  var require_well_known_symbol = __commonJS({
    "node_modules/core-js/internals/well-known-symbol.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var shared = require_shared();
      var hasOwn = require_has_own_property();
      var uid = require_uid();
      var NATIVE_SYMBOL = require_symbol_constructor_detection();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var Symbol2 = globalThis2.Symbol;
      var WellKnownSymbolsStore = shared("wks");
      var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
      module.exports = function(name) {
        if (!hasOwn(WellKnownSymbolsStore, name)) {
          WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
        }
        return WellKnownSymbolsStore[name];
      };
    }
  });

  // node_modules/core-js/internals/to-primitive.js
  var require_to_primitive = __commonJS({
    "node_modules/core-js/internals/to-primitive.js"(exports, module) {
      "use strict";
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
    }
  });

  // node_modules/core-js/internals/to-property-key.js
  var require_to_property_key = __commonJS({
    "node_modules/core-js/internals/to-property-key.js"(exports, module) {
      "use strict";
      var toPrimitive = require_to_primitive();
      var isSymbol = require_is_symbol();
      module.exports = function(argument) {
        var key = toPrimitive(argument, "string");
        return isSymbol(key) ? key : key + "";
      };
    }
  });

  // node_modules/core-js/internals/document-create-element.js
  var require_document_create_element = __commonJS({
    "node_modules/core-js/internals/document-create-element.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var isObject2 = require_is_object();
      var document2 = globalThis2.document;
      var EXISTS = isObject2(document2) && isObject2(document2.createElement);
      module.exports = function(it) {
        return EXISTS ? document2.createElement(it) : {};
      };
    }
  });

  // node_modules/core-js/internals/ie8-dom-define.js
  var require_ie8_dom_define = __commonJS({
    "node_modules/core-js/internals/ie8-dom-define.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      var createElement = require_document_create_element();
      module.exports = !DESCRIPTORS && !fails(function() {
        return Object.defineProperty(createElement("div"), "a", {
          get: function() {
            return 7;
          }
        }).a !== 7;
      });
    }
  });

  // node_modules/core-js/internals/object-get-own-property-descriptor.js
  var require_object_get_own_property_descriptor = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var call = require_function_call();
      var propertyIsEnumerableModule = require_object_property_is_enumerable();
      var createPropertyDescriptor = require_create_property_descriptor();
      var toIndexedObject = require_to_indexed_object();
      var toPropertyKey = require_to_property_key();
      var hasOwn = require_has_own_property();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPropertyKey(P);
        if (IE8_DOM_DEFINE) try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
        }
        if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
      };
    }
  });

  // node_modules/core-js/internals/v8-prototype-define-bug.js
  var require_v8_prototype_define_bug = __commonJS({
    "node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      module.exports = DESCRIPTORS && fails(function() {
        return Object.defineProperty(function() {
        }, "prototype", {
          value: 42,
          writable: false
        }).prototype !== 42;
      });
    }
  });

  // node_modules/core-js/internals/an-object.js
  var require_an_object = __commonJS({
    "node_modules/core-js/internals/an-object.js"(exports, module) {
      "use strict";
      var isObject2 = require_is_object();
      var $String = String;
      var $TypeError = TypeError;
      module.exports = function(argument) {
        if (isObject2(argument)) return argument;
        throw new $TypeError($String(argument) + " is not an object");
      };
    }
  });

  // node_modules/core-js/internals/object-define-property.js
  var require_object_define_property = __commonJS({
    "node_modules/core-js/internals/object-define-property.js"(exports) {
      "use strict";
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
    }
  });

  // node_modules/core-js/internals/create-non-enumerable-property.js
  var require_create_non_enumerable_property = __commonJS({
    "node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module.exports = DESCRIPTORS ? function(object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
      } : function(object, key, value) {
        object[key] = value;
        return object;
      };
    }
  });

  // node_modules/core-js/internals/function-name.js
  var require_function_name = __commonJS({
    "node_modules/core-js/internals/function-name.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var hasOwn = require_has_own_property();
      var FunctionPrototype = Function.prototype;
      var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
      var EXISTS = hasOwn(FunctionPrototype, "name");
      var PROPER = EXISTS && function something() {
      }.name === "something";
      var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
      module.exports = {
        EXISTS,
        PROPER,
        CONFIGURABLE
      };
    }
  });

  // node_modules/core-js/internals/inspect-source.js
  var require_inspect_source = __commonJS({
    "node_modules/core-js/internals/inspect-source.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var isCallable = require_is_callable();
      var store = require_shared_store();
      var functionToString = uncurryThis(Function.toString);
      if (!isCallable(store.inspectSource)) {
        store.inspectSource = function(it) {
          return functionToString(it);
        };
      }
      module.exports = store.inspectSource;
    }
  });

  // node_modules/core-js/internals/weak-map-basic-detection.js
  var require_weak_map_basic_detection = __commonJS({
    "node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var isCallable = require_is_callable();
      var WeakMap2 = globalThis2.WeakMap;
      module.exports = isCallable(WeakMap2) && /native code/.test(String(WeakMap2));
    }
  });

  // node_modules/core-js/internals/shared-key.js
  var require_shared_key = __commonJS({
    "node_modules/core-js/internals/shared-key.js"(exports, module) {
      "use strict";
      var shared = require_shared();
      var uid = require_uid();
      var keys2 = shared("keys");
      module.exports = function(key) {
        return keys2[key] || (keys2[key] = uid(key));
      };
    }
  });

  // node_modules/core-js/internals/hidden-keys.js
  var require_hidden_keys = __commonJS({
    "node_modules/core-js/internals/hidden-keys.js"(exports, module) {
      "use strict";
      module.exports = {};
    }
  });

  // node_modules/core-js/internals/internal-state.js
  var require_internal_state = __commonJS({
    "node_modules/core-js/internals/internal-state.js"(exports, module) {
      "use strict";
      var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
      var globalThis2 = require_global_this();
      var isObject2 = require_is_object();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var hasOwn = require_has_own_property();
      var shared = require_shared_store();
      var sharedKey = require_shared_key();
      var hiddenKeys = require_hidden_keys();
      var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
      var TypeError2 = globalThis2.TypeError;
      var WeakMap2 = globalThis2.WeakMap;
      var set;
      var get;
      var has;
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
      if (NATIVE_WEAK_MAP || shared.state) {
        store = shared.state || (shared.state = new WeakMap2());
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
        STATE = sharedKey("state");
        hiddenKeys[STATE] = true;
        set = function(it, metadata) {
          if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          createNonEnumerableProperty(it, STATE, metadata);
          return metadata;
        };
        get = function(it) {
          return hasOwn(it, STATE) ? it[STATE] : {};
        };
        has = function(it) {
          return hasOwn(it, STATE);
        };
      }
      var store;
      var STATE;
      module.exports = {
        set,
        get,
        has,
        enforce,
        getterFor
      };
    }
  });

  // node_modules/core-js/internals/make-built-in.js
  var require_make_built_in = __commonJS({
    "node_modules/core-js/internals/make-built-in.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var isCallable = require_is_callable();
      var hasOwn = require_has_own_property();
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
        if (stringSlice($String(name), 0, 7) === "Symbol(") {
          name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
        }
        if (options && options.getter) name = "get " + name;
        if (options && options.setter) name = "set " + name;
        if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
          if (DESCRIPTORS) defineProperty(value, "name", { value: name, configurable: true });
          else value.name = name;
        }
        if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
          defineProperty(value, "length", { value: options.arity });
        }
        try {
          if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", { writable: false });
          } else if (value.prototype) value.prototype = void 0;
        } catch (error) {
        }
        var state = enforceInternalState(value);
        if (!hasOwn(state, "source")) {
          state.source = join(TEMPLATE, typeof name == "string" ? name : "");
        }
        return value;
      };
      Function.prototype.toString = makeBuiltIn(function toString() {
        return isCallable(this) && getInternalState(this).source || inspectSource(this);
      }, "toString");
    }
  });

  // node_modules/core-js/internals/define-built-in.js
  var require_define_built_in = __commonJS({
    "node_modules/core-js/internals/define-built-in.js"(exports, module) {
      "use strict";
      var isCallable = require_is_callable();
      var definePropertyModule = require_object_define_property();
      var makeBuiltIn = require_make_built_in();
      var defineGlobalProperty = require_define_global_property();
      module.exports = function(O, key, value, options) {
        if (!options) options = {};
        var simple = options.enumerable;
        var name = options.name !== void 0 ? options.name : key;
        if (isCallable(value)) makeBuiltIn(value, name, options);
        if (options.global) {
          if (simple) O[key] = value;
          else defineGlobalProperty(key, value);
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
    }
  });

  // node_modules/core-js/internals/math-trunc.js
  var require_math_trunc = __commonJS({
    "node_modules/core-js/internals/math-trunc.js"(exports, module) {
      "use strict";
      var ceil = Math.ceil;
      var floor = Math.floor;
      module.exports = Math.trunc || function trunc(x) {
        var n = +x;
        return (n > 0 ? floor : ceil)(n);
      };
    }
  });

  // node_modules/core-js/internals/to-integer-or-infinity.js
  var require_to_integer_or_infinity = __commonJS({
    "node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module) {
      "use strict";
      var trunc = require_math_trunc();
      module.exports = function(argument) {
        var number = +argument;
        return number !== number || number === 0 ? 0 : trunc(number);
      };
    }
  });

  // node_modules/core-js/internals/to-absolute-index.js
  var require_to_absolute_index = __commonJS({
    "node_modules/core-js/internals/to-absolute-index.js"(exports, module) {
      "use strict";
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var max = Math.max;
      var min = Math.min;
      module.exports = function(index, length) {
        var integer = toIntegerOrInfinity(index);
        return integer < 0 ? max(integer + length, 0) : min(integer, length);
      };
    }
  });

  // node_modules/core-js/internals/to-length.js
  var require_to_length = __commonJS({
    "node_modules/core-js/internals/to-length.js"(exports, module) {
      "use strict";
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var min = Math.min;
      module.exports = function(argument) {
        var len = toIntegerOrInfinity(argument);
        return len > 0 ? min(len, 9007199254740991) : 0;
      };
    }
  });

  // node_modules/core-js/internals/length-of-array-like.js
  var require_length_of_array_like = __commonJS({
    "node_modules/core-js/internals/length-of-array-like.js"(exports, module) {
      "use strict";
      var toLength = require_to_length();
      module.exports = function(obj) {
        return toLength(obj.length);
      };
    }
  });

  // node_modules/core-js/internals/array-includes.js
  var require_array_includes = __commonJS({
    "node_modules/core-js/internals/array-includes.js"(exports, module) {
      "use strict";
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
          else for (; length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
          }
          return !IS_INCLUDES && -1;
        };
      };
      module.exports = {
        // `Array.prototype.includes` method
        // https://tc39.es/ecma262/#sec-array.prototype.includes
        includes: createMethod(true),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod(false)
      };
    }
  });

  // node_modules/core-js/internals/object-keys-internal.js
  var require_object_keys_internal = __commonJS({
    "node_modules/core-js/internals/object-keys-internal.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var hasOwn = require_has_own_property();
      var toIndexedObject = require_to_indexed_object();
      var indexOf = require_array_includes().indexOf;
      var hiddenKeys = require_hidden_keys();
      var push = uncurryThis([].push);
      module.exports = function(object, names) {
        var O = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
        while (names.length > i) if (hasOwn(O, key = names[i++])) {
          ~indexOf(result, key) || push(result, key);
        }
        return result;
      };
    }
  });

  // node_modules/core-js/internals/enum-bug-keys.js
  var require_enum_bug_keys = __commonJS({
    "node_modules/core-js/internals/enum-bug-keys.js"(exports, module) {
      "use strict";
      module.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ];
    }
  });

  // node_modules/core-js/internals/object-get-own-property-names.js
  var require_object_get_own_property_names = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
      "use strict";
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = enumBugKeys.concat("length", "prototype");
      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return internalObjectKeys(O, hiddenKeys);
      };
    }
  });

  // node_modules/core-js/internals/object-get-own-property-symbols.js
  var require_object_get_own_property_symbols = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
      "use strict";
      exports.f = Object.getOwnPropertySymbols;
    }
  });

  // node_modules/core-js/internals/own-keys.js
  var require_own_keys = __commonJS({
    "node_modules/core-js/internals/own-keys.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      var uncurryThis = require_function_uncurry_this();
      var getOwnPropertyNamesModule = require_object_get_own_property_names();
      var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
      var anObject = require_an_object();
      var concat = uncurryThis([].concat);
      module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
        var keys2 = getOwnPropertyNamesModule.f(anObject(it));
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return getOwnPropertySymbols ? concat(keys2, getOwnPropertySymbols(it)) : keys2;
      };
    }
  });

  // node_modules/core-js/internals/copy-constructor-properties.js
  var require_copy_constructor_properties = __commonJS({
    "node_modules/core-js/internals/copy-constructor-properties.js"(exports, module) {
      "use strict";
      var hasOwn = require_has_own_property();
      var ownKeys = require_own_keys();
      var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
      var definePropertyModule = require_object_define_property();
      module.exports = function(target, source, exceptions) {
        var keys2 = ownKeys(source);
        var defineProperty = definePropertyModule.f;
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        for (var i = 0; i < keys2.length; i++) {
          var key = keys2[i];
          if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
            defineProperty(target, key, getOwnPropertyDescriptor(source, key));
          }
        }
      };
    }
  });

  // node_modules/core-js/internals/is-forced.js
  var require_is_forced = __commonJS({
    "node_modules/core-js/internals/is-forced.js"(exports, module) {
      "use strict";
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
    }
  });

  // node_modules/core-js/internals/export.js
  var require_export = __commonJS({
    "node_modules/core-js/internals/export.js"(exports, module) {
      "use strict";
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
        if (GLOBAL) {
          target = globalThis2;
        } else if (STATIC) {
          target = globalThis2[TARGET] || defineGlobalProperty(TARGET, {});
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
            copyConstructorProperties(sourceProperty, targetProperty);
          }
          if (options.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty(sourceProperty, "sham", true);
          }
          defineBuiltIn(target, key, sourceProperty, options);
        }
      };
    }
  });

  // node_modules/core-js/internals/is-array.js
  var require_is_array = __commonJS({
    "node_modules/core-js/internals/is-array.js"(exports, module) {
      "use strict";
      var classof = require_classof_raw();
      module.exports = Array.isArray || function isArray2(argument) {
        return classof(argument) === "Array";
      };
    }
  });

  // node_modules/core-js/internals/array-set-length.js
  var require_array_set_length = __commonJS({
    "node_modules/core-js/internals/array-set-length.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var isArray2 = require_is_array();
      var $TypeError = TypeError;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function() {
        if (this !== void 0) return true;
        try {
          Object.defineProperty([], "length", { writable: false }).length = 1;
        } catch (error) {
          return error instanceof TypeError;
        }
      }();
      module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O, length) {
        if (isArray2(O) && !getOwnPropertyDescriptor(O, "length").writable) {
          throw new $TypeError("Cannot set read only .length");
        }
        return O.length = length;
      } : function(O, length) {
        return O.length = length;
      };
    }
  });

  // node_modules/core-js/internals/does-not-exceed-safe-integer.js
  var require_does_not_exceed_safe_integer = __commonJS({
    "node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports, module) {
      "use strict";
      var $TypeError = TypeError;
      var MAX_SAFE_INTEGER2 = 9007199254740991;
      module.exports = function(it) {
        if (it > MAX_SAFE_INTEGER2) throw $TypeError("Maximum allowed index exceeded");
        return it;
      };
    }
  });

  // node_modules/core-js/modules/es.array.push.js
  var require_es_array_push = __commonJS({
    "node_modules/core-js/modules/es.array.push.js"() {
      "use strict";
      var $ = require_export();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var setArrayLength = require_array_set_length();
      var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
      var fails = require_fails();
      var INCORRECT_TO_LENGTH = fails(function() {
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
      $({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        push: function push(item) {
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
    }
  });

  // node_modules/core-js/internals/define-built-in-accessor.js
  var require_define_built_in_accessor = __commonJS({
    "node_modules/core-js/internals/define-built-in-accessor.js"(exports, module) {
      "use strict";
      var makeBuiltIn = require_make_built_in();
      var defineProperty = require_object_define_property();
      module.exports = function(target, name, descriptor) {
        if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
        if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
        return defineProperty.f(target, name, descriptor);
      };
    }
  });

  // node_modules/core-js/internals/function-uncurry-this-clause.js
  var require_function_uncurry_this_clause = __commonJS({
    "node_modules/core-js/internals/function-uncurry-this-clause.js"(exports, module) {
      "use strict";
      var classofRaw = require_classof_raw();
      var uncurryThis = require_function_uncurry_this();
      module.exports = function(fn2) {
        if (classofRaw(fn2) === "Function") return uncurryThis(fn2);
      };
    }
  });

  // node_modules/core-js/internals/function-uncurry-this-accessor.js
  var require_function_uncurry_this_accessor = __commonJS({
    "node_modules/core-js/internals/function-uncurry-this-accessor.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var aCallable = require_a_callable();
      module.exports = function(object, key, method) {
        try {
          return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
        } catch (error) {
        }
      };
    }
  });

  // node_modules/core-js/internals/array-buffer-byte-length.js
  var require_array_buffer_byte_length = __commonJS({
    "node_modules/core-js/internals/array-buffer-byte-length.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var uncurryThisAccessor = require_function_uncurry_this_accessor();
      var classof = require_classof_raw();
      var ArrayBuffer2 = globalThis2.ArrayBuffer;
      var TypeError2 = globalThis2.TypeError;
      module.exports = ArrayBuffer2 && uncurryThisAccessor(ArrayBuffer2.prototype, "byteLength", "get") || function(O) {
        if (classof(O) !== "ArrayBuffer") throw new TypeError2("ArrayBuffer expected");
        return O.byteLength;
      };
    }
  });

  // node_modules/core-js/internals/array-buffer-is-detached.js
  var require_array_buffer_is_detached = __commonJS({
    "node_modules/core-js/internals/array-buffer-is-detached.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var uncurryThis = require_function_uncurry_this_clause();
      var arrayBufferByteLength = require_array_buffer_byte_length();
      var ArrayBuffer2 = globalThis2.ArrayBuffer;
      var ArrayBufferPrototype = ArrayBuffer2 && ArrayBuffer2.prototype;
      var slice = ArrayBufferPrototype && uncurryThis(ArrayBufferPrototype.slice);
      module.exports = function(O) {
        if (arrayBufferByteLength(O) !== 0) return false;
        if (!slice) return false;
        try {
          slice(O, 0, 0);
          return false;
        } catch (error) {
          return true;
        }
      };
    }
  });

  // node_modules/core-js/modules/es.array-buffer.detached.js
  var require_es_array_buffer_detached = __commonJS({
    "node_modules/core-js/modules/es.array-buffer.detached.js"() {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var defineBuiltInAccessor = require_define_built_in_accessor();
      var isDetached = require_array_buffer_is_detached();
      var ArrayBufferPrototype = ArrayBuffer.prototype;
      if (DESCRIPTORS && !("detached" in ArrayBufferPrototype)) {
        defineBuiltInAccessor(ArrayBufferPrototype, "detached", {
          configurable: true,
          get: function detached() {
            return isDetached(this);
          }
        });
      }
    }
  });

  // node_modules/core-js/internals/to-index.js
  var require_to_index = __commonJS({
    "node_modules/core-js/internals/to-index.js"(exports, module) {
      "use strict";
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
    }
  });

  // node_modules/core-js/internals/array-buffer-not-detached.js
  var require_array_buffer_not_detached = __commonJS({
    "node_modules/core-js/internals/array-buffer-not-detached.js"(exports, module) {
      "use strict";
      var isDetached = require_array_buffer_is_detached();
      var $TypeError = TypeError;
      module.exports = function(it) {
        if (isDetached(it)) throw new $TypeError("ArrayBuffer is detached");
        return it;
      };
    }
  });

  // node_modules/core-js/internals/environment.js
  var require_environment = __commonJS({
    "node_modules/core-js/internals/environment.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var userAgent = require_environment_user_agent();
      var classof = require_classof_raw();
      var userAgentStartsWith = function(string) {
        return userAgent.slice(0, string.length) === string;
      };
      module.exports = function() {
        if (userAgentStartsWith("Bun/")) return "BUN";
        if (userAgentStartsWith("Cloudflare-Workers")) return "CLOUDFLARE";
        if (userAgentStartsWith("Deno/")) return "DENO";
        if (userAgentStartsWith("Node.js/")) return "NODE";
        if (globalThis2.Bun && typeof Bun.version == "string") return "BUN";
        if (globalThis2.Deno && typeof Deno.version == "object") return "DENO";
        if (classof(globalThis2.process) === "process") return "NODE";
        if (globalThis2.window && globalThis2.document) return "BROWSER";
        return "REST";
      }();
    }
  });

  // node_modules/core-js/internals/environment-is-node.js
  var require_environment_is_node = __commonJS({
    "node_modules/core-js/internals/environment-is-node.js"(exports, module) {
      "use strict";
      var ENVIRONMENT = require_environment();
      module.exports = ENVIRONMENT === "NODE";
    }
  });

  // node_modules/core-js/internals/get-built-in-node-module.js
  var require_get_built_in_node_module = __commonJS({
    "node_modules/core-js/internals/get-built-in-node-module.js"(exports, module) {
      "use strict";
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
    }
  });

  // node_modules/core-js/internals/structured-clone-proper-transfer.js
  var require_structured_clone_proper_transfer = __commonJS({
    "node_modules/core-js/internals/structured-clone-proper-transfer.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var fails = require_fails();
      var V8 = require_environment_v8_version();
      var ENVIRONMENT = require_environment();
      var structuredClone = globalThis2.structuredClone;
      module.exports = !!structuredClone && !fails(function() {
        if (ENVIRONMENT === "DENO" && V8 > 92 || ENVIRONMENT === "NODE" && V8 > 94 || ENVIRONMENT === "BROWSER" && V8 > 97) return false;
        var buffer = new ArrayBuffer(8);
        var clone = structuredClone(buffer, { transfer: [buffer] });
        return buffer.byteLength !== 0 || clone.byteLength !== 8;
      });
    }
  });

  // node_modules/core-js/internals/detach-transferable.js
  var require_detach_transferable = __commonJS({
    "node_modules/core-js/internals/detach-transferable.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var getBuiltInNodeModule = require_get_built_in_node_module();
      var PROPER_STRUCTURED_CLONE_TRANSFER = require_structured_clone_proper_transfer();
      var structuredClone = globalThis2.structuredClone;
      var $ArrayBuffer = globalThis2.ArrayBuffer;
      var $MessageChannel = globalThis2.MessageChannel;
      var detach = false;
      var WorkerThreads;
      var channel;
      var buffer;
      var $detach;
      if (PROPER_STRUCTURED_CLONE_TRANSFER) {
        detach = function(transferable) {
          structuredClone(transferable, { transfer: [transferable] });
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
      module.exports = detach;
    }
  });

  // node_modules/core-js/internals/array-buffer-transfer.js
  var require_array_buffer_transfer = __commonJS({
    "node_modules/core-js/internals/array-buffer-transfer.js"(exports, module) {
      "use strict";
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
        if (byteLength >= newByteLength && (!preserveResizability || fixedLength)) {
          newBuffer = slice(arrayBuffer, 0, newByteLength);
        } else {
          var options = preserveResizability && !fixedLength && maxByteLength ? { maxByteLength: maxByteLength(arrayBuffer) } : void 0;
          newBuffer = new ArrayBuffer2(newByteLength, options);
          var a = new DataView2(arrayBuffer);
          var b = new DataView2(newBuffer);
          var copyLength = min(newByteLength, byteLength);
          for (var i = 0; i < copyLength; i++) setInt8(b, i, getInt8(a, i));
        }
        if (!PROPER_STRUCTURED_CLONE_TRANSFER) detachTransferable(arrayBuffer);
        return newBuffer;
      };
    }
  });

  // node_modules/core-js/modules/es.array-buffer.transfer.js
  var require_es_array_buffer_transfer = __commonJS({
    "node_modules/core-js/modules/es.array-buffer.transfer.js"() {
      "use strict";
      var $ = require_export();
      var $transfer = require_array_buffer_transfer();
      if ($transfer) $({ target: "ArrayBuffer", proto: true }, {
        transfer: function transfer() {
          return $transfer(this, arguments.length ? arguments[0] : void 0, true);
        }
      });
    }
  });

  // node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js
  var require_es_array_buffer_transfer_to_fixed_length = __commonJS({
    "node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js"() {
      "use strict";
      var $ = require_export();
      var $transfer = require_array_buffer_transfer();
      if ($transfer) $({ target: "ArrayBuffer", proto: true }, {
        transferToFixedLength: function transferToFixedLength() {
          return $transfer(this, arguments.length ? arguments[0] : void 0, false);
        }
      });
    }
  });

  // node_modules/lodash/lodash.js
  var require_lodash = __commonJS({
    "node_modules/lodash/lodash.js"(exports, module) {
      "use strict";
      (function() {
        var undefined2;
        var VERSION = "4.17.21";
        var LARGE_ARRAY_SIZE2 = 200;
        var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
        var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
        var MAX_MEMOIZE_SIZE = 500;
        var PLACEHOLDER = "__lodash_placeholder__";
        var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
        var COMPARE_PARTIAL_FLAG2 = 1, COMPARE_UNORDERED_FLAG2 = 2;
        var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
        var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
        var HOT_COUNT = 800, HOT_SPAN = 16;
        var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
        var INFINITY = 1 / 0, MAX_SAFE_INTEGER2 = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
        var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
        var wrapFlags = [
          ["ary", WRAP_ARY_FLAG],
          ["bind", WRAP_BIND_FLAG],
          ["bindKey", WRAP_BIND_KEY_FLAG],
          ["curry", WRAP_CURRY_FLAG],
          ["curryRight", WRAP_CURRY_RIGHT_FLAG],
          ["flip", WRAP_FLIP_FLAG],
          ["partial", WRAP_PARTIAL_FLAG],
          ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
          ["rearg", WRAP_REARG_FLAG]
        ];
        var argsTag2 = "[object Arguments]", arrayTag2 = "[object Array]", asyncTag2 = "[object AsyncFunction]", boolTag2 = "[object Boolean]", dateTag2 = "[object Date]", domExcTag = "[object DOMException]", errorTag2 = "[object Error]", funcTag2 = "[object Function]", genTag2 = "[object GeneratorFunction]", mapTag2 = "[object Map]", numberTag2 = "[object Number]", nullTag2 = "[object Null]", objectTag2 = "[object Object]", promiseTag2 = "[object Promise]", proxyTag2 = "[object Proxy]", regexpTag2 = "[object RegExp]", setTag2 = "[object Set]", stringTag2 = "[object String]", symbolTag2 = "[object Symbol]", undefinedTag2 = "[object Undefined]", weakMapTag2 = "[object WeakMap]", weakSetTag = "[object WeakSet]";
        var arrayBufferTag2 = "[object ArrayBuffer]", dataViewTag2 = "[object DataView]", float32Tag2 = "[object Float32Array]", float64Tag2 = "[object Float64Array]", int8Tag2 = "[object Int8Array]", int16Tag2 = "[object Int16Array]", int32Tag2 = "[object Int32Array]", uint8Tag2 = "[object Uint8Array]", uint8ClampedTag2 = "[object Uint8ClampedArray]", uint16Tag2 = "[object Uint16Array]", uint32Tag2 = "[object Uint32Array]";
        var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
        var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
        var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
        var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
        var reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar2.source);
        var reTrimStart = /^\s+/;
        var reWhitespace = /\s/;
        var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
        var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
        var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
        var reEscapeChar = /\\(\\)?/g;
        var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
        var reFlags = /\w*$/;
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        var reIsBinary = /^0b[01]+$/i;
        var reIsHostCtor2 = /^\[object .+?Constructor\]$/;
        var reIsOctal = /^0o[0-7]+$/i;
        var reIsUint2 = /^(?:0|[1-9]\d*)$/;
        var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
        var reNoMatch = /($^)/;
        var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
        var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
        var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
        var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
        var reApos = RegExp(rsApos, "g");
        var reComboMark = RegExp(rsCombo, "g");
        var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
        var reUnicodeWord = RegExp([
          rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
          rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
          rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
          rsUpper + "+" + rsOptContrUpper,
          rsOrdUpper,
          rsOrdLower,
          rsDigits,
          rsEmoji
        ].join("|"), "g");
        var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
        var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
        var contextProps = [
          "Array",
          "Buffer",
          "DataView",
          "Date",
          "Error",
          "Float32Array",
          "Float64Array",
          "Function",
          "Int8Array",
          "Int16Array",
          "Int32Array",
          "Map",
          "Math",
          "Object",
          "Promise",
          "RegExp",
          "Set",
          "String",
          "Symbol",
          "TypeError",
          "Uint8Array",
          "Uint8ClampedArray",
          "Uint16Array",
          "Uint32Array",
          "WeakMap",
          "_",
          "clearTimeout",
          "isFinite",
          "parseInt",
          "setTimeout"
        ];
        var templateCounter = -1;
        var typedArrayTags2 = {};
        typedArrayTags2[float32Tag2] = typedArrayTags2[float64Tag2] = typedArrayTags2[int8Tag2] = typedArrayTags2[int16Tag2] = typedArrayTags2[int32Tag2] = typedArrayTags2[uint8Tag2] = typedArrayTags2[uint8ClampedTag2] = typedArrayTags2[uint16Tag2] = typedArrayTags2[uint32Tag2] = true;
        typedArrayTags2[argsTag2] = typedArrayTags2[arrayTag2] = typedArrayTags2[arrayBufferTag2] = typedArrayTags2[boolTag2] = typedArrayTags2[dataViewTag2] = typedArrayTags2[dateTag2] = typedArrayTags2[errorTag2] = typedArrayTags2[funcTag2] = typedArrayTags2[mapTag2] = typedArrayTags2[numberTag2] = typedArrayTags2[objectTag2] = typedArrayTags2[regexpTag2] = typedArrayTags2[setTag2] = typedArrayTags2[stringTag2] = typedArrayTags2[weakMapTag2] = false;
        var cloneableTags = {};
        cloneableTags[argsTag2] = cloneableTags[arrayTag2] = cloneableTags[arrayBufferTag2] = cloneableTags[dataViewTag2] = cloneableTags[boolTag2] = cloneableTags[dateTag2] = cloneableTags[float32Tag2] = cloneableTags[float64Tag2] = cloneableTags[int8Tag2] = cloneableTags[int16Tag2] = cloneableTags[int32Tag2] = cloneableTags[mapTag2] = cloneableTags[numberTag2] = cloneableTags[objectTag2] = cloneableTags[regexpTag2] = cloneableTags[setTag2] = cloneableTags[stringTag2] = cloneableTags[symbolTag2] = cloneableTags[uint8Tag2] = cloneableTags[uint8ClampedTag2] = cloneableTags[uint16Tag2] = cloneableTags[uint32Tag2] = true;
        cloneableTags[errorTag2] = cloneableTags[funcTag2] = cloneableTags[weakMapTag2] = false;
        var deburredLetters = {
          // Latin-1 Supplement block.
          "\xC0": "A",
          "\xC1": "A",
          "\xC2": "A",
          "\xC3": "A",
          "\xC4": "A",
          "\xC5": "A",
          "\xE0": "a",
          "\xE1": "a",
          "\xE2": "a",
          "\xE3": "a",
          "\xE4": "a",
          "\xE5": "a",
          "\xC7": "C",
          "\xE7": "c",
          "\xD0": "D",
          "\xF0": "d",
          "\xC8": "E",
          "\xC9": "E",
          "\xCA": "E",
          "\xCB": "E",
          "\xE8": "e",
          "\xE9": "e",
          "\xEA": "e",
          "\xEB": "e",
          "\xCC": "I",
          "\xCD": "I",
          "\xCE": "I",
          "\xCF": "I",
          "\xEC": "i",
          "\xED": "i",
          "\xEE": "i",
          "\xEF": "i",
          "\xD1": "N",
          "\xF1": "n",
          "\xD2": "O",
          "\xD3": "O",
          "\xD4": "O",
          "\xD5": "O",
          "\xD6": "O",
          "\xD8": "O",
          "\xF2": "o",
          "\xF3": "o",
          "\xF4": "o",
          "\xF5": "o",
          "\xF6": "o",
          "\xF8": "o",
          "\xD9": "U",
          "\xDA": "U",
          "\xDB": "U",
          "\xDC": "U",
          "\xF9": "u",
          "\xFA": "u",
          "\xFB": "u",
          "\xFC": "u",
          "\xDD": "Y",
          "\xFD": "y",
          "\xFF": "y",
          "\xC6": "Ae",
          "\xE6": "ae",
          "\xDE": "Th",
          "\xFE": "th",
          "\xDF": "ss",
          // Latin Extended-A block.
          "\u0100": "A",
          "\u0102": "A",
          "\u0104": "A",
          "\u0101": "a",
          "\u0103": "a",
          "\u0105": "a",
          "\u0106": "C",
          "\u0108": "C",
          "\u010A": "C",
          "\u010C": "C",
          "\u0107": "c",
          "\u0109": "c",
          "\u010B": "c",
          "\u010D": "c",
          "\u010E": "D",
          "\u0110": "D",
          "\u010F": "d",
          "\u0111": "d",
          "\u0112": "E",
          "\u0114": "E",
          "\u0116": "E",
          "\u0118": "E",
          "\u011A": "E",
          "\u0113": "e",
          "\u0115": "e",
          "\u0117": "e",
          "\u0119": "e",
          "\u011B": "e",
          "\u011C": "G",
          "\u011E": "G",
          "\u0120": "G",
          "\u0122": "G",
          "\u011D": "g",
          "\u011F": "g",
          "\u0121": "g",
          "\u0123": "g",
          "\u0124": "H",
          "\u0126": "H",
          "\u0125": "h",
          "\u0127": "h",
          "\u0128": "I",
          "\u012A": "I",
          "\u012C": "I",
          "\u012E": "I",
          "\u0130": "I",
          "\u0129": "i",
          "\u012B": "i",
          "\u012D": "i",
          "\u012F": "i",
          "\u0131": "i",
          "\u0134": "J",
          "\u0135": "j",
          "\u0136": "K",
          "\u0137": "k",
          "\u0138": "k",
          "\u0139": "L",
          "\u013B": "L",
          "\u013D": "L",
          "\u013F": "L",
          "\u0141": "L",
          "\u013A": "l",
          "\u013C": "l",
          "\u013E": "l",
          "\u0140": "l",
          "\u0142": "l",
          "\u0143": "N",
          "\u0145": "N",
          "\u0147": "N",
          "\u014A": "N",
          "\u0144": "n",
          "\u0146": "n",
          "\u0148": "n",
          "\u014B": "n",
          "\u014C": "O",
          "\u014E": "O",
          "\u0150": "O",
          "\u014D": "o",
          "\u014F": "o",
          "\u0151": "o",
          "\u0154": "R",
          "\u0156": "R",
          "\u0158": "R",
          "\u0155": "r",
          "\u0157": "r",
          "\u0159": "r",
          "\u015A": "S",
          "\u015C": "S",
          "\u015E": "S",
          "\u0160": "S",
          "\u015B": "s",
          "\u015D": "s",
          "\u015F": "s",
          "\u0161": "s",
          "\u0162": "T",
          "\u0164": "T",
          "\u0166": "T",
          "\u0163": "t",
          "\u0165": "t",
          "\u0167": "t",
          "\u0168": "U",
          "\u016A": "U",
          "\u016C": "U",
          "\u016E": "U",
          "\u0170": "U",
          "\u0172": "U",
          "\u0169": "u",
          "\u016B": "u",
          "\u016D": "u",
          "\u016F": "u",
          "\u0171": "u",
          "\u0173": "u",
          "\u0174": "W",
          "\u0175": "w",
          "\u0176": "Y",
          "\u0177": "y",
          "\u0178": "Y",
          "\u0179": "Z",
          "\u017B": "Z",
          "\u017D": "Z",
          "\u017A": "z",
          "\u017C": "z",
          "\u017E": "z",
          "\u0132": "IJ",
          "\u0133": "ij",
          "\u0152": "Oe",
          "\u0153": "oe",
          "\u0149": "'n",
          "\u017F": "s"
        };
        var htmlEscapes = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        };
        var htmlUnescapes = {
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'"
        };
        var stringEscapes = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
        var freeParseFloat = parseFloat, freeParseInt = parseInt;
        var freeGlobal2 = typeof global == "object" && global && global.Object === Object && global;
        var freeSelf2 = typeof self == "object" && self && self.Object === Object && self;
        var root2 = freeGlobal2 || freeSelf2 || Function("return this")();
        var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
        var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
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
        var nodeIsArrayBuffer = nodeUtil2 && nodeUtil2.isArrayBuffer, nodeIsDate = nodeUtil2 && nodeUtil2.isDate, nodeIsMap = nodeUtil2 && nodeUtil2.isMap, nodeIsRegExp = nodeUtil2 && nodeUtil2.isRegExp, nodeIsSet = nodeUtil2 && nodeUtil2.isSet, nodeIsTypedArray2 = nodeUtil2 && nodeUtil2.isTypedArray;
        function apply(func, thisArg, args) {
          switch (args.length) {
            case 0:
              return func.call(thisArg);
            case 1:
              return func.call(thisArg, args[0]);
            case 2:
              return func.call(thisArg, args[0], args[1]);
            case 3:
              return func.call(thisArg, args[0], args[1], args[2]);
          }
          return func.apply(thisArg, args);
        }
        function arrayAggregator(array, setter, iteratee, accumulator) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            var value = array[index];
            setter(accumulator, value, iteratee(value), array);
          }
          return accumulator;
        }
        function arrayEach(array, iteratee) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEachRight(array, iteratee) {
          var length = array == null ? 0 : array.length;
          while (length--) {
            if (iteratee(array[length], length, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEvery(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (!predicate(array[index], index, array)) {
              return false;
            }
          }
          return true;
        }
        function arrayFilter2(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result[resIndex++] = value;
            }
          }
          return result;
        }
        function arrayIncludes(array, value) {
          var length = array == null ? 0 : array.length;
          return !!length && baseIndexOf(array, value, 0) > -1;
        }
        function arrayIncludesWith(array, value, comparator) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (comparator(value, array[index])) {
              return true;
            }
          }
          return false;
        }
        function arrayMap(array, iteratee) {
          var index = -1, length = array == null ? 0 : array.length, result = Array(length);
          while (++index < length) {
            result[index] = iteratee(array[index], index, array);
          }
          return result;
        }
        function arrayPush2(array, values) {
          var index = -1, length = values.length, offset2 = array.length;
          while (++index < length) {
            array[offset2 + index] = values[index];
          }
          return array;
        }
        function arrayReduce(array, iteratee, accumulator, initAccum) {
          var index = -1, length = array == null ? 0 : array.length;
          if (initAccum && length) {
            accumulator = array[++index];
          }
          while (++index < length) {
            accumulator = iteratee(accumulator, array[index], index, array);
          }
          return accumulator;
        }
        function arrayReduceRight(array, iteratee, accumulator, initAccum) {
          var length = array == null ? 0 : array.length;
          if (initAccum && length) {
            accumulator = array[--length];
          }
          while (length--) {
            accumulator = iteratee(accumulator, array[length], length, array);
          }
          return accumulator;
        }
        function arraySome2(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (predicate(array[index], index, array)) {
              return true;
            }
          }
          return false;
        }
        var asciiSize = baseProperty("length");
        function asciiToArray(string) {
          return string.split("");
        }
        function asciiWords(string) {
          return string.match(reAsciiWord) || [];
        }
        function baseFindKey(collection, predicate, eachFunc) {
          var result;
          eachFunc(collection, function(value, key, collection2) {
            if (predicate(value, key, collection2)) {
              result = key;
              return false;
            }
          });
          return result;
        }
        function baseFindIndex(array, predicate, fromIndex, fromRight) {
          var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
          while (fromRight ? index-- : ++index < length) {
            if (predicate(array[index], index, array)) {
              return index;
            }
          }
          return -1;
        }
        function baseIndexOf(array, value, fromIndex) {
          return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
        }
        function baseIndexOfWith(array, value, fromIndex, comparator) {
          var index = fromIndex - 1, length = array.length;
          while (++index < length) {
            if (comparator(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function baseIsNaN(value) {
          return value !== value;
        }
        function baseMean(array, iteratee) {
          var length = array == null ? 0 : array.length;
          return length ? baseSum(array, iteratee) / length : NAN;
        }
        function baseProperty(key) {
          return function(object) {
            return object == null ? undefined2 : object[key];
          };
        }
        function basePropertyOf(object) {
          return function(key) {
            return object == null ? undefined2 : object[key];
          };
        }
        function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
          eachFunc(collection, function(value, index, collection2) {
            accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
          });
          return accumulator;
        }
        function baseSortBy(array, comparer) {
          var length = array.length;
          array.sort(comparer);
          while (length--) {
            array[length] = array[length].value;
          }
          return array;
        }
        function baseSum(array, iteratee) {
          var result, index = -1, length = array.length;
          while (++index < length) {
            var current = iteratee(array[index]);
            if (current !== undefined2) {
              result = result === undefined2 ? current : result + current;
            }
          }
          return result;
        }
        function baseTimes2(n, iteratee) {
          var index = -1, result = Array(n);
          while (++index < n) {
            result[index] = iteratee(index);
          }
          return result;
        }
        function baseToPairs(object, props) {
          return arrayMap(props, function(key) {
            return [key, object[key]];
          });
        }
        function baseTrim(string) {
          return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
        }
        function baseUnary2(func) {
          return function(value) {
            return func(value);
          };
        }
        function baseValues(object, props) {
          return arrayMap(props, function(key) {
            return object[key];
          });
        }
        function cacheHas2(cache, key) {
          return cache.has(key);
        }
        function charsStartIndex(strSymbols, chrSymbols) {
          var index = -1, length = strSymbols.length;
          while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
          }
          return index;
        }
        function charsEndIndex(strSymbols, chrSymbols) {
          var index = strSymbols.length;
          while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
          }
          return index;
        }
        function countHolders(array, placeholder) {
          var length = array.length, result = 0;
          while (length--) {
            if (array[length] === placeholder) {
              ++result;
            }
          }
          return result;
        }
        var deburrLetter = basePropertyOf(deburredLetters);
        var escapeHtmlChar = basePropertyOf(htmlEscapes);
        function escapeStringChar(chr) {
          return "\\" + stringEscapes[chr];
        }
        function getValue2(object, key) {
          return object == null ? undefined2 : object[key];
        }
        function hasUnicode(string) {
          return reHasUnicode.test(string);
        }
        function hasUnicodeWord(string) {
          return reHasUnicodeWord.test(string);
        }
        function iteratorToArray(iterator) {
          var data, result = [];
          while (!(data = iterator.next()).done) {
            result.push(data.value);
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
        function replaceHolders(array, placeholder) {
          var index = -1, length = array.length, resIndex = 0, result = [];
          while (++index < length) {
            var value = array[index];
            if (value === placeholder || value === PLACEHOLDER) {
              array[index] = PLACEHOLDER;
              result[resIndex++] = index;
            }
          }
          return result;
        }
        function setToArray2(set) {
          var index = -1, result = Array(set.size);
          set.forEach(function(value) {
            result[++index] = value;
          });
          return result;
        }
        function setToPairs(set) {
          var index = -1, result = Array(set.size);
          set.forEach(function(value) {
            result[++index] = [value, value];
          });
          return result;
        }
        function strictIndexOf(array, value, fromIndex) {
          var index = fromIndex - 1, length = array.length;
          while (++index < length) {
            if (array[index] === value) {
              return index;
            }
          }
          return -1;
        }
        function strictLastIndexOf(array, value, fromIndex) {
          var index = fromIndex + 1;
          while (index--) {
            if (array[index] === value) {
              return index;
            }
          }
          return index;
        }
        function stringSize(string) {
          return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
        }
        function stringToArray(string) {
          return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
        }
        function trimmedEndIndex(string) {
          var index = string.length;
          while (index-- && reWhitespace.test(string.charAt(index))) {
          }
          return index;
        }
        var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
        function unicodeSize(string) {
          var result = reUnicode.lastIndex = 0;
          while (reUnicode.test(string)) {
            ++result;
          }
          return result;
        }
        function unicodeToArray(string) {
          return string.match(reUnicode) || [];
        }
        function unicodeWords(string) {
          return string.match(reUnicodeWord) || [];
        }
        var runInContext = function runInContext2(context) {
          context = context == null ? root2 : _.defaults(root2.Object(), context, _.pick(root2, contextProps));
          var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
          var arrayProto2 = Array2.prototype, funcProto2 = Function2.prototype, objectProto2 = Object2.prototype;
          var coreJsData2 = context["__core-js_shared__"];
          var funcToString2 = funcProto2.toString;
          var hasOwnProperty2 = objectProto2.hasOwnProperty;
          var idCounter = 0;
          var maskSrcKey2 = function() {
            var uid = /[^.]+$/.exec(coreJsData2 && coreJsData2.keys && coreJsData2.keys.IE_PROTO || "");
            return uid ? "Symbol(src)_1." + uid : "";
          }();
          var nativeObjectToString2 = objectProto2.toString;
          var objectCtorString = funcToString2.call(Object2);
          var oldDash = root2._;
          var reIsNative2 = RegExp2(
            "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
          );
          var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array3 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg2(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable2 = objectProto2.propertyIsEnumerable, splice2 = arrayProto2.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag2 = Symbol2 ? Symbol2.toStringTag : undefined2;
          var defineProperty = function() {
            try {
              var func = getNative2(Object2, "defineProperty");
              func({}, "", {});
              return func;
            } catch (e) {
            }
          }();
          var ctxClearTimeout = context.clearTimeout !== root2.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root2.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root2.setTimeout && context.setTimeout;
          var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols2 = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto2.join, nativeKeys2 = overArg2(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto2.reverse;
          var DataView2 = getNative2(context, "DataView"), Map2 = getNative2(context, "Map"), Promise2 = getNative2(context, "Promise"), Set2 = getNative2(context, "Set"), WeakMap2 = getNative2(context, "WeakMap"), nativeCreate2 = getNative2(Object2, "create");
          var metaMap = WeakMap2 && new WeakMap2();
          var realNames = {};
          var dataViewCtorString2 = toSource2(DataView2), mapCtorString2 = toSource2(Map2), promiseCtorString2 = toSource2(Promise2), setCtorString2 = toSource2(Set2), weakMapCtorString2 = toSource2(WeakMap2);
          var symbolProto2 = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf2 = symbolProto2 ? symbolProto2.valueOf : undefined2, symbolToString = symbolProto2 ? symbolProto2.toString : undefined2;
          function lodash(value) {
            if (isObjectLike2(value) && !isArray2(value) && !(value instanceof LazyWrapper)) {
              if (value instanceof LodashWrapper) {
                return value;
              }
              if (hasOwnProperty2.call(value, "__wrapped__")) {
                return wrapperClone(value);
              }
            }
            return new LodashWrapper(value);
          }
          var baseCreate = /* @__PURE__ */ function() {
            function object() {
            }
            return function(proto) {
              if (!isObject2(proto)) {
                return {};
              }
              if (objectCreate) {
                return objectCreate(proto);
              }
              object.prototype = proto;
              var result2 = new object();
              object.prototype = undefined2;
              return result2;
            };
          }();
          function baseLodash() {
          }
          function LodashWrapper(value, chainAll) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__chain__ = !!chainAll;
            this.__index__ = 0;
            this.__values__ = undefined2;
          }
          lodash.templateSettings = {
            /**
             * Used to detect `data` property values to be HTML-escaped.
             *
             * @memberOf _.templateSettings
             * @type {RegExp}
             */
            "escape": reEscape,
            /**
             * Used to detect code to be evaluated.
             *
             * @memberOf _.templateSettings
             * @type {RegExp}
             */
            "evaluate": reEvaluate,
            /**
             * Used to detect `data` property values to inject.
             *
             * @memberOf _.templateSettings
             * @type {RegExp}
             */
            "interpolate": reInterpolate,
            /**
             * Used to reference the data object in the template text.
             *
             * @memberOf _.templateSettings
             * @type {string}
             */
            "variable": "",
            /**
             * Used to import variables into the compiled template.
             *
             * @memberOf _.templateSettings
             * @type {Object}
             */
            "imports": {
              /**
               * A reference to the `lodash` function.
               *
               * @memberOf _.templateSettings.imports
               * @type {Function}
               */
              "_": lodash
            }
          };
          lodash.prototype = baseLodash.prototype;
          lodash.prototype.constructor = lodash;
          LodashWrapper.prototype = baseCreate(baseLodash.prototype);
          LodashWrapper.prototype.constructor = LodashWrapper;
          function LazyWrapper(value) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__dir__ = 1;
            this.__filtered__ = false;
            this.__iteratees__ = [];
            this.__takeCount__ = MAX_ARRAY_LENGTH;
            this.__views__ = [];
          }
          function lazyClone() {
            var result2 = new LazyWrapper(this.__wrapped__);
            result2.__actions__ = copyArray(this.__actions__);
            result2.__dir__ = this.__dir__;
            result2.__filtered__ = this.__filtered__;
            result2.__iteratees__ = copyArray(this.__iteratees__);
            result2.__takeCount__ = this.__takeCount__;
            result2.__views__ = copyArray(this.__views__);
            return result2;
          }
          function lazyReverse() {
            if (this.__filtered__) {
              var result2 = new LazyWrapper(this);
              result2.__dir__ = -1;
              result2.__filtered__ = true;
            } else {
              result2 = this.clone();
              result2.__dir__ *= -1;
            }
            return result2;
          }
          function lazyValue() {
            var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray2(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
            if (!isArr || !isRight && arrLength == length && takeCount == length) {
              return baseWrapperValue(array, this.__actions__);
            }
            var result2 = [];
            outer:
              while (length-- && resIndex < takeCount) {
                index += dir;
                var iterIndex = -1, value = array[index];
                while (++iterIndex < iterLength) {
                  var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed2 = iteratee2(value);
                  if (type == LAZY_MAP_FLAG) {
                    value = computed2;
                  } else if (!computed2) {
                    if (type == LAZY_FILTER_FLAG) {
                      continue outer;
                    } else {
                      break outer;
                    }
                  }
                }
                result2[resIndex++] = value;
              }
            return result2;
          }
          LazyWrapper.prototype = baseCreate(baseLodash.prototype);
          LazyWrapper.prototype.constructor = LazyWrapper;
          function Hash2(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function hashClear2() {
            this.__data__ = nativeCreate2 ? nativeCreate2(null) : {};
            this.size = 0;
          }
          function hashDelete2(key) {
            var result2 = this.has(key) && delete this.__data__[key];
            this.size -= result2 ? 1 : 0;
            return result2;
          }
          function hashGet2(key) {
            var data = this.__data__;
            if (nativeCreate2) {
              var result2 = data[key];
              return result2 === HASH_UNDEFINED2 ? undefined2 : result2;
            }
            return hasOwnProperty2.call(data, key) ? data[key] : undefined2;
          }
          function hashHas2(key) {
            var data = this.__data__;
            return nativeCreate2 ? data[key] !== undefined2 : hasOwnProperty2.call(data, key);
          }
          function hashSet2(key, value) {
            var data = this.__data__;
            this.size += this.has(key) ? 0 : 1;
            data[key] = nativeCreate2 && value === undefined2 ? HASH_UNDEFINED2 : value;
            return this;
          }
          Hash2.prototype.clear = hashClear2;
          Hash2.prototype["delete"] = hashDelete2;
          Hash2.prototype.get = hashGet2;
          Hash2.prototype.has = hashHas2;
          Hash2.prototype.set = hashSet2;
          function ListCache2(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function listCacheClear2() {
            this.__data__ = [];
            this.size = 0;
          }
          function listCacheDelete2(key) {
            var data = this.__data__, index = assocIndexOf2(data, key);
            if (index < 0) {
              return false;
            }
            var lastIndex = data.length - 1;
            if (index == lastIndex) {
              data.pop();
            } else {
              splice2.call(data, index, 1);
            }
            --this.size;
            return true;
          }
          function listCacheGet2(key) {
            var data = this.__data__, index = assocIndexOf2(data, key);
            return index < 0 ? undefined2 : data[index][1];
          }
          function listCacheHas2(key) {
            return assocIndexOf2(this.__data__, key) > -1;
          }
          function listCacheSet2(key, value) {
            var data = this.__data__, index = assocIndexOf2(data, key);
            if (index < 0) {
              ++this.size;
              data.push([key, value]);
            } else {
              data[index][1] = value;
            }
            return this;
          }
          ListCache2.prototype.clear = listCacheClear2;
          ListCache2.prototype["delete"] = listCacheDelete2;
          ListCache2.prototype.get = listCacheGet2;
          ListCache2.prototype.has = listCacheHas2;
          ListCache2.prototype.set = listCacheSet2;
          function MapCache2(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function mapCacheClear2() {
            this.size = 0;
            this.__data__ = {
              "hash": new Hash2(),
              "map": new (Map2 || ListCache2)(),
              "string": new Hash2()
            };
          }
          function mapCacheDelete2(key) {
            var result2 = getMapData2(this, key)["delete"](key);
            this.size -= result2 ? 1 : 0;
            return result2;
          }
          function mapCacheGet2(key) {
            return getMapData2(this, key).get(key);
          }
          function mapCacheHas2(key) {
            return getMapData2(this, key).has(key);
          }
          function mapCacheSet2(key, value) {
            var data = getMapData2(this, key), size2 = data.size;
            data.set(key, value);
            this.size += data.size == size2 ? 0 : 1;
            return this;
          }
          MapCache2.prototype.clear = mapCacheClear2;
          MapCache2.prototype["delete"] = mapCacheDelete2;
          MapCache2.prototype.get = mapCacheGet2;
          MapCache2.prototype.has = mapCacheHas2;
          MapCache2.prototype.set = mapCacheSet2;
          function SetCache2(values2) {
            var index = -1, length = values2 == null ? 0 : values2.length;
            this.__data__ = new MapCache2();
            while (++index < length) {
              this.add(values2[index]);
            }
          }
          function setCacheAdd2(value) {
            this.__data__.set(value, HASH_UNDEFINED2);
            return this;
          }
          function setCacheHas2(value) {
            return this.__data__.has(value);
          }
          SetCache2.prototype.add = SetCache2.prototype.push = setCacheAdd2;
          SetCache2.prototype.has = setCacheHas2;
          function Stack2(entries) {
            var data = this.__data__ = new ListCache2(entries);
            this.size = data.size;
          }
          function stackClear2() {
            this.__data__ = new ListCache2();
            this.size = 0;
          }
          function stackDelete2(key) {
            var data = this.__data__, result2 = data["delete"](key);
            this.size = data.size;
            return result2;
          }
          function stackGet2(key) {
            return this.__data__.get(key);
          }
          function stackHas2(key) {
            return this.__data__.has(key);
          }
          function stackSet2(key, value) {
            var data = this.__data__;
            if (data instanceof ListCache2) {
              var pairs = data.__data__;
              if (!Map2 || pairs.length < LARGE_ARRAY_SIZE2 - 1) {
                pairs.push([key, value]);
                this.size = ++data.size;
                return this;
              }
              data = this.__data__ = new MapCache2(pairs);
            }
            data.set(key, value);
            this.size = data.size;
            return this;
          }
          Stack2.prototype.clear = stackClear2;
          Stack2.prototype["delete"] = stackDelete2;
          Stack2.prototype.get = stackGet2;
          Stack2.prototype.has = stackHas2;
          Stack2.prototype.set = stackSet2;
          function arrayLikeKeys2(value, inherited) {
            var isArr = isArray2(value), isArg = !isArr && isArguments2(value), isBuff = !isArr && !isArg && isBuffer2(value), isType = !isArr && !isArg && !isBuff && isTypedArray2(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes2(value.length, String2) : [], length = result2.length;
            for (var key in value) {
              if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
              (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
              isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
              isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
              isIndex2(key, length)))) {
                result2.push(key);
              }
            }
            return result2;
          }
          function arraySample(array) {
            var length = array.length;
            return length ? array[baseRandom(0, length - 1)] : undefined2;
          }
          function arraySampleSize(array, n) {
            return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
          }
          function arrayShuffle(array) {
            return shuffleSelf(copyArray(array));
          }
          function assignMergeValue(object, key, value) {
            if (value !== undefined2 && !eq2(object[key], value) || value === undefined2 && !(key in object)) {
              baseAssignValue(object, key, value);
            }
          }
          function assignValue(object, key, value) {
            var objValue = object[key];
            if (!(hasOwnProperty2.call(object, key) && eq2(objValue, value)) || value === undefined2 && !(key in object)) {
              baseAssignValue(object, key, value);
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
          function baseAggregator(collection, setter, iteratee2, accumulator) {
            baseEach(collection, function(value, key, collection2) {
              setter(accumulator, value, iteratee2(value), collection2);
            });
            return accumulator;
          }
          function baseAssign(object, source) {
            return object && copyObject(source, keys2(source), object);
          }
          function baseAssignIn(object, source) {
            return object && copyObject(source, keysIn(source), object);
          }
          function baseAssignValue(object, key, value) {
            if (key == "__proto__" && defineProperty) {
              defineProperty(object, key, {
                "configurable": true,
                "enumerable": true,
                "value": value,
                "writable": true
              });
            } else {
              object[key] = value;
            }
          }
          function baseAt(object, paths) {
            var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
            while (++index < length) {
              result2[index] = skip ? undefined2 : get(object, paths[index]);
            }
            return result2;
          }
          function baseClamp(number, lower, upper) {
            if (number === number) {
              if (upper !== undefined2) {
                number = number <= upper ? number : upper;
              }
              if (lower !== undefined2) {
                number = number >= lower ? number : lower;
              }
            }
            return number;
          }
          function baseClone(value, bitmask, customizer, key, object, stack) {
            var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
            if (customizer) {
              result2 = object ? customizer(value, key, object, stack) : customizer(value);
            }
            if (result2 !== undefined2) {
              return result2;
            }
            if (!isObject2(value)) {
              return value;
            }
            var isArr = isArray2(value);
            if (isArr) {
              result2 = initCloneArray(value);
              if (!isDeep) {
                return copyArray(value, result2);
              }
            } else {
              var tag = getTag2(value), isFunc = tag == funcTag2 || tag == genTag2;
              if (isBuffer2(value)) {
                return cloneBuffer(value, isDeep);
              }
              if (tag == objectTag2 || tag == argsTag2 || isFunc && !object) {
                result2 = isFlat || isFunc ? {} : initCloneObject(value);
                if (!isDeep) {
                  return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
                }
              } else {
                if (!cloneableTags[tag]) {
                  return object ? value : {};
                }
                result2 = initCloneByTag(value, tag, isDeep);
              }
            }
            stack || (stack = new Stack2());
            var stacked = stack.get(value);
            if (stacked) {
              return stacked;
            }
            stack.set(value, result2);
            if (isSet2(value)) {
              value.forEach(function(subValue) {
                result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
              });
            } else if (isMap(value)) {
              value.forEach(function(subValue, key2) {
                result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
              });
            }
            var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys2 : isFlat ? keysIn : keys2;
            var props = isArr ? undefined2 : keysFunc(value);
            arrayEach(props || value, function(subValue, key2) {
              if (props) {
                key2 = subValue;
                subValue = value[key2];
              }
              assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
            return result2;
          }
          function baseConforms(source) {
            var props = keys2(source);
            return function(object) {
              return baseConformsTo(object, source, props);
            };
          }
          function baseConformsTo(object, source, props) {
            var length = props.length;
            if (object == null) {
              return !length;
            }
            object = Object2(object);
            while (length--) {
              var key = props[length], predicate = source[key], value = object[key];
              if (value === undefined2 && !(key in object) || !predicate(value)) {
                return false;
              }
            }
            return true;
          }
          function baseDelay(func, wait, args) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return setTimeout2(function() {
              func.apply(undefined2, args);
            }, wait);
          }
          function baseDifference(array, values2, iteratee2, comparator) {
            var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
            if (!length) {
              return result2;
            }
            if (iteratee2) {
              values2 = arrayMap(values2, baseUnary2(iteratee2));
            }
            if (comparator) {
              includes2 = arrayIncludesWith;
              isCommon = false;
            } else if (values2.length >= LARGE_ARRAY_SIZE2) {
              includes2 = cacheHas2;
              isCommon = false;
              values2 = new SetCache2(values2);
            }
            outer:
              while (++index < length) {
                var value = array[index], computed2 = iteratee2 == null ? value : iteratee2(value);
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed2 === computed2) {
                  var valuesIndex = valuesLength;
                  while (valuesIndex--) {
                    if (values2[valuesIndex] === computed2) {
                      continue outer;
                    }
                  }
                  result2.push(value);
                } else if (!includes2(values2, computed2, comparator)) {
                  result2.push(value);
                }
              }
            return result2;
          }
          var baseEach = createBaseEach(baseForOwn);
          var baseEachRight = createBaseEach(baseForOwnRight, true);
          function baseEvery(collection, predicate) {
            var result2 = true;
            baseEach(collection, function(value, index, collection2) {
              result2 = !!predicate(value, index, collection2);
              return result2;
            });
            return result2;
          }
          function baseExtremum(array, iteratee2, comparator) {
            var index = -1, length = array.length;
            while (++index < length) {
              var value = array[index], current = iteratee2(value);
              if (current != null && (computed2 === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed2))) {
                var computed2 = current, result2 = value;
              }
            }
            return result2;
          }
          function baseFill(array, value, start, end) {
            var length = array.length;
            start = toInteger(start);
            if (start < 0) {
              start = -start > length ? 0 : length + start;
            }
            end = end === undefined2 || end > length ? length : toInteger(end);
            if (end < 0) {
              end += length;
            }
            end = start > end ? 0 : toLength(end);
            while (start < end) {
              array[start++] = value;
            }
            return array;
          }
          function baseFilter(collection, predicate) {
            var result2 = [];
            baseEach(collection, function(value, index, collection2) {
              if (predicate(value, index, collection2)) {
                result2.push(value);
              }
            });
            return result2;
          }
          function baseFlatten(array, depth, predicate, isStrict, result2) {
            var index = -1, length = array.length;
            predicate || (predicate = isFlattenable);
            result2 || (result2 = []);
            while (++index < length) {
              var value = array[index];
              if (depth > 0 && predicate(value)) {
                if (depth > 1) {
                  baseFlatten(value, depth - 1, predicate, isStrict, result2);
                } else {
                  arrayPush2(result2, value);
                }
              } else if (!isStrict) {
                result2[result2.length] = value;
              }
            }
            return result2;
          }
          var baseFor = createBaseFor();
          var baseForRight = createBaseFor(true);
          function baseForOwn(object, iteratee2) {
            return object && baseFor(object, iteratee2, keys2);
          }
          function baseForOwnRight(object, iteratee2) {
            return object && baseForRight(object, iteratee2, keys2);
          }
          function baseFunctions(object, props) {
            return arrayFilter2(props, function(key) {
              return isFunction2(object[key]);
            });
          }
          function baseGet(object, path) {
            path = castPath(path, object);
            var index = 0, length = path.length;
            while (object != null && index < length) {
              object = object[toKey(path[index++])];
            }
            return index && index == length ? object : undefined2;
          }
          function baseGetAllKeys2(object, keysFunc, symbolsFunc) {
            var result2 = keysFunc(object);
            return isArray2(object) ? result2 : arrayPush2(result2, symbolsFunc(object));
          }
          function baseGetTag2(value) {
            if (value == null) {
              return value === undefined2 ? undefinedTag2 : nullTag2;
            }
            return symToStringTag2 && symToStringTag2 in Object2(value) ? getRawTag2(value) : objectToString2(value);
          }
          function baseGt(value, other) {
            return value > other;
          }
          function baseHas(object, key) {
            return object != null && hasOwnProperty2.call(object, key);
          }
          function baseHasIn(object, key) {
            return object != null && key in Object2(object);
          }
          function baseInRange(number, start, end) {
            return number >= nativeMin(start, end) && number < nativeMax(start, end);
          }
          function baseIntersection(arrays, iteratee2, comparator) {
            var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
            while (othIndex--) {
              var array = arrays[othIndex];
              if (othIndex && iteratee2) {
                array = arrayMap(array, baseUnary2(iteratee2));
              }
              maxLength = nativeMin(array.length, maxLength);
              caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache2(othIndex && array) : undefined2;
            }
            array = arrays[0];
            var index = -1, seen = caches[0];
            outer:
              while (++index < length && result2.length < maxLength) {
                var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (!(seen ? cacheHas2(seen, computed2) : includes2(result2, computed2, comparator))) {
                  othIndex = othLength;
                  while (--othIndex) {
                    var cache = caches[othIndex];
                    if (!(cache ? cacheHas2(cache, computed2) : includes2(arrays[othIndex], computed2, comparator))) {
                      continue outer;
                    }
                  }
                  if (seen) {
                    seen.push(computed2);
                  }
                  result2.push(value);
                }
              }
            return result2;
          }
          function baseInverter(object, setter, iteratee2, accumulator) {
            baseForOwn(object, function(value, key, object2) {
              setter(accumulator, iteratee2(value), key, object2);
            });
            return accumulator;
          }
          function baseInvoke(object, path, args) {
            path = castPath(path, object);
            object = parent(object, path);
            var func = object == null ? object : object[toKey(last(path))];
            return func == null ? undefined2 : apply(func, object, args);
          }
          function baseIsArguments2(value) {
            return isObjectLike2(value) && baseGetTag2(value) == argsTag2;
          }
          function baseIsArrayBuffer(value) {
            return isObjectLike2(value) && baseGetTag2(value) == arrayBufferTag2;
          }
          function baseIsDate(value) {
            return isObjectLike2(value) && baseGetTag2(value) == dateTag2;
          }
          function baseIsEqual2(value, other, bitmask, customizer, stack) {
            if (value === other) {
              return true;
            }
            if (value == null || other == null || !isObjectLike2(value) && !isObjectLike2(other)) {
              return value !== value && other !== other;
            }
            return baseIsEqualDeep2(value, other, bitmask, customizer, baseIsEqual2, stack);
          }
          function baseIsEqualDeep2(object, other, bitmask, customizer, equalFunc, stack) {
            var objIsArr = isArray2(object), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag2 : getTag2(object), othTag = othIsArr ? arrayTag2 : getTag2(other);
            objTag = objTag == argsTag2 ? objectTag2 : objTag;
            othTag = othTag == argsTag2 ? objectTag2 : othTag;
            var objIsObj = objTag == objectTag2, othIsObj = othTag == objectTag2, isSameTag = objTag == othTag;
            if (isSameTag && isBuffer2(object)) {
              if (!isBuffer2(other)) {
                return false;
              }
              objIsArr = true;
              objIsObj = false;
            }
            if (isSameTag && !objIsObj) {
              stack || (stack = new Stack2());
              return objIsArr || isTypedArray2(object) ? equalArrays2(object, other, bitmask, customizer, equalFunc, stack) : equalByTag2(object, other, objTag, bitmask, customizer, equalFunc, stack);
            }
            if (!(bitmask & COMPARE_PARTIAL_FLAG2)) {
              var objIsWrapped = objIsObj && hasOwnProperty2.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty2.call(other, "__wrapped__");
              if (objIsWrapped || othIsWrapped) {
                var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
                stack || (stack = new Stack2());
                return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
              }
            }
            if (!isSameTag) {
              return false;
            }
            stack || (stack = new Stack2());
            return equalObjects2(object, other, bitmask, customizer, equalFunc, stack);
          }
          function baseIsMap(value) {
            return isObjectLike2(value) && getTag2(value) == mapTag2;
          }
          function baseIsMatch(object, source, matchData, customizer) {
            var index = matchData.length, length = index, noCustomizer = !customizer;
            if (object == null) {
              return !length;
            }
            object = Object2(object);
            while (index--) {
              var data = matchData[index];
              if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
                return false;
              }
            }
            while (++index < length) {
              data = matchData[index];
              var key = data[0], objValue = object[key], srcValue = data[1];
              if (noCustomizer && data[2]) {
                if (objValue === undefined2 && !(key in object)) {
                  return false;
                }
              } else {
                var stack = new Stack2();
                if (customizer) {
                  var result2 = customizer(objValue, srcValue, key, object, source, stack);
                }
                if (!(result2 === undefined2 ? baseIsEqual2(srcValue, objValue, COMPARE_PARTIAL_FLAG2 | COMPARE_UNORDERED_FLAG2, customizer, stack) : result2)) {
                  return false;
                }
              }
            }
            return true;
          }
          function baseIsNative2(value) {
            if (!isObject2(value) || isMasked2(value)) {
              return false;
            }
            var pattern = isFunction2(value) ? reIsNative2 : reIsHostCtor2;
            return pattern.test(toSource2(value));
          }
          function baseIsRegExp(value) {
            return isObjectLike2(value) && baseGetTag2(value) == regexpTag2;
          }
          function baseIsSet(value) {
            return isObjectLike2(value) && getTag2(value) == setTag2;
          }
          function baseIsTypedArray2(value) {
            return isObjectLike2(value) && isLength2(value.length) && !!typedArrayTags2[baseGetTag2(value)];
          }
          function baseIteratee(value) {
            if (typeof value == "function") {
              return value;
            }
            if (value == null) {
              return identity;
            }
            if (typeof value == "object") {
              return isArray2(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
            }
            return property(value);
          }
          function baseKeys2(object) {
            if (!isPrototype2(object)) {
              return nativeKeys2(object);
            }
            var result2 = [];
            for (var key in Object2(object)) {
              if (hasOwnProperty2.call(object, key) && key != "constructor") {
                result2.push(key);
              }
            }
            return result2;
          }
          function baseKeysIn(object) {
            if (!isObject2(object)) {
              return nativeKeysIn(object);
            }
            var isProto = isPrototype2(object), result2 = [];
            for (var key in object) {
              if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object, key)))) {
                result2.push(key);
              }
            }
            return result2;
          }
          function baseLt(value, other) {
            return value < other;
          }
          function baseMap(collection, iteratee2) {
            var index = -1, result2 = isArrayLike2(collection) ? Array2(collection.length) : [];
            baseEach(collection, function(value, key, collection2) {
              result2[++index] = iteratee2(value, key, collection2);
            });
            return result2;
          }
          function baseMatches(source) {
            var matchData = getMatchData(source);
            if (matchData.length == 1 && matchData[0][2]) {
              return matchesStrictComparable(matchData[0][0], matchData[0][1]);
            }
            return function(object) {
              return object === source || baseIsMatch(object, source, matchData);
            };
          }
          function baseMatchesProperty(path, srcValue) {
            if (isKey(path) && isStrictComparable(srcValue)) {
              return matchesStrictComparable(toKey(path), srcValue);
            }
            return function(object) {
              var objValue = get(object, path);
              return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual2(srcValue, objValue, COMPARE_PARTIAL_FLAG2 | COMPARE_UNORDERED_FLAG2);
            };
          }
          function baseMerge(object, source, srcIndex, customizer, stack) {
            if (object === source) {
              return;
            }
            baseFor(source, function(srcValue, key) {
              stack || (stack = new Stack2());
              if (isObject2(srcValue)) {
                baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
              } else {
                var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
                if (newValue === undefined2) {
                  newValue = srcValue;
                }
                assignMergeValue(object, key, newValue);
              }
            }, keysIn);
          }
          function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
            var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
            if (stacked) {
              assignMergeValue(object, key, stacked);
              return;
            }
            var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
            var isCommon = newValue === undefined2;
            if (isCommon) {
              var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer2(srcValue), isTyped = !isArr && !isBuff && isTypedArray2(srcValue);
              newValue = srcValue;
              if (isArr || isBuff || isTyped) {
                if (isArray2(objValue)) {
                  newValue = objValue;
                } else if (isArrayLikeObject(objValue)) {
                  newValue = copyArray(objValue);
                } else if (isBuff) {
                  isCommon = false;
                  newValue = cloneBuffer(srcValue, true);
                } else if (isTyped) {
                  isCommon = false;
                  newValue = cloneTypedArray(srcValue, true);
                } else {
                  newValue = [];
                }
              } else if (isPlainObject(srcValue) || isArguments2(srcValue)) {
                newValue = objValue;
                if (isArguments2(objValue)) {
                  newValue = toPlainObject(objValue);
                } else if (!isObject2(objValue) || isFunction2(objValue)) {
                  newValue = initCloneObject(srcValue);
                }
              } else {
                isCommon = false;
              }
            }
            if (isCommon) {
              stack.set(srcValue, newValue);
              mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
              stack["delete"](srcValue);
            }
            assignMergeValue(object, key, newValue);
          }
          function baseNth(array, n) {
            var length = array.length;
            if (!length) {
              return;
            }
            n += n < 0 ? length : 0;
            return isIndex2(n, length) ? array[n] : undefined2;
          }
          function baseOrderBy(collection, iteratees, orders) {
            if (iteratees.length) {
              iteratees = arrayMap(iteratees, function(iteratee2) {
                if (isArray2(iteratee2)) {
                  return function(value) {
                    return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                  };
                }
                return iteratee2;
              });
            } else {
              iteratees = [identity];
            }
            var index = -1;
            iteratees = arrayMap(iteratees, baseUnary2(getIteratee()));
            var result2 = baseMap(collection, function(value, key, collection2) {
              var criteria = arrayMap(iteratees, function(iteratee2) {
                return iteratee2(value);
              });
              return { "criteria": criteria, "index": ++index, "value": value };
            });
            return baseSortBy(result2, function(object, other) {
              return compareMultiple(object, other, orders);
            });
          }
          function basePick(object, paths) {
            return basePickBy(object, paths, function(value, path) {
              return hasIn(object, path);
            });
          }
          function basePickBy(object, paths, predicate) {
            var index = -1, length = paths.length, result2 = {};
            while (++index < length) {
              var path = paths[index], value = baseGet(object, path);
              if (predicate(value, path)) {
                baseSet(result2, castPath(path, object), value);
              }
            }
            return result2;
          }
          function basePropertyDeep(path) {
            return function(object) {
              return baseGet(object, path);
            };
          }
          function basePullAll(array, values2, iteratee2, comparator) {
            var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
            if (array === values2) {
              values2 = copyArray(values2);
            }
            if (iteratee2) {
              seen = arrayMap(array, baseUnary2(iteratee2));
            }
            while (++index < length) {
              var fromIndex = 0, value = values2[index], computed2 = iteratee2 ? iteratee2(value) : value;
              while ((fromIndex = indexOf2(seen, computed2, fromIndex, comparator)) > -1) {
                if (seen !== array) {
                  splice2.call(seen, fromIndex, 1);
                }
                splice2.call(array, fromIndex, 1);
              }
            }
            return array;
          }
          function basePullAt(array, indexes) {
            var length = array ? indexes.length : 0, lastIndex = length - 1;
            while (length--) {
              var index = indexes[length];
              if (length == lastIndex || index !== previous) {
                var previous = index;
                if (isIndex2(index)) {
                  splice2.call(array, index, 1);
                } else {
                  baseUnset(array, index);
                }
              }
            }
            return array;
          }
          function baseRandom(lower, upper) {
            return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
          }
          function baseRange(start, end, step, fromRight) {
            var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
            while (length--) {
              result2[fromRight ? length : ++index] = start;
              start += step;
            }
            return result2;
          }
          function baseRepeat(string, n) {
            var result2 = "";
            if (!string || n < 1 || n > MAX_SAFE_INTEGER2) {
              return result2;
            }
            do {
              if (n % 2) {
                result2 += string;
              }
              n = nativeFloor(n / 2);
              if (n) {
                string += string;
              }
            } while (n);
            return result2;
          }
          function baseRest(func, start) {
            return setToString(overRest(func, start, identity), func + "");
          }
          function baseSample(collection) {
            return arraySample(values(collection));
          }
          function baseSampleSize(collection, n) {
            var array = values(collection);
            return shuffleSelf(array, baseClamp(n, 0, array.length));
          }
          function baseSet(object, path, value, customizer) {
            if (!isObject2(object)) {
              return object;
            }
            path = castPath(path, object);
            var index = -1, length = path.length, lastIndex = length - 1, nested = object;
            while (nested != null && ++index < length) {
              var key = toKey(path[index]), newValue = value;
              if (key === "__proto__" || key === "constructor" || key === "prototype") {
                return object;
              }
              if (index != lastIndex) {
                var objValue = nested[key];
                newValue = customizer ? customizer(objValue, key, nested) : undefined2;
                if (newValue === undefined2) {
                  newValue = isObject2(objValue) ? objValue : isIndex2(path[index + 1]) ? [] : {};
                }
              }
              assignValue(nested, key, newValue);
              nested = nested[key];
            }
            return object;
          }
          var baseSetData = !metaMap ? identity : function(func, data) {
            metaMap.set(func, data);
            return func;
          };
          var baseSetToString = !defineProperty ? identity : function(func, string) {
            return defineProperty(func, "toString", {
              "configurable": true,
              "enumerable": false,
              "value": constant(string),
              "writable": true
            });
          };
          function baseShuffle(collection) {
            return shuffleSelf(values(collection));
          }
          function baseSlice(array, start, end) {
            var index = -1, length = array.length;
            if (start < 0) {
              start = -start > length ? 0 : length + start;
            }
            end = end > length ? length : end;
            if (end < 0) {
              end += length;
            }
            length = start > end ? 0 : end - start >>> 0;
            start >>>= 0;
            var result2 = Array2(length);
            while (++index < length) {
              result2[index] = array[index + start];
            }
            return result2;
          }
          function baseSome(collection, predicate) {
            var result2;
            baseEach(collection, function(value, index, collection2) {
              result2 = predicate(value, index, collection2);
              return !result2;
            });
            return !!result2;
          }
          function baseSortedIndex(array, value, retHighest) {
            var low = 0, high = array == null ? low : array.length;
            if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
              while (low < high) {
                var mid = low + high >>> 1, computed2 = array[mid];
                if (computed2 !== null && !isSymbol(computed2) && (retHighest ? computed2 <= value : computed2 < value)) {
                  low = mid + 1;
                } else {
                  high = mid;
                }
              }
              return high;
            }
            return baseSortedIndexBy(array, value, identity, retHighest);
          }
          function baseSortedIndexBy(array, value, iteratee2, retHighest) {
            var low = 0, high = array == null ? 0 : array.length;
            if (high === 0) {
              return 0;
            }
            value = iteratee2(value);
            var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
            while (low < high) {
              var mid = nativeFloor((low + high) / 2), computed2 = iteratee2(array[mid]), othIsDefined = computed2 !== undefined2, othIsNull = computed2 === null, othIsReflexive = computed2 === computed2, othIsSymbol = isSymbol(computed2);
              if (valIsNaN) {
                var setLow = retHighest || othIsReflexive;
              } else if (valIsUndefined) {
                setLow = othIsReflexive && (retHighest || othIsDefined);
              } else if (valIsNull) {
                setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
              } else if (valIsSymbol) {
                setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
              } else if (othIsNull || othIsSymbol) {
                setLow = false;
              } else {
                setLow = retHighest ? computed2 <= value : computed2 < value;
              }
              if (setLow) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return nativeMin(high, MAX_ARRAY_INDEX);
          }
          function baseSortedUniq(array, iteratee2) {
            var index = -1, length = array.length, resIndex = 0, result2 = [];
            while (++index < length) {
              var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
              if (!index || !eq2(computed2, seen)) {
                var seen = computed2;
                result2[resIndex++] = value === 0 ? 0 : value;
              }
            }
            return result2;
          }
          function baseToNumber(value) {
            if (typeof value == "number") {
              return value;
            }
            if (isSymbol(value)) {
              return NAN;
            }
            return +value;
          }
          function baseToString(value) {
            if (typeof value == "string") {
              return value;
            }
            if (isArray2(value)) {
              return arrayMap(value, baseToString) + "";
            }
            if (isSymbol(value)) {
              return symbolToString ? symbolToString.call(value) : "";
            }
            var result2 = value + "";
            return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
          }
          function baseUniq(array, iteratee2, comparator) {
            var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
            if (comparator) {
              isCommon = false;
              includes2 = arrayIncludesWith;
            } else if (length >= LARGE_ARRAY_SIZE2) {
              var set2 = iteratee2 ? null : createSet(array);
              if (set2) {
                return setToArray2(set2);
              }
              isCommon = false;
              includes2 = cacheHas2;
              seen = new SetCache2();
            } else {
              seen = iteratee2 ? [] : result2;
            }
            outer:
              while (++index < length) {
                var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed2 === computed2) {
                  var seenIndex = seen.length;
                  while (seenIndex--) {
                    if (seen[seenIndex] === computed2) {
                      continue outer;
                    }
                  }
                  if (iteratee2) {
                    seen.push(computed2);
                  }
                  result2.push(value);
                } else if (!includes2(seen, computed2, comparator)) {
                  if (seen !== result2) {
                    seen.push(computed2);
                  }
                  result2.push(value);
                }
              }
            return result2;
          }
          function baseUnset(object, path) {
            path = castPath(path, object);
            object = parent(object, path);
            return object == null || delete object[toKey(last(path))];
          }
          function baseUpdate(object, path, updater, customizer) {
            return baseSet(object, path, updater(baseGet(object, path)), customizer);
          }
          function baseWhile(array, predicate, isDrop, fromRight) {
            var length = array.length, index = fromRight ? length : -1;
            while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
            }
            return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
          }
          function baseWrapperValue(value, actions) {
            var result2 = value;
            if (result2 instanceof LazyWrapper) {
              result2 = result2.value();
            }
            return arrayReduce(actions, function(result3, action) {
              return action.func.apply(action.thisArg, arrayPush2([result3], action.args));
            }, result2);
          }
          function baseXor(arrays, iteratee2, comparator) {
            var length = arrays.length;
            if (length < 2) {
              return length ? baseUniq(arrays[0]) : [];
            }
            var index = -1, result2 = Array2(length);
            while (++index < length) {
              var array = arrays[index], othIndex = -1;
              while (++othIndex < length) {
                if (othIndex != index) {
                  result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
                }
              }
            }
            return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
          }
          function baseZipObject(props, values2, assignFunc) {
            var index = -1, length = props.length, valsLength = values2.length, result2 = {};
            while (++index < length) {
              var value = index < valsLength ? values2[index] : undefined2;
              assignFunc(result2, props[index], value);
            }
            return result2;
          }
          function castArrayLikeObject(value) {
            return isArrayLikeObject(value) ? value : [];
          }
          function castFunction(value) {
            return typeof value == "function" ? value : identity;
          }
          function castPath(value, object) {
            if (isArray2(value)) {
              return value;
            }
            return isKey(value, object) ? [value] : stringToPath(toString(value));
          }
          var castRest = baseRest;
          function castSlice(array, start, end) {
            var length = array.length;
            end = end === undefined2 ? length : end;
            return !start && end >= length ? array : baseSlice(array, start, end);
          }
          var clearTimeout2 = ctxClearTimeout || function(id) {
            return root2.clearTimeout(id);
          };
          function cloneBuffer(buffer, isDeep) {
            if (isDeep) {
              return buffer.slice();
            }
            var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
            buffer.copy(result2);
            return result2;
          }
          function cloneArrayBuffer(arrayBuffer) {
            var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
            new Uint8Array3(result2).set(new Uint8Array3(arrayBuffer));
            return result2;
          }
          function cloneDataView(dataView, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
            return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
          }
          function cloneRegExp(regexp) {
            var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
            result2.lastIndex = regexp.lastIndex;
            return result2;
          }
          function cloneSymbol(symbol) {
            return symbolValueOf2 ? Object2(symbolValueOf2.call(symbol)) : {};
          }
          function cloneTypedArray(typedArray, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
            return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
          }
          function compareAscending(value, other) {
            if (value !== other) {
              var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
              var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
              if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
                return 1;
              }
              if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
                return -1;
              }
            }
            return 0;
          }
          function compareMultiple(object, other, orders) {
            var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
            while (++index < length) {
              var result2 = compareAscending(objCriteria[index], othCriteria[index]);
              if (result2) {
                if (index >= ordersLength) {
                  return result2;
                }
                var order = orders[index];
                return result2 * (order == "desc" ? -1 : 1);
              }
            }
            return object.index - other.index;
          }
          function composeArgs(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
            while (++leftIndex < leftLength) {
              result2[leftIndex] = partials[leftIndex];
            }
            while (++argsIndex < holdersLength) {
              if (isUncurried || argsIndex < argsLength) {
                result2[holders[argsIndex]] = args[argsIndex];
              }
            }
            while (rangeLength--) {
              result2[leftIndex++] = args[argsIndex++];
            }
            return result2;
          }
          function composeArgsRight(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
            while (++argsIndex < rangeLength) {
              result2[argsIndex] = args[argsIndex];
            }
            var offset2 = argsIndex;
            while (++rightIndex < rightLength) {
              result2[offset2 + rightIndex] = partials[rightIndex];
            }
            while (++holdersIndex < holdersLength) {
              if (isUncurried || argsIndex < argsLength) {
                result2[offset2 + holders[holdersIndex]] = args[argsIndex++];
              }
            }
            return result2;
          }
          function copyArray(source, array) {
            var index = -1, length = source.length;
            array || (array = Array2(length));
            while (++index < length) {
              array[index] = source[index];
            }
            return array;
          }
          function copyObject(source, props, object, customizer) {
            var isNew = !object;
            object || (object = {});
            var index = -1, length = props.length;
            while (++index < length) {
              var key = props[index];
              var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
              if (newValue === undefined2) {
                newValue = source[key];
              }
              if (isNew) {
                baseAssignValue(object, key, newValue);
              } else {
                assignValue(object, key, newValue);
              }
            }
            return object;
          }
          function copySymbols(source, object) {
            return copyObject(source, getSymbols2(source), object);
          }
          function copySymbolsIn(source, object) {
            return copyObject(source, getSymbolsIn(source), object);
          }
          function createAggregator(setter, initializer) {
            return function(collection, iteratee2) {
              var func = isArray2(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
              return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
            };
          }
          function createAssigner(assigner) {
            return baseRest(function(object, sources) {
              var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
              customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
              if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                customizer = length < 3 ? undefined2 : customizer;
                length = 1;
              }
              object = Object2(object);
              while (++index < length) {
                var source = sources[index];
                if (source) {
                  assigner(object, source, index, customizer);
                }
              }
              return object;
            });
          }
          function createBaseEach(eachFunc, fromRight) {
            return function(collection, iteratee2) {
              if (collection == null) {
                return collection;
              }
              if (!isArrayLike2(collection)) {
                return eachFunc(collection, iteratee2);
              }
              var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
              while (fromRight ? index-- : ++index < length) {
                if (iteratee2(iterable[index], index, iterable) === false) {
                  break;
                }
              }
              return collection;
            };
          }
          function createBaseFor(fromRight) {
            return function(object, iteratee2, keysFunc) {
              var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
              while (length--) {
                var key = props[fromRight ? length : ++index];
                if (iteratee2(iterable[key], key, iterable) === false) {
                  break;
                }
              }
              return object;
            };
          }
          function createBind(func, bitmask, thisArg) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var fn2 = this && this !== root2 && this instanceof wrapper ? Ctor : func;
              return fn2.apply(isBind ? thisArg : this, arguments);
            }
            return wrapper;
          }
          function createCaseFirst(methodName) {
            return function(string) {
              string = toString(string);
              var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
              var chr = strSymbols ? strSymbols[0] : string.charAt(0);
              var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
              return chr[methodName]() + trailing;
            };
          }
          function createCompounder(callback) {
            return function(string) {
              return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
            };
          }
          function createCtor(Ctor) {
            return function() {
              var args = arguments;
              switch (args.length) {
                case 0:
                  return new Ctor();
                case 1:
                  return new Ctor(args[0]);
                case 2:
                  return new Ctor(args[0], args[1]);
                case 3:
                  return new Ctor(args[0], args[1], args[2]);
                case 4:
                  return new Ctor(args[0], args[1], args[2], args[3]);
                case 5:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4]);
                case 6:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
                case 7:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
              }
              var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
              return isObject2(result2) ? result2 : thisBinding;
            };
          }
          function createCurry(func, bitmask, arity) {
            var Ctor = createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
              while (index--) {
                args[index] = arguments[index];
              }
              var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
              length -= holders.length;
              if (length < arity) {
                return createRecurry(
                  func,
                  bitmask,
                  createHybrid,
                  wrapper.placeholder,
                  undefined2,
                  args,
                  holders,
                  undefined2,
                  undefined2,
                  arity - length
                );
              }
              var fn2 = this && this !== root2 && this instanceof wrapper ? Ctor : func;
              return apply(fn2, this, args);
            }
            return wrapper;
          }
          function createFind(findIndexFunc) {
            return function(collection, predicate, fromIndex) {
              var iterable = Object2(collection);
              if (!isArrayLike2(collection)) {
                var iteratee2 = getIteratee(predicate, 3);
                collection = keys2(collection);
                predicate = function(key) {
                  return iteratee2(iterable[key], key, iterable);
                };
              }
              var index = findIndexFunc(collection, predicate, fromIndex);
              return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
            };
          }
          function createFlow(fromRight) {
            return flatRest(function(funcs) {
              var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
              if (fromRight) {
                funcs.reverse();
              }
              while (index--) {
                var func = funcs[index];
                if (typeof func != "function") {
                  throw new TypeError2(FUNC_ERROR_TEXT);
                }
                if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                  var wrapper = new LodashWrapper([], true);
                }
              }
              index = wrapper ? index : length;
              while (++index < length) {
                func = funcs[index];
                var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
                if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                  wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
                } else {
                  wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
                }
              }
              return function() {
                var args = arguments, value = args[0];
                if (wrapper && args.length == 1 && isArray2(value)) {
                  return wrapper.plant(value).value();
                }
                var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
                while (++index2 < length) {
                  result2 = funcs[index2].call(this, result2);
                }
                return result2;
              };
            });
          }
          function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
            var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array2(length), index = length;
              while (index--) {
                args[index] = arguments[index];
              }
              if (isCurried) {
                var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
              }
              if (partials) {
                args = composeArgs(args, partials, holders, isCurried);
              }
              if (partialsRight) {
                args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
              }
              length -= holdersCount;
              if (isCurried && length < arity) {
                var newHolders = replaceHolders(args, placeholder);
                return createRecurry(
                  func,
                  bitmask,
                  createHybrid,
                  wrapper.placeholder,
                  thisArg,
                  args,
                  newHolders,
                  argPos,
                  ary2,
                  arity - length
                );
              }
              var thisBinding = isBind ? thisArg : this, fn2 = isBindKey ? thisBinding[func] : func;
              length = args.length;
              if (argPos) {
                args = reorder(args, argPos);
              } else if (isFlip && length > 1) {
                args.reverse();
              }
              if (isAry && ary2 < length) {
                args.length = ary2;
              }
              if (this && this !== root2 && this instanceof wrapper) {
                fn2 = Ctor || createCtor(fn2);
              }
              return fn2.apply(thisBinding, args);
            }
            return wrapper;
          }
          function createInverter(setter, toIteratee) {
            return function(object, iteratee2) {
              return baseInverter(object, setter, toIteratee(iteratee2), {});
            };
          }
          function createMathOperation(operator, defaultValue) {
            return function(value, other) {
              var result2;
              if (value === undefined2 && other === undefined2) {
                return defaultValue;
              }
              if (value !== undefined2) {
                result2 = value;
              }
              if (other !== undefined2) {
                if (result2 === undefined2) {
                  return other;
                }
                if (typeof value == "string" || typeof other == "string") {
                  value = baseToString(value);
                  other = baseToString(other);
                } else {
                  value = baseToNumber(value);
                  other = baseToNumber(other);
                }
                result2 = operator(value, other);
              }
              return result2;
            };
          }
          function createOver(arrayFunc) {
            return flatRest(function(iteratees) {
              iteratees = arrayMap(iteratees, baseUnary2(getIteratee()));
              return baseRest(function(args) {
                var thisArg = this;
                return arrayFunc(iteratees, function(iteratee2) {
                  return apply(iteratee2, thisArg, args);
                });
              });
            });
          }
          function createPadding(length, chars) {
            chars = chars === undefined2 ? " " : baseToString(chars);
            var charsLength = chars.length;
            if (charsLength < 2) {
              return charsLength ? baseRepeat(chars, length) : chars;
            }
            var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
            return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
          }
          function createPartial(func, bitmask, thisArg, partials) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn2 = this && this !== root2 && this instanceof wrapper ? Ctor : func;
              while (++leftIndex < leftLength) {
                args[leftIndex] = partials[leftIndex];
              }
              while (argsLength--) {
                args[leftIndex++] = arguments[++argsIndex];
              }
              return apply(fn2, isBind ? thisArg : this, args);
            }
            return wrapper;
          }
          function createRange(fromRight) {
            return function(start, end, step) {
              if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
                end = step = undefined2;
              }
              start = toFinite(start);
              if (end === undefined2) {
                end = start;
                start = 0;
              } else {
                end = toFinite(end);
              }
              step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
              return baseRange(start, end, step, fromRight);
            };
          }
          function createRelationalOperation(operator) {
            return function(value, other) {
              if (!(typeof value == "string" && typeof other == "string")) {
                value = toNumber(value);
                other = toNumber(other);
              }
              return operator(value, other);
            };
          }
          function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
            var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
            bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
            bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
            if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
              bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
            }
            var newData = [
              func,
              bitmask,
              thisArg,
              newPartials,
              newHolders,
              newPartialsRight,
              newHoldersRight,
              argPos,
              ary2,
              arity
            ];
            var result2 = wrapFunc.apply(undefined2, newData);
            if (isLaziable(func)) {
              setData(result2, newData);
            }
            result2.placeholder = placeholder;
            return setWrapToString(result2, func, bitmask);
          }
          function createRound(methodName) {
            var func = Math2[methodName];
            return function(number, precision) {
              number = toNumber(number);
              precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
              if (precision && nativeIsFinite(number)) {
                var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
                pair = (toString(value) + "e").split("e");
                return +(pair[0] + "e" + (+pair[1] - precision));
              }
              return func(number);
            };
          }
          var createSet = !(Set2 && 1 / setToArray2(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
            return new Set2(values2);
          };
          function createToPairs(keysFunc) {
            return function(object) {
              var tag = getTag2(object);
              if (tag == mapTag2) {
                return mapToArray2(object);
              }
              if (tag == setTag2) {
                return setToPairs(object);
              }
              return baseToPairs(object, keysFunc(object));
            };
          }
          function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
            var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
            if (!isBindKey && typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            var length = partials ? partials.length : 0;
            if (!length) {
              bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
              partials = holders = undefined2;
            }
            ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
            arity = arity === undefined2 ? arity : toInteger(arity);
            length -= holders ? holders.length : 0;
            if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
              var partialsRight = partials, holdersRight = holders;
              partials = holders = undefined2;
            }
            var data = isBindKey ? undefined2 : getData(func);
            var newData = [
              func,
              bitmask,
              thisArg,
              partials,
              holders,
              partialsRight,
              holdersRight,
              argPos,
              ary2,
              arity
            ];
            if (data) {
              mergeData(newData, data);
            }
            func = newData[0];
            bitmask = newData[1];
            thisArg = newData[2];
            partials = newData[3];
            holders = newData[4];
            arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
            if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
              bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
            }
            if (!bitmask || bitmask == WRAP_BIND_FLAG) {
              var result2 = createBind(func, bitmask, thisArg);
            } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
              result2 = createCurry(func, bitmask, arity);
            } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
              result2 = createPartial(func, bitmask, thisArg, partials);
            } else {
              result2 = createHybrid.apply(undefined2, newData);
            }
            var setter = data ? baseSetData : setData;
            return setWrapToString(setter(result2, newData), func, bitmask);
          }
          function customDefaultsAssignIn(objValue, srcValue, key, object) {
            if (objValue === undefined2 || eq2(objValue, objectProto2[key]) && !hasOwnProperty2.call(object, key)) {
              return srcValue;
            }
            return objValue;
          }
          function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
            if (isObject2(objValue) && isObject2(srcValue)) {
              stack.set(srcValue, objValue);
              baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
              stack["delete"](srcValue);
            }
            return objValue;
          }
          function customOmitClone(value) {
            return isPlainObject(value) ? undefined2 : value;
          }
          function equalArrays2(array, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG2, arrLength = array.length, othLength = other.length;
            if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
              return false;
            }
            var arrStacked = stack.get(array);
            var othStacked = stack.get(other);
            if (arrStacked && othStacked) {
              return arrStacked == other && othStacked == array;
            }
            var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG2 ? new SetCache2() : undefined2;
            stack.set(array, other);
            stack.set(other, array);
            while (++index < arrLength) {
              var arrValue = array[index], othValue = other[index];
              if (customizer) {
                var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
              }
              if (compared !== undefined2) {
                if (compared) {
                  continue;
                }
                result2 = false;
                break;
              }
              if (seen) {
                if (!arraySome2(other, function(othValue2, othIndex) {
                  if (!cacheHas2(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                    return seen.push(othIndex);
                  }
                })) {
                  result2 = false;
                  break;
                }
              } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                result2 = false;
                break;
              }
            }
            stack["delete"](array);
            stack["delete"](other);
            return result2;
          }
          function equalByTag2(object, other, tag, bitmask, customizer, equalFunc, stack) {
            switch (tag) {
              case dataViewTag2:
                if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                  return false;
                }
                object = object.buffer;
                other = other.buffer;
              case arrayBufferTag2:
                if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array3(object), new Uint8Array3(other))) {
                  return false;
                }
                return true;
              case boolTag2:
              case dateTag2:
              case numberTag2:
                return eq2(+object, +other);
              case errorTag2:
                return object.name == other.name && object.message == other.message;
              case regexpTag2:
              case stringTag2:
                return object == other + "";
              case mapTag2:
                var convert = mapToArray2;
              case setTag2:
                var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
                convert || (convert = setToArray2);
                if (object.size != other.size && !isPartial) {
                  return false;
                }
                var stacked = stack.get(object);
                if (stacked) {
                  return stacked == other;
                }
                bitmask |= COMPARE_UNORDERED_FLAG2;
                stack.set(object, other);
                var result2 = equalArrays2(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                stack["delete"](object);
                return result2;
              case symbolTag2:
                if (symbolValueOf2) {
                  return symbolValueOf2.call(object) == symbolValueOf2.call(other);
                }
            }
            return false;
          }
          function equalObjects2(object, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG2, objProps = getAllKeys2(object), objLength = objProps.length, othProps = getAllKeys2(other), othLength = othProps.length;
            if (objLength != othLength && !isPartial) {
              return false;
            }
            var index = objLength;
            while (index--) {
              var key = objProps[index];
              if (!(isPartial ? key in other : hasOwnProperty2.call(other, key))) {
                return false;
              }
            }
            var objStacked = stack.get(object);
            var othStacked = stack.get(other);
            if (objStacked && othStacked) {
              return objStacked == other && othStacked == object;
            }
            var result2 = true;
            stack.set(object, other);
            stack.set(other, object);
            var skipCtor = isPartial;
            while (++index < objLength) {
              key = objProps[index];
              var objValue = object[key], othValue = other[key];
              if (customizer) {
                var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
              }
              if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
                result2 = false;
                break;
              }
              skipCtor || (skipCtor = key == "constructor");
            }
            if (result2 && !skipCtor) {
              var objCtor = object.constructor, othCtor = other.constructor;
              if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
                result2 = false;
              }
            }
            stack["delete"](object);
            stack["delete"](other);
            return result2;
          }
          function flatRest(func) {
            return setToString(overRest(func, undefined2, flatten), func + "");
          }
          function getAllKeys2(object) {
            return baseGetAllKeys2(object, keys2, getSymbols2);
          }
          function getAllKeysIn(object) {
            return baseGetAllKeys2(object, keysIn, getSymbolsIn);
          }
          var getData = !metaMap ? noop : function(func) {
            return metaMap.get(func);
          };
          function getFuncName(func) {
            var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty2.call(realNames, result2) ? array.length : 0;
            while (length--) {
              var data = array[length], otherFunc = data.func;
              if (otherFunc == null || otherFunc == func) {
                return data.name;
              }
            }
            return result2;
          }
          function getHolder(func) {
            var object = hasOwnProperty2.call(lodash, "placeholder") ? lodash : func;
            return object.placeholder;
          }
          function getIteratee() {
            var result2 = lodash.iteratee || iteratee;
            result2 = result2 === iteratee ? baseIteratee : result2;
            return arguments.length ? result2(arguments[0], arguments[1]) : result2;
          }
          function getMapData2(map2, key) {
            var data = map2.__data__;
            return isKeyable2(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
          }
          function getMatchData(object) {
            var result2 = keys2(object), length = result2.length;
            while (length--) {
              var key = result2[length], value = object[key];
              result2[length] = [key, value, isStrictComparable(value)];
            }
            return result2;
          }
          function getNative2(object, key) {
            var value = getValue2(object, key);
            return baseIsNative2(value) ? value : undefined2;
          }
          function getRawTag2(value) {
            var isOwn = hasOwnProperty2.call(value, symToStringTag2), tag = value[symToStringTag2];
            try {
              value[symToStringTag2] = undefined2;
              var unmasked = true;
            } catch (e) {
            }
            var result2 = nativeObjectToString2.call(value);
            if (unmasked) {
              if (isOwn) {
                value[symToStringTag2] = tag;
              } else {
                delete value[symToStringTag2];
              }
            }
            return result2;
          }
          var getSymbols2 = !nativeGetSymbols2 ? stubArray2 : function(object) {
            if (object == null) {
              return [];
            }
            object = Object2(object);
            return arrayFilter2(nativeGetSymbols2(object), function(symbol) {
              return propertyIsEnumerable2.call(object, symbol);
            });
          };
          var getSymbolsIn = !nativeGetSymbols2 ? stubArray2 : function(object) {
            var result2 = [];
            while (object) {
              arrayPush2(result2, getSymbols2(object));
              object = getPrototype(object);
            }
            return result2;
          };
          var getTag2 = baseGetTag2;
          if (DataView2 && getTag2(new DataView2(new ArrayBuffer(1))) != dataViewTag2 || Map2 && getTag2(new Map2()) != mapTag2 || Promise2 && getTag2(Promise2.resolve()) != promiseTag2 || Set2 && getTag2(new Set2()) != setTag2 || WeakMap2 && getTag2(new WeakMap2()) != weakMapTag2) {
            getTag2 = function(value) {
              var result2 = baseGetTag2(value), Ctor = result2 == objectTag2 ? value.constructor : undefined2, ctorString = Ctor ? toSource2(Ctor) : "";
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
              return result2;
            };
          }
          function getView(start, end, transforms) {
            var index = -1, length = transforms.length;
            while (++index < length) {
              var data = transforms[index], size2 = data.size;
              switch (data.type) {
                case "drop":
                  start += size2;
                  break;
                case "dropRight":
                  end -= size2;
                  break;
                case "take":
                  end = nativeMin(end, start + size2);
                  break;
                case "takeRight":
                  start = nativeMax(start, end - size2);
                  break;
              }
            }
            return { "start": start, "end": end };
          }
          function getWrapDetails(source) {
            var match = source.match(reWrapDetails);
            return match ? match[1].split(reSplitDetails) : [];
          }
          function hasPath(object, path, hasFunc) {
            path = castPath(path, object);
            var index = -1, length = path.length, result2 = false;
            while (++index < length) {
              var key = toKey(path[index]);
              if (!(result2 = object != null && hasFunc(object, key))) {
                break;
              }
              object = object[key];
            }
            if (result2 || ++index != length) {
              return result2;
            }
            length = object == null ? 0 : object.length;
            return !!length && isLength2(length) && isIndex2(key, length) && (isArray2(object) || isArguments2(object));
          }
          function initCloneArray(array) {
            var length = array.length, result2 = new array.constructor(length);
            if (length && typeof array[0] == "string" && hasOwnProperty2.call(array, "index")) {
              result2.index = array.index;
              result2.input = array.input;
            }
            return result2;
          }
          function initCloneObject(object) {
            return typeof object.constructor == "function" && !isPrototype2(object) ? baseCreate(getPrototype(object)) : {};
          }
          function initCloneByTag(object, tag, isDeep) {
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
                return new Ctor();
              case numberTag2:
              case stringTag2:
                return new Ctor(object);
              case regexpTag2:
                return cloneRegExp(object);
              case setTag2:
                return new Ctor();
              case symbolTag2:
                return cloneSymbol(object);
            }
          }
          function insertWrapDetails(source, details) {
            var length = details.length;
            if (!length) {
              return source;
            }
            var lastIndex = length - 1;
            details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
            details = details.join(length > 2 ? ", " : " ");
            return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
          }
          function isFlattenable(value) {
            return isArray2(value) || isArguments2(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
          }
          function isIndex2(value, length) {
            var type = typeof value;
            length = length == null ? MAX_SAFE_INTEGER2 : length;
            return !!length && (type == "number" || type != "symbol" && reIsUint2.test(value)) && (value > -1 && value % 1 == 0 && value < length);
          }
          function isIterateeCall(value, index, object) {
            if (!isObject2(object)) {
              return false;
            }
            var type = typeof index;
            if (type == "number" ? isArrayLike2(object) && isIndex2(index, object.length) : type == "string" && index in object) {
              return eq2(object[index], value);
            }
            return false;
          }
          function isKey(value, object) {
            if (isArray2(value)) {
              return false;
            }
            var type = typeof value;
            if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
              return true;
            }
            return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
          }
          function isKeyable2(value) {
            var type = typeof value;
            return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
          }
          function isLaziable(func) {
            var funcName = getFuncName(func), other = lodash[funcName];
            if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
              return false;
            }
            if (func === other) {
              return true;
            }
            var data = getData(other);
            return !!data && func === data[0];
          }
          function isMasked2(func) {
            return !!maskSrcKey2 && maskSrcKey2 in func;
          }
          var isMaskable = coreJsData2 ? isFunction2 : stubFalse2;
          function isPrototype2(value) {
            var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto2;
            return value === proto;
          }
          function isStrictComparable(value) {
            return value === value && !isObject2(value);
          }
          function matchesStrictComparable(key, srcValue) {
            return function(object) {
              if (object == null) {
                return false;
              }
              return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
            };
          }
          function memoizeCapped(func) {
            var result2 = memoize(func, function(key) {
              if (cache.size === MAX_MEMOIZE_SIZE) {
                cache.clear();
              }
              return key;
            });
            var cache = result2.cache;
            return result2;
          }
          function mergeData(data, source) {
            var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
            var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
            if (!(isCommon || isCombo)) {
              return data;
            }
            if (srcBitmask & WRAP_BIND_FLAG) {
              data[2] = source[2];
              newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
            }
            var value = source[3];
            if (value) {
              var partials = data[3];
              data[3] = partials ? composeArgs(partials, value, source[4]) : value;
              data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
            }
            value = source[5];
            if (value) {
              partials = data[5];
              data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
              data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
            }
            value = source[7];
            if (value) {
              data[7] = value;
            }
            if (srcBitmask & WRAP_ARY_FLAG) {
              data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
            }
            if (data[9] == null) {
              data[9] = source[9];
            }
            data[0] = source[0];
            data[1] = newBitmask;
            return data;
          }
          function nativeKeysIn(object) {
            var result2 = [];
            if (object != null) {
              for (var key in Object2(object)) {
                result2.push(key);
              }
            }
            return result2;
          }
          function objectToString2(value) {
            return nativeObjectToString2.call(value);
          }
          function overRest(func, start, transform2) {
            start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
            return function() {
              var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
              while (++index < length) {
                array[index] = args[start + index];
              }
              index = -1;
              var otherArgs = Array2(start + 1);
              while (++index < start) {
                otherArgs[index] = args[index];
              }
              otherArgs[start] = transform2(array);
              return apply(func, this, otherArgs);
            };
          }
          function parent(object, path) {
            return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
          }
          function reorder(array, indexes) {
            var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
            while (length--) {
              var index = indexes[length];
              array[length] = isIndex2(index, arrLength) ? oldArray[index] : undefined2;
            }
            return array;
          }
          function safeGet(object, key) {
            if (key === "constructor" && typeof object[key] === "function") {
              return;
            }
            if (key == "__proto__") {
              return;
            }
            return object[key];
          }
          var setData = shortOut(baseSetData);
          var setTimeout2 = ctxSetTimeout || function(func, wait) {
            return root2.setTimeout(func, wait);
          };
          var setToString = shortOut(baseSetToString);
          function setWrapToString(wrapper, reference, bitmask) {
            var source = reference + "";
            return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
          }
          function shortOut(func) {
            var count = 0, lastCalled = 0;
            return function() {
              var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
              lastCalled = stamp;
              if (remaining > 0) {
                if (++count >= HOT_COUNT) {
                  return arguments[0];
                }
              } else {
                count = 0;
              }
              return func.apply(undefined2, arguments);
            };
          }
          function shuffleSelf(array, size2) {
            var index = -1, length = array.length, lastIndex = length - 1;
            size2 = size2 === undefined2 ? length : size2;
            while (++index < size2) {
              var rand = baseRandom(index, lastIndex), value = array[rand];
              array[rand] = array[index];
              array[index] = value;
            }
            array.length = size2;
            return array;
          }
          var stringToPath = memoizeCapped(function(string) {
            var result2 = [];
            if (string.charCodeAt(0) === 46) {
              result2.push("");
            }
            string.replace(rePropName, function(match, number, quote, subString) {
              result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
            });
            return result2;
          });
          function toKey(value) {
            if (typeof value == "string" || isSymbol(value)) {
              return value;
            }
            var result2 = value + "";
            return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
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
          function updateWrapDetails(details, bitmask) {
            arrayEach(wrapFlags, function(pair) {
              var value = "_." + pair[0];
              if (bitmask & pair[1] && !arrayIncludes(details, value)) {
                details.push(value);
              }
            });
            return details.sort();
          }
          function wrapperClone(wrapper) {
            if (wrapper instanceof LazyWrapper) {
              return wrapper.clone();
            }
            var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
            result2.__actions__ = copyArray(wrapper.__actions__);
            result2.__index__ = wrapper.__index__;
            result2.__values__ = wrapper.__values__;
            return result2;
          }
          function chunk(array, size2, guard) {
            if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
              size2 = 1;
            } else {
              size2 = nativeMax(toInteger(size2), 0);
            }
            var length = array == null ? 0 : array.length;
            if (!length || size2 < 1) {
              return [];
            }
            var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
            while (index < length) {
              result2[resIndex++] = baseSlice(array, index, index += size2);
            }
            return result2;
          }
          function compact(array) {
            var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
            while (++index < length) {
              var value = array[index];
              if (value) {
                result2[resIndex++] = value;
              }
            }
            return result2;
          }
          function concat() {
            var length = arguments.length;
            if (!length) {
              return [];
            }
            var args = Array2(length - 1), array = arguments[0], index = length;
            while (index--) {
              args[index - 1] = arguments[index];
            }
            return arrayPush2(isArray2(array) ? copyArray(array) : [array], baseFlatten(args, 1));
          }
          var difference = baseRest(function(array, values2) {
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
          });
          var differenceBy = baseRest(function(array, values2) {
            var iteratee2 = last(values2);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined2;
            }
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
          });
          var differenceWith = baseRest(function(array, values2) {
            var comparator = last(values2);
            if (isArrayLikeObject(comparator)) {
              comparator = undefined2;
            }
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
          });
          function drop(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n = guard || n === undefined2 ? 1 : toInteger(n);
            return baseSlice(array, n < 0 ? 0 : n, length);
          }
          function dropRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n = guard || n === undefined2 ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, 0, n < 0 ? 0 : n);
          }
          function dropRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
          }
          function dropWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
          }
          function fill(array, value, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
              start = 0;
              end = length;
            }
            return baseFill(array, value, start, end);
          }
          function findIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) {
              index = nativeMax(length + index, 0);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index);
          }
          function findLastIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = length - 1;
            if (fromIndex !== undefined2) {
              index = toInteger(fromIndex);
              index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index, true);
          }
          function flatten(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, 1) : [];
          }
          function flattenDeep(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, INFINITY) : [];
          }
          function flattenDepth(array, depth) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            depth = depth === undefined2 ? 1 : toInteger(depth);
            return baseFlatten(array, depth);
          }
          function fromPairs(pairs) {
            var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
            while (++index < length) {
              var pair = pairs[index];
              result2[pair[0]] = pair[1];
            }
            return result2;
          }
          function head(array) {
            return array && array.length ? array[0] : undefined2;
          }
          function indexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) {
              index = nativeMax(length + index, 0);
            }
            return baseIndexOf(array, value, index);
          }
          function initial(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 0, -1) : [];
          }
          var intersection2 = baseRest(function(arrays) {
            var mapped = arrayMap(arrays, castArrayLikeObject);
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
          });
          var intersectionBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            if (iteratee2 === last(mapped)) {
              iteratee2 = undefined2;
            } else {
              mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
          });
          var intersectionWith = baseRest(function(arrays) {
            var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            comparator = typeof comparator == "function" ? comparator : undefined2;
            if (comparator) {
              mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
          });
          function join(array, separator) {
            return array == null ? "" : nativeJoin.call(array, separator);
          }
          function last(array) {
            var length = array == null ? 0 : array.length;
            return length ? array[length - 1] : undefined2;
          }
          function lastIndexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = length;
            if (fromIndex !== undefined2) {
              index = toInteger(fromIndex);
              index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
          }
          function nth(array, n) {
            return array && array.length ? baseNth(array, toInteger(n)) : undefined2;
          }
          var pull = baseRest(pullAll);
          function pullAll(array, values2) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
          }
          function pullAllBy(array, values2, iteratee2) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
          }
          function pullAllWith(array, values2, comparator) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
          }
          var pullAt = flatRest(function(array, indexes) {
            var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
            basePullAt(array, arrayMap(indexes, function(index) {
              return isIndex2(index, length) ? +index : index;
            }).sort(compareAscending));
            return result2;
          });
          function remove(array, predicate) {
            var result2 = [];
            if (!(array && array.length)) {
              return result2;
            }
            var index = -1, indexes = [], length = array.length;
            predicate = getIteratee(predicate, 3);
            while (++index < length) {
              var value = array[index];
              if (predicate(value, index, array)) {
                result2.push(value);
                indexes.push(index);
              }
            }
            basePullAt(array, indexes);
            return result2;
          }
          function reverse(array) {
            return array == null ? array : nativeReverse.call(array);
          }
          function slice(array, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
              start = 0;
              end = length;
            } else {
              start = start == null ? 0 : toInteger(start);
              end = end === undefined2 ? length : toInteger(end);
            }
            return baseSlice(array, start, end);
          }
          function sortedIndex(array, value) {
            return baseSortedIndex(array, value);
          }
          function sortedIndexBy(array, value, iteratee2) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
          }
          function sortedIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
              var index = baseSortedIndex(array, value);
              if (index < length && eq2(array[index], value)) {
                return index;
              }
            }
            return -1;
          }
          function sortedLastIndex(array, value) {
            return baseSortedIndex(array, value, true);
          }
          function sortedLastIndexBy(array, value, iteratee2) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
          }
          function sortedLastIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
              var index = baseSortedIndex(array, value, true) - 1;
              if (eq2(array[index], value)) {
                return index;
              }
            }
            return -1;
          }
          function sortedUniq(array) {
            return array && array.length ? baseSortedUniq(array) : [];
          }
          function sortedUniqBy(array, iteratee2) {
            return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
          }
          function tail(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 1, length) : [];
          }
          function take(array, n, guard) {
            if (!(array && array.length)) {
              return [];
            }
            n = guard || n === undefined2 ? 1 : toInteger(n);
            return baseSlice(array, 0, n < 0 ? 0 : n);
          }
          function takeRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n = guard || n === undefined2 ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, n < 0 ? 0 : n, length);
          }
          function takeRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
          }
          function takeWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
          }
          var union = baseRest(function(arrays) {
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
          });
          var unionBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined2;
            }
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
          });
          var unionWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined2;
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
          });
          function uniq(array) {
            return array && array.length ? baseUniq(array) : [];
          }
          function uniqBy(array, iteratee2) {
            return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
          }
          function uniqWith(array, comparator) {
            comparator = typeof comparator == "function" ? comparator : undefined2;
            return array && array.length ? baseUniq(array, undefined2, comparator) : [];
          }
          function unzip(array) {
            if (!(array && array.length)) {
              return [];
            }
            var length = 0;
            array = arrayFilter2(array, function(group) {
              if (isArrayLikeObject(group)) {
                length = nativeMax(group.length, length);
                return true;
              }
            });
            return baseTimes2(length, function(index) {
              return arrayMap(array, baseProperty(index));
            });
          }
          function unzipWith(array, iteratee2) {
            if (!(array && array.length)) {
              return [];
            }
            var result2 = unzip(array);
            if (iteratee2 == null) {
              return result2;
            }
            return arrayMap(result2, function(group) {
              return apply(iteratee2, undefined2, group);
            });
          }
          var without = baseRest(function(array, values2) {
            return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
          });
          var xor = baseRest(function(arrays) {
            return baseXor(arrayFilter2(arrays, isArrayLikeObject));
          });
          var xorBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined2;
            }
            return baseXor(arrayFilter2(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
          });
          var xorWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined2;
            return baseXor(arrayFilter2(arrays, isArrayLikeObject), undefined2, comparator);
          });
          var zip = baseRest(unzip);
          function zipObject(props, values2) {
            return baseZipObject(props || [], values2 || [], assignValue);
          }
          function zipObjectDeep(props, values2) {
            return baseZipObject(props || [], values2 || [], baseSet);
          }
          var zipWith = baseRest(function(arrays) {
            var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
            iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
            return unzipWith(arrays, iteratee2);
          });
          function chain(value) {
            var result2 = lodash(value);
            result2.__chain__ = true;
            return result2;
          }
          function tap(value, interceptor) {
            interceptor(value);
            return value;
          }
          function thru(value, interceptor) {
            return interceptor(value);
          }
          var wrapperAt = flatRest(function(paths) {
            var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
              return baseAt(object, paths);
            };
            if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex2(start)) {
              return this.thru(interceptor);
            }
            value = value.slice(start, +start + (length ? 1 : 0));
            value.__actions__.push({
              "func": thru,
              "args": [interceptor],
              "thisArg": undefined2
            });
            return new LodashWrapper(value, this.__chain__).thru(function(array) {
              if (length && !array.length) {
                array.push(undefined2);
              }
              return array;
            });
          });
          function wrapperChain() {
            return chain(this);
          }
          function wrapperCommit() {
            return new LodashWrapper(this.value(), this.__chain__);
          }
          function wrapperNext() {
            if (this.__values__ === undefined2) {
              this.__values__ = toArray(this.value());
            }
            var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
            return { "done": done, "value": value };
          }
          function wrapperToIterator() {
            return this;
          }
          function wrapperPlant(value) {
            var result2, parent2 = this;
            while (parent2 instanceof baseLodash) {
              var clone2 = wrapperClone(parent2);
              clone2.__index__ = 0;
              clone2.__values__ = undefined2;
              if (result2) {
                previous.__wrapped__ = clone2;
              } else {
                result2 = clone2;
              }
              var previous = clone2;
              parent2 = parent2.__wrapped__;
            }
            previous.__wrapped__ = value;
            return result2;
          }
          function wrapperReverse() {
            var value = this.__wrapped__;
            if (value instanceof LazyWrapper) {
              var wrapped = value;
              if (this.__actions__.length) {
                wrapped = new LazyWrapper(this);
              }
              wrapped = wrapped.reverse();
              wrapped.__actions__.push({
                "func": thru,
                "args": [reverse],
                "thisArg": undefined2
              });
              return new LodashWrapper(wrapped, this.__chain__);
            }
            return this.thru(reverse);
          }
          function wrapperValue() {
            return baseWrapperValue(this.__wrapped__, this.__actions__);
          }
          var countBy = createAggregator(function(result2, value, key) {
            if (hasOwnProperty2.call(result2, key)) {
              ++result2[key];
            } else {
              baseAssignValue(result2, key, 1);
            }
          });
          function every(collection, predicate, guard) {
            var func = isArray2(collection) ? arrayEvery : baseEvery;
            if (guard && isIterateeCall(collection, predicate, guard)) {
              predicate = undefined2;
            }
            return func(collection, getIteratee(predicate, 3));
          }
          function filter2(collection, predicate) {
            var func = isArray2(collection) ? arrayFilter2 : baseFilter;
            return func(collection, getIteratee(predicate, 3));
          }
          var find = createFind(findIndex);
          var findLast = createFind(findLastIndex);
          function flatMap(collection, iteratee2) {
            return baseFlatten(map(collection, iteratee2), 1);
          }
          function flatMapDeep(collection, iteratee2) {
            return baseFlatten(map(collection, iteratee2), INFINITY);
          }
          function flatMapDepth(collection, iteratee2, depth) {
            depth = depth === undefined2 ? 1 : toInteger(depth);
            return baseFlatten(map(collection, iteratee2), depth);
          }
          function forEach(collection, iteratee2) {
            var func = isArray2(collection) ? arrayEach : baseEach;
            return func(collection, getIteratee(iteratee2, 3));
          }
          function forEachRight(collection, iteratee2) {
            var func = isArray2(collection) ? arrayEachRight : baseEachRight;
            return func(collection, getIteratee(iteratee2, 3));
          }
          var groupBy = createAggregator(function(result2, value, key) {
            if (hasOwnProperty2.call(result2, key)) {
              result2[key].push(value);
            } else {
              baseAssignValue(result2, key, [value]);
            }
          });
          function includes(collection, value, fromIndex, guard) {
            collection = isArrayLike2(collection) ? collection : values(collection);
            fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
            var length = collection.length;
            if (fromIndex < 0) {
              fromIndex = nativeMax(length + fromIndex, 0);
            }
            return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
          }
          var invokeMap = baseRest(function(collection, path, args) {
            var index = -1, isFunc = typeof path == "function", result2 = isArrayLike2(collection) ? Array2(collection.length) : [];
            baseEach(collection, function(value) {
              result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
            });
            return result2;
          });
          var keyBy = createAggregator(function(result2, value, key) {
            baseAssignValue(result2, key, value);
          });
          function map(collection, iteratee2) {
            var func = isArray2(collection) ? arrayMap : baseMap;
            return func(collection, getIteratee(iteratee2, 3));
          }
          function orderBy(collection, iteratees, orders, guard) {
            if (collection == null) {
              return [];
            }
            if (!isArray2(iteratees)) {
              iteratees = iteratees == null ? [] : [iteratees];
            }
            orders = guard ? undefined2 : orders;
            if (!isArray2(orders)) {
              orders = orders == null ? [] : [orders];
            }
            return baseOrderBy(collection, iteratees, orders);
          }
          var partition = createAggregator(function(result2, value, key) {
            result2[key ? 0 : 1].push(value);
          }, function() {
            return [[], []];
          });
          function reduce(collection, iteratee2, accumulator) {
            var func = isArray2(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
          }
          function reduceRight(collection, iteratee2, accumulator) {
            var func = isArray2(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
          }
          function reject(collection, predicate) {
            var func = isArray2(collection) ? arrayFilter2 : baseFilter;
            return func(collection, negate(getIteratee(predicate, 3)));
          }
          function sample(collection) {
            var func = isArray2(collection) ? arraySample : baseSample;
            return func(collection);
          }
          function sampleSize(collection, n, guard) {
            if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
              n = 1;
            } else {
              n = toInteger(n);
            }
            var func = isArray2(collection) ? arraySampleSize : baseSampleSize;
            return func(collection, n);
          }
          function shuffle(collection) {
            var func = isArray2(collection) ? arrayShuffle : baseShuffle;
            return func(collection);
          }
          function size(collection) {
            if (collection == null) {
              return 0;
            }
            if (isArrayLike2(collection)) {
              return isString(collection) ? stringSize(collection) : collection.length;
            }
            var tag = getTag2(collection);
            if (tag == mapTag2 || tag == setTag2) {
              return collection.size;
            }
            return baseKeys2(collection).length;
          }
          function some(collection, predicate, guard) {
            var func = isArray2(collection) ? arraySome2 : baseSome;
            if (guard && isIterateeCall(collection, predicate, guard)) {
              predicate = undefined2;
            }
            return func(collection, getIteratee(predicate, 3));
          }
          var sortBy = baseRest(function(collection, iteratees) {
            if (collection == null) {
              return [];
            }
            var length = iteratees.length;
            if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
              iteratees = [];
            } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
              iteratees = [iteratees[0]];
            }
            return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
          });
          var now = ctxNow || function() {
            return root2.Date.now();
          };
          function after(n, func) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            n = toInteger(n);
            return function() {
              if (--n < 1) {
                return func.apply(this, arguments);
              }
            };
          }
          function ary(func, n, guard) {
            n = guard ? undefined2 : n;
            n = func && n == null ? func.length : n;
            return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
          }
          function before(n, func) {
            var result2;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            n = toInteger(n);
            return function() {
              if (--n > 0) {
                result2 = func.apply(this, arguments);
              }
              if (n <= 1) {
                func = undefined2;
              }
              return result2;
            };
          }
          var bind = baseRest(function(func, thisArg, partials) {
            var bitmask = WRAP_BIND_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bind));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(func, bitmask, thisArg, partials, holders);
          });
          var bindKey = baseRest(function(object, key, partials) {
            var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bindKey));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(key, bitmask, object, partials, holders);
          });
          function curry(func, arity, guard) {
            arity = guard ? undefined2 : arity;
            var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
            result2.placeholder = curry.placeholder;
            return result2;
          }
          function curryRight(func, arity, guard) {
            arity = guard ? undefined2 : arity;
            var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
            result2.placeholder = curryRight.placeholder;
            return result2;
          }
          function debounce2(func, wait, options) {
            var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            wait = toNumber(wait) || 0;
            if (isObject2(options)) {
              leading = !!options.leading;
              maxing = "maxWait" in options;
              maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            function invokeFunc(time) {
              var args = lastArgs, thisArg = lastThis;
              lastArgs = lastThis = undefined2;
              lastInvokeTime = time;
              result2 = func.apply(thisArg, args);
              return result2;
            }
            function leadingEdge(time) {
              lastInvokeTime = time;
              timerId = setTimeout2(timerExpired, wait);
              return leading ? invokeFunc(time) : result2;
            }
            function remainingWait(time) {
              var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
              return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
            }
            function shouldInvoke(time) {
              var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
              return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
            }
            function timerExpired() {
              var time = now();
              if (shouldInvoke(time)) {
                return trailingEdge(time);
              }
              timerId = setTimeout2(timerExpired, remainingWait(time));
            }
            function trailingEdge(time) {
              timerId = undefined2;
              if (trailing && lastArgs) {
                return invokeFunc(time);
              }
              lastArgs = lastThis = undefined2;
              return result2;
            }
            function cancel() {
              if (timerId !== undefined2) {
                clearTimeout2(timerId);
              }
              lastInvokeTime = 0;
              lastArgs = lastCallTime = lastThis = timerId = undefined2;
            }
            function flush() {
              return timerId === undefined2 ? result2 : trailingEdge(now());
            }
            function debounced() {
              var time = now(), isInvoking = shouldInvoke(time);
              lastArgs = arguments;
              lastThis = this;
              lastCallTime = time;
              if (isInvoking) {
                if (timerId === undefined2) {
                  return leadingEdge(lastCallTime);
                }
                if (maxing) {
                  clearTimeout2(timerId);
                  timerId = setTimeout2(timerExpired, wait);
                  return invokeFunc(lastCallTime);
                }
              }
              if (timerId === undefined2) {
                timerId = setTimeout2(timerExpired, wait);
              }
              return result2;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
          }
          var defer = baseRest(function(func, args) {
            return baseDelay(func, 1, args);
          });
          var delay = baseRest(function(func, wait, args) {
            return baseDelay(func, toNumber(wait) || 0, args);
          });
          function flip(func) {
            return createWrap(func, WRAP_FLIP_FLAG);
          }
          function memoize(func, resolver) {
            if (typeof func != "function" || resolver != null && typeof resolver != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            var memoized = function() {
              var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
              if (cache.has(key)) {
                return cache.get(key);
              }
              var result2 = func.apply(this, args);
              memoized.cache = cache.set(key, result2) || cache;
              return result2;
            };
            memoized.cache = new (memoize.Cache || MapCache2)();
            return memoized;
          }
          memoize.Cache = MapCache2;
          function negate(predicate) {
            if (typeof predicate != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return function() {
              var args = arguments;
              switch (args.length) {
                case 0:
                  return !predicate.call(this);
                case 1:
                  return !predicate.call(this, args[0]);
                case 2:
                  return !predicate.call(this, args[0], args[1]);
                case 3:
                  return !predicate.call(this, args[0], args[1], args[2]);
              }
              return !predicate.apply(this, args);
            };
          }
          function once(func) {
            return before(2, func);
          }
          var overArgs = castRest(function(func, transforms) {
            transforms = transforms.length == 1 && isArray2(transforms[0]) ? arrayMap(transforms[0], baseUnary2(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary2(getIteratee()));
            var funcsLength = transforms.length;
            return baseRest(function(args) {
              var index = -1, length = nativeMin(args.length, funcsLength);
              while (++index < length) {
                args[index] = transforms[index].call(this, args[index]);
              }
              return apply(func, this, args);
            });
          });
          var partial = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partial));
            return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
          });
          var partialRight = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partialRight));
            return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
          });
          var rearg = flatRest(function(func, indexes) {
            return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
          });
          function rest(func, start) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            start = start === undefined2 ? start : toInteger(start);
            return baseRest(func, start);
          }
          function spread(func, start) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            start = start == null ? 0 : nativeMax(toInteger(start), 0);
            return baseRest(function(args) {
              var array = args[start], otherArgs = castSlice(args, 0, start);
              if (array) {
                arrayPush2(otherArgs, array);
              }
              return apply(func, this, otherArgs);
            });
          }
          function throttle(func, wait, options) {
            var leading = true, trailing = true;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            if (isObject2(options)) {
              leading = "leading" in options ? !!options.leading : leading;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            return debounce2(func, wait, {
              "leading": leading,
              "maxWait": wait,
              "trailing": trailing
            });
          }
          function unary(func) {
            return ary(func, 1);
          }
          function wrap(value, wrapper) {
            return partial(castFunction(wrapper), value);
          }
          function castArray() {
            if (!arguments.length) {
              return [];
            }
            var value = arguments[0];
            return isArray2(value) ? value : [value];
          }
          function clone(value) {
            return baseClone(value, CLONE_SYMBOLS_FLAG);
          }
          function cloneWith(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
          }
          function cloneDeep(value) {
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
          }
          function cloneDeepWith(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
          }
          function conformsTo(object, source) {
            return source == null || baseConformsTo(object, source, keys2(source));
          }
          function eq2(value, other) {
            return value === other || value !== value && other !== other;
          }
          var gt = createRelationalOperation(baseGt);
          var gte = createRelationalOperation(function(value, other) {
            return value >= other;
          });
          var isArguments2 = baseIsArguments2(/* @__PURE__ */ function() {
            return arguments;
          }()) ? baseIsArguments2 : function(value) {
            return isObjectLike2(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable2.call(value, "callee");
          };
          var isArray2 = Array2.isArray;
          var isArrayBuffer = nodeIsArrayBuffer ? baseUnary2(nodeIsArrayBuffer) : baseIsArrayBuffer;
          function isArrayLike2(value) {
            return value != null && isLength2(value.length) && !isFunction2(value);
          }
          function isArrayLikeObject(value) {
            return isObjectLike2(value) && isArrayLike2(value);
          }
          function isBoolean(value) {
            return value === true || value === false || isObjectLike2(value) && baseGetTag2(value) == boolTag2;
          }
          var isBuffer2 = nativeIsBuffer || stubFalse2;
          var isDate = nodeIsDate ? baseUnary2(nodeIsDate) : baseIsDate;
          function isElement(value) {
            return isObjectLike2(value) && value.nodeType === 1 && !isPlainObject(value);
          }
          function isEmpty(value) {
            if (value == null) {
              return true;
            }
            if (isArrayLike2(value) && (isArray2(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer2(value) || isTypedArray2(value) || isArguments2(value))) {
              return !value.length;
            }
            var tag = getTag2(value);
            if (tag == mapTag2 || tag == setTag2) {
              return !value.size;
            }
            if (isPrototype2(value)) {
              return !baseKeys2(value).length;
            }
            for (var key in value) {
              if (hasOwnProperty2.call(value, key)) {
                return false;
              }
            }
            return true;
          }
          function isEqual2(value, other) {
            return baseIsEqual2(value, other);
          }
          function isEqualWith(value, other, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            var result2 = customizer ? customizer(value, other) : undefined2;
            return result2 === undefined2 ? baseIsEqual2(value, other, undefined2, customizer) : !!result2;
          }
          function isError(value) {
            if (!isObjectLike2(value)) {
              return false;
            }
            var tag = baseGetTag2(value);
            return tag == errorTag2 || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
          }
          function isFinite(value) {
            return typeof value == "number" && nativeIsFinite(value);
          }
          function isFunction2(value) {
            if (!isObject2(value)) {
              return false;
            }
            var tag = baseGetTag2(value);
            return tag == funcTag2 || tag == genTag2 || tag == asyncTag2 || tag == proxyTag2;
          }
          function isInteger(value) {
            return typeof value == "number" && value == toInteger(value);
          }
          function isLength2(value) {
            return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
          }
          function isObject2(value) {
            var type = typeof value;
            return value != null && (type == "object" || type == "function");
          }
          function isObjectLike2(value) {
            return value != null && typeof value == "object";
          }
          var isMap = nodeIsMap ? baseUnary2(nodeIsMap) : baseIsMap;
          function isMatch(object, source) {
            return object === source || baseIsMatch(object, source, getMatchData(source));
          }
          function isMatchWith(object, source, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return baseIsMatch(object, source, getMatchData(source), customizer);
          }
          function isNaN2(value) {
            return isNumber(value) && value != +value;
          }
          function isNative(value) {
            if (isMaskable(value)) {
              throw new Error2(CORE_ERROR_TEXT);
            }
            return baseIsNative2(value);
          }
          function isNull(value) {
            return value === null;
          }
          function isNil(value) {
            return value == null;
          }
          function isNumber(value) {
            return typeof value == "number" || isObjectLike2(value) && baseGetTag2(value) == numberTag2;
          }
          function isPlainObject(value) {
            if (!isObjectLike2(value) || baseGetTag2(value) != objectTag2) {
              return false;
            }
            var proto = getPrototype(value);
            if (proto === null) {
              return true;
            }
            var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
            return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString2.call(Ctor) == objectCtorString;
          }
          var isRegExp = nodeIsRegExp ? baseUnary2(nodeIsRegExp) : baseIsRegExp;
          function isSafeInteger(value) {
            return isInteger(value) && value >= -MAX_SAFE_INTEGER2 && value <= MAX_SAFE_INTEGER2;
          }
          var isSet2 = nodeIsSet ? baseUnary2(nodeIsSet) : baseIsSet;
          function isString(value) {
            return typeof value == "string" || !isArray2(value) && isObjectLike2(value) && baseGetTag2(value) == stringTag2;
          }
          function isSymbol(value) {
            return typeof value == "symbol" || isObjectLike2(value) && baseGetTag2(value) == symbolTag2;
          }
          var isTypedArray2 = nodeIsTypedArray2 ? baseUnary2(nodeIsTypedArray2) : baseIsTypedArray2;
          function isUndefined(value) {
            return value === undefined2;
          }
          function isWeakMap(value) {
            return isObjectLike2(value) && getTag2(value) == weakMapTag2;
          }
          function isWeakSet(value) {
            return isObjectLike2(value) && baseGetTag2(value) == weakSetTag;
          }
          var lt = createRelationalOperation(baseLt);
          var lte = createRelationalOperation(function(value, other) {
            return value <= other;
          });
          function toArray(value) {
            if (!value) {
              return [];
            }
            if (isArrayLike2(value)) {
              return isString(value) ? stringToArray(value) : copyArray(value);
            }
            if (symIterator && value[symIterator]) {
              return iteratorToArray(value[symIterator]());
            }
            var tag = getTag2(value), func = tag == mapTag2 ? mapToArray2 : tag == setTag2 ? setToArray2 : values;
            return func(value);
          }
          function toFinite(value) {
            if (!value) {
              return value === 0 ? value : 0;
            }
            value = toNumber(value);
            if (value === INFINITY || value === -INFINITY) {
              var sign = value < 0 ? -1 : 1;
              return sign * MAX_INTEGER;
            }
            return value === value ? value : 0;
          }
          function toInteger(value) {
            var result2 = toFinite(value), remainder = result2 % 1;
            return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
          }
          function toLength(value) {
            return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
          }
          function toNumber(value) {
            if (typeof value == "number") {
              return value;
            }
            if (isSymbol(value)) {
              return NAN;
            }
            if (isObject2(value)) {
              var other = typeof value.valueOf == "function" ? value.valueOf() : value;
              value = isObject2(other) ? other + "" : other;
            }
            if (typeof value != "string") {
              return value === 0 ? value : +value;
            }
            value = baseTrim(value);
            var isBinary = reIsBinary.test(value);
            return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
          }
          function toPlainObject(value) {
            return copyObject(value, keysIn(value));
          }
          function toSafeInteger(value) {
            return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER2, MAX_SAFE_INTEGER2) : value === 0 ? value : 0;
          }
          function toString(value) {
            return value == null ? "" : baseToString(value);
          }
          var assign = createAssigner(function(object, source) {
            if (isPrototype2(source) || isArrayLike2(source)) {
              copyObject(source, keys2(source), object);
              return;
            }
            for (var key in source) {
              if (hasOwnProperty2.call(source, key)) {
                assignValue(object, key, source[key]);
              }
            }
          });
          var assignIn = createAssigner(function(object, source) {
            copyObject(source, keysIn(source), object);
          });
          var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keysIn(source), object, customizer);
          });
          var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keys2(source), object, customizer);
          });
          var at = flatRest(baseAt);
          function create(prototype, properties) {
            var result2 = baseCreate(prototype);
            return properties == null ? result2 : baseAssign(result2, properties);
          }
          var defaults2 = baseRest(function(object, sources) {
            object = Object2(object);
            var index = -1;
            var length = sources.length;
            var guard = length > 2 ? sources[2] : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              length = 1;
            }
            while (++index < length) {
              var source = sources[index];
              var props = keysIn(source);
              var propsIndex = -1;
              var propsLength = props.length;
              while (++propsIndex < propsLength) {
                var key = props[propsIndex];
                var value = object[key];
                if (value === undefined2 || eq2(value, objectProto2[key]) && !hasOwnProperty2.call(object, key)) {
                  object[key] = source[key];
                }
              }
            }
            return object;
          });
          var defaultsDeep = baseRest(function(args) {
            args.push(undefined2, customDefaultsMerge);
            return apply(mergeWith, undefined2, args);
          });
          function findKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
          }
          function findLastKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
          }
          function forIn(object, iteratee2) {
            return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
          }
          function forInRight(object, iteratee2) {
            return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
          }
          function forOwn(object, iteratee2) {
            return object && baseForOwn(object, getIteratee(iteratee2, 3));
          }
          function forOwnRight(object, iteratee2) {
            return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
          }
          function functions(object) {
            return object == null ? [] : baseFunctions(object, keys2(object));
          }
          function functionsIn(object) {
            return object == null ? [] : baseFunctions(object, keysIn(object));
          }
          function get(object, path, defaultValue) {
            var result2 = object == null ? undefined2 : baseGet(object, path);
            return result2 === undefined2 ? defaultValue : result2;
          }
          function has(object, path) {
            return object != null && hasPath(object, path, baseHas);
          }
          function hasIn(object, path) {
            return object != null && hasPath(object, path, baseHasIn);
          }
          var invert = createInverter(function(result2, value, key) {
            if (value != null && typeof value.toString != "function") {
              value = nativeObjectToString2.call(value);
            }
            result2[value] = key;
          }, constant(identity));
          var invertBy = createInverter(function(result2, value, key) {
            if (value != null && typeof value.toString != "function") {
              value = nativeObjectToString2.call(value);
            }
            if (hasOwnProperty2.call(result2, value)) {
              result2[value].push(key);
            } else {
              result2[value] = [key];
            }
          }, getIteratee);
          var invoke = baseRest(baseInvoke);
          function keys2(object) {
            return isArrayLike2(object) ? arrayLikeKeys2(object) : baseKeys2(object);
          }
          function keysIn(object) {
            return isArrayLike2(object) ? arrayLikeKeys2(object, true) : baseKeysIn(object);
          }
          function mapKeys(object, iteratee2) {
            var result2 = {};
            iteratee2 = getIteratee(iteratee2, 3);
            baseForOwn(object, function(value, key, object2) {
              baseAssignValue(result2, iteratee2(value, key, object2), value);
            });
            return result2;
          }
          function mapValues(object, iteratee2) {
            var result2 = {};
            iteratee2 = getIteratee(iteratee2, 3);
            baseForOwn(object, function(value, key, object2) {
              baseAssignValue(result2, key, iteratee2(value, key, object2));
            });
            return result2;
          }
          var merge = createAssigner(function(object, source, srcIndex) {
            baseMerge(object, source, srcIndex);
          });
          var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
            baseMerge(object, source, srcIndex, customizer);
          });
          var omit = flatRest(function(object, paths) {
            var result2 = {};
            if (object == null) {
              return result2;
            }
            var isDeep = false;
            paths = arrayMap(paths, function(path) {
              path = castPath(path, object);
              isDeep || (isDeep = path.length > 1);
              return path;
            });
            copyObject(object, getAllKeysIn(object), result2);
            if (isDeep) {
              result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
            }
            var length = paths.length;
            while (length--) {
              baseUnset(result2, paths[length]);
            }
            return result2;
          });
          function omitBy(object, predicate) {
            return pickBy(object, negate(getIteratee(predicate)));
          }
          var pick = flatRest(function(object, paths) {
            return object == null ? {} : basePick(object, paths);
          });
          function pickBy(object, predicate) {
            if (object == null) {
              return {};
            }
            var props = arrayMap(getAllKeysIn(object), function(prop) {
              return [prop];
            });
            predicate = getIteratee(predicate);
            return basePickBy(object, props, function(value, path) {
              return predicate(value, path[0]);
            });
          }
          function result(object, path, defaultValue) {
            path = castPath(path, object);
            var index = -1, length = path.length;
            if (!length) {
              length = 1;
              object = undefined2;
            }
            while (++index < length) {
              var value = object == null ? undefined2 : object[toKey(path[index])];
              if (value === undefined2) {
                index = length;
                value = defaultValue;
              }
              object = isFunction2(value) ? value.call(object) : value;
            }
            return object;
          }
          function set(object, path, value) {
            return object == null ? object : baseSet(object, path, value);
          }
          function setWith(object, path, value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return object == null ? object : baseSet(object, path, value, customizer);
          }
          var toPairs = createToPairs(keys2);
          var toPairsIn = createToPairs(keysIn);
          function transform(object, iteratee2, accumulator) {
            var isArr = isArray2(object), isArrLike = isArr || isBuffer2(object) || isTypedArray2(object);
            iteratee2 = getIteratee(iteratee2, 4);
            if (accumulator == null) {
              var Ctor = object && object.constructor;
              if (isArrLike) {
                accumulator = isArr ? new Ctor() : [];
              } else if (isObject2(object)) {
                accumulator = isFunction2(Ctor) ? baseCreate(getPrototype(object)) : {};
              } else {
                accumulator = {};
              }
            }
            (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
              return iteratee2(accumulator, value, index, object2);
            });
            return accumulator;
          }
          function unset(object, path) {
            return object == null ? true : baseUnset(object, path);
          }
          function update(object, path, updater) {
            return object == null ? object : baseUpdate(object, path, castFunction(updater));
          }
          function updateWith(object, path, updater, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
          }
          function values(object) {
            return object == null ? [] : baseValues(object, keys2(object));
          }
          function valuesIn(object) {
            return object == null ? [] : baseValues(object, keysIn(object));
          }
          function clamp2(number, lower, upper) {
            if (upper === undefined2) {
              upper = lower;
              lower = undefined2;
            }
            if (upper !== undefined2) {
              upper = toNumber(upper);
              upper = upper === upper ? upper : 0;
            }
            if (lower !== undefined2) {
              lower = toNumber(lower);
              lower = lower === lower ? lower : 0;
            }
            return baseClamp(toNumber(number), lower, upper);
          }
          function inRange(number, start, end) {
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            number = toNumber(number);
            return baseInRange(number, start, end);
          }
          function random(lower, upper, floating) {
            if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
              upper = floating = undefined2;
            }
            if (floating === undefined2) {
              if (typeof upper == "boolean") {
                floating = upper;
                upper = undefined2;
              } else if (typeof lower == "boolean") {
                floating = lower;
                lower = undefined2;
              }
            }
            if (lower === undefined2 && upper === undefined2) {
              lower = 0;
              upper = 1;
            } else {
              lower = toFinite(lower);
              if (upper === undefined2) {
                upper = lower;
                lower = 0;
              } else {
                upper = toFinite(upper);
              }
            }
            if (lower > upper) {
              var temp = lower;
              lower = upper;
              upper = temp;
            }
            if (floating || lower % 1 || upper % 1) {
              var rand = nativeRandom();
              return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
            }
            return baseRandom(lower, upper);
          }
          var camelCase = createCompounder(function(result2, word, index) {
            word = word.toLowerCase();
            return result2 + (index ? capitalize(word) : word);
          });
          function capitalize(string) {
            return upperFirst(toString(string).toLowerCase());
          }
          function deburr(string) {
            string = toString(string);
            return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
          }
          function endsWith(string, target, position) {
            string = toString(string);
            target = baseToString(target);
            var length = string.length;
            position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
            var end = position;
            position -= target.length;
            return position >= 0 && string.slice(position, end) == target;
          }
          function escape(string) {
            string = toString(string);
            return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
          }
          function escapeRegExp(string) {
            string = toString(string);
            return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar2, "\\$&") : string;
          }
          var kebabCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? "-" : "") + word.toLowerCase();
          });
          var lowerCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + word.toLowerCase();
          });
          var lowerFirst = createCaseFirst("toLowerCase");
          function pad(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            if (!length || strLength >= length) {
              return string;
            }
            var mid = (length - strLength) / 2;
            return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
          }
          function padEnd(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
          }
          function padStart(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
          }
          function parseInt2(string, radix, guard) {
            if (guard || radix == null) {
              radix = 0;
            } else if (radix) {
              radix = +radix;
            }
            return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
          }
          function repeat(string, n, guard) {
            if (guard ? isIterateeCall(string, n, guard) : n === undefined2) {
              n = 1;
            } else {
              n = toInteger(n);
            }
            return baseRepeat(toString(string), n);
          }
          function replace() {
            var args = arguments, string = toString(args[0]);
            return args.length < 3 ? string : string.replace(args[1], args[2]);
          }
          var snakeCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? "_" : "") + word.toLowerCase();
          });
          function split(string, separator, limit) {
            if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
              separator = limit = undefined2;
            }
            limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
            if (!limit) {
              return [];
            }
            string = toString(string);
            if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
              separator = baseToString(separator);
              if (!separator && hasUnicode(string)) {
                return castSlice(stringToArray(string), 0, limit);
              }
            }
            return string.split(separator, limit);
          }
          var startCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + upperFirst(word);
          });
          function startsWith(string, target, position) {
            string = toString(string);
            position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
            target = baseToString(target);
            return string.slice(position, position + target.length) == target;
          }
          function template(string, options, guard) {
            var settings = lodash.templateSettings;
            if (guard && isIterateeCall(string, options, guard)) {
              options = undefined2;
            }
            string = toString(string);
            options = assignInWith({}, options, settings, customDefaultsAssignIn);
            var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys2(imports), importsValues = baseValues(imports, importsKeys);
            var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
            var reDelimiters = RegExp2(
              (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
              "g"
            );
            var sourceURL = "//# sourceURL=" + (hasOwnProperty2.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
            string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset2) {
              interpolateValue || (interpolateValue = esTemplateValue);
              source += string.slice(index, offset2).replace(reUnescapedString, escapeStringChar);
              if (escapeValue) {
                isEscaping = true;
                source += "' +\n__e(" + escapeValue + ") +\n'";
              }
              if (evaluateValue) {
                isEvaluating = true;
                source += "';\n" + evaluateValue + ";\n__p += '";
              }
              if (interpolateValue) {
                source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
              }
              index = offset2 + match.length;
              return match;
            });
            source += "';\n";
            var variable = hasOwnProperty2.call(options, "variable") && options.variable;
            if (!variable) {
              source = "with (obj) {\n" + source + "\n}\n";
            } else if (reForbiddenIdentifierChars.test(variable)) {
              throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
            }
            source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
            source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
            var result2 = attempt(function() {
              return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
            });
            result2.source = source;
            if (isError(result2)) {
              throw result2;
            }
            return result2;
          }
          function toLower(value) {
            return toString(value).toLowerCase();
          }
          function toUpper(value) {
            return toString(value).toUpperCase();
          }
          function trim(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined2)) {
              return baseTrim(string);
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
            return castSlice(strSymbols, start, end).join("");
          }
          function trimEnd(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined2)) {
              return string.slice(0, trimmedEndIndex(string) + 1);
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
            return castSlice(strSymbols, 0, end).join("");
          }
          function trimStart(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined2)) {
              return string.replace(reTrimStart, "");
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
            return castSlice(strSymbols, start).join("");
          }
          function truncate(string, options) {
            var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
            if (isObject2(options)) {
              var separator = "separator" in options ? options.separator : separator;
              length = "length" in options ? toInteger(options.length) : length;
              omission = "omission" in options ? baseToString(options.omission) : omission;
            }
            string = toString(string);
            var strLength = string.length;
            if (hasUnicode(string)) {
              var strSymbols = stringToArray(string);
              strLength = strSymbols.length;
            }
            if (length >= strLength) {
              return string;
            }
            var end = length - stringSize(omission);
            if (end < 1) {
              return omission;
            }
            var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
            if (separator === undefined2) {
              return result2 + omission;
            }
            if (strSymbols) {
              end += result2.length - end;
            }
            if (isRegExp(separator)) {
              if (string.slice(end).search(separator)) {
                var match, substring = result2;
                if (!separator.global) {
                  separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
                }
                separator.lastIndex = 0;
                while (match = separator.exec(substring)) {
                  var newEnd = match.index;
                }
                result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
              }
            } else if (string.indexOf(baseToString(separator), end) != end) {
              var index = result2.lastIndexOf(separator);
              if (index > -1) {
                result2 = result2.slice(0, index);
              }
            }
            return result2 + omission;
          }
          function unescape(string) {
            string = toString(string);
            return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
          }
          var upperCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + word.toUpperCase();
          });
          var upperFirst = createCaseFirst("toUpperCase");
          function words(string, pattern, guard) {
            string = toString(string);
            pattern = guard ? undefined2 : pattern;
            if (pattern === undefined2) {
              return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
            }
            return string.match(pattern) || [];
          }
          var attempt = baseRest(function(func, args) {
            try {
              return apply(func, undefined2, args);
            } catch (e) {
              return isError(e) ? e : new Error2(e);
            }
          });
          var bindAll = flatRest(function(object, methodNames) {
            arrayEach(methodNames, function(key) {
              key = toKey(key);
              baseAssignValue(object, key, bind(object[key], object));
            });
            return object;
          });
          function cond(pairs) {
            var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
            pairs = !length ? [] : arrayMap(pairs, function(pair) {
              if (typeof pair[1] != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              return [toIteratee(pair[0]), pair[1]];
            });
            return baseRest(function(args) {
              var index = -1;
              while (++index < length) {
                var pair = pairs[index];
                if (apply(pair[0], this, args)) {
                  return apply(pair[1], this, args);
                }
              }
            });
          }
          function conforms(source) {
            return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
          }
          function constant(value) {
            return function() {
              return value;
            };
          }
          function defaultTo(value, defaultValue) {
            return value == null || value !== value ? defaultValue : value;
          }
          var flow = createFlow();
          var flowRight = createFlow(true);
          function identity(value) {
            return value;
          }
          function iteratee(func) {
            return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
          }
          function matches(source) {
            return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
          }
          function matchesProperty(path, srcValue) {
            return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
          }
          var method = baseRest(function(path, args) {
            return function(object) {
              return baseInvoke(object, path, args);
            };
          });
          var methodOf = baseRest(function(object, args) {
            return function(path) {
              return baseInvoke(object, path, args);
            };
          });
          function mixin(object, source, options) {
            var props = keys2(source), methodNames = baseFunctions(source, props);
            if (options == null && !(isObject2(source) && (methodNames.length || !props.length))) {
              options = source;
              source = object;
              object = this;
              methodNames = baseFunctions(source, keys2(source));
            }
            var chain2 = !(isObject2(options) && "chain" in options) || !!options.chain, isFunc = isFunction2(object);
            arrayEach(methodNames, function(methodName) {
              var func = source[methodName];
              object[methodName] = func;
              if (isFunc) {
                object.prototype[methodName] = function() {
                  var chainAll = this.__chain__;
                  if (chain2 || chainAll) {
                    var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                    actions.push({ "func": func, "args": arguments, "thisArg": object });
                    result2.__chain__ = chainAll;
                    return result2;
                  }
                  return func.apply(object, arrayPush2([this.value()], arguments));
                };
              }
            });
            return object;
          }
          function noConflict() {
            if (root2._ === this) {
              root2._ = oldDash;
            }
            return this;
          }
          function noop() {
          }
          function nthArg(n) {
            n = toInteger(n);
            return baseRest(function(args) {
              return baseNth(args, n);
            });
          }
          var over = createOver(arrayMap);
          var overEvery = createOver(arrayEvery);
          var overSome = createOver(arraySome2);
          function property(path) {
            return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
          }
          function propertyOf(object) {
            return function(path) {
              return object == null ? undefined2 : baseGet(object, path);
            };
          }
          var range = createRange();
          var rangeRight = createRange(true);
          function stubArray2() {
            return [];
          }
          function stubFalse2() {
            return false;
          }
          function stubObject() {
            return {};
          }
          function stubString() {
            return "";
          }
          function stubTrue() {
            return true;
          }
          function times(n, iteratee2) {
            n = toInteger(n);
            if (n < 1 || n > MAX_SAFE_INTEGER2) {
              return [];
            }
            var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
            iteratee2 = getIteratee(iteratee2);
            n -= MAX_ARRAY_LENGTH;
            var result2 = baseTimes2(length, iteratee2);
            while (++index < n) {
              iteratee2(index);
            }
            return result2;
          }
          function toPath(value) {
            if (isArray2(value)) {
              return arrayMap(value, toKey);
            }
            return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
          }
          function uniqueId(prefix) {
            var id = ++idCounter;
            return toString(prefix) + id;
          }
          var add = createMathOperation(function(augend, addend) {
            return augend + addend;
          }, 0);
          var ceil = createRound("ceil");
          var divide = createMathOperation(function(dividend, divisor) {
            return dividend / divisor;
          }, 1);
          var floor = createRound("floor");
          function max(array) {
            return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
          }
          function maxBy(array, iteratee2) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
          }
          function mean(array) {
            return baseMean(array, identity);
          }
          function meanBy(array, iteratee2) {
            return baseMean(array, getIteratee(iteratee2, 2));
          }
          function min(array) {
            return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
          }
          function minBy(array, iteratee2) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
          }
          var multiply = createMathOperation(function(multiplier, multiplicand) {
            return multiplier * multiplicand;
          }, 1);
          var round = createRound("round");
          var subtract = createMathOperation(function(minuend, subtrahend) {
            return minuend - subtrahend;
          }, 0);
          function sum(array) {
            return array && array.length ? baseSum(array, identity) : 0;
          }
          function sumBy(array, iteratee2) {
            return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
          }
          lodash.after = after;
          lodash.ary = ary;
          lodash.assign = assign;
          lodash.assignIn = assignIn;
          lodash.assignInWith = assignInWith;
          lodash.assignWith = assignWith;
          lodash.at = at;
          lodash.before = before;
          lodash.bind = bind;
          lodash.bindAll = bindAll;
          lodash.bindKey = bindKey;
          lodash.castArray = castArray;
          lodash.chain = chain;
          lodash.chunk = chunk;
          lodash.compact = compact;
          lodash.concat = concat;
          lodash.cond = cond;
          lodash.conforms = conforms;
          lodash.constant = constant;
          lodash.countBy = countBy;
          lodash.create = create;
          lodash.curry = curry;
          lodash.curryRight = curryRight;
          lodash.debounce = debounce2;
          lodash.defaults = defaults2;
          lodash.defaultsDeep = defaultsDeep;
          lodash.defer = defer;
          lodash.delay = delay;
          lodash.difference = difference;
          lodash.differenceBy = differenceBy;
          lodash.differenceWith = differenceWith;
          lodash.drop = drop;
          lodash.dropRight = dropRight;
          lodash.dropRightWhile = dropRightWhile;
          lodash.dropWhile = dropWhile;
          lodash.fill = fill;
          lodash.filter = filter2;
          lodash.flatMap = flatMap;
          lodash.flatMapDeep = flatMapDeep;
          lodash.flatMapDepth = flatMapDepth;
          lodash.flatten = flatten;
          lodash.flattenDeep = flattenDeep;
          lodash.flattenDepth = flattenDepth;
          lodash.flip = flip;
          lodash.flow = flow;
          lodash.flowRight = flowRight;
          lodash.fromPairs = fromPairs;
          lodash.functions = functions;
          lodash.functionsIn = functionsIn;
          lodash.groupBy = groupBy;
          lodash.initial = initial;
          lodash.intersection = intersection2;
          lodash.intersectionBy = intersectionBy;
          lodash.intersectionWith = intersectionWith;
          lodash.invert = invert;
          lodash.invertBy = invertBy;
          lodash.invokeMap = invokeMap;
          lodash.iteratee = iteratee;
          lodash.keyBy = keyBy;
          lodash.keys = keys2;
          lodash.keysIn = keysIn;
          lodash.map = map;
          lodash.mapKeys = mapKeys;
          lodash.mapValues = mapValues;
          lodash.matches = matches;
          lodash.matchesProperty = matchesProperty;
          lodash.memoize = memoize;
          lodash.merge = merge;
          lodash.mergeWith = mergeWith;
          lodash.method = method;
          lodash.methodOf = methodOf;
          lodash.mixin = mixin;
          lodash.negate = negate;
          lodash.nthArg = nthArg;
          lodash.omit = omit;
          lodash.omitBy = omitBy;
          lodash.once = once;
          lodash.orderBy = orderBy;
          lodash.over = over;
          lodash.overArgs = overArgs;
          lodash.overEvery = overEvery;
          lodash.overSome = overSome;
          lodash.partial = partial;
          lodash.partialRight = partialRight;
          lodash.partition = partition;
          lodash.pick = pick;
          lodash.pickBy = pickBy;
          lodash.property = property;
          lodash.propertyOf = propertyOf;
          lodash.pull = pull;
          lodash.pullAll = pullAll;
          lodash.pullAllBy = pullAllBy;
          lodash.pullAllWith = pullAllWith;
          lodash.pullAt = pullAt;
          lodash.range = range;
          lodash.rangeRight = rangeRight;
          lodash.rearg = rearg;
          lodash.reject = reject;
          lodash.remove = remove;
          lodash.rest = rest;
          lodash.reverse = reverse;
          lodash.sampleSize = sampleSize;
          lodash.set = set;
          lodash.setWith = setWith;
          lodash.shuffle = shuffle;
          lodash.slice = slice;
          lodash.sortBy = sortBy;
          lodash.sortedUniq = sortedUniq;
          lodash.sortedUniqBy = sortedUniqBy;
          lodash.split = split;
          lodash.spread = spread;
          lodash.tail = tail;
          lodash.take = take;
          lodash.takeRight = takeRight;
          lodash.takeRightWhile = takeRightWhile;
          lodash.takeWhile = takeWhile;
          lodash.tap = tap;
          lodash.throttle = throttle;
          lodash.thru = thru;
          lodash.toArray = toArray;
          lodash.toPairs = toPairs;
          lodash.toPairsIn = toPairsIn;
          lodash.toPath = toPath;
          lodash.toPlainObject = toPlainObject;
          lodash.transform = transform;
          lodash.unary = unary;
          lodash.union = union;
          lodash.unionBy = unionBy;
          lodash.unionWith = unionWith;
          lodash.uniq = uniq;
          lodash.uniqBy = uniqBy;
          lodash.uniqWith = uniqWith;
          lodash.unset = unset;
          lodash.unzip = unzip;
          lodash.unzipWith = unzipWith;
          lodash.update = update;
          lodash.updateWith = updateWith;
          lodash.values = values;
          lodash.valuesIn = valuesIn;
          lodash.without = without;
          lodash.words = words;
          lodash.wrap = wrap;
          lodash.xor = xor;
          lodash.xorBy = xorBy;
          lodash.xorWith = xorWith;
          lodash.zip = zip;
          lodash.zipObject = zipObject;
          lodash.zipObjectDeep = zipObjectDeep;
          lodash.zipWith = zipWith;
          lodash.entries = toPairs;
          lodash.entriesIn = toPairsIn;
          lodash.extend = assignIn;
          lodash.extendWith = assignInWith;
          mixin(lodash, lodash);
          lodash.add = add;
          lodash.attempt = attempt;
          lodash.camelCase = camelCase;
          lodash.capitalize = capitalize;
          lodash.ceil = ceil;
          lodash.clamp = clamp2;
          lodash.clone = clone;
          lodash.cloneDeep = cloneDeep;
          lodash.cloneDeepWith = cloneDeepWith;
          lodash.cloneWith = cloneWith;
          lodash.conformsTo = conformsTo;
          lodash.deburr = deburr;
          lodash.defaultTo = defaultTo;
          lodash.divide = divide;
          lodash.endsWith = endsWith;
          lodash.eq = eq2;
          lodash.escape = escape;
          lodash.escapeRegExp = escapeRegExp;
          lodash.every = every;
          lodash.find = find;
          lodash.findIndex = findIndex;
          lodash.findKey = findKey;
          lodash.findLast = findLast;
          lodash.findLastIndex = findLastIndex;
          lodash.findLastKey = findLastKey;
          lodash.floor = floor;
          lodash.forEach = forEach;
          lodash.forEachRight = forEachRight;
          lodash.forIn = forIn;
          lodash.forInRight = forInRight;
          lodash.forOwn = forOwn;
          lodash.forOwnRight = forOwnRight;
          lodash.get = get;
          lodash.gt = gt;
          lodash.gte = gte;
          lodash.has = has;
          lodash.hasIn = hasIn;
          lodash.head = head;
          lodash.identity = identity;
          lodash.includes = includes;
          lodash.indexOf = indexOf;
          lodash.inRange = inRange;
          lodash.invoke = invoke;
          lodash.isArguments = isArguments2;
          lodash.isArray = isArray2;
          lodash.isArrayBuffer = isArrayBuffer;
          lodash.isArrayLike = isArrayLike2;
          lodash.isArrayLikeObject = isArrayLikeObject;
          lodash.isBoolean = isBoolean;
          lodash.isBuffer = isBuffer2;
          lodash.isDate = isDate;
          lodash.isElement = isElement;
          lodash.isEmpty = isEmpty;
          lodash.isEqual = isEqual2;
          lodash.isEqualWith = isEqualWith;
          lodash.isError = isError;
          lodash.isFinite = isFinite;
          lodash.isFunction = isFunction2;
          lodash.isInteger = isInteger;
          lodash.isLength = isLength2;
          lodash.isMap = isMap;
          lodash.isMatch = isMatch;
          lodash.isMatchWith = isMatchWith;
          lodash.isNaN = isNaN2;
          lodash.isNative = isNative;
          lodash.isNil = isNil;
          lodash.isNull = isNull;
          lodash.isNumber = isNumber;
          lodash.isObject = isObject2;
          lodash.isObjectLike = isObjectLike2;
          lodash.isPlainObject = isPlainObject;
          lodash.isRegExp = isRegExp;
          lodash.isSafeInteger = isSafeInteger;
          lodash.isSet = isSet2;
          lodash.isString = isString;
          lodash.isSymbol = isSymbol;
          lodash.isTypedArray = isTypedArray2;
          lodash.isUndefined = isUndefined;
          lodash.isWeakMap = isWeakMap;
          lodash.isWeakSet = isWeakSet;
          lodash.join = join;
          lodash.kebabCase = kebabCase;
          lodash.last = last;
          lodash.lastIndexOf = lastIndexOf;
          lodash.lowerCase = lowerCase;
          lodash.lowerFirst = lowerFirst;
          lodash.lt = lt;
          lodash.lte = lte;
          lodash.max = max;
          lodash.maxBy = maxBy;
          lodash.mean = mean;
          lodash.meanBy = meanBy;
          lodash.min = min;
          lodash.minBy = minBy;
          lodash.stubArray = stubArray2;
          lodash.stubFalse = stubFalse2;
          lodash.stubObject = stubObject;
          lodash.stubString = stubString;
          lodash.stubTrue = stubTrue;
          lodash.multiply = multiply;
          lodash.nth = nth;
          lodash.noConflict = noConflict;
          lodash.noop = noop;
          lodash.now = now;
          lodash.pad = pad;
          lodash.padEnd = padEnd;
          lodash.padStart = padStart;
          lodash.parseInt = parseInt2;
          lodash.random = random;
          lodash.reduce = reduce;
          lodash.reduceRight = reduceRight;
          lodash.repeat = repeat;
          lodash.replace = replace;
          lodash.result = result;
          lodash.round = round;
          lodash.runInContext = runInContext2;
          lodash.sample = sample;
          lodash.size = size;
          lodash.snakeCase = snakeCase;
          lodash.some = some;
          lodash.sortedIndex = sortedIndex;
          lodash.sortedIndexBy = sortedIndexBy;
          lodash.sortedIndexOf = sortedIndexOf;
          lodash.sortedLastIndex = sortedLastIndex;
          lodash.sortedLastIndexBy = sortedLastIndexBy;
          lodash.sortedLastIndexOf = sortedLastIndexOf;
          lodash.startCase = startCase;
          lodash.startsWith = startsWith;
          lodash.subtract = subtract;
          lodash.sum = sum;
          lodash.sumBy = sumBy;
          lodash.template = template;
          lodash.times = times;
          lodash.toFinite = toFinite;
          lodash.toInteger = toInteger;
          lodash.toLength = toLength;
          lodash.toLower = toLower;
          lodash.toNumber = toNumber;
          lodash.toSafeInteger = toSafeInteger;
          lodash.toString = toString;
          lodash.toUpper = toUpper;
          lodash.trim = trim;
          lodash.trimEnd = trimEnd;
          lodash.trimStart = trimStart;
          lodash.truncate = truncate;
          lodash.unescape = unescape;
          lodash.uniqueId = uniqueId;
          lodash.upperCase = upperCase;
          lodash.upperFirst = upperFirst;
          lodash.each = forEach;
          lodash.eachRight = forEachRight;
          lodash.first = head;
          mixin(lodash, function() {
            var source = {};
            baseForOwn(lodash, function(func, methodName) {
              if (!hasOwnProperty2.call(lodash.prototype, methodName)) {
                source[methodName] = func;
              }
            });
            return source;
          }(), { "chain": false });
          lodash.VERSION = VERSION;
          arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
            lodash[methodName].placeholder = lodash;
          });
          arrayEach(["drop", "take"], function(methodName, index) {
            LazyWrapper.prototype[methodName] = function(n) {
              n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
              var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
              if (result2.__filtered__) {
                result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
              } else {
                result2.__views__.push({
                  "size": nativeMin(n, MAX_ARRAY_LENGTH),
                  "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
                });
              }
              return result2;
            };
            LazyWrapper.prototype[methodName + "Right"] = function(n) {
              return this.reverse()[methodName](n).reverse();
            };
          });
          arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
            var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
            LazyWrapper.prototype[methodName] = function(iteratee2) {
              var result2 = this.clone();
              result2.__iteratees__.push({
                "iteratee": getIteratee(iteratee2, 3),
                "type": type
              });
              result2.__filtered__ = result2.__filtered__ || isFilter;
              return result2;
            };
          });
          arrayEach(["head", "last"], function(methodName, index) {
            var takeName = "take" + (index ? "Right" : "");
            LazyWrapper.prototype[methodName] = function() {
              return this[takeName](1).value()[0];
            };
          });
          arrayEach(["initial", "tail"], function(methodName, index) {
            var dropName = "drop" + (index ? "" : "Right");
            LazyWrapper.prototype[methodName] = function() {
              return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
            };
          });
          LazyWrapper.prototype.compact = function() {
            return this.filter(identity);
          };
          LazyWrapper.prototype.find = function(predicate) {
            return this.filter(predicate).head();
          };
          LazyWrapper.prototype.findLast = function(predicate) {
            return this.reverse().find(predicate);
          };
          LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
            if (typeof path == "function") {
              return new LazyWrapper(this);
            }
            return this.map(function(value) {
              return baseInvoke(value, path, args);
            });
          });
          LazyWrapper.prototype.reject = function(predicate) {
            return this.filter(negate(getIteratee(predicate)));
          };
          LazyWrapper.prototype.slice = function(start, end) {
            start = toInteger(start);
            var result2 = this;
            if (result2.__filtered__ && (start > 0 || end < 0)) {
              return new LazyWrapper(result2);
            }
            if (start < 0) {
              result2 = result2.takeRight(-start);
            } else if (start) {
              result2 = result2.drop(start);
            }
            if (end !== undefined2) {
              end = toInteger(end);
              result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
            }
            return result2;
          };
          LazyWrapper.prototype.takeRightWhile = function(predicate) {
            return this.reverse().takeWhile(predicate).reverse();
          };
          LazyWrapper.prototype.toArray = function() {
            return this.take(MAX_ARRAY_LENGTH);
          };
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
            if (!lodashFunc) {
              return;
            }
            lodash.prototype[methodName] = function() {
              var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray2(value);
              var interceptor = function(value2) {
                var result3 = lodashFunc.apply(lodash, arrayPush2([value2], args));
                return isTaker && chainAll ? result3[0] : result3;
              };
              if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
                isLazy = useLazy = false;
              }
              var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
              if (!retUnwrapped && useLazy) {
                value = onlyLazy ? value : new LazyWrapper(this);
                var result2 = func.apply(value, args);
                result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
                return new LodashWrapper(result2, chainAll);
              }
              if (isUnwrapped && onlyLazy) {
                return func.apply(this, args);
              }
              result2 = this.thru(interceptor);
              return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
            };
          });
          arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
            var func = arrayProto2[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
            lodash.prototype[methodName] = function() {
              var args = arguments;
              if (retUnwrapped && !this.__chain__) {
                var value = this.value();
                return func.apply(isArray2(value) ? value : [], args);
              }
              return this[chainName](function(value2) {
                return func.apply(isArray2(value2) ? value2 : [], args);
              });
            };
          });
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var lodashFunc = lodash[methodName];
            if (lodashFunc) {
              var key = lodashFunc.name + "";
              if (!hasOwnProperty2.call(realNames, key)) {
                realNames[key] = [];
              }
              realNames[key].push({ "name": methodName, "func": lodashFunc });
            }
          });
          realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
            "name": "wrapper",
            "func": undefined2
          }];
          LazyWrapper.prototype.clone = lazyClone;
          LazyWrapper.prototype.reverse = lazyReverse;
          LazyWrapper.prototype.value = lazyValue;
          lodash.prototype.at = wrapperAt;
          lodash.prototype.chain = wrapperChain;
          lodash.prototype.commit = wrapperCommit;
          lodash.prototype.next = wrapperNext;
          lodash.prototype.plant = wrapperPlant;
          lodash.prototype.reverse = wrapperReverse;
          lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
          lodash.prototype.first = lodash.prototype.head;
          if (symIterator) {
            lodash.prototype[symIterator] = wrapperToIterator;
          }
          return lodash;
        };
        var _ = runInContext();
        if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
          root2._ = _;
          define(function() {
            return _;
          });
        } else if (freeModule) {
          (freeModule.exports = _)._ = _;
          freeExports._ = _;
        } else {
          root2._ = _;
        }
      }).call(exports);
    }
  });

  // packages/vue/dist/esm/index.esm.js
  var index_esm_exports = {};
  __export(index_esm_exports, {
    ActivateItemInjected: () => ActivateItemInjected,
    ErrorData: () => ErrorData,
    ErrorPlugin: () => ErrorPlugin,
    ErrorViewData: () => ErrorViewData,
    EventBus: () => EventBus,
    FBadge: () => FBadge,
    FBankAccountNumberTextField: () => _sfc_main$I,
    FBankgiroTextField: () => _sfc_main$H,
    FCalendar: () => FCalendar,
    FCalendarDay: () => FCalendarDay,
    FCard: () => FCard,
    FCheckboxField: () => FCheckboxField,
    FCheckboxGroup: () => FCheckboxGroup,
    FCheckboxGroupField: () => FCheckboxField,
    FClearingnumberTextField: () => _sfc_main$G,
    FConfirmModal: () => FConfirmModal,
    FContextMenu: () => FContextMenu,
    FCrudButton: () => FCrudButton,
    FCrudDataset: () => FCrudDataset,
    FCurrencyTextField: () => _sfc_main$K,
    FDataTable: () => FDataTable,
    FDatepickerField: () => FDatepickerField,
    FDialogueTree: () => FDialogueTree,
    FEmailTextField: () => FEmailTextField,
    FErrorHandlingApp: () => FErrorHandlingApp,
    FErrorList: () => FErrorList,
    FExpand: () => FExpand,
    FExpandablePanel: () => FExpandablePanel,
    FExpandableParagraph: () => FExpandableParagraph,
    FFieldset: () => FFieldset,
    FFileItem: () => FFileItem,
    FFileSelector: () => FFileSelector,
    FForm: () => FForm,
    FFormModal: () => FFormModal,
    FFormModalAction: () => FValidationFormAction,
    FFormStep: () => FFormStep,
    FFormStepButton: () => FFormStepButton,
    FIcon: () => FIcon,
    FInteractiveTable: () => FInteractiveTable,
    FKUIConfigButtonOrder: () => FKUIConfigButtonOrder,
    FLabel: () => FLabel,
    FLayoutApplicationTemplate: () => FLayoutApplicationTemplate,
    FLayoutLeftPanel: () => FLayoutLeftPanel,
    FLayoutRightPanel: () => FLayoutRightPanel,
    FLayoutRightPanelService: () => FLayoutRightPanelService,
    FList: () => FList,
    FLoader: () => FLoader,
    FMessageBox: () => FMessageBox,
    FModal: () => FModal,
    FNavigationMenu: () => FNavigationMenu,
    FNumericTextField: () => _sfc_main$F,
    FOffline: () => FOffline,
    FOrganisationsnummerTextField: () => _sfc_main$A,
    FOutputField: () => FOutputField,
    FPageHeader: () => FPageHeader,
    FPercentTextField: () => _sfc_main$B,
    FPersonnummerTextField: () => _sfc_main$E,
    FPhoneTextField: () => FPhoneTextField,
    FPlusgiroTextField: () => _sfc_main$D,
    FPostalCodeTextField: () => _sfc_main$C,
    FProgressbar: () => FProgressbar,
    FRadioField: () => FRadioField,
    FRadioGroup: () => FRadioGroup,
    FRadioGroupField: () => FRadioField,
    FSearchTextField: () => FSearchTextField,
    FSelectField: () => FSelectField,
    FSortFilterDataset: () => FSortFilterDataset,
    FSortFilterDatasetInjected: () => FSortFilterDatasetInjected,
    FStaticField: () => FStaticField,
    FTableColumn: () => FTableColumn,
    FTableColumnSize: () => FTableColumnSize,
    FTableColumnSort: () => FTableColumnSort,
    FTableColumnType: () => FTableColumnType,
    FTextField: () => FTextField,
    FTextareaField: () => FTextareaField,
    FTooltip: () => FTooltip,
    FValidationForm: () => FValidationForm,
    FValidationFormAction: () => FValidationFormAction,
    FValidationGroup: () => FValidationGroup,
    FWizard: () => FWizard,
    FWizardStep: () => FWizardStep,
    FWizardStepAction: () => FValidationFormAction,
    FormErrorList: () => FormErrorList,
    FormStep: () => FormStep,
    IAnimateExpand: () => IAnimateExpand,
    ICalendarMonth: () => ICalendarMonth,
    ICalendarMonthGrid: () => ICalendarMonthGrid,
    ICalendarNavbar: () => ICalendarNavbar,
    IFlex: () => IFlex,
    IFlexItem: () => IFlexItem,
    IMenu: () => IMenu,
    IPopup: () => IPopup,
    IPopupError: () => IPopupError,
    IPopupMenu: () => IPopupMenu,
    ISkipLink: () => ISkipLink,
    IValidationForm: () => FValidationForm,
    MenuAction: () => MenuAction,
    ModalReason: () => ModalReason,
    Operation: () => Operation,
    Placement: () => Placement,
    TableScroll: () => TableScroll,
    TestPlugin: () => TestPlugin,
    TranslationMixin: () => TranslationMixin,
    TranslationPlugin: () => TranslationPlugin,
    UNHANDLED_ERROR_EVENT: () => UNHANDLED_ERROR_EVENT,
    ValidationPlugin: () => ValidationPlugin,
    actionFromKeyboardEvent: () => actionFromKeyboardEvent,
    cleanUpElements: () => cleanUpElements,
    config: () => config,
    confirmModal: () => confirmModal,
    createFFormProvideOptions: () => createFFormProvideOptions,
    dispatchComponentUnmountEvent: () => dispatchComponentUnmountEvent,
    dispatchComponentValidityEvent: () => dispatchComponentValidityEvent,
    findElementFromVueRef: () => findElementFromVueRef,
    findHTMLElementFromVueRef: () => findHTMLElementFromVueRef,
    findParentByName: () => findParentByName,
    focus: () => focus,
    formModal: () => formModal,
    getDayEndOffset: () => getDayEndOffset,
    getDayStartOffset: () => getDayStartOffset,
    getElementFromVueRef: () => getElementFromVueRef,
    getElementsFromVueRef: () => getElementsFromVueRef,
    getHTMLElementFromVueRef: () => getHTMLElementFromVueRef,
    getHTMLElementsFromVueRef: () => getHTMLElementsFromVueRef,
    getInputElement: () => getInputElement,
    getParentByName: () => getParentByName,
    getRef: () => getRef,
    getSortedHTMLElementsFromVueRef: () => getSortedHTMLElementsFromVueRef,
    getTextFromScopedSlot: () => getTextFromScopedSlot,
    handleKeyboardFocusNavigation: () => handleKeyboardFocusNavigation,
    hasParentByName: () => hasParentByName,
    hasSlot: () => hasSlot,
    includeItem: () => includeItem,
    isContextMenuSeparatorItem: () => isContextMenuSeparatorItem,
    isContextMenuTextItem: () => isContextMenuTextItem,
    isDialogueTreeEndQuestion: () => isDialogueTreeEndQuestion,
    isFormStepReference: () => isFormStepReference,
    itemEquals: () => itemEquals,
    mountComponent: () => mountComponent,
    openModal: () => openModal,
    refIsElement: () => refIsElement,
    refIsElementArray: () => refIsElementArray,
    refIsHTMLElementArray: () => refIsHTMLElementArray,
    refIsVue: () => refIsVue,
    refIsVueArray: () => refIsVueArray,
    renderSlotText: () => renderSlotText,
    setIsOpen: () => setIsOpen,
    setRef: () => setRef,
    setRunningContext: () => setRunningContext,
    sortComponentsWithErrorsOnDOMOrder: () => sortComponentsWithErrorsOnDOMOrder,
    tableScrollClasses: () => tableScrollClasses,
    useTranslate: () => useTranslate
  });
  var import_es_array_push = __toESM(require_es_array_push(), 1);
  var import_es_array_buffer_detached = __toESM(require_es_array_buffer_detached(), 1);
  var import_es_array_buffer_transfer = __toESM(require_es_array_buffer_transfer(), 1);
  var import_es_array_buffer_transfer_to_fixed_length = __toESM(require_es_array_buffer_transfer_to_fixed_length(), 1);
  var import_vue = __require("vue");
  var import_logic = __require("@fkui/logic");
  var import_date = __require("@fkui/date");
  var import_lodash = __toESM(require_lodash(), 1);
  var __defProp2 = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var statuses = ["default", "warning", "error", "success", "info"];
  var _sfc_main$1d = (0, import_vue.defineComponent)({ name: "FBadge", props: {
    /**
    * The status of the badge, can be either 'default', 'warning', 'error', 'success' or 'info'.
    *
    */
    status: { type: String, default: "default", validator: function(value) {
      return statuses.includes(value);
    } },
    /**
    * If badge should be inverted.
    *
    */
    inverted: { type: Boolean, default: false }
  }, computed: { badgeClass() {
    return this.inverted ? `badge--${this.status}-inverted` : `badge--${this.status}`;
  } } });
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  function _sfc_render$13(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "div",
      { class: (0, import_vue.normalizeClass)(["badge", _ctx.badgeClass]) },
      [(0, import_vue.renderSlot)(_ctx.$slots, "default")],
      2
      /* CLASS */
    );
  }
  var FBadge = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["render", _sfc_render$13]]);
  var Flip = ["horizontal", "vertical"];
  var Rotate = ["90", "180", "270"];
  var _sfc_main$1c = (0, import_vue.defineComponent)({ name: "FIcon", inheritAttrs: false, props: {
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
  var _hoisted_1$U = ["aria-hidden"];
  var _hoisted_2$G = ["xlink:href"];
  function _sfc_render$12(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("svg", (0, import_vue.mergeProps)(_ctx.$attrs, { focusable: "false", class: ["icon", [_ctx.spriteKey, ..._ctx.modifiers]], "aria-hidden": _ctx.ariaHidden }), [(0, import_vue.renderSlot)(_ctx.$slots, "default"), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("use", { "xlink:href": _ctx.spriteId }, null, 8, _hoisted_2$G)], 16, _hoisted_1$U);
  }
  var FIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["render", _sfc_render$12]]);
  var DATA_TEST_ATTRIBUTE_NAME = "data-test";
  function throwErrorIfEmpty(value) {
    if (!value) {
      throw new Error(`Did you forgot to add a value to v-test?`);
    }
  }
  var TestDirective = { mounted(el, { value }) {
    throwErrorIfEmpty(value);
    el.setAttribute(DATA_TEST_ATTRIBUTE_NAME, value);
  }, updated(el, { value }) {
    throwErrorIfEmpty(value);
    el.setAttribute(DATA_TEST_ATTRIBUTE_NAME, value);
  } };
  var TestPlugin = { install(app) {
    app.directive("test", TestDirective);
  } };
  function translate(key, defaultValueOrArgs, args) {
    const { provider } = import_logic.TranslationService;
    return provider.translate(key, defaultValueOrArgs, args);
  }
  var TranslationMixin = { methods: { $t: translate } };
  var TranslationPlugin = { install(app) {
    app.mixin(TranslationMixin);
  } };
  function useTranslate() {
    return translate;
  }
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
    var data = this.__data__, index = assocIndexOf$3(data, key);
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
  var _listCacheDelete = listCacheDelete$1;
  var assocIndexOf$2 = _assocIndexOf;
  function listCacheGet$1(key) {
    var data = this.__data__, index = assocIndexOf$2(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  var _listCacheGet = listCacheGet$1;
  var assocIndexOf$1 = _assocIndexOf;
  function listCacheHas$1(key) {
    return assocIndexOf$1(this.__data__, key) > -1;
  }
  var _listCacheHas = listCacheHas$1;
  var assocIndexOf = _assocIndexOf;
  function listCacheSet$1(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  var _listCacheSet = listCacheSet$1;
  var listCacheClear = _listCacheClear;
  var listCacheDelete = _listCacheDelete;
  var listCacheGet = _listCacheGet;
  var listCacheHas = _listCacheHas;
  var listCacheSet = _listCacheSet;
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
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
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
  var Symbol$2 = _Symbol;
  var getRawTag = _getRawTag;
  var objectToString = _objectToString;
  var nullTag = "[object Null]";
  var undefinedTag = "[object Undefined]";
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
  var baseGetTag$3 = _baseGetTag;
  var isObject$1 = isObject_1;
  var asyncTag = "[object AsyncFunction]";
  var funcTag$1 = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var proxyTag = "[object Proxy]";
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
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
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
  var isFunction$1 = isFunction_1;
  var isMasked = _isMasked;
  var isObject = isObject_1;
  var toSource$1 = _toSource;
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto = Function.prototype;
  var objectProto$9 = Object.prototype;
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
  var baseIsNative = _baseIsNative;
  var getValue = _getValue;
  function getNative$6(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  var _getNative = getNative$6;
  var getNative$5 = _getNative;
  var root$5 = _root;
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
    var data = this.__data__;
    if (nativeCreate$2) {
      var result = data[key];
      return result === HASH_UNDEFINED$2 ? void 0 : result;
    }
    return hasOwnProperty$6.call(data, key) ? data[key] : void 0;
  }
  var _hashGet = hashGet$1;
  var nativeCreate$1 = _nativeCreate;
  var objectProto$7 = Object.prototype;
  var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
  function hashHas$1(key) {
    var data = this.__data__;
    return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$5.call(data, key);
  }
  var _hashHas = hashHas$1;
  var nativeCreate = _nativeCreate;
  var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
  function hashSet$1(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
    return this;
  }
  var _hashSet = hashSet$1;
  var hashClear = _hashClear;
  var hashDelete = _hashDelete;
  var hashGet = _hashGet;
  var hashHas = _hashHas;
  var hashSet = _hashSet;
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
  var Hash = _Hash;
  var ListCache$2 = _ListCache;
  var Map$3 = _Map;
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
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
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
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  var _mapCacheSet = mapCacheSet$1;
  var mapCacheClear = _mapCacheClear;
  var mapCacheDelete = _mapCacheDelete;
  var mapCacheGet = _mapCacheGet;
  var mapCacheHas = _mapCacheHas;
  var mapCacheSet = _mapCacheSet;
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
  var ListCache$1 = _ListCache;
  var Map$2 = _Map;
  var MapCache$1 = _MapCache;
  var LARGE_ARRAY_SIZE = 200;
  function stackSet$1(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache$1) {
      var pairs = data.__data__;
      if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache$1(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  var _stackSet = stackSet$1;
  var ListCache = _ListCache;
  var stackClear = _stackClear;
  var stackDelete = _stackDelete;
  var stackGet = _stackGet;
  var stackHas = _stackHas;
  var stackSet = _stackSet;
  function Stack$1(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
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
  var MapCache = _MapCache;
  var setCacheAdd = _setCacheAdd;
  var setCacheHas = _setCacheHas;
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
  var SetCache = _SetCache;
  var arraySome = _arraySome;
  var cacheHas = _cacheHas;
  var COMPARE_PARTIAL_FLAG$3 = 1;
  var COMPARE_UNORDERED_FLAG$1 = 2;
  function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array;
    }
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
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
  function setToArray$1(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var _setToArray = setToArray$1;
  var Symbol$1 = _Symbol;
  var Uint8Array2 = _Uint8Array;
  var eq = eq_1;
  var equalArrays$1 = _equalArrays;
  var mapToArray = _mapToArray;
  var setToArray = _setToArray;
  var COMPARE_PARTIAL_FLAG$2 = 1;
  var COMPARE_UNORDERED_FLAG = 2;
  var boolTag$1 = "[object Boolean]";
  var dateTag$1 = "[object Date]";
  var errorTag$1 = "[object Error]";
  var mapTag$2 = "[object Map]";
  var numberTag$1 = "[object Number]";
  var regexpTag$1 = "[object RegExp]";
  var setTag$2 = "[object Set]";
  var stringTag$1 = "[object String]";
  var symbolTag = "[object Symbol]";
  var arrayBufferTag$1 = "[object ArrayBuffer]";
  var dataViewTag$2 = "[object DataView]";
  var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0;
  var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
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
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG;
        stack.set(object, other);
        var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack["delete"](object);
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
  var arrayPush = _arrayPush;
  var isArray$2 = isArray_1;
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
  var arrayFilter = _arrayFilter;
  var stubArray = stubArray_1;
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
  var baseGetTag$2 = _baseGetTag;
  var isObjectLike$3 = isObjectLike_1;
  var argsTag$2 = "[object Arguments]";
  function baseIsArguments$1(value) {
    return isObjectLike$3(value) && baseGetTag$2(value) == argsTag$2;
  }
  var _baseIsArguments = baseIsArguments$1;
  var baseIsArguments = _baseIsArguments;
  var isObjectLike$2 = isObjectLike_1;
  var objectProto$5 = Object.prototype;
  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
  var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
  var isArguments$1 = baseIsArguments(/* @__PURE__ */ function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike$2(value) && hasOwnProperty$4.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
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
  var baseGetTag$1 = _baseGetTag;
  var isLength$1 = isLength_1;
  var isObjectLike$1 = isObjectLike_1;
  var argsTag$1 = "[object Arguments]";
  var arrayTag$1 = "[object Array]";
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var errorTag = "[object Error]";
  var funcTag = "[object Function]";
  var mapTag$1 = "[object Map]";
  var numberTag = "[object Number]";
  var objectTag$2 = "[object Object]";
  var regexpTag = "[object RegExp]";
  var setTag$1 = "[object Set]";
  var stringTag = "[object String]";
  var weakMapTag$1 = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag$1 = "[object DataView]";
  var float32Tag = "[object Float32Array]";
  var float64Tag = "[object Float64Array]";
  var int8Tag = "[object Int8Array]";
  var int16Tag = "[object Int16Array]";
  var int32Tag = "[object Int32Array]";
  var uint8Tag = "[object Uint8Array]";
  var uint8ClampedTag = "[object Uint8ClampedArray]";
  var uint16Tag = "[object Uint16Array]";
  var uint32Tag = "[object Uint32Array]";
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
  var baseIsTypedArray = _baseIsTypedArray;
  var baseUnary = _baseUnary;
  var nodeUtil = _nodeUtilExports;
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  var isTypedArray$2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  var isTypedArray_1 = isTypedArray$2;
  var baseTimes = _baseTimes;
  var isArguments = isArguments_1;
  var isArray$1 = isArray_1;
  var isBuffer$1 = isBufferExports;
  var isIndex = _isIndex;
  var isTypedArray$1 = isTypedArray_1;
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
  var isPrototype = _isPrototype;
  var nativeKeys = _nativeKeys;
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
  var isFunction = isFunction_1;
  var isLength = isLength_1;
  function isArrayLike$1(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  var isArrayLike_1 = isArrayLike$1;
  var arrayLikeKeys = _arrayLikeKeys;
  var baseKeys = _baseKeys;
  var isArrayLike = isArrayLike_1;
  function keys$1(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  var keys_1 = keys$1;
  var baseGetAllKeys = _baseGetAllKeys;
  var getSymbols = _getSymbols;
  var keys = keys_1;
  function getAllKeys$1(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }
  var _getAllKeys = getAllKeys$1;
  var getAllKeys = _getAllKeys;
  var COMPARE_PARTIAL_FLAG$1 = 1;
  var objectProto$1 = Object.prototype;
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
  function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
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
  var _equalObjects = equalObjects$1;
  var getNative$3 = _getNative;
  var root$3 = _root;
  var DataView$1 = getNative$3(root$3, "DataView");
  var _DataView = DataView$1;
  var getNative$2 = _getNative;
  var root$2 = _root;
  var Promise$2 = getNative$2(root$2, "Promise");
  var _Promise = Promise$2;
  var getNative$1 = _getNative;
  var root$1 = _root;
  var Set$1 = getNative$1(root$1, "Set");
  var _Set = Set$1;
  var getNative = _getNative;
  var root = _root;
  var WeakMap$1 = getNative(root, "WeakMap");
  var _WeakMap = WeakMap$1;
  var DataView = _DataView;
  var Map$1 = _Map;
  var Promise$1 = _Promise;
  var Set = _Set;
  var WeakMap = _WeakMap;
  var baseGetTag = _baseGetTag;
  var toSource = _toSource;
  var mapTag = "[object Map]";
  var objectTag$1 = "[object Object]";
  var promiseTag = "[object Promise]";
  var setTag = "[object Set]";
  var weakMapTag = "[object WeakMap]";
  var dataViewTag = "[object DataView]";
  var dataViewCtorString = toSource(DataView);
  var mapCtorString = toSource(Map$1);
  var promiseCtorString = toSource(Promise$1);
  var setCtorString = toSource(Set);
  var weakMapCtorString = toSource(WeakMap);
  var getTag$1 = baseGetTag;
  if (DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag || Map$1 && getTag$1(new Map$1()) != mapTag || Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag || Set && getTag$1(new Set()) != setTag || WeakMap && getTag$1(new WeakMap()) != weakMapTag) {
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
  var Stack = _Stack;
  var equalArrays = _equalArrays;
  var equalByTag = _equalByTag;
  var equalObjects = _equalObjects;
  var getTag = _getTag;
  var isArray = isArray_1;
  var isBuffer = isBufferExports;
  var isTypedArray = isTypedArray_1;
  var COMPARE_PARTIAL_FLAG = 1;
  var argsTag = "[object Arguments]";
  var arrayTag = "[object Array]";
  var objectTag = "[object Object]";
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
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
  var _baseIsEqualDeep = baseIsEqualDeep$1;
  var baseIsEqualDeep = _baseIsEqualDeep;
  var isObjectLike = isObjectLike_1;
  function baseIsEqual$1(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$1, stack);
  }
  var _baseIsEqual = baseIsEqual$1;
  var baseIsEqual = _baseIsEqual;
  function isEqual(value, other) {
    return baseIsEqual(value, other);
  }
  var isEqual_1 = isEqual;
  var isEqual$1 = /* @__PURE__ */ getDefaultExportFromCjs(isEqual_1);
  function itemEquals(item1, item2, compareAttribute) {
    if (!(0, import_logic.isSet)(item1) || !(0, import_logic.isSet)(item2)) {
      return false;
    }
    if (item1 === item2) {
      return true;
    }
    return item1[compareAttribute] === item2[compareAttribute];
  }
  function includeItem(item, itemList, compareAttribute) {
    if (!(0, import_logic.isSet)(item) || !(0, import_logic.isSet)(itemList)) {
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
    const keyDown2 = ["ArrowDown", "Down"];
    const keyUp2 = ["ArrowUp", "Up"];
    if (keyDown2.includes(key)) {
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
  var scrollClasses = { [
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
  var defaultOptions = { stripClasses: ["sr-only"] };
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
    return node.type !== import_vue.Comment;
  }
  function getTextContent(children, options) {
    return children.filter(import_vue.isVNode).filter(excludeComment).filter(excludeClass(options.stripClasses)).map((child) => {
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
  function getTextFromScopedSlot(slot) {
    var _renderSlotText;
    return (_renderSlotText = renderSlotText(slot)) !== null && _renderSlotText !== void 0 ? _renderSlotText : "";
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
    } else if ((0, import_logic.isSet)(ref2)) {
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
    } else if ((0, import_logic.isSet)(ref2)) {
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
    if (!(0, import_logic.isSet)(element)) {
      throw new Error(`Unable to find element from ${ref2}.`);
    }
    return element;
  }
  function getHTMLElementFromVueRef(ref2) {
    const element = findElementFromVueRef(ref2);
    if (!(0, import_logic.isSet)(element)) {
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
  var eventTarget = lazyLoad(() => new EventTarget());
  var fn = /* @__PURE__ */ new Map();
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
  var EventBus = { $emit, $on, $off };
  var FKUIConfigButtonOrder = /* @__PURE__ */ ((FKUIConfigButtonOrder2) => {
    FKUIConfigButtonOrder2[FKUIConfigButtonOrder2["LEFT_TO_RIGHT"] = 0] = "LEFT_TO_RIGHT";
    FKUIConfigButtonOrder2[FKUIConfigButtonOrder2["RIGHT_TO_LEFT"] = 1] = "RIGHT_TO_LEFT";
    return FKUIConfigButtonOrder2;
  })(FKUIConfigButtonOrder || {});
  var popupContainer = document.body;
  var production = true;
  var config = { buttonOrder: FKUIConfigButtonOrder.LEFT_TO_RIGHT, teleportTarget: document.body, modalTarget: null, popupTarget: null, get popupContainer() {
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
    import_logic.configLogic.production = value;
  }, get production() {
    return production;
  } };
  function setRunningContext(app) {
    const fkuiContext = { appContext: app._context };
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
    const { attachTo, attachFirst } = options;
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
    const { attachTo, attachFirst = false, ...data } = options;
    const el = createContainer({ attachTo, attachFirst });
    const app = (0, import_vue.createApp)(Component, data);
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
    const { reason = event, data: rawData } = src !== null && src !== void 0 ? src : defaultPayload;
    const data = rawData;
    return { reason, data };
  }
  function openModal(callingInstance, Component, options) {
    var _config$modalTarget;
    if (typeof options === "string") {
      return openModal(callingInstance, Component, { props: { content: options } });
    }
    const defaultOptions2 = { attachTo: (_config$modalTarget = config.modalTarget) !== null && _config$modalTarget !== void 0 ? _config$modalTarget : config.teleportTarget, props: {} };
    const { attachTo, props } = { ...defaultOptions2, ...options };
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
      const app = mountComponent(callingInstance, Component, { attachTo, isOpen: true, onClose(data) {
        terminate("close", data);
      }, ...props });
    });
  }
  async function formModal(callingInstance, Component, options) {
    var _ref;
    const props = { size: (_ref = options == null ? void 0 : options.size) !== null && _ref !== void 0 ? _ref : "", beforeSubmit: options == null ? void 0 : options.beforeSubmit, ...options == null ? void 0 : options.props };
    const result = await openModal(callingInstance, Component, { props });
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
      (0, import_logic.focus)(element);
    }
  }
  function focusRadioButtonGroup(element, container) {
    const radioGroupInputs = container.querySelectorAll(`input[type="radio"][name="${element.name}"]`);
    const checkedRadioButton = Array.from(radioGroupInputs).find((inputEl) => inputEl.checked);
    if (checkedRadioButton) {
      (0, import_logic.focus)(checkedRadioButton);
    } else {
      (0, import_logic.focus)(element);
    }
  }
  function elementIsRadioButton(element) {
    return isHTMLInputElement(element) && element.type === "radio";
  }
  function isHTMLInputElement(element) {
    return element instanceof HTMLInputElement;
  }
  var _sfc_main$1b = (0, import_vue.defineComponent)({ name: "FModal", components: { FIcon }, mixins: [TranslationMixin], inheritAttrs: true, props: {
    /**
    * The id for the root element id attribute.
    * If the prop is not set a random value will be generated.
    */
    id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() },
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
      this.savedFocus = (0, import_logic.pushFocus)(focusElement2);
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
      const tabbableChildren = (0, import_logic.findTabbableElements)(contentElement);
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
        (0, import_logic.popFocus)(this.savedFocus);
        this.savedFocus = null;
        this.savedScroll = null;
      }
    },
    onFocusFirst() {
      const tabbableElements = (0, import_logic.findTabbableElements)(this.$refs.modalDialogContainer);
      const lastTabbableElement = tabbableElements[tabbableElements.length - 2];
      focusElement(lastTabbableElement, this.$el);
    },
    onFocusLast() {
      const tabbableElements = (0, import_logic.findTabbableElements)(this.$refs.modalDialogContainer);
      const firstTabbableElement = tabbableElements[1];
      focusElement(firstTabbableElement, this.$el);
    }
  } });
  var _hoisted_1$T = ["id"];
  var _hoisted_2$F = { class: "modal__backdrop" };
  var _hoisted_3$z = { class: "modal__inner-container" };
  var _hoisted_4$t = { class: "modal__dialog" };
  var _hoisted_5$p = { class: "modal__dialog-inner" };
  var _hoisted_6$k = { class: "modal__header" };
  var _hoisted_7$g = { key: 0, ref: "modalTitle", class: "modal__title", tabindex: "-1" };
  var _hoisted_8$b = { ref: "modalContent", class: "modal__content", tabindex: "-1" };
  var _hoisted_9$7 = { class: "modal__footer" };
  var _hoisted_10$7 = { class: "modal__shelf" };
  var _hoisted_11$3 = ["aria-label"];
  function _sfc_render$11(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    return _ctx.isOpen ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", { key: 0, id: _ctx.id, class: (0, import_vue.normalizeClass)(["modal", _ctx.modalClass]) }, [(0, import_vue.createElementVNode)("div", _hoisted_2$F, [(0, import_vue.createElementVNode)(
      "div",
      { class: "modal__outer-container scroll-target", tabindex: "-1", role: "dialog", "aria-modal": "true", onKeyup: _cache[3] || (_cache[3] = (0, import_vue.withKeys)((...args) => _ctx.onClose && _ctx.onClose(...args), ["esc"])) },
      [(0, import_vue.createElementVNode)("div", _hoisted_3$z, [(0, import_vue.createElementVNode)(
        "div",
        { ref: "modalDialogContainer", class: (0, import_vue.normalizeClass)(["modal__dialog-container", _ctx.containerClasses]) },
        [(0, import_vue.createElementVNode)("div", _hoisted_4$t, [(0, import_vue.createElementVNode)("div", _hoisted_5$p, [(0, import_vue.createElementVNode)("div", _hoisted_6$k, [(0, import_vue.createElementVNode)(
          "div",
          { tabindex: "0", onFocus: _cache[0] || (_cache[0] = (...args) => _ctx.onFocusFirst && _ctx.onFocusFirst(...args)) },
          null,
          32
          /* NEED_HYDRATION */
        ), (0, import_vue.createTextVNode)(), _ctx.hasHeaderSlot ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
          "h1",
          _hoisted_7$g,
          [(0, import_vue.renderSlot)(_ctx.$slots, "header")],
          512
          /* NEED_PATCH */
        )) : (0, import_vue.createCommentVNode)("v-if", true)]), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
          "div",
          _hoisted_8$b,
          [(0, import_vue.renderSlot)(_ctx.$slots, "content")],
          512
          /* NEED_PATCH */
        ), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("div", _hoisted_9$7, [(0, import_vue.renderSlot)(_ctx.$slots, "footer")])]), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("div", _hoisted_10$7, [(0, import_vue.createElementVNode)("button", { type: "button", class: "close-button", "aria-label": _ctx.ariaCloseText, onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onClose && _ctx.onClose(...args)) }, [(0, import_vue.createElementVNode)(
          "span",
          null,
          (0, import_vue.toDisplayString)(_ctx.$t("fkui.modal.close", "St\xE4ng")),
          1
          /* TEXT */
        ), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_icon, { name: "close" })], 8, _hoisted_11$3), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
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
    )])], 10, _hoisted_1$T)) : (0, import_vue.createCommentVNode)("v-if", true);
  }
  var FModal = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["render", _sfc_render$11]]);
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
  var defaultButtons = [{ label: "Prim\xE4rknapp", event: "confirm", type: "primary" }, { label: "Sekund\xE4rknapp", event: "dismiss", type: "secondary" }];
  var _sfc_main$1a = (0, import_vue.defineComponent)({ name: "FConfirmModal", components: { FModal }, inheritAttrs: true, props: {
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
    content: { type: String, required: false, default: "Br\xF6dtext" },
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
  var _hoisted_1$S = { class: "button-group" };
  var _hoisted_2$E = ["onClick"];
  var _hoisted_3$y = { key: 0, class: "sr-only" };
  function _sfc_render$10(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_modal = (0, import_vue.resolveComponent)("f-modal");
    return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_f_modal, { fullscreen: _ctx.fullscreen, "is-open": _ctx.isOpen, "aria-close-text": _ctx.ariaCloseText, type: "warning", size: _ctx.size, onClose: _ctx.onClose }, {
      header: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "heading", {}, () => [(0, import_vue.createTextVNode)(
        (0, import_vue.toDisplayString)(_ctx.heading),
        1
        /* TEXT */
      )])]),
      content: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "content", {}, () => [(0, import_vue.createTextVNode)(
        (0, import_vue.toDisplayString)(_ctx.content),
        1
        /* TEXT */
      )])]),
      footer: (0, import_vue.withCtx)(() => [(0, import_vue.createElementVNode)("div", _hoisted_1$S, [((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
        import_vue.Fragment,
        null,
        (0, import_vue.renderList)(_ctx.preparedButtons, (button) => {
          return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("button", { key: button.label, type: "button", class: (0, import_vue.normalizeClass)([button.classlist, "button-group__item"]), onClick: ($event) => _ctx.onClick(button) }, [(0, import_vue.createElementVNode)(
            "span",
            null,
            (0, import_vue.toDisplayString)(button.label),
            1
            /* TEXT */
          ), (0, import_vue.createTextVNode)(), button.screenreader ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
            "span",
            _hoisted_3$y,
            "\xA0" + (0, import_vue.toDisplayString)(button.screenreader),
            1
            /* TEXT */
          )) : (0, import_vue.createCommentVNode)("v-if", true)], 10, _hoisted_2$E);
        }),
        128
        /* KEYED_FRAGMENT */
      ))])]),
      _: 3
      /* FORWARDED */
    }, 8, ["fullscreen", "is-open", "aria-close-text", "size", "onClose"]);
  }
  var FConfirmModal = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["render", _sfc_render$10]]);
  var GAP = ["1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x"];
  var ALIGNMENT = ["top", "center", "bottom"];
  var FLOAT = ["left", "center", "right"];
  var _sfc_main$19 = (0, import_vue.defineComponent)({ name: "IFlex", inheritAttrs: true, props: {
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
  function _sfc_render$$(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "div",
      { class: (0, import_vue.normalizeClass)(["iflex", _ctx.classList]) },
      [(0, import_vue.renderSlot)(_ctx.$slots, "default")],
      2
      /* CLASS */
    );
  }
  var IFlex = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["render", _sfc_render$$]]);
  var _sfc_main$18 = (0, import_vue.defineComponent)({ name: "IFlexItem", inheritAttrs: true, props: {
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
  function _sfc_render$_(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "div",
      { class: (0, import_vue.normalizeClass)(["iflex__item", _ctx.classList]) },
      [(0, import_vue.renderSlot)(_ctx.$slots, "default")],
      2
      /* CLASS */
    );
  }
  var IFlexItem = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["render", _sfc_render$_]]);
  function focusError(item) {
    const element = document.querySelector(`#${item.id}`);
    if (!element) {
      throw new Error(`Can not find element with id "${item.id}"`);
    }
    const focusElement2 = document.querySelector(`#${item.focusElementId}`);
    (0, import_logic.scrollTo)(element, window.innerHeight * 0.25);
    (0, import_logic.focus)(focusElement2 ? focusElement2 : element);
  }
  var _sfc_main$17 = (0, import_vue.defineComponent)({ name: "FErrorList", components: { FIcon, IFlex, IFlexItem }, props: {
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
  var _hoisted_1$R = { class: "error-list" };
  var _hoisted_2$D = { key: 0 };
  var _hoisted_3$x = { class: "error-list__list error-list--list-style-none" };
  var _hoisted_4$s = ["onClick"];
  var _hoisted_5$o = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "span",
    { class: "error-list__bullet", "aria-hidden": "true" },
    null,
    -1
    /* HOISTED */
  );
  var _hoisted_6$j = { class: "error-list__link" };
  var _hoisted_7$f = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "span",
    { class: "error-list__bullet", "aria-hidden": "true" },
    null,
    -1
    /* HOISTED */
  );
  function _sfc_render$Z(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    const _component_i_flex_item = (0, import_vue.resolveComponent)("i-flex-item");
    const _component_i_flex = (0, import_vue.resolveComponent)("i-flex");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_1$R, [(0, import_vue.createVNode)(_component_i_flex, null, {
      default: (0, import_vue.withCtx)(() => [_ctx.hasTitleSlot ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_i_flex_item, { key: 0, shrink: "" }, {
        default: (0, import_vue.withCtx)(() => [(0, import_vue.createVNode)(_component_f_icon, { class: "error-list__icon", name: "error" })]),
        _: 1
        /* STABLE */
      })) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), _ctx.hasTitleSlot ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_i_flex_item, { key: 1, shrink: "" }, {
        default: (0, import_vue.withCtx)(() => [(0, import_vue.createTextVNode)("\xA0")]),
        _: 1
        /* STABLE */
      })) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_i_flex_item, { grow: "" }, {
        default: (0, import_vue.withCtx)(() => [_ctx.hasTitleSlot ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_2$D, [(0, import_vue.renderSlot)(_ctx.$slots, "title")])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("ul", _hoisted_3$x, [((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
          import_vue.Fragment,
          null,
          (0, import_vue.renderList)(_ctx.items, (item) => {
            return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
              "li",
              { key: item.id, class: (0, import_vue.normalizeClass)(_ctx.liClasses(item)) },
              [item.id ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("a", { key: 0, href: "javascript:", onClick: (0, import_vue.withModifiers)(($event) => _ctx.onClickItem(item), ["prevent"]) }, [_ctx.bullets ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                import_vue.Fragment,
                { key: 0 },
                [_hoisted_5$o, (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
                  "span",
                  _hoisted_6$j,
                  (0, import_vue.toDisplayString)(item.title),
                  1
                  /* TEXT */
                )],
                64
                /* STABLE_FRAGMENT */
              )) : ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                import_vue.Fragment,
                { key: 1 },
                [(0, import_vue.createTextVNode)(
                  (0, import_vue.toDisplayString)(item.title),
                  1
                  /* TEXT */
                )],
                64
                /* STABLE_FRAGMENT */
              ))], 8, _hoisted_4$s)) : ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                import_vue.Fragment,
                { key: 1 },
                [_ctx.bullets ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                  import_vue.Fragment,
                  { key: 0 },
                  [_hoisted_7$f, (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
                    "span",
                    null,
                    (0, import_vue.toDisplayString)(item.title),
                    1
                    /* TEXT */
                  )],
                  64
                  /* STABLE_FRAGMENT */
                )) : ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                  import_vue.Fragment,
                  { key: 1 },
                  [(0, import_vue.createTextVNode)(
                    (0, import_vue.toDisplayString)(item.title),
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
  var FErrorList = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["render", _sfc_render$Z]]);
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
  function sortComponentsWithErrorsOnDOMOrder(componentList) {
    const errorList = Object.values(componentList).filter((component) => {
      const validity = component instanceof import_logic.Reference ? component.ref.isValid : component.validityMode;
      return typeof validity === "boolean" ? validity === false : validity === "ERROR";
    });
    errorList.sort((a, b) => {
      const elementToCompareA = a instanceof import_logic.Reference ? document.querySelector(`#${a.ref.id}`) : a.target;
      const elementToCompareB = b instanceof import_logic.Reference ? document.querySelector(`#${b.ref.id}`) : b.target;
      return (0, import_logic.documentOrderComparator)(elementToCompareA, elementToCompareB);
    });
    return errorList;
  }
  function isFormStepReference(reference) {
    return "isOpen" in reference.ref;
  }
  var _sfc_main$16 = (0, import_vue.defineComponent)({ name: "FValidationGroup", props: {
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
    componentsWithError.sort((a, b) => (0, import_logic.documentOrderComparator)(a.target, b.target));
    this.$emit("update:modelValue", { isValid, componentsWithError, componentCount: components.length });
    this.$emit("group-validity", { isValid, componentsWithError, componentCount: components.length });
  } } });
  function _sfc_render$Y(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "div",
      { onComponentValidity: _cache[0] || (_cache[0] = (...args) => _ctx.onComponentValidity && _ctx.onComponentValidity(...args)), onComponentUnmount: _cache[1] || (_cache[1] = (...args) => _ctx.onComponentUnmount && _ctx.onComponentUnmount(...args)) },
      [(0, import_vue.renderSlot)(_ctx.$slots, "default")],
      32
      /* NEED_HYDRATION */
    );
  }
  var FValidationGroup = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["render", _sfc_render$Y]]);
  var FValidationFormAction = /* @__PURE__ */ ((FValidationFormAction2) => {
    FValidationFormAction2[FValidationFormAction2["CONTINUE"] = 0] = "CONTINUE";
    FValidationFormAction2[FValidationFormAction2["CANCEL"] = 1] = "CANCEL";
    return FValidationFormAction2;
  })(FValidationFormAction || {});
  var _sfc_main$15 = (0, import_vue.defineComponent)({ name: "FValidationForm", components: { FValidationGroup, FErrorList }, inheritAttrs: false, props: {
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
    id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() },
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
    import_logic.ValidationService.setSubmitted(this.id);
    await import_logic.ValidationService.validateAllElements(this.id);
    await this.$nextTick();
    await new Promise((resolve) => window.setTimeout(resolve, 0));
    if (this.validity.isValid) {
      return false;
    }
    if (this.useErrorList) {
      (0, import_logic.focus)(this.$refs.errors);
    } else {
      const firstError = this.validity.componentsWithError[0];
      const element = document.getElementById(firstError.focusElementId);
      (0, import_logic.focus)(element);
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
  var _hoisted_1$Q = ["id"];
  var _hoisted_2$C = { key: 0, ref: "errors", tabindex: "-1", role: "group" };
  function _sfc_render$X(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_error_list = (0, import_vue.resolveComponent)("f-error-list");
    const _component_f_validation_group = (0, import_vue.resolveComponent)("f-validation-group");
    return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_f_validation_group, { key: _ctx.groupKey, modelValue: _ctx.validity, "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.validity = $event), "stop-propagation": true }, {
      default: (0, import_vue.withCtx)(() => [(0, import_vue.createElementVNode)("form", (0, import_vue.mergeProps)({ id: _ctx.id }, _ctx.$attrs, { novalidate: "", autocomplete: "off", onSubmit: _cache[0] || (_cache[0] = (0, import_vue.withModifiers)((...args) => _ctx.onSubmit && _ctx.onSubmit(...args), ["prevent"])) }), [_ctx.displayErrors ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
        "nav",
        _hoisted_2$C,
        [(0, import_vue.createVNode)(_component_f_error_list, { items: _ctx.errors, bullets: _ctx.errorListBullets, "before-navigate": _ctx.errorListBeforeNavigate }, {
          title: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "error-message")]),
          _: 3
          /* FORWARDED */
        }, 8, ["items", "bullets", "before-navigate"])],
        512
        /* NEED_PATCH */
      )) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "default")], 16, _hoisted_1$Q)]),
      _: 3
      /* FORWARDED */
    }, 8, ["modelValue"]);
  }
  var FValidationForm = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["render", _sfc_render$X]]);
  var _sfc_main$14 = (0, import_vue.defineComponent)({ name: "FFormModal", components: { FModal, FValidationForm }, mixins: [TranslationMixin], inheritAttrs: true, props: {
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
    formId: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() },
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
    buttons: { type: Array, required: false, default: () => [{ label: import_logic.TranslationService.provider.translate("fkui.form-modal.button.submit.text", "Spara"), event: "submit", type: "primary", submitButton: true }, { label: import_logic.TranslationService.provider.translate("fkui.form-modal.button.cancel.text", "Avbryt"), event: "dismiss", type: "secondary" }] }
  }, emits: ["cancel", "close", "submit"], data() {
    return {};
  }, computed: { preparedButtons() {
    return prepareButtonList(this.buttons, FKUIConfigButtonOrder.LEFT_TO_RIGHT);
  }, hasDeprecatedSlots() {
    return hasSlot(this, "cancel-button-text") || hasSlot(this, "submit-button-text");
  } }, methods: { onClose() {
    import_logic.ValidationService.resetState(this.$el);
    this.$emit("cancel");
    this.$emit("close", { reason: "close" });
  }, async onSubmit() {
    import_logic.ValidationService.resetState(this.$el);
    this.$emit("submit", { data: this.value });
    this.$emit("close", { reason: "submit", data: this.value });
  }, onCancel() {
    import_logic.ValidationService.resetState(this.$el);
    this.$emit("cancel");
    this.$emit("close", { reason: "close" });
  } } });
  var _hoisted_1$P = { class: "button-group" };
  var _hoisted_2$B = ["type", "form", "onClick"];
  var _hoisted_3$w = { key: 0, class: "sr-only" };
  var _hoisted_4$r = ["form"];
  function _sfc_render$W(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_validation_form = (0, import_vue.resolveComponent)("f-validation-form");
    const _component_f_modal = (0, import_vue.resolveComponent)("f-modal");
    return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_f_modal, { "data-test": _ctx.dataTest, fullscreen: _ctx.fullscreen, "is-open": _ctx.isOpen, size: _ctx.size, "aria-close-text": _ctx.ariaCloseText, onClose: _ctx.onClose }, {
      header: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "header")]),
      content: (0, import_vue.withCtx)(() => [(0, import_vue.createElementVNode)("div", null, [(0, import_vue.renderSlot)(_ctx.$slots, "default")]), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_validation_form, { id: _ctx.formId, "before-submit": _ctx.beforeSubmit, "before-validation": _ctx.beforeValidation, "use-error-list": _ctx.useErrorList, onSubmit: _ctx.onSubmit, onCancel: _ctx.onCancel }, {
        "error-message": (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "error-message")]),
        default: (0, import_vue.withCtx)(() => [(0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "input-text-fields")]),
        _: 3
        /* FORWARDED */
      }, 8, ["id", "before-submit", "before-validation", "use-error-list", "onSubmit", "onCancel"])]),
      footer: (0, import_vue.withCtx)(() => [(0, import_vue.createElementVNode)("div", _hoisted_1$P, [!_ctx.hasDeprecatedSlots ? ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
        import_vue.Fragment,
        { key: 0 },
        (0, import_vue.renderList)(_ctx.preparedButtons, (button) => {
          return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("button", { key: button.label, type: button.buttonType, class: (0, import_vue.normalizeClass)([button.classlist, "button-group__item"]), form: button.buttonType === "submit" ? _ctx.formId : void 0, onClick: ($event) => button.buttonType === "button" ? _ctx.onCancel() : false }, [(0, import_vue.createElementVNode)(
            "span",
            null,
            (0, import_vue.toDisplayString)(button.label),
            1
            /* TEXT */
          ), (0, import_vue.createTextVNode)(), button.screenreader ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
            "span",
            _hoisted_3$w,
            "\xA0" + (0, import_vue.toDisplayString)(button.screenreader),
            1
            /* TEXT */
          )) : (0, import_vue.createCommentVNode)("v-if", true)], 10, _hoisted_2$B);
        }),
        128
        /* KEYED_FRAGMENT */
      )) : ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
        import_vue.Fragment,
        { key: 1 },
        [(0, import_vue.createElementVNode)("button", { form: _ctx.formId, "data-test": "submit-button", type: "submit", class: "button button--primary button-group__item button--large" }, [(0, import_vue.renderSlot)(_ctx.$slots, "submit-button-text", {}, () => [(0, import_vue.createTextVNode)(
          (0, import_vue.toDisplayString)(_ctx.$t("fkui.form-modal.button.submit.text", "Spara")),
          1
          /* TEXT */
        )])], 8, _hoisted_4$r), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("button", { "data-test": "cancel-button", type: "button", class: "button button--secondary button-group__item button--large", onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onCancel && _ctx.onCancel(...args)) }, [(0, import_vue.renderSlot)(_ctx.$slots, "cancel-button-text", {}, () => [(0, import_vue.createTextVNode)(
          (0, import_vue.toDisplayString)(_ctx.$t("fkui.form-modal.button.cancel.text", "Avbryt")),
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
  var FFormModal = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["render", _sfc_render$W]]);
  async function confirmModal(callingInstance, modalData) {
    const buttons = [{ label: modalData.confirm, event: "confirm", type: "primary" }, { label: modalData.dismiss, event: "dismiss", type: "secondary" }];
    const { reason } = await openModal(callingInstance, FConfirmModal, { props: { heading: modalData.heading, content: modalData.content, buttons } });
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
      (0, import_logic.focus)(element, options);
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
  function hasSlot(vm, name, props = {}, options = {}) {
    const slot = vm.$slots[name];
    return Boolean(renderSlotText(slot, props, options));
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
  var ErrorData = class {
    constructor(error, vm, info) {
      __publicField(this, "error");
      __publicField(this, "vm");
      __publicField(this, "info");
      this.error = error;
      this.vm = vm;
      this.info = info;
    }
  };
  var ErrorViewData = class {
    constructor(hasError = false, payload) {
      __publicField(this, "hasError");
      __publicField(this, "payload");
      this.hasError = hasError;
      this.payload = payload;
    }
  };
  var FormErrorList = class {
    constructor(fields) {
      __publicField(this, "focusElementId", "");
      __publicField(this, "id", "");
      __publicField(this, "isValid", false);
      __publicField(this, "numberOfTimesSubmitted", 0);
      __publicField(this, "title", "");
      Object.assign(this, fields);
    }
  };
  var FormStep = class {
    constructor(fields) {
      __publicField(this, "isOpen", false);
      __publicField(this, "isAnyFieldTouched", false);
      __publicField(this, "focusElementId", "");
      __publicField(this, "id", "");
      __publicField(this, "isValid", false);
      __publicField(this, "numberOfTimesSubmitted", 0);
      __publicField(this, "title", "");
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
  function getValidatableElement(element) {
    if ((0, import_logic.isValidatableHTMLElement)(element)) {
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
    import_logic.ValidationService.validateElement(target);
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
    import_logic.ValidationService.addValidatorsToElement(target, validatorConfigs);
  }
  var ValidationDirective = { beforeMount(el, binding) {
    registerValidators(el, binding);
  }, beforeUnmount(el, _binding) {
    const validatableElement = getValidatableElement(el);
    dispatchComponentUnmountEvent(validatableElement);
    import_logic.ValidationService.removeValidatorsFromElement(validatableElement);
  }, updated(el, binding) {
    if (!isEqual$1(binding.value, binding.oldValue)) {
      registerValidators(el, binding);
    }
  }, mounted(el) {
    triggerInitialValidationToSupportFFormStepValidation(el);
  } };
  var ValidationPrefixDirective = { beforeMount(el, binding) {
    el.addEventListener("component-validity", (event) => {
      const e = event;
      e.detail.errorMessage = `${binding.value}${e.detail.errorMessage}`;
    });
  } };
  var ValidationPlugin = { install(app) {
    app.directive("validation", ValidationDirective);
    app.directive("validationPrefix", ValidationPrefixDirective);
  } };
  var UNHANDLED_ERROR_EVENT = "unhandled-error";
  var defaults = { captureWarnings: true, logToConsole: true };
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
    const error = { name: "warning", message: msg, stack: trace };
    EventBus.$emit(UNHANDLED_ERROR_EVENT, new ErrorData(error, vm, "warning"));
  }
  var ErrorPlugin = { install(app, options) {
    const config2 = { ...defaults, ...options };
    app.config.errorHandler = errorHandler.bind(void 0, config2);
    if (config2.captureWarnings) {
      app.config.warnHandler = warnHandler.bind(void 0, config2);
    }
  } };
  var _sfc_main$13 = (0, import_vue.defineComponent)({ name: "FErrorPage", props: { payload: { type: Object, required: false, default: null } } });
  var _hoisted_1$O = { "data-test": "f-error-page" };
  var _hoisted_2$A = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "h1",
    null,
    "Fel",
    -1
    /* HOISTED */
  );
  var _hoisted_3$v = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "p",
    null,
    "Ett fel har uppst\xE5tt.",
    -1
    /* HOISTED */
  );
  var _hoisted_4$q = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "a",
    { href: "/" },
    "G\xE5 till startsidan",
    -1
    /* HOISTED */
  );
  function _sfc_render$V(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_1$O, [_hoisted_2$A, (0, import_vue.createTextVNode)(), _hoisted_3$v, (0, import_vue.createTextVNode)(), _hoisted_4$q]);
  }
  var FErrorPage = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["render", _sfc_render$V]]);
  var _sfc_main$12 = (0, import_vue.defineComponent)({ name: "FErrorHandlingApp", props: { defaultComponent: { type: [Function, Object], required: false, default: void 0 }, errorComponent: { type: [Function, Object], required: false, default: FErrorPage } }, data() {
    return new ErrorViewData();
  }, watch: { $route() {
    this.hasError = false;
  } }, created() {
    EventBus.$on(UNHANDLED_ERROR_EVENT, (payload) => {
      this.hasError = true;
      this.payload = payload;
    });
  } });
  function _sfc_render$U(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", null, [_ctx.hasError ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)((0, import_vue.resolveDynamicComponent)(_ctx.errorComponent), { key: 0, payload: _ctx.payload }, null, 8, ["payload"])) : _ctx.defaultComponent ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)((0, import_vue.resolveDynamicComponent)(_ctx.defaultComponent), { key: 1 })) : (0, import_vue.renderSlot)(_ctx.$slots, "default", { key: 2 })]);
  }
  var FErrorHandlingApp = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["render", _sfc_render$U]]);
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
  function getMessage($t, date, minDate, maxDate) {
    const invalidMonth = isInvalidMonth(date, minDate, maxDate);
    if (!invalidMonth) {
      return void 0;
    }
    if (date.isBefore(minDate)) {
      const { day, monthName, year } = minDate;
      return $t("fkui.calendar.error.below-min-date", "Du kan inte v\xE4lja en dag f\xF6re {{day}} {{month}} {{year}}", { day, month: monthName, year });
    }
    if (date.isAfter(maxDate)) {
      const { day, monthName, year } = maxDate;
      return $t("fkui.calendar.error.above-max-date", "Du kan inte v\xE4lja en dag efter {{day}} {{month}} {{year}}", { day, month: monthName, year });
    }
  }
  var _sfc_main$11 = (0, import_vue.defineComponent)({ name: "ICalendarNavbar", components: { FIcon }, mixins: [TranslationMixin], props: {
    /**
    * Focused month.
    */
    modelValue: { type: Object, required: true },
    /**
    * Min date.
    */
    minDate: { type: Object, required: true },
    /**
    * Max date.
    */
    maxDate: { type: Object, required: true }
  }, emits: ["change", "update:modelValue"], computed: { previousDisabled() {
    return isInvalidMonth(this.modelValue.addMonths(-1), this.minDate, this.maxDate);
  }, nextDisabled() {
    return isInvalidMonth(this.modelValue.addMonths(1), this.minDate, this.maxDate);
  }, previousValue() {
    return this.modelValue.addMonths(-1);
  }, nextValue() {
    return this.modelValue.addMonths(1);
  }, currentText() {
    return this.getDateText(this.modelValue);
  }, previousSrText() {
    return this.$t("fkui.calendar-navbar.previous", "F\xF6reg\xE5ende m\xE5nad");
  }, nextSrText() {
    return this.$t("fkui.calendar-navbar.next", "N\xE4sta m\xE5nad");
  }, previousIconClasses() {
    return { "calendar-navbar__icon": true, "calendar-navbar__icon--disabled": this.previousDisabled };
  }, nextIconClasses() {
    return { "calendar-navbar__icon": true, "calendar-navbar__icon--disabled": this.nextDisabled };
  } }, methods: { onClickPreviousButton() {
    if (!this.previousDisabled) {
      this.$emit("update:modelValue", this.previousValue);
      this.$emit("change", this.previousValue);
      const previousMonth = this.getDateText(this.previousValue);
      const previousMonthText = this.$t("fkui.calendar-navbar.previous-month", "{{ previousMonth }} visas", { previousMonth });
      (0, import_logic.alertScreenReader)(previousMonthText, { assertive: true });
      return;
    }
    const message = getMessage(this.$t, this.previousValue, this.minDate, this.maxDate);
    if (message) {
      (0, import_logic.alertScreenReader)(message, { assertive: true });
    }
  }, onClickNextButton() {
    if (!this.nextDisabled) {
      this.$emit("update:modelValue", this.nextValue);
      this.$emit("change", this.nextValue);
      const nextMonth = this.getDateText(this.nextValue);
      const nextMonthText = this.$t("fkui.calendar-navbar.next-month", "{{ nextMonth }} visas", { nextMonth });
      (0, import_logic.alertScreenReader)(nextMonthText, { assertive: true });
      return;
    }
    const message = getMessage(this.$t, this.nextValue, this.minDate, this.maxDate);
    if (message) {
      (0, import_logic.alertScreenReader)(message, { assertive: true });
    }
  }, getDateText(value) {
    return `${value.monthName} ${value.year}`;
  }, isFocused(ref2) {
    return document.activeElement === this.$refs[ref2];
  } } });
  var _hoisted_1$N = { class: "calendar-navbar" };
  var _hoisted_2$z = { class: "calendar-navbar__month", tabindex: "-1" };
  var _hoisted_3$u = ["aria-disabled", "aria-live"];
  var _hoisted_4$p = { class: "sr-only" };
  var _hoisted_5$n = ["aria-disabled", "aria-live"];
  var _hoisted_6$i = { class: "sr-only" };
  function _sfc_render$T(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_1$N, [(0, import_vue.createElementVNode)(
      "div",
      _hoisted_2$z,
      (0, import_vue.toDisplayString)(_ctx.currentText),
      1
      /* TEXT */
    ), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("button", { ref: "previousButton", class: "calendar-navbar__arrow calendar-navbar__arrow--previous", type: "button", "aria-disabled": _ctx.previousDisabled, "aria-live": _ctx.isFocused("previousButton") ? "polite" : "off", onClick: _cache[0] || (_cache[0] = (0, import_vue.withModifiers)((...args) => _ctx.onClickPreviousButton && _ctx.onClickPreviousButton(...args), ["stop"])) }, [(0, import_vue.createElementVNode)(
      "span",
      _hoisted_4$p,
      (0, import_vue.toDisplayString)(_ctx.previousSrText),
      1
      /* TEXT */
    ), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_icon, { class: (0, import_vue.normalizeClass)(_ctx.previousIconClasses), name: "arrow-right" }, null, 8, ["class"])], 8, _hoisted_3$u), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("button", { ref: "nextButton", class: "calendar-navbar__arrow calendar-navbar__arrow--next", type: "button", "aria-disabled": _ctx.nextDisabled, "aria-live": _ctx.isFocused("nextButton") ? "polite" : "off", onClick: _cache[1] || (_cache[1] = (0, import_vue.withModifiers)((...args) => _ctx.onClickNextButton && _ctx.onClickNextButton(...args), ["stop"])) }, [(0, import_vue.createElementVNode)(
      "span",
      _hoisted_6$i,
      (0, import_vue.toDisplayString)(_ctx.nextSrText),
      1
      /* TEXT */
    ), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_icon, { class: (0, import_vue.normalizeClass)(_ctx.nextIconClasses), name: "arrow-right" }, null, 8, ["class"])], 8, _hoisted_5$n)]);
  }
  var ICalendarNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["render", _sfc_render$T]]);
  function getDayStartOffset(days) {
    return days[0].weekDay - 1;
  }
  function getDayEndOffset(days) {
    return 7 - days[days.length - 1].weekDay;
  }
  var _sfc_main$10 = (0, import_vue.defineComponent)({ name: "ICalendarMonthGrid", props: {
    /**
    * Focused month.
    * @model
    */
    value: { type: Object, required: true },
    /**
    * Hide week numbers.
    */
    hideWeekNumbers: { type: Boolean, required: false, default: false }
  }, data() {
    return { weekdays: (0, import_date.getWeekdayNamings)(), focused: false, resizeObserver: void 0, internalHideWeekNumbers: false, showShortWeekdays: false };
  }, computed: { totalCols() {
    return this.hideWeekNumbers ? 7 : 8;
  }, weeks() {
    return (0, import_date.groupByWeek)(this.value.startOfMonth(), this.value.endOfMonth());
  } }, mounted() {
    this.resizeObserver = new ResizeObserver((0, import_logic.debounce)(this.onResize, 100));
    this.resizeObserver.observe(this.$el);
    this.onResize();
  }, unmounted() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }, methods: { onResize() {
    const component = this.$el;
    this.internalHideWeekNumbers = this.hideWeekNumbers || component.offsetWidth < 320;
    this.showShortWeekdays = component.offsetWidth < 640;
  }, onFocusin() {
    this.focused = true;
  }, onFocusout(e) {
    const component = this.$el;
    const relatedTarget = e.relatedTarget;
    if (!component.contains(relatedTarget)) {
      this.focused = false;
    }
  }, getDayStartOffset, getDayEndOffset } });
  var _hoisted_1$M = { key: 0, class: "calendar-month__col--week" };
  var _hoisted_2$y = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "col",
    { class: "calendar-month__col--day" },
    null,
    -1
    /* HOISTED */
  );
  var _hoisted_3$t = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "col",
    { class: "calendar-month__col--day" },
    null,
    -1
    /* HOISTED */
  );
  var _hoisted_4$o = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "col",
    { class: "calendar-month__col--day" },
    null,
    -1
    /* HOISTED */
  );
  var _hoisted_5$m = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "col",
    { class: "calendar-month__col--day" },
    null,
    -1
    /* HOISTED */
  );
  var _hoisted_6$h = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "col",
    { class: "calendar-month__col--day" },
    null,
    -1
    /* HOISTED */
  );
  var _hoisted_7$e = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "col",
    { class: "calendar-month__col--day" },
    null,
    -1
    /* HOISTED */
  );
  var _hoisted_8$a = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "col",
    { class: "calendar-month__col--day" },
    null,
    -1
    /* HOISTED */
  );
  var _hoisted_9$6 = { role: "presentation" };
  var _hoisted_10$6 = { role: "presentation" };
  var _hoisted_11$2 = { key: 0, scope: "col", "aria-hidden": "true", class: "calendar-month__header-cell" };
  var _hoisted_12$2 = ["title"];
  var _hoisted_13$2 = { role: "presentation" };
  var _hoisted_14$2 = { key: 0, class: "calendar-month__cell calendar-month__cell--week-number", "aria-hidden": "true" };
  var _hoisted_15$2 = ["colspan"];
  var _hoisted_16$1 = ["colspan"];
  var _hoisted_17$1 = { key: 0, "aria-hidden": "true" };
  var _hoisted_18$1 = ["colspan"];
  var _hoisted_19$1 = { key: 1, "aria-hidden": "true" };
  var _hoisted_20$1 = ["colspan"];
  function _sfc_render$S(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "table",
      { class: "calendar-month__table", role: "application", onFocusin: _cache[0] || (_cache[0] = (...args) => _ctx.onFocusin && _ctx.onFocusin(...args)), onFocusout: _cache[1] || (_cache[1] = (...args) => _ctx.onFocusout && _ctx.onFocusout(...args)) },
      [(0, import_vue.createElementVNode)("colgroup", null, [!_ctx.internalHideWeekNumbers ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("col", _hoisted_1$M)) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), _hoisted_2$y, (0, import_vue.createTextVNode)(), _hoisted_3$t, (0, import_vue.createTextVNode)(), _hoisted_4$o, (0, import_vue.createTextVNode)(), _hoisted_5$m, (0, import_vue.createTextVNode)(), _hoisted_6$h, (0, import_vue.createTextVNode)(), _hoisted_7$e, (0, import_vue.createTextVNode)(), _hoisted_8$a]), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("thead", _hoisted_9$6, [(0, import_vue.createElementVNode)("tr", _hoisted_10$6, [!_ctx.internalHideWeekNumbers ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("th", _hoisted_11$2)) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
        import_vue.Fragment,
        null,
        (0, import_vue.renderList)(_ctx.weekdays, (weekday) => {
          return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("th", { key: weekday.name, scope: "col", role: "presentation", class: "calendar-month__header-cell" }, [(0, import_vue.createElementVNode)("abbr", { "aria-hidden": "true", title: weekday.name }, (0, import_vue.toDisplayString)(_ctx.showShortWeekdays ? weekday.shortName : weekday.name), 9, _hoisted_12$2)]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))])]), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("tbody", _hoisted_13$2, [((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
        import_vue.Fragment,
        null,
        (0, import_vue.renderList)(_ctx.weeks, (week) => {
          return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("tr", { key: week.week, role: "presentation" }, [!_ctx.internalHideWeekNumbers ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
            "td",
            _hoisted_14$2,
            (0, import_vue.toDisplayString)(week.week),
            1
            /* TEXT */
          )) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), _ctx.getDayStartOffset(week.days) ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("td", { key: 1, class: "calendar-month__cell", colspan: _ctx.getDayStartOffset(week.days), "aria-hidden": "true" }, null, 8, _hoisted_15$2)) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
            import_vue.Fragment,
            null,
            (0, import_vue.renderList)(week.days, (day) => {
              return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("td", { key: day.toString(), class: "calendar-month__cell", role: "presentation" }, [(0, import_vue.renderSlot)(_ctx.$slots, "default", { date: day, focused: _ctx.focused })]);
            }),
            128
            /* KEYED_FRAGMENT */
          )), (0, import_vue.createTextVNode)(), _ctx.getDayEndOffset(week.days) ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("td", { key: 2, class: "calendar-month__cell", colspan: _ctx.getDayEndOffset(week.days), "aria-hidden": "true" }, null, 8, _hoisted_16$1)) : (0, import_vue.createCommentVNode)("v-if", true)]);
        }),
        128
        /* KEYED_FRAGMENT */
      )), (0, import_vue.createTextVNode)(), _ctx.weeks.length < 5 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("tr", _hoisted_17$1, [(0, import_vue.createElementVNode)("td", { class: "calendar-month__cell", colspan: _ctx.totalCols, "aria-hidden": "true" }, null, 8, _hoisted_18$1)])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), _ctx.weeks.length < 6 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("tr", _hoisted_19$1, [(0, import_vue.createElementVNode)("td", { class: "calendar-month__cell", colspan: _ctx.totalCols, "aria-hidden": "true" }, null, 8, _hoisted_20$1)])) : (0, import_vue.createCommentVNode)("v-if", true)])],
      32
      /* NEED_HYDRATION */
    );
  }
  var ICalendarMonthGrid = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["render", _sfc_render$S]]);
  var DayStep = { ArrowRight: 1, ArrowLeft: -1, ArrowUp: -7, ArrowDown: 7 };
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
  var _sfc_main$$ = (0, import_vue.defineComponent)({ name: "ICalendarMonth", components: { ICalendarMonthGrid }, mixins: [TranslationMixin], props: {
    /**
    * Active month.
    * @model
    */
    modelValue: { type: Object, required: true },
    /**
    * Date to focus on when component gains focus.
    *
    * Consumers can update this related to active month.
    * If undefined, the first day of the month will gain focus.
    */
    tabDate: { type: Object, required: false, default: void 0 },
    /**
    * Min date.
    */
    minDate: { type: Object, required: true },
    /**
    * Max date.
    */
    maxDate: { type: Object, required: true }
  }, emits: ["change", "click", "update:modelValue"], methods: { onClickDay(date) {
    this.$emit("click", date);
  }, async onKeydownDay(date, event) {
    if (!isDayStepKey(event)) {
      return;
    }
    event.preventDefault();
    const dayStep = getDayStep(event);
    const navigatedDay = date.addDays(dayStep);
    const navigatedMonth = navigatedDay.startOfMonth();
    const message = getMessage(this.$t, navigatedDay, this.minDate, this.maxDate);
    if (message) {
      (0, import_logic.alertScreenReader)(message, { assertive: true });
      return;
    }
    this.$emit("update:modelValue", navigatedMonth);
    this.$emit("change", navigatedMonth);
    if (navigatedDay.month !== date.month) {
      await this.$nextTick();
    }
    this.$forceUpdate();
    const navigatedDayRef = this.$refs[navigatedDay.toString()];
    if (navigatedDayRef) {
      const navigatedDayElement = getHTMLElementFromVueRef(navigatedDayRef);
      (0, import_logic.focus)(navigatedDayElement);
    }
  }, isDayFocused(date) {
    return document.activeElement === this.$refs[date.toString()];
  }, getTabindex(date) {
    let activeDate = void 0;
    if (document.activeElement instanceof HTMLElement) {
      const activeString = document.activeElement.dataset.date;
      activeDate = activeString ? import_date.FDate.fromIso(activeString) : void 0;
    }
    return getDayTabindex(date, activeDate, this.tabDate);
  } } });
  var _hoisted_1$L = ["data-date", "tabindex", "onClick", "onKeydown"];
  function _sfc_render$R(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_i_calendar_month_grid = (0, import_vue.resolveComponent)("i-calendar-month-grid");
    return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_i_calendar_month_grid, { value: _ctx.modelValue }, {
      default: (0, import_vue.withCtx)(({ date }) => [(0, import_vue.createElementVNode)("button", { ref: date.toString(), class: "calendar-month__button", "data-test": "select-day-button", "data-date": date.toString(), tabindex: _ctx.getTabindex(date), type: "button", onClick: (0, import_vue.withModifiers)(($event) => _ctx.onClickDay(date), ["stop", "prevent"]), onKeydown: ($event) => _ctx.onKeydownDay(date, $event) }, [(0, import_vue.renderSlot)(_ctx.$slots, "default", { date, isFocused: _ctx.isDayFocused(date) })], 40, _hoisted_1$L)]),
      _: 3
      /* FORWARDED */
    }, 8, ["value"]);
  }
  var ICalendarMonth = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["render", _sfc_render$R]]);
  var _sfc_main$_ = (0, import_vue.defineComponent)({ name: "FCalendar", components: { ICalendarNavbar, ICalendarMonth }, props: {
    /**
    * Active month.
    * @model
    */
    modelValue: { type: Object, required: true },
    /**
    * Date to set tabindex on when component gains focus.
    *
    * Consumers can update this related to active month.
    * If undefined, the first day of the month will gain focus.
    */
    tabDate: { type: Object, required: false, default: void 0 },
    /**
    * Min date.
    */
    minDate: { type: Object, required: true },
    /**
    * Max date.
    */
    maxDate: { type: Object, required: true }
  }, emits: ["click", "change", "update:modelValue"], methods: { onClickDay(date) {
    this.$emit("click", date);
  }, onChangeMonth(date) {
    this.$emit("update:modelValue", date);
    this.$emit("change", date);
  } } });
  var _hoisted_1$K = { class: "calendar__wrapper" };
  function _sfc_render$Q(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_i_calendar_navbar = (0, import_vue.resolveComponent)("i-calendar-navbar");
    const _component_i_calendar_month = (0, import_vue.resolveComponent)("i-calendar-month");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_1$K, [(0, import_vue.createVNode)(_component_i_calendar_navbar, { "model-value": _ctx.modelValue, "min-date": _ctx.minDate, "max-date": _ctx.maxDate, "onUpdate:modelValue": _ctx.onChangeMonth }, null, 8, ["model-value", "min-date", "max-date", "onUpdate:modelValue"]), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_i_calendar_month, { "model-value": _ctx.modelValue, "min-date": _ctx.minDate, "max-date": _ctx.maxDate, "tab-date": _ctx.tabDate, onClick: _ctx.onClickDay, "onUpdate:modelValue": _ctx.onChangeMonth }, {
      default: (0, import_vue.withCtx)(({ date, focused }) => [(0, import_vue.renderSlot)(_ctx.$slots, "default", { date, isFocused: focused })]),
      _: 3
      /* FORWARDED */
    }, 8, ["model-value", "min-date", "max-date", "tab-date", "onClick", "onUpdate:modelValue"])]);
  }
  var FCalendar = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["render", _sfc_render$Q]]);
  function getCalendarDaySrText(day, enabled, selected, t) {
    const parts = [];
    if (!enabled) {
      parts.push(t("fkui.calendar.day.unselectable", "inte valbar"));
    } else if (selected) {
      parts.push(t("fkui.calendar.day.selected", "vald dag"));
    }
    const today = import_date.FDate.now();
    if (day.equals(today)) {
      parts.push(t("fkui.calendar.day.today", "idag"));
    } else if (day.equals(today.addDays(-1))) {
      parts.push(t("fkui.calendar.day.yesterday", "ig\xE5r"));
    } else if (day.equals(today.addDays(1))) {
      parts.push(t("fkui.calendar.day.tomorrow", "imorgon"));
    }
    parts.push(day.toString(import_date.DateFormat.FULL));
    return parts.join(" ");
  }
  var _sfc_main$Z = (0, import_vue.defineComponent)({ name: "FCalendarDay", mixins: [TranslationMixin], props: {
    /**
    * Day to render.
    */
    day: { type: Object, required: true },
    /**
    * Set to `true` if day is enabled.
    */
    enabled: { type: Boolean, required: false, default: true },
    /**
    * Set to `true` if day is focused.
    */
    focused: { type: Boolean, required: false, default: false },
    /**
    * Set to `true` if day is selected.
    */
    selected: { type: Boolean, required: false, default: false },
    /**
    * Set to `true` if day should be highlighted.
    */
    highlight: { type: Boolean, required: false, default: false }
  }, computed: { srText() {
    return getCalendarDaySrText(this.day, this.enabled, this.selected, this.$t);
  }, dayClasses() {
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
  } } });
  var _hoisted_1$J = { "aria-hidden": "true" };
  var _hoisted_2$x = { class: "sr-only" };
  function _sfc_render$P(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "span",
      { class: (0, import_vue.normalizeClass)(_ctx.dayClasses) },
      [(0, import_vue.createElementVNode)(
        "span",
        _hoisted_1$J,
        (0, import_vue.toDisplayString)(_ctx.day.day),
        1
        /* TEXT */
      ), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
        "span",
        _hoisted_2$x,
        (0, import_vue.toDisplayString)(_ctx.srText),
        1
        /* TEXT */
      )],
      2
      /* CLASS */
    );
  }
  var FCalendarDay = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["render", _sfc_render$P]]);
  function offset(page, el) {
    const rect = el.getBoundingClientRect();
    return { top: rect.top + page.pageYOffset, left: rect.left + page.pageXOffset };
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
    return { x, y, width, height };
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
      const match = candidates[index];
      return { x: match.x, y: match.y, placement: match.placement };
    }
    return {
      ...getFallbackPosition(anchor, target, clippedArea, spacing),
      placement: "Fallback"
      /* Fallback */
    };
  }
  function getScrollToPopup(param) {
    const popupOffset = offset({ pageXOffset: 0, pageYOffset: param.scrollTop }, param.popup);
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
      return { x, y };
    } else {
      return { x: clippedArea.x + spacing, y };
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
    const elements = (0, import_logic.findTabbableElements)(popupElement);
    return (_elements$ = elements[0]) !== null && _elements$ !== void 0 ? _elements$ : null;
  }
  var MIN_DESKTOP_WIDTH = 640;
  var POPUP_SPACING$1 = 20;
  function isTeleportDisabled(options) {
    const { window: window2, placement, forceInline, forceOverlay } = options;
    const isMobileSize = window2.innerWidth < MIN_DESKTOP_WIDTH;
    let disableTeleport = isMobileSize || placement === Placement.Fallback;
    if (forceInline) {
      disableTeleport = true;
    } else if (forceOverlay) {
      disableTeleport = false;
    }
    return disableTeleport;
  }
  var _sfc_main$Y = (0, import_vue.defineComponent)({ name: "IPopup", inheritAttrs: false, props: {
    /**
    * Toggle open/closed popup.
    */
    isOpen: { type: Boolean, required: true },
    /**
    * DOM element to position popup at.
    */
    anchor: { type: HTMLElement, required: false, default: void 0 },
    /**
    * Type of inline behaviour.
    * - `"auto"` changes between overlay or inline depending on window size.
    * - `"always"` forces the popup to always be inline.
    * - `"never"` forces the popup to never be inline.
    */
    inline: { type: String, required: false, validator(value) {
      return ["always", "never", "auto"].includes(value);
    }, default: "auto" },
    /**
    * Force popup to always display inline.
    * @deprecated Use `inline="always"` instead.
    */
    alwaysInline: { type: Boolean, required: false, default: false },
    /**
    * Which element to use as container.
    */
    container: { type: HTMLElement, required: false, default: void 0 },
    /**
    * Which element to use as viewport.
    */
    viewport: { type: HTMLElement, required: false, default() {
      return document.documentElement;
    } },
    /**
    * Prevents tabbing outside of component.
    */
    keyboardTrap: { type: Boolean, required: false, default: true },
    /**
    * Function that returns the element that will receive focus
    */
    focusElement: { type: Function, required: false, default: null },
    /**
    * Set focus on first tabbable element (or element in the `focusElement` prop if provided) when opened.
    */
    setFocus: { type: Boolean, required: false, default: true }
  }, emits: ["open", "close"], data() {
    return { teleportDisabled: false, placement: Placement.NotCalculated, focus: null, noCloseOnResize: false };
  }, computed: { popupClasses() {
    let isInline = this.teleportDisabled || this.placement === Placement.Fallback;
    if (this.forceInline) {
      isInline = true;
    } else if (this.forceOverlay) {
      isInline = false;
    }
    const popupState = isInline ? ["popup--inline"] : ["popup--overlay"];
    return ["popup", ...popupState];
  }, forceInline() {
    return this.alwaysInline || this.inline === "always";
  }, forceOverlay() {
    return this.inline === "never";
  }, teleportTarget() {
    var _config$popupTarget;
    return (_config$popupTarget = config.popupTarget) !== null && _config$popupTarget !== void 0 ? _config$popupTarget : config.teleportTarget;
  } }, watch: { isOpen: { immediate: true, handler(value) {
    this.toggleIsOpen(value);
    if (value) {
      const { placement, forceInline, forceOverlay } = this;
      this.teleportDisabled = isTeleportDisabled({ window, placement, forceInline, forceOverlay });
      setTimeout(() => {
        if (this.isOpen) {
          document.addEventListener("click", this.onDocumentClickHandler);
          window.addEventListener("resize", this.onWindowResizeHandler);
        }
      }, 0);
    } else {
      document.removeEventListener("click", this.onDocumentClickHandler);
      window.removeEventListener("resize", this.onWindowResizeHandler);
    }
  } } }, unmounted() {
    document.removeEventListener("click", this.onDocumentClickHandler);
    window.removeEventListener("resize", this.onWindowResizeHandler);
  }, methods: { async toggleIsOpen(isOpen) {
    if (!isOpen) {
      this.placement = Placement.NotCalculated;
      if (this.focus) {
        (0, import_logic.popFocus)(this.focus);
        this.focus = null;
      }
      return;
    }
    await this.$nextTick();
    const popup = this.$refs["popup"];
    const wrapper = this.$refs["wrapper"];
    const anchor = getElement(this.anchor);
    if (!anchor) {
      throw new Error("No anchor element found");
    }
    const shouldCheckCandidates = this.forceOverlay || !(this.isMobileSize() || this.forceInline);
    if (shouldCheckCandidates) {
      const area = getContainer(popup, this.container);
      const viewport = this.viewport;
      const result = fitInsideArea({ area, anchor, target: wrapper, viewport, spacing: POPUP_SPACING$1, candidateOrder: CandidateOrder.Default });
      this.placement = result.placement;
      const useOverlay = this.forceOverlay || result.placement !== Placement.Fallback;
      if (useOverlay) {
        wrapper.style.left = `${result.x}px`;
        wrapper.style.top = `${result.y}px`;
        this.applyFocus();
        this.$emit("open");
        return;
      }
    }
    this.noCloseOnResize = true;
    this.teleportDisabled = true;
    await new Promise((resolve) => setTimeout(resolve, 200));
    const scrollTarget = popup.closest(".scroll-target");
    const hasScrollTarget = scrollTarget !== null;
    const top = getScrollToPopup({ popup: wrapper, windowInnerHeight: window.innerHeight, scrollTop: hasScrollTarget ? scrollTarget.scrollTop : window.scrollY, spacing: POPUP_SPACING$1 });
    const scrollOptions = { top, behavior: "smooth" };
    wrapper.style.removeProperty("left");
    wrapper.style.removeProperty("top");
    if (hasScrollTarget) {
      scrollTarget.scrollTo(scrollOptions);
    } else {
      window.scrollTo(scrollOptions);
    }
    this.noCloseOnResize = false;
    this.applyFocus();
    this.$emit("open");
  }, applyFocus() {
    if (this.setFocus) {
      const wrapper = this.$refs["wrapper"];
      const focusableElement = getFocusableElement(wrapper, this.focusElement);
      this.focus = (0, import_logic.pushFocus)(focusableElement);
    }
  }, isMobileSize() {
    return window.innerWidth < MIN_DESKTOP_WIDTH;
  }, onDocumentClickHandler() {
    this.$emit("close");
  }, onWindowResizeHandler() {
    if (this.noCloseOnResize) {
      return;
    }
    this.$emit("close");
  }, onPopupClickHandler(event) {
    event.stopPropagation();
  }, onKeyEsc() {
    this.$emit("close");
  }, onKeyTab(event) {
    if (this.keyboardTrap) {
      (0, import_logic.handleTab)(event, this.$refs.wrapper);
    }
  } } });
  function _sfc_render$O(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.isOpen ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(import_vue.Teleport, { key: 0, to: _ctx.teleportTarget, disabled: _ctx.teleportDisabled }, [(0, import_vue.createElementVNode)(
      "div",
      (0, import_vue.mergeProps)({ ref: "popup" }, _ctx.$attrs, { class: _ctx.popupClasses }),
      [(0, import_vue.createElementVNode)(
        "div",
        { ref: "wrapper", role: "presentation", class: "popup__wrapper", onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onPopupClickHandler && _ctx.onPopupClickHandler(...args)), onKeyup: _cache[1] || (_cache[1] = (0, import_vue.withKeys)((0, import_vue.withModifiers)((...args) => _ctx.onKeyEsc && _ctx.onKeyEsc(...args), ["stop"]), ["esc"])), onKeydown: _cache[2] || (_cache[2] = (0, import_vue.withKeys)((...args) => _ctx.onKeyTab && _ctx.onKeyTab(...args), ["tab"])) },
        [(0, import_vue.renderSlot)(_ctx.$slots, "default", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ toggleIsOpen: _ctx.toggleIsOpen, placement: _ctx.placement })))],
        544
        /* NEED_HYDRATION, NEED_PATCH */
      )],
      16
      /* FULL_PROPS */
    )], 8, ["to", "disabled"])) : (0, import_vue.createCommentVNode)("v-if", true);
  }
  var IPopup = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["render", _sfc_render$O]]);
  function isContextMenuTextItem(value) {
    return typeof value.key === "string";
  }
  function isContextMenuSeparatorItem(value) {
    return typeof value.separator === "boolean" && value.separator;
  }
  function getNewItemIndexFromMenuAction$3(action, index, n) {
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
  async function doMenuAction$3(action, target) {
    const itemsLength = target.popupItems.length;
    const currentIndex = target.currentFocusedItemIndex;
    const newFocusedItemIndex = getNewItemIndexFromMenuAction$3(action, currentIndex, itemsLength);
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
  var preventKeys$3 = ["Tab", "Up", "Down", "ArrowUp", "ArrowDown", "Home", "End", " ", "Spacebar", "Enter", "Escape"];
  var keyUp$1 = ["ArrowUp", "Up"];
  var _sfc_main$X = (0, import_vue.defineComponent)({ name: "FContextMenu", components: { IPopup, FIcon }, props: {
    /**
    * Toggle open/closed popup.
    */
    isOpen: { type: Boolean, required: true },
    /**
    * DOM element to position popup at.
    */
    anchor: { type: HTMLElement, required: false, default: void 0 },
    /**
    * The items to be diplayed in the menu
    */
    items: { type: Array, required: true },
    /**
    * Unique accessible name for navigation landmark.
    */
    ariaLabel: { type: String, required: false, default: "Kontextuell meny" }
  }, emits: ["close", "select"], setup() {
    return { contextmenu: (0, import_vue.ref)(null) };
  }, data() {
    return { selectedItem: "", currentFocusedItemIndex: -1 };
  }, computed: { popupItems() {
    return this.items.filter(isContextMenuTextItem);
  }, separatorPositions() {
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
  }, hasIcons() {
    return this.items.some((it) => isContextMenuTextItem(it) && it.icon);
  } }, watch: { isOpen: { immediate: true, async handler() {
    if (this.isOpen) {
      this.currentFocusedItemIndex = -1;
      this.selectedItem = "";
    }
  } } }, methods: { hasSeparatorAfterItemAt(index) {
    return this.separatorPositions.includes(index);
  }, closePopup() {
    this.$emit("close");
  }, onClickItem(item) {
    if (isContextMenuTextItem(item) && item.key) {
      this.selectedItem = item.key;
      this.$emit("select", this.selectedItem);
      this.closePopup();
    }
  }, tabIndex(index) {
    return index === this.currentFocusedItemIndex ? 0 : -1;
  }, onKeyUp(event) {
    if (preventKeys$3.includes(event.key)) {
      event.preventDefault();
    }
  }, doHandlePopupMenuTabKey(action) {
    if (action === MenuAction.MOVE_NEXT && this.currentFocusedItemIndex + 1 === this.popupItems.length) {
      this.closePopup();
      return true;
    } else if (action === MenuAction.MOVE_PREV && (this.currentFocusedItemIndex === 0 || this.currentFocusedItemIndex === -1)) {
      this.closePopup();
      return false;
    }
    return false;
  }, async onKeyDown(event) {
    if (!preventKeys$3.includes(event.key)) {
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
    if (keyUp$1.includes(event.key) && this.currentFocusedItemIndex === -1) {
      this.currentFocusedItemIndex = this.popupItems.length > 0 ? this.popupItems.length : 1;
    }
    event.preventDefault();
    await doMenuAction$3(action, this);
  }, async setFocusOnItem(index) {
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
      (0, import_logic.focus)(popupMenuItem, { preventScroll: true });
    }
  }, async activateItem(index) {
    if (index < 0 || index >= this.popupItems.length) {
      return;
    }
    if (index !== this.currentFocusedItemIndex) {
      await this.setFocusOnItem(index);
    }
    this.onClickItem(this.popupItems[this.currentFocusedItemIndex]);
  } } });
  var _hoisted_1$I = ["aria-label"];
  var _hoisted_2$w = { ref: "contextmenu", role: "menu", tabindex: "-1", class: "contextmenu__list" };
  var _hoisted_3$s = ["onClick"];
  var _hoisted_4$n = ["tabindex"];
  var _hoisted_5$l = { key: 0, class: "contextmenu__separator" };
  function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    const _component_i_popup = (0, import_vue.resolveComponent)("i-popup");
    return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_i_popup, { "is-open": _ctx.isOpen, "keyboard-trap": false, anchor: _ctx.anchor, "set-focus": true, "focus-element": () => _ctx.contextmenu, inline: "never", onClose: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("close")) }, {
      default: (0, import_vue.withCtx)(() => [(0, import_vue.createElementVNode)("nav", { class: "contextmenu", "aria-label": _ctx.ariaLabel, onKeyup: _cache[0] || (_cache[0] = (...args) => _ctx.onKeyUp && _ctx.onKeyUp(...args)), onKeydown: _cache[1] || (_cache[1] = (...args) => _ctx.onKeyDown && _ctx.onKeyDown(...args)) }, [(0, import_vue.createElementVNode)(
        "ul",
        _hoisted_2$w,
        [((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
          import_vue.Fragment,
          null,
          (0, import_vue.renderList)(_ctx.popupItems, (item, index) => {
            return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("li", { key: item.key, role: "menuitem", onClick: ($event) => _ctx.onClickItem(item) }, [(0, import_vue.createElementVNode)("div", { ref_for: true, ref: "items", tabindex: _ctx.tabIndex(index), class: "contextmenu__list__item" }, [_ctx.hasIcons ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_f_icon, { key: 0, class: "contextmenu__lefticon", name: item.icon ? item.icon : "", library: item.iconLibrary ? item.iconLibrary : "f" }, null, 8, ["name", "library"])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
              "a",
              { ref_for: true, ref: "anchors" },
              (0, import_vue.toDisplayString)(item.label),
              513
              /* TEXT, NEED_PATCH */
            )], 8, _hoisted_4$n), (0, import_vue.createTextVNode)(), _ctx.hasSeparatorAfterItemAt(index) ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("hr", _hoisted_5$l)) : (0, import_vue.createCommentVNode)("v-if", true)], 8, _hoisted_3$s);
          }),
          128
          /* KEYED_FRAGMENT */
        ))],
        512
        /* NEED_PATCH */
      )], 40, _hoisted_1$I)]),
      _: 1
      /* STABLE */
    }, 8, ["is-open", "anchor", "focus-element"]);
  }
  var FContextMenu = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["render", _sfc_render$N]]);
  function* labelClasses(options) {
    const { labelClass } = options;
    yield "fieldset__label";
    yield labelClass;
  }
  function* contentClasses(options) {
    const { hasRadiobutton, hasCheckbox, contentClass } = options;
    yield "fieldset__content";
    if (hasRadiobutton) {
      yield "radio-button-group__content";
    }
    if (hasCheckbox) {
      yield "checkbox-group__content";
    }
    yield contentClass;
  }
  var injectionKeys = { sharedName: Symbol("sharedName"), showDetails: Symbol("showDetails"), getFieldsetLabelText: Symbol("getFieldsetLabelText") };
  function useFieldset() {
    return { sharedName: (0, import_vue.inject)(injectionKeys.sharedName, void 0), showDetails: (0, import_vue.inject)(injectionKeys.showDetails, "never"), getFieldsetLabelText: (0, import_vue.inject)(injectionKeys.getFieldsetLabelText, () => void 0) };
  }
  var _sfc_main$W = (0, import_vue.defineComponent)({ name: "FFieldset", components: { FIcon }, mixins: [TranslationMixin], props: {
    /**
    * The id for the fieldset id attribute.
    * If the prop is not set a random value will be generated.
    */
    id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() },
    /**
    * Name provided to child content as `sharedName` for optional usage (it will not be set on the fieldset element).
    * For radio inputs this is a shortcut to specify the shared name attribute at one place,
    * instead of repeatedly setting the name attribute on each radio input.
    */
    name: { type: String, required: false, default: void 0 },
    /**
    * The CSS classes for the label, description and error-message slot.
    */
    labelClass: { type: String, required: false, default: "" },
    /**
    * The CSS classes for the default slot.
    */
    contentClass: { type: String, required: false, default: "" },
    /**
    * Aligns underlying items horizontally.
    * Supported by radiobuttons and chip layout.
    */
    horizontal: { type: Boolean, required: false },
    /**
    * Displays radio and checkbox content with chip layout.
    */
    chip: { type: Boolean, required: false, default: false },
    /**
    * Displays a box with border around radiobuttons and checkboxes.
    */
    border: { type: Boolean, required: false },
    /**
    * Sets visibility behaviour for details slot in selectable child items. By default details slot is not rendered.
    *
    * * `never` (default) - Never show item details.
    * - `when-selected` - Show item details when selected.
    * - `always` - Always show item details.
    */
    showDetails: { type: String, default: "never", validator(value) {
      return ["never", "when-selected", "always"].includes(value);
    } }
  }, setup(props) {
    const slots = (0, import_vue.useSlots)();
    (0, import_vue.provide)(injectionKeys.sharedName, props.name);
    (0, import_vue.provide)(injectionKeys.showDetails, props.showDetails);
    (0, import_vue.provide)(injectionKeys.getFieldsetLabelText, () => {
      return renderSlotText(slots.label);
    });
  }, data() {
    return { validity: { validityMode: "INITIAL" }, descriptionClass: ["label__description"], discreteDescriptionClass: ["label__description", "label__description--discrete"], validityElement: null, dispatchObject: {}, detail: {}, hasDocumentListener: false, legendKey: 1, oldMessage: "", children: new Array(), hasCheckbox: false, hasRadiobutton: false };
  }, computed: { hasError() {
    return this.validity.validityMode === "ERROR";
  }, hasErrorMessageSlot() {
    return hasSlot(this, "error-message");
  }, hasTooltipSlot() {
    return Boolean(this.$slots.tooltip);
  }, hasDescriptionSlot() {
    return hasSlot(this, "description");
  }, legendClass() {
    return this.hasTooltipSlot ? ["sr-only"] : this.groupLabelClass;
  }, groupLabelClass() {
    return Array.from(labelClasses(this));
  }, groupContentClass() {
    return Array.from(contentClasses(this));
  }, classes() {
    const { hasRadiobutton, hasCheckbox, horizontal, chip, border } = this;
    return { "radio-button-group": hasRadiobutton, "radio-button-group--chip": chip && hasRadiobutton, "radio-button-group--horizontal": horizontal && hasRadiobutton, "radio-button-group--border": border && hasRadiobutton, "checkbox-group": hasCheckbox, "checkbox-group--chip": chip && hasCheckbox, "checkbox-group--horizontal": horizontal && hasCheckbox, "checkbox-group--border": border && hasCheckbox };
  }, checkedChildren() {
    return this.children.filter((child) => child.checked);
  }, debouncedUpdateChildren() {
    return (0, import_logic.debounce)(this.updateCheckboxChildren.bind(this), 150);
  }, checkboxCheckedScreenReaderText() {
    return this.checkedChildren.length === 1 ? this.$t("fkui.checkbox-group.checkbox.checked", "Kryssruta kryssad") : this.$t("fkui.checkbox-group.checkbox.not.checked", "Kryssruta ej kryssad");
  }, numberOfCheckboxesScreenReaderText() {
    return this.$t("fkui.checkbox-group.count", "Grupp med {{ count }} kryssrutor", { count: String(this.children.length) });
  }, numberOfCheckedCheckboxesScreenText() {
    return this.$t("fkui.checkbox-group.checked", "{{ checked }} kryssad av {{ count }}", { checked: String(this.checkedChildren.length), count: String(this.children.length) });
  } }, async mounted() {
    await this.$nextTick();
    const types = Array.from(this.$el.querySelectorAll(`input[type="checkbox"], input[type="radio"]`), (it) => it.getAttribute("type"));
    this.hasCheckbox = types.includes("checkbox");
    this.hasRadiobutton = types.includes("radio");
    if (this.hasCheckbox) {
      this.updateCheckboxChildren();
    }
  }, updated() {
    if (this.hasCheckbox) {
      this.debouncedUpdateChildren();
    }
  }, methods: {
    async onValidity({ detail }) {
      var _renderSlotText2;
      if (detail.target !== this.$el) {
        return;
      }
      this.detail = detail;
      await this.$nextTick();
      const errorMessage = (_renderSlotText2 = renderSlotText(this.$slots.label)) !== null && _renderSlotText2 !== void 0 ? _renderSlotText2 : "";
      const firstFocusableElement = this.$el.querySelector("input:not(disabled), select:not(disabled), textarea:not(disabled)");
      const focusElementId = firstFocusableElement ? firstFocusableElement.id : this.id;
      this.validityElement = this.$el;
      this.dispatchObject = { ...detail, errorMessage, focusElementId };
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
      this.children = Array.from(this.$el.querySelectorAll('input[type="checkbox"]'));
    }
  } });
  var _hoisted_1$H = ["id"];
  var _hoisted_2$v = { key: 0, class: "sr-only" };
  var _hoisted_3$r = { key: 0, class: "label__message label__message--error" };
  var _hoisted_4$m = { key: 0, "data-test": "checked-boxes", class: "sr-only", "aria-live": "polite" };
  var _hoisted_5$k = { key: 0 };
  var _hoisted_6$g = { key: 1 };
  var _hoisted_7$d = { class: "sr-separator" };
  var _hoisted_8$9 = { class: "tooltip-before", "aria-hidden": "true" };
  var _hoisted_9$5 = { class: "label tooltip-before__label" };
  var _hoisted_10$5 = { key: 0, class: "label__message label__message--error" };
  function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("fieldset", { id: _ctx.id, class: (0, import_vue.normalizeClass)(["fieldset", _ctx.classes]), onValidity: _cache[0] || (_cache[0] = (...args) => _ctx.onValidity && _ctx.onValidity(...args)) }, [((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "legend",
      { key: _ctx.legendKey, class: (0, import_vue.normalizeClass)(["label", _ctx.legendClass]) },
      [(0, import_vue.renderSlot)(_ctx.$slots, "label"), (0, import_vue.createTextVNode)(), _ctx.hasCheckbox && _ctx.children.length > 1 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("span", _hoisted_2$v, [(0, import_vue.createElementVNode)(
        "span",
        null,
        (0, import_vue.toDisplayString)(_ctx.numberOfCheckboxesScreenReaderText),
        1
        /* TEXT */
      )])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "description", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ descriptionClass: _ctx.descriptionClass, discreteDescriptionClass: _ctx.discreteDescriptionClass }))), (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "error-message", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ hasError: _ctx.hasError, validationMessage: _ctx.validity.validationMessage })), () => [_ctx.hasError ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("span", _hoisted_3$r, [(0, import_vue.createVNode)(_component_f_icon, { class: "label__icon--left", name: "error" }), (0, import_vue.createTextVNode)(
        " " + (0, import_vue.toDisplayString)(_ctx.validity.validationMessage),
        1
        /* TEXT */
      )])) : (0, import_vue.createCommentVNode)("v-if", true)])],
      2
      /* CLASS */
    )), (0, import_vue.createTextVNode)(), _ctx.hasCheckbox ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("span", _hoisted_4$m, [_ctx.children.length === 1 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "span",
      _hoisted_5$k,
      (0, import_vue.toDisplayString)(_ctx.checkboxCheckedScreenReaderText),
      1
      /* TEXT */
    )) : ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "span",
      _hoisted_6$g,
      (0, import_vue.toDisplayString)(_ctx.numberOfCheckedCheckboxesScreenText),
      1
      /* TEXT */
    ))])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), _ctx.hasTooltipSlot ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      import_vue.Fragment,
      { key: 1 },
      [(0, import_vue.createElementVNode)("div", _hoisted_7$d, [(0, import_vue.createElementVNode)("div", _hoisted_8$9, [(0, import_vue.createElementVNode)("div", _hoisted_9$5, [(0, import_vue.renderSlot)(_ctx.$slots, "label")])]), (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "tooltip")]), (0, import_vue.createTextVNode)(), _ctx.hasDescriptionSlot || _ctx.hasErrorMessageSlot || _ctx.hasError ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
        "div",
        { key: 0, class: (0, import_vue.normalizeClass)(["label", _ctx.groupLabelClass]), "aria-hidden": "true" },
        [(0, import_vue.renderSlot)(_ctx.$slots, "description", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ descriptionClass: _ctx.descriptionClass, discreteDescriptionClass: _ctx.discreteDescriptionClass }))), (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "error-message", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ hasError: _ctx.hasError, validationMessage: _ctx.validity.validationMessage })), () => [_ctx.hasError ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("span", _hoisted_10$5, [(0, import_vue.createVNode)(_component_f_icon, { class: "label__icon--left", name: "error" }), (0, import_vue.createTextVNode)(
          " " + (0, import_vue.toDisplayString)(_ctx.validity.validationMessage),
          1
          /* TEXT */
        )])) : (0, import_vue.createCommentVNode)("v-if", true)])],
        2
        /* CLASS */
      )) : (0, import_vue.createCommentVNode)("v-if", true)],
      64
      /* STABLE_FRAGMENT */
    )) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
      "div",
      { class: (0, import_vue.normalizeClass)(_ctx.groupContentClass) },
      [(0, import_vue.renderSlot)(_ctx.$slots, "default")],
      2
      /* CLASS */
    )], 42, _hoisted_1$H);
  }
  var FFieldset = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["render", _sfc_render$M]]);
  var anyType$1 = [String, Object, Array, Number, Date, Boolean];
  var _sfc_main$V = (0, import_vue.defineComponent)({ name: "FCheckboxField", inheritAttrs: false, props: {
    /**
    * Set to `true`, empty string `""` or string `"disabled"` to disable this input field.
    */
    disabled: { type: Boolean, required: false, default: false },
    /**
    * The id for the input id attribute.
    * The id for the label for attribute.
    * If the prop is not set a random value will be generated.
    */
    id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() },
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
        checked = this.modelValue.findIndex((it) => (0, import_lodash.isEqual)((0, import_vue.toValue)(it), (0, import_vue.toValue)(this.value))) >= 0;
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
      newModel = [...this.modelValue].filter((it) => !(0, import_lodash.isEqual)((0, import_vue.toValue)(it), (0, import_vue.toValue)(this.value)));
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
  var _hoisted_1$G = ["id", "disabled"];
  var _hoisted_2$u = ["for"];
  var _hoisted_3$q = { key: 0, class: "checkbox__details" };
  var _hoisted_4$l = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "br",
    null,
    null,
    -1
    /* HOISTED */
  );
  var _hoisted_5$j = { key: 0, class: "checkbox__details" };
  var _hoisted_6$f = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "br",
    null,
    null,
    -1
    /* HOISTED */
  );
  function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "div",
      { class: (0, import_vue.normalizeClass)(["checkbox", _ctx.disabledClass]), onValidity: _cache[2] || (_cache[2] = (...args) => _ctx.onValidity && _ctx.onValidity(...args)) },
      [(0, import_vue.createElementVNode)("input", (0, import_vue.mergeProps)({ id: _ctx.id }, _ctx.attrs, { ref: "checkboxInput", type: "checkbox", class: "checkbox__input", disabled: _ctx.disabled, onKeydown: _cache[0] || (_cache[0] = (0, import_vue.withKeys)((...args) => _ctx.onKeydown && _ctx.onKeydown(...args), ["space"])), onChange: _cache[1] || (_cache[1] = ($event) => _ctx.updateExpandedFlag()) }), null, 16, _hoisted_1$G), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("label", { class: (0, import_vue.normalizeClass)(_ctx.$slots.details ? "checkbox__label checkbox__width" : "checkbox__label"), for: _ctx.id }, [(0, import_vue.renderSlot)(_ctx.$slots, "default"), (0, import_vue.createTextVNode)(), _ctx.$slots.details ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
        import_vue.Fragment,
        { key: 0 },
        [_ctx.showDetails === "always" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("span", _hoisted_3$q, [_hoisted_4$l, (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "details")])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), _ctx.showDetails === "when-selected" ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(import_vue.Transition, { key: 1, onEnter: _ctx.enter, onAfterEnter: _ctx.afterEnter, onLeave: _ctx.leave }, {
          default: (0, import_vue.withCtx)(() => [_ctx.expanded ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("span", _hoisted_5$j, [_hoisted_6$f, (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "details", { height: _ctx.height })])) : (0, import_vue.createCommentVNode)("v-if", true)]),
          _: 3
          /* FORWARDED */
        }, 8, ["onEnter", "onAfterEnter", "onLeave"])) : (0, import_vue.createCommentVNode)("v-if", true)],
        64
        /* STABLE_FRAGMENT */
      )) : (0, import_vue.createCommentVNode)("v-if", true)], 10, _hoisted_2$u)],
      34
      /* CLASS, NEED_HYDRATION */
    );
  }
  var FCheckboxField = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$L]]);
  var _sfc_main$U = (0, import_vue.defineComponent)({ name: "FCheckboxGroup", components: { FFieldset }, mixins: [TranslationMixin], inheritAttrs: false, props: {
    /**
    * The id for the fieldset id attribute.
    * If the prop is not set the id will be generated.
    */
    id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() },
    /**
    * The name of the checkbox group.
    */
    name: { type: String, required: true }
  } });
  function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_fieldset = (0, import_vue.resolveComponent)("f-fieldset");
    return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_f_fieldset, (0, import_vue.mergeProps)({ id: _ctx.id, name: _ctx.name }, _ctx.$attrs), (0, import_vue.createSlots)({
      label: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "label")]),
      description: (0, import_vue.withCtx)(({ descriptionClass, discreteDescriptionClass }) => [(0, import_vue.renderSlot)(_ctx.$slots, "description", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ descriptionClass, discreteDescriptionClass })))]),
      "error-message": (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "error-message")]),
      default: (0, import_vue.withCtx)(() => [(0, import_vue.createTextVNode)(), (0, import_vue.createTextVNode)(), (0, import_vue.createTextVNode)(), (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "default")]),
      _: 2
      /* DYNAMIC */
    }, [_ctx.$slots.tooltip ? { name: "tooltip", fn: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "tooltip")]), key: "0" } : void 0]), 1040, ["id", "name"]);
  }
  var FCheckboxGroup = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$K]]);
  var Operation = /* @__PURE__ */ ((Operation2) => {
    Operation2[Operation2["ADD"] = 0] = "ADD";
    Operation2[Operation2["DELETE"] = 1] = "DELETE";
    Operation2[Operation2["MODIFY"] = 2] = "MODIFY";
    Operation2[Operation2["NONE"] = 3] = "NONE";
    return Operation2;
  })(Operation || {});
  var _sfc_main$T = (0, import_vue.defineComponent)({ name: "FCrudDataset", components: { FFormModal, FConfirmModal, FIcon }, mixins: [TranslationMixin], provide() {
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
    addNewModalHeader: { type: String, required: false, default: import_logic.TranslationService.provider.translate("fkui.crud-dataset.modal.header.add", "L\xE4gg till rad") },
    /**
    * Property for changing the "modify" modal heading
    */
    modifyModalHeader: { type: String, required: false, default: import_logic.TranslationService.provider.translate("fkui.crud-dataset.modal.header.modify", "\xC4ndra rad") },
    /**
    * Property for changing the "delete" modal heading
    */
    deleteModalHeader: { type: String, required: false, default: import_logic.TranslationService.provider.translate("fkui.crud-dataset.modal.header.delete", "\xC4r du s\xE4ker p\xE5 att du vill ta bort raden?") }
  }, emits: ["change", "created", "deleted", "updated", "update:modelValue"], data() {
    return { result: [], Operation, operation: Operation.NONE, item: null, originalItemToUpdate: null, isFormModalOpen: false, isConfirmModalOpen: false, callbackAfterItemAdd() {
    }, callbackBeforeItemDelete() {
    } };
  }, computed: { confirmButtonText() {
    return this.operation === Operation.ADD ? this.$t("fkui.crud-dataset.modal.confirm.add", "L\xE4gg till") : this.$t("fkui.crud-dataset.modal.confirm.modify", "Spara");
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
  } }, watch: { modelValue: { immediate: true, deep: true, handler(data) {
    this.result = [...data];
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
    (0, import_logic.alertScreenReader)(this.$t("fkui.crud-dataset.aria-live.delete", "Raden har tagits bort"), { assertive: true });
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
      (0, import_logic.alertScreenReader)(this.$t("fkui.crud-dataset.aria-live.add", "En rad har lagts till"), { assertive: true });
    } else if (this.operation === Operation.MODIFY) {
      if (this.originalItemToUpdate) {
        Object.assign(this.originalItemToUpdate, this.item);
      } else {
        this.originalItemToUpdate = this.item;
      }
      this.$emit("updated", this.originalItemToUpdate);
      this.$emit("update:modelValue", this.result);
      this.$emit("change", this.result);
      (0, import_logic.alertScreenReader)(this.$t("fkui.crud-dataset.aria-live.modify", "Raden har \xE4ndrats"), { assertive: true });
    }
    this.isFormModalOpen = false;
  }, updateItem(item) {
    if (!this.hasModifySlot) {
      throw Error("No template is defined for #modify");
    }
    this.operation = Operation.MODIFY;
    this.originalItemToUpdate = item;
    this.item = (0, import_logic.deepClone)(item);
    this.isFormModalOpen = true;
  } } });
  var _hoisted_1$F = { class: "crud-dataset" };
  var _hoisted_2$t = { key: 0 };
  function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    const _component_f_form_modal = (0, import_vue.resolveComponent)("f-form-modal");
    const _component_f_confirm_modal = (0, import_vue.resolveComponent)("f-confirm-modal");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_1$F, [(0, import_vue.renderSlot)(_ctx.$slots, "default"), (0, import_vue.createTextVNode)(), _ctx.hasAddSlot ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_2$t, [(0, import_vue.createElementVNode)("button", { "data-test": "f-crud-dataset-add-button", type: "button", class: "button button--tertiary crud-dataset__add-button", onClick: _cache[0] || (_cache[0] = ($event) => _ctx.createItem()) }, [(0, import_vue.createVNode)(_component_f_icon, { class: "button__icon", name: "plus" }), (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "add-button", {}, () => [(0, import_vue.createTextVNode)(
      (0, import_vue.toDisplayString)(_ctx.$t("fkui.crud-dataset.button.add", "L\xE4gg till ny")),
      1
      /* TEXT */
    )])])])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_form_modal, { "is-open": _ctx.isFormModalOpen, "aria-close-text": _ctx.$t("fkui.crud-dataset.modal.close", "St\xE4ng"), "use-error-list": false, "before-submit": _ctx.beforeSubmit, "before-validation": _ctx.beforeValidation, "on-cancel": _ctx.onCancel, onClose: _ctx.onModalClose, onCancel: _ctx.onCancel, onSubmit: _ctx.onFormModalSubmit }, {
      header: (0, import_vue.withCtx)(() => [(0, import_vue.createTextVNode)(
        (0, import_vue.toDisplayString)(_ctx.formModalHeader),
        1
        /* TEXT */
      )]),
      "input-text-fields": (0, import_vue.withCtx)(() => [_ctx.operation === _ctx.Operation.ADD ? (0, import_vue.renderSlot)(_ctx.$slots, "add", (0, import_vue.normalizeProps)((0, import_vue.mergeProps)({ key: 0 }, { item: _ctx.item }))) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), _ctx.operation === _ctx.Operation.MODIFY ? (0, import_vue.renderSlot)(_ctx.$slots, "modify", (0, import_vue.normalizeProps)((0, import_vue.mergeProps)({ key: 1 }, { item: _ctx.item }))) : (0, import_vue.createCommentVNode)("v-if", true)]),
      "submit-button-text": (0, import_vue.withCtx)(() => [(0, import_vue.createTextVNode)(
        (0, import_vue.toDisplayString)(_ctx.confirmButtonText),
        1
        /* TEXT */
      )]),
      "cancel-button-text": (0, import_vue.withCtx)(() => [(0, import_vue.createTextVNode)(
        (0, import_vue.toDisplayString)(_ctx.cancelButtonText),
        1
        /* TEXT */
      )]),
      _: 3
      /* FORWARDED */
    }, 8, ["is-open", "aria-close-text", "before-submit", "before-validation", "on-cancel", "onClose", "onCancel", "onSubmit"]), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_confirm_modal, { "is-open": _ctx.isConfirmModalOpen, buttons: _ctx.confirmDeleteButtons, onConfirm: _ctx.onDeleteConfirm, onClose: _ctx.onDeleteClose }, {
      heading: (0, import_vue.withCtx)(() => [(0, import_vue.createTextVNode)(
        (0, import_vue.toDisplayString)(_ctx.deleteModalHeader),
        1
        /* TEXT */
      )]),
      content: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "delete", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ item: _ctx.item })))]),
      _: 3
      /* FORWARDED */
    }, 8, ["is-open", "buttons", "onConfirm", "onClose"])]);
  }
  var FCrudDataset = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$J]]);
  function FCrudDatasetInjected() {
    return { delete: (0, import_vue.inject)("delete"), modify: (0, import_vue.inject)("modify") };
  }
  var _sfc_main$S = (0, import_vue.defineComponent)({ name: "FCrudButton", components: { FIcon }, mixins: [TranslationMixin], props: { action: { type: String, required: true, validator(value) {
    return ["delete", "modify"].includes(value);
  } }, icon: { type: Boolean, default: false }, item: { type: Object, required: true }, label: { type: Boolean, default: false } }, setup() {
    return FCrudDatasetInjected();
  }, computed: { iconName() {
    if (this.action === "delete") {
      return "trashcan";
    } else {
      return "pen";
    }
  }, buttonText() {
    if (this.action === "delete") {
      return this.$t("fkui.crud-button.delete", "Ta bort");
    } else {
      return this.$t("fkui.crud-button.modify", "\xC4ndra");
    }
  } }, methods: { executeAction() {
    if (this.action === "delete") {
      this.delete(this.item);
    } else {
      this.modify(this.item);
    }
  } } });
  var _hoisted_1$E = { key: 1, class: "sr-only" };
  function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("button", { type: "button", class: "button button--small button--tertiary", onClick: _cache[0] || (_cache[0] = (...args) => _ctx.executeAction && _ctx.executeAction(...args)) }, [_ctx.icon ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_f_icon, { key: 0, class: "button__icon", name: _ctx.iconName }, null, 8, ["name"])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), !_ctx.label ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("span", _hoisted_1$E, [(0, import_vue.renderSlot)(_ctx.$slots, "default", {}, () => [(0, import_vue.createTextVNode)(
      (0, import_vue.toDisplayString)(_ctx.buttonText),
      1
      /* TEXT */
    )])])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), _ctx.label ? (0, import_vue.renderSlot)(_ctx.$slots, "default", { key: 2 }, () => [(0, import_vue.createTextVNode)(
      (0, import_vue.toDisplayString)(_ctx.buttonText),
      1
      /* TEXT */
    )]) : (0, import_vue.createCommentVNode)("v-if", true)]);
  }
  var FCrudButton = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$I]]);
  function ActivateItemInjected() {
    return { registerCallbackAfterItemAdd: (0, import_vue.inject)("registerCallbackAfterItemAdd", () => void 0), registerCallbackBeforeItemDelete: (0, import_vue.inject)("registerCallbackBeforeItemDelete", () => void 0) };
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
  function setVisibilityColumn(src, id, visible) {
    const column = src.find((col) => col.name === id);
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
    return { addColumn: (0, import_vue.inject)("addColumn"), setVisibilityColumn: (0, import_vue.inject)("setVisibilityColumn"), textFieldTableMode: true, renderColumns: (0, import_vue.inject)("renderColumns", false) };
  }
  var _sfc_main$R = (0, import_vue.defineComponent)({ name: "FTableColumn", inheritAttrs: false, props: {
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
    this.addColumn({ name: this.name, title: this.title, description: this.description || void 0, id: import_logic.ElementIdService.generateElementId("column"), size, type: this.type, visible: this.visible, sortable: false, sort: FTableColumnSort.UNSORTED });
  } });
  var _hoisted_1$D = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "span",
    { class: "sr-only" },
    "\xA0",
    -1
    /* HOISTED */
  );
  function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.renderColumns && _ctx.visible ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)((0, import_vue.resolveDynamicComponent)(_ctx.tagName), (0, import_vue.mergeProps)({ key: 0, class: _ctx.classes, scope: _ctx.scope }, _ctx.$attrs), {
      default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "default"), (0, import_vue.createTextVNode)(), _hoisted_1$D]),
      _: 3
      /* FORWARDED */
    }, 16, ["class", "scope"])) : (0, import_vue.createCommentVNode)("v-if", true);
  }
  var FTableColumn = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$H]]);
  function FSortFilterDatasetInjected() {
    return { sort: (0, import_vue.inject)("sort", () => void 0), registerCallbackOnSort: (0, import_vue.inject)("registerCallbackOnSort", () => void 0), registerCallbackOnMount: (0, import_vue.inject)("registerCallbackOnMount", () => void 0) };
  }
  var _sfc_main$Q = (0, import_vue.defineComponent)({ name: "FLabel", components: { FIcon }, props: {
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
  var _hoisted_1$C = { key: 0 };
  var _hoisted_2$s = { key: 0, class: "tooltip-before" };
  var _hoisted_3$p = ["for"];
  var _hoisted_4$k = ["for"];
  var _hoisted_5$i = { key: 0, class: "label__message label__message--error" };
  var _hoisted_6$e = ["for"];
  var _hoisted_7$c = { key: 0, class: "label__message label__message--error" };
  function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    return _ctx.$slots.tooltip ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_1$C, [_ctx.hasDefaultSlot ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_2$s, [(0, import_vue.createElementVNode)("label", { class: "label tooltip-before__label", for: _ctx.forProperty }, [(0, import_vue.renderSlot)(_ctx.$slots, "default")], 8, _hoisted_3$p)])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "tooltip"), (0, import_vue.createTextVNode)(), _ctx.hasDescriptionSlot || _ctx.hasErrorMessageSlot ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("label", { key: 1, class: "label sr-separator", for: _ctx.forProperty }, [(0, import_vue.renderSlot)(_ctx.$slots, "description", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ descriptionClass: _ctx.descriptionClass, discreteDescriptionClass: _ctx.discreteDescriptionClass }))), (0, import_vue.createTextVNode)(), _ctx.hasErrorMessageSlot ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("span", _hoisted_5$i, [(0, import_vue.createVNode)(_component_f_icon, { class: "label__icon--left", name: "error" }), (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "error-message")])) : (0, import_vue.createCommentVNode)("v-if", true)], 8, _hoisted_4$k)) : (0, import_vue.createCommentVNode)("v-if", true)])) : ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("label", { key: 1, class: "label", for: _ctx.forProperty }, [(0, import_vue.renderSlot)(_ctx.$slots, "default"), (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "description", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ descriptionClass: _ctx.descriptionClass, discreteDescriptionClass: _ctx.discreteDescriptionClass }))), (0, import_vue.createTextVNode)(), _ctx.hasErrorMessageSlot ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("span", _hoisted_7$c, [(0, import_vue.createVNode)(_component_f_icon, { class: "label__icon--left", name: "error" }), (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "error-message")])) : (0, import_vue.createCommentVNode)("v-if", true)], 8, _hoisted_6$e));
  }
  var FLabel = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["render", _sfc_render$G]]);
  function resolveWidthClass$1(words, inline) {
    return inline ? void 0 : words.split(" ").map((word) => `i-width-${word}`).join(" ");
  }
  var _sfc_main$P = (0, import_vue.defineComponent)({ name: "FSelectField", components: { FIcon, FLabel }, inheritAttrs: false, props: {
    /**
    * The id for the select id attribute.
    * The id for the label for attribute.
    * If the prop is not set a random value will be generated.
    */
    id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() },
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
    return { textFieldTableMode: (0, import_vue.inject)("textFieldTableMode", false) };
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
  var _hoisted_1$B = ["id"];
  function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_label = (0, import_vue.resolveComponent)("f-label");
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "div",
      { class: (0, import_vue.normalizeClass)(["select-field", _ctx.rootClass]), onValidity: _cache[1] || (_cache[1] = (...args) => _ctx.onValidity && _ctx.onValidity(...args)) },
      [(0, import_vue.createElementVNode)(
        "div",
        { class: (0, import_vue.normalizeClass)(_ctx.labelWrapperClass) },
        [(0, import_vue.createVNode)(_component_f_label, { for: _ctx.id, class: (0, import_vue.normalizeClass)(_ctx.labelClass) }, (0, import_vue.createSlots)({
          default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "label")]),
          description: (0, import_vue.withCtx)(({ descriptionClass, discreteDescriptionClass }) => [(0, import_vue.renderSlot)(_ctx.$slots, "description", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ descriptionClass, discreteDescriptionClass })))]),
          "error-message": (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "error-message", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ hasError: _ctx.hasError, validationMessage: _ctx.validationMessage })), () => [_ctx.hasError ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
            import_vue.Fragment,
            { key: 0 },
            [(0, import_vue.createTextVNode)(
              (0, import_vue.toDisplayString)(_ctx.validationMessage),
              1
              /* TEXT */
            )],
            64
            /* STABLE_FRAGMENT */
          )) : (0, import_vue.createCommentVNode)("v-if", true)])]),
          _: 2
          /* DYNAMIC */
        }, [_ctx.$slots.tooltip ? { name: "tooltip", fn: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "tooltip")]), key: "0" } : void 0]), 1032, ["for", "class"])],
        2
        /* CLASS */
      ), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
        "div",
        { class: (0, import_vue.normalizeClass)(["select-field__icon-wrapper", _ctx.selectWrapperClass]) },
        [(0, import_vue.withDirectives)((0, import_vue.createElementVNode)("select", (0, import_vue.mergeProps)({ id: _ctx.id, "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.vModel = $event), class: "select-field__select" }, _ctx.attrs), [(0, import_vue.renderSlot)(_ctx.$slots, "default")], 16, _hoisted_1$B), [[import_vue.vModelSelect, _ctx.vModel]]), (0, import_vue.createTextVNode)(), _ctx.hasError && _ctx.textFieldTableMode ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(
          _component_f_icon,
          { key: 0, ref: "icon", class: "text-field__icon input-icon select-field__error-popup-icon", name: "error" },
          null,
          512
          /* NEED_PATCH */
        )) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_icon, { class: "select-field__icon", name: "arrow-down" })],
        2
        /* CLASS */
      )],
      34
      /* CLASS, NEED_HYDRATION */
    );
  }
  var FSelectField = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$F]]);
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
  var POPUP_SPACING = 10;
  var _sfc_main$O = (0, import_vue.defineComponent)({ name: "IPopupError", components: { FIcon }, inheritAttrs: false, props: {
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
  }, async toggleIsOpen(isOpen) {
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
    const result = fitInsideArea({ area, anchor: this.anchor, target: wrapper, viewport, spacing: POPUP_SPACING, candidateOrder: CandidateOrder.IPopupError });
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
  } } });
  var _hoisted_1$A = { ref: "wrapper", class: "popup-error__wrapper" };
  function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    return _ctx.isOpen ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(import_vue.Teleport, { key: 0, to: "body", disabled: _ctx.teleportDisabled }, [(0, import_vue.createElementVNode)(
      "div",
      { ref: "popup", class: (0, import_vue.normalizeClass)(_ctx.popupClasses), "aria-hidden": "true" },
      [(0, import_vue.createElementVNode)(
        "div",
        _hoisted_1$A,
        [(0, import_vue.createElementVNode)(
          "div",
          { class: (0, import_vue.normalizeClass)(_ctx.arrowClass), style: (0, import_vue.normalizeStyle)(_ctx.errorStyle) },
          [(0, import_vue.createElementVNode)(
            "span",
            null,
            (0, import_vue.toDisplayString)(_ctx.errorMessage),
            1
            /* TEXT */
          ), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("button", { tabindex: "-1", type: "button", class: "button button--discrete button--discrete--black modal__close-button popup-error__button", "aria-label": "St\xE4ng", onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClose && _ctx.onClose(...args)) }, [(0, import_vue.createVNode)(_component_f_icon, { name: "close", class: "button__icon" })])],
          6
          /* CLASS, STYLE */
        )],
        512
        /* NEED_PATCH */
      )],
      2
      /* CLASS */
    )], 8, ["disabled"])) : (0, import_vue.createCommentVNode)("v-if", true);
  }
  var IPopupError = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$E]]);
  function resolveWidthClass(words, inline) {
    return inline ? void 0 : words.split(" ").map((word) => `i-width-${word}`).join(" ");
  }
  var _sfc_main$N = (0, import_vue.defineComponent)({ name: "FTextField", components: { FLabel, FIcon, IPopupError }, inheritAttrs: false, props: {
    /**
    * The id for the input id attribute.
    * The id for the label for attribute.
    * If the prop is not set a random value will be generated.
    */
    id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() },
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
    return { textFieldTableMode: (0, import_vue.inject)("textFieldTableMode", false) };
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
    } else if ((0, import_logic.isSet)(this.parser)) {
      var _this$parser;
      return (_this$parser = this.parser(trimmedViewValue)) !== null && _this$parser !== void 0 ? _this$parser : trimmedViewValue;
    } else if ((0, import_logic.isSet)(this.formatter)) {
      var _this$formatter;
      return (_this$formatter = this.formatter(trimmedViewValue)) !== null && _this$formatter !== void 0 ? _this$formatter : trimmedViewValue;
    } else {
      return trimmedViewValue;
    }
  }, syncViewValueAfterModelUpdate(newModelValue) {
    if (newModelValue === "") {
      this.viewValue = "";
    } else if ((0, import_logic.isSet)(this.parser)) {
      if ((0, import_logic.isSet)(this.formatter)) {
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
    if (!(0, import_logic.isSet)(this.formatter)) {
      this.viewValue = String(this.modelValue);
      return;
    }
    const parsedValue = (0, import_logic.isSet)(this.parser) && typeof this.modelValue === "string" ? this.parser(this.modelValue) : this.modelValue;
    const formattedValue = (0, import_logic.isSet)(parsedValue) ? this.formatter(parsedValue) : void 0;
    this.viewValue = (0, import_logic.isSet)(formattedValue) ? formattedValue : String(this.modelValue);
  } } });
  var _hoisted_1$z = { key: 0 };
  var _hoisted_2$r = { key: 0, class: "sr-only" };
  var _hoisted_3$o = { key: 0, class: "sr-only" };
  var _hoisted_4$j = { class: "text-field__icon-wrapper" };
  var _hoisted_5$h = ["id", "type"];
  var _hoisted_6$d = { key: 2, class: "text-field__append-inner" };
  function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_label = (0, import_vue.resolveComponent)("f-label");
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    const _component_i_popup_error = (0, import_vue.resolveComponent)("i-popup-error");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "div",
      { class: (0, import_vue.normalizeClass)(["text-field", _ctx.rootClass]) },
      [(0, import_vue.createElementVNode)(
        "div",
        { class: (0, import_vue.normalizeClass)(_ctx.labelWrapperClass) },
        [(0, import_vue.createVNode)(_component_f_label, { for: _ctx.id, class: (0, import_vue.normalizeClass)(_ctx.labelClass) }, (0, import_vue.createSlots)({
          default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "default", {}, () => [_ctx.defaultText !== "" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
            "span",
            _hoisted_1$z,
            (0, import_vue.toDisplayString)(_ctx.defaultText),
            1
            /* TEXT */
          )) : (0, import_vue.createCommentVNode)("v-if", true)])]),
          description: (0, import_vue.withCtx)(({ descriptionClass, discreteDescriptionClass }) => [(0, import_vue.renderSlot)(_ctx.$slots, "description", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ descriptionClass, discreteDescriptionClass })), () => [_ctx.descriptionText ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
            "span",
            { key: 0, class: (0, import_vue.normalizeClass)(descriptionClass) },
            [_ctx.descriptionScreenReaderText ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
              "span",
              _hoisted_2$r,
              (0, import_vue.toDisplayString)(_ctx.descriptionScreenReaderText),
              1
              /* TEXT */
            )) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
              "span",
              null,
              (0, import_vue.toDisplayString)(_ctx.descriptionText),
              1
              /* TEXT */
            )],
            2
            /* CLASS */
          )) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), _ctx.discreteDescriptionText ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
            "span",
            { key: 1, class: (0, import_vue.normalizeClass)(discreteDescriptionClass) },
            [_ctx.discreteDescriptionScreenReaderText ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
              "span",
              _hoisted_3$o,
              (0, import_vue.toDisplayString)(_ctx.discreteDescriptionScreenReaderText),
              1
              /* TEXT */
            )) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
              "span",
              null,
              (0, import_vue.toDisplayString)(_ctx.discreteDescriptionText),
              1
              /* TEXT */
            )],
            2
            /* CLASS */
          )) : (0, import_vue.createCommentVNode)("v-if", true)])]),
          "error-message": (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "error-message", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ hasError: _ctx.hasError, validationMessage: _ctx.validationMessage })), () => [_ctx.hasError ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
            import_vue.Fragment,
            { key: 0 },
            [(0, import_vue.createTextVNode)(
              (0, import_vue.toDisplayString)(_ctx.validationMessage),
              1
              /* TEXT */
            )],
            64
            /* STABLE_FRAGMENT */
          )) : (0, import_vue.createCommentVNode)("v-if", true)])]),
          _: 2
          /* DYNAMIC */
        }, [_ctx.$slots.tooltip ? { name: "tooltip", fn: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "tooltip")]), key: "0" } : void 0]), 1032, ["for", "class"])],
        2
        /* CLASS */
      ), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
        "div",
        { class: (0, import_vue.normalizeClass)(["text-field__input-wrapper", _ctx.inputWrapperClass]) },
        [(0, import_vue.renderSlot)(_ctx.$slots, "input-left"), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("div", _hoisted_4$j, [(0, import_vue.withDirectives)((0, import_vue.createElementVNode)("input", (0, import_vue.mergeProps)({ id: _ctx.id, ref: "input", "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.viewValue = $event), type: _ctx.type, class: "text-field__input" }, _ctx.$attrs, { onBlur: _cache[1] || (_cache[1] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)), onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.onFocus && _ctx.onFocus(...args)), onChange: _cache[3] || (_cache[3] = (...args) => _ctx.onChange && _ctx.onChange(...args)), onValidity: _cache[4] || (_cache[4] = (...args) => _ctx.onValidity && _ctx.onValidity(...args)), onPendingValidity: _cache[5] || (_cache[5] = (...args) => _ctx.onPendingValidity && _ctx.onPendingValidity(...args)) }), null, 16, _hoisted_5$h), [[import_vue.vModelDynamic, _ctx.viewValue]]), (0, import_vue.createTextVNode)(), _ctx.hasError && _ctx.textFieldTableMode ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(
          _component_f_icon,
          { key: 0, ref: "icon", class: "text-field__icon input-icon text-field__append-inner text-field__error-popup-icon", name: "error" },
          null,
          512
          /* NEED_PATCH */
        )) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), _ctx.textFieldTableMode ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_i_popup_error, { key: 1, anchor: _ctx.getErrorPopupAnchor(), "is-open": _ctx.showPopupError, "error-message": _ctx.validationMessage, onClose: _ctx.closePopupError }, null, 8, ["anchor", "is-open", "error-message", "onClose"])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), _ctx.$slots["append-inner"] ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_6$d, [(0, import_vue.renderSlot)(_ctx.$slots, "append-inner")])) : (0, import_vue.createCommentVNode)("v-if", true)]), (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "input-right")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    );
  }
  var FTextField = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$D]]);
  var _sfc_main$M = (0, import_vue.defineComponent)({ name: "FEmailTextField", components: { FTextField }, mixins: [TranslationMixin], inheritAttrs: false, props: {
    /**
    * The id for the input id attribute.
    * The id for the label for attribute.
    * If the prop is not set a random value will be generated.
    */
    id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() },
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
    pasteErrorText: { type: String, required: false, default: import_logic.TranslationService.provider.translate("fkui.email-text-field.error.pasting", "Du kan inte kopiera mejladressen. Du m\xE5ste skriva in den igen.") }
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
    import_logic.ValidationService.addValidatorsToElement(elements[0], validatorEmailConfig, true);
    if (this.extendedValidation) {
      this.configureExtendedValidation(elements);
    }
  }, configureExtendedValidation(elements) {
    const validatorEmailMatchesConfig = { required: { enabled: elements[0].hasAttribute("required") }, email: {}, matches: { id: elements[0].id } };
    import_logic.ValidationService.addValidatorsToElement(elements[1], validatorEmailMatchesConfig, true);
  } } });
  var _hoisted_1$y = { key: 0 };
  function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_text_field = (0, import_vue.resolveComponent)("f-text-field");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", null, [(0, import_vue.createVNode)(_component_f_text_field, (0, import_vue.mergeProps)({ id: _ctx.id, type: "email", maxlength: _ctx.maxLength }, _ctx.$attrs, { "model-value": _ctx.modelValue, onChange: _ctx.onChange, onBlur: _ctx.onBlur, onUpdate: _ctx.onUpdate, onValidity: _ctx.onValidity, onPendingValidity: _ctx.onPendingValidity }), {
      "error-message": (0, import_vue.withCtx)(() => [_ctx.showPasteErrorMessage ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
        "span",
        _hoisted_1$y,
        (0, import_vue.toDisplayString)(_ctx.pasteErrorText),
        1
        /* TEXT */
      )) : (0, import_vue.createCommentVNode)("v-if", true)]),
      default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "default", {}, () => [(0, import_vue.createTextVNode)(
        (0, import_vue.toDisplayString)(_ctx.defaultText),
        1
        /* TEXT */
      )]), (0, import_vue.createTextVNode)()]),
      _: 3
      /* FORWARDED */
    }, 16, ["id", "maxlength", "model-value", "onChange", "onBlur", "onUpdate", "onValidity", "onPendingValidity"]), (0, import_vue.createTextVNode)(), _ctx.extendedValidation ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_f_text_field, { key: 0, modelValue: _ctx.secondEmail, "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.secondEmail = $event), type: "email", maxlength: _ctx.maxLength, onPaste: _ctx.onPaste, onBlur: _cache[1] || (_cache[1] = ($event) => _ctx.showPasteErrorMessage = false) }, {
      default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "extended-label", {}, () => [(0, import_vue.createTextVNode)(
        (0, import_vue.toDisplayString)(_ctx.$t("fkui.email-text-field.label.repeat", "Upprepa mejladress")),
        1
        /* TEXT */
      )])]),
      _: 3
      /* FORWARDED */
    }, 8, ["modelValue", "maxlength", "onPaste"])) : (0, import_vue.createCommentVNode)("v-if", true)]);
  }
  var FEmailTextField = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$C]]);
  var _sfc_main$L = (0, import_vue.defineComponent)({ name: "FPhoneTextField", components: { FTextField }, mixins: [TranslationMixin], inheritAttrs: false, props: {
    /**
    * The id for the input id attribute.
    * The id for the label for attribute.
    * If the prop is not set a random value will be generated.
    */
    id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() },
    /**
    * The value for the input.
    * If the prop is not set undefined will be used.
    * @model
    */
    modelValue: { type: String, required: false, default: void 0 },
    maxLength: { type: Number, default: 80 },
    extendedValidation: { type: Boolean, default: false }
  }, emits: ["blur", "change", "update", "update:modelValue"], data() {
    return { validityMode: "INITIAL", secondPhone: "", defaultText: this.$t("fkui.phone-text-field.label", "Telefonnummer") };
  }, mounted() {
    this.configureValidators();
  }, methods: { onChange(event) {
    this.$emit("change", event);
  }, onBlur(event) {
    this.$emit("blur", event);
  }, onUpdate(event) {
    this.$emit("update:modelValue", event);
    this.$emit("update", event);
  }, onValidity({ detail }) {
    var _renderSlotText6;
    this.validityMode = detail.validityMode;
    const errorMessage = (_renderSlotText6 = renderSlotText(this.$slots.default)) !== null && _renderSlotText6 !== void 0 ? _renderSlotText6 : this.defaultText;
    const element = this.$el.querySelector(`#${detail.elementId}`);
    if (element) {
      dispatchComponentValidityEvent(element, { ...detail, errorMessage, focusElementId: detail.elementId });
    }
  }, onPendingValidity() {
    this.validityMode = "INITIAL";
  }, configureValidators() {
    const elements = Array.from(this.$el.querySelectorAll("input"));
    const validatorPhoneConfig = { phoneNumber: {} };
    import_logic.ValidationService.addValidatorsToElement(elements[0], validatorPhoneConfig, true);
    if (this.extendedValidation) {
      this.configureExtendedValidation(elements);
    }
  }, configureExtendedValidation(elements) {
    const validatorPhoneMatchesConfig = { required: { enabled: elements[0].hasAttribute("required") }, phoneNumber: {}, matches: { id: elements[0].id } };
    import_logic.ValidationService.addValidatorsToElement(elements[1], validatorPhoneMatchesConfig, true);
  } } });
  function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_text_field = (0, import_vue.resolveComponent)("f-text-field");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", null, [(0, import_vue.createVNode)(_component_f_text_field, (0, import_vue.mergeProps)({ id: _ctx.id, type: "tel", maxlength: _ctx.maxLength }, _ctx.$attrs, { "model-value": _ctx.modelValue, onChange: _ctx.onChange, onBlur: _ctx.onBlur, onUpdate: _ctx.onUpdate, onValidity: _ctx.onValidity, onPendingValidity: _ctx.onPendingValidity }), {
      default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "default", {}, () => [(0, import_vue.createTextVNode)(
        (0, import_vue.toDisplayString)(_ctx.defaultText),
        1
        /* TEXT */
      )])]),
      _: 3
      /* FORWARDED */
    }, 16, ["id", "maxlength", "model-value", "onChange", "onBlur", "onUpdate", "onValidity", "onPendingValidity"]), (0, import_vue.createTextVNode)(), _ctx.extendedValidation ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_f_text_field, { key: 0, modelValue: _ctx.secondPhone, "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.secondPhone = $event), type: "tel", maxlength: _ctx.maxLength }, {
      default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "extendedLabel", {}, () => [(0, import_vue.createTextVNode)(
        (0, import_vue.toDisplayString)(_ctx.$t("fkui.phone-text-field.label.repeat", "Upprepa telefonnumret")),
        1
        /* TEXT */
      )])]),
      _: 3
      /* FORWARDED */
    }, 8, ["modelValue", "maxlength"])) : (0, import_vue.createCommentVNode)("v-if", true)]);
  }
  var FPhoneTextField = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$B]]);
  var _sfc_main$K = (0, import_vue.defineComponent)({ name: "FCurrencyTextField", extends: FTextField, mixins: [TranslationMixin], props: { formatter: { type: Function, required: false, default: import_logic.formatNumber }, parser: { type: Function, required: false, default: import_logic.parseNumber } }, setup() {
    return { textFieldTableMode: (0, import_vue.inject)("textFieldTableMode", false) };
  }, data() {
    return { defaultText: this.$t("fkui.currency-text-field.label", "Pengar") };
  }, mounted() {
    const inputElement = getInputElement(this);
    inputElement.setAttribute("inputmode", "numeric");
    inputElement.setAttribute("maxlength", "20");
    import_logic.ValidationService.addValidatorsToElement(inputElement, { currency: {}, integer: {} }, true);
    import_logic.ValidationService.validateElement(inputElement);
  } });
  var _sfc_main$J = (0, import_vue.defineComponent)({ name: "FSearchTextField", components: { FTextField, FIcon }, props: { id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() }, modelValue: { type: String, required: false, default: "" }, clearableScreenReaderText: { type: String, required: false, default: import_logic.TranslationService.provider.translate("fkui.search-text-field.search-screen-reader", "T\xF6m inmatningsf\xE4lt") }, maxLength: { type: Number, default: 80 } }, emits: ["blur", "change", "update", "update:modelValue"], data() {
    return { defaultText: this.$t("fkui.search-text-field.label", "S\xF6k") };
  }, computed: { canClear() {
    return this.modelValue !== "";
  } }, methods: { clear() {
    (0, import_logic.alertScreenReader)(this.$t("fkui.search-text-field.aria-live.clear", "Inmatningsf\xE4ltet har t\xF6mts"), { assertive: true });
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
  var _hoisted_1$x = { class: "sr-only" };
  function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    const _component_f_text_field = (0, import_vue.resolveComponent)("f-text-field");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", null, [(0, import_vue.createVNode)(_component_f_text_field, (0, import_vue.mergeProps)({ id: _ctx.id, maxlength: _ctx.maxLength, "model-value": _ctx.modelValue }, _ctx.$attrs, { type: "search", class: "text-field--search", onChange: _ctx.onChange, onInput: _ctx.onInput, onBlur: _ctx.onBlur, onUpdate: _ctx.onUpdate }), (0, import_vue.createSlots)({
      "input-right": (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "input-right")]),
      "input-left": (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "input-left")]),
      "error-message": (0, import_vue.withCtx)(({ hasError, validationMessage }) => [(0, import_vue.renderSlot)(_ctx.$slots, "error-message", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ hasError, validationMessage })))]),
      description: (0, import_vue.withCtx)(({ descriptionClass, discreteDescriptionClass }) => [(0, import_vue.renderSlot)(_ctx.$slots, "description", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ descriptionClass, discreteDescriptionClass })))]),
      default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "default", {}, () => [(0, import_vue.createTextVNode)(
        (0, import_vue.toDisplayString)(_ctx.defaultText),
        1
        /* TEXT */
      )]), (0, import_vue.createTextVNode)(), (0, import_vue.createTextVNode)(), (0, import_vue.createTextVNode)(), (0, import_vue.createTextVNode)(), (0, import_vue.createTextVNode)(), (0, import_vue.createTextVNode)()]),
      _: 2
      /* DYNAMIC */
    }, [_ctx.$slots.tooltip ? { name: "tooltip", fn: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "tooltip")]), key: "0" } : void 0, _ctx.canClear ? { name: "append-inner", fn: (0, import_vue.withCtx)(() => [(0, import_vue.createElementVNode)("button", { class: "text-field__icon clear-button", type: "button", onClick: _cache[0] || (_cache[0] = (0, import_vue.withModifiers)((...args) => _ctx.clear && _ctx.clear(...args), ["self"])) }, [(0, import_vue.createVNode)(_component_f_icon, { name: "cross", class: "clear-button__icon" }), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
      "span",
      _hoisted_1$x,
      (0, import_vue.toDisplayString)(_ctx.clearableScreenReaderText),
      1
      /* TEXT */
    )])]), key: "1" } : void 0]), 1040, ["id", "maxlength", "model-value", "onChange", "onInput", "onBlur", "onUpdate"])]);
  }
  var FSearchTextField = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$A]]);
  var _sfc_main$I = (0, import_vue.defineComponent)({ name: "FBankAccountNumberTextField", extends: FTextField, mixins: [TranslationMixin], props: { parser: { type: Function, required: false, default: import_logic.parseBankAccountNumber } }, setup() {
    return { textFieldTableMode: (0, import_vue.inject)("textFieldTableMode", false) };
  }, data() {
    return { defaultText: this.$t("fkui.bank-account-number-text-field.label", "Kontonummer") };
  }, mounted() {
    const inputElement = getInputElement(this);
    import_logic.ValidationService.addValidatorsToElement(inputElement, { bankAccountNumber: {} }, true);
    inputElement.setAttribute("inputmode", "numeric");
    inputElement.setAttribute("maxlength", "40");
    import_logic.ValidationService.validateElement(inputElement);
  } });
  var _sfc_main$H = (0, import_vue.defineComponent)({ name: "FBankgiroTextField", extends: FTextField, mixins: [TranslationMixin], props: { formatter: { type: Function, required: false, default: import_logic.parseBankgiro } }, setup() {
    return { textFieldTableMode: (0, import_vue.inject)("textFieldTableMode", false) };
  }, data() {
    return { defaultText: this.$t("fkui.bankgiro-text-field.label", "Bankgironummer") };
  }, mounted() {
    const inputElement = getInputElement(this);
    import_logic.ValidationService.addValidatorsToElement(inputElement, { maxLength: { length: 9 }, bankgiro: {} }, true);
    inputElement.setAttribute("inputmode", "numeric");
    inputElement.setAttribute("maxlength", "40");
    import_logic.ValidationService.validateElement(inputElement);
  } });
  var _sfc_main$G = (0, import_vue.defineComponent)({ name: "FClearingnumberTextField", extends: FTextField, mixins: [TranslationMixin], props: { formatter: { type: Function, required: false, default: import_logic.parseClearingNumber } }, setup() {
    return { textFieldTableMode: (0, import_vue.inject)("textFieldTableMode", false) };
  }, data() {
    return { defaultText: this.$t("fkui.clearingnumber-text-field.label", "Clearingnummer") };
  }, mounted() {
    const inputElement = getInputElement(this);
    import_logic.ValidationService.addValidatorsToElement(inputElement, { clearingNumber: {} }, true);
    inputElement.setAttribute("inputmode", "numeric");
    inputElement.setAttribute("maxlength", "16");
    import_logic.ValidationService.validateElement(inputElement);
  } });
  function defaultFormatter$1(modelValue) {
    return (0, import_logic.formatNumber)(modelValue, this.decimals);
  }
  var _sfc_main$F = (0, import_vue.defineComponent)({ name: "FNumericTextField", extends: FTextField, props: {
    /**
    * The number of decimals to format number as.
    * @model
    */
    decimals: { type: Number, required: false, default: void 0 },
    formatter: { type: Function, required: false, default: defaultFormatter$1 },
    parser: { type: Function, required: false, default: import_logic.parseNumber }
  }, setup() {
    return { textFieldTableMode: (0, import_vue.inject)("textFieldTableMode", false) };
  }, mounted() {
    const inputElement = getInputElement(this);
    inputElement.setAttribute("inputmode", "numeric");
    inputElement.setAttribute("maxlength", "20");
    import_logic.ValidationService.addValidatorsToElement(inputElement, { number: {} }, true);
    import_logic.ValidationService.validateElement(inputElement);
  } });
  var _sfc_main$E = (0, import_vue.defineComponent)({ name: "FPersonnummerTextField", extends: FTextField, mixins: [TranslationMixin], props: { formatter: { type: Function, required: false, default: import_logic.formatPersonnummer }, parser: { type: Function, required: false, default: import_logic.parsePersonnummer } }, setup() {
    return { textFieldTableMode: (0, import_vue.inject)("textFieldTableMode", false) };
  }, data() {
    return { defaultText: this.$t("fkui.personnummer-text-field.label-10-digits", "Personnummer"), discreteDescriptionText: this.$t("fkui.personnummer-text-field.example-10-digits", "(\xE5\xE5mmdd-nnnn)"), discreteDescriptionScreenReaderText: this.$t("fkui.personnummer-text-field.format-description-10-digits", "Skriv personnumret med 10 siffror,") };
  }, mounted() {
    const inputElement = getInputElement(this);
    import_logic.ValidationService.addValidatorsToElement(inputElement, { maxLength: { length: 20 }, personnummerFormat: {}, personnummerLuhn: {} }, true);
    inputElement.setAttribute("inputmode", "numeric");
    inputElement.setAttribute("maxlength", "23");
    import_logic.ValidationService.validateElement(inputElement);
  } });
  var _sfc_main$D = (0, import_vue.defineComponent)({ name: "FPlusgiroTextField", extends: FTextField, mixins: [TranslationMixin], props: { formatter: { type: Function, required: false, default: import_logic.parsePlusgiro } }, setup() {
    return { textFieldTableMode: (0, import_vue.inject)("textFieldTableMode", false) };
  }, data() {
    return { defaultText: this.$t("fkui.plusgiro-text-field.label", "Plusgironummer") };
  }, mounted() {
    const inputElement = getInputElement(this);
    import_logic.ValidationService.addValidatorsToElement(inputElement, { maxLength: { length: 11 }, plusgiro: {} }, true);
    inputElement.setAttribute("inputmode", "numeric");
    inputElement.setAttribute("maxlength", "16");
    import_logic.ValidationService.validateElement(inputElement);
  } });
  var _sfc_main$C = (0, import_vue.defineComponent)({ name: "FPostalCodeTextField", extends: FTextField, mixins: [TranslationMixin], props: { formatter: { type: Function, required: false, default: import_logic.formatPostalCode } }, setup() {
    return { textFieldTableMode: (0, import_vue.inject)("textFieldTableMode", false) };
  }, data() {
    return { defaultText: this.$t("fkui.postal-code-text-field.label", "Postnummer"), discreteDescriptionText: this.$t("fkui.postal-code-text-field.example", "(123 45)"), discreteDescriptionScreenReaderText: this.$t("fkui.postal-code-text-field.format-description", "Formatbeskrivning") };
  }, mounted() {
    const inputElement = getInputElement(this);
    import_logic.ValidationService.addValidatorsToElement(inputElement, { maxLength: { length: 13 }, postalCode: {} }, true);
    inputElement.setAttribute("inputmode", "numeric");
    inputElement.setAttribute("maxlength", "15");
    import_logic.ValidationService.validateElement(inputElement);
  } });
  function defaultFormatter(modelValue) {
    return (0, import_logic.formatPercent)(modelValue, this.decimals);
  }
  var _sfc_main$B = (0, import_vue.defineComponent)({ name: "FPercentTextField", extends: FTextField, mixins: [TranslationMixin], props: {
    /**
    * The number of decimals to format number as.
    */
    decimals: { type: Number, required: false, default: void 0 },
    formatter: { type: Function, required: false, default: defaultFormatter },
    parser: { type: Function, required: false, default: import_logic.parsePercent }
  }, setup() {
    return { textFieldTableMode: (0, import_vue.inject)("textFieldTableMode", false) };
  }, data() {
    return { defaultText: this.$t("fkui.percent-text-field.label", "Procent") };
  }, mounted() {
    const inputElement = getInputElement(this);
    inputElement.setAttribute("inputmode", this.decimals ? "decimal" : "numeric");
    inputElement.setAttribute("maxlength", "10");
    import_logic.ValidationService.addValidatorsToElement(inputElement, { percent: {}, minValue: { minValue: 0 }, maxValue: { maxValue: 999 } }, true);
    import_logic.ValidationService.validateElement(inputElement);
  } });
  var _sfc_main$A = (0, import_vue.defineComponent)({ name: "FOrganisationsnummerTextField", extends: FTextField, mixins: [TranslationMixin], props: { formatter: { type: Function, required: false, default: import_logic.parseOrganisationsnummer } }, setup() {
    return { textFieldTableMode: (0, import_vue.inject)("textFieldTableMode", false) };
  }, data() {
    return { defaultText: this.$t("fkui.organisationsnummer-text-field.label", "Organisationsnummer"), discreteDescriptionText: this.$t("fkui.organisationsnummer-text-field.example", "(999999-9999)"), discreteDescriptionScreenReaderText: this.$t("fkui.organisationsnummer-text-field.format-description", "Formatbeskrivning") };
  }, mounted() {
    const inputElement = getInputElement(this);
    import_logic.ValidationService.addValidatorsToElement(inputElement, { maxLength: { length: 11 }, organisationsnummer: {} }, true);
    inputElement.setAttribute("inputmode", "numeric");
    inputElement.setAttribute("maxlength", "20");
    import_logic.ValidationService.validateElement(inputElement);
  } });
  function sort(list, sortAttribute, ascending) {
    return list.sort((item1, item2) => compare(item1, item2, sortAttribute, ascending));
  }
  function compare(item1, item2, attribute, ascending) {
    const value1 = item1[attribute];
    const value2 = item2[attribute];
    if (!(0, import_logic.isSet)(value1) || !(0, import_logic.isSet)(value2)) {
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
    if (!(0, import_logic.isSet)(value1) && !(0, import_logic.isSet)(value2)) {
      return 0;
    } else if (!(0, import_logic.isSet)(value1)) {
      return 1;
    }
    return -1;
  }
  function includesAllSearchTerms(item, filterAttributes, searchTerms) {
    const values = filterAttributes.map((it) => {
      const value = item[it];
      return (0, import_logic.isSet)(value) ? value.toString().toLocaleLowerCase() : void 0;
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
  var _sfc_main$z = (0, import_vue.defineComponent)({ name: "FSortFilterDataset", components: { FSelectField, FTextField, FIcon, IFlex, IFlexItem }, mixins: [TranslationMixin], provide() {
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
    placeholderFilter: { type: String, required: false, default: TranslationMixin.methods.$t("fkui.sort-filter-dataset.placeholder.filter", "S\xF6k") },
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
    let id = 0;
    Object.keys(this.sortableAttributes).forEach((key) => {
      arr.push({ attribute: key, name: this.sortableAttributes[key], ascendingName: this.$t("fkui.sort-filter-dataset.label.ascending", "stigande"), ascending: true, id: id++ });
      arr.push({ attribute: key, name: this.sortableAttributes[key], ascendingName: this.$t("fkui.sort-filter-dataset.label.descending", "fallande"), ascending: false, id: id++ });
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
    this.debouncedFilterResultset = (0, import_logic.debounce)(this.filterResultset, 250).bind(this);
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
    (0, import_logic.focus)(input);
  }, debouncedFilterResultset() {
  }, filterResultset() {
    this.sortFilterData();
    if (this.searchString === "") {
      (0, import_logic.alertScreenReader)(this.$t("fkui.sort-filter-dataset.aria-live.empty", "S\xF6k redigera S\xF6k tom"));
    } else {
      const searchAriaLive = this.$t("fkui.sort-filter-dataset.aria-live.search", `Din s\xF6kning p\xE5 "{{ search }}" gav {{ result }} tr\xE4ffar.`, { result: this.sortFilterResult.length, search: this.searchString });
      (0, import_logic.alertScreenReader)(searchAriaLive);
    }
  } } });
  var _hoisted_1$w = { class: "sort-filter-dataset" };
  var _hoisted_2$q = { class: "sort-filter-dataset__search" };
  var _hoisted_3$n = { class: "sr-only" };
  var _hoisted_4$i = ["title"];
  var _hoisted_5$g = { class: "sr-only" };
  var _hoisted_6$c = { value: { attribute: "", ascending: false } };
  var _hoisted_7$b = ["value"];
  function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_i_flex_item = (0, import_vue.resolveComponent)("i-flex-item");
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    const _component_f_text_field = (0, import_vue.resolveComponent)("f-text-field");
    const _component_f_select_field = (0, import_vue.resolveComponent)("f-select-field");
    const _component_i_flex = (0, import_vue.resolveComponent)("i-flex");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_1$w, [(0, import_vue.createVNode)(_component_i_flex, { collapse: "", gap: "3x", wrap: "" }, {
      default: (0, import_vue.withCtx)(() => [(0, import_vue.createVNode)(_component_i_flex_item, { shrink: "", align: "center" }, {
        default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "header", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ slotClass: "sort-filter-dataset__toolbar__header" })))]),
        _: 3
        /* FORWARDED */
      }), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_i_flex_item, { grow: "" }, {
        default: (0, import_vue.withCtx)(() => [(0, import_vue.createVNode)(_component_i_flex, { collapse: "", float: "right" }, {
          default: (0, import_vue.withCtx)(() => [_ctx.showFilter ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_i_flex_item, { key: 0, shrink: "", align: "center" }, {
            default: (0, import_vue.withCtx)(() => [(0, import_vue.createElementVNode)("div", _hoisted_2$q, [(0, import_vue.createVNode)(_component_f_icon, { name: "search", class: "sort-filter-dataset__search__magnify-icon" }), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_text_field, { modelValue: _ctx.searchString, "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.searchString = $event), inline: "", placeholder: _ctx.placeholderFilter, maxlength: "64", onInput: _ctx.onSearchInput }, {
              default: (0, import_vue.withCtx)(() => [(0, import_vue.createElementVNode)(
                "span",
                _hoisted_3$n,
                (0, import_vue.toDisplayString)(_ctx.placeholderFilter),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "placeholder", "onInput"]), (0, import_vue.createTextVNode)(), _ctx.showClearButton ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("button", { key: 0, type: "button", class: "button button--discrete sort-filter-dataset__search__close-icon", title: _ctx.$t("fkui.sort-filter-dataset.clear.filter", "Rensa s\xF6kf\xE4lt"), onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onClickClearSearch && _ctx.onClickClearSearch(...args)) }, [(0, import_vue.createVNode)(_component_f_icon, { name: "close" }), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
              "span",
              _hoisted_5$g,
              (0, import_vue.toDisplayString)(_ctx.$t("fkui.sort-filter-dataset.clear.filter", "Rensa s\xF6kf\xE4lt")),
              1
              /* TEXT */
            )], 8, _hoisted_4$i)) : (0, import_vue.createCommentVNode)("v-if", true)])]),
            _: 1
            /* STABLE */
          })) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), _ctx.showSort ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_i_flex_item, { key: 1, shrink: "", align: "center" }, {
            default: (0, import_vue.withCtx)(() => [(0, import_vue.createVNode)(_component_f_select_field, { modelValue: _ctx.sortAttribute, "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.sortAttribute = $event), class: "sort-filter-dataset__sort", inline: "", onChange: _ctx.onChangeSortAttribute }, {
              label: (0, import_vue.withCtx)(() => [(0, import_vue.createTextVNode)(
                (0, import_vue.toDisplayString)(_ctx.$t("fkui.sort-filter-dataset.label.sort", "Sortera\xA0p\xE5")),
                1
                /* TEXT */
              )]),
              default: (0, import_vue.withCtx)(() => [(0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
                "option",
                _hoisted_6$c,
                (0, import_vue.toDisplayString)(_ctx.$t("fkui.sort-filter-dataset.label.unsorted", "V\xE4lj")),
                1
                /* TEXT */
              ), (0, import_vue.createTextVNode)(), ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                import_vue.Fragment,
                null,
                (0, import_vue.renderList)(_ctx.sortOrders, (sortOrder) => {
                  return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("option", { key: sortOrder.id, value: sortOrder }, (0, import_vue.toDisplayString)(sortOrder.name) + " (" + (0, import_vue.toDisplayString)(sortOrder.ascendingName) + ")\n                            ", 9, _hoisted_7$b);
                }),
                128
                /* KEYED_FRAGMENT */
              ))]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "onChange"])]),
            _: 1
            /* STABLE */
          })) : (0, import_vue.createCommentVNode)("v-if", true)]),
          _: 1
          /* STABLE */
        })]),
        _: 1
        /* STABLE */
      })]),
      _: 3
      /* FORWARDED */
    }), (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "default", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ sortFilterResult: _ctx.sortFilterResult })))]);
  }
  var FSortFilterDataset = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$z]]);
  var _sfc_main$y = (0, import_vue.defineComponent)({ name: "FDataTable", components: { FIcon }, mixins: [TranslationMixin], provide() {
    return { addColumn: (column) => {
      if (column.type === FTableColumnType.ACTION) {
        throw new Error("Cannot use action column in FDataTable component");
      }
      this.columns = addColumn(this.columns, column);
    }, setVisibilityColumn: (id, visible) => {
      setVisibilityColumn(this.columns, id, visible);
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
    scroll: { type: String, default: TableScroll.NONE, validator: function(value) {
      const types = Object.values(TableScroll);
      return types.includes(value);
    } }
  }, setup(props) {
    (0, import_vue.provide)("renderColumns", (0, import_vue.computed)(() => props.rows.length > 0));
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
  var _hoisted_1$v = ["tabindex"];
  var _hoisted_2$p = { key: 0 };
  var _hoisted_3$m = { class: "table__row" };
  var _hoisted_4$h = ["innerHTML"];
  var _hoisted_5$f = { key: 1, class: "table__column__description" };
  var _hoisted_6$b = { key: 0 };
  var _hoisted_7$a = { key: 1 };
  var _hoisted_8$8 = ["colspan"];
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "div",
      { class: (0, import_vue.normalizeClass)(_ctx.wrapperClasses) },
      [(0, import_vue.createElementVNode)("table", (0, import_vue.mergeProps)({ class: ["table", _ctx.tableClasses], tabindex: _ctx.tabindex }, _ctx.$attrs), [_ctx.hasCaption ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("caption", _hoisted_2$p, [(0, import_vue.renderSlot)(_ctx.$slots, "caption")])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("colgroup", null, [((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
        import_vue.Fragment,
        null,
        (0, import_vue.renderList)(_ctx.columns, (column) => {
          return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
            "col",
            { key: column.id, class: (0, import_vue.normalizeClass)(column.size) },
            null,
            2
            /* CLASS */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      ))]), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("thead", null, [(0, import_vue.createElementVNode)("tr", _hoisted_3$m, [((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
        import_vue.Fragment,
        null,
        (0, import_vue.renderList)(_ctx.visibleColumns, (column) => {
          return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
            "th",
            (0, import_vue.mergeProps)({ key: column.id, scope: "col", class: _ctx.columnClasses(column) }, (0, import_vue.toHandlers)(column.sortable ? { click: () => _ctx.onClickColumnHeader(column) } : {}, true)),
            [(0, import_vue.createElementVNode)("span", { innerHTML: _ctx.escapeNewlines(column.title) }, null, 8, _hoisted_4$h), (0, import_vue.createTextVNode)(), column.sortable ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_f_icon, { key: 0, class: (0, import_vue.normalizeClass)(_ctx.iconClasses(column)), name: _ctx.iconName(column) }, null, 8, ["class", "name"])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), column.description ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
              "span",
              _hoisted_5$f,
              (0, import_vue.toDisplayString)(column.description),
              1
              /* TEXT */
            )) : (0, import_vue.createCommentVNode)("v-if", true)],
            16
            /* FULL_PROPS */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      ))])]), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("tbody", null, [_ctx.isEmpty && _ctx.columns.length === 0 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("tr", _hoisted_6$b, [(0, import_vue.renderSlot)(_ctx.$slots, "default", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ row: {} })))])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), _ctx.isEmpty ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("tr", _hoisted_7$a, [(0, import_vue.createElementVNode)("td", { class: "table__column table__column--action", colspan: _ctx.columns.length }, [(0, import_vue.renderSlot)(_ctx.$slots, "empty", {}, () => [(0, import_vue.createTextVNode)(
        (0, import_vue.toDisplayString)(_ctx.$t("fkui.data-table.empty", "Tabellen \xE4r tom")),
        1
        /* TEXT */
      )])], 8, _hoisted_8$8)])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
        import_vue.Fragment,
        null,
        (0, import_vue.renderList)(_ctx.rows, (row) => {
          return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("tr", { key: _ctx.rowKey(row), class: "table__row" }, [(0, import_vue.renderSlot)(_ctx.$slots, "default", (0, import_vue.mergeProps)({ ref_for: true }, { row }))]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))])], 16, _hoisted_1$v)],
      2
      /* CLASS */
    );
  }
  var FDataTable = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$y]]);
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
    if (!(0, import_logic.isInvalidDatesConfig)(config2)) {
      throw new Error("Invalid invalidDates config");
    }
    return !config2.dates.includes(day.toString());
  }
  function passesInvalidWeekdays(day, config2) {
    if (!config2) {
      return true;
    }
    if (!(0, import_logic.isInvalidWeekdaysConfig)(config2)) {
      throw new Error("Invalid invalidWeekdays config");
    }
    return !config2.days.includes(day.weekDay);
  }
  function updateCalendarValue(datepicker, newValue) {
    const { isDateEnabled, minDate, maxDate } = datepicker;
    const newCalendarValue = import_date.FDate.fromIso(newValue);
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
      effectiveDate = import_date.FDate.now();
    }
    let month;
    if (!isInvalidMonth(effectiveDate, minDate, maxDate)) {
      month = effectiveDate.startOfMonth();
    } else if (isMonthBefore(effectiveDate, minDate)) {
      month = minDate == null ? void 0 : minDate.startOfMonth();
    } else if (isMonthAfter(effectiveDate, maxDate)) {
      month = maxDate == null ? void 0 : maxDate.startOfMonth();
    }
    return month || import_date.FDate.now().startOfMonth();
  }
  var _sfc_main$x = (0, import_vue.defineComponent)({ name: "FDatepickerField", components: { FCalendar, IPopup, FTextField, FIcon, FCalendarDay }, mixins: [TranslationMixin], inheritAttrs: false, props: {
    /** Selected day.
    * @model
    */
    modelValue: { type: String, required: false, default: "" },
    /**
    * Initial month. Applies when no day is selected.
    * If unspecified, todays month will be shown when no day is selected.
    */
    initialMonth: { type: Object, required: false, default: void 0 },
    /**
    * Highlight today.
    */
    highlightToday: { type: Boolean, required: false, default: true },
    /**
    * Always display inline.
    */
    alwaysInline: { type: Boolean, default: false },
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
    inputWidth: { type: String, required: false, default: "sm-12" },
    /**
    * Set to `true`, empty string `""` or string `"disabled"` to disable this field.
    */
    disabled: { type: Boolean, required: false, default: false }
  }, emits: ["change", "update:modelValue"], setup() {
    const defaultMinDate = import_date.FDate.now().addYears(-10);
    const defaultMaxDate = import_date.FDate.now().addYears(10);
    return { textFieldValue: (0, import_vue.ref)(""), textFieldTouched: (0, import_vue.ref)(false), textFieldValidityRevealed: (0, import_vue.ref)(false), textFieldTableMode: (0, import_vue.inject)("textFieldTableMode", false), componentTouched: (0, import_vue.ref)(false), calendarMonth: (0, import_vue.shallowRef)(getDisplayMonth(defaultMinDate, defaultMaxDate)), calendarValue: (0, import_vue.shallowRef)(void 0), isCalendarOpen: (0, import_vue.ref)(false), validationConfig: (0, import_vue.ref)({}), minDate: (0, import_vue.shallowRef)(defaultMinDate), maxDate: (0, import_vue.shallowRef)(defaultMaxDate), calendarInputs: (0, import_vue.ref)(null) };
  }, computed: { calendarButtonText() {
    const { calendarValue } = this;
    if (calendarValue && calendarValue.isValid()) {
      const prettyDate = calendarValue.toString(import_date.DateFormat.FULL);
      const text = this.$t("fkui.datepicker-field.change", "\xC4ndra datum");
      return `${text} ${prettyDate}`;
    } else {
      return this.$t("fkui.datepicker-field.choose", "V\xE4lj datum");
    }
  }, popupClass() {
    return this.textFieldTableMode ? "datepicker-field__popup datepicker-field__table" : "datepicker-field__popup";
  } }, watch: { modelValue: { async handler(value) {
    if (value !== this.textFieldValue) {
      await this.updateTextFieldValue(value);
      updateCalendarValue(this, value);
    }
  }, immediate: true } }, mounted() {
    import_logic.ValidationService.addValidatorsToElement(getInputElement(this), { date: {}, dateFormat: {}, minDate: { limit: this.minDate.toString() }, maxDate: { limit: this.maxDate.toString() } }, true);
  }, methods: { dateFormatter: import_logic.parseDate, async onValidityTextField({ detail }) {
    if (this.textFieldValidityRevealed && detail.validityMode === "INITIAL") {
      this.textFieldTouched = false;
      this.componentTouched = false;
    }
    if (!this.textFieldTouched && ["blur", "change"].includes(detail.nativeEvent)) {
      this.textFieldTouched = true;
    }
    if (this.isCalendarOpen) {
      (0, import_logic.alertScreenReader)(detail.validationMessage, { assertive: true });
    }
    this.textFieldValidityRevealed = detail.validityMode !== "INITIAL";
    if (detail.validityMode === "INITIAL" || !this.textFieldTouched || this.componentTouched) {
      return;
    }
    const inputElement = getInputElement(this);
    const pendingValidityEvent = new CustomEvent("pending-validity", { bubbles: false });
    inputElement.dispatchEvent(pendingValidityEvent);
  }, onChangeTextField() {
    updateCalendarValue(this, this.textFieldValue);
    this.$emit("update:modelValue", this.textFieldValue);
    this.$emit("change", this.textFieldValue);
  }, onClickCalendarButton() {
    if (!this.isCalendarOpen) {
      this.calendarMonth = getDisplayMonth(this.minDate, this.maxDate, this.calendarValue, this.initialMonth);
    }
    this.isCalendarOpen = !this.isCalendarOpen;
  }, onFocusoutTextFieldButton(e) {
    if (this.componentTouched || this.$refs.component === null) {
      return;
    }
    const component = getHTMLElementFromVueRef(this.$refs.component);
    const relatedTarget = e.relatedTarget;
    if (!component.contains(relatedTarget)) {
      this.componentTouched = true;
      const inputElement = getInputElement(this);
      import_logic.ValidationService.setTouched(inputElement);
      import_logic.ValidationService.validateElement(inputElement);
    }
  }, async onSelectCalendarDay(date) {
    this.componentTouched = true;
    this.isCalendarOpen = !this.isDateEnabled(date);
    if (!this.isCalendarOpen) {
      getHTMLElementFromVueRef(this.$refs.calendarButton).focus();
    }
    this.$emit("update:modelValue", date.toString());
    this.$emit("change", date.toString());
    await this.updateTextFieldValue(date.toString());
    updateCalendarValue(this, date.toString());
  }, async onKeyupEsc() {
    this.isCalendarOpen = false;
    (0, import_logic.waitForScreenReader)(() => {
      getHTMLElementFromVueRef(this.$refs.calendarButton).focus();
    });
  }, async onClickCloseCalendarButton() {
    this.isCalendarOpen = false;
    (0, import_logic.waitForScreenReader)(() => {
      getHTMLElementFromVueRef(this.$refs.calendarButton).focus();
    });
  }, onOpenPopup() {
    if (!this.isCalendarOpen) {
      return;
    }
    const popup = getHTMLElementFromVueRef(this.$refs.popup);
    const navMonth = popup.querySelector(".calendar-navbar__month");
    if (navMonth) {
      navMonth.focus({ preventScroll: true });
    }
  }, onClosePopup() {
    this.isCalendarOpen = false;
  }, async onValidationConfigUpdate(event) {
    this.validationConfig = event.detail.config;
    if (this.validationConfig.minDate) {
      const minDateConfig = this.validationConfig.minDate;
      if (!minDateConfig.limit) {
        throw new Error("MinDate validator must be set");
      }
      this.minDate = import_date.FDate.fromIso(minDateConfig.limit.toString());
    }
    if (this.validationConfig.maxDate) {
      const maxDateConfig = this.validationConfig.maxDate;
      if (!maxDateConfig.limit) {
        throw new Error("MaxDate validator must be set");
      }
      this.maxDate = import_date.FDate.fromIso(maxDateConfig.limit.toString());
    }
    const element = findHTMLElementFromVueRef(this.$refs.calendarInputs);
    if (element) {
      await this.$nextTick();
      import_logic.ValidationService.validateAllElements(element);
    }
  }, isDateEnabled(day) {
    return isDayEnabled(day, this.validationConfig);
  }, isDaySelected(date) {
    return this.calendarValue ? date.equals(this.calendarValue) : false;
  }, highlightDay(date) {
    return this.highlightToday && date.equals(import_date.FDate.now());
  }, async updateTextFieldValue(newValue) {
    this.textFieldValue = newValue;
    await this.$nextTick();
    import_logic.ValidationService.validateElement(getInputElement(this));
  } } });
  var _hoisted_1$u = { ref: "component", class: "datepicker-field" };
  var _hoisted_2$o = ["disabled", "aria-expanded"];
  var _hoisted_3$l = { class: "sr-only" };
  var _hoisted_4$g = { class: "datepicker-field__close" };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    const _component_f_text_field = (0, import_vue.resolveComponent)("f-text-field");
    const _component_f_calendar_day = (0, import_vue.resolveComponent)("f-calendar-day");
    const _component_f_calendar = (0, import_vue.resolveComponent)("f-calendar");
    const _component_i_popup = (0, import_vue.resolveComponent)("i-popup");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "div",
      _hoisted_1$u,
      [(0, import_vue.createElementVNode)(
        "div",
        { ref: "calendarInputs", onFocusout: _cache[2] || (_cache[2] = (...args) => _ctx.onFocusoutTextFieldButton && _ctx.onFocusoutTextFieldButton(...args)) },
        [(0, import_vue.createVNode)(_component_f_text_field, (0, import_vue.mergeProps)(_ctx.$attrs, { modelValue: _ctx.textFieldValue, "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.textFieldValue = $event), maxlength: "20", disabled: _ctx.disabled, formatter: _ctx.dateFormatter, "label-width": _ctx.labelWidth, "input-width": _ctx.inputWidth, onComponentValidity: _ctx.onValidityTextField, onChange: _ctx.onChangeTextField, onValidationConfigUpdate: _ctx.onValidationConfigUpdate }), (0, import_vue.createSlots)({
          description: (0, import_vue.withCtx)(({ descriptionClass, discreteDescriptionClass }) => [(0, import_vue.renderSlot)(_ctx.$slots, "description", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ descriptionClass, discreteDescriptionClass })))]),
          "error-message": (0, import_vue.withCtx)(({ hasError, validationMessage }) => [(0, import_vue.renderSlot)(_ctx.$slots, "error-message", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ hasError, validationMessage })))]),
          "input-right": (0, import_vue.withCtx)(() => [(0, import_vue.createElementVNode)("button", { ref: "calendarButton", disabled: _ctx.disabled, class: "datepicker-field__button", type: "button", "aria-expanded": _ctx.isCalendarOpen ? "true" : "false", "data-test": "calendar-button", onClick: _cache[0] || (_cache[0] = ($event) => _ctx.onClickCalendarButton()) }, [(0, import_vue.createVNode)(_component_f_icon, { name: "calendar" }), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
            "span",
            _hoisted_3$l,
            (0, import_vue.toDisplayString)(_ctx.calendarButtonText),
            1
            /* TEXT */
          )], 8, _hoisted_2$o)]),
          default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "default", {}, () => [(0, import_vue.createTextVNode)(
            (0, import_vue.toDisplayString)(_ctx.$t("fkui.datepicker-field.label", "Datum")),
            1
            /* TEXT */
          )]), (0, import_vue.createTextVNode)(), (0, import_vue.createTextVNode)(), (0, import_vue.createTextVNode)(), (0, import_vue.createTextVNode)()]),
          _: 2
          /* DYNAMIC */
        }, [_ctx.$slots.tooltip ? { name: "tooltip", fn: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "tooltip")]), key: "0" } : void 0]), 1040, ["modelValue", "disabled", "formatter", "label-width", "input-width", "onComponentValidity", "onChange", "onValidationConfigUpdate"])],
        544
        /* NEED_HYDRATION, NEED_PATCH */
      ), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_i_popup, { "is-open": _ctx.isCalendarOpen, anchor: _ctx.calendarInputs, inline: _ctx.alwaysInline ? "always" : void 0, "set-focus": false, onOpen: _ctx.onOpenPopup, onClose: _ctx.onClosePopup }, {
        default: (0, import_vue.withCtx)(() => [(0, import_vue.createElementVNode)(
          "div",
          { ref: "popup", class: (0, import_vue.normalizeClass)(_ctx.popupClass) },
          [(0, import_vue.createVNode)(_component_f_calendar, { modelValue: _ctx.calendarMonth, "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.calendarMonth = $event), "tab-date": _ctx.calendarValue, "min-date": _ctx.minDate, "max-date": _ctx.maxDate, onClick: _ctx.onSelectCalendarDay, onKeyup: (0, import_vue.withKeys)((0, import_vue.withModifiers)(_ctx.onKeyupEsc, ["stop"]), ["esc", "native"]) }, {
            default: (0, import_vue.withCtx)(({ date, isFocused }) => [(0, import_vue.createVNode)(_component_f_calendar_day, { day: date, enabled: _ctx.isDateEnabled(date), focused: isFocused, highlight: _ctx.highlightDay(date), selected: _ctx.isDaySelected(date) }, null, 8, ["day", "enabled", "focused", "highlight", "selected"])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "tab-date", "min-date", "max-date", "onClick", "onKeyup"]), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("div", _hoisted_4$g, [(0, import_vue.createElementVNode)(
            "button",
            { class: "button button--discrete button--discrete--black datepicker-field__close__button", type: "button", onClick: _cache[4] || (_cache[4] = (...args) => _ctx.onClickCloseCalendarButton && _ctx.onClickCloseCalendarButton(...args)), onKeyup: _cache[5] || (_cache[5] = (0, import_vue.withKeys)((0, import_vue.withModifiers)((...args) => _ctx.onKeyupEsc && _ctx.onKeyupEsc(...args), ["stop"]), ["esc"])) },
            [(0, import_vue.createElementVNode)(
              "span",
              null,
              (0, import_vue.toDisplayString)(_ctx.$t("fkui.datepicker-field.close", "St\xE4ng")),
              1
              /* TEXT */
            ), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_icon, { "aria-hidden": "true", class: "button__icon", name: "close" })],
            32
            /* NEED_HYDRATION */
          )])],
          2
          /* CLASS */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["is-open", "anchor", "inline", "onOpen", "onClose"])],
      512
      /* NEED_PATCH */
    );
  }
  var FDatepickerField = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$x]]);
  var _sfc_main$w = (0, import_vue.defineComponent)({ name: "FExpand", data() {
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
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(import_vue.Transition, { onEnter: _ctx.enter, onAfterEnter: _ctx.afterEnter, onLeave: _ctx.leave }, {
      default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "default", { height: _ctx.height })]),
      _: 3
      /* FORWARDED */
    }, 8, ["onEnter", "onAfterEnter", "onLeave"]);
  }
  var FExpand = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$w]]);
  var _sfc_main$v = (0, import_vue.defineComponent)({ name: "FExpandablePanel", components: { FIcon, FExpand }, mixins: [TranslationMixin], inheritAttrs: false, props: {
    /**
    * Toggle expanded/collapsed state
    */
    expanded: { type: Boolean, required: false, default: false },
    /**
    * Element to render for the header element inside the expandable panel.
    * 'h1', 'h2', 'h3', 'h4', 'h5' and 'h6' is valid.
    */
    headerTag: { default: "h2", required: false, validator(value) {
      return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
    } },
    /**
    * The id for the content id attribute.
    * If the prop is not set the id will be generated.
    */
    id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() },
    /**
    * Number of notifications present in panel.
    *
    * If set to zero (default) no notification badge will be displayed.
    */
    notifications: { type: Number, required: false, default: 0 },
    screenReaderNotificationTemplate: { type: String, required: false, default: "Du har %VALUE% notifieringar." }
  }, emits: ["toggle"], computed: { expandedClass() {
    return this.expanded ? "expandable-panel--expanded" : "expandable-panel--collapsed";
  }, hasOutsideSlot() {
    return hasSlot(this, "outside");
  }, haveNotifications() {
    return this.notifications > 0;
  }, screenReaderNotificationText() {
    return `${this.screenReaderNotificationTemplate.replace("%VALUE%", this.notifications.toString())}`;
  } }, methods: { onClickHeadingButton(event) {
    this.$emit("toggle", event);
  } } });
  var _hoisted_1$t = ["aria-expanded", "aria-controls"];
  var _hoisted_2$n = { class: "expandable-panel__icon" };
  var _hoisted_3$k = { class: "icon-stack" };
  var _hoisted_4$f = ["title"];
  var _hoisted_5$e = { class: "sr-only" };
  var _hoisted_6$a = ["id"];
  var _hoisted_7$9 = { class: "expandable-panel__body" };
  var _hoisted_8$7 = { key: 0, class: "expandable-panel__outside" };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    const _component_f_expand = (0, import_vue.resolveComponent)("f-expand");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "div",
      { class: (0, import_vue.normalizeClass)(["expandable-panel", _ctx.expandedClass]) },
      [((0, import_vue.openBlock)(), (0, import_vue.createBlock)((0, import_vue.resolveDynamicComponent)(_ctx.headerTag), { class: "expandable-panel__heading" }, {
        default: (0, import_vue.withCtx)(() => [(0, import_vue.createElementVNode)("button", (0, import_vue.mergeProps)({ type: "button", "aria-expanded": _ctx.expanded ? "true" : "false", "aria-controls": _ctx.id }, _ctx.$attrs, { onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickHeadingButton && _ctx.onClickHeadingButton(...args)) }), [(0, import_vue.createElementVNode)("span", _hoisted_2$n, [(0, import_vue.createElementVNode)("span", _hoisted_3$k, [(0, import_vue.createVNode)(_component_f_icon, { name: "dash" }), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_icon, { name: "dash" })])]), (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "title"), (0, import_vue.createTextVNode)(), _ctx.haveNotifications ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("span", { key: 0, class: "expandable-panel__notification", title: _ctx.$t("fkui.expandable-panel.notification.title", "{{ count }} notifiering{{ suffix }}", { count: _ctx.notifications, suffix: _ctx.notifications > 1 ? "ar" : "" }) }, [(0, import_vue.createElementVNode)(
          "span",
          _hoisted_5$e,
          (0, import_vue.toDisplayString)(_ctx.screenReaderNotificationText),
          1
          /* TEXT */
        ), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_icon, { name: "bell" })], 8, _hoisted_4$f)) : (0, import_vue.createCommentVNode)("v-if", true)], 16, _hoisted_1$t)]),
        _: 3
        /* FORWARDED */
      })), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_expand, null, {
        default: (0, import_vue.withCtx)(() => [(0, import_vue.withDirectives)((0, import_vue.createElementVNode)("div", { id: _ctx.id, class: "expandable-panel__content" }, [(0, import_vue.createElementVNode)("div", _hoisted_7$9, [(0, import_vue.renderSlot)(_ctx.$slots, "default")]), (0, import_vue.createTextVNode)(), _ctx.hasOutsideSlot ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_8$7, [(0, import_vue.renderSlot)(_ctx.$slots, "outside")])) : (0, import_vue.createCommentVNode)("v-if", true)], 8, _hoisted_6$a), [[import_vue.vShow, _ctx.expanded]])]),
        _: 3
        /* FORWARDED */
      })],
      2
      /* CLASS */
    );
  }
  var FExpandablePanel = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$v]]);
  var _sfc_main$u = (0, import_vue.defineComponent)({ name: "FExpandableParagraph", components: { FIcon, FExpand }, inheritAttrs: false, props: {
    /**
    * Toggle expanded/collapsed state
    */
    expanded: { type: Boolean, required: false, default: false },
    /**
    * Element to render for the button elmement
    * 'span', 'h1', 'h2', 'h3', 'h4', 'h5' and 'h6' is valid.
    */
    headerTag: { default: "span", required: false, validator(value) {
      return ["h1", "h2", "h3", "h4", "h5", "h6", "span"].includes(value);
    } },
    /**
    * Visual header size for the button element.
    * 'h1', 'h2', 'h3', 'h4', 'h5' and 'h6' is valid.
    * If not used, the default styling will be h4
    */
    headerVisualTag: { type: String, default: "", required: false, validator(value) {
      return ["", "h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
    } },
    /**
    * Toggle list style of component
    */
    list: { type: Boolean, default: false, required: false },
    /**
    * The id for the content id attribute.
    * If the prop is not set the id will be generated.
    */
    id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() }
  }, emits: ["toggle"], computed: { expandedClass() {
    return this.expanded ? "expandable-paragraph--open" : "expandable-paragraph--closed";
  }, listClass() {
    return this.list ? "expandable-paragraph--list" : "";
  }, relatedClass() {
    return this.hasRelatedSlot ? "expandable-paragraph--related-information" : "";
  }, hasRelatedSlot() {
    return hasSlot(this, "related");
  }, headerVisualClass() {
    return `heading--${this.headerVisualTag || "h4"}`;
  } }, methods: { onClickMinimize(event) {
    this.$emit("toggle", event);
  } } });
  var _hoisted_1$s = ["aria-expanded", "aria-controls"];
  var _hoisted_2$m = { class: "expandable-paragraph__icon" };
  var _hoisted_3$j = { class: "icon-stack" };
  var _hoisted_4$e = { key: 0, class: "expandable-paragraph__related-information" };
  var _hoisted_5$d = ["id"];
  var _hoisted_6$9 = { class: "expandable-paragraph__content" };
  var _hoisted_7$8 = { key: 0, class: "expandable-paragraph__separator" };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    const _component_f_expand = (0, import_vue.resolveComponent)("f-expand");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "div",
      { class: (0, import_vue.normalizeClass)(["expandable-paragraph", [_ctx.expandedClass, _ctx.listClass]]) },
      [(0, import_vue.createElementVNode)(
        "div",
        { class: (0, import_vue.normalizeClass)(_ctx.relatedClass) },
        [((0, import_vue.openBlock)(), (0, import_vue.createBlock)((0, import_vue.resolveDynamicComponent)(_ctx.headerTag), { class: (0, import_vue.normalizeClass)(["expandable-paragraph__heading", _ctx.headerVisualClass]) }, {
          default: (0, import_vue.withCtx)(() => [(0, import_vue.createElementVNode)("button", (0, import_vue.mergeProps)({ type: "button", class: "expandable-paragraph__button", "aria-expanded": _ctx.expanded ? "true" : "false", "aria-controls": _ctx.id }, _ctx.$attrs, { onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickMinimize && _ctx.onClickMinimize(...args)) }), [(0, import_vue.createElementVNode)("span", _hoisted_2$m, [(0, import_vue.createElementVNode)("span", _hoisted_3$j, [(0, import_vue.createVNode)(_component_f_icon, { name: "dash" }), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_icon, { name: "dash" })])]), (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "title")], 16, _hoisted_1$s)]),
          _: 3
          /* FORWARDED */
        }, 8, ["class"])), (0, import_vue.createTextVNode)(), _ctx.hasRelatedSlot ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_4$e, [(0, import_vue.renderSlot)(_ctx.$slots, "related")])) : (0, import_vue.createCommentVNode)("v-if", true)],
        2
        /* CLASS */
      ), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_expand, null, {
        default: (0, import_vue.withCtx)(() => [(0, import_vue.withDirectives)((0, import_vue.createElementVNode)("div", { id: _ctx.id, class: "expandable-paragraph__container" }, [(0, import_vue.createElementVNode)("div", _hoisted_6$9, [(0, import_vue.renderSlot)(_ctx.$slots, "default")]), (0, import_vue.createTextVNode)(), !_ctx.list ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_7$8)) : (0, import_vue.createCommentVNode)("v-if", true)], 8, _hoisted_5$d), [[import_vue.vShow, _ctx.expanded]])]),
        _: 3
        /* FORWARDED */
      })],
      2
      /* CLASS */
    );
  }
  var FExpandableParagraph = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$u]]);
  var DEFAULT_ICON = "file";
  var iconMap = { "image/*": "pic", "application/msword": "doc", "application/pdf": "pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "doc", "application/vnd.openxmlformats-officedocument.wordprocessingml.template": "doc" };
  var _sfc_main$t = (0, import_vue.defineComponent)({ name: "FFileItem", components: { FIcon }, inheritAttrs: false, props: {
    /**
    * The id for the input id attribute.
    * The id for the label for attribute.
    * If the prop is not set a random value will be generated.
    */
    id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() },
    /**
    * The file name.
    */
    fileName: { type: String, required: true },
    /**
    * The mime type, can be changed if i.e server change the name.
    */
    mimeType: { type: String, required: false, default: void 0 },
    /**
    * The name of the file uploaded
    */
    originalMimeType: { type: String, required: false, default: void 0 },
    /**
    * If file name changed, this info will be displayed, placeholder %before% and %after% will be replaced with originalMimeType and mimeType
    */
    changedMimeTypeText: { type: String, required: false, default: void 0 }
  }, computed: { isMimeTypeChanged() {
    return (0, import_logic.isSet)(this.originalMimeType) && this.originalMimeType !== this.mimeType;
  }, mimeTypeChangedText() {
    var _this$changedMimeType;
    const originalMimeType = (this.originalMimeType || "").split("/").pop() || "";
    const currentMimeType = (this.mimeType || "").split("/").pop() || "";
    const localChangedMimeTypeText = (_this$changedMimeType = this.changedMimeTypeText) !== null && _this$changedMimeType !== void 0 ? _this$changedMimeType : this.$t("fkui.file-item.changed-mime-type.text", "(%before% \xE4ndrad till %after%)");
    return localChangedMimeTypeText.replace("%before%", originalMimeType).replace("%after%", currentMimeType);
  }, iconName() {
    const { mimeType } = this;
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
  } } });
  var _hoisted_1$r = { class: "file-item" };
  var _hoisted_2$l = { class: "file-item__row" };
  var _hoisted_3$i = ["id"];
  var _hoisted_4$d = { class: "icon-stack button__icon icon-stack--new-window" };
  var _hoisted_5$c = { class: "file-item__file-name" };
  var _hoisted_6$8 = { class: "sr-only" };
  var _hoisted_7$7 = { key: 0, class: "file-item__change-info" };
  var _hoisted_8$6 = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "hr",
    { class: "file-item__separator" },
    null,
    -1
    /* HOISTED */
  );
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_1$r, [(0, import_vue.createElementVNode)("div", _hoisted_2$l, [(0, import_vue.createElementVNode)("a", (0, import_vue.mergeProps)({ id: _ctx.id, class: "file-item__file-open" }, _ctx.$attrs), [(0, import_vue.createElementVNode)("div", _hoisted_4$d, [(0, import_vue.createVNode)(_component_f_icon, { name: "new-window" }), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_icon, { name: _ctx.iconName }, null, 8, ["name"])]), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
      "span",
      _hoisted_5$c,
      (0, import_vue.toDisplayString)(_ctx.fileName),
      1
      /* TEXT */
    ), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
      "span",
      _hoisted_6$8,
      "\xA0" + (0, import_vue.toDisplayString)(_ctx.$t("fkui.file-item.file-open", "\xF6ppnas i nytt f\xF6nster")),
      1
      /* TEXT */
    )], 16, _hoisted_3$i), (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "row")]), (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "default"), (0, import_vue.createTextVNode)(), _ctx.isMimeTypeChanged ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "div",
      _hoisted_7$7,
      (0, import_vue.toDisplayString)(_ctx.mimeTypeChangedText),
      1
      /* TEXT */
    )) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), _hoisted_8$6]);
  }
  var FFileItem = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$t]]);
  var _sfc_main$s = (0, import_vue.defineComponent)({ name: "FFileSelector", components: { FIcon }, inheritAttrs: false, model: { prop: "files", event: "change" }, props: {
    /**
    * The id for the input id attribute.
    * The id for the label for attribute.
    * If the prop is not set a random value will be generated.
    */
    id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() },
    disabled: { type: Boolean, required: false, default: false }
  }, emits: ["change"], computed: { attrs() {
    return { ...this.$attrs, id: this.id, onChange: (event) => {
      if (event.target instanceof HTMLInputElement) {
        this.$emit("change", event.target.files);
      }
    } };
  }, labelClass() {
    return this.disabled ? "disabled" : "enabled";
  }, labelId() {
    return `${this.id}_label`;
  }, ariaDisabled() {
    return this.disabled ? "true" : void 0;
  } }, methods: { onClick(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    const input = this.$refs["file-selector"];
    input.value = "";
  } } });
  var _hoisted_1$q = { class: "file-selector" };
  var _hoisted_2$k = ["id", "aria-labelledby", "aria-disabled"];
  var _hoisted_3$h = ["id", "for"];
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_1$q, [(0, import_vue.createElementVNode)("input", (0, import_vue.mergeProps)({ id: _ctx.id, ref: "file-selector", type: "file", "aria-labelledby": _ctx.labelId, "aria-disabled": _ctx.ariaDisabled ? "true" : void 0 }, _ctx.attrs, { onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args)) }), null, 16, _hoisted_2$k), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("label", { id: _ctx.labelId, role: "button", class: (0, import_vue.normalizeClass)([_ctx.labelClass, "button button--tertiary button--medium"]), for: _ctx.id, "aria-hidden": "true" }, [(0, import_vue.createVNode)(_component_f_icon, { class: "button__icon", name: "paper-clip" }), (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "default")], 10, _hoisted_3$h)]);
  }
  var FFileSelector = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$s]]);
  var iconClasses = { success: { symbol: "circle", sign: "success", screenReaderContextKey: "fkui.message-box.sr-context.success", screenReaderContextDefault: "Meddelande" }, warning: { symbol: "circle", sign: "alert", screenReaderContextKey: "fkui.message-box.sr-context.warning", screenReaderContextDefault: "Varningsmeddelande" }, error: { symbol: "triangle", sign: "alert", screenReaderContextKey: "fkui.message-box.sr-context.error", screenReaderContextDefault: "Felmeddelande" }, info: { symbol: "circle", sign: "i", screenReaderContextKey: "fkui.message-box.sr-context.info", screenReaderContextDefault: "Informationsmeddelande" } };
  var _sfc_main$r = (0, import_vue.defineComponent)({ name: "FMessageBox", components: { FIcon, IFlex, IFlexItem }, props: {
    /**
    * Type of message-box. 'success', 'error', 'warning' and 'info' is valid.
    * */
    type: { type: String, required: true, validator(value) {
      return ["success", "warning", "error", "info"].includes(value);
    } },
    /**
    * If message-box should be a banner.
    * If prop is not used message-box will have default styling.
    */
    banner: { type: Boolean, required: false },
    /**
    * It is important to provide a context for a screenreader, similar to a modal that initially outputs it is a dialog.
    * Type-specific screenreader context is output by default in this component.
    * By setting this property to false no context will be output.
    * Note that by doing this, it is the applications responsiblity to provide a clear context.
    */
    provideScreenReaderContext: { type: Boolean, required: false, default: true },
    /**
    * Select standard or short layout.
    *
    * - 'normal' - Use normal layout when need for heading and/or longer text/multiple sentences
    * - 'short' - Use short layout when only need for shorter text
    */
    layout: { type: String, required: false, default: "standard", validator(value) {
      return ["standard", "short"].includes(value);
    } }
  }, data() {
    return { headingClass: ["message-box__heading"] };
  }, computed: { messageBoxType() {
    if (this.layout === "short") {
      return `message-box--${this.type}-short`;
    } else {
      return `message-box--${this.type}`;
    }
  }, bannerType() {
    return this.banner ? `message-box--banner` : "";
  }, classType() {
    return `icon__${this.type}`;
  }, classIcon() {
    return iconClasses[this.type].symbol === "circle" && iconClasses[this.type].sign === "alert" ? `icon__exclamation` : "";
  }, stackTypeClass() {
    return `icon-stack--${this.type}`;
  }, symbol() {
    return iconClasses[this.type].symbol;
  }, sign() {
    return iconClasses[this.type].sign;
  } }, methods: { screenReaderContext() {
    return import_logic.TranslationService.provider.translate(iconClasses[this.type].screenReaderContextKey, iconClasses[this.type].screenReaderContextDefault);
  } } });
  var _hoisted_1$p = { key: 0, class: "sr-only" };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    const _component_i_flex_item = (0, import_vue.resolveComponent)("i-flex-item");
    const _component_i_flex = (0, import_vue.resolveComponent)("i-flex");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "div",
      { class: (0, import_vue.normalizeClass)(["message-box", [_ctx.messageBoxType, _ctx.bannerType]]) },
      [_ctx.provideScreenReaderContext ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
        "span",
        _hoisted_1$p,
        (0, import_vue.toDisplayString)(_ctx.screenReaderContext()),
        1
        /* TEXT */
      )) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_i_flex, { gap: "2x" }, {
        default: (0, import_vue.withCtx)(() => [_ctx.layout === "short" ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_i_flex_item, { key: 0, class: "message-box__icon", shrink: "", align: "center" }, {
          default: (0, import_vue.withCtx)(() => [(0, import_vue.createElementVNode)(
            "span",
            { class: (0, import_vue.normalizeClass)(["icon-stack", _ctx.stackTypeClass]) },
            [(0, import_vue.createVNode)(_component_f_icon, { class: (0, import_vue.normalizeClass)(_ctx.classType), name: _ctx.symbol }, null, 8, ["class", "name"]), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_icon, { class: (0, import_vue.normalizeClass)(_ctx.classIcon), name: _ctx.sign }, null, 8, ["class", "name"])],
            2
            /* CLASS */
          )]),
          _: 1
          /* STABLE */
        })) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_i_flex_item, { class: "message-box__content", grow: "", align: "center" }, {
          default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "default", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)(_ctx.layout === "short" ? {} : { headingSlotClass: _ctx.headingClass })))]),
          _: 3
          /* FORWARDED */
        })]),
        _: 3
        /* FORWARDED */
      })],
      2
      /* CLASS */
    );
  }
  var FMessageBox = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$r]]);
  var setRef = Symbol("setRef");
  var getRef = Symbol("getRef");
  var setIsOpen = Symbol("setIsOpen");
  function createFFormProvideOptions(vm) {
    const { components } = vm;
    return { [setRef](id, data) {
      components[id] = new import_logic.Reference(data);
    }, [getRef](id) {
      return components[id];
    }, [setIsOpen](id, isOpen) {
      const steps = Object.values(components).filter(isFormStepReference);
      for (const step2 of steps) {
        step2.ref.isOpen = false;
      }
      const step = components[id];
      if (isFormStepReference(step)) {
        step.ref.isOpen = isOpen;
      }
    } };
  }
  var _sfc_main$q = (0, import_vue.defineComponent)({ name: "FForm", components: { FMessageBox, FErrorList }, provide() {
    return createFFormProvideOptions(this);
  }, inheritAttrs: false, props: {
    /**
    * The id for the form id attribute.
    * If the prop is not set a random value will be generated.
    */
    id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() },
    /**
    * If the error-message slot and the invalid elements list
    * should be displayed.
    */
    displayError: { type: Boolean, default: true },
    /**
    * If invalid fields at submit this tells how the scroll to the error
    * field should occur. The default, "center", centres the error information
    * vertically. Allowed value is also "top" which scrolls such that the error
    * informations top is at the top of the viewport.
    */
    errorScroll: { type: String, default: "center", validator(value) {
      return ["center", "top"].includes(value);
    } }
  }, data() {
    return { errorMessageSlotClass: ["message-box__heading"], components: {} };
  }, computed: { attrs() {
    let onSubmit;
    if (this.$attrs.onSubmit) {
      const originalSubmit = this.$attrs.onSubmit;
      onSubmit = async (event) => {
        const isValid = await this.onSubmit(event);
        if (isValid) {
          if (Array.isArray(originalSubmit)) {
            originalSubmit.forEach((submitFunction) => submitFunction(event));
          } else {
            originalSubmit(event);
          }
        }
      };
    } else {
      onSubmit = this.onSubmit;
    }
    const attrs = { ...this.$attrs, id: this.id, onSubmit };
    return attrs;
  }, numberOfTimesSubmitted() {
    const components = Object.values(this.components);
    return Math.max(0, ...components.map((it) => it.ref.numberOfTimesSubmitted));
  }, isSubmitted() {
    return this.numberOfTimesSubmitted > 0;
  }, hasError() {
    if (Object.values(this.components).length === 0) {
      return false;
    } else {
      const components = Object.values(this.components);
      return components.some((component) => component.ref.isValid === false);
    }
  }, componentsWithErrors() {
    const sortedComponents = sortComponentsWithErrorsOnDOMOrder(this.components);
    return sortedComponents.map((c) => c.ref);
  }, needsErrorScroll() {
    return this.errorScroll !== "center";
  } }, methods: { async focusDomElement() {
    await this.$nextTick();
    const messageBoxError = this.$el.querySelector(".message-box--error");
    if (messageBoxError) {
      (0, import_logic.focus)(messageBoxError, { scrollToTop: this.needsErrorScroll });
    }
  }, async focusFallbackElement() {
    await this.$nextTick();
    const element = this.$el.querySelector(".form-step__header");
    const invalidElement = this.$el.querySelector(":invalid");
    if (element) {
      (0, import_logic.focus)(element, { scrollToTop: this.needsErrorScroll });
    } else if (invalidElement) {
      (0, import_logic.focus)(invalidElement, { force: true, scrollToTop: this.needsErrorScroll });
    }
  }, async onSubmit(event) {
    event.preventDefault();
    const components = Object.values(this.components);
    components.forEach((component) => {
      component.ref.numberOfTimesSubmitted++;
      if (!isFormStepReference(component)) {
        import_logic.ValidationService.setTouched(component.ref.id);
        import_logic.ValidationService.setSubmitted(component.ref.id);
      }
    });
    await cleanUpElements(this);
    await import_logic.ValidationService.validateAllElements(this.id);
    if (this.displayError) {
      this.focusDomElement();
    } else {
      this.focusFallbackElement();
    }
    return this.hasError === false;
  }, async onComponentValidity(event) {
    const reference = new import_logic.Reference({ id: event.detail.elementId, focusElementId: event.detail.focusElementId, title: event.detail.errorMessage, isValid: event.detail.isValid, numberOfTimesSubmitted: this.numberOfTimesSubmitted });
    this.components[event.detail.elementId] = reference;
    await cleanUpElements(this);
  } } });
  var _hoisted_1$o = ["id"];
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_error_list = (0, import_vue.resolveComponent)("f-error-list");
    const _component_f_message_box = (0, import_vue.resolveComponent)("f-message-box");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("form", (0, import_vue.mergeProps)({ id: _ctx.id, class: "form", novalidate: "" }, _ctx.attrs, { onComponentValidity: _cache[0] || (_cache[0] = (...args) => _ctx.onComponentValidity && _ctx.onComponentValidity(...args)) }), [_ctx.displayError && _ctx.isSubmitted && _ctx.hasError ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_f_message_box, { key: 0, tabindex: "-1", type: "error" }, {
      default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "error-message", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ slotClass: _ctx.errorMessageSlotClass }))), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("nav", null, [(0, import_vue.createVNode)(_component_f_error_list, { items: _ctx.componentsWithErrors }, null, 8, ["items"])])]),
      _: 3
      /* FORWARDED */
    })) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "default")], 16, _hoisted_1$o);
  }
  var FForm = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$q]]);
  var _sfc_main$p = (0, import_vue.defineComponent)({ name: "FFormStep", components: { FIcon, FValidationGroup, FErrorList }, mixins: [TranslationMixin], inheritAttrs: false, props: {
    /**
    * The id for the root div id attribute.
    * If the prop is not set a random value will be generated.
    */
    id: { type: String, required: true, default: () => import_logic.ElementIdService.generateElementId() },
    /**
    * If the form step should have a bottom arrow.
    * It is recommended to remove the arrow for the last step with `:has-arrow="false"`.
    */
    hasArrow: { type: Boolean, default: true },
    /**
    * If the form step is the last step.
    * If set to true the form step will have a bigger bottom margin.
    */
    isLastStep: { type: Boolean, default: false },
    /**
    * If error links should be disabled, `:disable-error-links="true"`..
    * If `true`, errors will be displayed as text instead.
    */
    disableErrorLinks: { type: Boolean, default: false }
  }, setup() {
    return { setRef: (0, import_vue.inject)(setRef), getRef: (0, import_vue.inject)(getRef), setIsOpen: (0, import_vue.inject)(setIsOpen) };
  }, data() {
    return { self: new import_logic.Reference({ isOpen: false, numberOfTimesSubmitted: 0, isAnyFieldTouched: false, isValid: true, id: this.id, focusElementId: `${this.id}-error`, title: "" }), hasBeenValid: false, isOpenedClosed: false, headerSlotClass: ["form-step__title"], stepErrorId: `${this.id}-error`, groupValidity: { isValid: false, componentsWithError: [], componentCount: 0 } };
  }, computed: {
    attrs() {
      return { ...this.$attrs, class: { "form-step--complete": this.self.ref.isValid, "form-step--last-step": this.isLastStep } };
    },
    defaultErrorMessage() {
      return this.$t("fkui.form-step.errorlist.title", "Oj, du har gl\xF6mt att fylla i n\xE5got. G\xE5 till:");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- technical debt, not sure what is going on here
    injected() {
      return this;
    },
    isSubmitted() {
      return this.self.ref.numberOfTimesSubmitted > 0;
    },
    componentsWithError() {
      return this.groupValidity.componentsWithError.map((c) => ({ id: this.disableErrorLinks ? void 0 : c.elementId, focusElementId: c.focusElementId, title: c.errorMessage }));
    },
    hasError() {
      return this.groupValidity.componentsWithError.length > 0;
    },
    displayErrorList() {
      return (this.isOpenedClosed || this.hasBeenValid || this.isSubmitted) && this.hasError;
    },
    validationGroupKey() {
      return `${this.id}-group`;
    }
  }, watch: { "self.ref.numberOfTimesSubmitted": { handler() {
    import_logic.ValidationService.setSubmitted(this.$el);
    import_logic.ValidationService.validateAllElements(this.id);
  } }, groupValidity: { immediate: true, handler() {
    this.self.ref.isValid = this.groupValidity.isValid;
    if (this.hasBeenValid === false) {
      this.hasBeenValid = this.groupValidity.isValid;
    }
  } } }, async mounted() {
    await this.$nextTick();
    this.loadSelf();
    this.injected.setRef(this.id, this.self.ref);
    this.loadSelf();
    this.updateSelfRefTitle();
  }, beforeUpdate() {
    this.updateSelfRefTitle();
  }, methods: {
    updateSelfRefTitle() {
      const [firstSlotClass] = this.headerSlotClass;
      const headerElement = this.$el.querySelector(`.${firstSlotClass}`);
      if (headerElement && headerElement.textContent) {
        this.self.ref.title = headerElement.textContent;
      }
    },
    loadSelf() {
      const ref2 = this.injected.getRef(this.id);
      Object.assign(this.self, ref2);
    },
    async focusDomElement() {
      await this.$nextTick();
      if (this.hasError && this.self.ref.isAnyFieldTouched) {
        const formStepError = this.$el.querySelector(".form-step__error");
        (0, import_logic.focus)(formStepError);
      } else {
        const formStepHeader = this.$el.querySelector(".form-step__header");
        (0, import_logic.focus)(formStepHeader);
      }
    },
    async beforeNavigateToError() {
      this.injected.setIsOpen(this.id, true);
      await this.$nextTick();
    },
    /**
    * Toggle if open or closed.
    * If another form step is open then it will be closed.
    * @public
    */
    toggleIsOpen() {
      this.injected.setIsOpen(this.id, !this.self.ref.isOpen);
      if (this.self.ref.isAnyFieldTouched && this.self.ref.isOpen === false) {
        if (this.isOpenedClosed === false) {
          this.isOpenedClosed = true;
        }
        import_logic.ValidationService.setTouched(this.$el);
        import_logic.ValidationService.validateAllElements(this.id);
      }
      this.focusDomElement();
    },
    onComponentValidity(event) {
      const hasReceivedValidOrErrorEvent = event.detail.validityMode === "VALID" || event.detail.validityMode === "ERROR";
      if (hasReceivedValidOrErrorEvent && this.self.ref.isOpen) {
        this.self.ref.isAnyFieldTouched = true;
      }
    }
  } });
  var _hoisted_1$n = { class: "form-step__header", tabindex: "-1", role: "group" };
  var _hoisted_2$j = ["id"];
  var _hoisted_3$g = { key: 0, class: "form-step__arrow" };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    const _component_f_error_list = (0, import_vue.resolveComponent)("f-error-list");
    const _component_f_validation_group = (0, import_vue.resolveComponent)("f-validation-group");
    return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_f_validation_group, (0, import_vue.mergeProps)({ id: _ctx.id }, _ctx.attrs, { key: _ctx.validationGroupKey, modelValue: _ctx.groupValidity, "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.groupValidity = $event), class: "form-step", "stop-propagation": true }), {
      default: (0, import_vue.withCtx)(() => [(0, import_vue.createElementVNode)("div", _hoisted_1$n, [(0, import_vue.renderSlot)(_ctx.$slots, "header", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ slotClass: _ctx.headerSlotClass, ..._ctx.self.ref, toggleIsOpen: _ctx.toggleIsOpen }))), (0, import_vue.createTextVNode)(), _ctx.self.ref.isValid ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_f_icon, { key: 0, class: "form-step__check", name: "success" })) : (0, import_vue.createCommentVNode)("v-if", true)]), (0, import_vue.createTextVNode)(), _ctx.displayErrorList ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", { key: 0, id: _ctx.stepErrorId, class: "form-step__error", tabindex: "-1", role: "group" }, [(0, import_vue.createElementVNode)("nav", null, [(0, import_vue.createVNode)(_component_f_error_list, { bullets: true, items: _ctx.componentsWithError, "before-navigate": _ctx.beforeNavigateToError }, {
        title: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "error-message", {}, () => [(0, import_vue.createTextVNode)(
          (0, import_vue.toDisplayString)(_ctx.defaultErrorMessage),
          1
          /* TEXT */
        )])]),
        _: 3
        /* FORWARDED */
      }, 8, ["items", "before-navigate"])])], 8, _hoisted_2$j)) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
        "div",
        { onComponentValidity: _cache[0] || (_cache[0] = (...args) => _ctx.onComponentValidity && _ctx.onComponentValidity(...args)) },
        [(0, import_vue.renderSlot)(_ctx.$slots, "default", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ ..._ctx.self.ref, isSubmitted: _ctx.isSubmitted, toggleIsOpen: _ctx.toggleIsOpen }))), (0, import_vue.createTextVNode)(), _ctx.hasArrow ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("span", _hoisted_3$g)) : (0, import_vue.createCommentVNode)("v-if", true)],
        32
        /* NEED_HYDRATION */
      )]),
      _: 3
      /* FORWARDED */
    }, 16, ["id", "modelValue"]);
  }
  var FFormStep = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$p]]);
  var _sfc_main$o = (0, import_vue.defineComponent)({ name: "FFormStepButton", components: { FIcon }, mixins: [TranslationMixin], inheritAttrs: false, model: { prop: "sr-only" }, props: {
    /**
    * If the id is not set a random value will be generated.
    */
    id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() },
    isOpen: Boolean,
    isAnyFieldTouched: Boolean,
    additionalScreenreaderText: { type: String, required: false, default: "" }
  } });
  var _hoisted_1$m = ["id", "aria-expanded"];
  var _hoisted_2$i = { class: "sr-only" };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("button", (0, import_vue.mergeProps)({ id: _ctx.id, class: "button button--margin-bottom-0 button--large", type: "button" }, _ctx.$attrs, { "aria-expanded": _ctx.isOpen ? "true" : "false", "data-form-step-button": "" }), [_ctx.isOpen ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      import_vue.Fragment,
      { key: 0 },
      [(0, import_vue.createVNode)(_component_f_icon, { name: "success", class: "button__icon" }), (0, import_vue.createTextVNode)(
        " " + (0, import_vue.toDisplayString)(_ctx.$t("fkui.form-step-button.close", "OK")),
        1
        /* TEXT */
      )],
      64
      /* STABLE_FRAGMENT */
    )) : ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      import_vue.Fragment,
      { key: 1 },
      [(0, import_vue.createVNode)(_component_f_icon, { name: "pen", class: "button__icon" }), (0, import_vue.createTextVNode)(
        " " + (0, import_vue.toDisplayString)(_ctx.isAnyFieldTouched ? _ctx.$t("fkui.form-step-button.edit", "\xC4ndra") : _ctx.$t("fkui.form-step-button.open", "Fyll i")),
        1
        /* TEXT */
      )],
      64
      /* STABLE_FRAGMENT */
    )), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
      "span",
      _hoisted_2$i,
      (0, import_vue.toDisplayString)(_ctx.additionalScreenreaderText),
      1
      /* TEXT */
    )], 16, _hoisted_1$m);
  }
  var FFormStepButton = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$o]]);
  var _sfc_main$n = (0, import_vue.defineComponent)({ name: "FCard", data() {
    return { headingClass: ["card__header-label"] };
  }, computed: { hasHeaderSlot() {
    return hasSlot(this, "header");
  }, hasFooterSlot() {
    return hasSlot(this, "footer");
  } } });
  var _hoisted_1$l = { class: "card card--default" };
  var _hoisted_2$h = { key: 0, class: "card__header" };
  var _hoisted_3$f = { class: "card__content" };
  var _hoisted_4$c = { key: 1, class: "card__footer" };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_1$l, [_ctx.hasHeaderSlot ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_2$h, [(0, import_vue.renderSlot)(_ctx.$slots, "header", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ headingSlotClass: _ctx.headingClass })))])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("div", _hoisted_3$f, [(0, import_vue.renderSlot)(_ctx.$slots, "default")]), (0, import_vue.createTextVNode)(), _ctx.hasFooterSlot ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_4$c, [(0, import_vue.renderSlot)(_ctx.$slots, "footer")])) : (0, import_vue.createCommentVNode)("v-if", true)]);
  }
  var FCard = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n]]);
  var _sfc_main$m = (0, import_vue.defineComponent)({ name: "FLayoutApplicationTemplate", computed: { showHeader() {
    return this.hasSlot("header");
  }, showTopNavigation() {
    return this.hasSlot("top-navigation");
  }, showFooter() {
    return this.hasSlot("footer");
  } }, mounted() {
    document.body.classList.add("layout-application-template__body");
  }, beforeUnmount() {
    document.body.classList.remove("layout-application-template__body");
  }, methods: { hasSlot(name) {
    return (0, import_logic.isSet)(this.$slots[name]);
  } } });
  var _hoisted_1$k = { class: "layout-application-template" };
  var _hoisted_2$g = { key: 0, ref: "header", class: "layout-application-template__header" };
  var _hoisted_3$e = { key: 1 };
  var _hoisted_4$b = { ref: "primary-content", class: "layout-application-template__main" };
  var _hoisted_5$b = { key: 0, class: "layout-application-template__footer" };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_1$k, [_ctx.showHeader || _ctx.showTopNavigation ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "header",
      _hoisted_2$g,
      [_ctx.showHeader ? (0, import_vue.renderSlot)(_ctx.$slots, "header", { key: 0 }) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), _ctx.showTopNavigation ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("nav", _hoisted_3$e, [(0, import_vue.renderSlot)(_ctx.$slots, "top-navigation")])) : (0, import_vue.createCommentVNode)("v-if", true)],
      512
      /* NEED_PATCH */
    )) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
      "main",
      _hoisted_4$b,
      [(0, import_vue.renderSlot)(_ctx.$slots, "default"), (0, import_vue.createTextVNode)(), _ctx.showFooter ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("footer", _hoisted_5$b, [(0, import_vue.renderSlot)(_ctx.$slots, "footer")])) : (0, import_vue.createCommentVNode)("v-if", true)],
      512
      /* NEED_PATCH */
    )]);
  }
  var FLayoutApplicationTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m]]);
  function getGridClasses(target) {
    if (target === null) {
      return {};
    }
    const width = typeof target === "number" ? target : target.offsetWidth;
    return { "grid--force": true, "grid--force-sm": true, "grid--force-md": width >= 640, "grid--force-lg": width >= 1024, "grid--force-xl": width >= 1280 };
  }
  function useLayoutPanel(options) {
    const growToRight = options.grow === "right";
    let borderDrag = false;
    let dragStart = 0;
    let dragStartWidth = 0;
    let preferredWidth = -1;
    let minWidth = 150;
    let maxWidth = 0.5;
    const panelWidth = (0, import_vue.ref)(0);
    const leftPrimaryClasses = (0, import_vue.ref)({});
    const rightPrimaryClasses = (0, import_vue.ref)({});
    function updateOptions() {
      var _options$initialWidth, _options$minWidth, _options$maxWidth;
      panelWidth.value = parseInt((0, import_vue.toValue)((_options$initialWidth = options.initialWidth) !== null && _options$initialWidth !== void 0 ? _options$initialWidth : "0"), 10);
      minWidth = parseInt((0, import_vue.toValue)((_options$minWidth = options.minWidth) !== null && _options$minWidth !== void 0 ? _options$minWidth : "150"), 10);
      maxWidth = (0, import_vue.toValue)((_options$maxWidth = options.maxWidth) !== null && _options$maxWidth !== void 0 ? _options$maxWidth : 0.5);
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
    (0, import_vue.onMounted)(() => {
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("resize", limitWidth);
    });
    (0, import_vue.onUnmounted)(() => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", limitWidth);
    });
    (0, import_vue.watchEffect)(() => {
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
  var _sfc_main$l = (0, import_vue.defineComponent)({ name: "FLayoutLeftPanel", components: { FIcon }, props: {
    /**
    * The default width for the panel in pixels
    */
    initialWidth: { type: String, default: "320", validator(value) {
      const parsed = parseInt(value, 10);
      return !isNaN(parsed);
    } }
  }, setup(props) {
    const { initialWidth } = (0, import_vue.toRefs)(props);
    return useLayoutPanel({ initialWidth, minWidth: "150", maxWidth: 0.5, grow: "right" });
  }, data() {
    return { isOpen: true, offsetTop: 0 };
  }, computed: {
    navigationStyle() {
      if (this.isOpen) {
        return { width: `${this.panelWidth}px`, top: `${this.offsetTop}px` };
      } else {
        return { top: `${this.offsetTop}px` };
      }
    },
    primaryStyle() {
      if (this.isOpen) {
        return { "margin-left": `${this.panelWidth}px` };
      } else {
        return { "margin-left": `3.5rem` };
      }
    },
    // This is to make word-wrap work in IE11
    contentStyle() {
      return { "max-width": `${this.panelWidth - 35}px` };
    }
  }, mounted() {
    const headers = document.getElementsByClassName("layout-application-template__header");
    const header = headers.item(0);
    if (header) {
      this.offsetTop = header.offsetHeight;
    }
  }, methods: { toggleSideNavigation() {
    this.isOpen = !this.isOpen;
    window.setTimeout(() => {
      this.updatePrimaryGrid();
      const ref2 = this.isOpen ? "close-button" : "open-button";
      const element = getElementFromVueRef(this.$refs[ref2]);
      (0, import_logic.focus)(element);
    }, 0);
  } } });
  var _hoisted_1$j = { class: "layout-navigation" };
  var _hoisted_2$f = ["aria-expanded"];
  var _hoisted_3$d = { class: "layout-navigation__navigation__inner" };
  var _hoisted_4$a = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "span",
    { class: "sr-only" },
    "St\xE4ng navigationspanelen",
    -1
    /* HOISTED */
  );
  var _hoisted_5$a = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "div",
    null,
    [/* @__PURE__ */ (0, import_vue.createElementVNode)("hr")],
    -1
    /* HOISTED */
  );
  var _hoisted_6$7 = { key: 1, class: "layout-navigation__navigation__inner--minimized" };
  var _hoisted_7$6 = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "span",
    { class: "sr-only" },
    "\xD6ppna navigationspanelen",
    -1
    /* HOISTED */
  );
  var _hoisted_8$5 = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "div",
    { class: "layout-navigation__navigation__border__dot" },
    null,
    -1
    /* HOISTED */
  );
  var _hoisted_9$4 = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "div",
    { class: "layout-navigation__navigation__border__dot" },
    null,
    -1
    /* HOISTED */
  );
  var _hoisted_10$4 = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "div",
    { class: "layout-navigation__navigation__border__dot" },
    null,
    -1
    /* HOISTED */
  );
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_1$j, [(0, import_vue.createElementVNode)("nav", { id: "layout-navigation__navigation", class: "layout-navigation__navigation", style: (0, import_vue.normalizeStyle)(_ctx.navigationStyle), "aria-expanded": _ctx.isOpen }, [(0, import_vue.createElementVNode)("div", _hoisted_3$d, [_ctx.isOpen ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      import_vue.Fragment,
      { key: 0 },
      [(0, import_vue.createElementVNode)(
        "div",
        { class: "layout-navigation__navigation__inner__title", style: (0, import_vue.normalizeStyle)(_ctx.contentStyle) },
        [(0, import_vue.renderSlot)(_ctx.$slots, "heading"), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
          "button",
          { ref: "close-button", class: "button button--tertiary button--small button--tertiary--black", type: "button", onClick: _cache[0] || (_cache[0] = (...args) => _ctx.toggleSideNavigation && _ctx.toggleSideNavigation(...args)) },
          [_hoisted_4$a, (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_icon, { class: "button__icon", name: "chevrons-left" })],
          512
          /* NEED_PATCH */
        )],
        4
        /* STYLE */
      ), (0, import_vue.createTextVNode)(), _hoisted_5$a, (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
        "div",
        { class: (0, import_vue.normalizeClass)(["layout-navigation__navigation__inner__content scroll-target", _ctx.gridClasses]), style: (0, import_vue.normalizeStyle)(_ctx.contentStyle) },
        [(0, import_vue.renderSlot)(_ctx.$slots, "content")],
        6
        /* CLASS, STYLE */
      )],
      64
      /* STABLE_FRAGMENT */
    )) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), !_ctx.isOpen ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_6$7, [(0, import_vue.createElementVNode)(
      "button",
      { ref: "open-button", class: "button button--tertiary button--tertiary--black", type: "button", onClick: _cache[1] || (_cache[1] = (...args) => _ctx.toggleSideNavigation && _ctx.toggleSideNavigation(...args)) },
      [_hoisted_7$6, (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_icon, { class: "button__icon", name: "bars" })],
      512
      /* NEED_PATCH */
    )])) : (0, import_vue.createCommentVNode)("v-if", true)]), (0, import_vue.createTextVNode)(), _ctx.isOpen ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "div",
      { key: 0, class: "layout-navigation__navigation__border", onMousedown: _cache[2] || (_cache[2] = (...args) => _ctx.onBorderMouseDown && _ctx.onBorderMouseDown(...args)) },
      [_hoisted_8$5, (0, import_vue.createTextVNode)(), _hoisted_9$4, (0, import_vue.createTextVNode)(), _hoisted_10$4],
      32
      /* NEED_HYDRATION */
    )) : (0, import_vue.createCommentVNode)("v-if", true)], 12, _hoisted_2$f), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
      "div",
      { id: "layout-navigation__primary", class: (0, import_vue.normalizeClass)(["layout-navigation__primary", _ctx.leftPrimaryClasses]), style: (0, import_vue.normalizeStyle)(_ctx.primaryStyle) },
      [(0, import_vue.renderSlot)(_ctx.$slots, "default")],
      6
      /* CLASS, STYLE */
    )]);
  }
  var FLayoutLeftPanel = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l]]);
  var FRightPanelServiceImpl = class {
    constructor() {
      __publicField(this, "focusedElementBeforeOpenining", null);
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
  var _sfc_main$k = (0, import_vue.defineComponent)({ name: "FLayoutRightPanel", components: { FIcon }, props: {
    /**
    * The default width for the panel in pixels
    */
    initialWidth: { type: String, default: "320" },
    /**
    * The default maximun width for the panel in percentage where 1 is 100% and 0 is 0%
    */
    maxWidth: { type: Number, default: 0.5, validator(value) {
      return typeof value === "number" && value > 0 && value <= 1;
    } },
    /**
    * The default minium width for the panel in pixels
    */
    minWidth: { type: String, default: "150" }
  }, setup(props) {
    const { initialWidth, minWidth, maxWidth } = (0, import_vue.toRefs)(props);
    return useLayoutPanel({ initialWidth, minWidth, maxWidth, grow: "left" });
  }, data() {
    return { isAbsolutePositioned: false, isOpen: false, offsetTop: 0 };
  }, computed: {
    secondaryStyle() {
      if (this.isOpen) {
        return { width: `${this.panelWidth}px`, top: `${this.offsetTop}px` };
      }
      return { top: `${this.offsetTop}px` };
    },
    primaryStyle() {
      if (this.isOpen && !this.isAbsolutePositioned) {
        return { "margin-right": `${this.panelWidth}px` };
      }
      return {};
    },
    // This is to make word-wrap work in IE11
    contentStyle() {
      return { "max-width": `${this.panelWidth - 35}px` };
    }
  }, mounted() {
    const headers = document.getElementsByClassName("layout-application-template__header");
    const header = headers.item(0);
    if (header) {
      this.offsetTop = header.offsetHeight;
    }
    FLayoutRightPanelService.on("open", this.onOpenSecondary);
    FLayoutRightPanelService.on("close", this.onCloseSecondary);
    window.addEventListener("resize", this.onResize);
    this.onResize();
  }, unmounted() {
    FLayoutRightPanelService.off("open", this.onOpenSecondary);
    FLayoutRightPanelService.off("close", this.onCloseSecondary);
  }, methods: { async onOpenSecondary() {
    this.isOpen = true;
    await this.$nextTick();
    const element = getElementFromVueRef(this.$refs["title"]);
    const heading = element.querySelector("h1, h2, h3, h4, h5, h6");
    (0, import_logic.focus)(heading, { force: true });
  }, onCloseSecondary() {
    this.isOpen = false;
  }, openSecondary() {
    FLayoutRightPanelService.open();
  }, onClickCloseSecondary() {
    FLayoutRightPanelService.close();
  }, onResize() {
    this.isAbsolutePositioned = window.innerWidth < 1280;
  } } });
  var _hoisted_1$i = { class: "layout-secondary" };
  var _hoisted_2$e = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "div",
    { class: "layout-secondary__secondary__border__dot" },
    null,
    -1
    /* HOISTED */
  );
  var _hoisted_3$c = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "div",
    { class: "layout-secondary__secondary__border__dot" },
    null,
    -1
    /* HOISTED */
  );
  var _hoisted_4$9 = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "div",
    { class: "layout-secondary__secondary__border__dot" },
    null,
    -1
    /* HOISTED */
  );
  var _hoisted_5$9 = { class: "layout-secondary__secondary__inner" };
  var _hoisted_6$6 = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "div",
    null,
    [/* @__PURE__ */ (0, import_vue.createElementVNode)("hr", { "aria-hidden": "true" })],
    -1
    /* HOISTED */
  );
  var _hoisted_7$5 = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "span",
    { class: "sr-only" },
    "St\xE4ng sekund\xE4rpanelen",
    -1
    /* HOISTED */
  );
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_1$i, [(0, import_vue.createElementVNode)(
      "div",
      { id: "layout-secondary__primary", class: (0, import_vue.normalizeClass)(["layout-secondary__primary", _ctx.rightPrimaryClasses]), style: (0, import_vue.normalizeStyle)(_ctx.primaryStyle) },
      [(0, import_vue.renderSlot)(_ctx.$slots, "default")],
      6
      /* CLASS, STYLE */
    ), (0, import_vue.createTextVNode)(), _ctx.isOpen ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "aside",
      { key: 0, style: (0, import_vue.normalizeStyle)(_ctx.secondaryStyle), class: "layout-secondary__secondary" },
      [(0, import_vue.createElementVNode)(
        "div",
        { class: "layout-secondary__secondary__border", onMousedown: _cache[0] || (_cache[0] = (...args) => _ctx.onBorderMouseDown && _ctx.onBorderMouseDown(...args)) },
        [_hoisted_2$e, (0, import_vue.createTextVNode)(), _hoisted_3$c, (0, import_vue.createTextVNode)(), _hoisted_4$9],
        32
        /* NEED_HYDRATION */
      ), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("div", _hoisted_5$9, [(0, import_vue.createElementVNode)(
        "div",
        { ref: "title", class: "layout-secondary__secondary__inner__title", style: (0, import_vue.normalizeStyle)(_ctx.contentStyle) },
        [(0, import_vue.renderSlot)(_ctx.$slots, "heading")],
        4
        /* STYLE */
      ), (0, import_vue.createTextVNode)(), _hoisted_6$6, (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
        "div",
        { class: (0, import_vue.normalizeClass)(["layout-secondary__secondary__inner__content scroll-target", _ctx.gridClasses]), style: (0, import_vue.normalizeStyle)(_ctx.contentStyle) },
        [(0, import_vue.renderSlot)(_ctx.$slots, "content"), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("button", { class: "button button--tertiary button--small button--tertiary--black layout-secondary__secondary__inner__close", type: "button", onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onClickCloseSecondary && _ctx.onClickCloseSecondary(...args)) }, [_hoisted_7$5, (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_icon, { class: "button__icon", name: "close" })])],
        6
        /* CLASS, STYLE */
      )])],
      4
      /* STYLE */
    )) : (0, import_vue.createCommentVNode)("v-if", true)]);
  }
  var FLayoutRightPanel = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k]]);
  var _sfc_main$j = (0, import_vue.defineComponent)({ name: "FList", components: { FCheckboxField }, mixins: [TranslationMixin], props: {
    /**
    * The items to be listed.
    * The items will be listed in the given array order.
    */
    items: { type: Array, required: true },
    /**
    * Unique attribute in items.
    * V-for directive in vue requires a unique key to
    * be able to optimize reuse of components.
    */
    keyAttribute: { type: String, required: true },
    /**
    * If `true` the list will be selectable.
    * @see 'select' and 'unselect' events.
    */
    selectable: { type: Boolean, default: false },
    /**
    * Only applies if selectable:true
    * Disable checkbox in interactive list and create a <a>-wrapper for each item, making them clickable
    * @see 'select' and 'unselect' events.
    */
    checkbox: { type: Boolean, default: true },
    /**
    * V-model will bind to value containing selected items.
    */
    modelValue: { type: Array, required: false, default: () => void 0 },
    /**
    * V-model will bind to value containing the current active item.
    */
    active: { type: Object, required: false, default: () => void 0 },
    /**
    * Unique item id that will be used instead of the automatically generated one.
    */
    elementId: { type: String, default: () => import_logic.ElementIdService.generateElementId() }
  }, emits: ["change", "click", "update", "unselect", "update:modelValue", "select", "update:active"], setup() {
    return ActivateItemInjected();
  }, data() {
    return { selectedItems: [], activeItem: void 0 };
  }, computed: { isEmpty() {
    return this.items.length === 0;
  }, ariaActiveDescendant() {
    return this.activeItem ? this.getItemId(this.activeItem) : void 0;
  } }, watch: { items: { deep: true, immediate: true, handler: function() {
    this.updateSelectedItemsFromVModel();
  } }, modelValue: { deep: true, immediate: true, handler: function() {
    this.updateSelectedItemsFromVModel();
  } }, active: { immediate: true, handler: function() {
    this.updateActiveItemFromVModel();
  } } }, mounted() {
    if (this.selectable && this.checkbox) {
      if (!this.$slots["screenreader"]) {
        throw Error('Slot "screenreader" is required when having "selectable" & "checkbox" option.');
      }
      this.registerCallbackAfterItemAdd(this.callbackAfterItemAdd);
      this.registerCallbackBeforeItemDelete(this.callbackBeforeItemDelete);
    }
  }, methods: {
    getLiElements() {
      const ulElement = getElementFromVueRef(this.$refs["ulElement"]);
      return Array.from(ulElement.children);
    },
    itemKey(item) {
      const key = item[this.keyAttribute];
      if (typeof key === "undefined") {
        throw new Error(`Key attribute [${this.keyAttribute}]' is missing in item`);
      }
      return String(key);
    },
    isSelected(item) {
      return includeItem(item, this.selectedItems, this.keyAttribute);
    },
    itemClasses(item) {
      return { "list__item--selected": this.isSelected(item), "list__item--active": this.isActive(item) };
    },
    getAriaSelected(item) {
      return String(itemEquals(this.activeItem, item, this.keyAttribute));
    },
    onSelect(item) {
      if (includeItem(item, this.selectedItems, this.keyAttribute)) {
        this.selectedItems = this.selectedItems.filter((i) => !itemEquals(i, item, this.keyAttribute));
        this.$emit("unselect", item);
      } else {
        this.selectedItems.push(item);
        this.$emit("select", item);
      }
      this.updateVModelWithSelectedItems();
      this.$forceUpdate();
    },
    setActiveItem(item) {
      this.$emit("click", item);
      if (!itemEquals(item, this.activeItem, this.keyAttribute)) {
        this.$emit("change", item);
        this.activeItem = item;
        this.$emit("update:active", this.activeItem);
      }
    },
    onItemClick(event, index, item) {
      this.setActiveItem(item);
    },
    updateVModelWithSelectedItems() {
      if (this.modelValue) {
        this.$emit("update:modelValue", this.selectedItems);
        this.$emit("update", this.selectedItems);
      }
    },
    updateSelectedItemsFromVModel() {
      if (Array.isArray(this.modelValue)) {
        this.selectedItems = this.modelValue.filter((item) => {
          return includeItem(item, this.items, this.keyAttribute);
        });
      } else {
        this.selectedItems = [];
      }
    },
    updateActiveItemFromVModel() {
      if (this.active && !itemEquals(this.active, this.activeItem, this.keyAttribute)) {
        this.activeItem = this.active;
      }
    },
    onItemKeyDown(event, item) {
      switch (event.key) {
        case "Up":
        case "Down":
        case "ArrowUp":
        case "ArrowDown":
          event.preventDefault();
          handleKeyboardFocusNavigation(event.key, event.target, this.getLiElements());
          break;
        case " ":
        case "Spacebar":
          event.preventDefault();
          this.setActiveItem(item);
          break;
      }
    },
    // Unique id to connect aria-labelledby with readonly label
    getAriaLabelledbyId(item) {
      return `${this.elementId}_${this.itemKey(item)}`;
    },
    // Unique id to connect aria-labelledby with readonly label
    getItemId(item) {
      return `${this.elementId}_item_${this.itemKey(item)}`;
    },
    // Focus effect is done with box-shadow.
    // By setting position to relative the
    // item and box-shadow is drawn with a higher z-index,
    // thus no focus border under other list items.
    onItemFocus(event) {
      if (event && event.target) {
        event.target.style.position = "relative";
      }
    },
    onItemBlur(event) {
      if (event && event.target) {
        event.target.style.position = "static";
      }
    },
    callbackAfterItemAdd(item) {
      this.setActiveItem(item);
    },
    callbackBeforeItemDelete(item) {
      if (this.items.length === 0) {
        return;
      }
      let targetIndex = this.items.indexOf(item) - 1;
      if (targetIndex < 0 && this.items.length > 1) {
        targetIndex = 1;
      } else if (targetIndex < 0) {
        targetIndex = 0;
      }
      this.setActiveItem(this.items[targetIndex]);
      if (this.getLiElements()[targetIndex]) {
        this.getLiElements()[targetIndex].focus();
      }
    },
    isActive(item) {
      return this.checkbox && itemEquals(this.activeItem, item, this.keyAttribute);
    }
  } });
  var _hoisted_1$h = { key: 0, class: "list" };
  var _hoisted_2$d = { key: 0, class: "list__item" };
  var _hoisted_3$b = { class: "list__item__itempane" };
  var _hoisted_4$8 = ["tabindex"];
  var _hoisted_5$8 = ["id", "aria-labelledby", "tabindex", "onKeydown"];
  var _hoisted_6$5 = ["onClick"];
  var _hoisted_7$4 = { class: "list__item__selectpane__input" };
  var _hoisted_8$4 = ["id"];
  var _hoisted_9$3 = { key: 0, class: "list__item" };
  var _hoisted_10$3 = { class: "list__item__itempane" };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_checkbox_field = (0, import_vue.resolveComponent)("f-checkbox-field");
    return !_ctx.selectable ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("ul", _hoisted_1$h, [((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
      import_vue.Fragment,
      null,
      (0, import_vue.renderList)(_ctx.items, (item) => {
        return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("li", { key: _ctx.itemKey(item), class: "list__item" }, [(0, import_vue.createElementVNode)(
          "div",
          { ref_for: true, ref: "listItemPanes", class: "list__item__itempane" },
          [(0, import_vue.renderSlot)(_ctx.$slots, "default", (0, import_vue.mergeProps)({ ref_for: true }, { item }))],
          512
          /* NEED_PATCH */
        )]);
      }),
      128
      /* KEYED_FRAGMENT */
    )), (0, import_vue.createTextVNode)(), _ctx.isEmpty ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("li", _hoisted_2$d, [(0, import_vue.createElementVNode)("div", _hoisted_3$b, [(0, import_vue.renderSlot)(_ctx.$slots, "empty", {}, () => [(0, import_vue.createElementVNode)(
      "em",
      null,
      (0, import_vue.toDisplayString)(_ctx.$t("fkui.list.empty", "Listan \xE4r tom")),
      1
      /* TEXT */
    )])])])) : (0, import_vue.createCommentVNode)("v-if", true)])) : ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("ul", { key: 1, ref: "ulElement", class: "list list--hover", tabindex: _ctx.checkbox ? 0 : void 0 }, [((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
      import_vue.Fragment,
      null,
      (0, import_vue.renderList)(_ctx.items, (item, index) => {
        return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("li", { id: _ctx.getItemId(item), key: _ctx.itemKey(item), "aria-labelledby": _ctx.getItemId(item), class: (0, import_vue.normalizeClass)([_ctx.itemClasses(item), "list__item"]), tabindex: _ctx.checkbox ? 0 : void 0, onKeydown: (0, import_vue.withModifiers)(($event) => _ctx.onItemKeyDown($event, item), ["self"]), onFocus: _cache[0] || (_cache[0] = (0, import_vue.withModifiers)((...args) => _ctx.onItemFocus && _ctx.onItemFocus(...args), ["self"])), onBlur: _cache[1] || (_cache[1] = (0, import_vue.withModifiers)((...args) => _ctx.onItemBlur && _ctx.onItemBlur(...args), ["self"])) }, [_ctx.checkbox ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", { key: 0, class: "list__item__selectpane", onClick: (0, import_vue.withModifiers)(($event) => _ctx.onSelect(item), ["self"]) }, [(0, import_vue.createElementVNode)("div", _hoisted_7$4, [(0, import_vue.createVNode)(_component_f_checkbox_field, { value: true, "model-value": _ctx.isSelected(item), onClick: (0, import_vue.withModifiers)(($event) => _ctx.onSelect(item), ["self"]) }, {
          default: (0, import_vue.withCtx)(() => [(0, import_vue.createElementVNode)("span", { id: _ctx.getAriaLabelledbyId(item), class: "sr-only" }, [(0, import_vue.renderSlot)(_ctx.$slots, "screenreader", (0, import_vue.mergeProps)({ ref_for: true }, { item }))], 8, _hoisted_8$4)]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["model-value", "onClick"])])], 8, _hoisted_6$5)) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), ((0, import_vue.openBlock)(), (0, import_vue.createBlock)((0, import_vue.resolveDynamicComponent)(_ctx.checkbox ? "div" : "a"), { ref_for: true, ref: "listItemPanes", href: !_ctx.checkbox ? "javascript:" : void 0, class: "list__item__itempane", onClick: ($event) => _ctx.onItemClick($event, index, item) }, {
          default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "default", (0, import_vue.mergeProps)({ ref_for: true }, { item }))]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["href", "onClick"]))], 42, _hoisted_5$8);
      }),
      128
      /* KEYED_FRAGMENT */
    )), (0, import_vue.createTextVNode)(), _ctx.isEmpty ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("li", _hoisted_9$3, [(0, import_vue.createElementVNode)("div", _hoisted_10$3, [(0, import_vue.renderSlot)(_ctx.$slots, "empty", {}, () => [(0, import_vue.createElementVNode)(
      "em",
      null,
      (0, import_vue.toDisplayString)(_ctx.$t("fkui.list.empty", "Listan \xE4r tom")),
      1
      /* TEXT */
    )])])])) : (0, import_vue.createCommentVNode)("v-if", true)], 8, _hoisted_4$8));
  }
  var FList = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j]]);
  var _sfc_main$i = (0, import_vue.defineComponent)({ name: "FLoader", mixins: [TranslationMixin], inheritAttrs: false, props: {
    /* Aria-live must always be visible, hence v-if on component level is not possible, therefore we use show-prop */
    /**
    * Determine if the loader is visible or not
    */
    show: { type: Boolean, required: true, default: false },
    /**
    * If loader should be displayed as a fullscreen overlay.
    */
    overlay: { type: Boolean, required: false, default: false },
    /**
    * Delay the loader icon and text by 1 second
    */
    delay: { type: Boolean, required: false, default: false },
    /**
    * Language used for determining fallback value for the loading text. Useful if loader is displayed before
    * text keys have been downloaded
    */
    language: { type: String, required: false, default: "sv" }
  }, data() {
    return { oldFocus: void 0 };
  }, computed: { defaultLoadingText() {
    return this.language === "en" ? "Please wait" : "V\xE4nligen v\xE4nta";
  }, classes() {
    return { "loader--overlay": this.overlay, "loader--delay": this.delay };
  }, teleportTarget() {
    return config.teleportTarget;
  }, teleportDisabled() {
    return !this.overlay;
  } }, watch: { show(show) {
    if (show) {
      this.openLoader();
    } else {
      this.closeLoader();
    }
  } }, mounted() {
    if (this.show) {
      this.openLoader();
    }
  }, methods: { async listener() {
    await this.$nextTick();
    focus(this.$refs["loader-text"]);
  }, async openLoader() {
    if (this.overlay) {
      (0, import_logic.saveFocus)(document);
      this.listener();
      (0, import_logic.addFocusListener)((0, import_logic.findTabbableElements)(document), this.listener);
    }
  }, closeLoader() {
    if (this.overlay) {
      (0, import_logic.removeFocusListener)((0, import_logic.findTabbableElements)(document), this.listener);
      (0, import_logic.restoreFocus)();
    }
  } } });
  var _hoisted_1$g = { class: "loader__backdrop" };
  var _hoisted_2$c = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "div",
    { class: "loader__wrapper" },
    [/* @__PURE__ */ (0, import_vue.createElementVNode)("div", { class: "loader__spinner-1 loader__spinner" }, [/* @__PURE__ */ (0, import_vue.createElementVNode)("div", { class: "loader__spinner-1-circle1 loader__circle loader__circle--1" }), /* @__PURE__ */ (0, import_vue.createTextVNode)(), /* @__PURE__ */ (0, import_vue.createElementVNode)("div", { class: "loader__spinner-1-circle2 loader__circle loader__circle--2" }), /* @__PURE__ */ (0, import_vue.createTextVNode)(), /* @__PURE__ */ (0, import_vue.createElementVNode)("div", { class: "loader__spinner-1-circle3 loader__circle loader__circle--3" }), /* @__PURE__ */ (0, import_vue.createTextVNode)(), /* @__PURE__ */ (0, import_vue.createElementVNode)("div", { class: "loader__spinner-1-circle4 loader__circle loader__circle--4" })]), /* @__PURE__ */ (0, import_vue.createTextVNode)(), /* @__PURE__ */ (0, import_vue.createElementVNode)("div", { class: "loader__spinner-2 loader__spinner" }, [/* @__PURE__ */ (0, import_vue.createElementVNode)("div", { class: "loader__spinner-2-circle1 loader__circle loader__circle--1" }), /* @__PURE__ */ (0, import_vue.createTextVNode)(), /* @__PURE__ */ (0, import_vue.createElementVNode)("div", { class: "loader__spinner-2-circle2 loader__circle loader__circle--2" }), /* @__PURE__ */ (0, import_vue.createTextVNode)(), /* @__PURE__ */ (0, import_vue.createElementVNode)("div", { class: "loader__spinner-2-circle3 loader__circle loader__circle--3" }), /* @__PURE__ */ (0, import_vue.createTextVNode)(), /* @__PURE__ */ (0, import_vue.createElementVNode)("div", { class: "loader__spinner-2-circle4 loader__circle loader__circle--4" })]), /* @__PURE__ */ (0, import_vue.createTextVNode)(), /* @__PURE__ */ (0, import_vue.createElementVNode)("div", { class: "loader__spinner-3 loader__spinner" }, [/* @__PURE__ */ (0, import_vue.createElementVNode)("div", { class: "loader__spinner-3-circle1 loader__circle loader__circle--1" }), /* @__PURE__ */ (0, import_vue.createTextVNode)(), /* @__PURE__ */ (0, import_vue.createElementVNode)("div", { class: "loader__spinner-3-circle2 loader__circle loader__circle--2" }), /* @__PURE__ */ (0, import_vue.createTextVNode)(), /* @__PURE__ */ (0, import_vue.createElementVNode)("div", { class: "loader__spinner-3-circle3 loader__circle loader__circle--3" }), /* @__PURE__ */ (0, import_vue.createTextVNode)(), /* @__PURE__ */ (0, import_vue.createElementVNode)("div", { class: "loader__spinner-3-circle4 loader__circle loader__circle--4" })])],
    -1
    /* HOISTED */
  );
  var _hoisted_3$a = { role: "alert" };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(import_vue.Teleport, { to: _ctx.teleportTarget, disabled: _ctx.teleportDisabled }, [(0, import_vue.withDirectives)((0, import_vue.createElementVNode)(
      "div",
      (0, import_vue.mergeProps)(_ctx.$attrs, { class: ["loader", _ctx.classes] }),
      [(0, import_vue.createElementVNode)("div", _hoisted_1$g, [_hoisted_2$c, (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
        "div",
        { ref: "loader-text", class: (0, import_vue.normalizeClass)(["loader__wait-text", { "loader--delay": _ctx.delay }]), tabindex: "-1" },
        [(0, import_vue.createElementVNode)("span", _hoisted_3$a, [(0, import_vue.renderSlot)(_ctx.$slots, "default", {}, () => [(0, import_vue.createTextVNode)(
          (0, import_vue.toDisplayString)(_ctx.$t("fkui.loader.wait.text", _ctx.defaultLoadingText)),
          1
          /* TEXT */
        )])])],
        2
        /* CLASS */
      )])],
      16
      /* FULL_PROPS */
    ), [[import_vue.vShow, _ctx.show]])], 8, ["to", "disabled"]);
  }
  var FLoader = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i]]);
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
  var _sfc_main$h = (0, import_vue.defineComponent)({ name: "IPopupMenu", components: { FIcon, IPopup }, props: {
    /**
    * Key of the currently selected and highlighted item.
    *
    * @model
    */
    modelValue: { type: String, required: false, default: "" },
    /**
    * Key of the currently focused item.
    * Sets focus on matching item element when value changes.
    *
    * @model
    */
    focusedItem: { type: String, required: false, default: "" },
    /**
    * Toggle open/closed popup.
    */
    isOpen: { type: Boolean, required: true },
    /**
    * DOM element to position popup at.
    */
    anchor: { type: HTMLElement, default: void 0 },
    /**
    * The items to be diplayed in the menu
    */
    items: { type: Array, required: true },
    /**
    * If true, enable built-in keyboard navigation
    */
    enableKeyboardNavigation: { type: Boolean, required: false, default: false },
    /**
    * Unique accessible name for navigation landmark.
    */
    ariaLabel: { type: String, required: false, default: "Popupmeny" },
    /**
    * Text for selected item for screen reader
    */
    selectedMenuItemScreenReaderText: { type: String, required: false, default: "vald nu" }
  }, emits: [
    /**
    * Emitted when an item is selected and when tabbing out of the popup.
    *
    * @event close
    */
    "close",
    /**
    * Vue 2 V-model event. Emitted when an item is selected.
    *
    * @event select
    * @deprecated
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
  ], data() {
    return { currentFocusedItemIndex: 0, lastSelectedItem: "" };
  }, watch: { isOpen: { immediate: true, async handler(newVal) {
    if (newVal) {
      return;
    }
    this.currentFocusedItemIndex = 0;
    this.lastSelectedItem = "";
    this.$emit("update:focusedItem", "");
  } }, modelValue: { async handler(newVal) {
    if (this.enableKeyboardNavigation) {
      return;
    }
    const index = this.indexOfItemByKey(newVal);
    if (index >= 0) {
      await this.activateItem(index);
    } else {
      this.setFocusedItemIndex(0);
    }
  } }, focusedItem: { async handler(newVal) {
    if (newVal.length === 0) {
      return;
    }
    const index = this.indexOfItemByKey(newVal);
    if (index >= 0) {
      await this.setFocusOnItem(index);
    } else {
      this.setFocusedItemIndex(0);
    }
  } } }, methods: { isSelected(index) {
    return this.items[index].key === this.modelValue;
  }, focusElement() {
    return null;
  }, findItemByKey(key) {
    return this.items.find((it) => it.key === key);
  }, indexOfItemByKey(key) {
    const item = this.findItemByKey(key);
    if (!item) {
      return -1;
    }
    return this.items.indexOf(item);
  }, async onClickItem(item, doClick = false) {
    var _a;
    if (item.key !== this.lastSelectedItem) {
      this.$emit("update:modelValue", item.key);
      this.$emit("select", item.key);
      this.lastSelectedItem = item.key;
    }
    this.$emit("close");
    if (item.href && doClick) {
      const anchors = getSortedHTMLElementsFromVueRef(this.$refs.anchors);
      (_a = anchors[this.currentFocusedItemIndex]) == null ? void 0 : _a.click();
    }
  }, itemClasses(item) {
    const highlight = item.key === this.modelValue ? ["ipopupmenu__list__item--highlight"] : [];
    return ["ipopupmenu__list__item", ...highlight];
  }, async setFocusOnItem(index) {
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
    (0, import_logic.focus)(itemAnchor, { preventScroll: true });
    const key = this.items[index].key;
    this.$emit("update:focusedItem", key);
  }, async activateItem(index) {
    if (index !== this.currentFocusedItemIndex) {
      await this.setFocusOnItem(index);
    }
    await this.onClickItem(this.items[index], true);
  }, setFocusedItemIndex(index) {
    this.currentFocusedItemIndex = index;
  }, onKeyUp(event) {
    if (!this.enableKeyboardNavigation) {
      return;
    }
    if (preventKeys$2.includes(event.key)) {
      event.preventDefault();
    }
  }, async onKeyDown(event) {
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
  } } });
  var _hoisted_1$f = ["aria-label"];
  var _hoisted_2$b = { role: "menu", class: "ipopupmenu__list" };
  var _hoisted_3$9 = ["onClick"];
  var _hoisted_4$7 = ["data-ref-index", "href", "target"];
  var _hoisted_5$7 = { key: 0, class: "sr-only" };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    const _component_i_popup = (0, import_vue.resolveComponent)("i-popup");
    return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_i_popup, { class: "ipopupmenu", "is-open": _ctx.isOpen, "keyboard-trap": false, anchor: _ctx.anchor, "focus-element": _ctx.focusElement, onClose: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close")), onKeyup: _ctx.onKeyUp, onKeydown: _ctx.onKeyDown }, {
      default: (0, import_vue.withCtx)(() => [(0, import_vue.createElementVNode)("nav", { class: "ipopupmenu ipopupmenu--vertical", "aria-label": _ctx.ariaLabel }, [(0, import_vue.createElementVNode)("ul", _hoisted_2$b, [((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
        import_vue.Fragment,
        null,
        (0, import_vue.renderList)(_ctx.items, (item, index) => {
          return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("li", { ref_for: true, ref: "items", key: item.key, role: "presentation", class: (0, import_vue.normalizeClass)(_ctx.itemClasses(item)), onClick: ($event) => _ctx.onClickItem(item) }, [(0, import_vue.createElementVNode)("a", { ref_for: true, ref: "anchors", "data-ref-index": index, href: item.href, role: "menuitem", target: item.target, tabindex: "0" }, [_ctx.isSelected(index) ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("span", _hoisted_5$7, [(0, import_vue.createElementVNode)(
            "span",
            null,
            (0, import_vue.toDisplayString)(_ctx.selectedMenuItemScreenReaderText) + "\xA0",
            1
            /* TEXT */
          )])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(
            (0, import_vue.toDisplayString)(item.label) + " ",
            1
            /* TEXT */
          ), item.iconRight ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_f_icon, { key: 1, name: item.iconRight }, null, 8, ["name"])) : (0, import_vue.createCommentVNode)("v-if", true)], 8, _hoisted_4$7)], 10, _hoisted_3$9);
        }),
        128
        /* KEYED_FRAGMENT */
      ))])], 8, _hoisted_1$f)]),
      _: 1
      /* STABLE */
    }, 8, ["is-open", "anchor", "focus-element", "onKeyup", "onKeydown"]);
  }
  var IPopupMenu = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h]]);
  var menuMoreKey = "MENU_MORE";
  function findOverflowIndex(totalWidth, elements) {
    let sum = 0;
    return elements.findIndex((element) => {
      sum += element.offsetWidth;
      return sum > totalWidth;
    });
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
    const itemsLength = target.items.length;
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
  var preventKeys$1 = ["Tab", "Up", "Down", "Left", "Right", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End", " ", "Spacebar", "Enter"];
  var _sfc_main$g = (0, import_vue.defineComponent)({ name: "IMenu", components: { FIcon }, props: {
    /**
    * The currently highlighted menu item key
    * @model
    */
    modelValue: { type: String, required: false, default: "" },
    /**
    * The items to be diplayed in the menu
    */
    items: { type: Array, required: true },
    /**
    * If true, show the menu vertically
    */
    vertical: { type: Boolean, required: false, default: false },
    /**
    * The key of the currently selected focused item
    */
    focusedItemKey: { type: String, required: false, default: "" },
    /**
    * If true, enable built-in keyboard navigation
    */
    enableKeyboardNavigation: { type: Boolean, required: false, default: false },
    /**
    * Text for selected item for screen reader
    */
    selectedMenuItemScreenReaderText: { type: String, required: false, default: "vald nu" },
    /**
    * If true, indicates that the menu "Mer/More" has selected items
    */
    hasMenuMoreSelectedItems: { type: Boolean, required: false, default: false }
  }, emits: ["overflow", "select", "update:modelValue"], data() {
    return { resizeObserver: void 0, currentFocusedItemIndex: 0, lastSelectedItem: "" };
  }, computed: { cssClasses() {
    return { "imenu--horizontal": !this.vertical, "imenu--vertical": this.vertical };
  } }, watch: { items: { deep: true, async handler() {
    await this.$nextTick();
    this.onResize();
  } }, focusedItemKey: { async handler(newVal) {
    if (this.enableKeyboardNavigation) {
      return;
    }
    const index = this.indexOfItemByKey(newVal);
    if (index >= 0) {
      await this.setFocusOnItem(index);
    } else {
      this.setFocusedItemIndex(0);
    }
  } }, modelValue: { async handler(newVal) {
    if (this.enableKeyboardNavigation) {
      return;
    }
    const index = this.indexOfItemByKey(newVal);
    if (index >= 0) {
      await this.activateItem(index);
    } else {
      this.setFocusedItemIndex(0);
    }
  } } }, mounted() {
    this.currentFocusedItemIndex = 0;
    if (!this.vertical) {
      this.resizeObserver = new ResizeObserver((0, import_logic.debounce)(this.onResize, 100));
      this.resizeObserver.observe(this.$el);
      this.onResize();
    }
  }, unmounted() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }, methods: { getAnchor(index) {
    return getSortedHTMLElementsFromVueRef(this.$refs.anchors)[index];
  }, getSelectedMenuItemScreenReaderText(index) {
    const menuMoreItem = this.items[index].key === menuMoreKey ? this.items[index] : null;
    if (menuMoreItem) {
      if (this.hasMenuMoreSelectedItems) {
        return menuMoreItem.srMenuMoreTextSelectedContents;
      } else {
        return menuMoreItem.srMenuMoreTextContents;
      }
    }
    return this.selectedMenuItemScreenReaderText;
  }, isSelected(index) {
    return this.items[index].key === this.modelValue;
  }, ariaHasPopup(index) {
    const item = this.items[index];
    return (item == null ? void 0 : item.ariaHasPopup) ? true : void 0;
  }, findItemByKey(key) {
    return this.items.find((it) => it.key === key);
  }, indexOfItemByKey(key) {
    const item = this.findItemByKey(key);
    if (!item) {
      return -1;
    }
    return this.items.indexOf(item);
  }, async onClickItem(item, doClick = false) {
    var _a;
    if (item.key === menuMoreKey || item.key !== this.lastSelectedItem) {
      this.$emit("update:modelValue", item.key);
      this.$emit("select", item.key);
      this.lastSelectedItem = item.key;
    }
    if (item.href && doClick) {
      (_a = this.getAnchor(this.items.indexOf(item))) == null ? void 0 : _a.click();
    }
  }, onResize() {
    const barElement = this.$el;
    if (!barElement) {
      return;
    }
    const barWidth = barElement.offsetWidth;
    const itemElements = getSortedHTMLElementsFromVueRef(this.$refs.items);
    const overflowIndex = findOverflowIndex(barWidth, itemElements);
    this.$emit("overflow", overflowIndex);
  }, cssClassHighlight(item) {
    return item.key === this.modelValue ? "imenu__list__item--highlight" : "";
  }, ccsClassHighlightAnchor(item) {
    return item.key === this.modelValue ? "imenu__list__anchor--highlight" : "";
  }, ccsClassHighlightAnchorContainer(item) {
    return item.key === this.modelValue ? "imenu__list__anchor-container--highlight" : "";
  }, async setFocusOnItem(index) {
    this.setFocusedItemIndex(index);
    await this.$nextTick();
    const itemAnchor = this.getAnchor(index);
    (0, import_logic.focus)(itemAnchor, { preventScroll: true });
  }, async activateItem(index) {
    await this.onClickItem(this.items[index], true);
  }, setFocusedItemIndex(index) {
    this.currentFocusedItemIndex = index;
  }, onKeyUp(event) {
    if (!this.enableKeyboardNavigation) {
      return;
    }
    if (preventKeys$1.includes(event.key)) {
      event.preventDefault();
    }
  }, async onKeyDown(event) {
    if (!this.enableKeyboardNavigation) {
      return;
    }
    const action = actionFromKeyboardEvent(event);
    if (action !== null) {
      event.preventDefault();
      await doMenuAction$1(action, this);
    }
  } } });
  var _hoisted_1$e = { class: "imenu__list", role: "menubar" };
  var _hoisted_2$a = ["data-ref-index", "onClick"];
  var _hoisted_3$8 = ["data-ref-index", "href", "target", "aria-haspopup"];
  var _hoisted_4$6 = { key: 0, class: "sr-only" };
  var _hoisted_5$6 = { key: 1, class: "imenu__list__anchor-span" };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "nav",
      { class: (0, import_vue.normalizeClass)(["imenu", _ctx.cssClasses]), "aria-label": "Navigeringsmeny", onKeyup: _cache[0] || (_cache[0] = (...args) => _ctx.onKeyUp && _ctx.onKeyUp(...args)), onKeydown: _cache[1] || (_cache[1] = (...args) => _ctx.onKeyDown && _ctx.onKeyDown(...args)) },
      [(0, import_vue.createElementVNode)("ul", _hoisted_1$e, [((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
        import_vue.Fragment,
        null,
        (0, import_vue.renderList)(_ctx.items, (item, index) => {
          return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("li", { ref_for: true, ref: "items", key: item.key, "data-ref-index": index, class: (0, import_vue.normalizeClass)(["imenu__list__item", _ctx.cssClassHighlight(item)]), role: "none", onClick: ($event) => _ctx.onClickItem(item) }, [(0, import_vue.createElementVNode)(
            "div",
            { class: (0, import_vue.normalizeClass)([_ctx.ccsClassHighlightAnchorContainer(item), "imenu__list__anchor-container"]) },
            [(0, import_vue.createElementVNode)("a", { ref_for: true, ref: "anchors", "data-ref-index": index, tabindex: "0", href: item.href, target: item.target, class: (0, import_vue.normalizeClass)(["imenu__list__anchor", _ctx.ccsClassHighlightAnchor(item)]), role: "menuitem", "aria-haspopup": _ctx.ariaHasPopup(index) }, [_ctx.isSelected(index) ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("span", _hoisted_4$6, [(0, import_vue.createElementVNode)(
              "span",
              null,
              (0, import_vue.toDisplayString)(_ctx.getSelectedMenuItemScreenReaderText(index)) + "\xA0",
              1
              /* TEXT */
            )])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(
              (0, import_vue.toDisplayString)(item.label),
              1
              /* TEXT */
            ), item.iconRight ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("span", _hoisted_5$6)) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), item.iconRight ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_f_icon, { key: 2, name: item.iconRight, class: "imenu__list__anchor-icon-right" }, null, 8, ["name"])) : (0, import_vue.createCommentVNode)("v-if", true)], 10, _hoisted_3$8)],
            2
            /* CLASS */
          )], 10, _hoisted_2$a);
        }),
        128
        /* KEYED_FRAGMENT */
      ))])],
      34
      /* CLASS, NEED_HYDRATION */
    );
  }
  var IMenu = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g]]);
  function calcOverflowIndexFromIndex(index) {
    return index === -1 ? -1 : index - 1;
  }
  function getNewItemIndexFromMenuAction(action, index, minIndex, maxIndex) {
    let newIndex;
    if (maxIndex <= minIndex) {
      return minIndex;
    }
    if (index >= maxIndex) {
      return maxIndex - 1;
    }
    switch (action) {
      case MenuAction.MOVE_NEXT:
        newIndex = (index + 1) % maxIndex;
        newIndex = Math.max(newIndex, minIndex);
        break;
      case MenuAction.MOVE_PREV:
        newIndex = index - 1;
        if (newIndex < minIndex) {
          newIndex = maxIndex - 1;
        }
        break;
      case MenuAction.MOVE_FIRST:
        newIndex = minIndex;
        break;
      case MenuAction.MOVE_LAST:
        newIndex = Math.max(maxIndex - 1, minIndex);
        break;
      default:
        newIndex = index;
    }
    return newIndex;
  }
  async function doMenuAction(action, target, minIndex, maxIndex) {
    const currentIndex = target.currentFocusedItemIndex;
    const newFocusedItemIndex = getNewItemIndexFromMenuAction(action, currentIndex, minIndex, maxIndex);
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
  var preventKeys = ["Tab", "Up", "Down", "Left", "Right", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End", " ", "Spacebar", "Enter", "Escape"];
  var keyUp = ["ArrowUp", "Up"];
  var keyDown = ["ArrowDown", "Down"];
  var arrowKeys = [...keyUp, ...keyDown];
  var _sfc_main$f = (0, import_vue.defineComponent)({ name: "FNavigationMenu", components: { IMenu, IPopupMenu }, mixins: [TranslationMixin], props: {
    /** Current route.
    * @model
    */
    route: { type: String, required: false, default: "" },
    /**
    * The route items to be diplayed in the menu
    */
    routes: { type: Array, required: true },
    /**
    * If true, show the menu vertically
    */
    vertical: { type: Boolean, required: false, default: false },
    /**
    * Screen reader text for selected item
    */
    selectedMenuItemScreenReaderText: { type: String, required: false, default: "" },
    /**
    * Screen reader text for the more menu item
    */
    menuMoreScreenReaderText: { type: String, required: false, default: "" },
    /**
    * Screen reader text for the more menu with selected items
    */
    menuMoreWithSelectedItemsScreenReaderText: { type: String, required: false, default: "" },
    /**
    * Unique accessible name for navigation landmark in menu.
    */
    menuAriaLabel: { type: String, required: false, default: "Navigeringsmeny" },
    /**
    * Unique accessible name for navigation landmark in popup.
    */
    popupAriaLabel: { type: String, required: false, default: "Popupmeny" }
  }, emits: [
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
  ], data() {
    return { overflowIndex: -1, ignoreNoOverflow: false, selectedMenuItemKey: "", selectedPopupItemKey: "", popupAnchor: this.$el, popupOpen: false, currentFocusedItemIndex: 0, focusedMenuItemKey: "", focusedPopupMenuItemKey: "", initPopupNavigationIndex: true };
  }, computed: { items() {
    return this.routes.map((i) => ({ label: i.label, key: i.route, href: i.href, target: i.target }));
  }, visibleItems() {
    if (this.overflowIndex > -1) {
      const visibleItems = this.items.slice(0, this.overflowIndex);
      visibleItems.push({ label: this.$t("fkui.navigation-menu.more-text", "Mer"), key: menuMoreKey, iconRight: "arrow-down", ariaHasPopup: true, srMenuMoreTextContents: this.menuMoreScreenReaderText, srMenuMoreTextSelectedContents: this.menuMoreWithSelectedItemsSrText() });
      return visibleItems;
    } else {
      return this.items;
    }
  }, popupItems() {
    return this.overflowIndex > -1 ? this.items.slice(this.overflowIndex) : [];
  }, hasPopupMenuSelectedItems() {
    return this.selectedPopupItemKey !== "";
  } }, watch: { route: { async handler(value) {
    const itemIndex = (0, import_logic.isSet)(value) ? this.indexOfItemByKey(this.items, value) : -1;
    if (itemIndex < 0) {
      await this.activateItem(-1);
      return;
    }
    const isWithinMoreMenu = !this.findItemByKey(this.visibleItems, value);
    if (isWithinMoreMenu) {
      const item = this.items[itemIndex];
      await this.activateInvisibleItem(item);
    } else {
      await this.activateItem(itemIndex);
    }
  }, immediate: true } }, mounted() {
    this.currentFocusedItemIndex = 0;
  }, methods: { selectedMenuItemSrText() {
    if (this.selectedMenuItemScreenReaderText === "") {
      return this.$t("fkui.navigation-menu.current-page", "Aktuell sida");
    } else {
      return this.selectedMenuItemScreenReaderText;
    }
  }, menuMoreWithSelectedItemsSrText() {
    if (this.menuMoreWithSelectedItemsScreenReaderText === "") {
      return this.$t("fkui.navigation-menu.more-selection", "underliggande vald nu");
    } else {
      return this.menuMoreWithSelectedItemsScreenReaderText;
    }
  }, findItemByKey(items, key) {
    return items.find((it) => it.key === key);
  }, indexOfItemByKey(items, key) {
    return items.findIndex((it) => it.key === key);
  }, async onOverflow(index) {
    const ignore = this.ignoreNoOverflow;
    const shouldReset = index === -1 && ignore;
    const shouldIgnore = index >= 0;
    if (shouldReset) {
      this.ignoreNoOverflow = false;
      return;
    }
    if (shouldIgnore) {
      this.ignoreNoOverflow = true;
    }
    this.updateOverflowIndex(index);
    await this.refreshSelectedItem();
    const shouldClosePopup = this.overflowIndex > -1 && !this.ignoreNoOverflow;
    if (shouldClosePopup) {
      await this.setPopupOpen(false);
    }
  }, async refreshSelectedItem() {
    const popupStatus = this.popupOpen;
    if (this.overflowIndex === -1) {
      if (this.visibleItems.some((i) => i.key === this.selectedPopupItemKey)) {
        this.selectedMenuItemKey = this.selectedPopupItemKey;
        this.selectedPopupItemKey = "";
      }
    } else {
      if (this.popupItems.some((i) => i.key === this.selectedMenuItemKey)) {
        var _ref3;
        this.selectedPopupItemKey = this.selectedMenuItemKey;
        const lastItem = this.visibleItems.at(-1);
        this.selectedMenuItemKey = (_ref3 = lastItem == null ? void 0 : lastItem.key) !== null && _ref3 !== void 0 ? _ref3 : "";
      }
    }
    await this.setPopupOpen(popupStatus);
  }, async doSelectItem(key) {
    if (key !== menuMoreKey) {
      this.$emit("update:route", key);
      this.$emit("selectedRoute", key);
    }
    let index = -1;
    if (this.hasOverflow()) {
      index = this.indexOfItemByKey(this.visibleItems, key);
      if (index === -1) {
        index = this.indexOfItemByKey(this.items, key);
      }
    } else {
      index = this.indexOfItemByKey(this.items, key);
    }
  }, async onSelectMenu(key) {
    await this.doSelectItem(key);
    if (key !== menuMoreKey) {
      if (this.findItemByKey(this.visibleItems, key) && this.selectedPopupItemKey !== "") {
        this.focusedPopupMenuItemKey = "";
        this.selectedPopupItemKey = "";
      }
    } else {
      const anchor = getHTMLElementFromVueRef(this.$refs.menu).querySelector("li:last-child");
      if (anchor) {
        this.popupAnchor = anchor;
      }
      await this.setPopupOpen(true);
    }
  }, async onSelectPopup(key) {
    await this.setPopupOpen(false);
    await this.doSelectItem(key);
  }, async onClosePopup() {
    await this.setPopupOpen(false);
  }, async setPopupOpen(value) {
    if (value) {
      this.focusedPopupMenuItemKey = "";
    } else {
      this.initPopupNavigationIndex = true;
    }
    this.popupOpen = value;
    await this.$nextTick();
  }, updateOverflowIndex(index) {
    this.overflowIndex = calcOverflowIndexFromIndex(index);
  }, onKeyUp(event) {
    if (preventKeys.includes(event.key)) {
      event.preventDefault();
    }
  }, doHandleMenuTabKey(action) {
    if (this.hasOverflow()) {
      if (action === MenuAction.MOVE_NEXT && this.currentFocusedItemIndex + 1 === this.visibleItems.length) {
        return true;
      }
      if (action === MenuAction.MOVE_PREV && this.currentFocusedItemIndex - 1 === -1) {
        return true;
      }
    } else {
      if (action === MenuAction.MOVE_NEXT && this.currentFocusedItemIndex + 1 === this.items.length) {
        return true;
      }
      if (action === MenuAction.MOVE_PREV && this.currentFocusedItemIndex - 1 === -1) {
        return true;
      }
    }
    return false;
  }, async doHandlePopupMenuTabKey(action) {
    if (action === MenuAction.MOVE_NEXT && this.currentFocusedItemIndex + 1 === this.items.length) {
      await this.setPopupOpen(false);
      return true;
    } else if (action === MenuAction.MOVE_NEXT && this.currentFocusedItemIndex === this.overflowIndex) {
      if (this.initPopupNavigationIndex) {
        this.initPopupNavigationIndex = !this.initPopupNavigationIndex;
        this.setCurrentFocusedItemIndex(this.overflowIndex - 1);
        return false;
      }
    } else if (action === MenuAction.MOVE_PREV && this.currentFocusedItemIndex === this.overflowIndex) {
      await this.setPopupOpen(false);
      this.setCurrentFocusedItemIndex(this.overflowIndex - 1);
      return false;
    }
    return false;
  }, setCurrentFocusedItemIndex(value) {
    this.currentFocusedItemIndex = value;
  }, doInitPopupNavigationIndex(event) {
    if (keyDown.includes(event.key) || event.key === "Tab") {
      this.setCurrentFocusedItemIndex(this.overflowIndex - 1);
    } else if (keyUp.includes(event.key)) {
      this.setCurrentFocusedItemIndex(this.items.length + 1);
    }
  }, async onKeyDown(event) {
    if (event.key === "Escape") {
      await this.setPopupOpen(false);
      return;
    }
    let action = actionFromKeyboardEvent(event);
    if (action === null) {
      return;
    }
    if (!this.popupOpen) {
      if (event.key === "Tab" && this.doHandleMenuTabKey(action)) {
        return;
      }
      event.preventDefault();
      await doMenuAction(action, this, 0, this.visibleItems.length);
    } else {
      if (event.key === "Tab" && await this.doHandlePopupMenuTabKey(action)) {
        return;
      }
      event.preventDefault();
      if (action === MenuAction.ACTIVATE && this.focusedPopupMenuItemKey === "") {
        action = null;
        await this.setPopupOpen(false);
        return;
      }
      if (this.initPopupNavigationIndex && arrowKeys.includes(event.key)) {
        this.initPopupNavigationIndex = !this.initPopupNavigationIndex;
        this.doInitPopupNavigationIndex(event);
      }
      await doMenuAction(action, this, this.overflowIndex, this.items.length);
    }
  }, async setFocusOnItem(index) {
    var _a, _b;
    this.setFocusedItemIndex(index);
    if (!this.hasOverflow() || !this.popupOpen && index <= this.overflowIndex) {
      this.setFocusedMenuItemKey(((_a = this.visibleItems[index]) == null ? void 0 : _a.key) || "");
    } else {
      await this.setFocusedPopupMenuItemKey(((_b = this.items[index]) == null ? void 0 : _b.key) || "");
    }
  }, hasOverflow() {
    return this.overflowIndex !== -1;
  }, async activateItem(index) {
    var _a, _b;
    if (!this.hasOverflow() || !this.popupOpen && index <= this.overflowIndex) {
      const key = ((_a = this.visibleItems[index]) == null ? void 0 : _a.key) || "";
      await this.setSelectedMenuItemKey(key);
      await this.onSelectMenu(key);
    } else {
      const key = ((_b = this.items[index]) == null ? void 0 : _b.key) || "";
      this.selectedPopupItemKey = key;
      await this.onSelectPopup(key);
    }
  }, async activateInvisibleItem(item) {
    await this.setSelectedMenuItemKey(menuMoreKey);
    await this.onSelectMenu(menuMoreKey);
    this.selectedPopupItemKey = item.key;
    await this.onSelectPopup(item.key);
    if (item.href) {
      const anchor = document.createElement("a");
      anchor.href = item.href;
      if (item.target) {
        anchor.target = item.target;
      }
      anchor.click();
    }
  }, setFocusedItemIndex(index) {
    if (index < 0) {
      return;
    }
    if (!this.popupOpen && this.hasOverflow() && index > this.overflowIndex) {
      this.setCurrentFocusedItemIndex(this.overflowIndex);
    } else {
      this.setCurrentFocusedItemIndex(index);
    }
  }, async setFocusedPopupMenuItemKey(key) {
    this.focusedPopupMenuItemKey = "";
    if (key !== "") {
      await this.$nextTick();
      this.focusedPopupMenuItemKey = key;
    }
  }, setFocusedMenuItemKey(key) {
    this.focusedMenuItemKey = key;
  }, async setSelectedMenuItemKey(key) {
    this.selectedMenuItemKey = "";
    if (key !== "") {
      await this.$nextTick();
      this.selectedMenuItemKey = key;
    }
  } } });
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_i_menu = (0, import_vue.resolveComponent)("i-menu");
    const _component_i_popup_menu = (0, import_vue.resolveComponent)("i-popup-menu");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", null, [(0, import_vue.createVNode)(_component_i_menu, { ref: "menu", modelValue: _ctx.selectedMenuItemKey, "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.selectedMenuItemKey = $event), items: _ctx.visibleItems, vertical: _ctx.vertical, "focused-item-key": _ctx.focusedMenuItemKey, "selected-menu-item-screen-reader-text": _ctx.selectedMenuItemSrText(), "has-menu-more-selected-items": _ctx.hasPopupMenuSelectedItems, "aria-label": _ctx.menuAriaLabel, onSelect: _ctx.onSelectMenu, onOverflow: _ctx.onOverflow, onKeyup: _ctx.onKeyUp, onKeydown: _ctx.onKeyDown }, null, 8, ["modelValue", "items", "vertical", "focused-item-key", "selected-menu-item-screen-reader-text", "has-menu-more-selected-items", "aria-label", "onSelect", "onOverflow", "onKeyup", "onKeydown"]), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_i_popup_menu, { ref: "popupMenu", modelValue: _ctx.selectedPopupItemKey, "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.selectedPopupItemKey = $event), "focused-item": _ctx.focusedPopupMenuItemKey, "onUpdate:focusedItem": _cache[2] || (_cache[2] = ($event) => _ctx.focusedPopupMenuItemKey = $event), items: _ctx.popupItems, "is-open": _ctx.popupOpen, anchor: _ctx.popupAnchor, "selected-menu-item-screen-reader-text": _ctx.selectedMenuItemSrText(), "aria-label": _ctx.popupAriaLabel, onSelect: _ctx.onSelectPopup, onClose: _ctx.onClosePopup, onKeyup: _ctx.onKeyUp, onKeydown: _ctx.onKeyDown }, null, 8, ["modelValue", "focused-item", "items", "is-open", "anchor", "selected-menu-item-screen-reader-text", "aria-label", "onSelect", "onClose", "onKeyup", "onKeydown"])]);
  }
  var FNavigationMenu = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f]]);
  var EVENTS = ["online", "offline"];
  var _sfc_main$e = (0, import_vue.defineComponent)({ name: "FOffline", components: { FIcon, IFlex, IFlexItem }, data() {
    return { isOnline: navigator.onLine || false, role: "none", shouldNotRead: true };
  }, created() {
    EVENTS.forEach((event) => {
      window.addEventListener(event, this.updateOnlineStatus);
    });
  }, beforeUnmount() {
    EVENTS.forEach((event) => {
      window.removeEventListener(event, this.updateOnlineStatus);
    });
  }, mounted() {
    document.body.prepend(getElementFromVueRef(this.$refs.offline));
  }, methods: { updateOnlineStatus(event) {
    switch (event.type) {
      case "online":
        this.shouldNotRead = false;
        this.isOnline = true;
        break;
      case "offline":
        this.shouldNotRead = true;
        this.isOnline = false;
        break;
      default:
        this.shouldNotRead = true;
        this.isOnline = false;
        break;
    }
    this.role = "alert";
  } } });
  var _hoisted_1$d = ["role"];
  var _hoisted_2$9 = { key: 0, class: "offline" };
  var _hoisted_3$7 = { class: "icon-stack icon-stack--error" };
  var _hoisted_4$5 = { class: "offline__content" };
  var _hoisted_5$5 = ["aria-hidden"];
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    const _component_i_flex_item = (0, import_vue.resolveComponent)("i-flex-item");
    const _component_i_flex = (0, import_vue.resolveComponent)("i-flex");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", { ref: "offline", class: "offline__wrapper", role: _ctx.role }, [!_ctx.isOnline ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_2$9, [(0, import_vue.createVNode)(_component_i_flex, { gap: "2x" }, {
      default: (0, import_vue.withCtx)(() => [(0, import_vue.createVNode)(_component_i_flex_item, { class: "offline__icon", shrink: "", align: "center" }, {
        default: (0, import_vue.withCtx)(() => [(0, import_vue.createElementVNode)("span", _hoisted_3$7, [(0, import_vue.createVNode)(_component_f_icon, { name: "triangle" }), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_icon, { name: "alert" })])]),
        _: 1
        /* STABLE */
      }), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_i_flex_item, { class: "offline_content", grow: "", align: "center" }, {
        default: (0, import_vue.withCtx)(() => [(0, import_vue.createElementVNode)("p", _hoisted_4$5, [(0, import_vue.renderSlot)(_ctx.$slots, "default", {}, () => [(0, import_vue.createTextVNode)(" Det verkar som att du inte har n\xE5gon internetuppkoppling just nu ")])])]),
        _: 3
        /* FORWARDED */
      })]),
      _: 3
      /* FORWARDED */
    })])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.withDirectives)((0, import_vue.createElementVNode)("span", { class: "sr-only", "aria-hidden": _ctx.shouldNotRead ? "true" : void 0 }, "\n            Din internetuppkoppling fungerar igen\n        ", 8, _hoisted_5$5), [[import_vue.vShow, _ctx.isOnline]])], 8, _hoisted_1$d);
  }
  var FOffline = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e]]);
  var _sfc_main$d = (0, import_vue.defineComponent)({ name: "FOutputField", components: { FLabel }, inheritAttrs: false, props: {
    /**
    * Associate the output field with one or more id's of the elements
    * contributing or affecting the result of this field. Multiple id's can
    * be set with a space-separated string or an array of strings.
    */
    for: { type: [String, Array], required: true },
    /**
    * The id for the output id attribute.
    * The id for the label for attribute.
    * If the prop is not set a random value will be generated.
    */
    id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() }
  }, computed: { htmlFor() {
    return Array.isArray(this.for) ? this.for.join(" ") : this.for;
  } } });
  var _hoisted_1$c = { class: "output-field" };
  var _hoisted_2$8 = ["id", "for"];
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_label = (0, import_vue.resolveComponent)("f-label");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_1$c, [(0, import_vue.createVNode)(_component_f_label, { for: _ctx.id }, (0, import_vue.createSlots)({
      default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "label")]),
      _: 2
      /* DYNAMIC */
    }, [_ctx.$slots.tooltip ? { name: "tooltip", fn: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "tooltip")]), key: "0" } : void 0]), 1032, ["for"]), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("output", (0, import_vue.mergeProps)({ id: _ctx.id, for: _ctx.htmlFor, class: "output-field__output" }, _ctx.$attrs), [(0, import_vue.renderSlot)(_ctx.$slots, "default")], 16, _hoisted_2$8)]);
  }
  var FOutputField = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
  var _sfc_main$c = (0, import_vue.defineComponent)({ name: "ISkipLink", mixins: [TranslationMixin], props: {
    /**
    * Target for skiplink.
    */
    href: { type: String, required: false, default: "main" }
  } });
  var _hoisted_1$b = ["href"];
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("a", { class: "iskiplink", href: _ctx.href }, [(0, import_vue.renderSlot)(_ctx.$slots, "default", {}, () => [(0, import_vue.createTextVNode)(
      (0, import_vue.toDisplayString)(_ctx.$t("fkui.skip-link.text", "G\xE5 direkt till inneh\xE5ll")),
      1
      /* TEXT */
    )])], 8, _hoisted_1$b);
  }
  var ISkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
  function getAltLogoText(hasRouterLink, routerLinkLabel, t) {
    const srStdLogoAltText = t("fkui.page-header.logo.alt-text", "F\xF6rs\xE4kringskassan");
    const srStdRouterLinkLabel = t("fkui.page-header.router.link.label", "g\xE5 till startsidan");
    if (hasRouterLink && routerLinkLabel !== "") {
      return `${srStdLogoAltText} ${routerLinkLabel}`;
    } else if (hasRouterLink) {
      return `${srStdLogoAltText}, ${srStdRouterLinkLabel}`;
    } else {
      return srStdLogoAltText;
    }
  }
  var _sfc_main$b = (0, import_vue.defineComponent)({ name: "FPageHeader", components: { ISkipLink }, mixins: [TranslationMixin], inheritAttrs: true, props: {
    /** Setting the logo sizes small, large or responsive. */
    logoSize: { type: String, default: "responsive", required: false, validator(value) {
      return ["small", "large", "responsive"].includes(value);
    } },
    /**
    * Render skiplink.
    *
    * When set to a non-empty string thethe skiplink feature is enabled.
    * The string is the id of the element to move focus to.
    *
    * When set to `true` the deprecated `skipLinkHref` prop is used to
    * set the element id to move focus to.
    *
    * When set to `false` or empty string the skiplink feature is disabled.
    *
    * Using a boolean is deprecated. Leave unset or a non-empty string.
    */
    skipLink: { type: [String, Boolean], required: false, default: "" },
    /**
    * Target for skiplink.
    *
    * @deprecated Use `skipLink` prop with a non-empty string instead.
    */
    skipLinkHref: { type: String, required: false, default: "#applicationlayout-main-content" },
    /**
    * HTML element type for header.
    */
    headerTag: { default: "span", required: false, validator(value) {
      return ["span", "h1"].includes(value);
    } },
    /**
    *  Target for router-link via path.
    *  (Behaviour from using both name and path in combination is undefined.)
    */
    routerLinkPath: { type: String, required: false, default: "" },
    /**
    *  Target for router-link via name.
    *  (Behaviour from using both name and path in combination is undefined.)
    */
    routerLinkName: { type: String, required: false, default: "" },
    /**
    *  Label to override the router-link label when router-link is present.
    */
    routerLinkLabel: { type: String, required: false, default: "" }
  }, computed: { logoClass() {
    return `page-header__logo--${this.logoSize}`;
  }, hasRouterLink() {
    return Boolean(this.routerLinkName || this.routerLinkPath);
  }, routerLinkTo() {
    const { routerLinkName, routerLinkPath } = this;
    if (routerLinkName) {
      return { name: routerLinkName };
    }
    if (routerLinkPath) {
      return { path: routerLinkPath };
    }
    return null;
  }, skipLinkAnchor() {
    const { skipLink, skipLinkHref } = this;
    if (skipLink === false || skipLink === "") {
      return null;
    } else if (skipLink === true) {
      return skipLinkHref;
    } else {
      return `#${skipLink}`;
    }
  }, altLogoText() {
    return getAltLogoText(this.hasRouterLink, this.routerLinkLabel, this.$t);
  } } });
  var _hoisted_1$a = { class: "page-header__root" };
  var _hoisted_2$7 = { key: 0 };
  var _hoisted_3$6 = { ref: "header", class: "page-header" };
  var _hoisted_4$4 = { class: "page-header__logo" };
  var _hoisted_5$4 = ["aria-label"];
  var _hoisted_6$4 = ["aria-label"];
  var _hoisted_7$3 = { class: "page-header__right" };
  var _hoisted_8$3 = { class: "page-header__right-slot" };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_i_skip_link = (0, import_vue.resolveComponent)("i-skip-link");
    const _component_router_link = (0, import_vue.resolveComponent)("router-link");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_1$a, [_ctx.skipLinkAnchor ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("nav", _hoisted_2$7, [(0, import_vue.createVNode)(_component_i_skip_link, { href: _ctx.skipLinkAnchor }, {
      default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "skip-link-text")]),
      _: 3
      /* FORWARDED */
    }, 8, ["href"])])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
      "div",
      _hoisted_3$6,
      [(0, import_vue.createElementVNode)("div", _hoisted_4$4, [(0, import_vue.renderSlot)(_ctx.$slots, "logo", {}, () => [_ctx.routerLinkTo ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_router_link, { key: 0, to: _ctx.routerLinkTo }, {
        default: (0, import_vue.withCtx)(() => [(0, import_vue.createElementVNode)("span", { class: (0, import_vue.normalizeClass)(_ctx.logoClass), "aria-label": _ctx.altLogoText, role: "img" }, null, 10, _hoisted_5$4)]),
        _: 1
        /* STABLE */
      }, 8, ["to"])) : ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("span", { key: 1, class: (0, import_vue.normalizeClass)(_ctx.logoClass), "aria-label": _ctx.altLogoText, role: "img" }, null, 10, _hoisted_6$4))])]), (0, import_vue.createTextVNode)(), ((0, import_vue.openBlock)(), (0, import_vue.createBlock)((0, import_vue.resolveDynamicComponent)(_ctx.headerTag), { class: "page-header__app-name" }, {
        default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "default")]),
        _: 3
        /* FORWARDED */
      })), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("div", _hoisted_7$3, [(0, import_vue.createElementVNode)("div", _hoisted_8$3, [(0, import_vue.renderSlot)(_ctx.$slots, "right")])])],
      512
      /* NEED_PATCH */
    )]);
  }
  var FPageHeader = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
  var MIN_VALUE = 0;
  var MAX_VALUE = 100;
  function clamp(val) {
    return Math.round(Math.min(Math.max(val || 0, MIN_VALUE), MAX_VALUE));
  }
  var _sfc_main$a = (0, import_vue.defineComponent)({ name: "FProgressbar", props: {
    /**
    * Sets the progress. Higher value indicates further progress. Value must be in range 0-100.
    */
    value: { type: Number, required: true, validator(value) {
      return value >= MIN_VALUE && value <= MAX_VALUE;
    } },
    /**
    * Text that the screenreader will read, the actual value will be replaced with %VALUE%  e.g  You have uploaded %VALUE% percent
    */
    valueText: { type: String, required: false, default: "Du har slutf\xF6rt %VALUE% %." },
    ariaLabel: { type: String, required: true }
  }, computed: { progressValueNow() {
    return clamp(this.value);
  }, isFinished() {
    return this.progressValueNow === MAX_VALUE;
  }, isInProgress() {
    return this.progressValueNow > MIN_VALUE && this.progressValueNow < MAX_VALUE;
  }, isPending() {
    return this.progressValueNow === MIN_VALUE;
  }, cssWidth() {
    return `width: ${this.progressValueNow}%`;
  }, progressBarClass() {
    return `${this.isInProgress ? "progress__meter--inprogress" : ""} ${this.isPending ? "progress__meter--pending" : ""} ${this.isFinished ? "progress__meter--finished" : ""}`;
  }, progressText() {
    return `${this.valueText.replace("%VALUE%", this.progressValueNow.toString())}`;
  } } });
  var _hoisted_1$9 = { class: "progress" };
  var _hoisted_2$6 = ["aria-label", "aria-valuenow", "aria-valuetext"];
  var _hoisted_3$5 = { class: "sr-only" };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_1$9, [(0, import_vue.createElementVNode)("span", { class: (0, import_vue.normalizeClass)(["progress__meter", _ctx.progressBarClass]), role: "progressbar", "aria-label": _ctx.ariaLabel, "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": _ctx.progressValueNow, "aria-valuetext": _ctx.progressText, style: (0, import_vue.normalizeStyle)(_ctx.cssWidth) }, [(0, import_vue.createElementVNode)(
      "span",
      _hoisted_3$5,
      (0, import_vue.toDisplayString)(_ctx.progressText),
      1
      /* TEXT */
    )], 14, _hoisted_2$6)]);
  }
  var FProgressbar = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
  var anyType = [String, Object, Array, Number, Date, Boolean];
  var _sfc_main$9 = (0, import_vue.defineComponent)({ name: "FRadioField", inheritAttrs: false, props: {
    /**
    * Set to `true`, empty string `""` or string `"disabled"` to disable this input field.
    */
    disabled: { type: Boolean, required: false, default: false },
    /**
    * The id for the input id attribute.
    * The id for the label for attribute.
    * If the prop is not set a random value will be generated.
    */
    id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() },
    /**
    * The value for the input checked attribute.
    * @model
    */
    // ? The rule is disabled so that the `checked` prop can be undefined or null.
    /* eslint-disable-next-line vue/require-default-prop -- technical debt,
        /* it should contain a default value of undefined and proptype should
        /* include undefined (see comment on line above) */
    modelValue: { type: anyType, required: false },
    /**
    * The value for the input.
    */
    value: { type: anyType, required: true }
  }, emits: ["change", "update:modelValue"], setup() {
    const { sharedName, showDetails, getFieldsetLabelText } = useFieldset();
    return { sharedName, showDetails, getFieldsetLabelText };
  }, data() {
    return { height: 0, initialStyle: { overflow: "hidden", transition: "height 400ms cubic-bezier(0.46, 0.03, 0.52, 0.96)" }, hiddenStyle: { height: "auto", position: "absolute", visibility: "hidden" }, visibleStyle: { width: "", position: "", visibility: "", height: "0px" }, openedStyle: { height: "auto" } };
  }, computed: { attrs() {
    var _this$sharedName;
    return { ...this.$attrs, value: this.value, checked: this.value === this.modelValue, name: (_this$sharedName = this.sharedName) !== null && _this$sharedName !== void 0 ? _this$sharedName : this.$attrs.name, onChange: (event) => {
      if (event.target instanceof HTMLInputElement) {
        this.$emit("update:modelValue", this.value);
        this.$emit("change", this.value);
      }
    }, onInput: (event) => {
      event.target.focus();
    } };
  }, disabledClass() {
    return this.disabled ? "disabled" : "";
  } }, methods: { async onValidity({ detail }) {
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
  var _hoisted_1$8 = ["id", "disabled"];
  var _hoisted_2$5 = ["for"];
  var _hoisted_3$4 = { key: 0, class: "radio-button__details" };
  var _hoisted_4$3 = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "br",
    null,
    null,
    -1
    /* HOISTED */
  );
  var _hoisted_5$3 = { key: 0, class: "radio-button__details" };
  var _hoisted_6$3 = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "br",
    null,
    null,
    -1
    /* HOISTED */
  );
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "div",
      { class: (0, import_vue.normalizeClass)(["radio-button", _ctx.disabledClass]), onValidity: _cache[0] || (_cache[0] = (...args) => _ctx.onValidity && _ctx.onValidity(...args)) },
      [(0, import_vue.createElementVNode)("input", (0, import_vue.mergeProps)({ id: _ctx.id, type: "radio", class: "radio-button__input", disabled: _ctx.disabled }, _ctx.attrs), null, 16, _hoisted_1$8), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("label", { class: (0, import_vue.normalizeClass)(_ctx.$slots.details ? "radio-button__label radio-button__width" : "radio-button__label"), for: _ctx.id }, [(0, import_vue.renderSlot)(_ctx.$slots, "default"), (0, import_vue.createTextVNode)(), _ctx.$slots.details ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
        import_vue.Fragment,
        { key: 0 },
        [_ctx.showDetails === "always" ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("span", _hoisted_3$4, [_hoisted_4$3, (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "details")])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), _ctx.showDetails === "when-selected" ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(import_vue.Transition, { key: 1, onEnter: _ctx.enter, onAfterEnter: _ctx.afterEnter, onLeave: _ctx.leave }, {
          default: (0, import_vue.withCtx)(() => [_ctx.value === _ctx.modelValue ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("span", _hoisted_5$3, [_hoisted_6$3, (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "details", { height: _ctx.height })])) : (0, import_vue.createCommentVNode)("v-if", true)]),
          _: 3
          /* FORWARDED */
        }, 8, ["onEnter", "onAfterEnter", "onLeave"])) : (0, import_vue.createCommentVNode)("v-if", true)],
        64
        /* STABLE_FRAGMENT */
      )) : (0, import_vue.createCommentVNode)("v-if", true)], 10, _hoisted_2$5)],
      34
      /* CLASS, NEED_HYDRATION */
    );
  }
  var FRadioField = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
  var _sfc_main$8 = (0, import_vue.defineComponent)({ name: "FRadioGroup", components: { FFieldset }, inheritAttrs: false, props: {
    /**
    * The id for the fieldset id attribute.
    * If the prop is not set the id will be generated.
    */
    id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() },
    /**
    * The name of the radio group.
    * The radio group fields in the group will use the same name.
    */
    name: { type: String, required: true },
    /**
    * If radio buttons should be aligned horizontally.
    * If the prop is not set the radio buttons will be aligned vertically.
    * Default: `false`
    */
    isHorizontal: { type: Boolean, required: false }
  } });
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_fieldset = (0, import_vue.resolveComponent)("f-fieldset");
    return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_f_fieldset, (0, import_vue.mergeProps)({ id: _ctx.id, name: _ctx.name }, _ctx.$attrs, { horizontal: _ctx.isHorizontal }), (0, import_vue.createSlots)({
      label: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "label")]),
      description: (0, import_vue.withCtx)(({ descriptionClass, discreteDescriptionClass }) => [(0, import_vue.renderSlot)(_ctx.$slots, "description", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ descriptionClass, discreteDescriptionClass })))]),
      "error-message": (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "error-message")]),
      default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "default", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ indentClass: "indent" })))]),
      _: 2
      /* DYNAMIC */
    }, [_ctx.$slots.tooltip ? { name: "tooltip", fn: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "tooltip")]), key: "0" } : void 0]), 1040, ["id", "name", "horizontal"]);
  }
  var FRadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
  var _sfc_main$7 = (0, import_vue.defineComponent)({ name: "FStaticField", components: { FLabel } });
  var _hoisted_1$7 = { class: "output-field" };
  var _hoisted_2$4 = { class: "output-field__output" };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_label = (0, import_vue.resolveComponent)("f-label");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_1$7, [(0, import_vue.createVNode)(
      _component_f_label,
      null,
      (0, import_vue.createSlots)({
        default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "label")]),
        description: (0, import_vue.withCtx)(({ descriptionClass, discreteDescriptionClass }) => [(0, import_vue.renderSlot)(_ctx.$slots, "description", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ descriptionClass, discreteDescriptionClass })))]),
        _: 2
        /* DYNAMIC */
      }, [_ctx.$slots.tooltip ? { name: "tooltip", fn: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "tooltip")]), key: "0" } : void 0]),
      1024
      /* DYNAMIC_SLOTS */
    ), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("p", _hoisted_2$4, [(0, import_vue.renderSlot)(_ctx.$slots, "default")])]);
  }
  var FStaticField = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
  var keybindings = Object.fromEntries([["Up", focusTrAbove], ["Down", focusTrBelow], ["ArrowUp", focusTrAbove], ["ArrowDown", focusTrBelow], [" ", activateRow], ["Spacebar", activateRow]]);
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
  function useExpandableTable(expandableAttribute, keyAttribute, describedby, emit, slots) {
    const expandedRows = (0, import_vue.ref)([]);
    const isExpandableTable = (0, import_vue.computed)(() => {
      return expandableAttribute.length > 0;
    });
    const hasExpandableSlot = (0, import_vue.computed)(() => {
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
  var _sfc_main$6 = (0, import_vue.defineComponent)({ name: "FInteractiveTable", components: { FCheckboxField, FIcon }, mixins: [TranslationMixin], provide() {
    return { addColumn: (column) => {
      this.columns = addColumn(this.columns, column);
    }, setVisibilityColumn: (id, visible) => {
      setVisibilityColumn(this.columns, id, visible);
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
    (0, import_vue.provide)("renderColumns", (0, import_vue.computed)(() => props.rows.length > 0));
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
  var _hoisted_1$6 = ["role"];
  var _hoisted_2$3 = { key: 0 };
  var _hoisted_3$3 = { key: 0, class: "table__column--shrink" };
  var _hoisted_4$2 = { key: 1, class: "table__column--shrink" };
  var _hoisted_5$2 = { class: "table__row" };
  var _hoisted_6$2 = { key: 0, scope: "col" };
  var _hoisted_7$2 = { class: "sr-only" };
  var _hoisted_8$2 = { key: 1, scope: "col" };
  var _hoisted_9$2 = { class: "sr-only" };
  var _hoisted_10$2 = ["innerHTML"];
  var _hoisted_11$1 = { key: 1, class: "table__column__description" };
  var _hoisted_12$1 = { ref: "tbodyElement" };
  var _hoisted_13$1 = ["aria-label", "aria-expanded", "aria-level", "aria-describedby", "onKeydown", "onClick"];
  var _hoisted_14$1 = { key: 0 };
  var _hoisted_15$1 = { key: 0, class: "table__expand-icon" };
  var _hoisted_16 = { key: 1, class: "table__column--selectable" };
  var _hoisted_17 = { class: "table__input" };
  var _hoisted_18 = { key: 0, class: "sr-only" };
  var _hoisted_19 = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "td",
    null,
    null,
    -1
    /* HOISTED */
  );
  var _hoisted_20 = { key: 0, class: "table__column--selectable" };
  var _hoisted_21 = ["colspan"];
  var _hoisted_22 = { key: 0 };
  var _hoisted_23 = { key: 1 };
  var _hoisted_24 = ["colspan"];
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    const _component_f_checkbox_field = (0, import_vue.resolveComponent)("f-checkbox-field");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "div",
      { class: (0, import_vue.normalizeClass)(_ctx.wrapperClasses) },
      [(0, import_vue.createElementVNode)("table", (0, import_vue.mergeProps)({ class: ["table", _ctx.tableClasses], role: _ctx.tableRole }, _ctx.$attrs), [_ctx.hasCaption ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("caption", _hoisted_2$3, [(0, import_vue.renderSlot)(_ctx.$slots, "caption")])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("colgroup", null, [_ctx.isExpandableTable ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("col", _hoisted_3$3)) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), _ctx.selectable ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("col", _hoisted_4$2)) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
        import_vue.Fragment,
        null,
        (0, import_vue.renderList)(_ctx.columns, (column) => {
          return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
            "col",
            { key: column.id, class: (0, import_vue.normalizeClass)(column.size) },
            null,
            2
            /* CLASS */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      ))]), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("thead", null, [(0, import_vue.createElementVNode)("tr", _hoisted_5$2, [_ctx.isExpandableTable ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("th", _hoisted_6$2, [(0, import_vue.createElementVNode)(
        "span",
        _hoisted_7$2,
        (0, import_vue.toDisplayString)(_ctx.$t("fkui.interactive-table.select", "Expandera")),
        1
        /* TEXT */
      )])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), _ctx.selectable ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("th", _hoisted_8$2, [(0, import_vue.createElementVNode)(
        "span",
        _hoisted_9$2,
        (0, import_vue.toDisplayString)(_ctx.$t("fkui.interactive-table.select", "Markera")),
        1
        /* TEXT */
      )])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
        import_vue.Fragment,
        null,
        (0, import_vue.renderList)(_ctx.visibleColumns, (column) => {
          return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
            "th",
            (0, import_vue.mergeProps)({ key: column.id, scope: "col", class: _ctx.columnClasses(column) }, (0, import_vue.toHandlers)(column.sortable ? { click: () => _ctx.onClickColumnHeader(column) } : {}, true)),
            [(0, import_vue.createElementVNode)("span", { innerHTML: _ctx.escapeNewlines(column.title) }, null, 8, _hoisted_10$2), (0, import_vue.createTextVNode)(), column.sortable ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_f_icon, { key: 0, class: (0, import_vue.normalizeClass)(_ctx.iconClasses(column)), name: _ctx.iconName(column) }, null, 8, ["class", "name"])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), column.description ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
              "span",
              _hoisted_11$1,
              (0, import_vue.toDisplayString)(column.description),
              1
              /* TEXT */
            )) : (0, import_vue.createCommentVNode)("v-if", true)],
            16
            /* FULL_PROPS */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      ))])]), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
        "tbody",
        _hoisted_12$1,
        [((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
          import_vue.Fragment,
          null,
          (0, import_vue.renderList)(_ctx.rows, (row, index) => {
            return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
              import_vue.Fragment,
              { key: _ctx.rowKey(row) },
              [(0, import_vue.createElementVNode)("tr", { class: (0, import_vue.normalizeClass)(_ctx.rowClasses(row, index)), "aria-label": _ctx.rowDescription(row), "aria-expanded": _ctx.rowAriaExpanded(row), "aria-level": _ctx.isExpandableTable ? 1 : void 0, "aria-describedby": _ctx.getExpandableDescribedby(row), tabindex: "0", onKeydown: (0, import_vue.withModifiers)(($event) => _ctx.onKeydown($event, index), ["self"]), onClick: ($event) => _ctx.onClick($event, row, index) }, [_ctx.isExpandableTable ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("td", _hoisted_14$1, [_ctx.hasExpandableContent(row) ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_15$1, [(0, import_vue.createVNode)(_component_f_icon, { name: "arrow-right", rotate: _ctx.isExpanded(row) ? "270" : "90" }, null, 8, ["rotate"])])) : (0, import_vue.createCommentVNode)("v-if", true)])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), _ctx.selectable ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("td", _hoisted_16, [(0, import_vue.createElementVNode)("div", _hoisted_17, [(0, import_vue.createVNode)(_component_f_checkbox_field, { value: true, "model-value": _ctx.isSelected(row), onClick: (0, import_vue.withModifiers)(($event) => _ctx.onSelect(row), ["self"]) }, {
                default: (0, import_vue.withCtx)(() => [_ctx.hasCheckboxDescription ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("span", _hoisted_18, [(0, import_vue.renderSlot)(_ctx.$slots, "checkbox-description", (0, import_vue.mergeProps)({ ref_for: true }, { row }))])) : (0, import_vue.createCommentVNode)("v-if", true)]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["model-value", "onClick"])])])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.renderSlot)(_ctx.$slots, "default", (0, import_vue.mergeProps)({ ref_for: true }, { row }))], 42, _hoisted_13$1), (0, import_vue.createTextVNode)(), _ctx.isExpandableTable && _ctx.hasExpandableContent(row) ? ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                import_vue.Fragment,
                { key: 0 },
                (0, import_vue.renderList)(_ctx.expandableRows(row), (expandableRow, expandableIndex) => {
                  return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                    "tr",
                    { key: _ctx.rowKey(expandableRow), "aria-level": "2", class: (0, import_vue.normalizeClass)(_ctx.expandableRowClasses(row, expandableIndex)) },
                    [_hoisted_19, (0, import_vue.createTextVNode)(), _ctx.selectable ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("td", _hoisted_20)) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), !_ctx.hasExpandableSlot ? ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
                      import_vue.Fragment,
                      { key: 1 },
                      (0, import_vue.renderList)(_ctx.columns, (column, columnIndex) => {
                        return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                          "td",
                          { key: `${_ctx.rowKey(expandableRow)}${column.name}`, class: (0, import_vue.normalizeClass)(_ctx.expandableColumnClasses(column, columnIndex)) },
                          (0, import_vue.toDisplayString)(expandableRow[column.name]),
                          3
                          /* TEXT, CLASS */
                        );
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    )) : ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("td", { key: 2, class: "table__column table__column--indented", colspan: _ctx.columns.length }, [(0, import_vue.renderSlot)(_ctx.$slots, "expandable", (0, import_vue.mergeProps)({ ref_for: true }, { expandableRow, parentRow: row }))], 8, _hoisted_21))],
                    2
                    /* CLASS */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              )) : (0, import_vue.createCommentVNode)("v-if", true)],
              64
              /* STABLE_FRAGMENT */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        )), (0, import_vue.createTextVNode)(), _ctx.isEmpty && _ctx.columns.length === 0 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("tr", _hoisted_22, [(0, import_vue.renderSlot)(_ctx.$slots, "default", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ row: {} })))])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), _ctx.isEmpty ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("tr", _hoisted_23, [(0, import_vue.createElementVNode)("td", { class: "table__column table__column--action", colspan: _ctx.nbOfColumns }, [(0, import_vue.renderSlot)(_ctx.$slots, "empty", {}, () => [(0, import_vue.createTextVNode)(
          (0, import_vue.toDisplayString)(_ctx.$t("fkui.interactive-table.empty", "Tabellen \xE4r tom")),
          1
          /* TEXT */
        )])], 8, _hoisted_24)])) : (0, import_vue.createCommentVNode)("v-if", true)],
        512
        /* NEED_PATCH */
      )], 16, _hoisted_1$6)],
      2
      /* CLASS */
    );
  }
  var FInteractiveTable = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
  var _sfc_main$5 = (0, import_vue.defineComponent)({ name: "FTextareaField", components: { FLabel }, inheritAttrs: false, props: {
    /**
    * The id for the input id attribute.
    * The id for the label for attribute.
    * If the prop is not set a random value will be generated.
    */
    id: { type: String, required: false, default: () => import_logic.ElementIdService.generateElementId() },
    /**
    * The value for the input.
    * If the prop is not set undefined will be used.
    * @model
    */
    modelValue: { type: String, required: false, default: void 0 },
    /**
    * The number of characters for when the "characters left" warning should be shown.
    * A value of 100 means that when 100 or less characters is left the warning is shown.
    * If softLimit is used, then maxlength is required.
    * If the prop is not set undefined will be used, which means that no warning will be shown.
    */
    softLimit: { type: Number, required: false, default: void 0 },
    /**
    * The maximum amount of characters permitted in the textarea.
    * If the prop is not set undefined will be used, which means unlimited.
    */
    maxlength: { type: Number, required: false, default: void 0 },
    /**
    * The string that should be shown in the "characters left" warning.
    * Must contain the word %charactersLeft% which is used to interpolate the number of characters left into the warning string.
    * If the prop is not set "Antal tecken kvar: %charactersLeft%" will be used.
    */
    charactersLeftWarning: { type: String, required: false, default: "Antal tecken kvar: %charactersLeft%" },
    /**
    * Specifies that the component should be disabled, i.e. unusable.
    */
    disabled: { type: Boolean, default: false },
    /**
    * Enabling vertical resizing of the textarea
    */
    resizable: { type: Boolean, default: false }
  }, emits: ["input", "update:modelValue"], data() {
    return { validityMode: "INITIAL", validationMessage: "" };
  }, computed: { attrs() {
    return { rows: 4, ...this.$attrs, value: this.modelValue, maxlength: this.maxlength };
  }, isValid() {
    return this.validityMode === "VALID";
  }, hasError() {
    return this.validityMode === "ERROR";
  }, validityClass() {
    return { ["textarea-field--error"]: this.hasError };
  }, charactersLeft() {
    if (this.modelValue) {
      return this.maxlength - this.modelValue.length;
    } else {
      return this.maxlength;
    }
  }, showCharactersLeftWarning() {
    return (0, import_logic.isSet)(this.softLimit) && (0, import_logic.isSet)(this.modelValue) && // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- required when `softLimit`
    this.modelValue.length >= this.maxlength - this.softLimit;
  }, charactersLeftWarningInterpolated() {
    return `${this.charactersLeftWarning.replace("%charactersLeft%", this.charactersLeft.toString())}`;
  }, textareaClass() {
    const classes = ["textarea-field__textarea"];
    if (this.resizable) {
      classes.push("textarea-field__resize--vertical");
    } else {
      classes.push("textarea-field__resize--none");
    }
    return classes;
  } }, mounted() {
    if ((0, import_logic.isSet)(this.softLimit) && !(0, import_logic.isSet)(this.maxlength)) {
      throw new Error("You must pass a maxlength");
    }
  }, methods: { onInput(event) {
    if (event.target instanceof HTMLTextAreaElement) {
      this.$emit("update:modelValue", event.target.value);
      this.$emit("input", event.target.value);
    }
  }, onValidity({ detail }) {
    var _renderSlotText7;
    this.validationMessage = detail.validationMessage;
    this.validityMode = detail.validityMode;
    const errorMessage = (_renderSlotText7 = renderSlotText(this.$slots.default)) !== null && _renderSlotText7 !== void 0 ? _renderSlotText7 : "";
    const element = this.$el.querySelector(`#${detail.elementId}`);
    if (element) {
      dispatchComponentValidityEvent(element, { ...detail, errorMessage, focusElementId: detail.elementId });
    }
  }, onPendingValidity() {
    this.validityMode = "INITIAL";
  } } });
  var _hoisted_1$5 = ["id", "disabled"];
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_label = (0, import_vue.resolveComponent)("f-label");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "div",
      { class: (0, import_vue.normalizeClass)(["textarea-field", _ctx.validityClass]) },
      [(0, import_vue.createVNode)(_component_f_label, { for: _ctx.id }, (0, import_vue.createSlots)({
        default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "default")]),
        description: (0, import_vue.withCtx)(({ descriptionClass, discreteDescriptionClass }) => [(0, import_vue.renderSlot)(_ctx.$slots, "description", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ descriptionClass, discreteDescriptionClass })))]),
        "error-message": (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "error-message", (0, import_vue.normalizeProps)((0, import_vue.guardReactiveProps)({ hasError: _ctx.hasError, validationMessage: _ctx.validationMessage })), () => [_ctx.hasError ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
          import_vue.Fragment,
          { key: 0 },
          [(0, import_vue.createTextVNode)(
            (0, import_vue.toDisplayString)(_ctx.validationMessage),
            1
            /* TEXT */
          )],
          64
          /* STABLE_FRAGMENT */
        )) : (0, import_vue.createCommentVNode)("v-if", true)])]),
        _: 2
        /* DYNAMIC */
      }, [_ctx.$slots.tooltip ? { name: "tooltip", fn: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "tooltip")]), key: "0" } : void 0]), 1032, ["for"]), (0, import_vue.createTextVNode)(), _ctx.softLimit ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_f_label, { key: 0, for: _ctx.id, "aria-live": "polite" }, {
        description: (0, import_vue.withCtx)(({ descriptionClass }) => [_ctx.showCharactersLeftWarning ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
          "span",
          { key: 0, class: (0, import_vue.normalizeClass)(descriptionClass) },
          (0, import_vue.toDisplayString)(_ctx.charactersLeftWarningInterpolated),
          3
          /* TEXT, CLASS */
        )) : (0, import_vue.createCommentVNode)("v-if", true)]),
        _: 1
        /* STABLE */
      }, 8, ["for"])) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("textarea", (0, import_vue.mergeProps)({ id: _ctx.id, class: _ctx.textareaClass }, _ctx.attrs, { disabled: _ctx.disabled, onInput: _cache[0] || (_cache[0] = (...args) => _ctx.onInput && _ctx.onInput(...args)), onValidity: _cache[1] || (_cache[1] = (...args) => _ctx.onValidity && _ctx.onValidity(...args)), onPendingValidity: _cache[2] || (_cache[2] = (...args) => _ctx.onPendingValidity && _ctx.onPendingValidity(...args)) }), null, 16, _hoisted_1$5)],
      2
      /* CLASS */
    );
  }
  var FTextareaField = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
  var ANIMATION_DURATION = 500;
  var NO_CSS_CLASSES = "";
  var CLOSED_CSS_CLASS_OPACITY = "animate-expand animate-expand--opacity";
  var CLOSED_CSS_CLASS = "animate-expand";
  var ANIMATION_CSS_CLASSES = "animate-expand animate-expand--expanded";
  var _sfc_main$4 = (0, import_vue.defineComponent)({ name: "IAnimateExpand", props: {
    /**
    * Perform animation or not
    */
    animate: { type: Boolean, default: true },
    /**
    * Use v-show instead of v-if when hiding content.
    */
    useVShow: { type: Boolean, default: false },
    /**
    * Toggle expanded/collapsed state
    */
    expanded: { type: [String, Number, Boolean], default: true },
    /* Toggle opacity in animation */
    opacity: { type: Boolean, default: true },
    /**
    * Optional callback for performing actions before animation.
    * Callback will await Promise.
    */
    beforeAnimation: { type: Function, required: false, default() {
      return () => {
      };
    } },
    /**
    * Optional callback for performing actions after animation.
    * Callback will await Promise.
    */
    afterAnimation: { type: Function, required: false, default() {
      return () => {
      };
    } }
  }, data() {
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
  }, computed: { animationClasses() {
    if (!this.animate) {
      return "";
    }
    return this.cssClasses;
  }, heightStyle() {
    return this.height === "" ? "" : `height: ${this.height}px`;
  }, shouldVIf() {
    if (this.useVShow) {
      return true;
    } else {
      return this.internalExpanded;
    }
  }, shouldVShow() {
    if (this.useVShow) {
      return this.internalExpanded;
    } else {
      return true;
    }
  } }, watch: { expanded: { immediate: false, handler() {
    if (this.expanded && this.animate) {
      this.openAnimation();
    } else if (this.expanded) {
      this.openNoAnimation();
    } else if (this.animate) {
      this.closeAnimation();
    } else {
      this.closeNoAnimation();
    }
  } } }, beforeMount() {
    if (this.expanded) {
      this.height = "";
    } else if (this.animate) {
      this.cssClasses = this.opacity ? CLOSED_CSS_CLASS_OPACITY : CLOSED_CSS_CLASS;
    }
  }, methods: { getContentHeight() {
    const content = this.$refs.content;
    return content ? content.getBoundingClientRect().height : 0;
  }, async openNoAnimation() {
    await this.beforeAnimation(true);
    this.internalExpanded = true;
    await this.$nextTick();
    this.cssClasses = NO_CSS_CLASSES;
    this.height = this.getContentHeight();
    await this.afterAnimation(true);
  }, async closeNoAnimation() {
    await this.beforeAnimation(false);
    this.internalExpanded = false;
    this.cssClasses = NO_CSS_CLASSES;
    this.height = "0";
    await this.$nextTick();
    await this.afterAnimation(false);
  }, async openAnimation() {
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
  }, async closeAnimation() {
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
  } } });
  var _hoisted_1$4 = { key: 0, ref: "content", "data-test": "animation-content" };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
      "div",
      { class: (0, import_vue.normalizeClass)(_ctx.animationClasses), style: (0, import_vue.normalizeStyle)(_ctx.heightStyle) },
      [_ctx.shouldVIf ? (0, import_vue.withDirectives)(((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
        "div",
        _hoisted_1$4,
        [(0, import_vue.renderSlot)(_ctx.$slots, "default")],
        512
        /* NEED_PATCH */
      )), [[import_vue.vShow, _ctx.shouldVShow]]) : (0, import_vue.createCommentVNode)("v-if", true)],
      6
      /* CLASS, STYLE */
    );
  }
  var IAnimateExpand = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
  var _sfc_main$3 = (0, import_vue.defineComponent)({ name: "FTooltip", components: { FExpand, FIcon, IFlex, IFlexItem }, props: {
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
    closeButtonText: { type: String, required: false, default: import_logic.TranslationService.provider.translate("fkui.tooltip.close", "St\xE4ng") },
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
        (0, import_logic.focus)(button);
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
  var _hoisted_1$3 = { class: "tooltip" };
  var _hoisted_2$2 = { class: "tooltip__container" };
  var _hoisted_3$2 = ["aria-expanded"];
  var _hoisted_4$1 = { class: "icon-stack icon-stack--tooltip" };
  var _hoisted_5$1 = { class: "sr-only" };
  var _hoisted_6$1 = { key: 0 };
  var _hoisted_7$1 = ["aria-hidden"];
  var _hoisted_8$1 = { class: "tooltip__arrow" };
  var _hoisted_9$1 = { class: "tooltip__content" };
  var _hoisted_10$1 = { class: "tooltip__body" };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    const _component_i_flex_item = (0, import_vue.resolveComponent)("i-flex-item");
    const _component_i_flex = (0, import_vue.resolveComponent)("i-flex");
    const _component_f_expand = (0, import_vue.resolveComponent)("f-expand");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_1$3, [(0, import_vue.createElementVNode)("div", _hoisted_2$2, [(0, import_vue.createElementVNode)("button", { class: "tooltip__button", type: "button", "aria-expanded": _ctx.isOpen ? "true" : "false", onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickToggle && _ctx.onClickToggle(...args)) }, [(0, import_vue.createElementVNode)("span", _hoisted_4$1, [(0, import_vue.createVNode)(_component_f_icon, { name: "circle" }), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_icon, { name: "i" }), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
      "span",
      _hoisted_5$1,
      (0, import_vue.toDisplayString)(_ctx.screenReaderText),
      1
      /* TEXT */
    )])], 8, _hoisted_3$2), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_expand, null, {
      default: (0, import_vue.withCtx)(() => [_ctx.isOpen ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_6$1, [(0, import_vue.createElementVNode)("div", { class: "tooltip__content-wrapper", tabindex: "-1", "aria-hidden": _ctx.isOpen ? void 0 : "true" }, [(0, import_vue.withDirectives)((0, import_vue.createElementVNode)(
        "span",
        _hoisted_8$1,
        null,
        512
        /* NEED_PATCH */
      ), [[import_vue.vShow, _ctx.isOpen]]), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("div", _hoisted_9$1, [_ctx.hasHeader ? ((0, import_vue.openBlock)(), (0, import_vue.createBlock)((0, import_vue.resolveDynamicComponent)(_ctx.headerTag), { key: 0, class: "tooltip__header" }, {
        default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "header")]),
        _: 3
        /* FORWARDED */
      })) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("div", _hoisted_10$1, [(0, import_vue.renderSlot)(_ctx.$slots, "body")])]), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_i_flex, { float: "right" }, {
        default: (0, import_vue.withCtx)(() => [(0, import_vue.createVNode)(_component_i_flex_item, { shrink: "" }, {
          default: (0, import_vue.withCtx)(() => [(0, import_vue.createElementVNode)("button", { class: "close-button", type: "button", onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onClickToggle && _ctx.onClickToggle(...args)) }, [(0, import_vue.createElementVNode)(
            "span",
            null,
            (0, import_vue.toDisplayString)(_ctx.closeButtonText),
            1
            /* TEXT */
          ), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_icon, { class: "button__icon", name: "close" })])]),
          _: 1
          /* STABLE */
        })]),
        _: 1
        /* STABLE */
      })], 8, _hoisted_7$1)])) : (0, import_vue.createCommentVNode)("v-if", true)]),
      _: 3
      /* FORWARDED */
    })])]);
  }
  var FTooltip = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
  function FWizardApiInjected() {
    return { register: (0, import_vue.inject)("register"), unregister: (0, import_vue.inject)("unregister"), getStepCount: (0, import_vue.inject)("getStepCount"), openStep: (0, import_vue.inject)("openStep"), openNext: (0, import_vue.inject)("openNext"), cancel: (0, import_vue.inject)("cancel"), inheritedProps: (0, import_vue.inject)("inheritedProps") };
  }
  function reindex(dst) {
    dst.sort((a, b) => (0, import_logic.documentOrderComparator)(a.element, b.element));
    for (let i = 0; i < dst.length; i++) {
      dst[i].stepNumber = i + 1;
    }
  }
  function addStep(dst, key, element) {
    const index = dst.findIndex((it) => it.key === key);
    if (index >= 0) {
      throw new Error(`An FWizardStep with key "${key.toString()}" is already registered, refusing to register multiple steps with same key.`);
    }
    const step = { key, element, stepNumber: -1, isOpen: false, currentOpen: -1 };
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
  var _sfc_main$2 = (0, import_vue.defineComponent)({ name: "FWizard", provide() {
    const wizard = this;
    const inheritedProps = { get headerTag() {
      return wizard.headerTag;
    }, get disableInitialFocus() {
      return wizard.disableInitialFocus;
    } };
    return { register: this.register, unregister: this.unregister, getStepCount: this.getStepCount, openStep: this.openStep, openNext: this.openNext, cancel: this.cancel, inheritedProps };
  }, inheritAttrs: true, props: {
    modelValue: { type: String, default: null },
    /**
    * Element to render for the header element inside the wizard steps.
    */
    headerTag: { type: String, required: true, validator(value) {
      return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
    } },
    /**
    * When the first wizard step is registered, it is opened and focused by default.
    * Set this property to disable that behaviour.
    */
    disableInitialFocus: { type: Boolean, required: false, default: false }
  }, emits: ["cancel", "change", "completed", "update:modelValue"], data() {
    return { steps: [] };
  }, computed: { anyOpen() {
    return Boolean(this.getCurrentOpen());
  } }, watch: { modelValue: { handler() {
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
  } } }, methods: { register(key, element) {
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
  }, unregister(key) {
    removeStep(this.steps, key);
  }, getStepCount() {
    return this.steps.length;
  }, getCurrentOpen() {
    var _this$steps$find;
    return (_this$steps$find = this.steps.find((it) => it.isOpen)) !== null && _this$steps$find !== void 0 ? _this$steps$find : null;
  }, openStep(step) {
    this.doOpen(step.stepNumber);
  }, async openNext(step) {
    const current = step.stepNumber;
    const next = current + 1;
    if (next > this.steps.length) {
      await this.doOpen(-1);
      this.$emit("completed");
    } else {
      await this.doOpen(next);
    }
  }, async doOpen(open) {
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
      this.$emit("change", step.key);
    } else {
      this.$emit("update:modelValue", null);
      this.$emit("change", null);
    }
  }, cancel() {
    this.$emit("cancel");
  } } });
  var _hoisted_1$2 = { class: "wizard" };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_1$2, [(0, import_vue.renderSlot)(_ctx.$slots, "default")]);
  }
  var FWizard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
  var SCROLL_DURATION = 500;
  var ongoingScrollPromise = void 0;
  var _sfc_main$1 = (0, import_vue.defineComponent)({ name: "FWizardStep", components: { IAnimateExpand, IFlex, IFlexItem, FValidationForm, FIcon }, mixins: [TranslationMixin], inheritAttrs: true, props: {
    title: { type: String, required: true },
    /**
    * Supply this function in order to run actions before navigating to the next step.
    *
    * It is possible to cancel the navigation by returning `BeforeNextAction.CANCEL`.
    * When cancelled, the consumer is responsible to indicate why this happened.
    *
    * Note that `FWizardStep` already checks validity of contained fields using `v-validation`
    * before allowing navigation to the next step.
    */
    beforeNext: { type: Function, required: false, default() {
    } },
    /**
    * Supply this function in order to run actions before `FWizardStep` checks validity.
    *
    * `beforeValidation` is used by {@link FValidationForm}.
    *
    * It is possible to cancel the navigation by returning `BeforeNextAction.CANCEL`.
    * When cancelled, the consumer is responsible to indicate why this happened.
    */
    beforeValidation: { type: Function, required: false, default() {
    } },
    /**
    * Include the error list component.
    */
    useErrorList: { type: Boolean, required: false, default: true }
  }, setup() {
    return FWizardApiInjected();
  }, data() {
    return { step: {}, validity: { isValid: true, componentsWithError: [], componentCount: 0 }, isOpenedFirstTime: true, ignoreClick: false };
  }, computed: { defaultCurrentStepInformation() {
    return this.$t("fkui.wizard-step.current-step", `Steg {{ stepNumber }} av {{ totalSteps }}`, { stepNumber: this.stepNumber, totalSteps: this.totalSteps });
  }, formId() {
    return `${String(this.step.key)}-form`;
  }, animationId() {
    return `${String(this.step.key)}-animation`;
  }, isOpen() {
    return this.step.isOpen;
  }, isPending() {
    const { currentOpen, stepNumber } = this.step;
    return currentOpen >= 0 && currentOpen < stepNumber;
  }, isFinalStep() {
    return this.stepNumber === this.totalSteps;
  }, showLink() {
    return !this.isOpen && !this.isPending;
  }, stepNumber() {
    return this.step.stepNumber;
  }, totalSteps() {
    return this.getStepCount();
  }, cssClass() {
    if (this.isOpen) {
      return "wizard-step--open";
    }
    if (this.isPending) {
      return "wizard-step--pending";
    }
    return "wizard-step--done";
  } }, mounted() {
    var _a, _b;
    const key = (_b = (_a = (0, import_vue.getCurrentInstance)()) == null ? void 0 : _a.vnode) == null ? void 0 : _b.key;
    if (!key) {
      throw new Error("FWizardStep requires key to be set");
    }
    this.step = this.register(key, this.$el);
  }, beforeUnmount() {
    var _a, _b;
    const key = (_b = (_a = (0, import_vue.getCurrentInstance)()) == null ? void 0 : _a.vnode) == null ? void 0 : _b.key;
    if (key) {
      this.unregister(key);
    }
  }, methods: {
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
      this.cancel();
    },
    /**
    * Scroll down before animation starts.
    */
    async beforeAnimation(open) {
      await this.$nextTick();
      this.ignoreClick = true;
      if (!open) {
        const headerElement = getHTMLElementFromVueRef(this.$refs["header"]);
        if (!import_logic.DomUtils.isVisibleInViewport(headerElement)) {
          ongoingScrollPromise = import_logic.DomUtils.scrollTo(headerElement, { duration: SCROLL_DURATION, offset: 10 });
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
      if (!import_logic.DomUtils.isVisibleInViewport(headerElement)) {
        await import_logic.DomUtils.scrollTo(headerElement, { duration: SCROLL_DURATION, offset: 10 });
      }
      import_logic.DomUtils.focus(headerElement);
    }
  } });
  var _hoisted_1$1 = ["aria-current"];
  var _hoisted_2$1 = { ref: "header", role: "group", class: "wizard-step__header", tabindex: "-1" };
  var _hoisted_3$1 = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "div",
    { class: "wizard-step__header__line-up" },
    null,
    -1
    /* HOISTED */
  );
  var _hoisted_4 = { class: "icon-stack" };
  var _hoisted_5 = { "data-test": "step-number" };
  var _hoisted_6 = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "div",
    { class: "wizard-step__header__line-down" },
    null,
    -1
    /* HOISTED */
  );
  var _hoisted_7 = { "aria-hidden": "true", class: "wizard-step__header__step-of" };
  var _hoisted_8 = { class: "sr-only" };
  var _hoisted_9 = { class: "sr-only" };
  var _hoisted_10 = { class: "sr-only" };
  var _hoisted_11 = { key: 0, class: "sr-only" };
  var _hoisted_12 = /* @__PURE__ */ (0, import_vue.createElementVNode)(
    "div",
    { class: "wizard-step__header__line-adjustment" },
    null,
    -1
    /* HOISTED */
  );
  var _hoisted_13 = { class: "button-group" };
  var _hoisted_14 = ["data-disabled"];
  var _hoisted_15 = { class: "sr-only" };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    const _component_i_flex_item = (0, import_vue.resolveComponent)("i-flex-item");
    const _component_i_flex = (0, import_vue.resolveComponent)("i-flex");
    const _component_f_validation_form = (0, import_vue.resolveComponent)("f-validation-form");
    const _component_i_animate_expand = (0, import_vue.resolveComponent)("i-animate-expand");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", { class: (0, import_vue.normalizeClass)(["wizard-step", _ctx.cssClass]), "aria-current": _ctx.isOpen ? "step" : void 0 }, [(0, import_vue.createElementVNode)(
      "div",
      _hoisted_2$1,
      [(0, import_vue.createVNode)(_component_i_flex, null, {
        default: (0, import_vue.withCtx)(() => [(0, import_vue.createVNode)(_component_i_flex_item, { align: "bottom", shrink: "", "aria-hidden": "true" }, {
          default: (0, import_vue.withCtx)(() => [_hoisted_3$1, (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("div", _hoisted_4, [(0, import_vue.createVNode)(_component_f_icon, { name: "circle" }), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_icon, { name: "success" }), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
            "div",
            _hoisted_5,
            (0, import_vue.toDisplayString)(_ctx.stepNumber),
            1
            /* TEXT */
          )]), (0, import_vue.createTextVNode)(), _hoisted_6]),
          _: 1
          /* STABLE */
        }), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_i_flex_item, { align: "bottom", grow: "" }, {
          default: (0, import_vue.withCtx)(() => [_ctx.isOpen ? (0, import_vue.renderSlot)(_ctx.$slots, "step-of", (0, import_vue.normalizeProps)((0, import_vue.mergeProps)({ key: 0 }, { headerClass: "wizard-step__header__step-of", stepNumber: _ctx.stepNumber, totalSteps: _ctx.totalSteps })), () => [(0, import_vue.createElementVNode)(
            "span",
            _hoisted_7,
            (0, import_vue.toDisplayString)(_ctx.defaultCurrentStepInformation),
            1
            /* TEXT */
          )]) : (0, import_vue.createCommentVNode)("v-if", true), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_i_flex, { class: "wizard-step__header__title-container" }, {
            default: (0, import_vue.withCtx)(() => [(0, import_vue.createVNode)(_component_i_flex_item, { align: "center" }, {
              default: (0, import_vue.withCtx)(() => [_ctx.showLink ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                "a",
                { key: 0, "aria-expanded": "false", role: "button", href: "#", class: "anchor wizard-step__header__title", onClick: _cache[0] || (_cache[0] = (0, import_vue.withModifiers)((...args) => _ctx.open && _ctx.open(...args), ["prevent"])), onKeypress: _cache[1] || (_cache[1] = (0, import_vue.withKeys)((0, import_vue.withModifiers)((...args) => _ctx.open && _ctx.open(...args), ["prevent"]), ["space"])) },
                [(0, import_vue.createElementVNode)(
                  "span",
                  _hoisted_8,
                  (0, import_vue.toDisplayString)(_ctx.defaultCurrentStepInformation) + "\xA0",
                  1
                  /* TEXT */
                ), (0, import_vue.createTextVNode)(
                  " " + (0, import_vue.toDisplayString)(_ctx.title) + " ",
                  1
                  /* TEXT */
                ), (0, import_vue.createElementVNode)(
                  "span",
                  _hoisted_9,
                  "\xA0" + (0, import_vue.toDisplayString)(_ctx.$t("fkui.wizard-step.finished-step", "Avklarat steg")),
                  1
                  /* TEXT */
                )],
                32
                /* NEED_HYDRATION */
              )) : ((0, import_vue.openBlock)(), (0, import_vue.createBlock)((0, import_vue.resolveDynamicComponent)(_ctx.inheritedProps.headerTag), { key: 1, class: "wizard-step__header__title" }, {
                default: (0, import_vue.withCtx)(() => [(0, import_vue.createElementVNode)(
                  "span",
                  _hoisted_10,
                  (0, import_vue.toDisplayString)(_ctx.defaultCurrentStepInformation) + "\xA0",
                  1
                  /* TEXT */
                ), (0, import_vue.createTextVNode)(
                  " " + (0, import_vue.toDisplayString)(_ctx.title) + " ",
                  1
                  /* TEXT */
                ), _ctx.isPending ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
                  "span",
                  _hoisted_11,
                  "\n                                    \xA0" + (0, import_vue.toDisplayString)(_ctx.$t("fkui.wizard-step.pending", "Inaktivt")),
                  1
                  /* TEXT */
                )) : (0, import_vue.createCommentVNode)("v-if", true)]),
                _: 1
                /* STABLE */
              }))]),
              _: 1
              /* STABLE */
            })]),
            _: 1
            /* STABLE */
          }), (0, import_vue.createTextVNode)(), _hoisted_12]),
          _: 3
          /* FORWARDED */
        })]),
        _: 3
        /* FORWARDED */
      })],
      512
      /* NEED_PATCH */
    ), (0, import_vue.createTextVNode)(), ((0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_i_animate_expand, { key: _ctx.animationId, opacity: false, expanded: _ctx.isOpen, "before-animation": _ctx.beforeAnimation, "after-animation": _ctx.afterAnimation, class: "wizard-step__connector" }, {
      default: (0, import_vue.withCtx)(() => [(0, import_vue.createVNode)(_component_f_validation_form, { id: _ctx.formId, "before-submit": _ctx.beforeNext, "before-validation": _ctx.beforeValidation, "use-error-list": _ctx.useErrorList, class: "wizard-step-body", onSubmit: _ctx.onSubmit }, {
        "error-message": (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "error-message", {}, () => [(0, import_vue.createTextVNode)(
          (0, import_vue.toDisplayString)(_ctx.$t("fkui.wizard-step.errorlist.title", "Oj, du har gl\xF6mt att fylla i n\xE5got. G\xE5 till:")),
          1
          /* TEXT */
        )])]),
        default: (0, import_vue.withCtx)(() => [(0, import_vue.renderSlot)(_ctx.$slots, "default"), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)("div", _hoisted_13, [(0, import_vue.createElementVNode)("button", { "data-test": "submit-button", "data-disabled": _ctx.ignoreClick ? "true" : "false", type: "submit", class: "button button--primary button-group__item button--large" }, [(0, import_vue.renderSlot)(_ctx.$slots, "next-button-text", {}, () => [_ctx.isFinalStep ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
          import_vue.Fragment,
          { key: 0 },
          [(0, import_vue.createTextVNode)(
            (0, import_vue.toDisplayString)(_ctx.$t("fkui.wizard-step.button.next.text-final", "G\xE5 vidare och granska")),
            1
            /* TEXT */
          )],
          64
          /* STABLE_FRAGMENT */
        )) : ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)(
          import_vue.Fragment,
          { key: 1 },
          [(0, import_vue.createTextVNode)(
            (0, import_vue.toDisplayString)(_ctx.$t("fkui.wizard-step.button.next.text", "Forts\xE4tt")) + " ",
            1
            /* TEXT */
          ), (0, import_vue.createElementVNode)(
            "span",
            _hoisted_15,
            "\n                                        \xA0" + (0, import_vue.toDisplayString)(_ctx.$t("fkui.wizard-step.button.next.sr-text", "till n\xE4sta steg")),
            1
            /* TEXT */
          )],
          64
          /* STABLE_FRAGMENT */
        ))])], 8, _hoisted_14), (0, import_vue.createTextVNode)(), (0, import_vue.createElementVNode)(
          "button",
          { "data-test": "cancel-button", type: "button", class: "button button--secondary button-group__item button--large", onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onCancel && _ctx.onCancel(...args)) },
          (0, import_vue.toDisplayString)(_ctx.$t("fkui.wizard-step.button.cancel.text", "Avbryt")),
          1
          /* TEXT */
        )])]),
        _: 3
        /* FORWARDED */
      }, 8, ["id", "before-submit", "before-validation", "use-error-list", "onSubmit"])]),
      _: 3
      /* FORWARDED */
    }, 8, ["expanded", "before-animation", "after-animation"]))], 10, _hoisted_1$1);
  }
  var FWizardStep = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
  function isDialogueTreeEndQuestion(value) {
    return Boolean(value.userData);
  }
  var _sfc_main = (0, import_vue.defineComponent)({ name: "FDialogueTree", components: { FIcon }, props: {
    /**
    * Current dialogue question
    * @model
    */
    modelValue: { type: Object, required: true },
    /**
    * Dialogue tree
    */
    dialogueTree: { type: Object, required: true }
  }, emits: ["change", "update:modelValue"], data() {
    return { currentStep: this.dialogueTree, steps: [] };
  }, computed: { userData() {
    if (isDialogueTreeEndQuestion(this.currentStep)) {
      return this.currentStep.userData;
    }
    return void 0;
  }, options() {
    if (!isDialogueTreeEndQuestion(this.currentStep)) {
      return this.currentStep.options;
    }
    return [];
  } }, created() {
    this.currentStep = this.dialogueTree;
    if (isDialogueTreeEndQuestion(this.currentStep)) {
      this.emitChange(true);
    } else {
      this.emitChange(false);
    }
  }, methods: { async onClickedOption(option, index) {
    this.steps.push(index);
    this.currentStep = option.question;
    if (isDialogueTreeEndQuestion(option.question)) {
      this.emitChange(true);
      await this.$nextTick();
      (0, import_logic.focusFirst)(this.$el);
    } else {
      this.emitChange(false);
      await this.$nextTick();
      const firstElement = getHTMLElementsFromVueRef(this.$refs["dialogueButton-0"])[0];
      if (firstElement) {
        (0, import_logic.focus)(firstElement);
      }
    }
  }, emitChange(lastStep) {
    const emit = { label: this.currentStep.label, lastStep, steps: this.steps };
    this.$emit("update:modelValue", emit);
    this.$emit("change", emit);
  } } });
  var _hoisted_1 = { class: "dialogue-tree" };
  var _hoisted_2 = { key: 0, class: "dialogue-tree__list" };
  var _hoisted_3 = ["onClick"];
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue.resolveComponent)("f-icon");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("div", _hoisted_1, [_ctx.options.length > 0 ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("ul", _hoisted_2, [((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
      import_vue.Fragment,
      null,
      (0, import_vue.renderList)(_ctx.options, (option, index) => {
        return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("li", { key: option.label, class: "dialogue-tree__list-item" }, [(0, import_vue.createElementVNode)("button", { ref_for: true, ref: `dialogueButton-${index}`, type: "button", onClick: ($event) => _ctx.onClickedOption(option, index) }, [(0, import_vue.createElementVNode)(
          "span",
          null,
          (0, import_vue.toDisplayString)(option.label),
          1
          /* TEXT */
        ), (0, import_vue.createTextVNode)(), (0, import_vue.createVNode)(_component_f_icon, { name: "arrow-right" })], 8, _hoisted_3)]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))])) : (0, import_vue.renderSlot)(_ctx.$slots, "default", (0, import_vue.normalizeProps)((0, import_vue.mergeProps)({ key: 1 }, { userData: _ctx.userData })))]);
  }
  var FDialogueTree = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

  // temp/vendor-fkui-vue.in.js
  window.require = window.require || function customRequire(name) {
    if (typeof window.__modules__ === "undefined") {
      window.__modules__ = {};
    }
    const mod = window.__modules__[name];
    if (!mod) {
      throw new Error(`Cannot find module "${name}"`);
    }
    return mod;
  };
  window.__modules__ = window.__modules__ || {};
  window.__modules__["@fkui/vue"] = index_esm_exports;
})();
/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
