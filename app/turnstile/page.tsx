import TurnstileGate from '../components/TurnstileGate'

export default function TurnstilePage() {
  return (
    <main style={{ background: 'black', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 360 }}>
        <TurnstileGate />
      </div>
    </main>
  )
}
