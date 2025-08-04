import { useState } from "react";
import "./App.css";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";
export default function App() {
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
  return (
    <div>
      <NavBar counters={counters} />
      <Counters
        counters={counters}
        onReset={handleReset}
        onDelete={handleDelete}
        onIncrement={handleIncrement}
      />
    </div>
  );
}
