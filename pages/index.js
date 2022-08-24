import Layout from '../components/Layout'
import Curso from '../components/Curso'
import ListadoGuitarras from '../components/ListadoGuitarras'
import ListadoBlogs from '../components/ListadoBlogs'

const Home = ({ guitarras, curso, entradas }) => {
   return (
      <Layout
         nombrePestana="Inicio" // paso una guitarra en las props a Layout
         guitarra={guitarras[3]}
      >
         <main className="contenedor">
            <h1 className="heading">Nuestras Guitarras</h1>

            <ListadoGuitarras guitarras={guitarras} />
         </main>

         <Curso curso={curso} />

         <section className="contenedor">
            <ListadoBlogs entradas={entradas} />
         </section>
      </Layout>
   )
}
export async function getServerSideProps() {
   const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=published_at:desc` // Strapi el ?... es para que ordene por ultimo creado (opcion precio)
   const urlCurso = `${process.env.API_URL}/cursos`
   const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=createdAt:desc` // Strapi _limit=3& limita la respuesta a solo 3

   const [resGuitarras, resCurso, resBlog] = await Promise.all([
      fetch(urlGuitarras),
      fetch(urlCurso),
      fetch(urlBlog),
   ]) // se usa Promise.all para no trabar esperando respuesta anterior

   const [guitarras, curso, entradas] = await Promise.all([
      resGuitarras.json(),
      resCurso.json(),
      resBlog.json(),
   ])

   return { props: { guitarras, curso, entradas } }
}

export default Home
