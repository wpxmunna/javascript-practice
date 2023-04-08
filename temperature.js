function checkCel (farhTemp){
    const farh = farhTemp;
    const c = 5*(farh-32)/9;
    console.log(farh+'\xB0F is ' + c + '\xB0C.');
}

function checkFarh (celTemp){
    const cel = celTemp;
    const f = (9*cel)/5 + 32;
    console.log(cel+'\xB0F is ' + f + '\xB0C.');
}
checkCel(45);
checkFarh(60);