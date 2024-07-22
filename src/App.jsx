import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // let arr = [5, 6];
  // let x arr[0];
  // let y arr[1];
  const [number, setNumber] = useState(5);

  // 1 must be fun
  // must start with use =>  useAyhaga => useEffect
  // cant use outside the fun component OR custom hooks
  // let number = 5;
  //dfsdfsdfsadf
  function changeNumber() {
    setNumber(number + 1);
    console.log(number);
  }

  return (
    <>
      <div className="">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="bg-red-700">{number}</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <button onClick={changeNumber}>increment num</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
