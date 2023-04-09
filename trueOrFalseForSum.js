function compare (num1, num2){
    return ((num1 == 50 || num2 == 50) || (num1 + num2)==50)
}
console.log(compare(50,50));
console.log(compare(20,30));
console.log(compare(10,20));
console.log(compare(50,10));