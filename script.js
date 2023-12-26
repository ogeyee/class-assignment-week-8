function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false

function printRange(n1, n2) {
  for (let i = n1; i <= n2; i++) {
    console.log(i);
  }
}

printRange(3, 7);
// Output:
// 3
// 4
// 5
// 6
// 7


function sumBetween(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i++) {
    sum += i;
  }
  return sum;
}

let result = sumBetween(1, 3);
console.log(result); // Output: 6


// Function to calculate the factorial of a given number
function calculateFactorial(number) {
    if (number < 0) {
        return "Invalid input. Please provide a non-negative integer.";
    } else if (number === 0 || number === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= number; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

// Example usage
const inputNumber = 5;
const result = calculateFactorial(inputNumber);
console.log(`The factorial of ${inputNumber} is: ${result}`);

// Function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to play the guessing game
function playGuessingGame() {
    const minNumber = 1;
    const maxNumber = 100;
    const targetNumber = generateRandomNumber(minNumber, maxNumber);
    let attempts = 0;

    while (true) {
        let userGuess = window.prompt(`Guess the number between ${minNumber} and ${maxNumber}:`);
        userGuess = parseInt(userGuess);

        if (isNaN(userGuess)) {
            window.alert("Please enter a valid number.");
            continue;
        }

        attempts++;

        if (userGuess < targetNumber) {
            window.alert("Too low! Try again.");
        } else if (userGuess > targetNumber) {
            window.alert("Too high! Try again.");
        } else {
            window.alert(`Congratulations! You guessed the correct number ${targetNumber} in ${attempts} attempts.`);
            break;
        }
    }
}


