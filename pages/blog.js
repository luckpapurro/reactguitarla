import Layout from '../components/Layout'
import ListadoBlogs from '../components/ListadoBlogs'

const Blog = ({ entradas }) => {
   return (
      <Layout nombrePestana="Blog">
         <main className="contenedor">
            <h1 className="heading">Blogs</h1>
            <ListadoBlogs entradas={entradas} />
         </main>
      </Layout>
   )
}

export async function getStaticProps() {
   const url = `${process.env.API_URL}/blogs?_sort=createdAt:desc`
   const respuesta = await fetch(url)
   const entradas = await respuesta.json()
   return { props: { entradas } }
}

export default Blog
//
// La forma clasica de pegarle a una API pero ya no se usa en NEXT.JS
// useEffect(() => {
//   const consultarAPI = async () => {
//     const url = `${process.env.API_URL}/blogs`;
//     const respuesta = await fetch(url);
//     const resultado = await respuesta.json();
//   };
//   consultarAPI();
// }, []); (este es el useEffect)
//
// Se usa "getServerSideProps o getStaticProps" ambos siempre se hacen desde PAGES, nunca desde componentes
