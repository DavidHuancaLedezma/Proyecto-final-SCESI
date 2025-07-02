import { NavBarAdministrador } from '../../../components'
import { useCategoria } from '../../../hooks/useCategoria'
import { useRegistroProducto } from '../../../hooks/useRegistroProducto'
import style from './RegistroProductos.module.css'
function RegistroProducto() {
  const { datosProducto, setDatosProducto, registrarProducto } =
    useRegistroProducto()
  const { categorias } = useCategoria()
  return (
    <>
      <NavBarAdministrador />
      <div className={style.contenedor}>
        <form className={style.formulario} onSubmit={registrarProducto}>
          <h1 className={style.titulo}>Añadir nuevo producto 🍽️🥤</h1>
          <section className={style.datosDeEntrada}>
            <label>Nombre</label>
            <input
              type="text"
              required
              value={datosProducto.nombre}
              onChange={(e) => {
                setDatosProducto((prev) => ({
                  ...prev,
                  nombre: e.target.value,
                }))
              }}
            />
          </section>
          <section className={style.datosDeEntrada}>
            <label>Descripción</label>
            <textarea
              name=""
              id=""
              required
              value={datosProducto.descripcion}
              onChange={(e) => {
                setDatosProducto((prev) => ({
                  ...prev,
                  descripcion: e.target.value,
                }))
              }}
            />
          </section>
          <section className={style.alineacion}>
            <div className={style.datosDeEntrada}>
              <label>País</label>
              <input
                type="text"
                required
                value={datosProducto.origen}
                onChange={(e) => {
                  setDatosProducto((prev) => ({
                    ...prev,
                    origen: e.target.value,
                  }))
                }}
              />
            </div>
            <div className={style.datosDeEntrada}>
              <label>Precio</label>
              <input
                type="number"
                required
                value={datosProducto.precio}
                onChange={(e) => {
                  setDatosProducto((prev) => ({
                    ...prev,
                    precio: e.target.value,
                  }))
                }}
              />
            </div>
          </section>
          <section className={style.alineacion}>
            <div className={style.datosDeEntrada}>
              <label>Imagen</label>
              <input
                type="text"
                required
                value={datosProducto.imagen}
                onChange={(e) => {
                  setDatosProducto((prev) => ({
                    ...prev,
                    imagen: e.target.value,
                  }))
                }}
              />
            </div>
            <div className={style.datosDeEntrada}>
              <label>Categoría</label>
              <select
                required
                value={datosProducto.categoria}
                onChange={(e) => {
                  setDatosProducto((prev) => ({
                    ...prev,
                    categoria: e.target.value,
                  }))
                }}
              >
                <option value="">Seleccionar categoría</option>
                {categorias.map(({ idCategoria, nombre_categoria }) => (
                  <option key={idCategoria} value={nombre_categoria}>
                    {nombre_categoria}
                  </option>
                ))}
              </select>
            </div>
          </section>
          <footer className={style.seccionDeEnvio}>
            <button type="submit" className={style.btnEnviar}>
              Registrar
            </button>
          </footer>
        </form>
      </div>
    </>
  )
}
export default RegistroProducto
