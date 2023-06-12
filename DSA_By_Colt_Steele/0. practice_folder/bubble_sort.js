// function bubbleSort(arr) {
//   function swap(arr, left, right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//   }

//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i-1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }
//   return arr;
// }

function bubbleSort(arr) {
    var noSwap;
    function swap(arr, left, right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
      }

    for (let i = arr.length; i > 0; i--) {
      noSwap = true;
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) { //   Swap the position on some condition
            swap(arr,j,j+1)
            noSwap = false;
        }
      }
      if(noSwap) break;
    }
    // console.log(arr);
    return arr;
  }

const arr = [8, 6, 7, 3, 2, 5];

console.log(bubbleSort(arr));
