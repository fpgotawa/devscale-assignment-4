"use server";

import { getUsername } from "@/utils/getUsername";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateMoodAction(formData) {
  const _id = formData.get("id");
  const date = formData.get("date");
  const feeling = formData.get("feeling");
  const note = formData.get("note");
  const name = await getUsername();

  fetch("https://v1.appbackend.io/v1/rows/5OA7HSy6xyS5", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id,
      date,
      feeling,
      note,
      name,
    }),
  });

  revalidatePath(`/moods/${_id}`);
  redirect(`/moods/${_id}`);
}
