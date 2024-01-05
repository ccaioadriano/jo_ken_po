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
  const options = ["Pedra", "Papel", "Tesoura"];

  const [score, setScore] = useState(0);
  const [selectedPlayerOption,setSelectedPlayerOption] = useState("")
  const [machineOption, setMachineOption] = useState("")

  if(selectedPlayerOption && machineOption) {
    setTimeout(()=>{
      setSelectedPlayerOption("")
      setMachineOption("")
    }, 2000)
  }

  function setValues(e) {
    setSelectedPlayerOption(e.target.value)

 
      setTimeout(()=>{
        setMachineOption(options[Math.floor(Math.random() * options.length)])
      }, 1000)
  }

  return (
    <>
      <Header score={score} />


      <div>Opção do player: {selectedPlayerOption}</div>
      <div>Opção do maquina: {machineOption}</div>

      {options.map((option, index) => {
        return <button key={index} onClick={(e)=>{setValues(e)}} value={option}>{option}</button>;
      })}
    </>
  );
}

export default App;
