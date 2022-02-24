import Dimension from "../../src/domain/entity/Dimension";

describe('Dimensions', () => {
  it('should be able to calculate an item dimension', () => {
    const dimension = new Dimension(100, 30, 10);
    const volume = dimension.getVolume();
    expect(volume).toBe(0.03);
  });
});
