import { useState } from "react";
import Play from "./Play";
import Header from "./Header";

function Game() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [machineChoice, setMachineChoice] = useState("");
  const [score, setScore] = useState(0);

  if (playerChoice && machineChoice) {
    setTimeout(() => {
      setPlayerChoice("");
      setMachineChoice("");
    }, 2000);
  }

  function handleSetPlayerChoice(e) {
    setPlayerChoice(e.target.value);
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
