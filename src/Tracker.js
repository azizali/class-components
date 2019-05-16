import React from 'react'

export default function Tracker({ count, logoutCb }) {
  return (
    <div style={{ padding: '10px', border: '2px solid green' }}>
      TRACKER: {count}
      <button onClick={logoutCb}>Log me out</button>
    </div>
  )
}