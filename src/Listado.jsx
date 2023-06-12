import { useState } from "react"

function Listado({mascota,dueño,fecha,hora,sintomas}){
  const[eliminado,setEliminado]=useState(false)
  const handleClick =e =>setEliminado(!eliminado)
    return !eliminado &&
        <div class="cita">
        <p>Mascota: <span>{mascota}</span></p>
        <p>Dueño: <span>{dueño}</span></p>
        <p>Fecha: <span>{fecha}</span></p>
        <p>Hora: <span>{hora}</span></p>
        <p>Sintomas: <span>{sintomas}</span></p>  
        <button onClick={handleClick}>Eliminar</button>
      </div>
    
}
export default Listado