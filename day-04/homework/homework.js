function renderHtml(component) {
    const screen = document.querySelector("#screen");
    screen.innerHTML = component;
}
function groupButton(func, count) {
    let i = 0;
    let btnArr = [];
    while(i < count) {
        btnArr += func
        i++
    }
    
    return btnArr
}
function button(props) {
    return `<button class="${props.class}">${props.children}</button>`
}

function $(selector) {
    const el = typeof selector === "string" ? document.querySelectorAll(selector) : selector
    
    return {
        on(action, cb) {
            for(let i = 0; i < el.length; i++) {
                el[i].addEventListener(action, cb)
            }
        },
        hasClass(className) {
            return el.classList.contains(className)
        },
        addClass(className) {
            el.classList.add(className)
        },
        removeClass(className) {
            el.classList.remove(className)
        },
    }
}




/******* 이 아래 사용자 코드는 수정하는 부분이 아닙니다. *******/
// const toggleButton = button({id: "btn", children: "토글"});
const toggleButton = groupButton(button({class: "button", children: "버튼"}), 3)
renderHtml(toggleButton);

$(".button").on("click", function() {
    /** 배우지 않은 this가 처음 등장했으나 이 문제를 푸는데 있어서 이게 무엇인지는 중요치 않음 **/
    /** 지금까지 배운 내용만으로도 추론 가능함 **/
    if ($(this).hasClass("on")) {
        $(this).removeClass("on");
    } else {
        $(this).addClass("on");
    }
});
/******* 이 위 사용자 코드는 수정하는 부분이 아닙니다. *******/