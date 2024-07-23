const _toString = Object.prototype.toString;
export const isString = (value) => _toString.call(value) === "[object String]";
export const isNumber = (value) => _toString.call(value) === "[object Number]";
export const isBoolean = (value) =>
  _toString.call(value) === "[object Boolean]";
export const isNull = (value) => _toString.call(value) === "[object Null]";
export const isUndefined = (value) =>
  _toString.call(value) === "[object Undefined]";

export const isNullOrUndefined = (value) => isUndefined(value) || isNull(value);

export const isPlainObject = (value) =>
  !isNull(value) && _toString.call(value) === "[object Object]";

export const isPrimary = (value) =>
  isString(value) ||
  isNumber(value) ||
  isBoolean(value) ||
  isNullOrUndefined(value);

export const isFunction = (value) => typeof value === "function";

export const isObject = (value) => !isNull(value) && typeof value === "object";
