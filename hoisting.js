"use strict"

//What is variable hoisting?

/* javascript engine is taking var a and moving it above
the console.log and setting it to undefined */
/*
console.log(a);
var a = 1;
*/
/* when using let and const you get an error becuase you cannot access
the variables before initializing */
/*
console.log(b);
let b = 1;

console.log(c);
const c = 1;
*/

// Javascript also hoists function declarations.
/*
foo()
function foo(){
    let a = 1;
    console.log(a)
}
*/

// Javascript does not hoist anonymous functions.
/*
foo()
const foo = () =>{
    let a = 1;
    console.log(a)
}
*/