import React from "react";
import { useState } from "react";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addOtp } from "../features/otpSlice";
import Verifyotp from "./Verifyotp";
import { useEffect } from "react";

const HomePage = () => {
  const [number, setNumber] = useState(0);
  const [otp, setOtp] = useState(null);
  const [genrated, setGenrated] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const genrateOtp = (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    dispatch(addOtp(randomNumber));
    setGenrated(true);
    setOtp("");
    navigate("/verify-otp");
  };

  return (
    <div>
      <form onSubmit={genrateOtp} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter your Number..."
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Genrate Otp
        </button>
      </form>
    </div>
  );
};

export default HomePage;
