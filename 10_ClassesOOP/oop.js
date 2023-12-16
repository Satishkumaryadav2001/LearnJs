const user = {
        username:"Satish",
        loginCount:8,
        signedIn:true,

        getUserDetails:function(){
                // console.log("Got user details from database");
                // console.log(`Username:${username}`);
                // console.log(`Username:${this.username}`);
                // console.log(this);
        }
}
// console.log(user);
// console.log(user.getUserDetails());
// console.log(this);



// const promiseOne = new Promise()
// const date= new Date()

function User(username,loginCount,isLoggedIn){
        this.username=username,
        this.loginCount=loginCount,
        this.isLoggedIn=isLoggedIn

        return this
}

const userOne= new User("Satish",12,true)
const userTwo= new User("Adarsh",15,false)
console.log(userOne,userTwo);