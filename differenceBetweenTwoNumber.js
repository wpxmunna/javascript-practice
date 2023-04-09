function diff (num){
    if (num<=13){
        return 13-num;
    }
    else{
        return (num-13)*2;
    }
}
console.log(diff(12));
console.log(diff(52));