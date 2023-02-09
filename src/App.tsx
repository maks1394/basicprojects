import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import { ReviewType } from './data/data'
import { VisualClock } from './components/VisualClock/VisualClock'
import { Clock } from './components/Clock/Clock'

// const url = 'https://course-api.com/react-tours-project'

// type PropsType = {
//   data: ReviewType[]
// }

function usePrevious(value: any) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

function App() {
  const [count, setCount] = useState(0)
  const ref = useRef<number | undefined>()
  const prevCount = ref.current
  useEffect(() => {
    ref.current = count
    console.log(ref.current)
    if (inputRef.current) {
      inputRef.current.value = String(count)
    }
  }, [count])
  console.log('before useEffect ', ref.current)
  const inputRef = useRef<HTMLInputElement | null>(null)
  return (
    <div className="App">
      <h2>{count}</h2>
      <h2>{prevCount}</h2>
      <button onClick={() => setCount((count) => count + 1)}>Click</button>
      <input ref={inputRef} />
    </div>
  )
}

export default App
