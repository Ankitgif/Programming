/*
*       @Description  :   Read in a list of words from File. Then prompt the user to enter a word to
*                         search the list. The program reports if the search word is found in the list.
*       @Parameter    :   word list as arr, word as search, lower index(li), higher index(hi), middle index(mi)
*       @Return       :   check whether word is present and its index position
*
*
*/
const bsearch = (arr, search, li, hi, mi) =>{                          //arrow function accepting the parameters
   
    try
    {
        while(li<=hi)                                                  //Loop will run till higher index of word
        {
            if(arr[mi]==search)                                        //checking word is at middle index 
            {
                console.log("Found at index "+mi)
                break;
            }
            else if(arr[mi]<search)                                 //checking if word index is greater than from middle index 
            {
                li = mi+1;                                          //lower index will increamented by 
            }
            else
            {
                hi = mi-1;                                    //if above condition will false, higher index will decreamented from middle index
            }
            mi = Math.floor((li+hi)/2);                       //middle index updated
        }
        if(li>hi)                                              
        {
            console.log("Not found, Enter valid character to search");
        }
    }
    catch(error)
    {
        console.log(error);
    }
}
module.exports = bsearch;