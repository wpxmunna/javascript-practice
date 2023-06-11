function PositiveNegative(p, n){
    if((p<0 && n>0) || (p>0 && n<0)){
        return true;
    }
    else{
        return false;
    }
}
console.log(PositiveNegative(2,2));
console.log(PositiveNegative(-2,2));
console.log(PositiveNegative(2,-2));
console.log(PositiveNegative(-2,-2));