// ES6 문법
// 앞에 //를 지우고 확인하면 된다

// -----예제 1-----
// let name = "kyunghoon"
// let age = 26

// // let person = {name:name, age:age}
// let person = {name, age}

// // -----예제 2-----
// let bts = {
//     name : "방탄소년단",
//     num : 7
// }

// // 1
// let name = bts.name
// let num = bts.num
// // 2 => 1과 같은 의미
// let {name, num} = bts



// console.log(name, num)

// ----- 예제3 -----
// let name = "messi"
// let age = 34

// // console.log("제 이름은" + name, "입니다 제 나이는"+age+"입니다")

// console.log(`제 이름은 ${name}입니다. 제 나이는 ${age}입니다`)

// ----- 예제4 -----
// let array = [1,2,3]

// let [a,...rest] = array

// console.log(a)
// console.log(rest)

// ----- 예제4 ----- 합치기
let a = [1,2]
let b = [3,4]
let c = [5,6]

let result = a.concat(b,c)
let result2 = [...a,...b,...c]
console.log(result)

// ----- 예제5 ----- 함수 선언방식
// 1
function foo(){
    console.log("hello")
}

let khk = () =>{
    console.log("hello")
}
// 2

function poo(){
    return "haha"
}

let poo = ()=> "haha"

// this란
let age = 17
let person = {
    name: "hege",
    age: 20,
    getInfo:function(){
        console.log(this.age)
    }
}
person.getInfo() //화살표 함수는 이 this를 할 수 없다

