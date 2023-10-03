class ProductService {
  /**
   * 클래스 내부에서 스스로의 의존을 결정하고 정의하고 만들어서 사용하는 것은 의존성 주입(Dependency Injection)의 원칙에 어긋난다.
   * 그래서 필요한 것을 내부적으로 직접 만들어서 사용하는 것이 아니라 외부에서 받아와야 한다.
   * (= 의존성을 역전시킨다.)
   */
  constructor(productClient) {
    this.productClient = productClient;
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
