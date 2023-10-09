const score=400

const balance= new Number(100);

console.log(score);//400
console.log(balance);//[Number:400]


console.log(balance.toString());//100


console.log(balance.toString().length);//3


console.log(balance.toFixed(2));//100.00

const otherNumber=23.98777;


console.log(otherNumber.toPrecision(3));24.0


const hundreds=1000000;
console.log(hundreds.toLocaleString());//1,000,00

console.log(hundreds.toLocaleString('en-IN'));//10,00,000


//++++++++++++++++++++++++Math+++++++++++++++++++++++++++++++

console.log(Math);//Object [Math] {}

console.log(Math.abs(-4));//4

console.log(Math.round(4.8));//5

console.log(Math.ceil(4.2));//5

console.log(Math.floor(4.9));//4

console.log(Math.min(2,3,4));//2

console.log(Math.max(2,3,4));//4

console.log(Math.random());//0.03391223113959052  change continue
console.log(Math.random()*10);//3.03391223113959052  change continue

console.log((Math.random()*10)+1);

const min=10
const max=20


//Trick

console.log(Math.floor(Math.random() * (max-min +1))+min); //10 to 20