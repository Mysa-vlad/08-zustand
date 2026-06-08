import React from 'react'

interface Props {
  children: React.ReactNode
  parallel: React.ReactNode
}
const NoteListLayout = ({ children, parallel }: Props) => {
  return (
    <div >
      {parallel}
      {children}
    </div>
  )
}

export default NoteListLayout