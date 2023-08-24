import { useState } from "react";
import "../App.css";
// import sumTwo from "./utils/sum";

function LazyLoadModules() {
  const [res, setRes] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const handleSum = () => {
    const firstNum = parseInt(num1);
    const secondNum = parseInt(num2);
    import("../utils/sum").then((module) => {
      setRes(module.default(firstNum, secondNum));
    });
  };

  return (
    <div>
      <h1>Code Splitting</h1>
      <h2>Calculate the sum of numbers</h2>
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first value"
        />
      </div>
      <div>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second value"
        />
      </div>
      <button onClick={handleSum}>Calculate</button>
      <div>Result: {res}</div>
    </div>
  );
}

export default LazyLoadModules;
