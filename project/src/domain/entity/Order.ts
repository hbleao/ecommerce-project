import Coupon from './Coupon';
import Cpf from './Cpf';
import Product from './Product';
import OrderProduct from './OrderProduct';
import Freight from './Freight';

export default class Order {
  public cpf: Cpf;
  public orderProducts: OrderProduct[];
  private coupon: Coupon | undefined;
  private freight: Freight;

  constructor(
      cpf: string, 
      readonly issueDate: Date = new Date()
    ) {
    this.cpf = new Cpf(cpf);
    this.orderProducts = [];
    this.freight = new Freight();
  }

  addItem(product: Product, quantity: number) {
    this.freight.addProduct(product, quantity);
    this.orderProducts.push(new OrderProduct(product.productId, product.price, quantity));
  }

  addCoupon(coupon: Coupon) {
    if(!coupon.isExpired(this.issueDate)) {
      this.coupon = coupon;
    }
  }

  getTotal() {
    let total = 0;

    total = this.orderProducts.reduce((acc, product) => {
      return acc += product.getTotal();
    }, 0);

    if(this.coupon) {
      total -= this.coupon.calculatedDiscount(total);
    }

    total += this.freight.getTotal();

    return total;
  }
}