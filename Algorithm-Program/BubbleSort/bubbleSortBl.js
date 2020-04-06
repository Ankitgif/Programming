/*
*    @Description  : Read the elements from array 
*    @Parameter    : Array,temp and length of array
*    @Return       : Sorted list of elements
*/
const sort = (arr, temp, length) =>{
    try
    {
        for(let index_i=0;index_i<length;index_i++)                         //Loop will run till the length of the array
        {
            for(let index_j=0;index_j<length-index_i-1;index_j++)           //Loop for index position
            {
                if(arr[index_j].localeCompare(arr[index_j+1])>0)            //Compare first index position element with second index position element
                {
                    temp = arr[index_j];                                    //swapping
                    arr[index_j] = arr[index_j+1];
                    arr[index_j+1] = temp;
                }
            }
        }
        for(let index_i=0;index_i<length;index_i++)                         //Loop for printing sorted list
        {
            console.log(arr[index_i]);
        }
    }
    catch(error)
    {
        console.log(error);
    }
}
module.exports = sort;