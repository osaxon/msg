import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("Loading");
    setErrorMessage(null);

    try {
      const response = await axios.post("/api/newsletter", { email });
      setState("Success");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("Error");
    }
  };

  return (
    <div className="bg-white md:w-5/12 w-full p-10 min-h-full">
      <div className="md:mt-12 px-20 md:px-2">
        <Image src={logo} layout="intrinsic" />
      </div>
      <div className="mt-4 md:mt-12 border flex flex-wrap justify-center">
        <input
          className="bg-orange text-black p-2 tracking-wide w-full text-center"
          placeholder="Enter your email"
        />
        <button
          className="mt-2 bg-orange text-black p-2 tracking-widest w-full font-black"
          onClick={subscribe}
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}
