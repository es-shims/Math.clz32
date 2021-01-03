'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimMathClz32() {
	var polyfill = getPolyfill();

	define(Math, { clz32: polyfill });
	delete Number.prototype.clz; // // Safari 8 has Number#clz

	return polyfill;
};
