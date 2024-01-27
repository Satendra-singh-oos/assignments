import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteOtp } from "../features/otpSlice";

const Verifyotp = () => {
  const otp = useSelector((state) => state.otp);
  const dispatch = useDispatch();
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
    }
  };

  useEffect(() => {
    alert(`Your otp is here ${otp}`);
  }, [otp]);

  const verifyOtp = () => {
    const enteredOtp = inputs.join("");
    if (Number(enteredOtp) !== otp) {
      dispatch(deleteOtp());
      return navigate("/error");
    }
    dispatch(deleteOtp());
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
