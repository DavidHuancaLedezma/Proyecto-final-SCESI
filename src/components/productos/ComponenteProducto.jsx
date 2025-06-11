import { FaShoppingCart, FaBan } from 'react-icons/fa';
import "../../style/normalize/normalize.css"
import "../../style/cardProducto/componenteProducto.css"
import { useState } from 'react';

function ComponenteProducto ({ nombre, descripcion, precio, imagen, origen, categoria,popular, disponible}) {
    
    const stock = disponible ? "stock-producto" : " stock-producto agotado"
    return(
        <article className="producto-contenedor">
            <img className = "producto-foto" src={imagen} alt="imagen del producto ofertado" />
            <section className="producto-detalles">
                <header>
                    <h2 className="producto-nombre">{nombre}</h2>
                </header>
                <p className="producto-descripcion">{descripcion}</p>
                <footer className="producto-comprar">
                    <section className="producto-informacion">
                        <span className="producto-informacion-item">Origen:{origen}</span>
                        <span className="producto-informacion-item">Categoria:{categoria}</span>
                        <span className="producto-informacion-item">Popular:{popular}</span>
                    </section>
                    <span className="producto-precio">{precio} Bs.</span>
                    <section className={stock}>
                        <button className="producto-disponible">Agregar al carrito <FaShoppingCart /></button>
                        <button className="producto-agotado">Producto agotado <FaBan/></button>
                    </section>
                </footer>
            </section>
        </article>
    )
}
export default ComponenteProducto
