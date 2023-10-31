import Image from "next/image";
export default function ArtPiecesPreview({ name, artist, imageSource }) {
  return (
    <>
      <h2>{name}</h2>
      <h3>{artist}</h3>
      <Image src={imageSource} alt="Image" height={144} width={144} />
    </>
  );
}
