// 문제 1 - 1부터 100까지 합
let sum = 0
for(let i=1; i<=100; i++){
    sum += i
}
console.log(sum)

// 문제 2 - 1부터 100까지 홀수만 출력
for(let i = 1; i <= 100; i+=2){
    console.log(i)
}
// 문제 3 - 3,6,9 게임
for(let i=1;i<=50;i++){
    let stringValue = i.toString()
    let result = ""
    for(let j=0;j<stringValue.length;j++){
        if(stringValue[j] == "3" || stringValue[j] == "6" || stringValue == "9"){
            result = "짝"
        }
    }
    console.log(result.length>0?result:i)
}

// 문제 4
let n = 11
let isPrime = true

if(n == 1){
    isPrime = false
}
for(let i=2;i<n;i++){
    if(n % i == 0){
        isPrime = false
    }
}
console.log(isPrime)