'use client'

import DropCV from '@/components/drop-cv'
import { useState } from 'react'

export default function Home() {
  const [text, setText] = useState('')

  const handleOnDrop = (text: string) => {
    setText(text)
  }

  return (
    <main>
      <DropCV onDrop={handleOnDrop} />

      <div className='p-4'>
        <h2 className='text-2xl font-bold mb-4'>Extracted Text:</h2>
        <pre className='whitespace-pre-wrap bg-gray-100 p-4 rounded'>
          {text}
        </pre>
      </div>
    </main>
  )
}
