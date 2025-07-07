import { NavBarAdministrador } from '../../../components/NavBar/NavBarAdministrador'
import { LogicaPanelProductos } from '../../../utils/LogicaPanelProductos'
import style from './PanelProductos.module.css'

function PanelProductos() {
  const {
    productos,
    estadosSeleccionados,
    estadoActual,
    guardarEdicion,
    eliminarProductoDelMenu,
  } = LogicaPanelProductos()

  return (
    <>
      <NavBarAdministrador />
      <div className={style.contenedor}>
        <div>
          <header className={style.titulo}>Panel de productos 🍽️</header>
          <main className={style.contenedorTabla}>
            <table className={style.tabla}>
              <thead>
                <tr>
                  <th>Categoria</th>
                  <th>nombre</th>
                  <th>Descripción</th>
                  <th>Origen</th>
                  <th>Precio</th>
                  <th>Estado Actual</th>
                  <th>Estado</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {productos.map(
                  ({
                    idProducto,
                    categoria,
                    descripcion,
                    disponible,
                    nombre,
                    origen,
                    precio,
                  }) => (
                    <tr key={idProducto}>
                      <td>{categoria}</td>
                      <td>{nombre}</td>
                      <td className={style.tamanioCeldas}>{descripcion}</td>
                      <td>{origen}</td>
                      <td>{precio} bs</td>
                      <td className={style.tamanioMinimoCeldas}>
                        {disponible ? 'Disponible ✅' : 'Agotado ❌'}
                      </td>
                      <td>
                        <select
                          className={style.estado}
                          value={estadosSeleccionados[idProducto]}
                          onChange={(e) => estadoActual(e, idProducto)}
                        >
                          <option value={true}>Disponible</option>
                          <option value={false}>Agotado</option>
                        </select>
                      </td>
                      <td className={style.tamanioMinimoCeldas}>
                        <button
                          className={style.btnGuardar}
                          onClick={() => guardarEdicion(idProducto)}
                        >
                          Guardar
                        </button>{' '}
                        <button
                          className={style.btnEliminar}
                          onClick={() => eliminarProductoDelMenu(idProducto)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </>
  )
}
export default PanelProductos
