import style from './reservaMesa.module.css'
export const ReservaMesa = ({
  mesasDisponibles,
  setDatosReserva,
  envioFormularioDeReserva,
  datosReserva,
}) => {
  const manejarCambio = (e) => {
    const { name, value } = e.target
    setDatosReserva((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <main className={style.formularioContenedor}>
      <form
        className={style.formularioReservas}
        onSubmit={envioFormularioDeReserva}
      >
        <header className={style.titulo}>Realizar Reserva</header>
        <main className={style.datos}>
          <section className={style.inputDatos}>
            <label>Nro de mesa</label>
            <select
              name="mesaSeleccionada"
              className={style.busquedaComboBox}
              required
              value={datosReserva.mesaSeleccionada}
              onChange={manejarCambio}
            >
              <option value="">Seleccionar mesa</option>
              {mesasDisponibles.map(({ idMesa, numero_mesa, ubicacion }) => (
                <option key={idMesa} value={numero_mesa}>
                  Mesa {numero_mesa} - {ubicacion} del restaurante
                </option>
              ))}
            </select>
          </section>
          <section className={style.inputDatos}>
            <label>Fecha de reserva</label>
            <input
              name="fechaReserva"
              type="date"
              required
              value={datosReserva.fechaReserva}
              onChange={manejarCambio}
            />
          </section>
          <section className={style.inputDatos}>
            <label>Hora de reserva</label>
            <input
              name="horaReserva"
              type="time"
              required
              value={datosReserva.horaReserva}
              onChange={manejarCambio}
            />
          </section>
          <section className={style.inputDatos}>
            <label>Nro de personas</label>
            <input
              name="nroDePersonas"
              type="number"
              placeholder="0"
              required
              value={datosReserva.nroDePersonas}
              onChange={manejarCambio}
            />
          </section>
        </main>
        <footer className={style.seccionDeEnvio}>
          <button className={style.btnEnviar} type="submit">
            Reservar
          </button>
        </footer>
      </form>
    </main>
  )
}
