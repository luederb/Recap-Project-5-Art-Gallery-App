import Link from "next/link";

export default function Navigation({}) {
  return (
    <>
      <div>
        <Link href="/">Spotlight</Link>
        <span> </span>
        <Link href="/art-pieces">ArtPieces</Link>
      </div>
    </>
  );
}
