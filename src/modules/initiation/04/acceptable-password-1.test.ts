import { EQUALITY, LOG } from '../../common';
import { my, best, creative } from './acceptable-password-1.puzzle';

const Tests = [
  { password: 'short', expected: false },
  { password: 'muchlonger', expected: true },
  { password: 'ashort', expected: false }
];

LOG.default(`Running Tests...`);
LOG.default(` ---- My ---- `);

Tests.forEach(test => {
  const actual = my(test.password);
  const response = EQUALITY.shallow(actual, test.expected);
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Best ---- `);

Tests.forEach(test => {
  const actual = best(test.password);
  const response = EQUALITY.shallow(actual, test.expected);
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Creative ---- `);

Tests.forEach(test => {
  const actual = creative(test.password);
  const response = EQUALITY.shallow(actual, test.expected);
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});
