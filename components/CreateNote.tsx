"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createNote } from "../functions/pocketbase";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const create = async () => {
    await createNote({ title, content });

    setTitle("");
    setContent("");

    router.refresh();
  };

  return (
    <form onSubmit={create} className="flex flex-col w-1/3 m-auto">
      <h3 className="font-bold mb-2">Create a new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit" className="p-4 bg-green-500">
        Create Note
      </button>
    </form>
  );
}
