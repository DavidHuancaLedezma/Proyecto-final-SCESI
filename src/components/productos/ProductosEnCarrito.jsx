import { FaShoppingCart, FaTrash } from 'react-icons/fa'
import style from './productoEnCarrito.module.css'
export const ProductoEnCarrito = () => {
  return (
    <section className={style.contenedorProductos}>
      <header className={style.titulo}>
        <h1>
          <FaShoppingCart /> Tu carrito
        </h1>
      </header>
      <main className={style.listaProductos}>
        <figure className={style.detalle}>
          <img
            className={style.comidasCarrito}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewdvz0HQg1CNrO1U2TTbBfyzw5d9CIINWpw&s"
            alt=""
          />
          <figcaption className={style.descripcionProducto}>
            <p>Una amburguesa</p>
            <p>Cantidad: 1</p>
            <p>Subtotal: 20 Bs.</p>
          </figcaption>
          <button className={style.eliminarProducto}>
            <FaTrash />
          </button>
        </figure>
      </main>
      <footer className={style.detallePrecio}>
        <section className={style.precio}>
          <span>Pago total:</span>
          <span>100Bs.</span>
        </section>
        <button className={style.comprarProductosCarrito}>comprar</button>
      </footer>
    </section>
  )
}
