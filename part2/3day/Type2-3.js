"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import 경로에서 변수 가져와 사용(타입도 가능)
var Export_1 = require("./Export");
console.log(Export_1.Fname);
function Func(x) {
    return x[0];
}
console.log(Func([4, 2]));
