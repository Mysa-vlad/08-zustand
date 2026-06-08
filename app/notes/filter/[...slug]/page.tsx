import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { fetchNotes, type NoteTag } from '@/lib/api'
import NotesClient from './Notes.client' 

interface Props {
  params: Promise<{ slug: string[] }>
}

const NotesFilterPage = async ({ params }: Props) => {
  const res = await params
  const tag = res.slug?.[0] || 'all'


  const currentTag = tag === 'all' ? undefined : (tag as NoteTag);

  const queryClient = new QueryClient()


  await queryClient.prefetchQuery({
    queryKey: ['notes', currentTag],
    queryFn: () => fetchNotes({ tag: currentTag }),
  })

  return (

    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  )
}

export default NotesFilterPage