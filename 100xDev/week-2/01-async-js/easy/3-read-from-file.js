var fs = require("fs");

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

readFileAndProcess("read.txt");
