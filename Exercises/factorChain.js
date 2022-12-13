/*
A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

[3, 6, 12, 36]

// 3 is a factor of 6
// 6 is a factor of 12
// 12 is a factor of 36
Create a function that determines whether or not an array is a factor chain.

Examples
factorChain([1, 2, 4, 8, 16, 32]) ➞ true

factorChain([1, 1, 1, 1, 1, 1]) ➞ true

factorChain([2, 4, 6, 7, 12]) ➞ false

factorChain([10, 1]) ➞ false
*/
let i;

function factorChain(array) {
  for (i = 1; i < array.length; i++) {
    console.log(
      `The questions is ${array[i]} modulo ${array[i - 1]}, and the answer is ${
        array[i] % array[i - 1]
      }`
    );
    if (array[i] % array[i - 1]) {
      console.log(`False. This is not a factor chain.`);
      return false;
    } else {
      console.log(`True. This is a factor chain.`);
    }
  }
  return true;

  //your code
}

//factorChain([2,4,6,7,12]);
exports.solution = factorChain;
