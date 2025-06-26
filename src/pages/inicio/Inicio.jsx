import { NavBarHome, PublicidadRestaurante } from '../../components'
import { useProducto } from '../../hooks/useProducto'

function Inicio() {
  const { carritoDeProductos, precioTotal, eliminarProducto } = useProducto()
  return (
    <>
      <NavBarHome
        productosAgregados={carritoDeProductos}
        eliminarProductoDelCarrito={eliminarProducto}
        precioTotal={precioTotal}
      />
      <PublicidadRestaurante />
    </>
  )
}
export default Inicio
