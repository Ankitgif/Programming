/*
*
*       @author  : Ankit Kumar
*       @Date    : 03-04-2020
*       @Purpose : To generate N distinct coupon number
*       
*
*/
const input = require('readline-sync');
const couponGenerate = require('./couponCodeBl');       // in which file function should call
let numberOfcode = input.questionInt("Enter number of codes to generate : ");       //Number of coupons to generate
const validate = () => {
    if ((/[1-9]/.test(numberOfcode)))                                //Checking number of code to generate is integer
    {
        couponGenerate(numberOfcode);                                                       //Passing parameter to the function
    }
    else {
        console.log("Enter valid number to generate coupon number");
    }
}
validate();



