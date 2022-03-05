// Narrowing하는법
// '키워드' in  - 오른쪽 키워드 가 왼쪽의 변수에 들어있는지 검사
function Func(animal) {
    if ('swim' in animal) {
        console.log(animal.swim);
    }
    else if ('fly' in animal) {
        console.log(animal.fly);
    }
}
var animal = { fly: "난다고레~" };
Func(animal);
