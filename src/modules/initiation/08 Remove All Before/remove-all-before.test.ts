import { EQUALITY, LOG } from '../../common';
import { my } from './remove-all-before.puzzle';

const Tests = [
  { values: [1, 2, 3, 4, 5], b: 3, expected: [3, 4, 5] },
  { values: [1, 1, 2, 2, 3, 3], b: 2, expected: [2, 2, 3, 3] },
  { values: [1, 1, 2, 4, 2, 3, 4], b: 2, expected: [2, 4, 2, 3, 4] },
  { values: [1, 1, 5, 6, 7], b: 2, expected: [1, 1, 5, 6, 7] },
  { values: [], b: 0, expected: [] },
  { values: [7, 7, 7, 7, 7, 7, 7, 7, 7], b: 7, expected: [7, 7, 7, 7, 7, 7, 7, 7, 7] }
];

LOG.default(`Running Tests...`);
LOG.default(` ---- My ---- `);

Tests.forEach(test => {
  const actual = my(test.values, test.b);
  const response = EQUALITY.deep(actual, test.expected);
  LOG.default(`  Value    : ${test.values}`);
  LOG.default(`  Boundary : ${test.b}`);
  LOG.default(`  Expected : ${test.expected}`);
  LOG.default(`  Actual   : ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Best ---- `);

// Tests.forEach(test => {
//   const actual = best(test.values, test.b);
//   const response = EQUALITY.deep(actual, test.expected);
//   LOG.default(`  Value    : ${test.values}`);
//   LOG.default(`  Boundary : ${test.b}`);
//   LOG.default(`  Expected : ${test.expected}`);
//   LOG.default(`  Actual   : ${actual}`);
//   response ? LOG.pass() : LOG.fail();
// });

LOG.default(` ---- Creative ---- `);

// Tests.forEach(test => {
//   const actual = creative(test.values, test.b);
//   const response = EQUALITY.deep(actual, test.expected);
//   LOG.default(`  Value    : ${test.values}`);
//   LOG.default(`  Boundary : ${test.b}`);
//   LOG.default(`  Expected : ${test.expected}`);
//   LOG.default(`  Actual   : ${actual}`);
//   response ? LOG.pass() : LOG.fail();
// });
