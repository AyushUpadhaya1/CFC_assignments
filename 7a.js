let n = 5;
// let temp = 1;
// while (temp <= n) {
//     let temp2 = temp;
//     while (temp2 >= 1) {
//         process.stdout.write("* ");
//         temp2--;
//     }
//     console.log('\n');
//     temp++;
// }
let row = 0;
while (row < n) {
    let col = 0;
    while (col <= row) {
        process.stdout.write((col + 1) + " ");
        col += 1;
    }
    process.stdout.write("\n");
    row += 1;
}
