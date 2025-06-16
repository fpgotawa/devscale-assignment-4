import { Card, Link } from "@heroui/react";
import moment from "moment";
import { Form } from "../../components/form";
import { getUsername } from "@/utils/getUsername";

export default async function Page() {
  const name = await getUsername();
  const res = await fetch(
    `https://v1.appbackend.io/v1/rows/5OA7HSy6xyS5/?filterKey=name&filterValue=${name}&sortBy=date&sortOrder=desc`
  );
  const { data: moods } = await res.json();

  return (
    <div>
      <div className="flex justify-center">
        <Card className="w-[50%] my-4 p-4 space-y-2 bg-background/60">
          <div className="text-xl">
            <h2>
              Hello, <span className="font-semibold">{name}</span>
            </h2>
            <h2>How are you feeling today?</h2>
          </div>
          <Form />
        </Card>
      </div>
      <div className="flex justify-center">
        <div className="w-[50%] grid grid-cols-7">
          {moods.map((mood) => {
            const moodColors = {
              Amazing: "bg-emerald-300",
              Awful: "bg-red-300",
            };

            const bgColor = moodColors[mood.feeling] || "bg-zinc-300";

            return (
              <Link href={`/moods/${mood._id}`} key={mood._id || mood.feeling}>
                <Card
                  className={`${bgColor} p-4 py-7 w-[70%] flex justify-center items-center rounded-full font-semibold text-small`}
                >
                  <div>{moment(mood.date).format("D MMM")}</div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
