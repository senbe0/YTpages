import "../styles/pc.css";
import "../styles/smartphone.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
