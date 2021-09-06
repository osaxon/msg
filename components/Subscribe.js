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


  const subscribe = async (e) => {
    e.preventDefault()
    setState("Loading");
    setErrorMessage(null);
    

    try {
      const response = await axios.post("/api/newsletter", { email });
      setState("Success");
      setMessage("Thank you for subscribing");
      setEmail("");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("Error");
      setMessage("Ooops, please check the email and try again");
      reset();
    }
  };

  return (
    <div className="md:h-1/2 mb-5 flex flex-col md:justify-center items-center">
      <input
        className="border-orange w-2/3 text-white h-10 bg-transparent p-2 tracking-wide text-center placeholder-gray-300"
        placeholder="Enter your email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="mt-2 bg-orange w-2/3 text-black h-10 p-2 tracking-widest w-full font-black hover:opacity-75 hover:text-white"
        onClick={subscribe}
      >
        SUBSCRIBE
      </button>
      <h3 className="text-center text-xl text-gray-100 mt-4">
      </h3>
    </div>
  );
}
