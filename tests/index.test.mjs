import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('sorts number chunks', () => {
  assert.deepEqual(api.naturalSort(['file10', 'file2', 'file1']), ['file1', 'file2', 'file10']);
});
test('handles numeric suffixes', () => {
  assert.deepEqual(api.naturalSort(['a12', 'a3']), ['a3', 'a12']);
});
test('does not mutate source', () => {
  const x = ['b2', 'b1'];
  api.naturalSort(x);
  assert.deepEqual(x, ['b2', 'b1']);
});
test('preserves stable ties', () => {
  assert.deepEqual(api.naturalSort(['A1', 'a1']), ['A1', 'a1']);
});
test('handles empty array', () => {
  assert.deepEqual(api.naturalSort([]), []);
});
test('rejects non-string member', () => {
  assert.throws(() => api.naturalSort([1]), TypeError);
});
