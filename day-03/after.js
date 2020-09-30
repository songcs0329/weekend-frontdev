// 1. 받은 숫자를 역순으로 출력하는 함수
// reverseCount(5,function(i){
//     console.log(i)
// })
// // 1번의 출력 : 5,4,3,2,1

const reverseCount = (count, func) => {
    while(count > 0) {
        func(count);
        count--;
    }
}

reverseCount(5, function(i) {
    console.log(i);
});

// 2. 영어로 된 숫자를 숫자로 변환 하기 (1~10까지만...one two three four ... ten)
// 예외 처리는 없이 정해진 one ~ ten 이 입력이 정확히 들어온다고 가정하고 구현할것

const convertToNumber = (numStr) => {
    // console.log(numStr);
    switch(numStr) {
        case 'one' :
            return 1;
        case 'two' :
            return 2;
        case 'five' :
            return 5;
        case 'six' :
            return 6;
        case 'seven' :
            return 7
        case 'eight' :
            return 8
        case 'nine' :
            return 9
        case 'ten' :
            return 10
        default :
            return NaN;
    }
}

convertToNumber('one') // 1
convertToNumber('two') // 2
convertToNumber('five') // 5
convertToNumber('ten') // 10
convertToNumber('asdasd') // NaN

// 3. 입력에 아래와 같이 각각 쏘나타,K5,말리브,sm3,320D,A4, 에러처리, 되었을때 자동차 브랜드명을 출력
// sm3,320D,c200 의 브랜드는 직접 찾아보세요! 
// (찾아보라는 이유는 예를들어 전혀 모르는 차브랜드를 알아야 하는 회사에 입사했을때,
// 차브랜드에 대해서 조금이라도 이해하고 있어야 하기때문, 그리고 검색을 습관화!!)
const carBrand = (brandName) => {
    switch(brandName) {
        case '쏘나타':
            return '현대자동차';
        case 'K5':
            return '기아자동차';
        case '말리브':
            return '쉐보레';
        case 'sm3':
            return '르노삼성';
        case '320D':
            return 'BMW';
        case 'A4':
            return '아우디';
        default:
            return '자동차 브랜드명이 아닙니다.'
    }
}


carBrand('쏘나타') // 현대자동차
carBrand('K5') // 기아자동차
carBrand('말리브') //  쉐보레
carBrand('sm3') // ?
carBrand('320D') // ?
carBrand('A4') // ?
carBrand('스터디') // 에러처리!

// 4. 1~ n까지의 합을 구하는 함수
const sum = (endNum) => {
    let count, sum;
    count = 1;
    sum = 0;
    while(count <= endNum) {
        sum = sum + count;
        count++;
    }
    return sum;
}

console.log(sum(100));

const FIRST_CONDITION = 5;
const SECOND_CONDITION = 3;
const SET_NUMBER = 10;

// function foo(a, b) {
//     // a 값은 무조건 조건을 따져야 할거 같아서 if문 사용했습니다.
// if (a > FIRST_CONDITION) {
//     a = a < SET_NUMBER ? SET_NUMBER : a;
//     // 위에서 a값과 SET_NUMBER의 조건에 따라 a값을 재할당 했습니다.
//     return a + b;
// }
//     // 위 if 조건이 거짓일 경우 b값과 SECOND_CONDITION을 비교하고 그에 따른 조건에 따라 값을 return했습니다.
// return b > SECOND_CONDITION ? a + b : '조건에 맞지 않는 입력값입니다.';
// }

// 주은님 피드백
function foo(a,b) {
    if(a > FIRST_CONDITION) return a < SET_NUMBER ? (a = SET_NUMBER) + b : a + b;
    return b > SECOND_CONDITION ? a + b : '조건에 맞지 않는 입력값입니다.'
}

console.log(foo(5, 3)); // 조건에 맞지 않는 입력값입니다.
console.log(foo(5, 5)); // 10
console.log(foo(6, 3)); // 13
console.log(foo(3, 5)); // 8
console.log(foo(11, 3)); // 14