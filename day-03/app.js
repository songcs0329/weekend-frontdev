const isEven = (num) => num % 2 === 0

// console.log(isEven(30))
// console.log(isEven(29))

const max = (a,b) => a > b ? a : b

// console.log(max(1,10))
// console.log(max(6,20))
// console.log(max(-1,0))
// console.log(max(0,0))

const FizzBuzz = (num) => {
    if(num % 15 === 0) return "FizzBuzz"
    if(num % 3 === 0) return "Fizz"
    if(num % 5 === 0) return "Buzz"
    return num
}

// console.log(FizzBuzz(30))
// console.log(FizzBuzz(12))
// console.log(FizzBuzz(10))
// console.log(FizzBuzz(23))

const grade = (kor, eng, math) => {
    const average = (kor + eng + math) / 3
    if(average > 90) return "수"
    if(average > 80) return "우"
    if(average > 70) return "미"
    if(average > 60) return "양"
    return "가"
}

// console.log(grade(100,100,100))
// console.log(grade(80,90,75))
// console.log(grade(70,90,60))
// console.log(grade(80,70,50))
// console.log(grade(0,0,0))

const getDayOfWeek = (num) => {
    switch(num) {
        case 0: return "Sunday"
        case 1: return "Monday"
        case 5: return "Friday"
        case 6: return "Monday"
        default : return null
    }
}

// console.log(getDayOfWeek(0))
// console.log(getDayOfWeek(5))
// console.log(getDayOfWeek(9))

const displayGugudan = (dan) => {
    let i = 1;
    while(i < 10) {
        console.log(`${dan} * ${i} = ${dan * i}`)
        i++
    }
    return dan;
}

// displayGugudan(2)

const fizzBizzGame = (end) => {
    let i = 1;
    while(i <= end) {
        console.log(FizzBuzz(i));
        i++;
    }
}

// fizzBizzGame(13)

const loop = (cb, end) => {
    let i = 1;
    while(i <= end) {
        console.log(cb(i))
        i++
    }
}

// loop(FizzBuzz,5);
// loop(displayGugudan,2);
// loop(getDayOfWeek,2);

const asyncLoop = (cb, end ,timer) => {
    let i = 1;
    const intervalId = setInterval(() => {
        if(i <= end) {
            console.log(cb(i));
            i++;
        } else {
            clearInterval(intervalId);
        }
    }, timer)

    // timeout loop
    // for(let count = 1; count <= limit; count++) {
    //     setTimeout(function () {
    //         func(count);
    //     }, timer * count);
    // }

    // let i = 1;
    // while(i <= limit) {
    //     const index = i;
    //     setTimeout(function() {
    //         func(index)
    //     }, timer * index);
    //     i++;
    // }
}

// asyncLoop(FizzBuzz, 15, 500);