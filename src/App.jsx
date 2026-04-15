import { useState } from "react";

import Header from "./Components/Header/Header.jsx";
import "./App.css";
import paisService from "./paises.services.js";

function App() {
  const [count, setPais] = useState(0);

  return (
    <>
      <section id="center">
        <Header />

        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setPais((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
