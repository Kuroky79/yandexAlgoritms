


function Alcii(prices){
    let result = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i+1]){
            result += prices[i+1] - prices[i];
        }
    }
    return result;
}


console.log(Alcii([7,5,4,2,1]))
console.log(Alcii([7,1,5,3,6,4]))