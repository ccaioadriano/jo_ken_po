import { useEffect, useState } from "react";
import Options from "../../components/Options";
import papel from "../../assets/papel.png";
import pedra from "../../assets/pedra.png";
import tesoura from "../../assets/tesoura.png";
import Header from "../../components/Header";
import Box from "../../components/Box";
import "./style.css";
function Game() {
  const optionsMachine = ["Pedra", "Papel", "Tesoura"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [machineChoice, setMachineChoice] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [machineScore, setMachineScore] = useState(0);

  function handleChoices(playerOption) {
    setPlayerChoice(playerOption);

    setMachineChoice(
      optionsMachine[Math.floor(Math.random() * optionsMachine.length)]
    );
  }

  function determineWinnerAndUpdateScore() {
    if (playerChoice === "Pedra" && machineChoice === "Tesoura") {
      setPlayerScore(playerScore + 1);
    } else if (playerChoice === "Pedra" && machineChoice === "Papel") {
      setMachineScore(machineScore + 1);
    } else if (playerChoice === "Papel" && machineChoice === "Pedra") {
      setPlayerScore(playerScore + 1);
    } else if (playerChoice === "Papel" && machineChoice === "Tesoura") {
      setMachineScore(machineScore + 1);
    } else if (playerChoice === "Tesoura" && machineChoice === "Papel") {
      setPlayerScore(playerScore + 1);
    } else if (playerChoice === "Tesoura" && machineChoice === "Pedra") {
      setMachineScore(machineScore + 1);
    } else {
      ("EMPATE");
    }
  }

  useEffect(() => {
    determineWinnerAndUpdateScore();
  }, [playerChoice, machineChoice]);

  return (
    <>
    <h1>Hora da caixa</h1>
    <Box>
      <div className="game">
        <Header machineScore={machineScore} playerScore={playerScore} />
        <main>
          <div className="selected">
            <div>Opção do jogador: {playerChoice}</div>
            <div>Opção da máquina: {machineChoice}</div>
          </div>
          <div className="options">
            <Options
              onButtonClick={(e) => {
                handleChoices("Pedra");
              }}
              value="Pedra"
              img={pedra}
            />
            <Options
              onButtonClick={() => {
                handleChoices("Papel");
              }}
              value="Papel"
              img={papel}
            />
            <Options
              onButtonClick={() => {
                handleChoices("Tesoura");
              }}
              value="Tesoura"
              img={tesoura}
            />
          </div>
        </main>
      </div>
    </Box>
    </>
  );
}

export default Game;