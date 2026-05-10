import Link from "next/link";
import { cookies } from "next/headers";
import { Button } from "@heroui/react";

export default async function Header() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth_token");
  return (
    <header className="flex justify-center py-4 gap-8">
      <Link href="/">
        <Button>Home Page</Button>
      </Link>
      {authToken ? (
        <Link href="/dashboard">
          <Button>Dashboard</Button>
        </Link>
      ) : null}

      {authToken ? (
        <form action="/api/logout" method="POST">
          <Button type="submit">Logout</Button>
        </form>
      ) : (
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      )}
    </header>
  );
}
