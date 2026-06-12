import TurnstileGate from '../components/TurnstileGate'

export default function TurnstilePage() {
  return (
    <main style={{ background: 'black', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
      <div style={{ width: 420, textAlign: 'center', padding: '24px' }}>
        <h1 style={{ marginBottom: 8 }}>Site security verification</h1>
        <p style={{ marginTop: 0, marginBottom: 18, color: '#ddd', fontSize: 14 }}>
          To protect this site and its visitors we use a lightweight bot defense. Please complete the verification below
          to continue. This helps block automated abuse while preserving your privacy.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 360 }}>
            <TurnstileGate />
          </div>
        </div>
        <p style={{ marginTop: 18, color: '#888', fontSize: 12 }}>
          By completing the challenge you agree to access this site. No tracking cookies are set by this widget.
        </p>
      </div>
    </main>
  )
}
