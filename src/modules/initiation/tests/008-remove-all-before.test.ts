import { LOG } from '../../common';
import { RemoveAllBeforeSolution as solution } from '../solutions';

const Tests = [
  { values: [1, 2, 3, 4, 5], b: 3, expected: [3, 4, 5] },
  { values: [1, 1, 2, 2, 3, 3], b: 2, expected: [2, 2, 3, 3] },
  { values: [1, 1, 2, 4, 2, 3, 4], b: 2, expected: [2, 4, 2, 3, 4] },
  { values: [1, 1, 5, 6, 7], b: 2, expected: [1, 1, 5, 6, 7] },
  { values: [], b: 0, expected: [] },
  { values: [7, 7, 7, 7, 7, 7, 7, 7, 7], b: 7, expected: [7, 7, 7, 7, 7, 7, 7, 7, 7] }
];

LOG.default(`Running ${solution.name} tests...`);
LOG.default(` ---- My ---- `);

Tests.forEach(test => {
  const actual = solution.my(test.values, test.b);
  const response = actual.every(elem => test.expected.includes(elem));
  LOG.default(`  Value    : ${test.values}`);
  LOG.default(`  Boundary : ${test.b}`);
  LOG.default(`  Expected : ${test.expected}`);
  LOG.default(`  Actual   : ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Best ---- `);

// Tests.forEach(test => {
//   const actual = solution.best(test.values, test.b);
//   const response = actual.every(elem => test.expected.includes(elem));
//   LOG.default(`  Value    : ${test.values}`);
//   LOG.default(`  Boundary : ${test.b}`);
//   LOG.default(`  Expected : ${test.expected}`);
//   LOG.default(`  Actual   : ${actual}`);
//   response ? LOG.pass() : LOG.fail();
// });

LOG.default(` ---- Creative ---- `);

// Tests.forEach(test => {
//   const actual = solution.creative(test.values, test.b);
//   const response = actual.every(elem => test.expected.includes(elem));
//   LOG.default(`  Value    : ${test.values}`);
//   LOG.default(`  Boundary : ${test.b}`);
//   LOG.default(`  Expected : ${test.expected}`);
//   LOG.default(`  Actual   : ${actual}`);
//   response ? LOG.pass() : LOG.fail();
// });
