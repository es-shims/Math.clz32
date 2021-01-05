'use strict';

require('../auto');

require('../'); // to ensure no side effects

var test = require('tape');
var keys = require('reflect.ownkeys');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Math.clz32.length, 1, 'Math.clz32 has a length of 1');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Math.clz32.name, 'clz32', 'Math.clz32 has name "clz32"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Math, 'clz32'), 'Math.clz32 is not enumerable');
		et.end();
	});

	t.match(keys(Math.clz32).sort().join('|'), /^length|name(|prototype)?$/, 'has no unexpected own keys');

	runTests(Math.clz32, t);

	t.end();
});
