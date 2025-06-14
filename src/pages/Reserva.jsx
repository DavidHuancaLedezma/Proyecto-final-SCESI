//import LayoutBarra from '../layout/LayoutBarra';
//import ReservaMesa from '../components/reservas/ReservaMesa';
import { LayoutBarra, ReservaMesa } from '../components/index';
function Reserva() {
  
  const mesas = [{
    id:1,
    numeroMesa: 10,
    disponible: true
  },{
    id:2,
    numeroMesa: 20,
    disponible: true
  },{
    id:3,
    numeroMesa: 30,
    disponible: true
  },{
    id:4,
    numeroMesa: 40,
    disponible: true
  }]

  return (
    <LayoutBarra>
      <ReservaMesa mesasDisponibles={mesas}/>
    </LayoutBarra>
  );
}
export default Reserva;
