console.log("what")

let horeseName = "King";
let horeseAge = 10;
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

//////////////Lesson 4 code//////////////
const rent = 1000
let horseNickName = "Cookie";
let introductionHorse = `My horse's nickname is ${horseNickName}`;
let introductionStable = `Welcome to ${horseNickName}'s stable.`;
let discount = `Sign up today and receive %10 off for three months!`;
let savings = `That is $${(rent * 3) * .1} in savings!`;
console.log(introductionHorse);
console.log(introductionStable);
console.log(discount);
console.log(savings);




//LESSON-5 Code

/*
if(3 < 4){
    console.log("This is getting output becuz");
}

let isHorseInside = false;

if(isHorseInside){
    console.log(horeseName + " is ïnside")
} else {
    console.log(horeseName + "is outside")
}

if(horeseAge === 10){
    console.log("Our horese is old!")
} else if(horeseAge < 10){
    console.log("our Horese is practically geriatric!")
} else{
    console.log("our horese is still pretty young.")
}

horeseName = "Strawberry"
//horeseName = "Charie"

if(horeseName !== "Charie"){
    console.log(`${horeseName} has come to visit the stables`)
 } else {
    console.log(horeseName + "is lonely")
 }
    */

/*
=== equal to
!== not equal to
> greater than
< less than
>= greater than or equal to
<= less than or equal to

&&
And
all conditions must be true
||
OR
one or more conditions must be
true
!
Negation
runs if the condition is false
*/


//Lab 5a

if (horeseName === "King"){
    console.log(`${horeseName} is inside`)
} else if(horeseName === "Queen"){
    console.log(`${horeseName} is not King`)
} else {
    console.log(`${horeseName} is outside`)
}

//This is for practice

if (horeseAge === 10 && horeseName === "King"){
    console.log(`${horeseName} is 10.`)
} else if (horeseAge > 10 && horeseName === "King"){
    console.log(`${horeseName} is super young.`)
} else if (horeseAge < 10 && horeseName === "King"){
    console.log(`${horeseName} is ready to retire.`)
} else {
    console.log(`${horeseName} is not my horese!`)
}

//For double check!

//Lesson-6
let word = "Rainbow";
console.log(word.charAt(0));