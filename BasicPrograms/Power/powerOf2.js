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
if (number < 31) {                                   // checking number should be less than 31
    powermain(number, power);                        // passing parameter to the function
}
else {
    console.log("Enter valid number");
}

