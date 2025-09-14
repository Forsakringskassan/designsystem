var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module) {
    "use strict";
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module) {
    "use strict";
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module) {
    "use strict";
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module) {
    "use strict";
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
    module.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module) {
    "use strict";
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module) {
    "use strict";
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module) {
    "use strict";
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
    module.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module) {
    "use strict";
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
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
    module.exports = ListCache;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module) {
    "use strict";
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module) {
    "use strict";
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module) {
    "use strict";
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module) {
    "use strict";
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    "use strict";
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    "use strict";
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    "use strict";
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    "use strict";
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
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    "use strict";
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    "use strict";
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    "use strict";
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    "use strict";
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module) {
    "use strict";
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module) {
    "use strict";
    var coreJsData = require_coreJsData();
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    })();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module) {
    "use strict";
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
    module.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module) {
    "use strict";
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module) {
    "use strict";
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    "use strict";
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module) {
    "use strict";
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module.exports = Map2;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module) {
    "use strict";
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module) {
    "use strict";
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module) {
    "use strict";
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module) {
    "use strict";
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
    module.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    "use strict";
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module) {
    "use strict";
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module) {
    "use strict";
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
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
    module.exports = Hash;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module) {
    "use strict";
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module) {
    "use strict";
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module) {
    "use strict";
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    "use strict";
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module) {
    "use strict";
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module) {
    "use strict";
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module) {
    "use strict";
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module) {
    "use strict";
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
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
    module.exports = MapCache;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module) {
    "use strict";
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
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
    module.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module) {
    "use strict";
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports, module) {
    "use strict";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports, module) {
    "use strict";
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports, module) {
    "use strict";
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "node_modules/lodash/_arraySome.js"(exports, module) {
    "use strict";
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports, module) {
    "use strict";
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module.exports = cacheHas;
  }
});

// node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "node_modules/lodash/_equalArrays.js"(exports, module) {
    "use strict";
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
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
    module.exports = equalArrays;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module) {
    "use strict";
    var root = require_root();
    var Uint8Array2 = root.Uint8Array;
    module.exports = Uint8Array2;
  }
});

// node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "node_modules/lodash/_mapToArray.js"(exports, module) {
    "use strict";
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    module.exports = mapToArray;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports, module) {
    "use strict";
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    module.exports = setToArray;
  }
});

// node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "node_modules/lodash/_equalByTag.js"(exports, module) {
    "use strict";
    var Symbol2 = require_Symbol();
    var Uint8Array2 = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
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
    module.exports = equalByTag;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module) {
    "use strict";
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset2 = array.length;
      while (++index < length) {
        array[offset2 + index] = values[index];
      }
      return array;
    }
    module.exports = arrayPush;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    "use strict";
    var isArray = Array.isArray;
    module.exports = isArray;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    "use strict";
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module) {
    "use strict";
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
    module.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module) {
    "use strict";
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module) {
    "use strict";
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
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
    module.exports = getSymbols;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module) {
    "use strict";
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    "use strict";
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module) {
    "use strict";
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module) {
    "use strict";
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(/* @__PURE__ */ (function() {
      return arguments;
    })()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module) {
    "use strict";
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module) {
    "use strict";
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module) {
    "use strict";
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module) {
    "use strict";
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    "use strict";
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
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
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module) {
    "use strict";
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module) {
    "use strict";
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = (function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    })();
    module.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module) {
    "use strict";
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    "use strict";
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
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
    module.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module) {
    "use strict";
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module) {
    "use strict";
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module) {
    "use strict";
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module) {
    "use strict";
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
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
    module.exports = baseKeys;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module) {
    "use strict";
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module.exports = isArrayLike;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module) {
    "use strict";
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module) {
    "use strict";
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "node_modules/lodash/_equalObjects.js"(exports, module) {
    "use strict";
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
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module.exports = equalObjects;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module) {
    "use strict";
    var getNative = require_getNative();
    var root = require_root();
    var DataView = getNative(root, "DataView");
    module.exports = DataView;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module) {
    "use strict";
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module) {
    "use strict";
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module.exports = Set2;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module) {
    "use strict";
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap = getNative(root, "WeakMap");
    module.exports = WeakMap;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module) {
    "use strict";
    var DataView = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
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
    module.exports = getTag;
  }
});

// node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    "use strict";
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
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
    module.exports = baseIsEqualDeep;
  }
});

// node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "node_modules/lodash/_baseIsEqual.js"(exports, module) {
    "use strict";
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});

// node_modules/lodash/isEqual.js
var require_isEqual = __commonJS({
  "node_modules/lodash/isEqual.js"(exports, module) {
    "use strict";
    var baseIsEqual = require_baseIsEqual();
    function isEqual4(value, other) {
      return baseIsEqual(value, other);
    }
    module.exports = isEqual4;
  }
});

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

// virtual-entry:virtual:packages/vue/src/components/FCalendar/examples/FCalendarLiveExample.vue:FCalendarLiveExample-36fa07.js
import { defineComponent as defineComponent24 } from "vue";
import { FDate as FDate4 } from "@fkui/date";
import { FCalendar, FCalendarDay } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FCheckboxField/FCheckboxField.vue?type=script
var import_isEqual2 = __toESM(require_isEqual());
import { defineComponent as defineComponent23, toValue as toValue2 } from "vue";
import { ElementIdService as ElementIdService7 } from "@fkui/logic";

// packages/vue/src/utils/ListUtils.ts
import { isSet } from "@fkui/logic";

// packages/vue/src/utils/ValidationUtils.ts
function dispatchComponentValidityEvent(element, detail) {
  element.dispatchEvent(
    new CustomEvent("component-validity", {
      detail,
      bubbles: true
    })
  );
}

