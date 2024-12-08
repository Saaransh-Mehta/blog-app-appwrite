import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import 'dotenv/config'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
     <div className='text-4xl text-center flex justify-center'>
      Hello World
     </div>
    </>
  )
}

export default App
