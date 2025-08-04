import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState({ value: 2 });

  
  const { value: count } = counter;

    const countValue = count === 0 ? 'Zero' : count;

  let counterStyle = "size-8 rounded-sm w-fit p-3 text-center leading-[0.5] ";
  counterStyle += count === 0 ? "bg-yellow-400" : "bg-blue-300";

  function handleIncrement(){
    setCounter(prevCounter => ({value: prevCounter.value + 1}))
  }
  return (
    <div className="m-4 flex gap-5 ">
      <div className={counterStyle}>{countValue}</div>
      <button 
      onClick={handleIncrement}
      className="bg-stone-400 px-2 rounded-sm hover:bg-stone-300">
        Increment
      </button>
    </div>
  );
}
