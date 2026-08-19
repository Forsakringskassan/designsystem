// ../logic/lib/esm/index.js
function isEmpty(value) {
  return !value;
}
function isSet(value) {
  return value !== void 0 && value !== null;
}
function isString(value) {
  return typeof value === "string" || value instanceof String;
}
var MissingValueError = class _MissingValueError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, _MissingValueError.prototype);
  }
};
function ensureSet(value, message = "") {
  if (!isSet(value)) {
    throw new MissingValueError(message);
  }
  return value;
}
function assertRef(ref, message = "Expected ref to have a non-null value, but it did not") {
  if (!isSet(ref?.value)) {
    throw new MissingValueError(message);
  }
}
function assertSet(value, message = "Expected value to be set, but it was not") {
  if (!isSet(value)) {
    throw new MissingValueError(message);
  }
}
var configLogic = {
  production: true
};
function fromEntries(iterable) {
  return iterable.reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function stripNull(src) {
  if (src === null) {
    return void 0;
  }
  if (Array.isArray(src)) {
    return src.map(stripNull);
  }
  if (typeof src !== "object") {
    return src;
  }
  const entries = Object.entries(src).filter(([, value]) => value !== null).map(([key, value]) => {
    return [key, stripNull(value)];
  });
  return fromEntries(entries);
}
var DecoratedError = class _DecoratedError extends Error {
  cause;
  constructor(message, cause) {
    super(message);
    Object.setPrototypeOf(this, _DecoratedError.prototype);
    this.stack += `
Caused by: ${String(cause.stack)}`;
    this.cause = cause;
  }
  /**
   * Get the direct cause of this error, the one that triggered
   * this error.
   */
  getCause() {
    return this.cause;
  }
  /**
   * Get the root cause of this error, the first error that occured.
   */
  getRootCause() {
    const cause = this.cause;
    if (cause instanceof _DecoratedError) {
      return cause.getRootCause();
    }
    return cause;
  }
};
var DATE_REGEXP_WITH_DASH = /^\d{4}-\d{2}-\d{2}$/;
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
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs$1(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var lodash_clonedeep = { exports: {} };
lodash_clonedeep.exports;
var hasRequiredLodash_clonedeep;
function requireLodash_clonedeep() {
  if (hasRequiredLodash_clonedeep) return lodash_clonedeep.exports;
  hasRequiredLodash_clonedeep = 1;
  (function(module, exports) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", promiseTag = "[object Promise]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reFlags = /\w*$/;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    function addMapEntry(map, pair) {
      map.set(pair[0], pair[1]);
      return map;
    }
    function addSetEntry(set, value) {
      set.add(value);
      return set;
    }
    function arrayEach(array, iteratee) {
      var index2 = -1, length = array ? array.length : 0;
      while (++index2 < length) {
        if (iteratee(array[index2], index2, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayPush(array, values) {
      var index2 = -1, length = values.length, offset = array.length;
      while (++index2 < length) {
        array[offset + index2] = values[index2];
      }
      return array;
    }
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index2 = -1, length = array ? array.length : 0;
      while (++index2 < length) {
        accumulator = iteratee(accumulator, array[index2], index2, array);
      }
      return accumulator;
    }
    function baseTimes(n, iteratee) {
      var index2 = -1, result = Array(n);
      while (++index2 < n) {
        result[index2] = iteratee(index2);
      }
      return result;
    }
    function getValue(object, key) {
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
    function mapToArray(map) {
      var index2 = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index2] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set) {
      var index2 = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index2] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    })();
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer = moduleExports ? root.Buffer : void 0, Symbol2 = root.Symbol, Uint8Array = root.Uint8Array, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice;
    var nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0, nativeKeys = overArg(Object.keys, Object);
    var DataView = getNative(root, "DataView"), Map2 = getNative(root, "Map"), Promise2 = getNative(root, "Promise"), Set = getNative(root, "Set"), WeakMap = getNative(root, "WeakMap"), nativeCreate = getNative(Object, "create");
    var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function Hash(entries) {
      var index2 = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index2 = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
    }
    function listCacheDelete(key) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      if (index2 < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index2 == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index2, 1);
      }
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      return index2 < 0 ? void 0 : data[index2][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      if (index2 < 0) {
        data.push([key, value]);
      } else {
        data[index2][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index2 = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      return getMapData(this, key)["delete"](key);
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function Stack(entries) {
      this.__data__ = new ListCache(entries);
    }
    function stackClear() {
      this.__data__ = new ListCache();
    }
    function stackDelete(key) {
      return this.__data__["delete"](key);
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var cache = this.__data__;
      if (cache instanceof ListCache) {
        var pairs = cache.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          return this;
        }
        cache = this.__data__ = new MapCache(pairs);
      }
      cache.set(key, value);
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
      var length = result.length, skipIndexes = !!length;
      for (var key in value) {
        if (hasOwnProperty.call(value, key) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        object[key] = value;
      }
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
      var result;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
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
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (!isArr) {
        var props = isFull ? getAllKeys(value) : keys(value);
      }
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, isDeep, isFull, customizer, key2, value, stack));
      });
      return result;
    }
    function baseCreate(proto) {
      return isObject(proto) ? objectCreate(proto) : {};
    }
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    function baseGetTag(value) {
      return objectToString.call(value);
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
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
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var result = new buffer.constructor(buffer.length);
      buffer.copy(result);
      return result;
    }
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    function cloneMap(map, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
      return arrayReduce(array, addMapEntry, new map.constructor());
    }
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    function cloneSet(set, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
      return arrayReduce(array, addSetEntry, new set.constructor());
    }
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    function copyArray(source, array) {
      var index2 = -1, length = source.length;
      array || (array = Array(length));
      while (++index2 < length) {
        array[index2] = source[index2];
      }
      return array;
    }
    function copyObject(source, props, object, customizer) {
      object || (object = {});
      var index2 = -1, length = props.length;
      while (++index2 < length) {
        var key = props[index2];
        var newValue = void 0;
        assignValue(object, key, newValue === void 0 ? source[key] : newValue);
      }
      return object;
    }
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : void 0;
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
    function initCloneArray(array) {
      var length = array.length, result = array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    function initCloneByTag(object, tag, cloneFunc, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
          return new Ctor(+object);
        case dataViewTag:
          return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);
        case mapTag:
          return cloneMap(object, isDeep, cloneFunc);
        case numberTag:
        case stringTag:
          return new Ctor(object);
        case regexpTag:
          return cloneRegExp(object);
        case setTag:
          return cloneSet(object, isDeep, cloneFunc);
        case symbolTag:
          return cloneSymbol(object);
      }
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
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
    function cloneDeep2(value) {
      return baseClone(value, true, true);
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function stubArray() {
      return [];
    }
    function stubFalse() {
      return false;
    }
    module.exports = cloneDeep2;
  })(lodash_clonedeep, lodash_clonedeep.exports);
  return lodash_clonedeep.exports;
}
var lodash_clonedeepExports = requireLodash_clonedeep();
var cloneDeep = /* @__PURE__ */ getDefaultExportFromCjs$1(lodash_clonedeepExports);
function deepClone(value) {
  return cloneDeep(value);
}
function flatten(src, destination, prefix = "") {
  destination = destination ?? {};
  return Object.entries(src).reduce((result, [key, data]) => {
    const nestedKey = `${prefix}${key}`;
    if (typeof data === "string") {
      result[nestedKey] = data;
    } else {
      flatten(data, result, `${nestedKey}.`);
    }
    return result;
  }, destination);
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
  const match = supportedFormats.map((pattern) => value.match(pattern)).find(Boolean);
  if (!match?.groups) {
    return void 0;
  }
  const { year, month, day } = match.groups;
  return `${year}-${month}-${day}`;
}
function testLuhnChecksum(inputString) {
  let sum = 0;
  if (/^\d+$/.test(inputString) === false) {
    throw new Error("Luhn Checksum test only works on strings containing numbers");
  }
  inputString.split("").reverse().forEach((numChar, index2) => {
    const digit = parseInt(numChar, 10) * ((index2 + 1) % 2 === 0 ? 2 : 1);
    sum += digit >= 10 ? digit - 9 : digit;
  });
  return sum % 10 === 0;
}
function validChecksum(value) {
  const yymmddxxxx = value.slice(2).replace(/-/g, "");
  return testLuhnChecksum(yymmddxxxx);
}
var TWELVE_HOURS = 12 * 60 * 60;
function setCookie(options) {
  const { name, value, keepAnyExistingCookie, timeLimitSeconds } = options;
  const shouldKeepTheExistingCookie = keepAnyExistingCookie && findCookie(name);
  if (shouldKeepTheExistingCookie) {
    return;
  }
  const timeout = timeLimitSeconds ?? TWELVE_HOURS;
  const cookieString = `${name}=${encodeURIComponent(value)}; path=/; max-age=${String(timeout)};`;
  document.cookie = cookieString;
}
function deleteCookie(name) {
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
}
function findCookie(name) {
  if (!document?.cookie) {
    return void 0;
  }
  const cookieKeyValueStrings = document.cookie.split(";");
  for (const cookie of cookieKeyValueStrings) {
    const [foundCookieName, foundCookieValue] = cookie.split("=", 2);
    if (name === foundCookieName.trim()) {
      return foundCookieValue ? decodeURIComponent(foundCookieValue) : void 0;
    }
  }
  return void 0;
}
var BANK_ACCOUNT_NUMBER_REGEXP = /^\d{3,16}$/;
var BANK_ACCOUNT_NUMBER_TRIM_REGEXP = /[- .,]+/g;
function parseBankAccountNumber(value) {
  if (isEmpty(value)) {
    return void 0;
  }
  const trimmedValue = value.replace(BANK_ACCOUNT_NUMBER_TRIM_REGEXP, "");
  return BANK_ACCOUNT_NUMBER_REGEXP.test(trimmedValue) ? trimmedValue : void 0;
}
var BANKGIRO_REGEXP_HYPHEN = /^(\d{3,4})-?(\d{4})$/;
function parseBankgiro(value) {
  if (isEmpty(value)) {
    return void 0;
  }
  const match = value.match(BANKGIRO_REGEXP_HYPHEN);
  if (!match) {
    return void 0;
  }
  if (!testLuhnChecksum(`${match[1]}${match[2]}`)) {
    return void 0;
  }
  return `${match[1]}-${match[2]}`;
}
var CLEARINGNUMBER_REGEXP = /^\d{4}([-\s]?\d)?$/;
function parseClearingNumber(value) {
  if (isEmpty(value)) {
    return void 0;
  }
  if (!CLEARINGNUMBER_REGEXP.test(value)) {
    return void 0;
  }
  return value.length === 5 ? `${value.substring(0, 4)}-${value.substring(4, 5)}` : value;
}
function formatClearingNumberForBackend(value) {
  return value.substring(0, 4);
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var dayjs_min$1 = { exports: {} };
var dayjs_min = dayjs_min$1.exports;
var hasRequiredDayjs_min;
function requireDayjs_min() {
  if (hasRequiredDayjs_min) return dayjs_min$1.exports;
  hasRequiredDayjs_min = 1;
  (function(module, exports) {
    !(function(t, e) {
      module.exports = e();
    })(dayjs_min, (function() {
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
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
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
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
      var _ = (function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = (function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          })(t2), this.init();
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
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c) return this.set(c, this.$M + r2);
          if ($2 === h) return this.set(h, this.$y + r2);
          if ($2 === a) return y2(1);
          if ($2 === o) return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, (function(t3, r3) {
            return r3 || (function(t4) {
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
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
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
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
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
            })(t3) || i2.replace(":", "");
          }));
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
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
      })(), k = _.prototype;
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach((function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      })), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    }));
  })(dayjs_min$1);
  return dayjs_min$1.exports;
}
var dayjs_minExports = requireDayjs_min();
var dayjs = /* @__PURE__ */ getDefaultExportFromCjs(dayjs_minExports);
var sv$1 = { exports: {} };
var sv = sv$1.exports;
var hasRequiredSv;
function requireSv() {
  if (hasRequiredSv) return sv$1.exports;
  hasRequiredSv = 1;
  (function(module, exports) {
    !(function(e, t) {
      module.exports = t(requireDayjs_min());
    })(sv, (function(e) {
      function t(e2) {
        return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
      }
      var a = t(e), d = { name: "sv", weekdays: "s\xF6ndag_m\xE5ndag_tisdag_onsdag_torsdag_fredag_l\xF6rdag".split("_"), weekdaysShort: "s\xF6n_m\xE5n_tis_ons_tor_fre_l\xF6r".split("_"), weekdaysMin: "s\xF6_m\xE5_ti_on_to_fr_l\xF6".split("_"), months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(e2) {
        var t2 = e2 % 10;
        return "[" + e2 + (1 === t2 || 2 === t2 ? "a" : "e") + "]";
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, relativeTime: { future: "om %s", past: "f\xF6r %s sedan", s: "n\xE5gra sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en m\xE5nad", MM: "%d m\xE5nader", y: "ett \xE5r", yy: "%d \xE5r" } };
      return a.default.locale(d, null, true), d;
    }));
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
    !(function(e, t) {
      module.exports = t();
    })(weekOfYear$1, (function() {
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
    }));
  })(weekOfYear$2);
  return weekOfYear$2.exports;
}
var weekOfYearExports = requireWeekOfYear();
var weekOfYear = /* @__PURE__ */ getDefaultExportFromCjs(weekOfYearExports);
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
var _locale = /* @__PURE__ */ getDefaultLocale();
function getLocale() {
  return _locale;
}
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
      name: "m\xE5ndag",
      shortName: "m\xE5n"
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
      name: "l\xF6rdag",
      shortName: "l\xF6r"
    },
    {
      weekday: Weekday.SUNDAY,
      name: "s\xF6ndag",
      shortName: "s\xF6n"
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
var ISO8601_YYYY_MM_DD = "YYYY-MM-DD";
var formatter = {
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
};
var FDate = class _FDate {
  value;
  constructor(value) {
    this.value = dayjs(value, ISO8601_YYYY_MM_DD, true).startOf("day");
  }
  /**
   * Create {@link FDate} with an invalid state.
   *
   * @internal
   */
  static invalid() {
    return new _FDate("<invalid>");
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
    return new _FDate();
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
    const match = value.match(/^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/);
    if (match?.groups) {
      const date = new _FDate(value);
      const { month } = match.groups;
      if (date.isValid() && date.month === parseInt(month, 10)) {
        return date;
      }
    }
    return _FDate.invalid();
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
    return new _FDate(value);
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
    const iso = `${String(year)}-${paddedMonth}-${paddedDay}`;
    return _FDate.fromIso(iso);
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
    return this.value.locale(Locale.SWEDISH).week();
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
      return Weekday.SUNDAY;
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
    return new _FDate(this.value.startOf("month"));
  }
  /**
   * Returns a cloned {@link FDate} object and set it to the end of month.
   *
   * @public
   */
  endOfMonth() {
    return new _FDate(this.value.endOf("month"));
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
    return new _FDate(this.value.add(value, "day"));
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
    return new _FDate(this.value.add(value, "month"));
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
    return new _FDate(this.value.add(value, "year"));
  }
  /**
   * Returns a new {@link FDate} object with the date before This one.
   *
   * @public
   * @since v6.12.0
   */
  previous() {
    return this.addDays(-1);
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
      rhs = _FDate.fromIso(rhs);
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
      rhs = _FDate.fromIso(rhs);
    }
    return this.value.isBefore(rhs.value, "day");
  }
  /**
   * Returns true if this date is after given date.
   *
   * If the dates are the same this function returns false.
   */
  isAfter(rhs) {
    if (typeof rhs === "string") {
      rhs = _FDate.fromIso(rhs);
    }
    return this.value.isAfter(rhs.value, "day");
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
      a = _FDate.fromIso(a);
    }
    if (typeof b === "string") {
      b = _FDate.fromIso(b);
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
    if (a.equals(b)) {
      return 0;
    } else if (a.isBefore(b)) {
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
  toString(format = DateFormat.ISO8601) {
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
    return this.toString(DateFormat.ISO8601);
  }
};
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
var NUMBER_REGEXP$1 = /^(-?\d+)([,.]\d+)?$/;
function replaceCommaWithDot(str) {
  return str.replace(",", ".");
}
function replaceMinusSignWithDash(str) {
  return str.replace("\u2212", "-");
}
function replaceDotWithComma(str) {
  return str.replace(".", ",");
}
function formatSwedishNotation(value, decimals) {
  if (decimals !== void 0) {
    value = Number(value.toFixed(decimals));
  }
  return replaceDotWithComma(value.toLocaleString("sv-SE", {
    minimumFractionDigits: decimals
  }));
}
function formatNumber(value, decimals) {
  if (typeof value === "string") {
    value = parseNumber(value) ?? "";
  }
  if (typeof value !== "number" || isNaN(value)) {
    return void 0;
  }
  return formatSwedishNotation(value, decimals);
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
var PERSONNUMMER_REGEXP = /^(?<century>\d{2})?(?<year>\d{2})(?<month>\d{2})(?<day>\d{2})(?<sign>[-+])?(?<check>\d{4})$/;
function getDayWithoutSamordning(day) {
  return (Number(day) % 60).toString().padStart(2, "0");
}
function getPersonnummerString(century, year, month, day, check) {
  return `${century}${year}${month}${day}-${check}`;
}
function isValidDate(date, now) {
  if (!date.isValid() || date.isBefore("1840-05-06") || date.isAfter(now)) {
    return false;
  }
  return true;
}
function parsePersonnummer(value, now = FDate.now()) {
  if (!isSet(value)) {
    return void 0;
  }
  const match = stripWhitespace(value).match(PERSONNUMMER_REGEXP);
  if (!match) {
    return void 0;
  }
  const { year, month, day, sign, check } = match.groups;
  const dayWithoutSamordning = getDayWithoutSamordning(day);
  const century = match.groups?.century ?? resolveCentury(year, month, dayWithoutSamordning, sign === "+", now);
  if (day === "60") {
    return getPersonnummerString(century, year, month, day, check);
  }
  const date = FDate.fromYearMonthDay(century + year, month, dayWithoutSamordning);
  if (!isValidDate(date, now)) {
    return void 0;
  }
  return getPersonnummerString(century, year, month, day, check);
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
function formatPersonnummer(value) {
  if (!isSet(value)) {
    return void 0;
  }
  const currentYear = FDate.now().year;
  const year = Number(value.substring(0, 4));
  if (currentYear - year >= 100) {
    return value.substring(2).replace("-", "+");
  }
  return value.substring(2);
}
function formatPersonnummerToDate(value) {
  const datePart = parseDate(parsePersonnummer(value)?.slice(0, 8) ?? "");
  if (!datePart) {
    return void 0;
  }
  return FDate.fromIso(datePart);
}
var PLUSGIRO_REGEXP = /^\d{1,7}-?\d$/;
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
var POSTAL_CODE_REGEXP = /^([1-9]\d{2}) ?(\d{2})$/;
function formatPostalCode(value) {
  if (isEmpty(value)) {
    return void 0;
  }
  const match = value.match(POSTAL_CODE_REGEXP);
  if (match === null) {
    return void 0;
  }
  return `${match[1]} ${match[2]}`;
}
function parsePostalCode(value) {
  return formatPostalCode(value);
}
var ORGANISATIONSNUMMER_REGEXP = /^(\d{6})-?(\d{4})$/;
function parseOrganisationsnummer(value) {
  if (isEmpty(value)) {
    return void 0;
  }
  const match = value.match(ORGANISATIONSNUMMER_REGEXP);
  if (!match) {
    return void 0;
  }
  if (!testLuhnChecksum(`${match[1]}${match[2]}`)) {
    return void 0;
  }
  return `${match[1]}-${match[2]}`;
}
function formatPercent(modelValue, decimals) {
  return formatNumber(modelValue, decimals);
}
function parsePercent(viewValue) {
  return parseNumber(viewValue);
}
function addFocusListener(elements, listener) {
  for (const element of elements) {
    element.addEventListener("focus", listener);
  }
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
var FRAMERATE = 60;
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
    return scrollToSlow(element, arg.duration ?? 500, arg.offset ?? 0);
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
  return new Promise((resolve) => {
    let stepsLeft = steps;
    const requestAnimationFrame = setInterval(() => {
      if (stepsLeft-- > 0) {
        const s = 1 - stepsLeft / steps;
        const top = tween(s);
        window.scrollTo({ top, left: 0 });
      } else {
        clearInterval(requestAnimationFrame);
        resolve();
      }
    }, interval);
  });
}
var sym = /* @__PURE__ */ Symbol("focus-stack");
var _stackHandleCounter = 0;
var _focusElementStack = [];
var TABBABLE_ELEMENT_SELECTOR = /* @__PURE__ */ [
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
function findTabbableElements(root) {
  const selector = TABBABLE_ELEMENT_SELECTOR;
  const nodes = root.querySelectorAll(selector);
  return Array.from(nodes).filter(isTabbable);
}
function focusFirst(rootElement) {
  const element = findTabbableElements(rootElement).shift();
  if (element) {
    focus(element);
  }
}
function focusLast(rootElement) {
  const element = findTabbableElements(rootElement).pop();
  if (element) {
    focus(element);
  }
}
function restoreFocus() {
  try {
    forcePopFocus();
  } catch {
  }
}
function saveFocus(document2) {
  if (document2.activeElement instanceof HTMLElement) {
    pushFocus();
  }
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
  if (top?.id !== handle[sym]) {
    const outOfOrderErrorMsg = `push/pop called out-of-order. Expected stack handle id: ${String(top?.id)} but got ${String(handle[sym])}`;
    if (configLogic.production) {
      console.error(outOfOrderErrorMsg);
      return;
    } else {
      throw new Error(outOfOrderErrorMsg);
    }
  }
  focus(top?.element);
}
function forcePopFocus() {
  if (_focusElementStack.length === 0) {
    throw new Error("Can not call pop on an empty focus stack");
  }
  const top = _focusElementStack.pop();
  focus(top?.element);
}
function handleTab(event, container) {
  const elements = findTabbableElements(container);
  let targetIndex = elements.indexOf(event.target);
  if (event.shiftKey) {
    targetIndex--;
  } else {
    targetIndex++;
  }
  if (targetIndex < 0) {
    targetIndex = elements.length - 1;
  } else if (targetIndex >= elements.length) {
    targetIndex = 0;
  }
  focus(elements[targetIndex]);
  event.preventDefault();
}
function isRadiobuttonOrCheckbox(element) {
  return element instanceof HTMLInputElement && (element.type === "radio" || element.type === "checkbox");
}
function isValidatableFormElement(element) {
  return element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement;
}
function isVisibleInViewport(element) {
  const rect = element.getBoundingClientRect();
  return Boolean(rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}
function removeFocusListener(elements, listener) {
  for (const element of elements) {
    element.removeEventListener("focus", listener);
  }
}
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  addFocusListener,
  documentOrderComparator,
  findTabbableElements,
  focus,
  focusFirst,
  focusLast,
  handleTab,
  isFocusable,
  isRadiobuttonOrCheckbox,
  isTabbable,
  isValidatableFormElement,
  isVisible,
  isVisibleInViewport,
  popFocus,
  pushFocus,
  removeFocusListener,
  restoreFocus,
  saveFocus,
  scrollTo
});
var ElementIdServiceImpl = class {
  elementIdMap = /* @__PURE__ */ new Map();
  generateElementId(prefix = "fkui") {
    const id = this.nextId(prefix);
    if (document.getElementById(id) === null) {
      return id;
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
};
var ElementIdService = /* @__PURE__ */ new ElementIdServiceImpl();
var haveSessionStorage = /* @__PURE__ */ (() => {
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
var PersistenceService = class {
  cache;
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
  }
  set(key, value) {
    if (this.isSessionPresent) {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    }
    this.cache.set(key, value);
  }
  get(key) {
    const found = this.find(key);
    if (typeof found !== "undefined") {
      return found;
    }
    throw Error(`PersistenceService cannot find entry with key "${key}"`);
  }
  find(key) {
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    const persisted = this.isSessionPresent ? window.sessionStorage.getItem(key) : null;
    if (persisted) {
      const value = JSON.parse(persisted);
      this.cache.set(key, value);
    }
    return this.cache.get(key);
  }
  remove(key) {
    if (this.isSessionPresent) {
      window.sessionStorage.removeItem(key);
    }
    this.cache.delete(key);
  }
  /**
   * @internal
   */
  /* istanbul ignore next: for mocking in unittests */
  get isSessionPresent() {
    return haveSessionStorage;
  }
};
var SimplePersistenceService = class {
  persistenceService;
  key;
  constructor(key) {
    this.key = key;
    this.persistenceService = new PersistenceService();
  }
  set(value) {
    this.persistenceService.set(this.key, value);
  }
  get() {
    return this.persistenceService.get(this.key);
  }
  find() {
    return this.persistenceService.find(this.key);
  }
  remove() {
    this.persistenceService.remove(this.key);
  }
};
var DefaultTranslationProvider = class {
  language = "sv";
  get currentLanguage() {
    return this.language;
  }
  /* @todo technical debt, changeLanguage should accept just void */
  changeLanguage(language) {
    this.language = language;
    return Promise.resolve();
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
    return defaultValue.replace(/{{\s*([^\s]+)\s*}}/g, (match, key) => {
      return String(args[key]) || match;
    });
  }
};
var TranslationServiceImpl = class {
  provider = new DefaultTranslationProvider();
  changeProvider(newProvider) {
    this.provider = newProvider;
  }
};
var TranslationService = /* @__PURE__ */ new TranslationServiceImpl();
function createFieldsetValidator(element, validationService) {
  new FieldsetValidationHandler(element, validationService);
}
var FieldsetValidationHandler = class {
  hasDocumentListener = false;
  documentFocusInRef = void 0;
  element;
  validationService;
  constructor(element, validationService) {
    Object.assign(this);
    this.element = element;
    this.validationService = validationService;
    element.addEventListener("focusin", (event) => {
      this.onFocusIn(event);
    });
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
};
var ValidationErrorMessageBuilder = class _ValidationErrorMessageBuilder {
  /**
   * Create a new builder.
   */
  static create() {
    return new _ValidationErrorMessageBuilder();
  }
  validatorMessageMap;
  constructor() {
    this.validatorMessageMap = {};
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
};
function getErrorMessages() {
  return ValidationErrorMessageBuilder.create().map("bankAccountNumber", "Kontonumret \xE4r inte r\xE4tt ifyllt. Kolla att det st\xE4mmer.").mapCombined("required", "bankAccountNumber", "Fyll i ett kontonummer.").map("bankgiro", "Fyll i bankgironumret med sju eller \xE5tta siffror och bindestreck.").mapCombined("required", "bankgiro", "Fyll i bankgironumret.").mapCombined("maxLength", "bankgiro", "Bankgironumret kan inte ha mer \xE4n 9 tecken.").map("clearingNumber", "Clearingnumret \xE4r inte r\xE4tt ifyllt. Kolla att det st\xE4mmer.").mapCombined("required", "clearingNumber", "Fyll i ett clearingnummer.").map("currency", "Fyll i ett belopp.").mapCombined("required", "currency", "Fyll i ett belopp.").map("date", "Du har fyllt i ett felaktigt datum.").mapCombined("required", "date", "V\xE4lj ett datum.").map("dateFormat", "Fyll i datumet med \xE5tta siffror.").map("decimal", "Fyll i ett v\xE4rde med r\xE4tt antal decimaler.").map("email", "Mejladressen \xE4r inte korrekt ifylld.").mapCombined("required", "email", "Fyll i en mejladress.").mapCombined("matches", "email", "Kolla att mejladressen st\xE4mmer.").map("greaterThan", "Fyll i en h\xF6gre siffra.").map("integer", "Fyll i siffror utan decimal.").mapCombined("required", "integer", "Fyll i en siffra.").map("lessThan", "Du har fyllt i en f\xF6r h\xF6g siffra.").map("minDate", "Datumet ligger f\xF6r l\xE5ngt bak i tiden.").mapCombined("minDate", "date", "Datumet ligger f\xF6r l\xE5ngt bak i tiden.").map("maxDate", "Datumet ligger f\xF6r l\xE5ngt fram i tiden.").mapCombined("maxDate", "date", "Datumet ligger f\xF6r l\xE5ngt fram i tiden.").map("maxValue", "Du har fyllt i en f\xF6r h\xF6g siffra.").map("minValue", "Fyll i en h\xF6gre siffra.").map("number", "Du har fyllt i ett ogiltigt tecken. Fyll i siffror.").mapCombined("required", "number", "Fyll i en siffra.").mapCombined("minValue", "number", "Fyll i en h\xF6gre siffra.").mapCombined("maxValue", "number", "Du har fyllt i en f\xF6r h\xF6g siffra.").map("organisationsnummer", "Fyll i organisationsnumret med 10 siffror, till exempel 999999-9999.").mapCombined("required", "organisationsnummer", "Fyll i organisationsnumret med 10 siffror, till exempel 999999-9999.").mapCombined("maxLength", "organisationsnummer", "Organisationsnumret kan inte ha mer \xE4n 11 tecken.").map("percent", "Fyll i procent med en siffra.").mapCombined("integer", "percent", "Fyll i procent utan decimal.").mapCombined("required", "percent", "Fyll i en siffra.").mapCombined("minValue", "percent", "Fyll i en h\xF6gre siffra.").mapCombined("maxValue", "percent", "Fyll i en l\xE4gre siffra.").map("personnummerFormat", "Fyll i personnumret med 10 siffror.").mapCombined("required", "personnummerFormat", "Fyll i personnumret med 10 siffror.").mapCombined("maxLength", "personnummerFormat", "Fyll i personnumret med 10 siffror.").map("personnummerLuhn", "Kolla att personnumret st\xE4mmer.").map("postalCode", "Fyll i postnumret med fem siffror.").mapCombined("required", "postalCode", "Fyll i ett postnummer.").mapCombined("maxLength", "postalCode", "Postnumret kan inte ha mer \xE4n 13 tecken.").map("phoneNumber", "Telefonnumret \xE4r inte r\xE4tt ifyllt.").mapCombined("required", "phoneNumber", "Fyll i ett telefonnummer.").mapCombined("matches", "phoneNumber", "Kolla att telefonnumret st\xE4mmer.").map("plusgiro", "Fyll i plusgironumret med siffror och bindestreck.").mapCombined("required", "plusgiro", "Fyll i plusgironumret.").mapCombined("maxLength", "plusgiro", "Plusgironumret kan inte ha mer \xE4n 11 tecken.").map("matches", "F\xE4lten st\xE4mmer inte \xF6verens.").map("required", "Fyll i text.").map("required", "V\xE4lj minst ett alternativ.", "checkbox").map("required", "V\xE4lj ett av alternativen.", "radio").map("required", "V\xE4lj ett av alternativen.", "select").map("invalidDates", "Du kan inte v\xE4lja det h\xE4r datumet.").map("invalidWeekdays", "Du kan inte v\xE4lja det h\xE4r datumet.").map("whitelist", 'F\xE4ltet inneh\xE5ller otill\xE5tna tecken. Exempel p\xE5 ogiltiga tecken \xE4r /, % och ".').map("allowList", "V\xE4lj ett av alternativen i listan.").build();
}
function getCandidates(validatorName, validators, elementType) {
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
    return element.type === "checkbox" ? "checkbox" : (
      /* eslint-disable-next-line sonarjs/no-nested-conditional -- technical debt */
      element.type === "radio" ? "radio" : "text"
    );
  } else if (element instanceof HTMLTextAreaElement) {
    return "textarea";
  } else if (element instanceof HTMLSelectElement) {
    return "select";
  } else if (element instanceof HTMLFieldSetElement) {
    return getElementType(element.querySelector("input[type='checkbox'], input[type='radio']"));
  }
}
var registry = {};
function isValidatableHTMLElement(element) {
  if (element.classList.contains("card")) {
    return true;
  }
  return element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement || element instanceof HTMLFieldSetElement;
}
function hasValidators(element) {
  return typeof element.dataset.validation === "string";
}
var ValidationServiceImpl = class {
  validationStates = {};
  elementValidatorsReferences = {};
  validationErrorMessages = {};
  constructor() {
    this.setErrorMessages(getErrorMessages());
  }
  getElementsAndValidators() {
    return this.elementValidatorsReferences;
  }
  get isAnyTouched() {
    return Object.values(this.validationStates).some((item) => item.touched === true);
  }
  addValidationErrorMessages(validationErrorMessages) {
    this.setErrorMessages(validationErrorMessages);
  }
  setErrorMessages(messages, options = {}) {
    const { clear = false } = options;
    if (clear) {
      this.clearErrorMessages();
    }
    const current = this.validationErrorMessages;
    this.validationErrorMessages = { ...current, ...messages };
  }
  clearErrorMessages() {
    this.validationErrorMessages = {};
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
  /* eslint-disable-next-line @typescript-eslint/require-await -- technical debt */
  async isValid(src, root = document) {
    function isValidSync(src2) {
      if (!src2) {
        return false;
      } else if (Array.isArray(src2)) {
        const array = src2;
        return array.every((it) => isValidSync(it));
      } else if (typeof src2 === "string") {
        return isValidSync(root.querySelector(`#${src2}`));
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
      const ref = `${tagName}#${src.id}`;
      throw new Error(`Element "${ref}" is not a validatable element`);
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
    return new Promise((resolve, reject) => {
      const once = (event2) => {
        element.removeEventListener("validity", once);
        clearTimeout(watchdog);
        const { touched: isTouched = false, submitted: isSubmitted = false } = this.getState(element.id);
        const { isValid, validationMessage } = event2.detail;
        resolve({
          isValid,
          isTouched,
          isSubmitted,
          error: isValid ? null : validationMessage
        });
      };
      element.addEventListener("validity", once);
      const watchdog = setTimeout(() => {
        const tagName = element.tagName.toLowerCase();
        const ref = `${tagName}#${element.id}`;
        element.removeEventListener("validity", once);
        reject(`Element "${ref}" did not respond with validity event after 500ms`);
      }, 500);
      const event = new CustomEvent("validate", {
        bubbles: false
      });
      element.dispatchEvent(event);
    });
  }
  async validateAllElements(root) {
    const elements = this.getValidatableElements(root);
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
      const config = validatorConfigs[validator.name];
      const instantConfig = isSet(config) ? config.instant : void 0;
      return (
        /* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing -- false positive */
        validator.instant && instantConfig !== false || instantConfig === true
      );
    });
  }
  getState(id) {
    return this.validationStates[id];
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
    if (element instanceof HTMLDivElement) {
      return false;
    }
    return Boolean(isRadiobuttonOrCheckbox(element) ? element.checked : element.value);
  }
  getValue(element) {
    if ("value" in element) {
      return element.value.trim();
    } else {
      return "";
    }
  }
  validateAll(element, validationState, validators, validatorConfigs) {
    if (validationState.serverError) {
      return {
        isValid: false,
        validationMessage: validationState.serverError
      };
    }
    if ("disabled" in element && element.disabled) {
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
    const validatorConfig = validatorConfigs[validator.name] ?? {};
    const isEnabled = validatorConfig.enabled === void 0 || validatorConfig.enabled === true;
    return isEnabled ? validator.validation(value, element, validatorConfig) : true;
  }
  getErrorMessage(validatorName, validators, validatorConfigs, elementType) {
    const validatorConfig = validatorConfigs[validatorName];
    if (validatorConfig && validatorConfig.errorMessage) {
      return validatorConfig.errorMessage;
    }
    const candidates = getCandidates(validatorName, validators, elementType);
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
      if ("setCustomValidity" in affectedElement) {
        affectedElement.setCustomValidity(validityEvent.validationMessage);
      }
      affectedElement.setAttribute("aria-invalid", validField.toString());
    }
    element.dispatchEvent(event);
  }
  clearAllStates() {
    this.validationStates = {};
  }
};
var ValidationService = /* @__PURE__ */ new ValidationServiceImpl();
var allowListValidator = {
  name: "allowList",
  validation(value, element, config) {
    if (isEmpty(value) || config.list === void 0 || config.list.length === 0) {
      return true;
    }
    return config.list.includes(value);
  }
};
var bankAccountNumberValidator = {
  name: "bankAccountNumber",
  validation(value) {
    return isEmpty(value) || isSet(parseBankAccountNumber(value));
  }
};
var bankgiroValidator = {
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
var blacklistValidator = {
  name: "blacklist",
  validation(value, _element, config) {
    if (!config.values) {
      throw new Error("config.exclude must have values");
    }
    const values = toArray(config.values);
    const found = values.some((it) => String(it) === value);
    return !found;
  }
};
var clearingNumberValidator = {
  name: "clearingNumber",
  validation(value) {
    return isEmpty(value) || isSet(parseClearingNumber(value));
  }
};
var currencyValidator = {
  name: "currency",
  validation(value) {
    return isEmpty(value) || isSet(parseNumber(value));
  }
};
var dateValidator = {
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
var dateFormatValidator = {
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
  return new RegExp(`^([-\u2212]?[0-9]+)([,.][0-9]{${String(minDecimals)},${String(maxDecimals)}})(?<![,.])$`);
}
var decimalValidator = {
  name: "decimal",
  validation(value, _element, config) {
    const valueWithoutWhitespace = isSet(value) ? (
      /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-conversion -- technical debt */
      stripWhitespace(String(value))
    ) : value;
    const minDecimalsAsNumber = isSet(config.minDecimals) ? (
      /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-conversion -- technical debt */
      Number(config.minDecimals)
    ) : void 0;
    const maxDecimalsAsNumber = isSet(config.maxDecimals) ? (
      /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-conversion -- technical debt */
      Number(config.maxDecimals)
    ) : void 0;
    if (config.minDecimals && isNaN(minDecimalsAsNumber)) {
      throw new Error("config.minDecimals must be a number");
    }
    if (config.maxDecimals && isNaN(maxDecimalsAsNumber)) {
      throw new Error("config.maxDecimals must be a number");
    }
    return isEmpty(valueWithoutWhitespace) || createNumberRegexp(minDecimalsAsNumber, maxDecimalsAsNumber).test(valueWithoutWhitespace);
  }
};
var emailValidator = {
  name: "email",
  validation(value, _element, config) {
    const maxLength = config.maxLength ?? 254;
    const EMAIL_REGEXP = new RegExp(`^(?=.{1,${String(maxLength)}}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_\`a-z{|}~\xE5\xE4\xF6\xC5\xC4\xD6]+(\\.[-!#$%&'*+/0-9=?A-Z^_\`a-z{|}~\xE5\xE4\xF6\xC5\xC4\xD6]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$`);
    return isEmpty(value) || EMAIL_REGEXP.test(value);
  }
};
function numberValidator$1(value, config, name, compare) {
  if (value === "") {
    return true;
  }
  const limit = config[name];
  if (!isSet(limit)) {
    return false;
  }
  const limitAsNumber = parseNumber(String(config[name]));
  if (limitAsNumber === void 0) {
    throw new Error(`config.${String(name)} must be a number`);
  }
  const valueAsNumber = parseNumber(value);
  if (valueAsNumber === void 0) {
    return false;
  }
  return compare(valueAsNumber, limitAsNumber);
}
var greaterThanValidator = {
  name: "greaterThan",
  validation(value, _element, config) {
    return numberValidator$1(value, config, "limit", (value2, limit) => value2 > limit);
  }
};
var NUMBER_REGEXP = /^([-−]?\d+)?$/;
var integerValidator = {
  name: "integer",
  validation(value) {
    const valueWithoutWhitespace = isSet(value) ? (
      /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-conversion -- technical debt */
      stripWhitespace(String(value))
    ) : value;
    return isEmpty(valueWithoutWhitespace) || NUMBER_REGEXP.test(valueWithoutWhitespace);
  }
};
function isInvalidDatesConfig(value) {
  return Boolean(value.dates);
}
var invalidDatesValidator = {
  name: "invalidDates",
  validation(value, element, config) {
    if (isEmpty(value)) {
      return true;
    }
    if (!isInvalidDatesConfig(config)) {
      throw new Error(`Invalid invalidDates config for ${element.id}`);
    }
    return !config.dates.includes(value);
  }
};
function isInvalidWeekdaysConfig(value) {
  return Boolean(value.days);
}
var invalidWeekdaysValidator = {
  name: "invalidWeekdays",
  validation(value, element, config) {
    if (isEmpty(value)) {
      return true;
    }
    if (!isInvalidWeekdaysConfig(config)) {
      throw new Error(`Invalid invalidWeekdays config for ${element.id}`);
    }
    const day = FDate.fromIso(value).weekDay;
    return !config.days.includes(day);
  }
};
var lessThanValidator = {
  name: "lessThan",
  validation(value, _element, config) {
    return numberValidator$1(value, config, "limit", (value2, limit) => value2 < limit);
  }
};
var matchesValidator = {
  name: "matches",
  validation(value, _element, config) {
    if (!isSet(config.id) || !isSet(value)) {
      return true;
    }
    const el = document.getElementById(config.id);
    return el.value === value;
  }
};
var maxDateValidator = {
  name: "maxDate",
  validation(value, _element, config) {
    if (isEmpty(value)) {
      return true;
    }
    const normalizedValue = normalizeDateFormat(value);
    if (!normalizedValue) {
      return false;
    }
    const parsed = FDate.fromIso(normalizedValue);
    const limit = FDate.fromIso(validLimit(config.limit));
    return parsed.equals(limit) || parsed.isBefore(limit);
  }
};
var maxLengthValidator = {
  name: "maxLength",
  validation(value, _element, config) {
    return config.length ? value.length <= config.length : true;
  }
};
var maxValueValidator = {
  name: "maxValue",
  validation(value, _element, config) {
    return numberValidator$1(value, config, this.name, (value2, limit) => value2 <= limit);
  }
};
var minDateValidator = {
  name: "minDate",
  validation(value, _element, config) {
    if (isEmpty(value)) {
      return true;
    }
    const normalizedValue = normalizeDateFormat(value);
    if (!normalizedValue) {
      return false;
    }
    const parsed = FDate.fromIso(normalizedValue);
    const limit = FDate.fromIso(validLimit(config.limit));
    return parsed.equals(limit) || parsed.isAfter(limit);
  }
};
var minLengthValidator = {
  name: "minLength",
  validation(value, _element, config) {
    return config.length && value ? value.length >= config.length : true;
  }
};
var minValueValidator = {
  name: "minValue",
  validation(value, _element, config) {
    return numberValidator$1(value, config, this.name, (value2, limit) => value2 >= limit);
  }
};
var numberValidator = {
  name: "number",
  validation(value) {
    return isEmpty(value) || isSet(parseNumber(value));
  }
};
var organisationsnummerValidator = {
  name: "organisationsnummer",
  validation(value) {
    return isEmpty(value) || isSet(parseOrganisationsnummer(value));
  }
};
var PERCENT_REGEXP = /^([-+]?\d+)([,.]\d+)?$/;
var percentValidator = {
  name: "percent",
  validation(value) {
    const valueWithoutWhitespace = isSet(value) ? (
      /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-conversion -- technical debt */
      stripWhitespace(String(value))
    ) : value;
    return isEmpty(valueWithoutWhitespace) || PERCENT_REGEXP.test(valueWithoutWhitespace);
  }
};
var personnummerFormatValidator = {
  name: "personnummerFormat",
  validation(value) {
    return isEmpty(value) || isSet(parsePersonnummer(value));
  }
};
var personnummerLuhnValidator = {
  name: "personnummerLuhn",
  validation(value) {
    return isEmpty(value) || isSet(parsePersonnummerLuhn(value));
  }
};
var personnummerNotSame = {
  name: "personnummerNotSame",
  validation(value, _element, config) {
    const valuePnr = parsePersonnummer(String(value));
    if (!valuePnr) {
      return true;
    }
    const otherFieldPnr = parsePersonnummer(String(config.otherField));
    if (!otherFieldPnr) {
      return true;
    }
    if (valuePnr === otherFieldPnr) {
      return false;
    }
    return true;
  }
};
var personnummerOlder = {
  name: "personnummerOlder",
  validation(value, _element, config) {
    const valueAsDate = formatPersonnummerToDate(value);
    const otherAsDate = formatPersonnummerToDate(String(config.otherField));
    if (!valueAsDate || !otherAsDate) {
      return true;
    }
    return FDate.compare(valueAsDate, otherAsDate) !== 1;
  }
};
var personnummerYounger = {
  name: "personnummerYounger",
  validation(value, _element, config) {
    const valueAsDate = formatPersonnummerToDate(value);
    const otherAsDate = formatPersonnummerToDate(String(config.otherField));
    if (!valueAsDate || !otherAsDate) {
      return true;
    }
    return FDate.compare(valueAsDate, otherAsDate) !== -1;
  }
};
var PHONE_NUMBER_REGEXP = /^(\+?[-_/() ]*(\d[-_/() ]*?){3,17})$/;
var phoneNumberValidator = {
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
var plusgiroValidator = {
  name: "plusgiro",
  validation(value) {
    return isEmpty(value) || isSet(parsePlusgiro(value));
  }
};
var postalCodeValidator = {
  name: "postalCode",
  validation(value) {
    return isEmpty(value) || isSet(parsePostalCode(value));
  }
};
var REQUIRED_REGEXP = /^\S+/;
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
var requiredValidator = {
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
var WHITELIST_REGEXP = /^[a-zA-Z0-9 .,\-()\r\n?+=!:@*\xC0-\xFF]*$/;
var whitelistValidator = {
  name: "whitelist",
  instant: true,
  validation(value) {
    return isEmpty(value) || WHITELIST_REGEXP.test(value);
  }
};
var availableValidators = [
  allowListValidator,
  bankAccountNumberValidator,
  bankgiroValidator,
  blacklistValidator,
  clearingNumberValidator,
  currencyValidator,
  dateFormatValidator,
  dateValidator,
  decimalValidator,
  emailValidator,
  greaterThanValidator,
  integerValidator,
  invalidDatesValidator,
  invalidWeekdaysValidator,
  lessThanValidator,
  matchesValidator,
  maxDateValidator,
  maxLengthValidator,
  maxValueValidator,
  minDateValidator,
  minLengthValidator,
  minValueValidator,
  numberValidator,
  organisationsnummerValidator,
  percentValidator,
  personnummerFormatValidator,
  personnummerLuhnValidator,
  personnummerNotSame,
  personnummerOlder,
  personnummerYounger,
  phoneNumberValidator,
  plusgiroValidator,
  postalCodeValidator,
  requiredValidator,
  whitelistValidator
];
var SCREEN_READER_DELAY = 100;
function waitForScreenReader(callback, delay = SCREEN_READER_DELAY) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = callback();
        resolve(result);
      } catch (err) {
        reject(err);
      }
    }, delay);
  });
}
var REMOVE_TEXT_DELAY = 2e3;
var defaultOptions = {
  assertive: false
};
var wrapper;
function alertScreenReader(text, options) {
  const mergedOptions = { ...defaultOptions, ...options };
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
export {
  DecoratedError,
  index as DomUtils,
  ElementIdService,
  MissingValueError,
  PersistenceService,
  SCREEN_READER_DELAY,
  SimplePersistenceService,
  TranslationService,
  ValidationErrorMessageBuilder,
  ValidationService,
  addFocusListener,
  alertScreenReader,
  assertRef,
  assertSet,
  availableValidators,
  configLogic,
  debounce,
  deepClone,
  deleteCookie,
  documentOrderComparator,
  ensureSet,
  findCookie,
  findTabbableElements,
  flatten,
  focus,
  focusFirst,
  focusLast,
  formatClearingNumberForBackend,
  formatNumber,
  formatPercent,
  formatPersonnummer,
  formatPersonnummerToDate,
  formatPostalCode,
  getErrorMessages,
  handleTab,
  isEmpty,
  isFocusable,
  isInvalidDatesConfig,
  isInvalidWeekdaysConfig,
  isRadiobuttonOrCheckbox,
  isSet,
  isString,
  isTabbable,
  isValidatableFormElement,
  isValidatableHTMLElement,
  isVisible,
  isVisibleInViewport,
  normalizeDateFormat,
  parseBankAccountNumber,
  parseBankgiro,
  parseClearingNumber,
  parseDate,
  parseNumber,
  parseOrganisationsnummer,
  parsePercent,
  parsePersonnummer,
  parsePersonnummerLuhn,
  parsePlusgiro,
  parsePostalCode,
  popFocus,
  pushFocus,
  removeFocusListener,
  restoreFocus,
  saveFocus,
  scrollTo,
  setCookie,
  stripNull,
  stripWhitespace,
  testLuhnChecksum,
  validChecksum,
  validLimit,
  waitForScreenReader
};
