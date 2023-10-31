import ArtPiecePreview from "../ArtPiecePreview/index.js";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <h1>ArtPieces</h1>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview
              title={piece.name}
              image={piece.imageSource}
              artist={piece.artist}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
