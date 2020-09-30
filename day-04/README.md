# 스터디 4회차 정리
외부에서 입력받은 숫자만큼 내부에 선언된 로직 반복가능(내부에 제공되어진 일만 반복가능, ex. 우리가 jQuery 쓸때)  
외부에서 입력받은 숫자만큼 외부에 선언된 로직 반복가능(사용자가 원하는 행위 반복가능, ex. 우리가 직접만든 함수)  
  
비동기함수  
1. setTimeout  
외부에서 받은 함수를 입력받은 시간뒤에 실행  
2. setInterval  
외부에서 받은 함수를 입력받은 시간마다 실행  
  
  
```javascript
// 배열
const arr1 = []; // 배열리터럴
const arr2 = new Array();
// 타입이 다른것은 같이 안담는게 좋다.
// 규칙이 있다면 괜찮음

// 선언부
function useState() {
    // 함수내용
    return [state, func];
}
// 사용부
const data = useState();
date[0]; // state
data[1](); // func 실행
// 배열의 특정인덱스 읽기
const color = ['red','blue','lime']
color[0] // red
color[깂]
color[1-1]
color[sum(1,1)]
color[3] = 'black' // 특정인덱스에 값할당



// 객체
const obj1 = {}; // 객체리터럴
const obj2 = new Object();
const person = {
    name: 'song',
    age: 28,
    eat: function(food) {
        console.log(`${food}를 먹는다.`)
    }
    // key, value가 쌍으로 들어가야함
} // key: 값 형태
person.name <=> person[name]; // 'song'
person.age <=> person[age]; // 28
// .을 쓸경우 값을 쓸수없다. 값이 "상수"라서 무조건 그 키값 일때 쓴다...?
person['na' + 'me'] // person[값]
person[calcAge()]
person.eat('사과') // "사과를 먹는다."
```
  
  
동일한 역할도 관점(장소,시간,환경,수준,해석등...)에 따라 달라진다.  
jQuery = DOM 조작을 쉽게할 수 있게 도와주는 대표적 라이브러리  
  
객체  
특정 관점에 따라 역할과 책임을 갖는 그 무엇...  
EX)  
책장객체  
책장.속성(상태) = 책이 보관되는 공간  
책장.기능(동작) = 책찾기(이름, 장르) / 책추가  
책객체
책.속성(상태) = 이름, 가격, 장르...
  
1. 속성(상태)
2. 기능(동작)