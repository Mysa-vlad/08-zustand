'use client'
import css from './NoteDetails.module.css'
import { fetchNoteById } from '../../../lib/api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

// const NoteDetailsPageClient = ({noteId}:Props) => {
const NoteDetailsClient = () => {
  const { noteId } = useParams<{ noteId: string }>()

  const { data: noteItem } = useQuery({
    queryKey: ['note', noteId],
    queryFn: () => fetchNoteById(noteId),
    refetchOnMount: false,
  })
  //
  return (
    noteItem && (
      <>
 <div className={css.container}>
	<div className={css.item}>
	  <div className={css.header}>
	    <h2>Note title</h2>
	  </div>
      <p className={css.tag}>{noteItem.tag}</p>
	  <p className={css.content}>Note content</p>
	  <p className={css.date}>Created date</p>
	</div>
</div>

      </>
    )
  )
}

export default NoteDetailsClient