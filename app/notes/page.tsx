import CreateNote from "../../components/CreateNote";
import Note from "../../components/Note";
import { getAllNotes } from "../../functions/pocketbase";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

export default async function NotesPage() {
  const notes = await getAllNotes();

  return (
    <div className="flex flex-col gap-12 p-12">
      <h1 className="text-3xl font-bold text-center">Notes</h1>
      {notes.length > 0 && (
        <div className="max-w-5xl flex flex-wrap justify-between gap-12">
          {notes.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </div>
      )}
      {notes.length === 0 && <p className="text-center">No notes found.</p>}
      <CreateNote />
    </div>
  );
}
