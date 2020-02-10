// What are the different scopes in javascript?

// Global Scope - declared outside the function.  Available in any part of your program.

// let name = "nicole";
// let window.name = "sara"

// Function or Local Scope

/*
const foo = () => {
    let moo = 1;
}
console.log(moo);
*/

// not available outside the function.  error moo is not defined.

/* Var does not have block level scope so j would be 5 here
because var i and j are defined globally */
/*
for (var i=0; i<5; i++){
    var j = 5;
}

console.log(j)
*/

/* However, the variable let does have block level scope so 
j would be undefined here because let i and j are scoped to the block */

/*
for (let i=0; i<5; i++){
    let j = 5;
    //need to console.log(j) here within the block
}

console.log(j)
*/