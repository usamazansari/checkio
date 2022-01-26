import { EQUALITY, LOG } from '../../common';
import { my } from './backward-string.puzzle';

const Tests = [
  { value: 'val', expected: 'lav' },
  { value: '', expected: '' },
  { value: 'ohho', expected: 'ohho' },
  { value: '123456789', expected: '987654321' }
];

LOG.default(`Running Tests...`);
LOG.default(` ---- My ---- `);

Tests.forEach(test => {
  const actual = my(test.value);
  const response = EQUALITY.shallow(actual, test.expected);
  LOG.default(`  Value    : ${test.value}`);
  LOG.default(`  Expected : ${test.expected}`);
  LOG.default(`  Actual   : ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Best ---- `);

// Tests.forEach(test => {
//   const actual = best(test.value);
//   const response = EQUALITY.shallow(actual, test.expected);
//   LOG.default(`  Value    : ${test.value}`);
//   LOG.default(`  Expected : ${test.expected}`);
//   LOG.default(`  Actual   : ${actual}`);
//   response ? LOG.pass() : LOG.fail();
// });

LOG.default(` ---- Creative ---- `);

// Tests.forEach(test => {
//   const actual = creative(test.value);
//   const response = EQUALITY.shallow(actual, test.expected);
//   LOG.default(`  Value    : ${test.value}`);
//   LOG.default(`  Expected : ${test.expected}`);
//   LOG.default(`  Actual   : ${actual}`);
//   response ? LOG.pass() : LOG.fail();
// });
