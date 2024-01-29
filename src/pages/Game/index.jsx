import { useEffect, useState } from "react";
import Options from "../../components/Options";
import Papel from "../../assets/Papel.png";
import Pedra from "../../assets/Pedra.png";
import Tesoura from "../../assets/Tesoura.png";
import Header from "../../components/Header";
import Box from "../../components/Box";
import Display from "../../components/Display"
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
      <div className="center">
        <Box>
          <Header machineScore={machineScore} playerScore={playerScore} />

          <Display playerChoice={playerChoice} machineChoice={machineChoice} />
          <div className="options">
            <Options
              onButtonClick={(e) => {
                handleChoices("Pedra");
              }}
              value="Pedra"
              img={Pedra}
              className="pedra"
            />
            <Options
              onButtonClick={() => {
                handleChoices("Papel");
              }}
              value="Papel"
              img={Papel}
            />
            <Options
              onButtonClick={() => {
                handleChoices("Tesoura");
              }}
              value="Tesoura"
              img={Tesoura}
            />
          </div>
        </Box>
      </div>
    </>
  );
}

export default Game;
