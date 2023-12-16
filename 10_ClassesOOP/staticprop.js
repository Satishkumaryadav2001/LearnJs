class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is :${this.username}`);
    }

  static  cretaeId(){
        return `123`
    }
}
const satish = new User("satish")
// console.log(satish.cretaeId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone = new Teacher("iphone","i@phone.com")
iphone.logMe();
console.log(iphone.cretaeId());