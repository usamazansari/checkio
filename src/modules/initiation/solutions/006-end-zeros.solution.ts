import { endZeros } from '../puzzles';

export const solution = {
  name: 'End Zeros',
  my: endZeros,
  best: (value: number): number => {
    const s = String(value);
    return s.length - s.replace(/0*$/, '').length;
  },
  creative: (n: number) => String(n).match(/0*$/)[0].length
};
