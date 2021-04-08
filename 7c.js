let n = 5;
let row = 0;
while (row < n) {
    let col = 0;
    while (col < n - row) {

        process.stdout.write(" ");
        col++;
    }
    let colum = 1;
    while (colum <= row + 1) {
        process.stdout.write(colum + "");
        colum++;
    }
    let col_mirror = colum - 2;
    while (col_mirror > 0) {
        process.stdout.write(col_mirror + "");
        col_mirror--;
    }

    process.stdout.write("\n");
    row++;
}