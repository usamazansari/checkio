import { EQUALITY, LOG } from '../../common';
import { my, best, creative } from './first-word-simplified.puzzle';

const Tests = [
  { text: 'Hello world', expected: 'Hello' },
  { text: 'a b c d e f', expected: 'a' },
  { text: 'abc def', expected: 'abc' },
  { text: 'Faraway Land beholds the horizon', expected: 'Faraway' }
];

LOG.default(`Running Tests...`);
LOG.default(` ---- My ---- `);

Tests.forEach(test => {
  const actual = my(test.text);
  const response = EQUALITY.shallow(actual, test.expected);
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Best ---- `);

Tests.forEach(test => {
  const actual = best(test.text);
  const response = EQUALITY.shallow(actual, test.expected);
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Creative ---- `);

Tests.forEach(test => {
  const actual = creative(test.text);
  const response = EQUALITY.shallow(actual, test.expected);
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});
