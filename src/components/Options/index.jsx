function Options({ onButtonClick, value, img }) {
  return (
    <>
      <button onClick={onButtonClick}>
        <img src={img} alt={value} height="200" width="200" />
      </button>
    </>
  );
}
export default Options;
