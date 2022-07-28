import './guia.css'
import Titulo from './Titulo';
import Paragrafo from './Paragrafo';

function Guia() {
  return (
    <center  className='cartao-container'>
      <Titulo title="Por onde começar?"/>
      <Paragrafo>
        O Git está ligado a area de desenvolvimento e ele veio para facilitar
        nossas vidas.Neste video você vai saber de onde o GIT veio e para que
        ela é usada.
      </Paragrafo>
      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/za5KWZ5pRag"
        title="Git // Dicionário do Programador"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Titulo title="O que é o Git?"/>
      <Paragrafo>
        Se você já confundio Git com GitHub neste video você vai entender a
        diferença com definições e conceitos.
      </Paragrafo>
      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/DqTITcMq68k"
        title="O QUE É GIT E GITHUB? - definição e conceitos importantes 1/2"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Titulo title="Tutorial botando em prática"/>
      <Paragrafo>
        Após entender o que é o Git, neste video a Rafaella vai mostrar como
        botar em prática e como dar os primeitos commits.
      </Paragrafo>
      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/UBAX-13g8OM"
        title="COMO USAR GIT E GITHUB NA PRÁTICA! - desde o primeiro commit até o pull request! 2/2"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Titulo title="Entendo o Git"/>
      <Paragrafo>
        Para acabar com qualquer dúvida neste video você vai entender por
        completo  Git
      </Paragrafo>
      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/6Czd1Yetaac"
        title="Entendendo GIT | (não é um tutorial!)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </center>
  );
}

export default Guia;
