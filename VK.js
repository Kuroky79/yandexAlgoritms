const p = new Promise((res)=>{
    console.log(1);
    res(2)
})
p.then((a)=>console.log(a));
console.log(3)