import "./App.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Play from "./components/Play.jsx";
function App() {
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState("");
  const [machineChoice, setMachineChoice] = useState("");

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

      <div>Opção do player: {playerChoice}</div>
      <div>Opção do maquina: {machineChoice}</div>

      <Play
        choice={(e) => {
          handleSetPlayerChoice(e);
        }}
      />
    </>
  );
}

export default App;
