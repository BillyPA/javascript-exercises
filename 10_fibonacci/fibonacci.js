const fibonacci = function(number) {
    if(number< 0){
        return "OOPS"
    }
    
    let firstPrev =1;
    let secPrev =0;

    for(let i = 2; i<= number; i++){
        let curNum = firstPrev + secPrev;
        secPrev = firstPrev;
        firstPrev = curNum;
    }
    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
