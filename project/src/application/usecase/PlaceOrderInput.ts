export type IOrderProduct = {
  productId: number;
  quantity: number;
};

export default class PlaceOrderInput {
  
  constructor(
    readonly cpf: string,
    readonly orderProducts: IOrderProduct[],
    readonly coupon?: string
  ) {};
}
