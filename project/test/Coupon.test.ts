import Coupon from "../src/Coupon";

const discountList = [
  10,
  20,
  30,
  70
];

describe('Coupon', () => {
  it('should be able to create a discount coupon', () => {
    const coupon = new Coupon("VALE20", 20,  new Date());
     const isExpired = coupon.isExpired(); 
    expect(isExpired).toBeFalsy();
  });

  it('should be able to create and calculate a discount coupon', () => {
    const coupon = new Coupon("VALE20", 20,  new Date());
    const discount = coupon.calculatedDiscount(1000);
    expect(discount).toBe(200);
  });

  describe.each(discountList)
  ('should not be able to validate a CPF with same digits', (discountValue) => {
    it(`should be able to create and calculate a discount coupon ${discountValue}`, () => {
      const coupon = new Coupon(`VALE${discountValue}`, discountValue, new Date());
      const discount = coupon.calculatedDiscount(1000);
      expect(discount).toBe(discountValue * 10);
    });
  });

  it('should be able to create an expired discount coupon', () => {
    const coupon = new Coupon("VALE20", 20, new Date('2021-03-01T10:00:00'));
    const isExpired = coupon.isExpired(new Date('2022-03-01T10:00:00'));
    expect(isExpired).toBeTruthy();
  });
});
