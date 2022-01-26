import { EQUALITY, LOG } from '../../common';
import { my, best, creative } from './multiply-intro.puzzle';

const Tests = [
  { a: 2, b: 3, expected: 6 },
  { a: 1, b: 0, expected: 0 },
  { a: 3, b: 5, expected: 15 }
];


LOG.default(`Running Tests...`);
LOG.default(` ---- My ---- `);

Tests.forEach(test => {
  const actual = my(test.a, test.b);
  const response = EQUALITY.shallow(actual, test.expected);
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Best ---- `);

Tests.forEach(test => {
  const actual = best(test.a, test.b);
  const response = EQUALITY.shallow(actual, test.expected);
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Creative ---- `);

Tests.forEach(test => {
  const actual = creative(test.a, test.b);
  const response = EQUALITY.shallow(actual, test.expected);
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});
