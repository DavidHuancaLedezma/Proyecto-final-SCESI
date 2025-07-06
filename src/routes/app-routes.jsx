import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from '../pages/Usuario/Inicio/Inicio'
import Perfil from '../pages/Usuario/Perfil/Perfil'
import Productos from '../pages/Usuario/Producto/Productos'
import Carrito from '../pages/Usuario/Carrito/Carrito'
import Reserva from '../pages/Usuario/Reserva/Reserva'
import HistorialReserva from '../pages/Usuario/HistorialReservas/HistorialReservas'
import Publicidad from '../pages/MenuInicial/PublicidadInicio/PublicidadInicio'
import ProductosDeMuestra from '../pages/MenuInicial/ProductosDeMuestra/ProductosDeMuestra'
import IniciarSesion from '../pages/MenuInicial/IniciarSesion/IniciarSesion'
import Registrarse from '../pages/MenuInicial/Registrarse/Registrarse'
import PerfilAdministrador from '../pages/Administrador/Perfil/PerfilAdministrador'
import RegistroProductos from '../pages/Administrador/RegistroProductos/RegistroProductos'
import PanelReservas from '../pages/Administrador/PanelReservas/PanelReservas'
import PanelProductos from '../pages/Administrador/PanelProductos/PanelProductos'
import PanelUsuarios from '../pages/Administrador/PanelUsuarios/PanelUsuarios'
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
        <Route path="/PanelProductos" element={<PanelProductos />} />
        <Route path="/PanelUsuarios" element={<PanelUsuarios />} />
      </Routes>
    </BrowserRouter>
  )
}
