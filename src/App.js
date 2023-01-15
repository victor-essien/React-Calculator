import React, { useState } from "react";
import "./styles.css";

function App() {
  const [result, setResult] = useState("");
  const handleclick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const equal = () => {
    setResult(eval(result).toString());
  };
  return (
    <div className="Container">
      <form>
        <input type="text" value={result} />
      </form>

      <div className="keypad">
        <button id="clear" onClick={clear}>
          AC
        </button>
        <button id="delete" onClick={backspace}>
          C
        </button>
        <button className="operator" name="/" onClick={handleclick}>
          &divide;{" "}
        </button>
        <button className="num" name="7" onClick={handleclick}>
          {" "}
          7
        </button>
        <button className="num" name="8" onClick={handleclick}>
          {" "}
          8
        </button>
        <button className="num" name="9" onClick={handleclick}>
          {" "}
          9
        </button>
        <button className="operator" name="*" onClick={handleclick}>
          &times;
        </button>
        <button className="num" name="4" onClick={handleclick}>
          {" "}
          4
        </button>
        <button className="num" name="5" onClick={handleclick}>
          {" "}
          5
        </button>
        <button className="num" name="6" onClick={handleclick}>
          {" "}
          6
        </button>
        <button className="operator" name="-" onClick={handleclick}>
          &ndash;
        </button>
        <button className="num" name="1" onClick={handleclick}>
          {" "}
          1
        </button>
        <button className="num" name="2" onClick={handleclick}>
          {" "}
          2
        </button>
        <button className="num" name="3" onClick={handleclick}>
          {" "}
          3
        </button>
        <button className="operator" name="+" onClick={handleclick}>
          +
        </button>
        <button className="num" name="0" onClick={handleclick}>
          0
        </button>
        <button className="num" name="." onClick={handleclick}>
          .
        </button>
        <button id="result" onClick={equal}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
