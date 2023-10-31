import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const artPiece = pieces.find((piece) => piece.slug === slug);
  console.log("artPiece: ", artPiece);

  return (
    <div>
      <ArtPieceDetails artPiece={artPiece} />
    </div>
  );
}
