import axios from 'axios';
import type { Note, NewNote } from '@/lib/types'

interface NoteHttpResponse {
  notes: Note[];
  totalPages: number;
}

interface FetchNotesProps {
  query: string;
  page: number;
}

const api = axios.create({
  baseURL: 'https://notehub-public.goit.study/api/',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});

export async function fetchNotes({query, page}: FetchNotesProps): Promise<NoteHttpResponse> {
  const response = await api.get<NoteHttpResponse>('/notes', {
    params: {
      search: query,
      page,
      perPage: 12
    }
  });
  
  return response.data;
}

export async function createNote(newNote: NewNote): Promise<Note> {
  const response = await api.post<Note>('/note', newNote);
  return response.data;
}

export async function deleteNote(id: string): Promise<Note> {
  const response = await api.delete<Note>(`/notes/${id}`);
  return response.data;
}