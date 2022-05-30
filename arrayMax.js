var marks = [45, 90, 98, 45, 60, 42, 36];
var max = marks[0];
for (let i = 0; i< marks.length; i++) {
    var element = marks[i];
    if(element>max){
        max = element;
    }
}
console.log("Highest value is: ", max);