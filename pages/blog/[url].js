import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/Entrada.module.css";
import { formatearFecha } from "../../helpers/index";

const EntradaBlog = ({ entrada }) => {
  const { contenido, imagen, published_at, titulo } = entrada;
  console.log(entrada);

  return (
    <Layout>
      <main className="contenedor">
        <h1 className="heading">{titulo}</h1>
        <article className={styles.entrada}>
          <Image
            layout="responsive"
            width={800}
            height={600}
            src={imagen.url}
            alt={`imagen entrada ${titulo}`}
          ></Image>
          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

// Con getStaticPaths (compila el proyecto antes de subirlo, mas rapido y seguro) al tener routing dinamico es mas complicado

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  const paths = entradas.map((entrada) => ({
    params: { url: entrada.url },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps({ params: { url } }) {
  const url = `${process.env.API_URL}/blogs/${id}`;
  const respuesta = await fetch(url);
  const entrada = await respuesta.json();
  return { props: { entrada: entrada } };
}

// Con getServerSideProps (mas dinamico)
//
// export async function getServerSideProps({ query: { id } }) {
//   // destructuring de router.query.id (no es necesario hacer el import de useRouter y guardarlo en una variable)l

//   const url = `${process.env.API_URL}/blogs/${id}`;
//   console.log(url);
//   const respuesta = await fetch(url);
//   const entrada = await respuesta.json();

//   return { props: { entrada: entrada } };
// }

export default EntradaBlog;
