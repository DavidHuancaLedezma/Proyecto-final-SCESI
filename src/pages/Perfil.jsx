import { Usuario, NavBarHome } from '../components'
import { useUsuario } from '../hooks/useUsuario'
import { useProducto } from '../hooks/useProducto'

function Perfil() {
  const { datosUsuarioActivo } = useUsuario()
  const { carritoDeProductos, precioTotal, eliminarProducto } = useProducto()
  localStorage.setItem('nombreUsuario', datosUsuarioActivo.nombre)
  localStorage.setItem('rol', datosUsuarioActivo.rol)
  return (
    <>
      <NavBarHome
        productosAgregados={carritoDeProductos}
        eliminarProductoDelCarrito={eliminarProducto}
        precioTotal={precioTotal}
      />
      {datosUsuarioActivo ? (
        <Usuario
          nombre={datosUsuarioActivo.nombre}
          correoElectrico={datosUsuarioActivo.email}
          fechaDeRegistro={datosUsuarioActivo.fechaRegistro
            .toDate()
            .toLocaleString('es-BO')}
          rol={datosUsuarioActivo.rol}
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
