/**
 * 서비스 내부에서 fetch를 이용하게 된다면 단위 테스트를 하기 어려워진다.
 * 서비스는 네트워크에 항상 의존하게 되기 때문이다.
 * 그래서 네트워크를 타는게 있다면 별도의 클래스로 분리하고
 * 단위테스트를 작성할때는 mock 또는 stub을 사용해서 네트워크를 사용하지 않고 단위테스트를 할 수 있다.
 */
class UserClient {
  login(id, password) {
    return fetch("http://example.com").then((response) => response.json());
  }
}

module.exports = UserClient;
