import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import navIcon1 from '../../assets/github.png';
import navIcon2 from '../../assets/twitter.png';
import navIcon3 from '../../assets/linkedin.png';
import Paragrafo from './Paragrafo'
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <div className="social-icon">
              <a href="https://github.com/MayaraRocha95/" target="_blank">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://twitter.com/MayaraARochaaa" target="_blank">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/mayaraaraujorocha/"
                target="_blank"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
             </div> 
              <Paragrafo>Feito por Mayara Rocha |On17 | #TodasEmTech </Paragrafo>
             <div className="reprograma">
              <a target="_blank" href="https://www.reprograma.com.br/">Conheça a  &#x0007B;Reprograma&#x0007D;</a>
             
             </div>
              
                       

            <div className="footer-menu">
              <Paragrafo>&copy; 2022</Paragrafo>
             
              <ul className="f-menu">
                <li>
                  <Link className="link" to="/">
                    Menu
                  </Link>
                </li>
                <li >
                  <Link className="link" to="/guia">
                    Guia
                  </Link>
                </li>
                <li >
                  <Link className="link" to="/quiz">
                    Quiz
                  </Link>
                </li>
                <li >
                  <Link className="link" to="/comandos">
                    Comandos
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
