// es5
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      // Swap the position on some condition
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  //   console.log(arr);
  return arr;
}

// es6
function bubbleSort(arr) {
  function swap(arr, left, right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      // Swap the position on some condition
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  console.log(arr);
  return arr;
}

// Optamized with noSwap
function bubbleSort(arr) {
  var noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {         //   Swap the position on some condition
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp
          noSwap = false;
      }
    }
    if(noSwap) break;
  }
  console.log(arr);
  return arr;
}

bubbleSort([2, 4, 3, 9, 5]);
