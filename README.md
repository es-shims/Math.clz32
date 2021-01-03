# Math.clz32 <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `Math.clz32` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-map-objects).

## Getting started

```sh
npm install --save math.clz32
```

## Usage/Examples

```js
console.log(Math.clz32(1)); // 31
console.log(Math.clz32(1000)); // 22
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/es-shims/math.clz32
[npm-version-svg]: https://versionbadg.es/es-shims/math.clz32.svg
[deps-svg]: https://david-dm.org/es-shims/math.clz32.svg
[deps-url]: https://david-dm.org/es-shims/math.clz32
[dev-deps-svg]: https://david-dm.org/es-shims/math.clz32/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/math.clz32#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/es-shims/math.clz32.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/es-shims/math.clz32.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/es-shims/math.clz32.svg
[downloads-url]: https://npm-stat.com/charts.html?package=es-shims/math.clz32
