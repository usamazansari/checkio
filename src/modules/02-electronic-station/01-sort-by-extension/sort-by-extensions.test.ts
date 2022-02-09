import { Setup, Tester } from '../../../common';
import { Puzzle } from './sort-by-extension.puzzle';

new Tester({
  solution: Puzzle,
  setup: new Setup({
    tests: [
      {
        arguments: [
          { files: ['1.cad', '1.bat', '1.aa'] }
        ],
        expected: ['1.aa', '1.bat', '1.cad']
      },
      {
        arguments: [
          { files: ['1.cad', '1.bat', '1.aa', '2.bat'] }
        ],
        expected: ['1.aa', '1.bat', '2.bat', '1.cad']
      },
      {
        arguments: [
          { files: ['1.cad', '1.bat', '1.aa', '.bat'] }
        ],
        expected: ['.bat', '1.aa', '1.bat', '1.cad']
      },
      {
        arguments: [
          { files: ['1.cad', '1.bat', '.aa', '.bat'] }
        ],
        expected: ['.aa', '.bat', '1.bat', '1.cad']
      },
      {
        arguments: [
          { files: ['1.cad', '1.', '1.aa'] }
        ],
        expected: ['1.', '1.aa', '1.cad']
      },
      {
        arguments: [
          { files: ['1.cad', '1.bat', '1.aa', '1.aa.doc'] }
        ],
        expected: ['1.aa', '1.bat', '1.cad', '1.aa.doc']
      },
      {
        arguments: [
          { files: ['1.cad', '1.bat', '1.aa', '.aa.doc'] }
        ],
        expected: ['1.aa', '1.bat', '1.cad', '.aa.doc']
      },
      {
        arguments: [
          { files: ['.config', 'my.doc', '1.exe', '345.bin', 'green.bat', 'format.c', 'no.name.', 'best.test.exe'] }
        ],
        expected: ['.config', 'no.name.', 'green.bat', '345.bin', 'format.c', 'my.doc', '1.exe', 'best.test.exe']
      },
      {
        arguments: [
          { files: ['1.cad', '2.bat', '1.aa', '1.bat'] }
        ],
        expected: ['1.aa', '1.bat', '2.bat', '1.cad']
      },
    ]
  })
}).run();
