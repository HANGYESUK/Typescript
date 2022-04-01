// import 경로에서 변수 가져와 사용(타입도 가능)
import { Fname } from './Export'

console.log(Fname)

function Func(x :unknown[]) {
    return x[0]
}

console.log(Func([4,2]))



// Array 자료에 붙이는 tuple type
// 더 엄격하게 검사(순서)
let dog :[string, boolean] = ['dog', true]

// 물음표는 가장뒤에서만 사용가능
let dog2 :[string, boolean, number?] = ['dog', false, 5]

// rest parameter에서도 적용가능
function Func1(...x :[number, string]) {
    console.log(x)   
}

Func1(1,"222")

let arr = [1,2,3]
// ...타입[] - Array가 들어오는데 갯수는 정하지 않음 
let arr2 :[number, number, ...number[]] = [4,5, ...arr]