import Order from '../../domain/entity/Order';
import PlaceOrderInput from "./PlaceOrderInput";
import PlaceOrderOutput from "./PlaceOrderOutput";

import ProductRepository from "../../domain/repository/ProductRepository";
import OrderRepository from "../../domain/repository/OrderRepository";
import CouponRepository from "../../domain/repository/CouponRepository";

export default class PlaceOrder {
  constructor(
    readonly productRepository: ProductRepository,
    readonly orderRepository: OrderRepository,
    readonly couponRepository: CouponRepository,
  ) {};

  execute(input: PlaceOrderInput): PlaceOrderOutput {
    const order = new Order(input.cpf);
    
    for(const orderProduct of input.orderProducts) {
      const product = this.productRepository.getById(orderProduct.productId);
      if(!product) throw new Error("Product not found"); 
      order.addItem(product, orderProduct.quantity);
    }

    if(input.coupon) {
      const coupon = this.couponRepository.getByCode(input.coupon);
      if(coupon) order.addCoupon(coupon);
    }

    const total = order.getTotal();
    this.orderRepository.save(order);
    const output = new PlaceOrderOutput(total);
    return output;
  }
}
