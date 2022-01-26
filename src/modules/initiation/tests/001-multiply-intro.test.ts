import { LOG } from '../../common';
import { MultiplyIntroSolution as solution } from '../solutions';

const MultiplyIntroTests = [
  { a: 2, b: 3, expected: 6 },
  { a: 1, b: 0, expected: 0 },
  { a: 3, b: 5, expected: 15 }
];


LOG.default(`Running ${solution.name} tests...`);
LOG.default(` ---- My ---- `);

MultiplyIntroTests.forEach(test => {
  const actual = solution.my(test.a, test.b);
  const response = actual === test.expected;
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Best ---- `);

MultiplyIntroTests.forEach(test => {
  const actual = solution.best(test.a, test.b);
  const response = actual === test.expected;
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Creative ---- `);

MultiplyIntroTests.forEach(test => {
  const actual = solution.creative(test.a, test.b);
  const response = actual === test.expected;
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});
