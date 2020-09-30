// <함수 스코프>
const aaaa = "a"
function functionScope() {
    console.log(aaaa)
    const aaaa = 1
}
// functionScope()
// TDZ: Temporal Dead Zone
// </함수 스코프>

// <블록 스코프>
function blockScope() {
    var a;
    var b;
    if (true) {
        a = 1;
        b = 2;
        const c = 3;
        let d = 4;
    }
    console.log(a);
    console.log(b);
    console.log(c); //error if문안에서 블록스코프임으로... const, let
    console.log(d); //error if문안에서 블록스코프임으로... const, let
}
// blockScope()
// </블록 스코프>

// <실행 컨텍스트 Execution Context>
function ec() {
    const aa = 1; //지역변수
    let bb = 2; //지역변수
    console.log(this);
    console.log(arguments[0]); // 함수선언문에 정의된 파라미터의 수보다 호출시 인자값이 더 많을때 파라미터 제외 인자값을 담아준다.
    console.log(arguments[4]);
}

// 1. VO(Variable Object): local variable(지역변수), parameter(파라미터), arguments
// 2. thisValue (this)
// 3. scope chain(스코프체인)
// </실행 컨텍스트>

// <this>
// 함수를 호출하는 방법에 의해 결정.
function thisF() {
    console.log(this);
}
//thisF() // 1. 함수호출 === window
//new thisF(); // 2. new 호출 === 객체 object
const obj = {
    func: thisF
}
//obj.func() // 3. 메서드로 호출
//thisF.call({name: "suho"}) // 4. call or apply
//thisF.apply({name: "suho2"})
// </this>

// <closure>
function getClosure() {
    // Lexical Environment
    let a = 1; // 자유 변수
    const b = 3 // 자유 변수
    return function closure(){
        a++;
        a = b + a;
        return a;
    }
}
const closure = getClosure();
console.log(closure()); //5
console.log(closure()); //9
console.log(closure()); //13
// </closure>

// <call stack, 이벤트 루프>
function delay() {
    let i = 1000000000;
    while (i--){}
}
function a() {
    console.log("a");
    delay();
    b();
}
function b() {
    console.log("b")
    delay();
    c();
}
function c() {
    console.log("c")
    delay()
}
//console.time("time")
// setTimeout(function(){
//     console.log("setTimeout")
//     console.timeEnd("time")
// }, 500)
// a();
// </call stack, 이벤트 루프>

// <object>
const student1 = {
    name: "수호",
    hp: 1000,
    study: function(subject) {
        this.hp--;
        console.log(`${this.name}님이 ${subject}를(을) 공부해서 생명력이 ${this.hp}가 되었습니다.`)
    }
}
const student2 = {
    name: "주은",
    hp: 1000,
    study: function(subject) {
        this.hp--;
        console.log(`${this.name}님이 ${subject}를(을) 공부해서 생명력이 ${this.hp}가 되었습니다.`)
    }
}

const student3 = {
    name: "수정",
    hp: 1000,
    study: function(subject) {
        this.hp--;
        console.log(`${this.name}님이 ${subject}를(을) 공부해서 생명력이 ${this.hp}가 되었습니다.`)
    }
}

const student4 = {
    name: "창석",
    hp: 1000,
    study: function(subject) {
        this.hp--;
        console.log(`${this.name}님이 ${subject}를(을) 공부해서 생명력이 ${this.hp}가 되었습니다.`)
    }
}


// 생성자 함수. new 호출하기를 기대하는 함수
// function Student(name, hp) {
//     this.name = name;
//     this.hp = hp;
// }
// Student.prototype.study = function(subject) {
//     this.hp--;
//     console.log(`${this.name}님이 ${subject}를(을) 공부해서 생명력이 ${this.hp}가 되었습니다.`)
// }
// const student1 = new Student("test",20)

class Student {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }
    study(subject) {
        this.hp--;
        console.log(`${this.name}님이 ${subject}를(을) 공부해서 생명력이 ${this.hp}가 되었습니다.`)
    }
}

const st1 = new Student("수호", 1000)
const st2 = new Student("주은", 1200)
const st3 = new Student("수정", 500)
const st4 = new Student("창석", 500)
// console.log(st1)
// console.log(st2)
// console.log(st3)
// console.log(st4)
// console.log(student)
// st1.study("수학")
// st1.study("수학")
// st1.study("수학")
//console.log(student.toString())
// <object>

// <map>
const numbers = [1,2,3,4,5,6,7,8,9,10];
const square = numbers.map(num => num * num);
console.log(square);
const even = numbers.filter(num => num % 2 === 0);
console.log(even);
const odd = numbers.filter(num => num % 2 !== 0);
console.log(odd);

const alphabet = ['a','b','c'];
const upper = alphabet.map(str => str.toUpperCase())
console.log(upper);




// </map>