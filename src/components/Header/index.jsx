import "./style.css";
function Header({ playerScore, machineScore }) {
  return (
    <>
      <header className="is-flex">
        <p>Jogador: {playerScore}</p>
        <p>Máquina: {machineScore}</p>
      </header>
    </>
  );
}

export default Header;
