import { getNote } from "../../../functions/pocketbase";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 10,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

export default async function NotePage({ params }: any) {
  const { id, title, content, created } = await getNote(params.id);

  return (
    <div className="max-w-sm m-auto flex flex-col gap-8 py-8">
      <h1 className="font-bold text-3xl">Note {id}</h1>
      <div>
        <h3 className="font-bold">{title}</h3>
        <h5>{content}</h5>
        <hr className="my-4" />
        <p>{created}</p>
      </div>
    </div>
  );
}
