const accountId = 4567
let accountEmail = "hulash@gmail.com"
var accountPassword = "12345"
accountCity = "Gaya"
let accountState;

console.table([accountId, accountEmail, accountPassword, accountCity]);
/* Output:
┌─────────┬────────────────────┐
│ (index) │ Values             │
├─────────┼────────────────────┤
│ 0       │ 4567               │
│ 1       │ 'hulash@gmail.com' │
│ 2       │ '12345'            │
│ 3       │ 'Gaya'             │
└─────────┴────────────────────┘
*/


// accountId = 7890 // this is not allowed as "accountId" is constant and therefore cannot be changed
accountEmail = "hulash@yahoo.com"
accountPassword = "67890"
accountCity = "Hyderabad"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
/* Output:
┌─────────┬────────────────────┐
│ (index) │ Values             │
├─────────┼────────────────────┤
│ 0       │ 4567               │
│ 1       │ 'hulash@yahoo.com' │
│ 2       │ '67890'            │
│ 3       │ 'Hyderabad'        │
│ 4       │ undefined          │
└─────────┴────────────────────┘
*/

/**
 * In Javascript, variables can be declared in two ways:
 * 1. let
 * 2. var
 */


/**
 * Prefer not to use "var"
 * because of issue in block scope and functional scope
 */

/**
 * In Javascript, when a variable is declared and is not initialized then it is undefined
 * For example, see the above variable "accountState"
 */