import { dictionaries } from '@/app/i18n/dictionaries';

// `es` and `en` must have an identical shape (CLAUDE.md): a key added to one
// locale and forgotten in the other only surfaces as `undefined` rendered on
// the page once someone switches language. Compare structure, not values.
const shape = (value: unknown): unknown => {
  if (Array.isArray(value)) return [shape(value[0])];
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.keys(value as object)
        .sort()
        .map((key) => [key, shape((value as Record<string, unknown>)[key])])
    );
  }
  return typeof value;
};

describe('dictionaries', () => {
  it('keeps es and en structurally identical', () => {
    expect(shape(dictionaries.en)).toEqual(shape(dictionaries.es));
  });

  it('has no empty strings in either locale', () => {
    const empties: string[] = [];
    const walk = (node: unknown, path: string) => {
      if (typeof node === 'string') {
        if (!node.trim()) empties.push(path);
      } else if (Array.isArray(node)) {
        node.forEach((item, i) => walk(item, `${path}[${i}]`));
      } else if (node && typeof node === 'object') {
        Object.entries(node).forEach(([k, v]) => walk(v, `${path}.${k}`));
      }
    };
    walk(dictionaries, 'dictionaries');
    expect(empties).toEqual([]);
  });
});
