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
    <div className="flex items-center h-full w-full bg-white">
      <div className="">
        <div className="w-full mx-auto">
          <h1 className="tracking-widest underline my-4 text-center font-black text-red-500 text-5xl">
            MSG
          </h1>
        </div>

        <form
          className="mb-4 md:flex md:flex-wrap md:justify-between"
          onSubmit={subscribe}
        >
          <div className="flex flex-col mb-4 md:w1/2">
            <input
              className="inline-flex mx-auto text-center w-full"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>

          <button
            className="bg-red-600 text-white"
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
