function switchString(str){
    if(str.length<=1){
        return str;
    }
    midStr = str.substring(1, str.length - 1);
    return (str.charAt(str.length - 1) + midStr + str.charAt(0));
}
console.log(switchString('a'));
console.log(switchString('abc'));
console.log(switchString('abcd'));