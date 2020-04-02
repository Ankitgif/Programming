/*
*   @author : Ankit Kumar
*   @Date   : 02-04-2020
*   @Purpose: To print 2D Array 
*
*/
const arrayMain = require('./array2DBl');    // to which file should be call
const input = require('readline-sync');
let numberOfrow = input.questionInt("Enter number of rows : ");            // number of rows 
let numberOfcol = input.questionInt("Enter number of coloumn : ");         // number of coloumns
arrayMain(numberOfrow, numberOfcol);                                       // passing number of rows and columns as parameter