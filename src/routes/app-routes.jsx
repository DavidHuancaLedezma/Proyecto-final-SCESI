import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeInicio from '../pages/HomeInicio';
import Inicio from '../pages/Inicio';
import Perfil from '../pages/Perfil';
import Productos from '../pages/Productos';
import Carrito from '../pages/Carrito';
import Reserva from '../pages/Reserva';
import { Barra } from '../components';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Barra/>
      <Routes>
        <Route path="/" element={<HomeInicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/reserva" element={<Reserva/>} />
      </Routes>
    </BrowserRouter>
  );
}
