import React from 'react'

export default function Promotion(props) {
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '2rem auto',
        backgroundColor: props.config.theme.colors.primary,
        color: '#fff',
        padding: '5rem 2rem',
        borderRadius: '10px',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {props.children}
      </div>
    </div>
  )
}
