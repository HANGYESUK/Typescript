// 타입 종류 : stirng(문자), number(숫자), boolean(true,false), [], {}등
// 타입 지정 : let 변수명 :타입 = 타입에 맞는 문장
// 1강
var Name = "홍길동";
var obj = { kim: "dhd" };
var Union = 123; //Union 타입, 타입2개이상의 새로운 타입
var Snum = { age: 23 };
var john = { name: "hello" };
function go(x) {
    return x * 2;
}
go(23);
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
console.log(Name);
//2강
var Name2 = "한규석";
var Age2 = 26;
var Hometown = "순천시";
var Artist = { name: "AshIsland", song: "Emptyhead" };
var Marry = false;
var num = 10;
var Peples = [Name2, "hong"];
var Peples2 = { member: "kim", member2: "hong" };
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true
};
//소괄호() 활용
var 회원들 = [1, 2, '3', '4'];
var Obj = { a: "123" };
//걍 let이나 var랑 같음 (타입실드 해제) 최근엔 unknown으로 대체
var Any;
// unknown은 any랑 똑같은데 타입체크 가능함
var Unknown;
// 엄근진 타입스크립트  - 타입체크 살벌하게 함
// 예) let 아무거나 :string | number, 아무거나 + 1 하면 안됨
// 변수에 값 할당하면 가능
var Any2;
//Any2 + 1 // 이건 안됨 
Any2 = 3;
Any2 + 1; // 이건 됨
Any2 = "안녕";
Any2 + 1; // 이건 됨
//숙제
var user = "kim";
var age;
var married = false;
var chulsu = [user, age, married];
//숙제2
var school = {
    score: [100, 97, 84],
    teacher: "Phil",
    freind: "John"
};
school.score[4] = false;
school.freind = ["Lee", school.teacher];
