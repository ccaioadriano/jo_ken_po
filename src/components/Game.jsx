import { useEffect, useState } from "react";
import Play from "./Play";
import Header from "./Header";

function Game() {
  const optionsMachine = ["Pedra", "Papel", "Tesoura"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [machineChoice, setMachineChoice] = useState(null);
  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState(null);

  function handleChoices(playerOption) {
    setPlayerChoice(playerOption);

    setMachineChoice(
      optionsMachine[Math.floor(Math.random() * optionsMachine.length)]
    );
  }

  function determineWinnerAndUpdateScore() {
    if (playerChoice === "Pedra" && machineChoice === "Tesoura") {
      setWinner("Player Win");
      setScore(score + 1);
    } else if (playerChoice === "Pedra" && machineChoice === "Papel") {
      setWinner("Machine Win");
    } else if (playerChoice === "Papel" && machineChoice === "Pedra") {
      setWinner("Player Win");
      setScore(score + 1);
    } else if (playerChoice === "Papel" && machineChoice === "Tesoura") {
      setWinner("Machine Win");
    } else if (playerChoice === "Tesoura" && machineChoice === "Papel") {
      setWinner("Player Win");
      setScore(score + 1);
    } else if (playerChoice === "Tesoura" && machineChoice === "Pedra") {
      setWinner("Machine Win");
    } else {
      setWinner("Empate");
    }
  }

  //Espera 2 segundos e faz a jogada a IA
  useEffect(() => {
    determineWinnerAndUpdateScore();
  }, [playerChoice, machineChoice]);

  return (
    <>
      {}

      <div className="selected">
        {playerChoice && <div>Opção do player: {playerChoice}</div>}
        {machineChoice && <div>Opção do maquina: {machineChoice}</div>}
      </div>

      <div className="options">
        <Play
          onButtonClick={(e) => {
            handleChoices("Pedra");
          }}
          value={"Pedra"}
        />
        <Play
          onButtonClick={() => {
            handleChoices("Papel");
          }}
          value={"papel"}
        />
        <Play
          onButtonClick={() => {
            handleChoices("Tesoura");
          }}
          value={"Tesoura"}
        />
      </div>
    </>
  );
}

export default Game;
