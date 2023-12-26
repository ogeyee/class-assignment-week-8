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
