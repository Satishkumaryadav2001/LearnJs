const coding =["js","c","c++","java","python"]
const value=coding.forEach((item) =>{
    // console.log(item);
    return item//not return
})
console.log(value);//undefined

const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((num) => num>4)

console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ]

const myNums1=[1,2,3,4,5,6,7,8,9,10]
const newNums1=myNums1.filter((num) => {
    // num>5//[]
    return num>3
})

console.log(newNums1);//[ 4,5, 6, 7, 8, 9, 10 ]

const myNums2=[1,2,3,4,5,6,7,8,9,10]
const newNums2=[]

myNums2.forEach((num) =>{
    if(num > 2){
        newNums2.push(num)
    }
})
console.log(newNums2);//[3,4,5,6,7,8,9,10]

const books=[
    {title:"Book One",genre:'Fiction',publish:1981,edition:2004},
    {title:"Book Two",genre:'Non_Fiction',publish:1992,edition:2008},
    {title:"Book Three",genre:'History',publish:1999,edition:2007},
    {title:"Book Four",genre:'Non_Fiction',publish:1989,edition:2010},
    {title:"Book five",genre:'Science',publish:2009,edition:2014},
    {title:"Book six",genre:'Fiction',publish:1987,edition:2010},
    {title:"Book Seven",genre:'Science',publish:1986,edition:1996},
    {title:"Book Eight",genre:'History',publish:1981,edition:2004},
    {title:"Book Nine",genre:'Non-Fiction',publish:1981,edition:1989},
    
    
];
let userBooks=books.filter((bk) =>bk.genre==="History")

// console.log(userBooks);
//OutPut
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     },
//     {
//       title: 'Book Eight',
//       genre: 'History',
//       publish: 1981,
//       edition: 2004
//     }
//   ]
userBooks=books.filter((bk) =>bk.publish>=2000)

console.log(userBooks);

// output
// [
//     {
//       title: 'Book five',
//       genre: 'Science',
//       publish: 2009,
//       edition: 2014
//     }
//   ]