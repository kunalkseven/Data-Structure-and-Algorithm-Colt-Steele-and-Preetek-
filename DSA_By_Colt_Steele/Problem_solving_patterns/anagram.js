// Anagram

// 1
function validAnagram(str1,str2){
    if(str1.length != str2.length){
        return false
    }

    let hasMap1 = {}
    for(let val of str1){
        hasMap1[val] = (hasMap1[val] || 0) + 1
    }

    for(let val of str2){
        if(!hasMap1[val]){
            return false
        }else{
            hasMap1[val] -= 1
        }
    }
    return true;
}

// 2
function isAnagram(str1,str2){
    if(str1.length != str2.length){
        return false
    }

    let hasMap = {};
    for(let i=0;str1.length;i++){
        let letter = atr1[i];

        hasMap[letter] ? hasMap[letter] += 1 : hasMap[letter] = 1;
    }
}


console.log(validAnagram("kunal","nalku"))