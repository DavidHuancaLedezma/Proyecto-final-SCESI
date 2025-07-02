import { NavBarAdministrador, Usuario } from '../../../components'
import { useUsuario } from '../../../hooks/useUsuario'
function PerfilAdministrador() {
  const { datosUsuarioActivo } = useUsuario()
  localStorage.setItem('rol', datosUsuarioActivo.rol)
  return (
    <>
      <NavBarAdministrador />
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

export default PerfilAdministrador
