const myNums=[1,2,3]
const mytotal=myNums.reduce(function(acc,curr_val) {
    console.log(`accumulator: ${acc} and current_value: ${curr_val}`);
    return acc+curr_val
},0)
console.log(mytotal);

// Output
// accumulator: 0 and current_value: 1
// accumulator: 1 and current_value: 2
// accumulator: 3 and current_value: 3
// 6


const mytotal1=myNums.reduce(function(acc,curr_val) {
    console.log(`accumulator: ${acc} and current_value: ${curr_val}`);
    return acc+curr_val
},3)
console.log(mytotal1);

// Output

// accumulator: 3 and current_value: 1
// accumulator: 4 and current_value: 2
// accumulator: 6 and current_value: 3
// 9


const mytota2=myNums.reduce((acc,curr_val) => acc+curr_val,0)
console.log(mytotal1);//9

const shopingCart=[
    {
        itemName:"js course",
        price:2999   
    },
    {
        itemName:"Html Course",
        price:2999   
    } ,
    {
        itemName:"CSS course",
        price:2999   
    } ,
    {
        itemName:"java course",
        price:2999   
    } ,
    {
        itemName:"DATA Structer course",
        price:2999   
    } ,
    {
        itemName:"React course",
        price:2999   
    } ,
    {
        itemName:"Mysql course",
        price:2999   
    }   
]
const priceToPay=shopingCart.reduce((acc,item) =>acc + item.price,0)
console.log(`Total Price: ${priceToPay}`);

// Total Price: 20993