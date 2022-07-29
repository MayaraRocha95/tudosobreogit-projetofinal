import React, { useState, useEffect } from 'react';


function Card (props) {
  const { question, anwser, adicionarAcerto } = props;
  const [userAwnser, setUserAwnser] = useState("");

  useEffect(() =>{
    if(userAwnser === anwser){
      adicionarAcerto();
    }
    
  }, [userAwnser])

return (
  <div>
  <p>{question}</p>
  <button type="radio" disabled={userAwnser !== ""} onClick={() =>setUserAwnser(true)}> Verdadeiro</button>
  <button type="radio" disabled={userAwnser !== ""} onClick={() => setUserAwnser(false)}> Falso</button>

  { userAwnser !== "" && (anwser === userAwnser ? <p> Você Acertou! </p> : <p> Resposta Errada! </p>)
  
  }

  </div>

)
}

export default Card;