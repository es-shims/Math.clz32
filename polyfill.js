'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return Math.clz32 || implementation;
};
