import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <div>
        <Link href="/art-pieces">ArtPieces</Link>
      </div>
      <div>
        <Link href="/">Spotlight</Link>
      </div>
    </>
  );
}
