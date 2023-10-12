import { useState } from "react";
import DiceGame from "../diceGame/dice";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [resultDice, setResultDice] = useState(true);

  const increment = () => {
    const add = count + 1;
    setCount(add);
  };
  const decrement = () => {
    const less = count - 1;
    setCount(less);
  };
  const reset = () => {
    const makeZero = count * 0;
    setCount(makeZero);
  };

  return (
    <>
      {" "}
      <div className="counter_css">
        <div className="count_css">{count}</div>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <button onClick={reset}>Reset</button>
        {/* creating access to operate dice game from counter app side */}
        {/* <button onClick={() => setResultDice(false)}>Close Dice Game</button>
        <button onClick={() => setResultDice(true)}>open Dice game</button> */}
      </div>
      {/* {resultDice && <DiceGame />} */}
    </>
  );
};
export default Counter;
