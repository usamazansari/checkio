import { my, best, creative } from './bigger-price.puzzle';

const Tests = [
  {
    limit: 2,
    data: [
      { "name": "bread", "price": 100 },
      { "name": "wine", "price": 138 },
      { "name": "meat", "price": 15 },
      { "name": "water", "price": 1 }
    ],
    expected: [
      { "name": "wine", "price": 138 },
      { "name": "bread", "price": 100 }
    ]
  },
  {
    limit: 1,
    data: [
      { "name": "pen", "price": 5 },
      { "name": "whiteboard", "price": 170 }
    ],
    expected: [{ "name": "whiteboard", "price": 170 }]
  },
  {
    limit: 2,
    data: [
      { "name": "bread", "price": 10 },
      { "name": "wine", "price": 138 },
      { "name": "meat", "price": 15 },
      { "name": "milk", "price": 25 }
    ],
    expected: [
      { "name": "wine", "price": 138 },
      { "name": "milk", "price": 25 }
    ]
  }
];

describe('Bigger Price using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return correct response for '${test.limit}'`, () => {
        expect(my(test.limit, test.data)).toEqual(test.expected);
      });
    });
  });

  describe('Best solution', () => {
    Tests.forEach(test => {
      it(`should return correct response for '${test.limit}'`, () => {
        expect(best(test.limit, test.data)).toEqual(test.expected);
      });
    });
  });

  describe('Creative solution', () => {
    Tests.forEach(test => {
      it(`should return correct response for '${test.limit}'`, () => {
        expect(creative(test.limit, test.data)).toEqual(test.expected);
      });
    });
  });
});
