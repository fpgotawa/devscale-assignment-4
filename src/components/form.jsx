"use client";

import {
  RadioGroup,
  Radio,
  Textarea,
  DatePicker,
  Button,
  addToast,
  Link,
} from "@heroui/react";
import { useActionState } from "react";
import { createMoodAction } from "../app/moods/action";
import { deleteMoodAction } from "../app/moods/[id]/action";
import { updateMoodAction } from "@/app/moods/[id]/edit/action";

export const Form = () => {
  const [state, action, pending] = useActionState(createMoodAction, null);

  return (
    <form action={action}>
      <div className="space-y-4">
        <RadioGroup name="feeling" orientation="horizontal">
          <Radio value="Amazing">Amazing</Radio>
          <Radio value="Neutral">Neutral</Radio>
          <Radio value="Awful">Awful</Radio>
        </RadioGroup>
        <Textarea
          name="note"
          className="w-full"
          placeholder="Tell me more about your day!"
        />
        <DatePicker name="date" className="w-full" label="Date" />
        <div className="flex justify-end">
          <Button
            disabled={pending}
            type="submit"
            color="primary"
            onPress={() => {
              addToast({
                title: "Thank you for telling me your day!",
              });
            }}
          >
            Post
          </Button>
        </div>
      </div>
      {state?.status === "error" && (
        <div className="text-red-500">{state?.message}</div>
      )}
    </form>
  );
};

export const DeleteBtn = ({ id }) => {
  return (
    <form action={deleteMoodAction}>
      <input hidden readOnly name="id" value={id} />
      <Button
        type="submit"
        color="danger"
        onPress={() => {
          addToast({
            title: "Your record has been deleted!",
          });
        }}
      >
        Delete
      </Button>
    </form>
  );
};

export const UpdateForm = ({ data }) => {
  return (
    <form action={updateMoodAction}>
      <input name="id" defaultValue={data._id} hidden readOnly />
      <input name="date" defaultValue={data.date} hidden readOnly />
      <div className="space-y-4">
        <RadioGroup
          name="feeling"
          orientation="horizontal"
          defaultValue={data.feeling}
        >
          <Radio value="Amazing">Amazing</Radio>
          <Radio value="Neutral">Neutral</Radio>
          <Radio value="Awful">Awful</Radio>
        </RadioGroup>
        <Textarea
          name="note"
          className="w-full"
          placeholder="Tell me more about your day!"
          defaultValue={data.note}
        />
        <div className="flex justify-between">
          <Link href={`/moods/${data._id}`}>
            <Button color="primary" variant="ghost">
              Back
            </Button>
          </Link>
          <Button
            type="submit"
            color="primary"
            onPress={() => {
              addToast({
                title: "Your day has been updated!",
              });
            }}
          >
            Update
          </Button>
        </div>
      </div>
    </form>
  );
};
