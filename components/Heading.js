import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Heading() {
  const [state, setState] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, [state]);

  return (
    <div>
      <Head>
        <link
          rel="preload"
          href="/fonts/GothamBlack/GOTHAM-BLACK.TTF"
          as="font"
          crossOrigin=""
        />
      </Head>
      <h1 className="text-orange text-6xl md:text-7xl font-black font-face">
        KEYS TO
        <br />
        THE CITY{state ? "." : ""}
      </h1>
    </div>
  );
}
