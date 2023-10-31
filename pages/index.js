import Navigation from "@/components/Navigation";
import Spotlight from "@/components/Spotlight/index.js";

export default function SpotlightPage({ pieces }) {
  const { imageSource: image, artist } = pieces[Math.floor(Math.random() * 11)];

  return (
    <>
      <h1>homepage</h1>
      <div>
        <Spotlight image={image} artist={artist} />
      </div>
    </>
  );
}
