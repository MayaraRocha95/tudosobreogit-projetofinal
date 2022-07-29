import React, { useState, useEffect } from 'react';
import '../../pages/Questoes/questoes.css'

function Card (props) {
  const { question, anwser, adicionarAcerto } = props;
  const [userAwnser, setUserAwnser] = useState("");

  useEffect(() =>{
    if(userAwnser === anwser){
      adicionarAcerto();
    }
    
  }, [userAwnser])

return (
  <div className="card-botao">
    <h3><font color="red"> 	&lowast;</font>{question}</h3>
 
  <input className="input" type="radio" checked={userAwnser === true} disabled={userAwnser !== ""} onClick={() =>setUserAwnser(true)} Verdadeiro/>
  <label>Verdadeiro</label>
  <input className="input" type="radio"  checked={userAwnser === false} disabled={userAwnser !== ""} onClick={() => setUserAwnser(false)} Falso/>
  <label>Falso</label>

  { userAwnser !== "" && (anwser === userAwnser ? <p> Você Acertou! </p> : <p> Resposta Errada! </p>)
  
  }

  </div>

)
}

export default Card;