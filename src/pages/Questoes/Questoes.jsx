import React, {useState} from 'react';
import Card from '../../components/Card/Card';
import './questoes.css';

function Questoes() {
  const data = [
 { question: "O Git é um conjunto de programas utilitários de linha de comando no estilo Unix.", anwser: true },
 { question: "O Git é uma linguagem de programação!" , anwser: false },
 { question: "O Git é sem dúvidas é o maior sistema de versionamento da atualidade." , anwser: true }, 
 { question: "O Git não pode registrar o histórico de modificações do seu projeto." , anwser: false },
 { question:"O Comando 'git push' é o comando para deletar o projeto." , anwser: false },
 { question: "O comando 'git status' permite ver quais arquivos estão sendo 'rastreados' pelo Git e quais modificações já foram enviadas para o stage." , anwser: true }, 
 { question: "Aprendendo git você  aumenta sua produtividade, além de ter o menor risco de perder o trabalho já feito, possuindo maior controle sobre o processo de desenvolvimento." , anwser: true }, 
 { question: "O git  no mundo corporativo é utilizado por  grandes empresas utilizando repositórios privados de git para controlar a evolução de códigos criados e modificados por seus colaboradores." , anwser: true }, 
 { question:"O git é um sistema de controle de versão,também conhecida pela sigla VCS-version control system." , anwser: true },
 { question: "No sistema de controle de versão do git  as operações não são atômicas, se caso uma operação de repositório é suspensa, ela pode deixar o repositório em um estado instável.", anwser: false }
]
  const [acertos, setAcertos] = useState(0)

  function adicionarAcerto(){
    setAcertos(acertos + 1)
  }

  function resultado(acertos){
    
      if(acertos < 5){
       return <h1> Que pena! Que tal voltar para a página guia e aprender um pouco mais?</h1>
      } else if(acertos > 5 && acertos < 8){
        return <h1> Parabéns Você está quase lá!</h1>
      } else {
        return <h1>Parabéns você é um especialista em GIT!</h1>
      }
    
  }

  return (
    <> 
    <div className="questoes-caixa">
    <h1>Se chegou até aqui, vamos ver o que você aprendeu sobre o GIT.</h1>
    <h3>Está afirmação é Verdadeira ou Falsa?</h3>
   { data.map((card) => {
   return (
      <Card className="questoes" question={card.question} anwser={card.anwser} adicionarAcerto={adicionarAcerto}/>
   )
     
    })
    
  }
   </div>
   <div className="respostas-caixa">
      <h3>Total de Acertos:{acertos} {resultado(acertos)}</h3>
   </div>


    </>
  )
}

export default Questoes