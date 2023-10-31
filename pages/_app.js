import Navigation from "@/components/Navigation";
import GlobalStyle from "../styles";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const {
    data: pieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log("data: ", pieces);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={pieces} />
      <Navigation />
    </>
  );
}
