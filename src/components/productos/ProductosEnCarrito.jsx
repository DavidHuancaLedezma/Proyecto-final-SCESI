import { FaShoppingCart } from 'react-icons/fa'
import { ProductoCardPequenio } from './ProductoCardPequenio'
import { useReserva } from '../../hooks/useReserva'
import style from './productoEnCarrito.module.css'
export const ProductoEnCarrito = ({
  productosAgregados,
  precioTotal,
  eliminarProducto,
}) => {
  const { agregarOrdenEnReserva } = useReserva()

  const obtenerIdProducto = (id) => {
    eliminarProducto(id)
  }
  return (
    <section className={style.contenedorProductos}>
      <header className={style.titulo}>
        <h1>
          <FaShoppingCart /> Tu carrito
        </h1>
      </header>
      <main className={style.listaProductos}>
        {productosAgregados ? (
          productosAgregados.map(
            ({ idProducto, nombre, cantidad, imagen, precio }) => (
              <ProductoCardPequenio
                key={idProducto}
                nombre={nombre}
                cantidad={cantidad}
                imagen={imagen}
                precio={precio}
                idProducto={idProducto}
                obtenerIdProducto={obtenerIdProducto}
              />
            )
          )
        ) : (
          <p className={style.vacio}>Carrito sin productos</p>
        )}
      </main>
      <footer className={style.detallePrecio}>
        <section className={style.precio}>
          <span>Pago total:</span>
          {precioTotal ? <span>{precioTotal} Bs.</span> : <span>0 Bs.</span>}
        </section>
        <button
          className={style.comprarProductosCarrito}
          onClick={() => {
            agregarOrdenEnReserva(productosAgregados)
          }}
        >
          comprar
        </button>
      </footer>
    </section>
  )
}
