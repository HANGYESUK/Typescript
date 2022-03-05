// 
var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    // 함수도 가능
    Person.prototype.Func = function (a) {
        console.log('Hello' + a);
    };
    return Person;
}());
var person1 = new Person('kim');
var person2 = new Person('han');
person1.Func("world!"); // 출력결과 Helloworld!
/*숙제1( Car 클래스를 만들고 싶습니다.
1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다.
3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요. )*/
var car = /** @class */ (function () {
    function car(model, price) {
        this.model = model;
        this.price = price;
    }
    car.prototype.tax = function () {
        var tax = (this.price / 10);
        console.log(tax);
    };
    return car;
}());
var car1 = new car("소나타", 3000);
car1.tax();
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var number = [];
        var string = [];
        param.forEach(function (i) {
            if (typeof i === 'string') {
                string.push(i);
            }
            else {
                number.push(i);
            }
        });
        this.num = number;
        this.str = string;
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num);
console.log(obj.str);
var nemo = {
    color: 'red',
    width: 100
};
// 속성이 한개씩 늘어남
var student = { name: 'kim' };
var teacher = { name: 'kim', age: 20 };
var teacher2 = { name: 'kim', age: 20, home: "학교" };
var product = {
    brand: "Samsung",
    seriaNumber: 1360,
    model: ['TV', 'phone']
};
var basket = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
var basket3 = { product: '삼다수', price: 800, card: false };
