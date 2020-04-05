/*
*   @author : Ankit Kumar
*   @Date   : 02-04-2020
*   @Purpose: To print 2D Array 
*
*/
const input = require('readline-sync');
const arrayMain = require('./array2DBl');    // to which file fuction should be call

const validate = () => {
    {
        let numberOfrow = input.questionInt("Enter number of rows : ");            // number of rows
        let numberOfcol = input.questionInt("Enter number of coloumn : ");         // number of coloumns            
        let pattern = /^[1-9]$/                  //checking number of rows and coloumns are integer
        return pattern.test(numberOfrow) && pattern.test(numberOfcol) ? arrayMain(numberOfrow, numberOfcol) : console.log("Enter valid row and col");

    }
}
validate();
