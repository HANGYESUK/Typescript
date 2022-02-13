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



// 함수 자체에 타입 지정
type FucnType = (a :string)=>number

// 함수 표현식으로 사용
let Func2 :FucnType = function Func2 () {
    return 3
} 

// 오브젝트 내에 함수 저장
let member :Member = {
    name : 'kim',
    age : 30,

    plusOne(x)  {
        return x + 1
    },

    chageName : ()=>{
        console.log("안녕하세요")
    } 
}

// 오브젝트 함수 사용
member.plusOne(1)
member.chageName


/* 숙제1 (위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오. 
- plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
- changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다. 
- type 키워드를 쓰든 말든 알아서 합시다. ) */

type Member = {
    name :string,
    age :number,
    plusOne : (x :number)=>number,
    chageName : ()=>void
}


/* 숙제2 (다음 함수2개를 만들어보고 타입까지 정의해보십시오.
- cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
- removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 
- 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 
물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다. ) */

type CutZero = (x :string)=>string

let cutZero :CutZero = (x)=>{
    let result :string = x
    if(x[0] == '0') {
        result = x.replace(/^0+/,'')
    }
    return result
}

cutZero('0하이')

type RemoveDash = (x :string)=>number

let removeDash :RemoveDash = (x)=>{
    let result :number
    result = Number(x.replace(/-/g, ""))
    console.log(typeof(result))
    console.log(result)
    return result
}

removeDash("010-1234-5678")


/* 숙제3 (함수에 함수를 집어넣고 싶습니다.
숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 
이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 
이 함수는 어떻게 만들면 될까요?
둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
실행예시 - 만들함수('010-1111-2222', cutZero, removeDash))*/

type mainType1 = (a :string)=>string
type mainType2 = (a :string)=>number

let main  = (a :string, b :mainType1, c :mainType2)=>{
    let result1 = b(a)
    let result2 = c(result1)
    console.log(result2)
}

main("010-1234-5678", cutZero, removeDash)



// 타입스크립트로 html조작 하는 법
let title = document.querySelector('#title')

// Type Narrowing 써서 사용
if(title != null) {
    title.innerHTML = '반가워요'
}
// instanceof 사용 - (오브젝트 instanceof 클래스) 오브젝트가 오른쪽 클래스의 자식이면 true 아니면 false 리턴
if(title instanceof Element) {
    title.innerHTML = '반가워요'
}
// as 로 속이기 - 웬만하면 쓰면 안됨
title = document.querySelector('#title') as Element
title.innerHTML = '반가워요'

// 물음표 문법 - (변수?.innerHTML) 변수에 innerHTML이 있으면 출력해주고 없으면 undifined 리턴
if(title?.innerHTML != undefined) {
    title.innerHTML = '반가워요'
}

let link = document.querySelector('.link')
if(link instanceof HTMLAnchorElement) {
    link.href = 'https://kakao.com'
}

let btn = document.querySelector('#button')

btn?.addEventListener('click', ()=>{

})

// 숙제1
let img = document.querySelector("#image")

if(img instanceof HTMLImageElement) {
    img.src = 'new.jpg'
}

// 숙제2
//let link2 = document.querySelectorAll(".naver") 
let link2 = document.getElementsByClassName(".naver") //벼


    if(link2 instanceof HTMLAnchorElement) {
        link2.href = 'https://kakao.com'
    } 

