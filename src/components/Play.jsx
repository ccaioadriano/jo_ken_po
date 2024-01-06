function Play({ choice }) {
  const options = ["Pedra", "Papel", "Tesoura"];

  function getChoice(e) {
    choice(e);
  }

  return (
    <>
      {options.map((option, index) => {
        return (
          <button
            key={index}
            value={option}
            onClick={(e) => {
              getChoice(e);
            }}
          >
            {option}
          </button>
        );
      })}
    </>
  );
}

export default Play;
