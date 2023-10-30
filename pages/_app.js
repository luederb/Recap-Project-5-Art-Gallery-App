import GlobalStyle from "../styles";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  console.log(data);

  function getRandomInt() {
    return Math.floor(Math.random() * 11);
  }
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={data} />
    </>
  );
}
