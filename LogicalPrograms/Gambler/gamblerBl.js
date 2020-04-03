/*
*       @Description -> Simulates a gambler who start with $stake and place fair $1 bets until
*                       he/she goes broke (i.e. has no money) or reach $goal. Keeps track of the number of
*                       times he/she wins and the number of bets he/she makes. Run the experiment N
*                       times, averages the results, and prints them out.
*       @Parameter  : Number of trials, stake, goal, bet, win, loss
*       @Return     : Number of times win and loss
*                     Percentage of win and loss
*
*/
gambler = (numberOftrials, stake, goal, bet, win, loss) => {        //arrow function accepting the required parameters
    try {
        for (let trial = 0; trial < numberOftrials; trial++)              //Loop run till number of trials
        {
            let cash = stake;                                      //stake assign to cash
            while (cash > 0 && cash < goal)                             //Loop will run till cash equal to zero or reaches to goal 
            {
                bet++;                                             //bet++ till cash equal to zero or cash reaches to goal    
                if (Math.random() < 0.5)                              //generates random number 
                {
                    cash++;                                        //if random number is less than 0.5, cash will be increamented
                }
                else {
                    cash--;                                        //if random number is more than 0.5, cash will be decreamented
                }
            }
            if (cash == goal)                                         //checking cash reaches to goal 
            {
                win++;                      //if cash reaches to goal then win will be counted till number of trials 
            }
            else {
                loss++;                     //if cash not reaches to goal then loss will be counted till number of trials
            }
        }
    }
    catch (error) {
        console.log(error);
    }
    console.log("Number of time won : " + win);               //Print number of times win till number of trials
    console.log("Number of time loss : " + loss);             //Print number of times loss till number of trials
    let winPercent = win * 100 / numberOftrials;                //Percentage of win
    let lossPercent = loss * 100 / numberOftrials;              //Percentage of loss    
    console.log("Percentage of win : " + winPercent);
    console.log("Percentage of win : " + lossPercent);


}
module.exports = gambler;