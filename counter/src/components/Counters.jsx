import { use } from "react";
import { CountersContext } from "../store/CountersContext";
import Counter from "./Counter";

export default function Counters() {
  const {
    counters,
    resetCounter: onReset,
    deleteCounter: onDelete,
    incrementCounter: onIncrement,
  } = use(CountersContext);

  let counterStyle = "size-8  rounded-sm w-fit p-3 text-center leading-[0.5] ";

  return (
    <div>
      <button
        onClick={onReset}
        className="mx-5 mt-2 bg-green-300 p-2 rounded-md hover:bg-green-400"
      >
        Reset
      </button>
      {counters.map((counter) => (
        <Counter key={counter.id}>
          {
            <div className="m-4 flex gap-5 ">
              <div
                className={
                  counter.value === 0
                    ? counterStyle + "bg-yellow-400"
                    : counterStyle + "bg-blue-300"
                }
              >
                {counter.value === 0 ? "Zero" : counter.value}
              </div>
              <button
                onClick={() => onIncrement(counter.id)}
                className="bg-stone-400 px-2 rounded-sm hover:bg-stone-300"
              >
                Increment
              </button>
              <button
                onClick={() => onDelete(counter.id)}
                className="bg-red-500 px-2 rounded-sm hover:bg-red-400 text-sm text-red-100"
              >
                Delete
              </button>
            </div>
          }
        </Counter>
      ))}
    </div>
  );
}
