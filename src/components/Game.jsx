import { useEffect, useState } from "react";
import Play from "./Play";
import Header from "./Header";

function Game() {
  const optionsMachine = ["Pedra", "Papel", "Tesoura"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [machineChoice, setMachineChoice] = useState(null);
  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState(null);

  function handleSetPlayerChoice(value) {
    setPlayerChoice(value);
  }

  useEffect(() => {
    let timeOutId = setTimeout(() => {
      setMachineChoice(
        optionsMachine[Math.floor(Math.random() * optionsMachine.length)]
      );
      determineWinnerAndUpdateScore();
    }, 2000);

    return () => clearTimeout(timeOutId);
  }, [playerChoice]);

  function determineWinnerAndUpdateScore() {
    if (playerChoice && (playerChoice == "Pedra" && machineChoice == "Tesoura")) {
      setWinner("Player Ganhou");
    }
    setWinner("Machine Winner")
  }

  return (
    <>

    {winner && "Player Ganhou"}

      <Header score={score} />

      <div>
        <div>Opção do player: {playerChoice}</div>
        <div>Opção do maquina: {machineChoice}</div>
      </div>

      <div>
        <Play
          onButtonClick={(e) => {
            handleSetPlayerChoice("Pedra");
          }}
          value={"Pedra"}
        />
        <Play
          onButtonClick={() => {
            handleSetPlayerChoice("Papel");
          }}
          value={"papel"}
        />
        <Play
          onButtonClick={() => {
            handleSetPlayerChoice("Tesoura");
          }}
          value={"Tesoura"}
        />
      </div>
    </>
  );
}

export default Game;
