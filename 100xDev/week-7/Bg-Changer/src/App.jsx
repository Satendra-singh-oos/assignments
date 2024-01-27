import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("white");

  const randomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setColor(color);
  };
  return (
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex  justify-center gap-3 shadow-lg bg-white px-3 py-4 rounded-xl w-5/12">
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg  bg-red-500"
            onClick={() => setColor("Red")}
          >
            Red
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-green-500"
            onClick={() => setColor("Green")}
          >
            Green
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-blue-500"
            onClick={() => setColor("Blue")}
          >
            Blue
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-violet-500 "
            onClick={() => setColor("Violet")}
          >
            Violet
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-yellow-500 "
            onClick={() => setColor("Yellow")}
          >
            Yellow
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
            onClick={randomColor}
          >
            Random
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
