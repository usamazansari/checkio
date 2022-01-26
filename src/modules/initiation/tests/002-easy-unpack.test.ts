import { LOG } from '../../common';
import { EasyUnpackSolution as solution } from '../solutions';

const Tests = [
  { values: [1, 2, 3, 4, 5, 6, 7, 9], expected: [1, 3, 7] },
  { values: [1, 1, 1, 1], expected: [1, 1, 1] },
  { values: [6, 3, 7], expected: [6, 7, 3] }
];

LOG.default(`Running ${solution.name} tests...`);
LOG.default(` ---- My ---- `);

Tests.forEach(test => {
  const actual = solution.my(test.values);
  const response = actual.every(elem => test.expected.includes(elem));
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Best ---- `);

Tests.forEach(test => {
  const actual = solution.best(test.values);
  const response = actual.every(elem => test.values.includes(elem));
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});

LOG.default(` ---- Creative ---- `);

Tests.forEach(test => {
  const actual = solution.creative(test.values);
  const response = actual.every(elem => test.values.includes(elem));
  LOG.default(`  Expected: ${test.expected}`);
  LOG.default(`  Actual: ${actual}`);
  response ? LOG.pass() : LOG.fail();
});
