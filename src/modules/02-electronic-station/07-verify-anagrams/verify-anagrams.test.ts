import { Setup, Tester } from '../../../common';
import { Puzzle } from './verify-anagrams.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { line1: 'Programming' },
          { line2: 'Gram Ring Mop' }
        ],
        expected: true
      },
      {
        arguments: [
          { line1: 'Hello' },
          { line2: 'Ole Oh' }
        ],
        expected: false
      },
      {
        arguments: [
          { line1: 'Kyoto' },
          { line2: 'Tokyo' }
        ],
        expected: true
      },
      {
        arguments: [
          { line1: 'a' },
          { line2: 'a' }
        ],
        expected: true
      },
      {
        arguments: [
          { line1: 'x' },
          { line2: 'X' }
        ],
        expected: true
      },
      {
        arguments: [
          { line1: 'A O X' },
          { line2: 'x o a' }
        ],
        expected: true
      },
      {
        arguments: [
          { line1: '   Hi all' },
          { line2: 'all hi' }
        ],
        expected: true
      },
      {
        arguments: [
          { line1: 'a' },
          { line2: 'z' }
        ],
        expected: false
      },
      {
        arguments: [
          { line1: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTU' },
          { line2: 'UTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba' }
        ],
        expected: true
      },
      {
        arguments: [
          { line1: 'bcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTU' },
          { line2: 'TSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba' }
        ],
        expected: false
      },
      {
        arguments: [
          { line1: 'aaaaaaaaabbb' },
          { line2: 'ba' }
        ],
        expected: false
      },
      {
        arguments: [
          { line1: 'a' },
          { line2: 'abcd' }
        ],
        expected: false
      },
      {
        arguments: [
          { line1: 'A telephone girl' },
          { line2: 'Repeating allo' }
        ],
        expected: false
      },
      {
        arguments: [
          { line1: 'Waitress' },
          { line2: 'The stew Sir' }
        ],
        expected: false
      },
      {
        arguments: [
          { line1: 'Hamlet' },
          { line2: 'Amleth' }
        ],
        expected: true
      },
      {
        arguments: [
          { line1: 'Kings Lead Hat' },
          { line2: 'Talking Heads' }
        ],
        expected: true
      },
      {
        arguments: [
          { line1: 'Hello' },
          { line2: 'Hell' }
        ],
        expected: false
      },
      {
        arguments: [
          { line1: 'The Morse Code' },
          { line2: 'There Come Dots' }
        ],
        expected: false
      },
      {
        arguments: [
          { line1: 'abcdefghijklmnopqrstuvwxyz' },
          { line2: 'Cwm fjord bank glyphs vext quiz' }
        ],
        expected: true
      },
      {
        arguments: [
          { line1: 'Listen' },
          { line2: 'Silent' }
        ],
        expected: true
      }
    ]
  })
}).run();
