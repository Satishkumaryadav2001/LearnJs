let score=33;

console.log(typeof score);//number



let score1="33avc";


console.log(typeof score1);//string


let  valueInNumber = Number(score1);

console.log(typeof score1);//string
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//NaN

let score2=null;

console.log(typeof score2);//object


let  valueInNumber1 = Number(score1);

console.log(typeof score2);//object
console.log(typeof valueInNumber1);//number
console.log(valueInNumber1);//NaN

let score3=undefined;

console.log(typeof score3);//undefined


let  valueInNumber2 = Number(score1);

console.log(typeof score3);//undefined
console.log(typeof valueInNumber2);//number
console.log(valueInNumber2);//NaN

let score4=true;

console.log(typeof score4);//boolean


let  valueInNumber3 = Number(score1);

console.log(typeof score4);//boolean
console.log(typeof valueInNumber3);//number
console.log(valueInNumber3);//1


//"33" =>33
//"33ab" =>NaN
//true => 1; false => 0


let isLoggedIn="jh"
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);//true

//1 => true; 0 => false
//"" =>false
//"hi" =>true


let someNumber=33
let stringNumber=String(someNumber);
console.log(stringNumber);//33
console.log(typeof stringNumber);//string
