function SetUsername(username){
    //complex db calls
    this.username=username
}

function createuser(username,email,password){
    SetUsername.call(this,username)
    this.email=email
    this.password=password
}
const chai=new createuser("chai","chai123@user.com","12345")
console.log(chai);