import Product from "../../domain/entity/Product";

export default interface ProductRepository {
  getById: (productId: number) => Product | undefined;
}
