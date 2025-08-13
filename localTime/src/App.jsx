import { useState, useEffect } from "react";

export default function App() {
  const [displayTime, setDisplayTime] = useState(() =>
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayTime(() => new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval)
  }, []);

  return (
    <div className="flex flex-col bg-stone-300 size-40 m-auto rounded-full items-center   mt-15">
      <h2 className="text-xl font-bold text-blue-300 mt-4">My Clock</h2>
      <span className="justify-self-center mt-8 font-bold text-xl">
        {displayTime}
      </span>
    </div>
  );
}
