function clock() {
  let currentDate = new Date();
  let hr = currentDate.getHours();
  let min = currentDate.getMinutes();
  let sec = currentDate.getSeconds();
  let amPM = hr >= 12 ? "PM" : "AM";

  if (hr === 0) {
    hr = 12; // Handle midnight
  } else {
    hr = hr; // Do nothing, keep the original value of hours
  }

  var timeFormate24 = addZeros(hr) + ":" + addZeros(min) + ":" + addZeros(sec);

  hr = hr % 12;
  var timeFormate12 =
    addZeros(hr) + ":" + addZeros(min) + ":" + addZeros(sec) + " " + amPM;

  process.stdout.write("\x1Bc");

  console.log("Time (24-hour formate)->" + timeFormate24);
  console.log("Time (12-hour formate)->" + timeFormate12);
}

function addZeros(number) {
  return number < 10 ? "0" + number : number;
}

setInterval(clock, 1000);

/*

! process.stdout.write("\x1Bc");

* The line of code process.stdout.write("\x1Bc"); in JavaScript is using Node.js to clear the terminal screen. Let's break it down:

* process is a global object in Node.js that provides information about the current Node.js process and allows you to control the process.

* process.stdout refers to the standard output stream of the Node.js process. It represents the stream where the program writes its output.
 
* write() is a method of the process.stdout stream that allows you to write data to the standard output.

* "\x1Bc" is an escape sequence. In this case, it consists of two parts:

* \x1B: This is the escape character in ASCII, which is represented as 0x1B in hexadecimal. It is often used to introduce control sequences in terminal-related operations.
* c: This part is a specific control sequence that instructs the terminal to clear the screen.

*/
