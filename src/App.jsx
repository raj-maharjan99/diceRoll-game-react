import React, { useState } from "react";

const App = () => {
  const [diceNumber, setDiceNumber] = useState(6);
  const refreshDice = () => {
    const randumNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randumNumber);
    console.log(setDiceNumber);
  };
  return (
    <div>
      {" "}
      <center>
        <img src={`./public/${diceNumber}.png`} alt="" /> <br />
        <br />
        <button onClick={() => refreshDice()}>Let's Play LUDO</button>
      </center>
    </div>
  );
};

export default App;
