/*
*     @author  : Ankit Kumar
*     @Date    : 02-04-2020
*     @Purpose : To prints the Euclidean distance from the point (x, y) to the origin (0, 0). 
*                
*/
const input = require('readline-sync');
const distanceMain = require('./distanceBl');                       //in which file the function should call


const validate = () => {
    let point_x = input.questionInt("Enter value of point x : ");
    let point_y = input.questionInt("Enter value of point y : ");

    if (/[1-9]/.test(point_x) || /[1-9]/.test(point_y)) {                              //checking two points are integer
        Distance = distanceMain(point_x, point_y);                                      //passing two points as parameter
        console.log(Distance.toFixed(2));

    }
    else {

        console.log("Enter valid points");
    }

}
validate();