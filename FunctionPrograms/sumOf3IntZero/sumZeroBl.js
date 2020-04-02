/*
*
*   @Description : A program with cubic running time. Read in N integers and counts the number of triples that sum to exactly 0.
*                 
*    @Parameter  : Array and its size
*    @Return     : Three distinct array element which sums gives zero
*/

sumIntZero = (arr, size) =>                      // arrow function accepting parameter array and its size
{
    try {
        for (let i = 0; i < size - 2; i++) {
            for (let j = i + 1; j < size - 1; j++) {
                for (let k = j + 1; k < size; k++) {
                    if (arr[i] + arr[j] + arr[k] == 0)          // check the sorted three elements sum is zero or not
                    {
                        console.log(arr[i], arr[j], arr[k]);     // print the sorted three elements which gives sum as zero
                    }
                }
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}
module.exports = sumIntZero;