import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import  styles from "./Navbar.module.css";

function Navbar() {

 
  return (
    <header  className={styles.headerprincipal}>

      <h1 className="titulo">OverChannel</h1>

      <nav className="navbar">
        <ul>
          <li>
            <Link  to="/" className={styles.linkStyle}>Inicio</Link>
          </li>
          <li>
            <Link to="/genero" className={styles.linkStyle}>Gênero</Link>
          </li>
          <li>
            <Link to="/racking" className={styles.linkStyle}>Racking</Link>
          </li>
          <li>
            <Link to="/maispopular" className={styles.linkStyle}>Mais Popular</Link>
          </li>
        </ul>
      </nav>

      <div className="lupa">
        <FaSearch />
      </div>
      <div className="usuario">
        <FaUser />
      </div>
    </header>
  );
}
export default Navbar;
