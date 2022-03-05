// 타입 종류 : stirng(문자), number(숫자), boolean(true,false), [], {}등
// 타입 지정 : let 변수명 :타입 = 타입에 맞는 문장
// 1강
let Name :string = "홍길동"

let obj :{kim? : string} = {kim:"dhd"}

let Union :string[] | number = 123; //Union 타입, 타입2개이상의 새로운 타입

type Snum = string | {name? :string, age:number} 

let Snum :Snum = {age:23}

type Member = {
    [key :string] :string
}

let john :Member = {name : "hello"}

function go(x :number) :number {
    return x*2
}

go(23)

class User {
    name;
    constructor(name :string) {
        this.name = name;
    }
}

console.log(Name)


//2강
let Name2 :string = "한규석"

let Age2 :number = 26

let Hometown :string = "순천시"

let Artist :{name :string, song :string} = {name : "AshIsland", song : "Emptyhead"}

let Marry :boolean = false

let num :number = 10

let Peples :string[] | number[] = [Name2, "hong"]



let Peples2 :{member :string, member2 :string} = {member : "kim", member2 : "hong"}

let project :{
    member :string[],
    days :number,
    started :boolean
} = {
    member : ["kim", "park"],
    days : 30,
    started : true
}

//소괄호() 활용
let 회원들 :(number | string)[] = [1,2,'3','4']
let Obj :{a :(string | number)} = {a : "123"}

//걍 let이나 var랑 같음 (타입실드 해제) 최근엔 unknown으로 대체
let Any :any
// unknown은 any랑 똑같은데 타입체크 가능함
let Unknown :unknown

// 엄근진 타입스크립트  - 타입체크 살벌하게 함
// 예) let 아무거나 :string | number, 아무거나 + 1 하면 안됨
// 변수에 값 할당하면 가능
let Any2 :string|number 

//Any2 + 1 // 이건 안됨 

Any2 = 3
Any2 + 1 // 이건 됨

Any2 = "안녕"
Any2 + 1 // 이건 됨

//숙제
let user :string = "kim"
let age :undefined | number
let married :boolean = false
let chulsu :(string | undefined | number | boolean)[] = [user, age, married]

//숙제2
let school :{
    score :(number | boolean)[]
    teacher :string,
    freind :string | string[]

} = {
    score : [100, 97, 84],
    teacher : "Phil",
    freind : "John"
}

school.score[4] = false
school.freind = ["Lee", school.teacher]