/*
*   @author  :  Ankit Kumar
*   @Date    :  06-02-2020
*   @Purpose :  Sort the elements using Bubble sort Algorithm
*
*
*/
const bubbleSort = require('./bubbleSortBl');                                  // iin which file function to be call
const input = require('readline-sync');
let arr = ['Hello', 'World', 'How', 'Are', 'You'];                // Array 
let temp;                                                                       
let length = arr.length;
bubbleSort(arr, temp, length);                                                  //passing arguments in the function