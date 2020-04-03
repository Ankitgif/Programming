/*
*       @Author : Ankit Kumar
*       @Date   : 03-04-2020
*       @Purpose: Write a Stopwatch Program for measuring the time that elapses between the start and end clicks
*
*
*/
const stopWatch = require('./stopWatchBl')                                         // in which file function should call
const input = require('readline-sync');
let startStopWatch = input.question("Enter any key from your keyboard : ");        //Press any key to start the stop watch
let startTime = new Date();                                                        //start time initialize 
let stopStopWatch = input.question("Enter any key from your keyboard : ");         //Press any key to end the stop watch 
let endTime = new Date();                                                          //end time initialize
timeElapsed = stopWatch(startTime, endTime);                                       //passing parameter to a function
console.log(timeElapsed / 1000, "seconds");                                        //printing elapsed time in seconds 
