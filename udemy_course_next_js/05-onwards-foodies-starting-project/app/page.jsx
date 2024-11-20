import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <Link href='./community'>community</Link>
      <br />
      <Link href='./meals'>meals</Link>
      <br />
      <Link href='./meals/share'>meal_share</Link>
      
    </main>
  );
}
