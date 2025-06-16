"use server";

import { getUsername } from "@/utils/getUsername";
import { revalidatePath } from "next/cache";

export async function createMoodAction(_, formData) {
  const date = formData.get("date");
  const feeling = formData.get("feeling");
  const note = formData.get("note");
  const name = await getUsername();

  if (!feeling) {
    return {
      status: "error",
      message: "Let me know how you're feeling today!",
    };
  }

  if (!date) {
    return {
      status: "error",
      message: "Please select the date",
    };
  }

  await fetch("https://v1.appbackend.io/v1/rows/5OA7HSy6xyS5", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([{ date, feeling, note, name }]),
  });

  revalidatePath("/mood");
}
