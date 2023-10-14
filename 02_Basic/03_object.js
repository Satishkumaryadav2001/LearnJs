//singleton   -> Object.create

//object literals   
const mySyn=Symbol("Key1")

const jsUser={           //Object

      name:"Satish",
      age:23,
      [mySyn]:"mykey1",
      email:"satish@google.com",
      location:"Sonbhadra",
      isLoggedIn:false,
      iastLoginDays:["Monday","Saturday"]

}
console.log(jsUser.email);//satish@google.com
console.log(jsUser["email"]);//satish@google.com
console.log(jsUser[mySyn]);//mykey1


jsUser.email="satish@chatgpt.com";
console.log(jsUser);//satish@chatgpt.com

Object.freeze(jsUser)
jsUser.email="satish@microshoft.com";
console.log(jsUser);//satish@chatgpt.com    not change

jsUser.greetng=function(){
      console.log("hello js user");
}
console.log(jsUser.greetng);//undefined

console.log(jsUser.greetng());//jsUser.greetng is not a function  freeze method already defined the issue

console.log(jsUser.greetng);//[Function (anonymous)]

console.log(jsUser.greetng());//hello js user

jsUser.greetng_Two=function(){
      console.log(`hello js user,${this.name}`);
}
console.log(jsUser.greetng_Two())//hello js user,Satish