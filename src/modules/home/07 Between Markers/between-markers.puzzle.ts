/**
 * # Between Markers
 * 
 * - Difficulty: Elementary+
 * 
 * ## Description
 * You are given a `string` and two markers (the initial and final). 
 * You have to find a substring enclosed between these two markers.
 * 
 * But there are a few important conditions:
 * - The initial and final markers are always different.
 * - If there is no initial marker, then the first character should be 
 * considered the beginning of a `string`.
 * - If there is no final marker, then the last character should be 
 * considered the ending of a `string`.
 * - If the initial and final markers are missing then simply return the
 *  whole `string`.
 * - If the final marker comes before the initial marker, then return an
 *  empty `string`.
 * 
 * ## Input
 * - Three arguments.
 * - All of them are `string`s.
 * - The `second` and `third` arguments are the initial and final
 * markers.
 * 
 * ## Output
 * A `string`.
 * 
 * Example:
 * ```ts
 * betweenMarkers('What is >apple<', '>', '<') == 'apple';
 * betweenMarkers('No[/b] hi', '[b]', '[/b]') == 'No';
 * ```
 * 
 * ## How it is used
 * For parsing texts.
 * 
 * ## Precondition
 * Can't be more than one final marker and can't be more than one
 * initial. Marker can't be an empty string
 * 
 * @param {string} text
 * @param {string} begin
 * @param {string} end
 * @return {*}  {string}
 */
function betweenMarkers(text: string, begin: string, end: string): string {
  const beginIndex = text.indexOf(begin);
  const endIndex = text.indexOf(end);
  if (!!(beginIndex + 1)) {
    if (!!(endIndex + 1)) {
      if (beginIndex > endIndex) return '';
      return text.slice(beginIndex + begin.length, endIndex);
    }
    return text.slice(beginIndex + begin.length,);
  }
  if (!!(endIndex + 1)) {
    return text.slice(0, endIndex);
  }
  return text;
}

export { betweenMarkers as my };
