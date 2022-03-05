// Narrowing하는법

type Fish = { swim :String }
type Bird = { fly :String }

// '키워드' in  - 오른쪽 키워드 가 왼쪽의 변수에 들어있는지 검사
function Func(animal :Fish | Bird) {
    if ('swim' in animal) {
        console.log(animal.swim)
    }
    else if ('fly' in animal) {
        console.log(animal.fly)
    }
}

let animal = { fly : "난다고레~" }

Func(animal) 



// 비슷한 타입 검사
type Car = { 
    wheel :'4개',
    color : string 
}

type Bike = { 
    wheel :'2개',
    color : string 
}

function Func2(x :Car | Bike) {
    // Car 타입이 맞는지 확인
    if(x.wheel === '4개') {
        console.log('x는 Car타입 입니다.')
    }
    else if(x.wheel === '2개') {
        console.log('x는 Bike타입 입니다.')
    }
}


// 함수 never 타입


// never타입조건 
// 1 - return 값이 없어야 됨
// 2 - endpoint이 없어야 됨(1번 조건이랑 똑같음)
// 함수는 return undifined를 기본으로 가지고 있음
// void타입으로 대체 쌉가능
// 이상하게 코드 짜면 출현
function Func3() :void {
    // 일부러 에러 내서 중단
    throw new Error()
}

// 처음 파라미터 받을때부터 타입쉴드 침
function Func4(pram :string) {
    if(typeof pram == "string") {
        console.log(pram)
    }
    else {
        // else문에 걸릴수가 없어서 never 뜸
        console.log(pram)
    }
}

// public, private 

class User {
    // private 붙으면 자식들이 사용불가능, 클래스 내에서는 수정가능
    private name = 'han'
    // public 붙으면 모든 자식들이 이용가능
    public age

    constructor(a :number) {
        this.age = a
    }
}

let user1 = new User(26)