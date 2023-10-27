const myObject={
    js:'JavaScript',
    cpp:'C++',
    rb:'Ruby',
    swift:'swift by apple'
}
for (const key in myObject) {

    console.log(key);
}
// OutPut

// js
// cpp
// rb
// swift

const myObject1={
    js:'JavaScript',
    cpp:'C++',
    rb:'Ruby',
    swift:'swift by apple'
}
for (const key in myObject1) {

    console.log(myObject1[key]);
}

// output
// JavaScript
// C++
// Ruby
// swift by apple

const myObject2={
    js:'JavaScript',
    cpp:'C++',
    rb:'Ruby',
    swift:'swift by apple'
}
for (const key in myObject2) {

    console.log(`${key} shortcut is for ${myObject1[key]}`);
}
// Output

// js shortcut is for JavaScript
// cpp shortcut is for C++
// rb shortcut is for Ruby
// swift shortcut is for swift by apple

const programming=["c","c++","java","python",".net"]

for (const key in programming) {
 
    console.log(key);
}

// output
// 0
// 1
// 2
// 3
// 4

const programming1=["c","c++","java","python",".net"]

for (const key in programming1) {
 
    console.log(programming1[key]);
}

// Output

// c
// c++
// java
// python
// .net


//Maps
const map=new Map()
map.set('IN',"India")
map.set('USA',"United OF America")
map.set('fr',"Franc")
console.log(map);

for (const key in map) {
  console.log(key);
}

// OutPut  Excepation{My code run time}  no output but output

// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United OF America',
//   'fr' => 'Franc'
// }