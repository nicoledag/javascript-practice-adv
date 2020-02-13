// What are function closures?

// Current value what is used in it's current body.

"use strict"

// Prior to ES6 Block level scope was not possible without creating a closure

// var foo = []
// for (var i = 0; i < 10; i++){
//     foo[i] = function() {return i};
// }

// console.log(foo[0]());
// console.log(foo[1]());
// console.log(foo[2]());

//This would print 10 to the console 3 times.

// To fix this with a closure we would rewrite the code like this..


// var foo = []
// for (var i = 0; i < 10; i++){
//    (function(){
//     var y = i;
//     foo[i] = function() {
//         return y
//     };
//    })();
    
// }

// console.log(foo[0]());
// console.log(foo[1]());
// console.log(foo[2]());

//With ES6 we can use let which eliminates the need for closures in this scenerio.



// let foo = []
// for (let i = 0; i < 10; i++){
//     foo[i] = function() {return i};
// }

// console.log(foo[0]());
// console.log(foo[1]());
// console.log(foo[2]());
