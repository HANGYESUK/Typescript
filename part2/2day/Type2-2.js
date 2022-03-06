var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// protected, static문법
// private, protected가 붙은 변수는 클래스 내에서만 변경가능
var User = /** @class */ (function () {
    function User() {
        // private는 무조건 클래스 내에서만 사용
        this.name = 'kim';
        this.age = 20;
    }
    return User;
}());
var User2 = /** @class */ (function () {
    function User2() {
        // protected는 extends된 클래스에서도 사용가능
        this.name = 'kim';
        this.age = 20;
    }
    return User2;
}());
// protected는 extends된 클래스에서도 사용가능
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser.prototype.doThis = function () {
        // name변수 바꾸는거 가능
        this.name = 'han';
    };
    return NewUser;
}(User2));
var user1 = new NewUser();
console.log(user1);
// static은 부모 class에만 적용되고 자식은 사용불가능
var User3 = /** @class */ (function () {
    function User3() {
        this.age = 20;
    }
    // extends하면 Fname변수 없음
    User3.Fname = 'kim';
    return User3;
}());
var User4 = /** @class */ (function () {
    function User4() {
        // static은 부모만 사용할수 있어서 this 말고 부모클래스로 사용
        this.intro = User4.skill + '전문가 입니다.';
    }
    User4.skill = 'js';
    return User4;
}());
var user2 = new User4();
//숙제 1 - 누가 쓸 수 있고, 어디서 수정할 수 있는지 설명
var Method = /** @class */ (function () {
    function Method() {
        // 클래스내, 상속받은 클래스내에서 사용가능
        this.z = 30;
    }
    // 현재클래스 내에서 현재클래스명 으로 사용가능 - Method.x
    Method.x = 10;
    // 모든곳에서 사용가능하지만 부모클래스로 사용가능
    Method.y = 20;
    return Method;
}());
//숙제 2 - 속성에 숫자를 더해주는 함수가 필요합니다
var Method2 = /** @class */ (function () {
    function Method2() {
    }
    Method2.addOne = function (a) {
        Method2.x += a;
    };
    Method2.printx = function () {
        console.log(Method2.x);
    };
    Method2.x = 10;
    Method2.y = 20;
    return Method2;
}());
Method2.addOne(3);
Method2.addOne(4);
Method2.printx();
