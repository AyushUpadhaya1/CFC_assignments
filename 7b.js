let n = 5;
let temp = 1;

while (n >= 1) {
    let col = temp;
    let temp2 = 1;
    while (col >= 1) {
        process.stdout.write(temp2 + " ");
        temp2++;
        col--;
    }
    console.log('\n');
    temp++;
    n--;
}
