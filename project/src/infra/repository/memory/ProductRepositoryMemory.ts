import Product from "../../../domain/entity/Product";
import ProductRepository from "../../../domain/repository/ProductRepository";

export default class ProductRepositoryMemory implements ProductRepository {
  products: Product[];

  constructor() {
    this.products = [
      new Product(1, "Instrumentos Musicais", "Guitarra", 1000),
      new Product(2, "Instrumentos Musicais", "Amplificador", 5000),
      new Product(3, "Instrumentos Musicais", "Cabo", 30),
    ]
  }

  getById (productId: number): Product | undefined {
    return this.products.find(product => product.productId === productId);
  }
}
