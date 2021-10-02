'use strict';

var ToUint32 = require('es-abstract/2021/ToUint32');
var Call = require('es-abstract/2021/Call');

var $Number = Number;
var LOG2E = Math.LOG2E;
var floor = Math.floor;
var log = Math.log;

var numberCLZ = $Number.prototype.clz; // // Safari 8 has Number#clz

module.exports = function clz32(value) {
	var x = $Number(value);
	var number = ToUint32(x);
	if (number === 0) {
		// eslint-disable-next-line no-magic-numbers
		return 32;
	}
	// eslint-disable-next-line no-magic-numbers
	return numberCLZ ? Call(numberCLZ, number) : 31 - floor(log(number + 0.5) * LOG2E);
};
