'use client'
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getNotesByTag, type ResponseNoteList } from "@/lib/api";
import Link from "next/link";
import css from "../../../notes/NotesPage.module.css";

export default function NotesFilterClient() {
  const { slug } = useParams<{ slug: string[] }>();
  const tag = slug?.[0] || 'all';

  const { data: noteResponse, isLoading, isError } = useQuery({
    queryKey: ["notes-filter", tag],
    queryFn: () => getNotesByTag(tag === 'all' ? undefined : tag),
  });

  if (isLoading) {
    return <div>Loading notes, please wait...</div>;
  }

  if (isError) {
    return <div>Error loading notes. Please try again.</div>;
  }

  const notes = noteResponse?.notes ?? [];

  return (
    <div className={css.container}>
      <h2>Notes {tag !== 'all' ? `- ${tag}` : ''}</h2>
      {notes && notes.length > 0 ? (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <Link href={`/notes/${note.id}`}>{note.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No notes found</p>
      )}
    </div>
  );
}
