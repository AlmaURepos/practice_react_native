import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isHighLighted, setIsHighlighted] = useState(false);

  return (
    <>
      <button onClick={()=> setIsHighlighted(!isHighLighted)}>Toggle Highlight</button>
      <p className={isHighLighted ? 'highlight' : ''}>text will be hightlihgted</p>
    </>
  )
}

export default App
