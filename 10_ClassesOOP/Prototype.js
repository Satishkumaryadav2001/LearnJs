// let myName="Satish    "

// console.log(myName.truelength);

let myHeros=["thor","spiderman"]

let heroPower ={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.satish=function(){
    console.log(`Satish is present in all objects`);
}
Array.prototype.heysatish=function(){
    console.log(`Satish says hello`);
}
// heroPower.satish()
// myHeros.satish()
// myHeros.heysatish()
// heroPower.heysatish()


// inheritance
const User={
    name:"chai",
    email:"chai@google.com"
}
const Teacher ={
    makeVideo:true
} 

const TeachingSupport = {
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS Assignment',
    fulltime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__= User

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername="ChaiAurCode   "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is :${this.trim().length}`);
}
anotherUsername.trueLength()
"Satish".trueLength()
"Ram".trueLength()