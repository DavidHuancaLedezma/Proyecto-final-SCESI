import { NavBarHome } from '../../components'
import style from './HistorialReserva.module.css'
import imgCarrito from '../../assets/img/carrito-de-historial.png'
function HistorialReserva() {
  return (
    <div className={style.contenedor}>
      <NavBarHome />
      <section className={style.contenedorInformacion}>
        <header>
          <h1>Historial de compras</h1>
          <figure className={style.descripcion}>
            <img src={imgCarrito} alt="" />
            <figcaption>
              Tus reservas se encuentran en estado pendiente hasta ser
              confirmadas por nuestro equipo. Mientras tanto, puedes seleccionar
              los platillos que deseas incluir desde la sección del menú para
              personalizar tu experiencia gastronómica.
            </figcaption>
          </figure>
        </header>
        <main className={style.contenedorTabla}>
          <table>
            <thead className={style.titulosTabla}>
              <tr>
                <th>Nro de mesa</th>
                <th>Fecha de reserva</th>
                <th>Hora</th>
                <th>Estado</th>
                <th>Orden</th>
              </tr>
            </thead>
            <tbody className={style.contenidoTabla}>
              <tr>
                <td>10</td>
                <td>10/11/2025</td>
                <td>13:15</td>
                <td>Pendiente</td>
                <td>Ninguno</td>
              </tr>
              <tr>
                <td>10</td>
                <td>10/11/2025</td>
                <td>13:15</td>
                <td>Pendiente</td>
                <td>Ninguno</td>
              </tr>
              <tr>
                <td>10</td>
                <td>10/11/2025</td>
                <td>13:15</td>
                <td>Pendiente</td>
                <td>Ninguno</td>
              </tr>
              <tr>
                <td>10</td>
                <td>10/11/2025</td>
                <td>13:15</td>
                <td>Pendiente</td>
                <td>Ninguno</td>
              </tr>
              <tr>
                <td>10</td>
                <td>10/11/2025</td>
                <td>13:15</td>
                <td>Pendiente</td>
                <td>Ninguno</td>
              </tr>
              <tr>
                <td>10</td>
                <td>10/11/2025</td>
                <td>13:15</td>
                <td>Pendiente</td>
                <td>Ninguno</td>
              </tr>
              <tr>
                <td>10</td>
                <td>10/11/2025</td>
                <td>13:15</td>
                <td>Pendiente</td>
                <td>Ninguno</td>
              </tr>
            </tbody>
          </table>
        </main>
      </section>
    </div>
  )
}

export default HistorialReserva
