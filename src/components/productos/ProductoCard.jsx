import { FaShoppingCart, FaBan } from 'react-icons/fa';
import '../../normalize.css';
import style from './productoCard.module.css';

export const ComponenteProducto = ({
  nombre,
  descripcion,
  precio,
  imagen,
  origen,
  categoria,
  disponible,
}) => {
  const stock = disponible
    ? style.stockProducto
    : `${style.stockProducto} ${style.agotado}`;

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

          <section className={stock}>
            <button className={style.productoDisponible}>
              Agregar al carrito <FaShoppingCart />
            </button>
            <button className={style.productoAgotado}>
              Producto agotado <FaBan />
            </button>
          </section>
        </footer>
      </section>
    </article>
  );
};
