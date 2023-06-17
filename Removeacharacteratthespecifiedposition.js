function removeStr(charPos, str){
    var str1 = str.substring(0,charPos);
    console.log(str1);
    var str2 = str.substring(charPos + 1, str.length);
    console.log(str2);
    return str1 + str2;
}
console.log(removeStr(0, 'Python'));
console.log(removeStr(3, 'Python'));
