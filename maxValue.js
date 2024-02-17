

function maxValue(n){
    let result = n[0];
    for (let i = 1; i < n.length; i++) {
        if(result < n[i]){
            result = n[i];
        }

    }
    return result;
}

console.log(maxValue([1,2,4,5]))