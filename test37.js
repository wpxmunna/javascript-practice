function checkMultiple(num){
    if(num%3===0 || num%7===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkMultiple(9));
console.log(checkMultiple(49));
console.log(checkMultiple(76));