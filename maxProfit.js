


function maxProfit(prices){
    let result = 0;
    let left = 0;
    let right = prices.length - 1;
    while(left < right){
        let currentProfit = prices[right] - prices[left];
        result = Math.max(result, currentProfit);
        if(prices[left] >= prices[left+1]){
            left+=1;
        }else{
            right-=1;
        }
    }
    return result;
}


console.log(maxProfit([7,5,4,2,1]))
console.log(maxProfit([7,1,5,3,6,4]))