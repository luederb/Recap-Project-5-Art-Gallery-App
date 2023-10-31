import Spotlight from "@/components/Spotlight/index.js";
import ArtPieces from "../components/ArtPieces/index.js";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const {
    data: pieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log("data: ", pieces);

  const { imageSource: image, artist } = pieces[Math.floor(Math.random() * 11)];

  return (
    <>
      <h1>homepage</h1>
      <div>
        <ArtPieces pieces={pieces} />
        <Spotlight image={image} artist={artist} />
      </div>
    </>
  );
}
