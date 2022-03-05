// 
class Person {

    name :string // 타입스크립트 constructor는 위에 변수가 선언 되어 있어야 사용 가능(타입지정도)

    constructor(a :string) {
        this.name = a;
    }

    // 함수도 가능
    Func(a :string) {
        console.log('Hello' + a)
    }
}


let person1 = new Person('kim')
let person2 = new Person('han')

person1.Func("world!") // 출력결과 Helloworld!

/*숙제1( Car 클래스를 만들고 싶습니다.
1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다. 
3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요. )*/

class car {
    model :string
    price :number
    constructor(model :string, price :number) {
        this.model = model
        this.price = price
    }

    tax() {
        let tax = (this.price/10)
        console.log(tax)
    }
}

let car1 = new car("소나타", 3000)
car1.tax()

/*숙제2(class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 
2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고 
3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈 )*/

type word = (string | number)

class Word {
    num 
    str 
    constructor(...param: word[]) {
        let number :number[] = [];
        let string :string[] = [];

        param.forEach((i)=>{
            if(typeof i === 'string') {
                string.push(i)
            }
            else {
                number.push(i)
            }
        })

        this.num = number;
        this.str = string;
    }
}

let obj = new Word('kim', 3, 5, 'park')
console.log(obj.num)
console.log(obj.str)

//interface 문법 - 상속 쌉가능

type Square = {
    color :string,
    width :number
}

interface ISquare {
    color :string,
    width :number
}

let nemo :Square = {
    color : 'red',
    width : 100
}

// interface 인페이름 extends 상속받을 인페이름(인터페이스로 상속해서 사용)
// type 에서 &로 쓰는거랑 비슷 함 type 이름 = 타입1 & 타입2
// 차이점 interface는 중복선언 가능  type은 불가능

interface Student {
    name :string
}
// Student상속
interface Teacher extends Student {
    age :number
}
// Student상속 받은 Teacher 상속
interface Teacher2 extends Teacher {
    home :string
}

// 속성이 한개씩 늘어남
let student :Student = { name : 'kim' }
let teacher :Teacher = { name : 'kim', age : 20 }
let teacher2 :Teacher2 = { name : 'kim', age : 20, home : "학교" }



/*숙제1(interface 이용해서 간단하게 타입을 만들어봅시다
let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?
무슨 타입일지는 알아서 기입합시다. )*/ 
interface Product {
    brand :string,
    seriaNumber :number,
    model :string[]
}


let product :Product = {
    brand : "Samsung",
    seriaNumber : 1360,
    model : ['TV', 'phone']
}

/*숙제2(array 안에 object 여러개가 필요합니다.
쇼핑몰 장바구니를 구현하려고 하는데 
let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 
이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요? 
오늘 배운 interface 문법을 써봅시다.)*/ 
interface Product2 {
    product :string,
    price :number
}


let basket :Product2[] = [{product : '청소기', price : 7000}, {product : '삼다수', price : 800}]

/*숙제3( 위에서 만든 타입을 extends 해봅시다.
갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다. 
{ product : '청소기', price : 7000, card : false }
위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.)*/
interface Product3 extends Product2 {
    card : boolean
}

let basket3 :Product3 =  {product : '삼다수', price : 800, card : false}
