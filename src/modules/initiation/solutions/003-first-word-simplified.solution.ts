import { firstWord } from '../puzzles';

export const solution = {
  name: 'First Word Simplified',
  my: firstWord,
  best: (text: string): string => text.split(' ')[0],
  creative: (s: string): string => s.slice(
    s.search(/\w/),
    0o1 + s.search(/\w\b/)
  )
};
