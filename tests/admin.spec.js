// admin.spec.js
import { createProduct, deleteProduct } from '../src/data/data';

describe('Admin flows', () => {
  it('can create and delete product', () => {
    const p = createProduct({ name:'A', price:5, category:'C', stock:1, description:'d' });
    expect(p.id).toBeDefined();
    const ok = deleteProduct(p.id);
    expect(ok).toBeTrue();
  });
});