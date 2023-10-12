import { useState } from "react";

const DiceGame = () => {
  const [dice, setDice] = useState(6);
  function refreshDice() {
    //    formula Math.floor(Math.random() * (max - min) + min)

    const randomNumber = Math.floor(Math.random() * (6 - 0)) + 1;
    setDice(randomNumber);
  }

  return (
    <>
      <div className="dice">
        <img src={`./public/${dice}.png`} alt="" /> <br />
        <button onClick={() => refreshDice()}>CLick to Play</button>
      </div>
    </>
  );
};
export default DiceGame;
