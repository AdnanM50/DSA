

const unShortedArray = [5, 3, 8, 2, 1, 4, 7, 6, 9, 10, 11, 12, 16, 17, 15, 18, 13, 14 ];

const bubblesort = (arr) => {
    const len = arr.length ;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if(arr[j] > arr[j+1]){

                // swap
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temp
            }
            
        }
        
    }
    return arr
}

console.log(unShortedArray);
console.log(bubblesort(unShortedArray));
console.log(unShortedArray);