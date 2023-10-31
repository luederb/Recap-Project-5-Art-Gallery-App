import ArtPieces from "../../components/ArtPieces";
import ArtPiecesPreview from "@/components/ArtPiecePreview";
import Link from "next/link";
export default function ArtPiecesPage({ pieces }) {
  return (
    <>
      <ArtPieces pieces={pieces} />
    </>
  );
}
