import React from 'react'

export default function Score({ score }) {
  const isWinner = score > 2
  return (
    <div style={{ padding: '10px', border: '2px solid blue' }}>
      SCORE:
      {(isWinner) ? <span>You win</span> : <span>Keep going</span>}
    </div>
  )
}