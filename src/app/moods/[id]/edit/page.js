import { Card, RadioGroup, Radio, Textarea, Link, Button } from "@heroui/react";
import moment from "moment";
import { updateMoodAction } from "./action";
import { UpdateForm } from "@/components/form";

export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://v1.appbackend.io/v1/rows/5OA7HSy6xyS5/${id}`
  );
  const mood = await res.json();

  console.log(mood);

  return (
    <div className="flex justify-center">
      <Card className="w-[50%] my-4 p-4 space-y-2 bg-background/60">
        <div className="text-xl m-auto mb-4">
          Update what you are feeling on{" "}
          {moment(mood.date).format("D MMMM YYYY")}
        </div>
        <UpdateForm data={mood} />
        {/* <form action={updateMoodAction}>
          <input name="id" defaultValue={id} hidden readOnly />
          <input name="date" defaultValue={mood.date} hidden readOnly />
          <div className="space-y-4">
            <RadioGroup
              name="feeling"
              orientation="horizontal"
              defaultValue={mood.feeling}
            >
              <Radio value="Amazing">Amazing</Radio>
              <Radio value="Neutral">Neutral</Radio>
              <Radio value="Awful">Awful</Radio>
            </RadioGroup>
            <Textarea
              name="note"
              className="w-full"
              placeholder="Tell me more about your day!"
              defaultValue={mood.note}
            />
            <div className="flex justify-between">
              <Link href={`/moods/${id}`}>
                <Button color="primary" variant="ghost">
                  Back
                </Button>
              </Link>
              <Button type="submit" color="primary">
                Update
              </Button>
            </div>
          </div>
        </form> */}
      </Card>
    </div>
  );
}
