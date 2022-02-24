import Dimension from "../src/Dimension";
import Freight from "../src/Freight";
import Product from "../src/Product";

describe('Freight', () => {
  it('should be able to calculate the freight of one product', () => {
    const product = new Product(
      1, 
      "Instrumentos Musicais", 
      "Guitarra", 
      1000,
      new Dimension(100, 30, 10),
      3
    );
    const freight = new Freight();
    freight.addProduct(product, 1);
    
    expect(freight.getTotal()).toBe(30);
  });

  it('should be able to calculate the freight of four products', () => {
    const product = new Product(
      1, 
      "Instrumentos Musicais", 
      "Guitarra", 
      1000,
      new Dimension(100, 30, 10),
      3
    );
    const freight = new Freight();
    freight.addProduct(product, 4);
    
    expect(freight.getTotal()).toBe(120);
  });

  it('should be able to calculate the freight minimum', () => {
    const product = new Product(
      1, 
      "Instrumentos Musicais", 
      "Guitarra", 
      1000,
      new Dimension(10, 10, 10),
      0.9
    );
    const freight = new Freight();
    freight.addProduct(product, 1);
    
    expect(freight.getTotal()).toBe(10);
  });

});
