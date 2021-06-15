import React, { useState } from "react";

function useState() {

  const [ numero, setNumero ] = useState()
  const [ segundoNumero, setSegundoNumero ] = useState()
  const [ resultado, setResultado ] = useState();

  //const [state, setState] = useState({
  //  numero: 0,
  //  segundoNumero: 0,
  //  resultado: 0
  //})

  const somar = () => {
    const numeroInt = parseInt(numero)
    const segNumeroInt = parseInt(segundoNumero)

    setResultado(numeroInt + segNumeroInt)
  }

  return (
    <div className="App">
      Número 1:<br />
      <input type="text" value={numero} onChange={e => setNumero(e.target.value)} /><br />
      Número 2:<br />
      <input type="text" value={segundoNumero} onChange={e => setSegundoNumero(e.target.value)}/><br />
      
      <button onClick={somar}>Somar</button><br />
      
      Resultado:<br />
      
      <input type="text" value={resultado}/><br />
    </div>
  );
}

export default useState;
