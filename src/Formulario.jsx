import { useState } from "react"
import React from "react"
const Formulario=({submit})=> 
{
    const [data, setData] = useState({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: "",
    })
    return (    
        <form onSubmit={() => console.log("c mando ")}>
                <div class="container">
                    <h2>CREAR MI CITA</h2>
                    <label>Nombre Mascota</label>
                    <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" onChange={(e) => setData({...data, [e.target.name]: e.target.value})}/>
                    <label>Nombre Dueño</label>
                    <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" onChange={(e) => setData({...data, [e.target.name]: e.target.value})}/>
                    <label>Fecha</label>
                    <input type="date" name="fecha" class="u-full-width" onChange={(e) => setData({...data, [e.target.name]: e.target.value})}/>
                    <label>Hora</label>
                    <input type="time" name="hora" class="u-full-width" onChange={(e) => setData({...data, [e.target.name]: e.target.value})}/>
                    <label>Sintomas</label>
                    <textarea name="sintomas" class="u-full-width" onChange={(e) => setData({...data, [e.target.name]: e.target.value})}></textarea>
                    <button  type="button" class="u-full-width button-primary"  onClick={() => submit(data)}> Agregar Cita</button>
                </div>
        </form>
    )
}

export default Formulario