//u can create like a gallery app. have 5-6 img links in node backend, have endpoints  for images.
// then display them on frontend using html.

const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const imageUrl = [
  "https://wallpapercave.com/wp/wp12589015.jpg",
  "https://wallpapercave.com/wp/wp12589049.jpg",
  "https://wallpapercave.com/wp/wp12744883.jpg",
  "https://wallpapercave.com/wp/wp13266634.png",
  "https://wallpapercave.com/wp/wp13298778.jpg",
  "https://wallpapercave.com/wp/wp13298944.jpg",
];

// get all images
app.get("/images", async (req, res) => {
  try {
    return res.status(200).json({ imageUrl });
  } catch (err) {
    console.log(err);
    return res.status(501).json({ msg: "Internal Server Error" });
  }
});

// get image by id

app.get("/image/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (isNaN(id)) {
      return res.status(404).json({ msg: "image id should be number" });
    }

    if (id > 5 || id < 0) {
      return res.status(404).json({ msg: "No image found" });
    }
    const image = imageUrl[id];

    return res.status(200).json({ image });
  } catch (err) {
    console.log(err);
    return res.status(501).json({ msg: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
