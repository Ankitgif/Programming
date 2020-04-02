/**
 * 
 * @Purpose   : Leap Year
 *             a. I/P -> Year, ensure it is a 4 digit number.
 *             b. Logic -> Determine if it is a Leap Year.
 *             c. O/P -> Print the year is a Leap Year or not
 * @Parameter : year
 * @Return    : year is leap year or not. 
 *                         
 **/
const leapYear = (year) => {                            // function accepting a parameter
    try {

        if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0))      // condition of checking leap year
        {
            console.log(year, " is a leap year")
        }
        else {
            console.log(year, " is not a leap year ")
        }
    }
    catch (error) {
        console.log(error)
    }
}
module.exports = leapYear