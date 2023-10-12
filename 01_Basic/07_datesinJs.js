//Dates

let myDate=new Date()
console.log(myDate);//2023-10-12T00:43:40.726Z

console.log(myDate.toString());//Thu Oct 12 2023 00:51:47 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());//Thu Oct 12 2023

console.log(myDate.toISOString());//2023-10-12T00:51:47.006Z

console.log(myDate.toJSON());//2023-10-12T00:51:47.006Z

console.log(myDate.toLocaleDateString());//10/12/2023

console.log(myDate.toLocaleString());//10/12/2023, 12:51:47 AM

console.log(myDate.toLocaleTimeString());//12:51:47 AM

console.log(myDate.toTimeString());//00:51:47 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toUTCString());//Thu, 12 Oct 2023 00:51:47 GMT

console.log(typeof myDate);//object


let myCreateDate=new Date(2023,0,23)
console.log(myCreateDate.toDateString());//Mon Jan 23 2023

let myCreateDate_1= new Date(2023,0,23,5,3)
console.log(myCreateDate_1.toLocaleString());//1/23/2023, 5:03:00 AM

let myCreateDate_2= new Date("2023-01-14")
console.log(myCreateDate_2.toLocaleString());//1/14/2023, 12:00:00 AM

let myCreateDate_3= new Date("01-14-2023")
console.log(myCreateDate_3.toLocaleString());//1/14/2023, 12:00:00 AM


let myTimeStamp=Date.now()
console.log(myTimeStamp);//1697073316068


console.log(myCreateDate.getTime());//1674432000000


console.log(Math.floor(Date.now()/1000));//1697074418


let newDate= new Date()
console.log(newDate);//2023-10-12T01:36:26.194Z
console.log(newDate.getDate());//12
console.log(newDate.getDay());//4
console.log(newDate.getMonth());//9
console.log(newDate.getFullYear());//2023


