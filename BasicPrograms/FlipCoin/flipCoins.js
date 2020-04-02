/**
 * 
 * @author   : Ankit Kumar
 * Date      : 01/04/2020
 * Purpose   : Flip Coin and print percentage of Heads and Tails
 *             a. I/P -> The number of times to Flip Coin. Ensure it is positive integer
 *             b. Logic -> Use Random Function to get value between 0 and 1 . If < 0.5 then tails or heads
 *             c. O/P -> Percentage of Head vs Tails
 *                         
 **/

const flipCoinmain = require('./flipCoinsBl');     // in which file function should call
const input = require('readline-sync');
let numberOfFlips = input.questionInt("Enter number of flips : ");   // taking input, how mant times coin to be flipped
let tails = 0;
let heads = 0;
flipCoinmain(numberOfFlips, tails, heads);                 // passing the parameters to the function