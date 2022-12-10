import Link from "next/link";

export default function Note({ note }: any) {
  const { id, title, created } = note;

  return (
    <Link href={`/notes/${id}`}>
      <div className="bg-yellow-300 p-4 drop-shadow-xl hover:drop-shadow-2xl ease-in-out duration-300 hover:-translate-y-2">
        <h2>{title}</h2>
        <p>{created}</p>
      </div>
    </Link>
  );
}
