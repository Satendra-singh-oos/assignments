// * Recursion Logic
let count = 0;
function updateCounter() {
  console.log(count);
  count = count + 1;

  setTimeout(updateCounter, 1000);
}

updateCounter();

// ! below code Logic is correct BUT
/*

The issue with your code lies in the while loop. 
The loop will immediately schedule all the setTimeout calls without waiting for each one to complete. 
This will result in all the updateCounter calls being executed almost simultaneously after a 1000 milliseconds delay.
To create a proper interval with setTimeout,
 you should use a recursive approach to schedule the next call after the previous one completes.
*/
// let i = 0;

// let count = 0;
// function updateCounter() {
//   count += 1;
//   console.log(count);
// }
// while (i > -1) {
//   setTimeout(updateCounter, 1000);
//   i++;
// }
