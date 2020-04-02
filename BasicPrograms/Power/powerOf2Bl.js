/**
 * 
 * 
 * @Description : a. I/P -> The Power Value N. Only works if 0 <= N < 31 since 2^31 overflows an int
 *                b. Logic -> repeat until i equals N.
 *                c. O/P -> Print power of 2
 * @Parameter   : number -> How many times loop will work
 *                power  -> Initialize with 0, to determine number is greater than power
 * @Return      : All the power of 2
 *                         
 **/

powerOfNumber = (number, power) => {              // arrow function accepting the parameter 
    try {
        while (power < number) {                  // checking whether number is greater than power wich is initiallized with 0
            let powerOf2 = Math.pow(2, power);    // storing power of 2
            console.log(powerOf2);                // printing power of 2
            power++;                              // increamenting the power value
        }
    }
    catch (error) {
        console.log(error);
    }
}
module.exports = powerOfNumber;