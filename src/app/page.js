"use client";

import { Button, Card, Input } from "@heroui/react";
import { useActionState } from "react";
import { loginAction } from "./action";

export default function Home() {
  const [state, action, pending] = useActionState(loginAction, null);

  return (
    <main className="h-screen flex justify-center items-center">
      <Card isBlurred className="p-8 space-y-4 bg-background/60">
        <h2 className="text-xl font-bold font">
          Hello, would you mind telling me your name?
        </h2>
        <form className="space-y-1" action={action}>
          <Input name="name" label="Name" type="text" />
          <Button
            disabled={pending}
            type="submit"
            className="w-full"
            color="primary"
          >
            Log In
          </Button>
          {state?.status === "error" && (
            <div className="text-red-500">{state?.message}</div>
          )}
        </form>
      </Card>
    </main>
  );
}
