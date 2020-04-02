/*
*     @author  : Ankit Kumar
*     @Date    : 02-04-2020
*     @Purpose : To prints the Euclidean distance from the point (x, y) to the origin (0, 0). 
*                
*/

const distanceMain = require('./distanceBl');                       //in which file the function should call
const input = require('readline-sync');
let point_x = input.questionInt("Enter value of point x : ");
let point_y = input.questionInt("Enter value of point y : ");
Distance = distanceMain(point_x, point_y);                                      //passing two points as parameter
console.log(Distance.toFixed(2));