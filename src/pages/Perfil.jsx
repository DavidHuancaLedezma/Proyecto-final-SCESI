import { Usuario, NavBarHome } from '../components';
import { useHomeUsuario } from '../hooks/useHomeUsuario';

function Perfil() {

  const { usuario } = useHomeUsuario()

  return (
    <>
      <NavBarHome />
      {usuario ? (
        <Usuario
          nombre={usuario.nombre}
          correoElectrico={usuario.email}
          fechaDeRegistro={usuario.fechaRegistro.toDate().toLocaleString("es-BO")}
          rol={usuario.rol}
        />
      ) : (
        <Usuario 
          nombre={"Cargando ..."}
          correoElectrico={"Cargando ..."}
          fechaDeRegistro={"Cargando ..."}
          rol={"Cargando ..."}
        />
      )

      }
    </>
  );
}
export default Perfil;
