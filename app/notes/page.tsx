import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

interface NotePageProps {
  SearchParams: { query: string; page: number };
}

const NotesPage = async ({ SearchParams }: NotePageProps) => {
  const query = SearchParams.query || '';
  const page = SearchParams.page;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', { page, query }],
    queryFn: () => fetchNotes({ page, query }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient query={query} page={page} />
    </HydrationBoundary>
  );
};

export default NotesPage;
