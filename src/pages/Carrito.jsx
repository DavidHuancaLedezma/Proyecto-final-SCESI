import { ProductoEnCarrito, NavBarHome } from '../components'
import { useProducto } from '../hooks/useProducto'
function Carrito() {
  //Esto es del celular
  const { carritoDeProductos, precioTotal, eliminarProducto } = useProducto()
  return (
    <>
      <NavBarHome />
      <ProductoEnCarrito
        productosAgregados={carritoDeProductos}
        precioTotal={precioTotal}
        eliminarProducto={eliminarProducto}
      />
    </>
  )
}
export default Carrito
