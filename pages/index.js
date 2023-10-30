// const fetcher = (...args) => fetch(...args).then((res) => res.json());
// import Link from "next/link";

export default function HomePage({ pieces }) {
  return (
    <div>
      <h1>Art</h1>
      <ul>
        {pieces.map((piece) => {
          <li key={piece.slug}>
            <p>{piece.name}</p>
          </li>;
        })}
      </ul>
    </div>
  );
}
