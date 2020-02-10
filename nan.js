// NaN - what is it used for?

typeof(NaN) 
// "number"

"abc"/4
// NaN

NaN == 1
// false

NaN == false
// false

NaN == NaN
//false

1 == 1
// true

/* usually when you compare something to itself it is 
true except for NaN */

//NaN equal to ANYTHING is always false, even when compared to itself

//How to check if a value is NaN?

isNaN(NaN)
//true
isNaN(1)
// false

isNaN("1")
//false

isNaN("A")
true
Number("A")
// number

/*isNan() is not useful unless you are absolutley sure what 
you are passing in is a Number. */

/* if NaN == NaN is false and isNaN() is not always 
accurate, then how to we check if a variable is NaN? */

/*The only full proof way is since javascript treats NaN as
 unequal to itself, you can check with !== operator*/

 var a = NaN
 a !== a
 a = 1
 a !== a
 // false

 a = 'a'
 a !== a
 //false



