window.__ModuleLoader__.load({
	id: "@sophialin/dsh-research-team",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		let react_jsx_runtime = require("react/jsx-runtime");
		let _deepseek_ai_dsh_api_gateway_client = require("@deepseek-ai/dsh-api-gateway/client");
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/core.js
		var _a$1;
		function $constructor(name, initializer, params) {
			function init(inst, def) {
				if (!inst._zod) Object.defineProperty(inst, "_zod", {
					value: {
						def,
						constr: _,
						traits: /* @__PURE__ */ new Set()
					},
					enumerable: false
				});
				if (inst._zod.traits.has(name)) return;
				inst._zod.traits.add(name);
				initializer(inst, def);
				const proto = _.prototype;
				const keys = Object.keys(proto);
				for (let i = 0; i < keys.length; i++) {
					const k = keys[i];
					if (!(k in inst)) inst[k] = proto[k].bind(inst);
				}
			}
			const Parent = params?.Parent ?? Object;
			class Definition extends Parent {}
			Object.defineProperty(Definition, "name", { value: name });
			function _(def) {
				var _a;
				const inst = params?.Parent ? new Definition() : this;
				init(inst, def);
				(_a = inst._zod).deferred ?? (_a.deferred = []);
				for (const fn of inst._zod.deferred) fn();
				return inst;
			}
			Object.defineProperty(_, "init", { value: init });
			Object.defineProperty(_, Symbol.hasInstance, { value: (inst) => {
				if (params?.Parent && inst instanceof params.Parent) return true;
				return inst?._zod?.traits?.has(name);
			} });
			Object.defineProperty(_, "name", { value: name });
			return _;
		}
		var $ZodAsyncError = class extends Error {
			constructor() {
				super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
			}
		};
		var $ZodEncodeError = class extends Error {
			constructor(name) {
				super(`Encountered unidirectional transform during encode: ${name}`);
				this.name = "ZodEncodeError";
			}
		};
		(_a$1 = globalThis).__zod_globalConfig ?? (_a$1.__zod_globalConfig = {});
		const globalConfig = globalThis.__zod_globalConfig;
		function config(newConfig) {
			if (newConfig) Object.assign(globalConfig, newConfig);
			return globalConfig;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/util.js
		function getEnumValues(entries) {
			const numericValues = Object.values(entries).filter((v) => typeof v === "number");
			return Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
		}
		function jsonStringifyReplacer(_, value) {
			if (typeof value === "bigint") return value.toString();
			return value;
		}
		function cached(getter) {
			return { get value() {
				{
					const value = getter();
					Object.defineProperty(this, "value", { value });
					return value;
				}
				throw new Error("cached value already set");
			} };
		}
		function nullish(input) {
			return input === null || input === void 0;
		}
		function cleanRegex(source) {
			const start = source.startsWith("^") ? 1 : 0;
			const end = source.endsWith("$") ? source.length - 1 : source.length;
			return source.slice(start, end);
		}
		function floatSafeRemainder(val, step) {
			const ratio = val / step;
			const roundedRatio = Math.round(ratio);
			const tolerance = Number.EPSILON * Math.max(Math.abs(ratio), 1);
			if (Math.abs(ratio - roundedRatio) < tolerance) return 0;
			return ratio - roundedRatio;
		}
		const EVALUATING = /* @__PURE__*/ Symbol("evaluating");
		function defineLazy(object, key, getter) {
			let value = void 0;
			Object.defineProperty(object, key, {
				get() {
					if (value === EVALUATING) return;
					if (value === void 0) {
						value = EVALUATING;
						value = getter();
					}
					return value;
				},
				set(v) {
					Object.defineProperty(object, key, { value: v });
				},
				configurable: true
			});
		}
		function assignProp(target, prop, value) {
			Object.defineProperty(target, prop, {
				value,
				writable: true,
				enumerable: true,
				configurable: true
			});
		}
		function mergeDefs(...defs) {
			const mergedDescriptors = {};
			for (const def of defs) Object.assign(mergedDescriptors, Object.getOwnPropertyDescriptors(def));
			return Object.defineProperties({}, mergedDescriptors);
		}
		function esc(str) {
			return JSON.stringify(str);
		}
		function slugify(input) {
			return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
		}
		const captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {};
		function isObject(data) {
			return typeof data === "object" && data !== null && !Array.isArray(data);
		}
		const allowsEval = /* @__PURE__*/ cached(() => {
			if (globalConfig.jitless) return false;
			if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) return false;
			try {
				new Function("");
				return true;
			} catch (_) {
				return false;
			}
		});
		function isPlainObject(o) {
			if (isObject(o) === false) return false;
			const ctor = o.constructor;
			if (ctor === void 0) return true;
			if (typeof ctor !== "function") return true;
			const prot = ctor.prototype;
			if (isObject(prot) === false) return false;
			if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) return false;
			return true;
		}
		function shallowClone(o) {
			if (isPlainObject(o)) return { ...o };
			if (Array.isArray(o)) return [...o];
			if (o instanceof Map) return new Map(o);
			if (o instanceof Set) return new Set(o);
			return o;
		}
		const propertyKeyTypes = /* @__PURE__*/ new Set([
			"string",
			"number",
			"symbol"
		]);
		function escapeRegex(str) {
			return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		}
		function clone(inst, def, params) {
			const cl = new inst._zod.constr(def ?? inst._zod.def);
			if (!def || params?.parent) cl._zod.parent = inst;
			return cl;
		}
		function normalizeParams(_params) {
			const params = _params;
			if (!params) return {};
			if (typeof params === "string") return { error: () => params };
			if (params?.message !== void 0) {
				if (params?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
				params.error = params.message;
			}
			delete params.message;
			if (typeof params.error === "string") return {
				...params,
				error: () => params.error
			};
			return params;
		}
		function optionalKeys(shape) {
			return Object.keys(shape).filter((k) => {
				return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
			});
		}
		const NUMBER_FORMAT_RANGES = {
			safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
			int32: [-2147483648, 2147483647],
			uint32: [0, 4294967295],
			float32: [-34028234663852886e22, 34028234663852886e22],
			float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
		};
		function pick(schema, mask) {
			const currDef = schema._zod.def;
			const checks = currDef.checks;
			if (checks && checks.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
			return clone(schema, mergeDefs(schema._zod.def, {
				get shape() {
					const newShape = {};
					for (const key in mask) {
						if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
						if (!mask[key]) continue;
						newShape[key] = currDef.shape[key];
					}
					assignProp(this, "shape", newShape);
					return newShape;
				},
				checks: []
			}));
		}
		function omit(schema, mask) {
			const currDef = schema._zod.def;
			const checks = currDef.checks;
			if (checks && checks.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
			return clone(schema, mergeDefs(schema._zod.def, {
				get shape() {
					const newShape = { ...schema._zod.def.shape };
					for (const key in mask) {
						if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
						if (!mask[key]) continue;
						delete newShape[key];
					}
					assignProp(this, "shape", newShape);
					return newShape;
				},
				checks: []
			}));
		}
		function extend(schema, shape) {
			if (!isPlainObject(shape)) throw new Error("Invalid input to extend: expected a plain object");
			const checks = schema._zod.def.checks;
			if (checks && checks.length > 0) {
				const existingShape = schema._zod.def.shape;
				for (const key in shape) if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
			}
			return clone(schema, mergeDefs(schema._zod.def, { get shape() {
				const _shape = {
					...schema._zod.def.shape,
					...shape
				};
				assignProp(this, "shape", _shape);
				return _shape;
			} }));
		}
		function safeExtend(schema, shape) {
			if (!isPlainObject(shape)) throw new Error("Invalid input to safeExtend: expected a plain object");
			return clone(schema, mergeDefs(schema._zod.def, { get shape() {
				const _shape = {
					...schema._zod.def.shape,
					...shape
				};
				assignProp(this, "shape", _shape);
				return _shape;
			} }));
		}
		function merge(a, b) {
			if (a._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
			return clone(a, mergeDefs(a._zod.def, {
				get shape() {
					const _shape = {
						...a._zod.def.shape,
						...b._zod.def.shape
					};
					assignProp(this, "shape", _shape);
					return _shape;
				},
				get catchall() {
					return b._zod.def.catchall;
				},
				checks: b._zod.def.checks ?? []
			}));
		}
		function partial(Class, schema, mask) {
			const checks = schema._zod.def.checks;
			if (checks && checks.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
			return clone(schema, mergeDefs(schema._zod.def, {
				get shape() {
					const oldShape = schema._zod.def.shape;
					const shape = { ...oldShape };
					if (mask) for (const key in mask) {
						if (!(key in oldShape)) throw new Error(`Unrecognized key: "${key}"`);
						if (!mask[key]) continue;
						shape[key] = Class ? new Class({
							type: "optional",
							innerType: oldShape[key]
						}) : oldShape[key];
					}
					else for (const key in oldShape) shape[key] = Class ? new Class({
						type: "optional",
						innerType: oldShape[key]
					}) : oldShape[key];
					assignProp(this, "shape", shape);
					return shape;
				},
				checks: []
			}));
		}
		function required(Class, schema, mask) {
			return clone(schema, mergeDefs(schema._zod.def, { get shape() {
				const oldShape = schema._zod.def.shape;
				const shape = { ...oldShape };
				if (mask) for (const key in mask) {
					if (!(key in shape)) throw new Error(`Unrecognized key: "${key}"`);
					if (!mask[key]) continue;
					shape[key] = new Class({
						type: "nonoptional",
						innerType: oldShape[key]
					});
				}
				else for (const key in oldShape) shape[key] = new Class({
					type: "nonoptional",
					innerType: oldShape[key]
				});
				assignProp(this, "shape", shape);
				return shape;
			} }));
		}
		function aborted(x, startIndex = 0) {
			if (x.aborted === true) return true;
			for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue !== true) return true;
			return false;
		}
		function explicitlyAborted(x, startIndex = 0) {
			if (x.aborted === true) return true;
			for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue === false) return true;
			return false;
		}
		function prefixIssues(path, issues) {
			return issues.map((iss) => {
				var _a;
				(_a = iss).path ?? (_a.path = []);
				iss.path.unshift(path);
				return iss;
			});
		}
		function unwrapMessage(message) {
			return typeof message === "string" ? message : message?.message;
		}
		function finalizeIssue(iss, ctx, config) {
			const message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config.customError?.(iss)) ?? unwrapMessage(config.localeError?.(iss)) ?? "Invalid input";
			const { inst: _inst, continue: _continue, input: _input, ...rest } = iss;
			rest.path ?? (rest.path = []);
			rest.message = message;
			if (ctx?.reportInput) rest.input = _input;
			return rest;
		}
		function getLengthableOrigin(input) {
			if (Array.isArray(input)) return "array";
			if (typeof input === "string") return "string";
			return "unknown";
		}
		function issue(...args) {
			const [iss, input, inst] = args;
			if (typeof iss === "string") return {
				message: iss,
				code: "custom",
				input,
				inst
			};
			return { ...iss };
		}
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/errors.js
		const initializer$1 = (inst, def) => {
			inst.name = "$ZodError";
			Object.defineProperty(inst, "_zod", {
				value: inst._zod,
				enumerable: false
			});
			Object.defineProperty(inst, "issues", {
				value: def,
				enumerable: false
			});
			inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
			Object.defineProperty(inst, "toString", {
				value: () => inst.message,
				enumerable: false
			});
		};
		const $ZodError = $constructor("$ZodError", initializer$1);
		const $ZodRealError = $constructor("$ZodError", initializer$1, { Parent: Error });
		function flattenError(error, mapper = (issue) => issue.message) {
			const fieldErrors = {};
			const formErrors = [];
			for (const sub of error.issues) if (sub.path.length > 0) {
				fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
				fieldErrors[sub.path[0]].push(mapper(sub));
			} else formErrors.push(mapper(sub));
			return {
				formErrors,
				fieldErrors
			};
		}
		function formatError(error, mapper = (issue) => issue.message) {
			const fieldErrors = { _errors: [] };
			const processError = (error, path = []) => {
				for (const issue of error.issues) if (issue.code === "invalid_union" && issue.errors.length) issue.errors.map((issues) => processError({ issues }, [...path, ...issue.path]));
				else if (issue.code === "invalid_key") processError({ issues: issue.issues }, [...path, ...issue.path]);
				else if (issue.code === "invalid_element") processError({ issues: issue.issues }, [...path, ...issue.path]);
				else {
					const fullpath = [...path, ...issue.path];
					if (fullpath.length === 0) fieldErrors._errors.push(mapper(issue));
					else {
						let curr = fieldErrors;
						let i = 0;
						while (i < fullpath.length) {
							const el = fullpath[i];
							if (!(i === fullpath.length - 1)) curr[el] = curr[el] || { _errors: [] };
							else {
								curr[el] = curr[el] || { _errors: [] };
								curr[el]._errors.push(mapper(issue));
							}
							curr = curr[el];
							i++;
						}
					}
				}
			};
			processError(error);
			return fieldErrors;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/parse.js
		const _parse = (_Err) => (schema, value, _ctx, _params) => {
			const ctx = _ctx ? {
				..._ctx,
				async: false
			} : { async: false };
			const result = schema._zod.run({
				value,
				issues: []
			}, ctx);
			if (result instanceof Promise) throw new $ZodAsyncError();
			if (result.issues.length) {
				const e = new ((_params?.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
				captureStackTrace(e, _params?.callee);
				throw e;
			}
			return result.value;
		};
		const _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
			const ctx = _ctx ? {
				..._ctx,
				async: true
			} : { async: true };
			let result = schema._zod.run({
				value,
				issues: []
			}, ctx);
			if (result instanceof Promise) result = await result;
			if (result.issues.length) {
				const e = new ((params?.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
				captureStackTrace(e, params?.callee);
				throw e;
			}
			return result.value;
		};
		const _safeParse = (_Err) => (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				async: false
			} : { async: false };
			const result = schema._zod.run({
				value,
				issues: []
			}, ctx);
			if (result instanceof Promise) throw new $ZodAsyncError();
			return result.issues.length ? {
				success: false,
				error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
			} : {
				success: true,
				data: result.value
			};
		};
		const safeParse$1 = /* @__PURE__*/ _safeParse($ZodRealError);
		const _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				async: true
			} : { async: true };
			let result = schema._zod.run({
				value,
				issues: []
			}, ctx);
			if (result instanceof Promise) result = await result;
			return result.issues.length ? {
				success: false,
				error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
			} : {
				success: true,
				data: result.value
			};
		};
		const safeParseAsync$1 = /* @__PURE__*/ _safeParseAsync($ZodRealError);
		const _encode = (_Err) => (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				direction: "backward"
			} : { direction: "backward" };
			return _parse(_Err)(schema, value, ctx);
		};
		const _decode = (_Err) => (schema, value, _ctx) => {
			return _parse(_Err)(schema, value, _ctx);
		};
		const _encodeAsync = (_Err) => async (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				direction: "backward"
			} : { direction: "backward" };
			return _parseAsync(_Err)(schema, value, ctx);
		};
		const _decodeAsync = (_Err) => async (schema, value, _ctx) => {
			return _parseAsync(_Err)(schema, value, _ctx);
		};
		const _safeEncode = (_Err) => (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				direction: "backward"
			} : { direction: "backward" };
			return _safeParse(_Err)(schema, value, ctx);
		};
		const _safeDecode = (_Err) => (schema, value, _ctx) => {
			return _safeParse(_Err)(schema, value, _ctx);
		};
		const _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
			const ctx = _ctx ? {
				..._ctx,
				direction: "backward"
			} : { direction: "backward" };
			return _safeParseAsync(_Err)(schema, value, ctx);
		};
		const _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
			return _safeParseAsync(_Err)(schema, value, _ctx);
		};
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/regexes.js
		/**
		* @deprecated CUID v1 is deprecated by its authors due to information leakage
		* (timestamps embedded in the id). Use {@link cuid2} instead.
		* See https://github.com/paralleldrive/cuid.
		*/
		const cuid = /^[cC][0-9a-z]{6,}$/;
		const cuid2 = /^[0-9a-z]+$/;
		const ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
		const xid = /^[0-9a-vA-V]{20}$/;
		const ksuid = /^[A-Za-z0-9]{27}$/;
		const nanoid = /^[a-zA-Z0-9_-]{21}$/;
		/** ISO 8601-1 duration regex. Does not support the 8601-2 extensions like negative durations or fractional/negative components. */
		const duration$1 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
		/** A regex for any UUID-like identifier: 8-4-4-4-12 hex pattern */
		const guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
		/** Returns a regex for validating an RFC 9562/4122 UUID.
		*
		* @param version Optionally specify a version 1-8. If no version is specified, all versions are supported. */
		const uuid = (version) => {
			if (!version) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
			return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
		};
		/** Practical email validation */
		const email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
		const _emoji$1 = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
		function emoji() {
			return new RegExp(_emoji$1, "u");
		}
		const ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
		const ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
		const cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
		const cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
		const base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
		const base64url = /^[A-Za-z0-9_-]*$/;
		const httpProtocol = /^https?$/;
		const e164 = /^\+[1-9]\d{6,14}$/;
		const dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
		const date$1 = /*@__PURE__*/ new RegExp(`^${dateSource}$`);
		function timeSource(args) {
			const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
			return typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
		}
		function time$1(args) {
			return new RegExp(`^${timeSource(args)}$`);
		}
		function datetime$1(args) {
			const time = timeSource({ precision: args.precision });
			const opts = ["Z"];
			if (args.local) opts.push("");
			if (args.offset) opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
			const timeRegex = `${time}(?:${opts.join("|")})`;
			return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
		}
		const string$1 = (params) => {
			const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
			return new RegExp(`^${regex}$`);
		};
		const integer = /^-?\d+$/;
		const number$1 = /^-?\d+(?:\.\d+)?$/;
		const boolean$1 = /^(?:true|false)$/i;
		const _undefined$2 = /^undefined$/i;
		const lowercase = /^[^A-Z]*$/;
		const uppercase = /^[^a-z]*$/;
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/checks.js
		const $ZodCheck = /*@__PURE__*/ $constructor("$ZodCheck", (inst, def) => {
			var _a;
			inst._zod ?? (inst._zod = {});
			inst._zod.def = def;
			(_a = inst._zod).onattach ?? (_a.onattach = []);
		});
		const numericOriginMap = {
			number: "number",
			bigint: "bigint",
			object: "date"
		};
		const $ZodCheckLessThan = /*@__PURE__*/ $constructor("$ZodCheckLessThan", (inst, def) => {
			$ZodCheck.init(inst, def);
			const origin = numericOriginMap[typeof def.value];
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
				if (def.value < curr) if (def.inclusive) bag.maximum = def.value;
				else bag.exclusiveMaximum = def.value;
			});
			inst._zod.check = (payload) => {
				if (def.inclusive ? payload.value <= def.value : payload.value < def.value) return;
				payload.issues.push({
					origin,
					code: "too_big",
					maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
					input: payload.value,
					inclusive: def.inclusive,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckGreaterThan = /*@__PURE__*/ $constructor("$ZodCheckGreaterThan", (inst, def) => {
			$ZodCheck.init(inst, def);
			const origin = numericOriginMap[typeof def.value];
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
				if (def.value > curr) if (def.inclusive) bag.minimum = def.value;
				else bag.exclusiveMinimum = def.value;
			});
			inst._zod.check = (payload) => {
				if (def.inclusive ? payload.value >= def.value : payload.value > def.value) return;
				payload.issues.push({
					origin,
					code: "too_small",
					minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
					input: payload.value,
					inclusive: def.inclusive,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckMultipleOf = /*@__PURE__*/ $constructor("$ZodCheckMultipleOf", (inst, def) => {
			$ZodCheck.init(inst, def);
			inst._zod.onattach.push((inst) => {
				var _a;
				(_a = inst._zod.bag).multipleOf ?? (_a.multipleOf = def.value);
			});
			inst._zod.check = (payload) => {
				if (typeof payload.value !== typeof def.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
				if (typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0) return;
				payload.issues.push({
					origin: typeof payload.value,
					code: "not_multiple_of",
					divisor: def.value,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckNumberFormat = /*@__PURE__*/ $constructor("$ZodCheckNumberFormat", (inst, def) => {
			$ZodCheck.init(inst, def);
			def.format = def.format || "float64";
			const isInt = def.format?.includes("int");
			const origin = isInt ? "int" : "number";
			const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.format = def.format;
				bag.minimum = minimum;
				bag.maximum = maximum;
				if (isInt) bag.pattern = integer;
			});
			inst._zod.check = (payload) => {
				const input = payload.value;
				if (isInt) {
					if (!Number.isInteger(input)) {
						payload.issues.push({
							expected: origin,
							format: def.format,
							code: "invalid_type",
							continue: false,
							input,
							inst
						});
						return;
					}
					if (!Number.isSafeInteger(input)) {
						if (input > 0) payload.issues.push({
							input,
							code: "too_big",
							maximum: Number.MAX_SAFE_INTEGER,
							note: "Integers must be within the safe integer range.",
							inst,
							origin,
							inclusive: true,
							continue: !def.abort
						});
						else payload.issues.push({
							input,
							code: "too_small",
							minimum: Number.MIN_SAFE_INTEGER,
							note: "Integers must be within the safe integer range.",
							inst,
							origin,
							inclusive: true,
							continue: !def.abort
						});
						return;
					}
				}
				if (input < minimum) payload.issues.push({
					origin: "number",
					input,
					code: "too_small",
					minimum,
					inclusive: true,
					inst,
					continue: !def.abort
				});
				if (input > maximum) payload.issues.push({
					origin: "number",
					input,
					code: "too_big",
					maximum,
					inclusive: true,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckMaxLength = /*@__PURE__*/ $constructor("$ZodCheckMaxLength", (inst, def) => {
			var _a;
			$ZodCheck.init(inst, def);
			(_a = inst._zod.def).when ?? (_a.when = (payload) => {
				const val = payload.value;
				return !nullish(val) && val.length !== void 0;
			});
			inst._zod.onattach.push((inst) => {
				const curr = inst._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
				if (def.maximum < curr) inst._zod.bag.maximum = def.maximum;
			});
			inst._zod.check = (payload) => {
				const input = payload.value;
				if (input.length <= def.maximum) return;
				const origin = getLengthableOrigin(input);
				payload.issues.push({
					origin,
					code: "too_big",
					maximum: def.maximum,
					inclusive: true,
					input,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckMinLength = /*@__PURE__*/ $constructor("$ZodCheckMinLength", (inst, def) => {
			var _a;
			$ZodCheck.init(inst, def);
			(_a = inst._zod.def).when ?? (_a.when = (payload) => {
				const val = payload.value;
				return !nullish(val) && val.length !== void 0;
			});
			inst._zod.onattach.push((inst) => {
				const curr = inst._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
				if (def.minimum > curr) inst._zod.bag.minimum = def.minimum;
			});
			inst._zod.check = (payload) => {
				const input = payload.value;
				if (input.length >= def.minimum) return;
				const origin = getLengthableOrigin(input);
				payload.issues.push({
					origin,
					code: "too_small",
					minimum: def.minimum,
					inclusive: true,
					input,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckLengthEquals = /*@__PURE__*/ $constructor("$ZodCheckLengthEquals", (inst, def) => {
			var _a;
			$ZodCheck.init(inst, def);
			(_a = inst._zod.def).when ?? (_a.when = (payload) => {
				const val = payload.value;
				return !nullish(val) && val.length !== void 0;
			});
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.minimum = def.length;
				bag.maximum = def.length;
				bag.length = def.length;
			});
			inst._zod.check = (payload) => {
				const input = payload.value;
				const length = input.length;
				if (length === def.length) return;
				const origin = getLengthableOrigin(input);
				const tooBig = length > def.length;
				payload.issues.push({
					origin,
					...tooBig ? {
						code: "too_big",
						maximum: def.length
					} : {
						code: "too_small",
						minimum: def.length
					},
					inclusive: true,
					exact: true,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckStringFormat = /*@__PURE__*/ $constructor("$ZodCheckStringFormat", (inst, def) => {
			var _a, _b;
			$ZodCheck.init(inst, def);
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.format = def.format;
				if (def.pattern) {
					bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
					bag.patterns.add(def.pattern);
				}
			});
			if (def.pattern) (_a = inst._zod).check ?? (_a.check = (payload) => {
				def.pattern.lastIndex = 0;
				if (def.pattern.test(payload.value)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: def.format,
					input: payload.value,
					...def.pattern ? { pattern: def.pattern.toString() } : {},
					inst,
					continue: !def.abort
				});
			});
			else (_b = inst._zod).check ?? (_b.check = () => {});
		});
		const $ZodCheckRegex = /*@__PURE__*/ $constructor("$ZodCheckRegex", (inst, def) => {
			$ZodCheckStringFormat.init(inst, def);
			inst._zod.check = (payload) => {
				def.pattern.lastIndex = 0;
				if (def.pattern.test(payload.value)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: "regex",
					input: payload.value,
					pattern: def.pattern.toString(),
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckLowerCase = /*@__PURE__*/ $constructor("$ZodCheckLowerCase", (inst, def) => {
			def.pattern ?? (def.pattern = lowercase);
			$ZodCheckStringFormat.init(inst, def);
		});
		const $ZodCheckUpperCase = /*@__PURE__*/ $constructor("$ZodCheckUpperCase", (inst, def) => {
			def.pattern ?? (def.pattern = uppercase);
			$ZodCheckStringFormat.init(inst, def);
		});
		const $ZodCheckIncludes = /*@__PURE__*/ $constructor("$ZodCheckIncludes", (inst, def) => {
			$ZodCheck.init(inst, def);
			const escapedRegex = escapeRegex(def.includes);
			const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
			def.pattern = pattern;
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
				bag.patterns.add(pattern);
			});
			inst._zod.check = (payload) => {
				if (payload.value.includes(def.includes, def.position)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: "includes",
					includes: def.includes,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckStartsWith = /*@__PURE__*/ $constructor("$ZodCheckStartsWith", (inst, def) => {
			$ZodCheck.init(inst, def);
			const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
			def.pattern ?? (def.pattern = pattern);
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
				bag.patterns.add(pattern);
			});
			inst._zod.check = (payload) => {
				if (payload.value.startsWith(def.prefix)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: "starts_with",
					prefix: def.prefix,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckEndsWith = /*@__PURE__*/ $constructor("$ZodCheckEndsWith", (inst, def) => {
			$ZodCheck.init(inst, def);
			const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
			def.pattern ?? (def.pattern = pattern);
			inst._zod.onattach.push((inst) => {
				const bag = inst._zod.bag;
				bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
				bag.patterns.add(pattern);
			});
			inst._zod.check = (payload) => {
				if (payload.value.endsWith(def.suffix)) return;
				payload.issues.push({
					origin: "string",
					code: "invalid_format",
					format: "ends_with",
					suffix: def.suffix,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodCheckOverwrite = /*@__PURE__*/ $constructor("$ZodCheckOverwrite", (inst, def) => {
			$ZodCheck.init(inst, def);
			inst._zod.check = (payload) => {
				payload.value = def.tx(payload.value);
			};
		});
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/doc.js
		var Doc = class {
			constructor(args = []) {
				this.content = [];
				this.indent = 0;
				if (this) this.args = args;
			}
			indented(fn) {
				this.indent += 1;
				fn(this);
				this.indent -= 1;
			}
			write(arg) {
				if (typeof arg === "function") {
					arg(this, { execution: "sync" });
					arg(this, { execution: "async" });
					return;
				}
				const lines = arg.split("\n").filter((x) => x);
				const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
				const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
				for (const line of dedented) this.content.push(line);
			}
			compile() {
				const F = Function;
				const args = this?.args;
				const lines = [...(this?.content ?? [``]).map((x) => `  ${x}`)];
				return new F(...args, lines.join("\n"));
			}
		};
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/versions.js
		const version = {
			major: 4,
			minor: 4,
			patch: 3
		};
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/schemas.js
		const $ZodType = /*@__PURE__*/ $constructor("$ZodType", (inst, def) => {
			var _a;
			inst ?? (inst = {});
			inst._zod.def = def;
			inst._zod.bag = inst._zod.bag || {};
			inst._zod.version = version;
			const checks = [...inst._zod.def.checks ?? []];
			if (inst._zod.traits.has("$ZodCheck")) checks.unshift(inst);
			for (const ch of checks) for (const fn of ch._zod.onattach) fn(inst);
			if (checks.length === 0) {
				(_a = inst._zod).deferred ?? (_a.deferred = []);
				inst._zod.deferred?.push(() => {
					inst._zod.run = inst._zod.parse;
				});
			} else {
				const runChecks = (payload, checks, ctx) => {
					let isAborted = aborted(payload);
					let asyncResult;
					for (const ch of checks) {
						if (ch._zod.def.when) {
							if (explicitlyAborted(payload)) continue;
							if (!ch._zod.def.when(payload)) continue;
						} else if (isAborted) continue;
						const currLen = payload.issues.length;
						const _ = ch._zod.check(payload);
						if (_ instanceof Promise && ctx?.async === false) throw new $ZodAsyncError();
						if (asyncResult || _ instanceof Promise) asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
							await _;
							if (payload.issues.length === currLen) return;
							if (!isAborted) isAborted = aborted(payload, currLen);
						});
						else {
							if (payload.issues.length === currLen) continue;
							if (!isAborted) isAborted = aborted(payload, currLen);
						}
					}
					if (asyncResult) return asyncResult.then(() => {
						return payload;
					});
					return payload;
				};
				const handleCanaryResult = (canary, payload, ctx) => {
					if (aborted(canary)) {
						canary.aborted = true;
						return canary;
					}
					const checkResult = runChecks(payload, checks, ctx);
					if (checkResult instanceof Promise) {
						if (ctx.async === false) throw new $ZodAsyncError();
						return checkResult.then((checkResult) => inst._zod.parse(checkResult, ctx));
					}
					return inst._zod.parse(checkResult, ctx);
				};
				inst._zod.run = (payload, ctx) => {
					if (ctx.skipChecks) return inst._zod.parse(payload, ctx);
					if (ctx.direction === "backward") {
						const canary = inst._zod.parse({
							value: payload.value,
							issues: []
						}, {
							...ctx,
							skipChecks: true
						});
						if (canary instanceof Promise) return canary.then((canary) => {
							return handleCanaryResult(canary, payload, ctx);
						});
						return handleCanaryResult(canary, payload, ctx);
					}
					const result = inst._zod.parse(payload, ctx);
					if (result instanceof Promise) {
						if (ctx.async === false) throw new $ZodAsyncError();
						return result.then((result) => runChecks(result, checks, ctx));
					}
					return runChecks(result, checks, ctx);
				};
			}
			defineLazy(inst, "~standard", () => ({
				validate: (value) => {
					try {
						const r = safeParse$1(inst, value);
						return r.success ? { value: r.data } : { issues: r.error?.issues };
					} catch (_) {
						return safeParseAsync$1(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
					}
				},
				vendor: "zod",
				version: 1
			}));
		});
		const $ZodString = /*@__PURE__*/ $constructor("$ZodString", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string$1(inst._zod.bag);
			inst._zod.parse = (payload, _) => {
				if (def.coerce) try {
					payload.value = String(payload.value);
				} catch (_) {}
				if (typeof payload.value === "string") return payload;
				payload.issues.push({
					expected: "string",
					code: "invalid_type",
					input: payload.value,
					inst
				});
				return payload;
			};
		});
		const $ZodStringFormat = /*@__PURE__*/ $constructor("$ZodStringFormat", (inst, def) => {
			$ZodCheckStringFormat.init(inst, def);
			$ZodString.init(inst, def);
		});
		const $ZodGUID = /*@__PURE__*/ $constructor("$ZodGUID", (inst, def) => {
			def.pattern ?? (def.pattern = guid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodUUID = /*@__PURE__*/ $constructor("$ZodUUID", (inst, def) => {
			if (def.version) {
				const v = {
					v1: 1,
					v2: 2,
					v3: 3,
					v4: 4,
					v5: 5,
					v6: 6,
					v7: 7,
					v8: 8
				}[def.version];
				if (v === void 0) throw new Error(`Invalid UUID version: "${def.version}"`);
				def.pattern ?? (def.pattern = uuid(v));
			} else def.pattern ?? (def.pattern = uuid());
			$ZodStringFormat.init(inst, def);
		});
		const $ZodEmail = /*@__PURE__*/ $constructor("$ZodEmail", (inst, def) => {
			def.pattern ?? (def.pattern = email);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodURL = /*@__PURE__*/ $constructor("$ZodURL", (inst, def) => {
			$ZodStringFormat.init(inst, def);
			inst._zod.check = (payload) => {
				try {
					const trimmed = payload.value.trim();
					if (!def.normalize && def.protocol?.source === httpProtocol.source) {
						if (!/^https?:\/\//i.test(trimmed)) {
							payload.issues.push({
								code: "invalid_format",
								format: "url",
								note: "Invalid URL format",
								input: payload.value,
								inst,
								continue: !def.abort
							});
							return;
						}
					}
					const url = new URL(trimmed);
					if (def.hostname) {
						def.hostname.lastIndex = 0;
						if (!def.hostname.test(url.hostname)) payload.issues.push({
							code: "invalid_format",
							format: "url",
							note: "Invalid hostname",
							pattern: def.hostname.source,
							input: payload.value,
							inst,
							continue: !def.abort
						});
					}
					if (def.protocol) {
						def.protocol.lastIndex = 0;
						if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol)) payload.issues.push({
							code: "invalid_format",
							format: "url",
							note: "Invalid protocol",
							pattern: def.protocol.source,
							input: payload.value,
							inst,
							continue: !def.abort
						});
					}
					if (def.normalize) payload.value = url.href;
					else payload.value = trimmed;
					return;
				} catch (_) {
					payload.issues.push({
						code: "invalid_format",
						format: "url",
						input: payload.value,
						inst,
						continue: !def.abort
					});
				}
			};
		});
		const $ZodEmoji = /*@__PURE__*/ $constructor("$ZodEmoji", (inst, def) => {
			def.pattern ?? (def.pattern = emoji());
			$ZodStringFormat.init(inst, def);
		});
		const $ZodNanoID = /*@__PURE__*/ $constructor("$ZodNanoID", (inst, def) => {
			def.pattern ?? (def.pattern = nanoid);
			$ZodStringFormat.init(inst, def);
		});
		/**
		* @deprecated CUID v1 is deprecated by its authors due to information leakage
		* (timestamps embedded in the id). Use {@link $ZodCUID2} instead.
		* See https://github.com/paralleldrive/cuid.
		*/
		const $ZodCUID = /*@__PURE__*/ $constructor("$ZodCUID", (inst, def) => {
			def.pattern ?? (def.pattern = cuid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodCUID2 = /*@__PURE__*/ $constructor("$ZodCUID2", (inst, def) => {
			def.pattern ?? (def.pattern = cuid2);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodULID = /*@__PURE__*/ $constructor("$ZodULID", (inst, def) => {
			def.pattern ?? (def.pattern = ulid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodXID = /*@__PURE__*/ $constructor("$ZodXID", (inst, def) => {
			def.pattern ?? (def.pattern = xid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodKSUID = /*@__PURE__*/ $constructor("$ZodKSUID", (inst, def) => {
			def.pattern ?? (def.pattern = ksuid);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodISODateTime = /*@__PURE__*/ $constructor("$ZodISODateTime", (inst, def) => {
			def.pattern ?? (def.pattern = datetime$1(def));
			$ZodStringFormat.init(inst, def);
		});
		const $ZodISODate = /*@__PURE__*/ $constructor("$ZodISODate", (inst, def) => {
			def.pattern ?? (def.pattern = date$1);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodISOTime = /*@__PURE__*/ $constructor("$ZodISOTime", (inst, def) => {
			def.pattern ?? (def.pattern = time$1(def));
			$ZodStringFormat.init(inst, def);
		});
		const $ZodISODuration = /*@__PURE__*/ $constructor("$ZodISODuration", (inst, def) => {
			def.pattern ?? (def.pattern = duration$1);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodIPv4 = /*@__PURE__*/ $constructor("$ZodIPv4", (inst, def) => {
			def.pattern ?? (def.pattern = ipv4);
			$ZodStringFormat.init(inst, def);
			inst._zod.bag.format = `ipv4`;
		});
		const $ZodIPv6 = /*@__PURE__*/ $constructor("$ZodIPv6", (inst, def) => {
			def.pattern ?? (def.pattern = ipv6);
			$ZodStringFormat.init(inst, def);
			inst._zod.bag.format = `ipv6`;
			inst._zod.check = (payload) => {
				try {
					new URL(`http://[${payload.value}]`);
				} catch {
					payload.issues.push({
						code: "invalid_format",
						format: "ipv6",
						input: payload.value,
						inst,
						continue: !def.abort
					});
				}
			};
		});
		const $ZodCIDRv4 = /*@__PURE__*/ $constructor("$ZodCIDRv4", (inst, def) => {
			def.pattern ?? (def.pattern = cidrv4);
			$ZodStringFormat.init(inst, def);
		});
		const $ZodCIDRv6 = /*@__PURE__*/ $constructor("$ZodCIDRv6", (inst, def) => {
			def.pattern ?? (def.pattern = cidrv6);
			$ZodStringFormat.init(inst, def);
			inst._zod.check = (payload) => {
				const parts = payload.value.split("/");
				try {
					if (parts.length !== 2) throw new Error();
					const [address, prefix] = parts;
					if (!prefix) throw new Error();
					const prefixNum = Number(prefix);
					if (`${prefixNum}` !== prefix) throw new Error();
					if (prefixNum < 0 || prefixNum > 128) throw new Error();
					new URL(`http://[${address}]`);
				} catch {
					payload.issues.push({
						code: "invalid_format",
						format: "cidrv6",
						input: payload.value,
						inst,
						continue: !def.abort
					});
				}
			};
		});
		function isValidBase64(data) {
			if (data === "") return true;
			if (/\s/.test(data)) return false;
			if (data.length % 4 !== 0) return false;
			try {
				atob(data);
				return true;
			} catch {
				return false;
			}
		}
		const $ZodBase64 = /*@__PURE__*/ $constructor("$ZodBase64", (inst, def) => {
			def.pattern ?? (def.pattern = base64);
			$ZodStringFormat.init(inst, def);
			inst._zod.bag.contentEncoding = "base64";
			inst._zod.check = (payload) => {
				if (isValidBase64(payload.value)) return;
				payload.issues.push({
					code: "invalid_format",
					format: "base64",
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		function isValidBase64URL(data) {
			if (!base64url.test(data)) return false;
			const base64 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
			return isValidBase64(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="));
		}
		const $ZodBase64URL = /*@__PURE__*/ $constructor("$ZodBase64URL", (inst, def) => {
			def.pattern ?? (def.pattern = base64url);
			$ZodStringFormat.init(inst, def);
			inst._zod.bag.contentEncoding = "base64url";
			inst._zod.check = (payload) => {
				if (isValidBase64URL(payload.value)) return;
				payload.issues.push({
					code: "invalid_format",
					format: "base64url",
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodE164 = /*@__PURE__*/ $constructor("$ZodE164", (inst, def) => {
			def.pattern ?? (def.pattern = e164);
			$ZodStringFormat.init(inst, def);
		});
		function isValidJWT(token, algorithm = null) {
			try {
				const tokensParts = token.split(".");
				if (tokensParts.length !== 3) return false;
				const [header] = tokensParts;
				if (!header) return false;
				const parsedHeader = JSON.parse(atob(header));
				if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT") return false;
				if (!parsedHeader.alg) return false;
				if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm)) return false;
				return true;
			} catch {
				return false;
			}
		}
		const $ZodJWT = /*@__PURE__*/ $constructor("$ZodJWT", (inst, def) => {
			$ZodStringFormat.init(inst, def);
			inst._zod.check = (payload) => {
				if (isValidJWT(payload.value, def.alg)) return;
				payload.issues.push({
					code: "invalid_format",
					format: "jwt",
					input: payload.value,
					inst,
					continue: !def.abort
				});
			};
		});
		const $ZodNumber = /*@__PURE__*/ $constructor("$ZodNumber", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.pattern = inst._zod.bag.pattern ?? number$1;
			inst._zod.parse = (payload, _ctx) => {
				if (def.coerce) try {
					payload.value = Number(payload.value);
				} catch (_) {}
				const input = payload.value;
				if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) return payload;
				const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : void 0 : void 0;
				payload.issues.push({
					expected: "number",
					code: "invalid_type",
					input,
					inst,
					...received ? { received } : {}
				});
				return payload;
			};
		});
		const $ZodNumberFormat = /*@__PURE__*/ $constructor("$ZodNumberFormat", (inst, def) => {
			$ZodCheckNumberFormat.init(inst, def);
			$ZodNumber.init(inst, def);
		});
		const $ZodBoolean = /*@__PURE__*/ $constructor("$ZodBoolean", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.pattern = boolean$1;
			inst._zod.parse = (payload, _ctx) => {
				if (def.coerce) try {
					payload.value = Boolean(payload.value);
				} catch (_) {}
				const input = payload.value;
				if (typeof input === "boolean") return payload;
				payload.issues.push({
					expected: "boolean",
					code: "invalid_type",
					input,
					inst
				});
				return payload;
			};
		});
		const $ZodUndefined = /*@__PURE__*/ $constructor("$ZodUndefined", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.pattern = _undefined$2;
			inst._zod.values = new Set([void 0]);
			inst._zod.parse = (payload, _ctx) => {
				const input = payload.value;
				if (typeof input === "undefined") return payload;
				payload.issues.push({
					expected: "undefined",
					code: "invalid_type",
					input,
					inst
				});
				return payload;
			};
		});
		const $ZodUnknown = /*@__PURE__*/ $constructor("$ZodUnknown", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload) => payload;
		});
		const $ZodNever = /*@__PURE__*/ $constructor("$ZodNever", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, _ctx) => {
				payload.issues.push({
					expected: "never",
					code: "invalid_type",
					input: payload.value,
					inst
				});
				return payload;
			};
		});
		function handleArrayResult(result, final, index) {
			if (result.issues.length) final.issues.push(...prefixIssues(index, result.issues));
			final.value[index] = result.value;
		}
		const $ZodArray = /*@__PURE__*/ $constructor("$ZodArray", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, ctx) => {
				const input = payload.value;
				if (!Array.isArray(input)) {
					payload.issues.push({
						expected: "array",
						code: "invalid_type",
						input,
						inst
					});
					return payload;
				}
				payload.value = Array(input.length);
				const proms = [];
				for (let i = 0; i < input.length; i++) {
					const item = input[i];
					const result = def.element._zod.run({
						value: item,
						issues: []
					}, ctx);
					if (result instanceof Promise) proms.push(result.then((result) => handleArrayResult(result, payload, i)));
					else handleArrayResult(result, payload, i);
				}
				if (proms.length) return Promise.all(proms).then(() => payload);
				return payload;
			};
		});
		function handlePropertyResult(result, final, key, input, isOptionalIn, isOptionalOut) {
			const isPresent = key in input;
			if (result.issues.length) {
				if (isOptionalIn && isOptionalOut && !isPresent) return;
				final.issues.push(...prefixIssues(key, result.issues));
			}
			if (!isPresent && !isOptionalIn) {
				if (!result.issues.length) final.issues.push({
					code: "invalid_type",
					expected: "nonoptional",
					input: void 0,
					path: [key]
				});
				return;
			}
			if (result.value === void 0) {
				if (isPresent) final.value[key] = void 0;
			} else final.value[key] = result.value;
		}
		function normalizeDef(def) {
			const keys = Object.keys(def.shape);
			for (const k of keys) if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
			const okeys = optionalKeys(def.shape);
			return {
				...def,
				keys,
				keySet: new Set(keys),
				numKeys: keys.length,
				optionalKeys: new Set(okeys)
			};
		}
		function handleCatchall(proms, input, payload, ctx, def, inst) {
			const unrecognized = [];
			const keySet = def.keySet;
			const _catchall = def.catchall._zod;
			const t = _catchall.def.type;
			const isOptionalIn = _catchall.optin === "optional";
			const isOptionalOut = _catchall.optout === "optional";
			for (const key in input) {
				if (key === "__proto__") continue;
				if (keySet.has(key)) continue;
				if (t === "never") {
					unrecognized.push(key);
					continue;
				}
				const r = _catchall.run({
					value: input[key],
					issues: []
				}, ctx);
				if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut)));
				else handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
			}
			if (unrecognized.length) payload.issues.push({
				code: "unrecognized_keys",
				keys: unrecognized,
				input,
				inst
			});
			if (!proms.length) return payload;
			return Promise.all(proms).then(() => {
				return payload;
			});
		}
		const $ZodObject = /*@__PURE__*/ $constructor("$ZodObject", (inst, def) => {
			$ZodType.init(inst, def);
			if (!Object.getOwnPropertyDescriptor(def, "shape")?.get) {
				const sh = def.shape;
				Object.defineProperty(def, "shape", { get: () => {
					const newSh = { ...sh };
					Object.defineProperty(def, "shape", { value: newSh });
					return newSh;
				} });
			}
			const _normalized = cached(() => normalizeDef(def));
			defineLazy(inst._zod, "propValues", () => {
				const shape = def.shape;
				const propValues = {};
				for (const key in shape) {
					const field = shape[key]._zod;
					if (field.values) {
						propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
						for (const v of field.values) propValues[key].add(v);
					}
				}
				return propValues;
			});
			const isObject$1 = isObject;
			const catchall = def.catchall;
			let value;
			inst._zod.parse = (payload, ctx) => {
				value ?? (value = _normalized.value);
				const input = payload.value;
				if (!isObject$1(input)) {
					payload.issues.push({
						expected: "object",
						code: "invalid_type",
						input,
						inst
					});
					return payload;
				}
				payload.value = {};
				const proms = [];
				const shape = value.shape;
				for (const key of value.keys) {
					const el = shape[key];
					const isOptionalIn = el._zod.optin === "optional";
					const isOptionalOut = el._zod.optout === "optional";
					const r = el._zod.run({
						value: input[key],
						issues: []
					}, ctx);
					if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut)));
					else handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
				}
				if (!catchall) return proms.length ? Promise.all(proms).then(() => payload) : payload;
				return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
			};
		});
		const $ZodObjectJIT = /*@__PURE__*/ $constructor("$ZodObjectJIT", (inst, def) => {
			$ZodObject.init(inst, def);
			const superParse = inst._zod.parse;
			const _normalized = cached(() => normalizeDef(def));
			const generateFastpass = (shape) => {
				const doc = new Doc([
					"shape",
					"payload",
					"ctx"
				]);
				const normalized = _normalized.value;
				const parseStr = (key) => {
					const k = esc(key);
					return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
				};
				doc.write(`const input = payload.value;`);
				const ids = Object.create(null);
				let counter = 0;
				for (const key of normalized.keys) ids[key] = `key_${counter++}`;
				doc.write(`const newResult = {};`);
				for (const key of normalized.keys) {
					const id = ids[key];
					const k = esc(key);
					const schema = shape[key];
					const isOptionalIn = schema?._zod?.optin === "optional";
					const isOptionalOut = schema?._zod?.optout === "optional";
					doc.write(`const ${id} = ${parseStr(key)};`);
					if (isOptionalIn && isOptionalOut) doc.write(`
        if (${id}.issues.length) {
          if (${k} in input) {
            payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${k}, ...iss.path] : [${k}]
            })));
          }
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
					else if (!isOptionalIn) doc.write(`
        const ${id}_present = ${k} in input;
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
        }

        if (${id}_present) {
          if (${id}.value === undefined) {
            newResult[${k}] = undefined;
          } else {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
					else doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
				}
				doc.write(`payload.value = newResult;`);
				doc.write(`return payload;`);
				const fn = doc.compile();
				return (payload, ctx) => fn(shape, payload, ctx);
			};
			let fastpass;
			const isObject$2 = isObject;
			const jit = !globalConfig.jitless;
			const fastEnabled = jit && allowsEval.value;
			const catchall = def.catchall;
			let value;
			inst._zod.parse = (payload, ctx) => {
				value ?? (value = _normalized.value);
				const input = payload.value;
				if (!isObject$2(input)) {
					payload.issues.push({
						expected: "object",
						code: "invalid_type",
						input,
						inst
					});
					return payload;
				}
				if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
					if (!fastpass) fastpass = generateFastpass(def.shape);
					payload = fastpass(payload, ctx);
					if (!catchall) return payload;
					return handleCatchall([], input, payload, ctx, value, inst);
				}
				return superParse(payload, ctx);
			};
		});
		function handleUnionResults(results, final, inst, ctx) {
			for (const result of results) if (result.issues.length === 0) {
				final.value = result.value;
				return final;
			}
			const nonaborted = results.filter((r) => !aborted(r));
			if (nonaborted.length === 1) {
				final.value = nonaborted[0].value;
				return nonaborted[0];
			}
			final.issues.push({
				code: "invalid_union",
				input: final.value,
				inst,
				errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
			});
			return final;
		}
		const $ZodUnion = /*@__PURE__*/ $constructor("$ZodUnion", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
			defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
			defineLazy(inst._zod, "values", () => {
				if (def.options.every((o) => o._zod.values)) return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
			});
			defineLazy(inst._zod, "pattern", () => {
				if (def.options.every((o) => o._zod.pattern)) {
					const patterns = def.options.map((o) => o._zod.pattern);
					return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
				}
			});
			const first = def.options.length === 1 ? def.options[0]._zod.run : null;
			inst._zod.parse = (payload, ctx) => {
				if (first) return first(payload, ctx);
				let async = false;
				const results = [];
				for (const option of def.options) {
					const result = option._zod.run({
						value: payload.value,
						issues: []
					}, ctx);
					if (result instanceof Promise) {
						results.push(result);
						async = true;
					} else {
						if (result.issues.length === 0) return result;
						results.push(result);
					}
				}
				if (!async) return handleUnionResults(results, payload, inst, ctx);
				return Promise.all(results).then((results) => {
					return handleUnionResults(results, payload, inst, ctx);
				});
			};
		});
		const $ZodIntersection = /*@__PURE__*/ $constructor("$ZodIntersection", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, ctx) => {
				const input = payload.value;
				const left = def.left._zod.run({
					value: input,
					issues: []
				}, ctx);
				const right = def.right._zod.run({
					value: input,
					issues: []
				}, ctx);
				if (left instanceof Promise || right instanceof Promise) return Promise.all([left, right]).then(([left, right]) => {
					return handleIntersectionResults(payload, left, right);
				});
				return handleIntersectionResults(payload, left, right);
			};
		});
		function mergeValues(a, b) {
			if (a === b) return {
				valid: true,
				data: a
			};
			if (a instanceof Date && b instanceof Date && +a === +b) return {
				valid: true,
				data: a
			};
			if (isPlainObject(a) && isPlainObject(b)) {
				const bKeys = Object.keys(b);
				const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
				const newObj = {
					...a,
					...b
				};
				for (const key of sharedKeys) {
					const sharedValue = mergeValues(a[key], b[key]);
					if (!sharedValue.valid) return {
						valid: false,
						mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
					};
					newObj[key] = sharedValue.data;
				}
				return {
					valid: true,
					data: newObj
				};
			}
			if (Array.isArray(a) && Array.isArray(b)) {
				if (a.length !== b.length) return {
					valid: false,
					mergeErrorPath: []
				};
				const newArray = [];
				for (let index = 0; index < a.length; index++) {
					const itemA = a[index];
					const itemB = b[index];
					const sharedValue = mergeValues(itemA, itemB);
					if (!sharedValue.valid) return {
						valid: false,
						mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
					};
					newArray.push(sharedValue.data);
				}
				return {
					valid: true,
					data: newArray
				};
			}
			return {
				valid: false,
				mergeErrorPath: []
			};
		}
		function handleIntersectionResults(result, left, right) {
			const unrecKeys = /* @__PURE__ */ new Map();
			let unrecIssue;
			for (const iss of left.issues) if (iss.code === "unrecognized_keys") {
				unrecIssue ?? (unrecIssue = iss);
				for (const k of iss.keys) {
					if (!unrecKeys.has(k)) unrecKeys.set(k, {});
					unrecKeys.get(k).l = true;
				}
			} else result.issues.push(iss);
			for (const iss of right.issues) if (iss.code === "unrecognized_keys") for (const k of iss.keys) {
				if (!unrecKeys.has(k)) unrecKeys.set(k, {});
				unrecKeys.get(k).r = true;
			}
			else result.issues.push(iss);
			const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
			if (bothKeys.length && unrecIssue) result.issues.push({
				...unrecIssue,
				keys: bothKeys
			});
			if (aborted(result)) return result;
			const merged = mergeValues(left.value, right.value);
			if (!merged.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
			result.value = merged.data;
			return result;
		}
		const $ZodEnum = /*@__PURE__*/ $constructor("$ZodEnum", (inst, def) => {
			$ZodType.init(inst, def);
			const values = getEnumValues(def.entries);
			const valuesSet = new Set(values);
			inst._zod.values = valuesSet;
			inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
			inst._zod.parse = (payload, _ctx) => {
				const input = payload.value;
				if (valuesSet.has(input)) return payload;
				payload.issues.push({
					code: "invalid_value",
					values,
					input,
					inst
				});
				return payload;
			};
		});
		const $ZodLiteral = /*@__PURE__*/ $constructor("$ZodLiteral", (inst, def) => {
			$ZodType.init(inst, def);
			if (def.values.length === 0) throw new Error("Cannot create literal schema with no valid values");
			const values = new Set(def.values);
			inst._zod.values = values;
			inst._zod.pattern = new RegExp(`^(${def.values.map((o) => typeof o === "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$`);
			inst._zod.parse = (payload, _ctx) => {
				const input = payload.value;
				if (values.has(input)) return payload;
				payload.issues.push({
					code: "invalid_value",
					values: def.values,
					input,
					inst
				});
				return payload;
			};
		});
		const $ZodTransform = /*@__PURE__*/ $constructor("$ZodTransform", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
				const _out = def.transform(payload.value, payload);
				if (ctx.async) return (_out instanceof Promise ? _out : Promise.resolve(_out)).then((output) => {
					payload.value = output;
					payload.fallback = true;
					return payload;
				});
				if (_out instanceof Promise) throw new $ZodAsyncError();
				payload.value = _out;
				payload.fallback = true;
				return payload;
			};
		});
		function handleOptionalResult(result, input) {
			if (input === void 0 && (result.issues.length || result.fallback)) return {
				issues: [],
				value: void 0
			};
			return result;
		}
		const $ZodOptional = /*@__PURE__*/ $constructor("$ZodOptional", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			inst._zod.optout = "optional";
			defineLazy(inst._zod, "values", () => {
				return def.innerType._zod.values ? new Set([...def.innerType._zod.values, void 0]) : void 0;
			});
			defineLazy(inst._zod, "pattern", () => {
				const pattern = def.innerType._zod.pattern;
				return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
			});
			inst._zod.parse = (payload, ctx) => {
				if (def.innerType._zod.optin === "optional") {
					const input = payload.value;
					const result = def.innerType._zod.run(payload, ctx);
					if (result instanceof Promise) return result.then((r) => handleOptionalResult(r, input));
					return handleOptionalResult(result, input);
				}
				if (payload.value === void 0) return payload;
				return def.innerType._zod.run(payload, ctx);
			};
		});
		const $ZodExactOptional = /*@__PURE__*/ $constructor("$ZodExactOptional", (inst, def) => {
			$ZodOptional.init(inst, def);
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
			inst._zod.parse = (payload, ctx) => {
				return def.innerType._zod.run(payload, ctx);
			};
		});
		const $ZodNullable = /*@__PURE__*/ $constructor("$ZodNullable", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
			defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
			defineLazy(inst._zod, "pattern", () => {
				const pattern = def.innerType._zod.pattern;
				return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
			});
			defineLazy(inst._zod, "values", () => {
				return def.innerType._zod.values ? new Set([...def.innerType._zod.values, null]) : void 0;
			});
			inst._zod.parse = (payload, ctx) => {
				if (payload.value === null) return payload;
				return def.innerType._zod.run(payload, ctx);
			};
		});
		const $ZodDefault = /*@__PURE__*/ $constructor("$ZodDefault", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
				if (payload.value === void 0) {
					payload.value = def.defaultValue;
					/**
					* $ZodDefault returns the default value immediately in forward direction.
					* It doesn't pass the default value into the validator ("prefault"). There's no reason to pass the default value through validation. The validity of the default is enforced by TypeScript statically. Otherwise, it's the responsibility of the user to ensure the default is valid. In the case of pipes with divergent in/out types, you can specify the default on the `in` schema of your ZodPipe to set a "prefault" for the pipe.   */
					return payload;
				}
				const result = def.innerType._zod.run(payload, ctx);
				if (result instanceof Promise) return result.then((result) => handleDefaultResult(result, def));
				return handleDefaultResult(result, def);
			};
		});
		function handleDefaultResult(payload, def) {
			if (payload.value === void 0) payload.value = def.defaultValue;
			return payload;
		}
		const $ZodPrefault = /*@__PURE__*/ $constructor("$ZodPrefault", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
				if (payload.value === void 0) payload.value = def.defaultValue;
				return def.innerType._zod.run(payload, ctx);
			};
		});
		const $ZodNonOptional = /*@__PURE__*/ $constructor("$ZodNonOptional", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "values", () => {
				const v = def.innerType._zod.values;
				return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
			});
			inst._zod.parse = (payload, ctx) => {
				const result = def.innerType._zod.run(payload, ctx);
				if (result instanceof Promise) return result.then((result) => handleNonOptionalResult(result, inst));
				return handleNonOptionalResult(result, inst);
			};
		});
		function handleNonOptionalResult(payload, inst) {
			if (!payload.issues.length && payload.value === void 0) payload.issues.push({
				code: "invalid_type",
				expected: "nonoptional",
				input: payload.value,
				inst
			});
			return payload;
		}
		const $ZodCatch = /*@__PURE__*/ $constructor("$ZodCatch", (inst, def) => {
			$ZodType.init(inst, def);
			inst._zod.optin = "optional";
			defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
				const result = def.innerType._zod.run(payload, ctx);
				if (result instanceof Promise) return result.then((result) => {
					payload.value = result.value;
					if (result.issues.length) {
						payload.value = def.catchValue({
							...payload,
							error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
							input: payload.value
						});
						payload.issues = [];
						payload.fallback = true;
					}
					return payload;
				});
				payload.value = result.value;
				if (result.issues.length) {
					payload.value = def.catchValue({
						...payload,
						error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
						input: payload.value
					});
					payload.issues = [];
					payload.fallback = true;
				}
				return payload;
			};
		});
		const $ZodPipe = /*@__PURE__*/ $constructor("$ZodPipe", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "values", () => def.in._zod.values);
			defineLazy(inst._zod, "optin", () => def.in._zod.optin);
			defineLazy(inst._zod, "optout", () => def.out._zod.optout);
			defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") {
					const right = def.out._zod.run(payload, ctx);
					if (right instanceof Promise) return right.then((right) => handlePipeResult(right, def.in, ctx));
					return handlePipeResult(right, def.in, ctx);
				}
				const left = def.in._zod.run(payload, ctx);
				if (left instanceof Promise) return left.then((left) => handlePipeResult(left, def.out, ctx));
				return handlePipeResult(left, def.out, ctx);
			};
		});
		function handlePipeResult(left, next, ctx) {
			if (left.issues.length) {
				left.aborted = true;
				return left;
			}
			return next._zod.run({
				value: left.value,
				issues: left.issues,
				fallback: left.fallback
			}, ctx);
		}
		const $ZodReadonly = /*@__PURE__*/ $constructor("$ZodReadonly", (inst, def) => {
			$ZodType.init(inst, def);
			defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
			defineLazy(inst._zod, "values", () => def.innerType._zod.values);
			defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
			defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
			inst._zod.parse = (payload, ctx) => {
				if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
				const result = def.innerType._zod.run(payload, ctx);
				if (result instanceof Promise) return result.then(handleReadonlyResult);
				return handleReadonlyResult(result);
			};
		});
		function handleReadonlyResult(payload) {
			payload.value = Object.freeze(payload.value);
			return payload;
		}
		const $ZodCustom = /*@__PURE__*/ $constructor("$ZodCustom", (inst, def) => {
			$ZodCheck.init(inst, def);
			$ZodType.init(inst, def);
			inst._zod.parse = (payload, _) => {
				return payload;
			};
			inst._zod.check = (payload) => {
				const input = payload.value;
				const r = def.fn(input);
				if (r instanceof Promise) return r.then((r) => handleRefineResult(r, payload, input, inst));
				handleRefineResult(r, payload, input, inst);
			};
		});
		function handleRefineResult(result, payload, input, inst) {
			if (!result) {
				const _iss = {
					code: "custom",
					input,
					inst,
					path: [...inst._zod.def.path ?? []],
					continue: !inst._zod.def.abort
				};
				if (inst._zod.def.params) _iss.params = inst._zod.def.params;
				payload.issues.push(issue(_iss));
			}
		}
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/registries.js
		var _a;
		var $ZodRegistry = class {
			constructor() {
				this._map = /* @__PURE__ */ new WeakMap();
				this._idmap = /* @__PURE__ */ new Map();
			}
			add(schema, ..._meta) {
				const meta = _meta[0];
				this._map.set(schema, meta);
				if (meta && typeof meta === "object" && "id" in meta) this._idmap.set(meta.id, schema);
				return this;
			}
			clear() {
				this._map = /* @__PURE__ */ new WeakMap();
				this._idmap = /* @__PURE__ */ new Map();
				return this;
			}
			remove(schema) {
				const meta = this._map.get(schema);
				if (meta && typeof meta === "object" && "id" in meta) this._idmap.delete(meta.id);
				this._map.delete(schema);
				return this;
			}
			get(schema) {
				const p = schema._zod.parent;
				if (p) {
					const pm = { ...this.get(p) ?? {} };
					delete pm.id;
					const f = {
						...pm,
						...this._map.get(schema)
					};
					return Object.keys(f).length ? f : void 0;
				}
				return this._map.get(schema);
			}
			has(schema) {
				return this._map.has(schema);
			}
		};
		function registry() {
			return new $ZodRegistry();
		}
		(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
		const globalRegistry = globalThis.__zod_globalRegistry;
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/api.js
		// @__NO_SIDE_EFFECTS__
		function _string(Class, params) {
			return new Class({
				type: "string",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _email(Class, params) {
			return new Class({
				type: "string",
				format: "email",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _guid(Class, params) {
			return new Class({
				type: "string",
				format: "guid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uuid(Class, params) {
			return new Class({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uuidv4(Class, params) {
			return new Class({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: false,
				version: "v4",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uuidv6(Class, params) {
			return new Class({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: false,
				version: "v6",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uuidv7(Class, params) {
			return new Class({
				type: "string",
				format: "uuid",
				check: "string_format",
				abort: false,
				version: "v7",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _url(Class, params) {
			return new Class({
				type: "string",
				format: "url",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _emoji(Class, params) {
			return new Class({
				type: "string",
				format: "emoji",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _nanoid(Class, params) {
			return new Class({
				type: "string",
				format: "nanoid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		/**
		* @deprecated CUID v1 is deprecated by its authors due to information leakage
		* (timestamps embedded in the id). Use {@link _cuid2} instead.
		* See https://github.com/paralleldrive/cuid.
		*/
		// @__NO_SIDE_EFFECTS__
		function _cuid(Class, params) {
			return new Class({
				type: "string",
				format: "cuid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _cuid2(Class, params) {
			return new Class({
				type: "string",
				format: "cuid2",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _ulid(Class, params) {
			return new Class({
				type: "string",
				format: "ulid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _xid(Class, params) {
			return new Class({
				type: "string",
				format: "xid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _ksuid(Class, params) {
			return new Class({
				type: "string",
				format: "ksuid",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _ipv4(Class, params) {
			return new Class({
				type: "string",
				format: "ipv4",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _ipv6(Class, params) {
			return new Class({
				type: "string",
				format: "ipv6",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _cidrv4(Class, params) {
			return new Class({
				type: "string",
				format: "cidrv4",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _cidrv6(Class, params) {
			return new Class({
				type: "string",
				format: "cidrv6",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _base64(Class, params) {
			return new Class({
				type: "string",
				format: "base64",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _base64url(Class, params) {
			return new Class({
				type: "string",
				format: "base64url",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _e164(Class, params) {
			return new Class({
				type: "string",
				format: "e164",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _jwt(Class, params) {
			return new Class({
				type: "string",
				format: "jwt",
				check: "string_format",
				abort: false,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _isoDateTime(Class, params) {
			return new Class({
				type: "string",
				format: "datetime",
				check: "string_format",
				offset: false,
				local: false,
				precision: null,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _isoDate(Class, params) {
			return new Class({
				type: "string",
				format: "date",
				check: "string_format",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _isoTime(Class, params) {
			return new Class({
				type: "string",
				format: "time",
				check: "string_format",
				precision: null,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _isoDuration(Class, params) {
			return new Class({
				type: "string",
				format: "duration",
				check: "string_format",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _number(Class, params) {
			return new Class({
				type: "number",
				checks: [],
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _int(Class, params) {
			return new Class({
				type: "number",
				check: "number_format",
				abort: false,
				format: "safeint",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _boolean(Class, params) {
			return new Class({
				type: "boolean",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _undefined$1(Class, params) {
			return new Class({
				type: "undefined",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _unknown(Class) {
			return new Class({ type: "unknown" });
		}
		// @__NO_SIDE_EFFECTS__
		function _never(Class, params) {
			return new Class({
				type: "never",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _lt(value, params) {
			return new $ZodCheckLessThan({
				check: "less_than",
				...normalizeParams(params),
				value,
				inclusive: false
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _lte(value, params) {
			return new $ZodCheckLessThan({
				check: "less_than",
				...normalizeParams(params),
				value,
				inclusive: true
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _gt(value, params) {
			return new $ZodCheckGreaterThan({
				check: "greater_than",
				...normalizeParams(params),
				value,
				inclusive: false
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _gte(value, params) {
			return new $ZodCheckGreaterThan({
				check: "greater_than",
				...normalizeParams(params),
				value,
				inclusive: true
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _multipleOf(value, params) {
			return new $ZodCheckMultipleOf({
				check: "multiple_of",
				...normalizeParams(params),
				value
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _maxLength(maximum, params) {
			return new $ZodCheckMaxLength({
				check: "max_length",
				...normalizeParams(params),
				maximum
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _minLength(minimum, params) {
			return new $ZodCheckMinLength({
				check: "min_length",
				...normalizeParams(params),
				minimum
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _length(length, params) {
			return new $ZodCheckLengthEquals({
				check: "length_equals",
				...normalizeParams(params),
				length
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _regex(pattern, params) {
			return new $ZodCheckRegex({
				check: "string_format",
				format: "regex",
				...normalizeParams(params),
				pattern
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _lowercase(params) {
			return new $ZodCheckLowerCase({
				check: "string_format",
				format: "lowercase",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _uppercase(params) {
			return new $ZodCheckUpperCase({
				check: "string_format",
				format: "uppercase",
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _includes(includes, params) {
			return new $ZodCheckIncludes({
				check: "string_format",
				format: "includes",
				...normalizeParams(params),
				includes
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _startsWith(prefix, params) {
			return new $ZodCheckStartsWith({
				check: "string_format",
				format: "starts_with",
				...normalizeParams(params),
				prefix
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _endsWith(suffix, params) {
			return new $ZodCheckEndsWith({
				check: "string_format",
				format: "ends_with",
				...normalizeParams(params),
				suffix
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _overwrite(tx) {
			return new $ZodCheckOverwrite({
				check: "overwrite",
				tx
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _normalize(form) {
			return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
		}
		// @__NO_SIDE_EFFECTS__
		function _trim() {
			return /* @__PURE__ */ _overwrite((input) => input.trim());
		}
		// @__NO_SIDE_EFFECTS__
		function _toLowerCase() {
			return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
		}
		// @__NO_SIDE_EFFECTS__
		function _toUpperCase() {
			return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
		}
		// @__NO_SIDE_EFFECTS__
		function _slugify() {
			return /* @__PURE__ */ _overwrite((input) => slugify(input));
		}
		// @__NO_SIDE_EFFECTS__
		function _array(Class, element, params) {
			return new Class({
				type: "array",
				element,
				...normalizeParams(params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _refine(Class, fn, _params) {
			return new Class({
				type: "custom",
				check: "custom",
				fn,
				...normalizeParams(_params)
			});
		}
		// @__NO_SIDE_EFFECTS__
		function _superRefine(fn, params) {
			const ch = /* @__PURE__ */ _check((payload) => {
				payload.addIssue = (issue$2) => {
					if (typeof issue$2 === "string") payload.issues.push(issue(issue$2, payload.value, ch._zod.def));
					else {
						const _issue = issue$2;
						if (_issue.fatal) _issue.continue = false;
						_issue.code ?? (_issue.code = "custom");
						_issue.input ?? (_issue.input = payload.value);
						_issue.inst ?? (_issue.inst = ch);
						_issue.continue ?? (_issue.continue = !ch._zod.def.abort);
						payload.issues.push(issue(_issue));
					}
				};
				return fn(payload.value, payload);
			}, params);
			return ch;
		}
		// @__NO_SIDE_EFFECTS__
		function _check(fn, params) {
			const ch = new $ZodCheck({
				check: "custom",
				...normalizeParams(params)
			});
			ch._zod.check = fn;
			return ch;
		}
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/to-json-schema.js
		function initializeContext(params) {
			let target = params?.target ?? "draft-2020-12";
			if (target === "draft-4") target = "draft-04";
			if (target === "draft-7") target = "draft-07";
			return {
				processors: params.processors ?? {},
				metadataRegistry: params?.metadata ?? globalRegistry,
				target,
				unrepresentable: params?.unrepresentable ?? "throw",
				override: params?.override ?? (() => {}),
				io: params?.io ?? "output",
				counter: 0,
				seen: /* @__PURE__ */ new Map(),
				cycles: params?.cycles ?? "ref",
				reused: params?.reused ?? "inline",
				external: params?.external ?? void 0
			};
		}
		function process(schema, ctx, _params = {
			path: [],
			schemaPath: []
		}) {
			var _a;
			const def = schema._zod.def;
			const seen = ctx.seen.get(schema);
			if (seen) {
				seen.count++;
				if (_params.schemaPath.includes(schema)) seen.cycle = _params.path;
				return seen.schema;
			}
			const result = {
				schema: {},
				count: 1,
				cycle: void 0,
				path: _params.path
			};
			ctx.seen.set(schema, result);
			const overrideSchema = schema._zod.toJSONSchema?.();
			if (overrideSchema) result.schema = overrideSchema;
			else {
				const params = {
					..._params,
					schemaPath: [..._params.schemaPath, schema],
					path: _params.path
				};
				if (schema._zod.processJSONSchema) schema._zod.processJSONSchema(ctx, result.schema, params);
				else {
					const _json = result.schema;
					const processor = ctx.processors[def.type];
					if (!processor) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
					processor(schema, ctx, _json, params);
				}
				const parent = schema._zod.parent;
				if (parent) {
					if (!result.ref) result.ref = parent;
					process(parent, ctx, params);
					ctx.seen.get(parent).isParent = true;
				}
			}
			const meta = ctx.metadataRegistry.get(schema);
			if (meta) Object.assign(result.schema, meta);
			if (ctx.io === "input" && isTransforming(schema)) {
				delete result.schema.examples;
				delete result.schema.default;
			}
			if (ctx.io === "input" && "_prefault" in result.schema) (_a = result.schema).default ?? (_a.default = result.schema._prefault);
			delete result.schema._prefault;
			return ctx.seen.get(schema).schema;
		}
		function extractDefs(ctx, schema) {
			const root = ctx.seen.get(schema);
			if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
			const idToSchema = /* @__PURE__ */ new Map();
			for (const entry of ctx.seen.entries()) {
				const id = ctx.metadataRegistry.get(entry[0])?.id;
				if (id) {
					const existing = idToSchema.get(id);
					if (existing && existing !== entry[0]) throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
					idToSchema.set(id, entry[0]);
				}
			}
			const makeURI = (entry) => {
				const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
				if (ctx.external) {
					const externalId = ctx.external.registry.get(entry[0])?.id;
					const uriGenerator = ctx.external.uri ?? ((id) => id);
					if (externalId) return { ref: uriGenerator(externalId) };
					const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
					entry[1].defId = id;
					return {
						defId: id,
						ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}`
					};
				}
				if (entry[1] === root) return { ref: "#" };
				const defUriPrefix = `#/${defsSegment}/`;
				const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
				return {
					defId,
					ref: defUriPrefix + defId
				};
			};
			const extractToDef = (entry) => {
				if (entry[1].schema.$ref) return;
				const seen = entry[1];
				const { ref, defId } = makeURI(entry);
				seen.def = { ...seen.schema };
				if (defId) seen.defId = defId;
				const schema = seen.schema;
				for (const key in schema) delete schema[key];
				schema.$ref = ref;
			};
			if (ctx.cycles === "throw") for (const entry of ctx.seen.entries()) {
				const seen = entry[1];
				if (seen.cycle) throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
			}
			for (const entry of ctx.seen.entries()) {
				const seen = entry[1];
				if (schema === entry[0]) {
					extractToDef(entry);
					continue;
				}
				if (ctx.external) {
					const ext = ctx.external.registry.get(entry[0])?.id;
					if (schema !== entry[0] && ext) {
						extractToDef(entry);
						continue;
					}
				}
				if (ctx.metadataRegistry.get(entry[0])?.id) {
					extractToDef(entry);
					continue;
				}
				if (seen.cycle) {
					extractToDef(entry);
					continue;
				}
				if (seen.count > 1) {
					if (ctx.reused === "ref") {
						extractToDef(entry);
						continue;
					}
				}
			}
		}
		function finalize(ctx, schema) {
			const root = ctx.seen.get(schema);
			if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
			const flattenRef = (zodSchema) => {
				const seen = ctx.seen.get(zodSchema);
				if (seen.ref === null) return;
				const schema = seen.def ?? seen.schema;
				const _cached = { ...schema };
				const ref = seen.ref;
				seen.ref = null;
				if (ref) {
					flattenRef(ref);
					const refSeen = ctx.seen.get(ref);
					const refSchema = refSeen.schema;
					if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
						schema.allOf = schema.allOf ?? [];
						schema.allOf.push(refSchema);
					} else Object.assign(schema, refSchema);
					Object.assign(schema, _cached);
					if (zodSchema._zod.parent === ref) for (const key in schema) {
						if (key === "$ref" || key === "allOf") continue;
						if (!(key in _cached)) delete schema[key];
					}
					if (refSchema.$ref && refSeen.def) for (const key in schema) {
						if (key === "$ref" || key === "allOf") continue;
						if (key in refSeen.def && JSON.stringify(schema[key]) === JSON.stringify(refSeen.def[key])) delete schema[key];
					}
				}
				const parent = zodSchema._zod.parent;
				if (parent && parent !== ref) {
					flattenRef(parent);
					const parentSeen = ctx.seen.get(parent);
					if (parentSeen?.schema.$ref) {
						schema.$ref = parentSeen.schema.$ref;
						if (parentSeen.def) for (const key in schema) {
							if (key === "$ref" || key === "allOf") continue;
							if (key in parentSeen.def && JSON.stringify(schema[key]) === JSON.stringify(parentSeen.def[key])) delete schema[key];
						}
					}
				}
				ctx.override({
					zodSchema,
					jsonSchema: schema,
					path: seen.path ?? []
				});
			};
			for (const entry of [...ctx.seen.entries()].reverse()) flattenRef(entry[0]);
			const result = {};
			if (ctx.target === "draft-2020-12") result.$schema = "https://json-schema.org/draft/2020-12/schema";
			else if (ctx.target === "draft-07") result.$schema = "http://json-schema.org/draft-07/schema#";
			else if (ctx.target === "draft-04") result.$schema = "http://json-schema.org/draft-04/schema#";
			else if (ctx.target === "openapi-3.0") {}
			if (ctx.external?.uri) {
				const id = ctx.external.registry.get(schema)?.id;
				if (!id) throw new Error("Schema is missing an `id` property");
				result.$id = ctx.external.uri(id);
			}
			Object.assign(result, root.def ?? root.schema);
			const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
			if (rootMetaId !== void 0 && result.id === rootMetaId) delete result.id;
			const defs = ctx.external?.defs ?? {};
			for (const entry of ctx.seen.entries()) {
				const seen = entry[1];
				if (seen.def && seen.defId) {
					if (seen.def.id === seen.defId) delete seen.def.id;
					defs[seen.defId] = seen.def;
				}
			}
			if (ctx.external) {} else if (Object.keys(defs).length > 0) if (ctx.target === "draft-2020-12") result.$defs = defs;
			else result.definitions = defs;
			try {
				const finalized = JSON.parse(JSON.stringify(result));
				Object.defineProperty(finalized, "~standard", {
					value: {
						...schema["~standard"],
						jsonSchema: {
							input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
							output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
						}
					},
					enumerable: false,
					writable: false
				});
				return finalized;
			} catch (_err) {
				throw new Error("Error converting schema to JSON.");
			}
		}
		function isTransforming(_schema, _ctx) {
			const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
			if (ctx.seen.has(_schema)) return false;
			ctx.seen.add(_schema);
			const def = _schema._zod.def;
			if (def.type === "transform") return true;
			if (def.type === "array") return isTransforming(def.element, ctx);
			if (def.type === "set") return isTransforming(def.valueType, ctx);
			if (def.type === "lazy") return isTransforming(def.getter(), ctx);
			if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault") return isTransforming(def.innerType, ctx);
			if (def.type === "intersection") return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
			if (def.type === "record" || def.type === "map") return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
			if (def.type === "pipe") {
				if (_schema._zod.traits.has("$ZodCodec")) return true;
				return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
			}
			if (def.type === "object") {
				for (const key in def.shape) if (isTransforming(def.shape[key], ctx)) return true;
				return false;
			}
			if (def.type === "union") {
				for (const option of def.options) if (isTransforming(option, ctx)) return true;
				return false;
			}
			if (def.type === "tuple") {
				for (const item of def.items) if (isTransforming(item, ctx)) return true;
				if (def.rest && isTransforming(def.rest, ctx)) return true;
				return false;
			}
			return false;
		}
		/**
		* Creates a toJSONSchema method for a schema instance.
		* This encapsulates the logic of initializing context, processing, extracting defs, and finalizing.
		*/
		const createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
			const ctx = initializeContext({
				...params,
				processors
			});
			process(schema, ctx);
			extractDefs(ctx, schema);
			return finalize(ctx, schema);
		};
		const createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
			const { libraryOptions, target } = params ?? {};
			const ctx = initializeContext({
				...libraryOptions ?? {},
				target,
				io,
				processors
			});
			process(schema, ctx);
			extractDefs(ctx, schema);
			return finalize(ctx, schema);
		};
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/json-schema-processors.js
		const formatMap = {
			guid: "uuid",
			url: "uri",
			datetime: "date-time",
			json_string: "json-string",
			regex: ""
		};
		const stringProcessor = (schema, ctx, _json, _params) => {
			const json = _json;
			json.type = "string";
			const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
			if (typeof minimum === "number") json.minLength = minimum;
			if (typeof maximum === "number") json.maxLength = maximum;
			if (format) {
				json.format = formatMap[format] ?? format;
				if (json.format === "") delete json.format;
				if (format === "time") delete json.format;
			}
			if (contentEncoding) json.contentEncoding = contentEncoding;
			if (patterns && patterns.size > 0) {
				const regexes = [...patterns];
				if (regexes.length === 1) json.pattern = regexes[0].source;
				else if (regexes.length > 1) json.allOf = [...regexes.map((regex) => ({
					...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
					pattern: regex.source
				}))];
			}
		};
		const numberProcessor = (schema, ctx, _json, _params) => {
			const json = _json;
			const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
			if (typeof format === "string" && format.includes("int")) json.type = "integer";
			else json.type = "number";
			const exMin = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY);
			const exMax = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY);
			const legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
			if (exMin) if (legacy) {
				json.minimum = exclusiveMinimum;
				json.exclusiveMinimum = true;
			} else json.exclusiveMinimum = exclusiveMinimum;
			else if (typeof minimum === "number") json.minimum = minimum;
			if (exMax) if (legacy) {
				json.maximum = exclusiveMaximum;
				json.exclusiveMaximum = true;
			} else json.exclusiveMaximum = exclusiveMaximum;
			else if (typeof maximum === "number") json.maximum = maximum;
			if (typeof multipleOf === "number") json.multipleOf = multipleOf;
		};
		const booleanProcessor = (_schema, _ctx, json, _params) => {
			json.type = "boolean";
		};
		const undefinedProcessor = (_schema, ctx, _json, _params) => {
			if (ctx.unrepresentable === "throw") throw new Error("Undefined cannot be represented in JSON Schema");
		};
		const neverProcessor = (_schema, _ctx, json, _params) => {
			json.not = {};
		};
		const enumProcessor = (schema, _ctx, json, _params) => {
			const def = schema._zod.def;
			const values = getEnumValues(def.entries);
			if (values.every((v) => typeof v === "number")) json.type = "number";
			if (values.every((v) => typeof v === "string")) json.type = "string";
			json.enum = values;
		};
		const literalProcessor = (schema, ctx, json, _params) => {
			const def = schema._zod.def;
			const vals = [];
			for (const val of def.values) if (val === void 0) {
				if (ctx.unrepresentable === "throw") throw new Error("Literal `undefined` cannot be represented in JSON Schema");
			} else if (typeof val === "bigint") if (ctx.unrepresentable === "throw") throw new Error("BigInt literals cannot be represented in JSON Schema");
			else vals.push(Number(val));
			else vals.push(val);
			if (vals.length === 0) {} else if (vals.length === 1) {
				const val = vals[0];
				json.type = val === null ? "null" : typeof val;
				if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") json.enum = [val];
				else json.const = val;
			} else {
				if (vals.every((v) => typeof v === "number")) json.type = "number";
				if (vals.every((v) => typeof v === "string")) json.type = "string";
				if (vals.every((v) => typeof v === "boolean")) json.type = "boolean";
				if (vals.every((v) => v === null)) json.type = "null";
				json.enum = vals;
			}
		};
		const customProcessor = (_schema, ctx, _json, _params) => {
			if (ctx.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
		};
		const transformProcessor = (_schema, ctx, _json, _params) => {
			if (ctx.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
		};
		const arrayProcessor = (schema, ctx, _json, params) => {
			const json = _json;
			const def = schema._zod.def;
			const { minimum, maximum } = schema._zod.bag;
			if (typeof minimum === "number") json.minItems = minimum;
			if (typeof maximum === "number") json.maxItems = maximum;
			json.type = "array";
			json.items = process(def.element, ctx, {
				...params,
				path: [...params.path, "items"]
			});
		};
		const objectProcessor = (schema, ctx, _json, params) => {
			const json = _json;
			const def = schema._zod.def;
			json.type = "object";
			json.properties = {};
			const shape = def.shape;
			for (const key in shape) json.properties[key] = process(shape[key], ctx, {
				...params,
				path: [
					...params.path,
					"properties",
					key
				]
			});
			const allKeys = new Set(Object.keys(shape));
			const requiredKeys = new Set([...allKeys].filter((key) => {
				const v = def.shape[key]._zod;
				if (ctx.io === "input") return v.optin === void 0;
				else return v.optout === void 0;
			}));
			if (requiredKeys.size > 0) json.required = Array.from(requiredKeys);
			if (def.catchall?._zod.def.type === "never") json.additionalProperties = false;
			else if (!def.catchall) {
				if (ctx.io === "output") json.additionalProperties = false;
			} else if (def.catchall) json.additionalProperties = process(def.catchall, ctx, {
				...params,
				path: [...params.path, "additionalProperties"]
			});
		};
		const unionProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			const isExclusive = def.inclusive === false;
			const options = def.options.map((x, i) => process(x, ctx, {
				...params,
				path: [
					...params.path,
					isExclusive ? "oneOf" : "anyOf",
					i
				]
			}));
			if (isExclusive) json.oneOf = options;
			else json.anyOf = options;
		};
		const intersectionProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			const a = process(def.left, ctx, {
				...params,
				path: [
					...params.path,
					"allOf",
					0
				]
			});
			const b = process(def.right, ctx, {
				...params,
				path: [
					...params.path,
					"allOf",
					1
				]
			});
			const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
			json.allOf = [...isSimpleIntersection(a) ? a.allOf : [a], ...isSimpleIntersection(b) ? b.allOf : [b]];
		};
		const nullableProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			const inner = process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			if (ctx.target === "openapi-3.0") {
				seen.ref = def.innerType;
				json.nullable = true;
			} else json.anyOf = [inner, { type: "null" }];
		};
		const nonoptionalProcessor = (schema, ctx, _json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
		};
		const defaultProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
			json.default = JSON.parse(JSON.stringify(def.defaultValue));
		};
		const prefaultProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
			if (ctx.io === "input") json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
		};
		const catchProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
			let catchValue;
			try {
				catchValue = def.catchValue(void 0);
			} catch {
				throw new Error("Dynamic catch values are not supported in JSON Schema");
			}
			json.default = catchValue;
		};
		const pipeProcessor = (schema, ctx, _json, params) => {
			const def = schema._zod.def;
			const inIsTransform = def.in._zod.traits.has("$ZodTransform");
			const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
			process(innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = innerType;
		};
		const readonlyProcessor = (schema, ctx, json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
			json.readOnly = true;
		};
		const optionalProcessor = (schema, ctx, _json, params) => {
			const def = schema._zod.def;
			process(def.innerType, ctx, params);
			const seen = ctx.seen.get(schema);
			seen.ref = def.innerType;
		};
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/iso.js
		const ZodISODateTime = /*@__PURE__*/ $constructor("ZodISODateTime", (inst, def) => {
			$ZodISODateTime.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		function datetime(params) {
			return /* @__PURE__ */ _isoDateTime(ZodISODateTime, params);
		}
		const ZodISODate = /*@__PURE__*/ $constructor("ZodISODate", (inst, def) => {
			$ZodISODate.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		function date(params) {
			return /* @__PURE__ */ _isoDate(ZodISODate, params);
		}
		const ZodISOTime = /*@__PURE__*/ $constructor("ZodISOTime", (inst, def) => {
			$ZodISOTime.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		function time(params) {
			return /* @__PURE__ */ _isoTime(ZodISOTime, params);
		}
		const ZodISODuration = /*@__PURE__*/ $constructor("ZodISODuration", (inst, def) => {
			$ZodISODuration.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		function duration(params) {
			return /* @__PURE__ */ _isoDuration(ZodISODuration, params);
		}
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/errors.js
		const initializer = (inst, issues) => {
			$ZodError.init(inst, issues);
			inst.name = "ZodError";
			Object.defineProperties(inst, {
				format: { value: (mapper) => formatError(inst, mapper) },
				flatten: { value: (mapper) => flattenError(inst, mapper) },
				addIssue: { value: (issue) => {
					inst.issues.push(issue);
					inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
				} },
				addIssues: { value: (issues) => {
					inst.issues.push(...issues);
					inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
				} },
				isEmpty: { get() {
					return inst.issues.length === 0;
				} }
			});
		};
		const ZodRealError = /*@__PURE__*/ $constructor("ZodError", initializer, { Parent: Error });
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/parse.js
		const parse = /* @__PURE__ */ _parse(ZodRealError);
		const parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
		const safeParse = /* @__PURE__ */ _safeParse(ZodRealError);
		const safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError);
		const encode = /* @__PURE__ */ _encode(ZodRealError);
		const decode = /* @__PURE__ */ _decode(ZodRealError);
		const encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
		const decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
		const safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
		const safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
		const safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
		const safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);
		//#endregion
		//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/schemas.js
		const _installedGroups = /* @__PURE__ */ new WeakMap();
		function _installLazyMethods(inst, group, methods) {
			const proto = Object.getPrototypeOf(inst);
			let installed = _installedGroups.get(proto);
			if (!installed) {
				installed = /* @__PURE__ */ new Set();
				_installedGroups.set(proto, installed);
			}
			if (installed.has(group)) return;
			installed.add(group);
			for (const key in methods) {
				const fn = methods[key];
				Object.defineProperty(proto, key, {
					configurable: true,
					enumerable: false,
					get() {
						const bound = fn.bind(this);
						Object.defineProperty(this, key, {
							configurable: true,
							writable: true,
							enumerable: true,
							value: bound
						});
						return bound;
					},
					set(v) {
						Object.defineProperty(this, key, {
							configurable: true,
							writable: true,
							enumerable: true,
							value: v
						});
					}
				});
			}
		}
		const ZodType = /*@__PURE__*/ $constructor("ZodType", (inst, def) => {
			$ZodType.init(inst, def);
			Object.assign(inst["~standard"], { jsonSchema: {
				input: createStandardJSONSchemaMethod(inst, "input"),
				output: createStandardJSONSchemaMethod(inst, "output")
			} });
			inst.toJSONSchema = createToJSONSchemaMethod(inst, {});
			inst.def = def;
			inst.type = def.type;
			Object.defineProperty(inst, "_def", { value: def });
			inst.parse = (data, params) => parse(inst, data, params, { callee: inst.parse });
			inst.safeParse = (data, params) => safeParse(inst, data, params);
			inst.parseAsync = async (data, params) => parseAsync(inst, data, params, { callee: inst.parseAsync });
			inst.safeParseAsync = async (data, params) => safeParseAsync(inst, data, params);
			inst.spa = inst.safeParseAsync;
			inst.encode = (data, params) => encode(inst, data, params);
			inst.decode = (data, params) => decode(inst, data, params);
			inst.encodeAsync = async (data, params) => encodeAsync(inst, data, params);
			inst.decodeAsync = async (data, params) => decodeAsync(inst, data, params);
			inst.safeEncode = (data, params) => safeEncode(inst, data, params);
			inst.safeDecode = (data, params) => safeDecode(inst, data, params);
			inst.safeEncodeAsync = async (data, params) => safeEncodeAsync(inst, data, params);
			inst.safeDecodeAsync = async (data, params) => safeDecodeAsync(inst, data, params);
			_installLazyMethods(inst, "ZodType", {
				check(...chks) {
					const def = this.def;
					return this.clone(mergeDefs(def, { checks: [...def.checks ?? [], ...chks.map((ch) => typeof ch === "function" ? { _zod: {
						check: ch,
						def: { check: "custom" },
						onattach: []
					} } : ch)] }), { parent: true });
				},
				with(...chks) {
					return this.check(...chks);
				},
				clone(def, params) {
					return clone(this, def, params);
				},
				brand() {
					return this;
				},
				register(reg, meta) {
					reg.add(this, meta);
					return this;
				},
				refine(check, params) {
					return this.check(refine(check, params));
				},
				superRefine(refinement, params) {
					return this.check(superRefine(refinement, params));
				},
				overwrite(fn) {
					return this.check(/* @__PURE__ */ _overwrite(fn));
				},
				optional() {
					return optional(this);
				},
				exactOptional() {
					return exactOptional(this);
				},
				nullable() {
					return nullable(this);
				},
				nullish() {
					return optional(nullable(this));
				},
				nonoptional(params) {
					return nonoptional(this, params);
				},
				array() {
					return array(this);
				},
				or(arg) {
					return union([this, arg]);
				},
				and(arg) {
					return intersection(this, arg);
				},
				transform(tx) {
					return pipe(this, transform(tx));
				},
				default(d) {
					return _default(this, d);
				},
				prefault(d) {
					return prefault(this, d);
				},
				catch(params) {
					return _catch(this, params);
				},
				pipe(target) {
					return pipe(this, target);
				},
				readonly() {
					return readonly(this);
				},
				describe(description) {
					const cl = this.clone();
					globalRegistry.add(cl, { description });
					return cl;
				},
				meta(...args) {
					if (args.length === 0) return globalRegistry.get(this);
					const cl = this.clone();
					globalRegistry.add(cl, args[0]);
					return cl;
				},
				isOptional() {
					return this.safeParse(void 0).success;
				},
				isNullable() {
					return this.safeParse(null).success;
				},
				apply(fn) {
					return fn(this);
				}
			});
			Object.defineProperty(inst, "description", {
				get() {
					return globalRegistry.get(inst)?.description;
				},
				configurable: true
			});
			return inst;
		});
		/** @internal */
		const _ZodString = /*@__PURE__*/ $constructor("_ZodString", (inst, def) => {
			$ZodString.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json, params);
			const bag = inst._zod.bag;
			inst.format = bag.format ?? null;
			inst.minLength = bag.minimum ?? null;
			inst.maxLength = bag.maximum ?? null;
			_installLazyMethods(inst, "_ZodString", {
				regex(...args) {
					return this.check(/* @__PURE__ */ _regex(...args));
				},
				includes(...args) {
					return this.check(/* @__PURE__ */ _includes(...args));
				},
				startsWith(...args) {
					return this.check(/* @__PURE__ */ _startsWith(...args));
				},
				endsWith(...args) {
					return this.check(/* @__PURE__ */ _endsWith(...args));
				},
				min(...args) {
					return this.check(/* @__PURE__ */ _minLength(...args));
				},
				max(...args) {
					return this.check(/* @__PURE__ */ _maxLength(...args));
				},
				length(...args) {
					return this.check(/* @__PURE__ */ _length(...args));
				},
				nonempty(...args) {
					return this.check(/* @__PURE__ */ _minLength(1, ...args));
				},
				lowercase(params) {
					return this.check(/* @__PURE__ */ _lowercase(params));
				},
				uppercase(params) {
					return this.check(/* @__PURE__ */ _uppercase(params));
				},
				trim() {
					return this.check(/* @__PURE__ */ _trim());
				},
				normalize(...args) {
					return this.check(/* @__PURE__ */ _normalize(...args));
				},
				toLowerCase() {
					return this.check(/* @__PURE__ */ _toLowerCase());
				},
				toUpperCase() {
					return this.check(/* @__PURE__ */ _toUpperCase());
				},
				slugify() {
					return this.check(/* @__PURE__ */ _slugify());
				}
			});
		});
		const ZodString = /*@__PURE__*/ $constructor("ZodString", (inst, def) => {
			$ZodString.init(inst, def);
			_ZodString.init(inst, def);
			inst.email = (params) => inst.check(/* @__PURE__ */ _email(ZodEmail, params));
			inst.url = (params) => inst.check(/* @__PURE__ */ _url(ZodURL, params));
			inst.jwt = (params) => inst.check(/* @__PURE__ */ _jwt(ZodJWT, params));
			inst.emoji = (params) => inst.check(/* @__PURE__ */ _emoji(ZodEmoji, params));
			inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
			inst.uuid = (params) => inst.check(/* @__PURE__ */ _uuid(ZodUUID, params));
			inst.uuidv4 = (params) => inst.check(/* @__PURE__ */ _uuidv4(ZodUUID, params));
			inst.uuidv6 = (params) => inst.check(/* @__PURE__ */ _uuidv6(ZodUUID, params));
			inst.uuidv7 = (params) => inst.check(/* @__PURE__ */ _uuidv7(ZodUUID, params));
			inst.nanoid = (params) => inst.check(/* @__PURE__ */ _nanoid(ZodNanoID, params));
			inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
			inst.cuid = (params) => inst.check(/* @__PURE__ */ _cuid(ZodCUID, params));
			inst.cuid2 = (params) => inst.check(/* @__PURE__ */ _cuid2(ZodCUID2, params));
			inst.ulid = (params) => inst.check(/* @__PURE__ */ _ulid(ZodULID, params));
			inst.base64 = (params) => inst.check(/* @__PURE__ */ _base64(ZodBase64, params));
			inst.base64url = (params) => inst.check(/* @__PURE__ */ _base64url(ZodBase64URL, params));
			inst.xid = (params) => inst.check(/* @__PURE__ */ _xid(ZodXID, params));
			inst.ksuid = (params) => inst.check(/* @__PURE__ */ _ksuid(ZodKSUID, params));
			inst.ipv4 = (params) => inst.check(/* @__PURE__ */ _ipv4(ZodIPv4, params));
			inst.ipv6 = (params) => inst.check(/* @__PURE__ */ _ipv6(ZodIPv6, params));
			inst.cidrv4 = (params) => inst.check(/* @__PURE__ */ _cidrv4(ZodCIDRv4, params));
			inst.cidrv6 = (params) => inst.check(/* @__PURE__ */ _cidrv6(ZodCIDRv6, params));
			inst.e164 = (params) => inst.check(/* @__PURE__ */ _e164(ZodE164, params));
			inst.datetime = (params) => inst.check(datetime(params));
			inst.date = (params) => inst.check(date(params));
			inst.time = (params) => inst.check(time(params));
			inst.duration = (params) => inst.check(duration(params));
		});
		function string(params) {
			return /* @__PURE__ */ _string(ZodString, params);
		}
		const ZodStringFormat = /*@__PURE__*/ $constructor("ZodStringFormat", (inst, def) => {
			$ZodStringFormat.init(inst, def);
			_ZodString.init(inst, def);
		});
		const ZodEmail = /*@__PURE__*/ $constructor("ZodEmail", (inst, def) => {
			$ZodEmail.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodGUID = /*@__PURE__*/ $constructor("ZodGUID", (inst, def) => {
			$ZodGUID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodUUID = /*@__PURE__*/ $constructor("ZodUUID", (inst, def) => {
			$ZodUUID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodURL = /*@__PURE__*/ $constructor("ZodURL", (inst, def) => {
			$ZodURL.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodEmoji = /*@__PURE__*/ $constructor("ZodEmoji", (inst, def) => {
			$ZodEmoji.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodNanoID = /*@__PURE__*/ $constructor("ZodNanoID", (inst, def) => {
			$ZodNanoID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		/**
		* @deprecated CUID v1 is deprecated by its authors due to information leakage
		* (timestamps embedded in the id). Use {@link ZodCUID2} instead.
		* See https://github.com/paralleldrive/cuid.
		*/
		const ZodCUID = /*@__PURE__*/ $constructor("ZodCUID", (inst, def) => {
			$ZodCUID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodCUID2 = /*@__PURE__*/ $constructor("ZodCUID2", (inst, def) => {
			$ZodCUID2.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodULID = /*@__PURE__*/ $constructor("ZodULID", (inst, def) => {
			$ZodULID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodXID = /*@__PURE__*/ $constructor("ZodXID", (inst, def) => {
			$ZodXID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodKSUID = /*@__PURE__*/ $constructor("ZodKSUID", (inst, def) => {
			$ZodKSUID.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodIPv4 = /*@__PURE__*/ $constructor("ZodIPv4", (inst, def) => {
			$ZodIPv4.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodIPv6 = /*@__PURE__*/ $constructor("ZodIPv6", (inst, def) => {
			$ZodIPv6.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodCIDRv4 = /*@__PURE__*/ $constructor("ZodCIDRv4", (inst, def) => {
			$ZodCIDRv4.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodCIDRv6 = /*@__PURE__*/ $constructor("ZodCIDRv6", (inst, def) => {
			$ZodCIDRv6.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodBase64 = /*@__PURE__*/ $constructor("ZodBase64", (inst, def) => {
			$ZodBase64.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodBase64URL = /*@__PURE__*/ $constructor("ZodBase64URL", (inst, def) => {
			$ZodBase64URL.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodE164 = /*@__PURE__*/ $constructor("ZodE164", (inst, def) => {
			$ZodE164.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodJWT = /*@__PURE__*/ $constructor("ZodJWT", (inst, def) => {
			$ZodJWT.init(inst, def);
			ZodStringFormat.init(inst, def);
		});
		const ZodNumber = /*@__PURE__*/ $constructor("ZodNumber", (inst, def) => {
			$ZodNumber.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => numberProcessor(inst, ctx, json, params);
			_installLazyMethods(inst, "ZodNumber", {
				gt(value, params) {
					return this.check(/* @__PURE__ */ _gt(value, params));
				},
				gte(value, params) {
					return this.check(/* @__PURE__ */ _gte(value, params));
				},
				min(value, params) {
					return this.check(/* @__PURE__ */ _gte(value, params));
				},
				lt(value, params) {
					return this.check(/* @__PURE__ */ _lt(value, params));
				},
				lte(value, params) {
					return this.check(/* @__PURE__ */ _lte(value, params));
				},
				max(value, params) {
					return this.check(/* @__PURE__ */ _lte(value, params));
				},
				int(params) {
					return this.check(int(params));
				},
				safe(params) {
					return this.check(int(params));
				},
				positive(params) {
					return this.check(/* @__PURE__ */ _gt(0, params));
				},
				nonnegative(params) {
					return this.check(/* @__PURE__ */ _gte(0, params));
				},
				negative(params) {
					return this.check(/* @__PURE__ */ _lt(0, params));
				},
				nonpositive(params) {
					return this.check(/* @__PURE__ */ _lte(0, params));
				},
				multipleOf(value, params) {
					return this.check(/* @__PURE__ */ _multipleOf(value, params));
				},
				step(value, params) {
					return this.check(/* @__PURE__ */ _multipleOf(value, params));
				},
				finite() {
					return this;
				}
			});
			const bag = inst._zod.bag;
			inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
			inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
			inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? .5);
			inst.isFinite = true;
			inst.format = bag.format ?? null;
		});
		function number(params) {
			return /* @__PURE__ */ _number(ZodNumber, params);
		}
		const ZodNumberFormat = /*@__PURE__*/ $constructor("ZodNumberFormat", (inst, def) => {
			$ZodNumberFormat.init(inst, def);
			ZodNumber.init(inst, def);
		});
		function int(params) {
			return /* @__PURE__ */ _int(ZodNumberFormat, params);
		}
		const ZodBoolean = /*@__PURE__*/ $constructor("ZodBoolean", (inst, def) => {
			$ZodBoolean.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => booleanProcessor(inst, ctx, json, params);
		});
		function boolean(params) {
			return /* @__PURE__ */ _boolean(ZodBoolean, params);
		}
		const ZodUndefined = /*@__PURE__*/ $constructor("ZodUndefined", (inst, def) => {
			$ZodUndefined.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => undefinedProcessor(inst, ctx, json, params);
		});
		function _undefined(params) {
			return /* @__PURE__ */ _undefined$1(ZodUndefined, params);
		}
		const ZodUnknown = /*@__PURE__*/ $constructor("ZodUnknown", (inst, def) => {
			$ZodUnknown.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => void 0;
		});
		function unknown() {
			return /* @__PURE__ */ _unknown(ZodUnknown);
		}
		const ZodNever = /*@__PURE__*/ $constructor("ZodNever", (inst, def) => {
			$ZodNever.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
		});
		function never(params) {
			return /* @__PURE__ */ _never(ZodNever, params);
		}
		const ZodArray = /*@__PURE__*/ $constructor("ZodArray", (inst, def) => {
			$ZodArray.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
			inst.element = def.element;
			_installLazyMethods(inst, "ZodArray", {
				min(n, params) {
					return this.check(/* @__PURE__ */ _minLength(n, params));
				},
				nonempty(params) {
					return this.check(/* @__PURE__ */ _minLength(1, params));
				},
				max(n, params) {
					return this.check(/* @__PURE__ */ _maxLength(n, params));
				},
				length(n, params) {
					return this.check(/* @__PURE__ */ _length(n, params));
				},
				unwrap() {
					return this.element;
				}
			});
		});
		function array(element, params) {
			return /* @__PURE__ */ _array(ZodArray, element, params);
		}
		const ZodObject = /*@__PURE__*/ $constructor("ZodObject", (inst, def) => {
			$ZodObjectJIT.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
			defineLazy(inst, "shape", () => {
				return def.shape;
			});
			_installLazyMethods(inst, "ZodObject", {
				keyof() {
					return _enum(Object.keys(this._zod.def.shape));
				},
				catchall(catchall) {
					return this.clone({
						...this._zod.def,
						catchall
					});
				},
				passthrough() {
					return this.clone({
						...this._zod.def,
						catchall: unknown()
					});
				},
				loose() {
					return this.clone({
						...this._zod.def,
						catchall: unknown()
					});
				},
				strict() {
					return this.clone({
						...this._zod.def,
						catchall: never()
					});
				},
				strip() {
					return this.clone({
						...this._zod.def,
						catchall: void 0
					});
				},
				extend(incoming) {
					return extend(this, incoming);
				},
				safeExtend(incoming) {
					return safeExtend(this, incoming);
				},
				merge(other) {
					return merge(this, other);
				},
				pick(mask) {
					return pick(this, mask);
				},
				omit(mask) {
					return omit(this, mask);
				},
				partial(...args) {
					return partial(ZodOptional, this, args[0]);
				},
				required(...args) {
					return required(ZodNonOptional, this, args[0]);
				}
			});
		});
		function object(shape, params) {
			return new ZodObject({
				type: "object",
				shape: shape ?? {},
				...normalizeParams(params)
			});
		}
		const ZodUnion = /*@__PURE__*/ $constructor("ZodUnion", (inst, def) => {
			$ZodUnion.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
			inst.options = def.options;
		});
		function union(options, params) {
			return new ZodUnion({
				type: "union",
				options,
				...normalizeParams(params)
			});
		}
		const ZodIntersection = /*@__PURE__*/ $constructor("ZodIntersection", (inst, def) => {
			$ZodIntersection.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
		});
		function intersection(left, right) {
			return new ZodIntersection({
				type: "intersection",
				left,
				right
			});
		}
		const ZodEnum = /*@__PURE__*/ $constructor("ZodEnum", (inst, def) => {
			$ZodEnum.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
			inst.enum = def.entries;
			inst.options = Object.values(def.entries);
			const keys = new Set(Object.keys(def.entries));
			inst.extract = (values, params) => {
				const newEntries = {};
				for (const value of values) if (keys.has(value)) newEntries[value] = def.entries[value];
				else throw new Error(`Key ${value} not found in enum`);
				return new ZodEnum({
					...def,
					checks: [],
					...normalizeParams(params),
					entries: newEntries
				});
			};
			inst.exclude = (values, params) => {
				const newEntries = { ...def.entries };
				for (const value of values) if (keys.has(value)) delete newEntries[value];
				else throw new Error(`Key ${value} not found in enum`);
				return new ZodEnum({
					...def,
					checks: [],
					...normalizeParams(params),
					entries: newEntries
				});
			};
		});
		function _enum(values, params) {
			return new ZodEnum({
				type: "enum",
				entries: Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values,
				...normalizeParams(params)
			});
		}
		const ZodLiteral = /*@__PURE__*/ $constructor("ZodLiteral", (inst, def) => {
			$ZodLiteral.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => literalProcessor(inst, ctx, json, params);
			inst.values = new Set(def.values);
			Object.defineProperty(inst, "value", { get() {
				if (def.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
				return def.values[0];
			} });
		});
		function literal(value, params) {
			return new ZodLiteral({
				type: "literal",
				values: Array.isArray(value) ? value : [value],
				...normalizeParams(params)
			});
		}
		const ZodTransform = /*@__PURE__*/ $constructor("ZodTransform", (inst, def) => {
			$ZodTransform.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
			inst._zod.parse = (payload, _ctx) => {
				if (_ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
				payload.addIssue = (issue$1) => {
					if (typeof issue$1 === "string") payload.issues.push(issue(issue$1, payload.value, def));
					else {
						const _issue = issue$1;
						if (_issue.fatal) _issue.continue = false;
						_issue.code ?? (_issue.code = "custom");
						_issue.input ?? (_issue.input = payload.value);
						_issue.inst ?? (_issue.inst = inst);
						payload.issues.push(issue(_issue));
					}
				};
				const output = def.transform(payload.value, payload);
				if (output instanceof Promise) return output.then((output) => {
					payload.value = output;
					payload.fallback = true;
					return payload;
				});
				payload.value = output;
				payload.fallback = true;
				return payload;
			};
		});
		function transform(fn) {
			return new ZodTransform({
				type: "transform",
				transform: fn
			});
		}
		const ZodOptional = /*@__PURE__*/ $constructor("ZodOptional", (inst, def) => {
			$ZodOptional.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function optional(innerType) {
			return new ZodOptional({
				type: "optional",
				innerType
			});
		}
		const ZodExactOptional = /*@__PURE__*/ $constructor("ZodExactOptional", (inst, def) => {
			$ZodExactOptional.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function exactOptional(innerType) {
			return new ZodExactOptional({
				type: "optional",
				innerType
			});
		}
		const ZodNullable = /*@__PURE__*/ $constructor("ZodNullable", (inst, def) => {
			$ZodNullable.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function nullable(innerType) {
			return new ZodNullable({
				type: "nullable",
				innerType
			});
		}
		const ZodDefault = /*@__PURE__*/ $constructor("ZodDefault", (inst, def) => {
			$ZodDefault.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
			inst.removeDefault = inst.unwrap;
		});
		function _default(innerType, defaultValue) {
			return new ZodDefault({
				type: "default",
				innerType,
				get defaultValue() {
					return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
				}
			});
		}
		const ZodPrefault = /*@__PURE__*/ $constructor("ZodPrefault", (inst, def) => {
			$ZodPrefault.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function prefault(innerType, defaultValue) {
			return new ZodPrefault({
				type: "prefault",
				innerType,
				get defaultValue() {
					return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
				}
			});
		}
		const ZodNonOptional = /*@__PURE__*/ $constructor("ZodNonOptional", (inst, def) => {
			$ZodNonOptional.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function nonoptional(innerType, params) {
			return new ZodNonOptional({
				type: "nonoptional",
				innerType,
				...normalizeParams(params)
			});
		}
		const ZodCatch = /*@__PURE__*/ $constructor("ZodCatch", (inst, def) => {
			$ZodCatch.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
			inst.removeCatch = inst.unwrap;
		});
		function _catch(innerType, catchValue) {
			return new ZodCatch({
				type: "catch",
				innerType,
				catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
			});
		}
		const ZodPipe = /*@__PURE__*/ $constructor("ZodPipe", (inst, def) => {
			$ZodPipe.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
			inst.in = def.in;
			inst.out = def.out;
		});
		function pipe(in_, out) {
			return new ZodPipe({
				type: "pipe",
				in: in_,
				out
			});
		}
		const ZodReadonly = /*@__PURE__*/ $constructor("ZodReadonly", (inst, def) => {
			$ZodReadonly.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
			inst.unwrap = () => inst._zod.def.innerType;
		});
		function readonly(innerType) {
			return new ZodReadonly({
				type: "readonly",
				innerType
			});
		}
		const ZodCustom = /*@__PURE__*/ $constructor("ZodCustom", (inst, def) => {
			$ZodCustom.init(inst, def);
			ZodType.init(inst, def);
			inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
		});
		function refine(fn, _params = {}) {
			return /* @__PURE__ */ _refine(ZodCustom, fn, _params);
		}
		function superRefine(fn, params) {
			return /* @__PURE__ */ _superRefine(fn, params);
		}
		//#endregion
		//#region ../agent-team/lib/typert.remote-client.js
		let _sophialin_dsh_research_team_agentTeam_addMember_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_addMember_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_addMember_parameter_0$schema$value ??= object({
			"requestId": intersection(string(), unknown()).readonly(),
			"workspaceId": intersection(string(), unknown()).readonly(),
			"handle": string().readonly(),
			"description": string().readonly(),
			"presetId": string().readonly(),
			"model": object({
				"provider": string().readonly(),
				"model": string().readonly(),
				"reasoningEffort": intersection(string(), unknown()).readonly().optional()
			}).readonly().optional(),
			"capabilities": object({
				"tools": union([_undefined(), object({ "allow": array(string()).readonly().optional() })]).readonly().optional(),
				"skills": union([_undefined(), object({ "allow": array(string()).readonly().optional() })]).readonly().optional()
			}).readonly().optional(),
			"channelRefs": array(intersection(string(), unknown())).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_addMember_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_addMember_result$schema = () => _sophialin_dsh_research_team_agentTeam_addMember_result$schema$value ??= object({
			"workspaceIds": array(intersection(string(), unknown())).readonly(),
			"receipt": object({
				"operationId": intersection(string(), unknown()).readonly(),
				"requestId": intersection(string(), unknown()).readonly(),
				"sequence": number().readonly(),
				"occurredAt": string().readonly()
			}).readonly(),
			"status": object({
				"member": object({
					"memberId": intersection(string(), unknown()).readonly(),
					"sessionId": intersection(string(), unknown()).readonly(),
					"workspaceId": intersection(string(), unknown()).readonly(),
					"handle": string().readonly(),
					"description": string().readonly(),
					"presetId": string().readonly(),
					"model": union([_undefined(), object({
						"provider": string().readonly(),
						"model": string().readonly(),
						"reasoningEffort": intersection(string(), unknown()).readonly().optional()
					})]).readonly().optional(),
					"capabilities": union([_undefined(), object({
						"tools": union([_undefined(), object({ "allow": array(string()).readonly().optional() })]).readonly().optional(),
						"skills": union([_undefined(), object({ "allow": array(string()).readonly().optional() })]).readonly().optional()
					})]).readonly().optional(),
					"privateMemoryPath": string().readonly(),
					"state": union([
						literal("enabled"),
						literal("suspended"),
						literal("inactive"),
						literal("archived")
					]).readonly()
				}).readonly(),
				"availability": union([
					literal("suspended"),
					literal("inactive"),
					literal("archived"),
					literal("active"),
					literal("unavailable")
				]).readonly(),
				"presence": union([
					literal("unavailable"),
					literal("available"),
					literal("working"),
					literal("error")
				]).readonly(),
				"diagnostic": object({
					"class": union([
						literal("session-refused"),
						literal("session-unreadable"),
						literal("preset-composition"),
						literal("rollover"),
						literal("runtime"),
						literal("activation")
					]).readonly(),
					"detail": string().readonly(),
					"location": object({
						"kind": string().readonly(),
						"path": string().readonly()
					}).readonly().optional(),
					"sessionId": intersection(string(), unknown()).readonly().optional()
				}).readonly().optional(),
				"capabilityWarnings": union([_undefined(), array(object({
					"name": string().readonly(),
					"knownNames": array(string()).readonly()
				}))]).readonly().optional()
			}).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_archiveChannel_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_archiveChannel_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_archiveChannel_parameter_0$schema$value ??= object({
			"requestId": intersection(string(), unknown()).readonly(),
			"workspaceId": intersection(string(), unknown()).readonly(),
			"channelRef": intersection(string(), unknown()).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_archiveChannel_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_archiveChannel_result$schema = () => _sophialin_dsh_research_team_agentTeam_archiveChannel_result$schema$value ??= object({
			"receipt": object({
				"operationId": intersection(string(), unknown()).readonly(),
				"requestId": intersection(string(), unknown()).readonly(),
				"sequence": number().readonly(),
				"occurredAt": string().readonly()
			}).readonly(),
			"channel": object({
				"channelRef": intersection(string(), unknown()).readonly(),
				"workspaceId": intersection(string(), unknown()).readonly(),
				"name": string().readonly(),
				"description": string().readonly(),
				"createdAtSequence": number().readonly(),
				"state": union([literal("archived"), literal("active")]).readonly()
			}).readonly(),
			"releasedClaims": array(object({
				"claimRef": intersection(string(), unknown()).readonly(),
				"taskRef": intersection(string(), unknown()).readonly(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"owner": intersection(string(), unknown()).readonly(),
				"direction": string().readonly(),
				"normalizedDirection": string().readonly(),
				"state": union([
					literal("active"),
					literal("done"),
					literal("released")
				]).readonly()
			})).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_archiveMember_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_archiveMember_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_archiveMember_parameter_0$schema$value ??= object({
			"requestId": intersection(string(), unknown()).readonly(),
			"memberId": intersection(string(), unknown()).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_archiveMember_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_archiveMember_result$schema = () => _sophialin_dsh_research_team_agentTeam_archiveMember_result$schema$value ??= object({
			"receipt": object({
				"operationId": intersection(string(), unknown()).readonly(),
				"requestId": intersection(string(), unknown()).readonly(),
				"sequence": number().readonly(),
				"occurredAt": string().readonly()
			}).readonly(),
			"member": object({
				"memberId": intersection(string(), unknown()).readonly(),
				"sessionId": intersection(string(), unknown()).readonly(),
				"workspaceId": intersection(string(), unknown()).readonly(),
				"handle": string().readonly(),
				"description": string().readonly(),
				"presetId": string().readonly(),
				"model": union([_undefined(), object({
					"provider": string().readonly(),
					"model": string().readonly(),
					"reasoningEffort": intersection(string(), unknown()).readonly().optional()
				})]).readonly().optional(),
				"capabilities": union([_undefined(), object({
					"tools": union([_undefined(), object({ "allow": array(string()).readonly().optional() })]).readonly().optional(),
					"skills": union([_undefined(), object({ "allow": array(string()).readonly().optional() })]).readonly().optional()
				})]).readonly().optional(),
				"privateMemoryPath": string().readonly(),
				"state": union([
					literal("enabled"),
					literal("suspended"),
					literal("inactive"),
					literal("archived")
				]).readonly()
			}).readonly(),
			"releasedClaims": array(object({
				"claimRef": intersection(string(), unknown()).readonly(),
				"taskRef": intersection(string(), unknown()).readonly(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"owner": intersection(string(), unknown()).readonly(),
				"direction": string().readonly(),
				"normalizedDirection": string().readonly(),
				"state": union([
					literal("active"),
					literal("done"),
					literal("released")
				]).readonly()
			})).readonly(),
			"removedAttention": array(object({
				"memberId": intersection(string(), unknown()).readonly(),
				"threadRef": intersection(string(), unknown()).readonly()
			})).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_changeAttention_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_changeAttention_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_changeAttention_parameter_0$schema$value ??= object({
			"requestId": intersection(string(), unknown()).readonly(),
			"workspaceId": intersection(string(), unknown()).readonly(),
			"threadRef": intersection(string(), unknown()).readonly().optional(),
			"taskRef": intersection(string(), unknown()).readonly().optional(),
			"action": union([literal("follow"), literal("unfollow")]).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_changeAttention_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_changeAttention_result$schema = () => _sophialin_dsh_research_team_agentTeam_changeAttention_result$schema$value ??= object({
			"receipt": object({
				"operationId": intersection(string(), unknown()).readonly(),
				"requestId": intersection(string(), unknown()).readonly(),
				"sequence": number().readonly(),
				"occurredAt": string().readonly()
			}).readonly(),
			"task": object({
				"taskRef": intersection(string(), unknown()).readonly(),
				"channelRef": intersection(string(), unknown()).readonly(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"status": union([
					literal("done"),
					literal("todo"),
					literal("in_progress"),
					literal("in_review"),
					literal("closed")
				]).readonly(),
				"resolution": union([
					literal("closed"),
					literal("open"),
					literal("accepted")
				]).readonly()
			}).readonly().optional(),
			"thread": object({
				"threadRef": intersection(string(), unknown()).readonly(),
				"taskRef": intersection(string(), unknown()).readonly().optional(),
				"revision": number().readonly()
			}).readonly(),
			"attention": object({
				"memberId": intersection(string(), unknown()).readonly(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"startSequence": number().readonly(),
				"readThroughSequence": number().readonly()
			}).readonly().optional()
		});
		let _sophialin_dsh_research_team_agentTeam_changes_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_changes_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_changes_parameter_0$schema$value ??= object({ "scope": union([
			object({
				"kind": literal("workspace").readonly(),
				"workspaceId": intersection(string(), unknown()).readonly()
			}),
			object({
				"kind": literal("channel").readonly(),
				"channelRef": intersection(string(), unknown()).readonly()
			}),
			object({
				"kind": literal("thread").readonly(),
				"threadRef": intersection(string(), unknown()).readonly()
			}),
			object({
				"kind": literal("presence").readonly(),
				"workspaceId": intersection(string(), unknown()).readonly()
			})
		]).readonly().optional() });
		let _sophialin_dsh_research_team_agentTeam_changes_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_changes_result$schema = () => _sophialin_dsh_research_team_agentTeam_changes_result$schema$value ??= object({ "version": number().readonly() });
		let _sophialin_dsh_research_team_agentTeam_changeTask_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_changeTask_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_changeTask_parameter_0$schema$value ??= object({
			"requestId": intersection(string(), unknown()).readonly(),
			"workspaceId": intersection(string(), unknown()).readonly(),
			"taskRef": intersection(string(), unknown()).readonly(),
			"action": union([
				literal("accept"),
				literal("close"),
				literal("reopen")
			]).readonly(),
			"baseRevision": number().readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_changeTask_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_changeTask_result$schema = () => _sophialin_dsh_research_team_agentTeam_changeTask_result$schema$value ??= union([
			object({
				"kind": literal("committed").readonly(),
				"receipt": object({
					"operationId": intersection(string(), unknown()).readonly(),
					"requestId": intersection(string(), unknown()).readonly(),
					"sequence": number().readonly(),
					"occurredAt": string().readonly()
				}).readonly(),
				"activity": object({
					"kind": union([
						literal("accept"),
						literal("close"),
						literal("reopen"),
						literal("promote")
					]).readonly(),
					"releasedClaimRefs": union([_undefined(), array(intersection(string(), unknown()))]).readonly().optional(),
					"completedClaimRefs": union([_undefined(), array(intersection(string(), unknown()))]).readonly().optional(),
					"acceptedClaimRefs": union([_undefined(), array(intersection(string(), unknown()))]).readonly().optional(),
					"activityRef": intersection(string(), unknown()).readonly(),
					"taskRef": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"actor": intersection(string(), unknown()).readonly(),
					"sequence": number().readonly()
				}).readonly(),
				"task": object({
					"taskRef": intersection(string(), unknown()).readonly(),
					"channelRef": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"status": union([
						literal("done"),
						literal("todo"),
						literal("in_progress"),
						literal("in_review"),
						literal("closed")
					]).readonly(),
					"resolution": union([
						literal("closed"),
						literal("open"),
						literal("accepted")
					]).readonly()
				}).readonly(),
				"thread": object({
					"threadRef": intersection(string(), unknown()).readonly(),
					"taskRef": intersection(string(), unknown()).readonly().optional(),
					"revision": number().readonly()
				}).readonly(),
				"claims": array(object({
					"claimRef": intersection(string(), unknown()).readonly(),
					"taskRef": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"owner": intersection(string(), unknown()).readonly(),
					"direction": string().readonly(),
					"normalizedDirection": string().readonly(),
					"state": union([
						literal("active"),
						literal("done"),
						literal("released")
					]).readonly()
				})).readonly()
			}),
			object({
				"kind": literal("unread_required").readonly(),
				"taskRef": intersection(string(), unknown()).readonly().optional(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"revision": number().readonly(),
				"unreadCount": number().readonly(),
				"directCount": number().readonly()
			}),
			object({
				"kind": literal("stale_revision").readonly(),
				"taskRef": intersection(string(), unknown()).readonly().optional(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"expectedRevision": number().readonly(),
				"revision": number().readonly()
			})
		]);
		let _sophialin_dsh_research_team_agentTeam_clearMemberContext_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_clearMemberContext_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_clearMemberContext_parameter_0$schema$value ??= object({
			"requestId": intersection(string(), unknown()).readonly(),
			"workspaceId": intersection(string(), unknown()).readonly(),
			"memberId": intersection(string(), unknown()).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_clearMemberContext_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_clearMemberContext_result$schema = () => _sophialin_dsh_research_team_agentTeam_clearMemberContext_result$schema$value ??= object({
			"receipt": object({
				"operationId": intersection(string(), unknown()).readonly(),
				"requestId": intersection(string(), unknown()).readonly(),
				"sequence": number().readonly(),
				"occurredAt": string().readonly()
			}).readonly(),
			"status": object({
				"member": object({
					"memberId": intersection(string(), unknown()).readonly(),
					"sessionId": intersection(string(), unknown()).readonly(),
					"workspaceId": intersection(string(), unknown()).readonly(),
					"handle": string().readonly(),
					"description": string().readonly(),
					"presetId": string().readonly(),
					"model": union([_undefined(), object({
						"provider": string().readonly(),
						"model": string().readonly(),
						"reasoningEffort": intersection(string(), unknown()).readonly().optional()
					})]).readonly().optional(),
					"capabilities": union([_undefined(), object({
						"tools": union([_undefined(), object({ "allow": array(string()).readonly().optional() })]).readonly().optional(),
						"skills": union([_undefined(), object({ "allow": array(string()).readonly().optional() })]).readonly().optional()
					})]).readonly().optional(),
					"privateMemoryPath": string().readonly(),
					"state": union([
						literal("enabled"),
						literal("suspended"),
						literal("inactive"),
						literal("archived")
					]).readonly()
				}).readonly(),
				"availability": union([
					literal("suspended"),
					literal("inactive"),
					literal("archived"),
					literal("active"),
					literal("unavailable")
				]).readonly(),
				"presence": union([
					literal("unavailable"),
					literal("available"),
					literal("working"),
					literal("error")
				]).readonly(),
				"diagnostic": object({
					"class": union([
						literal("session-refused"),
						literal("session-unreadable"),
						literal("preset-composition"),
						literal("rollover"),
						literal("runtime"),
						literal("activation")
					]).readonly(),
					"detail": string().readonly(),
					"location": object({
						"kind": string().readonly(),
						"path": string().readonly()
					}).readonly().optional(),
					"sessionId": intersection(string(), unknown()).readonly().optional()
				}).readonly().optional(),
				"capabilityWarnings": union([_undefined(), array(object({
					"name": string().readonly(),
					"knownNames": array(string()).readonly()
				}))]).readonly().optional()
			}).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_createChannel_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_createChannel_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_createChannel_parameter_0$schema$value ??= object({
			"requestId": intersection(string(), unknown()).readonly(),
			"workspaceId": intersection(string(), unknown()).readonly(),
			"name": string().readonly(),
			"description": string().readonly(),
			"memberIds": array(intersection(string(), unknown())).readonly().optional()
		});
		let _sophialin_dsh_research_team_agentTeam_createChannel_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_createChannel_result$schema = () => _sophialin_dsh_research_team_agentTeam_createChannel_result$schema$value ??= object({
			"receipt": object({
				"operationId": intersection(string(), unknown()).readonly(),
				"requestId": intersection(string(), unknown()).readonly(),
				"sequence": number().readonly(),
				"occurredAt": string().readonly()
			}).readonly(),
			"channel": object({
				"channelRef": intersection(string(), unknown()).readonly(),
				"workspaceId": intersection(string(), unknown()).readonly(),
				"name": string().readonly(),
				"description": string().readonly(),
				"createdAtSequence": number().readonly(),
				"state": union([literal("archived"), literal("active")]).readonly()
			}).readonly(),
			"memberIds": array(intersection(string(), unknown())).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_environment_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_environment_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_environment_parameter_0$schema$value ??= object({});
		let _sophialin_dsh_research_team_agentTeam_environment_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_environment_result$schema = () => _sophialin_dsh_research_team_agentTeam_environment_result$schema$value ??= object({
			"verdict": union([
				literal("ok"),
				literal("out-of-range"),
				literal("undetermined")
			]).readonly(),
			"reason": union([_undefined(), string()]).readonly().optional(),
			"bundleVersion": union([_undefined(), string()]).readonly().optional(),
			"dshVersion": union([_undefined(), string()]).readonly().optional(),
			"certifiedDshVersion": union([_undefined(), string()]).readonly().optional(),
			"supportRange": union([_undefined(), object({
				"lower": string().readonly(),
				"upper": string().readonly()
			})]).readonly().optional()
		});
		let _sophialin_dsh_research_team_agentTeam_getAttachment_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_getAttachment_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_getAttachment_parameter_0$schema$value ??= object({ "attachmentId": intersection(string(), unknown()).readonly() });
		let _sophialin_dsh_research_team_agentTeam_getAttachment_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_getAttachment_result$schema = () => _sophialin_dsh_research_team_agentTeam_getAttachment_result$schema$value ??= object({
			"name": string().readonly(),
			"mediaType": string().readonly(),
			"byteSize": number().readonly(),
			"bytesBase64": string().readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_getHumanAvatar_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_getHumanAvatar_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_getHumanAvatar_parameter_0$schema$value ??= object({ "avatarRef": string().readonly() });
		let _sophialin_dsh_research_team_agentTeam_getHumanAvatar_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_getHumanAvatar_result$schema = () => _sophialin_dsh_research_team_agentTeam_getHumanAvatar_result$schema$value ??= object({
			"name": string().readonly(),
			"mediaType": string().readonly(),
			"byteSize": number().readonly(),
			"bytesBase64": string().readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_humanProfile_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_humanProfile_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_humanProfile_parameter_0$schema$value ??= object({});
		let _sophialin_dsh_research_team_agentTeam_humanProfile_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_humanProfile_result$schema = () => _sophialin_dsh_research_team_agentTeam_humanProfile_result$schema$value ??= object({
			"name": string().readonly(),
			"avatarRef": union([_undefined(), string()]).readonly().optional(),
			"version": string().readonly(),
			"repoUrl": string().readonly(),
			"updateAvailable": boolean().readonly(),
			"latestVersion": union([_undefined(), string()]).readonly().optional()
		});
		let _sophialin_dsh_research_team_agentTeam_inbox_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_inbox_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_inbox_parameter_0$schema$value ??= object({
			"workspaceId": intersection(string(), unknown()).readonly(),
			"limit": number().readonly().optional()
		});
		let _sophialin_dsh_research_team_agentTeam_inbox_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_inbox_result$schema = () => _sophialin_dsh_research_team_agentTeam_inbox_result$schema$value ??= object({
			"humanMemberId": intersection(string(), unknown()).readonly(),
			"items": array(object({
				"workspaceId": intersection(string(), unknown()).readonly(),
				"channelRef": intersection(string(), unknown()).readonly(),
				"channelName": string().readonly().optional(),
				"task": object({
					"taskRef": intersection(string(), unknown()).readonly(),
					"channelRef": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"status": union([
						literal("done"),
						literal("todo"),
						literal("in_progress"),
						literal("in_review"),
						literal("closed")
					]).readonly(),
					"resolution": union([
						literal("closed"),
						literal("open"),
						literal("accepted")
					]).readonly()
				}).readonly().optional(),
				"taskNumber": number().readonly().optional(),
				"thread": object({
					"threadRef": intersection(string(), unknown()).readonly(),
					"taskRef": intersection(string(), unknown()).readonly().optional(),
					"revision": number().readonly()
				}).readonly(),
				"unreadCount": number().readonly(),
				"directCount": number().readonly(),
				"previewText": string().readonly().optional(),
				"newestSequence": number().readonly(),
				"newestOccurredAt": string().readonly(),
				"newestActor": object({
					"memberId": intersection(string(), unknown()).readonly(),
					"name": string().readonly()
				}).readonly(),
				"claimOwners": array(object({
					"memberId": intersection(string(), unknown()).readonly(),
					"name": string().readonly()
				})).readonly(),
				"attention": object({
					"memberId": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"startSequence": number().readonly(),
					"readThroughSequence": number().readonly()
				}).readonly().optional()
			})).readonly(),
			"recent": array(object({
				"workspaceId": intersection(string(), unknown()).readonly(),
				"channelRef": intersection(string(), unknown()).readonly(),
				"channelName": string().readonly().optional(),
				"task": object({
					"taskRef": intersection(string(), unknown()).readonly(),
					"channelRef": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"status": union([
						literal("done"),
						literal("todo"),
						literal("in_progress"),
						literal("in_review"),
						literal("closed")
					]).readonly(),
					"resolution": union([
						literal("closed"),
						literal("open"),
						literal("accepted")
					]).readonly()
				}).readonly().optional(),
				"taskNumber": number().readonly().optional(),
				"thread": object({
					"threadRef": intersection(string(), unknown()).readonly(),
					"taskRef": intersection(string(), unknown()).readonly().optional(),
					"revision": number().readonly()
				}).readonly(),
				"unreadCount": number().readonly(),
				"directCount": number().readonly(),
				"previewText": string().readonly().optional(),
				"newestSequence": number().readonly(),
				"newestOccurredAt": string().readonly(),
				"newestActor": object({
					"memberId": intersection(string(), unknown()).readonly(),
					"name": string().readonly()
				}).readonly(),
				"claimOwners": array(object({
					"memberId": intersection(string(), unknown()).readonly(),
					"name": string().readonly()
				})).readonly(),
				"attention": object({
					"memberId": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"startSequence": number().readonly(),
					"readThroughSequence": number().readonly()
				}).readonly().optional()
			})).readonly(),
			"totalUnreadCount": number().readonly(),
			"totalDirectCount": number().readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_joinChannel_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_joinChannel_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_joinChannel_parameter_0$schema$value ??= object({
			"requestId": intersection(string(), unknown()).readonly(),
			"workspaceId": intersection(string(), unknown()).readonly(),
			"channelRef": intersection(string(), unknown()).readonly(),
			"memberId": intersection(string(), unknown()).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_joinChannel_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_joinChannel_result$schema = () => _sophialin_dsh_research_team_agentTeam_joinChannel_result$schema$value ??= object({
			"receipt": object({
				"operationId": intersection(string(), unknown()).readonly(),
				"requestId": intersection(string(), unknown()).readonly(),
				"sequence": number().readonly(),
				"occurredAt": string().readonly()
			}).readonly(),
			"channelRef": intersection(string(), unknown()).readonly(),
			"memberId": intersection(string(), unknown()).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_joinWorkspace_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_joinWorkspace_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_joinWorkspace_parameter_0$schema$value ??= object({
			"requestId": intersection(string(), unknown()).readonly(),
			"workspaceId": intersection(string(), unknown()).readonly(),
			"memberId": intersection(string(), unknown()).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_joinWorkspace_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_joinWorkspace_result$schema = () => _sophialin_dsh_research_team_agentTeam_joinWorkspace_result$schema$value ??= object({
			"receipt": object({
				"operationId": intersection(string(), unknown()).readonly(),
				"requestId": intersection(string(), unknown()).readonly(),
				"sequence": number().readonly(),
				"occurredAt": string().readonly()
			}).readonly(),
			"memberId": intersection(string(), unknown()).readonly(),
			"workspaceId": intersection(string(), unknown()).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_leaveWorkspace_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_leaveWorkspace_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_leaveWorkspace_parameter_0$schema$value ??= object({
			"requestId": intersection(string(), unknown()).readonly(),
			"workspaceId": intersection(string(), unknown()).readonly(),
			"memberId": intersection(string(), unknown()).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_leaveWorkspace_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_leaveWorkspace_result$schema = () => _sophialin_dsh_research_team_agentTeam_leaveWorkspace_result$schema$value ??= object({
			"receipt": object({
				"operationId": intersection(string(), unknown()).readonly(),
				"requestId": intersection(string(), unknown()).readonly(),
				"sequence": number().readonly(),
				"occurredAt": string().readonly()
			}).readonly(),
			"memberId": intersection(string(), unknown()).readonly(),
			"workspaceId": intersection(string(), unknown()).readonly(),
			"releasedClaims": array(object({
				"claimRef": intersection(string(), unknown()).readonly(),
				"taskRef": intersection(string(), unknown()).readonly(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"owner": intersection(string(), unknown()).readonly(),
				"direction": string().readonly(),
				"normalizedDirection": string().readonly(),
				"state": union([
					literal("active"),
					literal("done"),
					literal("released")
				]).readonly()
			})).readonly(),
			"removedAttention": array(object({
				"memberId": intersection(string(), unknown()).readonly(),
				"threadRef": intersection(string(), unknown()).readonly()
			})).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_members_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_members_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_members_parameter_0$schema$value ??= object({ "workspaceId": intersection(string(), unknown()).readonly().optional() });
		let _sophialin_dsh_research_team_agentTeam_members_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_members_result$schema = () => _sophialin_dsh_research_team_agentTeam_members_result$schema$value ??= array(object({
			"member": object({
				"memberId": intersection(string(), unknown()).readonly(),
				"sessionId": intersection(string(), unknown()).readonly(),
				"workspaceId": intersection(string(), unknown()).readonly(),
				"handle": string().readonly(),
				"description": string().readonly(),
				"presetId": string().readonly(),
				"model": union([_undefined(), object({
					"provider": string().readonly(),
					"model": string().readonly(),
					"reasoningEffort": intersection(string(), unknown()).readonly().optional()
				})]).readonly().optional(),
				"capabilities": union([_undefined(), object({
					"tools": union([_undefined(), object({ "allow": array(string()).readonly().optional() })]).readonly().optional(),
					"skills": union([_undefined(), object({ "allow": array(string()).readonly().optional() })]).readonly().optional()
				})]).readonly().optional(),
				"state": union([
					literal("enabled"),
					literal("suspended"),
					literal("inactive"),
					literal("archived")
				]).readonly()
			}).readonly(),
			"workspaceIds": array(intersection(string(), unknown())).readonly(),
			"availability": union([
				literal("suspended"),
				literal("inactive"),
				literal("archived"),
				literal("active"),
				literal("unavailable")
			]).readonly(),
			"presence": union([
				literal("unavailable"),
				literal("available"),
				literal("working"),
				literal("error")
			]).readonly(),
			"diagnostic": object({
				"class": union([
					literal("session-refused"),
					literal("session-unreadable"),
					literal("preset-composition"),
					literal("rollover"),
					literal("runtime"),
					literal("activation")
				]).readonly(),
				"detail": string().readonly(),
				"location": object({
					"kind": string().readonly(),
					"path": string().readonly()
				}).readonly().optional(),
				"sessionId": intersection(string(), unknown()).readonly().optional()
			}).readonly().optional(),
			"capabilityWarnings": union([_undefined(), array(object({
				"name": string().readonly(),
				"knownNames": array(string()).readonly()
			}))]).readonly().optional()
		}));
		let _sophialin_dsh_research_team_agentTeam_promoteThread_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_promoteThread_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_promoteThread_parameter_0$schema$value ??= object({
			"requestId": intersection(string(), unknown()).readonly(),
			"workspaceId": intersection(string(), unknown()).readonly(),
			"threadRef": intersection(string(), unknown()).readonly(),
			"baseRevision": number().readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_promoteThread_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_promoteThread_result$schema = () => _sophialin_dsh_research_team_agentTeam_promoteThread_result$schema$value ??= union([
			object({
				"kind": literal("unread_required").readonly(),
				"taskRef": intersection(string(), unknown()).readonly().optional(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"revision": number().readonly(),
				"unreadCount": number().readonly(),
				"directCount": number().readonly()
			}),
			object({
				"kind": literal("stale_revision").readonly(),
				"taskRef": intersection(string(), unknown()).readonly().optional(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"expectedRevision": number().readonly(),
				"revision": number().readonly()
			}),
			object({
				"kind": literal("committed").readonly(),
				"receipt": object({
					"operationId": intersection(string(), unknown()).readonly(),
					"requestId": intersection(string(), unknown()).readonly(),
					"sequence": number().readonly(),
					"occurredAt": string().readonly()
				}).readonly(),
				"activity": object({
					"kind": union([
						literal("accept"),
						literal("close"),
						literal("reopen"),
						literal("promote")
					]).readonly(),
					"releasedClaimRefs": union([_undefined(), array(intersection(string(), unknown()))]).readonly().optional(),
					"completedClaimRefs": union([_undefined(), array(intersection(string(), unknown()))]).readonly().optional(),
					"acceptedClaimRefs": union([_undefined(), array(intersection(string(), unknown()))]).readonly().optional(),
					"activityRef": intersection(string(), unknown()).readonly(),
					"taskRef": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"actor": intersection(string(), unknown()).readonly(),
					"sequence": number().readonly()
				}).readonly(),
				"task": object({
					"taskRef": intersection(string(), unknown()).readonly(),
					"channelRef": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"status": union([
						literal("done"),
						literal("todo"),
						literal("in_progress"),
						literal("in_review"),
						literal("closed")
					]).readonly(),
					"resolution": union([
						literal("closed"),
						literal("open"),
						literal("accepted")
					]).readonly()
				}).readonly(),
				"thread": object({
					"threadRef": intersection(string(), unknown()).readonly(),
					"taskRef": intersection(string(), unknown()).readonly().optional(),
					"revision": number().readonly()
				}).readonly()
			})
		]);
		let _sophialin_dsh_research_team_agentTeam_putAttachment_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_putAttachment_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_putAttachment_parameter_0$schema$value ??= object({
			"requestId": intersection(string(), unknown()).readonly(),
			"workspaceId": intersection(string(), unknown()).readonly(),
			"name": string().readonly(),
			"mediaType": union([_undefined(), string()]).readonly().optional(),
			"bytesBase64": string().readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_putAttachment_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_putAttachment_result$schema = () => _sophialin_dsh_research_team_agentTeam_putAttachment_result$schema$value ??= object({
			"attachmentId": intersection(string(), unknown()).readonly(),
			"path": string().readonly(),
			"name": string().readonly(),
			"byteSize": number().readonly(),
			"mediaType": string().readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_putHumanAvatar_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_putHumanAvatar_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_putHumanAvatar_parameter_0$schema$value ??= object({
			"name": string().readonly(),
			"mediaType": union([_undefined(), string()]).readonly().optional(),
			"bytesBase64": string().readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_putHumanAvatar_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_putHumanAvatar_result$schema = () => _sophialin_dsh_research_team_agentTeam_putHumanAvatar_result$schema$value ??= object({
			"avatarRef": string().readonly(),
			"path": string().readonly(),
			"name": string().readonly(),
			"byteSize": number().readonly(),
			"mediaType": string().readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_readThread_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_readThread_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_readThread_parameter_0$schema$value ??= object({
			"requestId": intersection(string(), unknown()).readonly(),
			"workspaceId": intersection(string(), unknown()).readonly(),
			"threadRef": intersection(string(), unknown()).readonly().optional(),
			"taskRef": intersection(string(), unknown()).readonly().optional()
		});
		let _sophialin_dsh_research_team_agentTeam_readThread_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_readThread_result$schema = () => _sophialin_dsh_research_team_agentTeam_readThread_result$schema$value ??= object({
			"receipt": object({
				"operationId": intersection(string(), unknown()).readonly(),
				"requestId": intersection(string(), unknown()).readonly(),
				"sequence": number().readonly(),
				"occurredAt": string().readonly()
			}).readonly().optional(),
			"task": object({
				"taskRef": intersection(string(), unknown()).readonly(),
				"channelRef": intersection(string(), unknown()).readonly(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"status": union([
					literal("done"),
					literal("todo"),
					literal("in_progress"),
					literal("in_review"),
					literal("closed")
				]).readonly(),
				"resolution": union([
					literal("closed"),
					literal("open"),
					literal("accepted")
				]).readonly()
			}).readonly().optional(),
			"thread": object({
				"threadRef": intersection(string(), unknown()).readonly(),
				"taskRef": intersection(string(), unknown()).readonly().optional(),
				"revision": number().readonly()
			}).readonly(),
			"claims": array(object({
				"claimRef": intersection(string(), unknown()).readonly(),
				"taskRef": intersection(string(), unknown()).readonly(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"owner": intersection(string(), unknown()).readonly(),
				"direction": string().readonly(),
				"normalizedDirection": string().readonly(),
				"state": union([
					literal("active"),
					literal("done"),
					literal("released")
				]).readonly()
			})).readonly(),
			"anchor": object({
				"messageRef": intersection(string(), unknown()).readonly(),
				"channelRef": intersection(string(), unknown()).readonly(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"taskRef": intersection(string(), unknown()).readonly().optional(),
				"sender": intersection(string(), unknown()).readonly(),
				"body": string().readonly(),
				"attachments": union([_undefined(), array(object({
					"attachmentId": intersection(string(), unknown()).readonly(),
					"name": string().readonly(),
					"byteSize": number().readonly(),
					"mediaType": string().readonly()
				}))]).readonly().optional(),
				"topLevel": boolean().readonly(),
				"sequence": number().readonly(),
				"occurredAt": string().readonly()
			}).readonly(),
			"anchorMentions": array(intersection(string(), unknown())).readonly(),
			"facts": array(object({
				"fact": union([object({
					"kind": literal("message").readonly(),
					"sequence": number().readonly(),
					"message": object({
						"messageRef": intersection(string(), unknown()).readonly(),
						"channelRef": intersection(string(), unknown()).readonly(),
						"threadRef": intersection(string(), unknown()).readonly(),
						"taskRef": intersection(string(), unknown()).readonly().optional(),
						"sender": intersection(string(), unknown()).readonly(),
						"body": string().readonly(),
						"attachments": union([_undefined(), array(object({
							"attachmentId": intersection(string(), unknown()).readonly(),
							"name": string().readonly(),
							"byteSize": number().readonly(),
							"mediaType": string().readonly()
						}))]).readonly().optional(),
						"topLevel": boolean().readonly(),
						"sequence": number().readonly(),
						"occurredAt": string().readonly()
					}).readonly(),
					"mentions": array(intersection(string(), unknown())).readonly(),
					"occurredAt": string().readonly()
				}), object({
					"kind": literal("activity").readonly(),
					"sequence": number().readonly(),
					"activity": union([
						object({
							"kind": union([
								literal("accept"),
								literal("close"),
								literal("reopen"),
								literal("promote")
							]).readonly(),
							"releasedClaimRefs": union([_undefined(), array(intersection(string(), unknown()))]).readonly().optional(),
							"completedClaimRefs": union([_undefined(), array(intersection(string(), unknown()))]).readonly().optional(),
							"acceptedClaimRefs": union([_undefined(), array(intersection(string(), unknown()))]).readonly().optional(),
							"activityRef": intersection(string(), unknown()).readonly(),
							"taskRef": intersection(string(), unknown()).readonly(),
							"threadRef": intersection(string(), unknown()).readonly(),
							"actor": intersection(string(), unknown()).readonly(),
							"sequence": number().readonly()
						}),
						object({
							"kind": union([
								literal("done"),
								literal("claim"),
								literal("release")
							]).readonly(),
							"claimRef": intersection(string(), unknown()).readonly(),
							"activityRef": intersection(string(), unknown()).readonly(),
							"taskRef": intersection(string(), unknown()).readonly(),
							"threadRef": intersection(string(), unknown()).readonly(),
							"actor": intersection(string(), unknown()).readonly(),
							"sequence": number().readonly()
						}),
						object({
							"kind": literal("claims_released").readonly(),
							"claimRefs": array(intersection(string(), unknown())).readonly(),
							"activityRef": intersection(string(), unknown()).readonly(),
							"taskRef": intersection(string(), unknown()).readonly(),
							"threadRef": intersection(string(), unknown()).readonly(),
							"actor": intersection(string(), unknown()).readonly(),
							"sequence": number().readonly()
						})
					]).readonly(),
					"occurredAt": string().readonly()
				})]).readonly(),
				"unread": boolean().readonly(),
				"direct": boolean().readonly()
			})).readonly(),
			"readThroughSequence": number().readonly(),
			"remainingUnreadCount": number().readonly(),
			"earlierFactCount": number().readonly().optional(),
			"attention": object({
				"memberId": intersection(string(), unknown()).readonly(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"startSequence": number().readonly(),
				"readThroughSequence": number().readonly()
			}).readonly().optional(),
			"consumedDirectMarkers": array(object({
				"memberId": intersection(string(), unknown()).readonly(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"messageRef": intersection(string(), unknown()).readonly(),
				"sequence": number().readonly()
			})).readonly(),
			"contextAdvice": object({
				"usageTokens": union([_undefined(), number()]).readonly().optional(),
				"taskBoundaryThreshold": union([_undefined(), number()]).readonly().optional(),
				"handoffAt": union([_undefined(), number()]).readonly().optional(),
				"hardLimit": union([_undefined(), number()]).readonly().optional(),
				"action": union([
					literal("unavailable"),
					literal("rollover"),
					literal("keep"),
					literal("handoff-now")
				]).readonly(),
				"guidance": string().readonly()
			}).readonly().optional()
		});
		let _sophialin_dsh_research_team_agentTeam_recoverMember_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_recoverMember_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_recoverMember_parameter_0$schema$value ??= object({
			"requestId": intersection(string(), unknown()).readonly(),
			"workspaceId": intersection(string(), unknown()).readonly(),
			"memberId": intersection(string(), unknown()).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_recoverMember_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_recoverMember_result$schema = () => _sophialin_dsh_research_team_agentTeam_recoverMember_result$schema$value ??= object({ "status": object({
			"member": object({
				"memberId": intersection(string(), unknown()).readonly(),
				"sessionId": intersection(string(), unknown()).readonly(),
				"workspaceId": intersection(string(), unknown()).readonly(),
				"handle": string().readonly(),
				"description": string().readonly(),
				"presetId": string().readonly(),
				"model": union([_undefined(), object({
					"provider": string().readonly(),
					"model": string().readonly(),
					"reasoningEffort": intersection(string(), unknown()).readonly().optional()
				})]).readonly().optional(),
				"capabilities": union([_undefined(), object({
					"tools": union([_undefined(), object({ "allow": array(string()).readonly().optional() })]).readonly().optional(),
					"skills": union([_undefined(), object({ "allow": array(string()).readonly().optional() })]).readonly().optional()
				})]).readonly().optional(),
				"privateMemoryPath": string().readonly(),
				"state": union([
					literal("enabled"),
					literal("suspended"),
					literal("inactive"),
					literal("archived")
				]).readonly()
			}).readonly(),
			"availability": union([
				literal("suspended"),
				literal("inactive"),
				literal("archived"),
				literal("active"),
				literal("unavailable")
			]).readonly(),
			"presence": union([
				literal("unavailable"),
				literal("available"),
				literal("working"),
				literal("error")
			]).readonly(),
			"diagnostic": object({
				"class": union([
					literal("session-refused"),
					literal("session-unreadable"),
					literal("preset-composition"),
					literal("rollover"),
					literal("runtime"),
					literal("activation")
				]).readonly(),
				"detail": string().readonly(),
				"location": object({
					"kind": string().readonly(),
					"path": string().readonly()
				}).readonly().optional(),
				"sessionId": intersection(string(), unknown()).readonly().optional()
			}).readonly().optional(),
			"capabilityWarnings": union([_undefined(), array(object({
				"name": string().readonly(),
				"knownNames": array(string()).readonly()
			}))]).readonly().optional()
		}).readonly() });
		let _sophialin_dsh_research_team_agentTeam_removeChannelMember_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_removeChannelMember_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_removeChannelMember_parameter_0$schema$value ??= object({
			"requestId": intersection(string(), unknown()).readonly(),
			"workspaceId": intersection(string(), unknown()).readonly(),
			"channelRef": intersection(string(), unknown()).readonly(),
			"memberId": intersection(string(), unknown()).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_removeChannelMember_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_removeChannelMember_result$schema = () => _sophialin_dsh_research_team_agentTeam_removeChannelMember_result$schema$value ??= object({
			"receipt": object({
				"operationId": intersection(string(), unknown()).readonly(),
				"requestId": intersection(string(), unknown()).readonly(),
				"sequence": number().readonly(),
				"occurredAt": string().readonly()
			}).readonly(),
			"channelRef": intersection(string(), unknown()).readonly(),
			"memberId": intersection(string(), unknown()).readonly(),
			"releasedClaims": array(object({
				"claimRef": intersection(string(), unknown()).readonly(),
				"taskRef": intersection(string(), unknown()).readonly(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"owner": intersection(string(), unknown()).readonly(),
				"direction": string().readonly(),
				"normalizedDirection": string().readonly(),
				"state": union([
					literal("active"),
					literal("done"),
					literal("released")
				]).readonly()
			})).readonly(),
			"removedAttention": array(object({
				"memberId": intersection(string(), unknown()).readonly(),
				"threadRef": intersection(string(), unknown()).readonly()
			})).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_removeHumanAvatar_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_removeHumanAvatar_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_removeHumanAvatar_parameter_0$schema$value ??= object({ "avatarRef": string().readonly() });
		let _sophialin_dsh_research_team_agentTeam_removeHumanAvatar_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_removeHumanAvatar_result$schema = () => _sophialin_dsh_research_team_agentTeam_removeHumanAvatar_result$schema$value ??= object({ "removed": boolean().readonly() });
		let _sophialin_dsh_research_team_agentTeam_reply_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_reply_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_reply_parameter_0$schema$value ??= object({
			"requestId": intersection(string(), unknown()).readonly(),
			"workspaceId": intersection(string(), unknown()).readonly(),
			"threadRef": intersection(string(), unknown()).readonly().optional(),
			"taskRef": intersection(string(), unknown()).readonly().optional(),
			"body": string().readonly(),
			"baseRevision": number().readonly(),
			"recipients": array(intersection(string(), unknown())).readonly().optional(),
			"attachmentPaths": union([_undefined(), array(string())]).readonly().optional(),
			"attachments": union([_undefined(), array(intersection(string(), unknown()))]).readonly().optional(),
			"confirmationToken": intersection(string(), unknown()).readonly().optional()
		});
		let _sophialin_dsh_research_team_agentTeam_reply_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_reply_result$schema = () => _sophialin_dsh_research_team_agentTeam_reply_result$schema$value ??= union([
			object({
				"kind": literal("unread_required").readonly(),
				"taskRef": intersection(string(), unknown()).readonly().optional(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"revision": number().readonly(),
				"unreadCount": number().readonly(),
				"directCount": number().readonly()
			}),
			object({
				"kind": literal("stale_revision").readonly(),
				"taskRef": intersection(string(), unknown()).readonly().optional(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"expectedRevision": number().readonly(),
				"revision": number().readonly()
			}),
			object({
				"kind": literal("confirmation_required").readonly(),
				"confirmationToken": intersection(string(), unknown()).readonly(),
				"workspaceId": intersection(string(), unknown()).readonly(),
				"channelRef": intersection(string(), unknown()).readonly(),
				"recipients": array(intersection(string(), unknown())).readonly(),
				"taskRef": intersection(string(), unknown()).readonly().optional(),
				"threadRef": intersection(string(), unknown()).readonly().optional(),
				"revision": number().readonly().optional()
			}),
			object({
				"kind": literal("member_not_following").readonly(),
				"memberIds": array(intersection(string(), unknown())).readonly(),
				"workspaceId": intersection(string(), unknown()).readonly(),
				"channelRef": intersection(string(), unknown()).readonly(),
				"taskRef": intersection(string(), unknown()).readonly().optional(),
				"threadRef": intersection(string(), unknown()).readonly().optional(),
				"revision": number().readonly().optional()
			}),
			object({
				"kind": literal("committed").readonly(),
				"receipt": object({
					"operationId": intersection(string(), unknown()).readonly(),
					"requestId": intersection(string(), unknown()).readonly(),
					"sequence": number().readonly(),
					"occurredAt": string().readonly()
				}).readonly(),
				"message": object({
					"messageRef": intersection(string(), unknown()).readonly(),
					"channelRef": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"taskRef": intersection(string(), unknown()).readonly().optional(),
					"sender": intersection(string(), unknown()).readonly(),
					"body": string().readonly(),
					"attachments": union([_undefined(), array(object({
						"attachmentId": intersection(string(), unknown()).readonly(),
						"name": string().readonly(),
						"byteSize": number().readonly(),
						"mediaType": string().readonly()
					}))]).readonly().optional(),
					"topLevel": boolean().readonly(),
					"sequence": number().readonly(),
					"occurredAt": string().readonly()
				}).readonly(),
				"task": object({
					"taskRef": intersection(string(), unknown()).readonly(),
					"channelRef": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"status": union([
						literal("done"),
						literal("todo"),
						literal("in_progress"),
						literal("in_review"),
						literal("closed")
					]).readonly(),
					"resolution": union([
						literal("closed"),
						literal("open"),
						literal("accepted")
					]).readonly()
				}).readonly().optional(),
				"thread": object({
					"threadRef": intersection(string(), unknown()).readonly(),
					"taskRef": intersection(string(), unknown()).readonly().optional(),
					"revision": number().readonly()
				}).readonly(),
				"attention": array(object({
					"memberId": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"startSequence": number().readonly(),
					"readThroughSequence": number().readonly()
				})).readonly(),
				"directMarkers": array(object({
					"memberId": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"messageRef": intersection(string(), unknown()).readonly(),
					"sequence": number().readonly()
				})).readonly(),
				"undeliveredMentions": array(intersection(string(), unknown())).readonly().optional()
			})
		]);
		let _sophialin_dsh_research_team_agentTeam_resolveTaskRefs_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_resolveTaskRefs_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_resolveTaskRefs_parameter_0$schema$value ??= object({
			"workspaceId": intersection(string(), unknown()).readonly(),
			"taskRefs": array(intersection(string(), unknown())).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_resolveTaskRefs_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_resolveTaskRefs_result$schema = () => _sophialin_dsh_research_team_agentTeam_resolveTaskRefs_result$schema$value ??= object({ "resolved": array(object({
			"taskRef": intersection(string(), unknown()).readonly(),
			"channelRef": intersection(string(), unknown()).readonly(),
			"threadRef": intersection(string(), unknown()).readonly(),
			"taskNumber": number().readonly()
		})).readonly() });
		let _sophialin_dsh_research_team_agentTeam_resolveThreadRefs_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_resolveThreadRefs_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_resolveThreadRefs_parameter_0$schema$value ??= object({
			"workspaceId": intersection(string(), unknown()).readonly(),
			"threadRefs": array(intersection(string(), unknown())).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_resolveThreadRefs_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_resolveThreadRefs_result$schema = () => _sophialin_dsh_research_team_agentTeam_resolveThreadRefs_result$schema$value ??= object({ "resolved": array(object({
			"threadRef": intersection(string(), unknown()).readonly(),
			"channelRef": intersection(string(), unknown()).readonly(),
			"taskRef": intersection(string(), unknown()).readonly().optional(),
			"taskNumber": number().readonly().optional(),
			"title": string().readonly()
		})).readonly() });
		let _sophialin_dsh_research_team_agentTeam_sendMessage_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_sendMessage_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_sendMessage_parameter_0$schema$value ??= object({
			"requestId": intersection(string(), unknown()).readonly(),
			"workspaceId": intersection(string(), unknown()).readonly(),
			"channelRef": intersection(string(), unknown()).readonly(),
			"body": string().readonly(),
			"recipients": array(intersection(string(), unknown())).readonly().optional(),
			"attachments": union([_undefined(), array(intersection(string(), unknown()))]).readonly().optional(),
			"attachmentPaths": union([_undefined(), array(string())]).readonly().optional(),
			"confirmationToken": intersection(string(), unknown()).readonly().optional(),
			"asTask": boolean().readonly().optional()
		});
		let _sophialin_dsh_research_team_agentTeam_sendMessage_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_sendMessage_result$schema = () => _sophialin_dsh_research_team_agentTeam_sendMessage_result$schema$value ??= union([
			object({
				"kind": literal("committed").readonly(),
				"receipt": object({
					"operationId": intersection(string(), unknown()).readonly(),
					"requestId": intersection(string(), unknown()).readonly(),
					"sequence": number().readonly(),
					"occurredAt": string().readonly()
				}).readonly(),
				"message": object({
					"messageRef": intersection(string(), unknown()).readonly(),
					"channelRef": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"taskRef": intersection(string(), unknown()).readonly().optional(),
					"sender": intersection(string(), unknown()).readonly(),
					"body": string().readonly(),
					"attachments": union([_undefined(), array(object({
						"attachmentId": intersection(string(), unknown()).readonly(),
						"name": string().readonly(),
						"byteSize": number().readonly(),
						"mediaType": string().readonly()
					}))]).readonly().optional(),
					"topLevel": boolean().readonly(),
					"sequence": number().readonly(),
					"occurredAt": string().readonly()
				}).readonly(),
				"task": object({
					"taskRef": intersection(string(), unknown()).readonly(),
					"channelRef": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"status": union([
						literal("done"),
						literal("todo"),
						literal("in_progress"),
						literal("in_review"),
						literal("closed")
					]).readonly(),
					"resolution": union([
						literal("closed"),
						literal("open"),
						literal("accepted")
					]).readonly()
				}).readonly().optional(),
				"thread": object({
					"threadRef": intersection(string(), unknown()).readonly(),
					"taskRef": intersection(string(), unknown()).readonly().optional(),
					"revision": number().readonly()
				}).readonly(),
				"attention": array(object({
					"memberId": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"startSequence": number().readonly(),
					"readThroughSequence": number().readonly()
				})).readonly(),
				"directMarkers": array(object({
					"memberId": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"messageRef": intersection(string(), unknown()).readonly(),
					"sequence": number().readonly()
				})).readonly()
			}),
			object({
				"kind": literal("confirmation_required").readonly(),
				"confirmationToken": intersection(string(), unknown()).readonly(),
				"workspaceId": intersection(string(), unknown()).readonly(),
				"channelRef": intersection(string(), unknown()).readonly(),
				"recipients": array(intersection(string(), unknown())).readonly(),
				"taskRef": intersection(string(), unknown()).readonly().optional(),
				"threadRef": intersection(string(), unknown()).readonly().optional(),
				"revision": number().readonly().optional()
			}),
			object({
				"kind": literal("member_not_following").readonly(),
				"memberIds": array(intersection(string(), unknown())).readonly(),
				"workspaceId": intersection(string(), unknown()).readonly(),
				"channelRef": intersection(string(), unknown()).readonly(),
				"taskRef": intersection(string(), unknown()).readonly().optional(),
				"threadRef": intersection(string(), unknown()).readonly().optional(),
				"revision": number().readonly().optional()
			})
		]);
		let _sophialin_dsh_research_team_agentTeam_setHumanProfile_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_setHumanProfile_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_setHumanProfile_parameter_0$schema$value ??= object({
			"name": union([_undefined(), string()]).readonly().optional(),
			"avatarRef": union([
				_undefined(),
				literal(null),
				string()
			]).readonly().optional()
		});
		let _sophialin_dsh_research_team_agentTeam_setHumanProfile_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_setHumanProfile_result$schema = () => _sophialin_dsh_research_team_agentTeam_setHumanProfile_result$schema$value ??= object({
			"name": string().readonly(),
			"avatarRef": union([_undefined(), string()]).readonly().optional()
		});
		let _sophialin_dsh_research_team_agentTeam_threadHistory_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_threadHistory_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_threadHistory_parameter_0$schema$value ??= object({
			"workspaceId": intersection(string(), unknown()).readonly(),
			"threadRef": intersection(string(), unknown()).readonly().optional(),
			"taskRef": intersection(string(), unknown()).readonly().optional(),
			"beforeSequence": number().readonly().optional(),
			"limit": number().readonly().optional()
		});
		let _sophialin_dsh_research_team_agentTeam_threadHistory_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_threadHistory_result$schema = () => _sophialin_dsh_research_team_agentTeam_threadHistory_result$schema$value ??= object({
			"task": object({
				"taskRef": intersection(string(), unknown()).readonly(),
				"channelRef": intersection(string(), unknown()).readonly(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"status": union([
					literal("done"),
					literal("todo"),
					literal("in_progress"),
					literal("in_review"),
					literal("closed")
				]).readonly(),
				"resolution": union([
					literal("closed"),
					literal("open"),
					literal("accepted")
				]).readonly()
			}).readonly().optional(),
			"thread": object({
				"threadRef": intersection(string(), unknown()).readonly(),
				"taskRef": intersection(string(), unknown()).readonly().optional(),
				"revision": number().readonly()
			}).readonly(),
			"anchor": object({
				"messageRef": intersection(string(), unknown()).readonly(),
				"channelRef": intersection(string(), unknown()).readonly(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"taskRef": intersection(string(), unknown()).readonly().optional(),
				"sender": intersection(string(), unknown()).readonly(),
				"body": string().readonly(),
				"attachments": union([_undefined(), array(object({
					"attachmentId": intersection(string(), unknown()).readonly(),
					"name": string().readonly(),
					"byteSize": number().readonly(),
					"mediaType": string().readonly()
				}))]).readonly().optional(),
				"topLevel": boolean().readonly(),
				"sequence": number().readonly(),
				"occurredAt": string().readonly()
			}).readonly(),
			"anchorMentions": array(intersection(string(), unknown())).readonly(),
			"claims": array(object({
				"claimRef": intersection(string(), unknown()).readonly(),
				"taskRef": intersection(string(), unknown()).readonly(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"owner": intersection(string(), unknown()).readonly(),
				"direction": string().readonly(),
				"normalizedDirection": string().readonly(),
				"state": union([
					literal("active"),
					literal("done"),
					literal("released")
				]).readonly()
			})).readonly(),
			"facts": array(union([object({
				"kind": literal("message").readonly(),
				"sequence": number().readonly(),
				"message": object({
					"messageRef": intersection(string(), unknown()).readonly(),
					"channelRef": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"taskRef": intersection(string(), unknown()).readonly().optional(),
					"sender": intersection(string(), unknown()).readonly(),
					"body": string().readonly(),
					"attachments": union([_undefined(), array(object({
						"attachmentId": intersection(string(), unknown()).readonly(),
						"name": string().readonly(),
						"byteSize": number().readonly(),
						"mediaType": string().readonly()
					}))]).readonly().optional(),
					"topLevel": boolean().readonly(),
					"sequence": number().readonly(),
					"occurredAt": string().readonly()
				}).readonly(),
				"mentions": array(intersection(string(), unknown())).readonly(),
				"occurredAt": string().readonly()
			}), object({
				"kind": literal("activity").readonly(),
				"sequence": number().readonly(),
				"activity": union([
					object({
						"kind": union([
							literal("accept"),
							literal("close"),
							literal("reopen"),
							literal("promote")
						]).readonly(),
						"releasedClaimRefs": union([_undefined(), array(intersection(string(), unknown()))]).readonly().optional(),
						"completedClaimRefs": union([_undefined(), array(intersection(string(), unknown()))]).readonly().optional(),
						"acceptedClaimRefs": union([_undefined(), array(intersection(string(), unknown()))]).readonly().optional(),
						"activityRef": intersection(string(), unknown()).readonly(),
						"taskRef": intersection(string(), unknown()).readonly(),
						"threadRef": intersection(string(), unknown()).readonly(),
						"actor": intersection(string(), unknown()).readonly(),
						"sequence": number().readonly()
					}),
					object({
						"kind": union([
							literal("done"),
							literal("claim"),
							literal("release")
						]).readonly(),
						"claimRef": intersection(string(), unknown()).readonly(),
						"activityRef": intersection(string(), unknown()).readonly(),
						"taskRef": intersection(string(), unknown()).readonly(),
						"threadRef": intersection(string(), unknown()).readonly(),
						"actor": intersection(string(), unknown()).readonly(),
						"sequence": number().readonly()
					}),
					object({
						"kind": literal("claims_released").readonly(),
						"claimRefs": array(intersection(string(), unknown())).readonly(),
						"activityRef": intersection(string(), unknown()).readonly(),
						"taskRef": intersection(string(), unknown()).readonly(),
						"threadRef": intersection(string(), unknown()).readonly(),
						"actor": intersection(string(), unknown()).readonly(),
						"sequence": number().readonly()
					})
				]).readonly(),
				"occurredAt": string().readonly()
			})])).readonly(),
			"cursor": number().readonly(),
			"hasMore": boolean().readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_threadObservations_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_threadObservations_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_threadObservations_parameter_0$schema$value ??= object({
			"workspaceId": intersection(string(), unknown()).readonly(),
			"threadRef": intersection(string(), unknown()).readonly().optional(),
			"taskRef": intersection(string(), unknown()).readonly().optional(),
			"limit": number().readonly().optional()
		});
		let _sophialin_dsh_research_team_agentTeam_threadObservations_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_threadObservations_result$schema = () => _sophialin_dsh_research_team_agentTeam_threadObservations_result$schema$value ??= object({
			"items": array(object({
				"sequence": number().readonly(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"taskRef": intersection(string(), unknown()).readonly().optional(),
				"memberId": intersection(string(), unknown()).readonly(),
				"action": union([literal("follow"), literal("unfollow")]).readonly()
			})).readonly(),
			"followers": array(intersection(string(), unknown())).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_updateChannel_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_updateChannel_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_updateChannel_parameter_0$schema$value ??= object({
			"requestId": intersection(string(), unknown()).readonly(),
			"workspaceId": intersection(string(), unknown()).readonly(),
			"channelRef": intersection(string(), unknown()).readonly(),
			"name": string().readonly(),
			"description": string().readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_updateChannel_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_updateChannel_result$schema = () => _sophialin_dsh_research_team_agentTeam_updateChannel_result$schema$value ??= object({
			"receipt": object({
				"operationId": intersection(string(), unknown()).readonly(),
				"requestId": intersection(string(), unknown()).readonly(),
				"sequence": number().readonly(),
				"occurredAt": string().readonly()
			}).readonly(),
			"channel": object({
				"channelRef": intersection(string(), unknown()).readonly(),
				"workspaceId": intersection(string(), unknown()).readonly(),
				"name": string().readonly(),
				"description": string().readonly(),
				"createdAtSequence": number().readonly(),
				"state": union([literal("archived"), literal("active")]).readonly()
			}).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_updateMember_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_updateMember_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_updateMember_parameter_0$schema$value ??= object({
			"requestId": intersection(string(), unknown()).readonly(),
			"memberId": intersection(string(), unknown()).readonly(),
			"handle": string().readonly(),
			"description": string().readonly(),
			"model": object({
				"provider": string().readonly(),
				"model": string().readonly(),
				"reasoningEffort": intersection(string(), unknown()).readonly().optional()
			}).readonly().optional(),
			"capabilities": object({
				"tools": union([_undefined(), object({ "allow": array(string()).readonly().optional() })]).readonly().optional(),
				"skills": union([_undefined(), object({ "allow": array(string()).readonly().optional() })]).readonly().optional()
			}).readonly().optional()
		});
		let _sophialin_dsh_research_team_agentTeam_updateMember_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_updateMember_result$schema = () => _sophialin_dsh_research_team_agentTeam_updateMember_result$schema$value ??= object({
			"receipt": object({
				"operationId": intersection(string(), unknown()).readonly(),
				"requestId": intersection(string(), unknown()).readonly(),
				"sequence": number().readonly(),
				"occurredAt": string().readonly()
			}).readonly(),
			"status": object({
				"member": object({
					"memberId": intersection(string(), unknown()).readonly(),
					"sessionId": intersection(string(), unknown()).readonly(),
					"workspaceId": intersection(string(), unknown()).readonly(),
					"handle": string().readonly(),
					"description": string().readonly(),
					"presetId": string().readonly(),
					"model": union([_undefined(), object({
						"provider": string().readonly(),
						"model": string().readonly(),
						"reasoningEffort": intersection(string(), unknown()).readonly().optional()
					})]).readonly().optional(),
					"capabilities": union([_undefined(), object({
						"tools": union([_undefined(), object({ "allow": array(string()).readonly().optional() })]).readonly().optional(),
						"skills": union([_undefined(), object({ "allow": array(string()).readonly().optional() })]).readonly().optional()
					})]).readonly().optional(),
					"privateMemoryPath": string().readonly(),
					"state": union([
						literal("enabled"),
						literal("suspended"),
						literal("inactive"),
						literal("archived")
					]).readonly()
				}).readonly(),
				"availability": union([
					literal("suspended"),
					literal("inactive"),
					literal("archived"),
					literal("active"),
					literal("unavailable")
				]).readonly(),
				"presence": union([
					literal("unavailable"),
					literal("available"),
					literal("working"),
					literal("error")
				]).readonly(),
				"diagnostic": object({
					"class": union([
						literal("session-refused"),
						literal("session-unreadable"),
						literal("preset-composition"),
						literal("rollover"),
						literal("runtime"),
						literal("activation")
					]).readonly(),
					"detail": string().readonly(),
					"location": object({
						"kind": string().readonly(),
						"path": string().readonly()
					}).readonly().optional(),
					"sessionId": intersection(string(), unknown()).readonly().optional()
				}).readonly().optional(),
				"capabilityWarnings": union([_undefined(), array(object({
					"name": string().readonly(),
					"knownNames": array(string()).readonly()
				}))]).readonly().optional()
			}).readonly()
		});
		let _sophialin_dsh_research_team_agentTeam_view_parameter_0$schema$value;
		const _sophialin_dsh_research_team_agentTeam_view_parameter_0$schema = () => _sophialin_dsh_research_team_agentTeam_view_parameter_0$schema$value ??= object({
			"workspaceId": intersection(string(), unknown()).readonly(),
			"channelRef": intersection(string(), unknown()).readonly().optional(),
			"threadRef": intersection(string(), unknown()).readonly().optional(),
			"limit": number().readonly().optional(),
			"cursor": number().readonly().optional(),
			"direction": union([literal("after"), literal("before")]).readonly().optional(),
			"topLevelOnly": boolean().readonly().optional(),
			"includeActivities": boolean().readonly().optional()
		});
		let _sophialin_dsh_research_team_agentTeam_view_result$schema$value;
		const _sophialin_dsh_research_team_agentTeam_view_result$schema = () => _sophialin_dsh_research_team_agentTeam_view_result$schema$value ??= object({
			"humanMemberId": intersection(string(), unknown()).readonly(),
			"workspaces": array(object({
				"workspaceId": intersection(string(), unknown()).readonly(),
				"title": union([_undefined(), string()]).readonly().optional(),
				"default": boolean().readonly()
			})).readonly(),
			"channels": array(object({
				"channelRef": intersection(string(), unknown()).readonly(),
				"workspaceId": intersection(string(), unknown()).readonly(),
				"name": string().readonly(),
				"description": string().readonly(),
				"createdAtSequence": number().readonly(),
				"state": union([literal("archived"), literal("active")]).readonly()
			})).readonly(),
			"members": array(object({
				"channelRef": intersection(string(), unknown()).readonly(),
				"memberId": intersection(string(), unknown()).readonly()
			})).readonly(),
			"tasks": array(object({
				"taskRef": intersection(string(), unknown()).readonly(),
				"channelRef": intersection(string(), unknown()).readonly(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"status": union([
					literal("done"),
					literal("todo"),
					literal("in_progress"),
					literal("in_review"),
					literal("closed")
				]).readonly(),
				"resolution": union([
					literal("closed"),
					literal("open"),
					literal("accepted")
				]).readonly()
			})).readonly(),
			"threads": array(object({
				"threadRef": intersection(string(), unknown()).readonly(),
				"taskRef": intersection(string(), unknown()).readonly().optional(),
				"revision": number().readonly()
			})).readonly(),
			"taskNumbers": array(object({
				"taskRef": intersection(string(), unknown()).readonly(),
				"taskNumber": number().readonly()
			})).readonly(),
			"items": array(object({
				"message": object({
					"messageRef": intersection(string(), unknown()).readonly(),
					"channelRef": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"taskRef": intersection(string(), unknown()).readonly().optional(),
					"sender": intersection(string(), unknown()).readonly(),
					"body": string().readonly(),
					"attachments": union([_undefined(), array(object({
						"attachmentId": intersection(string(), unknown()).readonly(),
						"name": string().readonly(),
						"byteSize": number().readonly(),
						"mediaType": string().readonly()
					}))]).readonly().optional(),
					"topLevel": boolean().readonly(),
					"sequence": number().readonly(),
					"occurredAt": string().readonly()
				}).readonly(),
				"mentions": array(intersection(string(), unknown())).readonly(),
				"task": object({
					"taskRef": intersection(string(), unknown()).readonly(),
					"channelRef": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"status": union([
						literal("done"),
						literal("todo"),
						literal("in_progress"),
						literal("in_review"),
						literal("closed")
					]).readonly(),
					"resolution": union([
						literal("closed"),
						literal("open"),
						literal("accepted")
					]).readonly()
				}).readonly().optional(),
				"thread": object({
					"threadRef": intersection(string(), unknown()).readonly(),
					"taskRef": intersection(string(), unknown()).readonly().optional(),
					"revision": number().readonly()
				}).readonly(),
				"taskNumber": number().readonly().optional(),
				"claimOwners": array(object({
					"memberId": intersection(string(), unknown()).readonly(),
					"name": string().readonly()
				})).readonly(),
				"messageCount": number().readonly(),
				"lastActivityAt": string().readonly()
			})).readonly(),
			"activeTaskThreads": array(object({
				"taskRef": intersection(string(), unknown()).readonly(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"channelRef": intersection(string(), unknown()).readonly(),
				"taskNumber": number().readonly().optional(),
				"status": union([
					literal("done"),
					literal("todo"),
					literal("in_progress"),
					literal("in_review"),
					literal("closed")
				]).readonly(),
				"subject": string().readonly(),
				"members": array(object({
					"memberId": intersection(string(), unknown()).readonly(),
					"name": string().readonly()
				})).readonly(),
				"lastActivityAt": string().readonly()
			})).readonly(),
			"claims": array(object({
				"claimRef": intersection(string(), unknown()).readonly(),
				"taskRef": intersection(string(), unknown()).readonly(),
				"threadRef": intersection(string(), unknown()).readonly(),
				"owner": intersection(string(), unknown()).readonly(),
				"direction": string().readonly(),
				"normalizedDirection": string().readonly(),
				"state": union([
					literal("active"),
					literal("done"),
					literal("released")
				]).readonly()
			})).readonly(),
			"activities": array(union([
				object({
					"kind": union([
						literal("accept"),
						literal("close"),
						literal("reopen"),
						literal("promote")
					]).readonly(),
					"releasedClaimRefs": union([_undefined(), array(intersection(string(), unknown()))]).readonly().optional(),
					"completedClaimRefs": union([_undefined(), array(intersection(string(), unknown()))]).readonly().optional(),
					"acceptedClaimRefs": union([_undefined(), array(intersection(string(), unknown()))]).readonly().optional(),
					"activityRef": intersection(string(), unknown()).readonly(),
					"taskRef": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"actor": intersection(string(), unknown()).readonly(),
					"sequence": number().readonly()
				}),
				object({
					"kind": union([
						literal("done"),
						literal("claim"),
						literal("release")
					]).readonly(),
					"claimRef": intersection(string(), unknown()).readonly(),
					"activityRef": intersection(string(), unknown()).readonly(),
					"taskRef": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"actor": intersection(string(), unknown()).readonly(),
					"sequence": number().readonly()
				}),
				object({
					"kind": literal("claims_released").readonly(),
					"claimRefs": array(intersection(string(), unknown())).readonly(),
					"activityRef": intersection(string(), unknown()).readonly(),
					"taskRef": intersection(string(), unknown()).readonly(),
					"threadRef": intersection(string(), unknown()).readonly(),
					"actor": intersection(string(), unknown()).readonly(),
					"sequence": number().readonly()
				})
			])).readonly(),
			"cursor": number().readonly(),
			"hasMore": boolean().readonly()
		});
		const TYPERT_REMOTE = {
			package: "@sophialin/dsh-research-team",
			descriptors: [
				{
					id: "@sophialin/dsh-research-team#agentTeam/addMember",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "addMember",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamAddMemberRequest",
							create: _sophialin_dsh_research_team_agentTeam_addMember_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamAddMemberResult",
						create: _sophialin_dsh_research_team_agentTeam_addMember_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 920,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/archiveChannel",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "archiveChannel",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamArchiveChannelRequest",
							create: _sophialin_dsh_research_team_agentTeam_archiveChannel_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamArchiveChannelResult",
						create: _sophialin_dsh_research_team_agentTeam_archiveChannel_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 910,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/archiveMember",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "archiveMember",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamArchiveMemberRequest",
							create: _sophialin_dsh_research_team_agentTeam_archiveMember_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamArchiveMemberResult",
						create: _sophialin_dsh_research_team_agentTeam_archiveMember_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1427,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/changeAttention",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "changeAttention",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamThreadAttentionRequest",
							create: _sophialin_dsh_research_team_agentTeam_changeAttention_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamThreadAttentionResult",
						create: _sophialin_dsh_research_team_agentTeam_changeAttention_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1690,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/changes",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "changes",
					mode: "stream",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamChangesRequest",
							create: _sophialin_dsh_research_team_agentTeam_changes_parameter_0$schema
						}
					}],
					cancellation: { parameter: "signal" },
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamChangesResult",
						create: _sophialin_dsh_research_team_agentTeam_changes_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 843,
						"column": 11
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/changeTask",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "changeTask",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamTaskRequest",
							create: _sophialin_dsh_research_team_agentTeam_changeTask_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamTaskResult",
						create: _sophialin_dsh_research_team_agentTeam_changeTask_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1438,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/clearMemberContext",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "clearMemberContext",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamClearMemberContextRequest",
							create: _sophialin_dsh_research_team_agentTeam_clearMemberContext_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamClearMemberContextResult",
						create: _sophialin_dsh_research_team_agentTeam_clearMemberContext_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1055,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/createChannel",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "createChannel",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamCreateChannelRequest",
							create: _sophialin_dsh_research_team_agentTeam_createChannel_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamCreateChannelResult",
						create: _sophialin_dsh_research_team_agentTeam_createChannel_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 883,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/environment",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "environment",
					implementation: "environmentForClient",
					invocation: { kind: "direct" },
					parameters: [{
						name: "_request",
						wire: "_request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamEnvironmentRequest",
							create: _sophialin_dsh_research_team_agentTeam_environment_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamEnvironmentResult",
						create: _sophialin_dsh_research_team_agentTeam_environment_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1597,
						"column": 3
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/getAttachment",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "getAttachment",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamGetAttachmentRequest",
							create: _sophialin_dsh_research_team_agentTeam_getAttachment_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamGetAttachmentResult",
						create: _sophialin_dsh_research_team_agentTeam_getAttachment_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1565,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/getHumanAvatar",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "getHumanAvatar",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamGetHumanAvatarRequest",
							create: _sophialin_dsh_research_team_agentTeam_getHumanAvatar_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamGetHumanAvatarResult",
						create: _sophialin_dsh_research_team_agentTeam_getHumanAvatar_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1630,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/humanProfile",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "humanProfile",
					implementation: "humanProfileForClient",
					invocation: { kind: "direct" },
					parameters: [{
						name: "_request",
						wire: "_request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamHumanProfileRequest",
							create: _sophialin_dsh_research_team_agentTeam_humanProfile_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamHumanProfileResult",
						create: _sophialin_dsh_research_team_agentTeam_humanProfile_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1602,
						"column": 3
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/inbox",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "inbox",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamInboxRequest",
							create: _sophialin_dsh_research_team_agentTeam_inbox_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamInbox",
						create: _sophialin_dsh_research_team_agentTeam_inbox_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1699,
						"column": 3
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/joinChannel",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "joinChannel",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamJoinChannelRequest",
							create: _sophialin_dsh_research_team_agentTeam_joinChannel_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamJoinChannelResult",
						create: _sophialin_dsh_research_team_agentTeam_joinChannel_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1458,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/joinWorkspace",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "joinWorkspace",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamJoinWorkspaceRequest",
							create: _sophialin_dsh_research_team_agentTeam_joinWorkspace_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamJoinWorkspaceResult",
						create: _sophialin_dsh_research_team_agentTeam_joinWorkspace_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1478,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/leaveWorkspace",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "leaveWorkspace",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamLeaveWorkspaceRequest",
							create: _sophialin_dsh_research_team_agentTeam_leaveWorkspace_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamLeaveWorkspaceResult",
						create: _sophialin_dsh_research_team_agentTeam_leaveWorkspace_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1487,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/members",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "members",
					implementation: "membersForClient",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamMembersRequest",
							create: _sophialin_dsh_research_team_agentTeam_members_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team#agentTeam/members:result",
						create: _sophialin_dsh_research_team_agentTeam_members_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 833,
						"column": 3
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/promoteThread",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "promoteThread",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamPromoteThreadRequest",
							create: _sophialin_dsh_research_team_agentTeam_promoteThread_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamPromoteThreadResult",
						create: _sophialin_dsh_research_team_agentTeam_promoteThread_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1448,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/putAttachment",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "putAttachment",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamPutAttachmentRequest",
							create: _sophialin_dsh_research_team_agentTeam_putAttachment_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamPutAttachmentResult",
						create: _sophialin_dsh_research_team_agentTeam_putAttachment_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1548,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/putHumanAvatar",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "putHumanAvatar",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamPutHumanAvatarRequest",
							create: _sophialin_dsh_research_team_agentTeam_putHumanAvatar_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamPutHumanAvatarResult",
						create: _sophialin_dsh_research_team_agentTeam_putHumanAvatar_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1622,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/readThread",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "readThread",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamThreadReadRequest",
							create: _sophialin_dsh_research_team_agentTeam_readThread_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamThreadReadResult",
						create: _sophialin_dsh_research_team_agentTeam_readThread_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1706,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/recoverMember",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "recoverMember",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamRecoverMemberRequest",
							create: _sophialin_dsh_research_team_agentTeam_recoverMember_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamRecoverMemberResult",
						create: _sophialin_dsh_research_team_agentTeam_recoverMember_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 985,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/removeChannelMember",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "removeChannelMember",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamRemoveChannelMemberRequest",
							create: _sophialin_dsh_research_team_agentTeam_removeChannelMember_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamRemoveChannelMemberResult",
						create: _sophialin_dsh_research_team_agentTeam_removeChannelMember_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1469,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/removeHumanAvatar",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "removeHumanAvatar",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamRemoveHumanAvatarRequest",
							create: _sophialin_dsh_research_team_agentTeam_removeHumanAvatar_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamRemoveHumanAvatarResult",
						create: _sophialin_dsh_research_team_agentTeam_removeHumanAvatar_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1638,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/reply",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "reply",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamReplyRequest",
							create: _sophialin_dsh_research_team_agentTeam_reply_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamReplyResult",
						create: _sophialin_dsh_research_team_agentTeam_reply_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1684,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/resolveTaskRefs",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "resolveTaskRefs",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamResolveTaskRefsRequest",
							create: _sophialin_dsh_research_team_agentTeam_resolveTaskRefs_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamResolveTaskRefsResult",
						create: _sophialin_dsh_research_team_agentTeam_resolveTaskRefs_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 807,
						"column": 3
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/resolveThreadRefs",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "resolveThreadRefs",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamResolveThreadRefsRequest",
							create: _sophialin_dsh_research_team_agentTeam_resolveThreadRefs_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamResolveThreadRefsResult",
						create: _sophialin_dsh_research_team_agentTeam_resolveThreadRefs_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 820,
						"column": 3
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/sendMessage",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "sendMessage",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamSendMessageRequest",
							create: _sophialin_dsh_research_team_agentTeam_sendMessage_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamSendMessageResult",
						create: _sophialin_dsh_research_team_agentTeam_sendMessage_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1496,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/setHumanProfile",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "setHumanProfile",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamSetHumanProfileRequest",
							create: _sophialin_dsh_research_team_agentTeam_setHumanProfile_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamSetHumanProfileResult",
						create: _sophialin_dsh_research_team_agentTeam_setHumanProfile_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1660,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/threadHistory",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "threadHistory",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamThreadHistoryRequest",
							create: _sophialin_dsh_research_team_agentTeam_threadHistory_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamThreadHistory",
						create: _sophialin_dsh_research_team_agentTeam_threadHistory_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1724,
						"column": 3
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/threadObservations",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "threadObservations",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamThreadObservationsRequest",
							create: _sophialin_dsh_research_team_agentTeam_threadObservations_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamThreadObservations",
						create: _sophialin_dsh_research_team_agentTeam_threadObservations_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1717,
						"column": 3
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/updateChannel",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "updateChannel",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamUpdateChannelRequest",
							create: _sophialin_dsh_research_team_agentTeam_updateChannel_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamUpdateChannelResult",
						create: _sophialin_dsh_research_team_agentTeam_updateChannel_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 895,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/updateMember",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "updateMember",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamUpdateMemberRequest",
							create: _sophialin_dsh_research_team_agentTeam_updateMember_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamMemberResult",
						create: _sophialin_dsh_research_team_agentTeam_updateMember_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1368,
						"column": 9
					}
				},
				{
					id: "@sophialin/dsh-research-team#agentTeam/view",
					service: "agentTeam",
					namespace: "agentTeam",
					method: "view",
					invocation: { kind: "direct" },
					parameters: [{
						name: "request",
						wire: "request",
						source: "json",
						codec: {
							mode: "strict",
							typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamViewRequest",
							create: _sophialin_dsh_research_team_agentTeam_view_parameter_0$schema
						}
					}],
					result: {
						mode: "strict",
						typeSymbol: "@sophialin/dsh-research-team/types#AgentTeamView",
						create: _sophialin_dsh_research_team_agentTeam_view_result$schema
					},
					sourceLocation: {
						"file": "packages/external-agent-team-oSfxNf/src/index.ts",
						"line": 1731,
						"column": 3
					}
				}
			]
		};
		//#endregion
		//#region src/client/human-identity.ts
		const INITIAL$1 = {
			status: "loading",
			updateAvailable: false
		};
		var TeamHumanIdentity = class {
			snapshot = INITIAL$1;
			listeners = /* @__PURE__ */ new Set();
			reading;
			loader;
			constructor(loader) {
				this.loader = loader;
			}
			getSnapshot = () => this.snapshot;
			/**
			* Observe the identity, starting the first read when nobody has read yet.
			* @param listener - invoked after every snapshot replacement.
			* @returns the disposer removing this listener.
			*/
			subscribe = (listener) => {
				this.listeners.add(listener);
				if (this.snapshot.status === "loading" && this.reading === void 0) this.refresh();
				return () => {
					this.listeners.delete(listener);
				};
			};
			/**
			* Re-read the Host projection. Concurrent callers share one round trip, and a
			* failed refresh keeps the last accepted value beside the reported error —
			* the seats never blank out because a background read failed.
			* @returns settlement of this read (or of the read already in flight).
			*/
			refresh() {
				if (this.reading !== void 0) return this.reading;
				const reading = this.read().finally(() => {
					if (this.reading === reading) this.reading = void 0;
				});
				this.reading = reading;
				return reading;
			}
			dispose() {
				this.listeners.clear();
			}
			async read() {
				let profile;
				try {
					const result = await this.loader.loadProfile();
					if (!result.ok) {
						this.fail(result.error.message);
						return;
					}
					profile = result.value;
				} catch (error) {
					this.fail(error instanceof Error ? error.message : String(error));
					return;
				}
				const avatarUrl = profile.avatarRef === void 0 ? void 0 : profile.avatarRef === this.snapshot.avatarRef && this.snapshot.avatarUrl !== void 0 ? this.snapshot.avatarUrl : await this.loader.loadAvatarUrl(profile.avatarRef) ?? void 0;
				this.commit({
					status: "ready",
					name: profile.name,
					...profile.avatarRef === void 0 ? {} : { avatarRef: profile.avatarRef },
					...avatarUrl === void 0 ? {} : { avatarUrl },
					version: profile.version,
					repoUrl: profile.repoUrl,
					updateAvailable: profile.updateAvailable,
					...profile.latestVersion === void 0 ? {} : { latestVersion: profile.latestVersion }
				});
			}
			/**
			* Record one read failure. A value that was already accepted stays on screen
			* (the seats never blank out over a background read), and only an identity
			* that never loaded becomes `unavailable` — the state that offers a retry.
			*/
			fail(message) {
				const held = this.snapshot;
				this.commit(held.name === void 0 ? {
					...held,
					status: "unavailable",
					error: message
				} : {
					...held,
					status: "ready",
					error: message
				});
			}
			commit(snapshot) {
				this.snapshot = snapshot;
				for (const listener of this.listeners) listener();
			}
		};
		/** Subscribe one rendered seat to the identity. */
		function useHumanIdentity(identity) {
			return (0, react.useSyncExternalStore)(identity.subscribe, identity.getSnapshot, identity.getSnapshot);
		}
		//#endregion
		//#region src/client/environment-check.ts
		const INITIAL = { status: "loading" };
		var TeamEnvironmentCheck = class {
			snapshot = INITIAL;
			listeners = /* @__PURE__ */ new Set();
			reading;
			loader;
			constructor(loader) {
				this.loader = loader;
			}
			getSnapshot = () => this.snapshot;
			/**
			* Observe the check, starting the first read when nobody has read yet.
			* @param listener - invoked after every snapshot replacement.
			* @returns the disposer removing this listener.
			*/
			subscribe = (listener) => {
				this.listeners.add(listener);
				if (this.snapshot.status === "loading" && this.reading === void 0) this.refresh();
				return () => {
					this.listeners.delete(listener);
				};
			};
			/**
			* Read the Host projection. Concurrent callers share one round trip, and a
			* failed read keeps the last accepted report — the block never blanks out
			* over a background read.
			* @returns settlement of this read (or of the read already in flight).
			*/
			refresh() {
				if (this.reading !== void 0) return this.reading;
				const reading = this.read().finally(() => {
					if (this.reading === reading) this.reading = void 0;
				});
				this.reading = reading;
				return reading;
			}
			dispose() {
				this.listeners.clear();
			}
			async read() {
				let report;
				try {
					const result = await this.loader.loadEnvironment();
					if (!result.ok) {
						this.fail();
						return;
					}
					report = result.value;
				} catch {
					this.fail();
					return;
				}
				this.commit({
					status: "ready",
					report
				});
			}
			/**
			* Settle a read that produced no report, so a reader stops waiting on a
			* `loading` that will never finish. A report that already stands is left
			* untouched: a failed background read never blanks the block.
			*/
			fail() {
				if (this.snapshot.report === void 0) this.commit({ status: "ready" });
			}
			commit(snapshot) {
				this.snapshot = snapshot;
				for (const listener of this.listeners) listener();
			}
		};
		/** Subscribe one rendered block to the environment check. */
		function useEnvironmentCheck(environment) {
			return (0, react.useSyncExternalStore)(environment.subscribe, environment.getSnapshot, environment.getSnapshot);
		}
		//#endregion
		//#region \0dsh-css:C:\Sophia\科研\AI科研助手开发\dsh-research-team\packages\client-agent-team\src\client\environment-check.module.css.mjs
		const css$15 = ".hlWGIa_block{align-items:flex-start;gap:8px;display:flex}.hlWGIa_icon{color:var(--dsw-alias-label-tertiary);flex:none;width:16px;height:16px;margin-top:2px}.hlWGIa_body{flex-direction:column;gap:4px;min-width:0;display:flex}.hlWGIa_title{color:var(--dsw-alias-label-secondary);margin:0;font-size:13px;line-height:20px}.hlWGIa_detail{color:var(--dsw-alias-label-tertiary);margin:0;font-size:12px;line-height:18px}.hlWGIa_action{margin:2px 0 0;font-size:12px;line-height:18px}.hlWGIa_link{color:var(--dsw-alias-brand-primary);text-decoration:none}.hlWGIa_link:hover{text-decoration:underline}.hlWGIa_link:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:2px}.hlWGIa_block[data-environment=ok] .hlWGIa_icon{color:var(--dsw-alias-state-success-primary)}.hlWGIa_block[data-environment=out-of-range]{background:var(--dsw-alias-state-warn-tertiary);border-radius:var(--dsw-radius-md,12px);gap:10px;padding:12px}.hlWGIa_block[data-environment=out-of-range] .hlWGIa_icon,.hlWGIa_block[data-environment=out-of-range] .hlWGIa_title{color:var(--dsw-alias-state-warn-label)}";
		const tagId$15 = "@sophialin/dsh-research-team/environment-check.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$15) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@sophialin/dsh-research-team";
			tag.dataset.pluginCss = tagId$15;
			tag.textContent = css$15;
			document.head.appendChild(tag);
		}
		var environment_check_module_css_default = {
			"action": "hlWGIa_action",
			"block": "hlWGIa_block",
			"body": "hlWGIa_body",
			"detail": "hlWGIa_detail",
			"icon": "hlWGIa_icon",
			"link": "hlWGIa_link",
			"title": "hlWGIa_title"
		};
		//#endregion
		//#region src/client/EnvironmentCheck.tsx
		/** The three glyphs, drawn at the 16px seat the settings page uses for state marks. */
		const ICONS = {
			ok: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M3 8.5 6.5 12 13 4.5" }),
			warn: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M8 2.5 14.6 13.6H1.4z" }),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M8 6.6v3.2" }),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M8 11.9h.01" })
			] }),
			unknown: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("circle", {
				cx: "8",
				cy: "8",
				r: "6"
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", { d: "M5.6 8h4.8" })] })
		};
		function EnvironmentIcon({ glyph }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("svg", {
				className: environment_check_module_css_default.icon,
				viewBox: "0 0 16 16",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				"aria-hidden": "true",
				children: ICONS[glyph]
			});
		}
		/** The release notes this bundle's own repository keeps, one click from the version footnote. */
		const RELEASE_NOTES_URL = "https://github.com/AEmbers/dsh-research-team/releases";
		function EnvironmentCheck({ t, environment }) {
			const { report } = useEnvironmentCheck(environment);
			if (report === void 0) return null;
			const range = report.supportRange;
			const running = report.dshVersion;
			const certified = report.certifiedDshVersion;
			const bundleVersion = report.bundleVersion;
			const tested = certified !== void 0 && bundleVersion !== void 0 && bundleVersion !== "unknown";
			const title = report.verdict === "ok" ? t("environmentOkTitle") : report.verdict === "out-of-range" ? t("environmentOutOfRangeTitle") : t("environmentUndeterminedTitle");
			const lines = [];
			if (report.verdict === "ok") {
				if (running !== void 0) lines.push(t("environmentOkDetail", { version: running }));
			} else if (report.verdict === "out-of-range") {
				if (running !== void 0) lines.push(t("environmentOutOfRangeDetail", { version: running }));
				if (range !== void 0) lines.push(t("environmentRange", {
					lower: range.lower,
					upper: range.upper
				}));
				if (tested && certified !== void 0 && bundleVersion !== void 0) lines.push(t("environmentTested", {
					bundle: bundleVersion,
					dsh: certified
				}));
			} else lines.push(t("environmentUndeterminedDetail"));
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: environment_check_module_css_default.block,
				"data-environment": report.verdict,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(EnvironmentIcon, { glyph: report.verdict === "ok" ? "ok" : report.verdict === "out-of-range" ? "warn" : "unknown" }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: environment_check_module_css_default.body,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: environment_check_module_css_default.title,
							children: title
						}),
						lines.map((line, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: environment_check_module_css_default.detail,
							children: line
						}, index)),
						report.verdict !== "ok" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: environment_check_module_css_default.action,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
								className: environment_check_module_css_default.link,
								href: RELEASE_NOTES_URL,
								target: "_blank",
								rel: "noreferrer",
								children: t("environmentReleaseNotes")
							})
						})
					]
				})]
			});
		}
		//#endregion
		//#region src/client/avatar-image.ts
		function useAvatarImage(url) {
			const [broken, setBroken] = (0, react.useState)(void 0);
			return {
				src: url === void 0 || url === broken ? void 0 : url,
				failed: () => {
					if (url !== void 0) setBroken(url);
				}
			};
		}
		//#endregion
		//#region \0dsh-css:C:\Sophia\科研\AI科研助手开发\dsh-research-team\packages\client-agent-team\src\client\human-settings.module.css.mjs
		const css$14 = ".CpRY3G_section{max-width:760px;color:var(--dsw-alias-label-primary);flex-direction:column;gap:12px;display:flex;container-type:inline-size}.CpRY3G_heading{margin:0;font-size:18px;font-weight:600}.CpRY3G_intro{color:var(--dsw-alias-label-tertiary);margin:0;font-size:13px;line-height:20px}.CpRY3G_rows{flex-direction:column;display:flex}.CpRY3G_row{border-bottom:1px solid var(--dsw-alias-border-l2);align-items:center;gap:12px;padding:16px 0;display:flex}.CpRY3G_row:last-child{border-bottom:none}.CpRY3G_rowText{flex-direction:column;flex:1;gap:4px;min-width:0;padding-right:48px;display:flex}.CpRY3G_title{font-size:14px;line-height:22px}.CpRY3G_desc{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}.CpRY3G_controls{flex:none;align-items:center;gap:12px;display:inline-flex}.CpRY3G_nameInput{width:200px;height:36px}.CpRY3G_identity{corner-shape:round;border-radius:50%;flex:none;width:40px;height:40px}.CpRY3G_identityImage{object-fit:cover;display:block}.CpRY3G_identityFallback{background:var(--dsw-alias-state-business-primary);color:var(--dsw-static-neutral-bluish-00);justify-content:center;align-items:center;font-size:16px;font-weight:600;line-height:40px;display:inline-flex}.CpRY3G_footnote{color:var(--dsw-alias-label-tertiary);flex-wrap:wrap;align-items:center;gap:8px;font-size:12px;line-height:18px;display:flex}.CpRY3G_link{color:var(--dsw-alias-brand-primary);cursor:pointer;text-decoration:none}.CpRY3G_link:hover{text-decoration:underline}.CpRY3G_link:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:2px}.CpRY3G_notice{color:var(--dsw-alias-state-error-primary);margin:0;font-size:12px;line-height:18px}.CpRY3G_state{color:var(--dsw-alias-label-tertiary);margin:0;font-size:13px;line-height:20px}.CpRY3G_stateAction{align-items:center;gap:12px;display:flex}@container (width<=420px){.CpRY3G_row{flex-direction:column;align-items:stretch;gap:12px}.CpRY3G_rowText{padding-right:0}.CpRY3G_nameInput{width:100%}.CpRY3G_controls{flex-wrap:wrap}}";
		const tagId$14 = "@sophialin/dsh-research-team/human-settings.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$14) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@sophialin/dsh-research-team";
			tag.dataset.pluginCss = tagId$14;
			tag.textContent = css$14;
			document.head.appendChild(tag);
		}
		var human_settings_module_css_default = {
			"controls": "CpRY3G_controls",
			"desc": "CpRY3G_desc",
			"footnote": "CpRY3G_footnote",
			"heading": "CpRY3G_heading",
			"identity": "CpRY3G_identity",
			"identityFallback": "CpRY3G_identityFallback",
			"identityImage": "CpRY3G_identityImage",
			"intro": "CpRY3G_intro",
			"link": "CpRY3G_link",
			"nameInput": "CpRY3G_nameInput",
			"notice": "CpRY3G_notice",
			"row": "CpRY3G_row",
			"rowText": "CpRY3G_rowText",
			"rows": "CpRY3G_rows",
			"section": "CpRY3G_section",
			"state": "CpRY3G_state",
			"stateAction": "CpRY3G_stateAction",
			"title": "CpRY3G_title"
		};
		//#endregion
		//#region src/client/HumanSettingsSection.tsx
		/**
		* The Human's own settings page: display name, avatar, the local environment
		* check, and the version footnote.
		*
		* The page owns no durable fact and no copy of one. Name, avatar, and version
		* all arrive from the shared identity projection, so a save here moves the
		* message rows and member refs at the same moment; a failed write keeps the
		* typed name in the field and reports the Host's own reason. The environment
		* check is a separate projection, read only, and belongs to the installation
		* rather than to the Human.
		*/
		/** Host-side avatar ceiling (`ATTACHMENT_MAX_BYTES`): the settings page refuses larger files before the round trip. */
		const AVATAR_MAX_BYTES = 10 * 1024 * 1024;
		/**
		* Run one durable write and reduce every failure to the message the page
		* reports. A rejected Remote call (a dropped carrier, a refused write) is a
		* failure like any other: without this the field would sit on "saving" forever
		* and report nothing.
		*/
		async function failureOf(action) {
			try {
				return await action();
			} catch (error) {
				return error instanceof Error ? error.message : String(error);
			}
		}
		/** First visible character of a display name, or the neutral `H` before one is known. */
		function avatarInitial(name) {
			const trimmed = (name ?? "").replace(/^@/, "").trim();
			return trimmed === "" ? "H" : trimmed.slice(0, 1).toUpperCase();
		}
		function HumanSettingsSection(props) {
			const { t, identity } = props;
			const profile = useHumanIdentity(identity);
			const [draft, setDraft] = (0, react.useState)(void 0);
			const [saving, setSaving] = (0, react.useState)(false);
			const [uploading, setUploading] = (0, react.useState)(false);
			const [notice, setNotice] = (0, react.useState)(null);
			const filePicker = (0, react.useRef)(null);
			const name = draft ?? profile.name ?? "";
			const dirty = draft !== void 0 && draft.trim() !== (profile.name ?? "");
			const emptyName = draft !== void 0 && draft.trim() === "";
			const hasAvatar = profile.avatarRef !== void 0;
			const avatar = useAvatarImage(profile.avatarUrl);
			const submitName = async () => {
				if (!dirty || emptyName || saving) return;
				setSaving(true);
				setNotice(null);
				const failure = await failureOf(() => props.saveName(name.trim()));
				setSaving(false);
				if (failure !== void 0) {
					setNotice(t("humanSettingsNameFailed", { message: failure }));
					return;
				}
				setDraft(void 0);
			};
			const pickAvatar = async (file) => {
				if (file === void 0) return;
				setNotice(null);
				if (!file.type.startsWith("image/")) {
					setNotice(t("humanSettingsAvatarNotImage"));
					return;
				}
				if (file.size > AVATAR_MAX_BYTES) {
					setNotice(t("humanSettingsAvatarTooLarge"));
					return;
				}
				setUploading(true);
				const failure = await failureOf(() => props.uploadAvatar(file));
				setUploading(false);
				if (failure !== void 0) setNotice(t("humanSettingsAvatarFailed", { message: failure }));
			};
			const removeAvatar = async () => {
				setNotice(null);
				const failure = await failureOf(() => props.removeAvatar());
				if (failure !== void 0) setNotice(t("humanSettingsAvatarFailed", { message: failure }));
			};
			const pageHeader = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
				className: human_settings_module_css_default.heading,
				children: t("humanSettingsTitle")
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
				className: human_settings_module_css_default.intro,
				children: t("humanSettingsIntro")
			})] });
			if (profile.status === "loading" && profile.name === void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: human_settings_module_css_default.section,
				children: [pageHeader, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					className: human_settings_module_css_default.state,
					role: "status",
					children: t("humanSettingsLoading")
				})]
			});
			if (profile.name === void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: human_settings_module_css_default.section,
				children: [
					pageHeader,
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: human_settings_module_css_default.state,
						role: "alert",
						children: t("humanSettingsUnavailable", { message: profile.error ?? "" })
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: human_settings_module_css_default.stateAction,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "outline",
							onClick: () => {
								identity.refresh();
							},
							children: t("retry")
						})
					})
				]
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: human_settings_module_css_default.section,
				children: [
					pageHeader,
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: human_settings_module_css_default.rows,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: human_settings_module_css_default.row,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: human_settings_module_css_default.rowText,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: human_settings_module_css_default.title,
									children: t("humanSettingsName")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: human_settings_module_css_default.desc,
									children: t("humanSettingsNameHint")
								})]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("form", {
								className: human_settings_module_css_default.controls,
								onSubmit: (event) => {
									event.preventDefault();
									submitName();
								},
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
									className: human_settings_module_css_default.nameInput,
									"aria-label": t("humanSettingsName"),
									"aria-invalid": emptyName || void 0,
									value: name,
									disabled: saving,
									onChange: (event) => {
										setDraft(event.target.value);
									}
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									type: "submit",
									variant: "primary",
									disabled: saving || !dirty || emptyName,
									children: saving ? t("humanSettingsSaving") : t("humanSettingsSave")
								})]
							})]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: human_settings_module_css_default.row,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: human_settings_module_css_default.rowText,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: human_settings_module_css_default.title,
									children: t("humanSettingsAvatar")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: human_settings_module_css_default.desc,
									children: t("humanSettingsAvatarHint")
								})]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: human_settings_module_css_default.controls,
								children: [
									avatar.src === void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: `${human_settings_module_css_default.identity} ${human_settings_module_css_default.identityFallback}`,
										"data-avatar": "initial",
										"aria-hidden": "true",
										children: avatarInitial(profile.name)
									}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
										className: `${human_settings_module_css_default.identity} ${human_settings_module_css_default.identityImage}`,
										"data-avatar": "image",
										src: avatar.src,
										alt: "",
										onError: avatar.failed
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										ref: filePicker,
										type: "file",
										accept: "image/*",
										tabIndex: -1,
										"aria-hidden": "true",
										hidden: true,
										onChange: (event) => {
											pickAvatar(event.target.files?.[0]);
											event.target.value = "";
										}
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										variant: "outline",
										disabled: uploading,
										onClick: () => {
											filePicker.current?.click();
										},
										children: uploading ? t("humanSettingsUploading") : hasAvatar ? t("humanSettingsReplace") : t("humanSettingsUpload")
									}),
									hasAvatar && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										disabled: uploading,
										onClick: () => {
											removeAvatar();
										},
										children: t("humanSettingsRemoveAvatar")
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(EnvironmentCheck, {
						t,
						environment: props.environment
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: human_settings_module_css_default.footnote,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("humanSettingsVersion", { version: profile.version ?? "" }) }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "·"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
								className: human_settings_module_css_default.link,
								href: profile.repoUrl ?? "",
								target: "_blank",
								rel: "noreferrer",
								children: "GitHub"
							}),
							profile.updateAvailable && profile.latestVersion !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
								className: human_settings_module_css_default.link,
								href: `${profile.repoUrl ?? ""}/releases`,
								target: "_blank",
								rel: "noreferrer",
								children: t("humanSettingsUpdateAvailable", { version: profile.latestVersion })
							}) : null
						]
					}),
					emptyName && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: human_settings_module_css_default.notice,
						children: t("humanSettingsNameEmpty")
					}),
					notice === null ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: human_settings_module_css_default.notice,
						role: "alert",
						children: notice
					})
				]
			});
		}
		//#endregion
		//#region src/client/attachment-preview.ts
		/** Base64 one file payload in chunks so large uploads stay off the call-stack limit. */
		function bytesToBase64(bytes) {
			let binary = "";
			const chunk = 32768;
			for (let start = 0; start < bytes.length; start += chunk) binary += String.fromCharCode(...bytes.subarray(start, start + chunk));
			return btoa(binary);
		}
		/**
		* Thumbnail data URLs live in one session-wide cache: message lists re-render
		* often, and each miss costs a Host round-trip plus a base64 decode. Only a
		* settled answer is cached: a gone entry resolves to `null` so the chip stays
		* on the expired label, while an unknown failure caches nothing and lets a
		* later mount retry the Host.
		*/
		const dataUrlCache = /* @__PURE__ */ new Map();
		function cachedAttachmentDataUrl(attachmentId) {
			return dataUrlCache.get(attachmentId);
		}
		async function loadAttachmentDataUrl(getAttachment, attachment) {
			const cached = dataUrlCache.get(attachment.attachmentId);
			if (cached !== void 0) return cached;
			const result = await getAttachment({ attachmentId: attachment.attachmentId });
			if (!result.ok) {
				if (result.error.code === "team/attachment-not-found") dataUrlCache.set(attachment.attachmentId, null);
				return null;
			}
			const url = attachment.mediaType.startsWith("image/") ? `data:${attachment.mediaType};base64,${result.value.bytesBase64}` : null;
			dataUrlCache.set(attachment.attachmentId, url);
			return url;
		}
		/** Human-readable byte size for attachment chips. */
		function formatByteSize(byteSize) {
			if (byteSize < 1024) return `${byteSize} B`;
			if (byteSize < 1024 * 1024) return `${(byteSize / 1024).toFixed(0)} KB`;
			return `${(byteSize / (1024 * 1024)).toFixed(1)} MB`;
		}
		//#endregion
		//#region src/client/navigation.ts
		const STORAGE_KEY$3 = "dsh.agent-team.navigation";
		function readSnapshot() {
			if (typeof localStorage === "undefined") return { mode: "conversation" };
			try {
				const parsed = JSON.parse(localStorage.getItem("dsh.agent-team.navigation") ?? "");
				const hasThread = typeof parsed.threadRef === "string";
				return {
					mode: parsed.mode === "team" ? "team" : "conversation",
					...typeof parsed.workspaceId === "string" ? { workspaceId: parsed.workspaceId } : {},
					...typeof parsed.channelRef === "string" ? { channelRef: parsed.channelRef } : {},
					...parsed.inbox === true ? { inbox: true } : {},
					...hasThread ? {
						threadRef: parsed.threadRef,
						...typeof parsed.taskRef === "string" ? { taskRef: parsed.taskRef } : {},
						...typeof parsed.taskNumber === "number" && Number.isInteger(parsed.taskNumber) && parsed.taskNumber > 0 ? { taskNumber: parsed.taskNumber } : {}
					} : {}
				};
			} catch {
				return { mode: "conversation" };
			}
		}
		function persistSnapshot(snapshot) {
			if (typeof localStorage === "undefined") return;
			try {
				const { mode, workspaceId, channelRef, taskRef, threadRef, taskNumber, inbox } = snapshot;
				localStorage.setItem(STORAGE_KEY$3, JSON.stringify({
					mode,
					...workspaceId === void 0 ? {} : { workspaceId },
					...channelRef === void 0 ? {} : { channelRef },
					...inbox === true ? { inbox: true } : {},
					...taskRef === void 0 ? {} : { taskRef },
					...threadRef === void 0 ? {} : { threadRef },
					...taskNumber === void 0 ? {} : { taskNumber }
				}));
			} catch {}
		}
		/** Root-scoped Team mode state. Slot lifetimes subscribe to this source. */
		var TeamNavigation = class {
			snapshot = readSnapshot();
			listeners = /* @__PURE__ */ new Set();
			getSnapshot = () => this.snapshot;
			subscribe = (listener) => {
				this.listeners.add(listener);
				return () => {
					this.listeners.delete(listener);
				};
			};
			actions() {
				return {
					enterTeam: () => {
						this.clearMemberSession();
						this.setMode("team");
					},
					leaveTeam: () => {
						this.setMode("conversation");
					},
					selectWorkspace: (workspaceId) => {
						this.clearMemberSession();
						this.setWorkspace(workspaceId);
					},
					selectChannel: (channelRef) => {
						this.clearMemberSession();
						this.setChannel(channelRef);
					},
					selectThread: (threadRef, channelRef, taskRef, taskNumber) => {
						this.clearMemberSession();
						this.setThread(threadRef, channelRef, taskRef, taskNumber);
					},
					selectInbox: () => {
						this.clearMemberSession();
						this.setInbox();
					},
					backToWorkspace: () => {
						this.clearMemberSession();
						this.setThread(void 0);
					},
					backToChannels: () => {
						this.clearMemberSession();
						this.clearChannel();
					},
					enterMemberSession: (sessionId, returnToSessionId) => {
						this.setMemberSession(sessionId, returnToSessionId);
					},
					exitMemberSession: () => {
						this.clearMemberSession();
					}
				};
			}
			dispose() {
				this.listeners.clear();
			}
			setMode(mode) {
				if (this.snapshot.mode === mode) return;
				this.snapshot = {
					...this.snapshot,
					mode
				};
				this.commit();
			}
			setMemberSession(sessionId, returnToSessionId) {
				if (this.snapshot.memberSessionId === sessionId && this.snapshot.mode === "team") return;
				const { memberSessionId: _memberSessionId, ...base } = this.snapshot;
				this.snapshot = {
					...base,
					mode: "team",
					memberSessionId: sessionId,
					...returnToSessionId === void 0 ? {} : { returnToSessionId }
				};
				this.commit();
			}
			/** Any explicit Team navigation or the footer leave closes a Member view. */
			clearMemberSession() {
				if (this.snapshot.memberSessionId === void 0 && this.snapshot.returnToSessionId === void 0) return;
				const { memberSessionId: _memberSessionId, returnToSessionId: _returnToSessionId, ...base } = this.snapshot;
				this.snapshot = base;
				this.commit();
			}
			setWorkspace(workspaceId) {
				if (this.snapshot.workspaceId === workspaceId && this.snapshot.inbox !== true) return;
				const { channelRef: _channelRef, taskRef: _taskRef, threadRef: _threadRef, taskNumber: _taskNumber, inbox: _inbox, ...base } = this.snapshot;
				this.snapshot = {
					...base,
					workspaceId
				};
				this.commit();
			}
			setChannel(channelRef) {
				if (this.snapshot.channelRef === channelRef && this.snapshot.threadRef === void 0 && this.snapshot.inbox !== true) return;
				const { taskRef: _taskRef, threadRef: _threadRef, taskNumber: _taskNumber, inbox: _inbox, ...base } = this.snapshot;
				this.snapshot = {
					...base,
					channelRef
				};
				this.commit();
			}
			/** The Inbox is a face, not workspace content: selecting a Workspace leaves it. */
			setInbox() {
				if (this.snapshot.inbox === true && this.snapshot.channelRef === void 0 && this.snapshot.threadRef === void 0) return;
				const { channelRef: _channelRef, taskRef: _taskRef, threadRef: _threadRef, taskNumber: _taskNumber, ...base } = this.snapshot;
				this.snapshot = {
					...base,
					inbox: true
				};
				this.commit();
			}
			clearChannel() {
				const { channelRef: _channelRef, ...base } = this.snapshot;
				if (this.snapshot.channelRef === void 0) return;
				this.snapshot = base;
				this.commit();
			}
			setThread(threadRef, channelRef, taskRef, taskNumber) {
				if (this.snapshot.threadRef === threadRef && this.snapshot.taskRef === taskRef && this.snapshot.channelRef === channelRef && this.snapshot.taskNumber === taskNumber && this.snapshot.inbox !== true) return;
				if (threadRef === void 0) {
					const { taskRef: _taskRef, threadRef: _threadRef, taskNumber: _taskNumber, ...base } = this.snapshot;
					this.snapshot = base;
				} else {
					const { channelRef: _channelRef, taskRef: _taskRef, threadRef: _threadRef, taskNumber: _taskNumber, inbox: _inbox, ...base } = this.snapshot;
					this.snapshot = {
						...base,
						threadRef,
						...channelRef === void 0 ? {} : { channelRef },
						...taskRef === void 0 ? {} : { taskRef },
						...taskNumber === void 0 ? {} : { taskNumber }
					};
				}
				this.commit();
			}
			commit() {
				persistSnapshot(this.snapshot);
				for (const listener of this.listeners) listener();
			}
		};
		//#endregion
		//#region src/client/team-changes.ts
		function scopeKey(scope) {
			return scope === void 0 ? "all" : scope.kind === "workspace" ? `workspace:${scope.workspaceId}` : scope.kind === "channel" ? `channel:${scope.channelRef}` : scope.kind === "presence" ? `presence:${scope.workspaceId}` : `thread:${scope.threadRef}`;
		}
		/** One logical stream per scope per page; Harness owns the shared transport and recovery. */
		var TeamChangeStream = class {
			remote;
			subscriptions = /* @__PURE__ */ new Map();
			constructor(remote) {
				this.remote = remote;
			}
			subscribe(scope, listener) {
				const key = scopeKey(scope);
				let subscription = this.subscriptions.get(key);
				if (subscription === void 0) {
					subscription = this.open(scope, new Set([listener]));
					this.subscriptions.set(key, subscription);
					this.run(key, subscription);
				} else {
					subscription.listeners.add(listener);
					if (subscription.failure !== void 0) listener({
						type: "failed",
						message: subscription.failure
					});
				}
				const owned = subscription;
				return () => {
					if (!owned.listeners.delete(listener) || owned.listeners.size !== 0) return;
					if (this.subscriptions.get(key) === owned) this.subscriptions.delete(key);
					owned.stream.dispose();
				};
			}
			/**
			* Reopen every scope whose stream already ended for good. The Harness resumes a
			* live generation across reconnects, but a terminated one is gone for good: a new
			* Host generation is the moment the scope was waiting for can come back, and the
			* listeners keep their seats, so only the stream is replaced.
			*/
			recover() {
				for (const [key, subscription] of this.subscriptions) {
					if (subscription.failure === void 0) continue;
					const replacement = this.open(subscription.scope, subscription.listeners);
					this.subscriptions.set(key, replacement);
					subscription.stream.dispose();
					this.run(key, replacement);
				}
			}
			open(scope, listeners) {
				const key = scopeKey(scope);
				return {
					scope,
					stream: this.remote.$stream({
						name: `Team changes ${key}`,
						open: (signal) => this.remote.agentTeam.changes(scope === void 0 ? {} : { scope }, signal),
						ended: (accepted) => accepted ? new _deepseek_ai_dsh_api_gateway_client.RemoteStreamCarrierError("Team change subscription ended without a terminal result") : /* @__PURE__ */ new Error("Team change subscription ended before its opening baseline"),
						carrierFailed: (error) => this.fail(key, error.message)
					}),
					listeners,
					failure: void 0
				};
			}
			async dispose() {
				const subscriptions = [...this.subscriptions.values()];
				this.subscriptions.clear();
				await Promise.all(subscriptions.map((subscription) => subscription.stream.dispose()));
			}
			fail(key, message) {
				const subscription = this.subscriptions.get(key);
				if (subscription === void 0 || subscription.failure !== void 0) return;
				subscription.failure = message;
				for (const listener of subscription.listeners) listener({
					type: "failed",
					message
				});
			}
			async run(key, subscription) {
				try {
					for await (const item of subscription.stream) {
						if (this.subscriptions.get(key) !== subscription) return;
						item.accept();
						subscription.failure = void 0;
						for (const listener of subscription.listeners) listener({
							type: "changed",
							version: item.value.version
						});
					}
				} catch (error) {
					if (this.subscriptions.get(key) === subscription) this.fail(key, error instanceof Error ? error.message : String(error));
				}
			}
		};
		/**
		* The Host's `changes` stream never wakes on a Thread read — a read advances
		* only the reader's private watermark, so no shared projection changes. A
		* durable read does consume the reader's own mention markers, so the Human's
		* badge and Inbox page refresh from the completed read itself instead of
		* waiting for the next unrelated commit.
		*/
		var TeamReadStream = class {
			version = 0;
			listeners = /* @__PURE__ */ new Set();
			bump() {
				this.version += 1;
				for (const listener of this.listeners) listener();
			}
			subscribe(listener) {
				this.listeners.add(listener);
				return () => {
					this.listeners.delete(listener);
				};
			}
		};
		//#endregion
		//#region src/client/drafts.ts
		const STORAGE_KEY$2 = "dsh.agent-team.drafts.v1";
		/** Retention ceiling; the oldest savedAt entries fall out first. */
		const LIMIT = 50;
		const EMPTY = Object.freeze({
			draft: "",
			recipients: /* @__PURE__ */ new Set()
		});
		function isTeamDraftKey(value) {
			return value.startsWith("channel:") || value.startsWith("thread:");
		}
		function readStored() {
			if (typeof localStorage === "undefined") return /* @__PURE__ */ new Map();
			try {
				const parsed = JSON.parse(localStorage.getItem("dsh.agent-team.drafts.v1") ?? "");
				const restored = /* @__PURE__ */ new Map();
				for (const [key, value] of Object.entries(parsed)) {
					if (!isTeamDraftKey(key) || typeof value !== "object" || value === null) continue;
					const candidate = value;
					if (typeof candidate.draft !== "string" || !Array.isArray(candidate.recipientIds) || typeof candidate.savedAt !== "number") continue;
					if (!candidate.recipientIds.every((id) => typeof id === "string")) continue;
					restored.set(key, {
						draft: candidate.draft,
						recipientIds: candidate.recipientIds,
						savedAt: candidate.savedAt
					});
				}
				return restored;
			} catch {
				return /* @__PURE__ */ new Map();
			}
		}
		function persistStored(entries) {
			if (typeof localStorage === "undefined") return;
			try {
				const payload = Object.fromEntries([...entries].map(([key, entry]) => [key, entry]));
				localStorage.setItem(STORAGE_KEY$2, JSON.stringify(payload));
			} catch {}
		}
		/**
		* Root-scoped draft cache, one instance per Client context (created in
		* `applyUi` and injected like the navigation service — never a module
		* singleton). Slot lifetimes subscribe per key.
		*/
		var TeamDraftStore = class {
			entries = readStored();
			snapshots = /* @__PURE__ */ new Map();
			listeners = /* @__PURE__ */ new Set();
			subscribe = (listener) => {
				this.listeners.add(listener);
				return () => {
					this.listeners.delete(listener);
				};
			};
			/** Release listeners when the owning Client context disposes. */
			dispose() {
				this.listeners.clear();
			}
			/** Stable per-key snapshot identity for useSyncExternalStore. */
			getSnapshot = (key) => {
				const cached = this.snapshots.get(key);
				if (cached !== void 0) return cached;
				const entry = this.entries.get(key);
				if (entry === void 0) return EMPTY;
				const snapshot = Object.freeze({
					draft: entry.draft,
					recipients: new Set(entry.recipientIds)
				});
				this.snapshots.set(key, snapshot);
				return snapshot;
			};
			writeDraft(key, draft) {
				this.write(key, { draft });
			}
			writeRecipients(key, recipients) {
				this.write(key, { recipientIds: [...recipients] });
			}
			/** Drop one key entirely — the success path after a committed send. */
			clear(key) {
				if (!this.entries.delete(key)) return;
				this.snapshots.delete(key);
				persistStored(this.entries);
				for (const listener of this.listeners) listener();
			}
			/** Test seam: forget everything, including what localStorage still holds. */
			reset() {
				this.entries = /* @__PURE__ */ new Map();
				this.snapshots.clear();
				if (typeof localStorage !== "undefined") localStorage.removeItem(STORAGE_KEY$2);
				for (const listener of this.listeners) listener();
			}
			/** Re-read persisted content — what a fresh page load starts from. */
			reload() {
				this.entries = readStored();
				this.snapshots.clear();
				for (const listener of this.listeners) listener();
			}
			write(key, patch) {
				const previous = this.entries.get(key);
				const next = {
					draft: patch.draft ?? previous?.draft ?? "",
					recipientIds: patch.recipientIds ?? previous?.recipientIds ?? [],
					savedAt: Date.now()
				};
				if (previous !== void 0 && previous.draft === next.draft && previous.recipientIds.length === next.recipientIds.length && previous.recipientIds.every((id, index) => id === next.recipientIds[index])) return;
				if (next.draft === "" && next.recipientIds.length === 0) {
					this.clear(key);
					return;
				}
				this.entries.set(key, next);
				this.evict();
				this.snapshots.delete(key);
				persistStored(this.entries);
				for (const listener of this.listeners) listener();
			}
			evict() {
				while (this.entries.size > LIMIT) {
					let oldestKey;
					let oldestSavedAt = Number.POSITIVE_INFINITY;
					for (const [key, entry] of this.entries) if (entry.savedAt < oldestSavedAt) {
						oldestSavedAt = entry.savedAt;
						oldestKey = key;
					}
					if (oldestKey === void 0) return;
					this.entries.delete(oldestKey);
					this.snapshots.delete(oldestKey);
				}
			}
		};
		//#endregion
		//#region \0dsh-css:C:\Sophia\科研\AI科研助手开发\dsh-research-team\packages\client-agent-team\src\client\team.module.css.mjs
		const css$13 = "._Rv-cW_footerStack{flex:none;align-self:flex-end;width:100%;height:42px;margin:8px 0 0;display:flex}._Rv-cW_footerAction,._Rv-cW_settingsAction{border-radius:var(--dsw-radius-md,12px);box-sizing:border-box;color:var(--dsw-alias-label-primary);cursor:pointer;background:0 0;border:0;align-items:center;gap:8px;width:calc(100% + 4px);height:42px;padding:0 10px 0 8px;font-family:inherit;font-size:14px;line-height:22px;display:flex;overflow:hidden}._Rv-cW_footerAction{margin:0 -2px}._Rv-cW_settingsAction{margin:4px -2px}._Rv-cW_footerAction:hover,._Rv-cW_footerAction:focus-visible,._Rv-cW_settingsAction:hover,._Rv-cW_settingsAction:focus-visible{background:var(--dsw-alias-interactive-bg-hover)}._Rv-cW_footerAction:focus-visible,._Rv-cW_settingsAction:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:-2px}._Rv-cW_footerAction._Rv-cW_rail,._Rv-cW_settingsAction._Rv-cW_rail{corner-shape:round;border-radius:50%;justify-content:center;width:36px;height:36px;padding:0}._Rv-cW_footerAction._Rv-cW_rail{margin:0}._Rv-cW_settingsAction._Rv-cW_rail{margin:8px 0 10px}._Rv-cW_railStack{align-items:center;width:36px;height:36px;margin:0}";
		const tagId$13 = "@sophialin/dsh-research-team/team.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$13) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@sophialin/dsh-research-team";
			tag.dataset.pluginCss = tagId$13;
			tag.textContent = css$13;
			document.head.appendChild(tag);
		}
		var team_module_css_default = {
			"footerAction": "_Rv-cW_footerAction",
			"footerStack": "_Rv-cW_footerStack",
			"rail": "_Rv-cW_rail",
			"railStack": "_Rv-cW_railStack",
			"settingsAction": "_Rv-cW_settingsAction"
		};
		//#endregion
		//#region src/client/TeamFooterAction.tsx
		function TeamFooterAction({ wide, navigation, enterTeam, leaveTeam, t }) {
			const inTeam = (0, react.useSyncExternalStore)(navigation.subscribe, navigation.getSnapshot, navigation.getSnapshot).mode === "team";
			const label = inTeam ? t("backToConversations") : t("team");
			(0, react.useLayoutEffect)(() => {
				if (typeof document === "undefined") return;
				if (inTeam) {
					document.documentElement.dataset.agentTeamMode = "team";
					return () => {
						delete document.documentElement.dataset.agentTeamMode;
					};
				}
				delete document.documentElement.dataset.agentTeamMode;
			}, [inTeam]);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: wide ? team_module_css_default.footerStack : `${team_module_css_default.footerStack} ${team_module_css_default.railStack}`,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
					label,
					delayMs: 500,
					disabled: wide,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
						type: "button",
						className: wide ? team_module_css_default.footerAction : `${team_module_css_default.footerAction} ${team_module_css_default.rail}`,
						"aria-label": label,
						"data-team-action": inTeam ? "leave" : "enter",
						onClick: inTeam ? leaveTeam : enterTeam,
						children: [inTeam ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronLeftOutlineRegular, { size: wide ? 16 : 18 }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconAgentPresetOutlineRegular, { size: wide ? 16 : 18 }), wide && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: label })]
					})
				})
			}) });
		}
		//#endregion
		//#region ../agent-team/src/mentions.ts
		function escapeRegExp(value) {
			return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		}
		/**
		* Character ranges the scanner must not read as mentions: fenced code blocks
		* and inline code spans. Authors quote handles there to talk *about* a name
		* rather than call it, and resolving those would notify the wrong Member.
		* The alternation tries the fenced form first so a block is never mistaken for
		* a run of inline spans.
		*/
		function codeRanges(body) {
			const ranges = [];
			for (const match of body.matchAll(/```[\s\S]*?```|`[^`\n]*`/g)) {
				const start = match.index ?? 0;
				ranges.push([start, start + match[0].length]);
			}
			return ranges;
		}
		const ALL_MARKER = /(?<![\p{L}\p{N}_@])@all(?=$|[^\p{L}\p{N}_])/iu;
		/** Whether one body carries the `@all` marker outside code. */
		function hasAllMarker(body) {
			const excluded = codeRanges(body);
			const marker = ALL_MARKER.exec(body);
			return marker !== null && !excluded.some(([start, end]) => marker.index >= start && marker.index < end);
		}
		/**
		* Every `@Handle` occurrence in one body that names one of `handles`:
		* case-insensitive, on Unicode word boundaries, longest handle first, outside
		* code. Writing `@` is required: bare handles are ordinary words. This is the
		* single definition of an authored mention — the Host delivery resolution and
		* the Client's chip rendering and draft preview all read through it, so a name
		* that renders as a chip is the same name that delivers a notification.
		*/
		function scanBodyHandles(body, handles) {
			const seen = /* @__PURE__ */ new Set();
			const usable = [];
			for (const handle of handles) {
				const key = handle.toLowerCase();
				if (handle.trim() === "" || seen.has(key)) continue;
				seen.add(key);
				usable.push(handle);
			}
			if (usable.length === 0) return Object.freeze([]);
			const excluded = codeRanges(body);
			const ordered = [...usable].sort((left, right) => right.length - left.length);
			const pattern = new RegExp(`(?<![\\p{L}\\p{N}_@])@(?:${ordered.map((handle) => escapeRegExp(handle)).join("|")})(?=$|[^\\p{L}\\p{N}_])`, "giu");
			const matches = [];
			for (const match of body.matchAll(pattern)) {
				const start = match.index ?? 0;
				if (excluded.some(([rangeStart, rangeEnd]) => start >= rangeStart && start < rangeEnd)) continue;
				const written = match[0].slice(1).toLowerCase();
				const hit = ordered.find((handle) => handle.toLowerCase() === written);
				if (hit === void 0) continue;
				matches.push(Object.freeze({
					handle: hit,
					start,
					end: start + match[0].length
				}));
			}
			return Object.freeze(matches);
		}
		/**
		* Resolve the `@Handle` mentions authored in one Message body.
		*
		* Callers pass the candidates reachable in the Message's Channel, so a name
		* that resolves here is already an addressable target; handles the Channel
		* cannot reach simply stay prose.
		*
		* `sender` is excluded because a Message never mentions its own author, which
		* also keeps the result usable as a recipient set without further filtering.
		*/
		function resolveBodyMentions(body, candidates, sender) {
			const usable = candidates.filter((candidate) => candidate.memberId !== sender && candidate.handle.trim() !== "");
			const all = hasAllMarker(body);
			if (usable.length === 0) return {
				memberIds: Object.freeze([]),
				all
			};
			const matched = new Set(scanBodyHandles(body, usable.map((candidate) => candidate.handle)).map((match) => match.handle.toLowerCase()));
			return {
				memberIds: Object.freeze(usable.filter((candidate) => matched.has(candidate.handle.toLowerCase())).map((candidate) => candidate.memberId)),
				all
			};
		}
		//#endregion
		//#region src/client/team-formatters.ts
		function formatTaskStatus(status, t) {
			return t({
				todo: "taskStatusTodo",
				in_progress: "taskStatusInProgress",
				in_review: "taskStatusInReview",
				done: "taskStatusDone",
				closed: "taskStatusClosed"
			}[status]);
		}
		function formatClaimState(state, t) {
			return t({
				active: "claimStateActive",
				done: "claimStateDone",
				released: "claimStateReleased"
			}[state]);
		}
		const RISK_CLASS_KEYS = {
			"session-refused": ["riskClassSessionRefused", "riskSessionRefused"],
			"session-unreadable": ["riskClassSessionUnreadable", "riskSessionUnreadable"],
			"preset-composition": ["riskClassPresetComposition", "riskPresetComposition"],
			"rollover": ["riskClassRollover", "riskRollover"],
			"runtime": ["riskClassRuntime", "riskRuntime"],
			"activation": ["riskClassActivation", "riskActivation"]
		};
		/**
		* The two localized halves of one runtime-risk statement: the class label names
		* what kind of problem this is, and the sentence key states it of the Member
		* (it keeps its `{member}` placeholder so the caller supplies the handle). The
		* Host's own diagnostic stays English and belongs in the row's title, so the
		* visible line reads in the interface language.
		*/
		function formatRiskClass(status, t) {
			const [labelKey, sentenceKey] = RISK_CLASS_KEYS[status.diagnostic?.class ?? "runtime"];
			return {
				label: t(labelKey),
				sentenceKey
			};
		}
		/**
		* The first sentence of a Host diagnostic: risk rows read one line, and the
		* Host writes the reason as its first sentence with recovery context after it.
		* A terminator the Host used mid-sentence becomes a full stop so the clamped
		* line reads as a sentence; the untouched text stays in the row's title.
		*/
		function firstSentence(detail) {
			const trimmed = detail.trim();
			const end = trimmed.search(/[.。;；]/);
			if (end === -1) return trimmed;
			return trimmed[end] === "." || trimmed[end] === "。" ? trimmed.slice(0, end + 1) : `${trimmed.slice(0, end)}.`;
		}
		/**
		* Status indicator for a Task status, the dot every Task surface renders.
		* Active states map to StateDot variants; every status renders a dot so they
		* share one shape language — todo is a hollow ring (not started), closed a
		* quiet gray dot (archived).
		*/
		function taskStatusDot(status) {
			return {
				todo: "todo",
				in_progress: "ongoing",
				in_review: "warning",
				done: "done",
				closed: "quiet"
			}[status];
		}
		/** One-line title snippet derived from the Task's root Message body. */
		function formatTaskTitle(body) {
			const firstLine = body.split("\n", 1)[0]?.trim() ?? "";
			return firstLine.length > 120 ? `${firstLine.slice(0, 119)}…` : firstLine;
		}
		/** Deterministic avatar hue for one Member identity; stable across sessions and themes. */
		function memberHue(memberId) {
			let hash = 0;
			for (let index = 0; index < memberId.length; index += 1) hash = (hash * 31 + memberId.charCodeAt(index)) % 360;
			return hash;
		}
		const BRANDED_REF_PATTERN = /\b(task|channel|thread|member):{1,2}[0-9a-f]{6,}(?:-[0-9a-f]{1,})*\b/gi;
		/**
		* Canonical form of one matched ref: models occasionally double the colon or
		* uppercase the UUID when citing a ref in prose, while Host lookups and
		* navigation only accept the lowercase single-colon ref the ledger mints.
		*/
		function canonicalBrandedRef(match) {
			return match.replace("::", ":").toLowerCase();
		}
		/**
		* Split a literal text run into plain and branded-ref segments. The pattern
		* anchors on the fixed ref prefixes plus a UUID shape (full or abbreviated),
		* so ordinary prose containing a colon never linkifies; a doubled colon from
		* model output is tolerated. Segment refs are always canonical, so resolution
		* and navigation work regardless of how the ref was spelled; text without any
		* ref comes back as one untouched segment.
		*/
		function splitBrandedRefs(text) {
			const segments = [];
			let cursor = 0;
			for (const match of text.matchAll(BRANDED_REF_PATTERN)) {
				const start = match.index ?? 0;
				if (start > cursor) segments.push({ text: text.slice(cursor, start) });
				segments.push({
					text: match[0],
					ref: canonicalBrandedRef(match[0])
				});
				cursor = start + match[0].length;
			}
			if (cursor < text.length) segments.push({ text: text.slice(cursor) });
			return segments;
		}
		/**
		* Whether one string's whole content is exactly one branded ref. A code span
		* like this is the model styling a ref as an identifier, not publishing code,
		* so the Markdown pass may linkify it; anything larger stays literal.
		*/
		function isSingleBrandedRef(text) {
			const trimmed = text.trim();
			if (trimmed === "") return false;
			const matches = [...trimmed.matchAll(BRANDED_REF_PATTERN)];
			return matches.length === 1 && matches[0][0] === trimmed;
		}
		/** The Human's handle before they could rename themselves; the Host keeps it as an alias. */
		const HUMAN_HISTORIC_HANDLE = "human";
		/** Normalize one mention entry into its printed name and every handle that matches it. */
		function mentionHandlesOf(mention) {
			return typeof mention === "string" ? {
				name: mention,
				handles: [mention]
			} : {
				name: mention.name,
				handles: [mention.name, ...mention.also]
			};
		}
		/** The printed name of one mention entry; its aliases follow that name, never the body. */
		function mentionNameOf(mention) {
			return typeof mention === "string" ? mention : mention.name;
		}
		/**
		* Locate one Message's delivered mention names inside its literal body. Matching
		* is the shared Host delivery scan — an authored `@`, case-insensitive on Unicode
		* word boundaries, longest handle first, code quoted rather than called — so a chip
		* never lands where delivery would not reach. A chip names the person by their
		* current name, the way member refs do: a body that wrote an older handle of a
		* renamed Human chips as the name they answer to today. A person whose entry
		* matched through any of their handles counts as matched, so the fallback row
		* never repeats someone already chipped inline; names absent from the body come
		* back unmatched so the consumer can append them as a fallback chip row.
		*/
		function splitMentionNames(text, mentions) {
			if (mentions.length === 0) return {
				segments: [{
					text,
					mention: false
				}],
				unmatched: []
			};
			const entries = mentions.map(mentionHandlesOf);
			const segments = [];
			const matched = /* @__PURE__ */ new Set();
			let cursor = 0;
			for (const match of scanBodyHandles(text, entries.flatMap((entry) => entry.handles))) {
				if (match.start > cursor) segments.push({
					text: text.slice(cursor, match.start),
					mention: false
				});
				const handle = match.handle.toLowerCase();
				const owner = entries.find((entry) => entry.handles.some((candidate) => candidate.toLowerCase() === handle));
				const printed = owner === void 0 || owner.name.toLowerCase() === handle ? match.handle : owner.name;
				segments.push({
					text: `@${printed}`,
					mention: true,
					name: printed
				});
				if (owner !== void 0) matched.add(owner.name.toLowerCase());
				cursor = match.end;
			}
			if (cursor < text.length) segments.push({
				text: text.slice(cursor),
				mention: false
			});
			return {
				segments,
				unmatched: entries.map((entry) => entry.name).filter((name) => !matched.has(name.toLowerCase()))
			};
		}
		/**
		* Whether one draft spells a handle as an authored `@mention`: the shared
		* delivery scan, so the composer's recipient prune and will-notify preview agree
		* with the Host on what the draft actually calls.
		*/
		function containsMention(body, handle) {
			return scanBodyHandles(body, [handle]).length > 0;
		}
		/** Whether one draft carries the `@all` marker the mention menu expands. */
		function containsAllMention(body) {
			return hasAllMarker(body);
		}
		/**
		* Every Member the mention menu's `@all` row stands for: the roster this
		* composer was handed minus Members who cannot take a Message right now — the
		* same filter the per-handle rows apply, so the expansion and the menu agree.
		*/
		function allMentionMembers(members) {
			return members.filter((status) => status.presence !== "unavailable" && status.member.state !== "inactive" && status.member.state !== "archived");
		}
		/**
		* Member ids one draft asks to notify by text alone: the Client's preview of
		* the Host's own body mention resolution, so a hand-typed `@Handle` reports
		* exactly like a pick from the mention menu. `@all` stands for the menu's
		* expansion; a written handle counts whenever its Member can still take a
		* Message — state decides, not presence, because an offline Member is notified
		* and reads it later.
		*
		* The result is preview-only. Only picked recipients travel as explicit
		* recipients, where a name the Channel cannot reach would be a rejected target
		* rather than the prose the Host reads.
		*/
		function mentionedMemberIds(body, members) {
			if (hasAllMarker(body)) return allMentionMembers(members).map((status) => status.member.memberId);
			return resolveBodyMentions(body, members.filter((status) => status.member.state !== "inactive" && status.member.state !== "archived").map((status) => ({
				memberId: status.member.memberId,
				handle: status.member.handle
			})), "member:human").memberIds;
		}
		/**
		* Canonical chip handles for one Message's structured mention refs. The Human
		* is Team authority, not an Agent projection, so `members()` does not include
		* it: the caller hands over the profile name every seat names them by, so a
		* rename reaches old mention chips the same way it reaches the roster.
		*
		* A renamed Human also keeps the historic `human` handle, because the Host
		* accepts it as an alias and Message bodies written before the rename say
		* exactly that: without the alias those mentions would stop chipping inline and
		* reappear as a trailing chip under a name the body never used.
		*/
		function mentionNamesOf(mentions, handles, humanName) {
			return mentions.map((memberId) => memberId === "member:human" ? humanName.toLowerCase() === "human" ? humanName : {
				name: humanName,
				also: [HUMAN_HISTORIC_HANDLE]
			} : handles.get(memberId)).filter((name) => name !== void 0);
		}
		/** Accessible label for one "who is on this work" stack: its owners' handles, comma-separated. */
		function claimersLabel(owners, t) {
			return t("claimers", { names: owners.map((owner) => `@${owner.name}`).join(", ") });
		}
		const MARKDOWN_BLOCK_CONSTRUCT = /(^|\n)[ \t]{0,3}(?:#{1,6}[ \t]|>[ \t]|[-*+][ \t]|\d+[.)][ \t])|^[ \t]*\|.+\|/m;
		const MARKDOWN_INLINE_CONSTRUCT = /[`*_[\]!]|~~~|```/;
		/**
		* Whether an Agent body survives literal rendering unchanged: no fences,
		* inline code, emphasis markers, links, images, tables, or block constructs.
		* Only such plain-prose bodies may reuse the Human inline mention flow —
		* anything richer keeps the trailing chip row because the Markdown primitive
		* renders block-level documents that cannot interleave inline chips.
		*/
		function isPlainTextBody(text) {
			return !(MARKDOWN_BLOCK_CONSTRUCT.test(text) || MARKDOWN_INLINE_CONSTRUCT.test(text));
		}
		const pad$1 = (value) => String(value).padStart(2, "0");
		/** Absolute local `YYYY-MM-DD HH:mm` label: the precise instant behind every shorter form. */
		function formatAbsoluteTime(occurredAt) {
			const at = new Date(occurredAt);
			if (Number.isNaN(at.getTime())) return "";
			return `${at.getFullYear()}-${pad$1(at.getMonth() + 1)}-${pad$1(at.getDate())} ${pad$1(at.getHours())}:${pad$1(at.getMinutes())}`;
		}
		/**
		* Wall-clock label for one Message instant: time within the current day,
		* month-day time within the year, full date otherwise.
		*/
		function formatMessageTime(occurredAt, now = /* @__PURE__ */ new Date()) {
			const at = new Date(occurredAt);
			if (Number.isNaN(at.getTime())) return "";
			if (at.getFullYear() === now.getFullYear() && at.getMonth() === now.getMonth() && at.getDate() === now.getDate()) return `${pad$1(at.getHours())}:${pad$1(at.getMinutes())}`;
			const absolute = formatAbsoluteTime(occurredAt);
			return at.getFullYear() === now.getFullYear() ? absolute.slice(5) : absolute;
		}
		/**
		* Calendar days between two instants in the viewer's own zone, so "yesterday"
		* means yesterday locally rather than 24 hours earlier.
		*/
		function calendarDayDelta(at, now) {
			const midnight = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
			return Math.round((midnight(now) - midnight(at)) / 864e5);
		}
		/**
		* Recency label for one Inbox row's newest fact, shared with the Channel feed's
		* entry line so the two agree about the same instant. Today is a bare clock time
		* — the reader is in today, and 「今天」 printed down every row spends the label's
		* first word on the one segment that never varies, while `HH:mm` alone still
		* reads as a clock because it is exactly one. The first day that is not today is
		* the fact the reader has to be told, so it keeps its word; everything older
		* keeps the Message date form, so the row and the Thread it opens agree.
		*/
		function formatInboxTime(occurredAt, t, now = /* @__PURE__ */ new Date()) {
			const at = new Date(occurredAt);
			if (Number.isNaN(at.getTime())) return "";
			const days = calendarDayDelta(at, now);
			if (days === 0) return `${pad$1(at.getHours())}:${pad$1(at.getMinutes())}`;
			if (days === 1) return `${t("inboxTimeYesterday")} ${pad$1(at.getHours())}:${pad$1(at.getMinutes())}`;
			return formatMessageTime(occurredAt, now);
		}
		function formatActivity(activity, options) {
			const actor = options.actorName(activity.actor);
			if (activity.kind === "accept") return activity.completedClaimRefs !== void 0 && activity.completedClaimRefs.length > 0 ? options.t("activityAcceptedWithClaims", {
				actor,
				count: activity.completedClaimRefs.length
			}) : options.t("activityAccepted", { actor });
			if (activity.kind === "promote") return options.t("activityPromoted", { actor });
			if (activity.kind === "close") return options.t("activityClosed", { actor });
			if (activity.kind === "reopen") return options.t("activityReopened", { actor });
			const direction = "claimRef" in activity ? options.claims.find((claim) => claim.claimRef === activity.claimRef)?.direction ?? options.t("claims") : options.t("claims");
			if (activity.kind === "claim") return options.t("activityClaimed", {
				actor,
				direction
			});
			if (activity.kind === "done") return options.t("activityClaimDone", {
				actor,
				direction
			});
			if (activity.kind === "release") return options.t("activityClaimReleased", {
				actor,
				direction
			});
			if (activity.kind === "claims_released") return options.t("activityClaimsReleased", {
				actor,
				count: activity.claimRefs.length
			});
			throw new Error(`unknown Team Activity kind: ${activity.kind}`);
		}
		/** Remove the machine-facing `[attachment] <path>` prompt lines from a body before display. */
		function stripAttachmentLines(body) {
			return body.replaceAll(/^\[attachment\] .*$(\n)?/gm, "").replace(/\n+$/, "");
		}
		/** Whether one displayed Message body starts clamped behind the expand control. */
		function shouldClampMessage(displayBody) {
			return displayBody.length > 600;
		}
		/**
		* Decide how one Message body renders. Human input and plain-prose Agent
		* bodies stay literal, with structured mention chips inline where possible;
		* rich Agent Markdown keeps unmatched mentions and non-Task refs in the
		* trailing fallback row while the post-render pass handles Task refs at their
		* authored position. Surfaces without ref navigation render everything
		* literally and keep the full fallback row.
		*/
		function planMessageBody(body, options) {
			const stripped = stripAttachmentLines(body);
			const displayBody = stripped === "" ? body : stripped;
			const richAgentBody = !options.human && !isPlainTextBody(displayBody);
			const inline = (options.human || isPlainTextBody(displayBody)) && options.mentionNames !== void 0 && options.mentionNames.length > 0 ? splitMentionNames(displayBody, options.mentionNames) : void 0;
			const fallbackNames = inline !== void 0 ? inline.unmatched : richAgentBody && options.canOpenRefs && options.mentionNames !== void 0 ? splitMentionNames(displayBody, options.mentionNames).unmatched : (options.mentionNames ?? []).map(mentionNameOf);
			const refs = splitBrandedRefs(displayBody).flatMap((segment) => segment.ref === void 0 ? [] : [segment.ref]);
			return {
				displayBody,
				richAgentBody,
				render: inline !== void 0 ? "inline" : options.human || options.canOpenRefs && !richAgentBody && refs.length > 0 ? "literal" : "markdown",
				...inline === void 0 ? {} : { inline },
				fallbackNames,
				fallbackRefs: richAgentBody && !options.canOpenRefs ? refs : [],
				taskRefs: options.canOpenRefs && !richAgentBody ? refs.filter((ref) => ref.startsWith("task:")).map((ref) => ref) : [],
				threadRefs: options.canOpenRefs && !richAgentBody ? refs.filter((ref) => ref.startsWith("thread:")).map((ref) => ref) : []
			};
		}
		//#endregion
		//#region \0dsh-css:C:\Sophia\科研\AI科研助手开发\dsh-research-team\packages\client-agent-team\src\client\state-dot.module.css.mjs
		const css$12 = "._4FGROW_quiet{corner-shape:round;border-radius:50%;flex:none;display:inline-block;position:relative}._4FGROW_quiet[data-variant=todo]{border:1px solid var(--dsw-alias-label-tertiary)}._4FGROW_quiet[data-variant=quiet]{color:var(--dsw-alias-label-tertiary)}._4FGROW_quiet[data-variant=quiet]:before{corner-shape:round;content:\"\";opacity:.1;background:currentColor;border-radius:50%;position:absolute;inset:0}._4FGROW_quiet[data-variant=quiet]:after{corner-shape:round;content:\"\";background:currentColor;border-radius:50%;position:absolute;inset:20%}";
		const tagId$12 = "@sophialin/dsh-research-team/state-dot.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$12) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@sophialin/dsh-research-team";
			tag.dataset.pluginCss = tagId$12;
			tag.textContent = css$12;
			document.head.appendChild(tag);
		}
		var state_dot_module_css_default = { "quiet": "_4FGROW_quiet" };
		//#endregion
		//#region src/client/TeamStateDot.tsx
		/**
		* Render the one shared Team status indicator. Native StateDot states pass
		* through; the quiet statuses mirror StateDot geometry locally so every
		* surface renders the same shape — todo a hollow ring (not started), quiet a
		* solid tertiary dot with the same 10% halo (closed, unavailable).
		*/
		function TeamStateDot({ state, size = 10 }) {
			if (state === "todo" || state === "quiet") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: state_dot_module_css_default.quiet,
				"data-variant": state,
				style: {
					width: size,
					height: size
				},
				"aria-hidden": "true"
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.StateDot, {
				state,
				size
			});
		}
		//#endregion
		//#region \0dsh-css:C:\Sophia\科研\AI科研助手开发\dsh-research-team\packages\client-agent-team\src\client\presence.module.css.mjs
		const css$11 = "._5TulOq_target{flex:0 0 14px;justify-content:center;align-items:center;display:inline-flex}";
		const tagId$11 = "@sophialin/dsh-research-team/presence.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$11) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@sophialin/dsh-research-team";
			tag.dataset.pluginCss = tagId$11;
			tag.textContent = css$11;
			document.head.appendChild(tag);
		}
		var presence_module_css_default = { "target": "_5TulOq_target" };
		//#endregion
		//#region src/client/TeamPresenceDot.tsx
		function presenceLabel(status, t) {
			const label = status.presence === "available" ? t("statusAvailable") : status.presence === "working" ? t("statusWorking") : status.presence === "error" ? t("statusError") : t("statusUnavailable");
			return status.diagnostic === void 0 ? label : `${label}: ${diagnosticText(status)}`;
		}
		/** One line of human-readable diagnostic text: the reason, plus the refused artifact path when one was reported. */
		function diagnosticText(status) {
			const diagnostic = status.diagnostic;
			if (diagnostic === void 0) return "";
			return diagnostic.location === void 0 ? diagnostic.detail : `${diagnostic.detail} (${diagnostic.location.path})`;
		}
		/**
		* Whether the restart action can help an unavailable Member: it heals
		* transient and repairable failures, but not a transient rollover window
		* (which resolves on its own).
		*/
		function restartOffered(status) {
			return status.diagnostic?.class !== "rollover";
		}
		/** Shared presence → indicator mapping for dots and avatar badges. */
		function presenceDotState(presence) {
			return presence === "available" ? "done" : presence === "working" ? "ongoing" : presence === "error" ? "error" : "quiet";
		}
		function TeamPresenceDot({ status, t }) {
			const label = presenceLabel(status, t);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
				label,
				delayMs: 300,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: presence_module_css_default.target,
					role: "img",
					"aria-label": label,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamStateDot, { state: presenceDotState(status.presence) })
				})
			});
		}
		//#endregion
		//#region \0dsh-css:C:\Sophia\科研\AI科研助手开发\dsh-research-team\packages\client-agent-team\src\client\sidebar.module.css.mjs
		const css$10 = "html[data-agent-team-mode=team] button[class*=newSession]{display:none}html[data-agent-team-mode=team] nav[class*=panelList]{display:none}.VkB4XW_workspaceBrowser{flex-direction:column;height:100%;min-height:0;padding:0 8px 8px;display:flex}.VkB4XW_railButton{color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:0;justify-content:center;align-items:center;padding:0;display:inline-flex}.VkB4XW_railButton:hover,.VkB4XW_railButton:focus-visible{--team-mark-ring:var(--dsw-alias-interactive-bg-hover);background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.VkB4XW_railButton:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:1px}.VkB4XW_workspaceTrigger{background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-md,12px);box-sizing:border-box;color:var(--dsw-alias-label-primary);cursor:pointer;text-align:left;align-items:center;gap:6px;width:100%;min-height:34px;margin:0 0 2px;padding:4px 8px;font-size:14px;line-height:22px;display:flex}.VkB4XW_workspaceTrigger:hover,.VkB4XW_workspaceTrigger[aria-current=page]{background:var(--dsw-alias-interactive-bg-hover)}.VkB4XW_workspaceTrigger:focus-visible{border-color:var(--dsw-alias-brand-primary);outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:-2px}.VkB4XW_workspaceIcon{color:var(--dsw-alias-state-business-primary);flex:0 0 16px;justify-content:center;align-items:center;height:20px;display:inline-flex}.VkB4XW_workspaceValue{text-overflow:ellipsis;white-space:nowrap;flex:1;min-width:0;overflow:hidden}.VkB4XW_workspaceChevron{color:var(--dsw-alias-label-tertiary);flex:none;transition:transform .12s;display:inline-flex}.VkB4XW_workspaceChevronOpen{transform:rotate(180deg)}@media (prefers-reduced-motion:reduce){.VkB4XW_workspaceChevron{transition:none}}.VkB4XW_emptyState{color:var(--dsw-alias-label-tertiary);margin:8px;font-size:12px;line-height:18px}.VkB4XW_inboxCard{border-radius:var(--dsw-radius-md,12px);color:var(--dsw-alias-label-primary);cursor:pointer;text-align:left;background:0 0;border:0;flex:none;align-items:center;gap:6px;width:100%;height:34px;margin:4px 0 2px;padding:0 8px;display:flex}.VkB4XW_inboxCard:hover,.VkB4XW_inboxCard:focus-visible,.VkB4XW_inboxCard[aria-current=page]{--team-mark-ring:var(--dsw-alias-interactive-bg-hover);background:var(--dsw-alias-interactive-bg-hover)}.VkB4XW_inboxCard:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:-2px}.VkB4XW_inboxCard .VkB4XW_inboxMark{color:var(--dsw-alias-label-tertiary)}.VkB4XW_inboxCardLabel{text-overflow:ellipsis;white-space:nowrap;min-width:0;font-size:14px;line-height:20px;overflow:hidden}.VkB4XW_inboxMark{flex:0 0 16px;display:inline-flex;position:relative}.VkB4XW_inboxDot{background:var(--dsw-alias-state-business-primary);box-shadow:0 0 0 2px var(--team-mark-ring,var(--dsw-specific-sidebar-fill)), 0 0 0 2px var(--dsw-specific-sidebar-fill);corner-shape:round;border-radius:50%;width:8px;height:8px;position:absolute;top:-2px;left:-2px}.VkB4XW_railWorkspace{flex-direction:column;align-items:center;gap:8px;padding-top:8px;display:flex}.VkB4XW_railButton{corner-shape:round;border-radius:50%;width:36px;height:36px;position:relative}.VkB4XW_railButton[aria-current=page]{--team-mark-ring:var(--dsw-alias-interactive-bg-hover);background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.VkB4XW_workspaceSection{flex-direction:column;flex:1;gap:4px;min-height:0;margin-top:2px;display:flex;overflow-y:auto}.VkB4XW_section{flex-direction:column;display:flex}.VkB4XW_sectionHeader{align-items:center;min-height:26px;padding-right:2px;display:flex}.VkB4XW_sectionToggle{border-radius:var(--dsw-radius-xs,4px);color:var(--dsw-alias-label-tertiary);cursor:pointer;background:0 0;border:0;align-items:center;gap:4px;min-width:0;min-height:24px;padding:0 6px;font-size:12px;line-height:18px;display:inline-flex}.VkB4XW_sectionToggle:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:1px}.VkB4XW_sectionToggle:hover .VkB4XW_sectionChevron,.VkB4XW_sectionToggle:focus-visible .VkB4XW_sectionChevron{color:var(--dsw-alias-label-primary)}.VkB4XW_sectionChevron{color:var(--dsw-alias-label-tertiary);flex:none;transition:transform .12s,color .12s}.VkB4XW_sectionToggle[aria-expanded=false] .VkB4XW_sectionChevron{transform:rotate(-90deg)}.VkB4XW_sectionTitle{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.VkB4XW_sectionActions{align-items:center;margin-left:auto;display:inline-flex}.VkB4XW_panel{flex-direction:column;display:flex}.VkB4XW_iconButton{corner-shape:round;color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:0;border-radius:50%;justify-content:center;align-items:center;width:24px;height:24px;padding:0;display:inline-flex}.VkB4XW_iconButton:hover,.VkB4XW_iconButton:focus-visible{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.VkB4XW_iconButton:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:1px}.VkB4XW_textButton{border-radius:var(--dsw-radius-sm,5px);color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:0;padding:2px 5px;font-size:11px;line-height:18px}.VkB4XW_textButton:hover,.VkB4XW_textButton:focus-visible{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.VkB4XW_textButton:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:1px}.VkB4XW_textButton:disabled{cursor:not-allowed;opacity:.4}.VkB4XW_channelList,.VkB4XW_agentList{flex-direction:column;gap:1px;padding:0 4px 4px;display:flex}.VkB4XW_sidebarRowDragging{opacity:.5}.VkB4XW_sidebarRowDropBefore,.VkB4XW_sidebarRowDropAfter{position:relative}.VkB4XW_sidebarRowDropBefore:before,.VkB4XW_sidebarRowDropAfter:after{content:\"\";z-index:1;background:linear-gradient(55deg, transparent calc(50% - 1px), var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px), transparent calc(50% + 1px)) 0 0 / 5px 7px no-repeat, linear-gradient(125deg, transparent calc(50% - 1px), var(--dsw-alias-state-business-primary) calc(50% - 1px) calc(50% + 1px), transparent calc(50% + 1px)) 0 5px / 5px 7px no-repeat, linear-gradient(var(--dsw-alias-state-business-primary) 0 0) 4px 5px / calc(100% - 4px) 2px no-repeat;pointer-events:none;height:12px;position:absolute;left:0;right:4px}.VkB4XW_sidebarRowDropBefore:before{top:-7px}.VkB4XW_sidebarRowDropAfter:after{bottom:-7px}.VkB4XW_channelRow{border-radius:var(--dsw-radius-md,12px);color:var(--dsw-alias-label-primary);align-items:center;min-height:30px;display:flex;position:relative}.VkB4XW_channelSelect{border-radius:var(--dsw-radius-md,12px);box-sizing:border-box;color:inherit;cursor:pointer;text-align:left;background:0 0;border:0;flex:1;align-items:center;min-width:0;min-height:30px;padding:3px 4px 3px 8px;display:flex}.VkB4XW_channelSelect:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:-2px}.VkB4XW_channelName{text-overflow:ellipsis;white-space:nowrap;font-size:13px;font-weight:400;line-height:18px;overflow:hidden}.VkB4XW_agentRow{border-radius:var(--dsw-radius-md,12px);color:var(--dsw-alias-label-primary);align-items:center;min-height:38px;display:flex;position:relative}.VkB4XW_agentSelect{border-radius:var(--dsw-radius-md,12px);box-sizing:border-box;color:inherit;cursor:pointer;text-align:left;background:0 0;border:0;flex:1;grid-template-columns:24px minmax(0,1fr);align-items:center;gap:0 8px;min-width:0;min-height:38px;padding:3px 4px 3px 8px;display:grid}.VkB4XW_agentSelect:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:-2px}.VkB4XW_agentSelect[aria-current=page]{background:var(--dsw-alias-interactive-bg-hover);border-radius:var(--dsw-radius-md,12px)}.VkB4XW_agentRow:hover .VkB4XW_agentSelect[aria-current=page],.VkB4XW_agentRow:focus-within .VkB4XW_agentSelect[aria-current=page],.VkB4XW_agentRow[data-menu-open] .VkB4XW_agentSelect[aria-current=page]{background:0 0}.VkB4XW_agentAvatar{background:hsl(var(--team-avatar-hue,212) 42% 46%);corner-shape:round;color:#fff;cursor:default;border-radius:50%;flex:0 0 24px;justify-content:center;align-items:center;width:24px;height:24px;font-size:11px;font-weight:600;display:inline-flex;position:relative}.VkB4XW_agentAvatarBadge{background:var(--dsw-specific-sidebar-fill);corner-shape:round;box-shadow:0 0 0 1px var(--dsw-specific-sidebar-fill);border-radius:50%;justify-content:center;align-items:center;width:12px;height:12px;padding:1px;line-height:0;display:inline-flex;position:absolute;bottom:-3px;right:-3px}.VkB4XW_agentCopy{flex-direction:column;justify-content:flex-start;min-width:0;display:flex}.VkB4XW_agentCopy strong{text-overflow:ellipsis;white-space:nowrap;font-size:13px;font-weight:500;line-height:17px;overflow:hidden}.VkB4XW_agentCopy small{color:var(--dsw-alias-label-tertiary);text-overflow:ellipsis;white-space:nowrap;font-size:10px;line-height:13px;overflow:hidden}.VkB4XW_unavailableDot{background:var(--dsw-alias-label-tertiary);corner-shape:round;border-radius:50%;width:7px;height:7px;display:inline-block}.VkB4XW_rowMenu{flex:none;align-items:center;padding-right:4px;display:none}.VkB4XW_channelRow:hover .VkB4XW_rowMenu,.VkB4XW_channelRow:focus-within .VkB4XW_rowMenu,.VkB4XW_channelRow[data-menu-open] .VkB4XW_rowMenu,.VkB4XW_agentRow:hover .VkB4XW_rowMenu,.VkB4XW_agentRow:focus-within .VkB4XW_rowMenu,.VkB4XW_agentRow[data-menu-open] .VkB4XW_rowMenu{display:inline-flex}.VkB4XW_channelRow[data-menu-open],.VkB4XW_agentRow[data-menu-open],.VkB4XW_channelRow:hover,.VkB4XW_agentRow:hover,.VkB4XW_channelRow:focus-within,.VkB4XW_agentRow:focus-within,.VkB4XW_channelRow[aria-current=page]{background:var(--dsw-alias-interactive-bg-hover)}.VkB4XW_rowMenuButton{border-radius:var(--dsw-radius-xs,4px);color:var(--dsw-alias-label-tertiary);cursor:pointer;background:0 0;border:0;justify-content:center;align-items:center;width:20px;height:20px;padding:0;display:inline-flex}.VkB4XW_rowMenuButton:hover,.VkB4XW_rowMenuButton:focus-visible{color:var(--dsw-alias-label-primary)}.VkB4XW_rowMenuButton:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:1px}.VkB4XW_retryError{color:var(--dsw-alias-state-error-primary);justify-content:space-between;align-items:center;gap:8px;padding:8px 12px;font-size:11px;display:flex}.VkB4XW_rowAlert{color:var(--dsw-alias-state-error-primary);overflow-wrap:anywhere;padding:2px 8px 6px;font-size:11px}.VkB4XW_error{color:var(--dsw-alias-state-error-primary);overflow-wrap:anywhere;margin:0;padding:4px 12px 6px;font-size:11px;line-height:16px}.VkB4XW_editDescription{color:var(--dsw-alias-label-secondary);margin:0 0 10px;font-size:12px;line-height:18px}.VkB4XW_editMemberList{gap:2px;display:grid}.VkB4XW_editChannelName{text-overflow:ellipsis;white-space:nowrap;font-size:13px;font-weight:400;line-height:18px;overflow:hidden}.VkB4XW_editHint{color:var(--dsw-alias-label-tertiary);margin:0;font-size:11px;line-height:16px}.VkB4XW_menuHint{color:var(--dsw-alias-label-tertiary);margin-left:4px;font-size:10px;line-height:14px}.VkB4XW_rowError{color:var(--dsw-alias-state-error-primary);grid-column:1/-1;margin:2px 0;font-size:11px;line-height:16px}";
		const tagId$10 = "@sophialin/dsh-research-team/sidebar.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$10) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@sophialin/dsh-research-team";
			tag.dataset.pluginCss = tagId$10;
			tag.textContent = css$10;
			document.head.appendChild(tag);
		}
		var sidebar_module_css_default = {
			"agentAvatar": "VkB4XW_agentAvatar",
			"agentAvatarBadge": "VkB4XW_agentAvatarBadge",
			"agentCopy": "VkB4XW_agentCopy",
			"agentList": "VkB4XW_agentList",
			"agentRow": "VkB4XW_agentRow",
			"agentSelect": "VkB4XW_agentSelect",
			"channelList": "VkB4XW_channelList",
			"channelName": "VkB4XW_channelName",
			"channelRow": "VkB4XW_channelRow",
			"channelSelect": "VkB4XW_channelSelect",
			"editChannelName": "VkB4XW_editChannelName",
			"editDescription": "VkB4XW_editDescription",
			"editHint": "VkB4XW_editHint",
			"editMemberList": "VkB4XW_editMemberList",
			"emptyState": "VkB4XW_emptyState",
			"error": "VkB4XW_error",
			"iconButton": "VkB4XW_iconButton",
			"inboxCard": "VkB4XW_inboxCard",
			"inboxCardLabel": "VkB4XW_inboxCardLabel",
			"inboxDot": "VkB4XW_inboxDot",
			"inboxMark": "VkB4XW_inboxMark",
			"menuHint": "VkB4XW_menuHint",
			"panel": "VkB4XW_panel",
			"railButton": "VkB4XW_railButton",
			"railWorkspace": "VkB4XW_railWorkspace",
			"retryError": "VkB4XW_retryError",
			"rowAlert": "VkB4XW_rowAlert",
			"rowError": "VkB4XW_rowError",
			"rowMenu": "VkB4XW_rowMenu",
			"rowMenuButton": "VkB4XW_rowMenuButton",
			"section": "VkB4XW_section",
			"sectionActions": "VkB4XW_sectionActions",
			"sectionChevron": "VkB4XW_sectionChevron",
			"sectionHeader": "VkB4XW_sectionHeader",
			"sectionTitle": "VkB4XW_sectionTitle",
			"sectionToggle": "VkB4XW_sectionToggle",
			"sidebarRowDragging": "VkB4XW_sidebarRowDragging",
			"sidebarRowDropAfter": "VkB4XW_sidebarRowDropAfter",
			"sidebarRowDropBefore": "VkB4XW_sidebarRowDropBefore",
			"textButton": "VkB4XW_textButton",
			"unavailableDot": "VkB4XW_unavailableDot",
			"workspaceBrowser": "VkB4XW_workspaceBrowser",
			"workspaceChevron": "VkB4XW_workspaceChevron",
			"workspaceChevronOpen": "VkB4XW_workspaceChevronOpen",
			"workspaceIcon": "VkB4XW_workspaceIcon",
			"workspaceSection": "VkB4XW_workspaceSection",
			"workspaceTrigger": "VkB4XW_workspaceTrigger",
			"workspaceValue": "VkB4XW_workspaceValue"
		};
		//#endregion
		//#region src/client/TeamMemberAvatar.tsx
		/**
		* Sidebar Member avatar reusing the conversation identity language: the
		* deterministic member hue and handle initial, with the presence indicator
		* overlaid at the bottom-right so one glyph carries identity and state.
		*/
		function TeamMemberAvatar({ status, t }) {
			const label = presenceLabel(status, t);
			const state = presenceDotState(status.presence);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
				label,
				delayMs: 300,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
					className: sidebar_module_css_default.agentAvatar,
					style: { "--team-avatar-hue": memberHue(status.member.memberId) },
					role: "img",
					"aria-label": label,
					children: [status.member.handle.replace("@", "").slice(0, 1).toUpperCase(), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: sidebar_module_css_default.agentAvatarBadge,
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamStateDot, { state })
					})]
				})
			});
		}
		//#endregion
		//#region \0dsh-css:C:\Sophia\科研\AI科研助手开发\dsh-research-team\packages\client-agent-team\src\client\member-row.module.css.mjs
		const css$9 = ".Ll199a_row{border-radius:var(--dsw-radius-md,12px);grid-template-columns:24px minmax(0,1fr);align-items:center;gap:0 10px;min-height:40px;padding:8px 10px;display:grid}.Ll199a_row:has(button){grid-template-columns:24px minmax(0,1fr) auto}.Ll199a_row:hover{background:var(--dsw-alias-interactive-bg-hover)}.Ll199a_copy{min-width:0;display:grid}.Ll199a_copy strong{color:var(--dsw-alias-label-primary);text-overflow:ellipsis;white-space:nowrap;font-size:12px;font-weight:500;line-height:18px;overflow:hidden}.Ll199a_copy small{color:var(--dsw-alias-label-tertiary);text-overflow:ellipsis;white-space:nowrap;font-size:11px;line-height:16px;overflow:hidden}.Ll199a_action{justify-self:end;min-width:64px}.Ll199a_error{color:var(--dsw-alias-state-error-primary);grid-column:2/-1;margin:2px 0 0;font-size:11px;line-height:16px}@media (width<=600px){.Ll199a_row,.Ll199a_row:has(button){grid-template-columns:24px minmax(0,1fr);align-items:start}.Ll199a_action{grid-column:2;justify-self:start;margin-top:6px}}";
		const tagId$9 = "@sophialin/dsh-research-team/member-row.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$9) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@sophialin/dsh-research-team";
			tag.dataset.pluginCss = tagId$9;
			tag.textContent = css$9;
			document.head.appendChild(tag);
		}
		var member_row_module_css_default = {
			"action": "Ll199a_action",
			"copy": "Ll199a_copy",
			"error": "Ll199a_error",
			"row": "Ll199a_row"
		};
		//#endregion
		//#region src/client/TeamMemberRow.tsx
		/**
		* The one place a Member's identity is drawn: the presence-bearing avatar plus
		* the handle over its description. Read-only rosters, the rosters with a
		* membership action, and the sidebar Agent list all render this, so identity,
		* tone and truncation cannot drift between surfaces that show the same person.
		*
		* A fragment, not a row: each surface owns its own row element, hit target and
		* grid, and places this identity in that grid's first two tracks. The handle
		* spelling is the surface's call — rosters address Members the way the
		* composer does (`@handle`), the sidebar names them as the directory does.
		*/
		function TeamMemberIdentity({ status, name, className, t }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamMemberAvatar, {
				status,
				t
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
				className: className === void 0 ? member_row_module_css_default.copy : `${member_row_module_css_default.copy} ${className}`,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: name ?? `@${status.member.handle.replace(/^@/, "")}` }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", { children: status.member.description })]
			})] });
		}
		/**
		* The one roster row: identity, an optional membership action, and the row's
		* own failure line. The action is the row's only chrome, so the eye lands on
		* the handle first and on the action second. A read-only roster omits it and
		* the trailing track collapses, handing its width back to the description.
		*/
		function TeamMemberRow({ status, action, error, className, t }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: className === void 0 ? member_row_module_css_default.row : `${member_row_module_css_default.row} ${className}`,
				"data-team-member-row": true,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamMemberIdentity, {
						status,
						t
					}),
					action !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
						size: "sm",
						variant: "outline",
						className: member_row_module_css_default.action,
						disabled: action.disabled === true,
						onClick: action.onSelect,
						children: action.label
					}),
					error !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: member_row_module_css_default.error,
						role: "alert",
						children: error
					})
				]
			});
		}
		//#endregion
		//#region \0dsh-css:C:\Sophia\科研\AI科研助手开发\dsh-research-team\packages\client-agent-team\src\client\members.module.css.mjs
		const css$8 = ".e3PnCG_body{max-height:min(65vh,560px);overflow-y:auto}.e3PnCG_content{outline:none;gap:12px;display:grid}.e3PnCG_group{gap:2px;display:grid}.e3PnCG_group+.e3PnCG_group{border-top:1px solid var(--dsw-alias-border-l2);padding-top:10px}.e3PnCG_group h3{color:var(--dsw-alias-label-secondary);margin:0 0 3px;font-size:12px;font-weight:600;line-height:18px}.e3PnCG_member{margin:0 -6px}.e3PnCG_state,.e3PnCG_error{margin:0;padding:6px 0;font-size:12px;line-height:18px}.e3PnCG_state{color:var(--dsw-alias-label-tertiary)}.e3PnCG_error{color:var(--dsw-alias-state-error-primary)}@media (width<=600px){.e3PnCG_body{max-height:calc(100vh - 160px)}}";
		const tagId$8 = "@sophialin/dsh-research-team/members.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$8) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@sophialin/dsh-research-team";
			tag.dataset.pluginCss = tagId$8;
			tag.textContent = css$8;
			document.head.appendChild(tag);
		}
		var members_module_css_default = {
			"body": "e3PnCG_body",
			"content": "e3PnCG_content",
			"error": "e3PnCG_error",
			"group": "e3PnCG_group",
			"member": "e3PnCG_member",
			"state": "e3PnCG_state"
		};
		//#endregion
		//#region src/client/TeamMembersAction.tsx
		function TeamMembersAction({ wide, loadMemberGroups, t }) {
			const [panelOpen, setPanelOpen] = (0, react.useState)(false);
			const [groups, setGroups] = (0, react.useState)([]);
			const [loading, setLoading] = (0, react.useState)(false);
			const [error, setError] = (0, react.useState)();
			const triggerRef = (0, react.useRef)(null);
			const contentRef = (0, react.useRef)(null);
			(0, react.useEffect)(() => {
				if (!panelOpen) return;
				queueMicrotask(() => {
					contentRef.current?.focus();
				});
			}, [panelOpen]);
			const openMembers = () => {
				setPanelOpen(true);
				setLoading(true);
				setError(void 0);
				loadMemberGroups().then(setGroups).catch((cause) => {
					setError(cause instanceof Error ? cause.message : String(cause));
				}).finally(() => {
					setLoading(false);
				});
			};
			const closeMembers = () => {
				setPanelOpen(false);
				queueMicrotask(() => {
					triggerRef.current?.focus();
				});
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
				label: t("members"),
				delayMs: 500,
				disabled: wide,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
					ref: triggerRef,
					type: "button",
					className: wide ? team_module_css_default.settingsAction : `${team_module_css_default.settingsAction} ${team_module_css_default.rail}`,
					"aria-label": t("members"),
					"aria-haspopup": "dialog",
					onClick: openMembers,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconUserOutlineRegular, { size: wide ? 16 : 18 }), wide && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("members") })]
				})
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
				open: panelOpen,
				onClose: closeMembers,
				title: t("members"),
				closeLabel: t("close"),
				contentClassName: members_module_css_default.body,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					ref: contentRef,
					className: members_module_css_default.content,
					tabIndex: -1,
					children: [
						loading && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: members_module_css_default.state,
							role: "status",
							children: t("loadingAgents")
						}),
						!loading && groups.length === 0 && error === void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: members_module_css_default.state,
							children: t("emptyAgents")
						}),
						!loading && groups.map((group) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
							className: members_module_css_default.group,
							"aria-labelledby": `team-members-${group.workspaceId}`,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
								id: `team-members-${group.workspaceId}`,
								children: group.workspaceTitle
							}), group.members.map((status) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamMemberRow, {
								status,
								className: members_module_css_default.member,
								t
							}, status.member.memberId))]
						}, group.workspaceId)),
						error !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: members_module_css_default.error,
							role: "alert",
							children: error
						})
					]
				})
			})] });
		}
		//#endregion
		//#region src/client/requests.ts
		/** Fresh idempotency identity for one Client-initiated durable request. */
		const mintRequestId = () => crypto.randomUUID();
		/**
		* Upload composer files in order. One failure stops with the error text; the
		* caller keeps its chips so a retry uploads only the still-pending files.
		*/
		const uploadComposerFiles = async (putAttachment, workspaceId, files) => {
			const attachmentIds = [];
			for (const file of files) {
				const uploaded = await putAttachment({
					requestId: mintRequestId(),
					workspaceId,
					name: file.name,
					mediaType: file.type === "" ? void 0 : file.type,
					bytesBase64: bytesToBase64(new Uint8Array(await file.arrayBuffer()))
				});
				if (!uploaded.ok) return {
					ok: false,
					error: uploaded.error.message
				};
				attachmentIds.push(uploaded.value.attachmentId);
			}
			return {
				ok: true,
				attachmentIds
			};
		};
		//#endregion
		//#region \0dsh-css:C:\Sophia\科研\AI科研助手开发\dsh-research-team\packages\client-agent-team\src\client\composer.module.css.mjs
		const css$7 = ".LrJPBW_root{padding:0 var(--dsh-composer-side-clearance,16px) 8px;flex-direction:column;align-items:center;display:flex}.LrJPBW_card{box-sizing:border-box;width:100%;max-width:var(--dsh-composer-card-max-width,780px);--dsw-elevation-stroke-color:var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-panel,22px);background:var(--dsw-specific-input-major,var(--dsw-alias-bg-layer-1));box-shadow:var(--dsw-elevation-soft);border:0;flex-direction:column;gap:6px;padding:10px 0 0;display:flex;position:relative;container-type:inline-size}.LrJPBW_inputArea{min-height:28px;position:relative}.LrJPBW_inputArea textarea{box-sizing:border-box;resize:none;width:100%;min-height:28px;max-height:336px;color:var(--dsw-alias-label-primary,var(--dsw-alias-label-primary));font:inherit;white-space:pre-wrap;overflow-wrap:anywhere;background:0 0;border:0;outline:0;padding:4px 12px 0 16px;font-size:15px;line-height:24px;display:block;overflow-y:auto}.LrJPBW_inputArea textarea::placeholder{color:var(--dsw-alias-label-caption,var(--dsw-alias-label-tertiary))}.LrJPBW_inputArea textarea:disabled{cursor:not-allowed;opacity:.55}.LrJPBW_mentionMenu{z-index:10;border-radius:var(--dsw-radius-lg,16px);background:var(--dsw-specific-menu);max-height:min(320px,40vh);backdrop-filter:var(--dsw-menu-backdrop-filter);--dsw-elevation-stroke-color:var(--dsw-alias-border-l1);box-shadow:var(--dsw-elevation-prominent);border:0;padding:4px;position:absolute;bottom:calc(100% + 12px);left:0;right:0;overflow-y:auto}.LrJPBW_mentionOption{border-radius:var(--dsw-radius-md,8px);width:100%;min-height:40px;color:var(--dsw-alias-label-primary,var(--dsw-alias-label-primary));cursor:pointer;text-align:left;background:0 0;border:0;grid-template-columns:16px minmax(0,auto) minmax(0,1fr);align-items:center;gap:8px;padding:8px 10px;font-size:14px;line-height:22px;display:grid}.LrJPBW_mentionOption:hover,.LrJPBW_mentionOption[aria-selected=true]{background:var(--dsw-alias-interactive-bg-hover)}.LrJPBW_mentionName{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.LrJPBW_mentionAllDot{corner-shape:round;background:var(--dsw-alias-label-primary);border-radius:50%;justify-self:center;width:8px;height:8px}.LrJPBW_mentionDescription{min-width:0;color:var(--dsw-alias-label-tertiary,var(--dsw-alias-label-tertiary));text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.LrJPBW_toolbar{justify-content:flex-end;align-items:center;gap:12px;min-height:34px;padding:2px 8px 6px;display:flex}.LrJPBW_asTaskPill{border-radius:var(--dsw-radius-sm,8px);color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:0;flex:none;align-items:center;gap:4px;height:28px;padding:0 10px 0 8px;font-size:13px;font-weight:500;line-height:20px;display:inline-flex}.LrJPBW_asTaskPill:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}.LrJPBW_asTaskPill:focus-visible{box-shadow:0 0 0 2px var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary))}.LrJPBW_asTaskPill:disabled{color:var(--dsw-alias-label-dimmed);cursor:default}.LrJPBW_asTaskPillOn,.LrJPBW_asTaskPillOn:hover:not(:disabled){background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-label-primary-foreground)}.LrJPBW_asTaskLabel{white-space:nowrap}@container (width<=560px){.LrJPBW_toolbar{gap:8px}}.LrJPBW_attachButton{background:var(--dsw-specific-selector);corner-shape:round;color:var(--dsw-alias-label-primary);cursor:pointer;border:0;border-radius:999px;flex:none;place-items:center;width:28px;height:28px;display:grid}.LrJPBW_attachButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-solid)}.LrJPBW_attachButton:disabled{cursor:default;opacity:.5}.LrJPBW_attachButton:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:1px}.LrJPBW_fileInput{display:none}.LrJPBW_fileChips{flex-wrap:wrap;gap:4px;margin:0;padding:4px 8px 0;list-style:none;display:flex}.LrJPBW_fileChip{background:var(--dsw-alias-interactive-bg-hover);border-radius:var(--dsw-radius-sm,6px);align-items:center;gap:4px;max-width:100%;padding:2px 4px 2px 8px;display:inline-flex}.LrJPBW_fileChipSize{color:var(--dsw-alias-label-tertiary);margin-left:6px}.LrJPBW_imageChip{align-items:center;display:flex}.LrJPBW_imageChipPreview{border:1px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-xs,4px);object-fit:cover;width:56px;height:40px}.LrJPBW_fileChipName{text-overflow:ellipsis;white-space:nowrap;max-width:220px;font-size:11px;line-height:16px;overflow:hidden}.LrJPBW_fileChipRemove{border-radius:var(--dsw-radius-xs,4px);color:var(--dsw-alias-label-tertiary);cursor:pointer;background:0 0;border:0;justify-content:center;align-items:center;width:16px;height:16px;padding:0;font-size:12px;display:inline-flex}.LrJPBW_fileChipRemove:hover,.LrJPBW_fileChipRemove:focus-visible{color:var(--dsw-alias-label-primary)}.LrJPBW_fileChipRemove:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:1px}.LrJPBW_sendButton{background:var(--dsw-alias-button-info-fill,var(--dsw-alias-button-primary-fill));corner-shape:round;color:#fff;cursor:pointer;border:0;border-radius:999px;justify-content:center;align-items:center;width:34px;height:34px;margin-left:auto;padding:0;transition:background-color .1s,opacity .1s;display:inline-flex;transform:translateY(-2px)}.LrJPBW_sendButton:hover:not(:disabled){background:var(--dsw-alias-button-info-hover,var(--dsw-alias-button-primary-hover))}.LrJPBW_sendButton:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:2px}.LrJPBW_sendButton:disabled{cursor:default;opacity:.4}.LrJPBW_confirmation{color:var(--dsw-alias-label-tertiary);align-self:stretch;margin:0;padding:0 16px;font-size:12px;line-height:18px}.LrJPBW_notifyRow{color:var(--dsw-alias-label-tertiary,var(--dsw-alias-label-tertiary));overflow-wrap:anywhere;margin:0;padding:0 16px;font-size:12px;line-height:18px}.LrJPBW_error{color:var(--dsw-alias-state-error-primary);align-self:stretch;margin:0;padding:0 4px 2px;font-size:12px;line-height:18px}@media (width<=600px){.LrJPBW_mentionOption{grid-template-columns:16px minmax(0,1fr);min-height:36px;padding-block:6px}.LrJPBW_mentionDescription{display:none}}@media (prefers-reduced-motion:reduce){.LrJPBW_sendButton{transition:none}}";
		const tagId$7 = "@sophialin/dsh-research-team/composer.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$7) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@sophialin/dsh-research-team";
			tag.dataset.pluginCss = tagId$7;
			tag.textContent = css$7;
			document.head.appendChild(tag);
		}
		var composer_module_css_default = {
			"asTaskLabel": "LrJPBW_asTaskLabel",
			"asTaskPill": "LrJPBW_asTaskPill",
			"asTaskPillOn": "LrJPBW_asTaskPillOn",
			"attachButton": "LrJPBW_attachButton",
			"card": "LrJPBW_card",
			"confirmation": "LrJPBW_confirmation",
			"error": "LrJPBW_error",
			"fileChip": "LrJPBW_fileChip",
			"fileChipName": "LrJPBW_fileChipName",
			"fileChipRemove": "LrJPBW_fileChipRemove",
			"fileChipSize": "LrJPBW_fileChipSize",
			"fileChips": "LrJPBW_fileChips",
			"fileInput": "LrJPBW_fileInput",
			"imageChip": "LrJPBW_imageChip",
			"imageChipPreview": "LrJPBW_imageChipPreview",
			"inputArea": "LrJPBW_inputArea",
			"mentionAllDot": "LrJPBW_mentionAllDot",
			"mentionDescription": "LrJPBW_mentionDescription",
			"mentionMenu": "LrJPBW_mentionMenu",
			"mentionName": "LrJPBW_mentionName",
			"mentionOption": "LrJPBW_mentionOption",
			"notifyRow": "LrJPBW_notifyRow",
			"root": "LrJPBW_root",
			"sendButton": "LrJPBW_sendButton",
			"toolbar": "LrJPBW_toolbar"
		};
		//#endregion
		//#region src/client/TeamComposer.tsx
		function findMention(draft, caret) {
			const beforeCaret = draft.slice(0, caret);
			if (beforeCaret.length === 0 || /\s/u.test(beforeCaret.at(-1) ?? "")) return void 0;
			let tokenStart = beforeCaret.length;
			while (tokenStart > 0 && !/\s/u.test(beforeCaret[tokenStart - 1])) tokenStart -= 1;
			const at = beforeCaret.lastIndexOf("@");
			if (at < tokenStart) return void 0;
			if (at > 0 && /[\p{L}\p{N}_]/u.test(beforeCaret[at - 1])) return void 0;
			return {
				start: at,
				end: caret,
				query: beforeCaret.slice(at + 1)
			};
		}
		function mentionCandidates(members, query) {
			const normalized = query.toLocaleLowerCase();
			return members.filter((status) => status.presence !== "unavailable" && status.member.state !== "inactive" && status.member.state !== "archived" && status.member.handle.toLocaleLowerCase().startsWith(normalized));
		}
		/** Thread followers rank first: mentioning them delivers directly, while a non-follower enters the two-send invite flow. */
		function rankMentionCandidates(candidates, followers) {
			if (followers === void 0 || followers.size === 0) return candidates;
			return [...candidates].sort((left, right) => Number(followers.has(right.member.memberId)) - Number(followers.has(left.member.memberId)));
		}
		/** One object URL per draft file; revoked when the draft is removed. */
		const draftPreviewUrls = /* @__PURE__ */ new WeakMap();
		function draftPreviewUrl(file) {
			if (!file.type.startsWith("image/")) return void 0;
			let url = draftPreviewUrls.get(file);
			if (url === void 0) {
				url = URL.createObjectURL(file);
				draftPreviewUrls.set(file, url);
			}
			return url;
		}
		function TeamComposer({ members, followerMemberIds, drafts, draftKey, pending, confirmation, error, onEdit, onSubmit, placeholder, pendingFiles, onFilesChange, asTask, onAsTaskChange, t }) {
			const inputRef = (0, react.useRef)(null);
			const fileInputRef = (0, react.useRef)(null);
			const rootRef = (0, react.useRef)(null);
			const menuRef = (0, react.useRef)(null);
			const activeOptionRef = (0, react.useRef)(null);
			const composingRef = (0, react.useRef)(false);
			const { draft, recipients } = (0, react.useSyncExternalStore)(drafts.subscribe, () => drafts.getSnapshot(draftKey));
			const [mention, setMention] = (0, react.useState)();
			const [highlight, setHighlight] = (0, react.useState)(0);
			const memberCandidates = mention === void 0 ? [] : rankMentionCandidates(mentionCandidates(members, mention.query), followerMemberIds);
			const options = mention !== void 0 && "all".startsWith(mention.query.toLocaleLowerCase()) ? [{ kind: "all" }, ...memberCandidates.map((status) => ({
				kind: "member",
				status
			}))] : memberCandidates.map((status) => ({
				kind: "member",
				status
			}));
			const menuOpen = mention !== void 0 && options.length > 0;
			const activeOption = options[highlight];
			const activeOptionKey = activeOption === void 0 ? void 0 : activeOption.kind === "all" ? "all" : activeOption.status.member.memberId;
			const allCount = allMentionMembers(members).length;
			const listId = "team-mention-suggestions";
			const menuMaxHeight = (0, _deepseek_ai_dsh_client_ui_primitives.useAnchoredMaxHeight)(menuRef, 320, menuOpen ? draft : null);
			(0, _deepseek_ai_dsh_client_ui_primitives.useDismissOnOutsidePointer)(rootRef, menuOpen, (open) => {
				if (!open) setMention(void 0);
			});
			(0, react.useLayoutEffect)(() => {
				const input = inputRef.current;
				if (input === null) return;
				input.style.height = "auto";
				input.style.height = `${Math.min(input.scrollHeight, 180)}px`;
			}, [draft]);
			(0, react.useEffect)(() => {
				if (mention === void 0 || options.length === 0) {
					setHighlight(0);
					return;
				}
				setHighlight((current) => Math.min(current, options.length - 1));
			}, [mention, options.length]);
			(0, react.useLayoutEffect)(() => {
				if (!menuOpen) return;
				activeOptionRef.current?.scrollIntoView?.({ block: "nearest" });
			}, [
				menuOpen,
				highlight,
				activeOptionKey
			]);
			(0, react.useEffect)(() => {
				const active = document.activeElement;
				if (active !== document.body && active?.closest("[aria-current=\"page\"]") === null) return;
				inputRef.current?.focus({ preventScroll: true });
			}, []);
			(0, react.useEffect)(() => {
				if (confirmation === void 0 || pending) return;
				inputRef.current?.focus({ preventScroll: true });
			}, [confirmation, pending]);
			const memberHandles = new Map(members.map((status) => [status.member.memberId, status.member.handle]));
			const pruneRecipients = (nextDraft) => {
				if (containsAllMention(nextDraft)) return;
				const next = new Set([...recipients].filter((memberId) => {
					const handle = memberHandles.get(memberId);
					return handle !== void 0 && containsMention(nextDraft, handle);
				}));
				if (next.size !== recipients.size) drafts.writeRecipients(draftKey, next);
			};
			(0, react.useEffect)(() => {
				if (members.length === 0) return;
				pruneRecipients(draft);
			}, [
				draft,
				recipients,
				members
			]);
			const notifiedIds = [...new Set([...recipients, ...mentionedMemberIds(draft, members)])].sort();
			const updateMention = (nextDraft, caret) => {
				const match = findMention(nextDraft, caret);
				setMention(match);
				if (match === void 0) setHighlight(0);
			};
			const onChange = (event) => {
				const nextDraft = event.target.value;
				drafts.writeDraft(draftKey, nextDraft);
				onEdit?.();
				pruneRecipients(nextDraft);
				updateMention(nextDraft, event.target.selectionStart ?? nextDraft.length);
			};
			const commitMention = (nextDraft, nextCaret, nextRecipients) => {
				drafts.writeDraft(draftKey, nextDraft);
				drafts.writeRecipients(draftKey, nextRecipients);
				onEdit?.();
				setMention(void 0);
				setHighlight(0);
				requestAnimationFrame(() => {
					const input = inputRef.current;
					if (input === null) return;
					input.focus({ preventScroll: true });
					input.setSelectionRange(nextCaret, nextCaret);
				});
			};
			const selectOption = (option) => {
				if (mention === void 0) return;
				if (option.kind === "all") {
					const nextDraft = `${draft.slice(0, mention.start)}@all ${draft.slice(mention.end)}`;
					const nextCaret = mention.start + 5;
					const nextRecipients = new Set(recipients);
					for (const status of allMentionMembers(members)) nextRecipients.add(status.member.memberId);
					commitMention(nextDraft, nextCaret, nextRecipients);
					return;
				}
				const member = option.status;
				const inserted = `@${member.member.handle} `;
				commitMention(`${draft.slice(0, mention.start)}${inserted}${draft.slice(mention.end)}`, mention.start + inserted.length, new Set(recipients).add(member.member.memberId));
			};
			const onPaste = (event) => {
				if (pending || onFilesChange === void 0 || pendingFiles === void 0) return;
				const files = Array.from(event.clipboardData.items).filter((item) => item.kind === "file").map((item) => item.getAsFile()).filter((file) => file !== null);
				if (files.length === 0) return;
				event.preventDefault();
				onFilesChange([...pendingFiles, ...files]);
			};
			const onKeyDown = (event) => {
				const composing = composingRef.current || event.nativeEvent.isComposing || event.nativeEvent.keyCode === 229;
				if (menuOpen && event.key === "ArrowDown") {
					event.preventDefault();
					setHighlight((current) => (current + 1) % options.length);
					return;
				}
				if (menuOpen && event.key === "ArrowUp") {
					event.preventDefault();
					setHighlight((current) => (current - 1 + options.length) % options.length);
					return;
				}
				if (event.key === "Escape" && menuOpen) {
					event.preventDefault();
					setMention(void 0);
					return;
				}
				if (menuOpen && event.key === "Tab" && !event.shiftKey) {
					event.preventDefault();
					if (activeOption !== void 0) selectOption(activeOption);
					return;
				}
				if (event.key !== "Enter" || event.shiftKey || composing || event.repeat) return;
				if (menuOpen && activeOption !== void 0) {
					event.preventDefault();
					selectOption(activeOption);
					return;
				}
				event.preventDefault();
				if (!pending && draft.trim() !== "") onSubmit();
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("form", {
				ref: rootRef,
				className: composer_module_css_default.root,
				onSubmit: (event) => {
					event.preventDefault();
					if (!pending && draft.trim() !== "") onSubmit();
				},
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: composer_module_css_default.card,
					"data-team-composer": true,
					children: [
						confirmation !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: composer_module_css_default.confirmation,
							role: "status",
							children: confirmation
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: composer_module_css_default.inputArea,
							children: [menuOpen && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								id: listId,
								ref: menuRef,
								className: composer_module_css_default.mentionMenu,
								role: "listbox",
								"aria-label": t("mentionSuggestions"),
								style: { maxHeight: menuMaxHeight },
								children: options.map((option, index) => {
									const optionId = option.kind === "all" ? `${listId}-all` : `${listId}-${option.status.member.memberId}`;
									const selected = index === highlight;
									return option.kind === "all" ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										id: optionId,
										type: "button",
										role: "option",
										"aria-selected": selected,
										className: composer_module_css_default.mentionOption,
										ref: selected ? activeOptionRef : void 0,
										onMouseDown: (event) => {
											event.preventDefault();
										},
										onClick: () => {
											selectOption(option);
										},
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: composer_module_css_default.mentionAllDot,
												"aria-hidden": "true"
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: composer_module_css_default.mentionName,
												children: "@all"
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: composer_module_css_default.mentionDescription,
												children: t("mentionAll", { count: allCount })
											})
										]
									}, "all") : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										id: optionId,
										type: "button",
										role: "option",
										"aria-selected": selected,
										className: composer_module_css_default.mentionOption,
										ref: selected ? activeOptionRef : void 0,
										onMouseDown: (event) => {
											event.preventDefault();
										},
										onClick: () => {
											selectOption(option);
										},
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamPresenceDot, {
												status: option.status,
												t
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
												className: composer_module_css_default.mentionName,
												children: ["@", option.status.member.handle]
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: composer_module_css_default.mentionDescription,
												children: option.status.member.description
											})
										]
									}, option.status.member.memberId);
								})
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("textarea", {
								ref: inputRef,
								"aria-label": t("messageDraft"),
								"aria-autocomplete": "list",
								"aria-controls": menuOpen ? listId : void 0,
								"aria-activedescendant": menuOpen && activeOption !== void 0 ? activeOption.kind === "all" ? `${listId}-all` : `${listId}-${activeOption.status.member.memberId}` : void 0,
								"aria-expanded": menuOpen,
								value: draft,
								readOnly: pending,
								placeholder: placeholder ?? t("messagePlaceholder"),
								rows: 1,
								onChange,
								onPaste,
								onKeyDown,
								onSelect: (event) => {
									updateMention(event.currentTarget.value, event.currentTarget.selectionStart ?? event.currentTarget.value.length);
								},
								onCompositionStart: () => {
									composingRef.current = true;
								},
								onCompositionEnd: () => {
									setTimeout(() => {
										composingRef.current = false;
									}, 10);
								}
							})]
						}),
						notifiedIds.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: composer_module_css_default.notifyRow,
							"data-team-notify": true,
							children: t("composerNotify", { ids: notifiedIds.map((memberId) => `@${memberHandles.get(memberId) ?? memberId}`).join(", ") })
						}),
						onFilesChange !== void 0 && pendingFiles !== void 0 && pendingFiles.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
							className: composer_module_css_default.fileChips,
							"aria-label": t("attachFiles"),
							children: pendingFiles.map((file, index) => {
								const previewUrl = draftPreviewUrl(file);
								return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
									className: `${composer_module_css_default.fileChip} ${previewUrl !== void 0 ? composer_module_css_default.imageChip : ""}`,
									children: [
										previewUrl !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
											src: previewUrl,
											alt: "",
											className: composer_module_css_default.imageChipPreview
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
											className: composer_module_css_default.fileChipName,
											title: file.name,
											children: [file.name, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: composer_module_css_default.fileChipSize,
												children: formatByteSize(file.size)
											})]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											className: composer_module_css_default.fileChipRemove,
											"aria-label": t("removeFile", { name: file.name }),
											disabled: pending,
											onClick: () => {
												const url = draftPreviewUrls.get(file);
												if (url !== void 0) URL.revokeObjectURL(url);
												onFilesChange(pendingFiles.filter((_, candidate) => candidate !== index));
											},
											children: "×"
										})
									]
								}, `${file.name}-${index}`);
							})
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: composer_module_css_default.toolbar,
							children: [
								onFilesChange !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
									ref: fileInputRef,
									type: "file",
									multiple: true,
									className: composer_module_css_default.fileInput,
									"aria-hidden": "true",
									tabIndex: -1,
									onChange: (event) => {
										const chosen = [...event.target.files ?? []];
										if (chosen.length > 0 && pendingFiles !== void 0) onFilesChange([...pendingFiles, ...chosen]);
										event.target.value = "";
									}
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
									label: t("attachFiles"),
									side: "top",
									delayMs: 500,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: composer_module_css_default.attachButton,
										"aria-label": t("attachFiles"),
										disabled: pending,
										onClick: () => {
											fileInputRef.current?.click();
										},
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPaperclipOutlineMedium, { size: 14 })
									})
								})] }),
								onAsTaskChange !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									className: asTask === true ? `${composer_module_css_default.asTaskPill} ${composer_module_css_default.asTaskPillOn}` : composer_module_css_default.asTaskPill,
									"aria-label": t("asTask"),
									"aria-pressed": asTask === true,
									title: t("asTask"),
									disabled: pending,
									onClick: () => {
										onAsTaskChange(asTask !== true);
									},
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChecklistOutlineMedium, { size: 14 }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: composer_module_css_default.asTaskLabel,
										children: t("asTask")
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "submit",
									className: composer_module_css_default.sendButton,
									"aria-label": pending ? t("sendingMessage") : t("sendMessage"),
									disabled: pending || draft.trim() === "",
									onMouseDown: (event) => {
										event.preventDefault();
										inputRef.current?.focus({ preventScroll: true });
									},
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSendOutlineRegular, { size: 16 })
								})
							]
						})
					]
				}), error !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					className: composer_module_css_default.error,
					role: "alert",
					children: error
				})]
			});
		}
		//#endregion
		//#region src/client/refs.ts
		/** Compare refs by branded prefix plus hyphen-stripped UUID, so abbreviated spellings line up with their full form. */
		function refKeyOf(ref) {
			return ref.toLowerCase().replaceAll("-", "");
		}
		/**
		* One versioned resolution cache per Host-resolved ref kind. Concurrent
		* callers deduplicate through the pending set; refs the Host does not know
		* are parked for the session so renders never retry-loop; a landing
		* resolution wakes every rendered link through the version token.
		*/
		function createRefStore(refOf) {
			const resolved = /* @__PURE__ */ new Map();
			const pending = /* @__PURE__ */ new Set();
			/** Refs the Host did not recognize; never re-queried (no retry loops). */
			const unresolvable = /* @__PURE__ */ new Set();
			const listeners = /* @__PURE__ */ new Set();
			let version = 0;
			const emit = () => {
				version += 1;
				for (const listener of listeners) listener();
			};
			const subscribe = (listener) => {
				listeners.add(listener);
				return () => {
					listeners.delete(listener);
				};
			};
			/** Stable snapshot token; the map is read directly after this changes. */
			const getSnapshot = () => version;
			/** React binding: re-renders the caller when any ref resolution lands. */
			const useVersion = () => (0, react.useSyncExternalStore)(subscribe, getSnapshot, getSnapshot);
			const cached = (ref) => resolved.get(ref);
			/** Store one resolution (click path) and wake every rendered link. */
			const remember = (entry) => {
				resolved.set(refOf(entry), entry);
				pending.delete(refOf(entry));
				emit();
			};
			/**
			* Batch-resolve unknown refs through the Host lookup. Concurrent callers
			* deduplicate through the pending set; failures just clear the pending mark
			* so a later interaction can retry.
			*/
			const resolveUnknown = async (refs, lookup) => {
				const missing = refs.filter((ref) => !resolved.has(ref) && !pending.has(ref) && !unresolvable.has(ref));
				if (missing.length === 0) return;
				for (const ref of missing) pending.add(ref);
				try {
					const entries = await lookup(missing);
					for (const entry of entries) {
						resolved.set(refOf(entry), entry);
						pending.delete(refOf(entry));
					}
					for (const ref of missing) if (!resolved.has(ref)) unresolvable.add(ref);
					if (entries.length > 0) emit();
				} finally {
					for (const ref of missing) pending.delete(ref);
				}
			};
			return {
				useVersion,
				cached,
				remember,
				resolveUnknown
			};
		}
		const taskStore = createRefStore((entry) => entry.taskRef);
		const threadStore = createRefStore((entry) => entry.threadRef);
		/** React binding: re-renders the caller when any Task ref resolution lands. */
		const useResolvedTaskRefVersion = taskStore.useVersion;
		const cachedResolvedTaskRef = taskStore.cached;
		/** Store one Task resolution (click path) and wake every rendered link. */
		const rememberResolvedTaskRef = taskStore.remember;
		const resolveUnknownTaskRefs = taskStore.resolveUnknown;
		/** React binding: re-renders the caller when any Thread ref resolution lands. */
		const useResolvedThreadRefVersion = threadStore.useVersion;
		const cachedResolvedThreadRef = threadStore.cached;
		/** Store one Thread resolution (click path) and wake every rendered link. */
		const rememberResolvedThreadRef = threadStore.remember;
		const resolveUnknownThreadRefs = threadStore.resolveUnknown;
		/**
		* Click-path Host lookup shared by both ref kinds: remember every resolved
		* entry and hand them back for immediate navigation. The Host keeps
		* `resolved` in the same order as the input refs (one entry per resolvable
		* input, unknowns omitted); the pairing walk below relies on that contract,
		* so it must be preserved together with this implementation. The Host
		* answers with full refs even for abbreviated inputs; the returned entries
		* keep the input order, so the walk remembers each authored spelling as an
		* alias of its resolution.
		*/
		async function hostRefLookup(remember, refOf, alias, request, refs) {
			const result = await request(refs);
			if (!result.ok) return [];
			const entries = result.value;
			let entryIndex = 0;
			for (const requested of refs) {
				const entry = entries[entryIndex];
				if (entry === void 0 || !refKeyOf(refOf(entry)).startsWith(refKeyOf(requested))) continue;
				if (refOf(entry) !== requested) remember(alias(entry, requested));
				remember(entry);
				entryIndex += 1;
			}
			return entries;
		}
		/**
		* Click-path Task lookup: remember every resolved entry and hand them back
		* for immediate navigation (see hostRefLookup for the ordering contract).
		*/
		const hostTaskRefLookup = (resolveTaskRefs, workspaceId) => async (taskRefs) => hostRefLookup(rememberResolvedTaskRef, (entry) => entry.taskRef, (entry, taskRef) => ({
			...entry,
			taskRef
		}), async (refs) => {
			const result = await resolveTaskRefs({
				workspaceId,
				taskRefs: refs
			});
			return result.ok ? {
				ok: true,
				value: result.value.resolved
			} : result;
		}, taskRefs);
		/**
		* Click-path Thread lookup: remember every resolved entry and hand them back
		* for immediate navigation (see hostRefLookup for the ordering contract).
		*/
		const hostThreadRefLookup = (resolveThreadRefs, workspaceId) => async (threadRefs) => hostRefLookup(rememberResolvedThreadRef, (entry) => entry.threadRef, (entry, threadRef) => ({
			...entry,
			threadRef
		}), async (refs) => {
			const result = await resolveThreadRefs({
				workspaceId,
				threadRefs: refs
			});
			return result.ok ? {
				ok: true,
				value: result.value.resolved
			} : result;
		}, threadRefs);
		/** Resolve one Task ref through the Host and jump to its home Channel Thread. */
		const jumpToTaskThread = (resolveTaskRefs, workspaceId, taskRef, selectThread) => {
			resolveTaskRefs({
				workspaceId,
				taskRefs: [taskRef]
			}).then((result) => {
				if (!result.ok) return;
				const hit = result.value.resolved[0];
				if (hit !== void 0) selectThread(hit.threadRef, hit.channelRef, hit.taskRef, hit.taskNumber);
			});
		};
		/** Resolve one Thread ref through the Host and jump to its home Channel Thread. */
		const jumpToThread = (resolveThreadRefs, workspaceId, threadRef, selectThread) => {
			resolveThreadRefs({
				workspaceId,
				threadRefs: [threadRef]
			}).then((result) => {
				if (!result.ok) return;
				const hit = result.value.resolved[0];
				if (hit !== void 0) selectThread(hit.threadRef, hit.channelRef, hit.taskRef, hit.taskNumber);
			});
		};
		/** Exactly one roster entry whose full key extends the authored spelling; ambiguity resolves to nothing. */
		function uniqueByPrefix(entries, keyOf, authored) {
			const key = refKeyOf(authored);
			const hits = entries.filter((entry) => refKeyOf(keyOf(entry)).startsWith(key));
			return hits.length === 1 ? hits[0] : void 0;
		}
		/**
		* Display name for one authored channel ref, or undefined when the loaded
		* roster does not know it — the caller keeps plain text. Archived Channels
		* never resolve: they are gone from every Team surface, so their refs are
		* not links either.
		*/
		const rosterChannelName = (channels, channelRef) => uniqueByPrefix(channels.filter((channel) => channel.state === "active"), (channel) => channel.channelRef, channelRef)?.name;
		/**
		* Roster facts for one authored member ref, or undefined when nobody on the
		* roster answers to it — the caller keeps plain text. The Human resolves to
		* a handle with no session: informative, never a link.
		*/
		const rosterMember = (members, humanMemberId, humanHandle, memberRef) => {
			if (humanMemberId !== void 0 && refKeyOf(memberRef) === refKeyOf(humanMemberId)) return {
				memberId: humanMemberId,
				handle: humanHandle,
				openable: false
			};
			const hit = uniqueByPrefix(members, (status) => status.member.memberId, memberRef);
			if (hit === void 0) return void 0;
			const openable = hit.availability === "active";
			return {
				memberId: hit.member.memberId,
				handle: hit.member.handle.replace(/^@/, ""),
				...openable ? { sessionId: hit.member.sessionId } : {},
				openable
			};
		};
		//#endregion
		//#region \0dsh-css:C:\Sophia\科研\AI科研助手开发\dsh-research-team\packages\client-agent-team\src\client\conversation.module.css.mjs
		const css$6 = ".QFocta_surface{grid-template-rows:auto minmax(0,1fr) auto;min-width:0;height:100%;min-height:0;display:grid;overflow:hidden}.QFocta_surfaceHeader{border-bottom:1px solid var(--dsw-alias-border-l2);min-width:0;padding:14px clamp(18px,3vw,36px) 12px}.QFocta_headerRow{justify-content:space-between;align-items:flex-start;gap:16px;min-width:0;max-width:880px;margin:0 auto;display:flex}.QFocta_headerCopy{min-width:0}.QFocta_headerCopy h1{color:var(--dsw-alias-label-primary);overflow-wrap:anywhere;margin:0;font-size:20px;font-weight:600;line-height:28px}.QFocta_headerCopy p{color:var(--dsw-alias-label-secondary);margin:3px 0 0;font-size:13px;line-height:20px}.QFocta_headerActions{flex:none;align-items:center;gap:6px;display:flex}.QFocta_backRow{max-width:880px;margin:0 auto 8px}.QFocta_timeline{overscroll-behavior:contain;scrollbar-gutter:stable;min-height:0;padding:12px clamp(18px,3vw,36px) 24px;overflow:hidden auto}.QFocta_timelineContent{flex-direction:column;min-width:0;max-width:880px;min-height:100%;margin:0 auto;display:flex}.QFocta_emptySurface{margin:auto;padding:32px 0}.QFocta_emptySurface .QFocta_emptyState{text-align:center;justify-items:center}.QFocta_timelineAction{justify-content:center;padding:2px 0 8px;display:flex}.QFocta_messageRow{gap:10px;padding:10px 0;display:flex}.QFocta_messageRow[data-grouped]{padding-top:2px}.QFocta_messageRow[data-grouped] .QFocta_messageBody>:first-child,.QFocta_messageRow[data-grouped] .QFocta_messageBody>:first-child>:first-child{margin-top:0}.QFocta_messageIdentity{background:hsl(var(--team-avatar-hue,212) 42% 46%);corner-shape:round;color:#fff;border-radius:50%;flex:0 0 28px;justify-content:center;align-items:center;height:28px;font-size:12px;font-weight:600;display:flex}.QFocta_messageRow[data-human] .QFocta_messageIdentity{background:var(--dsw-alias-state-business-primary)}.QFocta_messageIdentityImage{corner-shape:round;object-fit:cover;border-radius:50%;flex:0 0 28px;height:28px}.QFocta_messageRow[data-grouped] .QFocta_messageIdentity,.QFocta_messageRow[data-grouped] .QFocta_messageIdentityImage{visibility:hidden}.QFocta_messageBody{min-width:0}.QFocta_nameRow{flex-wrap:wrap;align-items:baseline;gap:8px;display:flex}.QFocta_nameRow strong{color:var(--dsw-alias-label-primary);font-size:var(--dsh-content-font-size-secondary,13px);font-weight:600;line-height:calc(20px + var(--dsh-content-font-delta-secondary,0px))}.QFocta_messageTime{color:var(--dsw-alias-label-tertiary);font-size:11px;line-height:20px}.QFocta_stateCluster{flex:none;align-items:center;gap:6px;display:inline-flex}.QFocta_statusWord{color:var(--dsw-alias-label-secondary);font-size:11px;line-height:18px}.QFocta_entryLine{flex-wrap:wrap;align-items:center;gap:8px;max-width:100%;margin:4px 0 0;display:flex}.QFocta_entryRow{color:var(--dsw-alias-label-tertiary);cursor:pointer;background:0 0;border:0;align-items:center;gap:6px;padding:2px 0;font-size:12px;line-height:18px;display:inline-flex}.QFocta_entryRow:hover,.QFocta_entryRow:focus-visible{color:var(--dsw-alias-label-primary)}.QFocta_entryRow:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:2px}.QFocta_entryArrow{align-items:center;transition:transform .12s;display:inline-flex}.QFocta_entryRow:hover .QFocta_entryArrow,.QFocta_entryRow:focus-visible .QFocta_entryArrow{transform:translate(2px)}.QFocta_messageText{font-size:var(--dsh-content-font-size,14px);line-height:calc(22px + var(--dsh-content-font-delta,0px));white-space:pre-wrap;word-break:break-word;margin:6px 0}.QFocta_messageClamp{max-height:calc(176px + 8 * var(--dsh-content-font-delta,0px));overflow:hidden;-webkit-mask-image:linear-gradient(#000 72%,#0000 100%);mask-image:linear-gradient(#000 72%,#0000 100%)}.QFocta_messageExpand{color:var(--dsw-alias-label-tertiary);cursor:pointer;background:0 0;border:0;width:fit-content;margin-top:4px;padding:0;font-size:12px;line-height:20px;display:block}.QFocta_messageExpand:hover,.QFocta_messageExpand:focus-visible{color:var(--dsw-alias-label-primary);text-underline-offset:2px;outline:none;text-decoration:underline}.QFocta_messageBody .QFocta_messageMarkdown{font-size:var(--dsh-content-font-size,14px);line-height:calc(22px + var(--dsh-content-font-delta,0px))}.QFocta_messageBody .QFocta_messageMarkdown>div:first-child{color:var(--dsw-alias-label-primary);font:inherit}.QFocta_messageBody .QFocta_messageMarkdown p{margin:6px 0}.QFocta_messageBody .QFocta_messageMarkdown :where(ul,ol){margin:6px 0;padding-left:22px}.QFocta_messageBody .QFocta_messageMarkdown li+li{margin-top:2px}.QFocta_messageBody .QFocta_messageMarkdown strong{font-weight:600}.QFocta_messageBody .QFocta_messageMarkdown :where(h1,h2,h3,h4,h5,h6){margin:12px 0 4px}.QFocta_messageBody .QFocta_messageMarkdown :where(h1){font-size:calc(17px + var(--dsh-content-font-delta,0px));line-height:calc(26px + var(--dsh-content-font-delta,0px))}.QFocta_messageBody .QFocta_messageMarkdown :where(h2){font-size:calc(16px + var(--dsh-content-font-delta,0px));line-height:calc(24px + var(--dsh-content-font-delta,0px))}.QFocta_messageBody .QFocta_messageMarkdown :where(h3,h4,h5,h6){font-size:calc(15px + var(--dsh-content-font-delta,0px));line-height:calc(22px + var(--dsh-content-font-delta,0px))}.QFocta_messageBody .QFocta_messageMarkdown pre{margin:8px 0;padding:10px 12px;font-size:13px}.QFocta_messageBody .QFocta_messageMarkdown blockquote{margin:6px 0}.QFocta_messageBody .QFocta_messageMarkdown :where(th,td){padding-block:5px}.QFocta_messageBody [data-document] .QFocta_messageMarkdown{line-height:calc(24px + var(--dsh-content-font-delta,0px))}.QFocta_messageBody [data-document] .QFocta_messageMarkdown p,.QFocta_messageBody [data-document] .QFocta_messageMarkdown :where(ul,ol){margin:16px 0}.QFocta_messageBody [data-document] .QFocta_messageMarkdown li+li{margin-top:6px}.QFocta_messageBody [data-document] .QFocta_messageMarkdown li>p{margin:8px 0}.QFocta_messageBody [data-document] .QFocta_messageMarkdown :where(h1,h2,h3,h4,h5,h6){margin:24px 0 8px}.QFocta_messageBody [data-document] .QFocta_messageMarkdown :where(h2){font-size:calc(18px + var(--dsh-content-font-delta,0px));line-height:calc(26px + var(--dsh-content-font-delta,0px))}.QFocta_messageBody [data-document] .QFocta_messageMarkdown :where(h3){font-size:calc(17px + var(--dsh-content-font-delta,0px));line-height:calc(24px + var(--dsh-content-font-delta,0px))}.QFocta_messageBody [data-document] .QFocta_messageMarkdown pre,.QFocta_messageBody [data-document] .QFocta_messageMarkdown blockquote{margin:16px 0}.QFocta_emptyState,.QFocta_loadingState{color:var(--dsw-alias-label-tertiary);margin:0;padding:14px 0;font-size:13px;line-height:20px}.QFocta_emptyState{gap:3px;display:grid}.QFocta_emptyState strong{color:var(--dsw-alias-label-secondary);font-weight:500}.QFocta_emptyState span{font-size:12px}.QFocta_loadingState{align-items:center;gap:8px;display:flex}.QFocta_loadingMark{background:var(--dsw-alias-bg-skeleton);corner-shape:round;border-radius:50%;width:8px;height:8px;animation:1.2s ease-in-out infinite QFocta_pulse}.QFocta_error{color:var(--dsw-alias-state-error-primary);max-width:880px;margin:0;padding-top:6px;font-size:12px;line-height:18px}.QFocta_errorState{color:var(--dsw-alias-state-error-primary);justify-content:space-between;align-items:center;gap:8px;max-width:880px;margin:auto;padding:32px 0;font-size:12px;line-height:18px;display:flex}.QFocta_welcomeSurface{justify-content:center;align-items:center;min-width:0;height:100%;padding:32px;display:flex}.QFocta_welcome{text-align:center;max-width:420px}.QFocta_welcomeEyebrow{color:var(--dsw-alias-label-tertiary);text-transform:uppercase;font-size:12px;line-height:18px}.QFocta_welcome h1{color:var(--dsw-alias-label-primary);margin:8px 0;font-size:24px;font-weight:600;line-height:32px}.QFocta_welcome p{color:var(--dsw-alias-label-secondary);margin:0;font-size:13px;line-height:20px}@keyframes QFocta_pulse{0%,to{opacity:.35}50%{opacity:1}}@media (width<=600px){.QFocta_surfaceHeader{padding:12px 12px 10px}.QFocta_headerRow{flex-direction:column;align-items:stretch;gap:8px}.QFocta_headerActions{flex-wrap:wrap}.QFocta_backRow{margin-bottom:6px}.QFocta_timeline{scrollbar-gutter:auto;padding:8px 12px 16px}.QFocta_messageRow{padding:8px 0}}@media (prefers-reduced-motion:reduce){.QFocta_loadingMark{animation:none}.QFocta_entryArrow{transition:none}.QFocta_entryRow:hover .QFocta_entryArrow,.QFocta_entryRow:focus-visible .QFocta_entryArrow{transform:none}}.QFocta_messageRun{margin:2px 0;padding:3px 0}.QFocta_messageRow[data-grouped]:has([data-thread-entry]){margin-top:3px;padding-top:7px;position:relative}.QFocta_messageRow[data-grouped]:has([data-thread-entry]):before{background:var(--dsw-alias-border-l2);content:\"\";height:1px;position:absolute;inset:0 0 auto 38px}.QFocta_runDivider{border-top:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-tertiary);margin:2px 0 0 38px;padding:5px 0 0;font-size:11px;line-height:16px}.QFocta_runDivider+.QFocta_messageRow[data-grouped]:has([data-thread-entry]){margin-top:0}.QFocta_runDivider+.QFocta_messageRow[data-grouped]:has([data-thread-entry]):before{content:none}.QFocta_mention{background:color-mix(in srgb, var(--dsw-alias-state-business-primary) 12%, transparent);border-radius:var(--dsw-radius-sm,6px);color:var(--dsw-alias-state-business-primary);padding:0 4px;font-weight:500;box-shadow:0 1px 2px #00000014}.QFocta_mentionsRow{gap:4px;width:fit-content;margin-top:3px;font-size:.85em;display:flex}.QFocta_attachmentStrip{flex-wrap:wrap;gap:6px;margin-top:4px;display:flex}.QFocta_attachmentThumb{border-radius:var(--dsw-radius-sm,8px);cursor:zoom-in;border:0;padding:0}.QFocta_attachmentThumb img{border-radius:var(--dsw-radius-sm,8px);object-fit:cover;width:128px;height:96px;display:block}.QFocta_attachmentThumb:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:1px}.QFocta_confirmBody{margin:0 0 8px}.QFocta_confirmList{gap:6px;margin:0;padding-left:18px;display:grid}.QFocta_refLink{border-radius:var(--dsw-radius-xs,4px);color:var(--dsw-alias-state-business-primary);cursor:pointer;font:inherit;text-align:left;text-underline-offset:3px;background:0 0;border:none;padding:0;text-decoration:underline}.QFocta_refLink:hover{text-decoration-thickness:2px}.QFocta_refLink:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:1px}.QFocta_attachmentModal{width:min(1100px,92vw)}.QFocta_attachmentZoom{object-fit:contain;border-radius:var(--dsw-radius-md,12px);max-width:100%;max-height:78vh;margin:0 auto;display:block}.QFocta_attachmentChip{background:var(--dsw-alias-interactive-bg-hover);border-radius:var(--dsw-radius-sm,6px);align-items:baseline;gap:6px;max-width:100%;padding:3px 8px;display:inline-flex}.QFocta_attachmentChipName{text-overflow:ellipsis;white-space:nowrap;font-size:12px;line-height:17px;overflow:hidden}.QFocta_attachmentChipSize{color:var(--dsw-alias-label-tertiary);white-space:nowrap;font-size:11px;line-height:17px}";
		const tagId$6 = "@sophialin/dsh-research-team/conversation.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$6) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@sophialin/dsh-research-team";
			tag.dataset.pluginCss = tagId$6;
			tag.textContent = css$6;
			document.head.appendChild(tag);
		}
		var conversation_module_css_default = {
			"attachmentChip": "QFocta_attachmentChip",
			"attachmentChipName": "QFocta_attachmentChipName",
			"attachmentChipSize": "QFocta_attachmentChipSize",
			"attachmentModal": "QFocta_attachmentModal",
			"attachmentStrip": "QFocta_attachmentStrip",
			"attachmentThumb": "QFocta_attachmentThumb",
			"attachmentZoom": "QFocta_attachmentZoom",
			"backRow": "QFocta_backRow",
			"confirmBody": "QFocta_confirmBody",
			"confirmList": "QFocta_confirmList",
			"emptyState": "QFocta_emptyState",
			"emptySurface": "QFocta_emptySurface",
			"entryArrow": "QFocta_entryArrow",
			"entryLine": "QFocta_entryLine",
			"entryRow": "QFocta_entryRow",
			"error": "QFocta_error",
			"errorState": "QFocta_errorState",
			"headerActions": "QFocta_headerActions",
			"headerCopy": "QFocta_headerCopy",
			"headerRow": "QFocta_headerRow",
			"loadingMark": "QFocta_loadingMark",
			"loadingState": "QFocta_loadingState",
			"mention": "QFocta_mention",
			"mentionsRow": "QFocta_mentionsRow",
			"messageBody": "QFocta_messageBody",
			"messageClamp": "QFocta_messageClamp",
			"messageExpand": "QFocta_messageExpand",
			"messageIdentity": "QFocta_messageIdentity",
			"messageIdentityImage": "QFocta_messageIdentityImage",
			"messageMarkdown": "QFocta_messageMarkdown",
			"messageRow": "QFocta_messageRow",
			"messageRun": "QFocta_messageRun",
			"messageText": "QFocta_messageText",
			"messageTime": "QFocta_messageTime",
			"nameRow": "QFocta_nameRow",
			"pulse": "QFocta_pulse",
			"refLink": "QFocta_refLink",
			"runDivider": "QFocta_runDivider",
			"stateCluster": "QFocta_stateCluster",
			"statusWord": "QFocta_statusWord",
			"surface": "QFocta_surface",
			"surfaceHeader": "QFocta_surfaceHeader",
			"timeline": "QFocta_timeline",
			"timelineAction": "QFocta_timelineAction",
			"timelineContent": "QFocta_timelineContent",
			"welcome": "QFocta_welcome",
			"welcomeEyebrow": "QFocta_welcomeEyebrow",
			"welcomeSurface": "QFocta_welcomeSurface"
		};
		//#endregion
		//#region src/client/TeamMessage.tsx
		/**
		* One chat message row with identity chrome and sender-appropriate rendering.
		*
		* Memoized because a timeline row is rendered by the page that owns the whole
		* Thread: the Task-ref subscription below lives inside this component, so
		* skipping a render here never detaches it. Callers must therefore keep the
		* props they derive per render (mention names, ref callbacks) identity-stable.
		*/
		const TeamMessage = (0, react.memo)(function TeamMessage({ senderName, memberId, human, avatarUrl, body, occurredAt, mentionNames, senderTitle, grouped, showGroupedTime, attachments, loadAttachment, t, onOpenRef, onResolveTaskRefs, onResolveThreadRefs, channelNameOf, memberOf, onOpenMemberSession, children }) {
			const avatarStyle = human ? void 0 : { "--team-avatar-hue": memberHue(memberId) };
			const identityImage = useAvatarImage(human ? avatarUrl : void 0);
			const plan = planMessageBody(body, {
				human,
				...mentionNames === void 0 ? {} : { mentionNames },
				canOpenRefs: onOpenRef !== void 0
			});
			const displayBody = plan.displayBody;
			const { richAgentBody } = plan;
			const taskRefVersion = useResolvedTaskRefVersion();
			const threadRefVersion = useResolvedThreadRefVersion();
			const bodyTaskRefs = plan.taskRefs;
			const bodyTaskRefKey = bodyTaskRefs.join(",");
			const bodyThreadRefs = plan.threadRefs;
			const bodyThreadRefKey = bodyThreadRefs.join(",");
			(0, react.useEffect)(() => {
				if (onResolveTaskRefs !== void 0 && bodyTaskRefKey !== "") resolveUnknownTaskRefs(bodyTaskRefs, onResolveTaskRefs);
				if (onResolveThreadRefs !== void 0 && bodyThreadRefKey !== "") resolveUnknownThreadRefs(bodyThreadRefs, onResolveThreadRefs);
			}, [
				onResolveTaskRefs,
				onResolveThreadRefs,
				bodyTaskRefKey,
				bodyThreadRefKey,
				taskRefVersion,
				threadRefVersion
			]);
			const taskLabel = (0, react.useCallback)((taskNumber) => t?.("taskLabel", { number: taskNumber }) ?? `Task #${taskNumber}`, [t]);
			const threadChipLabel = (0, react.useCallback)((title) => {
				const base = t?.("threadLabel") ?? "Thread";
				return title === "" ? base : `${base} · ${title}`;
			}, [t]);
			const channelChipLabel = (0, react.useCallback)((name) => t?.("channelLabel", { name }) ?? `Channel · ${name}`, [t]);
			const memberChipLabel = (0, react.useCallback)((name) => t?.("memberLabel", { name }) ?? `Member · @${name}`, [t]);
			const markdownLabels = (0, react.useMemo)(() => ({
				code: {
					copyLabel: t?.("copyCode") ?? "Copy",
					copiedLabel: t?.("copiedCode") ?? "Copied"
				},
				footnotes: t?.("markdownFootnotes") ?? "Footnotes"
			}), [t]);
			const [expanded, setExpanded] = (0, react.useState)(false);
			const clampable = shouldClampMessage(displayBody);
			const clamped = clampable && !expanded;
			const markdownRef = (0, react.useRef)(null);
			(0, react.useLayoutEffect)(() => {
				const root = markdownRef.current;
				if (!richAgentBody || root === null || onOpenRef === void 0) return;
				const textNodes = markdownProseTextNodes(root);
				const styledRefCodes = markdownStyledRefCodeElements(root);
				const taskRefs = [...new Set([...textNodes.map((node) => node.data), ...styledRefCodes.map((code) => code.textContent ?? "")].flatMap((text) => splitBrandedRefs(text).filter((segment) => segment.ref?.startsWith("task:") === true).map((segment) => segment.ref)))];
				const threadRefs = [...new Set([...textNodes.map((node) => node.data), ...styledRefCodes.map((code) => code.textContent ?? "")].flatMap((text) => splitBrandedRefs(text).filter((segment) => segment.ref?.startsWith("thread:") === true).map((segment) => segment.ref)))];
				if (onResolveTaskRefs !== void 0 && taskRefs.length > 0) resolveUnknownTaskRefs(taskRefs, onResolveTaskRefs);
				if (onResolveThreadRefs !== void 0 && threadRefs.length > 0) resolveUnknownThreadRefs(threadRefs, onResolveThreadRefs);
				for (const code of styledRefCodes) renderResolvedMarkdownCodeRef(code, taskLabel, threadChipLabel, channelChipLabel, memberChipLabel, channelNameOf, memberOf);
				for (const node of textNodes) renderResolvedMarkdownText(node, mentionNames ?? [], taskLabel, threadChipLabel, channelChipLabel, memberChipLabel, channelNameOf, memberOf);
				for (const button of root.querySelectorAll("button[data-task-ref]")) {
					const taskRef = button.dataset.taskRef;
					const hit = taskRef === void 0 ? void 0 : cachedResolvedTaskRef(taskRef);
					if (taskRef !== void 0 && hit !== void 0) button.textContent = taskLabel(hit.taskNumber);
				}
				for (const button of root.querySelectorAll("button[data-thread-ref]")) {
					const threadRef = button.dataset.threadRef;
					const hit = threadRef === void 0 ? void 0 : cachedResolvedThreadRef(threadRef);
					if (threadRef !== void 0 && hit !== void 0) button.textContent = threadChipLabel(hit.title);
				}
			}, [
				richAgentBody,
				onOpenRef,
				onResolveTaskRefs,
				onResolveThreadRefs,
				taskRefVersion,
				threadRefVersion,
				taskLabel,
				threadChipLabel,
				channelChipLabel,
				memberChipLabel,
				channelNameOf,
				memberOf,
				mentionNames
			]);
			(0, react.useEffect)(() => {
				const root = markdownRef.current;
				if (!richAgentBody || root === null || onOpenRef === void 0) return;
				const openTask = (event) => {
					const target = event.target;
					if (!(target instanceof Element)) return;
					const button = target.closest("button[data-ref], button[data-task-ref], button[data-thread-ref], button[data-member-session]");
					if (button === null || !root.contains(button)) return;
					if (button instanceof HTMLElement) {
						const sessionId = button.dataset.memberSession;
						if (sessionId !== void 0) {
							onOpenMemberSession?.(sessionId);
							return;
						}
						const ref = button.dataset.ref ?? button.dataset.taskRef ?? button.dataset.threadRef;
						if (ref !== void 0) onOpenRef(ref);
					}
				};
				root.addEventListener("click", openTask);
				return () => {
					root.removeEventListener("click", openTask);
				};
			}, [
				richAgentBody,
				onOpenRef,
				onOpenMemberSession
			]);
			const bodyNode = plan.render === "inline" && plan.inline !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: conversation_module_css_default.messageText,
				children: plan.inline.segments.map((segment, index) => segment.mention ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: conversation_module_css_default.mention,
					children: segment.text
				}, index) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react.Fragment, { children: renderRefs(segment.text, onOpenRef, onOpenMemberSession, taskLabel, threadChipLabel, channelChipLabel, memberChipLabel, channelNameOf, memberOf) }, index))
			}) : plan.render === "literal" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: conversation_module_css_default.messageText,
				children: onOpenRef === void 0 ? displayBody : renderRefs(displayBody, onOpenRef, onOpenMemberSession, taskLabel, threadChipLabel, channelChipLabel, memberChipLabel, channelNameOf, memberOf)
			}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				ref: markdownRef,
				className: conversation_module_css_default.messageMarkdown,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.MarkdownText, {
					text: displayBody,
					labels: markdownLabels
				}, `${displayBody}:${onOpenRef === void 0 ? "literal" : "refs"}`)
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("article", {
				className: conversation_module_css_default.messageRow,
				"data-human": human || void 0,
				"data-grouped": grouped || void 0,
				children: [identityImage.src === void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: conversation_module_css_default.messageIdentity,
					"data-avatar": "initial",
					style: avatarStyle,
					"aria-hidden": "true",
					children: senderName.replace("@", "").slice(0, 1).toUpperCase()
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
					className: conversation_module_css_default.messageIdentityImage,
					"data-avatar": "image",
					src: identityImage.src,
					alt: "",
					"aria-hidden": "true",
					onError: identityImage.failed
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: conversation_module_css_default.messageBody,
					children: [
						(!grouped || showGroupedTime === true) && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: conversation_module_css_default.nameRow,
							children: [!grouped && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", {
								...senderTitle === void 0 ? {} : { title: senderTitle },
								children: senderName
							}), occurredAt !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: conversation_module_css_default.messageTime,
								children: formatMessageTime(occurredAt)
							})]
						}),
						clampable ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							"data-document": "",
							className: clamped ? conversation_module_css_default.messageClamp : void 0,
							children: bodyNode
						}) : bodyNode,
						clampable && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: conversation_module_css_default.messageExpand,
							"data-message-expand": "true",
							"aria-expanded": expanded,
							onClick: () => {
								setExpanded((value) => !value);
							},
							children: expanded ? t?.("collapseMessage") ?? "Show less" : t?.("expandMessage") ?? "Show more"
						}),
						(plan.fallbackNames.length > 0 || plan.fallbackRefs.length > 0) && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: conversation_module_css_default.mentionsRow,
							children: [plan.fallbackNames.map((name) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
								className: conversation_module_css_default.mention,
								children: ["@", name]
							}, name)), plan.fallbackRefs.map((ref) => {
								const resolved = cachedResolvedTaskRef(ref);
								const label = resolved !== void 0 && ref.startsWith("task:") ? taskLabel(resolved.taskNumber) : ref;
								return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									className: conversation_module_css_default.refLink,
									title: ref,
									onClick: () => {
										onOpenRef(ref);
									},
									children: label
								}, ref);
							})]
						}),
						attachments !== void 0 && attachments.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamAttachmentStrip, {
							attachments,
							...loadAttachment === void 0 ? {} : { loadAttachment },
							...t === void 0 ? {} : { t }
						}),
						children
					]
				})]
			});
		});
		/** Text nodes that Markdown rendered as prose rather than code or a link. */
		function markdownProseTextNodes(root) {
			const nodes = [];
			const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
			for (let node = walker.nextNode(); node !== null; node = walker.nextNode()) {
				const parent = node.parentElement;
				if (parent === null) continue;
				if (parent.closest("code, pre, a, button") !== null) continue;
				if (conversation_module_css_default.mention !== void 0 && parent.closest(`[class~="${conversation_module_css_default.mention}"]`) !== null) continue;
				nodes.push(node);
			}
			return nodes;
		}
		/** Code spans whose entire content is one branded ref: model styling around a ref, not code. */
		function markdownStyledRefCodeElements(root) {
			const elements = [];
			for (const code of root.querySelectorAll("code")) {
				if (code.closest("pre, a, button") !== null) continue;
				if (!isSingleBrandedRef(code.textContent ?? "")) continue;
				elements.push(code);
			}
			return elements;
		}
		/** One resolved Task-ref chip built outside React, matching the styled ref link. */
		function resolvedTaskRefButton(taskRef, label) {
			const button = document.createElement("button");
			button.type = "button";
			if (conversation_module_css_default.refLink !== void 0) button.className = conversation_module_css_default.refLink;
			button.dataset.taskRef = taskRef;
			button.title = taskRef;
			button.textContent = label;
			return button;
		}
		/** One resolved Thread-ref chip built outside React, matching the styled ref link. */
		function resolvedThreadRefButton(threadRef, label) {
			const button = document.createElement("button");
			button.type = "button";
			if (conversation_module_css_default.refLink !== void 0) button.className = conversation_module_css_default.refLink;
			button.dataset.threadRef = threadRef;
			button.title = threadRef;
			button.textContent = label;
			return button;
		}
		/** One roster-resolved Channel chip built outside React, matching the styled ref link. */
		function resolvedChannelRefButton(channelRef, label) {
			const button = document.createElement("button");
			button.type = "button";
			if (conversation_module_css_default.refLink !== void 0) button.className = conversation_module_css_default.refLink;
			button.dataset.ref = channelRef;
			button.title = channelRef;
			button.textContent = label;
			return button;
		}
		/**
		* One roster-resolved Member chip built outside React. Openable Members jump
		* to their session through the delegated click listener; everyone else gets
		* a labelled but inert span, never a link-shaped misfire.
		*/
		function resolvedMemberRefChip(memberRef, label, sessionId) {
			if (sessionId === void 0) {
				const span = document.createElement("span");
				span.title = memberRef;
				span.textContent = label;
				return span;
			}
			const button = document.createElement("button");
			button.type = "button";
			if (conversation_module_css_default.refLink !== void 0) button.className = conversation_module_css_default.refLink;
			button.dataset.memberSession = sessionId;
			button.title = memberRef;
			button.textContent = label;
			return button;
		}
		/** Replace a whole-ref code span with its resolved chip once known. */
		function renderResolvedMarkdownCodeRef(code, taskLabel, threadChipLabel, channelChipLabel, memberChipLabel, channelNameOf, memberOf) {
			const segments = splitBrandedRefs((code.textContent ?? "").trim());
			const ref = (segments.length === 1 ? segments[0] : void 0)?.ref;
			if (ref === void 0) return;
			if (ref.startsWith("task:")) {
				const resolved = cachedResolvedTaskRef(ref);
				if (resolved === void 0) return;
				code.replaceWith(resolvedTaskRefButton(ref, taskLabel(resolved.taskNumber)));
				return;
			}
			if (ref.startsWith("thread:")) {
				const resolved = cachedResolvedThreadRef(ref);
				if (resolved === void 0) return;
				code.replaceWith(resolvedThreadRefButton(ref, threadChipLabel(resolved.title)));
				return;
			}
			if (ref.startsWith("channel:")) {
				const name = channelNameOf?.(ref);
				if (name === void 0) return;
				code.replaceWith(resolvedChannelRefButton(ref, channelChipLabel(name)));
				return;
			}
			if (ref.startsWith("member:")) {
				const resolved = memberOf?.(ref);
				if (resolved === void 0) return;
				code.replaceWith(resolvedMemberRefChip(ref, memberChipLabel(resolved.handle), resolved.openable ? resolved.sessionId : void 0));
			}
		}
		/** Replace resolved Task/Thread/Channel/Member refs and structured mention handles in one prose text node without changing Markdown structure. */
		function renderResolvedMarkdownText(node, mentionNames, taskLabel, threadChipLabel, channelChipLabel, memberChipLabel, channelNameOf, memberOf) {
			let changed = false;
			const fragment = document.createDocumentFragment();
			for (const refSegment of splitBrandedRefs(node.data)) {
				if (refSegment.ref === void 0) {
					for (const mentionSegment of splitMentionNames(refSegment.text, mentionNames).segments) {
						if (!mentionSegment.mention) {
							fragment.append(mentionSegment.text);
							continue;
						}
						changed = true;
						const chip = document.createElement("span");
						if (conversation_module_css_default.mention !== void 0) chip.className = conversation_module_css_default.mention;
						chip.textContent = mentionSegment.text;
						fragment.append(chip);
					}
					continue;
				}
				if (refSegment.ref.startsWith("task:")) {
					const resolved = cachedResolvedTaskRef(refSegment.ref);
					if (resolved === void 0) {
						fragment.append(refSegment.text);
						continue;
					}
					changed = true;
					fragment.append(resolvedTaskRefButton(refSegment.ref, taskLabel(resolved.taskNumber)));
				} else if (refSegment.ref.startsWith("thread:")) {
					const resolved = cachedResolvedThreadRef(refSegment.ref);
					if (resolved === void 0) {
						fragment.append(refSegment.text);
						continue;
					}
					changed = true;
					fragment.append(resolvedThreadRefButton(refSegment.ref, threadChipLabel(resolved.title)));
				} else if (refSegment.ref.startsWith("channel:")) {
					const name = channelNameOf?.(refSegment.ref);
					if (name === void 0) {
						fragment.append(refSegment.text);
						continue;
					}
					changed = true;
					fragment.append(resolvedChannelRefButton(refSegment.ref, channelChipLabel(name)));
				} else if (refSegment.ref.startsWith("member:")) {
					const resolved = memberOf?.(refSegment.ref);
					if (resolved === void 0) {
						fragment.append(refSegment.text);
						continue;
					}
					changed = true;
					fragment.append(resolvedMemberRefChip(refSegment.ref, memberChipLabel(resolved.handle), resolved.openable ? resolved.sessionId : void 0));
				} else fragment.append(refSegment.text);
			}
			if (changed) node.replaceWith(fragment);
		}
		/** Render one literal text run, linkifying branded refs when navigation is available. */
		function renderRefs(text, onOpenRef, onOpenMemberSession, taskLabel, threadChipLabel, channelChipLabel, memberChipLabel, channelNameOf, memberOf) {
			if (onOpenRef === void 0) return text;
			return splitBrandedRefs(text).map((segment, index) => {
				if (segment.ref === void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react.Fragment, { children: segment.text }, index);
				if (segment.ref.startsWith("task:")) {
					const resolved = cachedResolvedTaskRef(segment.ref);
					if (resolved === void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react.Fragment, { children: segment.text }, index);
					return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: conversation_module_css_default.refLink,
						title: segment.ref,
						onClick: () => {
							onOpenRef(segment.ref);
						},
						children: taskLabel(resolved.taskNumber)
					}, index);
				}
				if (segment.ref.startsWith("thread:")) {
					const resolved = cachedResolvedThreadRef(segment.ref);
					if (resolved === void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react.Fragment, { children: segment.text }, index);
					return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: conversation_module_css_default.refLink,
						title: segment.ref,
						onClick: () => {
							onOpenRef(segment.ref);
						},
						children: threadChipLabel(resolved.title)
					}, index);
				}
				if (segment.ref.startsWith("channel:")) {
					const name = channelNameOf?.(segment.ref);
					if (name === void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react.Fragment, { children: segment.text }, index);
					return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: conversation_module_css_default.refLink,
						title: segment.ref,
						onClick: () => {
							onOpenRef(segment.ref);
						},
						children: channelChipLabel(name)
					}, index);
				}
				if (segment.ref.startsWith("member:")) {
					const resolved = memberOf?.(segment.ref);
					if (resolved === void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react.Fragment, { children: segment.text }, index);
					if (!resolved.openable || resolved.sessionId === void 0 || onOpenMemberSession === void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						title: segment.ref,
						children: memberChipLabel(resolved.handle)
					}, index);
					const sessionId = resolved.sessionId;
					return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: conversation_module_css_default.refLink,
						title: segment.ref,
						onClick: () => {
							onOpenMemberSession(sessionId);
						},
						children: memberChipLabel(resolved.handle)
					}, index);
				}
				return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react.Fragment, { children: segment.text }, index);
			});
		}
		/** One message's attachment strip: image thumbnails with a large view, or name chips when bytes are gone. */
		function TeamAttachmentStrip({ attachments, loadAttachment, t }) {
			const [zoomed, setZoomed] = (0, react.useState)();
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: conversation_module_css_default.attachmentStrip,
				children: [attachments.map((attachment) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamAttachment, {
					attachment,
					...loadAttachment === void 0 ? {} : { loadAttachment },
					...t === void 0 ? {} : { t },
					onZoom: setZoomed
				}, attachment.attachmentId)), zoomed !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
					open: true,
					...conversation_module_css_default.attachmentModal === void 0 ? {} : { className: conversation_module_css_default.attachmentModal },
					title: zoomed.name,
					closeLabel: t?.("close") ?? "Close",
					onClose: () => {
						setZoomed(void 0);
					},
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
						className: conversation_module_css_default.attachmentZoom,
						src: cachedAttachmentDataUrl(zoomed.attachmentId) ?? void 0,
						alt: zoomed.name
					})
				})]
			});
		}
		function TeamAttachment({ attachment, loadAttachment, t, onZoom }) {
			const wantsPreview = loadAttachment !== void 0 && attachment.mediaType.startsWith("image/");
			const [dataUrl, setDataUrl] = (0, react.useState)(wantsPreview ? cachedAttachmentDataUrl(attachment.attachmentId) : null);
			(0, react.useEffect)(() => {
				if (!wantsPreview || dataUrl !== void 0) return;
				let mounted = true;
				loadAttachmentDataUrl(loadAttachment, attachment).then((url) => {
					if (mounted) setDataUrl(url);
				});
				return () => {
					mounted = false;
				};
			}, [
				wantsPreview,
				dataUrl,
				loadAttachment,
				attachment
			]);
			const expired = t?.("attachmentExpired") ?? "File no longer cached";
			if (wantsPreview && dataUrl !== null) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
				type: "button",
				className: conversation_module_css_default.attachmentThumb,
				"aria-label": t?.("viewImage", { name: attachment.name }) ?? attachment.name,
				title: attachment.name,
				onClick: () => {
					onZoom(attachment);
				},
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
					src: dataUrl,
					alt: attachment.name
				})
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
				className: conversation_module_css_default.attachmentChip,
				title: wantsPreview ? expired : `${attachment.name} · ${formatByteSize(attachment.byteSize)}`,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: conversation_module_css_default.attachmentChipName,
					children: attachment.name
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: conversation_module_css_default.attachmentChipSize,
					children: wantsPreview ? expired : formatByteSize(attachment.byteSize)
				})]
			});
		}
		//#endregion
		//#region \0dsh-css:C:\Sophia\科研\AI科研助手开发\dsh-research-team\packages\client-agent-team\src\client\avatar-stack.module.css.mjs
		const css$5 = ".Twp2xW_stack{flex:none;align-items:center;display:inline-flex}.Twp2xW_avatar,.Twp2xW_avatarImage,.Twp2xW_overflow{box-shadow:0 0 0 2px var(--team-mark-ring,var(--dsw-alias-bg-base)), 0 0 0 2px var(--dsw-alias-bg-base);corner-shape:round;border-radius:50%;justify-content:center;align-items:center;width:18px;height:18px;font-size:9px;font-weight:600;display:inline-flex}.Twp2xW_avatar{background:hsl(var(--team-avatar-hue,212) 42% 46%);color:#fff}.Twp2xW_avatarImage{background:hsl(var(--team-avatar-hue,212) 42% 46%);object-fit:cover}.Twp2xW_overflow{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-secondary)}.Twp2xW_stack>:not(:first-child){margin-left:-6px}";
		const tagId$5 = "@sophialin/dsh-research-team/avatar-stack.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$5) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@sophialin/dsh-research-team";
			tag.dataset.pluginCss = tagId$5;
			tag.textContent = css$5;
			document.head.appendChild(tag);
		}
		var avatar_stack_module_css_default = {
			"avatar": "Twp2xW_avatar",
			"avatarImage": "Twp2xW_avatarImage",
			"overflow": "Twp2xW_overflow",
			"stack": "Twp2xW_stack"
		};
		//#endregion
		//#region src/client/TeamAvatarStack.tsx
		/** Distinct owners past this count collapse into one `+N` chip. */
		const MAX_VISIBLE = 3;
		/**
		* Owners as a seat names them: the Client's Human identity outranks the name
		* the Host projected for that actor, so a rename moves label and initial
		* together in every seat that draws the stack.
		*/
		function namedAvatarOwners(owners, human) {
			if (human === void 0) return owners;
			return owners.map((owner) => owner.memberId === human.memberId ? {
				memberId: owner.memberId,
				name: human.name
			} : owner);
		}
		/**
		* The compact "who is on this work" stack: overlapping 18px Member circles in
		* the shared identity language, capped at three plus a `+N` chip. The circles
		* are presentational, so the stack is one `role="img"` whose label carries the
		* whole roster — three anonymous initials would read as noise.
		*/
		function TeamAvatarStack({ owners, label, human }) {
			if (owners.length === 0) return null;
			const shown = owners.slice(0, MAX_VISIBLE);
			const overflow = owners.length - shown.length;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
				className: avatar_stack_module_css_default.stack,
				role: "img",
				"aria-label": label,
				children: [shown.map((owner) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(OwnerAvatar, {
					owner,
					human
				}, owner.memberId)), overflow > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: avatar_stack_module_css_default.overflow,
					children: `+${overflow}`
				})]
			});
		}
		/**
		* One circle. Only an owner the seat identifies as the Human consults an image
		* at all, and those bytes keep the initial whenever they do not decode — the
		* same promise, and the same hook, the timeline avatar makes.
		*/
		function OwnerAvatar({ owner, human }) {
			const image = useAvatarImage(human !== void 0 && owner.memberId === human.memberId ? human.avatarUrl : void 0);
			const hue = { "--team-avatar-hue": memberHue(owner.memberId) };
			if (image.src === void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: avatar_stack_module_css_default.avatar,
				style: hue,
				children: initial(owner.name)
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
				className: avatar_stack_module_css_default.avatarImage,
				style: hue,
				src: image.src,
				alt: "",
				"aria-hidden": "true",
				onError: image.failed
			});
		}
		/** First visible character of a handle — and of a raw Member id when that is all there is. */
		function initial(name) {
			return name.replace(/^@/, "").replace(/^member:/, "").slice(0, 1).toUpperCase();
		}
		//#endregion
		//#region \0dsh-css:C:\Sophia\科研\AI科研助手开发\dsh-research-team\packages\client-agent-team\src\client\countBadge.module.css.mjs
		const css$4 = ".OzKF5a_badge{background:var(--dsw-alias-state-business-primary);box-sizing:border-box;color:var(--dsw-alias-label-primary-foreground);corner-shape:round;font-variant-numeric:tabular-nums;border-radius:999px;flex:none;justify-content:center;align-items:center;min-width:18px;height:18px;padding:0 5px;font-size:11px;font-weight:600;line-height:18px;display:inline-flex}.OzKF5a_hairline{border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-secondary);background:0 0;padding:0 4px}";
		const tagId$4 = "@sophialin/dsh-research-team/countBadge.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$4) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@sophialin/dsh-research-team";
			tag.dataset.pluginCss = tagId$4;
			tag.textContent = css$4;
			document.head.appendChild(tag);
		}
		var countBadge_module_css_default = {
			"badge": "OzKF5a_badge",
			"hairline": "OzKF5a_hairline"
		};
		//#endregion
		//#region src/client/TeamCountBadge.tsx
		/** Every count the Human reads is capped at this, so one wide number never widens the capsule. */
		const COUNT_CAP = 99;
		/**
		* The one count capsule. The Human Inbox entry, the Channel feed's Thread
		* entry, and the Inbox queue row all answer the same question — how much is
		* waiting here — so they wear the same box rather than one hand-written copy
		* of the same declarations per surface. Three copies is how the feed's digit
		* ended up on a different line box from the other two.
		*
		* Zero is the absence of a count rather than a capsule reading zero, which is
		* the rule every caller wants and therefore the component's own.
		*/
		function TeamCountBadge({ count, tone = "solid", label, className }) {
			if (count <= 0) return null;
			const text = count > COUNT_CAP ? `${COUNT_CAP}+` : String(count);
			const classes = `${countBadge_module_css_default.badge}${tone === "hairline" ? ` ${countBadge_module_css_default.hairline}` : ""}${className === void 0 ? "" : ` ${className}`}`;
			return label === void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: classes,
				"data-team-count-badge": tone,
				"aria-hidden": "true",
				children: text
			}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: classes,
				"data-team-count-badge": tone,
				role: "img",
				"aria-label": label,
				title: label,
				children: text
			});
		}
		//#endregion
		//#region src/client/TeamRunDivider.tsx
		/**
		* Explicit boundary between two same-sender Messages of one run separated by
		* a real waiting gap: the hairline restores the block boundary that grouping
		* removed, and the label below it restores the instant that the suppressed
		* identity chrome would have shown.
		*/
		function TeamRunDivider({ occurredAt }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: conversation_module_css_default.runDivider,
				role: "separator",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("time", {
					dateTime: occurredAt,
					children: formatMessageTime(occurredAt)
				})
			});
		}
		//#endregion
		//#region src/client/team-membership.ts
		/**
		* Shared Channel membership mutation. One stable requestId per direction,
		* Member, and Channel survives transport failures until the Host commits it;
		* rows observe pending flags and error text keyed by `rowKeyOf`.
		*/
		function useChannelMembership(transport, rowKeyOf, onCommitted) {
			const [pending, setPending] = (0, react.useState)(/* @__PURE__ */ new Set());
			const [errors, setErrors] = (0, react.useState)(/* @__PURE__ */ new Map());
			const requestIds = (0, react.useRef)(/* @__PURE__ */ new Map());
			const change = async (membership) => {
				const rowKey = rowKeyOf(membership);
				if (pending.has(rowKey)) return;
				setPending((current) => new Set(current).add(rowKey));
				setErrors((current) => {
					const next = new Map(current);
					next.delete(rowKey);
					return next;
				});
				const key = `${membership.joined ? "remove" : "join"}:${membership.memberId}:${membership.channelRef}`;
				const requestId = requestIds.current.get(key) ?? mintRequestId();
				requestIds.current.set(key, requestId);
				const request = {
					requestId,
					workspaceId: membership.workspaceId,
					channelRef: membership.channelRef,
					memberId: membership.memberId
				};
				try {
					const result = membership.joined ? await transport.removeChannelMember(request) : await transport.joinChannel(request);
					if (result.ok) {
						requestIds.current.delete(key);
						await onCommitted(membership);
					} else setErrors((current) => new Map(current).set(rowKey, result.error.message));
				} catch (cause) {
					setErrors((current) => new Map(current).set(rowKey, cause instanceof Error ? cause.message : String(cause)));
				} finally {
					setPending((current) => {
						const next = new Set(current);
						next.delete(rowKey);
						return next;
					});
				}
			};
			return {
				pending,
				errors,
				change
			};
		}
		//#endregion
		//#region src/client/timeline-scroll.ts
		const BOTTOM_MARGIN_PX = 48;
		/**
		* Chat-timeline scroll policy shared by the Channel and Thread pages: follow
		* new facts only while the reader stays pinned to the bottom, and keep
		* prepended history visually stable. The content key must change whenever
		* rendered facts change.
		*/
		function useTimelineScroll(contentKey) {
			const ref = (0, react.useRef)(null);
			const pinnedRef = (0, react.useRef)(true);
			const heightRef = (0, react.useRef)(0);
			const onScroll = (0, react.useCallback)(() => {
				const element = ref.current;
				if (element === null) return;
				pinnedRef.current = element.scrollHeight - element.scrollTop - element.clientHeight < BOTTOM_MARGIN_PX;
			}, []);
			const scrollToBottom = (0, react.useCallback)(() => {
				const element = ref.current;
				pinnedRef.current = true;
				if (element !== null) element.scrollTop = element.scrollHeight;
			}, []);
			(0, react.useEffect)(() => {
				const element = ref.current;
				if (element === null) return;
				const previousHeight = heightRef.current;
				heightRef.current = element.scrollHeight;
				if (pinnedRef.current) {
					element.scrollTop = element.scrollHeight;
					return;
				}
				if (previousHeight > 0 && element.scrollHeight > previousHeight) element.scrollTop += element.scrollHeight - previousHeight;
			}, [contentKey]);
			return {
				ref,
				onScroll,
				isPinned: () => pinnedRef.current,
				scrollToBottom
			};
		}
		/**
		* Whether two adjacent same-sender run items are separated by a real waiting
		* gap: only such gaps earn an explicit time divider, while rapid bursts stay
		* merged into one seamless run.
		*/
		function isRunGap(previousOccurredAt, occurredAt) {
			if (previousOccurredAt === void 0 || occurredAt === void 0) return false;
			const previous = Date.parse(previousOccurredAt);
			const at = Date.parse(occurredAt);
			return !Number.isNaN(previous) && !Number.isNaN(at) && at - previous >= 5 * 6e4;
		}
		const pad = (value) => String(value).padStart(2, "0");
		/** Local-calendar day key for one wall-clock instant; shared by bespoke loops. */
		function timelineDayKey(occurredAt) {
			return localDateKey(occurredAt);
		}
		function localDateKey(occurredAt) {
			const at = new Date(occurredAt);
			return `${at.getFullYear()}-${pad(at.getMonth() + 1)}-${pad(at.getDate())}`;
		}
		/**
		* Numeric day label matching the message-time convention: MM-DD within the
		* current year, full YYYY-MM-DD across years.
		*/
		function daySeparatorLabel(occurredAt, now = /* @__PURE__ */ new Date()) {
			const key = localDateKey(occurredAt);
			return key.startsWith(String(now.getFullYear())) ? key.slice(5) : key;
		}
		/**
		* Chunk one ordered timeline into same-sender runs, breaking a run at every
		* calendar-day change so identity chrome restarts across days. Items without a
		* wall-clock instant (activities) inherit the preceding message's day and never
		* trigger a boundary; callers interleave activity rows between returned blocks.
		*/
		function chunkRunsWithDays(items, senderOf, occurredAtOf) {
			const blocks = [];
			let lastDate;
			for (const item of items) {
				const occurredAt = occurredAtOf(item);
				if (occurredAt === void 0) {
					blocks.push({
						kind: "run",
						items: [item]
					});
					continue;
				}
				const date = localDateKey(occurredAt);
				if (lastDate !== void 0 && date !== lastDate) {
					blocks.push({
						kind: "day",
						label: daySeparatorLabel(occurredAt)
					});
					lastDate = date;
				} else if (lastDate === void 0) lastDate = date;
				let last = blocks[blocks.length - 1];
				if (last?.kind === "run" && senderOf(last.items[last.items.length - 1]) === senderOf(item)) {
					last = {
						kind: "run",
						items: [...last.items, item]
					};
					blocks[blocks.length - 1] = last;
				} else blocks.push({
					kind: "run",
					items: [item]
				});
			}
			return blocks;
		}
		//#endregion
		//#region \0dsh-css:C:\Sophia\科研\AI科研助手开发\dsh-research-team\packages\client-agent-team\src\client\channel.module.css.mjs
		const css$3 = ".JIvwEa_headerMeta{color:var(--dsw-alias-label-tertiary);flex-wrap:wrap;align-items:center;gap:6px;margin-top:7px;font-size:12px;line-height:18px;display:flex}.JIvwEa_headerMeta span+span:before{content:\"·\";margin-right:6px}.JIvwEa_memberList{gap:2px;margin:0 -6px;display:grid}.JIvwEa_modalBody{max-height:min(65vh,520px);overflow-y:auto}";
		const tagId$3 = "@sophialin/dsh-research-team/channel.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$3) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@sophialin/dsh-research-team";
			tag.dataset.pluginCss = tagId$3;
			tag.textContent = css$3;
			document.head.appendChild(tag);
		}
		var channel_module_css_default = {
			"headerMeta": "JIvwEa_headerMeta",
			"memberList": "JIvwEa_memberList",
			"modalBody": "JIvwEa_modalBody"
		};
		//#endregion
		//#region \0dsh-css:C:\Sophia\科研\AI科研助手开发\dsh-research-team\packages\client-agent-team\src\client\thread.module.css.mjs
		const css$2 = ".y5Y3vW_titleLine{flex-wrap:wrap;align-items:center;gap:10px;display:flex}.y5Y3vW_titleLine h1{margin:0}.y5Y3vW_workSection,.y5Y3vW_riskSection{max-width:880px;margin:14px auto 0}.y5Y3vW_riskSection h2{color:var(--dsw-alias-state-error-primary);margin:0 0 6px;font-size:12px;font-weight:600;line-height:18px}.y5Y3vW_riskRow{color:var(--dsw-alias-label-secondary);flex-wrap:nowrap;align-items:center;gap:6px;min-width:0;margin:0 0 2px;font-size:11px;line-height:16px;display:flex;overflow:hidden}.y5Y3vW_riskRow>span{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}.y5Y3vW_riskClass{color:var(--dsw-alias-state-error-primary);font-weight:600}.y5Y3vW_claimList{gap:0;padding:4px 0 0 22px;display:grid}.y5Y3vW_claimRow{border-radius:var(--dsw-radius-sm,6px);grid-template-columns:14px minmax(0,1fr) auto;align-items:center;column-gap:8px;min-height:30px;padding:3px 6px 5px;display:grid}.y5Y3vW_claimRow:hover{background:var(--dsw-alias-interactive-bg-hover)}.y5Y3vW_claimOwner{color:var(--dsw-alias-label-secondary);text-overflow:ellipsis;white-space:nowrap;grid-area:1/2;align-items:center;gap:4px;min-width:0;font-size:11px;font-weight:500;line-height:16px;display:inline-flex;overflow:hidden}.y5Y3vW_claimDirection{color:var(--dsw-alias-label-primary);overflow-wrap:anywhere;grid-area:2/2;min-width:0;font-size:12px;line-height:18px}.y5Y3vW_claimRowDone .y5Y3vW_claimDirection{color:var(--dsw-alias-label-secondary)}.y5Y3vW_claimState{color:var(--dsw-alias-label-tertiary);white-space:nowrap;grid-area:1/3;font-size:11px;line-height:18px}.y5Y3vW_emptyClaims{color:var(--dsw-alias-label-tertiary);margin:0;padding:5px 6px;font-size:11px;line-height:18px}.y5Y3vW_activityRow{color:var(--dsw-alias-label-tertiary);text-align:center;justify-content:center;align-items:center;gap:8px;max-width:100%;margin:4px auto;padding:5px 12px;font-size:11px;line-height:18px;display:flex}.y5Y3vW_activityText{overflow-wrap:anywhere;min-width:0}.y5Y3vW_activityMark{background:var(--dsw-alias-border-l3);corner-shape:round;border-radius:50%;flex:0 0 5px;width:5px;height:5px}.y5Y3vW_activityRow:has(+.y5Y3vW_activityRow),.y5Y3vW_activityRow+.y5Y3vW_activityRow{text-align:left;justify-content:flex-start;padding-left:38px}.y5Y3vW_historySection{border-bottom:1px solid var(--dsw-alias-border-l2);max-width:100%;margin:0 auto 12px;padding-bottom:10px}.y5Y3vW_historySection h2{color:var(--dsw-alias-label-tertiary);letter-spacing:.02em;text-transform:uppercase;margin:0 0 4px;font-size:11px;font-weight:600;line-height:16px}.y5Y3vW_publicSection{min-width:0}.y5Y3vW_unreadBoundary{color:var(--dsw-alias-label-tertiary);align-items:center;gap:10px;margin:10px 0 6px;font-size:11px;line-height:16px;display:flex}.y5Y3vW_unreadBoundary:before,.y5Y3vW_unreadBoundary:after{background:var(--dsw-alias-border-l3);content:\"\";flex:1;height:1px}.y5Y3vW_unreadBoundary span{flex:none}.y5Y3vW_daySeparator{color:var(--dsw-alias-label-tertiary);letter-spacing:.02em;align-items:center;gap:10px;margin:12px 0 4px;font-size:11px;line-height:16px;display:flex}.y5Y3vW_daySeparator:before,.y5Y3vW_daySeparator:after{background:var(--dsw-alias-border-l2);content:\"\";flex:1;height:1px}.y5Y3vW_daySeparator span{flex:none}.y5Y3vW_newUpdates{background:var(--dsw-specific-input-major,var(--dsw-alias-bg-layer-1));border:1px solid var(--dsw-alias-border-l2-darkmode-thin);corner-shape:round;box-shadow:var(--dsw-shadow-lv2);z-index:2;border-radius:999px;justify-content:center;align-items:center;width:fit-content;margin:8px auto;padding:4px 12px;font-size:12px;line-height:18px;display:flex;position:sticky;bottom:8px}.y5Y3vW_newUpdatesJump{color:var(--dsw-alias-label-secondary);cursor:pointer;font:inherit;line-height:inherit;background:0 0;border:0;padding:0}.y5Y3vW_newUpdatesJump:focus-visible{border-radius:var(--dsw-radius-sm,6px);outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:2px}.y5Y3vW_taskTitle{color:var(--dsw-alias-label-secondary);-webkit-line-clamp:1;line-clamp:1;overflow-wrap:anywhere;-webkit-box-orient:vertical;margin:2px 0 0;font-size:13px;line-height:20px;display:-webkit-box;overflow:hidden}.y5Y3vW_closedBar{flex-direction:column;align-items:center;display:flex}.y5Y3vW_closedNotice{color:var(--dsw-alias-label-tertiary);flex-wrap:wrap;justify-content:center;align-items:center;gap:12px;padding:10px 16px 14px;font-size:13px;line-height:20px;display:flex}@media (width<=600px){.y5Y3vW_claimRow{align-items:start}.y5Y3vW_activityRow{padding-inline:0}.y5Y3vW_newUpdates{max-width:calc(100% - 16px)}}";
		const tagId$2 = "@sophialin/dsh-research-team/thread.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$2) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@sophialin/dsh-research-team";
			tag.dataset.pluginCss = tagId$2;
			tag.textContent = css$2;
			document.head.appendChild(tag);
		}
		var thread_module_css_default = {
			"activityMark": "y5Y3vW_activityMark",
			"activityRow": "y5Y3vW_activityRow",
			"activityText": "y5Y3vW_activityText",
			"claimDirection": "y5Y3vW_claimDirection",
			"claimList": "y5Y3vW_claimList",
			"claimOwner": "y5Y3vW_claimOwner",
			"claimRow": "y5Y3vW_claimRow",
			"claimRowDone": "y5Y3vW_claimRowDone",
			"claimState": "y5Y3vW_claimState",
			"closedBar": "y5Y3vW_closedBar",
			"closedNotice": "y5Y3vW_closedNotice",
			"daySeparator": "y5Y3vW_daySeparator",
			"emptyClaims": "y5Y3vW_emptyClaims",
			"historySection": "y5Y3vW_historySection",
			"newUpdates": "y5Y3vW_newUpdates",
			"newUpdatesJump": "y5Y3vW_newUpdatesJump",
			"publicSection": "y5Y3vW_publicSection",
			"riskClass": "y5Y3vW_riskClass",
			"riskRow": "y5Y3vW_riskRow",
			"riskSection": "y5Y3vW_riskSection",
			"taskTitle": "y5Y3vW_taskTitle",
			"titleLine": "y5Y3vW_titleLine",
			"unreadBoundary": "y5Y3vW_unreadBoundary",
			"workSection": "y5Y3vW_workSection"
		};
		//#endregion
		//#region src/client/TeamChannelPage.tsx
		/**
		* Merge the freshest top-level window over what the reader already has. The
		* fresh window is authoritative for every Message it covers — a change wake
		* must move that row's live Task state, newest instant, and unread with it —
		* while older Messages loaded earlier are retained instead of discarded.
		*/
		function mergeChannelView(current, fresh) {
			const freshRefs = new Set(fresh.items.map((item) => item.message.messageRef));
			const items = [...current.items.filter((item) => !freshRefs.has(item.message.messageRef)), ...fresh.items].sort((left, right) => left.message.sequence - right.message.sequence);
			return {
				...fresh,
				items,
				cursor: Math.min(fresh.cursor, current.cursor),
				hasMore: fresh.hasMore || current.cursor < fresh.cursor
			};
		}
		/**
		* The newest fact instant, or nothing when the entry's own Message is still the
		* newest fact on its Thread. That difference is exactly what "has follow-up
		* activity" means, and the Host projects both instants from the ledger.
		*/
		function followUpAt(item) {
			const lastActivityAt = item.lastActivityAt;
			return lastActivityAt === void 0 || lastActivityAt === item.message.occurredAt ? void 0 : lastActivityAt;
		}
		/**
		* What the door prints about follow-up activity, or nothing. A resolved Task
		* stops printing it: the status word beside the door already says nothing is
		* moving, and the instant it would print is the moment it resolved — repeated
		* on every finished row. The precise instant stays on the control's title, one
		* hover away. A taskless Thread never resolves, so a discussion keeps the
		* recency that is the whole of its state line: it wears no status word, dot, or
		* owner stack.
		*/
		function printedActivityAt(item) {
			const status = item.task?.status;
			return status === "done" || status === "closed" ? void 0 : followUpAt(item);
		}
		/** Host unread per Thread, keyed for the feed's rows: zero unread is the absence of a badge, not a row. */
		function unreadCounts(inbox) {
			return new Map(inbox.items.filter((item) => item.unreadCount > 0).map((item) => [item.thread.threadRef, item.unreadCount]));
		}
		function TeamChannelPage({ workspaceId, channelRef, humanName, humanAvatarUrl, loadChannels, subscribeChanges, loadMembers, loadInbox, drafts, putAttachment, getAttachment, sendMessage, joinChannel, removeChannelMember, selectThread, selectChannel, backToChannels, resolveTaskRefs, resolveThreadRefs, openMemberSession, t }) {
			const [view, setView] = (0, react.useState)();
			const [members, setMembers] = (0, react.useState)([]);
			const [unreadByThread, setUnreadByThread] = (0, react.useState)(/* @__PURE__ */ new Map());
			const [actionError, setError] = (0, react.useState)();
			const [loadError, setLoadError] = (0, react.useState)();
			const error = actionError ?? loadError;
			const [pendingFiles, setPendingFiles] = (0, react.useState)([]);
			const [statusMessage, setStatusMessage] = (0, react.useState)();
			const [loading, setLoading] = (0, react.useState)(true);
			const [pending, setPending] = (0, react.useState)(false);
			const [asTask, setAsTask] = (0, react.useState)(false);
			const [loadingOlder, setLoadingOlder] = (0, react.useState)(false);
			const [managingMembers, setManagingMembers] = (0, react.useState)(false);
			const draftKey = `channel:${channelRef}`;
			const manageTriggerRef = (0, react.useRef)(null);
			const memberListRef = (0, react.useRef)(null);
			const mountedRef = (0, react.useRef)(false);
			const loadedRef = (0, react.useRef)(false);
			const refreshSequenceRef = (0, react.useRef)(0);
			const channelLastItem = view?.items[view.items.length - 1];
			const openRef = (ref) => {
				if (ref.startsWith("channel:")) {
					if (ref !== channelRef) selectChannel(ref);
					return;
				}
				if (ref.startsWith("thread:")) {
					const match = view?.items.find((item) => item.thread.threadRef === ref);
					if (match !== void 0) {
						selectThread(match.thread.threadRef, channelRef, match.task?.taskRef, match.taskNumber);
						return;
					}
					jumpToThread(resolveThreadRefs, workspaceId, ref, selectThread);
					return;
				}
				if (ref.startsWith("task:")) {
					const match = view?.items.find((item) => item.task?.taskRef === ref);
					if (match !== void 0) {
						selectThread(match.thread.threadRef, channelRef, match.task?.taskRef, match.taskNumber);
						return;
					}
					jumpToTaskThread(resolveTaskRefs, workspaceId, ref, selectThread);
				}
			};
			const lookupTaskRefs = hostTaskRefLookup(resolveTaskRefs, workspaceId);
			const lookupThreadRefs = hostThreadRefLookup(resolveThreadRefs, workspaceId);
			const rosterKey = (0, react.useMemo)(() => [
				(view?.channels ?? []).map((channel) => `${channel.channelRef}=${channel.name}=${channel.state}`).join(","),
				members.map((status) => `${status.member.memberId}=${status.member.handle}=${status.member.sessionId}=${status.availability}`).join(","),
				view?.humanMemberId ?? ""
			].join(";"), [view, members]);
			const channelNameOf = (0, react.useMemo)(() => {
				const channels = view?.channels ?? [];
				return (ref) => rosterChannelName(channels, ref);
			}, [rosterKey]);
			const memberOf = (0, react.useMemo)(() => {
				const humanMemberId = view?.humanMemberId;
				return (ref) => rosterMember(members, humanMemberId, humanName, ref);
			}, [rosterKey, humanName]);
			const humanMemberId = view?.humanMemberId;
			const humanIdentity = humanMemberId === void 0 ? void 0 : {
				memberId: humanMemberId,
				name: humanName,
				...humanAvatarUrl === void 0 ? {} : { avatarUrl: humanAvatarUrl }
			};
			const timeline = useTimelineScroll(`${view?.items.length ?? 0}:${channelLastItem?.message.messageRef ?? ""}`);
			const channel = view?.channels.find((item) => item.channelRef === channelRef);
			const channelMemberIds = new Set(view?.members.filter((item) => item.channelRef === channelRef).map((item) => item.memberId) ?? []);
			const channelMembers = members.filter((status) => channelMemberIds.has(status.member.memberId) && status.member.state !== "inactive" && status.member.state !== "archived");
			const onlineCount = channelMembers.filter((status) => status.presence === "available" || status.presence === "working").length;
			const messageSender = (item) => item.message.sender;
			const handleByMember = new Map(members.map((status) => [status.member.memberId, status.member.handle.replace(/^@/, "")]));
			const refresh = async (clearError = false) => {
				if (!mountedRef.current) return false;
				const sequence = refreshSequenceRef.current + 1;
				refreshSequenceRef.current = sequence;
				if (!loadedRef.current) setLoading(true);
				if (clearError) {
					setLoadError(void 0);
					setStatusMessage(void 0);
				}
				try {
					const [loaded, loadedMembers, loadedInbox] = await Promise.all([
						loadChannels({
							workspaceId,
							channelRef,
							direction: "before",
							topLevelOnly: true,
							includeActivities: false,
							limit: 20
						}),
						loadMembers({ workspaceId }),
						loadInbox({
							workspaceId,
							limit: 100
						})
					]);
					if (!mountedRef.current || sequence !== refreshSequenceRef.current) return false;
					if (loaded.ok) {
						setView((current) => current === void 0 ? loaded.value : mergeChannelView(current, loaded.value));
						loadedRef.current = true;
					} else setLoadError(loaded.error.message);
					if (loadedMembers.ok) setMembers(loadedMembers.value);
					else setLoadError(loadedMembers.error.message);
					if (loadedInbox.ok) setUnreadByThread(unreadCounts(loadedInbox.value));
					else {
						setUnreadByThread(/* @__PURE__ */ new Map());
						setLoadError(loadedInbox.error.message);
					}
					if (loaded.ok && loadedMembers.ok && loadedInbox.ok) setLoadError(void 0);
					return loaded.ok && loadedMembers.ok && loadedInbox.ok;
				} catch (cause) {
					if (mountedRef.current && sequence === refreshSequenceRef.current) setLoadError(cause instanceof Error ? cause.message : String(cause));
					return false;
				} finally {
					if (mountedRef.current && sequence === refreshSequenceRef.current) setLoading(false);
				}
			};
			const refreshMembers = async () => {
				if (!mountedRef.current) return;
				try {
					const loaded = await loadMembers({ workspaceId });
					if (!mountedRef.current) return;
					if (loaded.ok) setMembers(loaded.value);
					else setLoadError(loaded.error.message);
				} catch (cause) {
					if (mountedRef.current) setLoadError(cause instanceof Error ? cause.message : String(cause));
				}
			};
			(0, react.useEffect)(() => {
				mountedRef.current = true;
				loadedRef.current = false;
				setView(void 0);
				setLoadError(void 0);
				setLoading(true);
				setManagingMembers(false);
				refresh();
				const disposers = [
					subscribeChanges({
						kind: "channel",
						channelRef
					}, (update) => {
						if (!mountedRef.current) return;
						if (update.type === "failed") {
							setLoadError(update.message);
							return;
						}
						refresh();
					}),
					subscribeChanges({
						kind: "workspace",
						workspaceId
					}, (update) => {
						if (!mountedRef.current) return;
						if (update.type === "failed") {
							setLoadError(update.message);
							return;
						}
						refreshMembers();
					}),
					subscribeChanges({
						kind: "presence",
						workspaceId
					}, (update) => {
						if (!mountedRef.current) return;
						if (update.type === "failed") {
							setLoadError(update.message);
							return;
						}
						refreshMembers();
					})
				];
				return () => {
					mountedRef.current = false;
					refreshSequenceRef.current += 1;
					for (const dispose of disposers) dispose();
				};
			}, [workspaceId, channelRef]);
			(0, react.useEffect)(() => {
				if (!managingMembers) return;
				queueMicrotask(() => {
					memberListRef.current?.querySelector("button")?.focus();
				});
			}, [managingMembers]);
			const loadOlder = async () => {
				if (view === void 0 || !view.hasMore || loadingOlder) return;
				setLoadingOlder(true);
				try {
					const result = await loadChannels({
						workspaceId,
						channelRef,
						direction: "before",
						topLevelOnly: true,
						includeActivities: false,
						cursor: view.cursor,
						limit: 20
					});
					if (!mountedRef.current) return;
					if (!result.ok) {
						setError(result.error.message);
						return;
					}
					setView((current) => current === void 0 ? result.value : mergeChannelView(current, result.value));
				} catch (cause) {
					if (mountedRef.current) setError(cause instanceof Error ? cause.message : String(cause));
				} finally {
					if (mountedRef.current) setLoadingOlder(false);
				}
			};
			const closeMembers = () => {
				setManagingMembers(false);
				queueMicrotask(() => {
					manageTriggerRef.current?.querySelector("button")?.focus();
				});
			};
			const membership = useChannelMembership({
				joinChannel,
				removeChannelMember
			}, (change) => change.memberId, async () => {
				await refresh();
			});
			const pendingSendId = (0, react.useRef)();
			const clearSendState = (0, react.useCallback)(() => {
				setStatusMessage((current) => current === void 0 ? current : void 0);
			}, []);
			const send = async () => {
				const { draft, recipients } = drafts.getSnapshot(draftKey);
				if (pending || draft.trim() === "") return;
				const recipientIds = [...recipients].sort();
				const requestId = pendingSendId.current ?? mintRequestId();
				pendingSendId.current = requestId;
				setPending(true);
				setError(void 0);
				setStatusMessage(void 0);
				try {
					const upload = await uploadComposerFiles(putAttachment, workspaceId, pendingFiles);
					if (!upload.ok) {
						pendingSendId.current = void 0;
						setError(upload.error);
						return;
					}
					const attachmentIds = upload.attachmentIds;
					const result = await sendMessage({
						requestId,
						workspaceId,
						channelRef,
						body: draft.trim(),
						recipients: recipientIds,
						asTask,
						...attachmentIds.length === 0 ? {} : { attachments: attachmentIds }
					});
					if (!result.ok) {
						pendingSendId.current = void 0;
						setError(result.error.message);
					} else if (result.value.kind === "committed") {
						pendingSendId.current = void 0;
						setAsTask(false);
						await refresh();
						drafts.clear(draftKey);
						setPendingFiles([]);
						setStatusMessage(void 0);
					} else if (result.value.kind === "confirmation_required") setStatusMessage(t("mentionConfirmation"));
					else {
						pendingSendId.current = void 0;
						setError(t("memberNotFollowing", { ids: result.value.memberIds.map((memberId) => `@${members.find((candidate) => candidate.member.memberId === memberId)?.member.handle ?? memberId}`).join(", ") }));
					}
				} catch (cause) {
					setError(cause instanceof Error ? cause.message : String(cause));
				} finally {
					setPending(false);
				}
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("main", {
				className: conversation_module_css_default.surface,
				"data-team-channel": channelRef,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: conversation_module_css_default.surfaceHeader,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: conversation_module_css_default.backRow,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								size: "sm",
								icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronLeftOutlineRegular, {}),
								onClick: backToChannels,
								children: t("backToChannels")
							})
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", {
							className: conversation_module_css_default.headerRow,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: conversation_module_css_default.headerCopy,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h1", { children: channel === void 0 ? "# …" : `# ${channel.name}` }),
									channel !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: channel.description }),
									channel !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: channel_module_css_default.headerMeta,
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("memberCount", { count: channelMembers.length }) }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("onlineCount", { count: onlineCount }) })]
									})
								]
							}), channel !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								ref: manageTriggerRef,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									size: "sm",
									variant: "outline",
									"aria-haspopup": "dialog",
									onClick: () => {
										setManagingMembers(true);
									},
									children: t("manageMembers")
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
						open: managingMembers,
						onClose: closeMembers,
						title: t("channelMembers"),
						...channel === void 0 ? {} : { description: `# ${channel.name} · ${t("memberCount", { count: channelMembers.length })}` },
						closeLabel: t("close"),
						contentClassName: channel_module_css_default.modalBody,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							ref: memberListRef,
							className: channel_module_css_default.memberList,
							children: members.filter((status) => status.member.state !== "inactive" && status.member.state !== "archived").map((status) => {
								const joined = channelMemberIds.has(status.member.memberId);
								const rowPending = membership.pending.has(status.member.memberId);
								const disabled = rowPending || !joined && status.availability !== "active";
								const rowError = membership.errors.get(status.member.memberId);
								return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamMemberRow, {
									status,
									action: {
										label: rowPending ? t("membershipUpdating") : joined ? t("removeFromChannel") : t("addToChannel"),
										disabled,
										onSelect: () => {
											membership.change({
												workspaceId,
												channelRef,
												memberId: status.member.memberId,
												joined
											});
										}
									},
									...rowError === void 0 ? {} : { error: rowError },
									t
								}, status.member.memberId);
							})
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("section", {
						ref: timeline.ref,
						onScroll: timeline.onScroll,
						className: conversation_module_css_default.timeline,
						"aria-label": t("timelineLabel"),
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: conversation_module_css_default.timelineContent,
							children: [
								loading && channel === void 0 && error === void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: conversation_module_css_default.emptySurface,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
										className: conversation_module_css_default.loadingState,
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: conversation_module_css_default.loadingMark,
											"aria-hidden": "true"
										}), t("loadingChannels")]
									})
								}),
								!loading && channel === void 0 && error === void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: conversation_module_css_default.emptySurface,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
										className: conversation_module_css_default.emptyState,
										children: t("emptyChannels")
									})
								}),
								!loading && channel === void 0 && error !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: conversation_module_css_default.errorState,
									role: "alert",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: error }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										size: "sm",
										variant: "outline",
										onClick: () => {
											refresh(true);
										},
										children: t("retry")
									})]
								}),
								view?.hasMore && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: conversation_module_css_default.timelineAction,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										size: "sm",
										disabled: loadingOlder,
										onClick: () => {
											loadOlder();
										},
										children: t("loadOlder")
									})
								}),
								channel !== void 0 && view?.items.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: conversation_module_css_default.emptySurface,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: conversation_module_css_default.emptyState,
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: t("emptyMessages") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("emptyMessagesHint") })]
									})
								}),
								(view?.items.length ?? 0) > 0 && chunkRunsWithDays(view.items, messageSender, (item) => item.message.occurredAt).map((block, blockIndex) => block.kind === "day" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: thread_module_css_default.daySeparator,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: block.label })
								}, `day-${blockIndex}-${block.label}`) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: conversation_module_css_default.messageRun,
									children: block.items.map((item, index) => {
										const senderStatus = members.find((member) => member.member.memberId === item.message.sender);
										const human = item.message.sender === view.humanMemberId;
										const sender = human ? humanName : senderStatus?.member.handle ?? item.message.sender;
										const turnGap = isRunGap(index > 0 ? block.items[index - 1].message.occurredAt : void 0, item.message.occurredAt);
										const task = item.task;
										const unread = unreadByThread.get(item.thread.threadRef) ?? 0;
										return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react.Fragment, { children: [turnGap && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamRunDivider, { occurredAt: item.message.occurredAt }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamMessage, {
											senderName: sender,
											memberId: item.message.sender,
											human,
											...humanAvatarUrl === void 0 ? {} : { avatarUrl: humanAvatarUrl },
											body: item.message.body,
											attachments: item.message.attachments,
											loadAttachment: getAttachment,
											t,
											occurredAt: item.message.occurredAt,
											mentionNames: mentionNamesOf(item.mentions, handleByMember, humanName),
											onOpenRef: openRef,
											onResolveTaskRefs: lookupTaskRefs,
											onResolveThreadRefs: lookupThreadRefs,
											channelNameOf,
											memberOf,
											onOpenMemberSession: openMemberSession,
											grouped: index > 0,
											showGroupedTime: item.message.topLevel === true && !turnGap,
											...senderStatus === void 0 ? {} : { senderTitle: senderStatus.member.description },
											children: item.message.topLevel && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ThreadEntryRow, {
												item,
												owners: item.claimOwners,
												unread,
												human: humanIdentity,
												t,
												onOpen: () => {
													selectThread(item.thread.threadRef, channelRef, task?.taskRef, item.taskNumber);
												}
											})
										})] }, item.message.messageRef);
									})
								}, `run-${block.items[0].message.messageRef}`))
							]
						})
					}),
					channel !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamComposer, {
						members: channelMembers,
						drafts,
						draftKey,
						pending,
						...statusMessage === void 0 ? {} : { confirmation: statusMessage },
						...error === void 0 ? {} : { error },
						onEdit: clearSendState,
						onSubmit: () => {
							send();
						},
						pendingFiles,
						onFilesChange: setPendingFiles,
						asTask,
						onAsTaskChange: setAsTask,
						t
					}, draftKey) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {})
				]
			});
		}
		/**
		* One entry's state: who is on the work, where it stands, and how much of it
		* needs the reader. It leads the entry's own line rather than trailing the
		* identity line, so a reader meets it where they are already reading instead of
		* crossing the column for it — and the same placement holds whether this
		* Message opened its run or continued one, where an identity line would have
		* carried nothing else. The unread capsule is the only member a taskless
		* discussion can carry: it needs no Task.
		*/
		function ThreadStateCluster({ task, owners, unread, human, t }) {
			if (task === void 0 && unread === 0) return null;
			const namedOwners = namedAvatarOwners(owners, human);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
				className: conversation_module_css_default.stateCluster,
				children: [
					task !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamAvatarStack, {
						owners: namedOwners,
						label: claimersLabel(namedOwners, t),
						human
					}),
					task !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamStateDot, {
						size: 8,
						state: taskStatusDot(task.status)
					}),
					task !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: conversation_module_css_default.statusWord,
						children: formatTaskStatus(task.status, t)
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamCountBadge, { count: unread })
				]
			});
		}
		/**
		* The gate under one top-level Message: the single row that opens its Thread,
		* and the one line that says what stands there. State leads it, then what the
		* entry is: a Task entry keeps its number so the status word never floats free
		* of the Task it describes, follow-up activity adds when the work last moved —
		* while the work is still unfinished — and an unanswered Thread says only 回复.
		* The instant uses the Inbox's own 今天/昨天 form with the precise local time on
		* the control's title, and an unread Thread says so in the control's label
		* rather than only in pixels.
		*/
		function ThreadEntryRow({ item, owners, unread, human, t, onOpen }) {
			const taskNumber = item.taskNumber;
			const followUp = followUpAt(item);
			const printedActivity = printedActivityAt(item);
			const label = taskNumber !== void 0 ? t("taskLabel", { number: taskNumber }) : followUp === void 0 ? t("replyAction") : t("threadLabel");
			const text = printedActivity === void 0 ? label : `${label} · ${t("recentActivity", { time: formatInboxTime(printedActivity, t) })}`;
			const openLabel = taskNumber === void 0 ? unread > 0 ? t("openThreadUnread", { count: unread }) : t("openThread") : unread > 0 ? t("openTaskUnread", {
				number: taskNumber,
				count: unread
			}) : t("openTask", { number: taskNumber });
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
				className: conversation_module_css_default.entryLine,
				"data-thread-entry": "",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ThreadStateCluster, {
					task: item.task,
					owners,
					unread,
					human,
					t
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
					type: "button",
					className: conversation_module_css_default.entryRow,
					"aria-label": openLabel,
					...followUp === void 0 ? {} : { title: formatAbsoluteTime(followUp) },
					onClick: onOpen,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: text }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: conversation_module_css_default.entryArrow,
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronRightOutlineRegular, { size: 12 })
					})]
				})]
			});
		}
		//#endregion
		//#region \0dsh-css:C:\Sophia\科研\AI科研助手开发\dsh-research-team\packages\client-agent-team\src\client\inbox.module.css.mjs
		const css$1 = "._0pzXZG_list{flex-direction:column;gap:2px;display:flex}._0pzXZG_headerMeta{font-variant-numeric:tabular-nums;flex-wrap:wrap;align-items:baseline;gap:0 10px;display:flex;overflow:hidden}._0pzXZG_headerUnread{color:var(--dsw-alias-label-primary);font-weight:600}._0pzXZG_row{border-radius:var(--dsw-radius-lg,8px);color:inherit;cursor:pointer;font:inherit;text-align:left;background:0 0;border:0;grid-template-columns:max-content minmax(0,1fr);align-items:center;gap:1px 8px;width:100%;padding:8px;display:grid}._0pzXZG_row:hover,._0pzXZG_row:focus-visible{--team-mark-ring:var(--dsw-alias-interactive-bg-hover);background:var(--dsw-alias-interactive-bg-hover)}._0pzXZG_row:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:-2px}._0pzXZG_rowActor{grid-area:1/1;display:flex}._0pzXZG_rowLine{grid-area:1/2;align-items:baseline;gap:2px 8px;min-width:0;display:flex;container-type:inline-size}._0pzXZG_rowCrumb{text-overflow:ellipsis;white-space:nowrap;flex:auto;min-width:0;font-size:13px;line-height:20px;overflow:hidden}._0pzXZG_rowWorkspace{color:var(--dsw-alias-label-tertiary);font-size:12px}._0pzXZG_rowChannel{color:var(--dsw-alias-label-primary);font-weight:600}._0pzXZG_rowTask{border:1px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-sm,6px);color:var(--dsw-alias-label-secondary);white-space:nowrap;flex:none;margin-left:3px;padding:0 5px;font-size:11px;font-weight:600;line-height:15px}._0pzXZG_rowTime{color:var(--dsw-alias-label-tertiary);font-variant-numeric:tabular-nums;white-space:nowrap;flex:none;font-size:11px;line-height:18px}@container (width<=70px){._0pzXZG_rowTime{display:none}}._0pzXZG_rowPreview{color:var(--dsw-alias-label-secondary);text-overflow:ellipsis;white-space:nowrap;grid-area:2/2;min-width:0;font-size:13px;line-height:20px;overflow:hidden}._0pzXZG_section{flex-direction:column;display:flex}._0pzXZG_section+._0pzXZG_section{margin-top:20px}._0pzXZG_sectionTitle{color:var(--dsw-alias-label-tertiary);margin:0 0 4px;padding:0 8px 0 34px;font-size:12px;font-weight:600;line-height:18px}._0pzXZG_sectionCount{font-variant-numeric:tabular-nums;margin-left:6px}";
		const tagId$1 = "@sophialin/dsh-research-team/inbox.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$1) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@sophialin/dsh-research-team";
			tag.dataset.pluginCss = tagId$1;
			tag.textContent = css$1;
			document.head.appendChild(tag);
		}
		var inbox_module_css_default = {
			"headerMeta": "_0pzXZG_headerMeta",
			"headerUnread": "_0pzXZG_headerUnread",
			"list": "_0pzXZG_list",
			"row": "_0pzXZG_row",
			"rowActor": "_0pzXZG_rowActor",
			"rowChannel": "_0pzXZG_rowChannel",
			"rowCrumb": "_0pzXZG_rowCrumb",
			"rowLine": "_0pzXZG_rowLine",
			"rowPreview": "_0pzXZG_rowPreview",
			"rowTask": "_0pzXZG_rowTask",
			"rowTime": "_0pzXZG_rowTime",
			"rowWorkspace": "_0pzXZG_rowWorkspace",
			"section": "_0pzXZG_section",
			"sectionCount": "_0pzXZG_sectionCount",
			"sectionTitle": "_0pzXZG_sectionTitle"
		};
		//#endregion
		//#region src/client/TeamInboxPage.tsx
		/**
		* How many 「最近活跃」 rows the merged page may show. The Host bounds each
		* Workspace's own slice; this is the single bound across every Workspace on
		* screen, so the section stays the same size no matter how many are open — and
		* it stays a way back into work rather than a second queue, which is why it is
		* shorter than the queue the reader is actually being asked to work through.
		*/
		const RECENT_ROWS_LIMIT = 5;
		/**
		* Queue order, one total order across Workspaces: the Host's own keys —
		* mentions first, then the ledger sequence, then the Thread ref. Each Workspace
		* slice already arrives in this order, and it is also the Host's truncation
		* policy, so the merge re-applies it instead of inventing a second one: a row
		* that survived the cut on mentions must not sink below a merely newer row
		* after the merge. `newestSequence` is a global ledger position, so it stays
		* comparable across Workspaces.
		*/
		function compareInboxRows(left, right) {
			return right.item.directCount - left.item.directCount || right.item.newestSequence - left.item.newestSequence || left.item.thread.threadRef.localeCompare(right.item.thread.threadRef);
		}
		/**
		* The Human Inbox: one Inbox call per visible Workspace, rendering the Host's
		* two slices — the unread queue (「需要我」, mentions counted inside it rather
		* than alone) and the 「最近活跃」 tail of Threads the reader took part in.
		* Both merge across every Workspace into one list in the Host's own order,
		* mentions first and then newest, rather than by Workspace.
		* Opening the page never acknowledges anything — only a durable Thread read
		* advances the watermark and consumes a mention marker, so rows and the badge
		* drop after the Thread is opened through the existing auto-ack path. A Thread
		* holding unread is only ever in the queue: the Host already excludes it from
		* the tail, and this page never re-derives that judgement.
		*/
		function TeamInboxPage({ useWorkspaces, loadInbox, subscribeChanges, selectWorkspace, selectThread, humanName, humanAvatarUrl, t }) {
			const workspaces = useWorkspaces((state) => state.items);
			const [rows, setRows] = (0, react.useState)();
			const [recentRows, setRecentRows] = (0, react.useState)([]);
			const [humanMemberId, setHumanMemberId] = (0, react.useState)();
			const [loading, setLoading] = (0, react.useState)(true);
			const [error, setError] = (0, react.useState)();
			const loadedRef = (0, react.useRef)(false);
			const refresh = (0, react.useCallback)(async () => {
				if (!loadedRef.current) setLoading(true);
				const results = await Promise.all(workspaces.map(async (workspace) => {
					const result = await loadInbox({
						workspaceId: workspace.workspaceId,
						limit: 100
					});
					return result.ok ? {
						ok: true,
						workspaceId: workspace.workspaceId,
						workspaceTitle: workspace.title,
						items: result.value.items,
						recent: result.value.recent,
						humanMemberId: result.value.humanMemberId
					} : {
						ok: false,
						message: result.error.message
					};
				}));
				const failure = results.find((result) => !result.ok);
				setHumanMemberId(results.find((result) => result.ok)?.humanMemberId);
				const asRows = (items, workspaceId, workspaceTitle) => items.map((item) => ({
					workspaceId,
					workspaceTitle,
					item
				}));
				setRows(results.flatMap((result) => result.ok ? asRows(result.items, result.workspaceId, result.workspaceTitle) : []).sort(compareInboxRows));
				setRecentRows(results.flatMap((result) => result.ok ? asRows(result.recent, result.workspaceId, result.workspaceTitle) : []).sort(compareInboxRows).slice(0, RECENT_ROWS_LIMIT));
				setError(failure?.ok === false ? failure.message : void 0);
				loadedRef.current = true;
				setLoading(false);
			}, [loadInbox, workspaces]);
			(0, react.useEffect)(() => {
				refresh();
			}, [refresh]);
			(0, react.useEffect)(() => subscribeChanges(void 0, (update) => {
				if (update.type === "failed") {
					setError(update.message);
					return;
				}
				refresh();
			}), [subscribeChanges, refresh]);
			const open = (row) => {
				selectWorkspace(row.workspaceId);
				selectThread(row.item.thread.threadRef, row.item.channelRef, row.item.task?.taskRef, row.item.taskNumber);
			};
			const totalUnread = rows?.reduce((sum, row) => sum + row.item.unreadCount, 0) ?? 0;
			const totalMentions = rows?.reduce((sum, row) => sum + row.item.directCount, 0) ?? 0;
			const shownWorkspaces = /* @__PURE__ */ new Set();
			for (const row of rows ?? []) shownWorkspaces.add(row.workspaceTitle);
			for (const row of recentRows) shownWorkspaces.add(row.workspaceTitle);
			const showWorkspace = shownWorkspaces.size > 1;
			const human = humanMemberId === void 0 ? void 0 : {
				memberId: humanMemberId,
				name: humanName,
				...humanAvatarUrl === void 0 ? {} : { avatarUrl: humanAvatarUrl }
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("main", {
				className: conversation_module_css_default.surface,
				"data-team-inbox": true,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: conversation_module_css_default.surfaceHeader,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("header", {
						className: conversation_module_css_default.headerRow,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: conversation_module_css_default.headerCopy,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h1", { children: t("inboxTitle") }), rows !== void 0 && rows.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
								className: inbox_module_css_default.headerMeta,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("inboxHeaderThreads", { count: rows.length }) }),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: inbox_module_css_default.headerUnread,
										children: t("inboxHeaderUnread", { count: totalUnread })
									}),
									totalMentions > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("inboxHeaderMentions", { count: totalMentions }) })
								]
							})]
						})
					})
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: conversation_module_css_default.timeline,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: conversation_module_css_default.timelineContent,
						children: [
							loading && rows === void 0 && error === void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: conversation_module_css_default.emptySurface,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
									className: conversation_module_css_default.loadingState,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: conversation_module_css_default.loadingMark,
										"aria-hidden": "true"
									}), t("loadingInbox")]
								})
							}),
							!loading && rows === void 0 && error !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: conversation_module_css_default.errorState,
								role: "alert",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: error }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									size: "sm",
									variant: "outline",
									onClick: () => {
										refresh();
									},
									children: t("retry")
								})]
							}),
							rows !== void 0 && (rows.length === 0 && recentRows.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: conversation_module_css_default.emptySurface,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: conversation_module_css_default.emptyState,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: t("inboxEmptyTitle") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("inboxEmptyHint") })]
								})
							}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [rows.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
								className: inbox_module_css_default.section,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("h2", {
									className: inbox_module_css_default.sectionTitle,
									children: [t("inboxSectionNeedsMe"), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: inbox_module_css_default.sectionCount,
										children: rows.length
									})]
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: inbox_module_css_default.list,
									children: rows.map((row) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(InboxQueueRow, {
										row,
										t,
										showWorkspace,
										human,
										onOpen: () => {
											open(row);
										}
									}, `${row.workspaceId} ${row.item.thread.threadRef}`))
								})]
							}), recentRows.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
								className: inbox_module_css_default.section,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("h2", {
									className: inbox_module_css_default.sectionTitle,
									children: [t("inboxSectionRecent"), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: inbox_module_css_default.sectionCount,
										children: recentRows.length
									})]
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: inbox_module_css_default.list,
									children: recentRows.map((row) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(InboxQueueRow, {
										row,
										t,
										showWorkspace,
										human,
										onOpen: () => {
											open(row);
										}
									}, `${row.workspaceId} ${row.item.thread.threadRef}`))
								})]
							})] })),
							rows !== void 0 && error !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: conversation_module_css_default.error,
								role: "alert",
								children: error
							})
						]
					})
				})]
			});
		}
		/**
		* One queue row, shaped like the shipped two-line result row: who is on this
		* Thread leads in the gutter, the identity line answers which Thread this is,
		* how much is waiting, and when it last moved, and the gist sits under it on the
		* same column as evidence for that identity rather than as the row's subject.
		*
		* The gutter carries the one thing every row has — who is on the work, or who
		* moved a Thread nobody has claimed — so a Thread that merely arrived and one
		* that named the reader open on the same edge instead of the quieter one opening
		* on a slot reserved for a count it does not hold. It is the grammar the Channel
		* feed's Thread entry row already speaks, where the people on the work lead the
		* row.
		*
		* Before the queue admitted every unread Thread, each row was a mention and the
		* rows were interchangeable; now that named and ambient unread share one list,
		* the row has to carry that difference itself. The count closes the identity
		* line and only its ink changes — the shared capsule fill for a row that names
		* the reader, a hairline for one that merely moved. The two numbers behind that
		* ink (unread, mentions) reach assistive tech through the capsule's own name,
		* because a second visible count beside the first would cost the row the one
		* thing it needs to stay scannable.
		*/
		function InboxQueueRow({ row, t, showWorkspace, human, onOpen }) {
			const { item } = row;
			const actor = item.newestActor;
			const owners = item.claimOwners;
			const namedOwners = namedAvatarOwners(owners, human);
			const namedActor = namedAvatarOwners([actor], human)[0];
			const named = item.directCount > 0;
			const countLabel = named ? t("inboxRowUnreadMentions", {
				count: item.unreadCount,
				mentions: item.directCount
			}) : t("inboxRowUnread", { count: item.unreadCount });
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
				type: "button",
				className: inbox_module_css_default.row,
				"data-named": named || void 0,
				onClick: onOpen,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: inbox_module_css_default.rowActor,
						children: owners.length > 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamAvatarStack, {
							owners: namedOwners,
							label: claimersLabel(namedOwners, t),
							human
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamAvatarStack, {
							owners: [namedActor],
							label: t("inboxRowActor", { name: `@${namedActor.name}` }),
							human
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: inbox_module_css_default.rowLine,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
								className: inbox_module_css_default.rowCrumb,
								children: [
									showWorkspace && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: inbox_module_css_default.rowWorkspace,
										children: row.workspaceTitle
									}),
									showWorkspace && " / ",
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
										className: inbox_module_css_default.rowChannel,
										children: ["#", item.channelName]
									}),
									" ",
									item.taskNumber !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: inbox_module_css_default.rowTask,
										children: t("taskLabel", { number: item.taskNumber })
									})
								]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamCountBadge, {
								count: item.unreadCount,
								tone: named ? "solid" : "hairline",
								label: countLabel
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("time", {
								className: inbox_module_css_default.rowTime,
								dateTime: item.newestOccurredAt,
								title: formatAbsoluteTime(item.newestOccurredAt),
								children: formatInboxTime(item.newestOccurredAt, t)
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: inbox_module_css_default.rowPreview,
						children: item.previewText
					})
				]
			});
		}
		//#endregion
		//#region src/client/TeamThreadPage.tsx
		function factKey(fact) {
			return fact.kind === "message" ? `message:${fact.message.messageRef}` : `activity:${fact.activity.activityRef}`;
		}
		function messageFact(message, mentions = []) {
			return {
				kind: "message",
				sequence: message.sequence,
				message,
				mentions,
				occurredAt: message.occurredAt
			};
		}
		/**
		* A fact owns its mention array, so the rendered name list is cached against
		* that array. Every roster refresh replaces the handles map with a fresh Map of
		* identical content, so the cache compares the resolved names rather than the
		* map identity: identity stays stable while the names are unchanged, which is
		* what keeps a memoized row from re-rendering on every refresh.
		*/
		const mentionNamesCache = /* @__PURE__ */ new WeakMap();
		function stableMentionNames(mentions, handles, humanName) {
			const names = mentionNamesOf(mentions, handles, humanName);
			const cached = mentionNamesCache.get(mentions);
			if (cached !== void 0 && cached.length === names.length && cached.every((name, index) => mentionNameOf(name) === mentionNameOf(names[index]))) return cached;
			mentionNamesCache.set(mentions, names);
			return names;
		}
		function mergeFacts(...groups) {
			const byKey = /* @__PURE__ */ new Map();
			for (const group of groups) for (const fact of group) byKey.set(factKey(fact), fact);
			return [...byKey.values()].sort((left, right) => left.sequence - right.sequence);
		}
		function minSequence(facts) {
			return facts.reduce((minimum, fact) => minimum === void 0 ? fact.sequence : Math.min(minimum, fact.sequence), void 0);
		}
		function readMeta(facts) {
			return new Map(facts.map((fact) => [factKey(fact.fact), fact]));
		}
		function TeamThreadPage(props) {
			const { workspaceId, humanName, humanAvatarUrl, channelRef, taskRef, threadRef, taskNumber, backToWorkspace, selectChannel, selectThread, resolveTaskRefs, resolveThreadRefs, openMemberSession, putAttachment, loadChannels, readThread, loadThreadHistory, threadObservations, subscribeChanges, loadMembers, drafts, getAttachment, reply, changeTask, promoteThread, t } = props;
			const threadRequest = {
				threadRef,
				...taskRef === void 0 ? {} : { taskRef }
			};
			const [projection, setProjection] = (0, react.useState)();
			const [channelView, setChannelView] = (0, react.useState)();
			const [members, setMembers] = (0, react.useState)([]);
			const [followerIds, setFollowerIds] = (0, react.useState)(() => /* @__PURE__ */ new Set());
			const [currentFacts, setCurrentFacts] = (0, react.useState)([]);
			const [olderFacts, setOlderFacts] = (0, react.useState)([]);
			const [readFacts, setReadFacts] = (0, react.useState)([]);
			const [historyCursor, setHistoryCursor] = (0, react.useState)();
			const [historyHasMore, setHistoryHasMore] = (0, react.useState)(false);
			const MAX_AUTO_READ_ROUNDS = 50;
			const [autoReadExhausted, setAutoReadExhausted] = (0, react.useState)(false);
			const [newFactsCount, setNewFactsCount] = (0, react.useState)(0);
			const draftKey = `thread:${threadRef}`;
			const [claimsOpen, setClaimsOpen] = (0, react.useState)(false);
			const [confirmingAccept, setConfirmingAccept] = (0, react.useState)(false);
			(0, react.useEffect)(() => {
				if (confirmingAccept && projection?.task?.resolution === "accepted") setConfirmingAccept(false);
			}, [confirmingAccept, projection?.task?.resolution]);
			const [replyRequestId, setReplyRequestId] = (0, react.useState)();
			const [confirmation, setConfirmation] = (0, react.useState)();
			const [statusMessage, setStatusMessage] = (0, react.useState)();
			const [pending, setPending] = (0, react.useState)(false);
			const [mutating, setMutating] = (0, react.useState)();
			const [loading, setLoading] = (0, react.useState)(true);
			const [error, setError] = (0, react.useState)();
			const mountedRef = (0, react.useRef)(false);
			const currentFactsRef = (0, react.useRef)([]);
			const sequenceRef = (0, react.useRef)(0);
			const readRequestIdRef = (0, react.useRef)(mintRequestId());
			const projectionRef = (0, react.useRef)();
			const mutationRequests = (0, react.useRef)(/* @__PURE__ */ new Map());
			const threadLastFact = currentFacts[currentFacts.length - 1];
			const timeline = useTimelineScroll(`${currentFacts.length}:${olderFacts.length}:${threadLastFact === void 0 ? "" : factKey(threadLastFact)}`);
			const updateProjection = (next) => {
				projectionRef.current = next;
				setProjection(next);
				setReadFacts(next.facts);
				const batch = [messageFact(next.anchor, next.anchorMentions), ...next.facts.map((fact) => fact.fact)];
				setCurrentFacts((current) => {
					const merged = mergeFacts(current, batch);
					currentFactsRef.current = merged;
					return merged;
				});
			};
			const drainUnread = async () => {
				for (let round = 1; round <= MAX_AUTO_READ_ROUNDS; round += 1) {
					const snapshot = projectionRef.current;
					if (snapshot === void 0 || snapshot.remainingUnreadCount <= 0) return;
					const beforeSequence = sequenceRef.current;
					if (!await readCurrent(true)) return;
					if (!mountedRef.current || sequenceRef.current !== beforeSequence + 1) return;
					if (projectionRef.current?.remainingUnreadCount === snapshot.remainingUnreadCount) return;
				}
				setAutoReadExhausted(true);
			};
			const readCurrent = async (newRequest = false) => {
				if (!mountedRef.current) return false;
				if (newRequest) readRequestIdRef.current = mintRequestId();
				const sequence = sequenceRef.current + 1;
				sequenceRef.current = sequence;
				setLoading(true);
				try {
					const result = await readThread({
						requestId: readRequestIdRef.current,
						workspaceId,
						...threadRequest
					});
					if (!mountedRef.current || sequence !== sequenceRef.current) return false;
					if (!result.ok) {
						setError(result.error.message);
						return false;
					}
					updateProjection(result.value);
					setError(void 0);
					return true;
				} catch (cause) {
					if (mountedRef.current && sequence === sequenceRef.current) setError(cause instanceof Error ? cause.message : String(cause));
					return false;
				} finally {
					if (mountedRef.current && sequence === sequenceRef.current) setLoading(false);
				}
			};
			/** One roster + view read. Answers false once the page is gone. */
			const applySupplemental = async () => {
				try {
					const [loadedMembers, loadedView] = await Promise.all([loadMembers({ workspaceId }), loadChannels({
						workspaceId,
						...channelRef === void 0 ? {} : { channelRef },
						threadRef,
						includeActivities: false,
						limit: 1
					})]);
					if (!mountedRef.current) return false;
					if (loadedMembers.ok) setMembers(loadedMembers.value);
					if (loadedView.ok) setChannelView(loadedView.value);
					const failure = [loadedMembers, loadedView].find((result) => !result.ok);
					if (failure !== void 0 && !failure.ok) setError(failure.error.message);
					return true;
				} catch (cause) {
					if (mountedRef.current) setError(cause instanceof Error ? cause.message : String(cause));
					return mountedRef.current;
				}
			};
			const supplementalRef = (0, react.useRef)();
			const supplementalPendingRef = (0, react.useRef)(false);
			const refreshSupplemental = () => {
				supplementalPendingRef.current = true;
				if (supplementalRef.current !== void 0) return supplementalRef.current;
				const round = (async () => {
					await Promise.resolve();
					while (mountedRef.current && supplementalPendingRef.current) {
						supplementalPendingRef.current = false;
						if (!await applySupplemental()) return;
					}
				})().finally(() => {
					if (supplementalRef.current === round) supplementalRef.current = void 0;
				});
				supplementalRef.current = round;
				return round;
			};
			const refreshPassiveFacts = async () => {
				try {
					const result = await loadThreadHistory({
						workspaceId,
						...threadRequest,
						limit: 100
					});
					if (!mountedRef.current || !result.ok) return;
					const incoming = result.value.facts;
					const shown = currentFactsRef.current;
					if (shown.length === 0) return;
					const known = new Set(shown.map((fact) => factKey(fact)));
					const newestShown = shown.reduce((maximum, fact) => Math.max(maximum, fact.sequence), 0);
					const additions = incoming.filter((fact) => !known.has(factKey(fact)) && fact.sequence > newestShown);
					setCurrentFacts((current) => {
						const merged = mergeFacts(current, incoming);
						currentFactsRef.current = merged;
						return merged;
					});
					setProjection((current) => {
						const next = current === void 0 ? current : {
							...current,
							...result.value.task === void 0 ? {} : { task: result.value.task },
							thread: result.value.thread,
							claims: result.value.claims
						};
						if (next !== void 0) projectionRef.current = next;
						return next;
					});
					if (additions.length === 0) return;
					if (!timeline.isPinned()) setNewFactsCount((current) => current + additions.length);
					await readCurrent(true);
				} catch {}
			};
			const refreshFollowers = async () => {
				try {
					const result = await threadObservations({
						workspaceId,
						...threadRequest
					});
					if (!mountedRef.current || !result.ok) return;
					setFollowerIds(new Set(result.value.followers));
				} catch {}
			};
			(0, react.useEffect)(() => {
				mountedRef.current = true;
				supplementalRef.current = void 0;
				supplementalPendingRef.current = false;
				projectionRef.current = void 0;
				setProjection(void 0);
				setChannelView(void 0);
				setMembers([]);
				setFollowerIds(/* @__PURE__ */ new Set());
				setCurrentFacts([]);
				currentFactsRef.current = [];
				setOlderFacts([]);
				setReadFacts([]);
				setHistoryCursor(void 0);
				setHistoryHasMore(false);
				setAutoReadExhausted(false);
				setNewFactsCount(0);
				setError(void 0);
				setStatusMessage(void 0);
				const sequence = sequenceRef.current + 1;
				sequenceRef.current = sequence;
				setLoading(true);
				(async () => {
					const [read, history, observations] = await Promise.all([
						readThread({
							requestId: readRequestIdRef.current,
							workspaceId,
							...threadRequest
						}),
						loadThreadHistory({
							workspaceId,
							...threadRequest,
							limit: 20
						}).catch(() => void 0),
						threadObservations({
							workspaceId,
							...threadRequest
						}).catch(() => void 0)
					]);
					if (!mountedRef.current || sequence !== sequenceRef.current) return;
					if (!read.ok) {
						setError(read.error.message);
						setLoading(false);
						return;
					}
					updateProjection(read.value);
					timeline.scrollToBottom();
					if (history !== void 0 && history.ok) {
						setCurrentFacts((current) => {
							const merged = mergeFacts(current, history.value.facts);
							currentFactsRef.current = merged;
							return merged;
						});
						setHistoryCursor(history.value.cursor);
						setHistoryHasMore(history.value.hasMore);
					}
					if (observations !== void 0 && observations.ok) setFollowerIds(new Set(observations.value.followers));
					setError(void 0);
					setLoading(false);
					await drainUnread();
				})();
				refreshSupplemental();
				const disposers = [
					subscribeChanges({
						kind: "thread",
						threadRef
					}, (update) => {
						if (!mountedRef.current) return;
						if (update.type === "failed") {
							setError(update.message);
							return;
						}
						refreshPassiveFacts();
						refreshFollowers();
					}),
					subscribeChanges({
						kind: "workspace",
						workspaceId
					}, (update) => {
						if (!mountedRef.current) return;
						if (update.type === "failed") {
							setError(update.message);
							return;
						}
						refreshSupplemental();
					}),
					subscribeChanges({
						kind: "presence",
						workspaceId
					}, (update) => {
						if (!mountedRef.current) return;
						if (update.type === "failed") {
							setError(update.message);
							return;
						}
						refreshSupplemental();
					})
				];
				return () => {
					mountedRef.current = false;
					sequenceRef.current += 1;
					for (const dispose of disposers) dispose();
				};
			}, [
				workspaceId,
				taskRef,
				threadRef
			]);
			(0, react.useEffect)(() => {
				if (newFactsCount > 0 && timeline.isPinned()) setNewFactsCount(0);
			}, [
				newFactsCount,
				currentFacts,
				olderFacts,
				timeline
			]);
			const handleTimelineScroll = () => {
				timeline.onScroll();
				if (timeline.isPinned()) setNewFactsCount(0);
			};
			const loadOlder = async () => {
				if (historyHasMore === false && historyCursor === void 0) return;
				const beforeSequence = historyCursor ?? minSequence(currentFactsRef.current);
				if (beforeSequence === void 0) return;
				setLoading(true);
				try {
					const result = await loadThreadHistory({
						workspaceId,
						...threadRequest,
						beforeSequence,
						limit: 20
					});
					if (!mountedRef.current) return;
					if (!result.ok) {
						setError(result.error.message);
						return;
					}
					setOlderFacts((current) => mergeFacts(current, result.value.facts));
					setHistoryCursor(result.value.cursor);
					setHistoryHasMore(result.value.hasMore);
					setError(void 0);
				} catch (cause) {
					if (mountedRef.current) setError(cause instanceof Error ? cause.message : String(cause));
				} finally {
					if (mountedRef.current) setLoading(false);
				}
			};
			const activeProjection = projection;
			const task = activeProjection?.task;
			const thread = activeProjection?.thread;
			const resolvedTaskNumber = taskNumber ?? channelView?.taskNumbers.find((entry) => entry.taskRef === task?.taskRef)?.taskNumber;
			const taskTitle = activeProjection === void 0 ? void 0 : formatTaskTitle(activeProjection.anchor.body);
			const taskClaims = activeProjection?.claims ?? [];
			const effectiveChannelRef = task?.channelRef ?? channelRef;
			const channelMemberIds = (0, react.useMemo)(() => new Set(channelView?.members.filter((item) => item.channelRef === effectiveChannelRef).map((item) => item.memberId) ?? []), [channelView, effectiveChannelRef]);
			const channelMembers = members.filter((status) => channelMemberIds.size === 0 || channelMemberIds.has(status.member.memberId));
			const mentionHandlesMap = (0, react.useMemo)(() => new Map(members.map((status) => [status.member.memberId, status.member.handle.replace(/^@/, "")])), [members]);
			const metadata = (0, react.useMemo)(() => readMeta(readFacts), [readFacts]);
			const unreadIndex = (0, react.useMemo)(() => {
				return mergeFacts(...activeProjection === void 0 ? [] : [[messageFact(activeProjection.anchor, activeProjection.anchorMentions)]], readFacts.map((fact) => fact.fact), currentFacts).findIndex((fact) => metadata.get(factKey(fact))?.unread === true);
			}, [
				activeProjection?.anchor,
				readFacts,
				currentFacts,
				metadata
			]);
			const memberName = (memberId) => {
				if (memberId === channelView?.humanMemberId) return humanName;
				const status = members.find((candidate) => candidate.member.memberId === memberId);
				return status === void 0 ? t("memberUnknown") : `@${status.member.handle}`;
			};
			const messageSender = (fact) => fact.kind === "message" ? fact.message.sender : void 0;
			const [pendingFiles, setPendingFiles] = (0, react.useState)([]);
			const openRef = (0, react.useCallback)((ref) => {
				if (ref.startsWith("channel:") && ref !== channelRef) {
					selectChannel(ref);
					return;
				}
				if (ref.startsWith("thread:") && ref !== threadRef) {
					jumpToThread(resolveThreadRefs, workspaceId, ref, selectThread);
					return;
				}
				if (ref.startsWith("task:") && ref !== taskRef) jumpToTaskThread(resolveTaskRefs, workspaceId, ref, selectThread);
			}, [
				channelRef,
				threadRef,
				taskRef,
				workspaceId,
				selectChannel,
				selectThread,
				resolveTaskRefs,
				resolveThreadRefs
			]);
			const lookupTaskRefs = (0, react.useMemo)(() => hostTaskRefLookup(resolveTaskRefs, workspaceId), [resolveTaskRefs, workspaceId]);
			const lookupThreadRefs = (0, react.useMemo)(() => hostThreadRefLookup(resolveThreadRefs, workspaceId), [resolveThreadRefs, workspaceId]);
			const rosterKey = (0, react.useMemo)(() => [
				(channelView?.channels ?? []).map((channel) => `${channel.channelRef}=${channel.name}=${channel.state}`).join(","),
				members.map((status) => `${status.member.memberId}=${status.member.handle}=${status.member.sessionId}=${status.availability}`).join(","),
				channelView?.humanMemberId ?? ""
			].join(";"), [channelView, members]);
			const channelNameOf = (0, react.useMemo)(() => {
				const channels = channelView?.channels ?? [];
				return (ref) => rosterChannelName(channels, ref);
			}, [rosterKey]);
			const memberOf = (0, react.useMemo)(() => {
				const humanMemberId = channelView?.humanMemberId;
				return (ref) => rosterMember(members, humanMemberId, humanName, ref);
			}, [rosterKey, humanName]);
			const renderFact = (fact, grouped = false) => {
				if (fact.kind === "message") {
					const sender = memberName(fact.message.sender);
					const senderStatus = members.find((candidate) => candidate.member.memberId === fact.message.sender);
					const human = fact.message.sender === channelView?.humanMemberId;
					return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamMessage, {
						senderName: sender,
						memberId: fact.message.sender,
						human,
						...human && humanAvatarUrl !== void 0 ? { avatarUrl: humanAvatarUrl } : {},
						body: fact.message.body,
						attachments: fact.message.attachments,
						loadAttachment: getAttachment,
						t,
						occurredAt: fact.message.occurredAt,
						mentionNames: stableMentionNames(fact.mentions, mentionHandlesMap, humanName),
						onOpenRef: openRef,
						onResolveTaskRefs: lookupTaskRefs,
						onResolveThreadRefs: lookupThreadRefs,
						channelNameOf,
						memberOf,
						onOpenMemberSession: openMemberSession,
						grouped,
						...senderStatus === void 0 ? {} : { senderTitle: senderStatus.member.description }
					}, factKey(fact));
				}
				return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
					className: thread_module_css_default.activityRow,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: thread_module_css_default.activityMark,
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: thread_module_css_default.activityText,
						children: formatActivity(fact.activity, {
							t,
							actorName: memberName,
							claims: taskClaims
						})
					})]
				}, factKey(fact));
			};
			/** One run = one same-sender reply turn; activities, the unread boundary, and day changes break runs. */
			const renderFactBlocks = (facts, boundaryIndex) => {
				const nodes = [];
				let run = [];
				let lastDay;
				const flushRun = () => {
					if (run.length > 0) nodes.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: conversation_module_css_default.messageRun,
						children: run.map((entry, entryIndex) => {
							const previous = entryIndex > 0 ? run[entryIndex - 1] : void 0;
							return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react.Fragment, { children: [entry.kind === "message" && isRunGap(previous?.kind === "message" ? previous.message.occurredAt : void 0, entry.message.occurredAt) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamRunDivider, { occurredAt: entry.message.occurredAt }), renderFact(entry, entryIndex > 0)] }, factKey(entry));
						})
					}, `run-${factKey(run[0])}`));
					run = [];
				};
				facts.forEach((fact, index) => {
					const occurredAt = fact.kind === "message" ? fact.message.occurredAt : void 0;
					if (occurredAt !== void 0) {
						const day = timelineDayKey(occurredAt);
						if (lastDay !== void 0 && day !== lastDay) {
							flushRun();
							nodes.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: thread_module_css_default.daySeparator,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: daySeparatorLabel(occurredAt) })
							}, `day-${index}`));
						}
						lastDay = day;
					}
					const sender = messageSender(fact);
					if (sender !== void 0 && run.length > 0 && sender === messageSender(run[run.length - 1])) {
						run.push(fact);
						return;
					}
					flushRun();
					if (boundaryIndex === index) nodes.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: thread_module_css_default.unreadBoundary,
						role: "separator",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("unreadBoundary") })
					}, `boundary-${index}`));
					if (sender !== void 0) run.push(fact);
					else nodes.push(/* @__PURE__ */ (0, react_jsx_runtime.jsx)(react.Fragment, { children: renderFact(fact) }, factKey(fact)));
				});
				flushRun();
				return nodes;
			};
			const refreshAfterFence = async () => {
				timeline.scrollToBottom();
				await readCurrent(true);
				await refreshSupplemental();
				await drainUnread();
			};
			const convertToTask = async () => {
				if (pending || thread === void 0 || task !== void 0) return;
				setPending(true);
				setMutating("promote");
				setError(void 0);
				const key = "promote";
				const requestId = mutationRequests.current.get(key) ?? mintRequestId();
				mutationRequests.current.set(key, requestId);
				try {
					const result = await promoteThread({
						requestId,
						workspaceId,
						threadRef,
						baseRevision: thread.revision
					});
					if (!result.ok) {
						setError(result.error.message);
						return;
					}
					if (result.value.kind === "committed") {
						mutationRequests.current.delete(key);
						const committed = result.value;
						setProjection((current) => current === void 0 ? current : {
							...current,
							task: committed.task,
							thread: committed.thread
						});
						setCurrentFacts((current) => {
							const merged = mergeFacts(current, [{
								kind: "activity",
								sequence: committed.activity.sequence,
								activity: committed.activity,
								occurredAt: committed.receipt.occurredAt
							}]);
							currentFactsRef.current = merged;
							return merged;
						});
						await readCurrent(true);
						await refreshSupplemental();
					} else if (result.value.kind === "unread_required") {
						setError(t("unreadRequired", { count: result.value.unreadCount }));
						mutationRequests.current.delete(key);
						await refreshAfterFence();
					} else {
						setError(t("staleRevision"));
						mutationRequests.current.delete(key);
						await refreshPassiveFacts();
					}
				} catch (cause) {
					setError(cause instanceof Error ? cause.message : String(cause));
				} finally {
					setPending(false);
					setMutating(void 0);
				}
			};
			const mutateTask = async (action) => {
				if (pending || task === void 0 || thread === void 0) return;
				setPending(true);
				if (action === "accept") setMutating("accept");
				setError(void 0);
				const key = `task:${action}`;
				const requestId = mutationRequests.current.get(key) ?? mintRequestId();
				mutationRequests.current.set(key, requestId);
				try {
					const result = await changeTask({
						requestId,
						workspaceId,
						taskRef: task.taskRef,
						action,
						baseRevision: thread.revision
					});
					if (!result.ok) {
						setError(result.error.message);
						return;
					}
					if (result.value.kind === "committed") {
						mutationRequests.current.delete(key);
						const committed = result.value;
						setProjection((current) => current === void 0 ? current : {
							...current,
							task: committed.task,
							thread: committed.thread,
							claims: committed.claims
						});
						setCurrentFacts((current) => {
							const merged = mergeFacts(current, [{
								kind: "activity",
								sequence: committed.activity.sequence,
								activity: committed.activity,
								occurredAt: committed.receipt.occurredAt
							}]);
							currentFactsRef.current = merged;
							return merged;
						});
						await readCurrent(true);
						await refreshSupplemental();
					} else if (result.value.kind === "unread_required") {
						setError(t("unreadRequired", { count: result.value.unreadCount }));
						mutationRequests.current.delete(key);
						await refreshAfterFence();
					} else {
						setError(t("staleRevision"));
						mutationRequests.current.delete(key);
						await refreshPassiveFacts();
					}
				} catch (cause) {
					setError(cause instanceof Error ? cause.message : String(cause));
				} finally {
					setPending(false);
					setMutating(void 0);
				}
			};
			const clearSendState = (0, react.useCallback)(() => {
				setConfirmation((current) => current === void 0 ? current : void 0);
				setReplyRequestId((current) => current === void 0 ? current : void 0);
				setStatusMessage((current) => current === void 0 ? current : void 0);
			}, []);
			const sendReply = async () => {
				const { draft, recipients } = drafts.getSnapshot(draftKey);
				if (pending || thread === void 0 || draft.trim() === "") return;
				const id = replyRequestId ?? mintRequestId();
				setReplyRequestId(id);
				setPending(true);
				setError(void 0);
				try {
					const upload = await uploadComposerFiles(putAttachment, workspaceId, pendingFiles);
					if (!upload.ok) {
						setError(upload.error);
						return;
					}
					const attachmentIds = upload.attachmentIds;
					const result = await reply({
						requestId: id,
						workspaceId,
						threadRef,
						...task === void 0 ? {} : { taskRef: task.taskRef },
						body: draft.trim(),
						baseRevision: thread.revision,
						recipients: [...recipients].sort(),
						...attachmentIds.length === 0 ? {} : { attachments: attachmentIds },
						...confirmation === void 0 ? {} : { confirmationToken: confirmation }
					});
					if (!result.ok) {
						setError(result.error.message);
						return;
					}
					if (result.value.kind === "committed") {
						const committed = result.value;
						const optimisticMentions = [...new Set([...recipients, ...mentionedMemberIds(draft, channelMembers)])].sort();
						setCurrentFacts((current) => {
							const merged = mergeFacts(current, [{
								kind: "message",
								sequence: committed.message.sequence,
								message: committed.message,
								mentions: optimisticMentions,
								occurredAt: committed.receipt.occurredAt
							}]);
							currentFactsRef.current = merged;
							return merged;
						});
						setProjection((current) => current === void 0 ? current : {
							...current,
							...committed.task === void 0 ? {} : { task: committed.task },
							thread: committed.thread
						});
						drafts.clear(draftKey);
						setPendingFiles([]);
						setReplyRequestId(void 0);
						setConfirmation(void 0);
						setStatusMessage(void 0);
						await refreshSupplemental();
					} else if (result.value.kind === "confirmation_required") {
						setConfirmation(result.value.confirmationToken);
						setStatusMessage(t("mentionConfirmation"));
					} else if (result.value.kind === "unread_required") {
						setError(t("unreadRequired", { count: result.value.unreadCount }));
						setConfirmation(void 0);
						setStatusMessage(void 0);
						setReplyRequestId(void 0);
						await refreshAfterFence();
					} else if (result.value.kind === "stale_revision") {
						setError(t("staleRevision"));
						setConfirmation(void 0);
						setStatusMessage(void 0);
						setReplyRequestId(void 0);
						await refreshPassiveFacts();
					} else {
						setError(t("memberNotFollowing", { ids: result.value.memberIds.map((memberId) => `@${members.find((candidate) => candidate.member.memberId === memberId)?.member.handle ?? memberId}`).join(", ") }));
						setConfirmation(void 0);
						setStatusMessage(void 0);
						setReplyRequestId(void 0);
					}
				} catch (cause) {
					setError(cause instanceof Error ? cause.message : String(cause));
				} finally {
					setPending(false);
				}
			};
			const currentFactsWithAnchor = mergeFacts(activeProjection === void 0 ? [] : [messageFact(activeProjection.anchor, activeProjection.anchorMentions)], currentFacts);
			const unreadBoundary = unreadIndex >= 0 ? unreadIndex : void 0;
			const risks = taskClaims.filter((claim) => claim.state === "active").flatMap((claim) => {
				const status = members.find((candidate) => candidate.member.memberId === claim.owner);
				if (status?.presence !== "error") return [];
				const risk = formatRiskClass(status, t);
				const detail = diagnosticText(status);
				return [{
					claim,
					status,
					...risk,
					reason: detail === "" ? t("statusError") : firstSentence(detail),
					full: detail === "" ? t("statusError") : detail
				}];
			});
			const backLabel = channelRef === void 0 ? t("backToWorkspace") : t("backToChannel");
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("main", {
				className: conversation_module_css_default.surface,
				"data-team-thread": threadRef,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: conversation_module_css_default.surfaceHeader,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: conversation_module_css_default.backRow,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									size: "sm",
									icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronLeftOutlineRegular, {}),
									onClick: backToWorkspace,
									children: backLabel
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("header", {
								className: conversation_module_css_default.headerRow,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: conversation_module_css_default.headerCopy,
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: thread_module_css_default.titleLine,
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h1", { children: task === void 0 ? t("threadLabel") : t("taskLabel", { number: resolvedTaskNumber ?? "…" }) }), task !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Pill, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamStateDot, {
												size: 8,
												state: taskStatusDot(task.status)
											}), formatTaskStatus(task.status, t)] })]
										}), taskTitle !== void 0 && taskTitle !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
											className: thread_module_css_default.taskTitle,
											title: taskTitle,
											children: taskTitle
										})]
									}),
									task === void 0 && thread !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: conversation_module_css_default.headerActions,
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
											size: "sm",
											variant: "primary",
											disabled: pending,
											onClick: () => {
												convertToTask();
											},
											children: mutating === "promote" ? t("promotingTask") : t("promoteToTask")
										})
									}),
									task !== void 0 && thread !== void 0 && task.resolution !== "closed" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: conversation_module_css_default.headerActions,
										children: [(() => {
											const activeClaims = projection?.claims.filter((claim) => claim.taskRef === task.taskRef && claim.state === "active") ?? [];
											const earlyAccept = task.resolution === "open" && task.status === "in_progress" && activeClaims.length > 0;
											if (!(task.status === "in_review" || task.status === "todo" || earlyAccept) || task.resolution !== "open") return null;
											return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
												size: "sm",
												variant: "primary",
												disabled: pending,
												onClick: () => {
													if (earlyAccept) setConfirmingAccept(true);
													else mutateTask("accept");
												},
												children: t("acceptTask")
											});
										})(), task.resolution === "open" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
											size: "sm",
											variant: "outline",
											disabled: pending,
											onClick: () => {
												mutateTask("close");
											},
											children: t("closeTask")
										}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
											size: "sm",
											variant: "primary",
											disabled: pending,
											onClick: () => {
												mutateTask("reopen");
											},
											children: t("reopenTask")
										})]
									})
								]
							}),
							risks.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
								className: thread_module_css_default.riskSection,
								"aria-label": t("runtimeRisk"),
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", { children: t("runtimeRisk") }), risks.map(({ claim, status, label, sentenceKey, reason, full }) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
									className: thread_module_css_default.riskRow,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamPresenceDot, {
										status,
										t
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
										title: full,
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", {
												className: thread_module_css_default.riskClass,
												children: label
											}),
											" · ",
											t(sentenceKey, { member: status.member.handle }),
											" — ",
											reason
										]
									})]
								}, claim.claimRef))]
							}),
							task !== void 0 && thread !== void 0 && (() => {
								const activeClaims = projection?.claims.filter((claim) => claim.taskRef === task.taskRef && claim.state === "active") ?? [];
								return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
									open: confirmingAccept,
									onClose: () => {
										if (!pending) setConfirmingAccept(false);
									},
									title: t("acceptEarlyTitle"),
									closeLabel: t("cancel"),
									footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										variant: "outline",
										disabled: pending,
										onClick: () => {
											setConfirmingAccept(false);
										},
										children: t("cancel")
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										variant: "primary",
										disabled: pending,
										onClick: () => {
											mutateTask("accept");
										},
										children: mutating === "accept" ? t("acceptingTask") : t("acceptTask")
									})] }),
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
										className: conversation_module_css_default.confirmBody,
										children: t("acceptEarlyBody", { count: activeClaims.length })
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
										className: conversation_module_css_default.confirmList,
										children: activeClaims.map((claim) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", { children: [
											memberName(claim.owner),
											" · ",
											claim.direction
										] }, claim.claimRef))
									})]
								});
							})(),
							task !== void 0 && thread !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("section", {
								className: thread_module_css_default.workSection,
								"aria-label": t("claims"),
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.DisclosureRow, {
									expandOnRowClick: true,
									expandable: true,
									open: claimsOpen,
									onToggle: () => {
										setClaimsOpen((current) => !current);
									},
									icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChecklistOutlineRegular, { size: 14 }),
									title: `${t("claims")} · ${taskClaims.length}`,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: thread_module_css_default.claimList,
										children: [taskClaims.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
											className: thread_module_css_default.emptyClaims,
											children: t("noClaims")
										}), taskClaims.map((claim) => {
											const ownerStatus = members.find((status) => status.member.memberId === claim.owner);
											return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("article", {
												className: `${thread_module_css_default.claimRow}${claim.state === "done" ? ` ${thread_module_css_default.claimRowDone}` : ""}`,
												children: [
													ownerStatus === void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamPresenceDot, {
														status: ownerStatus,
														t
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", {
														className: thread_module_css_default.claimOwner,
														title: memberName(claim.owner),
														children: memberName(claim.owner)
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
														className: thread_module_css_default.claimDirection,
														children: claim.direction
													}),
													/* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", {
														className: thread_module_css_default.claimState,
														children: formatClaimState(claim.state, t)
													})
												]
											}, claim.claimRef);
										})]
									})
								})
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("section", {
						ref: timeline.ref,
						onScroll: handleTimelineScroll,
						className: conversation_module_css_default.timeline,
						"aria-label": t("timelineLabel"),
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: conversation_module_css_default.timelineContent,
							children: [
								loading && projection === void 0 && error === void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: conversation_module_css_default.emptySurface,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
										className: conversation_module_css_default.loadingState,
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: conversation_module_css_default.loadingMark,
											"aria-hidden": "true"
										}), t("loadingThread")]
									})
								}),
								projection === void 0 && error !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: conversation_module_css_default.errorState,
									role: "alert",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: error }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										size: "sm",
										variant: "outline",
										onClick: () => {
											readCurrent();
										},
										children: t("retry")
									})]
								}),
								olderFacts.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
									className: thread_module_css_default.historySection,
									"aria-label": t("olderHistory"),
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", { children: t("olderHistory") }), renderFactBlocks(olderFacts, void 0)]
								}),
								historyHasMore && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: conversation_module_css_default.timelineAction,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										size: "sm",
										onClick: () => {
											loadOlder();
										},
										children: t("loadOlder")
									})
								}),
								currentFactsWithAnchor.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("section", {
									className: thread_module_css_default.publicSection,
									children: renderFactBlocks(currentFactsWithAnchor, unreadBoundary)
								}),
								autoReadExhausted && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: conversation_module_css_default.timelineAction,
									role: "alert",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("autoReadIncomplete") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										size: "sm",
										onClick: () => {
											setAutoReadExhausted(false);
											drainUnread();
										},
										disabled: loading,
										children: t("retry")
									})]
								}),
								newFactsCount > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: thread_module_css_default.newUpdates,
									role: "status",
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										type: "button",
										className: thread_module_css_default.newUpdatesJump,
										onClick: () => {
											setNewFactsCount(0);
											timeline.scrollToBottom();
										},
										children: t("newUpdatesJump", { count: newFactsCount })
									})
								})
							]
						})
					}),
					projection !== void 0 && thread !== void 0 ? task?.resolution === "closed" ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: thread_module_css_default.closedBar,
						"data-team-closed": true,
						children: [error !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: conversation_module_css_default.error,
							role: "alert",
							children: error
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: thread_module_css_default.closedNotice,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("taskClosedNotice") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								size: "sm",
								variant: "outline",
								disabled: pending,
								onClick: () => {
									mutateTask("reopen");
								},
								children: t("reopenTask")
							})]
						})]
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamComposer, {
						members: channelMembers,
						followerMemberIds: followerIds,
						drafts,
						draftKey,
						pending,
						...statusMessage === void 0 ? {} : { confirmation: statusMessage },
						...error === void 0 ? {} : { error },
						onEdit: clearSendState,
						onSubmit: () => {
							sendReply();
						},
						placeholder: t("replyPlaceholder"),
						pendingFiles,
						onFilesChange: setPendingFiles,
						t
					}, draftKey) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {})
				]
			});
		}
		//#endregion
		//#region src/client/TeamConversation.tsx
		function TeamConversation({ t, useWorkspaces, navigation, drafts, humanIdentity, putAttachment, getAttachment, loadChannels, readThread, loadThreadHistory, threadObservations, subscribeChanges, loadMembers, loadInbox, sendMessage, joinChannel, removeChannelMember, reply, changeTask, promoteThread, selectThread, selectChannel, selectWorkspace, backToWorkspace, backToChannels, resolveTaskRefs, resolveThreadRefs, openMemberSession }) {
			const navigationState = (0, react.useSyncExternalStore)(navigation.subscribe, navigation.getSnapshot, navigation.getSnapshot);
			const identity = useHumanIdentity(humanIdentity);
			const humanName = identity.name ?? t("human");
			const current = useWorkspaces((state) => state.items).find((workspace) => workspace.workspaceId === navigationState.workspaceId);
			if (navigationState.inbox === true) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamInboxPage, {
				useWorkspaces,
				loadInbox,
				subscribeChanges,
				selectWorkspace,
				selectThread,
				humanName,
				...identity.avatarUrl === void 0 ? {} : { humanAvatarUrl: identity.avatarUrl },
				t
			}, "inbox");
			if (current !== void 0 && navigationState.threadRef !== void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamThreadPage, {
				humanName,
				...identity.avatarUrl === void 0 ? {} : { humanAvatarUrl: identity.avatarUrl },
				workspaceId: current.workspaceId,
				putAttachment,
				threadRef: navigationState.threadRef,
				backToWorkspace,
				selectChannel,
				selectThread,
				resolveTaskRefs,
				resolveThreadRefs,
				openMemberSession,
				...navigationState.channelRef === void 0 ? {} : { channelRef: navigationState.channelRef },
				...navigationState.taskRef === void 0 ? {} : { taskRef: navigationState.taskRef },
				...navigationState.taskNumber === void 0 ? {} : { taskNumber: navigationState.taskNumber },
				drafts,
				getAttachment,
				readThread,
				loadChannels,
				loadThreadHistory,
				threadObservations,
				subscribeChanges,
				loadMembers,
				reply,
				changeTask,
				promoteThread,
				t
			}, navigationState.threadRef);
			if (current !== void 0 && navigationState.channelRef !== void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamChannelPage, {
				humanName,
				...identity.avatarUrl === void 0 ? {} : { humanAvatarUrl: identity.avatarUrl },
				workspaceId: current.workspaceId,
				channelRef: navigationState.channelRef,
				drafts,
				putAttachment,
				getAttachment,
				loadChannels,
				subscribeChanges,
				loadMembers,
				loadInbox,
				sendMessage,
				joinChannel,
				removeChannelMember,
				selectThread,
				selectChannel,
				backToChannels,
				resolveTaskRefs,
				resolveThreadRefs,
				openMemberSession,
				t
			}, navigationState.channelRef);
			const welcome = current === void 0 ? {
				eyebrow: t("teamMode"),
				title: t("team"),
				body: t("empty")
			} : {
				eyebrow: current.title,
				title: t("channels"),
				body: t("selectChannelHint")
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("main", {
				className: conversation_module_css_default.welcomeSurface,
				"data-team-conversation": true,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: conversation_module_css_default.welcome,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: conversation_module_css_default.welcomeEyebrow,
							children: welcome.eyebrow
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h1", { children: welcome.title }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: welcome.body })
					]
				})
			});
		}
		//#endregion
		//#region src/client/TeamWorkspaceSelector.tsx
		/**
		* The single-line Workspace selector that scopes the Team sidebar.
		*
		* The sections below it — Channels and Agents — belong to exactly one
		* Workspace, so a flat list of every Workspace above them states a global
		* scope over local content. Collapsing that list into one selector makes the
		* sidebar read as "you are in X, and here is X's content", and returns the
		* rows a low-frequency switch was holding. Nothing is hidden by the collapse:
		* Workspace rows carry no unread mark of their own, and cross-Workspace unread
		* is summarized by the Inbox entry above — the one destination that outlives
		* this scope, which is why it stays outside the selector's reach.
		*
		* The trigger is a field rather than a row: the line that states where the
		* reader is must not read as the first entry of the Channels list below it,
		* and its accessible name states the Workspace it is showing, because that
		* value is otherwise unavailable to a reader who cannot see the field. The
		* menu is the only way to switch Workspaces, so it takes focus on open and
		* hands it back to the trigger on Escape.
		*/
		function TeamWorkspaceSelector({ workspaces, selectedId, current, onSelect, t }) {
			const [open, setOpen] = (0, react.useState)(false);
			(0, react.useEffect)(() => {
				if (!open) return;
				const frame = requestAnimationFrame(() => {
					const lists = document.querySelectorAll("body > [role=\"menu\"]");
					const list = lists[lists.length - 1];
					if (list === void 0 || list.contains(document.activeElement)) return;
					list.querySelector("button:not(:disabled)")?.focus();
				});
				return () => {
					cancelAnimationFrame(frame);
				};
			}, [open]);
			const selected = workspaces.find((workspace) => workspace.workspaceId === selectedId);
			if (selected === void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
				className: sidebar_module_css_default.emptyState,
				children: t("empty")
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Menu, {
				open,
				portal: true,
				autoFocus: true,
				items: workspaces.map((workspace) => ({
					id: workspace.workspaceId,
					label: workspace.title
				})),
				selectedIds: [selected.workspaceId],
				onSelect: (id) => {
					setOpen(false);
					onSelect(id);
				},
				onClose: () => {
					setOpen(false);
				},
				anchor: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
					type: "button",
					className: sidebar_module_css_default.workspaceTrigger,
					"data-team-workspace-trigger": true,
					"aria-label": t("workspaceSelectorWithValue", { title: selected.title }),
					"aria-haspopup": "menu",
					"aria-expanded": open,
					"aria-current": current ? "page" : void 0,
					title: `${selected.title} · ${selected.path}`,
					onClick: () => {
						setOpen((value) => !value);
					},
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: sidebar_module_css_default.workspaceIcon,
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconFolderOpenRegular, { size: 16 })
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: sidebar_module_css_default.workspaceValue,
							children: selected.title
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: `${sidebar_module_css_default.workspaceChevron} ${open ? sidebar_module_css_default.workspaceChevronOpen : ""}`,
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular, {})
						})
					]
				})
			});
		}
		//#endregion
		//#region src/client/sidebar-drag.tsx
		/**
		* Native whole-row drag for the Team sidebar lists. Unlike the Harness
		* workspace list there is no document-level acceptance here: hovering another
		* row shows the before/after insertion marker and releasing on a row commits
		* exactly once per gesture, while a release outside any row — including over
		* the other sidebar list, whose panel never responds — just cancels without
		* committing.
		*/
		/**
		* One drag gesture per panel instance. `onCommit` receives the moved ref,
		* the drop target and the insertion side exactly once per completed gesture;
		* releases outside the list never reach it.
		*/
		function useSidebarRowDrag({ refs, onCommit }) {
			const [state, setState] = (0, react.useState)(null);
			const committed = (0, react.useRef)(false);
			const half = (event) => {
				const rect = event.currentTarget.getBoundingClientRect();
				return event.clientY - rect.top < rect.height / 2 ? "before" : "after";
			};
			return { rowProps: (orderKey) => ({
				draggable: true,
				className: state === null ? void 0 : state.active === orderKey ? sidebar_module_css_default.sidebarRowDragging : state.over === orderKey ? state.marker === "before" ? sidebar_module_css_default.sidebarRowDropBefore : sidebar_module_css_default.sidebarRowDropAfter : void 0,
				onDragStart: (event) => {
					if (event.dataTransfer === null) return;
					event.dataTransfer.effectAllowed = "move";
					event.dataTransfer.setData("text/plain", orderKey);
					committed.current = false;
					setState({
						active: orderKey,
						over: orderKey,
						marker: "after"
					});
				},
				onDragEnd: () => {
					setState(null);
				},
				onDragOver: (event) => {
					if (state === null || !refs.includes(orderKey)) return;
					event.preventDefault();
					if (event.dataTransfer !== null) event.dataTransfer.dropEffect = "move";
					const marker = half(event);
					if (state.over !== orderKey || state.marker !== marker) setState({
						...state,
						over: orderKey,
						marker
					});
				},
				onDrop: (event) => {
					if (state === null || !refs.includes(orderKey)) return;
					event.preventDefault();
					if (committed.current) return;
					committed.current = true;
					onCommit(state.active, orderKey, half(event));
				}
			}) };
		}
		/**
		* Transparent wrapper that owns the drop-marker styling for one draggable
		* sidebar row. It adds no layout of its own; the styled row stays inside so
		* hover/focus descendant selectors keep working.
		*/
		function SortableRow({ drag, orderKey, children }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				...drag.rowProps(orderKey),
				children
			});
		}
		//#endregion
		//#region src/client/sidebar-order.ts
		/**
		* Human presentation preference for the Team sidebar: the row order of the
		* Channels and Agents lists. The order lives in this browser only — it is UI
		* taste, never a shared Team fact, so nothing here touches the ledger.
		*
		* One deep module owns the whole concern: storage, reconcile against the
		* current Remote order (drop removed refs, keep the user's relative order,
		* append newcomers in default order), the single `moveSidebarItem` mutation
		* behind whole-row drag, and a small subscription hook with snapshot-stable
		* results for `useSyncExternalStore`.
		*/
		const STORAGE_KEY$1 = "dsh.agent-team.sidebar-order";
		function listKey(workspaceId, kind) {
			return workspaceId === void 0 ? void 0 : `${workspaceId}|${kind}`;
		}
		const MEMORY_ONLY$1 = Symbol("sidebar-order.memory");
		/**
		* Read-through parse cache over the raw persisted payload: repeated snapshots
		* skip re-validating an unchanged payload, while anything written outside this
		* module — another tab, devtools, a cleared store — is picked up because the
		* raw comparison misses.
		*/
		let cachedRaw$1;
		let cachedOrders = {};
		/**
		* Parse persisted orders defensively: private mode, quota errors, and stale
		* or corrupted payloads all degrade to "no preference" instead of breaking
		* the sidebar.
		*/
		function storedOrders() {
			let raw = null;
			try {
				raw = typeof localStorage === "undefined" ? null : localStorage.getItem(STORAGE_KEY$1);
			} catch {
				raw = null;
			}
			if (cachedRaw$1 !== void 0 && raw !== null && raw === cachedRaw$1) return cachedOrders;
			if (raw === null) {
				if (cachedRaw$1 === MEMORY_ONLY$1) return cachedOrders;
				cachedRaw$1 = raw;
				cachedOrders = {};
				return cachedOrders;
			}
			try {
				const parsed = JSON.parse(raw);
				if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("not an object");
				const clean = {};
				for (const [key, value] of Object.entries(parsed)) {
					if (!Array.isArray(value) || !value.every((entry) => typeof entry === "string")) continue;
					clean[key] = value;
				}
				cachedRaw$1 = raw;
				cachedOrders = clean;
				return cachedOrders;
			} catch {
				return {};
			}
		}
		function saveOrder(key, refs) {
			const next = {
				...structuredClone(storedOrders()),
				[key]: refs
			};
			cachedOrders = next;
			try {
				if (typeof localStorage !== "undefined") {
					const raw = JSON.stringify(next);
					localStorage.setItem(STORAGE_KEY$1, raw);
					cachedRaw$1 = raw;
					return;
				}
			} catch {}
			cachedRaw$1 = MEMORY_ONLY$1;
		}
		/**
		* Merge the saved personal order into the current Remote order: kept refs
		* stay in the user's relative order with duplicates collapsed, removed refs
		* disappear, and new refs join in their Remote default positions after the
		* known ones.
		*/
		function reconcileSidebarOrder(saved, current) {
			const present = new Set(current);
			const seen = /* @__PURE__ */ new Set();
			const merged = [];
			for (const ref of saved) {
				if (seen.has(ref) || !present.has(ref)) continue;
				seen.add(ref);
				merged.push(ref);
			}
			for (const ref of current) {
				if (seen.has(ref)) continue;
				seen.add(ref);
				merged.push(ref);
			}
			return merged;
		}
		let revision = 0;
		const listeners$1 = /* @__PURE__ */ new Set();
		const snapshots = /* @__PURE__ */ new Map();
		function savedFingerprint(key) {
			const saved = storedOrders()[key];
			return saved === void 0 ? "" : `f${saved.length}:${saved.join(",")}`;
		}
		function emitChange() {
			revision += 1;
			for (const listener of listeners$1) listener();
		}
		function orderedSnapshot(workspaceId, kind, refs) {
			const key = listKey(workspaceId, kind);
			if (key === void 0) return refs;
			const signature = refs.join("\0");
			const fingerprint = savedFingerprint(key);
			const hit = snapshots.get(key);
			if (hit !== void 0 && hit.atRevision === revision && hit.signature === signature && hit.savedFingerprint === fingerprint) return hit.result;
			const result = reconcileSidebarOrder(storedOrders()[key] ?? [], refs);
			snapshots.set(key, {
				atRevision: revision,
				signature,
				savedFingerprint: fingerprint,
				result
			});
			return result;
		}
		/**
		* Effective row order for one sidebar list: the user's saved order folded
		* into the given Remote default order. Identity-stable across renders while
		* neither the data nor this browser's preference changes.
		*/
		function useSidebarOrder(workspaceId, kind, refs) {
			return (0, react.useSyncExternalStore)((0, react.useCallback)((listener) => {
				listeners$1.add(listener);
				return () => {
					listeners$1.delete(listener);
				};
			}, []), () => orderedSnapshot(workspaceId, kind, refs), () => orderedSnapshot(workspaceId, kind, refs));
		}
		/**
		* The only mutation path: move `movedRef` to the given side of `targetRef`
		* inside the list's current effective order. Returns the new order, or
		* `undefined` when the request cannot change anything (unknown refs, dropping
		* a row onto itself, or an adjacent marker that would put it right back).
		* Persistence and subscriber notification happen here.
		*/
		function moveSidebarItem(workspaceId, kind, refs, movedRef, targetRef, marker) {
			const key = listKey(workspaceId, kind);
			const from = refs.indexOf(movedRef);
			const nextFromTarget = refs.indexOf(targetRef);
			if (key === void 0 || from < 0 || nextFromTarget < 0 || movedRef === targetRef) return void 0;
			const next = [...refs];
			const [item] = next.splice(from, 1);
			if (item === void 0) return void 0;
			const insertAt = next.indexOf(targetRef) + (marker === "after" ? 1 : 0);
			if (insertAt === from) return void 0;
			next.splice(insertAt, 0, item);
			saveOrder(key, next);
			snapshots.delete(key);
			emitChange();
			return next;
		}
		//#endregion
		//#region src/client/sidebar-sections.ts
		/**
		* Human presentation preference for the Team sidebar: whether each disclosure
		* section (workspaces / channels / agents) is expanded. The state lives in
		* this browser only — it is UI taste, never a shared Team fact, so nothing
		* here touches the ledger. Same storage discipline as `sidebar-order.ts`: one
		* localStorage key, defensive parsing, a read-through cache over the raw
		* payload so writes from other tabs are picked up, and an in-memory fallback
		* when storage is unavailable.
		*/
		const STORAGE_KEY = "dsh.agent-team.sidebar-sections";
		function sectionKey(workspaceId, kind) {
			return workspaceId === void 0 ? void 0 : `${workspaceId}|${kind}`;
		}
		const MEMORY_ONLY = Symbol("sidebar-sections.memory");
		/** Read-through parse cache over the raw persisted payload; see `sidebar-order.ts`. */
		let cachedRaw;
		let cachedCollapsed = /* @__PURE__ */ new Set();
		function storedCollapsed() {
			let raw = null;
			try {
				raw = typeof localStorage === "undefined" ? null : localStorage.getItem(STORAGE_KEY);
			} catch {
				raw = null;
			}
			if (cachedRaw !== void 0 && raw !== null && raw === cachedRaw) return cachedCollapsed;
			if (raw === null) {
				if (cachedRaw === MEMORY_ONLY) return cachedCollapsed;
				cachedRaw = raw;
				cachedCollapsed = /* @__PURE__ */ new Set();
				return cachedCollapsed;
			}
			try {
				const parsed = JSON.parse(raw);
				if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("not an object");
				const keys = parsed.collapsed;
				if (!Array.isArray(keys) || !keys.every((key) => typeof key === "string")) throw new Error("bad shape");
				cachedRaw = raw;
				cachedCollapsed = new Set(keys);
				return cachedCollapsed;
			} catch {
				return /* @__PURE__ */ new Set();
			}
		}
		function writeCollapsed(collapsed) {
			cachedCollapsed = collapsed;
			try {
				if (typeof localStorage === "undefined") throw new Error("no localStorage");
				const raw = JSON.stringify({ collapsed: [...collapsed] });
				localStorage.setItem(STORAGE_KEY, raw);
				cachedRaw = raw;
				return;
			} catch {
				cachedRaw = MEMORY_ONLY;
			}
		}
		const listeners = /* @__PURE__ */ new Set();
		/**
		* Effective expanded state for one sidebar section: `false` only when this
		* browser explicitly collapsed it. Booleans are primitives, so the snapshot
		* is naturally identity-stable for `useSyncExternalStore`.
		*/
		function useSidebarSectionOpen(workspaceId, kind) {
			const key = sectionKey(workspaceId, kind);
			return (0, react.useSyncExternalStore)((0, react.useCallback)((listener) => {
				listeners.add(listener);
				return () => {
					listeners.delete(listener);
				};
			}, []), () => key === void 0 ? true : !storedCollapsed().has(key), () => key === void 0 ? true : !storedCollapsed().has(key));
		}
		/**
		* The only mutation path: record one section's expanded state for this
		* browser. Unknown keys (missing workspace) no-op so an unloaded workspace
		* never persists a phantom preference.
		*/
		function setSidebarSectionOpen(workspaceId, kind, open) {
			const key = sectionKey(workspaceId, kind);
			if (key === void 0) return;
			const next = new Set(storedCollapsed());
			if (open) next.delete(key);
			else next.add(key);
			writeCollapsed(next);
			for (const listener of listeners) listener();
		}
		//#endregion
		//#region src/client/TeamRowMenu.tsx
		/**
		* Row-level overflow menu shared by sidebar Channel and Agent rows, mirroring
		* the harness session-row pattern: a portal list anchored to a bare ellipsis
		* icon button, with the owning row pinned to its hover fill while open.
		*/
		function TeamRowMenu({ label, items, onSelect, onOpenChange }) {
			const [open, setOpen] = (0, react.useState)(false);
			const toggle = () => {
				setOpen((current) => {
					onOpenChange?.(!current);
					return !current;
				});
			};
			const close = () => {
				setOpen(false);
				onOpenChange?.(false);
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Menu, {
				open,
				onClose: close,
				items,
				onSelect: (id) => {
					close();
					onSelect(id);
				},
				portal: true,
				closeOnPointerLeave: true,
				anchor: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					className: sidebar_module_css_default.rowMenuButton,
					"aria-label": label,
					"aria-haspopup": "menu",
					"aria-expanded": open,
					onClick: (event) => {
						event.stopPropagation();
						toggle();
					},
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconEllipsisOutlineRegular, {})
				})
			});
		}
		//#endregion
		//#region src/client/TeamSidebarSection.tsx
		/** Collapsible sidebar section header: disclosure toggle plus trailing actions. */
		function TeamSidebarSection({ title, actions, open, onToggle, children }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: sidebar_module_css_default.section,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: sidebar_module_css_default.sectionHeader,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
						type: "button",
						className: sidebar_module_css_default.sectionToggle,
						"aria-expanded": open,
						onClick: () => {
							onToggle(!open);
						},
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular, { className: sidebar_module_css_default.sectionChevron }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: sidebar_module_css_default.sectionTitle,
							children: title
						})]
					}), actions !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: sidebar_module_css_default.sectionActions,
						children: actions
					})]
				}), open && children]
			});
		}
		//#endregion
		//#region src/client/team-dialog-save.ts
		/**
		* Shared edit-dialog save lifecycle: one in-flight durable update, the dialog
		* held disabled while it runs, a refusal reported in place, and a close only
		* after the parent has re-read the committed state. Callers keep their own
		* payload and request reuse, and hold `pendingRequest` so that editing a field
		* drops a request the Host may already have committed.
		*/
		function useEditDialogSave({ save, onCommitted, onClose }) {
			const [saving, setSaving] = (0, react.useState)(false);
			const [error, setError] = (0, react.useState)();
			const pendingRequest = (0, react.useRef)();
			const submit = async (request) => {
				pendingRequest.current = request;
				setSaving(true);
				setError(void 0);
				try {
					const result = await save(request);
					if (result.ok) {
						pendingRequest.current = void 0;
						await onCommitted();
						onClose();
					} else setError(result.error.message);
				} catch (cause) {
					setError(cause instanceof Error ? cause.message : String(cause));
				} finally {
					setSaving(false);
				}
			};
			return {
				saving,
				error,
				pendingRequest,
				save: submit
			};
		}
		//#endregion
		//#region \0dsh-css:C:\Sophia\科研\AI科研助手开发\dsh-research-team\packages\client-agent-team\src\client\create.module.css.mjs
		const css = ".DJ5_dq_form{gap:16px;display:grid}.DJ5_dq_modeSwitch{margin-bottom:16px}.DJ5_dq_field{color:var(--dsw-alias-label-secondary);gap:6px;font-size:12px;line-height:18px;display:grid}.DJ5_dq_input{box-sizing:border-box;width:100%}.DJ5_dq_menuCap{max-height:min(320px,56vh)}.DJ5_dq_selectTrigger{background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-sm,8px);box-sizing:border-box;color:var(--dsw-alias-label-primary);cursor:pointer;text-align:left;justify-content:space-between;align-items:center;gap:8px;min-height:32px;padding:4px 10px;font-size:14px;line-height:22px;display:flex}.DJ5_dq_selectTrigger:disabled{cursor:default;opacity:.6}.DJ5_dq_selectTrigger:focus-visible{border-color:var(--dsw-alias-brand-primary);outline:none}.DJ5_dq_selectValue{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.DJ5_dq_chevron{color:var(--dsw-alias-label-tertiary);flex:none;transition:transform .12s;display:inline-flex}.DJ5_dq_chevronOpen{transform:rotate(180deg)}.DJ5_dq_memberPicker{border:0;gap:4px;max-height:220px;margin:0;padding:0;display:grid;overflow-y:auto}.DJ5_dq_memberPicker legend{color:var(--dsw-alias-label-secondary);padding:0 0 6px;font-size:12px;line-height:18px}.DJ5_dq_memberOption{border-radius:var(--dsw-radius-sm,6px);color:var(--dsw-alias-label-primary);grid-template-columns:auto 14px minmax(0,1fr);align-items:center;gap:0 7px;min-height:32px;padding:3px 6px;display:grid}.DJ5_dq_memberOption:hover{background:var(--dsw-alias-interactive-bg-hover)}.DJ5_dq_memberOption input{margin:0}.DJ5_dq_memberOption small{color:var(--dsw-alias-label-tertiary);grid-column:3;font-size:10px;line-height:14px}.DJ5_dq_unavailableDot{background:var(--dsw-alias-label-tertiary);corner-shape:round;border-radius:50%;justify-self:center;width:7px;height:7px;display:inline-block}.DJ5_dq_error{color:var(--dsw-alias-state-error-primary);margin:0;font-size:12px;line-height:18px}.DJ5_dq_notice{color:var(--dsw-alias-label-secondary);margin:0;font-size:12px;line-height:18px}.DJ5_dq_state{color:var(--dsw-alias-label-tertiary);margin:0;font-size:12px;line-height:18px}.DJ5_dq_roster{gap:2px;display:grid}.DJ5_dq_failure{justify-items:start;gap:8px;display:grid}.DJ5_dq_dialogContent{max-height:min(70vh,560px);overflow-y:auto}@media (width<=600px){.DJ5_dq_dialogContent{max-height:calc(100vh - 180px)}.DJ5_dq_memberPicker{max-height:180px}}";
		const tagId = "@sophialin/dsh-research-team/create.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@sophialin/dsh-research-team";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var create_module_css_default = {
			"chevron": "DJ5_dq_chevron",
			"chevronOpen": "DJ5_dq_chevronOpen",
			"dialogContent": "DJ5_dq_dialogContent",
			"error": "DJ5_dq_error",
			"failure": "DJ5_dq_failure",
			"field": "DJ5_dq_field",
			"form": "DJ5_dq_form",
			"input": "DJ5_dq_input",
			"memberOption": "DJ5_dq_memberOption",
			"memberPicker": "DJ5_dq_memberPicker",
			"menuCap": "DJ5_dq_menuCap",
			"modeSwitch": "DJ5_dq_modeSwitch",
			"notice": "DJ5_dq_notice",
			"roster": "DJ5_dq_roster",
			"selectTrigger": "DJ5_dq_selectTrigger",
			"selectValue": "DJ5_dq_selectValue",
			"state": "DJ5_dq_state",
			"unavailableDot": "DJ5_dq_unavailableDot"
		};
		//#endregion
		//#region src/client/TeamMemberEditor.tsx
		/** Model option key inside one editor; opaque and resolved against the loaded groups. */
		function modelKey(provider, model) {
			return `${provider}\u0000${model}`;
		}
		const modelCatalogCaches = /* @__PURE__ */ new WeakMap();
		function peekCatalogGroups(loadModels) {
			return modelCatalogCaches.get(loadModels)?.value?.groups;
		}
		function sharedCatalog(loadModels) {
			const cached = modelCatalogCaches.get(loadModels);
			if (cached?.inflight !== void 0) return cached.inflight;
			const next = loadModels();
			const entry = cached ?? {};
			entry.inflight = next;
			modelCatalogCaches.set(loadModels, entry);
			const forget = (result) => {
				if (modelCatalogCaches.get(loadModels) === entry && entry.inflight === next) {
					delete entry.inflight;
					if (result !== void 0 && result.ok) entry.value = result.value;
				}
			};
			next.then((result) => {
				forget(result);
			}, () => {
				forget(void 0);
			});
			return next;
		}
		/**
		* Best-effort warm of the shared catalog (the agents panel calls this while
		* the roster loads, so the pickers open with rows instead of paying the
		* first read on open). Failures belong to the picker's own error surface.
		*/
		function warmModelCatalog(loadModels) {
			try {
				sharedCatalog(loadModels).catch(() => {});
			} catch {}
		}
		/**
		* Shared provider/model dropdown for the create and edit forms. The option
		* list rides the shared Menu primitive (one leading "follow Host default"
		* row, then non-selectable provider headings) with a capped, internally
		* scrolling card so growing model catalogs cannot stretch the dialog. Mounts
		* open with the warmed value when one exists and revalidate behind it, so a
		* slow Host read delays a refresh — never the picker itself; a refused or
		* failed read with no warmed value renders a retryable error instead of
		* stranding the field on "loading".
		*/
		function ModelPickerField({ model, onModelChange, loadModels, disabled, t }) {
			const [groups, setGroups] = (0, react.useState)(() => peekCatalogGroups(loadModels));
			const [modelsError, setModelsError] = (0, react.useState)();
			const [reloadToken, setReloadToken] = (0, react.useState)(0);
			const [open, setModelOpen] = (0, react.useState)(false);
			const [effortOpen, setEffortOpen] = (0, react.useState)(false);
			(0, react.useEffect)(() => {
				let mounted = true;
				let pending;
				try {
					pending = sharedCatalog(loadModels);
				} catch (error) {
					setModelsError(error instanceof Error ? error.message : String(error));
					return;
				}
				pending.then((result) => {
					if (!mounted) return;
					if (result.ok) {
						setGroups(result.value.groups);
						setModelsError(void 0);
					} else setModelsError(result.error.message);
				}, (error) => {
					if (!mounted) return;
					setModelsError(error instanceof Error ? error.message : String(error));
				});
				return () => {
					mounted = false;
				};
			}, [loadModels, reloadToken]);
			const items = [{
				id: "",
				label: t("modelFollowDefault")
			}];
			const byKey = /* @__PURE__ */ new Map();
			for (const group of groups ?? []) {
				items.push({
					type: "label",
					id: `model-group:${group.id}`,
					text: group.name
				});
				for (const entry of group.models) {
					const key = modelKey(group.id, entry.id);
					byKey.set(key, {
						provider: group.id,
						id: entry.id,
						name: entry.name,
						efforts: entry.reasoning?.efforts ?? []
					});
					items.push({
						id: key,
						label: entry.name
					});
				}
			}
			const selectedModelKey = model === void 0 ? "" : modelKey(model.provider, model.model);
			const triggerLabel = model === void 0 ? t("modelFollowDefault") : byKey.get(selectedModelKey)?.name ?? `${model.provider} / ${model.model}`;
			const efforts = model === void 0 ? [] : byKey.get(selectedModelKey)?.efforts ?? [];
			const effortItems = [{
				id: "",
				label: t("effortFollowDefault")
			}, ...efforts.map((effort) => ({
				id: effort.id,
				label: effort.name
			}))];
			const selectedEffort = model?.reasoningEffort ?? "";
			const effortTriggerLabel = model === void 0 || selectedEffort === "" ? t("effortFollowDefault") : efforts.find((effort) => effort.id === selectedEffort)?.name ?? selectedEffort;
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: create_module_css_default.field,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("memberModel") }),
					groups === void 0 && modelsError === void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", {
						className: sidebar_module_css_default.editHint,
						children: t("modelsLoading")
					}),
					modelsError !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
						className: sidebar_module_css_default.editHint,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								role: "alert",
								children: t("modelsLoadFailed", { message: modelsError })
							}),
							" ",
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								size: "sm",
								variant: "outline",
								disabled,
								onClick: () => {
									setModelsError(void 0);
									setReloadToken((token) => token + 1);
								},
								children: t("retry")
							})
						]
					}),
					groups !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Menu, {
						open,
						portal: true,
						className: create_module_css_default.menuCap,
						items,
						selectedId: selectedModelKey,
						onSelect: (key) => {
							setModelOpen(false);
							const choice = byKey.get(key);
							onModelChange(choice === void 0 ? void 0 : {
								provider: choice.provider,
								model: choice.id
							});
						},
						onClose: () => {
							setModelOpen(false);
						},
						anchor: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
							type: "button",
							className: create_module_css_default.selectTrigger,
							"aria-label": t("memberModel"),
							"aria-haspopup": "menu",
							"aria-expanded": open,
							disabled,
							onClick: () => {
								setModelOpen((value) => !value);
							},
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: create_module_css_default.selectValue,
								children: triggerLabel
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: `${create_module_css_default.chevron} ${open ? create_module_css_default.chevronOpen : ""}`,
								"aria-hidden": true,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular, {})
							})]
						})
					}),
					model !== void 0 && efforts.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Menu, {
						open: effortOpen,
						portal: true,
						className: create_module_css_default.menuCap,
						items: effortItems,
						selectedId: selectedEffort,
						onSelect: (key) => {
							setEffortOpen(false);
							onModelChange(key === "" ? {
								provider: model.provider,
								model: model.model
							} : {
								provider: model.provider,
								model: model.model,
								reasoningEffort: key
							});
						},
						onClose: () => {
							setEffortOpen(false);
						},
						anchor: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
							type: "button",
							className: create_module_css_default.selectTrigger,
							"aria-label": t("reasoningEffort"),
							"aria-haspopup": "menu",
							"aria-expanded": effortOpen,
							disabled,
							onClick: () => {
								setEffortOpen((value) => !value);
							},
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: create_module_css_default.selectValue,
								children: `${t("reasoningEffort")} · ${effortTriggerLabel}`
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: `${create_module_css_default.chevron} ${effortOpen ? create_module_css_default.chevronOpen : ""}`,
								"aria-hidden": true,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular, {})
							})]
						})
					})
				]
			});
		}
		/**
		* Agent editor: handle, description, and per-Member model selection commit
		* through one durable update. Channel membership is managed from the Channel
		* side, not here.
		*/
		function AgentEditorDialog({ status, updateMember, loadModels, onCommitted, onClose, t }) {
			const memberId = status.member.memberId;
			const [handle, setHandle] = (0, react.useState)(status.member.handle);
			const [description, setDescription] = (0, react.useState)(status.member.description);
			const [model, setModel] = (0, react.useState)(status.member.model);
			const { saving, error, pendingRequest, save } = useEditDialogSave({
				save: updateMember,
				onCommitted,
				onClose
			});
			const dirty = handle.trim() !== status.member.handle || description.trim() !== status.member.description || !sameModel(model, status.member.model);
			const submit = async (event) => {
				event.preventDefault();
				const normalizedHandle = handle.trim();
				const normalizedDescription = description.trim();
				if (saving || !dirty || normalizedHandle.length === 0) return;
				const payload = {
					memberId,
					handle: normalizedHandle,
					description: normalizedDescription,
					...model === void 0 ? {} : { model },
					...status.member.capabilities === void 0 ? {} : { capabilities: status.member.capabilities }
				};
				await save(pendingRequest.current !== void 0 && pendingRequest.current.memberId === payload.memberId && pendingRequest.current.handle === payload.handle && pendingRequest.current.description === payload.description && sameModel(pendingRequest.current.model, model) ? pendingRequest.current : {
					requestId: mintRequestId(),
					...payload
				});
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
				open: true,
				onClose,
				title: t("editAgent"),
				description: `@${status.member.handle}`,
				closeLabel: t("close"),
				contentClassName: create_module_css_default.dialogContent,
				footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
					variant: "outline",
					disabled: saving,
					onClick: onClose,
					children: t("cancel")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
					type: "submit",
					form: "team-agent-edit-form",
					variant: "primary",
					disabled: saving || !dirty || handle.trim().length === 0,
					children: saving ? t("editSaving") : t("editSave")
				})] }),
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("form", {
					id: "team-agent-edit-form",
					className: create_module_css_default.form,
					onSubmit: (event) => {
						submit(event);
					},
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: create_module_css_default.field,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("agentName") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
								className: create_module_css_default.input,
								value: handle,
								onChange: (event) => {
									setHandle(event.target.value);
									pendingRequest.current = void 0;
								},
								disabled: saving,
								autoFocus: true
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: create_module_css_default.field,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [t("agentDescription"), t("optionalSuffix")] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
								className: create_module_css_default.input,
								value: description,
								placeholder: t("agentDescriptionPlaceholder"),
								onChange: (event) => {
									setDescription(event.target.value);
									pendingRequest.current = void 0;
								},
								disabled: saving
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ModelPickerField, {
							model,
							onModelChange: (choice) => {
								pendingRequest.current = void 0;
								setModel(choice);
							},
							loadModels,
							disabled: saving,
							t
						}),
						error !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: create_module_css_default.error,
							role: "alert",
							children: error
						})
					]
				})
			});
		}
		function sameModel(left, right) {
			if (left === void 0 && right === void 0) return true;
			if (left === void 0 || right === void 0) return false;
			return left.provider === right.provider && left.model === right.model && left.reasoningEffort === right.reasoningEffort;
		}
		//#endregion
		//#region src/client/TeamAgentImport.tsx
		/** Selection is a Host join, not a new Agent or a copied Session. */
		function TeamAgentImport({ workspaceId, loadMembers, joinWorkspace, onJoined, onPending, t }) {
			const [members, setMembers] = (0, react.useState)([]);
			const [loading, setLoading] = (0, react.useState)(true);
			const [error, setError] = (0, react.useState)();
			const [pending, setPending] = (0, react.useState)();
			const retry = (0, react.useRef)();
			const busy = (0, react.useRef)(false);
			const generation = (0, react.useRef)(0);
			const load = (0, react.useCallback)(async () => {
				const current = ++generation.current;
				setLoading(true);
				setError(void 0);
				try {
					const result = await loadMembers({});
					if (current !== generation.current) return;
					if (!result.ok) throw new Error(result.error.message);
					setMembers(result.value.filter((status) => (status.member.state === "enabled" || status.member.state === "suspended") && !status.workspaceIds.includes(workspaceId)));
				} catch (cause) {
					if (current === generation.current) setError(cause instanceof Error ? cause.message : String(cause));
				} finally {
					if (current === generation.current) setLoading(false);
				}
			}, [loadMembers, workspaceId]);
			(0, react.useEffect)(() => {
				load();
				return () => {
					generation.current++;
				};
			}, [load]);
			const join = async (status) => {
				if (busy.current) return;
				busy.current = true;
				setPending(status.member.memberId);
				onPending(true);
				setError(void 0);
				const request = retry.current?.memberId === status.member.memberId ? retry.current : {
					requestId: mintRequestId(),
					workspaceId,
					memberId: status.member.memberId
				};
				retry.current = request;
				try {
					const result = await joinWorkspace(request);
					if (!result.ok) throw new Error(result.error.message);
					await onJoined();
				} catch (cause) {
					setError(cause instanceof Error ? cause.message : String(cause));
				} finally {
					busy.current = false;
					setPending(void 0);
					onPending(false);
				}
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: create_module_css_default.form,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: create_module_css_default.notice,
						children: t("importAgentNotice")
					}),
					loading && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: create_module_css_default.state,
						role: "status",
						children: t("loadingAgents")
					}),
					!loading && error === void 0 && members.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: create_module_css_default.state,
						children: t("emptyImportAgents")
					}),
					!loading && members.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: create_module_css_default.roster,
						children: members.map((status) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamMemberRow, {
							status,
							t,
							action: {
								label: pending === status.member.memberId ? t("importingAgent") : t("importAgent"),
								disabled: pending !== void 0,
								onSelect: () => {
									join(status);
								}
							}
						}, status.member.memberId))
					}),
					error !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: create_module_css_default.failure,
						role: "alert",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: create_module_css_default.error,
							children: error
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							disabled: pending !== void 0,
							variant: "outline",
							onClick: () => {
								load();
							},
							children: t("retry")
						})]
					})
				]
			});
		}
		//#endregion
		//#region src/client/TeamAgentsPanel.tsx
		function TeamAgentsPanel({ workspaceId, loadMembers, subscribeChanges, addMember, updateMember, recoverMember, archiveMember, joinWorkspace, leaveWorkspace, loadModels, memberSessionId, openMemberSession, onCreatingChange, t }) {
			const [members, setMembers] = (0, react.useState)([]);
			const [loading, setLoading] = (0, react.useState)(true);
			const [error, setError] = (0, react.useState)();
			const [formOpen, setFormOpen] = (0, react.useState)(false);
			const [importing, setImporting] = (0, react.useState)(false);
			const [handle, setHandle] = (0, react.useState)("");
			const [description, setDescription] = (0, react.useState)("");
			const [model, setModel] = (0, react.useState)(void 0);
			const [creating, setCreating] = (0, react.useState)(false);
			const [retryRequest, setRetryRequest] = (0, react.useState)();
			const triggerRef = (0, react.useRef)(null);
			const orderedAgentRefs = useSidebarOrder(workspaceId, "agents", (0, react.useMemo)(() => members.map((status) => status.member.memberId), [members]));
			const orderedMembers = (0, react.useMemo)(() => {
				const byId = new Map(members.map((status) => [status.member.memberId, status]));
				return orderedAgentRefs.map((memberId) => byId.get(memberId)).filter((status) => status !== void 0);
			}, [orderedAgentRefs, members]);
			const applyMove = (movedRef, targetRef, marker) => {
				moveSidebarItem(workspaceId, "agents", orderedAgentRefs, movedRef, targetRef, marker);
			};
			const drag = useSidebarRowDrag({
				refs: orderedAgentRefs,
				onCommit: applyMove
			});
			const sectionOpen = useSidebarSectionOpen(workspaceId, "agents");
			const observedSessionIds = (0, react.useRef)(/* @__PURE__ */ new Map());
			const pendingFollows = (0, react.useRef)(/* @__PURE__ */ new Map());
			const seatSessionIdRef = (0, react.useRef)(memberSessionId);
			seatSessionIdRef.current = memberSessionId;
			const openMemberSessionRef = (0, react.useRef)(openMemberSession);
			openMemberSessionRef.current = openMemberSession;
			const followRollover = (0, react.useCallback)((statuses) => {
				for (const status of statuses) {
					const memberId = status.member.memberId;
					const observed = observedSessionIds.current.get(memberId);
					if (observed === void 0) {
						observedSessionIds.current.set(memberId, status.member.sessionId);
						continue;
					}
					if (observed !== status.member.sessionId) {
						observedSessionIds.current.set(memberId, status.member.sessionId);
						const seatSessionId = seatSessionIdRef.current;
						if (seatSessionId !== void 0 && observed === seatSessionId) pendingFollows.current.set(memberId, {
							previousSessionId: observed,
							nextSessionId: status.member.sessionId
						});
						else pendingFollows.current.delete(memberId);
					}
					const pending = pendingFollows.current.get(memberId);
					if (pending !== void 0 && pending.nextSessionId === status.member.sessionId && status.availability === "active") {
						const seatSessionId = seatSessionIdRef.current;
						pendingFollows.current.delete(memberId);
						if (seatSessionId !== void 0 && seatSessionId === pending.previousSessionId) openMemberSessionRef.current(pending.nextSessionId);
					}
				}
			}, []);
			const loadedRef = (0, react.useRef)(false);
			const refresh = (0, react.useCallback)(async () => {
				if (!loadedRef.current) setLoading(true);
				const result = await loadMembers({ workspaceId });
				if (result.ok) {
					const next = result.value.filter((status) => status.member.state !== "inactive" && status.member.state !== "archived");
					setMembers(next);
					followRollover(next);
					setError(void 0);
					loadedRef.current = true;
				} else setError(result.error.message);
				setLoading(false);
			}, [
				loadMembers,
				workspaceId,
				followRollover
			]);
			(0, react.useEffect)(() => {
				refresh();
			}, [refresh]);
			(0, react.useEffect)(() => {
				warmModelCatalog(loadModels);
			}, [loadModels]);
			(0, react.useEffect)(() => subscribeChanges({
				kind: "workspace",
				workspaceId
			}, (update) => {
				if (update.type === "failed") {
					setError(update.message);
					return;
				}
				refresh();
			}), [
				subscribeChanges,
				refresh,
				workspaceId
			]);
			(0, react.useEffect)(() => subscribeChanges({
				kind: "presence",
				workspaceId
			}, (update) => {
				if (update.type === "failed") {
					setError(update.message);
					return;
				}
				refresh();
			}), [
				subscribeChanges,
				refresh,
				workspaceId
			]);
			const closeForm = () => {
				if (creating) return;
				setFormOpen(false);
				queueMicrotask(() => {
					triggerRef.current?.focus();
				});
			};
			const provision = async (request) => {
				setCreating(true);
				onCreatingChange(request, true);
				setError(void 0);
				setRetryRequest(request);
				try {
					const result = await addMember(request);
					if (result.ok) {
						const committed = {
							...result.value.status,
							workspaceIds: result.value.workspaceIds
						};
						setMembers((current) => {
							const retained = current.filter((status) => status.member.memberId !== committed.member.memberId);
							return committed.member.state === "inactive" || committed.member.state === "archived" ? retained : [...retained, committed];
						});
						setHandle("");
						setDescription("");
						setModel(void 0);
						setFormOpen(false);
						if (result.value.status.presence === "unavailable") setError(diagnosticText(result.value.status) || t("statusUnavailable"));
						else setRetryRequest(void 0);
						queueMicrotask(() => {
							triggerRef.current?.focus();
						});
					} else {
						await refresh();
						setError(result.error.message);
					}
				} catch (cause) {
					setError(cause instanceof Error ? cause.message : String(cause));
				} finally {
					setCreating(false);
					onCreatingChange(request, false);
				}
			};
			const submit = (event) => {
				event.preventDefault();
				const normalizedHandle = handle.trim();
				const normalizedDescription = description.trim();
				if (normalizedHandle.length === 0 || creating) return;
				provision(retryRequest !== void 0 && retryRequest.workspaceId === workspaceId && retryRequest.handle === normalizedHandle && retryRequest.description === normalizedDescription && sameModel(retryRequest.model, model) && retryRequest.channelRefs.length === 0 ? retryRequest : {
					requestId: mintRequestId(),
					workspaceId,
					handle: normalizedHandle,
					description: normalizedDescription,
					presetId: "team-member",
					channelRefs: [],
					...model === void 0 ? {} : { model }
				});
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: sidebar_module_css_default.panel,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
						open: formOpen,
						onClose: closeForm,
						title: t("addAgent"),
						closeLabel: t("close"),
						contentClassName: create_module_css_default.dialogContent,
						footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "outline",
							disabled: creating,
							onClick: closeForm,
							children: t("cancel")
						}), !importing && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							type: "submit",
							form: "team-agent-create-form",
							variant: "primary",
							disabled: creating || handle.trim().length === 0,
							children: creating ? t("creatingAgent") : t("createAgent")
						})] }),
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							className: create_module_css_default.modeSwitch,
							variant: "outline",
							disabled: creating,
							"aria-expanded": importing,
							onClick: () => {
								setImporting((value) => !value);
								setError(void 0);
							},
							children: importing ? t("createAgent") : t("importAgentTitle")
						}), formOpen && importing ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamAgentImport, {
							workspaceId,
							loadMembers,
							joinWorkspace,
							onPending: setCreating,
							onJoined: async () => {
								await refresh();
								setFormOpen(false);
								queueMicrotask(() => {
									triggerRef.current?.focus();
								});
							},
							t
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("form", {
							id: "team-agent-create-form",
							className: create_module_css_default.form,
							onSubmit: submit,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
									className: create_module_css_default.field,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("agentName") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
										className: create_module_css_default.input,
										value: handle,
										onChange: (event) => {
											setHandle(event.target.value);
											setRetryRequest(void 0);
										},
										disabled: creating,
										autoFocus: true
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
									className: create_module_css_default.field,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [t("agentDescription"), t("optionalSuffix")] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
										className: create_module_css_default.input,
										value: description,
										placeholder: t("agentDescriptionPlaceholder"),
										onChange: (event) => {
											setDescription(event.target.value);
											setRetryRequest(void 0);
										},
										disabled: creating
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ModelPickerField, {
									model,
									onModelChange: (choice) => {
										setModel(choice);
										setRetryRequest(void 0);
									},
									loadModels,
									disabled: creating,
									t
								}),
								formOpen && error !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: create_module_css_default.error,
									role: "alert",
									children: error
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(TeamSidebarSection, {
						title: t("agents"),
						open: sectionOpen,
						onToggle: (open) => {
							setSidebarSectionOpen(workspaceId, "agents", open);
						},
						actions: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
							label: t("addAgent"),
							delayMs: 500,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								ref: triggerRef,
								type: "button",
								className: sidebar_module_css_default.iconButton,
								"aria-label": t("addAgent"),
								onClick: () => {
									setError(void 0);
									setImporting(false);
									setFormOpen(true);
								},
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular, { size: 14 })
							})
						}),
						children: [
							loading && members.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: sidebar_module_css_default.emptyState,
								children: t("loadingAgents")
							}),
							!loading && error === void 0 && members.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: sidebar_module_css_default.emptyState,
								children: t("emptyAgents")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: sidebar_module_css_default.agentList,
								children: orderedMembers.map((status) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SortableRow, {
									drag,
									orderKey: status.member.memberId,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(AgentRow, {
										workspaceId,
										leaveWorkspace,
										status,
										...memberSessionId === void 0 ? {} : { current: status.member.sessionId === memberSessionId },
										updateMember,
										recoverMember,
										archiveMember,
										loadModels,
										openMemberSession,
										onUpdated: refresh,
										t
									})
								}, status.member.memberId))
							})
						]
					}),
					!formOpen && error !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: sidebar_module_css_default.retryError,
						role: "alert",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: error }), retryRequest !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: sidebar_module_css_default.textButton,
							disabled: creating,
							onClick: () => {
								setFormOpen(true);
							},
							children: t("retry")
						})]
					})
				]
			});
		}
		/**
		* One sidebar Agent row: the select button opens the Member's own Session
		* conversation page, the avatar carries identity plus the presence badge, and
		* the row menu opens the editor.
		*/
		function AgentRow({ workspaceId, leaveWorkspace, status, current, updateMember, recoverMember, archiveMember, loadModels, openMemberSession, onUpdated, t }) {
			const [menuOpen, setMenuOpen] = (0, react.useState)(false);
			const [editing, setEditing] = (0, react.useState)(false);
			const [archiving, setArchiving] = (0, react.useState)(false);
			const [rowAlert, setRowAlert] = (0, react.useState)();
			const [archivePending, setArchivePending] = (0, react.useState)(false);
			const archiveRequest = (0, react.useRef)();
			const withdrawing = workspaceId !== status.member.workspaceId;
			const recover = async () => {
				try {
					const result = await recoverMember({
						requestId: mintRequestId(),
						workspaceId: status.member.workspaceId,
						memberId: status.member.memberId
					});
					await onUpdated();
					if (!result.ok) {
						setRowAlert(t("restartFailed", { message: result.error.message }));
						return;
					}
					if (result.value.status.availability === "unavailable") {
						setRowAlert(t("restartStillUnavailable", { diagnostic: diagnosticText(result.value.status) || t("statusUnavailable") }));
						return;
					}
					setRowAlert(void 0);
					if (current === true) openMemberSession(status.member.sessionId);
				} catch (cause) {
					setRowAlert(t("restartFailed", { message: cause instanceof Error ? cause.message : String(cause) }));
				}
			};
			const archive = async () => {
				if (archivePending) return;
				setArchivePending(true);
				setRowAlert(void 0);
				archiveRequest.current ??= mintRequestId();
				const request = {
					requestId: archiveRequest.current,
					memberId: status.member.memberId
				};
				try {
					const result = withdrawing ? await leaveWorkspace({
						...request,
						workspaceId
					}) : await archiveMember(request);
					if (!result.ok) throw new Error(result.error.message);
					setArchiving(false);
					archiveRequest.current = void 0;
					await onUpdated();
				} catch (cause) {
					setRowAlert(cause instanceof Error ? cause.message : String(cause));
				} finally {
					setArchivePending(false);
				}
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: sidebar_module_css_default.agentRow,
					"data-agent-row": true,
					"data-menu-open": menuOpen || void 0,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: sidebar_module_css_default.agentSelect,
						"aria-label": t("openAgentSession", { name: status.member.handle }),
						"aria-current": current ? "page" : void 0,
						disabled: status.availability !== "active",
						onClick: () => {
							openMemberSession(status.member.sessionId);
						},
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamMemberIdentity, {
							status,
							name: status.member.handle.replace(/^@/, ""),
							className: sidebar_module_css_default.agentCopy,
							t
						})
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: sidebar_module_css_default.rowMenu,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamRowMenu, {
							label: t("actionsAgent", { name: status.member.handle }),
							items: [
								{
									id: "edit",
									label: t("editAgent"),
									icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconEditOutlineRegular, {})
								},
								...status.presence === "error" ? [{
									id: "resume",
									label: t("resumeAgent"),
									icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlayOutlineRegular, {})
								}] : [],
								...status.availability === "unavailable" && restartOffered(status) ? [{
									id: "restart",
									label: t("restartAgent"),
									icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconRefreshOutlineRegular, {})
								}] : [],
								{
									id: "archive",
									label: t(withdrawing ? "withdrawAgent" : "archiveAgent"),
									icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconArchiveOutlineRegular, { size: 16 }),
									danger: true
								}
							],
							onSelect: (id) => {
								if (id === "edit") setEditing(true);
								else if (id === "archive") setArchiving(true);
								else recover();
							},
							onOpenChange: setMenuOpen
						})
					})]
				}),
				!archiving && rowAlert !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: sidebar_module_css_default.rowAlert,
					role: "alert",
					children: rowAlert
				}),
				archiving && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
					open: true,
					onClose: () => {
						if (!archivePending) setArchiving(false);
					},
					title: t(withdrawing ? "withdrawAgentTitle" : "archiveAgentTitle", { name: status.member.handle }),
					closeLabel: t("close"),
					contentClassName: create_module_css_default.dialogContent,
					footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
						variant: "outline",
						disabled: archivePending,
						onClick: () => {
							setArchiving(false);
						},
						children: t("cancel")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
						variant: "primary",
						disabled: archivePending,
						onClick: () => {
							archive();
						},
						children: t(withdrawing ? "withdrawAgent" : "archiveAgentConfirm")
					})] }),
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: create_module_css_default.error,
							children: t(withdrawing ? "withdrawAgentNotice" : "archiveAgentNotice", { name: status.member.handle })
						}),
						!withdrawing && status.workspaceIds.length > 1 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: t("archiveOtherWorkspaces", { count: status.workspaceIds.length - 1 }) }),
						rowAlert !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: create_module_css_default.error,
							role: "alert",
							children: rowAlert
						})
					]
				}),
				editing && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(AgentEditorDialog, {
					status,
					updateMember,
					loadModels,
					onCommitted: onUpdated,
					onClose: () => {
						setEditing(false);
					},
					t
				})
			] });
		}
		//#endregion
		//#region src/client/multi-menu-field.tsx
		/**
		* Render the labeled multi-select Menu field.
		* @param props.label - field caption; doubles as the trigger's accessible name.
		* @param props.options - selectable entries in display order.
		* @param props.selected - currently checked ids.
		* @param props.onToggle - invoked with an id when its row is clicked.
		* @param props.disabled - disables the trigger while a mutation is in flight.
		* @param props.emptyText - shown instead of the picker when there is nothing to pick.
		* @param props.triggerEmptyLabel - trigger caption when nothing is selected.
		* @param props.formatCount - builds the trigger caption for N selections.
		*/
		function MultiMenuField({ label, options, selected, onToggle, disabled = false, emptyText, triggerEmptyLabel, formatCount }) {
			const [open, setOpen] = (0, react.useState)(false);
			const items = options.map((option) => ({
				id: option.id,
				label: option.hint === void 0 ? option.label : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [option.label, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", {
					className: sidebar_module_css_default.menuHint,
					children: ` ${option.hint}`
				})] }),
				...option.disabled === true ? { disabled: true } : {},
				...option.icon === void 0 ? {} : { icon: option.icon }
			}));
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: create_module_css_default.field,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: label }), options.length === 0 && emptyText !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("small", {
					className: sidebar_module_css_default.editHint,
					children: emptyText
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Menu, {
					open,
					portal: true,
					className: create_module_css_default.menuCap,
					items,
					selectedIds: selected,
					onSelect: (id) => {
						onToggle(id);
					},
					onClose: () => {
						setOpen(false);
					},
					anchor: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
						type: "button",
						className: create_module_css_default.selectTrigger,
						"aria-label": label,
						"aria-haspopup": "menu",
						"aria-expanded": open,
						disabled,
						onClick: () => {
							setOpen((value) => !value);
						},
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: create_module_css_default.selectValue,
							children: selected.length === 0 ? triggerEmptyLabel : formatCount(selected.length)
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: `${create_module_css_default.chevron} ${open ? create_module_css_default.chevronOpen : ""}`,
							"aria-hidden": true,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutlineRegular, {})
						})]
					})
				})]
			});
		}
		//#endregion
		//#region src/client/TeamChannelsPanel.tsx
		function TeamChannelsPanel(props) {
			const { workspaceId, loadMembers, loadChannels, subscribeChanges, createChannel, updateChannel, creatingAgents, selectedChannelRef, selectChannel, t } = props;
			const [view, setView] = (0, react.useState)();
			const [members, setMembers] = (0, react.useState)([]);
			const [loading, setLoading] = (0, react.useState)(true);
			const [error, setError] = (0, react.useState)();
			const [formOpen, setFormOpen] = (0, react.useState)(false);
			const [name, setName] = (0, react.useState)("");
			const [description, setDescription] = (0, react.useState)("");
			const [selected, setSelected] = (0, react.useState)(/* @__PURE__ */ new Set());
			const [mutating, setMutating] = (0, react.useState)(false);
			const [pendingCreate, setPendingCreate] = (0, react.useState)();
			const previousCreatingKey = (0, react.useRef)(creatingAgents.map((request) => request.requestId).join(","));
			const triggerRef = (0, react.useRef)(null);
			const orderedChannelRefs = useSidebarOrder(workspaceId, "channels", (0, react.useMemo)(() => view?.channels.map((channel) => channel.channelRef) ?? [], [view]));
			const orderedChannels = (0, react.useMemo)(() => {
				const byRef = new Map((view?.channels ?? []).map((channel) => [channel.channelRef, channel]));
				return orderedChannelRefs.map((channelRef) => byRef.get(channelRef)).filter((channel) => channel !== void 0);
			}, [orderedChannelRefs, view]);
			const applyMove = (movedRef, targetRef, marker) => {
				moveSidebarItem(workspaceId, "channels", orderedChannelRefs, movedRef, targetRef, marker);
			};
			const drag = useSidebarRowDrag({
				refs: orderedChannelRefs,
				onCommit: applyMove
			});
			const sectionOpen = useSidebarSectionOpen(workspaceId, "channels");
			const loadedRef = (0, react.useRef)(false);
			const refresh = (0, react.useCallback)(async () => {
				if (!loadedRef.current) setLoading(true);
				const [channelResult, memberResult] = await Promise.all([loadChannels({
					workspaceId,
					limit: 1
				}), loadMembers({ workspaceId })]);
				if (channelResult.ok && memberResult.ok) {
					setView(channelResult.value);
					const visibleMembers = memberResult.value.filter((status) => status.member.state !== "inactive" && status.member.state !== "archived");
					setMembers(visibleMembers);
					const selectable = new Set(visibleMembers.filter((status) => status.presence !== "unavailable").map((status) => status.member.memberId));
					setSelected((current) => new Set([...current].filter((memberId) => selectable.has(memberId))));
					setError(void 0);
					loadedRef.current = true;
				} else if (!channelResult.ok) setError(channelResult.error.message);
				else if (!memberResult.ok) setError(memberResult.error.message);
				setLoading(false);
			}, [
				loadChannels,
				loadMembers,
				workspaceId
			]);
			(0, react.useEffect)(() => {
				refresh();
			}, [refresh]);
			(0, react.useEffect)(() => subscribeChanges({
				kind: "workspace",
				workspaceId
			}, (update) => {
				if (update.type === "failed") {
					setError(update.message);
					return;
				}
				refresh();
			}), [
				subscribeChanges,
				refresh,
				workspaceId
			]);
			const creatingKey = creatingAgents.map((request) => request.requestId).join(",");
			(0, react.useEffect)(() => {
				if (previousCreatingKey.current === creatingKey) return;
				previousCreatingKey.current = creatingKey;
				refresh();
			}, [creatingKey, refresh]);
			const membership = (0, react.useMemo)(() => {
				const byChannel = /* @__PURE__ */ new Map();
				for (const item of view?.members ?? []) {
					const ids = byChannel.get(item.channelRef) ?? /* @__PURE__ */ new Set();
					ids.add(item.memberId);
					byChannel.set(item.channelRef, ids);
				}
				return byChannel;
			}, [view]);
			const closeForm = () => {
				if (mutating) return;
				setFormOpen(false);
				queueMicrotask(() => {
					triggerRef.current?.focus();
				});
			};
			const submit = async (event) => {
				event.preventDefault();
				if (mutating || name.trim() === "") return;
				const payload = {
					workspaceId,
					name: name.trim(),
					description: description.trim(),
					memberIds: [...selected]
				};
				const request = pendingCreate !== void 0 && pendingCreate.workspaceId === payload.workspaceId && pendingCreate.name === payload.name && pendingCreate.description === payload.description && JSON.stringify(pendingCreate.memberIds) === JSON.stringify(payload.memberIds) ? pendingCreate : {
					requestId: mintRequestId(),
					...payload
				};
				setPendingCreate(request);
				setMutating(true);
				setError(void 0);
				try {
					const result = await createChannel(request);
					if (result.ok) {
						setPendingCreate(void 0);
						setName("");
						setDescription("");
						setSelected(/* @__PURE__ */ new Set());
						setFormOpen(false);
						await refresh();
						queueMicrotask(() => {
							triggerRef.current?.focus();
						});
					} else setError(result.error.message);
				} catch (cause) {
					setError(cause instanceof Error ? cause.message : String(cause));
				} finally {
					setMutating(false);
				}
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: sidebar_module_css_default.panel,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
						open: formOpen,
						onClose: closeForm,
						title: t("addChannel"),
						closeLabel: t("close"),
						contentClassName: create_module_css_default.dialogContent,
						footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "outline",
							disabled: mutating,
							onClick: closeForm,
							children: t("cancel")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							type: "submit",
							form: "team-channel-create-form",
							variant: "primary",
							disabled: mutating || name.trim() === "",
							children: mutating ? t("creatingChannel") : t("createChannel")
						})] }),
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("form", {
							id: "team-channel-create-form",
							className: create_module_css_default.form,
							onSubmit: (event) => {
								submit(event);
							},
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
									className: create_module_css_default.field,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("channelName") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
										className: create_module_css_default.input,
										value: name,
										disabled: mutating,
										autoFocus: true,
										onChange: (event) => {
											setName(event.target.value);
											setPendingCreate(void 0);
										}
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
									className: create_module_css_default.field,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [t("channelDescription"), t("optionalSuffix")] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
										className: create_module_css_default.input,
										value: description,
										placeholder: t("agentDescriptionPlaceholder"),
										disabled: mutating,
										onChange: (event) => {
											setDescription(event.target.value);
											setPendingCreate(void 0);
										}
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(MultiMenuField, {
									label: t("initialMembers"),
									disabled: mutating,
									options: [...creatingAgents.map((request) => ({
										id: request.requestId,
										label: request.handle,
										disabled: true,
										hint: t("memberCreatingReason")
									})), ...members.map((status) => ({
										id: status.member.memberId,
										label: status.member.handle,
										...status.presence === "unavailable" ? {
											disabled: true,
											hint: t("memberUnavailableReason")
										} : {},
										icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamPresenceDot, {
											status,
											t
										})
									}))],
									selected: [...selected],
									onToggle: (id) => {
										setSelected((current) => {
											const next = new Set(current);
											if (next.has(id)) next.delete(id);
											else next.add(id);
											return next;
										});
										setPendingCreate(void 0);
									},
									triggerEmptyLabel: t("membersPickerEmpty"),
									formatCount: (count) => t("membersPickerCount", { count })
								}),
								error !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: create_module_css_default.error,
									role: "alert",
									children: error
								})
							]
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(TeamSidebarSection, {
						title: t("channels"),
						open: sectionOpen,
						onToggle: (open) => {
							setSidebarSectionOpen(workspaceId, "channels", open);
						},
						actions: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
							label: t("addChannel"),
							delayMs: 500,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								ref: triggerRef,
								type: "button",
								className: sidebar_module_css_default.iconButton,
								"aria-label": t("addChannel"),
								onClick: () => {
									setError(void 0);
									setFormOpen(true);
								},
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPlusOutlineRegular, { size: 14 })
							})
						}),
						children: [
							loading && view === void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: sidebar_module_css_default.emptyState,
								children: t("loadingChannels")
							}),
							!loading && error === void 0 && view !== void 0 && view.channels.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								className: sidebar_module_css_default.emptyState,
								children: t("emptyChannels")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: sidebar_module_css_default.channelList,
								children: orderedChannels.map((channel) => {
									const joined = membership.get(channel.channelRef) ?? /* @__PURE__ */ new Set();
									return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SortableRow, {
										drag,
										orderKey: channel.channelRef,
										children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ChannelRow, {
											channel,
											members,
											joinedIds: joined,
											selected: selectedChannelRef === channel.channelRef,
											updateChannel,
											archiveChannel: props.archiveChannel,
											joinChannel: props.joinChannel,
											removeChannelMember: props.removeChannelMember,
											onCommitted: () => {
												refresh();
											},
											selectChannel,
											t
										})
									}, channel.channelRef);
								})
							})
						]
					}),
					!formOpen && error !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: sidebar_module_css_default.error,
						role: "alert",
						children: error
					})
				]
			});
		}
		/**
		* One sidebar Channel row: the select button keeps the `#` identity while the
		* row menu carries the entry point; editing covers display facts and membership.
		*/
		function ChannelRow({ channel, members, joinedIds, selected, updateChannel, archiveChannel, joinChannel, removeChannelMember, onCommitted, selectChannel, t }) {
			const [menuOpen, setMenuOpen] = (0, react.useState)(false);
			const [editing, setEditing] = (0, react.useState)(false);
			const [archiving, setArchiving] = (0, react.useState)(false);
			const [rowAlert, setRowAlert] = (0, react.useState)();
			const archive = async () => {
				try {
					const result = await archiveChannel({
						requestId: mintRequestId(),
						workspaceId: channel.workspaceId,
						channelRef: channel.channelRef
					});
					await onCommitted();
					if (!result.ok) setRowAlert(t("archiveChannelFailed", { message: result.error.message }));
				} catch (cause) {
					setRowAlert(t("archiveChannelFailed", { message: cause instanceof Error ? cause.message : String(cause) }));
				}
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("article", {
					className: sidebar_module_css_default.channelRow,
					"data-menu-open": menuOpen || void 0,
					"aria-current": selected ? "page" : void 0,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: sidebar_module_css_default.channelSelect,
						"aria-label": `# ${channel.name}`,
						onClick: () => {
							selectChannel(channel.channelRef);
						},
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("strong", {
							className: sidebar_module_css_default.channelName,
							children: ["# ", channel.name]
						})
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: sidebar_module_css_default.rowMenu,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamRowMenu, {
							label: t("actionsChannel", { name: channel.name }),
							items: [{
								id: "edit",
								label: t("editChannel"),
								icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconEditOutlineRegular, {})
							}, {
								id: "archive",
								label: t("archiveChannel"),
								icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconArchiveOutlineRegular, { size: 16 }),
								danger: true
							}],
							onSelect: (id) => {
								if (id === "edit") setEditing(true);
								else setArchiving(true);
							},
							onOpenChange: setMenuOpen
						})
					})]
				}),
				rowAlert !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: sidebar_module_css_default.rowAlert,
					role: "alert",
					children: rowAlert
				}),
				archiving && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
					open: true,
					onClose: () => {
						setArchiving(false);
					},
					title: t("archiveChannelTitle", { name: channel.name }),
					closeLabel: t("close"),
					contentClassName: create_module_css_default.dialogContent,
					footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
						variant: "outline",
						onClick: () => {
							setArchiving(false);
						},
						children: t("cancel")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
						variant: "primary",
						onClick: () => {
							setArchiving(false);
							archive();
						},
						children: t("archiveChannelConfirm")
					})] }),
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: create_module_css_default.error,
						children: t("archiveChannelNotice", { name: channel.name })
					})
				}),
				editing && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ChannelEditorDialog, {
					channel,
					members,
					joinedIds,
					updateChannel,
					joinChannel,
					removeChannelMember,
					onCommitted,
					onClose: () => {
						setEditing(false);
					},
					t
				})
			] });
		}
		/**
		* Channel editor: name and description commit through one durable update;
		* Channel membership below keeps its own immediate add/remove flow.
		*/
		function ChannelEditorDialog({ channel, members, joinedIds, updateChannel, joinChannel, removeChannelMember, onCommitted, onClose, t }) {
			const [name, setName] = (0, react.useState)(channel.name);
			const [description, setDescription] = (0, react.useState)(channel.description);
			const { saving, error, pendingRequest, save } = useEditDialogSave({
				save: updateChannel,
				onCommitted,
				onClose
			});
			const membership = useChannelMembership({
				joinChannel,
				removeChannelMember
			}, (change) => change.memberId, async () => {
				await onCommitted();
			});
			const dirty = name.trim() !== channel.name || description.trim() !== channel.description;
			const submit = async (event) => {
				event.preventDefault();
				const normalizedName = name.trim();
				const normalizedDescription = description.trim();
				if (saving || !dirty || normalizedName === "") return;
				await save(pendingRequest.current !== void 0 && pendingRequest.current.channelRef === channel.channelRef && pendingRequest.current.name === normalizedName && pendingRequest.current.description === normalizedDescription ? pendingRequest.current : {
					requestId: mintRequestId(),
					workspaceId: channel.workspaceId,
					channelRef: channel.channelRef,
					name: normalizedName,
					description: normalizedDescription
				});
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
				open: true,
				onClose,
				title: t("editChannel"),
				description: `# ${channel.name}`,
				closeLabel: t("close"),
				contentClassName: create_module_css_default.dialogContent,
				footer: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
					variant: "outline",
					disabled: saving,
					onClick: onClose,
					children: t("cancel")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
					type: "submit",
					form: "team-channel-edit-form",
					variant: "primary",
					disabled: saving || !dirty || name.trim() === "",
					children: saving ? t("editSaving") : t("editSave")
				})] }),
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("form", {
					id: "team-channel-edit-form",
					className: create_module_css_default.form,
					onSubmit: (event) => {
						submit(event);
					},
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: create_module_css_default.field,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("channelName") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
								className: create_module_css_default.input,
								value: name,
								onChange: (event) => {
									setName(event.target.value);
									pendingRequest.current = void 0;
								},
								disabled: saving,
								autoFocus: true
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: create_module_css_default.field,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [t("channelDescription"), t("optionalSuffix")] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Input, {
								className: create_module_css_default.input,
								value: description,
								placeholder: t("agentDescriptionPlaceholder"),
								onChange: (event) => {
									setDescription(event.target.value);
									pendingRequest.current = void 0;
								},
								disabled: saving
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("fieldset", {
							className: create_module_css_default.memberPicker,
							disabled: saving,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("legend", { children: t("channelMembersSection") }), members.map((status) => {
								const joined = joinedIds.has(status.member.memberId);
								const rowPending = membership.pending.has(status.member.memberId);
								const disabled = rowPending || !joined && status.availability !== "active";
								const rowError = membership.errors.get(status.member.memberId);
								return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamMemberRow, {
									status,
									action: {
										label: rowPending ? t("membershipUpdating") : joined ? t("removeFromChannel") : t("addToChannel"),
										disabled,
										onSelect: () => {
											membership.change({
												workspaceId: channel.workspaceId,
												channelRef: channel.channelRef,
												memberId: status.member.memberId,
												joined
											});
										}
									},
									...rowError === void 0 ? {} : { error: rowError },
									t
								}, status.member.memberId);
							})]
						}),
						error !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: create_module_css_default.error,
							role: "alert",
							children: error
						})
					]
				})
			});
		}
		//#endregion
		//#region src/client/TeamWorkspaceBrowser.tsx
		/**
		* The Inbox entry's icon with its unread mark. The quantity left this surface
		* and lives in the control's accessible name: the sidebar answers whether
		* anything is waiting at a glance, and the number — which moves on every fact —
		* is what a reader asks for on purpose. The mark hangs off the icon rather than
		* off the control, so the wide card and the 36px rail button put the same dot
		* on the same corner of the same glyph.
		*/
		function InboxMark({ unread }) {
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
				className: sidebar_module_css_default.inboxMark,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconQueueOutlineRegular, { size: 16 }), unread > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: sidebar_module_css_default.inboxDot,
					"data-team-inbox-dot": true,
					"aria-hidden": "true"
				})]
			});
		}
		function TeamWorkspaceBrowser({ wide, expandSidebar, navigation, selectWorkspace, selectChannel, selectInbox, t, useWorkspaces, loadMembers, loadInbox, subscribeChanges, subscribeReads, addMember, loadChannels, createChannel, updateChannel, archiveChannel, updateMember, recoverMember, archiveMember, joinWorkspace, leaveWorkspace, joinChannel, removeChannelMember, loadModels, openMemberSession }) {
			const navigationState = (0, react.useSyncExternalStore)(navigation.subscribe, navigation.getSnapshot, navigation.getSnapshot);
			const workspaces = useWorkspaces((state) => state.items);
			const selected = navigationState.workspaceId;
			const selectedId = selected !== void 0 && workspaces.some((workspace) => workspace.workspaceId === selected) ? selected : workspaces[0]?.workspaceId;
			const overviewIsCurrent = navigationState.channelRef === void 0 && navigationState.memberSessionId === void 0 && navigationState.inbox !== true;
			const inboxIsCurrent = navigationState.inbox === true && navigationState.memberSessionId === void 0;
			const [creatingAgents, setCreatingAgents] = (0, react.useState)([]);
			const [pendingSection, setPendingSection] = (0, react.useState)();
			const channelsRef = (0, react.useRef)(null);
			const agentsRef = (0, react.useRef)(null);
			const [inboxTotal, setInboxTotal] = (0, react.useState)(0);
			const inboxLabel = inboxTotal > 0 ? t("inboxTitleWithCount", { count: inboxTotal }) : t("inboxTitle");
			(0, react.useEffect)(() => {
				let disposed = false;
				let scheduled;
				const refresh = async () => {
					const results = await Promise.all(workspaces.map((workspace) => loadInbox({
						workspaceId: workspace.workspaceId,
						limit: 1
					})));
					if (disposed) return;
					setInboxTotal(results.reduce((sum, result) => result.ok ? sum + result.value.totalUnreadCount : sum, 0));
				};
				const schedule = () => {
					if (scheduled !== void 0) return;
					scheduled = setTimeout(() => {
						scheduled = void 0;
						refresh();
					}, 200);
				};
				refresh();
				const unsubscribe = subscribeChanges(void 0, (update) => {
					if (update.type === "changed") schedule();
				});
				const unsubscribeReads = subscribeReads(schedule);
				return () => {
					disposed = true;
					if (scheduled !== void 0) clearTimeout(scheduled);
					unsubscribe();
					unsubscribeReads();
				};
			}, [
				loadInbox,
				subscribeChanges,
				subscribeReads,
				workspaces
			]);
			(0, react.useEffect)(() => {
				if (navigationState.inbox === true) return;
				if (navigationState.mode === "team" && selectedId !== void 0 && selectedId !== selected) selectWorkspace(selectedId);
			}, [
				navigationState.inbox,
				navigationState.mode,
				selected,
				selectedId,
				selectWorkspace
			]);
			(0, react.useEffect)(() => {
				if (!wide || pendingSection === void 0) return;
				const node = pendingSection === "agents" ? agentsRef.current : channelsRef.current;
				setPendingSection(void 0);
				queueMicrotask(() => {
					node?.querySelector("button")?.focus();
				});
			}, [wide, pendingSection]);
			if (!wide) return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("nav", {
				className: sidebar_module_css_default.railWorkspace,
				"aria-label": t("workspaceSections"),
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
						label: inboxLabel,
						side: "right",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: sidebar_module_css_default.railButton,
							"aria-label": inboxLabel,
							"aria-current": inboxIsCurrent ? "page" : void 0,
							onClick: () => {
								selectInbox();
								expandSidebar();
							},
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(InboxMark, { unread: inboxTotal })
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
						label: t("channels"),
						side: "right",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: sidebar_module_css_default.railButton,
							"aria-label": t("channels"),
							onClick: () => {
								setPendingSection("channels");
								expandSidebar();
							},
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconListPenOutlineRegular, { size: 16 })
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Tooltip, {
						label: t("agents"),
						side: "right",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: sidebar_module_css_default.railButton,
							"aria-label": t("agents"),
							onClick: () => {
								setPendingSection("agents");
								expandSidebar();
							},
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconAgentPresetOutlineRegular, { size: 16 })
						})
					})
				]
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: sidebar_module_css_default.workspaceBrowser,
				"aria-label": t("workspaces"),
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
						type: "button",
						className: sidebar_module_css_default.inboxCard,
						"aria-label": inboxLabel,
						"aria-current": inboxIsCurrent ? "page" : void 0,
						onClick: selectInbox,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(InboxMark, { unread: inboxTotal }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: sidebar_module_css_default.inboxCardLabel,
							children: t("inboxTitle")
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamWorkspaceSelector, {
						workspaces,
						selectedId,
						current: overviewIsCurrent,
						onSelect: selectWorkspace,
						t
					}),
					selectedId !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: sidebar_module_css_default.workspaceSection,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							ref: channelsRef,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamChannelsPanel, {
								workspaceId: selectedId,
								loadMembers,
								loadChannels,
								subscribeChanges,
								createChannel,
								updateChannel,
								archiveChannel,
								joinChannel,
								removeChannelMember,
								creatingAgents: creatingAgents.filter((request) => request.workspaceId === selectedId),
								...navigationState.memberSessionId !== void 0 || navigationState.channelRef === void 0 ? {} : { selectedChannelRef: navigationState.channelRef },
								selectChannel,
								t
							}, selectedId)
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							ref: agentsRef,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TeamAgentsPanel, {
								workspaceId: selectedId,
								loadMembers,
								subscribeChanges,
								addMember,
								updateMember,
								recoverMember,
								archiveMember,
								joinWorkspace,
								leaveWorkspace,
								loadModels,
								...navigationState.memberSessionId === void 0 ? {} : { memberSessionId: navigationState.memberSessionId },
								openMemberSession,
								onCreatingChange: (request, creating) => {
									setCreatingAgents((current) => creating ? [...current.filter((item) => item.requestId !== request.requestId), request] : current.filter((item) => item.requestId !== request.requestId));
								},
								t
							}, selectedId)
						})]
					})
				]
			});
		}
		//#endregion
		//#region src/client/locales.ts
		const zh = {
			team: "团队",
			backToConversations: "对话",
			workspaces: "工作区",
			workspaceSelectorWithValue: "工作区，{title}",
			channels: "频道",
			agents: "Agents",
			members: "成员",
			selectChannelHint: "从左侧选择一个频道开始协作",
			empty: "选择一个工作区开始团队协作",
			teamMode: "团队模式",
			workspaceSections: "工作区内容",
			addAgent: "添加 Agent",
			importAgentTitle: "从其他 Workspace 引入",
			importAgent: "引入",
			importingAgent: "引入中…",
			importAgentNotice: "选择已有 Agent 加入当前 Workspace。身份、记忆与会话保持不变；Channel 仍需另行加入。",
			emptyImportAgents: "没有可引入的 Agent。",
			withdrawAgent: "从此 Workspace 撤回",
			withdrawAgentTitle: "撤回 {name}？",
			withdrawAgentNotice: "仅撤出当前 Workspace：退出此处所有 Channel、释放活跃 Claim 并清除 Attention。其他 Workspace 的工作、会话和私有记忆不受影响。",
			archiveOtherWorkspaces: "同时从其他 {count} 个 Workspace 收起。",
			cancel: "取消",
			close: "关闭",
			copyCode: "复制",
			copiedCode: "已复制",
			markdownFootnotes: "脚注",
			retry: "重试",
			agentName: "名称",
			agentDescription: "说明",
			createAgent: "创建 Agent",
			creatingAgent: "正在创建…",
			loadingAgents: "正在加载 Agents…",
			emptyAgents: "还没有 Agent",
			statusAvailable: "可用",
			statusWorking: "工作中",
			statusError: "错误",
			statusUnavailable: "不可用",
			addChannel: "新建频道",
			inboxTitle: "收件箱",
			inboxTitleWithCount: "收件箱，{count} 条未读",
			loadingInbox: "正在加载收件箱…",
			inboxEmptyTitle: "收件箱是空的",
			inboxEmptyHint: "你参与的 Thread 有新活动、或有人提到你时，会出现在这里",
			inboxTimeYesterday: "昨天",
			inboxHeaderThreads: "{count} 个 Thread",
			inboxHeaderUnread: "{count} 条未读",
			inboxHeaderMentions: "{count} 条提及",
			inboxRowUnread: "{count} 条未读",
			inboxRowUnreadMentions: "{count} 条未读，其中 {mentions} 条提及",
			inboxRowActor: "最新来自 {name}",
			inboxSectionNeedsMe: "需要我",
			inboxSectionRecent: "最近活跃",
			channelName: "名称",
			channelDescription: "说明",
			initialMembers: "初始成员",
			createChannel: "创建频道",
			creatingChannel: "正在创建…",
			loadingChannels: "正在加载频道…",
			emptyChannels: "还没有频道",
			manageMembers: "管理成员",
			editChannel: "编辑频道",
			editAgent: "编辑 Agent",
			resumeAgent: "恢复",
			restartAgent: "重启",
			restartStillUnavailable: "重启已执行，成员仍不可用：{diagnostic}",
			restartFailed: "重启执行失败：{message}",
			archiveAgent: "归档",
			archiveAgentTitle: "归档 Agent：{name}",
			archiveAgentNotice: "将把 {name} 从所有列表收起：会话与私有记忆保留在磁盘上、活跃 Claim 会释放，但暂无恢复入口。",
			archiveAgentConfirm: "归档",
			archiveChannel: "归档频道",
			archiveChannelTitle: "归档频道：{name}",
			archiveChannelNotice: "将把 {name} 及其全部讨论从所有列表收起：数据保留、所有成员在此频道的活跃 Claim 会释放，但暂无恢复入口。",
			archiveChannelConfirm: "归档频道",
			archiveChannelFailed: "归档频道失败：{message}",
			optionalSuffix: "（可选）",
			agentDescriptionPlaceholder: "留空则暂无描述",
			membersPickerEmpty: "选择初始成员",
			membersPickerCount: "已选 {count} 个成员",
			reasoningEffort: "推理强度",
			effortFollowDefault: "跟随模型默认",
			attachFiles: "添加附件",
			removeFile: "移除 {name}",
			attachmentExpired: "文件已过期清理",
			viewImage: "查看大图 {name}",
			expandMessage: "展开全文",
			collapseMessage: "收起",
			actionsChannel: "{name} 的操作",
			actionsAgent: "{name} 的操作",
			editSave: "保存",
			editSaving: "保存中…",
			channelMembersSection: "频道成员",
			memberModel: "模型",
			modelFollowDefault: "跟随全局默认",
			modelsLoading: "正在加载模型目录…",
			modelsLoadFailed: "模型目录加载失败：{message}",
			openAgentSession: "打开 {name} 的会话",
			channelMembers: "频道成员",
			memberCount: "{count} 位成员",
			onlineCount: "{count} 位在线",
			addToChannel: "添加",
			removeFromChannel: "移除",
			membershipUpdating: "更新中…",
			memberUnavailableReason: "当前不可用，不能加入频道",
			memberCreatingReason: "正在创建，完成前不能加入频道",
			emptyMessages: "还没有消息",
			emptyMessagesHint: "发送第一条消息，开始这次协作",
			timelineLabel: "消息时间线",
			taskClosedNotice: "任务已关闭，重新打开后可继续讨论",
			human: "Human",
			humanSettingsNav: "我的资料",
			humanSettingsTitle: "我的资料",
			humanSettingsIntro: "这是 Agent Team 的资料页：名字用在 Team 的消息与成员列表里，头像出现在你发出的消息旁。",
			humanSettingsName: "名字",
			humanSettingsNameHint: "Agents 用这个名字 @ 到你；改名只对之后的消息生效。",
			humanSettingsNameEmpty: "名字不能为空。",
			humanSettingsNameFailed: "名字没保存上：{message}",
			humanSettingsAvatar: "头像",
			humanSettingsAvatarHint: "只收图片，最大 10MB；移除或损坏时回退为默认头像。",
			humanSettingsSave: "保存",
			humanSettingsSaving: "正在保存…",
			humanSettingsUpload: "上传头像",
			humanSettingsUploading: "正在上传…",
			humanSettingsReplace: "更换头像",
			humanSettingsRemoveAvatar: "移除头像",
			humanSettingsAvatarNotImage: "只收图片文件。",
			humanSettingsAvatarTooLarge: "图片不能超过 10MB。",
			humanSettingsAvatarFailed: "头像没能保存：{message}",
			humanSettingsLoading: "正在载入资料…",
			humanSettingsUnavailable: "资料读不出来：{message}",
			humanSettingsVersion: "版本 {version}",
			humanSettingsUpdateAvailable: "有新版本 {version}，去查看发布说明",
			environmentOkTitle: "在支持范围内",
			environmentOkDetail: "正在运行的 DSH {version} 在我们声明的支持范围内。",
			environmentOutOfRangeTitle: "不在支持范围内",
			environmentOutOfRangeDetail: "正在运行的 DSH {version} 不在我们声明的支持范围内——这套组合未经我们认证，可能出问题。",
			environmentRange: "支持范围：{lower} 起、{upper} 之前。",
			environmentTested: "我们实测认证的组合：Agent Team {bundle} × DSH {dsh}。",
			environmentUndeterminedTitle: "无法判定运行环境",
			environmentUndeterminedDetail: "读不到正在运行的 DSH 版本，或无法确定我们的支持范围，因此不做判断。",
			environmentReleaseNotes: "查看发布说明",
			taskStatusTodo: "待处理",
			taskStatusInProgress: "进行中",
			taskStatusInReview: "待验收",
			taskStatusDone: "已完成",
			taskStatusClosed: "已关闭",
			taskLabel: "Task #{number}",
			openTask: "打开 Task #{number}",
			openThread: "打开讨论",
			openTaskUnread: "打开 Task #{number}（{count} 条新动态）",
			openThreadUnread: "打开讨论（{count} 条新动态）",
			threadLabel: "讨论",
			channelLabel: "频道 · {name}",
			memberLabel: "成员 · @{name}",
			recentActivity: "最近活动 {time}",
			replyAction: "回复",
			claimers: "由 {names} 处理",
			asTask: "作为任务",
			promoteToTask: "转为 Task",
			promotingTask: "正在转为 Task…",
			mentionSuggestions: "提及成员建议",
			mentionAll: "通知所有成员（{count}）",
			messageDraft: "消息内容",
			composerNotify: "将通知：{ids}",
			messagePlaceholder: "写一条消息…",
			replyPlaceholder: "回复此 Thread…",
			sendMessage: "发送",
			sendingMessage: "发送中…",
			loadOlder: "加载更早消息",
			backToChannel: "返回频道",
			backToChannels: "返回频道列表",
			backToWorkspace: "返回工作区",
			loadingThread: "正在加载 Thread…",
			unreadBoundary: "以下是本次打开收到的更新",
			newUpdatesJump: "↓ {count} 条新更新",
			autoReadIncomplete: "仍有未读更新未能自动读取",
			olderHistory: "更早历史",
			runtimeRisk: "当前运行风险",
			riskClassSessionRefused: "会话被拒绝",
			riskClassSessionUnreadable: "会话不可读",
			riskClassPresetComposition: "预设装配失败",
			riskClassRollover: "上下文交接中",
			riskClassRuntime: "运行时故障",
			riskClassActivation: "激活失败",
			riskSessionRefused: "{member} 当前不可用",
			riskSessionUnreadable: "{member} 的会话无法读取",
			riskPresetComposition: "{member} 的预设无法装配",
			riskRollover: "{member} 正在交接上下文",
			riskRuntime: "{member} 遇到运行时故障",
			riskActivation: "{member} 激活失败",
			acceptTask: "验收",
			closeTask: "关闭任务",
			reopenTask: "重新打开",
			claims: "Claims",
			noClaims: "还没有 Claim",
			claimStateActive: "进行中",
			claimStateDone: "已完成",
			claimStateReleased: "已释放",
			memberUnknown: "成员",
			activityClaimed: "{actor} 认领了「{direction}」",
			activityClaimDone: "{actor} 完成了「{direction}」",
			activityClaimReleased: "{actor} 释放了「{direction}」",
			activityClaimsReleased: "{actor} 因成员权限变化释放了 {count} 个 Claim",
			activityAccepted: "{actor} 验收了此 Task",
			activityAcceptedWithClaims: "{actor} 验收了此 Task，并一并完成了 {count} 个未完成 Claim",
			activityPromoted: "{actor} 为此讨论创建了 Task",
			acceptEarlyTitle: "提前验收任务",
			acceptEarlyBody: "将验收本 Task，并把以下 {count} 个未完成的 Claim 一并标记为完成：",
			acceptingTask: "验收中…",
			activityClosed: "{actor} 关闭了此 Task",
			activityReopened: "{actor} 重新打开了此 Task",
			mentionConfirmation: "提及未关注成员需要确认，再次发送以继续",
			memberNotFollowing: "这些成员还未关注此 Thread：{ids}",
			unreadRequired: "请先读取 {count} 条未读更新，再继续修改。",
			staleRevision: "Thread 已发生变化，请按最新状态重试。"
		};
		const en = {
			team: "Team",
			backToConversations: "Conversations",
			workspaces: "Workspaces",
			workspaceSelectorWithValue: "Workspace, {title}",
			channels: "Channels",
			agents: "Agents",
			members: "Members",
			selectChannelHint: "Select a Channel on the left to start collaborating",
			empty: "Select a workspace to start team work",
			teamMode: "Team mode",
			workspaceSections: "Workspace sections",
			addAgent: "Add Agent",
			importAgentTitle: "Bring in from another Workspace",
			importAgent: "Bring in",
			importingAgent: "Joining…",
			importAgentNotice: "Choose an existing Agent to join this Workspace. Identity, memory, and session stay unchanged; join Channels separately.",
			emptyImportAgents: "No Agents available to bring in.",
			withdrawAgent: "Withdraw from this Workspace",
			withdrawAgentTitle: "Withdraw {name}?",
			withdrawAgentNotice: "Leave only this Workspace: exit its Channels, release active Claims, and clear Attention. Work elsewhere, the session, and private memory stay unchanged.",
			archiveOtherWorkspaces: "Also hides this Agent in {count} other Workspace(s).",
			cancel: "Cancel",
			close: "Close",
			copyCode: "Copy",
			copiedCode: "Copied",
			markdownFootnotes: "Footnotes",
			retry: "Retry",
			agentName: "Name",
			agentDescription: "Description",
			createAgent: "Create Agent",
			creatingAgent: "Creating…",
			loadingAgents: "Loading Agents…",
			emptyAgents: "No Agents yet",
			statusAvailable: "Available",
			statusWorking: "Working",
			statusError: "Error",
			statusUnavailable: "Unavailable",
			addChannel: "New Channel",
			inboxTitle: "Inbox",
			inboxTitleWithCount: "Inbox, {count} unread",
			loadingInbox: "Loading Inbox…",
			inboxEmptyTitle: "Your Inbox is empty",
			inboxEmptyHint: "Threads you take part in appear here when they have new activity or mention you",
			inboxTimeYesterday: "Yesterday",
			inboxHeaderThreads: "{count} Thread(s)",
			inboxHeaderUnread: "{count} unread",
			inboxHeaderMentions: "{count} mention(s)",
			inboxRowUnread: "{count} unread",
			inboxRowUnreadMentions: "{count} unread, {mentions} mention(s)",
			inboxRowActor: "Latest from {name}",
			inboxSectionNeedsMe: "Needs me",
			inboxSectionRecent: "Recently active",
			channelName: "Name",
			channelDescription: "Description",
			initialMembers: "Initial members",
			createChannel: "Create Channel",
			creatingChannel: "Creating…",
			loadingChannels: "Loading Channels…",
			emptyChannels: "No Channels yet",
			manageMembers: "Manage members",
			editChannel: "Edit Channel",
			editAgent: "Edit Agent",
			resumeAgent: "Resume",
			restartAgent: "Restart",
			restartStillUnavailable: "Restart ran, but the Member is still unavailable: {diagnostic}",
			restartFailed: "Restart failed: {message}",
			archiveAgent: "Archive",
			archiveAgentTitle: "Archive Agent: {name}",
			archiveAgentNotice: "This hides {name} from every list: the session log and private memory stay on disk and active Claims release, but there is no restore entry point yet.",
			archiveAgentConfirm: "Archive",
			archiveChannel: "Archive Channel",
			archiveChannelTitle: "Archive Channel: {name}",
			archiveChannelNotice: "This hides {name} and all of its discussions from every list: the data stays, every Member's active Claims in this Channel release, but there is no restore entry point yet.",
			archiveChannelConfirm: "Archive Channel",
			archiveChannelFailed: "Failed to archive Channel: {message}",
			optionalSuffix: " (optional)",
			agentDescriptionPlaceholder: "Leave empty if not needed",
			membersPickerEmpty: "Choose initial members",
			membersPickerCount: "{count} selected",
			reasoningEffort: "Reasoning effort",
			effortFollowDefault: "Follow model default",
			attachFiles: "Add attachments",
			removeFile: "Remove {name}",
			attachmentExpired: "File expired and cleaned up",
			viewImage: "View image {name}",
			expandMessage: "Show more",
			collapseMessage: "Show less",
			actionsChannel: "{name} actions",
			actionsAgent: "{name} actions",
			editSave: "Save",
			editSaving: "Saving…",
			channelMembersSection: "Channel members",
			memberModel: "Model",
			modelFollowDefault: "Follow global default",
			modelsLoading: "Loading model catalog…",
			modelsLoadFailed: "Failed to load the model catalog: {message}",
			openAgentSession: "Open {name} session",
			channelMembers: "Channel members",
			memberCount: "{count} members",
			onlineCount: "{count} online",
			addToChannel: "Add",
			removeFromChannel: "Remove",
			membershipUpdating: "Updating…",
			memberUnavailableReason: "Unavailable members cannot join a Channel",
			memberCreatingReason: "Creating; cannot join a Channel until complete",
			emptyMessages: "No messages yet",
			emptyMessagesHint: "Send the first message to start this collaboration",
			timelineLabel: "Message timeline",
			taskClosedNotice: "This task is closed; reopen it to continue the discussion",
			human: "Human",
			humanSettingsNav: "Profile",
			humanSettingsTitle: "Profile",
			humanSettingsIntro: "This is your Agent Team profile: the name applies to Team messages and member lists, and the avatar appears beside your messages.",
			humanSettingsName: "Name",
			humanSettingsNameHint: "Agents @ you by this name; a rename applies to later messages only.",
			humanSettingsNameEmpty: "A name is required.",
			humanSettingsNameFailed: "The name was not saved: {message}",
			humanSettingsAvatar: "Avatar",
			humanSettingsAvatarHint: "Images only, up to 10MB; removing it — or unreadable bytes — falls back to the default avatar.",
			humanSettingsSave: "Save",
			humanSettingsSaving: "Saving…",
			humanSettingsUpload: "Upload avatar",
			humanSettingsUploading: "Uploading…",
			humanSettingsReplace: "Replace avatar",
			humanSettingsRemoveAvatar: "Remove avatar",
			humanSettingsAvatarNotImage: "Images only.",
			humanSettingsAvatarTooLarge: "The image must be 10MB or smaller.",
			humanSettingsAvatarFailed: "The avatar was not saved: {message}",
			humanSettingsLoading: "Loading profile…",
			humanSettingsUnavailable: "The profile could not be read: {message}",
			humanSettingsVersion: "Version {version}",
			humanSettingsUpdateAvailable: "New version {version} available — see the release notes",
			environmentOkTitle: "Within the supported range",
			environmentOkDetail: "The running DSH {version} is within the range we declare support for.",
			environmentOutOfRangeTitle: "Outside the supported range",
			environmentOutOfRangeDetail: "The running DSH {version} is outside the range we declare support for — we have not certified this combination and it may misbehave.",
			environmentRange: "Support range: from {lower} up to, but not including, {upper}.",
			environmentTested: "Certified combination: Agent Team {bundle} × DSH {dsh}.",
			environmentUndeterminedTitle: "Environment cannot be determined",
			environmentUndeterminedDetail: "The running DSH version could not be read, or our support range could not be established, so no judgement is made.",
			environmentReleaseNotes: "See the release notes",
			taskStatusTodo: "To do",
			taskStatusInProgress: "In progress",
			taskStatusInReview: "In review",
			taskStatusDone: "Done",
			taskStatusClosed: "Closed",
			taskLabel: "Task #{number}",
			openTask: "Open Task #{number}",
			openThread: "Open thread",
			openTaskUnread: "Open Task #{number} ({count} new updates)",
			openThreadUnread: "Open thread ({count} new updates)",
			threadLabel: "Thread",
			channelLabel: "Channel · {name}",
			memberLabel: "Member · @{name}",
			recentActivity: "Last activity {time}",
			replyAction: "Reply",
			claimers: "Handled by {names}",
			asTask: "As task",
			promoteToTask: "Convert to Task",
			promotingTask: "Converting to Task…",
			mentionSuggestions: "Mention suggestions",
			mentionAll: "Notify all members ({count})",
			messageDraft: "Message",
			composerNotify: "Will notify: {ids}",
			messagePlaceholder: "Write a message…",
			replyPlaceholder: "Reply on this Thread…",
			sendMessage: "Send",
			sendingMessage: "Sending…",
			loadOlder: "Load older messages",
			backToChannel: "Back to Channel",
			backToChannels: "All channels",
			backToWorkspace: "Back to Workspace",
			loadingThread: "Loading Thread…",
			unreadBoundary: "Updates received when you opened this Thread",
			newUpdatesJump: "↓ {count} new update(s)",
			autoReadIncomplete: "Some unread updates could not be read automatically",
			olderHistory: "Older history",
			runtimeRisk: "Current runtime risk",
			riskClassSessionRefused: "Session refused",
			riskClassSessionUnreadable: "Session unreadable",
			riskClassPresetComposition: "Preset composition failed",
			riskClassRollover: "Context rollover",
			riskClassRuntime: "Runtime failure",
			riskClassActivation: "Activation failed",
			riskSessionRefused: "{member} is unavailable",
			riskSessionUnreadable: "{member} has an unreadable Session",
			riskPresetComposition: "{member} has an uncomposable preset",
			riskRollover: "{member} is rolling over its context",
			riskRuntime: "{member} hit a runtime failure",
			riskActivation: "{member} failed to activate",
			acceptTask: "Accept",
			closeTask: "Close task",
			reopenTask: "Reopen",
			claims: "Claims",
			noClaims: "No Claims yet",
			claimStateActive: "Active",
			claimStateDone: "Done",
			claimStateReleased: "Released",
			memberUnknown: "Member",
			activityClaimed: "{actor} claimed “{direction}”",
			activityClaimDone: "{actor} completed “{direction}”",
			activityClaimReleased: "{actor} released “{direction}”",
			activityClaimsReleased: "{actor} released {count} Claim(s) after a membership change",
			activityAccepted: "{actor} accepted this Task",
			activityAcceptedWithClaims: "{actor} accepted this Task and completed {count} unfinished Claims with it",
			activityPromoted: "{actor} created a Task for this Thread",
			acceptEarlyTitle: "Accept Task early",
			acceptEarlyBody: "This accepts the Task and marks the following {count} unfinished Claims as done:",
			acceptingTask: "Accepting…",
			activityClosed: "{actor} closed this Task",
			activityReopened: "{actor} reopened this Task",
			mentionConfirmation: "Mentioning an unfollowed member requires confirmation; send again to continue",
			memberNotFollowing: "These Members do not follow this Thread yet: {ids}",
			unreadRequired: "Read {count} unread update(s) before changing this Thread.",
			staleRevision: "This Thread changed; retry using the current state."
		};
		//#endregion
		//#region src/client/index.ts
		const NS = "team";
		const inject = [
			"slots",
			"workspaces",
			"layout",
			"locale",
			"remote",
			"remote.session",
			"sessions",
			"connection",
			"conversation",
			"uiWorkspace"
		];
		/**
		* 0.1.7 moved the conversation selection into the workspace service: the
		* rendered session is the one holding its `mainView` reference (the shipped
		* consumers read the same projection), so the Team client reads the selection
		* through retention instead of a service-owned `current`.
		*/
		function currentMainSessionId(ctx) {
			const sessions = ctx.sessions;
			return Object.values(sessions.list.getSnapshot().byId).find((session) => (session.retainedBy.mainView ?? 0) > 0)?.id;
		}
		/**
		* Session ids this client opened as Member views, per client instance. The
		* 0.1.7 workspace service exposes no clear, so a dead return target leaves
		* the departed Member selection in place; excluding Member sessions from the
		* next capture keeps that stale selection from becoming a false return
		* target.
		*/
		const openedMemberSessions = /* @__PURE__ */ new WeakMap();
		function registerModeShadow(ctx, navigation, changes, reads, drafts, humanIdentity, name, component, extraInject, entryKey) {
			const openMemberSessionImpl = (sessionId) => {
				const snapshot = navigation.getSnapshot();
				const current = currentMainSessionId(ctx);
				const memberSessions = openedMemberSessions.get(ctx) ?? /* @__PURE__ */ new Set();
				openedMemberSessions.set(ctx, memberSessions);
				memberSessions.add(sessionId);
				const returnTo = snapshot.memberSessionId === void 0 && current !== void 0 && current !== sessionId && !memberSessions.has(current) ? current : void 0;
				navigation.actions().enterMemberSession(sessionId, returnTo);
				ctx.uiWorkspace.openSession(sessionId);
			};
			const sharedRemotes = {
				loadChannels: (request) => ctx.remote.agentTeam.view(request),
				loadInbox: (request) => ctx.remote.agentTeam.inbox(request),
				subscribeReads: (listener) => reads.subscribe(listener),
				subscribeChanges: (scope, listener) => changes.subscribe(scope, listener),
				drafts,
				humanIdentity,
				loadMembers: (request) => ctx.remote.agentTeam.members(request),
				joinChannel: (request) => ctx.remote.agentTeam.joinChannel(request),
				removeChannelMember: (request) => ctx.remote.agentTeam.removeChannelMember(request),
				updateChannel: (request) => ctx.remote.agentTeam.updateChannel(request),
				archiveChannel: (request) => ctx.remote.agentTeam.archiveChannel(request),
				updateMember: (request) => ctx.remote.agentTeam.updateMember(request),
				recoverMember: (request) => ctx.remote.agentTeam.recoverMember(request),
				clearMemberContext: (request) => ctx.remote.agentTeam.clearMemberContext(request),
				archiveMember: (request) => ctx.remote.agentTeam.archiveMember(request),
				joinWorkspace: (request) => ctx.remote.agentTeam.joinWorkspace(request),
				leaveWorkspace: (request) => ctx.remote.agentTeam.leaveWorkspace(request),
				loadModels: () => ctx.remote.session.modelCatalog(),
				openMemberSession: openMemberSessionImpl
			};
			ctx.slots.inject(name, () => {
				let dispose;
				const reconcile = () => {
					const snapshot = navigation.getSnapshot();
					const active = snapshot.mode === "team" && !(name === "main" && snapshot.memberSessionId !== void 0);
					if (active && dispose === void 0) dispose = ctx.slots.register({
						name,
						...entryKey === void 0 ? {} : { key: entryKey },
						priority: -100,
						locale: NS,
						inject: () => ({
							navigation,
							...extraInject?.(),
							...navigation.actions(),
							...sharedRemotes,
							...name === "main" ? {
								readThread: async (request) => {
									const result = await ctx.remote.agentTeam.readThread(request);
									if (result.ok) reads.bump();
									return result;
								},
								loadThreadHistory: (request) => ctx.remote.agentTeam.threadHistory(request),
								threadObservations: (request) => ctx.remote.agentTeam.threadObservations(request),
								sendMessage: (request) => ctx.remote.agentTeam.sendMessage(request),
								putAttachment: (request) => ctx.remote.agentTeam.putAttachment(request),
								getAttachment: (request) => ctx.remote.agentTeam.getAttachment(request),
								reply: (request) => ctx.remote.agentTeam.reply(request),
								changeTask: (request) => ctx.remote.agentTeam.changeTask(request),
								promoteThread: (request) => ctx.remote.agentTeam.promoteThread(request),
								resolveTaskRefs: (request) => ctx.remote.agentTeam.resolveTaskRefs(request),
								resolveThreadRefs: (request) => ctx.remote.agentTeam.resolveThreadRefs(request)
							} : {},
							...name === "sidebar.workspaces" ? {
								addMember: (request) => ctx.remote.agentTeam.addMember(request),
								createChannel: (request) => ctx.remote.agentTeam.createChannel(request)
							} : {}
						})
					}, component);
					else if (!active && dispose !== void 0) {
						dispose();
						dispose = void 0;
					}
				};
				const unsubscribe = navigation.subscribe(reconcile);
				reconcile();
				return () => {
					unsubscribe();
					dispose?.();
					dispose = void 0;
				};
			});
		}
		function applyUi(ctx) {
			ctx.effect(() => ctx.locale.register(NS, {
				zh,
				en
			}), "agent-team: dictionaries");
			const navigation = new TeamNavigation();
			const disposeNavigation = ctx.reflect.provide("teamNavigation", navigation);
			const drafts = new TeamDraftStore();
			const disposeDrafts = ctx.reflect.provide("teamDrafts", drafts);
			const humanIdentity = new TeamHumanIdentity({
				loadProfile: () => ctx.remote.agentTeam.humanProfile({}),
				loadAvatarUrl: async (avatarRef) => {
					const result = await ctx.remote.agentTeam.getHumanAvatar({ avatarRef });
					if (!result.ok || !result.value.mediaType.startsWith("image/")) return null;
					return `data:${result.value.mediaType};base64,${result.value.bytesBase64}`;
				}
			});
			const environment = new TeamEnvironmentCheck({ loadEnvironment: () => ctx.remote.agentTeam.environment({}) });
			ctx.effect(() => () => {
				navigation.dispose();
				drafts.dispose();
				humanIdentity.dispose();
				environment.dispose();
				disposeNavigation();
				disposeDrafts();
			}, "agent-team: navigation service");
			ctx.effect(() => {
				let previous = navigation.getSnapshot();
				const restore = () => {
					const snapshot = navigation.getSnapshot();
					const departed = previous.memberSessionId;
					const returnTo = previous.returnToSessionId;
					previous = snapshot;
					if (departed === void 0 || snapshot.memberSessionId !== void 0) return;
					if (currentMainSessionId(ctx) !== departed) return;
					if (returnTo !== void 0 && ctx.sessions.list.getSnapshot().byId[returnTo] !== void 0) ctx.uiWorkspace.openSession(returnTo);
				};
				const unsubscribe = navigation.subscribe(restore);
				return () => {
					unsubscribe();
					restore();
				};
			}, "agent-team: member session restore");
			ctx.effect(() => {
				const releaseMainPanel = () => {
					if (navigation.getSnapshot().mode !== "team") return;
					if (ctx.layout.panelInfo.getSnapshot().activePanelId === null) return;
					ctx.layout.selectPanel(null);
				};
				const unsubscribe = navigation.subscribe(releaseMainPanel);
				releaseMainPanel();
				return unsubscribe;
			}, "agent-team: main panel ownership");
			const changes = new TeamChangeStream(ctx.remote);
			ctx.effect(() => () => changes.dispose(), "agent-team: change subscriptions");
			ctx.on("connection/reset", () => {
				changes.recover();
			});
			const reads = new TeamReadStream();
			const loadMemberGroups = async () => {
				const workspaces = ctx.workspaces.list.getSnapshot().items;
				return (await Promise.all(workspaces.map(async (workspace) => {
					const result = await ctx.remote.agentTeam.members({ workspaceId: workspace.workspaceId });
					if (!result.ok) throw new Error(result.error.message);
					const members = result.value.filter((status) => status.member.state !== "inactive" && status.member.state !== "archived");
					return {
						workspaceId: workspace.workspaceId,
						workspaceTitle: workspace.title,
						members
					};
				}))).filter((group) => group.members.length > 0);
			};
			ctx.slots.inject("sidebar.footer.action", () => ctx.slots.register({
				name: "sidebar.footer.action",
				id: "agent-team",
				order: 100,
				locale: NS,
				inject: () => ({
					navigation,
					...navigation.actions(),
					leaveTeam: () => {
						navigation.actions().exitMemberSession();
						navigation.actions().leaveTeam();
					}
				})
			}, TeamFooterAction));
			registerModeShadow(ctx, navigation, changes, reads, drafts, humanIdentity, "sidebar.workspaces", TeamWorkspaceBrowser);
			registerModeShadow(ctx, navigation, changes, reads, drafts, humanIdentity, "main", TeamConversation, void 0, "conversation");
			registerModeShadow(ctx, navigation, changes, reads, drafts, humanIdentity, "sidebar.settings", TeamMembersAction, () => ({ loadMemberGroups }));
			ctx.slots.inject("settings.section", () => ctx.slots.register({
				name: "settings.section",
				id: "team-human",
				order: 5,
				label: () => ctx.locale.bind(NS)("humanSettingsNav"),
				locale: NS,
				inject: () => ({
					identity: humanIdentity,
					environment,
					saveName: async (name) => {
						const saved = await ctx.remote.agentTeam.setHumanProfile({ name });
						if (!saved.ok) return saved.error.message;
						await humanIdentity.refresh();
					},
					uploadAvatar: async (file) => {
						const put = await ctx.remote.agentTeam.putHumanAvatar({
							name: file.name,
							...file.type === "" ? {} : { mediaType: file.type },
							bytesBase64: bytesToBase64(new Uint8Array(await file.arrayBuffer()))
						});
						if (!put.ok) return put.error.message;
						const saved = await ctx.remote.agentTeam.setHumanProfile({ avatarRef: put.value.avatarRef });
						if (!saved.ok) return saved.error.message;
						await humanIdentity.refresh();
					},
					removeAvatar: async () => {
						const { avatarRef } = humanIdentity.getSnapshot();
						if (avatarRef === void 0) return void 0;
						await ctx.remote.agentTeam.removeHumanAvatar({ avatarRef });
						const cleared = await ctx.remote.agentTeam.setHumanProfile({ avatarRef: null });
						if (!cleared.ok) return cleared.error.message;
						await humanIdentity.refresh();
					}
				})
			}, HumanSettingsSection));
		}
		async function apply(ctx) {
			const disposeRemote = await ctx.remote.$mount(TYPERT_REMOTE);
			ctx.effect(() => () => {
				disposeRemote();
			}, "agent-team: remote");
			ctx.inject(["remote.agentTeam"], (ready) => {
				applyUi(ready);
			});
		}
		//#endregion
		exports.TeamNavigation = TeamNavigation;
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map