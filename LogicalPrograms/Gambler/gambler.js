/*  
*     @author   : Ankit Kumar
*     @Date     : 03-04-2020
*     @Purpose  : Gambler
*                  
*                   a. I/P -> $Stake, $Goal and Number of times
*                   b. Logic -> Play till the gambler is broke or has won
*                   c. O/P -> Print Number of Wins and Percentage of Win and Loss.
*
*/

const gamblerMain = require('./gamblerBl');
const input = require('readline-sync');
let numberOftrial = input.questionInt("Enter number of trials : ");
let stake = input.questionInt("Enter stake in INR : ");
let goal = input.questionInt("Enter goal in INR : ");
let bet = 0, win = 0, loss = 0;
gamblerMain(numberOftrial, stake, goal, bet, win, loss);

