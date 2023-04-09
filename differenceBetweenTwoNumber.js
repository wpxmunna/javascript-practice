function diffDouble (num){
    if (num<=13){
        return 13-num;
    }
    else{
        return (num-13)*2;
    }
}
console.log(diffDouble(12));
console.log(diffDouble(52));

function diffTriple (num){
    if (num<=19){
        return 19-num;
    }
    else{
        return (num-19)*3;
    }
}
console.log(diffTriple(12));
console.log(diffTriple(52));