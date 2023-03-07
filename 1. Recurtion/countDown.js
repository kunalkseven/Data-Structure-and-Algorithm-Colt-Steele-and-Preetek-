function CountDown(nums){
    if(nums <= 0){
        return console.log("All Done")
    }
    console.log(nums);
    nums--;
    CountDown(nums)
}

console.log(CountDown(10))