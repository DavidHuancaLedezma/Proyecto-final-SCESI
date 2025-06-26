import { FaTrash } from 'react-icons/fa'
import style from './ProductoCardPequenio.module.css'
export const ProductoCardPequenio = ({
  nombre,
  cantidad,
  imagen,
  precio,
  idProducto,
  obtenerIdProducto,
}) => {
  const id = idProducto
  return (
    <section className={style.listaProductos}>
      <figure className={style.detalle}>
        <img
          className={style.comidasCarrito}
          src={imagen}
          alt="imagen del producto seleccionado"
        />
        <figcaption className={style.descripcionProducto}>
          <p>{nombre}</p>
          <p>Cantidad: {cantidad}</p>
          <p>Subtotal: {precio * cantidad} Bs.</p>
        </figcaption>
        <button
          className={style.eliminarProducto}
          onClick={() => obtenerIdProducto(id)}
        >
          <FaTrash />
        </button>
      </figure>
    </section>
  )
}
