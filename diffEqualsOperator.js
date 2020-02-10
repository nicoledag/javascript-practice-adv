// What is the difference between == (equality) and === (strict equality)?

// The strict equality checks for type and value.
// The non strict equality check for value only.
// Always best practice to use strict equality.

0 === 0 // true
0 !== 1 // true
0 == 0 // true
0 != 1 // true
'' == '0' //false 
0 == '' // true 
0 == '0' // true 
0 === '' //false
0 === '0' //false
/*when === if types are different on either side 
then result will always be false*/
0 === 0 //true

0 == '0' //true
/* with == javascriopt tries to convert one of values
to be the same type */

