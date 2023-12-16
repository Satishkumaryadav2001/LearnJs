const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums=myNums.map( (num) =>num+10)
console.log(newNums);

// Output
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]



const newNums1=myNums.map( (num) =>{num+10})
console.log(newNums1);

// Output

// [
//     undefined, undefined,
//     undefined, undefined,
//     undefined, undefined,
//     undefined, undefined,
//     undefined, undefined
//   ]



const newNums2=myNums.map( (num) =>{ return num+10})
console.log(newNums2);

//OutPut

// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]


const newNums3=myNums
              .map((num) =>num*10)
console.log(newNums3);

// output
// [
//     10, 20, 30, 40,  50,
//     60, 70, 80, 90, 100
//   ]


const newNums4=myNums
              .map((num) =>num*10)
              .map((num) =>num+1)
console.log(newNums4);
// Output
// [
//     11, 21, 31, 41,  51,
//     61, 71, 81, 91, 101
//   ]


const newNums5=myNums
              .map((num) =>num*10)
              .map((num) =>num+1)
              .filter((num) =>num>=40)
console.log(newNums5);

// output
// [
//     41, 51,  61, 71,
//     81, 91, 101
//   ]
