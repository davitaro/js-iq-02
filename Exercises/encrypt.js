/*
Make a function that encrypts a given input with these steps:

Input: "apple"

Step 1: Reverse the input: "elppa"
Step 2: Replace all vowels using the following chart:

a => 0
e => 1
i => 2
o => 2
u => 3

// "1lpp0"
Step 3: Add "aca" to the end of the word: "1lpp0aca"

Output: "1lpp0aca"

Examples
encrypt("banana") ➞ "0n0n0baca"
encrypt("karaca") ➞ "0c0r0kaca"
encrypt("burak") ➞ "k0r3baca"
encrypt("alpaca") ➞ "0c0pl0aca"
Notes
All inputs are strings, no uppercases and all output must be strings.
*/

function encrypt(input) {
  let arrayOfLetters = input.split("");
  // ['a', 'p', 'p', 'l', 'e']
  console.log(`The original array is ${arrayOfLetters}`);

  let reversedArray = arrayOfLetters.reverse();
  //['e','l','p','p','a'];

  console.log(`The reversed array is ${reversedArray}`);
  //your code

  let lettersArray = ["a", "e", "i", "o", "u"];
  let codeArray = ["0", "1", "2", "2", "3"];

  // if (reversedArray.includes((item) => item === lettersArray[i])) {

  let i = 0;

  for (let item of reversedArray) {
    let index = reversedArray.indexOf(item);
    //for (i = 0; i < lettersArray.length; i++) {
    // console.log(`The index is ${index}`);
    // console.log(`The item is ${item}`);

    if (lettersArray.includes(item)) {
      let i = lettersArray.indexOf(item);
      // console.log(`this word includes ${lettersArray[i]}`);
      reversedArray[index] = codeArray[i];
      //console.log(reversedArray);
      //return reversedArray;
    }
  }
  // console.log(`The array with numbers is now ${reversedArray}`);

  reversedArray.push("a", "c", "a");

  // console.log(reversedArray);

  let finalArray = reversedArray.join("");

  // console.log(`The final array is ${finalArray}`);

  return finalArray;
}

//encrypt("burak");

exports.solution = encrypt;
