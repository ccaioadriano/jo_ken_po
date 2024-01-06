import "./App.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Game from "./components/Game.jsx";
function App() {
  return (
    <>
      <Game />

      <button>Regras</button>
    </>
  );
}

export default App;
