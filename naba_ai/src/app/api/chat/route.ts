import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json()
    console.log('User prompt:', prompt)

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      console.error('Missing OpenAI API key')
      return NextResponse.json({ error: 'Missing API key' }, { status: 500 })
    }

    const apiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      }),
    })

    const data = await apiRes.json()
    console.log('OpenAI response:', data)

    if (!apiRes.ok) {
      console.error('OpenAI API error:', data)
      return NextResponse.json({ error: data.error?.message || 'OpenAI API error' }, { status: 500 })
    }

    return NextResponse.json({ reply: data.choices?.[0]?.message?.content || 'No reply' })
  } catch (err: any) {
    console.error('Internal Server Error:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
