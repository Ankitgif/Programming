/**
 * 
 * @author   : Ankit Kumar
 * @Date      : 01/04/2020
 * @Purpose   : Power of 2
 *             a. I/P -> The Power Value N. Only works if 0 <= N < 31 since 2^31 overflows an int
 *             b. Logic -> repeat until i equals N.
 *             c. O/P -> Print power of 2
 *                         
 **/
const powermain = require('./powerOf2Bl');           // in which file to call the function
const input = require('readline-sync');
let number = input.questionInt("Enter a number : ");
let power = 0;
// if (number < 31) {                                   
//     powermain(number, power);                        
// }
// else {
//     console.log("Enter valid number");
// }
const validate = () => {
    let pattern = /^([1-9]|[12][0-9]|3[01])$/                       // checking number should be less than 31
    return pattern.test(number) ? powermain(number, power) : console.log("Enter valid number");
}
validate();
