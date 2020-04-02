/*
* 
*  @Purpose   : To print 2D Array 
*  @Parameter : number of rows and coloumns
*  @Return    : print elements of an array
*/
const input = require('readline-sync');
array2D = (numberOfrow, numberOfcol) =>                 //arraw function accepting parameter
{
    try {
        let arr = new Array(numberOfrow);               //Using array constructor
        //Creating 2D Array
        for (let row = 0; row < numberOfrow; row++) {
            arr[row] = new Array(numberOfcol);
        }
        //Loop to initialize 2D Array elements
        for (let row = 0; row < numberOfrow; row++) {
            for (let col = 0; col < numberOfcol; col++) {
                arr[row][col] = input.questionInt("Enter Elements: ");   // input elements of array from user
            }
        }
        // Loop to display the elements of 2D array
        console.log("2D Array : ");
        for (let row = 0; row < numberOfrow; row++) {
            for (let col = 0; col < numberOfcol; col++) {
                console.log(arr[row][col] + "   ");
            }
            console.log("");
        }
    }
    catch (error) {
        console.log(error);
    }

}
module.exports = array2D;
