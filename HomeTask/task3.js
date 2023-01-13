
let n = +prompt("n")
for (let i = 1; i < n * 2; i++) {
    if (i <= n) console.log(i);
    if (i == n) console.log(" ");
    if (i >= n) console.log((n * 2) - i);
}