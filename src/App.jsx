import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <h1>Jokenpo</h1>
      <Link to={"/game"}>Jogar</Link>
      <button>Regras</button>
    </>
  );
}

export default App;
