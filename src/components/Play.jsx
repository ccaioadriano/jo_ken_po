function Play({ handle }) {
  const options = ["Pedra", "Papel", "Tesoura"];

  return (
    <>
      {options.map((option, index) => {
        return (
          <button key={index} value={option} onClick={handle}>
            {option}
          </button>
        );
      })}
    </>
  );
}

export default Play;
