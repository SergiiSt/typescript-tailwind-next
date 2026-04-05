"use client";

export default function LoginForm() {
  return (
    <>
      <form action="/login" className="flex justify-center flex-col">
        <input
          className="border w-87.5 mx-auto mb-4 p-2 rounded"
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="username"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
