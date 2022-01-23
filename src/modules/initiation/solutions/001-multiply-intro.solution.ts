import { multTwo } from '../puzzles';

export const solution = {
  name: 'Multiply Intro',
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
