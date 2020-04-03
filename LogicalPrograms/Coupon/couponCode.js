/*
*
*       @author  : Ankit Kumar
*       @Date    : 03-04-2020
*       @Purpose : To generate N distinct coupon number
*       
*
*/

const couponGenerate = require('./couponCodeBl');       // in which file function should call
const input = require('readline-sync');
let numberOfcode = input.questionInt("Enter number of codes to generate : ");       //Number of coupons to generate
couponGenerate(numberOfcode);                                                       //Passing parameter to the function