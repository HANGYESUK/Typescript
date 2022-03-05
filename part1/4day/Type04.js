// Literal types - 미리 타입과 값을 정의해 놓는것
var Name; //(string타입에 정의된 단어 2개만 들어올수 있음)
Name = 'light';
function Func(x) {
    return 1;
}
function game(x) {
    return [x];
}
game('바위');
// as const - 오브젝트에 literal type 지정 알아서 해줌
//          - 오브젝트 속성들에 모두 readonly 붙여줌(오브젝트 속성 변경불가)
var info = {
    name: "kim" //'kim'이라는 타입으로 지정
};
// a파라미터 안에 'kim'이라는 타입이 들어가는 거임
function myFunc(a) {
}
// 'kim'이라는 string이 들어오면 오류고 'kim'이라는 타입이 들어와야 됨 
myFunc(info.name);
// 함수 표현식으로 사용
var Func2 = function Func2() {
    return 3;
};
// 오브젝트 내에 함수 저장
var member = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    chageName: function () {
        console.log("안녕하세요");
    }
};
// 오브젝트 함수 사용
member.plusOne(1);
member.chageName;
var cutZero = function (x) {
    var result = x;
    if (x[0] == '0') {
        result = x.replace(/^0+/, '');
    }
    return result;
};
cutZero('0하이');
var removeDash = function (x) {
    var result;
    result = Number(x.replace(/-/g, ""));
    console.log(typeof (result));
    console.log(result);
    return result;
};
removeDash("010-1234-5678");
var main = function (a, b, c) {
    var result1 = b(a);
    var result2 = c(result1);
    console.log(result2);
};
main("010-1234-5678", cutZero, removeDash);
// 타입스크립트로 html조작 하는 법
var title = document.querySelector('#title');
// Type Narrowing 써서 사용
if (title != null) {
    title.innerHTML = '반가워요';
}
// instanceof 사용 - (오브젝트 instanceof 클래스) 오브젝트가 오른쪽 클래스의 자식이면 true 아니면 false 리턴
if (title instanceof Element) {
    title.innerHTML = '반가워요';
}
// as 로 속이기 - 웬만하면 쓰면 안됨
title = document.querySelector('#title');
title.innerHTML = '반가워요';
// 물음표 문법 - (변수?.innerHTML) 변수에 innerHTML이 있으면 출력해주고 없으면 undifined 리턴
if ((title === null || title === void 0 ? void 0 : title.innerHTML) != undefined) {
    title.innerHTML = '반가워요';
}
var link = document.querySelector('.link');
if (link instanceof HTMLAnchorElement) {
    link.href = 'https://kakao.com';
}
var btn = document.querySelector('#button');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
});
// 숙제1
var img = document.querySelector("#image");
if (img instanceof HTMLImageElement) {
    img.src = 'new.jpg';
}
// 숙제2
var link2 = document.querySelectorAll(".naver"); //querySelectorAll(클래스) - 클래스명인 모든 객체 가져옴
// 가져온게 여러개라 forEach문이나 for문 써서 활용
link2.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com';
    }
});
