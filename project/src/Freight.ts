import Product from "./Product";

export default class Freight {
  private total: number;
  private DISTANCE: number;

  constructor() {
    this.total = 0;
    this.DISTANCE = 1000;
  }

  addProduct(product: Product, quantity: number) {
    this.total += (product.getVolume() * this.DISTANCE * (product.getDensity()/100)) * quantity;
  }

  getTotal() {
    if(this.total > 0 && this.total < 10) {
      return 10;
    }
    return this.total;
  }
}
