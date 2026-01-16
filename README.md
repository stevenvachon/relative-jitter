# relative-jitter [![NPM Version][npm-image]][npm-url] ![Build Status][ghactions-image] [![Coverage Status][codecov-image]][codecov-url]

> Apply bounded, relative jitter to a numeric value; useful for natural timing and motion variation.

- Produces a modified value based on a minimum and maximum percentage of the input value.
- Only produces a positive number or 0.
- Avoids [floating-point precision errors](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Accuracy_problems).
- Accepts an optional custom random number generator.

## Consumer Usage

To install:

```shell
npm install relative-jitter
```

To import:

```js
import relativeJitter from 'relative-jitter';

relativeJitter(1000, -50, 50); // -50% min, +50% max
```

To use [deterministic randomness](https://en.wikipedia.org/wiki/Pseudorandom_number_generator):

```js
import Prando from 'prando';
import relativeJitter from 'relative-jitter';

const prando = new Prando(/* 0 */);

relativeJitter(1000, -50, 50, () => prando.next());
```

## Development Usage

### Production Build

```shell
npm run build
```

### Testing

The test suite can perform a _single run_:

```shell
npm test
```

… or indefinitely as files are changed:

```shell
npm run test:watch
```

[npm-image]: https://img.shields.io/npm/v/relative-jitter
[npm-url]: https://npmjs.org/relative-jitter
[ghactions-image]: https://img.shields.io/github/actions/workflow/status/stevenvachon/relative-jitter/test.yml
[codecov-image]: https://img.shields.io/codecov/c/github/stevenvachon/relative-jitter
[codecov-url]: https://app.codecov.io/github/stevenvachon/relative-jitter
