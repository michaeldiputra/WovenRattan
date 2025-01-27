import "@/styles/globals.css";
import Layout from"@/pages/components/Layout";
import Footer from"@/pages/components/Footer";
import Navbar from"@/pages/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}
