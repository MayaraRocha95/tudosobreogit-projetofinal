import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <nav>
 
      <ul className="menu">
        <li className="item">
          <Link className="link" to="/">
            Menu
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/guia">
            Guia
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/questoes">
            Questões
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/comandos">
            Comandos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
