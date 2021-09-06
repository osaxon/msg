import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";


export default function Subscribe() {
  const { register, handleSubmit, errors, reset } = useForm();
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(true);
  const [intervalId, setIntervalId] = useState(0)


  const subscribe = async (e) => {
    e.preventDefault()
    setState("Loading");
    setErrorMessage(null);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }

    
    

    try {
      const response = await axios.post("/api/newsletter", { email });
      setState("Success");
      setMessage("Thank you for subscribing");
      setEmail("");
      setMessage("Thanks for subscribing, you'll hear from us soon.");
      let newIntervalId = setInterval(() => {
        setMessage("");
      }, 2500);
      
      setIntervalId(newIntervalId)
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("Error");
      setMessage("Oops, check your email and try again.");
      let newIntervalId = setInterval(() => {
        setMessage("");
      }, 2500);
      setIntervalId(newIntervalId);
      
    }
  };

  return (
    <div className="md:h-1/2 mb-5 flex flex-col md:justify-center items-center">
      <input
        className="border-orange w-2/3 shadow-lg text-white h-8 inline-flex items-center justify-center  bg-transparent p-2 tracking-wide text-center placeholder-gray-300"
        placeholder="Enter your email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="mt-2 bg-orange w-2/3 text-black h-8 inline-flex items-center justify-center p-2 tracking-widest w-full font-black hover:opacity-75 hover:text-white"
        onClick={subscribe}
      >
        SUBSCRIBE
      </button>
      <h3 className="rounded-md bg-gray-200 text-center text-xl text-gray-900 mt-2 w-2/3">
        {message}
      </h3>
    </div>
  );
}
