function minChetValue(n){
    let ans = -1;
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 ===0 && (ans === -1 || n[i] < ans)){
            ans = n[i]
        }
    }
    return ans;
}

console.log(minChetValue([1,2,3]))