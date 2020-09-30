function app() {
    radius = prompt("반지름입력");
    num = parseInt(radius, 10);
    area = calcArea(num)
    alert(`반지름은 ${area}입니다.`)
}

function calcArea(radius) {
    return radius * radius * 3.14
}