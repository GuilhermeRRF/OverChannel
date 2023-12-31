import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import lupaimages from "../imgs/lupa.jpg";
import usuarioImg from '../imgs/login.jpg';
import usuarioRemovebgImg from '../imgs/usuario.png';
import configRemovebgImg from '../imgs/config.png';
import outputRemovebgImg from '../imgs/Output.png';

function Navbar() {
  const toggleDropdown = () => {
    var dropdown = document.getElementById(styles.myDropdown);
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
    } else {
      dropdown.style.display = 'block';
    }
  };

  const menuToggle = () => {
    const toggleMenu = document.querySelector(`.${styles.menu}`);
    toggleMenu.classList.toggle(styles.active);
  };

  return (
    
  <header>
      <nav>

        <h1><Link className={styles.MenuLinkTitulo} to="/">OverChannel</Link></h1>

         {/*--menu--*/}

        <ul className={styles.ulPrincipal}>
          <li className={styles.MenuItem}><Link className={styles.MenuLink} to="/">Inicio</Link></li>
          <div className={styles.dropdown}>
            <button  to="/genero" 
              className={styles.dropbtn} id={styles.MenuLink} onClick={toggleDropdown}>
              Gênero
            </button>
            <div className={styles.DropdownContent} id={styles.myDropdown}>
              <li className={styles.ItemDropdown}>
                <ul className={styles.ListaDropdown}>
                  <p>Ficção</p>
                  <a href="#" title="Html5">Fantasia</a>
                  <a href="#">Horror</a>
                  <a href="#">Ficção Policial</a>
                  <a href="#">Ficção Historica</a>
                  <a href="#">Ficção Feminina</a>
                  <a href="#">Ficção Cientifica</a>
                </ul>
                <ul className={styles.ListaDropdown}>
                  <p>Terror</p>
                  <a href="#">Psicológico</a>
                  <a href="#">Sobrenatural</a>
                  <a href="#">Terror Classicos</a>
                  <a href="#">Cômico</a>
                  <a href="#">Cósmico</a>
                  <a href="#">Slasher</a>
                </ul>
                <ul className={styles.ListaDropdown}>
                  <p>Ação</p>
                  <a href="#">Artes Marciais</a>
                  <a href="#">Ação e Desastre</a>
                  <a href="#">Sci-Fi</a>
                  <a href="#">Super-Herói</a>
                  <a href="#">Documentário</a>
                  <a href="#">Suspense</a>
                </ul>
                <ul className={styles.ListaDropdown}>
                  <p>Anime</p>
                  <a href="#">Terror</a>
                  <a href="#">Culinária</a>
                  <a href="#">Ação</a>
                  <a href="#">Romance</a>
                  <a href="#">Tiro</a>
                  <a href="#">Luta</a>
                </ul>
                <ul className={styles.ListaDropdown}>
                  <p>Comédia</p>
                  <a href="#">Comédia Pastelão</a>
                  <a href="#">Comédias de Humor Negro</a>
                  <a href="#">Comédia Dramática</a>
                  <a href="#">Comédia Romântica</a>
                </ul>
                <ul className={styles.ListaDropdown} id={styles.Romance}>
                  <p>Romance</p>
                  <a href="#">Modernista</a>
                  <a href="#">Naturalista</a>
                  <a href="#">Erótico</a>
                  <a href="#">Policial</a> 
                  <br>
                  </br>
                  <br>
                  </br>
                </ul>
              </li>
            </div>
          </div>
          <li className={styles.MenuItem}><Link to="/racking" className={styles.MenuLink} href="#">Votações</Link></li>
          <li className={styles.MenuItem}>
            <Link  to="/maispopular" className={styles.MenuLink} href="#">Mais Popular</Link>
          </li>

            {/*--Lupa de pesquisa--*/}

            <div class={styles.barraprincipal}>
              <input class={styles.barra} type="text" placeholder="Digite Aqui...." />
              <a href="##" class={styles.lupa}>
              <i className={styles.lupaimages}>
             <img className={styles.lupapesquisa} src={lupaimages} alt="Search" />
        </i>
              </a>
            </div>
                 
                 {/*--Login--*/}
        </ul>
        <div className={styles.action}>
      <div className={styles.profile} onClick={menuToggle}>
        {/* Use as variáveis de imagem importadas */}
        <img src={usuarioImg} alt="Perfil" />
      </div>
      <div className={styles.menu}>
        <ul>
          {/* ... */}
          <li>
            {/* Use as variáveis de imagem importadas */}
            <img src={usuarioRemovebgImg} alt="Meu Perfil" width="20px" />
            <a href="#">Meu Perfil</a>
          </li>
          <li>
            {/* Use as variáveis de imagem importadas */}
            <img src={configRemovebgImg} alt="Configuração" width="20px" />
            <a href="#">Configuração</a>
          </li>
          <li>
            {/* Use as variáveis de imagem importadas */}
            <img src={outputRemovebgImg} alt="Logar" width="20px" />
            <a href="#">Logar</a>
          </li>
        </ul>
      </div>
    </div>
        </nav>
      </header>
  );
}
export default Navbar;
