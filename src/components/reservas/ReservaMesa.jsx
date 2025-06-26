import style from './reservaMesa.module.css'

export const ReservaMesa = ({ mesasDisponibles }) => {
  return (
    <main className={style.formularioContenedor}>
      <form className={style.formularioReservas}>
        <header className={style.titulo}>Realizar Reserva</header>
        <main className={style.datos}>
          <section className={style.inputDatos}>
            <label>Nro de mesa</label>
            <select className={style.busquedaComboBox}>
              <option value="">Seleccionar mesa</option>
              {mesasDisponibles.map(({ idMesa, numero_mesa, ubicacion }) => (
                <option key={idMesa} value={idMesa}>
                  Mesa {numero_mesa} - {ubicacion} del restaurante
                </option>
              ))}
            </select>
          </section>
          <section className={style.inputDatos}>
            <label>Fecha de reserva</label>
            <input type="date" placeholder="Minutos" />
          </section>
          <section className={style.inputDatos}>
            <label>Hora de reserva</label>
            <input type="time" placeholder="Minutos" />
          </section>
          <section className={style.inputDatos}>
            <label>Nro de personas</label>
            <input type="number" placeholder="0" />
          </section>
        </main>
        <footer className={style.seccionDeEnvio}>
          <button className={style.btnEnviar}>Reservar</button>
        </footer>
      </form>
    </main>
  )
}
