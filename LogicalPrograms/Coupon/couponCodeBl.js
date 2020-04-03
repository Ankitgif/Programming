/*
*       @Description  :  Given N distinct Coupon Numbers, how many random numbers do you
*                        need to generate distinct coupon number? This program simulates this random process.
*                        a. I/P -> N Distinct Coupon Number
*                        b. Logic -> repeatedly choose a random number and check whether it's a new one.
*                        c. O/P -> total random number needed to have all distinct numbers.
*       @Patrrameter  : Number of code to generate
*       @Return       : Distinct Coupon code number
*
*/

couponCode = (numberOfcode) =>                                            // function accepting the parameter
{
    try {
        for (code = 0; code < numberOfcode; code++)                              //Loop run till the number of coupan generate          
        {
            // Distinct random number generator
            code1 = Math.floor(Math.random() * (25 - 10) + 10);
            code2 = Math.floor(Math.random() * (999 - 500) + 500);
            code3 = Math.floor(Math.random() * (50 - 26) + 26);
            code4 = Math.floor(Math.random() * (499 - 100) + 100);
            console.log(code1 + "-" + code2 + "-" + code3 + "-" + code4);             //Printing distinct coupon code            


        }
    }
    catch (error) {
        console.log(error);
    }



}
module.exports = couponCode;