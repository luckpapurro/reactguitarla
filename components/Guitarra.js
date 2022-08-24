import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Guitarra.module.css'

const Guitarra = ({ guitarra }) => {
   const { nombre, imagen, descripcion, precio, url } = guitarra

   return (
      <div className={styles.guitarra}>
         <Image
            src={imagen.url}
            layout="responsive"
            width={150}
            height={350}
            alt={`Imagen Guitarra ${nombre}`}
         />
         <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcionTodas}>{descripcion}</p>
            <p className={styles.precio}>U$D {precio}</p>
            <Link href={`/guitarras/${url}`}>
               <a className={styles.enlace}>Ver producto</a>
            </Link>
         </div>
      </div>
   )
}

export default Guitarra
