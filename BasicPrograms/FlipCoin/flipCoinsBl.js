/**
 * 
 * @Description : a. I/P -> The number of times to Flip Coin. Ensure it is positive integer
 *                b. Logic -> Use Random Function to get value between 0 and 1 . If < 0.5 then tails or heads
 *                c. O/P -> Percentage of Head vs Tails
 * @Parameter : numberOfFlips -> How many times coin to be flipped
 *              tails -> initialize with zero
 *              heads -> initialize with zero           
 **/
flipCoin = (numberOfFlips, tails, heads) =>                 // arrow function accepting the parameter
{
    try {
        for (let flip = 1; flip <= numberOfFlips; flip++) {
            let toss = Math.random();                       // generating random number between 0 to 1
            if (toss < 0.5) {
                console.log("Tails");                      // print tails
                tails++;                                   // count tails (number of time tails occur)
            }
            else {
                console.log("Heads");                      // print heads
                heads++;                                   // count heads (number of time heads occur)
            }
        }
        console.log("Number of tails : ", tails);           // print number of times tails occur
        console.log("Number of heads : ", heads);           // print number of times heads occur
        let tailPercent = (100 * tails) / numberOfFlips;    // calculate percentage of tails
        let headPercent = (100 * heads) / numberOfFlips;    // calculate percentage of heads
        console.log(tailPercent.toFixed(2), "%");                      // print percentage of tails
        console.log(headPercent.toFixed(2), "%");                      // print percentage of heads
    }
    catch (error) {
        console.log(error);
    }
}
module.exports = flipCoin;
