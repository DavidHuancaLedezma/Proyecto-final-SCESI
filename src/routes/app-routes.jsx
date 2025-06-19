import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeInicio from '../pages/Login';
import Inicio from '../pages/Inicio';
import Perfil from '../pages/Perfil';
import Productos from '../pages/producto/Productos';
import Carrito from '../pages/Carrito';
import Reserva from '../pages/Reserva';
import Login from '../pages/Login';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/reserva" element={<Reserva />} />
      </Routes>
    </BrowserRouter>
  );
}
