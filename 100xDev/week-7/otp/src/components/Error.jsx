import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex items-center justify-center flex-col gap-7">
      <h1 className="text-7xl">Not Valid OTP !! 🫠</h1>
      <button
        onClick={handleClick}
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
