import { Setup, Tester } from '../../../common';
import { Puzzle } from './boolean-algebra.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { x: 0 },
          { y: 0 },
          { action: 'conjunction' }
        ],
        expected: 0
      },
      {
        arguments: [
          { x: 0 },
          { y: 1 },
          { action: 'conjunction' }
        ],
        expected: 0
      },
      {
        arguments: [
          { x: 1 },
          { y: 0 },
          { action: 'conjunction' }
        ],
        expected: 0
      },
      {
        arguments: [
          { x: 1 },
          { y: 1 },
          { action: 'conjunction' }
        ],
        expected: 1
      },
      {
        arguments: [
          { x: 0 },
          { y: 0 },
          { action: 'disjunction' }
        ],
        expected: 0
      },
      {
        arguments: [
          { x: 0 },
          { y: 1 },
          { action: 'disjunction' }
        ],
        expected: 1
      },
      {
        arguments: [
          { x: 1 },
          { y: 0 },
          { action: 'disjunction' }
        ],
        expected: 1
      },
      {
        arguments: [
          { x: 1 },
          { y: 1 },
          { action: 'disjunction' }
        ],
        expected: 1
      },
      {
        arguments: [
          { x: 0 },
          { y: 0 },
          { action: 'implication' }
        ],
        expected: 1
      },
      {
        arguments: [
          { x: 0 },
          { y: 1 },
          { action: 'implication' }
        ],
        expected: 1
      },
      {
        arguments: [
          { x: 1 },
          { y: 0 },
          { action: 'implication' }
        ],
        expected: 0
      },
      {
        arguments: [
          { x: 1 },
          { y: 1 },
          { action: 'implication' }
        ],
        expected: 1
      },
      {
        arguments: [
          { x: 0 },
          { y: 0 },
          { action: 'exclusive' }
        ],
        expected: 0
      },
      {
        arguments: [
          { x: 0 },
          { y: 1 },
          { action: 'exclusive' }
        ],
        expected: 1
      },
      {
        arguments: [
          { x: 1 },
          { y: 0 },
          { action: 'exclusive' }
        ],
        expected: 1
      },
      {
        arguments: [
          { x: 1 },
          { y: 1 },
          { action: 'exclusive' }
        ],
        expected: 0
      },
      {
        arguments: [
          { x: 0 },
          { y: 0 },
          { action: 'equivalence' }
        ],
        expected: 1
      },
      {
        arguments: [
          { x: 0 },
          { y: 1 },
          { action: 'equivalence' }
        ],
        expected: 0
      },
      {
        arguments: [
          { x: 1 },
          { y: 0 },
          { action: 'equivalence' }
        ],
        expected: 0
      },
      {
        arguments: [
          { x: 1 },
          { y: 1 },
          { action: 'equivalence' }
        ],
        expected: 1
      }
    ]
  })
}).run();
