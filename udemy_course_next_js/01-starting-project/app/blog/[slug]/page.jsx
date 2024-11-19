import Link from "next/link";
export default function blog({params}) {
  return (
    <main>
      this is my blog
      <h1>{params.slug}</h1>
      {/* <h1>{params}</h1> */}
    </main>
  );
}
