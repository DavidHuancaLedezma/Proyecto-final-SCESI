import style from './reservaMesa.module.css'

export const ReservaMesa = ({
  mesasDisponibles,
  setDatosReserva,
  envioFormularioDeReserva,
  datosReserva,
}) => {
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
              className={style.busquedaComboBox}
              required
              value={datosReserva.mesaSeleccionada}
              onChange={(e) => {
                setDatosReserva((prev) => ({
                  ...prev,
                  mesaSeleccionada: e.target.value,
                }))
              }}
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
              type="date"
              required
              value={datosReserva.fechaReserva}
              onChange={(e) => {
                setDatosReserva((prev) => ({
                  ...prev,
                  fechaReserva: e.target.value,
                }))
              }}
            />
          </section>
          <section className={style.inputDatos}>
            <label>Hora de reserva</label>
            <input
              type="time"
              required
              value={datosReserva.horaReserva}
              onChange={(e) => {
                setDatosReserva((prev) => ({
                  ...prev,
                  horaReserva: e.target.value,
                }))
              }}
            />
          </section>
          <section className={style.inputDatos}>
            <label>Nro de personas</label>
            <input
              type="number"
              placeholder="0"
              required
              value={datosReserva.nroDePersonas}
              onChange={(e) => {
                setDatosReserva((prev) => ({
                  ...prev,
                  nroDePersonas: e.target.value,
                }))
              }}
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
