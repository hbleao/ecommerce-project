import Dimension from "../../src/domain/entity/Dimension";
import Product from "../../src/domain/entity/Product";

describe('Product', () => {
  it('should be able to create a product with dimensions', () => {
    const product = new Product(
      1, 
      "Instrumentos Musicais", 
      "Guitarra", 
      1000,
      new Dimension(100, 30, 10)
    );

    const volume = product.getVolume();
    expect(volume).toBe(0.03);
  });

  it('should be able to create a product with density', () => {
    const product = new Product(
      1, 
      "Instrumentos Musicais", 
      "Guitarra", 
      1000,
      new Dimension(100, 30, 10),
      3
    );

    const density = product.getDensity();
    expect(density).toBe(100);
  });
});
