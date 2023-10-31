import ArtPiecePreview from "../ArtPiecePreview/index.js";
import Link from "next/link";
export default function ArtPieces({ pieces }) {
  return (
    <>
      <h1>ArtPieces</h1>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview piece={piece} />
          </li>
        ))}
      </ul>
    </>
  );
}
