import { EQUALITY, LOG } from '../../common';
import { my, best, creative } from './end-zeros.puzzle';

const Tests = [
  { value: 0, expected: 1 },
  { value: 1, expected: 0 },
  { value: 10, expected: 1 },
  { value: 101, expected: 0 },
  { value: 245, expected: 0 },
  { value: 100100, expected: 2 }
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
