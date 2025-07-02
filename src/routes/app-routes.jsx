import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from '../pages/inicio/Inicio'
import Perfil from '../pages/Perfil'
import Productos from '../pages/producto/Productos'
import Carrito from '../pages/Carrito'
import Reserva from '../pages/Reserva'
import Publicidad from '../pages/MenuInicial/PublicidadInicio'
import ProductosDeMuestra from '../pages/MenuInicial/ProductosDeMuestra'
import IniciarSesion from '../pages/MenuInicial/IniciarSesion'
import Registrarse from '../pages/MenuInicial/Registrarse'
import HistorialReserva from '../pages/HistorialReservas/HistorialReservas'
import PerfilAdministrador from '../pages/Administrador/Perfil/PerfilAdministrador'
import RegistroProductos from '../pages/Administrador/RegistroProductos/RegistroProductos'
import PanelReservas from '../pages/Administrador/PanelReservas/PanelReservas'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Publicidad />} />
        <Route path="/productos-de-muestra" element={<ProductosDeMuestra />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/Registrarse" element={<Registrarse />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/reserva" element={<Reserva />} />
        <Route path="/historial-reserva" element={<HistorialReserva />} />
        <Route path="/PerfilAdministrador" element={<PerfilAdministrador />} />
        <Route path="/RegistroProductos" element={<RegistroProductos />} />
        <Route path="/PanelReservas" element={<PanelReservas />} />
      </Routes>
    </BrowserRouter>
  )
}
