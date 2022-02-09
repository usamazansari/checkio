import { Solution } from '../../../common';

interface IFileDictionary {
  filename: string;
  extension: string;
}

/**
 * # Sort by Extension
 * 
 * - Difficulty: Simple
 * 
 * ## Description
 * You are given a `list` of files. You need to sort this `list` by the 
 * file extension. The files with the same extension should be sorted 
 * by name.
 * 
 * ### Some possible cases
 * - Filename cannot be an empty string;
 * - Files without the extension should go before the files with one;
 * - Filename `.config` has an empty extension and a name `.config`;
 * - Filename `config.` has an empty extension and a name `config.`;
 * - Filename `table.imp.xls` has an extension `xls` and a name
 * `table.imp`;
 * - Filename `.imp.xls` has an extension `xls` and a name `.imp`.
 * 
 * ## Input
 * A `list` of filenames.
 * 
 * ## Output
 * A `list` of filenames.
 * 
 * ## Example
 * ```ts
 * sortByExt(['1.cad', '1.bat', '1.aa']) == ['1.aa', '1.bat', '1.cad'];
 * sortByExt(['1.cad', '1.bat', '1.aa', '2.bat']) == ['1.aa', '1.bat', '2.bat', '1.cad'];
 * sortByExt(['1.cad', '1.bat', '1.aa', '.bat']) == ['.bat', '1.aa', '1.bat', '1.cad'];
 * sortByExt(['1.cad', '1.bat', '.aa', '.bat']) == ['.aa', '.bat', '1.bat', '1.cad'];
 * sortByExt(['1.cad', '1.', '1.aa']) == ['1.', '1.aa', '1.cad'];
 * sortByExt(['1.cad', '1.bat', '1.aa', '1.aa.doc']) == ['1.aa', '1.bat', '1.cad', '1.aa.doc'];
 * ```
 *
 * @param {string[]} files
 * @return {*}  {string[]}
 */
function sortByExt(files: string[]): string[] {
  const fileArray: IFileDictionary[] = [];

  files.forEach(file => {
    const splitted = file.split('.');
    const matcher = file.match(/^\./) ?? [];
    const extension = (!!(matcher[0]))
      ? (!(splitted.length - 2))
        ? ''
        : splitted[splitted.length - 1]
      : splitted[splitted.length - 1];
    const filename = !!extension
      ? file.slice(0, -(extension.length + 1))
      : file;
    fileArray.push({ filename, extension });
  });

  return fileArray
    .sort((a, b) => {
      return (a.extension === b.extension)
        ? a.filename.localeCompare(b.filename)
        : a.extension.localeCompare(b.extension);
    })
    .map(file => !!file.extension
      ? `${file.filename}.${file.extension}`
      : file.filename);
}

export const Puzzle = new Solution({
  name: 'Sort by Extension',
  categories: [
    {
      name: 'My',
      fn: sortByExt
    }
  ]
});
