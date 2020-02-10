//What is scope chain?

/* Function scopes can nest inside other functions.  When an 
inner function needs to use a variable, the function will look up 
the scope chain*/

/* It first looks in its own function scope for the variable, 
then it's outer scope and keeps going outer and outer 
until it reaches the global scope. */

/* Scope chain is defined by the way the program is written in the file.*/

/* This will cause myVar to be undefined because the let myVar
variable is out of scope after the foo() is called.  */
/*
function foo() {
    console.log(myVar);
}

function moo() {
    let myVar = 1;
    foo()
}

moo()
*/

/* This will cause myVar to be 1 because the let myVar
variable is in the scope of the outerfunction.  */

/*
function moo() {
    let myVar = 1;
    function foo() {
    console.log(myVar);
}
    foo()
}

moo()
*/