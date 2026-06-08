// import { fetchNoteById } from '../../../lib/api'
// import NoteDetailsClient from './NoteDetails.client'
// import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'

// interface Props {
//   params: Promise<{ id: string }>
// }

// const NoteDetailsPage = async ({ params }: Props) => {
//   const { id } = await params

//   const queryClient = new QueryClient()

//   queryClient.prefetchQuery({
//     queryKey: ['note', id],
//     queryFn: () => fetchNoteById(id),
//   })

//   // const noteItem = await getNoteItem(id)

//   return (
//     <div>
//       <HydrationBoundary state={dehydrate(queryClient)}>
//         {/* <NoteDetailsPageClient noteId={id} /> */}
//         <NoteDetailsClient />
//       </HydrationBoundary>
//     </div>
//   )
// }

// export default NoteDetailsPage

import { redirect } from 'next/navigation'

const Notes = async () => {
  redirect('/notes/filter/all')
}

export default Notes