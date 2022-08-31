import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Carrito.module.css'

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {
   const [total, setTotal] = useState(0)

   useEffect(() => {
      const calculoTotal = carrito.reduce(
         (total, producto) => total + producto.cantidad * producto.precio,
         0
      )
      setTotal(calculoTotal)
   }, [carrito])

   return (
      <Layout nombrePestana="Carrito de compras">
         <h1 className="heading">Carrito</h1>
         <main className={`contenedor ${styles.contenido}`}>
            <div className={styles.carrito}>
               <h2>Articulos</h2>
               {carrito.lenght === 0
                  ? 'Carrito Vacio'
                  : carrito.map((producto) => (
                       <div key={producto.id} className={styles.producto}>
                          <div>
                             <Image
                                layout="responsive"
                                width={250}
                                height={500}
                                src={producto.imagen}
                                alt={producto.nombre}
                             />
                          </div>
                          <div>
                             <p className={styles.nombre}>{producto.nombre}</p>
                             <div className={styles.cantidad}>
                                <p>Cantidad:</p>
                                <select
                                   className={styles.select}
                                   value={producto.cantidad}
                                   onChange={(e) =>
                                      actualizarCantidad({
                                         cantidad: e.target.value,
                                         id: producto.id,
                                      })
                                   }
                                >
                                   <option value="1">1</option>
                                   <option value="2">2</option>
                                   <option value="3">3</option>
                                </select>
                             </div>
                             <p className={styles.precio}>
                                $ <span>{producto.precio}</span>
                             </p>
                             <p className={styles.subtotal}>
                                Subtotal: $<span>{producto.precio * producto.cantidad}</span>
                             </p>
                          </div>
                          <button
                             type="button"
                             className={styles.eliminar}
                             onClick={() => eliminarProducto(producto.id)}
                          >
                             X
                          </button>
                       </div>
                    ))}
            </div>
            <div className={styles.resumen}>
               {total > 0 ? (
                  <>
                     <h3>Resumen del pedido</h3>
                     <p>Total a pagar: USD {total}</p>
                  </>
               ) : (
                  <p>No hay productos en el carrito</p>
               )}
            </div>
         </main>
      </Layout>
   )
}

export default Carrito
