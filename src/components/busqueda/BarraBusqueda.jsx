import { FaSearch } from 'react-icons/fa';
import '../../normalize.css';
import style from './barraBusqueda.module.css';

export const BarraBusqueda = ({ opciones }) => {
  return (
    <main className={style.busquedaContenedor}>
        <section className={style.busquedaCategorias}>
            <select className={style.busquedaComboBox}>
                <option value="">Categorias</option>
                    {opciones.map(({ id_categoria, nombre }) => (
                        <option key={id_categoria} value={id_categoria}>
                            {nombre}
                        </option>))
                    }
            </select>
            <button className={style.busquedaBtnLimpiar}>Limpiar</button>
        </section>
        <section className={style.busquedaIconoContenedor}>
            <FaSearch />
            <input className={style.busquedaInput} placeholder="Buscar producto" type="text" />
        </section>
    </main>
  );
}

