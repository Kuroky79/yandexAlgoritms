function merge(intevals) {
    if (intevals.length < 2){
        return intevals;
    }
    intevals.sort((a,b) => a[0] - b[0])
    let result = [intevals[0]];


    for (let inteval of intevals){
        let recent = result[result.length - 1];
        if (recent[1] >= inteval[0]){
            recent[1]  = Math.max(recent[1], inteval[1])
        }else{
            result.push(inteval)
        }
    }

    return result;
}

console.log(merge([[1,2],[3,5],[5,6]]))