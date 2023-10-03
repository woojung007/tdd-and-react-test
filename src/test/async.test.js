const fetchProduct = require("../async");

// https://jestjs.io/docs/asynchronous
describe("Async", () => {
  it("async - done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 2000 });
      done();
      // 5초가 걸리기 때문에 done을 사용하는 것은 좋지 않다.
    });
  });

  it("async - return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 2000 });
    });
  });

  it("async - await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 2000 });
  });

  it("async - resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 2000,
    });
  });

  it("async - rejects", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
