function Header({ score, winner }) {
  return (
    <>
      <div>


        <div>
          <p>Placar: {score}</p>
          <p>Vencedor: {winner}</p>
        </div>
      </div>
    </>
  );
}

export default Header;
