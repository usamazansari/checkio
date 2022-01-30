import { my, best, creative } from './between-markers.puzzle';

const Tests = [
  {
    text: 'What is >apple<',
    begin: '>',
    end: '<',
    expected: 'apple'
  },
  {
    text: '<head><title>My new site</title></head>',
    begin: '<title>',
    end: '</title>',
    expected: 'My new site'
  },
  {
    text: 'No[/b] hi',
    begin: '[b]',
    end: '[/b]',
    expected: 'No'
  },
  {
    text: 'No [b]hi',
    begin: '[b]',
    end: '[/b]',
    expected: 'hi'
  },
  {
    text: 'No hi',
    begin: '[b]',
    end: '[/b]',
    expected: 'No hi'
  },
  {
    text: 'No <hi>',
    begin: '>',
    end: '<',
    expected: ''
  },
  {
    text: 'Never send a human to do a machine\'s job.',
    begin: 'Never',
    end: 'do',
    expected: ' send a human to '
  },
  {
    text: 'No <hi> one',
    begin: '>',
    end: '<',
    expected: ''
  },
  {
    text: '<head><title>title My new site</title></head>',
    begin: '<title>',
    end: '</title>',
    expected: 'title My new site'
  }
];

describe('Between Markers using', () => {
  describe('My Solution', () => {
    Tests.forEach(test => {
      it(`should return '${test.expected}' between '${test.begin}' & '${test.end}'`, () => {
        expect(my(test.text, test.begin, test.end)).toBe(test.expected);
      });
    });
  });

  describe('Best solution', () => {
    Tests.forEach(test => {
      it(`should return '${test.expected}' between '${test.begin}' & '${test.end}'`, () => {
        expect(best(test.text, test.begin, test.end)).toBe(test.expected);
      });
    });
  });

  describe('Creative solution', () => {
    Tests.forEach(test => {
      it(`should return '${test.expected}' between '${test.begin}' & '${test.end}'`, () => {
        expect(creative(test.text, test.begin, test.end)).toBe(test.expected);
      });
    });
  });
});
