/*
*       @author  :  Ankit Kumar
*       @Date    :  04-04-2020
*       @Purpose :  Binary Search the Word from Word List
*
*/
const binarySearch = require('./binarySearchBl');                       //in which file function to be call
const input = require('readline-sync');
let arr = ['Javascript', 'Hello', 'How', 'Are', 'You'];             //Word List
arr.sort();                                                             //Sort word list for binary search
console.log(arr);                                                       //Printing the word list
let search = input.question("Enter character to search : ");            //Taking word as input
//let search = 'World';
const validate = () => {
    if (/[a-z]/.test(search))                                            //validating the taken input
    {
        let li = 0;
        let hi = arr.length - 1;
        let mi = Math.floor((li + hi) / 2);
        binarySearch(arr, search, li, hi, mi);                          //passing the parameters to function
    }
    else {
        console.log("Enter valid character");
    }
}
validate();
