/*
*
*   @author : Ankit Kumar
*   Date    : 02-04-2020
*   @Purpose: Sum of three integer adds to zero
*             a. I/P -> N number of integer, and N integer input array
*             b. Logic -> Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0
*             c. O/P -> One Output is number of distinct triplets as well as the second output is to print the distinct triplets.
*
*/

const sumOfIntmain = require('./sumZeroBl');                          // in which file function should call
const input = require('readline-sync');
let arr = [];                                                         // initializing an array
let size = input.questionInt("Enter array size : ");
let pattern = /^[1-9]{1,}$/
if (pattern.test(size)) {                                               //checking size of array is valid or not
    for (let element = 0; element < size; element++) {
        arr[element] = input.questionInt("Enter Elements: ");             // taking array element as input
    }
}
else {
    console.log("Enter valid size of array");
}
console.log(arr);
sumOfIntmain(arr, size);                                              // passing array and its size as an argument


