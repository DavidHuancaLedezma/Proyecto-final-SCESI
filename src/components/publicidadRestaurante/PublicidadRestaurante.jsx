import logo from '../../assets/img/icono.png'
import ambientes1 from '../../assets/img/restaurante-foto-2.webp'
import ambientes2 from '../../assets/img/restaurante-foto-5.webp'
import ambientes3 from '../../assets/img/comidas.jpg'
import style from './PublicidadRestaurante.module.css'

export const PublicidadRestaurante = () => {
  return (
    <div className={style.publicidad}>
      <header className={style.portada}>
        <article className={style.contenedorTitulo}>
          <h1 className={style.titulo}>Bienvenido a Fragmentos</h1>
          <figure className={style.presentacion}>
            <div className={style.icono}>
              <img src={logo} alt="pequeña foto para la portada" />
            </div>
            <figcaption className={style.descripcion}>
              <p className={style.descripcionTitulo}>
                Bienvenido a Fragmentos, un lugar donde el sabor se encuentra
                con la pasión. Descubre una experiencia culinaria única, llena
                de detalles, aromas inolvidables y platos pensados para
                sorprender. Vive momentos memorables y déjate llevar por el arte
                de nuestra comida especial.
              </p>
            </figcaption>
          </figure>
        </article>
      </header>
      <main>
        <article className={style.ambientes}>
          <figure className={style.contenedorFotos}>
            <img className={style.foto} src={ambientes1} alt="" />
            <figcaption className={style.descripcionFotos}>
              <h2>Entrada</h2>
              Apenas llegás a Fragmentos, ya se siente la onda del lugar. Luces
              cálidas, un aroma rico que viene desde adentro y ese detalle en
              cada rincón que te hace querer entrar sin pensarlo.
            </figcaption>
          </figure>
        </article>
        <article className={style.ambientes}>
          <figure className={style.contenedorFotos}>
            <img className={style.foto} src={ambientes2} alt="" />
            <figcaption className={style.descripcionFotos}>
              <h2>Mesas</h2>
              Adentro, las mesas están pensadas para sentirse a gusto. Ni muy
              cerca, ni muy lejos. Hay espacio para charlar tranquilo, con una
              luz que acompaña y una decoración sencilla pero con onda.
            </figcaption>
          </figure>
        </article>
        <article className={style.ambientes}>
          <figure className={style.contenedorFotos}>
            <img className={style.foto} src={ambientes3} alt="" />
            <figcaption className={style.descripcionFotos}>
              <h2>Comidas</h2>
              Acá la comida es simple pero llena de sabor. Todo se hace con
              ganas y cada plato tiene su propio toque especial. Hay opciones
              para todos, bien servidas y con ese sabor que te hace querer
              repetir.
            </figcaption>
          </figure>
        </article>
        <article className={style.ambientes}>
          <figure className={style.contenedorFotos}>
            <iframe
              className={style.mapa}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d475.94218043379885!2d-66.155644!3d-17.385977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e37408d97cdf8f%3A0x42a91c4b11f1225f!2sSuassuna%20by%20Fragmentos!5e0!3m2!1ses-419!2sbo!4v1749945191972!5m2!1ses-419!2sbo"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <figcaption className={style.descripcionFotos}>
              <h2>Ubicación</h2>
              Encuéntranos en nuestro restaurante. Esperamos que nos visites
              pronto. ¿Qué esperas?
            </figcaption>
          </figure>
        </article>
      </main>
      <footer className={style.referencia}>
        <p className={style.derechosReservados}>
          &copy; 2025 Fragmentos. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  )
}
