// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, sumArr){
    // add whatever parameters you deem necessary - good luck!
    let val = sumArr(arr);
    val % 2 !== 0 ? true : false;
  }
  
  someRecursive(arr,function sumArr(arr){
      let sum = 0;
      if(arr.length === 1) return arr[0];
      return sum = arr[0] + sumArr(arr.slice(1));
  });
  
 console.log( someRecursive([1,2,3,4],sumArr));