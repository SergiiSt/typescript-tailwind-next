import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center py-4 gap-8">
      <Link href="/">Home Page</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/login">Login</Link>
    </header>
  );
}
