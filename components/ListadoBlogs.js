import Entrada from '../components/Entrada'
import styles from '../styles/Blog.module.css'

const ListadoBlogs = ({ entradas }) => {
   return (
      <div className={styles.blog}>
         {entradas.map((entrada) => (
            <Entrada key={entrada.id} entrada={entrada} />
         ))}
      </div>
   )
}

export default ListadoBlogs
