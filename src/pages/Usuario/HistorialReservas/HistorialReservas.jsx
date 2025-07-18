import { NavBarHome } from '../../../components'
import style from './HistorialReserva.module.css'
import imgCarrito from '../../../assets/img/carrito-de-historial.png'
import { useHistorialReserva } from '../../../hooks/useHistorialReserva'
import { useProducto } from '../../../hooks/useProducto'
function HistorialReserva() {
  const { datosReserva } = useHistorialReserva()
  const { carritoDeProductos, precioTotal, eliminarProducto } = useProducto()
  return (
    <>
      <NavBarHome
        productosAgregados={carritoDeProductos}
        eliminarProductoDelCarrito={eliminarProducto}
        precioTotal={precioTotal}
        contadorProductos={localStorage.getItem('contadorProductos')}
      />
      <div className={style.contenedor}>
        <section className={style.contenedorInformacion}>
          <header>
            <h1>Historial de reservas y compras</h1>
            <figure className={style.descripcion}>
              <img src={imgCarrito} alt="" />
              <figcaption>
                Tus reservas se encuentran en estado pendiente hasta ser
                confirmadas por nuestro equipo. Mientras tanto, puedes
                seleccionar los platillos que deseas incluir desde la sección
                del menú para personalizar tu experiencia gastronómica.
              </figcaption>
            </figure>
          </header>
          <main className={style.contenedorTabla}>
            <table>
              <thead>
                <tr>
                  <th>Nro de mesa</th>
                  <th>Fecha de reserva</th>
                  <th>Hora</th>
                  <th>Nro de personas</th>
                  <th>Estado</th>
                  <th>Orden</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody className={style.contenidoTabla}>
                {datosReserva.map(
                  ({
                    idReserva,
                    mesaSeleccionada,
                    fechaReserva,
                    horaReserva,
                    estado,
                    nroDePersonas,
                    listaProductos,
                    precioProductos,
                  }) => (
                    <tr key={idReserva}>
                      <td className={style.anchoMinimoMayor}>
                        {mesaSeleccionada}
                      </td>
                      <td>
                        {new Date(fechaReserva).toLocaleDateString('es-BO')}
                      </td>
                      <td>{horaReserva}</td>
                      <td>{nroDePersonas}</td>
                      <td className={style.anchoMinimoMayor}>
                        {estado ? 'Aceptado ✅' : 'Pendiente ⏳'}
                      </td>
                      <td>{listaProductos ? listaProductos : 'Sin orden'}</td>
                      <td className={style.anchoMinimo}>
                        {precioProductos} Bs.
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </main>
        </section>
      </div>
    </>
  )
}

export default HistorialReserva
