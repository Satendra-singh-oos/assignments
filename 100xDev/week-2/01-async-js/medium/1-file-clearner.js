var fs = require("fs");

// function readFileAndRemoveSpaces(fileName) {
//   fs.readFile(fileName, "utf-8", function (err, data) {
//     if (err) {
//       return console.error(err);
//     }

//     let updatedText = data.toString().split(" ").join(" ");

//     console.log("Removed Spaces  completed.");
//     console.log(updatedText);

//     fs.writeFile(fileName, updatedText, (err) => {
//         if (err) {
//           return console.log(err);
//         }
//         console.log("File written successfully\n Check The File YO !!");
//       });

//   });
// }

// readFileAndRemoveSpaces("read.txt");

function readFileAndRemoveSpaces(fileName) {
  fs.readFile(fileName, "utf-8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    let updatedText = data.replace(/\s+/g, " ");

    console.log("Removed Spaces completed.");

    fs.writeFile(fileName, updatedText, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("File written successfully\n Check The File YO !!");
    });
  });
}

readFileAndRemoveSpaces("read.txt");
