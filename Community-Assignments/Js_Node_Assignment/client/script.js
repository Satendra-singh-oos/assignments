//u can create like a gallery app. have 5-6 img links in node backend, have endpoints  for images.
// then display them on frontend using html.

// fetch all image
const fetchAllImage = () => {
  const usernameDisplay = document.getElementById("username-display");

  const username = localStorage.getItem("username");

  if (username) {
    usernameDisplay.textContent = `Welcome, ${username}!`;
  } else {
    usernameDisplay.textContent = "Welcome!";
  }

  fetch("http://localhost:3000/images")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const imageUrls = data.imageUrl;
      let imageArr = JSON.stringify(data);

      const container = document.getElementById("container");
      const imageDiv = document.getElementById("images");

      //   for (let i = 0; i < 6; i++) {
      //     const img = imageUrls[i];
      //     // console.log(i);

      //     const imgElement = document.createElement("img");
      //     imgElement.src = img;
      //     imgElement.classList.add("img");
      //     imgElement.height = 500;
      //     imgElement.width = 300;
      //     imgElement.onclick = () => redirect(i);
      //     imageDiv.appendChild(imgElement);
      //   }

      imageUrls.forEach((img, i) => {
        const imgElement = document.createElement("img");
        imgElement.src = img;
        imgElement.classList.add("img");
        imgElement.height = 500;
        imgElement.width = 300;
        imgElement.onclick = () => redirect(i);
        imageDiv.appendChild(imgElement);
      });

      //container.innerHTML = imageArr;
    })
    .catch((err) => {
      console.log(err);
    });
};

const redirect = (index) => {
  fetch(`http://localhost:3000/image/${index}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.image);

      const link = document.createElement("a");

      link.href = data.image;
      link.textContent = "Click here for full view";
      link.style.color = "#000";

      const fullView = document.getElementById("full");
      fullView.innerHTML = ""; // Clear previous content
      fullView.appendChild(link);
    })
    .catch((err) => {
      console.log(err);
    });
};

fetchAllImage();
