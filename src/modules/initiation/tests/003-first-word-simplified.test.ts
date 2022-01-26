import { LOG } from '../../common';
import { FirstWordSolution as solution } from '../solutions';

const FirstWordSimplifiedTests = [
  { text: 'Hello world', expected: 'Hello' },
  { text: 'a b c d e f', expected: 'a' },
  { text: 'abc def', expected: 'abc' },
  { text: 'Faraway Land beholds the horizon', expected: 'Faraway' },
];

LOG.default(`Running ${solution.name} tests...`);
LOG.default(` ---- My ---- `);

FirstWordSimplifiedTests.forEach(test => {
  const actual = solution.my(test.text);
  const response = actual === test.expected;
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Best ---- `);

FirstWordSimplifiedTests.forEach(test => {
  const actual = solution.best(test.text);
  const response = actual === test.expected;
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Creative ---- `);

FirstWordSimplifiedTests.forEach(test => {
  const actual = solution.creative(test.text);
  const response = actual === test.expected;
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});
