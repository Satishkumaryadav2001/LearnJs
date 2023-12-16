const coding=["js","ruby","java","python","cpp"]


coding.forEach( function  (item) {
    console.log(item);
})

// Output
// js
// ruby
// java
// python
// cpp

coding.forEach( (item) =>{
    console.log(item);
})

// Output
// js
// ruby
// java
// python
// cpp

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

// Output
// js
// ruby
// java
// python
// cpp

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

// Output

// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

const myCoding=[{
    languageName:"JavaScript",
    languageFileName:"js"
},
{
    languageName:"Java",
    languageFileName:"java"
},{
    languageName:"Python",
    languageFileName:"py"
}]

myCoding.forEach((item) =>{
    console.log(item.languageName);
})

// outPut
// JavaScript
// Java
// Python

myCoding.forEach((item) =>{
    console.log(item.languageFileName);
})

// OutPut
// js
// java
// py