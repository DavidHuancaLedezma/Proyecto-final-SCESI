import { NavBarLogin, PublicidadRestaurante } from '../../../components'
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
