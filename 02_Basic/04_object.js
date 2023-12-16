// const tideruser=new Object()  //singleton   -> Object.create

const tideruser={}//not singleton   -> Object.create
tideruser.id="123vgj"
tideruser.name="Summy",
tideruser.isLoggedIn=false

// console.log(tideruser);//{ id: '123vgj', name: 'Summy', isLoggedIn: false }

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullame:{
            firstname:"Satish",
            lastame:"Kumar"
        }
    }
}
console.log(regularUser);

//Output ->   
//  {
//     email: 'some@gmail.com',
//     fullname: { userfullame: { firstname: 'Satish', lastame: 'Kumar' } }
//   }

console.log(regularUser.fullname);//{ userfullame: { firstname: 'Satish', lastame: 'Kumar' } }
console.log(regularUser.fullname.userfullame.firstname);//Satish


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}


// const obj3={obj1,obj2}
// console.log(obj3);// obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const obj3={...obj1,...obj2}
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const user=[
    {
        id:1,
        email:"satish@google.com"
    },
    {
        id:1,
        email:"satish@google.com"
    },
    {
        id:1,
        email:"satish@google.com"
    },
    {
        id:1,
        email:"satish@google.com"
    },
    {
        id:1,
        email:"satish@google.com"
    }
]
user[1].email
console.log(tideruser);//{ id: '123vgj', name: 'Summy', isLoggedIn: false }


console.log(Object.keys(tideruser));//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tideruser));//[ '123vgj', 'Summy', false ]
console.log(Object.entries(tideruser));//[ [ 'id', '123vgj' ], [ 'name', 'Summy' ], [ 'isLoggedIn', false ] ]
// console.log(tideruser.hashOwnProperty('isLoggedIn'));//not work this time


const course={
    coursename:'Javascript',
    price:"1000",
    couserInsrructor:"hitesh"
}
// course.couserInsrructor
// const {couserInsrructor} =course
const{couserInsrructor:instructor}=course
console.log(instructor);//hitesh


