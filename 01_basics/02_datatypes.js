"use strict"; // this tells the file to treat all JS code as newer version
/**
 * Now all code will be treated as a newer standard by the engine
 * 
 * Also, now we do not even need to write "use strict" it automatically runs in strict mode
 */


// alert("Hello") // it will throw error as we are using nodejs and not browser

console.log("Hulash Kumar")
console.log(1+2)
console.log(3
    +4
)
/**
 * Code readability should be high
 */


let name = "Hulash"
let age = 24
let isLoggedIn = false
 
/**
 * Primitive datatypes in Javascript: 
 * Stored directly in the memory stack. Single values. Immutable (cannot be changed).
 * 1. Number
 * 2. BigInt
 * 3. String => ""
 * 4. Boolean => true/false
 * 5. Null => standalone value
 * 6. Undefined => variable declared but not initialzed
 * 7. Symbol => unique
 */

/**
 * Non-premitive datatype in Javascript:
 * Stored in the memory heap. Collections of data or behavior. Mutable (can be changed).
 * 1. Object (including Arrays and Functions)
 */


console.log(typeof "hulash") // string
console.log(typeof("hulash")) // string
console.log(typeof 1) // number
console.log(typeof null); // object
console.log(typeof(undefined)); // undefined

// Checking type of variable
console.log(typeof age); // number
console.log(typeof(name)); // string
