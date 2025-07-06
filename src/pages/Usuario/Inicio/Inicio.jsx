import { NavBarHome, PublicidadRestaurante } from '../../../components'
import { useProducto } from '../../../hooks/useProducto'

function Inicio() {
  const { carritoDeProductos, precioTotal, eliminarProducto } = useProducto()
  return (
    <>
      <NavBarHome
        productosAgregados={carritoDeProductos}
        eliminarProductoDelCarrito={eliminarProducto}
        precioTotal={precioTotal}
        contadorProductos={localStorage.getItem('contadorProductos')}
      />
      <PublicidadRestaurante />
    </>
  )
}
export default Inicio
