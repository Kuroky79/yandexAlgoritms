function waterMountains(height){
    let maxLeft = height[0];
    let maxRight = height[height.length - 1];

    let left = 1;
    let right = height.length - 2;
    let total = 0;
    while (left <= right){
        if(maxLeft <= maxRight){
            if (maxLeft - height[left] > 0){
                total += maxLeft - height[left]
            }
            maxLeft = Math.max(maxLeft, height[left]);
            left +=1;
        }else{
            if (maxRight - height[right] > 0){
                total += maxRight - height[right];
            }
            maxRight = Math.max(maxRight, height[right]);
            right -=1;
        }
    }
    return total;
}

console.log(waterMountains([4,2,0,3,2,5]))