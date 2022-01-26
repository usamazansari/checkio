import { isAcceptablePassword } from '../puzzles';

export const solution = {
  name: 'Acceptable Password I',
  my: isAcceptablePassword,
  best: (password: string): boolean => password.length > 6,
  creative: (_: string) => !!_[0b110]
};
