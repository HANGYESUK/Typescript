function Func(x : number) {
    console.log(x * 2)
}


type animal = {
    readonly name : string,
    age : number,
    sex : string
} 

let Animal : animal = {
    name : "lion",
    age : 7,
    sex : "male"
}


let title = document.getElementById('title')
let btn = document.getElementById('btn')

 
if(title instanceof Element) {
    title.innerHTML = "Hello World"
}

