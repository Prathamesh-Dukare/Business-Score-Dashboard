import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      hello
      <h1 class="text-3xl font-bold underline text-red-300">
        Hello world!
      </h1>

    </div>
  )
}

export default App
