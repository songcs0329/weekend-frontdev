# 스터디 5회차 정리
함수  
1. 함수스코프
2. 블록스코프
  
변수
1. const
2. let
3. var
TDZ(Temporal Dead Zone)  
Hoisting  
  
실행컨텍스트  
1. this
2. 변수객체(arguments, 지역변수, 매개변수)
arguments
함수를 호출할 때 정의된 매개변수 개수보다 인자를 많이 전달한 경우, 초과된 인자들은 버리지 않고 arguments라는 객체에 할당합니다.  
arguments는 모든 함수에서 사용 가능한 지역변수이며, arguments객체를 통하여 초과로 전달된 인자를 참조 할 수 있습니다.  
3. 스코프체인
  
this
1. 함수로 호출
2. 메서드로 호출
3. new로 호출
4. apply, call 호출
  
클로저
클로저는 독립적인 (자유) 변수를 가리키는 함수이다. 또는, 클로저 안에 정의된 함수는 만들어진 환경을 ‘기억한다’.
``` javascript
function getClosure() {
  var text = 'variable 1';
  return function() {
    return text;
  };
}

var closure = getClosure();
console.log(closure()); // 'variable 1'

var base = 'Hello, ';
function sayHelloTo(name) {
  var text = base + name;
  return function() {
    console.log(text);
  };
}

var hello1 = sayHelloTo('승민');
var hello2 = sayHelloTo('현섭');
var hello3 = sayHelloTo('유근');
hello1(); // 'Hello, 승민'
hello2(); // 'Hello, 현섭'
hello3(); // 'Hello, 유근'
```
출력된 결과를 보면 text 변수가 동적으로 변화하고 있는 것처럼 보인다.  
실제로는 text라는 변수 자체가 여러 번 생성된 것이다.  
즉, hello1()과 hello2(), hello3()은 서로 다른 환경을 가지고 있다.  
  
클로저  
<https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures>
  
이벤트루프(call stack)  
<https://meetup.toast.com/posts/89>  
자바스크립트는 단일스레드 기반의 언어이다. === 동시에 하나의 작업만 처리할 수 있다.  
이벤트루프 === 자바스크립트의 동시성 지원  
실제 스크립트가 구동되는 환경(브라우저, node.js...)에서는 여러개의 스레드가 사용된다.  
이러한 구동환경이 단일호출스택을 사용하는 스크립트와 상호연동하기 위해 "이벤트루프"를 사용한다.  
setTimeout 같은 함수에 타이머 써도 이게 정확한건 아니다.(그냥 비동기적으로 실핸하기만 할뿐... 얼추 맞는듯?)  
``` javascript
function delay() {
    for (var i = 0; i < 100000; i++);
}
function foo() {
    delay();
    bar();
    console.log('foo!'); // (3) 실행순서(2)
}
function bar() {
    delay();
    console.log('bar!'); // (2) 실행순서(1)
}
function baz() {
    console.log('baz!'); // (4)
}

setTimeout(baz, 10); // (1) 실행순서(3)
foo();
```
이벤트루프와 테스크 큐(task queue)  
테스크 큐 : 콜백함수들이 대기하고 있는 큐(FIFO)형태의 배열, 호출스택이 비워질 때마다 큐에서 콜백함수를 꺼내와 실행한다.  
위에선 bar()실행하고, foo()실행한 다음 호출스택 비워진거 확인하고 큐에 담겨있던 baz() 실행한다.  
1. 모든 비동기 API들은 작업이 완료되면 콜백함수를 테스트 큐에 추가한다.
2. 현재 실행중인 테스크가 없을 때(호출스택이 비었을때) 큐에 첫번째를 가져와서 실행한다.  
  
프로토타입  
<https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain>  
  
생성자함수
1. new 로 호출하여 객체생성
2, 함수명 첫문자는 대문자 관례
클래스(ES6)  
1. new 로 호출하여 객체생성
2. 클래스명 첫문자는 대문자 관례
  
  

filter vs map  
같은점: 반복, 새로운배열 반환, 로직을 외부에서 받음
다른점:  
filter : 콜백함수가 true값인 애들만 반환 length 달라질 수 있음
map: 콜백함수의 결과값 다 반환 length 그대로