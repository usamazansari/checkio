import type { Category } from './category';

export class Solution {
  name: string;
  categories: Category[];

  constructor(
    { name = '', categories = [] }: Partial<{ name: string, categories: Category[]; }>
  ) {
    this.name = name;
    this.categories = categories;
  }
}
