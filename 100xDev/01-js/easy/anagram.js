/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let count = 0;

  const formattedStr1 = str1.replace(/\s/g, "").toLowerCase();
  const formattedStr2 = str2.replace(/\s/g, "").toLowerCase();

  let strArray1 = Array.from(formattedStr1);
  let strArray2 = Array.from(formattedStr2);

  let n = strArray1.length;
  let m = strArray2.length;

  if (n != m) {
    return false;
  }

  for (let i = 0; i < n; i++) {
    let charAtStr1 = strArray1[i];

    let j = 0;
    while (j < n) {
      let charAtStr2 = strArray2[j];
      if (charAtStr1 === charAtStr2) {
        count++;
        break;
      }
      j++;
    }
  }

  return count === n;
}

module.exports = isAnagram;
