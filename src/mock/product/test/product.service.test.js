const ProductService = require("../product_service");
const StubProductClient = require("./stub_product_client");

describe("ProductService - Stub", () => {
  let productService;

  beforeEach(() => {
    // Given, Arrange
    productService = new ProductService(new StubProductClient());
  });

  it("should filter out only available items.", async () => {
    // When, Act
    const items = await productService.fetchAvailableItems();

    // Then, Assert
    expect(items).toEqual([{ item: "🥛", available: true }]);
    expect(items.length).toBe(1);
  });
});
