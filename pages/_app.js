import "../styles.css";
import Nav from "../components/Nav";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <div style={{ padding: 16, maxWidth: 900, margin: "0 auto" }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
