import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [paragraph, setParagraph] = useState("");
  const [length, setLength] = useState(0);

  const paragraphRef = useRef(null);

  const copyTextToClipbord = useCallback(() => {
    paragraphRef.current?.select();
    paragraph.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(paragraph);
  });

  const [color, setColor] = useState("Red");

  const paragraphGenrator = useCallback(() => {
    const wordLength = parseInt(length, 10);
    if (!wordLength || isNaN(wordLength)) return;

    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let para = "";

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < wordLength; j++) {
        const charIndex = Math.floor(Math.random() * alphabet.length);
        para += alphabet.charAt(charIndex);
      }
      para += " "; // Add space between words
    }
    setParagraph(para);
  }, [length, setParagraph]);

  // useEffect(() => {
  //   paragraphGenrator();
  // }, []);
  const randomColorGenrator = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setColor(color);
  };

  const handleClick = () => {
    paragraphGenrator();
    randomColorGenrator();
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-2 mt-4 mb-5">
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          placeholder="enter the length"
          className="border-2 border-black mt-2 w-2/12 h-8 rounded-2xl pl-3"
        />
        <button
          className="bg-black rounded-md p-2 pl-5 pr-5 text-white mt-2"
          onClick={handleClick}
        >
          Genrate
        </button>
      </div>
      <div className="">
        <div className="flex rounded-lg mb-4 border ">
          <textarea
            value={paragraph}
            className="outline-none py-4 px-4 flex-grow h-screen border-gray-500"
            placeholder="Your random text here ....."
            readOnly
            ref={paragraphRef}
          />

          <button
            onClick={copyTextToClipbord}
            className="outline-none text-white px-3 py-1 text-2xl font-bold "
            style={{ backgroundColor: color }}
          >
            C<br /> o <br />p<br /> y
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
