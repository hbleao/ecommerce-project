import Order from '../src/Order';
import Product from '../src/Product';
import Coupon from '../src/Coupon';
import Dimension from '../src/Dimension';

describe('Order', () => {
  it('should be able to create an order', () => {
    const cpf = '935.411.347-80';
    const order = new Order(cpf);
    expect(order.getTotal()).toBe(0);
  });

  it('should not be able to create an order with invalid Cpf', () => {
    try {
      const cpf = '111.111.111-11';
      new Order(cpf);
    } catch (error) {
      expect(error).toEqual(Error('CPF Inválido'));
    }
  });

  it('should be able to create an order three products', () => {
    const cpf = '935.411.347-80';
    const order = new Order(cpf);

    order.addItem(new Product(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
    order.addItem(new Product(1, "Instrumentos Musicais", "Amplificador", 5000), 1);
    order.addItem(new Product(1, "Instrumentos Musicais", "Cabo", 30), 3);

    const total = order.getTotal();
    expect(total).toBe(6090);
  });

  it('should be able to create an order with discount coupon', () => {
    const cpf = '935.411.347-80';
    const order = new Order(cpf, new Date("2022-03-01T10:00:00"));

    order.addItem(new Product(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
    order.addItem(new Product(1, "Instrumentos Musicais", "Amplificador", 5000), 1);
    order.addItem(new Product(1, "Instrumentos Musicais", "Cabo", 30), 3);
    const coupon = new Coupon("VALE20", 20, new Date("2022-03-01T10:00:00"));

    order.addCoupon(coupon);
    const total = order.getTotal();
    expect(total).toBe(4872);
  });

  it('should not be able to create an order with expired discount coupon', () => {
    const cpf = '935.411.347-80';
    const order = new Order(cpf, new Date("2022-03-01T10:00:00"));

    order.addItem(new Product(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
    order.addItem(new Product(1, "Instrumentos Musicais", "Amplificador", 5000), 1);
    order.addItem(new Product(1, "Instrumentos Musicais", "Cabo", 30), 3);
    const coupon = new Coupon("VALE20", 20, new Date("2021-03-01T10:00:00"));

    order.addCoupon(coupon);
    const total = order.getTotal();
    expect(total).toBe(6090);
  });

  it('should be able to create an order three products and calculate freight', () => {
    const cpf = '935.411.347-80';
    const order = new Order(cpf);

    order.addItem(
      new Product(1, "Instrumentos Musicais", "Guitarra", 1000, new Dimension(100, 30, 10), 3), 
        1,
      );
    order.addItem(new Product(1, "Instrumentos Musicais", "Amplificador", 5000, new Dimension(100, 50, 50), 20), 1);
    order.addItem(new Product(1, "Instrumentos Musicais", "Cabo", 30, new Dimension(10, 10, 10), 1), 3);

    const total = order.getTotal();
    expect(total).toBe(6350);
  });

  it('should be able to create an order and calculate a freight with minimum of 10 dollars', () => {
    const cpf = '935.411.347-80';
    const order = new Order(cpf);

    order.addItem(
      new Product(1, "Instrumentos Musicais", "Guitarra", 30, new Dimension(10, 10, 10), 0.9), 
        1,
      );
    const total = order.getTotal();
    expect(total).toBe(40);
  });
});