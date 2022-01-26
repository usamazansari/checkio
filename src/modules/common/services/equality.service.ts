export const EQUALITY = {
  shallow: (a: unknown = false, b: unknown = false): boolean => a === b,
  deep: (a: unknown[] = [], b: unknown[] = []): boolean => a.every(_ => b.includes(_))
};
