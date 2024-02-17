function shortWords(words){
    let mineline = words[0].length;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < mineline){
            mineline = words[i].length;
        }
    }
    let ans = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length === mineline){
            ans.push(words[i]);
        }
    }
    return ans.join(' ');
}

console.log(shortWords(['sfsdll','sdfgs','sd','sf']))