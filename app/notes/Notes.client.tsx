'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import type { NoteHttpResponse } from '@/lib/api';
import Loading from '../loading';
import Error from './error';

interface NotesClientProps {
  query: string;
  page: number;
}

const NotesClient = ({ query, page }: NotesClientProps) => {
  const { data, isLoading, error } = useQuery<NoteHttpResponse>({
    queryKey: ['notes', page, query],
    queryFn: () => fetchNotes({ page, query }),
  });

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;

  const notes = data?.notes ?? [];

  return (
    <ul>
      {notes.length > 0 ? (
        notes.map(note => <li key={note.id}>{note.title}</li>)
      ) : (
        <li>No notes found</li>
      )}
    </ul>
  );
};

export default NotesClient;
