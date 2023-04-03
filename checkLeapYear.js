function CheckLeapYear (year){
    if (year % 100 === 0)  {
        console.log("Leap-Year");
    }
    else if (year % 400 === 0) {
        console.log("Leap--Year");
    }
    else if (year % 4 === 0) {
        console.log("Leap---Year");
    }
    else{
        console.log("Not Leap Year");
    }
}
CheckLeapYear(2000);