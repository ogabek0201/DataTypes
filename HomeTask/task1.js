let a=+prompt("A")
let one = Math.round(a/1000)
let two = Math.round(a/100%10)
let three = Math.floor(a/10%10)
let four = Math.round(a%10)
console.log(one,two,three,four);
if (one==four && two==three) {
    console.log("YES");
} else{
    console.log("NO");
}