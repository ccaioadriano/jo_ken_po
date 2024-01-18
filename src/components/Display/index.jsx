import papel from "../../assets/papel.png";
import pedra from "../../assets/pedra.png";
import tesoura from "../../assets/tesoura.png";
import Box from "../Box";
import "./style.css"

function Display({ playerChoice, machineChoice }) {
  return (
    <div className="display">
      <div className="display-single">
        <img src={pedra} alt="Pedra" width={"75px"} />
      </div>
      <span>X</span>
      <div className="display-single">
        <img src={pedra} alt="Pedra" width={"75px"} />
      </div>
    </div>
  );
}

export default Display;
