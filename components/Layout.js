import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, nombrePestana, guitarra }) => {
   return (
      <div>
         <Head>
            <title>Cabra Guitars - {nombrePestana}</title>
            <meta name="description" content="Sitio web de venta de guitarras" />
         </Head>
         <Header guitarra={guitarra} />
         {children}
         <Footer />
      </div>
   )
}

Layout.defaultProps = { guitarra: null } // hago que el prop de guitarra solo lo tome en Layout y null para el resto de las paginas

export default Layout
