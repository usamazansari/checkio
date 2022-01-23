import { multTwo } from '../puzzles/001-multiply-intro.puzzle';

export const solution = {
  my: multTwo,
  best: (a: number, b: number): number => a * b,
  creative: (a: number, b: number): number => [
    ...'🐱'.repeat(a)
      .replace(
        /./ug,
        '🦄'.repeat(b)
      )
  ].length
};
