import { Usuario } from '../components';
function Perfil() {

  const datos = [{nombre:"Juan Jose", correoElectronico: "juan@gmail.com", fechaDeRegistro: "24 de junio de 2025, 11:12AM", rol: "Usuario"}];

  return (

      <Usuario
        nombre={datos[0].nombre}
        correoElectrico={datos[0].correoElectronico}
        fechaDeRegistro={datos[0].fechaDeRegistro}
        rol={datos[0].rol}
      />
  );
}
export default Perfil;
