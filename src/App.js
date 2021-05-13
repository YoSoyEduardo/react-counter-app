import './App.css';
import { useState } from 'react';

function Contador() {

  //HOOK: FUNCION QUE ME PERMITE HACER ALGO
  const [numero, setNumero ] = useState(0)

  function incrementar () {
    setNumero(numero + 1)
  }
  function disminuir () {
    setNumero(numero - 1)
  }
  function resetear () {
    setNumero(0)
  }

  // let numero = 0
  return (
    <>
      <div style={ {height:'100vh', width:'100vw', display:'flex', flexDirection:'column' , justifyContent:'center', alignItems:'center', backgroundColor:'#282c34'} }>
        <h1 style={{color:'white'}}>Counter App</h1>
        <p style={{color:'white'}}>Counter: {numero} </p>
        <div>
          <button onClick={disminuir} >-1</button>
          <button onClick={resetear} >reset</button>
          <button onClick={incrementar} >+1</button>
        </div>
      </div>
    </>
  );
}

export default Contador


