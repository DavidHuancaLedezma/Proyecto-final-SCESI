import { FaSearch } from 'react-icons/fa'
import '../../normalize.css'
import style from './barraBusqueda.module.css'

export const BarraBusqueda = ({
  opciones,
  cambiosEnTexto,
  cambioDeCategoria,
  textoActual,
  categoriaActual,
  limpiar,
}) => {
  const opcioness = [
    { id_categoria: 1, nombre: 'carnes' },
    { id_categoria: 2, nombre: 'refrecos' },
  ]

  return (
    <main className={style.busquedaContenedor}>
      <section className={style.busquedaCategorias}>
        <select
          className={style.busquedaComboBox}
          onChange={cambioDeCategoria}
          value={categoriaActual}
        >
          <option value="">Categorias</option>
          {opcioness.map(({ id_categoria, nombre }) => (
            <option key={id_categoria} value={id_categoria}>
              {nombre}
            </option>
          ))}
        </select>
        <button className={style.busquedaBtnLimpiar} onClick={limpiar}>
          Limpiar
        </button>
      </section>
      <section className={style.busquedaIconoContenedor}>
        <FaSearch />
        <input
          className={style.busquedaInput}
          placeholder="Buscar producto"
          type="text"
          onChange={cambiosEnTexto}
          value={textoActual}
        />
      </section>
    </main>
  )
}
