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
  const transactionText = flipping ? "Coin is flipping" : showResult ? ` ${result}` : "Ready to toss";

  return (
    <div className="app">
      <div className={coinClassName}>
        <div className="coin-inner">
          <div className="coin-face coin-face-front">
            <img src={headImg} alt="Head side of the coin" />
          </div>
          <div className="coin-face coin-face-back">
            <img src={tailImg} alt="Tail side of the coin" />
          </div>
        </div>
      </div>
      <div className={`result-text ${showResult ? "result-pop" : ""}`}>
        {transactionText}
      </div>
      <button onClick={tossCoin} disabled={flipping}>
        {flipping ? "Tossing..." : "Toss Coin"}
      </button>
      <footer className="creator-credit">
        <a href="https://instagram.com/bho_v_" target="_blank" rel="noopener noreferrer" className="insta-link">
          <svg width="22" height="22" viewBox="0 0 448 512" fill="currentColor" style={{verticalAlign: 'middle', marginRight: 6}} aria-label="Instagram logo"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.9S388.6 1.7 353.3 0C317.7-1.7 130.3-1.7 94.7 0 59.4 1.7 28 9.9 1.7 36.2S1.7 123.4 0 158.7C-1.7 194.3-1.7 381.7 0 417.3c1.7 35.3 9.9 66.7 36.2 92.9s57.6 34.5 92.9 36.2c35.6 1.7 223 1.7 258.6 0 35.3-1.7 66.7-9.9 92.9-36.2s34.5-57.6 36.2-92.9c1.7-35.6 1.7-223 0-258.6zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5C121.9 70.2 191.7 72.8 224.8 72.8s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.7 102.9-9 132.3z"/></svg>
          <span style={{verticalAlign: 'middle'}}>Creator: <b>bho_v_</b></span>
        </a>
      </footer>
    </div>
  );
}

export default App;
