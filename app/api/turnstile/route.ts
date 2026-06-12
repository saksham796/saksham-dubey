import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { token } = await req.json()
    const secret = process.env.TURNSTILE_SECRET_KEY
    if (!secret) {
      return NextResponse.json({ success: false, error: 'Turnstile secret not configured' }, { status: 500 })
    }

    const params = new URLSearchParams()
    params.append('secret', secret)
    params.append('response', token)

    const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: params,
    })

    const data = await verify.json()
    if (data.success) {
      const res = NextResponse.json({ success: true })
      res.cookies.set('turnstile', '1', { httpOnly: true, path: '/', maxAge: 60 * 60 * 24, secure: true, sameSite: 'lax' })
      return res
    }

    return NextResponse.json({ success: false, detail: data }, { status: 400 })
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 })
  }
}
