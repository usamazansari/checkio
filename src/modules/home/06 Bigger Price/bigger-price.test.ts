import { Setup, Tester } from '../../../common';
import { Puzzle } from './bigger-price.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { limit: 2 },
          {
            data: [
              { "name": "bread", "price": 100 },
              { "name": "wine", "price": 138 },
              { "name": "meat", "price": 15 },
              { "name": "water", "price": 1 }
            ]
          }
        ],
        expected: [
          { "name": "wine", "price": 138 },
          { "name": "bread", "price": 100 }
        ]
      },
      {
        arguments: [
          { limit: 1 },
          {
            data: [
              { "name": "pen", "price": 5 },
              { "name": "whiteboard", "price": 170 }
            ]
          }
        ],
        expected: [{ "name": "whiteboard", "price": 170 }]
      },
      {
        arguments: [
          { limit: 2 },
          {
            data: [
              { "name": "bread", "price": 10 },
              { "name": "wine", "price": 138 },
              { "name": "meat", "price": 15 },
              { "name": "milk", "price": 25 }
            ]
          }
        ],
        expected: [
          { "name": "wine", "price": 138 },
          { "name": "milk", "price": 25 }
        ]
      }
    ]
  })
}).run();
