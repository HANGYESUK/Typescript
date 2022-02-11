// void타입 - 리턴 막아줌
// 타입 지정된 파라미터는 필수(파라미터 옆에 ? 넣어면 옵션으로 변경됨)
// ?는 undifined로 타입 추가
// 엄근진 이라 타입 union으로 지정하면 계산하는 연산 안됨 (숫자 + 숫자)만 가능
function go(x :number | string) :void {
    console.log(x)
}

go(2)

//숙제1 
function Name(n? :string) :void {
    if(n) {
        console.log("안녕하세요" + n)
    }
    else {
        console.log("이름이 없습니다")
    }
}

Name("홍길동")

//숙제2
function Map(n :string | number) :number {
    return n.toString().length
}

Map(345)
Map("2345")

//숙제3