//Array

const myArray=[0,1,2,3,4]

console.log(myArray[0]);//0

const myHeors=["Satish","Gopal","Raju"]

console.log(myHeors[2]);//Raju

const myArray_1=new Array(1,2,3,4,5)
console.log(myArray_1[3]);//

//Array methods

myArray.push(6)
console.log(myArray);//[ 0, 1, 2, 3, 4, 6 ]

myArray.pop()
console.log(myArray);//[ 0, 1, 2, 3, 4]

myArray.unshift(6)//Add
console.log(myArray);//[ 6, 0, 1, 2, 3, 4 ]

myArray.shift()//remove
console.log(myArray);

console.log(myArray.includes(3));//true
console.log(myArray.indexOf(2));//2

console.log(myArray.includes(8));//false
console.log(myArray.indexOf(8));//-1


const newArr=myArray.join()
console.log(myArray);//[ 0, 1, 2, 3, 4 ]
console.log(newArr);//0,1,2,3,4
console.log(typeof myArray);//object
console.log(typeof newArr);//string


//slice splice

console.log("A",myArray);//A [ 0, 1, 2, 3, 4 ]
const myn1=myArray.slice(1,3)
console.log(myn1);//[ 1, 2 ]
console.log("B",myArray);//B [ 0, 1, 2, 3, 4 ]

const myn2=myArray.splice(1,3)
console.log("C",myArray);//C [ 0, 4 ]
console.log(myn2);//[ 1, 2, 3 ]

