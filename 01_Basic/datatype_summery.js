// Primitive datatypes(call by value)

//7 types :String,Number,Boolean,Null,Undefined,Symbol,BigInt

const score=100
console.log(typeof score)//number

const scoreValue=100.3
console.log(typeof scoreValue);//number


const isLoggedIn=false
console.log(typeof isLoggedIn);//Boolean

const outsideTemp=null
console.log(typeof outsideTemp);//Object

let userEmail;

console.log(typeof userEmail);//undefined

const id=Symbol("123");
console.log(typeof id);//symbol

const  onotherId=Symbol("123");

console.log(typeof onotherId);//symbol

console.log(id===onotherId);//false

const bigNumber=312456789076546767567n


console.log(typeof bigNumber);//bigint

//Reference type (Non-Primitve)

//Array,Object,Function

const heros=["shaktiman","naagraj","dog"];//

console.log(typeof heros);//object
let obj={
    name:"Satish",
    age:23,
}

console.log(typeof obj);//object

const myFunction=function(){
    console.log("Hello Satish");

}

console.log(typeof myFunction);//function




//+++++++++++++++++++++++++++++

// Stack Memory(Perimitive type) --> variable decalare recevied me Copy , Heap Memory(-on Primitive type)  -->variable decalare recevied me Reference

let Name="Satish";

let ontherName=Name

ontherName="Adarsh";
console.log(Name);//Satish
console.log(ontherName);//Adarsh

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne

userTwo.email="user@tata.com";
console.log(userOne.email);///user@tata.com
console.log(userTwo.email);///user@tata.com