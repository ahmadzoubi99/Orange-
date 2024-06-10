
// -----------------task1------------
console.log('-------------------Task1-----------------');

function tellFortune(jobTitle,geographicLocation,PartnerName,numOfChildren){
console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${PartnerName} with ${numOfChildren} kids.`);
}

tellFortune('software engineer', 'Jordan', 'Alice', 3);
console.log('------------------------------------');

// ------------------------------------------------
// ------------------------------------------------
console.log('-------------------Task2-----------------');

function calculateDogAge(age){
     
    console.log(`Your doggie is ${age*7} years old in dog years!`)
}
calculateDogAge(1);
console.log('------------------------------------');
console.log('-------------------Task3-----------------');

function calculateSupply(age,amountPerDay){
    const maxAge=100;
    const yearsRemaining =maxAge-age;
    const totalAmount=yearsRemaining *365 *amountPerDay;
    console.log(`You will need ${totalAmount} to last you until the ripe old age of ${maxAge}.`);
}
calculateSupply(30,3)
console.log('-------------------Task4-----------------');

function greet(name){
    console.log(`Hello ${name}`);
}
greet("ahmad");

console.log('-------------------Task5 - solution in  javascript file -----------------');

////x undefined Variable 

// function double(7) {
//   return 2 * 7;
// }
// in javascript parameter names  must be a valid

// function double('7') {
//   return 2 * 'x';
// }
// in javascript parameter names  must be a valid

console.log('-------------------Task6 - solution in  javascript file-----------------');
console.log('fix these function')
function double1(x) {
    return 2 * x ;
  }
  
  function double2 (x){
  return 2 * x;
  }
  
  function double3(x) {
    return 2 * x;
  }

console.log('-------------------Task7-----------------');
function cupe(x){
    let c=x*x*x
    console.log(c);
}
cupe(4);
console.log('-------------------Task8-----------------');
function multiply(num1,num2){
    console.log(num1*num2);
}
multiply(2,5);
console.log('-------------------Task9-----------------');
function canIGetADrivingLicense(age){
    if(age>=20){
        console.log(`yes you can`);
       
    }
    else{
        console.log(`please come back after ${20-age} years to get one`)
    }
}
canIGetADrivingLicense(21);
canIGetADrivingLicense(17)
console.log('-------------------Task10-----------------');
function sameLength(str1,str2){
    if(str1.length===str2.length)
        {
            console.log(true);
        }
        else console.log(false);
}
sameLength("tree","clue");
sameLength("tree","car");
console.log('-------------------Task11-----------------');
function largerNubmer(num1,num2){
    if(num1>num2)
        console.log(num1);
    else if(num2>num1)
        console.log(num2);
    else console.log("the tow number is equal");
}
largerNubmer(5,6)
largerNubmer(5,3)
console.log('-------------------Task12-----------------');
function smallerNubmer(num1, num2, num3) {
    if (num1 <= num2 && num1 <= num3) {
        console.log(num1);
    } else if (num2 <= num1 && num2 <= num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}

smallerNubmer(8,6,7)
smallerNubmer(5,99,34)
smallerNubmer(5,99,3)
smallerNubmer(5,3,3)
console.log('-------------------Task13-----------------');

function shorterString(str1, str2, str3, str4, str5) {
    return [str1, str2, str3, str4, str5].reduce((shortest, current) => {
        return current.length < shortest.length ? current : shortest;
    });
}
console.log(shorterString("air", "school", "car", "by", "github"));  // Output: "by"
console.log(shorterString("air", "tr", "car", "by", "github"));  // Output: "tr"
console.log(shorterString("by", "tr", "car", "air", "github"));  // Output: "by"
console.log(shorterString("air", "by", "car", "school", "github"));  // Output: "by"
console.log(shorterString("air", "tr", "by", "car", "github"));  // Output: "by"
console.log(shorterString("air", "tr", "car", "github", "by"));  // Output: "by"

console.log('-------------------Task14-----------------');

function longerString(str1, str2, str3, str4) {
    return [str1, str2, str3, str4].reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    });
}

console.log(longerString("air", "school", "car", "github"));  
console.log(longerString("air", "schoo", "car", "github"));  

console.log('-------------------Task15-----------------');


function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(2));

console.log('-------------------Task16-----------------');
function isOdd(number) {
    return number % 2 !== 0;
}
console.log(isOdd(5));
console.log('-------------------Task17-----------------');
function positive(number) {
    return Math.abs(number);
}
console.log(positive(-5));
console.log('-------------------Task18-----------------');
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(fullName("Adam", "McCallen"));
console.log('-------------------Task19-----------------');
function average(num1, num2, num3, num4, num5) {
    const sum = num1 + num2 + num3 + num4 + num5;
    return sum / 5;
}
console.log(average(1, 2, 3, 4, 5));
console.log('-------------------Task20-----------------');
function randomNumber() {
    return Math.random();
}
console.log(randomNumber());
console.log('-------------------Task21-----------------');
function randomBetweenNumbers(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(randomBetweenNumbers(1, 8));
console.log('-------------------Task22-----------------');
function scoreInUniversity(score) {
    if (score >= 95 && score <= 100) {
        return 'A';
    } else if (score >= 85 && score <= 94) {
        return 'B';
    } else if (score >= 70 && score <= 84) {
        return 'C';
    } else if (score >= 50 && score <= 69) {
        return 'D';
    } else {
        return 'F';
    }
}
console.log(scoreInUniversity(96));
console.log('-------------------Task23-----------------');

let counterValue = 0;
function counter() {
    return ++counterValue;
}
console.log(counter());
console.log('-------------------Task24-----------------');
function resetCounter() {
    const prevCounterValue = counterValue;
    counterValue = 0;
    return `${prevCounterValue} and the counter reset now`;
}
console.log(resetCounter());