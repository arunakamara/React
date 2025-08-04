import Counters from "./components/Counters";
import NavBar from "./components/NavBar";
import CountersContextProvider from "./store/CountersContext";
import "./App.css";

export default function App() {
  return (
    <CountersContextProvider>
      <NavBar />
      <Counters />
    </CountersContextProvider>
  );
}
