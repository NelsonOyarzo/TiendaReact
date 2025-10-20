// checkout.spec.js
describe('Checkout logic', () => {
  it('random payment success simulation', () => {
    spyOn(Math, 'random').and.returnValue(0.1);
    expect(Math.random()).toBeLessThan(0.75);
  });
});