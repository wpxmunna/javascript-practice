function stringAdd(str){
    if (str.substring(0,2)=='Py'){
        return str;
    }
    else{
        return "Py" + str;
    }
}
console.log(stringAdd("Python"));
console.log(stringAdd("thon"));