import { Card, Link, Button } from "@heroui/react";
import moment from "moment";
import { DeleteBtn } from "../../../components/form";

export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://v1.appbackend.io/v1/rows/5OA7HSy6xyS5/${id}`
  );
  const mood = await res.json();

  return (
    <div className="flex justify-center">
      <Card className="w-[50%] my-4 p-4 space-y-2 bg-background/60">
        <div className="font-bold m-auto text-2xl">
          {moment(mood.date).format("D MMMM YYYY")}
        </div>
        <div>
          This day I felt <span className="font-semibold">{mood.feeling}!</span>
        </div>
        <div>{mood.note}</div>
        <div className="flex justify-between">
          <Link href="/moods">
            <Button color="primary" variant="ghost">
              Back
            </Button>
          </Link>
          <div className="flex gap-2">
            <Link href={`/moods/${id}/edit`}>
              <Button>Edit</Button>
            </Link>
            <DeleteBtn id={id} />
          </div>
        </div>
      </Card>
    </div>
  );
}
