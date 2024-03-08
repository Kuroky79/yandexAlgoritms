function Scobochki(s) {
    let stack = [];
    let bracket = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }
    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        if (closeScobochki(current)) {
            if(bracket[current] === stack[stack.length-1]){
                stack.pop()
            }
        } else {
            stack.push(current)
        }
    }
    return stack.length === 0;
}

function closeScobochki(ch){
    return [')','}',']'].indexOf(ch) > -1;
}

console.log(Scobochki('()'))
console.log(Scobochki('([)'))
console.log(Scobochki('([])'))