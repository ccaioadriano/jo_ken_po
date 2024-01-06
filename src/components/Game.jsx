import { useState } from "react";
import Play from "./Play";
import Header from "./Header";

function Game() {
  const optionsMachine = ["Pedra", "Papel", "Tesoura"];
  const [playerChoice, setPlayerChoice] = useState("");
  const [machineChoice, setMachineChoice] = useState("");
  const [score, setScore] = useState(0);

  function handleSetPlayerChoice(e) {
    setPlayerChoice(e.target.value);

    setTimeout(() => {
      setMachineChoice(
        optionsMachine[Math.floor(Math.random() * optionsMachine.length)]
      );
    }, 2000);
  }

  return (
    <>
      <Header score={score} />

      <Play
        handle={(e) => {
          handleSetPlayerChoice(e);
        }}
      />

      <div>Opção do player: {playerChoice}</div>
      <div>Opção do maquina: {machineChoice}</div>
    </>
  );
}

export default Game;
