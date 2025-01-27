import "@/styles/globals.css";
import Layout from"@/pages/components/Layout";
import Footer from"@/pages/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}
