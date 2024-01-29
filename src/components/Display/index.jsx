import Papel from "../../assets/Papel.png";
import Pedra from "../../assets/Pedra.png";
import Tesoura from "../../assets/Tesoura.png";
import Box from "../Box";
import "./style.css";

function Display({ playerChoice, machineChoice }) {


  function choiceTest(choice) {
    switch (choice) {
      case "Pedra":
        return <img src={Pedra} alt="Pedra" width={"75px"} />

      case "Papel":
        return <img src={Papel} alt="Pedra" width={"75px"} />
      
      case "Tesoura":
        return <img src={Tesoura} alt="Pedra" width={"75px"} />
      default:
        return <></>
    }
  }


  return (
    <div className="display">
      <div className="display-single">
        {
        choiceTest(playerChoice)
        }
      </div>
      <span>X</span>
      <div className="display-single">
        {choiceTest(machineChoice)}
      </div>
    </div>
  );
}

export default Display;
