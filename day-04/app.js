const sum = (arr) => {
    let total = 0;
    let i = 0;
    while(i < arr.length) {
        total += arr[i];
        i++
    }

    return total
}

// console.log(sum([1,2,3,4,5]));
// console.log(sum([4,1,3,16]));

const max = (arr) => {
    let max = arr[0];
    let i = 0;
    while(i < arr.length) {
        max = arr[i] > max ? arr[i] : max;
        i++
    }

    return max;
}
const min = (arr) => {
    let min = arr[0];
    let i = 0;
    while(i < arr.length) {
        min = arr[i] > min ? min : arr[i];
        i++
    }

    return min;
}

// console.log(max([1,7,4]));
// console.log(min([1,7,4]));

const counterIf = (genders, target) => {
    let result = 0;
    let i = 0;
    while(i < genders.length) {
        if(genders[i] === target) result += 1;
        i++;
    }

    return result;
}

const genderArr = ["m","m","m","f","f","m","f"];
// console.log(counterIf(genderArr, "m"));
// console.log(counterIf(genderArr, "f"));

const getDayOfWeek = (num, lang) => {
    const week = {
        KOR: ['월','화','수'],
        ENG: ['MON','TUE','WES']
    }
    return week[lang][num];
}

console.log(getDayOfWeek(0, 'KOR'))
console.log(getDayOfWeek(2, 'ENG'))