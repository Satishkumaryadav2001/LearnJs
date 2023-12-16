const promiseOne= new Promise(function(resolve,reject){
    //Do can ansync task
    //Do calls, cryptography,network
    setTimeout(function(){
        console.log("Asynce task 1 is complete");
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consume 1");
})


const promiseTwo= new Promise(function(resolve,reject){
  
    setTimeout(function(){
        console.log("Asynce task 2 is complete ");
       // resolve connect
       resolve()
    },1000)
})

promiseTwo.then(function(){
    console.log("Promise Consume 2");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asynce task 3 is complete");
        resolve()
    },1000)
})
.then(function(){
    console.log("Promise Consume 3");
})



const promiseThree= new Promise(function(resolve,reject){
     setTimeout(function(){
     resolve({user:"Satish",email:"satish@examle.com"})
     },1000)
})

promiseThree.then(function(user){
  console.log(user
    
);
})


const promiseFour_1=new Promise(function(resolve,reject){
    setTimeout(function(){
        let errror=true
         if(!errror){
            resolve({username:"Satish Kumar",password:"Satish@admin.com"})
         }else{
            reject("Error:Somthing went wrong")
         }
    },1000)
})
promiseFour_1.then((user) =>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(errror){
    console.log(errror);
})

const promiseFour_2=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
         if(!error){
            resolve({username:"Satish Kumar",password:"Satish@admin.com"})
         }else{
            reject("Error:Somthing went wrong")
         }
    },1000)
})
promiseFour_2
.then((user) =>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(errror){
    console.log(errror);
}).finally(()=>console.log("The promise is either resolved and rejected"))


const promiseFive_1= new Promise(function(resolve,reject){
setTimeout(function(){
    let error=false
    if(!error){
        resolve({username:"Satish Kumar Yadav",password:"Satish@admin.com"})
     }else{
        reject("Error:Somthing went wrong")
     }
},1000)
});

async function consumePromiseFive_1(){
    const response=await promiseFive_1
    console.log(response);
}
consumePromiseFive_1()


const promiseFive_2= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Satish Kumar Yadav",password:"Satish@admin.com"})
         }else{
            reject("Error:Somthing went wrong")
         }
    },1000)
    });
    
    async function consumePromiseFive_2(){
       try {
        const response=await promiseFive_2
        console.log(response);
       } catch (error) {
        console.log(error);
       }
    }
    consumePromiseFive_2()


    async function getAllUsers(){
     try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response);
        const data = await response.json()
        console.log(data);
     } catch (error) {
        console.log("E:",error);
     }
    }
    getAllUsers()

fetch('https://api.github.com/users/Satishkumaryadav2001')
.then((response) =>{
          return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))