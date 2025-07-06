import { useCategoria } from '../../hooks/useCategoria'
import { FaSearch } from 'react-icons/fa'
import style from './BarraBusqueda.module.css'

export const BarraBusqueda = ({
  cambiosEnTexto,
  cambioDeCategoria,
  textoActual,
  categoriaActual,
  limpiar,
}) => {
  const { categorias } = useCategoria()

  return (
    <main className={style.busquedaContenedor}>
      <section className={style.busquedaCategorias}>
        <select
          className={style.busquedaComboBox}
          onChange={cambioDeCategoria}
          value={categoriaActual}
        >
          <option value="">Categorias</option>
          {categorias.map(({ idCategoria, nombre_categoria }) => (
            <option key={idCategoria} value={nombre_categoria}>
              {nombre_categoria}
            </option>
          ))}
        </select>
        <button className={style.busquedaBtnLimpiar} onClick={limpiar}>
          Limpiar filtros
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
