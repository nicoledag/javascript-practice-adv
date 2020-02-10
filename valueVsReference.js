'use strict'
// VALUES VS REFERENCE

/* Question:  What does javascript pass by value and by reference?*/

/* Answer:  Javascript passes the primative types by value
and objects by reference */

/* The console.log inside the function will print 2 
and the console.log outside the function will print 1
becuase primative types are copied by value.  Same would
hold true for a boolean*/

/*
let a = 1;

const result = (a) => {
    a = 2
    console.log(a)
}

result()
console.log(a)
*/

/* Objects on the other hand are copied by their reference 
so whatever the object points to will be changed.  Therefore,
both console.logs will print an object with a key/value 
pair of name: "nicole" */

/*
let a = {};

const result = (a) => {
    a.name = 'nicole';
    console.log(a)
}

result(a)
console.log(a)
*/

/*You cannot however change the key if already assigned.
This will print name is undefined to the console.*/

/*
let a = {name: "nicole"};

const result = (a) => {
    a.name = a.age;
    console.log(a)
}

result(a)
console.log(a)
*/