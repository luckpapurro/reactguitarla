import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import ListadoGuitarras from '../../components/ListadoGuitarras'
import styles from '../../styles/Guitarra.module.css'

const Producto = ({ guitarra, guitarras, agregarCarrito }) => {
   const [cantidad, setCantidad] = useState(1)

   const { descripcion, imagen, nombre, precio, id } = guitarra[0]

   const handleSubmit = (e) => {
      e.preventDefault()

      if (cantidad < 1) {
         alert('Cantidad no valida')
         return
      }

      const guitarraSeleccionada = { id, imagen: imagen.url, nombre, precio, cantidad }

      agregarCarrito(guitarraSeleccionada)
   }

   return (
      <Layout nombrePestana={`Guitarra ${nombre}`}>
         <div className={styles.guitarra}>
            <Image
               src={imagen.url}
               layout="responsive"
               width={150}
               height={350}
               alt={`Imagen Guitarra ${nombre}`}
            />
            <div className={styles.contenido}>
               <h3>{nombre}</h3>
               <p className={styles.descripcionUnica}>{descripcion}</p>
               <p className={styles.precio}>USD {precio}</p>

               <form className={styles.formulario} onSubmit={handleSubmit}>
                  <label>Cantidad:</label>
                  <select
                     value={cantidad} //
                     onChange={(e) => setCantidad(parseInt(e.target.value))}
                  >
                     <option value="0">-- Seleccione --</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                  </select>
                  <input type="submit" value="Agregar al carrito"></input>
               </form>
            </div>
         </div>
         <main className="contenedor">
            <h1 className="heading">Otras Guitarras Cabra</h1>

            <ListadoGuitarras guitarras={guitarras} />
         </main>
      </Layout>
   )
}

export async function getServerSideProps({ query: { url } }) {
   const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
   const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=published_at:desc` // Strapi el ?... es para que ordene por ultimo creado (opcion precio)

   const [resGuitarra, resGuitarras] = await Promise.all([fetch(urlGuitarra), fetch(urlGuitarras)]) // se usa Promise.all para no trabar esperando respuesta anterior

   const [guitarra, guitarras] = await Promise.all([resGuitarra.json(), resGuitarras.json()])

   return { props: { guitarra, guitarras } }
}

export default Producto

//ORIGINAL
// export async function getServerSideProps({ query: { url } }) {
//    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
//    const respuesta = await fetch(urlGuitarra)
//    const guitarra = await respuesta.json()

//    return { props: { guitarra: guitarra } }
// }

// export async function getStaticPaths() {
//    const url = `${process.env.API_URL}/guitarras`
//    const respuesta = await fetch(url)
//    const guitarra = await respuesta.json()
//    const paths = guitarra.map((guitarra) => ({
//       params: { url: guitarra.url },
//    }))
//    console.log(paths)
//    return { paths, fallback: false }
// }
// export async function getStaticProps({ params: { url } }) {
//    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
//    const respuesta = await fetch(urlGuitarra)
//    const guitarra = await respuesta.json()
//    return { props: { guitarra: guitarra } }
// }
