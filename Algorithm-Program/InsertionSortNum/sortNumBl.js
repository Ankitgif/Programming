/*
*   @Description   :   Taking Integer array as input and sort using insertion sort algorithm
*   @Parameter     :   Array
*   @Return        :   Sorted array list
*/

let insertionSort = (arr) => {                                // Arrow function accepting array as argument 

    let length = arr.length;                                   // finding length of the array
    for (let index_i = 1; index_i < length; index_i++) {       //loop will run till the length of the array 
        let temp = arr[index_i];                                //temporary variable storing first element
        let index_j = index_i;                                  //index_j storing   1st index position
        while (index_j > 0 && arr[index_j - 1] > temp) {        
            arr[index_j] = arr[index_j - 1];
            index_j = index_j - 1;
        }
        arr[index_j] = temp;
    }
    return arr;                                                  //returning the sorted array
}
module.exports = insertionSort;