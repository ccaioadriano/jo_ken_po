function Play({ onButtonClick, value }) {
  return (
    <>
      <button onClick={onButtonClick}>{value}</button>
    </>
  );
}

export default Play;
