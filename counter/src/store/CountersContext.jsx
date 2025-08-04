import { createContext } from "react";

export const CountersContext = createContext({
  counters: [{ id: 1, value: 0 }],
  incrementCounter: () => {},
  deleteCounter: () => {},
  resetCounter: () => {},
});
