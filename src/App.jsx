import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <h1>Jokenpo</h1>
      <Link to={"/game"}>Jogar</Link>
      <Link to={"/rules"}>Regras</Link>
    </>
  );
}

export default App;
