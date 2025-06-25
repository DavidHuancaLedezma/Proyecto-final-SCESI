import { NavBarLogin, PublicidadRestaurante } from '../../components'
// <PublicidadRestaurante />
function PublicidadInicio() {
  localStorage.clear()

  return (
    <>
      <NavBarLogin />;
      <PublicidadRestaurante />
    </>
  )
}

export default PublicidadInicio
