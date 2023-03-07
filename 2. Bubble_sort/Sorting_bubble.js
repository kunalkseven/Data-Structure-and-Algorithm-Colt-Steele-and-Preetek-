function bubbleSort(arr) {

    function swap(arr,left,right) {
        [arr[left],arr[right]] = [arr[right],arr[left]]
    }

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            // Swap the position on some condition
            
            // es5
            // if (arr[j] > arr[j + 1]) {
            //     var temp = arr[j];
            //     arr[j] = arr[j + 1];
            //     arr[j + 1] = temp
            // }

            // es6
            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1)
            }
        }
    }
    console.log(arr)
    return arr
}

bubbleSort([2, 4, 3, 9, 5])