import Coupon from './Coupon';
import Cpf from './Cpf';
import Item from './Product';
import OrderProduct from './OrderProduct';
import Freight from './Freight';

export default class Order {
  public cpf: Cpf;
  public orderProduct: OrderProduct[];
  private coupon: Coupon | undefined;
  private freight: Freight;

  constructor(
      cpf: string, 
      readonly issueDate: Date = new Date()
    ) {
    this.cpf = new Cpf(cpf);
    this.orderProduct = [];
    this.freight = new Freight();
  }

  addItem(item: Item, quantity: number) {
    this.freight.addProduct(item, quantity);
    this.orderProduct.push(new OrderProduct(
      item.productId,
      item.price,
      quantity
    ));
  }

  addCoupon(coupon: Coupon) {
    if(!coupon.isExpired(this.issueDate)) {
      this.coupon = coupon;
    }
  }

  getTotal() {
    let total = 0;

    total = this.orderProduct.reduce((acc, item) => {
      return acc += item.getTotal();
    }, 0);

    if(this.coupon) {
      total -= this.coupon.calculatedDiscount(total);
    }

    total += this.freight.getTotal();

    return total;
  }
}