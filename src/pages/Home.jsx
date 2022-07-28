import { Button } from "./../components/Button";
import { useState } from "react";
import reactLogo from "../assets/react.svg";
import "../App.css";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="grid grid-flow-col items-center justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-red-400">Vite + React</h1>
      <div className="card grid gap-4">
        <Button setCount={setCount} count={count} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default Home;
