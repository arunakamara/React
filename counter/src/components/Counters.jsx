import Counter from "./Counter";

export default function Counters({counters, onDelete, onIncrement, onReset}) {
  

  return (
    <div>
        <button onClick={onReset} className="mx-5 mt-2 bg-green-300 p-2 rounded-md hover:bg-green-400">Reset</button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={() => onDelete(counter.id)}
          onIncrement={() => onIncrement(counter.id)}
        />
      ))}
    </div>
  );
}
