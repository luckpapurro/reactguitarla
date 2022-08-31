import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
   const [carrito, setCarrito] = useState([]) // de esta forma el state es glopal para todas las paginas

   useEffect(() => {
      // para que al recargar el valor inicial del carrito sea el Local Storage
      const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? [] // si no hay valor devuelve array vacio
      setCarrito(carritoLS) // el local stora se borraba por eso modifa el archivo next.config.js en reactStrictMode a false y REINICIAR
   }, [])

   useEffect(() => {
      localStorage.setItem('carrito', JSON.stringify(carrito))
   }, [carrito])

   const agregarCarrito = (producto) => {
      if (carrito.some((articulo) => articulo.id === producto.id)) {
         const carritoActualizado = carrito.map((articulo) => {
            if (articulo.id === producto.id) {
               articulo.cantidad = producto.cantidad // si quisiese sumarle una nueva cantidad iria + articulo
            }
            return articulo
         })
         setCarrito(carritoActualizado)
      } else {
         setCarrito([...carrito, producto])
      }
   }

   const actualizarCantidad = (producto) => {
      const carritoActualizado = carrito.map((articulo) => {
         if (articulo.id === producto.id) {
            articulo.cantidad = producto.cantidad
         }
         return articulo
      })
      setCarrito(carritoActualizado)
   }

   const eliminarProducto = (id) => {
      const carritoActualizado = carrito.filter((articulo) => articulo.id !== id)
      setCarrito(carritoActualizado)
   }

   return (
      <Component
         {...pageProps} //
         carrito={carrito}
         agregarCarrito={agregarCarrito}
         actualizarCantidad={actualizarCantidad}
         eliminarProducto={eliminarProducto}
      />
   )
}

export default MyApp
