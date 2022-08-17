import Link from "next/link";
import Image from "next/image";
import { formatearFecha } from "../helpers";
import styles from "../styles/Entrada.module.css";

const Entrada = ({ entrada }) => {
  const { titulo, resumen, imagen, published_at, id, url } = entrada;

  return (
    <article>
      <Image
        src={imagen.url}
        width={800}
        height={600}
        layout="responsive" // para hacer que funcione hay que modificar el next.config.js
        alt={`imagen blog ${titulo}`}
      />

      <div className={styles.contenido}>
        <h3 className={styles.h3}>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link href={`/blog/${url}`}>
          <a className={styles.enlace}>Leer entrada</a>
        </Link>
      </div>
    </article>
  );
};

export default Entrada;
