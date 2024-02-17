function two_max(arr){
    let max1 = Math.max(arr[0],arr[1]);
    let max2 = Math.min(arr[0],arr[1]);
    for (let i = 2; i < arr.length; i++) {
        if ( arr[i] > max1){
            max2 = max1;
            max1 = arr[i];
        }
        if (arr[i] < max1 && arr[i] > max2){
            max2 = arr[i];
        }
    }
    return [max1, max2];
}


console.log(two_max([1,2,3,5,4]));