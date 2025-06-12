import Barra from '../components/home/Barra';
import style from './layout.module.css';
function LayoutBarra({ children }) {
  return (
    <>
      <Barra />
      <main className={style.barraSuperior}>{children}</main>
    </>
  );
}

export default LayoutBarra;
