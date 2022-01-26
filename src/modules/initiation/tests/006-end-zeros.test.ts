import { LOG } from '../../common';
import { EndZerosSolution as solution } from '../solutions';

const Tests = [
  { value: 0, expected: 1 },
  { value: 1, expected: 0 },
  { value: 10, expected: 1 },
  { value: 101, expected: 0 },
  { value: 245, expected: 0 },
  { value: 100100, expected: 2 }
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
