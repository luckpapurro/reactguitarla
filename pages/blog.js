import { useEffect } from "react";
import Layout from "../components/Layout";
import Entrada from "../components/Entrada";

const Blog = ({ entradas }) => {
  //
  // La forma clasica de pegarle a una API pero ya no se usa en NEXT.JS
  // useEffect(() => {
  //   const consultarAPI = async () => {
  //     const url = "http://localhost:1337/blogs";
  //     const respuesta = await fetch(url);
  //     const resultado = await respuesta.json();

  //     console.log(resultado);
  //   };
  //   consultarAPI();
  // }, []);
  //
  // Uso la forma de abajo "getServerSideProps o getStaticProps"
  //

  return (
    <Layout nombrepestana="Blog">
      <main className="contenedor">
        <h2 className="heading">Blog</h2>
        <div>
          {entradas.map((entrada) => (
            <Entrada key={entrada.id} entrada={entrada} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = "http://localhost:1337/blogs";
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  return { props: { entradas } };
}

export default Blog;
