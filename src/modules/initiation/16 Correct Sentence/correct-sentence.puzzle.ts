/**
 * # Correct Sentence
 * 
 * - Difficulty: Elementary
 * 
 * ## Description
 * For the input of your function, you will be given one sentence. You
 * have to return a corrected version, that starts with a capital letter
 * and ends with a period `.`
 * Pay attention to the fact that not all of the fixes are necessary.
 * If a sentence already ends with a period `.`, then adding another one
 *  will be a mistake.
 * 
 * ## Input
 * A `string`.
 * 
 * ## Output
 * A `string`.
 * 
 * ## Example
 * ```ts
 * correctSentence("greetings, friends") == "Greetings, friends.";
 * correctSentence("Greetings, friends") == "Greetings, friends.";
 * correctSentence("Greetings, friends.") == "Greetings, friends.";
 * ```
 * 
 * ## Precondition
 * No leading and trailing spaces, text contains only spaces ` `, `a-z`,
 * `A-Z`, `,` and `.`
 *
 * @param {string} text
 * @return {*}  {string}
 */
function correctSentence(text: string): string {
  const rectified = text.split(' ')
    .map((_, i) => (!!i)
      ? _
      : _.charAt(0).toUpperCase() + _.slice(1,))
    .join(' ');
  return (rectified.indexOf('.') === -1)
    ? `${rectified}.`
    : rectified;
}

const best = (text: string): string => text
  .replace(/^./, x => x.toUpperCase())
  .replace(/\.$/, '')
  + '.';

const creative = (
  t: string,
  f = t[0],
  e = t.endsWith('.') ? '' : '.'
): string => f.toUpperCase() + t.substr(1) + e;

export { correctSentence as my, best, creative };
