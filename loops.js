let numbers = [5, 10, 15, 20, 25];
console.log("Task 2:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("Task 3:");
let count = 5;
while (count >= 1) {
    console.log(count);
    count--;
}

console.log("Task 4");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

console.log("Task 5:");
let sum = 0;
for (let i =0; i <numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);