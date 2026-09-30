import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Player from './components/Player'
import TimerChallenge from './components/TimerChallenge'

function App() {
  return (
    <>
      <Player />
      <div className="row g-3 m-2">

        <div className="col-12 col-md-6">
            <TimerChallenge title="Easy" targetTime={1} />
        </div>

        <div className="col-12 col-md-6">
            <TimerChallenge title="Moderate" targetTime={5} />
        </div>

        <div className="col-12 col-md-6">
            <TimerChallenge title="Hard" targetTime={10} />
        </div>

        <div className="col-12 col-md-6">
            <TimerChallenge title="Complex" targetTime={15} />
        </div>
    </div>
    </>
  )
}

export default App
