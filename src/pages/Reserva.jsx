import { ReservaMesa, NavBarHome } from '../components/index'
import { useProducto } from '../hooks/useProducto'
import { useReserva } from '../hooks/useReserva'
function Reserva() {
  const { carritoDeProductos, precioTotal, eliminarProducto } = useProducto()

  const { mesas, datosReserva, setDatosReserva, envioFormularioDeReserva } =
    useReserva()

  return (
    <>
      <NavBarHome
        productosAgregados={carritoDeProductos}
        eliminarProductoDelCarrito={eliminarProducto}
        precioTotal={precioTotal}
        contadorProductos={localStorage.getItem('contadorProductos')}
      />
      <ReservaMesa
        mesasDisponibles={mesas}
        setDatosReserva={setDatosReserva}
        envioFormularioDeReserva={envioFormularioDeReserva}
        datosReserva={datosReserva}
      />
    </>
  )
}
export default Reserva
