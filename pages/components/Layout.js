import Head from "next/head";
import Header from "./Header";

const Layout = ({ children, nombrepestana }) => {
  return (
    <div>
      <Head>
        <title>Guitar LA - {nombrepestana}</title>
        <meta name="description" content="Sitio web de venta de guitarras" />
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
