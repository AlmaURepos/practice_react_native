import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import ProfileCard from './ProfileCard'
import Greeting from './Greeting'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Greeting />
        <ProfileCard />
      </div>
    </>
  )
}

export default App
