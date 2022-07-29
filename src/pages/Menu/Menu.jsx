import Titulo from '../../components/paginaMenu/Titulo';
import Paragrafo from '../../components/paginaMenu/Paragrafo';
import Button from '../../components/paginaMenu/Button';
import Imagem from '../../components/paginaMenu/Imagem';
import GitLogo from '../../assets/gitlogo.png';
import ImagemAutora from '../../assets/eu.jpg';
import TelescopioImg from '../../assets/telescopio.png';
import AstronautaImg from '../../assets/astronauta.png';
import FogueteImg from '../../assets/foguete.png';
import './menu.css';

function Menu() {
  return (
    <main>
      <section className="conteudo-principal">
        <div className="conteudo-principal-escrito">
          <Titulo title="Tudo sobre o Git" />
          <Paragrafo>
            O Git Bash é o aplicativo para ambientes do Microsoft Windows que
            oferece a camada de emulação para a experiência de linha de comando
            Git. Bash é acrônico para "Bourne Again Shell". Shells são
            aplicativos terminais usados como interface em sistemas operacionais
            por meio de comandos gravados. O Shell é o padrão popular no Linux e
            no macOS. O Git Bash é o pacote que instala o Bash, alguns
            utilitários de bash comuns e o Git nos sistemas operacionais
            Windows.
          </Paragrafo>
          <Button></Button>
        </div>
        <Imagem image={GitLogo} />
      </section>
      <section class="conteudo-secundario">
        <Titulo title="Como facilitar a utilização do Git?" />
        <Paragrafo>
          1.Você precisa <strong>P-R-A-T-I-C-A-R</strong>.
        </Paragrafo>
        <Paragrafo>
          2.Veja <strong>tutoriais com professores diferentes</strong>, as vezes
          você está com dúvida pois não entendeu a explicação.
        </Paragrafo>
        <Paragrafo>
          3.Faça <strong>mini projetos</strong>, assim é mais fácil de praticar.
        </Paragrafo>
      </section>
      <article>
        <div className="topicos-caixa">
          <div className="topicos">
            <Imagem image={FogueteImg} />
            <Titulo title="Desempenho" />
            <Paragrafo>
              O Git pode ser considerado um dos melhores softwares de controle
              de versão quanto a performance. Todas as operações são pensadas
              para trazer praticidade e desempenho. Como ele também é
              distribuído, isso traz ainda mais agilidade para o
              desenvolvimento, já que você consegue fazer alterações no seu
              projeto sem uma conexão à internet.
            </Paragrafo>
          </div>
          <div className="topicos">
            <Imagem image={AstronautaImg} />
            <Titulo title="Segurança" />
            <Paragrafo>
              Uma das prioridades é a integridade do código fonte do seu
              projeto. Todas as informações, conteúdos de código, versões,
              commits, tudo é protegido com SHA1, que é um algoritmo seguro de
              hash de criptografia. Isso proporciona mais segurança contra
              alterações acidentais ou maliciosas e também permite que o
              histórico de alterações seja totalmente rastreável.
            </Paragrafo>
          </div>
          <div className="topicos">
            <Imagem image={TelescopioImg} />
            <Titulo title="Flexibilidade" />
            <Paragrafo>
              Uma das grandes vantagens do Git é você conseguir adaptar formatos
              de trabalho não lineares e ainda conseguir rastrear cada uma
              dessas ramificações. Independente se o seu projeto é grande ou
              pequeno, você consegue adaptá-lo para o seu fluxo.
            </Paragrafo>
          </div>
        </div>
      </article>

      <div className="autora">
        <Imagem image={ImagemAutora} />
        <div className="autora-texto">
          <Titulo title="Sobre Mim" />
          <Paragrafo>
            Sou a Mayara, tenho 26 anos, sou uma Geek e adoro tecnologia e gosto
            de estar sempre informada sobre o mundo e isto me levou a
            programação. Então começei a estudar programação em casa e então eu
            me encontrei.Passar na reprograma foi o melhor passo que poderia dar
            a minha carreira, aprendi muito e isto vai me abrir portas que estou
            preparada para abrir.
          </Paragrafo>
        </div>
      </div>
    </main>
  );
}

export default Menu;
