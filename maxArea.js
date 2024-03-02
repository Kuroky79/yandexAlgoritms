

function maxArea(height){
    let maxArea = 0;
    let left=0;
    let right = height.length - 1;
    while(left < right){
        let currentValue = Math.min(height[left], height[right]) * (right-left);
        maxArea = Math.max(maxArea,currentValue);
        if(height[left] < height[right]){
            left+=1;
        }else{
            right-=1;
        }
    }
    return maxArea;
}


console.log(maxArea([1,1]))
console.log(maxArea([1,2,1]))
console.log(maxArea([4,3,2,1,4]))