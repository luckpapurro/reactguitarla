import Link from "next/link";
import Image from "next/image";
import { formatearFecha } from "../helpers";

const Entrada = ({ entrada }) => {
  const { titulo, resumen, imagen, published_at, id } = entrada;

  return (
    <article>
      <Image
        src={imagen.url}
        width={800}
        height={600}
        layout="responsive" // para hacer que funcione hay que modificar el next.config.js
        alt={`imagen blog ${titulo}`}
      />

      <div>
        <h1>{titulo}</h1>
        <p>{formatearFecha(published_at)}</p>
        <p>{resumen}</p>
        <Link href={`/blog/${id}`}>Leer entrada</Link>
      </div>
    </article>
  );
};

export default Entrada;
