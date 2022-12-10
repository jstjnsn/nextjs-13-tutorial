import PocketBase from "pocketbase";

export async function getAllNotes() {
  const pb = new PocketBase("http://127.0.0.1:8090");

  return await pb.collection("notes").getFullList(200, {
    sort: "-created",
  });
}

export async function getNote(noteId: string) {
  const pb = new PocketBase("http://127.0.0.1:8090");

  return await pb.collection("notes").getOne(noteId);
}

export async function createNote(note: any) {
  const pb = new PocketBase("http://127.0.0.1:8090");

  return await pb.collection("notes").create(note);
}
