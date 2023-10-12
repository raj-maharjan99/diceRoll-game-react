import React, { useState } from "react";
import "./style/App.css";
import DiceGame from "./diceGame/dice";
import Counter from "./counterApp/counter";
import styles from "./style/buttonApp.module.css";
const App = () => {
  const [resultDice, setResultDice] = useState(false);
  const [counterApp, setCounterApp] = useState(false);
  return (
    <>
      <div className={styles.btn_group}>
        <button onClick={() => setResultDice(true)}>open Dice game</button>
        <button onClick={() => setResultDice(false)}>Close Dice Game</button>
        {resultDice && <DiceGame />}
        <br />{" "}
        <button onClick={() => setCounterApp(true)}>open Counter App</button>
        <button onClick={() => setCounterApp(false)}>Close Counter App</button>
        {counterApp && <Counter />}
      </div>
    </>
  );
};

export default App;
