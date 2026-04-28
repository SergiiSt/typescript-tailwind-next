import { useQuery } from "@tanstack/react-query";

type User = {
  id: number;
  username: string;
};

async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`/auth/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

export function useGetUser(id: string) {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id),
    enabled: false,
  });
}
