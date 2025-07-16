import { Inbox } from "lucide-react";

type Props = {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  page?: string;
};

export default function NoContent({
  title = "No Content",
  message = "There's nothing to show here yet. Please check back later.",
  icon,
  page,
}: Props) {
  return (
    <div className="flex flex-col gap-12 items-center justify-center text-center p-10 text-gray-500">
      <h1 className="text-3xl font-bold self-start">
        {page ? page : "No Content"}
      </h1>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4 text-green-600">
          {icon || <Inbox className="w-16 h-16" />}
        </div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}
