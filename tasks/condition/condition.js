/** Task: 1
 * The system receives two params x and y.
 * Implement the logic when z equal to sum of x and y in case if y less than 10
 * or multiplication in case of greater or equal than 10
 * result assign to z1 and z2 variables accordingly
 * Task 1 - if else - z1 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 * Task 2 - ternary operator - z2: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

const x = 3;
const y = 7;
let z1;
let z2;
if (y < 10) {
    z1 = x + y;
    console.log (z1);
} else {
    z1 = x * y;
    console.log (z1)
}; 
z2 = (y < 10 ) ? x + y : x * y;

console.log(z2); 

/**let z1;
let z2;
const x = 3;
const y = 7;*/


/** Task: 2
 * The system receives 3 params - alpha, beta, operator.
 * Operator can pass 4 possible values - "add", "subtract", "multiply", "divide".
 * Implement the logic when the system does appropriate operation based on the passed operator param.
 * Assign result to task2 variable
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
 */
 let task2; 
 const alpha = 3;
 const beta = 7;
 const operator = "add";
 switch (operator) {
    case "add":
        task2 = alpha + beta; 
        console.log (task2);
        break;
    case "subtract":
        task2 = alpha - beta;
        console.log (task2);
        break;
    case "multiply":
        task2 = alpha * beta;
        console.log (task2);
        break;
    case "divide":
        task2 = alpha / beta; 
        console.log (task2);
        break;
    default:
        console.log ("error");
        break;
 }; 
 // test 
            






/**let task2;
const alpha = 3;
const beta = 7;
const operator = "add"; /*


/**
 * Task: 3
 * Write the logic that will calculate the amount of discount
 * considering the 'redemption' amount
 * Rules are the following:
 * - 0    - 350:  0
 * - 351  - 1350: 15
 * - 1351 - 2700: 30
 * - 2701 - 6500: 45
 * assign the result to the 'discount' variable
 */

let discount;
const redemption = 420;
if (redemption >= 0 && redemption <= 350) {
    discount = 0;
    console.log ("0%");
} else if (redemption >= 351 && redemption<= 1350){
    discount = 15;
    console.log ("15%");
} else if (redemption >= 1351 && redemption <= 2700) {
    discount = 30;
    console.log ("30%");

} else if (redemption >= 2701 && redemption <= 6500) {
    discount = 45;
    console.log ("45%");
} else {
    console.log ("error")
}; 


/**const redemption = 420;
let discount; */ 

module.exports = {
    z1,
    z2,
    x,
    y,
    alpha,
    beta,
    operator,
    task2,
    redemption,
    discount
};