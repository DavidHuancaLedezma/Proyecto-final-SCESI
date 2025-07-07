# Restaurante fragmentos

La problemática principal es el limitado espacio que tienen los restaurantes y la demanda de clientes que hay en estos mismos, para ese efecto se desarrolló una aplicación web que permite realizar las respectivas reservas en el restaurante y ordenar el respectivo menú que desee el cliente, con esto el dueño del restaurante tendrá un control de todas las reservas que son realizadas en el restaurante teniendo la posibilidad de aceptar estas reservas o rechazarlas, al mismo tiempo tendrá un control de todos sus clientes que utilizan la aplicación web y del menú ofertado en el restaurante teniendo la posibilidad de agregar, eliminar y cambiar el estado de disponibilidad del producto, con todas estas funcionalidades se tendrá un control sobre la demanda de clientes y la administración de los espacios disponibles del restaurante así dando una mejor atención al cliente y al dueño del restaurante una mejor gestión de su negocio. Para la creación de esta aplicación web se tomó de referencia el restaurante fragmentos.

**Nota: La aplicación web es para la version de pc y responsive a móvil.**

# Aplicación web

- Link de la aplicación 👉 [https://proyecto-final-scesi.pages.dev/](https://proyecto-final-scesi.pages.dev/)

```
    # Credenciales del administrador
    Correo electronico: admin@gmail.com
    Contraseña: admin123
```

# Demostración del funcionamiento de la aplicación web

- Link del video 👉 [https://youtu.be/ohITaJnvxJA](https://youtu.be/ohITaJnvxJA)

# Tecnologías utilizadas

- React v 19.1.0
- JavaScript
- CSS3
- HMTL5
- Firebase

## Prerequisitos
- Nodejs v20.11.1 o superior [Descarga Nodejs](https://nodejs.org/es/download)
- git [Descarga git](https://git-scm.com/downloads)


## Como usar

```
    # Ejecutar en la consola de vscode los siguientes comandos.
    git clone https://github.com/DavidHuancaLedezma/Proyecto-final-SCESI.git
    cd Proyecto-final-SCESI
    npm install
    npm install sweetalert2
    npm install firebase
    npm install react-icons
    npm install react-router-dom
    npm run dev    
```

## Estructura de carpetas

```
📁Proyecto-final-SCESI
    └── 📁public
        └── 📁assets
            └── 📁img
                ├── comidas.jpg
                ├── portada.png
                ├── restaurante-foto-2.webp
                ├── restaurante-foto-5.webp
        ├── icono.jpg
        ├── vite.svg
    └── 📁src
        └── 📁assets
            └── 📁img
                ├── carrito-de-historial.png
                ├── icono.png
            ├── react.svg
        └── 📁components
            └── 📁Busqueda
                ├── BarraBusqueda.jsx
                ├── BarraBusqueda.module.css
            └── 📁NavBar
                ├── NavBarAdministrador.jsx
                ├── NavBarAdministrador.module.css
                ├── NavBarHome.jsx
                ├── NavBarHome.module.css
                ├── NavBarLogin.jsx
                ├── NavBarLogin.module.css
            └── 📁Productos
                ├── ProductoCard.jsx
                ├── ProductoCard.module.css
                ├── ProductoCardPequenio.jsx
                ├── ProductoCardPequenio.module.css
                ├── ProductoEnCarrito.module.css
                ├── ProductosEnCarrito.jsx
            └── 📁PublicidadRestaurante
                ├── PublicidadRestaurante.jsx
                ├── PublicidadRestaurante.module.css
            └── 📁Reservas
                ├── ReservaMesa.jsx
                ├── ReservaMesa.module.css
            └── 📁UsuarioCard
                ├── Usuario.jsx
                ├── Usuario.module.css
            ├── index.js
        └── 📁hooks
            ├── useBusqueda.js
            ├── useCategoria.js
            ├── useHistorialReserva.js
            ├── useProducto.js
            ├── useRegistroProducto.js
            ├── useReserva.js
            ├── useUsuario.js
        └── 📁pages
            └── 📁Administrador
                └── 📁PanelProductos
                    ├── PanelProductos.jsx
                    ├── PanelProductos.module.css
                └── 📁PanelReservas
                    ├── PanelReservas.jsx
                    ├── PanelReservas.module.css
                └── 📁PanelUsuarios
                    ├── PanelUsuarios.jsx
                    ├── PanelUsuarios.module.css
                └── 📁Perfil
                    ├── PerfilAdministrador.jsx
                └── 📁RegistroProductos
                    ├── RegistroProductos.jsx
                    ├── RegistroProductos.module.css
            └── 📁MenuInicial
                └── 📁IniciarSesion
                    ├── IniciarSesion.jsx
                    ├── IniciarSesion.module.css
                └── 📁ProductosDeMuestra
                    ├── ProductosDeMuestra.jsx
                    ├── ProductosDeMuestra.module.css
                └── 📁PublicidadInicio
                    ├── PublicidadInicio.jsx
                └── 📁Registrarse
                    ├── Registrarse.jsx
                    ├── Registrarse.module.css
            └── 📁Usuario
                └── 📁Carrito
                    ├── Carrito.jsx
                    ├── Carrito.module.css
                └── 📁HistorialReservas
                    ├── HistorialReserva.module.css
                    ├── HistorialReservas.jsx
                └── 📁Inicio
                    ├── Inicio.jsx
                └── 📁Perfil
                    ├── Perfil.jsx
                └── 📁Producto
                    ├── Productos.jsx
                    ├── Productos.module.css
                └── 📁Reserva
                    ├── Reserva.jsx
        └── 📁routes
            ├── app-routes.jsx
        └── 📁services
            ├── auth.js
            ├── consultas.js
            ├── firebase.js
            ├── mensajes.js
        └── 📁utils
            ├── LogicaPanelProductos.js
            ├── LogicaPanelReservas.js
            ├── LogicaPanelUsuarios.js
```

## Flujo de trabajo utilizado

- GitFlow
