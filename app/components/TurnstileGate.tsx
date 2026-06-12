"use client"

import { useEffect, useState } from 'react'

export default function TurnstileGate() {
  const [busy, setBusy] = useState(false)
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''

  useEffect(() => {
    if (!document.getElementById('cf-turnstile-script')) {
      const s = document.createElement('script')
      s.id = 'cf-turnstile-script'
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
      s.async = true
      document.head.appendChild(s)
    }

    ;(window as any).onTurnstileSuccess = async (token: string) => {
      setBusy(true)
      try {
        const r = await fetch('/api/turnstile', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        })
        const j = await r.json()
        if (j.success) window.location.href = '/'
        else alert('Turnstile verification failed')
      } catch (e) {
        console.error(e)
        alert('Verification error')
      } finally {
        setBusy(false)
      }
    }
  }, [])

  return (
    <div style={{ color: 'white', textAlign: 'center' }}>
      <div style={{ margin: '24px auto' }}>
        <div className="cf-turnstile" data-sitekey={siteKey} data-callback="onTurnstileSuccess"></div>
      </div>
      {busy && <div>Verifying…</div>}
    </div>
  )
}
