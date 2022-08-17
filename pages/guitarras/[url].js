import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Guitarra.module.css'

const Producto = ({ guitarra }) => {
   const { descripcion, imagen, nombre, precio, url } = guitarra[0]
   console.log(guitarra)

   return (
      <Layout nombrepestana={url}>
         <main className="contenedor">
            <h1 className="heading">{nombre}</h1>
            <article>
               <Image
                  layout="responsive"
                  width={800}
                  height={600}
                  src={imagen.url}
                  alt={`imagen guitarra ${nombre}`}
               ></Image>
               <div>
                  <p>{descripcion}</p>
                  <p>U$D {precio}</p>
               </div>
            </article>
         </main>
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
