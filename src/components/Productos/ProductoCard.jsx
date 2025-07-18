import { FaShoppingCart, FaBan } from 'react-icons/fa'
import style from './ProductoCard.module.css'

export const ProductoCard = ({
  idProducto,
  nombre,
  descripcion,
  precio,
  imagen,
  origen,
  categoria,
  disponible,
  agregarProductoAlCarrito,
  muestra,
}) => {
  const stock = disponible
    ? style.stockProducto
    : `${style.stockProducto} ${style.agotado}`

  const producto = {
    idProducto: idProducto,
    nombre: nombre,
    precio: precio,
    imagen: imagen,
    cantidad: 1,
  }

  return (
    <article className={style.productoContenedor}>
      <img
        className={style.productoFoto}
        src={imagen}
        alt="imagen del producto ofertado"
      />

      <section className={style.productoDetalles}>
        <header>
          <h2 className={style.productoNombre}>{nombre}</h2>
        </header>
        <p className={style.productoDescripcion}>{descripcion}</p>

        <footer className={style.productoComprar}>
          <section className={style.productoInformacion}>
            <span className={style.productoInformacionItem}>
              Origen:{origen}
            </span>
            <span className={style.productoInformacionItem}>
              Categoria:{categoria}
            </span>
          </section>

          <span className={style.productoPrecio}>{precio} Bs.</span>
          {muestra && (
            <section className={stock}>
              <button
                className={style.productoDisponible}
                onClick={() => agregarProductoAlCarrito(producto)}
              >
                Agregar al carrito <FaShoppingCart className={style.icono} />
              </button>
              <button className={style.productoAgotado}>
                Producto agotado <FaBan className={style.icono} />
              </button>
            </section>
          )}
        </footer>
      </section>
    </article>
  )
}
