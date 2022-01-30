/**
 * Stock interface
 *
 * @interface Stock
 */
interface Stock {
  name: string,
  price: number,
};

/**
 * # Bigger Price
 * 
 * - Difficulty: Elementary+
 * 
 * ## Description
 * You have a table with all available goods in the store. The data is 
 * represented as a list of `objects`
 * 
 * Your mission here is to find the **TOP** most expensive goods. The 
 * amount we are looking for will be given as a first argument and the 
 * whole data as the second one
 * 
 * ## Input
 * - `Integer` and `array` of `object`s.
 * - Each `object` has two attributes `name` and `price`
 * 
 * ## Output
 * the same as the second Input argument.
 * 
 * Example
 * ```ts
 * biggerPrice(2, [
 *     {"name": "bread", "price": 100},
 *     {"name": "wine", "price": 138},
 *     {"name": "meat", "price": 15},
 *     {"name": "water", "price": 1}
 * ]) == [
 *     {"name": "wine", "price": 138},
 *     {"name": "bread", "price": 100}
 * ];
 * biggerPrice(1, [
 *     {"name": "pen", "price": 5},
 *     {"name": "whiteboard", "price": 170}
 * ]) == [{"name": "whiteboard", "price": 170}];
 * 
 * @param {number} limit
 * @param {Stock[]} data
 * @return {*}  {Stock[]}
 */
function biggerPrice(limit: number, data: Stock[]): Stock[] {
  return data.sort((a, b) => b.price - a.price).slice(0, limit);
}

const best = (limit: number, data: Stock[]): Stock[] => data.sort((x, y) => y.price - x.price).slice(0, limit);

const creative = (limit: number, data: Stock[]): Stock[] => {
  data.sort((a, b) => a['price'] - b['price']);
  return data.reverse().slice(0, limit);
};

export { biggerPrice as my, best, creative };
