import Link from "next/link";
export default function blog() {
  return (
    <main>
      <h1>here are my blogs :</h1>
      <p> <Link href="./blog/blog-1">blog 1</Link> </p>
      <p> <Link href="./blog/blog-2">blog 2</Link> </p>
    </main>
  );
}
