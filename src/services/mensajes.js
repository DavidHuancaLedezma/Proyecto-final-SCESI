import Swal from 'sweetalert2'

export const mensajeExito = (titulo, descripcion) => {
  Swal.fire({
    title: titulo,
    text: descripcion,
    icon: 'success',
  })
}

export const mensajeError = (titulo, descripcion) => {
  Swal.fire({
    title: titulo,
    text: descripcion,
    icon: 'error',
  })
}
