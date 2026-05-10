import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

type LoginData = {
  username: string;
  password: string;
};

type LoginResponse = {
  id: number;
  username: string;
};

async function loginUser(data: LoginData): Promise<LoginResponse> {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${result.message}`);
  }

  return result;
}

export default function useLogin() {
  const router = useRouter();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      router.push("/dashboard");
      router.refresh();
    },

    onError: (error) => {
      new Error("Login error", error);
    },
  });
}
