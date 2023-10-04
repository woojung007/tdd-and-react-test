class Stack {
  /**
   * 우리의 모듈의 모든 api에 대해서 테스트가 다 작성되어져 있기 때문에 내부 구현사항을 자신감있게 리팩토링 할 수 있다.
   *
   **그런데 테스트코드를 작성할 때 내부 구현사항을 테스트하면 안된다.
   * 예를 들어, Stack에서 제공하는 함수가 이 interface에 의거해서 값들을 조정하고 확인해야지,
   * 이 Stack이 배열을 사용하는지, 배열의 값이 무엇인지, 혹은 내부 상태의 값을 테스트하면 안된다는 것이다.
   * Stack에서 제공하는 api만을 토대로 테스트했기 때문에 Stack의 내부 구현사항이 변경되거나 이름이 변경되는 등 혹은 다른 방식으로 Stack을 구현해도 이 테스트코드에는 전혀 영향을 주지 않는다.
   * 만약 Stack의 내부 구현사항에 대해서 테스트코드를 작성했다면 이름을 조금만 바꾸거나 구현방식을 조금만 바꿔도 전체 테스트가 실패하게 된다. 그런 테스트는 나쁜 테스트라고 할 수 있다.
   *
   * 그렇다면 다음의 Stack을 보자.
   * Stack이라는 자료구조는 안에서 배열을 사용하고 있다.
   * 배열을 사용하는 이유는 index 형태로 자료에 저장되어 있는 아이템에 빠르게 접근하기 위해서이다.
   * 그런데 Stack은 마지막 아이템만 가져오면 되기 때문에 굳이 배열을 사용해서 Stack을 구현할 필요가 없다.
   * 그러므로 이 Stack을 한번 리팩토링 해보자.
   */
  constructor() {
    this._size = 0;
    this.head = null;
  }

  size() {
    return this._size;
  }

  push(item) {
    const node = { item, next: this.head };
    this.head = node;
    this._size++;
  }

  pop() {
    if (this.head === null) {
      throw new Error("Stack is empty");
    }

    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.item;
  }

  peek() {
    if (this.head === null) {
      throw new Error("Stack is empty");
    }

    return this.head.item;
  }
}

/**
 * 이렇게 테스트가 기존에 존재한다면 내부 구현사항을 리팩토링 할때도 자신감있게 리팩토링할 수 있다.
 * 이를 위해서 테스트코드는 내부 구현사항을 테스트하는 것이 아니라
 **사용자의 입장에서 제공되어지는 interface를 토대로해서 테스트해야 유지보수성이 높은 테스트 코드를 만들 수 있다.
 */

module.exports = Stack;
