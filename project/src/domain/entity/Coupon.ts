export default class Coupon {
  constructor(
    readonly code: string,
    readonly percentage: number,
    readonly expiredDate: Date 
  ) {};

  isExpired(today: Date = new Date()) {
    return this.expiredDate.getTime() < today.getTime();
  };

  calculatedDiscount(amount: number) {
    return (amount * this.percentage) / 100;
  }
}
