/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let count = 0;

  const formattedStr = str.replace(/\s/g, "").toLowerCase();
  let strArray = Array.from(formattedStr);

  let n = strArray.length;

  for (let i = 0; i < n; i++) {
    let word = strArray[i];
    if (
      word === "a" ||
      word === "e" ||
      word === "i" ||
      word === "o" ||
      word === "u"
    ) {
      count++;
    }
  }

  return count;
}

module.exports = countVowels;
