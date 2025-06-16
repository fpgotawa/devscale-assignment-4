"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function loginAction(_, formData) {
  const cookieStore = await cookies();
  const name = formData.get("name");

  if (!name) {
    return {
      status: "error",
      message: "Enter your name to proceed",
    };
  }

  cookieStore.set("username", name);

  redirect("/moods");
}
