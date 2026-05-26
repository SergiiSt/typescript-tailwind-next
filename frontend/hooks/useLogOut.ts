"use client";

import { useRouter } from "next/navigation";

export default function useLogOut() {
  const router = useRouter();

  const logOut = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    router.push("/login");
    router.refresh();
  };

  return { logOut };
}
