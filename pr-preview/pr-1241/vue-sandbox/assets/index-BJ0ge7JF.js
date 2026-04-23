//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region ../../node_modules/@vue/shared/dist/shared.esm-bundler.js
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/* @__NO_SIDE_EFFECTS__ */
function makeMap(str) {
	const map = /* @__PURE__ */ Object.create(null);
	for (const key of str.split(",")) map[key] = 1;
	return (val) => val in map;
}
var EMPTY_OBJ = {};
var EMPTY_ARR = [];
var NOOP = () => {};
var NO = () => false;
var isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
var isModelListener = (key) => key.startsWith("onUpdate:");
var extend = Object.assign;
var remove = (arr, el) => {
	const i = arr.indexOf(el);
	if (i > -1) arr.splice(i, 1);
};
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
var isArray$1 = Array.isArray;
var isMap = (val) => toTypeString(val) === "[object Map]";
var isSet$1 = (val) => toTypeString(val) === "[object Set]";
var isDate = (val) => toTypeString(val) === "[object Date]";
var isFunction = (val) => typeof val === "function";
var isString$1 = (val) => typeof val === "string";
var isSymbol = (val) => typeof val === "symbol";
var isObject = (val) => val !== null && typeof val === "object";
var isPromise = (val) => {
	return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
var objectToString = Object.prototype.toString;
var toTypeString = (value) => objectToString.call(value);
var toRawType = (value) => {
	return toTypeString(value).slice(8, -1);
};
var isPlainObject = (val) => toTypeString(val) === "[object Object]";
var isIntegerKey = (key) => isString$1(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
var cacheStringFunction$1 = (fn) => {
	const cache = /* @__PURE__ */ Object.create(null);
	return ((str) => {
		return cache[str] || (cache[str] = fn(str));
	});
};
var camelizeRE$1 = /-\w/g;
var camelize = cacheStringFunction$1((str) => {
	return str.replace(camelizeRE$1, (c) => c.slice(1).toUpperCase());
});
var hyphenateRE$1 = /\B([A-Z])/g;
var hyphenate = cacheStringFunction$1((str) => str.replace(hyphenateRE$1, "-$1").toLowerCase());
var capitalize = cacheStringFunction$1((str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
});
var toHandlerKey = cacheStringFunction$1((str) => {
	return str ? `on${capitalize(str)}` : ``;
});
var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
var invokeArrayFns = (fns, ...arg) => {
	for (let i = 0; i < fns.length; i++) fns[i](...arg);
};
var def = (obj, key, value, writable = false) => {
	Object.defineProperty(obj, key, {
		configurable: true,
		enumerable: false,
		writable,
		value
	});
};
var looseToNumber = (val) => {
	const n = parseFloat(val);
	return isNaN(n) ? val : n;
};
var _globalThis;
var getGlobalThis = () => {
	return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function normalizeStyle(value) {
	if (isArray$1(value)) {
		const res = {};
		for (let i = 0; i < value.length; i++) {
			const item = value[i];
			const normalized = isString$1(item) ? parseStringStyle(item) : normalizeStyle(item);
			if (normalized) for (const key in normalized) res[key] = normalized[key];
		}
		return res;
	} else if (isString$1(value) || isObject(value)) return value;
}
var listDelimiterRE = /;(?![^(]*\))/g;
var propertyDelimiterRE = /:([^]+)/;
var styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
	const ret = {};
	cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
		if (item) {
			const tmp = item.split(propertyDelimiterRE);
			tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
		}
	});
	return ret;
}
function normalizeClass(value) {
	let res = "";
	if (isString$1(value)) res = value;
	else if (isArray$1(value)) for (let i = 0; i < value.length; i++) {
		const normalized = normalizeClass(value[i]);
		if (normalized) res += normalized + " ";
	}
	else if (isObject(value)) {
		for (const name in value) if (value[name]) res += name + " ";
	}
	return res.trim();
}
function normalizeProps(props) {
	if (!props) return null;
	let { class: klass, style } = props;
	if (klass && !isString$1(klass)) props.class = normalizeClass(klass);
	if (style) props.style = normalizeStyle(style);
	return props;
}
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
specialBooleanAttrs + "";
function includeBooleanAttr(value) {
	return !!value || value === "";
}
function looseCompareArrays(a, b) {
	if (a.length !== b.length) return false;
	let equal = true;
	for (let i = 0; equal && i < a.length; i++) equal = looseEqual(a[i], b[i]);
	return equal;
}
function looseEqual(a, b) {
	if (a === b) return true;
	let aValidType = isDate(a);
	let bValidType = isDate(b);
	if (aValidType || bValidType) return aValidType && bValidType ? a.getTime() === b.getTime() : false;
	aValidType = isSymbol(a);
	bValidType = isSymbol(b);
	if (aValidType || bValidType) return a === b;
	aValidType = isArray$1(a);
	bValidType = isArray$1(b);
	if (aValidType || bValidType) return aValidType && bValidType ? looseCompareArrays(a, b) : false;
	aValidType = isObject(a);
	bValidType = isObject(b);
	if (aValidType || bValidType) {
		if (!aValidType || !bValidType) return false;
		if (Object.keys(a).length !== Object.keys(b).length) return false;
		for (const key in a) {
			const aHasKey = a.hasOwnProperty(key);
			const bHasKey = b.hasOwnProperty(key);
			if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) return false;
		}
	}
	return String(a) === String(b);
}
function looseIndexOf(arr, val) {
	return arr.findIndex((item) => looseEqual(item, val));
}
var isRef$1 = (val) => {
	return !!(val && val["__v_isRef"] === true);
};
var toDisplayString = (val) => {
	return isString$1(val) ? val : val == null ? "" : isArray$1(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef$1(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
var replacer = (_key, val) => {
	if (isRef$1(val)) return replacer(_key, val.value);
	else if (isMap(val)) return { [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2], i) => {
		entries[stringifySymbol(key, i) + " =>"] = val2;
		return entries;
	}, {}) };
	else if (isSet$1(val)) return { [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v)) };
	else if (isSymbol(val)) return stringifySymbol(val);
	else if (isObject(val) && !isArray$1(val) && !isPlainObject(val)) return String(val);
	return val;
};
var stringifySymbol = (v, i = "") => {
	var _a;
	return isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v;
};
//#endregion
//#region ../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var activeEffectScope;
var EffectScope = class {
	constructor(detached = false) {
		this.detached = detached;
		/**
		* @internal
		*/
		this._active = true;
		/**
		* @internal track `on` calls, allow `on` call multiple times
		*/
		this._on = 0;
		/**
		* @internal
		*/
		this.effects = [];
		/**
		* @internal
		*/
		this.cleanups = [];
		this._isPaused = false;
		this.__v_skip = true;
		this.parent = activeEffectScope;
		if (!detached && activeEffectScope) this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = true;
			let i, l;
			if (this.scopes) for (i = 0, l = this.scopes.length; i < l; i++) this.scopes[i].pause();
			for (i = 0, l = this.effects.length; i < l; i++) this.effects[i].pause();
		}
	}
	/**
	* Resumes the effect scope, including all child scopes and effects.
	*/
	resume() {
		if (this._active) {
			if (this._isPaused) {
				this._isPaused = false;
				let i, l;
				if (this.scopes) for (i = 0, l = this.scopes.length; i < l; i++) this.scopes[i].resume();
				for (i = 0, l = this.effects.length; i < l; i++) this.effects[i].resume();
			}
		}
	}
	run(fn) {
		if (this._active) {
			const currentEffectScope = activeEffectScope;
			try {
				activeEffectScope = this;
				return fn();
			} finally {
				activeEffectScope = currentEffectScope;
			}
		}
	}
	/**
	* This should only be called on non-detached scopes
	* @internal
	*/
	on() {
		if (++this._on === 1) {
			this.prevScope = activeEffectScope;
			activeEffectScope = this;
		}
	}
	/**
	* This should only be called on non-detached scopes
	* @internal
	*/
	off() {
		if (this._on > 0 && --this._on === 0) {
			activeEffectScope = this.prevScope;
			this.prevScope = void 0;
		}
	}
	stop(fromParent) {
		if (this._active) {
			this._active = false;
			let i, l;
			for (i = 0, l = this.effects.length; i < l; i++) this.effects[i].stop();
			this.effects.length = 0;
			for (i = 0, l = this.cleanups.length; i < l; i++) this.cleanups[i]();
			this.cleanups.length = 0;
			if (this.scopes) {
				for (i = 0, l = this.scopes.length; i < l; i++) this.scopes[i].stop(true);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !fromParent) {
				const last = this.parent.scopes.pop();
				if (last && last !== this) {
					this.parent.scopes[this.index] = last;
					last.index = this.index;
				}
			}
			this.parent = void 0;
		}
	}
};
function getCurrentScope() {
	return activeEffectScope;
}
var activeSub;
var pausedQueueEffects = /* @__PURE__ */ new WeakSet();
var ReactiveEffect = class {
	constructor(fn) {
		this.fn = fn;
		/**
		* @internal
		*/
		this.deps = void 0;
		/**
		* @internal
		*/
		this.depsTail = void 0;
		/**
		* @internal
		*/
		this.flags = 5;
		/**
		* @internal
		*/
		this.next = void 0;
		/**
		* @internal
		*/
		this.cleanup = void 0;
		this.scheduler = void 0;
		if (activeEffectScope && activeEffectScope.active) activeEffectScope.effects.push(this);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		if (this.flags & 64) {
			this.flags &= -65;
			if (pausedQueueEffects.has(this)) {
				pausedQueueEffects.delete(this);
				this.trigger();
			}
		}
	}
	/**
	* @internal
	*/
	notify() {
		if (this.flags & 2 && !(this.flags & 32)) return;
		if (!(this.flags & 8)) batch(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2;
		cleanupEffect(this);
		prepareDeps(this);
		const prevEffect = activeSub;
		const prevShouldTrack = shouldTrack;
		activeSub = this;
		shouldTrack = true;
		try {
			return this.fn();
		} finally {
			cleanupDeps(this);
			activeSub = prevEffect;
			shouldTrack = prevShouldTrack;
			this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let link = this.deps; link; link = link.nextDep) removeSub(link);
			this.deps = this.depsTail = void 0;
			cleanupEffect(this);
			this.onStop && this.onStop();
			this.flags &= -2;
		}
	}
	trigger() {
		if (this.flags & 64) pausedQueueEffects.add(this);
		else if (this.scheduler) this.scheduler();
		else this.runIfDirty();
	}
	/**
	* @internal
	*/
	runIfDirty() {
		if (isDirty(this)) this.run();
	}
	get dirty() {
		return isDirty(this);
	}
};
var batchDepth = 0;
var batchedSub;
var batchedComputed;
function batch(sub, isComputed = false) {
	sub.flags |= 8;
	if (isComputed) {
		sub.next = batchedComputed;
		batchedComputed = sub;
		return;
	}
	sub.next = batchedSub;
	batchedSub = sub;
}
function startBatch() {
	batchDepth++;
}
function endBatch() {
	if (--batchDepth > 0) return;
	if (batchedComputed) {
		let e = batchedComputed;
		batchedComputed = void 0;
		while (e) {
			const next = e.next;
			e.next = void 0;
			e.flags &= -9;
			e = next;
		}
	}
	let error;
	while (batchedSub) {
		let e = batchedSub;
		batchedSub = void 0;
		while (e) {
			const next = e.next;
			e.next = void 0;
			e.flags &= -9;
			if (e.flags & 1) try {
				e.trigger();
			} catch (err) {
				if (!error) error = err;
			}
			e = next;
		}
	}
	if (error) throw error;
}
function prepareDeps(sub) {
	for (let link = sub.deps; link; link = link.nextDep) {
		link.version = -1;
		link.prevActiveLink = link.dep.activeLink;
		link.dep.activeLink = link;
	}
}
function cleanupDeps(sub) {
	let head;
	let tail = sub.depsTail;
	let link = tail;
	while (link) {
		const prev = link.prevDep;
		if (link.version === -1) {
			if (link === tail) tail = prev;
			removeSub(link);
			removeDep(link);
		} else head = link;
		link.dep.activeLink = link.prevActiveLink;
		link.prevActiveLink = void 0;
		link = prev;
	}
	sub.deps = head;
	sub.depsTail = tail;
}
function isDirty(sub) {
	for (let link = sub.deps; link; link = link.nextDep) if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) return true;
	if (sub._dirty) return true;
	return false;
}
function refreshComputed(computed) {
	if (computed.flags & 4 && !(computed.flags & 16)) return;
	computed.flags &= -17;
	if (computed.globalVersion === globalVersion) return;
	computed.globalVersion = globalVersion;
	if (!computed.isSSR && computed.flags & 128 && (!computed.deps && !computed._dirty || !isDirty(computed))) return;
	computed.flags |= 2;
	const dep = computed.dep;
	const prevSub = activeSub;
	const prevShouldTrack = shouldTrack;
	activeSub = computed;
	shouldTrack = true;
	try {
		prepareDeps(computed);
		const value = computed.fn(computed._value);
		if (dep.version === 0 || hasChanged(value, computed._value)) {
			computed.flags |= 128;
			computed._value = value;
			dep.version++;
		}
	} catch (err) {
		dep.version++;
		throw err;
	} finally {
		activeSub = prevSub;
		shouldTrack = prevShouldTrack;
		cleanupDeps(computed);
		computed.flags &= -3;
	}
}
function removeSub(link, soft = false) {
	const { dep, prevSub, nextSub } = link;
	if (prevSub) {
		prevSub.nextSub = nextSub;
		link.prevSub = void 0;
	}
	if (nextSub) {
		nextSub.prevSub = prevSub;
		link.nextSub = void 0;
	}
	if (dep.subs === link) {
		dep.subs = prevSub;
		if (!prevSub && dep.computed) {
			dep.computed.flags &= -5;
			for (let l = dep.computed.deps; l; l = l.nextDep) removeSub(l, true);
		}
	}
	if (!soft && !--dep.sc && dep.map) dep.map.delete(dep.key);
}
function removeDep(link) {
	const { prevDep, nextDep } = link;
	if (prevDep) {
		prevDep.nextDep = nextDep;
		link.prevDep = void 0;
	}
	if (nextDep) {
		nextDep.prevDep = prevDep;
		link.nextDep = void 0;
	}
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
	trackStack.push(shouldTrack);
	shouldTrack = false;
}
function resetTracking() {
	const last = trackStack.pop();
	shouldTrack = last === void 0 ? true : last;
}
function cleanupEffect(e) {
	const { cleanup } = e;
	e.cleanup = void 0;
	if (cleanup) {
		const prevSub = activeSub;
		activeSub = void 0;
		try {
			cleanup();
		} finally {
			activeSub = prevSub;
		}
	}
}
var globalVersion = 0;
var Link = class {
	constructor(sub, dep) {
		this.sub = sub;
		this.dep = dep;
		this.version = dep.version;
		this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
};
var Dep = class {
	constructor(computed) {
		this.computed = computed;
		this.version = 0;
		/**
		* Link between this dep and the current active effect
		*/
		this.activeLink = void 0;
		/**
		* Doubly linked list representing the subscribing effects (tail)
		*/
		this.subs = void 0;
		/**
		* For object property deps cleanup
		*/
		this.map = void 0;
		this.key = void 0;
		/**
		* Subscriber counter
		*/
		this.sc = 0;
		/**
		* @internal
		*/
		this.__v_skip = true;
	}
	track(debugInfo) {
		if (!activeSub || !shouldTrack || activeSub === this.computed) return;
		let link = this.activeLink;
		if (link === void 0 || link.sub !== activeSub) {
			link = this.activeLink = new Link(activeSub, this);
			if (!activeSub.deps) activeSub.deps = activeSub.depsTail = link;
			else {
				link.prevDep = activeSub.depsTail;
				activeSub.depsTail.nextDep = link;
				activeSub.depsTail = link;
			}
			addSub(link);
		} else if (link.version === -1) {
			link.version = this.version;
			if (link.nextDep) {
				const next = link.nextDep;
				next.prevDep = link.prevDep;
				if (link.prevDep) link.prevDep.nextDep = next;
				link.prevDep = activeSub.depsTail;
				link.nextDep = void 0;
				activeSub.depsTail.nextDep = link;
				activeSub.depsTail = link;
				if (activeSub.deps === link) activeSub.deps = next;
			}
		}
		return link;
	}
	trigger(debugInfo) {
		this.version++;
		globalVersion++;
		this.notify(debugInfo);
	}
	notify(debugInfo) {
		startBatch();
		try {
			for (let link = this.subs; link; link = link.prevSub) if (link.sub.notify()) link.sub.dep.notify();
		} finally {
			endBatch();
		}
	}
};
function addSub(link) {
	link.dep.sc++;
	if (link.sub.flags & 4) {
		const computed = link.dep.computed;
		if (computed && !link.dep.subs) {
			computed.flags |= 20;
			for (let l = computed.deps; l; l = l.nextDep) addSub(l);
		}
		const currentTail = link.dep.subs;
		if (currentTail !== link) {
			link.prevSub = currentTail;
			if (currentTail) currentTail.nextSub = link;
		}
		link.dep.subs = link;
	}
}
var targetMap = /* @__PURE__ */ new WeakMap();
var ITERATE_KEY = /* @__PURE__ */ Symbol("");
var MAP_KEY_ITERATE_KEY = /* @__PURE__ */ Symbol("");
var ARRAY_ITERATE_KEY = /* @__PURE__ */ Symbol("");
function track(target, type, key) {
	if (shouldTrack && activeSub) {
		let depsMap = targetMap.get(target);
		if (!depsMap) targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
		let dep = depsMap.get(key);
		if (!dep) {
			depsMap.set(key, dep = new Dep());
			dep.map = depsMap;
			dep.key = key;
		}
		dep.track();
	}
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
	const depsMap = targetMap.get(target);
	if (!depsMap) {
		globalVersion++;
		return;
	}
	const run = (dep) => {
		if (dep) dep.trigger();
	};
	startBatch();
	if (type === "clear") depsMap.forEach(run);
	else {
		const targetIsArray = isArray$1(target);
		const isArrayIndex = targetIsArray && isIntegerKey(key);
		if (targetIsArray && key === "length") {
			const newLength = Number(newValue);
			depsMap.forEach((dep, key2) => {
				if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol(key2) && key2 >= newLength) run(dep);
			});
		} else {
			if (key !== void 0 || depsMap.has(void 0)) run(depsMap.get(key));
			if (isArrayIndex) run(depsMap.get(ARRAY_ITERATE_KEY));
			switch (type) {
				case "add":
					if (!targetIsArray) {
						run(depsMap.get(ITERATE_KEY));
						if (isMap(target)) run(depsMap.get(MAP_KEY_ITERATE_KEY));
					} else if (isArrayIndex) run(depsMap.get("length"));
					break;
				case "delete":
					if (!targetIsArray) {
						run(depsMap.get(ITERATE_KEY));
						if (isMap(target)) run(depsMap.get(MAP_KEY_ITERATE_KEY));
					}
					break;
				case "set":
					if (isMap(target)) run(depsMap.get(ITERATE_KEY));
					break;
			}
		}
	}
	endBatch();
}
function getDepFromReactive(object, key) {
	const depMap = targetMap.get(object);
	return depMap && depMap.get(key);
}
function reactiveReadArray(array) {
	const raw = /* @__PURE__ */ toRaw(array);
	if (raw === array) return raw;
	track(raw, "iterate", ARRAY_ITERATE_KEY);
	return /* @__PURE__ */ isShallow(array) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
	track(arr = /* @__PURE__ */ toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
	return arr;
}
function toWrapped(target, item) {
	if (/* @__PURE__ */ isReadonly(target)) return /* @__PURE__ */ isReactive(target) ? toReadonly(toReactive(item)) : toReadonly(item);
	return toReactive(item);
}
var arrayInstrumentations = {
	__proto__: null,
	[Symbol.iterator]() {
		return iterator(this, Symbol.iterator, (item) => toWrapped(this, item));
	},
	concat(...args) {
		return reactiveReadArray(this).concat(...args.map((x) => isArray$1(x) ? reactiveReadArray(x) : x));
	},
	entries() {
		return iterator(this, "entries", (value) => {
			value[1] = toWrapped(this, value[1]);
			return value;
		});
	},
	every(fn, thisArg) {
		return apply(this, "every", fn, thisArg, void 0, arguments);
	},
	filter(fn, thisArg) {
		return apply(this, "filter", fn, thisArg, (v) => v.map((item) => toWrapped(this, item)), arguments);
	},
	find(fn, thisArg) {
		return apply(this, "find", fn, thisArg, (item) => toWrapped(this, item), arguments);
	},
	findIndex(fn, thisArg) {
		return apply(this, "findIndex", fn, thisArg, void 0, arguments);
	},
	findLast(fn, thisArg) {
		return apply(this, "findLast", fn, thisArg, (item) => toWrapped(this, item), arguments);
	},
	findLastIndex(fn, thisArg) {
		return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
	},
	forEach(fn, thisArg) {
		return apply(this, "forEach", fn, thisArg, void 0, arguments);
	},
	includes(...args) {
		return searchProxy(this, "includes", args);
	},
	indexOf(...args) {
		return searchProxy(this, "indexOf", args);
	},
	join(separator) {
		return reactiveReadArray(this).join(separator);
	},
	lastIndexOf(...args) {
		return searchProxy(this, "lastIndexOf", args);
	},
	map(fn, thisArg) {
		return apply(this, "map", fn, thisArg, void 0, arguments);
	},
	pop() {
		return noTracking(this, "pop");
	},
	push(...args) {
		return noTracking(this, "push", args);
	},
	reduce(fn, ...args) {
		return reduce(this, "reduce", fn, args);
	},
	reduceRight(fn, ...args) {
		return reduce(this, "reduceRight", fn, args);
	},
	shift() {
		return noTracking(this, "shift");
	},
	some(fn, thisArg) {
		return apply(this, "some", fn, thisArg, void 0, arguments);
	},
	splice(...args) {
		return noTracking(this, "splice", args);
	},
	toReversed() {
		return reactiveReadArray(this).toReversed();
	},
	toSorted(comparer) {
		return reactiveReadArray(this).toSorted(comparer);
	},
	toSpliced(...args) {
		return reactiveReadArray(this).toSpliced(...args);
	},
	unshift(...args) {
		return noTracking(this, "unshift", args);
	},
	values() {
		return iterator(this, "values", (item) => toWrapped(this, item));
	}
};
function iterator(self, method, wrapValue) {
	const arr = shallowReadArray(self);
	const iter = arr[method]();
	if (arr !== self && !/* @__PURE__ */ isShallow(self)) {
		iter._next = iter.next;
		iter.next = () => {
			const result = iter._next();
			if (!result.done) result.value = wrapValue(result.value);
			return result;
		};
	}
	return iter;
}
var arrayProto = Array.prototype;
function apply(self, method, fn, thisArg, wrappedRetFn, args) {
	const arr = shallowReadArray(self);
	const needsWrap = arr !== self && !/* @__PURE__ */ isShallow(self);
	const methodFn = arr[method];
	if (methodFn !== arrayProto[method]) {
		const result2 = methodFn.apply(self, args);
		return needsWrap ? toReactive(result2) : result2;
	}
	let wrappedFn = fn;
	if (arr !== self) {
		if (needsWrap) wrappedFn = function(item, index) {
			return fn.call(this, toWrapped(self, item), index, self);
		};
		else if (fn.length > 2) wrappedFn = function(item, index) {
			return fn.call(this, item, index, self);
		};
	}
	const result = methodFn.call(arr, wrappedFn, thisArg);
	return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self, method, fn, args) {
	const arr = shallowReadArray(self);
	const needsWrap = arr !== self && !/* @__PURE__ */ isShallow(self);
	let wrappedFn = fn;
	let wrapInitialAccumulator = false;
	if (arr !== self) {
		if (needsWrap) {
			wrapInitialAccumulator = args.length === 0;
			wrappedFn = function(acc, item, index) {
				if (wrapInitialAccumulator) {
					wrapInitialAccumulator = false;
					acc = toWrapped(self, acc);
				}
				return fn.call(this, acc, toWrapped(self, item), index, self);
			};
		} else if (fn.length > 3) wrappedFn = function(acc, item, index) {
			return fn.call(this, acc, item, index, self);
		};
	}
	const result = arr[method](wrappedFn, ...args);
	return wrapInitialAccumulator ? toWrapped(self, result) : result;
}
function searchProxy(self, method, args) {
	const arr = /* @__PURE__ */ toRaw(self);
	track(arr, "iterate", ARRAY_ITERATE_KEY);
	const res = arr[method](...args);
	if ((res === -1 || res === false) && /* @__PURE__ */ isProxy(args[0])) {
		args[0] = /* @__PURE__ */ toRaw(args[0]);
		return arr[method](...args);
	}
	return res;
}
function noTracking(self, method, args = []) {
	pauseTracking();
	startBatch();
	const res = (/* @__PURE__ */ toRaw(self))[method].apply(self, args);
	endBatch();
	resetTracking();
	return res;
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol));
function hasOwnProperty(key) {
	if (!isSymbol(key)) key = String(key);
	const obj = /* @__PURE__ */ toRaw(this);
	track(obj, "has", key);
	return obj.hasOwnProperty(key);
}
var BaseReactiveHandler = class {
	constructor(_isReadonly = false, _isShallow = false) {
		this._isReadonly = _isReadonly;
		this._isShallow = _isShallow;
	}
	get(target, key, receiver) {
		if (key === "__v_skip") return target["__v_skip"];
		const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
		if (key === "__v_isReactive") return !isReadonly2;
		else if (key === "__v_isReadonly") return isReadonly2;
		else if (key === "__v_isShallow") return isShallow2;
		else if (key === "__v_raw") {
			if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) return target;
			return;
		}
		const targetIsArray = isArray$1(target);
		if (!isReadonly2) {
			let fn;
			if (targetIsArray && (fn = arrayInstrumentations[key])) return fn;
			if (key === "hasOwnProperty") return hasOwnProperty;
		}
		const res = Reflect.get(target, key, /* @__PURE__ */ isRef(target) ? target : receiver);
		if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
		if (!isReadonly2) track(target, "get", key);
		if (isShallow2) return res;
		if (/* @__PURE__ */ isRef(res)) {
			const value = targetIsArray && isIntegerKey(key) ? res : res.value;
			return isReadonly2 && isObject(value) ? /* @__PURE__ */ readonly(value) : value;
		}
		if (isObject(res)) return isReadonly2 ? /* @__PURE__ */ readonly(res) : /* @__PURE__ */ reactive(res);
		return res;
	}
};
var MutableReactiveHandler = class extends BaseReactiveHandler {
	constructor(isShallow2 = false) {
		super(false, isShallow2);
	}
	set(target, key, value, receiver) {
		let oldValue = target[key];
		const isArrayWithIntegerKey = isArray$1(target) && isIntegerKey(key);
		if (!this._isShallow) {
			const isOldValueReadonly = /* @__PURE__ */ isReadonly(oldValue);
			if (!/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) {
				oldValue = /* @__PURE__ */ toRaw(oldValue);
				value = /* @__PURE__ */ toRaw(value);
			}
			if (!isArrayWithIntegerKey && /* @__PURE__ */ isRef(oldValue) && !/* @__PURE__ */ isRef(value)) if (isOldValueReadonly) return true;
			else {
				oldValue.value = value;
				return true;
			}
		}
		const hadKey = isArrayWithIntegerKey ? Number(key) < target.length : hasOwn(target, key);
		const result = Reflect.set(target, key, value, /* @__PURE__ */ isRef(target) ? target : receiver);
		if (target === /* @__PURE__ */ toRaw(receiver)) {
			if (!hadKey) trigger(target, "add", key, value);
			else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
		}
		return result;
	}
	deleteProperty(target, key) {
		const hadKey = hasOwn(target, key);
		const oldValue = target[key];
		const result = Reflect.deleteProperty(target, key);
		if (result && hadKey) trigger(target, "delete", key, void 0, oldValue);
		return result;
	}
	has(target, key) {
		const result = Reflect.has(target, key);
		if (!isSymbol(key) || !builtInSymbols.has(key)) track(target, "has", key);
		return result;
	}
	ownKeys(target) {
		track(target, "iterate", isArray$1(target) ? "length" : ITERATE_KEY);
		return Reflect.ownKeys(target);
	}
};
var ReadonlyReactiveHandler = class extends BaseReactiveHandler {
	constructor(isShallow2 = false) {
		super(true, isShallow2);
	}
	set(target, key) {
		return true;
	}
	deleteProperty(target, key) {
		return true;
	}
};
var mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
var readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
var shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
var toShallow = (value) => value;
var getProto = (v) => Reflect.getPrototypeOf(v);
function createIterableMethod(method, isReadonly2, isShallow2) {
	return function(...args) {
		const target = this["__v_raw"];
		const rawTarget = /* @__PURE__ */ toRaw(target);
		const targetIsMap = isMap(rawTarget);
		const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
		const isKeyOnly = method === "keys" && targetIsMap;
		const innerIterator = target[method](...args);
		const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
		!isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
		return extend(Object.create(innerIterator), { next() {
			const { value, done } = innerIterator.next();
			return done ? {
				value,
				done
			} : {
				value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
				done
			};
		} });
	};
}
function createReadonlyMethod(type) {
	return function(...args) {
		return type === "delete" ? false : type === "clear" ? void 0 : this;
	};
}
function createInstrumentations(readonly, shallow) {
	const instrumentations = {
		get(key) {
			const target = this["__v_raw"];
			const rawTarget = /* @__PURE__ */ toRaw(target);
			const rawKey = /* @__PURE__ */ toRaw(key);
			if (!readonly) {
				if (hasChanged(key, rawKey)) track(rawTarget, "get", key);
				track(rawTarget, "get", rawKey);
			}
			const { has } = getProto(rawTarget);
			const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive;
			if (has.call(rawTarget, key)) return wrap(target.get(key));
			else if (has.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
			else if (target !== rawTarget) target.get(key);
		},
		get size() {
			const target = this["__v_raw"];
			!readonly && track(/* @__PURE__ */ toRaw(target), "iterate", ITERATE_KEY);
			return target.size;
		},
		has(key) {
			const target = this["__v_raw"];
			const rawTarget = /* @__PURE__ */ toRaw(target);
			const rawKey = /* @__PURE__ */ toRaw(key);
			if (!readonly) {
				if (hasChanged(key, rawKey)) track(rawTarget, "has", key);
				track(rawTarget, "has", rawKey);
			}
			return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
		},
		forEach(callback, thisArg) {
			const observed = this;
			const target = observed["__v_raw"];
			const rawTarget = /* @__PURE__ */ toRaw(target);
			const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive;
			!readonly && track(rawTarget, "iterate", ITERATE_KEY);
			return target.forEach((value, key) => {
				return callback.call(thisArg, wrap(value), wrap(key), observed);
			});
		}
	};
	extend(instrumentations, readonly ? {
		add: createReadonlyMethod("add"),
		set: createReadonlyMethod("set"),
		delete: createReadonlyMethod("delete"),
		clear: createReadonlyMethod("clear")
	} : {
		add(value) {
			const target = /* @__PURE__ */ toRaw(this);
			const proto = getProto(target);
			const rawValue = /* @__PURE__ */ toRaw(value);
			const valueToAdd = !shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value) ? rawValue : value;
			if (!(proto.has.call(target, valueToAdd) || hasChanged(value, valueToAdd) && proto.has.call(target, value) || hasChanged(rawValue, valueToAdd) && proto.has.call(target, rawValue))) {
				target.add(valueToAdd);
				trigger(target, "add", valueToAdd, valueToAdd);
			}
			return this;
		},
		set(key, value) {
			if (!shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) value = /* @__PURE__ */ toRaw(value);
			const target = /* @__PURE__ */ toRaw(this);
			const { has, get } = getProto(target);
			let hadKey = has.call(target, key);
			if (!hadKey) {
				key = /* @__PURE__ */ toRaw(key);
				hadKey = has.call(target, key);
			}
			const oldValue = get.call(target, key);
			target.set(key, value);
			if (!hadKey) trigger(target, "add", key, value);
			else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
			return this;
		},
		delete(key) {
			const target = /* @__PURE__ */ toRaw(this);
			const { has, get } = getProto(target);
			let hadKey = has.call(target, key);
			if (!hadKey) {
				key = /* @__PURE__ */ toRaw(key);
				hadKey = has.call(target, key);
			}
			const oldValue = get ? get.call(target, key) : void 0;
			const result = target.delete(key);
			if (hadKey) trigger(target, "delete", key, void 0, oldValue);
			return result;
		},
		clear() {
			const target = /* @__PURE__ */ toRaw(this);
			const hadItems = target.size !== 0;
			const oldTarget = void 0;
			const result = target.clear();
			if (hadItems) trigger(target, "clear", void 0, void 0, oldTarget);
			return result;
		}
	});
	[
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((method) => {
		instrumentations[method] = createIterableMethod(method, readonly, shallow);
	});
	return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
	const instrumentations = createInstrumentations(isReadonly2, shallow);
	return (target, key, receiver) => {
		if (key === "__v_isReactive") return !isReadonly2;
		else if (key === "__v_isReadonly") return isReadonly2;
		else if (key === "__v_raw") return target;
		return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
	};
}
var mutableCollectionHandlers = { get: /* @__PURE__ */ createInstrumentationGetter(false, false) };
var shallowCollectionHandlers = { get: /* @__PURE__ */ createInstrumentationGetter(false, true) };
var readonlyCollectionHandlers = { get: /* @__PURE__ */ createInstrumentationGetter(true, false) };
var reactiveMap = /* @__PURE__ */ new WeakMap();
var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
var readonlyMap = /* @__PURE__ */ new WeakMap();
var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
	switch (rawType) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
function getTargetType(value) {
	return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
/* @__NO_SIDE_EFFECTS__ */
function reactive(target) {
	if (/* @__PURE__ */ isReadonly(target)) return target;
	return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/* @__NO_SIDE_EFFECTS__ */
function shallowReactive(target) {
	return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/* @__NO_SIDE_EFFECTS__ */
function readonly(target) {
	return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
	if (!isObject(target)) return target;
	if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) return target;
	const targetType = getTargetType(target);
	if (targetType === 0) return target;
	const existingProxy = proxyMap.get(target);
	if (existingProxy) return existingProxy;
	const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
	proxyMap.set(target, proxy);
	return proxy;
}
/* @__NO_SIDE_EFFECTS__ */
function isReactive(value) {
	if (/* @__PURE__ */ isReadonly(value)) return /* @__PURE__ */ isReactive(value["__v_raw"]);
	return !!(value && value["__v_isReactive"]);
}
/* @__NO_SIDE_EFFECTS__ */
function isReadonly(value) {
	return !!(value && value["__v_isReadonly"]);
}
/* @__NO_SIDE_EFFECTS__ */
function isShallow(value) {
	return !!(value && value["__v_isShallow"]);
}
/* @__NO_SIDE_EFFECTS__ */
function isProxy(value) {
	return value ? !!value["__v_raw"] : false;
}
/* @__NO_SIDE_EFFECTS__ */
function toRaw(observed) {
	const raw = observed && observed["__v_raw"];
	return raw ? /* @__PURE__ */ toRaw(raw) : observed;
}
function markRaw(value) {
	if (!hasOwn(value, "__v_skip") && Object.isExtensible(value)) def(value, "__v_skip", true);
	return value;
}
var toReactive = (value) => isObject(value) ? /* @__PURE__ */ reactive(value) : value;
var toReadonly = (value) => isObject(value) ? /* @__PURE__ */ readonly(value) : value;
/* @__NO_SIDE_EFFECTS__ */
function isRef(r) {
	return r ? r["__v_isRef"] === true : false;
}
/* @__NO_SIDE_EFFECTS__ */
function ref(value) {
	return createRef(value, false);
}
/* @__NO_SIDE_EFFECTS__ */
function shallowRef(value) {
	return createRef(value, true);
}
function createRef(rawValue, shallow) {
	if (/* @__PURE__ */ isRef(rawValue)) return rawValue;
	return new RefImpl(rawValue, shallow);
}
var RefImpl = class {
	constructor(value, isShallow2) {
		this.dep = new Dep();
		this["__v_isRef"] = true;
		this["__v_isShallow"] = false;
		this._rawValue = isShallow2 ? value : /* @__PURE__ */ toRaw(value);
		this._value = isShallow2 ? value : toReactive(value);
		this["__v_isShallow"] = isShallow2;
	}
	get value() {
		this.dep.track();
		return this._value;
	}
	set value(newValue) {
		const oldValue = this._rawValue;
		const useDirectValue = this["__v_isShallow"] || /* @__PURE__ */ isShallow(newValue) || /* @__PURE__ */ isReadonly(newValue);
		newValue = useDirectValue ? newValue : /* @__PURE__ */ toRaw(newValue);
		if (hasChanged(newValue, oldValue)) {
			this._rawValue = newValue;
			this._value = useDirectValue ? newValue : toReactive(newValue);
			this.dep.trigger();
		}
	}
};
function unref(ref2) {
	return /* @__PURE__ */ isRef(ref2) ? ref2.value : ref2;
}
function toValue(source) {
	return isFunction(source) ? source() : unref(source);
}
var shallowUnwrapHandlers = {
	get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
	set: (target, key, value, receiver) => {
		const oldValue = target[key];
		if (/* @__PURE__ */ isRef(oldValue) && !/* @__PURE__ */ isRef(value)) {
			oldValue.value = value;
			return true;
		} else return Reflect.set(target, key, value, receiver);
	}
};
function proxyRefs(objectWithRefs) {
	return /* @__PURE__ */ isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
var ObjectRefImpl = class {
	constructor(_object, key, _defaultValue) {
		this._object = _object;
		this._defaultValue = _defaultValue;
		this["__v_isRef"] = true;
		this._value = void 0;
		this._key = isSymbol(key) ? key : String(key);
		this._raw = /* @__PURE__ */ toRaw(_object);
		let shallow = true;
		let obj = _object;
		if (!isArray$1(_object) || isSymbol(this._key) || !isIntegerKey(this._key)) do
			shallow = !/* @__PURE__ */ isProxy(obj) || /* @__PURE__ */ isShallow(obj);
		while (shallow && (obj = obj["__v_raw"]));
		this._shallow = shallow;
	}
	get value() {
		let val = this._object[this._key];
		if (this._shallow) val = unref(val);
		return this._value = val === void 0 ? this._defaultValue : val;
	}
	set value(newVal) {
		if (this._shallow && /* @__PURE__ */ isRef(this._raw[this._key])) {
			const nestedRef = this._object[this._key];
			if (/* @__PURE__ */ isRef(nestedRef)) {
				nestedRef.value = newVal;
				return;
			}
		}
		this._object[this._key] = newVal;
	}
	get dep() {
		return getDepFromReactive(this._raw, this._key);
	}
};
var GetterRefImpl = class {
	constructor(_getter) {
		this._getter = _getter;
		this["__v_isRef"] = true;
		this["__v_isReadonly"] = true;
		this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
/* @__NO_SIDE_EFFECTS__ */
function toRef(source, key, defaultValue) {
	if (/* @__PURE__ */ isRef(source)) return source;
	else if (isFunction(source)) return new GetterRefImpl(source);
	else if (isObject(source) && arguments.length > 1) return propertyToRef(source, key, defaultValue);
	else return /* @__PURE__ */ ref(source);
}
function propertyToRef(source, key, defaultValue) {
	return new ObjectRefImpl(source, key, defaultValue);
}
var ComputedRefImpl = class {
	constructor(fn, setter, isSSR) {
		this.fn = fn;
		this.setter = setter;
		/**
		* @internal
		*/
		this._value = void 0;
		/**
		* @internal
		*/
		this.dep = new Dep(this);
		/**
		* @internal
		*/
		this.__v_isRef = true;
		/**
		* @internal
		*/
		this.deps = void 0;
		/**
		* @internal
		*/
		this.depsTail = void 0;
		/**
		* @internal
		*/
		this.flags = 16;
		/**
		* @internal
		*/
		this.globalVersion = globalVersion - 1;
		/**
		* @internal
		*/
		this.next = void 0;
		this.effect = this;
		this["__v_isReadonly"] = !setter;
		this.isSSR = isSSR;
	}
	/**
	* @internal
	*/
	notify() {
		this.flags |= 16;
		if (!(this.flags & 8) && activeSub !== this) {
			batch(this, true);
			return true;
		}
	}
	get value() {
		const link = this.dep.track();
		refreshComputed(this);
		if (link) link.version = this.dep.version;
		return this._value;
	}
	set value(newValue) {
		if (this.setter) this.setter(newValue);
	}
};
/* @__NO_SIDE_EFFECTS__ */
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
	let getter;
	let setter;
	if (isFunction(getterOrOptions)) getter = getterOrOptions;
	else {
		getter = getterOrOptions.get;
		setter = getterOrOptions.set;
	}
	return new ComputedRefImpl(getter, setter, isSSR);
}
var INITIAL_WATCHER_VALUE = {};
var cleanupMap = /* @__PURE__ */ new WeakMap();
var activeWatcher = void 0;
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
	if (owner) {
		let cleanups = cleanupMap.get(owner);
		if (!cleanups) cleanupMap.set(owner, cleanups = []);
		cleanups.push(cleanupFn);
	}
}
function watch$1(source, cb, options = EMPTY_OBJ) {
	const { immediate, deep, once, scheduler, augmentJob, call } = options;
	const reactiveGetter = (source2) => {
		if (deep) return source2;
		if (/* @__PURE__ */ isShallow(source2) || deep === false || deep === 0) return traverse(source2, 1);
		return traverse(source2);
	};
	let effect;
	let getter;
	let cleanup;
	let boundCleanup;
	let forceTrigger = false;
	let isMultiSource = false;
	if (/* @__PURE__ */ isRef(source)) {
		getter = () => source.value;
		forceTrigger = /* @__PURE__ */ isShallow(source);
	} else if (/* @__PURE__ */ isReactive(source)) {
		getter = () => reactiveGetter(source);
		forceTrigger = true;
	} else if (isArray$1(source)) {
		isMultiSource = true;
		forceTrigger = source.some((s) => /* @__PURE__ */ isReactive(s) || /* @__PURE__ */ isShallow(s));
		getter = () => source.map((s) => {
			if (/* @__PURE__ */ isRef(s)) return s.value;
			else if (/* @__PURE__ */ isReactive(s)) return reactiveGetter(s);
			else if (isFunction(s)) return call ? call(s, 2) : s();
		});
	} else if (isFunction(source)) if (cb) getter = call ? () => call(source, 2) : source;
	else getter = () => {
		if (cleanup) {
			pauseTracking();
			try {
				cleanup();
			} finally {
				resetTracking();
			}
		}
		const currentEffect = activeWatcher;
		activeWatcher = effect;
		try {
			return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
		} finally {
			activeWatcher = currentEffect;
		}
	};
	else getter = NOOP;
	if (cb && deep) {
		const baseGetter = getter;
		const depth = deep === true ? Infinity : deep;
		getter = () => traverse(baseGetter(), depth);
	}
	const scope = getCurrentScope();
	const watchHandle = () => {
		effect.stop();
		if (scope && scope.active) remove(scope.effects, effect);
	};
	if (once && cb) {
		const _cb = cb;
		cb = (...args) => {
			_cb(...args);
			watchHandle();
		};
	}
	let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
	const job = (immediateFirstRun) => {
		if (!(effect.flags & 1) || !effect.dirty && !immediateFirstRun) return;
		if (cb) {
			const newValue = effect.run();
			if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue))) {
				if (cleanup) cleanup();
				const currentWatcher = activeWatcher;
				activeWatcher = effect;
				try {
					const args = [
						newValue,
						oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
						boundCleanup
					];
					oldValue = newValue;
					call ? call(cb, 3, args) : cb(...args);
				} finally {
					activeWatcher = currentWatcher;
				}
			}
		} else effect.run();
	};
	if (augmentJob) augmentJob(job);
	effect = new ReactiveEffect(getter);
	effect.scheduler = scheduler ? () => scheduler(job, false) : job;
	boundCleanup = (fn) => onWatcherCleanup(fn, false, effect);
	cleanup = effect.onStop = () => {
		const cleanups = cleanupMap.get(effect);
		if (cleanups) {
			if (call) call(cleanups, 4);
			else for (const cleanup2 of cleanups) cleanup2();
			cleanupMap.delete(effect);
		}
	};
	if (cb) if (immediate) job(true);
	else oldValue = effect.run();
	else if (scheduler) scheduler(job.bind(null, true), true);
	else effect.run();
	watchHandle.pause = effect.pause.bind(effect);
	watchHandle.resume = effect.resume.bind(effect);
	watchHandle.stop = watchHandle;
	return watchHandle;
}
function traverse(value, depth = Infinity, seen) {
	if (depth <= 0 || !isObject(value) || value["__v_skip"]) return value;
	seen = seen || /* @__PURE__ */ new Map();
	if ((seen.get(value) || 0) >= depth) return value;
	seen.set(value, depth);
	depth--;
	if (/* @__PURE__ */ isRef(value)) traverse(value.value, depth, seen);
	else if (isArray$1(value)) for (let i = 0; i < value.length; i++) traverse(value[i], depth, seen);
	else if (isSet$1(value) || isMap(value)) value.forEach((v) => {
		traverse(v, depth, seen);
	});
	else if (isPlainObject(value)) {
		for (const key in value) traverse(value[key], depth, seen);
		for (const key of Object.getOwnPropertySymbols(value)) if (Object.prototype.propertyIsEnumerable.call(value, key)) traverse(value[key], depth, seen);
	}
	return value;
}
//#endregion
//#region ../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function callWithErrorHandling(fn, instance, type, args) {
	try {
		return args ? fn(...args) : fn();
	} catch (err) {
		handleError(err, instance, type);
	}
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
	if (isFunction(fn)) {
		const res = callWithErrorHandling(fn, instance, type, args);
		if (res && isPromise(res)) res.catch((err) => {
			handleError(err, instance, type);
		});
		return res;
	}
	if (isArray$1(fn)) {
		const values = [];
		for (let i = 0; i < fn.length; i++) values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
		return values;
	}
}
function handleError(err, instance, type, throwInDev = true) {
	const contextVNode = instance ? instance.vnode : null;
	const { errorHandler, throwUnhandledErrorInProduction } = instance && instance.appContext.config || EMPTY_OBJ;
	if (instance) {
		let cur = instance.parent;
		const exposedInstance = instance.proxy;
		const errorInfo = `https://vuejs.org/error-reference/#runtime-${type}`;
		while (cur) {
			const errorCapturedHooks = cur.ec;
			if (errorCapturedHooks) {
				for (let i = 0; i < errorCapturedHooks.length; i++) if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) return;
			}
			cur = cur.parent;
		}
		if (errorHandler) {
			pauseTracking();
			callWithErrorHandling(errorHandler, null, 10, [
				err,
				exposedInstance,
				errorInfo
			]);
			resetTracking();
			return;
		}
	}
	logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
}
function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
	if (throwInProd) throw err;
	else console.error(err);
}
var queue = [];
var flushIndex = -1;
var pendingPostFlushCbs = [];
var activePostFlushCbs = null;
var postFlushIndex = 0;
var resolvedPromise = /* @__PURE__ */ Promise.resolve();
var currentFlushPromise = null;
function nextTick(fn) {
	const p = currentFlushPromise || resolvedPromise;
	return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
function findInsertionIndex$1(id) {
	let start = flushIndex + 1;
	let end = queue.length;
	while (start < end) {
		const middle = start + end >>> 1;
		const middleJob = queue[middle];
		const middleJobId = getId(middleJob);
		if (middleJobId < id || middleJobId === id && middleJob.flags & 2) start = middle + 1;
		else end = middle;
	}
	return start;
}
function queueJob(job) {
	if (!(job.flags & 1)) {
		const jobId = getId(job);
		const lastJob = queue[queue.length - 1];
		if (!lastJob || !(job.flags & 2) && jobId >= getId(lastJob)) queue.push(job);
		else queue.splice(findInsertionIndex$1(jobId), 0, job);
		job.flags |= 1;
		queueFlush();
	}
}
function queueFlush() {
	if (!currentFlushPromise) currentFlushPromise = resolvedPromise.then(flushJobs);
}
function queuePostFlushCb(cb) {
	if (!isArray$1(cb)) {
		if (activePostFlushCbs && cb.id === -1) activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
		else if (!(cb.flags & 1)) {
			pendingPostFlushCbs.push(cb);
			cb.flags |= 1;
		}
	} else pendingPostFlushCbs.push(...cb);
	queueFlush();
}
function flushPreFlushCbs(instance, seen, i = flushIndex + 1) {
	for (; i < queue.length; i++) {
		const cb = queue[i];
		if (cb && cb.flags & 2) {
			if (instance && cb.id !== instance.uid) continue;
			queue.splice(i, 1);
			i--;
			if (cb.flags & 4) cb.flags &= -2;
			cb();
			if (!(cb.flags & 4)) cb.flags &= -2;
		}
	}
}
function flushPostFlushCbs(seen) {
	if (pendingPostFlushCbs.length) {
		const deduped = [...new Set(pendingPostFlushCbs)].sort((a, b) => getId(a) - getId(b));
		pendingPostFlushCbs.length = 0;
		if (activePostFlushCbs) {
			activePostFlushCbs.push(...deduped);
			return;
		}
		activePostFlushCbs = deduped;
		for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
			const cb = activePostFlushCbs[postFlushIndex];
			if (cb.flags & 4) cb.flags &= -2;
			if (!(cb.flags & 8)) cb();
			cb.flags &= -2;
		}
		activePostFlushCbs = null;
		postFlushIndex = 0;
	}
}
var getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
function flushJobs(seen) {
	try {
		for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
			const job = queue[flushIndex];
			if (job && !(job.flags & 8)) {
				if (job.flags & 4) job.flags &= -2;
				callWithErrorHandling(job, job.i, job.i ? 15 : 14);
				if (!(job.flags & 4)) job.flags &= -2;
			}
		}
	} finally {
		for (; flushIndex < queue.length; flushIndex++) {
			const job = queue[flushIndex];
			if (job) job.flags &= -2;
		}
		flushIndex = -1;
		queue.length = 0;
		flushPostFlushCbs(seen);
		currentFlushPromise = null;
		if (queue.length || pendingPostFlushCbs.length) flushJobs(seen);
	}
}
var currentRenderingInstance = null;
var currentScopeId = null;
function setCurrentRenderingInstance(instance) {
	const prev = currentRenderingInstance;
	currentRenderingInstance = instance;
	currentScopeId = instance && instance.type.__scopeId || null;
	return prev;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
	if (!ctx) return fn;
	if (fn._n) return fn;
	const renderFnWithContext = (...args) => {
		if (renderFnWithContext._d) setBlockTracking(-1);
		const prevInstance = setCurrentRenderingInstance(ctx);
		let res;
		try {
			res = fn(...args);
		} finally {
			setCurrentRenderingInstance(prevInstance);
			if (renderFnWithContext._d) setBlockTracking(1);
		}
		return res;
	};
	renderFnWithContext._n = true;
	renderFnWithContext._c = true;
	renderFnWithContext._d = true;
	return renderFnWithContext;
}
function withDirectives(vnode, directives) {
	if (currentRenderingInstance === null) return vnode;
	const instance = getComponentPublicInstance(currentRenderingInstance);
	const bindings = vnode.dirs || (vnode.dirs = []);
	for (let i = 0; i < directives.length; i++) {
		let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
		if (dir) {
			if (isFunction(dir)) dir = {
				mounted: dir,
				updated: dir
			};
			if (dir.deep) traverse(value);
			bindings.push({
				dir,
				instance,
				value,
				oldValue: void 0,
				arg,
				modifiers
			});
		}
	}
	return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
	const bindings = vnode.dirs;
	const oldBindings = prevVNode && prevVNode.dirs;
	for (let i = 0; i < bindings.length; i++) {
		const binding = bindings[i];
		if (oldBindings) binding.oldValue = oldBindings[i].value;
		let hook = binding.dir[name];
		if (hook) {
			pauseTracking();
			callWithAsyncErrorHandling(hook, instance, 8, [
				vnode.el,
				binding,
				vnode,
				prevVNode
			]);
			resetTracking();
		}
	}
}
function provide(key, value) {
	if (currentInstance) {
		let provides = currentInstance.provides;
		const parentProvides = currentInstance.parent && currentInstance.parent.provides;
		if (parentProvides === provides) provides = currentInstance.provides = Object.create(parentProvides);
		provides[key] = value;
	}
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
	const instance = getCurrentInstance();
	if (instance || currentApp) {
		let provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null || instance.ce ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
		if (provides && key in provides) return provides[key];
		else if (arguments.length > 1) return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
	}
}
var ssrContextKey = /* @__PURE__ */ Symbol.for("v-scx");
var useSSRContext = () => {
	{
		const ctx = inject(ssrContextKey);
		if (!ctx) {}
		return ctx;
	}
};
function watchEffect(effect, options) {
	return doWatch(effect, null, options);
}
function watch(source, cb, options) {
	return doWatch(source, cb, options);
}
function doWatch(source, cb, options = EMPTY_OBJ) {
	const { immediate, deep, flush, once } = options;
	const baseWatchOptions = extend({}, options);
	const runsImmediately = cb && immediate || !cb && flush !== "post";
	let ssrCleanup;
	if (isInSSRComponentSetup) {
		if (flush === "sync") {
			const ctx = useSSRContext();
			ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
		} else if (!runsImmediately) {
			const watchStopHandle = () => {};
			watchStopHandle.stop = NOOP;
			watchStopHandle.resume = NOOP;
			watchStopHandle.pause = NOOP;
			return watchStopHandle;
		}
	}
	const instance = currentInstance;
	baseWatchOptions.call = (fn, type, args) => callWithAsyncErrorHandling(fn, instance, type, args);
	let isPre = false;
	if (flush === "post") baseWatchOptions.scheduler = (job) => {
		queuePostRenderEffect(job, instance && instance.suspense);
	};
	else if (flush !== "sync") {
		isPre = true;
		baseWatchOptions.scheduler = (job, isFirstRun) => {
			if (isFirstRun) job();
			else queueJob(job);
		};
	}
	baseWatchOptions.augmentJob = (job) => {
		if (cb) job.flags |= 4;
		if (isPre) {
			job.flags |= 2;
			if (instance) {
				job.id = instance.uid;
				job.i = instance;
			}
		}
	};
	const watchHandle = watch$1(source, cb, baseWatchOptions);
	if (isInSSRComponentSetup) {
		if (ssrCleanup) ssrCleanup.push(watchHandle);
		else if (runsImmediately) watchHandle();
	}
	return watchHandle;
}
function instanceWatch(source, value, options) {
	const publicThis = this.proxy;
	const getter = isString$1(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
	let cb;
	if (isFunction(value)) cb = value;
	else {
		cb = value.handler;
		options = value;
	}
	const reset = setCurrentInstance(this);
	const res = doWatch(getter, cb.bind(publicThis), options);
	reset();
	return res;
}
function createPathGetter(ctx, path) {
	const segments = path.split(".");
	return () => {
		let cur = ctx;
		for (let i = 0; i < segments.length && cur; i++) cur = cur[segments[i]];
		return cur;
	};
}
var pendingMounts = /* @__PURE__ */ new WeakMap();
var TeleportEndKey = /* @__PURE__ */ Symbol("_vte");
var isTeleport = (type) => type.__isTeleport;
var isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
var isTeleportDeferred = (props) => props && (props.defer || props.defer === "");
var isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
var isTargetMathML = (target) => typeof MathMLElement === "function" && target instanceof MathMLElement;
var resolveTarget = (props, select) => {
	const targetSelector = props && props.to;
	if (isString$1(targetSelector)) if (!select) return null;
	else return select(targetSelector);
	else return targetSelector;
};
var TeleportImpl = {
	name: "Teleport",
	__isTeleport: true,
	process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
		const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
		const disabled = isTeleportDisabled(n2.props);
		let { dynamicChildren } = n2;
		const mount = (vnode, container2, anchor2) => {
			if (vnode.shapeFlag & 16) mountChildren(vnode.children, container2, anchor2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		};
		const mountToTarget = (vnode = n2) => {
			const disabled2 = isTeleportDisabled(vnode.props);
			const target = vnode.target = resolveTarget(vnode.props, querySelector);
			const targetAnchor = prepareAnchor(target, vnode, createText, insert);
			if (target) {
				if (namespace !== "svg" && isTargetSVG(target)) namespace = "svg";
				else if (namespace !== "mathml" && isTargetMathML(target)) namespace = "mathml";
				if (parentComponent && parentComponent.isCE) (parentComponent.ce._teleportTargets || (parentComponent.ce._teleportTargets = /* @__PURE__ */ new Set())).add(target);
				if (!disabled2) {
					mount(vnode, target, targetAnchor);
					updateCssVars(vnode, false);
				}
			}
		};
		const queuePendingMount = (vnode) => {
			const mountJob = () => {
				if (pendingMounts.get(vnode) !== mountJob) return;
				pendingMounts.delete(vnode);
				if (isTeleportDisabled(vnode.props)) {
					mount(vnode, container, vnode.anchor);
					updateCssVars(vnode, true);
				}
				mountToTarget(vnode);
			};
			pendingMounts.set(vnode, mountJob);
			queuePostRenderEffect(mountJob, parentSuspense);
		};
		if (n1 == null) {
			const placeholder = n2.el = createText("");
			const mainAnchor = n2.anchor = createText("");
			insert(placeholder, container, anchor);
			insert(mainAnchor, container, anchor);
			if (isTeleportDeferred(n2.props) || parentSuspense && parentSuspense.pendingBranch) {
				queuePendingMount(n2);
				return;
			}
			if (disabled) {
				mount(n2, container, mainAnchor);
				updateCssVars(n2, true);
			}
			mountToTarget();
		} else {
			n2.el = n1.el;
			const mainAnchor = n2.anchor = n1.anchor;
			const pendingMount = pendingMounts.get(n1);
			if (pendingMount) {
				pendingMount.flags |= 8;
				pendingMounts.delete(n1);
				queuePendingMount(n2);
				return;
			}
			n2.targetStart = n1.targetStart;
			const target = n2.target = n1.target;
			const targetAnchor = n2.targetAnchor = n1.targetAnchor;
			const wasDisabled = isTeleportDisabled(n1.props);
			const currentContainer = wasDisabled ? container : target;
			const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
			if (namespace === "svg" || isTargetSVG(target)) namespace = "svg";
			else if (namespace === "mathml" || isTargetMathML(target)) namespace = "mathml";
			if (dynamicChildren) {
				patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, namespace, slotScopeIds);
				traverseStaticChildren(n1, n2, true);
			} else if (!optimized) patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, false);
			if (disabled) {
				if (!wasDisabled) moveTeleport(n2, container, mainAnchor, internals, 1);
				else if (n2.props && n1.props && n2.props.to !== n1.props.to) n2.props.to = n1.props.to;
			} else if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
				const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
				if (nextTarget) moveTeleport(n2, nextTarget, null, internals, 0);
			} else if (wasDisabled) moveTeleport(n2, target, targetAnchor, internals, 1);
			updateCssVars(n2, disabled);
		}
	},
	remove(vnode, parentComponent, parentSuspense, { um: unmount, o: { remove: hostRemove } }, doRemove) {
		const { shapeFlag, children, anchor, targetStart, targetAnchor, target, props } = vnode;
		let shouldRemove = doRemove || !isTeleportDisabled(props);
		const pendingMount = pendingMounts.get(vnode);
		if (pendingMount) {
			pendingMount.flags |= 8;
			pendingMounts.delete(vnode);
			shouldRemove = false;
		}
		if (target) {
			hostRemove(targetStart);
			hostRemove(targetAnchor);
		}
		doRemove && hostRemove(anchor);
		if (shapeFlag & 16) for (let i = 0; i < children.length; i++) {
			const child = children[i];
			unmount(child, parentComponent, parentSuspense, shouldRemove, !!child.dynamicChildren);
		}
	},
	move: moveTeleport,
	hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
	if (moveType === 0) insert(vnode.targetAnchor, container, parentAnchor);
	const { el, anchor, shapeFlag, children, props } = vnode;
	const isReorder = moveType === 2;
	if (isReorder) insert(el, container, parentAnchor);
	if (!isReorder || isTeleportDisabled(props)) {
		if (shapeFlag & 16) for (let i = 0; i < children.length; i++) move(children[i], container, parentAnchor, 2);
	}
	if (isReorder) insert(anchor, container, parentAnchor);
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector, insert, createText } }, hydrateChildren) {
	function hydrateAnchor(target2, targetNode) {
		let targetAnchor = targetNode;
		while (targetAnchor) {
			if (targetAnchor && targetAnchor.nodeType === 8) {
				if (targetAnchor.data === "teleport start anchor") vnode.targetStart = targetAnchor;
				else if (targetAnchor.data === "teleport anchor") {
					vnode.targetAnchor = targetAnchor;
					target2._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
					break;
				}
			}
			targetAnchor = nextSibling(targetAnchor);
		}
	}
	function hydrateDisabledTeleport(node2, vnode2) {
		vnode2.anchor = hydrateChildren(nextSibling(node2), vnode2, parentNode(node2), parentComponent, parentSuspense, slotScopeIds, optimized);
	}
	const target = vnode.target = resolveTarget(vnode.props, querySelector);
	const disabled = isTeleportDisabled(vnode.props);
	if (target) {
		const targetNode = target._lpa || target.firstChild;
		if (vnode.shapeFlag & 16) if (disabled) {
			hydrateDisabledTeleport(node, vnode);
			hydrateAnchor(target, targetNode);
			if (!vnode.targetAnchor) prepareAnchor(target, vnode, createText, insert, parentNode(node) === target ? node : null);
		} else {
			vnode.anchor = nextSibling(node);
			hydrateAnchor(target, targetNode);
			if (!vnode.targetAnchor) prepareAnchor(target, vnode, createText, insert);
			hydrateChildren(targetNode && nextSibling(targetNode), vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
		}
		updateCssVars(vnode, disabled);
	} else if (disabled) {
		if (vnode.shapeFlag & 16) {
			hydrateDisabledTeleport(node, vnode);
			vnode.targetStart = node;
			vnode.targetAnchor = nextSibling(node);
		}
	}
	return vnode.anchor && nextSibling(vnode.anchor);
}
var Teleport = TeleportImpl;
function updateCssVars(vnode, isDisabled) {
	const ctx = vnode.ctx;
	if (ctx && ctx.ut) {
		let node, anchor;
		if (isDisabled) {
			node = vnode.el;
			anchor = vnode.anchor;
		} else {
			node = vnode.targetStart;
			anchor = vnode.targetAnchor;
		}
		while (node && node !== anchor) {
			if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
			node = node.nextSibling;
		}
		ctx.ut();
	}
}
function prepareAnchor(target, vnode, createText, insert, anchor = null) {
	const targetStart = vnode.targetStart = createText("");
	const targetAnchor = vnode.targetAnchor = createText("");
	targetStart[TeleportEndKey] = targetAnchor;
	if (target) {
		insert(targetStart, target, anchor);
		insert(targetAnchor, target, anchor);
	}
	return targetAnchor;
}
var leaveCbKey = /* @__PURE__ */ Symbol("_leaveCb");
var enterCbKey = /* @__PURE__ */ Symbol("_enterCb");
var recursiveGetSubtree = (instance) => {
	const subTree = instance.subTree;
	return subTree.component ? recursiveGetSubtree(subTree.component) : subTree;
};
function getLeavingNodesForType(state, vnode) {
	const { leavingVNodes } = state;
	let leavingVNodesCache = leavingVNodes.get(vnode.type);
	if (!leavingVNodesCache) {
		leavingVNodesCache = /* @__PURE__ */ Object.create(null);
		leavingVNodes.set(vnode.type, leavingVNodesCache);
	}
	return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance, postClone) {
	const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
	const key = String(vnode.key);
	const leavingVNodesCache = getLeavingNodesForType(state, vnode);
	const callHook = (hook, args) => {
		hook && callWithAsyncErrorHandling(hook, instance, 9, args);
	};
	const callAsyncHook = (hook, args) => {
		const done = args[1];
		callHook(hook, args);
		if (isArray$1(hook)) {
			if (hook.every((hook2) => hook2.length <= 1)) done();
		} else if (hook.length <= 1) done();
	};
	const hooks = {
		mode,
		persisted,
		beforeEnter(el) {
			let hook = onBeforeEnter;
			if (!state.isMounted) if (appear) hook = onBeforeAppear || onBeforeEnter;
			else return;
			if (el[leaveCbKey]) el[leaveCbKey](true);
			const leavingVNode = leavingVNodesCache[key];
			if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) leavingVNode.el[leaveCbKey]();
			callHook(hook, [el]);
		},
		enter(el) {
			if (leavingVNodesCache[key] === vnode) return;
			let hook = onEnter;
			let afterHook = onAfterEnter;
			let cancelHook = onEnterCancelled;
			if (!state.isMounted) if (appear) {
				hook = onAppear || onEnter;
				afterHook = onAfterAppear || onAfterEnter;
				cancelHook = onAppearCancelled || onEnterCancelled;
			} else return;
			let called = false;
			el[enterCbKey] = (cancelled) => {
				if (called) return;
				called = true;
				if (cancelled) callHook(cancelHook, [el]);
				else callHook(afterHook, [el]);
				if (hooks.delayedLeave) hooks.delayedLeave();
				el[enterCbKey] = void 0;
			};
			const done = el[enterCbKey].bind(null, false);
			if (hook) callAsyncHook(hook, [el, done]);
			else done();
		},
		leave(el, remove) {
			const key2 = String(vnode.key);
			if (el[enterCbKey]) el[enterCbKey](true);
			if (state.isUnmounting) return remove();
			callHook(onBeforeLeave, [el]);
			let called = false;
			el[leaveCbKey] = (cancelled) => {
				if (called) return;
				called = true;
				remove();
				if (cancelled) callHook(onLeaveCancelled, [el]);
				else callHook(onAfterLeave, [el]);
				el[leaveCbKey] = void 0;
				if (leavingVNodesCache[key2] === vnode) delete leavingVNodesCache[key2];
			};
			const done = el[leaveCbKey].bind(null, false);
			leavingVNodesCache[key2] = vnode;
			if (onLeave) callAsyncHook(onLeave, [el, done]);
			else done();
		},
		clone(vnode2) {
			const hooks2 = resolveTransitionHooks(vnode2, props, state, instance, postClone);
			if (postClone) postClone(hooks2);
			return hooks2;
		}
	};
	return hooks;
}
function setTransitionHooks(vnode, hooks) {
	if (vnode.shapeFlag & 6 && vnode.component) {
		vnode.transition = hooks;
		setTransitionHooks(vnode.component.subTree, hooks);
	} else if (vnode.shapeFlag & 128) {
		vnode.ssContent.transition = hooks.clone(vnode.ssContent);
		vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
	} else vnode.transition = hooks;
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
	let ret = [];
	let keyedFragmentCount = 0;
	for (let i = 0; i < children.length; i++) {
		let child = children[i];
		const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
		if (child.type === Fragment) {
			if (child.patchFlag & 128) keyedFragmentCount++;
			ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
		} else if (keepComment || child.type !== Comment) ret.push(key != null ? cloneVNode(child, { key }) : child);
	}
	if (keyedFragmentCount > 1) for (let i = 0; i < ret.length; i++) ret[i].patchFlag = -2;
	return ret;
}
/* @__NO_SIDE_EFFECTS__ */
function defineComponent(options, extraOptions) {
	return isFunction(options) ? extend({ name: options.name }, extraOptions, { setup: options }) : options;
}
function markAsyncBoundary(instance) {
	instance.ids = [
		instance.ids[0] + instance.ids[2]++ + "-",
		0,
		0
	];
}
function useTemplateRef(key) {
	const i = getCurrentInstance();
	const r = /* @__PURE__ */ shallowRef(null);
	if (i) {
		const refs = i.refs === EMPTY_OBJ ? i.refs = {} : i.refs;
		Object.defineProperty(refs, key, {
			enumerable: true,
			get: () => r.value,
			set: (val) => r.value = val
		});
	}
	return r;
}
function isTemplateRefKey(refs, key) {
	let desc;
	return !!((desc = Object.getOwnPropertyDescriptor(refs, key)) && !desc.configurable);
}
var pendingSetRefMap = /* @__PURE__ */ new WeakMap();
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
	if (isArray$1(rawRef)) {
		rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray$1(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
		return;
	}
	if (isAsyncWrapper(vnode) && !isUnmount) {
		if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
		return;
	}
	const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
	const value = isUnmount ? null : refValue;
	const { i: owner, r: ref } = rawRef;
	const oldRef = oldRawRef && oldRawRef.r;
	const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
	const setupState = owner.setupState;
	const rawSetupState = /* @__PURE__ */ toRaw(setupState);
	const canSetSetupRef = setupState === EMPTY_OBJ ? NO : (key) => {
		if (isTemplateRefKey(refs, key)) return false;
		return hasOwn(rawSetupState, key);
	};
	const canSetRef = (ref2, key) => {
		if (key && isTemplateRefKey(refs, key)) return false;
		return true;
	};
	if (oldRef != null && oldRef !== ref) {
		invalidatePendingSetRef(oldRawRef);
		if (isString$1(oldRef)) {
			refs[oldRef] = null;
			if (canSetSetupRef(oldRef)) setupState[oldRef] = null;
		} else if (/* @__PURE__ */ isRef(oldRef)) {
			const oldRawRefAtom = oldRawRef;
			if (canSetRef(oldRef, oldRawRefAtom.k)) oldRef.value = null;
			if (oldRawRefAtom.k) refs[oldRawRefAtom.k] = null;
		}
	}
	if (isFunction(ref)) callWithErrorHandling(ref, owner, 12, [value, refs]);
	else {
		const _isString = isString$1(ref);
		const _isRef = /* @__PURE__ */ isRef(ref);
		if (_isString || _isRef) {
			const doSet = () => {
				if (rawRef.f) {
					const existing = _isString ? canSetSetupRef(ref) ? setupState[ref] : refs[ref] : canSetRef(ref) || !rawRef.k ? ref.value : refs[rawRef.k];
					if (isUnmount) isArray$1(existing) && remove(existing, refValue);
					else if (!isArray$1(existing)) if (_isString) {
						refs[ref] = [refValue];
						if (canSetSetupRef(ref)) setupState[ref] = refs[ref];
					} else {
						const newVal = [refValue];
						if (canSetRef(ref, rawRef.k)) ref.value = newVal;
						if (rawRef.k) refs[rawRef.k] = newVal;
					}
					else if (!existing.includes(refValue)) existing.push(refValue);
				} else if (_isString) {
					refs[ref] = value;
					if (canSetSetupRef(ref)) setupState[ref] = value;
				} else if (_isRef) {
					if (canSetRef(ref, rawRef.k)) ref.value = value;
					if (rawRef.k) refs[rawRef.k] = value;
				}
			};
			if (value) {
				const job = () => {
					doSet();
					pendingSetRefMap.delete(rawRef);
				};
				job.id = -1;
				pendingSetRefMap.set(rawRef, job);
				queuePostRenderEffect(job, parentSuspense);
			} else {
				invalidatePendingSetRef(rawRef);
				doSet();
			}
		}
	}
}
function invalidatePendingSetRef(rawRef) {
	const pendingSetRef = pendingSetRefMap.get(rawRef);
	if (pendingSetRef) {
		pendingSetRef.flags |= 8;
		pendingSetRefMap.delete(rawRef);
	}
}
getGlobalThis().requestIdleCallback;
getGlobalThis().cancelIdleCallback;
var isAsyncWrapper = (i) => !!i.type.__asyncLoader;
var isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
	registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
	registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
	const wrappedHook = hook.__wdc || (hook.__wdc = () => {
		let current = target;
		while (current) {
			if (current.isDeactivated) return;
			current = current.parent;
		}
		return hook();
	});
	injectHook(type, wrappedHook, target);
	if (target) {
		let current = target.parent;
		while (current && current.parent) {
			if (isKeepAlive(current.parent.vnode)) injectToKeepAliveRoot(wrappedHook, type, target, current);
			current = current.parent;
		}
	}
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
	const injected = injectHook(type, hook, keepAliveRoot, true);
	onUnmounted(() => {
		remove(keepAliveRoot[type], injected);
	}, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
	if (target) {
		const hooks = target[type] || (target[type] = []);
		const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
			pauseTracking();
			const reset = setCurrentInstance(target);
			const res = callWithAsyncErrorHandling(hook, target, type, args);
			reset();
			resetTracking();
			return res;
		});
		if (prepend) hooks.unshift(wrappedHook);
		else hooks.push(wrappedHook);
		return wrappedHook;
	}
}
var createHook = (lifecycle) => (hook, target = currentInstance) => {
	if (!isInSSRComponentSetup || lifecycle === "sp") injectHook(lifecycle, (...args) => hook(...args), target);
};
var onBeforeMount = createHook("bm");
var onMounted = createHook("m");
var onBeforeUpdate = createHook("bu");
var onUpdated = createHook("u");
var onBeforeUnmount = createHook("bum");
var onUnmounted = createHook("um");
var onServerPrefetch = createHook("sp");
var onRenderTriggered = createHook("rtg");
var onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
	injectHook("ec", hook, target);
}
var COMPONENTS = "components";
var DIRECTIVES = "directives";
function resolveComponent(name, maybeSelfReference) {
	return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
var NULL_DYNAMIC_COMPONENT = /* @__PURE__ */ Symbol.for("v-ndc");
function resolveDirective(name) {
	return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
	const instance = currentRenderingInstance || currentInstance;
	if (instance) {
		const Component = instance.type;
		if (type === COMPONENTS) {
			const selfName = getComponentName$1(Component, false);
			if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) return Component;
		}
		const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
		if (!res && maybeSelfReference) return Component;
		return res;
	}
}
function resolve(registry, name) {
	return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
function renderList(source, renderItem, cache, index) {
	let ret;
	const cached = cache && cache[index];
	const sourceIsArray = isArray$1(source);
	if (sourceIsArray || isString$1(source)) {
		const sourceIsReactiveArray = sourceIsArray && /* @__PURE__ */ isReactive(source);
		let needsWrap = false;
		let isReadonlySource = false;
		if (sourceIsReactiveArray) {
			needsWrap = !/* @__PURE__ */ isShallow(source);
			isReadonlySource = /* @__PURE__ */ isReadonly(source);
			source = shallowReadArray(source);
		}
		ret = new Array(source.length);
		for (let i = 0, l = source.length; i < l; i++) ret[i] = renderItem(needsWrap ? isReadonlySource ? toReadonly(toReactive(source[i])) : toReactive(source[i]) : source[i], i, void 0, cached && cached[i]);
	} else if (typeof source === "number") {
		ret = new Array(source);
		for (let i = 0; i < source; i++) ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
	} else if (isObject(source)) if (source[Symbol.iterator]) ret = Array.from(source, (item, i) => renderItem(item, i, void 0, cached && cached[i]));
	else {
		const keys = Object.keys(source);
		ret = new Array(keys.length);
		for (let i = 0, l = keys.length; i < l; i++) {
			const key = keys[i];
			ret[i] = renderItem(source[key], key, i, cached && cached[i]);
		}
	}
	else ret = [];
	if (cache) cache[index] = ret;
	return ret;
}
function createSlots(slots, dynamicSlots) {
	for (let i = 0; i < dynamicSlots.length; i++) {
		const slot = dynamicSlots[i];
		if (isArray$1(slot)) for (let j = 0; j < slot.length; j++) slots[slot[j].name] = slot[j].fn;
		else if (slot) slots[slot.name] = slot.key ? (...args) => {
			const res = slot.fn(...args);
			if (res) res.key = slot.key;
			return res;
		} : slot.fn;
	}
	return slots;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
	if (currentRenderingInstance.ce || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.ce) {
		const hasProps = Object.keys(props).length > 0;
		if (name !== "default") props.name = name;
		return openBlock(), createBlock(Fragment, null, [createVNode("slot", props, fallback && fallback())], hasProps ? -2 : 64);
	}
	let slot = slots[name];
	if (slot && slot._c) slot._d = false;
	openBlock();
	const validSlotContent = slot && ensureValidVNode(slot(props));
	const slotKey = props.key || validSlotContent && validSlotContent.key;
	const rendered = createBlock(Fragment, { key: (slotKey && !isSymbol(slotKey) ? slotKey : `_${name}`) + (!validSlotContent && fallback ? "_fb" : "") }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
	if (!noSlotted && rendered.scopeId) rendered.slotScopeIds = [rendered.scopeId + "-s"];
	if (slot && slot._c) slot._d = true;
	return rendered;
}
function ensureValidVNode(vnodes) {
	return vnodes.some((child) => {
		if (!isVNode(child)) return true;
		if (child.type === Comment) return false;
		if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
		return true;
	}) ? vnodes : null;
}
var getPublicInstance = (i) => {
	if (!i) return null;
	if (isStatefulComponent(i)) return getComponentPublicInstance(i);
	return getPublicInstance(i.parent);
};
var publicPropertiesMap = /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
	$: (i) => i,
	$el: (i) => i.vnode.el,
	$data: (i) => i.data,
	$props: (i) => i.props,
	$attrs: (i) => i.attrs,
	$slots: (i) => i.slots,
	$refs: (i) => i.refs,
	$parent: (i) => getPublicInstance(i.parent),
	$root: (i) => getPublicInstance(i.root),
	$host: (i) => i.ce,
	$emit: (i) => i.emit,
	$options: (i) => resolveMergedOptions(i),
	$forceUpdate: (i) => i.f || (i.f = () => {
		queueJob(i.update);
	}),
	$nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
	$watch: (i) => instanceWatch.bind(i)
});
var hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
var PublicInstanceProxyHandlers = {
	get({ _: instance }, key) {
		if (key === "__v_skip") return true;
		const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
		if (key[0] !== "$") {
			const n = accessCache[key];
			if (n !== void 0) switch (n) {
				case 1: return setupState[key];
				case 2: return data[key];
				case 4: return ctx[key];
				case 3: return props[key];
			}
			else if (hasSetupBinding(setupState, key)) {
				accessCache[key] = 1;
				return setupState[key];
			} else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
				accessCache[key] = 2;
				return data[key];
			} else if (hasOwn(props, key)) {
				accessCache[key] = 3;
				return props[key];
			} else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
				accessCache[key] = 4;
				return ctx[key];
			} else if (shouldCacheAccess) accessCache[key] = 0;
		}
		const publicGetter = publicPropertiesMap[key];
		let cssModule, globalProperties;
		if (publicGetter) {
			if (key === "$attrs") track(instance.attrs, "get", "");
			return publicGetter(instance);
		} else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) return cssModule;
		else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
			accessCache[key] = 4;
			return ctx[key];
		} else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) return globalProperties[key];
	},
	set({ _: instance }, key, value) {
		const { data, setupState, ctx } = instance;
		if (hasSetupBinding(setupState, key)) {
			setupState[key] = value;
			return true;
		} else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
			data[key] = value;
			return true;
		} else if (hasOwn(instance.props, key)) return false;
		if (key[0] === "$" && key.slice(1) in instance) return false;
		else ctx[key] = value;
		return true;
	},
	has({ _: { data, setupState, accessCache, ctx, appContext, props, type } }, key) {
		let cssModules;
		return !!(accessCache[key] || data !== EMPTY_OBJ && key[0] !== "$" && hasOwn(data, key) || hasSetupBinding(setupState, key) || hasOwn(props, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key) || (cssModules = type.__cssModules) && cssModules[key]);
	},
	defineProperty(target, key, descriptor) {
		if (descriptor.get != null) target._.accessCache[key] = 0;
		else if (hasOwn(descriptor, "value")) this.set(target, key, descriptor.value, null);
		return Reflect.defineProperty(target, key, descriptor);
	}
};
function normalizePropsOrEmits(props) {
	return isArray$1(props) ? props.reduce((normalized, p) => (normalized[p] = null, normalized), {}) : props;
}
var shouldCacheAccess = true;
function applyOptions(instance) {
	const options = resolveMergedOptions(instance);
	const publicThis = instance.proxy;
	const ctx = instance.ctx;
	shouldCacheAccess = false;
	if (options.beforeCreate) callHook$1(options.beforeCreate, instance, "bc");
	const { data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, created, beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured, serverPrefetch, expose, inheritAttrs, components, directives, filters } = options;
	const checkDuplicateProperties = null;
	if (injectOptions) resolveInjections(injectOptions, ctx, checkDuplicateProperties);
	if (methods) for (const key in methods) {
		const methodHandler = methods[key];
		if (isFunction(methodHandler)) ctx[key] = methodHandler.bind(publicThis);
	}
	if (dataOptions) {
		const data = dataOptions.call(publicThis, publicThis);
		if (!isObject(data)) {} else instance.data = /* @__PURE__ */ reactive(data);
	}
	shouldCacheAccess = true;
	if (computedOptions) for (const key in computedOptions) {
		const opt = computedOptions[key];
		const c = computed({
			get: isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP,
			set: !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP
		});
		Object.defineProperty(ctx, key, {
			enumerable: true,
			configurable: true,
			get: () => c.value,
			set: (v) => c.value = v
		});
	}
	if (watchOptions) for (const key in watchOptions) createWatcher(watchOptions[key], ctx, publicThis, key);
	if (provideOptions) {
		const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
		Reflect.ownKeys(provides).forEach((key) => {
			provide(key, provides[key]);
		});
	}
	if (created) callHook$1(created, instance, "c");
	function registerLifecycleHook(register, hook) {
		if (isArray$1(hook)) hook.forEach((_hook) => register(_hook.bind(publicThis)));
		else if (hook) register(hook.bind(publicThis));
	}
	registerLifecycleHook(onBeforeMount, beforeMount);
	registerLifecycleHook(onMounted, mounted);
	registerLifecycleHook(onBeforeUpdate, beforeUpdate);
	registerLifecycleHook(onUpdated, updated);
	registerLifecycleHook(onActivated, activated);
	registerLifecycleHook(onDeactivated, deactivated);
	registerLifecycleHook(onErrorCaptured, errorCaptured);
	registerLifecycleHook(onRenderTracked, renderTracked);
	registerLifecycleHook(onRenderTriggered, renderTriggered);
	registerLifecycleHook(onBeforeUnmount, beforeUnmount);
	registerLifecycleHook(onUnmounted, unmounted);
	registerLifecycleHook(onServerPrefetch, serverPrefetch);
	if (isArray$1(expose)) {
		if (expose.length) {
			const exposed = instance.exposed || (instance.exposed = {});
			expose.forEach((key) => {
				Object.defineProperty(exposed, key, {
					get: () => publicThis[key],
					set: (val) => publicThis[key] = val,
					enumerable: true
				});
			});
		} else if (!instance.exposed) instance.exposed = {};
	}
	if (render && instance.render === NOOP) instance.render = render;
	if (inheritAttrs != null) instance.inheritAttrs = inheritAttrs;
	if (components) instance.components = components;
	if (directives) instance.directives = directives;
	if (serverPrefetch) markAsyncBoundary(instance);
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
	if (isArray$1(injectOptions)) injectOptions = normalizeInject(injectOptions);
	for (const key in injectOptions) {
		const opt = injectOptions[key];
		let injected;
		if (isObject(opt)) if ("default" in opt) injected = inject(opt.from || key, opt.default, true);
		else injected = inject(opt.from || key);
		else injected = inject(opt);
		if (/* @__PURE__ */ isRef(injected)) Object.defineProperty(ctx, key, {
			enumerable: true,
			configurable: true,
			get: () => injected.value,
			set: (v) => injected.value = v
		});
		else ctx[key] = injected;
	}
}
function callHook$1(hook, instance, type) {
	callWithAsyncErrorHandling(isArray$1(hook) ? hook.map((h) => h.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
	let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
	if (isString$1(raw)) {
		const handler = ctx[raw];
		if (isFunction(handler)) watch(getter, handler);
	} else if (isFunction(raw)) watch(getter, raw.bind(publicThis));
	else if (isObject(raw)) if (isArray$1(raw)) raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
	else {
		const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
		if (isFunction(handler)) watch(getter, handler, raw);
	}
}
function resolveMergedOptions(instance) {
	const base = instance.type;
	const { mixins, extends: extendsOptions } = base;
	const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
	const cached = cache.get(base);
	let resolved;
	if (cached) resolved = cached;
	else if (!globalMixins.length && !mixins && !extendsOptions) resolved = base;
	else {
		resolved = {};
		if (globalMixins.length) globalMixins.forEach((m) => mergeOptions$1(resolved, m, optionMergeStrategies, true));
		mergeOptions$1(resolved, base, optionMergeStrategies);
	}
	if (isObject(base)) cache.set(base, resolved);
	return resolved;
}
function mergeOptions$1(to, from, strats, asMixin = false) {
	const { mixins, extends: extendsOptions } = from;
	if (extendsOptions) mergeOptions$1(to, extendsOptions, strats, true);
	if (mixins) mixins.forEach((m) => mergeOptions$1(to, m, strats, true));
	for (const key in from) if (asMixin && key === "expose") {} else {
		const strat = internalOptionMergeStrats[key] || strats && strats[key];
		to[key] = strat ? strat(to[key], from[key]) : from[key];
	}
	return to;
}
var internalOptionMergeStrats = {
	data: mergeDataFn,
	props: mergeEmitsOrPropsOptions,
	emits: mergeEmitsOrPropsOptions,
	methods: mergeObjectOptions,
	computed: mergeObjectOptions,
	beforeCreate: mergeAsArray,
	created: mergeAsArray,
	beforeMount: mergeAsArray,
	mounted: mergeAsArray,
	beforeUpdate: mergeAsArray,
	updated: mergeAsArray,
	beforeDestroy: mergeAsArray,
	beforeUnmount: mergeAsArray,
	destroyed: mergeAsArray,
	unmounted: mergeAsArray,
	activated: mergeAsArray,
	deactivated: mergeAsArray,
	errorCaptured: mergeAsArray,
	serverPrefetch: mergeAsArray,
	components: mergeObjectOptions,
	directives: mergeObjectOptions,
	watch: mergeWatchOptions,
	provide: mergeDataFn,
	inject: mergeInject
};
function mergeDataFn(to, from) {
	if (!from) return to;
	if (!to) return from;
	return function mergedDataFn() {
		return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
	};
}
function mergeInject(to, from) {
	return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
	if (isArray$1(raw)) {
		const res = {};
		for (let i = 0; i < raw.length; i++) res[raw[i]] = raw[i];
		return res;
	}
	return raw;
}
function mergeAsArray(to, from) {
	return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
	return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
	if (to) {
		if (isArray$1(to) && isArray$1(from)) return [.../* @__PURE__ */ new Set([...to, ...from])];
		return extend(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(to), normalizePropsOrEmits(from != null ? from : {}));
	} else return from;
}
function mergeWatchOptions(to, from) {
	if (!to) return from;
	if (!from) return to;
	const merged = extend(/* @__PURE__ */ Object.create(null), to);
	for (const key in from) merged[key] = mergeAsArray(to[key], from[key]);
	return merged;
}
function createAppContext() {
	return {
		app: null,
		config: {
			isNativeTag: NO,
			performance: false,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var uid$1 = 0;
function createAppAPI(render, hydrate) {
	return function createApp(rootComponent, rootProps = null) {
		if (!isFunction(rootComponent)) rootComponent = extend({}, rootComponent);
		if (rootProps != null && !isObject(rootProps)) rootProps = null;
		const context = createAppContext();
		const installedPlugins = /* @__PURE__ */ new WeakSet();
		const pluginCleanupFns = [];
		let isMounted = false;
		const app = context.app = {
			_uid: uid$1++,
			_component: rootComponent,
			_props: rootProps,
			_container: null,
			_context: context,
			_instance: null,
			version,
			get config() {
				return context.config;
			},
			set config(v) {},
			use(plugin, ...options) {
				if (installedPlugins.has(plugin)) {} else if (plugin && isFunction(plugin.install)) {
					installedPlugins.add(plugin);
					plugin.install(app, ...options);
				} else if (isFunction(plugin)) {
					installedPlugins.add(plugin);
					plugin(app, ...options);
				}
				return app;
			},
			mixin(mixin) {
				if (!context.mixins.includes(mixin)) context.mixins.push(mixin);
				return app;
			},
			component(name, component) {
				if (!component) return context.components[name];
				context.components[name] = component;
				return app;
			},
			directive(name, directive) {
				if (!directive) return context.directives[name];
				context.directives[name] = directive;
				return app;
			},
			mount(rootContainer, isHydrate, namespace) {
				if (!isMounted) {
					const vnode = app._ceVNode || createVNode(rootComponent, rootProps);
					vnode.appContext = context;
					if (namespace === true) namespace = "svg";
					else if (namespace === false) namespace = void 0;
					if (isHydrate && hydrate) hydrate(vnode, rootContainer);
					else render(vnode, rootContainer, namespace);
					isMounted = true;
					app._container = rootContainer;
					rootContainer.__vue_app__ = app;
					return getComponentPublicInstance(vnode.component);
				}
			},
			onUnmount(cleanupFn) {
				pluginCleanupFns.push(cleanupFn);
			},
			unmount() {
				if (isMounted) {
					callWithAsyncErrorHandling(pluginCleanupFns, app._instance, 16);
					render(null, app._container);
					delete app._container.__vue_app__;
				}
			},
			provide(key, value) {
				context.provides[key] = value;
				return app;
			},
			runWithContext(fn) {
				const lastApp = currentApp;
				currentApp = app;
				try {
					return fn();
				} finally {
					currentApp = lastApp;
				}
			}
		};
		return app;
	};
}
var currentApp = null;
var getModelModifiers = (props, modelName) => {
	return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`];
};
function emit(instance, event, ...rawArgs) {
	if (instance.isUnmounted) return;
	const props = instance.vnode.props || EMPTY_OBJ;
	let args = rawArgs;
	const isModelListener = event.startsWith("update:");
	const modifiers = isModelListener && getModelModifiers(props, event.slice(7));
	if (modifiers) {
		if (modifiers.trim) args = rawArgs.map((a) => isString$1(a) ? a.trim() : a);
		if (modifiers.number) args = rawArgs.map(looseToNumber);
	}
	let handlerName;
	let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
	if (!handler && isModelListener) handler = props[handlerName = toHandlerKey(hyphenate(event))];
	if (handler) callWithAsyncErrorHandling(handler, instance, 6, args);
	const onceHandler = props[handlerName + `Once`];
	if (onceHandler) {
		if (!instance.emitted) instance.emitted = {};
		else if (instance.emitted[handlerName]) return;
		instance.emitted[handlerName] = true;
		callWithAsyncErrorHandling(onceHandler, instance, 6, args);
	}
}
var mixinEmitsCache = /* @__PURE__ */ new WeakMap();
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
	const cache = asMixin ? mixinEmitsCache : appContext.emitsCache;
	const cached = cache.get(comp);
	if (cached !== void 0) return cached;
	const raw = comp.emits;
	let normalized = {};
	let hasExtends = false;
	if (!isFunction(comp)) {
		const extendEmits = (raw2) => {
			const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
			if (normalizedFromExtend) {
				hasExtends = true;
				extend(normalized, normalizedFromExtend);
			}
		};
		if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendEmits);
		if (comp.extends) extendEmits(comp.extends);
		if (comp.mixins) comp.mixins.forEach(extendEmits);
	}
	if (!raw && !hasExtends) {
		if (isObject(comp)) cache.set(comp, null);
		return null;
	}
	if (isArray$1(raw)) raw.forEach((key) => normalized[key] = null);
	else extend(normalized, raw);
	if (isObject(comp)) cache.set(comp, normalized);
	return normalized;
}
function isEmitListener(options, key) {
	if (!options || !isOn(key)) return false;
	key = key.slice(2).replace(/Once$/, "");
	return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
function renderComponentRoot(instance) {
	const { type: Component, vnode, proxy, withProxy, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, props, data, setupState, ctx, inheritAttrs } = instance;
	const prev = setCurrentRenderingInstance(instance);
	let result;
	let fallthroughAttrs;
	try {
		if (vnode.shapeFlag & 4) {
			const proxyToUse = withProxy || proxy;
			const thisProxy = proxyToUse;
			result = normalizeVNode(render.call(thisProxy, proxyToUse, renderCache, props, setupState, data, ctx));
			fallthroughAttrs = attrs;
		} else {
			const render2 = Component;
			result = normalizeVNode(render2.length > 1 ? render2(props, {
				attrs,
				slots,
				emit
			}) : render2(props, null));
			fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
		}
	} catch (err) {
		blockStack.length = 0;
		handleError(err, instance, 1);
		result = createVNode(Comment);
	}
	let root = result;
	if (fallthroughAttrs && inheritAttrs !== false) {
		const keys = Object.keys(fallthroughAttrs);
		const { shapeFlag } = root;
		if (keys.length) {
			if (shapeFlag & 7) {
				if (propsOptions && keys.some(isModelListener)) fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
				root = cloneVNode(root, fallthroughAttrs, false, true);
			}
		}
	}
	if (vnode.dirs) {
		root = cloneVNode(root, null, false, true);
		root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
	}
	if (vnode.transition) setTransitionHooks(root, vnode.transition);
	result = root;
	setCurrentRenderingInstance(prev);
	return result;
}
var getFunctionalFallthrough = (attrs) => {
	let res;
	for (const key in attrs) if (key === "class" || key === "style" || isOn(key)) (res || (res = {}))[key] = attrs[key];
	return res;
};
var filterModelListeners = (attrs, props) => {
	const res = {};
	for (const key in attrs) if (!isModelListener(key) || !(key.slice(9) in props)) res[key] = attrs[key];
	return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
	const { props: prevProps, children: prevChildren, component } = prevVNode;
	const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
	const emits = component.emitsOptions;
	if (nextVNode.dirs || nextVNode.transition) return true;
	if (optimized && patchFlag >= 0) {
		if (patchFlag & 1024) return true;
		if (patchFlag & 16) {
			if (!prevProps) return !!nextProps;
			return hasPropsChanged(prevProps, nextProps, emits);
		} else if (patchFlag & 8) {
			const dynamicProps = nextVNode.dynamicProps;
			for (let i = 0; i < dynamicProps.length; i++) {
				const key = dynamicProps[i];
				if (hasPropValueChanged(nextProps, prevProps, key) && !isEmitListener(emits, key)) return true;
			}
		}
	} else {
		if (prevChildren || nextChildren) {
			if (!nextChildren || !nextChildren.$stable) return true;
		}
		if (prevProps === nextProps) return false;
		if (!prevProps) return !!nextProps;
		if (!nextProps) return true;
		return hasPropsChanged(prevProps, nextProps, emits);
	}
	return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
	const nextKeys = Object.keys(nextProps);
	if (nextKeys.length !== Object.keys(prevProps).length) return true;
	for (let i = 0; i < nextKeys.length; i++) {
		const key = nextKeys[i];
		if (hasPropValueChanged(nextProps, prevProps, key) && !isEmitListener(emitsOptions, key)) return true;
	}
	return false;
}
function hasPropValueChanged(nextProps, prevProps, key) {
	const nextProp = nextProps[key];
	const prevProp = prevProps[key];
	if (key === "style" && isObject(nextProp) && isObject(prevProp)) return !looseEqual(nextProp, prevProp);
	return nextProp !== prevProp;
}
function updateHOCHostEl({ vnode, parent, suspense }, el) {
	while (parent) {
		const root = parent.subTree;
		if (root.suspense && root.suspense.activeBranch === vnode) {
			root.suspense.vnode.el = root.el = el;
			vnode = root;
		}
		if (root === vnode) {
			(vnode = parent.vnode).el = el;
			parent = parent.parent;
		} else break;
	}
	if (suspense && suspense.activeBranch === vnode) suspense.vnode.el = el;
}
var internalObjectProto = {};
var createInternalObject = () => Object.create(internalObjectProto);
var isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
	const props = {};
	const attrs = createInternalObject();
	instance.propsDefaults = /* @__PURE__ */ Object.create(null);
	setFullProps(instance, rawProps, props, attrs);
	for (const key in instance.propsOptions[0]) if (!(key in props)) props[key] = void 0;
	if (isStateful) instance.props = isSSR ? props : /* @__PURE__ */ shallowReactive(props);
	else if (!instance.type.props) instance.props = attrs;
	else instance.props = props;
	instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
	const { props, attrs, vnode: { patchFlag } } = instance;
	const rawCurrentProps = /* @__PURE__ */ toRaw(props);
	const [options] = instance.propsOptions;
	let hasAttrsChanged = false;
	if ((optimized || patchFlag > 0) && !(patchFlag & 16)) {
		if (patchFlag & 8) {
			const propsToUpdate = instance.vnode.dynamicProps;
			for (let i = 0; i < propsToUpdate.length; i++) {
				let key = propsToUpdate[i];
				if (isEmitListener(instance.emitsOptions, key)) continue;
				const value = rawProps[key];
				if (options) if (hasOwn(attrs, key)) {
					if (value !== attrs[key]) {
						attrs[key] = value;
						hasAttrsChanged = true;
					}
				} else {
					const camelizedKey = camelize(key);
					props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
				}
				else if (value !== attrs[key]) {
					attrs[key] = value;
					hasAttrsChanged = true;
				}
			}
		}
	} else {
		if (setFullProps(instance, rawProps, props, attrs)) hasAttrsChanged = true;
		let kebabKey;
		for (const key in rawCurrentProps) if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) if (options) {
			if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
		} else delete props[key];
		if (attrs !== rawCurrentProps) {
			for (const key in attrs) if (!rawProps || !hasOwn(rawProps, key) && true) {
				delete attrs[key];
				hasAttrsChanged = true;
			}
		}
	}
	if (hasAttrsChanged) trigger(instance.attrs, "set", "");
}
function setFullProps(instance, rawProps, props, attrs) {
	const [options, needCastKeys] = instance.propsOptions;
	let hasAttrsChanged = false;
	let rawCastValues;
	if (rawProps) for (let key in rawProps) {
		if (isReservedProp(key)) continue;
		const value = rawProps[key];
		let camelKey;
		if (options && hasOwn(options, camelKey = camelize(key))) if (!needCastKeys || !needCastKeys.includes(camelKey)) props[camelKey] = value;
		else (rawCastValues || (rawCastValues = {}))[camelKey] = value;
		else if (!isEmitListener(instance.emitsOptions, key)) {
			if (!(key in attrs) || value !== attrs[key]) {
				attrs[key] = value;
				hasAttrsChanged = true;
			}
		}
	}
	if (needCastKeys) {
		const rawCurrentProps = /* @__PURE__ */ toRaw(props);
		const castValues = rawCastValues || EMPTY_OBJ;
		for (let i = 0; i < needCastKeys.length; i++) {
			const key = needCastKeys[i];
			props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
		}
	}
	return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
	const opt = options[key];
	if (opt != null) {
		const hasDefault = hasOwn(opt, "default");
		if (hasDefault && value === void 0) {
			const defaultValue = opt.default;
			if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
				const { propsDefaults } = instance;
				if (key in propsDefaults) value = propsDefaults[key];
				else {
					const reset = setCurrentInstance(instance);
					value = propsDefaults[key] = defaultValue.call(null, props);
					reset();
				}
			} else value = defaultValue;
			if (instance.ce) instance.ce._setProp(key, value);
		}
		if (opt[0]) {
			if (isAbsent && !hasDefault) value = false;
			else if (opt[1] && (value === "" || value === hyphenate(key))) value = true;
		}
	}
	return value;
}
var mixinPropsCache = /* @__PURE__ */ new WeakMap();
function normalizePropsOptions(comp, appContext, asMixin = false) {
	const cache = asMixin ? mixinPropsCache : appContext.propsCache;
	const cached = cache.get(comp);
	if (cached) return cached;
	const raw = comp.props;
	const normalized = {};
	const needCastKeys = [];
	let hasExtends = false;
	if (!isFunction(comp)) {
		const extendProps = (raw2) => {
			hasExtends = true;
			const [props, keys] = normalizePropsOptions(raw2, appContext, true);
			extend(normalized, props);
			if (keys) needCastKeys.push(...keys);
		};
		if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendProps);
		if (comp.extends) extendProps(comp.extends);
		if (comp.mixins) comp.mixins.forEach(extendProps);
	}
	if (!raw && !hasExtends) {
		if (isObject(comp)) cache.set(comp, EMPTY_ARR);
		return EMPTY_ARR;
	}
	if (isArray$1(raw)) for (let i = 0; i < raw.length; i++) {
		const normalizedKey = camelize(raw[i]);
		if (validatePropName(normalizedKey)) normalized[normalizedKey] = EMPTY_OBJ;
	}
	else if (raw) for (const key in raw) {
		const normalizedKey = camelize(key);
		if (validatePropName(normalizedKey)) {
			const opt = raw[key];
			const prop = normalized[normalizedKey] = isArray$1(opt) || isFunction(opt) ? { type: opt } : extend({}, opt);
			const propType = prop.type;
			let shouldCast = false;
			let shouldCastTrue = true;
			if (isArray$1(propType)) for (let index = 0; index < propType.length; ++index) {
				const type = propType[index];
				const typeName = isFunction(type) && type.name;
				if (typeName === "Boolean") {
					shouldCast = true;
					break;
				} else if (typeName === "String") shouldCastTrue = false;
			}
			else shouldCast = isFunction(propType) && propType.name === "Boolean";
			prop[0] = shouldCast;
			prop[1] = shouldCastTrue;
			if (shouldCast || hasOwn(prop, "default")) needCastKeys.push(normalizedKey);
		}
	}
	const res = [normalized, needCastKeys];
	if (isObject(comp)) cache.set(comp, res);
	return res;
}
function validatePropName(key) {
	if (key[0] !== "$" && !isReservedProp(key)) return true;
	return false;
}
var isInternalKey = (key) => key === "_" || key === "_ctx" || key === "$stable";
var normalizeSlotValue = (value) => isArray$1(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
var normalizeSlot$1 = (key, rawSlot, ctx) => {
	if (rawSlot._n) return rawSlot;
	const normalized = withCtx((...args) => {
		return normalizeSlotValue(rawSlot(...args));
	}, ctx);
	normalized._c = false;
	return normalized;
};
var normalizeObjectSlots = (rawSlots, slots, instance) => {
	const ctx = rawSlots._ctx;
	for (const key in rawSlots) {
		if (isInternalKey(key)) continue;
		const value = rawSlots[key];
		if (isFunction(value)) slots[key] = normalizeSlot$1(key, value, ctx);
		else if (value != null) {
			const normalized = normalizeSlotValue(value);
			slots[key] = () => normalized;
		}
	}
};
var normalizeVNodeSlots = (instance, children) => {
	const normalized = normalizeSlotValue(children);
	instance.slots.default = () => normalized;
};
var assignSlots = (slots, children, optimized) => {
	for (const key in children) if (optimized || !isInternalKey(key)) slots[key] = children[key];
};
var initSlots = (instance, children, optimized) => {
	const slots = instance.slots = createInternalObject();
	if (instance.vnode.shapeFlag & 32) {
		const type = children._;
		if (type) {
			assignSlots(slots, children, optimized);
			if (optimized) def(slots, "_", type, true);
		} else normalizeObjectSlots(children, slots);
	} else if (children) normalizeVNodeSlots(instance, children);
};
var updateSlots = (instance, children, optimized) => {
	const { vnode, slots } = instance;
	let needDeletionCheck = true;
	let deletionComparisonTarget = EMPTY_OBJ;
	if (vnode.shapeFlag & 32) {
		const type = children._;
		if (type) if (optimized && type === 1) needDeletionCheck = false;
		else assignSlots(slots, children, optimized);
		else {
			needDeletionCheck = !children.$stable;
			normalizeObjectSlots(children, slots);
		}
		deletionComparisonTarget = children;
	} else if (children) {
		normalizeVNodeSlots(instance, children);
		deletionComparisonTarget = { default: 1 };
	}
	if (needDeletionCheck) {
		for (const key in slots) if (!isInternalKey(key) && deletionComparisonTarget[key] == null) delete slots[key];
	}
};
function initFeatureFlags() {}
var queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
	return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
	initFeatureFlags();
	const target = getGlobalThis();
	target.__VUE__ = true;
	const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, insertStaticContent: hostInsertStaticContent } = options;
	const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
		if (n1 === n2) return;
		if (n1 && !isSameVNodeType(n1, n2)) {
			anchor = getNextHostNode(n1);
			unmount(n1, parentComponent, parentSuspense, true);
			n1 = null;
		}
		if (n2.patchFlag === -2) {
			optimized = false;
			n2.dynamicChildren = null;
		}
		const { type, ref, shapeFlag } = n2;
		switch (type) {
			case Text:
				processText(n1, n2, container, anchor);
				break;
			case Comment:
				processCommentNode(n1, n2, container, anchor);
				break;
			case Static:
				if (n1 == null) mountStaticNode(n2, container, anchor, namespace);
				break;
			case Fragment:
				processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				break;
			default: if (shapeFlag & 1) processElement(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else if (shapeFlag & 6) processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else if (shapeFlag & 64) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
			else if (shapeFlag & 128) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
		}
		if (ref != null && parentComponent) setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
		else if (ref == null && n1 && n1.ref != null) setRef(n1.ref, null, parentSuspense, n1, true);
	};
	const processText = (n1, n2, container, anchor) => {
		if (n1 == null) hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
		else {
			const el = n2.el = n1.el;
			if (n2.children !== n1.children) hostSetText(el, n2.children);
		}
	};
	const processCommentNode = (n1, n2, container, anchor) => {
		if (n1 == null) hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
		else n2.el = n1.el;
	};
	const mountStaticNode = (n2, container, anchor, namespace) => {
		[n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace, n2.el, n2.anchor);
	};
	const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
		let next;
		while (el && el !== anchor) {
			next = hostNextSibling(el);
			hostInsert(el, container, nextSibling);
			el = next;
		}
		hostInsert(anchor, container, nextSibling);
	};
	const removeStaticNode = ({ el, anchor }) => {
		let next;
		while (el && el !== anchor) {
			next = hostNextSibling(el);
			hostRemove(el);
			el = next;
		}
		hostRemove(anchor);
	};
	const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		if (n2.type === "svg") namespace = "svg";
		else if (n2.type === "math") namespace = "mathml";
		if (n1 == null) mountElement(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		else {
			const customElement = n1.el && n1.el._isVueCE ? n1.el : null;
			try {
				if (customElement) customElement._beginPatch();
				patchElement(n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			} finally {
				if (customElement) customElement._endPatch();
			}
		}
	};
	const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		let el;
		let vnodeHook;
		const { props, shapeFlag, transition, dirs } = vnode;
		el = vnode.el = hostCreateElement(vnode.type, namespace, props && props.is, props);
		if (shapeFlag & 8) hostSetElementText(el, vnode.children);
		else if (shapeFlag & 16) mountChildren(vnode.children, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(vnode, namespace), slotScopeIds, optimized);
		if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
		setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
		if (props) {
			for (const key in props) if (key !== "value" && !isReservedProp(key)) hostPatchProp(el, key, null, props[key], namespace, parentComponent);
			if ("value" in props) hostPatchProp(el, "value", null, props.value, namespace);
			if (vnodeHook = props.onVnodeBeforeMount) invokeVNodeHook(vnodeHook, parentComponent, vnode);
		}
		if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
		const needCallTransitionHooks = needTransition(parentSuspense, transition);
		if (needCallTransitionHooks) transition.beforeEnter(el);
		hostInsert(el, container, anchor);
		if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) queuePostRenderEffect(() => {
			try {
				vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
				needCallTransitionHooks && transition.enter(el);
				dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
			} finally {}
		}, parentSuspense);
	};
	const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
		if (scopeId) hostSetScopeId(el, scopeId);
		if (slotScopeIds) for (let i = 0; i < slotScopeIds.length; i++) hostSetScopeId(el, slotScopeIds[i]);
		if (parentComponent) {
			let subTree = parentComponent.subTree;
			if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
				const parentVNode = parentComponent.vnode;
				setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
			}
		}
	};
	const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
		for (let i = start; i < children.length; i++) patch(null, children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
	};
	const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		const el = n2.el = n1.el;
		let { patchFlag, dynamicChildren, dirs } = n2;
		patchFlag |= n1.patchFlag & 16;
		const oldProps = n1.props || EMPTY_OBJ;
		const newProps = n2.props || EMPTY_OBJ;
		let vnodeHook;
		parentComponent && toggleRecurse(parentComponent, false);
		if (vnodeHook = newProps.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
		if (dirs) invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
		parentComponent && toggleRecurse(parentComponent, true);
		if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) hostSetElementText(el, "");
		if (dynamicChildren) patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds);
		else if (!optimized) patchChildren(n1, n2, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds, false);
		if (patchFlag > 0) {
			if (patchFlag & 16) patchProps(el, oldProps, newProps, parentComponent, namespace);
			else {
				if (patchFlag & 2) {
					if (oldProps.class !== newProps.class) hostPatchProp(el, "class", null, newProps.class, namespace);
				}
				if (patchFlag & 4) hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
				if (patchFlag & 8) {
					const propsToUpdate = n2.dynamicProps;
					for (let i = 0; i < propsToUpdate.length; i++) {
						const key = propsToUpdate[i];
						const prev = oldProps[key];
						const next = newProps[key];
						if (next !== prev || key === "value") hostPatchProp(el, key, prev, next, namespace, parentComponent);
					}
				}
			}
			if (patchFlag & 1) {
				if (n1.children !== n2.children) hostSetElementText(el, n2.children);
			}
		} else if (!optimized && dynamicChildren == null) patchProps(el, oldProps, newProps, parentComponent, namespace);
		if ((vnodeHook = newProps.onVnodeUpdated) || dirs) queuePostRenderEffect(() => {
			vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
			dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
		}, parentSuspense);
	};
	const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
		for (let i = 0; i < newChildren.length; i++) {
			const oldVNode = oldChildren[i];
			const newVNode = newChildren[i];
			patch(oldVNode, newVNode, oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & 198) ? hostParentNode(oldVNode.el) : fallbackContainer, null, parentComponent, parentSuspense, namespace, slotScopeIds, true);
		}
	};
	const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
		if (oldProps !== newProps) {
			if (oldProps !== EMPTY_OBJ) {
				for (const key in oldProps) if (!isReservedProp(key) && !(key in newProps)) hostPatchProp(el, key, oldProps[key], null, namespace, parentComponent);
			}
			for (const key in newProps) {
				if (isReservedProp(key)) continue;
				const next = newProps[key];
				const prev = oldProps[key];
				if (next !== prev && key !== "value") hostPatchProp(el, key, prev, next, namespace, parentComponent);
			}
			if ("value" in newProps) hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
		}
	};
	const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
		const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
		let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
		if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
		if (n1 == null) {
			hostInsert(fragmentStartAnchor, container, anchor);
			hostInsert(fragmentEndAnchor, container, anchor);
			mountChildren(n2.children || [], container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		} else if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren && n1.dynamicChildren.length === dynamicChildren.length) {
			patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, namespace, slotScopeIds);
			if (n2.key != null || parentComponent && n2 === parentComponent.subTree) traverseStaticChildren(n1, n2, true);
		} else patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
	};
	const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		n2.slotScopeIds = slotScopeIds;
		if (n1 == null) if (n2.shapeFlag & 512) parentComponent.ctx.activate(n2, container, anchor, namespace, optimized);
		else mountComponent(n2, container, anchor, parentComponent, parentSuspense, namespace, optimized);
		else updateComponent(n1, n2, optimized);
	};
	const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
		const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
		if (isKeepAlive(initialVNode)) instance.ctx.renderer = internals;
		setupComponent(instance, false, optimized);
		if (instance.asyncDep) {
			parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
			if (!initialVNode.el) {
				const placeholder = instance.subTree = createVNode(Comment);
				processCommentNode(null, placeholder, container, anchor);
				initialVNode.placeholder = placeholder.el;
			}
		} else setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, namespace, optimized);
	};
	const updateComponent = (n1, n2, optimized) => {
		const instance = n2.component = n1.component;
		if (shouldUpdateComponent(n1, n2, optimized)) if (instance.asyncDep && !instance.asyncResolved) {
			updateComponentPreRender(instance, n2, optimized);
			return;
		} else {
			instance.next = n2;
			instance.update();
		}
		else {
			n2.el = n1.el;
			instance.vnode = n2;
		}
	};
	const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
		const componentUpdateFn = () => {
			if (!instance.isMounted) {
				let vnodeHook;
				const { el, props } = initialVNode;
				const { bm, m, parent, root, type } = instance;
				const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
				toggleRecurse(instance, false);
				if (bm) invokeArrayFns(bm);
				if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) invokeVNodeHook(vnodeHook, parent, initialVNode);
				toggleRecurse(instance, true);
				if (el && hydrateNode) {
					const hydrateSubTree = () => {
						instance.subTree = renderComponentRoot(instance);
						hydrateNode(el, instance.subTree, instance, parentSuspense, null);
					};
					if (isAsyncWrapperVNode && type.__asyncHydrate) type.__asyncHydrate(el, instance, hydrateSubTree);
					else hydrateSubTree();
				} else {
					if (root.ce && root.ce._hasShadowRoot()) root.ce._injectChildStyle(type, instance.parent ? instance.parent.type : void 0);
					const subTree = instance.subTree = renderComponentRoot(instance);
					patch(null, subTree, container, anchor, instance, parentSuspense, namespace);
					initialVNode.el = subTree.el;
				}
				if (m) queuePostRenderEffect(m, parentSuspense);
				if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
					const scopedInitialVNode = initialVNode;
					queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
				}
				if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) instance.a && queuePostRenderEffect(instance.a, parentSuspense);
				instance.isMounted = true;
				initialVNode = container = anchor = null;
			} else {
				let { next, bu, u, parent, vnode } = instance;
				{
					const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
					if (nonHydratedAsyncRoot) {
						if (next) {
							next.el = vnode.el;
							updateComponentPreRender(instance, next, optimized);
						}
						nonHydratedAsyncRoot.asyncDep.then(() => {
							queuePostRenderEffect(() => {
								if (!instance.isUnmounted) update();
							}, parentSuspense);
						});
						return;
					}
				}
				let originNext = next;
				let vnodeHook;
				toggleRecurse(instance, false);
				if (next) {
					next.el = vnode.el;
					updateComponentPreRender(instance, next, optimized);
				} else next = vnode;
				if (bu) invokeArrayFns(bu);
				if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parent, next, vnode);
				toggleRecurse(instance, true);
				const nextTree = renderComponentRoot(instance);
				const prevTree = instance.subTree;
				instance.subTree = nextTree;
				patch(prevTree, nextTree, hostParentNode(prevTree.el), getNextHostNode(prevTree), instance, parentSuspense, namespace);
				next.el = nextTree.el;
				if (originNext === null) updateHOCHostEl(instance, nextTree.el);
				if (u) queuePostRenderEffect(u, parentSuspense);
				if (vnodeHook = next.props && next.props.onVnodeUpdated) queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
			}
		};
		instance.scope.on();
		const effect = instance.effect = new ReactiveEffect(componentUpdateFn);
		instance.scope.off();
		const update = instance.update = effect.run.bind(effect);
		const job = instance.job = effect.runIfDirty.bind(effect);
		job.i = instance;
		job.id = instance.uid;
		effect.scheduler = () => queueJob(job);
		toggleRecurse(instance, true);
		update();
	};
	const updateComponentPreRender = (instance, nextVNode, optimized) => {
		nextVNode.component = instance;
		const prevProps = instance.vnode.props;
		instance.vnode = nextVNode;
		instance.next = null;
		updateProps(instance, nextVNode.props, prevProps, optimized);
		updateSlots(instance, nextVNode.children, optimized);
		pauseTracking();
		flushPreFlushCbs(instance);
		resetTracking();
	};
	const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
		const c1 = n1 && n1.children;
		const prevShapeFlag = n1 ? n1.shapeFlag : 0;
		const c2 = n2.children;
		const { patchFlag, shapeFlag } = n2;
		if (patchFlag > 0) {
			if (patchFlag & 128) {
				patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				return;
			} else if (patchFlag & 256) {
				patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				return;
			}
		}
		if (shapeFlag & 8) {
			if (prevShapeFlag & 16) unmountChildren(c1, parentComponent, parentSuspense);
			if (c2 !== c1) hostSetElementText(container, c2);
		} else if (prevShapeFlag & 16) if (shapeFlag & 16) patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		else unmountChildren(c1, parentComponent, parentSuspense, true);
		else {
			if (prevShapeFlag & 8) hostSetElementText(container, "");
			if (shapeFlag & 16) mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		}
	};
	const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		c1 = c1 || EMPTY_ARR;
		c2 = c2 || EMPTY_ARR;
		const oldLength = c1.length;
		const newLength = c2.length;
		const commonLength = Math.min(oldLength, newLength);
		let i;
		for (i = 0; i < commonLength; i++) {
			const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
			patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		}
		if (oldLength > newLength) unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
		else mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, commonLength);
	};
	const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		let i = 0;
		const l2 = c2.length;
		let e1 = c1.length - 1;
		let e2 = l2 - 1;
		while (i <= e1 && i <= e2) {
			const n1 = c1[i];
			const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
			if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else break;
			i++;
		}
		while (i <= e1 && i <= e2) {
			const n1 = c1[e1];
			const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
			if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else break;
			e1--;
			e2--;
		}
		if (i > e1) {
			if (i <= e2) {
				const nextPos = e2 + 1;
				const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
				while (i <= e2) {
					patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
					i++;
				}
			}
		} else if (i > e2) while (i <= e1) {
			unmount(c1[i], parentComponent, parentSuspense, true);
			i++;
		}
		else {
			const s1 = i;
			const s2 = i;
			const keyToNewIndexMap = /* @__PURE__ */ new Map();
			for (i = s2; i <= e2; i++) {
				const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
				if (nextChild.key != null) keyToNewIndexMap.set(nextChild.key, i);
			}
			let j;
			let patched = 0;
			const toBePatched = e2 - s2 + 1;
			let moved = false;
			let maxNewIndexSoFar = 0;
			const newIndexToOldIndexMap = new Array(toBePatched);
			for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
			for (i = s1; i <= e1; i++) {
				const prevChild = c1[i];
				if (patched >= toBePatched) {
					unmount(prevChild, parentComponent, parentSuspense, true);
					continue;
				}
				let newIndex;
				if (prevChild.key != null) newIndex = keyToNewIndexMap.get(prevChild.key);
				else for (j = s2; j <= e2; j++) if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
					newIndex = j;
					break;
				}
				if (newIndex === void 0) unmount(prevChild, parentComponent, parentSuspense, true);
				else {
					newIndexToOldIndexMap[newIndex - s2] = i + 1;
					if (newIndex >= maxNewIndexSoFar) maxNewIndexSoFar = newIndex;
					else moved = true;
					patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
					patched++;
				}
			}
			const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
			j = increasingNewIndexSequence.length - 1;
			for (i = toBePatched - 1; i >= 0; i--) {
				const nextIndex = s2 + i;
				const nextChild = c2[nextIndex];
				const anchorVNode = c2[nextIndex + 1];
				const anchor = nextIndex + 1 < l2 ? anchorVNode.el || resolveAsyncComponentPlaceholder(anchorVNode) : parentAnchor;
				if (newIndexToOldIndexMap[i] === 0) patch(null, nextChild, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				else if (moved) if (j < 0 || i !== increasingNewIndexSequence[j]) move(nextChild, container, anchor, 2);
				else j--;
			}
		}
	};
	const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
		const { el, type, transition, children, shapeFlag } = vnode;
		if (shapeFlag & 6) {
			move(vnode.component.subTree, container, anchor, moveType);
			return;
		}
		if (shapeFlag & 128) {
			vnode.suspense.move(container, anchor, moveType);
			return;
		}
		if (shapeFlag & 64) {
			type.move(vnode, container, anchor, internals);
			return;
		}
		if (type === Fragment) {
			hostInsert(el, container, anchor);
			for (let i = 0; i < children.length; i++) move(children[i], container, anchor, moveType);
			hostInsert(vnode.anchor, container, anchor);
			return;
		}
		if (type === Static) {
			moveStaticNode(vnode, container, anchor);
			return;
		}
		if (moveType !== 2 && shapeFlag & 1 && transition) if (moveType === 0) {
			transition.beforeEnter(el);
			hostInsert(el, container, anchor);
			queuePostRenderEffect(() => transition.enter(el), parentSuspense);
		} else {
			const { leave, delayLeave, afterLeave } = transition;
			const remove2 = () => {
				if (vnode.ctx.isUnmounted) hostRemove(el);
				else hostInsert(el, container, anchor);
			};
			const performLeave = () => {
				if (el._isLeaving) el[leaveCbKey](true);
				leave(el, () => {
					remove2();
					afterLeave && afterLeave();
				});
			};
			if (delayLeave) delayLeave(el, remove2, performLeave);
			else performLeave();
		}
		else hostInsert(el, container, anchor);
	};
	const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
		const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs, cacheIndex, memo } = vnode;
		if (patchFlag === -2) optimized = false;
		if (ref != null) {
			pauseTracking();
			setRef(ref, null, parentSuspense, vnode, true);
			resetTracking();
		}
		if (cacheIndex != null) parentComponent.renderCache[cacheIndex] = void 0;
		if (shapeFlag & 256) {
			parentComponent.ctx.deactivate(vnode);
			return;
		}
		const shouldInvokeDirs = shapeFlag & 1 && dirs;
		const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
		let vnodeHook;
		if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) invokeVNodeHook(vnodeHook, parentComponent, vnode);
		if (shapeFlag & 6) unmountComponent(vnode.component, parentSuspense, doRemove);
		else {
			if (shapeFlag & 128) {
				vnode.suspense.unmount(parentSuspense, doRemove);
				return;
			}
			if (shouldInvokeDirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
			if (shapeFlag & 64) vnode.type.remove(vnode, parentComponent, parentSuspense, internals, doRemove);
			else if (dynamicChildren && !dynamicChildren.hasOnce && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
			else if (type === Fragment && patchFlag & 384 || !optimized && shapeFlag & 16) unmountChildren(children, parentComponent, parentSuspense);
			if (doRemove) remove(vnode);
		}
		const shouldInvalidateMemo = memo != null && cacheIndex == null;
		if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs || shouldInvalidateMemo) queuePostRenderEffect(() => {
			vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
			shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
			if (shouldInvalidateMemo) vnode.el = null;
		}, parentSuspense);
	};
	const remove = (vnode) => {
		const { type, el, anchor, transition } = vnode;
		if (type === Fragment) {
			removeFragment(el, anchor);
			return;
		}
		if (type === Static) {
			removeStaticNode(vnode);
			return;
		}
		const performRemove = () => {
			hostRemove(el);
			if (transition && !transition.persisted && transition.afterLeave) transition.afterLeave();
		};
		if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
			const { leave, delayLeave } = transition;
			const performLeave = () => leave(el, performRemove);
			if (delayLeave) delayLeave(vnode.el, performRemove, performLeave);
			else performLeave();
		} else performRemove();
	};
	const removeFragment = (cur, end) => {
		let next;
		while (cur !== end) {
			next = hostNextSibling(cur);
			hostRemove(cur);
			cur = next;
		}
		hostRemove(end);
	};
	const unmountComponent = (instance, parentSuspense, doRemove) => {
		const { bum, scope, job, subTree, um, m, a } = instance;
		invalidateMount(m);
		invalidateMount(a);
		if (bum) invokeArrayFns(bum);
		scope.stop();
		if (job) {
			job.flags |= 8;
			unmount(subTree, instance, parentSuspense, doRemove);
		}
		if (um) queuePostRenderEffect(um, parentSuspense);
		queuePostRenderEffect(() => {
			instance.isUnmounted = true;
		}, parentSuspense);
	};
	const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
		for (let i = start; i < children.length; i++) unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
	};
	const getNextHostNode = (vnode) => {
		if (vnode.shapeFlag & 6) return getNextHostNode(vnode.component.subTree);
		if (vnode.shapeFlag & 128) return vnode.suspense.next();
		const el = hostNextSibling(vnode.anchor || vnode.el);
		const teleportEnd = el && el[TeleportEndKey];
		return teleportEnd ? hostNextSibling(teleportEnd) : el;
	};
	let isFlushing = false;
	const render = (vnode, container, namespace) => {
		let instance;
		if (vnode == null) {
			if (container._vnode) {
				unmount(container._vnode, null, null, true);
				instance = container._vnode.component;
			}
		} else patch(container._vnode || null, vnode, container, null, null, null, namespace);
		container._vnode = vnode;
		if (!isFlushing) {
			isFlushing = true;
			flushPreFlushCbs(instance);
			flushPostFlushCbs();
			isFlushing = false;
		}
	};
	const internals = {
		p: patch,
		um: unmount,
		m: move,
		r: remove,
		mt: mountComponent,
		mc: mountChildren,
		pc: patchChildren,
		pbc: patchBlockChildren,
		n: getNextHostNode,
		o: options
	};
	let hydrate;
	let hydrateNode;
	if (createHydrationFns) [hydrate, hydrateNode] = createHydrationFns(internals);
	return {
		render,
		hydrate,
		createApp: createAppAPI(render, hydrate)
	};
}
function resolveChildrenNamespace({ type, props }, currentNamespace) {
	return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect, job }, allowed) {
	if (allowed) {
		effect.flags |= 32;
		job.flags |= 4;
	} else {
		effect.flags &= -33;
		job.flags &= -5;
	}
}
function needTransition(parentSuspense, transition) {
	return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
	const ch1 = n1.children;
	const ch2 = n2.children;
	if (isArray$1(ch1) && isArray$1(ch2)) for (let i = 0; i < ch1.length; i++) {
		const c1 = ch1[i];
		let c2 = ch2[i];
		if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
			if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
				c2 = ch2[i] = cloneIfMounted(ch2[i]);
				c2.el = c1.el;
			}
			if (!shallow && c2.patchFlag !== -2) traverseStaticChildren(c1, c2);
		}
		if (c2.type === Text) {
			if (c2.patchFlag === -1) c2 = ch2[i] = cloneIfMounted(c2);
			c2.el = c1.el;
		}
		if (c2.type === Comment && !c2.el) c2.el = c1.el;
	}
}
function getSequence(arr) {
	const p = arr.slice();
	const result = [0];
	let i, j, u, v, c;
	const len = arr.length;
	for (i = 0; i < len; i++) {
		const arrI = arr[i];
		if (arrI !== 0) {
			j = result[result.length - 1];
			if (arr[j] < arrI) {
				p[i] = j;
				result.push(i);
				continue;
			}
			u = 0;
			v = result.length - 1;
			while (u < v) {
				c = u + v >> 1;
				if (arr[result[c]] < arrI) u = c + 1;
				else v = c;
			}
			if (arrI < arr[result[u]]) {
				if (u > 0) p[i] = result[u - 1];
				result[u] = i;
			}
		}
	}
	u = result.length;
	v = result[u - 1];
	while (u-- > 0) {
		result[u] = v;
		v = p[v];
	}
	return result;
}
function locateNonHydratedAsyncRoot(instance) {
	const subComponent = instance.subTree.component;
	if (subComponent) if (subComponent.asyncDep && !subComponent.asyncResolved) return subComponent;
	else return locateNonHydratedAsyncRoot(subComponent);
}
function invalidateMount(hooks) {
	if (hooks) for (let i = 0; i < hooks.length; i++) hooks[i].flags |= 8;
}
function resolveAsyncComponentPlaceholder(anchorVnode) {
	if (anchorVnode.placeholder) return anchorVnode.placeholder;
	const instance = anchorVnode.component;
	if (instance) return resolveAsyncComponentPlaceholder(instance.subTree);
	return null;
}
var isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
	if (suspense && suspense.pendingBranch) if (isArray$1(fn)) suspense.effects.push(...fn);
	else suspense.effects.push(fn);
	else queuePostFlushCb(fn);
}
var Fragment = /* @__PURE__ */ Symbol.for("v-fgt");
var Text = /* @__PURE__ */ Symbol.for("v-txt");
var Comment = /* @__PURE__ */ Symbol.for("v-cmt");
var Static = /* @__PURE__ */ Symbol.for("v-stc");
var blockStack = [];
var currentBlock = null;
function openBlock(disableTracking = false) {
	blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
	blockStack.pop();
	currentBlock = blockStack[blockStack.length - 1] || null;
}
var isBlockTreeEnabled = 1;
function setBlockTracking(value, inVOnce = false) {
	isBlockTreeEnabled += value;
	if (value < 0 && currentBlock && inVOnce) currentBlock.hasOnce = true;
}
function setupBlock(vnode) {
	vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
	closeBlock();
	if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(vnode);
	return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
	return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
	return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
	return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
	return n1.type === n2.type && n1.key === n2.key;
}
var normalizeKey = ({ key }) => key != null ? key : null;
var normalizeRef = ({ ref, ref_key, ref_for }) => {
	if (typeof ref === "number") ref = "" + ref;
	return ref != null ? isString$1(ref) || /* @__PURE__ */ isRef(ref) || isFunction(ref) ? {
		i: currentRenderingInstance,
		r: ref,
		k: ref_key,
		f: !!ref_for
	} : ref : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
	const vnode = {
		__v_isVNode: true,
		__v_skip: true,
		type,
		props,
		key: props && normalizeKey(props),
		ref: props && normalizeRef(props),
		scopeId: currentScopeId,
		slotScopeIds: null,
		children,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag,
		patchFlag,
		dynamicProps,
		dynamicChildren: null,
		appContext: null,
		ctx: currentRenderingInstance
	};
	if (needFullChildrenNormalization) {
		normalizeChildren(vnode, children);
		if (shapeFlag & 128) type.normalize(vnode);
	} else if (children) vnode.shapeFlag |= isString$1(children) ? 8 : 16;
	if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) currentBlock.push(vnode);
	return vnode;
}
var createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
	if (!type || type === NULL_DYNAMIC_COMPONENT) type = Comment;
	if (isVNode(type)) {
		const cloned = cloneVNode(type, props, true);
		if (children) normalizeChildren(cloned, children);
		if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) if (cloned.shapeFlag & 6) currentBlock[currentBlock.indexOf(type)] = cloned;
		else currentBlock.push(cloned);
		cloned.patchFlag = -2;
		return cloned;
	}
	if (isClassComponent(type)) type = type.__vccOpts;
	if (props) {
		props = guardReactiveProps(props);
		let { class: klass, style } = props;
		if (klass && !isString$1(klass)) props.class = normalizeClass(klass);
		if (isObject(style)) {
			if (/* @__PURE__ */ isProxy(style) && !isArray$1(style)) style = extend({}, style);
			props.style = normalizeStyle(style);
		}
	}
	const shapeFlag = isString$1(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
	return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
	if (!props) return null;
	return /* @__PURE__ */ isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
	const { props, ref, patchFlag, children, transition } = vnode;
	const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
	const cloned = {
		__v_isVNode: true,
		__v_skip: true,
		type: vnode.type,
		props: mergedProps,
		key: mergedProps && normalizeKey(mergedProps),
		ref: extraProps && extraProps.ref ? mergeRef && ref ? isArray$1(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref,
		scopeId: vnode.scopeId,
		slotScopeIds: vnode.slotScopeIds,
		children,
		target: vnode.target,
		targetStart: vnode.targetStart,
		targetAnchor: vnode.targetAnchor,
		staticCount: vnode.staticCount,
		shapeFlag: vnode.shapeFlag,
		patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
		dynamicProps: vnode.dynamicProps,
		dynamicChildren: vnode.dynamicChildren,
		appContext: vnode.appContext,
		dirs: vnode.dirs,
		transition,
		component: vnode.component,
		suspense: vnode.suspense,
		ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
		ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
		placeholder: vnode.placeholder,
		el: vnode.el,
		anchor: vnode.anchor,
		ctx: vnode.ctx,
		ce: vnode.ce
	};
	if (transition && cloneTransition) setTransitionHooks(cloned, transition.clone(cloned));
	return cloned;
}
function createTextVNode(text = " ", flag = 0) {
	return createVNode(Text, null, text, flag);
}
function createCommentVNode(text = "", asBlock = false) {
	return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
	if (child == null || typeof child === "boolean") return createVNode(Comment);
	else if (isArray$1(child)) return createVNode(Fragment, null, child.slice());
	else if (isVNode(child)) return cloneIfMounted(child);
	else return createVNode(Text, null, String(child));
}
function cloneIfMounted(child) {
	return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
	let type = 0;
	const { shapeFlag } = vnode;
	if (children == null) children = null;
	else if (isArray$1(children)) type = 16;
	else if (typeof children === "object") if (shapeFlag & 65) {
		const slot = children.default;
		if (slot) {
			slot._c && (slot._d = false);
			normalizeChildren(vnode, slot());
			slot._c && (slot._d = true);
		}
		return;
	} else {
		type = 32;
		const slotFlag = children._;
		if (!slotFlag && !isInternalObject(children)) children._ctx = currentRenderingInstance;
		else if (slotFlag === 3 && currentRenderingInstance) if (currentRenderingInstance.slots._ === 1) children._ = 1;
		else {
			children._ = 2;
			vnode.patchFlag |= 1024;
		}
	}
	else if (isFunction(children)) {
		children = {
			default: children,
			_ctx: currentRenderingInstance
		};
		type = 32;
	} else {
		children = String(children);
		if (shapeFlag & 64) {
			type = 16;
			children = [createTextVNode(children)];
		} else type = 8;
	}
	vnode.children = children;
	vnode.shapeFlag |= type;
}
function mergeProps(...args) {
	const ret = {};
	for (let i = 0; i < args.length; i++) {
		const toMerge = args[i];
		for (const key in toMerge) if (key === "class") {
			if (ret.class !== toMerge.class) ret.class = normalizeClass([ret.class, toMerge.class]);
		} else if (key === "style") ret.style = normalizeStyle([ret.style, toMerge.style]);
		else if (isOn(key)) {
			const existing = ret[key];
			const incoming = toMerge[key];
			if (incoming && existing !== incoming && !(isArray$1(existing) && existing.includes(incoming))) ret[key] = existing ? [].concat(existing, incoming) : incoming;
			else if (incoming == null && existing == null && !isModelListener(key)) ret[key] = incoming;
		} else if (key !== "") ret[key] = toMerge[key];
	}
	return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
	callWithAsyncErrorHandling(hook, instance, 7, [vnode, prevVNode]);
}
var emptyAppContext = createAppContext();
var uid = 0;
function createComponentInstance(vnode, parent, suspense) {
	const type = vnode.type;
	const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
	const instance = {
		uid: uid++,
		vnode,
		type,
		parent,
		appContext,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new EffectScope(true),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: parent ? parent.provides : Object.create(appContext.provides),
		ids: parent ? parent.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: normalizePropsOptions(type, appContext),
		emitsOptions: normalizeEmitsOptions(type, appContext),
		emit: null,
		emitted: null,
		propsDefaults: EMPTY_OBJ,
		inheritAttrs: type.inheritAttrs,
		ctx: EMPTY_OBJ,
		data: EMPTY_OBJ,
		props: EMPTY_OBJ,
		attrs: EMPTY_OBJ,
		slots: EMPTY_OBJ,
		refs: EMPTY_OBJ,
		setupState: EMPTY_OBJ,
		setupContext: null,
		suspense,
		suspenseId: suspense ? suspense.pendingId : 0,
		asyncDep: null,
		asyncResolved: false,
		isMounted: false,
		isUnmounted: false,
		isDeactivated: false,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	instance.ctx = { _: instance };
	instance.root = parent ? parent.root : instance;
	instance.emit = emit.bind(null, instance);
	if (vnode.ce) vnode.ce(instance);
	return instance;
}
var currentInstance = null;
var getCurrentInstance = () => currentInstance || currentRenderingInstance;
var internalSetCurrentInstance;
var setInSSRSetupState;
{
	const g = getGlobalThis();
	const registerGlobalSetter = (key, setter) => {
		let setters;
		if (!(setters = g[key])) setters = g[key] = [];
		setters.push(setter);
		return (v) => {
			if (setters.length > 1) setters.forEach((set) => set(v));
			else setters[0](v);
		};
	};
	internalSetCurrentInstance = registerGlobalSetter(`__VUE_INSTANCE_SETTERS__`, (v) => currentInstance = v);
	setInSSRSetupState = registerGlobalSetter(`__VUE_SSR_SETTERS__`, (v) => isInSSRComponentSetup = v);
}
var setCurrentInstance = (instance) => {
	const prev = currentInstance;
	internalSetCurrentInstance(instance);
	instance.scope.on();
	return () => {
		instance.scope.off();
		internalSetCurrentInstance(prev);
	};
};
var unsetCurrentInstance = () => {
	currentInstance && currentInstance.scope.off();
	internalSetCurrentInstance(null);
};
function isStatefulComponent(instance) {
	return instance.vnode.shapeFlag & 4;
}
var isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false, optimized = false) {
	isSSR && setInSSRSetupState(isSSR);
	const { props, children } = instance.vnode;
	const isStateful = isStatefulComponent(instance);
	initProps(instance, props, isStateful, isSSR);
	initSlots(instance, children, optimized || isSSR);
	const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
	isSSR && setInSSRSetupState(false);
	return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
	const Component = instance.type;
	instance.accessCache = /* @__PURE__ */ Object.create(null);
	instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
	const { setup } = Component;
	if (setup) {
		pauseTracking();
		const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
		const reset = setCurrentInstance(instance);
		const setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
		const isAsyncSetup = isPromise(setupResult);
		resetTracking();
		reset();
		if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) markAsyncBoundary(instance);
		if (isAsyncSetup) {
			setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
			if (isSSR) return setupResult.then((resolvedResult) => {
				handleSetupResult(instance, resolvedResult, isSSR);
			}).catch((e) => {
				handleError(e, instance, 0);
			});
			else instance.asyncDep = setupResult;
		} else handleSetupResult(instance, setupResult, isSSR);
	} else finishComponentSetup(instance, isSSR);
}
function handleSetupResult(instance, setupResult, isSSR) {
	if (isFunction(setupResult)) if (instance.type.__ssrInlineRender) instance.ssrRender = setupResult;
	else instance.render = setupResult;
	else if (isObject(setupResult)) instance.setupState = proxyRefs(setupResult);
	finishComponentSetup(instance, isSSR);
}
var compile;
var installWithProxy;
function finishComponentSetup(instance, isSSR, skipOptions) {
	const Component = instance.type;
	if (!instance.render) {
		if (!isSSR && compile && !Component.render) {
			const template = Component.template || resolveMergedOptions(instance).template;
			if (template) {
				const { isCustomElement, compilerOptions } = instance.appContext.config;
				const { delimiters, compilerOptions: componentCompilerOptions } = Component;
				Component.render = compile(template, extend(extend({
					isCustomElement,
					delimiters
				}, compilerOptions), componentCompilerOptions));
			}
		}
		instance.render = Component.render || NOOP;
		if (installWithProxy) installWithProxy(instance);
	}
	{
		const reset = setCurrentInstance(instance);
		pauseTracking();
		try {
			applyOptions(instance);
		} finally {
			resetTracking();
			reset();
		}
	}
}
var attrsProxyHandlers = { get(target, key) {
	track(target, "get", "");
	return target[key];
} };
function createSetupContext(instance) {
	const expose = (exposed) => {
		instance.exposed = exposed || {};
	};
	return {
		attrs: new Proxy(instance.attrs, attrsProxyHandlers),
		slots: instance.slots,
		emit: instance.emit,
		expose
	};
}
function getComponentPublicInstance(instance) {
	if (instance.exposed) return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
		get(target, key) {
			if (key in target) return target[key];
			else if (key in publicPropertiesMap) return publicPropertiesMap[key](instance);
		},
		has(target, key) {
			return key in target || key in publicPropertiesMap;
		}
	}));
	else return instance.proxy;
}
function getComponentName$1(Component, includeInferred = true) {
	return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function isClassComponent(value) {
	return isFunction(value) && "__vccOpts" in value;
}
var computed = (getterOrOptions, debugOptions) => {
	return /* @__PURE__ */ computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
function h(type, propsOrChildren, children) {
	try {
		setBlockTracking(-1);
		const l = arguments.length;
		if (l === 2) if (isObject(propsOrChildren) && !isArray$1(propsOrChildren)) {
			if (isVNode(propsOrChildren)) return createVNode(type, null, [propsOrChildren]);
			return createVNode(type, propsOrChildren);
		} else return createVNode(type, null, propsOrChildren);
		else {
			if (l > 3) children = Array.prototype.slice.call(arguments, 2);
			else if (l === 3 && isVNode(children)) children = [children];
			return createVNode(type, propsOrChildren, children);
		}
	} finally {
		setBlockTracking(1);
	}
}
var version = "3.5.32";
//#endregion
//#region ../../node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var policy = void 0;
var tt = typeof window !== "undefined" && window.trustedTypes;
if (tt) try {
	policy = /* @__PURE__ */ tt.createPolicy("vue", { createHTML: (val) => val });
} catch (e) {}
var unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
var svgNS = "http://www.w3.org/2000/svg";
var mathmlNS = "http://www.w3.org/1998/Math/MathML";
var doc = typeof document !== "undefined" ? document : null;
var templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
var nodeOps = {
	insert: (child, parent, anchor) => {
		parent.insertBefore(child, anchor || null);
	},
	remove: (child) => {
		const parent = child.parentNode;
		if (parent) parent.removeChild(child);
	},
	createElement: (tag, namespace, is, props) => {
		const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
		if (tag === "select" && props && props.multiple != null) el.setAttribute("multiple", props.multiple);
		return el;
	},
	createText: (text) => doc.createTextNode(text),
	createComment: (text) => doc.createComment(text),
	setText: (node, text) => {
		node.nodeValue = text;
	},
	setElementText: (el, text) => {
		el.textContent = text;
	},
	parentNode: (node) => node.parentNode,
	nextSibling: (node) => node.nextSibling,
	querySelector: (selector) => doc.querySelector(selector),
	setScopeId(el, id) {
		el.setAttribute(id, "");
	},
	insertStaticContent(content, parent, anchor, namespace, start, end) {
		const before = anchor ? anchor.previousSibling : parent.lastChild;
		if (start && (start === end || start.nextSibling)) while (true) {
			parent.insertBefore(start.cloneNode(true), anchor);
			if (start === end || !(start = start.nextSibling)) break;
		}
		else {
			templateContainer.innerHTML = unsafeToTrustedHTML(namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content);
			const template = templateContainer.content;
			if (namespace === "svg" || namespace === "mathml") {
				const wrapper = template.firstChild;
				while (wrapper.firstChild) template.appendChild(wrapper.firstChild);
				template.removeChild(wrapper);
			}
			parent.insertBefore(template, anchor);
		}
		return [before ? before.nextSibling : parent.firstChild, anchor ? anchor.previousSibling : parent.lastChild];
	}
};
var vtcKey = /* @__PURE__ */ Symbol("_vtc");
function patchClass(el, value, isSVG) {
	const transitionClasses = el[vtcKey];
	if (transitionClasses) value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
	if (value == null) el.removeAttribute("class");
	else if (isSVG) el.setAttribute("class", value);
	else el.className = value;
}
var vShowOriginalDisplay = /* @__PURE__ */ Symbol("_vod");
var vShowHidden = /* @__PURE__ */ Symbol("_vsh");
var CSS_VAR_TEXT = /* @__PURE__ */ Symbol("");
var displayRE = /(?:^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
	const style = el.style;
	const isCssString = isString$1(next);
	let hasControlledDisplay = false;
	if (next && !isCssString) {
		if (prev) if (!isString$1(prev)) {
			for (const key in prev) if (next[key] == null) setStyle(style, key, "");
		} else for (const prevStyle of prev.split(";")) {
			const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
			if (next[key] == null) setStyle(style, key, "");
		}
		for (const key in next) {
			if (key === "display") hasControlledDisplay = true;
			setStyle(style, key, next[key]);
		}
	} else if (isCssString) {
		if (prev !== next) {
			const cssVarText = style[CSS_VAR_TEXT];
			if (cssVarText) next += ";" + cssVarText;
			style.cssText = next;
			hasControlledDisplay = displayRE.test(next);
		}
	} else if (prev) el.removeAttribute("style");
	if (vShowOriginalDisplay in el) {
		el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
		if (el[vShowHidden]) style.display = "none";
	}
}
var importantRE = /\s*!important$/;
function setStyle(style, name, val) {
	if (isArray$1(val)) val.forEach((v) => setStyle(style, name, v));
	else {
		if (val == null) val = "";
		if (name.startsWith("--")) style.setProperty(name, val);
		else {
			const prefixed = autoPrefix(style, name);
			if (importantRE.test(val)) style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
			else style[prefixed] = val;
		}
	}
}
var prefixes = [
	"Webkit",
	"Moz",
	"ms"
];
var prefixCache = {};
function autoPrefix(style, rawName) {
	const cached = prefixCache[rawName];
	if (cached) return cached;
	let name = camelize(rawName);
	if (name !== "filter" && name in style) return prefixCache[rawName] = name;
	name = capitalize(name);
	for (let i = 0; i < prefixes.length; i++) {
		const prefixed = prefixes[i] + name;
		if (prefixed in style) return prefixCache[rawName] = prefixed;
	}
	return rawName;
}
var xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance, isBoolean = isSpecialBooleanAttr(key)) {
	if (isSVG && key.startsWith("xlink:")) if (value == null) el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
	else el.setAttributeNS(xlinkNS, key, value);
	else if (value == null || isBoolean && !includeBooleanAttr(value)) el.removeAttribute(key);
	else el.setAttribute(key, isBoolean ? "" : isSymbol(value) ? String(value) : value);
}
function patchDOMProp(el, key, value, parentComponent, attrName) {
	if (key === "innerHTML" || key === "textContent") {
		if (value != null) el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
		return;
	}
	const tag = el.tagName;
	if (key === "value" && tag !== "PROGRESS" && !tag.includes("-")) {
		const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
		const newValue = value == null ? el.type === "checkbox" ? "on" : "" : String(value);
		if (oldValue !== newValue || !("_value" in el)) el.value = newValue;
		if (value == null) el.removeAttribute(key);
		el._value = value;
		return;
	}
	let needRemove = false;
	if (value === "" || value == null) {
		const type = typeof el[key];
		if (type === "boolean") value = includeBooleanAttr(value);
		else if (value == null && type === "string") {
			value = "";
			needRemove = true;
		} else if (type === "number") {
			value = 0;
			needRemove = true;
		}
	}
	try {
		el[key] = value;
	} catch (e) {}
	needRemove && el.removeAttribute(attrName || key);
}
function addEventListener(el, event, handler, options) {
	el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
	el.removeEventListener(event, handler, options);
}
var veiKey = /* @__PURE__ */ Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
	const invokers = el[veiKey] || (el[veiKey] = {});
	const existingInvoker = invokers[rawName];
	if (nextValue && existingInvoker) existingInvoker.value = nextValue;
	else {
		const [name, options] = parseName(rawName);
		if (nextValue) addEventListener(el, name, invokers[rawName] = createInvoker(nextValue, instance), options);
		else if (existingInvoker) {
			removeEventListener(el, name, existingInvoker, options);
			invokers[rawName] = void 0;
		}
	}
}
var optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
	let options;
	if (optionsModifierRE.test(name)) {
		options = {};
		let m;
		while (m = name.match(optionsModifierRE)) {
			name = name.slice(0, name.length - m[0].length);
			options[m[0].toLowerCase()] = true;
		}
	}
	return [name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2)), options];
}
var cachedNow = 0;
var p = /* @__PURE__ */ Promise.resolve();
var getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
	const invoker = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= invoker.attached) return;
		callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
	};
	invoker.value = initialValue;
	invoker.attached = getNow();
	return invoker;
}
function patchStopImmediatePropagation(e, value) {
	if (isArray$1(value)) {
		const originalStop = e.stopImmediatePropagation;
		e.stopImmediatePropagation = () => {
			originalStop.call(e);
			e._stopped = true;
		};
		return value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
	} else return value;
}
var isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
var patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
	const isSVG = namespace === "svg";
	if (key === "class") patchClass(el, nextValue, isSVG);
	else if (key === "style") patchStyle(el, prevValue, nextValue);
	else if (isOn(key)) {
		if (!isModelListener(key)) patchEvent(el, key, prevValue, nextValue, parentComponent);
	} else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
		patchDOMProp(el, key, nextValue);
		if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
	} else if (el._isVueCE && (shouldSetAsPropForVueCE(el, key) || el._def.__asyncLoader && (/[A-Z]/.test(key) || !isString$1(nextValue)))) patchDOMProp(el, camelize(key), nextValue, parentComponent, key);
	else {
		if (key === "true-value") el._trueValue = nextValue;
		else if (key === "false-value") el._falseValue = nextValue;
		patchAttr(el, key, nextValue, isSVG);
	}
};
function shouldSetAsProp(el, key, value, isSVG) {
	if (isSVG) {
		if (key === "innerHTML" || key === "textContent") return true;
		if (key in el && isNativeOn(key) && isFunction(value)) return true;
		return false;
	}
	if (key === "spellcheck" || key === "draggable" || key === "translate" || key === "autocorrect") return false;
	if (key === "sandbox" && el.tagName === "IFRAME") return false;
	if (key === "form") return false;
	if (key === "list" && el.tagName === "INPUT") return false;
	if (key === "type" && el.tagName === "TEXTAREA") return false;
	if (key === "width" || key === "height") {
		const tag = el.tagName;
		if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") return false;
	}
	if (isNativeOn(key) && isString$1(value)) return false;
	return key in el;
}
function shouldSetAsPropForVueCE(el, key) {
	const props = el._def.props;
	if (!props) return false;
	const camelKey = camelize(key);
	return Array.isArray(props) ? props.some((prop) => camelize(prop) === camelKey) : Object.keys(props).some((prop) => camelize(prop) === camelKey);
}
var getModelAssigner = (vnode) => {
	const fn = vnode.props["onUpdate:modelValue"] || false;
	return isArray$1(fn) ? (value) => invokeArrayFns(fn, value) : fn;
};
function onCompositionStart(e) {
	e.target.composing = true;
}
function onCompositionEnd(e) {
	const target = e.target;
	if (target.composing) {
		target.composing = false;
		target.dispatchEvent(new Event("input"));
	}
}
var assignKey = /* @__PURE__ */ Symbol("_assign");
function castValue(value, trim, number) {
	if (trim) value = value.trim();
	if (number) value = looseToNumber(value);
	return value;
}
var vModelText = {
	created(el, { modifiers: { lazy, trim, number } }, vnode) {
		el[assignKey] = getModelAssigner(vnode);
		const castToNumber = number || vnode.props && vnode.props.type === "number";
		addEventListener(el, lazy ? "change" : "input", (e) => {
			if (e.target.composing) return;
			el[assignKey](castValue(el.value, trim, castToNumber));
		});
		if (trim || castToNumber) addEventListener(el, "change", () => {
			el.value = castValue(el.value, trim, castToNumber);
		});
		if (!lazy) {
			addEventListener(el, "compositionstart", onCompositionStart);
			addEventListener(el, "compositionend", onCompositionEnd);
			addEventListener(el, "change", onCompositionEnd);
		}
	},
	mounted(el, { value }) {
		el.value = value == null ? "" : value;
	},
	beforeUpdate(el, { value, oldValue, modifiers: { lazy, trim, number } }, vnode) {
		el[assignKey] = getModelAssigner(vnode);
		if (el.composing) return;
		const elValue = (number || el.type === "number") && !/^0\d/.test(el.value) ? looseToNumber(el.value) : el.value;
		const newValue = value == null ? "" : value;
		if (elValue === newValue) return;
		const rootNode = el.getRootNode();
		if ((rootNode instanceof Document || rootNode instanceof ShadowRoot) && rootNode.activeElement === el && el.type !== "range") {
			if (lazy && value === oldValue) return;
			if (trim && el.value.trim() === newValue) return;
		}
		el.value = newValue;
	}
};
var vModelCheckbox = {
	deep: true,
	created(el, _, vnode) {
		el[assignKey] = getModelAssigner(vnode);
		addEventListener(el, "change", () => {
			const modelValue = el._modelValue;
			const elementValue = getValue(el);
			const checked = el.checked;
			const assign = el[assignKey];
			if (isArray$1(modelValue)) {
				const index = looseIndexOf(modelValue, elementValue);
				const found = index !== -1;
				if (checked && !found) assign(modelValue.concat(elementValue));
				else if (!checked && found) {
					const filtered = [...modelValue];
					filtered.splice(index, 1);
					assign(filtered);
				}
			} else if (isSet$1(modelValue)) {
				const cloned = new Set(modelValue);
				if (checked) cloned.add(elementValue);
				else cloned.delete(elementValue);
				assign(cloned);
			} else assign(getCheckboxValue(el, checked));
		});
	},
	mounted: setChecked,
	beforeUpdate(el, binding, vnode) {
		el[assignKey] = getModelAssigner(vnode);
		setChecked(el, binding, vnode);
	}
};
function setChecked(el, { value, oldValue }, vnode) {
	el._modelValue = value;
	let checked;
	if (isArray$1(value)) checked = looseIndexOf(value, vnode.props.value) > -1;
	else if (isSet$1(value)) checked = value.has(vnode.props.value);
	else {
		if (value === oldValue) return;
		checked = looseEqual(value, getCheckboxValue(el, true));
	}
	if (el.checked !== checked) el.checked = checked;
}
var vModelRadio = {
	created(el, { value }, vnode) {
		el.checked = looseEqual(value, vnode.props.value);
		el[assignKey] = getModelAssigner(vnode);
		addEventListener(el, "change", () => {
			el[assignKey](getValue(el));
		});
	},
	beforeUpdate(el, { value, oldValue }, vnode) {
		el[assignKey] = getModelAssigner(vnode);
		if (value !== oldValue) el.checked = looseEqual(value, vnode.props.value);
	}
};
var vModelSelect = {
	deep: true,
	created(el, { value, modifiers: { number } }, vnode) {
		const isSetModel = isSet$1(value);
		addEventListener(el, "change", () => {
			const selectedVal = Array.prototype.filter.call(el.options, (o) => o.selected).map((o) => number ? looseToNumber(getValue(o)) : getValue(o));
			el[assignKey](el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
			el._assigning = true;
			nextTick(() => {
				el._assigning = false;
			});
		});
		el[assignKey] = getModelAssigner(vnode);
	},
	mounted(el, { value }) {
		setSelected(el, value);
	},
	beforeUpdate(el, _binding, vnode) {
		el[assignKey] = getModelAssigner(vnode);
	},
	updated(el, { value }) {
		if (!el._assigning) setSelected(el, value);
	}
};
function setSelected(el, value) {
	const isMultiple = el.multiple;
	const isArrayValue = isArray$1(value);
	if (isMultiple && !isArrayValue && !isSet$1(value)) return;
	for (let i = 0, l = el.options.length; i < l; i++) {
		const option = el.options[i];
		const optionValue = getValue(option);
		if (isMultiple) if (isArrayValue) {
			const optionType = typeof optionValue;
			if (optionType === "string" || optionType === "number") option.selected = value.some((v) => String(v) === String(optionValue));
			else option.selected = looseIndexOf(value, optionValue) > -1;
		} else option.selected = value.has(optionValue);
		else if (looseEqual(getValue(option), value)) {
			if (el.selectedIndex !== i) el.selectedIndex = i;
			return;
		}
	}
	if (!isMultiple && el.selectedIndex !== -1) el.selectedIndex = -1;
}
function getValue(el) {
	return "_value" in el ? el._value : el.value;
}
function getCheckboxValue(el, checked) {
	const key = checked ? "_trueValue" : "_falseValue";
	return key in el ? el[key] : checked;
}
var vModelDynamic = {
	created(el, binding, vnode) {
		callModelHook(el, binding, vnode, null, "created");
	},
	mounted(el, binding, vnode) {
		callModelHook(el, binding, vnode, null, "mounted");
	},
	beforeUpdate(el, binding, vnode, prevVNode) {
		callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
	},
	updated(el, binding, vnode, prevVNode) {
		callModelHook(el, binding, vnode, prevVNode, "updated");
	}
};
function resolveDynamicModel(tagName, type) {
	switch (tagName) {
		case "SELECT": return vModelSelect;
		case "TEXTAREA": return vModelText;
		default: switch (type) {
			case "checkbox": return vModelCheckbox;
			case "radio": return vModelRadio;
			default: return vModelText;
		}
	}
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
	const fn = resolveDynamicModel(el.tagName, vnode.props && vnode.props.type)[hook];
	fn && fn(el, binding, vnode, prevVNode);
}
var systemModifiers = [
	"ctrl",
	"shift",
	"alt",
	"meta"
];
var modifierGuards = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
};
var withModifiers = (fn, modifiers) => {
	if (!fn) return fn;
	const cache = fn._withMods || (fn._withMods = {});
	const cacheKey = modifiers.join(".");
	return cache[cacheKey] || (cache[cacheKey] = ((event, ...args) => {
		for (let i = 0; i < modifiers.length; i++) {
			const guard = modifierGuards[modifiers[i]];
			if (guard && guard(event, modifiers)) return;
		}
		return fn(event, ...args);
	}));
};
var keyNames = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
};
var withKeys = (fn, modifiers) => {
	const cache = fn._withKeys || (fn._withKeys = {});
	const cacheKey = modifiers.join(".");
	return cache[cacheKey] || (cache[cacheKey] = ((event) => {
		if (!("key" in event)) return;
		const eventKey = hyphenate(event.key);
		if (modifiers.some((k) => k === eventKey || keyNames[k] === eventKey)) return fn(event);
	}));
};
var rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
var renderer;
function ensureRenderer() {
	return renderer || (renderer = createRenderer(rendererOptions));
}
var createApp = ((...args) => {
	const app = ensureRenderer().createApp(...args);
	const { mount } = app;
	app.mount = (containerOrSelector) => {
		const container = normalizeContainer(containerOrSelector);
		if (!container) return;
		const component = app._component;
		if (!isFunction(component) && !component.render && !component.template) component.template = container.innerHTML;
		if (container.nodeType === 1) container.textContent = "";
		const proxy = mount(container, false, resolveRootNamespace(container));
		if (container instanceof Element) {
			container.removeAttribute("v-cloak");
			container.setAttribute("data-v-app", "");
		}
		return proxy;
	};
	return app;
});
function resolveRootNamespace(container) {
	if (container instanceof SVGElement) return "svg";
	if (typeof MathMLElement === "function" && container instanceof MathMLElement) return "mathml";
}
function normalizeContainer(container) {
	if (isString$1(container)) return document.querySelector(container);
	return container;
}
//#endregion
//#region ../../packages/icon-lib-default/dist/f/index.js
function injectSpritesheet() {
	const spritesheet = "<svg xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\"><symbol id=\"f-icon-triangle\" xml:space=\"preserve\" viewBox=\"0 0 512 512\"><path d=\"M215.1 75.68c18.17-31.5 63.63-31.5 81.8 0l177.95 308.45c18.16 31.48-4.56 70.82-40.9 70.82H78.05c-36.34 0-59.06-39.34-40.9-70.82z\" style=\"fill:currentColor\"/><path d=\"m331.89 66.64 165.1 286.16c33.7 58.41-8.46 131.4-75.89 131.4H90.91c-67.43 0-109.59-72.99-75.89-131.4L180.11 66.64c33.72-58.44 118.06-58.44 151.78 0m-37.94 21.89c-16.86-29.22-59.03-29.22-75.89 0L52.96 374.7c-16.85 29.2 4.23 65.7 37.95 65.7H421.1c33.72 0 54.79-36.49 37.95-65.7z\" style=\"fill-rule:evenodd;clip-rule:evenodd\"/></symbol><symbol id=\"f-icon-trashcan\" xml:space=\"preserve\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M387.4 133H140.7c-25.2 0-44.9 19.6-44.9 44.9l22.4 286c0 25.2 19.6 44.9 44.9 44.9H365c25.2 0 44.9-19.6 44.9-44.9l22.4-283.2c0-28.1-19.7-47.7-44.9-47.7M205.2 435.8c0 11.2-8.4 19.6-19.6 19.6S166 447 166 435.8V203.1c0-11.2 8.4-19.6 19.6-19.6s19.6 8.4 19.6 19.6zm78.5 2.8c0 11.2-8.4 19.6-19.6 19.6s-19.6-8.4-19.6-19.6V203.1c0-11.2 8.4-19.6 19.6-19.6s19.6 8.4 19.6 19.6zm81.3 0c0 11.2-8.4 19.6-19.6 19.6s-22.4-8.4-22.4-19.6V205.9c0-11.2 8.4-19.6 19.6-19.6s19.6 8.4 19.6 19.6v232.7zM437.9 68.5H365V23.7C365 12.5 356.6 4 345.3 4H182.7c-11.2 0-19.6 8.4-19.6 19.6v44.9H90.2C79 68.5 70.6 79.7 70.6 91s8.4 19.6 19.6 19.6h347.7c11.2 0 19.6-8.4 19.6-19.6s-8.4-22.5-19.6-22.5M205.2 46.1H323v25.2H205.2z\"/></symbol><symbol id=\"f-icon-success\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"m173.898 439.404-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001\"/></symbol><symbol id=\"f-icon-sort\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M137 288h238c21.4 0 32.1 25.9 17 41L273 448c-9.4 9.4-24.6 9.4-33.9 0L120 329c-15.1-15.1-4.4-41 17-41m255-105L273 64c-9.4-9.4-24.6-9.4-33.9 0L120 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41\"/></symbol><symbol id=\"f-icon-search\" viewBox=\"0 0 512 512\"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M505 442.7 405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34M208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128\"/></symbol><symbol id=\"f-icon-plus\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M448 208H304V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H64c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32\"/></symbol><symbol id=\"f-icon-pic\" viewBox=\"0 0 512 512\"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm323.8 106.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6-26.5-33.1c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4S78.8 416 88 416h336c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7zM112 192c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48\"/></symbol><symbol id=\"f-icon-pen\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"m290.74 93.24 128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22zm207.2-19.06-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91\"/></symbol><symbol id=\"f-icon-pdf\" viewBox=\"-64 0 512 512\"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0zm192 0v128h128zM64 224h24c30.9 0 56 25.1 56 56s-25.1 56-56 56h-8v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V240c0-8.8 7.2-16 16-16m24 80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v48zm72-64c0-8.8 7.2-16 16-16h24c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-24c-8.8 0-16-7.2-16-16zm32 112h8c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-8zm96-128h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V240c0-8.8 7.2-16 16-16\"/></symbol><symbol id=\"f-icon-paper-clip\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M75.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L286.392 34c44.316-45.332 116.351-45.336 160.671 0 43.89 44.894 43.943 117.329 0 162.276L264.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L203.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292 4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798-19.189-19.627-49.957-19.637-69.154 0L122.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313 34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485\"/></symbol><symbol id=\"f-icon-new-window\" xml:space=\"preserve\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M455.1 464.4H46.2V55.5h166.6V8.7H-1V512h503.3V298.2h-47.2z\"/><path fill=\"currentColor\" d=\"M460.3 0H317v52.1h105.9L275.3 199.9l37.5 37.1L460.3 89.6v106.2h52.1V0z\"/></symbol><symbol id=\"f-icon-i\" xml:space=\"preserve\" x=\"0\" y=\"0\" viewBox=\"0 0 512 512\"><style>.i{fill:currentColor}</style><path d=\"M228.25 243.12c0-15.33 12.42-27.75 27.75-27.75s27.75 12.43 27.75 27.75v117.19c0 15.33-12.43 27.75-27.75 27.75-15.33 0-27.75-12.43-27.75-27.75zM285.09 153.03c0 16.07-13.02 29.09-29.09 29.09s-29.09-13.02-29.09-29.09 13.02-29.09 29.09-29.09 29.09 13.02 29.09 29.09\" class=\"i\"/></symbol><symbol id=\"f-icon-file\" viewBox=\"-64 0 512 512\"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm384 64H256V0z\"/></symbol><symbol id=\"f-icon-error\" viewBox=\"0 0 512 512\"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7.2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8.2-40.1l216-368C228.7 39.5 241.8 32 256 32m0 128c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24m32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32\"/></symbol><symbol id=\"f-icon-ellipsis\" viewBox=\"0 0 512 512\"><!--!Font Awesome Free v6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M40 256a56 56 0 1 1 112 0 56 56 0 1 1-112 0m160 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0m216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112\"/></symbol><symbol id=\"f-icon-doc\" viewBox=\"-64 0 512 512\"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0zm192 0v128h128zM111 257.1l26.8 89.2 31.6-90.3c3.4-9.6 12.5-16.1 22.7-16.1s19.3 6.4 22.7 16.1l31.6 90.3 26.6-89.2c3.8-12.7 17.2-19.9 29.9-16.1s19.9 17.2 16.1 29.9l-48 160c-3 10-12.1 16.9-22.4 17.1s-19.8-6.2-23.2-16.1L192 336.6l-33.3 95.3c-3.4 9.8-12.8 16.3-23.2 16.1s-19.5-7.1-22.4-17.1l-48-160c-3.8-12.7 3.4-26.1 16.1-29.9s26.1 3.4 29.9 16.1z\"/></symbol><symbol id=\"f-icon-dash\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M448 208H64c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32\"/></symbol><symbol id=\"f-icon-cross\" fill=\"none\" viewBox=\"0 0 13 13\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"2\" d=\"m1 1 11 11M12 1 1 12\"/></symbol><symbol id=\"f-icon-close\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"m322.72 256 100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L256 189.28 155.93 89.21c-12.28-12.28-32.19-12.28-44.48 0l-22.24 22.24c-12.28 12.28-12.28 32.19 0 44.48L189.28 256 89.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L256 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48z\"/></symbol><symbol id=\"f-icon-circle\" xml:space=\"preserve\" viewBox=\"0 0 512 512\"><path d=\"M489.5 256c0 129-104.6 233.5-233.5 233.5C127 489.5 22.5 385 22.5 256S127 22.5 256 22.5 489.5 127 489.5 256\" style=\"fill:currentColor\"/><path d=\"M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256M256 469.3c117.8 0 213.3-95.5 213.3-213.3S373.8 42.7 256 42.7 42.7 138.2 42.7 256 138.2 469.3 256 469.3\" style=\"fill-rule:evenodd;clip-rule:evenodd\"/></symbol><symbol id=\"f-icon-circle-notch-solid\" viewBox=\"0 0 512 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5\"/></symbol><symbol id=\"f-icon-chevrons-left\" viewBox=\"0 0 320 512\"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M34.5 239 228.9 44.7c9.4-9.4 24.6-9.4 33.9 0l22.7 22.7c9.4 9.4 9.4 24.5 0 33.9L131.5 256l154 154.8c9.3 9.4 9.3 24.5 0 33.9l-22.7 22.7c-9.4 9.4-24.6 9.4-33.9 0L34.5 273c-9.4-9.4-9.4-24.6 0-33.9z\"/></symbol><symbol id=\"f-icon-caret-up\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M384.662 352H127.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142\"/></symbol><symbol id=\"f-icon-caret-down\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M127.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L270.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L113.2 226.1c-12.6-12.6-3.7-34.1 14.1-34.1\"/></symbol><symbol id=\"f-icon-calendar\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M180 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12m108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12m96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12m-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12m-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12m192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12m96-260v352c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48m-48 346V160H80v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6\"/></symbol><symbol id=\"f-icon-bell\" fill=\"none\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M256.001 512c35.32 0 63.97-28.65 63.97-64h-127.94c0 35.35 28.65 64 63.97 64m215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C150.561 68.1 96.081 130.3 96.081 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71\"/></symbol><symbol id=\"f-icon-bars\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32\"/></symbol><symbol id=\"f-icon-arrow-right\" fill=\"none\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M381.476 272.971 187.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L284.505 256 130.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L381.475 239.03c9.373 9.372 9.373 24.568.001 33.941\"/></symbol><symbol id=\"f-icon-arrow-in-circle\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8m113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34\"/></symbol><symbol id=\"f-icon-arrow-down\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M239.373 380.982 45.03 186.638c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04l154.746 154.021L411.089 129.99c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L273.315 380.982c-9.373 9.372-24.569 9.372-33.942 0\"/></symbol><symbol id=\"f-icon-alert\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"m233.363 287.35-17.101-96.43c-3.45-19.48 15.314-36.92 39.737-36.92s43.187 17.43 39.737 36.92l-17.101 96.43c-1.613 9.08-11.256 15.82-22.636 15.82s-21.023-6.74-22.636-15.82M220 364.031c0-19.875 16.11-36 36-36 19.876 0 36 16.11 36 36s-16.11 36-36 36c-19.876 0-36-16.124-36-36\"/></symbol></svg>";
	const element = document.createElement("div");
	element.innerHTML = spritesheet;
	element.style.display = "none";
	element.setAttribute("aria-hidden", "true");
	element.setAttribute("data-icon-package", "@fkui/icon-lib-default");
	element.setAttribute("data-icon-library", "f");
	document.body.append(element);
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => {
	injectSpritesheet();
});
else injectSpritesheet();
//#endregion
//#region ../../packages/logic/lib/esm/index.js
/**
* Determine if a value is empty.
*
* A value is considered empty if it is:
*
* - `undefined`
* - `null`
* - empty string `""`.
*
* @public
* @param value - value to check if it is empty
*/
function isEmpty(value) {
	return !value;
}
/**
* Determine if a value is set. If it is undefined or null, this function
* returns false.
*
* @public
* @param value - the value for which to determine if it is set
*/
function isSet(value) {
	return value !== void 0 && value !== null;
}
/**
* @public
*/
function isString(value) {
	return typeof value === "string" || value instanceof String;
}
/**
* @public
*/
var configLogic = { production: true };
var DATE_REGEXP_WITH_DASH = /^\d{4}-\d{2}-\d{2}$/;
/**
* @public
*/
function validLimit(limit) {
	if (typeof limit !== "string" || isEmpty(limit)) throw new Error(`limit must be a non-empty string`);
	const limitAsString = limit;
	if (!DATE_REGEXP_WITH_DASH.test(limitAsString)) throw new Error(`limit has invalid format`);
	return limitAsString;
}
/**
* Executes a function when it stops being invoked for n seconds. Usually used together with resize,
* scroll and keyup/keydown-events to improve application's performance.
*
* Example:
*
* ```
*    window.addEventListener(
*        'resize',
*        debounce(computationalHeavyFunction, 1000),
*    );
* ```
*
* This will call the `computationalHeavyFunction` once if the resize-event hasn't been sent for 1000 ms.
*
* Example with immediate-flag:
*
* ```
*    window.addEventListener(
*        'resize',
*        debounce(computationalHeavyFunction, 1000, true),
*    );
* ```
*
* This will call the `computationalHeavyFunction` once BEFORE the resize-event has finished,
* and thereafter will not be able to be called again until the timeout has finished
*
* @public
* @param func - Function to be debounced.
* @param delay - Function execution threshold in milliseconds.
* @param immediate - Whether the function should be called at the beginning of the delay (Before the timeout) instead of the end.
* Default is false.
*/
function debounce(func, delay, immediate = false) {
	let timeout = null;
	return function functionToExecute(...args) {
		const timedOutFunction = () => {
			timeout = null;
			if (!immediate) func.apply(this, args);
		};
		const callNow = immediate && !timeout;
		if (timeout !== null) clearTimeout(timeout);
		timeout = setTimeout(timedOutFunction, delay);
		if (callNow) func.apply(this);
	};
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var lodash_clonedeep = { exports: {} };
/**
* lodash (Custom Build) <https://lodash.com/>
* Build: `lodash modularize exports="npm" -o ./`
* Copyright jQuery Foundation and other contributors <https://jquery.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
lodash_clonedeep.exports;
var hasRequiredLodash_clonedeep;
function requireLodash_clonedeep() {
	if (hasRequiredLodash_clonedeep) return lodash_clonedeep.exports;
	hasRequiredLodash_clonedeep = 1;
	(function(module, exports$1) {
		/** Used as the size to enable large array optimizations. */
		var LARGE_ARRAY_SIZE = 200;
		/** Used to stand-in for `undefined` hash values. */
		var HASH_UNDEFINED = "__lodash_hash_undefined__";
		/** Used as references for various `Number` constants. */
		var MAX_SAFE_INTEGER = 9007199254740991;
		/** `Object#toString` result references. */
		var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", promiseTag = "[object Promise]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
		var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
		/**
		* Used to match `RegExp`
		* [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
		*/
		var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
		/** Used to match `RegExp` flags from their coerced string values. */
		var reFlags = /\w*$/;
		/** Used to detect host constructors (Safari). */
		var reIsHostCtor = /^\[object .+?Constructor\]$/;
		/** Used to detect unsigned integer values. */
		var reIsUint = /^(?:0|[1-9]\d*)$/;
		/** Used to identify `toStringTag` values supported by `_.clone`. */
		var cloneableTags = {};
		cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
		cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
		/** Detect free variable `global` from Node.js. */
		var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
		/** Detect free variable `self`. */
		var freeSelf = typeof self == "object" && self && self.Object === Object && self;
		/** Used as a reference to the global object. */
		var root = freeGlobal || freeSelf || Function("return this")();
		/** Detect free variable `exports`. */
		var freeExports = exports$1 && !exports$1.nodeType && exports$1;
		/** Detect free variable `module`. */
		var freeModule = freeExports && module && !module.nodeType && module;
		/** Detect the popular CommonJS extension `module.exports`. */
		var moduleExports = freeModule && freeModule.exports === freeExports;
		/**
		* Adds the key-value `pair` to `map`.
		*
		* @private
		* @param {Object} map The map to modify.
		* @param {Array} pair The key-value pair to add.
		* @returns {Object} Returns `map`.
		*/
		function addMapEntry(map, pair) {
			map.set(pair[0], pair[1]);
			return map;
		}
		/**
		* Adds `value` to `set`.
		*
		* @private
		* @param {Object} set The set to modify.
		* @param {*} value The value to add.
		* @returns {Object} Returns `set`.
		*/
		function addSetEntry(set, value) {
			set.add(value);
			return set;
		}
		/**
		* A specialized version of `_.forEach` for arrays without support for
		* iteratee shorthands.
		*
		* @private
		* @param {Array} [array] The array to iterate over.
		* @param {Function} iteratee The function invoked per iteration.
		* @returns {Array} Returns `array`.
		*/
		function arrayEach(array, iteratee) {
			var index = -1, length = array ? array.length : 0;
			while (++index < length) if (iteratee(array[index], index, array) === false) break;
			return array;
		}
		/**
		* Appends the elements of `values` to `array`.
		*
		* @private
		* @param {Array} array The array to modify.
		* @param {Array} values The values to append.
		* @returns {Array} Returns `array`.
		*/
		function arrayPush(array, values) {
			var index = -1, length = values.length, offset = array.length;
			while (++index < length) array[offset + index] = values[index];
			return array;
		}
		/**
		* A specialized version of `_.reduce` for arrays without support for
		* iteratee shorthands.
		*
		* @private
		* @param {Array} [array] The array to iterate over.
		* @param {Function} iteratee The function invoked per iteration.
		* @param {*} [accumulator] The initial value.
		* @param {boolean} [initAccum] Specify using the first element of `array` as
		*  the initial value.
		* @returns {*} Returns the accumulated value.
		*/
		function arrayReduce(array, iteratee, accumulator, initAccum) {
			var index = -1, length = array ? array.length : 0;
			while (++index < length) accumulator = iteratee(accumulator, array[index], index, array);
			return accumulator;
		}
		/**
		* The base implementation of `_.times` without support for iteratee shorthands
		* or max array length checks.
		*
		* @private
		* @param {number} n The number of times to invoke `iteratee`.
		* @param {Function} iteratee The function invoked per iteration.
		* @returns {Array} Returns the array of results.
		*/
		function baseTimes(n, iteratee) {
			var index = -1, result = Array(n);
			while (++index < n) result[index] = iteratee(index);
			return result;
		}
		/**
		* Gets the value at `key` of `object`.
		*
		* @private
		* @param {Object} [object] The object to query.
		* @param {string} key The key of the property to get.
		* @returns {*} Returns the property value.
		*/
		function getValue(object, key) {
			return object == null ? void 0 : object[key];
		}
		/**
		* Checks if `value` is a host object in IE < 9.
		*
		* @private
		* @param {*} value The value to check.
		* @returns {boolean} Returns `true` if `value` is a host object, else `false`.
		*/
		function isHostObject(value) {
			var result = false;
			if (value != null && typeof value.toString != "function") try {
				result = !!(value + "");
			} catch (e) {}
			return result;
		}
		/**
		* Converts `map` to its key-value pairs.
		*
		* @private
		* @param {Object} map The map to convert.
		* @returns {Array} Returns the key-value pairs.
		*/
		function mapToArray(map) {
			var index = -1, result = Array(map.size);
			map.forEach(function(value, key) {
				result[++index] = [key, value];
			});
			return result;
		}
		/**
		* Creates a unary function that invokes `func` with its argument transformed.
		*
		* @private
		* @param {Function} func The function to wrap.
		* @param {Function} transform The argument transform.
		* @returns {Function} Returns the new function.
		*/
		function overArg(func, transform) {
			return function(arg) {
				return func(transform(arg));
			};
		}
		/**
		* Converts `set` to an array of its values.
		*
		* @private
		* @param {Object} set The set to convert.
		* @returns {Array} Returns the values.
		*/
		function setToArray(set) {
			var index = -1, result = Array(set.size);
			set.forEach(function(value) {
				result[++index] = value;
			});
			return result;
		}
		/** Used for built-in method references. */
		var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
		/** Used to detect overreaching core-js shims. */
		var coreJsData = root["__core-js_shared__"];
		/** Used to detect methods masquerading as native. */
		var maskSrcKey = function() {
			var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
			return uid ? "Symbol(src)_1." + uid : "";
		}();
		/** Used to resolve the decompiled source of functions. */
		var funcToString = funcProto.toString;
		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;
		/**
		* Used to resolve the
		* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
		* of values.
		*/
		var objectToString = objectProto.toString;
		/** Used to detect if a method is native. */
		var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
		/** Built-in value references. */
		var Buffer = moduleExports ? root.Buffer : void 0, Symbol = root.Symbol, Uint8Array = root.Uint8Array, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice;
		var nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0, nativeKeys = overArg(Object.keys, Object);
		var DataView = getNative(root, "DataView"), Map = getNative(root, "Map"), Promise = getNative(root, "Promise"), Set = getNative(root, "Set"), WeakMap = getNative(root, "WeakMap"), nativeCreate = getNative(Object, "create");
		/** Used to detect maps, sets, and weakmaps. */
		var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
		/** Used to convert symbols to primitives and strings. */
		var symbolProto = Symbol ? Symbol.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
		/**
		* Creates a hash object.
		*
		* @private
		* @constructor
		* @param {Array} [entries] The key-value pairs to cache.
		*/
		function Hash(entries) {
			var index = -1, length = entries ? entries.length : 0;
			this.clear();
			while (++index < length) {
				var entry = entries[index];
				this.set(entry[0], entry[1]);
			}
		}
		/**
		* Removes all key-value entries from the hash.
		*
		* @private
		* @name clear
		* @memberOf Hash
		*/
		function hashClear() {
			this.__data__ = nativeCreate ? nativeCreate(null) : {};
		}
		/**
		* Removes `key` and its value from the hash.
		*
		* @private
		* @name delete
		* @memberOf Hash
		* @param {Object} hash The hash to modify.
		* @param {string} key The key of the value to remove.
		* @returns {boolean} Returns `true` if the entry was removed, else `false`.
		*/
		function hashDelete(key) {
			return this.has(key) && delete this.__data__[key];
		}
		/**
		* Gets the hash value for `key`.
		*
		* @private
		* @name get
		* @memberOf Hash
		* @param {string} key The key of the value to get.
		* @returns {*} Returns the entry value.
		*/
		function hashGet(key) {
			var data = this.__data__;
			if (nativeCreate) {
				var result = data[key];
				return result === HASH_UNDEFINED ? void 0 : result;
			}
			return hasOwnProperty.call(data, key) ? data[key] : void 0;
		}
		/**
		* Checks if a hash value for `key` exists.
		*
		* @private
		* @name has
		* @memberOf Hash
		* @param {string} key The key of the entry to check.
		* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		*/
		function hashHas(key) {
			var data = this.__data__;
			return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
		}
		/**
		* Sets the hash `key` to `value`.
		*
		* @private
		* @name set
		* @memberOf Hash
		* @param {string} key The key of the value to set.
		* @param {*} value The value to set.
		* @returns {Object} Returns the hash instance.
		*/
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
		/**
		* Creates an list cache object.
		*
		* @private
		* @constructor
		* @param {Array} [entries] The key-value pairs to cache.
		*/
		function ListCache(entries) {
			var index = -1, length = entries ? entries.length : 0;
			this.clear();
			while (++index < length) {
				var entry = entries[index];
				this.set(entry[0], entry[1]);
			}
		}
		/**
		* Removes all key-value entries from the list cache.
		*
		* @private
		* @name clear
		* @memberOf ListCache
		*/
		function listCacheClear() {
			this.__data__ = [];
		}
		/**
		* Removes `key` and its value from the list cache.
		*
		* @private
		* @name delete
		* @memberOf ListCache
		* @param {string} key The key of the value to remove.
		* @returns {boolean} Returns `true` if the entry was removed, else `false`.
		*/
		function listCacheDelete(key) {
			var data = this.__data__, index = assocIndexOf(data, key);
			if (index < 0) return false;
			if (index == data.length - 1) data.pop();
			else splice.call(data, index, 1);
			return true;
		}
		/**
		* Gets the list cache value for `key`.
		*
		* @private
		* @name get
		* @memberOf ListCache
		* @param {string} key The key of the value to get.
		* @returns {*} Returns the entry value.
		*/
		function listCacheGet(key) {
			var data = this.__data__, index = assocIndexOf(data, key);
			return index < 0 ? void 0 : data[index][1];
		}
		/**
		* Checks if a list cache value for `key` exists.
		*
		* @private
		* @name has
		* @memberOf ListCache
		* @param {string} key The key of the entry to check.
		* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		*/
		function listCacheHas(key) {
			return assocIndexOf(this.__data__, key) > -1;
		}
		/**
		* Sets the list cache `key` to `value`.
		*
		* @private
		* @name set
		* @memberOf ListCache
		* @param {string} key The key of the value to set.
		* @param {*} value The value to set.
		* @returns {Object} Returns the list cache instance.
		*/
		function listCacheSet(key, value) {
			var data = this.__data__, index = assocIndexOf(data, key);
			if (index < 0) data.push([key, value]);
			else data[index][1] = value;
			return this;
		}
		ListCache.prototype.clear = listCacheClear;
		ListCache.prototype["delete"] = listCacheDelete;
		ListCache.prototype.get = listCacheGet;
		ListCache.prototype.has = listCacheHas;
		ListCache.prototype.set = listCacheSet;
		/**
		* Creates a map cache object to store key-value pairs.
		*
		* @private
		* @constructor
		* @param {Array} [entries] The key-value pairs to cache.
		*/
		function MapCache(entries) {
			var index = -1, length = entries ? entries.length : 0;
			this.clear();
			while (++index < length) {
				var entry = entries[index];
				this.set(entry[0], entry[1]);
			}
		}
		/**
		* Removes all key-value entries from the map.
		*
		* @private
		* @name clear
		* @memberOf MapCache
		*/
		function mapCacheClear() {
			this.__data__ = {
				"hash": new Hash(),
				"map": new (Map || ListCache)(),
				"string": new Hash()
			};
		}
		/**
		* Removes `key` and its value from the map.
		*
		* @private
		* @name delete
		* @memberOf MapCache
		* @param {string} key The key of the value to remove.
		* @returns {boolean} Returns `true` if the entry was removed, else `false`.
		*/
		function mapCacheDelete(key) {
			return getMapData(this, key)["delete"](key);
		}
		/**
		* Gets the map value for `key`.
		*
		* @private
		* @name get
		* @memberOf MapCache
		* @param {string} key The key of the value to get.
		* @returns {*} Returns the entry value.
		*/
		function mapCacheGet(key) {
			return getMapData(this, key).get(key);
		}
		/**
		* Checks if a map value for `key` exists.
		*
		* @private
		* @name has
		* @memberOf MapCache
		* @param {string} key The key of the entry to check.
		* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		*/
		function mapCacheHas(key) {
			return getMapData(this, key).has(key);
		}
		/**
		* Sets the map `key` to `value`.
		*
		* @private
		* @name set
		* @memberOf MapCache
		* @param {string} key The key of the value to set.
		* @param {*} value The value to set.
		* @returns {Object} Returns the map cache instance.
		*/
		function mapCacheSet(key, value) {
			getMapData(this, key).set(key, value);
			return this;
		}
		MapCache.prototype.clear = mapCacheClear;
		MapCache.prototype["delete"] = mapCacheDelete;
		MapCache.prototype.get = mapCacheGet;
		MapCache.prototype.has = mapCacheHas;
		MapCache.prototype.set = mapCacheSet;
		/**
		* Creates a stack cache object to store key-value pairs.
		*
		* @private
		* @constructor
		* @param {Array} [entries] The key-value pairs to cache.
		*/
		function Stack(entries) {
			this.__data__ = new ListCache(entries);
		}
		/**
		* Removes all key-value entries from the stack.
		*
		* @private
		* @name clear
		* @memberOf Stack
		*/
		function stackClear() {
			this.__data__ = new ListCache();
		}
		/**
		* Removes `key` and its value from the stack.
		*
		* @private
		* @name delete
		* @memberOf Stack
		* @param {string} key The key of the value to remove.
		* @returns {boolean} Returns `true` if the entry was removed, else `false`.
		*/
		function stackDelete(key) {
			return this.__data__["delete"](key);
		}
		/**
		* Gets the stack value for `key`.
		*
		* @private
		* @name get
		* @memberOf Stack
		* @param {string} key The key of the value to get.
		* @returns {*} Returns the entry value.
		*/
		function stackGet(key) {
			return this.__data__.get(key);
		}
		/**
		* Checks if a stack value for `key` exists.
		*
		* @private
		* @name has
		* @memberOf Stack
		* @param {string} key The key of the entry to check.
		* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		*/
		function stackHas(key) {
			return this.__data__.has(key);
		}
		/**
		* Sets the stack `key` to `value`.
		*
		* @private
		* @name set
		* @memberOf Stack
		* @param {string} key The key of the value to set.
		* @param {*} value The value to set.
		* @returns {Object} Returns the stack cache instance.
		*/
		function stackSet(key, value) {
			var cache = this.__data__;
			if (cache instanceof ListCache) {
				var pairs = cache.__data__;
				if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
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
		/**
		* Creates an array of the enumerable property names of the array-like `value`.
		*
		* @private
		* @param {*} value The value to query.
		* @param {boolean} inherited Specify returning inherited property names.
		* @returns {Array} Returns the array of property names.
		*/
		function arrayLikeKeys(value, inherited) {
			var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
			var length = result.length, skipIndexes = !!length;
			for (var key in value) if (hasOwnProperty.call(value, key) && !(skipIndexes && (key == "length" || isIndex(key, length)))) result.push(key);
			return result;
		}
		/**
		* Assigns `value` to `key` of `object` if the existing value is not equivalent
		* using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
		* for equality comparisons.
		*
		* @private
		* @param {Object} object The object to modify.
		* @param {string} key The key of the property to assign.
		* @param {*} value The value to assign.
		*/
		function assignValue(object, key, value) {
			var objValue = object[key];
			if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) object[key] = value;
		}
		/**
		* Gets the index at which the `key` is found in `array` of key-value pairs.
		*
		* @private
		* @param {Array} array The array to inspect.
		* @param {*} key The key to search for.
		* @returns {number} Returns the index of the matched value, else `-1`.
		*/
		function assocIndexOf(array, key) {
			var length = array.length;
			while (length--) if (eq(array[length][0], key)) return length;
			return -1;
		}
		/**
		* The base implementation of `_.assign` without support for multiple sources
		* or `customizer` functions.
		*
		* @private
		* @param {Object} object The destination object.
		* @param {Object} source The source object.
		* @returns {Object} Returns `object`.
		*/
		function baseAssign(object, source) {
			return object && copyObject(source, keys(source), object);
		}
		/**
		* The base implementation of `_.clone` and `_.cloneDeep` which tracks
		* traversed objects.
		*
		* @private
		* @param {*} value The value to clone.
		* @param {boolean} [isDeep] Specify a deep clone.
		* @param {boolean} [isFull] Specify a clone including symbols.
		* @param {Function} [customizer] The function to customize cloning.
		* @param {string} [key] The key of `value`.
		* @param {Object} [object] The parent object of `value`.
		* @param {Object} [stack] Tracks traversed objects and their clone counterparts.
		* @returns {*} Returns the cloned value.
		*/
		function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
			var result;
			if (customizer) result = object ? customizer(value, key, object, stack) : customizer(value);
			if (result !== void 0) return result;
			if (!isObject(value)) return value;
			var isArr = isArray(value);
			if (isArr) {
				result = initCloneArray(value);
				if (!isDeep) return copyArray(value, result);
			} else {
				var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
				if (isBuffer(value)) return cloneBuffer(value, isDeep);
				if (tag == objectTag || tag == argsTag || isFunc && !object) {
					if (isHostObject(value)) return object ? value : {};
					result = initCloneObject(isFunc ? {} : value);
					if (!isDeep) return copySymbols(value, baseAssign(result, value));
				} else {
					if (!cloneableTags[tag]) return object ? value : {};
					result = initCloneByTag(value, tag, baseClone, isDeep);
				}
			}
			stack || (stack = new Stack());
			var stacked = stack.get(value);
			if (stacked) return stacked;
			stack.set(value, result);
			if (!isArr) var props = isFull ? getAllKeys(value) : keys(value);
			arrayEach(props || value, function(subValue, key) {
				if (props) {
					key = subValue;
					subValue = value[key];
				}
				assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
			});
			return result;
		}
		/**
		* The base implementation of `_.create` without support for assigning
		* properties to the created object.
		*
		* @private
		* @param {Object} prototype The object to inherit from.
		* @returns {Object} Returns the new object.
		*/
		function baseCreate(proto) {
			return isObject(proto) ? objectCreate(proto) : {};
		}
		/**
		* The base implementation of `getAllKeys` and `getAllKeysIn` which uses
		* `keysFunc` and `symbolsFunc` to get the enumerable property names and
		* symbols of `object`.
		*
		* @private
		* @param {Object} object The object to query.
		* @param {Function} keysFunc The function to get the keys of `object`.
		* @param {Function} symbolsFunc The function to get the symbols of `object`.
		* @returns {Array} Returns the array of property names and symbols.
		*/
		function baseGetAllKeys(object, keysFunc, symbolsFunc) {
			var result = keysFunc(object);
			return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
		}
		/**
		* The base implementation of `getTag`.
		*
		* @private
		* @param {*} value The value to query.
		* @returns {string} Returns the `toStringTag`.
		*/
		function baseGetTag(value) {
			return objectToString.call(value);
		}
		/**
		* The base implementation of `_.isNative` without bad shim checks.
		*
		* @private
		* @param {*} value The value to check.
		* @returns {boolean} Returns `true` if `value` is a native function,
		*  else `false`.
		*/
		function baseIsNative(value) {
			if (!isObject(value) || isMasked(value)) return false;
			return (isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor).test(toSource(value));
		}
		/**
		* The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
		*
		* @private
		* @param {Object} object The object to query.
		* @returns {Array} Returns the array of property names.
		*/
		function baseKeys(object) {
			if (!isPrototype(object)) return nativeKeys(object);
			var result = [];
			for (var key in Object(object)) if (hasOwnProperty.call(object, key) && key != "constructor") result.push(key);
			return result;
		}
		/**
		* Creates a clone of  `buffer`.
		*
		* @private
		* @param {Buffer} buffer The buffer to clone.
		* @param {boolean} [isDeep] Specify a deep clone.
		* @returns {Buffer} Returns the cloned buffer.
		*/
		function cloneBuffer(buffer, isDeep) {
			if (isDeep) return buffer.slice();
			var result = new buffer.constructor(buffer.length);
			buffer.copy(result);
			return result;
		}
		/**
		* Creates a clone of `arrayBuffer`.
		*
		* @private
		* @param {ArrayBuffer} arrayBuffer The array buffer to clone.
		* @returns {ArrayBuffer} Returns the cloned array buffer.
		*/
		function cloneArrayBuffer(arrayBuffer) {
			var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
			new Uint8Array(result).set(new Uint8Array(arrayBuffer));
			return result;
		}
		/**
		* Creates a clone of `dataView`.
		*
		* @private
		* @param {Object} dataView The data view to clone.
		* @param {boolean} [isDeep] Specify a deep clone.
		* @returns {Object} Returns the cloned data view.
		*/
		function cloneDataView(dataView, isDeep) {
			var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
			return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
		}
		/**
		* Creates a clone of `map`.
		*
		* @private
		* @param {Object} map The map to clone.
		* @param {Function} cloneFunc The function to clone values.
		* @param {boolean} [isDeep] Specify a deep clone.
		* @returns {Object} Returns the cloned map.
		*/
		function cloneMap(map, isDeep, cloneFunc) {
			return arrayReduce(isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map), addMapEntry, new map.constructor());
		}
		/**
		* Creates a clone of `regexp`.
		*
		* @private
		* @param {Object} regexp The regexp to clone.
		* @returns {Object} Returns the cloned regexp.
		*/
		function cloneRegExp(regexp) {
			var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
			result.lastIndex = regexp.lastIndex;
			return result;
		}
		/**
		* Creates a clone of `set`.
		*
		* @private
		* @param {Object} set The set to clone.
		* @param {Function} cloneFunc The function to clone values.
		* @param {boolean} [isDeep] Specify a deep clone.
		* @returns {Object} Returns the cloned set.
		*/
		function cloneSet(set, isDeep, cloneFunc) {
			return arrayReduce(isDeep ? cloneFunc(setToArray(set), true) : setToArray(set), addSetEntry, new set.constructor());
		}
		/**
		* Creates a clone of the `symbol` object.
		*
		* @private
		* @param {Object} symbol The symbol object to clone.
		* @returns {Object} Returns the cloned symbol object.
		*/
		function cloneSymbol(symbol) {
			return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
		}
		/**
		* Creates a clone of `typedArray`.
		*
		* @private
		* @param {Object} typedArray The typed array to clone.
		* @param {boolean} [isDeep] Specify a deep clone.
		* @returns {Object} Returns the cloned typed array.
		*/
		function cloneTypedArray(typedArray, isDeep) {
			var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
			return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
		}
		/**
		* Copies the values of `source` to `array`.
		*
		* @private
		* @param {Array} source The array to copy values from.
		* @param {Array} [array=[]] The array to copy values to.
		* @returns {Array} Returns `array`.
		*/
		function copyArray(source, array) {
			var index = -1, length = source.length;
			array || (array = Array(length));
			while (++index < length) array[index] = source[index];
			return array;
		}
		/**
		* Copies properties of `source` to `object`.
		*
		* @private
		* @param {Object} source The object to copy properties from.
		* @param {Array} props The property identifiers to copy.
		* @param {Object} [object={}] The object to copy properties to.
		* @param {Function} [customizer] The function to customize copied values.
		* @returns {Object} Returns `object`.
		*/
		function copyObject(source, props, object, customizer) {
			object || (object = {});
			var index = -1, length = props.length;
			while (++index < length) {
				var key = props[index];
				var newValue = void 0;
				assignValue(object, key, newValue === void 0 ? source[key] : newValue);
			}
			return object;
		}
		/**
		* Copies own symbol properties of `source` to `object`.
		*
		* @private
		* @param {Object} source The object to copy symbols from.
		* @param {Object} [object={}] The object to copy symbols to.
		* @returns {Object} Returns `object`.
		*/
		function copySymbols(source, object) {
			return copyObject(source, getSymbols(source), object);
		}
		/**
		* Creates an array of own enumerable property names and symbols of `object`.
		*
		* @private
		* @param {Object} object The object to query.
		* @returns {Array} Returns the array of property names and symbols.
		*/
		function getAllKeys(object) {
			return baseGetAllKeys(object, keys, getSymbols);
		}
		/**
		* Gets the data for `map`.
		*
		* @private
		* @param {Object} map The map to query.
		* @param {string} key The reference key.
		* @returns {*} Returns the map data.
		*/
		function getMapData(map, key) {
			var data = map.__data__;
			return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
		}
		/**
		* Gets the native function at `key` of `object`.
		*
		* @private
		* @param {Object} object The object to query.
		* @param {string} key The key of the method to get.
		* @returns {*} Returns the function if it's native, else `undefined`.
		*/
		function getNative(object, key) {
			var value = getValue(object, key);
			return baseIsNative(value) ? value : void 0;
		}
		/**
		* Creates an array of the own enumerable symbol properties of `object`.
		*
		* @private
		* @param {Object} object The object to query.
		* @returns {Array} Returns the array of symbols.
		*/
		var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
		/**
		* Gets the `toStringTag` of `value`.
		*
		* @private
		* @param {*} value The value to query.
		* @returns {string} Returns the `toStringTag`.
		*/
		var getTag = baseGetTag;
		if (DataView && getTag(new DataView(/* @__PURE__ */ new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) getTag = function(value) {
			var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : void 0;
			if (ctorString) switch (ctorString) {
				case dataViewCtorString: return dataViewTag;
				case mapCtorString: return mapTag;
				case promiseCtorString: return promiseTag;
				case setCtorString: return setTag;
				case weakMapCtorString: return weakMapTag;
			}
			return result;
		};
		/**
		* Initializes an array clone.
		*
		* @private
		* @param {Array} array The array to clone.
		* @returns {Array} Returns the initialized clone.
		*/
		function initCloneArray(array) {
			var length = array.length, result = array.constructor(length);
			if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
				result.index = array.index;
				result.input = array.input;
			}
			return result;
		}
		/**
		* Initializes an object clone.
		*
		* @private
		* @param {Object} object The object to clone.
		* @returns {Object} Returns the initialized clone.
		*/
		function initCloneObject(object) {
			return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
		}
		/**
		* Initializes an object clone based on its `toStringTag`.
		*
		* **Note:** This function only supports cloning values with tags of
		* `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
		*
		* @private
		* @param {Object} object The object to clone.
		* @param {string} tag The `toStringTag` of the object to clone.
		* @param {Function} cloneFunc The function to clone values.
		* @param {boolean} [isDeep] Specify a deep clone.
		* @returns {Object} Returns the initialized clone.
		*/
		function initCloneByTag(object, tag, cloneFunc, isDeep) {
			var Ctor = object.constructor;
			switch (tag) {
				case arrayBufferTag: return cloneArrayBuffer(object);
				case boolTag:
				case dateTag: return new Ctor(+object);
				case dataViewTag: return cloneDataView(object, isDeep);
				case float32Tag:
				case float64Tag:
				case int8Tag:
				case int16Tag:
				case int32Tag:
				case uint8Tag:
				case uint8ClampedTag:
				case uint16Tag:
				case uint32Tag: return cloneTypedArray(object, isDeep);
				case mapTag: return cloneMap(object, isDeep, cloneFunc);
				case numberTag:
				case stringTag: return new Ctor(object);
				case regexpTag: return cloneRegExp(object);
				case setTag: return cloneSet(object, isDeep, cloneFunc);
				case symbolTag: return cloneSymbol(object);
			}
		}
		/**
		* Checks if `value` is a valid array-like index.
		*
		* @private
		* @param {*} value The value to check.
		* @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
		* @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
		*/
		function isIndex(value, length) {
			length = length == null ? MAX_SAFE_INTEGER : length;
			return !!length && (typeof value == "number" || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
		}
		/**
		* Checks if `value` is suitable for use as unique object key.
		*
		* @private
		* @param {*} value The value to check.
		* @returns {boolean} Returns `true` if `value` is suitable, else `false`.
		*/
		function isKeyable(value) {
			var type = typeof value;
			return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
		}
		/**
		* Checks if `func` has its source masked.
		*
		* @private
		* @param {Function} func The function to check.
		* @returns {boolean} Returns `true` if `func` is masked, else `false`.
		*/
		function isMasked(func) {
			return !!maskSrcKey && maskSrcKey in func;
		}
		/**
		* Checks if `value` is likely a prototype object.
		*
		* @private
		* @param {*} value The value to check.
		* @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
		*/
		function isPrototype(value) {
			var Ctor = value && value.constructor;
			return value === (typeof Ctor == "function" && Ctor.prototype || objectProto);
		}
		/**
		* Converts `func` to its source code.
		*
		* @private
		* @param {Function} func The function to process.
		* @returns {string} Returns the source code.
		*/
		function toSource(func) {
			if (func != null) {
				try {
					return funcToString.call(func);
				} catch (e) {}
				try {
					return func + "";
				} catch (e) {}
			}
			return "";
		}
		/**
		* This method is like `_.clone` except that it recursively clones `value`.
		*
		* @static
		* @memberOf _
		* @since 1.0.0
		* @category Lang
		* @param {*} value The value to recursively clone.
		* @returns {*} Returns the deep cloned value.
		* @see _.clone
		* @example
		*
		* var objects = [{ 'a': 1 }, { 'b': 2 }];
		*
		* var deep = _.cloneDeep(objects);
		* console.log(deep[0] === objects[0]);
		* // => false
		*/
		function cloneDeep(value) {
			return baseClone(value, true, true);
		}
		/**
		* Performs a
		* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
		* comparison between two values to determine if they are equivalent.
		*
		* @static
		* @memberOf _
		* @since 4.0.0
		* @category Lang
		* @param {*} value The value to compare.
		* @param {*} other The other value to compare.
		* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
		* @example
		*
		* var object = { 'a': 1 };
		* var other = { 'a': 1 };
		*
		* _.eq(object, object);
		* // => true
		*
		* _.eq(object, other);
		* // => false
		*
		* _.eq('a', 'a');
		* // => true
		*
		* _.eq('a', Object('a'));
		* // => false
		*
		* _.eq(NaN, NaN);
		* // => true
		*/
		function eq(value, other) {
			return value === other || value !== value && other !== other;
		}
		/**
		* Checks if `value` is likely an `arguments` object.
		*
		* @static
		* @memberOf _
		* @since 0.1.0
		* @category Lang
		* @param {*} value The value to check.
		* @returns {boolean} Returns `true` if `value` is an `arguments` object,
		*  else `false`.
		* @example
		*
		* _.isArguments(function() { return arguments; }());
		* // => true
		*
		* _.isArguments([1, 2, 3]);
		* // => false
		*/
		function isArguments(value) {
			return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
		}
		/**
		* Checks if `value` is classified as an `Array` object.
		*
		* @static
		* @memberOf _
		* @since 0.1.0
		* @category Lang
		* @param {*} value The value to check.
		* @returns {boolean} Returns `true` if `value` is an array, else `false`.
		* @example
		*
		* _.isArray([1, 2, 3]);
		* // => true
		*
		* _.isArray(document.body.children);
		* // => false
		*
		* _.isArray('abc');
		* // => false
		*
		* _.isArray(_.noop);
		* // => false
		*/
		var isArray = Array.isArray;
		/**
		* Checks if `value` is array-like. A value is considered array-like if it's
		* not a function and has a `value.length` that's an integer greater than or
		* equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
		*
		* @static
		* @memberOf _
		* @since 4.0.0
		* @category Lang
		* @param {*} value The value to check.
		* @returns {boolean} Returns `true` if `value` is array-like, else `false`.
		* @example
		*
		* _.isArrayLike([1, 2, 3]);
		* // => true
		*
		* _.isArrayLike(document.body.children);
		* // => true
		*
		* _.isArrayLike('abc');
		* // => true
		*
		* _.isArrayLike(_.noop);
		* // => false
		*/
		function isArrayLike(value) {
			return value != null && isLength(value.length) && !isFunction(value);
		}
		/**
		* This method is like `_.isArrayLike` except that it also checks if `value`
		* is an object.
		*
		* @static
		* @memberOf _
		* @since 4.0.0
		* @category Lang
		* @param {*} value The value to check.
		* @returns {boolean} Returns `true` if `value` is an array-like object,
		*  else `false`.
		* @example
		*
		* _.isArrayLikeObject([1, 2, 3]);
		* // => true
		*
		* _.isArrayLikeObject(document.body.children);
		* // => true
		*
		* _.isArrayLikeObject('abc');
		* // => false
		*
		* _.isArrayLikeObject(_.noop);
		* // => false
		*/
		function isArrayLikeObject(value) {
			return isObjectLike(value) && isArrayLike(value);
		}
		/**
		* Checks if `value` is a buffer.
		*
		* @static
		* @memberOf _
		* @since 4.3.0
		* @category Lang
		* @param {*} value The value to check.
		* @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
		* @example
		*
		* _.isBuffer(new Buffer(2));
		* // => true
		*
		* _.isBuffer(new Uint8Array(2));
		* // => false
		*/
		var isBuffer = nativeIsBuffer || stubFalse;
		/**
		* Checks if `value` is classified as a `Function` object.
		*
		* @static
		* @memberOf _
		* @since 0.1.0
		* @category Lang
		* @param {*} value The value to check.
		* @returns {boolean} Returns `true` if `value` is a function, else `false`.
		* @example
		*
		* _.isFunction(_);
		* // => true
		*
		* _.isFunction(/abc/);
		* // => false
		*/
		function isFunction(value) {
			var tag = isObject(value) ? objectToString.call(value) : "";
			return tag == funcTag || tag == genTag;
		}
		/**
		* Checks if `value` is a valid array-like length.
		*
		* **Note:** This method is loosely based on
		* [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
		*
		* @static
		* @memberOf _
		* @since 4.0.0
		* @category Lang
		* @param {*} value The value to check.
		* @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
		* @example
		*
		* _.isLength(3);
		* // => true
		*
		* _.isLength(Number.MIN_VALUE);
		* // => false
		*
		* _.isLength(Infinity);
		* // => false
		*
		* _.isLength('3');
		* // => false
		*/
		function isLength(value) {
			return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
		}
		/**
		* Checks if `value` is the
		* [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
		* of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
		*
		* @static
		* @memberOf _
		* @since 0.1.0
		* @category Lang
		* @param {*} value The value to check.
		* @returns {boolean} Returns `true` if `value` is an object, else `false`.
		* @example
		*
		* _.isObject({});
		* // => true
		*
		* _.isObject([1, 2, 3]);
		* // => true
		*
		* _.isObject(_.noop);
		* // => true
		*
		* _.isObject(null);
		* // => false
		*/
		function isObject(value) {
			var type = typeof value;
			return !!value && (type == "object" || type == "function");
		}
		/**
		* Checks if `value` is object-like. A value is object-like if it's not `null`
		* and has a `typeof` result of "object".
		*
		* @static
		* @memberOf _
		* @since 4.0.0
		* @category Lang
		* @param {*} value The value to check.
		* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
		* @example
		*
		* _.isObjectLike({});
		* // => true
		*
		* _.isObjectLike([1, 2, 3]);
		* // => true
		*
		* _.isObjectLike(_.noop);
		* // => false
		*
		* _.isObjectLike(null);
		* // => false
		*/
		function isObjectLike(value) {
			return !!value && typeof value == "object";
		}
		/**
		* Creates an array of the own enumerable property names of `object`.
		*
		* **Note:** Non-object values are coerced to objects. See the
		* [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
		* for more details.
		*
		* @static
		* @since 0.1.0
		* @memberOf _
		* @category Object
		* @param {Object} object The object to query.
		* @returns {Array} Returns the array of property names.
		* @example
		*
		* function Foo() {
		*   this.a = 1;
		*   this.b = 2;
		* }
		*
		* Foo.prototype.c = 3;
		*
		* _.keys(new Foo);
		* // => ['a', 'b'] (iteration order is not guaranteed)
		*
		* _.keys('hi');
		* // => ['0', '1']
		*/
		function keys(object) {
			return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
		}
		/**
		* This method returns a new empty array.
		*
		* @static
		* @memberOf _
		* @since 4.13.0
		* @category Util
		* @returns {Array} Returns the new empty array.
		* @example
		*
		* var arrays = _.times(2, _.stubArray);
		*
		* console.log(arrays);
		* // => [[], []]
		*
		* console.log(arrays[0] === arrays[1]);
		* // => false
		*/
		function stubArray() {
			return [];
		}
		/**
		* This method returns `false`.
		*
		* @static
		* @memberOf _
		* @since 4.13.0
		* @category Util
		* @returns {boolean} Returns `false`.
		* @example
		*
		* _.times(2, _.stubFalse);
		* // => [false, false]
		*/
		function stubFalse() {
			return false;
		}
		module.exports = cloneDeep;
	})(lodash_clonedeep, lodash_clonedeep.exports);
	return lodash_clonedeep.exports;
}
requireLodash_clonedeep();
/**
* Takes a date string in any of the supported formats and normalizes it for
* usage with `FDate` (ISO-8601).
*
* Handles:
*
* - `YYYY-MM-DD`
* - `YYYY/MM/DD`
* - `YYYYMMDD`
*
* @internal
* @param value - Date string to normalize.
* @returns Normalized date string (ISO-8601) or undefined if it doesnt match one of the
* supported formats.
*/
function normalizeDateFormat(value) {
	const match = [
		/^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/,
		/^(?<year>\d{4})(?<month>\d{2})(?<day>\d{2})$/,
		/^(?<year>\d{4})\/(?<month>\d{2})\/(?<day>\d{2})$/
	].map((pattern) => value.match(pattern)).find(Boolean);
	if (!match?.groups) return;
	const { year, month, day } = match.groups;
	return `${year}-${month}-${day}`;
}
/**
* Takes a string containing only numbers and checks that the checksum is correct
* according to the Luhn Algorithm.
*
* @public
* @param inputString - A string containing only numbers
*/
function testLuhnChecksum(inputString) {
	let sum = 0;
	if (/^\d+$/.test(inputString) === false) throw new Error("Luhn Checksum test only works on strings containing numbers");
	for (const [index, numChar] of inputString.split("").toReversed().entries()) {
		const digit = Number.parseInt(numChar, 10) * ((index + 1) % 2 === 0 ? 2 : 1);
		sum += digit >= 10 ? digit - 9 : digit;
	}
	return sum % 10 === 0;
}
/**
* @public
*/
function validChecksum(value) {
	return testLuhnChecksum(value.slice(2).replaceAll("-", ""));
}
var BANK_ACCOUNT_NUMBER_REGEXP = /^\d{3,16}$/;
var BANK_ACCOUNT_NUMBER_TRIM_REGEXP = /[ ,.-]+/g;
/**
* @public
*/
function parseBankAccountNumber(value) {
	if (isEmpty(value)) return;
	const trimmedValue = value.replaceAll(BANK_ACCOUNT_NUMBER_TRIM_REGEXP, "");
	return BANK_ACCOUNT_NUMBER_REGEXP.test(trimmedValue) ? trimmedValue : void 0;
}
var BANKGIRO_REGEXP_HYPHEN = /^(\d{3,4})-?(\d{4})$/;
/**
* @public
*/
function parseBankgiro(value) {
	if (isEmpty(value)) return;
	const match = value.match(BANKGIRO_REGEXP_HYPHEN);
	if (!match) return;
	if (!testLuhnChecksum(`${match[1]}${match[2]}`)) return;
	return `${match[1]}-${match[2]}`;
}
var CLEARINGNUMBER_REGEXP = /^\d{4}([\s-]?\d)?$/;
/**
* @public
*/
function parseClearingNumber(value) {
	if (isEmpty(value)) return;
	if (!CLEARINGNUMBER_REGEXP.test(value)) return;
	return value.length === 5 ? `${value.slice(0, 4)}-${value.slice(4, 5)}` : value;
}
function getDefaultExportFromCjs$2(x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var dayjs_min$1$1 = { exports: {} };
var dayjs_min$2 = dayjs_min$1$1.exports;
var hasRequiredDayjs_min$1;
function requireDayjs_min$1() {
	if (hasRequiredDayjs_min$1) return dayjs_min$1$1.exports;
	hasRequiredDayjs_min$1 = 1;
	(function(module, exports$1) {
		(function(t, e) {
			module.exports = e();
		})(dayjs_min$2, (function() {
			var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {
				name: "en",
				weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
				months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
				ordinal: function(t) {
					var e = [
						"th",
						"st",
						"nd",
						"rd"
					], n = t % 100;
					return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
				}
			}, m = function(t, e, n) {
				var r = String(t);
				return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
			}, v = {
				s: m,
				z: function(t) {
					var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
					return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
				},
				m: function t(e, n) {
					if (e.date() < n.date()) return -t(n, e);
					var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, c), s = n - i < 0, u = e.clone().add(r + (s ? -1 : 1), c);
					return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
				},
				a: function(t) {
					return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
				},
				p: function(t) {
					return {
						M: c,
						y: h,
						w: o,
						d: a,
						D: d,
						h: u,
						m: s,
						s: i,
						ms: r,
						Q: f
					}[t] || String(t || "").toLowerCase().replace(/s$/, "");
				},
				u: function(t) {
					return void 0 === t;
				}
			}, g = "en", D = {};
			D[g] = M;
			var p = "$isDayjsObject", S = function(t) {
				return t instanceof _ || !(!t || !t[p]);
			}, w = function t(e, n, r) {
				var i;
				if (!e) return g;
				if ("string" == typeof e) {
					var s = e.toLowerCase();
					D[s] && (i = s), n && (D[s] = n, i = s);
					var u = e.split("-");
					if (!i && u.length > 1) return t(u[0]);
				} else {
					var a = e.name;
					D[a] = e, i = a;
				}
				return !r && i && (g = i), i || !r && g;
			}, O = function(t, e) {
				if (S(t)) return t.clone();
				var n = "object" == typeof e ? e : {};
				return n.date = t, n.args = arguments, new _(n);
			}, b = v;
			b.l = w, b.i = S, b.w = function(t, e) {
				return O(t, {
					locale: e.$L,
					utc: e.$u,
					x: e.$x,
					$offset: e.$offset
				});
			};
			var _ = function() {
				function M(t) {
					this.$L = w(t.locale, null, true), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = true;
				}
				var m = M.prototype;
				return m.parse = function(t) {
					this.$d = function(t) {
						var e = t.date, n = t.utc;
						if (null === e) return /* @__PURE__ */ new Date(NaN);
						if (b.u(e)) return /* @__PURE__ */ new Date();
						if (e instanceof Date) return new Date(e);
						if ("string" == typeof e && !/Z$/i.test(e)) {
							var r = e.match($);
							if (r) {
								var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3);
								return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
							}
						}
						return new Date(e);
					}(t), this.init();
				}, m.init = function() {
					var t = this.$d;
					this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
				}, m.$utils = function() {
					return b;
				}, m.isValid = function() {
					return !(this.$d.toString() === l);
				}, m.isSame = function(t, e) {
					var n = O(t);
					return this.startOf(e) <= n && n <= this.endOf(e);
				}, m.isAfter = function(t, e) {
					return O(t) < this.startOf(e);
				}, m.isBefore = function(t, e) {
					return this.endOf(e) < O(t);
				}, m.$g = function(t, e, n) {
					return b.u(t) ? this[e] : this.set(n, t);
				}, m.unix = function() {
					return Math.floor(this.valueOf() / 1e3);
				}, m.valueOf = function() {
					return this.$d.getTime();
				}, m.startOf = function(t, e) {
					var n = this, r = !!b.u(e) || e, f = b.p(t), l = function(t, e) {
						var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
						return r ? i : i.endOf(a);
					}, $ = function(t, e) {
						return b.w(n.toDate()[t].apply(n.toDate("s"), (r ? [
							0,
							0,
							0,
							0
						] : [
							23,
							59,
							59,
							999
						]).slice(e)), n);
					}, y = this.$W, M = this.$M, m = this.$D, v = "set" + (this.$u ? "UTC" : "");
					switch (f) {
						case h: return r ? l(1, 0) : l(31, 11);
						case c: return r ? l(1, M) : l(0, M + 1);
						case o:
							var g = this.$locale().weekStart || 0, D = (y < g ? y + 7 : y) - g;
							return l(r ? m - D : m + (6 - D), M);
						case a:
						case d: return $(v + "Hours", 0);
						case u: return $(v + "Minutes", 1);
						case s: return $(v + "Seconds", 2);
						case i: return $(v + "Milliseconds", 3);
						default: return this.clone();
					}
				}, m.endOf = function(t) {
					return this.startOf(t, false);
				}, m.$set = function(t, e) {
					var n, o = b.p(t), f = "set" + (this.$u ? "UTC" : ""), l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o], $ = o === a ? this.$D + (e - this.$W) : e;
					if (o === c || o === h) {
						var y = this.clone().set(d, 1);
						y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
					} else l && this.$d[l]($);
					return this.init(), this;
				}, m.set = function(t, e) {
					return this.clone().$set(t, e);
				}, m.get = function(t) {
					return this[b.p(t)]();
				}, m.add = function(r, f) {
					var d, l = this;
					r = Number(r);
					var $ = b.p(f), y = function(t) {
						var e = O(l);
						return b.w(e.date(e.date() + Math.round(t * r)), l);
					};
					if ($ === c) return this.set(c, this.$M + r);
					if ($ === h) return this.set(h, this.$y + r);
					if ($ === a) return y(1);
					if ($ === o) return y(7);
					var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1, m = this.$d.getTime() + r * M;
					return b.w(m, this);
				}, m.subtract = function(t, e) {
					return this.add(-1 * t, e);
				}, m.format = function(t) {
					var e = this, n = this.$locale();
					if (!this.isValid()) return n.invalidDate || l;
					var r = t || "YYYY-MM-DDTHH:mm:ssZ", i = b.z(this), s = this.$H, u = this.$m, a = this.$M, o = n.weekdays, c = n.months, f = n.meridiem, h = function(t, n, i, s) {
						return t && (t[n] || t(e, r)) || i[n].slice(0, s);
					}, d = function(t) {
						return b.s(s % 12 || 12, t, "0");
					}, $ = f || function(t, e, n) {
						var r = t < 12 ? "AM" : "PM";
						return n ? r.toLowerCase() : r;
					};
					return r.replace(y, (function(t, r) {
						return r || function(t) {
							switch (t) {
								case "YY": return String(e.$y).slice(-2);
								case "YYYY": return b.s(e.$y, 4, "0");
								case "M": return a + 1;
								case "MM": return b.s(a + 1, 2, "0");
								case "MMM": return h(n.monthsShort, a, c, 3);
								case "MMMM": return h(c, a);
								case "D": return e.$D;
								case "DD": return b.s(e.$D, 2, "0");
								case "d": return String(e.$W);
								case "dd": return h(n.weekdaysMin, e.$W, o, 2);
								case "ddd": return h(n.weekdaysShort, e.$W, o, 3);
								case "dddd": return o[e.$W];
								case "H": return String(s);
								case "HH": return b.s(s, 2, "0");
								case "h": return d(1);
								case "hh": return d(2);
								case "a": return $(s, u, true);
								case "A": return $(s, u, false);
								case "m": return String(u);
								case "mm": return b.s(u, 2, "0");
								case "s": return String(e.$s);
								case "ss": return b.s(e.$s, 2, "0");
								case "SSS": return b.s(e.$ms, 3, "0");
								case "Z": return i;
							}
							return null;
						}(t) || i.replace(":", "");
					}));
				}, m.utcOffset = function() {
					return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
				}, m.diff = function(r, d, l) {
					var $, y = this, M = b.p(d), m = O(r), v = (m.utcOffset() - this.utcOffset()) * e, g = this - m, D = function() {
						return b.m(y, m);
					};
					switch (M) {
						case h:
							$ = D() / 12;
							break;
						case c:
							$ = D();
							break;
						case f:
							$ = D() / 3;
							break;
						case o:
							$ = (g - v) / 6048e5;
							break;
						case a:
							$ = (g - v) / 864e5;
							break;
						case u:
							$ = g / n;
							break;
						case s:
							$ = g / e;
							break;
						case i:
							$ = g / t;
							break;
						default: $ = g;
					}
					return l ? $ : b.a($);
				}, m.daysInMonth = function() {
					return this.endOf(c).$D;
				}, m.$locale = function() {
					return D[this.$L];
				}, m.locale = function(t, e) {
					if (!t) return this.$L;
					var n = this.clone(), r = w(t, e, true);
					return r && (n.$L = r), n;
				}, m.clone = function() {
					return b.w(this.$d, this);
				}, m.toDate = function() {
					return new Date(this.valueOf());
				}, m.toJSON = function() {
					return this.isValid() ? this.toISOString() : null;
				}, m.toISOString = function() {
					return this.$d.toISOString();
				}, m.toString = function() {
					return this.$d.toUTCString();
				}, M;
			}(), k = _.prototype;
			return O.prototype = k, [
				["$ms", r],
				["$s", i],
				["$m", s],
				["$H", u],
				["$W", a],
				["$M", c],
				["$y", h],
				["$D", d]
			].forEach((function(t) {
				k[t[1]] = function(e) {
					return this.$g(e, t[0], t[1]);
				};
			})), O.extend = function(t, e) {
				return t.$i || (t(e, _, O), t.$i = true), O;
			}, O.locale = w, O.isDayjs = S, O.unix = function(t) {
				return O(1e3 * t);
			}, O.en = D[g], O.Ls = D, O.p = {}, O;
		}));
	})(dayjs_min$1$1);
	return dayjs_min$1$1.exports;
}
var dayjs$1 = /* @__PURE__ */ getDefaultExportFromCjs$2(requireDayjs_min$1());
var sv$1$1 = { exports: {} };
var sv$2 = sv$1$1.exports;
var hasRequiredSv$1;
function requireSv$1() {
	if (hasRequiredSv$1) return sv$1$1.exports;
	hasRequiredSv$1 = 1;
	(function(module, exports$1) {
		(function(e, t) {
			module.exports = t(requireDayjs_min$1());
		})(sv$2, (function(e) {
			function t(e) {
				return e && "object" == typeof e && "default" in e ? e : { default: e };
			}
			var a = t(e), d = {
				name: "sv",
				weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
				weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
				weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
				months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
				monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
				weekStart: 1,
				yearStart: 4,
				ordinal: function(e) {
					var t = e % 10;
					return "[" + e + (1 === t || 2 === t ? "a" : "e") + "]";
				},
				formats: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "YYYY-MM-DD",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY [kl.] HH:mm",
					LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
					lll: "D MMM YYYY HH:mm",
					llll: "ddd D MMM YYYY HH:mm"
				},
				relativeTime: {
					future: "om %s",
					past: "för %s sedan",
					s: "några sekunder",
					m: "en minut",
					mm: "%d minuter",
					h: "en timme",
					hh: "%d timmar",
					d: "en dag",
					dd: "%d dagar",
					M: "en månad",
					MM: "%d månader",
					y: "ett år",
					yy: "%d år"
				}
			};
			return a.default.locale(d, null, true), d;
		}));
	})(sv$1$1);
	return sv$1$1.exports;
}
requireSv$1();
var weekOfYear$2$1 = { exports: {} };
var weekOfYear$1$1 = weekOfYear$2$1.exports;
var hasRequiredWeekOfYear$1;
function requireWeekOfYear$1() {
	if (hasRequiredWeekOfYear$1) return weekOfYear$2$1.exports;
	hasRequiredWeekOfYear$1 = 1;
	(function(module, exports$1) {
		(function(e, t) {
			module.exports = t();
		})(weekOfYear$1$1, (function() {
			var e = "week", t = "year";
			return function(i, n, r) {
				var f = n.prototype;
				f.week = function(i) {
					if (void 0 === i && (i = null), null !== i) return this.add(7 * (i - this.week()), "day");
					var n = this.$locale().yearStart || 1;
					if (11 === this.month() && this.date() > 25) {
						var f = r(this).startOf(t).add(1, t).date(n), s = r(this).endOf(e);
						if (f.isBefore(s)) return 1;
					}
					var a = r(this).startOf(t).date(n).startOf(e).subtract(1, "millisecond"), o = this.diff(a, e, true);
					return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
				}, f.weeks = function(e) {
					return void 0 === e && (e = null), this.week(e);
				};
			};
		}));
	})(weekOfYear$2$1);
	return weekOfYear$2$1.exports;
}
var weekOfYear$3 = /* @__PURE__ */ getDefaultExportFromCjs$2(requireWeekOfYear$1());
dayjs$1.extend(weekOfYear$3);
/**
* What format to use when formatting dates.
*
* @public
*/
var DateFormat$1;
(function(DateFormat) {
	/**
	* Format with weekday, day, month, year as a human-readable string.
	*
	* "onsdag 4 maj 2022"
	*/
	DateFormat["FULL"] = "full";
	/**
	* Format with day, month, year as a human-readable string.
	*
	* "4 maj 2022"
	*/
	DateFormat["LONG"] = "long";
	/**
	* Format according to ISO 8601 format.
	*
	* "2022-05-04"
	*/
	DateFormat["ISO8601"] = "iso-8601";
	/**
	* Format YYYYMMDD
	*
	* "20220504"
	*/
	DateFormat["YYYYMMDD"] = "YYYYMMDD";
})(DateFormat$1 || (DateFormat$1 = {}));
/**
* What locale to use when formatting days.
*
* @public
*/
var Locale$1;
(function(Locale) {
	Locale["SWEDISH"] = "sv";
	Locale["ENGLISH"] = "en";
})(Locale$1 || (Locale$1 = {}));
function getDefaultLocale() {
	return Locale$1.SWEDISH;
}
var _locale = /* @__PURE__ */ getDefaultLocale();
/**
* Get current locale.
*
* Swedish locale is default.
*
* @public
*/
function getLocale() {
	return _locale;
}
/**
* Days in a week.
* MONDAY(1) to SUNDAY(7)
*
* @public
*/
var Weekday$1;
(function(Weekday) {
	Weekday[Weekday["MONDAY"] = 1] = "MONDAY";
	Weekday[Weekday["TUESDAY"] = 2] = "TUESDAY";
	Weekday[Weekday["WEDNESDAY"] = 3] = "WEDNESDAY";
	Weekday[Weekday["THURSDAY"] = 4] = "THURSDAY";
	Weekday[Weekday["FRIDAY"] = 5] = "FRIDAY";
	Weekday[Weekday["SATURDAY"] = 6] = "SATURDAY";
	Weekday[Weekday["SUNDAY"] = 7] = "SUNDAY";
})(Weekday$1 || (Weekday$1 = {}));
Locale$1.SWEDISH, Weekday$1.MONDAY, Weekday$1.TUESDAY, Weekday$1.WEDNESDAY, Weekday$1.THURSDAY, Weekday$1.FRIDAY, Weekday$1.SATURDAY, Weekday$1.SUNDAY, Locale$1.ENGLISH, Weekday$1.MONDAY, Weekday$1.TUESDAY, Weekday$1.WEDNESDAY, Weekday$1.THURSDAY, Weekday$1.FRIDAY, Weekday$1.SATURDAY, Weekday$1.SUNDAY;
var ISO8601_YYYY_MM_DD$1 = "YYYY-MM-DD";
var formatter$1 = {
	[Locale$1.SWEDISH]: {
		[DateFormat$1.FULL]: "dddd D MMMM YYYY",
		[DateFormat$1.LONG]: "D MMMM YYYY",
		[DateFormat$1.ISO8601]: ISO8601_YYYY_MM_DD$1,
		[DateFormat$1.YYYYMMDD]: "YYYYMMDD"
	},
	[Locale$1.ENGLISH]: {
		[DateFormat$1.FULL]: "dddd, D MMMM YYYY",
		[DateFormat$1.LONG]: "D MMMM YYYY",
		[DateFormat$1.ISO8601]: ISO8601_YYYY_MM_DD$1,
		[DateFormat$1.YYYYMMDD]: "YYYYMMDD"
	}
};
/**
* Represents a date (with year, month and day).
*
* @public
*/
var FDate = class FDate {
	value;
	constructor(value) {
		this.value = dayjs$1(value, ISO8601_YYYY_MM_DD$1, true).startOf("day");
	}
	/**
	* Create {@link FDate} with an invalid state.
	*
	* @internal
	*/
	static invalid() {
		return new FDate("<invalid>");
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
		return new FDate();
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
			const date = new FDate(value);
			const { month } = match.groups;
			if (date.isValid() && date.month === Number.parseInt(month, 10)) return date;
		}
		return FDate.invalid();
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
		return new FDate(value);
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
		return FDate.fromIso(iso);
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
		return this.value.locale(Locale$1.SWEDISH).week();
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
		if (this.isValid()) return this.value.locale(getLocale()).format("MMMM");
		else return "";
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
		if (this.isValid()) return this.value.locale(getLocale()).format("MMM");
		else return "";
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
		if (this.isValid()) return this.value.locale(getLocale()).format("dddd");
		else return "";
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
		if (this.isValid()) return this.value.locale(getLocale()).format("ddd");
		else return "";
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
		if (!this.isValid()) return 0;
		const result = Number.parseInt(this.value.format("d"), 10);
		if (!result) return Weekday$1.SUNDAY;
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
		return new FDate(this.value.startOf("month"));
	}
	/**
	* Returns a cloned {@link FDate} object and set it to the end of month.
	*
	* @public
	*/
	endOfMonth() {
		return new FDate(this.value.endOf("month"));
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
		return new FDate(this.value.add(value, "day"));
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
		return new FDate(this.value.add(value, "month"));
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
		return new FDate(this.value.add(value, "year"));
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
		if (typeof rhs === "string") rhs = FDate.fromIso(rhs);
		return this.value.isSame(rhs.value, "day");
	}
	/**
	* Returns true if this date is before given date.
	*
	* If the dates are the same this function returns false.
	*/
	isBefore(rhs) {
		if (typeof rhs === "string") rhs = FDate.fromIso(rhs);
		return this.value.isBefore(rhs.value, "day");
	}
	/**
	* Returns true if this date is after given date.
	*
	* If the dates are the same this function returns false.
	*/
	isAfter(rhs) {
		if (typeof rhs === "string") rhs = FDate.fromIso(rhs);
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
		if (typeof a === "string") a = FDate.fromIso(a);
		if (typeof b === "string") b = FDate.fromIso(b);
		const aInvalid = !a.isValid();
		const bInvalid = !b.isValid();
		if (aInvalid || bInvalid) if (aInvalid && bInvalid) return 0;
		else if (aInvalid) return 1;
		else return -1;
		if (a.equals(b)) return 0;
		else if (a.isBefore(b)) return -1;
		else return 1;
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
	toString(format = DateFormat$1.ISO8601) {
		if (this.isValid()) {
			const template = formatter$1[getLocale()][format];
			return this.value.locale(getLocale()).format(template);
		} else return "";
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
		return this.toString(DateFormat$1.ISO8601);
	}
};
/**
* @public
*/
function parseDate(value) {
	if (isEmpty(value)) return;
	const normalized = normalizeDateFormat(value);
	if (!normalized) return;
	const date = FDate.fromIso(normalized);
	if (date.isValid()) return date.toString();
	else return;
}
/**
* Strips all whitespace from the text (not only leading and trailing)
*
* @public
* @param text - Text to strip whitespace from.
* @returns Text with whitespace stripped.
*/
function stripWhitespace(text) {
	return text.replaceAll(/\s+/g, "");
}
var NUMBER_REGEXP$1 = /^(-?\d+)([,.]\d+)?$/;
function replaceCommaWithDot(str) {
	return str.replace(",", ".");
}
function replaceMinusSignWithDash(str) {
	return str.replace("−", "-");
}
/**
* @public
*/
function parseNumber(value, fractionDigits) {
	if (isEmpty(value)) return;
	const numberString = replaceCommaWithDot(replaceMinusSignWithDash(stripWhitespace(value)));
	if (!NUMBER_REGEXP$1.test(numberString)) return;
	const number = Number(numberString);
	const parsedNumber = isSet(fractionDigits) ? getNumberWithFraction(number, fractionDigits) : number;
	return Number.isNaN(parsedNumber) ? void 0 : parsedNumber;
}
/**
* @internal
*/
function getNumberWithFraction(value, fractionDigits) {
	if (fractionDigits < 0) return NaN;
	const exp = 10 ** fractionDigits;
	return Math.sign(value) * (Math.round(Math.abs(value) * exp) / exp);
}
function getNowDetails(now) {
	const nowIso = now.toString();
	return {
		nowCentury: nowIso.slice(0, 2),
		nowYear: nowIso.slice(2, 4),
		nowMonthDay: nowIso.slice(5, 7) + nowIso.slice(8, 10)
	};
}
/**
* Resolves missing century.
*
* ```
* getCentury("22", "01", "01", true, FDate.now()) // => "19"
* ```
*
* @internal
*/
function resolveCentury(year, month, day, hasPlus, now) {
	const { nowCentury, nowYear, nowMonthDay } = getNowDetails(now);
	let subtractCenturies = 0;
	if (hasPlus) subtractCenturies += 1;
	if (year > nowYear || year === nowYear && !hasPlus && `${month}${day}` > nowMonthDay) subtractCenturies += 1;
	return (Number(nowCentury) - subtractCenturies).toString();
}
var PERSONNUMMER_REGEXP = /^(?<century>\d{2})?(?<year>\d{2})(?<month>\d{2})(?<day>\d{2})(?<sign>[+-])?(?<check>\d{4})$/;
function getDayWithoutSamordning(day) {
	return (Number(day) % 60).toString().padStart(2, "0");
}
function getPersonnummerString(century, year, month, day, check) {
	return `${century}${year}${month}${day}-${check}`;
}
/**
* Checks if date is valid and within valid period.
* The valid period is between 1840-05-06 (first registered personnummer) and today's date.
*
* @internal
*/
function isValidDate(date, now) {
	if (!date.isValid() || date.isBefore("1840-05-06") || date.isAfter(now)) return false;
	return true;
}
/**
* Parses 10- and 12-digit personnummers.
*
* @public
*/
function parsePersonnummer(value, now = FDate.now()) {
	if (!isSet(value)) return;
	const match = stripWhitespace(value).match(PERSONNUMMER_REGEXP);
	if (!match) return;
	const { year, month, day, sign, check } = match.groups;
	const dayWithoutSamordning = getDayWithoutSamordning(day);
	const century = match.groups?.century ?? resolveCentury(year, month, dayWithoutSamordning, sign === "+", now);
	if (day === "60") return getPersonnummerString(century, year, month, day, check);
	if (!isValidDate(FDate.fromYearMonthDay(century + year, month, dayWithoutSamordning), now)) return;
	return getPersonnummerString(century, year, month, day, check);
}
/**
* Parses 10- and 12-digit personnummers with Luhn validation.
*
* @public
*/
function parsePersonnummerLuhn(value) {
	const parsed = parsePersonnummer(value);
	if (!parsed) return;
	if (!validChecksum(parsed)) return;
	return parsed;
}
/**
* Formats personnummer to a 8-digit date.
*
* @public
*/
function formatPersonnummerToDate(value) {
	const datePart = parseDate(parsePersonnummer(value)?.slice(0, 8) ?? "");
	if (!datePart) return;
	return FDate.fromIso(datePart);
}
var PLUSGIRO_REGEXP = /^\d{1,7}-?\d$/;
function hyphenShouldBeAdded(value) {
	return value.length >= 2 && value.length <= 8;
}
/**
* @public
*/
function parsePlusgiro(value) {
	if (isEmpty(value)) return;
	/**
	* Add spaces between each pair of digits before the hyphen back-to-front.
	* If the number of digits is odd then the first pair in the string can be a single digit.
	* If the number of characters is 9, there will be a space after the first 3 characters.
	*/
	value = value.replaceAll(" ", "");
	value = value.replaceAll(/\D/g, "");
	if (!PLUSGIRO_REGEXP.test(value) || !testLuhnChecksum(value.replaceAll(/\D/g, ""))) return;
	if (hyphenShouldBeAdded(value)) value = `${value.slice(0, -1)}-${value.at(-1)}`;
	const startOffset = 4;
	let formattedString = value.slice(-startOffset);
	const step = 2;
	for (let i = value.length - startOffset; i >= (value.length === 9 ? 3 : 1); i -= step) formattedString = `${value.slice(Math.max(i - step, 0), i)} ${formattedString}`;
	if (value.length === 9) formattedString = value.slice(0, 1) + formattedString;
	return formattedString;
}
/**
* @internal
*/
var POSTAL_CODE_REGEXP = /^([1-9]\d{2}) ?(\d{2})$/;
/**
* @public
*/
function formatPostalCode(value) {
	if (isEmpty(value)) return;
	const match = value.match(POSTAL_CODE_REGEXP);
	if (match === null) return;
	return `${match[1]} ${match[2]}`;
}
/**
* @public
*/
function parsePostalCode(value) {
	return formatPostalCode(value);
}
var ORGANISATIONSNUMMER_REGEXP = /^(\d{6})-?(\d{4})$/;
/**
* @public
*/
function parseOrganisationsnummer(value) {
	if (isEmpty(value)) return;
	const match = value.match(ORGANISATIONSNUMMER_REGEXP);
	if (!match) return;
	if (!testLuhnChecksum(`${match[1]}${match[2]}`)) return;
	return `${match[1]}-${match[2]}`;
}
/**
* Check if an element is visible in the dom
*
* @public
*/
function isVisible(element) {
	return Boolean(element.offsetWidth || element.offsetHeight || element.getClientRects().length > 0);
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
		const scroll = element.getBoundingClientRect().top - bodyRect.top - offset;
		window.scrollTo({
			top: scroll,
			behavior: "smooth"
		});
		return Promise.resolve();
	} else return scrollToSlow(element, arg.duration ?? 500, arg.offset ?? 0);
}
/**
* Scroll to element with given duration
*
* @param element - Element to scroll into view
* @param duration - Duration in milliseconds
* @param offset - Set vertical offset, default 0px
*/
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
				const top = tween(1 - stepsLeft / steps);
				window.scrollTo({
					top,
					left: 0
				});
			} else {
				clearInterval(requestAnimationFrame);
				resolve();
			}
		}, interval);
	});
}
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
	"*[tabindex]:not([tabindex=\"-1\"])"
].join(", ");
function isHTMLElement(element) {
	return Boolean(element && element instanceof HTMLElement);
}
/**
* Give focus to a given element.
*
* For convenience it will ignore `null` and `undefined` as element parameter.
*
* If in a Vue context, please refer to the `focus` method included in `@fkui/vue`.
*
* @public
* @param element - Element to focus.
* @param options - Focus options. If you pass boolean `true` or `false` it sets the `force` option.
*/
function focus$1(element, options = {}) {
	if (typeof options === "boolean") options = { force: options };
	if (isHTMLElement(element)) {
		if (options.force && !isFocusable(element)) element.setAttribute("tabindex", "-1");
		const { force, scrollToTop, ...params } = options;
		element.focus(params);
		if (scrollToTop) {
			element.focus({
				...params,
				preventScroll: true
			});
			scrollTo(element);
		} else element.focus(params);
	}
}
/**
* Check if an element is focusable (visible and either interactive or with
* tabindex). This includes programatically focusable elements.
*
* @public
* @param element - An `Element` for which to test focusability.
* @returns `true` if the element is focusable, otherwise `false`.
*/
function isFocusable(element) {
	const visible = element instanceof HTMLElement ? isVisible(element) : false;
	return isTabbable(element) || visible && element.matches("*[tabindex=\"-1\"]");
}
/**
* Check if an element is disabled.
*
* @public
* @param element - An `Element`to test disabled.
* @returns `true`if the element is disabled.
*
*/
function isDisabled(element) {
	return Boolean(element.disabled);
}
/**
* Check if an element is tabbable (visible and either interactive or
* non-negative tabindex). This does not include programatically focusable
* elements.
*
* @public
* @param element - An `Element` for which to test focusability.
* @returns `true` if the element is focusable, otherwise `false`.
*/
function isTabbable(element) {
	const tabindexAttr = element instanceof HTMLElement ? element.tabIndex : 0;
	const visible = element instanceof HTMLElement ? isVisible(element) : false;
	return !isDisabled(element) && tabindexAttr !== -1 && visible && element.matches(TABBABLE_ELEMENT_SELECTOR);
}
/**
* Check if element is of type radiobutton or checkbox
*
* @internal
*/
function isRadiobuttonOrCheckbox(element) {
	return element instanceof HTMLInputElement && (element.type === "radio" || element.type === "checkbox");
}
/**
* Check if element is a form element
*
* Also see {@link isValidatableHTMLElement} for a similar function but
* including HTMLFieldSetElement.
*
* @public
* @param element - Element to test
*/
function isValidatableFormElement(element) {
	return element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement;
}
var ElementIdServiceImpl = class {
	elementIdMap = /* @__PURE__ */ new Map();
	generateElementId(prefix = "fkui") {
		const id = this.nextId(prefix);
		if (document.querySelector(`#${id}`) === null) return id;
		return this.generateElementId(prefix);
	}
	nextId(prefix) {
		let elementIdWithPadding = String(this.getIdFromMap(prefix));
		while (elementIdWithPadding.length < 4) elementIdWithPadding = `0${elementIdWithPadding}`;
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
/**
* @public
*/
var ElementIdService = /* @__PURE__ */ new ElementIdServiceImpl();
var DefaultTranslationProvider = class {
	language = "sv";
	get currentLanguage() {
		return this.language;
	}
	changeLanguage(language) {
		this.language = language;
		return Promise.resolve();
	}
	translate(key, defaultValueOrArgs, args) {
		if (this.language === "cimode") return key;
		if (!isSet(defaultValueOrArgs) || typeof defaultValueOrArgs !== "string") throw new Error("Translation failed: No default value specified (key translation is not supported by the default provider)");
		return isSet(args) ? this.interpolate(defaultValueOrArgs, args) : defaultValueOrArgs;
	}
	interpolate(defaultValue, args) {
		return defaultValue.replaceAll(/{{\s*(\S+)\s*}}/g, (match, key) => {
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
/**
* @public
*/
var TranslationService = /* @__PURE__ */ new TranslationServiceImpl();
/**
* Builder to create validation error message map.
*
* @public
*/
var ValidationErrorMessageBuilder = class ValidationErrorMessageBuilder {
	/**
	* Create a new builder.
	*/
	static create() {
		return new ValidationErrorMessageBuilder();
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
		if (elementType) key += `.${elementType}`;
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
/**
* @public
*/
function getErrorMessages() {
	return ValidationErrorMessageBuilder.create().map("bankAccountNumber", "Kontonumret är inte rätt ifyllt. Kolla att det stämmer.").mapCombined("required", "bankAccountNumber", "Fyll i ett kontonummer.").map("bankgiro", "Fyll i bankgironumret med sju eller åtta siffror och bindestreck.").mapCombined("required", "bankgiro", "Fyll i bankgironumret.").mapCombined("maxLength", "bankgiro", "Bankgironumret kan inte ha mer än 9 tecken.").map("clearingNumber", "Clearingnumret är inte rätt ifyllt. Kolla att det stämmer.").mapCombined("required", "clearingNumber", "Fyll i ett clearingnummer.").map("currency", "Fyll i ett belopp.").mapCombined("required", "currency", "Fyll i ett belopp.").map("date", "Du har fyllt i ett felaktigt datum.").mapCombined("required", "date", "Välj ett datum.").map("dateFormat", "Fyll i datumet med åtta siffror.").map("decimal", "Fyll i ett värde med rätt antal decimaler.").map("email", "Mejladressen är inte korrekt ifylld.").mapCombined("required", "email", "Fyll i en mejladress.").mapCombined("matches", "email", "Kolla att mejladressen stämmer.").map("greaterThan", "Fyll i en högre siffra.").map("integer", "Fyll i siffror utan decimal.").mapCombined("required", "integer", "Fyll i en siffra.").map("lessThan", "Du har fyllt i en för hög siffra.").map("minDate", "Datumet ligger för långt bak i tiden.").mapCombined("minDate", "date", "Datumet ligger för långt bak i tiden.").map("maxDate", "Datumet ligger för långt fram i tiden.").mapCombined("maxDate", "date", "Datumet ligger för långt fram i tiden.").map("maxValue", "Du har fyllt i en för hög siffra.").map("minValue", "Fyll i en högre siffra.").map("number", "Du har fyllt i ett ogiltigt tecken. Fyll i siffror.").mapCombined("required", "number", "Fyll i en siffra.").mapCombined("minValue", "number", "Fyll i en högre siffra.").mapCombined("maxValue", "number", "Du har fyllt i en för hög siffra.").map("organisationsnummer", "Fyll i organisationsnumret med 10 siffror, till exempel 999999-9999.").mapCombined("required", "organisationsnummer", "Fyll i organisationsnumret med 10 siffror, till exempel 999999-9999.").mapCombined("maxLength", "organisationsnummer", "Organisationsnumret kan inte ha mer än 11 tecken.").map("percent", "Fyll i procent med en siffra.").mapCombined("integer", "percent", "Fyll i procent utan decimal.").mapCombined("required", "percent", "Fyll i en siffra.").mapCombined("minValue", "percent", "Fyll i en högre siffra.").mapCombined("maxValue", "percent", "Fyll i en lägre siffra.").map("personnummerFormat", "Fyll i personnumret med 10 siffror.").mapCombined("required", "personnummerFormat", "Fyll i personnumret med 10 siffror.").mapCombined("maxLength", "personnummerFormat", "Fyll i personnumret med 10 siffror.").map("personnummerLuhn", "Kolla att personnumret stämmer.").map("postalCode", "Fyll i postnumret med fem siffror.").mapCombined("required", "postalCode", "Fyll i ett postnummer.").mapCombined("maxLength", "postalCode", "Postnumret kan inte ha mer än 13 tecken.").map("phoneNumber", "Telefonnumret är inte rätt ifyllt.").mapCombined("required", "phoneNumber", "Fyll i ett telefonnummer.").mapCombined("matches", "phoneNumber", "Kolla att telefonnumret stämmer.").map("plusgiro", "Fyll i plusgironumret med siffror och bindestreck.").mapCombined("required", "plusgiro", "Fyll i plusgironumret.").mapCombined("maxLength", "plusgiro", "Plusgironumret kan inte ha mer än 11 tecken.").map("matches", "Fälten stämmer inte överens.").map("required", "Fyll i text.").map("required", "Välj minst ett alternativ.", "checkbox").map("required", "Välj ett av alternativen.", "radio").map("required", "Välj ett av alternativen.", "select").map("invalidDates", "Du kan inte välja det här datumet.").map("invalidWeekdays", "Du kan inte välja det här datumet.").map("whitelist", "Fältet innehåller otillåtna tecken. Exempel på ogiltiga tecken är /, % och \".").map("allowList", "Välj ett av alternativen i listan.").build();
}
/**
* @internal
*/
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
		for (const childElement of children) this.validationService.setTouched(childElement);
		if (!this.hasFocusableTarget(event.target)) this.removeEventListeners();
		else if (event.target.checked) this.validateFieldsetAndChildren();
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
		for (const element of validatableElements) if (element.id) this.validationService.validateElement(element.id);
	}
};
/**
* Returns validation error message candidates in prioritized order.
*
* @internal
*/
function getCandidates$1(validatorName, validators, elementType) {
	const candidates = [];
	const combinedNames = validators.map((it) => `${validatorName}.${it.name}`);
	if (elementType) {
		const combinedNamesWithType = combinedNames.map((it) => `${it}.${elementType}`);
		candidates.push(...combinedNamesWithType);
	}
	candidates.push(...combinedNames);
	if (elementType) candidates.push(`${validatorName}.${elementType}`);
	candidates.push(validatorName);
	return candidates;
}
/**
* Resolves element type for a `ValidatableHTMLElement`.
*
* Input types other than text, radio, checkbox returns \"text\".
* Fieldset returns \"radio\" or \"checkbox\" when it contains radio or checkbox elements.
*
* @internal
*/
function getElementType(element) {
	if (element instanceof HTMLInputElement) return element.type === "checkbox" ? "checkbox" : element.type === "radio" ? "radio" : "text";
	else if (element instanceof HTMLTextAreaElement) return "textarea";
	else if (element instanceof HTMLSelectElement) return "select";
	else if (element instanceof HTMLFieldSetElement) return getElementType(element.querySelector("input[type='checkbox'], input[type='radio']"));
}
/**
* Registered validators.
*
* @internal
*/
var registry = {};
/**
* Returns true if given element is a validatable element.
*
* Also see {@link isValidatableFormElement} for a similar function but
* excluding HTMLFieldSetElement.
*
* @public
* @param element - Element to test
*/
function isValidatableHTMLElement(element) {
	if (element.classList.contains("card")) return true;
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
		if (clear) this.clearErrorMessages();
		this.validationErrorMessages = {
			...this.validationErrorMessages,
			...messages
		};
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
		if (!hasExistingReference) validatorConfigs = newValidatorConfigs;
		else if (this.shouldApplyNewConfigOnBaseConfig(isBaseConfigs, elementValidatorsReference)) validatorConfigs = this.mergeValidatorConfigs(elementValidatorsReference.baseValidatorConfigs, newValidatorConfigs);
		else if (isBaseConfigs) {
			validatorConfigs = this.mergeValidatorConfigs(newValidatorConfigs, elementValidatorsReference.validatorConfigs);
			elementValidatorsReference.baseValidatorConfigs = newValidatorConfigs;
		} else validatorConfigs = newValidatorConfigs;
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
		if (!isValidatableHTMLElement(element)) return;
		const validatorConfigs = this.decideEffectiveValidatorReference(element, newValidatorConfigs, isBaseConfigs);
		this.dispatchValidationConfig(validatorConfigs, element);
		if (element instanceof HTMLFieldSetElement) createFieldsetValidator(element, this);
		this.setRequiredAttribute(element, validatorConfigs);
		const foundValidators = this.getValidators(validatorConfigs);
		if (foundValidators.length > 0) element.dataset.validation = "";
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
		return {
			...isSet(newConfig.required) ? { required: {} } : void 0,
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
				} else element.dispatchEvent(new CustomEvent("pending-validity", { bubbles: false }));
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
	async isValid(src, root = document) {
		function isValidSync(src) {
			if (!src) return false;
			else if (Array.isArray(src)) return src.every((it) => isValidSync(it));
			else if (typeof src === "string") return isValidSync(root.querySelector(`#${src}`));
			else if (isValidatableFormElement(src)) return src.validity.valid;
			else return src.querySelectorAll(":invalid").length === 0;
		}
		return isValidSync(src);
	}
	async validateElement(src) {
		if (!src) return {
			isValid: true,
			isTouched: false,
			isSubmitted: false,
			error: null
		};
		if (typeof src === "string") {
			const element = document.querySelector(`#${src}`);
			if (!element) throw new Error(`Element with id "${src}" not found when calling validateElement(..)`);
			src = element;
		}
		if (!isValidatableHTMLElement(src)) {
			const ref = `${src.tagName.toLowerCase()}#${src.id}`;
			throw new Error(`Element "${ref}" is not a validatable element`);
		}
		const element = src;
		if (!hasValidators(element)) {
			const event = new CustomEvent("validate", { bubbles: false });
			element.dispatchEvent(event);
			return {
				isValid: true,
				isTouched: false,
				isSubmitted: false,
				error: null
			};
		}
		return new Promise((resolve, reject) => {
			const once = (event) => {
				element.removeEventListener("validity", once);
				clearTimeout(watchdog);
				const { touched: isTouched = false, submitted: isSubmitted = false } = this.getState(element.id);
				const { isValid, validationMessage } = event.detail;
				resolve({
					isValid,
					isTouched,
					isSubmitted,
					error: isValid ? null : validationMessage
				});
			};
			element.addEventListener("validity", once);
			const watchdog = setTimeout(() => {
				const ref = `${element.tagName.toLowerCase()}#${element.id}`;
				element.removeEventListener("validity", once);
				reject(`Element "${ref}" did not respond with validity event after 500ms`);
			}, 500);
			const event = new CustomEvent("validate", { bubbles: false });
			element.dispatchEvent(event);
		});
	}
	async validateAllElements(root) {
		const promises = this.getValidatableElements(root).map((it) => this.validateElement(it));
		await Promise.all(promises);
	}
	setState(element, validationState) {
		if (!element) return;
		else if (typeof element === "string") {
			const found = document.querySelector(`#${element}`);
			this.setState(found, validationState);
		} else if (!isValidatableHTMLElement(element)) {
			const childElements = this.getValidatableElements(element);
			for (const childElement of childElements) this.setState(childElement, validationState);
		} else {
			const existingState = this.validationStates[element.id];
			if (existingState) this.validationStates[element.id] = {
				...existingState,
				...validationState
			};
			else this.validationStates[element.id] = validationState;
		}
	}
	setSubmitted(element) {
		this.setState(element, { submitted: true });
	}
	setTouched(element) {
		this.setState(element, { touched: true });
	}
	setError(element, message) {
		this.setState(element, { serverError: message });
	}
	resetState(element) {
		this.setState(element, {
			touched: false,
			submitted: false,
			serverError: void 0
		});
	}
	getValidatableElements(parent) {
		if (!parent) return [];
		else if (typeof parent === "string") {
			const element = document.querySelector(`#${parent}`);
			return this.getValidatableElements(element);
		} else {
			const selector = [
				"input",
				"textarea",
				"select",
				"fieldset"
			].join(",");
			return Array.from(parent.querySelectorAll(selector));
		}
	}
	setRequiredAttribute(element, validatorConfigs) {
		if (!validatorConfigs.required) return;
		if (validatorConfigs.required.enabled !== false) {
			element.dataset.required = "";
			if (isValidatableFormElement(element)) element.setAttribute("required", "");
		} else {
			delete element.dataset.required;
			if (isValidatableFormElement(element)) element.removeAttribute("required");
		}
	}
	useInstantValidation(foundValidators, validatorConfigs) {
		return foundValidators.some((validator) => {
			const config = validatorConfigs[validator.name];
			const instantConfig = isSet(config) ? config.instant : void 0;
			return validator.instant && instantConfig !== false || instantConfig === true;
		});
	}
	getState(id) {
		return this.validationStates[id];
	}
	getExistingStateOrSetDefault(element) {
		let validationState = this.getState(element.id);
		if (!validationState) {
			validationState = {
				touched: false,
				submitted: false
			};
			this.setState(element, validationState);
		}
		return validationState;
	}
	getValidators(validatorConfigs) {
		return Object.keys(validatorConfigs).map((validatorName) => {
			const validator = registry[validatorName];
			if (validator) return validator;
			throw new Error(`Validator '${validatorName}' does not exist or is not registered, see ValidatorService.registerValidator.`);
		});
	}
	getValidatorByName(name) {
		if (!(name in registry)) throw new Error(`Validator '${name}' does not exist or is not registered, see ValidatorService.registerValidator.`);
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
		if (validationState.serverError) return "ERROR";
		else if (isValid) return this.resolveValidityModeWhenValid(element);
		else return this.resolveValidityModeWhenError(element, validationState.touched, validationState.submitted);
	}
	resolveValidityModeWhenValid(element) {
		return this.hasValue(element) ? "VALID" : "INITIAL";
	}
	resolveValidityModeWhenError(element, touched, submitted) {
		return submitted || this.hasValue(element) ? "ERROR" : "INITIAL";
	}
	hasValue(element) {
		if (element instanceof HTMLFieldSetElement) return Array.from(element.querySelectorAll("input")).some((fieldsetInputElement) => {
			return this.hasValue(fieldsetInputElement);
		});
		if (element instanceof HTMLDivElement) return false;
		return Boolean(isRadiobuttonOrCheckbox(element) ? element.checked : element.value);
	}
	getValue(element) {
		if ("value" in element) return element.value.trim();
		else return "";
	}
	validateAll(element, validationState, validators, validatorConfigs) {
		if (validationState.serverError) return {
			isValid: false,
			validationMessage: validationState.serverError
		};
		if ("disabled" in element && element.disabled) return {
			isValid: true,
			validationMessage: ""
		};
		const value = this.getValue(element);
		const firstInvalidResult = validators.map((validator) => {
			return {
				isValid: this.validate(value, element, validator, validatorConfigs),
				name: validator.name
			};
		}).find((result) => !result.isValid);
		if (firstInvalidResult) return {
			isValid: false,
			validationMessage: this.getErrorMessage(firstInvalidResult.name, validators, validatorConfigs, getElementType(element))
		};
		else return {
			isValid: true,
			validationMessage: ""
		};
	}
	validate(value, element, validator, validatorConfigs) {
		const validatorConfig = validatorConfigs[validator.name] ?? {};
		/**
		* Only execute validation method if enabled is undefined or true.
		*/
		return validatorConfig.enabled === void 0 || validatorConfig.enabled === true ? validator.validation(value, element, validatorConfig) : true;
	}
	getErrorMessage(validatorName, validators, validatorConfigs, elementType) {
		const validatorConfig = validatorConfigs[validatorName];
		if (validatorConfig?.errorMessage) return validatorConfig.errorMessage;
		const key = getCandidates$1(validatorName, validators, elementType).find((candidate) => isSet(this.validationErrorMessages[candidate]));
		if (key) return this.validationErrorMessages[key] ?? validatorName.toUpperCase();
		return validatorName.toUpperCase();
	}
	getElementsAffectedByValidity(element) {
		if (element instanceof HTMLFieldSetElement) return this.getValidatableElements(element).filter((childElement) => childElement.closest("fieldset") === element);
		else return [element];
	}
	dispatchValidityEvent(element, validityEvent) {
		const affectedElements = this.getElementsAffectedByValidity(element);
		const validField = validityEvent.validityMode === "ERROR";
		const event = new CustomEvent("validity", {
			bubbles: true,
			detail: validityEvent
		});
		for (const affectedElement of affectedElements) {
			if ("setCustomValidity" in affectedElement) affectedElement.setCustomValidity(validityEvent.validationMessage);
			affectedElement.setAttribute("aria-invalid", validField.toString());
		}
		element.dispatchEvent(event);
	}
	clearAllStates() {
		this.validationStates = {};
	}
};
/**
* @public
*/
var ValidationService = /* @__PURE__ */ new ValidationServiceImpl();
/**
* @public
*/
var allowListValidator = {
	name: "allowList",
	validation(value, element, config) {
		if (isEmpty(value) || config.list === void 0 || config.list.length === 0) return true;
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
	if (Array.isArray(value)) return value;
	else return [value];
}
var blacklistValidator = {
	name: "blacklist",
	validation(value, _element, config) {
		if (!config.values) throw new Error("config.exclude must have values");
		return !toArray(config.values).some((it) => String(it) === value);
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
		if (isEmpty(value)) return true;
		const normalized = normalizeDateFormat(value);
		if (!normalized) return false;
		return FDate.fromIso(normalized).isValid();
	}
};
var dateFormatValidator = {
	name: "dateFormat",
	validation(value) {
		if (isEmpty(value)) return true;
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
		const valueWithoutWhitespace = isSet(value) ? stripWhitespace(String(value)) : value;
		const minDecimalsAsNumber = isSet(config.minDecimals) ? Number(config.minDecimals) : void 0;
		const maxDecimalsAsNumber = isSet(config.maxDecimals) ? Number(config.maxDecimals) : void 0;
		if (config.minDecimals && Number.isNaN(minDecimalsAsNumber)) throw new Error("config.minDecimals must be a number");
		if (config.maxDecimals && Number.isNaN(maxDecimalsAsNumber)) throw new Error("config.maxDecimals must be a number");
		return isEmpty(valueWithoutWhitespace) || createNumberRegexp(minDecimalsAsNumber, maxDecimalsAsNumber).test(valueWithoutWhitespace);
	}
};
var emailValidator = {
	name: "email",
	validation(value, _element, config) {
		const maxLength = config.maxLength ?? 254;
		const EMAIL_REGEXP = new RegExp(`^(?=.{1,${String(maxLength)}}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_\`a-z{|}~åäöÅÄÖ]+(\\.[-!#$%&'*+/0-9=?A-Z^_\`a-z{|}~åäöÅÄÖ]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$`);
		return isEmpty(value) || EMAIL_REGEXP.test(value);
	}
};
/**
* @internal
*/
function numberValidator$1(value, config, name, compare) {
	if (value === "") return true;
	const limit = config[name];
	if (!isSet(limit)) return false;
	const limitAsNumber = parseNumber(String(config[name]));
	if (limitAsNumber === void 0) throw new Error(`config.${String(name)} must be a number`);
	const valueAsNumber = parseNumber(value);
	if (valueAsNumber === void 0) return false;
	return compare(valueAsNumber, limitAsNumber);
}
var greaterThanValidator = {
	name: "greaterThan",
	validation(value, _element, config) {
		return numberValidator$1(value, config, "limit", (value, limit) => value > limit);
	}
};
var NUMBER_REGEXP = /^([−-]?\d+)?$/;
var integerValidator = {
	name: "integer",
	validation(value) {
		const valueWithoutWhitespace = isSet(value) ? stripWhitespace(String(value)) : value;
		return isEmpty(valueWithoutWhitespace) || NUMBER_REGEXP.test(valueWithoutWhitespace);
	}
};
/**
* @public
*/
function isInvalidDatesConfig(value) {
	return Boolean(value.dates);
}
/**
* @public
*/
var invalidDatesValidator = {
	name: "invalidDates",
	validation(value, element, config) {
		if (isEmpty(value)) return true;
		if (!isInvalidDatesConfig(config)) throw new Error(`Invalid invalidDates config for ${element.id}`);
		return !config.dates.includes(value);
	}
};
/**
* @public
*/
function isInvalidWeekdaysConfig(value) {
	return Boolean(value.days);
}
/**
* @public
*/
var invalidWeekdaysValidator = {
	name: "invalidWeekdays",
	validation(value, element, config) {
		if (isEmpty(value)) return true;
		if (!isInvalidWeekdaysConfig(config)) throw new Error(`Invalid invalidWeekdays config for ${element.id}`);
		const day = FDate.fromIso(value).weekDay;
		return !config.days.includes(day);
	}
};
var lessThanValidator = {
	name: "lessThan",
	validation(value, _element, config) {
		return numberValidator$1(value, config, "limit", (value, limit) => value < limit);
	}
};
var matchesValidator = {
	name: "matches",
	validation(value, _element, config) {
		if (!isSet(config.id) || !isSet(value)) return true;
		return document.querySelector(`#${config.id}`).value === value;
	}
};
var maxDateValidator = {
	name: "maxDate",
	validation(value, _element, config) {
		if (isEmpty(value)) return true;
		const normalizedValue = normalizeDateFormat(value);
		if (!normalizedValue) return false;
		const parsed = FDate.fromIso(normalizedValue);
		const limit = FDate.fromIso(validLimit(config.limit));
		return parsed.equals(limit) || parsed.isBefore(limit);
	}
};
var maxLengthValidator = {
	name: "maxLength",
	validation(value, _element, config) {
		const { length = 0 } = config;
		return length > 0 && value ? value.length <= length : true;
	}
};
var maxValueValidator = {
	name: "maxValue",
	validation(value, _element, config) {
		return numberValidator$1(value, config, this.name, (value, limit) => value <= limit);
	}
};
var minDateValidator = {
	name: "minDate",
	validation(value, _element, config) {
		if (isEmpty(value)) return true;
		const normalizedValue = normalizeDateFormat(value);
		if (!normalizedValue) return false;
		const parsed = FDate.fromIso(normalizedValue);
		const limit = FDate.fromIso(validLimit(config.limit));
		return parsed.equals(limit) || parsed.isAfter(limit);
	}
};
var minLengthValidator = {
	name: "minLength",
	validation(value, _element, config) {
		const { length = 0 } = config;
		return length > 0 && value ? value.length >= length : true;
	}
};
var minValueValidator = {
	name: "minValue",
	validation(value, _element, config) {
		return numberValidator$1(value, config, this.name, (value, limit) => value >= limit);
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
var PERCENT_REGEXP = /^([+-]?\d+)([,.]\d+)?$/;
var percentValidator = {
	name: "percent",
	validation(value) {
		const valueWithoutWhitespace = isSet(value) ? stripWhitespace(String(value)) : value;
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
		if (!valuePnr) return true;
		const otherFieldPnr = parsePersonnummer(String(config.otherField));
		if (!otherFieldPnr) return true;
		if (valuePnr === otherFieldPnr) return false;
		return true;
	}
};
var personnummerOlder = {
	name: "personnummerOlder",
	validation(value, _element, config) {
		const valueAsDate = formatPersonnummerToDate(value);
		const otherAsDate = formatPersonnummerToDate(String(config.otherField));
		if (!valueAsDate || !otherAsDate) return true;
		return FDate.compare(valueAsDate, otherAsDate) !== 1;
	}
};
var personnummerYounger = {
	name: "personnummerYounger",
	validation(value, _element, config) {
		const valueAsDate = formatPersonnummerToDate(value);
		const otherAsDate = formatPersonnummerToDate(String(config.otherField));
		if (!valueAsDate || !otherAsDate) return true;
		return FDate.compare(valueAsDate, otherAsDate) !== -1;
	}
};
var PHONE_NUMBER_REGEXP = /^(\+?[ ()/_-]*(\d[ ()/_-]*?){3,17})$/;
var phoneNumberValidator = {
	name: "phoneNumber",
	validation(value) {
		if (isEmpty(value)) return true;
		if (!isString(value) || value.length > 21) return false;
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
		if (element instanceof HTMLFieldSetElement) return validateFieldset(element);
		else if (isRadiobuttonOrCheckbox(element)) return validateChecked(element);
		else return validateInput(value);
	}
};
var WHITELIST_REGEXP = /^[\d\n\r !()*+,.:=?@A-Za-z\u00C0-\u00FF-]*$/;
/**
* List of all available builtin validators.
*
* @public
*/
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
	{
		name: "whitelist",
		instant: true,
		validation(_value, element) {
			const value = "value" in element ? element.value : "";
			return isEmpty(value) || WHITELIST_REGEXP.test(value);
		}
	}
];
var wrapper;
/**
* Create an element for adding text to be read by a screen reader.
*
* @internal
* @param options - options for wrapper element attributes.
*/
function createScreenReaderWrapper(options) {
	if (!getWrapper()) {
		wrapper = document.createElement("div");
		wrapper.id = "fkui-alert-screen-reader";
		wrapper.className = "sr-only";
		updateProperties(options);
		document.body.append(wrapper);
	}
}
/**
* Update properties on wrapper element.
*
* @internal
* @param options - options for wrapper element attributes.
*/
function updateProperties(options) {
	const wrapper = getWrapper();
	const ariaLive = options.assertive ? "assertive" : "polite";
	wrapper.setAttribute("aria-live", ariaLive);
}
/**
* Retrieve wrapper element.
*
* @internal
*/
function getWrapper() {
	return wrapper;
}
if (typeof document !== "undefined") createScreenReaderWrapper({ assertive: false });
//#endregion
//#region ../../packages/date/lib/esm/index.js
function getDefaultExportFromCjs(x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var dayjs_min$1 = { exports: {} };
var dayjs_min = dayjs_min$1.exports;
var hasRequiredDayjs_min;
function requireDayjs_min() {
	if (hasRequiredDayjs_min) return dayjs_min$1.exports;
	hasRequiredDayjs_min = 1;
	(function(module, exports$1) {
		(function(t, e) {
			module.exports = e();
		})(dayjs_min, (function() {
			var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {
				name: "en",
				weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
				months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
				ordinal: function(t) {
					var e = [
						"th",
						"st",
						"nd",
						"rd"
					], n = t % 100;
					return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
				}
			}, m = function(t, e, n) {
				var r = String(t);
				return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
			}, v = {
				s: m,
				z: function(t) {
					var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
					return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
				},
				m: function t(e, n) {
					if (e.date() < n.date()) return -t(n, e);
					var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, c), s = n - i < 0, u = e.clone().add(r + (s ? -1 : 1), c);
					return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
				},
				a: function(t) {
					return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
				},
				p: function(t) {
					return {
						M: c,
						y: h,
						w: o,
						d: a,
						D: d,
						h: u,
						m: s,
						s: i,
						ms: r,
						Q: f
					}[t] || String(t || "").toLowerCase().replace(/s$/, "");
				},
				u: function(t) {
					return void 0 === t;
				}
			}, g = "en", D = {};
			D[g] = M;
			var p = "$isDayjsObject", S = function(t) {
				return t instanceof _ || !(!t || !t[p]);
			}, w = function t(e, n, r) {
				var i;
				if (!e) return g;
				if ("string" == typeof e) {
					var s = e.toLowerCase();
					D[s] && (i = s), n && (D[s] = n, i = s);
					var u = e.split("-");
					if (!i && u.length > 1) return t(u[0]);
				} else {
					var a = e.name;
					D[a] = e, i = a;
				}
				return !r && i && (g = i), i || !r && g;
			}, O = function(t, e) {
				if (S(t)) return t.clone();
				var n = "object" == typeof e ? e : {};
				return n.date = t, n.args = arguments, new _(n);
			}, b = v;
			b.l = w, b.i = S, b.w = function(t, e) {
				return O(t, {
					locale: e.$L,
					utc: e.$u,
					x: e.$x,
					$offset: e.$offset
				});
			};
			var _ = function() {
				function M(t) {
					this.$L = w(t.locale, null, true), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = true;
				}
				var m = M.prototype;
				return m.parse = function(t) {
					this.$d = function(t) {
						var e = t.date, n = t.utc;
						if (null === e) return /* @__PURE__ */ new Date(NaN);
						if (b.u(e)) return /* @__PURE__ */ new Date();
						if (e instanceof Date) return new Date(e);
						if ("string" == typeof e && !/Z$/i.test(e)) {
							var r = e.match($);
							if (r) {
								var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3);
								return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
							}
						}
						return new Date(e);
					}(t), this.init();
				}, m.init = function() {
					var t = this.$d;
					this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
				}, m.$utils = function() {
					return b;
				}, m.isValid = function() {
					return !(this.$d.toString() === l);
				}, m.isSame = function(t, e) {
					var n = O(t);
					return this.startOf(e) <= n && n <= this.endOf(e);
				}, m.isAfter = function(t, e) {
					return O(t) < this.startOf(e);
				}, m.isBefore = function(t, e) {
					return this.endOf(e) < O(t);
				}, m.$g = function(t, e, n) {
					return b.u(t) ? this[e] : this.set(n, t);
				}, m.unix = function() {
					return Math.floor(this.valueOf() / 1e3);
				}, m.valueOf = function() {
					return this.$d.getTime();
				}, m.startOf = function(t, e) {
					var n = this, r = !!b.u(e) || e, f = b.p(t), l = function(t, e) {
						var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
						return r ? i : i.endOf(a);
					}, $ = function(t, e) {
						return b.w(n.toDate()[t].apply(n.toDate("s"), (r ? [
							0,
							0,
							0,
							0
						] : [
							23,
							59,
							59,
							999
						]).slice(e)), n);
					}, y = this.$W, M = this.$M, m = this.$D, v = "set" + (this.$u ? "UTC" : "");
					switch (f) {
						case h: return r ? l(1, 0) : l(31, 11);
						case c: return r ? l(1, M) : l(0, M + 1);
						case o:
							var g = this.$locale().weekStart || 0, D = (y < g ? y + 7 : y) - g;
							return l(r ? m - D : m + (6 - D), M);
						case a:
						case d: return $(v + "Hours", 0);
						case u: return $(v + "Minutes", 1);
						case s: return $(v + "Seconds", 2);
						case i: return $(v + "Milliseconds", 3);
						default: return this.clone();
					}
				}, m.endOf = function(t) {
					return this.startOf(t, false);
				}, m.$set = function(t, e) {
					var n, o = b.p(t), f = "set" + (this.$u ? "UTC" : ""), l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o], $ = o === a ? this.$D + (e - this.$W) : e;
					if (o === c || o === h) {
						var y = this.clone().set(d, 1);
						y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
					} else l && this.$d[l]($);
					return this.init(), this;
				}, m.set = function(t, e) {
					return this.clone().$set(t, e);
				}, m.get = function(t) {
					return this[b.p(t)]();
				}, m.add = function(r, f) {
					var d, l = this;
					r = Number(r);
					var $ = b.p(f), y = function(t) {
						var e = O(l);
						return b.w(e.date(e.date() + Math.round(t * r)), l);
					};
					if ($ === c) return this.set(c, this.$M + r);
					if ($ === h) return this.set(h, this.$y + r);
					if ($ === a) return y(1);
					if ($ === o) return y(7);
					var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1, m = this.$d.getTime() + r * M;
					return b.w(m, this);
				}, m.subtract = function(t, e) {
					return this.add(-1 * t, e);
				}, m.format = function(t) {
					var e = this, n = this.$locale();
					if (!this.isValid()) return n.invalidDate || l;
					var r = t || "YYYY-MM-DDTHH:mm:ssZ", i = b.z(this), s = this.$H, u = this.$m, a = this.$M, o = n.weekdays, c = n.months, f = n.meridiem, h = function(t, n, i, s) {
						return t && (t[n] || t(e, r)) || i[n].slice(0, s);
					}, d = function(t) {
						return b.s(s % 12 || 12, t, "0");
					}, $ = f || function(t, e, n) {
						var r = t < 12 ? "AM" : "PM";
						return n ? r.toLowerCase() : r;
					};
					return r.replace(y, (function(t, r) {
						return r || function(t) {
							switch (t) {
								case "YY": return String(e.$y).slice(-2);
								case "YYYY": return b.s(e.$y, 4, "0");
								case "M": return a + 1;
								case "MM": return b.s(a + 1, 2, "0");
								case "MMM": return h(n.monthsShort, a, c, 3);
								case "MMMM": return h(c, a);
								case "D": return e.$D;
								case "DD": return b.s(e.$D, 2, "0");
								case "d": return String(e.$W);
								case "dd": return h(n.weekdaysMin, e.$W, o, 2);
								case "ddd": return h(n.weekdaysShort, e.$W, o, 3);
								case "dddd": return o[e.$W];
								case "H": return String(s);
								case "HH": return b.s(s, 2, "0");
								case "h": return d(1);
								case "hh": return d(2);
								case "a": return $(s, u, true);
								case "A": return $(s, u, false);
								case "m": return String(u);
								case "mm": return b.s(u, 2, "0");
								case "s": return String(e.$s);
								case "ss": return b.s(e.$s, 2, "0");
								case "SSS": return b.s(e.$ms, 3, "0");
								case "Z": return i;
							}
							return null;
						}(t) || i.replace(":", "");
					}));
				}, m.utcOffset = function() {
					return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
				}, m.diff = function(r, d, l) {
					var $, y = this, M = b.p(d), m = O(r), v = (m.utcOffset() - this.utcOffset()) * e, g = this - m, D = function() {
						return b.m(y, m);
					};
					switch (M) {
						case h:
							$ = D() / 12;
							break;
						case c:
							$ = D();
							break;
						case f:
							$ = D() / 3;
							break;
						case o:
							$ = (g - v) / 6048e5;
							break;
						case a:
							$ = (g - v) / 864e5;
							break;
						case u:
							$ = g / n;
							break;
						case s:
							$ = g / e;
							break;
						case i:
							$ = g / t;
							break;
						default: $ = g;
					}
					return l ? $ : b.a($);
				}, m.daysInMonth = function() {
					return this.endOf(c).$D;
				}, m.$locale = function() {
					return D[this.$L];
				}, m.locale = function(t, e) {
					if (!t) return this.$L;
					var n = this.clone(), r = w(t, e, true);
					return r && (n.$L = r), n;
				}, m.clone = function() {
					return b.w(this.$d, this);
				}, m.toDate = function() {
					return new Date(this.valueOf());
				}, m.toJSON = function() {
					return this.isValid() ? this.toISOString() : null;
				}, m.toISOString = function() {
					return this.$d.toISOString();
				}, m.toString = function() {
					return this.$d.toUTCString();
				}, M;
			}(), k = _.prototype;
			return O.prototype = k, [
				["$ms", r],
				["$s", i],
				["$m", s],
				["$H", u],
				["$W", a],
				["$M", c],
				["$y", h],
				["$D", d]
			].forEach((function(t) {
				k[t[1]] = function(e) {
					return this.$g(e, t[0], t[1]);
				};
			})), O.extend = function(t, e) {
				return t.$i || (t(e, _, O), t.$i = true), O;
			}, O.locale = w, O.isDayjs = S, O.unix = function(t) {
				return O(1e3 * t);
			}, O.en = D[g], O.Ls = D, O.p = {}, O;
		}));
	})(dayjs_min$1);
	return dayjs_min$1.exports;
}
var dayjs = /* @__PURE__ */ getDefaultExportFromCjs(requireDayjs_min());
var sv$1 = { exports: {} };
var sv = sv$1.exports;
var hasRequiredSv;
function requireSv() {
	if (hasRequiredSv) return sv$1.exports;
	hasRequiredSv = 1;
	(function(module, exports$1) {
		(function(e, t) {
			module.exports = t(requireDayjs_min());
		})(sv, (function(e) {
			function t(e) {
				return e && "object" == typeof e && "default" in e ? e : { default: e };
			}
			var a = t(e), d = {
				name: "sv",
				weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
				weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
				weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
				months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
				monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
				weekStart: 1,
				yearStart: 4,
				ordinal: function(e) {
					var t = e % 10;
					return "[" + e + (1 === t || 2 === t ? "a" : "e") + "]";
				},
				formats: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "YYYY-MM-DD",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY [kl.] HH:mm",
					LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
					lll: "D MMM YYYY HH:mm",
					llll: "ddd D MMM YYYY HH:mm"
				},
				relativeTime: {
					future: "om %s",
					past: "för %s sedan",
					s: "några sekunder",
					m: "en minut",
					mm: "%d minuter",
					h: "en timme",
					hh: "%d timmar",
					d: "en dag",
					dd: "%d dagar",
					M: "en månad",
					MM: "%d månader",
					y: "ett år",
					yy: "%d år"
				}
			};
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
	(function(module, exports$1) {
		(function(e, t) {
			module.exports = t();
		})(weekOfYear$1, (function() {
			var e = "week", t = "year";
			return function(i, n, r) {
				var f = n.prototype;
				f.week = function(i) {
					if (void 0 === i && (i = null), null !== i) return this.add(7 * (i - this.week()), "day");
					var n = this.$locale().yearStart || 1;
					if (11 === this.month() && this.date() > 25) {
						var f = r(this).startOf(t).add(1, t).date(n), s = r(this).endOf(e);
						if (f.isBefore(s)) return 1;
					}
					var a = r(this).startOf(t).date(n).startOf(e).subtract(1, "millisecond"), o = this.diff(a, e, true);
					return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
				}, f.weeks = function(e) {
					return void 0 === e && (e = null), this.week(e);
				};
			};
		}));
	})(weekOfYear$2);
	return weekOfYear$2.exports;
}
var weekOfYear = /* @__PURE__ */ getDefaultExportFromCjs(requireWeekOfYear());
dayjs.extend(weekOfYear);
/**
* What format to use when formatting dates.
*
* @public
*/
var DateFormat;
(function(DateFormat) {
	/**
	* Format with weekday, day, month, year as a human-readable string.
	*
	* "onsdag 4 maj 2022"
	*/
	DateFormat["FULL"] = "full";
	/**
	* Format with day, month, year as a human-readable string.
	*
	* "4 maj 2022"
	*/
	DateFormat["LONG"] = "long";
	/**
	* Format according to ISO 8601 format.
	*
	* "2022-05-04"
	*/
	DateFormat["ISO8601"] = "iso-8601";
	/**
	* Format YYYYMMDD
	*
	* "20220504"
	*/
	DateFormat["YYYYMMDD"] = "YYYYMMDD";
})(DateFormat || (DateFormat = {}));
/**
* What locale to use when formatting days.
*
* @public
*/
var Locale;
(function(Locale) {
	Locale["SWEDISH"] = "sv";
	Locale["ENGLISH"] = "en";
})(Locale || (Locale = {}));
/**
* Days in a week.
* MONDAY(1) to SUNDAY(7)
*
* @public
*/
var Weekday;
(function(Weekday) {
	Weekday[Weekday["MONDAY"] = 1] = "MONDAY";
	Weekday[Weekday["TUESDAY"] = 2] = "TUESDAY";
	Weekday[Weekday["WEDNESDAY"] = 3] = "WEDNESDAY";
	Weekday[Weekday["THURSDAY"] = 4] = "THURSDAY";
	Weekday[Weekday["FRIDAY"] = 5] = "FRIDAY";
	Weekday[Weekday["SATURDAY"] = 6] = "SATURDAY";
	Weekday[Weekday["SUNDAY"] = 7] = "SUNDAY";
})(Weekday || (Weekday = {}));
Locale.SWEDISH, Weekday.MONDAY, Weekday.TUESDAY, Weekday.WEDNESDAY, Weekday.THURSDAY, Weekday.FRIDAY, Weekday.SATURDAY, Weekday.SUNDAY, Locale.ENGLISH, Weekday.MONDAY, Weekday.TUESDAY, Weekday.WEDNESDAY, Weekday.THURSDAY, Weekday.FRIDAY, Weekday.SATURDAY, Weekday.SUNDAY;
Locale.SWEDISH, DateFormat.FULL, DateFormat.LONG, DateFormat.ISO8601, DateFormat.YYYYMMDD, Locale.ENGLISH, DateFormat.FULL, DateFormat.LONG, DateFormat.ISO8601, DateFormat.YYYYMMDD;
//#endregion
//#region ../../packages/vue/dist/esm/index.esm.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var require_global_this = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var check = function(it) {
		return it && it.Math === Math && it;
	};
	module.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || function() {
		return this;
	}() || Function("return this")();
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
		var test = function() {}.bind();
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
	var toString = uncurryThis({}.toString);
	var stringSlice = uncurryThis("".slice);
	module.exports = function(it) {
		return stringSlice(toString(it), 8, -1);
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
	var globalThis = require_global_this();
	var isCallable = require_is_callable();
	var aFunction = function(argument) {
		return isCallable(argument) ? argument : void 0;
	};
	module.exports = function(namespace, method) {
		return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
	};
}));
var require_object_is_prototype_of = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_function_uncurry_this()({}.isPrototypeOf);
}));
var require_environment_user_agent = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var navigator = require_global_this().navigator;
	var userAgent = navigator && navigator.userAgent;
	module.exports = userAgent ? String(userAgent) : "";
}));
var require_environment_v8_version = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var globalThis = require_global_this();
	var userAgent = require_environment_user_agent();
	var process = globalThis.process;
	var Deno = globalThis.Deno;
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
	module.exports = version;
}));
var require_symbol_constructor_detection = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var V8_VERSION = require_environment_v8_version();
	var fails = require_fails();
	var $String = require_global_this().String;
	module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
		var symbol = Symbol("symbol detection");
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
	var isObject = require_is_object();
	var $TypeError = TypeError;
	module.exports = function(input, pref) {
		var fn, val;
		if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
		if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
		if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
		throw new $TypeError("Can't convert object to primitive value");
	};
}));
var require_is_pure = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = false;
}));
var require_define_global_property = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var globalThis = require_global_this();
	var defineProperty = Object.defineProperty;
	module.exports = function(key, value) {
		try {
			defineProperty(globalThis, key, {
				value,
				configurable: true,
				writable: true
			});
		} catch (error) {
			globalThis[key] = value;
		}
		return value;
	};
}));
var require_shared_store = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var IS_PURE = require_is_pure();
	var globalThis = require_global_this();
	var defineGlobalProperty = require_define_global_property();
	var SHARED = "__core-js_shared__";
	var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
	(store.versions || (store.versions = [])).push({
		version: "3.49.0",
		mode: IS_PURE ? "pure" : "global",
		copyright: "© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",
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
	module.exports = Object.hasOwn || function hasOwn(it, key) {
		return hasOwnProperty(toObject(it), key);
	};
}));
var require_uid = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var uncurryThis = require_function_uncurry_this();
	var id = 0;
	var postfix = Math.random();
	var toString = uncurryThis(1.1.toString);
	module.exports = function(key) {
		return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
	};
}));
var require_well_known_symbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var globalThis = require_global_this();
	var shared = require_shared();
	var hasOwn = require_has_own_property();
	var uid = require_uid();
	var NATIVE_SYMBOL = require_symbol_constructor_detection();
	var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
	var Symbol = globalThis.Symbol;
	var WellKnownSymbolsStore = shared("wks");
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
	module.exports = function(name) {
		if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
		return WellKnownSymbolsStore[name];
	};
}));
var require_to_primitive = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var call = require_function_call();
	var isObject = require_is_object();
	var isSymbol = require_is_symbol();
	var getMethod = require_get_method();
	var ordinaryToPrimitive = require_ordinary_to_primitive();
	var wellKnownSymbol = require_well_known_symbol();
	var $TypeError = TypeError;
	var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
	module.exports = function(input, pref) {
		if (!isObject(input) || isSymbol(input)) return input;
		var exoticToPrim = getMethod(input, TO_PRIMITIVE);
		var result;
		if (exoticToPrim) {
			if (pref === void 0) pref = "default";
			result = call(exoticToPrim, input, pref);
			if (!isObject(result) || isSymbol(result)) return result;
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
	var globalThis = require_global_this();
	var isObject = require_is_object();
	var document = globalThis.document;
	var EXISTS = isObject(document) && isObject(document.createElement);
	module.exports = function(it) {
		return EXISTS ? document.createElement(it) : {};
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
	var hasOwn = require_has_own_property();
	var IE8_DOM_DEFINE = require_ie8_dom_define();
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
		O = toIndexedObject(O);
		P = toPropertyKey(P);
		if (IE8_DOM_DEFINE) try {
			return $getOwnPropertyDescriptor(O, P);
		} catch (error) {}
		if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
	};
}));
var require_v8_prototype_define_bug = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var DESCRIPTORS = require_descriptors();
	var fails = require_fails();
	module.exports = DESCRIPTORS && fails(function() {
		return Object.defineProperty(function() {}, "prototype", {
			value: 42,
			writable: false
		}).prototype !== 42;
	});
}));
var require_an_object = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isObject = require_is_object();
	var $String = String;
	var $TypeError = TypeError;
	module.exports = function(argument) {
		if (isObject(argument)) return argument;
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
		} catch (error) {}
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
	var hasOwn = require_has_own_property();
	var FunctionPrototype = Function.prototype;
	var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
	var EXISTS = hasOwn(FunctionPrototype, "name");
	module.exports = {
		EXISTS,
		PROPER: EXISTS && function something() {}.name === "something",
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
	var globalThis = require_global_this();
	var isCallable = require_is_callable();
	var WeakMap = globalThis.WeakMap;
	module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
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
	var globalThis = require_global_this();
	var isObject = require_is_object();
	var createNonEnumerableProperty = require_create_non_enumerable_property();
	var hasOwn = require_has_own_property();
	var shared = require_shared_store();
	var sharedKey = require_shared_key();
	var hiddenKeys = require_hidden_keys();
	var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
	var TypeError = globalThis.TypeError;
	var WeakMap = globalThis.WeakMap;
	var set, get, has;
	var enforce = function(it) {
		return has(it) ? get(it) : set(it, {});
	};
	var getterFor = function(TYPE) {
		return function(it) {
			var state;
			if (!isObject(it) || (state = get(it)).type !== TYPE) throw new TypeError("Incompatible receiver, " + TYPE + " required");
			return state;
		};
	};
	if (NATIVE_WEAK_MAP || shared.state) {
		var store = shared.state || (shared.state = new WeakMap());
		store.get = store.get;
		store.has = store.has;
		store.set = store.set;
		set = function(it, metadata) {
			if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
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
			if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
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
		return defineProperty(function() {}, "length", { value: 8 }).length !== 8;
	});
	var TEMPLATE = String(String).split("String");
	var makeBuiltIn = module.exports = function(value, name, options) {
		if (stringSlice($String(name), 0, 7) === "Symbol(") name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
		if (options && options.getter) name = "get " + name;
		if (options && options.setter) name = "set " + name;
		if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) if (DESCRIPTORS) defineProperty(value, "name", {
			value: name,
			configurable: true
		});
		else value.name = name;
		if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", { value: options.arity });
		try {
			if (options && hasOwn(options, "constructor") && options.constructor) {
				if (DESCRIPTORS) defineProperty(value, "prototype", { writable: false });
			} else if (value.prototype) value.prototype = void 0;
		} catch (error) {}
		var state = enforceInternalState(value);
		if (!hasOwn(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
		return value;
	};
	Function.prototype.toString = makeBuiltIn(function toString() {
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
			} catch (error) {}
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
		while (names.length > i) if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
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
	var hasOwn = require_has_own_property();
	var ownKeys = require_own_keys();
	var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
	var definePropertyModule = require_object_define_property();
	module.exports = function(target, source, exceptions) {
		var keys = ownKeys(source);
		var defineProperty = definePropertyModule.f;
		var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
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
	var globalThis = require_global_this();
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
		if (GLOBAL) target = globalThis;
		else if (STATIC) target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
		else target = globalThis[TARGET] && globalThis[TARGET].prototype;
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
	var EmptyConstructor = function() {};
	var scriptTag = function(content) {
		return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
	};
	var NullProtoObjectViaActiveX = function(activeXDocument) {
		activeXDocument.write(scriptTag(""));
		activeXDocument.close();
		var temp = activeXDocument.parentWindow.Object;
		activeXDocument = null;
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
		} catch (error) {}
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
	module.exports = DESCRIPTORS && !function() {
		if (this !== void 0) return true;
		try {
			Object.defineProperty([], "length", { writable: false }).length = 1;
		} catch (error) {
			return error instanceof TypeError;
		}
	}() ? function(O, length) {
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
var require_es_array_push = /* @__PURE__ */ __commonJSMin((() => {
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
	var Set = SetHelpers.Set;
	var SetPrototype = SetHelpers.proto;
	var forEach = uncurryThis(SetPrototype.forEach);
	var keys = uncurryThis(SetPrototype.keys);
	var next = keys(new Set()).next;
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
	var Set = SetHelpers.Set;
	var add = SetHelpers.add;
	module.exports = function(set) {
		var result = new Set();
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
		} catch (error) {}
	};
}));
var require_set_size = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_function_uncurry_this_accessor()(require_set_helpers().proto, "size", "get") || function(set) {
		return set.size;
	};
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
		var Set = getBuiltIn("Set");
		try {
			new Set()[name](createSetLike(0));
			try {
				new Set()[name](createSetLike(-1));
				return false;
			} catch (error2) {
				if (!callback) return true;
				try {
					new Set()[name](createSetLikeWithInfinitySize(-Infinity));
					return false;
				} catch (error) {
					return callback(new Set([1, 2])[name](createSetLikeWithInfinitySize(Infinity)));
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
			var baseSet = new Set([
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
	var Set = SetHelpers.Set;
	var add = SetHelpers.add;
	var has = SetHelpers.has;
	module.exports = function intersection(other) {
		var O = aSet(this);
		var otherRec = getSetRecord(other);
		var result = new Set();
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
			return String(Array.from(new Set([
				1,
				2,
				3
			]).intersection(new Set([3, 2])))) !== "3,2";
		})
	}, { intersection });
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
require_es_array_push();
require_es_set_difference_v2();
require_es_set_intersection_v2();
require_es_set_is_disjoint_from_v2();
require_es_set_is_subset_of_v2();
require_es_set_is_superset_of_v2();
require_es_set_symmetric_difference_v2();
require_es_set_union_v2();
var Flip = new Set(["horizontal", "vertical"]);
var Rotate = new Set([
	"90",
	"180",
	"270"
]);
var FIcon_vue_vue_type_script_lang_default = /* @__PURE__ */ defineComponent({
	name: "FIcon",
	inheritAttrs: false,
	props: {
		name: {
			type: String,
			required: true
		},
		library: {
			type: String,
			required: false,
			default: "f"
		},
		flip: {
			type: String,
			default: null,
			required: false,
			validator(value) {
				return Flip.has(value);
			}
		},
		rotate: {
			type: String,
			default: null,
			required: false,
			validator(value) {
				return Rotate.has(value);
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
			if (this.flip) classes.push(`icon--flip-${this.flip}`);
			if (this.rotate) classes.push(`icon--rotate-${this.rotate}`);
			return classes;
		},
		ariaHidden() {
			const slotUsed = Boolean(this.$slots.default);
			const ariaLabel = this.$attrs["aria-label"] !== void 0;
			const ariaLabelledby = this.$attrs["aria-labelledby"] !== void 0;
			const ariaDescription = this.$attrs["aria-description"] !== void 0;
			const ariaDescribedby = this.$attrs["aria-describedby"] !== void 0;
			return slotUsed || ariaLabel || ariaLabelledby || ariaDescription || ariaDescribedby ? void 0 : "true";
		}
	}
});
var _plugin_vue_export_helper_default$1 = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _hoisted_1$67 = ["aria-hidden"];
var _hoisted_2$50 = ["href"];
function _sfc_render$51(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("svg", mergeProps(_ctx.$attrs, {
		focusable: "false",
		class: ["icon", [_ctx.spriteKey, ..._ctx.modifiers]],
		"aria-hidden": _ctx.ariaHidden
	}), [
		renderSlot(_ctx.$slots, "default"),
		_cache[0] || (_cache[0] = createTextVNode()),
		createBaseVNode("use", { href: _ctx.spriteId }, null, 8, _hoisted_2$50)
	], 16, _hoisted_1$67);
}
var FIcon_default = /* @__PURE__ */ _plugin_vue_export_helper_default$1(FIcon_vue_vue_type_script_lang_default, [["render", _sfc_render$51]]);
var DATA_TEST_ATTRIBUTE_NAME = "data-test";
function throwErrorIfEmpty(value) {
	if (!value) throw new Error(`Did you forgot to add a value to v-test?`);
}
var TestDirective = {
	mounted(el, { value }) {
		throwErrorIfEmpty(value);
		el.setAttribute(DATA_TEST_ATTRIBUTE_NAME, value);
	},
	updated(el, { value }) {
		throwErrorIfEmpty(value);
		el.setAttribute(DATA_TEST_ATTRIBUTE_NAME, value);
	}
};
/**
* @public
*/
var TestPlugin = { install(app) {
	app.directive("test", TestDirective);
} };
/**
* @internal
*/
function translate(key, defaultValueOrArgs, args) {
	const { provider } = TranslationService;
	return provider.translate(key, defaultValueOrArgs, args);
}
/**
* Translation function.
* @public
*/
function useTranslate() {
	return translate;
}
var require__listCacheClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Removes all key-value entries from the list cache.
	*
	* @private
	* @name clear
	* @memberOf ListCache
	*/
	function listCacheClear() {
		this.__data__ = [];
		this.size = 0;
	}
	module.exports = listCacheClear;
}));
var require_eq = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Performs a
	* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	* comparison between two values to determine if they are equivalent.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to compare.
	* @param {*} other The other value to compare.
	* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	* @example
	*
	* var object = { 'a': 1 };
	* var other = { 'a': 1 };
	*
	* _.eq(object, object);
	* // => true
	*
	* _.eq(object, other);
	* // => false
	*
	* _.eq('a', 'a');
	* // => true
	*
	* _.eq('a', Object('a'));
	* // => false
	*
	* _.eq(NaN, NaN);
	* // => true
	*/
	function eq(value, other) {
		return value === other || value !== value && other !== other;
	}
	module.exports = eq;
}));
var require__assocIndexOf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var eq = require_eq();
	/**
	* Gets the index at which the `key` is found in `array` of key-value pairs.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {*} key The key to search for.
	* @returns {number} Returns the index of the matched value, else `-1`.
	*/
	function assocIndexOf(array, key) {
		var length = array.length;
		while (length--) if (eq(array[length][0], key)) return length;
		return -1;
	}
	module.exports = assocIndexOf;
}));
var require__listCacheDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf = require__assocIndexOf();
	/** Built-in value references. */
	var splice = Array.prototype.splice;
	/**
	* Removes `key` and its value from the list cache.
	*
	* @private
	* @name delete
	* @memberOf ListCache
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function listCacheDelete(key) {
		var data = this.__data__, index = assocIndexOf(data, key);
		if (index < 0) return false;
		if (index == data.length - 1) data.pop();
		else splice.call(data, index, 1);
		--this.size;
		return true;
	}
	module.exports = listCacheDelete;
}));
var require__listCacheGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf = require__assocIndexOf();
	/**
	* Gets the list cache value for `key`.
	*
	* @private
	* @name get
	* @memberOf ListCache
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function listCacheGet(key) {
		var data = this.__data__, index = assocIndexOf(data, key);
		return index < 0 ? void 0 : data[index][1];
	}
	module.exports = listCacheGet;
}));
var require__listCacheHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf = require__assocIndexOf();
	/**
	* Checks if a list cache value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf ListCache
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function listCacheHas(key) {
		return assocIndexOf(this.__data__, key) > -1;
	}
	module.exports = listCacheHas;
}));
var require__listCacheSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	require_es_array_push();
	var assocIndexOf = require__assocIndexOf();
	/**
	* Sets the list cache `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf ListCache
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the list cache instance.
	*/
	function listCacheSet(key, value) {
		var data = this.__data__, index = assocIndexOf(data, key);
		if (index < 0) {
			++this.size;
			data.push([key, value]);
		} else data[index][1] = value;
		return this;
	}
	module.exports = listCacheSet;
}));
var require__ListCache = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var listCacheClear = require__listCacheClear(), listCacheDelete = require__listCacheDelete(), listCacheGet = require__listCacheGet(), listCacheHas = require__listCacheHas(), listCacheSet = require__listCacheSet();
	/**
	* Creates an list cache object.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
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
}));
var require__stackClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ListCache = require__ListCache();
	/**
	* Removes all key-value entries from the stack.
	*
	* @private
	* @name clear
	* @memberOf Stack
	*/
	function stackClear() {
		this.__data__ = new ListCache();
		this.size = 0;
	}
	module.exports = stackClear;
}));
var require__stackDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Removes `key` and its value from the stack.
	*
	* @private
	* @name delete
	* @memberOf Stack
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function stackDelete(key) {
		var data = this.__data__, result = data["delete"](key);
		this.size = data.size;
		return result;
	}
	module.exports = stackDelete;
}));
var require__stackGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Gets the stack value for `key`.
	*
	* @private
	* @name get
	* @memberOf Stack
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function stackGet(key) {
		return this.__data__.get(key);
	}
	module.exports = stackGet;
}));
var require__stackHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if a stack value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf Stack
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function stackHas(key) {
		return this.__data__.has(key);
	}
	module.exports = stackHas;
}));
var require__freeGlobal = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = typeof global == "object" && global && global.Object === Object && global;
}));
var require__root = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var freeGlobal = require__freeGlobal();
	/** Detect free variable `self`. */
	var freeSelf = typeof self == "object" && self && self.Object === Object && self;
	module.exports = freeGlobal || freeSelf || Function("return this")();
}));
var require__Symbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__root().Symbol;
}));
var require__getRawTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol();
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	/**
	* Used to resolve the
	* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	* of values.
	*/
	var nativeObjectToString = objectProto.toString;
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
	/**
	* A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	*
	* @private
	* @param {*} value The value to query.
	* @returns {string} Returns the raw `toStringTag`.
	*/
	function getRawTag(value) {
		var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
		try {
			value[symToStringTag] = void 0;
			var unmasked = true;
		} catch (e) {}
		var result = nativeObjectToString.call(value);
		if (unmasked) if (isOwn) value[symToStringTag] = tag;
		else delete value[symToStringTag];
		return result;
	}
	module.exports = getRawTag;
}));
var require__objectToString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Used to resolve the
	* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	* of values.
	*/
	var nativeObjectToString = Object.prototype.toString;
	/**
	* Converts `value` to a string using `Object.prototype.toString`.
	*
	* @private
	* @param {*} value The value to convert.
	* @returns {string} Returns the converted string.
	*/
	function objectToString(value) {
		return nativeObjectToString.call(value);
	}
	module.exports = objectToString;
}));
var require__baseGetTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol(), getRawTag = require__getRawTag(), objectToString = require__objectToString();
	/** `Object#toString` result references. */
	var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
	/**
	* The base implementation of `getTag` without fallbacks for buggy environments.
	*
	* @private
	* @param {*} value The value to query.
	* @returns {string} Returns the `toStringTag`.
	*/
	function baseGetTag(value) {
		if (value == null) return value === void 0 ? undefinedTag : nullTag;
		return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
	}
	module.exports = baseGetTag;
}));
var require_isObject = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if `value` is the
	* [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	* of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an object, else `false`.
	* @example
	*
	* _.isObject({});
	* // => true
	*
	* _.isObject([1, 2, 3]);
	* // => true
	*
	* _.isObject(_.noop);
	* // => true
	*
	* _.isObject(null);
	* // => false
	*/
	function isObject(value) {
		var type = typeof value;
		return value != null && (type == "object" || type == "function");
	}
	module.exports = isObject;
}));
var require_isFunction = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag(), isObject = require_isObject();
	/** `Object#toString` result references. */
	var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
	/**
	* Checks if `value` is classified as a `Function` object.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a function, else `false`.
	* @example
	*
	* _.isFunction(_);
	* // => true
	*
	* _.isFunction(/abc/);
	* // => false
	*/
	function isFunction(value) {
		if (!isObject(value)) return false;
		var tag = baseGetTag(value);
		return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	module.exports = isFunction;
}));
var require__coreJsData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__root()["__core-js_shared__"];
}));
var require__isMasked = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var coreJsData = require__coreJsData();
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = function() {
		var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
		return uid ? "Symbol(src)_1." + uid : "";
	}();
	/**
	* Checks if `func` has its source masked.
	*
	* @private
	* @param {Function} func The function to check.
	* @returns {boolean} Returns `true` if `func` is masked, else `false`.
	*/
	function isMasked(func) {
		return !!maskSrcKey && maskSrcKey in func;
	}
	module.exports = isMasked;
}));
var require__toSource = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	/**
	* Converts `func` to its source code.
	*
	* @private
	* @param {Function} func The function to convert.
	* @returns {string} Returns the source code.
	*/
	function toSource(func) {
		if (func != null) {
			try {
				return funcToString.call(func);
			} catch (e) {}
			try {
				return func + "";
			} catch (e) {}
		}
		return "";
	}
	module.exports = toSource;
}));
var require__baseIsNative = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isFunction = require_isFunction(), isMasked = require__isMasked(), isObject = require_isObject(), toSource = require__toSource();
	/**
	* Used to match `RegExp`
	* [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	*/
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	/** Used for built-in method references. */
	var funcProto = Function.prototype, objectProto = Object.prototype;
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	/** Used to detect if a method is native. */
	var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	/**
	* The base implementation of `_.isNative` without bad shim checks.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a native function,
	*  else `false`.
	*/
	function baseIsNative(value) {
		if (!isObject(value) || isMasked(value)) return false;
		return (isFunction(value) ? reIsNative : reIsHostCtor).test(toSource(value));
	}
	module.exports = baseIsNative;
}));
var require__getValue = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Gets the value at `key` of `object`.
	*
	* @private
	* @param {Object} [object] The object to query.
	* @param {string} key The key of the property to get.
	* @returns {*} Returns the property value.
	*/
	function getValue(object, key) {
		return object == null ? void 0 : object[key];
	}
	module.exports = getValue;
}));
var require__getNative = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsNative = require__baseIsNative(), getValue = require__getValue();
	/**
	* Gets the native function at `key` of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {string} key The key of the method to get.
	* @returns {*} Returns the function if it's native, else `undefined`.
	*/
	function getNative(object, key) {
		var value = getValue(object, key);
		return baseIsNative(value) ? value : void 0;
	}
	module.exports = getNative;
}));
var require__Map = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "Map");
}));
var require__nativeCreate = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(Object, "create");
}));
var require__hashClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate = require__nativeCreate();
	/**
	* Removes all key-value entries from the hash.
	*
	* @private
	* @name clear
	* @memberOf Hash
	*/
	function hashClear() {
		this.__data__ = nativeCreate ? nativeCreate(null) : {};
		this.size = 0;
	}
	module.exports = hashClear;
}));
var require__hashDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Removes `key` and its value from the hash.
	*
	* @private
	* @name delete
	* @memberOf Hash
	* @param {Object} hash The hash to modify.
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function hashDelete(key) {
		var result = this.has(key) && delete this.__data__[key];
		this.size -= result ? 1 : 0;
		return result;
	}
	module.exports = hashDelete;
}));
var require__hashGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate = require__nativeCreate();
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = "__lodash_hash_undefined__";
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Gets the hash value for `key`.
	*
	* @private
	* @name get
	* @memberOf Hash
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function hashGet(key) {
		var data = this.__data__;
		if (nativeCreate) {
			var result = data[key];
			return result === HASH_UNDEFINED ? void 0 : result;
		}
		return hasOwnProperty.call(data, key) ? data[key] : void 0;
	}
	module.exports = hashGet;
}));
var require__hashHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate = require__nativeCreate();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Checks if a hash value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf Hash
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function hashHas(key) {
		var data = this.__data__;
		return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
	}
	module.exports = hashHas;
}));
var require__hashSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate = require__nativeCreate();
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = "__lodash_hash_undefined__";
	/**
	* Sets the hash `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf Hash
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the hash instance.
	*/
	function hashSet(key, value) {
		var data = this.__data__;
		this.size += this.has(key) ? 0 : 1;
		data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
		return this;
	}
	module.exports = hashSet;
}));
var require__Hash = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var hashClear = require__hashClear(), hashDelete = require__hashDelete(), hashGet = require__hashGet(), hashHas = require__hashHas(), hashSet = require__hashSet();
	/**
	* Creates a hash object.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
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
}));
var require__mapCacheClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Hash = require__Hash(), ListCache = require__ListCache(), Map = require__Map();
	/**
	* Removes all key-value entries from the map.
	*
	* @private
	* @name clear
	* @memberOf MapCache
	*/
	function mapCacheClear() {
		this.size = 0;
		this.__data__ = {
			"hash": new Hash(),
			"map": new (Map || ListCache)(),
			"string": new Hash()
		};
	}
	module.exports = mapCacheClear;
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
		function F() {}
		F.prototype.constructor = null;
		return Object.getPrototypeOf(new F()) !== F.prototype;
	});
}));
var require_object_get_prototype_of = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var hasOwn = require_has_own_property();
	var isCallable = require_is_callable();
	var toObject = require_to_object();
	var sharedKey = require_shared_key();
	var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
	var IE_PROTO = sharedKey("IE_PROTO");
	var $Object = Object;
	var ObjectPrototype = $Object.prototype;
	module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
		var object = toObject(O);
		if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
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
var require_iterators_core = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var fails = require_fails();
	var isCallable = require_is_callable();
	var isObject = require_is_object();
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
	if (!isObject(IteratorPrototype) || fails(function() {
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
	var globalThis = require_global_this();
	var anInstance = require_an_instance();
	var anObject = require_an_object();
	var isCallable = require_is_callable();
	var getPrototypeOf = require_object_get_prototype_of();
	var defineBuiltInAccessor = require_define_built_in_accessor();
	var createProperty = require_create_property();
	var fails = require_fails();
	var hasOwn = require_has_own_property();
	var wellKnownSymbol = require_well_known_symbol();
	var IteratorPrototype = require_iterators_core().IteratorPrototype;
	var DESCRIPTORS = require_descriptors();
	var IS_PURE = require_is_pure();
	var CONSTRUCTOR = "constructor";
	var ITERATOR = "Iterator";
	var TO_STRING_TAG = wellKnownSymbol("toStringTag");
	var $TypeError = TypeError;
	var NativeIterator = globalThis[ITERATOR];
	var FORCED = IS_PURE || !isCallable(NativeIterator) || NativeIterator.prototype !== IteratorPrototype || !fails(function() {
		NativeIterator({});
	});
	var IteratorConstructor = function Iterator() {
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
				if (hasOwn(this, key)) this[key] = replacement;
				else createProperty(this, key, replacement);
			}
		});
		else IteratorPrototype[key] = value;
	};
	if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);
	if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
	IteratorConstructor.prototype = IteratorPrototype;
	$({
		global: true,
		constructor: true,
		forced: FORCED
	}, { Iterator: IteratorConstructor });
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
		var IteratorProxy = function Iterator(record, state) {
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
	var globalThis = require_global_this();
	module.exports = function(METHOD_NAME, ExpectedError) {
		var Iterator = globalThis.Iterator;
		var IteratorPrototype = Iterator && Iterator.prototype;
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
var require_es_iterator_map = /* @__PURE__ */ __commonJSMin((() => {
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
	var MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("map", function() {});
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
}));
var require__isKeyable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if `value` is suitable for use as unique object key.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	*/
	function isKeyable(value) {
		var type = typeof value;
		return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
	}
	module.exports = isKeyable;
}));
var require__getMapData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	require_es_iterator_constructor();
	require_es_iterator_map();
	var isKeyable = require__isKeyable();
	/**
	* Gets the data for `map`.
	*
	* @private
	* @param {Object} map The map to query.
	* @param {string} key The reference key.
	* @returns {*} Returns the map data.
	*/
	function getMapData(map, key) {
		var data = map.__data__;
		return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
	}
	module.exports = getMapData;
}));
var require__mapCacheDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData = require__getMapData();
	/**
	* Removes `key` and its value from the map.
	*
	* @private
	* @name delete
	* @memberOf MapCache
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function mapCacheDelete(key) {
		var result = getMapData(this, key)["delete"](key);
		this.size -= result ? 1 : 0;
		return result;
	}
	module.exports = mapCacheDelete;
}));
var require__mapCacheGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData = require__getMapData();
	/**
	* Gets the map value for `key`.
	*
	* @private
	* @name get
	* @memberOf MapCache
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function mapCacheGet(key) {
		return getMapData(this, key).get(key);
	}
	module.exports = mapCacheGet;
}));
var require__mapCacheHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData = require__getMapData();
	/**
	* Checks if a map value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf MapCache
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function mapCacheHas(key) {
		return getMapData(this, key).has(key);
	}
	module.exports = mapCacheHas;
}));
var require__mapCacheSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData = require__getMapData();
	/**
	* Sets the map `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf MapCache
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the map cache instance.
	*/
	function mapCacheSet(key, value) {
		var data = getMapData(this, key), size = data.size;
		data.set(key, value);
		this.size += data.size == size ? 0 : 1;
		return this;
	}
	module.exports = mapCacheSet;
}));
var require__MapCache = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var mapCacheClear = require__mapCacheClear(), mapCacheDelete = require__mapCacheDelete(), mapCacheGet = require__mapCacheGet(), mapCacheHas = require__mapCacheHas(), mapCacheSet = require__mapCacheSet();
	/**
	* Creates a map cache object to store key-value pairs.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
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
}));
var require__stackSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	require_es_array_push();
	var ListCache = require__ListCache(), Map = require__Map(), MapCache = require__MapCache();
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	/**
	* Sets the stack `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf Stack
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the stack cache instance.
	*/
	function stackSet(key, value) {
		var data = this.__data__;
		if (data instanceof ListCache) {
			var pairs = data.__data__;
			if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
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
}));
var require__Stack = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ListCache = require__ListCache(), stackClear = require__stackClear(), stackDelete = require__stackDelete(), stackGet = require__stackGet(), stackHas = require__stackHas(), stackSet = require__stackSet();
	/**
	* Creates a stack cache object to store key-value pairs.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
	function Stack(entries) {
		this.size = (this.__data__ = new ListCache(entries)).size;
	}
	Stack.prototype.clear = stackClear;
	Stack.prototype["delete"] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	module.exports = Stack;
}));
var require__setCacheAdd = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = "__lodash_hash_undefined__";
	/**
	* Adds `value` to the array cache.
	*
	* @private
	* @name add
	* @memberOf SetCache
	* @alias push
	* @param {*} value The value to cache.
	* @returns {Object} Returns the cache instance.
	*/
	function setCacheAdd(value) {
		this.__data__.set(value, HASH_UNDEFINED);
		return this;
	}
	module.exports = setCacheAdd;
}));
var require__setCacheHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if `value` is in the array cache.
	*
	* @private
	* @name has
	* @memberOf SetCache
	* @param {*} value The value to search for.
	* @returns {boolean} Returns `true` if `value` is found, else `false`.
	*/
	function setCacheHas(value) {
		return this.__data__.has(value);
	}
	module.exports = setCacheHas;
}));
var require__SetCache = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	require_es_array_push();
	var MapCache = require__MapCache(), setCacheAdd = require__setCacheAdd(), setCacheHas = require__setCacheHas();
	/**
	*
	* Creates an array cache object to store unique values.
	*
	* @private
	* @constructor
	* @param {Array} [values] The values to cache.
	*/
	function SetCache(values) {
		var index = -1, length = values == null ? 0 : values.length;
		this.__data__ = new MapCache();
		while (++index < length) this.add(values[index]);
	}
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	module.exports = SetCache;
}));
var require__arraySome = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `_.some` for arrays without support for iteratee
	* shorthands.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} predicate The function invoked per iteration.
	* @returns {boolean} Returns `true` if any element passes the predicate check,
	*  else `false`.
	*/
	function arraySome(array, predicate) {
		var index = -1, length = array == null ? 0 : array.length;
		while (++index < length) if (predicate(array[index], index, array)) return true;
		return false;
	}
	module.exports = arraySome;
}));
var require__cacheHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if a `cache` value for `key` exists.
	*
	* @private
	* @param {Object} cache The cache to query.
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function cacheHas(cache, key) {
		return cache.has(key);
	}
	module.exports = cacheHas;
}));
var require__equalArrays = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	require_es_array_push();
	var SetCache = require__SetCache(), arraySome = require__arraySome(), cacheHas = require__cacheHas();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
	/**
	* A specialized version of `baseIsEqualDeep` for arrays with support for
	* partial deep comparisons.
	*
	* @private
	* @param {Array} array The array to compare.
	* @param {Array} other The other array to compare.
	* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	* @param {Function} customizer The function to customize comparisons.
	* @param {Function} equalFunc The function to determine equivalents of values.
	* @param {Object} stack Tracks traversed `array` and `other` objects.
	* @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	*/
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
		var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
		if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
		var arrStacked = stack.get(array);
		var othStacked = stack.get(other);
		if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
		var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
		stack.set(array, other);
		stack.set(other, array);
		while (++index < arrLength) {
			var arrValue = array[index], othValue = other[index];
			if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
			if (compared !== void 0) {
				if (compared) continue;
				result = false;
				break;
			}
			if (seen) {
				if (!arraySome(other, function(othValue, othIndex) {
					if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
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
}));
var require__Uint8Array = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__root().Uint8Array;
}));
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
	var CORRECT_ARGUMENTS = classofRaw(function() {
		return arguments;
	}()) === "Arguments";
	var tryGet = function(it, key) {
		try {
			return it[key];
		} catch (error) {}
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
		var callFn = function(value) {
			if (AS_ENTRIES) {
				anObject(value);
				return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
			}
			return INTERRUPTED ? fn(value, stop) : fn(value);
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
var require__mapToArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	require_es_iterator_constructor();
	require_es_iterator_for_each();
	/**
	* Converts `map` to its key-value pairs.
	*
	* @private
	* @param {Object} map The map to convert.
	* @returns {Array} Returns the key-value pairs.
	*/
	function mapToArray(map) {
		var index = -1, result = Array(map.size);
		map.forEach(function(value, key) {
			result[++index] = [key, value];
		});
		return result;
	}
	module.exports = mapToArray;
}));
var require__setToArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	require_es_iterator_constructor();
	require_es_iterator_for_each();
	/**
	* Converts `set` to an array of its values.
	*
	* @private
	* @param {Object} set The set to convert.
	* @returns {Array} Returns the values.
	*/
	function setToArray(set) {
		var index = -1, result = Array(set.size);
		set.forEach(function(value) {
			result[++index] = value;
		});
		return result;
	}
	module.exports = setToArray;
}));
var require__equalByTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol(), Uint8Array = require__Uint8Array(), eq = require_eq(), equalArrays = require__equalArrays(), mapToArray = require__mapToArray(), setToArray = require__setToArray();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
	/** `Object#toString` result references. */
	var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
	var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
	/**
	* A specialized version of `baseIsEqualDeep` for comparing objects of
	* the same `toStringTag`.
	*
	* **Note:** This function only supports comparing values with tags of
	* `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	*
	* @private
	* @param {Object} object The object to compare.
	* @param {Object} other The other object to compare.
	* @param {string} tag The `toStringTag` of the objects to compare.
	* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	* @param {Function} customizer The function to customize comparisons.
	* @param {Function} equalFunc The function to determine equivalents of values.
	* @param {Object} stack Tracks traversed `object` and `other` objects.
	* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	*/
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
		switch (tag) {
			case dataViewTag:
				if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
				object = object.buffer;
				other = other.buffer;
			case arrayBufferTag:
				if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) return false;
				return true;
			case boolTag:
			case dateTag:
			case numberTag: return eq(+object, +other);
			case errorTag: return object.name == other.name && object.message == other.message;
			case regexpTag:
			case stringTag: return object == other + "";
			case mapTag: var convert = mapToArray;
			case setTag:
				var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
				convert || (convert = setToArray);
				if (object.size != other.size && !isPartial) return false;
				var stacked = stack.get(object);
				if (stacked) return stacked == other;
				bitmask |= COMPARE_UNORDERED_FLAG;
				stack.set(object, other);
				var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
				stack["delete"](object);
				return result;
			case symbolTag: if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
		}
		return false;
	}
	module.exports = equalByTag;
}));
var require__arrayPush = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Appends the elements of `values` to `array`.
	*
	* @private
	* @param {Array} array The array to modify.
	* @param {Array} values The values to append.
	* @returns {Array} Returns `array`.
	*/
	function arrayPush(array, values) {
		var index = -1, length = values.length, offset = array.length;
		while (++index < length) array[offset + index] = values[index];
		return array;
	}
	module.exports = arrayPush;
}));
var require_isArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Array.isArray;
}));
var require__baseGetAllKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayPush = require__arrayPush(), isArray = require_isArray();
	/**
	* The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	* `keysFunc` and `symbolsFunc` to get the enumerable property names and
	* symbols of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {Function} keysFunc The function to get the keys of `object`.
	* @param {Function} symbolsFunc The function to get the symbols of `object`.
	* @returns {Array} Returns the array of property names and symbols.
	*/
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
		var result = keysFunc(object);
		return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	module.exports = baseGetAllKeys;
}));
var require__arrayFilter = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `_.filter` for arrays without support for
	* iteratee shorthands.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} predicate The function invoked per iteration.
	* @returns {Array} Returns the new filtered array.
	*/
	function arrayFilter(array, predicate) {
		var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
		while (++index < length) {
			var value = array[index];
			if (predicate(value, index, array)) result[resIndex++] = value;
		}
		return result;
	}
	module.exports = arrayFilter;
}));
var require_stubArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This method returns a new empty array.
	*
	* @static
	* @memberOf _
	* @since 4.13.0
	* @category Util
	* @returns {Array} Returns the new empty array.
	* @example
	*
	* var arrays = _.times(2, _.stubArray);
	*
	* console.log(arrays);
	* // => [[], []]
	*
	* console.log(arrays[0] === arrays[1]);
	* // => false
	*/
	function stubArray() {
		return [];
	}
	module.exports = stubArray;
}));
var require__getSymbols = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayFilter = require__arrayFilter(), stubArray = require_stubArray();
	/** Built-in value references. */
	var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	module.exports = !nativeGetSymbols ? stubArray : function(object) {
		if (object == null) return [];
		object = Object(object);
		return arrayFilter(nativeGetSymbols(object), function(symbol) {
			return propertyIsEnumerable.call(object, symbol);
		});
	};
}));
var require__baseTimes = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.times` without support for iteratee shorthands
	* or max array length checks.
	*
	* @private
	* @param {number} n The number of times to invoke `iteratee`.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Array} Returns the array of results.
	*/
	function baseTimes(n, iteratee) {
		var index = -1, result = Array(n);
		while (++index < n) result[index] = iteratee(index);
		return result;
	}
	module.exports = baseTimes;
}));
var require_isObjectLike = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if `value` is object-like. A value is object-like if it's not `null`
	* and has a `typeof` result of "object".
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	* @example
	*
	* _.isObjectLike({});
	* // => true
	*
	* _.isObjectLike([1, 2, 3]);
	* // => true
	*
	* _.isObjectLike(_.noop);
	* // => false
	*
	* _.isObjectLike(null);
	* // => false
	*/
	function isObjectLike(value) {
		return value != null && typeof value == "object";
	}
	module.exports = isObjectLike;
}));
var require__baseIsArguments = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag(), isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var argsTag = "[object Arguments]";
	/**
	* The base implementation of `_.isArguments`.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an `arguments` object,
	*/
	function baseIsArguments(value) {
		return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	module.exports = baseIsArguments;
}));
var require_isArguments = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsArguments = require__baseIsArguments(), isObjectLike = require_isObjectLike();
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	module.exports = baseIsArguments(function() {
		return arguments;
	}()) ? baseIsArguments : function(value) {
		return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
	};
}));
var require_stubFalse = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This method returns `false`.
	*
	* @static
	* @memberOf _
	* @since 4.13.0
	* @category Util
	* @returns {boolean} Returns `false`.
	* @example
	*
	* _.times(2, _.stubFalse);
	* // => [false, false]
	*/
	function stubFalse() {
		return false;
	}
	module.exports = stubFalse;
}));
var require_isBuffer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var root = require__root(), stubFalse = require_stubFalse();
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
	/** Built-in value references. */
	var Buffer = freeModule && freeModule.exports === freeExports ? root.Buffer : void 0;
	module.exports = (Buffer ? Buffer.isBuffer : void 0) || stubFalse;
}));
var require__isIndex = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	/**
	* Checks if `value` is a valid array-like index.
	*
	* @private
	* @param {*} value The value to check.
	* @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	* @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	*/
	function isIndex(value, length) {
		var type = typeof value;
		length = length == null ? MAX_SAFE_INTEGER : length;
		return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}
	module.exports = isIndex;
}));
var require_isLength = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	/**
	* Checks if `value` is a valid array-like length.
	*
	* **Note:** This method is loosely based on
	* [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	* @example
	*
	* _.isLength(3);
	* // => true
	*
	* _.isLength(Number.MIN_VALUE);
	* // => false
	*
	* _.isLength(Infinity);
	* // => false
	*
	* _.isLength('3');
	* // => false
	*/
	function isLength(value) {
		return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	module.exports = isLength;
}));
var require__baseIsTypedArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag(), isLength = require_isLength(), isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
	var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	/**
	* The base implementation of `_.isTypedArray` without Node.js optimizations.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	*/
	function baseIsTypedArray(value) {
		return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	module.exports = baseIsTypedArray;
}));
var require__baseUnary = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.unary` without support for storing metadata.
	*
	* @private
	* @param {Function} func The function to cap arguments for.
	* @returns {Function} Returns the new capped function.
	*/
	function baseUnary(func) {
		return function(value) {
			return func(value);
		};
	}
	module.exports = baseUnary;
}));
var require__nodeUtil = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var freeGlobal = require__freeGlobal();
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
	/** Detect free variable `process` from Node.js. */
	var freeProcess = freeModule && freeModule.exports === freeExports && freeGlobal.process;
	module.exports = function() {
		try {
			var types = freeModule && freeModule.require && freeModule.require("util").types;
			if (types) return types;
			return freeProcess && freeProcess.binding && freeProcess.binding("util");
		} catch (e) {}
	}();
}));
var require_isTypedArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsTypedArray = require__baseIsTypedArray(), baseUnary = require__baseUnary(), nodeUtil = require__nodeUtil();
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	module.exports = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
}));
var require__arrayLikeKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	require_es_array_push();
	var baseTimes = require__baseTimes(), isArguments = require_isArguments(), isArray = require_isArray(), isBuffer = require_isBuffer(), isIndex = require__isIndex(), isTypedArray = require_isTypedArray();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Creates an array of the enumerable property names of the array-like `value`.
	*
	* @private
	* @param {*} value The value to query.
	* @param {boolean} inherited Specify returning inherited property names.
	* @returns {Array} Returns the array of property names.
	*/
	function arrayLikeKeys(value, inherited) {
		var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
		for (var key in value) if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) result.push(key);
		return result;
	}
	module.exports = arrayLikeKeys;
}));
var require__isPrototype = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	/**
	* Checks if `value` is likely a prototype object.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	*/
	function isPrototype(value) {
		var Ctor = value && value.constructor;
		return value === (typeof Ctor == "function" && Ctor.prototype || objectProto);
	}
	module.exports = isPrototype;
}));
var require__overArg = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Creates a unary function that invokes `func` with its argument transformed.
	*
	* @private
	* @param {Function} func The function to wrap.
	* @param {Function} transform The argument transform.
	* @returns {Function} Returns the new function.
	*/
	function overArg(func, transform) {
		return function(arg) {
			return func(transform(arg));
		};
	}
	module.exports = overArg;
}));
var require__nativeKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__overArg()(Object.keys, Object);
}));
var require__baseKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	require_es_array_push();
	var isPrototype = require__isPrototype(), nativeKeys = require__nativeKeys();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	*/
	function baseKeys(object) {
		if (!isPrototype(object)) return nativeKeys(object);
		var result = [];
		for (var key in Object(object)) if (hasOwnProperty.call(object, key) && key != "constructor") result.push(key);
		return result;
	}
	module.exports = baseKeys;
}));
var require_isArrayLike = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isFunction = require_isFunction(), isLength = require_isLength();
	/**
	* Checks if `value` is array-like. A value is considered array-like if it's
	* not a function and has a `value.length` that's an integer greater than or
	* equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	* @example
	*
	* _.isArrayLike([1, 2, 3]);
	* // => true
	*
	* _.isArrayLike(document.body.children);
	* // => true
	*
	* _.isArrayLike('abc');
	* // => true
	*
	* _.isArrayLike(_.noop);
	* // => false
	*/
	function isArrayLike(value) {
		return value != null && isLength(value.length) && !isFunction(value);
	}
	module.exports = isArrayLike;
}));
var require_keys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayLikeKeys = require__arrayLikeKeys(), baseKeys = require__baseKeys(), isArrayLike = require_isArrayLike();
	/**
	* Creates an array of the own enumerable property names of `object`.
	*
	* **Note:** Non-object values are coerced to objects. See the
	* [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	* for more details.
	*
	* @static
	* @since 0.1.0
	* @memberOf _
	* @category Object
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	* @example
	*
	* function Foo() {
	*   this.a = 1;
	*   this.b = 2;
	* }
	*
	* Foo.prototype.c = 3;
	*
	* _.keys(new Foo);
	* // => ['a', 'b'] (iteration order is not guaranteed)
	*
	* _.keys('hi');
	* // => ['0', '1']
	*/
	function keys(object) {
		return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	module.exports = keys;
}));
var require__getAllKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetAllKeys = require__baseGetAllKeys(), getSymbols = require__getSymbols(), keys = require_keys();
	/**
	* Creates an array of own enumerable property names and symbols of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names and symbols.
	*/
	function getAllKeys(object) {
		return baseGetAllKeys(object, keys, getSymbols);
	}
	module.exports = getAllKeys;
}));
var require__equalObjects = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getAllKeys = require__getAllKeys();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* A specialized version of `baseIsEqualDeep` for objects with support for
	* partial deep comparisons.
	*
	* @private
	* @param {Object} object The object to compare.
	* @param {Object} other The other object to compare.
	* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	* @param {Function} customizer The function to customize comparisons.
	* @param {Function} equalFunc The function to determine equivalents of values.
	* @param {Object} stack Tracks traversed `object` and `other` objects.
	* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	*/
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
		var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length;
		if (objLength != getAllKeys(other).length && !isPartial) return false;
		var index = objLength;
		while (index--) {
			var key = objProps[index];
			if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return false;
		}
		var objStacked = stack.get(object);
		var othStacked = stack.get(other);
		if (objStacked && othStacked) return objStacked == other && othStacked == object;
		var result = true;
		stack.set(object, other);
		stack.set(other, object);
		var skipCtor = isPartial;
		while (++index < objLength) {
			key = objProps[index];
			var objValue = object[key], othValue = other[key];
			if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
			if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
				result = false;
				break;
			}
			skipCtor || (skipCtor = key == "constructor");
		}
		if (result && !skipCtor) {
			var objCtor = object.constructor, othCtor = other.constructor;
			if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result = false;
		}
		stack["delete"](object);
		stack["delete"](other);
		return result;
	}
	module.exports = equalObjects;
}));
var require_array_buffer_basic_detection = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined";
}));
var require_array_buffer_byte_length = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var globalThis = require_global_this();
	var uncurryThisAccessor = require_function_uncurry_this_accessor();
	var classof = require_classof_raw();
	var ArrayBuffer = globalThis.ArrayBuffer;
	var TypeError = globalThis.TypeError;
	module.exports = ArrayBuffer && uncurryThisAccessor(ArrayBuffer.prototype, "byteLength", "get") || function(O) {
		if (classof(O) !== "ArrayBuffer") throw new TypeError("ArrayBuffer expected");
		return O.byteLength;
	};
}));
var require_array_buffer_is_detached = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var globalThis = require_global_this();
	var NATIVE_ARRAY_BUFFER = require_array_buffer_basic_detection();
	var arrayBufferByteLength = require_array_buffer_byte_length();
	var DataView = globalThis.DataView;
	module.exports = function(O) {
		if (!NATIVE_ARRAY_BUFFER || arrayBufferByteLength(O) !== 0) return false;
		try {
			new DataView(O);
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
	var globalThis = require_global_this();
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
		if (globalThis.Bun && typeof Bun.version == "string") return "BUN";
		if (globalThis.Deno && typeof Deno.version == "object") return "DENO";
		if (classof(globalThis.process) === "process") return "NODE";
		if (globalThis.window && globalThis.document) return "BROWSER";
		return "REST";
	}();
}));
var require_environment_is_node = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_environment() === "NODE";
}));
var require_get_built_in_node_module = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var globalThis = require_global_this();
	var IS_NODE = require_environment_is_node();
	module.exports = function(name) {
		if (IS_NODE) {
			try {
				return globalThis.process.getBuiltinModule(name);
			} catch (error) {}
			try {
				return Function("return require(\"" + name + "\")")();
			} catch (error) {}
		}
	};
}));
var require_structured_clone_proper_transfer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var globalThis = require_global_this();
	var fails = require_fails();
	var V8 = require_environment_v8_version();
	var ENVIRONMENT = require_environment();
	var structuredClone = globalThis.structuredClone;
	module.exports = !!structuredClone && !fails(function() {
		if (ENVIRONMENT === "DENO" && V8 > 92 || ENVIRONMENT === "NODE" && V8 > 94 || ENVIRONMENT === "BROWSER" && V8 > 97) return false;
		var buffer = /* @__PURE__ */ new ArrayBuffer(8);
		var clone = structuredClone(buffer, { transfer: [buffer] });
		return buffer.byteLength !== 0 || clone.byteLength !== 8;
	});
}));
var require_detach_transferable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var globalThis = require_global_this();
	var getBuiltInNodeModule = require_get_built_in_node_module();
	var PROPER_STRUCTURED_CLONE_TRANSFER = require_structured_clone_proper_transfer();
	var structuredClone = globalThis.structuredClone;
	var $ArrayBuffer = globalThis.ArrayBuffer;
	var $MessageChannel = globalThis.MessageChannel;
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
	} catch (error) {}
	module.exports = detach;
}));
var require_array_buffer_transfer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var globalThis = require_global_this();
	var uncurryThis = require_function_uncurry_this();
	var uncurryThisAccessor = require_function_uncurry_this_accessor();
	var toIndex = require_to_index();
	var notDetached = require_array_buffer_not_detached();
	var arrayBufferByteLength = require_array_buffer_byte_length();
	var detachTransferable = require_detach_transferable();
	var PROPER_STRUCTURED_CLONE_TRANSFER = require_structured_clone_proper_transfer();
	var structuredClone = globalThis.structuredClone;
	var ArrayBuffer = globalThis.ArrayBuffer;
	var DataView = globalThis.DataView;
	var max = Math.max;
	var min = Math.min;
	var ArrayBufferPrototype = ArrayBuffer.prototype;
	var DataViewPrototype = DataView.prototype;
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
			newBuffer = new ArrayBuffer(newByteLength, preserveResizability && !fixedLength && maxByteLength ? { maxByteLength: max(newByteLength, maxByteLength(arrayBuffer)) } : void 0);
			var a = new DataView(arrayBuffer);
			var b = new DataView(newBuffer);
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
var require__DataView = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "DataView");
}));
var require__Promise = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "Promise");
}));
var require__Set = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "Set");
}));
var require__WeakMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "WeakMap");
}));
var require__getTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	require_es_array_buffer_detached();
	require_es_array_buffer_transfer();
	require_es_array_buffer_transfer_to_fixed_length();
	var DataView = require__DataView(), Map = require__Map(), Promise = require__Promise(), Set = require__Set(), WeakMap = require__WeakMap(), baseGetTag = require__baseGetTag(), toSource = require__toSource();
	/** `Object#toString` result references. */
	var mapTag = "[object Map]", objectTag = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
	var dataViewTag = "[object DataView]";
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
	/**
	* Gets the `toStringTag` of `value`.
	*
	* @private
	* @param {*} value The value to query.
	* @returns {string} Returns the `toStringTag`.
	*/
	var getTag = baseGetTag;
	if (DataView && getTag(new DataView(/* @__PURE__ */ new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) getTag = function(value) {
		var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
		if (ctorString) switch (ctorString) {
			case dataViewCtorString: return dataViewTag;
			case mapCtorString: return mapTag;
			case promiseCtorString: return promiseTag;
			case setCtorString: return setTag;
			case weakMapCtorString: return weakMapTag;
		}
		return result;
	};
	module.exports = getTag;
}));
var require__baseIsEqualDeep = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Stack = require__Stack(), equalArrays = require__equalArrays(), equalByTag = require__equalByTag(), equalObjects = require__equalObjects(), getTag = require__getTag(), isArray = require_isArray(), isBuffer = require_isBuffer(), isTypedArray = require_isTypedArray();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	/** `Object#toString` result references. */
	var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* A specialized version of `baseIsEqual` for arrays and objects which performs
	* deep comparisons and tracks traversed objects enabling objects with circular
	* references to be compared.
	*
	* @private
	* @param {Object} object The object to compare.
	* @param {Object} other The other object to compare.
	* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	* @param {Function} customizer The function to customize comparisons.
	* @param {Function} equalFunc The function to determine equivalents of values.
	* @param {Object} [stack] Tracks traversed `object` and `other` objects.
	* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	*/
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
		var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
		objTag = objTag == argsTag ? objectTag : objTag;
		othTag = othTag == argsTag ? objectTag : othTag;
		var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
		if (isSameTag && isBuffer(object)) {
			if (!isBuffer(other)) return false;
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
		if (!isSameTag) return false;
		stack || (stack = new Stack());
		return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}
	module.exports = baseIsEqualDeep;
}));
var require__baseIsEqual = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsEqualDeep = require__baseIsEqualDeep(), isObjectLike = require_isObjectLike();
	/**
	* The base implementation of `_.isEqual` which supports partial comparisons
	* and tracks traversed objects.
	*
	* @private
	* @param {*} value The value to compare.
	* @param {*} other The other value to compare.
	* @param {boolean} bitmask The bitmask flags.
	*  1 - Unordered comparison
	*  2 - Partial comparison
	* @param {Function} [customizer] The function to customize comparisons.
	* @param {Object} [stack] Tracks traversed `value` and `other` objects.
	* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	*/
	function baseIsEqual(value, other, bitmask, customizer, stack) {
		if (value === other) return true;
		if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
		return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}
	module.exports = baseIsEqual;
}));
var require_isEqual = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsEqual = require__baseIsEqual();
	/**
	* Performs a deep comparison between two values to determine if they are
	* equivalent.
	*
	* **Note:** This method supports comparing arrays, array buffers, booleans,
	* date objects, error objects, maps, numbers, `Object` objects, regexes,
	* sets, strings, symbols, and typed arrays. `Object` objects are compared
	* by their own, not inherited, enumerable properties. Functions and DOM
	* nodes are compared by strict equality, i.e. `===`.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to compare.
	* @param {*} other The other value to compare.
	* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	* @example
	*
	* var object = { 'a': 1 };
	* var other = { 'a': 1 };
	*
	* _.isEqual(object, other);
	* // => true
	*
	* object === other;
	* // => false
	*/
	function isEqual(value, other) {
		return baseIsEqual(value, other);
	}
	module.exports = isEqual;
}));
var require_es_iterator_find = /* @__PURE__ */ __commonJSMin((() => {
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
}));
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual());
require_es_iterator_constructor();
require_es_iterator_find();
/**
* @public
*/
var TableScroll = /* @__PURE__ */ function(TableScroll) {
	TableScroll["HORIZONTAL"] = "horizontal";
	/**
	* @deprecated Only horizontal is supported. Deprecated since 6.7.0.
	*/
	TableScroll["VERTICAL"] = "vertical";
	/**
	* @deprecated Acts as horizontal. Recommended to use `TableScroll.HORIZONTAL` instead. Deprecated since 6.7.0.
	*/
	TableScroll["BOTH"] = "both";
	TableScroll["NONE"] = "none";
	return TableScroll;
}({});
TableScroll.HORIZONTAL, TableScroll.VERTICAL, TableScroll.BOTH, TableScroll.NONE;
/**
* Dispatch an ComponentValidityEvent to the given element.
*
* @public
* @param element - the element to dispatch event to
* @param detail - the event detail
*/
function dispatchComponentValidityEvent(element, detail) {
	element.dispatchEvent(new CustomEvent("component-validity", {
		detail,
		bubbles: true
	}));
}
/**
* Dispatch an ComponentUnmountEvent to the given element.
*
* @internal
* @param element - the element to dispatch event to
*/
function dispatchComponentUnmountEvent(element) {
	const event = new CustomEvent("component-unmount", {
		detail: { elementId: element.id },
		bubbles: true
	});
	element.dispatchEvent(event);
}
require_es_iterator_map();
var require_map_helpers = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var uncurryThis = require_function_uncurry_this();
	var MapPrototype = Map.prototype;
	module.exports = {
		Map,
		set: uncurryThis(MapPrototype.set),
		get: uncurryThis(MapPrototype.get),
		has: uncurryThis(MapPrototype.has),
		remove: uncurryThis(MapPrototype["delete"]),
		proto: MapPrototype
	};
}));
var require_es_map_get_or_insert = /* @__PURE__ */ __commonJSMin((() => {
	var $ = require_export();
	var MapHelpers = require_map_helpers();
	var IS_PURE = require_is_pure();
	var get = MapHelpers.get;
	var has = MapHelpers.has;
	var set = MapHelpers.set;
	$({
		target: "Map",
		proto: true,
		real: true,
		forced: IS_PURE
	}, { getOrInsert: function getOrInsert(key, value) {
		if (has(this, key)) return get(this, key);
		set(this, key, value);
		return value;
	} });
}));
var require_es_map_get_or_insert_computed = /* @__PURE__ */ __commonJSMin((() => {
	var $ = require_export();
	var aCallable = require_a_callable();
	var MapHelpers = require_map_helpers();
	var IS_PURE = require_is_pure();
	var get = MapHelpers.get;
	var has = MapHelpers.has;
	var set = MapHelpers.set;
	$({
		target: "Map",
		proto: true,
		real: true,
		forced: IS_PURE
	}, { getOrInsertComputed: function getOrInsertComputed(key, callbackfn) {
		var hasKey = has(this, key);
		aCallable(callbackfn);
		if (hasKey) return get(this, key);
		if (key === 0 && 1 / key === -Infinity) key = 0;
		var value = callbackfn(key);
		set(this, key, value);
		return value;
	} });
}));
require_es_map_get_or_insert();
require_es_map_get_or_insert_computed();
function lazyLoad(fn) {
	let cache;
	return () => cache !== null && cache !== void 0 ? cache : cache = fn();
}
lazyLoad(() => new EventTarget());
/**
* @public
*/
var FKUIConfigButtonOrder = /* @__PURE__ */ function(FKUIConfigButtonOrder) {
	FKUIConfigButtonOrder[FKUIConfigButtonOrder["LEFT_TO_RIGHT"] = 0] = "LEFT_TO_RIGHT";
	FKUIConfigButtonOrder[FKUIConfigButtonOrder["RIGHT_TO_LEFT"] = 1] = "RIGHT_TO_LEFT";
	return FKUIConfigButtonOrder;
}({});
var popupContainer = document.body;
var production = true;
/**
* @public
*/
var config = {
	buttonOrder: FKUIConfigButtonOrder.RIGHT_TO_LEFT,
	teleportTarget: document.body,
	get popupContainer() {
		if (typeof popupContainer === "string") {
			const element = document.querySelector(popupContainer);
			if (!element) throw new Error(`Failed to find popupContainer element from selector "${popupContainer}"`);
			return element;
		} else return popupContainer;
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
/**
* @public
* @param app - Running app
*/
function setRunningContext(app) {
	const fkuiContext = { appContext: app._context };
	app.config.globalProperties.$fkui = fkuiContext;
}
(/* @__PURE__ */ __commonJSMin((() => {
	var $ = require_export();
	var lengthOfArrayLike = require_length_of_array_like();
	var toIndexedObject = require_to_indexed_object();
	var createProperty = require_create_property();
	var addToUnscopables = require_add_to_unscopables();
	var $Array = Array;
	$({
		target: "Array",
		proto: true
	}, { toReversed: function toReversed() {
		var O = toIndexedObject(this);
		var len = lengthOfArrayLike(O);
		var A = new $Array(len);
		var k = 0;
		for (; k < len; k++) createProperty(A, k, O[len - k - 1]);
		return A;
	} });
	addToUnscopables("toReversed");
})))();
[...[{
	label: "Primärknapp",
	event: "confirm",
	type: "primary"
}, {
	label: "Sekundärknapp",
	event: "dismiss",
	type: "secondary"
}].map((it) => {
	var _it$event;
	return (_it$event = it.event) !== null && _it$event !== void 0 ? _it$event : "";
})];
var require_es_iterator_every = /* @__PURE__ */ __commonJSMin((() => {
	var $ = require_export();
	var call = require_function_call();
	var iterate = require_iterate();
	var aCallable = require_a_callable();
	var anObject = require_an_object();
	var getIteratorDirect = require_get_iterator_direct();
	var iteratorClose = require_iterator_close();
	var everyWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error()("every", TypeError);
	$({
		target: "Iterator",
		proto: true,
		real: true,
		forced: everyWithoutClosingOnEarlyError
	}, { every: function every(predicate) {
		anObject(this);
		try {
			aCallable(predicate);
		} catch (error) {
			iteratorClose(this, "throw", error);
		}
		if (everyWithoutClosingOnEarlyError) return call(everyWithoutClosingOnEarlyError, this, predicate);
		var record = getIteratorDirect(this);
		var counter = 0;
		return !iterate(record, function(value, stop) {
			if (!predicate(value, counter++)) return stop();
		}, {
			IS_RECORD: true,
			INTERRUPTED: true
		}).stopped;
	} });
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
	var FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("filter", function() {});
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
require_es_iterator_every();
require_es_iterator_filter();
function isVueComponent(element) {
	return Boolean(element && typeof element === "object" && "$el" in element);
}
/**
* Give browser focus to a given element.
*
* If an array is passed, only the first element will receive focus.
*
* Vue components containing a `focusTarget` attribute will recursively pass along the focus to that
* value.
*
* For convenience it will ignore `null` and `undefined` as element parameter.
*
* @public
* @param element - Element to focus.
* @param options - Focus options. If you pass boolean `true` or `false` it sets the `force` option.
*
* @returns `true` if successfully found an HTMLElement to focus. Otherwise, `false`.
*/
function focus(element, options = {}) {
	if (Array.isArray(element)) return focus(element[0], options);
	if (isVueComponent(element)) {
		var _element$focusTarget;
		return focus((_element$focusTarget = element.focusTarget) !== null && _element$focusTarget !== void 0 ? _element$focusTarget : element.$el, options);
	}
	if (element instanceof HTMLElement) {
		focus$1(element, options);
		return true;
	}
	return false;
}
var defaultOptions$1 = {
	stripClasses: ["sr-only"],
	componentPlaceholder: false
};
/**
* Trims and collapses multiple whitespace (including newlines) to a single
* space
*/
function collapseWhitespace(text) {
	return text.replaceAll(/\s+/gm, " ").replaceAll(/(^ | $)/g, "");
}
function intersection(a, b) {
	return a.filter((it) => b.includes(it));
}
function excludeClass(exclude) {
	return (node) => {
		if (typeof node.props?.class !== "string") return true;
		return intersection(node.props.class.split(/\s+/), exclude).length === 0;
	};
}
function excludeComment(node) {
	return node.type !== Comment;
}
function isComponent(node) {
	return typeof node.type === "object";
}
function getComponentName({ type }) {
	if ("__name" in type) return String(type.__name);
	if ("name" in type) return String(type.name);
	return "Component";
}
function getTextContent(children, options) {
	return children.filter(isVNode).filter(excludeComment).filter(excludeClass(options.stripClasses)).map((node) => {
		if (isComponent(node)) if (options.componentPlaceholder) return `<${getComponentName(node)} />`;
		else return "";
		if (Array.isArray(node.children)) return getTextContent(node.children, options);
		if (typeof node.children === "string") return node.children;
	}).join("");
}
/**
* Pragmatically render slot content and return result as a string. Leading and
* trailing whitespace is trimmed and internal whitespace is collapsed. Any
* elements with the `sr-only` class will be ignored.
*
* Typical usage:
*
* ```ts
* const slot = this.$slots["my-slot"];
* const text = renderSlotText(slot, { value: 'foobar' });
* ```
*
* @public
* @param render - Slot function.
* @param props - Optional props to pass to render function.
* @param options - Options
* @returns Text content or undefined if render function was not found.
*/
function renderSlotText(render, props = {}, options) {
	if (!render) return;
	const nodes = render(props);
	if (nodes.length === 0) return;
	return collapseWhitespace(getTextContent(nodes, {
		...defaultOptions$1,
		...options
	}));
}
var defaultOptions = {
	stripClasses: ["sr-only"],
	componentPlaceholder: true
};
/**
* Check if slot is implemented by the user.
*
* @public
* @param vm - Component instance.
* @param name - Name of the slot to check for.
* @param props - Props required by a scoped slot.
* @param options - Render options.
* @returns true if the slot is implemented and have non-empty content.
*/
function hasSlot(vm, name, props = {}, options = {}) {
	const slot = vm.$slots[name];
	const effectiveOptions = {
		...defaultOptions,
		...options
	};
	return Boolean(renderSlotText(slot, props, effectiveOptions));
}
require_es_iterator_for_each();
function getAbsolutePosition(src) {
	if (!src) return;
	if (src.isSameNode(document.documentElement)) return {
		x: window.pageXOffset,
		y: window.pageYOffset,
		width: src.clientWidth,
		height: src.clientHeight
	};
	const rect = src.getBoundingClientRect();
	return {
		x: Math.floor(rect.left + window.pageXOffset),
		y: Math.floor(rect.top + window.pageYOffset),
		width: Math.floor(rect.width),
		height: Math.floor(rect.height)
	};
}
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
		[].keys().reduce(function() {}, void 0);
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
function getValidatableElement(element) {
	if (isValidatableHTMLElement(element)) return element;
	const validatableInsideElement = element.querySelector("input, textarea, select");
	if (validatableInsideElement) return validatableInsideElement;
	else throw new Error(`Couldn't find any validatable element`);
}
function triggerInitialValidation(el) {
	const target = getValidatableElement(el);
	ValidationService.validateElement(target);
}
function registerValidators(el, binding) {
	const { modifiers: bindingModifiers = {}, value: bindingValue = {} } = binding;
	const target = getValidatableElement(el);
	for (const validatorName of Object.keys(bindingValue)) if (!bindingModifiers[validatorName]) throw new Error(`Have you forget to add '${validatorName}' to v-validation.${validatorName}?`);
	const validatorConfigs = {};
	for (const validatorName of Object.keys(bindingModifiers)) validatorConfigs[validatorName] = bindingValue[validatorName] || {};
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
		if (!(0, import_isEqual.default)(binding.value, binding.oldValue)) registerValidators(el, binding);
	},
	mounted(el) {
		triggerInitialValidation(el);
	}
};
var ValidationPrefixDirective = { beforeMount(el, binding) {
	el.addEventListener("component-validity", (event) => {
		const e = event;
		e.detail.errorMessage = `${String(binding.value)}${e.detail.errorMessage}`;
	});
} };
/**
* @public
*/
var ValidationPlugin = { install(app) {
	for (const validator of availableValidators) ValidationService.registerValidator(validator);
	app.directive("validation", ValidationDirective);
	app.directive("validationPrefix", ValidationPrefixDirective);
} };
var isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
function cacheStringFunction(fn) {
	const cache = /* @__PURE__ */ Object.create(null);
	return (str) => {
		return cache[str] || (cache[str] = fn(str));
	};
}
var hyphenateRE = /\B([A-Z])/g;
cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var camelizeRE = /-(\w)/g;
cacheStringFunction((str) => {
	return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
isClient && window.document;
isClient && window.navigator;
isClient && window.location;
Number.POSITIVE_INFINITY;
/**
* Uses event listener while the underlying component is mounted.
* Currently there is no support for replacing the `target` element.
*
* @internal
*/
function useEventListener(target, event, callback) {
	onMounted(() => {
		toValue(target)?.addEventListener(event, callback);
	});
	onUnmounted(() => {
		toValue(target)?.removeEventListener(event, callback);
	});
}
(/* @__PURE__ */ __commonJSMin((() => {
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
})))();
/**
* @internal
*/
var SpacingDirection = /* @__PURE__ */ function(SpacingDirection) {
	SpacingDirection[SpacingDirection["Horizontal"] = 0] = "Horizontal";
	SpacingDirection[SpacingDirection["Vertical"] = 1] = "Vertical";
	SpacingDirection[SpacingDirection["Both"] = 2] = "Both";
	SpacingDirection[SpacingDirection["None"] = 3] = "None";
	return SpacingDirection;
}({});
/**
* @public
*/
var Placement = /* @__PURE__ */ function(Placement) {
	/** popup below and alignment towards the left edge. */
	Placement["A"] = "A";
	/** popup below and alignment towards the right edge. */
	Placement["B"] = "B";
	/** popup above and alignment towards the left edge. */
	Placement["C"] = "C";
	/** popup above and alignment towards the right edge. */
	Placement["D"] = "D";
	/** popup right of anchor vertically centered. */
	Placement["E"] = "E";
	/** popup left of anchor vertically centered. */
	Placement["F"] = "F";
	/** popup to the right of the anchor at the top of the area. */
	Placement["G"] = "G";
	/** popup to the left of the anchor at the top of the area. */
	Placement["H"] = "H";
	/** popup vertically and horizontally centered in area. */
	Placement["I"] = "I";
	/**
	* Fallback
	* - If inline is set to never, the popup is positioned below the anchor without inlining.
	* - If inline is set to auto, the popup will appear inline below the anchor.
	*/
	Placement["Fallback"] = "Fallback";
	/** Placement not calculated. */
	Placement["NotCalculated"] = "NotCalculated";
	return Placement;
}({});
var CandidateOrder = /* @__PURE__ */ function(CandidateOrder) {
	CandidateOrder["Default"] = "Default";
	CandidateOrder["IPopupError"] = "IPopupError";
	return CandidateOrder;
}({});
/**
* Given two rectangles it generates a list of candidate positions for the
* target rectangle.
*
*      Left-aligned  | Right-aligned
*      +---------+   |   +---------+
*      |    C    |   |   |    D    |
*      +---------+   |   +---------+
*      (spacing)     |     (spacing)
*      +------+      |      +------+
*      |Anchor|      |      |Anchor|
*      +------+      |      +------+
*      (spacing)     |     (spacing)
*      +---------+   |   +---------+
*      |    A    |   |   |    B    |
*      +---------+   |   +---------+
*
* Centered Right (E) | Centered Left (F)
*           +----+   |   +----+
* +------+  |    |   |   |    | +------+
* |Anchor|  | E  |   |   | F  | |Anchor|
* +------+  |    |   |   |    | +------+
*           +----+   |   +----+
*
* Position G: Like E but positioned at the top of the clippedArea
* Position H: Like F but positioned at the top of the clippedArea
*
* Position I: Vertically and horizontally centered in the clippedArea
* +------------+
* |   X----+   |
* |   | I  |   |
* |   +----+   |
* +------------+
*
* @internal
*/
function getCandidates(anchor, target, clippedArea, spacing, candidateOrder) {
	const dw = target.width - anchor.width;
	const a = {
		placement: Placement.A,
		x: anchor.x,
		y: anchor.y + anchor.height + spacing,
		width: target.width,
		height: target.height,
		direction: SpacingDirection.Vertical
	};
	const b = {
		placement: Placement.B,
		x: anchor.x - dw,
		y: anchor.y + anchor.height + spacing,
		width: target.width,
		height: target.height,
		direction: SpacingDirection.Vertical
	};
	const c = {
		placement: Placement.C,
		x: anchor.x,
		y: anchor.y - target.height - spacing,
		width: target.width,
		height: target.height,
		direction: SpacingDirection.Vertical
	};
	const d = {
		placement: Placement.D,
		x: anchor.x - dw,
		y: anchor.y - target.height - spacing,
		width: target.width,
		height: target.height,
		direction: SpacingDirection.Vertical
	};
	const e = {
		placement: Placement.E,
		x: anchor.x + anchor.width + spacing,
		y: anchor.y + anchor.height / 2 - target.height / 2,
		width: target.width,
		height: target.height,
		direction: SpacingDirection.Horizontal
	};
	const f = {
		placement: Placement.F,
		x: anchor.x - (target.width + spacing),
		y: anchor.y + anchor.height / 2 - target.height / 2,
		width: target.width,
		height: target.height,
		direction: SpacingDirection.Horizontal
	};
	const g = {
		placement: Placement.G,
		x: anchor.x + anchor.width + spacing,
		y: clippedArea.y + spacing,
		width: target.width,
		height: target.height,
		direction: SpacingDirection.Both
	};
	const h = {
		placement: Placement.H,
		x: anchor.x - (target.width + spacing),
		y: clippedArea.y + spacing,
		width: target.width,
		height: target.height,
		direction: SpacingDirection.Both
	};
	const i = {
		placement: Placement.I,
		x: clippedArea.x + (clippedArea.width - target.width) / 2,
		y: clippedArea.y + (clippedArea.height - target.height) / 2,
		width: target.width,
		height: target.height,
		direction: SpacingDirection.None
	};
	if (candidateOrder === CandidateOrder.IPopupError) return [
		b,
		a,
		d,
		c,
		e,
		f,
		f,
		f,
		f
	];
	else return [
		a,
		b,
		c,
		d,
		e,
		f,
		g,
		h,
		i
	];
}
/**
* Returns true if the inner rect is fully contained inside the outer rect
* (minus spacing). Comparison is inclusive, i.e. the inner can overlap outer.
*
* @internal
*/
function isInside(outer, inner, spacing) {
	const xSpacing = inner.direction === SpacingDirection.Horizontal || inner.direction === SpacingDirection.Both ? spacing : 0;
	const ySpacing = inner.direction === SpacingDirection.Vertical || inner.direction === SpacingDirection.Both ? spacing : 0;
	const ax = [inner.x, inner.x + inner.width];
	const ay = [inner.y, inner.y + inner.height];
	const bx = [outer.x + xSpacing, outer.x + outer.width - xSpacing];
	const by = [outer.y + ySpacing, outer.y + outer.height - ySpacing];
	if (ax[0] < bx[0] || ax[1] > bx[1]) return false;
	if (ay[0] < by[0] || ay[1] > by[1]) return false;
	return true;
}
function isElementOptions(options) {
	return options.target instanceof HTMLElement;
}
/**
* Clip given rect so no edges is outside the viewport, i.e. the rect where rect
* and viewport intersects.
*
* @internal
*/
function clipRect(src, clip) {
	if (!clip) return src;
	const x = Math.max(src.x, clip.x);
	const y = Math.max(src.y, clip.y);
	return {
		x,
		y,
		width: Math.min(src.x + src.width, clip.x + clip.width) - x,
		height: Math.min(src.y + src.height, clip.y + clip.height) - y
	};
}
/**
* Takes a rect or element and returns a suitable position inside given area. It
* uses an anchor point to try to align the target.
*
* @public
*/
function fitInsideArea(options) {
	if (isElementOptions(options)) {
		const { area: areaElement, anchor: anchorElement, target: targetElement, viewport: viewportElement, spacing, candidateOrder } = options;
		const area = getAbsolutePosition(areaElement);
		const anchor = getAbsolutePosition(anchorElement);
		const result = fitInsideArea({
			area,
			target: getAbsolutePosition(targetElement),
			anchor,
			viewport: getAbsolutePosition(viewportElement),
			spacing,
			candidateOrder
		});
		const offset = targetElement.offsetParent?.getBoundingClientRect();
		if (!offset) return result;
		return {
			...result,
			x: result.x - (offset.left + window.pageXOffset),
			y: result.y - (offset.top + window.pageYOffset)
		};
	}
	const { anchor, target, area, viewport, spacing } = options;
	const clippedArea = clipRect(area, viewport);
	const candidates = getCandidates(anchor, target, clippedArea, spacing, options.candidateOrder);
	const index = candidates.findIndex((it) => isInside(clippedArea, it, spacing));
	if (index !== -1) {
		const match = candidates[index];
		return {
			x: match.x,
			y: match.y,
			placement: match.placement
		};
	}
	return {
		...getFallbackPosition(anchor, target, clippedArea, spacing),
		placement: Placement.Fallback
	};
}
/**
* Get the fallback position coordinates
* try to align with anchor.x if there is room for the target
* if target is outside the clippedArea, use no horizontal alignment
*
* @internal
*/
function getFallbackPosition(anchor, target, clippedArea, spacing) {
	const x = anchor.x - (target.width + spacing);
	const y = anchor.y + anchor.height + spacing;
	if (x >= clippedArea.x) return {
		x,
		y
	};
	else return {
		x: clippedArea.x + spacing,
		y
	};
}
function computeArrowOffset(placement, inputIconRect, wrapperRect) {
	switch (placement) {
		case Placement.A: return {
			position: "top",
			offset: wrapperRect.x + wrapperRect.width - (inputIconRect.x + inputIconRect.width / 2)
		};
		case Placement.B: return {
			position: "top",
			offset: wrapperRect.x + wrapperRect.width - (inputIconRect.x + inputIconRect.width / 2)
		};
		case Placement.C: return {
			position: "bottom",
			offset: wrapperRect.x + wrapperRect.width - (inputIconRect.x + inputIconRect.width / 2)
		};
		case Placement.D: return {
			position: "bottom",
			offset: wrapperRect.x + wrapperRect.width - (inputIconRect.x + inputIconRect.width / 2)
		};
		case Placement.E: return {
			position: "left",
			offset: wrapperRect.y + wrapperRect.height - (inputIconRect.y + inputIconRect.height / 2)
		};
		case Placement.F: return {
			position: "right",
			offset: wrapperRect.y + wrapperRect.height - (inputIconRect.y + inputIconRect.height / 2)
		};
		case Placement.G:
		case Placement.H:
		case Placement.I:
		case Placement.Fallback:
		case Placement.NotCalculated: return {
			position: "top",
			offset: wrapperRect.x + wrapperRect.width - (inputIconRect.x + inputIconRect.width / 2)
		};
	}
}
var POPUP_SPACING = 10;
var IPopupError_vue_vue_type_script_lang_default = /* @__PURE__ */ defineComponent({
	name: "IPopupError",
	components: { FIcon: FIcon_default },
	inheritAttrs: false,
	props: {
		isOpen: {
			type: Boolean,
			required: true
		},
		errorMessage: {
			type: String,
			required: false,
			default: "Error"
		},
		anchor: {
			type: HTMLElement,
			required: false,
			default: void 0
		},
		arrowAnchor: {
			type: HTMLElement,
			required: false,
			default: void 0
		},
		layout: {
			type: String,
			required: true
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
			return ["popup-error", ...this.teleportDisabled || this.placement === Placement.Fallback ? ["popup-error--inline"] : ["popup-error--overlay"]];
		},
		arrowClass() {
			return `popup-error popup-error--arrow popup-error--${this.arrowPosition}`;
		},
		errorStyle() {
			return `--i-popup-error-offset: ${String(this.arrowOffset)}px`;
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
			if (event.key === "Escape") this.$emit("close");
		},
		onClose() {
			this.$emit("close");
		},
		setArrowOffset() {
			var _this$arrowAnchor;
			const wrapper = this.$refs.wrapper;
			const arrowAnchor = (_this$arrowAnchor = this.arrowAnchor) !== null && _this$arrowAnchor !== void 0 ? _this$arrowAnchor : this.anchor?.nextElementSibling;
			if (!arrowAnchor || !wrapper) return;
			const arrowAnchorRect = arrowAnchor.getBoundingClientRect();
			const wrapperRect = wrapper.getBoundingClientRect();
			const arrow = computeArrowOffset(this.placement, arrowAnchorRect, wrapperRect);
			this.arrowOffset = arrow.offset;
			this.arrowPosition = arrow.position;
		},
		async toggleIsOpen(isOpen) {
			if (!isOpen) {
				this.placement = Placement.NotCalculated;
				return;
			}
			await this.$nextTick();
			const wrapper = this.$refs.wrapper;
			if (!this.anchor) throw new Error("No anchor element found");
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
				wrapper.style.left = `${String(result.x)}px`;
				wrapper.style.top = `${String(result.y)}px`;
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
var _hoisted_1$53 = {
	ref: "wrapper",
	class: "popup-error__wrapper"
};
function _sfc_render$34(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_f_icon = resolveComponent("f-icon");
	return _ctx.isOpen ? (openBlock(), createBlock(Teleport, {
		key: 0,
		to: _ctx.teleportTarget,
		disabled: _ctx.teleportDisabled
	}, [createBaseVNode("div", {
		ref: "popup",
		class: normalizeClass(_ctx.popupClasses),
		"aria-hidden": "true"
	}, [createBaseVNode("div", _hoisted_1$53, [createBaseVNode("div", {
		class: normalizeClass(_ctx.arrowClass),
		style: normalizeStyle(_ctx.errorStyle)
	}, [
		_ctx.layout === "f-table" ? (openBlock(), createBlock(_component_f_icon, {
			key: 0,
			ref: "icon",
			class: "popup-error__icon",
			name: "error"
		}, null, 512)) : createCommentVNode("", true),
		_cache[1] || (_cache[1] = createTextVNode()),
		createBaseVNode("span", null, toDisplayString(_ctx.errorMessage), 1),
		_cache[2] || (_cache[2] = createTextVNode()),
		_ctx.layout === "f-interactive-table" ? (openBlock(), createElementBlock("button", {
			key: 1,
			tabindex: "-1",
			type: "button",
			class: "popup-error__button",
			"aria-label": "Stäng",
			onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClose && _ctx.onClose(...args))
		}, [createVNode(_component_f_icon, {
			name: "close",
			class: "button__icon"
		})])) : createCommentVNode("", true)
	], 6)], 512)], 2)], 8, ["to", "disabled"])) : createCommentVNode("", true);
}
var IPopupError_default = /* @__PURE__ */ _plugin_vue_export_helper_default$1(IPopupError_vue_vue_type_script_lang_default, [["render", _sfc_render$34]]);
/**
* Calculates the number of whole items which fits into this height. The result
* is clamped to a maximum of 7 items.
*
* @internal
*/
function numItems(itemHeight, availableHeight, verticalSpacing) {
	const itemsFit = Math.floor((availableHeight - verticalSpacing) / itemHeight);
	return Math.min(itemsFit, 7);
}
/**
* @internal
*/
function tryBelow(itemHeight, numOfItems, anchor, viewport, verticalSpacing) {
	const itemsFit = numItems(itemHeight, viewport.y + viewport.height - (anchor.y + anchor.height), verticalSpacing);
	if (itemsFit < 3) return;
	const fittedHeight = itemHeight * Math.min(numOfItems, itemsFit);
	return {
		left: anchor.x,
		top: anchor.y + anchor.height,
		width: anchor.width,
		height: fittedHeight
	};
}
/**
* @internal
*/
function tryAbove(itemHeight, numOfItems, anchor, viewport, verticalSpacing) {
	const p1 = viewport.y;
	const itemsFit = numItems(itemHeight, anchor.y - p1, verticalSpacing);
	if (itemsFit < 3) return;
	const fittedHeight = itemHeight * Math.min(numOfItems, itemsFit);
	return {
		left: anchor.x,
		top: anchor.y - fittedHeight - verticalSpacing,
		width: anchor.width,
		height: fittedHeight
	};
}
/**
* @internal
*/
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
	const below = tryBelow(itemHeight, numOfItems, anchorRect, viewportRect, verticalSpacing);
	if (below) return below;
	const above = tryAbove(itemHeight, numOfItems, anchorRect, viewportRect, verticalSpacing);
	if (above) return above;
}
var _hoisted_1$52 = ["onKeyup"];
var _hoisted_2$38 = { ref: "content" };
var teleportDisabled = false;
var IPopupListbox_default = /* @__PURE__ */ defineComponent({
	__name: "IPopupListbox",
	props: {
		isOpen: { type: Boolean },
		anchor: {},
		numOfItems: {},
		itemHeight: { default: () => void 0 },
		activeElement: { default: () => void 0 }
	},
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const wrapperRef = useTemplateRef("wrapper");
		const contentRef = useTemplateRef("content");
		const popupClasses = ["popup", "popup--overlay"];
		const teleportTarget = computed(() => config.teleportTarget);
		const debouncedOnResize = debounce(onResize, 100);
		const debouncedOnScroll = debounce(onScroll, 100);
		let guessedItemHeight = void 0;
		let verticalSpacing = void 0;
		useEventListener(__props.anchor, "keyup", onKeyEsc);
		watchEffect(() => {
			if (!wrapperRef.value || __props.activeElement === void 0) return;
			const centerPosition = __props.activeElement.offsetTop - (wrapperRef.value.getBoundingClientRect().height - __props.activeElement.getBoundingClientRect().height) / 2;
			if (!isElementInsideViewport(wrapperRef.value)) wrapperRef.value.scrollIntoView({
				behavior: "instant",
				block: "nearest"
			});
			wrapperRef.value.scrollTo({
				top: centerPosition,
				behavior: "instant"
			});
		});
		function addListeners() {
			document.addEventListener("click", onDocumentClickHandler);
			window.addEventListener("resize", debouncedOnResize);
			window.addEventListener("scroll", debouncedOnScroll, { capture: true });
		}
		function removeListeners() {
			document.removeEventListener("click", onDocumentClickHandler);
			window.removeEventListener("resize", debouncedOnResize);
			window.removeEventListener("scroll", debouncedOnScroll, { capture: true });
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
					if (__props.isOpen) addListeners();
				}, 0);
			} else removeListeners();
		});
		watch(() => __props.numOfItems, (oldValue, newValue) => {
			if (oldValue !== newValue && __props.isOpen) calculatePosition();
		});
		onUnmounted(removeListeners);
		function onDocumentClickHandler() {
			emit("close");
		}
		function onResize() {
			if (__props.isOpen) calculatePosition();
		}
		function onScroll(event) {
			if (event.target instanceof HTMLElement && Boolean(event.target.closest(".popup"))) return;
			calculatePosition({ horizontalOnly: true });
		}
		function onKeyEsc(event) {
			if (event.key === "Escape") emit("close");
		}
		function guessItemHeight(numOfItems, contentWrapper) {
			return Math.ceil(contentWrapper.clientHeight / numOfItems);
		}
		function calculatePosition(options) {
			const wrapperElement = wrapperRef.value;
			const contentWrapper = contentRef.value;
			if (!__props.anchor || !wrapperElement || !contentWrapper) return;
			let contentItemHeigth = __props.itemHeight;
			if (!contentItemHeigth) {
				if (!guessedItemHeight) guessedItemHeight = guessItemHeight(__props.numOfItems, contentWrapper);
				contentItemHeigth = guessedItemHeight;
			}
			if (verticalSpacing === void 0) {
				const absWrapper = getAbsolutePosition(wrapperElement);
				const { marginTop, marginBottom } = getComputedStyle(wrapperElement);
				const marginTotal = Number.parseInt(marginTop, 10) + Number.parseInt(marginBottom, 10);
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
				const { top, left, width, height } = rect;
				const offsetRect = wrapperElement.offsetParent?.getBoundingClientRect();
				const offsetLeft = Math.floor(((_offsetRect$x = offsetRect?.x) !== null && _offsetRect$x !== void 0 ? _offsetRect$x : 0) + window.scrollX);
				const offSetTop = Math.floor(((_offsetRect$top = offsetRect?.top) !== null && _offsetRect$top !== void 0 ? _offsetRect$top : 0) + window.scrollY);
				wrapperElement.style.left = `${String(left - offsetLeft)}px`;
				if (options?.horizontalOnly) return;
				wrapperElement.style.top = `${String(top - offSetTop)}px`;
				wrapperElement.style.width = `${String(width)}px`;
				contentWrapper.style.maxHeight = `${String(height)}px`;
				contentWrapper.style.width = `${String(width)}px`;
			}
		}
		return (_ctx, _cache) => {
			return __props.isOpen ? (openBlock(), createBlock(Teleport, {
				key: 0,
				to: teleportTarget.value,
				disabled: teleportDisabled
			}, [createBaseVNode("div", {
				ref: "popup",
				class: normalizeClass(popupClasses)
			}, [createBaseVNode("div", mergeProps({ ref: "wrapper" }, _ctx.$attrs, {
				class: "popup__wrapper",
				tabindex: "0",
				onKeyup: withKeys(withModifiers(onKeyEsc, ["stop"]), ["esc"]),
				onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
			}), [createBaseVNode("div", _hoisted_2$38, [renderSlot(_ctx.$slots, "default")], 512)], 16, _hoisted_1$52)], 512)], 8, ["to"])) : createCommentVNode("", true);
		};
	}
});
function filterOptions(options, filter, selectMode) {
	if (isEmpty(filter) || selectMode) return options;
	const filterLowerCased = filter.toLowerCase();
	return options.filter((it) => it.toLowerCase().includes(filterLowerCased));
}
var $t$1 = useTranslate();
/**
* @public
*/
function useCombobox(inputRef, options, onOptionSelected) {
	if (options.value === void 0) return {
		dropdownId: "",
		dropdownIsOpen: /* @__PURE__ */ ref(false),
		dropdownOptions: /* @__PURE__ */ ref([]),
		activeOptionId: "",
		activeOption: /* @__PURE__ */ ref(null),
		toggleDropdown() {},
		selectOption() {},
		closeDropdown() {}
	};
	useEventListener(inputRef, "click", onInputClick);
	useEventListener(inputRef, "focus", onInputFocus);
	useEventListener(inputRef, "keydown", onInputKeyDown);
	useEventListener(inputRef, "keyup", onInputKeyUp);
	const dropdownId = ElementIdService.generateElementId();
	const dropdownIsOpen = /* @__PURE__ */ ref(false);
	const activeOptionId = ElementIdService.generateElementId();
	const activeOption = /* @__PURE__ */ ref(null);
	const filter = /* @__PURE__ */ ref("");
	const selectMode = /* @__PURE__ */ ref(false);
	const selectedOption = /* @__PURE__ */ ref(null);
	const dropdownOptions = computed(() => {
		var _options$value;
		return filterOptions((_options$value = options.value) !== null && _options$value !== void 0 ? _options$value : [], filter.value, selectMode.value);
	});
	const hasOptions = computed(() => {
		return dropdownOptions.value.length > 0;
	});
	const hasMultipleOptions = computed(() => {
		return dropdownOptions.value.length > 1;
	});
	watchEffect(() => {
		if (!inputRef.value) return;
		inputRef.value.setAttribute("aria-expanded", String(dropdownIsOpen.value));
		if (dropdownIsOpen.value) inputRef.value.setAttribute("aria-controls", dropdownId);
		else inputRef.value.removeAttribute("aria-controls");
	});
	watchEffect(() => {
		if (!inputRef.value) return;
		if (activeOption.value) inputRef.value.setAttribute("aria-activedescendant", activeOptionId);
		else inputRef.value.removeAttribute("aria-activedescendant");
	});
	watchEffect(() => {
		if (!inputRef.value) return;
		let description = selectMode.value ? `${$t$1("fkui.combobox.selected", "Valt förslag")} ` : "";
		if (isEmpty(filter.value) || selectMode.value) description += $t$1("fkui.combobox.listDetails", `Det finns {{ count }} förslag. Använd uppåtpil och nedåtpil för att navigera bland förslagen.`, { count: options.value ? options.value.length : 0 });
		else if (hasOptions.value) description += $t$1("fkui.combobox.matchesListDetails", `Det finns {{ count }} förslag som matchar. Använd uppåtpil och nedåtpil för att navigera bland förslagen.`, { count: dropdownOptions.value.length });
		else description = $t$1("fkui.combobox.noMatchesListDetails", "Det finns inga förslag som matchar.");
		inputRef.value.setAttribute("aria-description", description);
	});
	onMounted(() => {
		if (!inputRef.value) throw new Error("missing input ref");
		filter.value = inputRef.value.value;
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
			filter.value = selectedOption.value;
			selectMode.value = true;
			if (onOptionSelected) onOptionSelected(value);
		}
	}
	async function openSelected(fallback = null) {
		if (hasOptions.value) {
			dropdownIsOpen.value = true;
			await nextTick();
			if (selectMode.value) activeOption.value = filter.value;
			else if (fallback === "first") activeOption.value = dropdownOptions.value[0];
			else if (fallback === "last") activeOption.value = dropdownOptions.value.at(-1);
			else activeOption.value = null;
			inputRef.value?.focus();
		}
	}
	function close() {
		dropdownIsOpen.value = false;
		activeOption.value = null;
	}
	function toggleDropdown() {
		if (!dropdownIsOpen.value) openSelected();
		else close();
	}
	function setNextOption() {
		if (activeOption.value && hasMultipleOptions.value) {
			const index = dropdownOptions.value.indexOf(activeOption.value);
			if (index === dropdownOptions.value.length - 1) activeOption.value = dropdownOptions.value[0];
			else activeOption.value = dropdownOptions.value[index + 1];
		} else activeOption.value = dropdownOptions.value[0];
	}
	function setPreviousOption() {
		if (activeOption.value && hasMultipleOptions.value) {
			const index = dropdownOptions.value.indexOf(activeOption.value);
			if (index === 0) activeOption.value = dropdownOptions.value.at(-1);
			else activeOption.value = dropdownOptions.value[index - 1];
		} else activeOption.value = dropdownOptions.value.at(-1);
	}
	function onInputClick() {
		toggleDropdown();
	}
	async function onInputFocus() {
		var _inputRef$value$value;
		await nextTick();
		filter.value = (_inputRef$value$value = inputRef.value?.value) !== null && _inputRef$value$value !== void 0 ? _inputRef$value$value : "";
		selectMode.value = options.value ? options.value.includes(filter.value) : false;
	}
	function onInputKeyDown(event) {
		let flag = false;
		if (event.ctrlKey || event.shiftKey) return;
		switch (event.key) {
			case "Enter":
				if (dropdownIsOpen.value) {
					if (activeOption.value) {
						selectOption(activeOption.value);
						flag = true;
					}
					close();
				} else openSelected();
				break;
			case "Down":
			case "ArrowDown":
				if (dropdownIsOpen.value) setNextOption();
				else openSelected("first");
				flag = true;
				break;
			case "Up":
			case "ArrowUp":
				if (dropdownIsOpen.value) setPreviousOption();
				else openSelected("last");
				flag = true;
				break;
			case "Esc":
			case "Escape":
				if (dropdownIsOpen.value) close();
				flag = true;
				break;
			case "Tab":
				if (dropdownIsOpen.value) close();
				break;
			default: break;
		}
		if (flag) {
			event.stopPropagation();
			event.preventDefault();
		}
	}
	function onInputKeyUp() {
		if (!inputRef.value) throw new Error("missing input ref");
		if (filter.value === inputRef.value.value) return;
		filter.value = inputRef.value.value;
		activeOption.value = null;
		selectMode.value = false;
		if (!dropdownIsOpen.value) openSelected();
		else if (!hasOptions.value) close();
	}
}
var _hoisted_1$48 = { class: "combobox" };
var _hoisted_2$36 = ["id"];
var _hoisted_3$29 = [
	"id",
	"aria-selected",
	"onClick"
];
var IComboboxDropdown_default = /* @__PURE__ */ defineComponent({
	__name: "IComboboxDropdown",
	props: {
		id: {},
		isOpen: { type: Boolean },
		options: {},
		activeOption: {},
		activeOptionId: {},
		inputNode: {}
	},
	emits: ["select", "close"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const listboxRef = useTemplateRef("listbox");
		const activeElement = /* @__PURE__ */ ref();
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
			if (__props.activeOption !== null) {
				await nextTick();
				const activeOptionNode = listboxRef.value?.querySelector(`#${__props.activeOptionId}`);
				activeElement.value = activeOptionNode !== null && activeOptionNode !== void 0 ? activeOptionNode : void 0;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$48, [createVNode(unref(IPopupListbox_default), {
				"is-open": __props.isOpen,
				anchor: __props.inputNode,
				"num-of-items": __props.options.length,
				"active-element": activeElement.value,
				class: "combobox__listbox",
				onClose: onListboxClose
			}, {
				default: withCtx(() => [createBaseVNode("ul", {
					id: __props.id,
					ref: "listbox",
					role: "listbox",
					"aria-label": "Förslag",
					class: "combobox__listbox__list"
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (item) => {
					return openBlock(), createElementBlock("li", {
						id: isOptionActive(item) ? __props.activeOptionId : void 0,
						key: item,
						role: "option",
						"aria-selected": isOptionActive(item) ? "true" : void 0,
						class: normalizeClass(["combobox__listbox__option", { "combobox__listbox__option--highlight": isOptionActive(item) }]),
						onClick: withModifiers(($event) => onOptionClick(item), ["stop", "prevent"])
					}, toDisplayString(item), 11, _hoisted_3$29);
				}), 128))], 8, _hoisted_2$36)]),
				_: 1
			}, 8, [
				"is-open",
				"anchor",
				"num-of-items",
				"active-element"
			])]);
		};
	}
});
var _hoisted_1$47 = ["aria-label"];
var IComboboxToggleButton_default = /* @__PURE__ */ defineComponent({
	__name: "IComboboxToggleButton",
	props: { isOpen: { type: Boolean } },
	emits: ["toggle"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const ariaLabel = useTranslate()("fkui.combobox.toggle", "Öppna förslagen");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				class: "combobox__button",
				type: "button",
				"aria-label": unref(ariaLabel),
				tabindex: "-1",
				onClick: _cache[0] || (_cache[0] = ($event) => emit("toggle"))
			}, [createVNode(unref(FIcon_default), {
				name: "arrow-down",
				rotate: __props.isOpen ? "180" : void 0,
				class: "text-field__icon"
			}, null, 8, ["rotate"])], 8, _hoisted_1$47);
		};
	}
});
/**
* @internal
*/
var tooltipAttachTo = Symbol("tooltipAttachTo");
TranslationService.provider.translate("fkui.tooltip.close", "Stäng");
TranslationService.provider.translate("fkui.crud-dataset.modal.header.add", "Lägg till rad"), TranslationService.provider.translate("fkui.crud-dataset.modal.header.modify", "Ändra rad"), TranslationService.provider.translate("fkui.crud-dataset.modal.header.delete", "Är du säker på att du vill ta bort raden?");
var FLabel_vue_vue_type_script_lang_default = /* @__PURE__ */ defineComponent({
	name: "FLabel",
	components: { FIcon: FIcon_default },
	props: { for: {
		type: String,
		required: false,
		default: void 0
	} },
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
var _hoisted_1$40 = { key: 0 };
var _hoisted_2$30 = {
	key: 0,
	ref: "tooltipAttachTo"
};
var _hoisted_3$24 = ["for"];
var _hoisted_4$19 = ["for"];
var _hoisted_5$15 = {
	key: 0,
	class: "label__message label__message--error"
};
var _hoisted_6$12 = ["for"];
var _hoisted_7$9 = {
	key: 0,
	class: "label__message label__message--error"
};
function _sfc_render$26(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_f_icon = resolveComponent("f-icon");
	return _ctx.$slots.tooltip ? (openBlock(), createElementBlock("div", _hoisted_1$40, [
		_ctx.hasDefaultSlot ? (openBlock(), createElementBlock("div", _hoisted_2$30, [createBaseVNode("label", {
			class: "label",
			for: _ctx.forProperty
		}, [renderSlot(_ctx.$slots, "default")], 8, _hoisted_3$24)], 512)) : createCommentVNode("", true),
		_cache[2] || (_cache[2] = createTextVNode()),
		renderSlot(_ctx.$slots, "tooltip"),
		_cache[3] || (_cache[3] = createTextVNode()),
		_ctx.hasDescriptionSlot || _ctx.hasErrorMessageSlot ? (openBlock(), createElementBlock("label", {
			key: 1,
			class: "label sr-separator",
			for: _ctx.forProperty
		}, [
			renderSlot(_ctx.$slots, "description", {
				descriptionClass: _ctx.descriptionClass,
				formatDescriptionClass: _ctx.formatDescriptionClass
			}),
			_cache[1] || (_cache[1] = createTextVNode()),
			_ctx.hasErrorMessageSlot ? (openBlock(), createElementBlock("span", _hoisted_5$15, [
				createVNode(_component_f_icon, {
					class: "label__icon--left",
					name: "error"
				}),
				_cache[0] || (_cache[0] = createTextVNode()),
				renderSlot(_ctx.$slots, "error-message")
			])) : createCommentVNode("", true)
		], 8, _hoisted_4$19)) : createCommentVNode("", true)
	])) : (openBlock(), createElementBlock("label", {
		key: 1,
		class: "label",
		for: _ctx.forProperty
	}, [
		renderSlot(_ctx.$slots, "default"),
		_cache[5] || (_cache[5] = createTextVNode()),
		renderSlot(_ctx.$slots, "description", {
			descriptionClass: _ctx.descriptionClass,
			formatDescriptionClass: _ctx.formatDescriptionClass
		}),
		_cache[6] || (_cache[6] = createTextVNode()),
		_ctx.hasErrorMessageSlot ? (openBlock(), createElementBlock("span", _hoisted_7$9, [
			createVNode(_component_f_icon, {
				class: "label__icon--left",
				name: "error"
			}),
			_cache[4] || (_cache[4] = createTextVNode()),
			renderSlot(_ctx.$slots, "error-message")
		])) : createCommentVNode("", true)
	], 8, _hoisted_6$12));
}
var FLabel_default = /* @__PURE__ */ _plugin_vue_export_helper_default$1(FLabel_vue_vue_type_script_lang_default, [["render", _sfc_render$26]]);
function resolveWidthClass(words, inline) {
	return inline ? void 0 : words.split(" ").map((word) => `i-width-${word}`).join(" ");
}
function setCursorAtEnd(input) {
	input.setSelectionRange(input.value.length, input.value.length);
}
/**
* Setup logic used by `FTextField`.
* Components extending `FTextField` reuse the same setup.
*
* @public
*/
function useTextFieldSetup(props) {
	const inputNode = useTemplateRef("input");
	const textFieldTableMode = inject("textFieldTableMode", false);
	const viewValue = /* @__PURE__ */ ref("");
	async function onOptionSelected(value) {
		if (!inputNode.value) return;
		viewValue.value = value;
		await nextTick();
		inputNode.value.focus();
		setCursorAtEnd(inputNode.value);
		inputNode.value.dispatchEvent(new CustomEvent("pending-validity", { bubbles: false }));
	}
	const { dropdownId, dropdownIsOpen, dropdownOptions, activeOptionId, activeOption, toggleDropdown, selectOption, closeDropdown } = useCombobox(inputNode, /* @__PURE__ */ toRef(props, "options"), onOptionSelected);
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
var FTextField_vue_vue_type_script_lang_default = /* @__PURE__ */ defineComponent({
	name: "FTextField",
	components: {
		FLabel: FLabel_default,
		FIcon: FIcon_default,
		IPopupError: IPopupError_default,
		IComboboxDropdown: IComboboxDropdown_default,
		IComboboxToggleButton: IComboboxToggleButton_default
	},
	inheritAttrs: false,
	props: {
		id: {
			type: String,
			required: false,
			default: () => ElementIdService.generateElementId()
		},
		inline: {
			type: Boolean,
			required: false
		},
		modelValue: {
			type: [
				String,
				Number,
				null
			],
			required: false,
			default: ""
		},
		type: {
			type: String,
			required: false,
			default: "text"
		},
		formatter: {
			type: Function,
			required: false,
			default: void 0
		},
		parser: {
			type: Function,
			required: false,
			default: void 0
		},
		labelWidth: {
			type: String,
			required: false,
			default: "sm-12"
		},
		inputWidth: {
			type: String,
			required: false,
			default: "sm-12"
		},
		options: {
			type: Array,
			required: false,
			default: () => void 0
		},
		disabled: {
			type: Boolean,
			required: false
		}
	},
	emits: [
		"blur",
		"change",
		"update:modelValue"
	],
	setup(props) {
		const { textFieldTableMode, viewValue, onOptionSelected, dropdownId, dropdownIsOpen, dropdownOptions, activeOptionId, activeOption, toggleDropdown, selectOption, closeDropdown } = useTextFieldSetup(props);
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
			defaultText: "",
			descriptionText: "",
			descriptionScreenReaderText: "",
			discreteDescriptionText: "",
			discreteDescriptionScreenReaderText: "",
			dropdownOpenedWithoutVisibleError: false
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
			if (this.dropdownIsOpen && this.dropdownOpenedWithoutVisibleError) return false;
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
			handler() {
				if (this.modelValue === void 0 || this.modelValue === null) {
					this.viewValue = "";
					return;
				}
				if (!this.isModelUpdatedProgrammatically) return;
				this.setViewValueToFormattedValueOrFallbackToValue();
				this.lastModelValue = this.modelValue;
			}
		},
		dropdownIsOpen: { handler() {
			if (this.dropdownIsOpen) this.dropdownOpenedWithoutVisibleError = this.validityMode === "INITIAL";
		} }
	},
	beforeUpdate() {
		this.isAfterInitialRender = true;
	},
	methods: {
		onDropdownSelect(value) {
			this.selectOption(value);
			this.$emit("update:modelValue", value);
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
			if (!this.$refs.input) return;
			const element = this.$refs.input;
			if (!Object.hasOwn(element.dataset, "validation")) {
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
			if (!this.$refs.input) return;
			const element = this.$refs.input;
			if (!Object.hasOwn(element.dataset, "validation")) {
				this.$emit("update:modelValue", this.viewValue);
				await this.$nextTick();
				this.$emit("blur", this.viewValue);
			}
		},
		async onValidity({ detail }) {
			this.validationMessage = detail.validationMessage;
			this.validityMode = detail.validityMode;
			if (detail.nativeEvent === "change" || detail.nativeEvent === "blur") {
				let newModelValue;
				if (detail.isValid) newModelValue = this.resolveNewModelValue(this.viewValue);
				else newModelValue = this.viewValue;
				this.lastModelValue = newModelValue;
				this.$emit("update:modelValue", newModelValue);
				await this.$nextTick();
				this.$emit(detail.nativeEvent, newModelValue);
				if (detail.isValid) this.syncViewValueAfterModelUpdate(newModelValue);
			}
			this.triggerComponentValidityEvent(detail);
		},
		onPendingValidity() {
			this.validityMode = "INITIAL";
		},
		async onValidationConfigUpdate() {
			if (!this.isAfterInitialRender) return;
			await this.$nextTick();
			if (!this.$refs.input) return;
			ValidationService.validateElement(this.$refs.input);
		},
		resolveNewModelValue(viewValue) {
			const trimmedViewValue = viewValue.trim();
			if (trimmedViewValue === "") return "";
			else if (isSet(this.parser)) {
				var _this$parser;
				return (_this$parser = this.parser(trimmedViewValue)) !== null && _this$parser !== void 0 ? _this$parser : trimmedViewValue;
			} else if (isSet(this.formatter)) {
				var _this$formatter;
				return (_this$formatter = this.formatter(trimmedViewValue)) !== null && _this$formatter !== void 0 ? _this$formatter : trimmedViewValue;
			} else return trimmedViewValue;
		},
		syncViewValueAfterModelUpdate(newModelValue) {
			if (newModelValue === "") this.viewValue = "";
			else if (isSet(this.parser)) {
				if (isSet(this.formatter)) this.viewValue = String(this.formatter(newModelValue) || this.viewValue);
			} else this.viewValue = String(newModelValue);
		},
		triggerComponentValidityEvent(validityEvent) {
			var _renderSlotText;
			const errorMessage = (_renderSlotText = renderSlotText(this.$slots.default, {}, { stripClasses: [] })) !== null && _renderSlotText !== void 0 ? _renderSlotText : this.defaultText;
			const element = this.$el.querySelector(`#${validityEvent.elementId}`);
			if (element) dispatchComponentValidityEvent(element, {
				...validityEvent,
				errorMessage,
				focusElementId: validityEvent.elementId
			});
		},
		setViewValueToFormattedValueOrFallbackToValue() {
			if (!isSet(this.formatter)) {
				this.viewValue = String(this.modelValue);
				return;
			}
			/**
			* A formatter function expects a proper parsed value as input.
			* If the modelvalue is a `string` type, it can be both valid or invalid.
			* Otherwise it is expected to be a type understood by the formatter, i.e. `number`.
			*/
			const parsedValue = isSet(this.parser) && typeof this.modelValue === "string" ? this.parser(this.modelValue) : this.modelValue;
			const formattedValue = isSet(parsedValue) ? this.formatter(parsedValue) : void 0;
			this.viewValue = isSet(formattedValue) ? formattedValue : String(this.modelValue);
		}
	}
});
var _hoisted_1$38 = { key: 0 };
var _hoisted_2$29 = {
	key: 0,
	class: "sr-only"
};
var _hoisted_3$23 = {
	key: 0,
	class: "sr-only"
};
var _hoisted_4$18 = { class: "text-field__icon-wrapper" };
var _hoisted_5$14 = [
	"id",
	"disabled",
	"type"
];
var _hoisted_6$11 = {
	key: 2,
	class: "text-field__append-inner"
};
var _hoisted_7$8 = {
	key: 3,
	class: "text-field__append-inner"
};
function _sfc_render$24(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_f_label = resolveComponent("f-label");
	const _component_f_icon = resolveComponent("f-icon");
	const _component_i_popup_error = resolveComponent("i-popup-error");
	const _component_i_combobox_toggle_button = resolveComponent("i-combobox-toggle-button");
	const _component_i_combobox_dropdown = resolveComponent("i-combobox-dropdown");
	return openBlock(), createElementBlock("div", { class: normalizeClass(["text-field", _ctx.rootClass]) }, [
		createBaseVNode("div", { class: normalizeClass(_ctx.labelWrapperClass) }, [createVNode(_component_f_label, {
			for: _ctx.id,
			class: normalizeClass(_ctx.labelClass)
		}, createSlots({
			default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [_ctx.defaultText !== "" ? (openBlock(), createElementBlock("span", _hoisted_1$38, toDisplayString(_ctx.defaultText), 1)) : createCommentVNode("", true)])]),
			description: withCtx(({ descriptionClass, formatDescriptionClass }) => [renderSlot(_ctx.$slots, "description", {
				descriptionClass,
				formatDescriptionClass
			}, () => [
				_ctx.descriptionText ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(descriptionClass)
				}, [
					_ctx.descriptionScreenReaderText ? (openBlock(), createElementBlock("span", _hoisted_2$29, toDisplayString(_ctx.descriptionScreenReaderText), 1)) : createCommentVNode("", true),
					_cache[7] || (_cache[7] = createTextVNode()),
					createBaseVNode("span", null, toDisplayString(_ctx.descriptionText), 1)
				], 2)) : createCommentVNode("", true),
				_cache[9] || (_cache[9] = createTextVNode()),
				_ctx.discreteDescriptionText ? (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass(formatDescriptionClass)
				}, [
					_ctx.discreteDescriptionScreenReaderText ? (openBlock(), createElementBlock("span", _hoisted_3$23, toDisplayString(_ctx.discreteDescriptionScreenReaderText), 1)) : createCommentVNode("", true),
					_cache[8] || (_cache[8] = createTextVNode()),
					createBaseVNode("span", null, toDisplayString(_ctx.discreteDescriptionText), 1)
				], 2)) : createCommentVNode("", true)
			])]),
			"error-message": withCtx(() => [renderSlot(_ctx.$slots, "error-message", normalizeProps(guardReactiveProps({
				hasError: _ctx.hasError,
				validationMessage: _ctx.validationMessage
			})), () => [_ctx.hasError ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(_ctx.validationMessage), 1)], 64)) : createCommentVNode("", true)])]),
			_: 2
		}, [_ctx.$slots.tooltip ? {
			name: "tooltip",
			fn: withCtx(() => [renderSlot(_ctx.$slots, "tooltip")]),
			key: "0"
		} : void 0]), 1032, ["for", "class"])], 2),
		_cache[19] || (_cache[19] = createTextVNode()),
		createBaseVNode("div", { class: normalizeClass(["text-field__input-wrapper", _ctx.inputWrapperClass]) }, [
			renderSlot(_ctx.$slots, "input-left"),
			_cache[17] || (_cache[17] = createTextVNode()),
			createBaseVNode("div", _hoisted_4$18, [
				withDirectives(createBaseVNode("input", mergeProps({
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
				}), null, 16, _hoisted_5$14), [[vModelDynamic, _ctx.viewValue]]),
				_cache[13] || (_cache[13] = createTextVNode()),
				_ctx.hasError && _ctx.textFieldTableMode ? (openBlock(), createBlock(_component_f_icon, {
					key: 0,
					ref: "icon",
					class: "text-field__icon input-icon text-field__append-inner text-field__error-popup-icon",
					name: "error"
				}, null, 512)) : createCommentVNode("", true),
				_cache[14] || (_cache[14] = createTextVNode()),
				_ctx.textFieldTableMode ? (openBlock(), createBlock(_component_i_popup_error, {
					key: 1,
					anchor: _ctx.getErrorPopupAnchor(),
					"is-open": _ctx.showPopupError,
					"error-message": _ctx.validationMessage,
					layout: "f-interactive-table",
					onClose: _ctx.closePopupError
				}, null, 8, [
					"anchor",
					"is-open",
					"error-message",
					"onClose"
				])) : createCommentVNode("", true),
				_cache[15] || (_cache[15] = createTextVNode()),
				_ctx.$slots["append-inner"] ? (openBlock(), createElementBlock("div", _hoisted_6$11, [renderSlot(_ctx.$slots, "append-inner")])) : createCommentVNode("", true),
				_cache[16] || (_cache[16] = createTextVNode()),
				_ctx.options ? (openBlock(), createElementBlock("div", _hoisted_7$8, [createVNode(_component_i_combobox_toggle_button, {
					disabled: _ctx.disabled,
					"is-open": _ctx.dropdownIsOpen,
					"aria-controls": _ctx.dropdownIsOpen ? _ctx.dropdownId : void 0,
					"aria-expanded": _ctx.dropdownIsOpen,
					onToggle: _ctx.toggleDropdown
				}, null, 8, [
					"disabled",
					"is-open",
					"aria-controls",
					"aria-expanded",
					"onToggle"
				])])) : createCommentVNode("", true)
			]),
			_cache[18] || (_cache[18] = createTextVNode()),
			renderSlot(_ctx.$slots, "input-right")
		], 2),
		_cache[20] || (_cache[20] = createTextVNode()),
		_ctx.options && _ctx.$refs.input ? (openBlock(), createBlock(_component_i_combobox_dropdown, {
			key: 0,
			id: _ctx.dropdownId,
			"is-open": _ctx.dropdownIsOpen,
			options: _ctx.dropdownOptions,
			"active-option": _ctx.activeOption,
			"active-option-id": _ctx.activeOptionId,
			"input-node": _ctx.$refs.input,
			onSelect: _ctx.onDropdownSelect,
			onClose: _ctx.onDropdownClose
		}, null, 8, [
			"id",
			"is-open",
			"options",
			"active-option",
			"active-option-id",
			"input-node",
			"onSelect",
			"onClose"
		])) : createCommentVNode("", true)
	], 2);
}
var FTextField_default = /* @__PURE__ */ _plugin_vue_export_helper_default$1(FTextField_vue_vue_type_script_lang_default, [["render", _sfc_render$24]]);
TranslationService.provider.translate("fkui.email-text-field.error.pasting", "Du kan inte kopiera mejladressen. Du måste skriva in den igen.");
TranslationService.provider.translate("fkui.search-text-field.search-screen-reader", "Töm inmatningsfält");
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
	var globalThis = require_global_this();
	module.exports = function(CONSTRUCTOR, METHOD) {
		var Constructor = globalThis[CONSTRUCTOR];
		var Prototype = Constructor && Constructor.prototype;
		return Prototype && Prototype[METHOD];
	};
}));
(/* @__PURE__ */ __commonJSMin((() => {
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
})))();
useTranslate();
(/* @__PURE__ */ (function(FTableColumnType) {
	FTableColumnType["TEXT"] = "text";
	FTableColumnType["DATE"] = "date";
	FTableColumnType["NUMERIC"] = "numeric";
	FTableColumnType["ACTION"] = "action";
	return FTableColumnType;
})({})).TEXT;
TableScroll.NONE;
var layoutRegister = {};
/**
* @internal
*/
function setLayout(name, layout) {
	layoutRegister[name] = layout;
}
/**
* Register a new layout for usage with {@link FPageLayout}.
*
* @public
*/
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
var require_to_string = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var classof = require_classof();
	var $String = String;
	module.exports = function(argument) {
		if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
		return $String(argument);
	};
}));
var require_parse_json_string = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var uncurryThis = require_function_uncurry_this();
	var hasOwn = require_has_own_property();
	var $SyntaxError = SyntaxError;
	var $parseInt = parseInt;
	var fromCharCode = String.fromCharCode;
	var at = uncurryThis("".charAt);
	var slice = uncurryThis("".slice);
	var exec = uncurryThis(/./.exec);
	var codePoints = {
		"\\\"": "\"",
		"\\\\": "\\",
		"\\/": "/",
		"\\b": "\b",
		"\\f": "\f",
		"\\n": "\n",
		"\\r": "\r",
		"\\t": "	"
	};
	var IS_4_HEX_DIGITS = /^[\da-f]{4}$/i;
	var IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/;
	module.exports = function(source, i) {
		var unterminated = true;
		var value = "";
		while (i < source.length) {
			var chr = at(source, i);
			if (chr === "\\") {
				var twoChars = slice(source, i, i + 2);
				if (hasOwn(codePoints, twoChars)) {
					value += codePoints[twoChars];
					i += 2;
				} else if (twoChars === "\\u") {
					i += 2;
					var fourHexDigits = slice(source, i, i + 4);
					if (!exec(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError("Bad Unicode escape at: " + i);
					value += fromCharCode($parseInt(fourHexDigits, 16));
					i += 4;
				} else throw new $SyntaxError("Unknown escape sequence: \"" + twoChars + "\"");
			} else if (chr === "\"") {
				unterminated = false;
				i++;
				break;
			} else {
				if (exec(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError("Bad control character in string literal at: " + i);
				value += chr;
				i++;
			}
		}
		if (unterminated) throw new $SyntaxError("Unterminated string at: " + i);
		return {
			value,
			end: i
		};
	};
}));
(/* @__PURE__ */ __commonJSMin((() => {
	var $ = require_export();
	var DESCRIPTORS = require_descriptors();
	var globalThis = require_global_this();
	var getBuiltIn = require_get_built_in();
	var uncurryThis = require_function_uncurry_this();
	var call = require_function_call();
	var isCallable = require_is_callable();
	var isObject = require_is_object();
	var isArray = require_is_array();
	var hasOwn = require_has_own_property();
	var toString = require_to_string();
	var lengthOfArrayLike = require_length_of_array_like();
	var createProperty = require_create_property();
	var fails = require_fails();
	var parseJSONString = require_parse_json_string();
	var NATIVE_SYMBOL = require_symbol_constructor_detection();
	var JSON = globalThis.JSON;
	var Number = globalThis.Number;
	var SyntaxError = globalThis.SyntaxError;
	var nativeParse = JSON && JSON.parse;
	var enumerableOwnProperties = getBuiltIn("Object", "keys");
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var at = uncurryThis("".charAt);
	var slice = uncurryThis("".slice);
	var exec = uncurryThis(/./.exec);
	var push = uncurryThis([].push);
	var IS_DIGIT = /^\d$/;
	var IS_NON_ZERO_DIGIT = /^[1-9]$/;
	var IS_NUMBER_START = /^[\d-]$/;
	var IS_WHITESPACE = /^[\t\n\r ]$/;
	var PRIMITIVE = 0;
	var OBJECT = 1;
	var $parse = function(source, reviver) {
		source = toString(source);
		var context = new Context(source, 0, "");
		var root = context.parse();
		var value = root.value;
		var endIndex = context.skip(IS_WHITESPACE, root.end);
		if (endIndex < source.length) throw new SyntaxError("Unexpected extra character: \"" + at(source, endIndex) + "\" after the parsed data at: " + endIndex);
		return isCallable(reviver) ? internalize({ "": value }, "", reviver, root) : value;
	};
	var internalize = function(holder, name, reviver, node) {
		var val = holder[name];
		var unmodified = node && val === node.value;
		var context = unmodified && typeof node.source == "string" ? { source: node.source } : {};
		var elementRecordsLen, keys, len, i, P;
		if (isObject(val)) {
			var nodeIsArray = isArray(val);
			var nodes = unmodified ? node.nodes : nodeIsArray ? [] : {};
			if (nodeIsArray) {
				elementRecordsLen = nodes.length;
				len = lengthOfArrayLike(val);
				for (i = 0; i < len; i++) internalizeProperty(val, i, internalize(val, "" + i, reviver, i < elementRecordsLen ? nodes[i] : void 0));
			} else {
				keys = enumerableOwnProperties(val);
				len = lengthOfArrayLike(keys);
				for (i = 0; i < len; i++) {
					P = keys[i];
					internalizeProperty(val, P, internalize(val, P, reviver, hasOwn(nodes, P) ? nodes[P] : void 0));
				}
			}
		}
		return call(reviver, holder, name, val, context);
	};
	var internalizeProperty = function(object, key, value) {
		if (DESCRIPTORS) {
			var descriptor = getOwnPropertyDescriptor(object, key);
			if (descriptor && !descriptor.configurable) return;
		}
		if (value === void 0) delete object[key];
		else createProperty(object, key, value);
	};
	var Node = function(value, end, source, nodes) {
		this.value = value;
		this.end = end;
		this.source = source;
		this.nodes = nodes;
	};
	var Context = function(source, index) {
		this.source = source;
		this.index = index;
	};
	Context.prototype = {
		fork: function(nextIndex) {
			return new Context(this.source, nextIndex);
		},
		parse: function() {
			var source = this.source;
			var i = this.skip(IS_WHITESPACE, this.index);
			var fork = this.fork(i);
			var chr = at(source, i);
			if (exec(IS_NUMBER_START, chr)) return fork.number();
			switch (chr) {
				case "{": return fork.object();
				case "[": return fork.array();
				case "\"": return fork.string();
				case "t": return fork.keyword(true);
				case "f": return fork.keyword(false);
				case "n": return fork.keyword(null);
			}
			throw new SyntaxError("Unexpected character: \"" + chr + "\" at: " + i);
		},
		node: function(type, value, start, end, nodes) {
			return new Node(value, end, type ? null : slice(this.source, start, end), nodes);
		},
		object: function() {
			var source = this.source;
			var i = this.index + 1;
			var expectKeypair = false;
			var object = {};
			var nodes = {};
			var closed = false;
			while (i < source.length) {
				i = this.until(["\"", "}"], i);
				if (at(source, i) === "}" && !expectKeypair) {
					i++;
					closed = true;
					break;
				}
				var result = this.fork(i).string();
				var key = result.value;
				i = result.end;
				i = this.until([":"], i) + 1;
				i = this.skip(IS_WHITESPACE, i);
				result = this.fork(i).parse();
				createProperty(nodes, key, result);
				createProperty(object, key, result.value);
				i = this.until([",", "}"], result.end);
				var chr = at(source, i);
				if (chr === ",") {
					expectKeypair = true;
					i++;
				} else if (chr === "}") {
					i++;
					closed = true;
					break;
				}
			}
			if (!closed) throw new SyntaxError("Unterminated object at: " + i);
			return this.node(OBJECT, object, this.index, i, nodes);
		},
		array: function() {
			var source = this.source;
			var i = this.index + 1;
			var expectElement = false;
			var array = [];
			var nodes = [];
			var closed = false;
			while (i < source.length) {
				i = this.skip(IS_WHITESPACE, i);
				if (at(source, i) === "]" && !expectElement) {
					i++;
					closed = true;
					break;
				}
				var result = this.fork(i).parse();
				push(nodes, result);
				push(array, result.value);
				i = this.until([",", "]"], result.end);
				if (at(source, i) === ",") {
					expectElement = true;
					i++;
				} else if (at(source, i) === "]") {
					i++;
					closed = true;
					break;
				}
			}
			if (!closed) throw new SyntaxError("Unterminated array at: " + i);
			return this.node(OBJECT, array, this.index, i, nodes);
		},
		string: function() {
			var index = this.index;
			var parsed = parseJSONString(this.source, this.index + 1);
			return this.node(PRIMITIVE, parsed.value, index, parsed.end);
		},
		number: function() {
			var source = this.source;
			var startIndex = this.index;
			var i = startIndex;
			if (at(source, i) === "-") i++;
			if (at(source, i) === "0") i++;
			else if (exec(IS_NON_ZERO_DIGIT, at(source, i))) i = this.skip(IS_DIGIT, i + 1);
			else throw new SyntaxError("Failed to parse number at: " + i);
			if (at(source, i) === ".") {
				var fractionStartIndex = i + 1;
				i = this.skip(IS_DIGIT, fractionStartIndex);
				if (fractionStartIndex === i) throw new SyntaxError("Failed to parse number's fraction at: " + i);
			}
			if (at(source, i) === "e" || at(source, i) === "E") {
				i++;
				if (at(source, i) === "+" || at(source, i) === "-") i++;
				var exponentStartIndex = i;
				i = this.skip(IS_DIGIT, i);
				if (exponentStartIndex === i) throw new SyntaxError("Failed to parse number's exponent value at: " + i);
			}
			return this.node(PRIMITIVE, Number(slice(source, startIndex, i)), startIndex, i);
		},
		keyword: function(value) {
			var keyword = "" + value;
			var index = this.index;
			var endIndex = index + keyword.length;
			if (slice(this.source, index, endIndex) !== keyword) throw new SyntaxError("Failed to parse value at: " + index);
			return this.node(PRIMITIVE, value, index, endIndex);
		},
		skip: function(regex, i) {
			var source = this.source;
			for (; i < source.length; i++) if (!exec(regex, at(source, i))) break;
			return i;
		},
		until: function(array, i) {
			i = this.skip(IS_WHITESPACE, i);
			var chr = at(this.source, i);
			for (var j = 0; j < array.length; j++) if (array[j] === chr) return i;
			throw new SyntaxError("Unexpected character: \"" + chr + "\" at: " + i);
		}
	};
	var NO_SOURCE_SUPPORT = fails(function() {
		var unsafeInt = "9007199254740993";
		var source;
		nativeParse(unsafeInt, function(key, value, context) {
			source = context.source;
		});
		return source !== unsafeInt;
	});
	var PROPER_BASE_PARSE = NATIVE_SYMBOL && !fails(function() {
		return 1 / nativeParse("-0 	") !== -Infinity;
	});
	$({
		target: "JSON",
		stat: true,
		forced: NO_SOURCE_SUPPORT
	}, { parse: function parse(text, reviver) {
		return PROPER_BASE_PARSE && !isCallable(reviver) ? nativeParse(text) : $parse(text, reviver);
	} });
})))();
var require_is_raw_json = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isObject = require_is_object();
	var getInternalState = require_internal_state().get;
	module.exports = function isRawJSON(O) {
		if (!isObject(O)) return false;
		var state = getInternalState(O);
		return !!state && state.type === "RawJSON";
	};
}));
var require_array_slice = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_function_uncurry_this()([].slice);
}));
var require_native_raw_json = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = !require_fails()(function() {
		var unsafeInt = "9007199254740993";
		var raw = JSON.rawJSON(unsafeInt);
		return !JSON.isRawJSON(raw) || JSON.stringify(raw) !== unsafeInt;
	});
}));
(/* @__PURE__ */ __commonJSMin((() => {
	var $ = require_export();
	var getBuiltIn = require_get_built_in();
	var apply = require_function_apply();
	var call = require_function_call();
	var uncurryThis = require_function_uncurry_this();
	var fails = require_fails();
	var isArray = require_is_array();
	var isCallable = require_is_callable();
	var isRawJSON = require_is_raw_json();
	var isSymbol = require_is_symbol();
	var classof = require_classof_raw();
	var toString = require_to_string();
	var arraySlice = require_array_slice();
	var parseJSONString = require_parse_json_string();
	var uid = require_uid();
	var NATIVE_SYMBOL = require_symbol_constructor_detection();
	var NATIVE_RAW_JSON = require_native_raw_json();
	var $String = String;
	var $stringify = getBuiltIn("JSON", "stringify");
	var exec = uncurryThis(/./.exec);
	var charAt = uncurryThis("".charAt);
	var charCodeAt = uncurryThis("".charCodeAt);
	var replace = uncurryThis("".replace);
	var slice = uncurryThis("".slice);
	var push = uncurryThis([].push);
	var numberToString = uncurryThis(1.1.toString);
	var surrogates = /[\uD800-\uDFFF]/g;
	var leadingSurrogates = /^[\uD800-\uDBFF]$/;
	var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
	var MARK = uid();
	var MARK_LENGTH = MARK.length;
	var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function() {
		var symbol = getBuiltIn("Symbol")("stringify detection");
		return $stringify([symbol]) !== "[null]" || $stringify({ a: symbol }) !== "{}" || $stringify(Object(symbol)) !== "{}";
	});
	var ILL_FORMED_UNICODE = fails(function() {
		return $stringify("\udf06\ud834") !== "\"\\udf06\\ud834\"" || $stringify("\udead") !== "\"\\udead\"";
	});
	var stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function(it, replacer) {
		var args = arraySlice(arguments);
		var $replacer = getReplacerFunction(replacer);
		if (!isCallable($replacer) && (it === void 0 || isSymbol(it))) return;
		args[1] = function(key, value) {
			if (isCallable($replacer)) value = call($replacer, this, $String(key), value);
			if (!isSymbol(value)) return value;
		};
		return apply($stringify, null, args);
	} : $stringify;
	var fixIllFormedJSON = function(match, offset, string) {
		var prev = charAt(string, offset - 1);
		var next = charAt(string, offset + 1);
		if (exec(leadingSurrogates, match) && !exec(trailingSurrogates, next) || exec(trailingSurrogates, match) && !exec(leadingSurrogates, prev)) return "\\u" + numberToString(charCodeAt(match, 0), 16);
		return match;
	};
	var getReplacerFunction = function(replacer) {
		if (isCallable(replacer)) return replacer;
		if (!isArray(replacer)) return;
		var rawLength = replacer.length;
		var keys = [];
		for (var i = 0; i < rawLength; i++) {
			var element = replacer[i];
			if (typeof element == "string") push(keys, element);
			else if (typeof element == "number" || classof(element) === "Number" || classof(element) === "String") push(keys, toString(element));
		}
		var keysLength = keys.length;
		var root = true;
		return function(key, value) {
			if (root) {
				root = false;
				return value;
			}
			if (isArray(this)) return value;
			for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
		};
	};
	if ($stringify) $({
		target: "JSON",
		stat: true,
		arity: 3,
		forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE || !NATIVE_RAW_JSON
	}, { stringify: function stringify(text, replacer, space) {
		var replacerFunction = getReplacerFunction(replacer);
		var rawStrings = [];
		var json = stringifyWithProperSymbolsConversion(text, function(key, value) {
			var v = isCallable(replacerFunction) ? call(replacerFunction, this, $String(key), value) : value;
			return !NATIVE_RAW_JSON && isRawJSON(v) ? MARK + (push(rawStrings, v.rawJSON) - 1) : v;
		}, space);
		if (typeof json != "string") return json;
		if (ILL_FORMED_UNICODE) json = replace(json, surrogates, fixIllFormedJSON);
		if (NATIVE_RAW_JSON) return json;
		var result = "";
		var length = json.length;
		for (var i = 0; i < length; i++) {
			var chr = charAt(json, i);
			if (chr === "\"") {
				var end = parseJSONString(json, ++i).end - 1;
				var string = slice(json, i, end);
				result += slice(string, 0, MARK_LENGTH) === MARK ? rawStrings[slice(string, MARK_LENGTH)] : "\"" + string + "\"";
				i = end;
			} else result += chr;
		}
		return result;
	} });
})))();
({ .../* @__PURE__ */ defineComponent({ computed: { ariaLabel() {
	const content = renderSlotText(this.$slots.default);
	if (!content) throw new Error("`f-logo` requires text content.");
	return content;
} } }) });
var upKeys = ["Up", "ArrowUp"];
var downKeys = ["Down", "ArrowDown"];
var verticalKeys = [...upKeys, ...downKeys];
new Set([
	"Tab",
	"Left",
	"Right",
	"ArrowLeft",
	"ArrowRight",
	"Home",
	"End",
	" ",
	"Spacebar",
	"Enter",
	...verticalKeys
]);
//#endregion
//#region \0plugin-vue:export-helper
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
//#endregion
//#region src/App.vue
var _sfc_main = {};
function _sfc_render$1(_ctx, _cache) {
	const _component_router_view = resolveComponent("router-view");
	return openBlock(), createBlock(_component_router_view);
}
var App_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render$1]]);
//#endregion
//#region ../../node_modules/vue-router/dist/devtools-EWN81iOl.mjs
var isBrowser = typeof document !== "undefined";
/**
* Allows differentiating lazy components from functional components and vue-class-component
* @internal
*
* @param component
*/
function isRouteComponent(component) {
	return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function isESModule(obj) {
	return obj.__esModule || obj[Symbol.toStringTag] === "Module" || obj.default && isRouteComponent(obj.default);
}
var assign = Object.assign;
function applyToParams(fn, params) {
	const newParams = {};
	for (const key in params) {
		const value = params[key];
		newParams[key] = isArray(value) ? value.map(fn) : fn(value);
	}
	return newParams;
}
var noop = () => {};
/**
* Typesafe alternative to Array.isArray
* https://github.com/microsoft/TypeScript/pull/48228
*
* @internal
*/
var isArray = Array.isArray;
function mergeOptions(defaults, partialOptions) {
	const options = {};
	for (const key in defaults) options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
	return options;
}
/**
* Encoding Rules (␣ = Space)
* - Path: ␣ " < > # ? { }
* - Query: ␣ " < > # & =
* - Hash: ␣ " < > `
*
* On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
* defines some extra characters to be encoded. Most browsers do not encode them
* in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
* also encode `!'()*`. Leaving un-encoded only ASCII alphanumeric(`a-zA-Z0-9`)
* plus `-._~`. This extra safety should be applied to query by patching the
* string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
* should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
* into a `/` if directly typed in. The _backtick_ (`````) should also be
* encoded everywhere because some browsers like FF encode it when directly
* written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
*/
var HASH_RE = /#/g;
var AMPERSAND_RE = /&/g;
var SLASH_RE = /\//g;
var EQUAL_RE = /=/g;
var IM_RE = /\?/g;
var PLUS_RE = /\+/g;
/**
* NOTE: It's not clear to me if we should encode the + symbol in queries, it
* seems to be less flexible than not doing so and I can't find out the legacy
* systems requiring this for regular requests like text/html. In the standard,
* the encoding of the plus character is only mentioned for
* application/x-www-form-urlencoded
* (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
* leave the plus character as is in queries. To be more flexible, we allow the
* plus character on the query, but it can also be manually encoded by the user.
*
* Resources:
* - https://url.spec.whatwg.org/#urlencoded-parsing
* - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
*/
var ENC_BRACKET_OPEN_RE = /%5B/g;
var ENC_BRACKET_CLOSE_RE = /%5D/g;
var ENC_CARET_RE = /%5E/g;
var ENC_BACKTICK_RE = /%60/g;
var ENC_CURLY_OPEN_RE = /%7B/g;
var ENC_PIPE_RE = /%7C/g;
var ENC_CURLY_CLOSE_RE = /%7D/g;
var ENC_SPACE_RE = /%20/g;
/**
* Encode characters that need to be encoded on the path, search and hash
* sections of the URL.
*
* @internal
* @param text - string to encode
* @returns encoded string
*/
function commonEncode(text) {
	return text == null ? "" : encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
/**
* Encode characters that need to be encoded on the hash section of the URL.
*
* @param text - string to encode
* @returns encoded string
*/
function encodeHash(text) {
	return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
/**
* Encode characters that need to be encoded query values on the query
* section of the URL.
*
* @param text - string to encode
* @returns encoded string
*/
function encodeQueryValue(text) {
	return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
/**
* Like `encodeQueryValue` but also encodes the `=` character.
*
* @param text - string to encode
*/
function encodeQueryKey(text) {
	return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
/**
* Encode characters that need to be encoded on the path section of the URL.
*
* @param text - string to encode
* @returns encoded string
*/
function encodePath(text) {
	return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
/**
* Encode characters that need to be encoded on the path section of the URL as a
* param. This function encodes everything {@link encodePath} does plus the
* slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
* string instead.
*
* @param text - string to encode
* @returns encoded string
*/
function encodeParam(text) {
	return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
	if (text == null) return null;
	try {
		return decodeURIComponent("" + text);
	} catch (err) {}
	return "" + text;
}
var TRAILING_SLASH_RE = /\/$/;
var removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
/**
* Transforms a URI into a normalized history location
*
* @param parseQuery
* @param location - URI to normalize
* @param currentLocation - current absolute location. Allows resolving relative
* paths. Must start with `/`. Defaults to `/`
* @returns a normalized history location
*/
function parseURL(parseQuery$1, location, currentLocation = "/") {
	let path, query = {}, searchString = "", hash = "";
	const hashPos = location.indexOf("#");
	let searchPos = location.indexOf("?");
	searchPos = hashPos >= 0 && searchPos > hashPos ? -1 : searchPos;
	if (searchPos >= 0) {
		path = location.slice(0, searchPos);
		searchString = location.slice(searchPos, hashPos > 0 ? hashPos : location.length);
		query = parseQuery$1(searchString.slice(1));
	}
	if (hashPos >= 0) {
		path = path || location.slice(0, hashPos);
		hash = location.slice(hashPos, location.length);
	}
	path = resolveRelativePath(path != null ? path : location, currentLocation);
	return {
		fullPath: path + searchString + hash,
		path,
		query,
		hash: decode(hash)
	};
}
/**
* Stringifies a URL object
*
* @param stringifyQuery
* @param location
*/
function stringifyURL(stringifyQuery$1, location) {
	const query = location.query ? stringifyQuery$1(location.query) : "";
	return location.path + (query && "?") + query + (location.hash || "");
}
/**
* Strips off the base from the beginning of a location.pathname in a non-case-sensitive way.
*
* @param pathname - location.pathname
* @param base - base to strip off
*/
function stripBase(pathname, base) {
	if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase())) return pathname;
	return pathname.slice(base.length) || "/";
}
/**
* Checks if two RouteLocation are equal. This means that both locations are
* pointing towards the same {@link RouteRecord} and that all `params`, `query`
* parameters and `hash` are the same
*
* @param stringifyQuery - A function that takes a query object of type LocationQueryRaw and returns a string representation of it.
* @param a - first {@link RouteLocation}
* @param b - second {@link RouteLocation}
*/
function isSameRouteLocation(stringifyQuery$1, a, b) {
	const aLastIndex = a.matched.length - 1;
	const bLastIndex = b.matched.length - 1;
	return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery$1(a.query) === stringifyQuery$1(b.query) && a.hash === b.hash;
}
/**
* Check if two `RouteRecords` are equal. Takes into account aliases: they are
* considered equal to the `RouteRecord` they are aliasing.
*
* @param a - first {@link RouteRecord}
* @param b - second {@link RouteRecord}
*/
function isSameRouteRecord(a, b) {
	return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
	if (Object.keys(a).length !== Object.keys(b).length) return false;
	for (var key in a) if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
	return true;
}
function isSameRouteLocationParamsValue(a, b) {
	return isArray(a) ? isEquivalentArray(a, b) : isArray(b) ? isEquivalentArray(b, a) : a?.valueOf() === b?.valueOf();
}
/**
* Check if two arrays are the same or if an array with one single entry is the
* same as another primitive value. Used to check query and parameters
*
* @param a - array of values
* @param b - array of values or a single value
*/
function isEquivalentArray(a, b) {
	return isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
/**
* Resolves a relative path that starts with `.`.
*
* @param to - path location we are resolving
* @param from - currentLocation.path, should start with `/`
*/
function resolveRelativePath(to, from) {
	if (to.startsWith("/")) return to;
	if (!to) return from;
	const fromSegments = from.split("/");
	const toSegments = to.split("/");
	const lastToSegment = toSegments[toSegments.length - 1];
	if (lastToSegment === ".." || lastToSegment === ".") toSegments.push("");
	let position = fromSegments.length - 1;
	let toPosition;
	let segment;
	for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
		segment = toSegments[toPosition];
		if (segment === ".") continue;
		if (segment === "..") {
			if (position > 1) position--;
		} else break;
	}
	return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition).join("/");
}
/**
* Initial route location where the router is. Can be used in navigation guards
* to differentiate the initial navigation.
*
* @example
* ```js
* import { START_LOCATION } from 'vue-router'
*
* router.beforeEach((to, from) => {
*   if (from === START_LOCATION) {
*     // initial navigation
*   }
* })
* ```
*/
var START_LOCATION_NORMALIZED = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
};
var NavigationType = /* @__PURE__ */ function(NavigationType$1) {
	NavigationType$1["pop"] = "pop";
	NavigationType$1["push"] = "push";
	return NavigationType$1;
}({});
var NavigationDirection = /* @__PURE__ */ function(NavigationDirection$1) {
	NavigationDirection$1["back"] = "back";
	NavigationDirection$1["forward"] = "forward";
	NavigationDirection$1["unknown"] = "";
	return NavigationDirection$1;
}({});
/**
* Normalizes a base by removing any trailing slash and reading the base tag if
* present.
*
* @param base - base to normalize
*/
function normalizeBase(base) {
	if (!base) if (isBrowser) {
		const baseEl = document.querySelector("base");
		base = baseEl && baseEl.getAttribute("href") || "/";
		base = base.replace(/^\w+:\/\/[^\/]+/, "");
	} else base = "/";
	if (base[0] !== "/" && base[0] !== "#") base = "/" + base;
	return removeTrailingSlash(base);
}
var BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location) {
	return base.replace(BEFORE_HASH_RE, "#") + location;
}
function getElementPosition(el, offset) {
	const docRect = document.documentElement.getBoundingClientRect();
	const elRect = el.getBoundingClientRect();
	return {
		behavior: offset.behavior,
		left: elRect.left - docRect.left - (offset.left || 0),
		top: elRect.top - docRect.top - (offset.top || 0)
	};
}
var computeScrollPosition = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function scrollToPosition(position) {
	let scrollToOptions;
	if ("el" in position) {
		const positionEl = position.el;
		const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
		const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
		if (!el) return;
		scrollToOptions = getElementPosition(el, position);
	} else scrollToOptions = position;
	if ("scrollBehavior" in document.documentElement.style) window.scrollTo(scrollToOptions);
	else window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.scrollX, scrollToOptions.top != null ? scrollToOptions.top : window.scrollY);
}
function getScrollKey(path, delta) {
	return (history.state ? history.state.position - delta : -1) + path;
}
var scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
	scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
	const scroll = scrollPositions.get(key);
	scrollPositions.delete(key);
	return scroll;
}
/**
* ScrollBehavior instance used by the router to compute and restore the scroll
* position when navigating.
*/
function isRouteLocation(route) {
	return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
	return typeof name === "string" || typeof name === "symbol";
}
/**
* Flags so we can combine them when checking for multiple errors. This is the internal version of
* {@link NavigationFailureType}.
*
* @internal
*/
var ErrorTypes = /* @__PURE__ */ function(ErrorTypes$1) {
	ErrorTypes$1[ErrorTypes$1["MATCHER_NOT_FOUND"] = 1] = "MATCHER_NOT_FOUND";
	ErrorTypes$1[ErrorTypes$1["NAVIGATION_GUARD_REDIRECT"] = 2] = "NAVIGATION_GUARD_REDIRECT";
	ErrorTypes$1[ErrorTypes$1["NAVIGATION_ABORTED"] = 4] = "NAVIGATION_ABORTED";
	ErrorTypes$1[ErrorTypes$1["NAVIGATION_CANCELLED"] = 8] = "NAVIGATION_CANCELLED";
	ErrorTypes$1[ErrorTypes$1["NAVIGATION_DUPLICATED"] = 16] = "NAVIGATION_DUPLICATED";
	return ErrorTypes$1;
}({});
var NavigationFailureSymbol = Symbol("");
ErrorTypes.MATCHER_NOT_FOUND, ErrorTypes.NAVIGATION_GUARD_REDIRECT, ErrorTypes.NAVIGATION_ABORTED, ErrorTypes.NAVIGATION_CANCELLED, ErrorTypes.NAVIGATION_DUPLICATED;
/**
* Creates a typed NavigationFailure object.
* @internal
* @param type - NavigationFailureType
* @param params - { from, to }
*/
function createRouterError(type, params) {
	return assign(/* @__PURE__ */ new Error(), {
		type,
		[NavigationFailureSymbol]: true
	}, params);
}
function isNavigationFailure(error, type) {
	return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
/**
* Transforms a queryString into a {@link LocationQuery} object. Accept both, a
* version with the leading `?` and without Should work as URLSearchParams

* @internal
*
* @param search - search string to parse
* @returns a query object
*/
function parseQuery(search) {
	const query = {};
	if (search === "" || search === "?") return query;
	const searchParams = (search[0] === "?" ? search.slice(1) : search).split("&");
	for (let i = 0; i < searchParams.length; ++i) {
		const searchParam = searchParams[i].replace(PLUS_RE, " ");
		const eqPos = searchParam.indexOf("=");
		const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
		const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
		if (key in query) {
			let currentValue = query[key];
			if (!isArray(currentValue)) currentValue = query[key] = [currentValue];
			currentValue.push(value);
		} else query[key] = value;
	}
	return query;
}
/**
* Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
* doesn't prepend a `?`
*
* @internal
*
* @param query - query object to stringify
* @returns string version of the query without the leading `?`
*/
function stringifyQuery(query) {
	let search = "";
	for (let key in query) {
		const value = query[key];
		key = encodeQueryKey(key);
		if (value == null) {
			if (value !== void 0) search += (search.length ? "&" : "") + key;
			continue;
		}
		(isArray(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)]).forEach((value$1) => {
			if (value$1 !== void 0) {
				search += (search.length ? "&" : "") + key;
				if (value$1 != null) search += "=" + value$1;
			}
		});
	}
	return search;
}
/**
* Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
* numbers into strings, removing keys with an undefined value and replacing
* undefined with null in arrays
*
* @param query - query object to normalize
* @returns a normalized query object
*/
function normalizeQuery(query) {
	const normalizedQuery = {};
	for (const key in query) {
		const value = query[key];
		if (value !== void 0) normalizedQuery[key] = isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
	}
	return normalizedQuery;
}
/**
* RouteRecord being rendered by the closest ancestor Router View. Used for
* `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
* Location Matched
*
* @internal
*/
var matchedRouteKey = Symbol("");
/**
* Allows overriding the router view depth to control which component in
* `matched` is rendered. rvd stands for Router View Depth
*
* @internal
*/
var viewDepthKey = Symbol("");
/**
* Allows overriding the router instance returned by `useRouter` in tests. r
* stands for router
*
* @internal
*/
var routerKey = Symbol("");
/**
* Allows overriding the current route returned by `useRoute` in tests. rl
* stands for route location
*
* @internal
*/
var routeLocationKey = Symbol("");
/**
* Allows overriding the current route used by router-view. Internally this is
* used when the `route` prop is passed.
*
* @internal
*/
var routerViewLocationKey = Symbol("");
/**
* Create a list of callbacks that can be reset. Used to create before and after navigation guards list
*/
function useCallbacks() {
	let handlers = [];
	function add(handler) {
		handlers.push(handler);
		return () => {
			const i = handlers.indexOf(handler);
			if (i > -1) handlers.splice(i, 1);
		};
	}
	function reset() {
		handlers = [];
	}
	return {
		add,
		list: () => handlers.slice(),
		reset
	};
}
function guardToPromiseFn(guard, to, from, record, name, runWithContext = (fn) => fn()) {
	const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
	return () => new Promise((resolve, reject) => {
		const next = (valid) => {
			if (valid === false) reject(createRouterError(ErrorTypes.NAVIGATION_ABORTED, {
				from,
				to
			}));
			else if (valid instanceof Error) reject(valid);
			else if (isRouteLocation(valid)) reject(createRouterError(ErrorTypes.NAVIGATION_GUARD_REDIRECT, {
				from: to,
				to: valid
			}));
			else {
				if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") enterCallbackArray.push(valid);
				resolve();
			}
		};
		const guardReturn = runWithContext(() => guard.call(record && record.instances[name], to, from, next));
		let guardCall = Promise.resolve(guardReturn);
		if (guard.length < 3) guardCall = guardCall.then(next);
		guardCall.catch((err) => reject(err));
	});
}
function extractComponentsGuards(matched, guardType, to, from, runWithContext = (fn) => fn()) {
	const guards = [];
	for (const record of matched) for (const name in record.components) {
		let rawComponent = record.components[name];
		if (guardType !== "beforeRouteEnter" && !record.instances[name]) continue;
		if (isRouteComponent(rawComponent)) {
			const guard = (rawComponent.__vccOpts || rawComponent)[guardType];
			guard && guards.push(guardToPromiseFn(guard, to, from, record, name, runWithContext));
		} else {
			let componentPromise = rawComponent();
			guards.push(() => componentPromise.then((resolved) => {
				if (!resolved) throw new Error(`Couldn't resolve component "${name}" at "${record.path}"`);
				const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
				record.mods[name] = resolved;
				record.components[name] = resolvedComponent;
				const guard = (resolvedComponent.__vccOpts || resolvedComponent)[guardType];
				return guard && guardToPromiseFn(guard, to, from, record, name, runWithContext)();
			}));
		}
	}
	return guards;
}
/**
* Split the leaving, updating, and entering records.
* @internal
*
* @param  to - Location we are navigating to
* @param from - Location we are navigating from
*/
function extractChangingRecords(to, from) {
	const leavingRecords = [];
	const updatingRecords = [];
	const enteringRecords = [];
	const len = Math.max(from.matched.length, to.matched.length);
	for (let i = 0; i < len; i++) {
		const recordFrom = from.matched[i];
		if (recordFrom) if (to.matched.find((record) => isSameRouteRecord(record, recordFrom))) updatingRecords.push(recordFrom);
		else leavingRecords.push(recordFrom);
		const recordTo = to.matched[i];
		if (recordTo) {
			if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) enteringRecords.push(recordTo);
		}
	}
	return [
		leavingRecords,
		updatingRecords,
		enteringRecords
	];
}
//#endregion
//#region ../../node_modules/vue-router/dist/vue-router.mjs
/*!
* vue-router v4.6.4
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
var createBaseLocation = () => location.protocol + "//" + location.host;
/**
* Creates a normalized history location from a window.location object
* @param base - The base path
* @param location - The window.location object
*/
function createCurrentLocation(base, location$1) {
	const { pathname, search, hash } = location$1;
	const hashPos = base.indexOf("#");
	if (hashPos > -1) {
		let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
		let pathFromHash = hash.slice(slicePos);
		if (pathFromHash[0] !== "/") pathFromHash = "/" + pathFromHash;
		return stripBase(pathFromHash, "");
	}
	return stripBase(pathname, base) + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
	let listeners = [];
	let teardowns = [];
	let pauseState = null;
	const popStateHandler = ({ state }) => {
		const to = createCurrentLocation(base, location);
		const from = currentLocation.value;
		const fromState = historyState.value;
		let delta = 0;
		if (state) {
			currentLocation.value = to;
			historyState.value = state;
			if (pauseState && pauseState === from) {
				pauseState = null;
				return;
			}
			delta = fromState ? state.position - fromState.position : 0;
		} else replace(to);
		listeners.forEach((listener) => {
			listener(currentLocation.value, from, {
				delta,
				type: NavigationType.pop,
				direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
			});
		});
	};
	function pauseListeners() {
		pauseState = currentLocation.value;
	}
	function listen(callback) {
		listeners.push(callback);
		const teardown = () => {
			const index = listeners.indexOf(callback);
			if (index > -1) listeners.splice(index, 1);
		};
		teardowns.push(teardown);
		return teardown;
	}
	function beforeUnloadListener() {
		if (document.visibilityState === "hidden") {
			const { history: history$1 } = window;
			if (!history$1.state) return;
			history$1.replaceState(assign({}, history$1.state, { scroll: computeScrollPosition() }), "");
		}
	}
	function destroy() {
		for (const teardown of teardowns) teardown();
		teardowns = [];
		window.removeEventListener("popstate", popStateHandler);
		window.removeEventListener("pagehide", beforeUnloadListener);
		document.removeEventListener("visibilitychange", beforeUnloadListener);
	}
	window.addEventListener("popstate", popStateHandler);
	window.addEventListener("pagehide", beforeUnloadListener);
	document.addEventListener("visibilitychange", beforeUnloadListener);
	return {
		pauseListeners,
		listen,
		destroy
	};
}
/**
* Creates a state object
*/
function buildState(back, current, forward, replaced = false, computeScroll = false) {
	return {
		back,
		current,
		forward,
		replaced,
		position: window.history.length,
		scroll: computeScroll ? computeScrollPosition() : null
	};
}
function useHistoryStateNavigation(base) {
	const { history: history$1, location: location$1 } = window;
	const currentLocation = { value: createCurrentLocation(base, location$1) };
	const historyState = { value: history$1.state };
	if (!historyState.value) changeLocation(currentLocation.value, {
		back: null,
		current: currentLocation.value,
		forward: null,
		position: history$1.length - 1,
		replaced: true,
		scroll: null
	}, true);
	function changeLocation(to, state, replace$1) {
		/**
		* if a base tag is provided, and we are on a normal domain, we have to
		* respect the provided `base` attribute because pushState() will use it and
		* potentially erase anything before the `#` like at
		* https://github.com/vuejs/router/issues/685 where a base of
		* `/folder/#` but a base of `/` would erase the `/folder/` section. If
		* there is no host, the `<base>` tag makes no sense and if there isn't a
		* base tag we can just use everything after the `#`.
		*/
		const hashIndex = base.indexOf("#");
		const url = hashIndex > -1 ? (location$1.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
		try {
			history$1[replace$1 ? "replaceState" : "pushState"](state, "", url);
			historyState.value = state;
		} catch (err) {
			console.error(err);
			location$1[replace$1 ? "replace" : "assign"](url);
		}
	}
	function replace(to, data) {
		changeLocation(to, assign({}, history$1.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position }), true);
		currentLocation.value = to;
	}
	function push(to, data) {
		const currentState = assign({}, historyState.value, history$1.state, {
			forward: to,
			scroll: computeScrollPosition()
		});
		changeLocation(currentState.current, currentState, true);
		changeLocation(to, assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data), false);
		currentLocation.value = to;
	}
	return {
		location: currentLocation,
		state: historyState,
		push,
		replace
	};
}
/**
* Creates an HTML5 history. Most common history for single page applications.
*
* @param base -
*/
function createWebHistory(base) {
	base = normalizeBase(base);
	const historyNavigation = useHistoryStateNavigation(base);
	const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
	function go(delta, triggerListeners = true) {
		if (!triggerListeners) historyListeners.pauseListeners();
		history.go(delta);
	}
	const routerHistory = assign({
		location: "",
		base,
		go,
		createHref: createHref.bind(null, base)
	}, historyNavigation, historyListeners);
	Object.defineProperty(routerHistory, "location", {
		enumerable: true,
		get: () => historyNavigation.location.value
	});
	Object.defineProperty(routerHistory, "state", {
		enumerable: true,
		get: () => historyNavigation.state.value
	});
	return routerHistory;
}
/**
* Creates a hash history. Useful for web applications with no host (e.g. `file://`) or when configuring a server to
* handle any URL is not possible.
*
* @param base - optional base to provide. Defaults to `location.pathname + location.search` If there is a `<base>` tag
* in the `head`, its value will be ignored in favor of this parameter **but note it affects all the history.pushState()
* calls**, meaning that if you use a `<base>` tag, it's `href` value **has to match this parameter** (ignoring anything
* after the `#`).
*
* @example
* ```js
* // at https://example.com/folder
* createWebHashHistory() // gives a url of `https://example.com/folder#`
* createWebHashHistory('/folder/') // gives a url of `https://example.com/folder/#`
* // if the `#` is provided in the base, it won't be added by `createWebHashHistory`
* createWebHashHistory('/folder/#/app/') // gives a url of `https://example.com/folder/#/app/`
* // you should avoid doing this because it changes the original url and breaks copying urls
* createWebHashHistory('/other-folder/') // gives a url of `https://example.com/other-folder/#`
*
* // at file:///usr/etc/folder/index.html
* // for locations with no `host`, the base is ignored
* createWebHashHistory('/iAmIgnored') // gives a url of `file:///usr/etc/folder/index.html#`
* ```
*/
function createWebHashHistory(base) {
	base = location.host ? base || location.pathname + location.search : "";
	if (!base.includes("#")) base += "#";
	return createWebHistory(base);
}
var TokenType = /* @__PURE__ */ function(TokenType$1) {
	TokenType$1[TokenType$1["Static"] = 0] = "Static";
	TokenType$1[TokenType$1["Param"] = 1] = "Param";
	TokenType$1[TokenType$1["Group"] = 2] = "Group";
	return TokenType$1;
}({});
var TokenizerState = /* @__PURE__ */ function(TokenizerState$1) {
	TokenizerState$1[TokenizerState$1["Static"] = 0] = "Static";
	TokenizerState$1[TokenizerState$1["Param"] = 1] = "Param";
	TokenizerState$1[TokenizerState$1["ParamRegExp"] = 2] = "ParamRegExp";
	TokenizerState$1[TokenizerState$1["ParamRegExpEnd"] = 3] = "ParamRegExpEnd";
	TokenizerState$1[TokenizerState$1["EscapeNext"] = 4] = "EscapeNext";
	return TokenizerState$1;
}(TokenizerState || {});
var ROOT_TOKEN = {
	type: TokenType.Static,
	value: ""
};
var VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
	if (!path) return [[]];
	if (path === "/") return [[ROOT_TOKEN]];
	if (!path.startsWith("/")) throw new Error(`Invalid path "${path}"`);
	function crash(message) {
		throw new Error(`ERR (${state})/"${buffer}": ${message}`);
	}
	let state = TokenizerState.Static;
	let previousState = state;
	const tokens = [];
	let segment;
	function finalizeSegment() {
		if (segment) tokens.push(segment);
		segment = [];
	}
	let i = 0;
	let char;
	let buffer = "";
	let customRe = "";
	function consumeBuffer() {
		if (!buffer) return;
		if (state === TokenizerState.Static) segment.push({
			type: TokenType.Static,
			value: buffer
		});
		else if (state === TokenizerState.Param || state === TokenizerState.ParamRegExp || state === TokenizerState.ParamRegExpEnd) {
			if (segment.length > 1 && (char === "*" || char === "+")) crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
			segment.push({
				type: TokenType.Param,
				value: buffer,
				regexp: customRe,
				repeatable: char === "*" || char === "+",
				optional: char === "*" || char === "?"
			});
		} else crash("Invalid state to consume buffer");
		buffer = "";
	}
	function addCharToBuffer() {
		buffer += char;
	}
	while (i < path.length) {
		char = path[i++];
		if (char === "\\" && state !== TokenizerState.ParamRegExp) {
			previousState = state;
			state = TokenizerState.EscapeNext;
			continue;
		}
		switch (state) {
			case TokenizerState.Static:
				if (char === "/") {
					if (buffer) consumeBuffer();
					finalizeSegment();
				} else if (char === ":") {
					consumeBuffer();
					state = TokenizerState.Param;
				} else addCharToBuffer();
				break;
			case TokenizerState.EscapeNext:
				addCharToBuffer();
				state = previousState;
				break;
			case TokenizerState.Param:
				if (char === "(") state = TokenizerState.ParamRegExp;
				else if (VALID_PARAM_RE.test(char)) addCharToBuffer();
				else {
					consumeBuffer();
					state = TokenizerState.Static;
					if (char !== "*" && char !== "?" && char !== "+") i--;
				}
				break;
			case TokenizerState.ParamRegExp:
				if (char === ")") if (customRe[customRe.length - 1] == "\\") customRe = customRe.slice(0, -1) + char;
				else state = TokenizerState.ParamRegExpEnd;
				else customRe += char;
				break;
			case TokenizerState.ParamRegExpEnd:
				consumeBuffer();
				state = TokenizerState.Static;
				if (char !== "*" && char !== "?" && char !== "+") i--;
				customRe = "";
				break;
			default:
				crash("Unknown state");
				break;
		}
	}
	if (state === TokenizerState.ParamRegExp) crash(`Unfinished custom RegExp for param "${buffer}"`);
	consumeBuffer();
	finalizeSegment();
	return tokens;
}
var BASE_PARAM_PATTERN = "[^/]+?";
var BASE_PATH_PARSER_OPTIONS = {
	sensitive: false,
	strict: false,
	start: true,
	end: true
};
var PathScore = /* @__PURE__ */ function(PathScore$1) {
	PathScore$1[PathScore$1["_multiplier"] = 10] = "_multiplier";
	PathScore$1[PathScore$1["Root"] = 90] = "Root";
	PathScore$1[PathScore$1["Segment"] = 40] = "Segment";
	PathScore$1[PathScore$1["SubSegment"] = 30] = "SubSegment";
	PathScore$1[PathScore$1["Static"] = 40] = "Static";
	PathScore$1[PathScore$1["Dynamic"] = 20] = "Dynamic";
	PathScore$1[PathScore$1["BonusCustomRegExp"] = 10] = "BonusCustomRegExp";
	PathScore$1[PathScore$1["BonusWildcard"] = -50] = "BonusWildcard";
	PathScore$1[PathScore$1["BonusRepeatable"] = -20] = "BonusRepeatable";
	PathScore$1[PathScore$1["BonusOptional"] = -8] = "BonusOptional";
	PathScore$1[PathScore$1["BonusStrict"] = .7000000000000001] = "BonusStrict";
	PathScore$1[PathScore$1["BonusCaseSensitive"] = .25] = "BonusCaseSensitive";
	return PathScore$1;
}(PathScore || {});
var REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
/**
* Creates a path parser from an array of Segments (a segment is an array of Tokens)
*
* @param segments - array of segments returned by tokenizePath
* @param extraOptions - optional options for the regexp
* @returns a PathParser
*/
function tokensToParser(segments, extraOptions) {
	const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
	const score = [];
	let pattern = options.start ? "^" : "";
	const keys = [];
	for (const segment of segments) {
		const segmentScores = segment.length ? [] : [PathScore.Root];
		if (options.strict && !segment.length) pattern += "/";
		for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
			const token = segment[tokenIndex];
			let subSegmentScore = PathScore.Segment + (options.sensitive ? PathScore.BonusCaseSensitive : 0);
			if (token.type === TokenType.Static) {
				if (!tokenIndex) pattern += "/";
				pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
				subSegmentScore += PathScore.Static;
			} else if (token.type === TokenType.Param) {
				const { value, repeatable, optional, regexp } = token;
				keys.push({
					name: value,
					repeatable,
					optional
				});
				const re$1 = regexp ? regexp : BASE_PARAM_PATTERN;
				if (re$1 !== BASE_PARAM_PATTERN) {
					subSegmentScore += PathScore.BonusCustomRegExp;
					try {
						`${re$1}`;
					} catch (err) {
						throw new Error(`Invalid custom RegExp for param "${value}" (${re$1}): ` + err.message);
					}
				}
				let subPattern = repeatable ? `((?:${re$1})(?:/(?:${re$1}))*)` : `(${re$1})`;
				if (!tokenIndex) subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
				if (optional) subPattern += "?";
				pattern += subPattern;
				subSegmentScore += PathScore.Dynamic;
				if (optional) subSegmentScore += PathScore.BonusOptional;
				if (repeatable) subSegmentScore += PathScore.BonusRepeatable;
				if (re$1 === ".*") subSegmentScore += PathScore.BonusWildcard;
			}
			segmentScores.push(subSegmentScore);
		}
		score.push(segmentScores);
	}
	if (options.strict && options.end) {
		const i = score.length - 1;
		score[i][score[i].length - 1] += PathScore.BonusStrict;
	}
	if (!options.strict) pattern += "/?";
	if (options.end) pattern += "$";
	else if (options.strict && !pattern.endsWith("/")) pattern += "(?:/|$)";
	const re = new RegExp(pattern, options.sensitive ? "" : "i");
	function parse(path) {
		const match = path.match(re);
		const params = {};
		if (!match) return null;
		for (let i = 1; i < match.length; i++) {
			const value = match[i] || "";
			const key = keys[i - 1];
			params[key.name] = value && key.repeatable ? value.split("/") : value;
		}
		return params;
	}
	function stringify(params) {
		let path = "";
		let avoidDuplicatedSlash = false;
		for (const segment of segments) {
			if (!avoidDuplicatedSlash || !path.endsWith("/")) path += "/";
			avoidDuplicatedSlash = false;
			for (const token of segment) if (token.type === TokenType.Static) path += token.value;
			else if (token.type === TokenType.Param) {
				const { value, repeatable, optional } = token;
				const param = value in params ? params[value] : "";
				if (isArray(param) && !repeatable) throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
				const text = isArray(param) ? param.join("/") : param;
				if (!text) if (optional) {
					if (segment.length < 2) if (path.endsWith("/")) path = path.slice(0, -1);
					else avoidDuplicatedSlash = true;
				} else throw new Error(`Missing required param "${value}"`);
				path += text;
			}
		}
		return path || "/";
	}
	return {
		re,
		score,
		keys,
		parse,
		stringify
	};
}
/**
* Compares an array of numbers as used in PathParser.score and returns a
* number. This function can be used to `sort` an array
*
* @param a - first array of numbers
* @param b - second array of numbers
* @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
* should be sorted first
*/
function compareScoreArray(a, b) {
	let i = 0;
	while (i < a.length && i < b.length) {
		const diff = b[i] - a[i];
		if (diff) return diff;
		i++;
	}
	if (a.length < b.length) return a.length === 1 && a[0] === PathScore.Static + PathScore.Segment ? -1 : 1;
	else if (a.length > b.length) return b.length === 1 && b[0] === PathScore.Static + PathScore.Segment ? 1 : -1;
	return 0;
}
/**
* Compare function that can be used with `sort` to sort an array of PathParser
*
* @param a - first PathParser
* @param b - second PathParser
* @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
*/
function comparePathParserScore(a, b) {
	let i = 0;
	const aScore = a.score;
	const bScore = b.score;
	while (i < aScore.length && i < bScore.length) {
		const comp = compareScoreArray(aScore[i], bScore[i]);
		if (comp) return comp;
		i++;
	}
	if (Math.abs(bScore.length - aScore.length) === 1) {
		if (isLastScoreNegative(aScore)) return 1;
		if (isLastScoreNegative(bScore)) return -1;
	}
	return bScore.length - aScore.length;
}
/**
* This allows detecting splats at the end of a path: /home/:id(.*)*
*
* @param score - score to check
* @returns true if the last entry is negative
*/
function isLastScoreNegative(score) {
	const last = score[score.length - 1];
	return score.length > 0 && last[last.length - 1] < 0;
}
var PATH_PARSER_OPTIONS_DEFAULTS = {
	strict: false,
	end: true,
	sensitive: false
};
function createRouteRecordMatcher(record, parent, options) {
	const matcher = assign(tokensToParser(tokenizePath(record.path), options), {
		record,
		parent,
		children: [],
		alias: []
	});
	if (parent) {
		if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
	}
	return matcher;
}
/**
* Creates a Router Matcher.
*
* @internal
* @param routes - array of initial routes
* @param globalOptions - global route options
*/
function createRouterMatcher(routes, globalOptions) {
	const matchers = [];
	const matcherMap = /* @__PURE__ */ new Map();
	globalOptions = mergeOptions(PATH_PARSER_OPTIONS_DEFAULTS, globalOptions);
	function getRecordMatcher(name) {
		return matcherMap.get(name);
	}
	function addRoute(record, parent, originalRecord) {
		const isRootAdd = !originalRecord;
		const mainNormalizedRecord = normalizeRouteRecord(record);
		mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
		const options = mergeOptions(globalOptions, record);
		const normalizedRecords = [mainNormalizedRecord];
		if ("alias" in record) {
			const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
			for (const alias of aliases) normalizedRecords.push(normalizeRouteRecord(assign({}, mainNormalizedRecord, {
				components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
				path: alias,
				aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
			})));
		}
		let matcher;
		let originalMatcher;
		for (const normalizedRecord of normalizedRecords) {
			const { path } = normalizedRecord;
			if (parent && path[0] !== "/") {
				const parentPath = parent.record.path;
				const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
				normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
			}
			matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
			if (originalRecord) originalRecord.alias.push(matcher);
			else {
				originalMatcher = originalMatcher || matcher;
				if (originalMatcher !== matcher) originalMatcher.alias.push(matcher);
				if (isRootAdd && record.name && !isAliasRecord(matcher)) removeRoute(record.name);
			}
			if (isMatchable(matcher)) insertMatcher(matcher);
			if (mainNormalizedRecord.children) {
				const children = mainNormalizedRecord.children;
				for (let i = 0; i < children.length; i++) addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
			}
			originalRecord = originalRecord || matcher;
		}
		return originalMatcher ? () => {
			removeRoute(originalMatcher);
		} : noop;
	}
	function removeRoute(matcherRef) {
		if (isRouteName(matcherRef)) {
			const matcher = matcherMap.get(matcherRef);
			if (matcher) {
				matcherMap.delete(matcherRef);
				matchers.splice(matchers.indexOf(matcher), 1);
				matcher.children.forEach(removeRoute);
				matcher.alias.forEach(removeRoute);
			}
		} else {
			const index = matchers.indexOf(matcherRef);
			if (index > -1) {
				matchers.splice(index, 1);
				if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
				matcherRef.children.forEach(removeRoute);
				matcherRef.alias.forEach(removeRoute);
			}
		}
	}
	function getRoutes() {
		return matchers;
	}
	function insertMatcher(matcher) {
		const index = findInsertionIndex(matcher, matchers);
		matchers.splice(index, 0, matcher);
		if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
	}
	function resolve(location$1, currentLocation) {
		let matcher;
		let params = {};
		let path;
		let name;
		if ("name" in location$1 && location$1.name) {
			matcher = matcherMap.get(location$1.name);
			if (!matcher) throw createRouterError(ErrorTypes.MATCHER_NOT_FOUND, { location: location$1 });
			name = matcher.record.name;
			params = assign(pickParams(currentLocation.params, matcher.keys.filter((k) => !k.optional).concat(matcher.parent ? matcher.parent.keys.filter((k) => k.optional) : []).map((k) => k.name)), location$1.params && pickParams(location$1.params, matcher.keys.map((k) => k.name)));
			path = matcher.stringify(params);
		} else if (location$1.path != null) {
			path = location$1.path;
			matcher = matchers.find((m) => m.re.test(path));
			if (matcher) {
				params = matcher.parse(path);
				name = matcher.record.name;
			}
		} else {
			matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
			if (!matcher) throw createRouterError(ErrorTypes.MATCHER_NOT_FOUND, {
				location: location$1,
				currentLocation
			});
			name = matcher.record.name;
			params = assign({}, currentLocation.params, location$1.params);
			path = matcher.stringify(params);
		}
		const matched = [];
		let parentMatcher = matcher;
		while (parentMatcher) {
			matched.unshift(parentMatcher.record);
			parentMatcher = parentMatcher.parent;
		}
		return {
			name,
			path,
			params,
			matched,
			meta: mergeMetaFields(matched)
		};
	}
	routes.forEach((route) => addRoute(route));
	function clearRoutes() {
		matchers.length = 0;
		matcherMap.clear();
	}
	return {
		addRoute,
		resolve,
		removeRoute,
		clearRoutes,
		getRoutes,
		getRecordMatcher
	};
}
/**
* Picks an object param to contain only specified keys.
*
* @param params - params object to pick from
* @param keys - keys to pick
*/
function pickParams(params, keys) {
	const newParams = {};
	for (const key of keys) if (key in params) newParams[key] = params[key];
	return newParams;
}
/**
* Normalizes a RouteRecordRaw. Creates a copy
*
* @param record
* @returns the normalized version
*/
function normalizeRouteRecord(record) {
	const normalized = {
		path: record.path,
		redirect: record.redirect,
		name: record.name,
		meta: record.meta || {},
		aliasOf: record.aliasOf,
		beforeEnter: record.beforeEnter,
		props: normalizeRecordProps(record),
		children: record.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in record ? record.components || null : record.component && { default: record.component }
	};
	Object.defineProperty(normalized, "mods", { value: {} });
	return normalized;
}
/**
* Normalize the optional `props` in a record to always be an object similar to
* components. Also accept a boolean for components.
* @param record
*/
function normalizeRecordProps(record) {
	const propsObject = {};
	const props = record.props || false;
	if ("component" in record) propsObject.default = props;
	else for (const name in record.components) propsObject[name] = typeof props === "object" ? props[name] : props;
	return propsObject;
}
/**
* Checks if a record or any of its parent is an alias
* @param record
*/
function isAliasRecord(record) {
	while (record) {
		if (record.record.aliasOf) return true;
		record = record.parent;
	}
	return false;
}
/**
* Merge meta fields of an array of records
*
* @param matched - array of matched records
*/
function mergeMetaFields(matched) {
	return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
/**
* Performs a binary search to find the correct insertion index for a new matcher.
*
* Matchers are primarily sorted by their score. If scores are tied then we also consider parent/child relationships,
* with descendants coming before ancestors. If there's still a tie, new routes are inserted after existing routes.
*
* @param matcher - new matcher to be inserted
* @param matchers - existing matchers
*/
function findInsertionIndex(matcher, matchers) {
	let lower = 0;
	let upper = matchers.length;
	while (lower !== upper) {
		const mid = lower + upper >> 1;
		if (comparePathParserScore(matcher, matchers[mid]) < 0) upper = mid;
		else lower = mid + 1;
	}
	const insertionAncestor = getInsertionAncestor(matcher);
	if (insertionAncestor) upper = matchers.lastIndexOf(insertionAncestor, upper - 1);
	return upper;
}
function getInsertionAncestor(matcher) {
	let ancestor = matcher;
	while (ancestor = ancestor.parent) if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0) return ancestor;
}
/**
* Checks if a matcher can be reachable. This means if it's possible to reach it as a route. For example, routes without
* a component, or name, or redirect, are just used to group other routes.
* @param matcher
* @param matcher.record record of the matcher
* @returns
*/
function isMatchable({ record }) {
	return !!(record.name || record.components && Object.keys(record.components).length || record.redirect);
}
/**
* Returns the internal behavior of a {@link RouterLink} without the rendering part.
*
* @param props - a `to` location and an optional `replace` flag
*/
function useLink(props) {
	const router = inject(routerKey);
	const currentRoute = inject(routeLocationKey);
	const route = computed(() => {
		const to = unref(props.to);
		return router.resolve(to);
	});
	const activeRecordIndex = computed(() => {
		const { matched } = route.value;
		const { length } = matched;
		const routeMatched = matched[length - 1];
		const currentMatched = currentRoute.matched;
		if (!routeMatched || !currentMatched.length) return -1;
		const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
		if (index > -1) return index;
		const parentRecordPath = getOriginalPath(matched[length - 2]);
		return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
	});
	const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
	const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
	function navigate(e = {}) {
		if (guardEvent(e)) {
			const p = router[unref(props.replace) ? "replace" : "push"](unref(props.to)).catch(noop);
			if (props.viewTransition && typeof document !== "undefined" && "startViewTransition" in document) document.startViewTransition(() => p);
			return p;
		}
		return Promise.resolve();
	}
	/**
	* NOTE: update {@link _RouterLinkI}'s `$slots` type when updating this
	*/
	return {
		route,
		href: computed(() => route.value.href),
		isActive,
		isExactActive,
		navigate
	};
}
function preferSingleVNode(vnodes) {
	return vnodes.length === 1 ? vnodes[0] : vnodes;
}
/**
* Component to render a link that triggers a navigation on click.
*/
var RouterLink = /* @__PURE__ */ defineComponent({
	name: "RouterLink",
	compatConfig: { MODE: 3 },
	props: {
		to: {
			type: [String, Object],
			required: true
		},
		replace: Boolean,
		activeClass: String,
		exactActiveClass: String,
		custom: Boolean,
		ariaCurrentValue: {
			type: String,
			default: "page"
		},
		viewTransition: Boolean
	},
	useLink,
	setup(props, { slots }) {
		const link = /* @__PURE__ */ reactive(useLink(props));
		const { options } = inject(routerKey);
		const elClass = computed(() => ({
			[getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
			[getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
		}));
		return () => {
			const children = slots.default && preferSingleVNode(slots.default(link));
			return props.custom ? children : h("a", {
				"aria-current": link.isExactActive ? props.ariaCurrentValue : null,
				href: link.href,
				onClick: link.navigate,
				class: elClass.value
			}, children);
		};
	}
});
function guardEvent(e) {
	if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
	if (e.defaultPrevented) return;
	if (e.button !== void 0 && e.button !== 0) return;
	if (e.currentTarget && e.currentTarget.getAttribute) {
		const target = e.currentTarget.getAttribute("target");
		if (/\b_blank\b/i.test(target)) return;
	}
	if (e.preventDefault) e.preventDefault();
	return true;
}
function includesParams(outer, inner) {
	for (const key in inner) {
		const innerValue = inner[key];
		const outerValue = outer[key];
		if (typeof innerValue === "string") {
			if (innerValue !== outerValue) return false;
		} else if (!isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value.valueOf() !== outerValue[i].valueOf())) return false;
	}
	return true;
}
/**
* Get the original path value of a record by following its aliasOf
* @param record
*/
function getOriginalPath(record) {
	return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
/**
* Utility class to get the active class based on defaults.
* @param propClass
* @param globalClass
* @param defaultClass
*/
var getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
var RouterViewImpl = /* @__PURE__ */ defineComponent({
	name: "RouterView",
	inheritAttrs: false,
	props: {
		name: {
			type: String,
			default: "default"
		},
		route: Object
	},
	compatConfig: { MODE: 3 },
	setup(props, { attrs, slots }) {
		const injectedRoute = inject(routerViewLocationKey);
		const routeToDisplay = computed(() => props.route || injectedRoute.value);
		const injectedDepth = inject(viewDepthKey, 0);
		const depth = computed(() => {
			let initialDepth = unref(injectedDepth);
			const { matched } = routeToDisplay.value;
			let matchedRoute;
			while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) initialDepth++;
			return initialDepth;
		});
		const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
		provide(viewDepthKey, computed(() => depth.value + 1));
		provide(matchedRouteKey, matchedRouteRef);
		provide(routerViewLocationKey, routeToDisplay);
		const viewRef = /* @__PURE__ */ ref();
		watch(() => [
			viewRef.value,
			matchedRouteRef.value,
			props.name
		], ([instance, to, name], [oldInstance, from, oldName]) => {
			if (to) {
				to.instances[name] = instance;
				if (from && from !== to && instance && instance === oldInstance) {
					if (!to.leaveGuards.size) to.leaveGuards = from.leaveGuards;
					if (!to.updateGuards.size) to.updateGuards = from.updateGuards;
				}
			}
			if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
		}, { flush: "post" });
		return () => {
			const route = routeToDisplay.value;
			const currentName = props.name;
			const matchedRoute = matchedRouteRef.value;
			const ViewComponent = matchedRoute && matchedRoute.components[currentName];
			if (!ViewComponent) return normalizeSlot(slots.default, {
				Component: ViewComponent,
				route
			});
			const routePropsOption = matchedRoute.props[currentName];
			const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
			const onVnodeUnmounted = (vnode) => {
				if (vnode.component.isUnmounted) matchedRoute.instances[currentName] = null;
			};
			const component = h(ViewComponent, assign({}, routeProps, attrs, {
				onVnodeUnmounted,
				ref: viewRef
			}));
			return normalizeSlot(slots.default, {
				Component: component,
				route
			}) || component;
		};
	}
});
function normalizeSlot(slot, data) {
	if (!slot) return null;
	const slotContent = slot(data);
	return slotContent.length === 1 ? slotContent[0] : slotContent;
}
/**
* Component to display the current route the user is at.
*/
var RouterView = RouterViewImpl;
/**
* Creates a Router instance that can be used by a Vue app.
*
* @param options - {@link RouterOptions}
*/
function createRouter(options) {
	const matcher = createRouterMatcher(options.routes, options);
	const parseQuery$1 = options.parseQuery || parseQuery;
	const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
	const routerHistory = options.history;
	const beforeGuards = useCallbacks();
	const beforeResolveGuards = useCallbacks();
	const afterGuards = useCallbacks();
	const currentRoute = /* @__PURE__ */ shallowRef(START_LOCATION_NORMALIZED);
	let pendingLocation = START_LOCATION_NORMALIZED;
	if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) history.scrollRestoration = "manual";
	const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
	const encodeParams = applyToParams.bind(null, encodeParam);
	const decodeParams = applyToParams.bind(null, decode);
	function addRoute(parentOrRoute, route) {
		let parent;
		let record;
		if (isRouteName(parentOrRoute)) {
			parent = matcher.getRecordMatcher(parentOrRoute);
			record = route;
		} else record = parentOrRoute;
		return matcher.addRoute(record, parent);
	}
	function removeRoute(name) {
		const recordMatcher = matcher.getRecordMatcher(name);
		if (recordMatcher) matcher.removeRoute(recordMatcher);
	}
	function getRoutes() {
		return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
	}
	function hasRoute(name) {
		return !!matcher.getRecordMatcher(name);
	}
	function resolve(rawLocation, currentLocation) {
		currentLocation = assign({}, currentLocation || currentRoute.value);
		if (typeof rawLocation === "string") {
			const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
			const matchedRoute$1 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
			const href$1 = routerHistory.createHref(locationNormalized.fullPath);
			return assign(locationNormalized, matchedRoute$1, {
				params: decodeParams(matchedRoute$1.params),
				hash: decode(locationNormalized.hash),
				redirectedFrom: void 0,
				href: href$1
			});
		}
		let matcherLocation;
		if (rawLocation.path != null) matcherLocation = assign({}, rawLocation, { path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path });
		else {
			const targetParams = assign({}, rawLocation.params);
			for (const key in targetParams) if (targetParams[key] == null) delete targetParams[key];
			matcherLocation = assign({}, rawLocation, { params: encodeParams(targetParams) });
			currentLocation.params = encodeParams(currentLocation.params);
		}
		const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
		const hash = rawLocation.hash || "";
		matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
		const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
			hash: encodeHash(hash),
			path: matchedRoute.path
		}));
		const href = routerHistory.createHref(fullPath);
		return assign({
			fullPath,
			hash,
			query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
		}, matchedRoute, {
			redirectedFrom: void 0,
			href
		});
	}
	function locationAsObject(to) {
		return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
	}
	function checkCanceledNavigation(to, from) {
		if (pendingLocation !== to) return createRouterError(ErrorTypes.NAVIGATION_CANCELLED, {
			from,
			to
		});
	}
	function push(to) {
		return pushWithRedirect(to);
	}
	function replace(to) {
		return push(assign(locationAsObject(to), { replace: true }));
	}
	function handleRedirectRecord(to, from) {
		const lastMatched = to.matched[to.matched.length - 1];
		if (lastMatched && lastMatched.redirect) {
			const { redirect } = lastMatched;
			let newTargetLocation = typeof redirect === "function" ? redirect(to, from) : redirect;
			if (typeof newTargetLocation === "string") {
				newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
				newTargetLocation.params = {};
			}
			return assign({
				query: to.query,
				hash: to.hash,
				params: newTargetLocation.path != null ? {} : to.params
			}, newTargetLocation);
		}
	}
	function pushWithRedirect(to, redirectedFrom) {
		const targetLocation = pendingLocation = resolve(to);
		const from = currentRoute.value;
		const data = to.state;
		const force = to.force;
		const replace$1 = to.replace === true;
		const shouldRedirect = handleRedirectRecord(targetLocation, from);
		if (shouldRedirect) return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
			state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
			force,
			replace: replace$1
		}), redirectedFrom || targetLocation);
		const toLocation = targetLocation;
		toLocation.redirectedFrom = redirectedFrom;
		let failure;
		if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
			failure = createRouterError(ErrorTypes.NAVIGATION_DUPLICATED, {
				to: toLocation,
				from
			});
			handleScroll(from, from, true, false);
		}
		return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, ErrorTypes.NAVIGATION_GUARD_REDIRECT) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure$1) => {
			if (failure$1) {
				if (isNavigationFailure(failure$1, ErrorTypes.NAVIGATION_GUARD_REDIRECT)) return pushWithRedirect(assign({ replace: replace$1 }, locationAsObject(failure$1.to), {
					state: typeof failure$1.to === "object" ? assign({}, data, failure$1.to.state) : data,
					force
				}), redirectedFrom || toLocation);
			} else failure$1 = finalizeNavigation(toLocation, from, true, replace$1, data);
			triggerAfterEach(toLocation, from, failure$1);
			return failure$1;
		});
	}
	/**
	* Helper to reject and skip all navigation guards if a new navigation happened
	* @param to
	* @param from
	*/
	function checkCanceledNavigationAndReject(to, from) {
		const error = checkCanceledNavigation(to, from);
		return error ? Promise.reject(error) : Promise.resolve();
	}
	function runWithContext(fn) {
		const app = installedApps.values().next().value;
		return app && typeof app.runWithContext === "function" ? app.runWithContext(fn) : fn();
	}
	function navigate(to, from) {
		let guards;
		const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
		guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
		for (const record of leavingRecords) record.leaveGuards.forEach((guard) => {
			guards.push(guardToPromiseFn(guard, to, from));
		});
		const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
		guards.push(canceledNavigationCheck);
		return runGuardQueue(guards).then(() => {
			guards = [];
			for (const guard of beforeGuards.list()) guards.push(guardToPromiseFn(guard, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
			for (const record of updatingRecords) record.updateGuards.forEach((guard) => {
				guards.push(guardToPromiseFn(guard, to, from));
			});
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = [];
			for (const record of enteringRecords) if (record.beforeEnter) if (isArray(record.beforeEnter)) for (const beforeEnter of record.beforeEnter) guards.push(guardToPromiseFn(beforeEnter, to, from));
			else guards.push(guardToPromiseFn(record.beforeEnter, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			to.matched.forEach((record) => record.enterCallbacks = {});
			guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from, runWithContext);
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = [];
			for (const guard of beforeResolveGuards.list()) guards.push(guardToPromiseFn(guard, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).catch((err) => isNavigationFailure(err, ErrorTypes.NAVIGATION_CANCELLED) ? err : Promise.reject(err));
	}
	function triggerAfterEach(to, from, failure) {
		afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
	}
	/**
	* - Cleans up any navigation guards
	* - Changes the url if necessary
	* - Calls the scrollBehavior
	*/
	function finalizeNavigation(toLocation, from, isPush, replace$1, data) {
		const error = checkCanceledNavigation(toLocation, from);
		if (error) return error;
		const isFirstNavigation = from === START_LOCATION_NORMALIZED;
		const state = !isBrowser ? {} : history.state;
		if (isPush) if (replace$1 || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign({ scroll: isFirstNavigation && state && state.scroll }, data));
		else routerHistory.push(toLocation.fullPath, data);
		currentRoute.value = toLocation;
		handleScroll(toLocation, from, isPush, isFirstNavigation);
		markAsReady();
	}
	let removeHistoryListener;
	function setupListeners() {
		if (removeHistoryListener) return;
		removeHistoryListener = routerHistory.listen((to, _from, info) => {
			if (!router.listening) return;
			const toLocation = resolve(to);
			const shouldRedirect = handleRedirectRecord(toLocation, router.currentRoute.value);
			if (shouldRedirect) {
				pushWithRedirect(assign(shouldRedirect, {
					replace: true,
					force: true
				}), toLocation).catch(noop);
				return;
			}
			pendingLocation = toLocation;
			const from = currentRoute.value;
			if (isBrowser) saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
			navigate(toLocation, from).catch((error) => {
				if (isNavigationFailure(error, ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_CANCELLED)) return error;
				if (isNavigationFailure(error, ErrorTypes.NAVIGATION_GUARD_REDIRECT)) {
					pushWithRedirect(assign(locationAsObject(error.to), { force: true }), toLocation).then((failure) => {
						if (isNavigationFailure(failure, ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_DUPLICATED) && !info.delta && info.type === NavigationType.pop) routerHistory.go(-1, false);
					}).catch(noop);
					return Promise.reject();
				}
				if (info.delta) routerHistory.go(-info.delta, false);
				return triggerError(error, toLocation, from);
			}).then((failure) => {
				failure = failure || finalizeNavigation(toLocation, from, false);
				if (failure) {
					if (info.delta && !isNavigationFailure(failure, ErrorTypes.NAVIGATION_CANCELLED)) routerHistory.go(-info.delta, false);
					else if (info.type === NavigationType.pop && isNavigationFailure(failure, ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_DUPLICATED)) routerHistory.go(-1, false);
				}
				triggerAfterEach(toLocation, from, failure);
			}).catch(noop);
		});
	}
	let readyHandlers = useCallbacks();
	let errorListeners = useCallbacks();
	let ready;
	/**
	* Trigger errorListeners added via onError and throws the error as well
	*
	* @param error - error to throw
	* @param to - location we were navigating to when the error happened
	* @param from - location we were navigating from when the error happened
	* @returns the error as a rejected promise
	*/
	function triggerError(error, to, from) {
		markAsReady(error);
		const list = errorListeners.list();
		if (list.length) list.forEach((handler) => handler(error, to, from));
		else console.error(error);
		return Promise.reject(error);
	}
	function isReady() {
		if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
		return new Promise((resolve$1, reject) => {
			readyHandlers.add([resolve$1, reject]);
		});
	}
	function markAsReady(err) {
		if (!ready) {
			ready = !err;
			setupListeners();
			readyHandlers.list().forEach(([resolve$1, reject]) => err ? reject(err) : resolve$1());
			readyHandlers.reset();
		}
		return err;
	}
	function handleScroll(to, from, isPush, isFirstNavigation) {
		const { scrollBehavior } = options;
		if (!isBrowser || !scrollBehavior) return Promise.resolve();
		const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
		return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
	}
	const go = (delta) => routerHistory.go(delta);
	let started;
	const installedApps = /* @__PURE__ */ new Set();
	const router = {
		currentRoute,
		listening: true,
		addRoute,
		removeRoute,
		clearRoutes: matcher.clearRoutes,
		hasRoute,
		getRoutes,
		resolve,
		options,
		push,
		replace,
		go,
		back: () => go(-1),
		forward: () => go(1),
		beforeEach: beforeGuards.add,
		beforeResolve: beforeResolveGuards.add,
		afterEach: afterGuards.add,
		onError: errorListeners.add,
		isReady,
		install(app) {
			app.component("RouterLink", RouterLink);
			app.component("RouterView", RouterView);
			app.config.globalProperties.$router = router;
			Object.defineProperty(app.config.globalProperties, "$route", {
				enumerable: true,
				get: () => unref(currentRoute)
			});
			if (isBrowser && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
				started = true;
				push(routerHistory.location).catch((err) => {});
			}
			const reactiveRoute = {};
			for (const key in START_LOCATION_NORMALIZED) Object.defineProperty(reactiveRoute, key, {
				get: () => currentRoute.value[key],
				enumerable: true
			});
			app.provide(routerKey, router);
			app.provide(routeLocationKey, /* @__PURE__ */ shallowReactive(reactiveRoute));
			app.provide(routerViewLocationKey, currentRoute);
			const unmountApp = app.unmount;
			installedApps.add(app);
			app.unmount = function() {
				installedApps.delete(app);
				if (installedApps.size < 1) {
					pendingLocation = START_LOCATION_NORMALIZED;
					removeHistoryListener && removeHistoryListener();
					removeHistoryListener = null;
					currentRoute.value = START_LOCATION_NORMALIZED;
					started = false;
					ready = false;
				}
				unmountApp();
			};
		}
	};
	function runGuardQueue(guards) {
		return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
	}
	return router;
}
//#endregion
//#region src/views/DefaultView.vue?vue&type=script&lang.ts
var DefaultView_vue_vue_type_script_lang_default = /* @__PURE__ */ defineComponent({
	components: { FTextField: FTextField_default },
	data() {
		return { awesomeModel: "" };
	}
});
//#endregion
//#region src/views/DefaultView.vue
var _hoisted_1 = { class: "sandbox-root" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_f_text_field = resolveComponent("f-text-field");
	const _directive_validation = resolveDirective("validation");
	return openBlock(), createElementBlock("div", _hoisted_1, [
		_cache[2] || (_cache[2] = createBaseVNode("h1", null, "FKUI Sandbox", -1)),
		_cache[3] || (_cache[3] = createBaseVNode("p", null, " Ett internt paket som innehåller en avskalad Vue-applikation. Applikationen är konsument av övriga FKUI-paket och innehåller enbart ett tomt exempel. ", -1)),
		_cache[4] || (_cache[4] = createBaseVNode("p", null, [createBaseVNode("strong", null, "Ändra och labba gärna här men glöm inte återställa innan merge!")], -1)),
		_cache[5] || (_cache[5] = createBaseVNode("hr", null, null, -1)),
		withDirectives((openBlock(), createBlock(_component_f_text_field, {
			id: "awesome-field",
			modelValue: _ctx.awesomeModel,
			"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.awesomeModel = $event)
		}, {
			default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode(" Inmatningsfält. ", -1)])]),
			description: withCtx(({ descriptionClass }) => [createBaseVNode("span", { class: normalizeClass(descriptionClass) }, " Lorem ipsum dolor sit amet. ", 2)]),
			_: 1
		}, 8, ["modelValue"])), [[
			_directive_validation,
			{ maxLength: { length: 10 } },
			void 0,
			{
				required: true,
				maxLength: true
			}
		]])
	]);
}
var DefaultView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DefaultView_vue_vue_type_script_lang_default, [["render", _sfc_render]]);
//#endregion
//#region src/router.ts
var router = createRouter({
	history: createWebHashHistory(),
	routes: [{
		path: "/",
		name: "",
		component: DefaultView_default
	}]
});
//#endregion
//#region src/main.ts
config.production = false;
config.popupContainer = "#app";
var app = createApp(App_default);
app.use(router);
app.use(ValidationPlugin);
app.use(TestPlugin);
app.mount("#app");
setRunningContext(app);
//#endregion
