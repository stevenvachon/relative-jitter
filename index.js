const SCALE = 1_000_000;

/** @param {number} n */
const fromFixed = n => n / SCALE;

/** @param {number} n */
const toFixed = n => Math.round(n * SCALE);

/**
 * @param {number} a
 * @param {number} b
 */
const multiplyFixed = (a, b) => Math.round(fromFixed(a * b));

/** @param {number} n */
const percentToDecimal = n => n / 100;

/**
 * Apply bounded, relative jitter to a numeric value; useful for natural timing and motion variation.
 * @param {number} value The original value.
 * @param {number} min The minimum percentage variation applied to `value`.
 * @param {number} max The maximum percentage variation applied to `value`.
 * @param {() => number} random A random number generator returning a float between 0 and 1. Defaults to `Math.random`.
 * @example
 * relativeJitter(1000, -50, 50); // -50% min, +50% max
 * @todo Remove default value comments when possible: https://github.com/microsoft/TypeScript/issues/16665
 */
const relativeJitter = (value, min, max, random = Math.random) => {
  value = toFixed(value);
  min = toFixed(percentToDecimal(min));
  max = toFixed(percentToDecimal(max));
  const percent = min + multiplyFixed(toFixed(random()), max - min);
  return Math.max(0, fromFixed(multiplyFixed(value, toFixed(1) + percent)));
};

export default relativeJitter;
