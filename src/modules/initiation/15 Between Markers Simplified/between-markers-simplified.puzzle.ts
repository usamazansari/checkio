/**
 * # Between Markers Simplified
 * 
 * - Difficulty: Elementary
 * 
 * ## Description
 * You are given a `string` and two markers (the initial one and final).
 * You have to find a `substring` enclosed between these two markers.
 * But there are a few important conditions.
 * 
 * > This is a simplified version of the 
 * [Between Markers](https://js.checkio.org/mission/between-markers/) 
 * mission.
 * 
 * - The initial and final markers are always different.
 * - The initial and final markers are always 1 char size.
 * - The initial and final markers always exist in a string and go one after another.
 * 
 * ##Input
 * - Three arguments.
 * - All of them are `string`s.
 * - The second and third arguments are the initial and final markers.
 * 
 * ## Output
 * A `string`.
 * 
 * ## Example
 * ```ts
 * betweenMarkers('What is >apple<', '>', '<') == 'apple';
 * betweenMarkers('What is [apple]', '[', ']') == 'apple';
 * betweenMarkers('What is ><', '>', '<') == '';
 * betweenMarkers('[an apple]', '[', ']') == 'an apple';
 * ```
 * 
 * ## How it is used
 * For text parsing.
 * 
 * ## Precondition
 * There can't be more than one final and one initial markers.
 *
 * @param {string} line
 * @param {string} left
 * @param {string} right
 * @return {*}  {string}
 */
function betweenMarkers(line: string, left: string, right: string): string {
  return (line.split(left)[1] || '').split(right)[0] || '';
}

const best = (line: string, left: string, right: string): string => line.substring(line.indexOf(left) + 1, line.indexOf(right));

const creative = (t: string, l: string, r: string): string => t.match(`\\${l}(.*?)\\${r}`)?.filter(_ => !!_)[1] ?? '';

export { betweenMarkers as my, best, creative };
