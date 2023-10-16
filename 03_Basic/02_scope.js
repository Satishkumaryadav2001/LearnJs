
if(true){
    let a=10
    const b=20
     var c=30
     d=40
   

}
// console.log(a);//a is not defined
// console.log(b);//b is not defined
console.log(c);//30
console.log(d);//40




let a1=3001
if(true){
    let a1=10
    const b1=20
     var c1=30
     d1=40
     console.log("INNER a:",a1);

}
console.log("Outer a:",a1);//INNER a: 10     Outer a: 3001
// console.log(b);//b is not defined
console.log(c);//30
console.log(d);//40






function one(){
    const username="Satish"
     function two(){
        const website="youtube"
        console.log(username);
     }
    //  console.log(website);
     two()
}
one()

if(true){
    const username="Satish"
    if(username==="Satish"){
      const website="youtube"
      console.log(username+website);
    }
    // console.log(website);1st Error   website is not defined
}
// console.log(username);2nd Error   username is not defined     


//++++++++++++++++++++++ Interesting+++++++++++++++++++++++

// console.log(addone(5));//6
function addone(num){
    return num+1
}
console.log(addone(5));//6


// addtwo(5)  Error ---- Cannot access 'addtwo' before initialization
const addtwo= function(num){
    return num+2
}
console.log(addtwo(4));//6
