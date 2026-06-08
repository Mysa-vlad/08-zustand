'use client'

import { useParams, useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { fetchNoteById } from '@/lib/api'

// Імпортуємо ваш універсальний компонент Modal
import Modal from '@/components/Modal/Modal' 

export default function NotePreviewClient() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  // Отримуємо дані нотатки через React Query
  const { data: note, isLoading, isError } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    enabled: !!id,
    refetchOnMount: true,
  })

  // Функція для закриття модалки та повернення на попередню сторінку
  const handleClose = () => {
    router.back()
  }

  // Огортаємо весь інтерфейс прев'ю в компонент Modal
  return (
    <Modal onClose={handleClose}>
      <div>
        {isLoading && <p>Loading note details...</p>}
        {isError && <p>Error loading note details.</p>}

        {note && (
          <div>
            {/* Кнопка закриття модалки за допомогою router.back() */}
            <button 
              onClick={handleClose}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                cursor: 'pointer'
              }}
            >
              ✕ Close
            </button>

            {/* Вміст вашої нотатки */}
            <article>
              <h1 style={{ marginTop: '20px' }}>{note.title}</h1>
              <p style={{ color: '#666', fontSize: '14px' }}>Tag: {note.tag}</p>
              <hr />
              <div style={{ marginTop: '15px', whiteSpace: 'pre-wrap' }}>
                {note.content}
              </div>
            </article>
          </div>
        )}
      </div>
    </Modal>
  )
}