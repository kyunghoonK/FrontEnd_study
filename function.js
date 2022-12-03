function makeBurger(type,size,num){
    console.log("빵두기")
    console.log("상추두기")
    if(num < 1){
        return "1개 이상 주문해 주세요."
    }

    if(type == "불고기"){
        console.log("고기 패티 두기")
    }else if(type == "새우"){
        console.log("새우 패티 두기")
    }

    console.log("뚜껑덥기")
    console.log(type,"버거",size,"사이즈",num,"개 준비완료")

    return "완료 되었습니다."
}

function serveCoke(){
    console.log("콜라통 선택")
    console.log("얼음 담기")
    console.log("콜라 담기")
}

function serveFrenchFries(){
    console.log("감튀박스 선택")
    console.log("감튀 담기")
}

let result = makeBurger("불고기", "M", 0)
console.log("버거 프로세스 결과", result)

function makeSet(){
    makeBurger("새우","M",2)
    serveFrenchFries()
    serveCoke()
}