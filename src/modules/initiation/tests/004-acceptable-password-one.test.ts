import { LOG } from '../../common';
import { AcceptablePasswordOne as solution } from '../solutions';

const Tests = [
  { password: 'short', expected: false },
  { password: 'muchlonger', expected: true },
  { password: 'ashort', expected: false }
];

LOG.default(`Running ${solution.name} tests...`);
LOG.default(` ---- My ---- `);

Tests.forEach(test => {
  const actual = solution.my(test.password);
  const response = actual === test.expected;
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Best ---- `);

Tests.forEach(test => {
  const actual = solution.best(test.password);
  const response = actual === test.expected;
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Creative ---- `);

Tests.forEach(test => {
  const actual = solution.creative(test.password);
  const response = actual === test.expected;
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});
