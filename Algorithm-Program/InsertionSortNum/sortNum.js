/*
*   @author  :   Ankit Kumar
*   @Date    :   06-04-2020
*   @Purpose :   To sort array using insertion sort
*/
const insertionSort = require('./sortNumBl');  // file in which funtion should call
const input = require('readline-sync');
let arr = [5,1,6,2,4,3];                        // Array
array = insertionSort(arr);                     //fuction passing array as arguments and sorted array stored in array variable
console.log("Sorted array : "+array);           //printing sorted array