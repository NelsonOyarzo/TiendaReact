// offers.spec.js
import { listOffers } from '../src/data/data';

describe('Offers', () => {
  it('returns only onSale products', () => {
    const offs = listOffers();
    expect(Array.isArray(offs)).toBeTrue();
    expect(offs.every(p=>p.onSale)).toBeTrue();
  });
});