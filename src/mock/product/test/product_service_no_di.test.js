const ProductService = require("../product_service_no_di");
const ProductClient = require("../product_client");

/**
 * ProductService의 테스트코드를 그냥 작성하게 되면 ProductService에서 사용하고 있는 ProductClient까지 테스트하게 된다.
 * 서로 모듈간의 상호작용을 절대 테스트하면 안된다.
 * 그러므로 ProductClient안에 있는 fetchItems 함수가 실패하게 되면 ProductService의 테스트코드도 실패하게 된다.
 * (이렇게 네트워크 상태에 의존하는 테스트 코드는 좋지 않다.)
 * 그렇기 때문에 ProductClient와 별개로 (독립적으로, 의존하지 않도록) 코드를 작성하기 위해서는 ProductClient 자체를 mock 하면 된다.
 * 이렇게 mock을 이용하면 환경적인 요인의 영향을 받지 않게 테스트 코드를 작성하여 서로 의존하지 않도록 만들 수 있다.
 */

jest.mock("../product_client");

describe("ProductService", () => {
  const fetchItems = jest.fn(async () => [
    { item: "🥛", available: true },
    { item: "🍌", available: false },
  ]);

  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService();
    fetchItems.mockClear();
    ProductClient.mockClear();
  });

  it("should filter out only available items.", async () => {
    const items = await productService.fetchAvailableItems();

    expect(items).toEqual([{ item: "🥛", available: true }]);
    expect(items.length).toBe(1);
  });

  it("test", async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
