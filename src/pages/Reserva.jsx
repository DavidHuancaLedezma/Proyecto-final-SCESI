import { ReservaMesa, NavBarHome } from '../components/index'
import { useProducto } from '../hooks/useProducto'
import { useReserva } from '../hooks/useReserva'
function Reserva() {
  const { carritoDeProductos, precioTotal, eliminarProducto } = useProducto()

  const { mesas } = useReserva()

  return (
    <>
      <NavBarHome
        productosAgregados={carritoDeProductos}
        eliminarProductoDelCarrito={eliminarProducto}
        precioTotal={precioTotal}
      />
      <ReservaMesa mesasDisponibles={mesas} />
    </>
  )
}
export default Reserva
