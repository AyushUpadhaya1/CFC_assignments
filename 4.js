let jumps = 1;
let even_nums = 2;

// console.log(even_nums);
while (even_nums < 100) {
    console.log(even_nums);
    jumps += 2;
    for (let t = 1; t < jumps; t++) {
        even_nums += 2;
    }

}