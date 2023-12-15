function mergesort(array) {
    if(array.length<=1){        //If the array has 0 or 1 elements
        return array;       //No sorting needed, return array
    }

    const len = array.length;   //length variable 
    var size;       //Used to represent the size of the subarrays
    var leftSide;   //Keeps track of the begining of the left subarray
    for(size=1; size<len; size=size*2){     //Controls size of subarrays to be merged, subarray size starts with 1 and doubled each iteration
        for(leftSide=0; leftSide<len; leftSide+=2*size){    //The starting index of leftSide is 0, the "start" index then increases with each iteration by leftSide+2*size
            const middle=Math.min(leftSide+size-1, len-1);  //Determines the end of the left subarray and the begining of the right subarray. Math.min ensures it won't go past the last index of the array
            const rightEnd=Math.min(leftSide+2*size-1, len-1);  //Determines the end of the right subarray and doesn't go past the last index of the array
            merge(array, leftSide, middle, rightEnd);   //Merges the left and right subarrays within the main array   
        }
    } 
    return array;   //Return sorted array (added to pass tests)
}

function merge(array, leftSide, middle, rightEnd){      //Merge Function
    if(array.length<=1 || leftSide>=rightEnd || middle>=rightEnd){
        return;     //If the array is empty there is no need to sort, return
    }
    
    let leftEnd=middle;     //The end of the left subarray is the middle of the main array
    let rightSide=middle+1;     //The start of the right subarray in the index right after the middle of the main array

    while(leftSide<=leftEnd && rightSide<=rightEnd){    //As long as there are elements in both the left and right subarrays
        if(array[leftSide]<=array[rightSide]){      //Is the element in the left subarry <= the element in the right subarray
            leftSide++;     //If so element is in the correct place so increase the index in the left subarray to compare the next element in the left array
        }
        else{
            const temp=array[rightSide];    //Holds the element in the right subarray to be merged
            let index=rightSide;        //Keeps track of the current positon where an element needs to be moved
            while(index !== leftSide){      //As long as the value of index doesn't equal the begining of the left subarray
                array[index]=array[index-1];    //Shifts the element at index-1 to the right by one position to create space for the element that needs to be moved to that position
                index--;        //Moves the value of index to the left by one position 
            }
            array[leftSide]=temp;   //Inserts the element from the right subarry that is in the incorrect position in the original array to the correct position
            leftSide++;     //Go to the next element in the left subarray so it can be evaluated
            leftEnd++;      //Move the end of the left array by one positon to account for the new positon of the elements
            rightSide++;    //Go to the next element in the right subarray so that it can be evaluated
        }
    }
}
