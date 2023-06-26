function addStr(str){
    const str1 = str.substring(0,1);
    const finalStr = str1 + str + str1;
    return finalStr;
}
console.log(addStr('a'));
console.log(addStr('ab'));
console.log(addStr('abcd'));