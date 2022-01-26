import { EQUALITY, LOG } from '../../common';
import { my, best, creative } from './easy-unpack.puzzle';

const Tests = [
  { values: [1, 2, 3, 4, 5, 6, 7, 9], expected: [1, 3, 7] },
  { values: [1, 1, 1, 1], expected: [1, 1, 1] },
  { values: [6, 3, 7], expected: [6, 7, 3] }
];

LOG.default(`Running Tests...`);
LOG.default(` ---- My ---- `);

Tests.forEach(test => {
  const actual = my(test.values);
  const response = EQUALITY.deep(actual, test.expected);
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Best ---- `);

Tests.forEach(test => {
  const actual = best(test.values);
  const response = EQUALITY.deep(actual, test.expected);
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Creative ---- `);

Tests.forEach(test => {
  const actual = creative(test.values);
  const response = EQUALITY.deep(actual, test.expected);
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});
