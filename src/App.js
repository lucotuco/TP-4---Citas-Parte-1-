import './App.css';
import { useState } from 'react'
import Formulario from './LadoIzquierdo';
import Listado from './LadoDerecho';
function App()
const [citas, setCitas] = useState([]); {
  return (
    <div>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <Formulario setCitas={setCitas}></Formulario>
          </div>
          <div class="one-half column">
            <h2>Administra tus citas</h2>
            <Listado nombre="aaa" dueno="a" fecha="sadsaasd" hora="asd" sintomas="asdasd"/>
            <Listado nombre="aaa" dueno="a" fecha="sadsaasd" hora="asd" sintomas="asdasd"/>
            <Listado nombre="aaa" dueno="a" fecha="sadsaasd" hora="asd" sintomas="asdasd"/>
            </div>
            </div>
            </div>
    </div>
  );
}

export default App;
