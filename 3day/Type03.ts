// Type Narrowing - 'typeof 변수 === 타입' 일종의 타입지정 더 엄근진하게 타입 기준정함
// if만 쓰지말고 else문 같이 쓰는게 좋음
function Func(x :number | string) {
    if(typeof x == 'string') {
        return x + 1
    }
    else {
        return x + 1
    }
}

// assertion 문법 - '변수 as 타입' 
// union 타입에서 타입 한개로 확정할때만 씀, 무슨 타입이 들어올지 100% 확신할때만 씀
// as문법 난발하면 타입오류를 안잡아줌(걍 타입 덮어쓰는거) 이렇게 되면 타입스크립트 쓰는 의미가 없음
function Func2(x :number | string) {
    let array :number[] = []
    array[0] = x as number
}


// type alias(별칭) 타입지정
type AnimalType = {
    name :string,
    age :number
}

//타입 만들어서 사용
let animal :AnimalType = {name : "kim", age : 23}                

// readonly
type GirlFreind = {
    readonly name : string
}

const girlFreind :GirlFreind = {
    name : "수진"
}

// '&' extend - 오브젝트 타입 합치기(type 변수 재정의 불가능)
type PositionX = { x :number }
type PositionY = { y :number }

type NewType = PositionX & PositionY

let position :NewType = { x : 10, y : 20 }

 
//숙제1 (object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?)
type PositionT = { t :number }
type PositionS = { t :number }

type NewPosition = PositionT | PositionS

let Newposition :NewPosition = { t : 23 }

/* 숙제2 (다음 조건을 만족하는 타입을 만들어봅시다. 
1. 이 타입은 object 자료형이어야합니다.
2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
type alias로 만들어보셈) */

type objType = {
    color? :string,
    size :number
    readonly position :number[]
}

let obj :objType = {
    size : 30,
    position : [1, 2, 3]
}

/* 숙제3 (다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.) */

type CheckType = {
    name :string,
    phone :number,
    email? :string
}

let memInfo :CheckType = {
    name : "kim",
    phone :1234
}


/* 숙제4 ( 다음을 만족하는 type alias를 만들어보십시오.
1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
3. 멋있게 숙제2 에서 만들어둔  type alias를 재활용해봅시다.)*/

type CheckAgeType = {
    age :boolean
}

type NewCheckType = CheckAgeType & CheckType

let member :NewCheckType = {
    name : "han",
    phone :5678,
    age :true
}
