import { ProductoEnCarrito, NavBarHome } from '../../../components'
import { useProducto } from '../../../hooks/useProducto'
import style from './Carrito.module.css'
function Carrito() {
  const { carritoDeProductos, precioTotal, eliminarProducto } = useProducto()
  return (
    <div>
      <NavBarHome />
      <div className={style.contenedor}>
        <ProductoEnCarrito
          productosAgregados={carritoDeProductos}
          precioTotal={precioTotal}
          eliminarProducto={eliminarProducto}
        />
      </div>
    </div>
  )
}
export default Carrito
