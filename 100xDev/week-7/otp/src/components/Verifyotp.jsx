import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Verifyotp = () => {
  const otp = useSelector((state) => state.otp);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(["", "", "", ""]);

  const handleInput = (index, value) => {
    // Handle input for a specific index
    if (value.length === 1 && /^\d+$/.test(value)) {
      setInputs((prevInputs) => {
        const newInputs = [...prevInputs];
        newInputs[index] = value;
        return newInputs;
      });
    } else if (value.length === 0) {
      // Allow deletion if the input is empty
      setInputs((prevInputs) => {
        const newInputs = [...prevInputs];
        newInputs[index] = ""; // Empty the input at the specified index
        return newInputs;
      });
    }
  };

  useEffect(() => {
    alert(`Your otp is here ${otp}`);
  }, [otp]);

  const verifyOtp = () => {
    const enteredOtp = inputs.join("");
    console.log(enteredOtp);
    if (Number(enteredOtp) !== otp) {
      return navigate("/error");
    }
    navigate("/hello");
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-5 gap-3 ">
        {inputs.map((value, index) => (
          <input
            key={index}
            className="h-8 w-8 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            value={value}
            onChange={(e) => handleInput(index, e.target.value)}
            maxLength={1} // Limit input to one character
          />
        ))}
      </div>
      <div className="flex items-center justify-center mt-12">
        <button
          onClick={verifyOtp}
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Verifyotp;
