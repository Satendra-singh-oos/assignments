import React from "react";
import Card from "./component/Card.jsx";

const App = () => {
  return (
    <div className="flex justify-center items-center gap-5 flex-col">
      <h1 className="text-pink-500 text-center mt-2 text-5xl font-bold">
        Card
      </h1>

      <Card
        name={"Rita Correia"}
        age={"32"}
        city={"London"}
        followers={"80k"}
        like={"803k"}
        photos={"1.4k"}
        img={
          "https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"
        }
      />
    </div>
  );
};

export default App;
