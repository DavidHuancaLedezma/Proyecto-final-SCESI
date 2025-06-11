import "../../style/barraBusqueda.css"
import { FaSearch } from 'react-icons/fa';

function BarraBusqueda ({opciones}) {
    return(
        <main className="busqueda-contenedor">
            <section className="busqueda-categorias">
                <select className="busqueda-comboBox">
                    <option value="">Categorias</option>
                    {
                        opciones.map(({id, categoria}) => (
                            <option key={id} value={id}>{categoria}</option>
                        ))
                    }
                </select>
                <button className="busqueda-btn-limpiar">Limpiar</button>
            </section>
            <section className="busqueda-icono-contenedor">
                <FaSearch />
                <input className="busqueda-input" placeholder="Buscar producto" type="text" />
            </section>
        </main>
    )
}
export default BarraBusqueda