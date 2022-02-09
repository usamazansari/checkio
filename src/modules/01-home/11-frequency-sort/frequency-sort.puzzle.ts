import { Solution } from '../../../common';

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

export const Puzzle = new Solution({
  name: 'Sort Array by Element Frequency',
  categories: [
    {
      name: 'My',
      fn: frequencySort
    },
    {
      name: 'Clear',
      fn(items: any[]): any[] {
        let count: any = {};
        for (const item of items) {
          count[item] = count[item] ? count[item] + 1 : 1;
        }
        return items.sort((a, b) => count[a] != count[b]
          ? count[b] - count[a]
          : items.indexOf(a) - items.indexOf(b));
      }
    },
    {
      name: 'Creative',
      fn(items: any[]): any[] {
        function count(value: any): number {
          let count = 0;
          for (let item of items) {
            if (item === value) count++;
          }
          return count;
        }

        function compare(a: any, b: any): number {
          let diff = count(b) - count(a);
          return !!diff ? diff : items.indexOf(a) - items.indexOf(b);
        }

        items.sort(compare);
        return items;
      }
    },
    {
      name: 'Third Party',
      fn(items: any[]): any[] {
        // a monster solution
        items.length == 0
          ? []
          : items;
        let plain = items.slice();
        plain = plain.some((x: any) => typeof x == 'string')
          ? plain.sort()
          : plain.sort((a: number, b: number): number => a - b);

        let numbers = [];

        for (let i = 0; i < plain.length; i++) {
          let z = plain.slice(plain.indexOf(plain[i]), plain.lastIndexOf(plain[i]) + 1);
          numbers.push(z);
          i = i + z.length - 1;
        }

        let sorted = numbers.sort((a, b) => b.length - a.length);

        for (let i = 0; i < sorted.length; i++) {
          for (let k = i + 1; k < sorted.length; k++) {

            if (sorted[i].length == sorted[k].length) {

              if (items.indexOf(sorted[i][0]) > items.indexOf(sorted[k][0])) {
                let temp = sorted[i];
                sorted[i] = sorted[k];
                sorted[k] = temp;

              }
            }
          }
        }

        return items.length == 0
          ? []
          : plain.some((x: any) => typeof x == 'string')
            ? sorted.join(',').split(',')
            : sorted.join(',').split(',').map((x) => Number(x));

      }
    },
    {
      name: 'Uncategorized',
      fn(items: any[]): any[] {
        function count(list: any[], item: any): any {
          return list.filter((x: any) => x == item).length;
        }
        return items.sort((a, b) => items.indexOf(a) - items.indexOf(b))
          .sort((a, b) => count(items, b) - count(items, a));
      }
    }
  ]
});
