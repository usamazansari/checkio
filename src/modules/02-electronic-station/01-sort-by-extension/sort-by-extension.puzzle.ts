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
    },
    {
      name: 'Best',
      fn(a: string[]): string[] {
        const ext = (a: string): string => a.match(/^(\.\w+|\w+\.)$/)?.filter(Boolean)
          ? ''
          : a.split('.').pop() ?? '';
        const sortByExt = (a: string[]): string[] => a.sort((x, y) => ext(x).localeCompare(ext(y)));
        return sortByExt(a);
      }
    },
    {
      name: 'Creative',
      fn(files: string[]): string[] {
        return [
          ...files
            .filter(x => x.lastIndexOf('.') == 0)
            .map(x => x.split('.')
              .reverse()
              .join('.'))
            .sort()
            .map(x => x.split('.')
              .reverse()
              .join('.')),
          ...files
            .filter(x => x.lastIndexOf('.') != 0)
            .map(x => x.split('.')
              .reverse()
              .join('.'))
            .sort()
            .map(x => x.split('.')
              .reverse()
              .join('.'))
        ];
      }
    },
    {
      name: 'Uncategorized',
      fn(files: string[]): string[] {
        let arr = [];
        for (let x of files) {
          let a = x.split(/[\.]/g).filter((i: string) => i.length > 0);
          let b = '';
          if (a.length >= 2 && !x.endsWith('.'))
            b = a[a.length - 1];
          arr.push([b, x.replace(b, '')]);
        }
        return arr.sort().map(x => x[1].concat(x[0]));
      }
    },
    {
      name: 'GitHub Copilot',
      fn(a: string[]): string[] {
        return a.sort((a, b) => {
          const aExt = a.split('.').pop() ?? '';
          const bExt = b.split('.').pop() ?? '';
          return (aExt === bExt)
            ? a.localeCompare(b)
            : aExt.localeCompare(bExt);
        });
      }
    },
  ]
});
