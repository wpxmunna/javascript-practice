const today = new Date();
let day = today.getDay();
let month = today.getMonth() + 1;
const year = today.getFullYear();

if (month<10){
    month = '0' + month;
}
if (day<10){
    day = '0' + day;
}
console.log(day + '-' + month + '-' + year);
console.log(day + '/' + month + '/' + year);
console.log(month + '-' + day + '-' + year);
console.log(month + '/' + day + '/' + year);