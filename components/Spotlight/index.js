import Image from "next/image";
export default function Spotlight({ image, artist }) {
  return (
    <>
      <h1>Spotlight</h1>
      <h3>{artist}</h3>
      <Image src={image} alt="Image" height={144} width={144} />
    </>
  );
}
