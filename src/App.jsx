import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'linear-gradient(to right, #6C48FC, #492BC3)',
      height: '100vh',
      width: '100vw',
    }}
    >
    <h1 style={{ fontFamily: 'Gascogne',fontSize: '32px',marginBottom: '7px' }}>Your Wellbeing Matters</h1>
    <p style={{fontSize: '18px', color: '#DDDDDD',marginTop: '0px'}}>Because self-care isn't selfish—it's essential.</p>
    </div>
  )
}

export default App
