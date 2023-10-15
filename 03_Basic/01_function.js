function  say() {
    console.log("Hello Function");
}
// say();
function add(Num1,Num2){//Pramiter
    console.log(Num1+Num2);
}
add()//NaN  Calling time ask Argument
add(2,4)//6
add(7,"4");//74
add(7 ,"w")//7w
add(7,null)//7

function addtwoNumber1(Num1,Num2){
    console.log(Num1+Num2);
    
}
const result1= addtwoNumber1(2,4)
console.log("Result",result1);//Undefined

function addtwoNumber2(Num1,Num2){
    console.log("Adarsh");
    let result2=Num1+Num2
    return result2
    console.log("Satish");//   not pribt
}
const result2= addtwoNumber2(2,8)
console.log("Result",result2);//Result 6



// function loginUser (username){
//     return `${username} just logged in`
// }
// loginUser("Gopal")//Not Print
// console.log(loginUser("Surendra"));//Surendra just logeed in
// console.log(loginUser(""));//just logeed in  Empty String
// console.log(loginUser());//not value pass   - undefined just logged in


function loginUser (username){
    if(username===undefined){
        console.log("Plese enter a username");
    }
    return `${username} just logged in`
}
loginUser("Gopal")//Not Print
console.log(loginUser("Surendra"));//Surendra just logeed in
console.log(loginUser(""));//just logeed in  Empty String
console.log(loginUser());//not value pass  Plese enter a username  - undefined just logged in


function loginUser (username){
    if(username===undefined){
        console.log("Plese enter a username");
        return 
    }
    return `${username} just logged in`
}
loginUser("Gopal")//Not Print
console.log(loginUser("Surendra"));//Surendra just logeed in
console.log(loginUser(""));//just logeed in  Empty String
console.log(loginUser());//not value pass  Plese enter a username  - undefind



function loginUser1 (username){
    if(!undefined){//same mining just before
        console.log("Plese enter a username");
        return 
    }
    return `${username} just logged in`
}
loginUser1("Gopal")//Not Print
console.log(loginUser1("Surendra"));//Surendra just logeed in
console.log(loginUser1(""));//just logeed in  Empty String
console.log(loginUser1());//not value pass  Plese enter a username  - undefind

function loginUser2 (username="sam"){
    if(!undefined){
        console.log("Plese enter a username");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUser2());//not value pass  Plese enter a username  - undefind
// console.log(loginUser2("Hitesh"));

