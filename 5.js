let a = 21984375987
let count = 0;
console.log(a / 10)
while (a > 0) {
    count++;
    a = Math.round(a / 10);
}
console.log(count);
