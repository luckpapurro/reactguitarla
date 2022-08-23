import Layout from '../components/Layout'
import Guitarra from '../components/Guitarra'
import Curso from '../components/Curso'
import ListadoBlogs from '../components/ListadoBlogs'
import styles from '../styles/Tienda.module.css'

const Home = ({ guitarras, curso, entradas }) => {
   return (
      <Layout nombrePestana="Inicio">
         <main className="contenedor">
            <h1 className="heading">Nuestra Coleccion</h1>

            <div className={styles.listado}>
               {guitarras.map((guitarra) => (
                  <Guitarra key={guitarra.url} guitarra={guitarra} />
               ))}
            </div>
         </main>

         <Curso curso={curso} />

         <section className="contenedor">
            <ListadoBlogs entradas={entradas} />
         </section>
      </Layout>
   )
}
export async function getServerSideProps() {
   const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=published_at:desc` // el ?... es para que ordene por ultimo creado (opcion precio)
   const urlCurso = `${process.env.API_URL}/cursos`
   const urlBlog = `${process.env.API_URL}/blogs?_limit=3&sort=createdAt:desc` // _limit=3& limita la respuesta a solo 3

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
