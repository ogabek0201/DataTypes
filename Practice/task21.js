let a=+prompt("A")
let b=+prompt("B")
for (let i = a; i <= b; i++){
    for(let c=1; c<=i;c++){
        if (c*c==i) {
            console.log(c*c);
        }
    }  
}