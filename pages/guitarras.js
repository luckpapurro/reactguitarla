import Layout from '../components/Layout'
import ListadoGuitarras from '../components/ListadoGuitarras'

const Tienda = ({ guitarras }) => {
   return (
      <Layout nombrePestana="Tienda Virtual">
         <main className="contenedor">
            <h1 className="heading">Tienda Cabra Online</h1>
            <ListadoGuitarras guitarras={guitarras} />
         </main>
      </Layout>
   )
}

export async function getServerSideProps() {
   const url = `${process.env.API_URL}/guitarras?_sort=published_at:desc` // el ?... es para que ordene por ultimo creado (opcion precio)
   const respuesta = await fetch(url)
   const guitarras = await respuesta.json()

   return { props: { guitarras } }
}

export default Tienda

// getServerSideProps y getStaticProps siempre se hacen desde PAGES, nunca desde componentes
