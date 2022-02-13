// Literal types - 미리 타입과 값을 정의해 놓는것
let Name :'light' | 'solo' //(string타입에 정의된 단어 2개만 들어올수 있음)
Name = 'light'

function Func(x :string) :1|2 {
    return 1
}

//퀴즈 
type Game = '가위'|'바위'|'보'
function game(x :Game) :Game[] {
    return [x]
}

game('바위')


// as const - 오브젝트에 literal type 지정 알아서 해줌
//          - 오브젝트 속성들에 모두 readonly 붙여줌(오브젝트 속성 변경불가)
var info  = {
    name : "kim" //'kim'이라는 타입으로 지정
} as const 

// a파라미터 안에 'kim'이라는 타입이 들어가는 거임
function myFunc(a :"kim") {

}

// 'kim'이라는 string이 들어오면 오류고 'kim'이라는 타입이 들어와야 됨 
myFunc(info.name)