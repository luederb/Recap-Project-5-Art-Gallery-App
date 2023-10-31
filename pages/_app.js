import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  // function getRandomInt() {
  //   return Math.floor(Math.random() * 11);
  // }
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
