import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout nombrepestana="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/nosotros.jpg"
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>
              Sed tincidunt sagittis arcu pellentesque mollis. Quisque faucibus
              tortor sed gravida facilisis. Fusce malesuada et nisi et dictum.
              Mauris eget mi a enim tincidunt pulvinar. Aenean sagittis velit
              eleifend tincidunt lobortis. Cras imperdiet metus eget nisi
              tincidunt, quis imperdiet dolor iaculis. Proin ac massa sed lectus
              mollis viverra malesuada non ex. Vestibulum consequat libero ac
              lorem fringilla, eu porta massa condimentum. Nam malesuada erat
              sed laoreet vehicula.
            </p>
            <p>
              Sed tincidunt sagittis arcu pellentesque mollis. Quisque faucibus
              tortor sed gravida facilisis. Fusce malesuada et nisi et dictum.
              Mauris eget mi a enim tincidunt pulvinar. Aenean sagittis velit
              eleifend tincidunt lobortis. Cras imperdiet metus eget nisi
              tincidunt, quis imperdiet dolor iaculis. Proin ac massa sed lectus
              mollis viverra malesuada non ex.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
