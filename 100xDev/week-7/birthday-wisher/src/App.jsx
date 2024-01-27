import React, { useState } from "react";
import Card from "./card/Card";

const App = () => {
  const messages = [
    {
      id: 1,
      msg: "Wishing you a day filled with love, laughter, and cherished memories. Happy Birthday!",
    },
    {
      id: 2,
      msg: "May this special day bring you endless joy and fulfillment. Happy Birthday!",
    },
    {
      id: 3,
      msg: "On your birthday, I wish you abundant happiness and love. May all your dreams turn into reality. Happy Birthday!",
    },
  ];

  const [name, setName] = useState("");
  const [check, setCheck] = useState(false);

  const handleClick = () => {
    setName(name);
    setCheck(true);
  };

  return (
    <div>
      <h1 className="font-extrabold text-transparent text-center  mt-6 text-3xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
        Genrate Birthday Wish
      </h1>
      <div className="flex items-center justify-center mt-2">
        <div className="flex w-full items-center space-x-2 md:w-1/3">
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Enter Name Here..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="button"
            className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={handleClick}
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-5">
        {check &&
          messages.map((message) => (
            <Card key={message.id} message={message.msg} name={name} />
          ))}
      </div>
    </div>
  );
};

export default App;
