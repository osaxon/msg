import React, { useState } from 'react';
import axios from 'axios';

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("Loading");
    setErrorMessage(null);

    try {
      const response = await axios.post("/api/newsletter", { email });
      setState("Success")
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("Error");
    }
  }

  return (
    <div className="container mx-auto max-w-screen">
      <h2>Subscribe to newsletter</h2>
      
      <form onSubmit={subscribe}>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit" disabled={state === "Loading"}>{state === "Loading" ? "Loading" : "Subscribe"}</button>
      </form>
      

    </div>
  )
}
