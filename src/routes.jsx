import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rules from "./pages/Rules";
import Game from "./pages/Game";
import Home from "./pages/Home";
const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/regras" element={<Rules />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
