// function selectionSort(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     var lowest = i;
//     for (var j = i + 1; j < arr.length; j++) {
//         if(arr[j] < arr[lowest]){
//             lowest = j
//         }
//     }
//     if(i !== arr[lowest]){
//         var temp = arr[i];
//         arr[i] = arr[lowest]
//         arr[lowest] = temp
//     }
//   }
//   console.log(arr)
//   return arr
// }

// ES6 Swap
function swap(arr, left, right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }
  
function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    swap(arr, i, lowest);
  }
  console.log(arr);
  return arr;
}

selectionSort([9, 2, 4, 1, 8, 5]);
