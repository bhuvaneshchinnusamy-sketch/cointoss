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
    }, 6000);
  };

  const showResult = !flipping && result !== null;
  const coinClassName = `coin ${flipping ? "flip" : ""} ${showResult ? result.toLowerCase() : ""}`;
  const coinImage = showResult ? (result === "Tail" ? tailImg : headImg) : headImg;
  const coinAlt = showResult
    ? result === "Tail"
      ? "Tail side of the coin"
      : "Head side of the coin"
    : "Flipping coin";
  const transactionText = flipping ? "Coin is flipping" : showResult ? ` ${result}` : "Ready to toss";

  return (
    <div className="app">
      <div className={coinClassName}>
        <div className="coin-inner">
          <img src={coinImage} alt={coinAlt} className="coin-face" />
          {/* removed inline result-overlay; result animation will be shown in .result-text */}
        </div>
      </div>
      <div className={`result-text ${showResult ? "result-pop" : ""}`}>
        {transactionText}
      </div>
      <button onClick={tossCoin} disabled={flipping}>
        {flipping ? "Tossing..." : "Toss Coin"}
      </button>
    </div>
  );
}

export default App;
