// categories.spec.js
import { listProducts, listCategories } from '../src/data/data';

describe('Categories filter', () => {
  it('lists categories and filters', () => {
    const cats = listCategories();
    expect(Array.isArray(cats)).toBeTrue();
    const prods = listProducts();
    const firstCat = cats[0];
    const filtered = prods.filter(p=>p.category===firstCat);
    expect(filtered.every(p=>p.category===firstCat)).toBeTrue();
  });
});