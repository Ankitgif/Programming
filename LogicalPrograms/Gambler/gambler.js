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

const gamblerMain = require('./gamblerBl');                                 // in which file function to be call
const input = require('readline-sync');
let numberOftrial = input.questionInt("Enter number of trials : ");                     // trials
let stake = input.questionInt("Enter stake in INR : ");                                  // stake
let goal = input.questionInt("Enter goal in INR : ");                                    // goal
let bet = 0, win = 0, loss = 0;
const validate = () => {                                                                 // function for validate
    let pattern = /[1-9]/
    return pattern.test(numberOftrial) && pattern.test(stake) && pattern.test(goal) ? gamblerMain(numberOftrial, stake, goal, bet, win, loss)
        : console.log("Enter valid trials , stake and goal");
}
validate();


