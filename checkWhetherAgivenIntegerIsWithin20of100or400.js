function checkInt (n){
    return (Math.abs(100 - n) <= 20 || Math.abs(400 - n) <= 20)
}
console.log(checkInt(30));
console.log(checkInt(100));
console.log(checkInt(90));
console.log(checkInt(40));
console.log(checkInt(35));