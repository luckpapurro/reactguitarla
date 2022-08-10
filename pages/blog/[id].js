import Layout from "../../components/Layout";

const EntradaBlog = ({ entrada }) => {
  console.log(entrada);
  return <Layout></Layout>;
};

export async function getServerSideProps({ query: { id } }) {
  // destructuring de router.query.id (no es necesario hacer el import de useRouter y guardarlo en una variable)
  console.log(id); // se ve en la terminal

  const url = `http://localhost:1337/blogs/${id}`;
  console.log(url);
  const respuesta = await fetch(url);
  const entrada = await respuesta.json();

  console.log(entrada);

  return { props: { entrada: entrada } };
}

export default EntradaBlog;
