"use client";
import { Button } from "@heroui/react";
import useLogOut from "../../hooks/useLogOut";
export default function LogOutBtn() {
  const { logOut } = useLogOut();
  return <Button onClick={logOut} type="button">Logout</Button>;
}   