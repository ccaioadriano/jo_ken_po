import { Link } from "react-router-dom";
import "./style.css";
const Home = () => {
  return (
    <>
      <div className="content">
        <h1 className="title is-size-1">Jokenpo</h1>
        <div className="is-flex">
          <Link to={"/game"} className="button is-primary">
            Jogar
          </Link>
          <Link to={"/regras"} className="button is-warning">
            Regras
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
