import { expect, it } from 'vitest';
import relativeJitter from './index.js';

it('uses Math.random() by default', () =>
  [
    [100, -50, 50],
    [0, -10, 10],
    [-1, -10, 10],
  ].forEach(([value, min, max]) => {
    const result = relativeJitter(value, min, max);
    expect(result).toBeGreaterThanOrEqual(0); // Never negative
    expect(result).toBeGreaterThanOrEqual(value + min);
    expect(result).toBeLessThanOrEqual(value + max);
  }));

it('supports a custom randomizer', () =>
  [
    { input: [100, -50, 50], output: 60 },
    { input: [0, -10, 10], output: 0 },
    { input: [-1, -10, 10], output: 0 },
  ].forEach(({ input: [inputValue, inputMin, inputMax], output }) => {
    const inputRandomizer = () => 0.1;
    const result = relativeJitter(inputValue, inputMin, inputMax, inputRandomizer);
    expect(result).toBe(output);
  }));
