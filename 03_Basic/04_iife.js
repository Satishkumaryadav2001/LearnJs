//Immediately Invoked function Expressions(iiFE)

function chai1(){
    console.log('DB CONNECTED');
}
chai1();//DB CONNECTED



(function chai2(){
   // Name IIFE
    console.log('DB CONNECTED One');
})();//DB CONNECTED One

( (name) =>{
    console.log(`Db Connected Two ${name}`);
})("Satish")//Db Connected Two Satish