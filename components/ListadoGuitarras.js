import Guitarra from '../components/Guitarra'
import styles from '../styles/Guitarra.module.css'

const ListadoGuitarras = ({ guitarras }) => {
   return (
      <div className={styles.listado}>
         {guitarras.map((guitarra) => (
            <Guitarra key={guitarra.ur} guitarra={guitarra} />
         ))}
      </div>
   )
}

export default ListadoGuitarras
