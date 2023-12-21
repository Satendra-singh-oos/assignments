/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve, reject) => {
    // if (!NaN(n)) {
    //   reject(new Error("Required A number"));
    // }

    if (isNaN(n) || typeof n !== "number") {
      reject(new Error("Input must be a valid number"));
    }
    setTimeout(resolve, n * 1000);
  });
}

module.exports = wait;
