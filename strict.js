// STRICT MODE

"use strict"

/* strict mode allows the program to have stricter rules 
which helps us in debugging.
*/

/* 1.  We cannot use any key words reserved for new additons of javascript
 such as Let
*/

// var let = 1

/* 2.  When using strict mode we cannot assign a variable without 
 the var or let keywords.  // The parser will throw an error...
 mVar is not defined. If we do not use strict mode then we can
 javascript will assign 2 to mVar which is a syntax error. 
*/

/*
let myVar = 1
mVar = 2

function foo(){
    if(myVar === 2){
        console.log('hello world')
    }
}
foo(myVar)

*/

/* 3. The parser doesn't allow us to delete variables, 
functions or arguemnts to functions  */

/* 
function foo(){
    
}
delete foo
*/

/* 
let foo = 1
delete foo;
*/

/*
function foo(arg){
    delete arg
}
*/


/* 4.  Using strict mode does not interview when usign eval which
lets us analyze expression as a string */

