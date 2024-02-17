function maxValue(str) {
    let result = 0;
    const hash = new Map();
    let counter = 0;
    for(let i=0; i< str.length; i++){
        if(hash.has(str[i])){
            counter = hash.get(str[i]) + 1;
        }else{
            counter = 1;
        }
        hash.set(str[i], counter)

        if(counter > result){
            result = counter;
        }
    }
    return result;
}

console.log(maxValue('hello'));
