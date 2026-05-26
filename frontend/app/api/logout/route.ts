import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.redirect(
    new URL("/login", "http://localhost:3000"),
  );

  response.cookies.set("auth_token", "", {
    maxAge: 0,
    path: "/",
  });

  return response;
}
