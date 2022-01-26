import { EQUALITY, LOG } from '../../common';
import { my } from './replace-first.puzzle';

const Tests = [
  { values: [1, 2, 3, 4], expected: [2, 3, 4, 1] },
  { values: [1], expected: [1] },
  { values: [], expected: [] }
];

LOG.default('Running Tests...');
LOG.default(' ---- My ---- ');

Tests.forEach(test => {
  const actual = my(test.values);
  const response = EQUALITY.deep(actual, test.expected);
  LOG.default(`  Value    : ${test.values}`);
  LOG.default(`  Expected : ${test.expected}`);
  LOG.default(`  Actual   : ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(' ---- Best ---- ');

// Tests.forEach(test => {
//   const actual = best(test.values);
//   const response = EQUALITY.deep(actual, test.expected);
//   LOG.default(`  Value    : ${test.values}`);
//   LOG.default(`  Expected : ${test.expected}`);
//   LOG.default(`  Actual   : ${actual}`);
//   response ? LOG.pass() : LOG.fail();
// });

LOG.default(' ---- Creative ---- ');

// Tests.forEach(test => {
//   const actual = creative(test.values);
//   const response = EQUALITY.deep(actual, test.expected);
//   LOG.default(`  Value    : ${test.values}`);
//   LOG.default(`  Expected : ${test.expected}`);
//   LOG.default(`  Actual   : ${actual}`);
//   response ? LOG.pass() : LOG.fail();
// });
