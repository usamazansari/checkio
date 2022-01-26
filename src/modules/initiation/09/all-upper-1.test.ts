import { EQUALITY, LOG } from '../../common';
import { my } from './all-upper-1.puzzle';

const Tests = [
  { text: 'ALL UPPER', expected: true },
  { text: 'all lower', expected: false },
  { text: 'mixed UPPER and lower', expected: false },
  { text: '', expected: true }
];

LOG.default(`Running Tests...`);
LOG.default(` ---- My ---- `);

Tests.forEach(test => {
  const actual = my(test.text);
  const response = EQUALITY.shallow(actual, test.expected);
  LOG.default(`  Value    : ${test.text}`);
  LOG.default(`  Expected : ${test.expected}`);
  LOG.default(`  Actual   : ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Best ---- `);

// Tests.forEach(test => {
//   const actual = best(test.text);
//   const response = EQUALITY.shallow(actual)
//   LOG.default(`  Value    : ${test.text}`);
//   LOG.default(`  Expected : ${test.expected}`);
//   LOG.default(`  Actual   : ${actual}`);
//   response ? LOG.pass() : LOG.fail();
// });

LOG.default(` ---- Creative ---- `);

// Tests.forEach(test => {
//   const actual = creative(test.text);
//   const response = EQUALITY.shallow(actual)
//   LOG.default(`  Value    : ${test.text}`);
//   LOG.default(`  Expected : ${test.expected}`);
//   LOG.default(`  Actual   : ${actual}`);
//   response ? LOG.pass() : LOG.fail();
// });
