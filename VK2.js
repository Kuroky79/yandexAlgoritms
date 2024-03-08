const p = new Promise((res) => res(1))
p.then((a) => console.log(a)).then((b)=>console.log(b))