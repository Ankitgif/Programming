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
const validate = () =>{                                                                 // function for validate
    if(/[1-9]/.test(numberOftrial) && /[1-9]/.test(stake) && /[1-9]/.test(goal))        //Checking for integer value
    {
        gamblerMain(numberOftrial, stake, goal, bet, win, loss);                        //passing arguments to functions
    }
    else
    {
        console.log("Enter valid trials , stake and goal");
    }
}
validate();


