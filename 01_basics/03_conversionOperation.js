let score = 33
console.log(typeof score); // number

let scoreInNumber = Number(score)
console.log(typeof scoreInNumber); // number
console.log(scoreInNumber); // 33


let score2 = "33"
console.log(typeof score2); // string

let score2InNumber = Number(score2)
console.log(typeof score2InNumber); // number
console.log(score2InNumber); // 33

  
let score3 = "33abc"
console.log(typeof score3); // string

let score3InNumber = Number(score3)
console.log(typeof score3InNumber); // number
console.log(score3InNumber); // NaN


let score4 = null
console.log(typeof score4); // object

let score4InNumber = Number(score4)
console.log(typeof score4InNumber); // number
console.log(score4InNumber); // 0


let score5 = undefined
console.log(typeof score5); // undefined

let score5InNumber = Number(score5)
console.log(typeof score5InNumber); // number
console.log(score5InNumber); // NaN


let score6 = true
console.log(typeof score6); // boolean

let score6InNumber = Number(score6)
console.log(typeof score6InNumber); // number
console.log(score6InNumber); // 1


let score7 = "hulash"
console.log(typeof score7); // string

let score7InNumber = Number(score7)
console.log(typeof score7InNumber); // number
console.log(score7InNumber); // NaN

/** When variable is converted into Number:
 * "33" => 33
 * "33abc" => NaN
 * null => 0
 * undefined => NaN
 * true => 1; false => 0
 * "hulash" => NaN
 */



let isLoggedIn = 1
console.log(typeof isLoggedIn); // number

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn) // boolean
console.log(booleanIsLoggedIn); // true


let isLoggedIn2 = ""
console.log(typeof isLoggedIn2); // string

let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(typeof booleanIsLoggedIn2) // boolean
console.log(booleanIsLoggedIn2); // false


let isLoggedIn3 = "hulash"
console.log(typeof isLoggedIn3); // string

let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log(typeof booleanIsLoggedIn3) // boolean
console.log(booleanIsLoggedIn3); // true

/** When variable is converted into Boolean:
 * 1 => true; 0 => false
 * "" => false
 * "hulash" => true
 */



let num = 25
console.log(typeof num) // number

let numInString = String(num)
console.log(typeof numInString) // string
console.log(numInString); // 25
