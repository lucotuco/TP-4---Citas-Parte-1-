function NM() {
    return (
        <div class="container">
            
                
                    <h2>CREAR MI CITA</h2>
                    <label>Nombre Mascota</label>
                    <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" />
                    <label>Nombre Dueño</label>
                    <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" />
                    <label>Fecha</label>
                    <input type="date" name="fecha" class="u-full-width" />
                    <label>Hora</label>
                    <input type="time" name="hora" class="u-full-width" />
                    <label>Sintomas</label>
                    <textarea name="sintomas" class="u-full-width"></textarea>
                    <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
                </div>

    )
}

export default NM