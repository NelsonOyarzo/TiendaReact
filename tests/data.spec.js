// data.spec.js - CRUD tests
import { listProducts, createProduct, updateProduct, deleteProduct, getProductById } from '../src/data/data';

describe('Data layer CRUD', () => {
  it('lists products array', () => {
    const p = listProducts();
    expect(Array.isArray(p)).toBeTrue();
  });
  it('can create, update and delete a product', () => {
    const newP = createProduct({ name:'X', price:1, category:'T', stock:1, description:'t' });
    expect(newP.id).toBeDefined();
    const upd = updateProduct(newP.id, { price: 2 });
    expect(upd.price).toBe(2);
    const found = getProductById(newP.id);
    expect(found).not.toBeNull();
    const ok = deleteProduct(newP.id);
    expect(ok).toBeTrue();
  });
});