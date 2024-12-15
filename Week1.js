const num1 = 5;
const num2 = 3;
const sum = num1 + num2;

console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

const number = parseInt(prompt("Enter a number: "));
if (number > 0) {
    console.log("The number is positive");
} else if (number === 0) {
    console.log("The number is zero");
} else {
    console.log("The number is negative");
}

function calculate(operation, ...numbers) {
    switch (operation) {
        case 'add':
            return numbers.reduce((sum, num) => sum + num, 0);
        case 'subtract':
            return numbers.reduce((diff, num) => diff - num);
        case 'multiply':
            return numbers.reduce((product, num) => product * num, 1);
        case 'divide':
            return numbers.reduce((quotient, num) => quotient / num);
        default:
            return "Invalid operation";
    }
}

console.log(calculate('add', 5, 3, 2)); // Output: 10
console.log(calculate('subtract', 10, 3, 2)); // Output: 5
console.log(calculate('multiply', 2, 3, 4)); // Output: 24
console.log(calculate('divide', 100, 2, 5)); // Output: 10
