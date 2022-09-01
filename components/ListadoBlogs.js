import Entrada from '../components/Entrada'
import styles from '../styles/Blog.module.css'

const ListadoBlogs = ({ entradas }) => {
   console.log('🚀 ~ file: ListadoBlogs.js ~ line 5 ~ ListadoBlogs ~ entradas', entradas)
   return (
      <>
         <h2 className="heading">Blog</h2>
         <div className={styles.blog}>
            {entradas.map((entrada) => (
               <Entrada key={entrada._id} entrada={entrada} />
            ))}
         </div>
      </>
   )
}

export default ListadoBlogs
