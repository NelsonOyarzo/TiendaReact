// home.spec.js
import { listProducts } from '../src/data/data';

describe('Home search', () => {
  it('search finds by name', () => {
    const prods = listProducts();
    const first = prods[0];
    const found = prods.filter(p=>p.name.toLowerCase().includes(first.name.toLowerCase()));
    expect(found.length).toBeGreaterThan(0);
  });
});