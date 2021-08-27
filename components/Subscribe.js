import React, { useState } from "react";
import axios from "axios";

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
    <div className="bg-white h-screen">
      <div className="border">
        <div className="w-full">
          <h1 className="underline my-4 text-center font-black text-red-500 text-5xl">
            MSG
          </h1>
        </div>

        <form className="" onSubmit={subscribe}>
          <input
            className="text-center w-full"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <button
            className="w-full bg-red-600 text-white"
            type="submit"
            disabled={state === "Loading"}
          >
            {state === "Loading" ? "Loading" : "Subscribe"}
          </button>
        </form>
      </div>
    </div>
  );
}
