/*
*
*       @Description  : To  calculate the Euclidean distance using the formulae to calculate distance = sqrt(x*x + y*y).
*       @Parameter    : Two points -> point_x and point_y
*       @Return       : calculated Euclidean distance
*
*/
distanceCalculate = (point_x, point_y) => {   // arrow function accepts two points as parameter
    let sum = (point_x * point_x) + (point_y * point_y);   // calculating the distance using given formula
    let distance = Math.sqrt(sum);
    return (distance);                       // returning the distance calculated
}
module.exports = distanceCalculate;