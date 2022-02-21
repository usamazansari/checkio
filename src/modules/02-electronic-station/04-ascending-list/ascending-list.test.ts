import { Setup, Tester } from "../../../common";
import { Puzzle } from "./ascending-list.puzzle";

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [{ values: [-5, 10, 99, 123456] }],
        expected: true,
      },
      {
        arguments: [{ values: [99] }],
        expected: true,
      },
      {
        arguments: [{ values: [4, 5, 6, 7, 3, 7, 9] }],
        expected: false,
      },
      {
        arguments: [{ values: [] }],
        expected: true,
      },
      {
        arguments: [{ values: [1, 1, 1, 1] }],
        expected: false,
      },
      {
        arguments: [{ values: [-5, -6] }],
        expected: false,
      },
      {
        arguments: [{ values: [1, 2, 3] }],
        expected: true,
      },
      {
        arguments: [{ values: [1, 1] }],
        expected: false,
      },
      {
        arguments: [{ values: [-1, 0, 1] }],
        expected: true,
      },
      {
        arguments: [{ values: [1, 0, 1] }],
        expected: false,
      }
    ]
  })
}).run();
