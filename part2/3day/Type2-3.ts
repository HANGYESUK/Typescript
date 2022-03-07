// import 경로에서 변수 가져와 사용(타입도 가능)
import { Fname } from './Export'

console.log(Fname)

function Func(x :unknown[]) {
    return x[0]
}

console.log(Func([4,2]))