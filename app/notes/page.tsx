// import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
// import { fetchNotes } from '../../lib/api'; 
// import NotesClient from './Notes.client';

// export default async function NotesPage() {
//   const queryClient = new QueryClient();
//   const defaultPage = 1;
//   const perPage = 12;
//   const defaultSearch = '';


//   await queryClient.prefetchQuery({
//     queryKey: ['notes', defaultPage, defaultSearch],
//     queryFn: () => fetchNotes({ page: defaultPage, perPage, search: defaultSearch }),
//   });

//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <NotesClient />
//     </HydrationBoundary>
//   );
// }
import { redirect } from 'next/navigation'

const Notes = async () => {
  redirect('/notes/filter/all')
}

export default Notes