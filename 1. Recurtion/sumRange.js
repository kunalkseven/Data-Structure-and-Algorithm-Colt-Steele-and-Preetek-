function SumRange(nums){
    if(nums === 1) return 1
    return nums + SumRange(nums-1)
}

console.log(SumRange(10))