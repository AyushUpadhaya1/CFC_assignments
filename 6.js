let x = 9735;
let rem;
let mul = 1;
let ans = 0;
while (x > 0) {
    rem = x % 10;
    // console.log(rem);
    ans = ans * 10 + rem;
    mul *= 10;
    // console.log(mul);
    x = Math.round(x / 10 | 0);
    console.log(x);
}
console.log(ans);