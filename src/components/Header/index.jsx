function Header({ playerScore, machineScore }) {
  return (
    <>
      <header>
        <div className="score">
          <p>Jogador: {playerScore}</p>
          <p>Máquina: {machineScore}</p>
        </div>
      </header>
    </>
  );
}

export default Header;
