/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-page-custom-font */

import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, nombrepestana }) => {
   return (
      <div>
         <Head>
            <title>Guitar LA - {nombrepestana}</title>
            <meta name="description" content="Sitio web de venta de guitarras" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
               href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Trocchi&display=swap"
               rel="stylesheet"
            />
         </Head>
         <Header />
         {children}
         <Footer />
      </div>
   )
}

export default Layout
