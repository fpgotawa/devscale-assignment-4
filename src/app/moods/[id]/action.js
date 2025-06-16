"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function deleteMoodAction(formData) {
  const moodId = formData.get("id");

  fetch("https://v1.appbackend.io/v1/rows/5OA7HSy6xyS5", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([moodId]),
  });

  revalidatePath("/moods");
  redirect("/moods");
}
