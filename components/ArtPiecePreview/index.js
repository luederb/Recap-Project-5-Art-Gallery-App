import Image from "next/image";
import Link from "next/link";

export default function ArtPiecesPreview({ piece }) {
  return (
    <>
      <h2>{piece.name}</h2>
      <h3>{piece.artist}</h3>
      <Link href={`/art-pieces/${piece.slug}`}>
        <Image src={piece.imageSource} alt="Image" height={144} width={144} />
      </Link>
    </>
  );
}
