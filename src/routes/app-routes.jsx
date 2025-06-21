import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import HomeInicio from '../pages/Login';
import Inicio from '../pages/inicio/Inicio';
import Perfil from '../pages/Perfil';
import Productos from '../pages/producto/Productos';
import Carrito from '../pages/Carrito';
import Reserva from '../pages/Reserva';
import Publicidad from '../pages/MenuInicial/PublicidadInicio';
import ProductosDeMuestra from '../pages/MenuInicial/ProductosDeMuestra';
import IniciarSesion from '../pages/MenuInicial/IniciarSesion';
import Registrarse from '../pages/MenuInicial/Registrarse';

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
      </Routes>
    </BrowserRouter>
  );
}
