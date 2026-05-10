"use client";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import useLogin from "../hooks/useLogin";

export default function LoginForm() {
  const loginMutation = useLogin();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    loginMutation.mutateAsync({
      username: data["username"],
      password: data["password"],
    });
  };

  return (
    <>
      <Form className="flex w-96 flex-col gap-4 mx-auto" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="username"
          type="text"
          autoComplete="username"
        >
          <Label>Username</Label>
          <Input placeholder="username123" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          autoComplete="current-password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }

            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>Must be at least 8 characters and 1 number</Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
      {loginMutation.isError && (
        <p className="text-red-500 text-center mt-10 text-2xl">
          {loginMutation.error.message}
        </p>
      )}
    </>
  );
}
