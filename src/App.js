import './App.css';
import React from 'react';
import NM from './LadoIzquierdo';
import MN from './LadoDerecho';
function App() {
  return (
    <div>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <NM /> 
          </div>
          <div class="one-half column">
            <h2>Administra tus citas</h2>
            <MN nombre="aaa" dueno="a" fecha="sadsaasd" hora="asd" sintomas="asdasd"/>
            <MN nombre="aaa" dueno="a" fecha="sadsaasd" hora="asd" sintomas="asdasd"/>
            <MN nombre="aaa" dueno="a" fecha="sadsaasd" hora="asd" sintomas="asdasd"/>
            </div>
            </div>
            </div>
    </div>
  );
}

export default App;
