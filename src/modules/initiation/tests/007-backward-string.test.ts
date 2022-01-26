import { LOG } from '../../common';
import { BackwardStringSolution as solution } from '../solutions';

const Tests = [
  { value: 'val', expected: 'lav' },
  { value: '', expected: '' },
  { value: 'ohho', expected: 'ohho' },
  { value: '123456789', expected: '987654321' }
];

LOG.default(`Running ${solution.name} tests...`);
LOG.default(` ---- My ---- `);

Tests.forEach(test => {
  const actual = solution.my(test.value);
  const response = actual === test.expected;
  LOG.default(`  Value    : ${test.value}`);
  LOG.default(`  Expected : ${test.expected}`);
  LOG.default(`  Actual   : ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Best ---- `);

// Tests.forEach(test => {
//   const actual = solution.best(test.value);
//   const response = actual === test.expected;
//   LOG.default(`  Value    : ${test.value}`);
//   LOG.default(`  Expected : ${test.expected}`);
//   LOG.default(`  Actual   : ${actual}`);
//   response ? LOG.pass() : LOG.fail();
// });

LOG.default(` ---- Creative ---- `);

// Tests.forEach(test => {
//   const actual = solution.creative(test.value);
//   const response = actual === test.expected;
//   LOG.default(`  Value    : ${test.value}`);
//   LOG.default(`  Expected : ${test.expected}`);
//   LOG.default(`  Actual   : ${actual}`);
//   response ? LOG.pass() : LOG.fail();
// });
