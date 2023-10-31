import Image from "next/image";
export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <h2>{title}</h2>
      <h3>{artist}</h3>
      <Image src={image} alt="Image" height={144} width={144} />
    </>
  );
}
