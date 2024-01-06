function Play({ handle }) {
  const options = ["Pedra", "Papel", "Tesoura"];

  function handleClick(e) {
    handle(e);
  }

  return (
    <>
      {options.map((option, index) => {
        return (
          <button
            key={index}
            value={option}
            onClick={(e) => {
              handleClick(e);
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
