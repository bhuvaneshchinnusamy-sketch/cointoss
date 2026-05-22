import React, { useState } from "react";
import "./App.css";
import headImg from "./head.png";
import tailImg from "./tail.png";

function App() {
  const [result, setResult] = useState(null);
  const [flipping, setFlipping] = useState(false);

  const tossCoin = () => {
    setFlipping(true);
    setResult(null);

    setTimeout(() => {
      const outcomes = ["Head", "Tail"];
      const randomResult = outcomes[Math.floor(Math.random() * outcomes.length)];
      setResult(randomResult);
      setFlipping(false);
    }, 2000);
  };

  const coinClassName = `coin ${flipping ? "flip" : ""} ${!result ? "initial-blur" : ""} ${result ? result.toLowerCase() : ""}`;
  const coinImage = result === "Tail" ? tailImg : headImg;
  const coinAlt = result === "Tail"
    ? "Tail side of the coin"
    : "Head side of the coin";

  return (
    <div className="app">
      <h1>Coin Toss</h1>
      <div className={coinClassName}>
        <div className="coin-inner">
          <img src={coinImage} alt={coinAlt} className="coin-face" />
          <div className="coin-status">
            {flipping ? "Coin is flipping" : ""}
          </div>
        </div>
      </div>
      <button onClick={tossCoin} disabled={flipping}>
        {flipping ? "Tossing..." : "Toss Coin"}
      </button>
    </div>
  );
}

export default App;
