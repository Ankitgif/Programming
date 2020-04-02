/**
 * 
 * @author   : Ankit Kumar
 * Date      : 01/04/2020
 * Purpose   : Leap Year
 *             a. I/P -> Year, ensure it is a 4 digit number.
 *             b. Logic -> Determine if it is a Leap Year.
 *             c. O/P -> Print the year is a Leap Year or not
 *                         
 **/

const leapYearmain = require('./leapYearBl')                // in which file to call the function
let input = require('readline-sync')
let year = input.questionInt("Enter a year to check leap year : ");
if(/^[0-9]{4}$/.test(year))                                 // checking year should be of 4 digit
{
    leapYearmain(year);                                     // passing parameter to a function
}
else {
    console.log("Enter a valid year");
}