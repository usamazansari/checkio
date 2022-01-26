import { EQUALITY, LOG } from '../../common';
import { my, best, creative } from './number-length.puzzle';

const Tests = [
  { value: 1234567890, expected: 10 },
  { value: 0, expected: 1 },
  { value: 41234, expected: 5 },
  { value: -1, expected: 1 },
  { value: -1234567890, expected: 10 },
  { value: -123456789012390, expected: 15 }
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

Tests.forEach(test => {
  const actual = best(test.value);
  const response = EQUALITY.shallow(actual, test.expected);
  LOG.default(`  Value    : ${test.value}`);
  LOG.default(`  Expected : ${test.expected}`);
  LOG.default(`  Actual   : ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Creative ---- `);

Tests.forEach(test => {
  const actual = creative(test.value);
  const response = EQUALITY.shallow(actual, test.expected);
  LOG.default(`  Value    : ${test.value}`);
  LOG.default(`  Expected : ${test.expected}`);
  LOG.default(`  Actual   : ${actual}`);
  response ? LOG.pass() : LOG.fail();
});
