function add3Str(str){
    if(str.length>=3){
        str1 = str.substring(str.length-3);
        return str1 + str + str1;
    }
    else{
        return false;
    }
}
console.log(add3Str('Shift'));
console.log(add3Str('Sft'));
console.log(add3Str('St'));