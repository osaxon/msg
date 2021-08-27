import React, { useEffect, useState } from 'react'

export default function Heading() {
    const [state, setState] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setState((prev) => !prev)
        }, 500);
        return () => clearInterval(interval)
    }, [state]);

    return (
    <h1 className="text-orange text-5xl font-black font-face">KEYS TO<br/>THE CITY{state ? "." : ""}</h1>
    )
}
