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
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
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
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
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
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
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
    var Set = getNative(root, "Set");
    module.exports = Set;
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
    var Set = require_Set();
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
    var setCtorString = toSource(Set);
    var weakMapCtorString = toSource(WeakMap);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
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
    function isEqual2(value, other) {
      return baseIsEqual(value, other);
    }
    module.exports = isEqual2;
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

// virtual-entry:virtual:packages/vue/src/internal-components/IPopup/examples/IPopupPositioning.vue:IPopupPositioning-1c155e.js
import { defineComponent as defineComponent12 } from "vue";

// packages/vue/src/utils/ListUtils.ts
import { isSet } from "@fkui/logic";

// packages/vue/src/utils/VueRefUtils.ts
import { isSet as isSet2 } from "@fkui/logic";
function refIsElement(value) {
  return value instanceof Element;
}
function refIsVue(value) {
  return value?.$el !== void 0;
}
function findElementFromVueRef(ref) {
  if (refIsElement(ref)) {
    return ref;
  } else if (refIsVue(ref)) {
    return ref.$el;
  }
}
function getHTMLElementFromVueRef(ref) {
  const element = findElementFromVueRef(ref);
  if (!isSet2(element)) {
    throw new Error(`Unable to find element from ${ref}.`);
  }
  if (element instanceof HTMLElement) {
    return element;
  }
  throw new Error(`Not instance of HTMLELement ${ref}.`);
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
  return _openBlock2(), _createElementBlock2("div", _hoisted_12, _cache[0] || (_cache[0] = [
    _createElementVNode2(
      "h1",
      null,
      "Fel",
      -1
      /* HOISTED */
    ),
    _createElementVNode2(
      "p",
      null,
      "Ett fel har uppst\xE5tt.",
      -1
      /* HOISTED */
    ),
    _createElementVNode2(
      "a",
      { href: "/" },
      "G\xE5 till startsidan",
      -1
      /* HOISTED */
    )
  ]));
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
  emits: ["close", ...defaultButtons.map((it) => it.event ?? "")],
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
  focus3(focusElement3 ? focusElement3 : element);
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
          default: _withCtx2(() => _cache[0] || (_cache[0] = [
            _createTextVNode2("\xA0")
          ])),
          _: 1,
          __: [0]
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
                              /* HOISTED */
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
                                /* HOISTED */
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
     * @model
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
  emits: ["submit"],
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
      ValidationService3.resetState(this.$el);
      this.$emit("cancel");
      this.$emit("close", { reason: "close" });
    },
    async onSubmit() {
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

// packages/vue/src/utils/render-slot-text.ts
import {
  Comment,
  isVNode
} from "vue";
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
function renderSlotText(render13, props = {}, options) {
  if (!render13) {
    return void 0;
  }
  const nodes = render13(props);
  if (nodes.length === 0) {
    return void 0;
  }
  return collapseWhitespace(
    getTextContent(nodes, { ...defaultOptions, ...options })
  );
}

// packages/vue/src/utils/has-slot.ts
function hasSlot(vm, name, props = {}, options = {}) {
  const slot = vm.$slots[name];
  return Boolean(renderSlotText(slot, props, options));
}

// packages/vue/src/utils/use-modal.ts
import { getCurrentInstance } from "vue";

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

// packages/vue/src/internal-components/IPopup/IPopupUtils.ts
function clamp(value, min, max) {
  return Math.max(Math.min(value, max), min);
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
    const offset = targetElement.offsetParent?.getBoundingClientRect();
    if (!offset) {
      return result;
    }
    return {
      ...result,
      x: result.x - (offset.left + window.pageXOffset),
      y: result.y - (offset.top + window.pageYOffset)
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

// virtual-entry:virtual:packages/vue/src/internal-components/IPopup/examples/IPopupPositioning.vue:IPopupPositioning-1c155e.js
import { createElementVNode as _createElementVNode8, vModelSelect as _vModelSelect, withDirectives as _withDirectives, createTextVNode as _createTextVNode3, openBlock as _openBlock12, createElementBlock as _createElementBlock12 } from "vue";
var SPACING = 10;
var exampleComponent = defineComponent12({
  name: "IPopupPositioning",
  data() {
    return {
      constraint: "viewport",
      drag: null
    };
  },
  computed: {
    areaElement() {
      switch (this.constraint) {
        case "combo":
          return this.$refs.area;
        case "viewport":
          return document.body;
        case "container":
          return this.$refs.area;
        default:
          return void 0;
      }
    },
    viewportElement() {
      switch (this.constraint) {
        case "combo":
          return document.documentElement;
        case "viewport":
          return document.documentElement;
        case "container":
          return void 0;
        default:
          return void 0;
      }
    }
  },
  mounted() {
    document.addEventListener("mouseup", this.onMouseUp);
    document.addEventListener("mousemove", this.onMouseMove);
    this.$nextTick().then(() => {
      this.updatePosition();
    });
  },
  destroy() {
    document.removeEventListener("mouseup", this.onMouseUp);
    document.removeEventListener("mousemove", this.onMouseMove);
  },
  methods: {
    onChangeConstraint() {
      const { anchor: anchorElement } = this.$refs;
      anchorElement.style.top = "10px";
      anchorElement.style.left = "10px";
    },
    onMouseDown(event) {
      const { anchor: anchorElement } = this.$refs;
      const { clientX, clientY } = event;
      this.drag = [anchorElement.offsetLeft - clientX, anchorElement.offsetTop - clientY];
    },
    onMouseUp() {
      this.drag = null;
      this.updatePosition();
    },
    onMouseMove(event) {
      if (!this.drag) {
        return;
      }
      event.preventDefault();
      const { anchor: anchorElement, area: areaElement } = this.$refs;
      const { clientX, clientY } = event;
      const area = areaElement.getBoundingClientRect();
      const anchor = anchorElement.getBoundingClientRect();
      const left = clamp(
        clientX + this.drag[0],
        SPACING,
        area.width - anchor.width - SPACING - 2
      );
      const top = clamp(
        clientY + this.drag[1],
        SPACING,
        area.height - anchor.height - SPACING - 2
      );
      anchorElement.style.left = `${left}px`;
      anchorElement.style.top = `${top}px`;
      this.updatePosition();
    },
    updatePosition() {
      if (!this.drag) {
        return;
      }
      const { anchor, target } = this.$refs;
      const area = this.areaElement;
      const viewport = this.viewportElement;
      if (!anchor) {
        return;
      }
      const result = fitInsideArea({
        area,
        anchor,
        target,
        viewport,
        spacing: SPACING
      });
      if (result.placement === "Fallback" /* Fallback */) {
        target.classList.add("pos-target--inline");
        target.style.removeProperty("left");
        target.style.removeProperty("top");
      } else {
        target.classList.remove("pos-target--inline");
        target.style.left = `${result.x}px`;
        target.style.top = `${result.y}px`;
      }
      target.innerText = `Popup (${result.placement})`;
    }
  }
});
var _hoisted_18 = { class: "wrapper" };
var _hoisted_27 = {
  ref: "area",
  class: "area"
};
var _hoisted_35 = {
  ref: "target",
  class: "pos-target"
};
function render12(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock12(), _createElementBlock12("div", _hoisted_18, [
    _cache[4] || (_cache[4] = _createElementVNode8(
      "label",
      { for: "constraint" },
      " Begr\xE4nsa till: ",
      -1
      /* HOISTED */
    )),
    _withDirectives(_createElementVNode8(
      "select",
      {
        id: "constraint",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.constraint = $event),
        onChange: _cache[1] || (_cache[1] = (...args) => _ctx.onChangeConstraint && _ctx.onChangeConstraint(...args))
      },
      _cache[3] || (_cache[3] = [
        _createElementVNode8(
          "option",
          { value: "viewport" },
          "Viewport",
          -1
          /* HOISTED */
        ),
        _createElementVNode8(
          "option",
          { value: "container" },
          "Container",
          -1
          /* HOISTED */
        ),
        _createElementVNode8(
          "option",
          { value: "combo" },
          "Viewport + container",
          -1
          /* HOISTED */
        )
      ]),
      544
      /* NEED_HYDRATION, NEED_PATCH */
    ), [
      [_vModelSelect, _ctx.constraint]
    ]),
    _cache[5] || (_cache[5] = _createElementVNode8(
      "p",
      null,
      [
        _createTextVNode3("Dra "),
        _createElementVNode8("i", null, "ankaret"),
        _createTextVNode3(" med hj\xE4lp av musen.")
      ],
      -1
      /* HOISTED */
    )),
    _createElementVNode8(
      "div",
      _hoisted_27,
      [
        _createElementVNode8(
          "div",
          {
            ref: "anchor",
            class: "pos-anchor",
            onMousedown: _cache[2] || (_cache[2] = (...args) => _ctx.onMouseDown && _ctx.onMouseDown(...args))
          },
          "Ankare",
          544
          /* NEED_HYDRATION, NEED_PATCH */
        ),
        _createElementVNode8(
          "div",
          _hoisted_35,
          "Popup",
          512
          /* NEED_PATCH */
        )
      ],
      512
      /* NEED_PATCH */
    )
  ]);
}
exampleComponent.render = render12;
setup({
  rootComponent: exampleComponent,
  selector: "#example-1c155e"
});
export {
  render12 as render
};
