function Same(arr1, arr2){
    if(arr1.length !== arr2.length) {
        return false;
    }
    
    for(let i=0; i<arr1.length;i++){
        let index = 0
        if(arr2.includes(arr1[i] ** 2)){
            arr1.shift()
        }else{
            return false
        }
    }
    return true

}


// 2

function sameArr(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false
    }

    for(let i=0;i<arr1.length;i++){
        let currectIndex = arr2.indexOf(arr1[i]**2)
        if(currectIndex === -1){
            return false
        }
        arr2.splice(currectIndex,1)
    }
    return true
}


// More optimise 
function isSameArr(arr1,arr2){
    if(arr1.length != arr2.length){
        return false
    }

    let hasMap1 = {}
    let hasMap2 = {}

    for(let val of arr1){
        hasMap1[val] = (hasMap1[val] || 0) + 1
    }

    for(let val in hasMap2){
        if(!(hasMap1[val] ** 2 in hasMap2)){
            return false
        }
        if(hasMap2[val ** 2] != hasMap1){
            return false
        }
    }
    return true
}


console.log(Same([1,2,3],[4,1,9]))
console.log(sameArr([1,2,3],[4,1,9]))
console.log(isSameArr([1,2,3],[4,1,9]))