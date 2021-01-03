'use strict';

module.exports = function (clz32, t) {
	t.test('should have proper uint32 conversion', function (st) {
		var integers = [5295, -5295, -9007199254740991, 9007199254740991, 0, -0];
		var nonNumbers = [undefined, true, null, {}, [], 'str'];
		var nonIntegers = [-9007199254741992, 9007199254741992, 5.9];

		integers.forEach(function (item) {
			st.ok(clz32(item) >= 0, 'integers - clz32(' + item + ') >= 0');
			st.ok(clz32(item) <= 32, 'integers - clz32(' + item + ') <= 32');
		});
		nonIntegers.forEach(function (item) {
			st.ok(clz32(item) >= 0, 'nonIntegers - clz32(' + item + ') >= 0');
			st.ok(clz32(item) <= 32, 'nonIntegers - clz32(' + item + ') <= 32');
		});
		nonNumbers.forEach(function (item) {
			st.equal(clz32(item), item === true ? 31 : 32, 'nonNumbers - clz32(' + item + ')');
		});

		st.equal(clz32(true), clz32(1), 'clz32(true)');
		st.equal(clz32(''), clz32(0), "clz32('')");
		st.equal(clz32('10'), clz32(10), "clz32('10')");
		st.equal(clz32(0.1), 32, 'clz32(0.1)');
		st.equal(clz32(-1), 0, 'clz32(-1)');
		st.equal(clz32(1), 31, 'clz32(1)');
		st.equal(clz32(0xFFFFFFFF), 0, 'clz32(0xFFFFFFFF)');
		st.equal(clz32(0x1FFFFFFFF), 0, 'clz32(0x1FFFFFFFF)');
		st.equal(clz32(0x111111111), 3, 'clz32(0x111111111)');
		st.equal(clz32(0x11111111), 3, 'clz32(0x11111111)');

		st.end();
	});

	t.test('returns 32 for numbers that coerce to 0', function (st) {
		var zeroishes = [0, -0, NaN, Infinity, -Infinity, 0x100000000, undefined, null, false, '', 'str', {}, [], [1, 2]];
		zeroishes.forEach(function (zeroish) {
			st.equal(clz32(zeroish), 32, 'zeroish - clz32(' + zeroish + ')');
		});
		st.end();
	});
};
