import './App.css';
import { useState } from 'react'
import Formulario from './Formulario';
import Listado from './Listado';
function App() {
  const [citas, setCitas] = useState([]);
  const pushCitas = data => {
    let citaNueva = [...citas]
    citaNueva.push(data)
    citaNueva = citaNueva.reverse()
    setCitas(citaNueva)
  }

  return (
    <div>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <Formulario submit={pushCitas} />
          </div>
          <div class="one-half column">
          <h2>Administra tus citas</h2>
            {citas.length ? citas.map((e, key) => (<Listado key={key} mascota={e.mascota} dueno={e.dueno} fecha={e.fecha} hora={e.hora} sintomas={e.sintomas} />)) : <h1> </h1>}
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
