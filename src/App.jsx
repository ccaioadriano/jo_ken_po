import "./App.css";
import { useState } from "react";
function Header({ score }) {
  return (
    <>
      <h1>Score: {score}</h1>
    </>
  );
}

function App() {
  const [score, setScore] = useState(0);
  const options = ["Pedra", "Papel", "Tesoura"];

  const [selectedPlayerOption,setSelectedPlayerOption] = useState("")
  const [machineOption, setMachineOption] = useState("")

  function getValue(e) {
    setSelectedPlayerOption(e.target.value)
    setMachineOption()
  }

  return (
    <>
      <Header score={score} />

      <div>Opção do player: {selectedPlayerOption}</div>
      <div>Opção do maquina: {machineOption}</div>

      {options.map((option, index) => {
        return <button key={index} onClick={(e)=>{getValue(e)}} value={option}>{option}</button>;
      })}
    </>
  );
}

export default App;
