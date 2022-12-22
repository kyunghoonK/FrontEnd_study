// 배열 함수

let names = ["KIM",
"PARK",
"LEE",
"NA",
"NO",
"GWAK",
"MOON",
"YOON",
"YANG"]

for(let i=0;i<names.length;i++){
    console.log(names[i])
}

// case 1
function printName(item){
    console.log(item)
}

names.forEach(printName)

// case 2
names.forEach((item, index)=>{console.log(item,index)})

// map
let data = names.map((item)=>{
    return item + "red team"
})
console.log(data)

// ------
let ceolist = [
    {name: "kim", age: 24},
    {name: "Na", age: 33},
    {name: "Park", age: 55},
    {name: "kyo", age: 43}
]
// map
let data2 = ceolist.map((item)=>{
    return item.age
})
console.log(data2)

// filter
let data3 = ceolist.filter((item)=>{
    return item.age == 33
})
console.log(data3)

let data4 = ceolist.filter((item)=>{
    return item.startWith("k")
})
console.log(data4)

// some
let data5 = ceolist.some((item)=>{
    return item.startWith("L")
})
console.log(data5)

// every
let data6 = ceolist.every((item)=>{
    return item.length > 0
})
console.log(data6)

// find -> 해당 조건 첫번째만 반환
let data7 = ceolist.find((item)=>{
    return item.startWith("N") > 0
})
console.log(data7)

// findIndex
let data8 = ceolist.findIndex((item)=>{
    return item == "kim"
})
console.log(data8)