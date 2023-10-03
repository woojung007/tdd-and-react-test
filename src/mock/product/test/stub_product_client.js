/**
 * 기존 ProductClient와 동일한 Interface를 가지고 있으면서
 * 네트워크를 사용하지 않고(네트워크에 의존하지 않고) 데이터를 바로 return하는,
 * 실제로 구현 사항이 있는 class 이다.
 */

class StubProductClient {
  async fetchItems() {
    return [
      { item: "🥛", available: true },
      { item: "🍌", available: false },
    ];
  }
}

module.exports = StubProductClient;
