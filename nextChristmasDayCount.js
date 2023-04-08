const christmasDay = new Date(2023,11,25);
const today = new Date();
const diffDay = christmasDay.getTime() - today.getTime();
const oneDay = 1000*60*60*24;
const findDay = Math.ceil(diffDay/oneDay);
console.log(findDay);
