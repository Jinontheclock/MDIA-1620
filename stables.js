console.log("what")

const horeseName = "King";
let horeseAge = 939393;
console.log(horeseAge);
let ishorseAge = true;
console.log(ishorseAge);

console.log(typeof 22222)
console.log(typeof "22222")
console.log(typeof true);
console.log(typeof horeseAge)

//let = this value can be updated
//const = this value can't be updated
//let camelCaseExample; = use camelCase for varialbes
//const STABLE_MONTHLY_FEE; = use uppercase for constants

const STABLE_MONTHLY_FEE = 100;
console.log(STABLE_MONTHLY_FEE);
console.log(STABLE_MONTHLY_FEE * horeseAge);
console.log(STABLE_MONTHLY_FEE * 3);
console.log(STABLE_MONTHLY_FEE / 2);
console.log(STABLE_MONTHLY_FEE ** 2);

let horeseAgeIn10Years = horeseAge + 10;

console.log(horeseAgeIn10Years);

let horseIntroduction = " is the name of my horse";
let rentIntroduction = "it costs " + STABLE_MONTHLY_FEE + " to board " + horeseName;
console.log(rentIntroduction);
let stableIntroduction = "welcome " + horeseName + "'s stable😜"
console.log(stableIntroduction)

console.log(horeseName + horseIntroduction);

let rentIntroductions = `It costs ${STABLE_MONTHLY_FEE} to board ${horeseName}`;

console.log(rentIntroduction);