import Image from "next/image";
import Link from "next/link";
export default function ArtPieceDetails({ artPiece }) {
  return (
    <>
      <h1>ArtPieceDetails</h1>
      <h2>{artPiece.name}</h2>
      <h3>{artPiece.artist}</h3>
      <h3>{artPiece.year}</h3>
      <h3>{artPiece.genre}</h3>
      <Image
        src={artPiece.imageSource}
        alt="Image"
        height={144}
        width={144}
      ></Image>
    </>
  );
}
