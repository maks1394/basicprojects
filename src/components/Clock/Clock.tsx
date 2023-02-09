// @flow
import * as React from 'react'
import { useEffect, useState } from 'react'

type Props = {}
export const Clock = (props: Props) => {
  const [date, setDate] = useState(() => {
    return new Date(Date.now())
  })
  useEffect(() => {
    let id = setTimeout(function tick() {
      setDate(() => new Date())
      id = setTimeout(tick, 1000)
    }, 1000)
    return () => clearTimeout(id)
  }, [])

  const stringDate = date.toLocaleTimeString()

  return (
    <div>
      <h2 style={{ color: '#bc5205', fontSize: '50px' }}>{stringDate}</h2>
    </div>
  )
}
