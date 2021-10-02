import clz32, * as clz32Module from 'math.clz32';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(clz32, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(clz32Module).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = clz32Module;
	t.equal((await import('math.clz32/shim')).default, shim, 'shim named export matches deep export');
	t.equal((await import('math.clz32/implementation')).default, implementation, 'implementation named export matches deep export');
	t.equal((await import('math.clz32/polyfill')).default, getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
