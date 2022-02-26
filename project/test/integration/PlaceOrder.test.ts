import PlaceOrder from "../../src/application/usecase/PlaceOrder";
import CouponRepositoryMemory from "../../src/infra/repository/memory/CouponRepositoryMemory";
import OrderRepositoryMemory from "../../src/infra/repository/memory/OrderRepositoryMemory";
import ProductRepositoryMemory from "../../src/infra/repository/memory/ProductRepositoryMemory";

describe('PlaceOrder', () => {
  it('should be able to make an order', () => {
    const productRepository = new ProductRepositoryMemory();
    const orderRepository = new OrderRepositoryMemory();
    const couponRepository = new CouponRepositoryMemory();

    const placeOrder = new PlaceOrder(
      productRepository,
      orderRepository,
      couponRepository
    );

    const input = {
      cpf: '935.411.347-80',
      orderProducts: [
        { productId: 1, quantity: 1 },
        { productId: 2, quantity: 1 },
        { productId: 3, quantity: 3 },
      ],
      coupon: "VALE20"
    };

    const output = placeOrder.execute(input);
    expect(output.total).toBe(4872);
  });
});
