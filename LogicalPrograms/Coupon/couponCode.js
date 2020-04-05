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
    let pattern = /^[1-9]{1}[0-9]{0,}$/
    return pattern.test(numberOfcode) ? couponGenerate(numberOfcode) : console.log("Enter valid number to generate coupon number");
}
validate();



