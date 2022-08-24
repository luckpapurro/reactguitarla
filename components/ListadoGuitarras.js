import Guitarra from '../components/Guitarra'
import styles from '../styles/Tienda.module.css'

const ListadoGuitarras = ({ guitarras }) => {
   return (
      <div className={styles.listado}>
         {guitarras.map((guitarra) => (
            <Guitarra key={guitarra.url} guitarra={guitarra} />
         ))}
      </div>
   )
}

export default ListadoGuitarras
