//  Object.getOwnPropertyDescriptor(Math)

// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI);


// const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter);


const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true,

    OrderChai:function(){
        console.log("Chai Nahi Babi ");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    // writable:false,
    enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (const [key,value] of Object.entries(chai)) {
            if(typeof value !=='function'){
                console.log(`${key}:${value}`);
            }
}