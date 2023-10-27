//for of


// ["","","",""]

// [{},{},{},{}]

const arr=[1,2,3,4,5]


for (const num of arr) {
    console.log(num);
}
// Output

// 1
// 2
// 3
// 4
// 5

const greetings="Hello World!";
for (const greet of greetings) {
    console.log(greet);
}

// Output
// H
// e
// l
// l
// o
 
// W
// o
// r
// l
// d
// !

//Maps
const map=new Map()
map.set('IN',"India")
map.set('USA',"United OF America")
map.set('fr',"Franc")
console.log(map);

// output
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United OF America',
//     'fr' => 'Franc'
//   }

for (const key of map) {
    console.log(key);
}

// Output

// [ 'IN', 'India' ]
// [ 'USA', 'United OF America' ]
// [ 'fr', 'Franc' ]

for (const [key,value] of map) {
    console.log(key,':-',value);
}

// output

// IN :- India
// USA :- United OF America
// fr :- Franc


// const myObject={
//     'Game1':'NFS',
//     'Game2':'Spiderman'

// }

// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
// }
// TypeError: myObject is not iterable