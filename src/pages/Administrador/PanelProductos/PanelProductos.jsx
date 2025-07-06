import { useEffect, useState } from 'react'
import { NavBarAdministrador } from '../../../components/NavBar/NavBarAdministrador'
import { useProducto } from '../../../hooks/useProducto'
import { editarProducto, eliminarProducto } from '../../../services/consultas'
import style from './PanelProductos.module.css'

function PanelProductos() {
  const { productos, getDatos } = useProducto()

  const [estadosSeleccionados, setEstadosSeleccionados] = useState({})

  useEffect(() => {
    const estadosIniciales = {}
    productos.forEach((producto) => {
      estadosIniciales[producto.idProducto] = producto.disponible
    })
    setEstadosSeleccionados(estadosIniciales)
  }, [productos])

  const estadoActual = (e, idReserva) => {
    let valor = e.target.value === 'true'
    setEstadosSeleccionados((prev) => ({
      ...prev,
      [idReserva]: valor,
    }))
  }

  const guardarEdicion = async (idProducto) => {
    const estadoSeleccionado = estadosSeleccionados[idProducto]
    editarProducto(idProducto, estadoSeleccionado)
    await getDatos()
  }
  const eliminarProductoDelMenu = async (idReserva) => {
    await eliminarProducto(idReserva)
    await getDatos()
  }

  return (
    <>
      <NavBarAdministrador />
      <div className={style.contenedor}>
        <div>
          <header className={style.titulo}>Panel de productos</header>
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
                      <td className={style.tamanioCeldas}>{nombre}</td>
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
