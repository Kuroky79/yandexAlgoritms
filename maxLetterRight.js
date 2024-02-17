function maxLetterRight(seq, x){
    let ans = -1;
    for (let i = seq.length; i > 0; i--) {
        if((ans === -1) && (seq[i] === x)){
            ans = i;
        }
    }
    return ans;
}

console.log(maxLetterRight([1, 2, 3, 5, 2],2))