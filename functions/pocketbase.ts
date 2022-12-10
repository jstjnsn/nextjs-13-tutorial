import PocketBase from "pocketbase";

const dbUrl =
  process.env.NODE_ENV === "production"
    ? process.env.DB_URL
    : "http://localhost:8090";

export async function getAllNotes() {
  const pb = new PocketBase(dbUrl);

  return await pb.collection("notes").getFullList(200, {
    sort: "-created",
  });
}

export async function getNote(noteId: string) {
  const pb = new PocketBase(dbUrl);

  return await pb.collection("notes").getOne(noteId);
}

export async function createNote(note: any) {
  const pb = new PocketBase(dbUrl);

  return await pb.collection("notes").create(note);
}
