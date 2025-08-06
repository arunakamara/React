import { useReducer, useState } from "react";
export function counterReducer(state, action) {
  return state;
}

function App() {
  // const [counterState, counterDispatch] = useReducer(counterReducer, {
  //   count: 0,
  // })

  const [counter, setCounter] = useState({ count: 0})

  function handleIncrement(){
    setCounter((prevCounter) => ({...prevCounter, count: prevCounter.count + 1}))
  }

  function handleDecrement(){
    setCounter(prevCounter => ({...prevCounter, count: prevCounter.count > 0 ? prevCounter.count - 1 : 0}))
  }

  function handleReset() {
    setCounter(prevCounter => ({...prevCounter, count: 0}))
  }

  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </p>
      <p id="counter">{counter.count}</p>
    </div>
  );
}

export default App;
