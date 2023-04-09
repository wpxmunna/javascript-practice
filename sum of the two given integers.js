function sumCheck(num1, num2){
    if (num1 === num2){
        return (num1 + num2) * 3;
    }
    else{
        return num1 + num2;
    }
}
console.log(sumCheck(10,30));
console.log(sumCheck(10,10));