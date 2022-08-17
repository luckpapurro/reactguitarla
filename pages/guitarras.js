import Layout from '../components/Layout'
import Guitarra from '../components/Guitarra'
import styles from '../styles/Tienda.module.css'

const Tienda = ({ guitarras }) => {
   return (
      <Layout nombrepestana="Tienda Virtual">
         <main className="contenedor">
            <h1 className="heading">Nuestra Coleccion</h1>
            <div className={styles.listado}>
               {guitarras.map((guitarra) => (
                  <Guitarra key={guitarra.url} guitarra={guitarra} />
               ))}
            </div>{' '}
         </main>
      </Layout>
   )
}

// getServerSideProps y getStaticProps siempre se hacen desde PAGES, nunca desde componentes

export async function getServerSideProps() {
   const url = `${process.env.API_URL}/guitarras?_sort=published_at:desc` // el ?... es para que ordene por ultimo creado (opcion precio)
   const respuesta = await fetch(url)
   const guitarras = await respuesta.json()

   return { props: { guitarras } }
}
export default Tienda