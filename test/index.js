'use strict';

var clz32 = require('../');
var test = require('tape');

var runTests = require('./tests');

test('as a function', function (t) {
	runTests(clz32, t);

	t.end();
});
