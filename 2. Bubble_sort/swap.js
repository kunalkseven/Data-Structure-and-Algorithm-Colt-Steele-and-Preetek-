// Ways to swap the elements in array

// ES5
function swap(arr,left,rigth) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp
}
// ES6
function swap(arr,left,right) {
    [arr[left],arr[right]] = [arr[right],arr[left]]
}

console.log(swap([2,4,3,9,5],0,0))