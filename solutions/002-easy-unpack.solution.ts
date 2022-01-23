import { easyUnpack } from '../puzzles/002-easy-unpack.puzzle';

export const solution = {
  my: easyUnpack,
  best: (values: any[]): any[] => [values[0], values[2], values[values.length - 2]],
  creative: (e: any[], [f, , t] = e,) => [f, t, e.reverse()[1]]
};
