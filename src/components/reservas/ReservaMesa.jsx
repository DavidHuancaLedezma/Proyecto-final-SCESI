import style from './reservaMesa.module.css';
function ReservaMesa ({mesasDisponibles}) {

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("Formulario enviado");
    };
    return(
        <main className={style.formularioContenedor}>
            <form className={style.formularioReservas} onSubmit={handleSubmit}>
                <header className={style.titulo}>Realizar Reserva</header>
                <main className={style.datos}>
                    <section className={style.inputDatos}>
                        <label>Tiempo de llegada</label>
                        <input type="text" placeholder="Minutos" />
                    </section>
                    <section className={style.inputDatos}>
                        <label>Tiempo de estadia</label>
                        <input type="text" placeholder="Minutos" />
                    </section>
                    <section className={style.inputDatos}>
                        <label>Nro de personas</label>
                        <input type="text" placeholder="" />
                    </section>
                    <section className={style.inputDatos}>
                        <label>Mesas disponibles</label>
                        <select className={style.busquedaComboBox}>
                            <option value="">Seleccionar Mesa</option> // revisar este error necesita por parametro los horarios
                                {mesasDisponibles.map(({ id, numeroMesa }) => (
                                    <option key={id} value={id}>Mesa {numeroMesa}</option>))
                                }
                            
                        </select>
                    </section>
                </main>
                <footer className={style.seccionDeEnvio}>
                    <button className={style.btnEnviar}>Reservar</button>
                </footer>
                
            </form>

        </main>
    );
}
export default ReservaMesa;