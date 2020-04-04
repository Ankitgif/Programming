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
const validate = () => {
    let pattern = /^[1-9]{1}[0-9]{3}$/                                       // checking year should be of 4 digit
    return pattern.test(year) ? leapYearmain(year) : console.log("Enter a valid year");
}
validate();