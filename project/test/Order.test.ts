import Coupon from '../src/Coupon';
import Item from '../src/Item';
import Order from '../src/Order';

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

  it('should be able to create an order three items', () => {
    const cpf = '935.411.347-80';
    const order = new Order(cpf);

    order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
    order.addItem(new Item(1, "Instrumentos Musicais", "Amplificador", 5000), 1);
    order.addItem(new Item(1, "Instrumentos Musicais", "Cabo", 30), 3);

    const total = order.getTotal();
    expect(total).toBe(6090);
  });

  it('should be able to create an order with discount coupon', () => {
    const cpf = '935.411.347-80';
    const order = new Order(cpf);

    order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
    order.addItem(new Item(1, "Instrumentos Musicais", "Amplificador", 5000), 1);
    order.addItem(new Item(1, "Instrumentos Musicais", "Cabo", 30), 3);
    const coupon = new Coupon("VALE20", 20);

    order.addCoupon(coupon);
    const total = order.getTotal();
    expect(total).toBe(4872);
  });
});