/*
*       @Description  :  To measure the elapsed time between two clicks 
*       @Parameter    :  startTime and endTime
*       @Return       :  elapsed time
*
*
*/
elapsedTimeOfstopWatch = (startTime, endTime) => {              //arrow function accepting parameter
    try {
        elapsedTime = endTime - startTime;                  //calculating elapsed time
        return (elapsedTime);                               //return elapsed time in milli seconds
    }
    catch (error) {
        console.log(error);
    }
}
module.exports = elapsedTimeOfstopWatch;