function gcd(a, b) {
    if (b == 0)
        return a;
    return gcd(b, a % b);
}


let a = 88;
let b = 46;
console.log(gcd(a, b));
