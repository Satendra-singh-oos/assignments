var fs = require("fs");

// clearing content in file first

function clearContentInFile(fielName) {
  fs.writeFile(fielName, "", (err) => {
    if (err) {
      console.log("Error deleting file contents:", err);
    } else {
      console.log("File contents deleted successfully.");
    }
  });
}

// Clear content in "read.txt" file
clearContentInFile("read.txt");

// Write new content to "read.txt" file

function writeInTheFile(fielName, content) {
  fs.writeFile(fielName, content, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
  });
}
let content = "Yo Yo Honey Singh!@()*&#E&";
writeInTheFile("read.txt", content);

// Function to read and process file content
function readFileAndProcess(fielName) {
  fs.readFile(fielName, "utf-8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    console.log("Asynchronous read: " + data.toString());

    // An expensive operation
    for (let i = 0; i < 100000; i++) {
      let count = i + 2;
    }

    console.log("Expensive operation completed.");
  });
}

// function readFileAndProcess(fielName) {
//   fs.readFile(fielName, "utf-8", function (err, data) {
//     if (err) {
//       return console.log(err);
//     }

//     console.log("Asynchronous read: " + data);

//     // An expensive operation
//     for (let i = 0; i < 100000; i++) {
//       let count = i + 2;
//     }

//     console.log("Expensive operation completed.");
//   });
// }

readFileAndProcess("read.txt");
