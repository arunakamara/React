import { createContext, useState } from "react";

export const CountersContext = createContext({
  counters: [{ id: 1, value: 0 }],
  incrementCounter: () => {},
  deleteCounter: () => {},
  resetCounter: () => {},
});

export default function CountersContextProvider({children}){
     const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
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

  function handleDelete(counterId) {
    setCounters((prevCounters) => {
      const updatedCounters = prevCounters.filter((c) => c.id !== counterId);
      return updatedCounters;
    });
  }

  function handleReset() {
    setCounters((prevCounters) => {
      const updatedCounters = [
        ...prevCounters.map((counter) => ({ ...counter, value: 0 })),
      ];
      return updatedCounters;
    });
  }

  const ctxValue = {
    counters: counters,
    incrementCounter: handleIncrement,
    deleteCounter: handleDelete,
    resetCounter: handleReset,
  };

  return (
    <CountersContext value={ctxValue} >
        {children}
    </CountersContext>

  )
}
