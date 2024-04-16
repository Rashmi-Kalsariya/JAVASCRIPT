// Variable Declaration

let a=10;
let b=30;

console.log(a+b);


// Const Values (fixed)

const r=5;
let q=15;

// r=10;  
//Error
//Can't change the value after declare it as const.

console.log(r-q);


// var Keyword
// Can change the Even value after the Declaration 

var d=7;
var e=9;

d=10;

console.log(d*e);




// Difference between var & let

function varExample() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10
}
varExample();
console.log(x); // ReferenceError: x is not defined


function letExample() {
    if (true) {
        let y = 20;
    }
    console.log(y); // Error: ReferenceError: y is not defined
}
letExample();
console.log(y); // Error: ReferenceError: y is not defined
