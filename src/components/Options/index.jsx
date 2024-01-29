function Options({ onButtonClick, value, img }) {
  return (
    <>
      <button onClick={onButtonClick}>
        <img src={img} alt={value} height="100" width="100" />
      </button>
    </>
  );
}
export default Options;
