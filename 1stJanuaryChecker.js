for (let year = 1997; year <= 2050; year++){
    const day = new Date(year, 0, 1);
    if (day.getDay()===0){
        console.log("1st January is being a Sunday  "+year);
    }
}
