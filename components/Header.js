import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'

const Header = ({ guitarra }) => {
   const router = useRouter()

   return (
      <header className={styles.header}>
         <div className="contenedor">
            <div className={styles.barra}>
               <Link href="/">
                  <a>
                     {/* clase 211 como tiraba unos errores explica que si dentro de Link hay imagenes se deben guardar dentro de una etiqueta de enlace*/}
                     <Image width={150} height={150} src="/img/CabraLogo.png" alt="Imagen logo" />
                  </a>
               </Link>
               <nav className={styles.navegacion}>
                  <Link href="/">Inicio</Link>
                  <Link href="/nosotros">Nosotros</Link>
                  <Link href="/blog">Blog</Link>
                  <Link href="/guitarras">Tienda</Link>
                  <Link href="/carrito">
                     <a>
                        <Image
                           layout="fixed"
                           width={30}
                           height={25}
                           src="/img/carrito.png"
                           alt="Imagen carrito"
                        />
                     </a>
                  </Link>
               </nav>
            </div>

            {guitarra && (
               <div className={styles.modeloGuitarra}>
                  <h2>Modelo {guitarra.nombre}</h2>
                  <p>{guitarra.descripcion}</p>
                  <p className={styles.precio}>USD {guitarra.precio}</p>
                  <Link href={`/guitarras/${guitarra.url}`}>
                     <a className={styles.enlace}>Ver Producto</a>
                  </Link>
               </div>
            )}
         </div>
         {router.pathname === '/' && ( // comprueba que router.pathname ( "/" ) sea igual a "/""
            <div className={styles.guitarra}>
               <Image
                  src="/img/header_guitarra.png"
                  layout="fixed"
                  width={450}
                  height={1000}
                  alt="imagen header guitarra"
               />
            </div>
         )}
      </header>
   )
}

export default Header
