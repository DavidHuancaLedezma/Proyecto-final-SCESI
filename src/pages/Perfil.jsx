import { Usuario, NavBarHome } from '../components'
import { useHomeUsuario } from '../hooks/useHomeUsuario'
import { useProducto } from '../hooks/useProducto'

function Perfil() {
  const { usuario } = useHomeUsuario()
  const { carritoDeProductos, precioTotal, eliminarProducto } = useProducto()
  return (
    <>
      <NavBarHome
        productosAgregados={carritoDeProductos}
        eliminarProductoDelCarrito={eliminarProducto}
        precioTotal={precioTotal}
      />
      {usuario ? (
        <Usuario
          nombre={usuario.nombre}
          correoElectrico={usuario.email}
          fechaDeRegistro={usuario.fechaRegistro
            .toDate()
            .toLocaleString('es-BO')}
          rol={usuario.rol}
        />
      ) : (
        <Usuario
          nombre={'Cargando ...'}
          correoElectrico={'Cargando ...'}
          fechaDeRegistro={'Cargando ...'}
          rol={'Cargando ...'}
        />
      )}
    </>
  )
}
export default Perfil
