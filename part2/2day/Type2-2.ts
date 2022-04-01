// protected, static문법
// private, protected가 붙은 변수는 클래스 내에서만 변경가능
class User {
    // private는 무조건 클래스 내에서만 사용
    private name = 'kim'
    age = 20;
}

class User2 {
    // protected는 extends된 클래스에서도 사용가능
    protected name = 'kim'
    age = 20;
}

// protected는 extends된 클래스에서도 사용가능
class NewUser extends User2 {
    doThis() {
        // name변수 바꾸는거 가능
        this.name = 'han'
    }
}

let user1 = new NewUser();

console.log(user1)


// static은 부모 class에만 적용되고 자식은 사용불가능
class User3 {
    // extends하면 Fname변수 없음
    static Fname = 'kim'
    age = 20;
}


class User4 {
    static skill = 'js';
    // static은 부모만 사용할수 있어서 this 말고 부모클래스로 사용
    intro = User4.skill + '전문가 입니다.'
}

let user2 = new User4();




//숙제 1 - 누가 쓸 수 있고, 어디서 수정할 수 있는지 설명
class Method {
    // 현재클래스 내에서 현재클래스명 으로 사용가능 - Method.x
    private static x = 10;
    // 모든곳에서 사용가능하지만 부모클래스로 사용가능
    public static y = 20;
    // 클래스내, 상속받은 클래스내에서 사용가능
    protected z = 30;
}


//숙제 2 - 속성에 숫자를 더해주는 함수가 필요합니다
class Method2 {
    private static x = 10;
    public static y = 20;

    static addOne(a :number) {
        Method2.x += a
    }

    static printx() {
        console.log(Method2.x)
    }
    
}

Method2.addOne(3)
Method2.addOne(4)
Method2.printx()

