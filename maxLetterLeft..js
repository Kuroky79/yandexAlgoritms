function maxLetterLeft(seq, x){
    let ans = -1;
    for (let i = 0; i < seq.length; i++) {
        if((ans === -1) && (seq[i] === x)){
            ans = i;
        }
    }
    return ans;
}

console.log(maxLetterLeft([1, 2, 3, 5, 2],2))