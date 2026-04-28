"use client";

import { Button } from "@heroui/react";
import { useGetUser } from "../hooks/useGetUser";
import { useState } from "react";

export default function DashboardPage() {
  const [userId, setUserId] = useState("");
  const { data, refetch, error } = useGetUser(userId);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userId) return;
    refetch();
  };
  return (
    <section className="text-center">
      <h1 className="text-5xl my-10">Dashboard</h1>
      <p className="my-16">Welcome to the dashboard!</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center"
      >
        <input
          type="text"
          placeholder="Enter your ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Button type="submit">Get User Info</Button>
      </form>

      {data && <p className="mt-6">Username: {data.username}</p>}
      {error && <p className="mt-6 text-red-500">User not found</p>}
    </section>
  );
}
