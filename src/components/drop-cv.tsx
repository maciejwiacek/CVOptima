import React, { useState } from 'react'
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from './ui/shadcn-io/dropzone'

type DropCVProps = {
  onDrop: (text: string) => void
}

function DropCV({ onDrop }: DropCVProps) {
  const [loading, setLoading] = useState(false)

  const handleOnDrop = (files: File[]) => {
    const file = files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = async () => {
      setLoading(true)

      const base64 = (reader.result as string).split(',')[1]

      const response = await fetch('/api/parse-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pdfBase64: base64 }),
      })

      let data
      try {
        data = await response.json()
      } catch (e) {
        alert('Server returned invalid JSON. Please try again.')
        setLoading(false)
        return
      }

      setLoading(false)

      if (response.ok) {
        onDrop(data.text)
      } else {
        alert(data.error || 'Failed to parse PDF')
      }
    }
    reader.readAsDataURL(file)
  }

  return (
    <div>
      <Dropzone onDrop={handleOnDrop}>
        <DropzoneEmptyState />
        <DropzoneContent />
      </Dropzone>
    </div>
  )
}

export default DropCV
