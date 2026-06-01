import { fetchNoteById } from '../../../lib/api'
import NoteDetailsClient from './NoteDetails.client'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'

interface Props {
  params: Promise<{ noteId: string }>
}

const NoteDetailsPage = async ({ params }: Props) => {
  const { noteId } = await params

  const queryClient = new QueryClient()

  queryClient.prefetchQuery({
    queryKey: ['note', noteId],
    queryFn: () => fetchNoteById(noteId),
  })

  // const noteItem = await getNoteItem(noteId)

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {/* <NoteDetailsPageClient noteId={noteId} /> */}
        <NoteDetailsClient />
      </HydrationBoundary>
    </div>
  )
}

export default NoteDetailsPage