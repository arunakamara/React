import { useState } from "react";
import Counter from "./Counter";

export default function Counters() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 6 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  function handleIncrement(counterId) {
    setCounters((prevCounters) => {
      let counterToUpdate = prevCounters.find((c) => c.id === counterId);
      const index = prevCounters.indexOf(counterToUpdate);
      const updatedCounters = [...prevCounters];
      counterToUpdate = {
        ...counterToUpdate,
        value: counterToUpdate.value + 1,
      };
      updatedCounters[index] = counterToUpdate;
      return updatedCounters;
    });
  }

  function handleDelete(counterId){
    setCounters(prevCounters => {
        const updatedCounters = prevCounters.filter(c => c.id !== counterId)
        return updatedCounters;
    })
  }

  return (
    <div>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={() => handleDelete(counter.id)}
          onIncrement={() => handleIncrement(counter.id)}
        />
      ))}
    </div>
  );
}
