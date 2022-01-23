import { easyUnpack } from '../puzzles';

export const solution = {
  name: 'Easy Unpack',
  my: easyUnpack,
  best: (values: any[]): any[] => [values[0], values[2], values[values.length - 2]],
  creative: (e: any[], [f, , t] = e,) => [f, t, e.reverse()[1]]
};
