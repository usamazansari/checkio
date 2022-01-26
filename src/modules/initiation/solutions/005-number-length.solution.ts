import { numberLength } from '../puzzles';

export const solution = {
  name: 'Number Length',
  my: numberLength,
  best: (value: number): number => `${value}`.length,
  creative: (n: number) => Math.max(...Array.from(`${n}`).keys()) + 1
};
