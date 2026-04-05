// "use client";

// export default function LoginForm() {
//   return (
//     <>
//       <form action="/login" className="flex justify-center flex-col">
//         <input
//           className="border w-87.5 mx-auto mb-4 p-2 rounded"
//           type="text"
//           name="username"
//           placeholder="Username"
//           autoComplete="username"
//         />
//         <input
//           className="border w-87.5 mx-auto mb-4 p-2 rounded"
//           type="password"
//           name="password"
//           placeholder="Password"
//           autoComplete="current-password"
//         />
//         <button type="submit">Login</button>
//       </form>
//     </>
//   );
// }

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

export default function LoginForm() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
      console.log(data["username"]);
    });

    

    // alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <Form className="flex w-96 flex-col gap-4 mx-auto" onSubmit={onSubmit}>
      <TextField isRequired name="username" type="text">
        <Label>Username</Label>
        <Input placeholder="username123" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
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
  );
}
