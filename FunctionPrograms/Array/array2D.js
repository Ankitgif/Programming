/*
*   @author : Ankit Kumar
*   @Date   : 02-04-2020
*   @Purpose: To print 2D Array 
*
*/
const input = require('readline-sync');
const arrayMain = require('./array2DBl');    // to which file should be call

const validate = () => {
    {
        let numberOfrow = input.questionInt("Enter number of rows : ");            // number of rows
        let numberOfcol = input.questionInt("Enter number of coloumn : ");         // number of coloumns

        if (/(1-9)/.test(numberOfrow) || /(1-9)/.test(numberOfcol)) {               //checking number of rows and coloumns are integer 
            arrayMain(numberOfrow, numberOfcol);
            // console.log("Enter valid rows and cols");
        }
        else {
            // arrayMain(numberOfrow, numberOfcol);     
            console.log("Enter valid rows and cols");                               
        }
    }
}
validate();
