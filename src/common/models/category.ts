export class Category {
  name: string;
  fn: Function;

  constructor(
    { name = '', fn = () => void 0 }: Partial<{ name: string; fn: Function; }>) {
    this.name = name;
    this.fn = fn;
  }
}
