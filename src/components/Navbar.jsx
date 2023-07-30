import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import lupaimages from "../imgs/lupa.jpg";
import loginimages from "../imgs/login.jpg"

function Navbar() {
  return (
    <header className={styles.headerprincipal}>
      <h1 className="titulo">OverChannel</h1>

      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" className={styles.linkStyle}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/genero" className={styles.linkStyle}>
              Gênero
            </Link>
          </li>
          <li>
            <Link to="/racking" className={styles.linkStyle}>
              Racking
            </Link>
          </li>
          <li>
            <Link to="/maispopular" className={styles.linkStyle}>
              Mais Popular
            </Link>
          </li>
          <div className={styles.lupapesquisa}>
            <img
              src={lupaimages}
              alt="lupa de pesquisa"
              className={styles.pesquisa}
            />
          </div>
        </ul>
      </nav>

      <div className={styles.usuario}>
      <img
              src={loginimages}
              alt="lupa de pesquisa"
              className={styles.pesquisa}
            />
      </div>
    </header>
  );
}
export default Navbar;
