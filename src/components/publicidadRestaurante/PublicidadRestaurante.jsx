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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque sed aliquid unde at voluptatum optio soluta, tempore
                molestias molestiae, suscipit eum repudiandae, a nobis! Suscipit
                facere necessitatibus exercitationem soluta eveniet.
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores delectus ullam labore quae nam ad voluptate vitae
              maxime quos? Odit aspernatur hic nihil ab in necessitatibus
              suscipit autem explicabo omnis?
            </figcaption>
          </figure>
        </article>
        <article className={style.ambientes}>
          <figure className={style.contenedorFotos}>
            <img className={style.foto} src={ambientes2} alt="" />
            <figcaption className={style.descripcionFotos}>
              <h2>Mesas</h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vel
              iste obcaecati ullam, ex eligendi. Vitae, ut! Accusamus optio
              perferendis doloribus numquam maiores ipsa error vitae natus
              cupiditate! Consectetur, ipsum!
            </figcaption>
          </figure>
        </article>
        <article className={style.ambientes}>
          <figure className={style.contenedorFotos}>
            <img className={style.foto} src={ambientes3} alt="" />
            <figcaption className={style.descripcionFotos}>
              <h2>Comidas</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, ut? Deleniti voluptatibus dolor molestiae ab
              officiis, autem laudantium? Quis sequi fugit minima maxime hic
              consectetur fugiat ipsam sed corrupti aut.
            </figcaption>
          </figure>
        </article>
        <article className={style.ambientes}>
          <div className={style.contenedorMapa}>
            <iframe
              className={style.mapa}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d475.94218043379885!2d-66.155644!3d-17.385977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e37408d97cdf8f%3A0x42a91c4b11f1225f!2sSuassuna%20by%20Fragmentos!5e0!3m2!1ses-419!2sbo!4v1749945191972!5m2!1ses-419!2sbo"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className={style.descripcionFotos}>
              <h2>Ubicación</h2>
              Encuentranos en nuestro restaurante, esperamos que nos visites
              pronto, que esperas.
            </div>
          </div>
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
