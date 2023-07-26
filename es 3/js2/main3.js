const intNumber = [2, 1, 8, 5, 9, 3, 4];

let sum = 0;

for (let i = 0; i < intNumbers.length; i++) {
  const currentNumber = intNumbers[i];
  console.log(currentNumber);

  if (i % 2 != 0) {
    sum += currentNumber;
  }
}

console.log("somma: " + sum);
