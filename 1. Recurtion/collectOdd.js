// function CollectOdd(arr){
//     let result = []

//     function helper(input){
//         if(input.length === 0){
//             return;
//         }
//         if(input[0] % 2 !== 0){
//             result.push(input[0])
//         }
//         helper(input.slice(1))
//     }

//     helper(arr)
//     return result

// }

function CollectOdd(arr){
    let result = []
    if(arr.length === 0) return;
    if(arr[0] % 2 !== 0){
        result.push(arr[0])
    }
    result = result.concat(CollectOdd(arr.slice(1)))
    // [...result, ...CollectOdd(arr.slice(1))] not work 
    // TypeError: CollectOdd is not a function or its return value is not iterable
    return result
}

console.log(CollectOdd([1,2,3,4,5,6,7,8,9]));