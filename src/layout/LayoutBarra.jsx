import { Barra } from '../components/home/barra';
import style from './layout.module.css';
export const LayoutBarra = ({ children }) => {
  return (
    <>
      <Barra />
      <main className={style.barraSuperior}>{children}</main>
    </>
  );
}

