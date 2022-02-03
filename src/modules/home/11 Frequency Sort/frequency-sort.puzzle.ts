interface SortDict {
  item: string | number;
  index: number;
  count: number;
}

/**
 * # Sort Array by Element Frequency
 * 
 * - Difficulty: Elementary+
 * 
 * ## Description
 * Sort the given `Array` so that its elements end up in the decreasing 
 * frequency order, that is, the number of times they appear in 
 * elements.
 * If two elements have the same frequency, they should end up in the 
 * same order as the first appearance in the Array.
 * 
 * ## Input
 * `Array`
 * 
 * ## Output
 * `Array`
 * 
 * ## Example
 * ```ts
 * frequencySort([4, 6, 2, 2, 6, 4, 4, 4]) == [4, 4, 4, 4, 6, 6, 2, 2];
 * frequencySort(['bob', 'bob', 'carl', 'alex', 'bob']) == ['bob', 'bob', 'bob', 'carl', 'alex'];
 * ```
 * 
 * ## Precondition
 * Elements can be `int`s or `string`s
 *
 * @param {(string | number)[]} items
 * @return {*}  {(string | number)[]}
 */
function frequencySort(items: (string | number)[]): (string | number)[] {
  const dict: SortDict[] = [];

  items.forEach((item, index) => {
    const dictItemMap = dict.map(d => d.item);
    if (dictItemMap.includes(item)) dict[dictItemMap.indexOf(item)].count += 1;
    else dict.push({ item, index, count: 1 });
  });

  dict.sort((a, b) => (a.count === b.count) ? a.index - b.index : b.count - a.count);

  const output: (string | number)[] = [];

  dict.forEach(dictItem => {
    for (let index = 0; index < dictItem.count; index++) {
      output.push(dictItem.item);
    }
  });

  return output;
}

export { frequencySort as my };