// packages/vue/src/utils/VueRefUtils.ts
import { isSet as isSet2 } from "@fkui/logic";
function refIsElement(value) {
  return value instanceof Element;
}
function refIsHTMLElementArray(value) {
  return Array.isArray(value) && value.length > 0 && value[0] instanceof HTMLElement;
}
function refIsVue(value) {
  return value?.$el !== void 0;
}
function refIsVueArray(value) {
  return Array.isArray(value) && value.length > 0 && refIsVue(value[0]);
}
function getSortedHTMLElementsFromVueRef(ref6) {
  const htmlElements = getHTMLElementsFromVueRef(ref6);
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
function getHTMLElementsFromVueRef(ref6) {
  let result = [];
  if (isEmptyArray(ref6)) {
    result = [];
  } else if (refIsVueArray(ref6)) {
    result = ref6.map((vueRef) => vueRef.$el);
  } else if (refIsHTMLElementArray(ref6)) {
    result = [...ref6];
  } else if (isSet2(ref6)) {
    result = [getHTMLElementFromVueRef(ref6)];
  }
  return result;
}
function isEmptyArray(value) {
  return Array.isArray(value) && value.length === 0;
}
function findElementFromVueRef(ref6) {
  if (refIsElement(ref6)) {
    return ref6;
  } else if (refIsVue(ref6)) {
    return ref6.$el;
  }
}
function getHTMLElementFromVueRef(ref6) {
  const element = findElementFromVueRef(ref6);
  if (!isSet2(element)) {
    throw new Error(`Unable to find element from ${ref6}.`);
  }
  if (element instanceof HTMLElement) {
    return element;
  }
  throw new Error(`Not instance of HTMLELement ${ref6}.`);
}

// packages/vue/src/utils/event-bus.ts
function lazyLoad(fn2) {
  let cache;
  return () => cache ?? (cache = fn2());
}
var eventTarget = lazyLoad(() => new EventTarget());
var fn = /* @__PURE__ */ new Map();
function $emit(type, ...args) {
  const event = new CustomEvent(type, { detail: args });
  eventTarget().dispatchEvent(event);
}
function $on(type, callback) {
  fn.set(callback, (event) => {
    callback(...event.detail);
  });
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

// packages/vue/src/utils/mount-component/mount-component.ts
import { createApp as createApp2 } from "vue";

// packages/vue/src/config/config.ts
import { configLogic } from "@fkui/logic";
var popupContainer = document.body;
var production = true;
var config = {
  buttonOrder: 1 /* RIGHT_TO_LEFT */,
  teleportTarget: document.body,
  get popupContainer() {
    if (typeof popupContainer === "string") {
      const element = document.querySelector(popupContainer);
      if (!element) {
        throw new Error(
          `Failed to find popupContainer element from selector "${popupContainer}"`
        );
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

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FModal/FModal.vue?type=script
import { defineComponent as defineComponent4 } from "vue";
import { ElementIdService, pushFocus, popFocus, findTabbableElements, focus as focus2 } from "@fkui/logic";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FIcon/FIcon.vue?type=script
import { defineComponent } from "vue";
var Flip = ["horizontal", "vertical"];
var Rotate = ["90", "180", "270"];
var FIcon_default = defineComponent({
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

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FIcon/FIcon.vue?type=template
import { createCommentVNode as _createCommentVNode, renderSlot as _renderSlot, createElementVNode as _createElementVNode, mergeProps as _mergeProps, openBlock as _openBlock, createElementBlock as _createElementBlock, Fragment as _Fragment } from "vue";
var _hoisted_1 = ["aria-hidden"];
var _hoisted_2 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createCommentVNode(" [html-validate-disable-block fkui/prefer-ficon -- this is the FIcon component]"),
      (_openBlock(), _createElementBlock("svg", _mergeProps(_ctx.$attrs, {
        focusable: "false",
        class: ["icon", [_ctx.spriteKey, ..._ctx.modifiers]],
        "aria-hidden": _ctx.ariaHidden
      }), [
        _renderSlot(_ctx.$slots, "default"),
        _createElementVNode("use", { href: _ctx.spriteId }, null, 8, _hoisted_2)
      ], 16, _hoisted_1))
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

// packages/vue/src/components/FIcon/FIcon.vue
FIcon_default.render = render;
FIcon_default.__file = "packages/vue/src/components/FIcon/FIcon.vue";
var FIcon_default2 = FIcon_default;

// packages/vue/src/plugins/translation/translate.ts
import { TranslationService } from "@fkui/logic";
function translate(key, defaultValueOrArgs, args) {
  const { provider } = TranslationService;
  return provider.translate(key, defaultValueOrArgs, args);
}

// packages/vue/src/plugins/translation/TranslationPlugin.ts
var TranslationMixin = {
  methods: {
    $t: translate
  }
};

// packages/vue/src/plugins/translation/use-translate.ts
function useTranslate() {
  return translate;
}

// packages/vue/src/plugins/validation/ValidationPlugin.ts
var import_isEqual = __toESM(require_isEqual());
import {
  availableValidators,
  isValidatableHTMLElement,
  ValidationService
} from "@fkui/logic";

// packages/vue/src/types/ErrorViewData.ts
var ErrorViewData = class {
  hasError;
  payload;
  constructor(hasError = false, payload) {
    this.hasError = hasError;
    this.payload = payload;
  }
};

// packages/vue/src/plugins/error/ErrorPlugin.ts
var UNHANDLED_ERROR_EVENT = "unhandled-error";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/plugins/error/FErrorHandlingApp.vue?type=script
import { defineComponent as defineComponent3 } from "vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/plugins/error/FErrorPage.vue?type=script
import { defineComponent as defineComponent2 } from "vue";
var FErrorPage_default = defineComponent2({
  name: "FErrorPage",
  props: {
    payload: {
      type: Object,
      required: false,
      default: null
    }
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/plugins/error/FErrorPage.vue?type=template
import { createElementVNode as _createElementVNode2, openBlock as _openBlock2, createElementBlock as _createElementBlock2 } from "vue";
var _hoisted_12 = { "data-test": "f-error-page" };
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock2(), _createElementBlock2("div", _hoisted_12, [..._cache[0] || (_cache[0] = [
    _createElementVNode2(
      "h1",
      null,
      "Fel",
      -1
      /* CACHED */
    ),
    _createElementVNode2(
      "p",
      null,
      "Ett fel har uppst\xE5tt.",
      -1
      /* CACHED */
    ),
    _createElementVNode2(
      "a",
      { href: "/" },
      "G\xE5 till startsidan",
      -1
      /* CACHED */
    )
  ])]);
}

// packages/vue/src/plugins/error/FErrorPage.vue
FErrorPage_default.render = render2;
FErrorPage_default.__file = "packages/vue/src/plugins/error/FErrorPage.vue";
var FErrorPage_default2 = FErrorPage_default;

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/plugins/error/FErrorHandlingApp.vue?type=script
var FErrorHandlingApp_default = defineComponent3({
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
      default: FErrorPage_default2
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

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/plugins/error/FErrorHandlingApp.vue?type=template
import { resolveDynamicComponent as _resolveDynamicComponent, openBlock as _openBlock3, createBlock as _createBlock, renderSlot as _renderSlot2, createElementBlock as _createElementBlock3 } from "vue";
function render3(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock3(), _createElementBlock3("div", null, [
    _ctx.hasError ? (_openBlock3(), _createBlock(_resolveDynamicComponent(_ctx.errorComponent), {
      key: 0,
      payload: _ctx.payload
    }, null, 8, ["payload"])) : _ctx.defaultComponent ? (_openBlock3(), _createBlock(_resolveDynamicComponent(_ctx.defaultComponent), { key: 1 })) : _renderSlot2(_ctx.$slots, "default", { key: 2 })
  ]);
}

// packages/vue/src/plugins/error/FErrorHandlingApp.vue
FErrorHandlingApp_default.render = render3;
FErrorHandlingApp_default.__file = "packages/vue/src/plugins/error/FErrorHandlingApp.vue";

// packages/vue/src/plugins/format/formatters.ts
import { DateFormat, FDate as FDate2 } from "@fkui/date";
import {
  formatNumber as numberFormater,
  parseBankgiro,
  parseDate,
  parseOrganisationsnummer,
  parsePersonnummer,
  parsePlusgiro,
  parsePostalCode
} from "@fkui/logic";

// packages/vue/src/plugins/format/is-date-range.ts
import { FDate } from "@fkui/date";

// packages/vue/src/components/FModal/sizes.ts
var sizes = [
  "",
  "small",
  "medium",
  "large",
  "fullscreen",
  "fullwidth"
];
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

// packages/vue/src/components/FModal/focus-element.ts
import { focus } from "@fkui/logic";
function focusElement(element, container) {
  if (elementIsRadioButton(element)) {
    focusRadioButtonGroup(element, container);
  } else {
    focus(element);
  }
}
function focusRadioButtonGroup(element, container) {
  const radioGroupInputs = container.querySelectorAll(
    `input[type="radio"][name="${element.name}"]`
  );
  const checkedRadioButton = Array.from(radioGroupInputs).find(
    (inputEl) => inputEl.checked
  );
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

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FModal/FModal.vue?type=script
var FModal_default = defineComponent4({
  name: "FModal",
  components: { FIcon: FIcon_default2 },
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
  emits: [
    /**
     * Event that is dispatched when the escape button is pressed.
     * In most use cases the `isOpen` prop should be set to false when this event is triggered.
     */
    "close"
  ],
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
      const focusElement3 = this.resolveFocusElement();
      if (this.focus === "on") {
        this.savedFocus = pushFocus(focusElement3);
        this.savedScroll = scroll;
      } else if (this.focus === "open") {
        focus2(focusElement3);
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
      return firstTabbableChildElement ?? contentElement;
    },
    restoreState() {
      const root = document.documentElement;
      root.style.removeProperty("top");
      root.style.removeProperty("left");
      root.style.removeProperty("right");
      root.style.removeProperty("overflow");
      root.style.removeProperty("position");
      if (this.focus === "on" && this.savedFocus) {
        root.scrollTop = this.savedScroll ?? 0;
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

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FModal/FModal.vue?type=template
import { createElementVNode as _createElementVNode3, createCommentVNode as _createCommentVNode3, renderSlot as _renderSlot3, openBlock as _openBlock4, createElementBlock as _createElementBlock4, toDisplayString as _toDisplayString, resolveComponent as _resolveComponent, createVNode as _createVNode, normalizeClass as _normalizeClass, withKeys as _withKeys } from "vue";
var _hoisted_13 = ["id"];
var _hoisted_22 = { class: "modal__backdrop" };
var _hoisted_3 = { class: "modal__inner-container" };
var _hoisted_4 = { class: "modal__dialog" };
var _hoisted_5 = { class: "modal__dialog-inner" };
var _hoisted_6 = { class: "modal__header" };
var _hoisted_7 = {
  key: 0,
  ref: "modalTitle",
  class: "modal__title",
  tabindex: "-1"
};
var _hoisted_8 = {
  ref: "modalContent",
  class: "modal__content",
  tabindex: "-1"
};
var _hoisted_9 = { class: "modal__footer" };
var _hoisted_10 = { class: "modal__shelf" };
var _hoisted_11 = ["aria-label"];
function render4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = _resolveComponent("f-icon");
  return _ctx.isOpen ? (_openBlock4(), _createElementBlock4("div", {
    key: 0,
    id: _ctx.id,
    class: _normalizeClass(["modal", _ctx.modalClass])
  }, [
    _createElementVNode3("div", _hoisted_22, [
      _createElementVNode3(
        "div",
        {
          class: "modal__outer-container scroll-target",
          tabindex: "-1",
          role: "dialog",
          "aria-modal": "true",
          onKeyup: _cache[3] || (_cache[3] = _withKeys((...args) => _ctx.onClose && _ctx.onClose(...args), ["esc"]))
        },
        [
          _createElementVNode3("div", _hoisted_3, [
            _createElementVNode3(
              "div",
              {
                ref: "modalDialogContainer",
                class: _normalizeClass(["modal__dialog-container", _ctx.containerClasses])
              },
              [
                _createElementVNode3("div", _hoisted_4, [
                  _createElementVNode3("div", _hoisted_5, [
                    _createElementVNode3("div", _hoisted_6, [
                      _createElementVNode3(
                        "div",
                        {
                          tabindex: "0",
                          onFocus: _cache[0] || (_cache[0] = (...args) => _ctx.onFocusFirst && _ctx.onFocusFirst(...args))
                        },
                        null,
                        32
                        /* NEED_HYDRATION */
                      ),
                      _ctx.hasHeaderSlot ? (_openBlock4(), _createElementBlock4(
                        "h1",
                        _hoisted_7,
                        [
                          _createCommentVNode3("@slot Slot for the header. "),
                          _renderSlot3(_ctx.$slots, "header")
                        ],
                        512
                        /* NEED_PATCH */
                      )) : _createCommentVNode3("v-if", true)
                    ]),
                    _createElementVNode3(
                      "div",
                      _hoisted_8,
                      [
                        _createCommentVNode3("@slot Slot for the main content, e.g. paragraphs, input fields, etc. "),
                        _renderSlot3(_ctx.$slots, "content")
                      ],
                      512
                      /* NEED_PATCH */
                    ),
                    _createElementVNode3("div", _hoisted_9, [
                      _createCommentVNode3("@slot Slot the footer content, i.e. buttons. "),
                      _renderSlot3(_ctx.$slots, "footer")
                    ])
                  ]),
                  _createElementVNode3("div", _hoisted_10, [
                    _createElementVNode3("button", {
                      type: "button",
                      class: "close-button",
                      "aria-label": _ctx.ariaCloseText,
                      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onClose && _ctx.onClose(...args))
                    }, [
                      _createElementVNode3(
                        "span",
                        null,
                        _toDisplayString(_ctx.$t("fkui.modal.close", "St\xE4ng")),
                        1
                        /* TEXT */
                      ),
                      _createVNode(_component_f_icon, { name: "close" })
                    ], 8, _hoisted_11),
                    _createElementVNode3(
                      "div",
                      {
                        tabindex: "0",
                        onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.onFocusLast && _ctx.onFocusLast(...args))
                      },
                      null,
                      32
                      /* NEED_HYDRATION */
                    )
                  ])
                ])
              ],
              2
              /* CLASS */
            )
          ])
        ],
        32
        /* NEED_HYDRATION */
      )
    ])
  ], 10, _hoisted_13)) : _createCommentVNode3("v-if", true);
}

// packages/vue/src/components/FModal/FModal.vue
FModal_default.render = render4;
FModal_default.__file = "packages/vue/src/components/FModal/FModal.vue";
var FModal_default2 = FModal_default;

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FModal/FConfirmModal/FConfirmModal.vue?type=script
import { defineComponent as defineComponent5 } from "vue";

// packages/vue/src/components/FModal/modal-button.ts
function prepareButtonList(src) {
  return src.map((it) => ({
    label: it.label,
    screenreader: it.screenreader,
    event: it.event ?? "dismiss",
    reason: it.reason ?? it.event ?? "dismiss",
    classlist: ["button", `button--${it.type ?? "secondary"}`],
    buttonType: it.submitButton ? "submit" : "button"
  }));
}

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FModal/FConfirmModal/FConfirmModal.vue?type=script
var defaultButtons = [
  { label: "Prim\xE4rknapp", event: "confirm", type: "primary" },
  { label: "Sekund\xE4rknapp", event: "dismiss", type: "secondary" }
];
var FConfirmModal_default = defineComponent5({
  name: "FConfirmModal",
  components: { FModal: FModal_default2 },
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
  emits: [
    /**
     * Emits reason for closing modal
     */
    "close",
    ...defaultButtons.map((it) => it.event ?? "")
  ],
  computed: {
    preparedButtons() {
      const preparedButtonList = prepareButtonList(this.buttons);
      return config.buttonOrder === 1 /* RIGHT_TO_LEFT */ ? preparedButtonList.reverse() : preparedButtonList;
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

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FModal/FConfirmModal/FConfirmModal.vue?type=template
import { createCommentVNode as _createCommentVNode4, renderSlot as _renderSlot4, toDisplayString as _toDisplayString2, createTextVNode as _createTextVNode, renderList as _renderList, Fragment as _Fragment2, openBlock as _openBlock5, createElementBlock as _createElementBlock5, createElementVNode as _createElementVNode4, normalizeClass as _normalizeClass2, resolveComponent as _resolveComponent2, withCtx as _withCtx, createBlock as _createBlock2 } from "vue";
var _hoisted_14 = { class: "button-group" };
var _hoisted_23 = ["onClick"];
var _hoisted_32 = {
  key: 0,
  class: "sr-only"
};
function render5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_modal = _resolveComponent2("f-modal");
  return _openBlock5(), _createBlock2(_component_f_modal, {
    fullscreen: _ctx.fullscreen,
    "is-open": _ctx.isOpen,
    "aria-close-text": _ctx.ariaCloseText,
    type: "warning",
    size: _ctx.size,
    focus: _ctx.focus,
    onClose: _ctx.onClose
  }, {
    header: _withCtx(() => [
      _createCommentVNode4("@slot Slot for advanced header. "),
      _renderSlot4(_ctx.$slots, "heading", {}, () => [
        _createTextVNode(
          _toDisplayString2(_ctx.heading),
          1
          /* TEXT */
        )
      ])
    ]),
    content: _withCtx(() => [
      _createCommentVNode4("@slot Slot for advanced content. "),
      _renderSlot4(_ctx.$slots, "content", {}, () => [
        _createTextVNode(
          _toDisplayString2(_ctx.content),
          1
          /* TEXT */
        )
      ])
    ]),
    footer: _withCtx(() => [
      _createElementVNode4("div", _hoisted_14, [
        (_openBlock5(true), _createElementBlock5(
          _Fragment2,
          null,
          _renderList(_ctx.preparedButtons, (button) => {
            return _openBlock5(), _createElementBlock5("button", {
              key: button.label,
              type: "button",
              class: _normalizeClass2([button.classlist, "button-group__item"]),
              onClick: ($event) => _ctx.onClick(button)
            }, [
              _createElementVNode4(
                "span",
                null,
                _toDisplayString2(button.label),
                1
                /* TEXT */
              ),
              button.screenreader ? (_openBlock5(), _createElementBlock5(
                "span",
                _hoisted_32,
                "\xA0" + _toDisplayString2(button.screenreader),
                1
                /* TEXT */
              )) : _createCommentVNode4("v-if", true)
            ], 10, _hoisted_23);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["fullscreen", "is-open", "aria-close-text", "size", "focus", "onClose"]);
}

// packages/vue/src/components/FModal/FConfirmModal/FConfirmModal.vue
FConfirmModal_default.render = render5;
FConfirmModal_default.__file = "packages/vue/src/components/FModal/FConfirmModal/FConfirmModal.vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FModal/FFormModal/FFormModal.vue?type=script
import { defineComponent as defineComponent11 } from "vue";
import { ElementIdService as ElementIdService3, ValidationService as ValidationService3, TranslationService as TranslationService2 } from "@fkui/logic";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FValidationForm/FValidationForm.vue?type=script
import { defineComponent as defineComponent10 } from "vue";
import { ValidationService as ValidationService2, focus as focus4, ElementIdService as ElementIdService2 } from "@fkui/logic";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FErrorList/FErrorList.vue?type=script
import { defineComponent as defineComponent8 } from "vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/IFlex/IFlex.vue?type=script
import { defineComponent as defineComponent6 } from "vue";

// packages/vue/src/internal-components/IFlex/constants.ts
var GAP = ["1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x"];
var ALIGNMENT = ["top", "center", "bottom"];
var FLOAT = ["left", "center", "right"];

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/IFlex/IFlex.vue?type=script
var IFlex_default = defineComponent6({
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

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/IFlex/IFlex.vue?type=template
import { createCommentVNode as _createCommentVNode5, renderSlot as _renderSlot5, normalizeClass as _normalizeClass3, openBlock as _openBlock6, createElementBlock as _createElementBlock6 } from "vue";
function render6(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock6(), _createElementBlock6(
    "div",
    {
      class: _normalizeClass3(["iflex", _ctx.classList])
    },
    [
      _createCommentVNode5(" @slot Slot for IFlexItem's "),
      _renderSlot5(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}

// packages/vue/src/internal-components/IFlex/IFlex.vue
IFlex_default.render = render6;
IFlex_default.__file = "packages/vue/src/internal-components/IFlex/IFlex.vue";
var IFlex_default2 = IFlex_default;

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/IFlex/IFlexItem.vue?type=script
import { defineComponent as defineComponent7 } from "vue";
var IFlexItem_default = defineComponent7({
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

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/IFlex/IFlexItem.vue?type=template
import { createCommentVNode as _createCommentVNode6, renderSlot as _renderSlot6, normalizeClass as _normalizeClass4, openBlock as _openBlock7, createElementBlock as _createElementBlock7 } from "vue";
function render7(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock7(), _createElementBlock7(
    "div",
    {
      class: _normalizeClass4(["iflex__item", _ctx.classList])
    },
    [
      _createCommentVNode6(" @slot Content "),
      _renderSlot6(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}

// packages/vue/src/internal-components/IFlex/IFlexItem.vue
IFlexItem_default.render = render7;
IFlexItem_default.__file = "packages/vue/src/internal-components/IFlex/IFlexItem.vue";
var IFlexItem_default2 = IFlexItem_default;

// packages/vue/src/components/FErrorList/focus-error.ts
import { focus as focus3, scrollTo } from "@fkui/logic";
function focusError(item) {
  const element = document.querySelector(`#${item.id}`);
  if (!element) {
    throw new Error(`Can not find element with id "${item.id}"`);
  }
  const focusElement3 = document.querySelector(`#${item.focusElementId}`);
  scrollTo(element, window.innerHeight * 0.25);
  focus3(focusElement3 ?? element);
}

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FErrorList/FErrorList.vue?type=script
var FErrorList_default = defineComponent8({
  name: "FErrorList",
  components: { FIcon: FIcon_default2, IFlex: IFlex_default2, IFlexItem: IFlexItem_default2 },
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

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FErrorList/FErrorList.vue?type=template
import { resolveComponent as _resolveComponent3, createVNode as _createVNode2, withCtx as _withCtx2, openBlock as _openBlock8, createBlock as _createBlock3, createCommentVNode as _createCommentVNode7, createTextVNode as _createTextVNode2, renderSlot as _renderSlot7, createElementBlock as _createElementBlock8, renderList as _renderList2, Fragment as _Fragment3, createElementVNode as _createElementVNode5, toDisplayString as _toDisplayString3, withModifiers as _withModifiers, normalizeClass as _normalizeClass5 } from "vue";
var _hoisted_15 = { class: "error-list" };
var _hoisted_24 = { key: 0 };
var _hoisted_33 = { class: "error-list__list error-list--list-style-none" };
var _hoisted_42 = ["onClick"];
var _hoisted_52 = { class: "error-list__link" };
function render8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = _resolveComponent3("f-icon");
  const _component_i_flex_item = _resolveComponent3("i-flex-item");
  const _component_i_flex = _resolveComponent3("i-flex");
  return _openBlock8(), _createElementBlock8("div", _hoisted_15, [
    _createVNode2(_component_i_flex, null, {
      default: _withCtx2(() => [
        _ctx.hasTitleSlot ? (_openBlock8(), _createBlock3(_component_i_flex_item, {
          key: 0,
          shrink: ""
        }, {
          default: _withCtx2(() => [
            _createVNode2(_component_f_icon, {
              class: "error-list__icon",
              name: "error"
            })
          ]),
          _: 1
          /* STABLE */
        })) : _createCommentVNode7("v-if", true),
        _createCommentVNode7(" use a space as separator to get same width FLabel which uses an actual space "),
        _ctx.hasTitleSlot ? (_openBlock8(), _createBlock3(_component_i_flex_item, {
          key: 1,
          shrink: ""
        }, {
          default: _withCtx2(() => [..._cache[0] || (_cache[0] = [
            _createTextVNode2(
              "\xA0",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        })) : _createCommentVNode7("v-if", true),
        _createVNode2(_component_i_flex_item, { grow: "" }, {
          default: _withCtx2(() => [
            _ctx.hasTitleSlot ? (_openBlock8(), _createElementBlock8("div", _hoisted_24, [
              _createCommentVNode7(" @slot Optional title shown above the errorlist. No icon is shown if no title is set "),
              _renderSlot7(_ctx.$slots, "title")
            ])) : _createCommentVNode7("v-if", true),
            _createElementVNode5("ul", _hoisted_33, [
              (_openBlock8(true), _createElementBlock8(
                _Fragment3,
                null,
                _renderList2(_ctx.items, (item) => {
                  return _openBlock8(), _createElementBlock8(
                    "li",
                    {
                      key: item.id,
                      class: _normalizeClass5(_ctx.liClasses(item))
                    },
                    [
                      item.id ? (_openBlock8(), _createElementBlock8("a", {
                        key: 0,
                        href: "javascript:",
                        onClick: _withModifiers(($event) => _ctx.onClickItem(item), ["prevent"])
                      }, [
                        _ctx.bullets ? (_openBlock8(), _createElementBlock8(
                          _Fragment3,
                          { key: 0 },
                          [
                            _cache[1] || (_cache[1] = _createElementVNode5(
                              "span",
                              {
                                class: "error-list__bullet",
                                "aria-hidden": "true"
                              },
                              null,
                              -1
                              /* CACHED */
                            )),
                            _createElementVNode5(
                              "span",
                              _hoisted_52,
                              _toDisplayString3(item.title),
                              1
                              /* TEXT */
                            )
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        )) : (_openBlock8(), _createElementBlock8(
                          _Fragment3,
                          { key: 1 },
                          [
                            _createTextVNode2(
                              _toDisplayString3(item.title),
                              1
                              /* TEXT */
                            )
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        ))
                      ], 8, _hoisted_42)) : (_openBlock8(), _createElementBlock8(
                        _Fragment3,
                        { key: 1 },
                        [
                          _ctx.bullets ? (_openBlock8(), _createElementBlock8(
                            _Fragment3,
                            { key: 0 },
                            [
                              _cache[2] || (_cache[2] = _createElementVNode5(
                                "span",
                                {
                                  class: "error-list__bullet",
                                  "aria-hidden": "true"
                                },
                                null,
                                -1
                                /* CACHED */
                              )),
                              _createElementVNode5(
                                "span",
                                null,
                                _toDisplayString3(item.title),
                                1
                                /* TEXT */
                              )
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          )) : (_openBlock8(), _createElementBlock8(
                            _Fragment3,
                            { key: 1 },
                            [
                              _createTextVNode2(
                                _toDisplayString3(item.title),
                                1
                                /* TEXT */
                              )
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          ))
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ],
                    2
                    /* CLASS */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          _: 3
          /* FORWARDED */
        })
      ]),
      _: 3
      /* FORWARDED */
    })
  ]);
}

// packages/vue/src/components/FErrorList/FErrorList.vue
FErrorList_default.render = render8;
FErrorList_default.__file = "packages/vue/src/components/FErrorList/FErrorList.vue";
var FErrorList_default2 = FErrorList_default;

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FValidationGroup/FValidationGroup.vue?type=script
import { defineComponent as defineComponent9 } from "vue";
import { documentOrderComparator } from "@fkui/logic";

// packages/vue/src/components/FValidationGroup/FormUtils.ts
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

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FValidationGroup/FValidationGroup.vue?type=script
var FValidationGroup_default = defineComponent9({
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
     */
    modelValue: {
      type: Object,
      required: false,
      default: () => {
        return { isValid: false, componentsWithError: [], componentCount: 0 };
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
  emits: [
    /**
     * Emitted when validation group has been updated.
     *
     * @type {GroupValidityEvent}
     */
    "group-validity",
    /**
     * V-model event.
     * @type {GroupValidityEvent}
     */
    "update:modelValue"
  ],
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
      this.$emit("update:modelValue", { isValid, componentsWithError, componentCount: components.length });
      this.$emit("group-validity", { isValid, componentsWithError, componentCount: components.length });
    }
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FValidationGroup/FValidationGroup.vue?type=template
import { renderSlot as _renderSlot8, openBlock as _openBlock9, createElementBlock as _createElementBlock9 } from "vue";
function render9(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock9(), _createElementBlock9(
    "div",
    {
      onComponentValidity: _cache[0] || (_cache[0] = (...args) => _ctx.onComponentValidity && _ctx.onComponentValidity(...args)),
      onComponentUnmount: _cache[1] || (_cache[1] = (...args) => _ctx.onComponentUnmount && _ctx.onComponentUnmount(...args))
    },
    [
      _renderSlot8(_ctx.$slots, "default")
    ],
    32
    /* NEED_HYDRATION */
  );
}

// packages/vue/src/components/FValidationGroup/FValidationGroup.vue
FValidationGroup_default.render = render9;
FValidationGroup_default.__file = "packages/vue/src/components/FValidationGroup/FValidationGroup.vue";
var FValidationGroup_default2 = FValidationGroup_default;

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FValidationForm/FValidationForm.vue?type=script
var FValidationForm_default = defineComponent10({
  name: "FValidationForm",
  components: { FValidationGroup: FValidationGroup_default2, FErrorList: FErrorList_default2 },
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
      default: () => ElementIdService2.generateElementId()
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
  emits: [
    /**
     * Emitted when form is successfully submitted.
     */
    "submit"
  ],
  data() {
    return {
      validity: { isValid: true, componentsWithError: [], componentCount: 0 },
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
      ValidationService2.setSubmitted(this.id);
      await ValidationService2.validateAllElements(this.id);
      await this.$nextTick();
      await new Promise((resolve) => window.setTimeout(resolve, 0));
      if (this.validity.isValid) {
        return false;
      }
      if (this.useErrorList) {
        focus4(this.$refs.errors);
      } else {
        const firstError = this.validity.componentsWithError[0];
        const element = document.getElementById(firstError.focusElementId);
        focus4(element);
      }
      return true;
    },
    async onSubmit(event) {
      this.submitted = true;
      const beforeValidation = this.beforeValidation ? await this.beforeValidation() : void 0;
      if (beforeValidation === 1 /* CANCEL */) {
        return;
      }
      if (await this.hasFormErrors()) {
        return;
      }
      const beforeAction = this.beforeSubmit ? await this.beforeSubmit() : void 0;
      if (beforeAction === 1 /* CANCEL */) {
        return;
      }
      if (await this.hasFormErrors()) {
        return;
      }
      this.$emit("submit", event);
    }
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FValidationForm/FValidationForm.vue?type=template
import { createCommentVNode as _createCommentVNode8, renderSlot as _renderSlot9, resolveComponent as _resolveComponent4, withCtx as _withCtx3, createVNode as _createVNode3, openBlock as _openBlock10, createElementBlock as _createElementBlock10, withModifiers as _withModifiers2, mergeProps as _mergeProps2, createElementVNode as _createElementVNode6, createBlock as _createBlock4 } from "vue";
var _hoisted_16 = ["id"];
var _hoisted_25 = {
  key: 0,
  ref: "errors",
  tabindex: "-1",
  role: "group"
};
function render10(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_error_list = _resolveComponent4("f-error-list");
  const _component_f_validation_group = _resolveComponent4("f-validation-group");
  return _openBlock10(), _createBlock4(_component_f_validation_group, {
    key: _ctx.groupKey,
    modelValue: _ctx.validity,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.validity = $event),
    "stop-propagation": true
  }, {
    default: _withCtx3(() => [
      _createCommentVNode8(" [html-validate-disable-next wcag/h32 -- submit button is slotted] "),
      _createElementVNode6("form", _mergeProps2({ id: _ctx.id }, _ctx.$attrs, {
        novalidate: "",
        autocomplete: "off",
        onSubmit: _cache[0] || (_cache[0] = _withModifiers2((...args) => _ctx.onSubmit && _ctx.onSubmit(...args), ["prevent"]))
      }), [
        _ctx.displayErrors ? (_openBlock10(), _createElementBlock10(
          "nav",
          _hoisted_25,
          [
            _createVNode3(_component_f_error_list, {
              items: _ctx.errors,
              bullets: _ctx.errorListBullets,
              "before-navigate": _ctx.errorListBeforeNavigate
            }, {
              title: _withCtx3(() => [
                _createCommentVNode8("\n                            @slot **optional** Slot for displaying error description.\n\n                            After this slot a list of invalid elements is listed.\n                            When an item is clicked it will scroll to and focus that invalid element.\n                        "),
                _renderSlot9(_ctx.$slots, "error-message")
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["items", "bullets", "before-navigate"])
          ],
          512
          /* NEED_PATCH */
        )) : _createCommentVNode8("v-if", true),
        _createCommentVNode8(" @slot Slot for content, i.e. input elements. "),
        _renderSlot9(_ctx.$slots, "default")
      ], 16, _hoisted_16)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["modelValue"]);
}

// packages/vue/src/components/FValidationForm/FValidationForm.vue
FValidationForm_default.render = render10;
FValidationForm_default.__file = "packages/vue/src/components/FValidationForm/FValidationForm.vue";
var FValidationForm_default2 = FValidationForm_default;

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FModal/FFormModal/FFormModal.vue?type=script
var FFormModal_default = defineComponent11({
  name: "FFormModal",
  components: { FModal: FModal_default2, FValidationForm: FValidationForm_default2 },
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
      default: () => ElementIdService3.generateElementId()
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
      default: () => [
        {
          label: TranslationService2.provider.translate("fkui.form-modal.button.submit.text", "Spara"),
          event: "submit",
          type: "primary",
          submitButton: true
        },
        {
          label: TranslationService2.provider.translate("fkui.form-modal.button.cancel.text", "Avbryt"),
          event: "dismiss",
          type: "secondary"
        }
      ]
    }
  },
  emits: [
    /**
     * Event that is dispatched when escape is pressed or when the cancel or close buttons are clicked.
     * In most use cases the isOpen prop should be set to false when this event is triggered.
     */
    "cancel",
    /**
     * Event that is dispatched when escape is pressed or when the cancel or close buttons are clicked.
     * In most use cases the isOpen prop should be set to false when this event is triggered.
     */
    "close",
    /**
     * Event that is dispatched when the submit button is is clicked.
     * The event payload is the data that has been submitted.
     */
    "submit"
  ],
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
      ValidationService3.resetState(this.$el);
      this.$emit("cancel");
      this.$emit("close", { reason: "close" });
    },
    onSubmit() {
      ValidationService3.resetState(this.$el);
      this.$emit("submit", { data: this.value });
      this.$emit("close", { reason: "submit", data: this.value });
    },
    onCancel() {
      ValidationService3.resetState(this.$el);
      this.$emit("cancel");
      this.$emit("close", { reason: "close" });
    }
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FModal/FFormModal/FFormModal.vue?type=template
import { createCommentVNode as _createCommentVNode9, renderSlot as _renderSlot10, createElementVNode as _createElementVNode7, resolveComponent as _resolveComponent5, withCtx as _withCtx4, createVNode as _createVNode4, renderList as _renderList3, Fragment as _Fragment4, openBlock as _openBlock11, createElementBlock as _createElementBlock11, toDisplayString as _toDisplayString4, normalizeClass as _normalizeClass6, createBlock as _createBlock5 } from "vue";
var _hoisted_17 = { class: "button-group" };
var _hoisted_26 = ["type", "form", "onClick"];
var _hoisted_34 = {
  key: 0,
  class: "sr-only"
};
function render11(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_validation_form = _resolveComponent5("f-validation-form");
  const _component_f_modal = _resolveComponent5("f-modal");
  return _openBlock11(), _createBlock5(_component_f_modal, {
    "data-test": _ctx.dataTest,
    fullscreen: _ctx.fullscreen,
    "is-open": _ctx.isOpen,
    size: _ctx.size,
    "aria-close-text": _ctx.ariaCloseText,
    onClose: _ctx.onClose
  }, {
    header: _withCtx4(() => [
      _createCommentVNode9(" @slot Slot for the header. "),
      _renderSlot10(_ctx.$slots, "header")
    ]),
    content: _withCtx4(() => [
      _createElementVNode7("div", null, [
        _createCommentVNode9(" @slot Slot for main content above text fields and buttons. "),
        _renderSlot10(_ctx.$slots, "default")
      ]),
      _createVNode4(_component_f_validation_form, {
        id: _ctx.formId,
        "before-submit": _ctx.beforeSubmit,
        "before-validation": _ctx.beforeValidation,
        "use-error-list": _ctx.useErrorList,
        onSubmit: _ctx.onSubmit,
        onCancel: _ctx.onCancel
      }, {
        "error-message": _withCtx4(() => [
          _createCommentVNode9(" @slot Slot for error message "),
          _renderSlot10(_ctx.$slots, "error-message")
        ]),
        default: _withCtx4(() => [
          _renderSlot10(_ctx.$slots, "input-text-fields")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["id", "before-submit", "before-validation", "use-error-list", "onSubmit", "onCancel"])
    ]),
    footer: _withCtx4(() => [
      _createElementVNode7("div", _hoisted_17, [
        (_openBlock11(true), _createElementBlock11(
          _Fragment4,
          null,
          _renderList3(_ctx.preparedButtons, (button) => {
            return _openBlock11(), _createElementBlock11("button", {
              key: button.label,
              type: button.buttonType,
              class: _normalizeClass6([button.classlist, "button-group__item"]),
              form: button.buttonType === "submit" ? _ctx.formId : void 0,
              onClick: ($event) => button.buttonType === "button" ? _ctx.onCancel() : false
            }, [
              _createElementVNode7(
                "span",
                null,
                _toDisplayString4(button.label),
                1
                /* TEXT */
              ),
              button.screenreader ? (_openBlock11(), _createElementBlock11(
                "span",
                _hoisted_34,
                "\xA0" + _toDisplayString4(button.screenreader),
                1
                /* TEXT */
              )) : _createCommentVNode9("v-if", true)
            ], 10, _hoisted_26);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["data-test", "fullscreen", "is-open", "size", "aria-close-text", "onClose"]);
}

// packages/vue/src/components/FModal/FFormModal/FFormModal.vue
FFormModal_default.render = render11;
FFormModal_default.__file = "packages/vue/src/components/FModal/FFormModal/FFormModal.vue";

// packages/vue/src/utils/focus.ts
import { focus as focusElement2 } from "@fkui/logic";
function isVueComponent(element) {
  return Boolean(element && typeof element === "object" && "$el" in element);
}
function focus5(element, options = {}) {
  if (Array.isArray(element)) {
    return focus5(element[0], options);
  }
  if (isVueComponent(element)) {
    const targetElement = element.focusTarget ?? element.$el;
    return focus5(targetElement, options);
  }
  if (element instanceof HTMLElement) {
    focusElement2(element, options);
    return true;
  }
  return false;
}

// packages/vue/src/utils/render-slot-text.ts
import {
  Comment,
  isVNode
} from "vue";
var defaultOptions = {
  stripClasses: ["sr-only"],
  componentPlaceholder: false
};
function collapseWhitespace(text) {
  return text.replace(/\s+/gm, " ").replace(/(^ | $)/g, "");
}
function intersection(a, b) {
  return a.filter((it) => b.includes(it));
}
function excludeClass(exclude) {
  return (node) => {
    if (typeof node.props?.class !== "string") {
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
function isComponent(node) {
  return typeof node.type === "object";
}
function getComponentName({ type }) {
  if ("__name" in type) {
    return String(type.__name);
  }
  if ("name" in type) {
    return String(type.name);
  }
  return "Component";
}
function getTextContent(children, options) {
  return children.filter(isVNode).filter(excludeComment).filter(excludeClass(options.stripClasses)).map((node) => {
    if (isComponent(node)) {
      if (options.componentPlaceholder) {
        const name = getComponentName(node);
        return `<${name} />`;
      } else {
        return "";
      }
    }
    if (Array.isArray(node.children)) {
      return getTextContent(node.children, options);
    }
    if (typeof node.children === "string") {
      return node.children;
    }
  }).join("");
}
function renderSlotText(render28, props = {}, options) {
  if (!render28) {
    return void 0;
  }
  const nodes = render28(props);
  if (nodes.length === 0) {
    return void 0;
  }
  const effectiveOptions = { ...defaultOptions, ...options };
  return collapseWhitespace(getTextContent(nodes, effectiveOptions));
}

// packages/vue/src/utils/has-slot.ts
var defaultOptions2 = {
  stripClasses: ["sr-only"],
  componentPlaceholder: true
};
function hasSlot(vm, name, props = {}, options = {}) {
  const slot = vm.$slots[name];
  const effectiveOptions = { ...defaultOptions2, ...options };
  return Boolean(renderSlotText(slot, props, effectiveOptions));
}

// packages/vue/src/utils/use-modal.ts
import { getCurrentInstance } from "vue";

// packages/vue/src/utils/action-from-keyboard-event.ts
function actionFromKeyboardEvent(event) {
  switch (event.key) {
    case "End":
      return 3 /* MOVE_LAST */;
    case "Home":
      return 2 /* MOVE_FIRST */;
    case "Up":
    case "ArrowUp":
      return 1 /* MOVE_PREV */;
    case "Down":
    case "ArrowDown":
      return 0 /* MOVE_NEXT */;
    case "Left":
    case "ArrowLeft":
      return 1 /* MOVE_PREV */;
    case "Right":
    case "ArrowRight":
      return 0 /* MOVE_NEXT */;
    case "Tab":
      if (event.shiftKey) {
        return 1 /* MOVE_PREV */;
      }
      return 0 /* MOVE_NEXT */;
    case " ":
    case "Spacebar":
    case "Enter":
      return 4 /* ACTIVATE */;
    default:
      return null;
  }
}

// packages/vue/src/utils/get-absolute-position.ts
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

// packages/vue/src/utils/internal-key.ts
var internalKey = Symbol("internal-key");

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FFieldset/FFieldset.vue?type=script
import { defineComponent as defineComponent22, provide, useSlots as useSlots3, useTemplateRef as useTemplateRef4 } from "vue";
import { ElementIdService as ElementIdService6, debounce as debounce4 } from "@fkui/logic";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FTooltip/FTooltip.vue?type=script
import { computed as computed4, defineComponent as defineComponent21, inject, ref as ref5, toRef, useTemplateRef as useTemplateRef3, watchEffect as watchEffect5, useSlots as useSlots2 } from "vue";
import { TranslationService as TranslationService3 } from "@fkui/logic";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FExpand/FExpand.vue?type=script
import { defineComponent as defineComponent12 } from "vue";
var FExpand_default = defineComponent12({
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

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FExpand/FExpand.vue?type=template
import { renderSlot as _renderSlot11, Transition as _Transition, withCtx as _withCtx5, openBlock as _openBlock12, createBlock as _createBlock6 } from "vue";
function render12(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock12(), _createBlock6(_Transition, {
    onEnter: _ctx.enter,
    onAfterEnter: _ctx.afterEnter,
    onLeave: _ctx.leave
  }, {
    default: _withCtx5(() => [
      _renderSlot11(_ctx.$slots, "default", { height: _ctx.height })
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["onEnter", "onAfterEnter", "onLeave"]);
}

// packages/vue/src/components/FExpand/FExpand.vue
FExpand_default.render = render12;
FExpand_default.__file = "packages/vue/src/components/FExpand/FExpand.vue";
var FExpand_default2 = FExpand_default;

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/IPopup/IPopup.vue?type=script
import { defineComponent as defineComponent13 } from "vue";
import { debounce, handleTab, pushFocus as pushFocus2, popFocus as popFocus2 } from "@fkui/logic";

// packages/vue/src/internal-components/IPopup/IPopupUtils.ts
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
function getCandidates(anchor, target, clippedArea, spacing, candidateOrder) {
  const dw = target.width - anchor.width;
  const a = {
    placement: "A" /* A */,
    x: anchor.x,
    y: anchor.y + anchor.height + spacing,
    width: target.width,
    height: target.height,
    direction: 1 /* Vertical */
  };
  const b = {
    placement: "B" /* B */,
    x: anchor.x - dw,
    y: anchor.y + anchor.height + spacing,
    width: target.width,
    height: target.height,
    direction: 1 /* Vertical */
  };
  const c = {
    placement: "C" /* C */,
    x: anchor.x,
    y: anchor.y - target.height - spacing,
    width: target.width,
    height: target.height,
    direction: 1 /* Vertical */
  };
  const d = {
    placement: "D" /* D */,
    x: anchor.x - dw,
    y: anchor.y - target.height - spacing,
    width: target.width,
    height: target.height,
    direction: 1 /* Vertical */
  };
  const e = {
    placement: "E" /* E */,
    x: anchor.x + anchor.width + spacing,
    y: anchor.y + anchor.height / 2 - target.height / 2,
    width: target.width,
    height: target.height,
    direction: 0 /* Horizontal */
  };
  const f = {
    placement: "F" /* F */,
    x: anchor.x - (target.width + spacing),
    y: anchor.y + anchor.height / 2 - target.height / 2,
    width: target.width,
    height: target.height,
    direction: 0 /* Horizontal */
  };
  const g = {
    placement: "G" /* G */,
    x: anchor.x + anchor.width + spacing,
    y: clippedArea.y + spacing,
    width: target.width,
    height: target.height,
    direction: 2 /* Both */
  };
  const h2 = {
    placement: "H" /* H */,
    x: anchor.x - (target.width + spacing),
    y: clippedArea.y + spacing,
    width: target.width,
    height: target.height,
    direction: 2 /* Both */
  };
  const i = {
    placement: "I" /* I */,
    x: clippedArea.x + (clippedArea.width - target.width) / 2,
    y: clippedArea.y + (clippedArea.height - target.height) / 2,
    width: target.width,
    height: target.height,
    direction: 3 /* None */
  };
  if (candidateOrder === "IPopupError" /* IPopupError */) {
    return [b, a, d, c, e, f, f, f, f];
  } else {
    return [a, b, c, d, e, f, g, h2, i];
  }
}
function isInside(outer, inner, spacing) {
  const isHorizontalDirection = inner.direction === 0 /* Horizontal */ || inner.direction === 2 /* Both */;
  const xSpacing = isHorizontalDirection ? spacing : 0;
  const isVerticalDirection = inner.direction === 1 /* Vertical */ || inner.direction === 2 /* Both */;
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
    const offset2 = targetElement.offsetParent?.getBoundingClientRect();
    if (!offset2) {
      return result;
    }
    return {
      ...result,
      x: result.x - (offset2.left + window.pageXOffset),
      y: result.y - (offset2.top + window.pageYOffset)
    };
  }
  const { anchor, target, area, viewport, spacing } = options;
  const clippedArea = clipRect(area, viewport);
  const candidates = getCandidates(
    anchor,
    target,
    clippedArea,
    spacing,
    options.candidateOrder
  );
  const index = candidates.findIndex(
    (it) => isInside(clippedArea, it, spacing)
  );
  if (index >= 0) {
    const match = candidates[index];
    return { x: match.x, y: match.y, placement: match.placement };
  }
  return {
    ...getFallbackPosition(anchor, target, clippedArea, spacing),
    placement: "Fallback" /* Fallback */
  };
}
function getScrollToPopup(param) {
  const popupOffset = offset(
    { pageXOffset: 0, pageYOffset: param.scrollTop },
    param.popup
  );
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

// packages/vue/src/internal-components/IPopup/get-container.ts
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

// packages/vue/src/internal-components/IPopup/get-focusable-element.ts
import { findTabbableElements as findTabbableElements2 } from "@fkui/logic";
function getFocusableElement(rootElement, callback) {
  if (callback) {
    return callback();
  }
  const popupElement = getHTMLElementFromVueRef(rootElement);
  const elements = findTabbableElements2(popupElement);
  return elements[0] ?? null;
}

// packages/vue/src/internal-components/IPopup/constants.ts
var MIN_DESKTOP_WIDTH = 640;
var POPUP_SPACING = 20;

// packages/vue/src/internal-components/IPopup/is-teleport-disabled.ts
function isTeleportDisabled(options) {
  const { window: window2, placement, forceInline, forceOverlay } = options;
  const isMobileSize = window2.innerWidth < MIN_DESKTOP_WIDTH;
  let disableTeleport = isMobileSize || placement === "Fallback" /* Fallback */;
  if (forceInline) {
    disableTeleport = true;
  } else if (forceOverlay) {
    disableTeleport = false;
  } else if (placement === "NotCalculated" /* NotCalculated */ && !isMobileSize) {
    disableTeleport = false;
  }
  return disableTeleport;
}

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/IPopup/IPopup.vue?type=script
var IPopup_default = defineComponent13({
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
      placement: "NotCalculated" /* NotCalculated */,
      focus: null
    };
  },
  computed: {
    popupClasses() {
      const popupState = this.isInline ? ["popup--inline"] : ["popup--overlay"];
      return ["popup", ...popupState];
    },
    isInline() {
      let isInline = this.teleportDisabled || this.placement === "Fallback" /* Fallback */;
      if (this.forceInline) {
        isInline = true;
      } else if (this.forceOverlay) {
        isInline = false;
      } else if (this.placement === "NotCalculated" /* NotCalculated */ && !this.isMobileSize()) {
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
          const { placement, forceInline, forceOverlay } = this;
          this.teleportDisabled = isTeleportDisabled({ window, placement, forceInline, forceOverlay });
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
        this.placement = "NotCalculated" /* NotCalculated */;
        if (this.focus) {
          popFocus2(this.focus);
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
          spacing: POPUP_SPACING,
          candidateOrder: "Default" /* Default */
        });
        this.placement = result.placement;
        const useOverlay = this.forceOverlay || result.placement !== "Fallback" /* Fallback */;
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
        spacing: POPUP_SPACING
      });
      const scrollOptions = { top, behavior: "smooth" };
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
      this.focus = pushFocus2(focusableElement);
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
        this.placement = "NotCalculated" /* NotCalculated */;
        this.teleportDisabled = false;
        await this.$nextTick();
      }
      await this.calculatePlacement();
      const { placement, forceInline, forceOverlay } = this;
      this.teleportDisabled = isTeleportDisabled({ window, placement, forceInline, forceOverlay });
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

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/IPopup/IPopup.vue?type=template
import { normalizeProps as _normalizeProps, guardReactiveProps as _guardReactiveProps, renderSlot as _renderSlot12, withModifiers as _withModifiers3, withKeys as _withKeys2, createElementVNode as _createElementVNode8, mergeProps as _mergeProps3, Teleport as _Teleport, openBlock as _openBlock13, createBlock as _createBlock7, createCommentVNode as _createCommentVNode11 } from "vue";
function render13(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.isOpen ? (_openBlock13(), _createBlock7(_Teleport, {
    key: 0,
    to: _ctx.teleportTarget,
    disabled: _ctx.teleportDisabled
  }, [
    _createElementVNode8(
      "div",
      _mergeProps3({ ref: "popup" }, _ctx.$attrs, { class: _ctx.popupClasses }),
      [
        _createElementVNode8(
          "div",
          {
            ref: "wrapper",
            role: "presentation",
            class: "popup__wrapper",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onPopupClickHandler && _ctx.onPopupClickHandler(...args)),
            onKeyup: _cache[1] || (_cache[1] = _withKeys2(_withModifiers3((...args) => _ctx.onKeyEsc && _ctx.onKeyEsc(...args), ["stop"]), ["esc"])),
            onKeydown: _cache[2] || (_cache[2] = _withKeys2((...args) => _ctx.onKeyTab && _ctx.onKeyTab(...args), ["tab"]))
          },
          [
            _renderSlot12(_ctx.$slots, "default", _normalizeProps(_guardReactiveProps({ toggleIsOpen: _ctx.toggleIsOpen, placement: _ctx.placement })))
          ],
          544
          /* NEED_HYDRATION, NEED_PATCH */
        )
      ],
      16
      /* FULL_PROPS */
    )
  ], 8, ["to", "disabled"])) : _createCommentVNode11("v-if", true);
}

// packages/vue/src/internal-components/IPopup/IPopup.vue
IPopup_default.render = render13;
IPopup_default.__file = "packages/vue/src/internal-components/IPopup/IPopup.vue";
var IPopup_default2 = IPopup_default;

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/IPopupError/IPopupError.vue?type=script
import { defineComponent as defineComponent14 } from "vue";

// packages/vue/src/internal-components/IPopupError/compute-arrow-offset.ts
function computeArrowOffset(placement, inputIconRect, wrapperRect) {
  switch (placement) {
    case "A" /* A */: {
      const wrapperRightX = wrapperRect.x + wrapperRect.width;
      const iconCenterX = inputIconRect.x + inputIconRect.width / 2;
      const offset2 = wrapperRightX - iconCenterX;
      return { position: "top", offset: offset2 };
    }
    case "B" /* B */: {
      const offset2 = wrapperRect.x + wrapperRect.width - (inputIconRect.x + inputIconRect.width / 2);
      return { position: "top", offset: offset2 };
    }
    case "C" /* C */: {
      const wrapperRightX = wrapperRect.x + wrapperRect.width;
      const iconCenterX = inputIconRect.x + inputIconRect.width / 2;
      const offset2 = wrapperRightX - iconCenterX;
      return { position: "bottom", offset: offset2 };
    }
    case "D" /* D */: {
      const offset2 = wrapperRect.x + wrapperRect.width - (inputIconRect.x + inputIconRect.width / 2);
      return { position: "bottom", offset: offset2 };
    }
    case "E" /* E */: {
      const offset2 = wrapperRect.y + wrapperRect.height - (inputIconRect.y + inputIconRect.height / 2);
      return { position: "left", offset: offset2 };
    }
    case "F" /* F */: {
      const offset2 = wrapperRect.y + wrapperRect.height - (inputIconRect.y + inputIconRect.height / 2);
      return { position: "right", offset: offset2 };
    }
    case "G" /* G */:
    case "H" /* H */:
    case "I" /* I */:
    case "Fallback" /* Fallback */:
    // eslint-disable-next-line sonarjs/no-duplicated-branches, no-fallthrough -- Nice to have alphabetical order with fallthrough.
    case "NotCalculated" /* NotCalculated */: {
      const offset2 = wrapperRect.x + wrapperRect.width - (inputIconRect.x + inputIconRect.width / 2);
      return { position: "top", offset: offset2 };
    }
  }
}

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/IPopupError/IPopupError.vue?type=script
var POPUP_SPACING2 = 10;
var IPopupError_default = defineComponent14({
  name: "IPopupError",
  components: { FIcon: FIcon_default2 },
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
      placement: "NotCalculated" /* NotCalculated */,
      arrowPosition: "top",
      arrowOffset: 24
    };
  },
  computed: {
    popupClasses() {
      const forceInline = this.teleportDisabled || this.placement === "Fallback" /* Fallback */;
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
    this.anchor?.removeEventListener("keyup", this.onKeyEsc);
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
      const wrapper = this.$refs.wrapper;
      const inputIcon = this.anchor?.nextElementSibling;
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
        this.placement = "NotCalculated" /* NotCalculated */;
        return;
      }
      await this.$nextTick();
      const wrapper = this.$refs.wrapper;
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
        spacing: POPUP_SPACING2,
        candidateOrder: "IPopupError" /* IPopupError */
      });
      this.placement = result.placement;
      if (result.placement !== "Fallback" /* Fallback */) {
        this.teleportDisabled = false;
        wrapper.style.left = `${result.x}px`;
        wrapper.style.top = `${result.y}px`;
        this.setArrowOffset();
        return;
      }
      this.setArrowOffset();
      this.teleportDisabled = true;
      wrapper.style.removeProperty("left");
      wrapper.style.removeProperty("top");
    }
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/IPopupError/IPopupError.vue?type=template
import { createCommentVNode as _createCommentVNode12, toDisplayString as _toDisplayString5, createElementVNode as _createElementVNode9, resolveComponent as _resolveComponent6, createVNode as _createVNode5, normalizeClass as _normalizeClass7, normalizeStyle as _normalizeStyle, Teleport as _Teleport2, openBlock as _openBlock14, createBlock as _createBlock8 } from "vue";
var _hoisted_18 = {
  ref: "wrapper",
  class: "popup-error__wrapper"
};
function render14(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = _resolveComponent6("f-icon");
  return _ctx.isOpen ? (_openBlock14(), _createBlock8(_Teleport2, {
    key: 0,
    to: _ctx.teleportTarget,
    disabled: _ctx.teleportDisabled
  }, [
    _createElementVNode9(
      "div",
      {
        ref: "popup",
        class: _normalizeClass7(_ctx.popupClasses),
        "aria-hidden": "true"
      },
      [
        _createElementVNode9(
          "div",
          _hoisted_18,
          [
            _createCommentVNode12(" [html-validate-disable-next no-inline-style] "),
            _createElementVNode9(
              "div",
              {
                class: _normalizeClass7(_ctx.arrowClass),
                style: _normalizeStyle(_ctx.errorStyle)
              },
              [
                _createElementVNode9(
                  "span",
                  null,
                  _toDisplayString5(_ctx.errorMessage),
                  1
                  /* TEXT */
                ),
                _createCommentVNode12(' `tabindex="-1" is set since `IPopupError` has `aria-hidden`, wich cannot be used on focusable elements.\n                        `IPopupError` will be closed on input-field `blur`, so the button is never focusable anyway .\n                    '),
                _createCommentVNode12(" [html-validate-disable-next fkui/class-deprecated -- technical debt] "),
                _createElementVNode9("button", {
                  tabindex: "-1",
                  type: "button",
                  class: "button button--discrete button--discrete--black modal__close-button popup-error__button",
                  "aria-label": "St\xE4ng",
                  onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClose && _ctx.onClose(...args))
                }, [
                  _createVNode5(_component_f_icon, {
                    name: "close",
                    class: "button__icon"
                  })
                ])
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          512
          /* NEED_PATCH */
        )
      ],
      2
      /* CLASS */
    )
  ], 8, ["to", "disabled"])) : _createCommentVNode12("v-if", true);
}

// packages/vue/src/internal-components/IPopupError/IPopupError.vue
IPopupError_default.render = render14;
IPopupError_default.__file = "packages/vue/src/internal-components/IPopupError/IPopupError.vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/IPopupListbox/IPopupListbox.vue?type=script
import { defineComponent as _defineComponent } from "vue";
import { watchEffect, useTemplateRef, nextTick, computed, onUnmounted as onUnmounted2, watch } from "vue";
import { debounce as debounce2 } from "@fkui/logic";

// packages/vue/src/composables/useEventListener.ts
import { onMounted, onUnmounted, toValue } from "vue";
function useEventListener(target, event, callback) {
  onMounted(() => {
    toValue(target)?.addEventListener(event, callback);
  });
  onUnmounted(() => {
    toValue(target)?.removeEventListener(event, callback);
  });
}

// packages/vue/src/composables/useSlotUtils.ts
import { useSlots } from "vue";

// packages/vue/src/internal-components/IPopupListbox/compute-listbox-rect.ts
function numItems(itemHeight, availableHeight, verticalSpacing) {
  const itemsFit = Math.floor(
    (availableHeight - verticalSpacing) / itemHeight
  );
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
function computeListboxRect(anchor, options, root = document.documentElement, { scrollY, scrollX } = window) {
  const { itemHeight, numOfItems, verticalSpacing } = options;
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
  const below = tryBelow(
    itemHeight,
    numOfItems,
    anchorRect,
    viewportRect,
    verticalSpacing
  );
  if (below) {
    return below;
  }
  const above = tryAbove(
    itemHeight,
    numOfItems,
    anchorRect,
    viewportRect,
    verticalSpacing
  );
  if (above) {
    return above;
  }
  return void 0;
}

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/IPopupListbox/IPopupListbox.vue?type=script
var teleportDisabled = false;
var IPopupListbox_default = /* @__PURE__ */ _defineComponent({
  __name: "IPopupListbox",
  props: {
    isOpen: { type: Boolean, required: true },
    anchor: { type: null, required: true },
    numOfItems: { type: Number, required: true },
    itemHeight: { type: Number, required: false, default: () => void 0 },
    activeElement: { type: null, required: false, default: () => void 0 }
  },
  emits: ["close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emit = __emit;
    const wrapperRef = useTemplateRef("wrapper");
    const contentRef = useTemplateRef("content");
    const popupClasses = ["popup", "popup--overlay"];
    const teleportTarget = computed(() => config.teleportTarget);
    let guessedItemHeight = void 0;
    let verticalSpacing = void 0;
    useEventListener(__props.anchor, "keyup", onKeyEsc);
    watchEffect(() => {
      if (wrapperRef.value && __props.activeElement !== void 0) {
        const centerPosition = __props.activeElement.offsetTop - (wrapperRef.value.getBoundingClientRect().height - __props.activeElement.getBoundingClientRect().height) / 2;
        if (!isElementInsideViewport(wrapperRef.value)) {
          wrapperRef.value.scrollIntoView({ behavior: "instant", block: "nearest" });
        }
        wrapperRef.value.scrollTo({ top: centerPosition, behavior: "instant" });
      }
    });
    function addListeners() {
      document.addEventListener("click", onDocumentClickHandler);
      window.addEventListener("resize", debounce2(onResize, 100));
    }
    function removeListeners() {
      document.removeEventListener("click", onDocumentClickHandler);
      window.removeEventListener("resize", debounce2(onResize, 100));
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
    watch(
      () => __props.numOfItems,
      (oldValue, newValue) => {
        if (oldValue !== newValue && __props.isOpen) {
          calculatePosition();
        }
      }
    );
    onUnmounted2(removeListeners);
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
        const { marginTop, marginBottom } = getComputedStyle(wrapperElement);
        const marginTotal = parseInt(marginTop, 10) + parseInt(marginBottom, 10);
        verticalSpacing = Math.ceil(absWrapper.height - contentItemHeigth * __props.numOfItems) + marginTotal;
      }
      wrapperElement.style.overflowY = "auto";
      wrapperElement.style.overflowX = "hidden";
      wrapperElement.style.left = "0px";
      const rect = computeListboxRect(__props.anchor, { itemHeight: contentItemHeigth, numOfItems: __props.numOfItems, verticalSpacing });
      if (rect) {
        const { top, left, width, height } = rect;
        const offsetRect = wrapperElement?.offsetParent?.getBoundingClientRect();
        const offsetLeft = offsetRect?.x ?? 0;
        const offSetTop = Math.floor((offsetRect?.top ?? 0) + window.scrollY);
        wrapperElement.style.top = `${top - offSetTop}px`;
        wrapperElement.style.left = `${left - offsetLeft}px`;
        wrapperElement.style.width = `${width}px`;
        contentWrapper.style.maxHeight = `${height}px`;
        contentWrapper.style.width = `${width}px`;
      }
    }
    const __returned__ = { emit, wrapperRef, contentRef, teleportDisabled, popupClasses, teleportTarget, get guessedItemHeight() {
      return guessedItemHeight;
    }, set guessedItemHeight(v) {
      guessedItemHeight = v;
    }, get verticalSpacing() {
      return verticalSpacing;
    }, set verticalSpacing(v) {
      verticalSpacing = v;
    }, addListeners, removeListeners, isElementInsideViewport, onDocumentClickHandler, onResize, onKeyEsc, guessItemHeight, calculatePosition };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/IPopupListbox/IPopupListbox.vue?type=template
import { renderSlot as _renderSlot13, createElementVNode as _createElementVNode10, withModifiers as _withModifiers4, withKeys as _withKeys3, mergeProps as _mergeProps4, normalizeClass as _normalizeClass8, Teleport as _Teleport3, openBlock as _openBlock15, createBlock as _createBlock9, createCommentVNode as _createCommentVNode13 } from "vue";
var _hoisted_19 = ["onKeyup"];
var _hoisted_27 = { ref: "content" };
function render15(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.isOpen ? (_openBlock15(), _createBlock9(_Teleport3, {
    key: 0,
    to: $setup.teleportTarget,
    disabled: $setup.teleportDisabled
  }, [
    _createElementVNode10(
      "div",
      {
        ref: "popup",
        class: _normalizeClass8($setup.popupClasses)
      },
      [
        _createElementVNode10("div", _mergeProps4({ ref: "wrapper" }, _ctx.$attrs, {
          class: "popup__wrapper",
          tabindex: "0",
          onKeyup: _withKeys3(_withModifiers4($setup.onKeyEsc, ["stop"]), ["esc"]),
          onClick: _cache[0] || (_cache[0] = _withModifiers4(() => {
          }, ["stop"]))
        }), [
          _createElementVNode10(
            "div",
            _hoisted_27,
            [
              _renderSlot13(_ctx.$slots, "default")
            ],
            512
            /* NEED_PATCH */
          )
        ], 16, _hoisted_19)
      ],
      512
      /* NEED_PATCH */
    )
  ], 8, ["to"])) : _createCommentVNode13("v-if", true);
}

// packages/vue/src/internal-components/IPopupListbox/IPopupListbox.vue
IPopupListbox_default.render = render15;
IPopupListbox_default.__file = "packages/vue/src/internal-components/IPopupListbox/IPopupListbox.vue";
var IPopupListbox_default2 = IPopupListbox_default;

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/IPopupMenu/IPopupMenu.vue?type=script
import { defineComponent as defineComponent15 } from "vue";
import { focus as focus6 } from "@fkui/logic";

// packages/vue/src/internal-components/IPopupMenu/ipopupmenu-logic.ts
function getNewItemIndexFromMenuAction(action, index, n) {
  let newIndex;
  if (n <= 0) {
    return 0;
  }
  switch (action) {
    case 0 /* MOVE_NEXT */:
      newIndex = (index + 1) % n;
      break;
    case 1 /* MOVE_PREV */:
      newIndex = (index - 1 + n) % n;
      break;
    case 2 /* MOVE_FIRST */:
      newIndex = 0;
      break;
    case 3 /* MOVE_LAST */:
      newIndex = Math.max(n - 1, 0);
      break;
    default:
      newIndex = index;
  }
  return newIndex;
}
async function doMenuAction(action, target) {
  const itemsLength = target.items.length;
  const currentIndex = target.currentFocusedItemIndex;
  const newFocusedItemIndex = getNewItemIndexFromMenuAction(
    action,
    currentIndex,
    itemsLength
  );
  switch (action) {
    case 0 /* MOVE_NEXT */:
    case 1 /* MOVE_PREV */:
    case 2 /* MOVE_FIRST */:
    case 3 /* MOVE_LAST */:
      await target.setFocusOnItem(newFocusedItemIndex);
      break;
    case 4 /* ACTIVATE */:
      await target.activateItem(newFocusedItemIndex);
      break;
  }
}

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/IPopupMenu/IPopupMenu.vue?type=script
var preventKeys = ["Tab", "Up", "Down", "ArrowUp", "ArrowDown", "Home", "End", " ", "Spacebar", "Enter"];
var IPopupMenu_default = defineComponent15({
  name: "IPopupMenu",
  components: { IPopup: IPopup_default2 },
  props: {
    /**
     * Key of the currently selected and highlighted item.
     */
    modelValue: {
      type: String,
      required: false,
      default: ""
    },
    /**
     * Key of the currently focused item.
     * Sets focus on matching item element when value changes.
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
     */
    "close",
    /**
     * Emitted when an item is selected.
     *
     * @type {string} item key
     */
    "select",
    /**
     * V-model event. Emitted when an item is selected.
     *
     * @type {string} item key
     */
    "update:modelValue",
    /**
     * V-model event. Emitted when item focus changes.
     *
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
      handler(newVal) {
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
      focus6(itemAnchor, { preventScroll: true });
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
      if (preventKeys.includes(event.key)) {
        event.preventDefault();
      }
    },
    async onKeyDown(event) {
      if (!this.enableKeyboardNavigation) {
        return;
      }
      if (!preventKeys.includes(event.key)) {
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
      await doMenuAction(action, this);
    }
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/IPopupMenu/IPopupMenu.vue?type=template
import { renderList as _renderList4, Fragment as _Fragment5, openBlock as _openBlock16, createElementBlock as _createElementBlock12, toDisplayString as _toDisplayString6, createElementVNode as _createElementVNode11, createCommentVNode as _createCommentVNode14, createTextVNode as _createTextVNode3, normalizeClass as _normalizeClass9, resolveComponent as _resolveComponent7, withCtx as _withCtx6, createBlock as _createBlock10 } from "vue";
var _hoisted_110 = ["aria-label"];
var _hoisted_28 = {
  role: "menu",
  class: "ipopupmenu__list"
};
var _hoisted_35 = ["onClick"];
var _hoisted_43 = ["data-ref-index", "href", "target"];
var _hoisted_53 = {
  key: 0,
  class: "sr-only"
};
function render16(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_i_popup = _resolveComponent7("i-popup");
  return _openBlock16(), _createBlock10(_component_i_popup, {
    class: "ipopupmenu",
    "is-open": _ctx.isOpen,
    "keyboard-trap": false,
    anchor: _ctx.anchor,
    "focus-element": _ctx.focusElement,
    onClose: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close")),
    onKeyup: _ctx.onKeyUp,
    onKeydown: _ctx.onKeyDown
  }, {
    default: _withCtx6(() => [
      _createElementVNode11("nav", {
        class: "ipopupmenu ipopupmenu--vertical",
        "aria-label": _ctx.ariaLabel
      }, [
        _createElementVNode11("ul", _hoisted_28, [
          (_openBlock16(true), _createElementBlock12(
            _Fragment5,
            null,
            _renderList4(_ctx.items, (item, index) => {
              return _openBlock16(), _createElementBlock12("li", {
                ref_for: true,
                ref: "items",
                key: item.key,
                role: "presentation",
                class: _normalizeClass9(_ctx.itemClasses(item)),
                onClick: (event) => _ctx.onClickItem(event, item)
              }, [
                _createElementVNode11("a", {
                  ref_for: true,
                  ref: "anchors",
                  "data-ref-index": index,
                  href: item.href,
                  role: "menuitem",
                  target: item.target,
                  tabindex: "0"
                }, [
                  _ctx.isSelected(index) ? (_openBlock16(), _createElementBlock12("span", _hoisted_53, [
                    _createElementVNode11(
                      "span",
                      null,
                      _toDisplayString6(_ctx.selectedMenuItemScreenReaderText) + "\xA0",
                      1
                      /* TEXT */
                    )
                  ])) : _createCommentVNode14("v-if", true),
                  _createTextVNode3(
                    " " + _toDisplayString6(item.label),
                    1
                    /* TEXT */
                  )
                ], 8, _hoisted_43)
              ], 10, _hoisted_35);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ], 8, _hoisted_110)
    ]),
    _: 1
    /* STABLE */
  }, 8, ["is-open", "anchor", "focus-element", "onKeyup", "onKeydown"]);
}

// packages/vue/src/internal-components/IPopupMenu/IPopupMenu.vue
IPopupMenu_default.render = render16;
IPopupMenu_default.__file = "packages/vue/src/internal-components/IPopupMenu/IPopupMenu.vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/IAnimateExpand/IAnimateExpand.vue?type=script
import { defineComponent as defineComponent16 } from "vue";
var ANIMATION_DURATION = 500;
var NO_CSS_CLASSES = "";
var CLOSED_CSS_CLASS_OPACITY = "animate-expand animate-expand--opacity";
var CLOSED_CSS_CLASS = "animate-expand";
var ANIMATION_CSS_CLASSES = "animate-expand animate-expand--expanded";
var IAnimateExpand_default = defineComponent16({
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
      const content = this.$refs.content;
      return content ? content.getBoundingClientRect().height : 0;
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

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/IAnimateExpand/IAnimateExpand.vue?type=template
import { createCommentVNode as _createCommentVNode15, renderSlot as _renderSlot14, vShow as _vShow, withDirectives as _withDirectives, openBlock as _openBlock17, createElementBlock as _createElementBlock13, normalizeClass as _normalizeClass10, normalizeStyle as _normalizeStyle2, createElementVNode as _createElementVNode12, Fragment as _Fragment6 } from "vue";
var _hoisted_111 = {
  key: 0,
  ref: "content",
  "data-test": "animation-content"
};
function render17(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock17(), _createElementBlock13(
    _Fragment6,
    null,
    [
      _createCommentVNode15(" [html-validate-disable-next no-inline-style] "),
      _createElementVNode12(
        "div",
        {
          class: _normalizeClass10(_ctx.animationClasses),
          style: _normalizeStyle2(_ctx.heightStyle)
        },
        [
          _ctx.shouldVIf ? _withDirectives((_openBlock17(), _createElementBlock13(
            "div",
            _hoisted_111,
            [
              _createCommentVNode15(" @slot Slot used for content shown when component is expanded "),
              _renderSlot14(_ctx.$slots, "default")
            ],
            512
            /* NEED_PATCH */
          )), [
            [_vShow, _ctx.shouldVShow]
          ]) : _createCommentVNode15("v-if", true)
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

// packages/vue/src/internal-components/IAnimateExpand/IAnimateExpand.vue
IAnimateExpand_default.render = render17;
IAnimateExpand_default.__file = "packages/vue/src/internal-components/IAnimateExpand/IAnimateExpand.vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/ISkipLink/ISkipLink.vue?type=script
import { defineComponent as defineComponent17 } from "vue";
var ISkipLink_default = defineComponent17({
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

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/ISkipLink/ISkipLink.vue?type=template
import { createCommentVNode as _createCommentVNode16, renderSlot as _renderSlot15, toDisplayString as _toDisplayString7, createTextVNode as _createTextVNode4, openBlock as _openBlock18, createElementBlock as _createElementBlock14 } from "vue";
var _hoisted_112 = ["href"];
function render18(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock18(), _createElementBlock14("a", {
    class: "iskiplink",
    href: _ctx.href
  }, [
    _createCommentVNode16(" @slot Slot for default skip link text. "),
    _renderSlot15(_ctx.$slots, "default", {}, () => [
      _createTextVNode4(
        _toDisplayString7(_ctx.$t("fkui.skip-link.text", "G\xE5 direkt till inneh\xE5ll")),
        1
        /* TEXT */
      )
    ])
  ], 8, _hoisted_112);
}

// packages/vue/src/internal-components/ISkipLink/ISkipLink.vue
ISkipLink_default.render = render18;
ISkipLink_default.__file = "packages/vue/src/internal-components/ISkipLink/ISkipLink.vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/calendar/ICalendarMonth.vue?type=script
import { FDate as FDate3 } from "@fkui/date";
import { alertScreenReader, focus as focus7 } from "@fkui/logic";
import { defineComponent as defineComponent19 } from "vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/calendar/ICalendarMonthGrid.vue?type=script
import { defineComponent as defineComponent18 } from "vue";
import { groupByWeek, getWeekdayNamings } from "@fkui/date";
import { debounce as debounce3 } from "@fkui/logic";

// packages/vue/src/internal-components/calendar/get-day-offset.ts
function getDayStartOffset(days) {
  return days[0].weekDay - 1;
}
function getDayEndOffset(days) {
  return 7 - days[days.length - 1].weekDay;
}

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/calendar/ICalendarMonthGrid.vue?type=script
var ICalendarMonthGrid_default = defineComponent18({
  name: "ICalendarMonthGrid",
  props: {
    /**
     * Focused month.
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
    this.resizeObserver = new ResizeObserver(debounce3(this.onResize, 100));
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

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/calendar/ICalendarMonthGrid.vue?type=template
import { openBlock as _openBlock19, createElementBlock as _createElementBlock15, createCommentVNode as _createCommentVNode17, createElementVNode as _createElementVNode13, renderList as _renderList5, Fragment as _Fragment7, toDisplayString as _toDisplayString8, renderSlot as _renderSlot16 } from "vue";
var _hoisted_113 = ["aria-label"];
var _hoisted_29 = {
  key: 0,
  class: "calendar-month__col--week"
};
var _hoisted_36 = {
  key: 0,
  scope: "col",
  "aria-hidden": "true",
  class: "calendar-month__header-cell"
};
var _hoisted_44 = ["title"];
var _hoisted_54 = { key: 1 };
var _hoisted_62 = {
  key: 0,
  class: "calendar-month__cell calendar-month__cell--week-number",
  "aria-hidden": "true"
};
var _hoisted_72 = ["colspan"];
var _hoisted_82 = ["colspan"];
var _hoisted_92 = {
  key: 0,
  "aria-hidden": "true"
};
var _hoisted_102 = ["colspan"];
var _hoisted_114 = {
  key: 1,
  "aria-hidden": "true"
};
var _hoisted_122 = ["colspan"];
function render19(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock19(), _createElementBlock15("table", {
    class: "calendar-month__table",
    role: "grid",
    "aria-label": _ctx.ariaLabel,
    onFocusin: _cache[0] || (_cache[0] = (...args) => _ctx.onFocusin && _ctx.onFocusin(...args)),
    onFocusout: _cache[1] || (_cache[1] = (...args) => _ctx.onFocusout && _ctx.onFocusout(...args))
  }, [
    _createElementVNode13("colgroup", null, [
      !_ctx.internalHideWeekNumbers ? (_openBlock19(), _createElementBlock15("col", _hoisted_29)) : _createCommentVNode17("v-if", true),
      _cache[2] || (_cache[2] = _createElementVNode13(
        "col",
        { class: "calendar-month__col--day" },
        null,
        -1
        /* CACHED */
      )),
      _cache[3] || (_cache[3] = _createElementVNode13(
        "col",
        { class: "calendar-month__col--day" },
        null,
        -1
        /* CACHED */
      )),
      _cache[4] || (_cache[4] = _createElementVNode13(
        "col",
        { class: "calendar-month__col--day" },
        null,
        -1
        /* CACHED */
      )),
      _cache[5] || (_cache[5] = _createElementVNode13(
        "col",
        { class: "calendar-month__col--day" },
        null,
        -1
        /* CACHED */
      )),
      _cache[6] || (_cache[6] = _createElementVNode13(
        "col",
        { class: "calendar-month__col--day" },
        null,
        -1
        /* CACHED */
      )),
      _cache[7] || (_cache[7] = _createElementVNode13(
        "col",
        { class: "calendar-month__col--day" },
        null,
        -1
        /* CACHED */
      )),
      _cache[8] || (_cache[8] = _createElementVNode13(
        "col",
        { class: "calendar-month__col--day" },
        null,
        -1
        /* CACHED */
      ))
    ]),
    _createElementVNode13("thead", null, [
      _createElementVNode13("tr", null, [
        !_ctx.internalHideWeekNumbers ? (_openBlock19(), _createElementBlock15("th", _hoisted_36)) : _createCommentVNode17("v-if", true),
        (_openBlock19(true), _createElementBlock15(
          _Fragment7,
          null,
          _renderList5(_ctx.weekdays, (weekday) => {
            return _openBlock19(), _createElementBlock15("th", {
              key: weekday.name,
              scope: "col",
              "aria-hidden": "true",
              class: "calendar-month__header-cell"
            }, [
              _ctx.showShortWeekdays ? (_openBlock19(), _createElementBlock15("abbr", {
                key: 0,
                title: weekday.name
              }, _toDisplayString8(weekday.shortName), 9, _hoisted_44)) : (_openBlock19(), _createElementBlock15(
                "span",
                _hoisted_54,
                _toDisplayString8(weekday.name),
                1
                /* TEXT */
              ))
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]),
    _createElementVNode13("tbody", null, [
      (_openBlock19(true), _createElementBlock15(
        _Fragment7,
        null,
        _renderList5(_ctx.weeks, (week) => {
          return _openBlock19(), _createElementBlock15("tr", {
            key: week.week
          }, [
            !_ctx.internalHideWeekNumbers ? (_openBlock19(), _createElementBlock15(
              "td",
              _hoisted_62,
              _toDisplayString8(week.week),
              1
              /* TEXT */
            )) : _createCommentVNode17("v-if", true),
            _ctx.getDayStartOffset(week.days) ? (_openBlock19(), _createElementBlock15("td", {
              key: 1,
              class: "calendar-month__cell",
              colspan: _ctx.getDayStartOffset(week.days)
            }, null, 8, _hoisted_72)) : _createCommentVNode17("v-if", true),
            (_openBlock19(true), _createElementBlock15(
              _Fragment7,
              null,
              _renderList5(week.days, (day) => {
                return _openBlock19(), _createElementBlock15("td", {
                  key: day.toString(),
                  class: "calendar-month__cell",
                  role: "presentation"
                }, [
                  _createCommentVNode17('\n                    @slot Slot for rendering of day content. Slot scope is available through `v-slot="{ <propertyName> }"`, e.g. `v-slot="{ date, focused }"`.\n                    @binding {FDate} date Date of day.\n                    @binding {bool} focused If month component is focused or not.\n                    '),
                  _renderSlot16(_ctx.$slots, "default", {
                    date: day,
                    focused: _ctx.focused
                  })
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            _ctx.getDayEndOffset(week.days) ? (_openBlock19(), _createElementBlock15("td", {
              key: 2,
              class: "calendar-month__cell",
              colspan: _ctx.getDayEndOffset(week.days),
              "aria-hidden": "true"
            }, null, 8, _hoisted_82)) : _createCommentVNode17("v-if", true)
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      _ctx.weeks.length < 5 ? (_openBlock19(), _createElementBlock15("tr", _hoisted_92, [
        _createElementVNode13("td", {
          class: "calendar-month__cell",
          colspan: _ctx.totalCols,
          "aria-hidden": "true"
        }, null, 8, _hoisted_102)
      ])) : _createCommentVNode17("v-if", true),
      _ctx.weeks.length < 6 ? (_openBlock19(), _createElementBlock15("tr", _hoisted_114, [
        _createElementVNode13("td", {
          class: "calendar-month__cell",
          colspan: _ctx.totalCols,
          "aria-hidden": "true"
        }, null, 8, _hoisted_122)
      ])) : _createCommentVNode17("v-if", true)
    ])
  ], 40, _hoisted_113);
}

// packages/vue/src/internal-components/calendar/ICalendarMonthGrid.vue
ICalendarMonthGrid_default.render = render19;
ICalendarMonthGrid_default.__file = "packages/vue/src/internal-components/calendar/ICalendarMonthGrid.vue";
var ICalendarMonthGrid_default2 = ICalendarMonthGrid_default;

// packages/vue/src/internal-components/calendar/get-day-step.ts
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

// packages/vue/src/internal-components/calendar/get-day-tabindex.ts
function isSameMonth(a, b) {
  return a.startOfMonth().equals(b.startOfMonth());
}
function getDayTabindex(date, active, entry) {
  const ref6 = active ?? entry;
  if (ref6 && isSameMonth(ref6, date)) {
    return date.equals(ref6) ? 0 : -1;
  } else {
    return date.day === 1 ? 0 : -1;
  }
}

// packages/vue/src/internal-components/calendar/is-invalid-month.ts
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

// packages/vue/src/internal-components/calendar/get-message.ts
function getMessage($t2, date, minDate, maxDate) {
  const invalidMonth = isInvalidMonth(date, minDate, maxDate);
  if (!invalidMonth) {
    return void 0;
  }
  if (date.isBefore(minDate)) {
    const { day, monthName, year } = minDate;
    return $t2(
      "fkui.calendar.error.below-min-date",
      "Du kan inte v\xE4lja en dag f\xF6re {{day}} {{month}} {{year}}",
      { day, month: monthName, year }
    );
  }
  if (date.isAfter(maxDate)) {
    const { day, monthName, year } = maxDate;
    return $t2(
      "fkui.calendar.error.above-max-date",
      "Du kan inte v\xE4lja en dag efter {{day}} {{month}} {{year}}",
      { day, month: monthName, year }
    );
  }
}

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/calendar/ICalendarMonth.vue?type=script
var ICalendarMonth_default = defineComponent19({
  name: "ICalendarMonth",
  components: {
    ICalendarMonthGrid: ICalendarMonthGrid_default2
  },
  mixins: [TranslationMixin],
  props: {
    /**
     * Active month.
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
  emits: [
    "change",
    /**
     * `click` event.
     * @type {string}
     */
    "click",
    /**
     * `v-model` event.
     * @type {string}
     */
    "update:modelValue"
  ],
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
        alertScreenReader(message, { assertive: true });
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
        focus7(navigatedDayElement);
      }
    },
    isDayFocused(date) {
      return document.activeElement === this.$refs[date.toString()];
    },
    getTabindex(date) {
      let activeDate = void 0;
      if (document.activeElement instanceof HTMLElement) {
        const activeString = document.activeElement.dataset.date;
        activeDate = activeString ? FDate3.fromIso(activeString) : void 0;
      }
      return getDayTabindex(date, activeDate, this.tabDate);
    }
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/calendar/ICalendarMonth.vue?type=template
import { createCommentVNode as _createCommentVNode18, renderSlot as _renderSlot17, withModifiers as _withModifiers5, createElementVNode as _createElementVNode14, resolveComponent as _resolveComponent8, withCtx as _withCtx7, openBlock as _openBlock20, createBlock as _createBlock11 } from "vue";
var _hoisted_115 = ["data-date", "tabindex", "onClick", "onKeydown"];
function render20(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_i_calendar_month_grid = _resolveComponent8("i-calendar-month-grid");
  return _openBlock20(), _createBlock11(_component_i_calendar_month_grid, { value: _ctx.modelValue }, {
    default: _withCtx7(({ date }) => [
      _createElementVNode14("div", {
        ref: date.toString(),
        role: "gridcell",
        class: "calendar-month__button",
        "data-test": "select-day-button",
        "data-date": date.toString(),
        tabindex: _ctx.getTabindex(date),
        onClick: _withModifiers5(($event) => _ctx.onClickDay(date), ["stop", "prevent"]),
        onKeydown: ($event) => _ctx.onKeydownDay(date, $event)
      }, [
        _createCommentVNode18("\n                    @slot Slot for rendering of day content.\n                    @binding {FDate} date The date object for the current day.\n                    @binding {boolean} is-focused Indicates whether the current day is focused.\n                "),
        _renderSlot17(_ctx.$slots, "default", {
          date,
          isFocused: _ctx.isDayFocused(date)
        })
      ], 40, _hoisted_115)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["value"]);
}

// packages/vue/src/internal-components/calendar/ICalendarMonth.vue
ICalendarMonth_default.render = render20;
ICalendarMonth_default.__file = "packages/vue/src/internal-components/calendar/ICalendarMonth.vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/calendar/ICalendarNavbar.vue?type=script
import { capitalize, defineComponent as defineComponent20 } from "vue";
import { alertScreenReader as alertScreenReader2, ElementIdService as ElementIdService4 } from "@fkui/logic";
var ICalendarNavbar_default = defineComponent20({
  name: "ICalendarNavbar",
  components: {
    FIcon: FIcon_default2
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
    },
    /**
     * Includes a year selector when enabled.
     */
    yearSelector: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * Displays the year selector as open when enabled.
     */
    yearSelectorOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * Optional id (generated by default).
     */
    id: {
      type: String,
      required: false,
      default: () => ElementIdService4.generateElementId()
    }
  },
  emits: [
    "change",
    /**
     * V-model event.
     * @param value
     * @type {FDate}
     */
    "update:modelValue",
    /**
     * Emitted when year selector is opened or closed.
     * @type {boolean}
     */
    "update:yearSelectorOpen"
  ],
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
    openYearSelectorText() {
      return this.$t("fkui.calendar-navbar.open-year-selector", "\xD6ppna \xE5rsv\xE4ljare");
    },
    closeYearSelectorText() {
      return this.$t("fkui.calendar-navbar.close-year-selector", "St\xE4ng \xE5rsv\xE4ljare");
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
    },
    monthTitleClass() {
      return this.yearSelector ? "sr-only" : "";
    }
  },
  methods: {
    onClickYearSelector() {
      this.changeDisplayYearSelectorAsOpen(!this.yearSelectorOpen);
    },
    onClickPreviousButton() {
      if (!this.previousDisabled) {
        this.$emit("update:modelValue", this.previousValue);
        const previousMonth = this.getDateText(this.previousValue);
        const previousMonthText = this.$t("fkui.calendar-navbar.previous-month", "{{ previousMonth }} visas", {
          previousMonth
        });
        alertScreenReader2(previousMonthText, { assertive: true });
        return;
      }
      const message = getMessage(this.$t, this.previousValue, this.minDate, this.maxDate);
      if (message) {
        alertScreenReader2(message, { assertive: true });
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
        alertScreenReader2(nextMonthText, { assertive: true });
        return;
      }
      const message = getMessage(this.$t, this.nextValue, this.minDate, this.maxDate);
      if (message) {
        alertScreenReader2(message, { assertive: true });
      }
    },
    onCloseYearSelector() {
      this.changeDisplayYearSelectorAsOpen(false);
    },
    changeDisplayYearSelectorAsOpen(value) {
      this.$emit("update:yearSelectorOpen", value);
    },
    getDateText(value) {
      return `${capitalize(value.monthName)} ${value.year}`;
    },
    isFocused(ref6) {
      return document.activeElement === this.$refs[ref6];
    }
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/calendar/ICalendarNavbar.vue?type=template
import { toDisplayString as _toDisplayString9, normalizeClass as _normalizeClass11, createElementVNode as _createElementVNode15, createCommentVNode as _createCommentVNode19, resolveComponent as _resolveComponent9, createVNode as _createVNode6, withModifiers as _withModifiers6, openBlock as _openBlock21, createElementBlock as _createElementBlock16 } from "vue";
var _hoisted_116 = { class: "calendar-navbar" };
var _hoisted_210 = { class: "calendar-navbar__month" };
var _hoisted_37 = ["aria-live"];
var _hoisted_45 = ["id", "aria-expanded"];
var _hoisted_55 = {
  class: "calendar-navbar__year-selector-button--title",
  "aria-hidden": "true"
};
var _hoisted_63 = { class: "sr-only" };
var _hoisted_73 = ["aria-disabled", "aria-live"];
var _hoisted_83 = { class: "sr-only" };
var _hoisted_93 = ["aria-disabled", "aria-live"];
var _hoisted_103 = { class: "sr-only" };
function render21(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = _resolveComponent9("f-icon");
  return _openBlock21(), _createElementBlock16("div", _hoisted_116, [
    _createElementVNode15("div", _hoisted_210, [
      _createElementVNode15("span", {
        class: _normalizeClass11([_ctx.monthTitleClass, "calendar-navbar__month--title"]),
        tabindex: "-1",
        "aria-live": _ctx.isFocused("yearSelectorButton") ? "polite" : "off"
      }, _toDisplayString9(_ctx.currentText), 11, _hoisted_37),
      _createCommentVNode19(" Button - Open/close year selector "),
      _ctx.yearSelector ? (_openBlock21(), _createElementBlock16("button", {
        key: 0,
        id: `${_ctx.id}`,
        ref: "yearSelectorButton",
        class: "calendar-navbar__year-selector-button",
        type: "button",
        "aria-haspopup": "listbox",
        "aria-expanded": _ctx.yearSelectorOpen,
        onClick: _cache[0] || (_cache[0] = _withModifiers6((...args) => _ctx.onClickYearSelector && _ctx.onClickYearSelector(...args), ["stop", "prevent"]))
      }, [
        _createElementVNode15(
          "span",
          _hoisted_55,
          _toDisplayString9(_ctx.currentText),
          1
          /* TEXT */
        ),
        _createElementVNode15(
          "span",
          _hoisted_63,
          _toDisplayString9(_ctx.yearSelectorOpen ? _ctx.closeYearSelectorText : _ctx.openYearSelectorText),
          1
          /* TEXT */
        ),
        _createVNode6(_component_f_icon, {
          class: _normalizeClass11(_ctx.yearSelectorOpen ? "calendar-navbar__arrow--up" : void 0),
          name: "arrow-down"
        }, null, 8, ["class"])
      ], 8, _hoisted_45)) : _createCommentVNode19("v-if", true)
    ]),
    !_ctx.yearSelectorOpen ? (_openBlock21(), _createElementBlock16("button", {
      key: 0,
      ref: "previousButton",
      class: "calendar-navbar__arrow calendar-navbar__arrow--previous",
      type: "button",
      "aria-disabled": _ctx.previousDisabled,
      "aria-live": _ctx.isFocused("previousButton") ? "polite" : "off",
      onClick: _cache[1] || (_cache[1] = _withModifiers6((...args) => _ctx.onClickPreviousButton && _ctx.onClickPreviousButton(...args), ["stop"]))
    }, [
      _createElementVNode15(
        "span",
        _hoisted_83,
        _toDisplayString9(_ctx.previousSrText),
        1
        /* TEXT */
      ),
      _createVNode6(_component_f_icon, {
        class: _normalizeClass11(_ctx.previousIconClasses),
        name: "arrow-right"
      }, null, 8, ["class"])
    ], 8, _hoisted_73)) : _createCommentVNode19("v-if", true),
    !_ctx.yearSelectorOpen ? (_openBlock21(), _createElementBlock16("button", {
      key: 1,
      ref: "nextButton",
      class: "calendar-navbar__arrow calendar-navbar__arrow--next",
      type: "button",
      "aria-disabled": _ctx.nextDisabled,
      "aria-live": _ctx.isFocused("nextButton") ? "polite" : "off",
      onClick: _cache[2] || (_cache[2] = _withModifiers6((...args) => _ctx.onClickNextButton && _ctx.onClickNextButton(...args), ["stop"]))
    }, [
      _createElementVNode15(
        "span",
        _hoisted_103,
        _toDisplayString9(_ctx.nextSrText),
        1
        /* TEXT */
      ),
      _createVNode6(_component_f_icon, {
        class: _normalizeClass11(_ctx.nextIconClasses),
        name: "arrow-right"
      }, null, 8, ["class"])
    ], 8, _hoisted_93)) : _createCommentVNode19("v-if", true)
  ]);
}

// packages/vue/src/internal-components/calendar/ICalendarNavbar.vue
ICalendarNavbar_default.render = render21;
ICalendarNavbar_default.__file = "packages/vue/src/internal-components/calendar/ICalendarNavbar.vue";

// packages/vue/src/internal-components/combobox/useCombobox.ts
import { ElementIdService as ElementIdService5, isEmpty as isEmpty2 } from "@fkui/logic";
import {
  computed as computed2,
  nextTick as nextTick2,
  onMounted as onMounted2,
  ref,
  watchEffect as watchEffect2
} from "vue";

// packages/vue/src/internal-components/combobox/filter-options.ts
import { isEmpty } from "@fkui/logic";

// packages/vue/src/internal-components/combobox/useCombobox.ts
var $t = useTranslate();

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/combobox/IComboboxDropdown.vue?type=script
import { defineComponent as _defineComponent2 } from "vue";
import { nextTick as nextTick3, ref as ref2, useTemplateRef as useTemplateRef2, watchEffect as watchEffect3 } from "vue";
var IComboboxDropdown_default = /* @__PURE__ */ _defineComponent2({
  __name: "IComboboxDropdown",
  props: {
    id: { type: String, required: true },
    isOpen: { type: Boolean, required: true },
    options: { type: Array, required: true },
    activeOption: { type: [String, null], required: true },
    activeOptionId: { type: String, required: true },
    inputNode: { type: null, required: true }
  },
  emits: ["select", "close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emit = __emit;
    const listboxRef = useTemplateRef2("listbox");
    const activeElement = ref2();
    function isOptionActive(item) {
      return item === __props.activeOption;
    }
    function onOptionClick(value) {
      emit("select", value);
    }
    function onListboxClose() {
      emit("close");
    }
    watchEffect3(async () => {
      if (__props.activeOption !== null) {
        await nextTick3();
        const activeOptionNode = listboxRef.value?.querySelector(`#${__props.activeOptionId}`);
        activeElement.value = activeOptionNode ?? void 0;
      }
    });
    const __returned__ = { emit, listboxRef, activeElement, isOptionActive, onOptionClick, onListboxClose, get IPopupListbox() {
      return IPopupListbox_default2;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/combobox/IComboboxDropdown.vue?type=template
import { createCommentVNode as _createCommentVNode20, renderList as _renderList6, Fragment as _Fragment8, openBlock as _openBlock22, createElementBlock as _createElementBlock17, toDisplayString as _toDisplayString10, withModifiers as _withModifiers7, normalizeClass as _normalizeClass12, createElementVNode as _createElementVNode16, withCtx as _withCtx8, createVNode as _createVNode7 } from "vue";
var _hoisted_117 = { class: "combobox" };
var _hoisted_211 = ["id"];
var _hoisted_38 = ["id", "aria-selected", "onClick"];
function render22(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock22(), _createElementBlock17("div", _hoisted_117, [
    _createVNode7($setup["IPopupListbox"], {
      "is-open": $props.isOpen,
      anchor: $props.inputNode,
      "num-of-items": $props.options.length,
      "active-element": $setup.activeElement,
      class: "combobox__listbox",
      onClose: $setup.onListboxClose
    }, {
      default: _withCtx8(() => [
        _createCommentVNode20(" [html-validate-disable-next prefer-native-element] "),
        _createElementVNode16("ul", {
          id: $props.id,
          ref: "listbox",
          role: "listbox",
          "aria-label": "F\xF6rslag",
          class: "combobox__listbox__list"
        }, [
          (_openBlock22(true), _createElementBlock17(
            _Fragment8,
            null,
            _renderList6($props.options, (item) => {
              return _openBlock22(), _createElementBlock17("li", {
                id: $setup.isOptionActive(item) ? $props.activeOptionId : void 0,
                key: item,
                role: "option",
                "aria-selected": $setup.isOptionActive(item) ? "true" : void 0,
                class: _normalizeClass12(["combobox__listbox__option", { "combobox__listbox__option--highlight": $setup.isOptionActive(item) }]),
                onClick: _withModifiers7(($event) => $setup.onOptionClick(item), ["stop", "prevent"])
              }, _toDisplayString10(item), 11, _hoisted_38);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 8, _hoisted_211)
      ]),
      _: 1
      /* STABLE */
    }, 8, ["is-open", "anchor", "num-of-items", "active-element"])
  ]);
}

// packages/vue/src/internal-components/combobox/IComboboxDropdown.vue
IComboboxDropdown_default.render = render22;
IComboboxDropdown_default.__file = "packages/vue/src/internal-components/combobox/IComboboxDropdown.vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/combobox/IComboboxToggleButton.vue?type=script
import { defineComponent as _defineComponent3 } from "vue";
var IComboboxToggleButton_default = /* @__PURE__ */ _defineComponent3({
  __name: "IComboboxToggleButton",
  emits: ["toggle"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const $t2 = useTranslate();
    const emit = __emit;
    const ariaLabel = $t2("fkui.combobox.toggle", "\xD6ppna f\xF6rslagen");
    const __returned__ = { $t: $t2, emit, ariaLabel, get FIcon() {
      return FIcon_default2;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/internal-components/combobox/IComboboxToggleButton.vue?type=template
import { createVNode as _createVNode8, openBlock as _openBlock23, createElementBlock as _createElementBlock18 } from "vue";
var _hoisted_118 = ["aria-label"];
function render23(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock23(), _createElementBlock18("button", {
    class: "combobox__button",
    type: "button",
    "aria-label": $setup.ariaLabel,
    tabindex: "-1",
    onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("toggle"))
  }, [
    _createVNode8($setup["FIcon"], {
      name: "arrow-down",
      class: "text-field__icon"
    })
  ], 8, _hoisted_118);
}

// packages/vue/src/internal-components/combobox/IComboboxToggleButton.vue
IComboboxToggleButton_default.render = render23;
IComboboxToggleButton_default.__file = "packages/vue/src/internal-components/combobox/IComboboxToggleButton.vue";

// packages/vue/src/components/FTooltip/tooltip-attach-to.ts
var tooltipAttachTo = Symbol("tooltipAttachTo");

// packages/vue/src/components/FTooltip/use-animation.ts
import { ref as ref3, computed as computed3, onMounted as onMounted3, watchEffect as watchEffect4 } from "vue";
var initialized = false;
var reducedMotion = ref3(false);
function useAnimation(options) {
  const { duration = 250, easing = "ease-in", element: elementRef } = options;
  let current = "collapse";
  let animation = null;
  onMounted3(() => {
    if (initialized) {
      return;
    }
    if ("matchMedia" in window) {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );
      reducedMotion.value = prefersReducedMotion.matches;
      prefersReducedMotion.addEventListener("change", (event) => {
        reducedMotion.value = event.matches;
      });
    } else {
      reducedMotion.value = true;
    }
    initialized = true;
  });
  watchEffect4(() => {
    if (elementRef.value) {
      elementRef.value.classList.toggle("expanded", current === "expand");
    }
  });
  return {
    enabled: computed3(() => reducedMotion.value === false),
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
      const h2 = element.offsetHeight;
      if (state === "expand") {
        animation = element.animate(
          [{ height: 0 }, { height: `${h2}px` }],
          {
            duration,
            easing
          }
        );
      } else {
        animation = element.animate(
          [{ height: `${h2}px` }, { height: 0 }],
          {
            duration,
            easing
          }
        );
      }
      animation.addEventListener("finish", () => {
        element.classList.remove("animating");
      });
    }
  };
}

// packages/vue/src/components/FTooltip/use-horizontal-offset.ts
import { onMounted as onMounted4, onUnmounted as onUnmounted3, readonly, ref as ref4, watch as watch2 } from "vue";
function useHorizontalOffset(options) {
  const { element: elementRef, parent: parentRef } = options;
  const offset2 = ref4(0);
  watch2(() => elementRef.value, updateOffset);
  watch2(() => parentRef, updateOffset);
  onMounted4(() => {
    window.addEventListener("resize", updateOffset);
  });
  onUnmounted3(() => {
    window.removeEventListener("resize", updateOffset);
  });
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

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FTooltip/FTooltip.vue?type=script
var FTooltip_default = defineComponent21({
  name: "FTooltip",
  components: { FExpand: FExpand_default2, FIcon: FIcon_default2, IFlex: IFlex_default2, IFlexItem: IFlexItem_default2 },
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
      default: TranslationService3.provider.translate("fkui.tooltip.close", "St\xE4ng")
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
  emits: [
    /**
     * v-model event.
     *
     * @param {boolean} value - Model value
     */
    "update:modelValue",
    /**
     * Emitted when the state of the tooltip (collapsed/expanded) changes.
     *
     * @param {{ isOpen: boolean }} event - New state of tooltip.
     */
    "toggle"
  ],
  setup(props) {
    const provided = inject(tooltipAttachTo, null);
    const attachTo = toRef(props, "attachTo");
    const ready = ref5(false);
    const iconTarget = computed4(() => {
      if (provided?.value) {
        return provided.value;
      }
      if (attachTo.value) {
        return attachTo.value;
      }
      return null;
    });
    const wrapper = useTemplateRef3("wrapper");
    const button = useTemplateRef3("button");
    const { animate } = useAnimation({
      duration: 250,
      easing: "ease-in",
      element: wrapper
    });
    const offset2 = useHorizontalOffset({
      element: button,
      parent: computed4(() => iconTarget.value?.parentElement ?? null)
    });
    watchEffect5(() => {
      iconTarget.value?.classList.add("tooltip__container");
    });
    watchEffect5(() => {
      if (!wrapper.value) {
        return;
      }
      wrapper.value.style.setProperty("--f-tooltip-offset", `${offset2.value}px`);
      ready.value = true;
    });
    return { animate, iconTarget, ready };
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
    const slots = useSlots2();
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
      const event = { isOpen: this.isOpen };
      this.$emit("update:modelValue", value);
      this.$emit("toggle", event);
      if (!this.isOpen) {
        focus5(this.$refs.button);
      }
      this.animate(value ? "expand" : "collapse");
    }
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FTooltip/FTooltip.vue?type=template
import { createCommentVNode as _createCommentVNode21, resolveComponent as _resolveComponent10, createVNode as _createVNode9, toDisplayString as _toDisplayString11, createElementVNode as _createElementVNode17, Teleport as _Teleport4, openBlock as _openBlock24, createBlock as _createBlock12, renderSlot as _renderSlot18, resolveDynamicComponent as _resolveDynamicComponent2, withCtx as _withCtx9, createElementBlock as _createElementBlock19, mergeProps as _mergeProps5, Fragment as _Fragment9 } from "vue";
var _hoisted_119 = ["aria-expanded"];
var _hoisted_212 = { class: "icon-stack icon-stack--tooltip" };
var _hoisted_39 = { class: "sr-only" };
var _hoisted_46 = {
  key: 0,
  class: "tooltip__bubble",
  tabindex: "-1"
};
var _hoisted_56 = { class: "tooltip__body" };
var _hoisted_64 = { class: "tooltip__footer" };
function render24(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = _resolveComponent10("f-icon");
  return _openBlock24(), _createElementBlock19(
    _Fragment9,
    null,
    [
      _createCommentVNode21(" [html-validate-disable-next element-case -- false positive, is proper case for Vue] "),
      (_openBlock24(), _createBlock12(_Teleport4, {
        disabled: _ctx.iconTarget === null,
        to: _ctx.iconTarget
      }, [
        _createElementVNode17("button", {
          ref: "button",
          class: "tooltip__button",
          type: "button",
          "aria-expanded": _ctx.isOpen,
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickToggle && _ctx.onClickToggle(...args))
        }, [
          _createElementVNode17("span", _hoisted_212, [
            _createVNode9(_component_f_icon, { name: "circle" }),
            _createVNode9(_component_f_icon, { name: "i" }),
            _createElementVNode17(
              "span",
              _hoisted_39,
              _toDisplayString11(_ctx.screenReaderText),
              1
              /* TEXT */
            )
          ])
        ], 8, _hoisted_119)
      ], 8, ["disabled", "to"])),
      _createElementVNode17(
        "div",
        _mergeProps5({
          ref: "wrapper",
          class: "tooltip"
        }, _ctx.$attrs),
        [
          _ctx.ready ? (_openBlock24(), _createElementBlock19("div", _hoisted_46, [
            _ctx.hasHeader ? (_openBlock24(), _createBlock12(_resolveDynamicComponent2(_ctx.headerTag), {
              key: 0,
              class: "tooltip__header"
            }, {
              default: _withCtx9(() => [
                _createCommentVNode21(" @slot Tooltip header content "),
                _renderSlot18(_ctx.$slots, "header")
              ]),
              _: 3
              /* FORWARDED */
            })) : _createCommentVNode21("v-if", true),
            _createElementVNode17("div", _hoisted_56, [
              _createCommentVNode21(" @slot Tooltip body content"),
              _renderSlot18(_ctx.$slots, "body")
            ]),
            _createElementVNode17("div", _hoisted_64, [
              _createElementVNode17("button", {
                class: "close-button",
                type: "button",
                onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onClickToggle && _ctx.onClickToggle(...args))
              }, [
                _createElementVNode17(
                  "span",
                  null,
                  _toDisplayString11(_ctx.closeButtonText),
                  1
                  /* TEXT */
                ),
                _createVNode9(_component_f_icon, {
                  class: "button__icon",
                  name: "close"
                })
              ])
            ])
          ])) : _createCommentVNode21("v-if", true)
        ],
        16
        /* FULL_PROPS */
      )
    ],
    64
    /* STABLE_FRAGMENT */
  );
}

// packages/vue/src/components/FTooltip/FTooltip.vue
FTooltip_default.render = render24;
FTooltip_default.__file = "packages/vue/src/components/FTooltip/FTooltip.vue";

// packages/vue/src/components/FFieldset/label-classes.ts
function* labelClasses(options) {
  const { labelClass } = options;
  yield "fieldset__label";
  yield labelClass;
}

// packages/vue/src/components/FFieldset/content-classes.ts
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

// packages/vue/src/components/FFieldset/use-fieldset.ts
import { inject as inject2 } from "vue";
var injectionKeys = {
  sharedName: Symbol("sharedName"),
  showDetails: Symbol("showDetails"),
  getFieldsetLabelText: Symbol("getFieldsetLabelText")
};
function useFieldset() {
  return {
    sharedName: inject2(injectionKeys.sharedName, void 0),
    showDetails: inject2(injectionKeys.showDetails, "never"),
    getFieldsetLabelText: inject2(
      injectionKeys.getFieldsetLabelText,
      () => void 0
    )
  };
}

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FFieldset/FFieldset.vue?type=script
function isEqual2(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  return a.every((_, i) => a[i] === b[i]);
}
var FFieldset_default = defineComponent22({
  name: "FFieldset",
  components: {
    FIcon: FIcon_default2
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
      default: () => ElementIdService6.generateElementId()
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
    const slots = useSlots3();
    provide(injectionKeys.sharedName, props.name);
    provide(injectionKeys.showDetails, props.showDetails);
    provide(injectionKeys.getFieldsetLabelText, () => {
      return renderSlotText(slots.label);
    });
    provide(tooltipAttachTo, useTemplateRef4("tooltipAttachTo"));
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
      const { hasRadiobutton, hasCheckbox, horizontal, chip, border } = this;
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
      return debounce4(this.updateCheckboxChildren.bind(this), 150);
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
    const types = Array.from(
      this.$el.querySelectorAll(`input[type="checkbox"], input[type="radio"]`),
      (it) => it.getAttribute("type")
    );
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
    async onValidity({ detail }) {
      if (detail.target !== this.$el) {
        return;
      }
      this.detail = detail;
      await this.$nextTick();
      const errorMessage = renderSlotText(this.$slots.label) ?? "";
      const firstFocusableElement = this.$el.querySelector(
        "input:not(disabled), select:not(disabled), textarea:not(disabled)"
      );
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
      if (!isEqual2(this.children, checkboxes)) {
        this.children = checkboxes;
      }
    }
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FFieldset/FFieldset.vue?type=template
import { createCommentVNode as _createCommentVNode22, renderSlot as _renderSlot19, toDisplayString as _toDisplayString12, createElementVNode as _createElementVNode18, openBlock as _openBlock25, createElementBlock as _createElementBlock20, normalizeProps as _normalizeProps2, guardReactiveProps as _guardReactiveProps2, resolveComponent as _resolveComponent11, createVNode as _createVNode10, createTextVNode as _createTextVNode5, normalizeClass as _normalizeClass13, Fragment as _Fragment10 } from "vue";
var _hoisted_120 = ["id"];
var _hoisted_213 = {
  key: 0,
  class: "sr-only"
};
var _hoisted_310 = {
  key: 0,
  class: "label__message label__message--error"
};
var _hoisted_47 = {
  key: 0,
  "data-test": "checked-boxes",
  class: "sr-only",
  "aria-live": "polite"
};
var _hoisted_57 = { key: 0 };
var _hoisted_65 = { key: 1 };
var _hoisted_74 = {
  ref: "tooltipAttachTo",
  class: "label"
};
var _hoisted_84 = { "aria-hidden": "true" };
var _hoisted_94 = {
  key: 0,
  class: "label__message label__message--error"
};
function render25(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = _resolveComponent11("f-icon");
  return _openBlock25(), _createElementBlock20("fieldset", {
    id: _ctx.id,
    class: _normalizeClass13(["fieldset", _ctx.classes]),
    onValidity: _cache[0] || (_cache[0] = (...args) => _ctx.onValidity && _ctx.onValidity(...args))
  }, [
    (_openBlock25(), _createElementBlock20(
      "legend",
      {
        key: _ctx.legendKey,
        class: _normalizeClass13(["label", _ctx.legendClass])
      },
      [
        _createCommentVNode22(" @slot Slot for label content. This slot is required. "),
        _renderSlot19(_ctx.$slots, "label"),
        _ctx.hasCheckbox && _ctx.children.length > 1 ? (_openBlock25(), _createElementBlock20("span", _hoisted_213, [
          _createElementVNode18(
            "span",
            null,
            _toDisplayString12(_ctx.numberOfCheckboxesScreenReaderText),
            1
            /* TEXT */
          )
        ])) : _createCommentVNode22("v-if", true),
        _createCommentVNode22("\n                @slot Optional slot for description. See {@link FLabel} for details.\n                @binding {string[]} description-class CSS classes for primary description content.\n                @binding {string[]} format-description-class CSS classes for format description.\n            "),
        _renderSlot19(_ctx.$slots, "description", {
          descriptionClass: _ctx.descriptionClass,
          formatDescriptionClass: _ctx.formatDescriptionClass
        }),
        _renderSlot19(_ctx.$slots, "error-message", _normalizeProps2(_guardReactiveProps2({ hasError: _ctx.hasError, validationMessage: _ctx.validity.validationMessage })), () => [
          _ctx.hasError ? (_openBlock25(), _createElementBlock20("span", _hoisted_310, [
            _createVNode10(_component_f_icon, {
              class: "label__icon--left",
              name: "error"
            }),
            _createTextVNode5(
              " " + _toDisplayString12(_ctx.validity.validationMessage),
              1
              /* TEXT */
            )
          ])) : _createCommentVNode22("v-if", true)
        ])
      ],
      2
      /* CLASS */
    )),
    _ctx.hasCheckbox ? (_openBlock25(), _createElementBlock20("span", _hoisted_47, [
      _ctx.children.length === 1 ? (_openBlock25(), _createElementBlock20(
        "span",
        _hoisted_57,
        _toDisplayString12(_ctx.checkboxCheckedScreenReaderText),
        1
        /* TEXT */
      )) : (_openBlock25(), _createElementBlock20(
        "span",
        _hoisted_65,
        _toDisplayString12(_ctx.numberOfCheckedCheckboxesScreenText),
        1
        /* TEXT */
      ))
    ])) : _createCommentVNode22("v-if", true),
    _createCommentVNode22(" the original <legend> element is sr-only when a tooltip is present\n        so the tooltip button can be positioned correctly when a description is\n        also present "),
    _ctx.hasTooltipSlot ? (_openBlock25(), _createElementBlock20(
      _Fragment10,
      { key: 1 },
      [
        _createElementVNode18(
          "div",
          _hoisted_74,
          [
            _createElementVNode18("span", _hoisted_84, [
              _renderSlot19(_ctx.$slots, "label")
            ])
          ],
          512
          /* NEED_PATCH */
        ),
        _createCommentVNode22(" @slot Slot for tooltip. "),
        _renderSlot19(_ctx.$slots, "tooltip"),
        _ctx.hasDescriptionSlot || _ctx.hasErrorMessageSlot || _ctx.hasError ? (_openBlock25(), _createElementBlock20(
          "div",
          {
            key: 0,
            class: _normalizeClass13(["label", _ctx.groupLabelClass]),
            "aria-hidden": "true"
          },
          [
            _createCommentVNode22("\n                    @slot Optional slot for description. See {@link FLabel} for details.\n                    @binding {string[]} description-class CSS classes for primary description content.\n                    @binding {string[]} format-description-class CSS classes for format description.\n                "),
            _renderSlot19(_ctx.$slots, "description", {
              descriptionClass: _ctx.descriptionClass,
              formatDescriptionClass: _ctx.formatDescriptionClass
            }),
            _createCommentVNode22("\n                    @slot Slot for displaying single or several error messages.\n                    @binding {boolean} hasError Set to true when a validation error is present\n                    @binding {string} validationMessage Descriptive validation error message for current error\n                "),
            _renderSlot19(_ctx.$slots, "error-message", _normalizeProps2(_guardReactiveProps2({ hasError: _ctx.hasError, validationMessage: _ctx.validity.validationMessage })), () => [
              _ctx.hasError ? (_openBlock25(), _createElementBlock20("span", _hoisted_94, [
                _createVNode10(_component_f_icon, {
                  class: "label__icon--left",
                  name: "error"
                }),
                _createTextVNode5(
                  " " + _toDisplayString12(_ctx.validity.validationMessage),
                  1
                  /* TEXT */
                )
              ])) : _createCommentVNode22("v-if", true)
            ])
          ],
          2
          /* CLASS */
        )) : _createCommentVNode22("v-if", true)
      ],
      64
      /* STABLE_FRAGMENT */
    )) : _createCommentVNode22("v-if", true),
    _createElementVNode18(
      "div",
      {
        class: _normalizeClass13(_ctx.groupContentClass)
      },
      [
        _createCommentVNode22(" @slot Slot for fieldset content. "),
        _renderSlot19(_ctx.$slots, "default")
      ],
      2
      /* CLASS */
    )
  ], 42, _hoisted_120);
}

// packages/vue/src/components/FFieldset/FFieldset.vue
FFieldset_default.render = render25;
FFieldset_default.__file = "packages/vue/src/components/FFieldset/FFieldset.vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FCheckboxField/FCheckboxField.vue?type=script
var anyType = [String, Object, Array, Number, Date, Boolean];
var FCheckboxField_default = defineComponent23({
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
      default: () => ElementIdService7.generateElementId()
    },
    /**
     * The value for the input checked attribute.
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
  emits: [
    /**
     * Emitted when the value of the checkbox changes.
     *
     * @type {anyType | anyType[]}
     */
    "change",
    /**
     * V-model event.
     * @type {anyType | anyType[]}
     */
    "update:modelValue"
  ],
  setup() {
    const { showDetails, getFieldsetLabelText } = useFieldset();
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
        checked = this.modelValue.findIndex((it) => (0, import_isEqual2.default)(toValue2(it), toValue2(this.value))) >= 0;
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
      const checkboxInput = getHTMLElementFromVueRef(this.$refs.checkboxInput);
      this.expanded = checkboxInput.checked;
    },
    emitVModelEvent(event) {
      let newModel;
      if (Array.isArray(this.modelValue)) {
        newModel = [...this.modelValue].filter((it) => !(0, import_isEqual2.default)(toValue2(it), toValue2(this.value)));
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
    onValidity({ detail }) {
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

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FCheckboxField/FCheckboxField.vue?type=template
import { withKeys as _withKeys4, mergeProps as _mergeProps6, createElementVNode as _createElementVNode19, createCommentVNode as _createCommentVNode23, renderSlot as _renderSlot20, openBlock as _openBlock26, createElementBlock as _createElementBlock21, Transition as _Transition2, withCtx as _withCtx10, createBlock as _createBlock13, Fragment as _Fragment11, normalizeClass as _normalizeClass14 } from "vue";
var _hoisted_121 = ["id", "disabled"];
var _hoisted_214 = ["for"];
var _hoisted_311 = {
  key: 0,
  class: "checkbox__details"
};
var _hoisted_48 = {
  key: 0,
  class: "checkbox__details"
};
function render26(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock26(), _createElementBlock21(
    "div",
    {
      class: _normalizeClass14(["checkbox", _ctx.disabledClass]),
      onValidity: _cache[2] || (_cache[2] = (...args) => _ctx.onValidity && _ctx.onValidity(...args))
    },
    [
      _createElementVNode19("input", _mergeProps6({ id: _ctx.id }, _ctx.attrs, {
        ref: "checkboxInput",
        type: "checkbox",
        class: "checkbox__input",
        disabled: _ctx.disabled,
        onKeydown: _cache[0] || (_cache[0] = _withKeys4((...args) => _ctx.onKeydown && _ctx.onKeydown(...args), ["space"])),
        onChange: _cache[1] || (_cache[1] = ($event) => _ctx.updateExpandedFlag())
      }), null, 16, _hoisted_121),
      _createElementVNode19("label", {
        class: _normalizeClass14(_ctx.$slots.details ? "checkbox__label checkbox__width" : "checkbox__label"),
        for: _ctx.id
      }, [
        _createCommentVNode23(" @slot Slot for label content. "),
        _renderSlot20(_ctx.$slots, "default"),
        _ctx.$slots.details ? (_openBlock26(), _createElementBlock21(
          _Fragment11,
          { key: 0 },
          [
            _ctx.showDetails === "always" ? (_openBlock26(), _createElementBlock21("span", _hoisted_311, [
              _cache[3] || (_cache[3] = _createElementVNode19(
                "br",
                null,
                null,
                -1
                /* CACHED */
              )),
              _createCommentVNode23(" @slot Slot for extended label, should only contain short text "),
              _renderSlot20(_ctx.$slots, "details")
            ])) : _createCommentVNode23("v-if", true),
            _ctx.showDetails === "when-selected" ? (_openBlock26(), _createBlock13(_Transition2, {
              key: 1,
              onEnter: _ctx.enter,
              onAfterEnter: _ctx.afterEnter,
              onLeave: _ctx.leave
            }, {
              default: _withCtx10(() => [
                _ctx.expanded ? (_openBlock26(), _createElementBlock21("span", _hoisted_48, [
                  _cache[4] || (_cache[4] = _createElementVNode19(
                    "br",
                    null,
                    null,
                    -1
                    /* CACHED */
                  )),
                  _createCommentVNode23("\n                        @slot Slot for details, should only contain short text\n                        @binding {number} height The height of the expanded details content.\n                        "),
                  _renderSlot20(_ctx.$slots, "details", { height: _ctx.height })
                ])) : _createCommentVNode23("v-if", true)
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["onEnter", "onAfterEnter", "onLeave"])) : _createCommentVNode23("v-if", true)
          ],
          64
          /* STABLE_FRAGMENT */
        )) : _createCommentVNode23("v-if", true)
      ], 10, _hoisted_214)
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}

// packages/vue/src/components/FCheckboxField/FCheckboxField.vue
FCheckboxField_default.render = render26;
FCheckboxField_default.__file = "packages/vue/src/components/FCheckboxField/FCheckboxField.vue";
var FCheckboxField_default2 = FCheckboxField_default;

// virtual-entry:virtual:packages/vue/src/components/FCalendar/examples/FCalendarLiveExample.vue:FCalendarLiveExample-36fa07.js
import { createTextVNode as _createTextVNode6, resolveComponent as _resolveComponent12, withCtx as _withCtx11, createVNode as _createVNode11, openBlock as _openBlock27, createBlock as _createBlock14 } from "vue";
var exampleComponent = defineComponent24({
  name: "FCalendarLiveExample",
  components: {
    LiveExample,
    FCheckboxField: FCheckboxField_default2
  },
  data() {
    return {
      enableYearSelector: false
    };
  },
  computed: {
    livedata() {
      return {
        month: FDate4.fromIso("2022-10-01"),
        min: FDate4.fromIso("2020-01-01"),
        max: FDate4.fromIso("2029-01-30")
      };
    },
    components() {
      return {
        FCalendar,
        FCalendarDay
      };
    },
    template() {
      return (
        /* HTML */
        `
                <f-calendar v-model="month" :min-date="min" :max-date="max" ${this.yearSelector}>
                    <template #default="{ date, isFocused }">
                        <f-calendar-day :day="date" :focused="isFocused" />
                    </template>
                </f-calendar>
            `
      );
    },
    yearSelector() {
      return this.enableYearSelector ? "year-selector" : "";
    }
  }
});
function render27(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_checkbox_field = _resolveComponent12("f-checkbox-field");
  const _component_live_example = _resolveComponent12("live-example");
  return _openBlock27(), _createBlock14(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template,
    livedata: _ctx.livedata
  }, {
    default: _withCtx11(() => [
      _createVNode11(_component_f_checkbox_field, {
        modelValue: _ctx.enableYearSelector,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.enableYearSelector = $event),
        value: true
      }, {
        default: _withCtx11(() => [..._cache[1] || (_cache[1] = [
          _createTextVNode6(
            " Visa \xE5rsv\xE4ljare ",
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
  }, 8, ["components", "template", "livedata"]);
}
exampleComponent.render = render27;
setup({
  rootComponent: exampleComponent,
  selector: "#example-36fa07"
});
export {
  render27 as render
};
