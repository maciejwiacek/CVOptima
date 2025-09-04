import { NextResponse } from 'next/server'
import pdfParse from 'pdf-parse'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const pdfBase64 = body.pdfBase64

    if (!pdfBase64) {
      return NextResponse.json({ error: 'Missing pdfBase64' }, { status: 400 })
    }

    const dataBuffer = Buffer.from(pdfBase64, 'base64')
    const data = await pdfParse(dataBuffer)

    return NextResponse.json({ text: data.text })
  } catch (error: any) {
    console.error('PDF parse error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
