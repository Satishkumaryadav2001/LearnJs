// const user={
//     username:"Satish",
//     price:999,


//     welcomeMessage:function(){
//         console.log(`${this.username},welcome to website`);
//         console.log(this);
//     }
// }
// user.welcomeMessage()
// user.username="Chanchala";
// user.welcomeMessage()

// OutPut

// Current Contexts

// Satish,welcome to website
// {
//   username: 'Satish',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// Chanchala,welcome to website
// {
//   username: 'Chanchala',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }


const user={
    username:"Satish",
    price:999,


    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
    }
}
// console.log(this);//{}  empty object

// function chai(){
//     console.log(this);
// }
// chai()


// OutPut



// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Getter/Setter],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [AsyncFunction: fetch],
//   crypto: [Getter]
// }



// function chai2(){
//     let username="Satish"
//     console.log(this);
// }
// chai2()

// Outout


// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Getter/Setter],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [AsyncFunction: fetch],
//   crypto: [Getter]
//}

// function chai3(){
//     let username="Satish"
//     console.log(this.username);
// }
// chai3()//undefined



// const chai4=function(){
//     let username="hitesh";
//     console.log(this.username);
// }
// chai4()//undefined

// const chai5 =() =>{
//     let username="|Satish kumar yadav";
//     console.log(this.username);
// }
// chai5() //undefineed


// const chai6 =() =>{
//     let username="Satish kumar yadav";
//     console.log(this);
// }
// chai6()//{}  empty


// const addTwo = (num1,num2) => {    Excipatalishift return
//     return num1+num2
// }
// console.log(addTwo(1,2));//3\


// const addTwo = (num1,num2) =>   num1+num2

// console.log(addTwo(1,2));//3


// const addTwo = (num1,num2) => (num1+num2)//          Empatlishift return

// console.log(addTwo(1,2));//3


// const addTwo = (num1,num2) => {user: "Satish"}

// console.log(addTwo(1,2));//undefined



const addTwo = (num1,num2) => ({user: "Satish"})

console.log(addTwo(1,2));//{ user: 'Satish' }


