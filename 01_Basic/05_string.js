const name="Satish";
const repoCoount=50


console.log(name + repoCoount +"value");//Satish50value

console.log(`Hello my name is ${name} and my repo count is ${repoCoount}`);//Hello my name is Satish and my repo count is 50

const gameName = new String('SATISH HC COM');
console.log(gameName[0]);// S  (Key value paire)
console.log(gameName.__proto__);//{}

console.log(gameName.length);//6
console.log(gameName.toUpperCase);//[function : toUppercase]


console.log(gameName.charAt(2));//T
console.log(gameName.indexOf('T'));//2

 const newString=gameName.substring(0,4);
 console.log(newString);//SATI

 const anotherString=gameName.slice(0,4);
 console.log(anotherString);//SATI

const newStringOne="    Satish    "
console.log(newStringOne);//.....Satish
console.log(newStringOne.trim());//Satish

const url = "https://Satish.com/satish%20kumar"

console.log(url.replace('%20','-'));//https://Satish.com/Satish-kumar"

console.log(url.includes('satish'));//true

console.log(gameName.split('-'));//['SATISH',HC,COM]



