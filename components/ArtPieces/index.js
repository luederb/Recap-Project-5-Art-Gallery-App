import ArtPiecePreview from "../ArtPiecePreview/index.js";
import Link from "next/link";
export default function ArtPieces({ pieces }) {
  return (
    <>
      <h1>ArtPieces</h1>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview
              name={piece.name}
              imageSource={piece.imageSource}
              artist={piece.artist}
            />
            <Link href={`/art-pieces/${piece.slug}`}>Details Page</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
