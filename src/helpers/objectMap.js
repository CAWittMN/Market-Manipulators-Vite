/**
 * Helper function to map over an object.
 * Creates a new object with the same keys as the original,
 * The callback function can take three arguments.
 * The value of each key, the name of each key, and the index of each key.
 * Using these arguments, what the callback returns will be the new value of the key.
 * @param {object} obj
 * @param {function} fn
 * @returns
 */
const objectMap = (obj, fn) =>
  Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]));

export default objectMap;
