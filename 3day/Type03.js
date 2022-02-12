// Type Narrowing - 'typeof 변수 === 타입' 일종의 타입지정 더 엄근진하게 타입 기준정함
// if만 쓰지말고 else문 같이 쓰는게 좋음
function Func(x) {
    if (typeof x == 'string') {
        return x + 1;
    }
    else {
        return x + 1;
    }
}
// assertion 문법 - '변수 as 타입' 
// union 타입에서 타입 한개로 확정할때만 씀, 무슨 타입이 들어올지 100% 확신할때만 씀
// as문법 난발하면 타입오류를 안잡아줌(걍 타입 덮어쓰는거) 이렇게 되면 타입스크립트 쓰는 의미가 없음
function Func2(x) {
    var array = [];
    array[0] = x;
}
//타입 만들어서 사용
var animal = { name: "kim", age: 23 };
var girlFreind = {
    name: "수진"
};
var position = { x: 10, y: 20 };
var Newposition = { t: 23 };
var obj = {
    size: 30,
    position: [1, 2, 3]
};
var memInfo = {
    name: "kim",
    phone: 1234
};
var member = {
    name: "han",
    phone: 5678,
    age: true
};
