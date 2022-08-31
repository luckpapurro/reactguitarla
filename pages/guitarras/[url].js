import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Guitarra.module.css'

const Producto = ({ guitarra, agregarCarrito }) => {
   const { descripcion, imagen, nombre, precio, url } = guitarra[0]

   const handleSubmit = (e) => {
      e.preventDefault()
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
               <p className={styles.precio}>U$D {precio}</p>

               <form className={styles.formulario}>
                  <label>Cantidad:</label>
                  <select>
                     <option value="">-- Seleccione --</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                  </select>
                  <input type="submit" value="Agregar al carrito"></input>
               </form>
            </div>
         </div>
      </Layout>
   )
}

export async function getServerSideProps({ query: { url } }) {
   const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
   const respuesta = await fetch(urlGuitarra)
   const guitarra = await respuesta.json()

   return { props: { guitarra: guitarra } }
}

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

export default Producto
