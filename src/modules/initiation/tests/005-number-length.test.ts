import { LOG } from '../../common';
import { NumberLengthSolution as solution } from '../solutions';

const Tests = [
  { value: 1234567890, expected: 10 },
  { value: 0, expected: 1 },
  { value: 41234, expected: 5 },
  { value: -1, expected: 1 },
  { value: -1234567890, expected: 10 },
  { value: -123456789012390, expected: 15 }
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

Tests.forEach(test => {
  const actual = solution.best(test.value);
  const response = actual === test.expected;
  LOG.default(`  Value    : ${test.value}`);
  LOG.default(`  Expected : ${test.expected}`);
  LOG.default(`  Actual   : ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Creative ---- `);

Tests.forEach(test => {
  const actual = solution.creative(test.value);
  const response = actual === test.expected;
  LOG.default(`  Value    : ${test.value}`);
  LOG.default(`  Expected : ${test.expected}`);
  LOG.default(`  Actual   : ${actual}`);
  response ? LOG.pass() : LOG.fail();
});
